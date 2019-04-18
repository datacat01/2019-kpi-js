 /*!
  * Name: ibm.com v18 production file
  * Release: 137.0.0
  * Built: 2019-04-09 3:40:32 AM
  * Owner: Michael Santelia, Vlad Saling
  * Copyright (c) 2019 IBM Corporation
  * Description: Official file for production use
  */
 ! function(i, e) {
     var t = e.namespace(e, "common.widget.forms");
     t.setupLineFormFields = function() {
         function t(e) {
             i(e).closest("p").removeClass("ibm-coverfield")
         }

         function n() {
             i(".ibm-row-form--line").find("input:text, input:password, input[type='search']").each(function() {
                 "" === this.value ? i(this).closest("p").addClass("ibm-coverfield") : t(this)
             })
         }
         i(".ibm-row-form--line").find("input:text, input:password, input[type='search']").each(function() {
             var e = this;
             i(e).on("click focus", function() {
                 t(e), i(e).closest("p").addClass("ibm-active")
             }).on("blur", function() {
                 i(e).closest("p").removeClass("ibm-active"), n()
             }), n()
         }), i(".ibm-row-form--line").each(function() {
             e.common.widget.manager.dispatchInitEvent(this)
         })
     }, i(function() {
         0 < i(".ibm-row-form--line").length && t.setupLineFormFields()
     })
 }(jQuery, IBMCore),
 function(a, t) {
     t.namespace(t, "common.widget.formvalidator").init = function(e) {
         var n = !1,
             i = a(e);

         function o(e) {
             if (void 0 !== e[0].checkValidity) return r(e, e[0].checkValidity());
             if (e.is("input[type='email']")) {
                 if (!0 === e.is("[required]")) return r(e, -1 !== e.val().search(/[A-Za-z0-9!#$%&'*+-\/=?^_`{|}~]+@[A-Za-z0-9-]+(.[A-Za-z0-9-]+)*/))
             } else if (e.is("input[type='radio'], input[type='checkbox']")) {
                 var t = e.parents("form > p").find("input[name='{name}']".replace("{name}", e.attr("name")));
                 if (!0 === t.is("[required]")) return r(e, t.find(":checked").val())
             } else if (!0 === e.is("[required]")) return r(e, e.val())
         }

         function r(e, t) {
             return e.parents("form > p")[t ? "addClass" : "removeClass"]("ibm-error"), t
         }
         i.find("input[type='submit']").on("click.formvalidator", function(e) {
             var t = !0;
             i.find("input, textarea, select").each(function() {
                 o(a(this)) || (t = !1)
             }), void 0 === i[0].checkValidity && !1 === t && (e.preventDefault(), i.find("p.ibm-error").eq(0).find("input, textarea, select").eq(0).focus()), n = !0
         }), i.find("input, textarea, select").each(function() {
             a(this).on("keydown.formvalidator paste.formvalidator change.formvalidator", function() {
                 var e = a(this);
                 n && setTimeout(function() {
                     o(e)
                 }, 0)
             })
         }), i.data("widget-formvalidator", {
             destroy: function() {
                 return i.removeClass("ibm-widget-processed").find("input, textarea, select").off(".formvalidator"), i
             }
         }), t.common.widget.manager.dispatchEvent({
             evtEl: i[0],
             evtName: "formvalidator-init"
         })
     }
 }(jQuery, IBMCore),
 function(b, v) {
     v.namespace(v, "common.widget.fileinput");
     var n = [];

     function i(t) {
         var s, n, i, o = {},
             r = {
                 translationBrowse: "Browse",
                 translationRemove: "Remove"
             },
             a = this,
             l = "<span></span>",
             c = '<button href="#" class="ibm-browsebutton ibm-btn-pri ibm-btn-gray-50 ibm-btn-small">{browse}</button>',
             d = '<a href="#" class="ibm-inlinelink ibm-remove-link" role="button" aria-label="Remove">{remove}</a>',
             u = '<span class="ibm-fileinput"></span>';

         function f() {
             return e = s.clone(), t = e.attr("name"), n = t || "uploadFile", !t && s.data("multiple") ? n += "[]" : t && s.data("multiple") && (n = t + "[]"), e.attr("name", n);
             var e, t, n
         }

         function m(e) {
             var t = (e || f()).on("change", g);
             return b(u).append(b(c).on("click", h)).append(t)
         }

         function p(e) {
             var t;
             e.preventDefault(), b(e.currentTarget).closest(".ibm-fileinput").remove(), 0 === (t = i.children(".ibm-fileinput").length) ? i.html(m()) : 1 === t && i.find(".ibm-browsebutton").html("Browse")
         }

         function h(e) {
             e.preventDefault(), b(e.currentTarget.parentElement).find("input[type=file]")[0].click()
         }

         function g(e) {
             var t = b(e.currentTarget),
                 n = b(e.currentTarget).closest("form"),
                 i = t.val().split("\\"),
                 o = i,
                 r = b(d).on("click", p),
                 a = m();
             i = 1 < i.length ? i[i.length - 1] : i[0], o = n.hasClass("ibm-column-form") && 30 < i.length ? i.substring(0, 14) + "..." + i.substring(i.length - 10, i.length) : n.hasClass("ibm-row-form") && 15 < i.length ? i.substring(0, 6) + "..." + i.substring(i.length - 7, i.length) : i, t.before(r.attr("aria-label", "Remove " + i)).after("<span>(" + o + ")</span>").siblings(".ibm-browsebutton").remove(), s.data("multiple") && (a.children("a").attr("aria-label", "Add another file").html("Add another file"), t.closest(".ibm-fileinput").after(a))
         }
         a.destroy = function() {
             return i.replaceWith(n), n
         }, a.init = function(e) {
             try {
                 s = b(e), n = s.clone(!0), o = b.extend({}, r, s.data() || {}, t), c = c.replace("{browse}", o.translationBrowse), d = d.replace("{remove}", o.translationRemove),
                     function(e) {
                         var t;
                         if (!e.closest("form").hasClass("ibm-column-form") && !e.closest("form").hasClass("ibm-row-form")) return;
                         (t = m()).wrap(l), i = t.parent(), e.parent().before(t.parent()), e.parent().remove()
                     }(s), i.find("input").data("widget", a), v.common.widget.manager.dispatchInitEvent(s[0])
             } catch (e) {
                 throw e
             }
         }
     }
     b.fn.fileinput = function(t) {
         return this.each(function() {
             var e;
             (e = new i(t), n.push(e), e).init(this)
         })
     }
 }(jQuery, IBMCore),
 function(e) {
     "function" == typeof define && define.amd ? define("picker", ["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : this.Picker = e(jQuery)
 }(function(h) {
     var i = h(window),
         g = h(document),
         b = h(document.documentElement),
         v = null != document.documentElement.style.transition;

     function y(i, e, t, n) {
         if (!i) return y;
         var o = !1,
             s = {
                 id: i.id || "P" + Math.abs(~~(Math.random() * new Date))
             },
             l = t ? h.extend(!0, {}, t.defaults, n) : n || {},
             r = h.extend({}, y.klasses(), l.klass),
             c = h(i),
             a = function() {
                 return this.start()
             },
             d = a.prototype = {
                 constructor: a,
                 $node: c,
                 start: function() {
                     return s && s.start ? d : (s.methods = {}, s.start = !0, s.open = !1, s.type = i.type, i.autofocus = i == x(), i.readOnly = !l.editable, i.id = i.id || s.id, "text" != i.type && (i.type = "text"), d.component = new t(d, l), d.$root = h('<div class="' + r.picker + '" id="' + i.id + '_root" />'), w(d.$root[0], "hidden", !0), d.$holder = h(u()).appendTo(d.$root), f(), l.formatSubmit && function() {
                         var e;
                         !0 === l.hiddenName ? (e = i.name, i.name = "") : e = (e = ["string" == typeof l.hiddenPrefix ? l.hiddenPrefix : "", "string" == typeof l.hiddenSuffix ? l.hiddenSuffix : "_submit"])[0] + i.name + e[1];
                         d._hidden = h('<input type=hidden name="' + e + '"' + (c.data("value") || i.value ? ' value="' + d.get("select", l.formatSubmit) + '"' : "") + ">")[0], c.on("change." + s.id, function() {
                             d._hidden.value = i.value ? d.get("select", l.formatSubmit) : ""
                         })
                     }(), function() {
                         c.data(e, d).addClass(r.input).val(c.data("value") ? d.get("select", l.format) : i.value), l.editable || c.on("focus." + s.id + " click." + s.id, function(e) {
                             e.preventDefault(), d.open()
                         }).on("keydown." + s.id, p);
                         w(i, {
                             haspopup: !0,
                             expanded: !1,
                             readonly: !l.editable,
                             owns: i.id + "_root"
                         })
                     }(), l.containerHidden ? h(l.containerHidden).append(d._hidden) : c.after(d._hidden), l.container ? h(l.container).append(d.$root) : c.after(d.$root), d.on({
                         start: d.component.onStart,
                         render: d.component.onRender,
                         stop: d.component.onStop,
                         open: d.component.onOpen,
                         close: d.component.onClose,
                         set: d.component.onSet
                     }).on({
                         start: l.onStart,
                         render: l.onRender,
                         stop: l.onStop,
                         open: l.onOpen,
                         close: l.onClose,
                         set: l.onSet
                     }), o = function(e) {
                         var t, n = "position";
                         e.currentStyle ? t = e.currentStyle[n] : window.getComputedStyle && (t = getComputedStyle(e)[n]);
                         return "fixed" == t
                     }(d.$holder[0]), i.autofocus && d.open(), d.trigger("start").trigger("render"))
                 },
                 render: function(e) {
                     return e ? (d.$holder = h(u()), f(), d.$root.html(d.$holder)) : d.$root.find("." + r.box).html(d.component.nodes(s.open)), d.trigger("render")
                 },
                 stop: function() {
                     return s.start && (d.close(), d._hidden && d._hidden.parentNode.removeChild(d._hidden), d.$root.remove(), c.removeClass(r.input).removeData(e), setTimeout(function() {
                         c.off("." + s.id)
                     }, 0), i.type = s.type, i.readOnly = !1, d.trigger("stop"), s.methods = {}, s.start = !1), d
                 },
                 open: function(e) {
                     return s.open ? d : (c.addClass(r.active), w(i, "expanded", !0), setTimeout(function() {
                         d.$root.addClass(r.opened), w(d.$root[0], "hidden", !1)
                     }, 0), !1 !== e && (s.open = !0, o && b.css("overflow", "hidden").css("padding-right", "+=" + k()), o && v ? d.$holder.find("." + r.frame).one("transitionend", function() {
                         d.$holder[0].focus()
                     }) : d.$holder[0].focus(), g.on("click." + s.id + " focusin." + s.id, function(e) {
                         var t = e.target;
                         t != i && t != document && 3 != e.which && d.close(t === d.$holder[0])
                     }).on("keydown." + s.id, function(e) {
                         var t = e.keyCode,
                             n = d.component.key[t],
                             i = e.target;
                         27 == t ? d.close(!0) : i != d.$holder[0] || !n && 13 != t ? h.contains(d.$root[0], i) && 13 == t && (e.preventDefault(), i.click()) : (e.preventDefault(), n ? y._.trigger(d.component.key.go, d, [y._.trigger(n)]) : d.$root.find("." + r.highlighted).hasClass(r.disabled) || (d.set("select", d.component.item.highlight), l.closeOnSelect && d.close(!0)))
                     })), d.trigger("open"))
                 },
                 close: function(e) {
                     return e && (l.editable ? i.focus() : (d.$holder.off("focus.toOpen").focus(), setTimeout(function() {
                         d.$holder.on("focus.toOpen", m)
                     }, 0))), c.removeClass(r.active), w(i, "expanded", !1), setTimeout(function() {
                         d.$root.removeClass(r.opened + " " + r.focused), w(d.$root[0], "hidden", !0)
                     }, 0), s.open ? (s.open = !1, o && b.css("overflow", "").css("padding-right", "-=" + k()), g.off("." + s.id), d.trigger("close")) : d
                 },
                 clear: function(e) {
                     return d.set("clear", null, e)
                 },
                 set: function(e, t, n) {
                     var i, o, r = h.isPlainObject(e),
                         a = r ? e : {};
                     if (n = r && h.isPlainObject(t) ? t : n || {}, e) {
                         for (i in r || (a[e] = t), a) o = a[i], i in d.component.item && (void 0 === o && (o = null), d.component.set(i, o, n)), "select" != i && "clear" != i || c.val("clear" == i ? "" : d.get(i, l.format)).trigger("change");
                         d.render()
                     }
                     return n.muted ? d : d.trigger("set", a)
                 },
                 get: function(e, t) {
                     if (null != s[e = e || "value"]) return s[e];
                     if ("valueSubmit" == e) {
                         if (d._hidden) return d._hidden.value;
                         e = "value"
                     }
                     if ("value" == e) return i.value;
                     if (e in d.component.item) {
                         if ("string" != typeof t) return d.component.get(e);
                         var n = d.component.get(e);
                         return n ? y._.trigger(d.component.formats.toString, d.component, [t, n]) : ""
                     }
                 },
                 on: function(e, t, n) {
                     var i, o, r = h.isPlainObject(e),
                         a = r ? e : {};
                     if (e)
                         for (i in r || (a[e] = t), a) o = a[i], n && (i = "_" + i), s.methods[i] = s.methods[i] || [], s.methods[i].push(o);
                     return d
                 },
                 off: function() {
                     var e, t, n = arguments;
                     for (e = 0, namesCount = n.length; e < namesCount; e += 1)(t = n[e]) in s.methods && delete s.methods[t];
                     return d
                 },
                 trigger: function(e, n) {
                     var t = function(e) {
                         var t = s.methods[e];
                         t && t.map(function(e) {
                             y._.trigger(e, d, [n])
                         })
                     };
                     return t("_" + e), t(e), d
                 }
             };

         function u() {
             return y._.node("div", y._.node("div", y._.node("div", y._.node("div", d.component.nodes(s.open), r.box), r.wrap), r.frame), r.holder, 'tabindex="-1"')
         }

         function f() {
             d.$holder.on({
                 keydown: p,
                 "focus.toOpen": m,
                 blur: function() {
                     c.removeClass(r.target)
                 },
                 focusin: function(e) {
                     d.$root.removeClass(r.focused), e.stopPropagation()
                 },
                 "mousedown click": function(e) {
                     var t = e.target;
                     t != d.$holder[0] && (e.stopPropagation(), "mousedown" != e.type || h(t).is("input, select, textarea, button, option") || (e.preventDefault(), d.$holder[0].focus()))
                 }
             }).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function() {
                 var e = h(this),
                     t = e.data(),
                     n = e.hasClass(r.navDisabled) || e.hasClass(r.disabled),
                     i = x();
                 i = i && (i.type || i.href), (n || i && !h.contains(d.$root[0], i)) && d.$holder[0].focus(), !n && t.nav ? d.set("highlight", d.component.item.highlight, {
                     nav: t.nav
                 }) : !n && "pick" in t ? (d.set("select", t.pick), l.closeOnSelect && d.close(!0)) : t.clear ? (d.clear(), l.closeOnClear && d.close(!0)) : t.close && d.close(!0)
             })
         }

         function m(e) {
             e.stopPropagation(), c.addClass(r.target), d.$root.addClass(r.focused), d.open()
         }

         function p(e) {
             var t = e.keyCode,
                 n = /^(8|46)$/.test(t);
             if (27 == t) return d.close(!0), !1;
             (32 == t || n || !s.open && d.component.key[t]) && (e.preventDefault(), e.stopPropagation(), n ? d.clear().close() : d.open())
         }
         return new a
     }

     function k() {
         if (b.height() <= i.height()) return 0;
         var e = h('<div style="visibility:hidden;width:100px" />').appendTo("body"),
             t = e[0].offsetWidth;
         e.css("overflow", "scroll");
         var n = h('<div style="width:100%" />').appendTo(e)[0].offsetWidth;
         return e.remove(), t - n
     }

     function w(e, t, n) {
         if (h.isPlainObject(t))
             for (var i in t) o(e, i, t[i]);
         else o(e, t, n)
     }

     function o(e, t, n) {
         e.setAttribute(("role" == t ? "" : "aria-") + t, n)
     }

     function x() {
         try {
             return document.activeElement
         } catch (e) {}
     }
     return y.klasses = function(e) {
         return {
             picker: e = e || "picker",
             opened: e + "--opened",
             focused: e + "--focused",
             input: e + "__input",
             active: e + "__input--active",
             target: e + "__input--target",
             holder: e + "__holder",
             frame: e + "__frame",
             wrap: e + "__wrap",
             box: e + "__box"
         }
     }, y._ = {
         group: function(e) {
             for (var t, n = "", i = y._.trigger(e.min, e); i <= y._.trigger(e.max, e, [i]); i += e.i) t = y._.trigger(e.item, e, [i]), n += y._.node(e.node, t[0], t[1], t[2]);
             return n
         },
         node: function(e, t, n, i) {
             return t ? "<" + e + (n = n ? ' class="' + n + '"' : "") + (i = i ? " " + i : "") + ">" + (t = h.isArray(t) ? t.join("") : t) + "</" + e + ">" : ""
         },
         lead: function(e) {
             return (e < 10 ? "0" : "") + e
         },
         trigger: function(e, t, n) {
             return "function" == typeof e ? e.apply(t, n || []) : e
         },
         digits: function(e) {
             return /\d/.test(e[1]) ? 2 : 1
         },
         isDate: function(e) {
             return -1 < {}.toString.call(e).indexOf("Date") && this.isInteger(e.getDate())
         },
         isInteger: function(e) {
             return -1 < {}.toString.call(e).indexOf("Number") && e % 1 == 0
         },
         ariaAttr: function(e, t) {
             h.isPlainObject(e) || (e = {
                 attribute: t
             });
             for (var n in t = "", e) {
                 var i = ("role" == n ? "" : "aria-") + n,
                     o = e[n];
                 t += null == o ? "" : i + '="' + e[n] + '"'
             }
             return t
         }
     }, y.extend = function(i, o) {
         h.fn[i] = function(e, t) {
             var n = this.data(i);
             return "picker" == e ? n : n && "string" == typeof e ? y._.trigger(n[e], n, [t]) : this.each(function() {
                 h(this).data(i) || new y(this, i, o, e)
             })
         }, h.fn[i].defaults = o.defaults
     }, y
 }),
 function(e) {
     "function" == typeof define && define.amd ? define(["picker", "jquery"], e) : "object" == typeof exports ? module.exports = e(require("./picker.js"), require("jquery")) : e(Picker, jQuery)
 }(function(e, p) {
     var t, b = e._;

     function n(t, n) {
         var e, i = this,
             o = t.$node[0],
             r = o.value,
             a = t.$node.data("value"),
             s = a || r,
             l = a ? n.formatSubmit : n.format,
             c = function() {
                 return o.currentStyle ? "rtl" == o.currentStyle.direction : "rtl" == getComputedStyle(t.$root[0]).direction
             };
         i.settings = n, i.$node = t.$node, i.queue = {
             min: "measure create",
             max: "measure create",
             now: "now create",
             select: "parse create validate",
             highlight: "parse navigate create validate",
             view: "parse create validate viewset",
             disable: "deactivate",
             enable: "activate"
         }, i.item = {}, i.item.clear = null, i.item.disable = (n.disable || []).slice(0), i.item.enable = -(!0 === (e = i.item.disable)[0] ? e.shift() : -1), i.set("min", n.min).set("max", n.max).set("now"), s ? i.set("select", s, {
             format: l,
             defaultValue: !0
         }) : i.set("select", null).set("highlight", i.item.now), i.key = {
             40: 7,
             38: -7,
             39: function() {
                 return c() ? -1 : 1
             },
             37: function() {
                 return c() ? 1 : -1
             },
             go: function(e) {
                 var t = i.item.highlight,
                     n = new Date(t.year, t.month, t.date + e);
                 i.set("highlight", n, {
                     interval: e
                 }), this.render()
             }
         }, t.on("render", function() {
             t.$root.find("." + n.klass.selectMonth).on("change", function() {
                 var e = this.value;
                 e && (t.set("highlight", [t.get("view").year, e, t.get("highlight").date]), t.$root.find("." + n.klass.selectMonth).trigger("focus"))
             }), t.$root.find("." + n.klass.selectYear).on("change", function() {
                 var e = this.value;
                 e && (t.set("highlight", [e, t.get("view").month, t.get("highlight").date]), t.$root.find("." + n.klass.selectYear).trigger("focus"))
             })
         }, 1).on("open", function() {
             var e = "";
             i.disabled(i.get("now")) && (e = ":not(." + n.klass.buttonToday + ")"), t.$root.find("button" + e + ", select").attr("disabled", !1)
         }, 1).on("close", function() {
             t.$root.find("button, select").attr("disabled", !0)
         }, 1)
     }
     n.prototype.set = function(t, n, i) {
         var o = this,
             e = o.item;
         return null === n ? ("clear" == t && (t = "select"), e[t] = n) : (e["enable" == t ? "disable" : "flip" == t ? "enable" : t] = o.queue[t].split(" ").map(function(e) {
             return n = o[e](t, n, i)
         }).pop(), "select" == t ? o.set("highlight", e.select, i) : "highlight" == t ? o.set("view", e.highlight, i) : t.match(/^(flip|min|max|disable|enable)$/) && (e.select && o.disabled(e.select) && o.set("select", e.select, i), e.highlight && o.disabled(e.highlight) && o.set("highlight", e.highlight, i))), o
     }, n.prototype.get = function(e) {
         return this.item[e]
     }, n.prototype.create = function(e, t, n) {
         var i;
         return (t = void 0 === t ? e : t) == -1 / 0 || t == 1 / 0 ? i = t : t = p.isPlainObject(t) && b.isInteger(t.pick) ? t.obj : p.isArray(t) ? (t = new Date(t[0], t[1], t[2]), b.isDate(t) ? t : this.create().obj) : b.isInteger(t) || b.isDate(t) ? this.normalize(new Date(t), n) : this.now(e, t, n), {
             year: i || t.getFullYear(),
             month: i || t.getMonth(),
             date: i || t.getDate(),
             day: i || t.getDay(),
             obj: i || t,
             pick: i || t.getTime()
         }
     }, n.prototype.createRange = function(e, t) {
         var n = this,
             i = function(e) {
                 return !0 === e || p.isArray(e) || b.isDate(e) ? n.create(e) : e
             };
         return b.isInteger(e) || (e = i(e)), b.isInteger(t) || (t = i(t)), b.isInteger(e) && p.isPlainObject(t) ? e = [t.year, t.month, t.date + e] : b.isInteger(t) && p.isPlainObject(e) && (t = [e.year, e.month, e.date + t]), {
             from: i(e),
             to: i(t)
         }
     }, n.prototype.withinRange = function(e, t) {
         return e = this.createRange(e.from, e.to), t.pick >= e.from.pick && t.pick <= e.to.pick
     }, n.prototype.overlapRanges = function(e, t) {
         var n = this;
         return e = n.createRange(e.from, e.to), t = n.createRange(t.from, t.to), n.withinRange(e, t.from) || n.withinRange(e, t.to) || n.withinRange(t, e.from) || n.withinRange(t, e.to)
     }, n.prototype.now = function(e, t, n) {
         return t = new Date, n && n.rel && t.setDate(t.getDate() + n.rel), this.normalize(t, n)
     }, n.prototype.navigate = function(e, t, n) {
         var i, o, r, a, s = p.isArray(t),
             l = p.isPlainObject(t),
             c = this.item.view;
         if (s || l) {
             for (a = l ? (o = t.year, r = t.month, t.date) : (o = +t[0], r = +t[1], +t[2]), n && n.nav && c && c.month !== r && (o = c.year, r = c.month), o = (i = new Date(o, r + (n && n.nav ? n.nav : 0), 1)).getFullYear(), r = i.getMonth(); new Date(o, r, a).getMonth() !== r;) a -= 1;
             t = [o, r, a]
         }
         return t
     }, n.prototype.normalize = function(e) {
         return e.setHours(0, 0, 0, 0), e
     }, n.prototype.measure = function(e, t) {
         return t ? "string" == typeof t ? t = this.parse(e, t) : b.isInteger(t) && (t = this.now(e, t, {
             rel: t
         })) : t = "min" == e ? -1 / 0 : 1 / 0, t
     }, n.prototype.viewset = function(e, t) {
         return this.create([t.year, t.month, 1])
     }, n.prototype.validate = function(e, n, t) {
         var i, o, r, a, s = this,
             l = n,
             c = t && t.interval ? t.interval : 1,
             d = -1 === s.item.enable,
             u = s.item.min,
             f = s.item.max,
             m = d && s.item.disable.filter(function(e) {
                 if (p.isArray(e)) {
                     var t = s.create(e).pick;
                     t < n.pick ? i = !0 : t > n.pick && (o = !0)
                 }
                 return b.isInteger(e)
             }).length;
         if ((!t || !t.nav && !t.defaultValue) && (!d && s.disabled(n) || d && s.disabled(n) && (m || i || o) || !d && (n.pick <= u.pick || n.pick >= f.pick)))
             for (d && !m && (!o && 0 < c || !i && c < 0) && (c *= -1); s.disabled(n) && (1 < Math.abs(c) && (n.month < l.month || n.month > l.month) && (n = l, c = 0 < c ? 1 : -1), n.pick <= u.pick ? (r = !0, c = 1, n = s.create([u.year, u.month, u.date + (n.pick === u.pick ? 0 : -1)])) : n.pick >= f.pick && (a = !0, c = -1, n = s.create([f.year, f.month, f.date + (n.pick === f.pick ? 0 : 1)])), !r || !a);) n = s.create([n.year, n.month, n.date + c]);
         return n
     }, n.prototype.disabled = function(t) {
         var n = this,
             e = n.item.disable.filter(function(e) {
                 return b.isInteger(e) ? t.day === (n.settings.firstDay ? e : e - 1) % 7 : p.isArray(e) || b.isDate(e) ? t.pick === n.create(e).pick : p.isPlainObject(e) ? n.withinRange(e, t) : void 0
             });
         return e = e.length && !e.filter(function(e) {
             return p.isArray(e) && "inverted" == e[3] || p.isPlainObject(e) && e.inverted
         }).length, -1 === n.item.enable ? !e : e || t.pick < n.item.min.pick || t.pick > n.item.max.pick
     }, n.prototype.parse = function(e, i, t) {
         var o = this,
             r = {};
         return i && "string" == typeof i ? (t && t.format || ((t = t || {}).format = o.settings.format), o.formats.toArray(t.format).map(function(e) {
             var t = o.formats[e],
                 n = t ? b.trigger(t, o, [i, r]) : e.replace(/^!/, "").length;
             t && (r[e] = i.substr(0, n)), i = i.substr(n)
         }), [r.yyyy || r.yy, +(r.mm || r.m) - 1, r.dd || r.d]) : i
     }, n.prototype.formats = function() {
         function i(e, t, n) {
             var i = e.match(/[^\x00-\x7F]+|\w+/)[0];
             return n.mm || n.m || (n.m = t.indexOf(i) + 1), i.length
         }

         function n(e) {
             return e.match(/\w+/)[0].length
         }
         return {
             d: function(e, t) {
                 return e ? b.digits(e) : t.date
             },
             dd: function(e, t) {
                 return e ? 2 : b.lead(t.date)
             },
             ddd: function(e, t) {
                 return e ? n(e) : this.settings.weekdaysShort[t.day]
             },
             dddd: function(e, t) {
                 return e ? n(e) : this.settings.weekdaysFull[t.day]
             },
             m: function(e, t) {
                 return e ? b.digits(e) : t.month + 1
             },
             mm: function(e, t) {
                 return e ? 2 : b.lead(t.month + 1)
             },
             mmm: function(e, t) {
                 var n = this.settings.monthsShort;
                 return e ? i(e, n, t) : n[t.month]
             },
             mmmm: function(e, t) {
                 var n = this.settings.monthsFull;
                 return e ? i(e, n, t) : n[t.month]
             },
             yy: function(e, t) {
                 return e ? 2 : ("" + t.year).slice(2)
             },
             yyyy: function(e, t) {
                 return e ? 4 : t.year
             },
             toArray: function(e) {
                 return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
             },
             toString: function(e, t) {
                 var n = this;
                 return n.formats.toArray(e).map(function(e) {
                     return b.trigger(n.formats[e], n, [0, t]) || e.replace(/^!/, "")
                 }).join("")
             }
         }
     }(), n.prototype.isDateExact = function(e, t) {
         return b.isInteger(e) && b.isInteger(t) || "boolean" == typeof e && "boolean" == typeof t ? e === t : (b.isDate(e) || p.isArray(e)) && (b.isDate(t) || p.isArray(t)) ? this.create(e).pick === this.create(t).pick : !(!p.isPlainObject(e) || !p.isPlainObject(t)) && (this.isDateExact(e.from, t.from) && this.isDateExact(e.to, t.to))
     }, n.prototype.isDateOverlap = function(e, t) {
         var n = this.settings.firstDay ? 1 : 0;
         return b.isInteger(e) && (b.isDate(t) || p.isArray(t)) ? (e = e % 7 + n) === this.create(t).day + 1 : b.isInteger(t) && (b.isDate(e) || p.isArray(e)) ? (t = t % 7 + n) === this.create(e).day + 1 : !(!p.isPlainObject(e) || !p.isPlainObject(t)) && this.overlapRanges(e, t)
     }, n.prototype.flipEnable = function(e) {
         var t = this.item;
         t.enable = e || (-1 == t.enable ? 1 : -1)
     }, n.prototype.deactivate = function(e, t) {
         var i = this,
             o = i.item.disable.slice(0);
         return "flip" == t ? i.flipEnable() : !1 === t ? (i.flipEnable(1), o = []) : !0 === t ? (i.flipEnable(-1), o = []) : t.map(function(e) {
             for (var t, n = 0; n < o.length; n += 1)
                 if (i.isDateExact(e, o[n])) {
                     t = !0;
                     break
                 } t || (b.isInteger(e) || b.isDate(e) || p.isArray(e) || p.isPlainObject(e) && e.from && e.to) && o.push(e)
         }), o
     }, n.prototype.activate = function(e, t) {
         var r = this,
             a = r.item.disable,
             s = a.length;
         return "flip" == t ? r.flipEnable() : !0 === t ? (r.flipEnable(1), a = []) : !1 === t ? (r.flipEnable(-1), a = []) : t.map(function(e) {
             var t, n, i, o;
             for (i = 0; i < s; i += 1) {
                 if (n = a[i], r.isDateExact(n, e)) {
                     t = a[i] = null, o = !0;
                     break
                 }
                 if (r.isDateOverlap(n, e)) {
                     p.isPlainObject(e) ? (e.inverted = !0, t = e) : p.isArray(e) ? (t = e)[3] || t.push("inverted") : b.isDate(e) && (t = [e.getFullYear(), e.getMonth(), e.getDate(), "inverted"]);
                     break
                 }
             }
             if (t)
                 for (i = 0; i < s; i += 1)
                     if (r.isDateExact(a[i], e)) {
                         a[i] = null;
                         break
                     } if (o)
                 for (i = 0; i < s; i += 1)
                     if (r.isDateOverlap(a[i], e)) {
                         a[i] = null;
                         break
                     } t && a.push(t)
         }), a.filter(function(e) {
             return null != e
         })
     }, n.prototype.nodes = function(l) {
         var t, n, c = this,
             d = c.settings,
             e = c.item,
             a = e.now,
             s = e.select,
             u = e.highlight,
             f = e.view,
             m = e.disable,
             p = e.min,
             h = e.max,
             i = (t = (d.showWeekdaysFull ? d.weekdaysFull : d.weekdaysShort).slice(0), n = d.weekdaysFull.slice(0), d.firstDay && (t.push(t.shift()), n.push(n.shift())), b.node("thead", b.node("tr", b.group({
                 min: 0,
                 max: 6,
                 i: 1,
                 node: "th",
                 item: function(e) {
                     return [t[e], d.klass.weekdays, 'scope=col title="' + n[e] + '"']
                 }
             })))),
             o = function(e) {
                 return b.node("div", " ", d.klass["nav" + (e ? "Next" : "Prev")] + (e && f.year >= h.year && f.month >= h.month || !e && f.year <= p.year && f.month <= p.month ? " " + d.klass.navDisabled : ""), "data-nav=" + (e || -1) + " " + b.ariaAttr({
                     role: "button",
                     controls: c.$node[0].id + "_table"
                 }) + ' title="' + (e ? d.labelMonthNext : d.labelMonthPrev) + '"')
             },
             r = function() {
                 var t = d.showMonthsShort ? d.monthsShort : d.monthsFull;
                 return d.selectMonths ? b.node("select", b.group({
                     min: 0,
                     max: 11,
                     i: 1,
                     node: "option",
                     item: function(e) {
                         return [t[e], 0, "value=" + e + (f.month == e ? " selected" : "") + (f.year == p.year && e < p.month || f.year == h.year && e > h.month ? " disabled" : "")]
                     }
                 }), d.klass.selectMonth, (l ? "" : "disabled") + " " + b.ariaAttr({
                     controls: c.$node[0].id + "_table"
                 }) + ' title="' + d.labelMonthSelect + '"') : b.node("div", t[f.month], d.klass.month)
             },
             g = function() {
                 var t = f.year,
                     e = !0 === d.selectYears ? 5 : ~~(d.selectYears / 2);
                 if (e) {
                     var n = p.year,
                         i = h.year,
                         o = t - e,
                         r = t + e;
                     if (o < n && (r += n - o, o = n), i < r) {
                         var a = o - n,
                             s = r - i;
                         o -= s < a ? s : a, r = i
                     }
                     return b.node("select", b.group({
                         min: o,
                         max: r,
                         i: 1,
                         node: "option",
                         item: function(e) {
                             return [e, 0, "value=" + e + (t == e ? " selected" : "")]
                         }
                     }), d.klass.selectYear, (l ? "" : "disabled") + " " + b.ariaAttr({
                         controls: c.$node[0].id + "_table"
                     }) + ' title="' + d.labelYearSelect + '"')
                 }
                 return b.node("div", t, d.klass.year)
             };
         return b.node("div", (d.selectYears ? g() + r() : r() + g()) + o() + o(1), d.klass.header) + b.node("table", i + b.node("tbody", b.group({
             min: 0,
             max: 5,
             i: 1,
             node: "tr",
             item: function(e) {
                 var t = d.firstDay && 0 === c.create([f.year, f.month, 1]).day ? -7 : 0;
                 return [b.group({
                     min: 7 * e - f.day + t + 1,
                     max: function() {
                         return this.min + 7 - 1
                     },
                     i: 1,
                     node: "td",
                     item: function(e) {
                         e = c.create([f.year, f.month, e + (d.firstDay ? 1 : 0)]);
                         var t, n = s && s.pick == e.pick,
                             i = u && u.pick == e.pick,
                             o = m && c.disabled(e) || e.pick < p.pick || e.pick > h.pick,
                             r = b.trigger(c.formats.toString, c, [d.format, e]);
                         return [b.node("div", e.date, (t = [d.klass.day], t.push(f.month == e.month ? d.klass.infocus : d.klass.outfocus), a.pick == e.pick && t.push(d.klass.now), n && t.push(d.klass.selected), i && t.push(d.klass.highlighted), o && t.push(d.klass.disabled), t.join(" ")), "data-pick=" + e.pick + " " + b.ariaAttr({
                             role: "gridcell",
                             label: r,
                             selected: !(!n || c.$node.val() !== r) || null,
                             activedescendant: !!i || null,
                             disabled: !!o || null
                         })), "", b.ariaAttr({
                             role: "presentation"
                         })]
                     }
                 })]
             }
         })), d.klass.table, 'id="' + c.$node[0].id + '_table" ' + b.ariaAttr({
             role: "grid",
             controls: c.$node[0].id,
             readonly: !0
         })) + b.node("div", b.node("button", d.today, d.klass.buttonToday, "type=button data-pick=" + a.pick + (l && !c.disabled(a) ? "" : " disabled") + " " + b.ariaAttr({
             controls: c.$node[0].id
         })) + b.node("button", d.clear, d.klass.buttonClear, "type=button data-clear=1" + (l ? "" : " disabled") + " " + b.ariaAttr({
             controls: c.$node[0].id
         })) + b.node("button", d.close, d.klass.buttonClose, "type=button data-close=true " + (l ? "" : " disabled") + " " + b.ariaAttr({
             controls: c.$node[0].id
         })), d.klass.footer)
     }, n.defaults = {
         labelMonthNext: "Next month",
         labelMonthPrev: "Previous month",
         labelMonthSelect: "Select a month",
         labelYearSelect: "Select a year",
         monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
         monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
         weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
         weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
         today: "Today",
         clear: "Clear",
         close: "Close",
         closeOnSelect: !0,
         closeOnClear: !0,
         format: "d mmmm, yyyy",
         klass: {
             table: (t = e.klasses().picker + "__") + "table",
             header: t + "header",
             navPrev: t + "nav--prev",
             navNext: t + "nav--next",
             navDisabled: t + "nav--disabled",
             month: t + "month",
             year: t + "year",
             selectMonth: t + "select--month",
             selectYear: t + "select--year",
             weekdays: t + "weekday",
             day: t + "day",
             disabled: t + "day--disabled",
             selected: t + "day--selected",
             highlighted: t + "day--highlighted",
             now: t + "day--today",
             infocus: t + "day--infocus",
             outfocus: t + "day--outfocus",
             footer: t + "footer",
             buttonClear: t + "button--clear",
             buttonToday: t + "button--today",
             buttonClose: t + "button--close"
         }
     }, e.extend("pickadate", n)
 }),
 function(l, c) {
     c.namespace(c, "common.widget.datepicker").init = function(e, t) {
         var n, i = l(e),
             o = i.clone(!0),
             r = {},
             a = {
                 closeOnClear: !0,
                 closeOnSelect: !0,
                 enabletranslations: !0,
                 firstDay: 0,
                 format: "yyyy/mm/dd",
                 includeicon: !0,
                 klass: {
                     buttonClear: "ibm-btn-pri ibm-btn-blue-50 ibm-btn-small",
                     buttonClose: "ibm-btn-pri ibm-btn-blue-50 ibm-btn-small ibm-fright",
                     buttonToday: "ibm-btn-pri ibm-btn-blue-50 ibm-btn-small ibm-fleft",
                     navPrev: "picker__nav--prev ibm-chevron-left-bold-link ibm-textcolor-gray-50",
                     navNext: "picker__nav--next ibm-chevron-right-bold-link ibm-textcolor-gray-50",
                     navDisabled: "picker__nav--disabled ibm-hasicon ibm-textcolor-gray-20"
                 },
                 localeToUse: c.common.util.meta.getPageCc() + c.common.util.meta.getPageLc(),
                 onClose: function() {
                     this.$holder.blur()
                 },
                 selectMonths: !0,
                 selectYears: !0
             };

         function s() {
             n = i.pickadate(r).pickadate("picker"), i.data("widget", n), i.data("widget").destroy = function() {
                 return i.data("widget").stop(), i.data("widget").$icon.remove(), i.replaceWith(o), o
             }, n.$root.find("select").attr("data-init", !1), r.includeicon && (i.data("widget").$icon = l('<a class="ibm-calendar-link" href="#" tabindex="-1">&nbsp;</a>').insertAfter(i).on("click", function(e) {
                 e.preventDefault(), e.stopPropagation(), n.open()
             })), c.common.widget.manager.dispatchInitEvent(i[0])
         }
         r = l.extend({}, a, i.data() || {}, t), "es" === c.common.util.meta.getPageLc() && (r.localeToUse = "eses"), r.enabletranslations ? l.ajax({
             url: c.common.util.config.get("datepickerDataUrl") + r.localeToUse + ".js",
             dataType: "script",
             cache: !0
         }).always(function() {
             s()
         }) : s()
     }
 }(jQuery, IBMCore);