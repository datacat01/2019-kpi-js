/*! Select2 4.0.5 | https://github.com/select2/select2/blob/master/LICENSE.md */ ! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = function(b, c) {
        return void 0 === c && (c = "undefined" != typeof window ? require("jquery") : require("jquery")(b)), a(c), c
    } : a(jQuery)
}(function(a) {
    var b = function() {
            if (a && a.fn && a.fn.select2 && a.fn.select2.amd) var b = a.fn.select2.amd;
            var b;
            return function() {
                    if (!b || !b.requirejs) {
                        b ? c = b : b = {};
                        var a, c, d;
                        ! function(b) {
                            function e(a, b) {
                                return v.call(a, b)
                            }

                            function f(a, b) {
                                var c, d, e, f, g, h, i, j, k, l, m, n, o = b && b.split("/"),
                                    p = t.map,
                                    q = p && p["*"] || {};
                                if (a) {
                                    for (a = a.split("/"), g = a.length - 1, t.nodeIdCompat && x.test(a[g]) && (a[g] = a[g].replace(x, "")), "." === a[0].charAt(0) && o && (n = o.slice(0, o.length - 1), a = n.concat(a)), k = 0; k < a.length; k++)
                                        if ("." === (m = a[k])) a.splice(k, 1), k -= 1;
                                        else if (".." === m) {
                                        if (0 === k || 1 === k && ".." === a[2] || ".." === a[k - 1]) continue;
                                        k > 0 && (a.splice(k - 1, 2), k -= 2)
                                    }
                                    a = a.join("/")
                                }
                                if ((o || q) && p) {
                                    for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                                        if (d = c.slice(0, k).join("/"), o)
                                            for (l = o.length; l > 0; l -= 1)
                                                if ((e = p[o.slice(0, l).join("/")]) && (e = e[d])) {
                                                    f = e, h = k;
                                                    break
                                                } if (f) break;
                                        !i && q && q[d] && (i = q[d], j = k)
                                    }!f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"))
                                }
                                return a
                            }

                            function g(a, c) {
                                return function() {
                                    var d = w.call(arguments, 0);
                                    return "string" != typeof d[0] && 1 === d.length && d.push(null), o.apply(b, d.concat([a, c]))
                                }
                            }

                            function h(a) {
                                return function(b) {
                                    return f(b, a)
                                }
                            }

                            function i(a) {
                                return function(b) {
                                    r[a] = b
                                }
                            }

                            function j(a) {
                                if (e(s, a)) {
                                    var c = s[a];
                                    delete s[a], u[a] = !0, n.apply(b, c)
                                }
                                if (!e(r, a) && !e(u, a)) throw new Error("No " + a);
                                return r[a]
                            }

                            function k(a) {
                                var b, c = a ? a.indexOf("!") : -1;
                                return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a]
                            }

                            function l(a) {
                                return a ? k(a) : []
                            }

                            function m(a) {
                                return function() {
                                    return t && t.config && t.config[a] || {}
                                }
                            }
                            var n, o, p, q, r = {},
                                s = {},
                                t = {},
                                u = {},
                                v = Object.prototype.hasOwnProperty,
                                w = [].slice,
                                x = /\.js$/;
                            p = function(a, b) {
                                var c, d = k(a),
                                    e = d[0],
                                    g = b[1];
                                return a = d[1], e && (e = f(e, g), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(g)) : f(a, g) : (a = f(a, g), d = k(a), e = d[0], a = d[1], e && (c = j(e))), {
                                    f: e ? e + "!" + a : a,
                                    n: a,
                                    pr: e,
                                    p: c
                                }
                            }, q = {
                                require: function(a) {
                                    return g(a)
                                },
                                exports: function(a) {
                                    var b = r[a];
                                    return void 0 !== b ? b : r[a] = {}
                                },
                                module: function(a) {
                                    return {
                                        id: a,
                                        uri: "",
                                        exports: r[a],
                                        config: m(a)
                                    }
                                }
                            }, n = function(a, c, d, f) {
                                var h, k, m, n, o, t, v, w = [],
                                    x = typeof d;
                                if (f = f || a, t = l(f), "undefined" === x || "function" === x) {
                                    for (c = !c.length && d.length ? ["require", "exports", "module"] : c, o = 0; o < c.length; o += 1)
                                        if (n = p(c[o], t), "require" === (k = n.f)) w[o] = q.require(a);
                                        else if ("exports" === k) w[o] = q.exports(a), v = !0;
                                    else if ("module" === k) h = w[o] = q.module(a);
                                    else if (e(r, k) || e(s, k) || e(u, k)) w[o] = j(k);
                                    else {
                                        if (!n.p) throw new Error(a + " missing " + k);
                                        n.p.load(n.n, g(f, !0), i(k), {}), w[o] = r[k]
                                    }
                                    m = d ? d.apply(r[a], w) : void 0, a && (h && h.exports !== b && h.exports !== r[a] ? r[a] = h.exports : m === b && v || (r[a] = m))
                                } else a && (r[a] = d)
                            }, a = c = o = function(a, c, d, e, f) {
                                if ("string" == typeof a) return q[a] ? q[a](c) : j(p(a, l(c)).f);
                                if (!a.splice) {
                                    if (t = a, t.deps && o(t.deps, t.callback), !c) return;
                                    c.splice ? (a = c, c = d, d = null) : a = b
                                }
                                return c = c || function() {}, "function" == typeof d && (d = e, e = f), e ? n(b, a, c, d) : setTimeout(function() {
                                    n(b, a, c, d)
                                }, 4), o
                            }, o.config = function(a) {
                                return o(a)
                            }, a._defined = r, d = function(a, b, c) {
                                if ("string" != typeof a) throw new Error("See almond README: incorrect module build, no module name");
                                b.splice || (c = b, b = []), e(r, a) || e(s, a) || (s[a] = [a, b, c])
                            }, d.amd = {
                                jQuery: !0
                            }
                        }(), b.requirejs = a, b.require = c, b.define = d
                    }
                }(), b.define("almond", function() {}), b.define("jquery", [], function() {
                    var b = a || $;
                    return null == b && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), b
                }), b.define("select2/utils", ["jquery"], function(a) {
                    function b(a) {
                        var b = a.prototype,
                            c = [];
                        for (var d in b) {
                            "function" == typeof b[d] && ("constructor" !== d && c.push(d))
                        }
                        return c
                    }
                    var c = {};
                    c.Extend = function(a, b) {
                        function c() {
                            this.constructor = a
                        }
                        var d = {}.hasOwnProperty;
                        for (var e in b) d.call(b, e) && (a[e] = b[e]);
                        return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
                    }, c.Decorate = function(a, c) {
                        function d() {
                            var b = Array.prototype.unshift,
                                d = c.prototype.constructor.length,
                                e = a.prototype.constructor;
                            d > 0 && (b.call(arguments, a.prototype.constructor), e = c.prototype.constructor), e.apply(this, arguments)
                        }

                        function e() {
                            this.constructor = d
                        }
                        var f = b(c),
                            g = b(a);
                        c.displayName = a.displayName, d.prototype = new e;
                        for (var h = 0; h < g.length; h++) {
                            var i = g[h];
                            d.prototype[i] = a.prototype[i]
                        }
                        for (var j = (function(a) {
                                var b = function() {};
                                a in d.prototype && (b = d.prototype[a]);
                                var e = c.prototype[a];
                                return function() {
                                    return Array.prototype.unshift.call(arguments, b), e.apply(this, arguments)
                                }
                            }), k = 0; k < f.length; k++) {
                            var l = f[k];
                            d.prototype[l] = j(l)
                        }
                        return d
                    };
                    var d = function() {
                        this.listeners = {}
                    };
                    return d.prototype.on = function(a, b) {
                        this.listeners = this.listeners || {}, a in this.listeners ? this.listeners[a].push(b) : this.listeners[a] = [b]
                    }, d.prototype.trigger = function(a) {
                        var b = Array.prototype.slice,
                            c = b.call(arguments, 1);
                        this.listeners = this.listeners || {}, null == c && (c = []), 0 === c.length && c.push({}), c[0]._type = a, a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                    }, d.prototype.invoke = function(a, b) {
                        for (var c = 0, d = a.length; c < d; c++) a[c].apply(this, b)
                    }, c.Observable = d, c.generateChars = function(a) {
                        for (var b = "", c = 0; c < a; c++) {
                            b += Math.floor(36 * Math.random()).toString(36)
                        }
                        return b
                    }, c.bind = function(a, b) {
                        return function() {
                            a.apply(b, arguments)
                        }
                    }, c._convertData = function(a) {
                        for (var b in a) {
                            var c = b.split("-"),
                                d = a;
                            if (1 !== c.length) {
                                for (var e = 0; e < c.length; e++) {
                                    var f = c[e];
                                    f = f.substring(0, 1).toLowerCase() + f.substring(1), f in d || (d[f] = {}), e == c.length - 1 && (d[f] = a[b]), d = d[f]
                                }
                                delete a[b]
                            }
                        }
                        return a
                    }, c.hasScroll = function(b, c) {
                        var d = a(c),
                            e = c.style.overflowX,
                            f = c.style.overflowY;
                        return (e !== f || "hidden" !== f && "visible" !== f) && ("scroll" === e || "scroll" === f || (d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth))
                    }, c.escapeMarkup = function(a) {
                        var b = {
                            "\\": "&#92;",
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;",
                            "/": "&#47;"
                        };
                        return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function(a) {
                            return b[a]
                        })
                    }, c.appendMany = function(b, c) {
                        if ("1.7" === a.fn.jquery.substr(0, 3)) {
                            var d = a();
                            a.map(c, function(a) {
                                d = d.add(a)
                            }), c = d
                        }
                        b.append(c)
                    }, c
                }), b.define("select2/results", ["jquery", "./utils"], function(a, b) {
                    function c(a, b, d) {
                        this.$element = a, this.data = d, this.options = b, c.__super__.constructor.call(this)
                    }
                    return b.Extend(c, b.Observable), c.prototype.render = function() {
                        var b = a('<ul class="select2-results__options" role="tree"></ul>');
                        return this.options.get("multiple") && b.attr("aria-multiselectable", "true"), this.$results = b, b
                    }, c.prototype.clear = function() {
                        this.$results.empty()
                    }, c.prototype.displayMessage = function(b) {
                        var c = this.options.get("escapeMarkup");
                        this.clear(), this.hideLoading();
                        var d = a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                            e = this.options.get("translations").get(b.message);
                        d.append(c(e(b.args))), d[0].className += " select2-results__message", this.$results.append(d)
                    }, c.prototype.hideMessages = function() {
                        this.$results.find(".select2-results__message").remove()
                    }, c.prototype.append = function(a) {
                        this.hideLoading();
                        var b = [];
                        if (null == a.results || 0 === a.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", {
                            message: "noResults"
                        }));
                        a.results = this.sort(a.results);
                        for (var c = 0; c < a.results.length; c++) {
                            var d = a.results[c],
                                e = this.option(d);
                            b.push(e)
                        }
                        this.$results.append(b)
                    }, c.prototype.position = function(a, b) {
                        b.find(".select2-results").append(a)
                    }, c.prototype.sort = function(a) {
                        return this.options.get("sorter")(a)
                    }, c.prototype.highlightFirstItem = function() {
                        var a = this.$results.find(".select2-results__option[aria-selected]"),
                            b = a.filter("[aria-selected=true]");
                        b.length > 0 ? b.first().trigger("mouseenter") : a.first().trigger("mouseenter"), this.ensureHighlightVisible()
                    }, c.prototype.setClasses = function() {
                        var b = this;
                        this.data.current(function(c) {
                            var d = a.map(c, function(a) {
                                return a.id.toString()
                            });
                            b.$results.find(".select2-results__option[aria-selected]").each(function() {
                                var b = a(this),
                                    c = a.data(this, "data"),
                                    e = "" + c.id;
                                null != c.element && c.element.selected || null == c.element && a.inArray(e, d) > -1 ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false")
                            })
                        })
                    }, c.prototype.showLoading = function(a) {
                        this.hideLoading();
                        var b = this.options.get("translations").get("searching"),
                            c = {
                                disabled: !0,
                                loading: !0,
                                text: b(a)
                            },
                            d = this.option(c);
                        d.className += " loading-results", this.$results.prepend(d)
                    }, c.prototype.hideLoading = function() {
                        this.$results.find(".loading-results").remove()
                    }, c.prototype.option = function(b) {
                        var c = document.createElement("li");
                        c.className = "select2-results__option";
                        var d = {
                            role: "treeitem",
                            "aria-selected": "false"
                        };
                        b.disabled && (delete d["aria-selected"], d["aria-disabled"] = "true"), null == b.id && delete d["aria-selected"], null != b._resultId && (c.id = b._resultId), b.title && (c.title = b.title), b.children && (d.role = "group", d["aria-label"] = b.text, delete d["aria-selected"]);
                        for (var e in d) {
                            var f = d[e];
                            c.setAttribute(e, f)
                        }
                        if (b.children) {
                            var g = a(c),
                                h = document.createElement("strong");
                            h.className = "select2-results__group";
                            a(h);
                            this.template(b, h);
                            for (var i = [], j = 0; j < b.children.length; j++) {
                                var k = b.children[j],
                                    l = this.option(k);
                                i.push(l)
                            }
                            var m = a("<ul></ul>", {
                                class: "select2-results__options select2-results__options--nested"
                            });
                            m.append(i), g.append(h), g.append(m)
                        } else this.template(b, c);
                        return a.data(c, "data", b), c
                    }, c.prototype.bind = function(b, c) {
                        var d = this,
                            e = b.id + "-results";
                        this.$results.attr("id", e), b.on("results:all", function(a) {
                            d.clear(), d.append(a.data), b.isOpen() && (d.setClasses(), d.highlightFirstItem())
                        }), b.on("results:append", function(a) {
                            d.append(a.data), b.isOpen() && d.setClasses()
                        }), b.on("query", function(a) {
                            d.hideMessages(), d.showLoading(a)
                        }), b.on("select", function() {
                            b.isOpen() && (d.setClasses(), d.highlightFirstItem())
                        }), b.on("unselect", function() {
                            b.isOpen() && (d.setClasses(), d.highlightFirstItem())
                        }), b.on("open", function() {
                            d.$results.attr("aria-expanded", "true"), d.$results.attr("aria-hidden", "false"), d.setClasses(), d.ensureHighlightVisible()
                        }), b.on("close", function() {
                            d.$results.attr("aria-expanded", "false"), d.$results.attr("aria-hidden", "true"), d.$results.removeAttr("aria-activedescendant")
                        }), b.on("results:toggle", function() {
                            var a = d.getHighlightedResults();
                            0 !== a.length && a.trigger("mouseup")
                        }), b.on("results:select", function() {
                            var a = d.getHighlightedResults();
                            if (0 !== a.length) {
                                var b = a.data("data");
                                "true" == a.attr("aria-selected") ? d.trigger("close", {}) : d.trigger("select", {
                                    data: b
                                })
                            }
                        }), b.on("results:previous", function() {
                            var a = d.getHighlightedResults(),
                                b = d.$results.find("[aria-selected]"),
                                c = b.index(a);
                            if (0 !== c) {
                                var e = c - 1;
                                0 === a.length && (e = 0);
                                var f = b.eq(e);
                                f.trigger("mouseenter");
                                var g = d.$results.offset().top,
                                    h = f.offset().top,
                                    i = d.$results.scrollTop() + (h - g);
                                0 === e ? d.$results.scrollTop(0) : h - g < 0 && d.$results.scrollTop(i)
                            }
                        }), b.on("results:next", function() {
                            var a = d.getHighlightedResults(),
                                b = d.$results.find("[aria-selected]"),
                                c = b.index(a),
                                e = c + 1;
                            if (!(e >= b.length)) {
                                var f = b.eq(e);
                                f.trigger("mouseenter");
                                var g = d.$results.offset().top + d.$results.outerHeight(!1),
                                    h = f.offset().top + f.outerHeight(!1),
                                    i = d.$results.scrollTop() + h - g;
                                0 === e ? d.$results.scrollTop(0) : h > g && d.$results.scrollTop(i)
                            }
                        }), b.on("results:focus", function(a) {
                            a.element.addClass("select2-results__option--highlighted")
                        }), b.on("results:message", function(a) {
                            d.displayMessage(a)
                        }), a.fn.mousewheel && this.$results.on("mousewheel", function(a) {
                            var b = d.$results.scrollTop(),
                                c = d.$results.get(0).scrollHeight - b + a.deltaY,
                                e = a.deltaY > 0 && b - a.deltaY <= 0,
                                f = a.deltaY < 0 && c <= d.$results.height();
                            e ? (d.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : f && (d.$results.scrollTop(d.$results.get(0).scrollHeight - d.$results.height()), a.preventDefault(), a.stopPropagation())
                        }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(b) {
                            var c = a(this),
                                e = c.data("data");
                            if ("true" === c.attr("aria-selected")) return void(d.options.get("multiple") ? d.trigger("unselect", {
                                originalEvent: b,
                                data: e
                            }) : d.trigger("close", {}));
                            d.trigger("select", {
                                originalEvent: b,
                                data: e
                            })
                        }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(b) {
                            var c = a(this).data("data");
                            d.getHighlightedResults().removeClass("select2-results__option--highlighted"), d.trigger("results:focus", {
                                data: c,
                                element: a(this)
                            })
                        })
                    }, c.prototype.getHighlightedResults = function() {
                        return this.$results.find(".select2-results__option--highlighted")
                    }, c.prototype.destroy = function() {
                        this.$results.remove()
                    }, c.prototype.ensureHighlightVisible = function() {
                        var a = this.getHighlightedResults();
                        if (0 !== a.length) {
                            var b = this.$results.find("[aria-selected]"),
                                c = b.index(a),
                                d = this.$results.offset().top,
                                e = a.offset().top,
                                f = this.$results.scrollTop() + (e - d),
                                g = e - d;
                            f -= 2 * a.outerHeight(!1), c <= 2 ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || g < 0) && this.$results.scrollTop(f)
                        }
                    }, c.prototype.template = function(b, c) {
                        var d = this.options.get("templateResult"),
                            e = this.options.get("escapeMarkup"),
                            f = d(b, c);
                        null == f ? c.style.display = "none" : "string" == typeof f ? c.innerHTML = e(f) : a(c).append(f)
                    }, c
                }), b.define("select2/keys", [], function() {
                    return {
                        BACKSPACE: 8,
                        TAB: 9,
                        ENTER: 13,
                        SHIFT: 16,
                        CTRL: 17,
                        ALT: 18,
                        ESC: 27,
                        SPACE: 32,
                        PAGE_UP: 33,
                        PAGE_DOWN: 34,
                        END: 35,
                        HOME: 36,
                        LEFT: 37,
                        UP: 38,
                        RIGHT: 39,
                        DOWN: 40,
                        DELETE: 46
                    }
                }), b.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(a, b, c) {
                    function d(a, b) {
                        this.$element = a, this.options = b, d.__super__.constructor.call(this)
                    }
                    return b.Extend(d, b.Observable), d.prototype.render = function() {
                        var b = a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                        return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), b.attr("title", this.$element.attr("title")), b.attr("tabindex", this._tabindex), this.$selection = b, b
                    }, d.prototype.bind = function(a, b) {
                        var d = this,
                            e = (a.id, a.id + "-results");
                        this.container = a, this.$selection.on("focus", function(a) {
                            d.trigger("focus", a)
                        }), this.$selection.on("blur", function(a) {
                            d._handleBlur(a)
                        }), this.$selection.on("keydown", function(a) {
                            d.trigger("keypress", a), a.which === c.SPACE && a.preventDefault()
                        }), a.on("results:focus", function(a) {
                            d.$selection.attr("aria-activedescendant", a.data._resultId)
                        }), a.on("selection:update", function(a) {
                            d.update(a.data)
                        }), a.on("open", function() {
                            d.$selection.attr("aria-expanded", "true"), d.$selection.attr("aria-owns", e), d._attachCloseHandler(a)
                        }), a.on("close", function() {
                            d.$selection.attr("aria-expanded", "false"), d.$selection.removeAttr("aria-activedescendant"), d.$selection.removeAttr("aria-owns"), d.$selection.focus(), d._detachCloseHandler(a)
                        }), a.on("enable", function() {
                            d.$selection.attr("tabindex", d._tabindex)
                        }), a.on("disable", function() {
                            d.$selection.attr("tabindex", "-1")
                        })
                    }, d.prototype._handleBlur = function(b) {
                        var c = this;
                        window.setTimeout(function() {
                            document.activeElement == c.$selection[0] || a.contains(c.$selection[0], document.activeElement) || c.trigger("blur", b)
                        }, 1)
                    }, d.prototype._attachCloseHandler = function(b) {
                        a(document.body).on("mousedown.select2." + b.id, function(b) {
                            var c = a(b.target),
                                d = c.closest(".select2");
                            a(".select2.select2-container--open").each(function() {
                                var b = a(this);
                                this != d[0] && b.data("element").select2("close")
                            })
                        })
                    }, d.prototype._detachCloseHandler = function(b) {
                        a(document.body).off("mousedown.select2." + b.id)
                    }, d.prototype.position = function(a, b) {
                        b.find(".selection").append(a)
                    }, d.prototype.destroy = function() {
                        this._detachCloseHandler(this.container)
                    }, d.prototype.update = function(a) {
                        throw new Error("The `update` method must be defined in child classes.")
                    }, d
                }), b.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(a, b, c, d) {
                    function e() {
                        e.__super__.constructor.apply(this, arguments)
                    }
                    return c.Extend(e, b), e.prototype.render = function() {
                        var a = e.__super__.render.call(this);
                        return a.addClass("select2-selection--single"), a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), a
                    }, e.prototype.bind = function(a, b) {
                        var c = this;
                        e.__super__.bind.apply(this, arguments);
                        var d = a.id + "-container";
                        this.$selection.find(".select2-selection__rendered").attr("id", d), this.$selection.attr("aria-labelledby", d), this.$selection.on("mousedown", function(a) {
                            1 === a.which && c.trigger("toggle", {
                                originalEvent: a
                            })
                        }), this.$selection.on("focus", function(a) {}), this.$selection.on("blur", function(a) {}), a.on("focus", function(b) {
                            a.isOpen() || c.$selection.focus()
                        }), a.on("selection:update", function(a) {
                            c.update(a.data)
                        })
                    }, e.prototype.clear = function() {
                        this.$selection.find(".select2-selection__rendered").empty()
                    }, e.prototype.display = function(a, b) {
                        var c = this.options.get("templateSelection");
                        return this.options.get("escapeMarkup")(c(a, b))
                    }, e.prototype.selectionContainer = function() {
                        return a("<span></span>")
                    }, e.prototype.update = function(a) {
                        if (0 === a.length) return void this.clear();
                        var b = a[0],
                            c = this.$selection.find(".select2-selection__rendered"),
                            d = this.display(b, c);
                        c.empty().append(d), c.prop("title", b.title || b.text)
                    }, e
                }), b.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(a, b, c) {
                    function d(a, b) {
                        d.__super__.constructor.apply(this, arguments)
                    }
                    return c.Extend(d, b), d.prototype.render = function() {
                        var a = d.__super__.render.call(this);
                        return a.addClass("select2-selection--multiple"), a.html('<ul class="select2-selection__rendered"></ul>'), a
                    }, d.prototype.bind = function(b, c) {
                        var e = this;
                        d.__super__.bind.apply(this, arguments), this.$selection.on("click", function(a) {
                            e.trigger("toggle", {
                                originalEvent: a
                            })
                        }), this.$selection.on("click", ".select2-selection__choice__remove", function(b) {
                            if (!e.options.get("disabled")) {
                                var c = a(this),
                                    d = c.parent(),
                                    f = d.data("data");
                                e.trigger("unselect", {
                                    originalEvent: b,
                                    data: f
                                })
                            }
                        })
                    }, d.prototype.clear = function() {
                        this.$selection.find(".select2-selection__rendered").empty()
                    }, d.prototype.display = function(a, b) {
                        var c = this.options.get("templateSelection");
                        return this.options.get("escapeMarkup")(c(a, b))
                    }, d.prototype.selectionContainer = function() {
                        return a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
                    }, d.prototype.update = function(a) {
                        if (this.clear(), 0 !== a.length) {
                            for (var b = [], d = 0; d < a.length; d++) {
                                var e = a[d],
                                    f = this.selectionContainer(),
                                    g = this.display(e, f);
                                f.append(g), f.prop("title", e.title || e.text), f.data("data", e), b.push(f)
                            }
                            var h = this.$selection.find(".select2-selection__rendered");
                            c.appendMany(h, b)
                        }
                    }, d
                }), b.define("select2/selection/placeholder", ["../utils"], function(a) {
                    function b(a, b, c) {
                        this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c)
                    }
                    return b.prototype.normalizePlaceholder = function(a, b) {
                        return "string" == typeof b && (b = {
                            id: "",
                            text: b
                        }), b
                    }, b.prototype.createPlaceholder = function(a, b) {
                        var c = this.selectionContainer();
                        return c.html(this.display(b)), c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), c
                    }, b.prototype.update = function(a, b) {
                        var c = 1 == b.length && b[0].id != this.placeholder.id;
                        if (b.length > 1 || c) return a.call(this, b);
                        this.clear();
                        var d = this.createPlaceholder(this.placeholder);
                        this.$selection.find(".select2-selection__rendered").append(d)
                    }, b
                }), b.define("select2/selection/allowClear", ["jquery", "../keys"], function(a, b) {
                    function c() {}
                    return c.prototype.bind = function(a, b, c) {
                        var d = this;
                        a.call(this, b, c), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(a) {
                            d._handleClear(a)
                        }), b.on("keypress", function(a) {
                            d._handleKeyboardClear(a, b)
                        })
                    }, c.prototype._handleClear = function(a, b) {
                        if (!this.options.get("disabled")) {
                            var c = this.$selection.find(".select2-selection__clear");
                            if (0 !== c.length) {
                                b.stopPropagation();
                                for (var d = c.data("data"), e = 0; e < d.length; e++) {
                                    var f = {
                                        data: d[e]
                                    };
                                    if (this.trigger("unselect", f), f.prevented) return
                                }
                                this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                            }
                        }
                    }, c.prototype._handleKeyboardClear = function(a, c, d) {
                        d.isOpen() || c.which != b.DELETE && c.which != b.BACKSPACE || this._handleClear(c)
                    }, c.prototype.update = function(b, c) {
                        if (b.call(this, c), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === c.length)) {
                            var d = a('<span class="select2-selection__clear">&times;</span>');
                            d.data("data", c), this.$selection.find(".select2-selection__rendered").prepend(d)
                        }
                    }, c
                }), b.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(a, b, c) {
                    function d(a, b, c) {
                        a.call(this, b, c)
                    }
                    return d.prototype.render = function(b) {
                        var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                        this.$searchContainer = c, this.$search = c.find("input");
                        var d = b.call(this);
                        return this._transferTabIndex(), d
                    }, d.prototype.bind = function(a, b, d) {
                        var e = this;
                        a.call(this, b, d), b.on("open", function() {
                            e.$search.trigger("focus")
                        }), b.on("close", function() {
                            e.$search.val(""), e.$search.removeAttr("aria-activedescendant"), e.$search.trigger("focus")
                        }), b.on("enable", function() {
                            e.$search.prop("disabled", !1), e._transferTabIndex()
                        }), b.on("disable", function() {
                            e.$search.prop("disabled", !0)
                        }), b.on("focus", function(a) {
                            e.$search.trigger("focus")
                        }), b.on("results:focus", function(a) {
                            e.$search.attr("aria-activedescendant", a.id)
                        }), this.$selection.on("focusin", ".select2-search--inline", function(a) {
                            e.trigger("focus", a)
                        }), this.$selection.on("focusout", ".select2-search--inline", function(a) {
                            e._handleBlur(a)
                        }), this.$selection.on("keydown", ".select2-search--inline", function(a) {
                            if (a.stopPropagation(), e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented(), a.which === c.BACKSPACE && "" === e.$search.val()) {
                                var b = e.$searchContainer.prev(".select2-selection__choice");
                                if (b.length > 0) {
                                    var d = b.data("data");
                                    e.searchRemoveChoice(d), a.preventDefault()
                                }
                            }
                        });
                        var f = document.documentMode,
                            g = f && f <= 11;
                        this.$selection.on("input.searchcheck", ".select2-search--inline", function(a) {
                            if (g) return void e.$selection.off("input.search input.searchcheck");
                            e.$selection.off("keyup.search")
                        }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(a) {
                            if (g && "input" === a.type) return void e.$selection.off("input.search input.searchcheck");
                            var b = a.which;
                            b != c.SHIFT && b != c.CTRL && b != c.ALT && b != c.TAB && e.handleSearch(a)
                        })
                    }, d.prototype._transferTabIndex = function(a) {
                        this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                    }, d.prototype.createPlaceholder = function(a, b) {
                        this.$search.attr("placeholder", b.text)
                    }, d.prototype.update = function(a, b) {
                        var c = this.$search[0] == document.activeElement;
                        this.$search.attr("placeholder", ""), a.call(this, b), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), c && this.$search.focus()
                    }, d.prototype.handleSearch = function() {
                        if (this.resizeSearch(), !this._keyUpPrevented) {
                            var a = this.$search.val();
                            this.trigger("query", {
                                term: a
                            })
                        }
                        this._keyUpPrevented = !1
                    }, d.prototype.searchRemoveChoice = function(a, b) {
                        this.trigger("unselect", {
                            data: b
                        }), this.$search.val(b.text), this.handleSearch()
                    }, d.prototype.resizeSearch = function() {
                        this.$search.css("width", "25px");
                        var a = "";
                        if ("" !== this.$search.attr("placeholder")) a = this.$selection.find(".select2-selection__rendered").innerWidth();
                        else {
                            a = .75 * (this.$search.val().length + 1) + "em"
                        }
                        this.$search.css("width", a)
                    }, d
                }), b.define("select2/selection/eventRelay", ["jquery"], function(a) {
                    function b() {}
                    return b.prototype.bind = function(b, c, d) {
                        var e = this,
                            f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                            g = ["opening", "closing", "selecting", "unselecting"];
                        b.call(this, c, d), c.on("*", function(b, c) {
                            if (-1 !== a.inArray(b, f)) {
                                c = c || {};
                                var d = a.Event("select2:" + b, {
                                    params: c
                                });
                                e.$element.trigger(d), -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented())
                            }
                        })
                    }, b
                }), b.define("select2/translation", ["jquery", "require"], function(a, b) {
                    function c(a) {
                        this.dict = a || {}
                    }
                    return c.prototype.all = function() {
                        return this.dict
                    }, c.prototype.get = function(a) {
                        return this.dict[a]
                    }, c.prototype.extend = function(b) {
                        this.dict = a.extend({}, b.all(), this.dict)
                    }, c._cache = {}, c.loadPath = function(a) {
                        if (!(a in c._cache)) {
                            var d = b(a);
                            c._cache[a] = d
                        }
                        return new c(c._cache[a])
                    }, c
                }), b.define("select2/diacritics", [], function() {
                    return {
                        "Ⓐ": "A",
                        "Ａ": "A",
                        "À": "A",
                        "Á": "A",
                        "Â": "A",
                        "Ầ": "A",
                        "Ấ": "A",
                        "Ẫ": "A",
                        "Ẩ": "A",
                        "Ã": "A",
                        "Ā": "A",
                        "Ă": "A",
                        "Ằ": "A",
                        "Ắ": "A",
                        "Ẵ": "A",
                        "Ẳ": "A",
                        "Ȧ": "A",
                        "Ǡ": "A",
                        "Ä": "A",
                        "Ǟ": "A",
                        "Ả": "A",
                        "Å": "A",
                        "Ǻ": "A",
                        "Ǎ": "A",
                        "Ȁ": "A",
                        "Ȃ": "A",
                        "Ạ": "A",
                        "Ậ": "A",
                        "Ặ": "A",
                        "Ḁ": "A",
                        "Ą": "A",
                        "Ⱥ": "A",
                        "Ɐ": "A",
                        "Ꜳ": "AA",
                        "Æ": "AE",
                        "Ǽ": "AE",
                        "Ǣ": "AE",
                        "Ꜵ": "AO",
                        "Ꜷ": "AU",
                        "Ꜹ": "AV",
                        "Ꜻ": "AV",
                        "Ꜽ": "AY",
                        "Ⓑ": "B",
                        "Ｂ": "B",
                        "Ḃ": "B",
                        "Ḅ": "B",
                        "Ḇ": "B",
                        "Ƀ": "B",
                        "Ƃ": "B",
                        "Ɓ": "B",
                        "Ⓒ": "C",
                        "Ｃ": "C",
                        "Ć": "C",
                        "Ĉ": "C",
                        "Ċ": "C",
                        "Č": "C",
                        "Ç": "C",
                        "Ḉ": "C",
                        "Ƈ": "C",
                        "Ȼ": "C",
                        "Ꜿ": "C",
                        "Ⓓ": "D",
                        "Ｄ": "D",
                        "Ḋ": "D",
                        "Ď": "D",
                        "Ḍ": "D",
                        "Ḑ": "D",
                        "Ḓ": "D",
                        "Ḏ": "D",
                        "Đ": "D",
                        "Ƌ": "D",
                        "Ɗ": "D",
                        "Ɖ": "D",
                        "Ꝺ": "D",
                        "Ǳ": "DZ",
                        "Ǆ": "DZ",
                        "ǲ": "Dz",
                        "ǅ": "Dz",
                        "Ⓔ": "E",
                        "Ｅ": "E",
                        "È": "E",
                        "É": "E",
                        "Ê": "E",
                        "Ề": "E",
                        "Ế": "E",
                        "Ễ": "E",
                        "Ể": "E",
                        "Ẽ": "E",
                        "Ē": "E",
                        "Ḕ": "E",
                        "Ḗ": "E",
                        "Ĕ": "E",
                        "Ė": "E",
                        "Ë": "E",
                        "Ẻ": "E",
                        "Ě": "E",
                        "Ȅ": "E",
                        "Ȇ": "E",
                        "Ẹ": "E",
                        "Ệ": "E",
                        "Ȩ": "E",
                        "Ḝ": "E",
                        "Ę": "E",
                        "Ḙ": "E",
                        "Ḛ": "E",
                        "Ɛ": "E",
                        "Ǝ": "E",
                        "Ⓕ": "F",
                        "Ｆ": "F",
                        "Ḟ": "F",
                        "Ƒ": "F",
                        "Ꝼ": "F",
                        "Ⓖ": "G",
                        "Ｇ": "G",
                        "Ǵ": "G",
                        "Ĝ": "G",
                        "Ḡ": "G",
                        "Ğ": "G",
                        "Ġ": "G",
                        "Ǧ": "G",
                        "Ģ": "G",
                        "Ǥ": "G",
                        "Ɠ": "G",
                        "Ꞡ": "G",
                        "Ᵹ": "G",
                        "Ꝿ": "G",
                        "Ⓗ": "H",
                        "Ｈ": "H",
                        "Ĥ": "H",
                        "Ḣ": "H",
                        "Ḧ": "H",
                        "Ȟ": "H",
                        "Ḥ": "H",
                        "Ḩ": "H",
                        "Ḫ": "H",
                        "Ħ": "H",
                        "Ⱨ": "H",
                        "Ⱶ": "H",
                        "Ɥ": "H",
                        "Ⓘ": "I",
                        "Ｉ": "I",
                        "Ì": "I",
                        "Í": "I",
                        "Î": "I",
                        "Ĩ": "I",
                        "Ī": "I",
                        "Ĭ": "I",
                        "İ": "I",
                        "Ï": "I",
                        "Ḯ": "I",
                        "Ỉ": "I",
                        "Ǐ": "I",
                        "Ȉ": "I",
                        "Ȋ": "I",
                        "Ị": "I",
                        "Į": "I",
                        "Ḭ": "I",
                        "Ɨ": "I",
                        "Ⓙ": "J",
                        "Ｊ": "J",
                        "Ĵ": "J",
                        "Ɉ": "J",
                        "Ⓚ": "K",
                        "Ｋ": "K",
                        "Ḱ": "K",
                        "Ǩ": "K",
                        "Ḳ": "K",
                        "Ķ": "K",
                        "Ḵ": "K",
                        "Ƙ": "K",
                        "Ⱪ": "K",
                        "Ꝁ": "K",
                        "Ꝃ": "K",
                        "Ꝅ": "K",
                        "Ꞣ": "K",
                        "Ⓛ": "L",
                        "Ｌ": "L",
                        "Ŀ": "L",
                        "Ĺ": "L",
                        "Ľ": "L",
                        "Ḷ": "L",
                        "Ḹ": "L",
                        "Ļ": "L",
                        "Ḽ": "L",
                        "Ḻ": "L",
                        "Ł": "L",
                        "Ƚ": "L",
                        "Ɫ": "L",
                        "Ⱡ": "L",
                        "Ꝉ": "L",
                        "Ꝇ": "L",
                        "Ꞁ": "L",
                        "Ǉ": "LJ",
                        "ǈ": "Lj",
                        "Ⓜ": "M",
                        "Ｍ": "M",
                        "Ḿ": "M",
                        "Ṁ": "M",
                        "Ṃ": "M",
                        "Ɱ": "M",
                        "Ɯ": "M",
                        "Ⓝ": "N",
                        "Ｎ": "N",
                        "Ǹ": "N",
                        "Ń": "N",
                        "Ñ": "N",
                        "Ṅ": "N",
                        "Ň": "N",
                        "Ṇ": "N",
                        "Ņ": "N",
                        "Ṋ": "N",
                        "Ṉ": "N",
                        "Ƞ": "N",
                        "Ɲ": "N",
                        "Ꞑ": "N",
                        "Ꞥ": "N",
                        "Ǌ": "NJ",
                        "ǋ": "Nj",
                        "Ⓞ": "O",
                        "Ｏ": "O",
                        "Ò": "O",
                        "Ó": "O",
                        "Ô": "O",
                        "Ồ": "O",
                        "Ố": "O",
                        "Ỗ": "O",
                        "Ổ": "O",
                        "Õ": "O",
                        "Ṍ": "O",
                        "Ȭ": "O",
                        "Ṏ": "O",
                        "Ō": "O",
                        "Ṑ": "O",
                        "Ṓ": "O",
                        "Ŏ": "O",
                        "Ȯ": "O",
                        "Ȱ": "O",
                        "Ö": "O",
                        "Ȫ": "O",
                        "Ỏ": "O",
                        "Ő": "O",
                        "Ǒ": "O",
                        "Ȍ": "O",
                        "Ȏ": "O",
                        "Ơ": "O",
                        "Ờ": "O",
                        "Ớ": "O",
                        "Ỡ": "O",
                        "Ở": "O",
                        "Ợ": "O",
                        "Ọ": "O",
                        "Ộ": "O",
                        "Ǫ": "O",
                        "Ǭ": "O",
                        "Ø": "O",
                        "Ǿ": "O",
                        "Ɔ": "O",
                        "Ɵ": "O",
                        "Ꝋ": "O",
                        "Ꝍ": "O",
                        "Ƣ": "OI",
                        "Ꝏ": "OO",
                        "Ȣ": "OU",
                        "Ⓟ": "P",
                        "Ｐ": "P",
                        "Ṕ": "P",
                        "Ṗ": "P",
                        "Ƥ": "P",
                        "Ᵽ": "P",
                        "Ꝑ": "P",
                        "Ꝓ": "P",
                        "Ꝕ": "P",
                        "Ⓠ": "Q",
                        "Ｑ": "Q",
                        "Ꝗ": "Q",
                        "Ꝙ": "Q",
                        "Ɋ": "Q",
                        "Ⓡ": "R",
                        "Ｒ": "R",
                        "Ŕ": "R",
                        "Ṙ": "R",
                        "Ř": "R",
                        "Ȑ": "R",
                        "Ȓ": "R",
                        "Ṛ": "R",
                        "Ṝ": "R",
                        "Ŗ": "R",
                        "Ṟ": "R",
                        "Ɍ": "R",
                        "Ɽ": "R",
                        "Ꝛ": "R",
                        "Ꞧ": "R",
                        "Ꞃ": "R",
                        "Ⓢ": "S",
                        "Ｓ": "S",
                        "ẞ": "S",
                        "Ś": "S",
                        "Ṥ": "S",
                        "Ŝ": "S",
                        "Ṡ": "S",
                        "Š": "S",
                        "Ṧ": "S",
                        "Ṣ": "S",
                        "Ṩ": "S",
                        "Ș": "S",
                        "Ş": "S",
                        "Ȿ": "S",
                        "Ꞩ": "S",
                        "Ꞅ": "S",
                        "Ⓣ": "T",
                        "Ｔ": "T",
                        "Ṫ": "T",
                        "Ť": "T",
                        "Ṭ": "T",
                        "Ț": "T",
                        "Ţ": "T",
                        "Ṱ": "T",
                        "Ṯ": "T",
                        "Ŧ": "T",
                        "Ƭ": "T",
                        "Ʈ": "T",
                        "Ⱦ": "T",
                        "Ꞇ": "T",
                        "Ꜩ": "TZ",
                        "Ⓤ": "U",
                        "Ｕ": "U",
                        "Ù": "U",
                        "Ú": "U",
                        "Û": "U",
                        "Ũ": "U",
                        "Ṹ": "U",
                        "Ū": "U",
                        "Ṻ": "U",
                        "Ŭ": "U",
                        "Ü": "U",
                        "Ǜ": "U",
                        "Ǘ": "U",
                        "Ǖ": "U",
                        "Ǚ": "U",
                        "Ủ": "U",
                        "Ů": "U",
                        "Ű": "U",
                        "Ǔ": "U",
                        "Ȕ": "U",
                        "Ȗ": "U",
                        "Ư": "U",
                        "Ừ": "U",
                        "Ứ": "U",
                        "Ữ": "U",
                        "Ử": "U",
                        "Ự": "U",
                        "Ụ": "U",
                        "Ṳ": "U",
                        "Ų": "U",
                        "Ṷ": "U",
                        "Ṵ": "U",
                        "Ʉ": "U",
                        "Ⓥ": "V",
                        "Ｖ": "V",
                        "Ṽ": "V",
                        "Ṿ": "V",
                        "Ʋ": "V",
                        "Ꝟ": "V",
                        "Ʌ": "V",
                        "Ꝡ": "VY",
                        "Ⓦ": "W",
                        "Ｗ": "W",
                        "Ẁ": "W",
                        "Ẃ": "W",
                        "Ŵ": "W",
                        "Ẇ": "W",
                        "Ẅ": "W",
                        "Ẉ": "W",
                        "Ⱳ": "W",
                        "Ⓧ": "X",
                        "Ｘ": "X",
                        "Ẋ": "X",
                        "Ẍ": "X",
                        "Ⓨ": "Y",
                        "Ｙ": "Y",
                        "Ỳ": "Y",
                        "Ý": "Y",
                        "Ŷ": "Y",
                        "Ỹ": "Y",
                        "Ȳ": "Y",
                        "Ẏ": "Y",
                        "Ÿ": "Y",
                        "Ỷ": "Y",
                        "Ỵ": "Y",
                        "Ƴ": "Y",
                        "Ɏ": "Y",
                        "Ỿ": "Y",
                        "Ⓩ": "Z",
                        "Ｚ": "Z",
                        "Ź": "Z",
                        "Ẑ": "Z",
                        "Ż": "Z",
                        "Ž": "Z",
                        "Ẓ": "Z",
                        "Ẕ": "Z",
                        "Ƶ": "Z",
                        "Ȥ": "Z",
                        "Ɀ": "Z",
                        "Ⱬ": "Z",
                        "Ꝣ": "Z",
                        "ⓐ": "a",
                        "ａ": "a",
                        "ẚ": "a",
                        "à": "a",
                        "á": "a",
                        "â": "a",
                        "ầ": "a",
                        "ấ": "a",
                        "ẫ": "a",
                        "ẩ": "a",
                        "ã": "a",
                        "ā": "a",
                        "ă": "a",
                        "ằ": "a",
                        "ắ": "a",
                        "ẵ": "a",
                        "ẳ": "a",
                        "ȧ": "a",
                        "ǡ": "a",
                        "ä": "a",
                        "ǟ": "a",
                        "ả": "a",
                        "å": "a",
                        "ǻ": "a",
                        "ǎ": "a",
                        "ȁ": "a",
                        "ȃ": "a",
                        "ạ": "a",
                        "ậ": "a",
                        "ặ": "a",
                        "ḁ": "a",
                        "ą": "a",
                        "ⱥ": "a",
                        "ɐ": "a",
                        "ꜳ": "aa",
                        "æ": "ae",
                        "ǽ": "ae",
                        "ǣ": "ae",
                        "ꜵ": "ao",
                        "ꜷ": "au",
                        "ꜹ": "av",
                        "ꜻ": "av",
                        "ꜽ": "ay",
                        "ⓑ": "b",
                        "ｂ": "b",
                        "ḃ": "b",
                        "ḅ": "b",
                        "ḇ": "b",
                        "ƀ": "b",
                        "ƃ": "b",
                        "ɓ": "b",
                        "ⓒ": "c",
                        "ｃ": "c",
                        "ć": "c",
                        "ĉ": "c",
                        "ċ": "c",
                        "č": "c",
                        "ç": "c",
                        "ḉ": "c",
                        "ƈ": "c",
                        "ȼ": "c",
                        "ꜿ": "c",
                        "ↄ": "c",
                        "ⓓ": "d",
                        "ｄ": "d",
                        "ḋ": "d",
                        "ď": "d",
                        "ḍ": "d",
                        "ḑ": "d",
                        "ḓ": "d",
                        "ḏ": "d",
                        "đ": "d",
                        "ƌ": "d",
                        "ɖ": "d",
                        "ɗ": "d",
                        "ꝺ": "d",
                        "ǳ": "dz",
                        "ǆ": "dz",
                        "ⓔ": "e",
                        "ｅ": "e",
                        "è": "e",
                        "é": "e",
                        "ê": "e",
                        "ề": "e",
                        "ế": "e",
                        "ễ": "e",
                        "ể": "e",
                        "ẽ": "e",
                        "ē": "e",
                        "ḕ": "e",
                        "ḗ": "e",
                        "ĕ": "e",
                        "ė": "e",
                        "ë": "e",
                        "ẻ": "e",
                        "ě": "e",
                        "ȅ": "e",
                        "ȇ": "e",
                        "ẹ": "e",
                        "ệ": "e",
                        "ȩ": "e",
                        "ḝ": "e",
                        "ę": "e",
                        "ḙ": "e",
                        "ḛ": "e",
                        "ɇ": "e",
                        "ɛ": "e",
                        "ǝ": "e",
                        "ⓕ": "f",
                        "ｆ": "f",
                        "ḟ": "f",
                        "ƒ": "f",
                        "ꝼ": "f",
                        "ⓖ": "g",
                        "ｇ": "g",
                        "ǵ": "g",
                        "ĝ": "g",
                        "ḡ": "g",
                        "ğ": "g",
                        "ġ": "g",
                        "ǧ": "g",
                        "ģ": "g",
                        "ǥ": "g",
                        "ɠ": "g",
                        "ꞡ": "g",
                        "ᵹ": "g",
                        "ꝿ": "g",
                        "ⓗ": "h",
                        "ｈ": "h",
                        "ĥ": "h",
                        "ḣ": "h",
                        "ḧ": "h",
                        "ȟ": "h",
                        "ḥ": "h",
                        "ḩ": "h",
                        "ḫ": "h",
                        "ẖ": "h",
                        "ħ": "h",
                        "ⱨ": "h",
                        "ⱶ": "h",
                        "ɥ": "h",
                        "ƕ": "hv",
                        "ⓘ": "i",
                        "ｉ": "i",
                        "ì": "i",
                        "í": "i",
                        "î": "i",
                        "ĩ": "i",
                        "ī": "i",
                        "ĭ": "i",
                        "ï": "i",
                        "ḯ": "i",
                        "ỉ": "i",
                        "ǐ": "i",
                        "ȉ": "i",
                        "ȋ": "i",
                        "ị": "i",
                        "į": "i",
                        "ḭ": "i",
                        "ɨ": "i",
                        "ı": "i",
                        "ⓙ": "j",
                        "ｊ": "j",
                        "ĵ": "j",
                        "ǰ": "j",
                        "ɉ": "j",
                        "ⓚ": "k",
                        "ｋ": "k",
                        "ḱ": "k",
                        "ǩ": "k",
                        "ḳ": "k",
                        "ķ": "k",
                        "ḵ": "k",
                        "ƙ": "k",
                        "ⱪ": "k",
                        "ꝁ": "k",
                        "ꝃ": "k",
                        "ꝅ": "k",
                        "ꞣ": "k",
                        "ⓛ": "l",
                        "ｌ": "l",
                        "ŀ": "l",
                        "ĺ": "l",
                        "ľ": "l",
                        "ḷ": "l",
                        "ḹ": "l",
                        "ļ": "l",
                        "ḽ": "l",
                        "ḻ": "l",
                        "ſ": "l",
                        "ł": "l",
                        "ƚ": "l",
                        "ɫ": "l",
                        "ⱡ": "l",
                        "ꝉ": "l",
                        "ꞁ": "l",
                        "ꝇ": "l",
                        "ǉ": "lj",
                        "ⓜ": "m",
                        "ｍ": "m",
                        "ḿ": "m",
                        "ṁ": "m",
                        "ṃ": "m",
                        "ɱ": "m",
                        "ɯ": "m",
                        "ⓝ": "n",
                        "ｎ": "n",
                        "ǹ": "n",
                        "ń": "n",
                        "ñ": "n",
                        "ṅ": "n",
                        "ň": "n",
                        "ṇ": "n",
                        "ņ": "n",
                        "ṋ": "n",
                        "ṉ": "n",
                        "ƞ": "n",
                        "ɲ": "n",
                        "ŉ": "n",
                        "ꞑ": "n",
                        "ꞥ": "n",
                        "ǌ": "nj",
                        "ⓞ": "o",
                        "ｏ": "o",
                        "ò": "o",
                        "ó": "o",
                        "ô": "o",
                        "ồ": "o",
                        "ố": "o",
                        "ỗ": "o",
                        "ổ": "o",
                        "õ": "o",
                        "ṍ": "o",
                        "ȭ": "o",
                        "ṏ": "o",
                        "ō": "o",
                        "ṑ": "o",
                        "ṓ": "o",
                        "ŏ": "o",
                        "ȯ": "o",
                        "ȱ": "o",
                        "ö": "o",
                        "ȫ": "o",
                        "ỏ": "o",
                        "ő": "o",
                        "ǒ": "o",
                        "ȍ": "o",
                        "ȏ": "o",
                        "ơ": "o",
                        "ờ": "o",
                        "ớ": "o",
                        "ỡ": "o",
                        "ở": "o",
                        "ợ": "o",
                        "ọ": "o",
                        "ộ": "o",
                        "ǫ": "o",
                        "ǭ": "o",
                        "ø": "o",
                        "ǿ": "o",
                        "ɔ": "o",
                        "ꝋ": "o",
                        "ꝍ": "o",
                        "ɵ": "o",
                        "ƣ": "oi",
                        "ȣ": "ou",
                        "ꝏ": "oo",
                        "ⓟ": "p",
                        "ｐ": "p",
                        "ṕ": "p",
                        "ṗ": "p",
                        "ƥ": "p",
                        "ᵽ": "p",
                        "ꝑ": "p",
                        "ꝓ": "p",
                        "ꝕ": "p",
                        "ⓠ": "q",
                        "ｑ": "q",
                        "ɋ": "q",
                        "ꝗ": "q",
                        "ꝙ": "q",
                        "ⓡ": "r",
                        "ｒ": "r",
                        "ŕ": "r",
                        "ṙ": "r",
                        "ř": "r",
                        "ȑ": "r",
                        "ȓ": "r",
                        "ṛ": "r",
                        "ṝ": "r",
                        "ŗ": "r",
                        "ṟ": "r",
                        "ɍ": "r",
                        "ɽ": "r",
                        "ꝛ": "r",
                        "ꞧ": "r",
                        "ꞃ": "r",
                        "ⓢ": "s",
                        "ｓ": "s",
                        "ß": "s",
                        "ś": "s",
                        "ṥ": "s",
                        "ŝ": "s",
                        "ṡ": "s",
                        "š": "s",
                        "ṧ": "s",
                        "ṣ": "s",
                        "ṩ": "s",
                        "ș": "s",
                        "ş": "s",
                        "ȿ": "s",
                        "ꞩ": "s",
                        "ꞅ": "s",
                        "ẛ": "s",
                        "ⓣ": "t",
                        "ｔ": "t",
                        "ṫ": "t",
                        "ẗ": "t",
                        "ť": "t",
                        "ṭ": "t",
                        "ț": "t",
                        "ţ": "t",
                        "ṱ": "t",
                        "ṯ": "t",
                        "ŧ": "t",
                        "ƭ": "t",
                        "ʈ": "t",
                        "ⱦ": "t",
                        "ꞇ": "t",
                        "ꜩ": "tz",
                        "ⓤ": "u",
                        "ｕ": "u",
                        "ù": "u",
                        "ú": "u",
                        "û": "u",
                        "ũ": "u",
                        "ṹ": "u",
                        "ū": "u",
                        "ṻ": "u",
                        "ŭ": "u",
                        "ü": "u",
                        "ǜ": "u",
                        "ǘ": "u",
                        "ǖ": "u",
                        "ǚ": "u",
                        "ủ": "u",
                        "ů": "u",
                        "ű": "u",
                        "ǔ": "u",
                        "ȕ": "u",
                        "ȗ": "u",
                        "ư": "u",
                        "ừ": "u",
                        "ứ": "u",
                        "ữ": "u",
                        "ử": "u",
                        "ự": "u",
                        "ụ": "u",
                        "ṳ": "u",
                        "ų": "u",
                        "ṷ": "u",
                        "ṵ": "u",
                        "ʉ": "u",
                        "ⓥ": "v",
                        "ｖ": "v",
                        "ṽ": "v",
                        "ṿ": "v",
                        "ʋ": "v",
                        "ꝟ": "v",
                        "ʌ": "v",
                        "ꝡ": "vy",
                        "ⓦ": "w",
                        "ｗ": "w",
                        "ẁ": "w",
                        "ẃ": "w",
                        "ŵ": "w",
                        "ẇ": "w",
                        "ẅ": "w",
                        "ẘ": "w",
                        "ẉ": "w",
                        "ⱳ": "w",
                        "ⓧ": "x",
                        "ｘ": "x",
                        "ẋ": "x",
                        "ẍ": "x",
                        "ⓨ": "y",
                        "ｙ": "y",
                        "ỳ": "y",
                        "ý": "y",
                        "ŷ": "y",
                        "ỹ": "y",
                        "ȳ": "y",
                        "ẏ": "y",
                        "ÿ": "y",
                        "ỷ": "y",
                        "ẙ": "y",
                        "ỵ": "y",
                        "ƴ": "y",
                        "ɏ": "y",
                        "ỿ": "y",
                        "ⓩ": "z",
                        "ｚ": "z",
                        "ź": "z",
                        "ẑ": "z",
                        "ż": "z",
                        "ž": "z",
                        "ẓ": "z",
                        "ẕ": "z",
                        "ƶ": "z",
                        "ȥ": "z",
                        "ɀ": "z",
                        "ⱬ": "z",
                        "ꝣ": "z",
                        "Ά": "Α",
                        "Έ": "Ε",
                        "Ή": "Η",
                        "Ί": "Ι",
                        "Ϊ": "Ι",
                        "Ό": "Ο",
                        "Ύ": "Υ",
                        "Ϋ": "Υ",
                        "Ώ": "Ω",
                        "ά": "α",
                        "έ": "ε",
                        "ή": "η",
                        "ί": "ι",
                        "ϊ": "ι",
                        "ΐ": "ι",
                        "ό": "ο",
                        "ύ": "υ",
                        "ϋ": "υ",
                        "ΰ": "υ",
                        "ω": "ω",
                        "ς": "σ"
                    }
                }), b.define("select2/data/base", ["../utils"], function(a) {
                    function b(a, c) {
                        b.__super__.constructor.call(this)
                    }
                    return a.Extend(b, a.Observable), b.prototype.current = function(a) {
                        throw new Error("The `current` method must be defined in child classes.")
                    }, b.prototype.query = function(a, b) {
                        throw new Error("The `query` method must be defined in child classes.")
                    }, b.prototype.bind = function(a, b) {}, b.prototype.destroy = function() {}, b.prototype.generateResultId = function(b, c) {
                        var d = b.id + "-result-";
                        return d += a.generateChars(4), null != c.id ? d += "-" + c.id.toString() : d += "-" + a.generateChars(4), d
                    }, b
                }), b.define("select2/data/select", ["./base", "../utils", "jquery"], function(a, b, c) {
                    function d(a, b) {
                        this.$element = a, this.options = b, d.__super__.constructor.call(this)
                    }
                    return b.Extend(d, a), d.prototype.current = function(a) {
                        var b = [],
                            d = this;
                        this.$element.find(":selected").each(function() {
                            var a = c(this),
                                e = d.item(a);
                            b.push(e)
                        }), a(b)
                    }, d.prototype.select = function(a) {
                        var b = this;
                        if (a.selected = !0, c(a.element).is("option")) return a.element.selected = !0, void this.$element.trigger("change");
                        if (this.$element.prop("multiple")) this.current(function(d) {
                            var e = [];
                            a = [a], a.push.apply(a, d);
                            for (var f = 0; f < a.length; f++) {
                                var g = a[f].id; - 1 === c.inArray(g, e) && e.push(g)
                            }
                            b.$element.val(e), b.$element.trigger("change")
                        });
                        else {
                            var d = a.id;
                            this.$element.val(d), this.$element.trigger("change")
                        }
                    }, d.prototype.unselect = function(a) {
                        var b = this;
                        if (this.$element.prop("multiple")) {
                            if (a.selected = !1, c(a.element).is("option")) return a.element.selected = !1, void this.$element.trigger("change");
                            this.current(function(d) {
                                for (var e = [], f = 0; f < d.length; f++) {
                                    var g = d[f].id;
                                    g !== a.id && -1 === c.inArray(g, e) && e.push(g)
                                }
                                b.$element.val(e), b.$element.trigger("change")
                            })
                        }
                    }, d.prototype.bind = function(a, b) {
                        var c = this;
                        this.container = a, a.on("select", function(a) {
                            c.select(a.data)
                        }), a.on("unselect", function(a) {
                            c.unselect(a.data)
                        })
                    }, d.prototype.destroy = function() {
                        this.$element.find("*").each(function() {
                            c.removeData(this, "data")
                        })
                    }, d.prototype.query = function(a, b) {
                        var d = [],
                            e = this;
                        this.$element.children().each(function() {
                            var b = c(this);
                            if (b.is("option") || b.is("optgroup")) {
                                var f = e.item(b),
                                    g = e.matches(a, f);
                                null !== g && d.push(g)
                            }
                        }), b({
                            results: d
                        })
                    }, d.prototype.addOptions = function(a) {
                        b.appendMany(this.$element, a)
                    }, d.prototype.option = function(a) {
                        var b;
                        a.children ? (b = document.createElement("optgroup"), b.label = a.text) : (b = document.createElement("option"), void 0 !== b.textContent ? b.textContent = a.text : b.innerText = a.text), void 0 !== a.id && (b.value = a.id), a.disabled && (b.disabled = !0), a.selected && (b.selected = !0), a.title && (b.title = a.title);
                        var d = c(b),
                            e = this._normalizeItem(a);
                        return e.element = b, c.data(b, "data", e), d
                    }, d.prototype.item = function(a) {
                        var b = {};
                        if (null != (b = c.data(a[0], "data"))) return b;
                        if (a.is("option")) b = {
                            id: a.val(),
                            text: a.text(),
                            disabled: a.prop("disabled"),
                            selected: a.prop("selected"),
                            title: a.prop("title")
                        };
                        else if (a.is("optgroup")) {
                            b = {
                                text: a.prop("label"),
                                children: [],
                                title: a.prop("title")
                            };
                            for (var d = a.children("option"), e = [], f = 0; f < d.length; f++) {
                                var g = c(d[f]),
                                    h = this.item(g);
                                e.push(h)
                            }
                            b.children = e
                        }
                        return b = this._normalizeItem(b), b.element = a[0], c.data(a[0], "data", b), b
                    }, d.prototype._normalizeItem = function(a) {
                        c.isPlainObject(a) || (a = {
                            id: a,
                            text: a
                        }), a = c.extend({}, {
                            text: ""
                        }, a);
                        var b = {
                            selected: !1,
                            disabled: !1
                        };
                        return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), c.extend({}, b, a)
                    }, d.prototype.matches = function(a, b) {
                        return this.options.get("matcher")(a, b)
                    }, d
                }), b.define("select2/data/array", ["./select", "../utils", "jquery"], function(a, b, c) {
                    function d(a, b) {
                        var c = b.get("data") || [];
                        d.__super__.constructor.call(this, a, b), this.addOptions(this.convertToOptions(c))
                    }
                    return b.Extend(d, a), d.prototype.select = function(a) {
                        var b = this.$element.find("option").filter(function(b, c) {
                            return c.value == a.id.toString()
                        });
                        0 === b.length && (b = this.option(a), this.addOptions(b)), d.__super__.select.call(this, a)
                    }, d.prototype.convertToOptions = function(a) {
                        function d(a) {
                            return function() {
                                return c(this).val() == a.id
                            }
                        }
                        for (var e = this, f = this.$element.find("option"), g = f.map(function() {
                                return e.item(c(this)).id
                            }).get(), h = [], i = 0; i < a.length; i++) {
                            var j = this._normalizeItem(a[i]);
                            if (c.inArray(j.id, g) >= 0) {
                                var k = f.filter(d(j)),
                                    l = this.item(k),
                                    m = c.extend(!0, {}, j, l),
                                    n = this.option(m);
                                k.replaceWith(n)
                            } else {
                                var o = this.option(j);
                                if (j.children) {
                                    var p = this.convertToOptions(j.children);
                                    b.appendMany(o, p)
                                }
                                h.push(o)
                            }
                        }
                        return h
                    }, d
                }), b.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(a, b, c) {
                    function d(a, b) {
                        this.ajaxOptions = this._applyDefaults(b.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), d.__super__.constructor.call(this, a, b)
                    }
                    return b.Extend(d, a), d.prototype._applyDefaults = function(a) {
                        var b = {
                            data: function(a) {
                                return c.extend({}, a, {
                                    q: a.term
                                })
                            },
                            transport: function(a, b, d) {
                                var e = c.ajax(a);
                                return e.then(b), e.fail(d), e
                            }
                        };
                        return c.extend({}, b, a, !0)
                    }, d.prototype.processResults = function(a) {
                        return a
                    }, d.prototype.query = function(a, b) {
                        function d() {
                            var d = f.transport(f, function(d) {
                                var f = e.processResults(d, a);
                                e.options.get("debug") && window.console && console.error && (f && f.results && c.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), b(f)
                            }, function() {
                                d.status && "0" === d.status || e.trigger("results:message", {
                                    message: "errorLoading"
                                })
                            });
                            e._request = d
                        }
                        var e = this;
                        null != this._request && (c.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                        var f = c.extend({
                            type: "GET"
                        }, this.ajaxOptions);
                        "function" == typeof f.url && (f.url = f.url.call(this.$element, a)), "function" == typeof f.data && (f.data = f.data.call(this.$element, a)), this.ajaxOptions.delay && null != a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)) : d()
                    }, d
                }), b.define("select2/data/tags", ["jquery"], function(a) {
                    function b(b, c, d) {
                        var e = d.get("tags"),
                            f = d.get("createTag");
                        void 0 !== f && (this.createTag = f);
                        var g = d.get("insertTag");
                        if (void 0 !== g && (this.insertTag = g), b.call(this, c, d), a.isArray(e))
                            for (var h = 0; h < e.length; h++) {
                                var i = e[h],
                                    j = this._normalizeItem(i),
                                    k = this.option(j);
                                this.$element.append(k)
                            }
                    }
                    return b.prototype.query = function(a, b, c) {
                        function d(a, f) {
                            for (var g = a.results, h = 0; h < g.length; h++) {
                                var i = g[h],
                                    j = null != i.children && !d({
                                        results: i.children
                                    }, !0);
                                if ((i.text || "").toUpperCase() === (b.term || "").toUpperCase() || j) return !f && (a.data = g, void c(a))
                            }
                            if (f) return !0;
                            var k = e.createTag(b);
                            if (null != k) {
                                var l = e.option(k);
                                l.attr("data-select2-tag", !0), e.addOptions([l]), e.insertTag(g, k)
                            }
                            a.results = g, c(a)
                        }
                        var e = this;
                        if (this._removeOldTags(), null == b.term || null != b.page) return void a.call(this, b, c);
                        a.call(this, b, d)
                    }, b.prototype.createTag = function(b, c) {
                        var d = a.trim(c.term);
                        return "" === d ? null : {
                            id: d,
                            text: d
                        }
                    }, b.prototype.insertTag = function(a, b, c) {
                        b.unshift(c)
                    }, b.prototype._removeOldTags = function(b) {
                        this._lastTag;
                        this.$element.find("option[data-select2-tag]").each(function() {
                            this.selected || a(this).remove()
                        })
                    }, b
                }), b.define("select2/data/tokenizer", ["jquery"], function(a) {
                    function b(a, b, c) {
                        var d = c.get("tokenizer");
                        void 0 !== d && (this.tokenizer = d), a.call(this, b, c)
                    }
                    return b.prototype.bind = function(a, b, c) {
                        a.call(this, b, c), this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field")
                    }, b.prototype.query = function(b, c, d) {
                        function e(b) {
                            var c = g._normalizeItem(b);
                            if (!g.$element.find("option").filter(function() {
                                    return a(this).val() === c.id
                                }).length) {
                                var d = g.option(c);
                                d.attr("data-select2-tag", !0), g._removeOldTags(), g.addOptions([d])
                            }
                            f(c)
                        }

                        function f(a) {
                            g.trigger("select", {
                                data: a
                            })
                        }
                        var g = this;
                        c.term = c.term || "";
                        var h = this.tokenizer(c, this.options, e);
                        h.term !== c.term && (this.$search.length && (this.$search.val(h.term), this.$search.focus()), c.term = h.term), b.call(this, c, d)
                    }, b.prototype.tokenizer = function(b, c, d, e) {
                        for (var f = d.get("tokenSeparators") || [], g = c.term, h = 0, i = this.createTag || function(a) {
                                return {
                                    id: a.term,
                                    text: a.term
                                }
                            }; h < g.length;) {
                            var j = g[h];
                            if (-1 !== a.inArray(j, f)) {
                                var k = g.substr(0, h),
                                    l = a.extend({}, c, {
                                        term: k
                                    }),
                                    m = i(l);
                                null != m ? (e(m), g = g.substr(h + 1) || "", h = 0) : h++
                            } else h++
                        }
                        return {
                            term: g
                        }
                    }, b
                }), b.define("select2/data/minimumInputLength", [], function() {
                    function a(a, b, c) {
                        this.minimumInputLength = c.get("minimumInputLength"), a.call(this, b, c)
                    }
                    return a.prototype.query = function(a, b, c) {
                        if (b.term = b.term || "", b.term.length < this.minimumInputLength) return void this.trigger("results:message", {
                            message: "inputTooShort",
                            args: {
                                minimum: this.minimumInputLength,
                                input: b.term,
                                params: b
                            }
                        });
                        a.call(this, b, c)
                    }, a
                }), b.define("select2/data/maximumInputLength", [], function() {
                    function a(a, b, c) {
                        this.maximumInputLength = c.get("maximumInputLength"), a.call(this, b, c)
                    }
                    return a.prototype.query = function(a, b, c) {
                        if (b.term = b.term || "", this.maximumInputLength > 0 && b.term.length > this.maximumInputLength) return void this.trigger("results:message", {
                            message: "inputTooLong",
                            args: {
                                maximum: this.maximumInputLength,
                                input: b.term,
                                params: b
                            }
                        });
                        a.call(this, b, c)
                    }, a
                }), b.define("select2/data/maximumSelectionLength", [], function() {
                    function a(a, b, c) {
                        this.maximumSelectionLength = c.get("maximumSelectionLength"), a.call(this, b, c)
                    }
                    return a.prototype.query = function(a, b, c) {
                        var d = this;
                        this.current(function(e) {
                            var f = null != e ? e.length : 0;
                            if (d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength) return void d.trigger("results:message", {
                                message: "maximumSelected",
                                args: {
                                    maximum: d.maximumSelectionLength
                                }
                            });
                            a.call(d, b, c)
                        })
                    }, a
                }), b.define("select2/dropdown", ["jquery", "./utils"], function(a, b) {
                    function c(a, b) {
                        this.$element = a, this.options = b, c.__super__.constructor.call(this)
                    }
                    return b.Extend(c, b.Observable), c.prototype.render = function() {
                        var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                        return b.attr("dir", this.options.get("dir")), this.$dropdown = b, b
                    }, c.prototype.bind = function() {}, c.prototype.position = function(a, b) {}, c.prototype.destroy = function() {
                        this.$dropdown.remove()
                    }, c
                }), b.define("select2/dropdown/search", ["jquery", "../utils"], function(a, b) {
                    function c() {}
                    return c.prototype.render = function(b) {
                        var c = b.call(this),
                            d = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');
                        return this.$searchContainer = d, this.$search = d.find("input"), c.prepend(d), c
                    }, c.prototype.bind = function(b, c, d) {
                        var e = this;
                        b.call(this, c, d), this.$search.on("keydown", function(a) {
                            e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented()
                        }), this.$search.on("input", function(b) {
                            a(this).off("keyup")
                        }), this.$search.on("keyup input", function(a) {
                            e.handleSearch(a)
                        }), c.on("open", function() {
                            e.$search.attr("tabindex", 0), e.$search.focus(), window.setTimeout(function() {
                                e.$search.focus()
                            }, 0)
                        }), c.on("close", function() {
                            e.$search.attr("tabindex", -1), e.$search.val("")
                        }), c.on("focus", function() {
                            c.isOpen() || e.$search.focus()
                        }), c.on("results:all", function(a) {
                            if (null == a.query.term || "" === a.query.term) {
                                e.showSearch(a) ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide")
                            }
                        })
                    }, c.prototype.handleSearch = function(a) {
                        if (!this._keyUpPrevented) {
                            var b = this.$search.val();
                            this.trigger("query", {
                                term: b
                            })
                        }
                        this._keyUpPrevented = !1
                    }, c.prototype.showSearch = function(a, b) {
                        return !0
                    }, c
                }), b.define("select2/dropdown/hidePlaceholder", [], function() {
                    function a(a, b, c, d) {
                        this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c, d)
                    }
                    return a.prototype.append = function(a, b) {
                        b.results = this.removePlaceholder(b.results), a.call(this, b)
                    }, a.prototype.normalizePlaceholder = function(a, b) {
                        return "string" == typeof b && (b = {
                            id: "",
                            text: b
                        }), b
                    }, a.prototype.removePlaceholder = function(a, b) {
                        for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) {
                            var e = b[d];
                            this.placeholder.id === e.id && c.splice(d, 1)
                        }
                        return c
                    }, a
                }), b.define("select2/dropdown/infiniteScroll", ["jquery"], function(a) {
                    function b(a, b, c, d) {
                        this.lastParams = {}, a.call(this, b, c, d), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                    }
                    return b.prototype.append = function(a, b) {
                        this.$loadingMore.remove(), this.loading = !1, a.call(this, b), this.showLoadingMore(b) && this.$results.append(this.$loadingMore)
                    }, b.prototype.bind = function(b, c, d) {
                        var e = this;
                        b.call(this, c, d), c.on("query", function(a) {
                            e.lastParams = a, e.loading = !0
                        }), c.on("query:append", function(a) {
                            e.lastParams = a, e.loading = !0
                        }), this.$results.on("scroll", function() {
                            var b = a.contains(document.documentElement, e.$loadingMore[0]);
                            if (!e.loading && b) {
                                e.$results.offset().top + e.$results.outerHeight(!1) + 50 >= e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1) && e.loadMore()
                            }
                        })
                    }, b.prototype.loadMore = function() {
                        this.loading = !0;
                        var b = a.extend({}, {
                            page: 1
                        }, this.lastParams);
                        b.page++, this.trigger("query:append", b)
                    }, b.prototype.showLoadingMore = function(a, b) {
                        return b.pagination && b.pagination.more
                    }, b.prototype.createLoadingMore = function() {
                        var b = a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                            c = this.options.get("translations").get("loadingMore");
                        return b.html(c(this.lastParams)), b
                    }, b
                }), b.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(a, b) {
                    function c(b, c, d) {
                        this.$dropdownParent = d.get("dropdownParent") || a(document.body), b.call(this, c, d)
                    }
                    return c.prototype.bind = function(a, b, c) {
                        var d = this,
                            e = !1;
                        a.call(this, b, c), b.on("open", function() {
                            d._showDropdown(), d._attachPositioningHandler(b), e || (e = !0, b.on("results:all", function() {
                                d._positionDropdown(), d._resizeDropdown()
                            }), b.on("results:append", function() {
                                d._positionDropdown(), d._resizeDropdown()
                            }))
                        }), b.on("close", function() {
                            d._hideDropdown(), d._detachPositioningHandler(b)
                        }), this.$dropdownContainer.on("mousedown", function(a) {
                            a.stopPropagation()
                        })
                    }, c.prototype.destroy = function(a) {
                        a.call(this), this.$dropdownContainer.remove()
                    }, c.prototype.position = function(a, b, c) {
                        b.attr("class", c.attr("class")), b.removeClass("select2"), b.addClass("select2-container--open"), b.css({
                            position: "absolute",
                            top: -999999
                        }), this.$container = c
                    }, c.prototype.render = function(b) {
                        var c = a("<span></span>"),
                            d = b.call(this);
                        return c.append(d), this.$dropdownContainer = c, c
                    }, c.prototype._hideDropdown = function(a) {
                        this.$dropdownContainer.detach()
                    }, c.prototype._attachPositioningHandler = function(c, d) {
                        var e = this,
                            f = "scroll.select2." + d.id,
                            g = "resize.select2." + d.id,
                            h = "orientationchange.select2." + d.id,
                            i = this.$container.parents().filter(b.hasScroll);
                        i.each(function() {
                            a(this).data("select2-scroll-position", {
                                x: a(this).scrollLeft(),
                                y: a(this).scrollTop()
                            })
                        }), i.on(f, function(b) {
                            var c = a(this).data("select2-scroll-position");
                            a(this).scrollTop(c.y)
                        }), a(window).on(f + " " + g + " " + h, function(a) {
                            e._positionDropdown(), e._resizeDropdown()
                        })
                    }, c.prototype._detachPositioningHandler = function(c, d) {
                        var e = "scroll.select2." + d.id,
                            f = "resize.select2." + d.id,
                            g = "orientationchange.select2." + d.id;
                        this.$container.parents().filter(b.hasScroll).off(e), a(window).off(e + " " + f + " " + g)
                    }, c.prototype._positionDropdown = function() {
                        var b = a(window),
                            c = this.$dropdown.hasClass("select2-dropdown--above"),
                            d = this.$dropdown.hasClass("select2-dropdown--below"),
                            e = null,
                            f = this.$container.offset();
                        f.bottom = f.top + this.$container.outerHeight(!1);
                        var g = {
                            height: this.$container.outerHeight(!1)
                        };
                        g.top = f.top, g.bottom = f.top + g.height;
                        var h = {
                                height: this.$dropdown.outerHeight(!1)
                            },
                            i = {
                                top: b.scrollTop(),
                                bottom: b.scrollTop() + b.height()
                            },
                            j = i.top < f.top - h.height,
                            k = i.bottom > f.bottom + h.height,
                            l = {
                                left: f.left,
                                top: g.bottom
                            },
                            m = this.$dropdownParent;
                        "static" === m.css("position") && (m = m.offsetParent());
                        var n = m.offset();
                        l.top -= n.top, l.left -= n.left, c || d || (e = "below"), k || !j || c ? !j && k && c && (e = "below") : e = "above", ("above" == e || c && "below" !== e) && (l.top = g.top - n.top - h.height), null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)), this.$dropdownContainer.css(l)
                    }, c.prototype._resizeDropdown = function() {
                        var a = {
                            width: this.$container.outerWidth(!1) + "px"
                        };
                        this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.position = "relative", a.width = "auto"), this.$dropdown.css(a)
                    }, c.prototype._showDropdown = function(a) {
                        this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                    }, c
                }), b.define("select2/dropdown/minimumResultsForSearch", [], function() {
                    function a(b) {
                        for (var c = 0, d = 0; d < b.length; d++) {
                            var e = b[d];
                            e.children ? c += a(e.children) : c++
                        }
                        return c
                    }

                    function b(a, b, c, d) {
                        this.minimumResultsForSearch = c.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), a.call(this, b, c, d)
                    }
                    return b.prototype.showSearch = function(b, c) {
                        return !(a(c.data.results) < this.minimumResultsForSearch) && b.call(this, c)
                    }, b
                }), b.define("select2/dropdown/selectOnClose", [], function() {
                    function a() {}
                    return a.prototype.bind = function(a, b, c) {
                        var d = this;
                        a.call(this, b, c), b.on("close", function(a) {
                            d._handleSelectOnClose(a)
                        })
                    }, a.prototype._handleSelectOnClose = function(a, b) {
                        if (b && null != b.originalSelect2Event) {
                            var c = b.originalSelect2Event;
                            if ("select" === c._type || "unselect" === c._type) return
                        }
                        var d = this.getHighlightedResults();
                        if (!(d.length < 1)) {
                            var e = d.data("data");
                            null != e.element && e.element.selected || null == e.element && e.selected || this.trigger("select", {
                                data: e
                            })
                        }
                    }, a
                }), b.define("select2/dropdown/closeOnSelect", [], function() {
                    function a() {}
                    return a.prototype.bind = function(a, b, c) {
                        var d = this;
                        a.call(this, b, c), b.on("select", function(a) {
                            d._selectTriggered(a)
                        }), b.on("unselect", function(a) {
                            d._selectTriggered(a)
                        })
                    }, a.prototype._selectTriggered = function(a, b) {
                        var c = b.originalEvent;
                        c && c.ctrlKey || this.trigger("close", {
                            originalEvent: c,
                            originalSelect2Event: b
                        })
                    }, a
                }), b.define("select2/i18n/en", [], function() {
                    return {
                        errorLoading: function() {
                            return "The results could not be loaded."
                        },
                        inputTooLong: function(a) {
                            var b = a.input.length - a.maximum,
                                c = "Please delete " + b + " character";
                            return 1 != b && (c += "s"), c
                        },
                        inputTooShort: function(a) {
                            return "Please enter " + (a.minimum - a.input.length) + " or more characters"
                        },
                        loadingMore: function() {
                            return "Loading more results…"
                        },
                        maximumSelected: function(a) {
                            var b = "You can only select " + a.maximum + " item";
                            return 1 != a.maximum && (b += "s"), b
                        },
                        noResults: function() {
                            return "No results found"
                        },
                        searching: function() {
                            return "Searching…"
                        }
                    }
                }), b.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) {
                    function D() {
                        this.reset()
                    }
                    return D.prototype.apply = function(l) {
                        if (l = a.extend(!0, {}, this.defaults, l), null == l.dataAdapter) {
                            if (null != l.ajax ? l.dataAdapter = o : null != l.data ? l.dataAdapter = n : l.dataAdapter = m, l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)), l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)), l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)), l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)), null == l.tokenSeparators && null == l.tokenizer || (l.dataAdapter = j.Decorate(l.dataAdapter, q)), null != l.query) {
                                var C = b(l.amdBase + "compat/query");
                                l.dataAdapter = j.Decorate(l.dataAdapter, C)
                            }
                            if (null != l.initSelection) {
                                var D = b(l.amdBase + "compat/initSelection");
                                l.dataAdapter = j.Decorate(l.dataAdapter, D)
                            }
                        }
                        if (null == l.resultsAdapter && (l.resultsAdapter = c, null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)), null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)), l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))), null == l.dropdownAdapter) {
                            if (l.multiple) l.dropdownAdapter = u;
                            else {
                                var E = j.Decorate(u, v);
                                l.dropdownAdapter = E
                            }
                            if (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)), l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)), null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) {
                                var F = b(l.amdBase + "compat/dropdownCss");
                                l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F)
                            }
                            l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y)
                        }
                        if (null == l.selectionAdapter) {
                            if (l.multiple ? l.selectionAdapter = e : l.selectionAdapter = d, null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)), l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)), l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)), null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) {
                                var G = b(l.amdBase + "compat/containerCss");
                                l.selectionAdapter = j.Decorate(l.selectionAdapter, G)
                            }
                            l.selectionAdapter = j.Decorate(l.selectionAdapter, i)
                        }
                        if ("string" == typeof l.language)
                            if (l.language.indexOf("-") > 0) {
                                var H = l.language.split("-"),
                                    I = H[0];
                                l.language = [l.language, I]
                            } else l.language = [l.language];
                        if (a.isArray(l.language)) {
                            var J = new k;
                            l.language.push("en");
                            for (var K = l.language, L = 0; L < K.length; L++) {
                                var M = K[L],
                                    N = {};
                                try {
                                    N = k.loadPath(M)
                                } catch (a) {
                                    try {
                                        M = this.defaults.amdLanguageBase + M, N = k.loadPath(M)
                                    } catch (a) {
                                        l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.');
                                        continue
                                    }
                                }
                                J.extend(N)
                            }
                            l.translations = J
                        } else {
                            var O = k.loadPath(this.defaults.amdLanguageBase + "en"),
                                P = new k(l.language);
                            P.extend(O), l.translations = P
                        }
                        return l
                    }, D.prototype.reset = function() {
                        function b(a) {
                            function b(a) {
                                return l[a] || a
                            }
                            return a.replace(/[^\u0000-\u007E]/g, b)
                        }

                        function c(d, e) {
                            if ("" === a.trim(d.term)) return e;
                            if (e.children && e.children.length > 0) {
                                for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) {
                                    null == c(d, e.children[g]) && f.children.splice(g, 1)
                                }
                                return f.children.length > 0 ? f : c(d, f)
                            }
                            var h = b(e.text).toUpperCase(),
                                i = b(d.term).toUpperCase();
                            return h.indexOf(i) > -1 ? e : null
                        }
                        this.defaults = {
                            amdBase: "./",
                            amdLanguageBase: "./i18n/",
                            closeOnSelect: !0,
                            debug: !1,
                            dropdownAutoWidth: !1,
                            escapeMarkup: j.escapeMarkup,
                            language: C,
                            matcher: c,
                            minimumInputLength: 0,
                            maximumInputLength: 0,
                            maximumSelectionLength: 0,
                            minimumResultsForSearch: 0,
                            selectOnClose: !1,
                            sorter: function(a) {
                                return a
                            },
                            templateResult: function(a) {
                                return a.text
                            },
                            templateSelection: function(a) {
                                return a.text
                            },
                            theme: "default",
                            width: "resolve"
                        }
                    }, D.prototype.set = function(b, c) {
                        var d = a.camelCase(b),
                            e = {};
                        e[d] = c;
                        var f = j._convertData(e);
                        a.extend(this.defaults, f)
                    }, new D
                }), b.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(a, b, c, d) {
                    function e(b, e) {
                        if (this.options = b, null != e && this.fromElement(e), this.options = c.apply(this.options), e && e.is("input")) {
                            var f = a(this.get("amdBase") + "compat/inputData");
                            this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f)
                        }
                    }
                    return e.prototype.fromElement = function(a) {
                        var c = ["select2"];
                        null == this.options.multiple && (this.options.multiple = a.prop("multiple")), null == this.options.disabled && (this.options.disabled = a.prop("disabled")), null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang"))), null == this.options.dir && (a.prop("dir") ? this.options.dir = a.prop("dir") : a.closest("[dir]").prop("dir") ? this.options.dir = a.closest("[dir]").prop("dir") : this.options.dir = "ltr"), a.prop("disabled", this.options.disabled), a.prop("multiple", this.options.multiple), a.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), a.data("data", a.data("select2Tags")), a.data("tags", !0)), a.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), a.attr("ajax--url", a.data("ajaxUrl")), a.data("ajax--url", a.data("ajaxUrl")));
                        var e = {};
                        e = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, a.data()) : a.data();
                        var f = b.extend(!0, {}, e);
                        f = d._convertData(f);
                        for (var g in f) b.inArray(g, c) > -1 || (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : this.options[g] = f[g]);
                        return this
                    }, e.prototype.get = function(a) {
                        return this.options[a]
                    }, e.prototype.set = function(a, b) {
                        this.options[a] = b
                    }, e
                }), b.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(a, b, c, d) {
                    var e = function(a, c) {
                        null != a.data("select2") && a.data("select2").destroy(), this.$element = a, this.id = this._generateId(a), c = c || {}, this.options = new b(c, a), e.__super__.constructor.call(this);
                        var d = a.attr("tabindex") || 0;
                        a.data("old-tabindex", d), a.attr("tabindex", "-1");
                        var f = this.options.get("dataAdapter");
                        this.dataAdapter = new f(a, this.options);
                        var g = this.render();
                        this._placeContainer(g);
                        var h = this.options.get("selectionAdapter");
                        this.selection = new h(a, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, g);
                        var i = this.options.get("dropdownAdapter");
                        this.dropdown = new i(a, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, g);
                        var j = this.options.get("resultsAdapter");
                        this.results = new j(a, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                        var k = this;
                        this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(a) {
                            k.trigger("selection:update", {
                                data: a
                            })
                        }), a.addClass("select2-hidden-accessible"), a.attr("aria-hidden", "true"), this._syncAttributes(), a.data("select2", this)
                    };
                    return c.Extend(e, c.Observable), e.prototype._generateId = function(a) {
                        var b = "";
                        return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + c.generateChars(2) : c.generateChars(4), b = b.replace(/(:|\.|\[|\]|,)/g, ""), b = "select2-" + b
                    }, e.prototype._placeContainer = function(a) {
                        a.insertAfter(this.$element);
                        var b = this._resolveWidth(this.$element, this.options.get("width"));
                        null != b && a.css("width", b)
                    }, e.prototype._resolveWidth = function(a, b) {
                        var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                        if ("resolve" == b) {
                            var d = this._resolveWidth(a, "style");
                            return null != d ? d : this._resolveWidth(a, "element")
                        }
                        if ("element" == b) {
                            var e = a.outerWidth(!1);
                            return e <= 0 ? "auto" : e + "px"
                        }
                        if ("style" == b) {
                            var f = a.attr("style");
                            if ("string" != typeof f) return null;
                            for (var g = f.split(";"), h = 0, i = g.length; h < i; h += 1) {
                                var j = g[h].replace(/\s/g, ""),
                                    k = j.match(c);
                                if (null !== k && k.length >= 1) return k[1]
                            }
                            return null
                        }
                        return b
                    }, e.prototype._bindAdapters = function() {
                        this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                    }, e.prototype._registerDomEvents = function() {
                        var b = this;
                        this.$element.on("change.select2", function() {
                            b.dataAdapter.current(function(a) {
                                b.trigger("selection:update", {
                                    data: a
                                })
                            })
                        }), this.$element.on("focus.select2", function(a) {
                            b.trigger("focus", a)
                        }), this._syncA = c.bind(this._syncAttributes, this), this._syncS = c.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                        var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                        null != d ? (this._observer = new d(function(c) {
                            a.each(c, b._syncA), a.each(c, b._syncS)
                        }), this._observer.observe(this.$element[0], {
                            attributes: !0,
                            childList: !0,
                            subtree: !1
                        })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", b._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", b._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", b._syncS, !1))
                    }, e.prototype._registerDataEvents = function() {
                        var a = this;
                        this.dataAdapter.on("*", function(b, c) {
                            a.trigger(b, c)
                        })
                    }, e.prototype._registerSelectionEvents = function() {
                        var b = this,
                            c = ["toggle", "focus"];
                        this.selection.on("toggle", function() {
                            b.toggleDropdown()
                        }), this.selection.on("focus", function(a) {
                            b.focus(a)
                        }), this.selection.on("*", function(d, e) {
                            -1 === a.inArray(d, c) && b.trigger(d, e)
                        })
                    }, e.prototype._registerDropdownEvents = function() {
                        var a = this;
                        this.dropdown.on("*", function(b, c) {
                            a.trigger(b, c)
                        })
                    }, e.prototype._registerResultsEvents = function() {
                        var a = this;
                        this.results.on("*", function(b, c) {
                            a.trigger(b, c)
                        })
                    }, e.prototype._registerEvents = function() {
                        var a = this;
                        this.on("open", function() {
                            a.$container.addClass("select2-container--open")
                        }), this.on("close", function() {
                            a.$container.removeClass("select2-container--open")
                        }), this.on("enable", function() {
                            a.$container.removeClass("select2-container--disabled")
                        }), this.on("disable", function() {
                            a.$container.addClass("select2-container--disabled")
                        }), this.on("blur", function() {
                            a.$container.removeClass("select2-container--focus")
                        }), this.on("query", function(b) {
                            a.isOpen() || a.trigger("open", {}), this.dataAdapter.query(b, function(c) {
                                a.trigger("results:all", {
                                    data: c,
                                    query: b
                                })
                            })
                        }), this.on("query:append", function(b) {
                            this.dataAdapter.query(b, function(c) {
                                a.trigger("results:append", {
                                    data: c,
                                    query: b
                                })
                            })
                        }), this.on("keypress", function(b) {
                            var c = b.which;
                            a.isOpen() ? c === d.ESC || c === d.TAB || c === d.UP && b.altKey ? (a.close(), b.preventDefault()) : c === d.ENTER ? (a.trigger("results:select", {}), b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle", {}), b.preventDefault()) : c === d.UP ? (a.trigger("results:previous", {}), b.preventDefault()) : c === d.DOWN && (a.trigger("results:next", {}), b.preventDefault()) : (c === d.ENTER || c === d.SPACE || c === d.DOWN && b.altKey) && (a.open(), b.preventDefault())
                        })
                    }, e.prototype._syncAttributes = function() {
                        this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                    }, e.prototype._syncSubtree = function(a, b) {
                        var c = !1,
                            d = this;
                        if (!a || !a.target || "OPTION" === a.target.nodeName || "OPTGROUP" === a.target.nodeName) {
                            if (b)
                                if (b.addedNodes && b.addedNodes.length > 0)
                                    for (var e = 0; e < b.addedNodes.length; e++) {
                                        var f = b.addedNodes[e];
                                        f.selected && (c = !0)
                                    } else b.removedNodes && b.removedNodes.length > 0 && (c = !0);
                                else c = !0;
                            c && this.dataAdapter.current(function(a) {
                                d.trigger("selection:update", {
                                    data: a
                                })
                            })
                        }
                    }, e.prototype.trigger = function(a, b) {
                        var c = e.__super__.trigger,
                            d = {
                                open: "opening",
                                close: "closing",
                                select: "selecting",
                                unselect: "unselecting"
                            };
                        if (void 0 === b && (b = {}), a in d) {
                            var f = d[a],
                                g = {
                                    prevented: !1,
                                    name: a,
                                    args: b
                                };
                            if (c.call(this, f, g), g.prevented) return void(b.prevented = !0)
                        }
                        c.call(this, a, b)
                    }, e.prototype.toggleDropdown = function() {
                        this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                    }, e.prototype.open = function() {
                        this.isOpen() || this.trigger("query", {})
                    }, e.prototype.close = function() {
                        this.isOpen() && this.trigger("close", {})
                    }, e.prototype.isOpen = function() {
                        return this.$container.hasClass("select2-container--open")
                    }, e.prototype.hasFocus = function() {
                        return this.$container.hasClass("select2-container--focus")
                    }, e.prototype.focus = function(a) {
                        this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                    }, e.prototype.enable = function(a) {
                        this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != a && 0 !== a.length || (a = [!0]);
                        var b = !a[0];
                        this.$element.prop("disabled", b)
                    }, e.prototype.data = function() {
                        this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                        var a = [];
                        return this.dataAdapter.current(function(b) {
                            a = b
                        }), a
                    }, e.prototype.val = function(b) {
                        if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == b || 0 === b.length) return this.$element.val();
                        var c = b[0];
                        a.isArray(c) && (c = a.map(c, function(a) {
                            return a.toString()
                        })), this.$element.val(c).trigger("change")
                    }, e.prototype.destroy = function() {
                        this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                    }, e.prototype.render = function() {
                        var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                        return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), b.data("element", this.$element), b
                    }, e
                }), b.define("select2/compat/utils", ["jquery"], function(a) {
                    function b(b, c, d) {
                        var e, f, g = [];
                        e = a.trim(b.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function() {
                            0 === this.indexOf("select2-") && g.push(this)
                        })), e = a.trim(c.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function() {
                            0 !== this.indexOf("select2-") && null != (f = d(this)) && g.push(f)
                        })), b.attr("class", g.join(" "))
                    }
                    return {
                        syncCssClasses: b
                    }
                }), b.define("select2/compat/containerCss", ["jquery", "./utils"], function(a, b) {
                    function c(a) {
                        return null
                    }

                    function d() {}
                    return d.prototype.render = function(d) {
                        var e = d.call(this),
                            f = this.options.get("containerCssClass") || "";
                        a.isFunction(f) && (f = f(this.$element));
                        var g = this.options.get("adaptContainerCssClass");
                        if (g = g || c, -1 !== f.indexOf(":all:")) {
                            f = f.replace(":all:", "");
                            var h = g;
                            g = function(a) {
                                var b = h(a);
                                return null != b ? b + " " + a : a
                            }
                        }
                        var i = this.options.get("containerCss") || {};
                        return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e
                    }, d
                }), b.define("select2/compat/dropdownCss", ["jquery", "./utils"], function(a, b) {
                    function c(a) {
                        return null
                    }

                    function d() {}
                    return d.prototype.render = function(d) {
                        var e = d.call(this),
                            f = this.options.get("dropdownCssClass") || "";
                        a.isFunction(f) && (f = f(this.$element));
                        var g = this.options.get("adaptDropdownCssClass");
                        if (g = g || c, -1 !== f.indexOf(":all:")) {
                            f = f.replace(":all:", "");
                            var h = g;
                            g = function(a) {
                                var b = h(a);
                                return null != b ? b + " " + a : a
                            }
                        }
                        var i = this.options.get("dropdownCss") || {};
                        return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e
                    }, d
                }), b.define("select2/compat/initSelection", ["jquery"], function(a) {
                    function b(a, b, c) {
                        c.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = c.get("initSelection"), this._isInitialized = !1, a.call(this, b, c)
                    }
                    return b.prototype.current = function(b, c) {
                        var d = this;
                        if (this._isInitialized) return void b.call(this, c);
                        this.initSelection.call(null, this.$element, function(b) {
                            d._isInitialized = !0, a.isArray(b) || (b = [b]), c(b)
                        })
                    }, b
                }), b.define("select2/compat/inputData", ["jquery"], function(a) {
                    function b(a, b, c) {
                        this._currentData = [], this._valueSeparator = c.get("valueSeparator") || ",", "hidden" === b.prop("type") && c.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), a.call(this, b, c)
                    }
                    return b.prototype.current = function(b, c) {
                        function d(b, c) {
                            var e = [];
                            return b.selected || -1 !== a.inArray(b.id, c) ? (b.selected = !0, e.push(b)) : b.selected = !1, b.children && e.push.apply(e, d(b.children, c)), e
                        }
                        for (var e = [], f = 0; f < this._currentData.length; f++) {
                            var g = this._currentData[f];
                            e.push.apply(e, d(g, this.$element.val().split(this._valueSeparator)))
                        }
                        c(e)
                    }, b.prototype.select = function(b, c) {
                        if (this.options.get("multiple")) {
                            var d = this.$element.val();
                            d += this._valueSeparator + c.id, this.$element.val(d), this.$element.trigger("change")
                        } else this.current(function(b) {
                            a.map(b, function(a) {
                                a.selected = !1
                            })
                        }), this.$element.val(c.id), this.$element.trigger("change")
                    }, b.prototype.unselect = function(a, b) {
                        var c = this;
                        b.selected = !1, this.current(function(a) {
                            for (var d = [], e = 0; e < a.length; e++) {
                                var f = a[e];
                                b.id != f.id && d.push(f.id)
                            }
                            c.$element.val(d.join(c._valueSeparator)), c.$element.trigger("change")
                        })
                    }, b.prototype.query = function(a, b, c) {
                        for (var d = [], e = 0; e < this._currentData.length; e++) {
                            var f = this._currentData[e],
                                g = this.matches(b, f);
                            null !== g && d.push(g)
                        }
                        c({
                            results: d
                        })
                    }, b.prototype.addOptions = function(b, c) {
                        var d = a.map(c, function(b) {
                            return a.data(b[0], "data")
                        });
                        this._currentData.push.apply(this._currentData, d)
                    }, b
                }), b.define("select2/compat/matcher", ["jquery"], function(a) {
                    function b(b) {
                        function c(c, d) {
                            var e = a.extend(!0, {}, d);
                            if (null == c.term || "" === a.trim(c.term)) return e;
                            if (d.children) {
                                for (var f = d.children.length - 1; f >= 0; f--) {
                                    var g = d.children[f];
                                    b(c.term, g.text, g) || e.children.splice(f, 1)
                                }
                                if (e.children.length > 0) return e
                            }
                            return b(c.term, d.text, d) ? e : null
                        }
                        return c
                    }
                    return b
                }), b.define("select2/compat/query", [], function() {
                    function a(a, b, c) {
                        c.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), a.call(this, b, c)
                    }
                    return a.prototype.query = function(a, b, c) {
                        b.callback = c, this.options.get("query").call(null, b)
                    }, a
                }), b.define("select2/dropdown/attachContainer", [], function() {
                    function a(a, b, c) {
                        a.call(this, b, c)
                    }
                    return a.prototype.position = function(a, b, c) {
                        c.find(".dropdown-wrapper").append(b), b.addClass("select2-dropdown--below"), c.addClass("select2-container--below")
                    }, a
                }), b.define("select2/dropdown/stopPropagation", [], function() {
                    function a() {}
                    return a.prototype.bind = function(a, b, c) {
                        a.call(this, b, c);
                        var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                        this.$dropdown.on(d.join(" "), function(a) {
                            a.stopPropagation()
                        })
                    }, a
                }), b.define("select2/selection/stopPropagation", [], function() {
                    function a() {}
                    return a.prototype.bind = function(a, b, c) {
                        a.call(this, b, c);
                        var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                        this.$selection.on(d.join(" "), function(a) {
                            a.stopPropagation()
                        })
                    }, a
                }),
                function(c) {
                    "function" == typeof b.define && b.define.amd ? b.define("jquery-mousewheel", ["jquery"], c) : "object" == typeof exports ? module.exports = c : c(a)
                }(function(a) {
                    function b(b) {
                        var g = b || window.event,
                            h = i.call(arguments, 1),
                            j = 0,
                            l = 0,
                            m = 0,
                            n = 0,
                            o = 0,
                            p = 0;
                        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
                            if (1 === g.deltaMode) {
                                var q = a.data(this, "mousewheel-line-height");
                                j *= q, m *= q, l *= q
                            } else if (2 === g.deltaMode) {
                                var r = a.data(this, "mousewheel-page-height");
                                j *= r, m *= r, l *= r
                            }
                            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || n < f) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                                var s = this.getBoundingClientRect();
                                o = b.clientX - s.left, p = b.clientY - s.top
                            }
                            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
                        }
                    }

                    function c() {
                        f = null
                    }

                    function d(a, b) {
                        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 == 0
                    }
                    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                        i = Array.prototype.slice;
                    if (a.event.fixHooks)
                        for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
                    var k = a.event.special.mousewheel = {
                        version: "3.1.12",
                        setup: function() {
                            if (this.addEventListener)
                                for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
                            else this.onmousewheel = b;
                            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
                        },
                        teardown: function() {
                            if (this.removeEventListener)
                                for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
                            else this.onmousewheel = null;
                            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
                        },
                        getLineHeight: function(b) {
                            var c = a(b),
                                d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
                            return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
                        },
                        getPageHeight: function(b) {
                            return a(b).height()
                        },
                        settings: {
                            adjustOldDeltas: !0,
                            normalizeOffset: !0
                        }
                    };
                    a.fn.extend({
                        mousewheel: function(a) {
                            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
                        },
                        unmousewheel: function(a) {
                            return this.unbind("mousewheel", a)
                        }
                    })
                }), b.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(a, b, c, d) {
                    if (null == a.fn.select2) {
                        var e = ["open", "close", "destroy"];
                        a.fn.select2 = function(b) {
                            if ("object" == typeof(b = b || {})) return this.each(function() {
                                var d = a.extend(!0, {}, b);
                                new c(a(this), d)
                            }), this;
                            if ("string" == typeof b) {
                                var d, f = Array.prototype.slice.call(arguments, 1);
                                return this.each(function() {
                                    var c = a(this).data("select2");
                                    null == c && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2."), d = c[b].apply(c, f)
                                }), a.inArray(b, e) > -1 ? this : d
                            }
                            throw new Error("Invalid arguments for Select2: " + b)
                        }
                    }
                    return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c
                }), {
                    define: b.define,
                    require: b.require
                }
        }(),
        c = b.require("jquery.select2");
    return a.fn.select2.amd = b, c
});; /**/
/*!
 * Infinite Scroll PACKAGED v3.0.5
 * Automatically add next page
 *
 * Licensed GPLv3 for open source use
 * or Infinite Scroll Commercial License for commercial use
 *
 * https://infinite-scroll.com
 * Copyright 2018 Metafizzy
 */

