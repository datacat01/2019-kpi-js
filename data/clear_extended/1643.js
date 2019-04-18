! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery || Zepto)
}(function(t) {
    var e = function(e, n, r) {
        var i = {
            invalid: [],
            getCaret: function() {
                try {
                    var t, n = 0,
                        r = e.get(0),
                        s = document.selection,
                        a = r.selectionStart;
                    return s && -1 === navigator.appVersion.indexOf("MSIE 10") ? (t = s.createRange(), t.moveStart("character", -i.val().length), n = t.text.length) : (a || "0" === a) && (n = a), n
                } catch (t) {}
            },
            setCaret: function(t) {
                try {
                    if (e.is(":focus")) {
                        var n;
                        n = e.get(0).createTextRange(), n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", t), n.select()
                    }
                } catch (t) {}
            },
            events: function() {
                e.on("keydown.mask", function(t) {
                    e.data("mask-keycode", t.keyCode || t.which)
                }).on(t.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", i.behaviour).on("paste.mask drop.mask", function() {
                    setTimeout(function() {
                        e.keydown().keyup()
                    }, 100)
                }).on("change.mask", function() {
                    e.data("changed", !0)
                }).on("blur.mask", function() {
                    o === i.val() || e.data("changed") || e.trigger("change"), e.data("changed", !1)
                }).on("blur.mask", function() {
                    o = i.val()
                }).on("focus.mask", function(e) {
                    !0 === r.selectOnFocus && t(e.target).select()
                }).on("focusout.mask", function() {
                    r.clearIfNotMatch && !s.test(i.val()) && i.val("")
                })
            },
            getRegexMask: function() {
                for (var t, e, r, i, s = [], o = 0; o < n.length; o++)(t = a.translation[n.charAt(o)]) ? (e = t.pattern.toString().replace(/.{1}$|^.{1}/g, ""), r = t.optional, (t = t.recursive) ? (s.push(n.charAt(o)), i = {
                    digit: n.charAt(o),
                    pattern: e
                }) : s.push(r || t ? e + "?" : e)) : s.push(n.charAt(o).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                return s = s.join(""), i && (s = s.replace(new RegExp("(" + i.digit + "(.*" + i.digit + ")?)"), "($1)?").replace(new RegExp(i.digit, "g"), i.pattern)), new RegExp(s)
            },
            destroyEvents: function() {
                e.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))
            },
            val: function(t) {
                var n = e.is("input") ? "val" : "text";
                return 0 < arguments.length ? (e[n]() !== t && e[n](t), n = e) : n = e[n](), n
            },
            getMCharsBeforeCount: function(t, e) {
                for (var r = 0, i = 0, s = n.length; i < s && i < t; i++) a.translation[n.charAt(i)] || (t = e ? t + 1 : t, r++);
                return r
            },
            caretPos: function(t, e, r, s) {
                return a.translation[n.charAt(Math.min(t - 1, n.length - 1))] ? Math.min(t + r - e - s, r) : i.caretPos(t + 1, e, r, s)
            },
            behaviour: function(n) {
                n = n || window.event, i.invalid = [];
                var r = e.data("mask-keycode");
                if (-1 === t.inArray(r, a.byPassKeys)) {
                    var s = i.getCaret(),
                        o = i.val().length,
                        u = i.getMasked(),
                        l = u.length,
                        h = i.getMCharsBeforeCount(l - 1) - i.getMCharsBeforeCount(o - 1),
                        c = s < o;
                    return i.val(u), c && (8 !== r && 46 !== r && (s = i.caretPos(s, o, l, h)), i.setCaret(s)), i.callbacks(n)
                }
            },
            getMasked: function(t) {
                var e, s, o = [],
                    u = i.val(),
                    l = 0,
                    h = n.length,
                    c = 0,
                    d = u.length,
                    f = 1,
                    p = "push",
                    m = -1;
                for (r.reverse ? (p = "unshift", f = -1, e = 0, l = h - 1, c = d - 1, s = function() {
                        return -1 < l && -1 < c
                    }) : (e = h - 1, s = function() {
                        return l < h && c < d
                    }); s();) {
                    var g = n.charAt(l),
                        v = u.charAt(c),
                        y = a.translation[g];
                    y ? (v.match(y.pattern) ? (o[p](v), y.recursive && (-1 === m ? m = l : l === e && (l = m - f), e === m && (l -= f)), l += f) : y.optional ? (l += f, c -= f) : y.fallback ? (o[p](y.fallback), l += f, c -= f) : i.invalid.push({
                        p: c,
                        v: v,
                        e: y.pattern
                    }), c += f) : (t || o[p](g), v === g && (c += f), l += f)
                }
                return t = n.charAt(e), h !== d + 1 || a.translation[t] || o.push(t), o.join("")
            },
            callbacks: function(t) {
                var s = i.val(),
                    a = s !== o,
                    u = [s, t, e, r],
                    l = function(t, e, n) {
                        "function" == typeof r[t] && e && r[t].apply(this, n)
                    };
                l("onChange", !0 === a, u), l("onKeyPress", !0 === a, u), l("onComplete", s.length === n.length, u), l("onInvalid", 0 < i.invalid.length, [s, t, e, i.invalid, r])
            }
        };
        e = t(e);
        var s, a = this,
            o = i.val();
        n = "function" == typeof n ? n(i.val(), void 0, e, r) : n, a.mask = n, a.options = r, a.remove = function() {
            var t = i.getCaret();
            return i.destroyEvents(), i.val(a.getCleanVal()), i.setCaret(t - i.getMCharsBeforeCount(t)), e
        }, a.getCleanVal = function() {
            return i.getMasked(!0)
        }, a.init = function(n) {
            n = n || !1, r = r || {}, a.clearIfNotMatch = t.jMaskGlobals.clearIfNotMatch, a.byPassKeys = t.jMaskGlobals.byPassKeys, a.translation = t.extend({}, t.jMaskGlobals.translation, r.translation), a = t.extend(!0, {}, a, r), s = i.getRegexMask(), !1 === n ? (r.placeholder && e.attr("placeholder", r.placeholder), e.data("mask") && e.attr("autocomplete", "off"), i.destroyEvents(), i.events(), n = i.getCaret(), i.val(i.getMasked()), i.setCaret(n + i.getMCharsBeforeCount(n, !0))) : (i.events(), i.val(i.getMasked()))
        }, a.init(!e.is("input"))
    };
    t.maskWatchers = {};
    var n = function() {
            var n = t(this),
                i = {},
                s = n.attr("data-mask");
            if (n.attr("data-mask-reverse") && (i.reverse = !0), n.attr("data-mask-clearifnotmatch") && (i.clearIfNotMatch = !0), "true" === n.attr("data-mask-selectonfocus") && (i.selectOnFocus = !0), r(n, s, i)) return n.data("mask", new e(this, s, i))
        },
        r = function(e, n, r) {
            r = r || {};
            var i = t(e).data("mask"),
                s = JSON.stringify;
            e = t(e).val() || t(e).text();
            try {
                return "function" == typeof n && (n = n(e)), "object" != typeof i || s(i.options) !== s(r) || i.mask !== n
            } catch (t) {}
        };
    t.fn.mask = function(n, i) {
        i = i || {};
        var s = this.selector,
            a = t.jMaskGlobals,
            o = a.watchInterval,
            a = i.watchInputs || a.watchInputs,
            u = function() {
                if (r(this, n, i)) return t(this).data("mask", new e(this, n, i))
            };
        return t(this).each(u), s && "" !== s && a && (clearInterval(t.maskWatchers[s]), t.maskWatchers[s] = setInterval(function() {
            t(document).find(s).each(u)
        }, o)), this
    }, t.fn.unmask = function() {
        return clearInterval(t.maskWatchers[this.selector]), delete t.maskWatchers[this.selector], this.each(function() {
            var e = t(this).data("mask");
            e && e.remove().removeData("mask")
        })
    }, t.fn.cleanVal = function() {
        return this.data("mask").getCleanVal()
    }, t.applyDataMask = function(e) {
        e = e || t.jMaskGlobals.maskElements, (e instanceof t ? e : t(e)).filter(t.jMaskGlobals.dataMaskAttr).each(n)
    };
    var i = {
        maskElements: "input,td,span,div",
        dataMaskAttr: "*[data-mask]",
        dataMask: !0,
        watchInterval: 300,
        watchInputs: !0,
        useInput: function(t) {
            var e, n = document.createElement("div");
            return t = "on" + t, e = t in n, e || (n.setAttribute(t, "return;"), e = "function" == typeof n[t]), e
        }("input"),
        watchDataMask: !1,
        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
        translation: {
            0: {
                pattern: /\d/
            },
            9: {
                pattern: /\d/,
                optional: !0
            },
            "#": {
                pattern: /\d/,
                recursive: !0
            },
            A: {
                pattern: /[a-zA-Z0-9]/
            },
            S: {
                pattern: /[a-zA-Z]/
            }
        }
    };
    t.jMaskGlobals = t.jMaskGlobals || {}, i = t.jMaskGlobals = t.extend(!0, {}, i, t.jMaskGlobals), i.dataMask && t.applyDataMask(), setInterval(function() {
        t.jMaskGlobals.watchDataMask && t.applyDataMask()
    }, i.watchInterval)
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
    t.extend(t.fn, {
        validate: function(e) {
            if (!this.length) return void(e && e.debug && window.console);
            var n = t.data(this[0], "validator");
            return n || (this.attr("novalidate", "novalidate"), n = new t.validator(e, this[0]), t.data(this[0], "validator", n), n.settings.onsubmit && (this.validateDelegate(":submit", "click", function(e) {
                n.settings.submitHandler && (n.submitButton = e.target), t(e.target).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (n.cancelSubmit = !0)
            }), this.submit(function(e) {
                function r() {
                    var r, i;
                    return !n.settings.submitHandler || (n.submitButton && (r = t("<input type='hidden'/>").attr("name", n.submitButton.name).val(t(n.submitButton).val()).appendTo(n.currentForm)), i = n.settings.submitHandler.call(n, n.currentForm, e), n.submitButton && r.remove(), void 0 !== i && i)
                }
                return n.settings.debug && e.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, r()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : r() : (n.focusInvalid(), !1)
            })), n)
        },
        valid: function() {
            var e, n;
            return t(this[0]).is("form") ? e = this.validate().form() : (e = !0, n = t(this[0].form).validate(), this.each(function() {
                e = n.element(this) && e
            })), e
        },
        removeAttrs: function(e) {
            var n = {},
                r = this;
            return t.each(e.split(/\s/), function(t, e) {
                n[e] = r.attr(e), r.removeAttr(e)
            }), n
        },
        rules: function(e, n) {
            var r, i, s, a, o, u, l = this[0];
            if (e) switch (r = t.data(l.form, "validator").settings, i = r.rules, s = t.validator.staticRules(l), e) {
                case "add":
                    t.extend(s, t.validator.normalizeRule(n)), delete s.messages, i[l.name] = s, n.messages && (r.messages[l.name] = t.extend(r.messages[l.name], n.messages));
                    break;
                case "remove":
                    return n ? (u = {}, t.each(n.split(/\s/), function(e, n) {
                        u[n] = s[n], delete s[n], "required" === n && t(l).removeAttr("aria-required")
                    }), u) : (delete i[l.name], s)
            }
            return a = t.validator.normalizeRules(t.extend({}, t.validator.classRules(l), t.validator.attributeRules(l), t.validator.dataRules(l), t.validator.staticRules(l)), l), a.required && (o = a.required, delete a.required, a = t.extend({
                required: o
            }, a), t(l).attr("aria-required", "true")), a.remote && (o = a.remote, delete a.remote, a = t.extend(a, {
                remote: o
            })), a
        }
    }), t.extend(t.expr[":"], {
        blank: function(e) {
            return !t.trim("" + t(e).val())
        },
        filled: function(e) {
            return !!t.trim("" + t(e).val())
        },
        unchecked: function(e) {
            return !t(e).prop("checked")
        }
    }), t.validator = function(e, n) {
        this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = n, this.init()
    }, t.validator.format = function(e, n) {
        return 1 === arguments.length ? function() {
            var n = t.makeArray(arguments);
            return n.unshift(e), t.validator.format.apply(this, n)
        } : (arguments.length > 2 && n.constructor !== Array && (n = t.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), t.each(n, function(t, n) {
            e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function() {
                return n
            })
        }), e)
    }, t.extend(t.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: t([]),
            errorLabelContainer: t([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(t) {
                this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
            },
            onfocusout: function(t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            },
            onkeyup: function(t, e) {
                (9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t)
            },
            onclick: function(t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function(e, n, r) {
                "radio" === e.type ? this.findByName(e.name).addClass(n).removeClass(r) : t(e).addClass(n).removeClass(r)
            },
            unhighlight: function(e, n, r) {
                "radio" === e.type ? this.findByName(e.name).removeClass(n).addClass(r) : t(e).removeClass(n).addClass(r)
            }
        },
        setDefaults: function(e) {
            t.extend(t.validator.defaults, e)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: t.validator.format("Please enter no more than {0} characters."),
            minlength: t.validator.format("Please enter at least {0} characters."),
            rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
            range: t.validator.format("Please enter a value between {0} and {1}."),
            max: t.validator.format("Please enter a value less than or equal to {0}."),
            min: t.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function e(e) {
                    var n = t.data(this[0].form, "validator"),
                        r = "on" + e.type.replace(/^validate/, ""),
                        i = n.settings;
                    i[r] && !this.is(i.ignore) && i[r].call(n, this[0], e)
                }
                this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var n, r = this.groups = {};
                t.each(this.settings.groups, function(e, n) {
                    "string" == typeof n && (n = n.split(/\s/)), t.each(n, function(t, n) {
                        r[n] = e
                    })
                }), n = this.settings.rules, t.each(n, function(e, r) {
                    n[e] = t.validator.normalizeRule(r)
                }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", e).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), t(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                return this.valid()
            },
            element: function(e) {
                var n = this.clean(e),
                    r = this.validationTargetFor(n),
                    i = !0;
                return this.lastElement = r, void 0 === r ? delete this.invalid[n.name] : (this.prepareElement(r), this.currentElements = t(r), i = !1 !== this.check(r), i ? delete this.invalid[r.name] : this.invalid[r.name] = !0), t(e).attr("aria-invalid", !i), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
            },
            showErrors: function(e) {
                if (e) {
                    t.extend(this.errorMap, e), this.errorList = [];
                    for (var n in e) this.errorList.push({
                        message: e[n],
                        element: this.findByName(n)[0]
                    });
                    this.successList = t.grep(this.successList, function(t) {
                        return !(t.name in e)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(t) {
                var e, n = 0;
                for (e in t) n++;
                return n
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(t) {
                t.not(this.containers).text(""), this.addWrapper(t).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (t) {}
            },
            findLastActive: function() {
                var e = this.lastActive;
                return e && 1 === t.grep(this.errorList, function(t) {
                    return t.element.name === e.name
                }).length && e
            },
            elements: function() {
                var e = this,
                    n = {};
                return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function() {
                    return !this.name && e.settings.debug && window.console, !(this.name in n || !e.objectLength(t(this).rules())) && (n[this.name] = !0, !0)
                })
            },
            clean: function(e) {
                return t(e)[0]
            },
            errors: function() {
                var e = this.settings.errorClass.split(" ").join(".");
                return t(this.settings.errorElement + "." + e, this.errorContext)
            },
            reset: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(t) {
                this.reset(), this.toHide = this.errorsFor(t)
            },
            elementValue: function(e) {
                var n, r = t(e),
                    i = e.type;
                return "radio" === i || "checkbox" === i ? t("input[name='" + e.name + "']:checked").val() : "number" === i && void 0 !== e.validity ? !e.validity.badInput && r.val() : (n = r.val(), "string" == typeof n ? n.replace(/\r/g, "") : n)
            },
            check: function(e) {
                e = this.validationTargetFor(this.clean(e));
                var n, r, i, s = t(e).rules(),
                    a = t.map(s, function(t, e) {
                        return e
                    }).length,
                    o = !1,
                    u = this.elementValue(e);
                for (r in s) {
                    i = {
                        method: r,
                        parameters: s[r]
                    };
                    try {
                        if ("dependency-mismatch" === (n = t.validator.methods[r].call(this, u, e, i.parameters)) && 1 === a) {
                            o = !0;
                            continue
                        }
                        if (o = !1, "pending" === n) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                        if (!n) return this.formatAndAdd(e, i), !1
                    } catch (t) {
                        throw this.settings.debug && window.console, t
                    }
                }
                if (!o) return this.objectLength(s) && this.successList.push(e), !0
            },
            customDataMessage: function(e, n) {
                return t(e).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || t(e).data("msg")
            },
            customMessage: function(t, e) {
                var n = this.settings.messages[t];
                return n && (n.constructor === String ? n : n[e])
            },
            findDefined: function() {
                for (var t = 0; t < arguments.length; t++)
                    if (void 0 !== arguments[t]) return arguments[t]
            },
            defaultMessage: function(e, n) {
                return this.findDefined(this.customMessage(e.name, n), this.customDataMessage(e, n), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[n], "<strong>Warning: No message defined for " + e.name + "</strong>")
            },
            formatAndAdd: function(e, n) {
                var r = this.defaultMessage(e, n.method),
                    i = /\$?\{(\d+)\}/g;
                "function" == typeof r ? r = r.call(this, n.parameters, e) : i.test(r) && (r = t.validator.format(r.replace(i, "{$1}"), n.parameters)), this.errorList.push({
                    message: r,
                    element: e,
                    method: n.method
                }), this.errorMap[e.name] = r, this.submitted[e.name] = r
            },
            addWrapper: function(t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
            },
            defaultShowErrors: function() {
                var t, e, n;
                for (t = 0; this.errorList[t]; t++) n = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                if (this.settings.unhighlight)
                    for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return t(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(e, n) {
                var r, i, s, a = this.errorsFor(e),
                    o = this.idOrName(e),
                    u = t(e).attr("aria-describedby");
                a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(n)) : (a = t("<" + this.settings.errorElement + ">").attr("id", o + "-error").addClass(this.settings.errorClass).html(n || ""), r = a, this.settings.wrapper && (r = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(r) : this.settings.errorPlacement ? this.settings.errorPlacement(r, t(e)) : r.insertAfter(e), a.is("label") ? a.attr("for", o) : 0 === a.parents("label[for='" + o + "']").length && (s = a.attr("id").replace(/(:|\.|\[|\])/g, "\\$1"), u ? u.match(new RegExp("\\b" + s + "\\b")) || (u += " " + s) : u = s, t(e).attr("aria-describedby", u), (i = this.groups[e.name]) && t.each(this.groups, function(e, n) {
                    n === i && t("[name='" + e + "']", this.currentForm).attr("aria-describedby", a.attr("id"))
                }))), !n && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, e)), this.toShow = this.toShow.add(a)
            },
            errorsFor: function(e) {
                var n = this.idOrName(e),
                    r = t(e).attr("aria-describedby"),
                    i = "label[for='" + n + "'], label[for='" + n + "'] *";
                return r && (i = i + ", #" + r.replace(/\s+/g, ", #")), this.errors().filter(i)
            },
            idOrName: function(t) {
                return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
            },
            validationTargetFor: function(e) {
                return this.checkable(e) && (e = this.findByName(e.name)), t(e).not(this.settings.ignore)[0]
            },
            checkable: function(t) {
                return /radio|checkbox/i.test(t.type)
            },
            findByName: function(e) {
                return t(this.currentForm).find("[name='" + e + "']")
            },
            getLength: function(e, n) {
                switch (n.nodeName.toLowerCase()) {
                    case "select":
                        return t("option:selected", n).length;
                    case "input":
                        if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
                }
                return e.length
            },
            depend: function(t, e) {
                return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
            },
            dependTypes: {
                boolean: function(t) {
                    return t
                },
                string: function(e, n) {
                    return !!t(e, n.form).length
                },
                function: function(t, e) {
                    return t(e)
                }
            },
            optional: function(e) {
                var n = this.elementValue(e);
                return !t.validator.methods.required.call(this, n, e) && "dependency-mismatch"
            },
            startRequest: function(t) {
                this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
            },
            stopRequest: function(e, n) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(e) {
                return t.data(e, "previousValue") || t.data(e, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(e, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(e, n) {
            e.constructor === String ? this.classRuleSettings[e] = n : t.extend(this.classRuleSettings, e)
        },
        classRules: function(e) {
            var n = {},
                r = t(e).attr("class");
            return r && t.each(r.split(" "), function() {
                this in t.validator.classRuleSettings && t.extend(n, t.validator.classRuleSettings[this])
            }), n
        },
        attributeRules: function(e) {
            var n, r, i = {},
                s = t(e),
                a = e.getAttribute("type");
            for (n in t.validator.methods) "required" === n ? (r = e.getAttribute(n), "" === r && (r = !0), r = !!r) : r = s.attr(n), /min|max/.test(n) && (null === a || /number|range|text/.test(a)) && (r = Number(r)), r || 0 === r ? i[n] = r : a === n && "range" !== a && (i[n] = !0);
            return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i
        },
        dataRules: function(e) {
            var n, r, i = {},
                s = t(e);
            for (n in t.validator.methods) void 0 !== (r = s.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase())) && (i[n] = r);
            return i
        },
        staticRules: function(e) {
            var n = {},
                r = t.data(e.form, "validator");
            return r.settings.rules && (n = t.validator.normalizeRule(r.settings.rules[e.name]) || {}), n
        },
        normalizeRules: function(e, n) {
            return t.each(e, function(r, i) {
                if (!1 === i) return void delete e[r];
                if (i.param || i.depends) {
                    var s = !0;
                    switch (typeof i.depends) {
                        case "string":
                            s = !!t(i.depends, n.form).length;
                            break;
                        case "function":
                            s = i.depends.call(n, n)
                    }
                    s ? e[r] = void 0 === i.param || i.param : delete e[r]
                }
            }), t.each(e, function(r, i) {
                e[r] = t.isFunction(i) ? i(n) : i
            }), t.each(["minlength", "maxlength"], function() {
                e[this] && (e[this] = Number(e[this]))
            }), t.each(["rangelength", "range"], function() {
                var n;
                e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (n = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/), e[this] = [Number(n[0]), Number(n[1])]))
            }), t.validator.autoCreateRanges && (null != e.min && null != e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), null != e.minlength && null != e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
        },
        normalizeRule: function(e) {
            if ("string" == typeof e) {
                var n = {};
                t.each(e.split(/\s/), function() {
                    n[this] = !0
                }), e = n
            }
            return e
        },
        addMethod: function(e, n, r) {
            t.validator.methods[e] = n, t.validator.messages[e] = void 0 !== r ? r : t.validator.messages[e], n.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
        },
        methods: {
            required: function(e, n, r) {
                if (!this.depend(r, n)) return "dependency-mismatch";
                if ("select" === n.nodeName.toLowerCase()) {
                    var i = t(n).val();
                    return i && i.length > 0
                }
                return this.checkable(n) ? this.getLength(e, n) > 0 : t.trim(e).length > 0
            },
            email: function(t, e) {
                return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
            },
            url: function(t, e) {
                return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
            },
            date: function(t, e) {
                return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
            },
            dateISO: function(t, e) {
                return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
            },
            number: function(t, e) {
                return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            },
            digits: function(t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            },
            creditcard: function(t, e) {
                if (this.optional(e)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(t)) return !1;
                var n, r, i = 0,
                    s = 0,
                    a = !1;
                if (t = t.replace(/\D/g, ""), t.length < 13 || t.length > 19) return !1;
                for (n = t.length - 1; n >= 0; n--) r = t.charAt(n), s = parseInt(r, 10), a && (s *= 2) > 9 && (s -= 9), i += s, a = !a;
                return i % 10 == 0
            },
            minlength: function(e, n, r) {
                var i = t.isArray(e) ? e.length : this.getLength(e, n);
                return this.optional(n) || i >= r
            },
            maxlength: function(e, n, r) {
                var i = t.isArray(e) ? e.length : this.getLength(e, n);
                return this.optional(n) || r >= i
            },
            rangelength: function(e, n, r) {
                var i = t.isArray(e) ? e.length : this.getLength(e, n);
                return this.optional(n) || i >= r[0] && i <= r[1]
            },
            min: function(t, e, n) {
                return this.optional(e) || t >= n
            },
            max: function(t, e, n) {
                return this.optional(e) || n >= t
            },
            range: function(t, e, n) {
                return this.optional(e) || t >= n[0] && t <= n[1]
            },
            equalTo: function(e, n, r) {
                var i = t(r);
                return this.settings.onfocusout && i.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    t(n).valid()
                }), e === i.val()
            },
            remote: function(e, n, r) {
                if (this.optional(n)) return "dependency-mismatch";
                var i, s, a = this.previousValue(n);
                return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), a.originalMessage = this.settings.messages[n.name].remote, this.settings.messages[n.name].remote = a.message, r = "string" == typeof r && {
                    url: r
                } || r, a.old === e ? a.valid : (a.old = e, i = this, this.startRequest(n), s = {}, s[n.name] = e, t.ajax(t.extend(!0, {
                    url: r,
                    mode: "abort",
                    port: "validate" + n.name,
                    dataType: "json",
                    data: s,
                    context: i.currentForm,
                    success: function(r) {
                        var s, o, u, l = !0 === r || "true" === r;
                        i.settings.messages[n.name].remote = a.originalMessage, l ? (u = i.formSubmitted, i.prepareElement(n), i.formSubmitted = u, i.successList.push(n), delete i.invalid[n.name], i.showErrors()) : (s = {}, o = r || i.defaultMessage(n, "remote"), s[n.name] = a.message = t.isFunction(o) ? o(e) : o, i.invalid[n.name] = !0, i.showErrors(s)), a.valid = l, i.stopRequest(n, l)
                    }
                }, r)), "pending")
            }
        }
    }), t.format = function() {
        throw "$.format has been deprecated. Please use $.validator.format instead."
    };
    var e, n = {};
    t.ajaxPrefilter ? t.ajaxPrefilter(function(t, e, r) {
        var i = t.port;
        "abort" === t.mode && (n[i] && n[i].abort(), n[i] = r)
    }) : (e = t.ajax, t.ajax = function(r) {
        var i = ("mode" in r ? r : t.ajaxSettings).mode,
            s = ("port" in r ? r : t.ajaxSettings).port;
        return "abort" === i ? (n[s] && n[s].abort(), n[s] = e.apply(this, arguments), n[s]) : e.apply(this, arguments)
    }), t.extend(t.fn, {
        validateDelegate: function(e, n, r) {
            return this.bind(n, function(n) {
                var i = t(n.target);
                return i.is(e) ? r.apply(i, arguments) : void 0
            })
        }
    })
}),
function() {
    "use strict";

    function t(r) {
        if (!r) throw new Error("No options passed to Waypoint constructor");
        if (!r.element) throw new Error("No element option passed to Waypoint constructor");
        if (!r.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, r), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = r.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), n[this.key] = this, e += 1
    }
    var e = 0,
        n = {};
    t.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function(t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete n[this.key]
    }, t.prototype.disable = function() {
        return this.enabled = !1, this
    }, t.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function() {
        return this.group.next(this)
    }, t.prototype.previous = function() {
        return this.group.previous(this)
    }, t.invokeAll = function(t) {
        var e = [];
        for (var r in n) e.push(n[r]);
        for (var i = 0, s = e.length; s > i; i++) e[i][t]()
    }, t.destroyAll = function() {
        t.invokeAll("destroy")
    }, t.disableAll = function() {
        t.invokeAll("disable")
    }, t.enableAll = function() {
        t.invokeAll("enable")
    }, t.refreshAll = function() {
        t.Context.refreshAll()
    }, t.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(),
function() {
    "use strict";

    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    function e(t) {
        this.element = t, this.Adapter = i.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + n, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, r[t.waypointContextKey] = this, n += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var n = 0,
        r = {},
        i = window.Waypoint,
        s = window.onload;
    e.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete r[this.key])
    }, e.prototype.createThrottledResizeHandler = function() {
        function t() {
            e.handleResize(), e.didResize = !1
        }
        var e = this;
        this.adapter.on("resize.waypoints", function() {
            e.didResize || (e.didResize = !0, i.requestAnimationFrame(t))
        })
    }, e.prototype.createThrottledScrollHandler = function() {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function() {
            (!e.didScroll || i.isTouch) && (e.didScroll = !0, i.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function() {
        i.Context.refreshAll()
    }, e.prototype.handleScroll = function() {
        var t = {},
            e = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var n in e) {
            var r = e[n],
                i = r.newScroll > r.oldScroll,
                s = i ? r.forward : r.backward;
            for (var a in this.waypoints[n]) {
                var o = this.waypoints[n][a],
                    u = r.oldScroll < o.triggerPoint,
                    l = r.newScroll >= o.triggerPoint,
                    h = u && l,
                    c = !u && !l;
                (h || c) && (o.queueTrigger(s), t[o.group.id] = o.group)
            }
        }
        for (var d in t) t[d].flushTriggers();
        this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll
        }
    }, e.prototype.innerHeight = function() {
        return this.element == this.element.window ? i.viewportHeight() : this.adapter.innerHeight()
    }, e.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, e.prototype.innerWidth = function() {
        return this.element == this.element.window ? i.viewportWidth() : this.adapter.innerWidth()
    }, e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var n in this.waypoints[e]) t.push(this.waypoints[e][n]);
        for (var r = 0, i = t.length; i > r; r++) t[r].destroy()
    }, e.prototype.refresh = function() {
        var t, e = this.element == this.element.window,
            n = this.adapter.offset(),
            r = {};
        this.handleScroll(), t = {
            horizontal: {
                contextOffset: e ? 0 : n.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : n.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var i in t) {
            var s = t[i];
            for (var a in this.waypoints[i]) {
                var o, u, l, h, c, d = this.waypoints[i][a],
                    f = d.options.offset,
                    p = d.triggerPoint,
                    m = 0,
                    g = null == p;
                d.element !== d.element.window && (m = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), o = s.contextScroll - s.contextOffset, d.triggerPoint = m + o - f, u = p < s.oldScroll, l = d.triggerPoint >= s.oldScroll, h = u && l, c = !u && !l, !g && h ? (d.queueTrigger(s.backward), r[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), r[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), r[d.group.id] = d.group)
            }
        }
        for (var v in r) r[v].flushTriggers();
        return this
    }, e.findOrCreateByElement = function(t) {
        return e.findByElement(t) || new e(t)
    }, e.refreshAll = function() {
        for (var t in r) r[t].refresh()
    }, e.findByElement = function(t) {
        return r[t.waypointContextKey]
    }, window.onload = function() {
        s && s(), e.refreshAll()
    }, i.requestAnimationFrame = function(e) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
    }, i.Context = e
}(),
function() {
    "use strict";

    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function n(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), r[this.axis][this.name] = this
    }
    var r = {
            vertical: {},
            horizontal: {}
        },
        i = window.Waypoint;
    n.prototype.add = function(t) {
        this.waypoints.push(t)
    }, n.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, n.prototype.flushTriggers = function() {
        for (var n in this.triggerQueues) {
            var r = this.triggerQueues[n],
                i = "up" === n || "left" === n;
            r.sort(i ? e : t);
            for (var s = 0, a = r.length; a > s; s += 1) {
                var o = r[s];
                (o.options.continuous || s === r.length - 1) && o.trigger([n])
            }
        }
        this.clearTriggerQueues()
    }, n.prototype.next = function(e) {
        this.waypoints.sort(t);
        var n = i.Adapter.inArray(e, this.waypoints);
        return n === this.waypoints.length - 1 ? null : this.waypoints[n + 1]
    }, n.prototype.previous = function(e) {
        this.waypoints.sort(t);
        var n = i.Adapter.inArray(e, this.waypoints);
        return n ? this.waypoints[n - 1] : null
    }, n.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t)
    }, n.prototype.remove = function(t) {
        var e = i.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, n.prototype.first = function() {
        return this.waypoints[0]
    }, n.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, n.findOrCreate = function(t) {
        return r[t.axis][t.name] || new n(t)
    }, i.Group = n
}(),
function() {
    "use strict";

    function t(t) {
        this.$element = e(t)
    }
    var e = window.jQuery,
        n = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, n) {
        t.prototype[n] = function() {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[n].apply(this.$element, t)
        }
    }), e.each(["extend", "inArray", "isEmptyObject"], function(n, r) {
        t[r] = e[r]
    }), n.adapters.push({
        name: "jquery",
        Adapter: t
    }), n.Adapter = t
}(),
function() {
    "use strict";

    function t(t) {
        return function() {
            var n = [],
                r = arguments[0];
            return t.isFunction(arguments[0]) && (r = t.extend({}, arguments[1]), r.handler = arguments[0]), this.each(function() {
                var i = t.extend({}, r, {
                    element: this
                });
                "string" == typeof i.context && (i.context = t(this).closest(i.context)[0]), n.push(new e(i))
            }), n
        }
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}(),
function(t) {
    var e = -1,
        n = -1,
        r = function(t) {
            return parseFloat(t) || 0
        },
        i = function(e) {
            var n = null,
                i = [];
            return t(e).each(function() {
                var e = t(this),
                    s = e.offset().top - r(e.css("margin-top")),
                    a = 0 < i.length ? i[i.length - 1] : null;
                null === a ? i.push(e) : 1 >= Math.floor(Math.abs(n - s)) ? i[i.length - 1] = a.add(e) : i.push(e), n = s
            }), i
        },
        s = function(e) {
            var n = {
                byRow: !0,
                property: "height",
                target: null,
                remove: !1
            };
            return "object" == typeof e ? t.extend(n, e) : ("boolean" == typeof e ? n.byRow = e : "remove" === e && (n.remove = !0), n)
        },
        a = t.fn.matchHeight = function(e) {
            if (e = s(e), e.remove) {
                var n = this;
                return this.css(e.property, ""), t.each(a._groups, function(t, e) {
                    e.elements = e.elements.not(n)
                }), this
            }
            return 1 >= this.length && !e.target ? this : (a._groups.push({
                elements: this,
                options: e
            }), a._apply(this, e), this)
        };
    a._groups = [], a._throttle = 80, a._maintainScroll = !1, a._beforeUpdate = null, a._afterUpdate = null, a._apply = function(e, n) {
        var o = s(n),
            u = t(e),
            l = [u],
            h = t(window).scrollTop(),
            c = t("html").outerHeight(!0),
            d = u.parents().filter(":hidden");
        return d.each(function() {
            var e = t(this);
            e.data("style-cache", e.attr("style"))
        }), d.css("display", "block"), o.byRow && !o.target && (u.each(function() {
            var e = t(this),
                n = "inline-block" === e.css("display") ? "inline-block" : "block";
            e.data("style-cache", e.attr("style")), e.css({
                display: n,
                "padding-top": "0",
                "padding-bottom": "0",
                "margin-top": "0",
                "margin-bottom": "0",
                "border-top-width": "0",
                "border-bottom-width": "0",
                height: "100px"
            })
        }), l = i(u), u.each(function() {
            var e = t(this);
            e.attr("style", e.data("style-cache") || "")
        })), t.each(l, function(e, n) {
            var i = t(n),
                s = 0;
            if (o.target) s = o.target.outerHeight(!1);
            else {
                if (o.byRow && 1 >= i.length) return void i.css(o.property, "");
                i.each(function() {
                    var e = t(this),
                        n = {
                            display: "inline-block" === e.css("display") ? "inline-block" : "block"
                        };
                    n[o.property] = "", e.css(n), e.outerHeight(!1) > s && (s = e.outerHeight(!1)), e.css("display", "")
                })
            }
            i.each(function() {
                var e = t(this),
                    n = 0;
                o.target && e.is(o.target) || ("border-box" !== e.css("box-sizing") && (n += r(e.css("border-top-width")) + r(e.css("border-bottom-width")), n += r(e.css("padding-top")) + r(e.css("padding-bottom"))), e.css(o.property, s - n))
            })
        }), d.each(function() {
            var e = t(this);
            e.attr("style", e.data("style-cache") || null)
        }), a._maintainScroll && t(window).scrollTop(h / c * t("html").outerHeight(!0)), this
    }, a._applyDataApi = function() {
        var e = {};
        t("[data-match-height], [data-mh]").each(function() {
            var n = t(this),
                r = n.attr("data-mh") || n.attr("data-match-height");
            e[r] = r in e ? e[r].add(n) : n
        }), t.each(e, function() {
            this.matchHeight(!0)
        })
    };
    var o = function(e) {
        a._beforeUpdate && a._beforeUpdate(e, a._groups), t.each(a._groups, function() {
            a._apply(this.elements, this.options)
        }), a._afterUpdate && a._afterUpdate(e, a._groups)
    };
    a._update = function(r, i) {
        if (i && "resize" === i.type) {
            var s = t(window).width();
            if (s === e) return;
            e = s
        }
        r ? -1 === n && (n = setTimeout(function() {
            o(i), n = -1
        }, a._throttle)) : o(i)
    }, t(a._applyDataApi), t(window).bind("load", function(t) {
        a._update(!1, t)
    }), t(window).bind("resize orientationchange", function(t) {
        a._update(!0, t)
    })
}(jQuery),
function(t, e) {
    function n(t, e, n) {
        var r = t.children(),
            i = !1;
        t.empty();
        for (var a = 0, o = r.length; o > a; a++) {
            var u = r.eq(a);
            if (t.append(u), n && t.append(n), s(t, e)) {
                u.remove(), i = !0;
                break
            }
            n && n.detach()
        }
        return i
    }

    function r(e, n, a, o, u) {
        var l = !1;
        return e.contents().detach().each(function() {
            var h = this,
                c = t(h);
            if (void 0 === h) return !0;
            if (c.is("script, .dotdotdot-keep")) e.append(c);
            else {
                if (l) return !0;
                e.append(c), !u || c.is(o.after) || c.find(o.after).length || e[e.is("a, table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style") ? "after" : "append"](u), s(a, o) && ((l = 3 == h.nodeType ? i(c, n, a, o, u) : r(c, n, a, o, u)) || (c.detach(), l = !0)), l || u && u.detach()
            }
        }), n.addClass("is-truncated"), l
    }

    function i(e, n, r, i, o) {
        var h = e[0];
        if (!h) return !1;
        var d = l(h),
            f = -1 !== d.indexOf(" ") ? " " : "　",
            p = "letter" == i.wrap ? "" : f,
            m = d.split(p),
            g = -1,
            v = -1,
            y = 0,
            w = m.length - 1;
        for (i.fallbackToLetter && 0 == y && 0 == w && (p = "", m = d.split(p), w = m.length - 1); w >= y && (0 != y || 0 != w);) {
            var _ = Math.floor((y + w) / 2);
            if (_ == v) break;
            v = _, u(h, m.slice(0, v + 1).join(p) + i.ellipsis), r.children().each(function() {
                t(this).toggle().toggle()
            }), s(r, i) ? (w = v, i.fallbackToLetter && 0 == y && 0 == w && (p = "", m = m[0].split(p), g = -1, v = -1, y = 0, w = m.length - 1)) : (g = v, y = v)
        }
        if (-1 == g || 1 == m.length && 0 == m[0].length) {
            var b = e.parent();
            e.detach();
            var k = o && o.closest(b).length ? o.length : 0;
            b.contents().length > k ? h = c(b.contents().eq(-1 - k), n) : (h = c(b, n, !0), k || b.detach()), h && (d = a(l(h), i), u(h, d), k && o && t(h).parent().append(o))
        } else d = a(m.slice(0, g + 1).join(p), i), u(h, d);
        return !0
    }

    function s(t, e) {
        return t.innerHeight() > e.maxHeight
    }

    function a(e, n) {
        for (; t.inArray(e.slice(-1), n.lastCharacter.remove) > -1;) e = e.slice(0, -1);
        return t.inArray(e.slice(-1), n.lastCharacter.noEllipsis) < 0 && (e += n.ellipsis), e
    }

    function o(t) {
        return {
            width: t.innerWidth(),
            height: t.innerHeight()
        }
    }

    function u(t, e) {
        t.innerText ? t.innerText = e : t.nodeValue ? t.nodeValue = e : t.textContent && (t.textContent = e)
    }

    function l(t) {
        return t.innerText ? t.innerText : t.nodeValue ? t.nodeValue : t.textContent ? t.textContent : ""
    }

    function h(t) {
        do {
            t = t.previousSibling
        } while (t && 1 !== t.nodeType && 3 !== t.nodeType);
        return t
    }

    function c(e, n, r) {
        var i, s = e && e[0];
        if (s) {
            if (!r) {
                if (3 === s.nodeType) return s;
                if (t.trim(e.text())) return c(e.contents().last(), n)
            }
            for (i = h(s); !i;) {
                if (e = e.parent(), e.is(n) || !e.length) return !1;
                i = h(e[0])
            }
            if (i) return c(t(i), n)
        }
        return !1
    }

    function d(e, n) {
        return !!e && ("string" == typeof e ? (e = t(e, n), !!e.length && e) : !!e.jquery && e)
    }

    function f(t) {
        for (var e = t.innerHeight(), n = ["paddingTop", "paddingBottom"], r = 0, i = n.length; i > r; r++) {
            var s = parseInt(t.css(n[r]), 10);
            isNaN(s) && (s = 0), e -= s
        }
        return e
    }
    if (!t.fn.dotdotdot) {
        t.fn.dotdotdot = function(e) {
            if (0 == this.length) return t.fn.dotdotdot.debug('No element found for "' + this.selector + '".'), this;
            if (this.length > 1) return this.each(function() {
                t(this).dotdotdot(e)
            });
            var i = this;
            i.data("dotdotdot") && i.trigger("destroy.dot"), i.data("dotdotdot-style", i.attr("style") || ""), i.css("word-wrap", "break-word"), "nowrap" === i.css("white-space") && i.css("white-space", "normal"), i.bind_events = function() {
                return i.bind("update.dot", function(e, o) {
                    switch (i.removeClass("is-truncated"), e.preventDefault(), e.stopPropagation(), typeof u.height) {
                        case "number":
                            u.maxHeight = u.height;
                            break;
                        case "function":
                            u.maxHeight = u.height.call(i[0]);
                            break;
                        default:
                            u.maxHeight = f(i)
                    }
                    u.maxHeight += u.tolerance, void 0 !== o && (("string" == typeof o || "nodeType" in o && 1 === o.nodeType) && (o = t("<div />").append(o).contents()), o instanceof t && (a = o)), m = i.wrapInner('<div class="dotdotdot" />').children(), m.contents().detach().end().append(a.clone(!0)).find("br").replaceWith("  <br />  ").end().css({
                        height: "auto",
                        width: "auto",
                        border: "none",
                        padding: 0,
                        margin: 0
                    });
                    var h = !1,
                        c = !1;
                    return l.afterElement && (h = l.afterElement.clone(!0), h.show(), l.afterElement.detach()), s(m, u) && (c = "children" == u.wrap ? n(m, u, h) : r(m, i, m, u, h)), m.replaceWith(m.contents()), m = null, t.isFunction(u.callback) && u.callback.call(i[0], c, a), l.isTruncated = c, c
                }).bind("isTruncated.dot", function(t, e) {
                    return t.preventDefault(), t.stopPropagation(), "function" == typeof e && e.call(i[0], l.isTruncated), l.isTruncated
                }).bind("originalContent.dot", function(t, e) {
                    return t.preventDefault(), t.stopPropagation(), "function" == typeof e && e.call(i[0], a), a
                }).bind("destroy.dot", function(t) {
                    t.preventDefault(), t.stopPropagation(), i.unwatch().unbind_events().contents().detach().end().append(a).attr("style", i.data("dotdotdot-style") || "").data("dotdotdot", !1)
                }), i
            }, i.unbind_events = function() {
                return i.unbind(".dot"), i
            }, i.watch = function() {
                if (i.unwatch(), "window" == u.watch) {
                    var e = t(window),
                        n = e.width(),
                        r = e.height();
                    e.bind("resize.dot" + l.dotId, function() {
                        n == e.width() && r == e.height() && u.windowResizeFix || (n = e.width(), r = e.height(), c && clearInterval(c), c = setTimeout(function() {
                            i.trigger("update.dot")
                        }, 100))
                    })
                } else h = o(i), c = setInterval(function() {
                    if (i.is(":visible")) {
                        var t = o(i);
                        (h.width != t.width || h.height != t.height) && (i.trigger("update.dot"), h = t)
                    }
                }, 500);
                return i
            }, i.unwatch = function() {
                return t(window).unbind("resize.dot" + l.dotId), c && clearInterval(c), i
            };
            var a = i.contents(),
                u = t.extend(!0, {}, t.fn.dotdotdot.defaults, e),
                l = {},
                h = {},
                c = null,
                m = null;
            return u.lastCharacter.remove instanceof Array || (u.lastCharacter.remove = t.fn.dotdotdot.defaultArrays.lastCharacter.remove), u.lastCharacter.noEllipsis instanceof Array || (u.lastCharacter.noEllipsis = t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis), l.afterElement = d(u.after, i), l.isTruncated = !1, l.dotId = p++, i.data("dotdotdot", !0).bind_events().trigger("update.dot"), u.watch && i.watch(), i
        }, t.fn.dotdotdot.defaults = {
            ellipsis: "... ",
            wrap: "word",
            fallbackToLetter: !0,
            lastCharacter: {},
            tolerance: 0,
            callback: null,
            after: null,
            height: null,
            watch: !1,
            windowResizeFix: !0
        }, t.fn.dotdotdot.defaultArrays = {
            lastCharacter: {
                remove: [" ", "　", ",", ";", ".", "!", "?"],
                noEllipsis: []
            }
        }, t.fn.dotdotdot.debug = function() {};
        var p = 1,
            m = t.fn.html;
        t.fn.html = function(n) {
            return n != e && !t.isFunction(n) && this.data("dotdotdot") ? this.trigger("update", [n]) : m.apply(this, arguments)
        };
        var g = t.fn.text;
        t.fn.text = function(n) {
            return n != e && !t.isFunction(n) && this.data("dotdotdot") ? (n = t("<div />").text(n).html(), this.trigger("update", [n])) : g.apply(this, arguments)
        }
    }
}(jQuery),
function(t) {
    function e(t, e, n) {
        switch (arguments.length) {
            case 2:
                return null != t ? t : e;
            case 3:
                return null != t ? t : null != e ? e : n;
            default:
                throw new Error("Implement me")
        }
    }

    function n(t, e) {
        return Mt.call(t, e)
    }

    function r() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }

    function i(t) {
        !1 === yt.suppressDeprecationWarnings && "undefined" != typeof console && console.warn
    }

    function s(t, e) {
        var n = !0;
        return f(function() {
            return n && (i(t), n = !1), e.apply(this, arguments)
        }, e)
    }

    function a(t, e) {
        fe[t] || (i(e), fe[t] = !0)
    }

    function o(t, e) {
        return function(n) {
            return g(t.call(this, n), e)
        }
    }

    function u(t, e) {
        var n, r, i = 12 * (e.year() - t.year()) + (e.month() - t.month()),
            s = t.clone().add(i, "months");
        return 0 > e - s ? (n = t.clone().add(i - 1, "months"), r = (e - s) / (s - n)) : (n = t.clone().add(i + 1, "months"), r = (e - s) / (n - s)), -(i + r)
    }

    function l(t, e, n) {
        var r;
        return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? (r = t.isPM(n), r && 12 > e && (e += 12), r || 12 !== e || (e = 0), e) : e
    }

    function h() {}

    function c(t, e) {
        !1 !== e && A(t), p(this, t), this._d = new Date(+t._d), !1 === me && (me = !0, yt.updateOffset(this), me = !1)
    }

    function d(t) {
        var e = D(t),
            n = e.year || 0,
            r = e.quarter || 0,
            i = e.month || 0,
            s = e.week || 0,
            a = e.day || 0,
            o = e.hour || 0,
            u = e.minute || 0,
            l = e.second || 0,
            h = e.millisecond || 0;
        this._milliseconds = +h + 1e3 * l + 6e4 * u + 36e5 * o, this._days = +a + 7 * s, this._months = +i + 3 * r + 12 * n, this._data = {}, this._locale = yt.localeData(), this._bubble()
    }

    function f(t, e) {
        for (var r in e) n(e, r) && (t[r] = e[r]);
        return n(e, "toString") && (t.toString = e.toString), n(e, "valueOf") && (t.valueOf = e.valueOf), t
    }

    function p(t, e) {
        var n, r, i;
        if (void 0 !== e._isAMomentObject && (t._isAMomentObject = e._isAMomentObject), void 0 !== e._i && (t._i = e._i), void 0 !== e._f && (t._f = e._f), void 0 !== e._l && (t._l = e._l), void 0 !== e._strict && (t._strict = e._strict), void 0 !== e._tzm && (t._tzm = e._tzm), void 0 !== e._isUTC && (t._isUTC = e._isUTC), void 0 !== e._offset && (t._offset = e._offset), void 0 !== e._pf && (t._pf = e._pf), void 0 !== e._locale && (t._locale = e._locale), Ot.length > 0)
            for (n in Ot) r = Ot[n], void 0 !== (i = e[r]) && (t[r] = i);
        return t
    }

    function m(t) {
        return 0 > t ? Math.ceil(t) : Math.floor(t)
    }

    function g(t, e, n) {
        for (var r = "" + Math.abs(t), i = t >= 0; r.length < e;) r = "0" + r;
        return (i ? n ? "+" : "" : "-") + r
    }

    function v(t, e) {
        var n = {
            milliseconds: 0,
            months: 0
        };
        return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
    }

    function y(t, e) {
        var n;
        return e = L(e, t), t.isBefore(e) ? n = v(t, e) : (n = v(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months), n
    }

    function w(t, e) {
        return function(n, r) {
            var i, s;
            return null === r || isNaN(+r) || (a(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period)."), s = n, n = r, r = s), n = "string" == typeof n ? +n : n, i = yt.duration(n, r), _(this, i, t), this
        }
    }

    function _(t, e, n, r) {
        var i = e._milliseconds,
            s = e._days,
            a = e._months;
        r = null == r || r, i && t._d.setTime(+t._d + i * n), s && ft(t, "Date", dt(t, "Date") + s * n), a && ct(t, dt(t, "Month") + a * n), r && yt.updateOffset(t, s || a)
    }

    function b(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }

    function k(t) {
        return "[object Date]" === Object.prototype.toString.call(t) || t instanceof Date
    }

    function M(t, e, n) {
        var r, i = Math.min(t.length, e.length),
            s = Math.abs(t.length - e.length),
            a = 0;
        for (r = 0; i > r; r++)(n && t[r] !== e[r] || !n && F(t[r]) !== F(e[r])) && a++;
        return a + s
    }

    function x(t) {
        if (t) {
            var e = t.toLowerCase().replace(/(.)s$/, "$1");
            t = ae[t] || oe[e] || e
        }
        return t
    }

    function D(t) {
        var e, r, i = {};
        for (r in t) n(t, r) && (e = x(r)) && (i[e] = t[r]);
        return i
    }

    function F(t) {
        var e = +t,
            n = 0;
        return 0 !== e && isFinite(e) && (n = e >= 0 ? Math.floor(e) : Math.ceil(e)), n
    }

    function S(t, e) {
        return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
    }

    function T(t, e, n) {
        return ot(yt([t, 11, 31 + e - n]), e, n).week
    }

    function C(t) {
        return Y(t) ? 366 : 365
    }

    function Y(t) {
        return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
    }

    function A(t) {
        var e;
        t._a && -2 === t._pf.overflow && (e = t._a[Dt] < 0 || t._a[Dt] > 11 ? Dt : t._a[Ft] < 1 || t._a[Ft] > S(t._a[xt], t._a[Dt]) ? Ft : t._a[St] < 0 || t._a[St] > 24 || 24 === t._a[St] && (0 !== t._a[Tt] || 0 !== t._a[Ct] || 0 !== t._a[Yt]) ? St : t._a[Tt] < 0 || t._a[Tt] > 59 ? Tt : t._a[Ct] < 0 || t._a[Ct] > 59 ? Ct : t._a[Yt] < 0 || t._a[Yt] > 999 ? Yt : -1, t._pf._overflowDayOfYear && (xt > e || e > Ft) && (e = Ft), t._pf.overflow = e)
    }

    function O(e) {
        return null == e._isValid && (e._isValid = !isNaN(e._d.getTime()) && e._pf.overflow < 0 && !e._pf.empty && !e._pf.invalidMonth && !e._pf.nullInput && !e._pf.invalidFormat && !e._pf.userInvalidated, e._strict && (e._isValid = e._isValid && 0 === e._pf.charsLeftOver && 0 === e._pf.unusedTokens.length && e._pf.bigHour === t)), e._isValid
    }

    function E(t) {
        return t ? t.toLowerCase().replace("_", "-") : t
    }

    function H(t) {
        for (var e, n, r, i, s = 0; s < t.length;) {
            for (i = E(t[s]).split("-"), e = i.length, n = E(t[s + 1]), n = n ? n.split("-") : null; e > 0;) {
                if (r = z(i.slice(0, e).join("-"))) return r;
                if (n && n.length >= e && M(i, n, !0) >= e - 1) break;
                e--
            }
            s++
        }
        return null
    }

    function z(t) {
        var e = null;
        if (!At[t] && Et) try {
            e = yt.locale(), require("./locale/" + t), yt.locale(e)
        } catch (t) {}
        return At[t]
    }

    function L(t, e) {
        var n, r;
        return e._isUTC ? (n = e.clone(), r = (yt.isMoment(t) || k(t) ? +t : +yt(t)) - +n, n._d.setTime(+n._d + r), yt.updateOffset(n, !1), n) : yt(t).local()
    }

    function I(t) {
        return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
    }

    function P(t) {
        var e, n, r = t.match(It);
        for (e = 0, n = r.length; n > e; e++) r[e] = de[r[e]] ? de[r[e]] : I(r[e]);
        return function(i) {
            var s = "";
            for (e = 0; n > e; e++) s += r[e] instanceof Function ? r[e].call(i, t) : r[e];
            return s
        }
    }

    function W(t, e) {
        return t.isValid() ? (e = R(e, t.localeData()), ue[e] || (ue[e] = P(e)), ue[e](t)) : t.localeData().invalidDate()
    }

    function R(t, e) {
        function n(t) {
            return e.longDateFormat(t) || t
        }
        var r = 5;
        for (Pt.lastIndex = 0; r >= 0 && Pt.test(t);) t = t.replace(Pt, n), Pt.lastIndex = 0, r -= 1;
        return t
    }

    function q(t, e) {
        var n = e._strict;
        switch (t) {
            case "Q":
                return Bt;
            case "DDDD":
                return Qt;
            case "YYYY":
            case "GGGG":
            case "gggg":
                return n ? Kt : qt;
            case "Y":
            case "G":
            case "g":
                return te;
            case "YYYYYY":
            case "YYYYY":
            case "GGGGG":
            case "ggggg":
                return n ? Jt : Gt;
            case "S":
                if (n) return Bt;
            case "SS":
                if (n) return Xt;
            case "SSS":
                if (n) return Qt;
            case "DDD":
                return Rt;
            case "MMM":
            case "MMMM":
            case "dd":
            case "ddd":
            case "dddd":
                return Ut;
            case "a":
            case "A":
                return e._locale._meridiemParse;
            case "x":
                return Vt;
            case "X":
                return $t;
            case "Z":
            case "ZZ":
                return Nt;
            case "T":
                return Zt;
            case "SSSS":
                return jt;
            case "MM":
            case "DD":
            case "YY":
            case "GG":
            case "gg":
            case "HH":
            case "hh":
            case "mm":
            case "ss":
            case "ww":
            case "WW":
                return n ? Xt : Wt;
            case "M":
            case "D":
            case "d":
            case "H":
            case "h":
            case "m":
            case "s":
            case "w":
            case "W":
            case "e":
            case "E":
                return Wt;
            case "Do":
                return n ? e._locale._ordinalParse : e._locale._ordinalParseLenient;
            default:
                return new RegExp(X(B(t.replace("\\", ""))))
        }
    }

    function G(t) {
        t = t || "";
        var e = t.match(Nt) || [],
            n = e[e.length - 1] || [],
            r = (n + "").match(ie) || ["-", 0, 0],
            i = 60 * r[1] + F(r[2]);
        return "+" === r[0] ? i : -i
    }

    function j(t, e, n) {
        var r, i = n._a;
        switch (t) {
            case "Q":
                null != e && (i[Dt] = 3 * (F(e) - 1));
                break;
            case "M":
            case "MM":
                null != e && (i[Dt] = F(e) - 1);
                break;
            case "MMM":
            case "MMMM":
                r = n._locale.monthsParse(e, t, n._strict), null != r ? i[Dt] = r : n._pf.invalidMonth = e;
                break;
            case "D":
            case "DD":
                null != e && (i[Ft] = F(e));
                break;
            case "Do":
                null != e && (i[Ft] = F(parseInt(e.match(/\d{1,2}/)[0], 10)));
                break;
            case "DDD":
            case "DDDD":
                null != e && (n._dayOfYear = F(e));
                break;
            case "YY":
                i[xt] = yt.parseTwoDigitYear(e);
                break;
            case "YYYY":
            case "YYYYY":
            case "YYYYYY":
                i[xt] = F(e);
                break;
            case "a":
            case "A":
                n._meridiem = e;
                break;
            case "h":
            case "hh":
                n._pf.bigHour = !0;
            case "H":
            case "HH":
                i[St] = F(e);
                break;
            case "m":
            case "mm":
                i[Tt] = F(e);
                break;
            case "s":
            case "ss":
                i[Ct] = F(e);
                break;
            case "S":
            case "SS":
            case "SSS":
            case "SSSS":
                i[Yt] = F(1e3 * ("0." + e));
                break;
            case "x":
                n._d = new Date(F(e));
                break;
            case "X":
                n._d = new Date(1e3 * parseFloat(e));
                break;
            case "Z":
            case "ZZ":
                n._useUTC = !0, n._tzm = G(e);
                break;
            case "dd":
            case "ddd":
            case "dddd":
                r = n._locale.weekdaysParse(e), null != r ? (n._w = n._w || {}, n._w.d = r) : n._pf.invalidWeekday = e;
                break;
            case "w":
            case "ww":
            case "W":
            case "WW":
            case "d":
            case "e":
            case "E":
                t = t.substr(0, 1);
            case "gggg":
            case "GGGG":
            case "GGGGG":
                t = t.substr(0, 2), e && (n._w = n._w || {}, n._w[t] = F(e));
                break;
            case "gg":
            case "GG":
                n._w = n._w || {}, n._w[t] = yt.parseTwoDigitYear(e)
        }
    }

    function U(t) {
        var n, r, i, s, a, o, u;
        n = t._w, null != n.GG || null != n.W || null != n.E ? (a = 1, o = 4, r = e(n.GG, t._a[xt], ot(yt(), 1, 4).year), i = e(n.W, 1), s = e(n.E, 1)) : (a = t._locale._week.dow, o = t._locale._week.doy, r = e(n.gg, t._a[xt], ot(yt(), a, o).year), i = e(n.w, 1), null != n.d ? (s = n.d, a > s && ++i) : s = null != n.e ? n.e + a : a), u = ut(r, i, s, o, a), t._a[xt] = u.year, t._dayOfYear = u.dayOfYear
    }

    function N(t) {
        var n, r, i, s, a = [];
        if (!t._d) {
            for (i = V(t), t._w && null == t._a[Ft] && null == t._a[Dt] && U(t), t._dayOfYear && (s = e(t._a[xt], i[xt]), t._dayOfYear > C(s) && (t._pf._overflowDayOfYear = !0), r = rt(s, 0, t._dayOfYear), t._a[Dt] = r.getUTCMonth(), t._a[Ft] = r.getUTCDate()), n = 0; 3 > n && null == t._a[n]; ++n) t._a[n] = a[n] = i[n];
            for (; 7 > n; n++) t._a[n] = a[n] = null == t._a[n] ? 2 === n ? 1 : 0 : t._a[n];
            24 === t._a[St] && 0 === t._a[Tt] && 0 === t._a[Ct] && 0 === t._a[Yt] && (t._nextDay = !0, t._a[St] = 0), t._d = (t._useUTC ? rt : nt).apply(null, a), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[St] = 24)
        }
    }

    function Z(t) {
        var e;
        t._d || (e = D(t._i), t._a = [e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], N(t))
    }

    function V(t) {
        var e = new Date;
        return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
    }

    function $(e) {
        if (e._f === yt.ISO_8601) return void K(e);
        e._a = [], e._pf.empty = !0;
        var n, r, i, s, a, o = "" + e._i,
            u = o.length,
            h = 0;
        for (i = R(e._f, e._locale).match(It) || [], n = 0; n < i.length; n++) s = i[n], r = (o.match(q(s, e)) || [])[0], r && (a = o.substr(0, o.indexOf(r)), a.length > 0 && e._pf.unusedInput.push(a), o = o.slice(o.indexOf(r) + r.length), h += r.length), de[s] ? (r ? e._pf.empty = !1 : e._pf.unusedTokens.push(s), j(s, r, e)) : e._strict && !r && e._pf.unusedTokens.push(s);
        e._pf.charsLeftOver = u - h, o.length > 0 && e._pf.unusedInput.push(o), !0 === e._pf.bigHour && e._a[St] <= 12 && (e._pf.bigHour = t), e._a[St] = l(e._locale, e._a[St], e._meridiem), N(e), A(e)
    }

    function B(t) {
        return t.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, r, i) {
            return e || n || r || i
        })
    }

    function X(t) {
        return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function Q(t) {
        var e, n, i, s, a;
        if (0 === t._f.length) return t._pf.invalidFormat = !0, void(t._d = new Date(NaN));
        for (s = 0; s < t._f.length; s++) a = 0, e = p({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._pf = r(), e._f = t._f[s], $(e), O(e) && (a += e._pf.charsLeftOver, a += 10 * e._pf.unusedTokens.length, e._pf.score = a, (null == i || i > a) && (i = a, n = e));
        f(t, n || e)
    }

    function K(t) {
        var e, n, r = t._i,
            i = ee.exec(r);
        if (i) {
            for (t._pf.iso = !0, e = 0, n = ne.length; n > e; e++)
                if (ne[e][1].exec(r)) {
                    t._f = ne[e][0] + (i[6] || " ");
                    break
                } for (e = 0, n = re.length; n > e; e++)
                if (re[e][1].exec(r)) {
                    t._f += re[e][0];
                    break
                } r.match(Nt) && (t._f += "Z"), $(t)
        } else t._isValid = !1
    }

    function J(t) {
        K(t), !1 === t._isValid && (delete t._isValid, yt.createFromInputFallback(t))
    }

    function tt(t, e) {
        var n, r = [];
        for (n = 0; n < t.length; ++n) r.push(e(t[n], n));
        return r
    }

    function et(e) {
        var n, r = e._i;
        r === t ? e._d = new Date : k(r) ? e._d = new Date(+r) : null !== (n = Ht.exec(r)) ? e._d = new Date(+n[1]) : "string" == typeof r ? J(e) : b(r) ? (e._a = tt(r.slice(0), function(t) {
            return parseInt(t, 10)
        }), N(e)) : "object" == typeof r ? Z(e) : "number" == typeof r ? e._d = new Date(r) : yt.createFromInputFallback(e)
    }

    function nt(t, e, n, r, i, s, a) {
        var o = new Date(t, e, n, r, i, s, a);
        return 1970 > t && o.setFullYear(t), o
    }

    function rt(t) {
        var e = new Date(Date.UTC.apply(null, arguments));
        return 1970 > t && e.setUTCFullYear(t), e
    }

    function it(t, e) {
        if ("string" == typeof t)
            if (isNaN(t)) {
                if ("number" != typeof(t = e.weekdaysParse(t))) return null
            } else t = parseInt(t, 10);
        return t
    }

    function st(t, e, n, r, i) {
        return i.relativeTime(e || 1, !!n, t, r)
    }

    function at(t, e, n) {
        var r = yt.duration(t).abs(),
            i = kt(r.as("s")),
            s = kt(r.as("m")),
            a = kt(r.as("h")),
            o = kt(r.as("d")),
            u = kt(r.as("M")),
            l = kt(r.as("y")),
            h = i < le.s && ["s", i] || 1 === s && ["m"] || s < le.m && ["mm", s] || 1 === a && ["h"] || a < le.h && ["hh", a] || 1 === o && ["d"] || o < le.d && ["dd", o] || 1 === u && ["M"] || u < le.M && ["MM", u] || 1 === l && ["y"] || ["yy", l];
        return h[2] = e, h[3] = +t > 0, h[4] = n, st.apply({}, h)
    }

    function ot(t, e, n) {
        var r, i = n - e,
            s = n - t.day();
        return s > i && (s -= 7), i - 7 > s && (s += 7), r = yt(t).add(s, "d"), {
            week: Math.ceil(r.dayOfYear() / 7),
            year: r.year()
        }
    }

    function ut(t, e, n, r, i) {
        var s, a, o = rt(t, 0, 1).getUTCDay();
        return o = 0 === o ? 7 : o, n = null != n ? n : i, s = i - o + (o > r ? 7 : 0) - (i > o ? 7 : 0), a = 7 * (e - 1) + (n - i) + s + 1, {
            year: a > 0 ? t : t - 1,
            dayOfYear: a > 0 ? a : C(t - 1) + a
        }
    }

    function lt(e) {
        var n, r = e._i,
            i = e._f;
        return e._locale = e._locale || yt.localeData(e._l), null === r || i === t && "" === r ? yt.invalid({
            nullInput: !0
        }) : ("string" == typeof r && (e._i = r = e._locale.preparse(r)), yt.isMoment(r) ? new c(r, !0) : (i ? b(i) ? Q(e) : $(e) : et(e), n = new c(e), n._nextDay && (n.add(1, "d"), n._nextDay = t), n))
    }

    function ht(t, e) {
        var n, r;
        if (1 === e.length && b(e[0]) && (e = e[0]), !e.length) return yt();
        for (n = e[0], r = 1; r < e.length; ++r) e[r][t](n) && (n = e[r]);
        return n
    }

    function ct(t, e) {
        var n;
        return "string" == typeof e && "number" != typeof(e = t.localeData().monthsParse(e)) ? t : (n = Math.min(t.date(), S(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t)
    }

    function dt(t, e) {
        return t._d["get" + (t._isUTC ? "UTC" : "") + e]()
    }

    function ft(t, e, n) {
        return "Month" === e ? ct(t, n) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n)
    }

    function pt(t, e) {
        return function(n) {
            return null != n ? (ft(this, t, n), yt.updateOffset(this, e), this) : dt(this, t)
        }
    }

    function mt(t) {
        return 400 * t / 146097
    }

    function gt(t) {
        return 146097 * t / 400
    }

    function vt(t) {
        "undefined" == typeof ender && (wt = bt.moment, bt.moment = t ? s("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", yt) : yt)
    }
    for (var yt, wt, _t, bt = "undefined" == typeof global || "undefined" != typeof window && window !== global.window ? this : global, kt = Math.round, Mt = Object.prototype.hasOwnProperty, xt = 0, Dt = 1, Ft = 2, St = 3, Tt = 4, Ct = 5, Yt = 6, At = {}, Ot = [], Et = "undefined" != typeof module && module && module.exports, Ht = /^\/?Date\((\-?\d+)/i, zt = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Lt = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, It = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g, Pt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Wt = /\d\d?/, Rt = /\d{1,3}/, qt = /\d{1,4}/, Gt = /[+\-]?\d{1,6}/, jt = /\d+/, Ut = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Nt = /Z|[\+\-]\d\d:?\d\d/gi, Zt = /T/i, Vt = /[\+\-]?\d+/, $t = /[\+\-]?\d+(\.\d{1,3})?/, Bt = /\d/, Xt = /\d\d/, Qt = /\d{3}/, Kt = /\d{4}/, Jt = /[+-]?\d{6}/, te = /[+-]?\d+/, ee = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ne = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
            ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
            ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d{2}/],
            ["YYYY-DDD", /\d{4}-\d{3}/]
        ], re = [
            ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
            ["HH:mm", /(T| )\d\d:\d\d/],
            ["HH", /(T| )\d\d/]
        ], ie = /([\+\-]|\d\d)/gi, se = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
            Milliseconds: 1,
            Seconds: 1e3,
            Minutes: 6e4,
            Hours: 36e5,
            Days: 864e5,
            Months: 2592e6,
            Years: 31536e6
        }), ae = {
            ms: "millisecond",
            s: "second",
            m: "minute",
            h: "hour",
            d: "day",
            D: "date",
            w: "week",
            W: "isoWeek",
            M: "month",
            Q: "quarter",
            y: "year",
            DDD: "dayOfYear",
            e: "weekday",
            E: "isoWeekday",
            gg: "weekYear",
            GG: "isoWeekYear"
        }, oe = {
            dayofyear: "dayOfYear",
            isoweekday: "isoWeekday",
            isoweek: "isoWeek",
            weekyear: "weekYear",
            isoweekyear: "isoWeekYear"
        }, ue = {}, le = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        }, he = "DDD w W M D d".split(" "), ce = "M D H h m s w W".split(" "), de = {
            M: function() {
                return this.month() + 1
            },
            MMM: function(t) {
                return this.localeData().monthsShort(this, t)
            },
            MMMM: function(t) {
                return this.localeData().months(this, t)
            },
            D: function() {
                return this.date()
            },
            DDD: function() {
                return this.dayOfYear()
            },
            d: function() {
                return this.day()
            },
            dd: function(t) {
                return this.localeData().weekdaysMin(this, t)
            },
            ddd: function(t) {
                return this.localeData().weekdaysShort(this, t)
            },
            dddd: function(t) {
                return this.localeData().weekdays(this, t)
            },
            w: function() {
                return this.week()
            },
            W: function() {
                return this.isoWeek()
            },
            YY: function() {
                return g(this.year() % 100, 2)
            },
            YYYY: function() {
                return g(this.year(), 4)
            },
            YYYYY: function() {
                return g(this.year(), 5)
            },
            YYYYYY: function() {
                var t = this.year();
                return (t >= 0 ? "+" : "-") + g(Math.abs(t), 6)
            },
            gg: function() {
                return g(this.weekYear() % 100, 2)
            },
            gggg: function() {
                return g(this.weekYear(), 4)
            },
            ggggg: function() {
                return g(this.weekYear(), 5)
            },
            GG: function() {
                return g(this.isoWeekYear() % 100, 2)
            },
            GGGG: function() {
                return g(this.isoWeekYear(), 4)
            },
            GGGGG: function() {
                return g(this.isoWeekYear(), 5)
            },
            e: function() {
                return this.weekday()
            },
            E: function() {
                return this.isoWeekday()
            },
            a: function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), !0)
            },
            A: function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), !1)
            },
            H: function() {
                return this.hours()
            },
            h: function() {
                return this.hours() % 12 || 12
            },
            m: function() {
                return this.minutes()
            },
            s: function() {
                return this.seconds()
            },
            S: function() {
                return F(this.milliseconds() / 100)
            },
            SS: function() {
                return g(F(this.milliseconds() / 10), 2)
            },
            SSS: function() {
                return g(this.milliseconds(), 3)
            },
            SSSS: function() {
                return g(this.milliseconds(), 3)
            },
            Z: function() {
                var t = this.utcOffset(),
                    e = "+";
                return 0 > t && (t = -t, e = "-"), e + g(F(t / 60), 2) + ":" + g(F(t) % 60, 2)
            },
            ZZ: function() {
                var t = this.utcOffset(),
                    e = "+";
                return 0 > t && (t = -t, e = "-"), e + g(F(t / 60), 2) + g(F(t) % 60, 2)
            },
            z: function() {
                return this.zoneAbbr()
            },
            zz: function() {
                return this.zoneName()
            },
            x: function() {
                return this.valueOf()
            },
            X: function() {
                return this.unix()
            },
            Q: function() {
                return this.quarter()
            }
        }, fe = {}, pe = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"], me = !1; he.length;) _t = he.pop(), de[_t + "o"] = function(t, e) {
        return function(n) {
            return this.localeData().ordinal(t.call(this, n), e)
        }
    }(de[_t], _t);
    for (; ce.length;) _t = ce.pop(), de[_t + _t] = o(de[_t], 2);
    de.DDDD = o(de.DDD, 3), f(h.prototype, {
        set: function(t) {
            var e, n;
            for (n in t) e = t[n], "function" == typeof e ? this[n] = e : this["_" + n] = e;
            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function(t) {
            return this._months[t.month()]
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function(t) {
            return this._monthsShort[t.month()]
        },
        monthsParse: function(t, e, n) {
            var r, i, s;
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; 12 > r; r++) {
                if (i = yt.utc([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[r] || (s = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[r] = new RegExp(s.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[r].test(t)) return r;
                if (n && "MMM" === e && this._shortMonthsParse[r].test(t)) return r;
                if (!n && this._monthsParse[r].test(t)) return r
            }
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function(t) {
            return this._weekdays[t.day()]
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function(t) {
            return this._weekdaysShort[t.day()]
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function(t) {
            return this._weekdaysMin[t.day()]
        },
        weekdaysParse: function(t) {
            var e, n, r;
            for (this._weekdaysParse || (this._weekdaysParse = []), e = 0; 7 > e; e++)
                if (this._weekdaysParse[e] || (n = yt([2e3, 1]).day(e), r = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[e] = new RegExp(r.replace(".", ""), "i")), this._weekdaysParse[e].test(t)) return e
        },
        _longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY LT",
            LLLL: "dddd, MMMM D, YYYY LT"
        },
        longDateFormat: function(t) {
            var e = this._longDateFormat[t];
            return !e && this._longDateFormat[t.toUpperCase()] && (e = this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(t) {
                return t.slice(1)
            }), this._longDateFormat[t] = e), e
        },
        isPM: function(t) {
            return "p" === (t + "").toLowerCase().charAt(0)
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function(t, e, n) {
            return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function(t, e, n) {
            var r = this._calendar[t];
            return "function" == typeof r ? r.apply(e, [n]) : r
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function(t, e, n, r) {
            var i = this._relativeTime[n];
            return "function" == typeof i ? i(t, e, n, r) : i.replace(/%d/i, t)
        },
        pastFuture: function(t, e) {
            var n = this._relativeTime[t > 0 ? "future" : "past"];
            return "function" == typeof n ? n(e) : n.replace(/%s/i, e)
        },
        ordinal: function(t) {
            return this._ordinal.replace("%d", t)
        },
        _ordinal: "%d",
        _ordinalParse: /\d{1,2}/,
        preparse: function(t) {
            return t
        },
        postformat: function(t) {
            return t
        },
        week: function(t) {
            return ot(t, this._week.dow, this._week.doy).week
        },
        _week: {
            dow: 0,
            doy: 6
        },
        firstDayOfWeek: function() {
            return this._week.dow
        },
        firstDayOfYear: function() {
            return this._week.doy
        },
        _invalidDate: "Invalid date",
        invalidDate: function() {
            return this._invalidDate
        }
    }), yt = function(e, n, i, s) {
        var a;
        return "boolean" == typeof i && (s = i, i = t), a = {}, a._isAMomentObject = !0, a._i = e, a._f = n, a._l = i, a._strict = s, a._isUTC = !1, a._pf = r(), lt(a)
    }, yt.suppressDeprecationWarnings = !1, yt.createFromInputFallback = s("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(t) {
        t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
    }), yt.min = function() {
        return ht("isBefore", [].slice.call(arguments, 0))
    }, yt.max = function() {
        return ht("isAfter", [].slice.call(arguments, 0))
    }, yt.utc = function(e, n, i, s) {
        var a;
        return "boolean" == typeof i && (s = i, i = t), a = {}, a._isAMomentObject = !0, a._useUTC = !0, a._isUTC = !0, a._l = i, a._i = e, a._f = n, a._strict = s, a._pf = r(), lt(a).utc()
    }, yt.unix = function(t) {
        return yt(1e3 * t)
    }, yt.duration = function(t, e) {
        var r, i, s, a, o = t,
            u = null;
        return yt.isDuration(t) ? o = {
            ms: t._milliseconds,
            d: t._days,
            M: t._months
        } : "number" == typeof t ? (o = {}, e ? o[e] = t : o.milliseconds = t) : (u = zt.exec(t)) ? (r = "-" === u[1] ? -1 : 1, o = {
            y: 0,
            d: F(u[Ft]) * r,
            h: F(u[St]) * r,
            m: F(u[Tt]) * r,
            s: F(u[Ct]) * r,
            ms: F(u[Yt]) * r
        }) : (u = Lt.exec(t)) ? (r = "-" === u[1] ? -1 : 1, s = function(t) {
            var e = t && parseFloat(t.replace(",", "."));
            return (isNaN(e) ? 0 : e) * r
        }, o = {
            y: s(u[2]),
            M: s(u[3]),
            d: s(u[4]),
            h: s(u[5]),
            m: s(u[6]),
            s: s(u[7]),
            w: s(u[8])
        }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (a = y(yt(o.from), yt(o.to)), o = {}, o.ms = a.milliseconds, o.M = a.months), i = new d(o), yt.isDuration(t) && n(t, "_locale") && (i._locale = t._locale), i
    }, yt.version = "2.9.0", yt.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", yt.ISO_8601 = function() {}, yt.momentProperties = Ot, yt.updateOffset = function() {}, yt.relativeTimeThreshold = function(e, n) {
        return le[e] !== t && (n === t ? le[e] : (le[e] = n, !0))
    }, yt.lang = s("moment.lang is deprecated. Use moment.locale instead.", function(t, e) {
        return yt.locale(t, e)
    }), yt.locale = function(t, e) {
        var n;
        return t && (n = void 0 !== e ? yt.defineLocale(t, e) : yt.localeData(t)) && (yt.duration._locale = yt._locale = n), yt._locale._abbr
    }, yt.defineLocale = function(t, e) {
        return null !== e ? (e.abbr = t, At[t] || (At[t] = new h), At[t].set(e), yt.locale(t), At[t]) : (delete At[t], null)
    }, yt.langData = s("moment.langData is deprecated. Use moment.localeData instead.", function(t) {
        return yt.localeData(t)
    }), yt.localeData = function(t) {
        var e;
        if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return yt._locale;
        if (!b(t)) {
            if (e = z(t)) return e;
            t = [t]
        }
        return H(t)
    }, yt.isMoment = function(t) {
        return t instanceof c || null != t && n(t, "_isAMomentObject")
    }, yt.isDuration = function(t) {
        return t instanceof d
    };
    for (_t = pe.length - 1; _t >= 0; --_t) ! function(e) {
        var n, r;
        if (0 === e.indexOf("week")) n = 7, r = "day";
        else {
            if (0 !== e.indexOf("month")) return;
            n = 12, r = "month"
        }
        yt[e] = function(i, s) {
            var a, o, u = yt._locale[e],
                l = [];
            if ("number" == typeof i && (s = i, i = t), o = function(t) {
                    var e = yt().utc().set(r, t);
                    return u.call(yt._locale, e, i || "")
                }, null != s) return o(s);
            for (a = 0; n > a; a++) l.push(o(a));
            return l
        }
    }(pe[_t]);
    yt.normalizeUnits = function(t) {
        return x(t)
    }, yt.invalid = function(t) {
        var e = yt.utc(NaN);
        return null != t ? f(e._pf, t) : e._pf.userInvalidated = !0, e
    }, yt.parseZone = function() {
        return yt.apply(null, arguments).parseZone()
    }, yt.parseTwoDigitYear = function(t) {
        return F(t) + (F(t) > 68 ? 1900 : 2e3)
    }, yt.isDate = k, f(yt.fn = c.prototype, {
        clone: function() {
            return yt(this)
        },
        valueOf: function() {
            return +this._d - 6e4 * (this._offset || 0)
        },
        unix: function() {
            return Math.floor(+this / 1e3)
        },
        toString: function() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },
        toDate: function() {
            return this._offset ? new Date(+this) : this._d
        },
        toISOString: function() {
            var t = yt(this).utc();
            return 0 < t.year() && t.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : W(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : W(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        },
        toArray: function() {
            var t = this;
            return [t.year(), t.month(), t.date(), t.hours(), t.minutes(), t.seconds(), t.milliseconds()]
        },
        isValid: function() {
            return O(this)
        },
        isDSTShifted: function() {
            return !!this._a && (this.isValid() && M(this._a, (this._isUTC ? yt.utc(this._a) : yt(this._a)).toArray()) > 0)
        },
        parsingFlags: function() {
            return f({}, this._pf)
        },
        invalidAt: function() {
            return this._pf.overflow
        },
        utc: function(t) {
            return this.utcOffset(0, t)
        },
        local: function(t) {
            return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(this._dateUtcOffset(), "m")), this
        },
        format: function(t) {
            var e = W(this, t || yt.defaultFormat);
            return this.localeData().postformat(e)
        },
        add: w(1, "add"),
        subtract: w(-1, "subtract"),
        diff: function(t, e, n) {
            var r, i, s = L(t, this),
                a = 6e4 * (s.utcOffset() - this.utcOffset());
            return e = x(e), "year" === e || "month" === e || "quarter" === e ? (i = u(this, s), "quarter" === e ? i /= 3 : "year" === e && (i /= 12)) : (r = this - s, i = "second" === e ? r / 1e3 : "minute" === e ? r / 6e4 : "hour" === e ? r / 36e5 : "day" === e ? (r - a) / 864e5 : "week" === e ? (r - a) / 6048e5 : r), n ? i : m(i)
        },
        from: function(t, e) {
            return yt.duration({
                to: this,
                from: t
            }).locale(this.locale()).humanize(!e)
        },
        fromNow: function(t) {
            return this.from(yt(), t)
        },
        calendar: function(t) {
            var e = t || yt(),
                n = L(e, this).startOf("day"),
                r = this.diff(n, "days", !0),
                i = -6 > r ? "sameElse" : -1 > r ? "lastWeek" : 0 > r ? "lastDay" : 1 > r ? "sameDay" : 2 > r ? "nextDay" : 7 > r ? "nextWeek" : "sameElse";
            return this.format(this.localeData().calendar(i, this, yt(e)))
        },
        isLeapYear: function() {
            return Y(this.year())
        },
        isDST: function() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        },
        day: function(t) {
            var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != t ? (t = it(t, this.localeData()), this.add(t - e, "d")) : e
        },
        month: pt("Month", !0),
        startOf: function(t) {
            switch (t = x(t)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === t ? this.weekday(0) : "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
        },
        endOf: function(e) {
            return e = x(e), e === t || "millisecond" === e ? this : this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms")
        },
        isAfter: function(t, e) {
            return e = x(void 0 !== e ? e : "millisecond"), "millisecond" === e ? (t = yt.isMoment(t) ? t : yt(t), +this > +t) : (yt.isMoment(t) ? +t : +yt(t)) < +this.clone().startOf(e)
        },
        isBefore: function(t, e) {
            var n;
            return e = x(void 0 !== e ? e : "millisecond"), "millisecond" === e ? +(t = yt.isMoment(t) ? t : yt(t)) > +this : (n = yt.isMoment(t) ? +t : +yt(t), +this.clone().endOf(e) < n)
        },
        isBetween: function(t, e, n) {
            return this.isAfter(t, n) && this.isBefore(e, n)
        },
        isSame: function(t, e) {
            var n;
            return e = x(e || "millisecond"), "millisecond" === e ? (t = yt.isMoment(t) ? t : yt(t), +this == +t) : (n = +yt(t), +this.clone().startOf(e) <= n && n <= +this.clone().endOf(e))
        },
        min: s("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function(t) {
            return t = yt.apply(null, arguments), this > t ? this : t
        }),
        max: s("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function(t) {
            return t = yt.apply(null, arguments), t > this ? this : t
        }),
        zone: s("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", function(t, e) {
            return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
        }),
        utcOffset: function(t, e) {
            var n, r = this._offset || 0;
            return null != t ? ("string" == typeof t && (t = G(t)), Math.abs(t) < 16 && (t *= 60), !this._isUTC && e && (n = this._dateUtcOffset()), this._offset = t, this._isUTC = !0, null != n && this.add(n, "m"), r !== t && (!e || this._changeInProgress ? _(this, yt.duration(t - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, yt.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? r : this._dateUtcOffset()
        },
        isLocal: function() {
            return !this._isUTC
        },
        isUtcOffset: function() {
            return this._isUTC
        },
        isUtc: function() {
            return this._isUTC && 0 === this._offset
        },
        zoneAbbr: function() {
            return this._isUTC ? "UTC" : ""
        },
        zoneName: function() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        },
        parseZone: function() {
            return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(G(this._i)), this
        },
        hasAlignedHourOffset: function(t) {
            return t = t ? yt(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0
        },
        daysInMonth: function() {
            return S(this.year(), this.month())
        },
        dayOfYear: function(t) {
            var e = kt((yt(this).startOf("day") - yt(this).startOf("year")) / 864e5) + 1;
            return null == t ? e : this.add(t - e, "d")
        },
        quarter: function(t) {
            return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
        },
        weekYear: function(t) {
            var e = ot(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
            return null == t ? e : this.add(t - e, "y")
        },
        isoWeekYear: function(t) {
            var e = ot(this, 1, 4).year;
            return null == t ? e : this.add(t - e, "y")
        },
        week: function(t) {
            var e = this.localeData().week(this);
            return null == t ? e : this.add(7 * (t - e), "d")
        },
        isoWeek: function(t) {
            var e = ot(this, 1, 4).week;
            return null == t ? e : this.add(7 * (t - e), "d")
        },
        weekday: function(t) {
            var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == t ? e : this.add(t - e, "d")
        },
        isoWeekday: function(t) {
            return null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7)
        },
        isoWeeksInYear: function() {
            return T(this.year(), 1, 4)
        },
        weeksInYear: function() {
            var t = this.localeData()._week;
            return T(this.year(), t.dow, t.doy)
        },
        get: function(t) {
            return t = x(t), this[t]()
        },
        set: function(t, e) {
            var n;
            if ("object" == typeof t)
                for (n in t) this.set(n, t[n]);
            else t = x(t), "function" == typeof this[t] && this[t](e);
            return this
        },
        locale: function(e) {
            var n;
            return e === t ? this._locale._abbr : (n = yt.localeData(e), null != n && (this._locale = n), this)
        },
        lang: s("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
            return e === t ? this.localeData() : this.locale(e)
        }),
        localeData: function() {
            return this._locale
        },
        _dateUtcOffset: function() {
            return 15 * -Math.round(this._d.getTimezoneOffset() / 15)
        }
    }), yt.fn.millisecond = yt.fn.milliseconds = pt("Milliseconds", !1), yt.fn.second = yt.fn.seconds = pt("Seconds", !1), yt.fn.minute = yt.fn.minutes = pt("Minutes", !1), yt.fn.hour = yt.fn.hours = pt("Hours", !0), yt.fn.date = pt("Date", !0), yt.fn.dates = s("dates accessor is deprecated. Use date instead.", pt("Date", !0)), yt.fn.year = pt("FullYear", !0), yt.fn.years = s("years accessor is deprecated. Use year instead.", pt("FullYear", !0)), yt.fn.days = yt.fn.day, yt.fn.months = yt.fn.month, yt.fn.weeks = yt.fn.week, yt.fn.isoWeeks = yt.fn.isoWeek, yt.fn.quarters = yt.fn.quarter, yt.fn.toJSON = yt.fn.toISOString, yt.fn.isUTC = yt.fn.isUtc, f(yt.duration.fn = d.prototype, {
        _bubble: function() {
            var t, e, n, r = this._milliseconds,
                i = this._days,
                s = this._months,
                a = this._data,
                o = 0;
            a.milliseconds = r % 1e3, t = m(r / 1e3), a.seconds = t % 60, e = m(t / 60), a.minutes = e % 60, n = m(e / 60), a.hours = n % 24, i += m(n / 24), o = m(mt(i)), i -= m(gt(o)), s += m(i / 30), i %= 30, o += m(s / 12), s %= 12, a.days = i, a.months = s, a.years = o
        },
        abs: function() {
            return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this
        },
        weeks: function() {
            return m(this.days() / 7)
        },
        valueOf: function() {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * F(this._months / 12)
        },
        humanize: function(t) {
            var e = at(this, !t, this.localeData());
            return t && (e = this.localeData().pastFuture(+this, e)), this.localeData().postformat(e)
        },
        add: function(t, e) {
            var n = yt.duration(t, e);
            return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this
        },
        subtract: function(t, e) {
            var n = yt.duration(t, e);
            return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this
        },
        get: function(t) {
            return t = x(t), this[t.toLowerCase() + "s"]()
        },
        as: function(t) {
            var e, n;
            if ("month" === (t = x(t)) || "year" === t) return e = this._days + this._milliseconds / 864e5, n = this._months + 12 * mt(e), "month" === t ? n : n / 12;
            switch (e = this._days + Math.round(gt(this._months / 12)), t) {
                case "week":
                    return e / 7 + this._milliseconds / 6048e5;
                case "day":
                    return e + this._milliseconds / 864e5;
                case "hour":
                    return 24 * e + this._milliseconds / 36e5;
                case "minute":
                    return 24 * e * 60 + this._milliseconds / 6e4;
                case "second":
                    return 24 * e * 60 * 60 + this._milliseconds / 1e3;
                case "millisecond":
                    return Math.floor(24 * e * 60 * 60 * 1e3) + this._milliseconds;
                default:
                    throw new Error("Unknown unit " + t)
            }
        },
        lang: yt.fn.lang,
        locale: yt.fn.locale,
        toIsoString: s("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function() {
            return this.toISOString()
        }),
        toISOString: function() {
            var t = Math.abs(this.years()),
                e = Math.abs(this.months()),
                n = Math.abs(this.days()),
                r = Math.abs(this.hours()),
                i = Math.abs(this.minutes()),
                s = Math.abs(this.seconds() + this.milliseconds() / 1e3);
            return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (t ? t + "Y" : "") + (e ? e + "M" : "") + (n ? n + "D" : "") + (r || i || s ? "T" : "") + (r ? r + "H" : "") + (i ? i + "M" : "") + (s ? s + "S" : "") : "P0D"
        },
        localeData: function() {
            return this._locale
        },
        toJSON: function() {
            return this.toISOString()
        }
    }), yt.duration.fn.toString = yt.duration.fn.toISOString;
    for (_t in se) n(se, _t) && function(t) {
        yt.duration.fn[t] = function() {
            return this._data[t]
        }
    }(_t.toLowerCase());
    yt.duration.fn.asMilliseconds = function() {
        return this.as("ms")
    }, yt.duration.fn.asSeconds = function() {
        return this.as("s")
    }, yt.duration.fn.asMinutes = function() {
        return this.as("m")
    }, yt.duration.fn.asHours = function() {
        return this.as("h")
    }, yt.duration.fn.asDays = function() {
        return this.as("d")
    }, yt.duration.fn.asWeeks = function() {
        return this.as("weeks")
    }, yt.duration.fn.asMonths = function() {
        return this.as("M")
    }, yt.duration.fn.asYears = function() {
        return this.as("y")
    }, yt.locale("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(t) {
            var e = t % 10;
            return t + (1 === F(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
        }
    }), Et ? module.exports = yt : "function" == typeof define && define.amd ? (define(function(t, e, n) {
        return n.config && n.config() && !0 === n.config().noGlobal && (bt.moment = wt), yt
    }), vt(!0)) : vt()
}.call(this),
    function() {
        var t, e, n, r, i, s, a, o, u, l, h, c, d, f, p, m, g, v, y, w, _, b, k, M, x, D, F, S, T, C, Y, A, O, E, H, z, L, I, P, W, R, q, G, j, U, N, Z, V, $, B, X, Q, K, J, tt, et, nt, rt = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        C = function() {
            return "visible" === document.visibilityState || null != F.tests
        }, H = function() {
            var t;
            return t = [], "undefined" != typeof document && null !== document && document.addEventListener("visibilitychange", function() {
                    var e, n, r, i;
                    for (i = [], n = 0, r = t.length; r > n; n++) e = t[n], i.push(e(C()));
                    return i
                }),
                function(e) {
                    return t.push(e)
                }
        }(), k = function(t) {
            var e, n, r;
            n = {};
            for (e in t) r = t[e], n[e] = r;
            return n
        }, _ = function(t) {
            var e;
            return e = {},
                function() {
                    var n, r, i, s, a;
                    for (r = "", s = 0, a = arguments.length; a > s; s++) n = arguments[s], r += n.toString() + ",";
                    return i = e[r], i || (e[r] = i = t.apply(this, arguments)), i
                }
        }, E = function(t) {
            return function(e) {
                var n, r;
                return e instanceof Array || e instanceof NodeList || e instanceof HTMLCollection ? function() {
                    var i, s, a;
                    for (a = [], r = i = 0, s = e.length; s >= 0 ? s > i : i > s; r = s >= 0 ? ++i : --i) n = Array.prototype.slice.call(arguments, 1), n.splice(0, 0, e[r]), a.push(t.apply(this, n));
                    return a
                }.apply(this, arguments) : t.apply(this, arguments)
            }
        }, g = function(t, e) {
            var n, r, i;
            i = [];
            for (n in e) r = e[n], i.push(null != t[n] ? t[n] : t[n] = r);
            return i
        }, v = function(t, e) {
            var n, r, i;
            if (null != t.style) return y(t, e);
            i = [];
            for (n in e) r = e[n], i.push(t[n] = r.format());
            return i
        }, y = function(t, e) {
            var n, r, i, s, a;
            e = z(e), s = [], n = Y(t);
            for (r in e) a = e[r], tt.contains(r) ? s.push([r, a]) : (null != a.format && (a = a.format()), "number" == typeof a && (a = "" + a + nt(r, a)), n && B.contains(r) ? t.setAttribute(r, a) : r in t ? t[r] = a : t.style[I(r)] = a);
            return s.length > 0 ? n ? (i = new l, i.applyProperties(s), t.setAttribute("transform", i.decompose().format())) : (a = s.map(function(t) {
                return et(t[0], t[1])
            }).join(" "), t.style[I("transform")] = a) : void 0
        }, Y = function(t) {
            var e, n;
            return "undefined" != typeof SVGElement && null !== SVGElement && "undefined" != typeof SVGSVGElement && null !== SVGSVGElement ? t instanceof SVGElement && !(t instanceof SVGSVGElement) : null != (e = null != (n = F.tests) && "function" == typeof n.isSVG ? n.isSVG(t) : void 0) && e
        }, R = function(t, e) {
            var n;
            return n = Math.pow(10, e), Math.round(t * n) / n
        }, h = function() {
            function t(t) {
                var e, n, r;
                for (this.obj = {}, n = 0, r = t.length; r > n; n++) e = t[n], this.obj[e] = 1
            }
            return t.prototype.contains = function(t) {
                return 1 === this.obj[t]
            }, t
        }(), J = function(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }, P = new h("marginTop,marginLeft,marginBottom,marginRight,paddingTop,paddingLeft,paddingBottom,paddingRight,top,left,bottom,right,translateX,translateY,translateZ,perspectiveX,perspectiveY,perspectiveZ,width,height,maxWidth,maxHeight,minWidth,minHeight,borderRadius".split(",")), D = new h("rotate,rotateX,rotateY,rotateZ,skew,skewX,skewY,skewZ".split(",")), tt = new h("translate,translateX,translateY,translateZ,scale,scaleX,scaleY,scaleZ,rotate,rotateX,rotateY,rotateZ,rotateC,rotateCX,rotateCY,skew,skewX,skewY,skewZ,perspective".split(",")), B = new h("accent-height,ascent,azimuth,baseFrequency,baseline-shift,bias,cx,cy,d,diffuseConstant,divisor,dx,dy,elevation,filterRes,fx,fy,gradientTransform,height,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,letter-spacing,limitingConeAngle,markerHeight,markerWidth,numOctaves,order,overline-position,overline-thickness,pathLength,points,pointsAtX,pointsAtY,pointsAtZ,r,radius,rx,ry,seed,specularConstant,specularExponent,stdDeviation,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,surfaceScale,target,targetX,targetY,transform,underline-position,underline-thickness,viewBox,width,x,x1,x2,y,y1,y2,z".split(",")), nt = function(t, e) {
            return "number" != typeof e ? "" : P.contains(t) ? "px" : D.contains(t) ? "deg" : ""
        }, et = function(t, e) {
            var n, r;
            return n = ("" + e).match(/^([0-9.-]*)([^0-9]*)$/), null != n ? (e = n[1], r = n[2]) : e = parseFloat(e), e = R(parseFloat(e), 10), (null == r || "" === r) && (r = nt(t, e)), t + "(" + e + r + ")"
        }, z = function(t) {
            var e, n, r, i, s, a, o, u;
            r = {};
            for (i in t)
                if (s = t[i], tt.contains(i))
                    if ((n = i.match(/(translate|rotateC|rotate|skew|scale|perspective)(X|Y|Z|)/)) && n[2].length > 0) r[i] = s;
                    else
                        for (u = ["X", "Y", "Z"], a = 0, o = u.length; o > a; a++) e = u[a], r[n[1] + e] = s;
            else r[i] = s;
            return r
        }, x = function(t) {
            var e;
            return "" + (e = "opacity" === t ? 1 : 0) + nt(t, e)
        }, S = function(t, e) {
            var n, r, i, s, a, o, h, c, d, f, p;
            if (s = {}, n = Y(t), null != t.style)
                for (a = window.getComputedStyle(t, null), h = 0, d = e.length; d > h; h++) r = e[h], tt.contains(r) ? null == s.transform && (i = n ? new l(null != (p = t.transform.baseVal.consolidate()) ? p.matrix : void 0) : u.fromTransform(a[I("transform")]), s.transform = i.decompose()) : (o = a[r], null != o && "d" !== r || !B.contains(r) || (o = t.getAttribute(r)), ("" === o || null == o) && (o = x(r)), s[r] = M(o));
            else
                for (c = 0, f = e.length; f > c; c++) r = e[c], s[r] = M(t[r]);
            return s
        }, M = function(t) {
            var e, n, i, u, l;
            for (i = [r, a, s, o], u = 0, l = i.length; l > u; u++)
                if (n = i[u], null != (e = n.create(t))) return e;
            return null
        }, o = function() {
            function t(t) {
                this.parts = t, this.format = rt(this.format, this), this.interpolate = rt(this.interpolate, this)
            }
            return t.prototype.interpolate = function(e, n) {
                var r, i, s, a, o, u;
                for (a = this.parts, r = e.parts, s = [], i = o = 0, u = Math.min(a.length, r.length); u >= 0 ? u > o : o > u; i = u >= 0 ? ++o : --o) s.push(null != a[i].interpolate ? a[i].interpolate(r[i], n) : a[i]);
                return new t(s)
            }, t.prototype.format = function() {
                var t;
                return t = this.parts.map(function(t) {
                    return null != t.format ? t.format() : t
                }), t.join("")
            }, t.create = function(e) {
                var n, r, a, o, u, l, h, c, d, f, p;
                for (e = "" + e, a = [], h = [{
                        re: /(#[a-f\d]{3,6})/gi,
                        klass: i,
                        parse: function(t) {
                            return t
                        }
                    }, {
                        re: /(rgba?\([0-9.]*, ?[0-9.]*, ?[0-9.]*(?:, ?[0-9.]*)?\))/gi,
                        klass: i,
                        parse: function(t) {
                            return t
                        }
                    }, {
                        re: /([-+]?[\d.]+)/gi,
                        klass: s,
                        parse: parseFloat
                    }], c = 0, f = h.length; f > c; c++)
                    for (l = h[c], u = l.re; r = u.exec(e);) a.push({
                        index: r.index,
                        length: r[1].length,
                        interpolable: l.klass.create(l.parse(r[1]))
                    });
                for (a = a.sort(function(t, e) {
                        return t.index > e.index ? 1 : -1
                    }), o = [], n = 0, d = 0, p = a.length; p > d; d++) r = a[d], r.index < n || (r.index > n && o.push(e.substring(n, r.index)), o.push(r.interpolable), n = r.index + r.length);
                return n < e.length && o.push(e.substring(n)), new t(o)
            }, t
        }(), a = function() {
            function t(t) {
                this.format = rt(this.format, this), this.interpolate = rt(this.interpolate, this), this.obj = t
            }
            return t.prototype.interpolate = function(e, n) {
                var r, i, s, a, o;
                a = this.obj, r = e.obj, s = {};
                for (i in a) o = a[i], s[i] = null != o.interpolate ? o.interpolate(r[i], n) : o;
                return new t(s)
            }, t.prototype.format = function() {
                return this.obj
            }, t.create = function(e) {
                var n, r, i;
                if (e instanceof Object) {
                    r = {};
                    for (n in e) i = e[n], r[n] = M(i);
                    return new t(r)
                }
                return null
            }, t
        }(), s = function() {
            function t(t) {
                this.format = rt(this.format, this), this.interpolate = rt(this.interpolate, this), this.value = parseFloat(t)
            }
            return t.prototype.interpolate = function(e, n) {
                var r, i;
                return i = this.value, r = e.value, new t((r - i) * n + i)
            }, t.prototype.format = function() {
                return R(this.value, 5)
            }, t.create = function(e) {
                return "number" == typeof e ? new t(e) : null
            }, t
        }(), r = function() {
            function t(t) {
                this.values = t, this.format = rt(this.format, this), this.interpolate = rt(this.interpolate, this)
            }
            return t.prototype.interpolate = function(e, n) {
                var r, i, s, a, o, u;
                for (a = this.values, r = e.values, s = [], i = o = 0, u = Math.min(a.length, r.length); u >= 0 ? u > o : o > u; i = u >= 0 ? ++o : --o) s.push(null != a[i].interpolate ? a[i].interpolate(r[i], n) : a[i]);
                return new t(s)
            }, t.prototype.format = function() {
                return this.values.map(function(t) {
                    return null != t.format ? t.format() : t
                })
            }, t.createFromArray = function(e) {
                var n;
                return n = e.map(function(t) {
                    return M(t) || t
                }), n = n.filter(function(t) {
                    return null != t
                }), new t(n)
            }, t.create = function(e) {
                return e instanceof Array ? t.createFromArray(e) : null
            }, t
        }(), t = function() {
            function t(t, e) {
                this.rgb = null != t ? t : {}, this.format = e, this.toRgba = rt(this.toRgba, this), this.toRgb = rt(this.toRgb, this), this.toHex = rt(this.toHex, this)
            }
            return t.fromHex = function(e) {
                var n, r;
                return n = e.match(/^#([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i), null != n && (e = "#" + n[1] + n[1] + n[2] + n[2] + n[3] + n[3]), r = e.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i), null != r ? new t({
                    r: parseInt(r[1], 16),
                    g: parseInt(r[2], 16),
                    b: parseInt(r[3], 16),
                    a: 1
                }, "hex") : null
            }, t.fromRgb = function(e) {
                var n, r;
                return n = e.match(/^rgba?\(([0-9.]*), ?([0-9.]*), ?([0-9.]*)(?:, ?([0-9.]*))?\)$/), null != n ? new t({
                    r: parseFloat(n[1]),
                    g: parseFloat(n[2]),
                    b: parseFloat(n[3]),
                    a: parseFloat(null != (r = n[4]) ? r : 1)
                }, null != n[4] ? "rgba" : "rgb") : null
            }, t.componentToHex = function(t) {
                var e;
                return e = t.toString(16), 1 === e.length ? "0" + e : e
            }, t.prototype.toHex = function() {
                return "#" + t.componentToHex(this.rgb.r) + t.componentToHex(this.rgb.g) + t.componentToHex(this.rgb.b)
            }, t.prototype.toRgb = function() {
                return "rgb(" + this.rgb.r + ", " + this.rgb.g + ", " + this.rgb.b + ")"
            }, t.prototype.toRgba = function() {
                return "rgba(" + this.rgb.r + ", " + this.rgb.g + ", " + this.rgb.b + ", " + this.rgb.a + ")"
            }, t
        }(), i = function() {
            function e(t) {
                this.color = t, this.format = rt(this.format, this), this.interpolate = rt(this.interpolate, this)
            }
            return e.prototype.interpolate = function(n, r) {
                var i, s, a, o, u, l, h, c;
                for (o = this.color, i = n.color, a = {}, c = ["r", "g", "b"], l = 0, h = c.length; h > l; l++) s = c[l], u = Math.round((i.rgb[s] - o.rgb[s]) * r + o.rgb[s]), a[s] = Math.min(255, Math.max(0, u));
                return s = "a", u = R((i.rgb[s] - o.rgb[s]) * r + o.rgb[s], 5), a[s] = Math.min(1, Math.max(0, u)), new e(new t(a, i.format))
            }, e.prototype.format = function() {
                return "hex" === this.color.format ? this.color.toHex() : "rgb" === this.color.format ? this.color.toRgb() : "rgba" === this.color.format ? this.color.toRgba() : void 0
            }, e.create = function(n) {
                var r;
                if ("string" == typeof n) return r = t.fromHex(n) || t.fromRgb(n), null != r ? new e(r) : null
            }, e
        }(), n = function() {
            function t(t) {
                this.props = t, this.applyRotateCenter = rt(this.applyRotateCenter, this), this.format = rt(this.format, this), this.interpolate = rt(this.interpolate, this)
            }
            return t.prototype.interpolate = function(e, n) {
                var r, i, s, a, o, u, l, h, c, d, f, p;
                for (s = {}, d = ["translate", "scale", "rotate"], a = 0, h = d.length; h > a; a++)
                    for (i = d[a], s[i] = [], r = o = 0, f = this.props[i].length; f >= 0 ? f > o : o > f; r = f >= 0 ? ++o : --o) s[i][r] = (e.props[i][r] - this.props[i][r]) * n + this.props[i][r];
                for (r = u = 1; 2 >= u; r = ++u) s.rotate[r] = e.props.rotate[r];
                for (p = ["skew"], l = 0, c = p.length; c > l; l++) i = p[l], s[i] = (e.props[i] - this.props[i]) * n + this.props[i];
                return new t(s)
            }, t.prototype.format = function() {
                return "translate(" + this.props.translate.join(",") + ") rotate(" + this.props.rotate.join(",") + ") skewX(" + this.props.skew + ") scale(" + this.props.scale.join(",") + ")"
            }, t.prototype.applyRotateCenter = function(t) {
                var e, n, r, i, s, a;
                for (n = w.createSVGMatrix(), n = n.translate(t[0], t[1]), n = n.rotate(this.props.rotate[0]), n = n.translate(-t[0], -t[1]), r = new l(n), i = r.decompose().props.translate, a = [], e = s = 0; 1 >= s; e = ++s) a.push(this.props.translate[e] -= i[e]);
                return a
            }, t
        }(), w = "undefined" != typeof document && null !== document ? document.createElementNS("http://www.w3.org/2000/svg", "svg") : void 0, l = function() {
            function t(t) {
                this.m = t, this.applyProperties = rt(this.applyProperties, this), this.decompose = rt(this.decompose, this), this.m || (this.m = w.createSVGMatrix())
            }
            return t.prototype.decompose = function() {
                var t, e, r, i, s;
                return i = new c([this.m.a, this.m.b]), s = new c([this.m.c, this.m.d]), t = i.length(), r = i.dot(s), i = i.normalize(), e = s.combine(i, 1, -r).length(), new n({
                    translate: [this.m.e, this.m.f],
                    rotate: [180 * Math.atan2(this.m.b, this.m.a) / Math.PI, this.rotateCX, this.rotateCY],
                    scale: [t, e],
                    skew: r / e * 180 / Math.PI
                })
            }, t.prototype.applyProperties = function(t) {
                var e, n, r, i, s, a, o, u;
                for (e = {}, s = 0, a = t.length; a > s; s++) r = t[s], e[r[0]] = r[1];
                for (n in e) i = e[n], "translateX" === n ? this.m = this.m.translate(i, 0) : "translateY" === n ? this.m = this.m.translate(0, i) : "scaleX" === n ? this.m = this.m.scaleNonUniform(i, 1) : "scaleY" === n ? this.m = this.m.scaleNonUniform(1, i) : "rotateZ" === n ? this.m = this.m.rotate(i) : "skewX" === n ? this.m = this.m.skewX(i) : "skewY" === n && (this.m = this.m.skewY(i));
                return this.rotateCX = null != (o = e.rotateCX) ? o : 0, this.rotateCY = null != (u = e.rotateCY) ? u : 0
            }, t
        }(), c = function() {
            function t(t) {
                this.els = t, this.combine = rt(this.combine, this), this.normalize = rt(this.normalize, this), this.length = rt(this.length, this), this.cross = rt(this.cross, this), this.dot = rt(this.dot, this), this.e = rt(this.e, this)
            }
            return t.prototype.e = function(t) {
                return 1 > t || t > this.els.length ? null : this.els[t - 1]
            }, t.prototype.dot = function(t) {
                var e, n, r;
                if (e = t.els || t, r = 0, (n = this.els.length) !== e.length) return null;
                for (n += 1; --n;) r += this.els[n - 1] * e[n - 1];
                return r
            }, t.prototype.cross = function(e) {
                var n, r;
                return r = e.els || e, 3 !== this.els.length || 3 !== r.length ? null : (n = this.els, new t([n[1] * r[2] - n[2] * r[1], n[2] * r[0] - n[0] * r[2], n[0] * r[1] - n[1] * r[0]]))
            }, t.prototype.length = function() {
                var t, e, n, r, i;
                for (t = 0, i = this.els, n = 0, r = i.length; r > n; n++) e = i[n], t += Math.pow(e, 2);
                return Math.sqrt(t)
            }, t.prototype.normalize = function() {
                var e, n, r, i, s;
                r = this.length(), i = [], s = this.els;
                for (n in s) e = s[n], i[n] = e / r;
                return new t(i)
            }, t.prototype.combine = function(e, n, r) {
                var i, s, a, o;
                for (s = [], i = a = 0, o = this.els.length; o >= 0 ? o > a : a > o; i = o >= 0 ? ++a : --a) s[i] = n * this.els[i] + r * e.els[i];
                return new t(s)
            }, t
        }(), e = function() {
            function t() {
                this.toMatrix = rt(this.toMatrix, this), this.format = rt(this.format, this), this.interpolate = rt(this.interpolate, this)
            }
            return t.prototype.interpolate = function(e, n, r) {
                var i, s, a, o, u, l, h, c, d, f, p, m, g, v, y, w, _, b;
                for (null == r && (r = null), a = this, s = new t, _ = ["translate", "scale", "skew", "perspective"], m = 0, w = _.length; w > m; m++)
                    for (h = _[m], s[h] = [], o = g = 0, b = a[h].length - 1; b >= 0 ? b >= g : g >= b; o = b >= 0 ? ++g : --g) s[h][o] = null == r || r.indexOf(h) > -1 || r.indexOf("" + h + ["x", "y", "z"][o]) > -1 ? (e[h][o] - a[h][o]) * n + a[h][o] : a[h][o];
                if (null == r || -1 !== r.indexOf("rotate")) {
                    if (c = a.quaternion, d = e.quaternion, 0 > (i = c[0] * d[0] + c[1] * d[1] + c[2] * d[2] + c[3] * d[3])) {
                        for (o = v = 0; 3 >= v; o = ++v) c[o] = -c[o];
                        i = -i
                    }
                    for (i + 1 > .05 ? 1 - i >= .05 ? (p = Math.acos(i), l = 1 / Math.sin(p), f = Math.sin(p * (1 - n)) * l, u = Math.sin(p * n) * l) : (f = 1 - n, u = n) : (d[0] = -c[1], d[1] = c[0], d[2] = -c[3], d[3] = c[2], f = Math.sin(piDouble * (.5 - n)), u = Math.sin(piDouble * n)), s.quaternion = [], o = y = 0; 3 >= y; o = ++y) s.quaternion[o] = c[o] * f + d[o] * u
                } else s.quaternion = a.quaternion;
                return s
            }, t.prototype.format = function() {
                return this.toMatrix().toString()
            }, t.prototype.toMatrix = function() {
                var t, e, n, r, i, s, a, o, l, h, c, d, f, p, m, g;
                for (t = this, i = u.I(4), e = f = 0; 3 >= f; e = ++f) i.els[e][3] = t.perspective[e];
                for (s = t.quaternion, h = s[0], c = s[1], d = s[2], l = s[3], a = t.skew, r = [
                        [1, 0],
                        [2, 0],
                        [2, 1]
                    ], e = p = 2; p >= 0; e = --p) a[e] && (o = u.I(4), o.els[r[e][0]][r[e][1]] = a[e], i = i.multiply(o));
                for (i = i.multiply(new u([
                        [1 - 2 * (c * c + d * d), 2 * (h * c - d * l), 2 * (h * d + c * l), 0],
                        [2 * (h * c + d * l), 1 - 2 * (h * h + d * d), 2 * (c * d - h * l), 0],
                        [2 * (h * d - c * l), 2 * (c * d + h * l), 1 - 2 * (h * h + c * c), 0],
                        [0, 0, 0, 1]
                    ])), e = m = 0; 2 >= m; e = ++m) {
                    for (n = g = 0; 2 >= g; n = ++g) i.els[e][n] *= t.scale[e];
                    i.els[3][e] = t.translate[e]
                }
                return i
            }, t
        }(), u = function() {
            function t(t) {
                this.els = t, this.toString = rt(this.toString, this), this.decompose = rt(this.decompose, this), this.inverse = rt(this.inverse, this), this.augment = rt(this.augment, this), this.toRightTriangular = rt(this.toRightTriangular, this), this.transpose = rt(this.transpose, this), this.multiply = rt(this.multiply, this), this.dup = rt(this.dup, this), this.e = rt(this.e, this)
            }
            return t.prototype.e = function(t, e) {
                return 1 > t || t > this.els.length || 1 > e || e > this.els[0].length ? null : this.els[t - 1][e - 1]
            }, t.prototype.dup = function() {
                return new t(this.els)
            }, t.prototype.multiply = function(e) {
                var n, r, i, s, a, o, u, l, h, c, d, f, p;
                for (f = !!e.modulus, n = e.els || e, void 0 === n[0][0] && (n = new t(n).els), c = this.els.length, u = c, l = n[0].length, i = this.els[0].length, s = [], c += 1; --c;)
                    for (a = u - c, s[a] = [], d = l, d += 1; --d;) {
                        for (o = l - d, p = 0, h = i, h += 1; --h;) r = i - h, p += this.els[a][r] * n[r][o];
                        s[a][o] = p
                    }
                return n = new t(s), f ? n.col(1) : n
            }, t.prototype.transpose = function() {
                var e, n, r, i, s, a, o;
                for (o = this.els.length, e = this.els[0].length, n = [], s = e, s += 1; --s;)
                    for (r = e - s, n[r] = [], a = o, a += 1; --a;) i = o - a, n[r][i] = this.els[i][r];
                return new t(n)
            }, t.prototype.toRightTriangular = function() {
                var t, e, n, r, i, s, a, o, u, l, h, c, d, f;
                for (t = this.dup(), o = this.els.length, i = o, s = this.els[0].length; --o;) {
                    if (n = i - o, 0 === t.els[n][n])
                        for (r = h = d = n + 1; i >= d ? i > h : h > i; r = i >= d ? ++h : --h)
                            if (0 !== t.els[r][n]) {
                                for (e = [], u = s, u += 1; --u;) l = s - u, e.push(t.els[n][l] + t.els[r][l]);
                                t.els[n] = e;
                                break
                            } if (0 !== t.els[n][n])
                        for (r = c = f = n + 1; i >= f ? i > c : c > i; r = i >= f ? ++c : --c) {
                            for (a = t.els[r][n] / t.els[n][n], e = [], u = s, u += 1; --u;) l = s - u, e.push(n >= l ? 0 : t.els[r][l] - t.els[n][l] * a);
                            t.els[r] = e
                        }
                }
                return t
            }, t.prototype.augment = function(e) {
                var n, r, i, s, a, o, u, l, h;
                if (n = e.els || e, void 0 === n[0][0] && (n = new t(n).els), r = this.dup(), i = r.els[0].length, l = r.els.length, o = l, u = n[0].length, l !== n.length) return null;
                for (l += 1; --l;)
                    for (s = o - l, h = u, h += 1; --h;) a = u - h, r.els[s][i + a] = n[s][a];
                return r
            }, t.prototype.inverse = function() {
                var e, n, r, i, s, a, o, u, l, h, c, d, f;
                for (h = this.els.length, o = h, e = this.augment(t.I(h)).toRightTriangular(), u = e.els[0].length, s = [], h += 1; --h;) {
                    for (i = h - 1, r = [], c = u, s[i] = [], n = e.els[i][i], c += 1; --c;) d = u - c, l = e.els[i][d] / n, r.push(l), d >= o && s[i].push(l);
                    for (e.els[i] = r, a = f = 0; i >= 0 ? i > f : f > i; a = i >= 0 ? ++f : --f) {
                        for (r = [], c = u, c += 1; --c;) d = u - c, r.push(e.els[a][d] - e.els[i][d] * e.els[a][i]);
                        e.els[a] = r
                    }
                }
                return new t(s)
            }, t.I = function(e) {
                var n, r, i, s, a;
                for (n = [], s = e, e += 1; --e;)
                    for (r = s - e, n[r] = [], a = s, a += 1; --a;) i = s - a, n[r][i] = r === i ? 1 : 0;
                return new t(n)
            }, t.prototype.decompose = function() {
                var t, n, r, i, s, a, o, u, l, h, d, f, p, m, g, v, y, w, _, b, k, M, x, D, F, S, T, C, Y, A, O, E, H, z, L, I, P, W;
                for (a = this, b = [], y = [], w = [], h = [], u = [], t = [], n = Y = 0; 3 >= Y; n = ++Y)
                    for (t[n] = [], i = A = 0; 3 >= A; i = ++A) t[n][i] = a.els[n][i];
                if (0 === t[3][3]) return !1;
                for (n = O = 0; 3 >= O; n = ++O)
                    for (i = E = 0; 3 >= E; i = ++E) t[n][i] /= t[3][3];
                for (l = a.dup(), n = H = 0; 2 >= H; n = ++H) l.els[n][3] = 0;
                if (l.els[3][3] = 1, 0 !== t[0][3] || 0 !== t[1][3] || 0 !== t[2][3]) {
                    for (f = new c(t.slice(0, 4)[3]), r = l.inverse(), k = r.transpose(), u = k.multiply(f).els, n = z = 0; 2 >= z; n = ++z) t[n][3] = 0;
                    t[3][3] = 1
                } else u = [0, 0, 0, 1];
                for (n = L = 0; 2 >= L; n = ++L) b[n] = t[3][n], t[3][n] = 0;
                for (m = [], n = I = 0; 2 >= I; n = ++I) m[n] = new c(t[n].slice(0, 3));
                if (y[0] = m[0].length(), m[0] = m[0].normalize(), w[0] = m[0].dot(m[1]), m[1] = m[1].combine(m[0], 1, -w[0]), y[1] = m[1].length(), m[1] = m[1].normalize(), w[0] /= y[1], w[1] = m[0].dot(m[2]), m[2] = m[2].combine(m[0], 1, -w[1]), w[2] = m[1].dot(m[2]), m[2] = m[2].combine(m[1], 1, -w[2]), y[2] = m[2].length(), m[2] = m[2].normalize(), w[1] /= y[2], w[2] /= y[2], o = m[1].cross(m[2]), m[0].dot(o) < 0)
                    for (n = P = 0; 2 >= P; n = ++P)
                        for (y[n] *= -1, i = W = 0; 2 >= W; i = ++W) m[n].els[i] *= -1;
                g = function(t, e) {
                    return m[t].els[e]
                }, p = [], p[1] = Math.asin(-g(0, 2)), 0 !== Math.cos(p[1]) ? (p[0] = Math.atan2(g(1, 2), g(2, 2)), p[2] = Math.atan2(g(0, 1), g(0, 0))) : (p[0] = Math.atan2(-g(2, 0), g(1, 1)), p[1] = 0), _ = g(0, 0) + g(1, 1) + g(2, 2) + 1, _ > 1e-4 ? (v = .5 / Math.sqrt(_), F = .25 / v, S = (g(2, 1) - g(1, 2)) * v, T = (g(0, 2) - g(2, 0)) * v, C = (g(1, 0) - g(0, 1)) * v) : g(0, 0) > g(1, 1) && g(0, 0) > g(2, 2) ? (v = 2 * Math.sqrt(1 + g(0, 0) - g(1, 1) - g(2, 2)), S = .25 * v, T = (g(0, 1) + g(1, 0)) / v, C = (g(0, 2) + g(2, 0)) / v, F = (g(2, 1) - g(1, 2)) / v) : g(1, 1) > g(2, 2) ? (v = 2 * Math.sqrt(1 + g(1, 1) - g(0, 0) - g(2, 2)), S = (g(0, 1) + g(1, 0)) / v, T = .25 * v, C = (g(1, 2) + g(2, 1)) / v, F = (g(0, 2) - g(2, 0)) / v) : (v = 2 * Math.sqrt(1 + g(2, 2) - g(0, 0) - g(1, 1)), S = (g(0, 2) + g(2, 0)) / v, T = (g(1, 2) + g(2, 1)) / v, C = .25 * v, F = (g(1, 0) - g(0, 1)) / v), h = [S, T, C, F], d = new e, d.translate = b, d.scale = y, d.skew = w, d.quaternion = h, d.perspective = u, d.rotate = p;
                for (x in d) {
                    M = d[x];
                    for (s in M) D = M[s], isNaN(D) && (M[s] = 0)
                }
                return d
            }, t.prototype.toString = function() {
                var t, e, n, r, i;
                for (n = "matrix3d(", t = r = 0; 3 >= r; t = ++r)
                    for (e = i = 0; 3 >= i; e = ++i) n += R(this.els[t][e], 10), (3 !== t || 3 !== e) && (n += ",");
                return n += ")"
            }, t.matrixForTransform = _(function(t) {
                var e, n, r, i, s, a;
                return e = document.createElement("div"), e.style.position = "absolute", e.style.visibility = "hidden", e.style[I("transform")] = t, document.body.appendChild(e), r = window.getComputedStyle(e, null), n = null != (i = null != (s = r.transform) ? s : r[I("transform")]) ? i : null != (a = F.tests) ? a.matrixForTransform(t) : void 0, document.body.removeChild(e), n
            }), t.fromTransform = function(e) {
                var n, r, i, s, a, o;
                for (s = null != e ? e.match(/matrix3?d?\(([-0-9,e \.]*)\)/) : void 0, s ? (n = s[1].split(","), n = n.map(parseFloat), r = 6 === n.length ? [n[0], n[1], 0, 0, n[2], n[3], 0, 0, 0, 0, 1, 0, n[4], n[5], 0, 1] : n) : r = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], a = [], i = o = 0; 3 >= o; i = ++o) a.push(r.slice(4 * i, 4 * i + 4));
                return new t(a)
            }, t
        }(), L = _(function(t) {
            var e, n, r, i, s, a, o, u, l, h;
            if (void 0 !== document.body.style[t]) return "";
            for (i = t.split("-"), s = "", a = 0, u = i.length; u > a; a++) r = i[a], s += r.substring(0, 1).toUpperCase() + r.substring(1);
            for (h = ["Webkit", "Moz", "ms"], o = 0, l = h.length; l > o; o++)
                if (n = h[o], e = n + s, void 0 !== document.body.style[e]) return n;
            return ""
        }), I = _(function(t) {
            var e;
            return e = L(t), "Moz" === e ? "" + e + (t.substring(0, 1).toUpperCase() + t.substring(1)) : "" !== e ? "-" + e.toLowerCase() + "-" + J(t) : J(t)
        }), W = "undefined" != typeof window && null !== window ? window.requestAnimationFrame : void 0, p = [], m = [], N = !1, Z = 1, "undefined" != typeof window && null !== window && window.addEventListener("keyup", function(t) {
            return 68 === t.keyCode && t.shiftKey && t.ctrlKey ? F.toggleSlow() : void 0
        }), null == W && (A = 0, W = function(t) {
            var e, n, r;
            return e = Date.now(), r = Math.max(0, 16 - (e - A)), n = window.setTimeout(function() {
                return t(e + r)
            }, r), A = e + r, n
        }), G = !1, q = !1, $ = function() {
            return G ? void 0 : (G = !0, W(j))
        }, j = function(t) {
            var e, n, r, i;
            if (q) return void W(j);
            for (n = [], r = 0, i = p.length; i > r; r++) e = p[r], f(t, e) || n.push(e);
            return p = p.filter(function(t) {
                return -1 === n.indexOf(t)
            }), 0 === p.length ? G = !1 : W(j)
        }, f = function(t, e) {
            var n, r, i, s, a, o, u, l;
            if (null == e.tStart && (e.tStart = t), s = (t - e.tStart) / e.options.duration, a = e.curve(s), r = {}, s >= 1) r = e.curve.returnsToSelf ? e.properties.start : e.properties.end;
            else {
                l = e.properties.start;
                for (n in l) i = l[n], r[n] = T(i, e.properties.end[n], a)
            }
            return v(e.el, r), "function" == typeof(o = e.options).change && o.change(e.el, Math.min(1, s)), s >= 1 && "function" == typeof(u = e.options).complete && u.complete(e.el), 1 > s
        }, T = function(t, e, n) {
            return null != t && null != t.interpolate ? t.interpolate(e, n) : null
        }, V = function(t, e, n, r) {
            var i, a, h, c, d, f, g, v;
            if (null != r && (m = m.filter(function(t) {
                    return t.id !== r
                })), F.stop(t, {
                    timeout: !1
                }), !n.animated) return F.css(t, e), void("function" == typeof n.complete && n.complete(this));
            e = z(e), f = S(t, Object.keys(e)), i = {}, g = [];
            for (c in e) v = e[c], null != t.style && tt.contains(c) ? g.push([c, v]) : (a = M(v), a instanceof s && null != t.style && (a = new o([a, nt(c, 0)])), i[c] = a);
            return g.length > 0 && (h = Y(t), h ? (d = new l, d.applyProperties(g)) : (v = g.map(function(t) {
                return et(t[0], t[1])
            }).join(" "), d = u.fromTransform(u.matrixForTransform(v))), i.transform = d.decompose(), h && f.transform.applyRotateCenter([i.transform.props.rotate[1], i.transform.props.rotate[2]])), p.push({
                el: t,
                properties: {
                    start: f,
                    end: i
                },
                options: n,
                curve: n.type.call(n.type, n)
            }), $()
        }, K = [], Q = 0, U = function(t) {
            return C() ? t.realTimeoutId = setTimeout(function() {
                return t.fn(), b(t.id)
            }, t.delay) : void 0
        }, d = function(t, e) {
            var n;
            return Q += 1, n = {
                id: Q,
                tStart: Date.now(),
                fn: t,
                delay: e,
                originalDelay: e
            }, U(n), K.push(n), Q
        }, b = function(t) {
            return K = K.filter(function(e) {
                return e.id === t && clearTimeout(e.realTimeoutId), e.id !== t
            })
        }, O = function(t, e) {
            var n;
            return null != t ? (n = t - e.tStart, e.originalDelay - n) : e.originalDelay
        }, "undefined" != typeof window && null !== window && window.addEventListener("unload", function() {}), X = null, H(function(t) {
            var e, n, r, i, s, a, o, u, l, h;
            if (q = !t, t) {
                if (G)
                    for (n = Date.now() - X, s = 0, u = p.length; u > s; s++) e = p[s], null != e.tStart && (e.tStart += n);
                for (a = 0, l = K.length; l > a; a++) r = K[a], r.delay = O(X, r), U(r);
                return X = null
            }
            for (X = Date.now(), h = [], i = 0, o = K.length; o > i; i++) r = K[i], h.push(clearTimeout(r.realTimeoutId));
            return h
        }), F = {}, F.linear = function() {
            return function(t) {
                return t
            }
        }, F.spring = function(t) {
            var e, n, r, i, s;
            return null == t && (t = {}), g(t, F.spring.defaults), r = Math.max(1, t.frequency / 20), i = Math.pow(20, t.friction / 100), s = t.anticipationSize / 1e3, Math.max(0, s), e = function(e) {
                    var n, r, i, a;
                    return n = .8, i = s / (1 - s), a = 0, r = (i - n * a) / (i - a), (n - r) / i * e * t.anticipationStrength / 100 + r
                }, n = function(t) {
                    return Math.pow(i / 10, -t) * (1 - t)
                },
                function(t) {
                    var i, a, o, u, l, h, c, d;
                    return h = t / (1 - s) - s / (1 - s), s > t ? (d = s / (1 - s) - s / (1 - s), c = 0 / (1 - s) - s / (1 - s), l = Math.acos(1 / e(d)), o = (Math.acos(1 / e(c)) - l) / (r * -s), i = e) : (i = n, l = 0, o = 1), a = i(h), u = r * (t - s) * o + l, 1 - a * Math.cos(u)
                }
        }, F.bounce = function(t) {
            var e, n, r, i;
            return null == t && (t = {}), g(t, F.bounce.defaults), r = Math.max(1, t.frequency / 20), i = Math.pow(20, t.friction / 100), e = function(t) {
                return Math.pow(i / 10, -t) * (1 - t)
            }, n = function(t) {
                var n, i, s, a;
                return a = -1.57, i = 1, n = e(t), s = r * t * i + a, n * Math.cos(s)
            }, n.returnsToSelf = !0, n
        }, F.gravity = function(t) {
            var e, n, r, i, s, a, o;
            return null == t && (t = {}), g(t, F.gravity.defaults), n = Math.min(t.bounciness / 1250, .8), i = t.elasticity / 1e3, o = 100, r = [], e = function() {
                    var r, i;
                    for (r = Math.sqrt(2 / o), i = {
                            a: -r,
                            b: r,
                            H: 1
                        }, t.returnsToSelf && (i.a = 0, i.b = 2 * i.b); i.H > .001;) e = i.b - i.a, i = {
                        a: i.b,
                        b: i.b + e * n,
                        H: i.H * n * n
                    };
                    return i.b
                }(), a = function(n, r, i, s) {
                    var a, o;
                    return e = r - n, o = 2 / e * s - 1 - 2 * n / e, a = o * o * i - i + 1, t.returnsToSelf && (a = 1 - a), a
                },
                function() {
                    var s, a, u, l;
                    for (a = Math.sqrt(2 / (o * e * e)), u = {
                            a: -a,
                            b: a,
                            H: 1
                        }, t.returnsToSelf && (u.a = 0, u.b = 2 * u.b), r.push(u), s = e, l = []; u.b < 1 && u.H > .001;) s = u.b - u.a, u = {
                        a: u.b,
                        b: u.b + s * n,
                        H: u.H * i
                    }, l.push(r.push(u))
                }(), s = function(e) {
                    var n, i;
                    for (i = 0, n = r[i]; !(e >= n.a && e <= n.b) && (i += 1, n = r[i]););
                    return n ? a(n.a, n.b, n.H, e) : t.returnsToSelf ? 0 : 1
                }, s.returnsToSelf = t.returnsToSelf, s
        }, F.forceWithGravity = function(t) {
            return null == t && (t = {}), g(t, F.forceWithGravity.defaults), t.returnsToSelf = !0, F.gravity(t)
        }, F.bezier = function() {
            var t, e, n;
            return e = function(t, e, n, r, i) {
                    return Math.pow(1 - t, 3) * e + 3 * Math.pow(1 - t, 2) * t * n + 3 * (1 - t) * Math.pow(t, 2) * r + Math.pow(t, 3) * i
                }, t = function(t, n, r, i, s) {
                    return {
                        x: e(t, n.x, r.x, i.x, s.x),
                        y: e(t, n.y, r.y, i.y, s.y)
                    }
                }, n = function(t, e, n) {
                    var r, i, s, a, o, u, l, h, c, d;
                    for (r = null, c = 0, d = e.length; d > c && (i = e[c], t >= i(0).x && t <= i(1).x && (r = i), null === r); c++);
                    if (!r) return n ? 0 : 1;
                    for (h = 1e-4, a = 0, u = 1, o = (u + a) / 2, l = r(o).x, s = 0; Math.abs(t - l) > h && 100 > s;) t > l ? a = o : u = o, o = (u + a) / 2, l = r(o).x, s += 1;
                    return r(o).y
                },
                function(e) {
                    var r, i, s;
                    return null == e && (e = {}), s = e.points, r = function() {
                        var e, n, i;
                        r = [], i = function(e, n) {
                            var i;
                            return i = function(r) {
                                return t(r, e, e.cp[e.cp.length - 1], n.cp[0], n)
                            }, r.push(i)
                        };
                        for (e in s) {
                            if ((n = parseInt(e)) >= s.length - 1) break;
                            i(s[n], s[n + 1])
                        }
                        return r
                    }(), i = function(t) {
                        return 0 === t ? 0 : 1 === t ? 1 : n(t, r, this.returnsToSelf)
                    }, i.returnsToSelf = 0 === s[s.length - 1].y, i
                }
        }(), F.easeInOut = function(t) {
            var e, n;
            return null == t && (t = {}), e = null != (n = t.friction) ? n : F.easeInOut.defaults.friction, F.bezier({
                points: [{
                    x: 0,
                    y: 0,
                    cp: [{
                        x: .92 - e / 1e3,
                        y: 0
                    }]
                }, {
                    x: 1,
                    y: 1,
                    cp: [{
                        x: .08 + e / 1e3,
                        y: 1
                    }]
                }]
            })
        }, F.easeIn = function(t) {
            var e, n;
            return null == t && (t = {}), e = null != (n = t.friction) ? n : F.easeIn.defaults.friction, F.bezier({
                points: [{
                    x: 0,
                    y: 0,
                    cp: [{
                        x: .92 - e / 1e3,
                        y: 0
                    }]
                }, {
                    x: 1,
                    y: 1,
                    cp: [{
                        x: 1,
                        y: 1
                    }]
                }]
            })
        }, F.easeOut = function(t) {
            var e, n;
            return null == t && (t = {}), e = null != (n = t.friction) ? n : F.easeOut.defaults.friction, F.bezier({
                points: [{
                    x: 0,
                    y: 0,
                    cp: [{
                        x: 0,
                        y: 0
                    }]
                }, {
                    x: 1,
                    y: 1,
                    cp: [{
                        x: .08 + e / 1e3,
                        y: 1
                    }]
                }]
            })
        }, F.spring.defaults = {
            frequency: 300,
            friction: 200,
            anticipationSize: 0,
            anticipationStrength: 0
        }, F.bounce.defaults = {
            frequency: 300,
            friction: 200
        }, F.forceWithGravity.defaults = F.gravity.defaults = {
            bounciness: 400,
            elasticity: 200
        }, F.easeInOut.defaults = F.easeIn.defaults = F.easeOut.defaults = {
            friction: 500
        }, F.css = E(function(t, e) {
            return y(t, e, !0)
        }), F.animate = E(function(t, e, n) {
            var r;
            return null == n && (n = {}), n = k(n), g(n, {
                type: F.easeInOut,
                duration: 1e3,
                delay: 0,
                animated: !0
            }), n.duration = Math.max(0, n.duration * Z), n.delay = Math.max(0, n.delay), 0 === n.delay ? V(t, e, n) : (r = F.setTimeout(function() {
                return V(t, e, n, r)
            }, n.delay), m.push({
                id: r,
                el: t
            }))
        }), F.stop = E(function(t, e) {
            return null == e && (e = {}), null == e.timeout && (e.timeout = !0), e.timeout && (m = m.filter(function(n) {
                return n.el !== t || null != e.filter && !e.filter(n) || (F.clearTimeout(n.id), !1)
            })), p = p.filter(function(e) {
                return e.el !== t
            })
        }), F.setTimeout = function(t, e) {
            return d(t, e * Z)
        }, F.clearTimeout = function(t) {
            return b(t)
        }, F.toggleSlow = function() {
            return N = !N, Z = N ? 3 : 1, void("undefined" != typeof console && null !== console && console.log)
        }, "object" == typeof module && "object" == typeof module.exports ? module.exports = F : "function" == typeof define ? define("dynamics", function() {
            return F
        }) : window.dynamics = F
    }.call(this);