webpackJsonp([4], {
    21: function(e, t, n) {
        "use strict";
        e.exports = n(3403)
    },
    23: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                var t = n(55).promise(e);
                return t.constructor = i, t
            }

            function r(e) {
                var n = e.url,
                    i = e.headers,
                    r = e.method,
                    s = e.timeout,
                    l = e.dataType,
                    u = e.includeCredentials,
                    d = "json" === l,
                    p = "get" !== r,
                    h = e.data && e.data.priority || c.MEDIUM,
                    f = d && p ? JSON.stringify(e.data) : e.data,
                    g = d ? "application/json" : null,
                    m = u === !0 ? {
                        withCredentials: !0
                    } : void 0;
                return t.ajax({
                    url: n,
                    headers: i,
                    type: r,
                    data: f,
                    contentType: g,
                    priority: h,
                    processData: p,
                    timeout: s,
                    xhrFields: m
                }).then(o, a)
            }

            function o(e, t, n) {
                return {
                    body: e,
                    status: n.status,
                    headers: {}
                }
            }

            function a() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    t = e.responseJSON,
                    n = void 0 === t ? {} : t,
                    i = e.status;
                return {
                    body: n,
                    status: i,
                    headers: {}
                }
            }

            function s(e) {
                return e.replace(d, "/$&") || "/"
            }

            function l(e) {
                return e.replace(p, "")
            }

            function u(e, t, i, r, o) {
                return n(65).stringify({
                    scheme: e,
                    host: t,
                    port: i,
                    path: s(l(r)),
                    query: o
                })
            }
            var c = n(235).RequestPriorities,
                d = /^[^\/]/,
                p = /\/$/;
            e.exports = n(1665)({
                endpoints: n(1732),
                services: n(1736)
            }, r, u, i)
        }).call(t, n(1))
    },
    50: function(e, t, n) {
        "use strict";

        function i(e, t, i) {
            i = i || {};
            var r = a.t(e, t, i.context, i.comment);
            return r = "asterisk" === s ? o(r) : r, new(n(20).SafeString)(r)
        }

        function r(e, t, i, r, l) {
            l = l || {};
            var u = a.tp(e, t, i, r, l.context, l.comment);
            return u = "asterisk" === s ? o(u) : u, new(n(20).SafeString)(u)
        }

        function o(e) {
            var t = !1;
            return e.split("").map(function(e) {
                return "<" === e || ">" === e ? (t = "<" === e, e) : t || !e.match(/[a-z]/i) ? e : "*"
            }).join("")
        }
        var a, s;
        e.exports = {
            initialize: function() {
                var e = window.__sc_locale || {};
                s = window.document.documentElement.getAttribute("lang"), a = a || new(n(1670)), a.setLocale(s), a.extend(e[s]), this.numberHelper = a.number, this.dateTimeHelper = a.dateTime, this.priceHelper = a.price
            },
            t: i,
            tp: r,
            tPending: i,
            tpPending: r,
            getLocale: function() {
                return s
            },
            getCurrentLanguage: function() {
                return n(2356).experimentalAndPublicLanguages[s]
            },
            getD3LocaleData: function() {
                return a.getLocaleDataFor("d3")
            },
            getDatePickerLocaleData: function() {
                return a.getLocaleDataFor("jquery.datepicker")
            },
            getNativeLocaleData: function() {
                return a.getLocaleDataFor("native")
            }
        }
    },
    53: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                for (; e;) {
                    var t = e.options.fetchPriority;
                    if (null != t) return t;
                    e = e._parentView
                }
                return _.MEDIUM
            }

            function r(e, t) {
                for (var n = this; n && !t.isPropagationStopped();) n.trigger(e, t), n = n._parentView
            }

            function o(e, t) {
                return n(3).defaults(t, e.prototype.defaults), e === w ? t : o(e.__super__.constructor, t)
            }

            function a(e, t) {
                var n = this,
                    i = e ? "on" : "off",
                    r = t.source,
                    o = e ? s.call(this, t) : null;
                d(t).forEach(function(e) {
                    r[i]("change:" + e, o, n)
                })
            }

            function s(e) {
                return e.options.nestedAttributes ? function(t, n, i, r) {
                    this._lastEventId !== r && (this._lastEventId = r, l.call(this, e) && this.onModelChange(t, n, i))
                } : this._onModelChange
            }

            function l(e) {
                var t = e.source,
                    i = e.options.nestedAttributes,
                    r = t.changed,
                    o = d(e),
                    a = o.some(function(e) {
                        return !i[e] && n(3).has(r, e)
                    });
                if (a) return !0;
                var s = t.previousAttributes();
                return n(3).some(i, function(e, t) {
                    return r[t] ? s[t] ? e.some(function(e) {
                        return s[t][e] !== r[t][e]
                    }) : !0 : !1
                })
            }

            function u(e, t) {
                var n = t.source,
                    i = e ? "on" : "off";
                n[i]("add", this.onAdd, this)[i]("remove", this.onRemove, this)[i]("reset", this.onCollectionReset, this)[i]("add remove reset", this.onCollectionChange, this)
            }

            function c(e) {
                var t = e.source,
                    n = e.options.isModel,
                    i = n ? a : u;
                i.call(this, !1, e), t.release()
            }

            function d(e) {
                var t = h(e.source, e.options.observedAttributes),
                    n = p(e);
                return t ? t.concat(n) : n
            }

            function p(e) {
                var t = e.options,
                    n = e.source;
                return h(n, t.requiredAttributes) || []
            }

            function h(e, t) {
                return t && !Array.isArray(t) ? t[e.resource_type] : t
            }

            function f(e) {
                var t = e.options.observedAttributes,
                    n = e.source;
                return t && t.length && !n.isPopulated() && !n.hasDataForView(t)
            }

            function g(e, t) {
                var n = void 0,
                    i = void 0,
                    r = h(e, t.requiredAttributes),
                    o = h(e, t.observedAttributes),
                    a = (r || []).concat(o || []).reduce(function(e, t) {
                        var n = "string" == typeof t ? t.split(".") : [t],
                            i = n[0],
                            r = n[1];
                        n[2];
                        return r && (e || (e = {}), e[i] = [r].concat(e[i] || [])), e
                    }, null);
                return a ? (n = m(r), i = m(o)) : (n = r, i = o), {
                    requiredAttributes: n,
                    observedAttributes: i,
                    nestedAttributes: a
                }
            }

            function m(e) {
                return e ? n(3).uniq(e.map(function(e) {
                    return e.split(".")[0]
                })) : null
            }
            var v = n(591).whenElementVisible,
                _ = n(235).RequestPriorities,
                y = 46,
                b = 47,
                w = e.exports = n(22).View.extend(n(504), n(1845), {
                    ModelClass: null,
                    requiredAttributes: null,
                    observedAttributes: null,
                    css: null,
                    template: n(3).noop,
                    LoadingView: null,
                    loadingViewArgs: null,
                    loadingTemplate: function() {
                        return ""
                    },
                    element2selector: null,
                    _element2selector_cache: null,
                    defaults: {
                        bulkFetch: 0
                    },
                    bubbleEvents: null,
                    disposed: !1,
                    subviews: null,
                    _subviews_keys: null,
                    _lastEventId: null,
                    constructorArguments: null,
                    _whenInsertedDefer: null,
                    _whenVisibleDefer: null,
                    _deferreds: null,
                    _dataSources: null,
                    initialize: function(e) {
                        var t;
                        e = this.options = o(this.constructor, e || {}), this.constructorArguments = n(3).clone(e), e.resource_id && this.ModelClass && (this.model = t = this.getModel(e.resource_id, e.resource_type)), this._deferreds = [], this.subviews = [], this._subviews_keys = [], this._dataSources = [], this.resetElementCache(), this._setupBubbleListeners(), this._setup(e), t && this.model !== t && t.release(), this.model ? this.addDataSource(this.model, {
                            observedAttributes: this.observedAttributes,
                            requiredAttributes: this.requiredAttributes
                        }) : this.collection && this.addDataSource(this.collection)
                    },
                    _setup: function(e) {
                        this.setup(e)
                    },
                    setup: n(3).noop,
                    _dispose: function() {
                        if (!this.disposed) {
                            for (this._teardown(), this.dispose(), this.disposed = !0; this._deferreds.length;) "number" == typeof this._deferreds[0] ? window.clearTimeout(this._deferreds.shift()) : this._deferreds[0].reject("viewDisposed");
                            for (this.off(), this.stopListening(); this._dataSources.length;) c.call(this, this._dataSources.shift());
                            this.destroyElement(), ["el", "$el", "model", "collection", "constructorArguments"].forEach(function(e) {
                                this[e] && (this[e] = null)
                            }, this)
                        }
                    },
                    destroyElement: function() {
                        this.$el.remove()
                    },
                    dispose: n(3).noop,
                    _teardown: function() {
                        this.disposeSubviews(), this._whenInsertedDefer && (this._whenInsertedDefer.reject(), this._whenInsertedDefer = null), this.teardown(), this.resetElementCache()
                    },
                    teardown: n(3).noop,
                    disposeSubviews: function() {
                        for (; this.subviews.length;) this.subviews.pop()._dispose();
                        this.subviews = [], this._subviews_keys = []
                    },
                    getModel: function(e, t, n) {
                        var i, r, o, a, s, l;
                        if (i = {}, i[this.ModelClass && this.ModelClass.prototype && this.ModelClass.prototype.idAttribute || "id"] = e, i.resource_type = t, s = i, a = this.ModelClass.getClass ? this.ModelClass.getClass(s) : this.ModelClass, r = a.hashFn(s, n), o = a.instances.get(r)) o.hold();
                        else {
                            var u;
                            u = {}, u[a.prototype.idAttribute || "id"] = e, l = u, t && (l.resource_type = t), o = new a(l)
                        }
                        return o
                    },
                    _setupBubbleListeners: function() {
                        var e, t;
                        for (t in this.bubbleEvents) this.bubbleEvents.hasOwnProperty(t) && (e = this.bubbleEvents[t], n(3).isFunction(e) || (e = this[e]), this.on(t, e, this))
                    },
                    addDeferred: function(e) {
                        var t = this;
                        return "number" == typeof e ? this._deferreds.push(e) : e.reject && "pending" === e.state() && (e.always(function() {
                            var n = t._deferreds.indexOf(e);
                            n > -1 && t._deferreds.splice(n, 1)
                        }), this._deferreds.push(e)), e
                    },
                    addTimeout: function(e, t) {
                        return this.addDeferred(window.setTimeout(e, t))
                    },
                    addDataSource: function(e, t) {
                        var i = e instanceof n(64),
                            r = void 0;
                        i ? (t = n(3).assign({
                            isModel: !0
                        }, g(e, t || {})), r = a) : (t = n(3).assign({
                            isCollection: !0
                        }, t), r = u);
                        var o = {
                            source: e,
                            options: t
                        };
                        return this._dataSources.push(o), r.call(this, !0, o), e
                    },
                    removeDataSource: function(e) {
                        this._dataSources.some(function(t, n) {
                            return t.source === e ? (c.call(this, t), this._dataSources.splice(n, 1), !0) : void 0
                        }, this)
                    },
                    findDataSourceInfo: function(e) {
                        return n(3).find(this._dataSources, function(t) {
                            return t.source === e
                        })
                    },
                    addSubview: function(e, t) {
                        return e._parentView = this, this.subviews.push(e), this._subviews_keys.push(t), t && (this.subviews[t] = e), e
                    },
                    removeSubview: function(e) {
                        for (var t = this.subviews.length; t--;)
                            if (this.subviews[t] === e) return this._subviews_keys[t] && delete this.subviews[this._subviews_keys[t]], e._parentView = null, this.subviews.splice(t, 1), void this._subviews_keys.splice(t, 1)
                    },
                    getAncestorSubviews: function() {
                        var e = [];
                        return this.subviews.forEach(function(t) {
                            e.push(t), e = e.concat(t.getAncestorSubviews())
                        }), e
                    },
                    getElement: function(e) {
                        if (this.disposed) return t();
                        var n;
                        return this._element2selector_cache[e] === n && (this._element2selector_cache[e] = this.$(this.element2selector[e])), this._element2selector_cache[e]
                    },
                    resetElementCache: function() {
                        this._element2selector_cache = {}
                    },
                    render: function() {
                        var e = this.hasData(),
                            t = this.getTemplate(e),
                            i = void 0,
                            r = void 0;
                        return t && (i = this._getTemplateData(e), n(294).render(t.bind(this), i, this.el), n(294).subviews(this)), e ? (this.renderDecorate(), r = this._dataSources.filter(f), r.length && this.addTimeout(function() {
                            n(3).invoke(n(3).pluck(r, "source"), "fetch")
                        }, 0)) : (!t && this.LoadingView && this.addSubview(new this.LoadingView(n(3).result(this, "loadingViewArgs")), "loading").render().$el.appendTo(this.el), this.fetchData().fail(this.removeLoader.bind(this))), this
                    },
                    hasData: function() {
                        return !this._dataSources.some(this.missingRequiredData, this)
                    },
                    fetchData: function() {
                        var e, t, r = this,
                            o = arguments.length <= 0 || void 0 === arguments[0] ? i(this) : arguments[0],
                            a = this._fetchDeferred;
                        return a && "pending" === a.state() || (e = this._dataSources.filter(this.missingRequiredData, this), t = e.length, t ? (this._fetchDeferred = a = t > 1 ? n(55).settled(e.map(function(e) {
                            return r.fetchDataFromSource(e, o)
                        })) : this.fetchDataFromSource(e[0], o), a.always(function() {
                            r._fetchDeferred = null
                        })) : a = n(55).resolve()), a
                    },
                    missingRequiredData: function(e) {
                        var t = e.source,
                            n = e.options;
                        if (n.isModel) {
                            var i = p(e);
                            return i.length ? !t.hasDataForView(i) : !1
                        }
                        return !t.hasDataForView(n)
                    },
                    fetchDataFromSource: function(e) {
                        var t = arguments.length <= 1 || void 0 === arguments[1] ? _.MEDIUM : arguments[1],
                            n = e.source,
                            i = this.options.bulkFetch;
                        return e.options.isCollection && i ? n.bulkFetch(i) : n.fetch({
                            attrs: d(e),
                            reset: !0,
                            priority: t
                        })
                    },
                    renderDecorate: n(3).noop,
                    rerender: function() {
                        this.disposed || (this._teardown(), this.render())
                    },
                    getTemplate: function(e) {
                        return e || !this.LoadingView && !this.loadingTemplate ? this.template : this.LoadingView ? null : this.loadingTemplate
                    },
                    _getTemplateData: function(e) {
                        var t = {};
                        return this.model ? t = this.getModelData() || t : this.collection && (t = this.getCollectionData() || t), t._options = n(3).clone(this.options), e && (t = this.getTemplateData(t) || t), t
                    },
                    getTemplateData: n(3).noop,
                    getCollectionData: function() {
                        return this.collection.toJSON()
                    },
                    getModelData: function() {
                        return this.model.toJSON()
                    },
                    bubble: function(e, t) {
                        var i = new(n(1813))(t);
                        return r.call(this, e, i), i
                    },
                    getContextData: function() {
                        return this.bubble("contextrequest").data
                    },
                    removeLoader: function() {
                        var e = this.subviews.loading;
                        e && (e._dispose(), this.removeSubview(e))
                    },
                    scrollIntoView: function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                            i = e.position,
                            r = void 0 === i ? "auto" : i,
                            o = e.force,
                            a = void 0 === o ? !1 : o,
                            s = e.topOffset,
                            l = void 0 === s ? 20 : s,
                            u = e.bottomOffset,
                            c = void 0 === u ? 20 : u,
                            d = e.internalSelector,
                            p = d ? this.$(d) : this.$el,
                            h = p.offset(),
                            f = n(55).defer(),
                            g = 0;
                        if (!h) return f.reject();
                        var m = t(".g-main-scroll-area").first();
                        m.length || (m = t("#content"), g = y);
                        var v = t(window.document).scrollTop(),
                            _ = t(window).height() - b,
                            w = v,
                            x = v + _,
                            k = p.height(),
                            S = Math.floor(h.top),
                            C = Math.floor(S + k),
                            T = S > w && x > C,
                            E = k > _;
                        if (!T || a) {
                            var A = "top" === r || E || "auto" === r && w > S ? S - l - g : C - _ + c;
                            n(261).visible() ? t("body,html").animate({
                                scrollTop: A
                            }, {
                                complete: f.resolve,
                                duration: 300
                            }) : (t("body,html").prop({
                                scrollTop: A
                            }), f.resolve())
                        } else f.resolve();
                        return f
                    },
                    isEquivalentTo: function(e, t) {
                        var i = t || {};
                        return this.constructor === e && n(3).isEqual(o(e, i), this.constructorArguments)
                    },
                    whenInserted: function(e) {
                        return this._whenInsertedDefer || (this._whenInsertedDefer = n(131).whenInserted(this.el, {
                            root: e,
                            timeout: 3e4
                        })), this._whenInsertedDefer
                    },
                    whenVisible: function() {
                        if (!this._whenVisibleDefer) {
                            var e = this._whenVisibleDefer = n(55).deferFrom(v(this.el));
                            this.addDeferred(e)
                        }
                        return this._whenVisibleDefer
                    },
                    _onModelChange: function(e, t, n, i) {
                        this._lastEventId !== i && (this._lastEventId = i, this.onModelChange(e, t, n))
                    },
                    onModelChange: function() {
                        this.shouldViewRerender() && this.rerender()
                    },
                    onCollectionChange: function(e, t) {
                        2 === arguments.length && (t = e), this.disposed || this.trigger("update:collection", t.length)
                    },
                    shouldViewRerender: function() {
                        return !0
                    },
                    onCollectionReset: function() {
                        this.shouldViewRerender() && this.rerender()
                    },
                    onAdd: n(3).noop,
                    onRemove: n(3).noop
                })
        }).call(t, n(1))
    },
    55: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1],
                n = a.defer();
            return t.forEach(function(t) {
                t.then(function(t) {
                    !!t === e && n.resolve(e)
                })
            }), a.settled(t).then(function() {
                n.resolve(!e)
            }, function() {
                n.reject()
            }), n.promise()
        }
        var r = n(1).Deferred().resolve(),
            o = n(1).Deferred().reject(),
            a = e.exports = {
                defer: function() {
                    return n(1).Deferred()
                },
                promise: function(e) {
                    var t = a.defer(),
                        n = t.promise();
                    return e.call(n, t.resolve, t.reject), n
                },
                deferFrom: function(e) {
                    var t = a.defer();
                    return e.then(t.resolve, t.reject), t
                },
                settled: function(e) {
                    if (!e || !e.length) return r;
                    var t = function() {
                        var t = n(1).Deferred(),
                            i = e.length,
                            r = Array(i),
                            o = !1,
                            a = function() {
                                o = !0
                            };
                        return e.forEach(function(e, n) {
                            e.fail(a).always(function() {
                                for (var e = arguments.length, a = Array(e), s = 0; e > s; s++) a[s] = arguments[s];
                                r[n] = a, 0 === --i && (o ? t.reject.apply(t, r) : t.resolve.apply(t, r))
                            })
                        }), {
                            v: t
                        }
                    }();
                    return "object" == typeof t ? t.v : void 0
                },
                all: function(e) {
                    return n(1).when.apply(n(1), e)
                },
                resolve: function(e) {
                    return void 0 === e ? r : n(1).Deferred().resolve(e)
                },
                reject: function(e) {
                    return void 0 === e ? o : n(1).Deferred().reject(e)
                },
                value: function(e) {
                    return r.then(function() {
                        return e
                    })
                },
                promisify: function(e) {
                    return function() {
                        for (var t = arguments.length, i = Array(t), r = 0; t > r; r++) i[r] = arguments[r];
                        var o = n(1).Deferred();
                        return i.push(function(e, t) {
                            e ? o.reject(e) : o.resolve(t)
                        }), e.apply(void 0, i), o.promise()
                    }
                },
                call: function(e) {
                    var t = n(1).Deferred();
                    try {
                        for (var i = arguments.length, r = Array(i > 1 ? i - 1 : 0), o = 1; i > o; o++) r[o - 1] = arguments[o];
                        t.resolve(e.apply(void 0, r))
                    } catch (a) {
                        t.reject(a)
                    }
                    return t.promise()
                },
                mapEither: function(e, t) {
                    return t.then(e, e)
                },
                sequential: function(e) {
                    return e.reduce(function(e, t) {
                        return e.then(t, function() {
                            return t().then(a.reject)
                        })
                    }, r)
                },
                delay: function(e) {
                    var t = a.defer();
                    return window.setTimeout(function() {
                        t.resolve()
                    }, e), t
                },
                poll: function(e, t, n) {
                    var i = function(r) {
                        var o = e();
                        return o ? a.resolve() : r >= n ? a.reject() : a.delay(t).then(function() {
                            return i(r + 1)
                        })
                    };
                    return i(0)
                },
                anyTruthy: function(e) {
                    return i(!0, e)
                },
                allTruthy: function(e) {
                    return i(!1, e)
                }
            }
    },
    58: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = n(54).get("me"),
                i = e && e.args;
            return i && t.id && t.hasPermalink(i.userPermalink)
        }

        function r() {
            return n(54).get("me").id || null
        }

        function o(e, t) {
            return t = t || "subpage", e && e[t] ? e[t] : "main"
        }

        function a(e, t) {
            var i = n(65).getQueryParam("in", t),
                r = ["sounds"];
            return i ? r.push(["sets", "sets/track_page"]) : e.playlistPermalink ? r.push(["sets", "sets/" + o(e)]) : r.push(["sounds", "sounds/" + o(e)]), r
        }

        function s(e) {
            var t = n(54).get("me").attributes;
            return t.permalink === e.userPermalink ? ["you", ["you", "you/" + o(e)]] : ["users", ["users", "users/" + o(e)]]
        }

        function l(e) {
            var t = e.user;
            return e.type = "user", e.userPermalink = t.get("permalink"), e.userId = t.id, e
        }

        function u(e) {
            var t = e.audible;
            if (!t) return e;
            var n = "sound" === t.resource_type;
            return e.type = t.resource_type, e.userId = t.get("user_id"), n ? e.soundId = t.id : (e.playlistId = t.id, e.playlistPermalink = t.get("permalink")), e
        }

        function c(e) {
            return e && e.attribution ? n(3).extend({}, e, {
                attribution: n(3).pick(e.attribution, "queryUrn", "position")
            }) : e
        }

        function d(e, t, n) {
            return t || (n && "pause" === e ? "pause" : null)
        }

        function p(e, t) {
            return t && "promoted" === t.campaign && (e.ad_urn = t.ad_urn, e.monetization_type = "promoted", e.promoted_by = t.promoted_by_urn), e
        }

        function h(e, t) {
            var i, r, c, d, p, h, f, g, m;
            switch (e) {
                case "connect:logout":
                    t.isOriginator === !0 ? E.trackAuthEvent("sign_out") : t.isOriginator === !1 && E.trackV0Click(["header", "you_log_out"]);
                    break;
                case "connect:loginInitiate":
                    E.trackAuthEvent("initiate", {
                        target: t.target,
                        object: t.object
                    });
                    break;
                case "tracking:search":
                    E.trackPageView("search", ["search", "search/" + t.category], {
                        queryUrn: t.queryUrn
                    });
                    break;
                case "tracking:charts":
                    E.trackPageView("charts", ["charts"], {
                        queryUrn: t.queryUrn
                    });
                    break;
                case "tracking:discover":
                    E.trackPageView("discover", ["discover"], {
                        queryUrn: t.queryUrn
                    });
                    break;
                case "tracking:userLayout":
                    t = l(t), h = s(t), E.trackPageView(h[0], h[1]);
                    break;
                case "tracking:listenLayout":
                    t = u(t), f = a(t), E.trackPageView(f[0], f[1]);
                    break;
                case "tracking:front:genre":
                    t.click_category = "frontpage", t.click_name = "genre_grid", t.click_target = t.genreUrn, E.trackClick(null, t);
                    break;
                case "layout:change":
                    switch (n(1864).include(), i = t.args, t.layoutName) {
                        case "stream":
                        case "activity":
                            E.trackPageView("stream", ["stream", "stream/" + ("stream" === t.layoutName ? "main" : t.layoutName)]);
                            break;
                        case "collection":
                            E.trackPageView("collection", ["collection", i.subpage]);
                            break;
                        case "discover":
                        case "user":
                        case "user-network":
                            break;
                        case "listen":
                        case "listen-network":
                            break;
                        case "tags":
                            E.trackPageView("tags", ["tags", "tags/main"]);
                            break;
                        case "search":
                            break;
                        case "charts":
                            break;
                        case "premium":
                            !i || i.secondary && "gifts" !== i.secondary || (g = n(65).getQueryParam("ref"), E.trackPageView("premium", ["premium", n(65).stringify({
                                path: ["premium", "main", i.secondary, g]
                            })]));
                            break;
                        case "explore":
                            E.trackPageView("explore", ["explore", "explore/" + o(i, "category")]);
                            break;
                        case "upload":
                            E.trackPageView("upload", ["upload", "upload/main"]);
                            break;
                        case "people":
                            m = o(i, "tab"), E.trackPageView("people_" + m, ["people", "people/" + m]);
                            break;
                        case "home":
                        case "front":
                            E.trackPageView("homepage", ["home", "home/main"]);
                            break;
                        case "inbox":
                            E.trackPageView("messages", ["messages", o(i, "conversationId")]);
                            break;
                        case "stats":
                        case "track-stats":
                            E.trackPageView("stats", ["default", window.location]);
                            break;
                        case "track-manager":
                            E.trackPageView("track-manager", ["track-manager", "main"]);
                            break;
                        case "error":
                            E.trackPageView("error", ["error"]);
                            break;
                        case "logout":
                            E.trackPageView("logout");
                            break;
                        case "static-page":
                            E.trackPageView("static", ["static", o(i, "pageName")]);
                            break;
                        case "mobile":
                            E.trackPageView("static", ["static", "mobile/main"]);
                            break;
                        case "mobile-pulse":
                            E.trackPageView("static", ["static", "mobile-pulse"]);
                            break;
                        case "oscp":
                            E.trackPageView("premier", ["premier", i.subpage]);
                            break;
                        case "settings":
                            E.trackPageView("settings", ["settings", i.subpage]);
                            break;
                        default:
                            E.trackPageView("default", ["default", window.location])
                    }
                    break;
                case "exception":
                    c = t.get("streamInfo"), c && (d = t.get("errorCode"), p = {
                        protocol: c.protocol || "undefined-protocol",
                        browser: n(588).getBrowser(),
                        flash: n(588).getFlashPlugin(),
                        os: n(588).getOperatingSystem(),
                        bitrate: c.bitrate || "undefined-bitrate",
                        format: c.extension || "undefined-extension",
                        url: c.url || "undefined-url"
                    }, d && (p.error_code = d), E.trackAudioError(p));
                    break;
                case "premium:pageView":
                    r = arguments[1], E.trackPageView("premium", ["premium", r]);
                    break;
                case "tracking:appLoad":
                    E.trackAppLoad(t)
            }
        }

        function f(e) {
            return e && n(3).isFunction(e.get) && /repost$/.test(e.get("type")) ? n(88).generate("user", e.get("user").id) : null
        }

        function g(e, t) {
            t && t.click_category ? v(t) : m(e, t)
        }

        function m(e, t) {
            var o = n(54).get("router").getLayoutInfo(),
                a = r(),
                s = n(3).compact(e),
                l = o && o.layoutName || "user",
                u = o && o.tracking || {},
                d = u.pageName,
                p = u.pageUrn,
                h = i(o) ? "you" : l,
                f = C[h],
                g = n(3).defaults({
                    page_name: d,
                    page_urn: p
                }, c(t || {}));
            s.length < 1 && g.page_name && (s = g.page_name.split(":")), n(208).trackV0Click(f, s, a, g)
        }

        function v(e) {
            var t = n(54).get("router").getLayoutInfo(),
                i = t && t.tracking || {},
                r = i.pageName,
                o = i.pageUrn,
                a = n(3).defaults({
                    page_name: r,
                    page_urn: o
                }, c(e || {})),
                s = a.context && a.context.scope && a.context.scope.join(":");
            n(208).trackClick("1.27.6", n(3).extend({
                page_context: s
            }, n(3).omit(a, "context")))
        }

        function _(e) {
            var t = n(54).get("router").getLayoutInfo(),
                i = t && t.tracking || {},
                o = r(),
                a = e.urn,
                s = e.originView;
            e.page_name = i.pageName, e.page_urn = i.pageUrn, e.useAudioFinishHandler ? (w[s] || (w[s] = {}), w[s][a] || ! function() {
                var t = function(i) {
                    var r = parseInt(e.urn.split(":").pop(), 10),
                        o = i.sound.id;
                    r === o && (delete w[s][a], n(56).off("audio:finish", t))
                };
                w[s][a] = !0, n(56).on("audio:finish", t), n(208).trackImpression(o, e)
            }()) : (e.context && "promoted" === e.context.campaign && (e.ad_urn = e.context.ad_urn, e.monetization_type = "promoted", e.impression_object = e.context.urn, e.promoted_by = e.context.promoted_by_urn), n(208).trackImpression(o, e))
        }

        function y(e, t) {
            return function(i) {
                return t(n(3).defaults({}, e, i))
            }
        }

        function b(e) {
            var t = Array.isArray(e) ? e[0] : e;
            switch (t) {
                case "start":
                    t = "upload_start";
                    break;
                case "save":
                    t = "upload_saved";
                    break;
                case "complete":
                    t = "transcoding_done";
                    break;
                case "upload_done":
                    t = "upload_done"
            }
            Array.isArray(e) && "failed" === e[0] && ("transcoding" === e[1] ? t = "transcoding_failed" : "uploading" === e[1] && (t = "upload_failed")), n(194).trackEvent({
                category: n(194).CATEGORIES.UPLOAD,
                action: t
            })
        }
        var w = {},
            x = n(118),
            k = x.CREATOR_SUBSCRIPTION_PRO,
            S = x.CREATOR_SUBSCRIPTION_PRO_UNLIMITED,
            C = {
                listen: "sounds",
                "listen-network": "sounds",
                activity: "stream",
                stream: "stream",
                user: "users",
                "user-network": "users",
                tags: "tags",
                search: "search",
                you: "you",
                explore: "explore",
                home: "homepage",
                front: "homepage",
                premium: "premium",
                people: "people",
                upload: "upload",
                inbox: "messages",
                oscp: "premier",
                "track-manager": "track-manager",
                collection: "collection",
                "personal-recommended": "personal-recommended",
                history: "history",
                charts: "charts",
                station: "station"
            },
            T = void 0,
            E = e.exports = {
                initialize: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1];
                    n(208).initialize(), A(e, t, !0), T = e
                },
                dispose: function() {
                    n(208).dispose(), A(T, !0, !1), T = null
                },
                trackClick: g,
                trackV1Click: v,
                trackV0Click: m,
                trackV0ClickWithPromotedParams: function(e, t) {
                    m(e, p(t))
                },
                trackAuthEvent: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        i = t.target,
                        r = void 0 === i ? "" : i,
                        o = t.object,
                        a = void 0 === o ? "" : o;
                    v({
                        click_category: "authentication",
                        click_name: e,
                        click_target: r,
                        click_object: a
                    }), e === n(95).sign_up_success && n(194).trackEvent({
                        category: n(194).CATEGORIES.USER_FUNNEL,
                        action: n(194).ACTIONS.SIGN_UP
                    })
                },
                trackAuthFunnel: function(e) {
                    _({
                        impression_category: "auth_funnel",
                        impression_object: e
                    })
                },
                trackFrontPageClick: y({
                    click_category: "frontpage"
                }, v),
                trackShareClick: y({
                    click_name: "share"
                }, function(e) {
                    return m(null, e)
                }),
                trackUploadFunnel: function(e, t) {
                    m(["upload_funnel"].concat(e), t), b(e), "upload_done" === e && n(194).trackEvent({
                        category: n(194).CATEGORIES.USER_FUNNEL,
                        action: n(194).ACTIONS.UPLOAD_TRACK
                    })
                },
                trackClickThrough: function(e) {
                    var t = e.context;
                    m(null, p(n(3).defaults({
                        click_name: "item_navigation",
                        click_object: t.urn,
                        click_target: e.target || t.urn
                    }, e)))
                },
                trackAudioEvent: function(e) {
                    var t = e.type,
                        i = e.playerType,
                        r = e.position,
                        o = e.duration,
                        a = e.audioQualityMode,
                        s = e.quality,
                        l = void 0 === s ? "" : s,
                        u = e.preset,
                        c = void 0 === u ? "" : u,
                        h = e.appState,
                        g = e.sound,
                        m = e.ad,
                        v = e.userInitiated,
                        _ = e.pauseReason,
                        y = e.isRepeating,
                        b = e.currentMetadata;
                    if (!g.isExternal()) {
                        var w = ["duration", "monetization_model", "policy"],
                            x = ["user_id"],
                            k = g.playlist,
                            S = n(54).get("router").getLayoutInfo(),
                            C = S && S.tracking || {},
                            T = b.originalModel,
                            E = b.queryPosition,
                            A = b.contextSnapshot,
                            I = A && A.sourceInfo ? n(3).defaults({}, A.sourceInfo, b.sourceInfo) : b.sourceInfo,
                            M = f(T),
                            D = n(91).extractPromotedAttrs(T),
                            P = {
                                position: E,
                                queryUrn: I.queryUrn
                            },
                            N = g.attrExists(w),
                            O = g.attrExists(x);
                        n(208).trackAudioEvent(n(55).all([!N && g.fetch(), !O && g.fetch()].filter(Boolean)).then(function() {
                            var e = {
                                action: t,
                                attribution: P,
                                id: g.id,
                                in_playlist: k ? k.getUrn() : null,
                                monetization_model: g.get("monetization_model"),
                                page_name: C.pageName,
                                page_urn: C.pageUrn,
                                pause_reason: d(t, _, v),
                                playheadPosition: Math.round(r),
                                playlist_position: k ? k.getSoundIndex(g) : null,
                                policy: g.get("policy"),
                                reposted_by: M,
                                source: I.type || null,
                                sourceVersion: I.version || null,
                                track_length: Math.round(o),
                                player_type: i,
                                app_state: h,
                                quality: l,
                                audio_quality_mode: a,
                                preset: c,
                                trackOwnerId: g.get("user_id"),
                                trigger: v ? "manual" : y ? "repeat" : "auto"
                            };
                            return D ? (p(e, D), "play" === t && n(91).trackEvent("play", D)) : m && (e.ad_urn = m.get("audio").ad_urn, e.monetization_type = "audio_ad", e.monetized_object = m.getMonetizableTrack().getUrn(), e.policy = null), e
                        }))
                    }
                },
                trackPageView: function(e, t, i) {
                    var o = n(54).get("router").getLayoutInfo(),
                        a = n(54).get("router").getNavigationType(),
                        s = o && o.tracking || {},
                        l = n(3).compact(t || []),
                        u = r(),
                        c = {};
                    c.page_name = s.pageName, c.page_urn = s.pageUrn, c.locale = n(50).getLocale(), c.navigation_type = a, i && i.queryUrn ? c.query_urn = i.queryUrn : s.queryUrn && (c.query_urn = s.queryUrn), l.length < 1 && c.page_name && (l = c.page_name.split(":")), n(208).trackPageView(e, l, u, c)
                },
                trackAppLoad: function(e) {
                    var t = e.latency,
                        o = n(54).get("router").getLayoutInfo(),
                        a = o && o.layoutName || "user",
                        s = i(o) ? "you" : a,
                        l = C[s],
                        u = r();
                    n(208).trackAppLoad(l, u, t)
                },
                trackImpression: _,
                trackStatsClick: function(e) {
                    var t = "stats",
                        i = r(),
                        o = [e],
                        a = n(54).get("router").getLayoutInfo().layoutName,
                        s = {
                            stats: "main",
                            "track-stats": "track"
                        },
                        l = {
                            context: {
                                scope: ["stats", s[a]]
                            }
                        };
                    n(208).trackV0Click(t, o, i, l)
                },
                trackAudioError: function(e) {
                    n(208).trackAudioError(e)
                },
                trackSubscriptionEvent: function(e) {
                    var t = e.currency,
                        i = e.price,
                        r = e.productId,
                        o = e.term,
                        a = {
                            creatorSubType: r,
                            price: i,
                            currency: t,
                            subscriptionTerm: o
                        },
                        s = null;
                    r === k ? s = "creator-signup-successful-pro" : r === S && (s = "creator-signup-successful-pro-unlimited"), s && (n(1439).pushEvent(n(3).defaults({
                        event: s
                    }, a)), n(1440).pushEvent({
                        event: s,
                        subscriptionTerm: o
                    })), n(194).trackEvent({
                        category: n(194).CATEGORIES.USER_FUNNEL,
                        action: n(194).ACTIONS.PURCHASE_SUBSCRIPTION,
                        optLabel: r
                    })
                }
            },
            A = function() {
                var e = n(3).map({
                    ".header__logoLink": ["header", "logo"],
                    ".header__mainMenu-home": ["header", "home"],
                    ".header__mainMenu-stream": ["header", "stream"],
                    ".header__mainMenu-explore": ["header", "explore"],
                    '.moreMenu__link[href$="/community-guidelines"]': ["header", "community_guidelines"],
                    '.moreMenu__link[href$="/terms-of-use"]': ["header", "terms_of_use"],
                    '.moreMenu__link[href$="/creators"]': ["header", "creators"],
                    '.moreMenu__link[href$="/pages/privacy"]': ["header", "privacy_policy"],
                    '.moreMenu__link[href$="/pages/copyright"]': ["header", "copyright_information"],
                    '.moreMenu__link[href$="/imprint"]': ["header", "company_information"],
                    '.moreMenu__link[href$="/pages/contact"]': ["header", "about_us"],
                    '.moreMenu__link[href="http://blog.soundcloud.com"]': ["header", "blog"],
                    '.moreMenu__link[href="http://soundcloud.com/jobs"]': ["header", "jobs"],
                    '.moreMenu__link[href="http://developers.soundcloud.com"]': ["header", "developers"],
                    '.moreMenu__link[href="http://help.soundcloud.com"]': ["header", "help"],
                    ".moreMenu__keyboard": ["header", "keyboard_shortcuts"],
                    ".profileMenu__profile": ["header", "you", "profile"],
                    ".profileMenu__likes": ["header", "you", "likes"],
                    ".profileMenu__following": ["header", "you", "following"],
                    ".profileMenu__sets": ["header", "you", "sets"],
                    ".profileMenu__stats": ["header", "you", "stats"],
                    ".profileMenu__friends": ["header", "you", "who_to_follow"],
                    ".profileMenu__settings": ["header", "you", "settings"],
                    ".profileMenu__logout": ["header", "you", "logout"],
                    ".playbackTitle": ["play_controls", "title"],
                    ".playControls .playControl:not(.playing)": ["play_controls", "pause"],
                    ".playControls .playControl.playing": ["play_controls", "play"],
                    ".playControls .skipControl__previous": ["play_controls", "skip_back"],
                    ".playControls .skipControl__next": ["play_controls", "skip_forward"],
                    ".header__inner a.outgoing-messages": ["outgoing", "messages"],
                    ".profileMenu a.outgoing-settings": ["outgoing", "settings"],
                    ".profileMenu a.outgoing-stats": ["outgoing", "you_stats"],
                    ".statsModule a.outgoing-stats-module": ["outgoing", "all_stats"],
                    ".userInfo a.sc-button-message": ["outgoing", "new_message"],
                    ".whoToFollowModule a.refresh-wtf": ["outgoing", "who_to_follow_refresh"],
                    ".soundActions__edit": ["edit", "main"],
                    ".latestActivities__viewAll": ["header", "activity", "view_all"],
                    ".headerMessages__viewAll": ["header", "messages", "view_all"],
                    ".listenContent__inner .listenContent__parentLink a": ["sets", "trackview", "set_button"],
                    ".listenContent__inner a.listenContent__prevLink": ["sets", "trackview", "previous_track"],
                    ".listenContent__inner a.listenContent__nextLink": ["sets", "trackview", "next_track"],
                    ".explore__bucket .carousel__next": ["explore", "skip_next"],
                    ".explore__bucket .carousel__prev": ["explore", "skip_prev"],
                    ".signupButton": ["signup", "start"],
                    ".loginButton": ["login", "start"],
                    ".signupTeaser .signupButton": ["signup-teaser", "signup"]
                }, function(e, t) {
                    return ["click", t, function(t) {
                        E.trackClick(e, t)
                    }]
                });
                return function(t, i, r) {
                    var o = r ? "on" : "off";
                    (!r || i) && n(56)[o]("all", h), t && e.forEach(function(e) {
                        t[o].apply(t, e)
                    })
                }
            }()
    },
    61: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                var e = n(54).get("me");
                return e.fetch({
                    attrs: ["locale"]
                }).then(function() {
                    var t = e.get("locale"),
                        i = n(50).getLocale();
                    return t !== i
                })
            }

            function r() {
                var e = n(54).get("privacy_settings"),
                    t = e.isOptedInToTargetedAdvertising(),
                    i = e.isOptedInToAnalytics(),
                    r = e.isOptedInToCommunications();
                return e.fetch().then(function() {
                    return t && !e.isOptedInToTargetedAdvertising() || i && !e.isOptedInToAnalytics() || r && !e.isOptedInToCommunications()
                })
            }

            function o(e, t) {
                var i = n(54).get("experiments").get(e, t);
                return n(23).callEndpoint("experiments", {
                    anonUserId: n(137).getAnonymousId()
                }, {
                    layers: n(2335).join(",")
                }).then(function(r) {
                    var o = r.body,
                        a = n(3).findWhere(o, {
                            experiment_name: t,
                            layer_name: e
                        });
                    return a ? a.variant_name !== i : Boolean(i)
                })
            }

            function a() {
                return k = k || n(139).get(v)
            }

            function s() {
                return t.ajax({
                    url: "https://soundcloud.com/logout",
                    type: "DELETE",
                    dataType: "text"
                }).promise()
            }

            function l() {
                return n(23).callEndpoint("connectLogout").always(function() {
                    window.document.cookie = "connect_session=;max-age=0;domain=.soundcloud.com;path=/"
                })
            }

            function u() {
                return ["auth_token", "p", "v"].some(function(e) {
                    return void 0 !== n(139).get(e)
                })
            }

            function c() {
                return "1" === n(139).get("connect_session")
            }

            function d(e) {
                n(139).set(n(3).assign({}, _, {
                    value: e,
                    expirationInDays: 365
                }))
            }

            function p() {
                var e = n(54).get("me"),
                    t = n(55).defer();
                return e.lastFetchTime ? t.resolve() : n(56).once("connect:hasUserData", function() {
                    t.resolve()
                }), t
            }

            function h() {
                return !!n(54).get("rollouts").get("v2_use_new_connect")
            }

            function f() {
                var e = n(55).defer(),
                    i = n(65).modify(w, {
                        query: {
                            client_id: n(54).get("client_id"),
                            scope: b
                        }
                    });
                return t.ajax(i, {
                    type: "POST",
                    dataType: "json",
                    contentType: "application/json"
                }).done(function(t) {
                    e.resolve(t.access_token)
                }).fail(e.reject), e
            }
            var g = void 0,
                m = void 0,
                v = "oauth_token",
                _ = {
                    name: v,
                    secure: !0,
                    domainStrict: !0
                },
                y = "authentication:tokenChange",
                b = "non-expiring fast-connect purchase upload",
                w = "https://soundcloud.com/connect/token",
                x = new(n(93))("anonymous-user"),
                k = null;
            n(56).on("broadcast:" + y, function(e) {
                e ? (k = e, n(56).trigger("connect:login", "login")) : n(56).trigger("connect:logout", {
                    isOriginator: !1
                })
            });
            var S = e.exports = n(3).assign({}, n(22).Events, {
                _redirectAfterSignupRoute: null,
                setAuthToken: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        i = t.excludeThis,
                        r = void 0 === i ? !0 : i;
                    n(56).broadcast({
                        excludeThis: r
                    }, y, e), d(e)
                },
                getAuthToken: a,
                isLoggedIn: function() {
                    return !!this.getAuthToken()
                },
                setSigninView: function(e) {
                    g = e
                },
                login: function(e) {
                    e = e || {};
                    var t = !e.implicitAction;
                    if (this._redirectAfterSignupRoute = e.redirectRoute, e.implicitAction ? n(56).trigger("connect:loginInitiate", {
                            target: "implicit:" + e.implicitAction,
                            object: e.implicitTarget
                        }) : n(56).trigger("connect:loginInitiate", {
                            target: "explicit:" + (e.signup ? "create_account" : "sign_in")
                        }), !m)
                        if (m = n(55).defer().fail(function() {
                                m = null
                            }), this.isLoggedIn()) t = !1, m.resolve();
                        else if (e.facebook && e.fb_token) n(240).signinWithFacebook(e.fb_token).then(function(e) {
                        var t = e.session && e.session.access_token;
                        t && (S.setAuthToken(t, {
                            excludeThis: !1
                        }), m.resolve())
                    });
                    else {
                        var a = {
                            onToken: function(e) {
                                S.setAuthToken(e, {
                                    excludeThis: !1
                                })
                            },
                            onSigninFinish: function(e) {
                                m && (t = !e, m.resolve()), e && S.hasSignedUp()
                            }
                        };
                        g.openSigninModal({
                            signinArgs: a,
                            onCancel: function() {
                                m.reject()
                            }
                        })
                    }
                    return m.then(function() {
                        var e = n(62),
                            a = e.getCurrentSound(),
                            s = a && a.isPlaying(),
                            l = t && !s;
                        return n(55).anyTruthy([r(), l ? i() : n(55).resolve(!1), l ? o("v2_listening", "web_new_home_default") : n(55).resolve(!1)]).then(function(e) {
                            var t = "/" === window.location.pathname,
                                n = "/logout" === window.location.pathname;
                            e && (t || n ? window.location.assign("/") : window.location.reload(!0))
                        })
                    })
                },
                hasSignedUp: function() {
                    var e = this._redirectAfterSignupRoute;
                    e && n(54).get("router").navigateToRoute(e, null, {
                        trigger: !0
                    }), p().then(function() {
                        return n(56).trigger("signup:successful")
                    }), this._redirectAfterSignupRoute = null
                },
                loginWithFacebook: function(e) {
                    return S.login({
                        facebook: !0,
                        fb_token: e
                    })
                },
                logout: function() {
                    var e = void 0;
                    return e = c() || h() ? l() : s(), e.always(function() {
                        S.clearUserData(), n(56).trigger("connect:logout", {
                            isOriginator: !0
                        })
                    })
                },
                clearUserData: function() {
                    n(139).unset(_), n(56).broadcast({
                        excludeThis: !0
                    }, y, "")
                },
                currentUserId: function() {
                    return n(54).get("me").id
                },
                getUserIdentifier: function() {
                    var e;
                    return e = S.isLoggedIn() ? S.currentUserId() : S.getAnonymousUserIdentifier()
                },
                getAnonymousUserIdentifier: function() {
                    for (var e = x.get("id"); !e || 1e3 > e;) e = Math.floor(1e9 * Math.random()), x.set("id", e);
                    return e
                },
                loginWithCookies: function() {
                    return c() || h() && u() ? n(23).callEndpoint("connectTokenExchange").promise().then(function(e) {
                        var t = e.body;
                        return t.session && t.session.access_token ? t.session.access_token : n(55).reject(new Error("no token returned"))
                    }).then(null, function() {
                        return f()
                    }).then(function(e) {
                        S.setAuthToken(e)
                    }) : u() ? f() : n(55).reject()
                },
                loginToSoundCloudConnect: function() {
                    h() && !c() && n(23).callEndpoint("connectLogin", null, null, null, {
                        session: {
                            access_token: S.getAuthToken()
                        }
                    }), S.loginToClassicSoundCloud()
                },
                loginToClassicSoundCloud: function() {
                    u() || t.ajax({
                        type: "post",
                        url: "https://soundcloud.com/session",
                        data: {
                            access_token: S.getAuthToken(),
                            format: "json"
                        }
                    })
                }
            })
        }).call(t, n(1))
    },
    62: function(e, t, n) {
        "use strict";
        e.exports = n(1853)()
    },
    64: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return !(e && e.last_modified && t && t.last_modified && Date.parse(e.last_modified) > Date.parse(t.last_modified))
        }
        var r = n(22).Model.extend(n(1840), {
            resource_type: null,
            lastFetchTime: null,
            _submodels: null,
            submodelMap: null,
            getEndpointUrl: n(23).getUrlForEndpoint,
            getEndpointForMethod: function(e) {
                return null
            },
            initialize: function(e, t) {
                var i = this;
                this._submodels = this._submodels || [], this.options = t || {}, n(3).each(this.submodelMap, function(e, t) {
                    i.on("change:" + t, function() {
                        i.get(t) && i.createSubmodel(e, t)
                    })
                }), this.setup.apply(this, arguments), n(3).each(this.submodelMap, function(e, t) {
                    i.get(t) && i.createSubmodel(e, t)
                })
            },
            setup: n(3).noop,
            getSubmodelOptions: function(e) {
                return null
            },
            createSubmodel: function(e, t) {
                var n = this,
                    i = this.getSubmodelOptions(t);
                [].concat(this.get(t)).forEach(function(t) {
                    var r = new e(t, i);
                    r.lastFetchTime = Date.now(), n.addSubmodel(r)
                })
            },
            addSubmodel: function() {
                for (var e = this, t = arguments.length, i = Array(t), r = 0; t > r; r++) i[r] = arguments[r];
                i.forEach(function(t) {
                    n(3).contains(e._submodels, t) ? t.release() : e._submodels.push(t)
                })
            },
            getAttributesToBeSaved: function() {
                return this.toJSON()
            },
            save: function(e, t) {
                var i, r = this,
                    o = "json" === n(3).result(this, "saveFormat"),
                    a = n(3).result(this, "saveWithWrapper"),
                    s = o ? "application/json" : void 0,
                    l = this.getAttributesToBeSaved(),
                    u = e ? n(3).pick(l, Object.keys(e)) : l,
                    c = a ? (i = {}, i[n(1391).toAPIResource(this.resource_type)] = u, i) : u,
                    d = o ? JSON.stringify(c) : n(65).param(c);
                return n(22).Model.prototype.save.call(this, e, n(3).assign({
                    url: this.saveUrl(e, t),
                    data: d,
                    contentType: s
                }, t)).done(function(e) {
                    r.set(e), r.updateResourceId()
                })
            },
            set: function(e, t, r) {
                var o, a;
                if (null == e) return this;
                if ("object" == typeof e) o = e, r = t;
                else {
                    var s;
                    s = {}, s[e] = t, o = s
                }
                return !i(this.attributes, o) && (o = n(3).pick(o, n(3).difference(n(3).keys(o), n(3).keys(this.attributes))), n(3).isEmpty(o)) ? this : (a = this.constructor.normalize ? this.constructor.normalize(n(3).clone(o)) : o, n(3).each(this.submodelMap, function(e, t) {
                    var i = o[t];
                    i && e && e.normalize && !n(3).isArray(i) && (a[t] = e.normalize(n(3).clone(i)))
                }), n(22).Model.prototype.set.call(this, a, r))
            },
            saveUrl: function() {
                return n(3).result(this, "baseUrl")
            },
            saveFormat: "param",
            saveWithWrapper: !0,
            destroy: function(e) {
                var t = n(22).Model.prototype.destroy.call(this, n(3).assign({
                    url: this.isNew() ? null : this.destroyUrl()
                }, e));
                return this.constructor.removeInstance(this), t
            },
            destroyUrl: function() {
                return n(3).result(this, "baseUrl")
            },
            baseUrl: n(3).noop,
            url: function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? "baseUrl" : arguments[0];
                return n(3).result(this, e)
            },
            toJSON: function() {
                return n(3).extend(n(22).Model.prototype.toJSON.apply(this, arguments), {
                    _resource_id: this.resource_id,
                    _resource_type: this.resource_type
                })
            },
            toString: function() {
                return this.resource_type ? this.resource_type + " (" + (this.isNew() ? "new" : this.resource_id) + "): " + (this.attributes.permalink || this.attributes.title || this.attributes.name) : Object.prototype.toString.call(this)
            },
            hasDataForView: function(e) {
                return this.attrExists(e)
            },
            updateResourceId: function() {
                var e = this.constructor.hashFn(this.attributes),
                    t = this.resource_id;
                e && (this.resource_id = e, this.constructor.instances.changeKey(t, e))
            },
            attrExists: function(e) {
                var t = Object.prototype.hasOwnProperty;
                return n(3).isArray(e) ? e.every(t, this.attributes) : t.call(this.attributes, e)
            },
            getEquivalencyKey: function() {
                return this
            },
            getRequestEquivalencyUrl: n(3).identity,
            getUrn: function() {
                if ("urn" === this.idAttribute) return this.id;
                var e = this.urnPrefix,
                    t = this.id;
                return e && t ? e + ":" + t : void 0
            },
            isPopulated: function() {
                return !!this.lastFetchTime
            },
            getOrFetch: function(e) {
                var t = this,
                    i = n(55).defer();
                return this.attrExists(e) ? i.resolve(this.pick.apply(this, e)) : this.fetch().then(function() {
                    if (!t.attrExists(e)) throw new Error("After fetching some of the requested attributes are still missing.");
                    return t.pick.apply(t, e)
                }).then(i.resolve, i.reject), i
            },
            forceChange: function(e) {
                var t = this.get(e);
                return this.unset(e, {
                    silent: !0
                }), this.set(e, t), this
            }
        }, {
            _resolve: function(e, t, i) {
                var r = e.instances.find(i);
                if (r) return n(55).resolve(r);
                var o = n(65).stringify({
                    scheme: "https",
                    host: n(54).get("public_api_host").replace(/^https?:\/\/api\./, ""),
                    path: t
                });
                return n(23).callEndpoint("resolve", {}, {
                    url: o
                }).then(function(t) {
                    var n = t.body,
                        i = new e(n);
                    return i.release(), i
                })
            }
        });
        e.exports = n(616).applyTo(r, {
            hashFn: function(e) {
                return e && (e[this.idAttribute || "id"] || e.resource_id) || null
            },
            onCleanup: function(e) {
                var t = e._submodels;
                t && t.length && (n(3).invoke(t, "release"), t.length = 0)
            },
            prepareArgs: function(e, t) {
                return t = t || {}, e = e || {}, t.parse && (e = this.parse(e), t = n(3).clone(t), t.parse = !1), [e, t]
            },
            prepareInstance: function(e, t) {
                return t = t || {}, t.collection && (this.lastFetchTime = Date.now()), n(3).isEmpty(e) || this.set(e), delete this.attributes.resource_id, this
            },
            getIncrementValue: function(e, t) {
                var n = t && t.collection;
                return n ? n.constructor.instances.countFor(n.resource_id) : 1
            }
        })
    },
    65: function(e, t, n) {
        "use strict";
        var i = n(106).pushState ? n(3).identity : function(e) {
                return e && e.replace(/#/, "")
            },
            r = e.exports = n(3).defaults({
                parse: function(e, t) {
                    return e = i(e), n(122).parse(i(e), t)
                },
                getQueryParam: function(e, t) {
                    return r.getQueryParams(t)[e]
                },
                getFragmentParam: function(e) {
                    return n(106).pushState ? r.parseQueryString(window.location.hash.substring(1))[e] : void 0
                },
                removeFragmentParam: function(e, t) {
                    return t = t || window.location.href, t.replace(new RegExp("#(?:(.+)&?)?" + n(254).regexpEscape(e) + "(?:=[^&]*(?:&|$))?"), "#$1").replace(/#$/, "")
                },
                getQueryParams: function() {
                    var e = void 0,
                        t = void 0;
                    return function(i) {
                        var o = i || (n(106).pushState ? window.location.search : window.location.hash.replace(/^[^?]*/, ""));
                        return o !== e && (e = o, t = r.parseQueryString(o)), t
                    }
                }(),
                getQueryString: function(e) {
                    return e ? e.replace(/^[^?#]*(\?[^#]*)?(?:#.*)?$/, "$1") : n(106).pushState ? window.location.search : window.location.hash.replace(/^[^?]*/, "")
                },
                getWindowOrigin: function() {
                    var e = window.location,
                        t = e.protocol,
                        n = e.hostname,
                        i = e.port;
                    return t + "//" + n + (i ? ":" + i : "")
                }
            }, n(122))
    },
    66: function(e, t, n) {
        "use strict";

        function i(e) {
            return null == e || 0 === e.length
        }
        e.exports = n(96).extend({
            nullable: !1,
            message: n(50).t("This field must not be empty"),
            shouldCheck: function() {
                return !0
            },
            check: function(e, t) {
                var n = this.shouldCheck.call(this._form) && i(e);
                t(!n)
            }
        })
    },
    70: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return n(3).defaults(t, e.prototype.defaults), e === a ? t : i(e.__super__.constructor, t)
        }

        function r(e) {
            this.next_href && (this.next_href = n(65).modify(this.next_href, {
                query: e
            }))
        }
        var o = {},
            a = e.exports = n(616).applyTo(n(22).Collection.extend({
                next_href: null,
                lastFetchTime: null,
                model: o,
                getEndpointUrl: n(23).getUrlForEndpoint,
                getEndpointForMethod: function(e) {
                    return null
                },
                defaults: {
                    offset: 0,
                    limit: 10,
                    secret_token: null,
                    maxPageSize: 100
                },
                initialize: function(e, t) {
                    this.options = i(this.constructor, t || {}), this.setup(this.options)
                },
                setup: n(3).noop,
                _prepareModel: function(e) {
                    var t = e instanceof n(22).Model,
                        i = n(22).Collection.prototype._prepareModel.apply(this, arguments);
                    return i && i.hold(this._usageCount() - (t ? 0 : 1)), i
                },
                _removeReference: function(e) {
                    return e.release(this._usageCount()), n(22).Collection.prototype._removeReference.apply(this, arguments)
                },
                fetch: function(e) {
                    var t = this,
                        i = e && e.url || n(3).result(this, "url"),
                        r = this.getRequestEquivalencyUrl(i) || i;
                    return i ? this._requests && this._requests[r] || n(22).Collection.prototype.fetch.call(this, e).done(function() {
                        !t.isFullyPopulated() || 0 !== t.length || e && e.reset || t.reset([])
                    }) : n(55).defer().done(e && e.success).resolve({})
                },
                fetchUntilResults: function() {
                    var e = this,
                        t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                        i = this.options.limit,
                        r = this.length,
                        o = n(3).defaults({
                            reset: !1
                        }, t),
                        a = function(t) {
                            return e.fetch(t).then(s)
                        },
                        s = function() {
                            var t = e.length,
                                n = t > r,
                                i = e.isFullyPopulated();
                            return n || i ? void 0 : (e.setLimit(Math.min(2 * e.options.limit, e.options.maxPageSize)), a(o))
                        };
                    return a(t).always(function() {
                        e.setLimit(i)
                    })
                },
                fetchUntilLength: function(e) {
                    var t = this,
                        i = function() {
                            return t.length < e && !t.isFullyPopulated()
                        };
                    if (!i()) return n(55).resolve();
                    var r = 20,
                        o = this.options.limit,
                        a = 0,
                        s = function(e) {
                            return t.fetch(e).then(l)
                        },
                        l = function() {
                            if (i()) {
                                var o = e - t.length;
                                return t.setLimit(n(119).clamp(o, r, t.options.maxPageSize)), s({
                                    reset: 0 === a++ && !t.isPopulated(),
                                    add: !0,
                                    remove: !1
                                })
                            }
                        };
                    return n(55).resolve().then(l).always(function() {
                        t.setLimit(o)
                    })
                },
                bulkFetch: function(e) {
                    var t = this,
                        i = arguments[1],
                        o = arguments[2],
                        a = void 0,
                        s = void 0;
                    if (!i) {
                        if (this._requests = this._requests || {}, this._requests.bulk) return this._requests.bulk;
                        this._requests.bulk = i = n(55).defer(), i.always(function() {
                            delete t._requests.bulk
                        }), o = this.length, a = this.options.limit, this.next_href || (this.options.limit = e - this.length), i.always(function() {
                            t.options.limit = a, r.call(t, {
                                limit: a
                            })
                        })
                    }
                    return this.length < e && this.url() ? (s = this.lastFetchTime ? {
                        add: !0,
                        reset: !1,
                        remove: !1,
                        silent: !0
                    } : {
                        reset: !0,
                        silent: !0
                    }, r.call(this, {
                        limit: e - this.length
                    }), this.fetch(s).done(function() {
                        t.bulkFetch(e, i, o)
                    }).fail(i.reject)) : (o ? this.rest(o).forEach(function(e) {
                        t.trigger("add", e, t, {})
                    }) : this.trigger("reset", this, {}), i.resolve()), i
                },
                removeWhere: function(e) {
                    var t = this.models.filter(e, this);
                    return t.length && this.remove(t), t
                },
                url: function() {
                    if (null !== this.next_href) return this.next_href;
                    var e = n(65).parse(n(3).result(this, "baseUrl"));
                    return n(3).assign(e.query, {
                        limit: this.options.limit,
                        offset: this.options.offset,
                        linked_partitioning: 1
                    }), this.options.secret_token && (e.query.secret_token = this.options.secret_token), n(65).stringify(e)
                },
                parse: function(e) {
                    return e.collection
                },
                empty: function() {
                    this.next_href = null, this.lastFetchTime = null, this.options.offset && (this.options.offset = 0), this.reset(null, {
                        silent: !0
                    })
                },
                setToFullyPopulated: function() {
                    this.lastFetchTime = Date.now(), this.next_href = !1
                },
                unsetFullyPopulated: function() {
                    this.next_href = null
                },
                hasDataForView: function(e) {
                    return this.lastFetchTime ? e && e.minModels ? this.isFullyPopulated() || this.length >= e.minModels : !0 : !1
                },
                isPopulated: function() {
                    return !!this.lastFetchTime
                },
                getRequestEquivalencyUrl: n(3).identity,
                isFullyPopulated: function() {
                    return this.next_href === !1
                },
                setLimit: function(e) {
                    this.options.limit = e, r.call(this, {
                        limit: e
                    })
                },
                indexOfEquivalentModel: function(e) {
                    var t = this,
                        n = arguments.length <= 1 || void 0 === arguments[1] ? this.models : arguments[1],
                        i = arguments.length <= 2 || void 0 === arguments[2] ? 0 : arguments[2],
                        r = -1;
                    return i && (n = n.slice(i)), n.some(function(n, o) {
                        return t.compareModels(e, n) ? (r = o + i, !0) : void 0
                    }), r
                },
                indexesOfEquivalentModels: function(e, t) {
                    for (var n = [], i = 0; - 1 !== (i = this.indexOfEquivalentModel(e, t, i));) n.push(i), i++;
                    return n
                },
                getKeyForModel: function(e) {
                    return e.getEquivalencyKey()
                },
                compareModels: function(e, t) {
                    return this.getKeyForModel(e) === this.getKeyForModel(t)
                }
            }), {
                hashFn: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        n = t.resource_id,
                        i = void 0 === n ? null : n;
                    return i
                },
                onHold: function(e, t, n) {
                    e.length && e.at(0).hold && e.invoke("hold", n)
                },
                onRelease: function(e, t, n) {
                    e.length && e.at(0).release && e.invoke("release", n)
                },
                prefetch: function(e) {
                    var t = new this(null, e);
                    t.isPopulated() || t.fetch(), t.release()
                }
            })
    },
    75: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = !1,
                o = e.state,
                a = e.list,
                s = e.target,
                l = e.origin,
                c = "user" !== e.originType || l === n(61).currentUserId(),
                d = n(55).defer();
            if (c && !n(61).isLoggedIn()) n(61).login({
                context: e.context,
                implicitAction: e.action,
                implicitTarget: n(88).generate(e.targetType, e.target)
            }).done(function() {
                e.origin = n(61).currentUserId(), i(e).done(d.resolve).fail(d.reject)
            }).fail(d.reject);
            else {
                if (a && c) {
                    var p = function() {
                        if (a.get(s) !== o) {
                            if (a.toggle(s, o), e.state = o = a.get(s), e.persist) {
                                var l = a.setRemote(s, o, e.listOptions);
                                l && l.fail(function(t, a) {
                                    "abort" !== a && r(n(3).assign({
                                        xhr: t
                                    }, e)), i(n(3).defaults({
                                        persist: !1,
                                        state: !o
                                    }, e))
                                })
                            }
                        } else t = !0
                    };
                    a.fetch().done(p).done(d.resolve).fail(d.reject)
                } else d.resolve();
                d.done(function() {
                    t || u(e)
                })
            }
            return d
        }

        function r(e) {
            var t = n(3).some(p._errHandlers, function(t) {
                return t(e) === !1
            });
            t || p.trigger("error", e)
        }

        function o(e) {
            return e = e || {}, {
                state: e.state,
                origin: e.origin,
                originType: e.originType,
                object: e.object,
                target: e.target,
                targetType: e.targetType,
                targetModel: e.targetModel,
                context: e.context,
                attribution: e.context && e.context.attribution
            }
        }

        function a(e) {
            return "user" === e.originType && e.origin === n(54).get("me").id
        }

        function s(e, t, i) {
            if (a(i)) {
                var r = i.state !== !1,
                    o = n(3).defaults(t || {}, {
                        object: n(88).generate(i.targetType, i.target),
                        target: null,
                        clickNameOn: "add",
                        clickNameOff: "remove"
                    });
                i.click_name = e + "::" + o[r ? "clickNameOn" : "clickNameOff"], i.click_object = o.object, i.click_target = o.target, c(null, i)
            }
        }

        function l(e) {
            var t = o(e),
                i = t.targetType;
            "comment" === i && (t.target = t.targetModel.get("track_id"), t.targetType = "track"), ("comment" === i || "playlist" === i) && s(i, null, n(3).assign({}, t, {
                state: !1
            }))
        }

        function u(e) {
            var t = e.action,
                n = e.origin,
                i = e.target,
                r = e.originType,
                a = e.targetType;
            p.trigger([t, t + ":origin:" + r + ":" + n, i ? t + ":target:" + a + ":" + i : ""].join(" "), o(e))
        }
        var c = n(58).trackV0ClickWithPromotedParams,
            d = {
                blockings: new(n(1451)),
                followers: new(n(1456)),
                followings: new(n(518)),
                likedStations: new(n(1457)),
                playlistLikes: new(n(1458)),
                playlistReposts: new(n(1459)),
                soundLikes: new(n(1463)),
                soundReposts: new(n(1464))
            },
            p = e.exports = n(3).assign({}, n(22).Events, {
                bindErrorHandler: function(e) {
                    return p._errHandlers.unshift(e), this
                },
                unbindErrorHandler: function(e) {
                    var t = p._errHandlers;
                    return t.splice(t.indexOf(e), 1), this
                },
                _errHandlers: [],
                notify: function(e, t) {
                    t = n(3).defaults({}, t, {
                        action: e,
                        origin: n(61).currentUserId(),
                        originType: "user",
                        object: null,
                        target: null,
                        targetType: null,
                        targetModel: null,
                        state: !0
                    });
                    var i = o(t);
                    switch (e) {
                        case "comment":
                            s(e, null, i);
                            break;
                        case "createPlaylist":
                            s("playlist", {
                                object: i.object.getUrn()
                            }, i);
                            break;
                        case "addToPlaylist":
                            s("track_to_playlist", {
                                object: i.object.getUrn(),
                                target: n(88).generate(i.targetType, i.target)
                            }, i)
                    }
                    u(t)
                },
                follow: function(e, t, r) {
                    var a = n(61).currentUserId();
                    r = n(3).defaults({}, r, {
                        action: "follow",
                        origin: a,
                        originType: "user",
                        target: e,
                        targetType: "user",
                        state: t,
                        persist: !0
                    });
                    var l = r,
                        u = l.origin,
                        c = l.target,
                        p = l.state;
                    if (u === c) return n(55).resolve();
                    if (c !== a) return r.list = u === a ? d.followings : null, s("follow", null, o(r)), i(r);
                    var h = function() {
                        var e = n(55).defer(),
                            t = d.followers;
                        return t.fetch().done(function() {
                            t.get(u) !== p && (t.toggle(u, p), r.state = t.get(u), i(r).done(function() {
                                s("follow", null, o(r)), e.resolve()
                            }).fail(e.reject))
                        }), {
                            v: e
                        }
                    }();
                    return "object" == typeof h ? h.v : void 0
                },
                destroy: function(e, t) {
                    return t = n(3).defaults({}, t, {
                        action: "destroy",
                        origin: n(61).currentUserId(),
                        originType: "user",
                        target: e.id,
                        targetType: e.resource_type,
                        targetModel: e,
                        state: !0
                    }), l(t), u(t), e.destroy()
                },
                like: function(e, t, r, a) {
                    return a = n(3).defaults({}, a, {
                        action: "like",
                        origin: n(61).currentUserId(),
                        originType: "user",
                        target: e,
                        targetType: t,
                        state: r,
                        persist: !0,
                        list: "playlist" === t ? d.playlistLikes : d.soundLikes
                    }), s("like", null, o(a)), i(a)
                },
                addToPlayHistory: function(e, t, i) {
                    if (n(61).isLoggedIn()) {
                        var r = {
                                context: t,
                                targetType: "sound",
                                target: e,
                                state: i
                            },
                            o = n(3).omit({
                                context_urn: t ? t.resourceUrn : null,
                                track_urn: "soundcloud:tracks:" + e
                            }, n(3).isNull);
                        p.notify("addToPlayHistory", r), n(23).callEndpoint("playHistoryAdd", null, null, null, o)
                    }
                },
                clearPlayHistory: function() {
                    n(61).isLoggedIn() && (p.notify("clearPlayHistory"), n(23).callEndpoint("playHistoryClear"))
                },
                likeStation: function(e, t, r) {
                    return r = n(3).defaults({}, r, {
                        action: "likeStation",
                        origin: n(61).currentUserId(),
                        originType: "user",
                        target: e,
                        targetType: "station",
                        object: e,
                        state: t,
                        persist: !0,
                        list: d.likedStations
                    }), s("like", null, o(r)), i(r)
                },
                repost: function(e, t, r, a) {
                    return a = n(3).defaults({}, a, {
                        action: "repost",
                        origin: n(61).currentUserId(),
                        originType: "user",
                        target: e,
                        targetType: t,
                        state: r,
                        persist: !0,
                        list: "playlist" === t ? d.playlistReposts : d.soundReposts
                    }), s("repost", null, o(a)), i(a)
                },
                block: function(e, t, r, o, a) {
                    r = !(!t || !r), a = n(3).defaults({}, a, {
                        action: "block",
                        origin: n(61).currentUserId(),
                        originType: "user",
                        target: e,
                        targetType: "user",
                        state: t,
                        persist: !0,
                        list: d.blockings,
                        listOptions: {
                            reported: r,
                            remove_activities: o
                        }
                    });
                    var s = i(a);
                    return t && n(61).isLoggedIn() && p.follow(n(61).currentUserId(), !1, {
                        origin: e
                    }), s
                }
            })
    },
    76: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var i = o(t);
            return "<" + n(3).compact([e, i]).join(" ") + ">"
        }

        function r(e) {
            return "</" + e + ">"
        }

        function o(e) {
            return n(3).map(e, function(e, t) {
                return t + '="' + e + '"'
            }).join(" ")
        }
        e.exports = {
            el: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    n = arguments.length <= 2 || void 0 === arguments[2] ? "" : arguments[2];
                return i(e, t) + (Array.isArray(n) ? n.join("") : n) + r(e)
            },
            voidEl: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                return i(e, t)
            },
            subview: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                return n(617).registerSubview(e, t)
            },
            toAttributesString: function(e) {
                var t = [],
                    i = void 0,
                    r = void 0;
                return n(3).each(e, function(e, o) {
                    i = o + '="', r = [], n(3).isObject(e) ? n(3).each(e, function(e, t) {
                        r.push(t + ":" + e)
                    }) : r.push(e), t.push(i + r.join(";") + '"')
                }), t.join(" ")
            }
        }
    },
    77: function(e, t, n) {
        "use strict";
        e.exports = {
            productIds: n(118),
            htPrice: {
                AUD: 1199,
                CAD: 999,
                EUR: 999,
                GBP: 999,
                NZD: 1499,
                USD: 999
            },
            proUnlimitedHtPrice: {
                AUD: 599,
                CAD: 499,
                EUR: 499,
                GBP: 499,
                NZD: 749,
                USD: 499
            },
            getIcon: function(e, t) {
                var i = e.getTitle(),
                    r = e.id;
                return r === this.productIds.CREATOR_SUBSCRIPTION_PRO || r === this.productIds.CREATOR_SUBSCRIPTION_PRO_UNLIMITED ? (t = n(3).assign({}, t, {
                    prefix: "sc-status-icon",
                    title: i || "",
                    type: "creator"
                }), n(1407).render(t)) : ""
            },
            getIconLink: function(e, t) {
                var i, r, o, a = this.getIcon(e, t);
                return a ? (r = n(59).getRoute("premium", null, null, t && t.referral), i = e.getTitle(), o = n(50).t("[[planName]] user", {
                    planName: i
                }), '<a class="premiumIconLink" href="' + r + '" title="' + o + '">' + a + "</a>") : a
            },
            getNextLevelProductId: function(e) {
                var t = e.getCreatorPlan();
                return t === this.productIds.CREATOR_SUBSCRIPTION_FREE || "lite" === t || void 0 === t ? this.productIds.CREATOR_SUBSCRIPTION_PRO : this.productIds.CREATOR_SUBSCRIPTION_PRO_UNLIMITED
            },
            planToProductId: function(e, t) {
                switch (e) {
                    case "pro":
                        return t ? n(118).CREATOR_GIFT_PRO : n(118).CREATOR_SUBSCRIPTION_PRO;
                    case "pro-unlimited":
                        return t ? n(118).CREATOR_GIFT_PRO_UNLIMITED : n(118).CREATOR_SUBSCRIPTION_PRO_UNLIMITED
                }
            },
            getQuotaInfo: function(e, t) {
                var i, r, o = e.getUploadSecondsLeft(),
                    a = e.getUploadSecondsUsed(),
                    s = e.getUploadMinutesLeft(),
                    l = e.getUploadMinutesUsed(),
                    u = e.hasProPlanLevel() ? n(50).t("Pro plan") : n(50).t("free"),
                    c = e.isOverQuota();
                return e.hasUnlimitedUpload() ? !1 : (i = Math.round((o + a) / 60), r = i / 60, t ? {
                    minutesLeft: s,
                    minutesUsed: l,
                    limitInMinutes: i,
                    limitInHours: r,
                    isOverQuota: c
                } : 0 > o ? n(50).tp("You’re over your [[planName]] [[limitInHours]]-hour limit by <strong>1</strong> minute.", "You’re over your [[planName]] [[limitInHours]]-hour limit by <strong>%d</strong> minutes.", -s, {
                    planName: u,
                    limitInHours: r
                }) : n(50).tp("You have 1 minute left.", "You have %d minutes left.", s))
            }
        }
    },
    78: function(e, t, n) {
        "use strict";
        e.exports = n(64).extend(n(1817), n(1814), n(1815), {
            isPopulated: function() {
                return !0
            },
            destroy: function(e) {
                return this.trigger("destroy", this, this.collection, e), n(55).resolve()
            }
        }, {
            hashFn: function(e, t) {
                return e && e.id || t && t.resource_id
            }
        })
    },
    80: function(e, t, n) {
        "use strict";

        function i() {
            v.forEach(function(e) {
                "pending" === e.state() && e.abort()
            }), v.length = 0
        }

        function r(e, t, n, i) {
            e.isErrorAd() ? (w.metrics(y.AD_ERROR, {
                ad: e,
                errorCode: f
            }), t.resolve()) : e.sound && "rejected" !== t.state() ? o.call(this, e, t, n, i) : t.resolve()
        }

        function o(e, t, n, i) {
            var r = e.sound;
            r.hold(), this.listenTo(r, "finish", this._onAdFinish).listenTo(r, "playerError", this._onAdError).listenTo(r, "pause", this._onAdPause).listenTo(r, "play", this._onAdPlay).listenTo(r, "playStart", this._onAdPlayStart).listenTo(r, "time", this._onAdTime).listenTo(r, "time", this._onAdTimeIsInRequiredListenPeriod).listenTo(r, "time", this._createOnAdProgressTrackers(e)).listenTo(r, "time", this._createOnAdQuartile(e)), this._currentAd = e, this._currentAdIsPlaying = !0, this._upcomingSound = n, this._upcomingSound.hold(), r.play(i)
        }

        function a(e) {
            var t = e.keepCompletedAdReference,
                n = void 0 === t ? !1 : t,
                i = this.getCurrentSound();
            this.stopListening(i), i.pause(), i.release(), this._upcomingSound.release(), this._upcomingSound = null, this._currentAdIsPlaying = !1, n || (delete k[this._currentAd.id], this._currentAd = null)
        }

        function s(e) {
            w.trigger(y.AD_LEAVE_BEHIND_START, e), this.listenToOnce(n(62), "change:currentSound", l)
        }

        function l() {
            this._currentAd && (delete k[this._currentAd.id], this._currentAd = null, w.trigger(y.AD_LEAVE_BEHIND_FINISH))
        }

        function u(e) {
            return b().soundcloudUrlRegex.test(e || "")
        }

        function c(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                i = t.ad || w.getCurrentOrCompletedAd();
            if (i) {
                var r = i.get("audio"),
                    o = i.get("companion_display"),
                    a = i.get("leave_behind"),
                    s = i.getMonetizableTrack(),
                    l = 0;
                if (i.sound && i.sound.player && (l = Math.floor(i.sound.player.getPosition())), k[i.id] || (k[i.id] = {}), k[i.id][e] && e !== y.AD_PLAY && e !== y.AD_PAUSE) return;
                var u = !!k[i.id][y.AUDIO_AD_PLAY_START],
                    c = !!k[i.id][y.AD_PAUSE];
                switch (e) {
                    case y.COMPANION_DISPLAY_IMPRESSION:
                        n(198).logEvent("adImpression", {
                            trackerUrlsByAdEvent: o.tracking,
                            contentPlayheadInMs: l
                        }), n(58).trackImpression({
                            ad_urn: o.ad_urn,
                            external_media: o.ad_visual,
                            impression_name: "companion_display",
                            impression_object: r.ad_urn,
                            context: t.context,
                            monetization_type: "audio_ad",
                            monetized_object: s.getUrn()
                        });
                        break;
                    case y.AUDIO_AD_IMPRESSION:
                        n(198).logEvent("adImpression", {
                            trackerUrlsByAdEvent: r.tracking,
                            contentPlayheadInMs: l
                        }), n(58).trackImpression({
                            ad_urn: r.ad_urn,
                            impression_name: "audio_ad_impression",
                            impression_object: r.ad_urn,
                            context: t.context,
                            monetization_type: "audio_ad",
                            monetized_object: s.getUrn()
                        });
                        break;
                    case y.LEAVE_BEHIND_IMPRESSION:
                        n(198).logEvent("adImpression", {
                            trackerUrlsByAdEvent: a.tracking,
                            contentPlayheadInMs: l
                        }), n(58).trackImpression({
                            ad_urn: a.ad_urn,
                            external_media: a.ad_visual,
                            impression_name: "leave_behind",
                            impression_object: r.ad_urn,
                            context: t.context,
                            monetization_type: "audio_ad",
                            monetized_object: s.getUrn()
                        });
                        break;
                    case y.LEAVE_BEHIND_CLICKTHROUGH:
                        n(198).logEvent("adClick", {
                            trackerUrlsByAdEvent: a.tracking,
                            contentPlayheadInMs: l
                        }), n(58).trackV0Click(null, {
                            ad_urn: a.ad_urn,
                            external_media: a.ad_visual,
                            click_name: "clickthrough::leave_behind",
                            click_object: r.ad_urn,
                            click_target: a.landing_page,
                            context: t.context,
                            monetization_type: "audio_ad",
                            monetized_object: s.getUrn()
                        });
                        break;
                    case y.COMPANION_DISPLAY_CLICKTHROUGH:
                        n(198).logEvent("adClick", {
                            trackerUrlsByAdEvent: o.tracking,
                            contentPlayheadInMs: l
                        }), n(58).trackV0Click(null, {
                            ad_urn: o.ad_urn,
                            external_media: o.ad_visual,
                            click_name: "clickthrough::companion_display",
                            click_object: r.ad_urn,
                            click_target: o.landing_page,
                            context: t.context,
                            monetization_type: "audio_ad",
                            monetized_object: s.getUrn()
                        });
                        break;
                    case y.AUDIO_AD_SKIP:
                        n(198).logEvent("skip", {
                            trackerUrlsByAdEvent: r.tracking,
                            contentPlayheadInMs: l
                        }), n(58).trackV0Click(null, {
                            ad_urn: r.ad_urn,
                            click_name: "ad::skip",
                            click_object: r.ad_urn,
                            external_media: o.ad_visual,
                            context: t.context,
                            monetization_type: "audio_ad",
                            monetized_object: s.getUrn()
                        });
                        break;
                    case y.AUDIO_AD_FINISH:
                        n(198).logEvent("finish", {
                            trackerUrlsByAdEvent: r.tracking,
                            contentPlayheadInMs: l
                        }), n(58).trackV0Click(null, {
                            ad_urn: r.ad_urn,
                            click_name: "ad::finish",
                            click_object: r.ad_urn,
                            external_media: o.ad_visual,
                            context: t.context,
                            monetization_type: "audio_ad",
                            monetized_object: s.getUrn()
                        });
                        break;
                    case y.AD_FIRST_QUARTILE:
                    case y.AD_SECOND_QUARTILE:
                    case y.AD_THIRD_QUARTILE:
                        var d = e.split(":"),
                            p = d[1];
                        n(198).logEvent(p, {
                            trackerUrlsByAdEvent: r.tracking,
                            contentPlayheadInMs: l
                        }), n(58).trackV1Click({
                            ad_urn: r.ad_urn,
                            click_name: e.replace(":", "::"),
                            click_category: "monetization",
                            click_object: r.ad_urn,
                            external_media: o.ad_visual,
                            context: t.context,
                            monetization_type: "audio_ad",
                            monetized_object: s.getUrn()
                        });
                        break;
                    case y.AD_PLAY:
                        u && c && n(198).logEvent("resume", {
                            trackerUrlsByAdEvent: r.tracking,
                            contentPlayheadInMs: l
                        });
                        break;
                    case y.AD_PAUSE:
                        u && n(198).logEvent("pause", {
                            trackerUrlsByAdEvent: r.tracking,
                            contentPlayheadInMs: l
                        });
                        break;
                    case y.AUDIO_AD_PLAY_START:
                        n(198).logEvent("play", {
                            trackerUrlsByAdEvent: r.tracking,
                            contentPlayheadInMs: l
                        });
                        break;
                    case y.AD_ERROR:
                        n(198).log(i.getErrorTrackers(), {
                            errorCode: t.errorCode || g,
                            contentPlayheadInMs: l
                        })
                }
                k[i.id][e] = !0
            } else;
        }
        var d = n(83).MS_IN_SECOND,
            p = void 0,
            h = 15 * d,
            f = 900,
            g = 400,
            m = 600,
            v = [],
            _ = {},
            y = {
                AD_PLAY: "ad:play",
                AD_PAUSE: "ad:pause",
                AD_SKIP: "ad:skip",
                AD_ERROR: "ad:error",
                AD_FINISH: "ad:finish",
                AD_PLAYSTART: "ad:playStart",
                AD_TIME: "ad:time",
                AD_FIRST_QUARTILE: "ad:first_quartile",
                AD_SECOND_QUARTILE: "ad:second_quartile",
                AD_THIRD_QUARTILE: "ad:third_quartile",
                AD_LEAVE_BEHIND_START: "ad:leave_behind_start",
                AD_LEAVE_BEHIND_FINISH: "ad:leave_behind_finish",
                AUDIO_AD_IMPRESSION: "audio_ad:impression",
                AUDIO_AD_PLAY_START: "audio_ad:playStart",
                AUDIO_AD_SKIP: "audio_ad:skip",
                AUDIO_AD_FINISH: "audio_ad:finish",
                COMPANION_DISPLAY_IMPRESSION: "companion_display:impression",
                COMPANION_DISPLAY_CLICKTHROUGH: "companion_display:clickthrough",
                LEAVE_BEHIND_IMPRESSION: "leave_behind:impression",
                LEAVE_BEHIND_CLICKTHROUGH: "leave_behind:clickthrough"
            },
            b = function() {
                return n(166)
            },
            w = e.exports = n(3).assign({}, n(22).Events, {
                Events: y,
                _adDeferred: null,
                _currentAd: null,
                _currentAdIsPlaying: !1,
                _upcomingSound: null,
                states: {
                    isInRequiredListenPeriod: {
                        initial: !1
                    },
                    isAllowedToSkipImmediately: {
                        initial: !1
                    }
                },
                setAudioAd: function(e) {
                    p = e
                },
                isUserAdConsumer: function() {
                    return !this._isUserInAdFreeArea() && this._isUserInAdGroup()
                },
                getCurrentSound: function() {
                    return this.getCurrentAd() && this._currentAd.sound
                },
                getUpcomingSound: function() {
                    return this._upcomingSound
                },
                getCurrentAd: function() {
                    return this._currentAdIsPlaying ? this._currentAd : null
                },
                getCurrentOrCompletedAd: function() {
                    return this._currentAd
                },
                skip: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                    if (w.isBlockedFromSkipping()) return w._adDeferred;
                    var t = w.getCurrentAd();
                    return i(), t && (a.call(this, {
                        keepCompletedAdReference: !1
                    }), w.trigger(y.AD_SKIP, t), w.metrics(y.AUDIO_AD_SKIP, n(3).extend(e, {
                        ad: t
                    }))), (w._adDeferred || n(55).defer()).resolve()
                },
                whenAdFinished: function(e, t) {
                    var o = this,
                        a = this._adDeferred,
                        s = new p({
                            id: e.id
                        }, {
                            defaultSkipOffset: h
                        }),
                        l = x();
                    return s.configureMonetizableTrack(e), a && "pending" === a.state() ? this.skip() : s.sound && _[s.sound.resource_id] ? n(55).resolve() : (a = this._adDeferred = n(55).defer(), !s.isPopulated() && l.enabled ? (w.toggleState("isInRequiredListenPeriod", !0), v.push(s.fetch().fail(function() {
                        l.failed(), a.reject(), i()
                    }).done(function() {
                        l.succeeded(), r.call(o, s, a, e, t), i()
                    }))) : r.call(this, s, a, e, t), a.always(function() {
                        w.toggleState("isInRequiredListenPeriod", !1)
                    }), a)
                },
                metrics: function(e, t) {
                    c(e, t)
                },
                companionClicked: function() {
                    var e = this.getCurrentAd(),
                        t = e && e.getCompanionLandingPage();
                    return u(t) ? (this.toggleState("isAllowedToSkipImmediately", !0), b().getAudibleModels([t]).then(function(e) {
                        var t = e[0];
                        t = void 0 === t ? {} : t;
                        var n = t.audible;
                        return n
                    })) : n(55).reject()
                },
                isBlockedFromSkipping: function() {
                    return !w.getState("isAllowedToSkipImmediately") && w.getState("isInRequiredListenPeriod")
                },
                onUserDismissedLeaveBehind: function() {
                    l.call(this)
                },
                _onAdFinish: function() {
                    var e = this.getCurrentAd(),
                        t = this._adDeferred;
                    a.call(this, {
                        keepCompletedAdReference: e.hasLeaveBehindAdVisual()
                    }), w.trigger(y.AD_FINISH, e), e.hasLeaveBehindAdVisual() && s.call(this, e), t.resolve()
                },
                _onAdError: function(e) {
                    var t = this.getCurrentAd(),
                        i = this._adDeferred;
                    a.call(this, {}), w.trigger(y.AD_ERROR, t), w.metrics(y.AD_ERROR, n(3).extend(e, {
                        ad: t
                    })), n(284).notify(new Error("AdManager: Error from player. " + e.error)), i.reject(e.error)
                },
                _onAdPause: function() {
                    var e = w.getCurrentAd();
                    w.trigger(y.AD_PAUSE, e), w.metrics(y.AD_PAUSE, {
                        ad: e
                    })
                },
                _onAdPlay: function() {
                    var e = w.getCurrentAd();
                    w.trigger(y.AD_PLAY, e), w.metrics(y.AD_PLAY, {
                        ad: e
                    })
                },
                _onAdPlayStart: function() {
                    var e = w.getCurrentAd();
                    w.trigger(y.AD_PLAYSTART, e), w.toggleState("isAllowedToSkipImmediately", !1), w.toggleState("isInRequiredListenPeriod", !e.isSkippableRightNow()), _[e.sound.resource_id] = !0
                },
                _onAdTime: function() {
                    var e = w.getCurrentAd();
                    w.trigger(y.AD_TIME, e)
                },
                _createOnAdProgressTrackers: function(e) {
                    var t = e.sound,
                        i = e.getProgressTrackers();
                    return function() {
                        var e = t.player ? t.player.getPosition() : 0;
                        if (!(0 === i.length || i[0].offset_in_ms > e)) {
                            var r = n(3).partition(i, function(t) {
                                    return t.offset_in_ms <= e
                                }),
                                o = r[0],
                                a = r[1];
                            o.forEach(function(t) {
                                return n(198).log(t.urls, {
                                    contentPlayheadInMs: e
                                })
                            }), i = a
                        }
                    }
                },
                _createOnAdQuartile: function(e) {
                    var t = .25,
                        i = .5,
                        r = .75,
                        o = 1,
                        a = y.AD_FIRST_QUARTILE;
                    return function(s) {
                        var l = e.sound,
                            u = l.progress();
                        if (!(u > o)) switch (a) {
                            case y.AD_THIRD_QUARTILE:
                                u > r && (w.metrics(a, n(3).extend(s, {
                                    ad: e
                                })), a = y.AD_FINISH);
                                break;
                            case y.AD_SECOND_QUARTILE:
                                u > i && (w.metrics(a, n(3).extend(s, {
                                    ad: e
                                })), a = y.AD_THIRD_QUARTILE);
                                break;
                            case y.AD_FIRST_QUARTILE:
                                u > t && (w.metrics(a, n(3).extend(s, {
                                    ad: e
                                })), a = y.AD_SECOND_QUARTILE);
                                break;
                            default:
                                return
                        }
                    }
                },
                _onAdTimeIsInRequiredListenPeriod: function() {
                    var e = w.getCurrentAd();
                    w.toggleState("isInRequiredListenPeriod", !e.isSkippableRightNow()), e.getRequiredListenPeriod() && e.isSkippableRightNow() && w.stopListening(e.sound, "time", w._onAdTimeIsInRequiredListenPeriod)
                },
                _isUserInAdGroup: function() {
                    return !n(54).get("me").getPerk("adFree")
                },
                _isUserInAdFreeArea: function() {
                    var e = n(54).get("router").getLayoutInfo() || {};
                    return "front" === e.layoutName
                },
                resetFiredState: function() {
                    k = {}
                }
            });
        n(504).applyTo(w);
        var x = n(3).memoize(function() {
                return new(n(148))({
                    tolerance: 2,
                    giveUp: 30
                })
            }),
            k = {};
        n(56).on("companion_display:loading_failure leave_behind:loading_failure", function() {
            w.metrics(y.AD_ERROR, {
                errorCode: m
            })
        })
    },
    83: function(e, t) {
        "use strict";
        var n = 1e3,
            i = 60 * n,
            r = 60 * i,
            o = 24 * r,
            a = 7 * o,
            s = 365 * o;
        e.exports = {
            MS_IN_SECOND: n,
            MS_IN_MINUTE: i,
            MS_IN_HOUR: r,
            MS_IN_DAY: o,
            MS_IN_WEEK: a,
            MS_IN_YEAR: s
        }
    },
    87: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                var t, i, r = -1;
                return x.imageUrlRegex.lastIndex = 0, t = e.replace(x.imageUrlRegex, function(e, t, o, a, s) {
                    return n(3).find(x.availableSizes, function(e, t) {
                        return e[1] === s ? (r = t, !0) : void 0
                    }), i = t, o
                }), i && r > -1 ? {
                    index: r,
                    key: t,
                    type: i
                } : null
            }

            function r(e) {
                y[e.type][e.key] |= 1 << e.index
            }

            function o(e) {
                return _(e).then(function(e) {
                    return l(e)
                })
            }

            function a(e) {
                return c(e).then(function(t) {
                    return s(e, t)
                }, function() {
                    return _(e)
                })
            }

            function s(e, t) {
                var n = _(e),
                    i = t[0],
                    r = t[1];
                return 0 !== i || r ? n.then(l).then(function(e) {
                    var n = g.createElement("canvas"),
                        i = n.getContext("2d"),
                        r = e.width,
                        o = e.height;
                    return n.width = r, n.height = o, u(i, t), i.drawImage(e, 0, 0), n.toDataURL("image/png")
                }) : n
            }

            function l(e) {
                var t = n(55).defer(),
                    i = new v;
                return i.onload = function() {
                    t.resolve(i)
                }, i.onerror = function() {
                    t.reject()
                }, i.src = e, t.promise()
            }

            function u(e, t) {
                var n = t[0],
                    i = t[1],
                    r = e.canvas,
                    o = r.width,
                    a = r.height;
                e.translate(o / 2, a / 2), i && e.scale(-1, 1), e.rotate(n * h), e.translate(-o / 2, -a / 2)
            }

            function c(e) {
                var t = new m,
                    i = n(55).defer();
                return t.onerror = t.onabort = function() {
                    i.reject(M)
                }, t.onload = function(e) {
                    var t = new DataView(e.target.result);
                    if (t.getUint16(0, !1) !== S) return void i.reject(I);
                    var n = t.byteLength,
                        r = 2;
                    try {
                        for (; n > r;) {
                            var o = t.getUint16(r, !1);
                            if (r += 2, o === C) {
                                var a = t.getUint16(r += 8, !1) === T;
                                r += t.getUint32(r + 4, a);
                                var s = t.getUint16(r, a);
                                r += 2;
                                for (var l = 0; s > l; l++)
                                    if (t.getUint16(r + 12 * l, a) === E) {
                                        var u = t.getUint16(r + 12 * l + 8, a);
                                        return void i.resolve(k[u])
                                    }
                            } else {
                                if (!d(o)) break;
                                r += t.getUint16(r, !1)
                            }
                        }
                    } catch (c) {
                        window.console.error("Error reading JPEG headers")
                    }
                    i.reject(A)
                }, t.readAsArrayBuffer(e.slice(0, 65536)), i.promise()
            }

            function d(e) {
                return 65280 === (65280 & e)
            }
            var p = n(119).quickHash,
                h = Math.PI / 180,
                f = window,
                g = f.document,
                m = f.FileReader,
                v = f.Image,
                _ = n(1405).readAsDataURL,
                y = {},
                b = ["user", "profile-settings"],
                w = ["user"],
                x = e.exports = n(3).defaults({
                    tagOptions: {
                        whitelist: ["style", "title", "class", "aria-label", "aria-role", "aria-hidden"],
                        closingTag: !0
                    },
                    load: function(e) {
                        var i = new v,
                            r = t(i),
                            o = n(55).defer(),
                            a = n(3).uniqueId("ImageHelperLoad");
                        return n(106).corsImg && (i.crossOrigin = window.location.host, e += "?xd=true"), r.on("load." + a, function() {
                            o.resolve(this)
                        }).on("error." + a, function() {
                            o.reject(this)
                        }), o.always(function() {
                            r.off("." + a)
                        }), i.src = e, o
                    },
                    getPlaceholderUrl: function(e, t) {
                        var r, o, a, s = -1,
                            l = i(x.setFormat(e, t));
                        if (l) {
                            if (r = l.key, y[l.type] || (y[l.type] = {}),
                                y[l.type][r])
                                for (o = n(3).find(x.availableSizes, function(e, n) {
                                        var i = e[0];
                                        return s = n, i >= t
                                    }); s >= 0;) {
                                    if (y[l.type][r] & 1 << s) {
                                        a = x.availableSizes[s];
                                        break
                                    }--s
                                }
                            if (o && a === o) return !1;
                            if (a) return x.setFormat(e, a[0])
                        }
                        return null
                    },
                    urlFrom: function(e, t, i) {
                        return t && n(107).isHiDPI && (t *= 2), n(764).urlFrom.call(this, e, t, i)
                    },
                    markup: function(e, t) {
                        e && e.attributes && (e = e.attributes);
                        var i = t.src,
                            r = t.size,
                            o = t.stretch,
                            a = t.placeholderId,
                            s = t.placeholderType,
                            l = void 0 === s ? "gradient" : s,
                            u = t.forceSquare,
                            c = void 0 === u ? !1 : u,
                            d = t.forceCircle,
                            p = void 0 === d ? !1 : d,
                            h = t.useResourceUrl,
                            f = void 0 === h ? !0 : h,
                            g = i || f && this.urlFrom(e, r);
                        g = this.isDefaultImage(g) ? null : "url(" + g + ")";
                        var m = this.getPlaceholderClass(e || a, {
                                placeholderType: l,
                                forceSquare: c,
                                forceCircle: p
                            }),
                            v = o ? "100%" : r + "px",
                            _ = n(3).assign({
                                style: {
                                    "background-image": g,
                                    width: v,
                                    height: v
                                },
                                "class": "sc-artwork " + m + " " + (t["class"] || ""),
                                "aria-label": this.getAltText(e),
                                "aria-role": "img"
                            }, n(3).omit(t, "stretch", "size", "class"));
                        return n(312).getMarkup("span", _, this.tagOptions)
                    },
                    flagCachedImage: function(e) {
                        var t = i(e);
                        t && r(t)
                    },
                    isRounded: function(e) {
                        var t = e._resource_type,
                            n = e.kind;
                        return t ? b.indexOf(t) > -1 : n ? w.indexOf(n) > -1 : b.indexOf(e) > -1
                    },
                    getPlaceholderClass: function(e) {
                        var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                            n = t.placeholderType,
                            i = void 0 === n ? "gradient" : n,
                            r = t.forceSquare,
                            o = void 0 === r ? !1 : r,
                            a = t.forceCircle,
                            s = void 0 === a ? !1 : a,
                            l = "number" == typeof e,
                            u = l ? e : e && e.id || 0,
                            c = "string" == typeof u ? p(u) : u,
                            d = (s || !l && !o) && (s || x.isRounded(e)) ? "image__rounded" : "",
                            h = function() {
                                switch (i) {
                                    case "gradient":
                                        var e = 12;
                                        return "sc-artwork-placeholder-" + c % e;
                                    case "blank":
                                        return "sc-artwork-placeholder-blank"
                                }
                            }();
                        return (h || "") + " " + d
                    },
                    getPlaceholderGradient: function(e) {
                        var t = x.getPlaceholderClass(e),
                            i = n(3).find(t.split(" "), function(e) {
                                return e.indexOf("sc-artwork-placeholder") > -1
                            });
                        return n(1526)[i]
                    },
                    getPlaceholderCanvas: function(e, t) {
                        var n = g.createElement("canvas"),
                            i = n.getContext("2d"),
                            r = x.getPlaceholderGradient(e),
                            o = r[0],
                            a = r[1];
                        if (n.width = n.height = t, i) {
                            var s = i.createLinearGradient(0, 0, t, t);
                            s.addColorStop(0, o), s.addColorStop(1, a), i.fillStyle = s, i.fillRect(0, 0, t, t)
                        }
                        return n
                    },
                    readImageFile: o,
                    readImageFileCorrected: a
                }, n(764)),
                k = {
                    1: [0, !1],
                    2: [0, !0],
                    3: [180, !1],
                    4: [180, !0],
                    5: [90, !0],
                    6: [90, !1],
                    7: [270, !0],
                    8: [270, !1]
                },
                S = 65496,
                C = 65505,
                T = 18761,
                E = 274,
                A = -1,
                I = -2,
                M = -3
        }).call(t, n(1))
    },
    88: function(e, t, n) {
        "use strict";

        function i(e, t) {
            e.indexOf(t) < 0 && e.push(t)
        }
        var r = {
                comments: "comment",
                playlists: "playlist",
                sounds: "track",
                tracks: "track",
                users: "user"
            },
            o = {
                comments: "comment",
                playlists: "playlist",
                sounds: "sound",
                tracks: "sound",
                users: "user",
                "artist-stations": "station",
                "track-stations": "station"
            },
            a = {
                comment: "comments",
                playlist: "playlists",
                sound: "tracks",
                track: "tracks",
                user: "users"
            },
            s = {
                sets: "playlists",
                sounds: "tracks",
                people: "users"
            },
            l = n(3).reduce(s, function(e, t, n) {
                return e[t] = e[t] || [], e[n] = e[n] || [], i(e[t], n), i(e[n], t), e
            }, {}),
            u = n(3).negate(RegExp.prototype.test.bind(/\D/)),
            c = e.exports = {
                toComponents: function(e) {
                    var t = e.split(":"),
                        n = t[0],
                        i = t[1],
                        r = t.slice(2),
                        o = r.join(":");
                    return u(o) && (o = parseInt(o, 10)), {
                        domain: n,
                        collection: i,
                        id: o
                    }
                },
                fromComponents: function(e) {
                    var t = e.domain,
                        n = void 0 === t ? "soundcloud" : t,
                        i = e.collection,
                        r = e.id;
                    return [n, i, r].join(":")
                },
                getAsAttributes: function(e) {
                    var t = c.toComponents(e),
                        n = (t.domain, t.collection),
                        i = t.id,
                        a = o[n],
                        s = r[n];
                    return "user" === a && "system" === i && (i = 193), {
                        id: i,
                        kind: s,
                        resource_type: a
                    }
                },
                generate: function(e, t) {
                    if ("station" === e) return t;
                    var n = a[e];
                    return n ? c.fromComponents({
                        collection: n,
                        id: t
                    }) : null
                },
                getAlternateUrns: function(e) {
                    var t = c.toComponents(e),
                        n = t.domain,
                        i = t.collection,
                        r = t.id,
                        o = l[i];
                    return o ? o.map(function(e) {
                        return c.fromComponents({
                            domain: n,
                            collection: e,
                            id: r
                        })
                    }) : null
                },
                getCanonicalUrn: function(e) {
                    var t = c.toComponents(e),
                        n = t.domain,
                        i = t.collection,
                        r = t.id,
                        o = s[i];
                    return o ? c.fromComponents({
                        domain: n,
                        collection: o,
                        id: r
                    }) : e
                }
            }
    },
    89: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return {
                title: e,
                value: t
            }
        }

        function r(e) {
            return {
                title: s(e),
                value: e
            }
        }

        function o(e, t) {
            return n(3).find(Object.keys(e), function(n) {
                return e[n] === t
            })
        }

        function a(e) {
            return n(3).reduce(e, function(e, t) {
                return n(3).assign(e, t)
            }, {})
        }

        function s(e) {
            return n(254).titleCase(e.replace("_", " "))
        }
        var l = a(n(554)),
            u = ["US", "IE", "GB", "FR", "PR", "AS", "GU", "MP", "VI", "GG", "JE", "IM", "GP", "MQ", "RE", "AU", "NZ", "CA", "DE", "NL"],
            c = {
                AI: "GB",
                AS: "US",
                AW: "NL",
                AX: "FI",
                BL: "FR",
                BM: "GB",
                BQ: "NL",
                BV: "NO",
                CC: "AU",
                CK: "NZ",
                CW: "NL",
                CX: "AU",
                FK: "GB",
                FO: "DK",
                GG: "GB",
                GI: "GB",
                GL: "DK",
                GP: "FR",
                GS: "GB",
                GU: "US",
                IM: "GB",
                IO: "GB",
                JE: "GB",
                KY: "GB",
                MF: "FR",
                MP: "US",
                MQ: "FR",
                MS: "GB",
                NC: "FR",
                NF: "AU",
                NU: "NZ",
                PF: "FR",
                PM: "FR",
                PN: "GB",
                PR: "US",
                RE: "FR",
                SH: "GB",
                SJ: "NO",
                SX: "NL",
                TC: "GB",
                TF: "FR",
                TK: "NZ",
                VG: "GB",
                VI: "US",
                WF: "FR"
            },
            d = ["US", "AS", "GU", "MP", "PR", "UM", "VI"],
            p = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "ES", "SE", "GB"];
        e.exports = {
            countryToCode: function(e) {
                return o(l, e) || ""
            },
            codeToCountry: function(e) {
                return l[e] || ""
            },
            country: function(e) {
                return new i(l[e], e)
            },
            countries: function(e) {
                var t;
                return t = e && e.length > 0 && "worldwide" !== e[0] ? a(n(3).chain(e).map(n(3).propertyOf(n(554))).compact().value()) : l, n(3).chain(t).map(i).sortBy("title").value()
            },
            countryCodes: function(e) {
                var t = e ? n(554)[e] : l;
                return t && Object.keys(t)
            },
            monetizableCountryCodes: function() {
                return u
            },
            regionCodes: function() {
                return Object.keys(n(554)).sort()
            },
            regions: function() {
                return this.regionCodes().map(r)
            },
            complement: function(e) {
                return n(3).difference(Object.keys(l), e)
            },
            euCountryCodes: function() {
                return p
            },
            isEUCountry: function(e) {
                return -1 !== p.indexOf(e)
            },
            isUSCountry: function(e) {
                return -1 !== d.indexOf(e)
            },
            parentCountryCode: function(e) {
                return c[e] || e
            }
        }
    },
    91: function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.sc_a_id
        }

        function r(e) {
            o.set("sc_a_id", e.sc_a_id)
        }
        var o = new(n(93))("promoted-persistent"),
            a = {
                addToSet: ["add_to_set_click"],
                follow: ["follow_click"],
                like: ["like_click"],
                play: ["sound_play", "SCAudioStart"],
                skip: ["sound_skip"],
                finish: ["sound_finish"],
                impression: ["impression"],
                adImpression: ["impression"],
                repost: ["repost_click"],
                share: ["share_click"],
                adClick: ["ad_click"],
                soundClickThrough: ["sound_click"],
                sponsorClickThrough: ["sponsor_click"],
                userClickThrough: ["profile_click"],
                purchaseClickThrough: ["purchase_click"],
                pause: ["SCAudioPause"],
                resume: ["SCAudioResume"],
                first_quartile: ["SCAudioFirstQuartile"],
                second_quartile: ["SCAudioSecondQuartile"],
                third_quartile: ["SCAudioThirdQuartile"]
            },
            s = {
                search: "promotedSearch",
                suggestedUsers: "promotedUsers",
                uploadTakeover: "promotedUploadTakeover",
                uploadText: "promotedUploadText"
            },
            l = {
                dashboxListen: "listen",
                dashboxNotifications: "notifications",
                dashboxStream: "stream",
                dashboxTags: "tags",
                dashboxUserProfile: "profile"
            },
            u = [],
            c = e.exports = {
                getAdUrl: function(e, t) {
                    var i = n(3).assign(c._getPromotedQueryParams(), t),
                        r = s[e];
                    return n(23).getUrlForEndpoint(r, {}, i)
                },
                lineId: "",
                creativeId: "",
                disableFrequencyCapping: !1,
                getAudioAdsUrl: function(e) {
                    var t = c._getPromotedQueryParams();
                    if (e && e.trackId && (t.track_id = e.trackId), n(54).get("privacy_settings").isOptedInToTargetedAdvertising()) {
                        var i = n(1827).userId();
                        void 0 !== i && (t.rubicon_user_id = i);
                        var r = n(1414).getCampaigns();
                        r && (t.bluekai_campaign_ids = r);
                        var o = n(1415).getUserData();
                        o && (t.dax_segment_ids = o.segments, t.dax_user_id = o.uid);
                        var a = n(1413).getAdswizzId();
                        a && (t.aw_listener_id = a)
                    }
                    var s = n(54).get("rollouts").get("force_ad_testing");
                    return s && (this.lineId = n(65).getQueryParam("lineid") || this.lineId, this.creativeId = n(65).getQueryParam("creativeid") || this.creativeId, this.disableFrequencyCapping = "true" === n(65).getQueryParam("disable_frequency_capping") || this.disableFrequencyCapping, this.lineId && (t.lineid = this.lineId), this.creativeId && (t.creativeid = this.creativeId), this.disableFrequencyCapping && (t.requires_frequency_cap_duration = !0)), n(23).getUrlForEndpoint("audioAd", {}, t)
                },
                getDashboxUrl: function(e, t) {
                    var i = c._getPromotedQueryParams();
                    i.locale = t;
                    var r = {
                        path: "/dashbox/" + l[e],
                        query: i
                    };
                    return n(65).stringify(r, n(54).get("api_v2_host"))
                },
                getAdUrlQuery: function() {
                    var e = c._getPromotedQueryParams();
                    return e.user_urn = n(54).get("me").getUrn(), e.promoted_playlist = !0, {
                        query: e
                    }
                },
                extractPromotedAttrs: function(e) {
                    return e && e.isPromoted && e.isPromoted() ? e.pick("ad_urn", "campaign", "promoted_by", "promoted_by_urn", "tracking") : void 0
                },
                parseResponse: function(e) {
                    var t = n(3).first(e.promoted);
                    return i(t) ? (r(t), t) : {}
                },
                parseDashboxResponse: function(e) {
                    return i(e) && r(e), e && e.data ? e.data.dashbox : e
                },
                parseStreamResponse: function(e) {
                    return e && e.collection && e.collection.filter(function(e) {
                        return e.promoted
                    }).forEach(function(e) {
                        i(e.promoted) && r(e.promoted), e.promoted && (e.promoted.ad_urn && (e.ad_urn = e.promoted.ad_urn), e.promoted.tracking && (e.tracking = e.promoted.tracking), e.campaign = "promoted", delete e.promoted), e.user && (e.promoted_by = e.user, e.promoted_by_urn = n(88).generate(e.promoted_by.kind, e.promoted_by.id), delete e.user)
                    }), e
                },
                trackEvent: function(e, t) {
                    var n = "impression" === e ? c._sendRequestOnce : c._sendRequest;
                    c._getTrackingUrls(e, t).forEach(n)
                },
                _getTrackingUrls: function(e, t) {
                    var i = a[e] || [],
                        r = t && t.tracking || {},
                        o = n(3).flatten(i.map(function(e) {
                            return r[e] || []
                        }));
                    return n(3).isArray(o) ? o : [o]
                },
                _getPromotedQueryParams: function() {
                    var e = n(3).reduce(n(54).get("experiments").getVariantIds(), function(e, t) {
                        return e.concat(t)
                    }, []);
                    return {
                        sc_a_id: o.get("sc_a_id"),
                        device_locale: n(50).getLocale() && n(50).getLocale().replace(/_/g, "-"),
                        variant_ids: e.join(",")
                    }
                },
                _sendRequest: function(e) {
                    var t = new window.Image;
                    t.src = e
                },
                _sendRequestOnce: function(e) {
                    -1 === u.indexOf(e) && (c._sendRequest(e), u.push(e))
                }
            }
    },
    92: function(e, t) {
        "use strict";
        e.exports = {
            ACCOUNT_FROZEN: "account_frozen",
            ACTION_DENIED: "action_denied",
            BAD_REQUEST: "bad_request",
            CEASE_AND_DESIST: "cease_and_desist",
            INVALID_SCOPE: "invalid scope",
            INVALID_CREDENTIALS: "invalid_credentials",
            INVALID_IDENTIFIER: "invalid_identifier",
            INVALID_EMAIL: "invalid_email",
            INVALID_PASSWORD: "invalid_password",
            INVALID_PROVIDER_TOKEN: "invalid_provider_token",
            INVALID_EMAIL_SIGNUP_TOKEN: "invalid_email_sign_up_token",
            INVALID_REQUEST: "invalid_request",
            EMAIL_ALREADY_IN_USE: "email_already_in_use",
            EMAIL_DOMAIN_BLACKLISTED: "email_domain_blacklisted",
            NOT_FOUND: "not_found",
            RECAPTCHA_FAILED: "captcha_failed",
            RECAPTCHA_REQUIRED: "captcha_required",
            USER_EXISTS: "user_exists",
            PASSWORD_RESET_REQUIRED: "password_reset_required",
            MINIMUM_AGE_REQUIRED: "minimum_age_required"
        }
    },
    93: function(e, t, n) {
        "use strict";
        var i = e.exports = n(266).extend();
        n(1843).applyTo(i.prototype), n(1842).applyTo(i.prototype)
    },
    94: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e, t) {
                var i = t + "d",
                    s = "resize" === e ? r(i) : a.trigger.bind(a, e + ":" + i);
                return n(3)[t](s, o)
            }

            function r(e) {
                var t = window.innerWidth,
                    n = window.innerHeight,
                    i = a.trigger.bind(a, "resize:x:" + e),
                    r = a.trigger.bind(a, "resize:y:" + e),
                    o = a.trigger.bind(a, "resize:" + e);
                return function(e) {
                    var a = window.innerWidth,
                        s = window.innerHeight;
                    a !== t && i(e), s !== n && r(e), o(e), n = s, t = a
                }
            }
            var o = 200,
                a = e.exports = n(3).assign({}, n(22).Events, {
                    TIMEOUT: o
                });
            t(window).on("resize", i("resize", "debounce")).on("resize", i("resize", "throttle")).on("scroll", i("scroll", "debounce")).on("scroll", i("scroll", "throttle"))
        }).call(t, n(1))
    },
    95: function(e, t) {
        "use strict";
        e.exports = {
            start: "auth::start",
            abort: "auth::abort",
            initiate: "initiate",
            need_help: "auth::need_help",
            forgot_email: "auth::forgot_email",
            forgot_password: "auth::forgot_password",
            reset_email_continue: "auth::reset_email_continue",
            sign_in_error: "sign_in::error",
            sign_up_error: "sign_up::error",
            sign_in_success: "sign_in_success",
            sign_up_success: "sign_up_success",
            sign_out: "sign_out"
        }
    },
    96: function(e, t, n) {
        "use strict";
        var i = e.exports = n(181).extend({
            nullable: !0,
            validate: function(e, t) {
                var i = n(55).defer();
                return null == t ? this.result(i, this.nullable) : this.check(t, this.result.bind(this, i)), i
            }
        });
        n(494).applyTo(i.prototype)
    },
    97: function(e, t) {
        "use strict";
        e.exports = {
            QUEUED: 1,
            UPLOADING: 2,
            FAILED: 4,
            TRANSCODING: 8,
            COMPLETE: 16
        }
    },
    98: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    i = e.code,
                    r = e.orderUrn,
                    o = e.hidePageTitle,
                    a = void 0 === o ? !1 : o,
                    s = e.hideProductDetails,
                    l = void 0 === s ? !1 : s,
                    u = n(3).assign({}, n(369), {
                        422: n(3).noop
                    }),
                    c = {},
                    d = !!r,
                    p = window.location,
                    h = p.protocol,
                    f = p.host;
                return i ? c.code = i : c.result_url = h + "//" + f + "/" + g, r ? c.order_urn = r : x && (c.package_urn = x.getUrn()), k && (c.origin_ref = k), c.hide_page_title = a, c.hide_product_details = l, t.ajax({
                    url: n(23).getUrlForEndpoint(d ? "paymentRetryCheckout" : "paymentStartCheckout"),
                    type: "POST",
                    statusCode: u,
                    data: JSON.stringify(c),
                    contentType: "application/json",
                    dataType: "json"
                })
            }

            function r(e) {
                var t = void 0,
                    i = e.urn,
                    r = e.state,
                    a = e.form_params,
                    l = {
                        context: S,
                        click_name: "clickthrough::" + [c(), x && x.getTrackingUseCase()].join("/"),
                        click_object: T.getReferenceParam()
                    };
                try {
                    t = JSON.parse(a)
                } catch (d) {
                    return o()
                }
                i && r === n(244).States.SUCCESSFUL ? (h(i), p(r), n(58).trackV0Click(null, l), T.successful(e)) : i && t ? (h(i), p(r), u(s(t)), n(58).trackV0Click(null, l), T.updateState("started")) : o()
            }

            function o(e) {
                var t = e ? e.responseText : "";
                if (t) try {
                    t = JSON.parse(t).error
                } catch (i) {
                    t = null
                }
                t && "object" == typeof t && (t = t.code), T.cancel(), n(56).trigger("premium:pageView", "error"), T.trigger("error", t)
            }

            function a(e) {
                return t.ajax({
                    url: n(23).getUrlForEndpoint("paymentCheckoutItem", {
                        orderUrn: e
                    }),
                    type: "GET",
                    contentType: "application/json",
                    dataType: "json"
                })
            }

            function s(e) {
                return {
                    action: e.action,
                    params: e.inputs.map(function(e) {
                        return n(3).pairs(e)[0]
                    })
                }
            }

            function l() {
                w && (w.close(), w = null)
            }

            function u(e) {
                b = e
            }

            function c() {
                return x && x.id
            }

            function d() {
                return y && y.urn
            }

            function p(e) {
                y = y || {}, y.state = e
            }

            function h(e) {
                y = y || {}, y.urn = e
            }

            function f() {
                x && x.release(), w = v = x = y = b = k = S = null
            }
            var g = "payment_callback.html",
                m = [1024, 768],
                v = null,
                _ = null,
                y = null,
                b = null,
                w = null,
                x = null,
                k = null,
                S = null,
                C = ["use_case", "preselected_term"],
                T = e.exports = n(3).assign({}, n(22).Events, {
                    start: function(e) {
                        var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                        return c() && b ? n(55).resolve(b) : (n(61).isLoggedIn() ? n(55).resolve() : n(61).login({
                            implicitAction: "purchase"
                        })).then(function() {
                            return T.updateState("starting"), x = new(n(84))({
                                id: e
                            }, {
                                ref: k
                            }), x.getOrFetch(C).promise()
                        }).then(function() {
                            return t.trackingContext && (S = t.trackingContext), i(t).then(function(e) {
                                return r(e)
                            }, function(e) {
                                return o(e)
                            })
                        }).then(function() {
                            return n(55).resolve(b)
                        })
                    },
                    handleCallback: function(e) {
                        var t = n(65).parse(e.location.href),
                            i = t.query.url;
                        i ? w || T.openExternal(i) : T.processOrder()
                    },
                    processOrder: function() {
                        T.updateState("processing"), T.pollForOrderStatus()
                    },
                    openExternal: function(e) {
                        if (/(^|\.)paypal\.com$/.test(n(65).parse(e).host)) {
                            var t = m[0],
                                i = m[1];
                            w = n(286).centered(e, t, i), T.listenTo(T, "processing finished", l),
                                function r() {
                                    w && !w.closed ? window.setTimeout(r, 1e3) : w && w.closed && "external" === v && (l(), T.cancel())
                                }(), T.updateState("external", e)
                        } else T.cancel()
                    },
                    successful: function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                            t = e.gift,
                            i = e.price,
                            r = e.currency,
                            o = e.term,
                            a = c(),
                            s = [x && x.getTrackingUseCase(), a, T.getReferenceParam()];
                        n(56).trigger("premium:pageView", "premium/success/" + s.filter(Boolean).join("/")), T.updateState("successful"), n(58).trackSubscriptionEvent({
                            currency: r,
                            price: i,
                            productId: a,
                            term: o
                        }), t && (_ = t.code), T.finish(), t || T.pollForPlanUpdate()
                    },
                    unsuccessful: function(e) {
                        var t = [x.getTrackingUseCase(), c(), e, T.getReferenceParam()];
                        n(56).trigger("premium:pageView", "premium/failed/" + t.filter(Boolean).join("/")), T.updateState("unsuccessful", e), T.finish()
                    },
                    cancel: function() {
                        /^(starting|started|external|processing)$/.test(v) && (T.updateState("canceled"), f())
                    },
                    finish: function() {
                        T.updateState("finished"), f()
                    },
                    retry: function() {
                        var e = d();
                        e && i({
                            orderUrn: e
                        }).done(function(e) {
                            return r(e)
                        }).fail(function(e) {
                            return o(e)
                        })
                    },
                    getProductId: c,
                    getOrder: function() {
                        return y
                    },
                    getReferenceParam: function() {
                        return k
                    },
                    setReferenceParam: function(e) {
                        k = e
                    },
                    claimGiftCode: function() {
                        var e = _;
                        return _ = null, e
                    },
                    updateState: function(e, t) {
                        v = e, T.trigger(e, c(), y, t)
                    },
                    pollForOrderStatus: function() {
                        var e = d();
                        if (e) {
                            var t = new(n(148))({
                                    tolerance: 1,
                                    giveUp: 30,
                                    backoffRate: 1.3
                                }),
                                i = function() {
                                    a(e).done(r).fail(function(e) {
                                        var n = e.status;
                                        404 === n ? T.unsuccessful() : t.failed()
                                    })
                                },
                                r = function(e) {
                                    var i = e.action,
                                        r = e.state,
                                        o = e.reason;
                                    switch (p(r), r) {
                                        case n(244).States.PENDING:
                                            t.failed();
                                            break;
                                        case n(244).States.SUCCESSFUL:
                                            T.successful(e);
                                            break;
                                        case n(244).States.FAILED:
                                            i === n(244).Actions.RETRY ? T.retry() : T.unsuccessful(o)
                                    }
                                };
                            T.listenTo(t, "enabled", i).listenTo(t, "giveup", function() {
                                return T.unsuccessful("timeout")
                            }), i()
                        }
                    },
                    pollForPlanUpdate: function() {
                        var e = n(54).get("me"),
                            t = e.getCreatorPlan(),
                            i = new(n(148))({
                                tolerance: 1,
                                giveUp: 15,
                                backoffRate: 1.5,
                                maxDelay: 15e3,
                                enabled: !1
                            }),
                            r = function() {
                                e.fetch().always(function() {
                                    return i.failed()
                                })
                            },
                            o = function(n) {
                                t !== n.getCreatorPlan() && (T.updateState("updatedPlan"), T.stopListening(i).stopListening(e))
                            };
                        T.listenTo(i, "enabled", r).listenTo(e, "change:consumer_subscription change:creator_subscription", o)
                    }
                })
        }).call(t, n(1))
    },
    103: function(e, t) {
        "use strict";
        e.exports = {
            INITIAL: "timed-comment-sm:initial",
            CURRENT_COMMENT: "timed-comment-sm:current-comment",
            CURRENT_TIMESTAMP: "timed-comment-sm:current-timestamp",
            ACTIVE_TIMESTAMP: "timed-comment-sm:active-timestamp"
        }
    },
    105: function(e, t, n) {
        (function(t) {
            "use strict";
            var i = n(288).restoreScrollPosition,
                r = "l-footer",
                o = e.exports = n(22).View.extend({
                    css: null,
                    template: null,
                    tracking: null,
                    views: null,
                    _currentViews: null,
                    slots: null,
                    includeFooter: null,
                    displayHeader: !0,
                    initialize: function() {
                        this.views = {}, this._currentViews = {}
                    },
                    setArgs: function(e) {
                        this.args = e || {}
                    },
                    setup: function() {
                        var e = n(55).defer();
                        return n(3).defer(e.resolve), e
                    },
                    dispose: function() {
                        n(3).invoke(this._currentViews, "_dispose"), n(3).invoke(this.views, "_dispose"), this.$el.remove(), delete this.slots, delete this.views, delete this._currentViews
                    },
                    switchLayout: function(e) {
                        e && (n(3).invoke(this._currentViews, "_dispose"), n(3).invoke(this.views, "_dispose"), this.template = e.template, this.includeFooter = e.includeFooter, this.slots = null, this.$el.empty())
                    },
                    getTemplateData: n(3).noop,
                    render: function() {
                        var e = void 0,
                            o = void 0;
                        this.includeFooter && (e = this.views[r]), "" === this.el.innerHTML && (n(294).render(this.template, this.getTemplateData(), this.el), this.slots = {}, n(3).each(this.views, function(e, t) {
                            this.slots[t] = this.$("." + t)[0]
                        }, this)), n(3).each(this.views, function(e, t) {
                            this._currentViews[t] !== e && (this._currentViews[t] && this._currentViews[t]._dispose(), e.render(), t !== r && this.slots[t].appendChild(e.el), this._currentViews[t] = e)
                        }, this), o = this.$(this.includeFooter), e && !e.disposed && o[0] && o.append(e.$el), t(window.document.body).toggleClass("m-hideHeader", !this.displayHeader);
                        var a = window.history && window.history.state && window.history.state.scrollTop;
                        return i(a), this.renderDecorate(), this
                    },
                    renderDecorate: n(3).noop,
                    setViews: function(e) {
                        this.includeFooter && (e[r] = [n(223)]);
                        var t = n(55).defer();
                        return n(3).each(e, function(e, t) {
                            var n = e[0],
                                i = e[1];
                            this._currentViews[t] && this._currentViews[t].isEquivalentTo(n, i) || (this.views[t] = new n(i))
                        }, this), n(3).delay(t.resolve.bind(t)), t
                    },
                    getChangeEventData: function(e) {
                        var t;
                        return t = n(3).mapObject(this.tracking, function(e, t) {
                            return n(3).isFunction(e) ? e.call(this) : e
                        }, this), {
                            layoutName: e,
                            tracking: t,
                            args: this.args
                        }
                    },
                    setTitle: function(e, t) {
                        n(371).set(e, t)
                    },
                    t: n(50).t,
                    tp: n(50).tp
                });
            n(1838).applyTo(o.prototype)
        }).call(t, n(1))
    },
    106: function(e, t, n) {
        "use strict";

        function i(e) {
            try {
                if (e.getItem) {
                    var t = Date.now();
                    return e.setItem(t, t), e.removeItem(t), !0
                }
            } catch (n) {}
            return !1
        }
        e.exports = n(3).reduce({
            sessionStorage: function() {
                try {
                    return "undefined" != typeof window.sessionStorage && i(window.sessionStorage)
                } catch (e) {
                    return !1
                }
            },
            localStorage: function() {
                try {
                    return "undefined" != typeof window.localStorage && i(window.localStorage)
                } catch (e) {
                    return !1
                }
            },
            dragDrop: function() {
                var e = window.document.createElement("div");
                return "draggable" in e || "ondragstart" in e && "ondrop" in e
            },
            webSocket: function() {
                return window.WebSocket
            },
            WebWorker: function() {
                return window.Worker
            },
            svg: function() {
                return window.document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")
            },
            touch: function() {
                try {
                    return window.hasOwnProperty("ontouchstart")
                } catch (e) {
                    return !1
                }
            },
            typedArrays: function() {
                return window.hasOwnProperty("Uint8Array")
            },
            pushState: function() {
                return window.history && window.history.pushState
            },
            formData: function() {
                return window.FormData
            },
            corsImg: function() {
                return !1
            },
            MutationObserver: function() {
                return window.MutationObserver
            },
            getUserMedia: function() {
                return window.navigator.getUserMedia
            },
            audioTabIndicator: function() {
                return n(107).chrome || n(107).gecko
            },
            blob: function() {
                try {
                    return new window.Blob
                } catch (e) {
                    return !1
                }
            },
            Notification: function() {
                return window.Notification
            },
            sendBeacon: function() {
                return window.navigator.sendBeacon
            },
            doNotTrack: function() {
                var e = window,
                    t = e.navigator,
                    i = e.doNotTrack,
                    r = ["1", 1, "yes"];
                return n(3).contains(r, t.doNotTrack || t.msDoNotTrack || i)
            },
            flagEmoji: function() {
                return n(3387)("🇦🇹")
            }
        }, function(e, t, n) {
            return e[n] = !!t(), e
        }, {})
    },
    107: function(e, t, n) {
        "use strict";
        e.exports = n(3).assign(n(767), {
            isHiDPI: window.devicePixelRatio ? window.devicePixelRatio > 1 : !1,
            isJsEnabledBot: /googlebot/i.test(window.navigator.userAgent),
            desktop: !n(767).mobile && !n(767).tablet
        })
    },
    108: function(e, t) {
        "use strict";
        e.exports = {
            ALT: 18,
            BACKSPACE: 8,
            COMMA: 188,
            CTRL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESC: 27,
            HASH: 220,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            META_FIREFOX_OSX: 224,
            META_LEFT: 91,
            META_RIGHT: 92,
            META_RIGHT_OSX: 93,
            PGDOWN: 34,
            PGUP: 33,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    },
    111: function(e, t, n) {
        "use strict";
        e.exports = n(96).extend({
            maxLength: 100,
            message: n(50).t("[[maxLength]] characters max"),
            check: function(e, t) {
                t(e.length <= this.maxLength)
            }
        })
    },
    118: function(e, t) {
        "use strict";
        e.exports = {
            CONSUMER_SUBSCRIPTION_MID_TIER: "consumer-mid-tier",
            CONSUMER_SUBSCRIPTION_HIGH_TIER: "consumer-high-tier",
            CONSUMER_SUBSCRIPTION_FREE: "free",
            CREATOR_SUBSCRIPTION_FREE: "free",
            CREATOR_SUBSCRIPTION_PRO: "creator-pro",
            CREATOR_SUBSCRIPTION_PRO_UNLIMITED: "creator-pro-unlimited",
            CREATOR_GIFT_FREE: "gift-free",
            CREATOR_GIFT_PRO: "gift-pro",
            CREATOR_GIFT_PRO_UNLIMITED: "gift-pro-unlimited"
        }
    },
    119: function(e, t) {
        "use strict";
        var n = 7,
            i = 31;
        e.exports = {
            precise: function(e, t) {
                return t = Math.pow(10, t || 0), Math.round(e * t) / t
            },
            clamp: function(e, t, n) {
                return Math.min(n, Math.max(t, e))
            },
            roundToNearest: function(e, t) {
                return Math.round(e / t) * t
            },
            quickHash: function(e) {
                return String(e).split("").reduce(function(e, t, n) {
                    return e + t.charCodeAt(0) * i * n
                }, n)
            },
            mod: function(e, t) {
                return (e % t + t) % t
            }
        }
    },
    121: function(e, t, n) {
        "use strict";
        var i = e.exports = new(n(93))("settings"),
            r = {
                volume: 1,
                muted: !1,
                newTrackNotifications: "always",
                showTimeRemaining: !1,
                streamingQuality: null
            };
        n(3).forEach(r, function(e, t) {
            i.has(t) || i.set(t, e, {
                dontPersist: !0
            })
        }), i.finalize()
    },
    122: function(e, t, n) {
        "use strict";

        function i(e) {
            try {
                return decodeURIComponent(e)
            } catch (t) {
                return e
            }
        }

        function r(e) {
            return e.split("/").map(o).join("/")
        }

        function o(e) {
            return encodeURI(e).replace(/#/g, "%23").replace(/\?/g, "%3F")
        }
        var a, s = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:\/@]*)(?::([^:\/@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
            l = ["---", "scheme", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "fragment"],
            u = e.exports = {
                parse: function(e, t) {
                    var n, i, r = s.exec(e),
                        o = {};
                    for (t || (t = l), n = 1; n < l.length; ++n)
                        if (i = l[n], -1 !== t.indexOf(i) && (r[n] || "query" === i)) switch (i) {
                            case "port":
                                o[i] = parseInt(r[n], 10);
                                break;
                            case "path":
                                o[i] = r[n].split("/").map(function(e) {
                                    try {
                                        return decodeURIComponent(e)
                                    } catch (t) {
                                        return e
                                    }
                                }).join("/");
                                break;
                            case "query":
                                o[i] = u.parseQueryString(r[n]);
                                break;
                            default:
                                o[i] = r[n]
                        }
                    return o
                },
                joinPath: function(e) {
                    return e.filter(Boolean).join("/")
                },
                parseQueryString: function(e) {
                    var t = {};
                    return e && e.replace(/([^?=&]+)(?:=([^&]*))?/g, function(e, n, r) {
                        switch (n = i(n), r = i((r || "").replace(/\+/g, " ")), typeof t[n]) {
                            case "object":
                                t[n].push(r);
                                break;
                            case "undefined":
                                t[n] = r;
                                break;
                            default:
                                t[n] = [t[n], r]
                        }
                    }), t
                },
                param: function(e, t) {
                    t = t || {};
                    var i = [],
                        r = function(e, t) {
                            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                        },
                        o = function(e, i) {
                            n(3).isArray(i) ? i.forEach(function(n, i) {
                                o(e + "[" + ("object" == typeof n && t.jquerySerialize ? i : "") + "]", n)
                            }) : n(3).isObject(i) ? n(3).each(i, function(t, n) {
                                o(e + "[" + n + "]", t)
                            }) : r(e, i)
                        };
                    return n(3).each(e, function(e, t) {
                        o(t, e)
                    }), i.join("&").replace(/%20/g, "+")
                },
                stringify: function(e, t) {
                    var i, o, s = [];
                    return t && (o = u.parse(t), e.query && o.query && (n(3).assign(o.query, e.query), delete e.query), e = n(3).assign({}, o, e)), e.scheme && s.push(e.scheme + "://"), e.user && (s.push(e.user), e.password && s.push(":" + e.password), s.push("@")), e.host && s.push(e.host), e.port && s.push(":" + e.port), e.path && ("string" == typeof e.path ? s.push(r(e.path)) : s.push(r(u.joinPath(e.path)))), i = a(e.query), i && s.push("?" + i), e.fragment && s.push("#" + e.fragment), s.join("")
                },
                modify: function(e, t) {
                    var i = u.parse(e);
                    return n(3).isFunction(t) ? i = t.call(null, i) : "object" == typeof t && (t.query && (n(3).assign(i.query, t.query), delete t.query), n(3).assign(i, t)), u.stringify(i)
                },
                normalize: function(e) {
                    var t = n(3).defaults(u.parse(e), {
                        scheme: "http"
                    });
                    return u.stringify(t)
                }
            };
        a = function(e) {
            var t, n, i, r, o, a = [];
            if (e)
                for (t in e)
                    if (e.hasOwnProperty(t) && (r = e[t], null !== r && r !== o))
                        if ("object" == typeof r)
                            for (i = r.length, n = 0; i > n; ++n) a.push(encodeURIComponent(t) + "=" + encodeURIComponent(r[n]).replace(/%2F/g, "/"));
                        else a.push(encodeURIComponent(t) + "=" + encodeURIComponent(r).replace(/%2F/g, "/"));
            return a.join("&")
        }
    },
    123: function(e, t, n) {
        "use strict";

        function i(e) {
            return e.toLowerCase().replace(/[^a-z]/g, "").replace(/^(drumnbass|dn?b)$/, "drumbass").replace(/^(rn?b|soul)$/, "rbsoul").replace(/^(rap|hiphop)$/, "hiphoprap").replace(/^folk$/, "folksingersongwriter").replace(/^(jazz|blues)$/, "jazzblues").replace(/^(dance|edm)$/, "danceedm")
        }

        function r(e) {
            return n(3).findWhere(n(172).genres, {
                id: e
            })
        }
        var o = e.exports = {
                genreLabel: function(e) {
                    return s[e]
                },
                genres: function(e) {
                    return n(3).where(n(172).genres, {
                        category: e
                    })
                },
                getGenre: r,
                genreUrn: function(e) {
                    return "soundcloud:genres:" + e
                },
                regionUrn: function(e) {
                    return "soundcloud:regions:" + e
                },
                chartKindLabel: function(e) {
                    return a[e]
                },
                chartKinds: function() {
                    return n(172).kinds
                },
                chartCountryLabel: function(e) {
                    return l[e]
                },
                chartCountries: function() {
                    return n(172).countries
                },
                getChartCountry: function(e, t, i) {
                    return e && (t || (t = i), o.chartCountryLabel(t)) ? t : n(172).defaultCountry
                },
                userGenreToChartGenre: function(e) {
                    return e && r(i(e)) || r("all-music")
                },
                isGenreLabel: function(e) {
                    return e && n(3).contains(u, e)
                },
                taglines: function(e, t) {
                    var i = o.genreLabel(t),
                        r = o.getGenre(t),
                        a = r.category,
                        s = r.content,
                        l = a + "-" + e + "-" + s;
                    switch (l) {
                        case "all-trending-music":
                            return {
                                "short": n(50).t("New &amp; hot tracks"),
                                "long": n(50).t("Up-and-coming tracks on SoundCloud")
                            };
                        case "all-trending-audio":
                            return {
                                "short": n(50).t("New &amp; hot audio"),
                                "long": n(50).t("Up-and-coming audio on SoundCloud")
                            };
                        case "all-top-music":
                            return {
                                "short": n(50).t("Top 50 tracks"),
                                "long": n(50).t("The most played tracks on SoundCloud this week")
                            };
                        case "all-top-audio":
                            return {
                                "short": n(50).t("Top 50 audio"),
                                "long": n(50).t("The most played audio on SoundCloud this week")
                            };
                        case "music-trending-music":
                            return {
                                "short": n(50).t("New &amp; hot in [[[genreLabel]]]", {
                                    genreLabel: i
                                }),
                                "long": n(50).t("Up-and-coming tracks in [[[genreLabel]]] on SoundCloud", {
                                    genreLabel: i
                                })
                            };
                        case "music-top-music":
                            return {
                                "short": n(50).t("Top 50 in [[[genreLabel]]]", {
                                    genreLabel: i
                                }),
                                "long": n(50).t("The most played tracks in [[[genreLabel]]] on SoundCloud this week", {
                                    genreLabel: i
                                })
                            };
                        case "audio-trending-audio":
                            return {
                                "short": n(50).t("New &amp; hot in [[[genreLabel]]]", {
                                    genreLabel: i
                                }),
                                "long": n(50).t("Up-and-coming in [[[genreLabel]]] on SoundCloud", {
                                    genreLabel: i
                                })
                            };
                        case "audio-top-audio":
                            return {
                                "short": n(50).t("Top 50 in [[[genreLabel]]]", {
                                    genreLabel: i
                                }),
                                "long": n(50).t("The most played in [[[genreLabel]]] on SoundCloud this week", {
                                    genreLabel: i
                                })
                            }
                    }
                }
            },
            a = {
                trending: n(50).t("New &amp; hot"),
                top: n(50).t("Top 50")
            },
            s = {
                "all-music": n(50).t("All music genres"),
                "all-audio": n(50).t("All audio genres"),
                alternativerock: n(50).t("Alternative Rock"),
                ambient: n(50).t("Ambient"),
                classical: n(50).t("Classical"),
                country: n(50).t("Country"),
                danceedm: n(50).t("Dance &amp; EDM"),
                dancehall: n(50).t("Dancehall"),
                deephouse: n(50).t("Deep House"),
                disco: n(50).t("Disco"),
                drumbass: n(50).t("Drum &amp; Bass"),
                dubstep: n(50).t("Dubstep"),
                electronic: n(50).t("Electronic"),
                folksingersongwriter: n(50).t("Folk &amp; Singer-Songwriter"),
                hiphoprap: n(50).t("Hip-hop &amp; Rap"),
                house: n(50).t("House"),
                indie: n(50).t("Indie"),
                jazzblues: n(50).t("Jazz &amp; Blues"),
                latin: n(50).t("Latin"),
                metal: n(50).t("Metal"),
                piano: n(50).t("Piano"),
                pop: n(50).t("Pop"),
                rbsoul: n(50).t("R&B &amp; Soul"),
                reggae: n(50).t("Reggae"),
                reggaeton: n(50).t("Reggaeton"),
                rock: n(50).t("Rock"),
                soundtrack: n(50).t("Soundtrack"),
                speech: n(50).t("Speech"),
                techno: n(50).t("Techno"),
                trance: n(50).t("Trance"),
                trap: n(50).t("Trap"),
                triphop: n(50).t("Triphop"),
                world: n(50).t("World"),
                audiobooks: n(50).t("Audiobooks"),
                business: n(50).t("Business"),
                comedy: n(50).t("Comedy"),
                entertainment: n(50).t("Entertainment"),
                learning: n(50).t("Learning"),
                newspolitics: n(50).t("News &amp; Politics"),
                religionspirituality: n(50).t("Religion &amp; Spirituality"),
                science: n(50).t("Science"),
                sports: n(50).t("Sports"),
                storytelling: n(50).t("Storytelling"),
                technology: n(50).t("Technology")
            },
            l = {
                "all-countries": n(50).t("All countries"),
                AU: n(50).t("Australia"),
                CA: n(50).t("Canada"),
                DE: n(50).t("Germany"),
                FR: n(50).t("France"),
                GB: n(50).t("United Kingdom"),
                IE: n(50).t("Ireland"),
                NL: n(50).t("Netherlands"),
                NZ: n(50).t("New Zealand"),
                US: n(50).t("USA")
            },
            u = n(3).values(s).map(function(e) {
                return e.toString()
            })
    },
    124: function(e, t, n) {
        "use strict";

        function i() {
            var e = d();
            return e ? "This track is not available in " + e : n(50).t("This track is not available in your country")
        }

        function r() {
            var e = d();
            return e ? "Not available in " + e : n(50).t("Not available in your country")
        }

        function o() {
            var e = n(54).get("geoip");
            return e && e.get("country_code")
        }

        function a(e) {
            var t = o();
            return e.some(function(e) {
                return e === t
            })
        }

        function s() {
            return "US" === o()
        }

        function l() {
            return "DE" === o()
        }

        function u() {
            return "GB" === o()
        }

        function c() {
            return /^en/.test(n(50).getLocale())
        }

        function d() {
            if (c()) {
                var e = n(54).get("geoip");
                return n(89).codeToCountry(e.get("country_code"))
            }
        }
        e.exports = {
            getLongBlockMessage: i,
            getShortBlockMessage: r,
            getCountryCode: o,
            isInCountries: a,
            isCountryUS: s,
            isCountryGermany: l,
            isCountryUK: u
        }
    },
    125: function(e, t, n) {
        "use strict";

        function i() {
            return "resolved" === T.state()
        }

        function r() {
            return C || (C = v(w, {
                onerror: function() {
                    T.reject(), T = n(55).defer(), C = null
                }
            })), T.promise()
        }

        function o() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                t = e.promptUser,
                i = void 0 === t ? !0 : t,
                r = n(55).defer();
            return d().then(function(e) {
                e ? a(r, window.FB.getAuthResponse()) : S && !S.closed ? S.focus() : i ? S = _(function() {
                    window.FB.login(function(e) {
                        return a(r, e.authResponse)
                    }, {
                        scope: x
                    })
                }) : r.reject()
            }), r.promise()
        }

        function a(e, t) {
            var n = t && t.accessToken;
            n ? e.resolve(n) : e.reject()
        }

        function s() {
            return d().then(function(e) {
                return e ? u("/me") : n(55).reject()
            })
        }

        function l() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                t = e.size,
                i = void 0 === t ? 200 : t;
            return s().then(function(e) {
                var t = {
                    width: i,
                    height: i,
                    redirect: !1
                };
                return u("/" + e.id + "/picture", t).then(function(t) {
                    return n(55).resolve({
                        name: e.name,
                        picture_url: t && t.data && t.data.url
                    })
                })
            })
        }

        function u(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                i = n(55).defer();
            return o().then(function(n) {
                window.FB.api(e, g({
                    access_token: n
                }, t), i.resolve)
            }, i.reject), i.promise()
        }

        function c() {
            var e = n(55).defer();
            return i() ? window.FB.getLoginStatus(function(t) {
                return e.resolve(t.status)
            }) : e.reject(), e.promise()
        }

        function d() {
            return c().then(function(e) {
                return n(55).resolve("connected" === e)
            }, function() {
                return n(55).resolve(!1)
            })
        }

        function p() {
            var e = n(55).defer(),
                t = function() {
                    return e.reject({
                        error: "age_not_provided"
                    })
                };
            return s().then(function(n) {
                u("/" + n.id + "?fields=birthday,gender").then(function(n) {
                    o().then(function(i) {
                        n && n.birthday ? e.resolve({
                            token: i,
                            birthday: new Date(n.birthday),
                            gender: n.gender
                        }) : t()
                    })
                })
            }, function() {
                return t()
            }), e
        }

        function h(e) {
            window.FB.XFBML.parse(e)
        }

        function f(e) {
            return function() {
                return e.apply(void 0, arguments)
            }
        }
        var g = n(3).extend,
            m = n(3).mapObject,
            v = n(131).insertScript,
            _ = n(286).interceptPopup,
            y = n(139).whenAllowed,
            b = "//connect.facebook.net/en_US/sdk.js",
            w = b,
            x = ["email", "user_birthday", "user_gender"].join(","),
            k = n(54).get("fb_app_id"),
            S = null,
            C = null,
            T = n(55).defer();
        e.exports = g({
            loadFacebookSDK: function() {
                return y().then(r)
            },
            isFacebookSDKReady: i
        }, m({
            parseXFBML: h,
            getFacebookToken: o,
            getCurrentFacebookUser: l,
            receiveBirthdayAndFacebookToken: p
        }, f)), window.fbAsyncInit = function() {
            window.FB.init({
                appId: k,
                status: !1,
                cookie: !0,
                xfbml: !0,
                version: "v2.12"
            }), delete window.fbAsyncInit, T.resolve()
        }
    },
    131: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                i = t.timeout,
                o = void 0 === i ? 1 / 0 : i,
                a = t.root,
                s = void 0 === a ? h.body : a;
            return s.contains(e) ? n(55).resolve() : n(55).promise(function(t, n) {
                m.push({
                    root: s,
                    element: e,
                    resolve: t,
                    reject: n,
                    created_at: Date.now(),
                    timeout: o
                }), g || (g = window.setInterval(function() {
                    m = r(m), m.length || (window.clearInterval(g), g = null)
                }, v))
            })
        }

        function r(e) {
            return e.filter(function(e) {
                var t = o(e);
                return t && t(), !t
            })
        }

        function o(e) {
            var t = e.root,
                n = e.element,
                i = e.resolve,
                r = e.reject;
            return a(e) ? r : t.contains(n) ? i : null
        }

        function a(e) {
            var t = e.created_at,
                n = e.timeout;
            return Date.now() - t > n
        }

        function s(e, t) {
            m = n(3).reject(m, {
                element: e,
                root: t
            })
        }

        function l(e, t) {
            var n = h.createElement("script"),
                i = "isAsync" in t ? t.isAsync : !0;
            return n.async = i, n.src = e, d(n, t.attributes), n
        }

        function u() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? window.document : arguments[0];
            return e.getElementsByTagName("head")[0]
        }

        function c() {
            return n(55).promise(function(e, t) {
                var n = h.createElement("iframe");
                d(n, {
                    sandbox: "allow-scripts allow-same-origin",
                    width: 0,
                    height: 0,
                    frameborder: 0
                }), n.onload = function(t) {
                    return e(t.target)
                }, n.onerror = t, h.getElementsByTagName("body")[0].appendChild(n)
            })
        }

        function d(e, t) {
            n(3).each(t, function(t, n) {
                return e.setAttribute(n, t)
            })
        }

        function p(e, t) {
            var i = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                r = arguments.length <= 3 || void 0 === arguments[3] ? {
                    onScriptLoad: n(3).noop
                } : arguments[3],
                o = u(e.contentWindow.document),
                a = l(t, {
                    isAsync: !1,
                    attributes: i
                });
            return f.onScriptLoad(a, function() {
                return r.onScriptLoad(a, e.contentWindow)
            }, r.onError), o.appendChild(a), e
        }
        var h = window.document,
            f = e.exports = {
                insertScript: function(e, t) {
                    t = t || {};
                    var n = l(e, t),
                        i = u(),
                        r = t.onerror,
                        o = t.removeAfterLoad ? i.removeChild.bind(i, n) : t.onload;
                    return (o || r) && f.onScriptLoad(n, o, r), i.appendChild(n), n
                },
                insertSandboxedScript: function(e, t) {
                    var n = arguments.length <= 2 || void 0 === arguments[2] ? {
                        onScriptLoad: function() {}
                    } : arguments[2];
                    return c().then(function(i) {
                        return p(i, e, t, n)
                    })
                },
                insertMultipleScriptsInSandbox: function(e, t) {
                    var n = arguments.length <= 2 || void 0 === arguments[2] ? {
                        onScriptLoad: function() {}
                    } : arguments[2];
                    c().then(function(i) {
                        var r = u(i.contentWindow.document);
                        return e.forEach(function(o, a) {
                            var s = l(o, {
                                isAsync: !1,
                                attributes: t
                            });
                            r.appendChild(s), a === e.length - 1 && (s.onload = function() {
                                return n.onScriptLoad(s, i.contentWindow)
                            })
                        }), i
                    })
                },
                onScriptLoad: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? n(3).noop : arguments[1],
                        i = arguments.length <= 2 || void 0 === arguments[2] ? n(3).noop : arguments[2];
                    t && (e.addEventListener ? e.addEventListener("load", t, !1) : e.readyState && (e.onreadystatechange = t)), i && (e.onerror = i)
                },
                whenInserted: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        r = t.root,
                        o = void 0 === r ? h.body : r,
                        a = t.timeout,
                        l = void 0 === a ? 1 / 0 : a;
                    return n(55).deferFrom(i(e, {
                        root: o,
                        timeout: l
                    })).always(function() {
                        return s(e, o)
                    })
                },
                loadSandbox: c,
                insertScriptIntoIframe: p
            },
            g = void 0,
            m = [],
            v = 50
    },
    139: function(e, t, n) {
        "use strict";

        function i() {
            return n(55).promise(function(e) {
                r() ? e() : n(56).on("cookies:allowed", function() {
                    return e()
                })
            })
        }

        function r() {
            return s() ? o() : !0
        }

        function o() {
            return f.get(c) === u
        }

        function a() {
            return n(763).hasExplicitCookiesConsentMode(n(124).getCountryCode())
        }

        function s() {
            return a()
        }
        var l = n(83).MS_IN_DAY,
            u = n(763).COOKIE_CONSENT_VALUE,
            c = n(763).COOKIE_CONSENT_NAME,
            d = window.location.hostname.replace(/.*\.(.+\..+)/, "$1"),
            p = "." + d,
            h = new(n(266)),
            f = e.exports = {
                get: function(e) {
                    return h.length || window.document.cookie.split(/\s*;\s*/).forEach(function(e) {
                        var t = e.split("="),
                            n = t[0],
                            i = t[1];
                        h.set(n, i)
                    }), h.get(e)
                },
                set: function(e) {
                    var t = e.name,
                        n = e.value,
                        i = e.expirationInDays,
                        r = e.secure,
                        o = e.domainStrict;
                    window.document.cookie = [t + "=" + n, i ? "expires=" + new Date(Date.now() + i * l).toGMTString() : "", "path=/", o ? "" : "domain=" + p, r ? "secure" : ""].filter(Boolean).join(";"), h.reset()
                },
                unset: function(e) {
                    f.set(n(3).assign({}, e, {
                        value: "",
                        expirationInDays: -1
                    })), h.reset()
                },
                usageAllowed: r,
                whenAllowed: i,
                requiresUserConsent: s,
                enable: function() {
                    r() || (f.set({
                        name: c,
                        value: u
                    }), n(56).trigger("cookies:allowed"))
                }
            }
    },
    140: function(e, t, n) {
        "use strict";
        var i = "all-rights-reserved",
            r = "no-rights-reserved",
            o = "commons",
            a = "cc-by",
            s = {
                attribution: "by",
                nonCommercial: "nc",
                nonDerivative: "nd",
                shareAlike: "sa"
            },
            l = e.exports = {
                ALL_RIGHTS: i,
                NO_RIGHTS: r,
                COMMONS: o,
                DEFAULT_CC: a,
                ccFields: s,
                parse: function(e) {
                    var t = {
                        license: e === i ? i : e === r ? r : o
                    };
                    return e ? (t.license === o && n(3).each(s, function(n, i) {
                        t[i] = e.indexOf(n) > -1
                    }), t) : t
                },
                toURL: function(e) {
                    var t, n = "string" == typeof e ? l.parse(e) : e;
                    return n.license === o ? (t = l.serializeCCAttributes(n).replace(/^cc-/, ""), "http://creativecommons.org/licenses/" + t + "/3.0/") : ""
                },
                serializeCCAttributes: function(e) {
                    var t = Object.keys(s).map(function(t) {
                        return e[t] && s[t]
                    }, this).filter(n(3).identity).join("-");
                    return t ? "cc-" + t : a
                }
            }
    },
    141: function(e, t, n) {
        "use strict";

        function i(e) {
            return n(54).get("rollouts").get(e)
        }

        function r() {
            return n(54).get("me").isProUnlimited() || i("can_see_revshare_premier_agreement")
        }

        function o() {
            return n(54).get("me").isPro()
        }
        var a = e.exports = {
            DROPBAR_HEIGHT: 72,
            MAX_NUM_DISTRIBUTED_PRODCUTS_FOR_PRO: 1,
            MIN_SCHEDULING_AHEAD_DAYS: 14,
            canSeeProducts: function() {
                return i("has_access_to_opd")
            },
            canCreateProduct: function() {
                return a.canSeeProducts()
            },
            canScheduleProduct: function() {
                return a.canSeeProducts() && r()
            },
            canDistributeProduct: function(e) {
                e = e || 0;
                var t = r(),
                    n = o();
                return a.canSeeProducts() && (t || n && e < a.MAX_NUM_DISTRIBUTED_PRODCUTS_FOR_PRO)
            },
            hasReachedDistributionLimit: function(e) {
                return e = e || 0, !r() && e >= a.MAX_NUM_DISTRIBUTED_PRODCUTS_FOR_PRO
            },
            getProductVersions: function() {
                return [{
                    value: "Live",
                    label: n(50).t("Live")
                }, {
                    value: "Acoustic",
                    label: n(50).t("Acoustic")
                }, {
                    value: "Deluxe",
                    label: n(50).t("Deluxe")
                }, {
                    value: "Remastered",
                    label: n(50).t("Remastered")
                }]
            },
            getAllStores: function() {
                return ["amazon", "apple-music", "deezer", "fb-instagram", "google-play", "iheartradio", "itunes", "pandora", "spotify", "tidal", "youtube-music", "others"]
            },
            getStoreLabel: function(e) {
                switch (e) {
                    case "amazon":
                        return "Amazon";
                    case "apple-music":
                        return "Apple Music";
                    case "deezer":
                        return "Deezer";
                    case "fb-instagram":
                        return "Facebook & Instagram";
                    case "google-play":
                        return "Google Play Store";
                    case "iheartradio":
                        return "iHeart Radio";
                    case "itunes":
                        return "iTunes";
                    case "pandora":
                        return "Pandora";
                    case "spotify":
                        return "Spotify";
                    case "tidal":
                        return "Tidal";
                    case "youtube-music":
                        return "YouTube";
                    case "others":
                        return n(50).t("Napster and all other current and future services. [[[linkStart]]]See[[[nonBreakingSpace]]]all[[[linkEnd]]]", {
                            nonBreakingSpace: "&nbsp;",
                            linkStart: '<a href="https://help.soundcloud.com/hc/en-us/articles/360018109474" target="_blank">',
                            linkEnd: "</a>"
                        })
                }
            },
            getEstimatedLiveDate: function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? "readable" : arguments[0],
                    t = n(50).dateTimeHelper.toLocalDate(new Date);
                return n(50).dateTimeHelper.format(new Date(t.setDate(t.getDate() + a.MIN_SCHEDULING_AHEAD_DAYS)), e)
            }
        }
    },
    142: function(e, t, n) {
        "use strict";
        var i = "https://play.google.com/store/apps/details?id=com.soundcloud.android&hl=[LANGUAGE]",
            r = "https://itunes.apple.com/[LANGUAGE]/app/soundcloud/id336353151?mt=8",
            o = "https://app.adjust.com/[CAMPAIGN]?redirect=",
            a = "https://play.google.com/store/apps/details?id=com.soundcloud.creators&hl=[LANGUAGE]",
            s = "https://itunes.apple.com/[LANGUAGE]/app/apple-store/id1074278256?pt=298087&ct=[CAMPAIGN]&mt=8",
            l = {
                pt_BR: "br",
                en: "us"
            },
            u = {
                pt_BR: "pt-br",
                en: "us"
            },
            c = {
                googlePlay: function(e) {
                    return u[e] && (e = u[e]), i.replace("[LANGUAGE]", e)
                },
                appstore: function(e) {
                    return l[e] && (e = l[e]), r.replace("[LANGUAGE]", e)
                },
                googlePlayPulse: function(e, t) {
                    return u[e] && (e = u[e]), o.replace("[CAMPAIGN]", t) + encodeURIComponent(a.replace("[LANGUAGE]", e))
                },
                appstorePulse: function(e, t) {
                    return l[e] && (e = l[e]), s.replace("[LANGUAGE]", e).replace("[CAMPAIGN]", encodeURIComponent(t))
                }
            };
        e.exports = {
            getStoreUrl: function(e, t) {
                var i = n(50).getLocale() || "en",
                    r = c[e];
                return r(i, t)
            }
        }
    },
    143: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return e.audibleAt ? e.audibleAt(t) : e.at(t)
        }

        function r(e) {
            var t = e.current;
            if (n(62).isSourceActive(this)) {
                var i = this.getSoundIndex(t);
                i > -1 && this.setAudioCursor(i)
            }
        }
        e.exports = new(n(21))(n(1417), {
            _audioCursor: -1,
            applyTo: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    n = t.loop;
                this.extend(e, {
                    isLooping: !!n
                })
            },
            defaults: {
                getQueryPosition: function(e) {
                    return e
                }
            },
            after: {
                setup: function() {
                    this.listenTo(n(62), "change:currentSound", r)
                }
            },
            getCurrentSound: function() {
                var e = i(this, this._audioCursor);
                return e && e.getCurrentSound()
            },
            setAudioCursor: function(e) {
                this._audioCursor !== e && (this._audioCursor = e, this.trigger("change:currentSound"))
            },
            getAudioCursor: function() {
                return this._audioCursor
            },
            getSoundIndex: function(e) {
                var t = this,
                    n = -1;
                return this.some(function(r, o) {
                    var a = i(t, o);
                    return a && (a === e || a.containsSound(e)) ? (n = o, !0) : void 0
                }), n
            },
            getQueueMetadataAt: function(e) {
                return {
                    originalModel: this.at(e),
                    queryPosition: this.getQueryPosition(e),
                    sourceInfo: this.getSourceInfo()
                }
            },
            containsSound: function(e) {
                return this.getSoundIndex(e) > -1
            }
        })
    },
    144: function(e, t) {
        "use strict";
        e.exports = {
            CANCELING: "canceling",
            EDITING: "editing",
            NONE: "none",
            SAVING: "saving"
        }
    },
    145: function(e, t, n) {
        "use strict";

        function i(e) {
            return n("playlist-upload" === e ? 516 : "sound-upload-edit" === e ? 168 : "off-platform-track-form" === e ? 489 : 168)
        }
        var r = e.exports = function(e, t) {
            var n = i(t.resource_type);
            return new n(e, t)
        };
        r.getClass = function(e) {
            return i(e.resource_type)
        }
    },
    148: function(e, t, n) {
        "use strict";
        var i = e.exports = n(181).extend({
            enabled: !0,
            _breakCount: 0,
            _failCount: 0,
            _maxBreaks: 0,
            _timeoutId: null,
            defaults: {
                tolerance: 1,
                baseDelay: 1e3,
                maxDelay: 3e4,
                backoffRate: 2,
                giveUp: null,
                enabled: !0
            },
            initialize: function(e) {
                n(3).bindAll(this, "failed", "succeeded"), this.setup(e)
            },
            setup: function(e) {
                this.options = n(3).assign({}, this.options || this.defaults, e), e = n(3).defaults(this.options, this.defaults);
                var t = e.maxDelay / e.baseDelay;
                if (e.backoffRate > 1)
                    for (; t > 1;) ++this._maxBreaks, t /= e.backoffRate;
                else this._maxBreaks = 1 / 0;
                e.enabled || this.disable()
            },
            dispose: function() {
                this.off(), this.clearTimeout()
            },
            clearTimeout: function() {
                this._timeoutId && (window.clearTimeout(this._timeoutId), this._timeoutId = null)
            },
            failed: function() {
                ++this._failCount >= this.options.tolerance && this.disable()
            },
            succeeded: function() {
                this._breakCount = this._failCount = 0
            },
            disable: function(e) {
                if (this.enabled) {
                    var t = !e || e.autoEnable !== !1;
                    this.enabled = !1, ++this._breakCount, t && (!this.options.giveUp || this._breakCount < this.options.giveUp) ? this._timeoutId = window.setTimeout(this.enable.bind(this), this.currentDelay()) : this.trigger("giveup"), this.trigger("disabled")
                }
            },
            enable: function() {
                this.enabled || (this.enabled = !0, this._failCount = 0, this.trigger("enabled"))
            },
            currentDelay: function() {
                var e = this.options;
                return Math.min(e.baseDelay * Math.pow(e.backoffRate, Math.floor(Math.random() * Math.min(this._maxBreaks, this._breakCount))), e.maxDelay)
            }
        });
        n(3).assign(i.prototype, n(22).Events)
    },
    149: function(e, t, n) {
        "use strict";
        e.exports = n(96).extend({
            nullable: !1,
            message: "",
            value: null,
            check: function(e, t) {
                t(e === this.value)
            }
        })
    },
    152: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = 0;
            return t = 10 > e ? 2 : 100 > e ? 1 : 0
        }
        var r, o = ["K", "M", "B"];
        r = {
            max: null,
            suffix: "+",
            useSIUnits: !1,
            precision: null
        };
        e.exports = {
            render: function(e, t) {
                if ("number" != typeof e) return e;
                var a = 0,
                    s = "",
                    l = 0;
                if (t = t || {}, n(3).defaults(t, r), t.max && e > t.max) e = t.max, s = t.suffix;
                else if (t.useSIUnits) {
                    if (null === t.precision && 1e4 > e) return n(50).numberHelper.format(e);
                    for (; e >= 1e3 && a < o.length;) e /= 1e3, s = o[a++];
                    l = null !== t.precision ? t.precision : i(e)
                }
                return n(50).numberHelper.format(e, {
                    precision: l,
                    roundingFn: Math.floor
                }) + s
            }
        }
    },
    157: function(e, t, n) {
        "use strict";
        e.exports = n(1893)()
    },
    158: function(e, t, n) {
        "use strict";

        function i(e, t) {
            n(3).each(e.filters, function(e, n) {
                t.filters[n] || (t._map[n] = P(t._sourceModels.length)), t.filters[n] = e
            }), n(3).each(t.filters, function(n, i) {
                e.filters || (delete t.filters[i], delete t._map[i])
            }), t.recalculateFilters()
        }

        function r() {
            return n(3).find(this.sources, o, this)
        }

        function o(e, t) {
            if (this._ignoredCollections.indexOf(t) > -1) return !1;
            var n = e.isFullyPopulated(),
                i = f.call(this, e);
            return (!n || i < e.length) && !g.call(this, e)
        }

        function a(e, t) {
            var n = e ? "on" : "off";
            t[n]("all", p, this)[n]("add", c, this)[n]("reset", u, this)[n]("remove", d, this)
        }

        function s() {
            this._map = n(3).mapObject(this.filters, function() {
                return new(n(766))
            })
        }

        function l(e) {
            var t = this,
                n = 0;
            return this.sources.some(function(i, r) {
                return i === e ? !0 : void(n += t._sourceModelCounts[r])
            }), n
        }

        function u(e, t) {
            var n = this,
                i = 0 === this._sourceModels.length;
            t && t.previousModels && t.previousModels.length && t.previousModels.reduceRight(function(t, i, r) {
                d.call(n, i, e, {
                    index: r
                })
            }, null);
            var r = this._sourceModels.length;
            e.models.forEach(function(t) {
                c.call(n, t, e, {
                    silent: i
                })
            });
            var o = this._sourceModels.length,
                a = o > r,
                s = i && a || 0 === o && this.isFullyPopulated();
            (s || a) && (this.lastFetchTime = Date.now()), s && this.trigger("reset", this, {})
        }

        function c(e, t, n) {
            var i = t.indexOf(e);
            if (D.call(this, i, t, !0)) {
                var r = i + l.call(this, t);
                this.lastFetchTime = Date.now(), 0 !== this._sourceModels.length || n.silent || this.trigger("reset", this, {}), b.call(this, e, t, r, n), x.call(this), k.call(this, n)
            }
        }

        function d(e, t, n) {
            var i = n.index;
            if (D.call(this, i, t, !1)) {
                var r = i + l.call(this, t);
                w.call(this, e, t, r)
            }
        }

        function p(e) {
            switch (e) {
                case "add":
                case "remove":
                case "reset":
                case "destroy":
                    return;
                default:
                    this.trigger.apply(this, arguments)
            }
        }

        function h(e, t) {
            var n = this,
                i = this.length,
                r = i + e,
                o = {
                    silent: t
                },
                a = !this.lastFetchTime,
                s = 0;
            return this.sources.every(function(t, i) {
                for (var l = void 0, u = void 0, c = void 0, d = void 0, p = n._sourceModelCounts[i]; !g.call(n, t) && n.length < r && (l = t.models.slice(p, p + e), c = l.length, 0 !== c);) {
                    for (n.lastFetchTime = t.lastFetchTime || Date.now(), a && (a = !1, n.trigger("reset", n, {})), d = n.length; u = l.shift();) b.call(n, u, t, s + p, o), p++, x.call(n), k.call(n, o);
                    e -= n.length - d
                }
                return s += p, n.length < r && (t.isFullyPopulated() || g.call(n, t))
            }), !this.lastFetchTime && this.sources.every(function(e) {
                return e.isFullyPopulated()
            }) && (this.lastFetchTime = Date.now()), this.length > i
        }

        function f(e) {
            return this._sourceModelCounts[this.sources.indexOf(e)]
        }

        function g(e) {
            var t = this.sourceOptions[this.sources.indexOf(e)];
            if (null == t.maxModels) return !1;
            var n = this._ignore,
                i = f.call(this, e),
                r = l.call(this, e),
                o = r + i,
                a = m(n, r, o),
                s = i - a;
            return t.maxModels <= s
        }

        function m(e, t, i) {
            var r = n(3).sortedIndex(e, t),
                o = n(3).sortedIndex(e, i);
            return o - r + (e[o] === i ? 1 : 0)
        }

        function v(e) {
            for (var t = e, n = 0, i = this._ignore.length; i > n && this._ignore[n] <= t; ++n) ++t;
            return t
        }

        function _(e) {
            var t = v.call(this, e);
            if (e > -1)
                for (var n = 0, i = this.sources.length; i > n; ++n) {
                    var r = this.sources[n],
                        o = f.call(this, r);
                    if (!(t >= o)) return {
                        source: r,
                        index: t,
                        model: r.at(t)
                    };
                    t -= o
                }
        }

        function y(e) {
            var t = this.sources.indexOf(e);
            t > -1 && t < this.sources.length - 1 && this._ignoredCollections.push(t)
        }

        function b(e, t, i, r) {
            function o(e, t, n) {
                e > i && n[t]++
            }
            var a = this,
                s = i === this._sourceModels.length ? function(e, t) {
                    e.push(t)
                } : function(e, t) {
                    e.splice(i, 0, t)
                };
            if (e instanceof this.model || (e = this.extractModel(e, i)), e) {
                this._sourceModelCounts[this.sources.indexOf(t)]++;
                var l = this.indexesOfEquivalentModels(e, this._sourceModels);
                l.forEach(function(e) {
                    e >= i && a._dupes[e].push(i)
                }), s(this._sourceModels, e), s(this._dupes, l.filter(function(e) {
                    return i > e
                })), this._dupes.slice(i).forEach(function(e, t) {
                    var n = t + i;
                    a._dupes[n].forEach(o)
                }), n(3).each(this.filters, function(t, n) {
                    a._map[n].insert(i, !!t.call(a, e, i))
                })
            }
        }

        function w(e, t, i) {
            function r(e, t, n) {
                e > i && n[t]--
            }
            var o = this,
                a = i === this._sourceModels.length - 1 ? function(e) {
                    e.pop()
                } : function(e) {
                    e.splice(i, 1)
                };
            a(this._sourceModels), a(this._dupes), n(3).each(this._map, function(e) {
                e.remove(i)
            }), this._dupes.slice(i).forEach(function(e, t) {
                var a = t + i;
                o._dupes[a] = n(3).without(o._dupes[a], i), o._dupes[a].forEach(r)
            }), this._sourceModelCounts[this.sources.indexOf(t)]--, x.call(this), k.call(this)
        }

        function x() {
            for (var e = 0, t = n(3).isEmpty(this._map) ? P(this._sourceModels.length) : n(766).combine(n(3).values(this._map)), i = function(e, n) {
                    return e && !t.get(n)
                }, r = 0; r < this.sources.length; ++r) {
                var o = this.sourceOptions[r].maxModels,
                    a = f.call(this, this.sources[r]);
                if (null != o) {
                    var s = M(t, !0, o, e, e + a - 1);
                    e + a > s && t.clearRange(s, e + a - 1)
                }
                e += a
            }
            for (var r = 0; r < this._sourceModels.length; ++r) t.get(r) && t.set(r, 0 === this._dupes[r].length || this._dupes[r].reduce(i, !0));
            this._ignore = t.getIndexes(!1)
        }

        function k(e) {
            var t = this;
            n(1787).align({
                source: this.models,
                target: this._sourceModels.filter(S, this),
                comparator: this.compareModels,
                add: function(i, r) {
                    t.add(i, n(3).defaults({
                        at: r,
                        parse: !1
                    }, e))
                },
                remove: function(e, n) {
                    t.remove(t.at(n), {
                        _propagateToSource: !1
                    })
                }
            })
        }

        function S(e, t) {
            var i = n(3).sortedIndex(this._ignore, t);
            return this._ignore[i] !== t
        }

        function C(e) {
            var t = void 0;
            return e = n(3).clone(e) || {}, h.call(this, this.options.limit, e.silent) || (t = r.call(this)), t ? T.call(this, t, e) : n(55).resolve({})
        }

        function T(e, t) {
            var i = this,
                r = this.options.limit,
                o = this._sourceModels.length + r,
                a = e.options.limit;
            return t.reset = !this.isPopulated(), t.remove = !1, e.setLimit(Math.max(r, O)), e.fetchUntilResults(t).always(function() {
                e.setLimit(a)
            }).then(function() {
                return E.call(i, t, o)
            }).then(null, function() {
                var r = e === n(3).last(i.sources);
                return r ? void 0 : (y.call(i, e), E.call(i, t, o))
            })
        }

        function E(e, t) {
            var i = this;
            if (!N(this)) {
                var r = this.options.limit,
                    o = t - this._sourceModels.length;
                return o > 0 ? (this.options.limit = o, C.call(this, n(3).omit(e, "url")).always(function() {
                    i.options.limit = r
                })) : void 0
            }
        }

        function A(e) {
            function t() {
                i.cache = {}
            }
            var i = n(3).memoize(function() {
                return e.apply(this, arguments).always(t)
            }, function(e) {
                return JSON.stringify(e)
            });
            return i
        }

        function I() {
            var e = this.setupSources();
            this.sources = e.map(function(e) {
                return [].concat(e)[0]
            }), this.sourceOptions = e.map(function(e) {
                return [].concat(e)[1] || {}
            }), this._sourceModelCounts = e.map(function() {
                return 0
            })
        }

        function M(e, t, n) {
            var i = arguments.length <= 3 || void 0 === arguments[3] ? 0 : arguments[3],
                r = arguments.length <= 4 || void 0 === arguments[4] ? e.length - 1 : arguments[4],
                o = 0,
                a = void 0;
            for (a = i; r >= a && n > o; ++a) e.get(a) === t && ++o;
            return a
        }

        function D(e, t, n) {
            var i = this.sources.indexOf(t),
                r = this._sourceModelCounts[i];
            return r > e ? !0 : n && e === r ? !this.sources.slice(0, i).some(o, this) : !1
        }

        function P(e) {
            return new(n(766))(n(3).times(e, R))
        }

        function N(e) {
            return !e._sourceModels
        }
        var O = 10,
            R = (e.exports = n(70).extend({
                sources: null,
                sourceOptions: null,
                _sourceModelCounts: null,
                _sourceModels: null,
                filters: null,
                _map: null,
                _dupes: null,
                _ignore: null,
                _bulkFetchDeferred: null,
                _ignoredCollections: null,
                setup: function() {
                    I.call(this), this.sources.forEach(a.bind(this, !0)), this._sourceModels = [], this._dupes = [], this.filters = n(3).clone(this.filters || {}), s.call(this), this._ignore = [], this._ignoredCollections = [], this.fetch = A(C), h.call(this, this.options.limit, !0)
                },
                setupSources: function() {},
                setLimit: function(e) {
                    this.options.limit = e
                },
                setFilter: function(e, t) {
                    (t || this.filters[e]) && (t ? (this.filters[e] || (this._map[e] = P(this._sourceModels.length)), this.filters[e] = t) : (delete this.filters[e], delete this._map[e]), this.recalculateFilters())
                },
                bulkFetch: function(e, t) {
                    var i = this,
                        r = this.options.limit,
                        o = e - this.length,
                        a = this._bulkFetchDeferred;
                    return a && !t ? a : (a || (a = this._bulkFetchDeferred = n(55).defer().always(function() {
                        i._bulkFetchDeferred = null, i.options.limit = r
                    })), 0 >= o || this.isFullyPopulated() ? a.resolve() : (this.options.limit = o, this.fetch({
                        reset: !0
                    }).done(function() {
                        i.bulkFetch(e, !0)
                    }).fail(a.reject), a))
                },
                audibleAt: function(e) {
                    var t = _.call(this, e);
                    if (t) {
                        var n = t.source,
                            i = t.index;
                        if (n.audibleAt) return n.audibleAt(i);
                        var r = this.at(e);
                        return "sound" === r.resource_type || "playlist" === r.resource_type ? r : null
                    }
                },
                extractModel: null,
                remove: function(e) {
                    var t = this,
                        i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        r = i._propagateToSource,
                        o = void 0 === r ? !0 : r;
                    return o ? (Array.isArray(e) || (e = [e]), e.forEach(function(e) {
                        var n = _.call(t, t.indexOf(e));
                        n && n.source.remove(n.model)
                    })) : n(70).prototype.remove.call(this, e, n(3).defaults({
                        _propagateToSource: !1
                    }, i)), this
                },
                isFullyPopulated: function() {
                    return !r.call(this)
                },
                getNumSourceModels: function() {
                    return this._sourceModels.length
                },
                recalculateFilters: function() {
                    var e = this,
                        t = this._ignore;
                    n(3).each(this.filters, function(t, n) {
                        e._sourceModels.forEach(function(i, r) {
                            e._map[n].set(r, t.call(e, i, r))
                        })
                    }), x.call(this), n(285).multisetCompare(t, this._ignore) || (this.trigger("filterChanged"), k.call(this))
                },
                getPlaySource: function() {
                    var e = this.constructor,
                        t = e.getNewInstance(null, this.options);
                    return t.release(), i(this, t), t
                }
            }, {
                onCleanup: function(e) {
                    for (var t = void 0; t = e.sources.pop();) t.release(), a.call(e, !1, t);
                    this._sourceModels = this._map = null
                }
            }), function() {
                return !0
            })
    },
    159: function(e, t, n) {
        (function(t) {
            "use strict";
            var i = n(22).Events,
                r = new window.Image;
            r.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
            e.exports = function o(e) {
                function a() {
                    return !1
                }

                function s() {
                    return h = !0, f = window.setTimeout(g.end, 20), !1
                }
                var l = t(window.document),
                    u = [],
                    c = -1,
                    d = -1,
                    p = e.getQueue(),
                    h = !1,
                    f = void 0,
                    g = n(3).assign({}, i, {
                        initDragNDrop: o,
                        start: function(e) {
                            u.length && (n(3).invoke(u, "release"), u.length = 0), h = !1, l.on("drop", s).on("dragover", a), d = c = p.indexOf(e[0]), n(3).invoke(e, "hold"), u.push.apply(u, e), p.remove(e)
                        },
                        setDropCursor: function(e) {
                            c = e
                        },
                        getDropCursor: function() {
                            return c
                        },
                        end: function() {
                            f && (window.clearTimeout(f), f = null), l.off("drop", s).off("dragover", a), n(3).invoke(u, "release");
                            var e = u.splice(0, u.length),
                                t = h ? c : d;
                            t > -1 && p.add(e, {
                                at: t
                            }), d = c = -1, h = !1, g.trigger("end")
                        },
                        getItems: function() {
                            return u
                        },
                        isDragging: function() {
                            return u.length > 0
                        },
                        dispose: function() {
                            n(3).invoke(u, "release"), u.length = 0, l.off("drop", s).off("dragover", a)
                        },
                        prepareDragEvent: function(e) {
                            e.dataTransfer.setData("text", ""), e.dataTransfer.effectAllowed = "all", e.dataTransfer.setDragImage ? e.dataTransfer.setDragImage(r, 0, 0) : ! function() {
                                var t = e.target.style,
                                    n = t.opacity;
                                t.opacity = .01, window.requestAnimationFrame(function() {
                                    t.opacity = n
                                })
                            }()
                        }
                    });
                return g
            }(n(62))
        }).call(t, n(1))
    },
    160: function(e, t) {
        "use strict";
        e.exports = {
            all: "all",
            none: "none",
            one: "one"
        }
    },
    166: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                return r(e, "javascript:") ? "" : e
            }

            function r(e, t) {
                return e.trim().substr(0, t.length).toLowerCase() === t
            }
            var o = /soundcloud\.com\/[a-zA-Z0-9_\/?=#&%-]+/g,
                a = /^(?:(?:https?:\/\/)?(?:www\.|m\.)?soundcloud\.(?:com|dev))\/?/i,
                s = /^(?:(?:https?:\/\/)?(?:[-\w]+\.)*?soundcloud\.(?:com|dev))\b\/?/i,
                l = /^(?:(?:ht|f)tps?:\/\/|mailto:)/i,
                u = /^[a-zA-Z0-9.!#$ %&’* +\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                c = ["accounts", "activate", "activity", "admin", "android", "announcements", "api", "apps", "artworks", "assets", "comments", "community-guidelines", "connect", "customize", "creativecommons", "creator", "creators", "dashboard", "dropbox", "emails", "errors", "events", "explore", "facebook", "faqs", "favorites", "feedbacks", "feeds", "for", "forums", "genres", "gifts", "google_plus", "groups", "guestlist", "help", "hot", "invite", "imprint", "iphone", "ipad", "ipod", "jobs", "join-us", "latest", "login", "logout", "mac", "me", "messages", "mobile", "music", "newsletters", "notifications", "oauth", "oauth2", "orders", "oembed", "pages", "partners", "people", "player", "playlists", "posts", "press", "pro", "press_release", "search", "session", "sets", "settings", "signin", "sign-in", "signup", "sign-up", "sitemap", "sound", "sounds", "stats", "stream", "subscription", "terms-of-use", "tour", "tracks", "turn_off_notifications", "tags", "upload", "users", "videos", "waveform", "welcome", "widgets", "widget.xml", "widget", "widget.json", "you", "campaigns", "contacts", "discover", "fans", "faq", "logged_exceptions", "manifest.webapp", "robots", "topics"],
                d = [];
            n(1527).forEach(function(e) {
                d.unshift(e)
            });
            var p = e.exports = {
                getReservedKeywords: function() {
                    return c
                },
                updateSCLinks: function(e, i) {
                    return i && i.usertext && (e = n(192).usertext(e, i)), i && i.usertextOneline && (e = n(192).usertextOneline(e, i)), e = t("<div>").html(e), e.find("a").each(function(e, i) {
                        var r, o, a, s, u, c = i.getAttribute("href"),
                            d = t(i);
                        if (!l.test(c) && (u = n(65).parse(c), u.path && (a = p.getRouteInfo(u.path))))
                            if ("listen" === a.name) r = u.path.split("/").slice(1), d.text(n(440).capitalize(r[0]) + " – " + n(440).capitalize(r[1]));
                            else if ("user" === a.name) {
                            if (o = u.path.split("/")[1], p.getReservedKeywords().indexOf(o) > -1) return;
                            if (d.addClass("g-link-user"), s = i.previousSibling, s && 3 === s.nodeType && /@$/.test(s.textContent)) return;
                            i.parentNode.insertBefore(window.document.createTextNode("@"), i), d.text(o)
                        }
                    }), e.html()
                },
                getRouteInfo: function(e) {
                    var t = e.replace(/^\//, "");
                    return n(3).find(d, function(e) {
                        var n = e.route;
                        return n.test(t)
                    })
                },
                scLinksRegexGlobal: o,
                soundcloudUrlRegex: a,
                anySCLinkRegex: s,
                getAudibleModels: function(e) {
                    var t, i = this.filterAudibleLinks(e),
                        r = n(55).defer();
                    return t = i.map(function(e) {
                        return "listen" === e.info.name ? n(67).resolve.apply(n(67), e.info.params) : n(85).resolve.apply(n(85), e.info.params)
                    }), n(55).settled(t).always(function() {
                        var e = n(3).map(arguments, function(e, t) {
                            var r = e[0];
                            return r instanceof n(85) || r instanceof n(67) ? {
                                audible: r,
                                link: i[t].link
                            } : null
                        });
                        r.resolve(e)
                    }), r
                },
                filterAudibleLinks: function(e) {
                    var t = n(54).get("router"),
                        i = ["listen", "playlist"];
                    return n(3).reduce(e, function(e, n) {
                        var r = t.getUrlInfo(n);
                        return r && i.indexOf(r.name) > -1 && e.push({
                            info: r,
                            link: n
                        }), e
                    }, [])
                },
                formatUserGeneratedLink: function(e) {
                    var t = n(65).parse(e);
                    return a.test(t.host) ? i(t.path) : n(192).usertext.redirectLink(e)
                },
                isEmail: function(e) {
                    return u.test(e)
                }
            }
        }).call(t, n(1))
    },
    167: function(e, t, n) {
        "use strict";

        function i(e) {
            if (!e) return null;
            var t = e.promoted,
                n = a[e.type];
            return n ? {
                ad_urn: t.ad_urn,
                campaign: "promoted",
                kind: n,
                origin: e[n],
                tracking: t.tracking
            } : (window.console.warn("Unknown promoted type:", e.type), null)
        }

        function r(e, t) {
            return {
                kind: e.kind,
                origin: e,
                campaign: t
            }
        }
        var o = ["q", "q[fulltext]", "filter.duration", "filter.created_at", "filter.license", "filter.genre", "filter.genre_or_tag", "filter.place", "query_urn"],
            a = {
                "user-promoted": "user",
                "track-promoted": "track"
            };
        e.exports = {
            highlightText: function(e, t, i) {
                var r, o = n(3).assign({
                        start: "<b>",
                        end: "</b>"
                    }, i),
                    a = e.split("");
                if (!t) return e;
                for (r = t.length; r--;) a.splice(t[r].end, 0, o.end), a.splice(t[r].start, 0, o.start);
                return a.join("")
            },
            getParams: function() {
                var e = n(65).parse(window.location.href);
                return this.getValidParams(e.query)
            },
            getValidParams: function(e) {
                return n(3).pick(e, o)
            },
            modifyParamsWith: function(e, t) {
                var i = {},
                    r = this.getParams();
                return void 0 === t && r.hasOwnProperty(e) ? delete r[e] : (i[e] = t, n(3).assign(r, i)), n(65).stringify({
                    query: r
                })
            },
            getFilters: function(e) {
                var t = {},
                    i = /^filter\./;
                return e = e || this.getParams(), n(3).each(e, function(e, n) {
                    i.test(n) && (t[n] = e)
                }), n(3).isEmpty(t) ? void 0 : t
            },
            fuzzy: function(e, t, i) {
                var r, o = e.replace(/\W+/gi, "").split(""),
                    a = new RegExp("\\b(" + o.join(").*?(") + ")", "i");
                return e ? (r = t.map(function(t) {
                    var r, o, s = (i ? t.get ? t.get(i) : t[i] : t).toString(),
                        l = n(475)(s),
                        u = a.exec(l),
                        c = [];
                    if (u) {
                        for (r = u.index, o = 1; o < u.length; ++o) r = l.indexOf(u[o].toLowerCase(), r) + 1, c.push({
                            start: r - 1,
                            end: r
                        });
                        for (o = c.length; --o;) c[o - 1].end === c[o].start && (c[o - 1].end = c[o].end, c.splice(o, 1));
                        return {
                            item: t,
                            highlights: c,
                            score: e.length / u[0].length / s.length - c.length
                        }
                    }
                }).filter(Boolean), r.sort(function(e, t) {
                    return t.score - e.score
                }), r) : t.map(function(e) {
                    return {
                        item: e,
                        highlights: [],
                        score: 1
                    }
                })
            },
            searchCategoryToFacet: function(e) {
                return {
                    sounds: "sound",
                    high_tier: "sound",
                    sets: "set",
                    playlists: "set",
                    albums: "album",
                    people: "person"
                } [e]
            },
            facetToSearchCategory: function(e) {
                return {
                    sound: "sounds",
                    set: "playlists",
                    person: "people"
                } [e]
            },
            parseOrganicResults: function(e) {
                var t = e.collection,
                    i = void 0 === t ? [] : t,
                    o = e.total_results,
                    a = void 0 === o ? 0 : o,
                    s = n(3).compact(i),
                    l = a - (i.length - s.length);
                return {
                    count: l,
                    records: s.map(function(e) {
                        return r(e, null)
                    })
                }
            },
            parsePremiumResults: function(e) {
                var t = e.premium_content,
                    n = t || {
                        collection: [],
                        total_results: 0
                    };
                return {
                    count: n.total_results,
                    records: n.collection.map(function(e) {
                        return r(e, "high_tier")
                    })
                }
            },
            parsePromotedResults: function(e) {
                var t = e.promoted_content,
                    n = [i(t)].filter(Boolean);
                return {
                    count: n.length,
                    records: n
                }
            },
            parseResult: r
        }
    },
    168: function(e, t, n) {
        "use strict";

        function i() {
            return this.isEdit ? n(55).resolve() : n(498).confirm(n(50).t("Are you sure you want to stop your upload? Any unsaved changes will be lost."))
        }

        function r() {
            return this.validate().then(function(e) {
                return e ? n(55).resolve() : n(55).reject()
            })
        }

        function o() {
            this.isDirty() || this.setToModelAttributes()
        }

        function a(e) {
            var t, i = n(570).instances.get(n(61).currentUserId());
            i && (t = n(340).convert(e), i.add(t, {
                at: 0
            }), t.release())
        }

        function s(e) {
            return n(55).delay(d).then(function() {
                return e.fetch({
                    attrs: ["monetization_enabled"]
                })
            })
        }
        var l = n(58).trackUploadFunnel,
            u = n(58).trackV0Click,
            c = n(58).trackV1Click,
            d = 2e3;
        e.exports = n(78).extend(n(1424), n(173), n(597), n(1836), n(596), n(1422), {
            fields: {
                offlineSyncEnabled: {
                    defaultValue: !0
                }
            },
            constraints: {
                title: [
                    [n(66), {
                        message: n(50).t("Enter a title.")
                    }],
                    [n(111), {
                        maxLength: 100,
                        message: n(50).t("Enter a title that is up to [[maxLength]] characters.")
                    }]
                ],
                description: [
                    [n(111), {
                        maxLength: 4e3,
                        message: n(50).t("Enter a track description that is up to [[maxLength]] characters.")
                    }]
                ],
                permalink: [
                    [n(493), {
                        type: "sound",
                        getResource: function() {
                            return this.getAudible()
                        }
                    }],
                    [n(66), {
                        message: n(50).t("Enter a permalink."),
                        shouldCheck: function() {
                            return this.isEdit
                        }
                    }]
                ],
                tags: [
                    [n(580)]
                ],
                customGenre: [
                    [n(111), {
                        maxLength: 100,
                        message: n(50).t("Enter a custom genre that is up to [[maxLength]] characters.")
                    }]
                ]
            },
            _sound: null,
            resource_type: "sound-upload-edit",
            requiredModelAttributes: ["commentable", "downloadable", "embeddable_by", "feedable", "genre", "geo_blockings", "label_name", "purchase_title", "purchase_url", "release_date", "reveal_comments", "reveal_stats", "api_streamable"],
            actions: {
                save: function() {
                    var e = this;
                    return r.call(this).then(function() {
                        return e.set("editing", !1), e.saveEdits()
                    })
                },
                cancel: function() {
                    var e = this;
                    i.call(this).then(function() {
                        return e.cancel()
                    })
                }
            },
            setup: function(e, t) {
                if (t.isEdit) {
                    var i = this.requiredModelAttributes.map(function(e) {
                        return "change:" + e
                    });
                    this.isEdit = !0, this._sound = new(n(67))({
                        id: t.resource_id
                    }), this.listenTo(this._sound, i.join(" "), o), this._sound.attrExists(this.requiredModelAttributes) ? this.setToModelAttributes() : this._sound.fetch({
                        attrs: this.requiredModelAttributes
                    }).fail(function() {
                        n(129).raise({
                            fatal: !0
                        })
                    }), this.setButtonConfig("save", {
                        label: n(50).t("Save changes")
                    }), this.addSubmodel(this._sound)
                }
            },
            cancel: function() {
                this.removeUpload(), this.isEdit ? (this.setToModelAttributes(), this.trigger("canceled")) : (this.destroy(), this._sound && n(75).destroy(this._sound), l("cancel"))
            },
            createAudible: function() {
                return this._sound = new(n(67))(this.getUploadAttributes()), this._sound
            },
            getAudible: function() {
                return this._sound
            },
            unsetAudible: function() {
                this._sound = null
            },
            onAudibleSaved: function() {
                var e = this.getAudible(),
                    t = e.get("scheduled_public_date");
                if (t && c({
                        click_name: "track::saved_with_scheduling",
                        click_attributes: {
                            user_subscription: n(54).get("me").getCreatorSubscriptionIdentifier()
                        }
                    }), this.isEdit) {
                    if (n(56).trigger("sound:saved", e), u(null, {
                            click_name: "track::edit_saved",
                            click_object: e.getUrn()
                        }), n(54).get("me").hasMonetization()) return s(e)
                } else a(e);
                return n(55).resolve()
            },
            onSaveFailed: function(e) {
                this.setToFailed("save", e), this.set("editing", !0), n(54).get("me").fetch()
            },
            getAttributesToBeSaved: function() {
                var e = n(3).pick(this.attributes, "feedable", "downloadable", "commentable");
                return e.api_streamable = this.get("apiStreamable"), e.reveal_comments = this.get("publicComments"), e.restrictions = this.get("offlineSyncEnabled") ? [] : ["no_offline_sync"], n(3).assign(e, this.getUploadAttributes()), e
            },
            getAttributesFromModel: function() {
                var e = this.getAudible(),
                    t = n(3).pick(e.attributes, "feedable", "downloadable", "commentable");
                return t.apiStreamable = !!e.get("api_streamable"), t.buyLink = e.get("purchase_url"), t.buyTitle = e.get("purchase_title") || this.getFieldMetadata("buyTitle").defaultValue, t.embeddableByAll = e.isEmbeddableByAll(), t.stats = !!e.get("reveal_stats"), t.publicComments = !!e.get("reveal_comments"), t.labelName = e.get("label_name"), t.releaseDate = e.get("release_date") && n(50).dateTimeHelper.fromString(e.get("release_date")), t.offlineSyncEnabled = e.isOfflineSyncEnabled(), t
            },
            updateSound: function(e) {
                this._sound && (this._sound.release(), this._sound = e)
            }
        }, {
            neverRelease: !0,
            hashFn: function(e, t) {
                return e.resource_id || t && t.resource_id || e.id || null
            }
        })
    },
    173: function(e, t, n) {
        "use strict";

        function i(e) {
            return "default" === e ? this.actions[e] : e
        }
        e.exports = new(n(21))({
            applyTo: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    n = t.action,
                    r = void 0 === n ? "default" : n;
                this.before(e, {
                    setup: function() {
                        this.disableAction(), this.listenTo(this, "form:clean", this.disableAction).listenTo(this, "form:dirty", this.enableAction);
                    }
                }), this.defaults(e, {
                    enableAction: function() {
                        this.setActionState(i.call(this, r), "enabled")
                    },
                    disableAction: function() {
                        this.setActionState(i.call(this, r), "disabled")
                    }
                })
            }
        })
    },
    179: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                s.current.dispose()
            }

            function r(e) {
                if (e.key) {
                    var t, n, i, r;
                    t = m.exec(e.key), t && (i = c.getItem(e.key), n = t[0], r = u[n], r && null === i ? r === s.current ? r.store.write() : (r.dispose(), delete u[n]) : !r && i && (u[n] = new l(n)))
                }
            }

            function o() {
                if (n(261).visible() && s.size() > 1) {
                    var e = 1679616,
                        t = ("0000" + (Math.random() * e).toString(36)).substr(-4);
                    n(56).broadcast({
                        excludeThis: !0
                    }, "instances:ping", t), n(3).delay(function() {
                        n(261).visible() && s.each(function(e, n) {
                            if (n !== g) {
                                var i = e.get("pong");
                                i !== t && (e.dispose(), delete u[n])
                            }
                        })
                    }, h)
                }
            }

            function a(e) {
                s.current.set("pong", e)
            }
            var s, l, u, c, d = n(83).MS_IN_SECOND,
                p = 30 * d,
                h = d,
                f = "inst_",
                g = f + Date.now(),
                m = new RegExp(f + "\\d{13}$");
            n(106).localStorage ? (s = e.exports = {
                initialize: function() {
                    var e, s, d, h, f = this;
                    for (c = window.localStorage, u = {}, this.current = u[g] = new l(g), u[g].store.write(), ["each", "some", "every", "map", "filter", "find"].forEach(function(e) {
                            f[e] = n(3)[e].bind(n(3), u)
                        }), e = 0, s = c.length; s > e; ++e) d = c.key(e), d !== this.current.store.keyName && (h = m.exec(d)) && (u[h[0]] = new l(h[0]));
                    window.setInterval(o, p), n(56).on("broadcast:instances:ping", a), t(window).on("unload", i), window.addEventListener("storage", r, !1)
                },
                size: function() {
                    return Object.keys(u || {}).length
                }
            }, l = function(e) {
                this.store = new(n(93))(e), e === g && (this.set = this.store.set.bind(this.store))
            }, n(3).assign(l.prototype, {
                get: function(e) {
                    return this.store.get(e)
                },
                dispose: function() {
                    return this.store.dispose()
                }
            })) : s = e.exports = null
        }).call(t, n(1))
    },
    180: function(e, t, n) {
        "use strict";

        function i() {
            return n(107).chrome ? n(55).promise(function(e, t) {
                n(131).insertScript("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1", {
                    onload: e,
                    onerror: t
                })
            }).then(null, function() {
                return n(55).reject("Failed to load cast_sender.js")
            }) : n(55).reject("Cast is disabled for browser")
        }
        var r = n(83).MS_IN_SECOND,
            o = 100,
            a = 6 * r,
            s = a / o,
            l = !1,
            u = !1,
            c = null;
        window.__onGCastApiAvailable = function() {
            window.chrome && window.cast && window.chrome.cast && (l = !0, n(56).on("googleCast:start", function(e) {
                u = !0, c = e.getSafeDeviceName()
            }), n(56).on("googleCast:end", function() {
                u = !1, c = null
            }))
        };
        var d = n(55).defer();
        e.exports = {
            getInstance: n(3).memoize(function() {
                var e = i().then(function() {
                    return n(55).poll(function() {
                        return l
                    }, o, s).then(null, function() {
                        return n(55).reject("SDK loaded but unavailable")
                    })
                }).then(function() {
                    return n(1799).fromSDK(window.chrome, window.cast)
                });
                return e.then(d.resolve, function(e) {
                    n(1395).error("Load failed:", e), d.reject(e)
                }), e
            }),
            getInstanceLazy: function() {
                return d.promise()
            },
            isCasting: function() {
                return u
            },
            safeDeviceName: function() {
                return c
            }
        }
    },
    181: function(e, t) {
        "use strict";
        e.exports = function() {
            function e(n, i) {
                var r, o, a, s, l;
                for (t = !0, l = new this, t = !1, s = "[object Array]" !== Object.prototype.toString.call(n) ? [n] : n, o = 0, a = s.length; a > o; ++o) {
                    n = s[o];
                    for (r in n) l[r] = n[r]
                }
                var u = function() {
                    return !t && this.initialize ? this.initialize.apply(this, arguments) : void 0
                };
                return i && Object.keys(i).reduce(function(e, t) {
                    return e[t] = i[t], e
                }, u), u.prototype = l, u.prototype.constructor = u, u.extend = e, u
            }
            var t = !1,
                n = function() {};
            return n.extend = e, n
        }()
    },
    182: function(e, t, n) {
        "use strict";
        e.exports = {
            DISABLED: -1,
            UNKNOWN: 0,
            INVALID: 1,
            VALID: 2
        }
    },
    183: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e === n(54).get("me").id,
                i = n(61).isLoggedIn();
            return t && i
        }

        function r(e) {
            var t = n(386).numSessionPlays(),
                i = 1 === o.get(p),
                r = e.userInitiated;
            !n(61).isLoggedIn() && !i && t > f && r && this.showSignupTeaser(e.sound.getUrn())
        }
        var o = new(n(93))("already-seen"),
            a = n(83).MS_IN_HOUR,
            s = n(83).MS_IN_DAY,
            l = n(83).MS_IN_WEEK,
            u = "listen-upsell",
            c = "stream-upsell",
            d = "user-upsell",
            p = "signup-teaser-modal",
            h = 4,
            f = 2,
            g = e.exports = {
                getUpsellableTrackCount: function() {
                    return h
                },
                couldHaveUserUpsell: function(e) {
                    return i(e) && !g.alreadySeenUserUpsell() && !n(54).get("me").isPremium()
                },
                isValidSound: function(e) {
                    var t = n(54).get("me"),
                        i = "sound" === e.resource_type;
                    if (i && !e.hasVisuals() && !t.isPremium() && t.get("track_count") >= h && t.owns(e)) {
                        var r = new Date(e.get("created_at")),
                            o = Date.now(),
                            s = new Date(o - a),
                            u = new Date(o - l);
                        return s >= r && r >= u
                    }
                    return !1
                },
                isValidIndex: function(e, t) {
                    return e > -1 && t.length >= h
                },
                isValidUserSounds: function(e) {
                    var t = e.length && e.first().get("created_at"),
                        i = new Date(t),
                        r = n(54).get("me");
                    return !r.isPremium() && e.length > h && i >= new Date(Date.now() - l) && i <= new Date(Date.now() - s)
                },
                alreadySeenListenUpsell: function() {
                    return 1 === o.get(u)
                },
                alreadySeenUserUpsell: function() {
                    return 1 === o.get(c) ? (o.unset(c), this.dismissUserUpsell(), !0) : 1 === o.get(d)
                },
                dismissListenUpsell: function() {
                    o.set(u, 1)
                },
                dismissUserUpsell: function() {
                    o.set(d, 1)
                },
                startPlayTracking: function() {
                    n(61).isLoggedIn() || n(56).on("audio:play", r, this)
                },
                stopPlayTracking: function() {
                    n(56).off("audio:play", r, this)
                },
                showSignupTeaser: function(e) {
                    var t = n(54).get("rollouts").get("signup_teaser"),
                        i = new(n(418))({
                            version: t,
                            width: 625,
                            soundUrn: e
                        });
                    i.open(), o.set(p, 1)
                }
            }
    },
    184: function(e, t, n) {
        "use strict";
        e.exports = n(105).extend({
            includeFooter: ".l-one-column",
            css: n(555),
            template: n(1619)
        })
    },
    191: function(e, t, n) {
        "use strict";
        var i = e.exports = {
            shouldShowUpsells: function() {
                var e = n(54).get("rollouts"),
                    t = i.canSeeAgreementPage() && n(141).canSeeProducts();
                return !t && e.get("can_view_revshare_pro_prospect") && e.get("v2_show_off_platform_upsells")
            },
            shouldShowModalUpsell: function() {
                return i.shouldShowUpsells() && !(n(54).get("me").isCPPEnabled() && !n(54).get("me").isIndiePartner())
            },
            canSeeAgreementPage: function() {
                var e = n(54).get("rollouts").get;
                return e("can_see_revshare_pro_agreement") || e("can_see_revshare_premier_agreement")
            },
            cantMonetizeLongContent: function() {
                return n(54).get("rollouts").get("cant_monetize_long_content")
            }
        }
    },
    192: function(e, t, n) {
        "use strict";
        var i = /\s/,
            r = /([a-z])([A-Z])/g;
        e.exports = {
            usertext: n(476).withDefaults(n(544)["default"]),
            usertextOneline: n(476).withDefaults(n(544).oneline),
            splitWords: function(e) {
                return e ? i.test(e) ? e : e.replace(r, "$1​$2") : ""
            }
        }
    },
    194: function(e, t, n) {
        "use strict";
        var i = "UA-2519404-44";
        e.exports = {
            include: function() {
                window.ga = window.ga || function() {
                    (window.ga.q = window.ga.q || []).push(arguments)
                }, window.ga.l = Date.now(), window.ga("create", i, "auto"), window.ga("set", "anonymizeIp", !0), n(131).insertScript("https://www.google-analytics.com/analytics.js")
            },
            trackEvent: function(e) {
                var t = e.category,
                    n = e.action,
                    i = e.optLabel,
                    r = e.optValue;
                window.ga && window.ga("send", "event", t, n, i, r)
            },
            trackPageview: function(e) {
                var t = e.routeName;
                window.ga && (window.ga("set", "contentGroup1", t), window.ga("send", "pageview"))
            },
            CATEGORIES: {
                USER_FUNNEL: "user-funnel",
                UPLOAD: "upload"
            },
            ACTIONS: {
                PURCHASE_SUBSCRIPTION: "purchase-subscription",
                SIGN_UP: "sign-up",
                UPLOAD_TRACK: "upload-track"
            }
        }
    },
    198: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var i = e.replace(/\[([A-Z]+)\]/g, function(e, i) {
                switch (i) {
                    case "ERRORCODE":
                        return null != t.errorCode ? String(t.errorCode) : e;
                    case "CACHEBUSTING":
                        return String(r(1e7, 99999999));
                    case "TIMESTAMP":
                        return new Date(n(50).dateTimeHelper.nowAtServer()).toISOString();
                    case "CONTENTPLAYHEAD":
                        return null != t.contentPlayheadInMs ? o(t.contentPlayheadInMs) : e;
                    default:
                        return e
                }
            });
            return i
        }

        function r(e, t) {
            return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e + 1)) + e
        }

        function o(e) {
            var t = new Date(e).toISOString();
            return t.substring(11, 23)
        }
        var a = {
                play: ["sound_play", "SCAudioStart"],
                skip: ["sound_skip"],
                finish: ["sound_finish"],
                adImpression: ["impression"],
                adClick: ["ad_click"],
                pause: ["SCAudioPause"],
                resume: ["SCAudioResume"],
                first_quartile: ["SCAudioFirstQuartile"],
                second_quartile: ["SCAudioSecondQuartile"],
                third_quartile: ["SCAudioThirdQuartile"]
            },
            s = e.exports = {
                adEventsByInternalEvent: a,
                getTrackerUrls: function(e, t) {
                    var i = a[e] || [],
                        r = n(3).flatten(i.map(function(e) {
                            return t[e] || []
                        }));
                    return r
                },
                log: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0],
                        t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    e.map(function(e) {
                        return i(e, t)
                    }).forEach(function(e) {
                        (new window.Image).src = e
                    })
                },
                logEvent: function(e, t) {
                    var n = s.getTrackerUrls(e, t.trackerUrlsByAdEvent || {});
                    return s.log(n, t)
                }
            }
    },
    201: function(e, t) {
        "use strict";

        function n(e) {
            return !r.test(e)
        }

        function i() {
            return !0
        }
        var r = /(\w+)\:(\w+)=(.+)/,
            o = e.exports = {
                extract: function(e, t) {
                    var n = e.tag_list || "",
                        i = [];
                    return i.push.apply(i, o.parse(n, t)), i
                },
                parse: function(e, t) {
                    var r = /[^\s"']+|"([^"]*)"/g,
                        o = (e.match(r) || []).map(function(e) {
                            return e.replace(/"/g, "")
                        }).filter((t || {}).includeMachineTags ? i : n);
                    return o
                },
                serialize: function(e) {
                    var t = /\s/;
                    return e.map(function(e) {
                        return t.test(e) ? '"' + e + '"' : e
                    }).join(" ")
                }
            }
    },
    202: function(e, t, n) {
        "use strict";

        function i() {
            return w || (w = p("https://apis.google.com/js/api:client.js", {
                onload: function() {
                    return window.gapi.load("auth2", r)
                },
                onerror: function() {
                    x.reject(), x = n(55).defer(), w = null
                }
            })), x.promise()
        }

        function r() {
            window.gapi.auth2.init({
                scope: g,
                client_id: v
            }).then(function(e) {
                _ = e, x.resolve()
            })
        }

        function o() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {
                    forcePrompt: !1
                } : arguments[0],
                t = e.forcePrompt,
                i = n(55).defer();
            return !t && y && y.isSignedIn() ? i.resolve(l(y)) : b && !b.closed ? b.focus() : b = h(function() {
                _.signIn({
                    prompt: m
                }).then(function(e) {
                    t || (y = e), i.resolve(l(e))
                }, function(e) {
                    e && "popup_closed_by_user" === e.error ? i.reject() : i.reject(e)
                })
            }), i
        }

        function a(e) {
            var t = e.size,
                i = n(55).defer();
            return y ? i.resolve(s(y, t)) : _.signIn().then(function(e) {
                i.resolve(s(e, t))
            }), i
        }

        function s(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? 200 : arguments[1],
                i = e.getBasicProfile(),
                r = i.getImageUrl(),
                o = r ? n(65).modify(r, {
                    query: {
                        sz: t
                    }
                }) : "";
            return {
                name: i.getName(),
                picture_url: o
            }
        }

        function l(e) {
            return e.getAuthResponse().access_token
        }

        function u(e) {
            return function() {
                return e.apply(void 0, arguments)
            }
        }
        var c = n(3).extend,
            d = n(3).mapObject,
            p = n(131).insertScript,
            h = n(286).interceptPopup,
            f = n(139).whenAllowed,
            g = "profile email openid",
            m = "select_account login",
            v = n(54).get("google_client_id"),
            _ = null,
            y = null,
            b = null,
            w = null,
            x = n(55).defer();
        e.exports = c({
            loadGoogleAuthSDK: function() {
                return f().then(i)
            }
        }, d({
            getGoogleToken: o,
            getCurrentGoogleUser: a
        }, u))
    },
    203: function(e, t, n) {
        "use strict";
        e.exports = n(105).extend({
            includeFooter: ".l-sidebar-right",
            css: n(1236),
            template: n(3009)
        })
    },
    208: function(e, t, n) {
        "use strict";

        function i() {
            n(137).useCookies(!0), r()
        }

        function r() {
            var e = n(54).get("privacy_settings");
            e.isOptedInToCommunications() && n(1439).include(), e.isOptedInToAnalytics() && n(3).defer(n(3).invoke, [n(194), n(1865), n(1440)], "include"), e.isOptedInToTargetedAdvertising() && n(3).defer(n(1866).include)
        }
        e.exports = {
            initialize: function() {
                var e = function(e) {
                        return n(54).get(e)
                    },
                    t = e("me").id,
                    o = e("app_version").replace(/!$/, ""),
                    a = n(139).usageAllowed();
                n(137).initialize({
                    id: e("client_application_id"),
                    appVersion: String(parseInt(o, 10) || ""),
                    trackingUrl: e("eventlogger_tracking_url"),
                    user: t,
                    batchTimeout: n(106).sendBeacon ? 5e3 : 1e3,
                    useCookies: a,
                    logEvents: e("rollouts").get("debug_events"),
                    eventVersions: {
                        impression: "1.27.6"
                    },
                    requestTransport: void 0,
                    authToken: n(61).getAuthToken()
                }), n(56).on("connect:login connect:logout", function() {
                    var e = n(61).isLoggedIn() ? n(61).getAuthToken() : null;
                    n(137).setAuthToken(e)
                }), t || n(56).once("connect:hasUserData", function() {
                    n(137).setUser(e("me").id)
                }), a ? r() : n(56).once("cookies:allowed", i)
            },
            dispose: function() {
                n(137).flush(!0)
            },
            trackPageView: function(e, t, i, r) {
                n(137).pageview(i, e, t, r);
                var o = void 0;
                "default" !== e && (o = t[t.length - 1]), n(194).trackPageview({
                    routeName: o
                })
            },
            trackAudioEvent: function(e) {
                n(137).audio(e)
            },
            trackAppLoad: function(e, t, i) {
                n(137).appLoad(t, {
                    level: e,
                    latency: i
                })
            },
            trackClick: function(e, t) {
                n(137).logEvent("click", e, t)
            },
            trackV0Click: function(e, t, i, r) {
                n(137).click(i, e, t, r)
            },
            trackImpression: function(e, t) {
                n(137).impression(e, t)
            },
            trackAudioError: function(e) {
                n(1788).log(e)
            }
        }
    },
    209: function(e, t, n) {
        "use strict";
        var i, r = "playlist",
            o = null,
            a = ["album", "ep", "single", "compilation"],
            s = (i = {}, i[r] = n(50).t("Playlist"), i.album = n(50).t("Album"), i.ep = n(50).t("EP"), i.single = n(50).t("Single"), i.compilation = n(50).t("Compilation"), i),
            l = function(e) {
                return function(t) {
                    return a.indexOf(t) > -1 ? t : e
                }
            },
            u = function(e) {
                return s[e] || ""
            },
            c = l(r),
            d = l(o);
        e.exports = {
            typeToApi: d,
            apiToType: c,
            releaseLabels: s,
            getReleaseLabel: u,
            defaultReleaseType: r
        }
    },
    210: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            applyTo: function(e, t) {
                var n = t.events,
                    i = [];
                this.after(e, {
                    setup: function() {
                        var e = this.constructor; - 1 === i.indexOf(e) && (i.push(e), n.forEach(function(t) {
                            var n = t.emitter,
                                i = t.event,
                                r = t.getInstance,
                                o = t.handler;
                            n.on(i, function() {
                                for (var t = arguments.length, n = Array(t), i = 0; t > i; i++) n[i] = arguments[i];
                                var a = e.instances.find(function(e) {
                                    return r.apply(void 0, [e].concat(n))
                                });
                                a && o.apply(a, n)
                            })
                        }))
                    }
                })
            }
        })
    },
    212: function(e, t) {
        "use strict";
        e.exports = {
            HQ: "hq",
            SQ: "sq"
        }
    },
    216: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e, n) {
                return n instanceof window.FormData ? t.ajax({
                    url: e,
                    type: "PUT",
                    data: n,
                    processData: !1,
                    contentType: !1,
                    dataType: "json"
                }) : t.ajax({
                    url: e,
                    type: "PUT",
                    data: JSON.stringify(n),
                    dataType: "json",
                    contentType: "application/json"
                })
            }

            function r(e, t) {
                var i = this.imageProperties.write,
                    r = t ? this.get("kind") + "[" + i + "]" : i;
                return t ? n(55).resolve(a(e, r)) : o(e, r)
            }

            function o(e, t) {
                return p(e).then(function(e) {
                    var n, i = e.split(","),
                        r = i[1];
                    return n = {}, n[t] = r, n
                })
            }

            function a(e, t) {
                if (n(106).formData && e) {
                    var i = new window.FormData;
                    return i.append(t, e), i
                }
            }

            function s(e) {
                var t = n(55).defer(),
                    i = n(87).setFormat(e[this.imageProperties.read], 20),
                    r = this,
                    o = new(n(148))({
                        tolerance: 1,
                        baseDelay: 2e3,
                        maxDelay: 8e3,
                        backoffRate: 1.5,
                        giveup: 6,
                        enabled: !1
                    }),
                    a = new window.Image;
                return a.onload = function() {
                    var n = r.imageProperties.read;
                    r.get(n) === e[n] && r.forceChange(n), r.set(e), t.resolve(e)
                }, a.onerror = function() {
                    o.failed()
                }, o.on("enabled", function() {
                    a.src = i + "?" + Date.now()
                }).on("giveup", t.reject), this.trigger("imageUrlChanged", i), t.done(this.trigger.bind(this, "imageTranscodingDone", e)).fail(this.trigger.bind(this, "imageTranscodingFail", e))
            }

            function l(e) {
                n(75).trigger("error", {
                    action: "upload_image",
                    xhr: e
                })
            }

            function u(e, t) {
                var i = n(55).defer();
                return h(e).done(function(e) {
                    var n = window.document.createElement("canvas"),
                        r = n.getContext("2d"),
                        o = c(e.width, e.height);
                    n.width = n.height = t, r && (r.imageSmoothingEnabled = r.mozImageSmoothingEnabled = r.oImageSmoothingEnabled = r.webkitImageSmoothingEnabled = !0, r.imageSmoothingEnabled = !0, r.drawImage(e, o.x, o.y, o.w, o.h, 0, 0, t, t)), i.resolve(n.toDataURL("image/png"))
                }).fail(i.reject), i
            }

            function c(e, t) {
                var n = e - t;
                return n > 0 ? {
                    x: Math.floor(n / 2),
                    y: 0,
                    w: t,
                    h: t
                } : {
                    x: 0,
                    y: Math.floor(-n / 2),
                    w: e,
                    h: e
                }
            }
            var d = n(58).trackV0Click,
                p = n(1405).readAsDataURL,
                h = n(87).readImageFile;
            e.exports = new(n(21))({
                _imageFile: null,
                _imageSource: null,
                _imageDataURI: null,
                applyTo: function(e, t) {
                    e.imageProperties = n(3).pick(t, "read", "write"), e.useFormData = null != t.useFormData ? t.useFormData : !0
                },
                defaults: {
                    getImageSaveUrl: function() {
                        return this.saveUrl()
                    }
                },
                getImageUrl: function(e) {
                    return this._imageDataURI || n(87).urlFrom(this.attributes, e)
                },
                hasOwnImage: function() {
                    return !!this._imageDataURI || !n(87).isDefaultImage(this.get(this.imageProperties.read))
                },
                hasNewImage: function() {
                    return !!this._imageFile
                },
                getPlaceholderUrl: function(e) {
                    return this._imageDataURI ? !1 : n(87).getPlaceholderUrl(this.getImageUrl(), e)
                },
                getImageFileInfo: function() {
                    return {
                        file: this._imageFile,
                        source: this._imageSource
                    }
                },
                setImageFile: function(e, t) {
                    var n = this;
                    this._imageSource = t, this._imageFile = e, u(e, 500).done(function(i) {
                        n._imageDataURI = i, n.trigger("imageDataChanged", {
                            file: e,
                            source: t
                        })
                    })
                },
                unsetImageFile: function(e) {
                    e = e || {}, this._imageFile = this._imageSource = null, e.force && this.unsetImageDataURI(), e.silent || this.trigger("imageDataChanged", {
                        file: null,
                        source: null
                    })
                },
                unsetImageDataURI: function() {
                    this._imageDataURI = null
                },
                uploadImage: function() {
                    var e = this,
                        t = n(55).defer(),
                        o = this.getImageFileInfo(),
                        a = o.file,
                        u = o.source,
                        c = this.useFormData,
                        p = this.resource_type;
                    return a && this.imageProperties.write ? (d(["upload", "image", "upload_started", u]), this.unsetImageFile(), r.call(this, a, c).then(function(t) {
                        return i(e.getImageSaveUrl(), t)
                    }).done(function(e) {
                        d(["upload", "image", "upload_success", u]), "user" === p && d(null, {
                            click_name: "profile_image:add"
                        }), t.resolve(e)
                    }).done(s.bind(this)).fail(t.reject).fail(l.bind(this)), t) : void 0
                }
            })
        }).call(t, n(1))
    },
    218: function(e, t, n) {
        "use strict";

        function i(e, t) {
            this.trigger("error", this, t)
        }
        var r = {
                explicit: !1,
                contextSnapshot: null,
                originalModel: null,
                queryPosition: null,
                sound: null,
                sourceInfo: null,
                index: null,
                order: null,
                castId: null
            },
            o = n(3).partial(n(3).pick, n(3), Object.keys(r)),
            a = e.exports = n(64).extend(n(3).assign({}, r, {
                resource_type: "queue-item",
                setup: function(e, t) {
                    n(3).assign(this, o(t));
                    var r = t.sound;
                    this._preloadingEnabled = !1, r.hold(), r.playlist && (r.playlist.hold(), this.addSubmodel(r.playlist)), this.addSubmodel(r), this.listenTo(r, "error", i)
                },
                makeExplicit: function() {
                    this.explicit || (this.explicit = !0, this.trigger("change:explicit", !0, this))
                },
                enablePreloading: function() {
                    this._preloadingEnabled || (this._preloadingEnabled = !0, this.sound.requestPreloading())
                },
                disablePreloading: function() {
                    this._preloadingEnabled && (this._preloadingEnabled = !1, this.sound.unrequestPreloading())
                },
                associateCastId: function(e) {
                    this.castId = e
                },
                clone: function(e) {
                    return new a({}, n(3).assign(o(this), e))
                }
            }), {
                onCleanup: function(e) {
                    e.disablePreloading()
                }
            })
    },
    235: function(e, t, n) {
        "use strict";

        function i(e) {
            arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1];
            return function(t, i) {
                var l = o(t) ? s(t) : i;
                t = a(t) ? t : l.url;
                var c = l.priority || u.MEDIUM,
                    d = n(65).parse(t),
                    p = d.host,
                    h = (d.path, function() {
                        return e(t, l)
                    });
                return r(p).addTask(h, c).defer
            }
        }

        function r(e) {
            return c[e] || (c[e] = new l(d)), c[e]
        }
        var o = n(3).isObject,
            a = n(3).isString,
            s = n(3).clone,
            l = n(1392).AsyncTasksQueue,
            u = {
                URGENT: 1,
                HIGH: 2,
                MEDIUM: 3,
                LOW: 4
            };
        e.exports = {
            addAjaxScheduling: i,
            RequestPriorities: u
        };
        var c = {},
            d = 6
    },
    240: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var i = {
                    q: e,
                    recaptcha_response: t
                },
                r = k.get(e);
            return r && !t ? n(55).resolve(r) : f("checkIdentifier", {
                queryParams: i
            }).then(function(t) {
                return t.status && k.set(e, t), t
            })
        }

        function r(e, t, i) {
            var r = {
                client_id: y,
                scope: b,
                recaptcha_pubkey: w,
                recaptcha_response: i.length > 0 ? i : null,
                credentials: {
                    identifier: e,
                    password: t
                },
                signature: n(474).sign(e, y, x),
                device_id: n(137).getAnonymousId(),
                user_agent: S
            };
            return f("signinWithPassword", {
                payload: r
            })
        }

        function o(e) {
            return s("facebook", e)
        }

        function a(e) {
            return s("google", e)
        }

        function s(e, t) {
            var i = "facebook" === e ? "signinWithFacebook" : "signinWithGoogle",
                r = {
                    client_id: y,
                    scope: b,
                    provider_token: t,
                    device_id: n(137).getAnonymousId(),
                    user_agent: S
                };
            return f(i, {
                payload: r
            })
        }

        function l(e) {
            var t = e.email,
                i = e.password,
                r = e.age,
                o = e.recaptcha,
                a = e.gender;
            return c(t).then(function(e) {
                var s = e.email_sign_up_token,
                    l = {
                        scope: b,
                        client_id: y,
                        email_sign_up_token: s,
                        recaptcha_pubkey: w,
                        recaptcha_response: o,
                        email: t,
                        password: i,
                        date_of_birth: u(r),
                        signature: n(474).sign(t, y, x),
                        device_id: n(137).getAnonymousId(),
                        user_agent: S,
                        gender: a
                    };
                return f("signupWithEmail", {
                    payload: l
                })
            })
        }

        function u(e) {
            var t = new Date(Date.now() - _ * e);
            return {
                month: t.getMonth() + 1,
                year: t.getFullYear()
            }
        }

        function c(e) {
            var t = {
                email: e,
                client_id: y
            };
            return f("signupWithEmailToken", {
                payload: t
            })
        }

        function d(e) {
            return h("google", e)
        }

        function p(e) {
            return h("facebook", e)
        }

        function h(e, t) {
            var i = t.token,
                r = t.birthday,
                o = t.gender,
                a = void 0 === o ? "" : o,
                s = void 0;
            r && (s = "string" == typeof r ? u(r) : {
                month: r.getMonth() + 1,
                year: r.getFullYear()
            });
            var l = "facebook" === e ? "signupWithFacebook" : "signupWithGoogle",
                c = {
                    client_id: y,
                    scope: b,
                    provider_token: i,
                    device_id: n(137).getAnonymousId(),
                    signature: n(474).sign(i, y, x),
                    user_agent: S,
                    date_of_birth: s,
                    gender: a
                };
            return f(l, {
                payload: c
            })
        }

        function f(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                i = t.pathParams,
                r = void 0 === i ? null : i,
                o = t.queryParams,
                a = void 0 === o ? null : o,
                s = t.payload,
                l = void 0 === s ? {} : s,
                u = n(50).getLocale();
            return "en" !== u && (l.display_locale = u), v(g, m(e, r, a, {}, l))
        }

        function g(e) {
            return n(55).resolve(e.body || {})
        }
        var m = n(23).callEndpoint,
            v = n(55).mapEither,
            _ = n(83).MS_IN_YEAR,
            y = n(54).get("client_id"),
            b = "fast-connect non-expiring purchase signup upload".split(" ").sort().join(" "),
            w = n(54).get("recaptcha_public_key"),
            x = "0763ed7314c69015fd4a0dc16bbf4b90",
            k = new(n(266))({
                maxLength: 5
            }),
            S = window.navigator.userAgent;
        e.exports = {
            checkIdentifier: i,
            signinWithPassword: r,
            signinWithFacebook: o,
            signinWithGoogle: a,
            signupWithEmail: l,
            signupWithFacebook: p,
            signupWithGoogle: d
        }
    },
    254: function(e, t, n) {
        "use strict";

        function i(e) {
            return e.replace(/[-\/\\$\^*+?.()|\[\]{}]/g, "\\$&")
        }

        function r(e) {
            return e.toUpperCase()
        }
        var o = i(".,'\"()[]-"),
            a = new RegExp("^[^\\s" + o + "]"),
            s = new RegExp("(?:^|\\s)[\\s" + o + "]?[^\\s" + o + "]", "g");
        e.exports = {
            sentenceCase: function(e) {
                return e.replace(a, r)
            },
            titleCase: function(e) {
                return e.replace(s, r)
            },
            permalink: function(e) {
                return n(475)(e).toLowerCase().replace(/\s/g, "-").replace(/[^a-z0-9_-]+/g, "").replace(/^[_-]+|[_-]+$/g, "").replace(/([-_])[-_]+/g, "$1").replace(/^[^a-z]+$/, "$&a")
            },
            truncate: function(e, t) {
                return e.length > t ? e.slice(0, t - 1) + "…" : e
            },
            regexpEscape: i,
            truncateFileName: function(e, t) {
                if (!e || e.length <= t) return e;
                var n = e.split(".").pop();
                return e = n ? e.substring(0, t - 2 - n.length) + "…." + n : e.substring(0, t)
            }
        }
    },
    261: function(e, t, n) {
        "use strict";
        var i = window.document,
            r = function() {
                return !i.hasFocus || i.hasFocus()
            },
            o = !0,
            a = e.exports = n(3).assign({}, n(22).Events, {
                visible: function() {
                    return o
                },
                focused: function() {
                    return o && r()
                }
            });
        ! function() {
            var e = function() {
                var e = !i.hidden;
                o !== e && (o = e, a.trigger("change:visibility", o))
            };
            e(), i.addEventListener("visibilitychange", e, !1)
        }()
    },
    262: function(e, t, n) {
        "use strict";

        function i(e) {
            return e.isPrivate()
        }

        function r(e) {
            return e.isGeoblocked()
        }

        function o(e) {
            return e.hasMonetizationPolicy()
        }

        function a(e) {
            return e.isPendingMonetization()
        }

        function s(e) {
            return n(54).get("me").hasMonetization() && e.isMonetizable()
        }

        function l(e) {
            return n(54).get("me").hasMonetization() && e.hasMonetizationRestriction()
        }

        function u(e) {
            return e.isManagedByFeeds()
        }

        function c(e) {
            return e.isScheduled()
        }

        function d(e) {
            return "sound" === e.resource_type
        }

        function p(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? "default" : arguments[1];
            return e ? n(50).dateTimeHelper.format(new Date(e), t) : null
        }
        e.exports = {
            enabledAttributes: function(e) {
                return {
                    isPrivate: i(e),
                    isGeoblocked: r(e),
                    hasMonetizationPolicy: o(e),
                    isPendingMonetization: a(e),
                    isMonetizable: s(e),
                    hasMonetizationRestriction: l(e),
                    isManagedByFeeds: u(e),
                    isScheduled: c(e)
                }
            },
            sharingDescription: function(e) {
                return i(e) ? d(e) ? n(50).t("This track is private.") : n(50).t("This playlist is private.") : void 0
            },
            managedByFeedsDescription: function(e) {
                return u(e) ? d(e) ? n(50).t("This track is managed directly by its rightsholder.") : n(50).t("This playlist cannot be edited or deleted, as it is managed directly by its rightsholder.") : void 0
            },
            monetizationDescription: function(e) {
                if (o(e)) {
                    var t = e.get("monetization");
                    if (!t) return d(e) ? n(50).t("This track is monetizing.") : n(50).t("This playlist is monetizing.");
                    var i = t.start_timestamp,
                        r = t.end_timestamp,
                        a = {
                            startDate: p(i),
                            endDate: p(r)
                        };
                    return i && r ? d(e) ? n(50).t("This track is monetizing between [[startDate]] and [[endDate]].", a) : n(50).t("This playlist is monetizing between [[startDate]] and [[endDate]].", a) : i && !r ? d(e) ? n(50).t("This track is monetizing from [[startDate]].", a) : n(50).t("This playlist is monetizing from [[startDate]].", a) : !i && r ? d(e) ? n(50).t("This track is monetizing until [[endDate]].", a) : n(50).t("This playlist is monetizing until [[endDate]].", a) : d(e) ? n(50).t("This track is monetizing.") : n(50).t("This playlist is monetizing.")
                }
            },
            monetizationPendingDescription: function(e) {
                if (a(e)) {
                    var t = e.get("monetization");
                    if (t) {
                        var i = Date.now(),
                            r = t.start_timestamp && new Date(t.start_timestamp),
                            o = t.end_timestamp && new Date(t.end_timestamp),
                            s = {
                                startDate: p(r),
                                endDate: p(o)
                            };
                        return r && r > i ? d(e) ? n(50).t("This track will start monetizing from [[startDate]].", s) : n(50).t("This playlist will start monetizing from [[startDate]].", s) : o && i > o ? d(e) ? n(50).t("This track is monetizing until [[endDate]].", s) : n(50).t("This playlist is monetizing until [[endDate]].", s) : d(e) ? n(50).t("Your request to monetize this track is being reviewed. Refresh to update.") : n(50).t("Your request to monetize this playlist is being reviewed. Refresh to update.")
                    }
                }
            },
            monetizableDescription: function(e) {
                return s(e) ? d(e) ? n(50).t("This track could be monetized.") : n(50).t("This playlist could be monetized.") : void 0
            },
            monetizationRestrictionDescription: function(e) {
                return l(e) ? d(e) ? n(50).t("This track can not be monetized because it is long-form content.") : n(50).t("This playlist can not be monetized because it is long-form content.") : void 0
            },
            schedulingDescription: function(e) {
                if (!c(e)) return null;
                var t = p(e.get("scheduled_public_date"), "readable_with_weekday");
                return t ? d(e) ? n(50).t("This track is scheduled to become public on [[publicDate]].", {
                    publicDate: t
                }) : n(50).t("This playlist is scheduled to become public on [[publicDate]].", {
                    publicDate: t
                }) : void 0
            },
            geoblockingDescription: function(e) {
                if (r(e)) {
                    var t = e.getAvailableCountries();
                    return 1 === t.length ? d(e) ? n(50).t("This track will only be playable in [[countryTitle]].", {
                        countryTitle: n(89).country(t[0]).title
                    }) : n(50).t("This playlist will only be playable in [[countryTitle]].", {
                        countryTitle: n(89).country(t[0]).title
                    }) : d(e) ? n(50).tp("This track will only be playable in 1 country.", "This track will only be playable in %d countries.", t.length) : n(50).tp("This playlist will only be playable in 1 country.", "This playlist will only be playable in %d countries.", t.length)
                }
            }
        }
    },
    263: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            applyTo: function(e, t) {
                e.getTitleAttribute = function() {
                    return t.attr
                }
            }
        })
    },
    265: function(e, t, n) {
        "use strict";

        function i() {
            var e = this,
                t = arguments.length <= 0 || void 0 === arguments[0] ? r.LOW : arguments[0];
            return this.maxResults && Object.keys(this.attributes).length >= this.maxResults && (this.next_href = !1), this.next_href === !1 ? n(55).resolve() : n(64).prototype.fetch.call(this, {
                priority: t
            }).then(function() {
                i.call(e, t)
            })
        }
        var r = n(235).RequestPriorities,
            o = function(e, t) {
                return {
                    id: e,
                    userId: n(61).currentUserId()
                }
            },
            a = function(e, t) {
                return null
            },
            s = function() {
                return {
                    userId: n(61).currentUserId()
                }
            },
            l = function() {
                return {
                    limit: 5e3,
                    linked_partitioning: 1
                }
            };
        e.exports = n(64).extend({
            readEndpoint: null,
            createEndpoint: null,
            deleteEndpoint: null,
            getReadEndpointPathParams: s,
            getReadEndpointQueryParams: l,
            getCreateEndpointPathParams: o,
            getCreateEndpointQueryParams: a,
            getDeleteEndpointPathParams: o,
            getDeleteEndpointQueryParams: a,
            maxResults: null,
            readOnly: !1,
            _currentRequests: null,
            next_href: null,
            _fetchDefer: null,
            setup: function() {
                this._currentRequests = new(n(266))
            },
            url: function() {
                return null === this.next_href ? n(23).getUrlForEndpoint(this.readEndpoint, this.getReadEndpointPathParams(), this.getReadEndpointQueryParams()) : this.next_href
            },
            get: function(e) {
                return n(64).prototype.get.call(this, e) || !1
            },
            fetch: function() {
                var e = this;
                return this._fetchDefer ? this._fetchDefer : (this._fetchDefer = n(61).isLoggedIn() ? i.call(this) : n(55).promise(function(t, r) {
                    e.listenToOnce(n(56), "connect:hasUserData", function() {
                        i.call(e).fail(function() {
                            e._fetchDefer = null
                        }).then(t, r)
                    })
                }), this._fetchDefer.fail(function() {
                    e._fetchDefer = null
                }))
            },
            parse: function(e) {
                var t = e.next_href,
                    n = e.collection;
                return this.next_href = t || !1, n.reduce(function(e, t) {
                    return e[t] = !0, e
                }, {})
            },
            toggle: function(e, t) {
                var n = this.get(e),
                    i = "boolean" == typeof t ? t : !n;
                i !== n && (i ? this.set(e, !0) : this.unset(e))
            },
            setRemote: function(e, t, i) {
                var r, o = this;
                if (this.readOnly) return n(55).resolve();
                if (!this._currentRequests.get(e)) {
                    var a = t ? [this.createEndpoint, this.getCreateEndpointPathParams(e, i), this.getCreateEndpointQueryParams(e, i)] : [this.deleteEndpoint, this.getDeleteEndpointPathParams(e, i), this.getDeleteEndpointQueryParams(e, i)],
                        s = (r = n(23)).callEndpoint.apply(r, a);
                    return this._currentRequests.set(e, s), s.always(function() {
                        o._currentRequests.unset(e)
                    }).done(function() {
                        var n = o.get(e);
                        t !== n && o.setRemote(e, n)
                    }).fail(n(129).ajaxNonFatal("Could not toggle value"))
                }
            },
            hasDataForView: function() {
                return !!this.lastFetchTime
            }
        }, {
            neverRelease: !0,
            hashFn: function() {
                return 1
            }
        })
    },
    266: function(e, t, n) {
        "use strict";

        function i() {
            var e = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "isEmpty", "chain", "sample"];
            return e.reduce(function(e, t) {
                return e[t] = function() {
                    var e = [this._asMap()];
                    return e.push.apply(e, arguments), n(3)[t].apply(n(3), e)
                }, e
            }, {})
        }
        e.exports = n(181).extend([i(), {
            initialize: function(e) {
                this._store = Object.create(null), this.length = 0, this._final = !1, this.maxLength = e && e.maxLength || !1, this.maxLength && (this._keys = [])
            },
            maxLength: 0,
            get: function(e) {
                return this._store[e]
            },
            set: function(e, t) {
                return this.has(e) ? this.maxLength && this._keys.splice(this._keys.indexOf(e), 1) : (++this.length, this.maxLength && this.length > this.maxLength && this.unset(this._keys[0])), this.maxLength && this._keys.push(e), this._store[e] = t, this
            },
            unset: function(e) {
                var t;
                return this.has(e) && (--this.length, this._final ? this._store[e] = t : (delete this._store[e], this.maxLength && this._keys.splice(this._keys.indexOf(e), 1))), this
            },
            reset: function() {
                return this._store = Object.create(null), this.maxLength && (this._keys = []), this._final = !1, this.length = 0, this
            },
            has: function(e) {
                return n(3).has(this._store, e)
            },
            keys: function() {
                return Object.keys(this._store)
            },
            prune: function(e) {
                return n(3).difference(this.keys(), e).forEach(this.unset, this), this
            },
            _asMap: function() {
                return this._store
            },
            finalize: function() {
                this._final = !0
            }
        }])
    },
    267: function(e, t, n) {
        "use strict";

        function i(e) {
            return "function" == typeof e.webkitGetAsEntry ? "webkitGetAsEntry" : "function" == typeof e.getAsEntry ? "getAsEntry" : void 0
        }

        function r(e) {
            var t = 1 === e.length && i(e[0]);
            if (t) {
                var n = e[0][t]();
                return n.isDirectory ? n.name : void 0
            }
            return void 0
        }

        function o(e) {
            var t = e.length && i(e[0]);
            return t ? a(n(3).map(e, function(e) {
                return e[t]()
            })).then(function(e) {
                return e.map(function(e) {
                    var t = e.file;
                    return t
                })
            }) : n(55).resolve(n(3).toArray(e))
        }

        function a(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? 3 : arguments[1],
                n = arguments.length <= 2 || void 0 === arguments[2] ? 0 : arguments[2];
            return e.filter(Boolean).reduce(function(e, i) {
                return e.then(function(e) {
                    return (i.isDirectory ? t > n ? s(i, t, n + 1) : Promise.resolve([]) : l(i)).then(function(t) {
                        return e.concat(t)
                    })
                })
            }, Promise.resolve([])).then(u)
        }

        function s(e, t, n) {
            return new Promise(function(i) {
                return e.createReader().readEntries(function(e) {
                    return i(a(e, t, n))
                })
            })
        }

        function l(e) {
            return new Promise(function(t) {
                return e.file(function(n) {
                    return t({
                        file: n,
                        path: e.fullPath
                    })
                })
            })
        }

        function u(e) {
            return e.sort(function(e, t) {
                return e.path < t.path ? -1 : e.path > t.path ? 1 : 0
            })
        }

        function c(e, t) {
            var i = new(n(389))({
                file: e
            }, t);
            return i.release(), i
        }

        function d(e, t) {
            var i = new(n(618))({
                uploads: e
            }, t);
            return i.release(), i
        }

        function p(e) {
            var t = this,
                i = this.length,
                r = this.uploadQueue;
            if (this.add(e, {
                    at: 0
                }), this.length !== i) {
                var o = function() {
                    b.call(t, !0, e);
                    var i = r.addTask(function() {
                        return e.upload()
                    });
                    return e.on("remove", function() {
                        return r.removeTask(i)
                    }), n(58).trackUploadFunnel("start"), {
                        v: e
                    }
                }();
                if ("object" == typeof o) return o.v
            }
        }

        function h() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0];
            return M.test(e)
        }

        function f(e) {
            return (e.size || 0) <= I.MAX_FILE_SIZE
        }

        function g(e) {
            var t = e.type && v(e.type),
                n = !h(e.name) || D.test(e.name.toLowerCase());
            return t || n
        }

        function m(e) {
            var t = f(e),
                n = g(e);
            return t && n
        }

        function v(e) {
            return e.indexOf("audio/") >= 0
        }

        function _(e) {
            !this.numUploading() && e.get("hasBeenSaved") && y()
        }

        function y() {
            k && (n(54).get("router").removeNavigationBlock(k), k = null)
        }

        function b(e, t) {
            this.transferStatus[e ? "addTransfer" : "removeTransfer"](t.get("transfer")), this.transcodingStatus[e ? "addTransfer" : "removeTransfer"](t.get("transcoding"))
        }

        function w(e) {
            b.call(this, !1, e), this.numUploading() || this.hasUnsaved() || y()
        }

        function x(e) {
            var t = e.get("status"),
                i = e.previous("status");
            t !== n(97).UPLOADING || 1 !== this.numUploading() || k || (k = n(54).get("router").addNavigationBlock(C)), t === n(97).COMPLETE && this.trigger("complete"), i === n(97).UPLOADING && this.transferStatus.removeTransfer(e.get("transfer")), i === n(97).TRANSCODING && this.transcodingStatus.removeTransfer(e.get("transcoding"))
        }
        var k, S = n(1392).AsyncTasksQueue,
            C = "You still have incomplete uploads. If you leave the page now, these will be canceled.",
            T = 3,
            E = "invalid:type",
            A = "invalid:size",
            I = e.exports = n(70).extend({
                next_href: !1,
                model: n(389),
                transferStatus: null,
                transcodingStatus: null,
                uploadQueue: null,
                setup: function() {
                    this.transferStatus = new(n(515)), this.transcodingStatus = new(n(515)), this.uploadQueue = new S(T), this.listenTo(this, "change:status", x).listenTo(this, "remove", w).listenTo(this, "change:hasBeenSaved", _, this);
                },
                addFiles: function(e) {
                    var t = this,
                        n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    return o(e).then(function(e) {
                        var i = t.getValidFiles(e),
                            r = [];
                        return i && i.length ? r = t.addFilesAsUploads(i, n.replaceSoundUploadId ? {
                            resource_id: n.replaceSoundUploadId
                        } : null) : r
                    })
                },
                getValidFiles: function(e) {
                    var t = e.filter(function(e) {
                            return ".DS_Store" !== e.name
                        }),
                        i = n(3).groupBy(t, function(e) {
                            return f(e) ? g(e) ? "valid" : E : A
                        });
                    return i[A] && this.trigger("error", {
                        name: A,
                        count: i[A].length
                    }), i[E] && this.trigger("error", {
                        name: E,
                        count: i[E].length
                    }), i.valid
                },
                addFilesAsUploads: function(e, t) {
                    return n(3).chain(e).map(function(e) {
                        return c(e, t)
                    }).map(p, this).compact().value()
                },
                addUploadsAsAggregate: function(e) {
                    return d(e)
                },
                addUploadsToAggregate: function(e, t) {
                    var n = d(null, {
                        resource_id: t
                    });
                    return n.addUploads(e), n
                },
                numToUpload: function() {
                    return this.uploadsByStatus(n(97).QUEUED + n(97).UPLOADING).length
                },
                numUploading: function() {
                    return this.uploadsByStatus(n(97).UPLOADING).length
                },
                numTransoding: function() {
                    return this.uploadsByStatus(n(97).TRANSCODING).length
                },
                hasUnsaved: function() {
                    return this.some(function(e) {
                        return e.get("hasBeenSaved") === !1
                    })
                },
                uploadsByStatus: function(e) {
                    return this.getSoundUploads().filter(function(t) {
                        return t.get("status") & e
                    })
                },
                getSoundUploads: function() {
                    return this.models
                },
                pause: function() {
                    this.uploadQueue.pause()
                },
                resume: function() {
                    this.uploadQueue.resume()
                },
                hasDataForView: function() {
                    return !0
                },
                extractFolderName: r
            }, {
                MAX_FILE_SIZE: 5368709120,
                SIMULTANEOUS_UPLOADS: T,
                isAcceptable: m,
                neverRelease: !0,
                hashFn: function() {
                    return 1
                }
            }),
            M = /\.\w/,
            D = /\.(3ga|3gp|aac|aif|aiff|aifc|amr|caf|flac|m4a|mp2|mp3|mp4|ogg|wav|wma)$/i
    },
    283: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return new r(e, t)
        }

        function r(e, t) {
            o.call(this, e, t)
        }

        function o(e, t) {
            var n = this;
            switch (a.allowed()) {
                case !0:
                    var i = this.notification = new s(e, t);
                    ["click", "error"].forEach(function(e) {
                        n.notification["on" + e] = n.trigger.bind(n, e)
                    }), t.duration && (this._closeTimeout = window.setTimeout(function() {
                        i.close()
                    }, t.duration));
                    break;
                case null:
                    a.requestPermission().then(function() {
                        o.call(n, e, t)
                    })
            }
        }
        var a = void 0,
            s = window.Notification;
        a = n(106).Notification ? e.exports = {
            allowed: function() {
                return "granted" === s.permission ? !0 : "denied" === s.permission ? !1 : null
            },
            requestPermission: function() {
                return n(55).promise(function(e, t) {
                    s.requestPermission(function(n) {
                        "granted" === n ? e() : t()
                    })
                })
            },
            create: i
        } : e.exports = {
            allowed: n(3).constant(!1),
            requestPermission: n(3).constant(n(55).reject()),
            create: i
        }, n(3).assign(r.prototype, n(22).Events, {
            notification: null,
            closed: !1,
            _closeTimeout: null,
            close: function() {
                return this.notification && !this.closed && (this.notification.close(), this.closed = !0, window.clearTimeout(this._closeTimeout)), this
            }
        })
    },
    284: function(e, t, n) {
        "use strict";

        function i(e) {
            return n(54).get("rollouts").get("v2_airbrake") && !n(54).get("versionOutOfDate") && e.errors.some(function(e) {
                var t = e.backtrace;
                return t.some(function(e) {
                    var t = e.file;
                    return o.test(t)
                })
            })
        }

        function r() {
            if (!l) {
                try {
                    s = new(n(1700))({
                        projectId: n(54).get("airbrake_project_id"),
                        projectKey: n(54).get("airbrake_project_key"),
                        environment: "production"
                    }), s.addFilter(function(e) {
                        if (n(54).get("rollouts").get("v2_count_frontend_errors") && u(), !n(54).get("privacy_settings").isOptedInToAnalytics()) return null;
                        try {
                            return i(e) ? e : null
                        } catch (t) {
                            return e
                        }
                    }), s.addFilter(function(e) {
                        var t = e.context;
                        return t.environment = "production", t.version = n(54).get("app_version"), t.user = t.user || {}, t.user.id = String(n(54).get("me").id || "anonymous"), t.component || (t.component = "unknown"), e
                    }), a.forEach(function(e) {
                        return s.notify(e)
                    })
                } catch (e) {
                    window.console.error("Could not initialize airbrake", e)
                }
                l = !0, a = []
            }
        }
        var o = /\/\/(a2\.soundcloud\.test|a-v2\.sndcdn\.com)/,
            a = [],
            s = null,
            l = !1,
            u = (e.exports = {
                initialize: r,
                notify: function(e) {
                    s ? s.notify(e) : l || a.push(e)
                }
            }, function() {
                var e = 0,
                    t = !0,
                    i = n(3).throttle(function() {
                        t && (n(23).callEndpoint("countFrontendErrors", null, {
                            errors: e,
                            app_version: n(54).get("app_version")
                        }).then(function(e) {
                            var n = e.status;
                            t = 204 === n
                        }), e = 0)
                    }, 3e4);
                return function() {
                    e++, i()
                }
            }())
    },
    285: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = Array.prototype.slice.call(e);
            return t %= n.length, 0 > t ? n.push.apply(n, n.splice(0, -t)) : n.unshift.apply(n, n.splice(-t)), n
        }

        function r(e, t) {
            return d(e) && d(t) ? e === t ? !0 : a(e, t) && a(t, e) : !1
        }

        function o(e, t) {
            var n = arguments.length <= 2 || void 0 === arguments[2] ? p : arguments[2];
            if (!d(e) || !d(t)) return !1;
            if (e === t) return !0;
            var i = e.length;
            if (t.length !== i) return !1;
            for (var r = 0; i > r; ++r)
                if (e[r] !== t[r] && !n(e[r], t[r])) return !1;
            return !0
        }

        function a(e, t) {
            for (var n = 0; n < e.length; ++n)
                if (-1 === t.indexOf(e[n])) return !1;
            return !0
        }

        function s(e, t, i, r) {
            var o = n(119).clamp(t - i, 0, Math.max(e.length - r, 0)),
                a = o + r;
            return {
                items: e.slice(o, a),
                position: t - o
            }
        }

        function l(e, t) {
            var n = e.indexOf(t);
            n > -1 && e.splice(n, 1)
        }

        function u(e, t) {
            var n = [];
            if (t >= 1)
                for (var i = 0; i < e.length;) n.push(e.slice(i, i += t));
            return n
        }

        function c(e, t, n) {
            var i = e.slice(),
                r = i.splice(t, 1)[0];
            return i.splice(n, 0, r), i
        }
        var d = Array.isArray,
            p = function(e, t) {
                return e === t
            };
        e.exports = {
            rotateArray: i,
            multisetCompare: r,
            equal: o,
            isSubset: a,
            sliceAround: s,
            removeElement: l,
            chunk: u,
            shiftItem: c
        }
    },
    286: function(e, t) {
        "use strict";
        e.exports = {
            centered: function(e, t, n, i) {
                var r = Math.min(t, window.screen.width - 50),
                    o = Math.min(n, window.screen.height - 50),
                    a = window.screenX + (window.outerWidth - r) / 2,
                    s = window.screenY + (window.outerHeight - o) / 2;
                return window.open(e, i || "", ["location=1", "width=" + r, "height=" + o, "top=" + s, "left=" + a, "toolbar=no", "scrollbars=yes"].join(","))
            },
            interceptPopup: function(e) {
                var t = null;
                return function(n) {
                    window.open = function() {
                        return t = n.apply(void 0, arguments)
                    }, e(), window.open = n
                }(window.open), t
            }
        }
    },
    287: function(e, t, n) {
        "use strict";
        var i = !1,
            r = e.exports = {
                toggle: function() {
                    i ? r.hide() : r.show()
                },
                show: function() {
                    i || (i = !0, n(56).trigger("queue:toggle", !0))
                },
                hide: function() {
                    i && (i = !1, n(56).trigger("queue:toggle", !1))
                },
                isVisible: function() {
                    return i
                }
            }
    },
    288: function(e, t, n) {
        (function(t) {
            "use strict";

            function n(e) {
                var n = window.document,
                    i = n.body,
                    r = n.documentElement,
                    o = void 0,
                    a = void 0;
                null != e ? ! function() {
                    var n = function() {
                            a ? a = !1 : (window.clearTimeout(o), t(window).off("scroll", n), o = null)
                        },
                        s = function() {
                            a = !0, r.scrollTop = i.scrollTop = e, (r.scrollTop || i.scrollTop) === e ? (t(window).off("scroll", n), o = null) : (o || t(window).on("scroll", n), o = window.setTimeout(s, 100))
                        };
                    s()
                }() : r.scrollTop = i.scrollTop = 0
            }

            function i(e) {
                var n = e.closest(".g-scrollable-inner"),
                    i = e.closest(".modal");
                return n.length ? n : i.length ? i : t(window.document)
            }
            e.exports = {
                restoreScrollPosition: n,
                findScrollableContainer: i
            }
        }).call(t, n(1))
    },
    292: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                var t, i, r;
                return e && e.collection && e.collection.length && (t = e.collection[0], i = t.last_message ? t.last_message.conversation_id + "_" + t.last_message.sent_at : t.uuid || t.id, r = n(3).isNumber(i) ? i > (void 0 === this.lastRead ? -1 : this.lastRead) : i !== this.lastRead), r
            }

            function r(e) {
                var t = n(130)[e];
                return !!(n(54).get("notifications") && t && t.channel)
            }

            function o(e) {
                var t = e ? "on" : "off";
                this[t]("change:size", l)
            }

            function a(e) {
                var t = e ? "on" : "off";
                n(130)[this.get("type")][t]("pollIntervalChange", s, this)
            }

            function s() {
                var e = this._breaker;
                e && this.restart()
            }

            function l(e, t) {
                t && e.stopPolling()
            }

            function u() {
                var e = n(130)[this.get("type")];
                return {
                    backoffRate: 1.1,
                    baseDelay: e.get("minPollInterval"),
                    maxDelay: e.get("maxPollInterval")
                }
            }
            var c = n(235).RequestPriorities,
                d = new(n(93))("notify");
            e.exports = n(64).extend({
                channel: null,
                _queue: null,
                _waitingQueue: null,
                _unseenQueue: null,
                _breaker: null,
                lastRead: null,
                _request: null,
                defaults: {
                    size: null,
                    type: null
                },
                initialize: function(e) {
                    this._queue = [], this._waitingQueue = [], this._unseenQueue = [];
                    var t = e.type,
                        i = n(130)[t];
                    this.baseUrl = i.get("baseUrl"), this.channel = i.get("channel"), this.lastRead = d.get(t), n(3).bindAll(this, "onNotification"), r(t) ? n(54).get("notifications").subscribe(i.channel, this.onNotification) : this.startPolling(), a.call(this, !0)
                },
                startPolling: function() {
                    var e = this;
                    if (!this._isPolling) {
                        var t, r;
                        t = this._breaker = new(n(148))(u.call(this)), this._isPolling = !0, r = function() {
                            e._isPolling && (window.clearTimeout(e._pollingId), e.fetch({
                                force: !0,
                                priority: c.LOW
                            }).done(function(n) {
                                i.call(e, n) ? (t.succeeded(), e._pollingId = window.setTimeout(r, t.currentDelay())) : t.failed()
                            }).fail(function(e) {
                                e.status >= 400 && e.status < 500 ? t.disable({
                                    autoEnable: !1
                                }) : t.failed()
                            }))
                        }, this._breaker.on("enabled", r), o.call(this, !0), r()
                    }
                },
                stopPolling: function() {
                    this._isPolling && (o.call(this, !1), window.clearTimeout(this._pollingId), this._pollingId = null, this._isPolling = !1, this._breaker.dispose(), this._breaker = null)
                },
                restart: function() {
                    this.stopPolling(), this.startPolling()
                },
                onNotification: function(e) {
                    this._request ? this._waitingQueue.push(e) : this._queue.push(e), this._unseenQueue.push(e), this.set("size", this._unseenQueue.length)
                },
                hasUnfetchedItems: function() {
                    return this._queue.length > 0
                },
                fetchQueuedItems: function() {
                    var e = this;
                    if (!this._request) {
                        if (!this.hasUnfetchedItems()) return this.set("size", 0), n(55).resolve();
                        var i, r = this._queue,
                            o = r.length,
                            a = r[0].uuid,
                            s = r[o - 1].uuid;
                        i = n(65).modify(n(3).result(this, "baseUrl"), {
                            query: {
                                "uuid[to]": a,
                                cursor: s,
                                limit: o,
                                offset: null
                            }
                        }), this._request = n(55).defer(), t.ajax({
                            url: i,
                            dataType: "json",
                            type: "GET"
                        }).done(function(t) {
                            e.onFetchQueuedItemsDone(t), e._request.resolve(), e._request = null
                        }).fail(function() {
                            e.onFetchFail(), e._request.reject(), e._request = null
                        })
                    }
                    return this._request
                },
                markAsRead: function(e) {
                    var t, n = this.get("type"),
                        i = 0;
                    this.lastRead !== e && (this.lastRead = e, d.set(n, e), t = this._unseenQueue.some(function(t) {
                        return ++i, t.uuid === e ? !0 : void 0
                    }), t ? this._unseenQueue.splice(0, i) : this._unseenQueue.length = 0, this.set("size", this._unseenQueue.length)), r(n) || this.startPolling()
                },
                fetch: function(e) {
                    var t, r = this,
                        o = !(!e || !e.force);
                    return null === this.get("size") || o ? (t = n(65).modify(n(3).result(this, "baseUrl"), {
                        query: {
                            limit: 1,
                            linked_partitioning: 1
                        }
                    }), n(64).prototype.fetch.call(this, n(3).assign({
                        url: t,
                        dataType: "json",
                        jqAjax: !0
                    }, e)).done(function(e) {
                        var t = i.call(r, e);
                        r.lastFetchTime = Date.now(), t && (null === r.get("size") || o) && (r._queue.push(e.collection[0]), r.set("size", !0))
                    })) : n(55).resolve()
                },
                hasDataForView: function() {
                    return null !== this.get("size")
                },
                onFetchFail: function() {
                    this._waitingQueue.length && Array.prototype.push.apply(this._queue, this._waitingQueue.splice(0, this._waitingQueue.length))
                },
                onFetchQueuedItemsDone: function(e) {
                    this._queue.length = 0, this._waitingQueue.length && (this._queue.push.apply(this._queue, this._waitingQueue), this._waitingQueue.length = 0);
                    var t = e.collection;
                    t && t.length ? this.trigger("data", t) : this.set("size", 0)
                }
            }, {
                hashFn: function(e) {
                    return e.type
                },
                onCleanup: function(e) {
                    r(e.get("type")) && n(54).get("notifications").unsubscribe(e.channel, e.onNotification), e.stopPolling(), a.call(e, !1)
                },
                cleanupInstantly: !0
            })
        }).call(t, n(1))
    },
    293: function(e, t, n) {
        "use strict";

        function i() {
            return l(s(c), c.PRIMARY, c.FEATURED, c.LYRICIST)
        }

        function r() {
            var e = i();
            return a(s(u).map(function(e) {
                var t = e[0],
                    n = e[1];
                return {
                    value: t,
                    label: n
                }
            }).filter(function(t) {
                var n = t.value;
                return e.indexOf(n) > -1
            }), "label")
        }
        var o = n(3).mapObject,
            a = n(3).sortBy,
            s = n(3).values,
            l = n(3).without,
            u = {
                PRIMARY: ["primary", n(50).t("Main artist")],
                FEATURED: ["featured", n(50).t("Featured artist")],
                LYRICIST: ["lyricist", n(50).t("Lyricist")],
                ARRANGER: ["arranger", n(50).t("Arranger")],
                COMPOSER: ["composer", n(50).t("Composer")],
                CONDUCTOR: ["conductor", n(50).t("Conductor")],
                ENGINEER: ["engineer", n(50).t("Engineer")],
                ENSEMBLE: ["ensemble", n(50).t("Ensemble")],
                MIXER: ["mixer", n(50).t("Mixer")],
                PERFORMER: ["performer", n(50).t("Performer")],
                PRODUCER: ["producer", n(50).t("Producer")],
                REMIXER: ["remixer", n(50).t("Remixer")],
                SOLOIST: ["soloist", n(50).t("Soloist")],
                WRITER: ["writer", n(50).t("Writer")],
                ACTOR: ["actor", n(50).t("Actor")]
            },
            c = o(u, function(e) {
                var t = e[0];
                return t
            }),
            d = o(u, function(e) {
                var t = e[1];
                return t
            });
        e.exports = {
            Roles: c,
            Labels: d,
            getContributorRoles: i,
            getContributorRolesConfig: r
        }
    },
    294: function(e, t, n) {
        "use strict";
        e.exports = {
            render: function(e, t, n) {
                var i = e(t || {});
                n && (n.innerHTML = i)
            },
            subviews: function(e) {
                n(617).replacePlaceholders(e)
            }
        }
    },
    295: function(e, t, n) {
        "use strict";

        function i() {
            if (!n(61).isLoggedIn()) return void n(56).once("connect:login", i);
            var e = n(61).getAuthToken(),
                t = n(583).generate(),
                a = n(23).getUrlForEndpoint("trinitySubscribe", {}, {
                    registrationID: t,
                    oauth: e
                }),
                l = n(23).getUrlForEndpoint("trinityPublish");
            o = n(560).getInstance(l, a, {
                connected: !1,
                debug: c(),
                authorization: e,
                withCredentials: !1,
                json: !0,
                singleConnection: !0,
                registrationId: t,
                heartbeatTimeoutMs: 2 * r
            }), o.on(n(560).Events.ACTION, function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; t > i; i++) n[i - 1] = arguments[i];
                e !== s.HEARTBEAT && u.trigger.apply(u, [e].concat(n))
            })
        }
        var r = 1e4,
            o = null,
            a = n(560).SCMessages,
            s = a.actions,
            l = a.events,
            u = e.exports = n(3).assign({}, n(22).Events, {
                actions: s,
                events: l,
                activate: n(3).once(i),
                publishEvent: function(e) {
                    o && o.publishEvent(e)
                },
                disconnect: function() {
                    o && o.disconnect()
                },
                reconnect: function() {
                    o && o.reconnect()
                }
            }),
            c = function() {
                return n(54).get("rollouts").get("v2_trinity_debug") || n(54).get("rollouts").get("internal_qa")
            }
    },
    296: function(e, t, n) {
        "use strict";
        var i = new(n(93))("upload-settings");
        e.exports = {
            getUploadAsPlaylist: function() {
                var e = i.get("asPlaylist");
                return void 0 === e ? !0 : e
            },
            toggleUploadAsPlaylist: function() {
                i.set("asPlaylist", !this.getUploadAsPlaylist())
            },
            getDefaultAvailability: function() {
                var e = i.get("availability");
                switch (e) {
                    case "private":
                        return "private";
                    case "public":
                    default:
                        return "public"
                }
            },
            setDefaultAvailability: function(e) {
                switch (e) {
                    case "private":
                        i.set("availability", "private");
                        break;
                    case "public":
                        i.set("availability", "public");
                        break;
                    default:
                        i.unset("availability")
                }
            }
        }
    },
    312: function(e, t, n) {
        "use strict";
        var i = e.exports = {
            getMarkup: function(e, t, r) {
                if (Array.isArray(t)) return t.map(function(t) {
                    return i.getMarkup(e, t, r)
                }).join("");
                r = r || {};
                var o = [],
                    a = r.whitelist,
                    s = "self" === r.closingTag ? "/" : "",
                    l = r.closingTag === !0 ? "</" + e + ">" : "";
                return n(3).each(t, function(e, t) {
                    "style" === t && "object" == typeof e && (e = this.getStyleAttr(e)), a && -1 === a.indexOf(t) || o.push(" " + t + '="' + n(20).Utils.escapeExpression(e) + '"')
                }, this), "<" + e + o.join("") + s + ">" + l
            },
            getStyleAttr: function(e) {
                return n(3).map(e, function(e, t) {
                    return null != e && "" !== e ? t + ":" + e + ";" : ""
                }).join("")
            }
        }
    },
    324: function(e, t, n) {
        "use strict";

        function i() {
            return n(212).SQ
        }

        function r() {
            return n(121).get(a) || i()
        }

        function o() {
            return n(54).get("rollouts").get("hq_audio")
        }
        var a = "streamingQuality";
        e.exports = {
            STREAMING_QUALITY_SETTING: a,
            getCurrentQuality: r,
            hqAllowed: o,
            initializeStreamingQuality: function() {
                n(121).get(a) !== n(212).HQ || o() || n(121).set(a, n(212).SQ)
            }
        }
    },
    325: function(e, t, n) {
        (function(t) {
            "use strict";
            var i = (e.exports = {
                trackUserEvent: function(e) {
                    var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    if (n(61).isLoggedIn() && n(54).get("privacy_settings").isOptedInToCommunications()) {
                        var o = n(54).get("me"),
                            a = o.getUrn(),
                            s = window.btoa(a),
                            l = {
                                app_group_id: "38754b57-c9ed-4220-965b-139a4777c543",
                                events: [{
                                    app_id: "2c0ba43c-af74-488e-9dfd-b87280e02a92",
                                    external_id: s,
                                    time: (new Date).toISOString(),
                                    name: e,
                                    properties: n(3).extend({
                                        creator_display_name: o.get("username")
                                    }, r),
                                    _update_existing_only: !0
                                }]
                            };
                        t.ajax({
                            type: "POST",
                            dataType: "json",
                            contentType: "application/json",
                            url: n(23).getUrlForEndpoint("brazeTrackUser"),
                            data: JSON.stringify(l),
                            statusCode: i
                        })
                    }
                }
            }, n(3).mapObject(n(369), function() {
                return n(3).noop
            }))
        }).call(t, n(1))
    },
    326: function(e, t, n) {
        "use strict";
        var i = /^[a-z-]+:\/\//,
            r = /^https?$/,
            o = /\.[a-z]{2,32}$/;
        e.exports = n(96).extend({
            message: n(50).t("This URL is invalid."),
            strict: !1,
            check: function(e, t) {
                if (!e) return void t(!0);
                if (!i.test(e)) {
                    if (this.strict) return void t(!1);
                    e = "http://" + e
                }
                var a = n(65).parse(e);
                t(!a.userInfo && r.test(a.scheme) && o.test(a.host))
            }
        })
    },
    327: function(e, t, n) {
        (function(t) {
            "use strict";
            var i = e.exports = {
                parseOtherId: function(e) {
                    var t, i = String(n(54).get("me").id);
                    return "string" == typeof e ? (t = e.split(":"), t[0] === i ? t[1] : t[0]) : void 0
                },
                baseUrl: function() {
                    var e = [].slice.call(arguments);
                    return n(65).stringify({
                        host: n(54).get("api_v2_host"),
                        path: ["users", n(54).get("me").id, "conversations"].concat(e)
                    })
                },
                baseUrlWithId: function(e) {
                    var t = n(3).tail(arguments);
                    return i.baseUrl.apply(null, [i.parseOtherId(e)].concat(t))
                },
                post: function(e, n) {
                    var r = i.baseUrl(e),
                        o = {
                            contents: n
                        };
                    return t.ajax({
                        type: "POST",
                        url: r,
                        dataType: "json",
                        contentType: "application/json",
                        data: JSON.stringify(o)
                    })
                }
            }
        }).call(t, n(1))
    },
    328: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            requirePrototype: n(158).prototype,
            applyTo: function(e, t) {
                var i = n(1406).makeFilterGenerator(t.fields);
                this.extend(e, {
                    setUserInput: function(e) {
                        this.setFilter("userInput", i(e))
                    }
                })
            }
        })
    },
    334: function(e, t, n) {
        "use strict";
        var i = n(561)({
            label: "scaudio",
            enabled: !0,
            buffer: !0
        });
        e.exports = {
            debug: i.log,
            info: i.info,
            warn: i.warn,
            error: i.error
        }
    },
    335: function(e, t) {
        "use strict";
        e.exports = {
            FAILURE: "failure",
            FINISHED: "finished",
            NOT_FOUND: "not_found",
            PREPARING: "preparing",
            TRANSCODING: "transcoding",
            QUEUED: "queued"
        }
    },
    368: function(e, t, n) {
        "use strict";

        function i() {
            var e = this._callout;
            e && (this.stopListening(e), this._callout = null)
        }
        var r = n(3).isFunction,
            o = n(3).find;
        e.exports = new(n(21))({
            requirePrototype: n(22).View.prototype,
            _callout: null,
            applyTo: function(e, t) {
                var a = Array.isArray(t) ? t : [t];
                this.extend(e, {
                    showCallout: function() {
                        var e = this,
                            t = o(a, function(t) {
                                var i = t.id,
                                    r = t.displayCondition,
                                    o = void 0 === r ? function() {
                                        return !0
                                    } : r;
                                return n(1394).shouldDisplay(i) && o.call(e)
                            });
                        if (t) {
                            var s = t.id,
                                l = t.elSelector,
                                u = t.viewOptions,
                                c = void 0 === u ? {} : u,
                                d = l ? this.$(l) : this.$el;
                            if (d.length) {
                                var p = r(c) ? c.call(this) : c;
                                this._callout = n(1394).display(s, d, {
                                    viewOptions: p
                                }), this.listenTo(this._callout, "closed overlay:closed", i)
                            }
                        }
                    }
                })
            },
            after: {
                renderDecorate: function() {
                    this.showCallout()
                },
                dispose: function() {
                    this._callout && (this._callout.disposed || this._callout.close(), i.call(this))
                }
            }
        })
    },
    369: function(e, t, n) {
        "use strict";
        e.exports = {
            401: function(e) {
                n(61).isLoggedIn() && n(61).logout()
            },
            429: function(e) {
                var t = n(129).fromSpamWarning(e);
                t && (n(56).trigger("spam-warning", t), t.release())
            },
            422: function(e) {
                var t = void 0;
                try {
                    t = JSON.parse(e.responseText).errors[0].error_message
                } catch (i) {
                    t = null
                }
                n(56).trigger("error:ajax", t, e)
            }
        }
    },
    370: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return T[e](t)
        }

        function r() {
            return E
        }

        function o(e, t) {
            return A.getOrderedActions().filter(t).filter(n(3).partial(i, n(3), e))
        }

        function a(e, t, i) {
            var r = A.getOrderedActions(),
                o = r.slice(0, t),
                a = n(3).partition(e, function(e) {
                    return n(3).contains(o, e)
                }),
                s = a[0],
                l = a[1];
            return l.length >= i ? {
                primary: s,
                overflow: l
            } : {
                primary: s.concat(l),
                overflow: []
            }
        }

        function s(e) {
            return function(t) {
                return e(d(t) ? t.sound : t)
            }
        }

        function l(e) {
            return c(e) || u(e)
        }

        function u(e) {
            return e instanceof n(85)
        }

        function c(e) {
            return e instanceof n(67)
        }

        function d(e) {
            return e instanceof n(218)
        }

        function p(e) {
            return n(62).getCurrentQueueItem() === e
        }

        function h(e) {
            return f(e) && !g(e)
        }

        function f(e) {
            return l(e) && !e.isDisabled()
        }

        function g(e) {
            return l(e) && e.isProcessing()
        }

        function m(e) {
            return l(e) && e.isPublic()
        }

        function v(e) {
            return l(e) && n(54).get("me").owns(e)
        }

        function _(e) {
            return l(e) && e.getNumSounds() > 0
        }

        function y(e) {
            return l(e) && !!e.get("purchase_url")
        }

        function b(e) {
            return c(e) && n(54).get("me").canDownload(e)
        }

        function w(e) {
            return l(e) && e.isBlacklisted()
        }

        function x(e) {
            return l(e) && e.isDisabled()
        }

        function k(e) {
            return function() {
                return !e.apply(void 0, arguments)
            }
        }

        function S() {
            for (var e = arguments.length, t = Array(e), i = 0; e > i; i++) t[i] = arguments[i];
            return function() {
                for (var e = arguments.length, i = Array(e), r = 0; e > r; r++) i[r] = arguments[r];
                return n(3).every(t, function(e) {
                    return e.apply(void 0, i)
                })
            }
        }

        function C() {
            for (var e = arguments.length, t = Array(e), i = 0; e > i; i++) t[i] = arguments[i];
            return function() {
                for (var e = arguments.length, i = Array(e), r = 0; e > r; r++) i[r] = arguments[r];
                return n(3).any(t, function(e) {
                    return e.apply(void 0, i)
                })
            }
        }
        var T = {
                like: s(S(h, m)),
                repost: s(S(h, m, k(v))),
                addToPlaylist: s(S(h, c, C(m, v))),
                addToNextUp: C(d, h),
                removeFromQueue: S(d, k(p)),
                buy: s(S(_, y)),
                share: s(S(h, _, C(m, v))),
                download: s(S(h, b)),
                "delete": s(S(v, k(w))),
                edit: s(S(v, k(x))),
                startStation: s(S(h, c, m, k(w))),
                goToStats: S(v, c, h)
            },
            E = ["like", "repost", "share", "edit", "addToNextUp", "removeFromQueue", "addToPlaylist", "buy", "goToStats", "download", "startStation", "delete"],
            A = e.exports = {
                getActionSet: o,
                overflowActions: a,
                getOrderedActions: r
            }
    },
    371: function(e, t, n) {
        "use strict";

        function i() {
            o()
        }

        function r(e) {
            a(e.sound)
        }

        function o() {
            var e = void 0;
            e = u && c.withoutSuffix ? u : u ? n(50).t("[[[pageTitle]]] on SoundCloud", {
                pageTitle: u
            }) : n(50).t("SoundCloud – Hear the world’s sounds"), h._setTitle(e)
        }

        function a(e) {
            function t() {
                if (!e.isPaused()) {
                    var t = e.playlist;
                    t ? l(t, e) : s(e)
                }
            }
            e && !e.getMonetizableTrack() && (e.attrExists(["title", "user"]) ? t() : e.fetch().done(t))
        }

        function s(e) {
            var t = e.get("title"),
                i = e.get("user").username,
                r = p + n(50).t("[[[soundTitle]]] by [[[artist]]]", {
                    soundTitle: t,
                    artist: i
                });
            h._setTitle(r)
        }

        function l(e, t) {
            var i = t.get("title"),
                r = e.get("title"),
                o = p + n(50).t("[[[soundTitle]]] in [[[playlistTitle]]]", {
                    soundTitle: i,
                    playlistTitle: r
                });
            h._setTitle(o)
        }
        var u = void 0,
            c = void 0,
            d = !1,
            p = n(106).audioTabIndicator ? "" : "▶ ",
            h = e.exports = {
                initialize: function() {
                    d || (d = !0, n(56).on("audio:play", r).on("audio:pause", i))
                },
                deinitialize: function() {
                    d && (d = !1, n(56).off("audio:play", r).off("audio:pause", i))
                },
                set: function(e, t) {
                    var i = n(62).getCurrentSound(),
                        r = !(i && i.isPlaying());
                    u = e, c = t || {}, r && o()
                },
                update: function() {
                    a(n(62).getCurrentSound())
                },
                _setTitle: function(e) {
                    window.document.title = e.toString()
                }
            }
    },
    372: function(e, t, n) {
        "use strict";
        var i = n(3).object(["getSourceInfo"].map(function(e) {
            return [e, function() {
                var t;
                return (t = this.sources[0])[e].apply(t, arguments)
            }]
        }));
        e.exports = new(n(21))({
            applyTo: function(e, t) {
                var r = t.fields,
                    o = t.mixins,
                    a = void 0 === o ? [] : o,
                    s = t.protoProps,
                    l = t.staticProps,
                    u = void 0;
                e.getFilterClass = function() {
                    if (!u) {
                        var t;
                        u = (t = n(158)).extend.apply(t, [n(328).withOptions({
                            fields: r
                        })].concat(a, [n(3).assign({
                            model: e.prototype.model,
                            setupSources: function() {
                                return [new e(null, this.options)]
                            }
                        }, i, s), n(3).assign({
                            hashFn: e.hashFn
                        }, l)]))
                    }
                    return u
                }
            }
        })
    },
    373: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            _editState: n(144).NONE,
            override: {
                isEditing: function() {
                    return this._editState === n(144).EDITING
                },
                isSaving: function() {
                    return this._editState === n(144).SAVING
                },
                isCanceling: function() {
                    return this._editState === n(144).CANCELING
                },
                getEditState: function() {
                    return this._editState
                }
            },
            setEditState: function(e, t) {
                var n = this._editState;
                return n !== e && (this._editState = e, this.trigger("change:editState", this, e, n, t || {})), this
            }
        })
    },
    374: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                this.resetValues(), this.broadcastSuccess(), this.clearSaveHistory(), this.trigger(e)
            }

            function r(e) {
                this._failedSaves = l(e), this._completeSaves = this._completeSaves.concat(u(e))
            }

            function o(e, t) {
                var n = this;
                return t.then(function() {
                    return e.call(n).then(n.onSaved.bind(n), n.onSaveFailed.bind(n))
                })
            }

            function a() {
                return this.validate().then(function(e) {
                    return e ? void 0 : n(55).defer().reject()
                })
            }

            function s(e) {
                var t = this,
                    i = this.getAttributesToBeSaved(e),
                    r = e.map(function(e) {
                        return t.saveSound(e, i[e.id])
                    });
                return n(55).mapEither(function() {
                    return n(3).flatten(arguments, !0)
                }, n(55).settled(r))
            }

            function l(e) {
                return n(3).reject(e, function(e) {
                    return e.isSuccess
                })
            }

            function u(e) {
                return n(3).filter(e, function(e) {
                    return e.isSuccess
                })
            }

            function c(e) {
                var t = this.getRequiredModelAttributes().map(function(e) {
                    return "change:" + e
                });
                this._failedSaves = [], this._completeSaves = [], this._sounds = e.map(function(e) {
                    var i = new(n(67))({
                        id: e
                    });
                    return this.addSubmodel(i), this.listenTo(i, t.join(" "), d), i
                }, this);
                var i = f.call(this);
                i.length ? p.call(this, i) : h.call(this)
            }

            function d() {
                this.isDirty() || h.call(this)
            }

            function p(e) {
                var t = this;
                return n(55).settled(e.map(function(e) {
                    return e.fetch({
                        attrs: t.getRequiredModelAttributes()
                    })
                }))
            }

            function h() {
                var e = this.getAttributesFromModels();
                e && this.set(e)
            }

            function f() {
                return n(3).compact(this.getSounds().map(function(e) {
                    var t = !e.attrExists(this.getRequiredModelAttributes());
                    return t ? e : null
                }, this))
            }
            var g = {
                    "default": "save",
                    save: function() {
                        return o.call(this, this.saveTracks, a.call(this))
                    },
                    retry: function() {
                        return o.call(this, this.retryTracks, a.call(this))
                    },
                    cancel: function() {
                        this.cancel()
                    }
                },
                m = {
                    save: {
                        label: n(50).t("Save"),
                        action: "save"
                    },
                    retry: {
                        label: n(50).t("Retry"),
                        action: "retry"
                    },
                    cancel: {
                        label: n(50).t("Cancel"),
                        action: "cancel"
                    },
                    close: {
                        label: n(50).t("Close"),
                        action: "cancel"
                    }
                };
            e.exports = new(n(21))(n(173), {
                requirePrototype: n(78).prototype,
                applyTo: function(e) {
                    e.constructor.hashFn = function(e, t) {
                        return e.resource_id || e.id || t && (t.resource_id || t.soundIds.join("_")) || null
                    }, e.buttons = t.extend(!0, {}, m, e.buttons || {}), e.actions = n(3).defaults(e.actions || {}, g)
                },
                before: {
                    setup: function(e, t) {
                        c.call(this, t.soundIds)
                    }
                },
                requires: ["getAttributesFromModels", "getAttributesToBeSaved"],
                defaults: {
                    getRequiredModelAttributes: function() {
                        return []
                    },
                    broadcastSuccess: function() {
                        this._completeSaves.length > 0 && n(56).trigger("multi-track:saved", {
                            soundSaves: this._completeSaves
                        })
                    },
                    setSoundAttributes: function(e, t) {
                        e.set(t)
                    },
                    saveSound: function(e, t) {
                        var i = e.createSnapshot(n(3).keys(t));
                        return this.setSoundAttributes(e, t), e.save().then(function() {
                            return {
                                sound: e,
                                isSuccess: !0
                            }
                        }, function() {
                            return i.rollback(), {
                                sound: e,
                                isSuccess: !1
                            }
                        })
                    },
                    getInitialValues: function() {
                        return this.getAttributesFromModels()
                    },
                    resetValues: function() {
                        var e = this.getInitialValues();
                        this.set(e), this.markFieldsClean()
                    }
                },
                _sounds: null,
                _failedSaves: null,
                _completeSaves: null,
                getSounds: function() {
                    return this._sounds
                },
                saveTracks: function() {
                    return s.call(this, this.getSounds())
                },
                retryTracks: function() {
                    return s.call(this, n(3).pluck(this._failedSaves, "sound"))
                },
                onSaved: function(e) {
                    r.call(this, e), i.call(this, "allSaved")
                },
                onSaveFailed: function(e) {
                    r.call(this, e), this.trigger("someFailed", {
                        failedSounds: this._failedSaves
                    })
                },
                cancel: function() {
                    i.call(this, "canceled")
                },
                clearSaveHistory: function() {
                    this._failedSaves = [], this._completeSaves = []
                },
                reduceSounds: function(e) {
                    var t = this.getSounds();
                    return t.length ? n(3).reduce(e, function(e, i, r) {
                        var o = i(t[0]),
                            a = n(3).some(t, function(e) {
                                return !n(3).isEqual(i(e), o)
                            });
                        return e[r] = a ? null : o, e
                    }, {}) : {}
                }
            })
        }).call(t, n(1))
    },
    376: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            _resetOrder: null,
            _originalOrder: null,
            requires: ["getCurrentOrder", "reorder", "resetOrder", "saveOrder"],
            around: {
                saveOrder: function(e, t) {
                    var i = n(55).defer().always(this.setEditState.bind(this, n(144).NONE));
                    return this.setEditState(n(144).SAVING), n(55).all([e(t)]).done(i.resolve).fail(i.reject), this._originalOrder = null, i
                },
                resetOrder: function(e, t) {
                    var i = n(55).defer().always(this.setEditState.bind(this, n(144).NONE));
                    return this.setEditState(n(144).CANCELING), n(3).isEqual(this.getOriginalOrder(), this.getCurrentOrder()) ? i.resolve() : (this instanceof n(70) && (this.next_href = null), n(55).all([e(t)]).done(i.resolve).fail(i.reject)), i
                }
            },
            saveResetOrder: function() {
                this._resetOrder = this.getCurrentOrder(), this._originalOrder = this._originalOrder || this._resetOrder
            },
            getResetOrder: function() {
                return this._resetOrder || []
            },
            getOriginalOrder: function() {
                return this._originalOrder
            }
        })
    },
    385: function(e, t, n) {
        "use strict";

        function i(e) {
            e.length && (this.add(e, {
                at: 0
            }), this.trigger("new-data", e))
        }

        function r(e, t) {
            this.trigger("change:queue-size", this, t)
        }
        e.exports = n(70).extend({
            notificationType: null,
            queue: null,
            initialize: function() {
                var e, t = this.notificationType;
                n(70).prototype.initialize.apply(this, arguments), e = n(130)[t], this.baseUrl = e.get("baseUrl"), this.queue = new(n(292))({
                    type: t
                }), this.queue.on("data", i, this).on("change:size", r, this)
            },
            fetchNewItems: function() {
                this.queue.fetchQueuedItems()
            },
            markAsRead: function(e) {
                var t = this.at(0);
                !e && t && (e = t.getUuid ? t.getUuid() : t.get("uuid")), e && this.queue.markAsRead(e)
            }
        }, {
            onCleanup: function(e) {
                e.queue.off("data", i, e).off("change:size", r, e).release()
            }
        })
    },
    386: function(e, t, n) {
        "use strict";

        function i(e) {
            return function(t) {
                return t[v] === e
            }
        }

        function r(e, t) {
            for (; e.length > c;) {
                var n = e.shift();
                e.some(i(n[v])) || t.unset(n[v], m)
            }
            t.set("log", e)
        }

        function o(e, t, n, i) {
            e.has(t) || e.set(t, [n, i], m)
        }

        function a(e, t) {
            var n = e.map[t[v]],
                i = e.result.length;
            if (void 0 !== n) {
                var r = e.result[i - n - 1];
                r[_] += t[_], r[y] = r[y] || t[y]
            } else e.map[t[v]] = i, e.result.unshift(t.slice());
            return e
        }

        function s() {
            T._persistent.reset(), T._session.reset()
        }

        function l(e, t) {
            return e / t >= p
        }

        function u(e) {
            var t = this.get(e[v]);
            return n(3).object(Object.keys(k).concat(Object.keys(S)), e.concat(t))
        }
        var c = 250,
            d = 2e3,
            p = .25,
            h = null,
            f = null,
            g = null,
            m = {
                dontPersist: !0
            },
            v = 0,
            _ = 1,
            y = 2,
            b = 3,
            w = 0,
            x = 1,
            k = {
                id: v,
                playTime: _,
                userInitiated: y,
                timestamp: b
            },
            S = {
                duration: w,
                userId: x
            },
            C = {
                field: null,
                from: "global",
                id: null,
                unique: !1,
                playState: null,
                userInitiated: null,
                filter: null,
                newestFirst: !1,
                limit: !1
            };
        n(56).on("connect:logout", s);
        var T = e.exports = {
            _persistent: new(n(93))("play-log"),
            _session: new(n(266)),
            addSound: function(e, t) {
                h && this.writeToLog(), h = e, f = e.getListenTime(), g = t || {}, e.on("pause", this.writeToLog, this).hold()
            },
            select: function(e) {
                e = n(3).assign({}, C, e);
                var t = this["session" === e.from ? "_session" : "_persistent"],
                    r = t.get("log") || [];
                return e.id ? r = r.filter(i(e.id)) : e.userId && (r = r.filter(function(n) {
                    return t.get(n[v])[x] === e.userId
                })), e.unique && (r = r.reduceRight(a, {
                    map: {},
                    result: []
                }).result), r = r.filter(function(n) {
                    if (null != e.userInitiated && n[y] != e.userInitiated) return !1;
                    if ("played" === e.playState && !l(n[_], t.get(n[v])[w])) return !1;
                    if (e.filter) {
                        var i;
                        return (i = e).filter.apply(i, n)
                    }
                    return !0
                }), e.newestFirst && r.reverse(), e.limit && r.length > e.limit && (r = r.slice(0, e.limit)), r = e.field ? n(3).pluck(r, k[e.field]) : r.map(u, t)
            },
            count: function(e) {
                return this.select(e).length
            },
            numSessionPlays: function() {
                return this.count({
                    from: "session",
                    unique: !0,
                    playState: "played"
                })
            },
            getPlayedIds: function() {
                return this.select({
                    field: "id",
                    from: "persistent",
                    unique: !0,
                    playState: "played"
                })
            },
            writeToLog: function() {
                if (h) {
                    var e = Math.floor(h.getListenTime() - f),
                        t = T._persistent,
                        n = T._session,
                        i = h.id,
                        a = h.getMediaDuration();
                    if (e >= Math.min(a, d)) {
                        var s = t.get("log") || [],
                            l = n.get("log") || [],
                            u = h.get("user_id");
                        o(t, i, a, u), o(n, i, a, u);
                        var c = [i, e, g.userInitiated ? 1 : 0, Date.now()];
                        s.push(c), l.push(c), r(s, t), r(l, n)
                    }
                    h.off("pause", this.writeToLog, this).release(), h = f = null
                }
            }
        }
    },
    387: function(e, t) {
        "use strict";
        e.exports = {
            IN_USE: "in_use",
            RESERVED: "reserved",
            AVAILABLE: "available"
        }
    },
    388: function(e, t) {
        "use strict";
        e.exports = {
            EMAIL: "email",
            PERMALINK: "permalink"
        }
    },
    389: function(e, t, n) {
        "use strict";

        function i(e) {
            this.set("transfer", new(n(621))({
                sampleSize: 50
            })), this.get("transfer").setTotal(e.size), this.set("transcoding", new(n(621))({
                sampleSize: 10,
                totalSize: 100
            }))
        }

        function r() {
            this._uploadRequest && this._uploadRequest.abort(), this._transcodingStatus && this._transcodingStatus.abort()
        }

        function o(e) {
            var t = this.get("transfer");
            this._s3key = e, this.set("status", n(97).TRANSCODING), t.add(t.getTotalSize()), n(58).trackUploadFunnel("upload_done"), this.get("transcoding").setTotal(0), this._transcodingStatus = new(n(1869))(e).done(l.bind(this)).fail(u.bind(this)).progress(c.bind(this))
        }

        function a() {
            this.set("status", n(97).FAILED), n(58).trackUploadFunnel(["failed", "uploading"])
        }

        function s(e) {
            this.get("transfer").setTotal(e.total).add(e.loaded)
        }

        function l() {
            this.get("transcoding").setTotal(100).add(100), this.set("status", n(97).COMPLETE), n(58).trackUploadFunnel("complete")
        }

        function u() {
            this.get("transcoding").setTotal(100), this.set("status", n(97).FAILED), n(58).trackUploadFunnel(["failed", "transcoding"])
        }

        function c(e) {
            this.get("transcoding").setTotal(100).add(e)
        }
        var d = /\.(aif|aiff|m4a|caf|flac|wav)$/i,
            p = e.exports = n(64).extend({
                resource_type: "single-audio-upload",
                url: null,
                _uploadRequest: null,
                _transcodingStatus: null,
                _s3key: null,
                hasDataForView: function() {
                    return !0
                },
                setup: function(e) {
                    i.call(this, e.file), this.set({
                        status: n(97).QUEUED,
                        hasBeenSaved: !1
                    })
                },
                upload: function() {
                    return this._uploadRequest || (this.set("status", n(97).UPLOADING), this._uploadRequest = (new(n(1441))).upload(this.get("file")).done(o.bind(this)).fail(a.bind(this)).progress(s.bind(this))), this._uploadRequest
                },
                remove: function() {
                    r.call(this), this.destroy(), p.removeInstance(this)
                },
                getS3Key: function() {
                    return this._s3key
                },
                getFileName: function() {
                    return this.get("file").name
                },
                isHQUpload: function() {
                    return d.test(this.getFileName())
                }
            }, {
                hashFn: function(e, t) {
                    return t && t.resource_id || e && (e.file ? null : e.id || e.resource_id) || null
                }
            })
    },
    440: function(e, t) {
        "use strict";
        e.exports = {
            plural: function(e, t, n) {
                return n = "string" == typeof n ? n : t + "s", 1 === e ? t : n
            },
            possessive: function(e) {
                return e + "’s"
            },
            capitalize: function(e) {
                return "string" != typeof e ? "" : e.split(" ").map(function(e) {
                    return e.charAt(0).toUpperCase() + e.substr(1)
                }).join(" ")
            }
        }
    },
    441: function(e, t, n) {
        "use strict";

        function i(e, t, i) {
            if (i.indexOf(" ") > -1) return i;
            if (i !== i.toUpperCase()) {
                var r = i.replace(/[.,#~_-]|([a-z])([A-Z])/g, function(e, t, n) {
                    return t ? t + " " + n : " "
                });
                if (i !== r) return n(254).titleCase(r)
            }
            var o = i.toLowerCase();
            return e && o.indexOf(e.toLowerCase()) > -1 || t && o.indexOf(t.toLowerCase()) > -1 || o.indexOf("user") > -1 ? e + " " + t : i
        }
        e.exports = {
            get: function(e, t) {
                var i = e.username || e.title || e.name;
                return t === !0 && (i = n(440).possessive(i)), i
            },
            getTitleDisplayName: function(e, t, n) {
                var r = i(e, t, n);
                return r !== n ? n + " | " + r : n
            }
        }
    },
    474: function(t, n, i) {
        (function(t) {
            function n() {
                var e = {};
                e[o("0x3", "8D(o")] = function(e, t) {
                    return e === t
                }, e[o("0x4", "!jyg")] = o("0x5", "0L7*"), e[o("0x6", "wmzV")] = function(e, t) {
                    return e !== t
                }, e[o("0x7", "CSS#")] = o("0x8", "8n1P"), e[o("0x9", "#!j#")] = o("0xa", "CD3B"), e[o("0xb", "#!j#")] = function(e, t) {
                    return e !== t
                }, e[o("0xc", "#!j#")] = o("0xd", "$hw4"), e[o("0xe", "x11N")] = o("0xf", "MuVQ"), e[o("0x10", "qNzm")] = function(e, t) {
                    return e === t
                }, e[o("0x11", "@6%6")] = o("0x12", "@6%6"), e[o("0x13", "3D!n")] = o("0x14", "DpXY"), e[o("0x15", "BT*F")] = o("0x16", "!xwE"), e[o("0x17", "H(is")] = o("0x18", "Nnwn"), e[o("0x19", "qAF%")] = o("0x1a", "5x)e"), e[o("0x1b", "B&5z")] = o("0x1c", "Isrq"), e[o("0x1d", "Ov4^")] = o("0x1e", "8n1P"), e[o("0x1f", "wmzV")] = o("0x20", "dnpr"), e[o("0x21", "HKF2")] = o("0x22", "$hw4"), e[o("0x23", "Jq2i")] = o("0x24", "s[MW"), e[o("0x25", "!jyg")] = o("0x26", "x11N"), s = window[o("0x27", "ARY9")][o("0x28", "lkyx")]();
                var t = function(t) {
                    var n = {};
                    if (n[o("0x29", "Lr)Z")] = function(t, n) {
                            return e.aomMg(t, n)
                        }, n[o("0x2a", "Jq2i")] = e.wGttF, e[o("0x2b", "@6%6")](e[o("0x2c", "!xwE")], e[o("0x2d", "Nnwn")])) {
                        try {
                            if (e[o("0x2e", "!jyg")](e[o("0x2f", "dnpr")], e[o("0x30", "qNzm")])) {
                                if (e[o("0x31", "H(is")](t[e[o("0x32", "ugCt")]], !1)) {
                                    if (e[o("0x33", "0L7*")](e[o("0x34", "q!I4")], e[o("0x35", "rkwy")])) return;
                                    plugins += 1
                                }
                            } else plugins += 2
                        } catch (i) {}
                        l += 1
                    } else if (n[o("0x36", "Ov4^")](t[n[o("0x37", "a7t3")]], !1)) return
                };
                window[o("0x38", "0L7*")](e[o("0x39", "eovm")], t), window[o("0x3a", "qAF%")](e[o("0x3b", "Jq2i")], t), window[o("0x3c", "Isrq")](e[o("0x3d", "dqi9")], function() {
                    e[o("0x2e", "!jyg")](e[o("0x3e", "B&5z")], e[o("0x3f", "Nnwn")]) ? u += 1 : d += 1
                }), window[o("0x40", "%nRY")](e[o("0x41", "a7t3")], function() {
                    e[o("0x42", "qAF%")](e[o("0x43", "Isrq")], e[o("0x44", "ia5n")]) ? plugins += 4 : c += 1
                }), window[o("0x45", "Ov4^")](e[o("0x46", "yPAB")], function() {
                    var t = {};
                    t[o("0x47", "!xwE")] = e.iZdZq, e[o("0x48", "0L7*")](e[o("0x49", "CSS#")], e[o("0x4a", "Ov4^")]) ? score += +t[o("0x4b", "H(is")] : d += 1
                })
            }

            function i(t, n, i, r) {
                var p = {};
                p[o("0x4c", "Jq2i")] = function(e, t) {
                    return e * t
                }, p[o("0x4d", "U3R1")] = o("0x4e", "eovm"), p[o("0x4f", "CSS#")] = function(e, t) {
                    return e === t
                }, p[o("0x50", "Nnwn")] = o("0x51", "H(is"), p[o("0x52", "Nnwn")] = o("0x53", "%nRY"), p[o("0x54", "Isrq")] = o("0x55", "Lr)Z"), p[o("0x56", "3D!n")] = o("0x57", "U3R1"), p[o("0x58", "$K%5")] = function(e, t) {
                    return e + t
                }, p[o("0x59", "!jyg")] = function(e, t) {
                    return e >> t
                }, p[o("0x5a", "dqi9")] = function(e, t) {
                    return e << t
                }, p[o("0x5b", "rkwy")] = function(e, t) {
                    return e & t
                }, p[o("0x5c", "TJJq")] = o("0x5d", "BT*F"), p[o("0x5e", "8n1P")] = function(e, t) {
                    return e === t
                }, p[o("0x5f", "$hw4")] = o("0x60", "6F@("), p[o("0x61", "6F@(")] = function(e, t) {
                    return e !== t
                }, p[o("0x62", "rkwy")] = o("0x63", "0L7*"), p[o("0x64", "qcO#")] = function(e, t) {
                    return e === t
                }, p[o("0x65", "%nRY")] = o("0x66", "CD3B"), p[o("0x67", "!jyg")] = function(e, t) {
                    return e !== t
                }, p[o("0x68", "q!I4")] = o("0x69", "qcO#"), p[o("0x6a", "qNzm")] = function(e, t) {
                    return e === t
                }, p[o("0x6b", "eovm")] = o("0x6c", "U3R1"), p[o("0x6d", "ugCt")] = function(e, t) {
                    return e === t
                }, p[o("0x6e", "$K%5")] = o("0x6f", "6F@("), p[o("0x70", "$hw4")] = o("0x71", "$K%5"), p[o("0x72", "!xwE")] = o("0x73", "ODgg"), p[o("0x74", "etoi")] = function(e, t) {
                    return e === t
                }, p[o("0x75", "ODgg")] = o("0x76", "4bXC"), p[o("0x77", "wmzV")] = function(e, t) {
                    return e === t
                }, p[o("0x78", "BT*F")] = o("0x79", "MuVQ"), p[o("0x7a", "4bXC")] = o("0x7b", "CD3B"), p[o("0x7c", "dqi9")] = function(e, t) {
                    return e === t
                }, p[o("0x7d", "s[MW")] = o("0x7e", "eovm"), p[o("0x7f", "0L7*")] = o("0x80", "ia5n"), p[o("0x81", "@6%6")] = function(e, t) {
                    return e === t
                }, p[o("0x82", "MuVQ")] = o("0x83", "Lr)Z"), p[o("0x84", "qNzm")] = o("0x85", "Lr)Z"), p[o("0x86", "ugCt")] = o("0x87", "%nRY"), p[o("0x88", "Nnwn")] = function(e, t) {
                    return e === t
                }, p[o("0x89", "8n1P")] = o("0x8a", "$hw4"), p[o("0x8b", "fuCI")] = function(e, t) {
                    return e === t
                }, p[o("0x8c", "Jq2i")] = o("0x8d", "6F@("), p[o("0x8e", "0L7*")] = o("0x8f", "Isrq"), p[o("0x90", "U3R1")] = o("0x91", "dqi9"), p[o("0x92", "fuCI")] = o("0x93", "B&5z"), p[o("0x94", "ia5n")] = o("0x95", "DpXY"), p[o("0x96", "dqi9")] = function(e, t) {
                    return e !== t
                }, p[o("0x97", "x11N")] = o("0x98", "etoi"), p[o("0x99", "8n1P")] = o("0x9a", "ugCt"), p[o("0x9b", "3D!n")] = o("0x9c", "$hw4"), p[o("0x9d", "ugCt")] = o("0x9e", "DpXY"), p[o("0x9f", "U3R1")] = function(e, t) {
                    return e === t
                }, p[o("0xa0", "qAF%")] = o("0xa1", "TJJq"), p[o("0xa2", "qcO#")] = o("0xa3", "!xwE"), p[o("0xa4", "Lr)Z")] = o("0xa5", "@6%6"), p[o("0xa6", "Nnwn")] = o("0xa7", "6F@("), p[o("0xa8", "Lr)Z")] = o("0xa9", "Ov4^"), p[o("0xaa", "ugCt")] = o("0xab", "DpXY"), p[o("0xac", "Lr)Z")] = o("0xad", "8n1P"), p[o("0xae", "5x)e")] = o("0xaf", "CSS#"), p[o("0xb0", "@6%6")] = o("0xb1", "Nnwn"), p[o("0xb2", "rkwy")] = o("0xb3", "Nnwn"), p[o("0xb4", "6F@(")] = o("0xb5", "!xwE"), p[o("0xb6", "lkyx")] = function(e, t) {
                    return e !== t
                }, p[o("0xb7", "%u32")] = o("0xb8", "8D(o"), p[o("0xb9", "TJJq")] = o("0xba", "qcO#"), p[o("0xbb", "s[MW")] = o("0xbc", "qcO#"), p[o("0xbd", "Nnwn")] = o("0xbe", "ugCt"), p[o("0xbf", "ia5n")] = function(e, t) {
                    return e !== t
                }, p[o("0xc0", "Jq2i")] = o("0xc1", "H(is"), p[o("0xc2", "eovm")] = o("0xc3", "dnpr"), p[o("0xc4", "qcO#")] = function(e, t) {
                    return e === t
                }, p[o("0xc5", "TJJq")] = o("0xc6", "qAF%"), p[o("0xc7", "DpXY")] = o("0xc8", "qAF%"), p[o("0xc9", "U3R1")] = o("0xca", "s[MW"), p[o("0xcb", "8D(o")] = function(e, t) {
                    return e === t
                }, p[o("0xcc", "!xwE")] = o("0xcd", "H(is"), p[o("0xce", "@6%6")] = o("0xcf", "$hw4"), p[o("0xd0", "8n1P")] = o("0xd1", "Isrq"), p[o("0xd2", "BT*F")] = o("0xd3", "Ov4^"), p[o("0xd4", "B&5z")] = o("0xd5", "6F@("), p[o("0xd6", "$hw4")] = o("0xd7", "0L7*"), p[o("0xd8", "x11N")] = o("0xd9", "%nRY"), p[o("0xda", "Nnwn")] = o("0xdb", "HKF2"), p[o("0xdc", "$K%5")] = o("0xdd", "lkyx"), p[o("0xde", "yPAB")] = function(e, t) {
                    return e !== t
                }, p[o("0xdf", "dqi9")] = o("0xe0", "lkyx"), p[o("0xe1", "CD3B")] = o("0xe2", "qAF%"), p[o("0xe3", "CSS#")] = function(e, t) {
                    return e - t
                }, p[o("0xe4", "CD3B")] = o("0xe5", "H(is"), p[o("0xe6", "!xwE")] = o("0xe7", "lkyx"), p[o("0xe8", "eovm")] = function(e, t) {
                    return e * t
                }, p[o("0xe9", "CSS#")] = o("0xea", "eovm"), p[o("0xeb", "5x)e")] = o("0xec", "%nRY"), p[o("0xed", "ODgg")] = o("0xee", "s[MW"), p[o("0xef", "qNzm")] = o("0xf0", "CD3B"), p[o("0xf1", "s[MW")] = function(e, t) {
                    return e + t
                }, p[o("0xf2", "dqi9")] = function(e, t) {
                    return e + t
                }, p[o("0xf3", "eovm")] = function(e, t) {
                    return e + t
                }, p[o("0xf4", "B&5z")] = function(e, t) {
                    return e + t
                }, p[o("0xf5", "DpXY")] = function(e, t) {
                    return e + t
                }, p[o("0xf6", "dqi9")] = function(e, t) {
                    return e + t
                }, p[o("0xf7", "H(is")] = function(e, t) {
                    return t > e
                }, p[o("0xf8", "!jyg")] = function(e, t) {
                    return e + t
                }, p[o("0xf9", "ugCt")] = function(e, t) {
                    return e >> t
                }, p[o("0xfa", "lkyx")] = function(e, t) {
                    return e << t
                }, p[o("0xfb", "8n1P")] = function(e, t) {
                    return e + t
                };
                var h = window[o("0xfc", "!jyg")][o("0xfd", "Jq2i")],
                    f = 1;
                if (window[o("0xfe", "fuCI")][p[o("0xff", "TJJq")]] && (f += p[o("0x100", "yPAB")](p[o("0x101", "$K%5")], p[o("0x102", "dnpr")]) ? 64 : 2), window[o("0x103", "yPAB")][o("0x104", "x11N")][o("0x105", "5x)e")](p[o("0x106", "q!I4")]) && (p[o("0x107", "BT*F")](p[o("0x108", "DpXY")], p[o("0x109", "CSS#")]) ? f += 4 : _ = p[o("0x10a", "a7t3")](window[o("0x10b", "s[MW")][o("0x10c", "5x)e")], window[o("0x10d", "etoi")][o("0x10e", "eovm")])), window[o("0x10f", "$K%5")][p[o("0x110", "3D!n")]] && (p[o("0x111", "q!I4")](p[o("0x112", "U3R1")], p[o("0x113", "dqi9")]) ? m += 8 : f += 16), p[o("0x114", "$K%5")](window[o("0x115", "4bXC")][o("0x116", "a7t3")], p[o("0x117", "lkyx")]) && (p[o("0x96", "dqi9")](p[o("0x118", "x11N")], p[o("0x119", "!jyg")]) ? f += 32 : b += +p[o("0x11a", "8D(o")]), p[o("0x11b", "qAF%")](window[o("0x11c", "qcO#")](p[o("0x11d", "8n1P")]), p[o("0x11e", "B&5z")]))
                    if (p[o("0x11f", "MuVQ")](p[o("0x120", "TJJq")], p[o("0x121", "x11N")])) {
                        try {
                            if (p[o("0x122", "wmzV")](e[p[o("0x123", "3D!n")]], !1)) return
                        } catch (g) {}
                        l += 1
                    } else f += 64;
                p[o("0x124", "Nnwn")](window[o("0x125", "qNzm")](p[o("0x126", "3D!n")]), p[o("0x127", "yPAB")]) && (f += p[o("0x128", "DpXY")](p[o("0x129", "ODgg")], p[o("0x12a", "ODgg")]) ? +p[o("0x12b", "0L7*")] : +p[o("0x12c", "$hw4")]), p[o("0x12d", "!jyg")](window[o("0x12e", "a7t3")](p[o("0x12f", "!xwE")]), p[o("0x130", "etoi")]) && (f += p[o("0x131", "!xwE")](p[o("0x132", "wmzV")], p[o("0x133", "dnpr")]) ? 32 : +p[o("0x134", "ia5n")]), window[p[o("0x135", "rkwy")]] && (p[o("0x136", "qcO#")](p[o("0x137", "4bXC")], p[o("0x138", "fuCI")]) ? b += 16 : f += +p[o("0x139", "#!j#")]), window[o("0x13a", "4bXC")][p[o("0x13b", "CSS#")]] && (p[o("0x13c", "BT*F")](p[o("0x13d", "qNzm")], p[o("0x13e", "BT*F")]) ? c += 1 : f += +p[o("0x13f", "BT*F")]);
                var m = 1;
                window[p[o("0x140", "8n1P")]] && (p[o("0x141", "lkyx")](p[o("0x142", "CD3B")], p[o("0x143", "ODgg")]) ? m += 2 : u += 1), p[o("0x144", "TJJq")](window[p[o("0x145", "MuVQ")]], null) && (m += (p[o("0x146", "Nnwn")](p[o("0x147", "qNzm")], p[o("0x148", "!jyg")]), 4)), window[p[o("0x149", "H(is")]] && (p[o("0x14a", "s[MW")](p[o("0x14b", "dqi9")], p[o("0x14c", "Jq2i")]) ? m += 8 : b += 32), window[p[o("0x14d", "%nRY")]] && (p[o("0x14e", "6F@(")](p[o("0x14f", "H(is")], p[o("0x150", "Jq2i")]) ? f += 4 : m += 16), window[p[o("0x151", "!jyg")]] && (p[o("0x152", "qNzm")](p[o("0x153", "ARY9")], p[o("0x154", "0L7*")]) ? m += 32 : b += 8);
                var v = p[o("0x155", "ugCt")](window[o("0x156", "MuVQ")][o("0x157", "CSS#")](), s),
                    _ = 0;
                try {
                    p[o("0x158", "qcO#")](p[o("0x159", "CSS#")], p[o("0x15a", "qAF%")]) ? _ = p[o("0x15b", "@6%6")](window[o("0x15c", "q!I4")][o("0x15d", "ia5n")], window[o("0x15e", "6F@(")][o("0x15f", "s[MW")]) : m += 32
                } catch (y) {}
                var b = +p[o("0x160", "0L7*")];
                try {
                    [][o("0x161", "TJJq")][o("0x162", "@6%6")](window[o("0x163", "lkyx")][o("0x164", "H(is")], function(e) {
                        var t = {};
                        if (t[o("0x165", "Ov4^")] = p.XCSLo, t[o("0x166", "Jq2i")] = function(e, t) {
                                return p.fepZm(e, t)
                            }, t[o("0x167", "ugCt")] = function(e, t) {
                                return p.BhilG(e, t)
                            }, t[o("0x168", "x11N")] = function(e, t) {
                                return p.Soger(e, t)
                            }, t[o("0x169", "HKF2")] = function(e, t) {
                                return p.vbdLt(e, t)
                            }, p[o("0x122", "wmzV")](p[o("0x16a", "#!j#")], p[o("0x16b", "ugCt")])) {
                            var n = e[o("0x16c", "ARY9")];
                            if (p[o("0x16d", "H(is")](n, p[o("0x16e", "dqi9")])) {
                                if (p[o("0x16f", "qNzm")](p[o("0x170", "Nnwn")], p[o("0x171", "dnpr")])) return;
                                b += 1
                            }
                            p[o("0x172", "eovm")](n, p[o("0x173", "dqi9")]) && (b += p[o("0x174", "Ov4^")](p[o("0x175", "qAF%")], p[o("0x176", "fuCI")]) ? +p[o("0x177", "TJJq")] : 2), p[o("0x178", "ia5n")](n, p[o("0x179", "DpXY")]) && (b += p[o("0x17a", "Lr)Z")](p[o("0x17b", "fuCI")], p[o("0x17c", "U3R1")]) ? 4 : 64), p[o("0x17d", "Ov4^")](n, p[o("0x17e", "H(is")]) && (p[o("0x17f", "MuVQ")](p[o("0x180", "5x)e")], p[o("0x181", "#!j#")]) ? f += +p[o("0x134", "ia5n")] : b += 8), p[o("0x182", "fuCI")](n, p[o("0x183", "%u32")]) && (p[o("0x184", "Jq2i")](p[o("0x185", "x11N")], p[o("0x186", "B&5z")]) ? b += 16 : f += +t[o("0x187", "5x)e")]), p[o("0x188", "lkyx")](n, p[o("0x189", "!xwE")]) && (p[o("0x18a", "!xwE")](p[o("0x18b", "Isrq")], p[o("0x18c", "TJJq")]) ? m += 16 : b += 32), p[o("0x18d", "a7t3")](n, p[o("0x18e", "5x)e")]) && (p[o("0x18f", "fuCI")](p[o("0x190", "H(is")], p[o("0x191", "H(is")]) ? f += 2 : b += 64), p[o("0x192", "8D(o")](n, p[o("0x193", "qAF%")]) && (p[o("0x194", "CSS#")](p[o("0x195", "3D!n")], p[o("0x196", "DpXY")]) ? b += +p[o("0x197", "@6%6")] : m += 2), p[o("0x198", "6F@(")](n, p[o("0x199", "H(is")]) && (p[o("0x19a", "wmzV")](p[o("0x19b", "ia5n")], p[o("0x19c", "HKF2")]) ? (T = t[o("0x19d", "eovm")](t[o("0x19e", "lkyx")](T, 1), t[o("0x19f", "qAF%")](t[o("0x1a0", "8D(o")](T, 1), 23)), T += C[o("0x1a1", "ia5n")](E), T &= 16777215) : b += +p[o("0x1a2", "%nRY")])
                        } else f += 16
                    })
                } catch (w) {}
                r && (h = p[o("0x1a3", "dnpr")]), r && (f = +p[o("0x1a4", "Jq2i")]), r && (m = +p[o("0x1a5", "Ov4^")]), r && (l = 42), r && (v = +p[o("0x1a6", "TJJq")]), r && (_ = p[o("0xe8", "eovm")](+p[o("0x1a7", "CSS#")], +p[o("0x1a8", "dqi9")])), r && (b = +p[o("0x1a9", "6F@(")]), r && (u = 7), r && (c = 9), r && (d = 0);
                for (var x = [m, f, v, l, _, b, u, c][o("0x1aa", "Jq2i")]("-"), k = d, S = p[o("0x1ab", "qNzm")](p[o("0x1ac", "4bXC")](p[o("0x1ad", "eovm")](p[o("0x1ae", "%u32")](p[o("0x1af", "6F@(")](p[o("0x1b0", "#!j#")](p[o("0x1b1", "8D(o")](i, a), x), h), t), n), x), i), C = window[o("0x1b2", "Isrq")](window[o("0x1b3", "U3R1")](S)), T = 8011470, E = 0; p[o("0x1b4", "4bXC")](E, C[o("0x1b5", "TJJq")]); E += 1) T = p[o("0x1b6", "TJJq")](p[o("0x1b7", "wmzV")](T, 1), p[o("0x1b8", "wmzV")](p[o("0x1b9", "CSS#")](T, 1), 23)), T += C[o("0x1ba", "U3R1")](E), T &= 16777215;
                return p[o("0x1bb", "Isrq")](p[o("0x1bc", "Jq2i")](p[o("0xf8", "!jyg")](p[o("0x1bd", "!xwE")](p[o("0x1be", "#!j#")](p[o("0x1bf", "Isrq")](a, ":"), x), ":"), T[o("0x1c0", "qNzm")](16)), ":"), k)
            }
            var r = ["IsKRJGPCgA==", "IsKww4sdOA==", "fD5swr7CncKjw65p", "wqR3ehrCkw==", "wpbCuETCpsOR", "fcK5wrfDlMOw", "wqzClmzChMOg", "woHCgnjCm8OE", "IBoRw6vDkQ==", "w5fCjMKZw5TDtw==", "OsOmw6HDmX0=", "w6ohw5fDgnQ=", "IhXDnFXCmg==", "cMK9wpheUw==", "w448VTXDvQ==", "e8KZwqXDuMOy", "WER1wp3CmA==", "YMKJw617Gg==", "V14TLzQ=", "H2kXfcOv", "wr07blNa", "KyrDhsOfwrk=", "w4BSwq1Owps=", "XsK3w4FtLg==", "wqo7QHln", "aE1WworCqA==", "Y8KRwpPDmsO8", "wqPDnz/CuMKk", "dFLCgWnDjQ==", "E2F1wr9L", "VcK6wrlP", "wq5rfw==", "wphZJsKmOg==", "wpZsRT/CtQ==", "bkUVw5DDrQ==", "dGtjwq1N", "e1DDpz/DrTs=", "NzvDpMKVQg==", "w7VSwodIwo/Ciw==", "eVgiKy0x", "b1nCh0DDiQ==", "AhnDtnPCilc7", "cF9JwrI=", "w7/CjsK3w57DoUR4XsK7", "dsKOw7NvA8KewrI=", "fcO0DwzClw==", "wq4yQ0J0", "IWp/wpdw", "UR/DhjjDnQ==", "CV3CmsKrwro=", "H8Kdw6YSOw==", "HF1vwrBL", "woPDjjzChA==", "RcKIw49dAw==", "PFEsacO+", "RMK0wr/Dv8OS", "w5o+XBTDng==", "wpNYD8Kdw50=", "wqNXw5bDusOa", "MWwSasOD", "WsOYEirCqA==", "RlwVw5jDkw==", "PMKFAmnCig==", "PADDgVXCsg==", "GivDlsKOWA==", "JDlyw5fDvw==", "BcK+AArDgg==", "O8KjEVLCvA==", "wrwuw4Uyw7w=", "UcOnOyzCig==", "R8KKw4plHg==", "cMKhwpddRQ==", "MsODVcKpAw==", "M8KXw7EhCQ==", "I8KSCHrCkw==", "PsK5w5PCtV0=", "wpAbR3R0", "cyrDtg/DvQ==", "FyTDiMOpwrI=", "MsObZ8K8KQ==", "w5rCgcKDw7bDgw==", "w5dIecOEcw==", "w5heYMObWQ==", "w67Cjg89w4M=", "FiHDrk/CgQ==", "XmwsMMO4", "E8OvU8K9MQ==", "JMKtAFvCgQ==", "RcKrw61bOw==", "fMKWw7VpDA==", "TsKhXMO/w4w=", "fXg7w6HDhg==", "woZnWgjCkg==", "UShAwqnDuw==", "KiZqw6zDng==", "S0hgwr1D", "w4BSwqdpwr8=", "X8Kpw7B4AA==", "wrDDrMKGwrNg", "CDjDtcK4Qw==", "Lm3CucKDwrg=", "wqNTw7/Dl8O+", "w4bCnMKzw6fDrg==", "TXsJw6HDmw==", "eMKUY8OCw40=", "IzrDocKTaTbCsyh/BA==", "OQ3DkcOuwrU=", "wqVeCMKlw7g=", "wrM2Y0BS", "U8OhLijCvw==", "MgPDvXLCnQ==", "wplLQyPCjw==", "IGg3dMOM", "w55ywqZhwoU=", "wrEabFs=", "ScKawqXDgcO8", "YTptwqzCgA==", "wpdOw7PDhcOO", "IMKMw5LCp1Q=", "w4VhwpxAwog=", "B8KDw6w8Jg==", "RcK+U8Odw7Q=", "w77CqQcdw7PCmcKdGA==", "wpEFw7w+w5bCm8OGSVnDqsO5AiDDhcOcw7vDkCs=", "eQNkwozChA==", "CBPDqlHCn1w=", "MjvDj1rCrQ==", "wr3Do8K2wpNX", "wpnDvsKmwoNR", "wrZmbADCsw==", "wpcDw74jw7HCkcO3flHDnQ==", "w53CiikCw5Y=", "wo04Tll3", "w7RfWcOdcw==", "EsKqw4A9JQ==", "w6zCtCY2w50=", "W8KQwobDr8OjwpDDgcOF", "Ni5Aw7wfw7pu", "w5HDnMO5VlN5wqTDgHvCjA==", "YlQsIg==", "dcKiWMOjw6Q=", "e2VxworCvQ==", "XmnCgH7DkyXDnsOlwoU=", "wofDp8KlwrJv", "wph3aTrCkg==", "LQYVw47DiQ==", "FMKaw7MyGg==", "MsObw4jDk1Q=", "OMKLw4I8PA==", "OsKJw50kKg==", "esO/OMKmeg==", "fS/Dgx7DoA==", "WsKtwqFGSw==", "dcKcwq/Dv8OB", "Yl9zwrZD", "Q1l9wo9p", "Qj1iwobDuQ==", "Cj5Sw77DhQ==", "wrjCq07CsMOg", "w4V/Q8OzZQ==", "U8KVw5duAQ==", "w50afRnDrw==", "YGU4w5rDmg==", "RcK/GA==", "NhPDvcObwrE=", "w5LCjgUkw7M=", "VsOgIhTCvw==", "JDERw5/DgcOVwr3Cv8Or", "wrrDnMKEwp9k", "wrVWK8K8w6cRw6TCqsKB", "MHfCq8KBwps=", "Z8OUNsKuU0E3", "wrEZSWR1", "elgyOTU=", "aWlRwqTCkQ==", "djfDujrDhg==", "wqnDjiXChA==", "w7/CgMK2", "KcKaGgHDjQ==", "woIRblhn", "YlZUwptA", "w7phc8OHYA==", "w6kcegHDvg==", "QXBDwqfCrw==", "wo5pB8Kew40=", "R8KLwoXDnMOc", "Z8KNw6tFDQ==", "AV55wrNe", "bXnCrmjDtg==", "eVLDgzLDkQ==", "Ijdmw7s0", "fcODISfChQ==", "UEMMN8Od", "Vn7CsEnDkDPDhMO0wq10wrkqwpjDrcKmw7Q=", "wrtWw5PDqcOY", "aFs4w4XDnTAbw7vCnitFw4zChiBpw4g=", "wpcmVV1g", "w6rCowYrw6bCncKDCcOQw7LDlMKOw64xSsKO", "LFQbXcOr", "IRnDhsOIwrE=", "w6k1aDHDhw==", "Hg3DrMOiwqgrNgxYaQBDw7tVNMOj", "Y0srC8OP", "RG0aw5nDvw==", "w57CsDMIw7s=", "FSXDkcKHQQ==", "WsOGLBjCqsKjTcOHbcOpwpXCkA9Qw41O", "w53DucOEeFA=", "w4dRfcOBdA==", "ekjCklXDsg==", "wodCWCjClA==", "fMOkGDnCjw==", "Y8Khw6l4Kw==", "wrUMZFdb", "wrIPw4YYw5k=", "w6Qhwo8=", "wphdYwbCtg==", "w64QQyTDqw==", "b8KRw5J6H8KDwrUVMQ==", "w582Qi7DnA==", "SljCug==", "w5PCsScNw4k=", "XsOJSw==", "SjJawr3DhQ==", "w4Vbwq1l", "URLDoCgu", "TkpswpLCvA==", "KkgbfsO2", "JTRUw58Z", "DjLDpkHCuA==", "wqzChkzChcOR", "CjQtw7nDjQ==", "ScOHH8K4Rg==", "w4VZwodCwofCjE3Dg8K3w5wWDMKwwpfCt8KaBEsQ", "w616wp9Jwqk=", "ATdhw5E/", "fW/ClkXDlA==", "wqF0D8K9Ng==", "NyLDpsOWwpk=", "NcOcw4vDpUjCpUbDkTBVQEbDkjzChsKFw6U=", "bVhfwonCjw==", "R1DDnALDsA==", "wqBEE8KVPw==", "dcKGwoPDtMOj", "wptSw6jDg8OL", "wroKw6s4w4TCm8KzWHzDgMOzASQ=", "HFx+wrZO", "fzLDihEN", "w4pZwpFmwrI=", "TcOZA8KnSA==", "YB7DtBc1w5gQwq0bw6jClS7DvDTCuMK+woHCrHtHf1XDlMOUw47DmMKewohuw51fQWbDvg==", "w6RcZ8O1VA==", "w5wHw7jDlFU=", "wqfDsHwTEg==", "w6s+w77DpEE=", "Wzl9wqTCncKjwqBNB8KVw7rDoMOuQ8OSWXQ=", "wr3DocKWwrZw", "wr/CsE7CgcO7", "ZsKowqFbXw==", "bQtkwr7Ctg==", "PMOVw4/DqwXCgRbDsRh2FDDDqzXChMKHwrrDnMOC", "A2sOccOo", "dHQmHxY=", "wrBTw63DqsOI", "RU3CvnXDjA==", "IgDDr8KXcw==", "RHVuwrRp", "dsK5wr56Yg==", "PMKTHBjDvyHDi8O5HMOKIUk0NEg=", "bMK2wr7DiMOA", "KMKeKx3Dsg==", "DG1+wqZ+", "MgLDpMOSwr0=", "w5IzZAfDgw==", "PRkDw43DiQ==", "ScOVKMKvHGYdw5DCm0Biw5PDgsO8aQ==", "NcKFGXXCpw==", "wpgsTG1g", "w4JywpJOwqc=", "blHConzDjA==", "w5zCogAlw7nCjMONH8Opw7LDi8KOwqY2QcOcw7Z9LQ==", "wrwBw6oIw5s=", "L24mXsOh", "OMKPPnXCvg==", "HQ3DpcOowos=", "FgDDjMKCSQ==", "TRxHw5fDkMKdWxXCq3/CpcKHKE/DnXI6wq7CqVldBC5YH8O5dcKK", "P08XX8OD", "QRfDninDuA==", "woXDkHUNFw==", "MBU2w4XDow==", "AXxvwqNqw7lbwqfCmw==", "WRZIwrzDhQ==", "SsOXN8KDaQ==", "BlR0wp5f", "GTFpw73DiQ==", "wrMpw508w7Q=", "Skgrw5fDkQ==", "Fx7DqFnCpA==", "wpdmF8K3DQ==", "w6x4d8OzYA==", "OsKNHRLDmw==", "e0pRwq5pw5w=", "w68QWwfDrg==", "w4BGwrZ5wqE=", "HcKYFBXDoQ==", "asORBx/CjA==", "Lm1ZwpZ8", "HQZTw5HDoMKaCAHCs3bCqsKDKEk=", "P8KrNznDog==", "PDAAw4nDgsORwrzCrMOq", "McOBdsKIGw==", "wqZLTi/CqA==", "dURCwrBt", "w7wmfTPDoxMQCMO+GE43aQ==", "CzJiw54A", "w5wXZwHDhg==", "w5JZwoBIwrA=", "w7dDeMOkUQ==", "w6nCjsKJw53DsA==", "AcKGw6/CjmM=", "YMK0RcOLw6xPwoB1fMOeBmRyOsOuwow=", "LSLDsUbCuA==", "woN6NcKXJw==", "YVcHLwI=", "wpVSE8KuFA==", "w6UPZhvDhQ==", "KUpowqt9w75EwrfChEHCn8OOwooSPjLDtADDry3Cq8K8", "JDHDusKWSw==", "wooCamdD", "ZcKGw4hMEA==", "wrJnw4vDtsOv", "wp5mKcK6w60Yw7nCtcKSecKxIcKuwo4Ob0ZMw54wbw==", "wptOD8KWLQ==", "NjDDpnnCig==", "fEwvw6zDnw==", "HChkw6fDhA==", "XUk+w5fDrg==", "wp0vw6oWw4c=", "fFIxBSsrODvCv28Mw6Y/wrPCvw==", "UsKubcONw7I=", "w65ASsOibQ==", "TMKQw6l/JA==", "clhwwqp4", "Y8OfIMK6WUQ4w7XDjmV/w5nDmMO6dBrDujAdw4U=", "HTgUw4/Dhw==", "w77CtRc8w4M=", "wr/CqkDCpMOb", "VsORBDzCqcKoQMObdMOywo8=", "FxvDhsOZwok=", "w4tnwrpZwo8=", "WMOyAcKyWw==", "RHvCsm3DlD8=", "TQ7DlDzDqQ==", "NA3DksOiwok=", "w7kRSBrDmg==", "Am3ClcKswpU=", "UxjDgwYQ", "w7LCh8Kzw5jDq0A=", "w7TDnMOWY1c=", "N1cSQsOs", "w7/Ct8KPw7TDoQ==", "NcO8w6zDr04=", "b08uw67Dnw==", "wqV8cDTClA==", "IMOcw7TDuVc=", "a8Kxw7xCDw==", "w4VoW8Ohcw==", "w7fCjsKFw4XDvA==", "wrFBw7/Dk8Os", "wqRjXjbCsA==", "woJxw4rDlMOuwrM=", "HMOORsKYAQ==", "S1nCscKR", "w7AGw7bDlVo=", "JQ9/fnF3", "dsKwwp7DtMOZ", "QsKGwok=", "aFYpKzU=", "OH02fsOx", "woVsw4nDh8Of", "MgXDhMOSwoA=", "GyVLw63DgQ==", "KFQaaMOz", "Z8Kww61PHg==", "Wm9OwpLCvQ==", "PXVvwqN6", "w77CnsKzw4PDog==", "Li0gw7TDqQ==", "YkNzwpfCnBjCqsOsXA==", "wq4GYEdwKm7DjMOg", "F8KJKETCn0Z2Bw==", "MiTDiFXCiA==", "w77DmsO7Zn0=", "YzvDnQIW", "wpV1E8Kvw5o=", "w5zDncOzV1d9wqbDnQ==", "cTTDsCzDgH9PwoLDjsKRWMO+McKLwqk=", "E8OoVMKsFsOICzN5ejHDvg==", "cXjDhzPDjw==", "wp/CqUDCk8Os", "Ihhiw7nDoA==", "wrBJcRXCgA==", "Z14GOMOh", "Yl45KSAr", "A8OkRMKZCg==", "woTDp009FsO4", "wr5xw5DDh8OTwoY=", "WRbDphskw5AKwqdJ", "azpbwpjDrQ==", "T3HDlzfDjg==", "wrccw6gGw4g=", "OnYLS8Oe", "cR/DuzYE", "dD5swqrChMKvw69z", "eVUILsOkBUgm", "w4TCmcKvw57DiQ==", "chTDhQjDjw==", "fkFiwpDCjg==", "UsKpbMOnw6g=", "T1c3w4TDrA==", "wrFBAcKL", "ESoww73DgA==", "IQXDqcO9wpQ=", "V8KzwqZudg==", "ITrDklPCkg==", "UBfDhTzDlA==", "wq7DlsK/wr1E", "dD5HwoPDjQ==", "w443ZhLDiw==", "SsKJwrTDtw==", "dAtuwp/DnQ==", "w6jDosOUYEw=", "Lj1hw5nDiQ==", "w74Xw53DnEE=", "w7Ibw7rDtHY=", "YHPCm3TDtg==", "VMOHCsKpZQ==", "dENNwpTCjQ==", "bFEGNg==", "w5BgX8O/Zg==", "wqfDlHsaBQ==", "w6VQUMOccw==", "wr/Dm8Khwodm", "wrFTEsK8w4g=", "BjbDmcKoQQ==", "PgZbw54k", "wrBUGsKQNg==", "SSZgwpnCgg=="];
            ! function(e, t) {
                var n = function(t) {
                    for (; --t;) e.push(e.shift())
                };
                n(++t)
            }(r, 137);
            var o = function(e, t) {
                e -= 0;
                var n = r[e];
                if (void 0 === o.LbmHBx) {
                    ! function() {
                        var e;
                        try {
                            var t = Function('return (function() {}.constructor("return this")( ));');
                            e = t()
                        } catch (n) {
                            e = window
                        }
                        var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                        e.atob || (e.atob = function(e) {
                            for (var t, n, r = String(e).replace(/=+$/, ""), o = 0, a = 0, s = ""; n = r.charAt(a++); ~n && (t = o % 4 ? 64 * t + n : n, o++ % 4) ? s += String.fromCharCode(255 & t >> (-2 * o & 6)) : 0) n = i.indexOf(n);
                            return s
                        })
                    }();
                    var i = function(e, t) {
                        var n, i = [],
                            r = 0,
                            o = "",
                            a = "";
                        e = atob(e);
                        for (var s = 0, l = e.length; l > s; s++) a += "%" + ("00" + e.charCodeAt(s).toString(16)).slice(-2);
                        e = decodeURIComponent(a);
                        for (var u = 0; 256 > u; u++) i[u] = u;
                        for (u = 0; 256 > u; u++) r = (r + i[u] + t.charCodeAt(u % t.length)) % 256, n = i[u], i[u] = i[r], i[r] = n;
                        u = 0, r = 0;
                        for (var c = 0; c < e.length; c++) u = (u + 1) % 256, r = (r + i[u]) % 256, n = i[u], i[u] = i[r], i[r] = n, o += String.fromCharCode(e.charCodeAt(c) ^ i[(i[u] + i[r]) % 256]);
                        return o
                    };
                    o.RsffRD = i, o.aiYUxp = {}, o.LbmHBx = !0
                }
                var a = o.aiYUxp[e];
                return void 0 === a ? (void 0 === o.chhtWo && (o.chhtWo = !0), n = o.RsffRD(n, t), o.aiYUxp[e] = n) : n = a, n
            };
            t[o("0x0", "rkwy")] = {}, t[o("0x0", "rkwy")][o("0x1", "yPAB")] = n, t[o("0x0", "rkwy")][o("0x2", "s[MW")] = i;
            var a = "8",
                s = -1,
                l = 0,
                u = 0,
                c = 0,
                d = 0
        }).call(n, i(3862)(t))
    },
    492: function(e, t, n) {
        "use strict";
        var i = n(354).MediaElementManager;
        e.exports = {
            general: new i("audio", n(334)),
            fading: new i("audio", n(334))
        }
    },
    493: function(e, t, n) {
        "use strict";
        var i = [{
                rule: /^(?![_-])/,
                errorMessage: n(50).t("A permalink must not start with an underscore or hyphen.")
            }, {
                rule: /^(?!.*[-_]$)/,
                errorMessage: n(50).t("A permalink must not end with an underscore or hyphen.")
            }, {
                rule: /^(?!.*[\-_]{2,})/,
                errorMessage: n(50).t("A permalink must not have consecutive underscores or hyphens.")
            }, {
                rule: /^[a-z0-9_-]*$/,
                errorMessage: n(50).t("Use only numbers, letters, underscores, or hyphens.")
            }, {
                rule: /[a-z]/,
                errorMessage: n(50).t("A permalink must contain at least one letter.")
            }, {
                rule: /^.{3,255}$/,
                errorMessage: n(50).t("A permalink must be between 3 and 255 characters.")
            }],
            r = {
                playlist: [],
                sound: [{
                    rule: new RegExp("^(?!(" + ["albums", "comments", "favorites", "followers", "following", "likes", "reposts", "sets", "spotlight", "stats", "tracks"].join("|") + ")$)"),
                    errorMessage: n(50).t("This permalink is reserved. Enter another one.")
                }]
            };
        e.exports = n(96).extend({
            type: "sound",
            initialize: function() {
                n(96).prototype.initialize.apply(this, arguments), this.constraints = i.concat(r[this.type])
            },
            check: function(e, t) {
                var i = this;
                if ("" === e) return void t(!0);
                var r = n(3).find(this.constraints, function(t) {
                    return !t.rule.test(e)
                });
                r ? (this.message = r.errorMessage, t(!1)) : this.resolvePermalink(e).done(function(e) {
                    e === !1 && (i.message = n(50).t("This permalink is already in use. Enter another one.")), t(e)
                }).fail(function(e) {
                    return t(!0)
                })
            },
            resolvePermalink: function(e) {
                var t = this.getResource.call(this._form),
                    i = n(54).get("me").get("permalink");
                return t && e === t.get("permalink") ? n(55).resolve(!0) : "sound" === this.type ? n(23).callEndpoint("trackPermalinkAvailability", null, {
                    permalink: e
                }).then(function(e) {
                    return e.body.track_permalink_available
                }) : "playlist" === this.type ? n(85).resolve(i, e).then(function(e) {
                    return !1
                }) : void 0
            }
        })
    },
    494: function(e, t, n) {
        "use strict";
        var i = e.exports = new(n(21))({
            message: "",
            state: n(182).UNKNOWN,
            _lastError: null,
            _lastResult: null,
            _form: null,
            initialize: function(e, t) {
                n(3).assign(this, e), this._form = t
            },
            disable: function() {
                this.state = n(182).DISABLED
            },
            reset: function() {
                this.state = n(182).UNKNOWN, this._lastResult && "pending" === this._lastResult.state() && this._lastResult.reject(), this._lastResult = null
            },
            result: function(e, t) {
                return this.state = t ? n(182).VALID : n(182).INVALID, this._lastError = t ? null : this.getMessage(), e.resolve({
                    success: t,
                    message: this._lastError
                })
            },
            getLastError: function() {
                return this._lastError
            },
            around: {
                validate: function(e) {
                    if (this.state === n(182).DISABLED) this._lastError = null, this._lastResult = n(55).resolve({
                        success: !0,
                        message: null
                    });
                    else if (this.state === n(182).UNKNOWN) {
                        for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) i[r - 1] = arguments[r];
                        this._lastResult = e.apply(this, i)
                    }
                    return this._lastResult
                }
            },
            defaults: {
                check: n(3).noop,
                getMessage: function() {
                    var e = this,
                        t = n(3).isFunction(this.message) ? this.message.call(this._form) : this.message || "";
                    return t.toString().replace(/\[\[([^}]+)\]\]/g, function(t, n) {
                        return e[n] || t
                    })
                }
            }
        });
        i.hydrateConstraintDefinition = function(e) {
            var t = void 0,
                n = void 0;
            return Array.isArray(e) ? (t = e[0], n = e[1]) : t = e, new t(n, this)
        }, i.hydrateConstraintDefinitions = function(e) {
            var t = this;
            return n(3).reduce(e, function(e, n, r) {
                return e[r] = n.map(i.hydrateConstraintDefinition, t), e
            }, {})
        }
    },
    495: function(e, t, n) {
        "use strict";
        var i = /^\s*([^@]+)@(\S+\.[a-z]{2,})\s*$/i;
        e.exports = n(96).extend({
            message: n(50).t("This email address is invalid."),
            check: function(e, t) {
                t(!e || i.test(e))
            }
        })
    },
    496: function(e, t, n) {
        "use strict";
        e.exports = n(96).extend({
            message: n(50).t("Enter a valid date."),
            check: function(e, t) {
                t(e instanceof Date && "number" == typeof + e && !isNaN(+e))
            }
        })
    },
    497: function(e, t) {
        "use strict";

        function n() {
            var e = Error.apply(this, arguments);
            e.name = this.name = "UnauthorizedViewerError", this.message = "User is unauthorized to view this resource.", this.stack = e.stack
        }
        n.prototype = Object.create(Error.prototype), e.exports = n
    },
    498: function(e, t, n) {
        "use strict";
        e.exports = {
            confirm: function(e) {
                var t = window.confirm(e),
                    i = n(55).defer();
                return i[t ? "resolve" : "reject"]()
            }
        }
    },
    499: function(e, t) {
        "use strict";
        e.exports = {
            isSoundCloudMail: function(e) {
                return /nosend\.soundcloudmail\.com$/.test(e)
            }
        }
    },
    500: function(e, t, n) {
        (function(t) {
            "use strict";

            function n(e) {
                var t = e.eventType,
                    n = void 0,
                    i = void 0;
                return t && 0 === t.indexOf("mouse") ? (n = e.clientX + window.pageXOffset, i = e.clientY + window.pageYOffset) : e.changedTouches ? (n = e.changedTouches[0].pageX, i = e.changedTouches[0].pageY) : (n = e.x, i = e.y), {
                    x: n,
                    y: i
                }
            }
            var i;
            e.exports = {
                normalizeEvent: function(e) {
                    if (e.offsetX === i || e.offsetY === i) {
                        var r = t(e.target).offset(),
                            o = n(e.originalEvent);
                        e.pageX = o.x, e.pageY = o.y, e.offsetX = o.x - (r ? r.left : 0), e.offsetY = o.y - (r ? r.top : 0)
                    }
                    return e
                }
            }
        }).call(t, n(1))
    },
    501: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e, t) {
                T(e, 1e3 * Math.max(5, c) * ("next" === t ? 1 : -1))
            }

            function r(e, t) {
                return (e && n(3).reduce(e, function(e, n, i) {
                    var r = t(n, i);
                    return r !== !1 && (!e || r > e.value) ? {
                        item: n,
                        value: r
                    } : e
                }, void 0) || {}).item
            }

            function o(e) {
                return e && u.some(n(3).propertyOf(e))
            }

            function a(e) {
                var t = e.keyCode;
                return t === f || t === g || t === h || t === m || t === v || t === _ || t === y
            }

            function s() {
                l(), E = window.setTimeout(l, b), k = !0
            }

            function l() {
                E && (window.clearTimeout(E), E = null), k = !1
            }
            var u = ["altKey", "shiftKey", "ctrlKey", "metaKey"],
                c = 0,
                d = !1,
                p = n(108).ENTER,
                h = n(108).ALT,
                f = n(108).SHIFT,
                g = n(108).CTRL,
                m = n(108).META_LEFT,
                v = n(108).META_RIGHT,
                _ = n(108).META_RIGHT_OSX,
                y = n(108).META_FIREFOX_OSX,
                b = 1500,
                w = .1,
                x = 71,
                k = !1,
                S = e.exports = {
                    chordStartKeyName: "G",
                    shortcuts: {
                        playPause: {
                            keyCode: ["32", "13"],
                            keyName: ["space"],
                            description: n(50).t("Play or pause"),
                            className: "kbd-big",
                            fn: function() {
                                n(62).toggleCurrent({
                                    userInitiated: !0
                                })
                            }
                        },
                        search: {
                            keyCode: ["83", "191"],
                            keyName: ["S"],
                            description: n(50).t("Search"),
                            fn: function() {
                                n(56).trigger("search:focus")
                            }
                        },
                        load: {
                            keyCode: ["48", "49", "50", "51", "52", "53", "54", "55", "56", "57"],
                            keyName: ["0…9"],
                            className: "kbd-big",
                            description: n(50).t("Seek to position"),
                            fn: function(e, t, n) {
                                e && !o(n) && e.seek(e.getMediaDuration() / 10 * (t - 48))
                            }
                        },
                        seekBackward: {
                            keyCode: ["37"],
                            keyName: ["←"],
                            description: n(50).t("Seek backward"),
                            allowKeyHold: !0,
                            fn: function(e) {
                                e && i(e, "prev")
                            }
                        },
                        seekForward: {
                            keyCode: ["39"],
                            keyName: ["→"],
                            description: n(50).t("Seek forward"),
                            allowKeyHold: !0,
                            fn: function(e) {
                                e && i(e, "next")
                            }
                        },
                        repeat: {
                            keyCode: ["shiftKey+76"],
                            keyName: ["L", "⇧"],
                            description: n(50).t("Repeat playing track"),
                            fn: function() {
                                n(62).cycleRepeatMode()
                            }
                        },
                        prev: {
                            keyCode: ["shiftKey+37", "75"],
                            keyName: ["←", "⇧"],
                            description: n(50).t("Play previous track"),
                            fn: function() {
                                n(62).playPrev({
                                    userInitiated: !0
                                })
                            }
                        },
                        next: {
                            keyCode: ["shiftKey+39", "74"],
                            keyName: ["→", "⇧"],
                            description: n(50).t("Play next track"),
                            fn: function() {
                                n(62).playNext({
                                    userInitiated: !0
                                })
                            }
                        },
                        mute: {
                            keyCode: ["77"],
                            keyName: ["M"],
                            description: n(50).t("Mute volume"),
                            fn: function() {
                                n(157).toggleMuted()
                            }
                        },
                        volUp: {
                            keyCode: ["shiftKey+38"],
                            keyName: ["↑", "⇧"],
                            description: n(50).t("Increase volume"),
                            allowKeyHold: !0,
                            fn: function() {
                                n(157).changeVolume(w)
                            }
                        },
                        volDown: {
                            keyCode: ["shiftKey+40"],
                            keyName: ["↓", "⇧"],
                            description: n(50).t("Decrease volume"),
                            allowKeyHold: !0,
                            fn: function() {
                                n(157).changeVolume(-1 * w)
                            }
                        },
                        like: {
                            keyCode: ["76"],
                            keyName: ["L"],
                            description: n(50).t("Like playing track"),
                            fn: function(e) {
                                e && n(75).like(e.id, e.resource_type)
                            }
                        },
                        repost: {
                            keyCode: ["82"],
                            keyName: ["R"],
                            description: n(50).t("Repost playing track"),
                            fn: function(e) {
                                e && n(75).repost(e.id, e.resource_type)
                            }
                        },
                        dialog: {
                            keyCode: ["72", "shiftKey+191"],
                            keyName: ["H"],
                            description: n(50).t("Show keyboard shortcuts"),
                            fn: function() {
                                n(56).trigger("keyboard-shortcuts:toggle")
                            }
                        },
                        gotoNowPlaying: {
                            keyCode: ["80"],
                            keyName: ["P"],
                            description: n(50).t("Navigate to playing track"),
                            fn: function() {
                                n(62).restoreState()
                            }
                        },
                        gotoLikes: {
                            chorded: !0,
                            keyCode: ["76"],
                            keyName: ["L"],
                            description: n(50).t("Navigate to Likes"),
                            fn: function() {
                                n(54).get("router").navigateToRoute("youNetwork", [null, "likes"], {
                                    trigger: !0,
                                    replace: !1
                                })
                            }
                        },
                        gotoCollection: {
                            chorded: !0,
                            keyCode: ["67"],
                            keyName: ["C"],
                            description: n(50).t("Navigate to Library"),
                            fn: function() {
                                n(54).get("router").navigateToRoute("youNetwork", [null, "library"], {
                                    trigger: !0,
                                    replace: !1
                                })
                            }
                        },
                        gotoStream: {
                            chorded: !0,
                            keyCode: ["83"],
                            keyName: ["S"],
                            description: n(50).t("Navigate to Stream"),
                            fn: function() {
                                n(54).get("router").navigateToRoute("stream", [], {
                                    trigger: !0,
                                    replace: !1
                                })
                            }
                        },
                        gotoProfile: {
                            chorded: !0,
                            keyCode: ["80"],
                            keyName: ["P"],
                            description: n(50).t("Navigate to Profile"),
                            fn: function() {
                                n(54).get("router").navigate("/you", {
                                    trigger: !0,
                                    replace: !1
                                })
                            }
                        },
                        gotoHistory: {
                            chorded: !0,
                            keyCode: ["72"],
                            keyName: ["H"],
                            description: n(50).t("Navigate to History"),
                            fn: function() {
                                n(54).get("router").navigateToRoute("youNetwork", [null, "history"], {
                                    trigger: !0,
                                    replace: !1
                                })
                            }
                        },
                        toggleQueue: {
                            keyCode: ["81"],
                            keyName: ["Q"],
                            description: n(50).t("Show Next up"),
                            fn: function() {
                                n(287).toggle()
                            }
                        },
                        toggleShuffle: {
                            keyCode: ["shiftKey+83"],
                            keyName: ["S", "⇧"],
                            description: n(50).t("Shuffle"),
                            fn: function() {
                                n(62).toggleShuffle()
                            }
                        }
                    },
                    handleKeyDown: function(e) {
                        var n = e.keyCode,
                            i = n === p && !e.isDefaultPrevented() && t(e.target).is(":tabbable");
                        e.isInput() || i || (S.processKey(n, e) && (e.preventDefault(), d = !0), a(e) || ++c)
                    },
                    handleKeyUp: function(e) {
                        c = 0, d && (e.preventDefault(), d = !1)
                    },
                    processKey: function(e, t) {
                        if (!k && e === x) return s(), !0;
                        var i = r(C()[k ? "chorded" : "normal"][e], function(n, i) {
                                if (i) {
                                    if (t && t[i]) return 1
                                } else if (!o(t) || !/[a-z0-9%']/i.test(String.fromCharCode(e))) return 0;
                                return !1
                            }),
                            a = i && S.shortcuts[i];
                        return !a || c && !a.allowKeyHold || a.fn(n(62).getCurrentSound(), e, t), l(), !!i
                    }
                },
                C = n(3).memoize(function() {
                    var e = {
                            chorded: {},
                            normal: {}
                        },
                        t = /^(?:(\w+)\+)?(\d+)$/;
                    return n(3).each(S.shortcuts, function(n, i) {
                        var r = n.keyCode,
                            o = n.chorded,
                            a = e[o ? "chorded" : "normal"];
                        r.forEach(function(e) {
                            var n = t.exec(e),
                                r = n[1],
                                o = void 0 === r ? "" : r,
                                s = n[2];
                            a[s] || (a[s] = {}), a[s][o] = i
                        })
                    }), e
                }),
                T = n(3).throttle(function(e, t) {
                    e.seekRelative(t)
                }, 200),
                E = null
        }).call(t, n(1))
    },
    502: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            override: {
                model: n(517)
            },
            audibleAt: function(e) {
                var t = this.at(e);
                return t && t.getSound()
            }
        })
    },
    503: function(e, t, n) {
        "use strict";
        var i = "custom";
        e.exports = new(n(21))({
            requirePrototype: n(78).prototype,
            applyTo: function(e) {
                var t, r, o, a = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    s = a.gender,
                    l = void 0 === s ? "gender" : s,
                    u = a.genderCustom,
                    c = void 0 === u ? "genderCustom" : u,
                    d = (t = {}, t[l] = {
                        defaultValue: null,
                        datasource: [{
                            label: n(50).t("Female"),
                            value: "female"
                        }, {
                            label: n(50).t("Male"),
                            value: "male"
                        }, {
                            label: n(50).t("Prefer not to say"),
                            value: "secret"
                        }, {
                            label: n(50).t("Custom", null, {
                                context: "Gender"
                            }),
                            value: i
                        }]
                    }, t[c] = {
                        defaultValue: ""
                    }, t),
                    p = n(50).t("Please indicate your gender."),
                    h = [
                        [n(66), {
                            message: p
                        }]
                    ],
                    f = (r = {}, r[l] = h, r[c] = h, r);
                this.merge(e, {
                    fields: d,
                    constraints: f,
                    constraintConditions: (o = {}, o[c] = {
                        fields: [l],
                        check: function(e) {
                            return e === i
                        }
                    }, o)
                })
            }
        })
    },
    504: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            requires: ["trigger"],
            defaults: {
                states: null
            },
            _states: null,
            toggleState: function(e, t, n) {
                var i, r, o, a;
                return !e || this.disposed ? this : (this._states || (this._states = {}), this.states || (this.states = {}), e in this.states ? (e in this._states || (this._states[e] = this.getState(e)), o = "undefined" != typeof t ? !!t : !this._states[e], n || this._states[e] !== o ? (this._states[e] = o, r = this.states[e], i = r.handler ? r.handler : r, a = typeof i, "string" === a ? this.$el[o ? "addClass" : "removeClass"](i) : "function" === a ? i.call(this, o) : i && "function" == typeof i.setup && i[o ? "setup" : "teardown"].call(this), this.trigger("state:" + e, o), this) : this) : this)
            },
            getState: function(e) {
                return this._states && e in this._states ? this._states[e] : this.states && e in this.states ? !!this.states[e].initial : !1
            }
        })
    },
    513: function(e, t, n) {
        "use strict";

        function i() {
            return r()[0]
        }

        function r() {
            return [null, ""]
        }

        function o(e) {
            return "ZXX" === (Array.isArray(e) ? e[0] : e)
        }

        function a() {
            return s([
                ["ZXX", n(50).t("Instrumental")],
                ["AR", n(50).t("Arabic")],
                ["AS", n(50).t("Assamese")],
                ["BG", n(50).t("Bulgarian")],
                ["BN", n(50).t("Bengali")],
                ["CA", n(50).t("Catalan")],
                ["CMN", n(50).t("Chinese Mandarin")],
                ["CS", n(50).t("Czech")],
                ["CY", n(50).t("Welsh")],
                ["DA", n(50).t("Danish")],
                ["DE", n(50).t("German")],
                ["EL", n(50).t("Greek")],
                ["EN", n(50).t("English")],
                ["ES", n(50).t("Spanish")],
                ["ET", n(50).t("Estonian")],
                ["FA", n(50).t("Persian")],
                ["FI", n(50).t("Finnish")],
                ["FR", n(50).t("French")],
                ["GA", n(50).t("Irish")],
                ["HE", n(50).t("Hebrew")],
                ["HI", n(50).t("Hindi")],
                ["HR", n(50).t("Croatian")],
                ["HT", n(50).t("Haitian")],
                ["HU", n(50).t("Hungarian")],
                ["ID", n(50).t("Indonesian")],
                ["IS", n(50).t("Icelandic")],
                ["IT", n(50).t("Italian")],
                ["JA", n(50).t("Japanese")],
                ["KK", n(50).t("Kazakh")],
                ["KO", n(50).t("Korean")],
                ["LA", n(50).t("Latin")],
                ["LG", n(50).t("Ganda")],
                ["LO", n(50).t("Lao")],
                ["LT", n(50).t("Lithuanian")],
                ["LV", n(50).t("Latvian")],
                ["MI", n(50).t("Maori")],
                ["MS", n(50).t("Malay")],
                ["NL", n(50).t("Dutch")],
                ["NO", n(50).t("Norwegian")],
                ["PA", n(50).t("Panjabi")],
                ["PL", n(50).t("Polish")],
                ["PT", n(50).t("Portuguese")],
                ["RO", n(50).t("Romanian")],
                ["RU", n(50).t("Russian")],
                ["SA", n(50).t("Sanskrit")],
                ["SK", n(50).t("Slovak")],
                ["SL", n(50).t("Slovenian")],
                ["SV", n(50).t("Swedish")],
                ["SW", n(50).t("Swahili")],
                ["TA", n(50).t("Tamil")],
                ["TE", n(50).t("Telugu")],
                ["TH", n(50).t("Thai")],
                ["TL", n(50).t("Tagalog")],
                ["TR", n(50).t("Turkish")],
                ["UK", n(50).t("Ukrainian")],
                ["UR", n(50).t("Urdu")],
                ["VI", n(50).t("Vietnamese")],
                ["XH", n(50).t("Xhosa")],
                ["YUE", n(50).t("Cantonese")],
                ["ZU", n(50).t("Zulu")]
            ], function(e) {
                var t = e[1];
                return t
            })
        }
        var s = n(3).sortBy;
        e.exports = {
            allLanguages: a,
            emptyLanguageValue: i,
            isInstrumentalLanguage: o
        }
    },
    514: function(e, t, n) {
        "use strict";
        e.exports = function(e, t, i, r, o) {
            function a() {
                g && m || (e.release(), f(), g = m = !0)
            }

            function s(e) {
                var t = e.sound,
                    r = e.index,
                    o = e.metadata,
                    a = o.originalModel,
                    s = o.queryPosition,
                    l = o.sourceInfo,
                    u = new(n(218))({}, {
                        contextSnapshot: i,
                        originalModel: a,
                        queryPosition: s,
                        sound: t,
                        sourceInfo: l,
                        index: r
                    });
                return u.release(), u
            }
            var l = t || e.getCurrentSound(),
                u = e instanceof n(70) ? n(1857)(e) : n(1856)(e),
                c = n(1855)(u),
                d = n(1858)(c, l, s, r, o),
                p = d.next,
                h = d.prev,
                f = d.dispose,
                g = !1,
                m = !1;
            return e.hold(), {
                dispose: a,
                next: {
                    stream: p,
                    dispose: function() {
                        !g && m && a(), g = !0
                    }
                },
                prev: {
                    stream: h,
                    dispose: function() {
                        !m && g && a(), m = !0
                    }
                }
            }
        }
    },
    515: function(e, t, n) {
        "use strict";

        function i(e, t) {
            t[e]("data", r, this)
        }

        function r() {
            n(3).assign(this, this._statuses.reduce(a, {
                latest: 0,
                totalSize: 0
            })), this._statuses.length && this.latest === this.totalSize && o.call(this), this.trigger("data")
        }

        function o() {
            this._statuses.forEach(i.bind(this, "off")), this._statuses.length = 0, r.call(this)
        }

        function a(e, t) {
            return e.latest += t.latest, e.totalSize += t.totalSize, e
        }
        e.exports = n(621).extend({
            _statuses: null,
            initialize: function() {
                this._statuses = []
            },
            add: n(3).noop,
            addTransfer: function(e) {
                this._statuses.push(e), i.call(this, "on", e), r.call(this)
            },
            removeTransfer: function(e) {
                var t = this._statuses.indexOf(e);
                t > -1 && (this._statuses.splice(t, 1), i.call(this, "off", e), r.call(this))
            }
        })
    },
    516: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e.map(function(e) {
                return function() {
                    return e.set("editing", !1), e.saveEdits()
                }
            }).reverse();
            return n(55).sequential(t)
        }

        function r() {
            this._soundUploads.length || this.cancel()
        }

        function o(e) {
            this._soundUploads.invoke("setImageFile", e.file, e.source)
        }

        function a(e) {
            e.forEach(function(e) {
                e.set(n(3).pick(this.attributes, u))
            }, this)
        }

        function s(e) {
            e.changedAttributes() && this._soundUploads.each(function(t) {
                t.set(n(3).pick(e.changedAttributes(), u))
            })
        }

        function l() {
            var e = this.getAudible();
            this._soundUploads.each(function(t) {
                var n, i = t.getAudible();
                e.addSound(i), n = e.findSoundById(i.id), t.updateSound(n)
            })
        }
        var u = ["description", "tags", "editing", "feedable", "genre", "artwork_url", "buyLink", "buyTitle", "sharing", "apiStreamable", "embeddableByAll", "domainLocking", "downloadable", "license", "creativeCommonsLicense", "attribution", "nonCommercial", "nonDerivative", "shareAlike", "commentable", "publicComments", "stats", "geoblocking", "availableCountries", "labelName", "releaseDate", "monetizationEnabled", "monetizationTerritories", "monetizationStartTimezone", "monetizationStart", "monetizationStartLocalDate", "monetizationStartDate", "monetizationEndTimezone", "monetizationEnd", "monetizationEndLocalDate", "monetizationEndDate", "monetizationRightsholder", "offlineSyncEnabled"],
            c = n(70).extend({
                model: n(168),
                url: null,
                isFullyPopulated: function() {
                    return !0
                },
                hasDataForView: function() {
                    return !0
                }
            });
        e.exports = n(78).extend(n(1424), n(597), n(376), n(1422), n(1423), n(596), {
            _soundUploads: null,
            _playlist: null,
            failedSaving: !1,
            resource_type: "playlist-upload",
            constraints: {
                title: [
                    [n(66), {
                        message: "Enter a title."
                    }],
                    [n(111), {
                        maxLength: 100,
                        message: "Enter a title that is up to [[maxLength]] characters."
                    }]
                ],
                description: [
                    [n(111), {
                        maxLength: 4e3,
                        message: "Enter a playlist description that is up to [[maxLength]] characters."
                    }]
                ],
                permalink: [
                    [n(493), {
                        type: "playlist",
                        getResource: function() {
                            return this.getAudible()
                        }
                    }]
                ],
                customGenre: [
                    [n(111), {
                        maxLength: 100,
                        message: n(50).t("Enter a custom genre that is up to [[maxLength]] characters.")
                    }]
                ]
            },
            actions: {
                save: function() {
                    var e = this;
                    return this.validate().then(function(e) {
                        return e || n(55).reject()
                    }).then(function() {
                        return e.set("editing", !1), i(e.getSoundUploads())
                    }).then(this.saveEdits.bind(this))
                }
            },
            getAttributesToBeSaved: function() {
                var e = this._soundUploads.map(function(e) {
                    var t = e.getAudible();
                    return {
                        id: t.id
                    }
                });
                return {
                    tracks: e
                }
            },
            getAttributesFromModel: function() {
                return {}
            },
            setup: function() {
                this._soundUploads = new c, this.listenTo(this._soundUploads, "remove", r).listenTo(this, "imageDataChanged", o).listenTo(this, "change", s)
            },
            addSoundForms: function(e) {
                this._soundUploads.add(e), a.call(this, e)
            },
            replaceUploads: function(e, t) {
                var n = this.getSoundUploads().slice();
                this.addSoundForms(t), n.forEach(function(e) {
                    e.removeUpload(), e.collection.remove(e)
                }), this.get("fileUpload").addUploads(e)
            },
            validate: function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    t = n(55).defer(),
                    i = n(78).prototype.validate.apply(this, arguments),
                    r = e.fields,
                    o = r ? n(3).assign({}, e, {
                        fields: n(3).intersection(r, u)
                    }) : e,
                    a = this._soundUploads.map(function(e) {
                        return e.validate.call(e, o)
                    });
                return a.push(i), n(55).all(a).done(function() {
                    var e = Array.prototype.slice.call(arguments);
                    t.resolve(e.every(n(3).identity))
                }), t
            },
            setTitleFromFolder: function(e) {
                this.set("title", e)
            },
            onAudibleSaved: function() {
                this.failedSaving = !1, l.call(this)
            },
            onSaveFailed: function(e) {
                this.failedSaving = !0, this.setToFailed("save", e), this.set("editing", !0), this.setActionState("save", "enabled")
            },
            cancel: function() {
                var e;
                for (e = this._soundUploads.length; e--;) this._soundUploads.at(e).cancel();
                this.destroy(), this._playlist && n(75).destroy(this._playlist)
            },
            resetOrder: n(3).noop,
            saveOrder: n(3).noop,
            getCurrentOrder: function() {
                return n(3).pluck(this.getSoundUploads(), "resource_id")
            },
            reorder: function(e) {
                this._soundUploads.sort({
                    silent: !0,
                    comparator: function(t) {
                        return e.indexOf(t.resource_id)
                    }
                })
            },
            getAudible: function() {
                return this._playlist
            },
            createAudible: function() {
                return this._playlist = new(n(85)), this._playlist
            },
            unsetAudible: function() {
                this._playlist = null
            },
            getSoundUploadsCollection: function() {
                return this._soundUploads
            },
            getSoundUploads: function() {
                return this._soundUploads.models
            }
        }, {
            neverRelease: !0
        })
    },
    545: function(e, t) {
        "use strict";
        e.exports = {
            rolloutNames: {
                KNOWN_CONTENT_MONETIZATION: "can_sign_premier_known_content_contract",
                UNKNOWN_CONTENT_PAYOUTS: "can_sign_premier_unknown_content_contract"
            }
        }
    },
    554: function(e, t) {
        e.exports = {
            africa: {
                DZ: "Algeria",
                AO: "Angola",
                AG: "Antigua And Barbuda",
                BJ: "Benin",
                BT: "Bhutan",
                BW: "Botswana",
                BF: "Burkina Faso",
                BI: "Burundi",
                CM: "Cameroon",
                CV: "Cape Verde",
                CF: "Central African Republic",
                TD: "Chad",
                KM: "Comoros",
                CG: "Congo",
                CD: "Democratic Republic of the Congo",
                CI: "Cote d'Ivoire",
                EG: "Egypt",
                GQ: "Equatorial Guinea",
                ER: "Eritrea",
                ET: "Ethiopia",
                GF: "French Guiana",
                GA: "Gabon",
                GM: "Gambia",
                GH: "Ghana",
                GN: "Guinea",
                GW: "Guinea-Bissau",
                KE: "Kenya",
                LS: "Lesotho",
                LR: "Liberia",
                MW: "Malawi",
                ML: "Mali",
                MR: "Mauritania",
                YT: "Mayotte",
                MA: "Morocco",
                MZ: "Mozambique",
                NA: "Namibia",
                NE: "Niger",
                NG: "Nigeria",
                QA: "Qatar",
                RW: "Rwanda",
                ST: "Sao Tome And Principe",
                SN: "Senegal",
                SC: "Seychelles",
                SL: "Sierra Leone",
                SO: "Somalia",
                ZA: "South Africa",
                SD: "Sudan",
                SR: "Suriname",
                SZ: "Swaziland",
                TZ: "United Republic of Tanzania",
                TG: "Togo",
                TT: "Trinidad And Tobago",
                UG: "Uganda",
                EH: "Western Sahara",
                ZM: "Zambia",
                ZW: "Zimbabwe"
            },
            asia: {
                AF: "Afghanistan",
                BH: "Bahrain",
                BD: "Bangladesh",
                IO: "British Indian Ocean Territory",
                BN: "Brunei Darussalam",
                KH: "Cambodia",
                CN: "China",
                DJ: "Djibouti",
                HK: "Hong Kong",
                IN: "India",
                ID: "Indonesia",
                IR: "Islamic Republic of Iran",
                IQ: "Iraq",
                IL: "Israel",
                JP: "Japan",
                JO: "Jordan",
                KP: "Democratic People's Republic of Korea",
                KR: "Republic of Korea",
                KW: "Kuwait",
                KG: "Kyrgyzstan",
                LA: "Lao People's Democratic Republic",
                LB: "Lebanon",
                LY: "Libyan Arab Jamahiriya",
                MO: "Macao",
                MY: "Malaysia",
                MN: "Mongolia",
                MM: "Myanmar",
                NP: "Nepal",
                OM: "Oman",
                PK: "Pakistan",
                PW: "Palau",
                PS: "State of Palestine",
                PH: "Philippines",
                SA: "Saudi Arabia",
                SG: "Singapore",
                SB: "Solomon Islands",
                SS: "South Sudan",
                LK: "Sri Lanka",
                SY: "Syrian Arab Republic",
                TW: "Taiwan, Province of China",
                TJ: "Tajikistan",
                TH: "Thailand",
                TL: "Timor-Leste",
                TN: "Tunisia",
                TR: "Turkey",
                TM: "Turkmenistan",
                AE: "United Arab Emirates",
                UZ: "Uzbekistan",
                VN: "Viet Nam",
                YE: "Yemen"
            },
            australasia: {
                AS: "American Samoa",
                AU: "Australia",
                CX: "Christmas Island",
                CC: "Cocos (Keeling) Islands",
                CK: "Cook Islands",
                FJ: "Fiji",
                PF: "French Polynesia",
                HM: "Heard Island And McDonald Islands",
                KI: "Kiribati",
                MG: "Madagascar",
                MV: "Maldives",
                MH: "Marshall Islands",
                MU: "Mauritius",
                FM: "Federated States of Micronesia",
                NR: "Nauru",
                NC: "New Caledonia",
                NZ: "New Zealand",
                NU: "Niue",
                MP: "Northern Mariana Islands",
                PG: "Papua New Guinea",
                WS: "Samoa",
                TK: "Tokelau",
                TO: "Tonga",
                TV: "Tuvalu",
                VU: "Vanuatu",
                WF: "Wallis And Futuna",
                AQ: "Antarctica"
            },
            europe: {
                AX: "Aaland Islands",
                AL: "Albania",
                AD: "Andorra",
                AM: "Armenia",
                AT: "Austria",
                AZ: "Azerbaijan",
                BY: "Belarus",
                BE: "Belgium",
                BA: "Bosnia And Herzegovina",
                BV: "Bouvet Island",
                BG: "Bulgaria",
                HR: "Croatia",
                CY: "Cyprus",
                CZ: "Czech Republic",
                DK: "Denmark",
                EE: "Estonia",
                FO: "Faroe Islands",
                FI: "Finland",
                FR: "France",
                TF: "French Southern Territories",
                GE: "Georgia",
                DE: "Germany",
                GI: "Gibraltar",
                GR: "Greece",
                GL: "Greenland",
                GP: "Guadeloupe",
                GG: "Guernsey",
                VA: "Holy See (Vatican City State)",
                HU: "Hungary",
                IS: "Iceland",
                IE: "Ireland",
                IM: "Isle of Man",
                IT: "Italy",
                JE: "Jersey",
                KZ: "Kazakhstan",
                LV: "Latvia",
                LI: "Liechtenstein",
                LT: "Lithuania",
                LU: "Luxembourg",
                MK: "The Former Yugoslav Republic of Macedonia",
                MT: "Malta",
                MQ: "Martinique",
                MD: "Republic of Moldova",
                MC: "Monaco",
                ME: "Montenegro",
                MS: "Montserrat",
                NL: "Netherlands",
                NF: "Norfolk Island",
                NO: "Norway",
                PL: "Poland",
                PT: "Portugal",
                RE: "Reunion",
                RO: "Romania",
                RU: "Russian Federation",
                SH: "Saint Helena, Ascension And Tristan Da Cunha",
                SM: "San Marino",
                RS: "Serbia",
                SX: "Sint Maarten (Dutch Part)",
                SK: "Slovakia",
                SI: "Slovenia",
                GS: "South Georgia And The South Sandwich Islands",
                ES: "Spain",
                SJ: "Svalbard And Jan Mayen",
                SE: "Sweden",
                CH: "Switzerland",
                UA: "Ukraine",
                GB: "United Kingdom",
                VG: "Virgin Islands, British"
            },
            latin_america: {
                AR: "Argentina",
                AW: "Aruba",
                BB: "Barbados",
                BZ: "Belize",
                BM: "Bermuda",
                BO: "Plurinational State of Bolivia",
                BQ: "Bonaire, Sint Eustatius And Saba",
                BR: "Brazil",
                CL: "Chile",
                CO: "Colombia",
                CR: "Costa Rica",
                CU: "Cuba",
                CW: "Curacao",
                EC: "Ecuador",
                SV: "El Salvador",
                FK: "Falkland Islands (Malvinas)",
                GD: "Grenada",
                GT: "Guatemala",
                GY: "Guyana",
                HN: "Honduras",
                JM: "Jamaica",
                MX: "Mexico",
                NI: "Nicaragua",
                PA: "Panama",
                PY: "Paraguay",
                PE: "Peru",
                PN: "Pitcairn",
                PR: "Puerto Rico",
                KN: "Saint Kitts And Nevis",
                LC: "Saint Lucia",
                UY: "Uruguay",
                VE: "Bolivarian Republic of Venezuela"
            },
            north_america: {
                AI: "Anguilla",
                BS: "Bahamas",
                CA: "Canada",
                KY: "Cayman Islands",
                DM: "Dominica",
                DO: "Dominican Republic",
                GU: "Guam",
                HT: "Haiti",
                BL: "Saint Barthelemy",
                MF: "Saint Martin (French Part)",
                PM: "Saint Pierre And Miquelon",
                VC: "Saint Vincent And The Grenadines",
                TC: "Turks And Caicos Islands",
                US: "United States",
                UM: "United States Minor Outlying Islands",
                VI: "Virgin Islands, U.S."
            }
        }
    },
    555: function(e, t, n) {
        var i = n(2379);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    573: function(e, t, n) {
        "use strict";
        e.exports = n(111).extend({
            maxLength: 22,
            message: n(50).t("Enter a buy-link title that is up to [[maxLength]] characters.")
        })
    },
    578: function(e, t, n) {
        "use strict";
        e.exports = n(96).extend({
            message: n(50).t("Enter a time in the future."),
            check: function(e, t) {
                t(e > Date.now())
            }
        })
    },
    580: function(e, t, n) {
        "use strict";
        e.exports = n(111).extend({
            maxLength: 30,
            message: n(50).t("You can use up to [[maxLength]] tags.")
        })
    },
    581: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return e.some(function(e) {
                var n = e.name,
                    i = e.role;
                return !!n.trim() && i === t
            })
        }
        e.exports = n(96).extend({
            role: null,
            nullable: !1,
            check: function(e, t) {
                t(i(e, this.role))
            }
        })
    },
    583: function(e, t) {
        "use strict";

        function n(e) {
            return (e ^ 16 * Math.random() >> e / 4).toString(16)
        }
        var i = "10000000-1000-4000-8000-100000000000";
        e.exports = {
            generate: function() {
                return i.replace(/[018]/g, n)
            }
        }
    },
    584: function(e, t) {
        "use strict";
        var n = (window.navigator.userLanguage || window.navigator.language || "").toLowerCase(),
            i = n.split("-")[0],
            r = n.split("-")[1];
        e.exports = {
            isUsedLanguage: function(e) {
                return i === e.toLowerCase()
            },
            isCountry: function(e) {
                return r === e.toLowerCase()
            },
            isUsedLanguageAndCountry: function(e) {
                return n === e.toLowerCase()
            }
        }
    },
    585: function(e, t, n) {
        "use strict";
        e.exports = {
            getAccessibleMarkup: function(e) {
                return '<span class="sc-visuallyhidden">' + n(20).Utils.escapeExpression(e.screenreader) + "</span>" + (e.visible ? '<span aria-hidden="true">' + n(20).Utils.escapeExpression(e.visible) + "</span>" : "")
            }
        }
    },
    588: function(e, t) {
        "use strict";
        var n = window.navigator;
        e.exports = {
            getFlashPlugin: function() {
                var e, t, i, r;
                if ("undefined" != typeof window.ActiveXObject) try {
                    r = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"), r && (e = r.GetVariable("$version"))
                } catch (o) {} else n.plugins && n.plugins.length > 0 && (i = "application/x-shockwave-flash", t = n.mimeTypes, t && t[i] && t[i].enabledPlugin && t[i].enabledPlugin.description && (e = t[i].enabledPlugin.description));
                return e
            },
            getFlashVersion: function() {
                var e = this.getFlashPlugin().match(/\d\S+/)[0].replace(/,/g, ".").split(".");
                return [e[0], e[1]].join(".")
            },
            getOperatingSystem: function() {
                var e = n.appVersion;
                return -1 !== e.indexOf("Win") ? "Windows" : -1 !== e.indexOf("Mac") ? "MacOS" : -1 !== e.indexOf("X11") ? "UNIX" : -1 !== e.indexOf("Linux") ? "Linux" : "undefined-OS"
            },
            getBrowser: function() {
                var e, t, i = n.userAgent,
                    r = i.match(/(opera|chrome|safari|firefox|msie|applewebkit)\/?\s*(\.?\d+(\.\d+)*)/i),
                    o = i.match(/version\/([\.\d]+)/i);
                return t = null !== o ? o[1] : r ? r[2] : null, e = r ? [r[1], t] : [n.appName, n.appVersion], e.join()
            }
        }
    },
    589: function(e, t) {
        "use strict";
        var n = /\r?\n/g,
            i = /\s+/g;
        e.exports = {
            cleanBlockText: function(e) {
                return e.trim().replace(n, " ").replace(i, " ")
            }
        }
    },
    590: function(e, t, n) {
        "use strict";

        function i() {
            return r("id", a()) || r("utc_offset", o())
        }

        function r(e, t) {
            var i;
            return s(n(1622), (i = {}, i[e] = t, i))
        }

        function o() {
            return -60 * l.getTimezoneOffset()
        }

        function a() {
            try {
                return window.Intl.DateTimeFormat().resolvedOptions().timeZone
            } catch (e) {
                return ""
            }
        }
        var s = n(3).findWhere,
            l = n(50).dateTimeHelper;
        e.exports = {
            getLocalTimezone: i,
            getLocalOffset: o,
            findTimezoneWhere: r
        }
    },
    591: function(e, t, n) {
        "use strict";

        function i(e) {
            e.forEach(function(e) {
                var t = e.target;
                d.has(t) && d.get(t).forEach(function(t) {
                    return t(e)
                })
            })
        }

        function r(e) {
            return e.intersectionRatio > 0
        }

        function o(e, t) {
            s(e, t), f.observe(e)
        }

        function a(e) {
            l(e), f.unobserve(e)
        }

        function s(e, t) {
            d.has(e) ? d.get(e).push(t) : d.set(e, [t])
        }

        function l(e) {
            d["delete"](e)
        }
        var u = n(131).whenInserted,
            c = !(!window.IntersectionObserver || !window.WeakMap);
        e.exports = {
            whenElementVisible: c ? function(e) {
                return u(e).then(function() {
                    return n(55).promise(function(t) {
                        o(e, function(n) {
                            r(n) && (a(e), t())
                        })
                    })
                })
            } : function() {
                return n(55).resolve()
            }
        };
        var d = c ? new WeakMap : {},
            p = [0, .25, .5, .75, 1],
            h = "40px",
            f = c ? new window.IntersectionObserver(i, {
                threshold: p,
                rootMargin: h
            }) : {}
    },
    592: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                i = t.onCaptchaSuccess,
                o = t.onCaptchaExpire,
                a = n(55).defer();
            return r().then(function() {
                window.grecaptcha.render(e, {
                    sitekey: l,
                    callback: i,
                    "expired-callback": o
                }), a.resolve()
            }, a.reject), a
        }

        function r() {
            if (!s) {
                s = n(55).defer();
                var e = n(65).modify("https://www.google.com/recaptcha/api.js", {
                    query: {
                        hl: o(),
                        onload: u,
                        render: "explicit"
                    }
                });
                a(e, {
                    onerror: function() {
                        s.reject(), s = null
                    }
                })
            }
            return s.promise()
        }
        var o = n(50).getLocale,
            a = n(131).insertScript;
        e.exports = {
            renderRecaptcha: i
        };
        var s = void 0,
            l = n(54).get("recaptcha_public_key"),
            u = "__onRecaptchaReady";
        window[u] = function() {
            s.resolve(), delete window[u]
        }
    },
    594: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                var t = this;
                return this._saving = !0, e.always(function() {
                    t._saving = !1, t.saveCleanup()
                })
            }

            function r() {
                return this.get("editing") || this._saving ? n(55).reject() : n(55).resolve()
            }
            e.exports = new(n(21))(n(216).withOptions({
                read: "artwork_url"
            }), {
                requires: ["getAudible", "saveEdits"],
                _saving: !1,
                defaults: {
                    saveCleanup: function() {},
                    preSaveCheck: function() {
                        return n(55).resolve()
                    }
                },
                applyTo: function(e) {
                    e.fields = t.extend(!0, {}, e.fields, {
                        editing: {
                            defaultValue: !0
                        },
                        errorMessage: {
                            defaultValue: ""
                        }
                    })
                },
                around: {
                    saveEdits: function(e) {
                        var t = this,
                            o = n(3).rest(arguments);
                        return r.call(this).then(this.preSaveCheck.bind(this)).then(function() {
                            return i.call(t, e.apply(t, o))
                        })
                    }
                },
                saveAudibleImage: function(e) {
                    var t, i = this.getImageFileInfo();
                    return i.file ? (e.setImageFile(i.file, i.source), e.on("imageTranscodingDone", function(e) {
                        this.unsetImageFile({
                            silent: !0
                        }), this.set("artwork_url", e.artwork_url)
                    }), t = e.uploadImage()) : t = n(55).resolve(), t
                },
                getErrorMessageTemplate: function(e, t, i) {
                    var r = e || "unknown",
                        o = {
                            infoMessage: i && " " + i + "."
                        },
                        a = {
                            track: {
                                upload: n(50).t("Error uploading track.[[infoMessage]]", o),
                                save: n(50).t("Error saving track.[[infoMessage]] Please try again.", o),
                                transcode: n(50).t("Error processing track.[[infoMessage]]", o),
                                unknown: n(50).t("Error with track.[[infoMessage]]", o)
                            },
                            playlist: {
                                upload: n(50).t("Error uploading playlist.[[infoMessage]]", o),
                                save: n(50).t("Error saving playlist.[[infoMessage]] Please try again.", o),
                                transcode: n(50).t("Error processing playlist.[[infoMessage]]", o),
                                unknown: n(50).t("Error with playlist.[[infoMessage]]", o)
                            }
                        };
                    return a[t][r]
                },
                extractErrorMessage: function(e) {
                    try {
                        return JSON.parse(e.responseText).errors[0].error_message
                    } catch (t) {
                        return ""
                    }
                },
                setToModelAttributes: function() {
                    var e = this.getAttributesFromModel();
                    this.set(e), this.unsetImageFile({
                        force: !0
                    }), this.markFieldsClean(), this.resetAllFieldValidations()
                }
            })
        }).call(t, n(1))
    },
    596: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                return "playlist-upload" === this.resource_type
            }

            function r() {
                this.setFieldDisabled("publisherIsrc", this.get("publisherIsrcGenerated")), this.setFieldDisabled("publisherIsrcGenerated", !(!this.get("publisherIsrcState") && !this.get("publisherIsrc")))
            }

            function o() {
                return n(54).get("me").isCPPEnabled()
            }
            var a = {
                    publisherArtist: {
                        defaultValue: null,
                        disabled: i
                    },
                    publisherAlbumTitle: {
                        defaultValue: null
                    },
                    publisherContainsMusic: {
                        datasource: [{
                            label: "",
                            value: null
                        }, {
                            label: n(50).t("Yes"),
                            value: !0
                        }, {
                            label: n(50).t("No"),
                            value: !1
                        }],
                        defaultValue: null,
                        disabled: i
                    },
                    publisher: {
                        defaultValue: null
                    },
                    publisherIswc: {
                        defaultValue: null
                    },
                    publisherUpcOrEan: {
                        defaultValue: null
                    },
                    publisherIsrc: {
                        defaultValue: null,
                        disabled: i
                    },
                    publisherIsrcGenerated: {
                        defaultValue: !1,
                        disabled: i
                    },
                    publisherPLine: {
                        defaultValue: null
                    },
                    publisherCLine: {
                        defaultValue: null
                    },
                    publisherExplicit: {
                        datasource: [{
                            label: "",
                            value: null
                        }, {
                            label: n(50).t("Yes"),
                            value: !0
                        }, {
                            label: n(50).t("No"),
                            value: !1
                        }],
                        defaultValue: null
                    },
                    publisherWriterComposer: {
                        defaultValue: null
                    },
                    publisherReleaseTitle: {
                        defaultValue: null
                    }
                },
                s = {
                    artist: "publisherArtist",
                    album_title: "publisherAlbumTitle",
                    contains_music: "publisherContainsMusic",
                    publisher: "publisher",
                    iswc: "publisherIswc",
                    upc_or_ean: "publisherUpcOrEan",
                    isrc: "publisherIsrc",
                    p_line: "publisherPLine",
                    c_line: "publisherCLine",
                    explicit: "publisherExplicit",
                    writer_composer: "publisherWriterComposer",
                    release_title: "publisherReleaseTitle"
                };
            e.exports = new(n(21))({
                requires: ["getAudible", "getAttributesFromModel"],
                requirePrototype: n(78).prototype,
                merge: {
                    requiredModelAttributes: ["publisher_metadata", "isrc_state"]
                },
                applyTo: function(e) {
                    t.extend(!0, e, {
                        fields: a,
                        constraints: {
                            publisherIswc: [n(1804)],
                            publisherIsrc: [
                                [n(66), {
                                    message: n(50).t("Enter the ISRC.")
                                }], n(1803)
                            ],
                            publisherUpcOrEan: [n(1800)],
                            publisherArtist: [
                                [n(66), {
                                    message: n(50).t("Enter an artist.")
                                }]
                            ],
                            publisherContainsMusic: [
                                [n(66), {
                                    message: n(50).t("Select an option.")
                                }],
                                [n(1396)]
                            ]
                        },
                        constraintConditions: {
                            publisherIsrc: {
                                fields: ["monetizationEnabled", "publisherContainsMusic"],
                                constraints: [n(66)],
                                check: function(e, t) {
                                    var i = n(54).get("me"),
                                        r = i.getCPPOption("is_isrc_required_for_audio"),
                                        o = i.hasMonetization();
                                    return e && (t || r) && o
                                }
                            },
                            publisherArtist: {
                                fields: ["publisherContainsMusic", "publisherIsrcGenerated", "publisherIsrc"],
                                check: function(e, t, n) {
                                    return o() && (t || e && n)
                                }
                            },
                            publisherContainsMusic: {
                                fields: ["monetizationEnabled"],
                                check: n(3).identity
                            }
                        },
                        isRequestingIsrcGeneration: function() {
                            return this.get("publisherIsrcGenerated")
                        },
                        isPendingIsrcGeneration: function() {
                            return "pending" === this.get("publisherIsrcState")
                        },
                        hasAssignedIsrc: function() {
                            return this.isRequestingIsrcGeneration() && "assigned" === this.get("publisherIsrcState")
                        }
                    })
                },
                after: {
                    setup: function() {
                        this.isEdit || this.set("publisherContainsMusic", !n(54).get("me").getCPPOption("default_is_audio", !1)), this.listenTo(this, "change:publisherIsrcGenerated change:publisherIsrcState change:publisherIsrc", r), r.call(this)
                    },
                    saveCleanup: function() {
                        var e = this.getAudible(),
                            t = e.get("isrc_state"),
                            n = e.get("publisher_metadata");
                        this.set("publisherIsrcState", t), this.set("publisherIsrc", n.isrc)
                    }
                },
                around: {
                    getAttributesToBeSaved: function(e) {
                        for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) i[r - 1] = arguments[r];
                        var o = e.apply(this, i),
                            a = this.isRequestingIsrcGeneration();
                        return o.publisher_metadata = n(3).reduce(s, function(e, t, n) {
                            var i = this.get(t);
                            return "isrc" === n ? e[n] = a ? null : i || null : e[n] = i, e
                        }, {}, this), o.isrc_generate = a, o
                    },
                    getAttributesFromModel: function(e) {
                        for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) i[r - 1] = arguments[r];
                        var o = e.apply(this, i),
                            a = this.getAudible(),
                            l = a.get("publisher_metadata"),
                            u = a.get("isrc_state");
                        return l && n(3).assign(o, n(3).reduce(s, function(e, t, n) {
                            return e[t] = l[n], e
                        }, {})), o.publisherIsrcState = u, o.publisherIsrcGenerated = !!u, o
                    }
                }
            })
        }).call(t, n(1))
    },
    597: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                var e = this.getFileUpload();
                e && e.set("hasBeenSaved", !0), this._fileSaveableDeferred = null, this.set("fileUploadSaved", !0), a.call(this)
            }

            function r() {
                this.markFieldsClean("fileUpload"), this.unsetFileUpload()
            }

            function o(e, t) {
                var i = this.getAudible(),
                    r = this.isEdit;
                switch (t) {
                    case n(97).TRANSCODING:
                        r || this._fileSaveableDeferred.resolve();
                        break;
                    case n(97).FAILED:
                        e.previous("status") === n(97).TRANSCODING ? (i && i.set("state", n(67).states.FAILED), this.setToFailed("transcode")) : this.setToFailed("upload"), this.set("fileUploadFailed", !0);
                        break;
                    case n(97).COMPLETE:
                        i && i.set("state", n(67).states.FINISHED), r && this._fileSaveableDeferred && this._fileSaveableDeferred.resolve(), a.call(this)
                }
            }

            function a() {
                var e = this.get("fileUploadSaved"),
                    t = this.getFileUpload(),
                    i = t && t.get("status") === n(97).COMPLETE;
                e && i && this.removeUpload()
            }
            var s = {
                fileUploadSaved: {
                    defaultValue: !1
                },
                fileUploadFailed: {
                    defaultValue: !1
                },
                fileUpload: {
                    defaultValue: null
                }
            };
            e.exports = new(n(21))({
                requires: ["getAudible", "isEdit", "onAudibleSaved"],
                _fileSaveableDeferred: null,
                applyTo: function(e) {
                    e.fields = t.extend(!0, {}, s, e.fields || {})
                },
                after: {
                    onAudibleSaved: function() {
                        var e = this.getAudible(),
                            t = this.getFileUpload();
                        e && this.isEdit && t && n(67).prototype.createPlayer.apply(e), t && (n(56).trigger("upload_funnel:save"), n(58).trackUploadFunnel("save"), i.call(this))
                    }
                },
                hasUnsavedUpload: function() {
                    var e = this.getFileUpload();
                    return e && e.get("status") !== n(97).FAILED
                },
                setFileUpload: function(e) {
                    this.set({
                        fileUpload: e,
                        fileUploadFailed: !1,
                        fileUploadSaved: !1
                    }), this.markFieldsDirty("fileUpload"), e.hold(), this._fileSaveableDeferred = n(55).defer(), this.listenTo(e, "change:status", o).listenTo(e, "destroy", r)
                },
                unsetFileUpload: function() {
                    var e = this.getAudible();
                    e && e.set("state", n(67).states.FINISHED), this.set("fileUpload", null), this._fileSaveableDeferred && this._fileSaveableDeferred.reject(), this._fileSaveableDeferred = null
                },
                getFileUpload: function() {
                    return this.get("fileUpload")
                },
                removeUpload: function() {
                    var e = this.getFileUpload();
                    e && (e.release(), e.remove())
                },
                replaceUpload: function(e) {
                    this.removeUpload(), this.setFileUpload(e)
                },
                getUploadAttributes: function() {
                    var e = this.isEdit,
                        t = this.getFileUpload(),
                        n = {};
                    return t && (n[e ? "replacing_uid" : "uid"] = t.getS3Key(), n[e ? "replacing_original_filename" : "original_filename"] = t.getFileName()), n
                },
                fileStatusCheck: function() {
                    var e = this.getFileUpload(),
                        t = this.isEdit ? n(97).COMPLETE : n(97).TRANSCODING;
                    if (!e) return n(55).resolve();
                    var i = e.get("status");
                    return t > i && i !== n(97).FAILED ? this._fileSaveableDeferred : n(55).resolve()
                }
            })
        }).call(t, n(1))
    },
    598: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            requirePrototype: n(64).prototype,
            hasPermalink: function(e) {
                return e && this.has("permalink") && this.get("permalink").toLowerCase() === e.toLowerCase()
            }
        })
    },
    599: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e.attribute,
                n = e.Collection,
                i = e.collectionArgs,
                r = e.listenToChanges,
                o = void 0 === r ? !0 : r,
                a = e.onCollectionCreated,
                s = this.get(t);
            if (s) {
                var l = this._subCollections[t];
                if (l) return void(o && (l.reset(s, {
                    parse: !0
                }), l.lastFetchTime = Date.now()));
                var u = this._subCollections[t] = new n(null, i ? i.call(this) : {});
                a && a.call(this, u), u.isPopulated() || (u.add(s, {
                    parse: !0
                }), u.lastFetchTime = Date.now())
            }
        }
        e.exports = new(n(21))({
            requiresPrototype: n(64).prototype,
            _subCollections: null,
            applyTo: function(e, t) {
                var r = [].concat(t),
                    o = e.constructor,
                    a = r.reduce(function(e, t) {
                        return e["change:" + t.attribute] = function() {
                            i.call(this, t)
                        }, e
                    }, {});
                this.before(e, {
                    setup: function() {
                        var e = this;
                        this._subCollections = {}, n(3).each(a, function(t, n) {
                            e.on(n, t), t.call(e)
                        })
                    }
                }), this.before(o, {
                    onCleanup: function(e) {
                        r.forEach(function(t) {
                            var n = t.attribute,
                                i = e._subCollections[n];
                            i && i.release()
                        }), e._subCollections = null
                    }
                }), this.extend(e, {
                    getSubCollection: function(e) {
                        return this._subCollections[e] || i.call(this, n(3).findWhere(r, {
                            attribute: e
                        })), this._subCollections[e]
                    }
                })
            }
        })
    },
    613: function(e, t, n) {
        "use strict";
        var i = n(22).Events,
            r = n(3).noop,
            o = n(3).assign,
            a = n(3).constant;
        e.exports = {
            stream: o({
                shuffle: r,
                unshuffle: function() {
                    return []
                },
                pause: r,
                peek: r,
                resume: r,
                isEnded: a(!0)
            }, i),
            dispose: r
        }
    },
    614: function(e, t, n) {
        "use strict";
        var i = window.document.referrer,
            r = n(65).parse(i).host || "",
            o = (n(65).getQueryParam("utm_medium") || "").toLowerCase(),
            a = [/\.ask\.com$/, /\.baidu\.com$/, /\.bing\.com$/, /\.duckduckgo\.com$/, /\.google\.com$/, /\.yahoo\.com$/, /\.yandex\.com$/];
        e.exports = {
            facebook: "facebook" === o || /\bfacebook\.com/.test(i) || /\bw\.soundcloud\.com/.test(i) && /origin=facebook/.test(i) || !!n(65).getQueryParam("fb_action_ids"),
            googleplus: "googleplus" === o,
            searchEngine: a.some(i.match, r)
        }
    },
    615: function(e, t, n) {
        "use strict";
        e.exports = function(e, t, i) {
            function r() {
                d = e().done(u.resolve.bind(u)).progress(u.notify).fail(a)
            }

            function o(e) {
                l.options.giveUp = 0 === e.status ? 1 / 0 : s
            }

            function a(e) {
                0 === e.status || t(e) ? (o(e), l.failed()) : u.reject()
            }
            i = n(3).defaults(i || {}, {
                maxRetries: 3
            });
            var s = i.maxRetries,
                l = new(n(148))({
                    giveUp: s
                }),
                u = n(55).defer(),
                c = u.promise(),
                d = void 0;
            return l.on("giveup", u.reject), l.on("enabled", r), u.always(function() {
                l.dispose()
            }), r(), c.abort = function() {
                d.abort(), u.reject()
            }, c
        }
    },
    616: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return !t.neverRelease && t.sweep() || e
        }

        function r() {
            h.forEach(function(e) {
                e.beginSweep()
            });
            do; while (h.reduce(i, !1));
            h.forEach(function(e) {
                e.endSweep(), e.mark()
            })
        }

        function o() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? p : arguments[0];
            a(), f = window.setInterval(r, e)
        }

        function a() {
            f && (window.clearInterval(f), f = null)
        }

        function s(e) {
            return e ? function(t) {
                l(t), e.apply(t, arguments)
            } : l
        }

        function l(e) {
            e.off && e.off(), e.stopListening && e.stopListening()
        }

        function u(e) {
            return e.__constructor__ || e
        }
        var c = n(3),
            d = c.noop,
            p = 6e4,
            h = [],
            f = void 0,
            g = function() {
                var e = 0;
                return function() {
                    return "f-" + ++e
                }
            }();
        o(), e.exports = {
            GC_INTERVAL: p,
            setStoreCleanupInterval: o,
            clearStoreCleanupInterval: a,
            applyTo: function m(e, t) {
                t = n(3).assign({
                    neverRelease: !1,
                    cleanupInstantly: !1,
                    hashFn: function() {
                        return null
                    },
                    prepareArgs: function() {
                        return arguments
                    },
                    prepareInstance: function() {
                        return this
                    },
                    getIncrementValue: function() {
                        return 1
                    },
                    onHold: d,
                    onRelease: d,
                    onCleanup: null
                }, t, e), delete t.prototype;
                var i = e.extend || n(22).Model.extend,
                    o = t.neverRelease,
                    a = new(n(1399))({
                        autoCleanup: t.cleanupInstantly,
                        onCleanup: s(t.onCleanup),
                        onIncrement: t.onHold,
                        onDecrement: t.onRelease,
                        neverRelease: o
                    });
                h.push(a);
                var l = o ? d : function(e) {
                        a.increment(this.resource_id, e)
                    },
                    c = o ? d : function(e) {
                        a.decrement(this.resource_id, e)
                    },
                    p = {
                        hold: l,
                        release: c,
                        _usageCount: function() {
                            return a.countFor(this.resource_id)
                        },
                        constructor: function() {
                            for (var t = arguments.length, n = Array(t), i = 0; t > i; i++) n[i] = arguments[i];
                            var r = f.prepareArgs.apply(this, n),
                                o = f.hashFn.apply(this, r) || g(),
                                s = f.neverRelease ? 1 : f.getIncrementValue.apply(null, r),
                                l = a.get(o);
                            return l ? (this.constructor.neverRelease || l.hold(s), f.prepareInstance.apply(l, r), l) : (l = this, a.set(o, l), l.constructor.neverRelease || l.hold(s - 1), l.resource_id = o, u(e).apply(l, r), void f.prepareInstance.apply(l, r))
                        }
                    },
                    f = i.call(e, p, t);
                return n(3).assign(f, {
                    __constructor__: u(e),
                    reset: function() {
                        a.reset()
                    },
                    extend: function(e) {
                        e = e || {}, n(3).isArray(e) && (e = n(3).assign.apply(null, [{}].concat(e)));
                        var t = i.apply(f, arguments);
                        t.extend = i;
                        var r = m(t, f);
                        return r.__super__ && (r.__super__ = r.__super__.constructor.__super__), r
                    },
                    instances: function() {
                        return a.add = function(e) {
                            var t = f.hashFn(e.attributes);
                            e.resource_id = t, t && this.set(t, e)
                        }, a
                    }(),
                    getNewInstance: function() {
                        var e = f.hashFn;
                        f.hashFn = g;
                        for (var t = arguments.length, n = Array(t), i = 0; t > i; i++) n[i] = arguments[i];
                        var r = new(Function.prototype.bind.apply(f, [null].concat(n)));
                        return f.hashFn = e, r
                    },
                    removeInstance: function(e) {
                        a.decrement(e.resource_id, 1 / 0), r()
                    }
                })
            }
        }
    },
    617: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var i, o, a, s = e.getAttribute("data-id"),
                l = r[s];
            o = l.__class, delete r[s], l.key && (a = l.key), i = t.addSubview(new o(n(3).omit(l, "__path", "__class", "key")), a), i.render(), e.parentNode.replaceChild(i.el, e)
        }
        var r = {},
            o = 0,
            a = e.exports = {
                handlebarHelper: function(e, t) {
                    var i = t.hash;
                    return i.args && (n(3).isFunction(i.args) && (i.args = i.args(this)), t.hash = i = n(3).assign({}, i.args, i)), delete i.args, t.fn && (i.blockContent = new(n(20).SafeString)(t.fn(this))), a.registerSubview(e, t.hash)
                },
                registerSubview: function(e, t) {
                    var n = o++;
                    return t.__class = e, t.className && (t.className = [e.prototype.className, t.className].filter(Boolean).join(" ")), r[n] = t, '<view data-id="' + n + '"></view>'
                },
                replacePlaceholders: function(e) {
                    e.$("view").each(function() {
                        i(this, e)
                    })
                }
            }
    },
    618: function(e, t, n) {
        "use strict";

        function i() {
            this.set("transfer", new(n(515))), this.set("transcoding", new(n(515)))
        }

        function r(e) {
            a.call(this, e, !0)
        }

        function o(e) {
            a.call(this, e, !1)
        }

        function a(e, t) {
            this.get("transfer")[t ? "addTransfer" : "removeTransfer"](e.get("transfer")), this.get("transcoding")[t ? "addTransfer" : "removeTransfer"](e.get("transcoding")), s.call(this)
        }

        function s() {
            var e, t = this._uploadsCollection,
                i = !1,
                r = !1,
                o = !0,
                a = !0;
            t.some(function(e) {
                switch (e.get("status")) {
                    case n(97).UPLOADING:
                        return r = !0, !0;
                    case n(97).QUEUED:
                        i = !0, a = !1, o = !1;
                        break;
                    case n(97).TRANSCODING:
                        a = !1, o = !1;
                        break;
                    case n(97).COMPLETE:
                        o = !1
                }
            }), e = r ? n(97).UPLOADING : i ? n(97).QUEUED : o ? n(97).FAILED : a ? n(97).COMPLETE : n(97).TRANSCODING, this.set("status", e)
        }
        var l = n(70).extend({
            model: n(389),
            url: null,
            isFullyPopulated: function() {
                return !0
            },
            hasDataForView: function() {
                return !0
            }
        });
        e.exports = n(64).extend({
            resource_type: "aggregate-audio-upload",
            url: null,
            _uploadsCollection: null,
            hasDataForView: function() {
                return !0
            },
            setup: function(e) {
                this._uploadsCollection = new l, this.set({
                    status: n(97).QUEUED,
                    hasBeenSaved: !1
                }), this.listenTo(this._uploadsCollection, "change:status", s).listenTo(this._uploadsCollection, "add", r).listenTo(this._uploadsCollection, "remove", o), i.call(this), this.addUploads(e.uploads)
            },
            addUploads: function(e) {
                this._uploadsCollection.add(e)
            },
            getUploadsCollection: function() {
                return this._uploadsCollection
            },
            getUploads: function() {
                return this._uploadsCollection.models
            },
            remove: function() {
                this._uploadsCollection.remove(this.getUploads()), this.destroy()
            },
            isHQUpload: function() {
                return this._uploadsCollection.every(function(e) {
                    return e.isHQUpload()
                })
            }
        }, {
            hashFn: function(e, t) {
                function n(e) {
                    return e.resource_id
                }
                return t && t.resource_id || e && (e.uploads && e.uploads.length && e.uploads.map(n).join("_") || e.id || e.resource_id) || null
            },
            onCleanup: function(e) {
                e._uploadsCollection.remove(e.getUploads()), e._uploadsCollection.release()
            }
        })
    },
    619: function(e, t, n) {
        "use strict";

        function i(e) {
            return function(t) {
                return s(t, e, {
                    resource_id: t.resource_id
                })
            }
        }

        function r(e, t) {
            var i = s(e, n(168), n(3).extend({
                resource_id: e.resource_id
            }, t));
            return n(1821).getDataFromFile(e.get("file")).done(function(e) {
                e.artwork_data && i.setImageFile(n(1400).getBlobFromDataURI(e.artwork_data), "id3"), i.set(n(3).omit(e, "artwork_data"))
            }), i.set("availability", n(296).getDefaultAvailability()), i
        }

        function o(e, t, i) {
            var o = s(e, n(516), {
                resource_id: e.resource_id
            });
            o.set("sharing", n(296).getDefaultAvailability()), i && o.setTitleFromFolder(i);
            var a = e.getUploads().map(function(e) {
                return r(e, t)
            });
            return o.addSoundForms(a), l(o), o
        }

        function a(e, t) {
            var n = new e(null, t);
            return n.release(), n
        }

        function s(e, t, n) {
            var i = a(t, n);
            return i.setFileUpload(e), i
        }

        function l(e) {
            var t = new(n(478));
            t.add(e, {
                at: 0
            }), t.release()
        }

        function u(e, t) {
            var i = t.asPlaylist,
                r = t.isDragNDrop;
            n(58).trackV0Click(["upload_group", 1 === e ? "single" : "multiple", 1 === e ? !1 : i ? "grouped" : "ungrouped"].filter(Boolean), {
                click_attributes: {
                    is_drag_n_drop: !!r
                }
            })
        }
        var c;
        e.exports = {
            preparePlaylistForm: o,
            prepareSoundUploadForm: r,
            prepareSoundEditForm: i(n(168)),
            addFiles: function(e) {
                var t = this,
                    r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    o = r.toPlaylistUploadId,
                    a = r.replaceSoundUploadId,
                    s = r.ReplaceSoundUploadClass,
                    d = r.isDragNDrop;
                c || (c = new(n(267)));
                var p = !o && n(296).getUploadAsPlaylist() && n(54).get("me").canBulkUploadAsPlaylist(),
                    h = {},
                    f = c.extractFolderName(e);
                return c.addFiles(e, {
                    replaceSoundUploadId: a
                }).then(function(e) {
                    var n = e.length;
                    if (p && n > 1) h.inPlaylist = !0, t.preparePlaylistForm(c.addUploadsAsAggregate(e), h, f);
                    else if (o) t.preparePlaylistForm(c.addUploadsToAggregate(e, o), h, f);
                    else if (a) {
                        var r = s ? i(s) : t.prepareSoundEditForm;
                        e.forEach(r)
                    } else e.map(t.prepareSoundUploadForm).forEach(l);
                    n > 0 && !o && u(n, {
                        asPlaylist: p,
                        isDragNDrop: d
                    })
                })
            }
        }
    },
    620: function(e, t, n) {
        "use strict";
        var i = e.exports = function(e, t) {
            var i, r = t.resource_type;
            return "single-audio-upload" === r ? i = new(n(389))(e, t) : "aggregate-audio-upload" === r && (i = new(n(618))(e, t)), i
        };
        i.getClass = function(e) {
            var t = e.resource_type;
            return "single-audio-upload" === t ? n(389) : "aggregate-audio-upload" === t ? n(618) : void 0
        }
    },
    621: function(e, t, n) {
        "use strict";
        e.exports = n(181).extend([n(22).Events, {
            latest: 0,
            totalSize: 0,
            initialize: function(e) {
                e || (e = {}), this.totalSize = e.totalSize || 0
            },
            isIndeterminate: function() {
                return !this.totalSize
            },
            add: function(e) {
                return e !== this.latest && (this.latest = e, this.trigger("data")), this
            },
            setTotal: function(e) {
                if (this.totalSize !== e) {
                    var t = !this.totalSize || !e;
                    this.totalSize = e, t && this.trigger("change:indeterminate", this.isIndeterminate())
                }
                return this
            },
            getValue: function() {
                return this.latest
            },
            getProgress: function() {
                return this.totalSize ? this.latest / this.totalSize : 0
            },
            getTotalSize: function() {
                return this.totalSize
            }
        }])
    },
    763: function(e, t) {
        "use strict";
        var n = ["NL"];
        e.exports = {
            COOKIE_CONSENT_NAME: "cookie_consent",
            COOKIE_CONSENT_VALUE: "1",
            hasExplicitCookiesConsentMode: function(e, t) {
                return (t || n).indexOf(e) > -1
            }
        }
    },
    764: function(e, t, n) {
        "use strict";

        function i(e) {
            return e && (e.attributes || e)
        }

        function r(e, t) {
            var i = "visuals" === e ? u.availableVisualsSizes : u.availableSizes,
                r = n(3).find(i, function(e) {
                    return e[0] >= t
                }) || n(3).last(i);
            return "t20x20" === r[1] && "artworks" === e ? "tiny" : r[1]
        }

        function o(e) {
            if (e) {
                var t, n;
                for (t = 0, n = e.length; n > t; ++t)
                    if (!u.isDefaultImage(e[t].artwork_url)) return e[t].artwork_url
            }
            return null
        }

        function a(e) {
            u.imageUrlRegex.lastIndex = 0;
            var t, n = u.imageUrlRegex.exec(e);
            return n && (t = n[3].charCodeAt(0) % 4 + 1, 1 !== t && (e = e.replace("//i1.", "//i" + t + "."))), e
        }
        var s = /^http:/,
            l = /default/,
            u = e.exports = {
                tagOptions: {
                    whitelist: ["alt", "class", "height", "itemprop", "src", "title", "width"]
                },
                availableSizes: [
                    [20, "t20x20"],
                    [50, "t50x50"],
                    [120, "t120x120"],
                    [200, "t200x200"],
                    [500, "t500x500"]
                ],
                availableVisualsSizes: [
                    [1240, "t1240x260"],
                    [2480, "t2480x520"]
                ],
                imageUrlRegex: /^.*\/(\w+)-([-a-zA-Z0-9]+)-([a-z0-9]+)\.(jpg|png|gif).*$/i,
                markup: function(e, t) {
                    var i = this.getMarkupAttrs(e, t);
                    return n(312).getMarkup("img", i, this.tagOptions)
                },
                getMarkupAttrs: function(e, t) {
                    return e = i(e), n(3).assign({
                        src: this.urlFrom(e, t.size),
                        width: t.size,
                        height: t.size,
                        alt: this.getAltText(e)
                    }, t)
                },
                urlFrom: function(e, t, n, r) {
                    e = i(e);
                    var a = e && (e.calculated_artwork_url || e.artwork_url || e.avatar_url || !r && o(e.tracks) || e.user && e.user.avatar_url);
                    return a = a ? a.replace(s, "https:") : "", this.setFormat(a, t, n)
                },
                setFormat: function(e, t, n) {
                    if (this.isDefaultImage(e)) return "";
                    u.imageUrlRegex.lastIndex = 0;
                    var i = u.imageUrlRegex.exec(e);
                    if (i) {
                        var o = i[1],
                            s = i[3],
                            l = r(o, t);
                        l && (e = e.replace(s, l)), n && (e = a(e))
                    }
                    return e
                },
                isDefaultImage: function(e) {
                    return !e || l.test(e)
                },
                getAltText: function(e) {
                    return e = i(e), e ? e.username ? n(441).get(e, !0) + " avatar" : n(441).get(e) : ""
                },
                isSquare: function(e) {
                    return e.width === e.height
                }
            }
    },
    765: function(e, t) {
        "use strict";
        var n = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
        e.exports = {
            format: function(e) {
                return "number" != typeof e && (e = parseInt(e, 10)), e !== e ? "" : e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            },
            inWords: function(e) {
                return n[e] || e
            },
            round: function(e, t) {
                var n = Math.pow(10, t || 0);
                return Math.round(e * n) / n
            },
            zeroPad: function(e, t) {
                if (null == e) return e;
                e += "";
                var n = t - e.length;
                return n > 0 && (e = new Array(n + 1).join("0") + e), e
            },
            toOrdinal: function(e) {
                if (null == e) return e;
                var t = ["th", "st", "nd", "rd"],
                    n = e % 100;
                return e + (t[(n - 20) % 10] || t[n] || t[0])
            }
        }
    },
    1236: function(e, t, n) {
        var i = n(2377);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    1345: function(e, t) {
        e.exports = {
            ERROR: "banana-bus-error",
            OPEN: "banana-bus-open",
            DATA: "banana-bus-data",
            ACTION: "banana-bus-action",
            DISPOSE: "banana-bus-dispose",
            PUBLISH: "banana-bus-publish",
            PUBLISH_EVENT: "banana-bus-publish-event"
        }
    },
    1391: function(e, t, n) {
        (function(t) {
            "use strict";
            var i, r = /^https?:\/\/.+?\//,
                o = /^https?/,
                a = {
                    likes: "favorites",
                    people: "users",
                    sound: "track",
                    sounds: "tracks",
                    "web-profile": "web_profile"
                };
            e.exports = {
                initialize: function(e) {
                    var o = this,
                        a = n(54).get("client_id"),
                        s = n(54).get("public_api_host");
                    t.ajaxSetup({
                        statusCode: e.statusCode,
                        xhr: i,
                        progress: null,
                        timeout: 4e4,
                        beforeSend: function(e, t) {
                            var i = o.isPublicApiEndpoint(t.url),
                                l = o.isApiV2Endpoint(t.url);
                            t.crossDomain = !0, (i || l) && (!t.omitAuthorization && n(61).isLoggedIn() && e.setRequestHeader("Authorization", "OAuth " + n(61).getAuthToken()), i && (t.url = s + t.url.replace(r, "")), t.url = n(65).modify(t.url, {
                                query: {
                                    client_id: a,
                                    app_version: n(54).get("app_version"),
                                    app_locale: n(50).getLocale()
                                }
                            }))
                        }
                    })
                },
                isPublicApiEndpoint: function(e) {
                    return !o.test(e) || 0 === e.indexOf(n(54).get("public_api_host"))
                },
                isApiV2Endpoint: function(e) {
                    return 0 === e.indexOf(n(54).get("api_v2_host"))
                },
                toAPIResource: function(e) {
                    return a[e] || e
                }
            };
            i = function() {
                var e, n = t.ajaxSettings.xhr,
                    i = ["Date", "Content-Type"];
                return e = function() {
                        var e = this,
                            t = e._getAllResponseHeaders();
                        return t || 200 !== this.status ? t : i.map(function(t) {
                            return e.getResponseHeader(t) ? t + ": " + e.getResponseHeader(t) : void 0
                        }).filter(Boolean).join("\n") + "\n"
                    },
                    function() {
                        var t = n();
                        return t._getAllResponseHeaders = t.getAllResponseHeaders, t.getAllResponseHeaders = e, this.progress && t.upload.addEventListener("progress", this.progress.bind(this)), t
                    }
            }()
        }).call(t, n(1))
    },
    1392: function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            return o(e.priority, t.priority)
        }

        function o(e, t) {
            return t > e ? -1 : e > t ? 1 : 0
        }
        var a = function() {
                function e(t, r, o) {
                    i(this, e), this.fn = t, this.defer = n(55).defer(), this.priority = o
                }
                return e.prototype.run = function() {
                    var e = this.defer,
                        t = e.resolve,
                        n = e.reject;
                    return this.fn().done(t).fail(n)
                }, e.prototype.cancel = function() {
                    this.defer.reject()
                }, e
            }(),
            s = function() {
                function e(t) {
                    i(this, e), this.tasks = new(n(1860))(r), this.paused = !1, this.pendingCount = 0, this.maxConcurrentTasks = t
                }
                return e.prototype.processQueue = function() {
                    var e = this;
                    if (!this.paused)
                        for (; this.maxConcurrentTasks - this.pendingCount > 0 && this.tasks.getLength();) {
                            var t = this.tasks.dequeue();
                            this.pendingCount++, t.run().always(function() {
                                e.pendingCount--, e.processQueue()
                            })
                        }
                }, e.prototype.addTask = function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? 1 : arguments[1],
                        n = new a(e, t);
                    return this.tasks.enqueue(n), this.processQueue(), n
                }, e.prototype.removeTask = function(e) {
                    return e.cancel(), this.tasks.remove(e)
                }, e.prototype.pause = function() {
                    this.paused = !0
                }, e.prototype.resume = function() {
                    this.paused = !1, this.processQueue()
                }, e.prototype.clear = function() {
                    this.tasks.clear()
                }, e
            }();
        e.exports = {
            AsyncTask: a,
            AsyncTasksQueue: s
        }
    },
    1393: function(e, t, n) {
        "use strict";

        function i(e) {
            return "SCAUDIO.NOT_SUPPORTED_ERROR" === e || "SCAUDIO.NO_STREAMS" === e
        }

        function r() {
            return n(54).get("rollouts").get("debug_playback")
        }

        function o(e) {
            var t = e instanceof p ? e.getPlayer() : e;
            return t instanceof b ? t : null
        }

        function a(e, t) {
            if ("__sc_players" in window || (window.__sc_players = {}), T.indexOf(e) >= 0) return T.splice(T.indexOf(e), 1), void T.push(e);
            if (window.__sc_players[t] = e, T.push(e), T.length > 10) {
                var n = T.shift();
                n.isDead() && s(n)
            }
        }

        function s(e) {
            Object.keys(window.__sc_players).some(function(t) {
                return window.__sc_players[t] === e ? (delete window.__sc_players[t], !0) : !1
            })
        }

        function l(e, t) {
            var n = function() {
                    window.clearTimeout(i);
                    var o = e.getPosition();
                    o !== r && (t(), r = o), e.isActuallyPlaying() && !e.isEnded() && (i = window.setTimeout(n, C))
                },
                i = 0,
                r = null,
                o = e.onChange.subscribe(function(e) {
                    var t = e.actuallyPlaying,
                        r = e.positionJumped,
                        o = e.ended,
                        a = e.dead;
                    a ? window.clearTimeout(i) : (void 0 !== t || r || void 0 !== o) && n()
                });
            return (e.isActuallyPlaying() || 0 !== e.getPosition()) && n(), {
                remove: function() {
                    o.remove(), window.clearTimeout(i)
                }
            }
        }

        function u(e) {
            var t = e.trackUrn,
                i = void 0 === t ? "" : t,
                r = e.quality,
                o = void 0 === r ? "" : r,
                a = e.audioQualityMode,
                s = void 0 === a ? "" : a,
                l = e.preset,
                u = void 0 === l ? "" : l,
                c = e.entityType,
                d = e.bitrate,
                p = e.format,
                h = e.host,
                f = e.latency,
                g = e.playerType,
                m = e.protocol,
                v = e.preloaded,
                b = e.type,
                w = e.appState,
                x = e.playerVariant;
            n(137).audioPerformance({
                track_urn: i,
                bitrate: d,
                format: p,
                host: h,
                latency: f,
                player_type: g,
                protocol: m,
                preloaded: v,
                type: b,
                app_state: w,
                player_variant: x,
                quality: o,
                preset: u,
                entity_type: c,
                player_version: "v" + _,
                player_build_number: y,
                audio_quality_mode: s
            })
        }

        function c(e) {
            var t = e.trackUrn,
                r = void 0 === t ? "" : t,
                o = e.audioQualityMode,
                a = void 0 === o ? "" : o,
                s = e.quality,
                l = void 0 === s ? "" : s,
                u = e.preset,
                c = void 0 === u ? "" : u,
                d = e.bitrate,
                p = void 0 === d ? "" : d,
                b = e.format,
                w = void 0 === b ? "" : b,
                x = e.host,
                k = void 0 === x ? "" : x,
                S = e.playerType,
                C = e.protocol,
                T = void 0 === C ? "" : C,
                E = e.url,
                A = void 0 === E ? "" : E,
                I = e.entityType,
                M = e.appState,
                D = e.errorCode,
                P = e.playerVariant,
                N = e.log,
                O = e.logId,
                R = null;
            try {
                n(137).audioError({
                    bitrate: p,
                    format: w,
                    host: k,
                    player_type: S,
                    protocol: T,
                    quality: l,
                    preset: c,
                    url: A,
                    app_state: M,
                    entity_type: I,
                    error_code: D,
                    player_variant: P,
                    track_urn: r,
                    player_version: "v" + _,
                    player_build_number: y,
                    audio_quality_mode: a,
                    log_id: O
                })
            } catch (L) {
                R = L
            }
            if (i(D) || n(284).notify({
                    error: {
                        name: "SCAudio: " + D,
                        message: D
                    },
                    context: {
                        component: "SCAudio",
                        scaudioVersion: _,
                        MaestroCoreVersion: h,
                        HTML5ControllerVersion: f,
                        HLSMSEControllerVersion: g,
                        ChromecastControllerVersion: m,
                        stringLoaderVersion: v,
                        streamUrl: A,
                        playerType: S,
                        streamFormat: w,
                        log: N.slice().reverse(),
                        logId: O
                    }
                }), R) throw R
        }

        function d() {
            var e = n(157).getMuted() ? 0 : n(157).getVolume();
            w(e)
        }
        var p = n(164).ProxyPlayer,
            h = n(164).version,
            f = n(354).version,
            g = n(1353).version,
            m = n(1352).version,
            v = n(562).version,
            _ = n(165).version,
            y = n(165).buildNumber,
            b = n(165).Player,
            w = n(165).setGlobalVolume,
            x = n(1789).buildConnectionEventManager,
            k = n(1794).buildPreloadingManager,
            S = n(83).MS_IN_SECOND,
            C = S / 60,
            T = [],
            E = x();
        d(), n(157).on("change:local", d);
        e.exports = {
            scheduleMediaElementActivation: function() {
                window.addEventListener("click", function e() {
                    window.removeEventListener("click", e, !0), n(3).values(n(492)).forEach(function(e) {
                        return e.activate()
                    })
                }, !0)
            },
            createPlayer: function(e, t) {
                function i() {
                    if ("AD" === t.type) return n(1792).buildPlayer({
                        url: t.url,
                        audioPerformanceReporter: u,
                        errorReporter: c,
                        audioReporter: h,
                        checkpointInterval: f
                    });
                    if ("GENERAL" === t.type) return d();
                    throw new Error("Unknown type: " + t.type)
                }

                function d() {
                    function i() {
                        var e = n(180).isCasting();
                        if (!(s === r && e || s === o && !e)) {
                            if (s) {
                                var i = g.getPlayer();
                                i && (g.removePlayer(), i.kill()), d && (d.reject(a), d = null), s = null
                            }
                            e ? (s = l = r, d = n(1791).buildPlayer({
                                dataPromise: t.dataPromise,
                                audioPerformanceReporter: u,
                                errorReporter: c
                            }), d.then(function(e) {
                                g.providePlayer(e, {
                                    syncPosition: g.isPlaying(),
                                    syncVolume: !1
                                })
                            })) : (l && g.pause(), s = l = o, d = n(1793).buildPlayer({
                                dataPromise: t.dataPromise,
                                audioPerformanceReporter: u,
                                errorReporter: c,
                                audioReporter: h,
                                checkpointInterval: f
                            }), d.then(function(e) {
                                g.providePlayer(e, {
                                    syncPosition: !0,
                                    syncVolume: !1
                                })
                            })), d.fail(function(e) {
                                e !== a && g.kill()
                            })
                        }
                    }
                    var r = "chromecast",
                        o = "general",
                        a = {},
                        s = null,
                        l = null,
                        d = null,
                        g = new p({
                            shouldPassThroughFatalErrors: !0,
                            name: "General+ChromecastProxy-" + e,
                            logger: n(334)
                        });
                    return i(), n(56).on("googleCast:audioHijack", i), n(56).on("googleCast:audioRestored", i), g.onChange.subscribe(function(e) {
                        var t = e.dead;
                        t && (n(56).off("googleCast:audioHijack", i), n(56).off("googleCast:audioRestored", i), d && (d.reject(a), d = null))
                    }), g
                }
                var h = t.audioReporter,
                    f = t.checkpointInterval,
                    g = k(),
                    m = i();
                if (r() && a(m, e), m.onChange.subscribe(function(e) {
                        var t = e.dead;
                        t && r() && s(m)
                    }), m.isDead()) throw m.getFatalError();
                var v = function() {
                    var e = o(m);
                    e && (E.handleConnectionEvents(e), g.registerPlayer(e));
                    var t = !1;
                    return {
                        v: {
                            play: function() {
                                r() && (window.__sc_players.current = m), m.isEnded() && m.seek(0), m.play()
                            },
                            pause: function() {
                                return m.pause()
                            },
                            pauseAfterFade: function(e) {
                                var t = o(m);
                                t ? t.pauseAfterFade(e) : m.pause()
                            },
                            seek: function(e) {
                                if ("number" != typeof e) throw new Error("Seek position must be a number.");
                                m.seek(e)
                            },
                            getPosition: function() {
                                return m.getPosition()
                            },
                            enablePreloading: function() {
                                return g.enablePreloading()
                            },
                            disablePreloading: function() {
                                return g.disablePreloading()
                            },
                            getMaxBufferLength: function() {
                                return m.getMaxBufferLength()
                            },
                            isPlaying: function() {
                                return m.isPlaying()
                            },
                            isLoading: function() {
                                return m.isLoading()
                            },
                            isEnded: function() {
                                return m.isEnded()
                            },
                            getCurrentBufferedTimeRange: function() {
                                return m.getCurrentBufferedTimeRange()
                            },
                            getDuration: function() {
                                return m.getDuration()
                            },
                            getListenTime: function() {
                                return m.getListenTime()
                            },
                            getQuality: function() {
                                var e = o(m);
                                return e ? e.getQuality() : null
                            },
                            addEventListener: function(n, i) {
                                var r = function() {
                                        return i()
                                    },
                                    o = function() {
                                        switch (n) {
                                            case "play":
                                                return [m.onPlayIntent.subscribe(r), m.onPauseRejection.subscribe(r)];
                                            case "pause":
                                                return [m.onPauseIntent.subscribe(r), m.onPlayRejection.subscribe(r)];
                                            case "playStart":
                                                return m.onPlay.subscribe(r);
                                            case "finish":
                                                return m.onEnded.subscribe(r);
                                            case "seeked":
                                                return m.onPositionJumped.subscribe(r);
                                            case "buffering:start":
                                                return m.onLoadStart.subscribe(r);
                                            case "buffering:end":
                                                return m.onLoadEnd.subscribe(r);
                                            case "qualityChanged":
                                                if (e) return e.onQualityChanged.subscribe(function(e) {
                                                    return i({
                                                        quality: e
                                                    })
                                                });
                                                return;
                                            case "time":
                                                return l(m, r);
                                            case "playerError":
                                                return m.onChange.subscribe(function(e) {
                                                    var n = e.dead,
                                                        r = e.fatalError;
                                                    r ? i({
                                                        error: new Error("SCAudio error: " + r.getCode())
                                                    }) : n && !t && i({
                                                        error: new Error("Unexpected error.")
                                                    })
                                                });
                                            case "dead":
                                                return m.onChange.subscribe(function(e) {
                                                    var t = e.dead;
                                                    t && i()
                                                })
                                        }
                                    },
                                    a = o() || [];
                                return Array.isArray(a) || (a = [a]), {
                                    remove: function() {
                                        a.forEach(function(e) {
                                            return e.remove()
                                        }), a = []
                                    }
                                }
                            },
                            kill: function() {
                                t = !0, m.kill()
                            }
                        }
                    }
                }();
                return "object" == typeof v ? v.v : void 0
            }
        }
    },
    1394: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e, t) {
                var i = new(n(1797))(n(3).defaults({
                    $targetEl: t
                }, e.viewOptions));
                return i.once("dismissed", a).once("closed", s), n(55).all([n(55).delay(c), n(131).whenInserted(t[0], {
                    timeout: 1e4
                })]).then(function() {
                    i.disposed || (window.document.body.appendChild(i.el), i.render())
                }), i
            }

            function r(e) {
                var t = new(n(69))(e.viewOptions);
                return t.once(n(69).Events.CLOSED, function() {
                    a(), s()
                }), n(55).delay(c).then(function() {
                    t.disposed || t.open()
                }), t
            }

            function o(e) {
                var t = n(1376)[e];
                return t
            }

            function a() {
                u.set(l.id, !0)
            }

            function s() {
                l = null
            }
            var l, u = new(n(93))("callouts"),
                c = 500;
            u.prune(Object.keys(n(1376))), n(56).on("connect:logout", u.reset, u);
            e.exports = {
                shouldDisplay: function(e) {
                    return !l && !u.get(e) && o(e).shouldDisplay()
                },
                display: function(e, n) {
                    var a = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                        s = t.extend(!0, {}, o(e), a),
                        u = "callout" === s.viewType ? i(s, n) : "modal" === s.viewType ? r(s) : null;
                    return l = {
                        id: e,
                        config: s,
                        view: u
                    }, u
                }
            }
        }).call(t, n(1))
    },
    1395: function(e, t, n) {
        "use strict";
        e.exports = n(561)({
            label: "cast-sender",
            enabled: !0,
            buffer: !0
        })
    },
    1396: function(e, t, n) {
        "use strict";
        e.exports = n(96).extend({
            message: function() {
                return n(54).get("me").isAudioPartner() ? n(50).t("You can only monetize audio content") : n(50).t("You can only monetize music content")
            },
            check: function(e, t) {
                var i = n(54).get("me").isAudioPartner();
                t(i && e === !1 || !i && e === !0)
            }
        })
    },
    1397: function(e, t, n) {
        "use strict";
        e.exports = n(96).extend({
            minLength: 0,
            message: n(50).t("[[minLength]] characters min"),
            check: function(e, t) {
                t(e.length >= this.minLength)
            }
        })
    },
    1399: function(e, t, n) {
        "use strict";
        var i = e.exports = n(266).extend();
        n(1844).applyTo(i.prototype)
    },
    1400: function(e, t) {
        "use strict";
        e.exports = {
            getByteFromBuffer: function(e, t) {
                return t >= 0 && t < e.byteLength ? new Uint8Array(e, t, 1)[0] : void 0
            },
            getBlobFromDataURI: function(e) {
                var t, n, i, r, o = [],
                    a = e.split(",");
                t = a[0].indexOf("base64") > -1 ? window.atob(a[1]) : decodeURI(a[1]);
                var s = /^.*?:(.*?);/.exec(e);
                for (n = s ? s[1] : void 0, i = 0, r = t.length; r > i; i++) o[i] = t.charCodeAt(i);
                return new window.Blob([new Uint8Array(o)], {
                    type: n
                })
            }
        }
    },
    1401: function(e, t, n) {
        "use strict";
        e.exports = {
            getContextText: function(e, t, i) {
                var r = t && n(54).get("me") === t,
                    o = t && t.pick("username");
                switch (e.type) {
                    case "conversation":
                        return n(50).t("From a conversation with [[username]]", o);
                    case "stream":
                        return n(50).t("From your stream");
                    case "search":
                    case "search:albums":
                    case "search:high_tier":
                    case "search:playlists":
                    case "search:top_results":
                    case "search:tracks":
                        return n(50).t("From search results");
                    case "tags-sound":
                    case "tags-playlist":
                        return n(50).t("From [[tag]]", {
                            tag: e.resourceId
                        });
                    case "user-albums":
                        return r ? n(50).t("From your albums") : n(50).t("From [[username]]’s albums", o);
                    case "user-profile":
                        return r ? n(50).t("From your profile") : n(50).t("From [[username]]’s profile", o);
                    case "user-playlists":
                        return r ? n(50).t("From your playlists") : n(50).t("From [[username]]’s playlists", o);
                    case "user-liked-albums":
                        return r ? n(50).t("From your liked albums") : n(50).t("From [[username]]’s liked albums", o);
                    case "user-likes":
                        return r ? n(50).t("From your likes") : n(50).t("From [[username]]’s likes", o);
                    case "user-track_likes":
                        return r ? n(50).t("From your liked tracks") : n(50).t("From [[username]]’s liked tracks", o);
                    case "user-tracks":
                    case "user-sounds":
                        return r ? n(50).t("From your tracks") : n(50).t("From [[username]]’s tracks", o);
                    case "user-reposts":
                        return r ? n(50).t("From your reposts") : n(50).t("From [[username]]’s reposts", o);
                    case "charts":
                        var a = n(123).taglines(e.chartKind, e.genre),
                            s = {
                                display: a ? a["short"] : void 0
                            };
                        return n(50).t("From [[[display]]]", s);
                    case "recommender":
                        return n(50).t("From related tracks for [[title]]", {
                            title: t.get("title")
                        });
                    case "home":
                        return n(50).t("From the home page");
                    case "sets-for-sound":
                        return n(50).t("From playlists containing [[title]]", {
                            title: t.get("title")
                        });
                    case "history":
                        return n(50).t("From your history");
                    case "single":
                        return i.playlist ? n(50).t("From [[title]]", i.playlist.pick("title")) : "";
                    case "stations":
                        var l = {
                            title: t.get(t.getTitleAttribute())
                        };
                        return t.get("type") === n(132).types.ARTIST ? n(50).t("From artist station [[title]]", l) : n(50).t("From track station [[title]]", l);
                    default:
                        return "system-playlist" === e.resourceType ? n(50).t("From [[title]]", {
                            title: t.get("title")
                        }) : ""
                }
            },
            getContextModelInfo: function(e) {
                var t = {
                    resource_id: e.resourceId
                };
                switch (e.resourceType) {
                    case "user":
                        return [new(n(63))(t), {
                            requiredAttributes: ["username"]
                        }];
                    case "sound":
                        return [new(n(67))(t), {
                            requiredAttributes: ["title"]
                        }];
                    case "playlist":
                        return [new(n(85))(t), {
                            requiredAttributes: ["title"]
                        }];
                    case "station":
                        return [new(n(132))({
                            id: e.resourceId
                        }), {
                            requiredAttributes: ["title"]
                        }];
                    case "system-playlist":
                        return [new(n(177))({
                            id: e.resourceId
                        }), {
                            requiredAttributes: ["title"]
                        }];
                    default:
                        return null
                }
            }
        }
    },
    1402: function(e, t, n) {
        "use strict";
        e.exports = {
            bytesToMB: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    i = t.base,
                    r = void 0 === i ? n(107).windows ? 1024 : 1e3 : i,
                    o = t.digits,
                    a = void 0 === o ? 1 : o,
                    s = t.unit,
                    l = void 0 === s ? "MB" : s,
                    u = e / Math.pow(r, 2);
                return u.toFixed(a) + l
            }
        }
    },
    1403: function(e, t) {
        "use strict";
        e.exports = {
            codes: {
                AUD: "AUD",
                CAD: "CAD",
                EUR: "EUR",
                GBP: "GBP",
                NZD: "NZD",
                USD: "USD"
            },
            symbols: {
                AUD: "$",
                CAD: "$",
                EUR: "€",
                GBP: "£",
                NZD: "$",
                USD: "$"
            },
            codesWithSameSymbol: ["AUD", "CAD", "NZD", "USD"],
            taxCode: {
                AUD: void 0,
                CAD: "GST/HST/QST",
                EUR: "VAT",
                USD: void 0,
                GBP: "VAT",
                NZD: "GST"
            }
        }
    },
    1405: function(e, t, n) {
        "use strict";

        function i(e) {
            return n(55).promise(function(t, n) {
                var i = new window.FileReader;
                i.onload = function() {
                    return t(i.result)
                }, i.onerror = i.onabort = n, i.readAsDataURL(e)
            })
        }
        e.exports = {
            readAsDataURL: i
        }
    },
    1406: function(e, t, n) {
        "use strict";

        function i(e) {
            return new RegExp("(?:" + a + "|\\s|\\b)" + n(254).regexpEscape(e), "i")
        }
        var r = /\S/,
            o = /\s+/,
            a = "	 	",
            s = function(e) {
                return !e || !r.test(e)
            };
        e.exports = {
            makeFilterGenerator: function(e) {
                var t = e.map(function(e) {
                        if (-1 === e.indexOf(".")) return function(t) {
                            return t[e]
                        };
                        var t = e.split(".");
                        return function(e) {
                            return t.reduce(function(e, t) {
                                return e && e[t]
                            }, e)
                        }
                    }),
                    r = function(e) {
                        return n(475)(a + n(3).compact(t.map(function(t) {
                            return t(e.attributes)
                        })).join(a))
                    };
                return function(e) {
                    if (s(e)) return null;
                    var t = n(3).compact(n(475)(e).split(o)),
                        a = t.map(i);
                    return function(e) {
                        var t = r(e);
                        return a.every(function(e) {
                            return e.test(t)
                        })
                    }
                }
            }
        }
    },
    1407: function(e, t, n) {
        "use strict";
        var i;
        i = {
            prefix: "sc-icon",
            size: "small",
            title: !1,
            variation: null
        };
        e.exports = {
            render: function(e) {
                var t, r;
                return e = e || {}, e = n(3).defaults(e, i), t = [e.prefix, [e.prefix, e.type].join("-") + (e.variation ? "-" + e.variation : ""), [e.prefix, e.size].join("-"), e.title ? "sc-ir" : "", e["class"] || ""].filter(Boolean).join(" "), r = e.title ? n(20).Utils.escapeExpression(e.title) : "", '<span class="' + t + '">' + r + "</span>"
            }
        }
    },
    1408: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = window.URL.createObjectURL(e),
                i = n(55).defer(),
                r = new window.Image;
            return r.onload = function() {
                i.resolve(o(r)), window.URL.revokeObjectURL(t)
            }, r.src = t, i.promise()
        }

        function r(e) {
            var t = n(55).defer();
            if (e && n(106).blob) {
                var i = new window.XMLHttpRequest;
                i.onload = function() {
                    200 !== this.status ? t.reject() : t.resolve(this.response)
                }, i.onerror = t.reject, i.open("GET", e, !0), i.responseType = "blob", i.send()
            } else t.reject();
            return t.promise()
        }

        function o(e) {
            return (new(n(28))).getPalette(e, 4)
        }
        e.exports = {
            fetchColorsFromUrl: function(e) {
                if (!/^data\:/.test(e)) return r(e).then(i);
                var t = function() {
                    var t = n(55).defer(),
                        i = new window.Image;
                    return i.onload = function() {
                        t.resolve(o(i))
                    }, i.src = e, {
                        v: t.promise()
                    }
                }();
                return "object" == typeof t ? t.v : void 0
            }
        }
    },
    1409: function(e, t, n) {
        "use strict";
        var i = [37, 38, 39, 40, 9, 35, 36];
        e.exports = {
            makeReadOnly: function(e) {
                n(107).ios ? e.on("keydown", function(e) {
                    return e.isMetaKey() && !e.shiftKey || n(3).include(i, e.which) ? !0 : void e.preventDefault()
                }) : e.attr("readOnly", "readOnly")
            }
        }
    },
    1411: function(e, t, n) {
        (function(t) {
            "use strict";
            var n = void 0;
            e.exports = {
                getScrollbarSize: function() {
                    if (void 0 === n) {
                        var e = t('<div class="g-scrollable-inner" style="width:50px;height:50px;overflow:hidden; position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');
                        t("body").append(e);
                        var i = t("div", e).innerWidth();
                        e.css("overflow", "auto");
                        var r = t("div", e).innerWidth();
                        e.remove(), void 0 !== i && void 0 !== r && (n = i - r)
                    }
                    return n
                }
            }
        }).call(t, n(1))
    },
    1412: function(e, t, n) {
        "use strict";

        function i(e) {
            return n(3).pluck(n(89).countries([e.value]), "value")
        }

        function r(e) {
            return 0 === n(3).difference(o, e).length
        }
        var o = n(89).countryCodes(),
            a = .8,
            s = e.exports = {
                partition: function(e) {
                    var t = [],
                        o = [],
                        l = [];
                    return r(e) ? t.push(s.worldwide()) : n(89).regions().forEach(function(r) {
                        var s = i(r),
                            u = n(3).intersection(s, e),
                            c = n(3).difference(s, e);
                        u.length > s.length * a ? (t = t.concat(r), l = l.concat(c)) : o = o.concat(u)
                    }), {
                        regions: t,
                        countries: o.map(n(89).country),
                        exceptions: l.map(n(89).country)
                    }
                },
                worldwide: function() {
                    return {
                        title: n(50).t("Worldwide"),
                        value: "worldwide"
                    }
                }
            }
    },
    1413: function(e, t, n) {
        "use strict";

        function i() {
            s = null, a.reset()
        }

        function r() {
            if (!n(54).get("privacy_settings").isOptedInToTargetedAdvertising()) return i();
            if (!a.get("listener_id")) return o();
            var e = a.get("last_updated"),
                t = (Date.now() - e) / n(83).MS_IN_DAY;
            e && t >= 1 && o()
        }

        function o() {
            n(131).insertMultipleScriptsInSandbox(["//synchrobox.adswizz.com/register2.php", "//cdn.adswizz.com/adswizz/js/SynchroClient2.js"], void 0, {
                onScriptLoad: function(e, t) {
                    var n = t.com_adswizz_synchro_getListenerId();
                    n && (s = n, a.set("listener_id", n), a.set("last_updated", Date.now()))
                }
            })
        }
        var a = new(n(93))("aw"),
            s = null;
        e.exports = {
            initialize: function() {
                var e = n(54).get("privacy_settings");
                e.on("change:" + n(220).TARGETED_ADVERTISING_OPT_IN, function() {
                    e.isOptedInToTargetedAdvertising() ? r() : i()
                }), n(56).on("connect:logout", i), n(56).on("connect:login", r), r()
            },
            getAdswizzId: function() {
                return s || a.get("listener_id")
            }
        }
    },
    1414: function(e, t, n) {
        "use strict";

        function i() {
            s = [], a.reset()
        }

        function r() {
            if (!n(54).get("privacy_settings").isOptedInToTargetedAdvertising()) return i();
            var e = a.get("info");
            if (e && e.last_updated) {
                var t = Date.now(),
                    r = e.last_updated,
                    l = (t - r) / n(83).MS_IN_DAY;
                (l >= 1 || n(3).isEmpty(s)) && o()
            } else o()
        }

        function o() {
            n(131).insertSandboxedScript("//tags.bluekai.com/site/46163?ret=js&limit=1", void 0, {
                onScriptLoad: function(e, t) {
                    t.bk_results && t.bk_results.campaigns && (s = t.bk_results.campaigns.map(function(e) {
                        var t = e.campaign;
                        return t
                    }), a.set("info", {
                        campaigns: s,
                        last_updated: Date.now()
                    }))
                }
            })
        }
        var a = new(n(93))("bk"),
            s = [];
        e.exports = {
            initialize: function() {
                var e = n(54).get("privacy_settings");
                e.on("change:" + n(220).TARGETED_ADVERTISING_OPT_IN, function() {
                    e.isOptedInToTargetedAdvertising() ? r() : i()
                }), n(56).on("connect:logout", i), n(56).on("connect:login", r), r()
            },
            getCampaigns: function() {
                return s
            }
        }
    },
    1415: function(e, t, n) {
        "use strict";

        function i() {
            if (n(54).get("privacy_settings").isOptedInToTargetedAdvertising()) {
                var e = h.get(f);
                if (e && e.segments && e.uid && !p && (p = {
                        segments: e.segments,
                        uid: e.uid
                    }), e && e.last_updated) {
                    var t = Date.now(),
                        i = e.last_updated,
                        r = (t - i) / n(83).MS_IN_DAY;
                    (r >= 1 || !p) && a()
                } else a()
            }
        }

        function r() {
            p = void 0, h.reset()
        }

        function o(e) {
            p = e, h.set(f, e)
        }

        function a() {
            s().then(c).then(d)
        }

        function s() {
            return l().then(u)
        }

        function l() {
            var e = n(54).get("me");
            return n(55).all([n(131).loadSandbox(), n(61).isLoggedIn() ? e.fetch({
                attrs: g
            }) : n(55).resolve()]).done(function(t) {
                t.contentWindow.xl8_config = {
                    p: 1083,
                    g: 1
                };
                var n = {},
                    i = e.get("gender"),
                    r = e.get("date_of_birth");
                return ("female" === i || "male" === i) && (n.gender = i), r && r.year && (n.age = (new Date).getFullYear() - r.year), t.contentWindow.dataLayer = n, t
            })
        }

        function u(e) {
            var t = n(55).defer();
            n(131).insertScriptIntoIframe(e, "https://cdn.exelator.com/build/static.min.js", {}, {
                onScriptLoad: t.resolve,
                onError: t.resolve
            })
        }

        function c() {
            var e = n(55).defer(),
                t = new window.XMLHttpRequest;
            return t.onload = function() {
                200 !== this.status ? e.reject() : e.resolve(t.responseText)
            }, t.onerror = e.reject, t.open("GET", "https://loadr.exelator.com/load?p=1083&g=130&j=j", !0), t.send(), e
        }

        function d(e) {
            try {
                var t = JSON.parse(e),
                    i = t && t.user;
                if (i && i.segments && i.uid) {
                    var r = i.segments,
                        a = i.uid,
                        s = {
                            segments: r,
                            uid: a,
                            last_updated: Date.now()
                        };
                    o(s)
                }
            } catch (l) {
                return void n(58).trackV1Click({
                    click_name: "dax-non-json"
                })
            }
        }
        var p = void 0,
            h = new(n(93))("dax"),
            f = "userInfo",
            g = ["date_of_birth", "gender"];
        e.exports = {
            initialize: function() {
                var e = n(54).get("privacy_settings");
                e.on("change:" + n(220).TARGETED_ADVERTISING_OPT_IN, function() {
                    e.isOptedInToTargetedAdvertising() ? i() : r()
                }), n(56).on("connect:logout", r), i()
            },
            getUserData: function() {
                return p
            }
        }
    },
    1416: function(e, t, n) {
        "use strict";
        e.exports = n(105).extend({
            includeFooter: ".l-sidebar-left",
            css: n(3415),
            template: n(3008)
        })
    },
    1417: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            requires: ["getSourceInfo", "containsSound", "getCurrentSound", "getSoundIndex", "getQueueMetadataAt"]
        })
    },
    1418: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e.state,
                n = e.target,
                i = e.targetType,
                r = void 0,
                o = "sound" === i ? "track" : "playlist",
                a = o + "-repost";
            t ? this.add({
                type: a,
                created_at: (new Date).toISOString(),
                track: "track" === o ? {
                    id: n,
                    kind: o
                } : null,
                playlist: "playlist" === o ? {
                    id: n,
                    kind: o
                } : null
            }, {
                at: 0
            }) : (r = this.find(function(e) {
                return e.get("type") === a && e.get(o).id === n
            })) && this.remove(r)
        }
        var r = [{
            emitter: n(75),
            event: "repost",
            getInstance: function(e, t) {
                var n = t.origin;
                return e.options.userId === n
            },
            handler: i
        }];
        e.exports = new(n(21))(n(210).withOptions({
            events: r
        }), {
            override: {
                model: n(340)
            },
            audibleAt: function(e) {
                var t = this.at(e);
                return t && t.getAudible()
            }
        })
    },
    1419: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                var t = '<a href="https://help.soundcloud.com/hc/en-us/articles/115003450427-Sharing-a-private-track-or-playlist-within-SoundCloud" class="sc-link-dark" rel="noopener noreferrer" target="_blank">';
                return {
                    title: {
                        defaultValue: ""
                    },
                    description: {
                        defaultValue: ""
                    },
                    genre: {
                        defaultValue: o,
                        datasource: [{
                            value: o,
                            id: o
                        }],
                        groups: [{
                            links: [{
                                id: o,
                                value: o,
                                label: n(50).t("None")
                            }, {
                                id: a,
                                value: a,
                                label: n(50).t("Custom", null, {
                                    context: "Genre"
                                })
                            }]
                        }, {
                            title: n(50).t("Music"),
                            links: n(123).genres("music").map(s)
                        }, {
                            title: n(50).t("Audio"),
                            links: n(123).genres("audio").map(s)
                        }]
                    },
                    customGenre: {
                        defaultValue: ""
                    },
                    tags: {
                        defaultValue: function() {
                            return []
                        }
                    },
                    artwork_url: {
                        defaultValue: null
                    },
                    sharing: {
                        defaultValue: "public",
                        datasource: [{
                            value: "public",
                            label: n(50).t("Public"),
                            sublabel: "playlist-upload" === e || "playlist-edit" === e ? n(50).t("Anyone will be able to listen to this playlist.") : n(50).t("Anyone will be able to listen to this track.")
                        }, {
                            value: "private",
                            label: n(50).t("Private"),
                            sublabel: "playlist-upload" === e || "playlist-edit" === e ? n(50).t("Only you and people you share a [[[linkStart]]]secret link[[[linkEnd]]] with will be able to listen to this playlist.", {
                                linkStart: t,
                                linkEnd: "</a>"
                            }) : n(50).t("Only you and people you share a [[[linkStart]]]secret link[[[linkEnd]]] with will be able to listen to this track.", {
                                linkStart: t,
                                linkEnd: "</a>"
                            })
                        }]
                    },
                    permalink: {
                        defaultValue: ""
                    }
                }
            }

            function r(e) {
                return !(!e || e === o || n(123).isGenreLabel(e))
            }
            var o = "NO_GENRE",
                a = "CUSTOM_GENRE",
                s = function(e) {
                    var t = n(123).genreLabel(e.id);
                    return {
                        id: t.toString(),
                        value: t.toString(),
                        label: t
                    }
                };
            e.exports = new(n(21))({
                requires: ["getAudible"],
                merge: {
                    requiredModelAttributes: ["title", "description", "tag_list", "artwork_url", "sharing", "permalink"]
                },
                applyTo: function(e) {
                    t.extend(!0, e, {
                        fields: i(e.resource_type)
                    })
                },
                around: {
                    getAttributesToBeSaved: function(e) {
                        var t = e.apply(this, n(3).rest(arguments)),
                            i = n(3).pick(this.attributes, "title", "description", "sharing", "permalink", "genre"),
                            r = this.get("customGenre");
                        return i.genre === o ? i.genre = "" : i.genre === a ? i.genre = r : i.genre = n(3).unescape(i.genre), i.tag_list = n(201).serialize(this.get("tags")), n(3).assign(i, t)
                    },
                    getAttributesFromModel: function(e) {
                        var t = this.getAudible(),
                            i = e.apply(this, n(3).rest(arguments)),
                            s = n(3).pick(t.attributes, "title", "description", "sharing", "permalink", "artwork_url", "genre");
                        return r(n(3).escape(s.genre)) ? (s.customGenre = s.genre, s.genre = a) : s.genre ? s.genre = n(3).escape(s.genre) : s.genre = o, s.tags = n(201).extract(t.attributes), n(3).assign(s, i)
                    }
                },
                isCustomGenre: function() {
                    return r(this.get("genre"))
                }
            })
        }).call(t, n(1))
    },
    1420: function(e, t, n) {
        "use strict";
        var i = n(3).identity;
        e.exports = new(n(21))({
            requirePrototype: n(78).prototype,
            applyTo: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    r = t.recaptchas,
                    o = void 0 === r ? [] : r,
                    a = o.reduce(function(e, t) {
                        return e.fields[t] = {
                            defaultValue: ""
                        }, e.fields[t + "_required"] = {
                            defaultValue: !1
                        }, e.constraints[t] = [
                            [n(66), {
                                message: n(50).t("Check the reCAPTCHA checkbox.")
                            }]
                        ], e.constraintConditions[t] = {
                            fields: [t + "_required"],
                            check: i
                        }, e
                    }, {
                        fields: {},
                        constraints: {},
                        constraintConditions: {}
                    }),
                    s = a.fields,
                    l = a.constraints,
                    u = a.constraintConditions;
                this.merge(e, {
                    fields: s,
                    constraints: l,
                    constraintConditions: u
                })
            },
            defaults: {
                toggleRecaptcha: function(e, t) {
                    var n;
                    this.set((n = {}, n[e + "_required"] = t, n))
                },
                resetRecaptcha: function(e) {
                    this.trigger("reset_" + e)
                }
            }
        })
    },
    1421: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                return e.get("default_license")
            }

            function r(e) {
                var t = i(e);
                return t && t !== n(140).ALL_RIGHTS
            }

            function o(e, t) {
                t && this.set("shareAlike", !1)
            }

            function a(e, t) {
                t && this.set("nonDerivative", !1)
            }

            function s(e) {
                return "change:" + e
            }

            function l() {
                var e = n(140).serializeCCAttributes(this.attributes);
                this.set("creativeCommonsLicense", e)
            }

            function u() {
                var e = this.get("license");
                return e === n(140).ALL_RIGHTS ? e : this.get("creativeCommonsLicense")
            }
            var c = {
                license: {
                    defaultValue: function() {
                        return r(n(54).get("me")) ? n(140).COMMONS : n(140).ALL_RIGHTS
                    },
                    datasource: [{
                        label: n(50).t("All Rights Reserved"),
                        value: n(140).ALL_RIGHTS
                    }, {
                        label: "Creative Commons",
                        value: n(140).COMMONS
                    }]
                },
                creativeCommonsLicense: {
                    defaultValue: function() {
                        return r(n(54).get("me")) ? i(n(54).get("me")) : n(140).DEFAULT_CC
                    }
                },
                attribution: {
                    defaultValue: !0,
                    readOnly: !0
                },
                nonCommercial: {
                    defaultValue: !0
                },
                nonDerivative: {
                    defaultValue: !1
                },
                shareAlike: {
                    defaultValue: !0
                }
            };
            e.exports = new(n(21))({
                requires: ["getAudible"],
                merge: {
                    requiredModelAttributes: ["license"]
                },
                applyTo: function(e) {
                    t.extend(!0, e, {
                        fields: c
                    })
                },
                before: {
                    setup: function() {
                        var e = ["license"].concat(Object.keys(n(140).ccFields));
                        this.listenTo(this, "change:nonDerivative", o).listenTo(this, "change:shareAlike", a).listenTo(this, e.map(s).join(" "), l)
                    }
                },
                around: {
                    getAttributesToBeSaved: function(e) {
                        var t = e.apply(this, n(3).rest(arguments)),
                            i = {
                                license: u.call(this)
                            };
                        return n(3).assign(i, t)
                    },
                    getAttributesFromModel: function(e) {
                        var t = this.getAudible(),
                            i = e.apply(this, n(3).rest(arguments)),
                            r = n(140).parse(t.get("license"));
                        return n(3).assign(r, i)
                    }
                }
            })
        }).call(t, n(1))
    },
    1422: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                return e && n(50).dateTimeHelper.fromString(e)
            }

            function r(e) {
                return e.toISOString()
            }

            function o() {
                var e = this.get("monetizationStart"),
                    t = this.get("monetizationEnd"),
                    n = this.get("monetizationEnabled");
                !n || e || t || (this.set("monetizationEnd", !0), this.set("monetizationEndDate", s(p(), this.defaultDurationDays)))
            }

            function a() {
                var e = this.get("monetizationStart"),
                    t = this.get("monetizationEnd"),
                    n = this.get("monetizationStartDate");
                e && t && n && (this.set("monetizationEndTimezone", this.get("monetizationStartTimezone")),
                    this.set("monetizationEndDate", s(n, this.defaultDurationDays)))
            }

            function s(e, t) {
                return e = new Date(+e), e.setUTCDate(e.getUTCDate() + t), e
            }

            function l(e, t) {
                if (t) {
                    var i = n(89).monetizableCountryCodes().map(function(e) {
                        return {
                            territory: e
                        }
                    });
                    this.set("monetizationRightsholders", i)
                } else this.set("monetizationRightsholders", [])
            }

            function u(e, t) {
                var n = ["monetizationStartTimezone", "monetizationStart", "monetizationStartLocalDate", "monetizationStartDate", "monetizationEndTimezone", "monetizationEnd", "monetizationEndLocalDate", "monetizationEndDate"],
                    i = !t || !h();
                this.setFieldDisabled(n, i)
            }

            function c(e) {
                var t = {
                    start_timestamp: null,
                    start_timezone: null,
                    end_timestamp: null,
                    end_timezone: null,
                    territories: []
                };
                return e.get("monetizationEnabled") && (e.get("monetizationStart") && (t.start_timestamp = r(e.get("monetizationStartDate")), t.start_timezone = e.get("monetizationStartTimezone")), e.get("monetizationEnd") && (t.end_timestamp = r(e.get("monetizationEndDate")), t.end_timezone = e.get("monetizationEndTimezone")), t.territories = n(3).pluck(e.get("monetizationRightsholders"), "territory").concat(e.get("unknownTerritories")).filter(Boolean)), t
            }

            function d(e) {
                var t = e.get("monetizationRightsholders") || [];
                return t.filter(function(e) {
                    var t = e.rightsholder_urn;
                    return !!t
                })
            }

            function p() {
                var e = new Date;
                return e.setHours(0, 0, 0, 0), e
            }

            function h() {
                return n(54).get("me").canEditMonetization() && n(54).get("me").hasMonetization()
            }
            var f = n(3).negate(h),
                g = {
                    monetizationEnabled: {
                        defaultValue: !1,
                        disabled: f
                    },
                    monetizationStartTimezone: {
                        defaultValue: null,
                        disabled: f
                    },
                    monetizationStart: {
                        defaultValue: !1,
                        disabled: f
                    },
                    monetizationStartLocalDate: {
                        defaultValue: null,
                        disabled: f
                    },
                    monetizationStartDate: {
                        defaultValue: null,
                        disabled: f
                    },
                    monetizationEndTimezone: {
                        defaultValue: null,
                        disabled: f
                    },
                    monetizationEnd: {
                        defaultValue: !1,
                        disabled: f
                    },
                    monetizationEndLocalDate: {
                        defaultValue: null,
                        disabled: f
                    },
                    monetizationEndDate: {
                        defaultValue: null,
                        disabled: f
                    },
                    monetizationRightsholders: {
                        defaultValue: null,
                        disabled: f,
                        datasource: function() {
                            return new(n(1729))
                        }
                    },
                    unknownTerritories: {
                        defaultValue: null
                    }
                };
            e.exports = new(n(21))({
                merge: {
                    requiredModelAttributes: ["monetization"]
                },
                requires: ["getAudible"],
                applyTo: function(e) {
                    t.extend(!0, e, {
                        fields: g,
                        constraints: {
                            monetizationEnabled: [
                                [n(149), {
                                    value: !1,
                                    message: n(50).t("This track can not be monetized because it is long-form content.")
                                }]
                            ],
                            monetizationStartDate: [
                                [n(66), {
                                    message: n(50).t("Select a date.")
                                }], n(496), n(578)
                            ],
                            monetizationEndDate: [
                                [n(66), {
                                    message: n(50).t("Select a date.")
                                }], n(496), n(578)
                            ],
                            monetizationRightsholders: [n(1802), n(1812)]
                        },
                        constraintConditions: {
                            monetizationEnabled: {
                                fields: [],
                                check: function() {
                                    var e = this.getAudible();
                                    return this.isEdit && e && "sound" === e.resource_type && e.hasMonetizationRestriction()
                                }
                            },
                            monetizationStartDate: {
                                fields: ["monetizationStartDate", "monetizationStart"],
                                check: function(e, t) {
                                    return t && (!e || this.getFieldMetadata("monetizationStartDate").isDirty)
                                }
                            },
                            monetizationEndDate: {
                                fields: ["monetizationEndDate", "monetizationEnd"],
                                check: function(e, t) {
                                    return t && (!e || this.getFieldMetadata("monetizationEndDate").isDirty)
                                }
                            },
                            monetizationRightsholders: {
                                fields: ["monetizationEnabled"],
                                check: function(e) {
                                    return e
                                }
                            }
                        }
                    }), e.constraints.FORM = (e.constraints.FORM || []).concat([
                        [n(1808), {
                            nullable: !0,
                            message: n(50).t("Monetization start must happen before monetization end."),
                            fields: ["monetizationStartDate", "monetizationEndDate"]
                        }]
                    ])
                },
                after: {
                    setup: function() {
                        var e = n(54).get("me");
                        this.on("change:monetizationEnabled", u, this), this.forceChange("monetizationEnabled"), this.on("change:monetizationEnabled", l, this), !this.isEdit && e.getCPPOption("default_monetizable") && this.set("monetizationEnabled", !0), this.defaultDurationDays = e.getCPPOption("default_monetization_duration_in_days"), this.defaultDurationDays > 0 && (this.isEdit || (this.on("change:monetizationEnabled", o, this), o.call(this)), this.on("change:monetizationStartDate change:monetizationEnd", a, this))
                    }
                },
                around: {
                    getAttributesToBeSaved: function(e) {
                        var t = e.apply(this, [].slice.call(arguments, 1)),
                            i = n(54).get("me").isCPPEnabled();
                        return i ? n(3).assign(t, {
                            monetization: c(this),
                            rightsholders: d(this)
                        }) : t
                    },
                    getAttributesFromModel: function(e) {
                        var t = e.apply(this, [].slice.call(arguments, 1)),
                            r = this.getAudible(),
                            o = r.get("monetization"),
                            a = r.get("rightsholders") || [],
                            s = n(3).partition(r.getMonetizationTerritories(), function(e) {
                                return n(3).contains(n(89).monetizableCountryCodes(), e)
                            }),
                            l = s[0],
                            u = s[1];
                        return o && n(3).assign(t, {
                            monetizationEnabled: !(!o.territories || !o.territories.length),
                            monetizationStart: !!o.start_timestamp,
                            monetizationEnd: !!o.end_timestamp,
                            monetizationStartDate: i(o.start_timestamp),
                            monetizationEndDate: i(o.end_timestamp),
                            monetizationStartTimezone: o.start_timezone,
                            monetizationEndTimezone: o.end_timezone
                        }), this.attributes.monetizationRightsholders = l.map(function(e) {
                            var t = n(3).findWhere(a, {
                                territory: e
                            });
                            return t || {
                                territory: e
                            }
                        }), this.attributes.unknownTerritories = u, t
                    }
                }
            })
        }).call(t, n(1))
    },
    1423: function(e, t, n) {
        (function(t) {
            "use strict";
            var i = n(209).typeToApi,
                r = n(209).apiToType,
                o = n(209).defaultReleaseType,
                a = n(209).releaseLabels,
                s = {
                    playlistType: {
                        defaultValue: o,
                        datasource: Object.keys(a).map(function(e) {
                            return {
                                value: e,
                                label: a[e]
                            }
                        })
                    },
                    releaseDate: {
                        defaultValue: null
                    }
                };
            e.exports = new(n(21))({
                requires: ["getAudible"],
                requirePrototype: n(78).prototype,
                merge: {
                    requiredModelAttributes: ["set_type", "release_date"]
                },
                applyTo: function(e) {
                    t.extend(!0, e, {
                        fields: s,
                        constraints: {
                            releaseDate: [n(496), [n(66), {
                                message: function() {
                                    return {
                                        album: n(50).t("Enter a release date for albums."),
                                        ep: n(50).t("Enter a release date for EPs."),
                                        single: n(50).t("Enter a release date for singles."),
                                        compilation: n(50).t("Enter a release date for compilations.")
                                    } [this.get("playlistType")] || n(50).t("Enter a release date.")
                                }
                            }]]
                        },
                        constraintConditions: {
                            releaseDate: {
                                fields: ["playlistType"],
                                constraints: [n(66)],
                                check: function(e) {
                                    return e !== o
                                }
                            }
                        }
                    })
                },
                around: {
                    getAttributesToBeSaved: function(e) {
                        var t = e.apply(this, n(3).rest(arguments)),
                            r = this.get("releaseDate");
                        return n(3).assign({
                            set_type: i(this.get("playlistType")),
                            release_date: r && n(50).dateTimeHelper.format(r, "iso")
                        }, t)
                    },
                    getAttributesFromModel: function(e) {
                        var t = e.apply(this, n(3).rest(arguments)),
                            i = this.getAudible();
                        return n(3).assign({
                            playlistType: r(i.get("set_type")),
                            releaseDate: i.get("release_date") && n(50).dateTimeHelper.fromString(i.get("release_date"))
                        }, t)
                    }
                }
            })
        }).call(t, n(1))
    },
    1424: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                if (e) {
                    var t = n(201).parse(e.get("tag_list") || ""),
                        i = {
                            first_tag: t[0] || "",
                            genre: e.get("genre"),
                            length: e.get("duration"),
                            title: e.get("title"),
                            "public": e.isPublic(),
                            track_id: e.id,
                            track_link: e.get("permalink_url"),
                            creator_id: n(54).get("me").id,
                            creator_link: n(54).get("me").get("permalink_url")
                        };
                    n(325).trackUserEvent("upload_track", i)
                }
            }

            function r() {
                var e = this;
                this.trigger("generatingPermalink", !0), o.call(this, n(254).permalink(this.get("title"))).always(function(t) {
                    t = t || "", e.set("permalink", t), e.trigger("generatingPermalink", !1)
                })
            }

            function o(e, t, i) {
                var r = this;
                return t = t || n(55).defer(), i = i || 0, this._permalinkConstraint.check(e, function(n) {
                    n ? t.resolve(e) : a > i ? o.call(r, r.increasePermalink(e), t, ++i) : t.reject()
                }), t
            }
            var a = 10,
                s = {
                    apiStreamable: {
                        defaultValue: !0
                    },
                    embeddableByAll: {
                        defaultValue: !0
                    },
                    domainLocking: {
                        defaultValue: !1
                    },
                    downloadable: {
                        defaultValue: !1,
                        disabled: function() {
                            return !n(54).get("me").canEditDownloadable()
                        }
                    },
                    feedable: {
                        defaultValue: !1,
                        disabled: function() {
                            return !n(54).get("me").canEditRssEnabled()
                        }
                    },
                    offlineSyncEnabled: {
                        defaultValue: !0
                    },
                    buyLink: {
                        defaultValue: ""
                    },
                    buyTitle: {
                        defaultValue: n(50).t("Buy").toString()
                    },
                    commentable: {
                        defaultValue: !0
                    },
                    publicComments: {
                        defaultValue: !0
                    },
                    stats: {
                        defaultValue: !0
                    },
                    labelName: {
                        defaultValue: null
                    },
                    releaseDate: {
                        defaultValue: null
                    }
                },
                l = {
                    save: {
                        label: n(50).t("Save"),
                        pendingLabel: n(50).t("Saving"),
                        action: "save"
                    },
                    cancel: {
                        label: n(50).t("Cancel"),
                        action: "cancel"
                    }
                },
                u = {
                    buyLink: [
                        [n(326), {
                            strict: !1
                        }]
                    ],
                    buyTitle: [
                        [n(573)]
                    ]
                },
                c = {
                    buyTitle: {
                        fields: [],
                        check: function() {
                            return n(54).get("me").getPerk("customBuyTitle")
                        }
                    }
                },
                d = {
                    "default": "save",
                    cancel: function() {
                        n(498).confirm(n(50).t("Are you sure you want to stop your upload? Any unsaved changes will be lost.")).done(this.cancel.bind(this))
                    }
                };
            e.exports = new(n(21))(n(1419), n(1833), n(1421), n(263).withOptions({
                attr: "title"
            }), n(594), {
                applyTo: function(e) {
                    e.buttons = t.extend(!0, {}, l, e.buttons || {}), e.fields = t.extend(!0, {}, s, e.fields || {}), e.constraints = t.extend(!0, {}, u, e.constraints || {}), e.constraintConditions = t.extend(!0, {}, c, e.constraintConditions || {}), e.actions = t.extend(!0, {}, d, e.actions || {})
                },
                _permalinkConstraint: null,
                isEdit: !1,
                requires: ["cancel", "getAudible", "createAudible", "unsetAudible", "getAttributesToBeSaved", "getAttributesFromModel", "onAudibleSaved"],
                before: {
                    initialize: function() {
                        var e = {
                            type: "playlist-upload" === this.resource_type ? "playlist" : "sound",
                            getResource: function() {
                                return this.getAudible()
                            }
                        };
                        this._permalinkConstraint = new(n(493))(e, this)
                    },
                    setup: function() {
                        this.on("imageDataChanged", this.markFieldsDirty.bind(this, "artwork_url")), this.on("change:commentable", function(e, t) {
                            t || this.set("publicComments", !1)
                        }, this), this.on("change:publicComments", function(e, t) {
                            t && this.set("commentable", !0)
                        }, this)
                    }
                },
                after: {
                    setup: function(e, t) {
                        this.isEdit || (this.set("feedable", !!n(54).get("me").get("default_tracks_feedable")), t.inPlaylist || this.on("change:title", r, this))
                    }
                },
                around: {
                    getAttributesToBeSaved: function(e) {
                        var t = this.get("buyTitle"),
                            i = this.get("buyLink"),
                            r = {};
                        return r.embeddable = this.get("embeddableByAll"), r.purchase_url = i ? n(65).normalize(i) : null, r.purchase_title = t === this.getFieldMetadata("buyTitle").defaultValue ? null : t, r.reveal_stats = this.get("stats"), r.label_name = this.get("labelName"), r.release_date = this.get("releaseDate") && n(50).dateTimeHelper.format(this.get("releaseDate"), "iso"), n(3).assign(r, e())
                    }
                },
                saveEdits: function() {
                    var e = this,
                        t = this.getOrCreateAudible();
                    return t.set(this.getAttributesToBeSaved()), t.save().then(this.saveAudibleImage.bind(this, t)).then(this.onAudibleSaved.bind(this), this.onSaveFailed.bind(this)).done(function() {
                        e.trigger("saved"), e.isEdit || i(e.getAudible())
                    })
                },
                preSaveCheck: function() {
                    return this.fileStatusCheck()
                },
                getOrCreateAudible: function() {
                    var e = this.getAudible();
                    if (e) return e;
                    var t = this.createAudible();
                    return t.on("destroy", function() {
                        this.unsetAudible(), this.cancel()
                    }, this), t
                },
                saveCleanup: function(e) {
                    this.markFieldsClean(Object.keys(this.getAttributesFromModel()))
                },
                setToFailed: function(e, t) {
                    var n = "playlist-upload" === this.resource_type ? "playlist" : "track";
                    t && "string" != typeof t && (t = this.extractErrorMessage(t)), this.set({
                        errorMessage: this.getErrorMessageTemplate(e, n, t)
                    })
                },
                increasePermalink: function(e) {
                    var t = /-(\d+)$/,
                        n = e.match(t);
                    return n ? e.replace(t, function(e, t) {
                        return t = parseInt(t, 10) + 1, "-" + t
                    }) : e + "-1"
                }
            })
        }).call(t, n(1))
    },
    1425: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e, t) {
                this.has(e) && this.set(e, Math.max(0, this.get(e) + (t ? 1 : -1)))
            }
            var r = n(83).MS_IN_MINUTE;
            e.exports = new(n(21))(n(1417), n(1839), n(1429), {
                requirePrototype: n(64).prototype,
                requires: ["getCurrentSound", "getSounds", "getNumSounds", "play", "pause", "isPlaying", "isProcessing", "isEditing", "isPublic", "isPrivate", "isNowPlaying", "duration"],
                before: {
                    setup: function() {
                        this.listenTo(this, "destroy", this.pause)
                    }
                },
                around: {
                    destroy: function(e) {
                        var t = this,
                            i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                        return i.statusCode = n(3).defaults({
                            202: function() {
                                n(56).trigger("audible:delete-already-queued", t)
                            }
                        }, i.statusCode), e(n(3).clone(i))
                    }
                },
                getSourceInfo: function() {
                    return {
                        type: "single",
                        resourceId: this.resource_id,
                        resourceType: this.resource_type
                    }
                },
                getQueueMetadataAt: function(e) {
                    return {
                        sourceInfo: this.getSourceInfo(),
                        queryPosition: 0,
                        originalModel: this
                    }
                },
                onLike: function(e) {
                    i.call(this, "likes_count", e.state)
                },
                onRepost: function(e) {
                    i.call(this, "reposts_count", e.state)
                },
                onComment: function(e) {
                    i.call(this, "comment_count", e.state)
                },
                onPlayRegistered: function() {
                    n(54).get("me").owns(this) || i.call(this, "playback_count", !0)
                },
                getShareURL: function(e) {
                    var t, i, r, o = !(!e || !e.permalinkUrl),
                        a = o ? e.permalinkUrl : this.get("permalink_url");
                    return r = this.playlist && this.playlist.id, t = {
                        query: {
                            "in": r ? n(65).parse(this.playlist.getShareURL()).relative.substr(1) : null
                        }
                    }, o || (t.scheme = "https"), e && e.time && (t.fragment = "t=" + e.time), i = this.isPrivate() && !/\/s-[a-zA-Z0-9]{5}$/.test(a), n(65).stringify(t, a + (i ? "/" + this.get("secret_token") : ""))
                },
                resetSecretLink: function() {
                    var e = this,
                        i = n(65).stringify({
                            path: "/" + n(65).joinPath([this.getUrn(), "secret_token", "reset"])
                        }, n(54).get("api_v2_host"));
                    return t.ajax({
                        url: i,
                        type: "POST",
                        dataType: "json"
                    }).done(function(t) {
                        e.set({
                            secret_token: t.secret_token,
                            permalink_url: t.permalink_url
                        })
                    })
                },
                getPermalink: function() {
                    return (this.get("permalink_url") || "").replace(/^https?:.+?\w\//, "/")
                },
                isDisabled: function() {
                    return !!this.get("disabled_reason")
                },
                isBlacklisted: function() {
                    return "blacklisted" === this.get("disabled_reason")
                },
                isOverQuota: function() {
                    return "quota" === this.get("disabled_reason")
                },
                toggle: function(e) {
                    this[this.isPlaying() ? "pause" : "play"](e)
                },
                isPaused: function() {
                    return !this.isPlaying()
                },
                isEmbeddableByAll: function() {
                    return "all" === this.get("embeddable_by")
                },
                isManagedByFeeds: function() {
                    return !!this.get("managed_by_feeds")
                },
                isScheduled: function() {
                    return !!this.get("scheduled_public_date")
                },
                isOfflineSyncEnabled: function() {
                    return n(3).isEmpty(this.get("restrictions"))
                },
                isGeoblocked: function() {
                    return !!this.getBlockedCountries().length
                },
                isGeoblockedInCountry: function(e) {
                    return this.getBlockedCountries().indexOf(e) > -1
                },
                getBlockedCountries: function() {
                    return this.get("geo_blockings") || []
                },
                getAvailableCountries: function() {
                    return n(89).complement(this.getBlockedCountries())
                },
                getMonetizationTerritories: function() {
                    var e = this.get("monetization");
                    return e && e.territories || []
                },
                isMonetizable: function() {
                    return !this.isDisabled() && !this.isManagedByFeeds()
                },
                hasMonetizationRestriction: function() {
                    var e = n(54).get("rollouts").get("cant_monetize_long_content"),
                        t = this.duration() > 10 * r;
                    return e && t
                },
                hasMonetizationPolicy: function() {
                    return !!this.get("monetization_enabled")
                },
                hasMonetizationTerritory: function(e) {
                    return this.getMonetizationTerritories().indexOf(e) > -1
                },
                hasMonetizationTerritories: function() {
                    return this.getMonetizationTerritories().length > 0
                },
                isPendingMonetization: function() {
                    return this.hasMonetizationTerritories() && !this.hasMonetizationPolicy()
                }
            })
        }).call(t, n(1))
    },
    1426: function(e, t, n) {
        "use strict";

        function i(e) {
            return e ? n(65).stringify({
                query: e
            }) : "default"
        }

        function r(e) {
            return !this.id || e.jqAjax || e.batch === !1 || "private" === this.get("sharing")
        }

        function o(e, t, n, i, r) {
            this.batchEndpoint = e, this.batchParams = t, this.maxQueueSize = n, this.flushInterval = i, this.queue = {}, this.timer = null, this.paramName = r
        }
        var a = n(235).RequestPriorities,
            s = 50,
            l = 50,
            u = function() {
                return null
            };
        e.exports = new(n(21))({
            applyTo: function(e, t) {
                var n = t.batchEndpoint,
                    a = t.flushInterval,
                    c = void 0 === a ? s : a,
                    d = t.maxQueueSize,
                    p = void 0 === d ? l : d,
                    h = t.getBatchParams,
                    f = void 0 === h ? u : h,
                    g = t.paramName,
                    m = void 0 === g ? "ids" : g,
                    v = {};
                this.around(e, {
                    fetch: function(e, t) {
                        var a = this;
                        if (t || (t = {}), r.call(this, t)) return e(t);
                        if (this._requests || (this._requests = {}), !this._requests[this.id]) {
                            var s = f(this) || null,
                                l = i(s),
                                u = v[l] || (v[l] = new o(n, s, p, c, m));
                            this._requests[this.id] = u.add(this, t).always(function() {
                                delete a._requests[a.id]
                            })
                        }
                        return this._requests[this.id]
                    }
                })
            }
        });
        o.prototype = {
            getIds: function() {
                var e = n(3).reduce(this.queue, function(e, t, n) {
                    return "pending" === t.deferred.state() && (e[n] = t), e
                }, {});
                return Object.keys(e).sort()
            },
            add: function(e, t) {
                var i = this.queue[e.id] = this.queue[e.id] || {
                    callsigs: [],
                    deferred: n(55).defer()
                };
                return i.callsigs.push({
                    model: e,
                    options: t
                }), this.timer || (this.timer = window.setTimeout(this.flush.bind(this), this.flushInterval)), Object.keys(this.queue).length === this.maxQueueSize && this.flush(), i.deferred
            },
            flush: function() {
                var e = this,
                    t = this.getIds(),
                    i = this.queue;
                window.clearTimeout(this.timer), this.timer = null, this.queue = {}, t.length < 1 || n(615)(function() {
                    var i;
                    return n(23).callEndpoint(e.batchEndpoint, null, n(3).assign((i = {}, i[e.paramName] = t.join(","), i), e.batchParams), null, {
                        priority: a.URGENT
                    })
                }, function() {
                    return !1
                }).then(function(e) {
                    var r = e.body,
                        o = n(3).map(n(3).pluck(r, "id"), String);
                    r.forEach(function(e) {
                        var t = e.id,
                            n = i[t],
                            r = Date.now();
                        n && (n.callsigs.forEach(function(t) {
                            var n = t.model;
                            n.lastFetchTime = r, n.set(n.parse(e), t.options)
                        }), n.deferred.resolve())
                    }), n(3).difference(t, o).forEach(function(e) {
                        var t = i[e];
                        t && t.callsigs.forEach(function(e) {
                            e.model.trigger("error", e.model, new(n(497)), e.options)
                        })
                    }), n(3).each(i, function(e) {
                        e.deferred.reject()
                    })
                })
            }
        }
    },
    1427: function(e, t, n) {
        "use strict";

        function i(e) {
            return n(3).some(this.ownerAttributes, function(t) {
                return e.indexOf(t) > -1
            })
        }
        e.exports = new(n(21))({
            requires: ["ownerAttributes", "ownerUrl", "attrExists"],
            around: {
                fetch: function(e, t) {
                    var r, o = t && t.attrs,
                        a = n(3).clone(t),
                        s = n(54).get("me").owns(this);
                    return r = o && i.call(this, o), s && r && (a.url = n(65).modify(this.ownerUrl(), {
                        query: {
                            representation: "owner"
                        }
                    }), a.batch = !1), e.call(this, a)
                }
            }
        })
    },
    1428: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                return "sound" !== e.resource_type
            }

            function r(e) {
                return e && e.attrs && e.attrs.indexOf("visuals") > -1
            }

            function o(e) {
                var t = e && e.attrs;
                return !t || t.length > 1 || "visuals" !== t[0]
            }

            function a() {
                return this.getEndpointUrl("visuals", {}, {
                    urn: this.getUrn()
                })
            }

            function s(e) {
                var t = e.visuals || this.get("visuals") || null;
                t && e.tracking && (t.tracking = e.tracking), this.set("visuals", t)
            }
            var l, u = n(83).MS_IN_SECOND,
                c = 1240,
                d = 5 * u;
            e.exports = new(n(21))({
                _lastVisualsFetch: null,
                around: {
                    fetch: function(e, u) {
                        var c, p, h = this,
                            f = [],
                            g = i(this);
                        return l || (l = new(n(148))({
                            giveUp: 1
                        })), (!g || o(u)) && f.push(e(u)), g && r(u) && (this._lastVisualsFetch || this.attrExists("visuals") ? p = this._lastVisualsFetch : (this._lastVisualsFetch = p = n(55).defer(), l.enabled ? t.ajax({
                            dataType: "json",
                            url: a.call(this),
                            timeout: d
                        }).done(s.bind(this)).always(function(e, t, n) {
                            "timeout" === n && l.failed(), h.set("visuals", h.get("visuals") || null), p.resolve()
                        }) : (this.set("visuals", null), p.resolve())), p && f.push(p)), c = n(55).defer(), n(55).settled(f).done(function(e) {
                            c.resolve.apply(null, e)
                        }).fail(c.reject), c
                    }
                },
                getVisual: function() {
                    var e = this.get("visuals");
                    return e && e.visuals && (e = e.visuals), e && e[0] || {}
                },
                getVisualURL: function() {
                    var e = c * (n(107).isHiDPI ? 2 : 1);
                    return n(87).setFormat(this.getVisual().visual_url, e)
                },
                hasVisuals: function() {
                    return !n(3).isEmpty(this.get("visuals"))
                }
            })
        }).call(t, n(1))
    },
    1429: function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.replace(/^http:/, "https:")
        }
        e.exports = new(n(21))({
            applyTo: function(e, t) {
                e.getTypes = n(3).constant(t && t.types || {})
            },
            defaults: {
                getShareURL: function(e) {
                    return this.getShareAttributes(e).permalink_url
                }
            },
            getShareAttributes: function(e) {
                var t = n(3).clone(this.attributes),
                    r = e && e.type,
                    o = r && this.getTypes()[r];
                return o && n(3).each(o, function(e, n) {
                    t[n] = e.replace(/\:([a-zA-Z0-9_-]+)/g, function(e, n) {
                        return t[n]
                    })
                }), t.permalink_url = i(t.permalink_url), t.uri = i(t.uri), "private" === t.sharing && !t.secret_uri && t.secret_token && (t.secret_uri = n(65).modify(t.uri, {
                    query: {
                        secret_token: t.secret_token
                    }
                })), t
            }
        })
    },
    1430: function(e, t, n) {
        "use strict";

        function i(e) {
            return e._sdb = n(3).uniqueId("sdb"), e
        }

        function r(e) {
            return e._sdb
        }

        function o(e, t) {
            return e.hashFn ? e.hashFn(t) : t.id
        }

        function a(e, t, i) {
            var o = e[i];
            return o && r(t) && (e[i] = n(3).isArray(o) ? o.map(s.bind(null, t)) : s(t, o)), e
        }

        function s(e, t) {
            var i, a = r(e),
                s = o(e, t);
            return s ? (u[a] = u[a] || {}, (i = u[a][s]) ? n(3).assign(i, e.normalize ? e.normalize(t) : t) : i = u[a][s] = t, i) : t
        }

        function l(e, t) {
            var n = r(e),
                i = o(e, t);
            i && u[n] && delete u[n][i]
        }
        var u = {};
        e.exports = new(n(21))({
            applyTo: function(e) {
                var t = e.constructor;
                this.before(t, {
                    onCleanup: function(e) {
                        l(this.constructor, e.attributes)
                    }
                }), i(t)
            },
            after: {
                initialize: function() {
                    this.attributes = s(this.constructor, this.attributes)
                }
            },
            around: {
                set: function(e, t, i, r) {
                    var o, l;
                    return "object" == typeof t ? (o = t, r = i) : (o = {})[t] = i, o ? (this.submodelMap && (o = n(3).reduce(this.submodelMap, a, n(3).clone(o))), l = this.constructor, !this.resource_id && l.hashFn(o) && (o = s(l, o)), e(o, r)) : this
                }
            }
        })
    },
    1437: function(e, t, n) {
        "use strict";
        var i;
        i = {
            add: !0,
            remove: !0,
            merge: !0
        };
        e.exports = n(70).extend({
            model: null,
            setup: n(3).noop,
            _prepareModel: function(e) {
                return e
            },
            _removeReference: n(3).noop,
            parse: function(e) {
                return e && e.collection || e
            },
            indexOfEquivalentModel: function(e, t, n) {
                return (t || this.models).indexOf(e, n)
            },
            getKeyForModel: function(e) {
                return e
            },
            toJSON: function() {
                return this.models.slice()
            },
            set: function(e, t) {
                var r, o, a, s, l = this.indexOfEquivalentModel.bind(this);
                for (t = n(3).defaults({}, t, i), e = this.parse(e, t), e = n(3).isArray(e) ? e.slice() : [e], r = e.length; r--;) a = e[r], (l(a, e.slice(r + 1)) > -1 || l(a) > -1) && e.splice(r, 1);
                return this.length += e.length, o = null !== t.at && t.at !== s ? t.at : this.models.length, Array.prototype.splice.apply(this.models, [o, 0].concat(e)), this.comparator && this.sort({
                    silent: !0
                }), t.silent || e.forEach(function(e) {
                    this.trigger("add", e, this, t)
                }, this), this
            },
            remove: function(e, t) {
                var i, r, o, a;
                for (t || (t = {}), e = n(3).isArray(e) ? e.slice() : [e], i = 0, r = e.length; r > i; i++) a = e[i], o = this.indexOf(a), o >= 0 && (this.models.splice(o, 1), this.length--, t.silent || (t.index = o, this.trigger("remove", a, this, t)));
                return this
            }
        })
    },
    1438: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            canvas: null,
            context: null,
            isDirty: !1,
            isAnimating: !1,
            requires: ["draw"],
            applyTo: function(e) {
                e.defaults = n(3).assign({
                    scale: 1,
                    $eventEl: null
                }, e.defaults)
            },
            after: {
                draw: function() {
                    this.setDirty(this.isAnimating)
                },
                onResize: function() {
                    this.setDirty(!0)
                }
            },
            before: {
                setup: function(e) {
                    e.$eventEl || (e.$eventEl = this.$el), this.canvas = this.el, this.context = this.el.getContext("2d")
                }
            },
            override: {
                render: function() {
                    this.hasData() ? this.setDirty(!0) : (this.setDirty(!1), this.fetchData())
                },
                destroyElement: n(3).noop
            },
            defaults: {
                onResize: n(3).noop
            },
            setDirty: function(e) {
                (this.isDirty = e) && this.trigger("dirty")
            }
        })
    },
    1439: function(e, t, n) {
        "use strict";
        var i = "GTM-NXX9K5",
            r = e.exports = {
                include: function() {
                    var e = this,
                        t = window.dataLayer = window.dataLayer || [],
                        o = !!n(54).get("me").id,
                        a = new(n(93))("google-tag-manager-page-tracking");
                    t.push({
                        "gtm.start": Date.now(),
                        event: "gtm.js"
                    }), o || (n(56).once("connect:login", function() {
                        e.pushEvent({
                            event: "login"
                        })
                    }), n(56).once("signup:successful", function() {
                        e.pushEvent({
                            event: "signup-successful"
                        })
                    })), n(56).on("consumer-premium:subscriptionChange", function(t) {
                        var n = t.price,
                            i = (t.subType, t.term);
                        e.pushEvent({
                            event: "consumer-signup-successful-go",
                            price: n,
                            subscriptionTerm: i
                        })
                    }), n(56).on("layout:change", function(t) {
                        r.adjustViewCounts(a, t), e.pushEvent({
                            event: "virtual-pageview",
                            layoutInfo: t,
                            layoutViewCounts: r.getViewCounts(a)
                        })
                    }), n(56).on("upload_funnel:save", function() {
                        e.pushEvent({
                            event: "upload-save"
                        })
                    }), n(3).defer(function() {
                        n(131).insertScript("//www.googletagmanager.com/gtm.js?id=" + i)
                    })
                },
                pushEvent: function(e) {
                    var t = e.event,
                        i = e.price,
                        r = e.currency,
                        o = e.subscriptionTerm,
                        a = e.creatorSubType,
                        s = e.layoutInfo,
                        l = e.layoutViewCounts,
                        u = window.dataLayer = window.dataLayer || [],
                        c = n(54).get("me"),
                        d = !!c.id,
                        p = n(54).get("geoip"),
                        h = p && p.get("country_code");
                    u.push(n(3).defaults({
                        event: t,
                        isLoggedIn: d,
                        guid: n(583).generate(),
                        isPremium: c.isPremium(),
                        creatorSubType: a || c.getCreatorPlan(),
                        pageCategory: s ? s.layoutName : void 0,
                        hasHighTier: c.hasHighTier(),
                        consumerSubType: c.getConsumerPlan(),
                        countryCode: h,
                        price: i || void 0,
                        currency: r || void 0,
                        subscriptionTerm: o || void 0
                    }, l || {}))
                },
                adjustViewCounts: function(e, t) {
                    var n = t.layoutName;
                    "upload" === n ? e.set("uploadVisitCount", (e.get("uploadVisitCount") || 0) + 1) : "stats" === n ? e.set("statsVisitCount", (e.get("statsVisitCount") || 0) + 1) : "premium" === n && e.set("premiumVisitCount", (e.get("premiumVisitCount") || 0) + 1), e.set("allVisitCount", (e.get("allVisitCount") || 0) + 1)
                },
                getViewCounts: function(e) {
                    return {
                        uploadVisitCount: e.get("uploadVisitCount") || 0,
                        statsVisitCount: e.get("statsVisitCount") || 0,
                        premiumVisitCount: e.get("premiumVisitCount") || 0,
                        allVisitCount: e.get("allVisitCount") || 0
                    }
                }
            }
    },
    1440: function(e, t, n) {
        "use strict";

        function i(e, t) {
            e.set(t, (e.get(t) || 0) + 1)
        }
        var r = window,
            o = r.Image,
            a = "https://vt.myvisualiq.net/2/UhSoiql1ezhCaix6DQ3nmQ%3D%3D/vt-235.js",
            s = function(e, t) {
                return "https://t.myvisualiq.net/activity_pixel?pt=i&et=a&ago=212&ao=855&px=" + e + "&ord=" + n(583).generate() + "&revenue=" + t + "&r=" + Date.now()
            };
        e.exports = {
            include: function() {
                var e = this,
                    t = new(n(93))("visual-iq-page-tracking");
                n(56).on("layout:change", function(n) {
                    e.adjustViewCounts(t, n), e.pushEvent({
                        event: n.layoutName,
                        layoutViewCounts: e.getViewCounts(t)
                    })
                }), n(56).on("upload_funnel:save", function() {
                    e.pushEvent({
                        event: "upload-save"
                    })
                }), n(56).once("signup:successful", function() {
                    e.pushEvent({
                        event: "signup-successful"
                    })
                }), n(131).insertScript(a)
            },
            pushEvent: function(e) {
                var t = e.event,
                    i = e.layoutViewCounts,
                    r = void 0 === i ? {} : i,
                    a = e.subscriptionTerm,
                    l = void 0 === a ? null : a;
                if (n(54).get("privacy_settings").isOptedInToAnalytics()) {
                    var u = new o;
                    switch (t) {
                        case "creator-signup-successful-pro":
                            var c = "monthly" === l ? "72.35" : "yearly" === l ? "184.89" : void 0;
                            u.src = s(367, c);
                            break;
                        case "creator-signup-successful-pro-unlimited":
                            var d = "monthly" === l ? "191.58" : "yearly" === l ? "471.05" : void 0;
                            u.src = s(368, d);
                            break;
                        case "upload-save":
                            u.src = s(366);
                            break;
                        case "signup-successful":
                            u.src = s(364);
                            break;
                        case "upload":
                            1 === r.uploadVisitCount ? u.src = s(363) : u.src = s(365);
                            break;
                        case "premium":
                            u.src = s(365)
                    }
                }
            },
            adjustViewCounts: function(e, t) {
                var n = t.layoutName;
                switch (n) {
                    case "upload":
                        i(e, "uploadVisitCount");
                        break;
                    case "stats":
                        i(e, "statsVisitCount");
                        break;
                    case "premium":
                        i(e, "premiumVisitCount")
                }
                i(e, "allVisitCount")
            },
            getViewCounts: function(e) {
                return {
                    uploadVisitCount: e.get("uploadVisitCount") || 0,
                    statsVisitCount: e.get("statsVisitCount") || 0,
                    premiumVisitCount: e.get("premiumVisitCount") || 0,
                    allVisitCount: e.get("allVisitCount") || 0
                }
            }
        }
    },
    1441: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                return 400 === e.status && "RequestTimeout" === r(e.responseXML)
            }

            function r(e) {
                return t(e).find("Error Code").text()
            }

            function o(e) {
                return function() {
                    var t = n(55).defer(),
                        i = t.promise(),
                        r = t.notify,
                        o = n(3).toArray(arguments).concat(r),
                        a = e.apply(this, o);
                    return a.then(t.resolve, t.reject), i.abort = a.abort, i
                }
            }
            var a = n(23).getUrlForEndpoint;
            e.exports = n(181).extend({
                upload: function(e) {
                    var t = void 0,
                        r = this.presign(e),
                        a = o(this.uploadFile),
                        s = this.resolveWith,
                        l = r.then(function(r) {
                            return t = n(615)(function() {
                                return a(e, r)
                            }, i), t.then(function() {
                                return s(r)
                            })
                        });
                    return l.abort = function() {
                        r.abort(), t && t.abort()
                    }, l
                },
                presign: function() {
                    return t.ajax({
                        url: a("uploadPolicy"),
                        dataType: "json",
                        cache: !1
                    })
                },
                uploadFile: function(e, i, r) {
                    var o = n(65).stringify({
                            scheme: "https",
                            host: i.bucket + ".s3.amazonaws.com"
                        }),
                        a = new window.FormData;
                    return n(3).each(i, function(e, t) {
                        a.append(t, e)
                    }), a.append("file", e), t.ajax({
                        url: o,
                        type: "POST",
                        data: a,
                        processData: !1,
                        contentType: !1,
                        dataType: "xml",
                        headers: {
                            "x-amz-storage-class": "STANDARD_IA",
                            "x-amz-server-side-encryption": "AES256"
                        },
                        timeout: 0,
                        progress: r
                    })
                },
                resolveWith: function(e) {
                    return e.key
                }
            })
        }).call(t, n(1))
    },
    1528: function(e, t, n) {
        "use strict";
        e.exports = {
            labels: {
                geoblocked: n(50).t("Geoblocked", {}, {
                    comment: "Label indicating that a track/playlist is geo-blocked."
                }),
                monetizable: n(50).t("Monetizing", {}, {
                    comment: "Label indicating that a track/playlist is monetized."
                }),
                "monetizable-pending": n(50).t("Not monetizing", {}, {
                    comment: "Label indicating that a track/playlist is pending monetization."
                }),
                "monetizable-possible": n(50).t("Monetizable", {}, {
                    comment: "Label indicating that a track/playlist could be monetized."
                }),
                "monetization-restriction": n(50).t("Monetization restricted", {}, {
                    comment: "Label indicating that a the monetization of a track/playlist is restricted."
                }),
                "private": n(50).t("Private", {}, {
                    comment: "Label indicating that a track/playlist is privately accessible."
                }),
                restricted: n(50).t("Restricted", {}, {
                    comment: "Label indicating that a track/playlist is copyright-restricted."
                }),
                scheduled: n(50).t("Scheduled", {}, {
                    comment: "Label indicating that a track/playlist is scheduled for release."
                })
            }
        }
    },
    1619: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                return '<div class="l-one-column">\n  <div class="l-main">\n\n  </div>\n</div>\n'
            },
            useData: !0
        })
    },
    1622: function(e, t) {
        e.exports = [{
            id: "Pacific/Midway",
            name: "International Date Line West",
            utc_offset: -39600
        }, {
            id: "Pacific/Midway",
            name: "Midway Island",
            utc_offset: -39600
        }, {
            id: "Pacific/Pago_Pago",
            name: "Samoa",
            utc_offset: -39600
        }, {
            id: "Pacific/Honolulu",
            name: "Hawaii",
            utc_offset: -36e3
        }, {
            id: "America/Juneau",
            name: "Alaska",
            utc_offset: -32400
        }, {
            id: "America/Los_Angeles",
            name: "Pacific Time (US & Canada)",
            utc_offset: -28800
        }, {
            id: "America/Tijuana",
            name: "Tijuana",
            utc_offset: -28800
        }, {
            id: "America/Phoenix",
            name: "Arizona",
            utc_offset: -25200
        }, {
            id: "America/Chihuahua",
            name: "Chihuahua",
            utc_offset: -25200
        }, {
            id: "America/Mazatlan",
            name: "Mazatlan",
            utc_offset: -25200
        }, {
            id: "America/Denver",
            name: "Mountain Time (US & Canada)",
            utc_offset: -25200
        }, {
            id: "America/Guatemala",
            name: "Central America",
            utc_offset: -21600
        }, {
            id: "America/Chicago",
            name: "Central Time (US & Canada)",
            utc_offset: -21600
        }, {
            id: "America/Mexico_City",
            name: "Guadalajara",
            utc_offset: -21600
        }, {
            id: "America/Mexico_City",
            name: "Mexico City",
            utc_offset: -21600
        }, {
            id: "America/Monterrey",
            name: "Monterrey",
            utc_offset: -21600
        }, {
            id: "America/Regina",
            name: "Saskatchewan",
            utc_offset: -21600
        }, {
            id: "America/Bogota",
            name: "Bogota",
            utc_offset: -18e3
        }, {
            id: "America/New_York",
            name: "Eastern Time (US & Canada)",
            utc_offset: -18e3
        }, {
            id: "America/Indiana/Indianapolis",
            name: "Indiana (East)",
            utc_offset: -18e3
        }, {
            id: "America/Lima",
            name: "Lima",
            utc_offset: -18e3
        }, {
            id: "America/Lima",
            name: "Quito",
            utc_offset: -18e3
        }, {
            id: "America/Caracas",
            name: "Caracas",
            utc_offset: -16200
        }, {
            id: "America/Halifax",
            name: "Atlantic Time (Canada)",
            utc_offset: -14400
        }, {
            id: "America/La_Paz",
            name: "La Paz",
            utc_offset: -14400
        }, {
            id: "America/Santiago",
            name: "Santiago",
            utc_offset: -14400
        }, {
            id: "America/St_Johns",
            name: "Newfoundland",
            utc_offset: -12600
        }, {
            id: "America/Sao_Paulo",
            name: "Brasilia",
            utc_offset: -10800
        }, {
            id: "America/Argentina/Buenos_Aires",
            name: "Buenos Aires",
            utc_offset: -10800
        }, {
            id: "America/Argentina/San_Juan",
            name: "Georgetown",
            utc_offset: -10800
        }, {
            id: "America/Godthab",
            name: "Greenland",
            utc_offset: -10800
        }, {
            id: "Atlantic/South_Georgia",
            name: "Mid-Atlantic",
            utc_offset: -7200
        }, {
            id: "Atlantic/Azores",
            name: "Azores",
            utc_offset: -3600
        }, {
            id: "Atlantic/Cape_Verde",
            name: "Cape Verde Is.",
            utc_offset: -3600
        }, {
            id: "Africa/Casablanca",
            name: "Casablanca",
            utc_offset: 0
        }, {
            id: "Europe/Dublin",
            name: "Dublin",
            utc_offset: 0
        }, {
            id: "Europe/Dublin",
            name: "Edinburgh",
            utc_offset: 0
        }, {
            id: "Europe/Lisbon",
            name: "Lisbon",
            utc_offset: 0
        }, {
            id: "Europe/London",
            name: "London",
            utc_offset: 0
        }, {
            id: "Africa/Monrovia",
            name: "Monrovia",
            utc_offset: 0
        }, {
            id: "Etc/UTC",
            name: "UTC",
            utc_offset: 0
        }, {
            id: "Europe/Amsterdam",
            name: "Amsterdam",
            utc_offset: 3600
        }, {
            id: "Europe/Belgrade",
            name: "Belgrade",
            utc_offset: 3600
        }, {
            id: "Europe/Berlin",
            name: "Berlin",
            utc_offset: 3600
        }, {
            id: "Europe/Berlin",
            name: "Bern",
            utc_offset: 3600
        }, {
            id: "Europe/Bratislava",
            name: "Bratislava",
            utc_offset: 3600
        }, {
            id: "Europe/Brussels",
            name: "Brussels",
            utc_offset: 3600
        }, {
            id: "Europe/Budapest",
            name: "Budapest",
            utc_offset: 3600
        }, {
            id: "Europe/Copenhagen",
            name: "Copenhagen",
            utc_offset: 3600
        }, {
            id: "Europe/Ljubljana",
            name: "Ljubljana",
            utc_offset: 3600
        }, {
            id: "Europe/Madrid",
            name: "Madrid",
            utc_offset: 3600
        }, {
            id: "Europe/Paris",
            name: "Paris",
            utc_offset: 3600
        }, {
            id: "Europe/Prague",
            name: "Prague",
            utc_offset: 3600
        }, {
            id: "Europe/Rome",
            name: "Rome",
            utc_offset: 3600
        }, {
            id: "Europe/Sarajevo",
            name: "Sarajevo",
            utc_offset: 3600
        }, {
            id: "Europe/Skopje",
            name: "Skopje",
            utc_offset: 3600
        }, {
            id: "Europe/Stockholm",
            name: "Stockholm",
            utc_offset: 3600
        }, {
            id: "Europe/Vienna",
            name: "Vienna",
            utc_offset: 3600
        }, {
            id: "Europe/Warsaw",
            name: "Warsaw",
            utc_offset: 3600
        }, {
            id: "Africa/Algiers",
            name: "West Central Africa",
            utc_offset: 3600
        }, {
            id: "Europe/Zagreb",
            name: "Zagreb",
            utc_offset: 3600
        }, {
            id: "Europe/Athens",
            name: "Athens",
            utc_offset: 7200
        }, {
            id: "Europe/Bucharest",
            name: "Bucharest",
            utc_offset: 7200
        }, {
            id: "Africa/Cairo",
            name: "Cairo",
            utc_offset: 7200
        }, {
            id: "Africa/Harare",
            name: "Harare",
            utc_offset: 7200
        }, {
            id: "Europe/Helsinki",
            name: "Helsinki",
            utc_offset: 7200
        }, {
            id: "Europe/Istanbul",
            name: "Istanbul",
            utc_offset: 7200
        }, {
            id: "Asia/Jerusalem",
            name: "Jerusalem",
            utc_offset: 7200
        }, {
            id: "Europe/Kiev",
            name: "Kyev",
            utc_offset: 7200
        }, {
            id: "Europe/Minsk",
            name: "Minsk",
            utc_offset: 7200
        }, {
            id: "Africa/Johannesburg",
            name: "Pretoria",
            utc_offset: 7200
        }, {
            id: "Europe/Riga",
            name: "Riga",
            utc_offset: 7200
        }, {
            id: "Europe/Sofia",
            name: "Sofia",
            utc_offset: 7200
        }, {
            id: "Europe/Tallinn",
            name: "Tallinn",
            utc_offset: 7200
        }, {
            id: "Europe/Vilnius",
            name: "Vilnius",
            utc_offset: 7200
        }, {
            id: "Asia/Baghdad",
            name: "Baghdad",
            utc_offset: 10800
        }, {
            id: "Asia/Kuwait",
            name: "Kuwait",
            utc_offset: 10800
        }, {
            id: "Europe/Moscow",
            name: "Moscow",
            utc_offset: 10800
        }, {
            id: "Africa/Nairobi",
            name: "Nairobi",
            utc_offset: 10800
        }, {
            id: "Asia/Riyadh",
            name: "Riyadh",
            utc_offset: 10800
        }, {
            id: "Europe/Moscow",
            name: "St. Petersburg",
            utc_offset: 10800
        }, {
            id: "Europe/Moscow",
            name: "Volgograd",
            utc_offset: 10800
        }, {
            id: "Asia/Tehran",
            name: "Tehran",
            utc_offset: 12600
        }, {
            id: "Asia/Muscat",
            name: "Abu Dhabi",
            utc_offset: 14400
        }, {
            id: "Asia/Baku",
            name: "Baku",
            utc_offset: 14400
        }, {
            id: "Asia/Muscat",
            name: "Muscat",
            utc_offset: 14400
        }, {
            id: "Asia/Tbilisi",
            name: "Tbilisi",
            utc_offset: 14400
        }, {
            id: "Asia/Yerevan",
            name: "Yerevan",
            utc_offset: 14400
        }, {
            id: "Asia/Kabul",
            name: "Kabul",
            utc_offset: 16200
        }, {
            id: "Asia/Yekaterinburg",
            name: "Ekaterinburg",
            utc_offset: 18e3
        }, {
            id: "Asia/Karachi",
            name: "Islamabad",
            utc_offset: 18e3
        }, {
            id: "Asia/Karachi",
            name: "Karachi",
            utc_offset: 18e3
        }, {
            id: "Asia/Tashkent",
            name: "Tashkent",
            utc_offset: 18e3
        }, {
            id: "Asia/Kolkata",
            name: "Chennai",
            utc_offset: 19800
        }, {
            id: "Asia/Kolkata",
            name: "Kolkata",
            utc_offset: 19800
        }, {
            id: "Asia/Kolkata",
            name: "Mumbai",
            utc_offset: 19800
        }, {
            id: "Asia/Kolkata",
            name: "New Delhi",
            utc_offset: 19800
        }, {
            id: "Asia/Colombo",
            name: "Sri Jayawardenepura",
            utc_offset: 19800
        }, {
            id: "Asia/Katmandu",
            name: "Kathmandu",
            utc_offset: 20700
        }, {
            id: "Asia/Almaty",
            name: "Almaty",
            utc_offset: 21600
        }, {
            id: "Asia/Dhaka",
            name: "Astana",
            utc_offset: 21600
        }, {
            id: "Asia/Dhaka",
            name: "Dhaka",
            utc_offset: 21600
        }, {
            id: "Asia/Novosibirsk",
            name: "Novosibirsk",
            utc_offset: 21600
        }, {
            id: "Asia/Rangoon",
            name: "Rangoon",
            utc_offset: 23400
        }, {
            id: "Asia/Bangkok",
            name: "Bangkok",
            utc_offset: 25200
        }, {
            id: "Asia/Bangkok",
            name: "Hanoi",
            utc_offset: 25200
        }, {
            id: "Asia/Jakarta",
            name: "Jakarta",
            utc_offset: 25200
        }, {
            id: "Asia/Krasnoyarsk",
            name: "Krasnoyarsk",
            utc_offset: 25200
        }, {
            id: "Asia/Shanghai",
            name: "Beijing",
            utc_offset: 28800
        }, {
            id: "Asia/Chongqing",
            name: "Chongqing",
            utc_offset: 28800
        }, {
            id: "Asia/Hong_Kong",
            name: "Hong Kong",
            utc_offset: 28800
        }, {
            id: "Asia/Irkutsk",
            name: "Irkutsk",
            utc_offset: 28800
        }, {
            id: "Asia/Kuala_Lumpur",
            name: "Kuala Lumpur",
            utc_offset: 28800
        }, {
            id: "Australia/Perth",
            name: "Perth",
            utc_offset: 28800
        }, {
            id: "Asia/Singapore",
            name: "Singapore",
            utc_offset: 28800
        }, {
            id: "Asia/Taipei",
            name: "Taipei",
            utc_offset: 28800
        }, {
            id: "Asia/Ulaanbaatar",
            name: "Ulaan Bataar",
            utc_offset: 28800
        }, {
            id: "Asia/Urumqi",
            name: "Urumqi",
            utc_offset: 28800
        }, {
            id: "Asia/Tokyo",
            name: "Osaka",
            utc_offset: 32400
        }, {
            id: "Asia/Tokyo",
            name: "Sapporo",
            utc_offset: 32400
        }, {
            id: "Asia/Seoul",
            name: "Seoul",
            utc_offset: 32400
        }, {
            id: "Asia/Tokyo",
            name: "Tokyo",
            utc_offset: 32400
        }, {
            id: "Asia/Yakutsk",
            name: "Yakutsk",
            utc_offset: 32400
        }, {
            id: "Australia/Adelaide",
            name: "Adelaide",
            utc_offset: 34200
        }, {
            id: "Australia/Darwin",
            name: "Darwin",
            utc_offset: 34200
        }, {
            id: "Australia/Brisbane",
            name: "Brisbane",
            utc_offset: 36e3
        }, {
            id: "Australia/Melbourne",
            name: "Canberra",
            utc_offset: 36e3
        }, {
            id: "Pacific/Guam",
            name: "Guam",
            utc_offset: 36e3
        }, {
            id: "Australia/Hobart",
            name: "Hobart",
            utc_offset: 36e3
        }, {
            id: "Australia/Melbourne",
            name: "Melbourne",
            utc_offset: 36e3
        }, {
            id: "Pacific/Port_Moresby",
            name: "Port Moresby",
            utc_offset: 36e3
        }, {
            id: "Australia/Sydney",
            name: "Sydney",
            utc_offset: 36e3
        }, {
            id: "Asia/Vladivostok",
            name: "Vladivostok",
            utc_offset: 36e3
        }, {
            id: "Asia/Magadan",
            name: "Magadan",
            utc_offset: 39600
        }, {
            id: "Pacific/Noumea",
            name: "New Caledonia",
            utc_offset: 39600
        }, {
            id: "Asia/Magadan",
            name: "Solomon Is.",
            utc_offset: 39600
        }, {
            id: "Pacific/Auckland",
            name: "Auckland",
            utc_offset: 43200
        }, {
            id: "Pacific/Fiji",
            name: "Fiji",
            utc_offset: 43200
        }, {
            id: "Asia/Kamchatka",
            name: "Kamchatka",
            utc_offset: 43200
        }, {
            id: "Pacific/Majuro",
            name: "Marshall Is.",
            utc_offset: 43200
        }, {
            id: "Pacific/Auckland",
            name: "Wellington",
            utc_offset: 43200
        }, {
            id: "Pacific/Tongatapu",
            name: "Nuku'alofa",
            utc_offset: 46800
        }]
    },
    1623: function(e, t) {
        e.exports = {
            AC: {
                fmt: "%N%n%O%n%A%n%C%n%Z"
            },
            AD: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            AE: {
                fmt: "%N%n%O%n%A%n%S"
            },
            AF: {
                fmt: "%N%n%O%n%A%n%C%n%Z"
            },
            AI: {
                fmt: "%N%n%O%n%A%n%C%n%Z"
            },
            AL: {
                fmt: "%N%n%O%n%A%n%Z%n%C"
            },
            AM: {
                fmt: "%N%n%O%n%A%n%Z%n%C%n%S"
            },
            AR: {
                fmt: "%N%n%O%n%A%n%Z %C%n%S"
            },
            AS: {
                fmt: "%N%n%O%n%A%n%C %S %Z"
            },
            AT: {
                fmt: "%O%n%N%n%A%n%Z %C"
            },
            AU: {
                fmt: "%O%n%N%n%A%n%C %S %Z"
            },
            AX: {
                fmt: "%O%n%N%n%A%nAX-%Z %C%nÅLAND"
            },
            AZ: {
                fmt: "%N%n%O%n%A%nAZ %Z %C"
            },
            BA: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            BB: {
                fmt: "%N%n%O%n%A%n%C, %S %Z"
            },
            BD: {
                fmt: "%N%n%O%n%A%n%C - %Z"
            },
            BE: {
                fmt: "%O%n%N%n%A%n%Z %C"
            },
            BF: {
                fmt: "%N%n%O%n%A%n%C %X"
            },
            BG: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            BH: {
                fmt: "%N%n%O%n%A%n%C %Z"
            },
            BL: {
                fmt: "%O%n%N%n%A%n%Z %C %X"
            },
            BM: {
                fmt: "%N%n%O%n%A%n%C %Z"
            },
            BN: {
                fmt: "%N%n%O%n%A%n%C %Z"
            },
            BR: {
                fmt: "%O%n%N%n%A%n%D%n%C-%S%n%Z"
            },
            BS: {
                fmt: "%N%n%O%n%A%n%C, %S"
            },
            BT: {
                fmt: "%N%n%O%n%A%n%C %Z"
            },
            BY: {
                fmt: "%S%n%Z %C%n%A%n%O%n%N"
            },
            CA: {
                fmt: "%N%n%O%n%A%n%C %S %Z"
            },
            CC: {
                fmt: "%O%n%N%n%A%n%C %S %Z"
            },
            CH: {
                fmt: "%O%n%N%n%A%nCH-%Z %C"
            },
            CI: {
                fmt: "%N%n%O%n%X %A %C %X"
            },
            CL: {
                fmt: "%N%n%O%n%A%n%Z %C%n%S"
            },
            CN: {
                fmt: "%Z%n%S%C%D%n%A%n%O%n%N"
            },
            CO: {
                fmt: "%N%n%O%n%A%n%C, %S, %Z"
            },
            CR: {
                fmt: "%N%n%O%n%A%n%S, %C%n%Z"
            },
            CV: {
                fmt: "%N%n%O%n%A%n%Z %C%n%S"
            },
            CX: {
                fmt: "%O%n%N%n%A%n%C %S %Z"
            },
            CY: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            CZ: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            DE: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            DK: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            DO: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            DZ: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            EC: {
                fmt: "%N%n%O%n%A%n%Z%n%C"
            },
            EE: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            EG: {
                fmt: "%N%n%O%n%A%n%C%n%S%n%Z"
            },
            EH: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            ES: {
                fmt: "%N%n%O%n%A%n%Z %C %S"
            },
            ET: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            FI: {
                fmt: "%O%n%N%n%A%nFI-%Z %C"
            },
            FK: {
                fmt: "%N%n%O%n%A%n%C%n%Z"
            },
            FM: {
                fmt: "%N%n%O%n%A%n%C %S %Z"
            },
            FO: {
                fmt: "%N%n%O%n%A%nFO%Z %C"
            },
            FR: {
                fmt: "%O%n%N%n%A%n%Z %C %X"
            },
            GB: {
                fmt: "%N%n%O%n%A%n%C%n%Z"
            },
            GE: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            GF: {
                fmt: "%O%n%N%n%A%n%Z %C %X"
            },
            GG: {
                fmt: "%N%n%O%n%A%n%C%nGUERNSEY%n%Z"
            },
            GI: {
                fmt: "%N%n%O%n%A%nGIBRALTAR%n%Z"
            },
            GL: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            GN: {
                fmt: "%N%n%O%n%Z %A %C"
            },
            GP: {
                fmt: "%O%n%N%n%A%n%Z %C %X"
            },
            GR: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            GS: {
                fmt: "%N%n%O%n%A%n%n%C%n%Z"
            },
            GT: {
                fmt: "%N%n%O%n%A%n%Z- %C"
            },
            GU: {
                fmt: "%N%n%O%n%A%n%C %Z"
            },
            GW: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            HK: {
                fmt: "%S%n%C%n%A%n%O%n%N"
            },
            HM: {
                fmt: "%O%n%N%n%A%n%C %S %Z"
            },
            HN: {
                fmt: "%N%n%O%n%A%n%C, %S%n%Z"
            },
            HR: {
                fmt: "%N%n%O%n%A%nHR-%Z %C"
            },
            HT: {
                fmt: "%N%n%O%n%A%nHT%Z %C"
            },
            HU: {
                fmt: "%N%n%O%n%C%n%A%n%Z"
            },
            ID: {
                fmt: "%N%n%O%n%A%n%C%n%S %Z"
            },
            IE: {
                fmt: "%N%n%O%n%A%n%D%n%C%n%S %Z"
            },
            IL: {
                fmt: "%N%n%O%n%A%n%C %Z"
            },
            IM: {
                fmt: "%N%n%O%n%A%n%C%n%Z"
            },
            IN: {
                fmt: "%N%n%O%n%A%n%C %Z%n%S"
            },
            IO: {
                fmt: "%N%n%O%n%A%n%C%n%Z"
            },
            IQ: {
                fmt: "%O%n%N%n%A%n%C, %S%n%Z"
            },
            IR: {
                fmt: "%O%n%N%n%S%n%C, %D%n%A%n%Z"
            },
            IS: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            IT: {
                fmt: "%N%n%O%n%A%n%Z %C %S"
            },
            JE: {
                fmt: "%N%n%O%n%A%n%C%nJERSEY%n%Z"
            },
            JM: {
                fmt: "%N%n%O%n%A%n%C%n%S %X"
            },
            JO: {
                fmt: "%N%n%O%n%A%n%C %Z"
            },
            JP: {
                fmt: "〒%Z%n%S%C%n%A%n%O%n%N"
            },
            KE: {
                fmt: "%N%n%O%n%A%n%C%n%Z"
            },
            KG: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            KH: {
                fmt: "%N%n%O%n%A%n%C %Z"
            },
            KI: {
                fmt: "%N%n%O%n%A%n%S%n%C"
            },
            KN: {
                fmt: "%N%n%O%n%A%n%C, %S"
            },
            KR: {
                fmt: "%S %C%D%n%A%n%O%n%N%n%Z"
            },
            KW: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            KY: {
                fmt: "%N%n%O%n%A%n%S %Z"
            },
            KZ: {
                fmt: "%Z%n%S%n%C%n%A%n%O%n%N"
            },
            LA: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            LB: {
                fmt: "%N%n%O%n%A%n%C %Z"
            },
            LI: {
                fmt: "%O%n%N%n%A%nFL-%Z %C"
            },
            LK: {
                fmt: "%N%n%O%n%A%n%C%n%Z"
            },
            LR: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            LS: {
                fmt: "%N%n%O%n%A%n%C %Z"
            },
            LT: {
                fmt: "%O%n%N%n%A%nLT-%Z %C"
            },
            LU: {
                fmt: "%O%n%N%n%A%nL-%Z %C"
            },
            LV: {
                fmt: "%N%n%O%n%A%n%C, %Z"
            },
            MA: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            MC: {
                fmt: "%N%n%O%n%A%nMC-%Z %C %X"
            },
            MD: {
                fmt: "%N%n%O%n%A%nMD-%Z %C"
            },
            ME: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            MF: {
                fmt: "%O%n%N%n%A%n%Z %C %X"
            },
            MG: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            MH: {
                fmt: "%N%n%O%n%A%n%C %S %Z"
            },
            MK: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            MM: {
                fmt: "%N%n%O%n%A%n%C, %Z"
            },
            MN: {
                fmt: "%N%n%O%n%A%n%C%n%S %Z"
            },
            MO: {
                fmt: "%A%n%O%n%N"
            },
            MP: {
                fmt: "%N%n%O%n%A%n%C %S %Z"
            },
            MQ: {
                fmt: "%O%n%N%n%A%n%Z %C %X"
            },
            MT: {
                fmt: "%N%n%O%n%A%n%C %Z"
            },
            MU: {
                fmt: "%N%n%O%n%A%n%Z%n%C"
            },
            MV: {
                fmt: "%N%n%O%n%A%n%C %Z"
            },
            MW: {
                fmt: "%N%n%O%n%A%n%C %X"
            },
            MX: {
                fmt: "%N%n%O%n%A%n%D%n%Z %C, %S"
            },
            MY: {
                fmt: "%N%n%O%n%A%n%D%n%Z %C%n%S"
            },
            MZ: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            NC: {
                fmt: "%O%n%N%n%A%n%Z %C %X"
            },
            NE: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            NF: {
                fmt: "%O%n%N%n%A%n%C %S %Z"
            },
            NG: {
                fmt: "%N%n%O%n%A%n%D%n%C %Z%n%S"
            },
            NI: {
                fmt: "%N%n%O%n%A%n%Z%n%C, %S"
            },
            NL: {
                fmt: "%O%n%N%n%A%n%Z %C"
            },
            NO: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            NP: {
                fmt: "%N%n%O%n%A%n%C %Z"
            },
            NR: {
                fmt: "%N%n%O%n%A%n%S"
            },
            NZ: {
                fmt: "%N%n%O%n%A%n%D%n%C %Z"
            },
            OM: {
                fmt: "%N%n%O%n%A%n%Z%n%C"
            },
            PA: {
                fmt: "%N%n%O%n%A%n%C%n%S"
            },
            PE: {
                fmt: "%N%n%O%n%A%n%C %Z%n%S"
            },
            PF: {
                fmt: "%N%n%O%n%A%n%Z %C %S"
            },
            PG: {
                fmt: "%N%n%O%n%A%n%C %Z %S"
            },
            PH: {
                fmt: "%N%n%O%n%A%n%D, %C%n%Z %S"
            },
            PK: {
                fmt: "%N%n%O%n%A%n%C-%Z"
            },
            PL: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            PM: {
                fmt: "%O%n%N%n%A%n%Z %C %X"
            },
            PN: {
                fmt: "%N%n%O%n%A%n%C%n%Z"
            },
            PR: {
                fmt: "%N%n%O%n%A%n%C PR %Z"
            },
            PT: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            PW: {
                fmt: "%N%n%O%n%A%n%C %S %Z"
            },
            PY: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            RE: {
                fmt: "%O%n%N%n%A%n%Z %C %X"
            },
            RO: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            RS: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            RU: {
                fmt: "%N%n%O%n%A%n%C%n%S%n%Z"
            },
            SA: {
                fmt: "%N%n%O%n%A%n%C %Z"
            },
            SC: {
                fmt: "%N%n%O%n%A%n%C%n%S"
            },
            SE: {
                fmt: "%O%n%N%n%A%nSE-%Z %C"
            },
            SG: {
                fmt: "%N%n%O%n%A%nSINGAPORE %Z"
            },
            SH: {
                fmt: "%N%n%O%n%A%n%C%n%Z"
            },
            SI: {
                fmt: "%N%n%O%n%A%nSI- %Z %C"
            },
            SJ: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            SK: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            SM: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            SN: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            SO: {
                fmt: "%N%n%O%n%A%n%C, %S %Z"
            },
            SR: {
                fmt: "%N%n%O%n%A%n%C%n%S"
            },
            SV: {
                fmt: "%N%n%O%n%A%n%Z-%C%n%S"
            },
            SZ: {
                fmt: "%N%n%O%n%A%n%C%n%Z"
            },
            TA: {
                fmt: "%N%n%O%n%A%n%C%n%Z"
            },
            TC: {
                fmt: "%N%n%O%n%A%n%C%n%Z"
            },
            TH: {
                fmt: "%N%n%O%n%A%n%D %C%n%S %Z"
            },
            TJ: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            TM: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            TN: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            TR: {
                fmt: "%N%n%O%n%A%n%Z %C/%S"
            },
            TV: {
                fmt: "%N%n%O%n%A%n%C%n%S"
            },
            TW: {
                fmt: "%Z%n%S%C%n%A%n%O%n%N"
            },
            TZ: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            UA: {
                fmt: "%N%n%O%n%A%n%C%n%S%n%Z"
            },
            UM: {
                fmt: "%N%n%O%n%A%n%C %S %Z"
            },
            US: {
                fmt: "%N%n%O%n%A%n%C, %S %Z"
            },
            UY: {
                fmt: "%N%n%O%n%A%n%Z %C %S"
            },
            UZ: {
                fmt: "%N%n%O%n%A%n%Z %C%n%S"
            },
            VA: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            VC: {
                fmt: "%N%n%O%n%A%n%C %Z"
            },
            VE: {
                fmt: "%N%n%O%n%A%n%C %Z, %S"
            },
            VG: {
                fmt: "%N%n%O%n%A%n%C%n%Z"
            },
            VI: {
                fmt: "%N%n%O%n%A%n%C %S %Z"
            },
            VN: {
                fmt: "%N%n%O%n%A%n%C%n%S %Z"
            },
            WF: {
                fmt: "%O%n%N%n%A%n%Z %C %X"
            },
            XK: {
                fmt: "%N%n%O%n%A%n%Z %C"
            },
            YT: {
                fmt: "%O%n%N%n%A%n%Z %C %X"
            },
            ZA: {
                fmt: "%N%n%O%n%A%n%D%n%C%n%Z"
            },
            ZM: {
                fmt: "%N%n%O%n%A%n%Z %C"
            }
        }
    },
    1662: function(e, t, n) {
        var i = n(1232),
            r = n(25),
            o = n(1624),
            a = "trinity-broadcast",
            s = e.exports = i({}, r, {
                broadcast: function(e, t) {
                    o.set(a, {
                        event: e,
                        data: t,
                        now: Date.now()
                    })
                }
            });
        o.on(a, function(e) {
            var t = e.event,
                n = e.data;
            t && s.trigger(t, n)
        })
    },
    1663: function(e, t) {
        function n(e) {
            return e.toUpperCase().replace(/-/g, "_")
        }
        var i = 0,
            r = {
                STOP: "stop",
                HEARTBEAT: "heartbeat"
            },
            o = {
                PLAY: "play"
            };
        e.exports = {
            events: o,
            actions: r,
            createMessage: function(e) {
                return {
                    version: i,
                    timestamp: Math.floor(Date.now() / 1e3),
                    registration_id: e
                }
            },
            parseAction: function(e) {
                return e && e.action && r[n(e.action)] ? e.action : null
            }
        }
    },
    1664: function(e, t, n) {
        function i(e) {
            function t() {
                x && (x.close(), x = null), b = !0
            }

            function n() {
                b || (x = new EventSource(g, {
                    withCredentials: m
                }), x.onopen = c, x.onerror = h, x.onmessage = f)
            }

            function i() {
                return x && p[x.readyState]
            }

            function l() {
                b || x.readyState === d && n()
            }

            function c() {
                b || (w = 0, k.trigger(s.OPEN))
            }

            function h(e) {
                if (!b) {
                    if (++w > u) {
                        var t = r(w);
                        y("More than " + u + " errors in a row. " + ("Will use back-off timeout to reconnect in " + t + " ms")), window.setTimeout(l, t)
                    } else y("Will try to reconnect ASAP"), l();
                    k.trigger(s.ERROR, e)
                }
            }

            function f(e) {
                if (!b) {
                    var t = e.data;
                    if (v) try {
                        t = JSON.parse(t)
                    } catch (n) {
                        t = {}, y("syntax error parsing data to object", n.message, e)
                    }
                    k.trigger(s.DATA, t)
                }
            }
            var g = e.eventUrl,
                m = e.withCredentials,
                v = e.json,
                _ = e.log,
                y = void 0 === _ ? function() {} : _,
                b = !1,
                w = 0,
                x = null,
                k = o({}, a, {
                    dispose: t,
                    getEventSourceReadyState: i
                });
            return n(), k
        }

        function r(e) {
            var t = e / u,
                n = l * Math.pow(2, t);
            return Math.min(c, n)
        }
        var o = n(1232),
            a = n(25),
            s = n(1345),
            l = 2e3,
            u = 1,
            c = 1e4,
            d = 2,
            p = {
                0: "connecting",
                1: "open",
                2: "closed"
            };
        e.exports = i
    },
    1671: function(e, t) {
        function n(e, t) {
            function n(t, n, i) {
                if (!(t instanceof Date)) throw new Error("toRelativeTime method expects first argument to be Date");
                i = i || Date.now();
                var r, o, a, s = i - t,
                    l = s > 0,
                    u = null,
                    c = e.relativeTime;
                if (n = n && parseInt(n, 10) || 1e3, s = Math.abs(s), n >= s) return l ? c.justNow : c.rightNow;
                for (r in v)
                    if (v.hasOwnProperty(r)) {
                        if (s < v[r]) break;
                        u = r, s /= v[r]
                    } return s = Math.floor(s), o = l ? c.past : c.future, a = c[u](s), "function" == typeof o ? o(a) : o.replace(/%s/i, a)
            }

            function c(t, i) {
                var r, o, a, s, l, u, c = e.dates;
                if (!(t instanceof Date)) throw new Error("format method expects first argument to be Date");
                return "relative" === i ? n(t) : (r = t.getDate(), o = t.getDay(), a = t.getMonth(), s = t.getFullYear(), l = d(t.getMinutes()), u = [
                    ["YYYY", s],
                    ["MMMM", c.monthsDay && c.monthsDay[a] || c.months[a]],
                    ["DDDD", c.weekdays[o]],
                    ["MMM", c.monthsDayShort && c.monthsDayShort[a] || c.monthsShort[a]],
                    ["DD", r],
                    ["MM", a + 1],
                    ["HH", t.getHours()],
                    ["mm", l]
                ], u.reduce(function(e, t) {
                    return e.replace(new RegExp(t[0], "g"), t[1])
                }, y(i)))
            }

            function y(t) {
                var n;
                switch (t) {
                    case "iso":
                        return "YYYY-MM-DD";
                    case "readable":
                        n = "readable";
                        break;
                    case "readable_time":
                        n = "readableTime";
                        break;
                    case "readable_abbreviated":
                        n = "readableAbbreviated";
                        break;
                    case "readable_with_weekday":
                        n = "readableWithWeekday";
                        break;
                    default:
                        n = "default"
                }
                return e.dateFormats[n]
            }

            function b(e) {
                var t, n;
                return t = "number" == typeof e ? new Date(e) : i(e), n = t - Date.now(), Math.abs(n) > 7 * m ? !1 : (S = n, !0)
            }

            function w() {
                return Date.now() + S
            }

            function x(t, n) {
                if (isNaN(t)) return t;
                var i = [],
                    r = Math.floor(t / g),
                    o = Math.floor(t / f % 60),
                    a = Math.floor(t / h % 60),
                    s = e.relativeTime;
                return n && n.inWords ? (r > 0 && i.push(s.hour(r)), o > 0 && i.push(s.min(o)), (a > 0 || 0 === o && 0 === r) && i.push(s.sec(a)), i.join(" ")) : (r > 0 && i.push(r), n && n.minimal && 0 === r && 0 === o ? i.push("") : i.push(10 > o && r > 0 ? "0" + o : o), i.push(10 > a ? "0" + a : a), i.join(":"))
            }

            function k(e) {
                return t.zeroPad(e.getHours(), 2) + ":" + t.zeroPad(e.getMinutes(), 2)
            }
            var S = 0;
            return {
                time: _,
                toRelativeTime: n,
                format: c,
                fromString: i,
                setServerTime: b,
                nowAtServer: w,
                timecode: x,
                stringToTime: r,
                convert: o,
                floorTo30Minutes: a,
                parseTime: s,
                formatTime: k,
                getTimezoneOffset: l,
                getBounds: u,
                toLocalDate: p
            }
        }

        function i(e) {
            return new Date(Date.parse(e) || e)
        }

        function r(e) {
            var t, n = /^\d+(\.\d+)?$/g,
                i = /^(?:npt:)?(?:(?:(\d+):)?(\d\d?):)?(\d\d?)(\.\d+)?$/,
                r = /^(?:(\d\d?)[hH])?(?:(\d\d?)[mM])?(\d\d?)[sS]$/;
            return n.test(e) ? 1e3 * parseFloat(e) : (t = i.exec(e) || r.exec(e), t ? 1e3 * (3600 * (parseInt(t[1], 10) || 0) + 60 * (parseInt(t[2], 10) || 0) + parseInt(t[3], 10) + (parseFloat(t[4]) || 0)) : 0)
        }

        function o(e, t, n) {
            n = n || "s";
            var i = "smh",
                r = i.indexOf(t),
                o = i.indexOf(n);
            if (-1 === r || -1 === o) throw new Error('Units must be expressed as either "h", "m" or "s"');
            return Math.round(Math.pow(60, o - r) * e)
        }

        function a(e) {
            return e = new Date(e), e.setMinutes(e.getMinutes() - e.getMinutes() % 30), e
        }

        function s(e) {
            var t, n, i, r = e.match(/^\s*(\d{1,2})\s*(?::\s*(\d{1,2}))?\s*(?:(a|p)m?)?\s*$/i);
            if (r && (t = r[1] && parseInt(r[1], 10), n = r[2] && parseInt(r[2], 10), i = r[3] && r[3].toLowerCase(), !(t > 23 || n > 59))) {
                if (i)
                    if ("p" === i) {
                        if (12 > t) t += 12;
                        else if (t > 13) return
                    } else if ("a" === i)
                    if (12 === t) t = 0;
                    else if (t > 12) return;
                return n || (n = 0), [t, n]
            }
        }

        function l() {
            var e, t = new Date(2009, 0, 1, 6, 0, 0),
                n = new Date(2009, 6, 1, 6, 0, 0);
            return e = t.getUTCHours() > n.getUTCHours() ? t.getTimezoneOffset() : n.getTimezoneOffset()
        }

        function u(e) {
            if (null == e.offset) return {};
            var t = new Date;
            c(t, e.resolution);
            var n = +new Date(+t + e.offset * _[e.resolution]),
                i = +new Date(n + (e.duration - 1) * _[e.resolution]);
            return {
                from: n,
                to: i
            }
        }

        function c(e, t) {
            switch (t) {
                case "day":
                    e.setUTCHours(0, 0, 0, 0);
                    break;
                case "hour":
                    e.setUTCMinutes(0, 0, 0)
            }
        }

        function d(e) {
            return ("0" + e).substr(-2)
        }

        function p(e) {
            var t = "string" == typeof e ? Date.parse(e) : "number" == typeof e ? e : e.valueOf(),
                n = 60 * l() * 1e3;
            return new Date(t + n)
        }
        e.exports = n;
        var h = 1e3,
            f = 6e4,
            g = 60 * f,
            m = 24 * g,
            v = {
                sec: 1e3,
                min: 60,
                hour: 60,
                day: 24,
                month: 30,
                year: 12
            },
            _ = {
                minute: f,
                hour: g,
                day: m
            }
    },
    1672: function(e, t) {
        function n(e) {
            return {
                round: i,
                format: function(t, n) {
                    if ("" === t || null == t || isNaN(t) || Math.abs(t) === 1 / 0) return "";
                    t = parseFloat(t);
                    var r = n && n.precision || 0,
                        o = e.delimiters;
                    return r = Math.max(Math.min(r, 20), 0), t = i(t, r, n && n.roundingFn), n && !isNaN(n.fixed) && (t = t.toFixed(Math.max(Math.min(n.fixed, 20), 0))), ("" + t).split(".").map(function(e, t) {
                        return 0 === t ? e.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + o.thousands) : e
                    }).join(o.decimal)
                },
                zeroPad: function(e, t) {
                    if (null == e) return e;
                    e += "";
                    var n = t - e.length;
                    return n > 0 && (e = new Array(n + 1).join("0") + e), e
                }
            }
        }

        function i(e, t, n) {
            n = n || Math.round;
            var i = Math.pow(10, t || 0);
            return n(e * i) / i
        }
        e.exports = n
    },
    1673: function(e, t) {
        function n(e, t) {
            return l.hasOwnProperty(e) ? t.replace(l[e]["default"], l[e].override) : t
        }

        function i(e) {
            return u.hasOwnProperty(e) ? u[e] : 2
        }

        function r(e, t, n) {
            var r = i(t);
            if (r > n) {
                var o = Math.round(e) * Math.pow(10, r) !== Math.round(e * Math.pow(10, r));
                if (n > 0 || o) return r
            }
            return n
        }

        function o(e, t) {
            var o = a.memoize(function(t, n) {
                try {
                    return new Intl.NumberFormat(e.replace("_", "-"), {
                        style: t ? "currency" : "decimal",
                        currency: t,
                        minimumFractionDigits: n
                    }).format
                } catch (i) {
                    return new Intl.NumberFormat(e.replace("_", "-"), {
                        style: "decimal",
                        minimumFractionDigits: n
                    }).format
                }
            }, function(e, t) {
                return "" + e + t
            });
            return {
                format: function(a, l, u) {
                    var c = a / Math.pow(10, i(l)),
                        d = r(c, l, u);
                    if ("undefined" != typeof Intl) return n(l, o(l, d)(c));
                    var p = t.format(c, {
                            precision: 2,
                            minFractionDigits: d
                        }),
                        h = s[l] || l;
                    switch (e) {
                        case "en":
                        case "en_GB":
                            return "" + h + p;
                        case "fr":
                            return "" + p + " " + h;
                        default:
                            return "" + p + h
                    }
                }
            }
        }
        var a = {
            has: function(e, t) {
                return null != e && hasOwnProperty.call(e, t)
            },
            memoize: function(e, t) {
                var n = function(i) {
                    var r = n.cache,
                        o = "" + (t ? t.apply(this, arguments) : i);
                    return a.has(r, o) || (r[o] = e.apply(this, arguments)), r[o]
                };
                return n.cache = {}, n
            }
        };
        e.exports = o;
        var s = {
                AUD: "AU$",
                CAD: "CA$",
                EUR: "€",
                GBP: "£",
                NZD: "NZ$",
                USD: "$"
            },
            l = {
                AUD: {
                    "default": "A$",
                    override: "AU$"
                },
                USD: {
                    "default": /US\$|\$US/,
                    override: "$"
                },
                GBP: {
                    "default": "£GB",
                    override: "£"
                }
            },
            u = {
                BIF: 0,
                CLP: 0,
                DJF: 0,
                GNF: 0,
                ISK: 0,
                JPY: 0,
                KMF: 0,
                KRW: 0,
                PYG: 0,
                RWF: 0,
                UGX: 0,
                UYI: 0,
                VND: 0,
                VUV: 0,
                XAF: 0,
                XOF: 0,
                XPF: 0,
                BHD: 3,
                IQD: 3,
                JOD: 3,
                KWD: 3,
                LYD: 3,
                OMR: 3,
                TND: 3,
                CLF: 4
            }
    },
    1692: function(e, t) {
        "use strict";

        function n(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
            return n.reduce(i, e)
        }

        function i(e, t) {
            for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
            return e
        }
        e.exports = n
    },
    1693: function(e, t) {
        "use strict";

        function n(e) {
            return i.innerHTML = e.replace(r, "&lt;"), i.value
        }
        e.exports = n;
        var i = document.createElement("textarea"),
            r = /</g
    },
    1694: function(e, t) {
        "use strict";

        function n(e) {
            return null == e || e === !1 ? "" : o.test(e) ? e.replace(r, a) : e
        }
        e.exports = n;
        var i = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            r = /&(?!\w+;)|[<>"'`]/g,
            o = /[&<>"'`]/,
            a = function(e) {
                return i[e] || "&amp;"
            }
    },
    1695: function(e, t) {
        "use strict";

        function n(e, t, n) {
            return !e || n && n.test(t) ? t : e.replace(i, window.encodeURIComponent(t))
        }
        e.exports = n;
        var i = /%s/
    },
    1696: function(e, t, n) {
        "use strict";

        function i(e, t) {
            function n(e) {
                if (t > 0) {
                    var n = e.data.length;
                    t -= n, 0 >= t && (e.data = e.substringData(0, e.data.length + t))
                } else e.data = ""
            }

            function i() {
                return t > 0
            }

            function s(e) {
                for (var t = void 0; e;) t = e, e = e.nextSibling, t.parentNode.removeChild(t)
            }
            return e.length < t ? e : (a.innerHTML = o.innerHTML = e, r(o, n, i, s), o.innerHTML + (o.innerHTML === a.innerHTML ? "" : "&hellip;"))
        }
        var r = n(1355);
        e.exports = i;
        var o = document.createElement("div"),
            a = document.createElement("div")
    },
    1697: function(e, t) {
        "use strict";

        function n() {
            var e = [],
                t = Math.floor(1e4 * Math.random()),
                n = /xxxLINK[0-9]+\|([0-9]+)xxx/g;
            return {
                addPlaceholder: function(n, i) {
                    return e.push({
                        href: n,
                        text: i
                    }), "xxxLINK" + t + "|" + (e.length - 1) + "xxx"
                },
                flatten: function(t, i) {
                    var r = t.replace(n, function(t, n) {
                        var r = e[parseInt(n, 10)];
                        return r ? i(r.href, r.text) : t
                    });
                    return e.length = 0, r
                }
            }
        }
        e.exports = n
    },
    1698: function(e, t, n) {
        "use strict";

        function i(e, t) {
            function n(e) {
                i.lastIndex = 0, i.test(e.data) && (e.data = e.data.replace(i, function(e) {
                    return e.split(a).filter(Boolean).join("​")
                }))
            }
            var i = new RegExp("\\S{" + t + ",}", "g"),
                a = new RegExp("(\\S{" + Math.floor(t / 2) + "}(?=\\S{2}))");
            return i.test(e) ? (o.innerHTML = e, r(o, n), o.innerHTML) : e
        }
        var r = n(1355);
        e.exports = i;
        var o = document.createElement("div")
    },
    1699: function(e, t) {
        "use strict";

        function n(e, t, n) {
            e = n ? e.replace(n, "") : e;
            var o = e.match(r) || [],
                a = i(o, 1),
                s = a[0];
            if (s && e.length > t) {
                var l = e.search(r) + s.length,
                    u = Math.floor((t - l) / 2);
                return e.slice(0, l + u) + "&hellip;" + e.slice(-u)
            }
            return e
        }
        var i = function() {
            function e(e, t) {
                var n = [],
                    i = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
                } catch (l) {
                    r = !0, o = l
                } finally {
                    try {
                        !i && s["return"] && s["return"]()
                    } finally {
                        if (r) throw o
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        e.exports = n;
        var r = /\.[a-z-]{2,30}\//
    },
    1786: function(e, t, n) {
        "use strict";
        var i = e.exports = n(3).assign({}, n(22).Events, {
            initialize: function() {
                n(75).bindErrorHandler(i.onActionError)
            },
            onActionError: function(e) {
                if ("follow" === e.action) {
                    var t = i.getErrorFromXhr(e.xhr) || {};
                    switch (t.error_message) {
                        case "DENY_AGE_RESTRICTED":
                            return n(56).trigger("error:followDeniedAge", {
                                errorType: "DENY_AGE_RESTRICTED",
                                requiredAge: t.age
                            }), !1;
                        case "DENY_AGE_UNKNOWN":
                            return n(56).trigger("error:followDeniedAge", {
                                errorType: "DENY_AGE_UNKNOWN",
                                context: e.context,
                                followeeId: e.target
                            }), !1
                    }
                }
            },
            getErrorFromXhr: function(e) {
                return e && 403 === e.status && e.responseJSON ? n(3).find(e.responseJSON.errors, function(e) {
                    return "DENY_AGE_RESTRICTED" === e.error_message || "DENY_AGE_UNKNOWN" === e.error_message
                }) : void 0
            }
        })
    },
    1787: function(e, t) {
        "use strict";

        function n(e, t, n) {
            return e.has(t) ? e.get(t) : (e.set(t, n), n)
        }

        function i(e) {
            for (var t = e.source, i = e.target, o = e.getKeyFn, a = 0, s = new Map, l = new Array(t.length), u = new Array(i.length), c = i, d = Array.isArray(c), p = 0, c = d ? c : c[Symbol.iterator]();;) {
                var h;
                if (d) {
                    if (p >= c.length) break;
                    h = c[p++]
                } else {
                    if (p = c.next(), p.done) break;
                    h = p.value
                }
                var f = h,
                    g = o(f),
                    m = n(s, g, {});
                m.NC = (m.NC || 0) + 1, u[a] = m, a++
            }
            for (var v = 0, _ = t, y = Array.isArray(_), b = 0, _ = y ? _ : _[Symbol.iterator]();;) {
                var w;
                if (y) {
                    if (b >= _.length) break;
                    w = _[b++]
                } else {
                    if (b = _.next(), b.done) break;
                    w = b.value
                }
                var f = w,
                    g = o(f),
                    m = n(s, g, {});
                m.OC = (m.OC || 0) + 1, m.OLNO = v, l[v] = m, v++
            }
            for (a = 0; a < u.length; ++a) 1 === u[a].OC && 1 === u[a].NC && (u[a] = {
                ref: u[a].OLNO
            }, l[u[a].ref] = {
                ref: a
            });
            l.push({
                ref: u.length,
                token: "eof"
            });
            for (var x = 0, k = 0, S = 0, C = 0, T = [], E = []; x < l.length;) {
                for (S = x; void 0 === l[S].ref;) S++;
                if (C = l[S].ref, k > C) {
                    for (; S > x;) {
                        var A = t[x];
                        T.push({
                            op: "del",
                            value: A,
                            index: x++
                        })
                    }
                    var I = t[x];
                    T.push({
                        op: "del",
                        value: I,
                        index: x++
                    })
                } else {
                    for (var M = r(S, x, C, k), D = C - 1; M > 0 && D >= k; D--)
                        if (void 0 !== u[D].ref && !(u[D].ref < x)) {
                            var P = r(u[D].ref, x, D, k);
                            M > P && (M = P, C = D, S = u[D].ref)
                        } for (; S > x;) {
                        var I = t[x];
                        T.push({
                            op: "del",
                            value: I,
                            index: x++
                        })
                    }
                    for (; C > k;) {
                        var I = i[k];
                        E.push({
                            op: "ins",
                            value: I,
                            index: k++
                        })
                    }
                    if ("eof" === l[x].token) break;
                    x++, k++
                }
            }
            return {
                inserts: E,
                removes: T
            }
        }

        function r(e, t, n, i) {
            return e - t + (n - i) + Math.abs(e - t - (n - i))
        }
        var o = function(e) {
            return e
        };
        e.exports = {
            align: function(e) {
                for (var t = e.source, n = e.target, r = e.add, a = e.remove, s = e.getKeyFn, l = void 0 === s ? o : s, u = i({
                        source: t,
                        target: n,
                        getKeyFn: l
                    }), c = u.inserts, d = u.removes, p = d.length - 1; p >= 0; p--) a(d[p].value, d[p].index);
                for (var h = 0; h < c.length; h++) r(c[h].value, c[h].index)
            },
            getAlignInstructions: function(e, t) {
                var n = arguments.length <= 2 || void 0 === arguments[2] ? o : arguments[2],
                    r = i({
                        source: e,
                        target: t,
                        getKeyFn: n
                    }),
                    a = r.inserts,
                    s = r.removes;
                return s.concat(a)
            }
        }
    },
    1788: function(e, t, n) {
        "use strict";
        var i = "https://eventlogger.soundcloud.com/audio_error";
        e.exports = {
            log: function(e) {
                var t = n(65).stringify({
                        query: e
                    }),
                    r = new window.Image;
                r.src = i + t
            }
        }
    },
    1789: function(e, t, n) {
        "use strict";

        function i() {
            function e() {
                var e = t.some(function(e) {
                    return e.isConnectionRequired()
                });
                e !== i && (i = e, n(56).trigger(e ? "error:audio_no_connection" : "error:audio_connection_recovered"))
            }
            var t = [],
                i = !1;
            return {
                handleConnectionEvents: function(n) {
                    n.onConnectionRequired.subscribe(e), n.onConnectionRecovered.subscribe(e), n.onChange.subscribe(function(i) {
                        var r = i.dead;
                        r && (t.splice(t.indexOf(n), 1), e())
                    }), t.push(n), e()
                }
            }
        }
        e.exports = {
            buildConnectionEventManager: i
        }
    },
    1790: function(e, t, n) {
        "use strict";
        var i = !1;
        e.exports = {
            register: function() {
                if (!i && (i = !0, "undefined" != typeof window.navigator && "mediaSession" in window.navigator)) {
                    var e = window.navigator.mediaSession;
                    e.setActionHandler("nexttrack", function() {
                        return n(62).playNext({
                            userInitiated: !0
                        })
                    }), e.setActionHandler("previoustrack", function() {
                        return n(62).playPrev({
                            userInitiated: !0
                        })
                    })
                }
            }
        }
    },
    1791: function(e, t, n) {
        "use strict";
        var i = n(1352).ChromecastPlayerController,
            r = n(165).Player,
            o = n(165).renditions,
            a = n(1354).StreamUrlRetriever,
            s = "soundcloud";
        e.exports = {
            buildPlayer: function(e) {
                var t = e.dataPromise,
                    l = e.audioPerformanceReporter,
                    u = e.errorReporter,
                    c = n(55).defer();
                return t.then(function(e) {
                    var t = e.duration,
                        d = e.trackUrn;
                    return "pending" === c.state() ? new r({
                        controllers: [new i({
                            castContext: n(180).getInstance().then(function(e) {
                                return e.getContext()
                            })
                        })],
                        duration: t,
                        mediaSessionEnabled: !0,
                        streamUrlRetriever: new a({
                            urlsWithRenditions: [{
                                url: d,
                                rendition: o.maestroChromecast
                            }]
                        }),
                        audioPerformanceReporter: function(e) {
                            return l(n(3).assign({
                                trackUrn: d,
                                entityType: s
                            }, e))
                        },
                        errorReporter: function(e) {
                            return u(n(3).assign({
                                trackUrn: d,
                                entityType: s
                            }, e))
                        },
                        preloadingEnabled: !0,
                        logger: n(334)
                    }) : void 0
                }).then(c.resolve, c.reject), c
            }
        }
    },
    1792: function(e, t, n) {
        "use strict";
        var i = n(354).HTML5PlayerController,
            r = n(165).Player,
            o = n(165).renditions,
            a = n(1354).StreamUrlRetriever,
            s = "ad_audio";
        e.exports = {
            buildPlayer: function(e) {
                var t = e.url,
                    l = e.audioPerformanceReporter,
                    u = e.errorReporter,
                    c = e.audioReporter,
                    d = e.checkpointInterval;
                if (!t) throw new Error("ExternalAudioAd: requires url");
                return new r({
                    controllers: [new i(n(492).general)],
                    streamUrlRetriever: new a({
                        urlsWithRenditions: [{
                            url: t,
                            rendition: o.httpMp3
                        }]
                    }),
                    streamUrlsExpire: !1,
                    fadeOnPauseAndPlay: !1,
                    audioPerformanceReporter: function(e) {
                        return l(n(3).assign({
                            entityType: s
                        }, e))
                    },
                    errorReporter: function(e) {
                        return u(n(3).assign({
                            entityType: s
                        }, e))
                    },
                    audioReporter: c,
                    audioCheckpointInterval: d,
                    logger: n(334)
                })
            }
        }
    },
    1793: function(e, t, n) {
        "use strict";

        function i(e) {
            return "SNIP" === e
        }

        function r() {
            return h() === n(212).HQ
        }

        function o() {
            var e = h();
            switch (e) {
                case n(212).HQ:
                    return "high";
                case n(212).SQ:
                    return "standard";
                default:
                    return void 0
            }
        }

        function a(e) {
            return {
                snippet: i(e),
                qualities: r() ? [c.HQ, c.SQ] : [c.SQ]
            }
        }
        var s = n(354).HTML5PlayerController,
            l = n(1353).HLSMSEPlayerController,
            u = n(165).Player,
            c = n(165).Quality,
            d = n(562).stringLoader,
            p = n(1689).StreamUrlRetriever,
            h = n(324).getCurrentQuality,
            f = n(324).STREAMING_QUALITY_SETTING,
            g = "soundcloud";
        e.exports = {
            buildPlayer: function(e) {
                var t = e.dataPromise,
                    i = e.audioPerformanceReporter,
                    r = e.errorReporter,
                    c = e.audioReporter,
                    h = e.checkpointInterval,
                    m = n(55).defer();
                return t.then(function(e) {
                    var t = e.secretToken,
                        v = e.duration,
                        _ = e.getPolicy,
                        y = e.onPolicyChange,
                        b = e.mediaPayload,
                        w = e.trackUrn,
                        x = e.trackId;
                    if ("pending" === m.state()) {
                        var k = n(61).getAuthToken(),
                            S = new p({
                                loader: d,
                                clientId: n(54).get("client_id"),
                                trackId: x,
                                secretToken: t,
                                requestAuthorization: k ? "OAuth " + k : null,
                                mediaPayload: b
                            }),
                            C = new u({
                                controllers: [new l(n(492).fading), new s(n(492).fading)],
                                duration: v,
                                streamUrlRetriever: S,
                                getURLOpts: a(_()),
                                streamUrlsExpire: !0,
                                mediaSessionEnabled: !0,
                                audioPerformanceReporter: function(e) {
                                    return i(n(3).assign({
                                        trackUrn: w,
                                        entityType: g,
                                        audioQualityMode: o()
                                    }, e))
                                },
                                errorReporter: function(e) {
                                    return r(n(3).assign({
                                        trackUrn: w,
                                        entityType: g,
                                        audioQualityMode: o()
                                    }, e))
                                },
                                audioReporter: function(e) {
                                    return c(n(3).assign({
                                        audioQualityMode: o()
                                    }, e))
                                },
                                audioCheckpointInterval: h,
                                fadeOnPauseAndPlay: !0,
                                fadeOnSeek: !0,
                                pausedMaxBufferLength: 15e3,
                                playingMaxBufferLength: 3e5,
                                logger: n(334)
                            });
                        return C.isDead() || ! function() {
                            var e = function() {
                                    t()
                                },
                                t = function() {
                                    var e = n(61).getAuthToken();
                                    S.updateRequestAuthorization(e ? "OAuth " + e : null)
                                },
                                i = function() {
                                    t(), C.reload(a(_()))
                                },
                                r = function() {
                                    C.reload(a(_()))
                                };
                            C.onChange.subscribe(function(t) {
                                var o = t.dead;
                                o && (n(56).off(null, e), y.remove(i), n(121).off(null, r))
                            }), n(56).on("connect:login connect:logout", e), y.onSignal(i), n(121).on(f, r)
                        }(), C
                    }
                }).then(m.resolve, m.reject), m
            }
        }
    },
    1794: function(e, t) {
        "use strict";

        function n() {
            function e() {
                t.forEach(function(e) {
                    n ? e.enablePreloading() : e.disablePreloading()
                })
            }
            var t = [],
                n = !1;
            return {
                registerPlayer: function(n) {
                    n.onChange.subscribe(function(e) {
                        var i = e.dead;
                        i && t.splice(t.indexOf(n), 1)
                    }), t.push(n), e()
                },
                enablePreloading: function() {
                    n = !0, e()
                },
                disablePreloading: function() {
                    n = !1, e()
                }
            }
        }
        e.exports = {
            buildPreloadingManager: n
        }
    },
    1795: function(e, t, n) {
        "use strict";
        e.exports = {
            payment: {
                handleCallback: function(e) {
                    return n(98).handleCallback(e)
                }
            }
        }
    },
    1796: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = t.x,
                i = t.y,
                r = t.w,
                o = t.h,
                a = t.radius,
                s = t.holeSize,
                u = t.arcAmount,
                c = t.bgAlpha,
                d = t.scrollTop,
                p = t.scrollLeft,
                h = e.canvas,
                f = h.width,
                m = h.height,
                v = r / 2,
                _ = o / 2;
            e.save(), e.clearRect(0, 0, f, m), e.save(), e.globalAlpha = c * g, e.fillStyle = "#000", e.fillRect(0, 0, f, m), e.restore(), e.translate(-p, -d), s && (e.save(), e.beginPath(), l(e, n, i, r, o, a, s), e.globalCompositeOperation = "destination-out", e.globalAlpha = 1, e.fill(), e.restore()), u && s && (e.save(), e.beginPath(), e.translate(n + v, i + _), e.moveTo(0, 0), e.arc(0, 0, r + o, k, S * u + k, !1), e.restore(), e.clip(), e.save(), e.beginPath(), l(e, n, i, r, o, a, s), e.globalCompositeOperation = "source-over", e.lineWidth = 2, e.strokeStyle = y, e.stroke(), e.restore()), e.restore()
        }

        function r(e) {
            var t = e[0],
                n = e.offset(),
                i = n.top,
                r = n.left,
                o = t.offsetHeight,
                a = t.offsetWidth;
            return {
                x: r,
                y: i,
                w: a,
                h: o
            }
        }

        function o(e, t, i) {
            return function(r) {
                return i((n(119).clamp(r, e, t) - e) / (t - e))
            }
        }

        function a(e) {
            return (1 - Math.cos(e * Math.PI)) / 2
        }

        function s(e, t, n) {
            var i = e / S * Math.asin(1),
                r = S / e;
            return function(e) {
                return Math.pow(2, -n * e) * Math.sin((e * t - i) * r) + 1
            }
        }

        function l(e, t, n, i, r, o, a) {
            f >= o ? u(e, t + i / 2, n + r / 2, o * a) : c(e, t, n, i, r, a)
        }

        function u(e, t, n, i) {
            e.arc(t, n, i, 0, S, !1)
        }

        function c(e, t, n, i, r, o) {
            var a = m,
                s = v,
                l = _,
                u = !1,
                c = i / 2,
                d = r / 2,
                p = -c - s + a,
                h = -p,
                f = -d - l + a,
                g = -f;
            e.save(), e.translate(t + c, n + d), e.scale(o, o), e.moveTo(p, f - a), e.arc(h, f, a, k, b, u), e.arc(h, g, a, b, w, u), e.arc(p, g, a, w, x, u), e.arc(p, f, a, x, k, u), e.restore()
        }
        var d = 1e3,
            p = 300,
            h = 10,
            f = 40,
            g = .5,
            m = 25,
            v = 18,
            _ = 15,
            y = "#ff5500",
            b = 0,
            w = .5 * Math.PI,
            x = Math.PI,
            k = 1.5 * Math.PI,
            S = 2 * Math.PI,
            C = window.document,
            T = o(0, .5, a),
            E = o(.2, .8, s(400, 1e3, 10)),
            A = o(.66, 1, a);
        e.exports = n(390).extend({
            className: "calloutBackground g-opacity-transition-300",
            css: n(3413),
            defaults: {
                $targetEl: null,
                delay: 0,
                fixed: !1
            },
            states: {
                hidden: "m-hidden"
            },
            recalcOnWindowResizeX: !0,
            recalcOnWindowResizeY: !0,
            fullScreen: !0,
            _animId: null,
            _animState: null,
            setup: function() {
                this.getTargetDimensions = n(3).memoize(this.getTargetDimensions)
            },
            dispose: function() {
                this._animId && window.cancelAnimationFrame(this._animId)
            },
            renderDecorate: function() {
                var e = this;
                window.setTimeout(function() {
                    e.disposed || (n(390).prototype.renderDecorate.call(e), e.options.fixed || e.listenTo(n(94), "scroll:throttled", e.requestFrame))
                }, this.options.delay)
            },
            teardown: function() {
                this.stopListening(n(94), "scroll:throttled", this.requestFrame)
            },
            onCanvasResize: function() {
                this.getTargetDimensions.cache = {}, this.requestFrame()
            },
            getTVal: function() {
                var e = Date.now();
                return this.getTVal = function() {
                    return Math.min(1, (Date.now() - e) / d)
                }, 0
            },
            getTargetDimensions: function() {
                var e = r(this.options.$targetEl),
                    t = e.x,
                    n = e.y,
                    i = e.w,
                    o = e.h,
                    a = (Math.sqrt(i * i + o * o) + h) / 2;
                return {
                    x: t,
                    y: n,
                    w: i,
                    h: o,
                    radius: a
                }
            },
            animateOut: function() {
                return this.toggleState("hidden", !0), n(55).delay(p)
            },
            getNextAnimationState: function(e, t) {
                var n = this.getTargetDimensions(),
                    i = n.x,
                    r = n.y,
                    o = n.w,
                    a = n.h,
                    s = n.radius,
                    l = E(t),
                    u = A(t),
                    c = T(t),
                    d = C.body.scrollLeft || C.documentElement.scrollLeft,
                    p = C.body.scrollTop || C.documentElement.scrollTop,
                    h = e ? e.scrollTop : p,
                    f = e ? e.scrollLeft : d,
                    g = p - h,
                    m = d - f,
                    v = h + g / 8,
                    _ = f + m / 8,
                    y = t - (e ? e.t : 0);
                return {
                    x: i,
                    y: r,
                    w: o,
                    h: a,
                    t: t,
                    radius: s,
                    holeSize: l,
                    arcAmount: u,
                    bgAlpha: c,
                    scrollTop: v,
                    scrollLeft: _,
                    scrollDeltaLeft: m,
                    scrollDeltaTop: g,
                    deltaT: y
                }
            },
            requestFrame: function() {
                var e = this;
                this._animId || (this._animId = window.requestAnimationFrame(function() {
                    e._animId = null, e.draw()
                }))
            },
            draw: function() {
                var e = this._animState = this.getNextAnimationState(this._animState, this.getTVal());
                i(this.context, e), this.queueFrame(e), e.t >= 1 && e.deltaT > 0 && this.trigger("animationDone")
            },
            queueFrame: function(e) {
                (!e || e.t < 1 || Math.abs(e.scrollDeltaTop) > 1 || Math.abs(e.scrollDeltaLeft) > 1) && this.requestFrame()
            }
        })
    },
    1797: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                this.getTargetDimensions.cache = {}, a.call(this)
            }

            function r() {
                s.call(this)
            }

            function o() {
                this.dismiss()
            }

            function a() {
                var e = this.getElement("bubble");
                e.length && e.position({
                    my: "left-50 bottom-8",
                    at: "top center",
                    of: this.options.$targetEl,
                    offset: "0 -45px"
                })
            }

            function s() {
                this._renderRequested && (this._hasRendered ? l.call(this, p) === !1 && this.dismiss() : l.call(this, d) && this.render())
            }

            function l() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0],
                    t = this.getTargetDimensions(),
                    n = t.x,
                    i = t.y,
                    r = t.h;
                if (0 === n && 0 === i) return null;
                var o = h.body.scrollTop || h.documentElement.scrollTop,
                    a = o + window.innerHeight;
                return i > o - e && a + e > i + r
            }
            var u = 500,
                c = 300,
                d = -100,
                p = 50,
                h = window.document,
                f = t(h);
            e.exports = n(53).extend({
                className: "callout g-z-index-callout",
                css: n(3414),
                template: n(3007),
                defaults: {
                    title: null,
                    body: null,
                    $targetEl: null,
                    delay: 0,
                    fixed: !1
                },
                element2selector: {
                    bubble: ".callout__bubble"
                },
                events: {
                    "click .callout__button button": o,
                    "click .calloutBackground": o
                },
                states: {
                    active: "m-active",
                    hidden: "m-hidden"
                },
                _hasRendered: !1,
                _renderRequested: !1,
                setup: function(e) {
                    var t = e.fixed;
                    this.getTargetDimensions = n(3).memoize(this.getTargetDimensions), this.close = n(3).once(this.close), this.dismiss = n(3).once(this.dismiss), this.onDocumentKeydown = this.onDocumentKeydown.bind(this), this.listenTo(n(94), "resize:debounced", i),
                        t ? this.$el.css("position", "fixed") : this.listenTo(n(94), "scroll:debounced", r)
                },
                dispose: function() {
                    this.stopListening(n(94)), this.trigger("closed")
                },
                hasData: function() {
                    return this._renderRequested = !0, this.getTargetDimensions.cache = {}, !!l.call(this, this.options.fixed ? 0 : d)
                },
                renderDecorate: function() {
                    var e = this;
                    this._hasRendered = !0, f.on("keydown", this.onDocumentKeydown), this.toggleState("hidden", !0).toggleState("active", !0), this.getTargetDimensions.cache = {}, a.call(this), this.subviews.background.once("animationDone", function() {
                        e.addTimeout(function() {
                            e.toggleState("hidden", !1)
                        }, u)
                    })
                },
                teardown: function() {
                    f.off("keydown", this.onDocumentKeydown)
                },
                getTargetDimensions: function() {
                    var e = this.options.$targetEl[0],
                        t = this.options.$targetEl.offset(),
                        n = t.top,
                        i = t.left,
                        r = e.offsetHeight,
                        o = e.offsetWidth;
                    return {
                        x: i,
                        y: n,
                        w: o,
                        h: r
                    }
                },
                close: function() {
                    var e = this;
                    return this.stopListening(n(94)), this.subviews.background ? (this.toggleState("hidden", !0), n(55).all([this.subviews.background.animateOut(), n(55).delay(c)]).then(function() {
                        e._dispose()
                    })) : (this._dispose(), n(55).resolve())
                },
                dismiss: function() {
                    this.trigger("dismissed"), this.close()
                },
                onDocumentKeydown: function(e) {
                    e.which === n(108).ESC && this.dismiss()
                }
            })
        }).call(t, n(1))
    },
    1798: function(e, t, n) {
        "use strict";

        function i(e) {
            function t() {
                p.length > 0 && e.isRemoteQueueEmpty() && (n(62).setRepeatMode(n(160).none), c())
            }

            function i(t) {
                var i = r(),
                    l = i.queue;
                if (a(l, t.queue)) {
                    p.forEach(function(e, n) {
                        e.associateCastId(t.queue[n].id)
                    });
                    var u = p.at(t.currentIndex);
                    u.sound.createPlayer(), n(62).setCurrentItem(u, {
                        pause: e.isPaused()
                    })
                } else if (!o(l, t.queue)) {
                    var c = t.queue.map(function(e, t) {
                        var i = e.urn,
                            r = e.id,
                            o = n(88).toComponents(i),
                            a = new(n(67))({
                                id: o.id
                            }),
                            l = a.getQueueMetadataAt(0),
                            u = l.sourceInfo,
                            c = l.queryPosition,
                            d = l.originalModel,
                            p = new(n(218))({}, {
                                sound: a,
                                sourceInfo: u,
                                queryPosition: c,
                                originalModel: d,
                                index: t,
                                castId: r,
                                restoreUrl: null,
                                explicit: !1,
                                layoutInfo: s()
                            });
                        return p.release(), a.release(), p
                    });
                    n(62).replaceQueue(c, t.currentIndex, {
                        pause: e.isPaused()
                    })
                }
            }

            function c() {
                var t = r(),
                    i = t.queue,
                    a = t.currentIndex,
                    s = n(285).sliceAround(i, a, u, l),
                    c = e.getLastRemoteQueue(),
                    d = n(62).getCurrentSound(),
                    p = !c || s.position !== c.currentIndex || !o(s.items, c.queue);
                a > -1 && p && e.loadQueue(s.items, s.position, n(61).getAuthToken(), d.isPlaying(), d.currentTime())
            }

            function d(t) {
                e.setRepeatMode(t)
            }
            var p = n(62).getQueue();
            e.on("queue:update", i), e.once("queue:ready", t), p.on("add remove reset", c), n(62).on("change:currentSound", c), n(62).on("change:repeatMode", d), n(56).once("googleCast:end", function() {
                p.forEach(function(e, t) {
                    e.associateCastId(null)
                }), e.off("queue:update", i), e.off("queue:ready", t), p.off("add remove reset", c), n(62).off("change:currentSound", c), n(62).off("change:repeatMode", d)
            })
        }

        function r() {
            return {
                currentIndex: n(62).getQueueState().currentIndex,
                queue: n(62).getQueue().map(function(e) {
                    var t = e.castId,
                        n = e.sound,
                        i = n.getUrn();
                    return t ? {
                        id: t,
                        urn: i
                    } : {
                        urn: i
                    }
                })
            }
        }

        function o(e, t) {
            return n(285).equal(e, t, function(e, t) {
                return e.id && e.id === t.id
            })
        }

        function a(e, t) {
            return n(285).equal(e, t, function(e, t) {
                return e.urn === t.urn
            })
        }

        function s() {
            var e = n(54).get("router").getLayoutInfo(),
                t = e.args,
                i = e.layoutName,
                r = window.location,
                o = r.pathname,
                a = r.search,
                s = r.hash,
                l = o.slice(1) + a + s;
            return {
                args: t,
                layoutName: i,
                url: l
            }
        }
        var l = 100,
            u = 5;
        e.exports = {
            initialize: function() {
                n(180).getInstance().then(function(e) {
                    return n(56).on("googleCast:start", i), {
                        dispose: function() {
                            n(56).off("googleCast:start", i)
                        }
                    }
                })
            }
        }
    },
    1799: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e.getCurrentSession();
            return t && t.getMediaSession() || null
        }
        var r = n(22).Events,
            o = n(1395).log,
            a = "BCFFBE3E",
            s = "9A5289F5",
            l = "urn:x-cast:com.soundcloud.chromecast",
            u = "UPDATE_QUEUE",
            c = 300,
            d = "disconnected",
            p = "connected";
        e.exports = {
            fromSDK: function(e, t) {
                function h(e) {
                    e.revision !== w && (w = e.revision, x = {
                        queue: e.queue,
                        currentIndex: e.current_index
                    }, T ? o("silent queue update", x, w) : (o("trigger queue update", x, w), E.trigger("queue:update", x)), C = !1, T && (o("sending pending load", T), m(T), T = null))
                }

                function f(e) {
                    k !== e && (k = e, w = null, x = null, S = !1, C = !1, T = null, e === d ? (o("session change: end"), n(56).trigger("googleCast:end"), n(56).trigger("googleCast:audioRestored")) : e === p && (o("session change: start"), n(56).trigger("googleCast:start", E), n(56).trigger("googleCast:audioHijack")))
                }

                function g(e) {
                    S !== e && (S = e, S ? (o("cast is available"), n(157).updateRemoteVolumeAndMuted({
                        volume: y.volumeLevel,
                        muted: y.isMuted
                    }), n(56).trigger("googleCast:available")) : (o("cast is unavailable"), n(56).trigger("googleCast:unavailable")))
                }

                function m(t) {
                    var n = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1],
                        i = arguments.length <= 2 || void 0 === arguments[2] ? 0 : arguments[2],
                        r = _.getCurrentSession();
                    if (!r) return void o("aborting queue load – no active session");
                    if (t.revision = w, C = !0, y.isMediaLoaded) o("media session present - sending queue update"), r.sendMessage(l, {
                        type: u,
                        payload: t
                    });
                    else {
                        var a = new e.cast.media.MediaInfo(t.queue[t.current_index].urn, "audio/mpeg"),
                            s = new e.cast.media.LoadRequest(a);
                        s.autoplay = n, s.currentTime = i / 1e3, s.customData = t, r.loadMedia(s)
                    }
                }
                var v = n(54).get("rollouts").get("internal_qa") ? a : s,
                    _ = t.framework.CastContext.getInstance(),
                    y = new t.framework.RemotePlayer,
                    b = new t.framework.RemotePlayerController(y),
                    w = null,
                    x = null,
                    k = d,
                    S = !1,
                    C = !1,
                    T = null,
                    E = n(3).assign({}, r, {
                        loadQueue: function(e, t, n, i, r) {
                            var a = {
                                revision: null,
                                credentials: n ? {
                                    authorization: "OAuth " + n
                                } : null,
                                queue: e,
                                current_index: t
                            };
                            C ? (o("enqueuing load request", a), T = a) : (o("sending load request", a), m(a, i, r), T = null)
                        },
                        getContext: function() {
                            return _
                        },
                        getSafeDeviceName: function() {
                            var e = _.getCurrentSession(),
                                t = e ? e.getCastDevice() : null;
                            return t ? t.friendlyName : null
                        },
                        getLastRemoteQueue: function() {
                            return x
                        },
                        isRemoteQueueEmpty: function() {
                            return !x || 0 === x.queue.length
                        },
                        isPaused: function() {
                            return y.isPaused
                        },
                        isConnected: function() {
                            return y.isConnected
                        },
                        isAvailable: function() {
                            return S
                        },
                        getRepeatMode: function() {
                            var t = i(_);
                            if (!t) return null;
                            switch (t.repeatMode) {
                                case e.cast.media.RepeatMode.OFF:
                                    return n(160).none;
                                case e.cast.media.RepeatMode.ALL:
                                    return n(160).all;
                                case e.cast.media.RepeatMode.SINGLE:
                                    return n(160).one;
                                case e.cast.media.RepeatMode.ALL_AND_SHUFFLE:
                                    return n(160).all;
                                default:
                                    return null
                            }
                        },
                        setRepeatMode: function(t) {
                            var r = i(_);
                            r && r.queueSetRepeatMode(t === n(160).all ? e.cast.media.RepeatMode.ALL : t === n(160).one ? e.cast.media.RepeatMode.SINGLE : e.cast.media.RepeatMode.OFF)
                        },
                        getVolume: function() {
                            return y.volumeLevel
                        },
                        isMuted: function() {
                            return y.isMuted
                        },
                        setVolume: n(3).throttle(function(e) {
                            var t = _.getCurrentSession();
                            t && e !== E.getVolume() && (o("sending volume: ", e), t.setVolume(e))
                        }, c),
                        setMuted: n(3).debounce(function(e) {
                            var t = _.getCurrentSession();
                            t && e !== E.isMuted() && (o("sending mute: ", e), t.setMute(e))
                        }, c)
                    });
                return t.framework.CastContext.getInstance().setOptions({
                    receiverApplicationId: v,
                    autoJoinPolicy: e.cast.AutoJoinPolicy.ORIGIN_SCOPED
                }), _.addEventListener(t.framework.CastContextEventType.SESSION_STATE_CHANGED, function(e) {
                    var n = (e.session, e.sessionState);
                    switch (n) {
                        case t.framework.SessionState.SESSION_RESUMED:
                        case t.framework.SessionState.SESSION_STARTED:
                            f(p), window.setTimeout(function() {
                                E.trigger("queue:ready")
                            }, 1e3);
                            break;
                        case t.framework.SessionState.SESSION_ENDED:
                            f(d)
                    }
                }), _.addEventListener(t.framework.CastContextEventType.CAST_STATE_CHANGED, function(e) {
                    var n = e.castState;
                    switch (n) {
                        case t.framework.CastState.NO_DEVICES_AVAILABLE:
                            g(!1);
                            break;
                        case t.framework.CastState.NOT_CONNECTED:
                        case t.framework.CastState.CONNECTING:
                        case t.framework.CastState.CONNECTED:
                            g(!0)
                    }
                }), b.addEventListener(t.framework.RemotePlayerEventType.ANY_CHANGE, function(e) {
                    var t = (e.type, e.field),
                        i = e.value,
                        r = y.mediaInfo,
                        a = r && r.customData,
                        s = a && a.queue_status;
                    s && (f(p), h(s)), k === p && ("volumeLevel" === t && (o("Remote volume: ", i), n(157).updateRemoteVolumeAndMuted({
                        volume: i
                    })), "isMuted" === t && (o("Remote isMuted: ", i), n(157).updateRemoteVolumeAndMuted({
                        muted: i
                    })))
                }), E.listenTo(n(157), "change:remote", function(e) {
                    var t = e.volume,
                        n = e.muted;
                    E.setVolume(t), E.setMuted(n)
                }), E
            }
        }
    },
    1800: function(e, t, n) {
        "use strict";
        var i = /\s+/g,
            r = /^\d{6,18}$/;
        e.exports = n(96).extend({
            message: n(50).t("This is an invalid barcode."),
            check: function(e, t) {
                e = e.replace(i, "");
                var n = !e.length || r.test(e);
                t(n)
            }
        })
    },
    1801: function(e, t, n) {
        "use strict";

        function i(e) {
            return null == e
        }
        var r = e.exports = n(181).extend({
            fields: null,
            nullable: !0,
            validate: function(e) {
                var t = n(55).defer(),
                    r = this.fields.map(e.get, e);
                return r.every(i) ? this.result(t, this.nullable) : this.check(r, this.fields, this.result.bind(this, t)), t
            },
            affectsField: function(e) {
                return this.fields.indexOf(e) > -1
            },
            getOwnerField: function() {
                return this.fields[0]
            }
        });
        n(494).applyTo(r.prototype)
    },
    1802: function(e, t, n) {
        "use strict";
        e.exports = n(96).extend({
            nullable: !1,
            message: n(50).t("Enter at least one territory."),
            check: function(e, t) {
                t(e && e.length > 0)
            }
        })
    },
    1803: function(e, t, n) {
        "use strict";
        var i = /\W+/g,
            r = /^\w{5}\d{7}$/;
        e.exports = n(96).extend({
            message: n(50).t("This is an invalid ISRC."),
            check: function(e, t) {
                e = e.replace(i, "");
                var n = !e.length || r.test(e);
                t(n)
            }
        })
    },
    1804: function(e, t, n) {
        "use strict";
        var i = /\W+/g,
            r = /^\w\d{10}$/;
        e.exports = n(96).extend({
            message: n(50).t("This is an invalid ISWC."),
            check: function(e, t) {
                e = e.replace(i, "");
                var n = !e.length || r.test(e);
                t(n)
            }
        })
    },
    1805: function(e, t, n) {
        "use strict";
        var i = /\s+/g,
            r = /^\d{12,13}$/;
        e.exports = n(96).extend({
            message: n(50).t("Barcode must consist of 12-13 digits."),
            check: function(e, t) {
                var n = e.replace(i, "");
                t(!n.length || r.test(n))
            }
        })
    },
    1806: function(e, t, n) {
        "use strict";
        e.exports = n(96).extend({
            constraints: [],
            check: function(e, t) {
                var i = this,
                    r = this.constraints.map(function(e) {
                        return n(494).hydrateConstraintDefinition.call(i, e)
                    }).map(function(t) {
                        return t.validate(i._form, e)
                    });
                n(55).settled(r).then(function() {
                    for (var e = arguments.length, i = Array(e), r = 0; e > r; r++) i[r] = arguments[r];
                    var o = n(3).any(i.map(function(e) {
                        return e[0].success
                    }));
                    t(o)
                })
            }
        })
    },
    1808: function(e, t, n) {
        "use strict";
        e.exports = n(1801).extend({
            check: function(e, t, n) {
                n(!(e[0] && e[1]) || e[0] < e[1])
            }
        })
    },
    1811: function(e, t, n) {
        "use strict";
        var i = [{
            rule: /^(?![_-])/,
            errorMessage: n(50).t("Profile URLs must not start with an underscore or hyphen.")
        }, {
            rule: /^(?!.*[-_]$)/,
            errorMessage: n(50).t("Profile URLs must not end with an underscore or hyphen.")
        }, {
            rule: /^(?!.*[\-_]{2,})/,
            errorMessage: n(50).t("Profile URLs must not have two consecutive underscores or hyphens.")
        }, {
            rule: /^[a-z0-9_-]*$/,
            errorMessage: n(50).t("Use only numbers, letters, underscores, or hyphens.")
        }, {
            rule: /^.{3,25}$/,
            errorMessage: n(50).t("Profile URLs must be between 3 and 25 characters.")
        }, {
            rule: new RegExp("^(?!(" + ["101", "accounts", "activate", "activity", "admin", "android", "announcements", "api", "apps", "artworks", "assets", "comments", "community-guidelines", "connect", "customize", "creativecommons", "creator", "creators", "dashboard", "dropbox", "emails", "errors", "events", "explore", "facebook", "faqs", "favorites", "feedbacks", "feeds", "for", "forums", "genres", "gifts", "go", "google_plus", "go-terms-of-use", "groups", "guestlist", "help", "hot", "invite", "imprint", "iphone", "ipad", "ipod", "jobs", "latest", "law-enforcement-guidelines", "login", "logout", "mac", "manage", "me", "messages", "mobile", "music", "newsletters", "notifications", "oauth", "oauth2", "orders", "oembed", "pages", "partners", "people", "player", "playlists", "posts", "press", "pro", "press_release", "revshare", "search", "session", "sets", "settings", "signup", "sitemap", "sound", "sounds", "stations", "stats", "stream", "student", "subscription", "terms-of-use", "terms-of-use-pro", "tour", "tracks", "track-manager", "turn_off_notifications", "tags", "upload", "users", "videos", "waveform", "welcome", "widgets", "you"].join("|") + ")$)"),
            errorMessage: n(50).t("This permalink is reserved. Enter another one.")
        }];
        e.exports = n(96).extend({
            initialize: function() {
                n(96).prototype.initialize.apply(this, arguments), this.constraints = i
            },
            checkExisting: !0,
            check: function(e, t) {
                var i = this;
                if ("" === e) return void t(!0);
                var r = n(3).find(this.constraints, function(t) {
                    return t.rule.lastIndex = 0, !t.rule.test(e)
                });
                r || !this.checkExisting ? (this.message = r && r.errorMessage, t(!r)) : this.resolvePermalink(e).done(function() {
                    i.message = n(50).t("This profile URL is already in use. Try a different one."), t(!1)
                }).fail(function() {
                    t(!0)
                })
            },
            resolvePermalink: function(e) {
                var t = this.getResource.call(this._form);
                return t && e === t.get("permalink") ? n(55).reject() : n(63).resolve(e)
            }
        })
    },
    1812: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = n(54).get("me").hasOnlyOneRightsholderLink(),
                i = n(3).has(e, "rightsholder_urn") || !t;
            return i ? Boolean(e.territory && e.rightsholder_urn) : Boolean(e.territory)
        }
        e.exports = n(96).extend({
            nullable: !1,
            message: n(50).t("You need to select the correct rightsholder for each territory you want to earn money in."),
            check: function(e, t) {
                t(n(3).every(e || [], i))
            }
        })
    },
    1813: function(e, t, n) {
        "use strict";
        e.exports = n(181).extend({
            _propagate: !0,
            data: null,
            initialize: function(e) {
                this.data = e || {}
            },
            stopPropagation: function() {
                this._propagate = !1
            },
            isPropagationStopped: function() {
                return !this._propagate
            }
        })
    },
    1814: function(e, t, n) {
        "use strict";

        function i() {
            this.actions = n(3).reduce(this.actions, function(e, t, i) {
                return "default" === i ? e["default"] = t : n(3).isFunction(t) ? e[i] = {
                    fn: t,
                    state: "enabled"
                } : e[i] = n(3).assign({
                    state: "enabled"
                }, t), e
            }, {})
        }
        e.exports = new(n(21))({
            before: {
                initialize: function() {
                    i.call(this)
                }
            },
            actions: null,
            performAction: function(e) {
                var t = this,
                    n = this.actions[e],
                    i = void 0;
                if ("default" === e) {
                    if (!n) return;
                    "string" == typeof n && (e = n, n = this.actions[e])
                }
                return "enabled" === n.state ? (i = n.fn.apply(this, Array.prototype.slice.call(arguments, 1)), i && "function" == typeof i.state && ("pending" === i.state() && (this.setActionState(e, "pending"), i.always(function() {
                    "pending" === t.getActionState(e) && t.setActionState(e, "enabled")
                })), i.then(function(n) {
                    t.trigger("complete:action:" + e, n)
                }, function(n) {
                    t.trigger("fail:action:" + e, n)
                })), i) : void 0
            },
            getActionState: function(e) {
                var t = this.actions[e];
                return t.state
            },
            setActionState: function(e, t) {
                var i = this.actions[e];
                i.state !== t && (this.trigger("change:action:" + e, t, i.state), i.state = t, this.buttons && n(3).each(this.buttons, function(n, i) {
                    n.action === e && this.setButtonConfig(i, {
                        state: t
                    })
                }, this))
            }
        })
    },
    1815: function(e, t, n) {
        "use strict";

        function i() {
            var e = this.buttons;
            this.buttons = {}, n(3).each(e, function(e, t) {
                this.buttons[t] = n(3).clone(e);
                var i = r.call(this, t);
                this.setButtonConfig(t, {
                    state: i && i.state || "enabled"
                })
            }, this)
        }

        function r(e) {
            var t = this.buttons[e];
            return n(3).find(this.actions, function(e, n) {
                return n === t.action
            })
        }
        e.exports = new(n(21))({
            before: {
                initialize: function() {
                    i.call(this)
                }
            },
            buttons: null,
            setButtonConfig: function(e, t) {
                var i, r = this.buttons[e],
                    o = {};
                n(3).each(t, function(e, t) {
                    r[t] !== e && (i = !0, o[t] = r[t] = e)
                }), i && this.trigger("change:button:" + e, o)
            }
        })
    },
    1816: function(e, t, n) {
        "use strict";

        function i() {
            this.fields = n(3).reduce(this.fields, o, {}, this), this.set(n(3).assign(n(3).reduce(this.fields, s, {}, this), this.attributes), {
                silent: !0
            }), this.resetChanges()
        }

        function r(e) {
            return e && e.hold && e.release
        }

        function o(e, t, i) {
            return e[i] = n(3).defaults(n(3).reduce(t, a, {}, this), {
                isDirty: !1
            }), e
        }

        function a(e, t, n) {
            return "function" == typeof t && (t = t.call(this)), r(t) && this._submodels.push(t), e[n] = t, e
        }

        function s(e, t, n) {
            return e[n] = t.defaultValue, e
        }
        e.exports = new(n(21))({
            before: {
                initialize: function() {
                    this._submodels = this._submodels || [], i.call(this)
                }
            },
            fields: null,
            getFieldMetadata: function(e) {
                return this.fields[e] || {}
            },
            setFieldDatasource: function(e, t) {
                var n = this;
                [].concat(e).forEach(function(e) {
                    var i = n.getFieldMetadata(e);
                    t !== i.datasource && (i.datasource = t, n.trigger("datasourceChange:" + e, i))
                })
            },
            setFieldDisabled: function(e, t) {
                var n = this;
                e = [].concat(e);
                var i = e.reduce(function(e, i) {
                    var r = n.getFieldMetadata(i);
                    return t !== r.disabled ? (r.disabled = t, n.trigger("disabledChange:" + i, r), n.trigger("disabledChange", i, r), !0) : e
                }, !1);
                i && this.validate({
                    fields: e
                })
            },
            hasDefaultValue: function() {
                var e = this,
                    t = arguments[0] ? n(3).flatten(arguments) : Object.keys(this.fields);
                return !t.some(function(t) {
                    var n = e.fields[t];
                    return n && n.defaultValue !== e.get(t)
                })
            },
            isDirty: function() {
                var e = arguments[0] ? n(3).flatten(arguments) : Object.keys(this.fields);
                return e.some(function(e) {
                    return this[e] && this[e].isDirty
                }, this.fields)
            },
            markFieldsClean: function() {
                if (this.isDirty()) {
                    var e = arguments[0] ? n(3).flatten(arguments) : Object.keys(this.fields);
                    e.forEach(function(e) {
                        this[e] && (this[e].isDirty = !1)
                    }, this.fields), this.isDirty() || this.trigger("form:clean")
                }
            },
            markFieldsDirty: function(e) {
                var t = !this.isDirty();
                e = "string" == typeof e ? [e] : e, e && (e.forEach(function(e) {
                    this[e] && (this[e].isDirty = !0)
                }, this.fields), t && this.trigger("form:dirty"))
            },
            triggerApplyAll: function(e) {
                var t = this;
                e = "string" == typeof e ? [e] : e, e.forEach(function(e) {
                    return t.trigger("applyAll", e, t.get(e))
                })
            }
        })
    },
    1817: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return !e.constraints || n(3).any(e.constraints, n(3).partial(f, t))
        }

        function r() {
            var e = this,
                t = this.constraints = n(494).hydrateConstraintDefinitions.call(this, this.constraints);
            t.FORM = t.FORM || [], this.constraintConditions = this.constraintConditions || {}, n(3).each(this.fields, function(t, n) {
                var i = e.hasConstraintsOwnedBy(n);
                t.validity = i ? g : m, t.message = "", t.isValid = !0
            }), this.on("change", function() {
                o.call(e, Object.keys(e.changed))
            }), this.on("disabledChange", function(t) {
                o.call(e, [t])
            })
        }

        function o(e) {
            var t = this,
                i = Object.keys(e.reduce(c.bind(this), {})),
                r = [];
            n(3).each(this.constraintConditions, function(t, i) {
                n(3).intersection(t.fields, e).length && r.push(i)
            }), n(3).uniq(i.concat(r)).forEach(l, this), n(3).uniq(r).forEach(function(e) {
                t.trigger("syncRequired:" + e)
            })
        }

        function a(e) {
            var t = void 0,
                n = m;
            p.call(this, e).some(function(e) {
                switch (e.state) {
                    case v:
                        return t = e.getLastError(), n = e.state, !0;
                    case g:
                        return n = e.state, !0
                }
                return !1
            }), s.call(this, e, n, t)
        }

        function s(e, t, n) {
            var i = t === m,
                r = this.fields[e];
            r.validity = t, (r.isValid !== i || r.message !== n) && (r.message = n, r.isValid = i, this.trigger("validation:" + e, r))
        }

        function l(e) {
            var t = this;
            this.fields[e].validity = g, p.call(this, e).forEach(function(e) {
                e.reset(t), e.getOwnerField && (t.fields[e.getOwnerField()].validity = g)
            })
        }

        function u(e) {
            var t = this,
                n = !0,
                i = e.every(function(e) {
                    var i = t.fields[e];
                    return n = n && i.validity === m, i.validity !== g
                });
            return i ? n ? m : v : g
        }

        function c(e, t) {
            return d.call(this, t).forEach(function(i) {
                var r = n(3).result(i, "getOwnerField") || t,
                    o = e[r];
                o || (o = e[r] = []), -1 === o.indexOf(i) && o.push(i)
            }), e
        }

        function d(e) {
            return h.call(this, e, "affected")
        }

        function p(e) {
            return h.call(this, e, "owned")
        }

        function h(e, t) {
            var n = (this.constraints[e] || []).slice(),
                i = "owned" === t ? function(t) {
                    return t.getOwnerField() === e
                } : function(t) {
                    return t.affectsField(e)
                };
            return n.push.apply(n, this.constraints.FORM.filter(i)), n
        }

        function f(e, t) {
            return e === t || e.constructor === t || e.constructor === t.constructor
        }
        var g = n(182).UNKNOWN,
            m = n(182).VALID,
            v = n(182).INVALID;
        e.exports = new(n(21))(n(1816), {
            constraints: null,
            constraintConditions: null,
            before: {
                initialize: function() {
                    r.call(this)
                }
            },
            override: {
                _validate: function() {
                    return !0
                },
                isValid: function() {
                    return n(3).every(this.fields, function(e) {
                        return e.validity === m
                    })
                }
            },
            hasConstraintsOwnedBy: function(e) {
                return p.call(this, e).length > 0
            },
            resetFieldValidation: function(e) {
                var t = this.fields[e];
                l.call(this, e), t.validity = this.hasConstraintsOwnedBy(e) ? g : m, t.message = "", t.isValid = !0, this.trigger("validation:" + e, t)
            },
            resetAllFieldValidations: function() {
                var e = this;
                Object.keys(this.fields).forEach(function(t) {
                    return e.resetFieldValidation(t)
                })
            },
            validate: function() {
                var e = this,
                    t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    i = t.fields,
                    r = void 0 === i ? Object.keys(this.fields) : i,
                    o = n(55).defer(),
                    l = r.filter(function(t) {
                        return !!e.fields[t]
                    });
                switch (u.call(this, l)) {
                    case v:
                        o.resolve(!1);
                        break;
                    case m:
                        o.resolve(!0);
                        break;
                    case g:
                        var d = n(3).chain(l).filter(function(t) {
                            return e.fields[t].validity === g
                        }).reduce(c.bind(this), {}).map(function(t, i) {
                            var r = e.isConstraintEnabledForField.bind(e, i),
                                o = n(3).partition(t, r),
                                l = o[0],
                                u = o[1];
                            n(3).invoke(u, "disable");
                            var c = n(3).invoke(l, "validate", e, e.get(i));
                            return c.length ? n(55).settled(c).always(a.bind(e, i)) : void s.call(e, i, m)
                        }).compact().value();
                        n(55).all(d).always(function() {
                            o.resolve(u.call(e, l) === m)
                        })
                }
                return l.length === Object.keys(this.fields).length && o.done(function(t) {
                    e.trigger("validation", t)
                }), o
            },
            getValidFieldValues: function(e) {
                var t = this,
                    i = n(55).defer();
                return this.validate({
                    fields: e
                }).then(function(n) {
                    if (n) {
                        var r = e.map(function(e) {
                            return t.get(e)
                        });
                        i.resolve.apply(i, r)
                    } else i.reject()
                }), i
            },
            isConstraintEnabledForField: function(e, t) {
                var r = this,
                    o = this.fields[e];
                if (!o) return !1;
                var a = this.constraintConditions[e],
                    s = a ? a.fields.map(this.get, this) : [];
                return !o.disabled && n(3).chain(d.call(this, e)).filter(function(e) {
                    return f(e, t)
                }).any(function(e) {
                    return a && i(a, e) ? Boolean(a.check.apply(r, s)) : !0
                }).value()
            },
            getInvalidFields: function() {
                return n(3).compact(n(3).map(this.fields, function(e, t) {
                    return e.validity === v ? t : void 0
                }))
            }
        })
    },
    1818: function(e, t, n) {
        "use strict";

        function i(e) {
            return !!e && e !== o && "%" === e.charAt(0)
        }

        function r(e, t) {
            return t === o ? "\n" : i(t) ? e[a[t.charAt(1)]] : null
        }
        var o = "%n",
            a = {
                A: "street_address",
                S: "admin_area",
                C: "locality",
                D: "dependent_locality",
                Z: "postal_code",
                X: "sorting_code",
                N: "name",
                O: "organization"
            };
        e.exports = {
            formatBillingAddress: function(e) {
                var t = e.first_name,
                    n = e.last_name,
                    i = e.company_name,
                    r = e.vat_no,
                    o = e.address_first_line,
                    a = e.address_second_line,
                    s = e.city,
                    l = e.state_code,
                    u = e.zip_code,
                    c = e.country,
                    d = e.country_code,
                    p = [t, n].filter(Boolean).join(" "),
                    h = [i, r].filter(Boolean).join("VAT NO: "),
                    f = [o, a].filter(Boolean).join("\n");
                return this.format({
                    name: p,
                    organization: h,
                    street_address: f,
                    locality: s,
                    admin_area: l,
                    postal_code: u,
                    country: c
                }, d)
            },
            format: function(e, t) {
                var n = this.getFormatSubstrings(t),
                    a = n.reduce(function(t, a, s) {
                        if (a === o && (0 === t.length || t[t.length - 1] === o)) return t;
                        if (r(e, a)) t.push(a);
                        else {
                            var l = 0 !== s ? n[s - 1] : null,
                                u = s !== n.length - 1 ? n[s + 1] : null,
                                c = i(u) && !r(e, u),
                                d = i(l) && (0 === t.length || !i(t[t.length - 1]));
                            i(a) || c || d || t.push(a)
                        }
                        return t
                    }, []),
                    s = a.map(function(t) {
                        return r(e, t) || t
                    }).join("");
                return s && e.country && (s += "\n" + e.country), s
            },
            getFormatSubstrings: function(e) {
                n(1623).hasOwnProperty(e) || (e = "US");
                var t = n(1623)[e].fmt,
                    i = [],
                    r = "",
                    o = !1;
                for (var a in t) {
                    var s = t.charAt(a);
                    o ? (o = !1, i.push("%" + s)) : "%" === s ? (r.length > 0 && (i.push(r), r = ""), o = !0) : r += s
                }
                return i
            }
        }
    },
    1820: function(e, t) {
        "use strict";
        e.exports = {
            or: function(e, t) {
                return e | t
            }
        }
    },
    1821: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = void 0,
                i = e.name.replace(/\.[a-z0-9]{2,}$/, "");
            return t = i.replace(/_/g, " ").replace(/(\S)-(\S)/g, "$1 - $2"), t = n(440).capitalize(t).trim(), t || i.trim()
        }

        function r(e) {
            for (var t = e.length, n = new Array(t), i = 0; t > i; i++) n[i] = String.fromCharCode(e[i]);
            return window.btoa(n.join(""))
        }
        e.exports = {
            getTitleFromFile: i,
            getDataFromFile: function(e) {
                var t = n(55).defer();
                return n(37).read(e, {
                    onSuccess: function(o) {
                        var a = o.tags,
                            s = n(3).pick({
                                title: a.title || i(e),
                                publisherArtist: a.artist,
                                publisherAlbumTitle: a.album,
                                tags: n(3).compact([a.genre]),
                                artwork_data: a.picture ? "data:" + a.picture.format + ";base64," + r(a.picture.data) : void 0
                            }, n(3).identity);
                        t.resolve(s)
                    },
                    onError: function(n) {
                        t.resolve({
                            title: i(e)
                        })
                    }
                }), t
            }
        }
    },
    1822: function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (e.playlist) return {
                resourceType: "playlist",
                resourceId: e.playlist.resource_id,
                resourceUrn: "soundcloud:playlists:" + e.playlist.resource_id
            };
            if ("station" === t.sourceInfo.resourceType) return {
                resourceType: "station",
                resourceId: t.sourceInfo.resourceId,
                resourceUrn: t.sourceInfo.resourceId
            };
            switch (t.sourceInfo.type) {
                case "user-profile":
                case "user-tracks":
                case "user-reposts":
                case "user-likes":
                    return {
                        resourceType: "user",
                        resourceId: t.sourceInfo.resourceId,
                        resourceUrn: "soundcloud:users:" + t.sourceInfo.resourceId
                    };
                default:
                    return null
            }
        }
        var r = e.exports = {
            waitForPlayThreshold: function(e, t) {
                if ("history" === t.sourceInfo.type) return n(55).reject();
                var o = i(e, t);
                return e.isAd() ? n(55).reject() : r.whenSoundPlayedMinimum(e).then(function() {
                    return {
                        soundId: e.id,
                        playContext: o
                    }
                })
            },
            getMinimumPlayTime: function() {
                return 1e3
            },
            whenSoundPlayedMinimum: function(e) {
                function t() {
                    window.clearTimeout(a), o.resolve()
                }

                function i() {
                    window.clearTimeout(a), o.reject()
                }
                var o = n(55).defer(),
                    a = window.setTimeout(function() {
                        e.off(null, t), e.off(null, i), e.isPlaying() ? o.resolve() : o.reject()
                    }, r.getMinimumPlayTime());
                return e.once("finish", t), e.once("pause", i), o.promise()
            }
        }
    },
    1823: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                var t = !e || e.indexOf(s) > -1 ? a : e;
                return t.replace(h, ".json")
            }

            function r(e) {
                return t.ajax({
                    url: e,
                    type: "GET",
                    dataType: "json",
                    timeout: u
                })
            }
            var o = n(106).typedArrays ? Uint8Array : Array,
                a = n(54).get("wisHost") + "/90GaSwazbrh1_m.png",
                s = "/images/player-waveform-medium.png",
                l = 500,
                u = 1e4,
                c = new(n(266))({
                    maxLength: l
                }),
                d = 1.5,
                p = 1800,
                h = /\.png$/,
                f = (e.exports = {
                    loadWaveformData: function(e) {
                        var t = i(e),
                            o = c.get(t);
                        return o || (o = r(t).then(m, function() {
                            return n(55).resolve(g())
                        }), c.set(t, o)), o
                    }
                }, n(3).memoize(function(e) {
                    return function(t, n, i) {
                        return t[i] = Math.round(Math.pow((e - n) / e, 1 / d) * e), t
                    }
                })),
                g = n(3).memoize(function() {
                    for (var e = new o(p), t = 0; p > t; ++t) e[t] = Math.round(15 * Math.sin(t / p * Math.PI * 10) + 105);
                    return e
                }),
                m = function(e) {
                    return e.samples.reduce(f(e.height), new o(e.samples.length))
                }
        }).call(t, n(1))
    },
    1824: function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            n(54).get("experiments") || n(54).set("experiments", n(1667)(e))
        }
    },
    1825: function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            var t = n(54).get("me");
            t ? t.set(e, {
                parse: !0
            }) : (t = new(n(63))(e, {
                isMe: !0,
                parse: !0
            }), t.baseUrl = function() {
                return this.getEndpointUrl("me")
            }, t.saveUrl = function() {
                return this.getEndpointUrl("meUpdate")
            }, n(54).set("me", t)), e && (t.lastFetchTime = Date.now())
        }
    },
    1826: function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            n(54).get("rollouts") || n(54).set("rollouts", n(1351)(e))
        }
    },
    1827: function(e, t, n) {
        "use strict";
        e.exports = {
            userId: function() {
                return n(139).get("rubicon_user_id")
            }
        }
    },
    1829: function(e, t, n) {
        "use strict";
        var i = {};
        e.exports = {
            loadLayout: function(e) {
                var t, r = i[e];
                return r ? r : (t = n(55).defer(), n(1659)("./" + e.replace("layouts/", ""))(function(e) {
                    t.resolve(e)
                }), r = i[e] = t.promise())
            }
        }
    },
    1831: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            requires: ["adZone"],
            around: {
                parse: function(e, t) {
                    var i = n(91).parseResponse(t),
                        r = i.data,
                        o = [];
                    return r && o.push({
                        ad_urn: i.ad_urn,
                        campaign: "promoted",
                        kind: r.kind,
                        origin: r,
                        promoted_by: i.promoted_by_user,
                        promoted_by_urn: i.promoted_by_urn,
                        tracking: i.tracking
                    }), e(o)
                }
            },
            defaults: {
                parse: function(e) {
                    return e
                }
            },
            override: {
                url: function() {
                    return null !== this.next_href ? this.next_href : n(91).getAdUrl(this.adZone, n(3).result(this, "adZoneParams"))
                }
            }
        })
    },
    1833: function(e, t, n) {
        "use strict";
        var i = n(3).assign;
        e.exports = new(n(21))({
            requires: ["getAudible"],
            merge: {
                fields: {
                    geoblocking: {
                        defaultValue: !1
                    },
                    availableCountries: {
                        defaultValue: function() {
                            return n(89).countryCodes()
                        }
                    }
                },
                requiredModelAttributes: ["geo_blockings"]
            },
            before: {
                setup: function() {
                    var e = this;
                    this.listenTo(this, "change:geoblocking", function(t, i) {
                        i || e.set("availableCountries", n(89).countryCodes())
                    })
                }
            },
            around: {
                getAttributesToBeSaved: function(e) {
                    for (var t = this.get("availableCountries"), r = arguments.length, o = Array(r > 1 ? r - 1 : 0), a = 1; r > a; a++) o[a - 1] = arguments[a];
                    return i({
                        geo_blockings: t ? n(89).complement(t) : []
                    }, e.apply(this, o))
                },
                getAttributesFromModel: function(e) {
                    for (var t = this.getAudible(), n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; n > o; o++) r[o - 1] = arguments[o];
                    return i({
                        geoblocking: t.isGeoblocked(),
                        availableCountries: t.getAvailableCountries ? t.getAvailableCountries() : []
                    }, e.apply(this, r))
                }
            }
        })
    },
    1835: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e ? "on" : "off";
            this._onFieldsChange = this._onFieldsChange || n(3).throttle(r.bind(this), this.serialization.saveOnceIn, {
                leading: !1
            }), this[t](o.call(this), this._onFieldsChange)
        }

        function r() {
            var e = this,
                t = this.serialization.fields.reduce(function(t, n) {
                    return t[n] = e.get(n), t
                }, {});
            l.set(this.serialization.storeKey, t)
        }

        function o() {
            return "change:" + this.serialization.fields.join(" change:")
        }

        function a() {
            return !this._isStoringFields && this.serialization.storeKey && this.serialization.fields && this.serialization.fields.length
        }
        var s, l = new(n(93))("persistentFormFields", "session");
        s = {
            fields: [],
            storeKey: null,
            saveOnceIn: 3e3,
            restoreAndStoreOnSetup: !1
        };
        e.exports = new(n(21))({
            _isStoringFields: !1,
            _onFieldsChange: null,
            after: {
                setup: function() {
                    this.serialization = n(3).assign({}, s, this.serialization), this.serialization.restoreAndStoreOnSetup && (this.restoreFields(), this.startStoringFields())
                }
            },
            applyTo: function(e) {
                e.constructor.onCleanup = function(e) {
                    e.stopStoringFields()
                }
            },
            restoreFields: function() {
                var e = l.get(this.serialization.storeKey);
                e && this.set(e)
            },
            startStoringFields: function() {
                a.call(this) && (this._isStoringFields = !0, i.call(this, !0))
            },
            stopStoringFields: function() {
                this._isStoringFields && (this._isStoringFields = !1, i.call(this, !1), this._onFieldsChange = null)
            },
            clearStoredValues: function() {
                l.set(this.serialization.storeKey, null)
            },
            _getStore: function() {
                return l
            }
        })
    },
    1836: function(e, t, n) {
        "use strict";

        function i(e) {
            return e && new Date(e)
        }
        var r = n(3).assign,
            o = n(3).identity;
        e.exports = new(n(21))(n(1837), {
            requires: ["requiredModelAttributes"],
            applyTo: function(e) {
                this.merge(e, {
                    requiredModelAttributes: e.getScheduledAttributes()
                })
            },
            around: {
                getAttributesToBeSaved: function(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; t > i; i++) n[i - 1] = arguments[i];
                    return r(e.apply(this, n), this.getScheduledAttributesToBeSaved())
                },
                getAttributesFromModel: function(e) {
                    for (var t = this, n = function(e) {
                            var n = arguments.length <= 1 || void 0 === arguments[1] ? o : arguments[1];
                            return n(t.getAudible().get(e))
                        }, a = arguments.length, s = Array(a > 1 ? a - 1 : 0), l = 1; a > l; l++) s[l - 1] = arguments[l];
                    return r(e.apply(this, s), {
                        scheduledPublic: n("scheduled_public_date", Boolean),
                        scheduledPublicDate: n("scheduled_public_date", i),
                        scheduledTimezone: n("scheduled_timezone"),
                        availability: n("scheduled_public_date") ? "scheduled" : n("sharing")
                    })
                }
            }
        })
    },
    1837: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                var e = this.get("availability");
                e && this.set({
                    sharing: r(e),
                    scheduledPublic: "scheduled" === e
                })
            }

            function r(e) {
                switch (e) {
                    case "public":
                        return "public";
                    case "private":
                    case "scheduled":
                        return "private"
                }
            }

            function o() {
                var e = this.get("scheduledPublic"),
                    t = this.get("sharing");
                if (null !== e) {
                    var n = !e && "public" === t;
                    this.set({
                        sharing: n ? "public" : "private",
                        availability: e ? "scheduled" : t
                    })
                }
            }
            var a = {
                scheduledTimezone: {
                    defaultValue: null
                },
                scheduledPublic: {
                    defaultValue: !1
                },
                scheduledPublicLocalDate: {
                    defaultValue: null
                },
                scheduledPublicDate: {
                    defaultValue: null
                },
                availability: {
                    defaultValue: "public",
                    datasource: [{
                        value: "public",
                        label: n(50).t("Public"),
                        sublabel: n(50).t("Anyone will be able to listen to this track.")
                    }, {
                        value: "private",
                        label: n(50).t("Private"),
                        sublabel: n(50).t("Only you and people you share a [[[linkStart]]]secret link[[[linkEnd]]] with will be able to listen to this track.", {
                            linkStart: '<a href="https://help.soundcloud.com/hc/en-us/articles/115003450427-Sharing-a-private-track-or-playlist-within-SoundCloud" class="sc-link-dark" rel="noopener noreferrer" target="_blank">',
                            linkEnd: "</a>"
                        })
                    }, {
                        value: "scheduled",
                        label: n(50).t("Scheduled"),
                        sublabel: n(50).t("Select a date and time for your track to become public.")
                    }]
                }
            };
            e.exports = new(n(21))({
                applyTo: function(e) {
                    t.extend(!0, e, {
                        fields: a,
                        constraints: {
                            scheduledPublicDate: [
                                [n(66), {
                                    message: n(50).t("Select a date and time.")
                                }], n(496), n(578)
                            ],
                            scheduledTimezone: [
                                [n(66), {
                                    message: n(50).t("Select a time zone.")
                                }]
                            ]
                        },
                        constraintConditions: {
                            scheduledPublicDate: {
                                fields: ["scheduledPublicDate", "scheduledPublic"],
                                check: function(e, t) {
                                    return t && (!e || this.getFieldMetadata("scheduledPublicDate").isDirty)
                                }
                            },
                            scheduledTimezone: {
                                fields: ["scheduledPublic"],
                                check: function(e) {
                                    return e
                                }
                            }
                        }
                    })
                },
                after: {
                    setup: function() {
                        this.listenTo(this, "change:scheduledPublic", o), this.listenTo(this, "change:availability", i)
                    }
                },
                getScheduledAttributes: function() {
                    return ["scheduled_public_date", "scheduled_timezone", "sharing"]
                },
                getScheduledAttributesToBeSaved: function() {
                    var e = n(54).get("me"),
                        t = this.get("scheduledPublic"),
                        i = {};
                    return e.hasScheduling() && (t ? (i.scheduled_public_date = +this.get("scheduledPublicDate"), i.scheduled_timezone = this.get("scheduledTimezone")) : t === !1 && (i.scheduled_public_date = null, i.scheduled_timezone = null)), i
                }
            })
        }).call(t, n(1))
    },
    1838: function(e, t, n) {
        "use strict";

        function i(e, t, n) {
            function i() {
                a.clearTimeout(l), a.clearTimeout(s)
            }

            function o() {
                e() && (i(), n())
            }
            var a = window,
                s = a.setTimeout(i, t),
                l = a.setInterval(o, r);
            o()
        }
        var r = 50,
            o = 2e4,
            a = window.performance && window.performance.timing,
            s = "fetchStart",
            l = !0;
        e.exports = a ? new(n(21))({
            defaults: {
                performanceSelector: null
            },
            after: {
                render: function() {
                    var e, t, r, u = this;
                    l && (l = !1, (e = this.performanceSelector) && (t = function() {
                        return u.$(e).length
                    }, r = function() {
                        var e = Date.now() - a[s];
                        n(56).trigger("tracking:appLoad", {
                            latency: e
                        })
                    }, i(t, o, r)))
                }
            }
        }) : new(n(21))({})
    },
    1839: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            requirePrototype: n(64).prototype,
            defaults: {
                isPrivate: function() {
                    return "private" === this.get("sharing")
                },
                extractSecretToken: n(3).noop
            },
            isPublic: function() {
                return !this.isPrivate()
            },
            around: {
                url: function(e, t) {
                    var i = this.get("secret_token"),
                        r = e(t);
                    return i && this.isPrivate() ? n(65).modify(r, {
                        query: {
                            secret_token: i
                        }
                    }) : r
                },
                parse: function(e, t) {
                    var i;
                    return "string" == typeof this.baseUrl && (i = n(65).parse(this.baseUrl).query.secret_token), i || (i = this.extractSecretToken(t)), i && (t.secret_token = i), e(t)
                }
            }
        })
    },
    1840: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e, i) {
                var r = n(3).reduce(i, function(i, r) {
                        var o = e.get(r);
                        return n(3).isObject(o) ? i[r] = t.extend(!0, {}, o) : e.attrExists(r) && (i[r] = o), i
                    }, {}),
                    o = n(3).reject(i, function(t) {
                        return e.attrExists(t)
                    });
                this.rollback = function() {
                    n(3).each(o, function(t) {
                        e.unset(t)
                    }), e.set(r)
                }
            }
            e.exports = new(n(21))({
                requirePrototype: n(64).prototype,
                createSnapshot: function(e) {
                    return new i(this, e)
                }
            })
        }).call(t, n(1))
    },
    1841: function(e, t, n) {
        "use strict";
        var i = n(83).MS_IN_SECOND,
            r = 2 * i,
            o = 30 * i,
            a = 100;
        e.exports = new(n(21))({
            applyTo: function(e) {
                var t = e.constructor;
                this.before(t, {
                    onCleanup: function(e) {
                        e.pollOff()
                    }
                })
            },
            after: {
                initialize: function() {
                    this._polling = {
                        circuit: null,
                        callbacks: {}
                    }
                }
            },
            pollOn: function(e, t, i) {
                var s = this._polling,
                    l = s.circuit;
                l || (l = s.circuit = new(n(148))({
                    tolerance: 1,
                    baseDelay: r,
                    maxDelay: o,
                    backoffRate: 1.5,
                    giveUp: a,
                    enabled: !1
                }), l.on("enabled", function() {
                    this.fetch({
                        attrs: Object.keys(s.callbacks),
                        batch: !1
                    }), l.failed()
                }, this).on("giveup", function() {
                    this.pollOff()
                }, this)), s.callbacks[e] = s.callbacks[e] || [], s.callbacks[e].length || l.succeeded(), this._polling.callbacks[e].push({
                    callback: t,
                    context: i
                }), this.on("change:" + e, t, i)
            },
            pollOff: function(e, t, i) {
                var r, o = this._polling,
                    a = {};
                3 === arguments.length && o.callbacks[e] ? (r = [], a[e] = [], o.callbacks[e].forEach(function(n) {
                    n.callback === t && n.context === i ? a[e].push(n) : r.push(n)
                }), o.callbacks[e] = r, o.callbacks[e].length || delete o.callbacks[e]) : e ? (a = {
                    attr: o.callbacks[e] || []
                }, delete o.callbacks[e]) : (a = o.callbacks, o.callbacks = {}), n(3).each(a, function(e, t) {
                    e.forEach(function(e) {
                        this.off("change:" + t, e.callback, e.context)
                    }, this)
                }, this), !Object.keys(o.callbacks).length && o.circuit && (o.circuit.dispose(), o.circuit = null)
            }
        })
    },
    1842: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))(n(3).assign({
            around: {
                set: function(e, t, n, i) {
                    var r, o, a = i && i.silent;
                    return a || (o = this.get(t)), r = e(t, n, i), a || o === n || this.trigger(t, {
                        prev: o,
                        current: n
                    }), r
                },
                unset: function(e, t, n) {
                    var i, r, o = n && n.silent;
                    return o || (r = this.get(t)), i = e(t, n), o || void 0 === r || this.trigger(t, {
                        prev: r,
                        current: void 0
                    }), i
                },
                reset: function(e, t) {
                    var i, r, o;
                    return t && t.silent || (o = this.reduce(function(e, t, n) {
                        return t !== r && (e[n] = t), e
                    }, {}, this)), i = e(t), o && n(3).each(o, function(e, t) {
                        this.trigger(t, {
                            prev: e,
                            current: void 0
                        })
                    }, this), i
                }
            }
        }, n(22).Events))
    },
    1843: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return [l, e, t].join(u)
        }

        function r(e) {
            var t = e.storage,
                n = e.keyName,
                i = e._store;
            if (t) try {
                return t.setItem(n, JSON.stringify(i)), !0
            } catch (r) {
                return !1
            }
            return !1
        }

        function o(e) {
            return "local" === e && n(106).localStorage ? window.localStorage : "session" === e && n(106).sessionStorage ? window.sessionStorage : null
        }

        function a(e) {
            var t = e.storage,
                n = e.keyName;
            if (t) try {
                return JSON.parse(t.getItem(n) || "{}")
            } catch (i) {}
            return {}
        }

        function s(e) {
            var t = {
                dontPersist: !0
            };
            if (!e.key) return void n(3).each(n(3).values(d.local).concat(n(3).values(d.session)), function(e) {
                e.reset(t)
            });
            c.lastIndex = 0;
            var i = c.exec(e.key) || [void 0, void 0, void 0],
                r = i[1],
                o = i[2];
            r && o && ! function() {
                var e = d[r][o];
                if (e) {
                    var i = a(e),
                        s = Object.keys(i);
                    n(3).each(i, function(n, i) {
                        e.set(i, n, t)
                    }), n(3).difference(e.keys(), s).forEach(function(n) {
                        e.unset(n, t)
                    })
                }
            }()
        }
        var l = "V2",
            u = "::",
            c = new RegExp("^" + l + u + "(\\S+?)" + u + "(\\S+)");
        window.addEventListener("storage", s, !1);
        var d = {
            local: {},
            session: {}
        };
        e.exports = new(n(21))({
            storage: null,
            keyName: null,
            type: null,
            namespace: null,
            around: {
                initialize: function(e, t) {
                    var r = arguments.length <= 2 || void 0 === arguments[2] ? "local" : arguments[2];
                    return d[r][t] ? d[r][t] : (d[r][t] = this, e(), this.type = r, this.namespace = t, this.storage = o(r), this.keyName = i(r, t), this._store = a(this), void(this.length = n(3).keys(this._store).length))
                }
            },
            after: {
                set: function(e, t, n) {
                    n && n.dontPersist || r(this)
                },
                unset: function(e, t) {
                    t && t.dontPersist || r(this)
                },
                reset: function(e) {
                    e && e.dontPersist || r(this)
                }
            },
            dispose: function() {
                this.storage && this.storage.removeItem(this.keyName), this.reset({
                    dontPersist: !0
                }), delete d[this.type][this.namespace]
            },
            write: function() {
                r(this)
            }
        })
    },
    1844: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = this.onCleanup;
            if (t) {
                var n = this.get(e);
                null != n && t.call(n, n, e)
            }
            this.unset(e)
        }

        function r(e, t) {
            t.forEach(function(t) {
                return e.add(t)
            })
        }
        e.exports = new(n(21))({
            onCleanup: null,
            onIncrement: null,
            onDecrement: null,
            _zeroList: null,
            _killList: null,
            _zeroListSnap: null,
            after: {
                initialize: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                        t = e.autoCleanup,
                        i = e.onCleanup,
                        r = e.onIncrement,
                        o = e.onDecrement;
                    this._counts = Object.create(null), this._totalCount = 0, this._autoCleanup = !!t, this.onCleanup = i, this.onIncrement = r, this.onDecrement = o, this._zeroList = new(n(448)), this._killList = new(n(448))
                },
                reset: function() {
                    this._counts = Object.create(null), this._totalCount = 0, this._zeroList.clear(), this._killList.clear()
                },
                set: function(e, t) {
                    this._counts[e] || (this._counts[e] = 1, this._totalCount++, this.onIncrement && this.onIncrement(t, e, 1))
                },
                unset: function(e) {
                    this._totalCount -= this.countFor(e), delete this._counts[e], this._zeroList["delete"]("" + e), this._killList["delete"]("" + e)
                }
            },
            before: {
                reset: function() {
                    this.onCleanup && this.forEach(this.onCleanup)
                }
            },
            countFor: function(e) {
                return this._counts[e] || 0
            },
            totalCount: function() {
                return this._totalCount
            },
            increment: function(e, t) {
                return this.has(e) && (t = "number" == typeof t ? t : 1, t > 0 ? (this._totalCount += t, this._counts[e] <= 0 && (this._zeroList["delete"]("" + e), this._killList["delete"]("" + e)), this._counts[e] = (this._counts[e] || 0) + t, this.onIncrement && this.onIncrement(this.get(e), e, t)) : 0 > t && this.decrement(e, -t)), this
            },
            decrement: function(e, t) {
                return this.has(e) && (t = "number" == typeof t ? t : 1, t > 0 ? (this._totalCount -= t, this._counts[e] = (this._counts[e] || 1) - t, this.onDecrement && this.onDecrement(this.get(e), e, t), this._counts[e] <= 0 && (this._zeroList.add("" + e), this._autoCleanup && this.cleanup())) : 0 > t && this.increment(e, -t)), this
            },
            changeKey: function(e, t) {
                if (e !== t) {
                    var n = this.get(e),
                        i = this.countFor(e);
                    this.unset(e), this.set(t, n), this.increment(t, i - 1)
                }
            },
            cleanup: function() {
                return this.mark(), this.sweep()
            },
            mark: function() {
                r(this._killList, this._zeroList), this._zeroList.clear()
            },
            beginSweep: function() {
                this._zeroListSnap = new(n(448))(this._zeroList), this._zeroList.clear()
            },
            endSweep: function() {
                this._zeroList = this._zeroListSnap, this._zeroListSnap = null
            },
            sweep: function() {
                var e = !!this._zeroListSnap,
                    t = this._killList.size || e && this._zeroList.size;
                if (!t) return !1;
                e || this.beginSweep();
                do new(n(448))(this._killList).forEach(i, this), this._killList = this._zeroList; while (this._killList.size);
                return this._zeroList = new(n(448)), e || this.endSweep(), !0
            }
        })
    },
    1853: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e.sound;
            return t.isPlayable()
        }

        function r(e) {
            for (var t = e.length; t--;)
                if (e.at(t).sound.isPublic()) return e.at(t)
        }
        var o = n(22).Events,
            a = n(58).trackV0Click,
            s = n(160).all,
            l = n(160).none,
            u = n(160).one,
            c = [l, u, s];
        e.exports = function() {
            function e(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1];
                te && (Se.stopListening(te.stream), te.dispose()), t || w(), te = e, ae = t, ne = 0, e && (Se.getState("shuffle") && e.stream.shuffle(), Se.listenTo(te.stream, "data", g).listenTo(te.stream, "end", m)), M()
            }

            function t(e) {
                ee && (Se.stopListening(ee.stream), ee.dispose()), ee = e, e && (we.cache = {}, Se.listenTo(ee.stream, "data", f))
            }

            function d(e) {
                if (e && pe) {
                    var t = Z.map(function(e) {
                            var t = e.index;
                            return t
                        }),
                        i = Math.max.apply(Math, [0].concat(t)) + 1,
                        r = pe(e.sound) || {},
                        o = r.source,
                        a = r.restoreUrl,
                        s = {
                            restoreUrl: a,
                            layoutInfo: e.layoutInfo,
                            sourceInfo: {}
                        };
                    return o ? n(514)(o, null, s, 1, i) : void 0
                }
            }

            function p() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                if (te.stream.isEnded()) {
                    var n = void 0,
                        i = r(Z);
                    i && (n = d(i)) && (e(n.next, !0), n.prev.dispose(), se = t, Se.pullNext(1))
                } else ae && (se = t, Se.pullNext(1))
            }

            function h() {
                ae || Se.pullNext(Math.max(0, z - (Z.length - K) + 1)), Se.pullPrev(Math.max(0, z - K))
            }

            function f(e) {
                0 === --ie && ee.stream.pause(), Z.unshift(e, {
                    prevStream: !0
                }), le && Se.setCurrentItem(e, le)
            }

            function g(e) {
                0 === --ne && te.stream.pause(), ue ? (Z.unshift(e), ue = !1) : Z.push(e), se && Se.setCurrentItem(e, se), R()
            }

            function m() {
                ue = !1
            }

            function v(e, t, n) {
                var i = n.index;
                K >= i && --K, M()
            }

            function _(e) {
                var t = Z.indexOf(e);
                K >= t && ++K, M()
            }

            function y(e, t) {
                t && (404 === t.status || t instanceof n(497)) && A(e.sound)
            }

            function b(e) {
                if (!n(180).isCasting()) {
                    var t = function() {
                        be(), n(1822).waitForPlayThreshold(e, Se.getCurrentMetadata()).then(function(e) {
                            var t = e.soundId,
                                n = e.playContext;
                            ge.addToPlayHistory(t, n, !0)
                        })
                    };
                    e.on("time", t), be(), be = function() {
                        e.off("time", t), be = n(3).noop
                    }
                }
            }

            function w() {
                var e = Se.getCurrentQueueItem(),
                    t = _e || e && !e.explicit,
                    i = Z.slice(0, K + (t ? 1 : 0)).concat(n(3).reject(Z.slice(K + 1), "explicit"));
                Z.remove(i), t && k(e.sound)
            }

            function x(e) {
                ye.indexOf(e) >= 0 || (ye.push(e), Se.listenTo(e, "finish", S).listenTo(e, "change:playable", T).listenTo(e, "time", C).listenToOnce(e, "time", function() {
                    ce = !1
                }))
            }

            function k(e) {
                if (e) {
                    var t = ye.indexOf(e);
                    t >= 0 && (ye.splice(t, 1), Se.stopListening(e))
                }
            }

            function S() {
                var e = Se.getCurrentSound();
                n(180).isCasting() || (e.pause(), E())
            }

            function C(e) {
                var t = Se.getCurrentSound();
                t && t.currentTime() >= t.duration() - G && (R(), Se.stopListening(t, "time", C))
            }

            function T() {
                var e = Se.getCurrentSound();
                e && !e.isPlayable() && (k(e), E())
            }

            function E() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                Se.playNext(n(3).assign({
                    userInitiated: !1
                }, e))
            }

            function A(e) {
                var t = e.isPlaying(),
                    n = Se.getCurrentSound() === e,
                    i = Z.filter({
                        sound: e
                    });
                Z.remove(i), n && E({
                    pause: !t
                })
            }

            function I() {
                Se.toggleState("globalPlayLock", fe.isBlockedFromSkipping())
            }

            function M() {
                var e = D(),
                    t = !(!e && !Se.getCurrentQueueItem());
                Se.toggleState("hasNext", e).toggleState("hasCurrent", t)
            }

            function D() {
                return K < Z.length - 1 || !!te && !te.stream.isEnded() || he === s && Z.length > 1 || he !== s && !!r(Z)
            }

            function P(e) {
                var t = e.sound;
                if (t.isPlaying()) {
                    var n = function() {
                            t.off("pause", n), window.clearTimeout(i)
                        },
                        i = window.setTimeout(function() {
                            n(), Se.playNext()
                        }, U);
                    t.on("pause", n)
                }
            }

            function N() {
                Z.each(function(e, t) {
                    e.order = t
                });
                var e = K + 1,
                    t = Z.slice(0, e),
                    i = n(3).shuffle(Z.slice(e));
                Z.reset(t.concat(i)), te && te.stream.shuffle(), a(["shuffle"], {
                    click_name: "shuffle::on"
                })
            }

            function O() {
                for (var e = Se.getCurrentQueueItem(), t = K; t >= 0 && Z.at(t).explicit && null == Z.at(t).order;) t--;
                var i = Z.at(t),
                    r = Z.reduce(function(e, t) {
                        return null != t.order ? e.ordered.push(t) : t.explicit ? e.explicit.push(t) : t.index < 0 ? e.prev.push(t) : e.next.push(t), e
                    }, {
                        prev: [],
                        ordered: [],
                        explicit: [],
                        next: []
                    });
                te && (r.next = r.next.concat(te.stream.unshuffle()));
                var o = [].concat(n(3).sortBy(r.prev, "index"), n(3).sortBy(r.ordered, "order"), n(3).sortBy(r.next, "index")),
                    s = o.indexOf(i),
                    l = n(3).sortBy(r.explicit, "index");
                o.splice.apply(o, [s + 1, 0].concat(l)), K = o.indexOf(e), -1 === K && n(284).notify(new Error("PlayManager: Error occurred when unshuffling.")), Z.reset(o), a(["shuffle"], {
                    click_name: "shuffle::off"
                })
            }

            function R() {
                for (var e, t = Se.getCurrentQueueItem(), n = 1; t && null != (e = Z.at(K + n)) && !e.sound.isPlayable();) n++;
                if (e) {
                    var i = t.sound && t.sound.player;
                    if (i) {
                        var r = i.getMaxBufferLength(),
                            o = i.getCurrentBufferedTimeRange(),
                            a = i.getDuration(),
                            s = o ? o.end : 0,
                            l = i.getPosition();
                        null !== r && null !== a && (s >= a || s - l >= Math.min(Y, r)) ? e.enablePreloading() : e.disablePreloading()
                    }
                }
            }
            var L = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                F = L.prefetchDistance,
                z = void 0 === F ? 20 : F,
                j = L.playNextOnErrorDelay,
                U = void 0 === j ? 2500 : j,
                B = L.rewindThreshold,
                $ = void 0 === B ? 5e3 : B,
                H = L.randomBufferSize,
                V = void 0 === H ? 100 : H,
                q = L.prefetchAudioCheckPoint,
                G = void 0 === q ? 1e4 : q,
                W = L.stableBufferDuration,
                Y = void 0 === W ? 1e4 : W,
                Z = new(n(1854)),
                Q = 0,
                K = -1,
                J = -(1 / 0),
                X = void 0,
                ee = void 0,
                te = void 0,
                ne = 0,
                ie = 0,
                re = !1,
                oe = void 0,
                ae = !1,
                se = void 0,
                le = void 0,
                ue = !1,
                ce = !1,
                de = n(3).noop,
                pe = void 0,
                he = c[0],
                fe = void 0,
                ge = void 0,
                me = void 0,
                ve = void 0,
                _e = !1,
                ye = [],
                be = n(3).noop,
                we = n(3).memoize(function() {
                    var e = n(55).defer();
                    return !ee || ee.stream.isEnded() ? e.resolve() : (Se.listenTo(ee.stream, "end", e.resolve), Se.pullPrev(1 / 0)), e.promise()
                }),
                xe = function() {
                    return fe.isUserAdConsumer() && fe.getCurrentSound()
                },
                ke = function() {
                    if (xe()) {
                        if (fe.isBlockedFromSkipping()) return !1;
                        de = n(3).noop, fe.skip()
                    }
                    return !0
                },
                Se = n(3).assign({}, o, {
                    states: {
                        globalPlayLock: {
                            initial: !1
                        },
                        hasNext: {
                            initial: !1
                        },
                        hasCurrent: {
                            initial: !1
                        },
                        shuffle: {
                            setup: N,
                            teardown: O
                        },
                        hasFallback: {
                            initial: !1
                        },
                        fallbackEnabled: {
                            initial: !0
                        }
                    },
                    initialize: function(e, t, i) {
                        var r = arguments.length <= 3 || void 0 === arguments[3] ? function() {} : arguments[3];
                        fe = e, ge = t, me = i, Se.listenTo(fe, "state:isInRequiredListenPeriod", I).listenTo(fe, "state:isAllowedToSkipImmediately", I).listenTo(ge, "destroy", function(e) {
                            var t = e.targetType,
                                n = e.targetModel;
                            "sound" === t && A.call(this, n)
                        }).listenTo(me, "geoBlocked", P), pe = r, ve = window.setInterval(R, 500), this.restoreSoundStore = new(n(1461))
                    },
                    dispose: function() {
                        de = n(3).noop, window.clearInterval(ve), t(null), e(null), Z.release(), Se.stopListening(), Se.off()
                    },
                    playSource: function(i, r, o) {
                        var a = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3];
                        if (!Se.getState("globalPlayLock") && ke()) {
                            var s = Se.getCurrentQueueItem(),
                                l = s && r === s.sound;
                            if (l) return void Se.playCurrent(a);
                            Se.pauseCurrent({
                                seek: 0
                            }), Se.toggleState("fallbackEnabled", !0);
                            var u = n(3).result(i, "getPlaySource", i),
                                c = n(514)(u, r, o, V),
                                d = c.prev,
                                p = c.next;
                            e(p), t(d), Se.trigger("queueReset"), se = a, ue = !0, ce = !1, Se.pullNext(1)
                        }
                    },
                    toggleSource: function(e, t) {
                        var n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                        Se.isSourcePlaying(e) ? Se.pauseCurrent(n) : Se.isSourceActive(e) ? Se.playCurrent(n) : Se.playSource(e, null, t, n)
                    },
                    playCurrent: function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                        if (!ke()) return void(de = function() {
                            return Se.playCurrent(e)
                        });
                        var t = Se.getCurrentQueueItem();
                        if (t && t.sound.isPlayable()) {
                            de = function() {
                                de = n(3).noop, _e = !0, b(t.sound), t.sound.play(e), n(386).addSound(t.sound, e)
                            };
                            var i = fe.isUserAdConsumer() && !n(180).isCasting();
                            t.enablePreloading(), i ? fe.whenAdFinished(t.sound, e).always(function() {
                                return de()
                            }) : de()
                        } else ce ? Se.playPrev(e) : Se.playNext(e)
                    },
                    pauseCurrent: function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                        le = null, se = null;
                        var t = Se.getCurrentSound();
                        t && (t.pause(), e.seek >= 0 && t.seek(e.seek))
                    },
                    toggleCurrent: function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                            t = Se.getCurrentSound();
                        if (Se.getState("globalPlayLock")) {
                            var n = xe();
                            return void(n && n.toggle(e))
                        }
                        if (t && fe.isUserAdConsumer()) {
                            var n = fe.getCurrentSound();
                            if (n) return void n.toggle(e)
                        }
                        t && t.isPlaying() ? Se.pauseCurrent(e) : Se.playCurrent(e)
                    },
                    setCurrentItem: function(e) {
                        var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                        if (ke()) {
                            var i = Se.getCurrentQueueItem(),
                                r = e !== i,
                                o = e.sound;
                            r && (i && i.disablePreloading(), Se.pauseCurrent({
                                seek: 0
                            }), i && k(i.sound), K = Z.indexOf(e), -1 === K && n(284).notify(new Error("PlayManager: setCurrentItem() called with item which isn't in the queue.")), M(), x(o)), r && Se.trigger("change:currentSound", {
                                current: o
                            }), t.pause !== !0 ? Se.playCurrent(t) : e.enablePreloading(), r && h(), R()
                        }
                    },
                    playNext: function() {
                        var r = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                        r = n(3).assign({
                            seek: 0
                        }, r), ce = !1;
                        var o = he === s,
                            a = Se.getCurrentQueueItem();
                        return a && he === u && !r.userInitiated ? void Se.setCurrentItem(a, r) : Z.length && K < Z.length - 1 ? void Se.setCurrentItem(Z.at(K + 1), r) : te ? te.stream.isEnded() || ae && o || ae && !Se.getState("fallbackEnabled") ? o ? void we().then(function() {
                            var e = Z.find(i);
                            e && Se.setCurrentItem(e, r)
                        }) : void(Se.getState("fallbackEnabled") && p(r)) : (se = r, void Se.pullNext(1)) : void(X && (e(X.next), t(X.prev), X = null, Se.playNext(r)))
                    },
                    playPrev: function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                        e = n(3).assign({
                            seek: 0
                        }, e);
                        var t = Se.getCurrentSound(),
                            i = he === s && ee && ee.stream.isEnded() && te && te.stream.isEnded(),
                            r = K > 0 ? Z.at(K - 1) : i ? Z.last() : null,
                            o = ee && !ee.stream.isEnded();
                        return !xe() && t && (!r && !o || t.currentTime() > $) ? (t.isPlayable() && (t.seek(0), t.isPlaying() || (_e = !0, t.play(e))), void(ce = !1)) : (ce = !0, void(r ? Se.setCurrentItem(r, e) : o && (le = e, Se.pullPrev(1))))
                    },
                    removeItem: function(e) {
                        var t = Se.getCurrentQueueItem();
                        t !== e && Z.remove(e)
                    },
                    clearQueue: function() {
                        var e = Se.getCurrentQueueItem();
                        Se.replaceQueue(e ? [e] : [], e ? 0 : -1)
                    },
                    replaceQueue: function(e, i) {
                        var r = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                        i >= -1 && i < e.length || n(284).notify(new Error("PlayManager: Cursor out of range when attempting to replace queue: " + i)), t(null), te && (Se.stopListening(te.stream), te.dispose()), te = n(613), ae = !1, ne = 0;
                        var o = Se.getCurrentSound();
                        o && e[i].sound !== o && Se.pauseCurrent(), k(o), Se.trigger("queueReset"), Z.reset(e, {
                            silent: !0
                        }), K = -1, i >= 0 && Se.setCurrentItem(Z.at(i), r), Z.trigger("reset", Z, {}), M()
                    },
                    addExplicitQueueItem: function(t, i, r) {
                        Se.injectExplicitQueueItem(Se.createExplicitQueueItem(t, i, r)), te || e(n(613), !1)
                    },
                    createExplicitQueueItem: function(e, t, i) {
                        var r = e.getSoundIndex(t),
                            o = e.getQueueMetadataAt(r),
                            a = o.originalModel,
                            s = o.queryPosition,
                            l = o.sourceInfo,
                            u = new(n(218))({}, {
                                contextSnapshot: i,
                                originalModel: a,
                                queryPosition: s,
                                sound: t,
                                sourceInfo: l,
                                explicit: !0,
                                index: Q++
                            });
                        return u.release(), u
                    },
                    injectExplicitQueueItem: function(e) {
                        for (var t = K + 1, n = Z.length; n > t && Z.at(t) && Z.at(t).explicit;) t++;
                        Z.add(e, {
                            at: t
                        }), 0 === n && Se.setCurrentItem(e, {
                            pause: !0
                        })
                    },
                    cloneQueueItemToExplicit: function(e) {
                        var t = e.clone({
                            explicit: !0,
                            index: Q++,
                            order: null
                        });
                        t.release(), Se.injectExplicitQueueItem(t)
                    },
                    toggleShuffle: function() {
                        Se.toggleState("shuffle")
                    },
                    setInitialHistorySource: function(i, r) {
                        var o = n(514)(i, null, r),
                            a = o.next,
                            s = o.prev;
                        s.dispose(), t(a), e(n(613), !1), le = {
                            pause: !0
                        }, Se.pullPrev(1)
                    },
                    setInitialSource: function(e) {
                        var t = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1],
                            i = arguments[2];
                        if (re && !oe && (oe = window.setTimeout(function() {
                                re = !1, oe = null, Se.playCurrent({
                                    userInitiated: !1
                                })
                            }, 400)), !ee && t > J) {
                            X && X.dispose(), J = t;
                            var r = !!e.playlist,
                                o = r ? e.playlist : e,
                                a = r ? e : null;
                            return X = n(514)(o, a, i)
                        }
                    },
                    unsetInitialSource: function(e) {
                        X === e && (J = -(1 / 0), X.dispose(), X = null)
                    },
                    isSourcePlaying: function(e) {
                        var t = Se.getCurrentSound();
                        return !!t && t.isPlaying() && Se.isSourceActive(e)
                    },
                    isSourceActive: function(e) {
                        var t = Se.getCurrentQueueItem();
                        return !!t && n(3).isEqual(t.sourceInfo, e.getSourceInfo())
                    },
                    getQueue: function() {
                        return Z
                    },
                    getCurrentQueueItem: function() {
                        return Z.at(K)
                    },
                    getCurrentMetadata: function() {
                        var e = fe.isUserAdConsumer() ? fe.getCurrentSound() : null,
                            t = Se.getCurrentQueueItem();
                        if (e && t) {
                            var n = t.clone({
                                sound: e,
                                originalModel: e,
                                restoreUrl: null
                            });
                            return n.release(), n
                        }
                        return t
                    },
                    getCurrentMetadataEmptyReasons: function() {
                        return {
                            adConsumer: fe.isUserAdConsumer(),
                            currentAd: fe.isUserAdConsumer() && !!fe.getCurrentSound(),
                            queueLength: Z.length,
                            queueCursor: K
                        }
                    },
                    hasNextSound: function() {
                        return Se.getState("hasNext")
                    },
                    hasCurrentSound: function() {
                        return Se.getState("hasCurrent")
                    },
                    getCurrentSound: function() {
                        var e = Se.getCurrentQueueItem();
                        return e && e.sound
                    },
                    hasMoreAhead: function() {
                        return !!te && !te.stream.isEnded()
                    },
                    hasMoreBehind: function() {
                        return !!ee && !ee.stream.isEnded()
                    },
                    hasFallback: function() {
                        return ae || te && te.stream.isEnded() && !!r(Z)
                    },
                    enableAutoplay: function() {
                        te ? Se.playCurrent({
                            userInitiated: !1
                        }) : re = !0
                    },
                    restoreState: function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? Se.getCurrentQueueItem() : arguments[0];
                        if (e) {
                            var t = n(54).get("router"),
                                i = e.contextSnapshot,
                                r = e.sound,
                                o = i && i.restoreUrl,
                                a = r.playlist || r;
                            o ? (t.navigate(o, {
                                trigger: !0
                            }), this.restoreSoundStore.set("restoreToSound", a.resource_type + a.resource_id)) : t.navigateToRoute("listen", [r], {
                                trigger: !0
                            })
                        }
                    },
                    cycleRepeatMode: function() {
                        if (n(180).isCasting()) Se.setRepeatMode(he === l ? u : l);
                        else {
                            var e = c.indexOf(he);
                            Se.setRepeatMode(c[(e + 1) % c.length])
                        }
                    },
                    setRepeatMode: function(e) {
                        e !== he && (he = e, Se.trigger("change:repeatMode", he), M())
                    },
                    pullNext: function(e) {
                        te && !te.stream.isEnded() && (ne = Math.max(ne, e), ne > 0 && te.stream.resume())
                    },
                    pullPrev: function(e) {
                        ee && !ee.stream.isEnded() && (ie = Math.max(ie, e), ie > 0 && ee.stream.resume())
                    },
                    getQueueState: function() {
                        return {
                            currentIndex: K,
                            repeatMode: he
                        }
                    }
                });
            return n(504).applyTo(Se), Se.listenTo(Z, "remove", v).listenTo(Z, "add", _).listenTo(Z, "error", y), Se
        }
    },
    1854: function(e, t, n) {
        "use strict";
        e.exports = n(70).extend({
            model: n(218),
            setup: function() {
                this.setToFullyPopulated()
            }
        })
    },
    1855: function(e, t, n) {
        "use strict";

        function i(e) {
            return "playlist" === e.resource_type ? e.attrExists("tracks") : !0
        }

        function r(e) {
            return e.fetch()
        }
        var o = n(22).Events;
        e.exports = function(e) {
            function t(e) {
                i(e) ? (l.push.apply(l, e.getSounds()), a()) : d || (d = !0, r(e).always(function() {
                    d = !1
                }).then(function() {
                    return t(e)
                }, a))
            }

            function a() {
                for (; !u && l.length;) f.trigger("data", l.shift(), h);
                u || 0 !== l.length || (e.isEnded() ? s() : e.resume())
            }

            function s() {
                p || (p = !0, f.trigger("end"))
            }
            var l = [],
                u = !0,
                c = !1,
                d = !1,
                p = !1,
                h = void 0;
            e.on("data", function(n, i) {
                e.pause(), h = i, t(n)
            }), e.on("end", function() {
                d || 0 !== l.length || s()
            });
            var f = n(3).assign({
                pause: function() {
                    u = !0
                },
                peek: function() {
                    if (c) return void 0;
                    if (l[0]) return {
                        sound: l[0],
                        metadata: h
                    };
                    var t = e.peek();
                    if (!t) return void 0;
                    var n = t.audible,
                        r = t.metadata;
                    if (i(n)) {
                        var o = n.getSounds();
                        if (o.length) return {
                            sound: o[0],
                            metadata: r
                        }
                    }
                    return void 0
                },
                resume: function() {
                    !u || c || p || (u = !1, d || a())
                },
                isEnded: function() {
                    return p
                },
                dispose: function() {
                    c = !0, u = !0, f.off(), e.dispose()
                }
            }, o);
            return f
        }
    },
    1856: function(e, t, n) {
        "use strict";
        var i = n(22).Events;
        e.exports = function(e) {
            var t = !1,
                r = !1,
                o = n(3).assign({
                    peek: function() {
                        return r || !e ? void 0 : {
                            audible: e,
                            metadata: e.getQueueMetadataAt(0)
                        }
                    },
                    resume: function() {
                        if (!t && !r && e) {
                            var n = e;
                            e = null, t = !0, o.trigger("data", n, n.getQueueMetadataAt(0)), o.trigger("end")
                        }
                    },
                    pause: function() {},
                    isEnded: function() {
                        return t
                    },
                    dispose: function() {
                        o.off(), r = !0
                    }
                }, i);
            return o
        }
    },
    1857: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return r(e, t) || void 0
        }

        function r(e, t) {
            return (e.audibleAt || e.at).call(e, t)
        }
        var o = n(22).Events,
            a = 3,
            s = 2e3;
        e.exports = function(e) {
            function t() {
                _ = y ? e.indexOf(y) : -1
            }

            function r(t) {
                var n = e.indexOf(t);
                _ >= n && ++_
            }

            function l(e, t, n) {
                var i = n.index;
                _ >= i && --_
            }

            function u() {
                for (var t = void 0; !m && _ + 1 < e.length;) ++_, t = i(e, _), t && (y = e.at(_), x.trigger("data", t, e.getQueueMetadataAt(_)));
                m || (e.isFullyPopulated() ? h() : w || (w = !0, c()))
            }

            function c() {
                e.fetch({
                    reset: !1,
                    remove: !1
                }).then(d, p)
            }

            function d() {
                b = a, w = !1, u()
            }

            function p() {
                --b, b ? v = window.setTimeout(c, s) : (w = !1, h())
            }

            function h() {
                f = !0, x.trigger("end")
            }
            var f = !1,
                g = !1,
                m = !0,
                v = void 0,
                _ = -1,
                y = void 0,
                b = a,
                w = !1;
            e.on("reset", t).on("add", r).on("remove", l);
            var x = n(3).assign({
                peek: function() {
                    if (g) return void 0;
                    for (var t = _ + 1; t < e.length; t++) {
                        var n = i(e, t);
                        if (n) return {
                            audible: n,
                            metadata: e.getQueueMetadataAt(t)
                        }
                    }
                    return void 0
                },
                resume: function() {
                    !m || f || g || (m = !1, u())
                },
                pause: function() {
                    m = !0
                },
                isEnded: function() {
                    return f
                },
                dispose: function() {
                    e.off("reset", t).off("add", r).off("remove", l), this.off(), g = !0, m = !0, window.clearTimeout(v)
                }
            }, o);
            return x
        }
    },
    1858: function(e, t, n) {
        "use strict";
        var i = n(22).Events;
        e.exports = function(e, t) {
            function r() {
                if (1 === f.length) return f.pop();
                var e = Math.floor(Math.random() * f.length),
                    t = f.splice(e, 1),
                    n = t[0];
                return n
            }

            function o() {
                if (m && !y && f.length) {
                    var t = f.shift();
                    w.trigger("data", l(t)), m = !1
                }
                for (; !y && f.length && (e.isEnded() || f.length === g);) w.trigger("data", l(r()));
                e.isEnded() ? b || 0 !== f.length || (w.trigger("end"), b = !0) : b || y || e.resume()
            }

            function a() {
                v = n(55).promise(function(n) {
                    e.on("data", function(i, r) {
                        d || t && i !== t ? d ? (f.push({
                            sound: i,
                            index: p++,
                            metadata: r
                        }), o()) : h.push({
                            sound: i,
                            metadata: r
                        }) : (d = !0, e.pause(), h.forEach(function(e, t) {
                            e.index = t - h.length
                        }), f.push({
                            sound: i,
                            index: p++,
                            metadata: r
                        }), n())
                    }), e.on("end", function() {
                        b || 0 !== f.length ? o() : (w.trigger("end"), b = !0)
                    })
                })
            }

            function s() {
                S.off(), w.off(), e.dispose()
            }
            var l = arguments.length <= 2 || void 0 === arguments[2] ? n(3).identity : arguments[2],
                u = arguments.length <= 3 || void 0 === arguments[3] ? 1 : arguments[3],
                c = arguments.length <= 4 || void 0 === arguments[4] ? 0 : arguments[4],
                d = !1,
                p = c,
                h = [],
                f = [],
                g = 1,
                m = !!t,
                v = void 0,
                _ = function() {
                    return v || a(), d || e.resume(), v
                },
                y = !0,
                b = !1,
                w = n(3).assign({
                    shuffle: function() {
                        g = u
                    },
                    unshuffle: function() {
                        return g = 1, f.splice(0, f.length).map(l)
                    },
                    pause: function() {
                        y = !0, d && e.pause()
                    },
                    peek: function() {
                        return e.peek()
                    },
                    resume: function() {
                        y = !1, _().then(o)
                    },
                    isEnded: function() {
                        return e.isEnded() && 0 === f.length
                    }
                }, i),
                x = !0,
                k = !1,
                S = n(3).assign({
                    pause: function() {
                        x = !0
                    },
                    resume: function() {
                        var e = this;
                        x && (x = !1, _().then(function() {
                            for (; !x && h.length;) e.trigger("data", l(h.pop()));
                            k || 0 !== h.length || (e.trigger("end"), k = !0)
                        }))
                    },
                    isEnded: function() {
                        return k
                    }
                }, i);
            return {
                next: w,
                prev: S,
                dispose: s
            }
        }
    },
    1859: function(e, t, n) {
        "use strict";
        var i = n(83).MS_IN_MINUTE,
            r = 15 * i;
        e.exports = n(70).extend({
            defaults: {
                pollingInterval: r
            },
            url: function() {
                return n(3).result(this, "baseUrl")
            },
            parse: function(e) {
                return e
            },
            fetch: function(e) {
                var t = e && e.url || n(3).result(this, "url");
                return t ? n(22).Collection.prototype.fetch.call(this, e) : n(55).defer().done(e && e.success).resolve([])
            },
            bulkFetch: function() {
                return this.fetch()
            },
            setLimit: n(3).noop,
            isFullyPopulated: function() {
                return !1
            },
            startPolling: function() {
                this.isPolling() || this._pollingId || (this._pollingId = window.setInterval(this.fetch.bind(this), this.options.pollingInterval))
            },
            stopPolling: function() {
                window.clearInterval(this._pollingId), this._pollingId = null
            },
            isPolling: function() {
                return !!this._pollingId
            }
        })
    },
    1860: function(e, t) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e) {
            var t = this.items;
            if (t.length <= 1) t.pop();
            else {
                var n = t[t.length - 1];
                t[e] = n, o.call(this, e), t.pop(), n === t[e] && r.call(this, e)
            }
        }

        function r(e) {
            for (var t = this.items, n = this.compare, i = t[e]; e > 0;) {
                var r = l(e),
                    o = t[r];
                if (n(o, i) <= 0) break;
                t[e] = o, e = r
            }
            t[e] = i
        }

        function o(e) {
            for (var t = this.items, n = this.compare, i = t[e]; s(e, t);) {
                var r = u(e),
                    o = r + 1,
                    l = a(o, t) && n(t[o], t[r]) < 0 ? o : r;
                if (n(t[l], i) > 0) break;
                t[e] = t[l], e = l
            }
            t[e] = i
        }

        function a(e, t) {
            return e < t.length
        }

        function s(e, t) {
            return a(u(e), t)
        }

        function l(e) {
            return Math.floor((e - 1) / 2)
        }

        function u(e) {
            return 2 * e + 1
        }

        function c(e, t) {
            return t > e ? -1 : e > t ? 1 : 0
        }
        e.exports = function() {
            function e() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? c : arguments[0];
                n(this, e), this.items = [], this.compare = t
            }
            return e.prototype.enqueue = function(e) {
                r.call(this, this.items.push(e) - 1)
            }, e.prototype.dequeue = function() {
                var e = this.items[0];
                return i.call(this, 0), e
            }, e.prototype.remove = function(e) {
                var t = this.items.indexOf(e);
                return 0 > t ? !1 : (i.call(this, t), !0)
            }, e.prototype.clear = function() {
                this.items = []
            }, e.prototype.getLength = function() {
                return this.items.length
            }, e
        }()
    },
    1861: function(e, t, n) {
        "use strict";

        function i() {
            this.setDirty(!0)
        }
        e.exports = n(390).extend({
            className: "g-box-full sceneLayer",
            addNode: function(e) {
                var t = e[0],
                    r = n(3).assign({
                        el: this.el,
                        scale: this.scale
                    }, e[1]),
                    o = new t(r);
                o.className && this.$el.addClass(o.className), this.addSubview(o).on("dirty", i, this).render()
            },
            onCanvasResize: function() {
                n(3).invoke(this.subviews, "onResize")
            },
            setDirty: function(e) {
                (this.isDirty = e) && this.trigger("dirty")
            },
            update: function() {
                if (!this.disposed && this.isDirty) {
                    var e, t, n = !1;
                    for (this.context.clearRect(0, 0, this.el.width, this.el.height), e = 0; t = this.subviews[e]; ++e) t.draw(), n = n || t.isDirty;
                    this.setDirty(n)
                }
            }
        })
    },
    1862: function(e, t, n) {
        "use strict";

        function i() {
            r.call(this)
        }

        function r() {
            this._raf || (this._raf = window.requestAnimationFrame(this.update))
        }
        e.exports = n(181).extend([n(22).Events, {
            _layers: null,
            _raf: null,
            initialize: function() {
                this._layers = [], this.update = this.update.bind(this)
            },
            teardown: function() {
                window.cancelAnimationFrame(this._raf), this._raf = null;
                for (var e; e = this._layers.pop();) this.stopListening(e)
            },
            getLayers: function() {
                return this._layers
            },
            addLayer: function(e) {
                this._layers.push(e), this.listenTo(e, "dirty", i), e.isDirty && r.call(this)
            },
            update: function() {
                this._raf = null;
                var e, t;
                for (e = 0; t = this._layers[e]; ++e) t.isDirty && t.update()
            }
        }])
    },
    1863: function(e, t, n) {
        "use strict";

        function i() {
            var e = n(54).get("me"),
                t = r(e.getConsumerPlan()),
                i = r(e.getCreatorPlan()),
                o = n(1820).or(t, i);
            return "number" == typeof o && n(139).set(n(3).assign({}, f, {
                value: o,
                expirationInDays: 30
            })), o
        }

        function r(e) {
            var t = 0;
            switch (e) {
                case p:
                case u:
                    t = 16;
                    break;
                case h:
                case c:
                    t = 32;
                    break;
                case a:
                    t = 64;
                    break;
                case s:
                case d:
                case l:
                    t = 0
            }
            return t
        }
        var o = n(77).productIds,
            a = o.CONSUMER_SUBSCRIPTION_HIGH_TIER,
            s = o.CONSUMER_SUBSCRIPTION_FREE,
            l = o.CREATOR_SUBSCRIPTION_FREE,
            u = o.CREATOR_SUBSCRIPTION_PRO,
            c = o.CREATOR_SUBSCRIPTION_PRO_UNLIMITED,
            d = o.CREATOR_GIFT_FREE,
            p = o.CREATOR_GIFT_PRO,
            h = o.CREATOR_GIFT_PRO_UNLIMITED,
            f = {
                name: "ja",
                domainStrict: !1,
                secure: !1
            };
        e.exports = {
            _subsCookie: null,
            initialize: function() {
                var e = this;
                n(61).isLoggedIn() && (this._subsCookie = i()), n(56).once("connect:hasUserData", function() {
                    e._subsCookie = i()
                }), n(56).once("connect:logout", function() {
                    n(139).unset(f), e._subsCookie = null
                })
            }
        }
    },
    1864: function(e, t, n) {
        "use strict";
        e.exports = {
            include: function() {
                var e = n(54).get("privacy_settings"),
                    t = window._comscore = window._comscore || [];
                t.push({
                    c1: "2",
                    c2: "16601931",
                    cs_ucfr: e.isOptedInToAnalytics() ? "1" : "0"
                }), n(131).insertScript("https://sb.scorecardresearch.com/beacon.js", {
                    removeAfterLoad: !0
                })
            }
        }
    },
    1865: function(e, t, n) {
        "use strict";
        e.exports = {
            include: function() {
                window._qoptions = {
                    qacct: "p-47_zcqmJsLHXQ"
                }, n(131).insertScript("//secure.quantserve.com/quant.js")
            }
        }
    },
    1866: function(e, t, n) {
        "use strict";
        var i = "//secure-assets.rubiconproject.com/utils/xapi/multi-sync.js",
            r = "rubicon_last_sync",
            o = {
                name: r,
                value: "synced",
                expirationInDays: 1,
                secure: !0
            },
            a = function(e) {
                return n(3).contains(n(89).monetizableCountryCodes(), e.get("country_code"))
            };
        e.exports = {
            include: function() {
                var e = n(54).get("geoip"),
                    t = n(139).get(r),
                    s = n(54).get("me").getPerk("adFree"),
                    l = n(106).doNotTrack;
                if (!l && !s && !t && a(e)) {
                    var u = {
                        "data-partner": n(54).get("rubiconPartnerCode"),
                        "data-region": e.get("region"),
                        "data-country": e.get("country_code"),
                        "data-endpoint": "eu"
                    };
                    return n(131).insertSandboxedScript(i, n(3).omit(u, n(3).isUndefined)).then(function() {
                        return n(139).set(o)
                    }, function(e) {
                        return !1
                    })
                }
            }
        }
    },
    1867: function(e, t, n) {
        "use strict";
        var i = n(103).INITIAL,
            r = n(103).CURRENT_COMMENT,
            o = n(103).CURRENT_TIMESTAMP,
            a = n(103).ACTIVE_TIMESTAMP,
            s = 300,
            l = 3e3,
            u = 1e3,
            c = function() {
                this.setup.apply(this, arguments)
            };
        c.extend = n(22).Model.extend, n(3).assign(c.prototype, n(22).Events, {
            constructor: c,
            currentComment: null,
            activeTimestamp: null,
            currentTimestamp: null,
            commentQuotaTimeout: null,
            commentQuotaExceeded: !0,
            commentIntervalTimeout: null,
            commentIntervalExceeded: !0,
            currentState: i,
            interactingWithComments: !1,
            setup: function(e, t, s) {
                this.collection = new(n(565))(null, {
                    sound_id: e,
                    secret_token: s
                }), this.listenTo(this, i, this.onInitialState).listenTo(this, r, this.onCurrentComment).listenTo(this, o, this.onCurrentTimestamp).listenTo(this, a, this.onActiveTimestamp), this.sound = new(n(67))({
                    id: e,
                    resource_id: t
                }), this.listenTo(this.sound, "time", this.onAudioTime)
            },
            dispose: function() {
                this.stopListening(), this.sound.release(), this.collection.release()
            },
            onInitialState: function() {
                this.activeTimestamp = null, this.currentComment = null, this.currentTimestamp = null
            },
            onCurrentComment: function(e, t) {
                this.activeTimestamp = null, this.currentComment = t, this.currentTimestamp = null
            },
            onCurrentTimestamp: function(e) {
                this.activeTimestamp = null, this.currentComment = null, this.currentTimestamp = e
            },
            onActiveTimestamp: function(e) {
                this.activeTimestamp = e, this.currentComment = null, this.currentTimestamp = null
            },
            goToState: function(e) {
                var t = this.canGoToState.apply(this, arguments);
                return t && (this.currentState = e, this.trigger.apply(this, arguments)), t
            },
            canGoToState: function(e) {
                var t = this.activeTimestamp && this.currentState === a;
                switch (e) {
                    case o:
                        return !t;
                    case r:
                        return this.commentIntervalExceeded && arguments[1] !== this.currentComment && !t;
                    case i:
                        return !0;
                    case a:
                        var n = arguments[1];
                        return n !== this.activeTimestamp && n <= this.sound.getMediaDuration();
                    default:
                        return !1
                }
            },
            onAudioTime: n(3).throttle(function(e) {
                var t = this;
                if (!this.disposed) {
                    var n, i = e.sound.currentTime(),
                        a = window;
                    !this.interactingWithComments && this.sound.isPlaying() && (n = this.collection.getCommentAtTimestamp(i, s), n ? this.goToState(r, i, n) && (a.clearTimeout(this.commentIntervalTimeout), this.commentIntervalExceeded = !1, a.setTimeout(function() {
                        t.commentIntervalExceeded = !0
                    }, u), a.clearTimeout(this.commentQuotaTimeout), this.commentQuotaExceeded = !1, this.commentQuotaTimeout = a.setTimeout(function() {
                        t.commentQuotaExceeded = !0, t.onAudioTime(e)
                    }, l)) : this.commentQuotaExceeded && this.goToState(o, i))
                }
            }, s)
        }), e.exports = n(616).applyTo(c, {
            onCleanup: function(e) {
                e.dispose()
            },
            cleanupInstantly: !0,
            hashFn: function(e) {
                return e
            }
        })
    },
    1868: function(e, t, n) {
        (function(t) {
            "use strict";
            var i = n(3).noop;
            e.exports = function() {
                return n(34), n(35), t.datepicker.setDefaults(n(50).getDatePickerLocaleData()),
                    t.extend(t.datepicker, {
                        _updateDatepickerOriginalMethod: t.datepicker._updateDatepicker,
                        _updateDatepicker: function(e) {
                            this._updateDatepickerOriginalMethod(e);
                            var n = t.datepicker._get(e, "onAfterRender");
                            n && n.apply(this, [e])
                        },
                        _updatePosition: function(e) {
                            if (e) {
                                t.datepicker._lastInput = null;
                                var n = t.datepicker._setDateFromField;
                                t.datepicker._setDateFromField = i, t.datepicker._showDatepicker(e), t.datepicker._setDateFromField = n
                            }
                        }
                    }), t.datepicker
            }()
        }).call(t, n(1))
    },
    1869: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                function t(e) {
                    return d = !e && d ? Math.min(1e4, 1.5 * d) : 1e3
                }

                function i(e) {
                    p = window.setTimeout(r, t(e))
                }

                function r() {
                    c = o(e).done(a).fail(s)
                }

                function a(e) {
                    switch (e.status) {
                        case n(335).QUEUED:
                        case n(335).PREPARING:
                            i();
                            break;
                        case n(335).TRANSCODING:
                            i(e.percentage === h), h = e.percentage, l.notify(h);
                            break;
                        case n(335).FINISHED:
                            l.resolve();
                            break;
                        case n(335).NOT_FOUND:
                        case n(335).FAILURE:
                            l.reject()
                    }
                }

                function s(e) {
                    500 === e.status ? i() : l.reject()
                }
                var l = n(55).defer(),
                    u = l.promise(),
                    c = void 0,
                    d = void 0,
                    p = void 0,
                    h = void 0;
                return i(), u.abort = function() {
                    window.clearTimeout(p), c && c.abort()
                }, u
            }

            function r(e) {
                var i = n(615)(function() {
                    return t.ajax({
                        url: "transcodings",
                        type: "POST",
                        data: {
                            uid: e
                        },
                        contentType: "application/json"
                    })
                }, function() {
                    return !0
                }, {
                    maxRetries: a
                });
                return i.abort = i.abort.bind(i), i
            }

            function o(e) {
                return t.getJSON("transcodings/" + e)
            }
            var a = 5;
            e.exports = function(e) {
                var t = void 0,
                    n = r(e),
                    o = n.then(function() {
                        return t = i(e)
                    });
                return o.abort = function() {
                    n.abort(), t && t.abort()
                }, o
            }
        }).call(t, n(1))
    },
    1893: function(e, t, n) {
        "use strict";
        var i = n(22).Events,
            r = n(119).clamp,
            o = n(119).precise,
            a = "volume",
            s = "muted";
        e.exports = function() {
            function e() {
                h.listenTo(n(56), "broadcast:volume", function(e) {
                    var n = e.volume,
                        i = e.muted;
                    return t({
                        volume: n,
                        muted: i,
                        updateRemote: !1
                    })
                }), h.listenTo(n(56), "googleCast:audioHijack", function() {
                    p = !0, h.trigger("change", {
                        volume: h.getVolume(),
                        muted: h.getMuted()
                    })
                }), h.listenTo(n(56), "googleCast:audioRestored", function() {
                    p = !1, h.trigger("change", {
                        volume: h.getVolume(),
                        muted: h.getMuted()
                    })
                })
            }

            function t(e) {
                var t = e.volume,
                    i = void 0 === t ? h.getVolume() : t,
                    f = e.muted,
                    g = void 0 === f ? h.getMuted() : f,
                    m = e.triggers,
                    v = e.updateRemote,
                    _ = void 0 === v ? p : v,
                    y = r(i, 0, 1),
                    b = !!g,
                    w = h.getVolume(),
                    x = h.getMuted();
                !_ || c === y && d === b ? _ || l === y && u === b || (l = y, u = b, h.trigger("change:local", {
                    volume: y,
                    muted: b
                }), m && m.broadcast && (n(121).set(a, o(y, 1)), n(121).set(s, b), n(56).broadcast({
                    excludeThis: !0
                }, "volume", {
                    volume: y,
                    muted: b
                }))) : (c = y, d = b, h.trigger("change:remote", {
                    volume: y,
                    muted: b
                })), (w !== h.getVolume() || x !== h.getMuted()) && h.trigger("change", {
                    volume: y,
                    muted: b
                })
            }
            var l = 1,
                u = !1,
                c = 1,
                d = !1,
                p = !1,
                h = n(3).assign({}, i, {
                    loadFromSettings: function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0],
                            i = n(179) && n(179).size() > 1,
                            r = {
                                storeVolume: n(121).get(a),
                                storeMuted: n(121).get(s)
                            },
                            o = r.storeVolume,
                            l = void 0 === o ? 1 : o,
                            u = r.storeMuted,
                            c = void 0 === u ? !1 : u;
                        t(i || e ? {
                            volume: l,
                            muted: c,
                            updateRemote: !1
                        } : {
                            volume: l || 1,
                            muted: !1,
                            updateRemote: !1
                        })
                    },
                    setVolumeAndMuted: function(e) {
                        var n = e.volume,
                            i = e.muted;
                        t({
                            volume: n,
                            muted: i,
                            triggers: {
                                broadcast: !0
                            }
                        })
                    },
                    updateRemoteVolumeAndMuted: function(e) {
                        var n = e.volume,
                            i = e.muted;
                        t({
                            volume: n,
                            muted: i,
                            updateRemote: !0
                        })
                    },
                    getVolume: function() {
                        return p ? c : l
                    },
                    getMuted: function() {
                        return p ? d : u
                    },
                    changeVolume: function(e) {
                        var t = r(h.getVolume() + e, 0, 1);
                        h.setVolumeAndMuted({
                            volume: t,
                            muted: 0 === t
                        })
                    },
                    toggleMuted: function() {
                        h.setMuted(!h.getMuted())
                    },
                    setMuted: function(e) {
                        h.setVolumeAndMuted({
                            volume: h.getVolume(),
                            muted: e
                        })
                    },
                    setVolume: function(e) {
                        h.setVolumeAndMuted({
                            volume: e,
                            muted: h.getMuted()
                        })
                    },
                    dispose: function() {
                        h.stopListening()
                    }
                });
            return e(), h
        }
    },
    2329: function(e, t) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e() {
                n(this, e), this._listeners = [], this.onSignal = this.onSignal.bind(this)
            }
            return e.prototype.trigger = function() {
                this._listeners.forEach(function(e) {
                    return e()
                })
            }, e.prototype.onSignal = function(e) {
                this._listeners.push(e)
            }, e.prototype.remove = function(e) {
                this._listeners = this._listeners.filter(function(t) {
                    return t !== e
                })
            }, e
        }();
        t.Signal = i
    },
    2330: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n;
        ! function(e) {
            e.GENERAL = "GENERAL", e.AD = "AD"
        }(n = t.PlayerType || (t.PlayerType = {}))
    },
    2374: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".calloutBackground{position:fixed;top:0;left:0;bottom:0;right:0}.calloutBackground.m-hidden{opacity:0}", ""])
    },
    2375: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".callout{position:absolute;top:0;left:0;bottom:0;right:0;display:none}.callout.m-active{display:block}.callout__bubble{position:absolute;background-color:#fff;width:300px;padding:25px;box-sizing:border-box;border-radius:4px;transition:opacity .3s ease-in-out,-webkit-transform .3s ease-in-out;transition:opacity .3s ease-in-out,transform .3s ease-in-out}.callout.m-hidden .callout__bubble{opacity:0;-webkit-transform:translateY(-8px);transform:translateY(-8px)}.callout__bubble::before{content:'';position:absolute;bottom:-8px;left:40px;padding:10px;border-radius:2px;width:0;background-color:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.callout__button{float:right}.callout__title{margin-bottom:10px}.callout__bubble.ui-flipped-bottom::before{bottom:auto;top:-8px}.callout__bubble.ui-flipped-left::before{left:auto;right:40px}.callout.m-hidden .callout__bubble.ui-flipped-bottom{-webkit-transform:translateY(8px);transform:translateY(8px)}.callout__bubble.ui-flipped-bottom{-webkit-transform:translateY(0);transform:translateY(0)}", ""])
    },
    2376: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".l-fixed-fluid{position:relative}.l-fixed-fluid .l-sidebar-left{position:absolute;top:30px;bottom:0;left:0;width:200px}.l-fixed-fluid .l-sidebar-left .l-fixed{width:200px}.l-fixed-fluid .l-main{margin:0 0 0 230px;padding-top:30px}.l-fixed-fluid .l-sidebar-left>.l-footer{position:fixed;bottom:0;width:200px}@media (max-width:1079px){.l-fixed-fluid .l-main{margin-left:220px}}", ""])
    },
    2377: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".l-fluid-fixed{position:relative}.l-fluid-fixed .l-sidebar-right{position:absolute;top:30px;bottom:0;right:0;width:300px}.l-fluid-fixed .l-sidebar-right .l-fixed{width:300px}.l-fluid-fixed .l-sidebar-right .l-footer{position:relative;padding-bottom:80px}.l-fluid-fixed .l-sidebar-right .sidebarModule.mobileApps{margin-bottom:0;border-bottom:none}.l-fluid-fixed .l-main{padding:30px 30px 0 0;margin:0 330px 0 0}@media (max-width:1079px){.l-fluid-fixed .l-main{padding-right:20px;margin-right:320px}}", ""])
    },
    2379: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".l-one-column>.l-main{padding:30px 0}", ""])
    },
    2815: function(e, t, n) {
        "use strict";
        var i, r = n(548),
            o = n(853),
            a = n(315),
            s = n(854),
            l = n(277).toStringTag,
            u = Object.defineProperty;
        i = e.exports = function(e, t) {
            return this instanceof i ? (s.call(this, e.__setData__, e), t = t && o.call(t, "key+value") ? "key+value" : "value", void u(this, "__kind__", a("", t))) : new i(e, t)
        }, r && r(i, s), i.prototype = Object.create(s.prototype, {
            constructor: a(i),
            _resolve: a(function(e) {
                return "value" === this.__kind__ ? this.__list__[e] : [this.__list__[e], this.__list__[e]]
            }),
            toString: a(function() {
                return "[object Set Iterator]"
            })
        }), u(i.prototype, l, a("c", "Set Iterator"))
    },
    3007: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression,
                    c = e.lambda;
                return u((n(52) || t && t.$view || l).call(s, n(1796), {
                    name: "$view",
                    hash: {
                        fixed: null != (a = null != t ? t._options : t) ? a.fixed : a,
                        delay: null != (a = null != t ? t._options : t) ? a.delay : a,
                        $targetEl: null != (a = null != t ? t._options : t) ? a.$targetEl : a,
                        key: "background"
                    },
                    data: o
                })) + '\n\n<div class="callout__bubble">\n  <h2 class="callout__title">' + u(c(null != (a = null != t ? t._options : t) ? a.title : a, t)) + '</h2>\n  <p class="sc-type-small">' + u(c(null != (a = null != t ? t._options : t) ? a.body : a, t)) + '</p>\n  <div class="callout__button">\n    <button type="button" class="sc-button sc-button-cta sc-button-medium">' + u((n(51) || t && t.$t || l).call(s, "OK, got it", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</button>\n  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    3008: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                return '<div class="l-fixed-fluid">\n  <div class="l-sidebar-left">\n\n  </div>\n  <div class="l-main">\n\n  </div>\n</div>\n'
            },
            useData: !0
        })
    },
    3009: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                return '<div class="l-fluid-fixed">\n  <div class="l-main sc-border-light-right">\n\n  </div>\n  <div class="l-sidebar-right">\n\n  </div>\n</div>\n'
            },
            useData: !0
        })
    },
    3413: function(e, t, n) {
        var i = n(2374);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3414: function(e, t, n) {
        var i = n(2375);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3415: function(e, t, n) {
        var i = n(2376);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    }
}); //# sourceMappingURL=http://ent/web-sourcemaps/lib-d1f28e0-0c44bfa-3.js.map