! function(t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";

    function i(i, r, l) {
        function a(t, e, n) {
            var o, r = "$()." + i + '("' + e + '")';
            return t.each(function(t, a) {
                var h = l.data(a, i);
                if (!h) return void s(i + " not initialized. Cannot call methods, i.e. " + r);
                var c = h[e];
                if (!c || "_" == e.charAt(0)) return void s(r + " is not a valid method");
                var u = c.apply(h, n);
                o = void 0 === o ? u : o
            }), void 0 !== o ? o : t
        }

        function h(t, e) {
            t.each(function(t, n) {
                var o = l.data(n, i);
                o ? (o.option(e), o._init()) : (o = new r(n, e), l.data(n, i, o))
            })
        }
        l = l || e || t.jQuery, l && (r.prototype.option || (r.prototype.option = function(t) {
            l.isPlainObject(t) && (this.options = l.extend(!0, this.options, t))
        }), l.fn[i] = function(t) {
            if ("string" == typeof t) {
                var e = o.call(arguments, 1);
                return a(this, t, e)
            }
            return h(this, t), this
        }, n(l))
    }

    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var o = Array.prototype.slice,
        r = t.console,
        s = "undefined" == typeof r ? function() {} : function(t) {
            r.error(t)
        };
    return n(e || t.jQuery), i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return n.indexOf(e) == -1 && n.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[t] = i[t] || {};
            return n[e] = !0, this
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return n != -1 && i.splice(n, 1), this
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0), e = e || [];
            for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
                var r = i[o],
                    s = n && n[r];
                s && (this.off(t, r), delete n[r]), r.apply(this, e)
            }
            return this
        }
    }, e.allOff = function() {
        delete this._events, delete this._onceEvents
    }, t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i],
                o = n + "MatchesSelector";
            if (t[o]) return o
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, i.modulo = function(t, e) {
        return (t % e + e) % e
    };
    var n = Array.prototype.slice;
    i.makeArray = function(t) {
        if (Array.isArray(t)) return t;
        if (null === t || void 0 === t) return [];
        var e = "object" == typeof t && "number" == typeof t.length;
        return e ? n.call(t) : [t]
    }, i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1)
    }, i.getParent = function(t, i) {
        for (; t.parentNode && t != document.body;)
            if (t = t.parentNode, e(t, i)) return t
    }, i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function(t, n) {
        t = i.makeArray(t);
        var o = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!n) return void o.push(t);
                e(t, n) && o.push(t);
                for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r])
            }
        }), o
    }, i.debounceMethod = function(t, e, i) {
        i = i || 100;
        var n = t.prototype[e],
            o = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[o];
            clearTimeout(t);
            var e = arguments,
                r = this;
            this[o] = setTimeout(function() {
                n.apply(r, e), delete r[o]
            }, i)
        }
    }, i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }, i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var o = t.console;
    return i.htmlInit = function(e, n) {
        i.docReady(function() {
            var r = i.toDashed(n),
                s = "data-" + r,
                l = document.querySelectorAll("[" + s + "]"),
                a = document.querySelectorAll(".js-" + r),
                h = i.makeArray(l).concat(i.makeArray(a)),
                c = s + "-options",
                u = t.jQuery;
            h.forEach(function(t) {
                var i, r = t.getAttribute(s) || t.getAttribute(c);
                try {
                    i = r && JSON.parse(r)
                } catch (l) {
                    return void(o && o.error("Error parsing " + s + " on " + t.className + ": " + l))
                }
                var a = new e(t, i);
                u && u.data(t, n, a)
            })
        })
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("infinite-scroll/js/core", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils"], function(i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("fizzy-ui-utils")) : t.InfiniteScroll = e(t, t.EvEmitter, t.fizzyUIUtils)
}(window, function(t, e, i) {
    function n(t, e) {
        var s = i.getQueryElement(t);
        if (!s) return void console.error("Bad element for InfiniteScroll: " + (s || t));
        if (t = s, t.infiniteScrollGUID) {
            var l = r[t.infiniteScrollGUID];
            return l.option(e), l
        }
        this.element = t, this.options = i.extend({}, n.defaults), this.option(e), o && (this.$element = o(this.element)), this.create()
    }
    var o = t.jQuery,
        r = {};
    n.defaults = {}, n.create = {}, n.destroy = {};
    var s = n.prototype;
    i.extend(s, e.prototype);
    var l = 0;
    s.create = function() {
        var t = this.guid = ++l;
        this.element.infiniteScrollGUID = t, r[t] = this, this.pageIndex = 1, this.loadCount = 0, this.updateGetPath();
        var e = this.getPath && this.getPath();
        if (!e) return void console.error("Disabling InfiniteScroll");
        this.updateGetAbsolutePath(), this.log("initialized", [this.element.className]), this.callOnInit();
        for (var i in n.create) n.create[i].call(this)
    }, s.option = function(t) {
        i.extend(this.options, t)
    }, s.callOnInit = function() {
        var t = this.options.onInit;
        t && t.call(this, this)
    }, s.dispatchEvent = function(t, e, i) {
        this.log(t, i);
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), o && this.$element) {
            t += ".infiniteScroll";
            var r = t;
            if (e) {
                var s = o.Event(e);
                s.type = t, r = s
            }
            this.$element.trigger(r, i)
        }
    };
    var a = {
        initialized: function(t) {
            return "on " + t
        },
        request: function(t) {
            return "URL: " + t
        },
        load: function(t, e) {
            return (t.title || "") + ". URL: " + e
        },
        error: function(t, e) {
            return t + ". URL: " + e
        },
        append: function(t, e, i) {
            return i.length + " items. URL: " + e
        },
        last: function(t, e) {
            return "URL: " + e
        },
        history: function(t, e) {
            return "URL: " + e
        },
        pageIndex: function(t, e) {
            return "current page determined to be: " + t + " from " + e
        }
    };
    s.log = function(t, e) {
        if (this.options.debug) {
            var i = "[InfiniteScroll] " + t,
                n = a[t];
            n && (i += ". " + n.apply(this, e)), console.log(i)
        }
    }, s.updateMeasurements = function() {
        this.windowHeight = t.innerHeight;
        var e = this.element.getBoundingClientRect();
        this.top = e.top + t.pageYOffset
    }, s.updateScroller = function() {
        var e = this.options.elementScroll;
        if (!e) return void(this.scroller = t);
        if (this.scroller = e === !0 ? this.element : i.getQueryElement(e), !this.scroller) throw "Unable to find elementScroll: " + e
    }, s.updateGetPath = function() {
        var t = this.options.path;
        if (!t) return void console.error("InfiniteScroll path option required. Set as: " + t);
        var e = typeof t;
        if ("function" == e) return void(this.getPath = t);
        var i = "string" == e && t.match("{{#}}");
        return i ? void this.updateGetPathTemplate(t) : void this.updateGetPathSelector(t)
    }, s.updateGetPathTemplate = function(t) {
        this.getPath = function() {
            var e = this.pageIndex + 1;
            return t.replace("{{#}}", e)
        }.bind(this);
        var e = t.replace("{{#}}", "(\\d\\d?\\d?)"),
            i = new RegExp(e),
            n = location.href.match(i);
        n && (this.pageIndex = parseInt(n[1], 10), this.log("pageIndex", [this.pageIndex, "template string"]))
    };
    var h = [/^(.*?\/?page\/?)(\d\d?\d?)(.*?$)/, /^(.*?\/?\?page=)(\d\d?\d?)(.*?$)/, /(.*?)(\d\d?\d?)(?!.*\d)(.*?$)/];
    return s.updateGetPathSelector = function(t) {
        var e = document.querySelector(t);
        if (!e) return void console.error("Bad InfiniteScroll path option. Next link not found: " + t);
        for (var i, n, o = e.getAttribute("href"), r = 0; o && r < h.length; r++) {
            n = h[r];
            var s = o.match(n);
            if (s) {
                i = s.slice(1);
                break
            }
        }
        return i ? (this.isPathSelector = !0, this.getPath = function() {
            var t = this.pageIndex + 1;
            return i[0] + t + i[2]
        }.bind(this), this.pageIndex = parseInt(i[1], 10) - 1, void this.log("pageIndex", [this.pageIndex, "next link"])) : void console.error("InfiniteScroll unable to parse next link href: " + o)
    }, s.updateGetAbsolutePath = function() {
        var t = this.getPath(),
            e = t.match(/^http/) || t.match(/^\//);
        if (e) return void(this.getAbsolutePath = this.getPath);
        var i = location.pathname,
            n = i.substring(0, i.lastIndexOf("/"));
        this.getAbsolutePath = function() {
            return n + "/" + this.getPath()
        }
    }, n.create.hideNav = function() {
        var t = i.getQueryElement(this.options.hideNav);
        t && (t.style.display = "none", this.nav = t)
    }, n.destroy.hideNav = function() {
        this.nav && (this.nav.style.display = "")
    }, s.destroy = function() {
        this.allOff();
        for (var t in n.destroy) n.destroy[t].call(this);
        delete this.element.infiniteScrollGUID, delete r[this.guid], o && this.$element && o.removeData(this.element, "infiniteScroll")
    }, n.throttle = function(t, e) {
        e = e || 200;
        var i, n;
        return function() {
            var o = +new Date,
                r = arguments,
                s = function() {
                    i = o, t.apply(this, r)
                }.bind(this);
            i && o < i + e ? (clearTimeout(n), n = setTimeout(s, e)) : s()
        }
    }, n.data = function(t) {
        t = i.getQueryElement(t);
        var e = t && t.infiniteScrollGUID;
        return e && r[e]
    }, n.setJQuery = function(t) {
        o = t
    }, i.htmlInit(n, "infinite-scroll"), s._init = function() {}, o && o.bridget && o.bridget("infiniteScroll", n), n
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("infinite-scroll/js/page-load", ["./core"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./core")) : e(t, t.InfiniteScroll)
}(window, function(t, e) {
    function i(t) {
        for (var e = document.createDocumentFragment(), i = 0; t && i < t.length; i++) e.appendChild(t[i]);
        return e
    }

    function n(t) {
        for (var e = t.querySelectorAll("script"), i = 0; i < e.length; i++) {
            var n = e[i],
                r = document.createElement("script");
            o(n, r), r.innerHTML = n.innerHTML, n.parentNode.replaceChild(r, n)
        }
    }

    function o(t, e) {
        for (var i = t.attributes, n = 0; n < i.length; n++) {
            var o = i[n];
            e.setAttribute(o.name, o.value)
        }
    }

    function r(t, e, i, n) {
        var o = new XMLHttpRequest;
        o.open("GET", t, !0), o.responseType = e || "", o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.onload = function() {
            if (200 == o.status) i(o.response);
            else {
                var t = new Error(o.statusText);
                n(t)
            }
        }, o.onerror = function() {
            var e = new Error("Network error requesting " + t);
            n(e)
        }, o.send()
    }
    var s = e.prototype;
    return e.defaults.loadOnScroll = !0, e.defaults.checkLastPage = !0, e.defaults.responseType = "document", e.create.pageLoad = function() {
        this.canLoad = !0, this.on("scrollThreshold", this.onScrollThresholdLoad), this.on("load", this.checkLastPage), this.options.outlayer && this.on("append", this.onAppendOutlayer)
    }, s.onScrollThresholdLoad = function() {
        this.options.loadOnScroll && this.loadNextPage()
    }, s.loadNextPage = function() {
        if (!this.isLoading && this.canLoad) {
            var t = this.getAbsolutePath();
            this.isLoading = !0;
            var e = function(e) {
                    this.onPageLoad(e, t)
                }.bind(this),
                i = function(e) {
                    this.onPageError(e, t)
                }.bind(this);
            r(t, this.options.responseType, e, i), this.dispatchEvent("request", null, [t])
        }
    }, s.onPageLoad = function(t, e) {
        return this.options.append || (this.isLoading = !1), this.pageIndex++, this.loadCount++, this.dispatchEvent("load", null, [t, e]), this.appendNextPage(t, e), t
    }, s.appendNextPage = function(t, e) {
        var n = this.options.append,
            o = "document" == this.options.responseType;
        if (o && n) {
            var r = t.querySelectorAll(n),
                s = i(r),
                l = function() {
                    this.appendItems(r, s), this.isLoading = !1, this.dispatchEvent("append", null, [t, e, r])
                }.bind(this);
            this.options.outlayer ? this.appendOutlayerItems(s, l) : l()
        }
    }, s.appendItems = function(t, e) {
        t && t.length && (e = e || i(t), n(e), this.element.appendChild(e))
    }, s.appendOutlayerItems = function(i, n) {
        var o = e.imagesLoaded || t.imagesLoaded;
        return o ? void o(i, n) : (console.error("[InfiniteScroll] imagesLoaded required for outlayer option"), void(this.isLoading = !1))
    }, s.onAppendOutlayer = function(t, e, i) {
        this.options.outlayer.appended(i)
    }, s.checkLastPage = function(t, e) {
        var i = this.options.checkLastPage;
        if (i) {
            var n = this.options.path;
            if ("function" == typeof n) {
                var o = this.getPath();
                if (!o) return void this.lastPageReached(t, e)
            }
            var r;
            if ("string" == typeof i ? r = i : this.isPathSelector && (r = n), r && t.querySelector) {
                var s = t.querySelector(r);
                s || this.lastPageReached(t, e)
            }
        }
    }, s.lastPageReached = function(t, e) {
        this.canLoad = !1, this.dispatchEvent("last", null, [t, e])
    }, s.onPageError = function(t, e) {
        return this.isLoading = !1, this.canLoad = !1, this.dispatchEvent("error", null, [t, e]), t
    }, e.create.prefill = function() {
        if (this.options.prefill) {
            var t = this.options.append;
            if (!t) return void console.error("append option required for prefill. Set as :" + t);
            this.updateMeasurements(), this.updateScroller(), this.isPrefilling = !0, this.on("append", this.prefill), this.once("error", this.stopPrefill), this.once("last", this.stopPrefill), this.prefill()
        }
    }, s.prefill = function() {
        var t = this.getPrefillDistance();
        this.isPrefilling = t >= 0, this.isPrefilling ? (this.log("prefill"), this.loadNextPage()) : this.stopPrefill()
    }, s.getPrefillDistance = function() {
        return this.options.elementScroll ? this.scroller.clientHeight - this.scroller.scrollHeight : this.windowHeight - this.element.clientHeight
    }, s.stopPrefill = function() {
        this.log("stopPrefill"), this.off("append", this.prefill)
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("infinite-scroll/js/scroll-watch", ["./core", "fizzy-ui-utils/utils"], function(i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./core"), require("fizzy-ui-utils")) : e(t, t.InfiniteScroll, t.fizzyUIUtils)
}(window, function(t, e, i) {
    var n = e.prototype;
    return e.defaults.scrollThreshold = 400, e.create.scrollWatch = function() {
        this.pageScrollHandler = this.onPageScroll.bind(this), this.resizeHandler = this.onResize.bind(this);
        var t = this.options.scrollThreshold,
            e = t || 0 === t;
        e && this.enableScrollWatch()
    }, e.destroy.scrollWatch = function() {
        this.disableScrollWatch()
    }, n.enableScrollWatch = function() {
        this.isScrollWatching || (this.isScrollWatching = !0, this.updateMeasurements(), this.updateScroller(), this.on("last", this.disableScrollWatch), this.bindScrollWatchEvents(!0))
    }, n.disableScrollWatch = function() {
        this.isScrollWatching && (this.bindScrollWatchEvents(!1), delete this.isScrollWatching)
    }, n.bindScrollWatchEvents = function(e) {
        var i = e ? "addEventListener" : "removeEventListener";
        this.scroller[i]("scroll", this.pageScrollHandler), t[i]("resize", this.resizeHandler)
    }, n.onPageScroll = e.throttle(function() {
        var t = this.getBottomDistance();
        t <= this.options.scrollThreshold && this.dispatchEvent("scrollThreshold")
    }), n.getBottomDistance = function() {
        return this.options.elementScroll ? this.getElementBottomDistance() : this.getWindowBottomDistance()
    }, n.getWindowBottomDistance = function() {
        var e = this.top + this.element.clientHeight,
            i = t.pageYOffset + this.windowHeight;
        return e - i
    }, n.getElementBottomDistance = function() {
        var t = this.scroller.scrollHeight,
            e = this.scroller.scrollTop + this.scroller.clientHeight;
        return t - e
    }, n.onResize = function() {
        this.updateMeasurements()
    }, i.debounceMethod(e, "onResize", 150), e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("infinite-scroll/js/history", ["./core", "fizzy-ui-utils/utils"], function(i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./core"), require("fizzy-ui-utils")) : e(t, t.InfiniteScroll, t.fizzyUIUtils)
}(window, function(t, e, i) {
    var n = e.prototype;
    e.defaults.history = "replace";
    var o = document.createElement("a");
    return e.create.history = function() {
        if (this.options.history) {
            o.href = this.getAbsolutePath();
            var t = o.origin || o.protocol + "//" + o.host,
                e = t == location.origin;
            return e ? void(this.options.append ? this.createHistoryAppend() : this.createHistoryPageLoad()) : void console.error("[InfiniteScroll] cannot set history with different origin: " + o.origin + " on " + location.origin + " . History behavior disabled.")
        }
    }, n.createHistoryAppend = function() {
        this.updateMeasurements(), this.updateScroller(), this.scrollPages = [{
            top: 0,
            path: location.href,
            title: document.title
        }], this.scrollPageIndex = 0, this.scrollHistoryHandler = this.onScrollHistory.bind(this), this.unloadHandler = this.onUnload.bind(this), this.scroller.addEventListener("scroll", this.scrollHistoryHandler), this.on("append", this.onAppendHistory), this.bindHistoryAppendEvents(!0)
    }, n.bindHistoryAppendEvents = function(e) {
        var i = e ? "addEventListener" : "removeEventListener";
        this.scroller[i]("scroll", this.scrollHistoryHandler), t[i]("unload", this.unloadHandler)
    }, n.createHistoryPageLoad = function() {
        this.on("load", this.onPageLoadHistory)
    }, e.destroy.history = n.destroyHistory = function() {
        var t = this.options.history && this.options.append;
        t && this.bindHistoryAppendEvents(!1)
    }, n.onAppendHistory = function(t, e, i) {
        if (i && i.length) {
            var n = i[0],
                r = this.getElementScrollY(n);
            o.href = e, this.scrollPages.push({
                top: r,
                path: o.href,
                title: t.title
            })
        }
    }, n.getElementScrollY = function(t) {
        return this.options.elementScroll ? this.getElementElementScrollY(t) : this.getElementWindowScrollY(t)
    }, n.getElementWindowScrollY = function(e) {
        var i = e.getBoundingClientRect();
        return i.top + t.pageYOffset
    }, n.getElementElementScrollY = function(t) {
        return t.offsetTop - this.top
    }, n.onScrollHistory = function() {
        for (var t, e, i = this.getScrollViewY(), n = 0; n < this.scrollPages.length; n++) {
            var o = this.scrollPages[n];
            if (o.top >= i) break;
            t = n, e = o
        }
        t != this.scrollPageIndex && (this.scrollPageIndex = t, this.setHistory(e.title, e.path))
    }, i.debounceMethod(e, "onScrollHistory", 150), n.getScrollViewY = function() {
        return this.options.elementScroll ? this.scroller.scrollTop + this.scroller.clientHeight / 2 : t.pageYOffset + this.windowHeight / 2
    }, n.setHistory = function(t, e) {
        var i = this.options.history,
            n = i && history[i + "State"];
        n && (history[i + "State"](null, t, e), this.options.historyTitle && (document.title = t), this.dispatchEvent("history", null, [t, e]))
    }, n.onUnload = function() {
        var e = this.scrollPageIndex;
        if (0 !== e) {
            var i = this.scrollPages[e],
                n = t.pageYOffset - i.top + this.top;
            this.destroyHistory(), scrollTo(0, n)
        }
    }, n.onPageLoadHistory = function(t, e) {
        this.setHistory(t.title, e)
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("infinite-scroll/js/button", ["./core", "fizzy-ui-utils/utils"], function(i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./core"), require("fizzy-ui-utils")) : e(t, t.InfiniteScroll, t.fizzyUIUtils)
}(window, function(t, e, i) {
    function n(t, e) {
        this.element = t, this.infScroll = e, this.clickHandler = this.onClick.bind(this), this.element.addEventListener("click", this.clickHandler), e.on("request", this.disable.bind(this)), e.on("load", this.enable.bind(this)), e.on("error", this.hide.bind(this)), e.on("last", this.hide.bind(this))
    }
    return e.create.button = function() {
        var t = i.getQueryElement(this.options.button);
        if (t) return void(this.button = new n(t, this))
    }, e.destroy.button = function() {
        this.button && this.button.destroy()
    }, n.prototype.onClick = function(t) {
        t.preventDefault(), this.infScroll.loadNextPage()
    }, n.prototype.enable = function() {
        this.element.removeAttribute("disabled")
    }, n.prototype.disable = function() {
        this.element.disabled = "disabled"
    }, n.prototype.hide = function() {
        this.element.style.display = "none"
    }, n.prototype.destroy = function() {
        this.element.removeEventListener("click", this.clickHandler)
    }, e.Button = n, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("infinite-scroll/js/status", ["./core", "fizzy-ui-utils/utils"], function(i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./core"), require("fizzy-ui-utils")) : e(t, t.InfiniteScroll, t.fizzyUIUtils)
}(window, function(t, e, i) {
    function n(t) {
        r(t, "none")
    }

    function o(t) {
        r(t, "block")
    }

    function r(t, e) {
        t && (t.style.display = e)
    }
    var s = e.prototype;
    return e.create.status = function() {
        var t = i.getQueryElement(this.options.status);
        t && (this.statusElement = t, this.statusEventElements = {
            request: t.querySelector(".infinite-scroll-request"),
            error: t.querySelector(".infinite-scroll-error"),
            last: t.querySelector(".infinite-scroll-last")
        }, this.on("request", this.showRequestStatus), this.on("error", this.showErrorStatus), this.on("last", this.showLastStatus), this.bindHideStatus("on"))
    }, s.bindHideStatus = function(t) {
        var e = this.options.append ? "append" : "load";
        this[t](e, this.hideAllStatus)
    }, s.showRequestStatus = function() {
        this.showStatus("request")
    }, s.showErrorStatus = function() {
        this.showStatus("error")
    }, s.showLastStatus = function() {
        this.showStatus("last"), this.bindHideStatus("off")
    }, s.showStatus = function(t) {
        o(this.statusElement), this.hideStatusEventElements();
        var e = this.statusEventElements[t];
        o(e)
    }, s.hideAllStatus = function() {
        n(this.statusElement), this.hideStatusEventElements()
    }, s.hideStatusEventElements = function() {
        for (var t in this.statusEventElements) {
            var e = this.statusEventElements[t];
            n(e)
        }
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["infinite-scroll/js/core", "infinite-scroll/js/page-load", "infinite-scroll/js/scroll-watch", "infinite-scroll/js/history", "infinite-scroll/js/button", "infinite-scroll/js/status"], e) : "object" == typeof module && module.exports && (module.exports = e(require("./core"), require("./page-load"), require("./scroll-watch"), require("./history"), require("./button"), require("./status")))
}(window, function(t) {
    return t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    function n(t) {
        if (Array.isArray(t)) return t;
        var e = "object" == typeof t && "number" == typeof t.length;
        return e ? h.call(t) : [t]
    }

    function o(t, e, r) {
        if (!(this instanceof o)) return new o(t, e, r);
        var s = t;
        return "string" == typeof t && (s = document.querySelectorAll(t)), s ? (this.elements = n(s), this.options = i({}, this.options), "function" == typeof e ? r = e : i(this.options, e), r && this.on("always", r), this.getImages(), l && (this.jqDeferred = new l.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || t))
    }

    function r(t) {
        this.img = t
    }

    function s(t, e) {
        this.url = t, this.element = e, this.img = new Image
    }
    var l = t.jQuery,
        a = t.console,
        h = Array.prototype.slice;
    o.prototype = Object.create(e.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, o.prototype.addElementImages = function(t) {
        "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && c[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = t.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var c = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(t) {
        var e = getComputedStyle(t);
        if (e)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                var o = n && n[2];
                o && this.addBackground(o, t), n = i.exec(e.backgroundImage)
            }
    }, o.prototype.addImage = function(t) {
        var e = new r(t);
        this.images.push(e)
    }, o.prototype.addBackground = function(t, e) {
        var i = new s(t, e);
        this.images.push(i)
    }, o.prototype.check = function() {
        function t(t, i, n) {
            setTimeout(function() {
                e.progress(t, i, n)
            })
        }
        var e = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(e) {
            e.once("progress", t), e.check()
        }) : void this.complete()
    }, o.prototype.progress = function(t, e, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, t, e)
    }, o.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }, r.prototype = Object.create(e.prototype), r.prototype.check = function() {
        var t = this.getIsImageComplete();
        return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, r.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }, r.prototype.confirm = function(t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
    }, r.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, r.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, r.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var t = this.getIsImageComplete();
        t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype.confirm = function(t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
    }, o.makeJQueryPlugin = function(e) {
        e = e || t.jQuery, e && (l = e, l.fn.imagesLoaded = function(t, e) {
            var i = new o(this, t, e);
            return i.jqDeferred.promise(l(this))
        })
    }, o.makeJQueryPlugin(), o
});; /**/
/*!
 * Validator v0.11.9 for Bootstrap 3, by @1000hz
 * Copyright 2017 Cina Saffary
 * Licensed under http://opensource.org/licenses/MIT
 *
 * https://github.com/1000hz/bootstrap-validator
 */

+
function(a) {
    "use strict";

    function b(b) {
        return b.is('[type="checkbox"]') ? b.prop("checked") : b.is('[type="radio"]') ? !!a('[name="' + b.attr("name") + '"]:checked').length : b.is("select[multiple]") ? (b.val() || []).length : b.val()
    }

    function c(b) {
        return this.each(function() {
            var c = a(this),
                e = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b),
                f = c.data("bs.validator");
            (f || "destroy" != b) && (f || c.data("bs.validator", f = new d(this, e)), "string" == typeof b && f[b]())
        })
    }
    var d = function(c, e) {
        this.options = e, this.validators = a.extend({}, d.VALIDATORS, e.custom), this.$element = a(c), this.$btn = a('button[type="submit"], input[type="submit"]').filter('[form="' + this.$element.attr("id") + '"]').add(this.$element.find('input[type="submit"], button[type="submit"]')), this.update(), this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator", a.proxy(this.onInput, this)), this.$element.on("submit.bs.validator", a.proxy(this.onSubmit, this)), this.$element.on("reset.bs.validator", a.proxy(this.reset, this)), this.$element.find("[data-match]").each(function() {
            var c = a(this),
                d = c.attr("data-match");
            a(d).on("input.bs.validator", function() {
                b(c) && c.trigger("input.bs.validator")
            })
        }), this.$inputs.filter(function() {
            return b(a(this)) && !a(this).closest(".has-error").length
        }).trigger("focusout"), this.$element.attr("novalidate", !0)
    };
    d.VERSION = "0.11.9", d.INPUT_SELECTOR = ':input:not([type="hidden"], [type="submit"], [type="reset"], button)', d.FOCUS_OFFSET = 20, d.DEFAULTS = {
        delay: 500,
        html: !1,
        disable: !0,
        focus: !0,
        custom: {},
        errors: {
            match: "Does not match",
            minlength: "Not long enough"
        },
        feedback: {
            success: "glyphicon-ok",
            error: "glyphicon-remove"
        }
    }, d.VALIDATORS = {
        "native": function(a) {
            var b = a[0];
            return b.checkValidity ? !b.checkValidity() && !b.validity.valid && (b.validationMessage || "error!") : void 0
        },
        match: function(b) {
            var c = b.attr("data-match");
            return b.val() !== a(c).val() && d.DEFAULTS.errors.match
        },
        minlength: function(a) {
            var b = a.attr("data-minlength");
            return a.val().length < b && d.DEFAULTS.errors.minlength
        }
    }, d.prototype.update = function() {
        var b = this;
        return this.$inputs = this.$element.find(d.INPUT_SELECTOR).add(this.$element.find('[data-validate="true"]')).not(this.$element.find('[data-validate="false"]').each(function() {
            b.clearErrors(a(this))
        })), this.toggleSubmit(), this
    }, d.prototype.onInput = function(b) {
        var c = this,
            d = a(b.target),
            e = "focusout" !== b.type;
        this.$inputs.is(d) && this.validateInput(d, e).done(function() {
            c.toggleSubmit()
        })
    }, d.prototype.validateInput = function(c, d) {
        var e = (b(c), c.data("bs.validator.errors"));
        c.is('[type="radio"]') && (c = this.$element.find('input[name="' + c.attr("name") + '"]'));
        var f = a.Event("validate.bs.validator", {
            relatedTarget: c[0]
        });
        if (this.$element.trigger(f), !f.isDefaultPrevented()) {
            var g = this;
            return this.runValidators(c).done(function(b) {
                c.data("bs.validator.errors", b), b.length ? d ? g.defer(c, g.showErrors) : g.showErrors(c) : g.clearErrors(c), e && b.toString() === e.toString() || (f = b.length ? a.Event("invalid.bs.validator", {
                    relatedTarget: c[0],
                    detail: b
                }) : a.Event("valid.bs.validator", {
                    relatedTarget: c[0],
                    detail: e
                }), g.$element.trigger(f)), g.toggleSubmit(), g.$element.trigger(a.Event("validated.bs.validator", {
                    relatedTarget: c[0]
                }))
            })
        }
    }, d.prototype.runValidators = function(c) {
        function d(a) {
            return c.attr("data-" + a + "-error")
        }

        function e() {
            var a = c[0].validity;
            return a.typeMismatch ? c.attr("data-type-error") : a.patternMismatch ? c.attr("data-pattern-error") : a.stepMismatch ? c.attr("data-step-error") : a.rangeOverflow ? c.attr("data-max-error") : a.rangeUnderflow ? c.attr("data-min-error") : a.valueMissing ? c.attr("data-required-error") : null
        }

        function f() {
            return c.attr("data-error")
        }

        function g(a) {
            return d(a) || e() || f()
        }
        var h = [],
            i = a.Deferred();
        return c.data("bs.validator.deferred") && c.data("bs.validator.deferred").reject(), c.data("bs.validator.deferred", i), a.each(this.validators, a.proxy(function(a, d) {
            var e = null;
            !b(c) && !c.attr("required") || void 0 === c.attr("data-" + a) && "native" != a || !(e = d.call(this, c)) || (e = g(a) || e, !~h.indexOf(e) && h.push(e))
        }, this)), !h.length && b(c) && c.attr("data-remote") ? this.defer(c, function() {
            var d = {};
            d[c.attr("name")] = b(c), a.get(c.attr("data-remote"), d).fail(function(a, b, c) {
                h.push(g("remote") || c)
            }).always(function() {
                i.resolve(h)
            })
        }) : i.resolve(h), i.promise()
    }, d.prototype.validate = function() {
        var b = this;
        return a.when(this.$inputs.map(function() {
            return b.validateInput(a(this), !1)
        })).then(function() {
            b.toggleSubmit(), b.focusError()
        }), this
    }, d.prototype.focusError = function() {
        if (this.options.focus) {
            var b = this.$element.find(".has-error:first :input");
            0 !== b.length && (a("html, body").animate({
                scrollTop: b.offset().top - d.FOCUS_OFFSET
            }, 250), b.focus())
        }
    }, d.prototype.showErrors = function(b) {
        var c = this.options.html ? "html" : "text",
            d = b.data("bs.validator.errors"),
            e = b.closest(".form-group"),
            f = e.find(".help-block.with-errors"),
            g = e.find(".form-control-feedback");
        d.length && (d = a("<ul/>").addClass("list-unstyled").append(a.map(d, function(b) {
            return a("<li/>")[c](b)
        })), void 0 === f.data("bs.validator.originalContent") && f.data("bs.validator.originalContent", f.html()), f.empty().append(d), e.addClass("has-error has-danger"), e.hasClass("has-feedback") && g.removeClass(this.options.feedback.success) && g.addClass(this.options.feedback.error) && e.removeClass("has-success"))
    }, d.prototype.clearErrors = function(a) {
        var c = a.closest(".form-group"),
            d = c.find(".help-block.with-errors"),
            e = c.find(".form-control-feedback");
        d.html(d.data("bs.validator.originalContent")), c.removeClass("has-error has-danger has-success"), c.hasClass("has-feedback") && e.removeClass(this.options.feedback.error) && e.removeClass(this.options.feedback.success) && b(a) && e.addClass(this.options.feedback.success) && c.addClass("has-success")
    }, d.prototype.hasErrors = function() {
        function b() {
            return !!(a(this).data("bs.validator.errors") || []).length
        }
        return !!this.$inputs.filter(b).length
    }, d.prototype.isIncomplete = function() {
        function c() {
            var c = b(a(this));
            return !("string" == typeof c ? a.trim(c) : c)
        }
        return !!this.$inputs.filter("[required]").filter(c).length
    }, d.prototype.onSubmit = function(a) {
        this.validate(), (this.isIncomplete() || this.hasErrors()) && a.preventDefault()
    }, d.prototype.toggleSubmit = function() {
        this.options.disable && this.$btn.toggleClass("disabled", this.isIncomplete() || this.hasErrors())
    }, d.prototype.defer = function(b, c) {
        return c = a.proxy(c, this, b), this.options.delay ? (window.clearTimeout(b.data("bs.validator.timeout")), void b.data("bs.validator.timeout", window.setTimeout(c, this.options.delay))) : c()
    }, d.prototype.reset = function() {
        return this.$element.find(".form-control-feedback").removeClass(this.options.feedback.error).removeClass(this.options.feedback.success), this.$inputs.removeData(["bs.validator.errors", "bs.validator.deferred"]).each(function() {
            var b = a(this),
                c = b.data("bs.validator.timeout");
            window.clearTimeout(c) && b.removeData("bs.validator.timeout")
        }), this.$element.find(".help-block.with-errors").each(function() {
            var b = a(this),
                c = b.data("bs.validator.originalContent");
            b.removeData("bs.validator.originalContent").html(c)
        }), this.$btn.removeClass("disabled"), this.$element.find(".has-error, .has-danger, .has-success").removeClass("has-error has-danger has-success"), this
    }, d.prototype.destroy = function() {
        return this.reset(), this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator"), this.$inputs.off(".bs.validator"), this.options = null, this.validators = null, this.$element = null, this.$btn = null, this.$inputs = null, this
    };
    var e = a.fn.validator;
    a.fn.validator = c, a.fn.validator.Constructor = d, a.fn.validator.noConflict = function() {
        return a.fn.validator = e, this
    }, a(window).on("load", function() {
        a('form[data-toggle="validator"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery);; /**/
/* Source and licensing information for the line(s) below can be found at https://www.prestashop.com/sites/all/themes/prestashop/assets/vendor/jquery_lazyload/jquery.lazyload.js. */
(function($, window, document, undefined) {
    var $window = $(window);
    $.fn.lazyload = function(options) {
        var elements = this,
            $container, settings = {
                threshold: 0,
                failure_limit: 0,
                event: "scroll",
                effect: "show",
                container: window,
                data_attribute: "original",
                skip_invisible: false,
                appear: null,
                load: null,
                placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
            }

        function update() {
            var counter = 0;
            elements.each(function() {
                var $this = $(this);
                if (settings.skip_invisible && !$this.is(":visible")) return;
                if ($.abovethetop(this, settings) || $.leftofbegin(this, settings));
                else if (!$.belowthefold(this, settings) && !$.rightoffold(this, settings)) {
                    $this.trigger("appear");
                    counter = 0
                } else if (++counter > settings.failure_limit) return false
            })
        };
        if (options) {
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit
            };
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed
            };
            $.extend(settings, options)
        };
        $container = (settings.container === undefined || settings.container === window) ? $window : $(settings.container);
        if (0 === settings.event.indexOf("scroll")) $container.bind(settings.event, function() {
            return update()
        });
        this.each(function() {
            var self = this,
                $self = $(self);
            self.loaded = false;
            if ($self.attr("src") === undefined || $self.attr("src") === false)
                if ($self.is("img")) $self.attr("src", settings.placeholder);
            $self.one("appear", function() {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings)
                    };
                    $("<img />").bind("load", function() {
                        var original = $self.attr("data-" + settings.data_attribute);
                        $self.hide();
                        if ($self.is("img")) {
                            $self.attr("src", original)
                        } else $self.css("background-image", "url('" + original + "')");
                        $self[settings.effect](settings.effect_speed);
                        self.loaded = true;
                        var temp = $.grep(elements, function(element) {
                            return !element.loaded
                        });
                        elements = $(temp);
                        if (settings.load) {
                            var elements_left = elements.length;
                            settings.load.call(self, elements_left, settings)
                        }
                    }).attr("src", $self.attr("data-" + settings.data_attribute))
                }
            });
            if (0 !== settings.event.indexOf("scroll")) $self.bind(settings.event, function() {
                if (!self.loaded) $self.trigger("appear")
            })
        });
        $window.bind("resize", function() {
            update()
        });
        if (/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)) $window.bind("pageshow", function(event) {
            if (event.originalEvent && event.originalEvent.persisted) elements.each(function() {
                $(this).trigger("appear")
            })
        });
        $(document).ready(function() {
            update()
        });
        return this
    };
    $.belowthefold = function(element, settings) {
        var fold;
        if (settings.container === undefined || settings.container === window) {
            fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop()
        } else fold = $(settings.container).offset().top + $(settings.container).height();
        return fold <= $(element).offset().top - settings.threshold
    };
    $.rightoffold = function(element, settings) {
        var fold;
        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft()
        } else fold = $(settings.container).offset().left + $(settings.container).width();
        return fold <= $(element).offset().left - settings.threshold
    };
    $.abovethetop = function(element, settings) {
        var fold;
        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop()
        } else fold = $(settings.container).offset().top;
        return fold >= $(element).offset().top + settings.threshold + $(element).height()
    };
    $.leftofbegin = function(element, settings) {
        var fold;
        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft()
        } else fold = $(settings.container).offset().left;
        return fold >= $(element).offset().left + settings.threshold + $(element).width()
    };
    $.inviewport = function(element, settings) {
        return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) && !$.belowthefold(element, settings) && !$.abovethetop(element, settings)
    };
    $.extend($.expr[":"], {
        "below-the-fold": function(a) {
            return $.belowthefold(a, {
                threshold: 0
            })
        },
        "above-the-top": function(a) {
            return !$.belowthefold(a, {
                threshold: 0
            })
        },
        "right-of-screen": function(a) {
            return $.rightoffold(a, {
                threshold: 0
            })
        },
        "left-of-screen": function(a) {
            return !$.rightoffold(a, {
                threshold: 0
            })
        },
        "in-viewport": function(a) {
            return $.inviewport(a, {
                threshold: 0
            })
        },
        "above-the-fold": function(a) {
            return !$.belowthefold(a, {
                threshold: 0
            })
        },
        "right-of-fold": function(a) {
            return $.rightoffold(a, {
                threshold: 0
            })
        },
        "left-of-fold": function(a) {
            return !$.rightoffold(a, {
                threshold: 0
            })
        }
    })
})(jQuery, window, document);;
/* Source and licensing information for the above line(s) can be found at https://www.prestashop.com/sites/all/themes/prestashop/assets/vendor/jquery_lazyload/jquery.lazyload.js. */
/* Source and licensing information for the line(s) below can be found at https://www.prestashop.com/sites/all/themes/prestashop/assets/vendor/lazysizes/lazysizes.js. */
(function(window, factory) {
    var lazySizes = factory(window, window.document);
    window.lazySizes = lazySizes;
    if (typeof module == 'object' && module.exports) module.exports = lazySizes
}(window, function l(window, document) {
    'use strict';
    if (!document.getElementsByClassName) return;
    var lazysizes, lazySizesConfig, docElem = document.documentElement,
        Date = window.Date,
        supportPicture = window.HTMLPictureElement,
        _addEventListener = 'addEventListener',
        _getAttribute = 'getAttribute',
        addEventListener = window[_addEventListener],
        setTimeout = window.setTimeout,
        requestAnimationFrame = window.requestAnimationFrame || setTimeout,
        requestIdleCallback = window.requestIdleCallback,
        regPicture = /^picture$/i,
        loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'],
        regClassCache = {},
        forEach = Array.prototype.forEach,
        hasClass = function(ele, cls) {
            if (!regClassCache[cls]) regClassCache[cls] = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls]
        },
        addClass = function(ele, cls) {
            if (!hasClass(ele, cls)) ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls)
        },
        removeClass = function(ele, cls) {
            var reg;
            if ((reg = hasClass(ele, cls))) ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '))
        },
        addRemoveLoadEvents = function(dom, fn, add) {
            var action = add ? _addEventListener : 'removeEventListener';
            if (add) addRemoveLoadEvents(dom, fn);
            loadEvents.forEach(function(evt) {
                dom[action](evt, fn)
            })
        },
        triggerEvent = function(elem, name, detail, noBubbles, noCancelable) {
            var event = document.createEvent('Event');
            if (!detail) detail = {};
            detail.instance = lazysizes;
            event.initEvent(name, !noBubbles, !noCancelable);
            event.detail = detail;
            elem.dispatchEvent(event);
            return event
        },
        updatePolyfill = function(el, full) {
            var polyfill;
            if (!supportPicture && (polyfill = (window.picturefill || lazySizesConfig.pf))) {
                if (full && full.src && !el[_getAttribute]('srcset')) el.setAttribute('srcset', full.src);
                polyfill({
                    reevaluate: true,
                    elements: [el]
                })
            } else if (full && full.src) el.src = full.src
        },
        getCSS = function(elem, style) {
            return (getComputedStyle(elem, null) || {})[style]
        },
        getWidth = function(elem, parent, width) {
            width = width || elem.offsetWidth;
            while (width < lazySizesConfig.minSize && parent && !elem._lazysizesWidth) {
                width = parent.offsetWidth;
                parent = parent.parentNode
            };
            return width
        },
        rAF = (function() {
            var running, waiting, firstFns = [],
                secondFns = [],
                fns = firstFns,
                run = function() {
                    var runFns = fns;
                    fns = firstFns.length ? secondFns : firstFns;
                    running = true;
                    waiting = false;
                    while (runFns.length) runFns.shift()();
                    running = false
                },
                rafBatch = function(fn, queue) {
                    if (running && !queue) {
                        fn.apply(this, arguments)
                    } else {
                        fns.push(fn);
                        if (!waiting) {
                            waiting = true;
                            (document.hidden ? setTimeout : requestAnimationFrame)(run)
                        }
                    }
                };
            rafBatch._lsFlush = run;
            return rafBatch
        })(),
        rAFIt = function(fn, simple) {
            return simple ? function() {
                rAF(fn)
            } : function() {
                var that = this,
                    args = arguments;
                rAF(function() {
                    fn.apply(that, args)
                })
            }
        },
        throttle = function(fn) {
            var running, lastTime = 0,
                gDelay = lazySizesConfig.throttleDelay,
                rICTimeout = lazySizesConfig.ricTimeout,
                run = function() {
                    running = false;
                    lastTime = Date.now();
                    fn()
                },
                idleCallback = requestIdleCallback && rICTimeout > 49 ? function() {
                    requestIdleCallback(run, {
                        timeout: rICTimeout
                    });
                    if (rICTimeout !== lazySizesConfig.ricTimeout) rICTimeout = lazySizesConfig.ricTimeout
                } : rAFIt(function() {
                    setTimeout(run)
                }, true);
            return function(isPriority) {
                var delay;
                if ((isPriority = isPriority === true)) rICTimeout = 33;
                if (running) return;
                running = true;
                delay = gDelay - (Date.now() - lastTime);
                if (delay < 0) delay = 0;
                if (isPriority || delay < 9) {
                    idleCallback()
                } else setTimeout(idleCallback, delay)
            }
        },
        debounce = function(func) {
            var timeout, timestamp, wait = 99,
                run = function() {
                    timeout = null;
                    func()
                },
                later = function() {
                    var last = Date.now() - timestamp;
                    if (last < wait) {
                        setTimeout(later, wait - last)
                    } else(requestIdleCallback || run)(run)
                };
            return function() {
                timestamp = Date.now();
                if (!timeout) timeout = setTimeout(later, wait)
            }
        };
    (function() {
        var prop, lazySizesDefaults = {
            lazyClass: 'lazyload',
            loadedClass: 'lazyloaded',
            loadingClass: 'lazyloading',
            preloadClass: 'lazypreload',
            errorClass: 'lazyerror',
            autosizesClass: 'lazyautosizes',
            srcAttr: 'data-src',
            srcsetAttr: 'data-srcset',
            sizesAttr: 'data-sizes',
            minSize: 40,
            customMedia: {},
            init: true,
            expFactor: 1.5,
            hFac: 0.8,
            loadMode: 2,
            loadHidden: true,
            ricTimeout: 0,
            throttleDelay: 125
        };
        lazySizesConfig = window.lazySizesConfig || window.lazysizesConfig || {};
        for (prop in lazySizesDefaults)
            if (!(prop in lazySizesConfig)) lazySizesConfig[prop] = lazySizesDefaults[prop];
        window.lazySizesConfig = lazySizesConfig;
        setTimeout(function() {
            if (lazySizesConfig.init) init()
        })
    })();
    var loader = (function() {
            var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started, eLvW, elvH, eLtop, eLleft, eLright, eLbottom, defaultExpand, preloadExpand, hFac, regImg = /^img$/i,
                regIframe = /^iframe$/i,
                supportScroll = ('onscroll' in window) && !(/(gle|ing)bot/.test(navigator.userAgent)),
                shrinkExpand = 0,
                currentExpand = 0,
                isLoading = 0,
                lowRuns = -1,
                resetPreloading = function(e) {
                    isLoading--;
                    if (e && e.target) addRemoveLoadEvents(e.target, resetPreloading);
                    if (!e || isLoading < 0 || !e.target) isLoading = 0
                },
                isNestedVisible = function(elem, elemExpand) {
                    var outerRect, parent = elem,
                        visible = getCSS(document.body, 'visibility') == 'hidden' || (getCSS(elem.parentNode, 'visibility') != 'hidden' && getCSS(elem, 'visibility') != 'hidden');
                    eLtop -= elemExpand;
                    eLbottom += elemExpand;
                    eLleft -= elemExpand;
                    eLright += elemExpand;
                    while (visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem) {
                        visible = ((getCSS(parent, 'opacity') || 1) > 0);
                        if (visible && getCSS(parent, 'overflow') != 'visible') {
                            outerRect = parent.getBoundingClientRect();
                            visible = eLright > outerRect.left && eLleft < outerRect.right && eLbottom > outerRect.top - 1 && eLtop < outerRect.bottom + 1
                        }
                    };
                    return visible
                },
                checkElements = function() {
                    var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal, beforeExpandVal, lazyloadElems = lazysizes.elements;
                    if ((loadMode = lazySizesConfig.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)) {
                        i = 0;
                        lowRuns++;
                        if (preloadExpand == null) {
                            if (!('expand' in lazySizesConfig)) lazySizesConfig.expand = docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370;
                            defaultExpand = lazySizesConfig.expand;
                            preloadExpand = defaultExpand * lazySizesConfig.expFactor
                        };
                        if (currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden) {
                            currentExpand = preloadExpand;
                            lowRuns = 0
                        } else if (loadMode > 1 && lowRuns > 1 && isLoading < 6) {
                            currentExpand = defaultExpand
                        } else currentExpand = shrinkExpand;
                        for (; i < eLlen; i++) {
                            if (!lazyloadElems[i] || lazyloadElems[i]._lazyRace) continue;
                            if (!supportScroll) {
                                unveilElement(lazyloadElems[i]);
                                continue
                            };
                            if (!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)) elemExpand = currentExpand;
                            if (beforeExpandVal !== elemExpand) {
                                eLvW = innerWidth + (elemExpand * hFac);
                                elvH = innerHeight + elemExpand;
                                elemNegativeExpand = elemExpand * -1;
                                beforeExpandVal = elemExpand
                            };
                            rect = lazyloadElems[i].getBoundingClientRect();
                            if ((eLbottom = rect.bottom) >= elemNegativeExpand && (eLtop = rect.top) <= elvH && (eLright = rect.right) >= elemNegativeExpand * hFac && (eLleft = rect.left) <= eLvW && (eLbottom || eLright || eLleft || eLtop) && (lazySizesConfig.loadHidden || getCSS(lazyloadElems[i], 'visibility') != 'hidden') && ((isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4)) || isNestedVisible(lazyloadElems[i], elemExpand))) {
                                unveilElement(lazyloadElems[i]);
                                loadedSomething = true;
                                if (isLoading > 9) break
                            } else if (!loadedSomething && isCompleted && !autoLoadElem && isLoading < 4 && lowRuns < 4 && loadMode > 2 && (preloadElems[0] || lazySizesConfig.preloadAfterLoad) && (preloadElems[0] || (!elemExpandVal && ((eLbottom || eLright || eLleft || eLtop) || lazyloadElems[i][_getAttribute](lazySizesConfig.sizesAttr) != 'auto')))) autoLoadElem = preloadElems[0] || lazyloadElems[i]
                        };
                        if (autoLoadElem && !loadedSomething) unveilElement(autoLoadElem)
                    }
                },
                throttledCheckElements = throttle(checkElements),
                switchLoadingClass = function(e) {
                    addClass(e.target, lazySizesConfig.loadedClass);
                    removeClass(e.target, lazySizesConfig.loadingClass);
                    addRemoveLoadEvents(e.target, rafSwitchLoadingClass);
                    triggerEvent(e.target, 'lazyloaded')
                },
                rafedSwitchLoadingClass = rAFIt(switchLoadingClass),
                rafSwitchLoadingClass = function(e) {
                    rafedSwitchLoadingClass({
                        target: e.target
                    })
                },
                changeIframeSrc = function(elem, src) {
                    try {
                        elem.contentWindow.location.replace(src)
                    } catch (e) {
                        elem.src = src
                    }
                },
                handleSources = function(source) {
                    var customMedia, sourceSrcset = source[_getAttribute](lazySizesConfig.srcsetAttr);
                    if ((customMedia = lazySizesConfig.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')])) source.setAttribute('media', customMedia);
                    if (sourceSrcset) source.setAttribute('srcset', sourceSrcset)
                },
                lazyUnveil = rAFIt(function(elem, detail, isAuto, sizes, isImg) {
                    var src, srcset, parent, isPicture, event, firesLoad;
                    if (!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented) {
                        if (sizes)
                            if (isAuto) {
                                addClass(elem, lazySizesConfig.autosizesClass)
                            } else elem.setAttribute('sizes', sizes);
                        srcset = elem[_getAttribute](lazySizesConfig.srcsetAttr);
                        src = elem[_getAttribute](lazySizesConfig.srcAttr);
                        if (isImg) {
                            parent = elem.parentNode;
                            isPicture = parent && regPicture.test(parent.nodeName || '')
                        };
                        firesLoad = detail.firesLoad || (('src' in elem) && (srcset || src || isPicture));
                        event = {
                            target: elem
                        };
                        if (firesLoad) {
                            addRemoveLoadEvents(elem, resetPreloading, true);
                            clearTimeout(resetPreloadingTimer);
                            resetPreloadingTimer = setTimeout(resetPreloading, 2500);
                            addClass(elem, lazySizesConfig.loadingClass);
                            addRemoveLoadEvents(elem, rafSwitchLoadingClass, true)
                        };
                        if (isPicture) forEach.call(parent.getElementsByTagName('source'), handleSources);
                        if (srcset) {
                            elem.setAttribute('srcset', srcset)
                        } else if (src && !isPicture)
                            if (regIframe.test(elem.nodeName)) {
                                changeIframeSrc(elem, src)
                            } else elem.src = src;
                        if (isImg && (srcset || isPicture)) updatePolyfill(elem, {
                            src: src
                        })
                    };
                    if (elem._lazyRace) delete elem._lazyRace;
                    removeClass(elem, lazySizesConfig.lazyClass);
                    rAF(function() {
                        if (!firesLoad || (elem.complete && elem.naturalWidth > 1)) {
                            if (firesLoad) {
                                resetPreloading(event)
                            } else isLoading--;
                            switchLoadingClass(event)
                        }
                    }, true)
                }),
                unveilElement = function(elem) {
                    var detail, isImg = regImg.test(elem.nodeName),
                        sizes = isImg && (elem[_getAttribute](lazySizesConfig.sizesAttr) || elem[_getAttribute]('sizes')),
                        isAuto = sizes == 'auto';
                    if ((isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesConfig.errorClass) && hasClass(elem, lazySizesConfig.lazyClass)) return;
                    detail = triggerEvent(elem, 'lazyunveilread').detail;
                    if (isAuto) autoSizer.updateElem(elem, true, elem.offsetWidth);
                    elem._lazyRace = true;
                    isLoading++;
                    lazyUnveil(elem, detail, isAuto, sizes, isImg)
                },
                onload = function() {
                    if (isCompleted) return;
                    if (Date.now() - started < 999) {
                        setTimeout(onload, 999);
                        return
                    };
                    var afterScroll = debounce(function() {
                        lazySizesConfig.loadMode = 3;
                        throttledCheckElements()
                    });
                    isCompleted = true;
                    lazySizesConfig.loadMode = 3;
                    throttledCheckElements();
                    addEventListener('scroll', function() {
                        if (lazySizesConfig.loadMode == 3) lazySizesConfig.loadMode = 2;
                        afterScroll()
                    }, true)
                };
            return {
                _: function() {
                    started = Date.now();
                    lazysizes.elements = document.getElementsByClassName(lazySizesConfig.lazyClass);
                    preloadElems = document.getElementsByClassName(lazySizesConfig.lazyClass + ' ' + lazySizesConfig.preloadClass);
                    hFac = lazySizesConfig.hFac;
                    addEventListener('scroll', throttledCheckElements, true);
                    addEventListener('resize', throttledCheckElements, true);
                    if (window.MutationObserver) {
                        new MutationObserver(throttledCheckElements).observe(docElem, {
                            childList: true,
                            subtree: true,
                            attributes: true
                        })
                    } else {
                        docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
                        docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
                        setInterval(throttledCheckElements, 999)
                    };
                    addEventListener('hashchange', throttledCheckElements, true);
                    ['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend', 'webkitAnimationEnd'].forEach(function(name) {
                        document[_addEventListener](name, throttledCheckElements, true)
                    });
                    if ((/d$|^c/.test(document.readyState))) {
                        onload()
                    } else {
                        addEventListener('load', onload);
                        document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
                        setTimeout(onload, 2e4)
                    };
                    if (lazysizes.elements.length) {
                        checkElements();
                        rAF._lsFlush()
                    } else throttledCheckElements()
                },
                checkElems: throttledCheckElements,
                unveil: unveilElement
            }
        })(),
        autoSizer = (function() {
            var autosizesElems, sizeElement = rAFIt(function(elem, parent, event, width) {
                    var sources, i, len;
                    elem._lazysizesWidth = width;
                    width += 'px';
                    elem.setAttribute('sizes', width);
                    if (regPicture.test(parent.nodeName || '')) {
                        sources = parent.getElementsByTagName('source');
                        for (i = 0, len = sources.length; i < len; i++) sources[i].setAttribute('sizes', width)
                    };
                    if (!event.detail.dataAttr) updatePolyfill(elem, event.detail)
                }),
                getSizeElement = function(elem, dataAttr, width) {
                    var event, parent = elem.parentNode;
                    if (parent) {
                        width = getWidth(elem, parent, width);
                        event = triggerEvent(elem, 'lazybeforesizes', {
                            width: width,
                            dataAttr: !!dataAttr
                        });
                        if (!event.defaultPrevented) {
                            width = event.detail.width;
                            if (width && width !== elem._lazysizesWidth) sizeElement(elem, parent, event, width)
                        }
                    }
                },
                updateElementsSizes = function() {
                    var i, len = autosizesElems.length;
                    if (len) {
                        i = 0;
                        for (; i < len; i++) getSizeElement(autosizesElems[i])
                    }
                },
                debouncedUpdateElementsSizes = debounce(updateElementsSizes);
            return {
                _: function() {
                    autosizesElems = document.getElementsByClassName(lazySizesConfig.autosizesClass);
                    addEventListener('resize', debouncedUpdateElementsSizes)
                },
                checkElems: debouncedUpdateElementsSizes,
                updateElem: getSizeElement
            }
        })(),
        init = function() {
            if (!init.i) {
                init.i = true;
                autoSizer._();
                loader._()
            }
        };
    lazysizes = {
        cfg: lazySizesConfig,
        autoSizer: autoSizer,
        loader: loader,
        init: init,
        uP: updatePolyfill,
        aC: addClass,
        rC: removeClass,
        hC: hasClass,
        fire: triggerEvent,
        gW: getWidth,
        rAF: rAF
    };
    return lazysizes
}));;
/* Source and licensing information for the above line(s) can be found at https://www.prestashop.com/sites/all/themes/prestashop/assets/vendor/lazysizes/lazysizes.js. */
/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
! function(factory) {
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], factory) : factory("undefined" != typeof module && module.exports ? require("jquery") : jQuery)
}(function($) {
    "use strict";

    function init(options) {
        return !options || void 0 !== options.allowPageScroll || void 0 === options.swipe && void 0 === options.swipeStatus || (options.allowPageScroll = NONE), void 0 !== options.click && void 0 === options.tap && (options.tap = options.click), options || (options = {}), options = $.extend({}, $.fn.swipe.defaults, options), this.each(function() {
            var $this = $(this),
                plugin = $this.data(PLUGIN_NS);
            plugin || (plugin = new TouchSwipe(this, options), $this.data(PLUGIN_NS, plugin))
        })
    }

    function TouchSwipe(element, options) {
        function touchStart(jqEvent) {
            if (!(getTouchInProgress() || $(jqEvent.target).closest(options.excludedElements, $element).length > 0)) {
                var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
                if (!event.pointerType || "mouse" != event.pointerType || 0 != options.fallbackToMouseEvents) {
                    var ret, touches = event.touches,
                        evt = touches ? touches[0] : event;
                    return phase = PHASE_START, touches ? fingerCount = touches.length : options.preventDefaultEvents !== !1 && jqEvent.preventDefault(), distance = 0, direction = null, currentDirection = null, pinchDirection = null, duration = 0, startTouchesDistance = 0, endTouchesDistance = 0, pinchZoom = 1, pinchDistance = 0, maximumsMap = createMaximumsData(), cancelMultiFingerRelease(), createFingerData(0, evt), !touches || fingerCount === options.fingers || options.fingers === ALL_FINGERS || hasPinches() ? (startTime = getTimeStamp(), 2 == fingerCount && (createFingerData(1, touches[1]), startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start)), (options.swipeStatus || options.pinchStatus) && (ret = triggerHandler(event, phase))) : ret = !1, ret === !1 ? (phase = PHASE_CANCEL, triggerHandler(event, phase), ret) : (options.hold && (holdTimeout = setTimeout($.proxy(function() {
                        $element.trigger("hold", [event.target]), options.hold && (ret = options.hold.call($element, event, event.target))
                    }, this), options.longTapThreshold)), setTouchInProgress(!0), null)
                }
            }
        }

        function touchMove(jqEvent) {
            var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
            if (phase !== PHASE_END && phase !== PHASE_CANCEL && !inMultiFingerRelease()) {
                var ret, touches = event.touches,
                    evt = touches ? touches[0] : event,
                    currentFinger = updateFingerData(evt);
                if (endTime = getTimeStamp(), touches && (fingerCount = touches.length), options.hold && clearTimeout(holdTimeout), phase = PHASE_MOVE, 2 == fingerCount && (0 == startTouchesDistance ? (createFingerData(1, touches[1]), startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start)) : (updateFingerData(touches[1]), endTouchesDistance = calculateTouchesDistance(fingerData[0].end, fingerData[1].end), pinchDirection = calculatePinchDirection(fingerData[0].end, fingerData[1].end)), pinchZoom = calculatePinchZoom(startTouchesDistance, endTouchesDistance), pinchDistance = Math.abs(startTouchesDistance - endTouchesDistance)), fingerCount === options.fingers || options.fingers === ALL_FINGERS || !touches || hasPinches()) {
                    if (direction = calculateDirection(currentFinger.start, currentFinger.end), currentDirection = calculateDirection(currentFinger.last, currentFinger.end), validateDefaultEvent(jqEvent, currentDirection), distance = calculateDistance(currentFinger.start, currentFinger.end), duration = calculateDuration(), setMaxDistance(direction, distance), ret = triggerHandler(event, phase), !options.triggerOnTouchEnd || options.triggerOnTouchLeave) {
                        var inBounds = !0;
                        if (options.triggerOnTouchLeave) {
                            var bounds = getbounds(this);
                            inBounds = isInBounds(currentFinger.end, bounds)
                        }!options.triggerOnTouchEnd && inBounds ? phase = getNextPhase(PHASE_MOVE) : options.triggerOnTouchLeave && !inBounds && (phase = getNextPhase(PHASE_END)), phase != PHASE_CANCEL && phase != PHASE_END || triggerHandler(event, phase)
                    }
                } else phase = PHASE_CANCEL, triggerHandler(event, phase);
                ret === !1 && (phase = PHASE_CANCEL, triggerHandler(event, phase))
            }
        }

        function touchEnd(jqEvent) {
            var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent,
                touches = event.touches;
            if (touches) {
                if (touches.length && !inMultiFingerRelease()) return startMultiFingerRelease(event), !0;
                if (touches.length && inMultiFingerRelease()) return !0
            }
            return inMultiFingerRelease() && (fingerCount = fingerCountAtRelease), endTime = getTimeStamp(), duration = calculateDuration(), didSwipeBackToCancel() || !validateSwipeDistance() ? (phase = PHASE_CANCEL, triggerHandler(event, phase)) : options.triggerOnTouchEnd || options.triggerOnTouchEnd === !1 && phase === PHASE_MOVE ? (options.preventDefaultEvents !== !1 && jqEvent.cancelable !== !1 && jqEvent.preventDefault(), phase = PHASE_END, triggerHandler(event, phase)) : !options.triggerOnTouchEnd && hasTap() ? (phase = PHASE_END, triggerHandlerForGesture(event, phase, TAP)) : phase === PHASE_MOVE && (phase = PHASE_CANCEL, triggerHandler(event, phase)), setTouchInProgress(!1), null
        }

        function touchCancel() {
            fingerCount = 0, endTime = 0, startTime = 0, startTouchesDistance = 0, endTouchesDistance = 0, pinchZoom = 1, cancelMultiFingerRelease(), setTouchInProgress(!1)
        }

        function touchLeave(jqEvent) {
            var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
            options.triggerOnTouchLeave && (phase = getNextPhase(PHASE_END), triggerHandler(event, phase))
        }

        function removeListeners() {
            $element.off(START_EV, touchStart), $element.off(CANCEL_EV, touchCancel), $element.off(MOVE_EV, touchMove), $element.off(END_EV, touchEnd), LEAVE_EV && $element.off(LEAVE_EV, touchLeave), setTouchInProgress(!1)
        }

        function getNextPhase(currentPhase) {
            var nextPhase = currentPhase,
                validTime = validateSwipeTime(),
                validDistance = validateSwipeDistance(),
                didCancel = didSwipeBackToCancel();
            return !validTime || didCancel ? nextPhase = PHASE_CANCEL : !validDistance || currentPhase != PHASE_MOVE || options.triggerOnTouchEnd && !options.triggerOnTouchLeave ? !validDistance && currentPhase == PHASE_END && options.triggerOnTouchLeave && (nextPhase = PHASE_CANCEL) : nextPhase = PHASE_END, nextPhase
        }

        function triggerHandler(event, phase) {
            var ret, touches = event.touches;
            return (didSwipe() || hasSwipes()) && (ret = triggerHandlerForGesture(event, phase, SWIPE)), (didPinch() || hasPinches()) && ret !== !1 && (ret = triggerHandlerForGesture(event, phase, PINCH)), didDoubleTap() && ret !== !1 ? ret = triggerHandlerForGesture(event, phase, DOUBLE_TAP) : didLongTap() && ret !== !1 ? ret = triggerHandlerForGesture(event, phase, LONG_TAP) : didTap() && ret !== !1 && (ret = triggerHandlerForGesture(event, phase, TAP)), phase === PHASE_CANCEL && touchCancel(event), phase === PHASE_END && (touches ? touches.length || touchCancel(event) : touchCancel(event)), ret
        }

        function triggerHandlerForGesture(event, phase, gesture) {
            var ret;
            if (gesture == SWIPE) {
                if ($element.trigger("swipeStatus", [phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection]), options.swipeStatus && (ret = options.swipeStatus.call($element, event, phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection), ret === !1)) return !1;
                if (phase == PHASE_END && validateSwipe()) {
                    if (clearTimeout(singleTapTimeout), clearTimeout(holdTimeout), $element.trigger("swipe", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipe && (ret = options.swipe.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection), ret === !1)) return !1;
                    switch (direction) {
                        case LEFT:
                            $element.trigger("swipeLeft", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeLeft && (ret = options.swipeLeft.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
                            break;
                        case RIGHT:
                            $element.trigger("swipeRight", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeRight && (ret = options.swipeRight.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
                            break;
                        case UP:
                            $element.trigger("swipeUp", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeUp && (ret = options.swipeUp.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
                            break;
                        case DOWN:
                            $element.trigger("swipeDown", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeDown && (ret = options.swipeDown.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection))
                    }
                }
            }
            if (gesture == PINCH) {
                if ($element.trigger("pinchStatus", [phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]), options.pinchStatus && (ret = options.pinchStatus.call($element, event, phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData), ret === !1)) return !1;
                if (phase == PHASE_END && validatePinch()) switch (pinchDirection) {
                    case IN:
                        $element.trigger("pinchIn", [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]), options.pinchIn && (ret = options.pinchIn.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData));
                        break;
                    case OUT:
                        $element.trigger("pinchOut", [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]), options.pinchOut && (ret = options.pinchOut.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData))
                }
            }
            return gesture == TAP ? phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout), clearTimeout(holdTimeout), hasDoubleTap() && !inDoubleTap() ? (doubleTapStartTime = getTimeStamp(), singleTapTimeout = setTimeout($.proxy(function() {
                doubleTapStartTime = null, $element.trigger("tap", [event.target]), options.tap && (ret = options.tap.call($element, event, event.target))
            }, this), options.doubleTapThreshold)) : (doubleTapStartTime = null, $element.trigger("tap", [event.target]), options.tap && (ret = options.tap.call($element, event, event.target)))) : gesture == DOUBLE_TAP ? phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout), clearTimeout(holdTimeout), doubleTapStartTime = null, $element.trigger("doubletap", [event.target]), options.doubleTap && (ret = options.doubleTap.call($element, event, event.target))) : gesture == LONG_TAP && (phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout), doubleTapStartTime = null, $element.trigger("longtap", [event.target]), options.longTap && (ret = options.longTap.call($element, event, event.target)))), ret
        }

        function validateSwipeDistance() {
            var valid = !0;
            return null !== options.threshold && (valid = distance >= options.threshold), valid
        }

        function didSwipeBackToCancel() {
            var cancelled = !1;
            return null !== options.cancelThreshold && null !== direction && (cancelled = getMaxDistance(direction) - distance >= options.cancelThreshold), cancelled
        }

        function validatePinchDistance() {
            return null !== options.pinchThreshold ? pinchDistance >= options.pinchThreshold : !0
        }

        function validateSwipeTime() {
            var result;
            return result = options.maxTimeThreshold ? !(duration >= options.maxTimeThreshold) : !0
        }

        function validateDefaultEvent(jqEvent, direction) {
            if (options.preventDefaultEvents !== !1)
                if (options.allowPageScroll === NONE) jqEvent.preventDefault();
                else {
                    var auto = options.allowPageScroll === AUTO;
                    switch (direction) {
                        case LEFT:
                            (options.swipeLeft && auto || !auto && options.allowPageScroll != HORIZONTAL) && jqEvent.preventDefault();
                            break;
                        case RIGHT:
                            (options.swipeRight && auto || !auto && options.allowPageScroll != HORIZONTAL) && jqEvent.preventDefault();
                            break;
                        case UP:
                            (options.swipeUp && auto || !auto && options.allowPageScroll != VERTICAL) && jqEvent.preventDefault();
                            break;
                        case DOWN:
                            (options.swipeDown && auto || !auto && options.allowPageScroll != VERTICAL) && jqEvent.preventDefault();
                            break;
                        case NONE:
                    }
                }
        }

        function validatePinch() {
            var hasCorrectFingerCount = validateFingers(),
                hasEndPoint = validateEndPoint(),
                hasCorrectDistance = validatePinchDistance();
            return hasCorrectFingerCount && hasEndPoint && hasCorrectDistance
        }

        function hasPinches() {
            return !!(options.pinchStatus || options.pinchIn || options.pinchOut)
        }

        function didPinch() {
            return !(!validatePinch() || !hasPinches())
        }

        function validateSwipe() {
            var hasValidTime = validateSwipeTime(),
                hasValidDistance = validateSwipeDistance(),
                hasCorrectFingerCount = validateFingers(),
                hasEndPoint = validateEndPoint(),
                didCancel = didSwipeBackToCancel(),
                valid = !didCancel && hasEndPoint && hasCorrectFingerCount && hasValidDistance && hasValidTime;
            return valid
        }

        function hasSwipes() {
            return !!(options.swipe || options.swipeStatus || options.swipeLeft || options.swipeRight || options.swipeUp || options.swipeDown)
        }

        function didSwipe() {
            return !(!validateSwipe() || !hasSwipes())
        }

        function validateFingers() {
            return fingerCount === options.fingers || options.fingers === ALL_FINGERS || !SUPPORTS_TOUCH
        }

        function validateEndPoint() {
            return 0 !== fingerData[0].end.x
        }

        function hasTap() {
            return !!options.tap
        }

        function hasDoubleTap() {
            return !!options.doubleTap
        }

        function hasLongTap() {
            return !!options.longTap
        }

        function validateDoubleTap() {
            if (null == doubleTapStartTime) return !1;
            var now = getTimeStamp();
            return hasDoubleTap() && now - doubleTapStartTime <= options.doubleTapThreshold
        }

        function inDoubleTap() {
            return validateDoubleTap()
        }

        function validateTap() {
            return (1 === fingerCount || !SUPPORTS_TOUCH) && (isNaN(distance) || distance < options.threshold)
        }

        function validateLongTap() {
            return duration > options.longTapThreshold && DOUBLE_TAP_THRESHOLD > distance
        }

        function didTap() {
            return !(!validateTap() || !hasTap())
        }

        function didDoubleTap() {
            return !(!validateDoubleTap() || !hasDoubleTap())
        }

        function didLongTap() {
            return !(!validateLongTap() || !hasLongTap())
        }

        function startMultiFingerRelease(event) {
            previousTouchEndTime = getTimeStamp(), fingerCountAtRelease = event.touches.length + 1
        }

        function cancelMultiFingerRelease() {
            previousTouchEndTime = 0, fingerCountAtRelease = 0
        }

        function inMultiFingerRelease() {
            var withinThreshold = !1;
            if (previousTouchEndTime) {
                var diff = getTimeStamp() - previousTouchEndTime;
                diff <= options.fingerReleaseThreshold && (withinThreshold = !0)
            }
            return withinThreshold
        }

        function getTouchInProgress() {
            return !($element.data(PLUGIN_NS + "_intouch") !== !0)
        }

        function setTouchInProgress(val) {
            $element && (val === !0 ? ($element.on(MOVE_EV, touchMove), $element.on(END_EV, touchEnd), LEAVE_EV && $element.on(LEAVE_EV, touchLeave)) : ($element.off(MOVE_EV, touchMove, !1), $element.off(END_EV, touchEnd, !1), LEAVE_EV && $element.off(LEAVE_EV, touchLeave, !1)), $element.data(PLUGIN_NS + "_intouch", val === !0))
        }

        function createFingerData(id, evt) {
            var f = {
                start: {
                    x: 0,
                    y: 0
                },
                last: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: 0
                }
            };
            return f.start.x = f.last.x = f.end.x = evt.pageX || evt.clientX, f.start.y = f.last.y = f.end.y = evt.pageY || evt.clientY, fingerData[id] = f, f
        }

        function updateFingerData(evt) {
            var id = void 0 !== evt.identifier ? evt.identifier : 0,
                f = getFingerData(id);
            return null === f && (f = createFingerData(id, evt)), f.last.x = f.end.x, f.last.y = f.end.y, f.end.x = evt.pageX || evt.clientX, f.end.y = evt.pageY || evt.clientY, f
        }

        function getFingerData(id) {
            return fingerData[id] || null
        }

        function setMaxDistance(direction, distance) {
            direction != NONE && (distance = Math.max(distance, getMaxDistance(direction)), maximumsMap[direction].distance = distance)
        }

        function getMaxDistance(direction) {
            return maximumsMap[direction] ? maximumsMap[direction].distance : void 0
        }

        function createMaximumsData() {
            var maxData = {};
            return maxData[LEFT] = createMaximumVO(LEFT), maxData[RIGHT] = createMaximumVO(RIGHT), maxData[UP] = createMaximumVO(UP), maxData[DOWN] = createMaximumVO(DOWN), maxData
        }

        function createMaximumVO(dir) {
            return {
                direction: dir,
                distance: 0
            }
        }

        function calculateDuration() {
            return endTime - startTime
        }

        function calculateTouchesDistance(startPoint, endPoint) {
            var diffX = Math.abs(startPoint.x - endPoint.x),
                diffY = Math.abs(startPoint.y - endPoint.y);
            return Math.round(Math.sqrt(diffX * diffX + diffY * diffY))
        }

        function calculatePinchZoom(startDistance, endDistance) {
            var percent = endDistance / startDistance * 1;
            return percent.toFixed(2)
        }

        function calculatePinchDirection() {
            return 1 > pinchZoom ? OUT : IN
        }

        function calculateDistance(startPoint, endPoint) {
            return Math.round(Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2)))
        }

        function calculateAngle(startPoint, endPoint) {
            var x = startPoint.x - endPoint.x,
                y = endPoint.y - startPoint.y,
                r = Math.atan2(y, x),
                angle = Math.round(180 * r / Math.PI);
            return 0 > angle && (angle = 360 - Math.abs(angle)), angle
        }

        function calculateDirection(startPoint, endPoint) {
            if (comparePoints(startPoint, endPoint)) return NONE;
            var angle = calculateAngle(startPoint, endPoint);
            return 45 >= angle && angle >= 0 ? LEFT : 360 >= angle && angle >= 315 ? LEFT : angle >= 135 && 225 >= angle ? RIGHT : angle > 45 && 135 > angle ? DOWN : UP
        }

        function getTimeStamp() {
            var now = new Date;
            return now.getTime()
        }

        function getbounds(el) {
            el = $(el);
            var offset = el.offset(),
                bounds = {
                    left: offset.left,
                    right: offset.left + el.outerWidth(),
                    top: offset.top,
                    bottom: offset.top + el.outerHeight()
                };
            return bounds
        }

        function isInBounds(point, bounds) {
            return point.x > bounds.left && point.x < bounds.right && point.y > bounds.top && point.y < bounds.bottom
        }

        function comparePoints(pointA, pointB) {
            return pointA.x == pointB.x && pointA.y == pointB.y
        }
        var options = $.extend({}, options),
            useTouchEvents = SUPPORTS_TOUCH || SUPPORTS_POINTER || !options.fallbackToMouseEvents,
            START_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
            MOVE_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
            END_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
            LEAVE_EV = useTouchEvents ? SUPPORTS_POINTER ? "mouseleave" : null : "mouseleave",
            CANCEL_EV = SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerCancel" : "pointercancel" : "touchcancel",
            distance = 0,
            direction = null,
            currentDirection = null,
            duration = 0,
            startTouchesDistance = 0,
            endTouchesDistance = 0,
            pinchZoom = 1,
            pinchDistance = 0,
            pinchDirection = 0,
            maximumsMap = null,
            $element = $(element),
            phase = "start",
            fingerCount = 0,
            fingerData = {},
            startTime = 0,
            endTime = 0,
            previousTouchEndTime = 0,
            fingerCountAtRelease = 0,
            doubleTapStartTime = 0,
            singleTapTimeout = null,
            holdTimeout = null;
        try {
            $element.on(START_EV, touchStart), $element.on(CANCEL_EV, touchCancel)
        } catch (e) {
            $.error("events not supported " + START_EV + "," + CANCEL_EV + " on jQuery.swipe")
        }
        this.enable = function() {
            return this.disable(), $element.on(START_EV, touchStart), $element.on(CANCEL_EV, touchCancel), $element
        }, this.disable = function() {
            return removeListeners(), $element
        }, this.destroy = function() {
            removeListeners(), $element.data(PLUGIN_NS, null), $element = null
        }, this.option = function(property, value) {
            if ("object" == typeof property) options = $.extend(options, property);
            else if (void 0 !== options[property]) {
                if (void 0 === value) return options[property];
                options[property] = value
            } else {
                if (!property) return options;
                $.error("Option " + property + " does not exist on jQuery.swipe.options")
            }
            return null
        }
    }
    var VERSION = "1.6.18",
        LEFT = "left",
        RIGHT = "right",
        UP = "up",
        DOWN = "down",
        IN = "in",
        OUT = "out",
        NONE = "none",
        AUTO = "auto",
        SWIPE = "swipe",
        PINCH = "pinch",
        TAP = "tap",
        DOUBLE_TAP = "doubletap",
        LONG_TAP = "longtap",
        HORIZONTAL = "horizontal",
        VERTICAL = "vertical",
        ALL_FINGERS = "all",
        DOUBLE_TAP_THRESHOLD = 10,
        PHASE_START = "start",
        PHASE_MOVE = "move",
        PHASE_END = "end",
        PHASE_CANCEL = "cancel",
        SUPPORTS_TOUCH = "ontouchstart" in window,
        SUPPORTS_POINTER_IE10 = window.navigator.msPointerEnabled && !window.PointerEvent && !SUPPORTS_TOUCH,
        SUPPORTS_POINTER = (window.PointerEvent || window.navigator.msPointerEnabled) && !SUPPORTS_TOUCH,
        PLUGIN_NS = "TouchSwipe",
        defaults = {
            fingers: 1,
            threshold: 75,
            cancelThreshold: null,
            pinchThreshold: 20,
            maxTimeThreshold: null,
            fingerReleaseThreshold: 250,
            longTapThreshold: 500,
            doubleTapThreshold: 200,
            swipe: null,
            swipeLeft: null,
            swipeRight: null,
            swipeUp: null,
            swipeDown: null,
            swipeStatus: null,
            pinchIn: null,
            pinchOut: null,
            pinchStatus: null,
            click: null,
            tap: null,
            doubleTap: null,
            longTap: null,
            hold: null,
            triggerOnTouchEnd: !0,
            triggerOnTouchLeave: !1,
            allowPageScroll: "auto",
            fallbackToMouseEvents: !0,
            excludedElements: ".noSwipe",
            preventDefaultEvents: !0
        };
    $.fn.swipe = function(method) {
        var $this = $(this),
            plugin = $this.data(PLUGIN_NS);
        if (plugin && "string" == typeof method) {
            if (plugin[method]) return plugin[method].apply(plugin, Array.prototype.slice.call(arguments, 1));
            $.error("Method " + method + " does not exist on jQuery.swipe")
        } else if (plugin && "object" == typeof method) plugin.option.apply(plugin, arguments);
        else if (!(plugin || "object" != typeof method && method)) return init.apply(this, arguments);
        return $this
    }, $.fn.swipe.version = VERSION, $.fn.swipe.defaults = defaults, $.fn.swipe.phases = {
        PHASE_START: PHASE_START,
        PHASE_MOVE: PHASE_MOVE,
        PHASE_END: PHASE_END,
        PHASE_CANCEL: PHASE_CANCEL
    }, $.fn.swipe.directions = {
        LEFT: LEFT,
        RIGHT: RIGHT,
        UP: UP,
        DOWN: DOWN,
        IN: IN,
        OUT: OUT
    }, $.fn.swipe.pageScroll = {
        NONE: NONE,
        HORIZONTAL: HORIZONTAL,
        VERTICAL: VERTICAL,
        AUTO: AUTO
    }, $.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        FOUR: 4,
        FIVE: 5,
        ALL: ALL_FINGERS
    }
});; /**/
! function(e) {
    function t(n) {
        if (i[n]) return i[n].exports;
        var s = i[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return e[n].call(s.exports, s, s.exports, t), s.loaded = !0, s.exports
    }
    var i = {};
    return t.m = e, t.c = i, t.p = "", t(0)
}([function(e, t, i) {
    function n() {
        var e = S(document).width(),
            t = S(".container").width(),
            i = (e - t) / 2 + 15;
        S(".item-text").each(function() {
            var e = S(this).parent().find(".label");
            S(this).hasClass("even") ? (S(this).css("padding-left", i + "px"), e.css("padding-left", i + "px")) : S(this).css("padding-right", i + "px")
        })
    }

    function s() {
        S(window).width() >= 1153 ? S(".list-filters--open").on("click", function(e) {
            e.preventDefault(), S(".list-filters__select").hasClass("is-open") && S(".list-filters__select").removeClass("is-open")
        }) : (S(".list-filters--open").on("click", function(e) {
            e.preventDefault(), S(".list-filters__select").hasClass("is-open") || S(".list-filters__select").addClass("is-open")
        }), S(".list-filters--close").on("click", function(e) {
            e.preventDefault(), S(".list-filters__select").hasClass("is-open") && S(".list-filters__select").removeClass("is-open")
        }))
    }

    function o(e, t, i) {
        window.location.origin || (window.location.origin = window.location.protocol + "//" + window.location.host);
        var n = window.location.origin + window.location.pathname,
            s = n + "?city=" + e;
        void 0 !== t && (s += "&date=" + t, void 0 !== i && (s += "&time=" + i)), window.location.href = s
    }

    function a(e, t) {
        e.jsSocials({
            url: t,
            showLabel: !1,
            showCount: !1,
            shares: [{
                share: "facebook",
                logo: "zmdi zmdi-facebook"
            }, {
                share: "twitter",
                logo: "zmdi zmdi-twitter"
            }, {
                share: "googleplus",
                logo: "zmdi zmdi-google-plus"
            }, {
                share: "linkedin",
                logo: "zmdi zmdi-linkedin-box"
            }]
        })
    }

    function l() {
        var e = S(".resizeBg");
        e.length && e.each(function(e, t) {
            S(window).width() >= 1170 ? S(t).css({
                "background-image": "url(" + S(t).data("bg-landscape") + ")"
            }) : S(t).css({
                "background-image": "url(" + S(t).data("bg-portrait") + ")"
            })
        })
    }

    function r() {
        if (S(".blocsx3").length) {
            if (S(".subcontent-big").length)
                if (S(window).width() >= 992) {
                    var e = S(".subcontent-small"),
                        t = e[0].clientHeight + e[1].clientHeight + 20;
                    t -= 80, S(".subcontent-big").height(t)
                } else S(".subcontent-big").css("height", "auto");
            var i = S(S(".blocsx3").find(".title")[0]).outerHeight() + parseInt(S(S(".blocsx3").find(".title")[0]).css("marginBottom")),
                n = S(S(".blocsx3").find(".description")[0]).outerHeight() + parseInt(S(S(".blocsx3").find(".description")[0]).css("marginBottom")),
                s = S(S(".blocsx3").find(".content-left")[0]).outerHeight() + parseInt(S(S(".blocsx3").find(".content-left")[0]).css("marginBottom")),
                o = S(S(".blocsx3").find(".content-right")[0]).outerHeight() + parseInt(S(S(".blocsx3").find(".content-right")[0]).css("marginBottom")),
                a = 135;
            S(window).width() >= 1920 && (a = 125);
            var l = i + n + s;
            S(window).width() < 992 && (l += o, a = 100), l += a, S(".blocsx3").css("height", l)
        }
    }

    function c() {
        if (S(".duo").length > 0 && S(".duo-footer-slim").length < 1 && !S(".duo").hasClass("duo-form") && S(".duo-block").length > 1)
            if (S(window).width() >= 768) {
                var e = S(".duo-block");
                e.css("height", "auto");
                var t = Math.max(S(e[0]).outerHeight(), S(e[1]).outerHeight()),
                    i = 50;
                S(window).width() >= 768 && (i = 70), t -= 2 * i, t = t < 0 ? 0 : t, S(".duo-block").height(t)
            } else S(".duo-block").css("height", "auto")
    }

    function d() {
        S(".blocksx3inline").length && S(".blocksx3inline").each(function(e) {
            var t = null,
                i = null;
            if (S(this).find(".my-content").length > 1 && (t = S(this).find(".my-content"), i = 100), S(this).find(".my-item-body").length > 1 && (t = S(this).find(".my-item-body"), i = 115), S(this).find(".inner").length > 1 && (t = S(this).find(".inner"), i = 0), null !== t && t.length > 1)
                if (S(window).width() >= 768) {
                    t.css("height", "auto");
                    var n = Math.max(S(t[0]).outerHeight(), S(t[1]).outerHeight()),
                        n = Math.max(n, S(t[2]).outerHeight());
                    n -= i, n = n < 0 ? 0 : n, t.height(n)
                } else t.css("height", "auto")
        })
    }

    function h() {
        if (S(".mobilefriendly").length) {
            var e = S(S(".mobilefriendly").find(".active").find(".title")[0]).outerHeight() + 40,
                t = S(S(".mobilefriendly").find(".active").find(".description")[0]).outerHeight(),
                i = 160;
            S(window).width() >= 1920 && (i += 40);
            var n = e + t + i;
            S(".mobilefriendly").css("height", n), S(".mobilefriendly .carousel-inner").css("height", n), S(".mobilefriendly .item").css("height", n)
        }
    }

    function u(e) {
        var t = S(".slideshow"),
            i = S("#header-toggle-button"),
            n = 0,
            s = 0,
            o = 350,
            a = 0;
        if (i.is(":visible") ? (S(".blockMore").removeClass("show"), S(".blockMore").css("max-height", "none"), x()) : (e.hasClass("show") && (S(".blockMore").css("max-height", ""), e.css("max-height", "none"), a = e.outerHeight(), e.css("max-height", "")), e.animate({
                "max-height": a
            }, o)), t.length) {
            var l = t.find(".bg-fix-on-top"),
                r = t.find(".bg-menu-more"),
                c = t.find(".slide-content"),
                d = t.find(".carousel-inner"),
                h = d.find(".item"),
                u = S(l[0]).height(),
                p = S(c[0]).height();
            n = u + a, s = n + p, r.each(function(e, t) {
                S(t).animate({
                    top: n
                }, o)
            }), c.each(function(e, t) {
                S(t).animate({
                    top: n
                }, o)
            }), h.each(function(e, t) {
                S(t).animate({
                    height: s
                }, o)
            }), d.animate({
                height: s
            }, o), t.animate({
                height: s
            }, o)
        }
    }

    function p() {
        if (S(".showcase").length) {
            var e = S(".slider-content");
            if (e.length > 0) {
                var t = S(".slider-content").find(".slick-list");
                e.css("height", "auto"), t.css("height", "auto");
                var i = S(S("div.slick-center")[0]).next(),
                    n = 1.5 * i[0].clientHeight + 10;
                sliderHeight = n + 110, sliderHeight > 150 && (sliderHeightStr = String(sliderHeight) + "px", S(t[0]).css("height", sliderHeightStr))
            }
        }
    }

    function f() {
        var e = S(".blocks-node-get-choices");
        if (e.length) {
            var t = e.find(".blocks-node-options"),
                i = t.find(".selected-choice");
            i.find(".content").addClass("active")
        }
    }

    function g() {
        var e = S(".popin-fixed");
        if (e.length) {
            var t = 1170,
                i = S(window).width(),
                n = S(window).height(),
                s = S(".cloud-block").find(".content"),
                o = S(".download-block").find(".content"),
                a = S(".partner-block").find(".content");
            e.css("height", "inherit"), i >= t && e.innerHeight() < n && e.css("height", n + "px");
            var l = s.length ? s : o,
                r = s.length ? o : a;
            if (l.length && (l.css("height", "inherit"), r.css("height", "inherit"), i >= t && l.innerHeight() !== r.innerHeight())) {
                var c = l.innerHeight() > r.innerHeight() ? l.innerHeight() : r.innerHeight();
                l.innerHeight() > r.innerHeight() ? r.css("height", c + "px") : l.css("height", c + "px")
            }
        }
    }

    function m() {
        var e = S(".blockDownloadDevelopersVersionBloc4");
        if (e.length) {
            var t = e.find(".bsc2col");
            t.length && t.each(function(e, t) {
                var i = S(t).find("p");
                i.length && i.each(function(e, t) {
                    S(t).replaceWith('<div class="bsc2col-description">' + S(t).html() + "</div>")
                });
                var n = S(t).find("ul");
                n.length && n.each(function(e, t) {
                    S(t).addClass("bsc2col-list");
                    var i = S(t).find("li");
                    i.length && i.each(function(e, t) {
                        S(t).html("<span>" + S(t).html() + "</span>")
                    })
                })
            })
        }
    }

    function v() {
        S(".block-showcase-details .slideshowcase-details").slick({
            dots: !0,
            slidesToShow: 1,
            infinite: !0,
            focusOnSelect: !0,
            swipeToSlide: !0,
            nextArrow: '<div class="slick-next"><i class="material-icons" aria-label="builder">keyboard_arrow_right</i></div>',
            prevArrow: '<div class="slick-prev"><i class="material-icons" aria-label="builder">keyboard_arrow_left</i></div>'
        })
    }

    function b() {
        S("#agencie-body-carousel .images").slick({
            dots: !0,
            slidesToShow: 1,
            infinite: !0,
            focusOnSelect: !0,
            swipeToSlide: !0,
            nextArrow: '<div class="slick-next"><i class="material-icons">keyboard_arrow_right</i>',
            prevArrow: '<div class="slick-prev"><i class="material-icons">keyboard_arrow_left</i></div>',
            autoplay: !0,
            autoplaySpeed: 2e3,
            responsive: [{
                breakpoint: 1170,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: !0,
                    dots: !0
                }
            }]
        })
    }

    function w() {
        S(window).width() < 1170 ? S(".row-eq-height").each(function() {
            S(".inner").height("")
        }) : S(".row-eq-height").each(function() {
            var e = S(this).find(".inner").map(function() {
                    return S(this).height()
                }).get(),
                t = Math.max.apply(null, e);
            S(".inner").height(t)
        })
    }

    function y(e) {
        var t = S(e).children("i").html(),
            i = S(e).attr("target"),
            n = i.substring(i.lastIndexOf("/"));
        if ("play_arrow" == t) {
            var s = '<div id="video-container-block" class="mask-video" style="position: absolute; top: 0px; bottom: 0px; left: 0px; right: 0px; height: 100%; width: 100%; background: rgba(0, 0, 0, 0.57);"></div>';
            if (n.length > 0) {
                var o = '<div class="field-item even"><iframe src="//fast.wistia.net/embed/iframe/' + n + '?autoPlay=true" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" oallowfullscreen="oallowfullscreen" msallowfullscreen="msallowfullscreen" width="640" height="360"></iframe> <script src="//fast.wistia.net/assets/external/E-v1.js" async=""></script></div>';
                S("#highlights").append(s), S("#video-container-block").append(o), S(".play-video>i").html("close"), S("#video-container-block").on("click", function(e) {
                    var t = S("#video-container-block iframe");
                    t.is(e.target) || 0 !== t.has(e.target).length || (S("#video-container-block").remove(), S(".play-video>i").html("play_arrow"))
                })
            }
        } else "close" == t && (S("#video-container-block").remove(), S(".play-video>i").html("play_arrow"));
        if (null == t || void 0 == t) {
            var s = '<div id="video-container-block" class="mask-video" style="position: absolute; top: 0px; bottom: 0px; left: 0px; right: 0px; height: 100%; width: 100%; background: rgba(0, 0, 0, 0.57);"></div>';
            if (n.length > 0) {
                var o = '<div class="field-item even"><iframe src="//fast.wistia.net/embed/iframe/' + n + '?autoPlay=true" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" oallowfullscreen="oallowfullscreen" msallowfullscreen="msallowfullscreen" width="640" height="360"></iframe> <script src="//fast.wistia.net/assets/external/E-v1.js" async=""></script></div>';
                S("#slideshow").append(s), S("#video-container-block").append(o), S("#video-container-block").click(function() {
                    S("#video-container-block").remove(), S(this).off("click")
                })
            }
        }
    }

    function x() {
        var e = String(S(window).height() - 50) + "px";
        S("#navbar-collapse").css("height", e)
    }

    function C() {
        if (S(window).width() > 1169) {
            var e = S(".oneandone").height();
            S(".diy").css("height", e)
        } else S(".diy").css("height", "auto")
    }

    function k() {
        S(".pricing-tab__item .pricing-tab__title:first-child").addClass("is-active");
        var e = S(".pricing-tab__item .pricing-tab__title:first-child").data("tab");
        S("[data-tab-item=" + e + "]").show()
    }

    function j() {
        S("body").hasClass("node-type-cms-page") && (S('[data-toggle="tooltip"]').tooltip("destroy"), S("#header-toggle-button").is(":visible") ? S('[data-toggle="tooltip"]').tooltip({
            placement: "bottom"
        }) : S('[data-toggle="tooltip"]').tooltip({
            placement: "right"
        }))
    }

    function Q() {
        S("a.SEM-start-now-btn").click(function() {
            S("input#edit-submitted-email").focus()
        })
    }
    var S = i(1),
        _ = i(2);
    S.ajax({
        url: "https://apis.google.com/js/platform.js",
        dataType: "script"
    }), S(".carousel").carousel({
        interval: !1
    }), S(function() {
        S(".go-to-next").click(function() {
            var e = S(this).attr("href"),
                t = S(e).offset().top,
                i = 750;
            return S("html, body").animate({
                scrollTop: t
            }, i), !1
        }), S(".back-to-top-a").click(function() {
            var e = S(this).attr("href"),
                t = S(e).offset().top,
                i = 750;
            return S("html, body").animate({
                scrollTop: t
            }, i), !1
        }), S(".indexed-list").length && S(".indexed-sidebar-item a").click(function() {
            var e = S(this),
                t = S(this).attr("href"),
                i = S(t).offset().top,
                n = 750;
            return S("html, body").animate({
                scrollTop: i - 100
            }, n, function() {
                S(".indexed-sidebar li").removeClass("active"), e.parent().addClass("active")
            }), !1
        }), S(".show-target").length && S(".show-target").click(function() {
            S(".show-target-target").hide();
            var e = S(this).attr("href");
            S(e).show()
        })
    }), S(window).scroll(function() {
        if (scroll = S(window).scrollTop(), backtotop = S(".back-to-top"), scroll >= 800 && backtotop.removeClass("opacity-0"), scroll <= 800 && backtotop.addClass("opacity-0"), scroll > 0 ? (S("#header").addClass("header-fixed"), S("#header .left-menu-logos").addClass("scrolling"), S("#header .right-links").addClass("scrolling"), S("#header .container-fluid").addClass("scroll-menu")) : (S("#header").removeClass("header-fixed"), S("#header .left-menu-logos").removeClass("scrolling"), S("#header .right-links").removeClass("scrolling"), S("#header .container-fluid").removeClass("scroll-menu")), S(".indexed-list").length > 0 && S(window).width() >= 1170) {
            var e = S("#table-pricing-block").offset().top + S("#table-pricing-block").height();
            scroll >= e && (S(".indexed-sidebar").addClass("is-fixed"), S(".indexed-content").addClass("col-md-offset-4")), scroll < e && (S(".indexed-sidebar").removeClass("is-fixed"), S(".indexed-content").removeClass("col-md-offset-4"))
        }
        if (S(".indexed-list").length > 0) {
            var t = S(document).scrollTop(),
                i = S(".indexed-list").offset().top,
                n = S(".indexed-list")[0].clientHeight,
                s = i + n,
                o = S(".indexed-sidebar")[0].clientHeight,
                a = -300;
            S(window).width() >= 1920 && (a = -300);
            var l = s - o + a,
                r = -450;
            S(window).width() >= 1920 && (r = -600);
            var c = l + r;
            l < t ? (S(".indexed-sidebar").css("position", "absolute"), S(".indexed-list").hasClass("indexed-list--new") ? S(".indexed-sidebar").css("top", c - 700 + "px") : S("body").hasClass("node-type-features") && S(window).width() >= 1900 ? S(".indexed-sidebar").css("top", c - 343 + "px") : S("body").hasClass("node-type-features") && S(window).width() < 1900 ? S(".indexed-sidebar").css("top", c - 133 + "px") : S("body").hasClass("node-type-faq") && S(window).width() >= 1900 ? S(".indexed-sidebar").css("top", c - 153 + "px") : S("body").hasClass("node-type-faq") && S(window).width() < 1900 ? S(".indexed-sidebar").css("top", c - 3 + "px") : S(".indexed-sidebar").css("top", c + "px")) : (S(".indexed-sidebar").prop("style").removeProperty("position"), S(".indexed-sidebar").prop("style").removeProperty("top"))
        }
        var t = S(document).scrollTop();
        S(".indexed-sidebar a").each(function() {
            var e = S(this),
                i = S(e.attr("href")),
                n = i.position().top + S(window).height() - 450;
            n <= t && n + i.height() > t ? (S(".indexed-sidebar li").removeClass("active"), e.parent().addClass("active")) : e.removeClass("active")
        })
    }), S(document).ready(function() {
        function e(e) {
            p(), C = S(".slick-current"), Q = S(".slick-track"), T = S(".loopSlider-slide");
            var t = 1.5 * e.slideWidth;
            C.css({
                width: t
            });
            var i = 0;
            T.each(function() {
                i = i + S(this).innerWidth() + 10
            }), i *= 1.5, Q.css({
                width: i,
                "margin-left": -(t / 2)
            })
        }
        if (S(".custom-dropdown-menu").select2(), S('[data-toggle="tooltip"]').tooltip(), j(), k(), S(".pricing-tab__title").on("click", function() {
                var e = S(this).data("tab");
                S(".pricing-tab__title").removeClass("is-active"), S(this).addClass("is-active"), S(".table-pricing").hide(), S("[data-tab-item=" + e + "]").show()
            }), S(".blog-list-block-menu").length && S(".blog-list-block-menu").on("click", "ul", function() {
                S(this).toggleClass("is-open")
            }), S(".infiniteScroll").length && S(".infiniteScroll").infiniteScroll({
                path: ".pagination__next",
                append: ".infinite-post.col-xs-12.col-md-6",
                hideNav: ".pagination",
                status: ".page-load-status"
            }), S(".infiniteScrollPartners").length && S(".infiniteScrollPartners").infiniteScroll({
                path: ".pagination__next",
                append: ".infinite-post.col-md-4",
                hideNav: ".pagination",
                status: ".page-load-status"
            }), S(".infiniteScrollRessources").length) {
            var t = S(".infiniteScrollRessources").infiniteScroll({
                path: ".pagination__next",
                append: ".row.items",
                hideNav: ".pagination",
                status: ".page-load-status"
            });
            t.on("append.infiniteScroll", function() {
                S(".item .item-content").matchHeight()
            })
        }
        S(".list-bloc__openClose").on("click", function(e) {
            e.preventDefault();
            var t = S(this).data("open");
            if (S("[data-open-bloc='" + t + "']").hasClass("is-active")) S("[data-open-bloc='" + t + "']").removeClass("is-active"), S(this).removeClass("is-active"), S("[data-open-bloc='" + t + "']").animate({
                "max-height": "0"
            }, 350);
            else {
                S("[data-open-bloc='" + t + "']").addClass("is-active"), S(this).addClass("is-active"), S("[data-open-bloc='" + t + "']").css("max-height", ""), S("[data-open-bloc='" + t + "']").css("max-height", "none");
                var i = S("[data-open-bloc='" + t + "']").height();
                S("[data-open-bloc='" + t + "']").animate({
                    "max-height": i
                }, 350)
            }
        }), S("[data-toggle-switch]").on("click", function(e) {
            e.stopPropagation;
            var t = S(this),
                i = t.data("toggle-switch"),
                n = S("[data-toggle=" + i + "]"),
                s = S("[data-toggle-weight=" + i + "]");
            s.each(function() {
                var e = S(this);
                e.hasClass("active") ? e.removeClass("active") : e.addClass("active")
            }), n.each(function() {
                var e = S(this);
                "next" == e.attr("data-toggle-target") ? (e.show(), e.removeAttr("data-toggle-target")) : (e.hide(), e.attr("data-toggle-target", "next"))
            })
        }), S(".form-contact-this-agency").length && S(".considtionnal-website-referee").length && S("input[type=radio][name=radio-store]").change(function() {
            "already-online" == this.value ? S(".conditionnal-website").addClass("is-visible") : S(".conditionnal-website").removeClass("is-visible")
        }), S(".webform-accordion-wrapper").length && S(".webform-accordion-wrapper").on("click", "button.close", function() {
            S(this).parents(".encart").remove()
        });
        var i, n = document.getElementsByClassName("accordion");
        for (i = 0; i < n.length; i++) n[i].onclick = function() {
            this.classList.toggle("active"), this.nextElementSibling.classList.toggle("show")
        };
        S("#colorbox-test-link-1").colorbox({
            inline: !0,
            href: "#colorbox-test-inline-content-1",
            width: "80%"
        }), S(".mosaic-showcase .content-item").each(function(e) {
            var t = "#" + S(this).data("colorbox-id"),
                i = "100%";
            S(window).width() >= 1024 && (i = "80%"), S(this).colorbox({
                close: '<div class="close">X</div>',
                inline: !0,
                href: t,
                onComplete: function() {
                    S(t + " .slider")[0].slick.refresh()
                },
                width: i
            })
        });
        var x = "100%";
        S(window).width() >= 1024 && (x = "80%"), S(".agencie-body-carousel .colorbox-group").colorbox({
            close: '<div class="close">X</div>',
            onComplete: function() {},
            width: x,
            className: "web-agency-slideshow-detail"
        }), S("a#video-launcher").click(function(e) {
            y(this)
        }), S("a.video-launcher-btn").click(function(e) {
            y(S("a#video-launcher")), e.preventDefault()
        }), S(".indexed-list").length && S(".indexed-select").change(function() {
            S(".indexed-select option:selected").each(function() {
                var e = "#" + S(this).data("cat-href"),
                    t = S(e).offset().top,
                    i = 750;
                S("html, body").animate({
                    scrollTop: t - 50
                }, i)
            })
        });
        var C, Q, T, H = S(".loopSlider");
        if (H.on("init", function(t, i) {
                setTimeout(function() {
                    e(i)
                }, 400)
            }), H.on("setPosition", function(t, i) {
                e(i)
            }), H.on("afterChange", function() {
                H.addClass("noTransition"), H.find(".pseudo-current").removeClass("pseudo-current")
            }), H.on("beforeChange", function(e, t, i, n) {
                H.removeClass("noTransition");
                var s = t.slideCount - 1,
                    o = Math.abs(S(".loopSlider-slide:first-child").data("slickIndex")) - 1,
                    a = s - n,
                    l = 1.5 * t.slideWidth;
                S(t.$slides.get(i)).css({
                    width: t.slideWidth
                }), S(t.$slides.get(n)).css({
                    width: l
                }), i < s / 2 && n > s / 2 + i && (Q.css({
                    width: Q.width() + l - t.slideWidth
                }), T.eq(o - a).css({
                    width: l
                }).addClass("pseudo-current")), i > s / 2 && n < s / 2 && (Q.css({
                    width: Q.width() + l - t.slideWidth,
                    "margin-left": -(l - (t.slideWidth - l / 2))
                }), T.eq(t.slideCount + o + 1 + n).css({
                    width: l
                }).addClass("pseudo-current"))
            }), H.slick({
                lazyLoad: "progressive",
                centerMode: !0,
                centerPadding: "0",
                slidesToShow: 2,
                infinite: !0,
                arrows: !1,
                speed: 500,
                focusOnSelect: !0,
                swipeToSlide: !0,
                mobileFirst: !0,
                responsive: [{
                    breakpoint: 1920,
                    settings: {
                        slidesToShow: 6
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 4
                    }
                }]
            }), S("#keyfigures").length && new Waypoint({
                element: document.getElementById("keyfigures"),
                handler: function(e) {
                    "down" == e && S(".count").each(function() {
                        S(this).prop("Counter", 0).animate({
                            Counter: S(this).data("number")
                        }, {
                            duration: 1e3,
                            easing: "swing",
                            step: function(e) {
                                S(this).data("number") > 999 ? "en" == document.documentElement.lang || "pt" == document.documentElement.lang || "pt-br" == document.documentElement.lang ? S(this).text(String(Math.ceil(e)).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")) : "fr" == document.documentElement.lang || "it" == document.documentElement.lang || "pl" == document.documentElement.lang ? S(this).text(String(Math.ceil(e)).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ")) : "es" == document.documentElement.lang || "de" == document.documentElement.lang || "nl" == document.documentElement.lang ? S(this).text(String(Math.ceil(e)).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")) : S(this).text(String(Math.ceil(e)).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ")) : S(this).text(Math.ceil(e))
                            }
                        })
                    })
                },
                offset: 400
            }), S(".joincommunity").length) {
            var I = S(".joincommunity").find(".number");
            I.each(function(e) {
                S(this).text() > 999 && ("en" == document.documentElement.lang ? S(this).text(String(Math.ceil(S(this).text())).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")) : S(this).text(String(Math.ceil(S(this).text())).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ")))
            })
        }
        setTimeout(function() {
            l(), r(), d(), c(), h(), f(), g(), v(), b(), w(), s(), jQuery(window).on("resize", _(function() {
                l(), r(), d(), c(), h(), p(), f(), g(), w(), s()
            }, 200))
        }, 500), setTimeout(function() {
            p()
        }, 1e3);
        var z = S("#header").find("#navbar-collapse");
        S("body").on("click", ".btn-menu", function(e) {
            e.preventDefault();
            var t = S(this).attr("id"),
                i = S("[data-toggle='" + t + "']");
            i.hasClass("show") ? (i.removeClass("show"), z.removeClass("in")) : (S(".blockMore").removeClass("show"), S(".blockMore").css("max-height", ""), i.addClass("show"), z.addClass("in")), u(i)
        }), S("body").on("click", ".closeForm", function(e) {
            e.preventDefault(), S(this).parent().removeClass("show");
            var t = S(this).parent();
            u(t)
        }), z.on("shown.bs.collapse", function(e) {
            u()
        }), S("body").on("click", ".row-choices .sel-node-options", function(e) {
            e.stopPropagation(), S(".blocks-node-options").toggleClass("open")
        }).on("click", ".blocks-node-options .version-option", function() {
            var e = S(".blocks-node-get-choices"),
                t = e.find(".sel-node-options"),
                i = e.find(".blocks-node-options");
            S(this).data("version") !== t.data("selected-version") && (i.find(".selected-choice").removeClass("selected-choice"), S(this).addClass("selected-choice"), t.find(".version").html(S(this).find(".version").html()), t.data("selected-version", S(this).data("version"))), i.removeClass("open"), i.find(".active").removeClass("active"), S(this).find(".content").addClass("active")
        });
        var M = S("#footer-language-switcher");
        if (M.length && M.change(function() {
                window.location.href = S(this).val()
            }), m(), S(".highlights-menu").length && S(".highlights-menu").find(".indicator").click(function() {
                if (!S(this).hasClass("active")) {
                    var e = S(this).find("a.text");
                    e.attr("href") && (window.location = e.attr("href"))
                }
            }), S(".container>div#pagination").length > 0) {
            var E = S("body").attr("class"),
                O = new RegExp("page-node-(\\d+)"),
                A = Tab = O.exec(E),
                A = parseInt(Tab[1]),
                D = S("#listingItems").attr("type"),
                N = parseInt(S("#listingItems").attr("total")),
                P = "",
                $ = S("#listingItems").data("year"),
                W = S("html").attr("lang"),
                L = S("#listingItems").attr("current");
            S("#select-ajaj-load select").length > 0 && (S.each(S("#select-ajaj-load select"), function(e, t) {
                P += S(t).attr("name") + ","
            }), P.length > 0 && (P = P.substring(0, P.length - 1)));
            var B = "/api/listing?parent=" + A + "&type=" + D + "&page=" + L + ("" != P ? "&filters=" + P : "") + (isNaN($) ? "" : "&year=" + $);
            W && (B += "&lang=" + W);
            var q = !0;
            N > 0 ? (S("#pagination").hide(), S("#pagination").pagination({
                dataSource: B,
                locator: "items",
                triggerPagingOnInit: !0,
                ulClassName: "pagination",
                prevText: '<i class="zmdi zmdi-chevron-left"></i>',
                nextText: '<i class="zmdi zmdi-chevron-right"></i>',
                totalNumber: parseInt(S("#listingItems").attr("total")),
                pageNumber: L,
                pageSize: parseInt(S("#listingItems").attr("offset")),
                callback: function(e, t) {
                    var i = S("#pagination").pagination("getTotalPage");
                    i > 1 ? S("#pagination").show() : S("#pagination").hide();
                    var n = e;
                    S("#listingItems").html(n), route = "/" + S("#listingItems").attr("page"), t.pageNumber > 1 ? route = S("#listingItems").attr("page").replace("+P+", t.pageNumber) : route = S("#listingItems").attr("page").replace("+P+", ""), route = route.replace(/\/$/, ""), window.history.pushState("", "", route), q ? q = !1 : S("html, body").animate({
                        scrollTop: S("#listingItems").offset().top - 60
                    }, 1e3), items = S("#listingItems.in_the_news>div.item"), S.each(items, function(e, t) {
                        var i = S(t).find("div.second>a").attr("href"),
                            n = S(t).find("div.second>div.shares>div.row");
                        a(n, i)
                    })
                }
            })) : S("#pagination").css("display", "none")
        }
        if (S("#trainingCitySelector").length && S("#trainingCitySelector").find("select").change(function() {
                o(S(this).val())
            }), S(".webform-component--training-choices--training-city").length && S(".webform-component--training-choices--training-city").find("select").change(function() {
                o(S(this).val())
            }), S("#trainingDates").length && S("#trainingDates").find(".training-date").click(function() {
                var e = S(this).data("city"),
                    t = S(this).data("date").split(" ")[0],
                    i = S(this).data("date").split(" ")[1];
                o(e, t, i)
            }), S("form#webform-client-form-612").length) {
            var U = S("form#webform-client-form-612"),
                F = U.find('[name="submitted[training_information][training_city]"]'),
                R = U.find('[name="submitted[training_information][training_date]"]');
            F.change(function() {
                var e = S(this).val();
                if ("" !== e) o(e);
                else {
                    var t = R.find("option:first");
                    R.html('<option value="">' + t.html() + "</option>")
                }
            })
        }
        S("body").on("click", ".encart > button.close", function() {
            S(this).parent().remove()
        })
    }), S(document).ready(function() {
        S("img.lazy").lazyload(), S(".download-btn-stable").click(function(e) {
            e.preventDefault(), S(".download-start-stable").toggleClass("hidden"), S(".download-form-stable").toggleClass("hidden")
        }), S(".download-page .download-btn-promoted").click(function(e) {
            e.preventDefault(), S(".download-page .download-start-promoted").toggleClass("hidden"), S(".download-page .download-form-promoted").toggleClass("hidden")
        }), C(), n(), S(window).resize(function() {
            if (n(), C(), k(), j(), S("#header-toggle-button").is(":visible") ? (S("[data-open-bloc]").css("max-height", "0"), S(".list-bloc__openClose").removeClass("is-active")) : S("[data-open-bloc]").css("max-height", "none"), S("#header-toggle-button").is(":visible")) S(".blockMore").css("max-height", "none"), S(".navbar-collapse").hasClass("in") ? S(".navbar-toggle").removeClass("collapsed") : S(".navbar-toggle").addClass("collapsed"), u();
            else if (S(".blockMore").css("max-height", ""), S(".blockMore.show")) {
                S(".blockMore.show").css("max-height", "none");
                var e = S("body").find(".blockMore.show");
                u(e)
            }
        })
    }), S(document).ready(function() {
        Q()
    }), S(document).ready(function() {
        var e = S("#partner-contact-btn").data("title"),
            t = S("#partner-contact").data("badge"),
            i = S("#partner-contact").data("formid");
        "" != i && S("#edit-webform-ajax-submit-" + i).one("click", function() {
            S(document).ajaxSuccess(function(n, s, o) {
                S("#webform-ajax-wrapper-" + i + " .messages").is(".error") || dataLayer.push({
                    event: "leadwebagency",
                    eventCategory: "Lead to Web Agency",
                    eventAction: e,
                    eventLabel: t
                })
            })
        });
        var n = S(".newsletter-not-inscribe form");
        n && S(".newsletter-not-inscribe form .webform-submit").one("click", function() {
            S(document).ajaxSuccess(function(e, t, i) {
                S(".newsletter-not-inscribe .messages").is(".error") || (S(".newsletter-not-inscribe").animate({
                    "max-height": "0"
                }, 200), S(".newsletter-inscribe").animate({
                    "max-height": "360px"
                }, 800))
            })
        });
        var s = S(".form-submit-shop-to-showcase").data("showcaseid");
        "" != s && S("#edit-webform-ajax-submit-" + s).one("click", function() {
            S(document).ajaxSuccess(function(e, t, i) {
                S("#webform-ajax-wrapper-" + s + " .messages").is(".error") || dataLayer.push({
                    event: "Bouton_Showcase"
                })
            })
        })
    }), S(document).ready(function() {
        function e(e) {
            var t = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return t.test(String(e).toLowerCase())
        }

        function t(e) {
            var t = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
            return t.test(String(e).toLowerCase())
        }

        function i() {
            inputsActive = !0, "" === jQuery("#step2 #shopName").val() && (inputsActive = !1), ("" === jQuery("#step2 #shopUrl").val() || jQuery("#step2 #shopUrl").hasClass("error")) && (inputsActive = !1), jQuery("#step2 #country").val() === l && (inputsActive = !1), jQuery("#step2 #businessSector").val() === r && (inputsActive = !1), jQuery("#step2 #year").val() === c && (inputsActive = !1)
        }

        function n() {
            i(), o === !0 && a === !0 && inputsActive === !0 ? (jQuery("#step2 .next-step-button").removeClass("disabled"), jQuery("#step2 .next-step-button").addClass("active")) : (jQuery("#step2 .next-step-button").addClass("disabled"), jQuery("#step2 .next-step-button").removeClass("active"))
        }

        function s() {
            return "undefined" != typeof window.orientation || navigator.userAgent.indexOf("IEMobile") !== -1
        }
        window.location.href.indexOf("en/download") > -1 && S(".hosting-blocks").wrapAll("<div class='row row-hosting-blocks' />"), window.location.href.indexOf("prestatrust") > -1 && (S("#highlights .content .prestatrust-button").removeAttr("href"), S("#highlights .content .prestatrust-button").click(function() {
            S("#video-launcher").click()
        })), S(window).resize(function() {
            if (S("#bandeau-news").is(":visible")) {
                var e = S("#bandeau-news").height();
                S("#header").css("top", e), S(".container-large-header").css("padding-top", e)
            }
            S(window).width() < 1169 ? S("#header-menu .more-submenus-column").unbind("mouseenter mouseleave") : S("#header-menu .more-submenus-column").bind({
                mouseenter: function() {
                    S(this).children(".new-navbar-collapse").addClass("active")
                },
                mouseleave: function() {
                    S(this).children(".new-navbar-collapse").removeClass("active")
                }
            })
        }).resize(), S(".hamburger-menu").click(function() {
            S("#navbar-collapse-menu.collapse.navbar-collapse.mobile-menu").slideDown(), S(".header-alt #header.header-fixed").addClass("mobile"), S(".right-links").addClass("active"), S("#navbar-collapse-menu.collapse.navbar-collapse").addClass("mobile-menu")
        }), S(".mobile.close-menu").click(function() {
            S(".new-navbar-collapse").hide(), S(".back-link").hide(), S(".header-alt #header.header-fixed").removeClass("mobile"), S(".right-links").removeClass("active"), S("#navbar-collapse-menu.collapse.navbar-collapse").removeClass("mobile-menu")
        }), S(".navbar-toggle.main-button").click(function() {
            S(this).next().show(), S(".more-submenus-column").hide(), S(this).parent().parent().show()
        }), S(".backlink-menu .navbar-toggle").click(function() {
            S(this).parent().hide(), S(this).prev().show(), S(".more-submenus-column").show()
        }), S("#close-news").click(function() {
            S("#bandeau-news").hide(), S("#header").css("top", 0), S(".container-large-header").css("padding-top", 0)
        }), jQuery("#step1 #email").on("input", function() {
            e(jQuery("#step1 #email").val()) ? (jQuery(this).removeClass("error"), jQuery(this).parent().removeClass("error-block")) : (jQuery(this).addClass("error"), jQuery(this).parent().addClass("error-block"))
        }), jQuery("#step1 input").on("input", function() {
            var e = !0;
            "" === jQuery("#step1 #firstName").val() && (e = !1), "" === jQuery("#step1 #lastName").val() && (e = !1), ("" === jQuery("#step1 #email").val() || jQuery("#step1 #email").hasClass("error")) && (e = !1), "" === jQuery("#step1 #jobTitle").val() && (e = !1), e === !0 ? (jQuery("#step1 .next-step-button").removeClass("disabled"), jQuery("#step1 .next-step-button").addClass("active")) : (jQuery("#step1 .next-step-button").addClass("disabled"), jQuery("#step1 .next-step-button").removeClass("active"))
        }), jQuery("#step1 .next-step-button").on("click", function() {
            jQuery(this).hasClass("active") && (jQuery("#step1").hide(), jQuery("#step2").show(), jQuery("#step-1-label").removeClass("active"), jQuery("#step-2-label").addClass("active"), S("html, body").animate({
                scrollTop: 0
            }))
        });
        var o = !1,
            a = !1,
            l = jQuery("#step2 #country .first-value").val(),
            r = jQuery("#step2 #businessSector .first-value").val(),
            c = jQuery("#step2 #year .first-value").val();
        jQuery("#step2 #shopUrl").on("input", function() {
            t(jQuery(this).val()) ? (jQuery(this).removeClass("error"), jQuery(this).parent().parent().removeClass("error-block")) : (jQuery(this).addClass("error"), jQuery(this).parent().parent().addClass("error-block")), n()
        }), jQuery(".products-input").on("click", function() {
            jQuery(".products-input").removeClass("active"), jQuery(this).addClass("active"), o = !0, n()
        }), jQuery("#step2 .revenues-input").on("click", function() {
            jQuery("#step2 .revenues-input").removeClass("active"), jQuery(this).addClass("active"), a = !0, n()
        }), jQuery("#step2 #shopName").on("input", function() {
            n()
        }), jQuery("#step2 select").on("change", function() {
            n()
        }), jQuery("#step2 .previous-step-button").on("click", function() {
            jQuery("#step2").hide(), jQuery("#step1").show(), jQuery("#step-2-label").removeClass("active"), jQuery("#step-1-label").addClass("active"), S("html, body").animate({
                scrollTop: 0
            })
        }), jQuery("#step2 .next-step-button").on("click", function() {
            jQuery(this).hasClass("active") && (jQuery("#step2").hide(), jQuery("#step3").show(), jQuery("#step-2-label").removeClass("active"), jQuery("#step-3-label").addClass("active"), S("html, body").animate({
                scrollTop: 0
            }))
        }), jQuery("#step3 .previous-step-button").on("click", function() {
            jQuery("#step3").hide(), jQuery("#step2").show(), jQuery("#step-3-label").removeClass("active"), jQuery("#step-2-label").addClass("active"), S("html, body").animate({
                scrollTop: 0
            })
        }), jQuery("#step3 .next-step-button").on("click", function() {
            jQuery("#step3").hide(), jQuery("#step4").show(), jQuery("#step-3-label").removeClass("active"), jQuery("#step-4-label").addClass("active"), S("html, body").animate({
                scrollTop: 0
            })
        }), jQuery("#step4 .previous-step-button").on("click", function(e) {
            jQuery(this).hasClass("active") ? (jQuery("#step4").hide(), jQuery("#step3").show(), jQuery("#step-4-label").removeClass("active"), jQuery("#step-3-label").addClass("active"),
                S("html, body").animate({
                    scrollTop: 0
                })) : (e.stopPropagation(), e.preventDefault())
        }), jQuery("#step4 .full-length-textarea").on("input", function() {
            var e = !0;
            "" === jQuery("#step4 #productType").val() && (e = !1), "" === jQuery("#step4 #story").val() && (e = !1), "" === jQuery("#step4 #addedValue").val() && (e = !1), e === !0 ? (jQuery("#step4 #send-button,#showcase-form #send-button-bottom").removeClass("disabled"), jQuery("#step4 #send-button,#showcase-form #send-button-bottom").addClass("active")) : (jQuery("#step4 #send-button,#showcase-form #send-button-bottom").addClass("disabled"), jQuery("#step4 #send-button,#showcase-form #send-button-bottom").removeClass("active"))
        }), S("#searchBar").val() > 0 && S(this).addClass("filled");
        var d = s();
        if (d === !0) {
            var h = S("#psdays .events .event").size(),
                u = S("#psconnects .events .event").size();
            S("#psdays .events").css("width", 240 * h), S("#psconnects .events").css("width", 240 * u), S(".events").css("height", 188), S("#psdays").addClass("mobile"), S("#psconnects").addClass("mobile")
        } else S("#psdays").addClass("web"), S("#psconnects").addClass("web");
        if (S(".label-filters").on("click", function() {
                S(".label-filters").removeClass("active");
                var e = jQuery(this).attr("name");
                S(this).addClass("active"), "undefined" != typeof e ? (S(".images").hide(), S("#" + e).fadeIn()) : S(".images").fadeIn()
            }), S(".psd-prog-block").length) {
            var p = new Date(S(".psday-prog-list").attr("date")),
                f = p.toISOString().replace(/-|:|\.\d+/g, "").substr(0, 9),
                g = 0;
            S(".psday-prog-list .row").each(function() {
                if (null != S(this).attr("name") || void 0 != S(this).attr("name")) {
                    var e = S(this).attr("name");
                    !S(".psd-prog-filter option[value='" + e + "']").length > 0 && S(".psd-prog-filter").append('<option value="' + e + '">' + e + "</option>");
                    var t = new Date(S(this).find(".psd-prog-date").attr("dateStart")).toISOString().replace(/-|:|\.\d+/g, "").substr(9, 16),
                        i = new Date(S(this).find(".psd-prog-date").attr("datefin")).toISOString().replace(/-|:|\.\d+/g, "").substr(9, 16),
                        n = "",
                        s = "https://www.google.com/calendar/render?action=TEMPLATE&text=" + S.trim(S(this).find("#psd-conf-title").text()) + "&dates=" + f + t + "/" + f + i + "&details=" + n + "&location=" + S.trim(S(this).find(".psd-prog-room").text()) + "&sprop=&sprop=name:";
                    S(this).find(".psd-bt-agenda a").attr("href", s), "none" == S(this).css("display") && (g < 5 ? (S(this).css("display", "flex"), S(".psd-bt-seemore").css("display", "none"), g++) : S(".psd-bt-seemore").css("display", "block"))
                }
            }), S(".psd-prog-filter").change(function() {
                var e = 0;
                S(".psday-prog-list .psd-prog-item").css("display", "none"), S(".psday-prog-list .row").each(function() {
                    "all" == S(".psd-prog-filter").find(":selected").attr("name") ? ("none" != S(this).css("display") || S(this).hasClass("psd-table-head") || e < 5 && (S(this).css("display", "flex"), e++), "none" != S(this).css("display") ? S(".psd-bt-seemore").css("display", "none") : S(".psd-bt-seemore").css("display", "block")) : S(this).attr("name") == S(".psd-prog-filter").find(":selected").text() || S(this).hasClass("psd-table-head") ? (e < 5 && !S(this).hasClass("psd-table-head") && (S(this).css("display", "flex"), e++), "none" != S(this).css("display") ? S(".psd-bt-seemore").css("display", "none") : S(".psd-bt-seemore").css("display", "block")) : S(this).css("display", "none")
                })
            }), S(".psd-bt-seemore").click(function() {
                var e = 0;
                S(".psday-prog-list .row").each(function() {
                    null == S(this).attr("name") && void 0 == S(this).attr("name") || "none" == S(this).css("display") && (S(this).attr("name") == S(".psd-prog-filter").find(":selected").text() && e < 5 && (S(this).css("display", "flex"), e++), "all" == S(".psd-prog-filter").find(":selected").attr("name") && e < 5 && (S(this).css("display", "flex"), e++)), "none" != S(this).css("display") ? S(".psd-bt-seemore").css("display", "none") : S(".psd-bt-seemore").css("display", "block")
                })
            })
        }
        S(".tabs-info-part").length && (S("#informations, #faq").hide(), S(".tabs-infos .tabs:first").addClass("active"), S(".tabs-infos .tabs").click(function(e) {
            var t = S(this).attr("data-name");
            S(".tabs-infos .tabs").removeClass("active"), S("#maps, #informations, #faq").hide(), S(this).addClass("active"), S("#" + t).fadeIn()
        }))
    })
}, function(e, t) {
    e.exports = jQuery
}, function(e, t, i) {
    function n(e, t, i) {
        function n(t) {
            var i = b,
                n = w;
            return b = w = void 0, j = t, x = e.apply(n, i)
        }

        function d(e) {
            return j = e, C = setTimeout(p, t), Q ? n(e) : x
        }

        function h(e) {
            var i = e - k,
                n = e - j,
                s = t - i;
            return S ? c(s, y - n) : s
        }

        function u(e) {
            var i = e - k,
                n = e - j;
            return void 0 === k || i >= t || i < 0 || S && n >= y
        }

        function p() {
            var e = o();
            return u(e) ? f(e) : void(C = setTimeout(p, h(e)))
        }

        function f(e) {
            return C = void 0, _ && b ? n(e) : (b = w = void 0, x)
        }

        function g() {
            void 0 !== C && clearTimeout(C), j = 0, b = k = w = C = void 0
        }

        function m() {
            return void 0 === C ? x : f(o())
        }

        function v() {
            var e = o(),
                i = u(e);
            if (b = arguments, w = this, k = e, i) {
                if (void 0 === C) return d(k);
                if (S) return C = setTimeout(p, t), n(k)
            }
            return void 0 === C && (C = setTimeout(p, t)), x
        }
        var b, w, y, x, C, k, j = 0,
            Q = !1,
            S = !1,
            _ = !0;
        if ("function" != typeof e) throw new TypeError(l);
        return t = a(t) || 0, s(i) && (Q = !!i.leading, S = "maxWait" in i, y = S ? r(a(i.maxWait) || 0, t) : y, _ = "trailing" in i ? !!i.trailing : _), v.cancel = g, v.flush = m, v
    }
    var s = i(3),
        o = i(4),
        a = i(7),
        l = "Expected a function",
        r = Math.max,
        c = Math.min;
    e.exports = n
}, function(e, t) {
    function i(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
    e.exports = i
}, function(e, t, i) {
    var n = i(5),
        s = function() {
            return n.Date.now()
        };
    e.exports = s
}, function(e, t, i) {
    var n = i(6),
        s = "object" == typeof self && self && self.Object === Object && self,
        o = n || s || Function("return this")();
    e.exports = o
}, function(e, t) {
    (function(t) {
        var i = "object" == typeof t && t && t.Object === Object && t;
        e.exports = i
    }).call(t, function() {
        return this
    }())
}, function(e, t, i) {
    function n(e) {
        if ("number" == typeof e) return e;
        if (o(e)) return a;
        if (s(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = s(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(l, "");
        var i = c.test(e);
        return i || d.test(e) ? h(e.slice(2), i ? 2 : 8) : r.test(e) ? a : +e
    }
    var s = i(3),
        o = i(8),
        a = NaN,
        l = /^\s+|\s+$/g,
        r = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        d = /^0o[0-7]+$/i,
        h = parseInt;
    e.exports = n
}, function(e, t, i) {
    function n(e) {
        return "symbol" == typeof e || o(e) && s(e) == a
    }
    var s = i(9),
        o = i(13),
        a = "[object Symbol]";
    e.exports = n
}, function(e, t, i) {
    function n(e) {
        return null == e ? void 0 === e ? r : l : c && c in Object(e) ? o(e) : a(e)
    }
    var s = i(10),
        o = i(11),
        a = i(12),
        l = "[object Null]",
        r = "[object Undefined]",
        c = s ? s.toStringTag : void 0;
    e.exports = n
}, function(e, t, i) {
    var n = i(5),
        s = n.Symbol;
    e.exports = s
}, function(e, t, i) {
    function n(e) {
        var t = a.call(e, r),
            i = e[r];
        try {
            e[r] = void 0;
            var n = !0
        } catch (e) {}
        var s = l.call(e);
        return n && (t ? e[r] = i : delete e[r]), s
    }
    var s = i(10),
        o = Object.prototype,
        a = o.hasOwnProperty,
        l = o.toString,
        r = s ? s.toStringTag : void 0;
    e.exports = n
}, function(e, t) {
    function i(e) {
        return s.call(e)
    }
    var n = Object.prototype,
        s = n.toString;
    e.exports = i
}, function(e, t) {
    function i(e) {
        return null != e && "object" == typeof e
    }
    e.exports = i
}]);; /**/