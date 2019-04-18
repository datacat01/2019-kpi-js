webpackJsonp([3], {
    60: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                return n(107).msie && this.isTextarea() && this.options.placeholder
            }

            function r() {
                this.setFieldValue(""), this.getElement("control").focus()
            }

            function o() {
                this.form.triggerApplyAll(this.field)
            }
            e.exports = n(53).extend(n(117), n(217), n(602).withOptions({
                canBeApplied: function(e) {
                    return !e.isTextarea()
                },
                action: function(e) {
                    var t = e.actionOnEnter,
                        n = e.submitFormOnEnter;
                    return t || n && "default"
                }
            }), {
                className: "textfield",
                defaults: {
                    updateOn: "change",
                    validateOn: "change",
                    label: null,
                    labelClass: "",
                    size: "medium",
                    inline: !1,
                    placeholder: null,
                    type: "text",
                    name: "",
                    rows: 5,
                    maxlength: 0,
                    autocomplete: null,
                    autoFocus: !1,
                    autoSelectAll: !1,
                    resizing: "both",
                    submitFormOnEnter: !0,
                    actionOnEnter: "",
                    hintHTML: "",
                    clearButton: !1,
                    applyAllButton: !1
                },
                template: n(3027),
                css: n(230),
                element2selector: {
                    control: ".textfield__input",
                    label: ".textfield__label",
                    wrapper: ".textfield__inputWrapper",
                    validation: ".textfield__validation"
                },
                events: {
                    "change .textfield__input": "onInputKeypressOrChange",
                    "keypress .textfield__input": "onInputKeypressOrChange",
                    "input .textfield__input": "onInputInput",
                    "click .textfield__input": "onInputClick",
                    "click .textfield__clear": r,
                    "click .textfield__applyAll": o,
                    "blur .textfield__input": "setValueAgain"
                },
                setup: function(e) {
                    this.$el.toggleClass("inline", e.inline)
                },
                getValue: function() {
                    return this.getElement("control").val().trim()
                },
                setValue: function(e) {
                    return this.getElement("control").val(e)
                },
                syncRequired: function() {
                    var e = this.options,
                        t = e.label,
                        n = e.placeholder,
                        i = e.showRequiredIndicator,
                        r = this.isRequired(),
                        o = this.getElement("control");
                    if (this.syncRequiredness(this.getElement("label"), this.getElement("control")), !t && n && i) {
                        var a = o.attr("placeholder"),
                            s = /\s\*$/.test(a);
                        r && !s ? o.attr("placeholder", a + " *") : !r && s && o.attr("placeholder", a.replace(/\s\*$/, ""))
                    }
                },
                setValueAgain: function() {
                    this.setValue(this.getValue())
                },
                renderDecorate: function() {
                    var e = this,
                        t = this.options,
                        n = this.getElement("control"),
                        i = this.hasValidation();
                    !t.updateOn || t.updateOn === t.validateOn && i || n.on(t.updateOn, function() {
                        e.setFieldValue(e.getValue())
                    }), t.validateOn && i && n.on(t.validateOn, function() {
                        e.runValidation()
                    }), this.isTextarea() && n.css("resize", this.options.resizing), t.autoSelectAll && n.on("focus", function() {
                        this.setSelectionRange(0, this.value.length)
                    }), t.autoFocus && ! function() {
                        var t = 200;
                        e.whenInserted().done(function() {
                            e.addDeferred(window.setTimeout(function() {
                                return n.focus()
                            }, t))
                        })
                    }(), t.labelClass && this.getElement("label").addClass(t.labelClass), this.syncRequired()
                },
                isTextarea: function() {
                    return "textarea" === this.options.type
                },
                getTemplateData: function(e) {
                    var t = this.options;
                    return e.readOnly = this.getMetaData().readOnly, e.disabled = this.getMetaData().disabled, e.isTextarea = this.isTextarea(), t.label !== !1 && (e._label = t.label || t.placeholder), e
                },
                onInputClick: function(e) {
                    this.getMetaData().readOnly && t(e.target).select()
                },
                onInputKeypressOrChange: function() {
                    i.call(this) && this.onInputChange()
                },
                onInputInput: function() {
                    i.call(this) || this.onInputChange()
                },
                onInputChange: function() {
                    this.getMetaData().isValid || this.markAsValid(), this.isDirty() || this.markDirty()
                },
                onFieldChange: function(e, t) {
                    var i = this.getElement("control");
                    if (i.length) {
                        var r = i.val();
                        if (t !== r && n(3).result(t, "trim") !== r.trim()) try {
                            var o = i.prop("selectionStart");
                            i.val(t), o < r.length && i[0].setSelectionRange(o, o)
                        } catch (a) {
                            return
                        }
                    }
                },
                runValidation: function() {
                    return this.form.set(this.field, this.getValue()), this.validateOwnField()
                }
            })
        }).call(t, n(1))
    },
    71: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = this.getConfiguration(),
                n = t.state,
                i = "pending" === n;
            e || this.$el.text(t[i ? "pendingLabel" : "label"]), this.toggleState("disabled", "disabled" === n).toggleState("pending", i)
        }
        e.exports = n(53).extend(n(117), n(79), {
            defaults: {
                button: null,
                size: "medium",
                responsive: !1,
                buttonArgs: null,
                label: ""
            },
            states: {
                disabled: function(e) {
                    this.$el.attr("disabled", e)
                },
                pending: function(e) {
                    this.$el.toggleClass("sc-pending", e)
                }
            },
            buttonLabels: {
                "default": function() {
                    return this.options.label || this.getConfiguration().label
                }
            },
            setup: function(e) {
                var t = e.button,
                    n = e.buttonArgs;
                this.button = t, this.buttonArgs = n, i.call(this), this.listenTo(this.form, "change:button:" + this.button, this.onConfigChange)
            },
            performAction: function() {
                this.form.performAction(this.getConfiguration().action, this.buttonArgs)
            },
            onClick: function(e) {
                e.preventDefault(), this.performAction()
            },
            onConfigChange: function(e) {
                e.label && this.$el.text(e.label), void 0 !== e.state && i.call(this, e.label)
            },
            getConfiguration: function() {
                return this.form.buttons[this.button]
            }
        })
    },
    73: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                var e = n(3).pluck(this.subviews, "model");
                return this.collection.find(function(t) {
                    return -1 === e.indexOf(this.getSubviewModel(t))
                }, this)
            }

            function r() {
                return this.getDesiredNumItems() - (this.needsReadMoreView() ? 1 : 0)
            }

            function o() {
                var e, t, n = r.call(this);
                if (n)
                    for (e = this.getLength(); e-- > n;) t = this.getListItemView(this.collection.at(e)), t && (this.removeSubview(t), this.removeListItemFromDOM(t, {
                        animations: !1,
                        index: e
                    }))
            }

            function a() {
                return this.hasData() && this.collection && 0 === this.collection.length && this.collection.isFullyPopulated()
            }

            function s(e) {
                return function(t) {
                    return t instanceof e
                }
            }
            var l = n(76).toAttributesString;
            e.exports = n(53).extend({
                emptyTemplate: null,
                defaults: {
                    minDisplay: 0,
                    maxDisplay: 3,
                    inverted: !1,
                    showPlaceholders: !1,
                    showReadMore: !1
                },
                Subview: null,
                subviewArgs: {},
                PlaceholderView: null,
                placeholderViewArgs: null,
                ReadMoreView: null,
                readMoreViewArgs: null,
                listTagName: "ul",
                listClassName: "sc-list-nostyle sc-clearfix",
                itemTagName: "li",
                itemClassName: "",
                animations: {},
                template: function() {
                    return ""
                },
                _isShowingEmpty: !1,
                _listElement: null,
                _desiredLength: null,
                _setup: function(e) {
                    n(53).prototype._setup.call(this, e), this._desiredLength = this.getInitialDesiredLength()
                },
                renderDecorate: function() {
                    this.createListElement() && this.syncItems()
                },
                createListElement: function() {
                    var e, n = this.getListContainer();
                    return n.length && !this._listElement && (e = window.document.createElement(this.listTagName), this.listClassName && (e.className = this.listClassName), n.append(e), this.resetElementCache(), this._listElement = t(e)), this._listElement
                },
                syncItems: function() {
                    var e, t = this.getModelsToRender(),
                        n = this.getLength(),
                        i = Math.min(r.call(this), t.length);
                    if (this.removePlaceholders(), this.removeReadMoreView(), i > n)
                        for (e = n; i > e; ++e) this.createAndInsertListItemView(t[e], -1);
                    else n > i && o.call(this);
                    this.appendPlaceholders(), this.appendReadMoreView()
                },
                appendPlaceholders: function() {
                    if (this.options.showPlaceholders && !this.needsReadMoreView()) {
                        var e, t = this.getLength(),
                            n = r.call(this),
                            i = this.options.showPlaceholders && t < this.options.minDisplay ? n - t : 0;
                        if (i)
                            for (e = this.getLength(); n > e; ++e) this.createAndInsertPlaceholderView()
                    }
                },
                removePlaceholders: function() {
                    var e = this;
                    this.options.showPlaceholders && this.subviews.filter(s(this.PlaceholderView)).forEach(function(t) {
                        e.removeSubview(t), t._dispose()
                    })
                },
                getReadMoreViews: function() {
                    return this.subviews.filter(s(this.ReadMoreView))
                },
                needsReadMoreView: function() {
                    return this.options.showReadMore && this.getModelsToRender().length >= this.getDesiredNumItems()
                },
                appendReadMoreView: function() {
                    var e, t;
                    this.needsReadMoreView() && (e = this.getLength(), t = this.getSubviewModel(this.getModelsToRender()[e]), this.createAndInsertReadMoreView(t, e))
                },
                removeReadMoreView: function() {
                    var e = this;
                    this.options.showReadMore && this.getReadMoreViews().forEach(function(t) {
                        e.removeSubview(t), t._dispose()
                    })
                },
                createAndInsertPlaceholderView: function() {
                    var e = this.addSubview(new this.PlaceholderView(n(3).result(this, "placeholderViewArgs"))).render();
                    this.addListItemToDOM(e)
                },
                createAndInsertReadMoreView: function(e, t) {
                    var i = this.addSubview(new this.ReadMoreView(n(3).assign({
                        alreadyShown: t,
                        Subview: this.Subview,
                        subviewArgs: this.getSubviewArgs(e)
                    }, this.readMoreViewArgs))).render();
                    this.addListItemToDOM(i)
                },
                getInitialDesiredLength: function() {
                    return Math.max(this.options.minDisplay, this.options.maxDisplay) || 1 / 0
                },
                getDesiredNumItems: function() {
                    return this._desiredLength
                },
                getLength: function() {
                    return this.getListItemViews().length
                },
                setDisplayedItems: function(e) {
                    e = Math.min(e, this.options.maxDisplay || 1 / 0), e !== this._desiredLength && (this._desiredLength = e, this.syncItems())
                },
                _teardown: function() {
                    this._listElement && (this._listElement.remove(), this._listElement = null), n(53).prototype._teardown.call(this)
                },
                getModelsToRender: function() {
                    return this.collection.models
                },
                createAndInsertListItemView: function(e, t) {
                    var i = this.addListItemSubview(e);
                    i.render(), this.addListItemToDOM(i, n(3).isNumber(t) ? t : -1), o.call(this)
                },
                getTemplate: function(e) {
                    var t = this.getEmptyTemplate();
                    return t && this.useEmptyTemplate() ? t : n(53).prototype.getTemplate.apply(this, arguments)
                },
                getEmptyTemplate: function() {
                    return this.emptyTemplate
                },
                useEmptyTemplate: function() {
                    return a.call(this)
                },
                getListContainer: function() {
                    return this.$el
                },
                getListElement: function() {
                    return this._listElement || t()
                },
                getListItemView: function(e) {
                    var t = this.getSubviewModel(e);
                    return n(3).find(this.subviews, function(e) {
                        return e.model === t
                    })
                },
                getListItemViews: function() {
                    return this.subviews.filter(s(this.Subview))
                },
                getListItemViewByScrollOffset: function(e) {
                    var t, i;
                    return n(3).find(this.subviews, function(n) {
                        return n.$el.is(":visible") ? (t = n.$el.outerHeight(), i = n.$el.position().top + e - t / 2, e >= i && i + t > e) : !1
                    })
                },
                getSubviewArgs: function(e) {
                    return n(3).defaults({
                        resource_id: e.resource_id,
                        resource_type: e.resource_type
                    }, this.subviewArgs)
                },
                getSubviewModel: n(3).identity,
                getListItemAttributesData: function(e) {
                    return e.model ? e.model.toJSON() : {}
                },
                getListItemAttributes: function() {
                    return {}
                },
                getListItemAttributesString: function(e) {
                    var t = this.getListItemAttributes(e);
                    return new(n(20).SafeString)(l(t))
                },
                onAdd: function(e, t, n) {
                    if (!this.disposed) {
                        var i = t.indexOf(e),
                            o = r.call(this),
                            a = i >= 0 && o > i || 0 > i && this.collection.length <= o;
                        this.removePlaceholders(), this.removeReadMoreView(), a && this.createAndInsertListItemView(e, i), this.appendPlaceholders(), this.appendReadMoreView()
                    }
                },
                onRemove: function(e, t, n) {
                    if (!this.disposed) {
                        var i = this.getListItemView(e);
                        i && (this.removePlaceholders(), this.removeReadMoreView(), this.removeSubview(i), this.removeListItemFromDOM(i, n.index), this.appendPlaceholders(), this.appendReadMoreView())
                    }
                },
                onCollectionChange: function(e, t) {
                    var i = a.call(this);
                    n(53).prototype.onCollectionChange.apply(this, arguments), this._isShowingEmpty !== i && this.rerender(), this._isShowingEmpty = i
                },
                addListItemSubview: function(e) {
                    var t = this.getSubviewModel(e),
                        n = this.getSubviewArgs(t);
                    return this.addSubview(new this.Subview(n))
                },
                getListItemViewByEvent: function(e) {
                    var i, r = t(e.target).closest(this.getListItemSelector());
                    return r.length && (i = n(3).find(this.subviews, function(e) {
                        return e.el === r.children()[0]
                    })), i
                },
                getListItemSelector: function() {
                    return "." + this.itemClassName.trim().split(/\s+/).join(".")
                },
                createSubviewWrapper: function(e) {
                    var n, i = this.getListItemAttributesString(this.getListItemAttributesData(e));
                    return i = i.toString().length ? " " + i : "", n = t("<" + this.itemTagName + ' class="' + this.itemClassName + '"' + i + ">")
                },
                getSubviewWrapper: function(e) {
                    return e.$el.parent()
                },
                getSubviewInWrapper: function(e) {
                    return n(3).find(this.subviews, function(t) {
                        return t.$el.parent().is(e)
                    })
                },
                addListItemToDOM: function(e, t) {
                    var n, i, r = this.getListElement(),
                        o = this.getSubviewWrapper(e),
                        a = this.options.inverted;
                    o.length || (o = this.createSubviewWrapper(e), o.append(e.el)), -1 === t || t >= this.getLength() - 1 || void 0 === t ? r[a ? "prepend" : "append"](o) : 0 === t ? r[a ? "append" : "prepend"](o) : (i = this.getListItemView(this.collection.at(t - 1)), i && (n = this.getSubviewWrapper(i), o[a ? "insertBefore" : "insertAfter"](n))), this.resetElementCache()
                },
                removeListItemFromDOM: function(e, t) {
                    var n = this,
                        o = this.getSubviewWrapper(e),
                        a = r.call(this),
                        s = !t || t.animations !== !1,
                        l = function() {
                            var t = -1;
                            o.detach(), e._dispose();
                            var r = !n._disposed && a && a <= n.collection.length && n.getLength() < a;
                            if (r) {
                                var s = i.call(n),
                                    l = n.addListItemSubview(s);
                                l.render(), n.addListItemToDOM(l, t)
                            }
                        };
                    s && this.animations.remove ? this.addDeferred(window.setTimeout(o.fadeOut.bind(o, "slow", l), this.animations.remove.delay)) : l(), this.resetElementCache()
                },
                detachSubviewFromDOM: function(e) {
                    this.getSubviewWrapper(e).detach()
                },
                appendDOMElement: function(e) {
                    var t = this.getListContainer();
                    t && t[this.options.inverted ? "prepend" : "append"](e), this.resetElementCache()
                },
                getCollectionData: function() {
                    return []
                }
            })
        }).call(t, n(1))
    },
    79: function(e, t, n) {
        "use strict";

        function i() {
            var e = this,
                t = this.options.allPossibleLabels;
            t && ! function() {
                var n = a("span", "sc-button-alt-labels");
                ["sc-button-label-default", "sc-button-label-hover"].map(function(e) {
                    return a("span", e)
                }).concat(t.map(function(e) {
                    return a("span", "sc-button-label-alt", String(e))
                })).forEach(function(e) {
                    n.appendChild(e)
                }), e.el.appendChild(n)
            }()
        }

        function r(e, t) {
            if ("default" === e && this.options[t]) return this.options[t];
            var i = this.buttonLabels[e],
                r = n(3).isFunction(i) ? i.call(this) : i;
            return o.call(this, r, t)
        }

        function o(e, t) {
            return n(3).isObject(e) ? e instanceof n(20).SafeString ? e.toString() : n(3).isFunction(e[t]) ? e[t].call(this).toString() : e[t].toString() : e
        }

        function a(e, t, n) {
            var i = window.document.createElement(e);
            return i.className = t, n && (i.innerHTML = n), i
        }
        var s = ["tiny", "small", "medium", "large", "xlarge"];
        e.exports = new(n(21))({
            merge: {
                defaults: {
                    disabled: !1,
                    size: "small",
                    text_only: !1,
                    icon_only: !1,
                    lightFg: !1,
                    transparent: !1,
                    noStyle: !1,
                    responsive: !0,
                    title: void 0,
                    isScButton: !0,
                    text: null,
                    translucent: !1,
                    stretchIcon: !1,
                    allPossibleLabels: null,
                    selectedClass: null,
                    dataTestId: ""
                },
                states: {
                    active: function(e) {
                        this.$el.toggleClass(this.options.isScButton ? "sc-button-active" : "active", e)
                    },
                    disabled: function(e) {
                        this.$el.css("pointer-events", e ? "none" : "auto").attr("disabled", e)
                    },
                    pending: "sc-pending",
                    selected: function(e) {
                        var t = e ? "selected" : "default",
                            n = this.options,
                            i = n.selectedClass,
                            r = n.isScButton;
                        this.$el.toggleClass(i || (r ? "sc-button-selected" : "selected"), e), this.updateButton(t)
                    }
                },
                events: {
                    "click.button": "onClick"
                },
                buttonLabels: {},
                element2selector: {
                    visibleLabels: ".sc-button-label-default,.sc-button-label-hover"
                }
            },
            defaults: {
                tagName: "button",
                attributes: {
                    type: "button"
                },
                isButtonSelected: n(3).constant(!1),
                onClick: n(3).noop,
                template: function() {
                    return ""
                },
                loadingTemplate: function() {
                    return this.getButtonText("default")
                },
                getButtonText: function(e) {
                    return r.call(this, e, "text")
                },
                getButtonTitle: function(e) {
                    return r.call(this, e, "title")
                },
                hasSelectedText: function() {
                    return !!this.getButtonText("selected")
                },
                updateButton: function(e) {
                    var t = this.getButtonText(e);
                    t && (this.$el.attr("title", this.getButtonTitle(e) || ""), this.options.allPossibleLabels ? this.getElement("visibleLabels").html(t) : this.$el.html(t && String(t)))
                }
            },
            before: {
                setup: function(e) {
                    var t = e.responsive,
                        n = e.text_only,
                        i = e.isScButton,
                        r = e.disabled,
                        o = e.size,
                        a = e.icon_only,
                        l = e.lightFg,
                        u = e.noStyle,
                        c = e.translucent,
                        d = e.stretchIcon,
                        p = e.transparent,
                        h = (e.visual, e.dataTestId);
                    t = t && !n, i && (this.el.className = (n ? "" : this.el.className + " ") + "sc-button"), c && (this.el.className += " sc-button-translucent"), this.$el.attr("tabIndex", 0), this.toggleState("disabled", r), i && (-1 !== s.indexOf(o) && this.$el.addClass("sc-button-" + o), this.$el.toggleClass("sc-button-icon", a).toggleClass("sc-button-lightfg", l).toggleClass("sc-button-nostyle", u).toggleClass("sc-button-responsive", t).toggleClass("sc-button-stretch-icon", d).toggleClass("sc-button-transparent", p)), h && this.$el.attr("data-test-id", h)
                }
            },
            after: {
                renderDecorate: function() {
                    i.call(this);
                    var e = this.isButtonSelected();
                    this.updateButton(e ? "selected" : "default"), this.hasSelectedText() && this.toggleState("selected", !!this.isButtonSelected(), !0)
                }
            }
        })
    },
    81: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                return !this.collection.isFullyPopulated() && this.getLength() < this.getDesiredNumItems()
            }

            function r() {
                var e = this.collection,
                    t = this.getModelsToRender().length,
                    n = this.options.maxDisplay || 1 / 0,
                    i = this.getLength(),
                    r = this.options.showReadMore ? this.getReadMoreViews().length : 0;
                return i + r >= n || i === t && e.isFullyPopulated()
            }

            function o() {
                a.call(this, !1), this.removeThrobber(), s.call(this)
            }

            function a(e) {
                var t, i;
                this._scrollListenersOn !== e && (t = e ? "on" : "off", this.options.fullPageList ? n(94)[t]("scroll:debounced", this.checkScrollPosition, this) : (i = this.getScrollableContainer()) && i[t]("scroll", this.checkScrollPositionDebounced), this._scrollListenersOn = e)
            }

            function s() {
                var e = this.subviews.endOfList;
                if (!e && this.options.showEndView && this.getModelsToRender().length) {
                    var t = this.addSubview(new this.EndOfListView, "endOfList").render();
                    this.appendDOMElement(t.el)
                }
            }

            function l() {
                var e = this.subviews.endOfList;
                e && (e._dispose(), this.removeSubview(e))
            }

            function u() {
                c.call(this)
            }

            function c() {
                a.call(this, !1), l.call(this), this.removeThrobber(), this.setDisplayedItems(this.getInitialDesiredLength()), a.call(this, !0), this.checkScrollPositionDebounced()
            }
            var d = t(window.document);
            e.exports = n(73).extend(n(333), {
                listClassName: "lazyLoadingList__list sc-list-nostyle sc-clearfix",
                defaults: {
                    preloadAt: 200,
                    maxDisplay: 0,
                    fullPageList: !0,
                    showEndView: !1,
                    initialPageSize: 0,
                    pageSize: 10
                },
                EndOfListView: n(1444),
                _lastScrollPosition: 0,
                _scrollListenersOn: !1,
                _setup: function(e) {
                    n(73).prototype._setup.apply(this, arguments), this.listenTo(this.collection, "shuffled", this.onCollectionShuffle).listenTo(this.collection, "filterChanged", u), this.$el.addClass("lazyLoadingList"), this.checkScrollPositionDebounced = n(3).debounce(this.checkScrollPosition.bind(this), 400)
                },
                renderDecorate: function() {
                    this.listenTo(n(94), "resize:y:debounced", this.checkScrollPosition), n(73).prototype.renderDecorate.call(this), r.call(this) ? s.call(this) : (this.addThrobber(), a.call(this, !0), this.checkScrollPositionDebounced())
                },
                teardown: function() {
                    this.stopListening(n(94)), a.call(this, !1)
                },
                getInitialDesiredLength: function() {
                    var e = this.options,
                        t = e.maxDisplay,
                        n = e.initialPageSize,
                        i = e.pageSize;
                    return Math.min(t || 1 / 0, n || i)
                },
                onRemove: function() {
                    this.disposed || (n(73).prototype.onRemove.apply(this, arguments), r.call(this) || a.call(this, !0), this.checkScrollPositionDebounced({
                        forceCheck: !0
                    }))
                },
                onCollectionReset: function() {
                    this.disposed || (c.call(this), this.rerender())
                },
                onCollectionShuffle: function() {
                    this.checkScrollPosition({
                        forceCheck: !0
                    })
                },
                getScrollableContainer: function() {
                    return this.options.fullPageList ? d : this.$el
                },
                scrollContainerToPositionOrBottom: function(e) {
                    var t = this.getScrollableContainer();
                    t.scrollTop(e || t.height())
                },
                checkScrollPosition: function(e) {
                    if (!this.disposed) {
                        var t, n, i, r = !1,
                            o = this.getListElement(),
                            a = this.getScrollableContainer(),
                            s = this.options.preloadAt || 0,
                            l = d.scrollTop(),
                            u = this.options.fullPageList,
                            c = a.scrollTop() + (u ? window.innerHeight : 0);
                        u ? this.options.inverted ? r = s >= l : (c >= this._lastScrollPosition || e && e.forceCheck) && (t = o.children().last(), n = t.length ? t.offset() : {
                            top: 0
                        }, i = n && n.top || 0, r = c + s > i) : r = o.height() - a.height() - c < s, r && this.addPage(), this._lastScrollPosition = c
                    }
                },
                addPage: function() {
                    this.setDisplayedItems(this._desiredLength + this.options.pageSize), r.call(this) ? o.call(this) : i.call(this) ? (a.call(this, !1), this.addThrobber(), this.fetchNextPage()) : this.checkScrollPosition()
                },
                afterFetch: function() {
                    this.disposed || (r.call(this) ? o.call(this) : (a.call(this, !0), this.checkScrollPositionDebounced(), this.addThrobber()))
                }
            })
        }).call(t, n(1))
    },
    86: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                return n(3).find(e.dataTransfer.files, function(e) {
                    return c.test(e.type)
                })
            }

            function r(e) {
                return e.dataTransfer.items ? n(3).any(e.dataTransfer.items, function(e) {
                    return "file" === e.kind && c.test(e.type)
                }) : !0
            }

            function o() {
                n(3).bindAll(this, "onDragOver", "onDrop", "onDragEnter"), this.$el.on("dragover", this.onDragOver).on("drop", this.onDrop).on("dragenter", this.onDragEnter).on("dragleave", this.toggleState.bind(this, "dragover", !1))
            }

            function a() {
                var e, t, i = this,
                    r = this.options,
                    o = r.size,
                    a = r.forceSquare,
                    s = r.lazyLoading,
                    l = r.placeholderType,
                    c = this._imageSourceModel,
                    d = this.getElement("image"),
                    p = c.getImageUrl(o),
                    h = c.getPlaceholderUrl(o),
                    f = p && h !== !1,
                    g = s ? u(this.el) : n(55).resolve(),
                    m = g.then(function() {
                        return n(87).load(p).done(function(e) {
                            !i.disposed && s && d.css({
                                "background-image": "url('" + p + "')"
                            }), i._whenLoadedDefer.resolve(e.src)
                        })
                    });
                f ? (this.$el.addClass("sc-artwork " + n(87).getPlaceholderClass(c.toJSON(), {
                    placeholderType: l,
                    forceSquare: a
                })), h && (e = this.$(".image__placeholder"), n(87).load(h).done(function() {
                    n(87).flagCachedImage(h)
                })), t = e ? function() {
                    window.setTimeout(function() {
                        e.remove()
                    }, 500)
                } : n(3).noop, d[0].style.opacity = 0, d.addClass("g-opacity-transition"), m.done(function() {
                    d[0].style.opacity = 1, t(), i.addTimeout(function() {
                        i.disposed || i.toggleState("loaded", !0)
                    }, 500)
                }).fail(function() {
                    i.disposed || (d.css("backgroundImage", ""), e && (e.addClass("g-opacity-transition"), e[0].style.opacity = 0, t()))
                })) : m.done(function() {
                    i.disposed || i.toggleState("loaded", !0)
                })
            }

            function s(e) {
                return (this.isPlaylist || this.isSystemPlaylist) && e === this._imageSourceModel && e.imageProperties && e.get(e.imageProperties.read)
            }
            var l = n(58).trackV0Click,
                u = n(591).whenElementVisible,
                c = /^image\//,
                d = {
                    light: "image__lightOutline",
                    white: "image__whiteOutline",
                    none: "image__noOutline"
                };
            e.exports = n(53).extend(n(185), {
                className: "image",
                template: n(3033),
                css: n(3447),
                loadingTemplate: function() {
                    var e = !this.isPlaylist && !this.isSystemPlaylist || this._imageSourceModel.get("tracks") ? this._imageSourceModel : null;
                    return n(87).markup(e, {
                        src: "",
                        placeholderId: this._imageSourceModel.id,
                        placeholderType: this.options.placeholderType,
                        size: this.options.size,
                        stretch: this.options.stretch
                    })
                },
                defaults: {
                    editable: !1,
                    alwaysShowEditButton: !1,
                    size: 50,
                    stretch: !1,
                    uploadImageAutomatically: !0,
                    zoomable: !1,
                    lazyLoading: !1,
                    allowTrackFallback: !0,
                    forceSquare: !1,
                    boundaryOutlineStyle: "light",
                    placeholderType: "gradient",
                    minSrcSize: 0,
                    maxSrcSize: 1 / 0,
                    onImageRejected: n(3).noop
                },
                events: {
                    click: "onClick",
                    keydown: "onKeydown"
                },
                element2selector: {
                    image: ".image__full",
                    button: ".image__button"
                },
                states: {
                    dragover: "dragover",
                    readOnly: "readOnly",
                    interactive: "interactive",
                    loaded: "m-loaded",
                    customImage: "customImage",
                    alwaysShowEditButton: "alwaysShowEditButton",
                    omitRoundedBorder: "m-omitRoundedBorder",
                    whiteOutline: "m-whiteOutline"
                },
                _whenLoadedDefer: null,
                _displaySize: null,
                _modal: null,
                _imageSourceModel: null,
                _currentImgSrc: null,
                setup: function(e) {
                    var t = e.allowTrackFallback,
                        i = e.stretch,
                        r = e.size,
                        a = e.zoomable,
                        s = e.boundaryOutlineStyle,
                        l = e.resource_type,
                        u = n(3).result(this.model, "getImageResourceInfo");
                    u ? this._imageSourceModel = new u.Model(u.args) : (this._imageSourceModel = this.model, this._imageSourceModel.hold()), this.model = null;
                    var c = this._imageSourceModel,
                        p = [c.imageProperties.read];
                    this._setupDragEvents = n(3).once(o), this.listenTo(c, "imageDataChanged", this.rerender), t && (this.isPlaylist || this.isSystemPlaylist) && p.push("tracks"), "station" === l && (this.options.forceSquare = !0), this._whenLoadedDefer = this.addDeferred(n(55).defer()).done(n(87).flagCachedImage), this._displaySize = i ? "100%" : r, this.el.style.width = this.el.style.height = this.getDisplaySizeForCSS(), a && this.$el.attr("tabindex", 0), this.$el.addClass("m-" + l), "station" === l && 50 >= r && this.$el.addClass("m-smallOverlay"), this.addDataSource(c, {
                        requiredAttributes: p
                    }), this.$el.addClass(d[s])
                },
                onKeydown: function(e) {
                    e.keyCode === n(108).ENTER && this.$el.click()
                },
                missingRequiredData: function(e) {
                    return s.call(this, e.source) ? !1 : n(53).prototype.missingRequiredData.apply(this, arguments)
                },
                shouldViewRerender: function() {
                    return this._imageSourceModel.getImageUrl(this.options.size) !== this._currentImgSrc
                },
                renderDecorate: function() {
                    var e = this._imageSourceModel,
                        t = this.options,
                        i = t.editable,
                        r = t.alwaysShowEditButton,
                        o = t.zoomable,
                        s = t.size,
                        l = !i || !n(54).get("me").owns(e);
                    this.toggleState("readOnly", l).toggleState("alwaysShowEditButton", r).toggleState("customImage", e.hasOwnImage()).toggleState("interactive", o), l || this._setupDragEvents(), this._currentImgSrc = e.getImageUrl(s), a.call(this)
                },
                getTemplateData: function(e) {
                    var t = this._imageSourceModel,
                        i = this.options,
                        r = i.size,
                        o = i.lazyLoading,
                        a = t.getPlaceholderUrl(r),
                        s = o ? a : t.getImageUrl(r),
                        l = !o;
                    return n(3).assign(e, this._imageSourceModel.toJSON(), {
                        src: s,
                        size: r,
                        useResourceUrl: l,
                        placeholderUrl: a,
                        imageChooserText: t.hasOwnImage() ? n(50).t("Update image") : n(50).t("Upload image")
                    })
                },
                getDisplaySizeForCSS: function() {
                    return String(this._displaySize).replace(/(\d+)(%?)/, function(e, t, n) {
                        return t + (n || "px")
                    })
                },
                onClick: function(e) {
                    var i = this.options;
                    if (i.zoomable) {
                        if (t(e.target).closest(this.getElement("button")).length) return !0;
                        e.preventDefault(), this._modal || (this._modal = new(n(1492))({
                            resource_id: i.resource_id,
                            resource_type: i.resource_type,
                            togglerEl: this.el,
                            Subview: n(2048)
                        })), this._modal.open(), l(["image", "zoom", i.resource_type])
                    }
                },
                onDragEnter: function(e) {
                    r(e) && this.toggleState("dragover", !0)
                },
                onDragOver: function() {
                    return !1
                },
                onDrop: function(e) {
                    if (this.toggleState("dragover", !1), !n(54).get("me").isConfirmed()) return n(56).trigger("upload:image:unconfirmed"), !1;
                    var t = i(e),
                        r = this._imageSourceModel;
                    return t && (r.setImageFile(t, "file"), this.options.uploadImageAutomatically && r.uploadImage()), l(["upload", "image", "drag", "file"]), !1
                }
            })
        }).call(t, n(1))
    },
    90: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend(n(600), n(604), {
            className: "checkboxControl",
            defaults: {
                isBlock: !1
            },
            setup: function() {
                this.$el.toggleClass("m-block", this.options.isBlock)
            },
            css: n(3433),
            template: n(553),
            renderDecorate: function() {
                this.syncRequired()
            },
            syncRequired: function() {
                this.syncRequiredness(this.getLabel(), this.getInput())
            },
            isRequired: function() {
                return this.form.isConstraintEnabledForField(this.field, n(149))
            }
        })
    },
    104: function(e, t, n) {
        "use strict";

        function i(e) {
            this.setFieldValue(e), this.validateOwnField()
        }

        function r() {
            this.toggleState("checked", !!this.getFieldValue()), this.toggleState("disabled", !!this.getMetaData().disabled)
        }
        e.exports = n(1442).extend(n(117), n(217), n(604), {
            defaults: {
                onChange: i
            },
            renderDecorate: function() {
                r.call(this)
            },
            onFieldChange: function() {
                r.call(this)
            },
            onDisabledChange: function() {
                r.call(this)
            }
        })
    },
    109: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = this.options.conditionFn,
                n = this.getFieldValue(),
                i = t ? t.call(this, n) : !!n;
            e = e || {}, i !== this.visible && r.call(this, i, e.forceNoAnimation)
        }

        function r(e, t) {
            var n = this.options.animate && !t;
            n ? this[e ? "slideDown" : "slideUp"]() : this.$el.css("display", e ? "" : "none"), this.visible = e
        }
        e.exports = n(53).extend(n(117), n(238).withOptions({
            automatic: !1
        }), {
            className: "section",
            slideInnerSelector: ".section__wrapper",
            defaults: {
                conditionFn: null,
                animate: !0,
                blockContent: null
            },
            visible: null,
            renderDecorate: function() {
                i.call(this, {
                    forceNoAnimation: !0
                })
            },
            onFieldChange: function() {
                i.call(this)
            },
            template: function() {
                return '<div class="section__wrapper">' + this.options.blockContent + "</div>"
            }
        })
    },
    113: function(e, t, n) {
        "use strict";

        function i() {
            this.options.activateOnHover && this.toggleOverlay()
        }
        e.exports = n(99).extend({
            className: "hintButton",
            css: n(1643),
            defaults: {
                activateOnHover: !1,
                size: "small",
                responsive: !1,
                blockContent: "",
                overlayType: "dialog",
                overlayOptions: {
                    relativeElementAnchor: "center bottom",
                    anchor: "left top",
                    offset: "-18 7",
                    width: "320px",
                    smallText: !0
                },
                onHintRead: n(3).noop
            },
            buttonLabels: {
                "default": {
                    text: "",
                    title: n(50).t("Help")
                }
            },
            setup: function(e) {
                n(3).bindAll(this, "onOpen", "onClose", "onReadTimeout"), e.onOpen = this.onOpen, e.onClose = this.onClose, this.events = n(3).assign({
                    mouseenter: i,
                    mouseleave: i
                }, n(99).prototype.events), n(99).prototype.setup.call(this, e)
            },
            onOpen: function() {
                window.clearTimeout(this.readTimeout), this.readTimeout = window.setTimeout(this.onReadTimeout, 500)
            },
            onReadTimeout: function() {
                n(3).isFunction(this.options.onHintRead) && this.options.onHintRead()
            },
            onClose: function() {
                window.clearTimeout(this.readTimeout)
            }
        })
    },
    117: function(e, t, n) {
        "use strict";

        function i(e) {
            this.onValidationChange && this.form.hasConstraintsOwnedBy(this.field) && this.onValidationChange(e)
        }
        e.exports = new(n(21))({
            requirePrototype: n(53).prototype,
            applyTo: function(e) {
                e.defaults = n(3).assign({}, {
                    showValidation: !0,
                    Form: null,
                    field: null,
                    soundIds: null,
                    showRequiredIndicator: !0
                }, e.defaults)
            },
            defaults: {
                getFocusableElement: function() {
                    return this.getElement("control")
                },
                focus: function() {
                    this.getFocusableElement().focus()
                },
                onFieldChange: null,
                onDatasourceChange: function() {
                    this.rerender()
                },
                onDisabledChange: function() {
                    this.rerender()
                },
                syncRequired: n(3).noop,
                getFieldValue: function() {
                    return this.field ? this.form.get(this.field) : void 0
                },
                setFieldValue: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1],
                        n = this.field;
                    n && !this.getMetaData().readOnly && (this.form.set(n, e), t && this.markDirty())
                },
                isRequired: function() {
                    return this.form.isConstraintEnabledForField(this.field, n(66))
                }
            },
            before: {
                setup: function(e) {
                    var t = e.Form,
                        r = e.field,
                        o = e.showValidation;
                    if (this.form = new t({}, e), r) {
                        this.field = r;
                        var a = this.getDatasource();
                        a instanceof n(22).Collection && (this.collection = a, this.collection.hold()), this.listenTo(this.form, "datasourceChange:" + r, this.onDatasourceChange).listenTo(this.form, "disabledChange:" + r, this.onDisabledChange).listenTo(this.form, "syncRequired:" + r, this.syncRequired).listenToFields(r).listenTo(this.form, "validation:" + r, o ? i : n(3).noop)
                    }
                }
            },
            after: {
                dispose: function() {
                    this.form.release(), delete this.form
                },
                renderDecorate: function() {
                    var e = this.options,
                        t = e.field,
                        n = e.showValidation;
                    n && this.form.trigger("validation:" + t, this.getMetaData())
                }
            },
            around: {
                getTemplateData: function(e, t) {
                    return t = e(t) || t, t._form = this.form.toJSON(), t._value = t._form[this.field], t._controlId = n(3).uniqueId("formControl_"), t._resource_id = t._form._resource_id, t._resource_type = t._form._resource_type, t
                }
            },
            isFormControl: !0,
            hasValidation: function() {
                return !0
            },
            isValid: function() {
                return this.field ? this.getMetaData().validity === n(182).VALID : !0
            },
            isInvalid: function() {
                return this.field ? this.getMetaData().validity === n(182).INVALID : !1
            },
            isDirty: function() {
                return this.getMetaData().isDirty
            },
            markDirty: function() {
                this.form.markFieldsDirty(this.field)
            },
            getMetaData: function() {
                return this.form.getFieldMetadata(this.field)
            },
            getDatasource: function() {
                return this.getMetaData().datasource
            },
            validateOwnField: function() {
                return this.form.validate({
                    fields: [this.field]
                })
            },
            resetOwnValidation: function() {
                this.form.resetFieldValidation(this.field)
            },
            syncRequiredness: function(e, t) {
                e.toggleClass("g-required-label", this.isRequired() && this.options.showRequiredIndicator), t.attr("aria-required", this.isRequired())
            },
            scrollToAndFocus: function() {
                this.addDeferred(this.scrollIntoView({
                    position: "top",
                    topOffset: 40
                })).done(this.focus.bind(this))
            },
            listenToFields: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? this.onFieldChange : arguments[1];
                Array.isArray(e) || (e = [e]);
                var i = e.filter(n(3).identity).map(function(e) {
                    return "change:" + e
                }).join(" ");
                return i && this.listenTo(this.form, i, t), this
            }
        })
    },
    120: function(e, t, n) {
        "use strict";

        function i() {
            for (var e, t = this; t;) {
                if (e = t.options.playQueuePriority, null != e) return e;
                t = t._parentView
            }
            return 0
        }
        e.exports = new(n(21))({
            defaults: {
                getQueueSource: function() {
                    return this.collection || this.model && this.model.playlist || this.model
                },
                getSourceInfo: function() {
                    return {}
                },
                getRestoreUrl: function() {
                    return n(22).history ? "/" + n(22).history.getFragment(null, null, !0) : ""
                }
            },
            applyTo: function(e) {
                e.bubbleEvents = n(3).assign(e.bubbleEvents || {}, {
                    requestPlayContext: "onRequestPlayContext"
                })
            },
            _initialSourceReader: null,
            onRequestPlayContext: function(e) {
                var t = this.getQueueSource();
                t && t.containsSound(e.data.sound) && (e.stopPropagation(), n(3).assign(e.data, {
                    source: t,
                    restoreUrl: this.getRestoreUrl(),
                    sourceInfo: this.getSourceInfo()
                }))
            },
            after: {
                renderDecorate: function() {
                    var e = this.getQueueSource();
                    if (e) {
                        var t = i.call(this),
                            r = n(54).get("router").getLayoutInfo(),
                            o = this.getRestoreUrl(),
                            a = {
                                layoutInfo: r,
                                restoreUrl: o,
                                sourceInfo: {}
                            };
                        this._initialSourceReader = n(62).setInitialSource(e, t, a) || null
                    }
                },
                teardown: function() {
                    this._initialSourceReader && (n(62).unsetInitialSource(this._initialSourceReader), this._initialSourceReader = null)
                }
            }
        })
    },
    126: function(e, t, n) {
        "use strict";

        function i(e) {
            this.setFieldValue(e), this.validateOwnField(), this.focus()
        }

        function r() {
            var e = this.getFieldValue(),
                t = null == e && !this.options.showBlank;
            if ("linkMenu" === this.options.style) {
                var n = this.subviews.linkButton;
                n.activeLinkId = t ? s.call(this)[0].value : e, n.updateMenu(), n.updateButton()
            } else t ? this.getElement("control").prop("selectedIndex", 0) : this.getElement("control").val(null === e ? null : String(e))
        }

        function o(e, t) {
            var i = n(3).find(e, function(e) {
                return String(e.value) === String(t)
            });
            return i ? i.value : null
        }

        function a(e) {
            return e.map(function(e) {
                return n(3).assign({}, e, {
                    value: String(e.value)
                })
            })
        }

        function s() {
            var e = this.getMetaData(),
                t = e.datasource;
            return t || []
        }

        function l() {
            if (!this.subviews.linkButton) {
                var e, t = this.options,
                    i = t.size,
                    r = t.plain,
                    o = t.customClassName,
                    a = this.getMetaData(),
                    l = a.groups,
                    d = {};
                if (l) d = {
                    groups: l
                };
                else {
                    var p = s.call(this).map(function(e) {
                        return n(3).defaults({
                            id: e.value,
                            label: String(e.label)
                        }, e)
                    });
                    this.options.showBlank && p.unshift({
                        id: "",
                        label: new u("&nbsp;"),
                        value: ""
                    }), d = {
                        links: p
                    }
                }
                e = new c(n(3).assign({}, d, {
                    customClassName: o,
                    control: this,
                    size: i,
                    plain: r
                })), this.addSubview(e, "linkButton")
            }
            return this.subviews.linkButton
        }
        var u = n(20).SafeString,
            c = (e.exports = n(53).extend(n(117), n(217), n(602).withOptions({
                action: function(e) {
                    var t = e.actionOnEnter;
                    return t
                }
            }), {
                template: n(3026),
                css: n(3441),
                className: "select",
                defaults: {
                    customClassName: "",
                    label: null,
                    labelClass: "",
                    hintHTML: "",
                    showBlank: !0,
                    blankText: "",
                    size: "medium",
                    style: "native",
                    plain: !1,
                    actionOnEnter: ""
                },
                element2selector: {
                    control: ".select__select",
                    label: ".select__labelText",
                    options: "option",
                    validation: ".select__validation"
                },
                setup: function() {
                    n(3).bindAll(this, "onControlChange")
                },
                getTemplateData: function(e) {
                    return e.options = a(s.call(this)), e["style_is_" + this.options.style] = !0, e
                },
                syncRequired: function() {
                    this.syncRequiredness(this.getElement("label"), this.getElement("control"))
                },
                renderDecorate: function() {
                    var e = this.options,
                        t = e.style,
                        n = e.labelClass;
                    if ("linkMenu" === t) {
                        var i = l.call(this);
                        this.$(".select__linkMenuPlaceholder").replaceWith(i.render().el), r.call(this)
                    } else r.call(this), this.getElement("control").on("change", this.onControlChange);
                    this.syncRequired(), n && this.getElement("label").addClass(n)
                },
                onFieldChange: function() {
                    r.call(this)
                },
                onControlChange: function() {
                    var e = this.getElement("control").val(),
                        t = o(s.call(this), e);
                    i.call(this, t)
                }
            }), n(99).extend(n(332), {
                className: "sc-button-dropdown",
                defaults: {
                    isScButton: !0,
                    links: null,
                    groups: null,
                    control: null,
                    size: "medium",
                    plain: !1,
                    customClassName: ""
                },
                activeLinkId: null,
                states: {
                    plain: "sc-button-dropdown-plain"
                },
                setup: function(e) {
                    var t = e.plain,
                        i = e.customClassName;
                    n(99).prototype.setup.apply(this, arguments), this.$el.toggleClass(i), this.toggleState("plain", t)
                },
                getLinkGroups: function() {
                    var e = this.options,
                        t = e.groups,
                        n = e.links;
                    return t || [{
                        links: n
                    }]
                },
                getActiveLinkId: function() {
                    return this.activeLinkId
                },
                getButtonText: function() {
                    var e, t = this,
                        i = this.options,
                        r = i.groups,
                        o = i.links;
                    return r ? r.some(function(i) {
                        return e = n(3).findWhere(i.links, {
                            id: t.activeLinkId
                        })
                    }) : e = n(3).findWhere(o, {
                        id: this.activeLinkId
                    }), (e && e.label || "").toString()
                },
                onLinkClick: function(e) {
                    i.call(this.options.control, e.value), this.toggleOverlay()
                }
            }))
    },
    134: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = this.bubble ? this.bubble("requestPlayContext", {
                    sound: e
                }).data : {},
                n = t.source,
                i = t.restoreUrl,
                r = t.sourceInfo;
            return {
                restoreUrl: i,
                sourceInfo: r || {},
                source: n || e.playlist || e
            }
        }

        function r() {
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

        function o(e) {
            return e && e.hasDataForPlay && !e.hasDataForPlay()
        }
        e.exports = new(n(21))({
            toggleAudible: function(e, t) {
                this[e.isPlaying() ? "pauseAudible" : "playAudible"](e, t)
            },
            playAudible: function(e, t) {
                var a = this,
                    s = r(),
                    l = function() {
                        var r = e.getCurrentSound(),
                            o = i.call(a, r),
                            l = o.source,
                            u = o.restoreUrl,
                            c = o.sourceInfo,
                            d = {
                                restoreUrl: u,
                                sourceInfo: c,
                                layoutInfo: s
                            };
                        n(62).playSource(l, r, d, t)
                    };
                o(e) ? e.fetch().done(l) : l()
            },
            pauseAudible: function(e, t) {
                e.pause(t)
            },
            toggleSource: function(e, t, i) {
                var o = r(),
                    a = {
                        restoreUrl: t,
                        layoutInfo: o,
                        sourceInfo: {}
                    };
                n(62).toggleSource(e, a, i)
            },
            addExplicitQueueItem: function(e) {
                this.createExplicitQueueItems(e).forEach(n(62).injectExplicitQueueItem)
            },
            createExplicitQueueItems: function(e) {
                var t = this,
                    o = r(),
                    a = void 0;
                return e.getSounds().map(function(e) {
                    a || (a = i.call(t, e));
                    var r = a,
                        s = r.source,
                        l = r.restoreUrl,
                        u = r.sourceInfo,
                        c = {
                            restoreUrl: l,
                            layoutInfo: o,
                            sourceInfo: u
                        };
                    return n(62).createExplicitQueueItem(s, e, c)
                })
            }
        })
    },
    136: function(e, t, n) {
        "use strict";

        function i() {
            this.disposed || (this.el.style.opacity = 0)
        }
        var r = n(50).t("Sign in"),
            o = n(50).t("Create a SoundCloud account");
        e.exports = n(53).extend(n(79), {
            className: "g-opacity-transition",
            defaults: {
                size: "medium",
                responsive: !1,
                type: "login",
                redirectRoute: null
            },
            buttonLabels: {
                "default": function() {
                    var e = this.options;
                    return "signup" === e.type ? o : r
                }
            },
            setup: function(e) {
                var t = e.type;
                this.$el.addClass(t + "Button").toggleClass("sc-button-cta", "signup" === t), this.listenTo(n(56), "connect:login", i)
            },
            onClick: function() {
                var e = this.options;
                n(61).login({
                    signup: "signup" === e.type,
                    redirectRoute: e.redirectRoute,
                    context: this.getContextData()
                })
            }
        })
    },
    151: function(e, t, n) {
        "use strict";
        var i = n(76).subview;
        e.exports = n(1449).extend(n(117), n(217), {
            defaults: {
                direction: "horizontal",
                showSublabelsOnSelection: !1
            },
            onFieldChange: function() {
                this.updateSelectedState(), this.resetOwnValidation(), this.validateOwnField()
            },
            getButtonsConfig: function() {
                return this.getDatasource() || []
            },
            buildButtonSublabel: function(e) {
                var t = this.options,
                    r = t.showSublabelsOnSelection,
                    o = t.Form,
                    a = t.field,
                    s = t.resource_id,
                    l = t.resource_type;
                if (e.sublabel) {
                    var u = '<span class="radioGroup__sublabel">' + n(20).Utils.escapeExpression(e.sublabel) + "</span>";
                    return r ? new(n(20).SafeString)(i(n(109), {
                        Form: o,
                        field: a,
                        resource_id: s,
                        resource_type: l,
                        animate: !0,
                        conditionFn: function(t) {
                            return e.value === t
                        },
                        blockContent: u
                    })) : new(n(20).SafeString)(u)
                }
                return ""
            },
            updateSelectedState: function() {
                this.setRadioValue(this.getFieldValue())
            },
            onRadioChanged: function(e) {
                this.setFieldValue(e)
            }
        })
    },
    153: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var o;
                return '    <h4 class="sc-type-medium sc-type-light emptyNetworkPage__subheadline">' + e.escapeExpression((o = null != (o = n.subheaderMessage || (null != t ? t.subheaderMessage : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != t ? t : {}, {
                    name: "subheaderMessage",
                    hash: {},
                    data: r
                }) : o)) + "</h4>\n"
            },
            3: function(e, t, n, i, r) {
                var o, a, s = null != t ? t : {},
                    l = n.helperMissing,
                    u = "function",
                    c = e.escapeExpression;
                return '    <div class="sc-type-h3 emptyNetworkPage__link">\n      <a href="' + c((a = null != (a = n.linkUrl || (null != t ? t.linkUrl : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "linkUrl",
                    hash: {},
                    data: r
                }) : a)) + '" ' + (null != (o = n["if"].call(s, null != t ? t.linkExternal : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + ' class="sc-text-link ">' + c((a = null != (a = n.linkText || (null != t ? t.linkText : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "linkText",
                    hash: {},
                    data: r
                }) : a)) + "</a>\n    </div>\n"
            },
            4: function(e, t, n, i, r) {
                return 'target="_blank"'
            },
            6: function(e, t, n, i, r) {
                var o, a = null != t ? t : {},
                    s = n.helperMissing,
                    l = "function",
                    u = e.escapeExpression;
                return '    <div class="emptyNetworkPage__button">\n      <a href="' + u((o = null != (o = n.buttonUrl || (null != t ? t.buttonUrl : t)) ? o : s, typeof o === l ? o.call(a, {
                    name: "buttonUrl",
                    hash: {},
                    data: r
                }) : o)) + '" class="sc-button sc-button-large sc-button-cta">' + u((o = null != (o = n.buttonText || (null != t ? t.buttonText : t)) ? o : s, typeof o === l ? o.call(a, {
                    name: "buttonText",
                    hash: {},
                    data: r
                }) : o)) + "</a>\n    </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, a, s = null != t ? t : {},
                    l = n.helperMissing,
                    u = "function",
                    c = e.escapeExpression;
                return '<div class="emptyNetworkPage ' + c((a = null != (a = n.emptyPageClass || (null != t ? t.emptyPageClass : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "emptyPageClass",
                    hash: {},
                    data: r
                }) : a)) + '">\n  <div class="emptyNetworkPage__image"></div>\n  <h3 class="sc-type-large emptyNetworkPage__headline">' + c((a = null != (a = n.message || (null != t ? t.message : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "message",
                    hash: {},
                    data: r
                }) : a)) + "</h3>\n" + (null != (o = n["if"].call(s, null != t ? t.subheaderMessage : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n["if"].call(s, null != t ? t.linkUrl : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n["if"].call(s, null != t ? t.buttonUrl : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(6, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "</div>\n"
            },
            useData: !0
        })
    },
    154: function(e, t, n) {
        var i = n(2395);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    169: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend({
            css: n(3451),
            className: "loading",
            defaults: {
                size: "regular",
                dark: !1,
                padded: !0,
                padding: ""
            },
            states: {
                padded: "m-padded",
                dark: "dark"
            },
            setup: function(e) {
                var t = e.size,
                    n = e.dark,
                    i = e.padded,
                    r = e.padding;
                this.$el.addClass(t), this.toggleState("dark", n), r ? this.$el.css({
                    padding: r + " 0"
                }) : this.toggleState("padded", i)
            },
            template: function() {
                return ""
            }
        })
    },
    174: function(e, t, n) {
        "use strict";

        function i() {
            return this.model.getCurrentSound()
        }

        function r() {
            this.disposed || this.toggleState("playing", this.model.isPlaying())
        }

        function o(e) {
            var t = this.getContextData();
            n(58).trackV0Click(["audibleTile", e], {
                click_name: "item_navigation",
                context: n(3).pick(t, ["scope", "attribution"]),
                click_attributes: t.click_attributes,
                click_object: t.urn
            })
        }
        var a = ["like", "startStation", "repost", "addToNextUp", "addToPlaylist", "share", "download"],
            s = "always",
            l = "hover",
            u = "onArtwork",
            c = n(68).withOptions("audibleTile"),
            d = n(186).withOptions({
                getSound: i
            });
        e.exports = n(53).extend(n(185), n(134), d, n(606), c, {
            className: "audibleTile playableTile",
            template: n(3013),
            css: n(1640),
            defaults: {
                showDescription: s,
                showPlayButton: l,
                showActions: l,
                disableNavigation: !1,
                lazyLoadImage: !1,
                isLike: !1,
                type: null,
                darkBackground: !1,
                showReleaseDate: !0,
                uiSize: "normal"
            },
            states: {
                dark: "m-dark",
                playing: "m-playing",
                overlayOpen: "m-overlayOpen",
                largeUI: "m-largeUI",
                navigationDisabled: "m-navigationDisabled"
            },
            element2selector: {
                playButton: ".audibleTile__playButton .sc-button"
            },
            events: {
                "click .audibleTile__artworkLink": "onArtworkClick",
                "click .audibleTile__usernameHeading": "onUsernameClick",
                "click .audibleTile__audibleHeading": "onAudibleClick"
            },
            bubbleEvents: {
                "dropdownButton:toggle": "onOverlayToggled"
            },
            requiredAttributes: ["title", "sharing", "user.username", "user.permalink"],
            setup: function(e) {
                var t = e.darkBackground,
                    n = e.uiSize,
                    i = e.showDescription,
                    o = e.showPlayButton,
                    a = e.showActions,
                    s = e.disableNavigation;
                this.listenTo(this.model, "play pause", r).toggleState("dark", !!t).toggleState("largeUI", "large" === n).toggleState("navigationDisabled", s), this.setShowDescription(i), this.setShowPlayButton(o), this.setShowActions(a), r.call(this)
            },
            getTemplateData: function(e) {
                var t = this.model,
                    i = this.options,
                    r = i.resource_type,
                    o = i.isLike,
                    s = i.uiSize,
                    l = i.showReleaseDate,
                    c = n(370).getActionSet(t, function(e) {
                        return n(3).contains(a, e)
                    }),
                    d = n(370).overflowActions(c, 1, 1),
                    p = d.overflow;
                return e.isSound = "sound" === r, e.isPlaylist = "playlist" === r, e.hasActions = c.length > 0, e.hasLikeAction = n(3).contains(c, "like"), e.hasOverflowActions = p.length > 0, e.overflowActions = p, e.isPrivate = t.isPrivate(), e.isLike = !e.isPrivate && o, e.showReleaseDate = l && e.isPlaylist, e.largeUI = "large" === s, e.tierIndicatorVariant = "large" === s ? "largeArtwork" : "smallArtwork", e.tierIndicatorClassName = "large" === s ? "playableTile__tierIndicatorLarge" : "playableTile__tierIndicatorSmall", this.options.showDescription === u ? (e.descriptionCSS = ["g-type-shrinkwrap-primary", "g-type-shrinkwrap-inline"].join(" "), e.userNameCSS = ["g-type-shrinkwrap-secondary", "g-type-shrinkwrap-inline"].join(" ")) : (e.descriptionCSS = ["sc-link-dark", "sc-type-light", "playableTile__mainHeading", "audibleTile__mainHeading"].join(" "), e.userNameCSS = ["sc-link-light", "playableTile__usernameHeading", "audibleTile__usernameHeading"].join(" ")), e
            },
            setShowDescription: function(e) {
                this.el.setAttribute("data-description", e)
            },
            setShowPlayButton: function(e) {
                this.el.setAttribute("data-playButton", e)
            },
            setShowActions: function(e) {
                this.el.setAttribute("data-actions", e)
            },
            onArtworkClick: function(e) {
                if (this.getState("navigationDisabled")) return e.preventDefault(), void e.stopPropagation();
                var t = this.bubble("audibleTile:artwork:click", {
                        source: this
                    }),
                    n = t.data;
                return n.preventDefault ? void e.preventDefault() : void o.call(this, "audible")
            },
            onUsernameClick: function() {
                o.call(this, "username")
            },
            onAudibleClick: function() {
                o.call(this, "audible")
            },
            onOverlayToggled: function(e) {
                this.toggleState("overlayOpen", e.data.isOpened)
            },
            onContextRequest: function(e) {
                this.isPlaylist && (e.data.playlistModel = this.model)
            }
        })
    },
    187: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e.limit,
                n = e.resource_id,
                i = e.resource_type;
            return {
                userId: n,
                resource_id: n,
                resource_type: i,
                limit: t
            }
        }
        var r = {
            likes: {
                CollectionClass: n(232).getFilterClass(),
                collectionArgs: i,
                Subview: n(174),
                subviewArgs: {
                    lazyLoadImage: !0,
                    type: "like"
                },
                ReadMoreView: n(1943),
                getSubviewModel: function(e) {
                    return e.getAudible()
                },
                getRestoreUrl: function() {
                    return n(59).getRoute("youNetwork", null, "likes")
                }
            },
            playlists: {
                CollectionClass: n(569),
                collectionArgs: i,
                Subview: n(174),
                subviewArgs: {
                    lazyLoadImage: !0,
                    type: "playlist"
                },
                ReadMoreView: n(1471)
            },
            "liked-and-owned-playlists": {
                CollectionClass: n(1372),
                collectionArgs: i,
                Subview: n(174),
                subviewArgs: {
                    lazyLoadImage: !0,
                    type: "liked-and-owned-playlists"
                },
                ReadMoreView: n(1471),
                getSubviewModel: function(e) {
                    return e.getAudible()
                }
            },
            "liked-albums": {
                CollectionClass: n(1371),
                collectionArgs: i,
                Subview: n(174),
                subviewArgs: {
                    lazyLoadImage: !0,
                    type: "liked-albums"
                },
                ReadMoreView: n(1942),
                getSubviewModel: function(e) {
                    return e.getAudible()
                }
            },
            reposters: {
                playable: !1,
                CollectionClass: n(477),
                collectionArgs: function(e) {
                    var t = e.limit,
                        n = e.resource_id,
                        i = e.resource_type;
                    return {
                        type: "reposters",
                        resource_id: n,
                        resource_type: i,
                        limit: t
                    }
                },
                Subview: n(275)
            },
            likers: {
                playable: !1,
                CollectionClass: n(477),
                collectionArgs: function(e) {
                    var t = e.limit,
                        n = e.resource_id,
                        i = e.resource_type;
                    return {
                        type: "likers",
                        resource_id: n,
                        resource_type: i,
                        limit: t
                    }
                },
                Subview: n(275)
            },
            followings: {
                playable: !1,
                CollectionClass: n(484).getFilterClass(),
                collectionArgs: i,
                Subview: n(275),
                ReadMoreView: n(1470)
            },
            followers: {
                playable: !1,
                CollectionClass: n(483),
                collectionArgs: i,
                Subview: n(275),
                ReadMoreView: n(1470)
            },
            "liked-stations": {
                playable: !1,
                CollectionClass: n(1363).getFilterClass(),
                collectionArgs: i,
                Subview: n(536),
                ReadMoreView: n(1944)
            },
            "chart-tracks": {
                CollectionClass: n(564),
                collectionArgs: function(e) {
                    var t = e.chartKind,
                        n = e.genre;
                    return {
                        chartKind: t,
                        genre: n
                    }
                },
                Subview: n(1921),
                subviewArgs: {},
                getRestoreUrl: function() {
                    var e = this.options,
                        t = e.chartKind,
                        i = e.genre;
                    return n(59).getRoute("charts", t, i)
                }
            },
            "featured-tracks": {
                CollectionClass: n(1359),
                collectionArgs: function(e) {
                    var t = e.pageName;
                    return {
                        pageName: t
                    }
                },
                Subview: n(174),
                subviewArgs: {}
            },
            "related-sounds": {
                CollectionClass: n(359),
                collectionArgs: function(e) {
                    var t = e.resource_id,
                        n = e.resource_type;
                    return {
                        resource_id: t,
                        resource_type: n
                    }
                },
                Subview: n(174),
                subviewArgs: {
                    lazyLoadImage: !0
                },
                additionalDataSources: function(e) {
                    var t = e.resource_id;
                    return {
                        sourceSound: new(n(67))({
                            resource_id: t
                        })
                    }
                },
                getRestoreUrl: function() {
                    return n(59).getRoute("listenNetwork", this._additionalSources.sourceSound, "related")
                }
            },
            "recommended-stations": {
                playable: !1,
                CollectionClass: n(1365),
                collectionArgs: function(e) {
                    var t = e.stationType;
                    return {
                        type: t
                    }
                },
                Subview: n(536)
            },
            "play-history-contexts": {
                playable: !1,
                CollectionClass: n(358).getFilterClass(),
                collectionArgs: i,
                Subview: n(1934)
            },
            "artist-station-tracks": {
                CollectionClass: n(257),
                collectionArgs: i,
                Subview: n(174),
                getRestoreUrl: function() {
                    var e = n(132).instances.get(this.options.resource_id);
                    return e ? n(59).getRoute("station", e) : ""
                }
            },
            "artist-profile-tracks": {
                CollectionClass: n(233),
                collectionArgs: function(e) {
                    var t = e.userId;
                    return {
                        userId: t,
                        keepBlocked: !1
                    }
                },
                Subview: n(174),
                getRestoreUrl: function() {
                    var e = n(63).instances.get(this.options.userId);
                    return e ? n(59).getRoute("user", e, "tracks") : ""
                }
            },
            "track-search-results": {
                CollectionClass: n(322),
                collectionArgs: function(e) {
                    var t = e.searchParams;
                    return {
                        category: "sounds",
                        params: t
                    }
                },
                Subview: n(2142),
                getRestoreUrl: function() {
                    return n(59).getRoute("search", "sounds", this.options.searchParams.q)
                }
            }
        };
        e.exports = n(81).extend(n(120), {
            css: n(3424),
            className: "badgeList",
            itemClassName: "badgeList__item",
            defaults: {
                type: "likes",
                limit: 6,
                chartKind: n(172).defaultKind,
                genre: n(172).defaultGenre,
                stationType: null,
                emptyTemplate: null,
                searchParams: null,
                userId: null
            },
            loadingViewArgs: {
                padded: !1
            },
            PlaceholderView: n(1871),
            setup: function(e) {
                var t = this,
                    i = r[e.type];
                this.Subview = i.Subview, this.subviewArgs = i.subviewArgs, this.ReadMoreView = i.ReadMoreView, i.getSubviewModel && (this.getSubviewModel = i.getSubviewModel);
                var o = i.collectionArgs(e);
                this.collection = new i.CollectionClass(null, o), o.limit && this.collection.setLimit(o.limit), i.getRestoreUrl && (this.getRestoreUrl = i.getRestoreUrl), i.additionalDataSources && (this._additionalSources = i.additionalDataSources(e), n(3).each(this._additionalSources, function(e) {
                    t.addDataSource(e)
                })), this.$el.addClass(this.options.maxDisplay > 6 ? "m-twoRows" : "m-oneRow")
            },
            onCollectionReset: function() {
                this.disposed || n(81).prototype.onCollectionReset.apply(this, arguments)
            },
            getSubviewArgs: function(e) {
                var t = n(81).prototype.getSubviewArgs.apply(this, arguments);
                switch (this.options.type) {
                    case "likes":
                    case "liked-albums":
                        t.isLike = !0;
                        break;
                    case "liked-and-owned-playlists":
                        t.isLike = !n(54).get("me").owns(e)
                }
                return t
            },
            getEmptyTemplate: function() {
                return this.options.emptyTemplate
            },
            getQueueSource: function() {
                var e = r[this.options.type];
                return e.playable !== !1 ? this.collection : null
            }
        })
    },
    188: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend({
            template: n(3016),
            className: "checkbox sc-checkbox",
            tagName: "label",
            defaults: {
                label: "",
                showLabel: !0,
                name: "",
                checked: !1,
                disabled: !1
            },
            element2selector: {
                input: ".sc-checkbox-input",
                label: ".sc-checkbox-label"
            },
            states: {
                disabled: "sc-checkbox-disabled",
                indeterminate: function(e) {
                    this.$el.toggleClass("sc-checkbox-indeterminate", e), this.getElement("input").prop("indeterminate", e), e && this.setChecked(!0)
                }
            },
            events: {
                "change .sc-checkbox-input": "onInputChange"
            },
            setup: function(e) {
                var t = e.disabled;
                this.toggleState("disabled", t)
            },
            getChecked: function() {
                return this.getElement("input").prop("checked")
            },
            setChecked: function(e) {
                this.getElement("input").prop("checked", !!e)
            },
            setIndeterminate: function(e) {
                this.toggleState("indeterminate", e)
            },
            onInputChange: function(e) {
                var t = ["checkbox", "change"],
                    n = this.options.name,
                    i = {
                        name: n,
                        checked: e.target.checked
                    };
                this.setIndeterminate(!1), this.bubble(t.join(":"), i), n && (t.push(n), this.bubble(t.join(":"), i))
            }
        })
    },
    193: function(e, t, n) {
        "use strict";
        n(77).productIds, e.exports = new(n(21))({
            requirePrototype: n(53).prototype,
            merge: {
                defaults: {
                    productId: null
                }
            },
            before: {
                setup: function(e) {
                    e.productId
                }
            }
        })
    },
    196: function(e, t, n) {
        "use strict";
        var i = 3e3;
        e.exports = n(53).extend(n(512), n(1432), {
            ModelClass: n(67),
            requiredAttributes: ["commentable"],
            defaults: {
                sound_id: null,
                timestamp: null,
                bulkFetch: n(54).get("maxComments"),
                recipient: null
            },
            isFocused: !1,
            isFormRendered: !1,
            states: {
                visible: "visible"
            },
            events: {
                click: "onClick"
            },
            setup: function() {
                this.listenTo(n(62), "change:currentSound", this.onChangeCurrentSound)
            },
            renderDecorate: function() {
                var e = this;
                this.resetElementCache(), this.toggleState("visible", this.canShow()), this.options.recipient && this.whenInserted().done(function() {
                    e.setRecipient(e.options.recipient), e.focus()
                })
            },
            onChangeCurrentSound: function(e) {
                this.isNowPlaying(e) && !this.isFormRendered && (this.render(), this.toggleState("visible", !0))
            },
            isNowPlaying: function(e) {
                return e && e.current.resource_id === this.model.resource_id && this.model.isCommentable()
            },
            canShow: function() {
                var e = this.model.isCommentable(),
                    t = n(62).getCurrentSound(),
                    i = t && t.id,
                    r = this.getCurrentState();
                return e && (r !== n(103).INITIAL || this.model.id === i || "large" === this.options.size)
            },
            onInputFocus: function() {
                this.isFocused = !0, this.isActiveTimestampState() || (this.sound.currentTime() > 0 ? this.goToState(n(103).ACTIVE_TIMESTAMP, this.options.timestamp || this.sound.currentTime()) : this.goToState(n(103).ACTIVE_TIMESTAMP, Math.floor((.8 * Math.random() + .2) * this.sound.getMediaDuration())))
            },
            cancelInput: function() {
                this.goToState(n(103).INITIAL)
            },
            onClick: function(e) {
                e.stopPropagation()
            },
            onInputBlur: function() {
                this.getCurrentState() === n(103).INITIAL && this.isEmpty() && (this.isFocused = !1, this.cancelInput())
            },
            onInitialState: function() {
                this.isEmpty() && this.setTimestamp(this.sound.currentTime()), this.toggleState("active", !1).toggleState("recipientActive", !1), this.getRecipient() && this.setRecipient()
            },
            onActiveTimestamp: function(e, t) {
                null !== e && (t ? (this._replyToId = t.id, this.setRecipient(t.get("user").permalink), this.setTimestamp(t.get("timestamp"))) : (this._replyToId = null, this.setRecipient(), this.setTimestamp(e)), !this.isFormRendered && this.canShow() && this.render(), this.toggleState("active", !0), this.getElement("input").trigger("focus"))
            },
            onCurrentCommentChange: function() {
                this.isFormRendered || this.render(), this.toggleState("visible", !0)
            },
            setTimestamp: function(e) {
                this.options.timestamp = e
            },
            getData: function(e) {
                var t = n(54).get("me").toJSON();
                return {
                    body: this.getCombinedBody(),
                    timestamp: e,
                    replyTo: this._replyToId,
                    created_at: (new Date).toISOString(),
                    user_id: t.id,
                    user: t,
                    track_id: this.sound.id
                }
            },
            getTemplateData: function(e) {
                return e.is_visible = this.isFormRendered = this.canShow(), e.is_large = "large" === this.options.size, e
            },
            postComment: function(e) {
                var t = this;
                if (!this.disposed) {
                    var r = new(n(116))(this.getData(e));
                    r.lastFetchTime = Date.now(), r.release(), n(75).notify("comment", {
                        object: r,
                        target: this.options.sound_id,
                        targetType: "sound"
                    }), r.setEditState(n(144).SAVING).save().done(function() {
                        r.setEditState(n(144).NONE), t.trigger(n(221).SENT, r), t.bubble(n(221).SENT, r), n(56).trigger(n(221).SENT, r), t.disposed || (t.clear(), window.setTimeout(function() {
                            t.goToState(n(103).INITIAL)
                        }, i))
                    }).fail(function() {
                        r.destroy()
                    }), this.trigger(n(221).POSTED, this.options.timestamp), this.bubble(n(221).POSTED, this.options.timestamp), this.rerender(), this.resetElementCache(), this._isPostingComment = !1
                }
            }
        }, {
            Events: n(221)
        })
    },
    197: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend({
            template: function() {
                return ""
            }
        })
    },
    214: function(e, t, n) {
        "use strict";

        function i() {
            this.modal || (this.modal = new(n(69))({
                togglerEl: this.el,
                width: 520,
                Subview: n(308),
                subviewArgs: {
                    resource_id: this.options.resource_id
                }
            })), this.modal.open()
        }
        e.exports = n(53).extend(n(79), {
            className: "reportButton",
            defaults: {
                responsive: !1,
                showUserName: !1,
                showIcon: !1
            },
            buttonLabels: {
                "default": function() {
                    return this.options.showUserName ? n(50).t("Report [[username]]", {
                        username: this.model.get("username")
                    }) : n(50).t("Report")
                }
            },
            ModelClass: n(63),
            modal: null,
            setup: function(e) {
                var t = e.showIcon;
                this.$el.toggleClass("sc-button-block", t)
            },
            onClick: function(e) {
                e.preventDefault(), i.call(this)
            }
        })
    },
    217: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e ? n(3).uniqueId("validation_") : "";
            this.$el.toggleClass("invalid", e), this.getElement("validation").toggleClass("g-input-validation-hidden", !e).attr("id", t), this.getElement("control").attr("aria-invalid", e).attr("aria-describedBy", t)
        }
        e.exports = new(n(21))({
            applyTo: function(e) {
                e.states = e.states || {};
                e.states = n(3).defaults(e.states || {}, {
                    invalid: i
                })
            },
            markAsValid: function() {
                var e = this.getMetaData();
                e.isValid = !0, e.validity = n(182).UNKNOWN, this.setValidation({
                    isValid: !0
                })
            },
            onValidationChange: function(e) {
                this.setValidation(e)
            },
            setValidation: function(e) {
                var t = e.isValid,
                    n = e.message;
                this.getElement("validation").html(t || !n ? "" : n.toString()), this.toggleState("invalid", !t, !0)
            }
        })
    },
    221: function(e, t) {
        "use strict";
        e.exports = {
            POSTED: "commentForm:posted",
            SENT: "commentForm:sent",
            CANCELED: "commentForm:canceled",
            FOCUSED: "commentForm:focused"
        }
    },
    222: function(e, t, n) {
        "use strict";

        function i() {
            var e = n(54).get("rollouts");
            return n(3).any(s, e.get) || e.get("can_see_revshare_premier_agreement") || e.get("can_see_revshare_pro_agreement") || e.get("can_view_revshare_pro_prospect")
        }

        function r() {
            var e = n(54).get("rollouts");
            return e.get("can_see_earnings_dashboard") && e.get("v2_can_see_earnings")
        }
        var o = n(59).getRoute,
            a = n(545).rolloutNames,
            s = n(3).values(a),
            l = [].concat(s, ["can_see_revshare_pro_agreement", "can_see_revshare_premier_agreement", "can_view_revshare_pro_prospect"]);
        e.exports = n(53).extend(n(380).withOptions({
            names: l
        }), {
            template: n(1620),
            loadingTemplate: n(1620),
            css: n(3483),
            className: "creatorsNavigation",
            defaults: {
                subpage: ""
            },
            getTemplateData: function(e) {
                var t = this,
                    a = this.options.subpage,
                    s = !n(61).isLoggedIn(),
                    l = s ? "logged_out_upload" : "logged_in_upload",
                    u = [{
                        subpage: "upload",
                        href: o("upload"),
                        title: s ? n(50).t("Get started", null, {
                            context: "upload"
                        }) : n(50).t("Upload")
                    }, {
                        subpage: "track-manager",
                        href: o("trackManager"),
                        title: n(50).t("Your tracks"),
                        requiresLogin: !0
                    }, {
                        subpage: "stats",
                        href: o("youNetwork", null, "stats"),
                        title: n(50).t("Stats"),
                        requiresLogin: !0
                    }, {
                        subpage: "reports",
                        href: o("reports"),
                        title: n(50).t("Earnings"),
                        requiresRevenues: !0,
                        hasNewBadge: !0
                    }, {
                        subpage: "premier",
                        href: o("premier", null, "t221"),
                        title: n(50).t("Premier"),
                        requiresPremier: !0
                    }, {
                        subpage: "premium",
                        href: s ? o("premium", void 0, void 0, "t726") : o("premium", void 0, void 0, "t728"),
                        title: n(50).t("Pro Plans")
                    }, {
                        subpage: "pulse",
                        href: o("mobile", "pulse"),
                        title: n(50).t("Pulse")
                    }, {
                        subpage: "onsoundcloud",
                        href: "https://creators.soundcloud.com?source=" + l + "&medium=link",
                        title: n(50).t("Creators on SoundCloud"),
                        onSoundCloud: !0
                    }];
                return e.tabs = n(3).reject(u, function(e) {
                    return e.requiresLogin && s || e.requiresPremier && !i.call(t) || e.requiresRevenues && !r.call(t)
                }).map(function(e) {
                    return n(3).assign({}, e, {
                        isActive: a === e.subpage,
                        hasNewBadge: e.hasNewBadge
                    })
                }), e
            }
        })
    },
    223: function(e, t, n) {
        "use strict";

        function i(e) {
            this.options.frontPage && r({
                click_name: "footer_link",
                click_target: e.target.href
            })
        }
        var r = n(58).trackFrontPageClick;
        e.exports = n(53).extend({
            className: "l-footer sc-text-verylight",
            template: n(3103),
            css: n(3513),
            defaults: {
                style: "standard",
                omitBorder: !1,
                content: null
            },
            events: {
                "click a": i
            },
            setup: function(e) {
                var t = e.style,
                    n = e.omitBorder;
                this.$el.addClass(t).toggleClass("sc-border-light-top", !n)
            },
            getTemplateData: function(e) {
                var t = this.options.content;
                return t ? e[t] = t : e.content = null, n(124).isCountryUK() && (e.showModernSlaveryLink = !0), e
            }
        })
    },
    230: function(e, t, n) {
        var i = n(2409);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    245: function(e, t, n) {
        "use strict";
        var i = n(58).trackImpression;
        e.exports = n(53).extend(n(68).withOptions("incoming-activity"), {
            template: n(455),
            className: "activity",
            css: n(464),
            defaults: {
                activity: null,
                show_context: !0,
                showHTUpsell: !1
            },
            setup: function(e) {
                this.model = e.activity, this.model.hold()
            },
            renderDecorate: function() {
                if (this.model.isPromoted()) {
                    var e = this.getContextData(),
                        t = this.model.get("type"),
                        r = "track-promoted" === t ? "promoted_track" : "playlist-promoted" === t ? "promoted_playlist" : null;
                    n(91).trackEvent("impression", e), i({
                        context: e,
                        impression_name: r
                    })
                }
            },
            getTemplateData: function(e) {
                var t, i = this.model.get("type"),
                    r = n(54).get("me");
                return t = n(3).reduce(["track", "track-like", "track-repost", "track-sharing", "track-promoted", "playlist", "playlist-like", "playlist-repost", "playlist-sharing", "playlist-promoted", "comment", "affiliation"], function(e, t) {
                    return e["type_is_" + t.replace(/-/, "_")] = i === t, e
                }, {
                    type_is_like: /like$/.test(i),
                    type_is_repost: /repost$/.test(i),
                    type_is_sharing: /sharing$/.test(i),
                    type_is_tracky: /^track/.test(i),
                    type_is_playlisty: /^playlist/.test(i)
                }), t.type_is_audible = t.type_is_track || t.type_is_playlist, "comment" === i ? (e.track = e.comment.track, e.user = e.user || e.comment.user, e.can_delete_comment = r.owns("sound", e.track) || r.owns("comment", e.comment), e.contentType = n(50).t("comment")) : t.type_is_playlisty ? (e.audible = e.playlist, e.subresource_type = "playlist", e.contentType = n(50).t("playlist")) : "affiliation" === i ? (e.subresource_type = "user", e.contentType = n(50).t("user")) : (e.audible = e.track, e.subresource_type = "sound", e.contentType = n(50).t("track")), (t.type_is_audible || t.type_is_sharing) && (e.user = e.audible.user), e.sharing_note && void 0 !== e.sharing_note.text && 0 === e.sharing_note.text.trim().length && (e.sharing_note = !1), e.time_prefix = t.type_is_sharing ? "Shared" : t.type_is_repost ? "Reposted" : t.type_is_audible ? "Posted" : "", n(3).assign(e, t)
            },
            onContextRequest: function(e) {
                e.data.urn || (e.data.urn = n(3).result(this.model.getSound(), "getUrn"))
            }
        })
    },
    246: function(e, t, n) {
        "use strict";

        function i() {
            this.modal || (this.modal = new(n(69))({
                togglerEl: this.el,
                width: 520,
                Subview: n(2281),
                subviewArgs: {
                    resource_id: this.options.resource_id
                }
            })), this.modal.open()
        }
        var r = ["system"];
        e.exports = n(53).extend(n(68).withOptions("muteButton"), n(79), {
            className: "blockButton",
            defaults: {
                responsive: !1,
                showUserName: !1,
                showIcon: !1
            },
            buttonLabels: {
                "default": function() {
                    return this.options.showUserName ? n(50).t("Block [[username]]", {
                        username: this.user.get("username")
                    }) : n(50).t("Block")
                },
                selected: {
                    text: function() {
                        return this.options.showUserName ? n(50).t("Blocked [[username]]", {
                            username: this.user.get("username")
                        }) : n(50).t("Blocked")
                    },
                    title: function() {
                        return this.options.showUserName ? n(50).t("Unblock [[username]]", {
                            username: this.user.get("username")
                        }) : n(50).t("Unblock")
                    }
                }
            },
            ModelClass: n(1451),
            modal: null,
            setup: function(e) {
                var t = e.resource_id,
                    i = e.showUserName,
                    o = e.showIcon;
                this.$el.toggleClass("sc-button-block", o), this.user = this.addDataSource(new(n(63))({
                    id: t
                }), {
                    requiredAttributes: i ? ["username"] : []
                }), this.observedAttributes = [t], r.indexOf(t) > -1 && this.$el.hide()
            },
            isButtonSelected: function() {
                return !!this.model.get(this.options.resource_id)
            },
            onClick: function(e) {
                e.preventDefault(), this.isButtonSelected() ? n(75).block(this.options.resource_id, !1, !1, !1, {
                    context: this.getContextData()
                }) : i.call(this)
            }
        })
    },
    247: function(e, t, n) {
        "use strict";

        function i() {
            this._startedPayment = !0;
            var e = this.getContextData(),
                t = this.options,
                i = t.extraScope,
                r = t.resource_id;
            e.scope && i ? e.scope.push(i) : !e.scope && i && (e.scope = [i]), n(415).open(r, {
                trackingContext: e
            })
        }

        function r() {
            l.call(this) && this.toggleState("pending", !0)
        }

        function o() {
            l.call(this) && this.toggleState("pending", !1)
        }

        function a() {
            l.call(this) && this.toggleState("pending", !1), this._startedPayment = !1
        }

        function s() {
            this._startedPayment = !1
        }

        function l() {
            return this._startedPayment
        }
        e.exports = n(53).extend(n(79), n(115).withOptions({
            type: "pro",
            getImpressionName: function() {
                return this.isLink ? "creator_sub_ad" : [this.options.resource_id, this.model.getTrackingUseCase()].join("/")
            },
            shouldTrackUpsellClick: function() {
                return this.isLink
            }
        }), {
            ModelClass: n(84),
            observedAttributes: ["use_case"],
            className: "premiumButton g-button-premium",
            states: {
                disabled: function(e) {
                    this.$el.attr("disabled", e)
                },
                pending: function(e) {
                    this.disposed || this.$el.attr("disabled", e).toggleClass("sc-pending", e)
                }
            },
            isLink: !1,
            defaults: {
                size: "large",
                linkRef: null,
                resource_id: n(77).productIds.CREATOR_SUBSCRIPTION_PRO,
                extraScope: ""
            },
            buttonLabels: {
                "default": function() {
                    var e, t = this.model,
                        i = t.isGift(),
                        r = t.isProUnlimited(),
                        o = t.get("use_case");
                    return e = o === n(84).useCases.RENEWAL ? n(50).t("Renew") : o === n(84).useCases.DOWNGRADE ? n(50).t("Downgrade") : o === n(84).useCases.UPGRADE && r ? n(50).t("Upgrade to Pro Unlimited") : i && r ? n(50).t("Gift Unlimited") : i && !r ? n(50).t("Gift Pro") : !i && r ? n(50).t("Try Pro Unlimited") : n(50).t("Try Pro")
                }
            },
            setup: function(e) {
                var t = e.linkRef;
                this.isLink = "a" === this.tagName, this.isLink && this.$el.attr("href", n(59).getRoute("premium", null, null, t)), this.listenTo(n(98), "starting", r).listenTo(n(98), "started", o).listenTo(n(98), "canceled", a).listenTo(n(98), "finished", s)
            },
            renderDecorate: function() {
                var e = this.model.get("use_case");
                e !== n(84).useCases.DOWNGRADE && this.$el.addClass("sc-button-cta"), this.toggleState("disabled", e === n(84).useCases.DISABLED)
            },
            getUpsellRef: function() {
                return this.isLink ? this.options.linkRef : n(98).getReferenceParam()
            },
            onClick: function() {
                this.isLink || i.call(this)
            }
        })
    },
    268: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = this,
                n = function(e) {
                    return t.getSubviewWrapper(e).outerHeight() || 0
                },
                i = this.getListItemViews(),
                a = o(e - Math.floor(this.options.numOfItemsVisible / 2), 0, i.length);
            return r(i.slice(0, a).map(n))
        }

        function r(e) {
            return e.reduce(function(e, t) {
                return e + t
            }, 0)
        }
        var o = n(119).clamp,
            a = n(70).extend({
                model: n(64).extend(),
                _highlights: [],
                setup: function(e) {
                    var t = void 0,
                        i = e.items;
                    e && e.query && e.filterable && (t = n(167).fuzzy(e.query, i, e.titleAttr), this._highlights = n(3).pluck(t, "highlights"), i = n(3).pluck(t, "item")), this.reset(i, {
                        silent: !0
                    })
                },
                hasDataForView: function() {
                    return !0
                },
                getHighlightsFor: function(e) {
                    var t = this.models.indexOf(e);
                    return this._highlights[t]
                }
            }),
            s = n(53).extend({
                defaults: {
                    highlights: null,
                    titleAttr: null
                },
                template: function() {
                    var e = this.options,
                        t = e.titleAttr,
                        i = e.highlights,
                        r = this.model.get(t);
                    return i ? n(167).highlightText(r.toString(), i) : r
                }
            }),
            l = n(73).extend(n(291), n(329), {
                css: n(3435),
                Subview: s,
                className: "comboBoxList sc-border-box sc-list-nostyle sc-type-small",
                itemClassName: "comboBoxList__item",
                itemSelector: ".comboBoxList__item",
                maxItemDisplay: 0,
                defaults: {
                    query: "",
                    numOfItemsVisible: 5,
                    filterable: !0,
                    items: null,
                    titleAttr: null,
                    defaultSelectedItemIndex: null
                },
                setup: function(e) {
                    var t = e.items,
                        n = e.filterable,
                        i = e.titleAttr,
                        r = e.query,
                        o = e.numOfItemsVisible,
                        s = 27;
                    this.$el.css({
                        maxHeight: o * s
                    }), this.collection = new a(null, {
                        items: t,
                        titleAttr: i,
                        query: r,
                        filterable: n
                    })
                },
                getSubviewArgs: function(e) {
                    return {
                        model: e,
                        titleAttr: this.options.titleAttr,
                        highlights: this.collection.getHighlightsFor(e)
                    }
                },
                onItemSelected: function(e) {
                    return this.collection.at(e)
                },
                renderDecorate: function() {
                    var e = this;
                    n(73).prototype.renderDecorate.call(this), this.addDeferred(this.setupScrollable(this.getListContainer(), this.getListElement(), {
                        hScroll: !1
                    }).done(function() {
                        return e.highlightItem(e.options.defaultSelectedItemIndex)
                    }))
                },
                onItemHighlighted: function(e, t) {
                    t || this.scrollToListItem(e)
                },
                scrollToListItem: function(e) {
                    0 > e || this.getListElement().scrollTop(i.call(this, e))
                }
            });
        e.exports = n(60).extend(n(377), {
            defaults: {
                comboItems: null,
                titleAttr: "title",
                valueAttr: "value",
                showAllItems: !0,
                submitFormOnEnter: !1,
                filterable: !0
            },
            selectOnTab: !0,
            events: n(3).assign({}, n(60).prototype.events, {
                "focus .textfield__input": "onFocus"
            }),
            MenuContentView: l,
            inputSelector: ".textfield__input",
            setup: function(e) {
                this.showAllItems = e.showAllItems, this.datasource = new a(null, {
                    items: this.getComboItems(e)
                }), n(60).prototype.setup.apply(this, arguments)
            },
            menuContentViewArgs: function() {
                var e = this.options,
                    t = e.titleAttr,
                    n = e.filterable;
                return {
                    titleAttr: t,
                    filterable: n,
                    items: this.getComboItems(this.options),
                    defaultSelectedItemIndex: Math.max(0, this.getModelIndexByTitle(this.getControlValue()))
                }
            },
            getModelIndexByTitle: function(e) {
                return this.datasource.indexOf(this.getModelByTitle(e))
            },
            getComboItems: function(e) {
                var t = e.comboItems;
                return t || []
            },
            onFocus: function() {
                var e = this;
                this.addDeferred(n(3).defer(function() {
                    e.getElement("control").select()
                }))
            },
            onItemSelected: function(e) {
                var t = this.options,
                    n = t.valueAttr,
                    i = t.titleAttr,
                    r = e.get(n);
                this.setControlValue(e.get(i)), this.setFieldValue(r), this.getElement("control").trigger("change", r)
            },
            getControlValue: function() {
                return this.getElement("control").val().trim()
            },
            setControlValue: function(e) {
                return this.getElement("control").val(e)
            },
            setValueAgain: function() {
                this.setValue(this.getControlValue())
            },
            getValue: function() {
                return this.getValueByTitle(this.getControlValue())
            },
            onFieldChange: function(e, t) {
                var n = this.getTitleByValue(t);
                this.setControlValue(n || t)
            },
            getModelByTitle: function(e) {
                return this.datasource.find(function(t) {
                    return t.get(this.options.titleAttr) === e
                }, this)
            },
            getValueByTitle: function(e) {
                var t = this.getModelByTitle(e);
                return t ? t.get(this.options.valueAttr) : void 0
            },
            getTitleByValue: function(e) {
                var t = this.datasource.find(function(t) {
                    return t.get(this.options.valueAttr) === e
                }, this);
                return t ? t.get(this.options.titleAttr) : void 0
            },
            getTemplateData: function(e) {
                n(60).prototype.getTemplateData.apply(this, arguments);
                var t = this.getFieldValue();
                e._value = this.getTitleByValue(t) || t
            },
            getDatasource: function() {
                return this.datasource
            },
            dispose: function() {
                n(60).prototype.dispose.apply(this, arguments), this.datasource.release()
            }
        })
    },
    270: function(e, t, n) {
        "use strict";
        var i = n(77).productIds.CONSUMER_SUBSCRIPTION_HIGH_TIER;
        e.exports = n(53).extend(n(79), n(115).withOptions({
            type: "go"
        }), {
            className: "consumerSubscriptionsCheckoutButton",
            defaults: {
                tcode: null,
                productId: i,
                customRoute: null,
                promoCode: null,
                size: "large"
            },
            onClick: function() {
                return n(61).isLoggedIn() ? this.navigateToCheckout() : n(61).login({
                    implicitAction: "purchase"
                }).then(this.navigateToCheckout.bind(this))
            },
            navigateToCheckout: function() {
                var e = this.options.productId === i ? "go-plus" : "go";
                n(54).get("router").navigateToRoute("consumerPremiumCheckout", [e, null, this.options.customRoute, this.options.promoCode], {
                    trigger: !0
                })
            },
            getUpsellRef: function() {
                return this.options.tcode
            }
        })
    },
    271: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend(n(289), {
            className: "facebookFacepile",
            css: n(319),
            template: n(316),
            defaults: {
                show_count: !1,
                size: "medium",
                width: 300
            }
        })
    },
    289: function(e, t, n) {
        "use strict";
        var i = n(125).parseXFBML,
            r = n(125).isFacebookSDKReady,
            o = n(125).loadFacebookSDK;
        e.exports = new(n(21))({
            defaults: {
                hasData: function() {
                    return r()
                },
                fetchData: function() {
                    return o().done(this.rerender.bind(this))
                }
            },
            around: {
                getTemplateData: function(e, t) {
                    return t || (t = {}), t.FB = {
                        app_id: n(54).get("fb_app_id")
                    }, e(t)
                }
            },
            after: {
                renderDecorate: function() {
                    i(this.el)
                }
            }
        })
    },
    297: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                var e = new Date;
                return e.setHours(0, 0, 0, 0), e
            }

            function r(e, n) {
                if (!n.length) return null;
                try {
                    return t.datepicker.parseDate(e, n)
                } catch (i) {
                    return new Date(NaN)
                }
            }

            function o(e, t) {
                return t = new Date(t), t.setFullYear(e.getFullYear()), t.setMonth(e.getMonth()), t.setDate(e.getDate()), t
            }

            function a() {
                var e = this.getElement("control"),
                    n = e[0];
                n && t.datepicker._updatePosition(n)
            }
            var s = n(288).findScrollableContainer;
            n(1868);
            e.exports = n(60).extend(n(384), {
                className: "textfield datefield",
                events: n(3).assign({}, n(60).prototype.events, {
                    "input .textfield__input": "onInputChange",
                    "change .textfield__input": "onInputChange"
                }),
                states: n(3).assign({}, n(60).prototype.states, {
                    editing: function(e) {
                        var t = this.getElement("control");
                        t.datepicker("option", "dateFormat", this.getDateFormat(e)).datepicker("refresh"), s(t)[e ? "on" : "off"]("scroll", this.onScroll)
                    }
                }),
                css: n(3).flatten([n(60).prototype.css, n(26), n(27), n(3438)]),
                defaults: {
                    dateFormat: "d M yy",
                    editDateFormat: "dd/mm/yy",
                    placeholder: n(50).t("DD/MM/YYYY"),
                    defaultDate: null,
                    minDate: null,
                    maxDate: null
                },
                setup: function() {
                    n(60).prototype.setup.apply(this, arguments), this.onScroll = n(3).throttle(a.bind(this), 16)
                },
                renderDecorate: function() {
                    var e = this;
                    n(60).prototype.renderDecorate.apply(this, arguments);
                    var t = function() {
                            return e.toggleState("editing", !0)
                        },
                        i = function() {
                            return e.toggleState("editing", !1)
                        },
                        r = this.options,
                        o = r.defaultDate,
                        a = r.minDate,
                        s = r.maxDate,
                        l = this.getDateFormat();
                    this.getElement("control").datepicker({
                        defaultDate: o,
                        minDate: a,
                        maxDate: s,
                        dateFormat: l,
                        beforeShow: t,
                        onClose: i,
                        showAnim: ""
                    }), this.onFieldChange()
                },
                getDateFormat: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? this.getState("editing") : arguments[0];
                    return e ? this.options.editDateFormat : this.options.dateFormat
                },
                getValue: function() {
                    var e = this.getFieldValue() || i(),
                        t = this.getElement("control").val().trim(),
                        n = r(this.getDateFormat(), t);
                    return n ? o(n, e) : null
                },
                setValue: function(e) {
                    return this.getElement("control").datepicker("setDate", e)
                },
                setMinDate: function(e) {
                    this.getElement("control").datepicker("option", "minDate", e).datepicker("refresh")
                },
                hideDatepicker: function() {
                    this.getElement("control").datepicker("hide")
                },
                setValueAgain: function() {},
                onFieldChange: function() {
                    this.setValue(this.getFieldValue())
                },
                getTemplateData: function(e) {
                    e = n(60).prototype.getTemplateData.call(this, e) || e;
                    var t = this.options;
                    return t.label !== !1 && (e._label = t.label), e
                }
            })
        }).call(t, n(1))
    },
    298: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0],
                    t = this.getPlaceholderLength(),
                    n = this.getInputValue().length,
                    r = Math.max(8, n, t),
                    o = r * this._charWidth,
                    a = this.getElement("wrapper").width();
                return a || e ? void this.getElement("control").width(a ? Math.min(a, o) : o) : this.whenInserted().done(i.bind(this, !0))
            }

            function r() {
                return "." + this.options.tokenClassName.replace(/\s+/g, ".")
            }
            var o = {
                small: 6,
                medium: 8,
                large: 10
            };
            e.exports = n(53).extend(n(117), n(217), n(377), {
                template: n(3029),
                css: n(1243),
                className: "tokenInput",
                defaults: {
                    allowFreeInputTokens: !0,
                    label: null,
                    size: "medium",
                    placeholder: null,
                    tokenClassName: "tokenInput__token",
                    maxTokens: 1 / 0,
                    minInputHeight: null,
                    type: "Tag",
                    value: []
                },
                element2selector: {
                    control: ".tokenInput__input",
                    inputContainer: ".tokenInput__inputContainer",
                    label: ".tokenInput__label",
                    wrapper: ".tokenInput__wrapper",
                    validation: ".tokenInput__validation"
                },
                events: {
                    "click .tokenInput__wrapper": "onWrapperClick",
                    "click .tokenInput__tokenRemove": "onTokenRemoveClick",
                    "focus   .tokenInput__input": "onInputFocus",
                    "blur    .tokenInput__input": "onInputBlur",
                    "keydown .tokenInput__input": "onInputKeydown",
                    "input   .tokenInput__input": "onInputChange"
                },
                states: {
                    focused: "focused"
                },
                selectOnTab: !0,
                inputSelector: ".tokenInput__input",
                getRelativeElement: function() {
                    return this.$el
                },
                setup: function(e) {
                    this._charWidth = o[e.size]
                },
                renderDecorate: function() {
                    var e = this.options.minInputHeight;
                    this.getElement("wrapper").addClass("sc-input-" + this.options.size), e && this.getElement("wrapper").css("minHeight", e), this.addInitialItems(), this.syncState(), this.syncRequiredness(this.getElement("label"), this.getElement("control"))
                },
                addInitialItems: function() {
                    var e = this.options.value;
                    e && e.length && this.setFieldValue(e)
                },
                getDisplayValue: n(3).noop,
                addToken: function(e) {
                    var t = this.getFieldValue().slice(),
                        i = t.some(function(t) {
                            return n(3).isEqual(e, t)
                        });
                    e && !i && (t.push(e), this.setFieldValue(t)), this.focus(), this.validateOwnField()
                },
                removeToken: function(e) {
                    var t = this.getFieldValue().slice(); - 1 === e && (e = t.length - 1), e < t.length && (t.splice(e, 1), this.setFieldValue(t), this.validateOwnField()), this.focus()
                },
                fadeOutToken: function(e, t) {
                    e.width(e.width()), this.addDeferred(window.setTimeout(e.addClass.bind(e, "hide"), 0)), this.addDeferred(window.setTimeout(t.bind(this), 300))
                },
                getInputValue: function() {
                    return this.getElement("control").val().trim().replace(/^[#,]/, "")
                },
                createFreeInputToken: function() {
                    var e, n = this.isMenuOpened(),
                        i = this.selectedItemIndex + 1 >= this.getMenuItemCount();
                    this.options.allowFreeInputTokens && this.inputHasQuery() && (n && i || !n) && (e = this.addUserText(this.getInputValue())), t.when(e).done(this.emptyInput.bind(this))
                },
                addUserText: function(e) {
                    return this.addToken(e)
                },
                syncState: function() {
                    var e, t, n, r;
                    r = this.getElement("control"), e = this.getFieldValue(), n = this.options, r.toggleClass("g-hidden", e.length >= n.maxTokens), this.getState("invalid") && this.getMetaData().isValid && this.toggleState("invalid", !1), t = e.map(function(e) {
                        return "string" != typeof e && (e = this.getDisplayValue(e)), this.getTokenHTML(e)
                    }, this).join(""), this.$("." + n.tokenClassName.replace(/\s+/g, ".")).remove(), this.getElement("inputContainer").before(t), r.attr("placeholder", e.length ? "" : n.placeholder), i.call(this)
                },
                onItemSelected: function(e) {
                    this.emptyInput(), this.addUserText(e)
                },
                onInputBlur: function() {
                    this.toggleState("focused", !1)
                },
                onInputFocus: function() {
                    this.toggleState("focused", !0)
                },
                onInputKeydown: function(e) {
                    switch (e.which) {
                        case n(108).BACKSPACE:
                            this.inputHasQuery() || (this.fadeOutToken(this.$(r.call(this)).last(), this.removeToken.bind(this, -1)), e.preventDefault());
                            break;
                        case n(108).ENTER:
                        case n(108).TAB:
                            this.inputHasQuery() && (this.createFreeInputToken(), e.preventDefault(), e.stopPropagation())
                    }
                },
                onInputChange: function() {
                    i.call(this), this.getMetaData().isValid || this.markAsValid()
                },
                onWrapperClick: function() {
                    this.focus()
                },
                onTokenRemoveClick: function(e) {
                    var n = t(e.target).closest(r.call(this)),
                        i = n.index();
                    this.fadeOutToken(n, this.removeToken.bind(this, i)), e.stopPropagation()
                },
                onFieldChange: function() {
                    this.syncState()
                },
                getTokenHTML: function(e) {
                    return '<div class="' + this.options.tokenClassName + '"><span class="sc-visuallyhidden">' + this.options.type + ": </span>" + n(20).Utils.escapeExpression(e) + '<button type="button" class="tokenInput__tokenRemove sc-ir">Remove ' + this.options.type + " " + n(20).Utils.escapeExpression(e) + "</button></div>"
                },
                getPlaceholderLength: function() {
                    var e = this.getElement("control").attr("placeholder");
                    return e ? e.length : 0
                }
            })
        }).call(t, n(1))
    },
    313: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".facebookFacepile{display:inline-block}", ""])
    },
    316: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                return "true"
            },
            3: function(e, t, n, i, r) {
                return "false"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, a = e.lambda,
                    s = e.escapeExpression;
                return '<fb:facepile\n  app_id="' + s(a(null != (o = null != t ? t.FB : t) ? o.app_id : o, t)) + '"\n  max_rows="1"\n  size="' + s(a(null != (o = null != t ? t._options : t) ? o.size : o, t)) + '"\n  show_count="' + (null != (o = n["if"].call(null != t ? t : {}, null != (o = null != t ? t._options : t) ? o.show_count : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.program(3, r, 0),
                    data: r
                })) ? o : "") + '"\n  width="' + s(a(null != (o = null != t ? t._options : t) ? o.width : o, t)) + '">\n</fb:facepile>\n'
            },
            useData: !0
        })
    },
    319: function(e, t, n) {
        var i = n(313);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    329: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                var t = e ? "on" : "off";
                e && (this._handlers = {
                    mousedown: r.bind(this),
                    mouseover: o.bind(this)
                }), this.$el[t](this._handlers, this.itemSelector)
            }

            function r(e) {
                e.preventDefault();
                var n = this.getItems().index(t(e.currentTarget));
                this.selectItem(n)
            }

            function o(e) {
                this.highlightItem(this.getItems().index(t(e.currentTarget)), e.originalEvent instanceof window.MouseEvent)
            }
            var a = "combox-box-content";
            e.exports = new(n(21))({
                defaults: {
                    itemSelector: "",
                    highlightClassName: "selected",
                    onItemHighlighted: n(3).noop,
                    onItemSelected: n(3).noop,
                    maxItemDisplay: 10
                },
                highlightItem: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
                        n = this.getItems(),
                        i = Math.abs((n.length + e) % n.length);
                    return this.highlightedItem && this.highlightedItem.removeClass(this.highlightClassName), this.highlightedItem = n.eq(i).addClass(this.highlightClassName), this.onItemHighlighted(i, t), this.bubble("itemHighlighted", {
                        index: i
                    }), i
                },
                selectItem: function(e) {
                    if (0 > e) return !1;
                    var t = this.getItems();
                    e = Math.min(e, t.length - 1);
                    var n = t.eq(e);
                    return n.length ? (this.bubble("itemClick", this.onItemSelected(e, n)), !0) : !1
                },
                getItemCount: function() {
                    return this.getItems().length
                },
                applyTo: function(e) {
                    this.before(e, {
                        setup: function() {
                            i.call(this, !0), this.$el.addClass(a)
                        },
                        dispose: function() {
                            i.call(this, !1)
                        }
                    }), e.attributes = n(3).defaults({}, e.attributes, {
                        role: "listbox"
                    }), e.defaults = n(3).defaults({}, e.defaults, {
                        maxDisplay: e.maxItemDisplay,
                        defaultSelectedItemIndex: 0
                    })
                },
                getItems: function() {
                    return this.$(this.itemSelector)
                }
            })
        }).call(t, n(1))
    },
    331: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            after: {
                setup: function() {
                    this.model && this.listenTo(this.model, "validation", this.onFormValidation)
                }
            },
            defaults: {
                onFormValidation: function() {
                    var e = this.getInvalidFormControls();
                    e.length && e[0].scrollToAndFocus()
                }
            },
            getFormControls: function() {
                return this.getAncestorSubviews().filter(function(e) {
                    return e.isFormControl
                })
            },
            getInvalidFormControls: function() {
                return this.getFormControls().filter(function(e) {
                    return e.isInvalid()
                })
            }
        })
    },
    332: function(e, t, n) {
        "use strict";

        function i(e) {
            return n(53).extend({
                template: function() {
                    return ""
                },
                renderDecorate: function() {
                    var t = new(n(1886))({
                        linkGroups: e.getLinkGroups(),
                        activeLinkId: e.getActiveLinkId()
                    });
                    this.$el.width(e.$el.outerWidth()), this.addSubview(t), this.$el.append(t.render().el)
                }
            })
        }

        function r(e) {
            return n(3).flatten(e.map(function(e) {
                var t = e.links;
                return t.map(function(e) {
                    var t = e.label;
                    return t
                })
            }))
        }
        e.exports = new(n(21))({
            requires: ["getLinkGroups", "getActiveLinkId"],
            requirePrototype: n(99).prototype,
            merge: {
                defaults: {
                    overlayType: "dropdown",
                    overlayOptions: {
                        collision: "none"
                    }
                },
                bubbleEvents: {
                    linkMenuItemSelected: "onLinkMenuItemSelected"
                }
            },
            after: {
                setup: function(e) {
                    this.options.allPossibleLabels = r(this.getLinkGroups()), this.options.ContentViewClass = i(this)
                }
            },
            onLinkMenuItemSelected: function(e) {
                var t = e.data.link;
                t || window.console.error("Missing link data", e.data), e.stopPropagation(), t.href ? n(54).get("router").navigate(t.href, {
                    trigger: !0
                }) : this.onLinkClick(t)
            },
            updateMenu: function() {
                this.isOverlayOpened() && this.getOverlay().rerender()
            },
            defaults: {
                onLinkClick: function(e) {}
            }
        })
    },
    333: function(e, t, n) {
        "use strict";

        function i() {
            this.removeLoader(), this.removeThrobber(), this.appendError()
        }

        function r() {
            s = o, this.afterFetch.apply(this, arguments)
        }
        var o = 250,
            a = 16e3,
            s = o;
        e.exports = new(n(21))(n(102), {
            requirePrototype: n(73).prototype,
            defaults: {
                ThrobberView: n(169),
                automaticErrorHandling: !0,
                afterFetch: n(3).noop
            },
            merge: {
                defaults: {
                    showThrobber: !0
                }
            },
            after: {
                _setup: function() {
                    this.automaticErrorHandling && this.listenTo(this.collection, "error", i)
                }
            },
            addThrobber: function() {
                if (this.options.showThrobber && this.ThrobberView) {
                    var e = this.subviews.throbber || this.addSubview(new this.ThrobberView, "throbber").render();
                    this.appendDOMElement(e.el)
                }
            },
            removeThrobber: function() {
                if (!this.disposed) {
                    var e = this.subviews.throbber;
                    e && (e._dispose(), this.removeSubview(e))
                }
            },
            appendError: function() {
                var e = this;
                if (!this.disposed) {
                    var t = this.subviews.errorView;
                    t || (t = this.addSubview(new(n(343))({
                        button_label: n(50).t("Retry"),
                        tagName: "div"
                    }), "errorView"), t.on("button_click", function() {
                        e.removeSubview(t), t._dispose(), e.addThrobber(), e.fetchNextPage({
                            delay: s
                        }), s = Math.min(4 * s, a)
                    }), t.render(), this.appendDOMElement(t.el))
                }
            },
            fetchNextPage: function(e) {
                var t = this,
                    i = function() {
                        return t.collection.fetchUntilResults({
                            reset: !t.collection.isPopulated(),
                            remove: !1
                        }).done(r.bind(t))
                    };
                return e && e.delay ? this.addDeferred(n(3).delay(i, e.delay)) : i()
            }
        })
    },
    337: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend(n(204), {
            template: n(3018),
            css: n(3427),
            className: "confirmableForm",
            defaults: {
                confirmText: "",
                confirmButton: "Yes",
                size: "small"
            }
        })
    },
    341: function(e, t, n) {
        "use strict";

        function i(e) {
            return this.options.show_counts ? n(152).render(this.audible.get("likes_count") || e, {
                useSIUnits: !0
            }) : e
        }

        function r() {
            var e = this.options,
                t = e.resource_type,
                n = e.show_counts,
                i = [];
            return "playlist" === t && i.push("is_album"), n && i.push("likes_count"), i
        }
        var o = n(50).t("Like"),
            a = n(50).t("Liked"),
            s = n(50).t("Unlike");
        e.exports = n(53).extend(n(79), n(379), n(68).withOptions("likeButton"), {
            className: "sc-button-like",
            defaults: {
                show_counts: !1
            },
            buttonLabels: {
                "default": {
                    text: function() {
                        return i.call(this, o)
                    },
                    title: o
                },
                selected: {
                    text: function() {
                        return i.call(this, a)
                    },
                    title: s
                }
            },
            setup: function(e) {
                "playlist" === e.resource_type ? this.model = new(n(1458)) : this.model = new(n(1463)), this.observedAttributes = [e.resource_id], this.audible = this.addDataSource(new(n(82))({
                    id: e.resource_id,
                    resource_type: e.resource_type
                }), {
                    requiredAttributes: r.call(this)
                }), e.show_counts && (this.listenTo(this.audible, "change:likes_count", this.rerender), this.listenTo(this.model, "change:" + e.resource_id, this.rerender))
            },
            isButtonSelected: function() {
                return !!this.model.get(this.options.resource_id)
            },
            onClick: function(e) {
                e.preventDefault();
                var t = this.options,
                    i = !this.model.get(t.resource_id),
                    r = this.getContextData();
                n(75).like(t.resource_id, t.resource_type, i, {
                    context: r,
                    targetModel: this.audible
                })
            }
        })
    },
    343: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend({
            template: n(3102),
            css: n(3512),
            className: "inlineError",
            events: {
                "click a": "onClick"
            },
            defaults: {
                button_label: n(50).t("Retry")
            },
            onClick: function(e) {
                e.preventDefault(), this.trigger("button_click", e, this)
            }
        })
    },
    377: function(e, t, n) {
        "use strict";

        function i() {
            var e = this.getMenu(),
                t = a.call(this);
            e ? this.updateMenuContent(e, t) : this.createMenu().replaceContentView(t)
        }

        function r(e) {
            var t = e ? "on" : "off";
            e && (this._inputHandlers = {
                mousedown: l.bind(this),
                blur: c.bind(this),
                click: u.bind(this),
                focus: u.bind(this),
                keydown: d.bind(this),
                input: m.bind(this)
            }), this.$el[t](this._inputHandlers, this.inputSelector)
        }

        function o() {
            var e = this.getMenu();
            return e ? e.getContentView() : void 0
        }

        function a() {
            return n(3).assign({
                query: this.getInput().val(),
                defaultSelectedItemIndex: this.defaultSelectedItemIndex
            }, n(3).result(this, "menuContentViewArgs"))
        }

        function s(e) {
            this.selectedItemIndex = e, this.onItemHighlighted.call(this, e)
        }

        function l(e) {
            this.isAutoFocusInput && this.inputHasQuery() && this.openMenu()
        }

        function u() {
            this.isAutoFocusInput || !this.inputHasQuery() && !this.showAllItems || this.openMenu()
        }

        function c() {
            this.closeMenu()
        }

        function d(e) {
            var t = void 0;
            switch (e.keyCode) {
                case n(108).ENTER:
                    t = h;
                    break;
                case n(108).ESC:
                    t = g;
                    break;
                case n(108).DOWN:
                    t = k;
                    break;
                case n(108).UP:
                    t = x;
                    break;
                case n(108).TAB:
                    t = f
            }
            return t ? t.call(this, e) : void 0
        }

        function p(e) {
            return function(t) {
                t.preventDefault();
                var n = o.call(this);
                if (n && (this.selectedItemIndex = n.highlightItem(e(this.selectedItemIndex)), this.selectOnArrowNavigation)) {
                    var i = this.datasource.at(this.selectedItemIndex);
                    i && this.setValue(i.get(this.options.titleAttr))
                }
            }
        }

        function h(e) {
            this.isMenuOpened() && this.getMenuItemCount() && this.selectActiveItem() && (e.preventDefault(), e.stopPropagation())
        }

        function f(e) {
            this.selectOnTab && this.isMenuOpened() && this.getMenuItemCount() && (e.preventDefault(), this.selectActiveItem())
        }

        function g(e) {
            e.preventDefault();
            var t = this.getInput();
            t.val().length ? this.emptyInput() : t.blur()
        }

        function m() {
            this.updateQuery()
        }

        function _(e) {
            this.onItemSelected(e.data), this.closeMenu(), e.stopPropagation()
        }

        function v(e) {
            s.call(this, e.data.index), e.stopPropagation()
        }

        function y(e) {
            w(this.getInput())[e ? "on" : "off"]("scroll", this.updateMenuPosition)
        }

        function b() {
            var e = this.getMenu();
            e && e.position()
        }
        var w = n(288).findScrollableContainer,
            x = (e.exports = new(n(21))({
                applyTo: function(e) {
                    this.before(e, {
                        setup: function() {
                            this.selectedItemIndex = this.defaultSelectedItemIndex, this.activate(), this.showSuggestionsMenu = this.showSuggestionsMenu.bind(this), this.updateMenuPosition = n(3).throttle(b.bind(this), 16)
                        },
                        renderDecorate: function() {
                            this.isAutoFocusInput = !!this.getInput().attr("autofocus"), this.oldInputText = this.getInput().val()
                        }
                    }), this.after(e, {
                        dispose: function() {
                            this.deactivate()
                        }
                    }), e.element2selector = n(3).assign({}, e.element2selector, {
                        input: e.inputSelector
                    })
                },
                isAutoFocusInput: !1,
                selectedItemIndex: 0,
                oldInputText: null,
                defaults: {
                    inputSelector: "",
                    zIndexLevel: "content",
                    menuOffset: "0 0",
                    showAllItems: !1,
                    selectOnTab: !1,
                    selectOnArrowNavigation: !1,
                    typingDelay: 250,
                    defaultSelectedItemIndex: 0,
                    MenuContentView: null,
                    menuContentViewArgs: null,
                    getMenuWidth: function() {
                        return this.getRelativeElement().outerWidth()
                    },
                    getRelativeElement: function() {
                        return this.getInput()
                    },
                    getInput: function() {
                        return this.getElement("input")
                    },
                    onItemSelected: n(3).noop,
                    onItemHighlighted: n(3).noop,
                    onClose: n(3).noop,
                    updateMenuContent: function(e, t) {
                        e.replaceContentView(t)
                    }
                },
                merge: {
                    bubbleEvents: {
                        itemClick: _,
                        itemHighlighted: v
                    }
                },
                activate: function() {
                    r.call(this, !0)
                },
                deactivate: function() {
                    r.call(this, !1)
                },
                focusInput: function() {
                    this.getInput().focus()
                },
                emptyInput: function() {
                    var e = this.getInput();
                    return e.val(""), this.updateQuery(), e
                },
                replaceInputValue: function(e) {
                    this.getInput().val(e)
                },
                inputHasQuery: function() {
                    return !!(this.getInput().val() || "").trim()
                },
                isInputDisplayed: function() {
                    return this.getInput().is(":visible")
                },
                selectActiveItem: function() {
                    var e = o.call(this);
                    return !(!e || !e.selectItem(this.selectedItemIndex))
                },
                updateQuery: function() {
                    var e = this.getInput().val();
                    e !== this.oldInputText && (this.oldInputText = e, this.selectedItemIndex = this.defaultSelectedItemIndex, window.clearTimeout(this.suggestTimeout), e || this.showAllItems ? this.suggestTimeout = this.addTimeout(this.showSuggestionsMenu, this.typingDelay) : this.closeMenu())
                },
                showSuggestionsMenu: function() {
                    (this.inputHasQuery() || this.showAllItems) && (this.openMenu(), i.call(this))
                },
                getMenuItemCount: function() {
                    var e = o.call(this);
                    return e ? e.getItemCount() : 0
                },
                isMenuOpened: function() {
                    var e = this.getMenu();
                    return e && e.isOpened
                },
                getMenu: function() {
                    return this.subviews.comboBoxMenu
                },
                createMenu: function() {
                    var e = this.getMenu();
                    return e && e.disposed && (this.removeSubview(e), e = null), e || (e = this.addSubview(new(n(393))({
                        Subview: this.MenuContentView,
                        subviewArgs: a.call(this),
                        togglerEl: this.getRelativeElement()[0],
                        relativeElement: this.getRelativeElement()[0],
                        relativeElementAnchor: "left bottom",
                        anchor: "left top",
                        focusable: !1,
                        offset: this.menuOffset,
                        width: this.getMenuWidth(),
                        zIndexLevel: this.zIndexLevel
                    }), "comboBoxMenu"), this.listenTo(e, n(393).Events.CLOSED, this.onClose)), e
                },
                openMenu: function() {
                    !this.isInputDisplayed() || this.disposed || this.isMenuOpened() || (this.getInput().attr("aria-expanded", "true"), this.createMenu().open(), i.call(this), y.call(this, !0))
                },
                closeMenu: function() {
                    if (!this.disposed && this.isMenuOpened()) {
                        var e = this.getMenu();
                        this.selectedItemIndex = this.defaultSelectedItemIndex, e && (e.close(!1, !1), this.getInput().attr("aria-expanded", "false")), y.call(this, !1)
                    }
                },
                getMenuContent: o
            }), p(function(e) {
                return e - 1
            })),
            k = p(function(e) {
                return e + 1
            })
    },
    378: function(e, t, n) {
        "use strict";
        var i = n(591).whenElementVisible;
        e.exports = new(n(21))({
            requirePrototype: n(53).prototype,
            around: {
                fetchData: function(e) {
                    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), o = 1; t > o; o++) r[o - 1] = arguments[o];
                    var a = this.addDeferred(n(55).deferFrom(i(this.el)));
                    return a.then(function() {
                        return e(r)
                    }), a
                }
            }
        })
    },
    379: function(e, t, n) {
        "use strict";

        function i() {
            var e = n(54).get("router"),
                t = e.currentLayout;
            if (t) {
                if (t instanceof n(203)) return this.options.responsive && r() <= a;
                if (t instanceof n(1416)) return this.options.responsive && r() <= s
            }
            return !1
        }

        function r() {
            return l = l || window.innerWidth
        }

        function o() {
            l = null
        }
        var a = 1079,
            s = 904,
            l = null;
        n(94).on("resize:x:throttled", o);
        e.exports = n(1848).withOptions({
            shouldShowTooltip: i
        })
    },
    380: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            requirePrototype: n(53).prototype,
            applyTo: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    i = t.names,
                    r = void 0 === i ? [] : i;
                this.before(e, {
                    setup: function() {
                        var e = this;
                        this._rollouts = this.addDataSource(new(n(521))({}, {
                            names: r
                        }), {
                            requiredAttributes: r
                        }), this.listenToOnce(n(56), "connect:login", function() {
                            return e.fetchRollouts()
                        })
                    }
                })
            },
            defaults: {
                getRollout: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0];
                    return this._rollouts.get(e)
                },
                fetchRollouts: function() {
                    return this._rollouts.fetch()
                }
            }
        })
    },
    390: function(e, t, n) {
        "use strict";

        function i() {
            var e, t;
            this.fullScreen || (e = this.$el.width(), t = this.$el.height()), this.initCanvasDimensions(e, t), this.onCanvasResize()
        }

        function r(e) {
            var t = e.recalcOnWindowResizeX,
                n = e.recalcOnWindowResizeY;
            return t && n ? "resize:debounced" : t ? "resize:x:debounced" : n ? "resize:y:debounced" : ""
        }
        var o = function() {
                var e = window.document.createElement("canvas").getContext("2d");
                return e.backingStorePixelRatio || e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || 1
            }(),
            a = window.devicePixelRatio ? (Math.floor(window.devicePixelRatio) || 1) / o : 1;
        e.exports = n(53).extend({
            tagName: "canvas",
            className: "g-box-full waveform__layer",
            attributes: {
                "aria-hidden": "true"
            },
            context: null,
            scale: null,
            template: n(3).constant(""),
            onCanvasResize: n(3).noop,
            recalcOnWindowResizeX: !0,
            recalcOnWindowResizeY: !1,
            _setup: function() {
                this.context = this.el.getContext("2d"), this.scale = a;
                var e = r(this);
                e && this.listenTo(n(94), e, i), n(53).prototype._setup.apply(this, arguments)
            },
            renderDecorate: function() {
                var e = this;
                this.whenInserted().done(function() {
                    e.initCanvasDimensions(), e.onCanvasResize()
                })
            },
            initCanvasDimensions: function(e, t) {
                var i = this.context,
                    r = i.canvas,
                    o = this.scale;
                this.fullScreen && (e = window.innerWidth, t = window.innerHeight, r.style.width = e + "px", r.style.height = t + "px");
                var a = e || this.el.offsetWidth,
                    s = t || this.el.offsetHeight;
                r.width = a * o, r.height = s * o, n(107).isHiDPI && 1 !== o && i.scale(o, o)
            }
        })
    },
    391: function(e, t, n) {
        (function(t) {
            "use strict";
            var i, r = e.exports = n(53).extend(n(211), {
                css: n(3429),
                template: n(3019),
                className: "dialog sc-border-box",
                defaults: {
                    text: null,
                    smallText: !1,
                    extraClassNames: "rounded",
                    margin: 10
                },
                element2selector: {
                    content: ".dialog__content",
                    arrow: ".dialog__arrow"
                },
                states: {
                    smallText: "smallText"
                },
                setup: function(e) {
                    var t = e.smallText,
                        n = e.extraClassNames;
                    this.toggleState("smallText", t), this.$el.addClass(n)
                },
                getOverlayContentEl: function() {
                    return this.getElement("content")
                },
                positionDecorate: function() {
                    var e, n, i, r, o = this.options,
                        a = o.anchor;
                    this.$el.addClass("dialog__" + a.replace(/ /g, "")), this.options.relativeElement && / center|^(left|right)$/.test(a) && (e = t(this.options.relativeElement), n = this.$el.offset().top, i = e.offset().top, r = i - n + e.height() / 2 - 5.5, this.getElement("arrow").css({
                        top: r
                    }))
                }
            }, {
                setDialogTypes: function(e) {
                    i = e
                },
                create: function(e, t, o, a) {
                    var s, l, u = i[e];
                    return u ? (s = n(3).assign({}, a && a.subviewArgs, u.subviewArgs, o), l = new r(n(3).defaults({
                        subviewArgs: s,
                        relativeElement: t
                    }, a, u))) : void 0
                }
            })
        }).call(t, n(1))
    },
    392: function(e, t, n) {
        "use strict";

        function i(e) {
            n(94)[e]("scroll:throttled", r, this)
        }

        function r() {
            var e = window.document,
                t = (e.documentElement.scrollTop || e.body.scrollTop) > this.options.activeScrollOffset;
            this.toggleState("active", t)
        }
        e.exports = n(53).extend({
            template: n(3020),
            css: n(3430),
            className: "dropbar",
            states: {
                active: "m-active",
                insideContent: "m-insideContent"
            },
            defaults: {
                activeScrollOffset: 400,
                insideContent: !0,
                blockContent: ""
            },
            setup: function(e) {
                var t = e.insideContent;
                this.toggleState("insideContent", t), i.call(this, "on")
            },
            dispose: function() {
                i.call(this, "off")
            }
        })
    },
    393: function(e, t, n) {
        (function(t) {
            "use strict";
            e.exports = n(53).extend(n(211), {
                className: "dropdownMenu",
                events: {
                    click: "onClick"
                },
                defaults: {
                    collision: "fit flip",
                    margin: 0,
                    text: null
                },
                onClick: function(e) {
                    t(e.target).closest('a[href^="/"]').length || e.stopPropagation()
                }
            })
        }).call(t, n(1))
    },
    394: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                var e = this,
                    i = this.options.autocomplete;
                if (i && "off" !== i) {
                    var r = t("<input>", {
                        type: "text",
                        autocomplete: i,
                        "class": "sc-visuallyhidden",
                        tabIndex: -1
                    });
                    r.on("change", function() {
                        var t = r.val(),
                            i = n(89).codeToCountry(t);
                        i && (e.setValue(i), e.getFocusableElement().change())
                    }), this.$el.append(r)
                }
            }
            e.exports = n(268).extend(n(384), {
                defaults: {
                    regions: null
                },
                getComboItems: function(e) {
                    var t = e.regions;
                    return [{
                        title: "",
                        value: ""
                    }].concat(n(89).countries(n(3).pluck(t, "value")))
                },
                getTemplateData: function(e) {
                    e = n(268).prototype.getTemplateData.call(this, e) || e;
                    var t = e._options.autocomplete;
                    return t && (e._options.autocomplete = "off"), e
                },
                renderDecorate: function() {
                    n(268).prototype.renderDecorate.apply(this, arguments), i.call(this)
                },
                getValue: function() {
                    var e = this.getControlValue(),
                        t = this.getValueByTitle(e);
                    return e.length && this.setValid(!!t, n(50).t("Enter a country.")), t
                }
            })
        }).call(t, n(1))
    },
    395: function(e, t, n) {
        "use strict";
        var i = /soundcloud\.com\/([^\/]+)/i;
        e.exports = n(60).extend({
            getValue: function() {
                var e = n(60).prototype.getValue.call(this),
                    t = e.match(i);
                return t ? t[1] : e
            }
        })
    },
    396: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                imageUrl: e.getImageUrl(),
                fallbackId: e.id
            }
        }
        e.exports = new(n(21))({
            applyTo: function(e, t) {
                var r = t.angle,
                    o = t.colorAdjustment,
                    a = t.imageOverlay,
                    s = void 0 === a ? !1 : a;
                this.before(e, {
                    renderDecorate: function() {
                        this.updateGradient()
                    }
                }), this.extend(e, {
                    updateGradient: function() {
                        var e = this.subviews.gradient;
                        e || (e = this.addSubview(new(n(1447))({
                            angle: r,
                            colorAdjustment: o
                        }), "gradient"), e.render().$el.appendTo(this.el));
                        var t = this.getGradientModel();
                        if (t) {
                            var a = i(t),
                                l = a.imageUrl,
                                u = a.fallbackId;
                            e.setImageUrl(l, u, s)
                        }
                    }
                })
            },
            after: {
                setup: function() {
                    this.el.style.height = "100%", this.model && this.listenTo(this.model, "imageDataChanged", this.updateGradient)
                }
            },
            override: {
                template: function() {
                    return ""
                },
                onModelChange: function() {
                    this.updateGradient()
                }
            },
            defaults: {
                getGradientModel: function() {
                    return this.model
                }
            }
        })
    },
    406: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend({
            className: "commentTitle",
            css: n(1247),
            template: n(1160),
            ModelClass: n(116),
            requiredAttributes: ["body", "track_id", "created_at"],
            defaults: {
                dark: !1,
                show_icon: !0,
                show_time: !1,
                body_is_link: !0,
                compact: !0
            },
            setup: function() {
                this.setupTrack(), this.track || this.listenTo(this.model, "change:track_id", this.setupTrack)
            },
            setupTrack: function() {
                if (!this.track) {
                    var e = this.model.get("track_id") || this.model.get("track") && this.model.get("track").id;
                    e && (this.track = this.addDataSource(new(n(67))({
                        id: e
                    }), {
                        requiredAttributes: ["title", "permalink_url"]
                    }))
                }
            },
            rerender: function() {
                this.setupTrack(), n(53).prototype.rerender.call(this)
            },
            getTemplateData: function(e) {
                return e.track || (e.track = this.track.toJSON()), e
            }
        })
    },
    408: function(e, t, n) {
        "use strict";
        e.exports = n(99).extend({
            className: "sc-button-delete",
            ModelClass: n(116),
            defaults: {
                icon_only: !0,
                ContentViewClass: n(1949),
                overlayType: "dialog",
                overlayOptions: {
                    relativeElementAnchor: "center bottom",
                    anchor: "right top",
                    offset: "18 7",
                    width: "220px"
                }
            },
            buttonLabels: {
                "default": n(50).t("Delete this comment")
            }
        })
    },
    409: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend(n(68).withOptions("followButton"), n(79), {
            className: "sc-button-follow",
            defaults: {
                is_cta: !1
            },
            states: {
                selected: function(e) {
                    this.$el.toggleClass("sc-button-cta", this.options.is_cta && !e).toggleClass("sc-button-selected", e);
                    var t = e ? "selected" : "default";
                    this.updateButton(t)
                }
            },
            buttonLabels: {
                "default": function() {
                    return this.myFollowers.get(this.userId) ? n(50).t("Follow back") : n(50).t("Follow")
                },
                selected: {
                    text: n(50).t("Following", null, {
                        context: "button"
                    }),
                    title: n(50).t("Unfollow")
                }
            },
            userId: null,
            loadingTemplate: null,
            setup: function(e) {
                this.userId = e.resource_id, this.observedAttributes = [this.userId], this.model = new(n(518)), this.myFollowers = this.addDataSource(new(n(1456)), {
                    observedAttributes: [this.userId]
                }), this.$el.toggleClass("sc-button-cta", e.is_cta)
            },
            isButtonSelected: function() {
                return !!this.model.get(this.userId)
            },
            onClick: function(e) {
                var t = !this.model.get(this.userId),
                    i = this.getContextData();
                n(75).follow(this.userId, t, {
                    context: i
                }), e.preventDefault()
            }
        })
    },
    410: function(e, t, n) {
        "use strict";
        var i, r = {
            POST: "comment:replyPost",
            SENT: "comment:replySent",
            CANCEL: "comment:replyCancel",
            OPEN: "comment:replyOpen"
        };
        e.exports = n(53).extend(n(79), {
            className: "replyActivityComment sc-button-reply",
            css: n(1250),
            ModelClass: n(116),
            states: {
                active: function(e) {
                    this.$el.toggleClass("replyActivityComment-hidden", e), e ? i.call(this) : this.disposeSubviews()
                }
            },
            defaults: {
                size: "small"
            },
            buttonLabels: {
                "default": n(50).t("Reply")
            },
            onClick: function(e) {
                e.stopPropagation(), this.toggleState("active")
            },
            triggerCommentFormPosted: function(e) {
                this.trigger(r.POST, e)
            },
            triggerCommentFormSent: function(e, t) {
                this.trigger(r.SENT, e, t)
            },
            triggerCommentFormCancel: function(e) {
                this.trigger(r.CANCEL, e)
            },
            triggerCommentFormOpen: function(e) {
                this.trigger(r.OPEN, e)
            }
        }, {
            Events: r
        });
        i = function() {
            var e = this.model.toJSON(),
                t = this.addSubview(new(n(196))({
                    resource_id: e.track_id,
                    sound_id: e.track_id,
                    size: this.options.size,
                    timestamp: e.timestamp || n(116).EMPTY_TIMESTAMP,
                    recipient: e.user.permalink
                }));
            this.triggerCommentFormOpen(t), this.listenTo(t, n(196).Events.POSTED, function() {
                this.triggerCommentFormPosted(t)
            }), this.listenTo(t, n(196).Events.SENT, function(e) {
                this.triggerCommentFormSent(t, e), this.disposed || (this.toggleState("active", !1), this.disposeSubviews())
            }), this.listenTo(t, n(196).Events.CANCELED, function() {
                t.isEmpty() && (this.triggerCommentFormCancel(t, this.model), this.toggleState("active", !1))
            })
        }
    },
    412: function(e, t, n) {
        "use strict";
        var i = n(58).trackV0ClickWithPromotedParams;
        e.exports = n(99).extend(n(379), n(68).withOptions("shareButton"), {
            className: "sc-button-share",
            defaults: {
                fixOverflow: !1,
                share_type: null,
                overlayType: "modal",
                overlayOptions: {
                    width: 550,
                    transparentBackground: !0
                },
                ContentViewClass: n(2175),
                hasActiveState: !1
            },
            buttonLabels: {
                "default": n(50).t("Share")
            },
            setup: function(e) {
                n(99).prototype.setup.apply(this, arguments), this.options.contentViewArgs = n(3).assign({}, this.options.contentViewArgs, {
                    share_type: e.share_type
                }), this.options.fixOverflow && this.$el.addClass("fix-overflow")
            },
            onContextRequest: function(e) {
                e.data.urn = n(88).generate(this.options.resource_type, this.options.resource_id)
            },
            onOverlayToggle: function(e) {
                if (n(99).prototype.onOverlayToggle.apply(this, arguments), e) {
                    var t = this.getContextData();
                    n(91).trackEvent("share", t), i(null, {
                        context: t,
                        click_object: t.urn,
                        click_name: "share::prompt"
                    })
                }
            }
        })
    },
    443: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".activity__commentPlay{height:24px;width:24px;float:left;margin-right:8px}.activity__sharing{font-size:14px;padding-top:10px}.activity__sharingNote{padding-bottom:10px}.activity__sharingNote-container{background-color:#fff;position:relative;top:-5px}.activity__sharingNote-container.isPlaylist{position:static;margin-top:10px}.activity__sharingNote-text{margin-top:2px}", ""])
    },
    455: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var a;
                return "  " + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(101), {
                    name: "$view",
                    hash: {
                        show_context: null != (a = null != t ? t._options : t) ? a.show_context : a,
                        time_to_show: null != t ? t.created_at : t,
                        time_display_prefix: null != t ? t.time_prefix : t,
                        resource_type: null != t ? t.subresource_type : t,
                        resource_id: null != (a = null != t ? t.audible : t) ? a.id : a
                    },
                    data: o
                })) + "\n"
            },
            3: function(e, t, i, r, o) {
                var a;
                return "  " + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(101), {
                    name: "$view",
                    hash: {
                        show_context: null != (a = null != t ? t._options : t) ? a.show_context : a,
                        time_to_show: null != t ? t.created_at : t,
                        time_display_prefix: null != t ? t.time_prefix : t,
                        actionType: "repost",
                        actorId: null != (a = null != t ? t.user : t) ? a.id : a,
                        resource_type: null != t ? t.subresource_type : t,
                        resource_id: null != (a = null != t ? t.audible : t) ? a.id : a
                    },
                    data: o
                })) + "\n"
            },
            5: function(e, t, i, r, o) {
                var a;
                return "  " + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(101), {
                    name: "$view",
                    hash: {
                        time_to_show: null != t ? t.created_at : t,
                        time_display_prefix: null != t ? t.time_prefix : t,
                        actionType: "like",
                        actorId: null != (a = null != t ? t.user : t) ? a.id : a,
                        resource_type: null != t ? t.subresource_type : t,
                        resource_id: null != (a = null != t ? t.audible : t) ? a.id : a
                    },
                    data: o
                })) + "\n"
            },
            7: function(e, t, i, r, o) {
                var a;
                return "  " + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(101), {
                    name: "$view",
                    hash: {
                        show_context: null != (a = null != t ? t._options : t) ? a.show_context : a,
                        is_promoted: !0,
                        resource_type: null != t ? t.subresource_type : t,
                        resource_id: null != (a = null != t ? t.audible : t) ? a.id : a
                    },
                    data: o
                })) + "\n"
            },
            9: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing;
                return "  " + e.escapeExpression((n(52) || t && t.$view || l).call(s, n(101), {
                    name: "$view",
                    hash: {
                        time_to_show: null != t ? t.created_at : t,
                        time_display_prefix: null != t ? t.time_prefix : t,
                        resource_type: null != t ? t.subresource_type : t,
                        resource_id: null != (a = null != t ? t.audible : t) ? a.id : a
                    },
                    data: o
                })) + '\n    <div class="activity__sharingNote-container' + (null != (a = i["if"].call(s, null != t ? t.type_is_playlisty : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '">\n      <div class="activity__sharingNote sc-border-light-bottom">' + (null != (a = (n(51) || t && t.$t || l).call(s, {
                    name: "$t",
                    hash: {
                        contentType: null != t ? t.contentType : t,
                        username: null != (a = null != t ? t.user : t) ? a.username : a,
                        route: (n(57) || t && t.$route || l).call(s, "user", null != t ? t.user : t, {
                            name: "$route",
                            hash: {},
                            data: o
                        })
                    },
                    fn: e.program(12, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + (null != (a = i["if"].call(s, null != t ? t.sharing_note : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(14, o, 0),
                    inverse: e.program(16, o, 0),
                    data: o
                })) ? a : "") + "\n      </div>\n    </div>\n"
            },
            10: function(e, t, n, i, r) {
                return " isPlaylist"
            },
            12: function(e, t, n, i, r) {
                return '          <a href="[[route]]" class="sc-link-dark">[[username]]</a> shared this [[contentType]] with you\n'
            },
            14: function(e, t, i, r, o) {
                var a;
                return ':<div class="sc-text-light activity__sharingNote-text">“' + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(243), {
                    name: "$view",
                    hash: {
                        className: "g-inline",
                        paragraphs: !1,
                        usertext: !0,
                        content: null != (a = null != t ? t.sharing_note : t) ? a.text : a
                    },
                    data: o
                })) + "”</div>"
            },
            16: function(e, t, n, i, r) {
                return "."
            },
            18: function(e, t, i, r, o) {
                return "  " + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(434), {
                    name: "$view",
                    hash: {},
                    data: o
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, a = null != t ? t : {};
                return (null != (o = n["if"].call(a, null != t ? t.type_is_audible : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n["if"].call(a, null != t ? t.type_is_repost : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n["if"].call(a, null != t ? t.type_is_like : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n["if"].call(a, null != t ? t.type_is_track_promoted : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n["if"].call(a, null != t ? t.type_is_playlist_promoted : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n["if"].call(a, null != t ? t.type_is_sharing : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(9, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n["if"].call(a, null != (o = null != t ? t._options : t) ? o.showHTUpsell : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(18, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "")
            },
            useData: !0
        })
    },
    464: function(e, t, n) {
        var i = n(443);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    506: function(e, t, n) {
        "use strict";

        function i() {
            var e = this.editableObject,
                t = e.isEditing(),
                n = this.enterEditingStateDefaults || {};
            this.toggleState("canceling", e.isCanceling()).toggleState("editing", t).toggleState("saving", e.isSaving()), t && n.addNavigationBlock && !this._navBlockId && o.call(this)
        }

        function r(e, t, r) {
            i.call(this), r === n(144).EDITING && this._navBlockId && a.call(this)
        }

        function o() {
            var e = this;
            this._navBlockId = n(54).get("router").addNavigationBlock("These changes haven’t been saved yet.", function(t) {
                var i = t && window.confirm("Are you sure you want to leave without saving changes?");
                return i && e.editableObject.setEditState(n(144).NONE), i
            })
        }

        function a() {
            n(54).get("router").removeNavigationBlock(this._navBlockId), this._navBlockId = null
        }
        e.exports = new(n(21))({
            _navBlockId: null,
            requires: ["editableObject"],
            defaults: {
                onEditEnter: n(3).noop,
                onEditLeave: n(3).noop,
                enterEditingStateDefaults: null
            },
            applyTo: function(e) {
                var t = this.element2selector;
                e.states = n(3).assign(e.states || {}, {
                    editing: function(e) {
                        this.$el.toggleClass("editing", e), this[e ? "onEditEnter" : "onEditLeave"]()
                    },
                    saving: function(e) {
                        this.$el.toggleClass("saving", e), t && t.editButton && this.getElement("editButton").toggleClass("sc-pending", e)
                    },
                    canceling: function(e) {
                        this.$el.toggleClass("canceling", e), t && t.editButton && this.getElement("editButton").attr("disabled", e)
                    }
                })
            },
            after: {
                setup: function() {
                    this.editableObject.on("change:editState", r, this)
                },
                dispose: function() {
                    this.editableObject.off("change:editState", r, this), a.call(this)
                },
                renderDecorate: function() {
                    i.call(this)
                }
            },
            around: {
                rerender: function(e, t) {
                    this.getState("canceling") || this.getState("saving") ? this.addDeferred(n(3).delay(this.rerender.bind(this), 100)) : e(t)
                }
            },
            enterEditingState: function() {
                this.editableObject.setEditState(n(144).EDITING)
            },
            onEditButtonClick: function() {
                this.enterEditingState()
            },
            onCancelButtonClick: function() {
                this.editableObject.setEditState(n(144).CANCELING), a.call(this)
            },
            onSaveButtonClick: function() {
                this.editableObject.setEditState(n(144).SAVING), a.call(this)
            }
        })
    },
    523: function(e, t, n) {
        "use strict";

        function i(e) {
            return n(54).get("me").owns(e)
        }
        var r = n(58).trackV0ClickWithPromotedParams;
        e.exports = n(53).extend(n(79), n(379), {
            className: "sc-button-download",
            attributes: {
                rel: "nofollow"
            },
            ModelClass: n(67),
            requiredAttributes: ["title", "download_url"],
            buttonLabels: {
                "default": function() {
                    return {
                        text: n(50).t("Download file"),
                        title: n(50).t("Download this track")
                    }
                }
            },
            renderDecorate: function() {
                var e = this.model;
                this.$el.attr("download", e.get("title")), this.toggleState("disabled", !e.has("download_url"))
            },
            missingRequiredData: function(e) {
                var t = e.source;
                return i(t) && !t.has("download_url") ? !0 : n(53).prototype.missingRequiredData.apply(this, arguments)
            },
            fetchDataFromSource: function(e) {
                var t = e.source,
                    n = i(t);
                return t.fetch({
                    url: n ? t.ownerUrl() : t.baseUrl(),
                    attrs: this.requiredAttributes,
                    reset: !0,
                    batch: !n
                })
            },
            onClick: function() {
                var e = this.getContextData(),
                    t = {
                        client_id: n(54).get("client_id"),
                        oauth_token: n(61).getAuthToken() || null
                    };
                this.model.isPrivate() && (t.secret_token = this.model.get("secret_token"));
                var i = n(65).modify(this.model.get("download_url"), {
                    query: t
                });
                n(61).login({
                    implicitAction: "download"
                }).then(function() {
                    window.location.href = i, r(null, {
                        click_name: "download",
                        click_object: e.urn,
                        context: e
                    })
                })
            }
        })
    },
    524: function(e, t, n) {
        "use strict";
        var i = n(58).trackV0ClickWithPromotedParams;
        e.exports = n(53).extend(n(381), {
            className: "sc-button-addtoset",
            defaults: {
                text: n(50).t("Add to playlist", null, {
                    context: "indefinite"
                }),
                soundIds: null
            },
            ModalClass: n(530),
            getModalArgs: function(e) {
                return {
                    width: 550,
                    transparentBackground: !0,
                    Subview: n(718),
                    subviewArgs: {
                        soundIds: e.soundIds
                    }
                }
            },
            requiresLogin: function() {
                return !0
            },
            loginOptions: function() {
                return {
                    implicitAction: "playlist",
                    implicitTarget: n(88).generate(this.options.resource_type, this.options.resource_id)
                }
            },
            onModalOpen: function() {
                var e = this.getContextData();
                n(91).trackEvent("addToSet", e), i(null, {
                    context: e,
                    click_name: "track_to_playlist::prompt",
                    click_object: e.urn
                })
            }
        })
    },
    525: function(e, t, n) {
        "use strict";

        function i() {
            this.el.setAttribute("href", n(132).getStationPageUrl(this.model))
        }
        e.exports = n(53).extend(n(79), {
            className: "sc-button-startstation",
            tagName: "a",
            defaults: {
                stationType: null,
                stationId: null,
                text: n(50).t("Station"),
                title: n(50).t("Go to station"),
                noStyle: !1,
                isScButton: !0,
                text_only: !1,
                noFollow: !1
            },
            _stationUrn: null,
            setup: function(e) {
                var t = e.stationType,
                    i = e.stationId,
                    r = n("track" === t ? 67 : 63);
                this.model = this.addDataSource(new r({
                    id: i
                }), {
                    requiredAttributes: ["permalink_url"]
                }), this._stationUrn = n(88).fromComponents({
                    collection: t + "-stations",
                    id: i
                })
            },
            onClick: function(e) {
                e.preventDefault(), n(58).trackClickThrough({
                    context: this.getContextData(),
                    target: this._stationUrn
                }), n(54).get("router").navigate(n(132).getStationPageUrl(this.model), {
                    trigger: !0,
                    replace: !1
                })
            },
            renderDecorate: function() {
                "a" === this.tagName && (i.call(this), this.options.noFollow && this.el.setAttribute("rel", "nofollow"))
            }
        })
    },
    526: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend({
            className: "commentFormDisabled",
            css: n(3476),
            template: function() {
                return "unconfirmed_user" === this.options.type ? n(50).t("Verify your email to write comments.") : n(50).t("Comments are disabled for this track.")
            },
            defaults: {
                size: "large",
                initially_visible: !1,
                type: null
            },
            states: {
                visible: "visible"
            },
            setup: function(e) {
                this.$el.addClass(e.size), this.toggleState("visible", e.initially_visible)
            }
        })
    },
    527: function(e, t, n) {
        "use strict";

        function i(e) {
            var t, i, r = n(54).get("router"),
                o = n(65).parse(e);
            return "soundcloud.com" === o.host && (t = o.relative || "/", i = r.getUrlInfo(t), "404" !== i.name) ? t : e
        }
        var r = n(58).trackV0Click,
            o = n(58).trackImpression;
        e.exports = n(53).extend({
            template: n(3072),
            css: n(3484),
            className: "dashbox",
            tagName: "article",
            defaults: {
                adZone: ""
            },
            events: {
                "click .dashbox__header a": "onWhyAdsClick",
                "click .dashbox__wrapper a": "onDashboxClick"
            },
            states: {
                loading: "m-loading"
            },
            observedAttributes: ["title"],
            _whyAdsModal: null,
            setup: function(e) {
                this.model = new(n(1899))(null, {
                    adZone: e.adZone
                })
            },
            getTemplateData: function(e) {
                var t = {};
                return t.isAd = this.model.isAd(), t.hasContent = this.model.hasContent(), this.model.isVisualDashbox() ? (t.isVisualDashbox = !0, t.ad_visual = e.ad_visual, t.landing_page = i(e.landing_page), t.openInNewTab = t.landing_page === e.landing_page, t.title = e.title) : this.model.isStandardDashbox() && (t.isStandardDashbox = !0, t.click_through_url = i(e.click_through_url), t.openInNewTab = t.click_through_url === e.click_through_url, t.icon_url = e.icon_url, t.title = e.title, t.body = e.body, t.button_text = e.button_text), t
            },
            renderDecorate: function() {
                this.listenToOnce(n(56), "connect:hasUserData", this.rerender), this.model.hasContent() && (this.$el.toggleClass("m-ad", this.model.isAd()), this.model.isVisualDashbox() && (this.toggleState("loading", !0), this.addDeferred(n(87).load(this.model.get("ad_visual"))).then(this.toggleState.bind(this, "loading", !1))), n(91).trackEvent("impression", this.model.pick("tracking")), o({
                    ad_urn: this.model.get("ad_urn"),
                    monetization_type: "dashbox",
                    external_media: this.model.isVisualDashbox() ? this.model.get("ad_visual") : this.model.get("icon_url"),
                    impression_name: this.model.isVisualDashbox() ? "dashbox_visual" : "dashbox",
                    context: this.getContextData()
                }))
            },
            teardown: function() {
                this.stopListening(n(56), "connect:hasUserData")
            },
            onDashboxClick: function() {
                n(91).trackEvent("adClick", this.model.pick("tracking")), r(null, {
                    click_name: this.model.isVisualDashbox() ? "clickthrough::dashbox_visual" : "clickthrough::dashbox",
                    click_target: this.model.isVisualDashbox() ? this.model.get("click_through_url") : this.model.get("landing_page"),
                    monetization_type: "dashbox",
                    external_media: this.model.isVisualDashbox() ? this.model.get("ad_visual") : this.model.get("icon_url"),
                    ad_urn: this.model.get("ad_urn"),
                    context: this.getContextData()
                })
            },
            onWhyAdsClick: function(e) {
                e.preventDefault(), this._whyAdsModal || (this._whyAdsModal = new(n(1493))({
                    togglerEl: e.target
                })), this._whyAdsModal.open(), r(null, {
                    click_name: "companion_display::why_ads",
                    monetization_type: "dashbox",
                    ad_urn: this.model.get("ad_urn"),
                    context: this.getContextData()
                })
            },
            dispose: function() {
                this._whyAdsModal && (this._whyAdsModal.close(), this._whyAdsModal = null)
            }
        })
    },
    553: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a;
                return e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(188), {
                    name: "$view",
                    hash: {
                        key: "checkbox",
                        showLabel: null != (a = null != t ? t._options : t) ? a.showLabel : a,
                        checked: null != t ? t.isChecked : t,
                        disabled: null != t ? t.disabled : t,
                        label: null != (a = null != t ? t._options : t) ? a.label : a
                    },
                    data: o
                })) + "\n"
            },
            useData: !0
        })
    },
    556: function(e, t, n) {
        var i = n(2396);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    600: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))(n(117), n(602).withOptions({
            action: function(e) {
                var t = e.actionOnEnter;
                return t
            }
        }), {
            applyTo: function(e) {
                this.merge(e, {
                    defaults: {
                        label: null,
                        showLabel: !0,
                        actionOnEnter: "",
                        updateWithoutMarkingDirty: !1
                    },
                    states: {
                        invalid: function(e) {
                            this.$el.toggleClass("invalid", e), this.getElement("validation").toggleClass("g-input-validation-hidden", !e)
                        },
                        disabled: "m-disabled",
                        indeterminate: function(e) {
                            var t = this.subviews.checkbox;
                            t && t.setIndeterminate(e)
                        }
                    },
                    bubbleEvents: {
                        "checkbox:change": "onCheckboxChange"
                    },
                    element2selector: {
                        validation: ".checkboxFormControl__validation"
                    },
                    className: "checkboxFormControl"
                })
            },
            after: {
                renderDecorate: function() {
                    this.$el.append('<div class="checkboxFormControl__validation g-input-validation g-input-validation-hidden"></div>'), this.resetElementCache(), this.toggleState("disabled", this.getMetaData().disabled === !0)
                }
            },
            around: {
                getTemplateData: function(e, t) {
                    var i = n(3).defaults(t || {}, {
                        isChecked: this.getFieldValue(),
                        disabled: this.getMetaData().disabled === !0
                    });
                    return e(i) || i
                }
            },
            onFieldChange: function() {
                var e = this.getFieldValue();
                this.subviews.checkbox.setChecked(e)
            },
            onCheckboxChange: function(e) {
                var t = e.data.checked;
                this.setFieldValue(t, !this.options.updateWithoutMarkingDirty), this.validateOwnField()
            },
            onValidationChange: function(e) {
                e.isValid || this.getElement("validation").html(e.message.toString()), this.toggleState("invalid", !e.isValid)
            },
            getInput: function() {
                return this.subviews.checkbox.getElement("input")
            },
            getLabel: function() {
                return this.subviews.checkbox.getElement("label")
            }
        })
    },
    602: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return function(n) {
                if (n.which === o) {
                    n.preventDefault();
                    var i = (e.getValue || e.getFieldValue).call(e);
                    e.setFieldValue(i), e.form.performAction(t)
                }
            }
        }
        var r = n(3).isFunction,
            o = n(108).ENTER;
        e.exports = new(n(21))({
            requirePrototype: n(53).prototype,
            applyTo: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    n = t.action,
                    o = void 0 === n ? "default" : n,
                    a = t.canBeApplied,
                    s = void 0 === a ? function(e) {
                        return !0
                    } : a;
                this.after(e, {
                    setup: function(e) {
                        if (s(this)) {
                            var t = this.form,
                                n = r(o) ? o.call(this, e) : o;
                            n && t.actions[n] && this.$el.on("keydown", i(this, n))
                        }
                    }
                })
            }
        })
    },
    603: function(e, t, n) {
        "use strict";
        var i = n(545).rolloutNames;
        e.exports = new(n(21))(n(380).withOptions({
            names: n(3).values(i)
        }), {
            defaults: {
                isKnownContentEligible: function() {
                    return this.getRollout(i.KNOWN_CONTENT_MONETIZATION)
                },
                isUnknownContentEligible: function() {
                    return this.getRollout(i.UNKNOWN_CONTENT_PAYOUTS)
                },
                isInvited: function() {
                    return this.isKnownContentEligible() || this.isUnknownContentEligible()
                }
            }
        })
    },
    604: function(e, t, n) {
        "use strict";

        function i() {
            this.toggleState("indeterminate", this.isIndeterminate())
        }

        function r(e) {
            return null === e
        }
        e.exports = new(n(21))({
            requires: ["onFieldChange"],
            applyTo: function(e) {
                e.states = n(3).defaults(e.states || {}, {
                    indeterminate: "m-indeterminate"
                })
            },
            around: {
                onFieldChange: function(e) {
                    r(this.getFieldValue()) || e.apply(this, [].slice.call(arguments, 1)), i.call(this)
                }
            },
            after: {
                renderDecorate: function() {
                    i.call(this)
                }
            },
            isIndeterminate: function() {
                return r(this.getFieldValue())
            }
        })
    },
    605: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = void 0;
            return t[e] ? n = e : 0 === e.indexOf("on") && (n = e.substr(2), n = n.charAt(0).toLowerCase() + n.slice(1)), n
        }
        var r = n(3).noop,
            o = n(3).isFunction;
        e.exports = new(n(21))({
            requirePrototype: n(53).prototype,
            applyTo: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    n = t.actionHandlers,
                    a = void 0 === n ? {} : n;
                this.before(e, {
                    setup: function() {
                        var e = this,
                            t = this.model;
                        Object.keys(a).forEach(function(n) {
                            var s = i(n, t.actions),
                                l = a[n];
                            o(l) && l !== r && e.listenTo(t, "complete:action:" + s, l)
                        })
                    }
                })
            }
        })
    },
    623: function(e, t, n) {
        "use strict";

        function i() {
            return this.model.getCurrentSound()
        }

        function r() {
            var e = this.model.playlist;
            return e && e.getSoundIndex(this.model) + 1
        }

        function o() {
            this.disposed || this.toggleState("active", this.model.isPlaying(), !0).toggleState("disabled", !this.model.isPlayable())
        }
        var a = n(186).withOptions({
            getSound: i
        });
        e.exports = n(53).extend(n(134), a, {
            template: n(3017),
            css: n(3426),
            className: "compactTrackListItem sc-media sc-border-light-bottom",
            ModelClass: n(82),
            requiredAttributes: {
                sound: ["user", "title", "artwork_url", "duration"],
                playlist: ["user", "title", "artwork_url"]
            },
            element2selector: {
                plays: ".compactTrackListItem__plays"
            },
            states: {
                active: "active",
                clickToPlay: "clickToPlay",
                disabled: "m-disabled"
            },
            events: {
                "click .compactTrackListItem__remove": "onRemoveClick"
            },
            defaults: {
                showUser: !0,
                showTrackNumber: !1,
                showPlaybackCount: !0,
                showRemoveButton: !1,
                clickToPlay: !0
            },
            loadingTemplate: function() {
                return '<img class="compactTrackListItem__image sc-media-image" width="20" height="20">' + (r.call(this) || "")
            },
            setup: function(e) {
                "sound" === e.resource_type && this.listenTo(this.model.getOriginalSound(), "change:playback_count", this.rerender).listenTo(this.model, "change:playable", this.rerender), e.clickToPlay && (this.listenTo(this.model, "play pause", this.onToggle), this.onClick = this.onClick.bind(this), this.$el.on("click", this.onClick).attr("tabindex", 0)), this.toggleState("clickToPlay", e.clickToPlay)
            },
            renderDecorate: function() {
                o.call(this), this.options.clickToPlay && this.$el.addClass("clickToPlay")
            },
            onClick: function(e) {
                e.preventDefault(), this.getState("disabled") || this.toggleAudible(this.model, {
                    userInitiated: !0
                })
            },
            onRemoveClick: function() {
                this.bubble("onRemoveClick", {
                    sound: this.model
                })
            },
            onToggle: function() {
                o.call(this)
            },
            getTemplateData: function(e) {
                var t = this.options,
                    i = this.model,
                    o = e.isSound = "sound" === e._resource_type,
                    a = !this.model.isPlayable();
                return e.playback_count = o && i.getOriginalSound().get("playback_count"), e.showPlaybackCount = e.playback_count && t.showPlaybackCount, e.track_number = o && r.call(this), e.showTrackNumber = null != e.track_number && t.showTrackNumber, e.showBlockedMsg = a, a && (e.blockedMsg = n(124).getShortBlockMessage()), e
            }
        })
    },
    627: function(e, t, n) {
        "use strict";

        function i(e, t, n) {
            n.dateTimeSilent || s.call(this)
        }

        function r(e) {
            var t = e.isValid;
            o.call(this, !t)
        }

        function o(e) {
            a(this.subviews.date, e), a(this.subviews.time, e)
        }

        function a(e, t) {
            e && e.toggleState("invalid", t)
        }

        function s() {
            var e = this,
                t = this.form.get(this.options.timezoneField),
                n = this.form.get(this.options.localDateField),
                i = null;
            n && t && (i = h.localToUtc(n, t)), this.resetOwnValidation(), this.form.set(this.field, i || n), this.form.validate({
                fields: [this.field]
            }).then(function(t) {
                return o.call(e, !t)
            })
        }

        function l(e) {
            var t, n = this.getFieldValue(),
                i = this.form.get(this.options.timezoneField),
                r = n ? h.utcToLocal(n, i) : null;
            this.form.set((t = {}, t[this.options.localDateField] = r, t), {
                dateTimeSilent: e
            })
        }

        function u(e, t, n) {
            var i = d("name", t);
            if (!i) return new Date(+e);
            var r = c(),
                o = i.utc_offset;
            return new Date(+e + n * (o - r) * 1e3)
        }
        var c = n(590).getLocalOffset,
            d = n(590).findTimezoneWhere,
            p = n(83).MS_IN_DAY,
            h = e.exports = n(53).extend(n(117), n(217), {
                className: "dateTime",
                template: n(3024),
                css: n(3439),
                element2selector: {
                    validation: ".datetime__validation"
                },
                defaults: {
                    label: null,
                    defaultDate: null,
                    minDate: null,
                    localDateField: null,
                    timezoneField: null,
                    oneline: !1
                },
                setup: function(e) {
                    var t = e.Form,
                        n = e.localDateField,
                        o = e.timezoneField,
                        a = e.oneline,
                        s = e.field;
                    this.model = new t(null, e), this.listenToFields([o, n], i), this.toggleState("oneline", a), this.listenTo(this.model, "validation:" + s, r)
                },
                states: {
                    oneline: "m-oneline"
                },
                renderDecorate: function() {
                    l.call(this), this.getFieldValue() || null === this.options.defaultDate || this.setDefaultDate()
                },
                setDefaultDate: function() {
                    var e = n(50).dateTimeHelper.floorTo30Minutes(new Date);
                    e = new Date(+e + this.options.defaultDate * p), this.form.set(this.field, e)
                },
                onFieldChange: function() {
                    l.call(this, !0)
                },
                getTemplateData: function(e) {
                    return n(3).assign(e, {
                        timezoneSize: this.getState("oneline") ? "medium" : "small"
                    })
                }
            }, {
                localToUtc: function(e, t) {
                    return u(e, t, -1)
                },
                utcToLocal: function(e, t) {
                    return u(e, t, 1)
                }
            })
    },
    628: function(e, t, n) {
        "use strict";
        e.exports = n(60).extend(n(1850), {
            defaults: {
                type: "textarea",
                resizing: "vertical",
                label: n(50).t("Description")
            }
        })
    },
    631: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = this.model,
                i = 1 === u.get(c),
                r = t.getFieldMetadata("publisherIsrcGenerated").disabled;
            if (i || r) return !0;
            if (e.preventDefault(), !this.generateDialog) {
                var o = this.getElement("generateWrapper");
                this.generateDialog = new(n(391))({
                    togglerEl: o,
                    relativeElement: o,
                    Subview: n(1965),
                    relativeElementAnchor: "left bottom",
                    anchor: "left top",
                    offset: "-12 8",
                    width: "250px",
                    subviewArgs: {
                        onSubmit: function() {
                            u.set(c, 1), t.set("publisherIsrcGenerated", !0), t.markFieldsDirty("publisherIsrcGenerated")
                        }
                    }
                })
            }
            this.generateDialog.open()
        }

        function r() {
            var e = this.subviews.publisherIsrc;
            e && this.model.isRequestingIsrcGeneration() && !this.model.hasAssignedIsrc() && e.setValue("")
        }

        function o(e) {
            a.call(this, e)
        }

        function a(e) {
            var t = this.subviews.publisherIsrcGenerated;
            t && t.$el.toggleClass("sc-hidden", e)
        }

        function s() {
            return this.model.isRequestingIsrcGeneration() ? n(50).t("An ISRC will be created") : this.model.isPendingIsrcGeneration() ? n(50).t("An ISRC will be created") : this.batchMonetization ? n(50).t("ISRC") : n(50).t("e.g. USS1Z1001234")
        }

        function l(e) {
            this.toggleState("batchMonetization", "batchMonetization" === e), this.toggleState("productTrack", "productTrack" === e)
        }
        var u = new(n(93))("already-seen"),
            c = "isrc-generation-warning";
        e.exports = n(53).extend({
            className: "isrcField",
            css: n(3440),
            template: n(3025),
            states: {
                batchMonetization: "m-batchMonetization",
                productTrack: "m-productTrack"
            },
            events: {
                "click .isrcField__createIsrc": i
            },
            element2selector: {
                generateWrapper: ".isrcField__createIsrc"
            },
            defaults: {
                Form: null,
                style: "",
                fieldLabel: null,
                fieldHint: null
            },
            generateDialog: null,
            setup: function(e) {
                var t = e.Form,
                    n = e.resource_id,
                    i = e.resource_type,
                    a = e.style;
                this.model = new t({}, {
                    resource_id: n,
                    resource_type: i
                }), this.batchMonetization = "batchMonetization" === a, l.call(this, a), this.listenTo(this.model, "change:publisherIsrcGenerated", r).listenTo(this.model, "disabledChange:publisherIsrcGenerated", o)
            },
            getTemplateData: function(e) {
                var t = this.batchMonetization,
                    i = this.options,
                    r = i.fieldLabel,
                    o = i.fieldHint;
                return e.allowIsrcGeneration = n(54).get("me").canRequestISRCGeneration(), e.isrcFieldPlaceholder = s.bind(this), e.isrcFieldLabel = t ? null : r ? r : n(50).t("ISRC"), e.isrcFieldHint = t ? null : o ? o : n(50).t("An ISRC (International Standard Recording Code) is a unique identifier that is assigned to a track. Use the same ISRC for a given track wherever you distribute it.<br><br>If you work with a record label or distributor, ask them if they already have ISRCs for your tracks."), e.showCreateISRCLabel = !t, e
            },
            renderDecorate: function() {
                a.call(this, this.model.getFieldMetadata("publisherIsrcGenerated").disabled)
            }
        })
    },
    632: function(e, t, n) {
        "use strict";

        function i() {
            if (!this.disposed) {
                var e = this.options,
                    t = e.theme,
                    n = e.size,
                    i = this.getElement("container")[0];
                i && a(i, {
                    onCaptchaSuccess: r.bind(this),
                    onCaptchaExpire: o.bind(this),
                    size: "large" === n ? "normal" : "compact",
                    theme: t
                })
            }
        }

        function r(e) {
            this.setFieldValue(e), this.validateOwnField()
        }

        function o() {
            this.setFieldValue(""), this.validateOwnField(), this.reset()
        }
        var a = n(592).renderRecaptcha;
        e.exports = n(53).extend(n(117), n(217), {
            className: "recaptcha",
            css: n(1242),
            template: n(1155),
            element2selector: {
                container: ".recaptcha__container",
                validation: ".recaptcha__validation"
            },
            states: {
                invalid: function(e) {
                    this.getElement("validation").toggleClass("g-hidden", !e)
                }
            },
            defaults: {
                size: "large",
                theme: "light"
            },
            setup: function() {
                this.listenTo(this.form, "reset_" + this.field, this.reset)
            },
            renderDecorate: function() {
                this.whenInserted().then(i.bind(this))
            },
            reset: function() {
                this.rerender()
            },
            onFieldChange: function() {
                this.validateOwnField()
            }
        })
    },
    636: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = this;
            e.stopPropagation();
            var i = e.data.file;
            n(87).readImageFileCorrected(i).then(function(e) {
                return t.getElement("cropper").cropit("imageSrc", e)
            })
        }

        function r() {
            if (!this.options.standAlone) {
                var e = a.call(this);
                this.options.saveFile(e).then(d.bind(this), p.bind(this))
            }
        }

        function o(e, t) {
            var n = this,
                i = this.options.sizes,
                r = i.width,
                o = i.previewWidth;
            this.getElement("cropper").cropit({
                $preview: this.getElement("preview"),
                $previewContainer: this.getElement("previewContainer"),
                $zoomSlider: this.getElement("zoomSlider"),
                largerEventAreaSelector: "body",
                smallestImageSize: r,
                onImageLoaded: function() {
                    h.call(n), t()
                },
                onZoomEnabled: function() {
                    return n.toggleState("smallImage", !1, !0)
                },
                onZoomDisabled: function() {
                    return n.toggleState("smallImage", !0)
                },
                onZoomChange: t,
                onOffsetChange: t,
                allowDragNDrop: !1,
                width: o,
                height: o / this.aspectRatio,
                imageState: {
                    src: e
                }
            })
        }

        function a() {
            var e = this.getElement("cropper").cropit("export", {
                type: "image/jpeg",
                quality: .8,
                originalSize: !0
            });
            return n(1400).getBlobFromDataURI(e)
        }

        function s() {
            this.toggleState("uploading", !0);
            var e = a.call(this);
            this.options.saveFile(e).then(d.bind(this), p.bind(this))
        }

        function l() {
            n(3).result(this.options, "onCancel")
        }

        function u() {
            f.call(this, -1)
        }

        function c() {
            f.call(this, 1)
        }

        function d(e) {
            var t = this.options.onSaveSuccess;
            t && t(e), this.toggleState("uploading", !1)
        }

        function p() {
            n(3).result(this.options, "onSaveFail"), this.toggleState("errorSaving", !0)
        }

        function h() {
            var e = this.getElement("cropper"),
                t = e.cropit("imageSize");
            e.cropit("offset", g.call(this, t))
        }

        function f(e) {
            var t = this.getElement("zoomSlider"),
                n = parseFloat(t.val()),
                i = Math.min(Math.max(n + m * e, 0), 1);
            i !== n && t.val(i).change()
        }

        function g(e) {
            var t, n = this.options.sizes,
                i = n.width,
                r = n.height,
                o = {
                    x: 0,
                    y: 0
                },
                a = e.height,
                s = e.width,
                l = s / a;
            return l < this.aspectRatio ? (t = i / s, o.y = -((a * t - r) / 2) * this.presentationScaleFactor) : (t = r / a, o.x = -((s * t - i) / 2) * this.presentationScaleFactor), o
        }
        var m = .1,
            _ = 300;
        e.exports = n(53).extend({
            className: "imageCrop",
            template: n(3032),
            css: n(3446),
            defaults: {
                file: null,
                saveFile: null,
                standAlone: !0,
                showRoundOverlay: !1,
                showSmallImageWarning: !0,
                sizes: null,
                minSrcSize: 0,
                maxSrcSize: 1 / 0,
                onImageRejected: n(3).noop,
                onSaveSuccess: null,
                onSaveFail: null,
                onCancel: null
            },
            states: {
                compact: "m-compact",
                uploading: function(e) {
                    e && this.toggleState("errorSaving", !1), this.getElement("saveButton").toggleClass("sc-pending", e).text(e ? n(50).t("Saving…") : n(50).t("Save"))
                },
                errorSaving: function(e) {
                    e && this.toggleState("uploading", !1), this.getElement("error").toggle(e).text(e ? n(50).t("Error saving. Please try again.") : ""), this.getElement("saveButton").text(e ? n(50).t("Retry") : n(50).t("Save"))
                },
                smallImage: function(e) {
                    e && this.toggleState("errorSaving", !1), this.getElement("zoomContainer").toggle(!e), this.options.showSmallImageWarning && this.getElement("smallImage").toggle(e).text(e ? n(50).t("The image is small and may appear blurry.") : "")
                }
            },
            element2selector: {
                cropper: ".imageCrop__cropper",
                smallImage: ".imageCrop__smallImage",
                error: ".imageCrop__error",
                preview: ".imageCrop__preview",
                previewContainer: ".imageCrop__previewContainer",
                saveButton: ".imageCrop__saveButton",
                zoomContainer: ".imageCrop__zoomContainer",
                zoomSlider: ".imageCrop__zoomSlider",
                zoomControls: ".imageCrop__zoomControl"
            },
            bubbleEvents: {
                "image-chooser:file-selected": i
            },
            events: {
                "click .imageCrop__saveButton": s,
                "click .imageCrop__cancelButton": l,
                "click .imageCrop__zoomControlMinus": u,
                "click .imageCrop__zoomControlPlus": c
            },
            setup: function(e) {
                var t = e.file,
                    i = e.standAlone,
                    r = e.sizes,
                    o = r.width,
                    a = r.height,
                    s = r.previewWidth;
                this.toggleState("compact", !i), this.aspectRatio = o / a, this.presentationScaleFactor = s / o, this._readFileDeferred = n(87).readImageFileCorrected(t)
            },
            renderDecorate: function() {
                var e = this,
                    t = Math.floor(100 * Math.random()),
                    i = this.options.sizes.height;
                this.getElement("previewContainer").addClass(n(87).getPlaceholderClass(t)).height(i * this.presentationScaleFactor), n(55).all([this._readFileDeferred, this.whenInserted(), n(55).delay(_)]).then(function(t) {
                    var i = n(3).debounce(r.bind(e), 300);
                    o.call(e, t, i)
                })
            }
        })
    },
    650: function(e, t, n) {
        (function(t) {
            "use strict";
            var i, r = n(410).Events;
            i = {
                comment: n(1159),
                affiliation: n(1158)
            };
            e.exports = n(245).extend(n(100), {
                template: n(1161),
                css: n(1248),
                tagName: "article",
                className: "ownActivity",
                defaults: {
                    size: "small",
                    dialogSelector: ".userBadge__userNameLink, .ownActivity__userName",
                    dialogType: "userBadge",
                    comment_body_is_link: !1,
                    dark: !1
                },
                element2selector: {
                    commentFormWrapper: ".ownActivity__commentForm",
                    commentReply: ".ownActivity__commentReply",
                    commentReplyButton: ".ownActivity__replyButton"
                },
                setup: function() {
                    var e = this.type = this.options.activity.get("type");
                    n(245).prototype.setup.apply(this, arguments), i.hasOwnProperty(e) && (this.template = i[e]), this.$el.addClass(this.options.size + " " + e)
                },
                dispose: function() {
                    this.timedComments && (this.timedComments.release(), this.timedComments = null)
                },
                renderDecorate: function() {
                    this.shouldShowCommentActions() && (this.prepareCommentThread(), this.prepareCommentReply())
                },
                shouldShowCommentActions: function() {
                    return "comment" === this.type && "large" === this.options.size
                },
                prepareCommentThread: function() {
                    this.timedComments = new(n(1369))(null, {
                        sound_id: this.model.get("comment").track_id
                    }), this.timedComments.isPopulated() ? this.onTimedCommentsFetched() : (this.listenTo(this.timedComments, "reset", this.onTimedCommentsFetched), this.timedComments.fetch({
                        reset: !0
                    }))
                },
                prepareCommentReply: function() {
                    this.listenTo(this.subviews.replyCommentButton, r.OPEN, this.onCommentReplyOpen).listenTo(this.subviews.replyCommentButton, r.SENT, this.onCommentReplySent).listenTo(this.subviews.replyCommentButton, [r.CANCEL, r.POST].join(" "), this.onCommentReplyClose);
                },
                dialogSubviewArgs: function() {
                    return {
                        resource_id: "comment" === this.type ? this.model.get("comment").user_id : this.model.get("user").id
                    }
                },
                onTimedCommentsFetched: function() {
                    var e, t = this.model.get("comment"),
                        i = this.timedComments.getThreadComments(t.timestamp).reverse(),
                        r = n(54).get("me").id,
                        o = t.id;
                    e = n(3).find(i, function(e) {
                        return e.get("user_id") === r && e.id > o
                    }), e && this.insertReply(e)
                },
                insertReply: function(e) {
                    var t = new(n(406))({
                        resource_id: e.resource_id,
                        dark: this.options.dark,
                        show_icon: !1,
                        show_time: !0,
                        body_is_link: !1,
                        compact: "small" === this.options.size
                    }).render();
                    this.getElement("commentReply").prepend(t.el)
                },
                onCommentReplyOpen: function(e) {
                    var i = new(n(116))(this.model.get("comment"));
                    this.getElement("commentFormWrapper").addClass("visible").append(e.render().el), e.goToState(n(103).ACTIVE_TIMESTAMP, i.get("timestamp"), i), t(window.document).on("click.replyCancel", function(i) {
                        return t(i.target).closest(".ownActivity__commentForm").length ? !0 : (t(this).off("click.replyCancel"), void e.trigger(n(196).Events.CANCELED))
                    })
                },
                onCommentReplyClose: function() {
                    this.getElement("commentFormWrapper").removeClass("visible")
                },
                onCommentReplySent: function(e, t) {
                    this.insertReply(t)
                },
                getTemplateData: function(e) {
                    var t = "small" === this.options.size,
                        i = n(54).get("me"),
                        r = this.model.get("user");
                    return e = n(245).prototype.getTemplateData.call(this, e) || e, e.icon_variation = this.options.dark ? "light" : null, e.is_small = t, e.comment_body_is_link = this.options.comment_body_is_link, e.audible_image_size = t ? 20 : 40, e.user_image_size = t ? "small" : "large", e.meId = i.id, e.is_mine = r && i.id === r.id, e.Audible = n(82), e
                }
            })
        }).call(t, n(1))
    },
    652: function(e, t, n) {
        "use strict";

        function i(e) {
            return e === n(218).prototype.resource_type
        }
        var r = 1e3;
        e.exports = n(53).extend(n(79), n(379), n(134), n(68).withOptions("addToNextUpButton"), {
            className: "sc-button-queue addToNextUp",
            css: n(3459),
            buttonLabels: {
                "default": n(50).t("Add to Next up"),
                selected: n(50).t("Added")
            },
            defaults: {
                selectedClass: "sc-button-selected",
                allPossibleLabels: [n(50).t("Add to Next up"), n(50).t("Added")],
                closesDropdown: !1
            },
            setup: function(e) {
                var t = e.resource_id,
                    r = e.resource_type;
                this.ModelClass = n(i(r) ? 218 : 82), this.model = this.getModel(t, r)
            },
            onClick: function(e) {
                var t = this;
                if (e.preventDefault(), !this.getState("selected")) {
                    var o = this.options,
                        a = o.resource_type,
                        s = o.closesDropdown;
                    this.toggleState("selected", !0), this.addTimeout(function() {
                        t.toggleState("selected", !1)
                    }, r), i(a) ? n(62).cloneQueueItemToExplicit(this.model) : this.addExplicitQueueItem(this.model), s && this.bubble("overlay:close")
                }
            }
        })
    },
    653: function(e, t, n) {
        "use strict";

        function i(e) {
            return "playlist" === e.resource_type
        }

        function r(e, t) {
            var i = e.model,
                r = i.id,
                a = i.resource_type,
                s = e.el,
                l = new(n(1490))({
                    resource_id: r,
                    resource_type: a,
                    togglerEl: s,
                    isRestricted: t
                });
            e.toggleState("pending", !1), l.on(o.CLOSED, l._dispose, l), l.open()
        }
        var o = n(69).Events,
            a = n(209).apiToType,
            s = n(209).defaultReleaseType;
        e.exports = n(53).extend(n(79), n(100), {
            className: "sc-button-edit",
            ModelClass: n(82),
            defaults: {
                icon_only: !0,
                showRestrictedTooltip: !1,
                dialogType: "genericDialog",
                dialogEnabled: !1
            },
            requiredAttributes: {
                playlist: ["set_type"]
            },
            states: {
                pending: "sc-pending"
            },
            dialogArgs: function() {
                var e = i(this.model) ? n(50).t("This playlist is managed directly by its rightsholder, so not all options can be changed. To make other changes, contact your label or distributor.") : n(50).t("This track is managed directly by its rightsholder, so not all options can be changed. To make other changes, contact your label or distributor.");
                return {
                    text: e,
                    smallText: !0,
                    width: 215
                }
            },
            setup: function(e) {
                e.dialogEnabled = e.showRestrictedTooltip
            },
            getButtonText: function() {
                var e = this.model,
                    t = this.options;
                if (t.text) return t.text;
                if (i(e)) {
                    var r = e.get("set_type");
                    return a(r) === s ? n(50).t("Edit playlist") : n(50).t("Edit album")
                }
                return n(50).t("Edit track")
            },
            onClick: function() {
                var e = this,
                    t = this.model,
                    i = ["managed_by_feeds"],
                    o = function() {
                        return r(e, t.isManagedByFeeds())
                    };
                this.toggleState("pending", !0), n(55).all([n(54).get("me").fetch(), !t.attrExists(i) && t.fetch({
                    attrs: i
                })].filter(Boolean)).then(o, o)
            }
        })
    },
    654: function(e, t, n) {
        "use strict";

        function i() {
            return !!this.model.get(this.options.resource_id)
        }
        var r = n(50).t("Like station"),
            o = n(50).t("Liked station"),
            a = n(50).t("Unlike station");
        e.exports = n(53).extend(n(79), n(68).withOptions("likeStationButton"), {
            className: "sc-button-like",
            defaults: {
                show_counts: !1,
                allPossibleLabels: [r, o]
            },
            buttonLabels: {
                "default": {
                    text: r,
                    title: r
                },
                selected: {
                    text: o,
                    title: a
                }
            },
            setup: function(e) {
                var t = e.resource_id;
                this.model = new(n(1457)), this.observedAttributes = [t]
            },
            isButtonSelected: i,
            onClick: function(e) {
                e.preventDefault();
                var t = !i.call(this),
                    r = this.getContextData();
                n(75).likeStation(this.options.resource_id, t, {
                    context: r
                })
            }
        })
    },
    656: function(e, t, n) {
        "use strict";
        e.exports = n(99).extend({
            className: "sc-button-more",
            defaults: {
                ContentViewClass: n(1960),
                overlayType: "dropdown",
                overlayOptions: {
                    anchor: "left top",
                    relativeElementAnchor: "left bottom"
                },
                actions: null,
                cornerStyle: "square"
            },
            buttonLabels: {
                "default": n(50).t("More")
            },
            getContentViewArgs: function() {
                var e = this.options,
                    t = e.actions,
                    i = e.contentViewArgs,
                    r = e.cornerStyle;
                return n(3).defaults({
                    actions: t,
                    cornerStyle: r
                }, i)
            }
        })
    },
    657: function(e, t, n) {
        "use strict";

        function i() {
            return !1
        }

        function r(e) {
            n(3).assign(this.options, e), this.toggleOverlay()
        }

        function o(e) {
            return this.options.show_counts ? n(152).render(this.audible.get("reposts_count") || e, {
                useSIUnits: !0
            }) : e
        }
        var a = n(50).t("Repost"),
            s = n(50).t("Reposted"),
            l = n(50).t("Unpost"),
            u = {
                ContentViewClass: n(1507),
                overlayType: "dialog",
                overlayOptions: {
                    relativeElementAnchor: "center bottom",
                    anchor: "right top",
                    offset: "18 7",
                    width: "320px"
                }
            },
            c = {
                ContentViewClass: n(2203),
                overlayType: "dialog",
                overlayOptions: {
                    relativeElementAnchor: "center bottom",
                    anchor: "right top",
                    offset: "18 7",
                    width: "220px"
                }
            };
        e.exports = n(99).extend(n(379), n(68).withOptions("repostButton"), {
            className: "sc-button-repost",
            defaults: {
                icon_only: !0,
                hasPopups: !0,
                show_counts: !1,
                hasActiveState: !1
            },
            buttonLabels: {
                "default": {
                    text: function() {
                        return o.call(this, a)
                    },
                    title: a
                },
                selected: {
                    text: function() {
                        return o.call(this, s)
                    },
                    title: l
                }
            },
            showShareRepostOverlay: !1,
            setup: function(e) {
                "sound" === e.resource_type ? this.model = new(n(1464)) : this.model = new(n(1459)), this.observedAttributes = [e.resource_id], n(99).prototype.setup.apply(this, arguments), e.show_counts && (this.audible = this.addDataSource(new(n(82))({
                    resource_id: e.resource_id,
                    resource_type: e.resource_type
                }), {
                    requiredAttributes: ["reposts_count"]
                }), this.listenTo(this.audible, "change:reposts_count", this.rerender), this.listenTo(this.model, "change:" + e.resource_id, this.rerender))
            },
            renderDecorate: function() {
                n(99).prototype.renderDecorate.apply(this, arguments), this.showShareRepostOverlay && this.options.hasPopups && (this.showShareRepostOverlay = !1, r.call(this, u))
            },
            isButtonSelected: function() {
                return !!this.model.get(this.options.resource_id)
            },
            onClick: function(e) {
                var t = this.options;
                e.preventDefault(), !this.isButtonSelected() && i() && t.hasPopups ? r.call(this, c) : (this.showShareRepostOverlay = !this.isButtonSelected() && n(1507).shouldShowDialog(), n(75).repost(t.resource_id, t.resource_type, !this.isButtonSelected(), {
                    context: this.getContextData()
                }))
            }
        })
    },
    664: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = this.form,
                n = t.get("geoblocking"),
                i = t.get("availableCountries");
            this.toggleState("hasAvailableCountries", n && i && i.length, e)
        }

        function r(e) {
            switch (e.resource_type) {
                case "sound-upload-edit":
                    return {
                        unchekedText: n(50).t("This track is available worldwide."),
                        checkedEmptyText: n(50).t("This track will be blocked worldwide. Enter the countries and continents you want to allow playback in:"),
                        checkedNonEmptyText: n(50).t("This track will only be playable in the following areas of the world:")
                    };
                case "playlist-upload":
                    return {
                        unchekedText: n(50).t("This playlist is available worldwide."),
                        checkedEmptyText: n(50).t("This playlist will be blocked worldwide. Enter the countries and continents you want to allow playback in:"),
                        checkedNonEmptyText: n(50).t("This playlist will only be playable in the following areas of the world:")
                    };
                case "multi-track-geoblocking":
                    return {
                        unchekedText: n(50).t("All tracks are available worldwide."),
                        indeterminateText: n(50).t("Some tracks are geoblocked."),
                        checkedEmptyText: n(50).t("All tracks will be blocked worldwide. Enter the countries and continents you want to allow playback in:"),
                        checkedNonEmptyText: n(50).t("All tracks will only be playable in the following areas of the world:")
                    }
            }
        }
        var o = n(3).assign;
        e.exports = n(53).extend({
            tag: "section",
            className: "g-form-section geoblockingSection",
            template: n(3080),
            defaults: {
                soundIds: null,
                title: n(50).t("Enable geoblocking"),
                showTitle: !0
            },
            element2selector: {
                showEmpty: ".geoblockingSection__showEmpty",
                showNonEmpty: ".geoblockingSection__showNonEmpty"
            },
            setup: function(e) {
                var t = e.soundIds,
                    r = e.resource_type,
                    o = e.resource_id;
                this.form = t ? new(n(1381))(null, {
                    soundIds: t
                }) : new(n(145))({}, {
                    resource_type: r,
                    resource_id: o
                }), this.listenTo(this.form, "change:geoblocking change:availableCountries", i)
            },
            dispose: function() {
                this.form.release(), this.form = null
            },
            states: {
                hasAvailableCountries: function(e) {
                    this.getElement("showEmpty").toggle(!e), this.getElement("showNonEmpty").toggle(e)
                }
            },
            renderDecorate: function() {
                i.call(this, !0)
            },
            getTemplateData: function() {
                var e = this.form,
                    t = this.options,
                    i = t.soundIds,
                    a = t.resource_id,
                    s = t.resource_type,
                    l = t.title,
                    u = t.showTitle;
                return o(r(e), {
                    title: u && l || "",
                    formArgs: o({
                        Form: e.constructor
                    }, i ? {
                        soundIds: i
                    } : {
                        resource_id: a,
                        resource_type: s
                    }),
                    hasGeoblocking: n(54).get("me").hasGeoblocking()
                })
            }
        })
    },
    665: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e.data.file;
            r.call(this, t)
        }

        function r(e) {
            var t = this.options,
                i = t.resource_type,
                r = t.size,
                o = t.minSrcSize,
                a = t.maxSrcSize,
                u = t.minCroppedSize,
                c = Math.max(o || 0, u),
                d = Math.max(o || 0, u);
            s.call(this), this.cropperView = this.addSubview(new(n(636))({
                file: e,
                saveFile: l.bind(this),
                standAlone: !1,
                showSmallImageWarning: !1,
                showRoundOverlay: n(87).isRounded(i),
                onImageRejected: this.onImageRejected,
                minSrcSize: o,
                maxSrcSize: a,
                sizes: {
                    width: c,
                    height: d,
                    previewWidth: r
                }
            }).render()), this.cropperView.$el.appendTo(this.getElement("cropper")), this.toggleState("hasFile", !0)
        }

        function o() {
            this.toggleState("hasFile", !1)
        }

        function a(e) {
            var t = e.file;
            null === t && o.call(this)
        }

        function s() {
            this.cropperView && (this.cropperView._dispose(), this.removeSubview(this.cropperView))
        }

        function l(e) {
            return this.model.setImageFile(e, "file"), n(55).resolve()
        }

        function u() {
            this.model.getImageFileInfo().file || o.call(this), this.toggleState("imageRejected", !0)
        }

        function c(e, t) {
            return e && t ? n(50).t("The dimensions of the image must be between [[minSize]] x [[minSize]] and [[maxSize]] x [[maxSize]] pixels", {
                minSize: e,
                maxSize: t
            }) : e ? n(50).t("The minimum dimensions of the image are [[minSize]] x [[minSize]] pixels", {
                minSize: e
            }) : t ? n(50).t("The maximum dimensions of the image are [[maxSize]] x [[maxSize]] pixels", {
                maxSize: t
            }) : void 0
        }
        var d = n(83).MS_IN_SECOND;
        e.exports = n(53).extend(n(185), {
            template: n(3081),
            css: n(3493),
            className: "editImage",
            defaults: {
                size: 260,
                minCroppedSize: 500,
                minSrcSize: 0,
                maxSrcSize: 1 / 0,
                placeholderType: "gradient"
            },
            bubbleEvents: {
                "image-chooser:file-selected": i
            },
            element2selector: {
                cropper: ".editImage__cropper",
                select: ".editImage__select",
                errorText: ".editImage__errorText"
            },
            states: {
                hasFile: function(e) {
                    this.$el.toggleClass("m-hasFile", e), e && this.toggleState("imageRejected", !1)
                },
                imageRejected: function(e) {
                    var t = this;
                    this.getElement("errorText").text(e ? c(this.options.minSrcSize, this.options.maxSrcSize) : ""), this.$el.toggleClass("m-image-rejected", e), window.clearTimeout(this._imageRejectedTimeout), e && (this._imageRejectedTimeout = this.addTimeout(function() {
                        return t.toggleState("imageRejected", !e)
                    }, 3 * d))
                }
            },
            cropperView: null,
            setup: function(e) {
                var t = e.size;
                this.$el.width(t), this.listenTo(this.model, "imageDataChanged", a), this.onImageRejected = u.bind(this)
            },
            getTemplateData: function(e) {
                return n(3).assign(e, {
                    onImageRejected: this.onImageRejected
                })
            }
        })
    },
    667: function(e, t, n) {
        "use strict";

        function i(e) {
            return "track" === e ? "sound" : "playlist" === e ? "set" : e
        }
        e.exports = n(53).extend({
            template: n(1167),
            css: n(1257),
            className: "autocompleteItem",
            requiredModelAttributes: ["link", "output", "artwork_url"],
            attributes: {
                role: "option"
            },
            ModelClass: n(269),
            getTemplateData: function(e) {
                var t = this.model.get("output");
                return e.title = n(192).usertext(t, {
                    escapeExpression: !0,
                    paragraphs: !1,
                    links: !1,
                    userlinks: !1
                }), e.isQuery = this.model.isQuery(), e.iconName = i(this.model.getEntityType()), e.isQuery || (e.entityResourceId = this.model.resource.resource_id, e.entityResourceType = this.model.resource.resource_type), e
            }
        })
    },
    668: function(e, t, n) {
        "use strict";
        var i = n(169).extend({
            defaults: {
                dark: !0,
                size: "regular"
            }
        });
        e.exports = n(81).extend({
            css: n(1258),
            className: "searchAutocomplete g-dark-list",
            Subview: n(667),
            defaults: {
                query: null,
                maxDisplay: 10
            },
            ThrobberView: n(197),
            LoadingView: i,
            automaticErrorHandling: !1,
            setup: function(e) {
                var t = e.query;
                this.collection = new(n(1356))(null, {
                    query: t
                })
            },
            updateFilter: function(e) {
                this.collection.updateFilter(e)
            },
            getResultAt: function(e) {
                return this.collection.at(e)
            },
            getQueryUrn: function() {
                return this.collection.getQueryUrn()
            }
        })
    },
    669: function(e, t, n) {
        "use strict";

        function i() {
            var e = n(50).t("Search for <q>[[query]]</q>", {
                query: this.options.query
            }).toString();
            this.getElement("searchForText").html(e)
        }
        e.exports = n(53).extend(n(329), {
            template: n(1168),
            css: n(1259),
            className: "g-dark",
            attributes: {
                id: "searchMenuList"
            },
            maxItemDisplay: 5,
            itemSelector: ".autocompleteItem, .searchMenu__searchFor",
            highlightClassName: "g-dark-selected",
            defaults: {
                query: null
            },
            element2selector: {
                searchForText: ".searchMenu__searchForText"
            },
            updateListFilter: function(e) {
                this.options.query = e, this.subviews.list.updateFilter(e), i.call(this)
            },
            onItemSelected: function(e, t) {
                var n = this.isQueryEmpty() ? e : e - 1;
                return {
                    queryUrn: this.subviews.list.getQueryUrn(),
                    query: this.options.query,
                    shortcut: t.hasClass("searchMenu__searchFor") ? null : {
                        model: this.subviews.list.getResultAt(n),
                        index: n
                    }
                }
            },
            getTemplateData: function(e) {
                return e.isQueryEmpty = this.isQueryEmpty(), e
            },
            renderDecorate: function() {
                i.call(this)
            },
            isQueryEmpty: function() {
                var e = this.options.query;
                return !e || !e.trim()
            }
        })
    },
    670: function(e, t, n) {
        "use strict";

        function i() {
            this.getState("expanded") && this.$el.width(this.getMenuWidth())
        }

        function r() {
            return this.getElement("input").val().trim()
        }
        var o = n(58).trackV1Click;
        e.exports = n(53).extend(n(204), n(377), {
            css: n(1260),
            template: n(1169),
            className: "headerSearch",
            events: {
                "focus .headerSearch__input": "onInputFocus",
                "blur  .headerSearch__input": "onInputBlur"
            },
            zIndexLevel: "header-menu",
            inputSelector: ".headerSearch__input",
            MenuContentView: n(669),
            typingDelay: 100,
            category: null,
            formulatingSearch: !1,
            getRelativeElement: function() {
                return this.getFormElement()
            },
            setup: function() {
                this.showAllItems = !1, this.$el.one("focus", ".headerSearch__input", function() {
                    n(61).isLoggedIn() && (n(360).prefetch(), n(567).prefetch(), n(480).prefetch(), n(362).prefetch({
                        userId: n(54).get("me").id
                    }))
                })
            },
            renderDecorate: function() {
                this.listenTo(n(94), "resize:x:throttled", i).listenTo(n(56), "layout:change", this.onLayoutChange).listenTo(n(56), "search:focus", this.focusInput), this.getElement("input").addClass("g-all-transitions-300").attr({
                    "aria-autocomplete": "list",
                    "aria-owns": "searchMenuList"
                })
            },
            teardown: function() {
                this.stopListening(n(94), "resize:x:throttled").stopListening(n(56), "layout:change").stopListening(n(56), "search:focus")
            },
            getTemplateData: function(e) {
                return e.placeholderText = n(61).isLoggedIn() ? n(50).t("Search") : n(50).t("Search for artists, bands, tracks, podcasts"), e
            },
            updateMenuContent: function(e, t) {
                var n = t.query;
                this.getMenu().getContentView().updateListFilter(n)
            },
            onInputFocus: function() {
                this.formulatingSearch = !0;
                var e = r.call(this),
                    t = e ? {
                        q: e
                    } : null;
                o({
                    click_name: "search_formulation_init",
                    click_attributes: t
                })
            },
            onInputBlur: function() {
                if (this.formulatingSearch) {
                    var e = r.call(this),
                        t = e ? {
                            q: e
                        } : null;
                    o({
                        click_name: "search_formulation_exit",
                        click_attributes: t
                    }), this.formulatingSearch = !1
                }
            },
            onItemSelected: function(e) {
                e.shortcut ? (this.trackClick(e), this.emptyInput().blur(), n(54).get("router").navigate(e.shortcut.model.get("link"), {
                    trigger: !0
                })) : this.getFormElement().submit()
            },
            onSubmit: function() {
                var e = r.call(this),
                    t = n(167).getFilters();
                this.selectedItemIndex < 1 && e && (this.formulatingSearch = !1, o({
                    click_name: "search_formulation_end",
                    click_attributes: {
                        q: e
                    }
                }), n(54).get("router").navigateToRoute("search", [this.category, e, t], {
                    trigger: !0
                }), this.getInput().blur())
            },
            onLayoutChange: function(e) {
                "search" === e.layoutName ? (this.replaceInputValue(n(167).getValidParams(n(65).parse(window.location.href).query).q), this.category = e.args.category) : (this.replaceInputValue(""), this.category = null)
            },
            trackClick: function(e) {
                var t = e.queryUrn,
                    n = e.shortcut,
                    i = n.model;
                this.formulatingSearch = !1;
                var a = r.call(this),
                    s = a ? {
                        q: a
                    } : null;
                i.isQuery() ? o({
                    click_name: "search_formulation_end",
                    query_position: n.index,
                    query_urn: t,
                    click_attributes: s
                }) : (s.source = "search-autocomplete", o({
                    click_name: "item_navigation",
                    click_object: i.resource ? i.resource.getUrn() : null,
                    query_position: n.index,
                    query_urn: t,
                    click_attributes: s
                }))
            }
        })
    },
    775: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".recaptcha{margin:20px 0}.recaptcha__container{margin-bottom:5px}.recaptcha__validation{background:0 0}", ""])
    },
    778: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".commentTitle{position:relative}.commentTitle__icon{margin-right:5px}.commentTitle__quotedBody:before,.commentTitle__quotedBody:after{content:'“'}", ""])
    },
    779: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".ownActivity{position:relative;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.ownActivity__images{position:relative;margin-right:10px}.ownActivity__content{-webkit-flex:1;-ms-flex:1;flex:1}.ownActivity .ownActivity__trackImg{position:absolute;right:0;bottom:0}.ownActivity__title{color:#ccc;margin:0}.ownActivity__time{position:absolute;right:0;top:8px;color:#999;font-size:12px}.ownActivity__bottom{position:relative}.ownActivity__bottomAction{position:absolute;right:0;bottom:0}.ownActivity__commentForm.visible{margin-top:15px}.ownActivity__commentReply{margin-top:15px}.ownActivity__commentReply>.commentTitle{margin:0 0 10px 0}.ownActivity.inactive:before{content:'';background-color:rgba(255,255,255,.7);position:absolute;top:0;bottom:0;left:0;right:0;z-index:1}.ownActivity.small{font-size:11px;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.ownActivity.small .ownActivity__user{padding-right:75px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;margin-top:2px}.ownActivity.large .ownActivity__top{margin-bottom:10px;position:relative}.ownActivity.large .ownActivity__user{border-right:1px solid #f2f2f2;float:left;padding:0 10px 7px 0;width:240px}.ownActivity.large .ownActivity__additional{position:absolute;right:0;bottom:9px}.ownActivity.large .ownActivity__action{position:absolute;right:0;bottom:9px}.g-dark .ownActivity{padding:10px;color:#666}.g-dark .ownActivity__trackImg{border-color:#262626}.g-dark .ownActivity .ownActivity__time{top:18px;right:10px}.g-dark .ownActivity.comment .ownActivity__time{top:13px}.g-dark .ownActivity__user a,.g-dark .ownActivity__time,.g-dark .ownActivity__additional,.g-dark .ownActivity__additional a{color:#999}.g-dark .ownActivity__additional a:hover,.g-dark .ownActivity__additional a:focus,.g-dark .ownActivity__user a:hover,.g-dark .ownActivity__user a:focus{color:#ccc}@media (max-width:900px){.ownActivity__additional{width:53px}}", ""])
    },
    781: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".replyActivityComment{opacity:1;visibility:visible;transition:.3s opacity}.replyActivityComment-hidden{opacity:0;visibility:hidden;transition:.3s opacity,.3s,visibility 0s .3s}", ""])
    },
    785: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".autocompleteItem{padding:0}.autocompleteItem>a{display:block;padding:10px 40px 10px 14px;position:relative}.autocompleteItem__title{line-height:20px}.autocompleteItem__title>b{color:#fff}.autocompleteItem__icon{position:absolute;top:9px;right:14px}.autocompleteItem__queryIcon{height:20px;width:20px;background-image:url(" + n(1651) + ");background-size:17px 17px;background-repeat:no-repeat;background-position:center}", ""])
    },
    786: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".searchAutocomplete>.loading{background-color:#333;padding:5px 0}", ""])
    },
    787: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".searchMenu .loading{background-color:#333;padding:5px 0}.searchMenu__item{padding:0}.searchMenu__searchFor{padding:0;background-color:#333;border-bottom:1px solid rgba(0,0,0,.22);border-left:1px solid #404040;border-right:1px solid #404040;text-align:left;box-shadow:0 1px 0 rgba(255,255,255,.05)}.searchMenu__searchFor.g-dark-selected{background-color:#262626}.searchMenu__searchFor a{display:block;padding:10px 10px 10px 14px}", ""])
    },
    788: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".headerSearch{padding:9px 10px 8px;position:relative;appearance:none}.headerSearch__input{width:100%}.headerSearch__submit{border:0;padding:0;background:url(" + n(1652) + ") 0 0 no-repeat;width:15px;height:15px;position:absolute;right:20px;top:15px}.headerSearch__submit:focus{outline:0}.headerSearch__input{height:28px}", ""])
    },
    1155: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                return '<div class="recaptcha__container"></div>\n<div class="recaptcha__validation sc-orange g-hidden"></div>\n'
            },
            useData: !0
        })
    },
    1158: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var a;
                return "  " + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(178), {
                    name: "$view",
                    hash: {
                        size: "small",
                        dark: null != (a = null != t ? t._options : t) ? a.dark : a,
                        show_followed: !0,
                        resource_id: null != (a = null != t ? t.user : t) ? a.id : a
                    },
                    data: o
                })) + "\n"
            },
            3: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '  <div class="ownActivity__images">\n    ' + u((n(52) || t && t.$view || l).call(s, n(170), {
                    name: "$view",
                    hash: {
                        size: null != t ? t.user_image_size : t,
                        resource_id: null != (a = null != t ? t.user : t) ? a.id : a
                    },
                    data: o
                })) + '\n  </div>\n  <div class="ownActivity__content">\n    <div class="ownActivity__top sc-clearfix sc-border-light-bottom">\n      <div class="ownActivity__user">\n        ' + u((n(52) || t && t.$view || l).call(s, n(178), {
                    name: "$view",
                    hash: {
                        dark: null != (a = null != t ? t._options : t) ? a.dark : a,
                        show_followed: !0,
                        use_image: !1,
                        resource_id: null != (a = null != t ? t.user : t) ? a.id : a
                    },
                    data: o
                })) + '\n      </div>\n      <div class="ownActivity__additional sc-truncate sc-button-group">\n        ' + u((n(52) || t && t.$view || l).call(s, n(246), {
                    name: "$view",
                    hash: {
                        resource_id: null != (a = null != t ? t.user : t) ? a.id : a
                    },
                    data: o
                })) + "\n        " + u((n(52) || t && t.$view || l).call(s, n(214), {
                    name: "$view",
                    hash: {
                        resource_id: null != (a = null != t ? t.user : t) ? a.id : a
                    },
                    data: o
                })) + '\n      </div>\n    </div>\n    <h3 class="ownActivity__title">\n      <a class="sc-link-dark" href="' + u((n(57) || t && t.$route || l).call(s, "user", null != t ? t.user : t, {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">\n        ' + u((n(199) || t && t.$icon || l).call(s, {
                    name: "$icon",
                    hash: {
                        type: "follower",
                        size: "medium"
                    },
                    data: o
                })) + "\n      </a>\n    </h3>\n  </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s = null != t ? t : {};
                return (null != (a = i["if"].call(s, null != t ? t.is_small : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.program(3, o, 0),
                    data: o
                })) ? a : "") + '<span class="ownActivity__time sc-font-light">\n  ' + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(s, n(128), {
                    name: "$view",
                    hash: {
                        timestamp: null != t ? t.created_at : t
                    },
                    data: o
                })) + "\n</span>\n"
            },
            useData: !0
        })
    },
    1159: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var a, s = e.escapeExpression;
                return '    <div class="ownActivity__user">\n      <a class="sc-link-light" href="' + s((n(57) || t && t.$route || i.helperMissing).call(null != t ? t : {}, "user", null != t ? t.user : t, {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + s(e.lambda(null != (a = null != t ? t.user : t) ? a.username : a, t)) + "</a>\n    </div>\n"
            },
            3: function(e, t, i, r, o) {
                var a, s = null != t ? t : {};
                return '    <div class="ownActivity__top sc-clearfix sc-border-light-bottom">\n      <div class="ownActivity__user">\n        ' + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(s, n(178), {
                    name: "$view",
                    hash: {
                        use_image: !1,
                        resource_id: null != (a = null != t ? t.user : t) ? a.id : a
                    },
                    data: o
                })) + "\n      </div>\n" + (null != (a = i.unless.call(s, null != t ? t.is_mine : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(4, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "    </div>\n"
            },
            4: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '        <div class="ownActivity__additional sc-truncate sc-button-group">\n          ' + u((n(52) || t && t.$view || l).call(s, n(246), {
                    name: "$view",
                    hash: {
                        resource_id: null != (a = null != t ? t.user : t) ? a.id : a
                    },
                    data: o
                })) + "\n          " + u((n(52) || t && t.$view || l).call(s, n(214), {
                    name: "$view",
                    hash: {
                        resource_id: null != (a = null != t ? t.user : t) ? a.id : a
                    },
                    data: o
                })) + "\n        </div>\n"
            },
            6: function(e, t, i, r, o) {
                var a, s = null != t ? t : {};
                return '      <div class="ownActivity__bottomAction sc-button-group">\n        ' + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(s, n(410), {
                    name: "$view",
                    hash: {
                        key: "replyCommentButton",
                        className: "ownActivity__replyButton",
                        resource_id: null != (a = null != t ? t.comment : t) ? a.id : a
                    },
                    data: o
                })) + "\n" + (null != (a = i["if"].call(s, null != t ? t.can_delete_comment : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "      </div>\n"
            },
            7: function(e, t, i, r, o) {
                var a;
                return "          " + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(408), {
                    name: "$view",
                    hash: {
                        key: "deleteCommentButton",
                        resource_id: null != (a = null != t ? t.comment : t) ? a.id : a
                    },
                    data: o
                })) + "\n"
            },
            9: function(e, t, n, i, r) {
                return '    <div class="ownActivity__commentForm"></div>\n    <div class="ownActivity__commentReply"></div>\n'
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<div class="ownActivity__images">\n  ' + u((n(52) || t && t.$view || l).call(s, n(170), {
                    name: "$view",
                    hash: {
                        size: null != t ? t.user_image_size : t,
                        resource_id: null != (a = null != t ? t.user : t) ? a.id : a
                    },
                    data: o
                })) + "\n  " + u((n(52) || t && t.$view || l).call(s, n(86), {
                    name: "$view",
                    hash: {
                        className: "ownActivity__trackImg",
                        size: null != t ? t.audible_image_size : t,
                        resource_type: "user",
                        resource_id: null != t ? t.meId : t
                    },
                    data: o
                })) + '\n</div>\n<div class="ownActivity__content">\n' + (null != (a = i["if"].call(s, null != t ? t.is_small : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.program(3, o, 0),
                    data: o
                })) ? a : "") + '  <div class="ownActivity__bottom">\n    ' + u((n(52) || t && t.$view || l).call(s, n(406), {
                    name: "$view",
                    hash: {
                        body_is_link: null != t ? t.comment_body_is_link : t,
                        compact: null != t ? t.is_small : t,
                        dark: null != (a = null != t ? t._options : t) ? a.dark : a,
                        resource_id: null != (a = null != t ? t.comment : t) ? a.id : a
                    },
                    data: o
                })) + "\n" + (null != (a = i.unless.call(s, null != t ? t.is_small : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(6, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "  </div>\n" + (null != (a = i.unless.call(s, null != t ? t.is_small : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(9, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '</div>\n<span class="ownActivity__time sc-font-light">\n  ' + u((n(52) || t && t.$view || l).call(s, n(128), {
                    name: "$view",
                    hash: {
                        timestamp: null != t ? t.created_at : t
                    },
                    data: o
                })) + "\n</span>\n"
            },
            useData: !0
        })
    },
    1160: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var a, s = null != t ? t : {};
                return '    <a class="sc-link-dark" href="' + e.escapeExpression((n(57) || t && t.$route || i.helperMissing).call(s, "listen", null != t ? t.track : t, null != t ? t.id : t, {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">\n' + (null != (a = i["if"].call(s, null != (a = null != t ? t._options : t) ? a.show_icon : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '      <div class="commentTitle__quotedBody">\n' + (null != (a = i["if"].call(s, null != (a = null != t ? t._options : t) ? a.compact : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, o, 0),
                    inverse: e.program(7, o, 0),
                    data: o
                })) ? a : "") + "      </div>\n    </a>\n"
            },
            2: function(e, t, i, r, o) {
                var a, s = null != t ? t : {};
                return '        <span class="sc-icon-medium left commentTitle__icon sc-icon-comment' + (null != (a = i["if"].call(s, null != (a = null != t ? t._options : t) ? a.dark : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '"><b class="sc-ir">' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(s, "commented", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</b></span>\n"
            },
            3: function(e, t, n, i, r) {
                return "-light"
            },
            5: function(e, t, i, r, o) {
                return "          " + e.escapeExpression((n(276) || t && t.$usertextOneline || i.helperMissing).call(null != t ? t : {}, null != t ? t.body : t, {
                    name: "$usertextOneline",
                    hash: {
                        links: !1
                    },
                    data: o
                })) + "\n"
            },
            7: function(e, t, i, r, o) {
                return "          " + e.escapeExpression((n(205) || t && t.$usertext || i.helperMissing).call(null != t ? t : {}, null != t ? t.body : t, {
                    name: "$usertext",
                    hash: {
                        paragraphs: !1
                    },
                    data: o
                })) + "\n"
            },
            9: function(e, t, n, i, r) {
                var o, a = null != t ? t : {};
                return (null != (o = n["if"].call(a, null != (o = null != t ? t._options : t) ? o.show_icon : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '    <div class="commentTitle__quotedBody">\n' + (null != (o = n["if"].call(a, null != (o = null != t ? t._options : t) ? o.compact : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(12, r, 0),
                    inverse: e.program(14, r, 0),
                    data: r
                })) ? o : "") + "    </div>\n"
            },
            10: function(e, t, i, r, o) {
                var a, s = null != t ? t : {};
                return '      <span class="sc-icon-medium left commentTitle__icon sc-icon-comment' + (null != (a = i["if"].call(s, null != (a = null != t ? t._options : t) ? a.dark : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '"><b class="sc-ir">' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(s, "commented", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</b></span>\n"
            },
            12: function(e, t, i, r, o) {
                return "        " + e.escapeExpression((n(276) || t && t.$usertextOneline || i.helperMissing).call(null != t ? t : {}, null != t ? t.body : t, {
                    name: "$usertextOneline",
                    hash: {},
                    data: o
                })) + "\n"
            },
            14: function(e, t, i, r, o) {
                return "        " + e.escapeExpression((n(205) || t && t.$usertext || i.helperMissing).call(null != t ? t : {}, null != t ? t.body : t, {
                    name: "$usertext",
                    hash: {
                        paragraphs: !1
                    },
                    data: o
                })) + "\n"
            },
            16: function(e, t, n, i, r) {
                return '    on <a class="sc-link-light" href="[[href]]">[[trackTitle]]</a>\n'
            },
            18: function(e, t, i, r, o) {
                return '  <div class="commentTitle__time sc-type-light">\n    ' + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(128), {
                    name: "$view",
                    hash: {
                        timestamp: null != t ? t.created_at : t
                    },
                    data: o
                })) + "\n  </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing;
                return '<div class="commentTitle__main sc-type-h3">\n' + (null != (a = i["if"].call(s, null != (a = null != t ? t._options : t) ? a.body_is_link : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.program(9, o, 0),
                    data: o
                })) ? a : "") + '</div>\n\n<div class="commentTitle__secondary sc-type-light">\n' + (null != (a = (n(51) || t && t.$t || l).call(s, {
                    name: "$t",
                    hash: {
                        _comment: "Displayed when a user has commented on a track",
                        trackTitle: null != (a = null != t ? t.track : t) ? a.title : a,
                        href: (n(57) || t && t.$route || l).call(s, "listen", null != t ? t.track : t, null != t ? t.id : t, {
                            name: "$route",
                            hash: {},
                            data: o
                        })
                    },
                    fn: e.program(16, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "</div>\n\n" + (null != (a = i["if"].call(s, null != (a = null != t ? t._options : t) ? a.show_time : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(18, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "")
            },
            useData: !0
        })
    },
    1161: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var a, s = e.escapeExpression;
                return '    <div class="ownActivity__user">\n      <a class="sc-link-light ownActivity__userName" href="' + s((n(57) || t && t.$route || i.helperMissing).call(null != t ? t : {}, "user", null != t ? t.user : t, {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + s(e.lambda(null != (a = null != t ? t.user : t) ? a.username : a, t)) + "</a>\n    </div>\n"
            },
            3: function(e, t, i, r, o) {
                var a, s = null != t ? t : {};
                return '    <div class="ownActivity__top sc-clearfix sc-border-light-bottom">\n      <div class="ownActivity__user">\n        ' + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(s, n(178), {
                    name: "$view",
                    hash: {
                        dark: null != (a = null != t ? t._options : t) ? a.dark : a,
                        use_image: !1,
                        resource_id: null != (a = null != t ? t.user : t) ? a.id : a
                    },
                    data: o
                })) + "\n      </div>\n" + (null != (a = i.unless.call(s, null != t ? t.is_mine : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(4, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "    </div>\n"
            },
            4: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '        <div class="ownActivity__additional sc-truncate sc-button-group">\n          ' + u((n(52) || t && t.$view || l).call(s, n(246), {
                    name: "$view",
                    hash: {
                        resource_id: null != (a = null != t ? t.user : t) ? a.id : a
                    },
                    data: o
                })) + "\n          " + u((n(52) || t && t.$view || l).call(s, n(214), {
                    name: "$view",
                    hash: {
                        resource_id: null != (a = null != t ? t.user : t) ? a.id : a
                    },
                    data: o
                })) + "\n        </div>\n"
            },
            6: function(e, t, i, r, o) {
                return e.escapeExpression((n(57) || t && t.$route || i.helperMissing).call(null != t ? t : {}, "listen", null != t ? t.audible : t, {
                    name: "$route",
                    hash: {},
                    data: o
                }))
            },
            8: function(e, t, i, r, o) {
                return e.escapeExpression((n(57) || t && t.$route || i.helperMissing).call(null != t ? t : {}, "playlist", null != t ? t.audible : t, {
                    name: "$route",
                    hash: {},
                    data: o
                }))
            },
            10: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing;
                return "        " + e.escapeExpression((n(199) || t && t.$icon || s).call(a, {
                    name: "$icon",
                    hash: {
                        title: (n(51) || t && t.$t || s).call(a, "liked", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        variation: null != t ? t.icon_variation : t,
                        type: "like",
                        size: "medium"
                    },
                    data: o
                })) + "\n"
            },
            12: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing;
                return "        " + e.escapeExpression((n(199) || t && t.$icon || s).call(a, {
                    name: "$icon",
                    hash: {
                        title: (n(51) || t && t.$t || s).call(a, "reposted", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        variation: null != t ? t.icon_variation : t,
                        type: "repost",
                        size: "medium"
                    },
                    data: o
                })) + "\n"
            },
            14: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing;
                return "        " + e.escapeExpression((n(199) || t && t.$icon || s).call(a, {
                    name: "$icon",
                    hash: {
                        title: (n(51) || t && t.$t || s).call(a, "mentioned you in", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        variation: null != t ? t.icon_variation : t,
                        type: "sound",
                        size: "medium"
                    },
                    data: o
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<div class="ownActivity__images">\n  ' + u((n(52) || t && t.$view || l).call(s, n(170), {
                    name: "$view",
                    hash: {
                        size: null != t ? t.user_image_size : t,
                        resource_id: null != (a = null != t ? t.user : t) ? a.id : a
                    },
                    data: o
                })) + "\n  " + u((n(52) || t && t.$view || l).call(s, n(86), {
                    name: "$view",
                    hash: {
                        className: "ownActivity__trackImg",
                        size: null != t ? t.audible_image_size : t,
                        resource_type: null != t ? t.subresource_type : t,
                        resource_id: null != (a = null != t ? t.audible : t) ? a.id : a
                    },
                    data: o
                })) + '\n</div>\n<div class="ownActivity__content">\n' + (null != (a = i["if"].call(s, null != t ? t.is_small : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.program(3, o, 0),
                    data: o
                })) ? a : "") + '  <h3 class="ownActivity__title">\n    <a class="sc-link-dark" href="' + (null != (a = i["if"].call(s, null != t ? t.type_is_tracky : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(6, o, 0),
                    inverse: e.program(8, o, 0),
                    data: o
                })) ? a : "") + '">\n' + (null != (a = i["if"].call(s, null != t ? t.type_is_like : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + (null != (a = i["if"].call(s, null != t ? t.type_is_repost : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(12, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + (null != (a = i["if"].call(s, null != t ? t.type_is_audible : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(14, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "      " + u(e.lambda(null != (a = null != t ? t.audible : t) ? a.title : a, t)) + '\n    </a>\n  </h3>\n</div>\n<span class="ownActivity__time sc-font-light">\n  ' + u((n(52) || t && t.$view || l).call(s, n(128), {
                    name: "$view",
                    hash: {
                        timestamp: null != t ? t.created_at : t
                    },
                    data: o
                })) + "\n</span>\n"
            },
            useData: !0
        })
    },
    1165: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                return '<div class="audibleEditForm__loading">\n  <div class="audibleEditForm__form sc-media sc-border-light g-shadow-light loading sc-border-box"></div>\n</div>\n'
            },
            useData: !0
        })
    },
    1167: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                return '    <div class="sc-media-image autocompleteItem__queryIcon"></div>\n'
            },
            3: function(e, t, i, r, o) {
                return '    <div class="sc-media-image">\n      ' + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(86), {
                    name: "$view",
                    hash: {
                        size: 20,
                        resource_type: null != t ? t.entityResourceType : t,
                        resource_id: null != t ? t.entityResourceId : t
                    },
                    data: o
                })) + "\n    </div>\n"
            },
            5: function(e, t, i, r, o) {
                return "    " + e.escapeExpression((n(199) || t && t.$icon || i.helperMissing).call(null != t ? t : {}, {
                    name: "$icon",
                    hash: {
                        "class": "autocompleteItem__icon",
                        type: null != t ? t.iconName : t,
                        size: "large"
                    },
                    data: o
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, a, s = null != t ? t : {},
                    l = n.helperMissing,
                    u = "function",
                    c = e.escapeExpression;
                return '<a class="sc-media sc-media-type-' + c((a = null != (a = n.iconName || (null != t ? t.iconName : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "iconName",
                    hash: {},
                    data: r
                }) : a)) + '" href="' + c((a = null != (a = n.link || (null != t ? t.link : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "link",
                    hash: {},
                    data: r
                }) : a)) + '">\n' + (null != (o = n["if"].call(s, null != t ? t.isQuery : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.program(3, r, 0),
                    data: r
                })) ? o : "") + '  <div class="sc-media-content">\n    <h2 class="autocompleteItem__title sc-truncate sc-type-h3 sc-type-light">' + (null != (a = null != (a = n.title || (null != t ? t.title : t)) ? a : l, o = typeof a === u ? a.call(s, {
                    name: "title",
                    hash: {},
                    data: r
                }) : a) ? o : "") + "</h2>\n  </div>\n\n" + (null != (o = n.unless.call(s, null != t ? t.isQuery : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(5, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "</a>\n"
            },
            useData: !0
        })
    },
    1168: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var a;
                return '  <div class="searchMenu__searchFor sc-type-small" role="option">\n    <a href="' + e.escapeExpression((n(57) || t && t.$route || i.helperMissing).call(null != t ? t : {}, "search", "", null != (a = null != t ? t._options : t) ? a.query : a, {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" class="sc-truncate searchMenu__searchForText"></a>\n  </div>\n'
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s = null != t ? t : {};
                return (null != (a = i.unless.call(s, null != t ? t.isQueryEmpty : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(s, n(668), {
                    name: "$view",
                    hash: {
                        key: "list",
                        query: null != (a = null != t ? t._options : t) ? a.query : a
                    },
                    data: o
                })) + "\n\n"
            },
            useData: !0
        })
    },
    1169: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<input\n  class="headerSearch__input sc-input"\n  placeholder="' + u((a = null != (a = i.placeholderText || (null != t ? t.placeholderText : t)) ? a : l, "function" == typeof a ? a.call(s, {
                    name: "placeholderText",
                    hash: {},
                    data: o
                }) : a)) + '"\n  type="search"\n  name="q"\n  autocomplete="off"\n  aria-label="' + u((n(51) || t && t.$t || l).call(s, "Search", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">\n<button class="headerSearch__submit submit sc-ir" type="submit">' + u((n(51) || t && t.$t || l).call(s, "Search", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</button>\n"
            },
            useData: !0
        })
    },
    1242: function(e, t, n) {
        var i = n(775);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    1243: function(e, t, n) {
        var i = n(2411);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    1247: function(e, t, n) {
        var i = n(778);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    1248: function(e, t, n) {
        var i = n(779);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    1250: function(e, t, n) {
        var i = n(781);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    1254: function(e, t, n) {
        var i = n(2465);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    1255: function(e, t, n) {
        var i = n(2473);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    1257: function(e, t, n) {
        var i = n(785);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    1258: function(e, t, n) {
        var i = n(786);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    1259: function(e, t, n) {
        var i = n(787);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    1260: function(e, t, n) {
        var i = n(788);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    1432: function(e, t, n) {
        "use strict";

        function i(e) {
            this.setRecipient(e), this.focus()
        }
        var r = n(58).trackV0Click,
            o = /^\s*@([\w\-]+)[^\w\-]/,
            a = 1e3,
            s = {
                REPLY: n(50).t("Write a reply"),
                COMMENT: n(50).t("Write a comment")
            };
        e.exports = new(n(21))({
            requires: ["postComment"],
            override: {
                template: n(3059),
                css: n(3472),
                className: "commentForm commentForm__transition"
            },
            applyTo: function(e) {
                e.events = n(3).assign(e.events || {}, {
                    keydown: "onKeydown",
                    "keyup    .commentForm__input": "onInputKeyup",
                    "focus    .commentForm__input": "onInputFocus",
                    "blur     .commentForm__input": "onInputBlur",
                    "click    .commentForm__recipient": "onRecipientClick"
                }), e.element2selector = n(3).assign(e.element2selector || {}, {
                    input: ".commentForm__input",
                    recipient: ".commentForm__recipient",
                    inputMessage: ".commentForm__inputMessage"
                }), e.states = n(3).assign(e.states || {}, {
                    active: "m-active",
                    recipientActive: "m-recipientActive",
                    invalid: function(e) {
                        this.$el.toggleClass("m-invalid", e), this.getElement("inputMessage").toggleClass("g-input-validation-hidden", !e)
                    }
                }), e.defaults = n(3).assign(e.defaults || {}, {
                    size: "large"
                })
            },
            after: {
                setup: function() {
                    this.$el.addClass("m-" + this.options.size), n(56).on("connect:hasUserData", this.onUserData, this), this.model.on("change:recipient", i, this)
                },
                dispose: function() {
                    n(56).off("connect:hasUserData", this.onUserData, this), this.model.off("change:recipient", i, this)
                },
                onInputFocus: function() {
                    r(["comment", "click"]), this.bubble(n(221).FOCUSED, this), this.toggleState("active", !0)
                },
                onInputBlur: function() {
                    this.toggleState("active", !1)
                }
            },
            before: {
                cancelInput: function() {
                    this.trigger(n(221).CANCELED, this, this.options.timestamp), this.bubble(n(221).CANCELED, this, this.options.timestamp), r(["comment", "cancel"])
                }
            },
            around: {
                getTemplateData: function(e, t) {
                    var i = n(3).assign({
                        isVisible: !0,
                        isLarge: "large" === this.options.size,
                        me: n(54).get("me").toJSON(),
                        inputTitle: this.getPlaceholderText(),
                        maxLength: a
                    }, t);
                    return e(i) || i
                }
            },
            defaults: {
                onInputBlur: n(3).noop,
                onInputFocus: n(3).noop,
                cancelInput: n(3).noop
            },
            setRecipient: function(e) {
                var t = this.getElement("recipient"),
                    n = this.getElement("input"),
                    i = !(!e || !e.length),
                    r = i ? s.REPLY : s.COMMENT;
                e = i ? "@" + e : "", n.attr({
                    placeholder: r,
                    title: r
                }), t.text(e).toggle(i), n.css({
                    paddingLeft: i ? t.outerWidth() : ""
                })
            },
            getRecipient: function() {
                return this.getElement("recipient").text().trim()
            },
            extractRecipient: function(e) {
                var t = o.exec(e);
                return t && t[1]
            },
            removeRecipientText: function(e) {
                return e.replace(o, "")
            },
            getCombinedBody: function() {
                var e = this.getRecipient();
                return (e ? e + ": " : "") + this.getCommentBody()
            },
            getPlaceholderText: function() {
                return s.COMMENT
            },
            isEmpty: function() {
                return this.disposed || !this.getCommentBody().length
            },
            exceedsMaxLength: function() {
                return this.getCommentBody().length > a
            },
            getCommentBody: function() {
                return (this.getElement("input").val() || "").trim()
            },
            clear: function() {
                this.getElement("input").val("")
            },
            focus: function() {
                this.getElement("input").focus()
            },
            onSubmit: function() {
                this.isEmpty() || this.exceedsMaxLength() || (this._isPostingComment = !0, n(61).login({
                    implicitAction: "comment",
                    implicitTarget: n(88).generate("sound", this.options.sound_id)
                }).done(this.postComment.bind(this, this.options.timestamp)))
            },
            onUserData: function() {
                this._isPostingComment || this.rerender()
            },
            onRecipientClick: function(e) {
                e.preventDefault()
            },
            onInputKeyup: function() {
                if ("" === this.getRecipient()) {
                    var e = this.getElement("input"),
                        t = this.extractRecipient(e.val());
                    t && (this.setRecipient(t), e.val(this.removeRecipientText(e.val())).focus()), this.toggleState("invalid", this.exceedsMaxLength())
                }
            },
            onKeydown: function(e) {
                switch (e.keyCode) {
                    case n(108).BACKSPACE:
                        this.onBackspace(e);
                        break;
                    case n(108).ENTER:
                        this.onSubmit(), e.stopPropagation();
                        break;
                    case n(108).ESC:
                        this.getElement("input").trigger("blur", !0), this.cancelInput()
                }
            },
            onBackspace: function(e) {
                var t = this.getElement("input")[0];
                0 === t.selectionStart && 0 === t.selectionEnd && e.target === t && "" !== this.getRecipient() && (this.getState("recipientActive") && this.setRecipient(), this.toggleState("recipientActive"), e.preventDefault(), e.stopPropagation())
            }
        })
    },
    1433: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var i = e.call(this);
            if (i) {
                var r = this.createExplicitQueueItems(i);
                r.length && (n(159).prepareDragEvent(t), n(159).start(r), window.requestAnimationFrame(n(287).show))
            }
        }

        function r() {
            n(159).end()
        }

        function o() {
            var e = this.model;
            return !e || "sound" !== e.resource_type && "playlist" !== e.resource_type ? void 0 : e
        }
        e.exports = new(n(21))({
            requires: ["createExplicitQueueItems"],
            applyTo: function(e) {
                var t, n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    a = n.getAudible,
                    s = void 0 === a ? o : a,
                    l = n.enabled,
                    u = void 0 === l ? function() {
                        return !0
                    } : l,
                    c = n.draggableSelector,
                    d = void 0 === c ? "" : c;
                this.after(e, (t = {}, t[d ? "renderDecorate" : "setup"] = function() {
                    u.call(this) && (d ? this.$(d) : this.$el).attr("draggable", !0).on("dragstart", i.bind(this, s)).on("dragend", r)
                }, t))
            }
        })
    },
    1442: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e.target,
                n = t.checked,
                i = t.disabled;
            this.toggleState("checked", n), this.toggleState("disabled", i), this.options.onChange.call(this, n)
        }

        function r() {
            this.toggleState("focused", !0)
        }

        function o() {
            this.toggleState("focused", !1)
        }
        n(20).SafeString, e.exports = n(53).extend({
            className: "blockCheckbox",
            css: n(3425),
            template: n(3015),
            defaults: {
                blockContent: "",
                label: null,
                disabled: !1,
                toggleAnywhere: !0,
                onChange: n(3).noop
            },
            events: {
                "change .blockCheckbox__control": i,
                "focus .blockCheckbox__control": r,
                "blur .blockCheckbox__control": o
            },
            element2selector: {
                control: ".blockCheckbox__control",
                validation: ".blockCheckbox__validation"
            },
            setup: function(e) {
                e.blockContent
            },
            states: {
                focused: "m-focused",
                indeterminate: function(e) {
                    this.$el.toggleClass("m-indeterminate"), this.getElement("control").prop("indeterminate", e), e && this.getElement("control").prop("checked", !0)
                },
                checked: function(e) {
                    this.$el.toggleClass("m-checked", e), this.getElement("control").prop("checked", e)
                },
                disabled: function(e) {
                    this.getElement("control").attr("disabled", e), this.$el.toggleClass("m-disabled", e)
                }
            },
            isChecked: function() {
                return this.getElement("control").checked()
            },
            getTemplateData: function(e) {
                return n(3).assign(e, {
                    tagName: this.options.toggleAnywhere ? "label" : "div",
                    inputId: this.cid + "_input"
                })
            }
        })
    },
    1444: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend({
            css: n(556),
            className: "paging-eof sc-border-light-top",
            setup: function() {
                this.el.title = ""
            },
            template: function() {
                return ""
            }
        })
    },
    1447: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e && !n(107).msie && !n(107).msedge;
            this.toggleState("imageOverlay", !!t)
        }

        function r(e) {
            this.disposed || (o(a.call(this), e), s.call(this))
        }

        function o(e, t) {
            var n = t.colors,
                i = n[0],
                r = n[1],
                o = t.angle,
                a = o - 180;
            return e.style.background = r, i === r ? void(e.style.filter = "") : (e.style.filter = "progid:DXImageTransform.Microsoft.gradient( startColorstr='" + i + "', endColorstr='" + r + "',GradientType=1 );", e.style.background = "-webkit-linear-gradient(" + a + "deg, " + i + " 0%," + r + " 100%)", e.style.background = "-ms-linear-gradient(" + a + "deg, " + i + " 0%," + r + " 100%)", void(e.style.background = "linear-gradient(" + o + "deg, " + i + " 0%," + r + " 100%)"))
        }

        function a() {
            return this.$(".backgroundGradient__hidden")[0]
        }

        function s() {
            this.$(".backgroundGradient__buffer").toggleClass("backgroundGradient__hidden")
        }

        function l(e, t, i, r) {
            return n(1408).fetchColorsFromUrl(e).then(function(e) {
                var t = e.map(function(e) {
                    var t = e[0],
                        i = e[1],
                        r = e[2];
                    return n(24)({
                        r: h(t),
                        g: h(i),
                        b: h(r)
                    }).toHsl()
                });
                return {
                    colors: u(t, r).map(function(e) {
                        return n(24)(e).hex()
                    }),
                    angle: i
                }
            }, function() {
                return n(55).resolve({
                    colors: n(87).getPlaceholderGradient(t),
                    angle: i
                })
            })
        }

        function u(e, t) {
            var n = c(e, "user" === t),
                i = n[0],
                r = n[1],
                o = i.l < r.l ? i : r,
                a = (r.l + i.l) / 2;
            switch (t) {
                case "muted":
                    o.l = .75 * a, i.s *= .6, r.s *= .6;
                    break;
                case "solid":
                    return i.s *= Math.min(1, (100 - i.l) / 20), i.l = Math.min(42, 3 * i.l), [i, i];
                case "normal":
                default:
                    r.l = a, i.s *= .5, r.s *= .5
            }
            return i.l >= r.l ? [i, r] : [r, i]
        }

        function c(e, t) {
            var i = t ? e : e.filter(function(e) {
                var t = e.s,
                    n = e.l;
                return 0 !== t && (10 > n || n > 90)
            });
            return i.length >= 2 ? n(3).first(i, 2) : n(3).first(e, 2)
        }
        var d = {
                colors: ["#000", "#000"],
                angle: 0
            },
            p = n(119).clamp,
            h = n(3).partial(p, n(3), 0, 255);
        e.exports = n(53).extend({
            template: n(3030),
            css: n(3444),
            className: "backgroundGradient",
            defaults: {
                angle: 135,
                colorAdjustment: "normal"
            },
            _current: null,
            _fallback: null,
            states: {
                imageOverlay: "m-imageOverlay"
            },
            element2selector: {
                imageOverlay: ".backgroundGradient__imageOverlay"
            },
            setImageUrl: function(e) {
                var t = this,
                    n = arguments.length <= 1 || void 0 === arguments[1] ? this._fallback : arguments[1],
                    o = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2];
                if (!(e && e === this._current || !e && n === this._fallback)) {
                    var a = this.options,
                        s = a.angle,
                        u = a.colorAdjustment;
                    this._current = e, this._fallback = n, i.call(this, o);
                    var c = this.getState("imageOverlay");
                    c ? (this.getElement("imageOverlay").css("backgroundImage", o ? "url(" + e + ")" : ""), r.call(this, d)) : l(e, n || 0, s, u).then(function(e) {
                        return r.call(t, e)
                    })
                }
            }
        })
    },
    1448: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                t(e.target).closest(this.getElement("fileInput")).length || this.chooseFile()
            }

            function r(e) {
                var t = this,
                    i = e.target.files[0],
                    r = this.options,
                    l = r.standAlone,
                    u = r.minSrcSize,
                    c = r.maxSrcSize,
                    d = r.onImageRejected,
                    p = this.selectedFileId = n(3).uniqueId("image-chooser"),
                    h = function() {
                        return t.selectedFileId === p
                    },
                    f = function() {
                        l ? t.openModalWithFile(i) : t.bubble("image-chooser:file-selected", {
                            file: i
                        })
                    };
                i && (a.call(this), s(i, u, c).then(o(h, f), o(h, d)))
            }

            function o(e, t) {
                return function() {
                    return e() && t()
                }
            }

            function a() {
                var e = this.getElement("fileInput");
                e.replaceWith(e.val("").clone()), this.resetElementCache()
            }

            function s(e, t, i) {
                return n(87).readImageFile(e).then(function(e) {
                    return l(e, t, i) ? n(55).resolve() : n(55).reject()
                })
            }

            function l(e, t, n) {
                return t <= e.width && t <= e.height && n >= e.width && n >= e.height
            }
            var u = n(69).Events,
                c = n(58).trackV0Click;
            e.exports = n(53).extend({
                css: n(3445),
                template: n(3031),
                className: "imageChooser",
                events: {
                    click: i,
                    "change .imageChooser__fileInput": r
                },
                element2selector: {
                    fileInput: ".imageChooser__fileInput",
                    chooseButton: ".imageChooser__chooseButton"
                },
                defaults: {
                    size: "medium",
                    text: n(50).t("Update image"),
                    buttonClass: "sc-button-camera",
                    standAlone: !0,
                    minSrcSize: 0,
                    maxSrcSize: 1 / 0,
                    onImageRejected: n(3).noop
                },
                setup: function() {
                    this.selectedFileId = null
                },
                renderDecorate: function() {
                    this.getElement("chooseButton").prop("disabled", !n(54).get("me").isConfirmed()).addClass("sc-button-" + this.options.size)
                },
                openModalWithFile: function(e) {
                    var t = this.options,
                        i = t.resource_id,
                        r = t.resource_type,
                        o = new(n(1492))({
                            resource_id: i,
                            resource_type: r,
                            togglerEl: this.el,
                            Subview: n(2049),
                            subviewArgs: {
                                file: e
                            }
                        });
                    o.on(u.CLOSED, o._dispose, o), o.open()
                },
                chooseFile: function() {
                    n(54).get("me").isConfirmed() && (this.getElement("fileInput").click(), c(["upload", "image", "click"]))
                }
            })
        }).call(t, n(1))
    },
    1467: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend(n(79), {
            className: "sc-button-gotostats",
            ModelClass: n(67),
            defaults: {
                text: n(50).t("Stats"),
                title: n(50).t("Go to stats"),
                noStyle: !1,
                isScButton: !0,
                text_only: !1,
                noFollow: !1,
                permalink: null
            },
            buttonLabels: {
                "default": n(50).t("Stats")
            },
            onClick: function(e) {
                e.preventDefault(), n(54).get("router").navigate(n(59).getRoute("track-stats", this.model), {
                    trigger: !0,
                    replace: !1
                })
            }
        })
    },
    1468: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend(n(79), {
            className: "removeFromNextUp",
            css: n(3461),
            ModelClass: n(218),
            buttonLabels: {
                "default": n(50).t("Remove from Next up")
            },
            onClick: function(e) {
                e.preventDefault(), n(62).removeItem(this.model), this.bubble("overlay:close")
            }
        })
    },
    1470: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend(n(382), {
            template: n(3057),
            getHref: function() {
                return n(59).getRoute("youNetwork", null, "following")
            }
        })
    },
    1471: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend(n(382), {
            getHref: function() {
                return n(59).getRoute("youNetwork", null, "sets")
            }
        })
    },
    1473: function(e, t, n) {
        "use strict";

        function i() {
            var e = this.subviews.customGenre;
            r.call(this), this.model.isCustomGenre() && e && e.focus()
        }

        function r() {
            this.toggleState("private", "private" === this.model.get("sharing")), this.toggleState("customGenre", this.model.isCustomGenre())
        }
        e.exports = n(53).extend({
            template: n(3077),
            css: n(3490),
            className: "baseFields sc-clearfix",
            states: {
                "private": "private",
                playlist: "playlist",
                customGenre: "m-customGenre"
            },
            defaults: {
                Form: null
            },
            setup: function(e) {
                var t = e.Form,
                    n = e.resource_id,
                    o = e.resource_type;
                this.model = new t({}, {
                    resource_id: n,
                    resource_type: o
                }), this.toggleState("playlist", "playlist-upload" === o), this.listenTo(this.model, "change:sharing", r).listenTo(this.model, "change:genre", i)
            },
            renderDecorate: function() {
                r.call(this)
            },
            getTemplateData: function(e) {
                var t = n(54).get("me"),
                    i = e._resource_type.indexOf("sound") > -1;
                return e.FormClass = this.options.Form, e.username = t.get("username"), e.showPlaylistTypeSelect = !i, i ? (e.titlePlaceholder = n(50).t("Name your track"), e.descriptionPlaceholder = n(50).t("Describe your track"), e.tagPlaceholder = n(50).t("Add tags to describe the genre and mood of your track")) : (e.titlePlaceholder = n(50).t("Name your playlist"), e.descriptionPlaceholder = n(50).t("Describe your playlist"), e.tagPlaceholder = n(50).t("Add tags to describe the genre and mood of your playlist")), e.type = i ? "sound" : "playlist", e
            }
        })
    },
    1474: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend({
            template: n(3082),
            css: n(3494),
            className: "licenseEdit",
            defaults: {
                FormClass: null
            },
            getTemplateData: function(e) {
                return e.FormClass = this.options.FormClass, e.showCommonsDetailsFn = function(e) {
                    return e === n(140).COMMONS
                }, e
            }
        })
    },
    1475: function(e, t, n) {
        "use strict";

        function i(e) {
            this.bubble("territoryDelete", {
                territoryId: this.options.territoryId
            })
        }

        function r(e) {
            e.target.value && this.bubble("territoryChange", {
                territoryId: e.target.value
            })
        }

        function o(e) {
            var t = n(3).findWhere(this.rightsholderOptions(), {
                value: e.target.value
            });
            t && this.bubble("territoryChange", {
                territoryId: this.options.territoryId,
                rightsholder: t
            })
        }

        function a(e) {
            return n(89).codeToCountry(e) || e
        }
        e.exports = n(53).extend({
            className: "monetizationTerritory",
            template: n(3086),
            css: n(3498),
            events: {
                "click .monetizationTerritory__removeButton": i,
                "change .monetizationTerritory__territorySelect": r,
                "change .monetizationTerritory__rightsholderSelect": o
            },
            defaults: {
                emptyMessage: n(50).t("Select territory"),
                territoryId: null,
                rightsholder: null,
                remainingTerritories: null,
                explicitRequiredTerritories: null,
                userRightsholders: null
            },
            getTemplateData: function() {
                var e = this.options,
                    t = e.territoryId,
                    i = e.rightsholder,
                    r = e.explicitRequiredTerritories,
                    o = this.rightsholderOptions(),
                    s = t && (i || !n(3).contains(r, t) || 0 === o.length);
                return {
                    emptyMessage: this.options.emptyMessage,
                    needsTerritory: !t,
                    needsRightsholder: !s && t && !i,
                    isComplete: s,
                    territoryOptions: this.territoryOptions(),
                    rightsholderOptions: o,
                    selectedTerritory: t ? a(t) : null,
                    selectedRightsholder: i ? i.label : ""
                }
            },
            territoryOptions: function() {
                return n(3).map(n(3).keys(this.options.remainingTerritories), function(e) {
                    return {
                        value: e,
                        label: a(e)
                    }
                })
            },
            rightsholderOptions: function() {
                var e = this.options,
                    t = e.userRightsholders,
                    i = e.territoryId;
                return i ? n(3).map(t[i] || [], function(e, t) {
                    return {
                        value: t,
                        label: e
                    }
                }) : []
            }
        })
    },
    1477: function(e, t, n) {
        "use strict";

        function i() {
            var e = this.model.get("errorMessage");
            this.getElement("statusMessage").text(e), this.toggleState("failed", !!e)
        }
        e.exports = n(53).extend(n(68).withOptions("trackEdit"), {
            template: n(3098),
            loadingTemplate: n(1165),
            css: [n(1254), n(3508), n(1255)],
            className: "audibleEditForm restrictedEditForm",
            element2selector: {
                statusMessage: ".restrictedEditForm__status"
            },
            states: {
                failed: "m-failed"
            },
            setup: function(e) {
                var t = e.resource_id;
                this.model = new(n(490))({
                    resource_id: t
                }), this.listenTo(this.model, "change:errorMessage", i)
            },
            getTemplateData: function(e) {
                return e.RestrictedAudibleEdit = n(490), e.hasCustomBuyTitle = n(54).get("me").getPerk("customBuyTitle"), e.buyLinkClassName = e.hasCustomBuyTitle ? "metadataGrid__field-wide" : "metadataGrid__field-full", e.isPlaylist = "restricted-playlist-edit" === this.options.resource_type, e
            }
        })
    },
    1479: function(e, t, n) {
        "use strict";
        var i = n(191).shouldShowUpsells;
        e.exports = n(400).extend(n(1435), {
            ModelClass: n(145),
            className: "soundEditTabs",
            css: [n(1246), n(3510)],
            defaults: {
                large: !0,
                tabs: function() {
                    var e = n(54).get("me"),
                        t = e.hasMonetization();
                    return [{
                        name: n(50).t("Basic info"),
                        subview: n(1963)
                    }, {
                        name: n(50).t("Metadata"),
                        subview: n(1966)
                    }, t && {
                        name: n(50).t("Monetization"),
                        subview: n(1968)
                    }, !t && i() && {
                        name: n(50).t("Monetization"),
                        isNew: !0,
                        subview: n(1964)
                    }, {
                        name: n(50).t("Permissions"),
                        subview: n(1961),
                        subviewArgs: function() {
                            return {
                                renderGeoblocking: e.hasGeoblocking() && !t
                            }
                        }
                    }].filter(Boolean)
                }
            }
        })
    },
    1480: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend(n(115).withOptions({
            type: "go"
        }), {
            tagName: "a",
            defaults: {
                referral: null,
                text: null,
                trackImpressions: !0
            },
            setup: function() {
                this.$el.attr("href", n(59).getRoute("consumerPremium"))
            },
            shouldTrackImpression: function() {
                return this.options.trackImpressions
            },
            getUpsellRef: function() {
                return this.options.referral
            },
            template: function() {
                return this.options.text
            }
        })
    },
    1481: function(e, t, n) {
        "use strict";
        var i = {
            messages: n(50).t("Messages"),
            activities: n(50).t("Notifications")
        };
        e.exports = n(53).extend(n(508), {
            template: n(3112),
            css: n(3520),
            className: "notificationIcon",
            setup: function(e) {
                this.$el.addClass(e.type)
            },
            getTemplateData: function(e) {
                return e.name = i[this.options.type], e
            }
        })
    },
    1482: function(e, t, n) {
        "use strict";

        function i(e) {
            this.toggleState("selected", e.layoutName === l)
        }

        function r() {
            var e = this.isUploading = !!u.numToUpload(),
                t = this.isTranscoding = !!u.numTransoding(),
                i = e || t,
                r = e ? n(50).t("Uploading…") : t ? n(50).t("Processing…") : n(50).t("Upload");
            this.toggleState("active", i), this.getElement("title").text(r), i && o.call(this)
        }

        function o() {
            var e = this.isUploading ? u.transferStatus.getProgress() : u.transcodingStatus.getProgress();
            this.getElement("status").text(e ? Math.min(Math.round(100 * e), 99) + "%" : "")
        }

        function a() {
            r.call(this)
        }
        var s = n(58).trackUploadFunnel,
            l = "upload",
            u = void 0;
        e.exports = n(53).extend(n(79), {
            css: n(3522),
            className: "uploadButton",
            tagName: "a",
            isUploading: !1,
            isTranscoding: !1,
            element2selector: {
                status: ".uploadButton__status",
                title: ".uploadButton__title"
            },
            states: {
                active: "active"
            },
            attributes: {
                href: n(59).getRoute("upload")
            },
            setup: function() {
                u || (u = new(n(267))), this.listenTo(u, "add remove", r).listenTo(u, "change:status", a).listenTo(u.transferStatus, "data", o).listenTo(u.transcodingStatus, "data", o).listenTo(n(56), "layout:change", i)
            },
            template: function() {
                return '<span class="uploadButton__title"></span><span class="uploadButton__status"></span>'
            },
            renderDecorate: function() {
                r.call(this)
            },
            onClick: function() {
                s("upload_button_header")
            }
        })
    },
    1620: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var o;
                return null != (o = n["if"].call(null != t ? t : {}, null != t ? t.onSoundCloud : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, r, 0),
                    inverse: e.program(7, r, 0),
                    data: r
                })) ? o : ""
            },
            2: function(e, t, n, i, r) {
                var o, a, s = null != t ? t : {},
                    l = n.helperMissing,
                    u = "function",
                    c = e.escapeExpression;
                return '      <li class="g-tabs-item creatorsNavigation__onSoundCloud">\n        <a class="g-tabs-link ' + (null != (o = n["if"].call(s, null != t ? t.isActive : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + ' creatorsNavigation__onSoundCloudLink" href="' + c((a = null != (a = n.href || (null != t ? t.href : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "href",
                    hash: {},
                    data: r
                }) : a)) + '" target="_blank">\n          ' + c((a = null != (a = n.title || (null != t ? t.title : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "title",
                    hash: {},
                    data: r
                }) : a)) + "\n" + (null != (o = n["if"].call(s, null != t ? t.hasNewBadge : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "        </a>\n      </li>\n"
            },
            3: function(e, t, n, i, r) {
                return "active"
            },
            5: function(e, t, i, r, o) {
                return '            <span class="creatorsNavigation__onSoundCloudLinkNewBadge">' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "new", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</span>\n"
            },
            7: function(e, t, n, i, r) {
                var o, a, s = null != t ? t : {},
                    l = n.helperMissing,
                    u = "function",
                    c = e.escapeExpression;
                return '      <li class="g-tabs-item">\n        <a class="g-tabs-link ' + (null != (o = n["if"].call(s, null != t ? t.isActive : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '" href="' + c((a = null != (a = n.href || (null != t ? t.href : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "href",
                    hash: {},
                    data: r
                }) : a)) + '">\n          ' + c((a = null != (a = n.title || (null != t ? t.title : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "title",
                    hash: {},
                    data: r
                }) : a)) + "\n" + (null != (o = n["if"].call(s, null != t ? t.hasNewBadge : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "        </a>\n      </li>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o;
                return '<ul class="creatorsNavigation__list g-tabs g-tabs-small l-container">\n' + (null != (o = n.each.call(null != t ? t : {}, null != t ? t.tabs : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "</ul>\n"
            },
            useData: !0
        })
    },
    1643: function(e, t, n) {
        var i = n(2434);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    1644: function(e, t, n) {
        var i = n(2469);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    1845: function(e, t, n) {
        "use strict";
        n(3).unique, n(3).without, e.exports = new(n(21))({})
    },
    1848: function(e, t, n) {
        "use strict";

        function i(e) {
            return function(t) {
                if (e.call(this)) {
                    var n = this.el.getAttribute("aria-haspopup"),
                        i = this.el.getAttribute("aria-owns");
                    "mouseenter" !== t.type || n && (!i || window.document.getElementById(i)) ? "mouseleave" === t.type && this.toggleState("tooltip-visible", !1) : this.toggleState("tooltip-visible", !0)
                }
            }
        }

        function r(e) {
            var t = o.call(this);
            e ? t.open() : t.close()
        }

        function o() {
            var e = this.subviews.tooltip;
            return e && e.disposed && this.removeSubview(e), this.subviews.tooltip || this.addSubview(a.call(this), "tooltip"), this.subviews.tooltip
        }

        function a() {
            return new(n(1890))({
                togglerEl: this.el,
                relativeElement: this.el,
                domId: this.tooltipId
            })
        }
        e.exports = new(n(21))({
            applyTo: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    o = t.shouldShowTooltip,
                    a = void 0 === o ? n(3).constant(!0) : o,
                    s = i(a);
                this.merge(e, {
                    events: {
                        "mouseenter.tooltip": s,
                        "mouseleave.tooltip": s
                    },
                    states: {
                        "tooltip-visible": r
                    }
                })
            },
            before: {
                setup: function() {
                    this.tooltipId = n(3).uniqueId("tooltip-"), this.$el.attr({
                        "aria-describedby": this.tooltipId
                    })
                }
            },
            after: {
                renderDecorate: function() {
                    this.getState("tooltip-visible") && o.call(this).open()
                }
            }
        })
    },
    1871: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend({
            className: "audibleTilePlaceholder",
            css: n(3422),
            template: function() {
                return ""
            }
        })
    },
    1876: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                return e.regions.length && "worldwide" === e.regions[0].value
            }

            function r(e) {
                return "worldwide" === e && d || n(89).countryCodes(e) || [e]
            }

            function o(e) {
                e.preventDefault()
            }

            function a(e, t) {
                this.focusedField = "addTerritory", t && c.call(this, n(3).union, r(t))
            }

            function s(e, t) {
                this.focusedField = "addException", c.call(this, n(3).difference, [t])
            }

            function l(e) {
                var i = t(e.currentTarget),
                    o = i.data("id");
                c.call(this, n(3).difference, r(o))
            }

            function u(e) {
                var i = t(e.currentTarget),
                    o = i.data("id");
                c.call(this, n(3).union, r(o))
            }

            function c(e, t) {
                var n = e(this.getFieldValue() || [], t);
                this.setFieldValue(n), this.form.hasChanged() || this.rerender()
            }
            var d = n(89).countryCodes();
            e.exports = n(53).extend(n(117), n(217), {
                className: "countries",
                template: n(3023),
                css: n(3437),
                element2selector: {
                    validation: ".countries__addTerritory .textfield__validation"
                },
                events: {
                    "click [name=remove]": l,
                    "click [name=add]": u,
                    "change .countries__addTerritory": a,
                    "change .countries__addException": s,
                    click: o
                },
                setup: function() {
                    this.$el.toggleClass("touch", n(106).touch)
                },
                onFieldChange: function() {
                    this.rerender()
                },
                getTemplateData: function(e) {
                    var t = this.getFieldValue();
                    return e.territories = t && n(1412).partition(t), e.isWorldwide = t && i(e.territories), e.FormClass = this.options.Form, e
                },
                renderDecorate: function() {
                    this.focusedField && this.subviews[this.focusedField] && this.subviews[this.focusedField].focus()
                }
            })
        }).call(t, n(1))
    },
    1877: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend(n(600), {
            className: "selectIdCheckbox",
            template: n(553),
            defaults: {
                modelId: null,
                modelEditable: !0,
                disabled: !1
            },
            states: {
                checked: function(e) {
                    this.bubble("checkbox:checked", {
                        checked: e
                    })
                }
            },
            setup: function(e) {
                var t = e.field,
                    n = "trackIds" === t ? "uneditableTrackIds" : "trackIds";
                this.listenTo(this.form, "change:" + n, this.onFieldChange)
            },
            getTemplateData: function(e) {
                return e.disabled = this.options.disabled, e
            },
            getFieldValue: function() {
                var e = this.form,
                    t = this.options.modelId;
                return e.hasId(t) || e.hasUneditableId(t)
            },
            setFieldValue: function(e) {
                var t = this.field,
                    n = this.options,
                    i = n.modelId,
                    r = n.modelEditable;
                t && !this.getMetaData().readOnly && (this.form[e ? "addId" : "removeId"](i), r || this.form[e ? "addUneditableId" : "removeUneditableId"](i), this.markDirty())
            }
        })
    },
    1879: function(e, t, n) {
        "use strict";
        var i = n(89).countries().concat(n(89).regions()).concat(n(1412).worldwide());
        e.exports = n(268).extend(n(384), {
            getComboItems: function() {
                return i
            },
            getValue: function() {
                var e = this.getControlValue(),
                    t = this.getValueByTitle(e);
                return e.length ? this.setValid(!!t, n(50).t("Enter a country or region.")) : this.setValid(!0), t
            }
        })
    },
    1880: function(e, t, n) {
        "use strict";
        var i = n(3).noop,
            r = n(3).range,
            o = n(3).isArray,
            a = n(285).rotateArray,
            s = n(83).MS_IN_HOUR,
            l = n(83).MS_IN_MINUTE;
        e.exports = n(268).extend(n(384), {
            className: "textfield time",
            defaults: {
                filterable: !1,
                placeholder: n(50).t("HH:MM")
            },
            selectOnTab: !1,
            selectOnArrowNavigation: !0,
            getComboItems: function() {
                var e = this;
                return a(r(24), 1).map(function(e) {
                    return new Date(e * s)
                }).map(function(t) {
                    var i;
                    return i = {}, i[e.options.valueAttr] = t,
                        i[e.options.titleAttr] = n(50).dateTimeHelper.formatTime(t), i
                })
            },
            setFieldValue: function(e) {
                var t = void 0,
                    i = void 0,
                    r = new Date(this.getFieldValue());
                if (e instanceof Date) t = e.getHours(), i = e.getMinutes();
                else {
                    if (!o(e)) return;
                    t = e[0], i = e[1]
                }
                r.setHours(t), r.setMinutes(i), n(268).prototype.setFieldValue.call(this, r)
            },
            selectActiveItem: function() {
                var e = n(50).dateTimeHelper.parseTime(this.getControlValue());
                return this.closeMenu(), e ? (this.setFieldValue(e), !0) : !1
            },
            getValue: function() {
                var e = this.getFieldValue(),
                    t = e ? new Date(e) : new Date,
                    i = this.getControlValue(),
                    r = n(50).dateTimeHelper.parseTime(i);
                return i.length ? r ? (t.setHours(r[0]), t.setMinutes(r[1]), t.setSeconds(0), t.setMilliseconds(0), this.setValid(!0)) : this.setValid(!1, n(50).t("Enter a valid time.")) : this.setValid(!0), t
            },
            getModelIndexByTitle: function(e) {
                var t = this,
                    i = n(50).dateTimeHelper.parseTime(e);
                if (i) {
                    var r = function() {
                        var e = i[0],
                            n = i[1],
                            r = function(e, t) {
                                return e * s + t * l
                            },
                            o = function(t) {
                                return Math.abs(r(t.getHours(), t.getMinutes()) - r(e, n))
                            };
                        return {
                            v: t.datasource.indexOf(t.datasource.sortBy(function(e) {
                                return o(e.get(t.options.valueAttr))
                            }).shift())
                        }
                    }();
                    if ("object" == typeof r) return r.v
                }
                return -1
            },
            getFormattedFieldValue: function() {
                var e = this.getFieldValue();
                return e && !isNaN(e) ? n(50).dateTimeHelper.formatTime(e) : ""
            },
            setValueAgain: i,
            updateQuery: function() {
                var e = this.getMenuContent(),
                    t = this.getModelIndexByTitle(this.getControlValue());
                e && t > -1 && e.highlightItem(t), this.openMenu()
            },
            onFieldChange: function() {
                this.getElement("control").val(this.getFormattedFieldValue())
            },
            getTemplateData: function(e) {
                return e = n(60).prototype.getTemplateData.call(this, e) || e, e._value = this.getFormattedFieldValue(), e
            }
        })
    },
    1881: function(e, t, n) {
        "use strict";

        function i(e) {
            return "GMT" + (0 > e ? "-" : "+") + n(50).numberHelper.zeroPad(Math.floor(Math.abs(e) / 3600), 2) + ":" + n(50).numberHelper.zeroPad(Math.abs(e % 3600) / 60, 2)
        }

        function r() {
            var e = n(590).getLocalTimezone();
            e && this.form.set(this.field, e.name, {
                silent: !0
            })
        }
        var o = {
                America: 1,
                Europe: 2,
                Asia: 3,
                Africa: 4,
                Australia: 5
            },
            a = n(1622).slice().sort(function(e, t) {
                if (e.utc_offset < t.utc_offset) return -1;
                if (e.utc_offset > t.utc_offset) return 1;
                var n = o[e.id.split("/")[0]],
                    i = o[t.id.split("/")[0]];
                return i > n ? -1 : n > i ? 1 : e.name < t.name ? -1 : e.name > t.name ? 1 : 0
            }).map(function(e) {
                return {
                    value: e.name,
                    title: e.name + " (" + i(e.utc_offset) + ")"
                }
            });
        e.exports = n(268).extend(n(384), {
            setup: function() {
                n(268).prototype.setup.apply(this, arguments), this.getFieldValue() || r.call(this)
            },
            getComboItems: function() {
                return a
            },
            getValue: function() {
                var e = this.getControlValue(),
                    t = this.getValueByTitle(e);
                return e.length ? this.setValid(!!t, n(50).t("Enter a time zone.")) : this.setValid(!0), t
            }
        })
    },
    1886: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                this.setupScrollable(this.getElement("scrollable"), this.getElement("scrollableInner"), {
                    hScroll: !1
                })
            }

            function r(e) {
                e.preventDefault();
                var n = e.target,
                    i = t(n).data("link-id"),
                    r = o(i, this.options.linkGroups);
                this.bubble("linkMenuItemSelected", {
                    link: r
                })
            }

            function o(e, t) {
                return n(3).reduce(t || [], function(t, i) {
                    var r = i.links;
                    return t || n(3).find(r, function(t) {
                        var n = t.id;
                        return e === n
                    })
                }, null)
            }
            e.exports = n(53).extend(n(291), {
                template: n(3034),
                css: n(3448),
                className: "linkMenu",
                defaults: {
                    linkGroups: null,
                    activeLinkId: null
                },
                element2selector: {
                    scrollable: ".g-scrollable",
                    scrollableInner: ".g-scrollable-inner"
                },
                events: {
                    "click .linkMenu__item a": r
                },
                renderDecorate: function() {
                    this.whenInserted().done(i.bind(this))
                },
                getTemplateData: function() {
                    var e = this;
                    return {
                        groups: (this.options.linkGroups || []).map(function(t) {
                            return n(3).assign({}, t, {
                                links: t.links.map(function(t) {
                                    return n(3).assign({
                                        active: t.id === e.options.activeLinkId,
                                        tagName: t.disabled ? "span" : "a"
                                    }, t)
                                })
                            })
                        })
                    }
                }
            })
        }).call(t, n(1))
    },
    1904: function(e, t, n) {
        "use strict";
        e.exports = n(398).extend(n(264), {
            NotifyingCollection: n(563),
            Subview: n(650),
            defaults: {
                dark: !0
            },
            setup: function(e) {
                var t = e.dark;
                n(398).prototype.setup.apply(this, arguments), this.loadingViewArgs = {
                    dark: t
                }
            },
            getSubviewArgs: function(e) {
                return e instanceof n(517) || (e = this.collection.findWhere({
                    uuid: e.uuid
                })), {
                    activity: e,
                    dialogEnabled: !1,
                    dark: this.options.dark,
                    comment_body_is_link: !0
                }
            },
            getEmptyListMessage: function() {
                return n(50).t("No activities")
            },
            getViewAllLinkData: function() {
                return {
                    link: n(59).getRoute("activity"),
                    text: n(50).t("View all notifications"),
                    className: "latestActivities__viewAll"
                }
            }
        })
    },
    1908: function(e, t, n) {
        "use strict";

        function i(e) {
            if (this.options.ackOnDocClick) {
                var t = e ? "addEventListener" : "removeEventListener";
                window.document[t]("click", this.onDocumentClick)
            }
        }

        function r() {
            s.call(this, !0)
        }

        function o(e) {
            e.preventDefault(), s.call(this, !0)
        }

        function a(e) {
            var t = e.target;
            this.el.contains(t) || (s.call(this), i.call(this, !1))
        }

        function s() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0],
                t = this.options.onAck,
                n = this.model;
            n.markAsSeen(), e && n.dismiss(), l(t) && t()
        }
        var l = n(3).isFunction;
        e.exports = n(53).extend({
            template: n(3046),
            css: n(3457),
            ModelClass: n(638),
            className: "announcement g-dark",
            requiredAttributes: ["message"],
            events: {
                "click .announcement__ack": r,
                "click .announcement__dismiss": o
            },
            defaults: {
                requiresAck: !1,
                ackText: "",
                onAck: null,
                ackOnDocClick: !1
            },
            states: {
                "dismiss-visible": "m-dismiss-visible"
            },
            setup: function(e) {
                var t = (e.ackText, e.ackOnDocClick, e.requiresAck),
                    n = this.model;
                t || this.whenVisible().then(function() {
                    return n.markAsSeen()
                }), this.onDocumentClick = a.bind(this), i.call(this, !0), this.toggleState("dismiss-visible", t)
            },
            dispose: function() {
                i.call(this, !1)
            }
        })
    },
    1909: function(e, t, n) {
        "use strict";

        function i(e) {
            this.toggleState("offset", e)
        }
        var r = n(3).assign,
            o = 5;
        e.exports = n(73).extend({
            listTagName: "div",
            itemTagName: "div",
            itemClassName: "announcements__item sc-clearfix",
            Subview: n(1908),
            className: "announcements g-z-index-fixed-top",
            css: n(3458),
            defaults: {
                maxDisplay: o
            },
            states: {
                offset: "m-offset"
            },
            setup: function() {
                this.collection = new(n(1703)), this.listenToOnce(n(56), "playControls:visible", i)
            },
            renderDecorate: function() {
                n(73).prototype.renderDecorate.call(this), this.collection.startPolling()
            },
            getModelsToRender: function() {
                return this.collection.filter(function(e) {
                    return !e.isAlreadySeen()
                })
            },
            getSubviewArgs: function(e) {
                return r(n(73).prototype.getSubviewArgs.call(this, e), e.viewOptions)
            }
        })
    },
    1910: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                var e = new(n(69))({
                    width: 500,
                    Subview: n(2316)
                });
                e.open()
            }

            function r(e) {
                var t = new(n(2058))({
                    Subview: n(1523),
                    subviewArgs: {
                        resource_id: e.id
                    }
                });
                t.open()
            }

            function o() {
                var e = this.keyboardModal = this.keyboardModal || new(n(69))({
                    width: 600,
                    Subview: n(2050)
                });
                e[e.isOpened ? "close" : "open"]()
            }

            function a() {
                window.location = window.location.href
            }

            function s() {
                var e = n(55).defer(),
                    t = n(62).getCurrentSound(),
                    i = t && t.isPlaying(),
                    r = n(261).focused();
                return r || i ? r && !i ? this.listenTo(n(261), "change:visibility", e.resolve).listenTo(n(56), "audio:play", function(e) {
                    this.stopListening(n(261), "change:visibility").stopListening(e.sound, "pause")
                }) : i && this.listenTo(t, "pause", e.resolve) : e.resolve(), e
            }

            function l(e) {
                var i, r, o, l, u = 0;
                i = function(t) {
                    if (u = 0, t && t.trim() !== e) {
                        var i = t.indexOf("!") > -1;
                        i && s().done(a), n(54).set("versionOutOfDate", !0)
                    }
                }, r = function() {
                    ++u >= 3 && p.clearInterval(o)
                }, l = {
                    type: "GET",
                    dataType: "text",
                    url: "/version.txt",
                    beforeSend: n(3).noop
                }, o = p.setInterval(function() {
                    t.ajax(l).done(i).fail(r)
                }, n(54).get("versionUpdateInterval"))
            }

            function u() {
                var e = n(62).getCurrentSound();
                e && e.isPlaying() && e.pause(), n(179) && n(179).current.dispose()
            }

            function c() {
                var e = n(56).trigger.bind(n(56), "downloader");
                t(h.body).on("mousedown", 'a[href*="-media.soundcloud."]', function() {
                    var n = h.createElement("a");
                    n.className = this.className, t(this).replaceWith(n), e()
                }).on("mousedown", "button.scDownloaderButton", function() {
                    this.removeAttribute("data-href"), e()
                })
            }

            function d(e) {
                var t = new(n(2037))({
                    event: e
                });
                t.open()
            }
            var p = window,
                h = p.document;
            e.exports = n(53).extend({
                template: n(3047),
                defaults: {
                    appVersion: null
                },
                setup: function(e) {
                    var a;
                    n(106).dragDrop && (a = new(n(2267)), t(h.body).append(a.render().el)), n(3).bindAll(this, "onPlay", "onPause", "onLogin", "onLogout", "onError", "keyboardControlDown", "keyboardControlUp"), this.listenTo(n(56), "audio:play", this.onPlay).listenTo(n(56), "audio:pause", this.onPause).listenTo(n(56), "exception", this.onException).listenTo(n(56), "connect:hasUserData", this.onLogin).listenTo(n(56), "connect:logout", this.onLogout).listenTo(n(56), "broadcast:consumer-premium:subscriptionChange", this.onBroadcastSubChange).listenTo(n(56), "broadcast:audio:play", this.onBroadcastPlay).listenTo(n(56), "connect:signupDenied", i).listenTo(n(56), "error:followDeniedAge", d).listenTo(n(56), "keyboard-shortcuts:toggle", o).listenTo(n(56), "spam-warning", r), t(window).on("error", this.onError).on("unload", u), t(h).on("keydown", this.keyboardControlDown).on("keyup", this.keyboardControlUp).delegate('a[href^="/"]', "click", this.navigate), c(), n(391).setDialogTypes(n(1731)), null != n(65).getFragmentParam("play") && (n(59).removeFragmentParams("play"), n(62).enableAutoplay()), e && e.appVersion && l(e.appVersion)
                },
                getTemplateData: function(e) {
                    return n(3).assign(e, {
                        showStagingMenu: "staging" === n(54).get("env"),
                        productBanners: [{
                            BannerView: n(2256)
                        }]
                    })
                },
                onPlay: function() {
                    n(56).broadcast({
                        excludeThis: !0
                    }, "audio:play"), n(179) && n(179).current.set("playing", !0)
                },
                onPause: function() {
                    var e = n(62).getCurrentSound();
                    n(179) && e && e.isPaused() && n(179).current.set("playing", !1)
                },
                onBroadcastPlay: function() {
                    n(180).isCasting() || n(62).pauseCurrent()
                },
                onLogin: function() {
                    var e = n(54).get("router"),
                        t = e.getLayoutInfo(),
                        i = t.layoutName;
                    "logout" === i ? e.navigate("/", {
                        trigger: !0,
                        replace: !0
                    }) : "signin" !== i && e.reload()
                },
                onLogout: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                        t = e.isOriginator;
                    t ? n(54).get("router").navigateToRoute("logout", [], {
                        hard: !0
                    }) : window.location.reload()
                },
                onBroadcastSubChange: function() {
                    window.location.reload()
                },
                onException: function(e) {
                    e.fatal && n(54).get("router").apply("error", {
                        resource_id: e.id
                    }), window.console.error(e.get("message"))
                },
                onError: function(e) {
                    var t = e.originalEvent;
                    return n(129).raise({
                        message: t.message,
                        error: t,
                        fatal: !1
                    }), !0
                },
                navigate: function(e) {
                    e.isMetaKey() || e.isDefaultPrevented() || e.target.target || (e.preventDefault(), n(54).get("router").navigate(e.currentTarget.getAttribute("href"), !0))
                },
                keyboardControlDown: function(e) {
                    n(501).handleKeyDown(e)
                },
                keyboardControlUp: function(e) {
                    n(501).handleKeyUp(e)
                }
            })
        }).call(t, n(1))
    },
    1913: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return e.containsSoundId(t.id)
        }

        function r(e, t, i) {
            n(75).notify("addToPlaylist", {
                object: i,
                target: e.id,
                targetType: "playlist",
                state: t
            })
        }

        function o() {
            return this.getState("disabled") ? u : ""
        }
        var a = n(50).t("Add to playlist", null, {
                context: "definite"
            }),
            s = n(50).t("Added"),
            l = n(50).t("Remove"),
            u = n(50).t("Playlists cannot have more than 500 tracks in them. Try adding this track to another playlist or create a new one.");
        e.exports = n(53).extend(n(79), {
            className: "addToPlaylistButton",
            css: n(3460),
            buttonLabels: {
                "default": {
                    text: a,
                    title: o
                },
                selected: {
                    text: s,
                    title: l
                }
            },
            attributes: {
                type: "submit"
            },
            defaults: {
                soundIds: null,
                size: "medium"
            },
            _pendingTimeout: null,
            sounds: null,
            requiredAttributes: ["tracks"],
            ModelClass: n(85),
            setup: function(e) {
                e.soundIds = e.soundIds || [], this.sounds = e.soundIds.map(function(e) {
                    return this.addDataSource(new(n(67))({
                        id: e
                    }))
                }, this)
            },
            isButtonSelected: function() {
                return this.allSoundsAreInPlaylist()
            },
            renderDecorate: function() {
                this.toggleState("disabled", !this.model.hasCapacity(this.options.soundIds))
            },
            onClick: function() {
                var e = this;
                if (!this.getState("disabled")) {
                    var t, i = !this.allSoundsAreInPlaylist(),
                        o = this.model;
                    t = this.sounds.filter(function(e) {
                        return o[i ? "addSound" : "removeSound"](e)
                    }), this.undelegateEvents(), window.clearTimeout(this._pendingTimeout), this._pendingTimeout = this.addDeferred(window.setTimeout(this.toggleState.bind(this, "pending", !0), 5e3)), this.model.saveOrder().always(function() {
                        e.disposed || (window.clearTimeout(e._pendingTimeout), e.toggleState("pending", !1), e.delegateEvents())
                    }).done(function() {
                        n(3).each(t, r.bind(null, o, i))
                    })
                }
            },
            allSoundsAreInPlaylist: function() {
                return n(3).all(this.sounds, i.bind(null, this.model))
            }
        })
    },
    1914: function(e, t, n) {
        "use strict";

        function i() {
            return "playlist" === this.model.resource_type
        }
        var r = n(209).apiToType,
            o = n(209).defaultReleaseType;
        e.exports = n(53).extend(n(381), {
            className: "sc-button-delete",
            ModelClass: n(82),
            requiredAttributes: {
                playlist: ["set_type"]
            },
            getButtonText: function() {
                if (i.call(this)) {
                    var e = this.model.get("set_type");
                    return r(e) === o ? n(50).t("Delete playlist") : n(50).t("Delete album")
                }
                return n(50).t("Delete track")
            },
            getModalArgs: function(e) {
                var t = this,
                    i = e.resource_id,
                    r = e.resource_type;
                return "sound" === r ? {
                    width: 550,
                    transparentBackground: !0,
                    Subview: n(1505),
                    subviewArgs: {
                        resource_id: i,
                        resource_type: r,
                        close: function() {
                            return t.closeModal()
                        }
                    }
                } : {
                    width: 350,
                    transparentBackground: !1,
                    Subview: n(2200),
                    subviewArgs: {
                        resource_id: i,
                        resource_type: r,
                        size: "medium"
                    }
                }
            },
            requiresLogin: function() {
                return !0
            }
        })
    },
    1917: function(e, t, n) {
        "use strict";
        var i = n(58).trackV1Click;
        e.exports = n(53).extend(n(100), n(381), {
            className: "sc-button-delete",
            ModelClass: n(67),
            defaults: {
                icon_only: !0,
                showDisabled: !1,
                dialogType: "genericDialog",
                dialogEnabled: !1
            },
            dialogArgs: {
                text: n(50).t("This track cannot be deleted, as it is managed directly by its rightsholder. To make changes, contact your label or distributor."),
                smallText: !0,
                width: 215
            },
            states: {
                showDisabled: "sc-button-disabled"
            },
            buttonLabels: {
                "default": function() {
                    return n(50).t("Delete this track")
                }
            },
            setup: function(e) {
                e.dialogEnabled = e.showDisabled, this.modalEnabled = !e.showDisabled, this.toggleState("showDisabled", e.showDisabled), n(53).prototype.setup.apply(this, arguments)
            },
            getModalArgs: function(e) {
                var t = this,
                    i = e.resource_id,
                    r = e.resource_type;
                return {
                    width: 550,
                    transparentBackground: !0,
                    Subview: n(1505),
                    subviewArgs: {
                        resource_id: i,
                        resource_type: r,
                        close: function() {
                            return t.closeModal()
                        }
                    }
                }
            },
            requiresLogin: function() {
                return !0
            },
            onModalOpen: function() {
                i({
                    context: this.getContextData(),
                    click_name: "track-delete::prompt"
                })
            }
        })
    },
    1921: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend({
            template: "",
            ModelClass: n(639),
            renderDecorate: function() {
                var e = new(n(174))({
                    resource_id: this.model.soundModel.resource_id,
                    resource_type: "sound"
                });
                this.addSubview(e), this.$el.append(e.render().el)
            }
        })
    },
    1934: function(e, t, n) {
        "use strict";
        var i = n(76).subview;
        e.exports = n(53).extend(n(68).withOptions("historicalPlayContextBadge"), {
            ModelClass: n(519),
            template: function() {
                var e = this.model.get("kind");
                switch (e) {
                    case "user":
                        return i(n(275), {
                            resource_id: this.model.getContextId()
                        });
                    case "station":
                        return i(n(536), {
                            resource_type: "station",
                            resource_id: this.model.getContextId()
                        });
                    case "playlist":
                        return i(n(174), {
                            resource_type: "playlist",
                            resource_id: this.model.getContextId(),
                            showPlayButton: "never"
                        })
                }
            },
            onContextRequest: function(e) {
                e.data.historicalPlayContext = this.model
            }
        })
    },
    1942: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend(n(382), {
            getHref: function() {
                return n(59).getRoute("youNetwork", null, "albums")
            }
        })
    },
    1943: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend(n(382), {
            getHref: function() {
                return n(59).getRoute("youNetwork", null, "likes")
            }
        })
    },
    1944: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend(n(382), {
            template: n(3058),
            getHref: function() {
                return n(59).getRoute("youNetwork", null, "stations")
            }
        })
    },
    1946: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                var t = this;
                window.history.replaceState(null, null, n(65).removeFragmentParam("c")), e = n(50).dateTimeHelper.stringToTime(e), this.whenInserted().done(function() {
                    t.goToState(n(103).ACTIVE_TIMESTAMP, e)
                })
            }
            e.exports = n(53).extend(n(512), {
                template: n(3061),
                css: n(3474),
                className: "commentPlaceholder g-z-index-content",
                defaults: {
                    avatarSize: 20
                },
                states: {
                    visible: "visible"
                },
                element2selector: {
                    avatar: ".commentPlaceholder__avatar"
                },
                events: {
                    mousedown: "onMouseDown",
                    click: "onClick"
                },
                _isDraggable: !1,
                _cachedDimensions: null,
                setup: function() {
                    var e;
                    n(3).bindAll(this, "onMouseDown", "onMouseUp", "onMouseMove", "onClick"), this.listenTo(n(56), "connect:hasUserData", this.onUserData).listenTo(n(94), "resize:debounced", this.resetCachedDimensions), e = n(65).getFragmentParam("c"), void 0 !== e && i.call(this, e)
                },
                onClick: function(e) {
                    this.getCurrentState() === n(103).ACTIVE_TIMESTAMP && e.stopPropagation()
                },
                onMouseDown: function(e) {
                    e.preventDefault(), e.stopPropagation(), this._isDraggable = !0, t(window.document).on("mousemove", this.onMouseMove).on("mouseup", this.onMouseUp)
                },
                onMouseUp: function(e) {
                    e.preventDefault(), e.stopPropagation(), this._isDraggable = !1, t(window.document).off("mousemove", this.onMouseMove).off("mouseup", this.onMouseUp), this.goToState(n(103).ACTIVE_TIMESTAMP, this.getTimestampByMouseEvent(e))
                },
                onMouseMove: function(e) {
                    e.preventDefault(), e.stopPropagation(), this._isDraggable && this.setPosition(this.getPositionAtTimestamp(this.getTimestampByMouseEvent(e)))
                },
                getPositionAtTimestamp: function(e) {
                    return e / this.sound.duration() * this.cachedDimensions().width
                },
                setPosition: function(e) {
                    var t = this.options.avatarSize,
                        n = this.cachedDimensions(),
                        i = n.width,
                        r = this.sound.getMediaDuration() / this.sound.duration();
                    e = e > t ? Math.min(e, i - t, i * r) : Math.max(e, 0), this.getElement("avatar").css({
                        left: e
                    })
                },
                getTemplateData: function(e) {
                    e.me = n(54).get("me").attributes
                },
                onInitialState: function() {
                    this.toggleState("visible", !1)
                },
                onActiveTimestamp: function(e, t) {
                    this.toggleState("visible", !t), this.setPosition(this.getPositionAtTimestamp(e))
                },
                onUserData: function() {
                    this.rerender()
                }
            })
        }).call(t, n(1))
    },
    1947: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                var t = this.getState("visible");
                e = e || this.getCurrentComment(), e ? (r.call(this, e), this.setPosition(e.get("timestamp") / this.sound.duration(), e), this.toggleState("visible", !0)) : t && !e && this.toggleState("visible", !1)
            }

            function r(e) {
                var t = e.get("user"),
                    i = t.username,
                    r = n(192).usertext(e.get("body"), {
                        paragraphs: !1,
                        className: "sc-truncate",
                        links: !1
                    }),
                    o = n(87).urlFrom(e, this.options.avatarSize, !0);
                this.getElement("username").attr("href", n(59).getRoute("user", t)).attr("title", n(50).t("Go to [[username]]’s profile", {
                    username: i
                })).text(i), this.getElement("body").attr("title", n(50).t("Click to reply to [[username]]", {
                    username: i
                })).html(r), this.getElement("avatar").css({
                    "background-image": o ? "url(" + o + ")" : "",
                    pointer: a(e, this.sound) ? "pointer" : ""
                }).removeClass(Object.keys(n(1526)).join(" ")).addClass(o ? "" : n(87).getPlaceholderClass(t))
            }

            function o(e) {
                var t = this.getTimestampByMouseEvent(e),
                    n = Math.floor(this.options.avatarSize / this.cachedDimensions().width * this.sound.duration());
                return this.collection.getCommentAtTimestamp(t, n)
            }

            function a(e, t) {
                return e.get("timestamp") <= t.getMediaDuration()
            }
            var s = 50;
            e.exports = n(53).extend(n(512), n(378), {
                template: n(3062),
                css: n(3475),
                className: "commentPopover",
                defaults: {
                    avatarSize: 20,
                    darkText: !0,
                    flagSize: "small",
                    bulkFetch: n(54).get("maxComments")
                },
                states: {
                    commentLeft: "commentLeft",
                    darkText: "darkText",
                    smallAvatar: "smallAvatar",
                    visible: "visible"
                },
                events: {
                    mouseleave: "onMouseLeave",
                    mouseenter: "onMouseEnter",
                    "mousemove .commentPopover__scrub": "onScrubMouseMove",
                    "click .commentPopover__playableArea": "onScrubClick",
                    "click .commentPopover__avatar, .commentPopover__body": "onBodyOrAvatarClick"
                },
                element2selector: {
                    avatar: ".commentPopover__avatar",
                    body: ".commentPopover__body",
                    username: ".commentPopover__username",
                    wrapper: ".commentPopover__wrapper"
                },
                _hovered: !1,
                _hoverTimeout: null,
                setup: function(e) {
                    this.collection = new(n(565))(null, {
                        sound_id: e.sound_id,
                        secret_token: this.sound.get("secret_token")
                    }), n(3).bindAll(this, "onClickOutsideOfPointer"), this.listenTo(n(94), "resize:debounced", this.resetCachedDimensions).listenTo(this.sound, "finish", this.onPlaybackFinish), this.toggleState("darkText", e.darkText).toggleState("smallAvatar", 10 === e.avatarSize), this.$el.addClass(e.flagSize)
                },
                dispose: function() {
                    t("html").off("mousedown", this.onClickOutsideOfPointer)
                },
                getTemplateData: function(e) {
                    return e.playablePercentage = this.sound.getMediaDuration() / this.sound.duration() * 100, e
                },
                renderDecorate: function() {
                    var e = this.getCurrentComment();
                    this.toggleState("visible", !!e), this.toggleState("commentLeft", !1), e && this.setPosition(e.get("timestamp") / this.sound.duration())
                },
                setPosition: function(e, t) {
                    var n = this.cachedDimensions().width,
                        i = Math.floor(e * n),
                        r = 0,
                        o = n - i,
                        a = this.getElement("wrapper");
                    e > .5 ? (o = n - o, a.width(o), r = -1 * (this.getElement("username").outerWidth() + this.getElement("body").outerWidth()), this.toggleState("commentLeft", !0)) : (a.width(o), this.toggleState("commentLeft", !1)), a.css({
                        transform: "translateX(" + i + "px)",
                        marginLeft: r
                    }), this.getElement("avatar").css({
                        left: -r
                    })
                },
                onAdd: function(e) {
                    this.toggleState("visible", !0), i.call(this, e)
                },
                onRemove: function() {
                    this.goToState(n(103).INITIAL)
                },
                onInitialState: function() {
                    this.setInteracting(!1), i.call(this)
                },
                onCurrentCommentChange: function() {
                    i.call(this)
                },
                onCurrentTimestamp: function() {
                    i.call(this)
                },
                onActiveTimestamp: function(e, n) {
                    i.call(this, n), t("html").on("mousedown", this.onClickOutsideOfPointer)
                },
                onScrubClick: function(e) {
                    var t = o.call(this, e),
                        i = t ? t.get("timestamp") : this.getTimestampByMouseEvent(e);
                    e.stopPropagation(), this.goToState(n(103).ACTIVE_TIMESTAMP, i, t)
                },
                onClickOutsideOfPointer: function(e) {
                    var i = t(e.target);
                    this.disposed || this.getCurrentState() !== n(103).ACTIVE_TIMESTAMP || i.closest(".commentPopover__wrapper,.commentForm").length || (this.goToState(n(103).INITIAL), t("html").off("mousedown", this.onClickOutsideOfPointer))
                },
                onBodyOrAvatarClick: function(e) {
                    if (e.stopPropagation(), this.getCurrentState() !== n(103).ACTIVE_TIMESTAMP) {
                        var t = this.getCurrentComment();
                        a(t, this.sound) && this.goToState(n(103).ACTIVE_TIMESTAMP, t.get("timestamp"), t)
                    }
                },
                onScrubMouseMove: function(e) {
                    var t = this.getTimestampByMouseEvent(e),
                        i = o.call(this, e),
                        r = this.getCurrentState();
                    r !== n(103).ACTIVE_TIMESTAMP && (r !== n(103).CURRENT_COMMENT || this.getCurrentComment() !== i) && (i && this._hovered ? (this.setInteracting(!0), this.goToState(n(103).CURRENT_COMMENT, i.get("timestamp"), i)) : this.goToState(n(103).CURRENT_TIMESTAMP, t))
                },
                onMouseEnter: function() {
                    var e = this;
                    this._hovered || (this._hoverTimeout = window.setTimeout(function() {
                        e._hovered = !0, e._hoverTimeout = null
                    }, s))
                },
                onMouseLeave: function() {
                    this._hoverTimeout && (window.clearTimeout(this._hoverTimeout), this._hoverTimeout = null), this.getCurrentState() !== n(103).ACTIVE_TIMESTAMP && this.goToState(n(103).INITIAL)
                },
                onPlaybackFinish: function() {
                    this.isInteracting() || this.goToState(n(103).INITIAL)
                }
            })
        }).call(t, n(1))
    },
    1949: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend(n(204), {
            template: n(3064),
            css: n(3478),
            className: "deleteCommentForm",
            ModelClass: n(116),
            requiredAttributes: ["user"],
            onSubmit: function(e) {
                var t = e.is_spam,
                    i = e.is_user_spam,
                    r = t && t.checked,
                    o = i && i.checked,
                    a = this.model.get("user");
                r ? this.model.reportAsSpam() : n(75).destroy(this.model), o && n(75).block(a.id, !0, !0, !0).then(function() {
                    return n(56).trigger("user:blocked", {
                        report: !0,
                        userData: a
                    })
                })
            },
            getTemplateData: function(e) {
                e.isMine = n(54).get("me").owns(this.model), e.isSpamLabel = n(50).t("Also report comment as spam.")
            }
        })
    },
    1960: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = this.model,
                i = this.options,
                r = i.resource_id,
                a = i.resource_type,
                s = t.isManagedByFeeds();
            switch (e) {
                case "repost":
                    return o.call(this, n(657), {
                        selectedClass: "sc-button-selected",
                        hasPopups: !1
                    });
                case "addToPlaylist":
                    return o.call(this, n(524), {
                        soundIds: [t.id]
                    });
                case "addToNextUp":
                    return o.call(this, n(652), {
                        resource_id: r,
                        closesDropdown: !0
                    });
                case "startStation":
                    return o.call(this, n(525), {
                        stationType: "track",
                        stationId: t.id,
                        tagName: "button"
                    });
                case "download":
                    return o.call(this, n(523), {
                        className: "moreActions__button sc-button-medium sc-button-icon"
                    });
                case "delete":
                    return o.call(this, n(1914), {
                        disabled: s
                    });
                case "share":
                    return o.call(this, n(412), {
                        resource_id: r
                    });
                case "edit":
                    return o.call(this, n(653), {
                        resource_id: r,
                        resource_type: a,
                        showRestrictedTooltip: !1
                    });
                case "like":
                    return o.call(this, n(341), {
                        resource_id: t.id,
                        resource_type: a,
                        selectedClass: "sc-button-selected"
                    });
                case "goToStats":
                    return o.call(this, n(1467), {
                        permalink: t.getPermalink()
                    });
                default:
                    return null
            }
        }

        function r(e) {
            return "edit" === e || "delete" === e
        }

        function o(e, t) {
            var i = this.options,
                r = i.resource_type,
                o = i.icon_only,
                a = this.model.id;
            return {
                args: n(3).assign({
                    className: "moreActions__button sc-button-medium",
                    size: "medium",
                    resource_id: a,
                    resource_type: r,
                    isScButton: !1,
                    responsive: !1,
                    icon_only: e !== n(225) && o
                }, t),
                View: e
            }
        }
        e.exports = n(53).extend(n(507), n(68).withOptions("moreActions"), {
            ModelClass: n(82),
            defaults: {
                actions: null
            },
            requiredAttributes: ["managed_by_feeds"],
            hasData: function() {
                var e = this.options.actions;
                return this.model.attrExists("user_id") ? !n(54).get("me").owns(this.model) || -1 === e.indexOf("delete") && -1 === e.indexOf("edit") ? !0 : this.model.attrExists("managed_by_feeds") : !1
            },
            getModelData: function() {
                return {}
            },
            getTemplateData: function(e) {
                var t = this,
                    o = n(3).partition(this.options.actions || [], r),
                    a = o[0],
                    s = o[1];
                return {
                    items: [s, a].map(function(e) {
                        return n(3).compact(e.map(i, t))
                    }).filter(function(e) {
                        return e.length
                    })
                }
            }
        })
    },
    1961: function(e, t, n) {
        "use strict";

        function i(e) {
            return function() {
                r({
                    click_name: e,
                    click_attributes: {
                        user_subscription: n(54).get("me").getCreatorSubscriptionIdentifier()
                    }
                })
            }
        }
        var r = n(58).trackV1Click;
        e.exports = n(53).extend({
            template: n(3076),
            css: n(3488),
            className: "editAccessTab",
            ModelClass: n(145),
            defaults: {
                renderGeoblocking: !1
            },
            states: {
                showCopyrightWarning: "m-showCopyrightWarning",
                showFeedableConstraint: "m-showFeedableConstraint",
                showDownloadableConstraint: "m-showDownloadableConstraint"
            },
            renderDecorate: function() {
                var e = n(54).get("me");
                this.toggleState("showFeedableConstraint", !e.canEditRssEnabled(), !0), this.toggleState("showDownloadableConstraint", !e.canEditDownloadable(), !0), this.toggleState("showCopyrightWarning", e.canEditDownloadable(), !0), this.listenTo(this.model, "change:commentable", i("track::change_enable_comments")), this.listenTo(this.model, "change:publicComments", i("track::change_display_comments")), this.listenTo(this.model, "change:stats", i("track::change_display_stats"))
            },
            getTemplateData: function(e) {
                var t = n(54).get("me"),
                    i = "sound-upload-edit" === this.model.resource_type,
                    r = this.options.renderGeoblocking;
                return e.FormClass = n(145), e.hasDomainLocking = !1, e.hasQuietmode = t.getPerk("quietMode"), e.isSound = i, e.hasDownloads = !t.get("downloads_disabled"), e.previousCopyrightIssues = "copyright" === t.get("downloads_disabled_reason"), e.hasGeoblocking = r && t.hasGeoblocking(), e
            }
        })
    },
    1962: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                var t = e.value,
                    n = this.form.getAudible();
                return o(t) && this.form.isEdit && n && n.isPublic()
            }

            function r(e) {
                var t = e.value;
                return o(t) && !a()
            }

            function o(e) {
                return "scheduled" === e
            }

            function a() {
                return n(54).get("me").hasScheduling()
            }
            var s = n(3).assign,
                l = n(76).el,
                u = n(76).subview;
            e.exports = n(151).extend(n(368).withOptions({
                id: "scheduledTracks",
                elSelector: ".radioGroup__labelText[data-scheduled]",
                displayCondition: function() {
                    return !this.form.isEdit
                }
            }), n(100), {
                className: "radioGroup availabilityRadioGroup",
                defaults: {
                    Form: n(145),
                    field: "availability",
                    direction: "vertical",
                    showSublabelsOnSelection: !0,
                    dialogType: "genericProUpsell",
                    dialogSelector: ".radioGroup__labelText"
                },
                css: [n(1646), n(3489)],
                dialogArgs: function() {
                    return {
                        togglerEl: this.$el,
                        subviewArgs: {
                            text: n(50).t("Get a Pro Unlimited subscription to schedule when your tracks go live."),
                            buttonText: n(50).t("Upgrade now"),
                            tcode: "t235"
                        }
                    }
                },
                shouldOpenDialog: function(e) {
                    var n = t(e.target).closest("label").find("input")[0] || {},
                        i = n.disabled,
                        r = n.value;
                    return i && o(r) && !a()
                },
                getButtonsConfig: function() {
                    var e = this,
                        t = n(151).prototype.getButtonsConfig.call(this);
                    return t.filter(function(t) {
                        return !i.call(e, t)
                    }).map(function(e) {
                        return s({
                            disabled: r(e)
                        }, e)
                    })
                },
                template: function() {
                    var e = this.options,
                        t = e.resource_id,
                        i = e.resource_type,
                        r = {
                            resource_id: t,
                            resource_type: i,
                            Form: n(145)
                        },
                        c = s({
                            minDate: 0,
                            defaultDate: 1,
                            field: "scheduledPublicDate",
                            timezoneField: "scheduledTimezone",
                            localDateField: "scheduledPublicLocalDate",
                            oneline: !0
                        }, r),
                        d = s({
                            field: "availability",
                            conditionFn: o,
                            animate: !0,
                            blockContent: u(n(627), c)
                        }, r);
                    return [l("label", {
                        "class": "availabilityRadioGroup__label"
                    }, n(50).t("Privacy:")), n(151).prototype.template.apply(this, arguments), a() && u(n(109), d)].filter(Boolean).join("")
                }
            })
        }).call(t, n(1))
    },
    1963: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend({
            template: n(3078),
            css: n(3491),
            className: "editBasicTab",
            ModelClass: n(145),
            getTemplateData: function(e) {
                var t = this.model,
                    i = "sound-upload-edit" === t.resource_type;
                return e.FormClass = n(145), e.isEdit = t.isEdit, e.isSound = i, e.hasScheduling = n(54).get("me").hasScheduling(), e
            }
        })
    },
    1964: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend(n(115).withOptions({
            type: "pro",
            elSelector: ".fakeMonetizationTab__upsellCta"
        }), {
            css: n(3492),
            template: n(3079),
            className: "fakeMonetizationTab",
            getUpsellRef: function() {
                return "t219"
            },
            getTemplateData: function(e) {
                return e.upsellRef = this.getUpsellRef(), e
            }
        })
    },
    1965: function(e, t, n) {
        "use strict";
        e.exports = n(337).extend({
            defaults: {
                confirmButton: n(50).t("Create an ISRC"),
                confirmText: n(50).t("Are your sure? If you work with a record label or distributor, ask them if they already have ISRCs for your tracks."),
                size: "small",
                onSubmit: function() {}
            },
            onSubmit: function() {
                this.options.onSubmit()
            }
        })
    },
    1966: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend({
            template: n(3083),
            css: [n(3495), n(1255)],
            className: "editMetadataTab metadataGrid",
            ModelClass: n(145),
            getTemplateData: function(e) {
                var t = "sound-upload-edit" === this.model.resource_type,
                    i = n(54).get("me");
                return e.FormClass = n(145), e.hasCustomBuyTitle = i.getPerk("customBuyTitle"), e.hasPublisherMetadata = t, e.buyLinkClassName = e.hasCustomBuyTitle ? "metadataGrid__field-wide" : "metadataGrid__field-full", e.recordLabelClassName = e.hasPublisherMetadata ? "metadataGrid__field-narrow" : "metadataGrid__field-wide", e.showReleaseDate = t, e.iswcFieldHint = n(50).t("The ISWC (International Standard Musical Work Code) is a unique, permanent and internationally recognized reference number for the identification of musical works."), e.plineFieldHint = n(50).t("P-line notice identify the owner of the rights in the original sound recording (the masters) at the time that the CD/carrier/file is manufactured."), e
            }
        })
    },
    1967: function(e, t, n) {
        "use strict";

        function i() {
            this.toggleState("monetizationEnabled", this.model.get("monetizationEnabled"), !0)
        }
        e.exports = n(53).extend({
            template: n(3084),
            className: "monetizationSection",
            defaults: {
                Form: null
            },
            element2selector: {
                showMonetizationEnabled: ".showMonetizationEnabled",
                showMonetizationDisabled: ".showMonetizationDisabled",
                showMonetizationConstraint: ".showMonetizationConstraint"
            },
            states: {
                monetizationEnabled: function(e) {
                    var t = this;
                    this.getElement("showMonetizationEnabled").toggle(e), this.getElement("showMonetizationDisabled").toggle(!e), e || (this.model.set("monetizationStart", !1), this.model.set("monetizationEnd", !1)), e && ! function() {
                        var e = t.explicitRequiredTerritories.get("territories"),
                            i = t.model.get("monetizationRightsholders");
                        if (i && 0 === i.length) {
                            var r = n(89).monetizableCountryCodes().map(function(t) {
                                return n(3).contains(e, t) ? {
                                    territory: t,
                                    rightsholder_urn: null
                                } : {
                                    territory: t
                                }
                            });
                            t.model.set("monetizationRightsholders", r)
                        }
                    }()
                },
                showMonetizationConstraint: function(e) {
                    this.getElement("showMonetizationConstraint").toggle(e)
                }
            },
            setup: function(e) {
                this.model = new e.Form({}, e), this.explicitRequiredTerritories = this.addDataSource(new(n(1455))({
                    id: this.model.get("publisherIsrc")
                }), {
                    requiredAttributes: ["territories"]
                }), this.listenTo(this.model, "change:monetizationEnabled", i)
            },
            getTemplateData: function(e) {
                return e.isTrack = "sound-upload-edit" === e._resource_type, e.isPlaylist = !e.isTrack, e.FormClass = this.options.Form, e
            },
            renderDecorate: function() {
                i.call(this), this.toggleState("showMonetizationConstraint", !n(54).get("me").canEditMonetization(), !0), n(54).get("rollouts").get("cant_monetize_long_content") && this.model.validate({
                    fields: ["monetizationEnabled"]
                })
            }
        })
    },
    1968: function(e, t, n) {
        "use strict";
        var i = n(76).subview;
        e.exports = n(53).extend({
            css: n(3496),
            ModelClass: n(145),
            className: "editMonetizationTab",
            template: function() {
                var e = n(54).get("me"),
                    t = this.options,
                    r = t.resource_id,
                    o = t.resource_type;
                return [i(n(1512), {
                    tagName: "p"
                }), e.hasGeoblocking() && i(n(664), {
                    resource_id: r,
                    resource_type: o
                }), e.hasMonetization() && i(n(1967), {
                    resource_id: r,
                    resource_type: o,
                    Form: n(145)
                })].filter(Boolean).join("")
            }
        })
    },
    1969: function(e, t, n) {
        "use strict";

        function i(e) {
            return function(t) {
                var i = t.territoryId,
                    r = t.rightsholder;
                return n(3).contains(e, i) ? {
                    territory: i,
                    rightsholder_urn: r ? r.value : null
                } : {
                    territory: i
                }
            }
        }

        function r(e, t) {
            var n = t.availableTerritories();
            return e.forEach(function(e) {
                var t = e.territoryId;
                delete n[t]
            }), n
        }

        function o(e) {
            var t = n(3).partition(e, function(e) {
                    var t = e.territoryId;
                    return -1 !== s.indexOf(t)
                }),
                i = t[0],
                r = t[1],
                o = a(i),
                l = a(r),
                u = l.slice(0, Math.ceil(l.length / 2)),
                c = l.slice(Math.ceil(l.length / 2));
            return [o, u, c]
        }

        function a(e) {
            return n(3).sortBy(e, function(e) {
                var t = e.territoryId;
                return n(89).codeToCountry(t) || t
            })
        }
        var s = n(3).intersection(["US", "IE", "GB", "FR", "CA", "NZ", "AU", "DE", "NL"], n(89).monetizableCountryCodes());
        e.exports = n(53).extend(n(117), {
            className: "monetizationTerritories",
            template: n(3085),
            css: n(3497),
            bubbleEvents: {
                territoryDelete: "onSubviewTerritoryDelete",
                territoryChange: "onSubviewTerritoryChange"
            },
            element2selector: {
                validationMessage: ".monetizationTerritories__validationMessage"
            },
            defaults: {
                publisherIsrc: null
            },
            states: {
                invalid: "m-invalid"
            },
            explicitRequiredTerritories: null,
            collection: null,
            setup: function(e) {
                var t = e.publisherIsrc;
                this.explicitRequiredTerritories = this.addDataSource(new(n(1455))({
                    id: t
                }), {
                    requiredAttributes: ["territories"]
                })
            },
            getTemplateData: function() {
                var e = this.collection,
                    t = this.getFieldValue(),
                    i = this.explicitRequiredTerritories.get("territories"),
                    a = r(t, e);
                return {
                    canAddTerritory: !n(3).isEmpty(a),
                    monetizationTerritories: o(t),
                    remainingTerritories: a,
                    explicitRequiredTerritories: i,
                    userRightsholders: e.availableTerritories()
                }
            },
            onSubviewTerritoryDelete: function(e) {
                var t = e.data,
                    r = n(3).chain(this.getFieldValue()).reject(function(e) {
                        var n = e.territoryId;
                        return t.territoryId === n
                    }).map(i(this.explicitRequiredTerritories.get("territories"))).value();
                this.setFieldValue(r)
            },
            onSubviewTerritoryChange: function(e) {
                var t = e.data,
                    r = t.territoryId,
                    o = this.getFieldValue(),
                    a = n(3).findIndex(o, function(e) {
                        return e.territoryId === r
                    });
                a >= 0 ? o.splice(a, 1, t) : o.push(t), this.setFieldValue(o.map(i(this.explicitRequiredTerritories.get("territories")))), this.resetOwnValidation(), this.focus()
            },
            focus: function() {
                this.$("select").focus()
            },
            onFieldChange: function() {
                this.rerender()
            },
            getFieldValue: function() {
                var e = this.form.get(this.field) || [],
                    t = this.collection.availableTerritories();
                return e.filter(function(e) {
                    var n = e.territory;
                    return t[n]
                }).map(function(e) {
                    var n = e.territory,
                        i = e.rightsholder_urn,
                        r = i ? {
                            value: i,
                            label: t[n][i]
                        } : null;
                    return {
                        territoryId: n,
                        rightsholder: r
                    }
                })
            },
            onValidationChange: function(e) {
                var t = !e.isValid;
                this.getElement("validationMessage").html(t ? e.message.toString() : ""), this.toggleState("invalid", t)
            }
        })
    },
    1976: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend({
            template: n(3092),
            css: n(3504),
            className: "editPlaylistBasicTab",
            ModelClass: n(207),
            getTemplateData: function(e) {
                return e.FormClass = n(207), e
            }
        })
    },
    1977: function(e, t, n) {
        "use strict";

        function i() {
            var e = this.model.get("errorMessage");
            this.getElement("errorMessage").text(e), this.toggleState("showProgress", e && e.toString().length > 0)
        }
        e.exports = n(53).extend(n(68).withOptions("playlistEdit"), {
            template: n(3093),
            loadingTemplate: n(1165),
            css: [n(1254), n(1644)],
            element2selector: {
                progress: ".audibleEditForm__progress",
                errorMessage: ".playlistEditForm__error"
            },
            states: {
                showProgress: function(e) {
                    this.getElement("progress").toggle(e), n(3).defer(this.$el.toggleClass.bind(this.$el, "showProgress", e))
                }
            },
            className: "playlistEditForm audibleEditForm",
            setup: function(e) {
                this.model = new(n(207))({}, {
                    resource_id: e.resource_id
                }), this.listenTo(this.model, "change:errorMessage", i)
            },
            getTemplateData: function(e) {
                return e.PlaylistEdit = n(207), e.playlist = this.model.getAudible(), e
            },
            renderDecorate: function() {
                i.call(this)
            }
        })
    },
    1978: function(e, t, n) {
        "use strict";
        var i = 20;
        e.exports = n(73).extend(n(117), n(506), n(511), {
            className: "editTrackList g-all-transitions-300",
            listClassName: "editTrackList__list sc-clearfix sc-list-nostyle",
            itemClassName: "editTrackList__item sc-border-light-bottom",
            Subview: n(1981),
            css: n(3505),
            template: n(3094),
            defaults: {
                maxDisplay: 0,
                resource_id: null
            },
            editableObject: null,
            listSelector: ".editTrackList__list",
            listItemSelector: ".editTrackList__item",
            dragHandleSelector: ".editTrackItem__content",
            hasDifferentCreators: null,
            playlistModel: null,
            bubbleEvents: {
                "click:remove": "onRemoveSoundClick"
            },
            states: {
                longPlaylist: "m-long-playlist"
            },
            element2selector: {
                listContainer: ".editTrackList__container"
            },
            setup: function(e) {
                this.playlistModel = this.form._playlist, this.collection = this.editableObject = this.getFieldValue(), this.playlistModel.hold(), this.enableSorting = n(3).throttle(this.enableSorting.bind(this), 300)
            },
            dispose: function() {
                var e = this;
                this.collection.each(function(t) {
                    t.off("change", e.enableSorting)
                }), this.playlistModel.release()
            },
            getModelsToRender: function() {
                return this.hasDifferentCreators = !!this.playlistModel.hasDifferentCreators(), this.collection.models
            },
            renderDecorate: function() {
                var e = this;
                n(73).prototype.renderDecorate.call(this), this.toggleState("longPlaylist", this.collection.length > i), this.enterEditingState(), this.collection.each(function(t) {
                    t.on("change", e.enableSorting)
                }), this.enableSorting()
            },
            getListContainer: function() {
                return this.getElement("listContainer")
            },
            onSortingUpdate: function(e, t) {
                this.markDirty()
            },
            onFieldChange: n(3).noop,
            onRemoveSoundClick: function(e) {
                var t = e.data.id;
                this.collection.remove(t), this.markDirty(), e.stopPropagation()
            },
            getTemplateData: function(e) {
                return e = n(73).prototype.getTemplateData.call(this, e) || e, e.Form = this.form.constructor, e.formResourceId = this.form.resource_id, e
            },
            getSubviewArgs: function(e) {
                return n(3).assign(n(73).prototype.getSubviewArgs.apply(this, arguments), {
                    resource_id: e.resource_id,
                    show_user: this.hasDifferentCreators
                })
            },
            getQueueSource: function() {
                return null
            }
        })
    },
    1979: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend({
            template: n(3095),
            css: n(1255),
            className: "editPlaylistMetadataTab metadataGrid",
            ModelClass: n(207),
            getTemplateData: function(e) {
                var t = n(54).get("me");
                return e.FormClass = n(207), e.hasCustomBuyTitle = t.getPerk("customBuyTitle"), e.buyLinkClassName = e.hasCustomBuyTitle ? "metadataGrid__field-wide" : "metadataGrid__field-full", e
            }
        })
    },
    1980: function(e, t, n) {
        "use strict";
        e.exports = n(400).extend(n(1435), {
            ModelClass: n(207),
            defaults: {
                large: !0,
                tabs: [{
                    name: n(50).t("Basic info"),
                    subview: n(1976)
                }, {
                    name: n(50).t("Tracks"),
                    subview: n(1982)
                }, {
                    name: n(50).t("Metadata"),
                    subview: n(1979)
                }]
            },
            className: "playlistEditTabs",
            css: [n(1246), n(3506)]
        })
    },
    1981: function(e, t, n) {
        "use strict";

        function i(e) {
            this.toggleState("hover", "mouseenter" === e.type)
        }

        function r(e) {
            this.toggleState("dragging", "mousedown" === e.type)
        }

        function o() {
            this.toggleState("active", this.model.isPlaying())
        }

        function a(e) {
            this.bubble("click:remove", {
                id: this.model.id
            })
        }
        e.exports = n(53).extend(n(68).withOptions("playlistTrackItem"), {
            template: n(3096),
            css: n(3507),
            className: "editTrackItem sc-type-small",
            ModelClass: n(67),
            requiredAttributes: ["permalink", "user", "duration"],
            defaults: {
                show_user: !0
            },
            states: {
                hover: function(e) {
                    (e || !this.getState("removing")) && this.$el.toggleClass("hover", e)
                },
                active: "m-active",
                removing: "m-removing",
                dragging: "m-dragging"
            },
            events: {
                "click .editTrackItem__remove": a,
                mouseenter: i,
                mouseleave: i,
                "mouseleave .editTrackItem__content": r,
                "mousedown .editTrackItem__content": r,
                "mouseup .editTrackItem__content": r
            },
            loadingTemplate: function() {
                return '<img width="30" height="30" style="padding: 7px 0">'
            },
            initialize: function() {
                var e = {};
                e[n(241).TOGGLE] = "onOverlayButtonToggle", this.bubbleEvents = n(3).assign(this.bubbleEvents || {}, e), n(53).prototype.initialize.apply(this, arguments)
            },
            setup: function(e) {
                this.listenTo(this.model, "play pause", o)
            },
            renderDecorate: function() {
                o.call(this)
            },
            getTemplateData: function(e) {
                var t = this.model,
                    i = t.playlist,
                    r = n(50).dateTimeHelper.timecode(e.duration),
                    o = n(50).t("Duration: [[duration]]", {
                        duration: n(50).dateTimeHelper.timecode(e.duration, {
                            inWords: !0
                        })
                    });
                return n(3).assign(e, {
                    duration: r,
                    durationInWords: o,
                    playlistId: i && i.id
                })
            },
            onOverlayButtonToggle: function(e) {
                if (e.data.$el.closest(".editTrackItem").is(this.el)) {
                    var t = e.data.isOpened;
                    this.toggleState("removing", t).toggleState("hover", t, !0)
                }
            }
        })
    },
    1982: function(e, t, n) {
        "use strict";
        e.exports = n(53).extend({
            template: n(3097),
            className: "editPlaylistTracklistTab",
            getTemplateData: function(e) {
                return e.Form = n(207), e.formResourceId = this.options.resource_id, e
            }
        })
    },
    1983: function(e, t, n) {
        "use strict";

        function i() {
            this.toggleState("showProgress", !!this.model.get("fileUpload"))
        }
        e.exports = n(53).extend(n(68).withOptions("trackEdit"), n(100), {
            template: n(3100),
            loadingTemplate: n(1165),
            css: n(1254),
            className: "soundEditForm audibleEditForm",
            element2selector: {
                progress: ".audibleEditForm__progress"
            },
            states: {
                showProgress: function(e) {
                    this.getElement("progress").toggle(e), n(3).defer(this.$el.toggleClass.bind(this.$el, "showProgress", e))
                }
            },
            defaults: {
                dialogType: "genericProUpsell",
                dialogSelector: ".audibleEditForm__replaceUpsell",
                activeTabIndex: 0
            },
            dialogArgs: function() {
                var e = this.options.dialogSelector;
                return {
                    togglerEl: this.$(e),
                    subviewArgs: {
                        text: n(50).t("Update the master file of your track, but keep all your plays, likes and comments. Get a Pro subscription today to try it."),
                        buttonText: n(50).t("Learn more"),
                        tcode: "t49"
                    }
                }
            },
            setup: function(e) {
                var t = n(54).get("me");
                this.model = new(n(168))({}, n(3).pick(e, "resource_id")), e.dialogEnabled = !t.getPerk("fileReplace"), this.addDataSource(t, {
                    requiredAttributes: ["default_tracks_feedable", "cpp", "downloads_disabled", "default_license"]
                }).hold(), this.listenTo(this.model, "change:fileUpload", i)
            },
            renderDecorate: function() {
                i.call(this)
            },
            getTemplateData: function(e) {
                var t = n(54).get("me");
                return e.SoundUploadEdit = n(168), e.showUpsell = !t.getPerk("fileReplace"), e.showDownload = t.getPerk("fileReplace"), e.sound = this.model.getAudible(), e.hasRightsholderMonetization = t.hasMonetization() && t.hasCPPRightsholder(), e.links = {
                    copyright: "/pages/copyright",
                    faqs: "http://copyright.help.soundcloud.com/",
                    termsOfUse: "/terms-of-use"
                }, e
            }
        })
    },
    1991: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = {
                more: ["header", "more"],
                profile: ["header", "you_main"],
                activities: ["header", "activity", "main"],
                messages: ["header", "messages", "main"]
            } [e];
            t && r(t)
        }
        var r = n(58).trackV0Click;
        e.exports = n(99).extend({
            defaults: {
                overlayType: "dropdown",
                dropdownKey: null,
                isScButton: !1
            },
            onOverlayToggle: function(e) {
                var t = this.getOverlay().getContentView();
                e && i(this.options.dropdownKey), this.$el.toggleClass("selected", e), t && t.collection && t.collection instanceof n(385) && (t.options.markNotificationsRead = e, e && t.collection.markAsRead())
            }
        })
    },
    1992: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                var e = n(65).getQueryParam("redirect_url"),
                    i = n(54).get("router").getRouteInfoFromUrl(e),
                    r = i && i.meta.feature;
                return "collection" === r ? this.getElement("menu-collection") : "stream" === r ? this.getElement("menu-stream") : t()
            }

            function r() {
                var e = n(54).get("me"),
                    t = e.getNumTracks();
                return !e.isPremium() && t >= 1 && !this.uploadManager.length
            }

            function o() {
                var e = n(54).get("me");
                return !(!e.id || e.getCreatorPlan() !== c || e.getConsumerPlan() !== d || 0 !== e.getNumTracks())
            }

            function a() {
                var e = this;
                o() && n(84).fetchProductsByCategory(n(84).idToCategory(u)).then(function(t) {
                    var i = t.body.plans,
                        r = n(3).findWhere(i, {
                            id: n(84).idToApiId(u)
                        });
                    r && (e._showGoUpsell = !0, e.rerender())
                })
            }

            function s(e) {
                var t = "premium" === e.layoutName || "consumer-premium" === e.layoutName;
                this.layoutInfo = e, this.toggleState("navigationTrap", t), this.toggleState("show", !0), this.getElement("main-menu-links").removeClass("selected"), this.getMenuLinkForCurrentLayout().addClass("selected")
            }
            var l = n(77).productIds,
                u = l.CONSUMER_SUBSCRIPTION_HIGH_TIER,
                c = l.CREATOR_SUBSCRIPTION_FREE,
                d = l.CONSUMER_SUBSCRIPTION_FREE,
                p = {
                    messages: {
                        View: n(2033),
                        opts: {
                            width: 360,
                            relativeElementAnchor: "right bottom",
                            anchor: "right top",
                            offset: "46 0",
                            zIndexLevel: "header-menu"
                        }
                    },
                    activities: {
                        View: n(1904),
                        opts: {
                            width: 360,
                            relativeElementAnchor: "right bottom",
                            anchor: "right top",
                            offset: "92 0",
                            zIndexLevel: "header-menu"
                        }
                    },
                    profile: {
                        View: n(1995),
                        opts: {
                            width: 135,
                            relativeElementAnchor: "left bottom",
                            anchor: "left top",
                            zIndexLevel: "header-menu"
                        }
                    },
                    more: {
                        View: n(1993),
                        opts: {
                            width: 170,
                            relativeElementAnchor: "right bottom",
                            anchor: "right top",
                            offset: "1 0",
                            zIndexLevel: "header-menu"
                        }
                    }
                };
            e.exports = n(53).extend(n(68).withOptions("header"), n(115).withOptions({
                elSelector: ".header__proUpsell",
                type: "pro"
            }), {
                tagName: "header",
                className: "header sc-selection-disabled fixed g-dark g-z-index-header",
                attributes: {
                    role: "banner"
                },
                css: n(3518),
                template: n(3110),
                element2selector: {
                    "header-inner": ".header__inner",
                    "main-menu-links": ".header__navMenuItem",
                    "menu-home": '.header__navMenuItem[data-menu-name="home"]',
                    "menu-stream": '.header__navMenuItem[data-menu-name="stream"]',
                    "menu-collection": '.header__navMenuItem[data-menu-name="library"]',
                    "menu-charts": '.header__navMenuItem[data-menu-name="charts"]',
                    activitiesButton: ".header__userNavActivitiesButton",
                    messagesButton: ".header__userNavMessagesButton",
                    profileButton: ".header__userNavUsernameButton",
                    moreButton: ".header__moreButton"
                },
                states: {
                    show: "show",
                    navigationTrap: "m-navigationTrap"
                },
                _showGoUpsell: !1,
                setup: function() {
                    var e = this,
                        t = ["id", "avatar_url", "permalink"];
                    this.uploadManager = new(n(267)), this.listenTo(n(56), "layout:change", function(t) {
                        s.call(e, t)
                    }).listenTo(n(54).get("me"), "change:" + t.join(" change:"), this._onModelChange), n(61).isLoggedIn() ? a.call(this) : this.listenToOnce(n(56), "connect:hasUserData", function() {
                        a.call(e), s.call(e, n(54).get("router").getLayoutInfo())
                    })
                },
                renderDecorate: function() {
                    n(3).each(p, function(e, t) {
                        var i = this.getElement(t + "Button");
                        i[0] && !this.subviews[t] && this.addSubview(new(n(1991))({
                            el: i,
                            dropdownKey: t,
                            overlayOptions: e.opts,
                            ContentViewClass: e.View
                        }), t)
                    }, this)
                },
                getUpsellRef: function() {
                    return "t099"
                },
                getTemplateData: function() {
                    var e = n(54).get("me");
                    return {
                        user: e.toJSON(),
                        loggedIn: n(61).isLoggedIn(),
                        showProUpsell: r.call(this),
                        showGoUpsell: this._showGoUpsell,
                        upsellRef: this.getUpsellRef()
                    }
                },
                getMenuLinkForCurrentLayout: function() {
                    switch ((this.layoutInfo || {}).layoutName) {
                        case "discover":
                            return this.getElement("menu-home");
                        case "stream":
                            return this.getElement("menu-stream");
                        case "collection":
                            return this.getElement("menu-collection");
                        case "signin":
                            return i.call(this);
                        default:
                            return t()
                    }
                }
            })
        }).call(t, n(1))
    },
    1993: function(e, t, n) {
        "use strict";
        var i = n(77).productIds,
            r = i.CONSUMER_SUBSCRIPTION_HIGH_TIER,
            o = i.CONSUMER_SUBSCRIPTION_FREE;
        e.exports = n(53).extend(n(68).withOptions("moreDropdown"), n(603), n(115).withOptions({
            type: "pro",
            elSelector: ".moreMenu__proUpsell"
        }), {
            template: n(3111),
            css: n(3519),
            className: "moreMenu g-dark g-dark-bg",
            events: {
                "click .moreMenu__keyboard": "onKeyboardShortcutsClick"
            },
            requiredAttributes: ["active"],
            setup: function() {
                this.model = new(n(84))({
                    id: r
                })
            },
            onKeyboardShortcutsClick: function(e) {
                e.preventDefault(), n(56).trigger("keyboard-shortcuts:toggle")
            },
            getUpsellRef: function() {
                return "t132"
            },
            getTemplateData: function(e) {
                var t = n(61).isLoggedIn(),
                    i = n(54).get("me"),
                    r = this.model.isActive();
                return e.consumerUpsell = n(50).t("Get SoundCloud Go+"), e.isInvitedToOscp = this.isInvited(), e.isLoggedIn = t, e.upsellRef = this.getUpsellRef(), e.showProUpsell = !t && !r, e.showGoUpsell = t && r && i.getConsumerPlan() === o, e
            }
        })
    },
    1994: function(e, t, n) {
        "use strict";
        var i = n(191).shouldShowUpsells;
        e.exports = n(53).extend(n(115).withOptions({
            type: "pro"
        }), {
            tagName: "a",
            defaults: {
                isInvitedToOscp: !1
            },
            states: {
                highlight: "m-highlight"
            },
            setup: function(e) {
                var t = e.isInvitedToOscp;
                this.$el.attr("href", n(59).getRoute("premier", null, !t && this.getUpsellRef()))
            },
            renderDecorate: function() {
                this.toggleState("highlight", i())
            },
            shouldTrackImpression: function() {
                return i()
            },
            shouldTrackUpsellClick: function() {
                return i()
            },
            getUpsellRef: function() {
                return "t220"
            },
            template: function() {
                return this.options.isInvitedToOscp ? n(50).t("SoundCloud Premier") : n(50).t("SoundCloud Premier monetization")
            }
        })
    },
    1995: function(e, t, n) {
        "use strict";

        function i() {
            return !n(54).get("me").isPremium()
        }

        function r() {
            return n(54).get("me").getNumTracks() > 0
        }

        function o() {
            return r() ? "t061" : "t148"
        }

        function a() {
            var e = n(54).get("rollouts");
            return e.get("can_see_earnings_dashboard") && e.get("v2_can_see_earnings")
        }
        e.exports = n(53).extend(n(68).withOptions("profileDropdown"), n(115).withOptions({
            type: "pro",
            elSelector: ".profileMenu__premium"
        }), {
            template: n(3113),
            css: n(3521),
            className: "profileMenu g-dark",
            getUpsellRef: o,
            getTemplateData: function() {
                var e = n(54).get("me");
                return {
                    user: e.toJSON(),
                    showUpsell: i(),
                    ref: o(),
                    showLikes: !0,
                    showSets: e.hasPlaylists(),
                    showStats: r(),
                    showFollowing: e.hasFollowings(),
                    canSeeEarnings: a()
                }
            }
        })
    },
    2016: function(e, t, n) {
        "use strict";

        function i() {
            this.bubble("overlay:close")
        }
        e.exports = n(53).extend({
            className: "localeSelectorContent",
            css: n(3546),
            template: n(3139),
            events: {
                "click .localeSelector__cancel": i
            },
            renderDecorate: function() {
                this.whenInserted().done(function() {
                    n(1669).init({
                        selector: ".localeSelectorContent__wrapper",
                        host: "https://soundcloud.com"
                    })
                })
            }
        })
    },
    2017: function(e, t, n) {
        "use strict";
        e.exports = n(99).extend({
            tagName: "a",
            className: "localeSelector sc-pointer",
            defaults: {
                overlayType: "modal",
                ContentViewClass: n(2016),
                fixOverflow: !1,
                isScButton: !1,
                hasActiveState: !1,
                overlayOptions: {
                    width: 550,
                    transparentBackground: !0
                }
            },
            template: function() {
                return n(50).t('Language: <span class="sc-text">[[locale]]</span>', {
                    locale: n(50).getCurrentLanguage()
                })
            }
        })
    },
    2386: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".audibleTilePlaceholder{position:relative;width:100%;padding-bottom:78px}.audibleTilePlaceholder:before{display:block;content:' ';height:0;padding-top:100%;border:1px solid #ccc}", ""])
    },
    2388: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".badgeList{margin-right:-20px}.badgeList__item{box-sizing:border-box;padding-right:20px;width:16.666%;float:left}.badgeList.m-oneRow>.loading{padding:8.333% 0}.badgeList.m-twoRows>.loading{padding:16.666% 0}", ""])
    },
    2389: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".blockCheckbox{height:100%;color:#666;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.blockCheckbox:not(.m-disabled) label{cursor:pointer}.blockCheckbox.m-checked .showUnchecked,.blockCheckbox:not(.m-checked) .showChecked,.blockCheckbox.m-indeterminate .showChecked,.blockCheckbox.m-indeterminate .showUnchecked,.blockCheckbox:not(.m-indeterminate) .showIndeterminate{display:none}.blockCheckbox__label{display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%}.blockCheckbox__checkbox{display:block;margin-right:10px}.blockCheckbox__content{-webkit-flex:1;-ms-flex:1;flex:1}.blockCheckbox__title{display:block;color:#333;margin-bottom:7px}.blockCheckbox__icon{background:url(" + n(1599) + ") no-repeat 0 0;background-size:26px 156px;width:26px;height:26px;margin:2px 0 0 2px;border-radius:50%}.blockCheckbox:not(.m-disabled):not(.m-checked):not(.m-indeterminate):hover .blockCheckbox__icon{background-position:0 -26px}.blockCheckbox.m-checked .blockCheckbox__icon{background-position:0 -52px}.blockCheckbox.m-indeterminate .blockCheckbox__icon{background-position:0 -78px}.blockCheckbox.m-checked.m-disabled .blockCheckbox__icon{background-position:0 -104px}.blockCheckbox.m-indeterminate.m-disabled .blockCheckbox__icon{background-position:0 -130px}.blockCheckbox.m-focused .blockCheckbox__icon{box-shadow:0 0 2px #f50}.blockCheckbox__contentParagraph{margin-bottom:7px}.blockCheckbox__warning{color:#f50}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:2dppx),(min-resolution:192dpi){.blockCheckbox__icon{background-image:url(" + n(2951) + ")}}", ""])
    },
    2390: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".compactTrackListItem{display:block;position:relative;color:#999;line-height:30px;height:30px;padding-left:5px;outline:0;display:-webkit-flex;display:-ms-flexbox;display:flex}.compactTrackListItem:not(.m-disabled).clickToPlay{cursor:pointer}.compactTrackListItem.clickToPlay.active,.compactTrackListItem.clickToPlay:hover,.compactTrackListItem.clickToPlay:focus{background-color:#f2f2f2;color:#999}.compactTrackListItem.active,.compactTrackListItem.active .compactTrackListItem__number,.compactTrackListItem.active .compactTrackListItem__content,.compactTrackListItem.active .compactTrackListItem__trackTitle,.compactTrackListItem.active .compactTrackListItem__user,.compactTrackListItem.active .compactTrackListItem__plays{color:#f50}.compactTrackListItem__content{-webkit-flex:1;-ms-flex:1;flex:1;color:#333}.compactTrackListItem__user{color:#999}.compactTrackListItem__image{margin:5px 5px 0 0}.compactTrackListItem__number{margin-right:5px}.compactTrackListItem__number,.compactTrackListItem__trackTitle{color:#333}.compactTrackListItem.m-disabled .compactTrackListItem__number,.compactTrackListItem.m-disabled .compactTrackListItem__trackTitle,.compactTrackListItem.m-disabled .compactTrackListItem__content{color:#ccc}.compactTrackListItem__additional{font-size:10px;padding:0 5px 0 12px}.compactTrackListItem__tierIndicator{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;position:relative}.compactTrackListItem__previewIndicator{line-height:1.2}.compactTrackListItem__plays{margin-left:5px;float:right}.compactTrackListItem__remove{margin-left:5px}.compactTrackListItem.clickToPlay.active .compactTrackListItem__additional,.compactTrackListItem.clickToPlay:hover .compactTrackListItem__additional,.compactTrackListItem.clickToPlay:focus .compactTrackListItem__additional{background:#f2f2f2;background:linear-gradient(to right,rgba(242,242,242,.1),#f2f2f2 17px)}", ""])
    },
    2391: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".confirmableForm__actions{margin-top:5px}.confirmableForm__actions>.sc-button{float:right;margin-left:5px}", ""])
    },
    2393: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".dialog{position:absolute;top:0;left:0;padding:10px;border:1px solid #ccc;background:#fff;box-shadow:0 2px 7px -1px rgba(0,0,0,.4)}.dialog.rounded{border-radius:4px}.dialog.roundedBottom{border-radius:0 0 4px 4px}.dialog.smallText{font-size:11px;padding:8px}.dialog__actions{margin-top:15px;text-align:right}.dialog__arrow{background:#fff;border:1px solid #ccc;border-width:1px 0 0 1px;position:absolute;width:8px;height:8px;box-shadow:-1px -1px 1px -1px rgba(0,0,0,.5);z-index:-1}.dialog__centertop .dialog__arrow,.dialog__righttop .dialog__arrow,.dialog__lefttop .dialog__arrow,.ui-flipped-bottom.dialog__centerbottom .dialog__arrow,.ui-flipped-bottom.dialog__leftbottom .dialog__arrow,.ui-flipped-bottom.dialog__rightbottom .dialog__arrow{-webkit-transform:rotate(45deg);transform:rotate(45deg);top:-5px;bottom:auto}.dialog__centerbottom .dialog__arrow,.dialog__rightbottom .dialog__arrow,.dialog__leftbottom .dialog__arrow,.ui-flipped-top.dialog__centertop .dialog__arrow,.ui-flipped-top.dialog__lefttop .dialog__arrow,.ui-flipped-top.dialog__righttop .dialog__arrow{-webkit-transform:rotate(225deg);transform:rotate(225deg);bottom:-5px;top:auto}.dialog__centertop .dialog__arrow,.dialog__centerbottom .dialog__arrow{left:50%;margin-left:-4px}.dialog__righttop .dialog__arrow,.dialog__rightbottom .dialog__arrow,.ui-flipped-left.dialog__lefttop .dialog__arrow,.ui-flipped-left.dialog__leftbottom .dialog__arrow{right:12px;left:auto}.dialog__lefttop .dialog__arrow,.dialog__leftbottom .dialog__arrow,.ui-flipped-right.dialog__righttop .dialog__arrow,.ui-flipped-right.dialog__rightbottom .dialog__arrow{left:12px;right:auto}.dialog__leftcenter .dialog__arrow{-webkit-transform:rotate(315deg);transform:rotate(315deg);left:-5px;top:50%;bottom:auto}.ui-flipped-left.dialog__leftcenter .dialog__arrow{-webkit-transform:rotate(45deg);transform:rotate(45deg);right:-5px;left:auto}", ""])
    },
    2394: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".dropbar{position:fixed;top:46px;width:1240px;z-index:500;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);transition:-webkit-transform .3s,visibility .3s;transition:transform .3s,visibility .3s;visibility:hidden}.dropbar.m-insideContent{margin-left:-30px}.dropbar.m-active{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);visibility:visible}.dropbar__content{background-color:#fff;padding:0 30px}@media (max-width:1239px){.dropbar{width:1080px}}@media (max-width:1079px){.dropbar{width:960px}.dropbar.m-insideContent{margin-left:-20px}.dropbar__content{padding:0 20px}}", ""])
    },
    2395: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, '.emptyNetworkPage{text-align:center;padding-bottom:120px}.emptyNetworkPage.small{padding-bottom:100px}.emptyNetworkPage__image{display:inline-block;background-repeat:no-repeat;background-position:50% 50%;width:240px}.emptyNetworkPage__headline{margin-top:14px}.emptyNetworkPage.small .emptyNetworkPage__headline{font-size:16px}.emptyNetworkPage__subheadline,.emptyNetworkPage__link{margin-top:8px}.emptyNetworkPage.small .emptyNetworkPage__link{margin-top:2px;font-size:12px;font-family:"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Garuda,Verdana,Tahoma,sans-serif}.emptyNetworkPage__button{margin-top:12px}.emptyNetworkPage.emptyLikes,.emptyNetworkPage.emptyApps{padding-top:113px}.emptyNetworkPage.emptyStations,.emptyNetworkPage.emptyHistory{padding-top:80px}.emptyNetworkPage.emptyStream{padding-top:39px}.emptyNetworkPage.emptyTracks,.emptyNetworkPage.emptyAlbums,.emptyNetworkPage.emptySets,.emptyNetworkPage.emptyReposts{padding-top:50px}.emptyNetworkPage.emptyUsers{padding-top:103px}.emptyNetworkPage.emptyComments{padding:40px 0}.emptyNetworkPage.emptyTracks.emptyPlaylistTracks{padding:70px 0}.emptyNetworkPage.emptyAlbums .emptyNetworkPage__image{background-image:url(' + n(1585) + ");background-size:240px 167px;height:167px}.emptyNetworkPage.emptyLikes .emptyNetworkPage__image{background-image:url(" + n(2849) + ");background-size:240px 167px;height:167px}.emptyNetworkPage.emptyApps .emptyNetworkPage__image,.emptyNetworkPage.emptySets .emptyNetworkPage__image{background-image:url(" + n(1585) + ");background-size:240px 167px;height:167px}.emptyNetworkPage.emptyUsers .emptyNetworkPage__image{background-image:url(" + n(2845) + ");background-size:240px 177px;height:177px}.emptyNetworkPage.emptyTracks .emptyNetworkPage__image{background-image:url(" + n(1586) + ");background-size:240px 167px;height:167px}.emptyNetworkPage.emptyReposts .emptyNetworkPage__image{background-image:url(" + n(2852) + ");background-size:240px 167px;height:167px}.emptyNetworkPage.emptyStream .emptyNetworkPage__image{background-image:url(" + n(2854) + ");background-size:240px 178px;height:178px}.emptyNetworkPage.emptyComments .emptyNetworkPage__image{background-image:url(" + n(2843) + ");background-size:194px 195px;height:195px}.emptyNetworkPage.emptyHistory .emptyNetworkPage__image{background-image:url(" + n(2847) + ");background-size:200px 200px;height:200px}.emptyNetworkPage.emptyStations .emptyNetworkPage__image{background-image:url(" + n(3811) + ");background-size:200px 200px;height:200px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi),(min-resolution:2dppx){.emptyNetworkPage.emptyLikes .emptyNetworkPage__image{background-image:url(" + n(2850) + ")}.emptyNetworkPage.emptyAlbums .emptyNetworkPage__image,.emptyNetworkPage.emptyApps .emptyNetworkPage__image,.emptyNetworkPage.emptySets .emptyNetworkPage__image{background-image:url(" + n(2851) + ")}.emptyNetworkPage.emptyUsers .emptyNetworkPage__image{background-image:url(" + n(2846) + ")}.emptyNetworkPage.emptyTracks .emptyNetworkPage__image{background-image:url(" + n(1587) + ")}.emptyNetworkPage.emptyReposts .emptyNetworkPage__image{background-image:url(" + n(2853) + ")}.emptyNetworkPage.emptyStream .emptyNetworkPage__image{background-image:url(" + n(2855) + ")}.emptyNetworkPage.emptyComments .emptyNetworkPage__image{background-image:url(" + n(2844) + ")}.emptyNetworkPage.emptyHistory .emptyNetworkPage__image{background-image:url(" + n(2848) + ")}}", ""])
    },
    2396: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, '.paging-eof{clear:both;position:relative;top:-1px;height:14px;margin:45px 0 0 0}.paging-eof:before{content:"";display:block;width:100%;height:14px;position:absolute;left:0;top:-9px;background:url(' + n(2939) + ") center center no-repeat}", ""])
    },
    2399: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".checkboxControl{margin-top:6px;margin-bottom:6px}.checkboxControl.invalid .sc-checkbox-check{border-color:#f50}.checkboxControl.m-block>.checkbox{display:block;margin-bottom:7px;display:-webkit-flex;display:-ms-flexbox;display:flex}.checkboxControl.m-block .sc-checkbox-check{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0}.checkboxControl.m-block .sc-checkbox-label{-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;line-height:1.4;margin-top:-.2em;margin-left:.8em}.checkboxControl.m-disabled .sc-checkbox-label{color:#999}", ""])
    },
    2401: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".comboBoxList{max-height:218px;width:100%;overflow:hidden;background-color:#fff;border:1px solid #999;border-top-width:0;border-radius:0 0 4px 4px;box-shadow:0 3px 10px -3px rgba(0,0,0,.1)}.ui-flipped-top .comboBoxList{border-radius:4px 4px 0 0;border-top-width:1px;border-bottom:0;box-shadow:none}.comboBoxList__item{padding:4px 8px;min-height:19px}.comboBoxList__item.selected{background-color:#f2f2f2}", ""])
    },
    2403: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".countries__territory{line-height:22px;position:relative}.countries__remove{display:none;position:absolute;right:0;top:3px}.countries__exceptions{margin:10px 0;padding-top:10px}.countries__territories{margin:10px 0;list-style:none}.countries.touch .countries__title,.countries__territory:hover .countries__title{margin-right:20px}.countries.touch .countries__remove,.countries__territory:hover .countries__remove{display:block}", ""])
    },
    2404: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".textfield.datefield .textfield__input{background:url(" + n(1647) + ") no-repeat right 8px center}", ""])
    },
    2405: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".datetime__fields{max-width:215px}.datetime__dateandtime .datefield,.datetime__dateandtime .time,.datetime__dateandtime .datetime__at{display:table-cell}.datetime__at{padding:4px;color:#666}.datetime__dateandtime .time .textfield__input{width:4.5em}.dateTime.m-oneline .datetime__fields{max-width:none;display:block}.dateTime.m-oneline .datetime__dateandtime,.dateTime.m-oneline .datetime__timezone{width:50%;box-sizing:border-box;margin:0;padding:0;float:left}.dateTime.m-oneline .datetime__dateandtime{padding-right:10px}", ""])
    },
    2406: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".isrcField.m-batchMonetization{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.isrcField.m-batchMonetization .isrcField__textfield{-webkit-flex:1;-ms-flex:1;flex:1}.isrcField.m-batchMonetization .isrcField__createIsrc{margin-right:6px;margin-top:8px}.isrcField.m-productTrack{width:100%;display:-webkit-flex;display:-ms-flexbox;display:flex}.isrcField.m-productTrack .isrcField__textfield{width:50%}.isrcField.m-productTrack .isrcField__createIsrc{margin-left:25px;margin-top:32px}", ""])
    },
    2407: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".select{margin:10px 0}.select__wrapper{position:relative}.select__select{width:100%}.select__labelText{margin-bottom:6px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.select__labelHint{margin-left:5px}.select.invalid .select__select{border-color:#f50}.select.invalid .sc-button-dropdown{border-color:#f50!important}", ""])
    },
    2409: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".textfield{margin:10px 0;position:relative}.textfield__inputWrapper{position:relative}.textfield.inline{display:inline-block}.textfield__label{display:inline-block;margin-bottom:6px}.textfield .hintButton{position:relative;top:-1px;margin-left:1px}.textfield__input{width:100%;position:relative;z-index:1}.textfield.inline .textfield__input{width:auto}.textfield.invalid .textfield__input{border-color:#f50}.textfield.hint .textfield__input{border-color:#333;border-top-right-radius:0}.textfield__inputApplyAll{padding-right:25px}.textfield__applyAll{background:url(" + n(2823) + ") no-repeat 0 -1px;background-size:16px;position:absolute;right:5px;top:5px;height:16px;width:16px;border:1px dotted transparent;z-index:2;transition:opacity .3s}.textfield__applyAll:focus{border-color:#999;outline:0}.textfield__clear{position:absolute;right:5px;top:50%;margin-top:-7px;height:14px;width:14px;background:#e5e5e5;border:1px dotted transparent;border-radius:50%;z-index:2;transition:opacity .3s}.textfield__clear::after,.textfield__clear::before{content:'';display:block;position:absolute;width:10px;height:0;left:50%;top:50%;margin-left:-5px;margin-top:-1px;border-top:2px solid #fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.textfield__clear::after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.textfield__input:placeholder-shown+.textfield__clear{pointer-events:none;opacity:0}.textfield__clear:hover{background:#ccc}.textfield__clear:focus{border-color:#999;outline:0}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:2dppx),(min-resolution:192dpi){.textfield__applyAll{background-image:url(" + n(2824) + ")}}", ""]);
    },
    2411: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".tokenInput{margin:10px 0}.tokenInput__wrapper{border:1px solid #ccc;cursor:text;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative}.tokenInput.focused .tokenInput__wrapper{border-color:#999}.tokenInput.invalid .tagInput__wrapper{border-color:#f50}.tokenInput__label{display:inline-block;margin-bottom:6px}.tokenInput__token,.tokenInput__inputContainer{display:inline-block}.tokenInput__token{background:#f2f2f2;font-size:.9em;border:1px solid #e5e5e5;border-radius:4px;padding:0 5px;margin:0 4px 1px 0;white-space:nowrap;line-height:1.3}.tokenInput__tokenRemove{background:url(" + n(278) + ") no-repeat 0 0;width:15px;height:15px;vertical-align:text-top;margin-left:5px}.tokenInput__input{border:0;padding:1px 2px;font-weight:100}", ""])
    },
    2412: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".backgroundGradient{position:relative;height:100%;z-index:0}.backgroundGradient__buffer{position:absolute;top:0;left:0;height:100%;width:100%;z-index:2;opacity:1;transition:opacity .3s}.backgroundGradient__hidden{opacity:0;z-index:1;transition-delay:.3s}.backgroundGradient__imageOverlay{display:none}.backgroundGradient.m-imageOverlay .backgroundGradient__imageOverlay{display:block;height:100%;width:100%;z-index:3;position:absolute;opacity:.8;background-size:cover;background-position:center;-webkit-filter:blur(40px);filter:blur(40px);-webkit-transform:scale(1.15);transform:scale(1.15)}", ""])
    },
    2413: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".imageChooser{height:100%;cursor:pointer}.imageChooser:hover .imageChooser__chooseButton,.imageChooser__chooseButton:hover,.imageChooser__chooseButton:focus{border-color:rgba(0,0,0,.3)}", ""])
    },
    2414: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".imageCrop__previewContainer,.imageCrop__preview{position:relative}.imageCrop__preview.cropit-image-loaded{cursor:move;background-color:#fff}.imageCrop__previewBackground::before,.imageCrop__previewRounded{position:absolute;left:0;right:0;top:0;bottom:0}.imageCrop__previewBackground::before{content:'';background-color:rgba(255,255,255,.7)}.imageCrop__previewRounded{border-radius:50%}.imageCrop__hint{color:#666;margin-bottom:8px}.imageCrop__bottom{margin-top:25px;min-height:32px}.imageCrop.m-compact .imageCrop__bottom{margin-top:10px}.imageCrop__smallHint{position:relative;top:1px;margin-right:10px;-webkit-flex:1;-ms-flex:1;flex:1}.imageCrop__mainButtons{margin:0}.imageCrop__error{padding:0 10px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.imageCrop__zoomContainer{margin-right:10px;display:none;-webkit-flex:1;-ms-flex:1;flex:1}.imageCrop__zoom{display:-webkit-flex;display:-ms-flexbox;display:flex}.imageCrop__zoomControl{font-size:18px;color:#bbb;line-height:24px;background:0 0;border:0;padding:0;width:26px;height:26px}.imageCrop__zoomControl:focus,.imageCrop__zoomControl:hover{color:#666;outline:0}.imageCrop__zoomControl[disabled]:hover,.imageCrop__zoomControl[disabled]:focus{color:#999}.imageCrop__zoomSlider{max-width:130px;margin:12px 5px}.imageCrop__noZoomSupport{color:#666}.imageCrop__smallImage,.imageCrop__error{display:none}", ""])
    },
    2415: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".image__full,.image{text-align:center;position:relative;background-repeat:no-repeat}.image__lightOutline .image__full{box-shadow:rgba(0,0,0,.1)0 0 0 1px inset}.image__whiteOutline .image__full{border:2px solid #fff;box-sizing:border-box;background-origin:border-box}.image.dragover{box-shadow:0 0 15px #06c}.image.interactive{cursor:pointer}.image__rounded{border-radius:50%}.image:focus{outline:0}.image:focus .image__full{border:1px dotted #999;box-sizing:border-box;background-origin:border-box}.image__rounded.m-loaded.sc-artwork{background:0 0}.image__button{position:absolute;bottom:0;left:0;right:0;height:20%}.image.readOnly .image__button{display:none}.image.customImage .image__button{overflow:hidden;opacity:0;transition:opacity .1s linear}.image.alwaysShowEditButton .image__button,.image.customImage:hover .image__button,.image.customImage .image__button:focus{opacity:1}.image__placeholder{position:absolute}.image .sc-artwork.sc-artwork-placeholder-blank{box-sizing:border-box;background-origin:border-box}.image:not(.m-loaded) .sc-artwork.sc-artwork-placeholder-blank{border:1px dashed #ccc;box-shadow:none}.image.m-station::before{position:absolute;content:'';display:block;top:0;bottom:0;right:0;left:0;width:60%;height:60%;background-image:url(" + n(3846) + ");background-size:cover;z-index:3;margin:auto}.image.m-station.m-smallOverlay::before{background-image:url(" + n(3845) + ")}", ""])
    },
    2416: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".linkMenu{box-shadow:0 1px 8px rgba(0,0,0,.2);background-color:#fff}.linkMenu__scrollable{max-height:450px;width:100%;margin:0}.linkMenu__list{width:100%;padding:10px 18px;box-sizing:border-box}.linkMenu__group{padding-bottom:20px}.linkMenu__group:last-child{padding-bottom:0}.linkMenu__groupTitle{padding-bottom:4px;margin-bottom:8px;text-transform:uppercase;font-size:11px}.linkMenu__activeItem,.linkMenu__activeItem>a,.linkMenu__item:hover,.linkMenu__item>a:hover{color:#f50}.linkMenu__disabledItem,.linkMenu__disabledItem:hover{color:#ccc}.linkMenu__item{line-height:28px}.linkMenu__bold>.linkMenu__item{font-weight:400}", ""])
    },
    2419: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".loading{background:url(" + n(351) + ") no-repeat center center;clear:both;text-align:center;box-sizing:border-box;min-height:40px;width:100%}.loading.dark{background-image:url(" + n(2874) + ")}.loading.m-padded{padding:200px 0}.loading.small{min-height:20px;background-size:16px}", ""])
    },
    2430: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".announcement{padding:15px 30px;background-color:rgba(0,0,0,.9);position:relative;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:baseline;-ms-flex-align:baseline;align-items:baseline}.announcement.m-dismiss-visible{padding-right:30px}.announcement__dismiss{position:absolute;width:18px;height:18px;cursor:pointer;right:30px;top:50%;margin-top:-9px;background:url(" + n(2831) + ") no-repeat 50% 50%;background-size:18px 18px}.announcement>.announcement__message>a{color:#ccc;text-decoration:underline}.announcements__item+.announcements__item .announcement{padding-top:0}.announcements__item+.announcements__item .announcement__dismiss,.announcements__item+.announcements__item .announcement__ack{display:none}@media (max-width:1079px){.announcement{padding-left:20px;padding-right:20px}.announcement.m-dismiss-visible{padding-right:20px}.announcement__dismiss{right:20px}}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:2dppx),(min-resolution:192dpi){.announcement__dismiss{background-image:url(" + n(2832) + ")}}", ""])
    },
    2431: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".announcements{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);width:100%;position:fixed;bottom:0;transition:-webkit-transform 200ms ease-out;transition:transform 200ms ease-out}.announcements.m-offset{-webkit-transform:translate3d(0,-47px,0);transform:translate3d(0,-47px,0)}", ""])
    },
    2432: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".addToNextUp{transition:color .2s,border-color .2s}", ""])
    },
    2433: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".addToPlaylistButton{min-width:120px}", ""])
    },
    2434: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".hintButton{background:url(" + n(3809) + ") 0 0/contain no-repeat;width:26px;height:26px;padding:0 0 5px;border:none}.hintButton:active,.hintButton:focus,.hintButton:hover{border:none}.hintButton.sc-button-small{height:18px;width:18px;min-width:18px;min-height:18px}.hintButton.sc-button-tiny{height:16px;width:16px;min-width:16px;min-height:16px}.hintButton.sc-button-active{background:url(" + n(3808) + ") 0 0/contain no-repeat}", ""])
    },
    2435: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".removeFromNextUp:hover,.removeFromNextUp{background-image:url(" + n(3830) + ");background-size:24px 24px;background-position:4px center;background-repeat:no-repeat}.sc-button-icon.removeFromNextUp{background-position:0 0}", ""])
    },
    2447: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".commentForm__transition{transition:opacity 300ms,height 300ms,margin 300ms}.commentForm{position:relative;z-index:3;opacity:0;margin-top:0}.commentForm__wrapper{height:0;padding:5px;background:#f2f2f2;border:1px solid #e5e5e5;overflow:hidden}.commentForm.visible .commentForm__wrapper{overflow:visible}.commentForm.visible.m-small{opacity:1}.commentForm.visible.m-small .commentForm__wrapper{height:20px}.sound.streamContext .commentForm.visible.m-small{margin-top:22px}.visualSound.streamContext .commentForm.visible.m-small{margin-top:35px}.commentForm.m-large{margin-top:7px;opacity:1}.commentForm.m-large .commentForm__wrapper{height:40px;box-sizing:border-box}.commentForm.m-active .commentForm__wrapper{background:#e5e5e5;border-color:#ccc}.commentForm.m-small.m-active .commentForm__input{border-color:#ccc}.commentForm__avatar{margin-right:0;position:relative;float:left}.commentForm.m-small .commentForm__avatar{width:20px;height:20px}.commentForm.m-large .commentForm__avatar{position:relative;width:40px;height:40px;left:-6px;top:-6px}.commentForm.m-small.m-invalid .commentForm__avatar:after{content:'';position:absolute;left:0;top:0;width:100%;height:100%;display:block;box-sizing:border-box;border-left:1px solid #F50;border-bottom:1px solid #F50;border-top:1px solid #F50}.commentForm__inputWrapper{position:relative;font-size:12px;line-height:16px}.commentForm.m-small .commentForm__inputWrapper{height:20px;margin-left:20px}.commentForm.m-large .commentForm__inputWrapper{margin-left:40px;font-size:14px}.commentForm__recipient{display:none;padding:2px 5px 2px 2px;position:absolute}.commentForm.m-large .commentForm__recipient{padding:5px;font-size:14px;top:1px}.commentForm.m-recipientActive .commentForm__recipient{color:#fff;background:#06c}.commentForm.m-recipientActive.m-small .commentForm__recipient{padding:2px}.commentForm__input{width:100%;background:#fff;padding:0 9px;font-size:12px;outline:none;cursor:pointer;border:1px solid #e5e5e5}.commentForm .commentForm__input:focus,.commentForm.m-large .commentForm__inputWrapper .commentForm__input:focus{cursor:text;border-color:#999}.commentForm.m-invalid .commentForm__input{border-color:#F50!important}.commentForm.m-small .commentForm__input{height:20px;border-radius:0 4px 4px 0;border-left:none}.commentForm.m-large .commentForm__input{border-radius:4px;height:27px;font-size:14px}", ""])
    },
    2449: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".commentPlaceholder{width:100%;height:1px;z-index:10;top:70%;position:relative;z-index:-1;opacity:0;transition:opacity .25s}.commentPlaceholder.visible{z-index:350;opacity:1}.commentPlaceholder__avatar{position:absolute;cursor:move;margin-left:-9999em}.commentPlaceholder.visible .commentPlaceholder__avatar{margin-left:0}", ""])
    },
    2450: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".commentPopover{position:absolute;width:100%;top:70%;height:20px;opacity:0;transition:opacity 250ms}.commentPopover.visible{opacity:1}.commentPopover__playableArea,.commentPopover__scrub{height:100%}.commentPopover__playableArea{cursor:pointer}.commentPopover__wrapper{width:50%;transition:-webkit-transform 50ms;transition:transform 50ms}.commentPopover:hover .commentPopover__wrapper{transition:-webkit-transform 0;transition:transform 0}.commentPopover__username,.commentPopover__body{transition:padding-top 250ms;box-sizing:border-box;display:inline-block}.commentPopover__username{position:relative;float:left;max-width:30%;padding-left:10px}.commentPopover.commentLeft .commentPopover__username{float:none;padding-left:0;padding-right:10px}.commentPopover__username,a.commentPopover__username:hover,a.commentPopover__username:visited{color:#f50}.commentPopover__username:before{content:'';position:absolute;top:0;bottom:0;left:0;width:1px;display:block;background-image:linear-gradient(rgba(255,85,0,.95),rgba(255,85,0,.1))}.commentPopover.commentLeft .commentPopover__username:before{right:0;left:auto}.commentPopover__body{margin:0;padding-left:10px;color:#fff;max-width:70%}.commentPopover.commentLeft .commentPopover__body{float:left;padding-left:0;padding-right:10px}.commentPopover__avatar{position:absolute;top:-20px;background-size:cover;display:none}.commentPopover.visible .commentPopover__avatar{display:block}.commentPopover.smallAvatar{height:10px}.commentPopover.smallAvatar .commentPopover__avatar{top:-10px}.commentPopover.darkText .commentPopover__body{color:#333}.commentPopover.small .commentPopover__username,.commentPopover.small .commentPopover__body{padding-top:6px}.commentPopover.small.visible .commentPopover__username,.commentPopover.small.visible .commentPopover__body{padding-top:9px}.commentPopover.medium .commentPopover__username,.commentPopover.medium .commentPopover__body{padding-top:10px}.commentPopover.medium.visible .commentPopover__username,.commentPopover.medium.visible .commentPopover__body{padding-top:13px}.commentPopover.large .commentPopover__username,.commentPopover.large .commentPopover__body{padding-top:20px}.commentPopover.large.visible .commentPopover__username,.commentPopover.large.visible .commentPopover__body{padding-top:23px}.visualSound.streamContext.playing .commentPopover__body{color:#e5e5e5}.visualSound.streamContext.playing .commentPopover__username,.visualSound.streamContext.playing .commentPopover__body{padding-top:6px}.visualSound.streamContext.playing .commentPopover.visible .commentPopover__username,.visualSound.streamContext.playing .commentPopover.visible .commentPopover__body{padding-top:9px}", ""])
    },
    2451: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, '.commentFormDisabled{text-align:center;font-size:14px;padding:10px 0;border-radius:4px;background:#f2f2f2;opacity:0;height:0;margin-top:0;transition:opacity .3s,height .3s,margin .3s}.commentFormDisabled.small{font-size:12px;padding:8px 0}.commentFormDisabled.visible{margin-top:10px;opacity:1;height:19px}.commentFormDisabled.visible.small{height:16px}.visualSound .commentFormDisabled.visible.small{margin-top:25px}.listenContent__visual .commentFormDisabled{background:#f2f2f2;z-index:1;position:relative;font-family:"Interstate","Lucida Grande",Arial,sans-serif;font-weight:100;margin-top:0}', ""])
    },
    2453: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".deleteCommentContent__form{margin:7px 0 11px}.deleteCommentForm__actions{margin-top:5px;text-align:right}.deleteCommentForm__spam{margin-top:5px}", ""])
    },
    2459: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".creatorsNavigation__list{min-height:48px;line-height:48px;font-weight:100}.creatorsNavigation__onSoundCloud{float:right}.creatorsNavigation__onSoundCloudLink{background:url(" + n(1654) + ") no-repeat 0 15px/16px 16px;padding:0 0 0 22px}.creatorsNavigation__onSoundCloudLinkNewBadge{margin-left:2px;padding:3px;border:1px solid #f50;color:#f50;font-size:12px;text-transform:uppercase}", ""])
    },
    2460: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".dashbox__header{margin-bottom:13px;padding-bottom:7px}.dashbox__wrapper{margin:0 0 25px 0}.dashbox.m-loading .dashbox__wrapper{background:url(" + n(351) + ") no-repeat center center}.dashbox.m-loading .dashbox__visual{opacity:0}.dashbox__visual{display:block;opacity:1;transition:opacity .2s linear}.dashbox__box{display:block;padding:38px;border:1px solid #e5e5e5;overflow:hidden}.dashbox__box,.dashbox__box:hover,.dashbox__box:focus,.dashbox__box:visited{color:#333}.dashbox__icon{float:left;margin-right:15px}.dashbox__content{float:left;max-width:129px;vertical-align:top}.dashbox__titleLine{margin:0;line-height:18px}.dashbox__titleLine+.dashbox__bodyLine{margin-top:3px}.dashbox__bodyLine{font-size:12px;line-height:14px;margin:0}.dashbox__cta{position:relative;top:24px;clear:both;text-align:center;margin-bottom:22px}.dashbox__ctaLabel{max-width:222px}", ""])
    },
    2464: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".editAccessTab{margin-top:20px}.editAccessTab__showCopyrightWarning,.editAccessTab__showDownloadableConstraint,.editAccessTab__showFeedableConstraint{display:none}.editAccessTab.m-showCopyrightWarning .editAccessTab__showCopyrightWarning,.editAccessTab.m-showDownloadableConstraint .editAccessTab__showDownloadableConstraint,.editAccessTab.m-showFeedableConstraint .editAccessTab__showFeedableConstraint{display:block}", ""])
    },
    2465: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".audibleEditForm__top{position:relative}.audibleEditForm__title{margin-bottom:30px}.audibleEditForm__audio{background-color:#fff;border-radius:4px 4px 0 0;border-bottom-width:0;padding:20px;transition:-webkit-transform .3s;transition:transform .3s;position:relative;z-index:1}.audibleEditForm__audioButtons{margin-bottom:0;display:-webkit-flex;display:-ms-flexbox;display:flex}.audibleEditForm__download{margin-right:5px}.audibleEditForm__progress{position:absolute;bottom:0;left:0;right:0;padding:25px 25px 0;background-color:#fff;border-radius:4px 4px 0 0;display:none;transition:-webkit-transform .2s .35s;transition:transform .2s .35s;-webkit-transform:translateY(50px) scale(.98);transform:translateY(50px) scale(.98)}.audibleEditForm.showProgress .audibleEditForm__audio{-webkit-transform:translateY(90px) scale(.96);transform:translateY(90px) scale(.96)}.audibleEditForm.showProgress .audibleEditForm__progress{-webkit-transform:translateY(0) scale(1);transform:translateY(0) scale(1)}.audibleEditForm__form{background-color:#fff;border-bottom-left-radius:5px;border-bottom-right-radius:5px;padding:14px 25px 0;position:relative;z-index:2}.audibleEditForm__formButtons{margin:20px -25px 0;padding:20px 25px}.audibleEditForm__requiredText{float:left;line-height:26px}.audibleEditForm__formButtons>.sc-button{float:right;margin-right:0}.audibleEditForm__foot{margin:0 -25px;padding:20px 25px}.audibleEditForm__foot strong{font-weight:700}.audibleEditForm__footCpp{margin:10px 0 0 0}.audibleEditForm__loading .audibleEditForm__form{height:503px}", ""])
    },
    2466: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".availabilityRadioGroup__label{margin-bottom:8px;display:inline-block}.availabilityRadioGroup.radioGroup.vertical{padding-left:0;display:block}.availabilityRadioGroup.radioGroup.vertical .radioGroup__radio{margin-bottom:12px}.availabilityRadioGroup.radioGroup.vertical .radioGroup__sublabel{color:#666;padding-top:6px}.availabilityRadioGroup .dateTime.m-oneline .datetime__timezone{padding-left:4px}.availabilityRadioGroup .dateTime.m-oneline .datetime__dateandtime{padding-left:25px;padding-right:7px}", ""])
    },
    2467: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".baseFields{position:relative;padding-left:278px}.baseFields__image{position:absolute;top:0;left:0}.baseFields__title .textfield{margin-top:3px}.baseFields__tagInput{margin:10px 0 20px}.baseFields__description .textfield__input{height:130px}.baseFields__playlistTypeSelect,.baseFields__releaseDate,.baseFields__customGenre{-webkit-flex:1;-ms-flex:1;flex:1}.baseFields__playlistTypeSelect{margin-right:10px}.baseFields__genreSelect{-webkit-flex-basis:49%;-ms-flex-preferred-size:49%;flex-basis:49%;margin-right:10px}.baseFields__fullWidth{width:100%}.baseFields__customGenre{display:none}.baseFields.m-customGenre .baseFields__customGenre{display:inline-block}.baseFields.m-customGenre .baseFields__customGenreLabel{-webkit-flex:1;-ms-flex:1;flex:1}", ""])
    },
    2468: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".editBasicTab{margin-top:25px;position:relative;min-height:305px}.editBasicTab__fields{margin-left:278px}.editBasicTab__afterDescription{padding:5px 0}.editBasicTab__trackList{margin:20px -30px 20px}.editBasicTab__shareToWrapper{margin-left:7px}", ""])
    },
    2469: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".editStatus{position:relative}.editStatus__info{color:#666}.editStatus__text{padding-bottom:4px;min-height:15px;transition:min-height .3s cubic-bezier(.28,.42,.18,1)}.editStatus .editStatus__progress{height:5px;background-color:#999;transition:height .3s cubic-bezier(.28,.42,.18,1)}.editStatus.small .editStatus__progress{height:1px}.editStatus.medium .editStatus__progress{height:2px}", ""])
    },
    2470: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".fakeMonetizationTab__fakeForm{pointer-events:none;opacity:.6}.fakeMonetizationTab__upsell{padding:13px 16px;margin:30px 0 20px}.fakeMonetizationTab__upsellSentence{background-image:url(" + n(472) + ");background-position:left center;background-repeat:no-repeat;background-size:36px 18px;padding-left:40px}.fakeMonetizationTab__checkbox{display:-webkit-flex;display:-ms-flexbox;display:flex}.fakeMonetizationTab__checkboxIcon{background:url(" + n(1599) + ") no-repeat 0 0;background-size:26px 156px;width:26px;height:26px;margin:2px 10px 0 2px;border-radius:50%;box-sizing:border-box}.fakeMonetizationTab__checkboxTitle{color:#333;font-weight:400;margin-bottom:7px}", ""])
    },
    2471: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".editImage{position:relative}.editImage__cropper,.editImage.m-hasFile .editImage__select{display:none}.editImage.m-hasFile .editImage__cropper{display:block}.editImage__error{margin-top:10px;text-align:right;opacity:0}.editImage.m-image-rejected .editImage__error{opacity:1}", ""])
    },
    2472: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".licenseEdit__radios{margin:11px 0 12px}.licenseEdit__summary{margin-left:5px}", ""])
    },
    2473: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".metadataGrid{margin-top:16px}.metadataGrid__row{clear:both;overflow:hidden;margin:-10px 0}.metadataGrid__field-full,.metadataGrid__field-wide,.metadataGrid__field-narrow,.metadataGrid__field-half,.metadataGrid__field-quarter{padding:0 5px;box-sizing:border-box;float:left}.metadataGrid__field-full{width:100%;padding:0}.metadataGrid__field-wide{width:66.666%}.metadataGrid__field-narrow{width:33.333%}.metadataGrid__field-half{width:50%}.metadataGrid__field-quarter{width:25%}.metadataGrid__field-wide:first-child,.metadataGrid__field-narrow:first-child{padding-left:0}.metadataGrid__field-wide:last-child,.metadataGrid__field-narrow:last-child{padding-right:0}", ""])
    },
    2474: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".editMetadataTab__requiredCppFields{margin-bottom:38px}", ""])
    },
    2475: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".editMonetizationTab{margin-top:20px}", ""])
    },
    2476: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".monetizationTerritories{margin-left:38px}.monetizationTerritories .g-options-row{overflow:visible}.monetizationTerritories__listItem{padding-bottom:16px}.monetizationTerritories__validation{margin-top:10px;display:none}.monetizationTerritories.m-invalid>.monetizationTerritories__validation{display:block}.monetizationTerritories__validationMessage{border-radius:4px}", ""])
    },
    2477: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".monetizationTerritory__territorySelect,.monetizationTerritory__rightsholderSelect{width:90%}.monetizationTerritory__rightsholderSelect{margin-top:4px}.monetizationTerritory__needsRightsholder,.monetizationTerritory__complete{position:relative}.monetizationTerritory__rightsholder{position:relative;padding-left:15px;padding-top:8px}.monetizationTerritory__rightsholder:before{content:'';height:14px;width:6px;display:block;position:absolute;top:2px;left:2px;border-left:1px solid #e4e4e4;border-bottom:1px solid #e4e4e4}.monetizationTerritory__remove{position:absolute;left:-44px;top:0;padding:8px 10px;width:25px;height:22px}.monetizationTerritory__removeButton{display:none}.monetizationTerritory:hover .monetizationTerritory__removeButton{display:block}", ""])
    },
    2483: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".editPlaylistBasicTab{margin-top:25px;position:relative;min-height:305px}.editPlaylistBasicTab__fields{margin-left:278px}.editPlaylistBasicTab__afterDescription{padding:5px 0}.editPlaylistTracklistTab{margin-top:25px}", ""])
    },
    2484: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".editTrackList{position:relative}.editTrackList__list.sortable-dragging-list{z-index:500}.editTrackList__item{position:relative}.editTrackList__list .sortable-placeholder{background:#f2f2f2;border-top:1px solid #f2f2f2;border-radius:4px}.editTrackList__list .sortable-placeholder+.editTrackList__item{border-top-color:transparent}.editTrackList__headerButtons{display:none}.editTrackList.m-long-playlist .editTrackList__headerButtons{display:block}.editTrackList__headerButtons>.sc-button{float:right;margin-right:0}", ""])
    },
    2485: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".playlistEditTabs .tabs__tabs{padding:0}", ""])
    },
    2486: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".editTrackItem{position:relative;line-height:44px;border-radius:4px}.editTrackItem__image{position:relative;margin:7px 15px 0 0}.editTrackItem__play{position:absolute;top:4px;left:5px;line-height:1;display:none}.editTrackItem__content{cursor:move}.editTrackItem__additional{background:#fff;background:linear-gradient(to right,rgba(255,255,255,.1),#fff 17px);position:absolute;right:0;top:0;padding:0 5px 0 22px}.editTrackItem__remove{margin-left:10px;overflow:hidden}.editTrackItem.m-hover,.editTrackItem.m-active{background-color:#f2f2f2;margin:-1px -12px;padding:1px 12px}.editTrackItem.m-active .editTrackItem__trackTitle{color:#f50}.editTrackItem.m-active .editTrackItem__trackTitle:hover,.editTrackItem.m-active .editTrackItem__trackTitle:focus{color:#f10}.editTrackItem.m-hover .editTrackItem__additional,.editTrackItem.m-active .editTrackItem__additional{background:#f2f2f2;background:linear-gradient(to right,rgba(242,242,242,.1),#f2f2f2 17px);right:12px;top:1px}.editTrackItem.m-hover .editTrackItem__play,.editTrackItem.m-active .editTrackItem__play{display:block}.editTrackItem.m-dragging{background-color:#fff;margin:-1px 0;padding:1px 0}.editTrackItem.m-dragging .editTrackItem__additional{background:#fff;background:linear-gradient(to right,rgba(255,255,255,.1),#fff 17px);right:0}.editTrackItem.m-dragging .editTrackItem__play{display:none}", ""])
    },
    2487: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".restrictedEditForm__form{padding:20px 20px 0 20px}.restrictedEditForm__actions{margin:20px -25px 0;padding:20px 25px;border-top:1px solid #f2f2f2}.restrictedEditForm.m-failed .restrictedEditForm__actions{background-color:#f2f2f2;border-top:1px solid #e5e5e5}.restrictedEditForm__status{padding-bottom:0;color:#333}.restrictedEditForm__form .restrictedEditForm__retry{display:none}.restrictedEditForm.m-failed .restrictedEditForm__retry{display:inline-block}.restrictedEditForm.m-failed .restrictedEditForm__save{display:none}.restrictedEditForm__foot{border-top:1px solid #f2f2f2}.restrictedEditForm.m-failed .restrictedEditForm__foot{border-top:1px solid #e5e5e5}", ""])
    },
    2489: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".soundEditTabs .tabs__tabs{padding:0}", ""])
    },
    2491: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".inlineError{padding:15px;text-align:center}", ""])
    },
    2492: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, '.l-footer.standard{padding:11px 0;font-size:11px;z-index:1}.l-footer.marketing,.l-footer.landing{padding:15px 0;line-height:20px}.l-footer.marketing a,.l-footer.landing a{font-size:14px;font-weight:100;font-family:"Interstate","Lucida Grande","Lucida Sans Unicode","Lucida Sans",Garuda,Verdana,Tahoma,sans-serif}@media (max-width:1079px){.l-footer.landing{margin:0 -40px}}', ""])
    },
    2497: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, '.header{width:100%;font:100 14px/1.5 "Interstate","Lucida Grande",Arial,sans-serif;-webkit-transform:translateZ(0);-webkit-font-smoothing:subpixel-antialiased;background:#333;height:46px;transition:height .2s ease-in-out}.m-hideHeader .header{height:0;overflow:hidden}.header__inner{display:-webkit-flex;display:-ms-flexbox;display:flex}.header__middle{-webkit-flex:1;-ms-flex:1;flex:1}.header__navWrapper,.header__search,.header__right{display:none;visibility:hidden}.show .header__navWrapper,.show .header__search,.show .header__right{display:block;visibility:visible}.show .header__logo{background:#f50;background:linear-gradient(#f70,#f30)}.header__logoLink-wordmark,.header__loggedIn .header__logoLink-iconOnly{display:block}.header__logoLink-iconOnly,.header__loggedIn .header__logoLink-wordmark{display:none}.header__logoLink{background:url(' + n(1590) + ') no-repeat 12px 11px;background-size:48px 22px;height:46px;width:69px}.header__logoLink-wordmark{width:184px}.header__logoLink-wordmark::after{content:"";display:inline-block;height:100%;width:100%;background:url(' + n(1592) + ") no-repeat 60px 11px;background-size:115px 22px}.header__logoLink:focus{background-color:rgba(255,72,0,.8);outline:0}@media (max-width:1239px){.header__logoLink-iconOnly{display:block}.header__logoLink-wordmark{display:none}}.header__navMenu>li{float:left;position:relative}.header__navMenu>li>a{display:block;padding:12px 0;width:104px;height:46px;border-right:1px solid #111;box-sizing:border-box;text-align:center}.header__navMenu>li>a:hover,.header__navMenu>li>a:focus{color:#eee;outline:0}.header__navMenu>li>a.selected,.header>li>a:focus{color:#fff!important;background-color:#111;outline:0}.header__link{padding:12px 10px 12px;float:left}.header__link.header__goUpsell{color:#f50}.header__link.header__goUpsell:hover,.header__link.header__goUpsell:focus,.header__link.header__goUpsell:active{color:#f70}.header__loginMenu{padding:9px 10px 10px 10px}.header__loginMenu .signupButton{margin-left:8px}.header__loginMenu .loginButton{float:left;margin-right:10px}.header__userNav{float:left;padding:0}.header__navMenu>li>a.header__moreButton{width:46px;height:46px;background:url(" + n(3816) + ") 50% 50% no-repeat;opacity:.75;border:0}.header__navMenu>li>a:hover,.header__navMenu>li>a:focus,.header__navMenu>li>a.header__moreButton.selected{opacity:1}.header__navMenu>li>a.header__moreButton.selected{background-color:#111}.header__notificationBadge{position:absolute;width:9px;height:9px;top:12px;right:9px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi),(min-resolution:2dppx){.header__logoLink{background-image:url(" + n(1591) + ")}.header__logoLink-wordmark::after{background-image:url(" + n(1593) + ")}}.header__userNavItem{float:left}.header__userNavButton{height:46px;box-sizing:border-box}.header__userNavButton:focus{outline:0}.header__userNavItem.selected,.header__userNavButton.selected{color:#FFF;background-color:#111}.header__userNavAvatar{margin-top:-2px;margin-right:10px}.header__userNavActivitiesButton,.header__userNavMessagesButton{width:46px}.header__userNavMessagesButton{border-right:0;border-radius:0 2px 2px 0}.header__userNavUsernameButton{float:left;padding:12px 28px 12px 10px;box-sizing:border-box;position:relative}.header__userNavUsernameButton:after{content:'';position:absolute;right:10px;top:21px;background-image:url(" + n(3814) + ");background-repeat:no-repeat;width:8px;height:5px;opacity:.75}.header__userNavUsernameButton:focus:after,.header__userNavUsernameButton:hover:after{opacity:1}.header__userNavUsername{max-width:149px}@media (max-width:1079px){.header__userNavUsernameButton{width:auto}.header__userNavAvatar{margin-right:0}.header__userNavUsername{display:none}}.m-navigationTrap .header__logo{background:#333}.m-navigationTrap .header__logoLink-iconOnly{display:none}.m-navigationTrap .header__logoLink-wordmark{display:block}.m-navigationTrap .header__navWrapper,.m-navigationTrap .header__search,.m-navigationTrap .header__goUpsell,.m-navigationTrap .header__proUpsell,.m-navigationTrap .header__userNavActivitiesButton,.m-navigationTrap .header__userNavMessagesButton,.m-navigationTrap .header__navMenu,.m-navigationTrap .header__loginMenu,.m-navigationTrap .header__upload,.m-navigationTrap .header__soundInput{display:none}", ""])
    },
    2498: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".moreMenu__list{border-bottom:1px solid #333}.moreMenu__link{display:block;padding:8px 10px}.moreMenu__link.m-highlight{color:#f50}.moreMenu__link:hover{background-color:#333}", ""])
    },
    2499: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".notificationIcon{width:100%;height:100%;position:relative}.selected .notificationIcon,.notificationIcon:hover,.notificationIcon:focus,.notificationIcon.newItems__some{outline:0}.notificationIcon:before{content:'';position:absolute;width:100%;height:100%;left:0;top:0;opacity:.75}.selected .notificationIcon:before,a:focus .notificationIcon:before,.notificationIcon:hover:before,.notificationIcon:focus:before{opacity:1}.notificationIcon.messages:before{background:url(" + n(3815) + ") 50% 50% no-repeat}.notificationIcon.activities:before{background:url(" + n(3813) + ") 50% 50% no-repeat}.notificationIcon__badge{z-index:1;position:absolute;width:7px;height:7px;top:12px;right:11px}.notificationIcon.activities .notificationIcon__badge{right:15px}", ""]);
    },
    2500: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".profileMenu__list{background-color:#111}.profileMenu__list:not(:last-child){border-bottom:1px solid #333}.profileMenu__link{display:block;position:relative;padding:8px 10px 8px 33px}.profileMenu__link:hover,.profileMenu__link:focus{outline:0;color:#fff;background:#333}.profileMenu__link:after{content:'';background-repeat:no-repeat;background-position:center top;background-size:20px 20px;width:34px;height:20px;position:absolute;left:0;top:5px;opacity:.75}.profileMenu__profile:after{background-image:url(" + n(3823) + ");background-size:14px;background-position:center 3px}.profileMenu__sets:after{background-image:url(" + n(3820) + ");background-size:18px;background-position:9px 2px}.profileMenu__stations:after{background-image:url(" + n(2860) + ");background-size:18px 14px;background-position:center 4px}.profileMenu__likes:after{background-image:url(" + n(3819) + ");background-size:16px;background-position:center 2px}.profileMenu__following:after{background-image:url(" + n(3818) + ");background-size:19px}.profileMenu__friends:after{background-image:url(" + n(3817) + ");background-size:19px}.profileMenu__stats:after{background-image:url(" + n(3822) + ");background-size:14px;background-position:10px 3px}.profileMenu__premium:after{background-image:url(" + n(3821) + ");background-size:16px;background-position:center center}.profileMenu__trackManager:after{background-image:url(" + n(2862) + ")}.profileMenu__earnings:after{background-image:url(" + n(3856) + ");background-size:9px;background-position:center center}.profileMenu__link:hover:after,.profileMenu__link:focus:after{opacity:1}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:2dppx),(min-resolution:192dpi){.profileMenu__trackManager:after{background-image:url(" + n(2863) + ")}.profileMenu__stations:after{background-image:url(" + n(2861) + ")}}", ""])
    },
    2501: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".uploadButton{display:block}.uploadButton__status{display:none;margin-left:.3em;color:#f50}.uploadButton.active .uploadButton__status{display:inline}.uploadButton.selected,.uploadButton:focus{color:#fff;outline:0}.uploadButton.selected{background:#111}", ""])
    },
    2525: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".localeSelectorContent{background:#fff;overflow:hidden}.localeSelectorContent__wrapper{padding:25px 25px 15px 25px}.localeSelector__cancel{float:right;margin:30px 35px 30px 0}", ""])
    },
    3013: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                return "      " + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(226), {
                    name: "$view",
                    hash: {
                        className: null != t ? t.tierIndicatorClassName : t,
                        variant: null != t ? t.tierIndicatorVariant : t,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + "\n"
            },
            3: function(e, t, n, i, r) {
                var o, a = null != t ? t : {};
                return '    <div class="playableTile__actions">\n' + (null != (o = n["if"].call(a, null != t ? t.hasLikeAction : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n["if"].call(a, null != t ? t.hasOverflowActions : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(9, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "    </div>\n"
            },
            4: function(e, t, i, r, o) {
                var a, s = null != t ? t : {};
                return (null != (a = i["if"].call(s, null != t ? t.largeUI : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "        " + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(s, n(341), {
                    name: "$view",
                    hash: {
                        stretchIcon: null != t ? t.largeUI : t,
                        responsive: !1,
                        noStyle: !0,
                        lightFg: !0,
                        icon_only: !0,
                        resource_id: null != t ? t._resource_id : t,
                        resource_type: null != t ? t._resource_type : t
                    },
                    data: o
                })) + "\n" + (null != (a = i["if"].call(s, null != t ? t.largeUI : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "")
            },
            5: function(e, t, n, i, r) {
                return '          <span class="playableTile__actionContainer">\n'
            },
            7: function(e, t, n, i, r) {
                return "          </span>\n"
            },
            9: function(e, t, i, r, o) {
                var a, s = null != t ? t : {};
                return (null != (a = i["if"].call(s, null != t ? t.largeUI : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "        " + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(s, n(656), {
                    name: "$view",
                    hash: {
                        stretchIcon: null != t ? t.largeUI : t,
                        cornerStyle: "round",
                        actions: null != t ? t.overflowActions : t,
                        noStyle: !0,
                        lightFg: !0,
                        icon_only: !0,
                        resource_id: null != t ? t._resource_id : t,
                        resource_type: null != t ? t._resource_type : t
                    },
                    data: o
                })) + "\n" + (null != (a = i["if"].call(s, null != t ? t.largeUI : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "")
            },
            11: function(e, t, n, i, r) {
                return '        <span class="sc-icon sc-icon-large sc-icon-like playableTile__mainHeadingLike"></span>\n'
            },
            13: function(e, t, n, i, r) {
                return '        <span class="sc-icon sc-icon-medium sc-icon-lock playableTile__mainHeadingPrivate"></span>\n'
            },
            15: function(e, t, i, r, o) {
                return "      " + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(696), {
                    name: "$view",
                    hash: {
                        showYearOnly: !0,
                        className: "playableTile__releaseData",
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression,
                    d = "function";
                return '<div class="playableTile__artwork">\n  <a class="playableTile__artworkLink audibleTile__artworkLink" href="' + c((n(57) || t && t.$route || u).call(l, "listen", t, {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">\n    <div class="playableTile__image">\n      ' + c((n(52) || t && t.$view || u).call(l, n(86), {
                    name: "$view",
                    hash: {
                        lazyLoading: null != (a = null != t ? t._options : t) ? a.lazyLoadImage : a,
                        stretch: !0,
                        size: 200,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + "\n    </div>\n" + (null != (a = i["if"].call(l, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '  </a>\n\n  <div class="playableTile__playButton audibleTile__playButton g-z-index-content">\n    ' + c((n(52) || t && t.$view || u).call(l, n(225), {
                    name: "$view",
                    hash: {
                        size: "stretch",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + "\n  </div>\n\n" + (null != (a = i["if"].call(l, null != t ? t.hasActions : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '</div>\n\n<div class="playableTile__description">\n  <div class="playableTile__descriptionContainer">\n    <a class="' + c((s = null != (s = i.descriptionCSS || (null != t ? t.descriptionCSS : t)) ? s : u, typeof s === d ? s.call(l, {
                    name: "descriptionCSS",
                    hash: {},
                    data: o
                }) : s)) + ' playableTile__heading playableTile__audibleHeading audibleTile__audibleHeading sc-truncate sc-font-light" href="' + c((n(57) || t && t.$route || u).call(l, "listen", t, {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">\n' + (null != (a = i["if"].call(l, null != t ? t.isLike : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(11, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "\n" + (null != (a = i["if"].call(l, null != t ? t.isPrivate : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(13, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "      " + c((s = null != (s = i.title || (null != t ? t.title : t)) ? s : u, typeof s === d ? s.call(l, {
                    name: "title",
                    hash: {},
                    data: o
                }) : s)) + '\n    </a>\n  </div>\n  <div class="playableTile__usernameHeadingContainer sc-type-light sc-font-light">\n    <a class="' + c((s = null != (s = i.userNameCSS || (null != t ? t.userNameCSS : t)) ? s : u, typeof s === d ? s.call(l, {
                    name: "userNameCSS",
                    hash: {},
                    data: o
                }) : s)) + ' sc-truncate" href="' + c((n(57) || t && t.$route || u).call(l, "user", null != t ? t.user : t, {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + c(e.lambda(null != (a = null != t ? t.user : t) ? a.username : a, t)) + "</a>\n" + (null != (a = i["if"].call(l, null != t ? t.showReleaseDate : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(15, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    3015: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                return " checked"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, a, s = null != t ? t : {},
                    l = n.helperMissing,
                    u = "function",
                    c = e.escapeExpression,
                    d = e.lambda;
                return "<" + c((a = null != (a = n.tagName || (null != t ? t.tagName : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "tagName",
                    hash: {},
                    data: r
                }) : a)) + ' class="blockCheckbox__label">\n  <label class="blockCheckbox__checkbox">\n    <div class="blockCheckbox__icon sc-border-box"></div>\n    <input class="blockCheckbox__control sc-visuallyhidden" id="' + c((a = null != (a = n.inputId || (null != t ? t.inputId : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "inputId",
                    hash: {},
                    data: r
                }) : a)) + '" type="checkbox"' + (null != (o = n["if"].call(s, null != t ? t._value : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '>\n  </label>\n  <div class="blockCheckbox__content">\n    <label class="blockCheckbox__title" for="' + c((a = null != (a = n.inputId || (null != t ? t.inputId : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "inputId",
                    hash: {},
                    data: r
                }) : a)) + '">' + c(d(null != (o = null != t ? t._options : t) ? o.label : o, t)) + '</label>\n    <div class="blockCheckbox__validation g-input-validation g-input-validation-hidden"></div>\n    <div class="blockCheckbox__blockContent">\n      ' + c(d(null != (o = null != t ? t._options : t) ? o.blockContent : o, t)) + "\n    </div>\n  </div>\n</" + c((a = null != (a = n.tagName || (null != t ? t.tagName : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "tagName",
                    hash: {},
                    data: r
                }) : a)) + ">\n"
            },
            useData: !0
        })
    },
    3016: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                return 'checked="checked"'
            },
            3: function(e, t, n, i, r) {
                return 'disabled="disabled"'
            },
            5: function(e, t, n, i, r) {
                return " sc-visuallyhidden"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, a = e.lambda,
                    s = e.escapeExpression,
                    l = null != t ? t : {};
                return '<input\n  type="checkbox"\n  name="' + s(a(null != (o = null != t ? t._options : t) ? o.name : o, t)) + '"\n  class="sc-checkbox-input sc-visuallyhidden"\n  ' + (null != (o = n["if"].call(l, null != (o = null != t ? t._options : t) ? o.checked : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "\n  " + (null != (o = n["if"].call(l, null != (o = null != t ? t._options : t) ? o.disabled : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '\n>\n<div class="sc-checkbox-check"></div>\n<span class="sc-checkbox-label' + (null != (o = n.unless.call(l, null != (o = null != t ? t._options : t) ? o.showLabel : o, {
                    name: "unless",
                    hash: {},
                    fn: e.program(5, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '">' + s(a(null != (o = null != t ? t._options : t) ? o.label : o, t)) + "</span>\n"
            },
            useData: !0
        })
    },
    3017: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var o;
                return '  <span class="compactTrackListItem__number">' + e.escapeExpression((o = null != (o = n.track_number || (null != t ? t.track_number : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != t ? t : {}, {
                    name: "track_number",
                    hash: {},
                    data: r
                }) : o)) + "</span>\n"
            },
            3: function(e, t, n, i, r) {
                var o;
                return '    <span class="compactTrackListItem__user">' + e.escapeExpression(e.lambda(null != (o = null != t ? t.user : t) ? o.username : o, t)) + " - </span>\n"
            },
            5: function(e, t, n, i, r) {
                var o;
                return '    <span class="g-geoblocked-icon sc-font-light">' + e.escapeExpression((o = null != (o = n.blockedMsg || (null != t ? t.blockedMsg : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != t ? t : {}, {
                    name: "blockedMsg",
                    hash: {},
                    data: r
                }) : o)) + "</span>\n"
            },
            7: function(e, t, n, i, r) {
                var o, a = null != t ? t : {};
                return (null != (o = n["if"].call(a, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n["if"].call(a, null != t ? t.showPlaybackCount : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "")
            },
            8: function(e, t, i, r, o) {
                return "      " + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(226), {
                    name: "$view",
                    hash: {
                        variant: "list",
                        resource_id: null != t ? t._resource_id : t,
                        className: "compactTrackListItem__tierIndicator"
                    },
                    data: o
                })) + "\n"
            },
            10: function(e, t, i, r, o) {
                return '      <span class="compactTrackListItem__plays sc-ministats sc-ministats-small sc-ministats-plays">\n        ' + e.escapeExpression((n(252) || t && t.$formatStatNumber || i.helperMissing).call(null != t ? t : {}, null != t ? t.playback_count : t, {
                    name: "$formatStatNumber",
                    hash: {},
                    data: o
                })) + "\n      </span>\n"
            },
            12: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing;
                return '    <button type="button" class="compactTrackListItem__remove g-button-remove-compact">\n      ' + e.escapeExpression((n(110) || t && t.$a11y || s).call(a, {
                    name: "$a11y",
                    hash: {
                        screenreader: (n(51) || t && t.$t || s).call(a, "remove track", {
                            name: "$t",
                            hash: {},
                            data: o
                        })
                    },
                    data: o
                })) + "\n    </button>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return '<div class="compactTrackListItem__image">\n  ' + c((n(229) || t && t.$image || u).call(l, t, {
                    name: "$image",
                    hash: {
                        size: 20
                    },
                    data: o
                })) + "\n</div>\n" + (null != (a = i["if"].call(l, null != t ? t.showTrackNumber : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '<div class="compactTrackListItem__content sc-truncate">\n' + (null != (a = i["if"].call(l, null != (a = null != t ? t._options : t) ? a.showUser : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '  <span class="compactTrackListItem__trackTitle">\n    ' + c((s = null != (s = i.title || (null != t ? t.title : t)) ? s : u, "function" == typeof s ? s.call(l, {
                    name: "title",
                    hash: {},
                    data: o
                }) : s)) + '\n  </span>\n</div>\n<div class="compactTrackListItem__additional g-flex-row-centered">\n' + (null != (a = i["if"].call(l, null != t ? t.showBlockedMsg : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, o, 0),
                    inverse: e.program(7, o, 0),
                    data: o
                })) ? a : "") + (null != (a = i["if"].call(l, null != (a = null != t ? t._options : t) ? a.showRemoveButton : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(12, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "</div>\n"
            },
            useData: !0
        })
    },
    3018: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var o;
                return "    " + (null != (o = e.lambda(null != (o = null != t ? t._options : t) ? o.confirmText : o, t)) ? o : "") + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = e.lambda,
                    u = e.escapeExpression;
                return '<div class="confirmableForm__text">\n' + (null != (a = i["if"].call(s, null != (a = null != t ? t._options : t) ? a.confirmText : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '</div>\n<div class="confirmableForm__actions">\n  <button type="submit" class="sc-button sc-button-' + u(l(null != (a = null != t ? t._options : t) ? a.size : a, t)) + '">' + u(l(null != (a = null != t ? t._options : t) ? a.confirmButton : a, t)) + '</button>\n  <button type="reset" class="sc-button sc-button-nostyle sc-button-' + u(l(null != (a = null != t ? t._options : t) ? a.size : a, t)) + '">' + u((n(51) || t && t.$t || i.helperMissing).call(s, "Cancel", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</button>\n</div>\n"
            },
            useData: !0
        })
    },
    3019: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var o;
                return "    " + e.escapeExpression(e.lambda(null != (o = null != t ? t._options : t) ? o.text : o, t)) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o;
                return '<div class="dialog__content">\n' + (null != (o = n["if"].call(null != t ? t : {}, null != (o = null != t ? t._options : t) ? o.text : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '</div>\n<div class="dialog__arrow"></div>\n'
            },
            useData: !0
        })
    },
    3020: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o;
                return '<div class="dropbar__content">\n  ' + e.escapeExpression(e.lambda(null != (o = null != t ? t._options : t) ? o.blockContent : o, t)) + "\n</div>\n"
            },
            useData: !0
        })
    },
    3023: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing;
                return "  " + e.escapeExpression((n(52) || t && t.$view || s).call(a, n(1879), {
                    name: "$view",
                    hash: {
                        key: "addTerritory",
                        showAllItems: !1,
                        placeholder: (n(51) || t && t.$t || s).call(a, "Country or continent", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        label: !1,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "countries__addTerritory"
                    },
                    data: o
                })) + "\n"
            },
            3: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = "function",
                    c = e.escapeExpression;
                return '    <li class="countries__territory">\n      <div class="countries__title sc-truncate">' + c((a = null != (a = i.title || (null != t ? t.title : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "title",
                    hash: {},
                    data: o
                }) : a)) + '</div>\n      <button type="button" class="countries__remove g-button-remove-compact" name="remove" data-id="' + c((a = null != (a = i.value || (null != t ? t.value : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "value",
                    hash: {},
                    data: o
                }) : a)) + '">\n        ' + c((n(110) || t && t.$a11y || l).call(s, {
                    name: "$a11y",
                    hash: {
                        screenreader: (n(51) || t && t.$t || l).call(s, "remove continent", {
                            name: "$t",
                            hash: {
                                _comment: "remove continent from list button"
                            },
                            data: o
                        })
                    },
                    data: o
                })) + "\n      </button>\n    </li>\n"
            },
            5: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = "function",
                    c = e.escapeExpression;
                return '    <li class="countries__territory">\n      <div class="countries__title sc-truncate">' + c((a = null != (a = i.title || (null != t ? t.title : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "title",
                    hash: {},
                    data: o
                }) : a)) + '</div>\n      <button type="button" class="countries__remove g-button-remove-compact" name="remove" data-id="' + c((a = null != (a = i.value || (null != t ? t.value : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "value",
                    hash: {},
                    data: o
                }) : a)) + '">\n        ' + c((n(110) || t && t.$a11y || l).call(s, {
                    name: "$a11y",
                    hash: {
                        screenreader: (n(51) || t && t.$t || l).call(s, "remove country", {
                            name: "$t",
                            hash: {
                                _comment: "remove country from list button"
                            },
                            data: o
                        })
                    },
                    data: o
                })) + "\n      </button>\n    </li>\n"
            },
            7: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing;
                return '  <div class="countries__exceptions sc-border-light-top">\n' + (null != (a = i["if"].call(s, null != t ? t.isWorldwide : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, o, 0),
                    inverse: e.program(10, o, 0),
                    data: o
                })) ? a : "") + "    " + e.escapeExpression((n(52) || t && t.$view || l).call(s, n(394), {
                    name: "$view",
                    hash: {
                        regions: null != (a = null != t ? t.territories : t) ? a.regions : a,
                        key: "addException",
                        showAllItems: !1,
                        placeholder: (n(51) || t && t.$t || l).call(s, "Country", {
                            name: "$t",
                            hash: {
                                _context: "Country"
                            },
                            data: o
                        }),
                        label: !1,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "countries__addException"
                    },
                    data: o
                })) + '\n    <ul class="sc-list-nostyle">\n' + (null != (a = i.each.call(s, null != (a = null != t ? t.territories : t) ? a.exceptions : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(12, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "    </ul>\n  </div>\n"
            },
            8: function(e, t, i, r, o) {
                return "      " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Add exceptions", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            10: function(e, t, i, r, o) {
                return "      " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Add exceptions for continents", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            12: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = "function",
                    c = e.escapeExpression;
                return '        <li class="countries__territory">\n          <div class="countries__title sc-truncate">' + c((a = null != (a = i.title || (null != t ? t.title : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "title",
                    hash: {},
                    data: o
                }) : a)) + '</div>\n          <button type="button" class="countries__remove g-button-remove-compact" name="add" data-id="' + c((a = null != (a = i.value || (null != t ? t.value : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "value",
                    hash: {},
                    data: o
                }) : a)) + '">\n            ' + c((n(110) || t && t.$a11y || l).call(s, {
                    name: "$a11y",
                    hash: {
                        screenreader: (n(51) || t && t.$t || l).call(s, "remove exception", {
                            name: "$t",
                            hash: {
                                _comment: "Remove country exception"
                            },
                            data: o
                        })
                    },
                    data: o
                })) + "\n          </button>\n        </li>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, a = null != t ? t : {};
                return (null != (o = n.unless.call(a, null != t ? t.isWorldwide : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '\n<ul class="countries__territories">\n' + (null != (o = n.each.call(a, null != (o = null != t ? t.territories : t) ? o.regions : o, {
                    name: "each",
                    hash: {},
                    fn: e.program(3, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n.each.call(a, null != (o = null != t ? t.territories : t) ? o.countries : o, {
                    name: "each",
                    hash: {},
                    fn: e.program(5, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "</ul>\n\n" + (null != (o = n["if"].call(a, null != (o = null != t ? t.territories : t) ? o.regions : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "")
            },
            useData: !0
        })
    },
    3024: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var o;
                return '  <div>\n    <span class="datetime__label' + (null != (o = n.unless.call(null != t ? t : {}, null != (o = null != t ? t._options : t) ? o.label : o, {
                    name: "unless",
                    hash: {},
                    fn: e.program(2, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '">' + e.escapeExpression(e.lambda(null != (o = null != t ? t._options : t) ? o.label : o, t)) + "</span>\n"
            },
            2: function(e, t, n, i, r) {
                return " sc-visuallyhidden"
            },
            4: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing;
                return "      " + e.escapeExpression((n(52) || t && t.$view || l).call(s, n(1881), {
                    name: "$view",
                    hash: {
                        className: "datetime__timezone",
                        placeholder: (n(51) || t && t.$t || l).call(s, "Select a time zone", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        size: null != t ? t.timezoneSize : t,
                        key: "timezone",
                        field: null != (a = null != t ? t._options : t) ? a.timezoneField : a,
                        Form: null != (a = null != t ? t._options : t) ? a.Form : a,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + "\n"
            },
            6: function(e, t, n, i, r) {
                return "  </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return (null != (a = i["if"].call(s, null != (a = null != t ? t._options : t) ? a.label : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '\n<div class="datetime__inputWrapper">\n  <div class="datetime__fields">\n    <div class="datetime__dateandtime">\n      ' + u((n(52) || t && t.$view || l).call(s, n(297), {
                    name: "$view",
                    hash: {
                        key: "date",
                        minDate: null != (a = null != t ? t._options : t) ? a.minDate : a,
                        defaultDate: null != (a = null != t ? t._options : t) ? a.defaultDate : a,
                        field: null != (a = null != t ? t._options : t) ? a.localDateField : a,
                        Form: null != (a = null != t ? t._options : t) ? a.Form : a,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + '\n      <span class="datetime__at">' + u((n(51) || t && t.$t || l).call(s, "at", {
                    name: "$t",
                    hash: {
                        _comment: "For example, 12/25/2017 at 12:45pm"
                    },
                    data: o
                })) + "</span>\n      " + u((n(52) || t && t.$view || l).call(s, n(1880), {
                    name: "$view",
                    hash: {
                        key: "time",
                        field: null != (a = null != t ? t._options : t) ? a.localDateField : a,
                        Form: null != (a = null != t ? t._options : t) ? a.Form : a,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + '\n      <div class="datetime__validation g-input-validation g-input-validation-hidden"></div>\n    </div>\n' + (null != (a = i["if"].call(s, null != (a = null != t ? t._options : t) ? a.timezoneField : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "  </div>\n</div>\n\n" + (null != (a = i["if"].call(s, null != (a = null != t ? t._options : t) ? a.label : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(6, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "")
            },
            useData: !0
        })
    },
    3025: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing;
                return '  <div class="isrcField__createIsrc">\n    ' + e.escapeExpression((n(52) || t && t.$view || l).call(s, n(90), {
                    name: "$view",
                    hash: {
                        label: (n(51) || t && t.$t || l).call(s, "Create an ISRC for this track.", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        showLabel: null != t ? t.showCreateISRCLabel : t,
                        field: "publisherIsrcGenerated",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != (a = null != t ? t._options : t) ? a.Form : a
                    },
                    data: o
                })) + "\n  </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s = null != t ? t : {};
                return '<div class="isrcField__textfield">\n  ' + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(s, n(60), {
                    name: "$view",
                    hash: {
                        key: "publisherIsrc",
                        hintHTML: null != t ? t.isrcFieldHint : t,
                        label: null != t ? t.isrcFieldLabel : t,
                        placeholder: null != t ? t.isrcFieldPlaceholder : t,
                        field: "publisherIsrc",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != (a = null != t ? t._options : t) ? a.Form : a
                    },
                    data: o
                })) + "\n</div>\n\n" + (null != (a = i["if"].call(s, null != t ? t.allowIsrcGeneration : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "")
            },
            useData: !0
        })
    },
    3026: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var o;
                return '  <label>\n    <div class="select__labelText g-flex-row-centered">\n      ' + e.escapeExpression(e.lambda(null != (o = null != t ? t._options : t) ? o.label : o, t)) + "\n" + (null != (o = n["if"].call(null != t ? t : {}, null != (o = null != t ? t._options : t) ? o.hintHTML : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "    </div>\n"
            },
            2: function(e, t, i, r, o) {
                var a;
                return null != (a = (n(52) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(113), {
                    name: "$view",
                    hash: {
                        className: "select__labelHint",
                        size: "tiny"
                    },
                    fn: e.program(3, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : ""
            },
            3: function(e, t, n, i, r) {
                var o;
                return "          " + (null != (o = e.lambda(null != (o = null != t ? t._options : t) ? o.hintHTML : o, t)) ? o : "") + "\n"
            },
            5: function(e, t, n, i, r) {
                return '    <div class="select__linkMenuPlaceholder"></div>\n  '
            },
            7: function(e, t, n, i, r) {
                var o, a = null != t ? t : {};
                return '\n    <select class="select__select sc-select sc-select-' + e.escapeExpression(e.lambda(null != (o = null != t ? t._options : t) ? o.size : o, t)) + '">\n' + (null != (o = n["if"].call(a, null != (o = null != t ? t._options : t) ? o.showBlank : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n.each.call(a, null != t ? t.options : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(10, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "    </select>\n"
            },
            8: function(e, t, n, i, r) {
                var o;
                return '        <option value="">' + e.escapeExpression(e.lambda(null != (o = null != t ? t._options : t) ? o.blankText : o, t)) + "</option>\n"
            },
            10: function(e, t, n, i, r) {
                var o, a, s = null != t ? t : {},
                    l = n.helperMissing,
                    u = "function",
                    c = e.escapeExpression;
                return "        <option " + (null != (o = n["if"].call(s, null != t ? t.disabled : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(11, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + ' value="' + c((a = null != (a = n.value || (null != t ? t.value : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "value",
                    hash: {},
                    data: r
                }) : a)) + '">' + c((a = null != (a = n.label || (null != t ? t.label : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "label",
                    hash: {},
                    data: r
                }) : a)) + "</option>\n"
            },
            11: function(e, t, n, i, r) {
                return 'disabled="disabled" '
            },
            13: function(e, t, n, i, r) {
                return "  </label>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, a = null != t ? t : {};
                return (null != (o = n["if"].call(a, null != (o = null != t ? t._options : t) ? o.label : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '\n<div class="select__wrapper">\n' + (null != (o = n["if"].call(a, null != t ? t.style_is_linkMenu : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, r, 0),
                    inverse: e.program(7, r, 0),
                    data: r
                })) ? o : "") + '  <div class="select__validation g-input-validation g-input-validation-hidden"></div>\n</div>\n\n' + (null != (o = n["if"].call(a, null != (o = null != t ? t._options : t) ? o.label : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(13, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "")
            },
            useData: !0
        })
    },
    3027: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var o, a, s = null != t ? t : {},
                    l = n.helperMissing,
                    u = "function",
                    c = e.escapeExpression;
                return '  <label for="' + c((a = null != (a = n._controlId || (null != t ? t._controlId : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "_controlId",
                    hash: {},
                    data: r
                }) : a)) + '">\n    <span class="textfield__label' + (null != (o = n.unless.call(s, null != (o = null != t ? t._options : t) ? o.label : o, {
                    name: "unless",
                    hash: {},
                    fn: e.program(2, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '"> ' + c((a = null != (a = n._label || (null != t ? t._label : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "_label",
                    hash: {},
                    data: r
                }) : a)) + "</span>\n" + (null != (o = n["if"].call(s, null != (o = null != t ? t._options : t) ? o.hintHTML : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "  </label>\n"
            },
            2: function(e, t, n, i, r) {
                return " sc-visuallyhidden"
            },
            4: function(e, t, i, r, o) {
                var a;
                return null != (a = (n(52) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(113), {
                    name: "$view",
                    hash: {
                        size: "tiny"
                    },
                    fn: e.program(5, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : ""
            },
            5: function(e, t, n, i, r) {
                var o;
                return "        " + (null != (o = e.lambda(null != (o = null != t ? t._options : t) ? o.hintHTML : o, t)) ? o : "") + "\n"
            },
            7: function(e, t, n, i, r) {
                var o, a, s = e.lambda,
                    l = e.escapeExpression,
                    u = null != t ? t : {},
                    c = n.helperMissing,
                    d = "function";
                return '    <textarea\n      class="textfield__input sc-input sc-input-' + l(s(null != (o = null != t ? t._options : t) ? o.size : o, t)) + '"\n      id="' + l((a = null != (a = n._controlId || (null != t ? t._controlId : t)) ? a : c, typeof a === d ? a.call(u, {
                    name: "_controlId",
                    hash: {},
                    data: r
                }) : a)) + '"\n      rows=' + l(s(null != (o = null != t ? t._options : t) ? o.rows : o, t)) + "\n      " + (null != (o = n["if"].call(u, null != t ? t.readOnly : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "\n      " + (null != (o = n["if"].call(u, null != t ? t.disabled : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "\n      " + (null != (o = n["if"].call(u, null != (o = null != t ? t._options : t) ? o.name : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(12, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "\n      " + (null != (o = n["if"].call(u, null != (o = null != t ? t._options : t) ? o.placeholder : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(14, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "\n    >" + l((a = null != (a = n._value || (null != t ? t._value : t)) ? a : c, typeof a === d ? a.call(u, {
                    name: "_value",
                    hash: {},
                    data: r
                }) : a)) + "</textarea>\n"
            },
            8: function(e, t, n, i, r) {
                return 'readonly="readonly"'
            },
            10: function(e, t, n, i, r) {
                return 'disabled="disabled"'
            },
            12: function(e, t, n, i, r) {
                var o;
                return 'name="' + e.escapeExpression(e.lambda(null != (o = null != t ? t._options : t) ? o.name : o, t)) + '"'
            },
            14: function(e, t, n, i, r) {
                var o;
                return 'placeholder="' + e.escapeExpression(e.lambda(null != (o = null != t ? t._options : t) ? o.placeholder : o, t)) + '"'
            },
            16: function(e, t, n, i, r) {
                var o, a, s = e.lambda,
                    l = e.escapeExpression,
                    u = null != t ? t : {},
                    c = n.helperMissing,
                    d = "function";
                return '    <input\n      class="textfield__input sc-input sc-input-' + l(s(null != (o = null != t ? t._options : t) ? o.size : o, t)) + (null != (o = n["if"].call(u, null != (o = null != t ? t._options : t) ? o.applyAllButton : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(17, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '"\n      id="' + l((a = null != (a = n._controlId || (null != t ? t._controlId : t)) ? a : c, typeof a === d ? a.call(u, {
                    name: "_controlId",
                    hash: {},
                    data: r
                }) : a)) + '"\n      type="' + l(s(null != (o = null != t ? t._options : t) ? o.type : o, t)) + '"\n      value="' + l((a = null != (a = n._value || (null != t ? t._value : t)) ? a : c, typeof a === d ? a.call(u, {
                    name: "_value",
                    hash: {},
                    data: r
                }) : a)) + '"\n      ' + (null != (o = n["if"].call(u, null != t ? t.readOnly : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "\n      " + (null != (o = n["if"].call(u, null != t ? t.disabled : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "\n      " + (null != (o = n["if"].call(u, null != (o = null != t ? t._options : t) ? o.name : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(12, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "\n      " + (null != (o = n["if"].call(u, null != (o = null != t ? t._options : t) ? o.maxlength : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(19, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "\n      " + (null != (o = n["if"].call(u, null != (o = null != t ? t._options : t) ? o.placeholder : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(14, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "\n      " + (null != (o = n["if"].call(u, null != (o = null != t ? t._options : t) ? o.autocomplete : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(21, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "\n    >\n"
            },
            17: function(e, t, n, i, r) {
                return " textfield__inputApplyAll"
            },
            19: function(e, t, n, i, r) {
                var o;
                return 'maxlength="' + e.escapeExpression(e.lambda(null != (o = null != t ? t._options : t) ? o.maxlength : o, t)) + '"'
            },
            21: function(e, t, n, i, r) {
                var o;
                return 'autocomplete="' + e.escapeExpression(e.lambda(null != (o = null != t ? t._options : t) ? o.autocomplete : o, t)) + '"'
            },
            23: function(e, t, i, r, o) {
                return '    <button\n      type="button"\n      class="textfield__clear"\n      title="' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Clear", {
                    name: "$t",
                    hash: {
                        _comment: "Clear a textbox of its content",
                        _context: "verb"
                    },
                    data: o
                })) + '"\n    ></button>\n'
            },
            25: function(e, t, i, r, o) {
                return '    <button\n      type="button"\n      class="textfield__applyAll"\n      title="' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Apply to all", {
                    name: "$t",
                    hash: {
                        _comment: "Apply the content of a textfield to all other textfields in a column"
                    },
                    data: o
                })) + '"\n    ></button>\n'
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, a = null != t ? t : {};
                return (null != (o = n["if"].call(a, null != t ? t._label : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '\n<div class="textfield__inputWrapper">\n' + (null != (o = n["if"].call(a, null != t ? t.isTextarea : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, r, 0),
                    inverse: e.program(16, r, 0),
                    data: r
                })) ? o : "") + (null != (o = n["if"].call(a, null != (o = null != t ? t._options : t) ? o.clearButton : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(23, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n["if"].call(a, null != (o = null != t ? t._options : t) ? o.applyAllButton : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(25, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '  <div class="textfield__validation g-input-validation g-input-validation-hidden"></div>\n</div>\n'
            },
            useData: !0
        })
    },
    3029: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var o, a = e.lambda,
                    s = e.escapeExpression;
                return '  <label class="tokenInput__label" for="tokenInput__' + s(a(null != (o = null != t ? t._options : t) ? o.field : o, t)) + '">' + s(a(null != (o = null != t ? t._options : t) ? o.label : o, t)) + "</label>\n"
            },
            3: function(e, t, n, i, r) {
                var o;
                return 'placeholder="' + e.escapeExpression(e.lambda(null != (o = null != t ? t._options : t) ? o.placeholder : o, t)) + '"'
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, a = null != t ? t : {};
                return (null != (o = n["if"].call(a, null != (o = null != t ? t._options : t) ? o.label : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '\n<div class="tokenInput__wrapper sc-input">\n  <div class="tokenInput__inputContainer">\n    <input\n      type="text"\n      class="tokenInput__input"\n      id="tokenInput__' + e.escapeExpression(e.lambda(null != (o = null != t ? t._options : t) ? o.field : o, t)) + '"\n      ' + (null != (o = n["if"].call(a, null != (o = null != t ? t._options : t) ? o.placeholder : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '\n    >\n  </div>\n</div>\n<div class="tokenInput__validation g-input-validation g-input-validation-hidden"></div>\n'
            },
            useData: !0
        })
    },
    3030: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                return '<div class="backgroundGradient__buffer"></div>\n<div class="backgroundGradient__buffer backgroundGradient__hidden"></div>\n<div class="backgroundGradient__imageOverlay"></div>\n'
            },
            useData: !0
        })
    },
    3031: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, a = e.lambda,
                    s = e.escapeExpression;
                return '<button type="button" class="imageChooser__chooseButton sc-button sc-button-translucent ' + s(a(null != (o = null != t ? t._options : t) ? o.buttonClass : o, t)) + '">' + s(a(null != (o = null != t ? t._options : t) ? o.text : o, t)) + '</button>\n<input class="imageChooser__fileInput sc-visuallyhidden" type="file" accept="image/jpeg,image/pjpeg,image/gif,image/png">\n'
            },
            useData: !0
        })
    },
    3032: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                return " imageCrop__previewBackground"
            },
            3: function(e, t, n, i, r) {
                return '      <div class="imageCrop__preview imageCrop__previewRounded"></div>\n'
            },
            5: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing,
                    l = e.escapeExpression;
                return '      <button type="button" class="sc-button sc-button-medium sc-button-nostyle imageCrop__cancelButton">' + l((n(51) || t && t.$t || s).call(a, "Cancel", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</button>\n      <button type="button" class="sc-button sc-button-medium sc-button-cta imageCrop__saveButton">' + l((n(51) || t && t.$t || s).call(a, "Save", {
                    name: "$t",
                    hash: {
                        _comment: "Label for button to save a form"
                    },
                    data: o
                })) + "</button>\n"
            },
            7: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing;
                return "      " + e.escapeExpression((n(52) || t && t.$view || l).call(s, n(1448), {
                    name: "$view",
                    hash: {
                        onImageRejected: null != (a = null != t ? t._options : t) ? a.onImageRejected : a,
                        maxSrcSize: null != (a = null != t ? t._options : t) ? a.maxSrcSize : a,
                        minSrcSize: null != (a = null != t ? t._options : t) ? a.minSrcSize : a,
                        buttonClass: "",
                        text: (n(51) || t && t.$t || l).call(s, "Replace image", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        standAlone: !1
                    },
                    data: o
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, a = null != t ? t : {};
                return '<div class="imageCrop__cropper">\n  <div class="imageCrop__previewContainer sc-artwork">\n    <div class="imageCrop__preview' + (null != (o = n["if"].call(a, null != (o = null != t ? t._options : t) ? o.showRoundOverlay : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '"></div>\n' + (null != (o = n["if"].call(a, null != (o = null != t ? t._options : t) ? o.showRoundOverlay : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '  </div>\n</div>\n<div class="imageCrop__bottom g-flex-row-centered-right">\n  <div class="imageCrop__zoomContainer">\n    <div class="imageCrop__zoom">\n      <button type="button" class="imageCrop__zoomControl imageCrop__zoomControlMinus">-</button>\n      <input type="range" class="imageCrop__zoomSlider g-range-input">\n      <button type="button" class="imageCrop__zoomControl imageCrop__zoomControlPlus">+</button>\n    </div>\n  </div>\n  <div class="imageCrop__smallImage imageCrop__smallHint sc-orange g-icon-warning"></div>\n  <div class="imageCrop__error sc-type-small sc-orange"></div>\n  <div class="imageCrop__mainButtons sc-button-toolbar g-flex-row-centered">\n' + (null != (o = n["if"].call(a, null != (o = null != t ? t._options : t) ? o.standAlone : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, r, 0),
                    inverse: e.program(7, r, 0),
                    data: r
                })) ? o : "") + "  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    3033: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var a;
                return "  " + e.escapeExpression((n(229) || t && t.$image || i.helperMissing).call(null != t ? t : {}, t, {
                    name: "$image",
                    hash: {
                        placeholderType: null != (a = null != t ? t._options : t) ? a.placeholderType : a,
                        forceSquare: null != (a = null != t ? t._options : t) ? a.forceSquare : a,
                        stretch: null != (a = null != t ? t._options : t) ? a.stretch : a,
                        "class": "image__placeholder",
                        size: null != t ? t.size : t,
                        src: null != t ? t.placeholderUrl : t
                    },
                    data: o
                })) + "\n"
            },
            3: function(e, t, i, r, o) {
                var a;
                return '  <div class="image__button">\n    ' + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1448), {
                    name: "$view",
                    hash: {
                        text: null != t ? t.imageChooserText : t,
                        standAlone: null != (a = null != t ? t._options : t) ? a.uploadImageAutomatically : a,
                        onImageRejected: null != (a = null != t ? t._options : t) ? a.onImageRejected : a,
                        maxSrcSize: null != (a = null != t ? t._options : t) ? a.maxSrcSize : a,
                        minSrcSize: null != (a = null != t ? t._options : t) ? a.minSrcSize : a,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + "\n  </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s = null != t ? t : {};
                return (null != (a = i["if"].call(s, null != t ? t.placeholderUrl : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "\n" + e.escapeExpression((n(229) || t && t.$image || i.helperMissing).call(s, t, {
                    name: "$image",
                    hash: {
                        placeholderType: null != (a = null != t ? t._options : t) ? a.placeholderType : a,
                        forceSquare: null != (a = null != t ? t._options : t) ? a.forceSquare : a,
                        stretch: null != (a = null != t ? t._options : t) ? a.stretch : a,
                        "class": "image__full",
                        useResourceUrl: null != t ? t.useResourceUrl : t,
                        size: null != t ? t.size : t,
                        src: null != t ? t.src : t
                    },
                    data: o
                })) + "\n\n" + (null != (a = i["if"].call(s, null != (a = null != t ? t._options : t) ? a.editable : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "")
            },
            useData: !0
        })
    },
    3034: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var o, a = null != t ? t : {};
                return '        <section class="linkMenu__group">\n' + (null != (o = n["if"].call(a, null != t ? t.title : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '          <ul class="sc-list-nostyle ' + (null != (o = n["if"].call(a, null != t ? t.isBold : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '">\n' + (null != (o = n.each.call(a, null != t ? t.links : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(6, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "          </ul>\n        </section>\n"
            },
            2: function(e, t, n, i, r) {
                var o;
                return '            <h3 class="sc-border-light-bottom linkMenu__groupTitle sc-type-light">' + e.escapeExpression((o = null != (o = n.title || (null != t ? t.title : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != t ? t : {}, {
                    name: "title",
                    hash: {},
                    data: r
                }) : o)) + "</h3>\n"
            },
            4: function(e, t, n, i, r) {
                return "linkMenu__bold"
            },
            6: function(e, t, n, i, r) {
                var o, a, s = null != t ? t : {},
                    l = n.helperMissing,
                    u = "function",
                    c = e.escapeExpression;
                return '              <li class="' + (null != (o = n["if"].call(s, null != t ? t.active : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n["if"].call(s, null != t ? t.disabled : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(9, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + 'linkMenu__item sc-type-small">\n                <' + c((a = null != (a = n.tagName || (null != t ? t.tagName : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "tagName",
                    hash: {},
                    data: r
                }) : a)) + ' class="sc-link-dark sc-truncate g-block" href="' + c((a = null != (a = n.href || (null != t ? t.href : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "href",
                    hash: {},
                    data: r
                }) : a)) + '" data-link-id="' + c((a = null != (a = n.id || (null != t ? t.id : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "id",
                    hash: {},
                    data: r
                }) : a)) + '">' + c((a = null != (a = n.label || (null != t ? t.label : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "label",
                    hash: {},
                    data: r
                }) : a)) + "</" + c((a = null != (a = n.tagName || (null != t ? t.tagName : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "tagName",
                    hash: {},
                    data: r
                }) : a)) + ">\n              </li>\n"
            },
            7: function(e, t, n, i, r) {
                return "linkMenu__activeItem "
            },
            9: function(e, t, n, i, r) {
                return "linkMenu__disabledItem "
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o;
                return '<div class="g-scrollable linkMenu__scrollable">\n  <div class="g-scrollable-inner">\n    <div class="linkMenu__list">\n' + (null != (o = n.each.call(null != t ? t : {}, null != t ? t.groups : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "    </div>\n  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    3046: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var o;
                return '  <button type="button" class="announcement__ack sc-button sc-button-medium">' + e.escapeExpression(e.lambda(null != (o = null != t ? t._options : t) ? o.ackText : o, t)) + "</button>\n"
            },
            3: function(e, t, i, r, o) {
                return '  <a href="" class="announcement__dismiss" aria-role="button" title="' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Dismiss", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '"></a>\n'
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, a, s = null != t ? t : {};
                return '<span class="announcement__message">' + (null != (a = null != (a = n.message || (null != t ? t.message : t)) ? a : n.helperMissing, o = "function" == typeof a ? a.call(s, {
                    name: "message",
                    hash: {},
                    data: r
                }) : a) ? o : "") + "</span>\n" + (null != (o = n["if"].call(s, null != (o = null != t ? t._options : t) ? o.ackText : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.program(3, r, 0),
                    data: r
                })) ? o : "")
            },
            useData: !0
        })
    },
    3047: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var o;
                return '    <div class="l-product-banners l-inner-fullwidth">\n' + (null != (o = n.each.call(null != t ? t : {}, null != t ? t.productBanners : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(2, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "    </div>\n"
            },
            2: function(e, t, i, r, o) {
                return "        " + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(null != t ? t : {}, null != t ? t.BannerView : t, {
                    name: "$view",
                    hash: {
                        className: "l-container"
                    },
                    data: o
                })) + "\n"
            },
            4: function(e, t, i, r, o) {
                return "  " + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(2204), {
                    name: "$view",
                    hash: {},
                    data: o
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return u((n(52) || t && t.$view || l).call(s, n(1992), {
                    name: "$view",
                    hash: {},
                    data: o
                })) + "\n" + u((n(52) || t && t.$view || l).call(s, n(1909), {
                    name: "$view",
                    hash: {
                        className: "g-z-index-header"
                    },
                    data: o
                })) + '\n\n<div class="l-container l-content">\n' + (null != (a = i["if"].call(s, null != (a = null != t ? t.productBanners : t) ? a.length : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '  <div id="content" role="main"></div>\n</div>\n\n' + u((n(52) || t && t.$view || l).call(s, n(2069), {
                    name: "$view",
                    hash: {},
                    data: o
                })) + "\n\n" + (null != (a = i["if"].call(s, null != t ? t.showStagingMenu : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "\n" + u((n(52) || t && t.$view || l).call(s, n(2097), {
                    name: "$view",
                    hash: {},
                    data: o
                })) + "\n\n"
            },
            useData: !0
        })
    },
    3057: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression,
                    d = "function";
                return '<div class="readMoreTile__tile">\n  ' + c((n(52) || t && t.$view || u).call(l, n(275), {
                    name: "$view",
                    hash: {
                        resource_type: null != (a = null != (a = null != t ? t._options : t) ? a.subviewArgs : a) ? a.resource_type : a,
                        resource_id: null != (a = null != (a = null != t ? t._options : t) ? a.subviewArgs : a) ? a.resource_id : a
                    },
                    data: o
                })) + '\n</div>\n\n<a class="readMoreTile__countWrapper sc-type-h3 sc-link-dark" href="' + c((s = null != (s = i.href || (null != t ? t.href : t)) ? s : u, typeof s === d ? s.call(l, {
                    name: "href",
                    hash: {},
                    data: o
                }) : s)) + '">\n  <span class="readMoreTile__count">' + c((s = null != (s = i.readMoreText || (null != t ? t.readMoreText : t)) ? s : u, typeof s === d ? s.call(l, {
                    name: "readMoreText",
                    hash: {},
                    data: o
                }) : s)) + "</span>\n</a>\n"
            },
            useData: !0
        })
    },
    3058: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression,
                    d = "function";
                return '<div class="readMoreTile__tile">\n  ' + c((n(52) || t && t.$view || u).call(l, n(536), {
                    name: "$view",
                    hash: {
                        resource_type: null != (a = null != (a = null != t ? t._options : t) ? a.subviewArgs : a) ? a.resource_type : a,
                        resource_id: null != (a = null != (a = null != t ? t._options : t) ? a.subviewArgs : a) ? a.resource_id : a
                    },
                    data: o
                })) + '\n</div>\n\n<a class="readMoreTile__countWrapper sc-type-h3 sc-link-dark" href="' + c((s = null != (s = i.href || (null != t ? t.href : t)) ? s : u, typeof s === d ? s.call(l, {
                    name: "href",
                    hash: {},
                    data: o
                }) : s)) + '">\n  <span class="readMoreTile__count">' + c((s = null != (s = i.readMoreText || (null != t ? t.readMoreText : t)) ? s : u, typeof s === d ? s.call(l, {
                    name: "readMoreText",
                    hash: {},
                    data: o
                }) : s)) + "</span>\n</a>\n"
            },
            useData: !0
        })
    },
    3059: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var a, s, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = "function",
                    d = e.escapeExpression;
                return '  <div class="commentForm__wrapper commentForm__transition">\n    <div class="commentForm__avatar">\n' + (null != (a = i["if"].call(l, null != t ? t.isLarge : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, o, 0),
                    inverse: e.program(4, o, 0),
                    data: o
                })) ? a : "") + '    </div>\n    <div class="commentForm__inputWrapper sc-border-box">\n      <a class="commentForm__recipient" href="#"></a>\n      <input\n        type="text"\n        title="' + d((s = null != (s = i.inputTitle || (null != t ? t.inputTitle : t)) ? s : u, typeof s === c ? s.call(l, {
                    name: "inputTitle",
                    hash: {},
                    data: o
                }) : s)) + '"\n        placeholder="' + d((s = null != (s = i.inputTitle || (null != t ? t.inputTitle : t)) ? s : u, typeof s === c ? s.call(l, {
                    name: "inputTitle",
                    hash: {},
                    data: o
                }) : s)) + '"\n        value="' + d((s = null != (s = i.body || (null != t ? t.body : t)) ? s : u, typeof s === c ? s.call(l, {
                    name: "body",
                    hash: {},
                    data: o
                }) : s)) + '"\n        class="commentForm__input sc-border-box"\n      />\n    </div>\n  </div>\n  <div class="commentForm__inputMessage g-input-validation g-input-validation-hidden">\n    ' + d((n(51) || t && t.$t || u).call(l, "Comment must not exceed [[maxLength]] characters", {
                    name: "$t",
                    hash: {
                        maxLength: null != t ? t.maxLength : t
                    },
                    data: o
                })) + "\n  </div>\n"
            },
            2: function(e, t, i, r, o) {
                return "        " + e.escapeExpression((n(229) || t && t.$image || i.helperMissing).call(null != t ? t : {}, null != t ? t.me : t, {
                    name: "$image",
                    hash: {
                        forceSquare: !0,
                        key: "avatar",
                        size: 40
                    },
                    data: o
                })) + "\n"
            },
            4: function(e, t, i, r, o) {
                return "        " + e.escapeExpression((n(229) || t && t.$image || i.helperMissing).call(null != t ? t : {}, null != t ? t.me : t, {
                    name: "$image",
                    hash: {
                        forceSquare: !0,
                        key: "avatar",
                        size: 20
                    },
                    data: o
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o;
                return null != (o = n["if"].call(null != t ? t : {}, null != t ? t.isVisible : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : ""
            },
            useData: !0
        })
    },
    3061: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a;
                return '<div class="commentPlaceholder__avatar">\n  ' + e.escapeExpression((n(229) || t && t.$image || i.helperMissing).call(null != t ? t : {}, null != t ? t.me : t, {
                    name: "$image",
                    hash: {
                        forceSquare: !0,
                        size: null != (a = null != t ? t._options : t) ? a.avatarSize : a,
                        "aria-hidden": "true"
                    },
                    data: o
                })) + "\n</div>\n"
            },
            useData: !0
        })
    },
    3062: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, a, s = e.escapeExpression,
                    l = e.lambda;
                return '<div class="commentPopover__scrub">\n  <div class="commentPopover__playableArea" style="width: ' + s((a = null != (a = n.playablePercentage || (null != t ? t.playablePercentage : t)) ? a : n.helperMissing, "function" == typeof a ? a.call(null != t ? t : {}, {
                    name: "playablePercentage",
                    hash: {},
                    data: r
                }) : a)) + '%"></div>\n</div>\n\n<div class="commentPopover__wrapper g-opacity-transition">\n  <div class="commentPopover__avatar sc-artwork" style="width: ' + s(l(null != (o = null != t ? t._options : t) ? o.avatarSize : o, t)) + "px; height: " + s(l(null != (o = null != t ? t._options : t) ? o.avatarSize : o, t)) + 'px;"></div>\n  <a class="commentPopover__username sc-truncate" href=""></a>\n  <p class="commentPopover__body sc-truncate"></p>\n</div>\n'
            },
            useData: !0
        })
    },
    3064: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing,
                    l = e.escapeExpression;
                return "  " + l((n(52) || t && t.$view || s).call(a, n(188), {
                    name: "$view",
                    hash: {
                        className: "deleteCommentForm__spam sc-text-light",
                        label: (n(51) || t && t.$t || s).call(a, "Also report comment as spam.", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        name: "is_spam"
                    },
                    data: o
                })) + "\n  " + l((n(52) || t && t.$view || s).call(a, n(188), {
                    name: "$view",
                    hash: {
                        className: "deleteCommentForm__spam sc-text-light",
                        label: (n(51) || t && t.$t || s).call(a, "Also block and report user as spam.", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        name: "is_user_spam"
                    },
                    data: o
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return u((n(51) || t && t.$t || l).call(s, "Do you really want to remove this comment?", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "<br>\n\n" + (null != (a = i.unless.call(s, null != t ? t.isMine : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '\n<div class="deleteCommentForm__actions">\n  <button type="reset"  class="sc-button sc-button-small">' + u((n(51) || t && t.$t || l).call(s, "Cancel", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</button>\n  <button type="submit" class="sc-button sc-button-small">' + u((n(51) || t && t.$t || l).call(s, "Yes", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</button>\n</div>\n"
            },
            useData: !0
        })
    },
    3072: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var o, a = null != t ? t : {};
                return (null != (o = n["if"].call(a, null != t ? t.isAd : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '  <section class="dashbox__wrapper">\n' + (null != (o = n["if"].call(a, null != t ? t.isVisualDashbox : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n["if"].call(a, null != t ? t.isStandardDashbox : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "  </section>\n"
            },
            2: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing,
                    l = e.escapeExpression;
                return '    <div class="dashbox__header sc-border-light-bottom">\n      <h3 class="sc-type-light">\n        <span>\n          ' + l((n(51) || t && t.$t || s).call(a, "Advertisement", {
                    name: "$t",
                    hash: {
                        _comment: "Sidebar module title"
                    },
                    data: o
                })) + '\n        </span>\n        <a href="#" class="sc-link-light sc-right">\n          ' + l((n(51) || t && t.$t || s).call(a, "Why ads?", {
                    name: "$t",
                    hash: {
                        _comment: "Sidebar module `Advertisement` help text, opens modal with explanation"
                    },
                    data: o
                })) + "\n        </a>\n      </h3>\n    </div>\n"
            },
            4: function(e, t, n, i, r) {
                var o, a, s = null != t ? t : {},
                    l = n.helperMissing,
                    u = "function",
                    c = e.escapeExpression;
                return '      <a class="dashbox__visual" href="' + c((a = null != (a = n.landing_page || (null != t ? t.landing_page : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "landing_page",
                    hash: {},
                    data: r
                }) : a)) + '" ' + (null != (o = n["if"].call(s, null != t ? t.openInNewTab : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '>\n        <img src="' + c((a = null != (a = n.ad_visual || (null != t ? t.ad_visual : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "ad_visual",
                    hash: {},
                    data: r
                }) : a)) + '" height="250" width="300">\n      </a>\n'
            },
            5: function(e, t, n, i, r) {
                return 'target="_blank"'
            },
            7: function(e, t, n, i, r) {
                var o, a, s = null != t ? t : {},
                    l = n.helperMissing,
                    u = "function",
                    c = e.escapeExpression;
                return '      <a class="dashbox__box sc-background-light" href="' + c((a = null != (a = n.click_through_url || (null != t ? t.click_through_url : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "click_through_url",
                    hash: {},
                    data: r
                }) : a)) + '" ' + (null != (o = n["if"].call(s, null != t ? t.openInNewTab : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '>\n        <div class="dashbox__icon">\n          <img src="' + c((a = null != (a = n.icon_url || (null != t ? t.icon_url : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "icon_url",
                    hash: {},
                    data: r
                }) : a)) + '" alt=' + c((a = null != (a = n.title || (null != t ? t.title : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "title",
                    hash: {},
                    data: r
                }) : a)) + ' height="78" width="78">\n        </div>\n        <div class="dashbox__content">\n' + (null != (o = n.each.call(s, null != t ? t.title : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(8, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n.each.call(s, null != t ? t.body : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(10, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '        </div>\n        <div class="dashbox__cta">\n          <span class="dashbox__ctaLabel sc-button sc-button-cta sc-browsers-enable-gpu sc-truncate">' + c((a = null != (a = n.button_text || (null != t ? t.button_text : t)) ? a : l, typeof a === u ? a.call(s, {
                    name: "button_text",
                    hash: {},
                    data: r
                }) : a)) + "</span>\n        </div>\n      </a>\n"
            },
            8: function(e, t, n, i, r) {
                return '            <h2 class="dashbox__titleLine">' + e.escapeExpression(e.lambda(t, t)) + "</h2>\n"
            },
            10: function(e, t, n, i, r) {
                return '            <p class="dashbox__bodyLine sc-type-light sc-font-body">' + e.escapeExpression(e.lambda(t, t)) + "</p>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o;
                return null != (o = n["if"].call(null != t ? t : {}, null != t ? t.hasContent : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : ""
            },
            useData: !0
        })
    },
    3076: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                return "    " + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(664), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + "\n"
            },
            3: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing;
                return null != (a = (n(52) || t && t.$view || l).call(s, n(104), {
                    name: "$view",
                    hash: {
                        field: "downloadable",
                        label: (n(51) || t && t.$t || l).call(s, "Enable direct downloads", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(4, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : ""
            },
            4: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '          <p class="editAccessTab__showDownloadableConstraint">\n            ' + u((n(51) || t && t.$t || l).call(s, "This setting cannot be changed. For more information, contact your label.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '\n          </p>\n          <div class="showChecked">\n            <p class="blockCheckbox__contentParagraph">\n' + (null != (a = i["if"].call(s, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, o, 0),
                    inverse: e.program(7, o, 0),
                    data: o
                })) ? a : "") + '            </p>\n            <p class="blockCheckbox__contentParagraph blockCheckbox__warning editAccessTab__showCopyrightWarning">\n              ' + u((n(51) || t && t.$t || l).call(s, "Distributing content without permission is unlawful. Make sure you have all necessary rights.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '\n            </p>\n          </div>\n          <span class="showUnchecked">\n' + (null != (a = i["if"].call(s, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(9, o, 0),
                    inverse: e.program(11, o, 0),
                    data: o
                })) ? a : "") + "          </span>\n"
            },
            5: function(e, t, i, r, o) {
                return "                " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This track will be available for direct download in the original format it was uploaded.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            7: function(e, t, i, r, o) {
                return "                " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "All tracks will be available for direct download in the original format they were uploaded.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            9: function(e, t, i, r, o) {
                return "              " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This track will not be available for download in the original format it was uploaded.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            11: function(e, t, i, r, o) {
                return "              " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "No tracks will be available for download in the original format they were uploaded.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            13: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing;
                return null != (a = (n(52) || t && t.$view || l).call(s, n(104), {
                    name: "$view",
                    hash: {
                        disabled: !0,
                        field: "downloadable",
                        label: (n(51) || t && t.$t || l).call(s, "Downloads disabled", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(14, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : ""
            },
            14: function(e, t, n, i, r) {
                var o;
                return null != (o = n["if"].call(null != t ? t : {}, null != t ? t.previousCopyrightIssues : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(15, r, 0),
                    inverse: e.program(18, r, 0),
                    data: r
                })) ? o : ""
            },
            15: function(e, t, i, r, o) {
                var a, s, l, u = "";
                return s = null != (s = n(51) || (null != t ? t.$t : t)) ? s : i.helperMissing, l = {
                    name: "$t",
                    hash: {},
                    fn: e.program(16, o, 0),
                    inverse: e.noop,
                    data: o
                }, a = "function" == typeof s ? s.call(null != t ? t : {}, l) : s, n(51) || (a = i.blockHelperMissing.call(t, a, l)), null != a && (u += a), u
            },
            16: function(e, t, n, i, r) {
                return '              Downloads are disabled due to copyright infringement. For details, refer to the <a href="https://copyright.soundcloud.com/">Copyright claim center</a>.\n'
            },
            18: function(e, t, i, r, o) {
                var a, s, l, u = "";
                return s = null != (s = n(51) || (null != t ? t.$t : t)) ? s : i.helperMissing, l = {
                    name: "$t",
                    hash: {},
                    fn: e.program(19, o, 0),
                    inverse: e.noop,
                    data: o
                }, a = "function" == typeof s ? s.call(null != t ? t : {}, l) : s, n(51) || (a = i.blockHelperMissing.call(t, a, l)), null != a && (u += a), u
            },
            19: function(e, t, n, i, r) {
                return "              Downloads are disabled at the request of your rightsholder. For more information, contact your label or distributor.\n"
            },
            21: function(e, t, n, i, r) {
                var o, a = null != t ? t : {};
                return '        <span class="showChecked">\n' + (null != (o = n["if"].call(a, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(22, r, 0),
                    inverse: e.program(24, r, 0),
                    data: r
                })) ? o : "") + '        </span>\n        <span class="showUnchecked">\n' + (null != (o = n["if"].call(a, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(26, r, 0),
                    inverse: e.program(28, r, 0),
                    data: r
                })) ? o : "")
            },
            22: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This track can be played on devices without an internet connection.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            24: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "All tracks will play on devices without an internet connection.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            26: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Playing this track will not be possible on devices without an internet connection.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            28: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "No tracks will play on devices without an internet connection.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            30: function(e, t, i, r, o) {
                var a, s = null != t ? t : {};
                return '        <p class="editAccessTab__showFeedableConstraint">\n          ' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(s, "This setting cannot be changed. For more information, contact your label.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '\n        </p>\n        <span class="showChecked">\n' + (null != (a = i["if"].call(s, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(31, o, 0),
                    inverse: e.program(33, o, 0),
                    data: o
                })) ? a : "") + '        </span>\n        <span class="showUnchecked">\n' + (null != (a = i["if"].call(s, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(35, o, 0),
                    inverse: e.program(37, o, 0),
                    data: o
                })) ? a : "")
            },
            31: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This track will be included in your RSS feed if it is public.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            33: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "All tracks will be included in your RSS feed if they are public.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            35: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This track will not be included in your RSS feed.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            37: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "No tracks will be included in your RSS feed.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            39: function(e, t, n, i, r) {
                var o, a = null != t ? t : {};
                return '        <span class="showChecked">\n' + (null != (o = n["if"].call(a, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(40, r, 0),
                    inverse: e.program(42, r, 0),
                    data: r
                })) ? o : "") + '        </span>\n        <span class="showUnchecked">\n' + (null != (o = n["if"].call(a, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(44, r, 0),
                    inverse: e.program(46, r, 0),
                    data: r
                })) ? o : "") + "        </span>\n"
            },
            40: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This track’s embedded-player code will be displayed publicly.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            42: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "All tracks will display their embedded-player code publicly.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            44: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This track’s embedded-player code will only be displayed to you.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            46: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "No tracks will display their embedded-player code publicly.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            48: function(e, t, n, i, r) {
                var o, a = null != t ? t : {};
                return '        <span class="showChecked">\n' + (null != (o = n["if"].call(a, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(49, r, 0),
                    inverse: e.program(51, r, 0),
                    data: r
                })) ? o : "") + '        </span>\n        <span class="showUnchecked">\n' + (null != (o = n["if"].call(a, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(53, r, 0),
                    inverse: e.program(55, r, 0),
                    data: r
                })) ? o : "") + "        </span>\n"
            },
            49: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This track will be playable outside of SoundCloud and its apps.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            51: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "All tracks will be playable outside of SoundCloud and its apps.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            53: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This track will not be playable outside of SoundCloud and its apps.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            55: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "No tracks will be playable outside of SoundCloud and its apps.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            57: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing;
                return '      <div class="g-options-cell">\n' + (null != (a = (n(52) || t && t.$view || l).call(s, n(104), {
                    name: "$view",
                    hash: {
                        field: "domainLocking",
                        label: (n(51) || t && t.$t || l).call(s, "Domain locking", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(58, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "      </div>\n"
            },
            58: function(e, t, i, r, o) {
                var a, s = null != t ? t : {};
                return '          <span class="showChecked">\n' + (null != (a = i["if"].call(s, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(59, o, 0),
                    inverse: e.program(61, o, 0),
                    data: o
                })) ? a : "") + '          </span>\n          <span class="showUnchecked">\n' + (null != (a = i["if"].call(s, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(63, o, 0),
                    inverse: e.program(65, o, 0),
                    data: o
                })) ? a : "") + '          </span>\n          <div class="showChecked">\n            <button type="button" class="sc-button sc-button-small">' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(s, "Edit list", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</button>\n          </div>\n"
            },
            59: function(e, t, i, r, o) {
                return "              " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This track will only be accessible from selected domains.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            61: function(e, t, i, r, o) {
                return "              " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "All tracks will only be accessible from selected domains.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            63: function(e, t, i, r, o) {
                return "              " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Your track will be accessible from all domains.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            65: function(e, t, i, r, o) {
                return "              " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "All tracks will be accessible from all domains.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            67: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing;
                return '    <div class="g-form-section-head">\n      <h3 class="g-form-section-title">\n        <span class="sc-icon sc-icon-large sc-icon-comment-empty"></span>\n        ' + e.escapeExpression((n(51) || t && t.$t || l).call(s, "Quiet mode", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '\n      </h3>\n    </div>\n    <div class="g-options-row three-cell">\n      <div class="g-options-cell">\n' + (null != (a = (n(52) || t && t.$view || l).call(s, n(104), {
                    name: "$view",
                    hash: {
                        field: "commentable",
                        label: (n(51) || t && t.$t || l).call(s, "Enable comments", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(68, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '      </div>\n      <div class="g-options-cell">\n' + (null != (a = (n(52) || t && t.$view || l).call(s, n(104), {
                    name: "$view",
                    hash: {
                        field: "publicComments",
                        label: (n(51) || t && t.$t || l).call(s, "Display comments", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(73, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '      </div>\n      <div class="g-options-cell">\n' + (null != (a = (n(52) || t && t.$view || l).call(s, n(104), {
                    name: "$view",
                    hash: {
                        field: "stats",
                        label: (n(51) || t && t.$t || l).call(s, "Display stats", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(75, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "      </div>\n    </div>\n"
            },
            68: function(e, t, n, i, r) {
                var o;
                return null != (o = n["if"].call(null != t ? t : {}, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(69, r, 0),
                    inverse: e.program(71, r, 0),
                    data: r
                })) ? o : ""
            },
            69: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing,
                    l = e.escapeExpression;
                return '            <span class="showChecked">' + l((n(51) || t && t.$t || s).call(a, "People will be able to comment on your track.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</span>\n            <span class="showUnchecked">' + l((n(51) || t && t.$t || s).call(a, "People will not be able to comment on your track.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</span>\n"
            },
            71: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing,
                    l = e.escapeExpression;
                return '            <span class="showChecked">' + l((n(51) || t && t.$t || s).call(a, "People will be able to comment on your tracks.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</span>\n            <span class="showUnchecked">' + l((n(51) || t && t.$t || s).call(a, "People will not be able to comment on your tracks.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</span>\n"
            },
            73: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing,
                    l = e.escapeExpression;
                return '          <span class="showChecked">' + l((n(51) || t && t.$t || s).call(a, "Comments are visible to everyone.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</span>\n          <span class="showUnchecked">' + l((n(51) || t && t.$t || s).call(a, "Comments are visible only to you.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</span>\n"
            },
            75: function(e, t, n, i, r) {
                var o, a = null != t ? t : {};
                return '          <span class="showChecked">\n' + (null != (o = n["if"].call(a, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(76, r, 0),
                    inverse: e.program(78, r, 0),
                    data: r
                })) ? o : "") + '          </span>\n          <span class="showUnchecked">\n' + (null != (o = n["if"].call(a, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(80, r, 0),
                    inverse: e.program(82, r, 0),
                    data: r
                })) ? o : "") + "          </span>\n"
            },
            76: function(e, t, i, r, o) {
                return "              " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This track’s stats will be displayed publicly.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            78: function(e, t, i, r, o) {
                return "              " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Stats will be displayed publicly on all tracks.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            80: function(e, t, i, r, o) {
                return "              " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This track’s stats will not be displayed publicly.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            82: function(e, t, i, r, o) {
                return "              " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Stats will not be displayed publicly on any tracks.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            84: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing,
                    l = e.escapeExpression;
                return '    <div class="editAccessTab__quietTeaser g-upsell-container">\n      <div class="g-upsell-container-content">\n        <h2>' + l((n(51) || t && t.$t || s).call(a, "Be in control", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</h2>\n        <p class="g-upsell-container-text sc-type-small sc-type-light">' + l((n(51) || t && t.$t || s).call(a, "With any Pro plan, you’re in charge with quiet mode; choose whether comments should be public, private, or not allowed, or show or hide stats.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</p>\n        " + l((n(52) || t && t.$view || s).call(a, n(247), {
                    name: "$view",
                    hash: {
                        text: (n(51) || t && t.$t || s).call(a, "Unlock with a Pro plan", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        linkRef: "t110",
                        size: "small",
                        tagName: "a"
                    },
                    data: o
                })) + "\n      </div>\n    </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing;
                return '<section class="g-form-section">\n' + (null != (a = i["if"].call(s, null != t ? t.hasGeoblocking : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '\n  <div class="g-form-section-head">\n    <h3 class="g-form-section-title">\n      <span class="sc-icon sc-icon-large sc-icon-access"></span>\n      ' + e.escapeExpression((n(51) || t && t.$t || l).call(s, "Access", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '\n    </h3>\n  </div>\n  <div class="g-options-row three-cell">\n    <div class="g-options-cell">\n' + (null != (a = i["if"].call(s, null != t ? t.hasDownloads : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, o, 0),
                    inverse: e.program(13, o, 0),
                    data: o
                })) ? a : "") + '    </div>\n    <div class="g-options-cell">\n' + (null != (a = (n(52) || t && t.$view || l).call(s, n(104), {
                    name: "$view",
                    hash: {
                        field: "offlineSyncEnabled",
                        label: (n(51) || t && t.$t || l).call(s, "Offline listening", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(21, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '    </div>\n    <div class="g-options-cell">\n' + (null != (a = (n(52) || t && t.$view || l).call(s, n(104), {
                    name: "$view",
                    hash: {
                        field: "feedable",
                        label: (n(51) || t && t.$t || l).call(s, "Include in RSS feed", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(30, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '    </div>\n  </div>\n  <div class="g-options-row three-cell">\n    <div class="g-options-cell">\n' + (null != (a = (n(52) || t && t.$view || l).call(s, n(104), {
                    name: "$view",
                    hash: {
                        field: "embeddableByAll",
                        label: (n(51) || t && t.$t || l).call(s, "Display embed code", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(39, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '    </div>\n    <div class="g-options-cell">\n' + (null != (a = (n(52) || t && t.$view || l).call(s, n(104), {
                    name: "$view",
                    hash: {
                        field: "apiStreamable",
                        label: (n(51) || t && t.$t || l).call(s, "Enable app playback", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(48, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "    </div>\n" + (null != (a = i["if"].call(s, null != t ? t.hasDomainLocking : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(57, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '\n  </div>\n</section>\n<section class="g-form-section">\n' + (null != (a = i["if"].call(s, null != t ? t.hasQuietmode : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(67, o, 0),
                    inverse: e.program(84, o, 0),
                    data: o
                })) ? a : "") + "</section>\n"
            },
            useData: !0
        })
    },
    3077: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing,
                    l = e.escapeExpression;
                return '  <div class="baseFields__playlistTypeRow g-flex-row-spread">\n    <div class="baseFields__playlistTypeSelect">\n      ' + l((n(52) || t && t.$view || s).call(a, n(126), {
                    name: "$view",
                    hash: {
                        showBlank: !1,
                        size: "small",
                        plain: !0,
                        style: "linkMenu",
                        customClassName: "baseFields__fullWidth",
                        label: (n(51) || t && t.$t || s).call(a, "Playlist type", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "playlistType",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + "\n    </div>\n    " + l((n(52) || t && t.$view || s).call(a, n(297), {
                    name: "$view",
                    hash: {
                        key: "releaseDate",
                        className: "baseFields__releaseDate",
                        label: (n(51) || t && t.$t || s).call(a, "Release date", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "releaseDate",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + "\n  </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<div class="baseFields__title sc-border-box">\n  ' + u((n(52) || t && t.$view || l).call(s, n(752), {
                    name: "$view",
                    hash: {
                        key: "title",
                        field: "title",
                        label: (n(51) || t && t.$t || l).call(s, "Title", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        placeholder: null != t ? t.titlePlaceholder : t,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + '\n</div>\n<div class="baseFields__permalink">\n  ' + u((n(52) || t && t.$view || l).call(s, n(1515), {
                    name: "$view",
                    hash: {
                        size: "medium",
                        permalinkType: null != t ? t.type : t,
                        field: "permalink",
                        label: (n(51) || t && t.$t || l).call(s, "Permalink", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + '\n</div>\n<div class="baseFields__image">\n  ' + u((n(52) || t && t.$view || l).call(s, n(665), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + "\n</div>\n" + (null != (a = i["if"].call(s, null != t ? t.showPlaylistTypeSelect : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '<div class="baseFields__genreRow g-flex-row-spread">\n  <div class="baseFields__genreSelect">\n    ' + u((n(52) || t && t.$view || l).call(s, n(126), {
                    name: "$view",
                    hash: {
                        showBlank: !1,
                        size: "small",
                        plain: !0,
                        style: "linkMenu",
                        customClassName: "baseFields__fullWidth",
                        className: "baseFields__customGenreLabel",
                        label: (n(51) || t && t.$t || l).call(s, "Genre", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "genre",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + "\n  </div>\n  " + u((n(52) || t && t.$view || l).call(s, n(60), {
                    name: "$view",
                    hash: {
                        key: "customGenre",
                        className: "baseFields__customGenre",
                        label: (n(51) || t && t.$t || l).call(s, "Custom Genre", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "customGenre",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + '\n</div>\n<div class="baseFields__tagInput">\n  ' + u((n(52) || t && t.$view || l).call(s, n(748), {
                    name: "$view",
                    hash: {
                        placeholder: null != t ? t.tagPlaceholder : t,
                        key: "tags",
                        label: (n(51) || t && t.$t || l).call(s, "Additional tags", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        style: "bordered",
                        field: "tags",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + "\n</div>\n" + u((n(52) || t && t.$view || l).call(s, n(628), {
                    name: "$view",
                    hash: {
                        key: "description",
                        placeholder: null != t ? t.descriptionPlaceholder : t,
                        rows: "3",
                        field: "description",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "baseFields__description"
                    },
                    data: o
                })) + "\n"
            },
            useData: !0
        })
    },
    3078: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                return "      " + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1962), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + "\n"
            },
            3: function(e, t, n, i, r) {
                var o;
                return null != (o = n["if"].call(null != t ? t : {}, null != t ? t.hasScheduling : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, r, 0),
                    inverse: e.program(6, r, 0),
                    data: r
                })) ? o : ""
            },
            4: function(e, t, i, r, o) {
                return "        " + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(2270), {
                    name: "$view",
                    hash: {
                        field: "sharing",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + "\n"
            },
            6: function(e, t, i, r, o) {
                return "        " + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(227), {
                    name: "$view",
                    hash: {
                        field: "sharing",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + "\n"
            },
            8: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing,
                    l = e.escapeExpression;
                return '  <div class="editBasicTab__trackList">\n    ' + l((n(52) || t && t.$view || s).call(a, n(1517), {
                    name: "$view",
                    hash: {
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + "\n  </div>\n  " + l((n(52) || t && t.$view || s).call(a, n(436), {
                    name: "$view",
                    hash: {
                        text: (n(51) || t && t.$t || s).call(a, "Add more tracks", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        size: "small",
                        callToAction: !1,
                        toPlaylistUploadId: null != t ? t._resource_id : t
                    },
                    data: o
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s = null != t ? t : {};
                return e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(s, n(1473), {
                    name: "$view",
                    hash: {
                        resource_type: null != (a = null != t ? t._options : t) ? a.resource_type : a,
                        resource_id: null != (a = null != t ? t._options : t) ? a.resource_id : a,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + '\n\n<div class="editBasicTab__fields sc-clearfix">\n  <div class="editBasicTab__afterDescription sc-clearfix">\n' + (null != (a = i["if"].call(s, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.program(3, o, 0),
                    data: o
                })) ? a : "") + "  </div>\n</div>\n" + (null != (a = i.unless.call(s, null != t ? t.isSound : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(8, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "")
            },
            useData: !0
        })
    },
    3079: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression,
                    c = "function";
                return '<div class="fakeMonetizationTab__upsell sc-background-light g-flex-row-centered-spread">\n  <div class="fakeMonetizationTab__upsellSentence sc-type-small">' + u((n(51) || t && t.$t || l).call(s, "Get paid for your plays with SoundCloud Premier monetization", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</div>\n  <a class="fakeMonetizationTab__upsellCta sc-button sc-button-cta sc-button-medium" href="' + u((n(57) || t && t.$route || l).call(s, "premier", null, null != t ? t.upsellRef : t, {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Get paid monthly", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>\n</div>\n<div class="fakeMonetizationTab__fakeForm">\n  <section class="g-form-section">\n    <div class="g-form-section-head">\n      <h3 class="g-form-section-title">\n        <span class="sc-icon sc-icon-large sc-icon-calendar-middle"></span>\n        ' + u((n(51) || t && t.$t || l).call(s, "Enable monetization", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '\n      </h3>\n    </div>\n    <div class="g-options-row three-cell">\n      <div class="g-options-cell">\n        <div class="fakeMonetizationTab__checkbox sc-type-small">\n          <div class="fakeMonetizationTab__checkboxIcon"></div>\n          <div>\n            <div class="fakeMonetizationTab__checkboxTitle" for="' + u((a = null != (a = i.inputId || (null != t ? t.inputId : t)) ? a : l, typeof a === c ? a.call(s, {
                    name: "inputId",
                    hash: {},
                    data: o
                }) : a)) + '">' + u((n(51) || t && t.$t || l).call(s, "Monetization", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</div>\n            <div>" + u((n(51) || t && t.$t || l).call(s, "This track will not be monetizing", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class="g-form-section">\n    <div class="g-form-section-head">\n      <h3 class="g-form-section-title">\n        <span class="sc-icon sc-icon-large sc-icon-calendar-middle"></span>\n        ' + u((n(51) || t && t.$t || l).call(s, "Schedule monetization", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '\n      </h3>\n    </div>\n    <div class="g-options-row three-cell">\n      <div class="g-options-cell">\n        <div class="fakeMonetizationTab__checkbox sc-type-small">\n          <div class="fakeMonetizationTab__checkboxIcon"></div>\n          <div>\n            <div class="fakeMonetizationTab__checkboxTitle" for="' + u((a = null != (a = i.inputId || (null != t ? t.inputId : t)) ? a : l, typeof a === c ? a.call(s, {
                    name: "inputId",
                    hash: {},
                    data: o
                }) : a)) + '">' + u((n(51) || t && t.$t || l).call(s, "Start monetization", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</div>\n            <div>" + u((n(51) || t && t.$t || l).call(s, "This track will not be monetizing", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</div>\n          </div>\n        </div>\n      </div>\n      <div class="g-options-cell">\n        <div class="fakeMonetizationTab__checkbox sc-type-small">\n          <div class="fakeMonetizationTab__checkboxIcon"></div>\n          <div>\n            <div class="fakeMonetizationTab__checkboxTitle" for="' + u((a = null != (a = i.inputId || (null != t ? t.inputId : t)) ? a : l, typeof a === c ? a.call(s, {
                    name: "inputId",
                    hash: {},
                    data: o
                }) : a)) + '">' + u((n(51) || t && t.$t || l).call(s, "End monetization", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</div>\n            <div>" + u((n(51) || t && t.$t || l).call(s, "This track will not be monetizing", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n"
            },
            useData: !0
        })
    },
    3080: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing;
                return (null != (a = i["if"].call(s, null != t ? t.title : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '  <div class="g-options-row three-cell">\n    <div class="g-options-cell">\n' + (null != (a = (n(52) || t && t.$view || l).call(s, n(104), {
                    name: "$view",
                    hash: {
                        toggleAnywhere: !1,
                        field: "geoblocking",
                        label: (n(51) || t && t.$t || l).call(s, "Geoblocking", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        args: null != t ? t.formArgs : t
                    },
                    fn: e.program(4, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "    </div>\n  </div>\n"
            },
            2: function(e, t, n, i, r) {
                var o;
                return '    <div class="g-form-section-head">\n      <h3 class="g-form-section-title">\n        <span class="sc-icon sc-icon-large sc-icon-location-middle"></span>\n        ' + e.escapeExpression((o = null != (o = n.title || (null != t ? t.title : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != t ? t : {}, {
                    name: "title",
                    hash: {},
                    data: r
                }) : o)) + "\n      </h3>\n    </div>\n"
            },
            4: function(e, t, i, r, o) {
                var a, s, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = "function",
                    d = e.escapeExpression;
                return '        <span class="showUnchecked">' + d((s = null != (s = i.unchekedText || (null != t ? t.unchekedText : t)) ? s : u, typeof s === c ? s.call(l, {
                    name: "unchekedText",
                    hash: {},
                    data: o
                }) : s)) + "</span>\n" + (null != (a = i["if"].call(l, null != t ? t.indeterminateText : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '        <span class="showChecked">\n          <span class="geoblockingSection__showEmpty">' + d((s = null != (s = i.checkedEmptyText || (null != t ? t.checkedEmptyText : t)) ? s : u, typeof s === c ? s.call(l, {
                    name: "checkedEmptyText",
                    hash: {},
                    data: o
                }) : s)) + '</span>\n          <span class="geoblockingSection__showNonEmpty">' + d((s = null != (s = i.checkedNonEmptyText || (null != t ? t.checkedNonEmptyText : t)) ? s : u, typeof s === c ? s.call(l, {
                    name: "checkedNonEmptyText",
                    hash: {},
                    data: o
                }) : s)) + "</span>\n          " + d((n(52) || t && t.$view || u).call(l, n(1876), {
                    name: "$view",
                    hash: {
                        field: "availableCountries",
                        args: null != t ? t.formArgs : t
                    },
                    data: o
                })) + "\n        </span>\n"
            },
            5: function(e, t, n, i, r) {
                var o;
                return '          <span class="showIndeterminate">' + e.escapeExpression((o = null != (o = n.indeterminateText || (null != t ? t.indeterminateText : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != t ? t : {}, {
                    name: "indeterminateText",
                    hash: {},
                    data: r
                }) : o)) + "</span>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o;
                return null != (o = n["if"].call(null != t ? t : {}, null != t ? t.hasGeoblocking : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : ""
            },
            useData: !0
        })
    },
    3081: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a;
                return '<div class="editImage__select">\n  ' + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(86), {
                    name: "$view",
                    hash: {
                        placeholderType: null != (a = null != t ? t._options : t) ? a.placeholderType : a,
                        maxSrcSize: null != (a = null != t ? t._options : t) ? a.maxSrcSize : a,
                        minSrcSize: null != (a = null != t ? t._options : t) ? a.minSrcSize : a,
                        onImageRejected: null != t ? t.onImageRejected : t,
                        uploadImageAutomatically: !1,
                        alwaysShowEditButton: !0,
                        editable: !0,
                        size: null != (a = null != t ? t._options : t) ? a.size : a,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + '\n</div>\n<div class="editImage__cropper">\n</div>\n<div class="editImage__error g-opacity-transition">\n  <p class="editImage__errorText sc-text-orange"></p>\n</div>\n'
            },
            useData: !0
        })
    },
    3082: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                return "    " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "You can select a license for each track you upload. The default setting is 'All Rights Reserved' but you can also choose to give your track a Creative Commons license.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            3: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '    <a class="sc-link-dark" href="http://creativecommons.org/licenses/" target="_blank">\n      ' + u((n(52) || t && t.$view || l).call(s, n(1514), {
                    name: "$view",
                    hash: {
                        field: "creativeCommonsLicense",
                        resource_type: null != (a = null != t ? t._options : t) ? a.resource_type : a,
                        resource_id: null != (a = null != t ? t._options : t) ? a.resource_id : a,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + "\n      " + u((n(51) || t && t.$t || l).call(s, "Some rights reserved", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n    </a>\n"
            },
            5: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing;
                return '  <div class="g-options-row four-cell">\n    <div class="g-options-cell">\n' + (null != (a = (n(52) || t && t.$view || l).call(s, n(104), {
                    name: "$view",
                    hash: {
                        field: "attribution",
                        label: (n(51) || t && t.$t || l).call(s, "Attribution", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != (a = null != t ? t._options : t) ? a.resource_type : a,
                        resource_id: null != (a = null != t ? t._options : t) ? a.resource_id : a,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(6, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '    </div>\n    <div class="g-options-cell">\n' + (null != (a = (n(52) || t && t.$view || l).call(s, n(104), {
                    name: "$view",
                    hash: {
                        field: "nonCommercial",
                        label: (n(51) || t && t.$t || l).call(s, "Noncommercial", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != (a = null != t ? t._options : t) ? a.resource_type : a,
                        resource_id: null != (a = null != t ? t._options : t) ? a.resource_id : a,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(8, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '    </div>\n    <div class="g-options-cell">\n' + (null != (a = (n(52) || t && t.$view || l).call(s, n(104), {
                    name: "$view",
                    hash: {
                        field: "nonDerivative",
                        label: (n(51) || t && t.$t || l).call(s, "No Derivative Works", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != (a = null != t ? t._options : t) ? a.resource_type : a,
                        resource_id: null != (a = null != t ? t._options : t) ? a.resource_id : a,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(10, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '    </div>\n    <div class="g-options-cell">\n' + (null != (a = (n(52) || t && t.$view || l).call(s, n(104), {
                    name: "$view",
                    hash: {
                        field: "shareAlike",
                        label: (n(51) || t && t.$t || l).call(s, "Share Alike", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != (a = null != t ? t._options : t) ? a.resource_type : a,
                        resource_id: null != (a = null != t ? t._options : t) ? a.resource_id : a,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(12, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "    </div>\n  </div>\n"
            },
            6: function(e, t, i, r, o) {
                return "        " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Allow others to copy, distribute, display and perform your copyrighted work but only if they give credit the way you request.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            8: function(e, t, i, r, o) {
                return "        " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Allow others to distribute, display and perform your work—and derivative works based upon it—but for noncommercial purposes only.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            10: function(e, t, i, r, o) {
                return "        " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Allow others to copy, distribute, display and perform only verbatim copies of your work, not derivative works based upon it.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            12: function(e, t, i, r, o) {
                return "        " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Allow others to distribute derivative works only under a license identical to the license that governs your work.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<div class="g-form-section-head">\n  <h3 class="g-form-section-title">\n    <span class="sc-icon sc-icon-large sc-icon-check"></span>\n    ' + u((n(51) || t && t.$t || l).call(s, "License", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n  </h3>\n" + (null != (a = (n(52) || t && t.$view || l).call(s, n(113), {
                    name: "$view",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '</div>\n<div class="licenseEdit__radios">\n  ' + u((n(52) || t && t.$view || l).call(s, n(151), {
                    name: "$view",
                    hash: {
                        key: "license",
                        field: "license",
                        resource_type: null != (a = null != t ? t._options : t) ? a.resource_type : a,
                        resource_id: null != (a = null != t ? t._options : t) ? a.resource_id : a,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + "\n" + (null != (a = (n(52) || t && t.$view || l).call(s, n(109), {
                    name: "$view",
                    hash: {
                        animate: !1,
                        conditionFn: null != t ? t.showCommonsDetailsFn : t,
                        className: "licenseEdit__summary g-inline-block",
                        field: "license",
                        resource_type: null != (a = null != t ? t._options : t) ? a.resource_type : a,
                        resource_id: null != (a = null != t ? t._options : t) ? a.resource_id : a,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(3, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "</div>\n" + (null != (a = (n(52) || t && t.$view || l).call(s, n(109), {
                    name: "$view",
                    hash: {
                        conditionFn: null != t ? t.showCommonsDetailsFn : t,
                        field: "license",
                        resource_type: null != (a = null != t ? t._options : t) ? a.resource_type : a,
                        resource_id: null != (a = null != t ? t._options : t) ? a.resource_id : a,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(5, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "")
            },
            useData: !0
        })
    },
    3083: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing,
                    l = e.escapeExpression;
                return '    <div class="editMetadataTab__requiredCppFields">\n\n      <div class="metadataGrid__row">\n        ' + l((n(52) || t && t.$view || s).call(a, n(126), {
                    name: "$view",
                    hash: {
                        key: "publisherContainsMusic",
                        showBlank: !1,
                        label: (n(51) || t && t.$t || s).call(a, "Contains music", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "publisherContainsMusic",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-narrow"
                    },
                    data: o
                })) + "\n\n        " + l((n(52) || t && t.$view || s).call(a, n(60), {
                    name: "$view",
                    hash: {
                        key: "publisherArtist",
                        field: "publisherArtist",
                        label: (n(51) || t && t.$t || s).call(a, "Artist", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-narrow"
                    },
                    data: o
                })) + "\n\n        " + l((n(52) || t && t.$view || s).call(a, n(60), {
                    name: "$view",
                    hash: {
                        key: "publisher",
                        label: (n(51) || t && t.$t || s).call(a, "Publisher", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "publisher",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-narrow"
                    },
                    data: o
                })) + '\n      </div>\n\n\n      <div class="metadataGrid__row">\n        ' + l((n(52) || t && t.$view || s).call(a, n(631), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-narrow"
                    },
                    data: o
                })) + "\n\n        " + l((n(52) || t && t.$view || s).call(a, n(60), {
                    name: "$view",
                    hash: {
                        key: "composer",
                        label: (n(51) || t && t.$t || s).call(a, "Composer", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "publisherWriterComposer",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-narrow"
                    },
                    data: o
                })) + "\n\n        " + l((n(52) || t && t.$view || s).call(a, n(60), {
                    name: "$view",
                    hash: {
                        label: (n(51) || t && t.$t || s).call(a, "Release title", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "publisherReleaseTitle",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-narrow"
                    },
                    data: o
                })) + "\n      </div>\n    </div>\n"
            },
            3: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing;
                return "      " + e.escapeExpression((n(52) || t && t.$view || s).call(a, n(60), {
                    name: "$view",
                    hash: {
                        label: (n(51) || t && t.$t || s).call(a, "Buy-link title", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "buyTitle",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-narrow"
                    },
                    data: o
                })) + "\n"
            },
            5: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing;
                return "      " + e.escapeExpression((n(52) || t && t.$view || s).call(a, n(60), {
                    name: "$view",
                    hash: {
                        label: (n(51) || t && t.$t || s).call(a, "Album title", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "publisherAlbumTitle",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-narrow"
                    },
                    data: o
                })) + "\n"
            },
            7: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing;
                return "      " + e.escapeExpression((n(52) || t && t.$view || s).call(a, n(297), {
                    name: "$view",
                    hash: {
                        label: (n(51) || t && t.$t || s).call(a, "Release date", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "releaseDate",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-narrow"
                    },
                    data: o
                })) + "\n"
            },
            9: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing,
                    l = e.escapeExpression;
                return '\n\n    <div class="metadataGrid__row">\n\n      ' + l((n(52) || t && t.$view || s).call(a, n(60), {
                    name: "$view",
                    hash: {
                        label: (n(51) || t && t.$t || s).call(a, "Barcode", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "publisherUpcOrEan",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-wide"
                    },
                    data: o
                })) + "\n\n      " + l((n(52) || t && t.$view || s).call(a, n(60), {
                    name: "$view",
                    hash: {
                        hintHTML: null != t ? t.iswcFieldHint : t,
                        label: (n(51) || t && t.$t || s).call(a, "ISWC", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        placeholder: (n(51) || t && t.$t || s).call(a, "e.g. T-034.524.680-1", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "publisherIswc",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-narrow"
                    },
                    data: o
                })) + '\n    </div>\n\n\n    <div class="metadataGrid__row">\n      ' + l((n(52) || t && t.$view || s).call(a, n(60), {
                    name: "$view",
                    hash: {
                        hintHTML: null != t ? t.plineFieldHint : t,
                        placeholder: (n(51) || t && t.$t || s).call(a, "e.g. 2007 XYZ Record Company Limited", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        label: (n(51) || t && t.$t || s).call(a, "P line", {
                            name: "$t",
                            hash: {
                                _comment: "It's a music industry term. Used for clearing publishing."
                            },
                            data: o
                        }),
                        field: "publisherPLine",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-wide"
                    },
                    data: o
                })) + "\n\n      " + l((n(52) || t && t.$view || s).call(a, n(126), {
                    name: "$view",
                    hash: {
                        showBlank: !1,
                        label: (n(51) || t && t.$t || s).call(a, "Contains explicit content", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "publisherExplicit",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-narrow"
                    },
                    data: o
                })) + "\n    </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<section class="g-form-section sc-clearfix">\n' + (null != (a = i["if"].call(s, null != t ? t.hasPublisherMetadata : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '\n\n  <div class="metadataGrid__row">\n    ' + u((n(52) || t && t.$view || l).call(s, n(60), {
                    name: "$view",
                    hash: {
                        key: "buyLink",
                        label: (n(51) || t && t.$t || l).call(s, "Buy-link", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "buyLink",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: null != t ? t.buyLinkClassName : t
                    },
                    data: o
                })) + "\n\n" + (null != (a = i["if"].call(s, null != t ? t.hasCustomBuyTitle : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '  </div>\n\n\n  <div class="metadataGrid__row">\n' + (null != (a = i["if"].call(s, null != t ? t.hasPublisherMetadata : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "\n    " + u((n(52) || t && t.$view || l).call(s, n(60), {
                    name: "$view",
                    hash: {
                        label: (n(51) || t && t.$t || l).call(s, "Record label", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "labelName",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: null != t ? t.recordLabelClassName : t
                    },
                    data: o
                })) + "\n\n" + (null != (a = i["if"].call(s, null != t ? t.showReleaseDate : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "  </div>\n\n" + (null != (a = i["if"].call(s, null != t ? t.hasPublisherMetadata : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(9, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '</section>\n\n<section class="g-form-section sc-clearfix">\n  ' + u((n(52) || t && t.$view || l).call(s, n(1474), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        FormClass: null != t ? t.FormClass : t
                    },
                    data: o
                })) + "\n</section>\n"
            },
            useData: !0
        })
    },
    3084: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var a, s = null != t ? t : {};
                return '        <p class="showMonetizationConstraint">\n          ' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(s, "This setting cannot be changed. Contact your label for more information.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '\n        </p>\n\n        <span class="showUnchecked">\n' + (null != (a = i["if"].call(s, null != t ? t.isTrack : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + (null != (a = i["if"].call(s, null != t ? t.isPlaylist : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '        </span>\n        <span class="showChecked">\n' + (null != (a = i["if"].call(s, null != t ? t.isTrack : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(6, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + (null != (a = i["if"].call(s, null != t ? t.isPlaylist : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "        </span>\n"
            },
            2: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This track will not be monetizing.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            4: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This playlist will not be monetizing.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            6: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This track will be monetizing only in the following territories:", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            8: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This playlist will be monetizing only in the following territories:", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            10: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing,
                    l = e.escapeExpression;
                return '        <p class="showMonetizationConstraint">\n          ' + l((n(51) || t && t.$t || s).call(a, "This setting cannot be changed. Contact your label for more information.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '\n        </p>\n\n        <span class="showUnchecked">\n          <span class="showMonetizationEnabled">' + l((n(51) || t && t.$t || s).call(a, "This track will monetize continuously.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</span>\n          <span class="showMonetizationDisabled">' + l((n(51) || t && t.$t || s).call(a, "This track will not be monetizing.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</span>\n        </span>\n\n        <span class="showChecked">\n          ' + l((n(51) || t && t.$t || s).call(a, "This track will start monetization on:", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '\n        </span>\n        <div class="showChecked">\n          ' + l((n(52) || t && t.$view || s).call(a, n(627), {
                    name: "$view",
                    hash: {
                        minDate: 0,
                        timezoneField: "monetizationStartTimezone",
                        localDateField: "monetizationStartLocalDate",
                        key: "monetizationStartDate",
                        field: "monetizationStartDate",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + "\n        </div>\n"
            },
            12: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing,
                    l = e.escapeExpression;
                return '        <p class="showMonetizationConstraint">\n          ' + l((n(51) || t && t.$t || s).call(a, "This setting cannot be changed. Contact your label for more information.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '\n        </p>\n\n        <span class="showUnchecked">\n          <span class="showMonetizationEnabled">' + l((n(51) || t && t.$t || s).call(a, "This track will monetize continuously.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</span>\n          <span class="showMonetizationDisabled">' + l((n(51) || t && t.$t || s).call(a, "This track will not be monetizing.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</span>\n        </span>\n\n        <span class="showChecked">\n          ' + l((n(51) || t && t.$t || s).call(a, "This track will end monetization on:", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '\n        </span>\n        <div class="showChecked">\n          ' + l((n(52) || t && t.$view || s).call(a, n(627), {
                    name: "$view",
                    hash: {
                        minDate: 0,
                        timezoneField: "monetizationEndTimezone",
                        localDateField: "monetizationEndLocalDate",
                        key: "monetizationEndDate",
                        field: "monetizationEndDate",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + "\n        </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<section class="g-form-section">\n  <div class="g-form-section-head">\n    <h3 class="g-form-section-title">\n      <span class="sc-icon sc-icon-large sc-icon-calendar-middle"></span>\n      ' + u((n(51) || t && t.$t || l).call(s, "Enable monetization", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '\n    </h3>\n  </div>\n  <div class="g-options-row three-cell">\n    <div class="g-options-cell">\n' + (null != (a = (n(52) || t && t.$view || l).call(s, n(104), {
                    name: "$view",
                    hash: {
                        toggleAnywhere: !1,
                        key: "monetizationEnabled",
                        field: "monetizationEnabled",
                        label: (n(51) || t && t.$t || l).call(s, "Monetization", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "    </div>\n  </div>\n  " + u((n(52) || t && t.$view || l).call(s, n(1969), {
                    name: "$view",
                    hash: {
                        field: "monetizationRightsholders",
                        publisherIsrc: null != t ? t.publisherIsrc : t,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        className: "showMonetizationEnabled",
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + '\n</section>\n\n<section class="g-form-section">\n  <div class="g-form-section-head">\n    <h3 class="g-form-section-title">\n      <span class="sc-icon sc-icon-large sc-icon-calendar-middle"></span>\n      ' + u((n(51) || t && t.$t || l).call(s, "Schedule monetization", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '\n    </h3>\n  </div>\n  <div class="g-options-row three-cell">\n    <div class="g-options-cell">\n' + (null != (a = (n(52) || t && t.$view || l).call(s, n(104), {
                    name: "$view",
                    hash: {
                        toggleAnywhere: !1,
                        key: "monetizationStart",
                        field: "monetizationStart",
                        label: (n(51) || t && t.$t || l).call(s, "Start monetization", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(10, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '    </div>\n    <div class="g-options-cell">\n' + (null != (a = (n(52) || t && t.$view || l).call(s, n(104), {
                    name: "$view",
                    hash: {
                        toggleAnywhere: !1,
                        key: "monetizationEnd",
                        field: "monetizationEnd",
                        label: (n(51) || t && t.$t || l).call(s, "End monetization", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(12, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "    </div>\n  </div>\n</section>\n"
            },
            useData: !0
        })
    },
    3085: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing;
                return '  <div class="monetizationTerritories__list g-options-row three-cell">\n    <div class="g-options-cell">\n       ' + e.escapeExpression((n(52) || t && t.$view || l).call(s, n(1475), {
                    name: "$view",
                    hash: {
                        emptyMessage: (n(51) || t && t.$t || l).call(s, "Add another territory", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        explicitRequiredTerritories: (a = o && o.root) && a.explicitRequiredTerritories,
                        remainingTerritories: (a = o && o.root) && a.remainingTerritories
                    },
                    data: o
                })) + "\n    </div>\n  </div>\n"
            },
            3: function(e, t, n, i, r) {
                var o;
                return null != (o = n["if"].call(null != t ? t : {}, t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : ""
            },
            4: function(e, t, n, i, r) {
                var o;
                return '      <div class="g-options-cell">\n' + (null != (o = n.each.call(null != t ? t : {}, t, {
                    name: "each",
                    hash: {},
                    fn: e.program(5, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "      </div>\n"
            },
            5: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing;
                return '          <div class="monetizationTerritories__listItem ' + (null != (a = i["if"].call(s, null != t ? t.territoryId : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(6, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '">\n             ' + e.escapeExpression((n(52) || t && t.$view || l).call(s, n(1475), {
                    name: "$view",
                    hash: {
                        emptyMessage: (n(171) || t && t.$ternary || l).call(s, o && o.first, (n(51) || t && t.$t || l).call(s, "Select territory", {
                            name: "$t",
                            hash: {},
                            data: o
                        }), (n(51) || t && t.$t || l).call(s, "Add another territory", {
                            name: "$t",
                            hash: {},
                            data: o
                        }), {
                            name: "$ternary",
                            hash: {},
                            data: o
                        }),
                        userRightsholders: (a = o && o.root) && a.userRightsholders,
                        explicitRequiredTerritories: (a = o && o.root) && a.explicitRequiredTerritories,
                        remainingTerritories: (a = o && o.root) && a.remainingTerritories,
                        rightsholder: null != t ? t.rightsholder : t,
                        territoryId: null != t ? t.territoryId : t
                    },
                    data: o
                })) + "\n          </div>\n"
            },
            6: function(e, t, n, i, r) {
                return "monetizationTerritories__listItemStarted"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, a = null != t ? t : {};
                return (null != (o = n["if"].call(a, null != t ? t.canAddTerritory : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '<div class="monetizationTerritories__list g-options-row three-cell">\n' + (null != (o = n.each.call(a, null != t ? t.monetizationTerritories : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(3, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '</div>\n<div class="monetizationTerritories__validation">\n  <div class="monetizationTerritories__validationMessage g-input-validation"></div>\n</div>\n'
            },
            useData: !0
        })
    },
    3086: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var o, a, s = null != t ? t : {};
                return '  <select class="monetizationTerritory__territorySelect sc-select">\n    <option value="">' + e.escapeExpression((a = null != (a = n.emptyMessage || (null != t ? t.emptyMessage : t)) ? a : n.helperMissing, "function" == typeof a ? a.call(s, {
                    name: "emptyMessage",
                    hash: {},
                    data: r
                }) : a)) + "</option>\n" + (null != (o = n.each.call(s, null != t ? t.territoryOptions : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(2, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "  </select>\n"
            },
            2: function(e, t, n, i, r) {
                var o, a = null != t ? t : {},
                    s = n.helperMissing,
                    l = "function",
                    u = e.escapeExpression;
                return '      <option value="' + u((o = null != (o = n.value || (null != t ? t.value : t)) ? o : s, typeof o === l ? o.call(a, {
                    name: "value",
                    hash: {},
                    data: r
                }) : o)) + '">' + u((o = null != (o = n.label || (null != t ? t.label : t)) ? o : s, typeof o === l ? o.call(a, {
                    name: "label",
                    hash: {},
                    data: r
                }) : o)) + "</option>\n"
            },
            4: function(e, t, i, r, o) {
                var a, s, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return '  <div class="monetizationTerritory__needsRightsholder">\n    <div class="monetizationTerritory__territory">' + c((s = null != (s = i.selectedTerritory || (null != t ? t.selectedTerritory : t)) ? s : u, "function" == typeof s ? s.call(l, {
                    name: "selectedTerritory",
                    hash: {},
                    data: o
                }) : s)) + '</div>\n    <select class="monetizationTerritory__rightsholderSelect sc-select">\n      <option value="">' + c((n(51) || t && t.$t || u).call(l, "Select rightsholder", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</option>\n" + (null != (a = i.each.call(l, null != t ? t.rightsholderOptions : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(5, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '    </select>\n    <div class="monetizationTerritory__remove">\n      <button type="button" class="monetizationTerritory__removeButton sc-button sc-button-small sc-button-delete sc-button-icon">' + c((n(51) || t && t.$t || u).call(l, "Remove", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</button>\n    </div>\n  </div>\n"
            },
            5: function(e, t, n, i, r) {
                var o, a = null != t ? t : {},
                    s = n.helperMissing,
                    l = "function",
                    u = e.escapeExpression;
                return '        <option value="' + u((o = null != (o = n.value || (null != t ? t.value : t)) ? o : s, typeof o === l ? o.call(a, {
                    name: "value",
                    hash: {},
                    data: r
                }) : o)) + '">' + u((o = null != (o = n.label || (null != t ? t.label : t)) ? o : s, typeof o === l ? o.call(a, {
                    name: "label",
                    hash: {},
                    data: r
                }) : o)) + "</option>\n"
            },
            7: function(e, t, i, r, o) {
                var a, s, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return '  <div class="monetizationTerritory__complete">\n    <div class="monetizationTerritory__territory">' + c((s = null != (s = i.selectedTerritory || (null != t ? t.selectedTerritory : t)) ? s : u, "function" == typeof s ? s.call(l, {
                    name: "selectedTerritory",
                    hash: {},
                    data: o
                }) : s)) + "</div>\n" + (null != (a = i["if"].call(l, null != t ? t.selectedRightsholder : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, o, 0),
                    inverse: e.program(10, o, 0),
                    data: o
                })) ? a : "") + '    <div class="monetizationTerritory__remove">\n      <button type="button" class="monetizationTerritory__removeButton sc-button sc-button-small sc-button-delete sc-button-icon">' + c((n(51) || t && t.$t || u).call(l, "Remove", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</button>\n    </div>\n  </div>\n"
            },
            8: function(e, t, n, i, r) {
                var o;
                return '      <div class="monetizationTerritory__rightsholder">' + e.escapeExpression((o = null != (o = n.selectedRightsholder || (null != t ? t.selectedRightsholder : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != t ? t : {}, {
                    name: "selectedRightsholder",
                    hash: {},
                    data: r
                }) : o)) + "</div>\n"
            },
            10: function(e, t, i, r, o) {
                return '      <div class="monetizationTerritory__rightsholder">' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "** automatic **", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, a = null != t ? t : {};
                return (null != (o = n["if"].call(a, null != t ? t.needsTerritory : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n["if"].call(a, null != t ? t.needsRightsholder : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n["if"].call(a, null != t ? t.isComplete : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "")
            },
            useData: !0
        })
    },
    3092: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return u((n(52) || t && t.$view || l).call(s, n(1473), {
                    name: "$view",
                    hash: {
                        resource_type: null != (a = null != t ? t._options : t) ? a.resource_type : a,
                        resource_id: null != (a = null != t ? t._options : t) ? a.resource_id : a,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + '\n\n<div class="editPlaylistBasicTab__fields sc-clearfix">\n  <div class="editPlaylistBasicTab__afterDescription sc-clearfix">\n    <div class="g-inline-block">\n      ' + u((n(52) || t && t.$view || l).call(s, n(227), {
                    name: "$view",
                    hash: {
                        field: "sharing",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + "\n    </div>\n  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    3093: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<div class="audibleEditForm__top">\n  <div class="audibleEditForm__progress">\n    <div class="editStatus large">\n      <div class="editStatus__text playlistEditForm__error">' + u((a = null != (a = i.errorMessage || (null != t ? t.errorMessage : t)) ? a : l, "function" == typeof a ? a.call(s, {
                    name: "errorMessage",
                    hash: {},
                    data: o
                }) : a)) + '</div>\n      <div class="editStatus__progress"></div>\n    </div>\n  </div>\n</div>\n<div class="audibleEditForm__form sc-media">\n  ' + u((n(52) || t && t.$view || l).call(s, n(751), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.PlaylistEdit : t
                    },
                    data: o
                })) + "\n\n  " + u((n(52) || t && t.$view || l).call(s, n(1980), {
                    name: "$view",
                    hash: {
                        Form: null != t ? t.PlaylistEdit : t,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + '\n\n  <div class="audibleEditForm__formButtons sc-button-toolbar sc-border-light-top">\n    <div class="audibleEditForm__requiredText">' + u((n(51) || t && t.$t || l).call(s, '<span class="sc-orange">*</span> Required fields', {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</div>\n    " + u((n(52) || t && t.$view || l).call(s, n(71), {
                    name: "$view",
                    hash: {
                        size: "medium",
                        button: "save",
                        className: "sc-button-cta",
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.PlaylistEdit : t
                    },
                    data: o
                })) + "\n    " + u((n(52) || t && t.$view || l).call(s, n(71), {
                    name: "$view",
                    hash: {
                        size: "medium",
                        button: "cancel",
                        noStyle: !0,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.PlaylistEdit : t
                    },
                    data: o
                })) + "\n  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    3094: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing,
                    l = e.escapeExpression;
                return '<div class="editTrackList__headerButtons sc-button-toolbar">\n  ' + l((n(52) || t && t.$view || s).call(a, n(71), {
                    name: "$view",
                    hash: {
                        size: "medium",
                        button: "save",
                        className: "sc-button-cta",
                        resource_id: null != t ? t.formResourceId : t,
                        Form: null != t ? t.Form : t
                    },
                    data: o
                })) + "\n  " + l((n(52) || t && t.$view || s).call(a, n(71), {
                    name: "$view",
                    hash: {
                        size: "medium",
                        button: "cancel",
                        noStyle: !0,
                        resource_id: null != t ? t.formResourceId : t,
                        Form: null != t ? t.Form : t
                    },
                    data: o
                })) + '\n</div>\n<div class="editTrackList__container"></div>\n'
            },
            useData: !0
        })
    },
    3095: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing;
                return "      " + e.escapeExpression((n(52) || t && t.$view || s).call(a, n(60), {
                    name: "$view",
                    hash: {
                        label: (n(51) || t && t.$t || s).call(a, "Buy-link title", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "buyTitle",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-narrow"
                    },
                    data: o
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<section class="g-form-section sc-clearfix">\n  <div class="metadataGrid__row">\n    ' + u((n(52) || t && t.$view || l).call(s, n(60), {
                    name: "$view",
                    hash: {
                        key: "buyLink",
                        label: (n(51) || t && t.$t || l).call(s, "Buy-link", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "buyLink",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: null != t ? t.buyLinkClassName : t
                    },
                    data: o
                })) + "\n\n" + (null != (a = i["if"].call(s, null != t ? t.hasCustomBuyTitle : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '  </div>\n\n\n  <div class="metadataGrid__row">\n    ' + u((n(52) || t && t.$view || l).call(s, n(60), {
                    name: "$view",
                    hash: {
                        label: (n(51) || t && t.$t || l).call(s, "Record label", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "labelName",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-wide"
                    },
                    data: o
                })) + '\n  </div>\n</section>\n\n<section class="g-form-section sc-clearfix">\n  ' + u((n(52) || t && t.$view || l).call(s, n(1474), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        FormClass: null != t ? t.FormClass : t
                    },
                    data: o
                })) + "\n</section>\n"
            },
            useData: !0
        })
    },
    3096: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var o;
                return '    <span class="sc-link-light">' + e.escapeExpression(e.lambda(null != (o = null != t ? t.user : t) ? o.username : o, t)) + "</span> &mdash;\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return '<div class="editTrackItem__image sc-media-image">\n  ' + c((n(52) || t && t.$view || u).call(l, n(86), {
                    name: "$view",
                    hash: {
                        size: 30,
                        resource_type: "sound",
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + '\n  <div class="editTrackItem__play">\n    ' + c((n(52) || t && t.$view || u).call(l, n(225), {
                    name: "$view",
                    hash: {
                        size: "small",
                        resource_type: "sound",
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + '\n  </div>\n</div>\n<div class="editTrackItem__content sc-media-content sc-truncate">\n' + (null != (a = i["if"].call(l, null != (a = null != t ? t._options : t) ? a.show_user : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '  <span class="editTrackItem__trackTitle sc-type-h3">' + c((s = null != (s = i.title || (null != t ? t.title : t)) ? s : u, "function" == typeof s ? s.call(l, {
                    name: "title",
                    hash: {},
                    data: o
                }) : s)) + '</span>\n</div>\n<div class="editTrackItem__additional">\n  <span class="editTrackItem__duration">\n    ' + c((n(110) || t && t.$a11y || u).call(l, {
                    name: "$a11y",
                    hash: {
                        screenreader: null != t ? t.durationInWords : t,
                        visible: null != t ? t.duration : t
                    },
                    data: o
                })) + '\n  </span>\n  <button type="button" class="editTrackItem__remove g-button-remove" title="' + c((n(51) || t && t.$t || u).call(l, "Remove track from playlist", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">\n    ' + c((n(51) || t && t.$t || u).call(l, "Remove track from playlist", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n  </button>\n</div>\n"
            },
            useData: !0
        })
    },
    3097: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                return e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1978), {
                    name: "$view",
                    hash: {
                        field: "trackList",
                        resource_id: null != t ? t.formResourceId : t,
                        Form: null != t ? t.Form : t
                    },
                    data: o
                })) + "\n"
            },
            useData: !0
        })
    },
    3098: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing;
                return "      " + e.escapeExpression((n(52) || t && t.$view || s).call(a, n(60), {
                    name: "$view",
                    hash: {
                        label: (n(51) || t && t.$t || s).call(a, "Buy-link title", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "buyTitle",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.RestrictedAudibleEdit : t,
                        className: "metadataGrid__field-narrow"
                    },
                    data: o
                })) + "\n"
            },
            3: function(e, t, i, r, o) {
                return "      " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This playlist is managed directly by its rightsholder, so not all options can be changed. To make other changes, contact your label or distributor.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            5: function(e, t, i, r, o) {
                return "      " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This track is managed directly by its rightsholder, so not all options can be changed. To make other changes, contact your label or distributor.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return '<div class="audibleEditForm__form restrictedEditForm__form sc-media">\n  <div class="audibleEditForm__title">\n    <h2 class="g-modal-title-h1">\n      ' + c((n(51) || t && t.$t || u).call(l, (n(171) || t && t.$ternary || u).call(l, null != t ? t.isPlaylist : t, "Edit playlist", "Edit track", {
                    name: "$ternary",
                    hash: {},
                    data: o
                }), {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '\n    </h2>\n  </div>\n\n  <div class="metadataGrid__row">\n    ' + c((n(52) || t && t.$view || u).call(l, n(60), {
                    name: "$view",
                    hash: {
                        key: "buyLink",
                        label: (n(51) || t && t.$t || u).call(l, "Buy-link", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "buyLink",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.RestrictedAudibleEdit : t,
                        className: null != t ? t.buyLinkClassName : t
                    },
                    data: o
                })) + "\n\n" + (null != (a = i["if"].call(l, null != t ? t.hasCustomBuyTitle : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "  </div>\n\n  " + c((n(52) || t && t.$view || u).call(l, n(628), {
                    name: "$view",
                    hash: {
                        key: "description",
                        placeholder: null != t ? t.descriptionPlaceholder : t,
                        rows: "3",
                        field: "description",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.RestrictedAudibleEdit : t,
                        className: "baseFields__description"
                    },
                    data: o
                })) + '\n\n  <div class="restrictedEditForm__actions g-flex-row-centered-spread">\n    <div class="editStatus__text restrictedEditForm__status">' + c((s = null != (s = i.errorMessage || (null != t ? t.errorMessage : t)) ? s : u, "function" == typeof s ? s.call(l, {
                    name: "errorMessage",
                    hash: {},
                    data: o
                }) : s)) + '</div>\n\n    <div class="restrictedEditForm__buttons">\n      ' + c((n(52) || t && t.$view || u).call(l, n(71), {
                    name: "$view",
                    hash: {
                        size: "medium",
                        button: "cancel",
                        noStyle: !0,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.RestrictedAudibleEdit : t
                    },
                    data: o
                })) + "\n      " + c((n(52) || t && t.$view || u).call(l, n(71), {
                    name: "$view",
                    hash: {
                        size: "medium",
                        button: "save",
                        className: "sc-button-cta restrictedEditForm__save",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.RestrictedAudibleEdit : t
                    },
                    data: o
                })) + "\n      " + c((n(52) || t && t.$view || u).call(l, n(71), {
                    name: "$view",
                    hash: {
                        size: "medium",
                        button: "retry",
                        className: "sc-button-cta restrictedEditForm__retry",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.RestrictedAudibleEdit : t
                    },
                    data: o
                })) + '\n    </div>\n  </div>\n  <div class="audibleEditForm__foot restrictedEditForm__foot">\n' + (null != (a = i["if"].call(l, null != t ? t.isPlaylist : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, o, 0),
                    inverse: e.program(5, o, 0),
                    data: o
                })) ? a : "") + "  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    3100: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing;
                return "        " + e.escapeExpression((n(52) || t && t.$view || s).call(a, n(523), {
                    name: "$view",
                    hash: {
                        className: "audibleEditForm__download",
                        text: (n(51) || t && t.$t || s).call(a, "Download original file", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + "\n"
            },
            3: function(e, t, i, r, o) {
                return '        <button class="sc-button sc-button-small sc-button-upload sc-button-disabled audibleEditForm__replaceUpsell">' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Replace file", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</button>\n"
            },
            5: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing;
                return "        " + e.escapeExpression((n(52) || t && t.$view || s).call(a, n(436), {
                    name: "$view",
                    hash: {
                        disabled: null != t ? t.showUpsell : t,
                        text: (n(51) || t && t.$t || s).call(a, "Replace file", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        size: "small",
                        callToAction: !1,
                        replaceSoundUploadId: null != t ? t._resource_id : t
                    },
                    data: o
                })) + "\n"
            },
            7: function(e, t, n, i, r) {
                return '      <strong>Important:</strong> By sharing, you confirm that your track complies with our <a href="[[termsOfUse]]">Terms of use</a> and don’t infringe anyone else’s rights. If in doubt, refer to the <a href="[[copyright]]">Copyright information</a> pages and <a target="_blank" href="[[faqs]]">FAQs</a> before uploading.\n'
            },
            9: function(e, t, i, r, o) {
                var a, s, l, u = '      <p class="audibleEditForm__footCpp">\n';
                return s = null != (s = n(51) || (null != t ? t.$t : t)) ? s : i.helperMissing, l = {
                    name: "$t",
                    hash: {},
                    fn: e.program(10, o, 0),
                    inverse: e.noop,
                    data: o
                }, a = "function" == typeof s ? s.call(null != t ? t : {}, l) : s, n(51) || (a = i.blockHelperMissing.call(t, a, l)), null != a && (u += a), u + "      </p>\n"
            },
            10: function(e, t, n, i, r) {
                return "        Please note that by adding rightsholder information, the respective rightsholder will be able to see monetization and availability settings of this track.\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<div class="audibleEditForm__top">\n  <div class="audibleEditForm__audio">\n    <div class="audibleEditForm__audioButtons">\n' + (null != (a = i["if"].call(s, null != t ? t.showDownload : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + (null != (a = i["if"].call(s, null != t ? t.showUpsell : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, o, 0),
                    inverse: e.program(5, o, 0),
                    data: o
                })) ? a : "") + '    </div>\n  </div>\n  <div class="audibleEditForm__progress">\n    ' + u((n(52) || t && t.$view || l).call(s, n(542), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        showCancelButton: !0
                    },
                    data: o
                })) + '\n  </div>\n</div>\n<div class="audibleEditForm__form sc-media">\n  ' + u((n(52) || t && t.$view || l).call(s, n(751), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.SoundUploadEdit : t
                    },
                    data: o
                })) + "\n\n  " + u((n(52) || t && t.$view || l).call(s, n(1479), {
                    name: "$view",
                    hash: {
                        activeTabIndex: null != (a = null != t ? t._options : t) ? a.activeTabIndex : a,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + '\n\n  <div class="audibleEditForm__formButtons sc-button-toolbar sc-border-light-top">\n    <div class="audibleEditForm__requiredText">' + u((n(51) || t && t.$t || l).call(s, '<span class="sc-orange">*</span> Required fields', {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</div>\n    " + u((n(52) || t && t.$view || l).call(s, n(71), {
                    name: "$view",
                    hash: {
                        size: "medium",
                        button: "save",
                        className: "sc-button-cta",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.SoundUploadEdit : t
                    },
                    data: o
                })) + "\n    " + u((n(52) || t && t.$view || l).call(s, n(71), {
                    name: "$view",
                    hash: {
                        size: "medium",
                        button: "cancel",
                        noStyle: !0,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.SoundUploadEdit : t
                    },
                    data: o
                })) + '\n  </div>\n  <div class="audibleEditForm__foot sc-border-light-top">\n' + (null != (a = (n(51) || t && t.$t || l).call(s, {
                    name: "$t",
                    hash: {
                        faqs: null != (a = null != t ? t.links : t) ? a.faqs : a,
                        copyright: null != (a = null != t ? t.links : t) ? a.copyright : a,
                        termsOfUse: null != (a = null != t ? t.links : t) ? a.termsOfUse : a
                    },
                    fn: e.program(7, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + (null != (a = i["if"].call(s, null != t ? t.hasRightsholderMonetization : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(9, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    3102: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var o;
                return '  <a href="#" class="sc-button">' + e.escapeExpression(e.lambda(null != (o = null != t ? t._options : t) ? o.button_label : o, t)) + "</a>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s = null != t ? t : {};
                return '<p class="inlineError__message sc-type-medium">' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(s, "Sorry, something went wrong.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</p>\n" + (null != (a = i["if"].call(s, null != (a = null != t ? t._options : t) ? a.button_label : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "")
            },
            useData: !0
        })
    },
    3103: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '  <a class="sc-link-verylight" href="' + u((n(57) || t && t.$route || l).call(s, "popularSearches", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" title="' + u((n(51) || t && t.$t || l).call(s, "Popular searches", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Popular searches", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>&nbsp;⁃\n  <a class="sc-link-verylight" href="' + u((n(57) || t && t.$route || l).call(s, "peopleDirectory", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" title="' + u((n(51) || t && t.$t || l).call(s, "People directory", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Directory", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>&nbsp;⁃\n  <a class="sc-link-verylight" href="' + u((n(57) || t && t.$route || l).call(s, "pagesPages", "contact", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" title="' + u((n(51) || t && t.$t || l).call(s, "About SoundCloud", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "About us", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>&nbsp;⁃\n  <a class="sc-link-verylight" href="http://blog.soundcloud.com" target="_blank" title="' + u((n(51) || t && t.$t || l).call(s, "SoundCloud blog", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Blog", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>&nbsp;⁃\n  <a class="sc-link-verylight" href="http://soundcloud.com/jobs" target="_blank" title="' + u((n(51) || t && t.$t || l).call(s, "Jobs at SoundCloud", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Jobs", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>&nbsp;⁃\n  <a class="sc-link-verylight" href="http://developers.soundcloud.com" target="_blank" title="' + u((n(51) || t && t.$t || l).call(s, "SoundCloud for developers", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Developers", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>&nbsp;⁃\n  <a class="sc-link-verylight" href="http://help.soundcloud.com" target="_blank" title="' + u((n(51) || t && t.$t || l).call(s, "SoundCloud help", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Help", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>&nbsp;⁃\n  <a class="sc-link-verylight" href="' + u((n(57) || t && t.$route || l).call(s, "pages", "terms-of-use", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" title="' + u((n(51) || t && t.$t || l).call(s, "Terms of use", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Legal", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a>&nbsp;⁃\n" + (null != (a = i["if"].call(s, null != t ? t.showModernSlaveryLink : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '  <a class="sc-link-verylight" href="' + u((n(57) || t && t.$route || l).call(s, "pagesPages", "privacy", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" title="' + u((n(51) || t && t.$t || l).call(s, "Privacy policy", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Privacy", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>&nbsp;⁃\n  <a class="sc-link-verylight" href="' + u((n(57) || t && t.$route || l).call(s, "pagesPages", "cookies", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" title="' + u((n(51) || t && t.$t || l).call(s, "Cookies policy", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Cookies", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>&nbsp;⁃\n  <a class="sc-link-verylight" href="' + u((n(57) || t && t.$route || l).call(s, "pages", "imprint", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" title="' + u((n(51) || t && t.$t || l).call(s, "Company information", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Imprint", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>&nbsp;⁃\n  <a class="sc-link-verylight" href="' + u((n(57) || t && t.$route || l).call(s, "charts", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" title="' + u((n(51) || t && t.$t || l).call(s, "Charts", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Charts", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a>\n"
            },
            2: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing,
                    l = e.escapeExpression;
                return '    <a class="sc-link-verylight" href="' + l((n(57) || t && t.$route || s).call(a, "pagesPages", "modern-slavery-act", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" title="' + l((n(51) || t && t.$t || s).call(a, "Modern Slavery Act", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + l((n(51) || t && t.$t || s).call(a, "Modern Slavery Act", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a>&nbsp;⁃\n"
            },
            4: function(e, t, n, i, r) {
                var o;
                return null != (o = n["if"].call(null != t ? t : {}, null != t ? t.oscpPage : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, r, 0),
                    inverse: e.program(7, r, 0),
                    data: r
                })) ? o : ""
            },
            5: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '  <a class="sc-link-verylight" href="' + u((n(57) || t && t.$route || l).call(s, "pages", "terms-of-use", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" title="' + u((n(51) || t && t.$t || l).call(s, "Terms of use", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Legal", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a>&nbsp;⁃\n" + (null != (a = i["if"].call(s, null != t ? t.showModernSlaveryLink : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '  <a class="sc-link-verylight" href="' + u((n(57) || t && t.$route || l).call(s, "pagesPages", "privacy", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" title="' + u((n(51) || t && t.$t || l).call(s, "Privacy policy", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Privacy", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>&nbsp;⁃\n  <a class="sc-link-verylight" href="' + u((n(57) || t && t.$route || l).call(s, "pagesPages", "cookies", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" title="' + u((n(51) || t && t.$t || l).call(s, "Cookies policy", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Cookies", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>&nbsp;⁃\n  <a class="sc-link-verylight" href="' + u((n(57) || t && t.$route || l).call(s, "pages", "imprint", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" title="' + u((n(51) || t && t.$t || l).call(s, "Company information", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Imprint", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>&nbsp;⁃\n  <a class="sc-link-verylight" href="' + u((n(57) || t && t.$route || l).call(s, "charts", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" title="' + u((n(51) || t && t.$t || l).call(s, "Charts", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Charts", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>&nbsp;⁃\n  <a class="sc-link-verylight" href="' + u((n(57) || t && t.$route || l).call(s, "popularSearches", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" title="' + u((n(51) || t && t.$t || l).call(s, "Popular searches", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Popular searches", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>&nbsp;⁃\n  <a class="sc-link-verylight" href="' + u((n(57) || t && t.$route || l).call(s, "pagesPages", "copyright", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" title="' + u((n(51) || t && t.$t || l).call(s, "Copyright", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Copyright", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>&nbsp;⁃\n  <a class="sc-link-verylight" href="' + u((n(57) || t && t.$route || l).call(s, "pages", "community-guidelines", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" title="' + u((n(51) || t && t.$t || l).call(s, "Community Guidelines", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Community Guidelines", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>&nbsp;⁃\n  <a class="sc-link-verylight" href="' + u((n(57) || t && t.$route || l).call(s, "pages", "law-enforcement-guidelines", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" title="' + u((n(51) || t && t.$t || l).call(s, "Law Enforcement Guidelines", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Law Enforcement Guidelines", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a>\n"
            },
            7: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '  <a class="sc-link-verylight" href="' + u((n(57) || t && t.$route || l).call(s, "pages", "terms-of-use", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" title="' + u((n(51) || t && t.$t || l).call(s, "Terms of use", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Legal", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a>&nbsp;⁃\n" + (null != (a = i["if"].call(s, null != t ? t.showModernSlaveryLink : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '  <a class="sc-link-verylight" href="' + u((n(57) || t && t.$route || l).call(s, "pagesPages", "privacy", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" title="' + u((n(51) || t && t.$t || l).call(s, "Privacy policy", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Privacy", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>&nbsp;⁃\n  <a class="sc-link-verylight" href="' + u((n(57) || t && t.$route || l).call(s, "pagesPages", "cookies", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" title="' + u((n(51) || t && t.$t || l).call(s, "Cookies policy", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Cookies", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>&nbsp;⁃\n  <a class="sc-link-verylight" href="' + u((n(57) || t && t.$route || l).call(s, "pages", "imprint", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" title="' + u((n(51) || t && t.$t || l).call(s, "Company information", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Imprint", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>&nbsp;⁃\n  <a class="sc-link-verylight" href="' + u((n(57) || t && t.$route || l).call(s, "charts", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" title="' + u((n(51) || t && t.$t || l).call(s, "Charts", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Charts", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>&nbsp;⁃\n  <a class="sc-link-verylight" href="' + u((n(57) || t && t.$route || l).call(s, "popularSearches", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" title="' + u((n(51) || t && t.$t || l).call(s, "Popular searches", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Popular searches", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s = null != t ? t : {};
                return (null != (a = i["if"].call(s, null != t ? t.frontPage : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.program(4, o, 0),
                    data: o
                })) ? a : "") + "<br>" + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(s, n(2017), {
                    name: "$view",
                    hash: {},
                    data: o
                })) + "\n"
            },
            useData: !0
        })
    },
    3110: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                return "header__loggedIn"
            },
            3: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return (null != (a = i["if"].call(s, null != t ? t.showProUpsell : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, o, 0),
                    inverse: e.program(6, o, 0),
                    data: o
                })) ? a : "") + '      <div class="header__soundInput left">\n        ' + u((n(52) || t && t.$view || l).call(s, n(1482), {
                    name: "$view",
                    hash: {
                        className: "header__link",
                        isScButton: !1
                    },
                    data: o
                })) + '\n      </div>\n      <div class="header__userNav">\n        <a href="' + u((n(57) || t && t.$route || l).call(s, "user", null != t ? t.user : t, {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" class="header__userNavButton header__userNavUsernameButton" data-test-id="user-nav-btn">\n          ' + u((n(52) || t && t.$view || l).call(s, n(86), {
                    name: "$view",
                    hash: {
                        className: "header__userNavItem header__userNavAvatar",
                        size: 26,
                        resource_id: null != (a = null != t ? t.user : t) ? a.id : a,
                        resource_type: "user"
                    },
                    data: o
                })) + '\n          <div class="header__userNavItem">\n            <div class="header__userNavUsername sc-truncate">' + u(e.lambda(null != (a = null != t ? t.user : t) ? a.username : a, t)) + '</div>\n          </div>\n        </a>\n        <a href="' + u((n(57) || t && t.$route || l).call(s, "activity", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" class="header__userNavItem header__userNavButton header__userNavActivitiesButton">\n          ' + u((n(52) || t && t.$view || l).call(s, n(1481), {
                    name: "$view",
                    hash: {
                        type: "activities"
                    },
                    data: o
                })) + '\n        </a>\n        <a href="' + u((n(57) || t && t.$route || l).call(s, "messages", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" class="header__userNavItem header__userNavButton header__userNavMessagesButton">\n          ' + u((n(52) || t && t.$view || l).call(s, n(1481), {
                    name: "$view",
                    hash: {
                        type: "messages"
                    },
                    data: o
                })) + "\n        </a>\n      </div>\n"
            },
            4: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing,
                    l = e.escapeExpression;
                return '        <a class="header__link header__proUpsell" href="' + l((n(57) || t && t.$route || s).call(a, "premium", null, null, null != t ? t.upsellRef : t, {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + l((n(51) || t && t.$t || s).call(a, "Try Pro", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a>\n"
            },
            6: function(e, t, n, i, r) {
                var o;
                return null != (o = n["if"].call(null != t ? t : {}, null != t ? t.showGoUpsell : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : ""
            },
            7: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing;
                return "        " + e.escapeExpression((n(52) || t && t.$view || s).call(a, n(1480), {
                    name: "$view",
                    hash: {
                        trackImpressions: !1,
                        referral: "t1019",
                        text: (n(51) || t && t.$t || s).call(a, "Upgrade", {
                            name: "$t",
                            hash: {
                                _comment: "Upgrade (to another subscription)"
                            },
                            data: o
                        }),
                        className: "header__link header__goUpsell"
                    },
                    data: o
                })) + "\n      "
            },
            9: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing,
                    l = e.escapeExpression;
                return '      <div class="header__loginMenu left">\n        ' + l((n(52) || t && t.$view || s).call(a, n(136), {
                    name: "$view",
                    hash: {},
                    data: o
                })) + "\n        " + l((n(52) || t && t.$view || s).call(a, n(136), {
                    name: "$view",
                    hash: {
                        text: (n(51) || t && t.$t || s).call(a, "Create account", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        type: "signup"
                    },
                    data: o
                })) + '\n      </div>\n      <div class="header__upload left">\n        ' + l((n(52) || t && t.$view || s).call(a, n(1482), {
                    name: "$view",
                    hash: {
                        className: "header__link",
                        isScButton: !1
                    },
                    data: o
                })) + "\n      </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<div class="header__inner l-container l-fullwidth ' + (null != (a = i["if"].call(s, null != t ? t.loggedIn : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '">\n  <div class="header__left">\n    <div class="header__logo left">\n      <a href="/" title="' + u((n(51) || t && t.$t || l).call(s, "Home", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '" class="header__logoLink header__logoLink-iconOnly sc-border-box sc-ir">' + u((n(51) || t && t.$t || l).call(s, "SoundCloud", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>\n      <a href="/" title="' + u((n(51) || t && t.$t || l).call(s, "Home", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '" class="header__logoLink header__logoLink-wordmark sc-border-box sc-ir">' + u((n(51) || t && t.$t || l).call(s, "SoundCloud", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>\n    </div>\n    <nav class="left header__navWrapper" role="navigation">\n      <ul class="header__navMenu left sc-list-nostyle">\n        <li>\n          <a class="header__navMenuItem" data-menu-name="home" href="' + u((n(57) || t && t.$route || l).call(s, "recommended", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Home", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>\n        </li>\n        <li>\n          <a class="header__navMenuItem" data-menu-name="stream" href="' + u((n(57) || t && t.$route || l).call(s, "stream", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Stream", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>\n        </li>\n        <li class="header__collection-wrapper">\n          <a class="header__navMenuItem" data-menu-name="library" href="' + u((n(57) || t && t.$route || l).call(s, "youNetwork", null, "library", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Library", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n  <div class="header__middle">\n    <div class="header__search" role="search">\n      ' + u((n(52) || t && t.$view || l).call(s, n(670), {
                    name: "$view",
                    hash: {},
                    data: o
                })) + '\n    </div>\n  </div>\n  <div class="header__right sc-clearfix">\n' + (null != (a = i["if"].call(s, null != t ? t.loggedIn : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, o, 0),
                    inverse: e.program(9, o, 0),
                    data: o
                })) ? a : "") + '    <ul class="header__navMenu sc-clearfix sc-list-nostyle left">\n      <li><a href="" class="header__moreButton sc-ir">' + u((n(51) || t && t.$t || l).call(s, "Settings and more", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a></li>\n    </ul>\n  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    3111: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                return "    <li>\n      " + e.escapeExpression((n(52) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1480), {
                    name: "$view",
                    hash: {
                        text: null != t ? t.consumerUpsell : t,
                        referral: "t1022",
                        className: "moreMenu__link m-highlight"
                    },
                    data: o
                })) + "\n    </li>\n"
            },
            3: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing,
                    l = e.escapeExpression;
                return '  <ul class="moreMenu__list sc-list-nostyle">\n    <li><a class="moreMenu__link moreMenu__proUpsell" href="' + l((n(57) || t && t.$route || s).call(a, "premium", null, null, null != t ? t.upsellRef : t, {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + l((n(51) || t && t.$t || s).call(a, "Pro plans", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a></li>\n  </ul>\n"
            },
            5: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing,
                    l = e.escapeExpression;
                return '  <ul class="moreMenu__list sc-list-nostyle">\n    <li><a class="moreMenu__link" href="' + l((n(57) || t && t.$route || s).call(a, "youNetwork", null, "subscriptions", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + l((n(51) || t && t.$t || s).call(a, "Subscription", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a></li>\n    <li><a class="moreMenu__link outgoing-settings" href="' + l((n(57) || t && t.$route || s).call(a, "settings", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + l((n(51) || t && t.$t || s).call(a, "Settings", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a></li>\n    <li><a class="moreMenu__link" href="' + l((n(57) || t && t.$route || s).call(a, "logout", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + l((n(51) || t && t.$t || s).call(a, "Sign out", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a></li>\n  </ul>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<ul class="moreMenu__list sc-list-nostyle">\n  <li><a class="moreMenu__link" href="' + u((n(57) || t && t.$route || l).call(s, "pagesPages", "contact", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "About us", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a></li>\n  <li><a class="moreMenu__link" href="' + u((n(57) || t && t.$route || l).call(s, "pages", "terms-of-use", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Legal", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a></li>\n  <li><a class="moreMenu__link" href="' + u((n(57) || t && t.$route || l).call(s, "pagesPages", "copyright", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Copyright", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a></li>\n</ul>\n<ul class="moreMenu__list sc-list-nostyle">\n' + (null != (a = i["if"].call(s, null != t ? t.showGoUpsell : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '  <li><a class="moreMenu__link" href="' + u((n(57) || t && t.$route || l).call(s, "mobile", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" >' + u((n(51) || t && t.$t || l).call(s, "Mobile apps", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a></li>\n  <li>\n    " + u((n(52) || t && t.$view || l).call(s, n(1994), {
                    name: "$view",
                    hash: {
                        isInvitedToOscp: null != t ? t.isInvitedToOscp : t,
                        className: "moreMenu__link"
                    },
                    data: o
                })) + '\n  </li>\n  <li><a class="moreMenu__link" href="https://creators.soundcloud.com" target="_blank">' + u((n(51) || t && t.$t || l).call(s, "For Creators", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a></li>\n  <li><a class="moreMenu__link" href="http://blog.soundcloud.com" target="_blank">' + u((n(51) || t && t.$t || l).call(s, "Blog", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a></li>\n  <li><a class="moreMenu__link" href="http://soundcloud.com/jobs" target="_blank">' + u((n(51) || t && t.$t || l).call(s, "Jobs", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a></li>\n  <li><a class="moreMenu__link" href="http://developers.soundcloud.com" target="_blank">' + u((n(51) || t && t.$t || l).call(s, "Developers", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a></li>\n</ul>\n<ul class="moreMenu__list sc-list-nostyle">\n  <li><a class="moreMenu__link" href="https://help.soundcloud.com/hc/en-us/articles/115000183994-soundcloud-support-resources" target="_blank">' + u((n(51) || t && t.$t || l).call(s, "Support", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a></li>\n  <li><a class="moreMenu__link moreMenu__keyboard" href="/">' + u((n(51) || t && t.$t || l).call(s, "Keyboard shortcuts", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a></li>\n</ul>\n" + (null != (a = i["if"].call(s, null != t ? t.showProUpsell : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "\n" + (null != (a = i["if"].call(s, null != t ? t.isLoggedIn : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "")
            },
            useData: !0
        })
    },
    3112: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return '<span class="sc-ir">' + c((s = null != (s = i.name || (null != t ? t.name : t)) ? s : u, "function" == typeof s ? s.call(l, {
                    name: "name",
                    hash: {},
                    data: o
                }) : s)) + '</span>\n<span class="notificationIcon__badge">\n  ' + c((n(52) || t && t.$view || u).call(l, n(2070), {
                    name: "$view",
                    hash: {
                        type: null != (a = null != t ? t._options : t) ? a.type : a
                    },
                    data: o
                })) + "\n</span>\n"
            },
            useData: !0
        })
    },
    3113: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing,
                    l = e.escapeExpression;
                return '    <li class="profileMenu__item">\n      <a class="profileMenu__link profileMenu__likes" href="' + l((n(57) || t && t.$route || s).call(a, "youNetwork", null, "likes", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + l((n(51) || t && t.$t || s).call(a, "Likes", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a>\n    </li>\n"
            },
            3: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing,
                    l = e.escapeExpression;
                return '    <li class="profileMenu__item">\n      <a class="profileMenu__link profileMenu__sets" href="' + l((n(57) || t && t.$route || s).call(a, "youNetwork", null, "sets", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + l((n(51) || t && t.$t || s).call(a, "Playlists", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a>\n    </li>\n"
            },
            5: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing,
                    l = e.escapeExpression;
                return '    <li class="profileMenu__item">\n      <a class="profileMenu__link profileMenu__following" href="' + l((n(57) || t && t.$route || s).call(a, "youNetwork", null, "following", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + l((n(51) || t && t.$t || s).call(a, "Following", {
                    name: "$t",
                    hash: {
                        _context: "menu-item"
                    },
                    data: o
                })) + "</a>\n    </li>\n"
            },
            7: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing,
                    l = e.escapeExpression;
                return '    <li class="profileMenu__item">\n      <a class="profileMenu__link profileMenu__premium" href="' + l((n(57) || t && t.$route || s).call(a, "premium", null, null, null != t ? t.ref : t, {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + l((n(51) || t && t.$t || s).call(a, "Try Pro", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a>\n    </li>\n"
            },
            9: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing,
                    l = e.escapeExpression;
                return '    <li class="profileMenu__item">\n      <a class="profileMenu__link profileMenu__stats outgoing-stats" href="' + l((n(57) || t && t.$route || s).call(a, "stats", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + l((n(51) || t && t.$t || s).call(a, "Stats", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a>\n    </li>\n"
            },
            11: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing,
                    l = e.escapeExpression;
                return '    <li class="profileMenu__item">\n      <a class="profileMenu__link profileMenu__earnings" href="' + l((n(57) || t && t.$route || s).call(a, "reports", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + l((n(51) || t && t.$t || s).call(a, "Earnings", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a>\n    </li>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a, s = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<ul class="profileMenu__list profileMenu__listener sc-list-nostyle">\n  <li class="profileMenu__item">\n    <a class="profileMenu__link profileMenu__profile" href="' + u((n(57) || t && t.$route || l).call(s, "user", null != t ? t.user : t, {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Profile", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a>\n  </li>\n" + (null != (a = i["if"].call(s, null != t ? t.showLikes : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + (null != (a = i["if"].call(s, null != t ? t.showSets : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '  <li class="profileMenu__item">\n    <a class="profileMenu__link profileMenu__stations" href="' + u((n(57) || t && t.$route || l).call(s, "youNetwork", null, "stations", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Stations", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a>\n  </li>\n" + (null != (a = i["if"].call(s, null != t ? t.showFollowing : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '  <li class="profileMenu__item">\n    <a class="profileMenu__link profileMenu__friends" href="' + u((n(57) || t && t.$route || l).call(s, "people", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Who to follow", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a>\n  </li>\n" + (null != (a = i["if"].call(s, null != t ? t.showUpsell : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + '</ul>\n<ul class="profileMenu__list profileMenu__creator sc-list-nostyle">\n  <li class="profileMenu__item">\n    <a class="profileMenu__link profileMenu__trackManager" href="' + u((n(57) || t && t.$route || l).call(s, "trackManager", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(s, "Tracks", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a>\n  </li>\n" + (null != (a = i["if"].call(s, null != t ? t.showStats : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(9, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + (null != (a = i["if"].call(s, null != t ? t.canSeeEarnings : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(11, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? a : "") + "</ul>\n"
            },
            useData: !0
        })
    },
    3139: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var a = null != t ? t : {},
                    s = i.helperMissing,
                    l = e.escapeExpression;
                return '<div class="localeSelectorContent__wrapper sc-border-light-bottom">\n  <h2 class="localeSelectorContent__title g-modal-title-h1">' + l((n(51) || t && t.$t || s).call(a, "Select your language", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</h2>\n</div>\n<button type="button" class="localeSelector__cancel sc-button-nostyle sc-button sc-button-medium" tabindex="0" title="Cancel">' + l((n(51) || t && t.$t || s).call(a, "Cancel", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</button>\n\n"
            },
            useData: !0
        })
    },
    3422: function(e, t, n) {
        var i = n(2386);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3424: function(e, t, n) {
        var i = n(2388);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3425: function(e, t, n) {
        var i = n(2389);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3426: function(e, t, n) {
        var i = n(2390);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3427: function(e, t, n) {
        var i = n(2391);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3429: function(e, t, n) {
        var i = n(2393);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3430: function(e, t, n) {
        var i = n(2394);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3433: function(e, t, n) {
        var i = n(2399);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3435: function(e, t, n) {
        var i = n(2401);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3437: function(e, t, n) {
        var i = n(2403);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3438: function(e, t, n) {
        var i = n(2404);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3439: function(e, t, n) {
        var i = n(2405);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3440: function(e, t, n) {
        var i = n(2406);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3441: function(e, t, n) {
        var i = n(2407);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3444: function(e, t, n) {
        var i = n(2412);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3445: function(e, t, n) {
        var i = n(2413);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3446: function(e, t, n) {
        var i = n(2414);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3447: function(e, t, n) {
        var i = n(2415);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3448: function(e, t, n) {
        var i = n(2416);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3451: function(e, t, n) {
        var i = n(2419);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3457: function(e, t, n) {
        var i = n(2430);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3458: function(e, t, n) {
        var i = n(2431);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3459: function(e, t, n) {
        var i = n(2432);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3460: function(e, t, n) {
        var i = n(2433);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3461: function(e, t, n) {
        var i = n(2435);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3472: function(e, t, n) {
        var i = n(2447);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3474: function(e, t, n) {
        var i = n(2449);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3475: function(e, t, n) {
        var i = n(2450);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3476: function(e, t, n) {
        var i = n(2451);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3478: function(e, t, n) {
        var i = n(2453);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3483: function(e, t, n) {
        var i = n(2459);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3484: function(e, t, n) {
        var i = n(2460);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3488: function(e, t, n) {
        var i = n(2464);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3489: function(e, t, n) {
        var i = n(2466);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3490: function(e, t, n) {
        var i = n(2467);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3491: function(e, t, n) {
        var i = n(2468);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3492: function(e, t, n) {
        var i = n(2470);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3493: function(e, t, n) {
        var i = n(2471);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3494: function(e, t, n) {
        var i = n(2472);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3495: function(e, t, n) {
        var i = n(2474);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3496: function(e, t, n) {
        var i = n(2475);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3497: function(e, t, n) {
        var i = n(2476);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3498: function(e, t, n) {
        var i = n(2477);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3504: function(e, t, n) {
        var i = n(2483);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3505: function(e, t, n) {
        var i = n(2484);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3506: function(e, t, n) {
        var i = n(2485);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3507: function(e, t, n) {
        var i = n(2486);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3508: function(e, t, n) {
        var i = n(2487);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3510: function(e, t, n) {
        var i = n(2489);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3512: function(e, t, n) {
        var i = n(2491);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3513: function(e, t, n) {
        var i = n(2492);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3518: function(e, t, n) {
        var i = n(2497);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3519: function(e, t, n) {
        var i = n(2498);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3520: function(e, t, n) {
        var i = n(2499);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3521: function(e, t, n) {
        var i = n(2500);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3522: function(e, t, n) {
        var i = n(2501);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3546: function(e, t, n) {
        var i = n(2525);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    }
}); //# sourceMappingURL=http://ent/web-sourcemaps/views-al-399d411-e273469-3.js.map