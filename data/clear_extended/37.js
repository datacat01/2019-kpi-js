function load_typekit() {
    "undefined" == typeof Typekit && (TypekitConfig = {
        kitId: "dzi2tiv"
    }, function() {
        var t = document.createElement("script");
        t.src = "//use.typekit.com/" + TypekitConfig.kitId + ".js", t.type = "text/javascript", t.async = "true", t.onload = t.onreadystatechange = function() {
            var t = this.readyState;
            if (!t || "complete" == t || "loaded" == t) try {
                Typekit.load(TypekitConfig)
            } catch (e) {}
        };
        var e = document.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(t, e)
    }())
}

function select_field(t) {
    if (t.createTextRange) {
        var e = t.createTextRange();
        e.moveStart("character", 0), e.moveEnd("character", t.value.length), e.select()
    } else t.setSelectionRange && t.setSelectionRange(0, t.value.length)
}

function get_cookie(t) {
    var e, i, o = document.cookie,
        s = o.split(";"),
        n = s.length;
    for (i = 0; i < n; i += 1)
        if ((e = s[i].replace(/^\s+|\s+$/g, "").split("="))[0] == t) return {
            name: e[0],
            value: e[1]
        };
    return !1
}

function set_cookie(t, e, i, o) {
    o = o || {};
    var s = new Date,
        n = "undefined" != typeof o.path ? o.path : "/",
        r = "undefined" != typeof o.is_secure,
        a = "undefined" != typeof o.domain ? o.domain : "";
    s.setDate(s.getDate() + i), document.cookie = t + "=" + escape(e) + (null == i ? "" : ";expires=" + s.toGMTString()) + ";path=" + n + (r === !1 ? "" : ";secure") + ("" === a ? "" : ";domain=" + a)
}

function unset_cookie(t) {
    set_cookie(t, "", -1)
}

function toggle_video_embed(t) {
    var e = jQuery;
    e("#watch_video_" + t).is(":visible") ? (e("#video_embed_" + t).html(""), e("#video_toggle_" + t).show(), e("#watch_video_" + t).hide(), Tumblr.Events.trigger("Capture:push", "embed_interaction", "hide"), "undefined" != typeof _gaq && _gaq && _gaq.push(["_trackEvent", "dashboard_video", "hide", "normal"])) : (e("#video_embed_" + t).html(e("#video_code_" + t).val()), e("#video_toggle_" + t).hide(), e("#watch_video_" + t).show(), Tumblr.Events.trigger("Capture:push", "embed_interaction", "click"), "undefined" != typeof _gaq && _gaq && _gaq.push(["_trackEvent", "dashboard_video", "click", "normal"]))
}

function flashVersion() {
    return Tumblr.flashVersion()
}

function replaceIfFlash(t, e, i) {
    Tumblr.replaceIfFlash(t, e, i)
} /*! scripts/application.js */
var video_thumbnail_hover = !1,
    trackable_follow = function(t, e, i, o, s, n, r) {
        o = o || function() {}, s = s || function() {}, n = n || function() {}, r = r || function() {}, Tumblr.follow({
            tumblelog: i
        }, {
            init: o,
            success: s,
            error: n,
            complete: r
        })
    }; /*! scripts/tumblr/utils/prefixer.js */
Tumblr.Utils || (Tumblr.Utils = {}),
    function(t) {
        function e(t) {
            if (void 0 === s[t])
                if (o(t).test(i)) {
                    var e = RegExp.$1;
                    s[t] = {
                        js: e,
                        css: (e[0] + e.slice(1).replace(/[A-Z]/g, "-$&")).toLowerCase()
                    }
                } else s[t] = !1;
            return s[t]
        }
        var i = function() {
                var t = document.documentElement.style,
                    e = [];
                for (var i in t) "string" == typeof t[i] && e.push(i);
                return e.join(" ")
            }(),
            o = function(t) {
                return new RegExp("\\b((webkit|moz|ms|o|)" + t.toLowerCase() + ")\\b", "i")
            },
            s = {};
        e.style = function(t, i, o) {
            var s, n;
            o ? (s = {}, s[i] = o) : s = i, t.jquery && (t = t[0]);
            for (var r in s) n = s[r], t.style[e(r).js] = n;
            return t
        }, t.prefixer = e
    }(Tumblr.Utils), /*! scripts/tumblelog/styler.js */
    function(t) {
        function e(t, e, i) {
            if (Array.prototype.indexOf) return t.indexOf(e, i);
            for (var o = i || 0, s = t.length; o < s; o++)
                if (t[o] === e) return o;
            return -1
        }

        function i(t, i) {
            var o = [];
            if (!t) return o;
            for (var s in t) t.hasOwnProperty(s) && o.push(s);
            return i && i.length ? o.sort(function(t, o) {
                return e(i, t) - e(i, o)
            }) : o
        }

        function o() {
            var t = function() {
                return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
            };
            return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
        }
        var s = function(t) {
            return this instanceof s ? (t || (t = {}), "string" == typeof t && (t = {
                id: t
            }), this.el = s.create_stylesheet(t.id || o()), t.media_query && this.set_media_query(t.media_query), this.selectors = {}, this.selectors_order = [], this.animations = {}, t.styles && this.import_styles(t.styles), t.animations && this.import_animations(t.animations), this.attach(), s.register(this), this) : new s(t)
        };
        s.prototype = {
            add_px: function(t) {
                return "string" == typeof t && t.match(/\D/) ? t : t + "px"
            },
            add_px_value: function(t, e) {
                switch (t) {
                    case "top":
                    case "right":
                    case "bottom":
                    case "left":
                    case "width":
                    case "height":
                        return this.add_px(e);
                    default:
                        return e
                }
            },
            import_styles: function(t) {
                for (var e in t) this.set(e, t[e])
            },
            import_animations: function(t) {
                for (var e in t) this.set_animation(e, t[e])
            },
            set_media_query: function(t) {
                this.el.media = t || ""
            },
            set: function(t, e, i, o) {
                if ("undefined" == typeof this.selectors[t] && (this.selectors[t] = {
                        properties: {},
                        properties_order: []
                    }, this.selectors_order.push(t)), t = this.selectors[t], "object" == typeof e) {
                    var s = e;
                    o = i;
                    for (e in s) "undefined" == typeof t.properties[e] && t.properties_order.push(e), i = s[e], t.properties[e] = this.add_px_value(e, i)
                } else "undefined" == typeof t.properties[e] && t.properties_order.push(e), t.properties[e] = this.add_px_value(e, i);
                "undefined" == typeof o && (o = !0), o && this.update()
            },
            get: function(t, e) {
                return t = this.selectors[t], "undefined" != typeof t && (e ? (e = t.properties[e], "undefined" != typeof e && e) : t)
            },
            has: function(t, e) {
                return t = this.selectors[t], "undefined" != typeof t && (!e || (e = t[e], "undefined" != typeof e && ("undefined" != typeof e && "" !== e)))
            },
            set_selectors_order: function(t) {
                return this.selectors_order = i(this.selectors, t), this.update(), !0
            },
            set_properties_order: function(t, e) {
                if (!t) {
                    for (t in this.selectors) this.selectors.hasOwnProperty(t) && (t = this.selectors[t], t.properties_order = i(t.properties, e || s.default_properties_order));
                    return this.update(), !0
                }
                return !!(t = this.get(t)) && (t.properties_order = i(t.properties, e || s.default_properties_order), this.update(), !0)
            },
            set_animation: function(t, e, i, o, s) {
                if ("undefined" == typeof this.animations[t] && (this.animations[t] = {}), "object" == typeof e) {
                    var n = e;
                    for (e in n) this.set_animation(t, e, n[e], !1);
                    return s = i, "undefined" == typeof s && (s = !0), void(s && this.update())
                }
                var r = this.animations[t];
                if ("undefined" == typeof r[e] && (r[e] = {}), e = r[e], "object" == typeof i) {
                    var a = i;
                    s = o;
                    for (i in a) o = a[i], e[i] = this.add_px_value(i, o)
                } else e[i] = this.add_px_value(i, o);
                "undefined" == typeof s && (s = !0), s && this.update()
            },
            get_animation: function(t, e, i) {
                return t = this.animations[t], "undefined" != typeof t && (e ? (e = t[e], "undefined" != typeof e && (i ? (i = e[i], "undefined" != typeof e && e) : e)) : t)
            },
            attach: function() {
                var t = document.getElementsByTagName("head")[0];
                return !!t && (this.update(), t.appendChild(this.el), !0)
            },
            detach: function() {
                var t = document.getElementsByTagName("head")[0];
                return !!t && (this.el.parentNode === t && (this.el.parentNode.removeChild(this.el), !0))
            },
            update: function() {
                var t = this.css_text();
                if (this.el.styleSheet) this.el.styleSheet.cssText = "\n" + t;
                else {
                    for (; this.el.hasChildNodes();) this.el.removeChild(this.el.lastChild);
                    this.el.appendChild(document.createTextNode("\n" + t))
                }
            },
            selectors_to_text: function(t, e) {
                e || (e = i(t));
                for (var o, s = "", n = 0; n < e.length; n++) o = e[n], t.hasOwnProperty(o) && t[o] && (s += o + " {\n", s += this.properties_to_text(t[o].properties, t[o].properties_order), s += "}\n");
                return s
            },
            properties_to_text: function(t, e, o) {
                e || (e = i(t));
                for (var s, n = "", r = 0; r < e.length; r++) s = e[r], t.hasOwnProperty(s) && "" !== t[s] && (n += s + ": " + t[s] + ";\n");
                return n
            },
            animations_to_text: function(t, e) {
                e || (e = i(t));
                var o = s.browser_prefixes.slice();
                o.push("");
                for (var n, r, a = "", l = 0; l < e.length; l++)
                    if (r = e[l], t.hasOwnProperty(r) && t[r])
                        for (var h = 0; h < o.length; h++) n = o[h], a += "@" + (n ? "-" + n + "-" : "") + "keyframes " + r + " {\n", a += this.keyframes_to_text(t[r], n), a += "}\n";
                return a
            },
            keyframes_to_text: function(t, e) {
                for (var o, s = i(t), n = "", r = 0; r < s.length; r++) o = s[r], t.hasOwnProperty(o) && t[o] && (n += o + " {\n", n += this.properties_to_text(t[o], !1, e), n += "}\n");
                return n
            },
            css_text: function() {
                var t = this.selectors_to_text(this.selectors, this.selectors_order).replace(/</g, "&lt;").replace(/>/g, "&gt;"),
                    e = this.animations_to_text(this.animations).replace(/</g, "&lt;").replace(/>/g, "&gt;");
                return t + e
            },
            toString: function() {
                return this.css_text()
            }
        }, s.instances = [], s.browser_prefixes = ["webkit", "moz", "ms", "o"], s.default_properties_order = ["font", "font-family", "font-size", "font-style", "font-variant", "font-weight", "@font-face", "font-size-adjust", "font-stretch", "padding", "padding-top", "padding-right", "padding-bottom", "padding-left", "margin", "margin-top", "margin-right", "margin-bottom", "margin-left", "border", "border-top", "border-top-color", "border-top-style", "border-top-width", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-bottom", "border-bottom-color", "border-bottom-style", "border-bottom-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-top-left-radius", "border-top-right-radius", "border-bottom-right-radius", "border-bottom-left-radius", "background", "background-color", "background-position", "background-size", "background-repeat", "background-origin", "background-clip", "background-attachment", "background-image", "overflow", "overflow-x", "overflow-y", "transition", "transition-property", "transition-duration", "transition-timing-function", "transition-delay", "transform", "transform-origin", "transform-style"], s.create_stylesheet = function(t) {
            var e = document.createElement("style");
            return e.type = "text/css", t && (e.id = t), e
        }, s.register = function(t) {
            this.instances.push(t)
        }, t.Styler = s
    }(this.Tumblr || (this.Tumblr = {})), /*! scripts/tumblelog/legacy_tumblelog_video.js */
    "Tumblr" in window || (window.Tumblr = {}), Tumblr.flashVersion = function() {
        if (navigator.plugins && navigator.plugins.length > 0) {
            var t = navigator.mimeTypes;
            if (t && t["application/x-shockwave-flash"] && t["application/x-shockwave-flash"].enabledPlugin && t["application/x-shockwave-flash"].enabledPlugin.description) return parseInt(t["application/x-shockwave-flash"].enabledPlugin.description.split(" ")[2].split(".")[0], 10)
        } else if (navigator.appVersion.indexOf("Mac") === -1 && window.execScript) {
            try {
                var e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),
                    i = e.GetVariable("$version");
                return i.split(",")[0].split(" ")[1]
            } catch (o) {}
            return 0
        }
    }, Tumblr.replaceIfFlash = function(t, e, i) {
        Tumblr.flashVersion() >= t && (document.getElementById(e).innerHTML = i)
    }, /*! scripts/tumblelog/utilities.js */
    "Tumblr" in window || (window.Tumblr = {}), Tumblr.hasClass = function(t, e) {
        return new RegExp("(\\s|^)" + e + "(\\s|$)").test(t.className)
    }, Tumblr.addClass = function(t, e) {
        Tumblr.hasClass(t, e) || (t.className += " " + e)
    }, Tumblr.removeClass = function(t, e) {
        if (Tumblr.hasClass(t, e)) {
            var i = new RegExp("(\\s|^)" + e + "(\\s|$)");
            t.className = t.className.replace(i, " ")
        }
    }, Tumblr.toggleClass = function(t, e) {
        Tumblr.hasClass(t, e) ? Tumblr.removeClass(t, e) : Tumblr.addClass(t, e)
    }, /*! scripts/tumblelog/lightbox.js */
    "Tumblr" in window || (window.Tumblr = {}), Tumblr.windowDimensions = function() {
        return void 0 !== window.innerWidth ? {
            width: window.innerWidth,
            height: window.innerHeight
        } : document.documentElement ? {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        } : {
            width: document.body.clientWidth,
            height: document.body.clientHeight
        }
    }, Tumblr.Lightbox = function() {
        function t() {
            return void 0 !== window.innerWidth ? {
                width: window.innerWidth,
                height: window.innerHeight
            } : document.documentElement ? {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            } : {
                width: document.body.clientWidth,
                height: document.body.clientHeight
            }
        }

        function e(t, e) {
            if (!document.getElementById("tumblr_lightbox")) {
                if (e || (e = 1), c = t, navigator && navigator.userAgent.indexOf("Firefox") != -1) {
                    var s = document.createElement("input");
                    s.setAttribute("id", "Tumblr_Lightbox_focus_input"), s.setAttribute("type", "text"), s.style.position = "fixed", s.style.top = 0, s.style.left = 0, document.body.appendChild(s), s.focus(), document.body.removeChild(s)
                } else window.focus();
                a || (window.onkeydown && (l = window.onkeydown), window.onkeydown = function(t) {
                    if (document.getElementById("tumblr_lightbox")) {
                        t || (t = window.event);
                        var e = t.charCode ? t.charCode : t.keyCode;
                        if (t.shiftKey || t.ctrlKey || t.altKey || t.metaKey) {
                            if ((t.ctrlKey || t.metaKey) && 87 == e) return i(), !1
                        } else 37 == e ? _ > 1 && o(_ - 1) : 39 == e ? _ < c.length && o(_ + 1) : 27 != e && 32 != e && 74 != e && 75 != e || i()
                    }
                    l && l()
                }, window.onresize && (h = window.onresize), window.onresize = function() {
                    document.getElementById("vignette") && (document.getElementById("vignette").style.display = "none", p && clearTimeout(p), p = setTimeout(function() {
                        document.getElementById("vignette").style.display = "inline-block"
                    }, 100)), n(), h && h()
                }, navigator && navigator.userAgent.search("iPad") != -1 && document.addEventListener("touchmove", function() {
                    i()
                }, !1), a = !0), document.body.style.overflow = "hidden";
                var r = document.createElement("div");
                if (r.setAttribute("id", "tumblr_lightbox"), navigator && navigator.userAgent.search("iPad") != -1 ? (r.style.position = "absolute", r.style.top = document.body.scrollTop + "px", r.style.height = window.innerHeight + "px") : (r.style.position = "fixed", r.style.top = "0px", r.style.bottom = "0px"), r.style.left = "0px", r.style.right = "0px", r.style.zIndex = 4294967294, r.style.overflow = "hidden", r.style.backgroundColor = navigator && navigator.userAgent.indexOf("MSIE") != -1 ? "#222" : "rgba(17,17,17,0.92)", r.onclick = function() {
                        d ? d = !1 : i()
                    }, !(navigator && navigator.userAgent.search("iPad") != -1 || navigator && navigator.userAgent.search("MSIE") != -1)) {
                    var u = document.createElement("img");
                    u.setAttribute("id", "vignette"), u.setAttribute("src", "//assets.tumblr.com/images/full_page_vignette.png"), u.style.position = "absolute", u.style.width = "100%", u.style.height = "100%", u.style.left = "0px", u.style.top = "0px", r.appendChild(u);
                    var g = document.createElement("div");
                    g.style.position = "absolute", g.style.width = "100%", g.style.height = "100%", g.style.left = "0px", g.style.top = "0px", r.appendChild(g)
                }
                var m = document.createElement("div");
                m.style.position = "absolute", m.style.left = "50%", m.style.top = "50%", document.getElementById("tumblr_form_key") || (m.style.width = "100%"), r.appendChild(m);
                for (var f = ["left", "center", "right"]; stage_name = f.pop();) {
                    var v = document.createElement("a");
                    v.setAttribute("id", "tumblr_lightbox_" + stage_name + "_link"), v.setAttribute("href", "#"), c.length < 2 && (v.style.cursor = "default"), m.appendChild(v);
                    var b = document.createElement("img");
                    b.setAttribute("id", "tumblr_lightbox_" + stage_name + "_image"), b.setAttribute("src", "//assets.tumblr.com/images/x.gif"), b.style.mozBorderRadius = "3px", b.style.webkitBorderRadius = "3px", b.style.borderRadius = "3px", navigator && navigator.userAgent.indexOf("Chrome") != -1 && (b.style.moxBoxShadow = "0 4px 30px rgba(0,0,0,1)", b.style.webkitBoxShadow = "0 4px 30px rgba(0,0,0,1)", b.style.boxShadow = "0 4px 30px rgba(0,0,0,1)"), b.style.borderWidth = "0px", b.style.position = "absolute", "center" == stage_name && (b.style.zIndex = 4294967295), v.appendChild(b)
                }
                var k = document.createElement("div");
                k.setAttribute("id", "tumblr_lightbox_caption"), k.style.position = "absolute", k.style.textAlign = "center", k.style.font = "bold 17px 'HelveticaNeue','Helvetica','Arial',sans-serif", k.style.color = "#fff", k.style.paddingTop = "20px", k.style.textShadow = "0 4px 30px rgba(0,0,0,1)", k.style.display = "inline-block", k.style.textRendering = "optimizeLegibility", m.appendChild(k), document.body.appendChild(r), o(e), n()
            }
        }

        function i() {
            document.body.style.overflow = "", document.getElementById("tumblr_lightbox").style.display = "none", document.body.removeChild(document.getElementById("tumblr_lightbox")), Tumblr && Tumblr.Events && Tumblr.Events.trigger("tumblr_lightbox:form:hide")
        }

        function o(t) {
            if (_ = t, u = Math.round(1e12 * Math.random()), document.getElementById("tumblr_lightbox_left_link").onclick = function() {
                    return d = !0, o(t - 1), !1
                }, 1 == c.length ? document.getElementById("tumblr_lightbox_center_link").onclick = function() {
                    return !1
                } : t < c.length ? document.getElementById("tumblr_lightbox_center_link").onclick = function() {
                    return d = !0, o(t + 1), !1
                } : document.getElementById("tumblr_lightbox_center_link").onclick = function() {
                    return d = !0, o(1), !1
                }, document.getElementById("tumblr_lightbox_right_link").onclick = document.getElementById("tumblr_lightbox_center_link").onclick, g.left = !1, g.center = !1, g.right = !1, s("center", t - 1), t > 1 && s("left", t - 2), t < c.length && s("right", t), t + 1 < c.length) {
                var e = new Image;
                e.src = c[t + 1].low_res
            }
        }

        function s(t, e) {
            var i = new Image,
                o = !1;
            i.className = u, i.onload = function() {
                this.className == u && (this.className = "high-res", g[t] = this, n())
            }, i.src = c[e].high_res, i.complete || (o = new Image, o.className = u, o.onload = function() {
                this.className != u || g[t] && "placeholder" != g[t].className || (this.className = "low-res", g[t] = this, n())
            }, o.src = c[e].low_res, c[e].width && c[e].height && (o && (o.style.maxWidth = c[e].width + "px", o.style.maxHeight = c[e].height + "px"), i.style.maxWidth = c[e].width + "px", i.style.maxHeight = c[e].height + "px"), !o.complete && c[e].width && c[e].height && (g[t] = new Image(c[e].width, c[e].height), g[t].style.maxWidth = c[e].width + "px", g[t].style.maxHeight = c[e].height + "px", g[t].src = "//assets.tumblr.com/images/x.gif", g[t].className = "placeholder"))
        }

        function n() {
            for (var e = ["right", "left", "center"]; stage_name = e.pop();) {
                var i = document.getElementById("tumblr_lightbox_" + stage_name + "_image");
                if (i) {
                    var o = g[stage_name];
                    if (o) {
                        i.style.display = "inline-block";
                        var s = o.style.maxWidth ? parseInt(o.style.maxWidth, 10) : o.width,
                            n = o.style.maxHeight ? parseInt(o.style.maxHeight, 10) : o.height;
                        if (t().width / t().height < s / n) {
                            var r = 1 == c.length ? .85 : .75;
                            t().width * r > s && ("high-res" == o.className || o.style.maxWidth) ? (i.style.width = s + "px", i.style.height = n + "px") : (i.style.height = n * (t().width * r / s) + "px", i.style.width = t().width * r + "px")
                        } else .85 * t().height > n && ("high-res" == o.className || o.style.maxHeight) ? (i.style.width = s + "px", i.style.height = n + "px") : (i.style.width = s * (.85 * t().height / n) + "px", i.style.height = .85 * t().height + "px");
                        "center" == stage_name ? (i.style.left = 0 - parseInt(i.style.width, 10) / 2 + "px", i.style.top = 0 - parseInt(i.style.height, 10) / 2 + "px") : "right" == stage_name ? (i.style.left = .42 * t().width + "px", i.style.top = 0 - parseInt(i.style.height, 10) / 2 + "px") : (i.style.left = 0 - parseInt(i.style.width, 10) - .42 * t().width + "px", i.style.top = 0 - parseInt(i.style.height, 10) / 2 + "px"), i.src = o.src, i.style.backgroundColor = "placeholder" == o.className ? navigator && navigator.userAgent.indexOf("MSIE") != -1 ? "#444" : "rgba(255,255,255,0.05)" : "transparent", "center" == stage_name && c[_ - 1].caption ? (document.getElementById("tumblr_lightbox_caption").innerHTML = c[_ - 1].caption, document.getElementById("tumblr_lightbox_caption").style.width = .7 * t().width + "px", document.getElementById("tumblr_lightbox_caption").style.top = .5 * parseInt(i.style.height, 10) + "px", document.getElementById("tumblr_lightbox_caption").style.left = 0 - .35 * t().width + "px", document.getElementById("tumblr_lightbox_caption").style.display = "block") : "center" == stage_name && (document.getElementById("tumblr_lightbox_caption").style.display = "none")
                    } else i.style.display = "none"
                }
            }
        }

        function r() {
            return !!document.getElementById("tumblr_lightbox")
        }
        var a = !1,
            l = !1,
            h = !1,
            c = [],
            d = !1,
            _ = !1,
            u = !1,
            p = !1,
            g = {
                left: !1,
                center: !1,
                right: !1
            };
        return Tumblr.Events && Tumblr.Events.on("lightbox-open-request", e), {
            init: e,
            isOpen: r
        }
    }(), /*! scripts/tumblelog/iframe_preloader.js */
    Tumblr.IframePreloader = function(t) {
        for (var e in t)
            if ("object" == typeof e)
                for (var i in e) this.options[e][i] = e[i];
            else this.options[e] = t[e];
        this.__create()
    }, Tumblr.IframePreloader.prototype = {
        options: {
            iframe_src: "",
            iframe_before_onload: function() {},
            iframe_after_onload: function() {},
            iframe_class: "",
            iframe_styles: {
                zIndex: 8675309,
                position: "fixed",
                top: "0px",
                left: "0px",
                right: "0px",
                bottom: "0px",
                width: "100%",
                height: "100%",
                background: "transparent",
                border: "0px",
                overflow: "hidden"
            },
            preloader_class: "",
            preloader_innerHTML: '<div style="position:absolute; top:0; left:0; right:0; bottom:0; background:transparent center no-repeat url(\'/images/loading_big_fff_on_2e3133.gif?709\')"><img style="position:absolute; left:0; top:0; width:100%; height:100%; opacity:0.3;" src="//assets.tumblr.com/images/full_page_vignette.png?709"/></div>',
            preloader_styles: {
                zIndex: 8675310,
                position: "fixed",
                top: "0px",
                left: "0px",
                right: "0px",
                bottom: "0px",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                background: "rgba(17,17,17,0.92)"
            },
            close_class: "",
            close_innerHTML: "&times;",
            close_styles: {
                zIndex: 8675311,
                position: "fixed",
                top: "10px",
                right: "15px",
                cursor: "pointer",
                font: "bold 20px Helvetica, sans-serif"
            }
        },
        iframe_loaded: !1,
        __create: function() {
            this.id = Math.random().toString().split(".")[1], this.$container = document.createElement("div"), this.$preloader = document.createElement("div"), this.$preloader.id = "iframe_preloader-preloader-" + this.id, this.$preloader.className = this.options.preloader_class;
            for (var t in this.options.preloader_styles) this.$preloader.style[t] = this.options.preloader_styles[t];
            this.$preloader.innerHTML = this.options.preloader_innerHTML, this.$iframe = document.createElement("iframe"), this.$iframe.id = "iframe_preloader-iframe-" + this.id, this.$iframe.className = this.options.iframe_class;
            for (var e in this.options.iframe_styles) this.$iframe.style[e] = this.options.iframe_styles[e];
            this.$iframe.src = this.options.iframe_src, this.$iframe.scrolling = "no", this.$iframe.frameborder = "0", this.$close = document.createElement("div"), this.$close.id = "iframe_preloader-close-" + this.id, this.$close.className = this.options.close_class;
            for (var i in this.options.close_styles) this.$close.style[i] = this.options.close_styles[i];
            this.$close.innerHTML = this.options.close_innerHTML;
            var o = this;
            this.$close.onclick = function() {
                "undefined" != typeof pano_iframe_preloader && pano_iframe_preloader && pano_iframe_preloader.remove()
            }, this.$iframe.onload = function() {
                o.options.iframe_before_onload(), o.iframe_loaded = !0, o.show(), o.$close.style.display = "none", o.options.iframe_after_onload()
            }, this.hide_iframe(), this.lock_body(), this.$container.appendChild(this.$preloader), this.$container.appendChild(this.$iframe), this.$container.appendChild(this.$close), document.body.appendChild(this.$container)
        },
        hide: function() {
            this.hide_iframe(), this.hide_preloader(), this.unlock_body()
        },
        show: function() {
            this.iframe_loaded ? (this.show_iframe(), this.hide_preloader()) : (this.hide_iframe(), this.show_preloader()), this.lock_body()
        },
        remove: function() {
            this.hide(), document.body.removeChild(this.$container), delete this.$container, delete this.$preloader, delete this.$iframe
        },
        lock_body: function() {
            document.body.style.overflow = "hidden"
        },
        unlock_body: function() {
            document.body.style.overflow = ""
        },
        show_preloader: function() {
            this.window.focus(), this.$preloader.style.display = "block"
        },
        hide_preloader: function() {
            this.$preloader.style.display = "none"
        },
        show_iframe: function() {
            this.$iframe.contentWindow.focus(), this.$iframe.style.opacity = 1
        },
        hide_iframe: function() {
            this.$iframe.style.opacity = 0
        }
    };
var pano_iframe_preloader = !1;
Tumblr.PanoLightboxInit = function(t, e) {
        return !!(!t && window.event && (window.event.metaKey || window.event.altKey) || t && (t.metaKey || t.altKey)) || (pano_iframe_preloader = new Tumblr.IframePreloader({
            iframe_src: e
        }), !1)
    }, /*! scripts/tumblelog/like_button.js */
    "Tumblr" in window || (window.Tumblr = {}),
    function() {
        var t;
        window.JSON && window.JSON.stringify && window.JSON.parse ? t = window.JSON : _t && (t = _t.getCleanObject("JSON")), Tumblr.LikeButtonUpdate = function() {
            return {
                post_message_event: function(t, e) {
                    if ("tumblelog_like" === t[0] && t[1] && document.getElementById("like_button_" + t[1])) {
                        var i = document.getElementById("like_button_" + t[1]);
                        "liked" === t[2] ? Tumblr.addClass(i, "liked") : Tumblr.removeClass(i, "liked")
                    }
                }
            }
        }(), Tumblr.LikeButton = {
            loaded_iframes: {},
            like_statuses: {},
            get_status_by_page: function(e) {
                var i = document.getElementById("tumblr_controls");
                if (i) {
                    var o = "get_like_states;" + t.stringify({
                        page: e
                    });
                    i.contentWindow.postMessage(o, "*")
                }
            },
            get_status_by_post_ids: function(e) {
                var i = document.getElementById("tumblr_controls");
                if (i) {
                    var o = "get_like_states;" + t.stringify({
                        ids: e
                    });
                    i.contentWindow.postMessage(o, "*")
                }
            },
            post_message_event: function(e, i) {
                if ("like_state_update" === e[0]) {
                    var o = t.parse(e[1]);
                    if (o.length)
                        for (var s = 0, n = o.length; s < n; s++) Tumblr.LikeButton.queue_like_status(o[s]), Tumblr.LikeButton.update_like_state(o[s]);
                    else Tumblr.LikeButton.queue_like_status(o), Tumblr.LikeButton.update_like_state(o)
                }
            },
            logged_in_iframe_loaded: function(t, e) {
                if ("logged_in_iframe_loaded" === t[0]) {
                    var i = "",
                        o = "",
                        s = window.location.pathname,
                        n = [];
                    if (s.indexOf("page") !== -1 || s.indexOf("post") !== -1)
                        for (var r = s.split("/"), a = 0; a < r.length; a++) {
                            if ("page" === r[a] && r[a++]) {
                                i = r[a++];
                                break
                            }
                            if ("post" === r[a] && r[a++]) {
                                o = r[a++], n.push(o);
                                break
                            }
                        }
                    if (i) Tumblr.LikeButton.get_status_by_page("blog", i);
                    else {
                        for (var l = document.querySelectorAll(".like_button"), h = 0; h < l.length; h++) {
                            var c = l[h],
                                d = c.attributes["data-post-id"];
                            d && d.value != o && n.push(d.value)
                        }
                        n.length > 0 && Tumblr.LikeButton.get_status_by_post_ids(n)
                    }
                }
            },
            like_iframe_loaded: function(e, i) {
                if ("like_iframe_load" === e[0]) {
                    var o = t.parse(e[1]);
                    o.post_id && (Tumblr.LikeButton.loaded_iframes[o.post_id] = 1, Tumblr.LikeButton.check_like_status(o.post_id, !0))
                }
            },
            check_like_status: function(t, e) {
                var i = Tumblr.LikeButton.like_statuses[t];
                if (i) {
                    var o = {
                        post_id: t,
                        state: "liked" === i
                    };
                    Tumblr.LikeButton.update_like_state(o)
                }
            },
            queue_like_status: function(t) {
                t.post_id && (Tumblr.LikeButton.like_statuses[t.post_id] = t.state ? "liked" : "unliked")
            },
            update_like_state: function(e) {
                if (e.post_id) {
                    var i = document.getElementById("like_iframe_" + e.post_id);
                    i && i.contentWindow.postMessage("state_update;" + t.stringify(e), "https:" === location.protocol ? "https://assets.tumblr.com" : "http://assets.tumblr.com")
                }
            }
        }
    }.call(this), /*! scripts/tumblelog/post_message_form_resize.js */
    "Tumblr" in window || (window.Tumblr = {}), Tumblr.TumblelogFormResize = function() {
        return {
            post_message_event: function(t, e) {
                if ("resize_tumblelog_form_iframe" === t[0]) {
                    var i = t[1],
                        o = document.getElementById(i),
                        s = parseInt(t[2], 10);
                    i && (o.height = s)
                }
            }
        }
    }(); /*! scripts/tumblelog/post_message_photoset_resize.js */
var Tumblr = window.Tumblr || {};
Tumblr.PhotosetResize = function() {
        return {
            post_message_event: function(t, e) {
                if ("resize_photoset_iframe" === t[0]) {
                    var i = t[1],
                        o = parseInt(t[2], 10),
                        s = document.getElementById("photoset_iframe_" + i);
                    s && (s.height = o)
                }
            }
        }
    }(), /*! scripts/tumblelog/feature_analytics.js */
    "Tumblr" in window || (window.Tumblr = {}), Tumblr.AnalyticsFeatureSupport = function() {
        return {
            post_message_event: function(t, e) {
                if ("openInMobileAppSuccess" === t[0] && "function" == typeof open_in_mobile_app && t[1] && t[1].length) {
                    var i = parseInt(t[1], 10);
                    open_in_mobile_app(i)
                }
            }
        }
    }(), /*! scripts/tumblelog/feature_iframe.js */
    Tumblr.IframeFeatureSupport = function() {
        function t() {
            var t, e = document.querySelector('meta[name="color:Tumblr Controls"]');
            e && (t = e.getAttribute("content")), t || (t = "default"), i.contentWindow.postMessage("color_match;" + t, o)
        }

        function e(t, e) {
            var o;
            "string" == typeof t && t.match(/\d+%/) || (t = parseInt(t, 10) || 0), "string" == typeof e && e.match(/\d+%/) || (e = parseInt(e, 10) || 0), Tumblr.addClass(i, "visible"), t && (i.width = t, o = /%/.test(t) ? "" : "px", n.set("#tumblr_controls", "width", t + o)), e && (i.height = e, o = /%/.test(e) ? "" : "px", n.set("#tumblr_controls", "height", e + o))
        }
        var i, o, s, n = new Tumblr.Styler({
                id: "tumblr_iframe_css",
                styles: {
                    ".tumblr_controls": {
                        position: "absolute",
                        top: "0",
                        right: "0",
                        display: "block",
                        opacity: "1",
                        width: "1px",
                        height: "1px",
                        "z-index": "2147483647",
                        visibility: "hidden",
                        "pointer-events": "none"
                    },
                    ".tumblr_controls.visible": {
                        visibility: "visible",
                        "pointer-events": "all"
                    },
                    ".tumblr_controls.sticky": {
                        position: "fixed"
                    },
                    ".tumblr_controls.transition": {
                        "-webkit-transition": "top 0.1s ease",
                        "-moz-transition": "top 0.1s ease",
                        "-ms-transition": "top 0.1s ease",
                        "-o-transition": "top 0.1s ease",
                        transition: "top 0.1s ease"
                    },
                    "iframe#tumblr_controls.tumblr_controls.sticky.transition": {
                        "-webkit-animation": "tumblr_controls_fade_in 0.3s 0.2s linear 1 both",
                        "-moz-animation": "tumblr_controls_fade_in 0.3s 0.2s linear 1 both",
                        "-ms-animation": "tumblr_controls_fade_in 0.3s 0.2s linear 1 both",
                        "-o-animation": "tumblr_controls_fade_in 0.3s 0.2s linear 1 both",
                        animation: "tumblr_controls_fade_in 0.3s 0.2s linear 1 both",
                        top: "0 !important"
                    },
                    ".tumblr_controls.sticky.transition": {
                        "-webkit-animation": "tumblr_controls_fade_in 0.3s 0.2s linear 1 both",
                        "-moz-animation": "tumblr_controls_fade_in 0.3s 0.2s linear 1 both",
                        "-ms-animation": "tumblr_controls_fade_in 0.3s 0.2s linear 1 both",
                        "-o-animation": "tumblr_controls_fade_in 0.3s 0.2s linear 1 both",
                        animation: "tumblr_controls_fade_in 0.3s 0.2s linear 1 both",
                        top: "0 !important"
                    },
                    ".tumblr_controls.flash_fix": {
                        visibility: "hidden !important"
                    },
                    "body.mobile_bar": {
                        "-webkit-transition": "padding-top 0.1s ease",
                        "-moz-transition": "padding-top 0.1s ease",
                        "-ms-transition": "padding-top 0.1s ease",
                        "-o-transition": "padding-top 0.1s ease",
                        transition: "padding-top 0.1s ease",
                        "padding-top": "44px"
                    }
                },
                animations: {
                    tumblr_controls_fade_in: {
                        "0%": {
                            opacity: 0
                        },
                        "100%": {
                            opacity: 1
                        }
                    }
                }
            }),
            r = function() {
                function t() {
                    window.addEventListener ? window.addEventListener("scroll", i) : window.attachEvent && window.attachEvent("onscroll", i)
                }

                function e() {
                    window.removeEventListener ? window.removeEventListener("scroll", i) : window.detachEvent && window.detachEvent("onscroll", i)
                }

                function i(t) {
                    if (r) return void clearTimeout(l);
                    for (var e = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0, o = window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0, s = 0; s < n.length; s++) n[s].call(this, t, e, o);
                    a && t && (r = !0, setTimeout(function() {
                        r = !1, i()
                    }, a))
                }

                function o(e) {
                    n.push(e), t()
                }

                function s(t) {
                    for (var i = 0; i < n.length; i++) n[i] === t && n.splice(i--, 1);
                    n.length || e()
                }
                var n = [],
                    r = !1,
                    a = 200,
                    l = !1;
                return {
                    on: o,
                    off: s,
                    start: t,
                    stop: e
                }
            }();
        (function(t) {
            function e() {
                window.removeEventListener ? window.removeEventListener("DOMContentLoaded", e, !1) : window.detachEvent && window.detachEvent("onload", e), setTimeout(function() {
                    i()
                }, 200)
            }

            function i() {
                if (a = document.getElementById("tumblr_controls"), !a) return !1;
                var t = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight;
                l = a.offsetTop, h = a.clientHeight, c = t - (l + h), 0 === l || 0 === c ? s() : "fixed" !== window.getComputedStyle(a).position && (Tumblr.addClass(a, "transition"), r.on(o), o())
            }

            function o(t, e, i) {
                "undefined" == typeof e && (e = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0), "undefined" == typeof i && (i = window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0), e < l ? n() : e >= l + (h = a.clientHeight) && s()
            }

            function s() {
                Tumblr.addClass(a, "sticky")
            }

            function n() {
                Tumblr.removeClass(a, "sticky")
            }
            var a, l = 0,
                h = 0,
                c = 0;
            return window.addEventListener ? window.addEventListener("DOMContentLoaded", e, !1) : window.attachEvent && window.attachEvent("onload", e), {
                stick: s,
                unstick: n,
                check: o
            }
        })(n);
        return {
            post_message_event: function(n, r) {
                if (s = document.getElementById("mobile_iframe"), i = document.getElementById("tumblr_controls"), o = n[n.length - 1], s) "show_mobile_banner" === n[0] && ("1" === n[1] ? (Tumblr.MobileBanner.showBanner(), Tumblr.MobileBanner.mobile_origin = o) : Tumblr.MobileBanner.showHeaderBanner());
                else if (i && o) {
                    if ("color_match" === n[0] && t(), "location_change" === n[0] && (Tumblr.addClass(i, "flash_fix"), document.getElementById("tumblr_controls").onload = function() {
                            Tumblr.removeClass(i, "flash_fix")
                        }), "request_keywords" === n[0] && "undefined" != typeof tumblr_meta_keyboards && i.contentWindow.postMessage("keywords;" + tumblr_meta_keyboards, o), "teaser_iframe" === n[0]) {
                        if (n.length < 2 || !Tumblr.Teaser) return !1;
                        switch (n[1]) {
                            case "initialize":
                                return i.contentWindow.postMessage("teaser;enable", o), Tumblr.Teaser.initialize({
                                    slide_page: n.length > 2 && "slide" === n[2]
                                });
                            case "load":
                                return Tumblr.Teaser.load_once();
                            case "open":
                                return Tumblr.Teaser.open();
                            case "close":
                                return Tumblr.Teaser.close();
                            case "toggle":
                                return Tumblr.Teaser.toggle()
                        }
                    }
                    if ("tagged_teaser_iframe" === n[0]) {
                        if (n.length < 2 || !Tumblr.TaggedTeaser) return !1;
                        switch (n[1]) {
                            case "show":
                                return void Tumblr.TaggedTeaser.initialize({
                                    once: !0,
                                    open: !0
                                });
                            case "open":
                                return Tumblr.TaggedTeaser.open(n.length > 2 && n[2]);
                            case "close":
                                return Tumblr.TaggedTeaser.close();
                            case "toggle":
                                return Tumblr.TaggedTeaser.toggle()
                        }
                    }
                    if ("resize_iframe" === n[0] && (e(n[1], n[2]), n.length > 2)) switch (n[3]) {
                        case "body_class":
                            n.length > 3 && n[4] && Tumblr.addClass(document.body, n[4])
                    }
                }
            }
        }
    }(), /*! scripts/tumblelog/feature_video.js */
    Tumblr.VideoFeatureSupport = function() {
        function t() {
            if (document.getElementById("tumblr_video_iframe_fullscreen")) return !0;
            var t = document.createElement("style");
            t.id = "tumblr_video_iframe_fullscreen", t.innerHTML = ".tumblr_video_iframe.fullwindow { top: 0; bottom: 0; right: 0; left: 0; position: fixed; z-index: 8675309; height: 100%; width: 100%; }", document.body.appendChild(t)
        }

        function e(e) {
            t(), e ? n.iframe.className = "tumblr_video_iframe fullwindow" : n.iframe.className = "tumblr_video_iframe"
        }

        function i(t) {
            var e = document.getElementById("tumblr_controls");
            return t ? (s(), n.parent_post && (n.parent_post.className += " is_lightbox"), document.body.className += " is_lightbox", document.body.style.overflow = "hidden", n.iframe.style.position = "fixed", n.iframe.style.height = "100%", n.iframe.style.width = "100%", n.iframe.style.top = 0, n.iframe.style.right = 0, n.iframe.style.left = 0, n.iframe.style.bottom = 0, n.iframe.style.zIndex = 90210, void(e && (e.style.display = "none"))) : (n.parent_post && (n.parent_post.className = n.parent_post.className.replace(/\s+is_lightbox/g, "")), document.body.className = document.body.className.replace(/\s+is_lightbox/g, ""), document.body.style.overflow = "visible", n.iframe.style.position = "static", n.iframe.style.height = "100%", n.iframe.style.width = "100%", n.iframe.style.zIndex = 0, void(e && (e.style.display = "block")))
        }

        function o(t) {
            return t ? (n.parent_post && (n.parent_post.className += " is_fullscreen"), void(document.body.className += " is_fullscreen")) : (n.parent_post && (n.parent_post.className = n.parent_post.className.replace(/\s+is_fullscreen/g, "")), void(document.body.className = document.body.className.replace(/\s+is_fullscreen/g, "")))
        }

        function s() {
            if (!n.setup_controls[n.id]) {
                var t = document.querySelector("#post_" + n.id + " .tumblr_lightbox_controls .close_button");
                t && t.addEventListener("click", function(t) {
                    return n.iframe.contentWindow.postMessage("exit_lightbox", n.origin_url), !1
                });
                var e = document.querySelector("#post_" + n.id + " .tumblr_lightbox_controls .like_button");
                e && e.addEventListener("click", function(t) {
                    var e = this,
                        i = {
                            id: e.getAttribute("data-post-id"),
                            key: e.getAttribute("data-reblog_key") || e.getAttribute("data-reblog-key")
                        };
                    return Tumblr.hasClass(e, "already_like") ? Tumblr.unlike(i, {
                        success: function() {
                            Tumblr.removeClass(e, "already_like")
                        }
                    }) : Tumblr.like(i, {
                        success: function() {
                            Tumblr.addClass(e, "already_like")
                        }
                    }), !1
                }), n.setup_controls[n.id] = !0
            }
        }
        var n = {
            setup_controls: {}
        };
        return {
            post_message_event: function(t, s) {
                var r = t[2];
                n.iframe = document.getElementById("tumblr_video_iframe_" + r), n.iframe && (n.id = r, n.origin_url = n.iframe.getAttribute("data-origin"), n.parent_post = document.getElementById("post_" + r), "lightbox" === t[0] && i("true" === t[1]), "full_window" === t[0] && e("true" === t[1]), "full_screen" === t[0] && o("true" === t[1]))
            }
        }
    }(), /*! scripts/tumblelog/mobile_fullscreen_iframe.js */
    "Tumblr" in window || (window.Tumblr = {}), Tumblr.mobileFullscreenIframe = {
        og_store: function() {
            this.og_body_position = document.body.style.position, this.og_body_overflow = document.body.style.overflow, this.og_html_bg = this.html_el.style.backgroundColor, this.win_height = window.innerHeight + "px"
        },
        set_frame_height: function() {
            this.win_height = window.innerHeight + "px", this.win_width = window.innerWidth + "px", this.frame.style.height = this.win_height, this.frame.style.minWidth = this.win_width
        },
        enable: function(t) {
            this.frame = document.getElementById(t), this.frame && (this.html_el = document.getElementsByTagName("html")[0], this.og_store(), this.orientation_height_change = this.set_frame_height.bind(this), window.addEventListener("orientationchange", this.orientation_height_change, !1), window.addEventListener("resize", this.orientation_height_change, !1), this.frame.className += " is_lightbox", document.body.className += " is_lightbox", document.body.style.position = "relative", document.body.style.left = "-99999px", document.body.style.overflow = "hidden", this.html_el.style.backgroundColor = "#000000", this.frame.style.cssText = "position:fixed; overflow:hidden; width: 100%; top:0; left:0; right:0; bottom:0; z-index: 90210;", this.frame.style.height = this.win_height, document.getElementById("tumblr_controls") && (document.getElementById("tumblr_controls").style.display = "none"))
        },
        disable: function(t) {
            this.frame = this.frame || document.getElementById(t), this.frame && (this.frame.className = this.frame.className.replace(/\s+is_lightbox/, ""), document.body.className = document.body.className.replace(/\s+is_lightbox/, ""), document.body.style.overflow = this.og_body_overflow, document.body.style.position = this.og_body_position, this.html_el.style.backgroundColor = this.og_html_bg, this.frame.style.cssText = "", document.getElementById("tumblr_controls") && (document.getElementById("tumblr_controls").style.display = "block"), window.removeEventListener("orientationchange", this.orientation_height_change, !1), window.removeEventListener("resize", this.orientation_height_change, !1))
        }
    }, /*! scripts/tumblelog/post_message_listener.js */
    "Tumblr" in window || (window.Tumblr = {}), Tumblr.PostMessageListener = function() {
        return {
            initialize: function(t) {
                t = t || function() {};
                var e = window.addEventListener ? "addEventListener" : "attachEvent",
                    i = window[e],
                    o = "attachEvent" == e ? "onmessage" : "message";
                i(o, function(e) {
                    if ("string" == typeof e.data) {
                        var i = e.data.split(";");
                        t(i, e.origin)
                    }
                }, !1)
            }
        }
    }(), Tumblr.PostMessageListener.initialize(function(t, e) {
        Tumblr.VideoFeatureSupport.post_message_event(t, e), Tumblr.IframeFeatureSupport.post_message_event(t, e), Tumblr.AnalyticsFeatureSupport.post_message_event(t, e), Tumblr.TumblelogFormResize.post_message_event(t, e), Tumblr.PhotosetResize.post_message_event(t, e), Tumblr.LikeButtonUpdate.post_message_event(t, e), Tumblr.LikeButton.logged_in_iframe_loaded(t, e), Tumblr.LikeButton.post_message_event(t, e), Tumblr.LikeButton.like_iframe_loaded(t, e)
    }), /*! scripts/application/glass.js */
    function(t, e) {
        var i = new(Backbone.View.extend({
            id: "glass_overlay",
            events: {
                click: "click"
            },
            locked: !1,
            visible: !1,
            initialize: function() {},
            render: function() {
                t(document.body).prepend(this.$el), this.rendered = !0, Tumblr.Events.on("DOMEventor:escape", _.bind(this.keydown, this))
            },
            click: function() {
                this.locked || this.hide()
            },
            keydown: function(t) {
                this.locked || this.visible && this.hide()
            },
            show: function(t, e) {
                _.isObject(Tumblr.KeyCommands) && !Tumblr.KeyCommands.suspended && (Tumblr.KeyCommands.suspend(), this.glass_suspended_keys = !0), this.rendered || this.render(), e = e || "", this.on_close = t || function() {}, this.visible = !0, Tumblr.Events.trigger("Glass:show", this), this.$el.addClass("show"), setTimeout(_.bind(function() {
                    this.$el.addClass(e)
                }, this), 0)
            },
            hide: function() {
                this.visible = !1, Tumblr.Events.trigger("Glass:hide", this), this.$el.removeClass("show"), this.on_close(), this.glass_suspended_keys && (_.isObject(Tumblr.KeyCommands) && Tumblr.KeyCommands.resume(), this.glass_suspended_keys = !1)
            },
            lock: function() {
                this.locked = !0
            },
            unlock: function() {
                this.locked = !1
            }
        }));
        e.Glass = i
    }(jQuery, Tumblr), /*! scripts/application/cookie.js */
    function(t) {
        var e = {
            get: function(t) {
                return new RegExp(t + "=([^;]+)").test(unescape(document.cookie)) ? RegExp.$1 : null
            },
            set: function(t, e, i, o) {
                o = o || {};
                var s = new Date,
                    n = o.path ? o.path : "/",
                    r = !!o.is_secure,
                    a = o.domain ? o.domain : "";
                s.setTime(s.getTime() + 1e3 * i), document.cookie = t + "=" + escape(e) + (null == i ? "" : ";expires=" + s.toGMTString()) + ";path=" + n + (r === !1 ? "" : ";secure") + ("" === a ? "" : ";domain=" + a)
            },
            unset: function(t) {
                e.set(t, "", -1)
            }
        };
        t.Cookie = e
    }(Tumblr), /*! scripts/application/document_width_cookie.js */
    function(t, e, i, o) {
        o.documentWidth = function(e) {
            e || (e = t(document).width()), Tumblr.Cookie.set("documentWidth", e, 86400)
        }
    }(jQuery, Backbone, _, Tumblr), /*! scripts/application/device_pixel_ratio.js */
    function(t, e, i, o) {
        o.devicePixelRatio = function() {
            Tumblr.Cookie.set("devicePixelRatio", window.devicePixelRatio, 86400)
        }
    }(jQuery, Backbone, _, Tumblr), /*! scripts/application/popover.js */
    function(t, e) {
        "use strict";
        var i = Backbone.View.extend({
            events: {
                click: "click"
            },
            initialize: function(e) {
                this.button = t(e.el || this.$el), this.popover = e.popover || this.$el.find(".popover"), this.on_hide = e.on_hide || function() {}, this.on_show = e.on_show || function() {}, this.auto_show = e.auto_show || !1, this.prevent_default_click = e.prevent_default_click || !1, this.auto_show && this.show(), i.register(this)
            },
            click: function(t) {
                this.prevent_default_click && t.preventDefault(), this.toggle()
            },
            is_showing: !1,
            show: function() {
                Tumblr.Glass.show(_.bind(function() {
                    this.hide(), this.on_hide()
                }, this)), this.popover.show(), this.on_show(), this.is_showing = !0
            },
            hide: function() {
                this.is_showing && (Tumblr.Glass.on_close = _.bind(function() {
                    this.is_showing && (this.popover.hide(), this.on_hide())
                }, this), Tumblr.Glass.hide(), this.is_showing = !1)
            },
            toggle: function() {
                return this.is_showing ? this.hide() : this.show()
            }
        });
        i.instances = [], i.register = function(t) {
            this.instances.push(t)
        }, i.hide_all = function() {
            for (var t = 0; t < this.instances.length; t++) this.instances[t].hide()
        }, i.hide_all_after = function(t) {
            t = t ? t : 100, setTimeout(_.bind(function() {
                for (var t = 0; t < this.instances.length; t++) this.instances[t].hide()
            }, this), t)
        };
        var o = i.extend({
            initialize: function(t) {
                if (Tumblr.BasePopover.prototype.initialize.apply(this, arguments), this.skip_glass = t.skip_glass || !1, this.skip_offset = t.skip_offset || !1, this.direction = t.direction || "down", this.align = t.align || "left", this.glassless = t.glassless || !1, this.glassless) {
                    this.skip_glass = !0, this.glassless_options = t.glassless_options || {};
                    var e = {
                        prevent_clicks: !0,
                        click_root: !1
                    };
                    _.defaults(this.glassless_options, e), this.on("click:outside", this.__onClickOutside, this), this.on("click:inside", this.__onClickInside, this)
                }
                this.options = t || {}, this.options.left = t.left || 0, this.options.right = t.right || 0, this.options.top = t.top || 0, this.options.bottom = t.bottom || 0
            },
            click: function(t) {
                this.options.prevent_default_click && t.preventDefault(), this.options.disable_auto_show || this.show()
            },
            __bindOutsideClick: function() {
                this.__outsideClickFn = _.bind(this.__onOutsideClick, this), document.addEventListener("click", this.__outsideClickFn, !0), this.listenToOnce(Tumblr.Events, "popover:hide", function() {
                    document.removeEventListener("click", this.__outsideClickFn, !0), this.__outsideClickFn = null
                })
            },
            __onOutsideClick: function(e) {
                var i = this.glassless_options,
                    o = !1,
                    s = function(t) {
                        return t.jquery && (t = t[0]), !(!t || !t.nodeType) && t
                    },
                    n = [".ui_dialog"];
                n.push(this.popover), i.click_root && (_.isArray(i.click_root) ? n.concat(i.click_root) : n.push(i.click_root)), i.dynamic_ignore_selectors && (_.isArray(i.dynamic_ignore_selectors) ? _.each(i.dynamic_ignore_selectors, function(e) {
                    n.push(t(e))
                }) : n.push(t(i.dynamic_ignore_selectors))), _.each(n, _.bind(function(i) {
                    var n = s(i);
                    !n && _.isString(i) && (n = t(i).get(0)), n && (e.target === n || t.contains(n, e.target)) && (o = !0)
                }, this)), o ? this.trigger("click:inside") : (this.glassless_options.prevent_clicks && (e.preventDefault(), e.stopPropagation()), this.trigger("click:outside"))
            },
            __onClickOutside: function() {
                this.is_showing && this.hide()
            },
            __onClickInside: function() {},
            show: function() {
                if (this.skip_glass || Tumblr.Glass.show(_.bind(function() {
                        this.hide(), this.on_hide()
                    }, this)), !this.$el.is(this.popover.parent())) {
                    var t = {
                            top: 0,
                            left: 0
                        },
                        e = {};
                    this.skip_offset || (t = this.button.position()), "up" !== this.direction ? e.top = this.options.top + t.top + "px" : e.bottom = this.options.bottom - t.top - this.button.height() + "px", "right" !== this.align ? e.left = this.options.left + t.left + "px" : e.right = this.options.right - t.left - this.button.width() + "px", this.popover.css(e)
                }
                this.popover.show(), this.on_show(), this.is_showing = !0, Tumblr.Events.trigger("popover:show", this), this.glassless && !this.__outsideClickFn && this.__bindOutsideClick()
            },
            hide: function() {
                this.is_showing && (this.skip_glass ? this.popover.hide() : (Tumblr.Glass.on_close = _.bind(function() {
                    this.is_showing && this.popover.hide()
                }, this), Tumblr.Glass.hide()), this.on_hide(), this.is_showing = !1, Tumblr.Events.trigger("popover:hide"))
            },
            position: function() {
                this.popover.show();
                var e = t(window),
                    i = {
                        top: e.scrollTop(),
                        left: e.scrollLeft()
                    };
                this.popover.removeClass("up nipple_on_bottom"), i.right = i.left + e.width(), i.bottom = i.top + e.height();
                var o = this.popover.offset(),
                    s = this.popover.outerHeight(),
                    n = e.height();
                o.right = o.left + this.popover.outerWidth(), o.bottom = o.top + s, n > s && i.bottom < o.bottom && this.popover.addClass("up nipple_on_bottom")
            }
        });
        e.BasePopover = i, e.Popover = o
    }(jQuery, Tumblr), /*! scripts/application/popover_with_form.js */
    function(t, e, i) {
        var o = window.l10n_str,
            s = Tumblr.Popover.extend({
                initialize: function(t) {
                    this.options = t || {}, this.$form = this.$("form"), this.$form.length && (this.$form.on("submit", e.bind(this.submit_form, this)), Tumblr.Popover.prototype.initialize.apply(this, arguments))
                },
                show: function() {
                    Tumblr.Popover.prototype.show.call(this), Tumblr.Events.trigger("keycommands:suspend"), this.options.no_autofocus || this.$("form :input").first().focus()
                },
                hide: function() {
                    Tumblr.Popover.prototype.hide.call(this), Tumblr.Events.trigger("keycommands:resume")
                },
                submit_form: function(i) {
                    i && i.preventDefault();
                    var s = this.$form.serializeArray();
                    return t.ajax({
                        withFormKey: !0,
                        url: this.$form.attr("action"),
                        type: this.$form.attr("method") || "post",
                        data: s,
                        success: e.bind(this.on_success, this) || function() {},
                        error: e.bind(function() {
                            e.isFunction(this.on_error) && this.on_error(), Tumblr.Dialog.alert(o.ajax_error)
                        }, this),
                        complete: e.bind(function() {
                            this.options.wait || this.hide(), e.isFunction(this.on_complete) && this.on_complete()
                        }, this)
                    }), this.on_submit && this.on_submit(), !1
                }
            });
        i.PopoverWithForm = s
    }(jQuery, _, Tumblr), /*! scripts/application/popover_with_scroll.js */
    function(t, e, i, o) {
        "use strict";
        o.PopoverWithScroll = Tumblr.Popover.extend({
            is_scroll_disabled: !1,
            initialize: function(t) {
                this.options = t || {}, Tumblr.Popover.prototype.initialize.apply(this, arguments), this.$container = this.$el.find(".popover_inner"), this.$scroll = this.$el.find(".popover_scroll"), this.options.disable_infinite_scroll = t.disable_infinite_scroll || !1, this.on_load_more = t.on_load_more || function() {}, this.scrollbar = null, this.auto_center = !i.isBoolean(this.options.auto_center) || this.options.auto_center, this.$scroll.length || (this.is_scroll_disabled = !0)
            },
            containing_frame: window,
            get_container_width: function() {
                return this.containing_frame === window ? Tumblr.Prima.DOMEventor.rect().windowWidth : t(this.containing_frame).outerWidth(!0)
            },
            show: function() {
                if (Tumblr.Popover.prototype.show.apply(this, arguments), this.auto_center) this.position_vertical();
                else if (this.popover) {
                    var t = this.get_container_width();
                    t - this.$el.offset().left - this.$el.outerWidth(!0) < this.popover.outerWidth(!0) ? this.popover.addClass("nipple_on_right").removeClass("nipple_on_left") : this.popover.addClass("nipple_on_left").removeClass("nipple_on_right")
                }
                Tumblr.Prima.Scrollbar && (this.scrollbar = new Tumblr.Prima.Scrollbar(this.$scroll), this.scrollbar.on("infinitescroll", i.bind(this.load_more, this))), this.$scroll.attr("tabindex", "-1").focus()
            },
            hide: function() {
                this.$container && this.$container.css({
                    top: "",
                    height: ""
                }), this.$scroll && this.$scroll.css("height", ""), this.scrollbar && (this.scrollbar.destroy(), this.scrollbar = null), Tumblr.Popover.prototype.hide.apply(this, arguments)
            },
            update: function() {
                this.scrollbar && this.scrollbar.update(), this.position_vertical()
            },
            load_more: function() {
                this.is_scroll_disabled || this.options.disable_infinite_scroll || this.on_load_more()
            },
            position_vertical: function() {
                if (this.$container && this.$scroll) {
                    var e, i, o, s = Tumblr.Flags.bool("dashboard_refresh") ? 132 : 80,
                        n = 50 - .5 * this.$container.outerHeight(!0),
                        r = t(window).height();
                    this.$container.css("top", n), this.$scroll.height() > r - s && this.$scroll.css("height", r - s), o = this.$container.outerHeight(!0), e = this.$container.offset().top - t(window).scrollTop(), i = parseInt(this.$container.css("top"), 10), e < 30 ? (i -= e - 30, this.$container.css("top", i < 23 ? i : 23)) : e + o > r - 30 && (i -= e + o - r + 50, this.$container.css("top", i > -(o - 80) ? i : -(o - 68))), this.scrollbar && this.scrollbar.update()
                }
            }
        })
    }(jQuery, Backbone, _, Tumblr), /*! scripts/application/popover_legal.js */
    function(t, e, i, o) {
        "use strict";
        o.LegalPopover = e.View.extend({
            initialize: function() {
                this.$el.length && (this.popover = new Tumblr.Popover({
                    el: this.$el,
                    glassless: !0,
                    glassless_options: {
                        prevent_clicks: !0
                    },
                    on_show: i.bind(function() {
                        this.$el.addClass("show"), this.$el.closest("#sidebar_footer_nav").addClass("show_popover"), this.close_on_scroll()
                    }, this),
                    on_hide: i.bind(function() {
                        this.$el.removeClass("show"), this.$el.closest("#sidebar_footer_nav").removeClass("show_popover")
                    }, this)
                }), this.popover_button = this.$el.find(".popover_legal_link"), this.popover_button.on("click", i.bind(function() {
                    return this.popover.show(), !1
                }, this)), this.update_position())
            },
            update_position: function() {
                var t = Math.floor(this.popover.popover.outerWidth() / 2);
                this.popover.popover.css({
                    marginLeft: -t + "px"
                })
            },
            close_on_scroll: function() {
                t(window).on("scroll.legalpopover", i.bind(function() {
                    this.popover.hide(), t(window).off("scroll.legalpopover")
                }, this))
            }
        })
    }(jQuery, Backbone, _, Tumblr), /*! scripts/application/popover_search_base.js */
    function(t, e, i, o) {
        "use strict";
        o.BaseSearchPopover = e.View.extend({
            el: "#user_tools",
            initialize: function(e) {
                this.options = e || {}, this.popover_selector = this.options.popover_selector || "#popover_tracked_tags", this.$search_field = this.$("#search_field"), this.$search_form = this.$("#search_form"), this.$search_query = this.$("#search_query"), this.$popover = this.$(this.popover_selector), this.$tracked_tags = this.$(this.popover_selector + " .tracked_tags"), this.winRect = Tumblr.Prima.DOMEventor.rect(), this.popover = new Tumblr.Popover({
                    el: this.$search_query,
                    glassless: !0,
                    glassless_options: {
                        click_root: this.$search_field,
                        prevent_clicks: !0
                    },
                    left: this.$search_field.position().left + 2,
                    skip_offset: !0,
                    popover: this.$popover,
                    disable_auto_show: !0,
                    on_show: i.bind(function() {
                        this.bind_key_nav(), this.resize_view(), this.init_scroll()
                    }, this),
                    on_hide: i.bind(function() {
                        t("#unread_tag_notice").show(), t("#search_query").addClass("with_unread"), t(".ui_search").removeClass("active"), this.$search_field.removeClass("active"), this.unbind_key_nav(), this.destroy_scroll()
                    }, this)
                }), this.cached_popover_height = this.popover.popover.height(), this.$scrollable_container = this.$el.find(".popover_scroll"), this.scrollbar = null, this.setup_autocomplete(), this.keyevents = {
                    bind_key_down: i.bind(this.keydown, this),
                    bind_key_up: i.bind(this.keyup, this)
                }, Tumblr.Events.on("DOMEventor:flatresize", i.debounce(this.resize_view, 300).bind(this)), Tumblr.Events.on("SearchPopover:update", i.debounce(this.on_update, 300).bind(this))
            },
            init_scroll: function() {
                this.scrollbar || (this.scrollbar = new Tumblr.Prima.Scrollbar(this.$scrollable_container))
            },
            destroy_scroll: function() {
                this.scrollbar && (this.scrollbar.destroy(), this.scrollbar = null)
            },
            resize_view: function() {
                var t = {},
                    e = this.popover.popover;
                this.cached_popover_height + e.position().top > this.winRect.windowHeight ? e.height() + e.position().top > this.winRect.windowHeight - 200 && (t = {
                    "max-height": this.winRect.windowHeight - 200 + "px",
                    "overflow-y": "auto"
                }, this.$scrollable_container.css(t)) : (t = {
                    "max-height": "auto",
                    overflow: "visible"
                }, this.$scrollable_container.css(t))
            },
            on_update: function() {
                this.$scrollable_container.css({
                    "max-height": "auto",
                    overflow: "visible"
                }), this.cached_popover_height = this.popover.popover.height(), this.resize_view()
            },
            setup_autocomplete: function() {},
            focus_search_query: function() {},
            mouseenter: function() {
                this.in_popover(this.in_focus()) && this.in_focus().blur()
            },
            has_children: function(t) {
                return !!t && t.children().length > 0
            },
            click_popover: function(t) {},
            bind_key_nav: function() {
                t(document).off("keydown", this.keyevents.bind_key_down), t(document).off("keyup", this.keyevents.bind_key_up), t(document).on("keydown", this.keyevents.bind_key_down), t(document).on("keyup", this.keyevents.bind_key_up)
            },
            unbind_key_nav: function() {
                t(document).off("keyup", this.keyevents.bind_key_up), t(document).off("keydown", this.keyevents.bind_key_down)
            },
            next: function() {
                this.$search_query.blur(), this.currentIndex++, this.set_active("next")
            },
            previous: function() {
                this.$search_query.blur(), this.currentIndex--, this.set_active("previous")
            },
            set_active: function(t) {},
            in_focus: function() {
                return t(document.activeElement)
            },
            contains: function(t) {
                return !(!this.in_popover(t) && !this.$search_query.is(t))
            },
            in_popover: function(t) {
                return this.$popover.has(t).length
            },
            keyup: function(t) {
                9 === t.keyCode && (this.contains(this.in_focus()) || (this.popover.hide(), this.unbind_key_nav()))
            },
            keydown: function(t) {
                switch (t.keyCode) {
                    case 27:
                        return void this.$search_query.blur();
                    case 38:
                        t.preventDefault(), this.previous();
                        break;
                    case 40:
                        t.preventDefault(), this.next()
                }
            },
            submit: function() {
                return "" !== t.trim(this.$search_query.val())
            }
        })
    }(jQuery, Backbone, _, Tumblr), /*! scripts/css_webfonts.js */
    function(t) {
        t.webfonts = {
            "1785 GLC Baskerville": {
                display_name: "1785 Baskerville",
                family: "'1785 GLC Baskerville', serif",
                path: "1785glcbaskerville",
                _v: "1"
            },
            "Alternate Gothic": {
                display_name: "Alternate Gothic",
                family: "'Alternate Gothic', sans-serif",
                path: "alternategothic",
                _v: "3"
            },
            Arquitecta: {
                display_name: "Arquitecta",
                family: "'Arquitecta', sans-serif",
                path: "arquitecta",
                _v: "3"
            },
            Avalon: {
                display_name: "Avalon",
                family: "'Avalon', sans-serif",
                path: "avalon",
                _v: "1"
            },
            Baskerville: {
                display_name: "Baskerville",
                family: "Baskerville, 'Times New Roman', Times, serif"
            },
            "Bodoni Recut FS": {
                display_name: "Bodoni",
                family: "'Bodoni Recut FS', serif",
                path: "bodonirecutfs",
                _v: "3"
            },
            Bookmania: {
                display_name: "Bookmania",
                family: "'Bookmania', serif",
                path: "bookmania",
                _v: "1"
            },
            "Brutal Type": {
                display_name: "Brutal Type",
                family: "'Brutal Type', sans-serif",
                path: "brutaltype",
                _v: "1"
            },
            Calluna: {
                display_name: "Calluna",
                family: "'Calluna', serif",
                path: "calluna",
                _v: "3"
            },
            "Calluna Sans": {
                display_name: "Calluna Sans",
                family: "'Calluna Sans', sans-serif",
                path: "callunasans",
                _v: "3"
            },
            Capita: {
                display_name: "Capita",
                family: "'Capita', serif",
                path: "capita",
                _v: "1"
            },
            "Caslon FS": {
                display_name: "Caslon FS",
                family: "'Caslon FS', serif",
                path: "caslonfs",
                _v: "3"
            },
            "Clarendon Text Pro": {
                display_name: "Clarendon",
                family: "'Clarendon Text Pro', serif",
                path: "clarendontextpro",
                _v: "3"
            },
            "Clearface FS": {
                display_name: "Clearface",
                family: "'Clearface FS', serif",
                path: "clearface",
                _v: "4"
            },
            "Courier New": {
                display_name: "Courier New",
                family: "'Courier New', Courier, monospace"
            },
            Favorit: {
                display_name: "Favorit",
                family: "'Favorit', sans-serif",
                path: "favorit",
                _v: "1"
            },
            Futura: {
                display_name: "Futura",
                family: "Futura, 'Century Gothic', AppleGothic, sans-serif"
            },
            "Garamond Classic FS": {
                display_name: "Garamond",
                family: "'Garamond Classic FS', serif",
                path: "garamondclassicfs",
                _v: "3"
            },
            Georgia: {
                display_name: "Georgia",
                family: "Georgia, Palatino, 'Palatino Linotype', Times, 'Times New Roman', serif"
            },
            Gibson: {
                display_name: "Gibson",
                family: "'Gibson', sans-serif",
                path: "gibson",
                _v: "3"
            },
            "Grumpy Black 48": {
                display_name: "Grumpy",
                family: "'Grumpy Black 48', serif",
                path: "grumpyblack48",
                _v: "3"
            },
            "Helvetica Neue": {
                display_name: "Helvetica",
                family: "'Helvetica Neue', Arial, Helvetica, sans-serif"
            },
            "Lorimer No 2": {
                display_name: "Lorimer No 2",
                family: "'Lorimer No 2', sans-serif",
                path: "lorimerno2",
                _v: "3"
            },
            "Lucida Sans": {
                display_name: "Lucida Sans",
                family: "'Lucida Sans', 'Lucida Grande', 'Lucida Sans Unicode', sans-serif"
            },
            "News Gothic FS": {
                display_name: "News Gothic",
                family: "'News Gothic FS', sans-serif",
                path: "newsgothicfs",
                _v: "3"
            },
            "Pratt Pro": {
                display_name: "Pratt Pro",
                family: "'Pratt Pro', serif",
                path: "prattpro",
                _v: "1"
            },
            Quadrat: {
                display_name: "Quadrat",
                family: "'Quadrat', serif",
                path: "quadrat",
                _v: "1"
            },
            "Sofia Pro": {
                display_name: "Sofia Pro",
                family: "'Sofia Pro', sans-serif",
                path: "sofiapro",
                _v: "2"
            },
            Spade: {
                display_name: "Spade",
                family: "'Spade', serif",
                path: "spade",
                _v: "1"
            },
            "Square Serif": {
                display_name: "Square Serif",
                family: "'Square Serif', serif",
                path: "squareserif",
                _v: "4"
            },
            Streetscript: {
                display_name: "Streetscript",
                family: "'Streetscript', sans-serif",
                path: "streetscript",
                _v: "1"
            },
            "Typewriter FS": {
                display_name: "Typewriter",
                family: "'Typewriter FS', serif",
                path: "typewriterfs",
                _v: "1"
            },
            Verdana: {
                display_name: "Verdana",
                family: "Verdana, Geneva, Tahoma, sans-serif"
            },
            Ziclets: {
                display_name: "Ziclets",
                family: "'Ziclets', serif",
                path: "ziclets",
                _v: "1"
            }
        }
    }(Tumblr), /*! scripts/color_utilities.js */
    function(t, e, i) {
        var o = {
            rgb_to_hex: function(t, e, i) {
                return "#" + ((1 << 24) + (t << 16) + (e << 8) + i).toString(16).slice(1)
            },
            hex_to_rgb: function(t) {
                t = new String(t).replace(/[^0-9a-f]/gi, ""), t.length < 6 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
                var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                return e ? {
                    r: parseInt(e[1], 16),
                    g: parseInt(e[2], 16),
                    b: parseInt(e[3], 16)
                } : null
            },
            rgb_to_hsv: function(t, e, i) {
                var o = Math.min(Math.min(t, e), i),
                    s = Math.max(Math.max(t, e), i),
                    n = s - o,
                    r = {
                        h: 6,
                        s: s ? (s - o) / s : 0,
                        v: s / 255
                    };
                return n ? s === t ? r.h += (e - i) / n : s === e ? r.h += 2 + (i - t) / n : r.h += 4 + (t - e) / n : r.h = 0, r.h = 60 * r.h % 360, r
            },
            hsv_to_rgb: function(t, e, i) {
                var o, s, n;
                if (e) {
                    o = s = n = 0;
                    var r = (t + 360) % 360 / 60,
                        a = i * e,
                        l = i - a,
                        h = a * (1 - Math.abs(r % 2 - 1));
                    r < 1 ? (o = a, s = h) : r < 2 ? (o = h, s = a) : r < 3 ? (s = a, n = h) : r < 4 ? (s = h, n = a) : r < 5 ? (n = a, o = h) : (n = h, o = a), o += l, s += l, n += l
                } else o = s = n = i;
                return {
                    r: Math.round(255 * o),
                    g: Math.round(255 * s),
                    b: Math.round(255 * n)
                }
            },
            hex_to_hsv: function(t) {
                t = new String(t).replace(/[^0-9a-f]/gi, ""), t.length < 6 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
                var o = i.ColorUtilities.hex_to_rgb(t),
                    s = i.ColorUtilities.rgb_to_hsv.apply(i.ColorUtilities, e.toArray(o));
                return s
            },
            hsv_to_hex: function(t, o, s) {
                var n = i.ColorUtilities.hsv_to_rgb(t, o, s),
                    r = i.ColorUtilities.rgb_to_hex.apply(i.ColorUtilities, e.toArray(n));
                return r
            },
            hex_brightness: function(t, e) {
                t = String(t).replace(/[^0-9a-f]/gi, ""), t.length < 6 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), e = e || 0;
                var i, o, s, n = parseInt(t, 16),
                    r = e < 0 ? 0 : 255,
                    a = e < 0 ? -e : e,
                    l = n >> 16,
                    h = n >> 8 & 255,
                    c = 255 & n;
                return i = Math.round((r - l) * a) + l, o = Math.round((r - h) * a) + h, s = Math.round((r - c) * a) + c, "#" + (16777216 + 65536 * i + 256 * o + s).toString(16).slice(1)
            },
            hsv_to_readable: function(t) {
                return "string" == typeof t && (t = i.ColorUtilities.hex_to_hsv(t)), t.s < .2 && t.v > .8 ? "#444" : "#FFF"
            },
            compare_colors: function(t, i, o) {
                var s = {
                    upper_bound: .8,
                    lower_bound: .2,
                    diff_bound: .1,
                    hue_bound: 15
                };
                e.extend(s, o);
                var n = s.upper_bound,
                    r = s.lower_bound,
                    a = s.diff_bound,
                    l = s.hue_bound,
                    h = Math.abs(t.h - i.h),
                    c = Math.abs(t.s - i.s),
                    d = Math.abs(t.v - i.v);
                return h <= a && c <= a && d <= a || c <= a && d <= a && (c >= n || c <= r && d >= n || d <= r && h <= l)
            }
        };
        i.ColorUtilities = o
    }(jQuery, _, Tumblr), /*! scripts/indash_blog/views/header/popover.js */
    Tumblr.IndashBlog || (Tumblr.IndashBlog = {}), Tumblr.IndashBlog.Header || (Tumblr.IndashBlog.Header = {}),
    function(t, e, i, o) {
        var s = i.View.extend({
            className: "indash_header_popover",
            defaults: {
                direction: "left",
                edit_field: null,
                template: !1,
                template_data: {},
                trigger: null,
                glassless: !0
            },
            __close: function() {
                this.hide()
            },
            initialize: function(i) {
                this.options = e.extend({}, this.defaults, i), this.template = this.options.template, this.template_data = this.options.template_data, this.checkbox_template = e.template(t("#tumblelog_header_checkbox_template").html()), this.color_picker_template = e.template(t("#tumblelog_header_color_picker_template").html()), this.is_showing = !1, this.$popover = null, this.popover_view = null, o.Popover.register(this)
            },
            render: function() {
                var i = this.template(this.template_data);
                return this.$popover = t(i).appendTo(this.$el).hide(), this.popover_view = new Tumblr.Popover({
                    el: this.options.trigger,
                    popover: this.$popover,
                    glassless: this.options.glassless,
                    glassless_options: this.options.glassless_options,
                    auto_show: !1,
                    direction: this.options.direction,
                    skip_offset: !0,
                    on_show: e.bind(function() {
                        this.is_showing || (Tumblr.Events.trigger("indashblog:popover:show", this, this.options.edit_field), this.is_showing = !0)
                    }, this),
                    on_hide: e.bind(function() {
                        this.is_showing && (Tumblr.Events.trigger("indashblog:popover:hide", this, this.options.edit_field), this.is_showing = !1)
                    }, this)
                }), this
            },
            show: function() {
                this.popover_view.show()
            },
            hide: function() {
                this.is_showing && (Tumblr.Events.trigger("indashblog:popover:hide", this, this.options.edit_field), this.is_showing = !1, this.popover_view.hide())
            }
        });
        s.instances = [], s.register = function(t) {
            this.instances.push(t)
        }, s.hide_all = function() {
            for (var t = 0, e = this.instances.length; t < e; t++) this.instances[t].hide()
        }, o.Popover = s
    }(jQuery, _, Backbone, Tumblr.IndashBlog.Header), /*! scripts/indash_blog/views/header/info_popover.js */
    Tumblr.IndashBlog || (Tumblr.IndashBlog = {}), Tumblr.IndashBlog.Header || (Tumblr.IndashBlog.Header = {}),
    function(t, e, i, o) {
        var s = o.Popover.extend({
            template: e.template(t("#tumblelog_header_info_popover_template").html()),
            defaults: {
                show_flag_button: !0
            },
            events: {
                "click .ask_menu_item": "__ask_menu_item_clicked",
                "click .fan_mail_menu_item": "__fan_mail_menu_item_clicked",
                "click .archive_menu_item": "__archive_menu_item_clicked",
                "click .block": "__block_click",
                "click .toggle_spam": "__toggle_spam_click",
                "click .toggle_nsfw": "__toggle_nsfw_click",
                "click .toggle_suspended": "__toggle_suspended_click",
                "click .panel_menu_item": "__panel_menu_item_clicked"
            },
            __panel_menu_item_clicked: function(t) {
                this.hide()
            },
            __ask_menu_item_clicked: function(t) {
                t.preventDefault(), Tumblr.Events.trigger("indashblog:tumblelog:ask", {
                    recipient: this.model.get("name"),
                    anonymous_asks: this.model.get("anonymous_asks")
                }), this.hide()
            },
            __fan_mail_menu_item_clicked: function(t) {
                t.preventDefault(), Tumblr.Events.trigger("indashblog:tumblelog:fan_mail", {
                    recipient: this.model.get("name")
                }), this.hide()
            },
            __archive_menu_item_clicked: function() {
                this.hide()
            },
            __block_click: function(t) {
                t.preventDefault();
                var i = {
                    blockedTumblelog: this.model.get("name")
                };
                Tumblr.Prima.Block.confirmBlock(i).then(e.bind(this.__onBlockConfirm, this)), Tumblr.Events.trigger("TumblelogPopover:navigation_menu_item_clicked"), this.hide()
            },
            __onBlockConfirm: function() {
                var t = new Tumblr.Prima.Models.Tumblelog({
                    name: this.model.get("name")
                });
                t.block().then(e.bind(this._afterBlock, this))
            },
            __toggle_spam_click: function(t) {
                t.preventDefault();
                var i = this.model.toggle_spam();
                i.success(e.bind(function(t) {
                    this.model.set("spam", !!t.spammer)
                }, this))
            },
            __toggle_nsfw_click: function(t) {
                t.preventDefault();
                var i = this.model.toggle_nsfw();
                i.success(e.bind(function(t) {
                    this.model.set("nsfw", t.nsfw)
                }, this))
            },
            __toggle_suspended_click: function(t) {
                t.preventDefault();
                var i = this.model.toggle_suspended();
                i.success(e.bind(function(t) {
                    this.model.set("suspended", t.suspended)
                }, this))
            },
            __model_change: function() {
                var t = this.model.toJSON();
                this.$(".toggle_spam").toggleClass("is_flagged", !!t.spam), this.$(".toggle_nsfw").toggleClass("is_flagged", !!t.nsfw), this.$(".toggle_suspended").toggleClass("is_flagged", !!t.suspended)
            },
            _afterIgnore: function() {
                this.model.set("ignoring", !0), this.model.set("following", !1)
            },
            _afterBlock: function() {
                this.model.set("blocking", !0), this.model.set("following", !1)
            },
            _open_dialog: function(t, i) {
                i = i || e.noop, this.is_disabled = !0, t.fail(e.bind(function() {
                    this.is_disabled = this.is_menu_open
                }, this)), t.done(e.bind(function() {
                    this.is_disabled = this.is_menu_open, i()
                }, this))
            },
            initialize: function(i) {
                if (this.$trigger = i.trigger, this.targetPost = i.targetPost, this.model) {
                    var o = this.model.toJSON();
                    e.defaults(o, i, this.defaults), this.$popover = t(this.template(o)).appendTo(this.$el).hide(), this.tumblelog = new Tumblr.Prima.Models.Tumblelog({
                        name: this.model.get("name")
                    }), this.listenTo(this.model, "change", this.__model_change), i = e.extend(i, {
                        popover: this.$popover
                    }), Tumblr.Popover.prototype.initialize.call(this, i)
                }
            },
            show: function() {
                this.position_popover(), this.listenTo(Tumblr.Events, "DOMEventor:flatresize", this.position_popover), Tumblr.Popover.prototype.show.call(this)
            },
            hide: function() {
                this.stopListening(Tumblr.Events, "DOMEventor:flatresize"), Tumblr.Popover.prototype.hide.call(this)
            },
            position_popover: function() {
                var t = this.$trigger.offset().left + "px";
                this.$popover.css({
                    right: "auto",
                    left: t
                })
            }
        });
        o.InfoPopover = s
    }(jQuery, _, Backbone, Tumblr.IndashBlog.Header); /*! scripts/indash_blog/views/header_view_compact.js */
var TumblrData = TumblrData || {},
    Events = Tumblr.Events;
Tumblr.IndashBlog || (Tumblr.IndashBlog = {}),
    function(t, e, i, o) {
        "use strict";
        var s = e.get(Tumblr, "Prima.Utils.CanvasTools"),
            n = i.View.extend({
                className: "indash_header_compact",
                defaults: {
                    current_data: {},
                    unfollow_data: {},
                    follow_data: {},
                    template_data: {},
                    on_render: t.noop,
                    hide_posts_on_unfollow: !1,
                    strip_description_line_breaks: !1,
                    include_info_popover: !0
                },
                events: {
                    "click .customize_button": "__customize_button_clicked",
                    "click .description a": "__description_link_click",
                    "click .follow": "__on_follow_click",
                    "click .unfollow": "__on_follow_click",
                    'click [data-post-action="remove"]': "__on_remove_click"
                },
                __customize_button_clicked: function(t) {
                    t.preventDefault(), t.stopPropagation(), Events.trigger("peepr-open-request", {
                        tumblelog_name: this.model.get("name"),
                        editing_appearance: !0
                    })
                },
                __on_follow_click: function(t) {
                    if (t.preventDefault(), t.stopPropagation(), !Tumblr.Flags.bool("is_logged_in")) return void window.open("/follow/" + this.model.get("name"), "_self");
                    if (this.model.get("following")) {
                        var i = Tumblr.TumblelogActions.confirm_unfollow({
                            tumblelog: this.model.get("name"),
                            avatar_url: this.model.get("avatar_url") || ""
                        });
                        this._open_dialog(i, e.bind(function() {
                            this.model.save_following({
                                following: !1
                            }, this.options.unfollow_data), this.hide_posts_on_unfollow && this._hide_posts()
                        }, this))
                    } else this.model.save_following({
                        following: !0
                    }, this.options.follow_data)
                },
                __on_remove_click: function(t) {
                    t.preventDefault(), this.destroy()
                },
                __description_link_click: function(e) {
                    e.preventDefault();
                    var i = t(e.currentTarget).attr("href");
                    try {
                        if (Tumblr.Prima.Url && Tumblr.Prima.Url.hasAllowedProtocol(i)) {
                            if (!Tumblr.Prima.Url.isAbsoluteUrl(i)) {
                                var o = "http://" + this.model.get("name") + ".tumblr.com/";
                                i = "/" === i.charAt(0) ? i.substr(1) : i, i = o + i
                            }
                            window.open(i, "_blank")
                        }
                    } catch (s) {}
                },
                _render_follow_button: function() {
                    this.model.get("following") ? (this.$el.find(".follow").hide(), this.$el.find(".unfollow").show()) : (this.$el.find(".unfollow").hide(), this.$el.find(".follow").show())
                },
                _hide_posts: function() {
                    Tumblr.Posts.whereBy({
                        tumblelog: this.model.get("name"),
                        sponsored: !1
                    }).invoke("dismiss")
                },
                _open_dialog: function(i, o) {
                    o = o || t.noop, this.is_disabled = !0, i.fail(e.bind(function() {
                        this.is_disabled = this.is_menu_open
                    }, this)), i.done(e.bind(function() {
                        this.is_disabled = this.is_menu_open, o()
                    }, this))
                },
                _render_inline_styles: function() {
                    var t = this.model.get("global_theme_params"),
                        e = this.model.get("has_default_header") && Tumblr.Flags.bool("hide_default_headers_blog_cards"),
                        i = !(!(t.header_image_focused && t.header_stretch && t.show_header_image) || e),
                        o = Tumblr.ColorUtilities.hex_to_hsv(t.background_color),
                        s = Tumblr.ColorUtilities.hex_to_hsv(t.link_color),
                        n = t.link_color;
                    return Tumblr.ColorUtilities.compare_colors(s, o) && (n = Tumblr.ColorUtilities.hsv_to_readable(o)), i || (this.$(".navigation .nav_icon").css("color", n), this.$(".navigation .blog_name").css("color", n), this.$(".navigation .post_dismiss").css("color", n), this.$(".navigation .dismiss_icon").css("color", n), this.$(".navigation button").css({
                        color: t.background_color,
                        "background-color": n
                    })), this.$(".description a").css("color", t.link_color), this
                },
                _render_font_styles: function() {
                    if (Tumblr.webfonts) {
                        var i = this.model.get("global_theme_params");
                        if (e.has(Tumblr.webfonts, i.title_font)) {
                            var o = e.result(Tumblr.webfonts, i.title_font),
                                s = "webfont_" + o.path;
                            if (o.path && !t("head #" + s).length) {
                                var n = this.assets_host + "/fonts/" + o.path + "/stylesheet.css";
                                n += e.has(o, "_v") ? "?v=" + o._v : "", t("<link>", {
                                    id: s,
                                    rel: "stylesheet",
                                    type: "text/css",
                                    href: n
                                }).appendTo(t("head"))
                            }
                        }
                    }
                },
                __log_recommendation_dismissal: function() {
                    t.ajax({
                        method: "POST",
                        url: "/svc/search/log_dismissal",
                        data: {
                            tumblelog_name: this.model.get("name")
                        },
                        withFormKey: !0
                    })
                },
                __addSnowMan: function() {
                    var t = {
                        el: this.$("[data-snowman-container]"),
                        tumblelogName: this.model.get("name")
                    };
                    Tumblr.Flags.bool("is_logged_in") && this.options.include_info_popover && (t.infoPopover = {
                        el: this.$el,
                        auto_show: !1,
                        trigger: this.$el.find(".info_popover_button"),
                        useRecipient: !0,
                        showAsks: !0,
                        showAnonymousAsks: !0,
                        skip_glass: !0,
                        targetPost: this.targetPost || this.$el,
                        show_flag_button: !Tumblr.IndashBlog.is_peepr
                    }), this.snowman = new Tumblr.Prima.Snowman(t)
                },
                initialize: function(i) {
                    if (this.options = e.extend({}, this.defaults, i), this.hide_posts_on_unfollow = this.options.hide_posts_on_unfollow, this.current_data = this.options.current_data, this.on_render = this.options.on_render, this.targetPost = this.options.targetPost, this.is_rendered = !1, this.assets_host = Tumblr.Prima.Lib.hosts.get("assets") || "", this.template = e.template(t("#tumblelog_header_template").html()), this.$description = null, this.$description_inner = null, this.listenTo(this.model, "add:global_theme_params", this.render), this.listenTo(this.model, "change:global_theme_params", this.render), this.listenTo(this.model, "change:following", this._render_follow_button), !e.isEmpty(this.current_data)) {
                        var o = e.extend({}, this.current_data, this.model.toJSON());
                        this.model.set(o, {
                            silent: !0
                        })
                    }
                },
                render: function() {
                    var t = this.model.toJSON();
                    if (t.following || (t.following = !1), this.is_rendered || !t.global_theme_params) return this;
                    var i = e.result(Tumblr.webfonts, t.global_theme_params.title_font),
                        o = Tumblr.ColorUtilities.hex_to_rgb(t.global_theme_params.title_color);
                    return this.$el.html(this.template(e.merge({}, t, {
                        hide_headers_flag: Tumblr.Flags.bool("hide_default_headers_blog_cards"),
                        show_navigation: !0,
                        show_share_controls: !1,
                        show_user_controls: !0,
                        show_follow_button: !0,
                        show_dismiss_controls: !1,
                        title_font_family: !!i && i.family,
                        title_color_rgb: String(e.values(o).join(",")),
                        is_verified: !1
                    }, this.options.template_data))), this.$description = this.$(".description"), this.$description_inner = this.$(".description .description_inner"), this._render_font_styles(), this._render_inline_styles(), this.__addSnowMan(), this.is_rendered = !0, this.on_render(), this.$description.length && (e.delay(e.bind(this.truncate_description, this), 100), this.options.strip_description_line_breaks && this.strip_description_line_breaks()), this.pixelateAndShowAvatars(), this
                },
                pixelateAndShowAvatars: function() {
                    s.drawPixelatedImages(this), this.$el.find(".pixelated-avatar").removeClass("hide").addClass("show")
                },
                strip_description_line_breaks: function() {
                    this.$description_inner.find("br").remove();
                    var t = this.$description_inner.html(),
                        e = t.replace(/[\n\r]/g, " ");
                    this.$description_inner.html(e)
                },
                destroy: function() {
                    this.$el.fadeOut(500, e.bind(function() {
                        this.unbind(), this.$el.parent().hasClass("post_container") && this.$el.parent().remove(), this.__log_recommendation_dismissal(), Events.trigger("DOMEventor:updateRect"), Events.trigger("posts:destroyed", this.$el), this.remove()
                    }, this))
                },
                truncate_description: function() {
                    var t = this.$description_inner.get(0);
                    if (!(t.scrollHeight <= t.clientHeight)) {
                        var i = this.model.get("global_theme_params"),
                            o = i.background_color,
                            s = Tumblr.ColorUtilities.hex_to_rgb(o);
                        this.$description.append(this.description_gradient_template({
                            background_color: String(e.values(s).join(","))
                        }))
                    }
                },
                description_gradient_template: e.template('<div class="description_gradient" style="background: -moz-linear-gradient(top,  rgba(<%= background_color %>,0) 0%, rgba(<%= background_color %>,0.75) 50%, rgba(<%= background_color %>,1) 100%);background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(<%= background_color %>,0)), color-stop(50%,rgba(<%= background_color %>,0.75)), color-stop(100%,rgba(<%= background_color %>,1)));background: -webkit-linear-gradient(top,  rgba(<%= background_color %>,0) 0%,rgba(<%= background_color %>,0.75) 50%,rgba(<%= background_color %>,1) 100%);background: -o-linear-gradient(top,  rgba(<%= background_color %>,0) 0%,rgba(<%= background_color %>,0.75) 50%,rgba(<%= background_color %>,1) 100%);background: -ms-linear-gradient(top,  rgba(<%= background_color %>,0) 0%,rgba(<%= background_color %>,0.75) 50%,rgba(<%= background_color %>,1) 100%);background: linear-gradient(to bottom, rgba(<%= background_color %>,0) 0%,rgba(<%= background_color %>,0.75) 50%,rgba(<%= background_color %>,1) 100%);"></div>')
            });
        o.HeaderCompact = n
    }(jQuery, _, Backbone, Tumblr.IndashBlog), /*! scripts/tumblelog_popover/views/tumblelog_popover.js */
    function(t, e, i, o) {
        var s = i.View.extend({
            popover_recommendations: o.Flags.bool("popover_recommendations"),
            el: "body",
            initialize: function(i) {
                if (o.Flags.bool("indash_blogs") !== !1) {
                    this.options = i || {}, this.popover_template = e.template(t.trim(this.options.template || t("#tumblelog_popover_template").html())), this.cache_timeout = this.options.cache_timeout || 36e5, this.mention_hostname = this.options.mention_hostname || "tmblr.co", this.hide_posts_on_unfollow = this.options.hide_posts_on_unfollow || !1, this.$popover = null, this.popover = null, this.subviews = {}, this.current_target = null, this.current_data = {}, this.current_tumblelog = "", this.current_post = {}, this.current_mouse_x = 0, this.model = {}, this.hide_timeout = null, this.queued_event = null, this.hover_bounds = {}, this.target_bounds = {}, this.is_open = !1, this.is_user_mention = !1, this.is_mobile = !!("ontouchstart" in document.documentElement), this.is_poptica = !0, this.is_menu_open = !1, this.session_storage_key = this.is_poptica ? "optica_header" : "tumblelog_popover", this.listenTo(o.Events, "TumblelogPopover:follow", this.on_follow), this.listenTo(o.Events, "TumblelogPopover:follow_hover", this.on_follow_hover), this.listenTo(o.Events, "TumblelogPopover:unfollow", this.on_unfollow), this.listenTo(o.Events, "TumblelogPopover:inserted_posts", this.set_hover_bounds), this.listenTo(o.Events, "TumblelogPopover:track_engagement", this.track_engagement), this.listenTo(o.Events, "TumblelogPopover:toggle_navigation_menu", this.on_toggle_navigation_menu), this.listenTo(o.Events, "TumblelogPopover:navigation_menu_item_clicked", this.on_navigation_menu_item_clicked), this.listenTo(o.Events, "peepr:open", this.on_peepr_open), this.listenTo(o.Events, "peepr-open-request", this.hide), this.listenTo(o.Events, "Dashboard:hide_posts_on_unfollow", this.set_hide_posts_on_unfollow), o.Events.trigger("Dashboard:should_hide_posts_on_unfollow");
                    var s = ['a.post_avatar_link:not(".animating")', 'a.post_sub_avatar:not(".animating")', "a.reblog-avatar", '.post_info_link:not(".reblog_follow_button,.blogless-advertiser")', ".asker .name", ".post .avatar a", '.post_content .post_content_inner a[href*=".tumblr.com"]:not(".tmblr-truncated-link")', '.post_content .post_content_inner a[href*="tmblr.co"]', ".follower .avatar", ".follower .name-link", ".crushes .crush", ".notification .username", ".notification .avatar_frame", ".notification .preview_frame", ".ui_tops .tops_fans .ui_jumbo_avatar", ".ui_avatar a", ".user_list .follow_list_item_blog", ".post .tumblr_blog", "a.radar_avatar", "#dashboard_controls_open_blog .open_blog_link", ".members_list .member_avatar", ".members_list .member_name", ".posts_view_masonry a.tumblelog_info", ".js-hover-trigger-TumblelogPopover"],
                        n = t(s.join(","));
                    if (this.is_mobile) {
                        var r = n.find("a[data-tumblelog-popover]");
                        r.addClass("no_pop"), r.on("touchend", e.bind(this.on_touch_open, this))
                    } else this.$el.hoverIntent({
                        selector: s.join(","),
                        over: e.bind(this.on_mouseover, this),
                        out: t.noop
                    });
                    if (window.sessionStorage) try {
                        this.sync_storage()
                    } catch (a) {}
                }
            },
            sync_storage: function() {
                o.Utils && o.Utils.popover && (o.Utils.popover.get_session_storage(this.session_storage_key, this.cache_timeout), t(window).on("beforeunload", e.bind(function() {
                    o.Utils.popover.sync_session_storage(this.session_storage_key)
                }, this)))
            },
            update_current_data: function() {
                this.current_data = this.model.toJSON()
            },
            show: function() {
                var i, s = !0,
                    n = t(this.current_target),
                    r = o.Utils.popover.cache ? o.Utils.popover.cache[this.current_tumblelog] : null;
                r && r.data && (i = e.isObject(r.data) ? r.data : JSON.parse(r.data), e.size(i) > 1 && (this.current_data = i)), this.$popover = t(this.popover_template({
                    is_poptica: this.is_poptica || !1,
                    context_path: this.context_path
                })), this.$popover.appendTo(this.$el).hide(), this.popover = new o.Popover({
                    button: n,
                    popover: this.$popover,
                    skip_glass: !0
                }), e.isEmpty(this.current_data) || (this.popover.show(), s = !1), this.targetPost = n.closest(".post"), this.is_poptica ? (this.subviews.poptica_header = new o.TumblelogPopover.PopticaHeader({
                    model: this.model,
                    popover: this.$popover,
                    current_data: this.current_data,
                    tumblelog: this.current_tumblelog,
                    hide_posts_on_unfollow: this.hide_posts_on_unfollow,
                    on_render: e.bind(this.position, this),
                    targetPost: this.targetPost
                }), this.$popover.find(".popover_inner").prepend(this.subviews.poptica_header.render().el), (n.hasClass("post_avatar_link") || n.hasClass("post_sub_avatar")) && this.$popover.addClass("avatar_hover")) : this.subviews.tumblelog_info = new o.TumblelogPopover.Info({
                    model: this.model,
                    popover: this.$popover,
                    tumblelog: this.current_tumblelog,
                    post: this.current_post,
                    current_data: this.current_data,
                    on_close: e.bind(this.animate_out, this),
                    hide_posts_on_unfollow: this.hide_posts_on_unfollow,
                    is_user_mention: this.is_user_mention
                }), this.context_path && this.$popover.find("[data-context-path]").each(e.partial(function(e) {
                    var i = t(this);
                    i.attr("data-context-path", e + "/" + i.attr("data-context-path"))
                }, this.context_path)), this.subviews.highlighted_posts = new o.TumblelogPopover.Posts({
                    model: this.model,
                    post: this.current_post,
                    popover: this.$popover,
                    parent: this.$popover.find(".popover_inner").first(),
                    on_bottom: this.is_poptica
                }), s !== !1 || e.isEmpty(this.current_data) || this.popover.show(), this.position(), this.animate_in(), this.is_open = !0, this.bind_events(), this.log_impression(r), o.Events.trigger("TumblelogPopover:show", this.current_target)
            },
            hide: function() {
                this.$popover && (this.$popover.remove(), this.$popover = null, o.Events.trigger("TumblelogPopover:hide", this.current_target)), t(".tumblelog_popover").length && t(".tumblelog_popover").remove(), this.subviews.tumblelog_info && this.subviews.tumblelog_info.close(), e.each(this.subviews, e.bind(function(t, e) {
                    t && t.remove(), this.subviews[e] = null
                }, this)), this.current_data = {}, this.current_tumblelog = "", this.current_post = {}, this.is_open = !1, this.is_user_mention = !1;
                try {
                    this.stopListening(this.model)
                } catch (i) {}
                this.queued_event && (this.on_mouseover(this.queued_event), this.queued_event = null)
            },
            animate_in: function() {
                this.hide_timeout && (clearTimeout(this.hide_timeout), this.hide_timeout = null), this.$popover && this.$popover.removeClass("is_closed").addClass("is_open")
            },
            animate_out: function() {
                this.hide_timeout && (clearTimeout(this.hide_timeout), this.hide_timeout = null), this.$popover && this.$popover.removeClass("is_open").addClass("is_closed");
                try {
                    this.stopListening(this.model)
                } catch (t) {}
                this.unbind_events(), this.hide_timeout = setTimeout(e.bind(this.hide, this), 300)
            },
            position: function() {
                if (this.$popover && this.current_target) {
                    this.$popover.show();
                    var e = t(window),
                        i = t(this.current_target),
                        s = this.$popover.height(),
                        n = {};
                    n.top = e.scrollTop(), n.left = e.scrollLeft(), n.bottom = n.top + e.height(), n.right = n.left + e.width();
                    var r = i.offset().top - s,
                        a = i.offset().top + i.height(),
                        l = i.offset().left + .5 * i.width();
                    i.css("white-space", "nowrap"), l = i.offset().top > top ? this.current_mouse_x : l, i.css("white-space", ""), this.$popover.removeClass("down up left right nipple_on_top nipple_on_bottom"), this.is_poptica ? (this.$popover.addClass("down nipple_on_top"), this.$popover.css({
                        left: l,
                        top: a
                    })) : (this.$popover.addClass("up nipple_on_bottom"), this.$popover.css({
                        left: l,
                        top: r
                    }));
                    var h = o.Utils.popover.get_bounds(this.$popover),
                        c = 20,
                        d = 365;
                    this.target_bounds = o.Utils.popover.get_bounds(i);
                    var _ = this.is_poptica ? h.top + d : h.bottom;
                    _ > n.bottom - c && (this.$popover.css("top", r), this.$popover.removeClass("down nipple_on_top").addClass("up nipple_on_bottom"), h = o.Utils.popover.get_bounds(this.$popover));
                    var u = this.is_poptica ? h.bottom - d : h.top;
                    u < n.top + c && (this.$popover.css("top", a), this.$popover.removeClass("up nipple_on_bottom").addClass("down nipple_on_top"), h = o.Utils.popover.get_bounds(this.$popover)), this.is_poptica && h.left < n.left + c && (this.$popover.css("left", n.left + c), this.$popover.removeClass("left").addClass("right"), h = o.Utils.popover.get_bounds(this.$popover)), h.right > n.right - c && (this.is_poptica && this.$popover.css("left", n.right - c - this.$popover.width()), this.$popover.removeClass("right").addClass("left"), h = o.Utils.popover.get_bounds(this.$popover)), this.set_hover_bounds(h);
                    var p = i.closest("[data-tumblelog-popover-zindex]");
                    p.length > 0 && this.$popover.css("z-index", p.attr("data-tumblelog-popover-zindex"))
                }
            },
            set_hover_bounds: function(t) {
                t || (t = o.Utils.popover.get_bounds(this.$popover)), this.hover_bounds.left = Math.min(t.left, this.target_bounds.left), this.hover_bounds.top = Math.min(t.top, this.target_bounds.top), this.hover_bounds.right = Math.max(t.right, this.target_bounds.right), this.hover_bounds.bottom = Math.max(t.bottom, this.target_bounds.bottom)
            },
            bind_events: function() {
                this.is_mobile ? t(document).on("touchstart.tumblelog_popover", e.bind(this.on_touch_close, this)) : t(document).on("mousemove.tumblelog_popover", e.throttle(e.bind(this.on_mousemove, this), 50))
            },
            unbind_events: function() {
                t(document).off(".tumblelog_popover")
            },
            set_hide_posts_on_unfollow: function() {
                this.hide_posts_on_unfollow = !0
            },
            on_mouseover: function(i) {
                var s, n, r, a, l = t(i.currentTarget),
                    h = l.attr("href"),
                    c = !!l.attr("data-tumblelog-popover"),
                    d = l.text().replace(/\s+/g, " ").length > 1,
                    _ = l.hasClass("post_avatar_link") || l.hasClass("reblog-avatar") || l.hasClass("post-avatar-link"),
                    u = l.hasClass("post_sub_avatar");
                if (!l.hasClass("safemode") && 0 === l.closest(".post").find(".safemode").length) {
                    this.current_mouse_x = i.clientX;
                    var p = l.closest(".post").data("post-id") || l.closest(".radar").data("post-id") || "";
                    if (this.current_post = o.Posts.get(p) || {}, c || d || _ || u) {
                        if (this.is_open) return void(i.currentTarget.href && this.current_target.href !== i.currentTarget.href && (this.queued_event = i, this.animate_out()));
                        if (this.context_path = t(i.target).closest("[data-context-path]").data("context-path"), c) this.current_data = t.parseJSON(l.attr("data-tumblelog-popover")), this.current_tumblelog = this.current_data.name.toString();
                        else if (l[0].hostname && l[0].hostname === this.mention_hostname && l[0].pathname.match(/^\/m/)) s = "/" === h.substr(-1) ? h.substr(0, h.length - 1) : h, n = s.split("/"), this.is_user_mention = !0, this.current_tumblelog = n[n.length - 1];
                        else if (d || _ || u) {
                            if (s = h.replace(/.*?:\/\//g, ""), n = s.split("/"), n.length > 1 && n[1].length && "post" !== n[1]) return;
                            r = h.match(/([^\/\.]+\/\/)([^\/\.]+)(\..*)/i), a = r && r[2], a && (this.current_tumblelog = a.toLowerCase())
                        }
                        if (!e.isUndefined(this.current_tumblelog)) {
                            this.current_target = i.currentTarget;
                            var g = this.is_user_mention ? this.get_model_from_token() : this.get_model_from_name();
                            g.then(e.bind(function(t) {
                                this.model = t, this.listenTo(this.model, "change", this.update_current_data), this.show()
                            }, this))
                        }
                    }
                }
            },
            get_model_from_token: function() {
                return o.Prima.Models.Tumblelog.modelFromToken(this.current_tumblelog)
            },
            get_model_from_name: function() {
                var e = t.Deferred(),
                    i = new o.Prima.Models.Tumblelog({
                        name: this.current_tumblelog
                    });
                return e.resolve(i), e.promise()
            },
            on_mousemove: function(i) {
                if (!(this.is_menu_open || this.subviews.tumblelog_info && this.subviews.tumblelog_info.is_disabled || !this.hover_bounds || e.isEmpty(this.hover_bounds))) {
                    var o = !(this.hover_bounds.left <= i.pageX && i.pageX <= this.hover_bounds.right),
                        s = !(this.hover_bounds.top <= i.pageY && i.pageY <= this.hover_bounds.bottom),
                        n = t(i.target).hasClass("icon_close");
                    (o || s || n) && this.animate_out()
                }
            },
            on_touch_open: function(t) {
                t.preventDefault(), t.stopPropagation(), this.is_open ? this.animate_out() : this.on_mouseover(t)
            },
            on_touch_close: function(t) {
                this.on_mousemove(t.originalEvent)
            },
            log_impression: function(t) {
                o.Events.trigger("Capture:push", "tumblelog_popover", "impressions", {
                    post_type: "highlighted",
                    cached: !!t
                })
            },
            on_follow: function() {
                this.show_recommendations()
            },
            on_follow_hover: function(t) {
                if (t) {
                    var e = !!t.get("following");
                    this.popover_recommendations && !e && this.setup_recommendations(t.get("name"))
                }
            },
            on_unfollow: function() {
                this.animate_out()
            },
            on_peepr_open: function() {
                e.delay(e.bind(this.hide, this), 50)
            },
            setup_recommendations: function(t) {
                this.subviews.recommended_blogs || (this.subviews.recommended_blogs = new o.TumblelogPopover.Recommendations({
                    popover: this.$popover,
                    followed_blog: t,
                    recommendations_needed: this.is_poptica ? 4 : 3,
                    is_poptica: this.is_poptica
                }))
            },
            should_show_recommendations: function() {
                return !(!e.isEmpty(this.current_post) && this.current_post.get("sponsored") || !this.subviews.recommended_blogs || !this.subviews.recommended_blogs.has_recommendations || this.subviews.recommended_blogs.is_visible)
            },
            show_recommendations: function() {
                this.should_show_recommendations() && this.subviews.recommended_blogs.render()
            },
            on_navigation_menu_item_clicked: function() {
                this.animate_out()
            },
            on_toggle_navigation_menu: function(t) {
                this.is_menu_open = t || !1, this.$popover && this.$popover.length && this.$popover.toggleClass("nav_menu_open", this.is_menu_open), e.isEmpty(this.current_post) || o.Events.trigger("TumblelogPopover:click:menu", {
                    model: this.current_post,
                    loggingData: this.loggingData({
                        userAction: "popover_menu"
                    })
                })
            },
            track_engagement: function(t) {
                if (o.Utils && o.Utils.popover) {
                    var i = this.current_post;
                    e.isEmpty(i) && this.targetPost && (i = o.Posts.get(this.targetPost.data("post-id"))), o.Utils.popover.track_premium_engagement(t, i)
                }
            }
        });
        o.Prima.Mixins.loggingData.applyTo(s.prototype), o.TumblelogPopover = s
    }(jQuery, _, Backbone, Tumblr), /*! scripts/tumblelog_popover/views/tumblelog_info.js */
    function(t, e, i, o) {
        var s = i.View.extend({
            className: "tumblelog_info",
            events: {
                "click .follow": "on_follow_click",
                "mouseenter .follow": "on_follow_hover",
                "click .unfollow": "on_follow_click",
                "click .tumblelog_menu_btn": "on_menu_click",
                "click .ask": "on_ask_click",
                "click .fan_mail": "on_fan_mail_click",
                "click .toggle_spam": "on_spam_click",
                "click .toggle_suspended": "on_suspended_click",
                "click .toggle_nsfw": "on_nsfw_click",
                "click a.avatar": "on_avatar_click",
                "click .name a": "on_blog_name_click",
                mouseenter: "on_mouseenter"
            },
            initialize: function(i) {
                if (this.options = i || {}, this.template = e.template(this.options.template || t("#tumblelog_popover_info").html()), this.$popover = this.options.popover || t(), this.$parent = this.options.parent || this.$popover.find(".popover_inner"), this.is_recommendation = this.options.is_recommendation === !0, this.recommendation_data = this.options.recommendation_data || {}, this.on_close = this.options.on_close || t.noop, this.on_menu_toggle = this.options.on_menu_toggle || t.noop, this.min_load_time = this.options.min_load_time || 500, this.current_data = this.options.current_data || {}, this.hide_posts_on_unfollow = this.options.hide_posts_on_unfollow !== !1, this.is_user_mention = this.options.is_user_mention || !1, this.post = this.options.post || {}, this.is_mobile = e.has(document.documentElement, "ontouchstart"), this.is_disabled = !1, this.is_menu_open = !1, this.xhr = null, this.model = this.options.model || new o.Prima.Models.Tumblelog({
                        name: this.options.tumblelog
                    }), this.listenTo(this.model, "add", this.render), this.listenTo(this.model, "change", this.render), !e.isEmpty(this.current_data)) {
                    var s = this.model.toJSON();
                    e.extend(this.current_data, s), this.model.set(this.current_data, {
                        silent: !0
                    })
                }
                this.update_cache(), this.$el.addClass(this.model.get("name")), this.$parent.append(this.$el), this.render()
            },
            render: function() {
                var t = e.extend(this.model.toJSON(), {
                    show_menu: !this.is_recommendation
                });
                return this.$el.html(this.template(t)), this.update_cache(), this
            },
            close: function() {
                this.on_close(), this.xhr && (this.xhr.abort(), this.xhr = null), t(document).off(".tumblelog_popover_menu"), this.remove()
            },
            update_cache: function() {
                var t = this.model.toJSON(),
                    e = this.model.get("name");
                o.Utils.popover.cache[e] = {
                    timestamp: (new Date).getTime(),
                    data: JSON.stringify(t)
                }
            },
            open_dialog: function(i, o) {
                o = o || t.noop, this.is_disabled = !0, i.fail(e.bind(function() {
                    this.is_disabled = this.is_menu_open
                }, this)), i.done(e.bind(function() {
                    this.is_disabled = this.is_menu_open, o()
                }, this))
            },
            hide_posts: function() {
                o.Posts.whereBy({
                    tumblelog: this.model.get("name"),
                    sponsored: !1
                }).invoke("dismiss"), this.close()
            },
            show_menu: function() {
                this.is_menu_open = !0, this.is_disabled = !0, this.$popover.addClass("admin_menu_open")
            },
            hide_menu: function() {
                this.is_menu_open = !1, this.is_disabled = !1, this.$popover.removeClass("admin_menu_open")
            },
            on_follow_click: function(i) {
                if (i.preventDefault(), i.stopPropagation(), t(i.currentTarget).hasClass("unfollow"))
                    if (this.is_recommendation) this.model.save_following({
                        following: !1
                    }, {
                        source: "UNFOLLOW_SOURCE_TUMBLELOG_POPOVER_RECOMMENDATIONS",
                        from_popover: !0,
                        placement_id: this.post instanceof o.Prima.Models.Post && this.post.get("placement_id") || ""
                    });
                    else {
                        var s = o.TumblelogActions.confirm_unfollow({
                            tumblelog: this.model.get("name"),
                            avatar_url: this.model.get("avatar_url") || ""
                        });
                        this.open_dialog(s, e.bind(function() {
                            this.model.save_following({
                                following: !1
                            }, {
                                source: "UNFOLLOW_SOURCE_TUMBLELOG_POPOVER",
                                from_popover: !0,
                                placement_id: this.post instanceof o.Prima.Models.Post && this.post.get("placement_id") || ""
                            }), this.hide_posts_on_unfollow && this.hide_posts(), o.Utils.popover.track_premium_engagement("popover_unfollow", this.post)
                        }, this))
                    }
                else {
                    var n, r, a = this.is_recommendation ? "FOLLOW_SOURCE_TUMBLELOG_POPOVER_RECOMMENDATIONS" : "FOLLOW_SOURCE_TUMBLELOG_POPOVER";
                    this.post instanceof o.Prima.Models.Post && (r = this.post.get("placement_id"), n = this.post.get("pt")), this.model.save_following({
                        following: !0
                    }, {
                        source: a,
                        from_popover: !0,
                        placement_id: r,
                        pt: n
                    }), o.Utils.popover.track_premium_engagement("popover_follow", this.post), o.Events.trigger("TumblelogPopover:follow", this.model.get("name"))
                }
            },
            on_menu_click: function(i) {
                i.preventDefault(), this.is_menu_open || (this.show_menu(), t(document).on("mouseup.tumblelog_popover_menu", e.bind(this.on_menu_mouseup, this))), o.Utils.popover.track_premium_engagement("popover_menu", this.post)
            },
            on_menu_mouseup: function(e) {
                var i = o.Utils.popover.get_bounds(this.$popover.find(".tumblelog_menu_popover")),
                    s = !(i.left <= e.pageX && e.pageX <= i.right),
                    n = !(i.top <= e.pageY && e.pageY <= i.bottom);
                (s || n) && (t(document).off(".tumblelog_popover_menu"), this.hide_menu())
            },
            on_ask_click: function(e) {
                e.preventDefault();
                var i = t(e.currentTarget),
                    s = i.attr("data-tumblelog-name"),
                    n = "1" === i.data("anonymous-ask");
                o.Events.trigger("ask:form:open", {
                    recipient: s,
                    allow_anonymous: n
                }), this.close()
            },
            on_fan_mail_click: function(t) {
                if (e.isObject(o.FanMail)) {
                    var i = {
                        href: o.FanMail.make_url_from_tumblelog(this.model.get("name"))
                    };
                    t.preventDefault(), o.FanMail.show(i), this.close()
                }
            },
            on_spam_click: function(t) {
                t.preventDefault();
                var i = this.model.toggle_spam();
                i.success(e.bind(function(t) {
                    this.model.set("spam", !!t.spammer)
                }, this))
            },
            on_suspended_click: function(t) {
                t.preventDefault();
                var i = this.model.toggle_suspended();
                i.success(e.bind(function(t) {
                    this.model.set("suspended", !!t.suspended)
                }, this))
            },
            on_nsfw_click: function(t) {
                t.preventDefault();
                var i = this.model.toggle_nsfw();
                i.success(e.bind(function(t) {
                    this.model.set("nsfw", t.nsfw)
                }, this))
            },
            on_avatar_click: function(t) {
                o.Utils.popover.capture_tumblelog_click(t), o.Utils.popover.track_premium_engagement("popover_avatar", this.post)
            },
            on_blog_name_click: function(t) {
                o.Utils.popover.capture_tumblelog_click(t), o.Utils.popover.track_premium_engagement("popover_blog", this.post)
            },
            on_mouseenter: function(t) {
                o.Events.trigger("TumblelogPopover:mouseenter_tumblelog_info", this.model)
            },
            on_follow_hover: function(t) {
                this.is_recommendation || o.Events.trigger("TumblelogPopover:follow_hover", this.model)
            }
        });
        o.TumblelogPopover.Info = s
    }(jQuery, _, Backbone, Tumblr), /*! scripts/tumblelog_popover/views/recommendations.js */
    function(t, e, i, o) {
        var s = i.View.extend({
            className: "popover_inner recommended_blogs",
            initialize: function(s) {
                this.options = s || {}, this.is_poptica = this.options.is_poptica || !1, this.followed_blog = this.options.followed_blog || "", this.posts_insert_delay = this.options.posts_insert_delay || 50, this.posts_update_delay = this.options.posts_update_delay || 300, this.recommendations_needed = this.options.recommendations_needed || 3, this.$popover = this.options.popover || t(), this.$popover_wrapper = this.$popover.find(".popover_content_wrapper"), this.template = e.template(this.options.template || t("#recommended_blogs_template").html()), this.posts_template = e.template(this.options.posts_template || t("#highlighted_posts_template").html()), this.is_visible = !1, this.showing_posts = !1, this.has_recommendations = !1, this.subviews = {
                    blogs: [],
                    posts: null
                }, this.viewed = [], this.original_popover_height = 0;
                var n = i.Collection.extend({
                    model: o.Prima.Models.Tumblelog,
                    url: "/svc/related_blogs",
                    parse: e.bind(function(t) {
                        return e.isEmpty(t) || (this.has_recommendations = !0), t
                    }, this)
                });
                this.blogs = new n, this.fetch_tumblelog_data()
            },
            fetch_tumblelog_data: function() {
                this.blogs.fetch({
                    data: {
                        tumblelog: this.followed_blog,
                        minimum: this.recommendations_needed
                    },
                    merge: !0,
                    withFormKey: !0,
                    remove: !1
                })
            },
            render: function() {
                this.is_poptica && (this.original_popover_height = this.$popover.height(), this.$popover.css("height", this.original_popover_height)), this.is_visible || (this.$popover_wrapper.append(this.$el), this.is_visible = !0);
                var t = {
                    followed_blog: this.followed_blog
                };
                this.$popover.find(".recommended_blogs").html(this.template(t));
                var e = 1;
                return this.blogs.forEach(function(t) {
                    var i = new o.TumblelogPopover.Info({
                        popover: this.$popover,
                        parent: this.$el,
                        current_data: t.toJSON(),
                        model: t,
                        recommendation_data: {
                            rank: e,
                            recommendation_ct: this.blogs.length,
                            position: {}
                        },
                        is_recommendation: !0
                    });
                    i.recommendation_data.position = i.$el.offset(), e += 1, this.subviews.blogs.push(i)
                }, this), this.$popover.addClass("showing_recommendations"), this.after_render(), this
            },
            log_impressions: function() {
                var t = function() {
                        return window.location.pathname.split("/")[1]
                    },
                    i = 1;
                e.forEach(this.subviews.blogs, function(s) {
                    var n = s.model,
                        r = e.find(this.subviews.blogs, {
                            model: n
                        });
                    if (!e.isEmpty(r) && e.indexOf(this.viewed, n) === -1) {
                        this.viewed.push(n);
                        var a = (o.getRealNow || e.now)();
                        o.Events.trigger("Capture:push", "recommended_blog_impressions", "impressions", {
                            tumblelog_name: n.get("name"),
                            algorithm_id: "reblog_related",
                            page: t(),
                            ts: Math.floor(a / 1e3),
                            position: r.$el.offset(),
                            format: "RECOMMEND_FORMAT_TUMBLELOG_POPOVER",
                            rank: i
                        }), i += 1, this.viewed.push(n)
                    }
                }, this)
            },
            insert_posts: function(t) {
                if (!this.subviews.posts) {
                    this.subviews.posts = new o.TumblelogPopover.Posts({
                        popover: this.$popover,
                        parent: this.$el,
                        model: t,
                        on_bottom: this.is_poptica || this.$popover.hasClass("nipple_on_top")
                    }), this.$popover.one("transitionend webkitTransitionEnd MSTransitionEnd", this._after_insert_posts), setTimeout(this._after_insert_posts, 600);
                    var e = this;
                    setTimeout(function() {
                        e.$popover.addClass("slide_up")
                    }, this.posts_insert_delay), this.listenTo(o.Events, "TumblelogPopover:mouseenter_tumblelog_info", this.update_posts), this.listenTo(o.Events, "TumblelogPopover:mouseenter_posts", this.cancel_update_posts)
                }
            },
            _after_insert_posts: function() {
                o.Events.trigger("TumblelogPopover:inserted_posts")
            },
            update_posts: function(t) {
                if (this.subviews.posts || this.insert_posts(t), this.cancel_update_posts(), this.subviews.posts.model !== t) {
                    this.subviews.posts.$el.removeClass("blink");
                    var e = this;
                    this.queued_post_update = setTimeout(function() {
                        e.subviews.posts.$el.addClass("blink"), e.subviews.posts.update_posts(t)
                    }, this.posts_update_delay)
                }
            },
            cancel_update_posts: function() {
                this.queued_post_update && clearTimeout(this.queued_post_update)
            },
            after_render: function() {
                var i = t.Deferred();
                if (i.then(e.bind(this._after_animation, this)), this.$popover.one("animationend webkitAnimationEnd MSAnimationEnd", i.resolve), setTimeout(i.resolve, 600), this.log_impressions(), this.is_poptica) {
                    this.$popover.css("height", ""), this.$popover_wrapper.css("background-color", "#FFF");
                    var o = {
                        height: this.$popover.height() - this.original_popover_height
                    };
                    if (this.$popover.hasClass("up")) {
                        var s = parseInt(this.$popover.css("margin-top"));
                        o["margin-top"] = this.original_popover_height - o.height + s
                    }
                    this.$popover.css(o)
                }
            },
            _after_animation: function() {
                this.$popover.find(".popover_inner:not(.recommended_blogs)").remove(), this.$popover.removeClass("showing_recommendations"), this.insert_posts(e.last(this.blogs.models))
            }
        });
        o.TumblelogPopover.Recommendations = s
    }(jQuery, _, Backbone, Tumblr); /*! scripts/tumblelog_popover/views/poptica_info_popover.js */
var TumblrData = TumblrData || {};
Tumblr.TumblelogPopover || (Tumblr.TumblelogPopover = {}),
    function(t, e, i, o) {
        "use strict";
        var s = Tumblr.Popover.extend({
            template: e.template(t("#tumblelog_header_info_popover_template").html()),
            defaults: {
                auto_show: !1,
                skip_glass: !1,
                template_data: {},
                trigger: t(),
                standalone: !1,
                show_flag_button: !0,
                show_user_controls: !1,
                can_subscribe: !1,
                is_blocking: !1,
                blogSubHelpThreshold: 250
            },
            events: {
                "click .ask_menu_item": "__ask_menu_item_clicked",
                "click .fan_mail_menu_item": "__fan_mail_menu_item_clicked",
                "click .messaging_menu_item": "__messaging_menu_item_clicked",
                "click .archive_menu_item": "__archive_menu_item_clicked",
                "click .toggle_spam": "__toggle_spam_click",
                "click .toggle_suspended": "__toggle_suspended_click",
                "click .toggle_nsfw": "__toggle_nsfw_click",
                "click .likes": "__likes_menu_item_clicked",
                "click .block": "__block_click",
                "click .unblock": "__unblock_click",
                "click .flag_menu_item": "__flag_click",
                "click .panel_menu_item": "__panel_menu_item_clicked",
                "click [data-flag-subscribed-item]": "__toggleBlogSubscription",
                "click .help-slidedown": "__preventSubscribe",
                "mouseenter .web-subscribe-how-to": "_checkHelpNotificationHover",
                "mouseleave .web-subscribe-how-to": "_checkHelpNotificationHover"
            },
            __toggleBlogSubscription: function(t) {
                t.preventDefault();
                var i = new Tumblr.Prima.Models.Tumblelog({
                        name: this.model.get("name")
                    }),
                    o = e.bind(this._afterSubscriptionToggle, this, "success", i),
                    s = e.bind(this._afterSubscriptionToggle, this, "failure", i);
                i.toggleSubscription().then(o).otherwise(s)
            },
            _afterSubscriptionToggle: function(t, e) {
                if ("success" === t) {
                    var i = e.get("is_subscribed");
                    this.$subscriptionStatus.toggleClass("is-subscribed", i)
                }
                this.hide()
            },
            __panel_menu_item_clicked: function(t) {
                Tumblr.Events.trigger("TumblelogPopover:navigation_menu_item_clicked"), this.hide()
            },
            __block_click: function(t) {
                t.preventDefault();
                var i = {
                    blockedTumblelog: this.model.get("name")
                };
                Tumblr.Prima.Block.confirmBlock(i).then(e.bind(this.__onBlockConfirm, this)), Tumblr.Events.trigger("TumblelogPopover:navigation_menu_item_clicked"), this.hide()
            },
            __unblock_click: function(t) {
                t.preventDefault();
                var i = {
                    blockedTumblelog: this.model.get("name")
                };
                Tumblr.Prima.Block.unblock(i).then(e.bind(this.__onUnblockConfirm, this)), Tumblr.Events.trigger("TumblelogPopover:navigation_menu_item_clicked"), this.hide()
            },
            __onUnblockConfirm: function() {
                var t = new Tumblr.Prima.Models.Tumblelog({
                    name: this.model.get("name")
                });
                t.unblock().then(e.bind(this._afterUnblock, this))
            },
            _afterUnblock: function() {
                this.model.set("blocking", !1), this.trigger("change", this.model)
            },
            __onBlockConfirm: function() {
                var t = new Tumblr.Prima.Models.Tumblelog({
                    name: this.model.get("name")
                });
                t.block().then(e.bind(this._afterBlock, this))
            },
            _afterBlock: function() {
                this.model.set("blocking", !0), this._hide_posts(), this.options.targetPost && this.options.targetPost.addClass("is_flagged"), Tumblr.Prima.Events && Tumblr.Prima.Events.trigger("Kraken:blocks:block_added", {
                    loggingData: {
                        from: "popover"
                    }
                })
            },
            __flag_click: function(t) {
                t.preventDefault(), Tumblr.Events.trigger("abuseform:open", {
                    mode: "blogcard",
                    tumblelog: this.model.get("name")
                }), Tumblr.Events.trigger("Kraken:abuseform:open", {
                    mode: "blogcard",
                    tumblelog: this.model.get("name")
                }), this.hide()
            },
            __ask_menu_item_clicked: function(t) {
                t.preventDefault(), Tumblr.Events.trigger("ask:form:open", {
                    recipient: this.model.get("name"),
                    allow_anonymous: this.model.get("anonymous_asks")
                }), Tumblr.Events.trigger("TumblelogPopover:navigation_menu_item_clicked"), this.hide()
            },
            __messaging_menu_item_clicked: function(t) {
                t.preventDefault(t), Tumblr.Prima.Events.trigger("messaging:conversation:open:tumblelogs", [this.model], "blog-card"), this.hide()
            },
            __fan_mail_menu_item_clicked: function(t) {
                e.isObject(Tumblr.FanMail) && (t.preventDefault(), Tumblr.FanMail.show(null, {
                    href: Tumblr.FanMail.make_url_from_tumblelog(this.model.get("name"))
                }), Tumblr.Events.trigger("TumblelogPopover:navigation_menu_item_clicked"), this.hide())
            },
            __archive_menu_item_clicked: function(t) {
                Tumblr.Events.trigger("TumblelogPopover:navigation_menu_item_clicked"), this.hide()
            },
            __likes_menu_item_clicked: function(t) {
                Tumblr.Events.trigger("TumblelogPopover:navigation_menu_item_clicked"), this.hide()
            },
            __toggle_spam_click: function(t) {
                t.preventDefault();
                var i = this.model.toggle_spam();
                i.success(e.bind(function(t) {
                    this.model.set("spam", !!t.spammer)
                }, this)), Tumblr.Events.trigger("TumblelogPopover:navigation_menu_item_clicked"), this.hide()
            },
            __toggle_suspended_click: function(t) {
                t.preventDefault();
                var i = this.model.toggle_suspended();
                i.success(e.bind(function(t) {
                    this.model.set("suspended", !!t.suspended)
                }, this)), Tumblr.Events.trigger("TumblelogPopover:navigation_menu_item_clicked"), this.hide()
            },
            __toggle_nsfw_click: function(t) {
                t.preventDefault();
                var i = this.model.toggle_nsfw();
                i.success(e.bind(function(t) {
                    this.model.set("nsfw", t.nsfw)
                }, this)), Tumblr.Events.trigger("TumblelogPopover:navigation_menu_item_clicked"), this.hide()
            },
            __model_change: function() {
                var t = this.model.toJSON();
                this.$(".toggle_spam").toggleClass("is_flagged", !!t.spam), this.$(".toggle_nsfw").toggleClass("is_flagged", !!t.nsfw), this.model.hasChanged("can_subscribe") && this.$subscriptionStatus.toggleClass("can-subscribe", this.model.get("can_subscribe"));
                var e = this.model.has("blocking") ? this.model.get("blocking") : t.is_blocking;
                this.__blocking_change(e), this.model.hasChanged("is_subscribed") && this.$subscriptionStatus.toggleClass("is-subscribed", this.model.get("is_subscribed"))
            },
            __blocking_change: function(t) {
                this.$(".block").toggle(!t), this.$(".unblock").toggle(t)
            },
            __document_click: function(t) {
                if (Tumblr.Utils && Tumblr.Utils.popover) {
                    var e = Tumblr.Utils.popover.get_bounds(this.$popover),
                        i = !(e.left <= t.pageX && t.pageX <= e.right),
                        o = !(e.top <= t.pageY && t.pageY <= e.bottom);
                    (i || o) && this.hide()
                }
            },
            _hide_posts: function() {
                Tumblr.Posts.whereBy({
                    tumblelog: this.model.get("name"),
                    sponsored: !1
                }).invoke("dismiss")
            },
            _open_dialog: function(i, o) {
                o = o || t.noop, this.is_disabled = !0, i.fail(e.bind(function() {
                    this.is_disabled = this.is_menu_open
                }, this)), i.done(e.bind(function() {
                    this.is_disabled = this.is_menu_open, o()
                }, this))
            },
            _toggleHelpSlider: function(t, e) {
                this.$subscribeHowto.slideToggle(250), this.hasHoveredOverCopy && (this.hasHoveredOverCopy = !1)
            },
            _checkHelpIconHover: function(t) {
                "mouseleave" === t.type ? this.toggleTimeout = setTimeout(e.bind(this._toggleHelpSlider, this), this.options.blogSubHelpThreshold) : this.hasHoveredOverCopy ? clearTimeout(this.toggleTimeout) : this._toggleHelpSlider()
            },
            _checkHelpNotificationHover: function(t) {
                "mouseenter" === t.type ? (this.hasHoveredOverCopy = !0, clearTimeout(this.toggleTimeout)) : this.toggleTimeout = setTimeout(e.bind(this._toggleHelpSlider, this), this.options.blogSubHelpThreshold)
            },
            __preventSubscribe: function(t) {
                t.stopPropagation()
            },
            initialize: function(i) {
                if (this.options = e.extend({}, this.defaults, i), this.$trigger = i.trigger, this.targetPost = this.options.targetPost, this.model) {
                    this.$(".block").hide(), this.$(".unblock").hide();
                    var o = this.model.toJSON();
                    o.show_user_controls = this.options.show_user_controls, e.defaults(o, this.options), o.subscriptionStatus = o.can_subscribe ? "can-subscribe" : "", o.can_subscribe && o.is_subscribed && (o.subscriptionStatus += " is-subscribed"), this.$doc = t(document), this.$popover = t(this.template(o)).appendTo(this.$el).hide(), this.$subscribeHowto = this.$(".web-subscribe-how-to"), this.$subscriptionStatus = this.$("[data-flag-subscribed-item]"), this.listenTo(this.model, "change", this.__model_change), Tumblr.Popover.prototype.initialize.call(this, e.extend(this.options, {
                        popover: this.$popover
                    })), this.__blocking_change(o.is_blocking), this.$(".help-slidedown").hoverIntent({
                        over: e.bind(this._checkHelpIconHover, this),
                        out: e.bind(this._checkHelpIconHover, this),
                        sensitivity: 6
                    })
                }
            },
            show: function() {
                Tumblr.Events.trigger("TumblelogPopover:toggle_navigation_menu", !0), this.options.standalone || this.$doc.on("click.poptica_info_popover", e.bind(this.__document_click, this)), Tumblr.Popover.prototype.show.call(this)
            },
            hide: function() {
                return Tumblr.Events.trigger("TumblelogPopover:toggle_navigation_menu", !1), this.$doc.off(".poptica_info_popover"), Tumblr.Popover.prototype.hide.call(this)
            }
        });
        ! function() {
            function t(t) {
                o && o.hide();
                var e = t.options || {};
                o = new s(e)
            }

            function e() {
                o && o.show()
            }

            function i() {
                o && o.hide()
            }
            var o;
            Tumblr.Events.on("popticainfopopover:initialize", t), Tumblr.Events.on("popticainfopopover:show", e), Tumblr.Events.on("popticainfopopover:hide", i)
        }(), o.PopticaInfoPopover = s
    }(jQuery, _, Backbone, Tumblr.TumblelogPopover); /*! scripts/tumblelog_popover/views/poptica_header.js */
var TumblrData = TumblrData || {};
Tumblr.IndashBlog || (Tumblr.IndashBlog = {}), Tumblr.TumblelogPopover || (Tumblr.TumblelogPopover = {}),
    function(t, e, i, o) {
        var s = Tumblr.IndashBlog.HeaderCompact.extend({
            className: "poptica_header",
            defaults: {
                current_data: {},
                on_render: t.noop,
                popover: null,
                hide_posts_on_unfollow: !1,
                is_recommendation: !1,
                template_data: {
                    popover: !0
                },
                include_info_popover: !0
            },
            events: function() {
                return e.extend({}, Tumblr.IndashBlog.HeaderCompact.prototype.events, {
                    "click .avatar a": "__on_avatar_click",
                    "click a.blog_name": "__on_blog_name_click",
                    "mouseenter .follow": "__on_follow_hover",
                    mouseenter: "__on_mouseenter"
                })
            },
            __on_follow_click: function(i) {
                if (i.preventDefault(), i.stopPropagation(), t(i.currentTarget).hasClass("unfollow"))
                    if (this.is_recommendation) this.model.save_following({
                        following: !1
                    }, {
                        source: "UNFOLLOW_SOURCE_TUMBLELOG_POPOVER_RECOMMENDATIONS",
                        from_popover: !0,
                        pt: this.post instanceof Tumblr.Prima.Models.Post && this.post.get("pt") || ""
                    });
                    else {
                        var o = Tumblr.TumblelogActions.confirm_unfollow({
                            tumblelog: this.model.get("name"),
                            avatar_url: this.model.get("avatar_url") || ""
                        });
                        this._open_dialog(o, e.bind(function() {
                            this.model.save_following({
                                following: !1
                            }, {
                                source: "UNFOLLOW_SOURCE_TUMBLELOG_POPOVER",
                                from_popover: !0,
                                pt: this.post instanceof Tumblr.Prima.Models.Post && this.post.get("pt") || ""
                            }), this.hide_posts_on_unfollow && this._hide_posts(), Tumblr.Events.trigger("TumblelogPopover:track_engagement", "popover_unfollow")
                        }, this)), Tumblr.Events.trigger("TumblelogPopover:unfollow")
                    }
                else {
                    var s = this.is_recommendation ? "FOLLOW_SOURCE_TUMBLELOG_POPOVER_RECOMMENDATIONS" : "FOLLOW_SOURCE_TUMBLELOG_POPOVER",
                        n = {
                            source: s,
                            from_popover: !0,
                            pt: this.post instanceof Tumblr.Prima.Models.Post && this.post.get("pt") || ""
                        },
                        r = t(i.target).closest("[data-context-path]").data("context-path");
                    r && (n.tlt = r), this.model.save_following({
                        following: !0
                    }, n), Tumblr.Events.trigger("TumblelogPopover:track_engagement", "popover_follow"), Tumblr.Events.trigger("TumblelogPopover:follow", this.model.get("name"))
                }
            },
            __info_popover_button_clicked: function(t) {
                Tumblr.IndashBlog.HeaderCompact.prototype.__info_popover_button_clicked.call(this, t), Tumblr.Events.trigger("TumblelogPopover:track_engagement", "popover_menu")
            },
            __on_avatar_click: function(t) {
                Tumblr.Utils.popover.capture_tumblelog_click(t), Tumblr.Events.trigger("TumblelogPopover:track_engagement", "popover_avatar"), Tumblr.Events.trigger("TumblelogPopover:click:avatar", {
                    model: this.current_post,
                    loggingData: this.loggingData({
                        userAction: "popover_avatar"
                    })
                })
            },
            __on_blog_name_click: function(t) {
                Tumblr.Utils.popover.capture_tumblelog_click(t), Tumblr.Events.trigger("TumblelogPopover:track_engagement", "popover_blog"), Tumblr.Events.trigger("TumblelogPopover:click:blog", {
                    model: this.current_post,
                    loggingData: this.loggingData({
                        userAction: "popover_blog"
                    })
                })
            },
            __on_mouseenter: function(t) {
                Tumblr.Events.trigger("TumblelogPopover:mouseenter_tumblelog_info", this.model)
            },
            __on_follow_hover: function(t) {
                this.is_recommendation || Tumblr.Events.trigger("TumblelogPopover:follow_hover", this.model)
            },
            _update_cache: function() {
                Tumblr.Utils && Tumblr.Utils.popover && Tumblr.Utils.popover.cache_tumblelog_data(this.model.get("name"), this.model.toJSON())
            },
            initialize: function(t) {
                this.listenTo(this.model, "change", this._update_cache), Tumblr.IndashBlog.HeaderCompact.prototype.initialize.call(this, t), this.is_recommendation = this.options.is_recommendation, t.targetPost && (this.post = Tumblr.Posts.get(t.targetPost.data("post-id")))
            }
        });
        Tumblr.Prima.Mixins.loggingData.applyTo(s.prototype), o.PopticaHeader = s
    }(jQuery, _, Backbone, Tumblr.TumblelogPopover), /*! scripts/tumblelog_popover/views/posts.js */
    function(t, e, i, o) {
        var s = i.View.extend({
            className: "recent_posts",
            events: {
                "click a": "on_post_click",
                mouseenter: "on_mouseenter"
            },
            initialize: function(i) {
                i || (i = {}), this.template = e.template(t("#highlighted_posts_template").html()), this.$popover = i.popover || t(), this.$parent = i.parent || t(), this.min_load_time = i.min_load_time || 500, this.model = i.model || {}, this.dashboard_post = i.post || {}, this.model && (this.listenTo(this.model, "change:highlighted_posts", this.render), this.listenTo(this.model, "change:global_theme_params", this.render_inline_styles), this.render_loader(), this.render_inline_styles(), i.on_bottom ? this.$parent.append(this.$el) : this.$parent.prepend(this.$el), this.posts = this.model.get("highlighted_posts"), e.isUndefined(this.posts) ? this.fetch_posts() : this.render(!0))
            },
            fetch_posts: function() {
                this.model.fetch_popover_data({
                    is_tumblelog_popover: !0
                })
            },
            update_posts: function(t) {
                this.model = t, this.posts = this.model.get("highlighted_posts"), e.isUndefined(this.posts) ? this.fetch_posts() : this.render(!0)
            },
            render_loader: function() {
                var t = this.model.toJSON(),
                    e = !!o.Flags && o.Flags.bool("poptica_tumblelog_popovers");
                this.$el.html(this.template({
                    loader_color: e && t.global_theme_params ? t.global_theme_params.title_color : "#D9D9D9"
                }))
            },
            render_inline_styles: function() {
                var t = this.model.get("global_theme_params");
                t && (this.$el.css("background-color", t.background_color), this.$el.css("color", t.title_color))
            },
            render: function(t) {
                var i = this.posts || this.model.get("highlighted_posts");
                if (e.isArray(i)) {
                    var o = i.join("");
                    return i.length < 2 ? void setTimeout(e.bind(function() {
                        this.$popover.addClass("is_empty"), this.$el.html("")
                    }, this), this.min_load_time) : (this.$el.addClass("has_" + i.length + "_posts"), t === !0 ? void this.$el.addClass("is_cached").html(o) : (setTimeout(e.bind(function() {
                        this.$el.addClass("is_loaded").html(o)
                    }, this), this.min_load_time), this))
                }
            },
            on_post_click: function(t) {
                o.Utils.popover.capture_tumblelog_click(t), o.Utils.popover.track_premium_engagement("popover_post", this.dashboard_post), o.Events.trigger("TumblelogPopover:click:posts", {
                    model: this.current_post,
                    loggingData: this.loggingData({
                        userAction: "popover_posts"
                    })
                })
            },
            on_mouseenter: function(t) {
                o.Events.trigger("TumblelogPopover:mouseenter_posts")
            }
        });
        o.Prima.Mixins.loggingData.applyTo(s.prototype), o.TumblelogPopover.Posts = s
    }(jQuery, _, Backbone, Tumblr), /*! scripts/tumblr/utils/popover.js */
    Tumblr.Utils || (Tumblr.Utils = {}),
    function(t, e) {
        var i = {
            cache: {},
            cache_tumblelog_data: function(t, e) {
                t && _.isString(t) && _.isObject(e) && (e.customizable || (this.cache[t] = {
                    timestamp: (new Date).getTime(),
                    data: JSON.stringify(e)
                }))
            },
            get_session_storage: function(t, e) {
                if (window.sessionStorage && window.sessionStorage.length) {
                    t = t || "optica_header", e = e || 36e5;
                    var i = sessionStorage.getItem(t);
                    if (i) {
                        var o = JSON.parse(i),
                            s = (new Date).getTime();
                        for (key in o)(s - o[key].timestamp > e || !_.has(o[key], "data") || o[key].data.customizable) && delete o[key];
                        return this.cache = _.extend({}, this.cache, o), o
                    }
                }
            },
            sync_session_storage: function(t) {
                if (!(_.size(this.cache) < 1) && window.sessionStorage) {
                    t = t || "optica_header";
                    var e, i, o = _.size(this.cache),
                        s = 50;
                    if (o > s) {
                        e = 0;
                        for (i in this.cache) this.cache[i] && (e++, e <= o - s && delete this.cache[i])
                    }
                    try {
                        sessionStorage.setItem(t, JSON.stringify(this.cache))
                    } catch (n) {}
                }
            },
            clear_session_storage: function(t) {
                window.sessionStorage && window.sessionStorage.length && (t = t || "optica_header", sessionStorage.getItem(t) && sessionStorage.removeItem(t))
            },
            get_bounds: function(e) {
                var i = t(e),
                    o = {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    };
                return i.length && (o = i.offset(), o.right = o.left + i.width(), o.bottom = o.top + i.height()), o
            },
            capture_tumblelog_click: function(t) {
                Tumblr.CaptureTumblelogClick && Tumblr.CaptureTumblelogClick.track_click(t)
            },
            track_premium_engagement: function(t, e) {
                if (e instanceof Tumblr.Prima.Models.Post)
                    if (Tumblr.CapturePremiumRadar && e === Tumblr.radar.postModel && (e.get("placement_id") || e.get("premium_tracked"))) Tumblr.CapturePremiumRadar.force_track_radar_controls(t);
                    else if (e.get("sponsored") || e.get("premium_tracked")) {
                    var i = _.find(Tumblr.postsView.postViews, {
                        model: e
                    });
                    if (!i) return;
                    i.capture_web_instream.force_track_sponsored_controls(t)
                }
            }
        };
        e.popover = i
    }(jQuery, Tumblr.Utils), /*! scripts/color_utilities.js */
    function(t, e, i) {
        var o = {
            rgb_to_hex: function(t, e, i) {
                return "#" + ((1 << 24) + (t << 16) + (e << 8) + i).toString(16).slice(1)
            },
            hex_to_rgb: function(t) {
                t = new String(t).replace(/[^0-9a-f]/gi, ""), t.length < 6 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
                var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                return e ? {
                    r: parseInt(e[1], 16),
                    g: parseInt(e[2], 16),
                    b: parseInt(e[3], 16)
                } : null
            },
            rgb_to_hsv: function(t, e, i) {
                var o = Math.min(Math.min(t, e), i),
                    s = Math.max(Math.max(t, e), i),
                    n = s - o,
                    r = {
                        h: 6,
                        s: s ? (s - o) / s : 0,
                        v: s / 255
                    };
                return n ? s === t ? r.h += (e - i) / n : s === e ? r.h += 2 + (i - t) / n : r.h += 4 + (t - e) / n : r.h = 0, r.h = 60 * r.h % 360, r
            },
            hsv_to_rgb: function(t, e, i) {
                var o, s, n;
                if (e) {
                    o = s = n = 0;
                    var r = (t + 360) % 360 / 60,
                        a = i * e,
                        l = i - a,
                        h = a * (1 - Math.abs(r % 2 - 1));
                    r < 1 ? (o = a, s = h) : r < 2 ? (o = h, s = a) : r < 3 ? (s = a, n = h) : r < 4 ? (s = h, n = a) : r < 5 ? (n = a, o = h) : (n = h, o = a), o += l, s += l, n += l
                } else o = s = n = i;
                return {
                    r: Math.round(255 * o),
                    g: Math.round(255 * s),
                    b: Math.round(255 * n)
                }
            },
            hex_to_hsv: function(t) {
                t = new String(t).replace(/[^0-9a-f]/gi, ""), t.length < 6 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
                var o = i.ColorUtilities.hex_to_rgb(t),
                    s = i.ColorUtilities.rgb_to_hsv.apply(i.ColorUtilities, e.toArray(o));
                return s
            },
            hsv_to_hex: function(t, o, s) {
                var n = i.ColorUtilities.hsv_to_rgb(t, o, s),
                    r = i.ColorUtilities.rgb_to_hex.apply(i.ColorUtilities, e.toArray(n));
                return r
            },
            hex_brightness: function(t, e) {
                t = String(t).replace(/[^0-9a-f]/gi, ""), t.length < 6 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), e = e || 0;
                var i, o, s, n = parseInt(t, 16),
                    r = e < 0 ? 0 : 255,
                    a = e < 0 ? -e : e,
                    l = n >> 16,
                    h = n >> 8 & 255,
                    c = 255 & n;
                return i = Math.round((r - l) * a) + l, o = Math.round((r - h) * a) + h, s = Math.round((r - c) * a) + c, "#" + (16777216 + 65536 * i + 256 * o + s).toString(16).slice(1)
            },
            hsv_to_readable: function(t) {
                return "string" == typeof t && (t = i.ColorUtilities.hex_to_hsv(t)), t.s < .2 && t.v > .8 ? "#444" : "#FFF"
            },
            compare_colors: function(t, i, o) {
                var s = {
                    upper_bound: .8,
                    lower_bound: .2,
                    diff_bound: .1,
                    hue_bound: 15
                };
                e.extend(s, o);
                var n = s.upper_bound,
                    r = s.lower_bound,
                    a = s.diff_bound,
                    l = s.hue_bound,
                    h = Math.abs(t.h - i.h),
                    c = Math.abs(t.s - i.s),
                    d = Math.abs(t.v - i.v);
                return h <= a && c <= a && d <= a || c <= a && d <= a && (c >= n || c <= r && d >= n || d <= r && h <= l)
            }
        };
        i.ColorUtilities = o
    }(jQuery, _, Tumblr), /*! scripts/color_editor/views/_palette.js */
    Tumblr.ColorEditor || (Tumblr.ColorEditor = {}),
    function(t, e, i, o) {
        var s = i.View.extend({
            className: "color_palette",
            defaults: {
                colors: [],
                current_color: !1,
                current_page: 0,
                on_change: t.noop
            },
            events: {
                "click .swatch": "__color_click",
                "click .pagination a.dot": "__pagination_click",
                "click .pagination a.next": "__pagination_next_click",
                "click .pagination a.previous": "__pagination_previous_click"
            },
            __color_click: function(e) {
                e.preventDefault();
                var i = t(e.currentTarget);
                i.hasClass("selected") || (this.$(".swatch.selected").removeClass("selected"), i.addClass("selected"), this.update_color(i.data("color")))
            },
            __pagination_click: function(e) {
                e.preventDefault();
                var i = t(e.currentTarget);
                i.hasClass("selected") || (this.current_page = i.data("page"), this.render(!0))
            },
            __pagination_next_click: function(e) {
                e.preventDefault(), !t(e.currentTarget).hasClass("disabled") && this.current_page < this.page_count - 1 && (this.current_page++, this.render(!0))
            },
            __pagination_previous_click: function(e) {
                e.preventDefault(), !t(e.currentTarget).hasClass("disabled") && this.current_page > 0 && (this.current_page--, this.render(!0))
            },
            initialize: function(t) {
                this.options = e.extend({}, this.defaults, t), this.colors = this.options.colors, this.current_color = this.options.current_color, this.current_page = this.options.current_page, this.page_count = this.colors.length
            },
            render: function(t) {
                return this.$el.html(this.template({
                    colors: this.colors[this.current_page],
                    current_color: this.current_color,
                    page: this.current_page,
                    page_color: this.colors[this.current_page][4],
                    page_count: this.page_count
                })), this.$el.toggleClass("paginating", t || !1), this
            },
            update_color: function(t) {
                this.current_color = t, this.options.on_change(this.current_color)
            },
            template: e.template('            <%                var previous_arrow_class = "arrow previous icon_arrow_carrot_left";                previous_arrow_class += (page === 0) ? " disabled" : "";                var next_arrow_class = "arrow next icon_arrow_carrot_right";                next_arrow_class += (page === page_count - 1) ? " disabled" : "";            %>            <% _.each(colors, function(color) { %>                <a class="swatch<% if(color === current_color){ print(" selected") } %>" data-color="<%= color %>" style="background-color:<%= color %>"><span class="inner_border"></span></a>            <% }); %>            <% if(page_count > 1) { %>                <div class="pagination">                    <a class="<%= previous_arrow_class %>"></a>                    <% for(var i=0; i<page_count; i++) { %>                        <% if(i === page) { %>                            <a class="dot selected" data-page="<%= i %>" style="background-color:<%= page_color %>"></a>                        <% } else { %>                            <a class="dot" data-page="<%= i %>"></a>                        <% } %>                    <% } %>                    <a class="<%= next_arrow_class %>"></a>                </div>            <% } %>        ')
        });
        o.Palette = s
    }(jQuery, _, Backbone, Tumblr.ColorEditor), /*! scripts/color_editor/views/_picker.js */
    Tumblr.ColorEditor || (Tumblr.ColorEditor = {}),
    function(t, e, i, o) {
        var s = i.View.extend({
            className: "color_picker",
            defaults: {
                color: {
                    r: 0,
                    g: 0,
                    b: 0
                },
                debounce: 30,
                on_change: t.noop
            },
            events: {
                paste: "__paste",
                "mousedown .hue_selector": "__hue_mousedown",
                "mousedown .saturation_wrapper": "__saturation_mousedown",
                "focus .color_text": "__color_text_focus",
                "keyup .color_text": "__color_text_keyup"
            },
            __hue_mousedown: function(i) {
                this.hue_width = this.$hue.width();
                var o = (i.pageX - this.$hue.offset().left) / this.hue_width;
                this.hsv.h = Math.round(360 * o), this.update_hue(), t("body").on("mousemove.pickerhue", e.bind(e.throttle(this.__hue_mousemove, this.options.debounce), this)), t("body").on("mouseup.pickerhue", e.bind(this.__hue_mouseup, this))
            },
            __hue_mousemove: function(t) {
                var e = this.$hue.offset().left;
                if (t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0, t.returnValue = !1, !(t.pageX < e || t.pageX > e + this.hue_width)) {
                    var i = (t.pageX - this.$hue.offset().left) / this.hue_width;
                    return this.hsv.h = Math.round(360 * i), this.update_hue(), !1
                }
            },
            __hue_mouseup: function(e) {
                e.preventDefault(), e.stopPropagation(), t("body").off(".pickerhue")
            },
            __saturation_mousedown: function(i) {
                var o = this.$saturation.offset(),
                    s = i.pageX - o.left,
                    n = i.pageY - o.top;
                this.saturation_width = this.$saturation.width(), this.saturation_height = this.$saturation.height(), this.hsv.s = Math.max(0, Math.min(s / this.saturation_width, 1)), this.hsv.v = Math.max(0, Math.min(1 - n / this.saturation_height, 1)), this.update_saturation(), this.$saturation_indicator.addClass("dragging"), t("body").on("mousemove.pickersaturation", e.bind(e.throttle(this.__saturation_mousemove, this.options.debounce), this)), t("body").on("mouseup.pickersaturation", e.bind(this.__saturation_mouseup, this))
            },
            __saturation_mousemove: function(t) {
                var e = this.$saturation.offset(),
                    i = t.pageX - e.left,
                    o = t.pageY - e.top;
                return t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0, t.returnValue = !1, this.hsv.s = Math.max(0, Math.min(i / this.saturation_width, 1)), this.hsv.v = Math.max(0, Math.min(1 - o / this.saturation_height, 1)), this.update_saturation(), !1
            },
            __saturation_mouseup: function() {
                this.$saturation_indicator.removeClass("dragging"), t("body").off(".pickersaturation")
            },
            __color_text_keyup: function(e) {
                var i = t(e.currentTarget).val().replace(/[^0-9a-f]/gi, "");
                13 !== e.which || 3 !== i.length && 6 !== i.length || (this.hsv = Tumblr.ColorUtilities.hex_to_hsv(i), this.update_hue(), this.update_saturation(!1))
            },
            __paste: function(t) {
                t.preventDefault(), t.stopPropagation();
                var e = !1;
                if (window.clipboardData && window.clipboardData.getData ? e = window.clipboardData.getData("Text") : t.originalEvent.clipboardData && t.originalEvent.clipboardData.getData && (e = t.originalEvent.clipboardData.getData("text/plain")), e) {
                    e = String(e).replace(/[^0-9a-f]/gi, "");
                    var i = /(^[0-9A-F]{6}$)|(^[0-9A-F]{3}$)/i.test(e);
                    i && (this.hsv = Tumblr.ColorUtilities.hex_to_hsv(e), this.update_hue(), this.update_saturation(!1))
                }
                return !1
            },
            initialize: function(i) {
                this.options = e.extend({}, this.defaults, i), this.current_color = e.isObject(this.options.color) ? this.options.color : Tumblr.ColorUtilities.hex_to_rgb(this.options.color), this.hsv = Tumblr.ColorUtilities.rgb_to_hsv.apply(this, e.toArray(this.current_color)), this.current_hex = !1, this.hue_width = 0, this.saturation_height = 0, this.saturation_width = 0, this.$hue = t(), this.$hue_indicator = t(), this.$saturation = t(), this.$color = t(), this.$color_text = t()
            },
            render: function() {
                return this.$el.html(this.template({
                    color: this.current_color,
                    hue_position: this.hue_position
                })), this.$hue = this.$(".hue_selector"), this.$hue_indicator = this.$(".hue_selector .indicator"), this.$saturation = this.$(".saturation_wrapper"), this.$saturation_indicator = this.$(".saturation_wrapper .indicator"), this.$color = this.$(".color_value"), this.$color_text = this.$(".color_value .color_text"), this.update_hue(), this.update_saturation(!1), this
            },
            update_hue: function() {
                var t = e.toArray(Tumblr.ColorUtilities.hsv_to_rgb(this.hsv.h, 1, 1)),
                    i = "rgb(" + t.toString() + ")";
                this.$hue_indicator.css({
                    "background-color": i,
                    left: Math.round(this.hsv.h / 360 * 100) + "%"
                }), this.$saturation.css("background-color", i), this.update_color_value()
            },
            update_saturation: function(t) {
                t = t || !0, this.$saturation_indicator.css({
                    left: Math.round(100 * this.hsv.s) + "%",
                    top: Math.round(100 - 100 * this.hsv.v) + "%"
                }), t && this.update_color_value()
            },
            update_color_value: function() {
                var t = Tumblr.ColorUtilities.hsv_to_hex.apply(this, e.toArray(this.hsv)),
                    i = this.hsv.s,
                    o = this.hsv.v;
                this.$saturation_indicator.css("background-color", t), this.$color.css("background-color", t), this.$color_text.css("color", i < .2 && o > .8 ? "#444" : "#FFF").val(t), this.current_hex && t !== this.current_hex && this.options.on_change(t), this.current_hex = t
            },
            template: e.template('            <div class="hue_wrapper">                <div class="hue_selector">                    <div class="indicator"></div>                </div>                <div class="color_value">                    <input class="color_text" type="text" maxlength="7" />                </div>            </div>            <div class="saturation_wrapper">                <div class="saturation_inner">                    <div class="indicator"></div>                </div>            </div>        ')
        });
        o.Picker = s
    }(jQuery, _, Backbone, Tumblr.ColorEditor), /*! scripts/color_editor/views/color_editor_view.js */
    Tumblr.ColorEditor || (Tumblr.ColorEditor = {}),
    function(t, e, i, o) {
        var s = i.View.extend({
            className: "color_editor",
            colors: {
                red: ["#D95E40", "#FB4C16", "#FF4141", "#F0BFB6", "#FF7373"],
                yellow: ["#F2992E", "#FFD800", "#FFF231", "#DECBA4", "#E7EC6C"],
                green: ["#56BC8A", "#56BF4B", "#5ACDB3", "#9BCACA", "#BFE4A8"],
                blue: ["#529ECC", "#5AC9E1", "#5289DB", "#394ACB", "#6154C4"],
                purple: ["#A77DC2", "#B09BD5", "#D969C3", "#E1B7D2", "#FE3B80"],
                grayscale: ["#FFFFFF", "#F6F6F6", "#EEEEEE", "#CCCCCC", "#888888", "#666666", "#444444", "#222222", "#000000"]
            },
            defaults: {
                color: "#444444",
                debounce: 30,
                on_change: t.noop
            },
            events: {
                "click .palette_selector": "__palette_selector_click",
                "click .picker_selector": "__picker_selector_click"
            },
            __palette_selector_click: function(e) {
                e.preventDefault();
                var i = t(e.currentTarget);
                i.hasClass("selected") || (this.$(".color_selectors .selected").removeClass("selected"), i.addClass("selected"), i.hasClass("custom") ? this.render_custom_palette() : this.render_palette(i.data("color")))
            },
            __picker_selector_click: function(e) {
                e.preventDefault();
                var i = t(e.currentTarget);
                i.hasClass("selected") || (this.$(".color_selectors .selected").removeClass("selected"), i.addClass("selected"), this.render_picker())
            },
            __custom_palette_change: function(t) {
                this.custom_palette = t, this.$custom_palette_selector.html(this.custom_palette_template({
                    colors: t[0].slice(0, 3)
                })), this.$el.addClass("has_custom_palette"), this.is_custom_palette_open && this.render_custom_palette()
            },
            __color_change: function(t) {
                e.isObject(t) ? this.current_color = Tumblr.ColorUtilities.rgb_to_hex(t.r, t.g, t.b) : this.current_color = t, this.$picker_selector.css("border-color", this.current_color), this.options.on_change(this.current_color)
            },
            initialize: function(i) {
                this.options = e.extend({}, this.defaults, i), this.current_color = this.options.color, this.current_color_palette = !1, this.current_color_palette_page = 0, this.current_view = null, this.color_palette = null, this.custom_palette = null, this.is_custom_palette_open = !1, this.$color_view = t(), this.$custom_palette_selector = t(), this.$picker_selector = t(), Tumblr.Events && Tumblr.Flags.bool("indash_header_image_colors") && this.listenTo(Tumblr.Events, "coloreditor:custompalette", this.__custom_palette_change), this.generate_colors()
            },
            render: function() {
                return this.$el.html(this.template({
                    colors: this.colors
                })), this.$color_view = this.$(".color_view"), this.$custom_palette_selector = this.$(".palette_selector.custom"), this.$picker_selector = this.$(".picker_selector").css("border-color", this.current_color), this.$(".color_selectors .selected").removeClass("selected"), this.current_color_palette ? (this.$('.palette_selector[data-color="' + this.current_color_palette + '"]').addClass("selected"), this.render_palette(this.current_color_palette, this.current_color_palette_page)) : (this.$(".picker_selector").addClass("selected"), this.render_picker()), this
            },
            render_palette: function(t, i) {
                this.remove_current_view(), this.current_view = new o.Palette({
                    colors: this.color_palette[t],
                    current_color: this.current_color,
                    current_page: i || 0,
                    on_change: e.bind(this.__color_change, this)
                }), this.$color_view.html(this.current_view.render().el)
            },
            render_custom_palette: function() {
                this.custom_palette && (this.remove_current_view(), this.current_view = new o.Palette({
                    colors: this.custom_palette,
                    current_color: this.current_color,
                    current_page: 0,
                    on_change: e.bind(this.__color_change, this)
                }), this.$color_view.html(this.current_view.render().el), this.is_custom_palette_open = !0)
            },
            render_picker: function() {
                this.remove_current_view(), this.current_view = new o.Picker({
                    color: Tumblr.ColorUtilities.hex_to_rgb(this.current_color),
                    debounce: this.options.debounce,
                    on_change: e.bind(this.__color_change, this)
                }), this.$color_view.html(this.current_view.render().el)
            },
            remove_current_view: function() {
                this.current_view && (this.current_view.remove(), this.current_view = null), this.is_custom_palette_open = !1
            },
            generate_colors: function() {
                var t = {};
                e.each(this.colors, function(e, i) {
                    if (t[i] = [], "grayscale" === i) e.indexOf(this.current_color) > -1 && (this.current_color_palette = i, this.current_color_palette_page = 0), t[i].push(e);
                    else
                        for (var o = 0, s = e.length; o < s; o++) {
                            var n = this.get_color_variations(e[o]);
                            n.indexOf(this.current_color) > -1 && (this.current_color_palette = i, this.current_color_palette_page = o), t[i].push(n)
                        }
                }, this), this.color_palette = t
            },
            get_color_variations: function(t) {
                for (var e = [], i = (Tumblr.ColorUtilities.hex_to_hsv(t), .2), o = 4; o > 0; o--) {
                    var s = i * o;
                    e.push(Tumblr.ColorUtilities.hex_brightness(t, s))
                }
                e.push(t);
                for (var o = 1; o <= 4; o++) {
                    var s = -(i * o);
                    e.push(Tumblr.ColorUtilities.hex_brightness(t, s))
                }
                return e
            },
            template: e.template('            <div class="color_selectors">                <a class="palette_selector" data-color="red" style="background-color:<%= colors.red[0] %>" />                <a class="palette_selector" data-color="yellow" style="background-color:<%= colors.yellow[0] %>" />                <a class="palette_selector" data-color="green" style="background-color:<%= colors.green[0] %>" />                <a class="palette_selector" data-color="blue" style="background-color:<%= colors.blue[0] %>" />                <a class="palette_selector" data-color="purple" style="background-color:<%= colors.purple[0] %>" />                <a class="palette_selector grayscale" data-color="grayscale" style="background-color:#444" />                <a class="palette_selector custom" />                <a class="picker_selector" />            </div>            <div class="color_view"></div>        '),
            custom_palette_template: e.template('            <% _.each(colors, function(color) { %>                <span class="custom_color" style="background-color:<%- color %>"></span>            <% }) %>        ')
        });
        o.Editor = s
    }(jQuery, _, Backbone, Tumblr.ColorEditor), /*! scripts/application/ajax_request.js */
    function(t, e, i, o) {
        "use strict";
        for (var s = window.l10n_str || {}, n = [{
                useraction: "follow",
                url: "/svc/follow"
            }, {
                useraction: "unfollow",
                url: "/svc/unfollow"
            }, {
                useraction: "like",
                url: "/svc/like"
            }, {
                useraction: "unlike",
                url: "/svc/unlike"
            }, {
                useraction: "reply",
                url: "/svc/reply"
            }, {
                useraction: "report",
                url: "/svc/report"
            }], r = function(e, i) {
                return function(o, n) {
                    if (e) {
                        o = o || {}, n = n || {}, n.init && n.init();
                        var r = t.ajax({
                            url: e,
                            type: "POST",
                            data: {
                                form_key: t("#tumblr_form_key").attr("content"),
                                data: o
                            },
                            withFormKey: !0
                        });
                        return r.success(function() {
                            n.success && n.success(), Tumblr.Events && Tumblr.Events.trigger("useraction:xhr:success", i, o)
                        }), r.error(function(t) {
                            return t && 403 === t.status ? void(n.success && n.success()) : (n.error ? n.error() : Tumblr.Dialog && Tumblr.Dialog.alert(s.ajax_error), void(Tumblr.Events && Tumblr.Events.trigger("useraction:xhr:error", i, o)))
                        }), r.complete(function() {
                            n.complete && n.complete()
                        }), r
                    }
                }
            }, a = n.length, l = a - 1; l >= 0; l--) o[n[l].useraction] = r(n[l].url, n[l].useraction)
    }(jQuery, Backbone, _, Tumblr),
    function(t, e, i, o) {
        "use strict";
        o.Tabs = i.View.extend({
            el: "#user_tools",
            events: {
                "click #logout_button": "logout"
            },
            initialize: function() {},
            logout: function(i) {
                i.preventDefault();
                var o = t(i.currentTarget),
                    s = o.data("confirm-message"),
                    n = o.attr("href");
                if (e.isObject(Tumblr.Dialog)) return Tumblr.Dialog.confirm(s, e.bind(function() {
                    window.location.href = n
                })), !1
            }
        })
    }(jQuery, _, Backbone, Tumblr), /*! scripts/application/language_menu.js */
    function(t, e, i, o) {
        "use strict";
        o.LanguageMenu = Tumblr.Popover.extend({
            events: {
                click: "toggle",
                "click .popover_menu_item a": "select_language"
            },
            initialize: function() {
                this.$el.length && (Tumblr.Popover.prototype.initialize.apply(this, arguments), this.update_timezone(), this.update_position(), this.language_form = this.$el.find("#set_language"), this.language_form_type = this.language_form.attr("method"), this.language_form_url = this.language_form.attr("action"))
            },
            show: function() {
                Tumblr.Popover.prototype.show.call(this), this.$el.closest("#sidebar_footer_nav").addClass("show_popover"), this.update_position()
            },
            hide: function() {
                Tumblr.Popover.prototype.hide.call(this), this.$el.closest("#sidebar_footer_nav").removeClass("show_popover")
            },
            select_language: function(e) {
                var i = t(e.target);
                e.preventDefault(), t("#language_selected").val(i.attr("data-lang")), t("#language_switcher .current").removeClass("current"), this.set_language()
            },
            set_language: function() {
                var e = i(this.language_form.serializeArray()).map(function(t) {
                    return [t.name, t.value]
                }).zipObject().value();
                t.ajax({
                    type: this.language_form_type,
                    url: this.language_form_url,
                    data: e,
                    complete: function() {
                        window.location.reload()
                    }
                })
            },
            update_position: function() {
                var t = Math.floor(this.popover.outerWidth() / 2);
                this.popover.css({
                    marginLeft: -t + "px"
                })
            },
            update_timezone: function() {
                var t = new Date,
                    e = new Date(t.getFullYear(), 0, 1, 0, 0, 0, 0),
                    i = new Date(e.toGMTString().replace(/(.*)(\s\S+)/, "$1")),
                    o = Math.round((e - i) / 36e5);
                switch (this.$el.removeClass("americas europe_africa asia_pacific"), o) {
                    case -12:
                    case -11:
                    case -10:
                    case -9:
                    case -8:
                    case -7:
                    case -6:
                    case -4:
                    case -3:
                    case -2:
                    case -1:
                        this.$el.addClass("americas");
                        break;
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        this.$el.addClass("europe_africa");
                        break;
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                        this.$el.addClass("asia_pacific");
                        break;
                    default:
                        this.$el.addClass("americas")
                }
                return o
            }
        })
    }(jQuery, Backbone, _, Tumblr), /*! scripts/application/password_strength_meter.js */
    function(t, e, i, o) {
        "use strict";
        o.PasswordStrengthMeter = e.View.extend({
            defaults: {
                password: "#signup_password",
                email: "#signup_email",
                tumblelog: "#signup_username"
            },
            initialize: function(e) {
                this.options = e || {}, this.options = i.extend(this.defaults, this.options), this.$password_meter = t("#password_strength_meter"), this.$password = t(this.options.password), this.$email = t(this.options.email), this.$tumblelog = t(this.options.tumblelog), this.$password.length && (this.class_name = "password_strength_meter", this.password_meter_markup = '<div class="password_strength_meter inactive" id="password_strength_meter"><strong class="l5"></strong><strong class="l4 l5"></strong><strong class="l3 l4 l5"></strong><strong class="l2 l3 l4 l5"></strong><strong class="l1 l2 l3 l4 l5"></strong></div>', this.render(), this.test_password(), this.$password.on("keydown keyup focus blur", i.throttle(i.bind(function(t) {
                    this.last_checked !== this.get_password() && this.test_password(t)
                }, this), 250)))
            },
            render: function() {
                this.$password_meter.length || (this.$password.after(this.password_meter_markup), this.$password_meter = t("#password_strength_meter"))
            },
            set_inactive: function() {
                this.$password_meter.addClass("inactive")
            },
            set_active: function() {
                this.$password_meter.removeClass("inactive")
            },
            set_level: function(t) {
                switch (this.set_active(), t) {
                    case 1:
                        this.$password_meter[0].className = this.class_name + " level_1";
                        break;
                    case 2:
                        this.$password_meter[0].className = this.class_name + " level_2";
                        break;
                    case 3:
                        this.$password_meter[0].className = this.class_name + " level_3";
                        break;
                    case 4:
                        this.$password_meter[0].className = this.class_name + " level_4";
                        break;
                    case 5:
                        this.$password_meter[0].className = this.class_name + " level_5";
                        break;
                    default:
                        this.$password_meter[0].className = this.class_name
                }
            },
            test_password: function(t) {
                return this.last_checked = this.$password.val(), t && this.$password.val().length ? void this.get_password_strength() : void this.set_inactive()
            },
            update: function() {
                this.test_password()
            },
            get_email: function() {
                return this.$email.val()
            },
            get_password: function() {
                return this.$password.val()
            },
            get_username: function() {
                return this.$tumblelog.val()
            },
            get_form_data: function() {
                var t = {};
                return t.username = this.get_username(), t.email = this.get_email(), t.password = this.get_password(), t
            },
            get_password_strength: function() {
                this.pw_xhr && this.pw_xhr.abort(), this.pw_xhr = t.ajax({
                    url: "/svc/account/validation",
                    dataType: "json",
                    type: "POST",
                    withFormKey: !0,
                    data: this.get_form_data()
                }), this.pw_xhr.done(i.bind(function(t) {
                    var e = t.score || 0;
                    this.set_level(e), this.block_registration_step = !!t.reject_reason && t.reject_reason, delete this.pw_xhr
                }, this))
            }
        })
    }(jQuery, Backbone, _, Tumblr), /*! scripts/application/report_tumblelog.js */
    function(t, e, i, o) {
        "use strict";
        o.ReportTumblelogView = e.View.extend({
            el: "#report_tumblelog_bar",
            events: {
                "click .spam": "report_spam",
                "click .harassment": "report_harassment",
                "click .dismiss": "dismiss",
                mouseenter: "delay_dismiss",
                mouseleave: "timeout_dismiss"
            },
            initialize: function() {
                Tumblr.Events.on("block_tumblelog", i.bind(this.block_tumblelog, this))
            },
            block_tumblelog: function(t) {
                t.can_report && (this.tumblelog = t.tumblelog, this.animate_in(), this.timeout_dismiss())
            },
            animate_in: function() {
                this.$el.find("#report_tumblelog_with_name").show(), this.$el.find("#report_tumblelog_name").html(this.tumblelog), this.$el.fadeIn(300)
            },
            report_spam: function() {
                var t = this.tumblelog;
                Tumblr.report({
                    tumblelog: t,
                    reason: "1"
                }).done(function() {
                    Tumblr.Events.trigger("report_tumblelog", {
                        tumblelog: t,
                        reason: "spam"
                    })
                }).always(i.bind(function() {
                    this.dismiss()
                }, this))
            },
            report_harassment: function() {
                var t = this.tumblelog;
                Tumblr.report({
                    tumblelog: t,
                    reason: "2"
                }).done(function() {
                    Tumblr.Events.trigger("report_tumblelog", {
                        tumblelog: t,
                        reason: "harassment"
                    })
                }).always(i.bind(function() {
                    this.dismiss()
                }, this))
            },
            dismiss: function() {
                this.$el.fadeOut(300, i.bind(function() {
                    this.$el.find("#report_tumblelog_name").html(""), this.$el.find("#report_tumblelog_with_name").hide()
                }, this))
            },
            timeout_dismiss: function(t) {
                t = t || 3e3, clearTimeout(this.dismissTimeout), this.dismissTimeout = setTimeout(i.bind(function() {
                    this.dismiss()
                }, this), 3e3)
            },
            delay_dismiss: function() {
                clearTimeout(this.dismissTimeout)
            }
        })
    }(jQuery, Backbone, _, Tumblr), /*! scripts/application/full_height_no_posts_found.js */
    function(t, e, i, o) {
        "use strict";
        o.FullHeightNoPostsFound = e.View.extend({
            initialize: function() {
                if (this.$no_posts_found = t(".no_posts_found"), this.$left_column = t("#left_column"), this.$right_column = t("#right_column"), this.$no_posts_found.length && this.$left_column.length && this.$right_column.length) {
                    if ("0px" !== this.$right_column.css("min-height")) return;
                    var e = this.$left_column.height(),
                        i = this.$right_column.height(),
                        o = 0,
                        s = "+";
                    e < i ? (s = "+", o = i - e) : e > i && (s = "-", o = e - i, o >= 50 && (o = 0)), this.center_padding(o, s)
                }
            },
            center_padding: function(t, e) {
                if (t > 0 && ("+" === e || "-" === e)) {
                    var i = t / 2;
                    this.$no_posts_found.css("padding-top", e + "=" + i).css("padding-bottom", e + "=" + i)
                }
            }
        })
    }(jQuery, Backbone, _, Tumblr), /*! scripts/application/blog_name_helper.js */
    function(t, e, i, o) {
        "use strict";
        o.BlogNameHelper = {
            validate_tumblelog_name: function(t) {
                return !/^-|-$|[^\-a-z0-9]|tumblr/i.test(t)
            },
            has_starting_hyphen: function(t) {
                return /^-/.test(t)
            },
            has_ending_hyphen: function(t) {
                return /-$/.test(t)
            },
            clean_tumblelog_name: function(t) {
                return t.toLowerCase().replace(/[^\-a-z0-9]/g, "-").replace(/^-+|-+$/g, "").replace(/tumblr/gi, "")
            }
        }
    }(jQuery, Backbone, _, Tumblr), /*! scripts/application/fan_mail.js */
    function(t, e, i, o) {
        "use strict";
        o.FanMail = {
            show: function(e, o) {
                o = o || {};
                var s = !!i.has(o, "transparent_lightbox") && o.transparent_lightbox,
                    n = !!i.has(o, "href") && o.href,
                    r = !i.has(o, "show_loader") || o.show_loader;
                if (!n && e && e.href && (n = e.href), n += (n.indexOf("?") !== -1 ? "&" : "?") + "lightbox=true", s && (n += "&transparent_lightbox=true"), r) {
                    var a = t('<div id="send_fan_mail_lightbox_loader"></div>');
                    a.css({
                        zIndex: 4294967294,
                        position: "fixed",
                        top: "0px",
                        left: "0px",
                        right: "0px",
                        bottom: "0px",
                        width: "100%",
                        height: "100%",
                        background: "transparent url('/images/fan_mail/grid_bg_lightbox.png?709') center"
                    }), a.html('<div style="position:absolute; top:0; left:0; right:0; bottom:0; background:transparent center no-repeat url(\'/images/loading_big_fff_on_2e3133.gif?709\')"><img style="position:absolute; left:0; top:0; width:100%; height:100%; opacity:0.3;" src="/images/full_page_vignette.png?709"/></div>'), t("body").append(a)
                }
                var l = t('<iframe id="send_fan_mail_lightbox" scrolling="no" border="0" frameBorder="0"/>');
                l.attr("src", n), l.css({
                    zIndex: 4294967294,
                    display: "none",
                    position: "fixed",
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    bottom: "0px",
                    width: "100%",
                    height: "100%",
                    background: "transparent",
                    overflow: "hidden"
                }), l.load(function() {
                    t("#send_fan_mail_lightbox_loader").hide(), t("#send_fan_mail_lightbox").show()
                }), t("body").append(l)
            },
            hide: function() {
                t("#send_fan_mail_lightbox").hide().remove(), t("#send_fan_mail_lightbox_loader").hide().remove(), Tumblr.Events.trigger("fan_mail:form:hide")
            },
            sending: function() {
                t("#send_fan_mail_lightbox").hide().load(function() {
                    t("#send_fan_mail_lightbox_loader").hide(), t("#send_fan_mail_lightbox").show()
                }), t("#send_fan_mail_lightbox_loader").show()
            },
            make_url_from_tumblelog: function(t) {
                return "/send/" + t
            }
        }
    }(jQuery, Backbone, _, Tumblr), /*! scripts/application/activity_sparkline.js */
    function(t, e, i, o) {
        "use strict";
        o.ActivitySparkline = e.View.extend({
            el: "#dashboard_controls_open_blog .activity .count",
            initialize: function() {
                if (this.$el.length) {
                    var t = this.$el.data("sparkline");
                    if (i.isFunction(this.$el.sparkline)) try {
                        if ("object" != typeof t) throw "sparkline is not an object";
                        if (0 === i.max(t)) throw "sparkline has no interesting data";
                        return this.$el.sparkline(t, {
                            type: "line",
                            lineColor: "#ffffff",
                            fillColor: !1,
                            lineWidth: 4,
                            chartRangeMin: 0,
                            spotColor: !1,
                            minSpotColor: !1,
                            maxSpotColor: !1,
                            disableInteraction: !0,
                            width: "72px",
                            height: "30px"
                        }), void this.$el.find("canvas").css({
                            height: "15px",
                            width: "36px"
                        })
                    } catch (e) {}
                }
            }
        })
    }(jQuery, Backbone, _, Tumblr), /*! scripts/application/tumblelog_actions.js */
    function(t, e, i, o) {
        "use strict";
        var s = window.l10n_str || {};
        o.TumblelogActions = {
            confirm: function(e) {
                var i = t.Deferred();
                if (e = e || {}, !e.tumblelog) return i.reject();
                var o = e.avatar_url || "/images/anonymous_avatar_96.png";
                o && !o.match(/96\.png/) && (o = o.replace(/_(\d\d.?)\.png/, "_96.png"));
                var s = function() {
                        i.resolve(), t("body").removeClass("dialog_open")
                    },
                    n = function() {
                        i.reject(), t("body").removeClass("dialog_open")
                    };
                return Tumblr.Dialog.confirm({
                    text: e.confirm_text || "",
                    text_ok: e.text_ok || Tumblr.Dialog.__("Ok"),
                    text_cancel: Tumblr.Dialog.__("Nevermind"),
                    callback_ok: s,
                    callback_cancel: n,
                    templates: {
                        content: ['<div class="avatar_image" style="background-image: url(' + o + ');">', '<div class="avatar_frame"></div>', "</div>", '<span class="text"><%= text %></span>'].join("")
                    }
                }), i.promise()
            },
            confirm_ignore: function(e) {
                if (!e.tumblelog) {
                    var i = t.Deferred();
                    return i.reject()
                }
                var o = "",
                    n = e.tumblelog.match(/post\_id\:/) || e.tumblelog.match(/ip\:/);
                return o = n ? s.confirm_block_this_person : s.confirm_block.replace("%1$s", "<strong>" + e.tumblelog + "</strong>"), e.confirm_text || (e.confirm_text = o), e.text_ok = Tumblr.Dialog.__("Ignore"), this.confirm(e)
            },
            confirm_unfollow: function(e) {
                if (!e.tumblelog) {
                    var i = t.Deferred();
                    return i.reject()
                }
                return e.confirm_text = Tumblr.Dialog.__("Are you sure you want to unfollow %1$s?").replace("%1$s", "<strong>" + e.tumblelog + "</strong>"), e.text_ok = Tumblr.Dialog.__("Unfollow"), this.confirm(e)
            }
        }
    }(jQuery, Backbone, _, Tumblr), /*! scripts/application/notes_and_notifications/base_view.js */
    function(t, e, i, o) {
        "use strict";
        o.NotesBaseView = e.View.extend({
            ignore: function(e) {
                e.preventDefault(), t("body").addClass("dialog_open");
                var i = this.tumblelog,
                    o = Tumblr.TumblelogActions.confirm_ignore({
                        tumblelog: i,
                        avatar_url: t(e.delegateTarget).find(".avatar").attr("src")
                    });
                return o.done(function() {
                    Tumblr.Events.trigger("block_tumblelog", {
                        tumblelog: i,
                        can_report: !0
                    })
                }), !1
            },
            block: function(e) {
                e.preventDefault(), e.stopPropagation(), t("body").addClass("dialog_open");
                var o = {
                    blockedTumblelog: this.tumblelog
                };
                Tumblr.Prima.Block.confirmBlock(o).then(i.bind(this._blockConfirmed, this))
            },
            _blockConfirmed: function() {
                var t = new Tumblr.Prima.Models.Tumblelog({
                    name: this.tumblelog
                });
                t.block().then(i.bind(this._afterBlock, this))
            },
            _afterBlock: function() {
                Tumblr.Prima.Events.trigger("block_tumblelog", {
                    tumblelog: this.tumblelog,
                    can_report: !1
                }), Tumblr.Prima.Events.trigger("Kraken:blocks:block_added", {
                    loggingData: {
                        from: "note"
                    }
                })
            }
        })
    }(jQuery, Backbone, _, Tumblr), /*! scripts/application/notes_and_notifications/notification_view.js */
    function(t, e, i, o) {
        "use strict";
        var s = window.l10n_str || {};
        o.NotificationView = Tumblr.NotesBaseView.extend({
            events: {
                'click [data-action="ignore"]': "ignore",
                'click [data-action="block"]': "block",
                "mousedown .notification_inner": "before_notification_click",
                "mouseup .notification_inner": "after_notification_click",
                "click .notification_inner": "notification_click",
                "click .notification_follow_button": "notification_follow",
                "click .photo_reply_image": "notification_photo_reply_image",
                "mouseenter .notification .block": "notification_block_hover",
                "mouseleave .notification .block": "notification_block_hover",
                "mouseenter .control": "control_hover_in",
                "mouseleave .control": "control_hover_out"
            },
            initialize: function() {
                this.tumblelog = this.$el.find("a.block").attr("data-tumblelog"), Tumblr.Events.on("block_tumblelog", i.bind(this.tumblelog_block, this)), this.$el.find("a.block").length && this.$el.addClass("can_ignore")
            },
            tumblelog_block: function(t) {
                this.tumblelog === t.tumblelog && (this.$el.addClass("ignored").addClass("no_active").addClass("no_hover").removeClass("can_ignore"), this.$el.find(".block").remove(), this.$el.unbind())
            },
            update: function() {
                this.$el.find(".notification .notification_text").each(function(e, i) {
                    var o = t(i);
                    o.find("a").length > 1 && o.addClass("underline_links")
                }), this.$el.find(".notification a.block").each(function(e, i) {
                    var o = t(i);
                    o.closest(".notification").addClass("can_ignore")
                })
            },
            before_notification_click: function(e) {
                var i = t(e.target);
                (i.is(".photo_reply_image") || i.is(".photo_reply_image_container")) && this.$el.addClass("no_active")
            },
            after_notification_click: function(e) {
                var i = t(e.target);
                (i.is(".photo_reply_image") || i.is(".photo_reply_image_container")) && this.$el.removeClass("no_active")
            },
            notification_click: function(e) {
                var i = t(e.target);
                if (!i.is(".photo_reply_image_container")) {
                    e.stopPropagation(), e.preventDefault();
                    var o = this.$(".username");
                    if (o) {
                        var s = o.data("peepr");
                        if (s) {
                            var n = s.tumblelog,
                                r = s.postId;
                            return void Tumblr.Events.trigger("peepr-open-request", {
                                tumblelog_name: n,
                                post_id: r
                            })
                        }
                    }
                    var a = o.attr("href");
                    a || 1 !== this.$el.find("a").length || (a = this.$el.find("a").attr("href")), a && window.open(a)
                }
            },
            notification_follow: function(e) {
                e.stopPropagation(), e.preventDefault();
                var o = t(e.currentTarget);
                o.addClass("animated").addClass("poof"), window.setTimeout(i.bind(function() {
                    o.parent().remove(), this.$el.removeClass("has_follow"), o.addClass("final_state")
                }, this), 1e3), Tumblr.follow({
                    tumblelog: o.attr("data-tumblelog-name"),
                    source: "FOLLOW_SOURCE_DASHBOARD_NOTIFICATION"
                }, {
                    success: function() {
                        var e = t('[href="' + o.attr("data-tumblelog-name") + '"]');
                        e.hide()
                    },
                    error: function() {
                        Tumblr.Dialog.alert(s.ajax_error)
                    }
                })
            },
            notification_photo_reply_image: function(e) {
                var i = t(e.target);
                e.stopPropagation(), e.preventDefault(), Tumblr.Lightbox.init([{
                    high_res: i.attr("src"),
                    low_res: i.attr("src"),
                    width: 500
                }])
            },
            notification_block_hover: function() {},
            control_hover_in: function() {
                this.$el.addClass("control_hover")
            },
            control_hover_out: function() {
                this.$el.removeClass("control_hover")
            }
        })
    }(jQuery, Backbone, _, Tumblr), /*! scripts/application/notes_and_notifications/notifications_view.js */
    function(t, e, i, o) {
        var s = i.get(Tumblr, "Prima.Utils.CanvasTools");
        o.Notifications = e.View.extend({
            el: "#posts",
            events: {
                "click .notification_dismiss": "notification_dismiss"
            },
            initialize: function() {
                "AfterAutoPaginationQueue" in window && window.AfterAutoPaginationQueue.push(i.bind(this.updateViews, this)), this.updateViews(), this.$el.find(".notification .notification_text").each(function(e, i) {
                    var o = t(i);
                    o.find("a").length > 1 && o.addClass("underline_links")
                }), this.pixelateAndShowAvatars()
            },
            pixelateAndShowAvatars: function() {
                s.drawPixelatedImages(this), this.$el.find(".pixelated-avatar").removeClass("hide").addClass("show")
            },
            updateViews: function() {
                this.$el.find(".notification:not([data-view-exists])").each(function(e, i) {
                    var o = t(i);
                    o.attr("data-view-exists") || (new Tumblr.NotificationView({
                        el: i
                    }), o.attr("data-view-exists", !0))
                })
            },
            notification_dismiss: function(e) {
                e.stopPropagation(), e.preventDefault();
                var i = t(e.target),
                    o = i.parents(".notification"),
                    s = o.data("cookie");
                if (s) {
                    s = s.split("|");
                    var n = s[0] || "",
                        r = s[1] || "",
                        a = parseInt(s[2], 10) || null;
                    n && Tumblr.Cookie.set(n, r, a)
                }
                var l = o.data("ajax");
                l && t.get(l), o.css("display", "none")
            }
        })
    }(jQuery, Backbone, _, Tumblr), /*! scripts/application/buttons_panos.js */
    function(t, e, i, o) {
        "use strict";
        o.Panos = {
            init: function() {
                t("#posts").on("click", ".panorama", function(e) {
                    if (!(e.shiftKey || e.ctrlKey || e.altKey || e.metaKey)) {
                        var i = t(e.target).closest(".panorama");
                        i.hasClass("with_clickthru") && "zoomer" !== e.target.className || (e.stopImmediatePropagation(), e.preventDefault(), i.panorama({
                            lightbox: !0
                        }))
                    }
                })
            }
        }
    }(jQuery, Backbone, _, Tumblr), /*! scripts/application/custom_resize_anchor.js */
    function(t, e, i, o) {
        "use strict";
        var s = function(e, i) {
            return this instanceof s ? (this.el = "string" == typeof e ? t(e).get(0) : e, this.$el = t(e), this.options = i, this.$el.data("resizeAnchor") ? this.$el.data("resizeAnchor") : (this.$el.data("resizeAnchor", this), this.metadata = this.$el.data("plugin-options"), this.config = t.extend({}, s.defaults, this.options, this.metadata), this.config.resize = this.$el.css("resize") || "both", this.config.create_container && (this.$container = t("<div/>").addClass(this.config.container_class).insertBefore(this.$el), this.$container.append(this.$el), this.$clearfix = t("<div/>").addClass(this.config.clearfix_class).insertAfter(this.$container)), this.$anchor = t("<span/>").attr({
                onclick: "return false;",
                tabindex: -1
            }).addClass(this.config.anchor_class).insertAfter(this.$el), this.anchor_visibility(), this.resize_start = t.proxy(this._resize_start, this), this.resize_move = t.proxy(this._resize_move, this), this.resize_end = t.proxy(this._resize_end, this), this.$anchor.on("mousedown", this.resize_start), this.$parent = t(window), s.register(this), this)) : new s(e, i)
        };
        s.prototype = {
            __event_position: function(t) {
                var e, i;
                return e = t.pageX, i = t.pageY, {
                    x: e,
                    y: i
                }
            },
            _resize_start: function(t) {
                this.start_width = this.$el.outerWidth(), this.start_height = this.$el.outerHeight(), this.start_position = this.__event_position(t), this.$parent.on("mousemove", this.resize_move), this.$parent.on("mouseup", this.resize_end), t.preventDefault()
            },
            _resize_move: function(t) {
                switch (this.current_position = this.__event_position(t), this.config.resize) {
                    case "vertical":
                        this.set_height(this.current_position.y - this.start_position.y + this.start_height);
                        break;
                    case "horizontal":
                        this.set_width(this.current_position.x - this.start_position.x + this.start_width);
                        break;
                    case "both":
                        this.set_size(this.current_position.x - this.start_position.x + this.start_width, this.current_position.y - this.start_position.y + this.start_height);
                        break;
                    case "none":
                }
            },
            _resize_end: function(t) {
                this.$parent.off("mousemove", this.resize_move), this.$parent.off("mouseup", this.resize_end)
            },
            anchor_visibility: function() {
                "none" === this.config.resize ? this.$anchor.hide() : this.$anchor.show()
            },
            set_width: function(t) {
                this.$el.css("width", Math.max(0, t))
            },
            set_height: function(t) {
                this.$el.css("height", Math.max(0, t))
            },
            set_size: function(t, e) {
                this.$el.css({
                    width: Math.max(0, t),
                    height: Math.max(0, e)
                })
            },
            destroy: function() {
                this.$anchor.remove(), this.config.create_container && (this.$el.insertBefore($container), this.$container.remove(), this.$clearfix.remove())
            }
        }, s.instances = [], s.defaults = {
            container_class: "resize_textarea_container",
            clearfix_class: "resize_textarea_clearfix",
            anchor_class: "resize_textarea_anchor",
            create_container: !0
        }, s.register = function(t) {
            this.instances.push(t)
        }, s.destroy_all = function() {
            for (var t = 0; t < this.instances.length; t++) this.instances[t].destroy()
        }, t.fn.resizeanchor = function(t) {
            return this.each(function() {
                new s(this, t)
            })
        }, o.ResizeAnchor = s
    }(jQuery, Backbone, _, Tumblr), /*! scripts/application/autoexpand_textarea.js */
    function(t, e, i, o) {
        "use strict";
        var s = function(e, i) {
            if (!(this instanceof s)) return new s(e, i);
            this.el = "string" == typeof e ? t(e).get(0) : e, this.$el = t(e), this.options = i, this.metadata = this.$el.data("plugin-options"), this.config = t.extend({}, s.defaults, this.options, this.metadata);
            var o = parseInt(this.$el.css("lineHeight"), 10);
            return this.minHeight = this.oldHeight = this.config.minHeight ? this.config.minHeight : this.$el.height(), this.maxHeight = !!this.config.maxHeight && this.config.maxHeight, this.padder = o, this.$el.css("min-height", this.minHeight), this.$el.each(t.proxy(function(t) {
                this.create_shadow(t)
            }, this)), this.events = {
                __input: t.proxy(this.__input, this),
                __mouseup: t.proxy(this.__mouseup, this)
            }, this.$el.on("input", this.events.__input), this.$el.on("mouseup", this.events.__mouseup), this.update(this.$el), s.register(this), this
        };
        s.prototype = {
            __input: function(e) {
                var i = t(e.currentTarget);
                this.update(i)
            },
            __mouseup: function(e) {
                var i = t(e.currentTarget);
                this.oldHeight = i.outerHeight(), this.oldHeight >= this.maxHeight && (this.maxHeight = this.oldHeight)
            },
            create_shadow: function(e) {
                this.$shadow = t("." + this.config.shadowClass).length ? t("." + this.config.shadowClass) : t("<div/>", {
                    "class": this.config.shadowClass
                }), this.$shadow.css({
                    position: "absolute",
                    top: -1e4,
                    left: -1e4,
                    width: this.$el.width(),
                    fontSize: this.$el.css("fontSize"),
                    fontFamily: this.$el.css("fontFamily"),
                    fontWeight: this.$el.css("fontWeight"),
                    lineHeight: this.$el.css("lineHeight")
                }).appendTo(document.body)
            },
            replace_value: function(t) {
                return t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;").replace(/\n$/, "<br/>&nbsp;").replace(/\n/g, "<br/>")
            },
            update: function(t) {
                var e = this.replace_value(t.val());
                this.$shadow.css("width", this.$el.width()), this.$shadow.html(e);
                var i = Math.max(this.$shadow.height() + this.padder, this.oldHeight);
                this.maxHeight && i < this.maxHeight || !this.maxHeight ? this.$el.css("height", i) : this.$el.css("height", this.maxHeight)
            },
            destroy: function() {
                this.$shadow.remove(), this.$el.off("input", this.events.__input), this.$el.off("mouseup", this.events.__mouseup)
            }
        }, s.instances = [], s.defaults = {
            shadowClass: "autoexpand_shadow",
            minHeight: !1,
            maxHeight: 400
        }, s.register = function(t) {
            this.instances.push(t)
        }, s.destroy_all = function() {
            for (var t = 0; t < this.instances.length; t++) this.instances[t].destroy()
        }, t.fn.autoexpand = function(t) {
            return this.each(function() {
                new s(this, t)
            })
        }, o.AutoExpand = s
    }(jQuery, Backbone, _, Tumblr), /*! scripts/application/event_relay.js */
    function(t, e, i, o) {
        "use strict";
        var s = function(e, i) {
            return this instanceof s ? (this.el = "string" == typeof e ? t(e).get(0) : e, this.$el = t(e), this.options = i, this.metadata = this.$el.data("plugin-options"), this.config = t.extend({}, s.defaults, this.options, this.metadata), this.config.event && (this.config.events = this.config.event), this.config.selector && (this.config.child_selector = this.config.selector), this.$relay_targets = t(this.$el.find(this.config.child_selector)).add(t(this.config.global_selector)), this.$el.addClass(this.config.relay_class), this.$relay_targets.addClass(this.config.target_class), this.relay = t.proxy(this.__relay, this), this.events = {}, t.each(this.config.events.split(","), t.proxy(function(t, e) {
                this.add_event(e)
            }, this)), this.$el.data("eventRelayObject", this), s.register(this), this) : new s(e, i)
        };
        s.prototype = {
            __relay: function(t) {
                this.__is_relay_element(t) && (t.stopPropagation(), this.$relay_targets.not(t.target).trigger(t))
            },
            __is_relay_element: function(t) {
                return this.$el.is(t.currentTarget)
            },
            add_event: function(t) {
                this.events[t] = !0, this.$el.on(t, this.relay)
            },
            remove_event: function(t) {
                this.events[t] = !1, this.$el.off(t, this.relay)
            },
            destroy: function(e) {
                t.each(this.events, t.proxy(function(t) {
                    this.remove_event(t)
                }, this)), e || s.unregister(this)
            }
        }, s.defaults = {
            events: "click",
            child_selector: !1,
            global_selector: !1,
            relay_class: "click_relay",
            target_class: "click_relay_target"
        }, s.instances = [], s.register = function(t) {
            this.instances.push(t)
        }, s.unregister = function(t) {
            this.instances.splice(this.instances.indexOf(t), 1)
        }, s.destroy_all = function() {
            for (var t = 0; t < this.instances.length; t++) this.instances[t].destroy(!0);
            this.instances = []
        }, t.fn.eventrelay = function(t) {
            return this.each(function() {
                new s(this, t)
            })
        }, o.EventRelay = s
    }(jQuery, Backbone, _, Tumblr), /*! scripts/application/post_draggable_tags.js */
    function(t, e, i, o) {
        "use strict";
        o.DraggableTags = e.View.extend({
            el: "#posts",
            events: {
                "mouseover .post_footer_links .tags": "mouseover",
                "mousedown .post_footer_links .tags.draggable": "mousedown",
                mousemove: "mousemove"
            },
            initialize: function() {
                t("body").on("mouseup", i.bind(this.mouseup, this))
            },
            mouseover: function(t) {
                var e = this.$(t.currentTarget),
                    i = e.parents(".post_footer_links"),
                    o = i.width(),
                    s = i.find(".source_url").width();
                this.max_width = o, s && (this.max_width = o - s + 8), e.width() > this.max_width && e.addClass("draggable"), t.preventDefault(), t.stopPropagation()
            },
            mousedown: function(t) {
                this.$dragging = this.$(t.currentTarget).addClass("dragging"), this.mouse_down_left = t.offsetX || t.clientX - this.$(t.currentTarget).offset().left, t.preventDefault(), t.stopPropagation()
            },
            mousemove: function(t) {
                this.$dragging && (this.$dragging.offset({
                    left: t.pageX - this.mouse_down_left
                }), t.preventDefault(), t.stopPropagation())
            },
            mouseup: function(t) {
                if (null != this.$dragging) {
                    this.$dragging.removeClass("dragging");
                    var e = parseInt(this.$dragging.css("left"), 10),
                        i = this.$dragging.width();
                    (e > 0 || e < this.max_width - i) && this.$dragging.animate({
                        left: "0"
                    }), this.$dragging = null, t.preventDefault(), t.stopPropagation()
                }
            }
        })
    }(jQuery, Backbone, _, Tumblr), /*! scripts/application/post_inline_image_toggle.js */
    function(t, e, i, o) {
        "use strict";
        o.PostInlineImageToggle = e.View.extend({
            events: {
                "click .post_content .external-image-wrapper": "show_all_external_images"
            },
            defaults: {
                namespace: "external-inline-images"
            },
            initialize: function(t) {
                this.options = i.defaults(t || {}, this.defaults)
            },
            show_all_external_images: function(t) {
                var e = this.$(t.currentTarget).parents(".post_content"),
                    o = e.find(".external-image-wrapper");
                i.forEach(o, this._show_external_image, this)
            },
            _show_external_image: function(e) {
                var i = this.$(e),
                    o = i.data("src"),
                    s = i.data("loading-text"),
                    n = t("<img>"),
                    r = t("<p>");
                r.append(n), i.html(s), n.load(function() {
                    i.replaceWith(r)
                }), n.attr("src", o)
            }
        })
    }(jQuery, Backbone, _, Tumblr), /*! scripts/application/post_video_embed_toggle.js */
    function(t, e, i, o) {
        "use strict";
        o.PostVideoEmbedToggle = e.View.extend({
            events: {
                "click .video_preview": "show_video"
            },
            show_video: function(e) {
                var i = t(e.currentTarget),
                    o = i.closest(".post"),
                    s = o.find(".post_media"),
                    n = s.find(".video_embed"),
                    r = s.find(".video_preview"),
                    a = s.find(".video"),
                    l = o.find(".video_preview").data("permalink"),
                    h = s.find(".video_embed_code").val();
                return "blank" === i.data("render-context") ? (window.open(l, "_blank"), !1) : (r.is(":visible") && (n.html(h), r.hide(), a.show()), this.track_view(!0), !1)
            },
            track_view: function(t) {
                Tumblr.Events.trigger("Capture:push", "embed_interaction", "click", t ? "static" : "normal"), i.isUndefined(window._gaq) || window._gaq.push(["_trackEvent", "dashboard_video", "click", t ? "static" : "normal"])
            }
        })
    }(jQuery, Backbone, _, Tumblr), /*! scripts/application/post_private_share.js */
    function(t, e, i, o) {
        "use strict";
        o.SharePrivatePost = e.View.extend({
            el: "#posts",
            events: {
                "click .share_private": "toggle"
            },
            toggle: function(e) {
                e.preventDefault();
                var i = t(e.currentTarget).parents("li").attr("data-post-id"),
                    o = t("#share_" + i);
                o.toggle()
            }
        })
    }(jQuery, Backbone, _, Tumblr), /*! scripts/application/postmessage_listener.js */
    function(t, e, i, o) {
        "use strict";
        o.LoggingPostMessage = e.View.extend({
            initialize: function() {
                this._listen()
            },
            handler_embed_focus: function(t) {
                i.isObject(t) && t.service_name && t.post_id && Tumblr.Events.trigger("post:embed:focus", {
                    embedData: t,
                    loggingData: {
                        postData: this.getPostData(t.post_id),
                        service: t.service_name
                    }
                })
            },
            getPostData: function(e) {
                return this.postData || (this.postData = t("#post_" + e).data("json"))
            },
            _listen: function() {
                var e = this._listen_handler;
                t(window).on("message.PmEvent", i.bind(e, this))
            },
            _listen_handler: function(t) {
                var e = t.originalEvent,
                    o = !1;
                if (i.isString(e.data) && (o = e.data), o && 0 === o.indexOf("PmEvent;")) {
                    var s = o.split(";");
                    if (s.length < 3 || !i.isFunction(this["handler_" + s[1]])) return !1;
                    var n = o.substr(s[0].length + s[1].length + 2, o.length),
                        r = n;
                    if (0 === n.indexOf("{")) try {
                        r = JSON.parse(n)
                    } catch (e) {
                        r = n
                    }
                    this["handler_" + s[1]](r)
                }
            }
        })
    }(jQuery, Backbone, _, Tumblr), /*! scripts/application/logging/ads/models/post.js */
    Tumblr.Logging || (Tumblr.Logging = {}),
    function(t, e, i, o) {
        "use strict";
        var s = i.Model.extend({
            idAttribute: "serve-id",
            defaults: {
                pt_sent: {}
            }
        });
        o.PostModel = s
    }(jQuery, _, Backbone, Tumblr.Logging), /*! scripts/application/logging/ads/collections/posts.js */
    Tumblr.Logging || (Tumblr.Logging = {}),
    function(t, e, i, o) {
        "use strict";
        var s = i.Collection.extend({
            model: o.PostModel,
            initialize: function(t, e) {
                e = e || {}
            }
        });
        o.PostsCollection = s
    }(jQuery, _, Backbone, Tumblr.Logging), /*! scripts/application/logging/ads/views/logging.js */
    Tumblr.Logging || (Tumblr.Logging = {}),
    function(t, e, i, o) {
        "use strict";
        var s = Tumblr.Logging,
            n = s.PostModel,
            r = s.PostsCollection,
            a = Tumblr.Flags.bool("kraken_web_logging_library") ? "Kraken:" : "LSLog:",
            l = function(t, e, o, s) {
                var n = t.get(e),
                    r = i.cloneDeep(n);
                r[o] = s, t.set(e, r)
            },
            h = function(t, e, i) {
                return t.get(e)[i]
            };
        o.Ads = e.View.extend({
            initialize: function() {
                this.dupedEvents = ["video_play", "video_auto_play", "video_stop", "video_auto_stop", "video_scrub_stop", "video_loop", "slide"], this.postsCollection = new r, this.listenTo(Tumblr.Events, "useraction:video:play", i.bind(this.onVideoPlay, this)), this.listenTo(Tumblr.Events, "post:embed:stateChange", i.bind(this.prepVideoPlay, this)), this.listenTo(Tumblr.Events, "useraction:audio:play", i.bind(this.onAudioPlay, this)), this.listenTo(Tumblr.Events, "useraction:search_click:tag_click", i.bind(this.onSearchTagClick, this)), this.listenTo(Tumblr.Events, "useraction:search_click:permalink", i.bind(this.onSearchPermalinkClick, this)), this.listenTo(Tumblr.Events, "useraction:search_click:lightbox", i.bind(this.onSearchBlogClick, this)), this.listenTo(Tumblr.Events, "useraction:search_click:caption", i.bind(this.onSearchCaptionClick, this)), this.listenTo(Tumblr.Events, "useraction:search_click:media", i.bind(this.onSearchMediaClick, this)), this.listenTo(Tumblr.Events, "useraction:search_click:share", i.bind(this.onSearchShareClick, this)), this.listenTo(Tumblr.Events, "useraction:search_click:notes", i.bind(this.onSearchNotesClick, this)), this.listenTo(Tumblr.Events, "useraction:search_click:remnant", i.bind(this.onRemnantClick, this)), this.listenTo(Tumblr.Events, "useraction:explore_click:tag_click", i.bind(this.onSearchTagClick, this)), this.listenTo(Tumblr.Events, "useraction:explore_click:permalink", i.bind(this.onSearchPermalinkClick, this)), this.listenTo(Tumblr.Events, "useraction:explore_click:lightbox", i.bind(this.onSearchBlogClick, this)), this.listenTo(Tumblr.Events, "useraction:explore_click:caption", i.bind(this.onSearchCaptionClick, this)), this.listenTo(Tumblr.Events, "useraction:explore_click:media", i.bind(this.onSearchMediaClick, this)), this.listenTo(Tumblr.Events, "useraction:explore_click:share", i.bind(this.onSearchShareClick, this)), this.listenTo(Tumblr.Events, "useraction:explore_click:notes", i.bind(this.onSearchNotesClick, this)), this.listenTo(Tumblr.Events, "useraction:explore_click:remnant", i.bind(this.onRemnantClick, this)), this.listenTo(Tumblr.Events, "useraction:dashboard_click:remnant", i.bind(this.onRemnantClick, this)), this.listenTo(Tumblr.Events, "useraction:dashboard_click:takeover_banner", i.bind(this.onBannerClick, this)), this.listenTo(Tumblr.Events, "useraction:video_mute:takeover_banner", this.onVTSDAction), this.listenTo(Tumblr.Events, "useraction:video_unmute:takeover_banner", this.onVTSDAction), this.listenTo(Tumblr.Events, "useraction:video_play:takeover_banner", this.onVTSDAction), this.listenTo(Tumblr.Events, "useraction:video_auto_play:takeover_banner", this.onVTSDAction), this.listenTo(Tumblr.Events, "useraction:video_auto_stop:takeover_banner", this.onVTSDAction), this.listenTo(Tumblr.Events, "useraction:video_quartile_25:takeover_banner", this.onVTSDAction), this.listenTo(Tumblr.Events, "useraction:video_quartile_50:takeover_banner", this.onVTSDAction), this.listenTo(Tumblr.Events, "useraction:video_quartile_75:takeover_banner", this.onVTSDAction), this.listenTo(Tumblr.Events, "useraction:video_quartile_100:takeover_banner", this.onVTSDAction), this.listenTo(Tumblr.Events, "useraction:video_3_second_viewable:takeover_banner", this.onVTSDAction), this.listenTo(Tumblr.Events, "search:blog:click:posts_click", i.bind(this.onSearchBlogCardClick, this)), this.listenTo(Tumblr.Events, "useraction:dismiss:pinned_post", i.bind(this.onPinnedPostDismissal, this)), this.listenTo(Tumblr.Events, "useraction:dashboard_click:standalone_ad", i.bind(this.onRemnantClick, this)), this.listenTo(Tumblr.Events, "useraction:click:peepr", i.bind(this.onRecommendedBlogUnitClick, this)), this.listenTo(Tumblr.Events, "useraction:dismiss:recommended_tumblelog", i.bind(this.onRecommendedBlogUnitClick, this)), this.listenTo(Tumblr.Events, "VideoPlayer:play", i.bind(this.onVideoPlayerPlay, this)), this.listenTo(Tumblr.Events, "VideoPlayer:auto_play", i.bind(this.onVideoPlayerAutoPlay, this)), this.listenTo(Tumblr.Events, "VideoPlayer:pause", i.bind(this.onVideoPlayerPause, this)), this.listenTo(Tumblr.Events, "VideoPlayer:mute", i.bind(this.onVideoPlayerMute, this)), this.listenTo(Tumblr.Events, "VideoPlayer:unmute", i.bind(this.onVideoPlayerUnmute, this)), this.listenTo(Tumblr.Events, "VideoPlayer:fullscreen", i.bind(this.onVideoPlayerFullscreen, this)), this.listenTo(Tumblr.Events, "VideoPlayer:loop", i.bind(this.onVideoPlayerLooped, this)), this.listenTo(Tumblr.Events, "VideoPlayer:scrub_start", i.bind(this.onVideoPlayerScrubStart, this)), this.listenTo(Tumblr.Events, "VideoPlayer:scrub_stop", i.bind(this.onVideoPlayerScrubStop, this)), this.listenTo(Tumblr.Events, "VideoPlayer:restart", i.bind(this.onVideoPlayerRestart, this)), this.listenTo(Tumblr.Events, "VideoPlayer:resolutionchange", i.bind(this.onVideoPlayerResolutionChange, this)), this.listenTo(Tumblr.Events, "post:docked", i.bind(this.onVideoPlayerDocked, this)), this.listenTo(Tumblr.Events, "post:undocked", i.bind(this.onVideoPlayerUndocked, this)), this.listenTo(Tumblr.Events, "useraction:click:install_click", i.bind(this.onInstallClick, this)), this.listenTo(Tumblr.Events, "VendorButton:buttonClick", i.bind(this.onVendorButtonClicked, this)), this.listenTo(Tumblr.Events, "CTAButton:buttonClick", i.bind(this.onCTAButtonClicked, this)), this.listenTo(Tumblr.Events, "linkpost:click", i.bind(this.onLinkPostClicked, this)), this.listenTo(Tumblr.Events, "useraction:click:read_more", i.bind(this.onPostReadMore, this)), this.listenTo(Tumblr.Events, "useraction:click:notes", i.bind(this.onSearchNotesClick, this)), this.listenTo(Tumblr.Events, "ReblogTrail:click:reblogtrail_tumblelog_name", i.bind(this.onReblogTrailClickEvent, this)), this.listenTo(Tumblr.Events, "ReblogTrail:click:reblogtrail_tumblelog_avatar", i.bind(this.onReblogTrailClickEvent, this)), this.listenTo(Tumblr.Events, "ReblogTrail:click:reblogtrail_external_image", i.bind(this.onReblogTrailClickEvent, this)), this.listenTo(Tumblr.Events, "ReblogTrail:click:reblogtrail_truncated_link", i.bind(this.onReblogTrailClickEvent, this)), this.listenTo(Tumblr.Events, "carousel:slide", i.bind(this.onCarouselEvent, this)), this.listenTo(Tumblr.Events, "carousel:click_thru", i.bind(this.onCarouselEvent, this));
                var t = i.bind(this.onGenericEvent, this);
                this.listenTo(Tumblr.Events, "ads:client_like", t), this.listenTo(Tumblr.Events, "ads:client_follow", t), this.listenTo(Tumblr.Events, "ads:client_reblog", t), this.listenTo(Tumblr.Events, "VideoPlayer:timeupdate", i.bind(this.onVideoTimeUpdate, this))
            },
            onReblogTrailClickEvent: function(t) {
                this.preLogSetup(t.loggingData), this.doLog()
            },
            onCarouselEvent: function(t) {
                this.preLogSetup(t.loggingData), this.doLog()
            },
            onGenericEvent: function(t) {
                this.preLogSetup(t.loggingData), this.doLog()
            },
            onVideoTimeUpdate: function(t) {
                if (i.get(t, "loggingData.postData.placement_id")) {
                    t.loggingData.time_elapsed > 3 && this.onVideoEvent("video_view", t);
                    var e = t.loggingData.time_elapsed / t.loggingData.duration;
                    e >= 1 ? this.onVideoEvent("video_quartile_100", t) : e >= .75 ? this.onVideoEvent("video_quartile_75", t) : e >= .5 ? this.onVideoEvent("video_quartile_50", t) : e >= .25 && this.onVideoEvent("video_quartile_25", t)
                }
            },
            onVideoPlay: function(t) {
                this.preLogSetup(t.loggingData), this.doLog()
            },
            onAudioPlay: function(t) {
                this.preLogSetup(t.loggingData), this.doLog()
            },
            onSearchTagClick: function(t) {
                this.preLogSetup(t.loggingData), this.userAction = "tags", this.doLog()
            },
            onSearchBlogClick: function(t) {
                this.preLogSetup(t.loggingData), this.userAction = "posts", this.doLog()
            },
            onSearchPermalinkClick: function(t) {
                this.preLogSetup(t.loggingData), this.doLog()
            },
            onSearchCaptionClick: function(t) {
                this.preLogSetup(t.loggingData), this.doLog()
            },
            onSearchMediaClick: function(t) {
                this.preLogSetup(t.loggingData), this.userAction = "photo", this.doLog()
            },
            onSearchShareClick: function(t) {
                this.preLogSetup(t.loggingData), this.doLog()
            },
            onSearchNotesClick: function(t) {
                this.preLogSetup(t.loggingData), this.doLog()
            },
            onSearchBlogCardClick: function(t) {
                this.preLogSetup(t.loggingData), this.doLog()
            },
            onRemnantClick: function(t) {
                var e = i.cloneDeep(t.loggingData),
                    o = e.userAction || "unknown",
                    s = e.pt || null;
                this.userAction = o, this.hasServeId = !!s, this.model = s ? this.postsCollection.get(s) : null, this.model || (this.model = new n({
                    pt: s,
                    "serve-id": s
                }), this.postsCollection.push(this.model)), this.model.set("log-index", e.logIndex || 1), this.doLog()
            },
            onBannerClick: function(t) {
                this.preLogSetup(t.loggingData), this.model.set("log-index", t.loggingData.logIndex || 1), this.doLog()
            },
            onVTSDAction: function(t) {
                this.preLogSetup(t.loggingData), this.model.set("log-index", t.loggingData.logIndex || 1), this.doLog()
            },
            onPinnedPostDismissal: function(t) {
                this.preLogSetup(t.loggingData), this.doLog()
            },
            onRecommendedBlogUnitClick: function(t) {
                this.preLogSetup(t.loggingData), this.doLog()
            },
            onVendorButtonClicked: function(t) {
                this.preLogSetup(t.loggingData), this.doLog()
            },
            onCTAButtonClicked: function(t) {
                this.preLogSetup(t.loggingData), this.doLog()
            },
            onLinkPostClicked: function(t) {
                this.preLogSetup(t.loggingData), this.doLog()
            },
            onVideoPlayerPlay: function(t) {
                this.onVideoEvent("video_play", t)
            },
            onVideoPlayerAutoPlay: function(t) {
                this.onVideoEvent("video_auto_play", t)
            },
            onVideoPlayerPause: function(t) {
                this.onVideoEvent("video_stop", t)
            },
            onVideoPlayerMute: function(t) {
                this.onVideoEvent("video_mute", t)
            },
            onVideoPlayerUnmute: function(t) {
                this.onVideoEvent("video_unmute", t)
            },
            onVideoPlayerFullscreen: function(t) {
                this.onVideoEvent(t.loggingData.fullscreen ? "video_fullscreen" : "video_fullscreen_dismiss", t)
            },
            onVideoPlayerLooped: function(t) {
                this.onVideoEvent("video_loop", t)
            },
            onVideoPlayerScrubStart: function(t) {
                this.onVideoEvent("video_scrub_start", t)
            },
            onVideoPlayerScrubStop: function(t) {
                this.onVideoEvent("video_scrub_stop", t)
            },
            onVideoPlayerDocked: function(t) {
                this.onVideoEvent(t.loggingData.autodocked ? "video_auto_dock" : "video_dock", t)
            },
            onVideoPlayerUndocked: function(t) {
                this.onVideoEvent("video_dock_dismiss", t)
            },
            onVideoPlayerRestart: function(t) {
                this.onVideoEvent("video_restart", t)
            },
            onVideoPlayerResolutionChange: function(t) {
                this.onVideoEvent("video_resolution_change", t)
            },
            onVideoEvent: function(t, e) {
                var o = i.extend({
                    userAction: t
                }, e.loggingData);
                this.preLogSetup(o), this.model.set({
                    video_duration: o.duration,
                    video_progress: o.position
                }), "video_scrub_stop" !== t && "video_restart" !== t || this.model.set({
                    video_scrub_start: o.start,
                    video_scrub_end: o.end
                }), "video_resolution_change" === t && this.model.set({
                    video_resolution: o.resolution
                }), this.doLog()
            },
            onInstallClick: function(t) {
                this.preLogSetup(t.loggingData), this.doLog()
            },
            onPostReadMore: function(t) {
                this.preLogSetup(t.loggingData), this.doLog()
            },
            prepVideoPlay: function(t) {
                var e = t.loggingData;
                if ("tumblr" !== e.service && ("focus" === e.state || "playing" === e.state)) {
                    if (!e.postID) return;
                    var i = {
                        loggingData: {
                            postData: this.get$EmbedPost(e.embedID).data("json") || {},
                            userAction: "video"
                        }
                    };
                    this.onVideoPlay(i)
                }
            },
            get$EmbedPost: function(e) {
                return t("#" + e).closest(".post")
            },
            preLogSetup: function(t) {
                var e = t.userAction || "unknown",
                    i = t.postData || t.modelData || t.post || {};
                this.userAction = e, this.hasServeId = !!i["serve-id"], this.extraData = t.extraData, this.hasServeId ? this.model = this.getPostModel(i) : this.model = this.getPostModel({})
            },
            getPostModel: function(t) {
                var e = t["serve-id"],
                    i = e ? this.postsCollection.get(e) : null;
                return i || (i = new n(t), this.postsCollection.push(i)), !i.get("pt") && t.pt && i.set("pt", t.pt), i
            },
            shouldLogPost: function() {
                return !!this.model.get("pt") && this._should_log_to_yx() && !h(this.model, "pt_sent", this.userAction)
            },
            prepPayload: function() {
                var t = {
                    action: this.userAction,
                    pt: this.model.get("pt")
                };
                return 0 === this.userAction.lastIndexOf("video_", 0) && i.extend(t, {
                    video_details: this.prepVideoPayload(this.userAction)
                }), this.extraData && i.extend(t, {
                    extraData: this.extraData
                }), t
            },
            prepVideoPayload: function(t) {
                var e = {};
                return i.extend(e, {
                    duration: this.model.get("video_duration"),
                    progress: this.model.get("video_progress"),
                    timestamp: (new Date).getTime()
                }), "video_scrub_stop" !== t && "video_restart" !== t || i.extend(e, {
                    start: this.model.get("video_scrub_start"),
                    end: this.model.get("video_scrub_end")
                }), "video_resolution_change" === t && i.extend(e, {
                    resolution: this.model.get("video_resolution")
                }), e
            },
            doLog: function() {
                if (this.model && this.model.get("serve-id")) try {
                    var e = this.prepPayload(),
                        o = {
                            pt: this.model.get("pt"),
                            is_ad: this._should_log_to_yx()
                        };
                    e.video_details && (o.video_details = e.video_details), e.extraData && (o.extraData = e.extraData), Tumblr.Flags.bool("little_sister_kill_switch") || !this.model.get("pt") || 1 === Number(this.model.get("log-index")) || h(this.model, "pt_sent", this.userAction) ? this.shouldLogPost() && (this.$xhr = t.ajax({
                        url: "/svc/log/yx",
                        type: "POST",
                        data: e,
                        withFormKey: !0,
                        async: !1
                    }).success(i.bind(function() {
                        i.contains(this.dupedEvents, this.userAction) || l(this.model, "pt_sent", this.userAction, !0)
                    }, this))) : (Tumblr.Events.trigger(a + e.action, {
                        loggingData: o
                    }), i.contains(this.dupedEvents, this.userAction) || l(this.model, "pt_sent", this.userAction, !0))
                } catch (s) {
                    this.error.yxFailure(s)
                }
            },
            _should_log_to_yx: function() {
                return 1 === Number(this.model.get("log-index")) || 3 === Number(this.model.get("log-index"))
            },
            doLogExternal: function(t, e) {
                if (t) {
                    var i = this.get$postForExternalLog(t);
                    if (i.length) {
                        var o = {
                            postData: i.data("json") || {},
                            userAction: e || "unknown"
                        };
                        this.preLogSetup(o), this.doLog()
                    } else this.error.noExternalPostFound(t)
                } else this.error.noExternalId(t, e)
            },
            get$postForExternalLog: function(e) {
                return t('[data-serve-id="' + e + '"]')
            },
            error: {
                noExternalPostFound: function(t) {
                    Tumblr.Utils.exceptions(new Error("Tumblr.Logging.Ads - could not find post with externalServeId: " + (t || 0)))
                },
                noExternalId: function(t, e) {
                    Tumblr.Utils.exceptions(new Error('Tumblr.Logging.Ads - doLogExternal failed with action "' + e + '" and serveId "' + t + '."'))
                },
                yxFailure: function(t) {
                    Tumblr.Utils.exceptions(new Error('Tumblr.Logging.Ads - yx xhr failure: "' + t))
                }
            }
        })
    }(jQuery, Backbone, _, Tumblr.Logging),
    function(t, e) {
        "use strict";
        t(function(t) {
            e.Logging.ads = new e.Logging.Ads
        })
    }(jQuery, Tumblr), /*! scripts/application/legacy_post_like.js */
    function(t, e, i, o) {
        "use strict";

        function s(e, i, o) {
            var s, r = t(null == o ? "#like_form_" + e : "#" + o);
            if (r.length) {
                s = r.attr("action"), "undefined" == typeof i ? n(e) : i();
                var a = t.ajax({
                    url: s,
                    data: r.serialize(),
                    type: "post"
                });
                a.fail(function() {
                    Tumblr.Dialog.alert(l.ajax_error)
                })
            }
        }

        function n(e) {
            var i = t("#like_button_" + e),
                o = t("#like_form_" + e),
                s = i.hasClass("already_like"),
                n = o.attr("action");
            t("#post_" + e).addClass("force_redraw"), t("#post_" + e)[0].offsetHeight, t("#post_" + e).removeClass("force_redraw");
            var l = i.attr("data-root-post-id") || !1;
            s ? (i.removeClass("already_like"), o.attr("action", n.replace("/unlike", "/like")), a(e), l && t(".like_root_" + l).removeClass("already_like")) : (i.addClass("already_like"), o.attr("action", n.replace("/like", "/unlike")), r(e), l && t(".like_root_" + l).addClass("already_like"))
        }

        function r(e) {
            return !!(t("#notes_outer_container_" + e)[0] && t("#show_notes_link_" + e)[0] && t("#note_link_more_" + e)[0] && t("#note_link_less_" + e)[0] && t("#note_link_current_" + e)[0]) && (t("#show_notes_link_" + e).show(), void(t("#note_link_less_" + e).is(":visible") ? (t("#note_link_less_" + e).hide(), t("#note_link_current_" + e).show(), t("#note_link_more_" + e).hide()) : (t("#note_link_less_" + e).hide(), t("#note_link_current_" + e).hide(), t("#note_link_more_" + e).show())))
        }

        function a(e) {
            return !!(t("#show_notes_link_" + e)[0] && t("#note_link_more_" + e)[0] && t("#note_link_less_" + e)[0] && t("#note_link_current_" + e)[0]) && (t("#show_notes_link_" + e).show(), void(t("#note_link_more_" + e).is(":visible") ? (t("#note_link_less_" + e).hide(), t("#note_link_current_" + e).show(), t("#note_link_more_" + e).hide()) : (t("#note_link_less_" + e).hide(), t("#note_link_current_" + e).hide(), t("#note_link_less_" + e).show())))
        }
        var l = window.l10n_str || {};
        o.like_post = s, window.increment_note_count = r, window.decrement_note_count = a
    }(jQuery, Backbone, _, Tumblr),
    function(t, e) {
        "use strict";
        t(document).ready(function(t) {
            e.LinkButton.init(), e.Panos.init(), new e.Tabs, new e.PostVideoEmbedToggle({
                el: t("#posts")
            }), new e.PostInlineImageToggle({
                el: t("#posts")
            }), new e.LanguageMenu({
                el: "#language_switcher"
            }), new e.LegalPopover({
                el: "#popover_legal"
            }), new e.ReportTumblelogView, new e.FullHeightNoPostsFound, new e.Notifications, new e.DraggableTags, new e.SharePrivatePost, new e.ActivitySparkline, new e.devicePixelRatio, new e.documentWidth, new e.LoggingPostMessage, new e.TumblelogPopover, new e.Popover({
                el: "#analytics_popover",
                glassless: !0
            })
        })
    }(jQuery, Tumblr), /*! scripts/tumblr/auto_paginator.js */
    function(t, e, i, o) {
        "use strict";

        function s(e) {
            return window.next_page ? void(window.loading_next_page || e.documentHeight - e.windowScrollY < 3 * e.windowHeight && n()) : (t("#auto_pagination_loader").is(":visible") && t("#auto_pagination_loader").hide(), void d.stop())
        }

        function n() {
            window.loading_next_page = !0, d.trigger("before", window.next_page), t("#auto_pagination_loader_loading").show(), t("#auto_pagination_loader_failure").hide(), c()
        }

        function r() {
            _--;
            var e = t.ajax({
                url: window.next_page,
                type: "get"
            });
            e.done(function(i) {
                a(i);
                var o = e.getResponseHeader("X-next-page");
                o ? window.next_page = o : (window.next_page = !!i.match('id="next_page_link" href="') && i.split('id="next_page_link" href="')[1].split('"')[0], window.next_page || d.stop()), t("#auto_pagination_loader_loading").hide()
            }), e.fail(function() {
                _ ? r() : l()
            })
        }

        function a(e, i) {
            if (e.indexOf('<script type="text/javascript" language="javascript" src="//assets.tumblr.com/languages/errors.js') !== -1) return d.stop(), !1;
            var o;
            o = e.indexOf("<!-- START POSTS -->") === -1 ? e : e.split("<!-- START POSTS -->")[1].split("<!-- END POSTS -->")[0];
            var s = t(t.trim(o)).not(":empty");
            t("#posts").append(s), Tumblr.Events.trigger("DOMEventor:updateRect"), window.loading_next_page = !1, p = i, setTimeout(function() {
                "function" == typeof window.after_auto_paginate && window.after_auto_paginate(), h(), d.trigger("after", window.next_page), Tumblr.Events.trigger("AutoPaginator:after")
            }, 0)
        }

        function l() {
            d.stop(), t("#auto_pagination_loader_loading").hide(), t("#auto_pagination_loader_failure").show()
        }

        function h() {
            for (var t = g.length - 1; t >= 0; t--) "function" == typeof g[t] && g[t]()
        }

        function c() {
            _--;
            var e = window.next_page;
            if (!e.match(/\/dashboard\/(page\/)?\d+/) && !e.match(/\/dashboard\/c\/.+/)) return r();
            e = e.replace("/dashboard", "/svc/dashboard");
            var i = t.ajax({
                url: e,
                type: "get",
                data: {
                    nextAdPos: u,
                    stream_cursor: p,
                    previousElementsCount: t("#posts li:not(:empty)").not("#new_post_buttons, :not([class])").length
                }
            });
            i.done(function(e) {
                window.next_page = e.meta.tumblr_old_next_page, a(e.response.DashboardPosts.body, e.response.DashboardPosts.nextCursor), e.response.RecommendedBlog && Tumblr.Events.trigger("component:RecommendedBlog", e.response.RecommendedBlog), e.response.RapidRecommendations && Tumblr.Events.trigger("component:RapidRecommendations", e.response.RapidRecommendations), e.response.StandaloneAd && Tumblr.Events.trigger("component:StandaloneAd", e.response.StandaloneAd), e.response.RemnantAd && Tumblr.Events.trigger("component:RemnantAd", e.response.RemnantAd), e.response.YamPlusAd && Tumblr.Events.trigger("component:YamPlusAd", e.response.YamPlusAd), e.response.DfpAd && Tumblr.Events.trigger("component:DfpAd", e.response.DfpAd), Tumblr.Events.trigger("dashboard:nextPageLoaded"), t("#auto_pagination_loader_loading").hide(), u = e.response.nextAdPos, _ = d.DEFAULT_RETRIES
            }), i.fail(function() {
                _ ? c() : l()
            })
        }
        var d = {
            DEFAULT_RETRIES: 3,
            start: function() {
                _ = this.DEFAULT_RETRIES, Tumblr.Events.on("DOMEventor:flatscroll", s)
            },
            stop: function() {
                window.loading_next_page = !1, Tumblr.Events.off("DOMEventor:flatscroll", s)
            },
            restart: function() {
                this.start(), n()
            },
            flushQueue: function() {
                h()
            }
        };
        o.extend(d, i.Events);
        var _ = d.DEFAULT_RETRIES,
            u = (new Tumblr.Prima.AdsPaginationHelper).getNextAdPos() || 0,
            p = t("#next_page_link").data("stream-cursor") || "";
        window.loading_next_page = !1;
        var g = [];
        e.AutoPaginator = d, window.AfterAutoPaginationQueue = g
    }(jQuery, Tumblr, Backbone, _), /*! scripts/plexi.js */
    function(t, e) {
        "use strict";
        var i = function(e) {
            return this instanceof i ? (this.token = e.token || "", e.instance && (this.instance = e.instance, this.$instance = t(e.instance)), this.hide_timeout = null, this.transition_class = null, this.$hide_timeout = null, void i.register(this)) : new i(e)
        };
        i.prototype = {
            create: function(e, i) {
                i = i || {};
                var o = t(e);
                this.$instance = t("<div/>", {
                    "data-token": this.token,
                    "class": "plexi"
                }), this.instance = this.$instance.get(0), i.cssClass && this.$instance.addClass(i.cssClass), o.append(this.$instance)
            },
            show: function(e) {
                e = e || {}, this.transition_class = e.transition_class || !1, this.$instance.hasClass("instant") || this.$instance.addClass("active"), setTimeout(t.proxy(function() {
                    clearTimeout(this.$hide_timeout), this.transition_class && this.$instance.addClass(this.transition_class), this.$instance.addClass("show"), this.$instance.hasClass("instant") || this.$instance.addClass("active")
                }, this), 1)
            },
            hide: function() {
                this.$instance.removeClass("show"), this.$hide_timeout = setTimeout(t.proxy(function() {
                    this.$instance.removeClass("show instant active fast"), this.transition_class && this.$instance.removeClass(this.transition_class)
                }, this), 50)
            },
            destroy: function() {
                return i.instances.splice(_.indexOf(this), 1), this
            }
        }, i.instances = [], i.register = function(t) {
            this.instances.push(t)
        }, i.findByToken = function(e) {
            for (var i, o = 0; o < this.instances.length; o++) this.instances[o].token == e && (i = this.instances[o]);
            if (!i) {
                var s = t('.plexi[data-token="' + e + '"]');
                if (s.length) {
                    var n = new Tumblr.Plexi({
                        instance: s,
                        token: e
                    });
                    return this.instances.push(n), n
                }
            }
            return i
        }, e.Plexi = i
    }(jQuery, Tumblr), /*! scripts/link_button.js */
    function(t, e, i, o, s) {
        var n = i.View.extend({
            events: {
                click: "onLinkClick"
            },
            initialize: function(t) {
                this.$el.data("tumblr_linkbutton", this), this.constructor.register(this)
            },
            createLoggingData: function(t) {
                var i, s = this.$el.closest("[data-json]"),
                    n = {};
                if (s.length > 0) try {
                    n = JSON.parse(s.attr("data-json"))
                } catch (r) {
                    o.Flags.bool("is_dev") && console.error("Failed to parse post data for link button logging.", r)
                }
                return i = e.pick(n, "root_id", "liked", "is_mine", "is_recommended", "tumblelog", "serve-id", "pt"), e.extend(i, {
                    post_id: n.id,
                    post_url: (n.share_popover_data || {}).post_url
                }), {
                    post: i,
                    userAction: "click_thru",
                    link_url: t,
                    has_thumbnail: this.$el.hasClass("has-thumbnail"),
                    has_author: this.$el.find(".author").length > 0,
                    has_excerpt: this.$el.find(".excerpt").length > 0
                }
            },
            logClick: function(t) {
                o.Events.trigger("linkpost:click", {
                    loggingData: this.createLoggingData(t)
                })
            },
            onLinkClick: function(e) {
                this.logClick(t(e.currentTarget).attr("href"))
            }
        }, {
            instances: [],
            register: function(t) {
                this.instances.push(t)
            },
            unregister: function(t) {
                this.instances.splice(e.indexOf(this.instances, t), 1)
            },
            init: function() {
                this._scan || (this._scan = t.proxy(this.scan, this)), e.indexOf(AfterAutoPaginationQueue, this._scan) < 0 && AfterAutoPaginationQueue.push(this._scan), this.scan()
            },
            scan: function(e) {
                return e = t.extend({}, e), t(e.el || ".link-button").each(t.proxy(function(e, i) {
                    t(i).data("tumblr_linkbutton") || new o.LinkButton({
                        el: i
                    })
                }, this)), this
            }
        });
        s.LinkButton = n
    }(jQuery, _, Backbone, Tumblr, Tumblr), /*! scripts/jquery.pano.js */
    function(t, e) {
        var i = function(e, o) {
            return this instanceof i ? (this.options = e, this.config = t.extend({}, i.defaults, this.options), this._ = t.extend({}, i.init, this.init), this.evt = t.extend({}, i.events), t.each(this.evt, t.proxy(function(t) {
                "function" == typeof this.config[t] && (this.evt[t] = this.config[t])
            }, this)), this.clock = !1, this.still = !0, this.motion = !1, this.paused = !1, i.register(this), this) : new i(e)
        };
        i.prototype = {
            start_clock: function() {
                return !this.clock && (this.clock = !0, clearInterval(this.ticker), void(this.ticker = setInterval(t.proxy(this.tick, this), this.config.dt)))
            },
            stop_clock: function() {
                this.clock = !1, clearInterval(this.ticker)
            },
            tick: function(t) {
                return t || (t = this.config.dt), !this.paused && this.__tick(t)
            },
            __tick: function(t, e) {
                if (this.evt.pre_tick && !this.evt.pre_tick.apply(this, [this])) return this;
                if (t || (t = this.config.dt), e || this.set_properties({
                        px0: this._.px,
                        vx0: this._.vx,
                        ax0: this._.ax,
                        py0: this._.py,
                        vy0: this._.vy,
                        ay0: this._.ay,
                        pz0: this._.pz,
                        vz0: this._.vz,
                        az0: this._.az,
                        dt: t
                    }), !t) return this;
                this.still = !0, this.motion = !1;
                var i = t * t;
                return this.config.x && (this._.vx || this._.ax) && (this._.px = this._.px + this._.vx * t + .5 * this._.ax * i, this._.vx = this.__almost_zero(this._.vx + this._.ax * t), this._.drag < 1 && (this._.vx *= this._.drag), this._.vx && (this.still = !1), (this._.vx || this._.ax) && (this.motion = !0)), this.config.y && (this._.vy || this._.ay) && (this._.py = this._.py + this._.vy * t + .5 * this._.ay * i, this._.vy = this.__almost_zero(this._.vy + this._.ay * t), this._.drag < 1 && (this._.vy *= this._.drag), this._.vy && (this.still = !1), (this._.vy || this._.ay) && (this.motion = !0)), this.config.z && (this._.vz || this._.az) && (this._.pz = this._.pz + this._.vz * t + .5 * this._.az * i, this._.vz = this.__almost_zero(this._.vz + this._.az * t), this._.drag < 1 && (this._.vz *= this._.drag), this._.vz && (this.still = !1), (this._.vz || this._.az) && (this.motion = !0)), this.evt.post_tick && this.evt.post_tick.apply(this, [this]), this.still && this.evt.when_still && this.evt.when_still.apply(this, [this]), !this.motion && this.evt.no_motion && this.evt.no_motion.apply(this, [this]), this
            },
            __split_tick: function(t, e, i) {
                if ("function" != typeof i) return this.__tick(t, !0);
                var o = e * t,
                    s = t - o;
                return s && this.__tick(s), i.apply(this, [this]), o && this.__tick(o), this
            },
            __almost_zero: function(t) {
                return Math.abs(t) < this.config.threshold ? 0 : t
            },
            set_properties: function(e, i) {
                return t.isPlainObject(e) ? t.extend(this._, e) : this._[e] = i, this
            },
            calculate_velocity: function(t, e, i) {
                if (t.length < 2) return !1;
                this.evt.slide_start && this.evt.slide_start.apply(this, [this]);
                for (var o = 0, s = t.length - 1, n = (new Date).getTime() - e, r = 0; r < t.length; r++) t[r][0] < n && (o = r + 1);
                if (o >= s) return !1;
                var a = t[o],
                    l = t[s],
                    h = l[0] - a[0];
                return this.set_properties({
                    vx0: this._.vx,
                    vy0: this._.vy,
                    vx: (a[1] - l[1]) / h,
                    vy: (a[2] - l[2]) / h
                }), i && this.autostart_xy(), this
            },
            autostart_xy: function() {
                var t = this.config.x && this._.vx || this.config.y && this._.vy;
                return t && this.start_clock(), t
            },
            autostop_xy: function() {
                var t = !(this._.vx && this.config.x || this._.vy && this.config.y);
                return t && this.stop_clock(), t
            }
        }, i.instances = [], i.register = function(t) {
            this.instances.push(t)
        }, i.unregister = function(t) {
            this.instances.splice(this.instances.indexOf(t), 1)
        }, i.dt = 15, i.tick = function(t) {
            "number" != typeof t && (t = this.dt);
            for (var e = 0; e < this.instances.length; e++) this.instances[e].tick(t)
        }, i.init = {
            px: 0,
            vx: 0,
            ax: 0,
            py: 0,
            vy: 0,
            ay: 0,
            pz: 0,
            vz: 0,
            az: 0,
            px0: 0,
            vx0: 0,
            ax0: 0,
            py0: 0,
            vy0: 0,
            ay0: 0,
            pz0: 0,
            vz0: 0,
            az0: 0,
            drag0: .9,
            drag: .9,
            dt: null
        }, i.events = {
            pre_tick: !1,
            post_tick: !1,
            slide_start: !1,
            when_still: !1,
            no_motion: !1
        }, i.defaults = {
            x: !0,
            y: !1,
            z: !1,
            threshold: .005,
            dt: i.dt
        }, e.Physics = i
    }(jQuery, this.Tumblr || (this.Tumblr = {})),
    function(t, e) {
        var i = function(e, o) {
            return this instanceof i ? (this.el = "string" == typeof e ? t(e).get(0) : e, this.$el = t(e), this.options = o, this.metadata = this.$el.data("plugin-options"), this.config = t.extend({}, i.defaults, this.options, this.metadata), this.$parent = t(this.config.parent), this.start = t.proxy(this.__start, this), this.end = t.proxy(this.__end, this), this.move = t.proxy(this.__move, this), this.click = t.proxy(this.__click, this), this.scroll = t.proxy(this.__scroll, this), this.__init(), i.register(this), this) : new i(e, o)
        };
        i.prototype = {
            __init: function() {
                this.__reset_positions(), this.autostart && this.enable(), this.touch = ("ontouchstart" in window || "onmsgesturechange" in window) && navigator.msMaxTouchPoints > 1, this.touch && t.extend(this.config, {
                    start: "touchstart",
                    end: "touchend",
                    move: "touchmove"
                }), this.physics = !!this.config.physics && new Tumblr.Physics(this.config.physics)
            },
            enable: function() {
                this.enable_dragging(), this.config.can_scroll && this.enable_scrolling()
            },
            enable_dragging: function() {
                this.dragging = !1, this.$el.on(this.config.start, this.start), this.$el.on(this.config.click, this.click)
            },
            enable_scrolling: function() {
                this.scrolling = !1, this.$el.on(this.config.scroll, this.scroll), clearTimeout(this.enable_scrolling_delay)
            },
            disable: function() {
                this.disable_dragging(), this.disable_scrolling()
            },
            disable_dragging: function() {
                this.dragging = !1, this.$el.off(this.config.start, this.start), this.$el.off(this.config.click, this.click), this.$parent.off(this.config.blur, this.end), this.$parent.off(this.config.end, this.end), this.$parent.off(this.config.move, this.move)
            },
            disable_scrolling: function() {
                this.scrolling = !1, this.$el.off(this.config.scroll, this.scroll), clearTimeout(this.enable_scrolling_delay)
            },
            __start: function(t) {
                return this.dragging = !0, this.$parent.on(this.config.blur, this.end), this.$parent.on(this.config.end, this.end), this.$parent.on(this.config.move, this.move), this.__reset_positions(), this.__event_position(t), this.start_position = this.end_position = this.positions[0], this.config.start_position && this.config.start_position(this.start_position[1], this.start_position[2]), this.physics && this.physics.set_properties({
                    vx0: this.physics._.vx,
                    vy0: this.physics._.vy,
                    vx: 0,
                    vy: 0
                }).stop_clock(), t.stopPropagation(), !1
            },
            __end: function(t) {
                this.dragging = !1, this.$parent.off(this.config.blur, this.end), this.$parent.off(this.config.end, this.end), this.$parent.off(this.config.move, this.move), this.config.end_position && this.config.end_position(this.end_position[1], this.end_position[2]), this.physics && this.physics.calculate_velocity(this.positions, this.config.pos_time, !0)
            },
            __click: function(t) {
                return !this.__any_movement() || (t.stopPropagation(), !1)
            },
            __move: function(t) {
                var e = this.__event_position(t);
                this.end_position = this.positions[this.positions.length - 1], this.config.update_position && this.config.update_position(e.x - this.start_position[1], e.y - this.start_position[2], !1)
            },
            __scroll: function(t) {
                return this.physics && this.physics.clock ? (t.preventDefault(), this.physics.set_properties({
                    vx0: this.physics._.vx,
                    vy0: this.physics._.vy,
                    vz0: 0,
                    vx: 0,
                    vy: 0,
                    vz: 0
                }).stop_clock(), this.physics.motion = !1, this.physics.evt.no_motion && this.physics.evt.no_motion.apply(this.physics, [this.physics]), !1) : void(this.config.update_position && this.config.update_position(this.$el.scrollLeft(), this.$el.scrollTop(), !0))
            },
            __event_position: function(t, e) {
                var i, o;
                if (this.touch) {
                    if (!t.originalEvent.targetTouches.length) return !1;
                    i = t.originalEvent.targetTouches[0].pageX, o = t.originalEvent.targetTouches[0].pageY
                } else i = t.pageX, o = t.pageY;
                return e ? {
                    x: i,
                    y: o
                } : this.__record_position(i, o)
            },
            __any_movement: function() {
                if (this.positions < 2) return !1;
                var t = this.positions[0],
                    e = this.positions[this.positions.length - 1];
                return e[0] !== t[0] || e[1] !== t[1]
            },
            __reset_positions: function() {
                delete this.start_position, delete this.end_position, this.positions = [], this.scroll_x = this.$el.scrollLeft(), this.scroll_y = this.$el.scrollTop()
            },
            __record_position: function(e, i) {
                t.isPlainObject(e) && (i = e.y, e = e.x);
                var o = (new Date).getTime();
                return this.positions.push([o, e, i]), this.positions.length - 1 === this.config.pos_limit ? this.positions.shift() : this.positions.length > this.config.pos_limit && this.positions.splice(-this.config.pos_limit, this.positions.length), this.positions.push([o, e, i]), {
                    x: e,
                    y: i
                }
            },
            sync_scroll: function(e) {
                if (this.config.can_scroll) {
                    this.disable_scrolling();
                    var i = t(e);
                    this.$el.scrollLeft(i.scrollLeft()), this.$el.scrollTop(i.scrollTop()), this.scroll_x = this.$el.scrollLeft(), this.scroll_y = this.$el.scrollTop(), this.physics && this.physics.set_properties({
                        px: this.scroll_x,
                        py: this.scroll_Y
                    }), clearTimeout(this.enable_scrolling_delay), this.enable_scrolling_delay = setTimeout(t.proxy(this.enable_scrolling, this), 200)
                }
            }
        }, i.instances = [], i.register = function(t) {
            this.instances.push(t)
        }, i.unregister = function(t) {
            this.instances.splice(this.instances.indexOf(t), 1)
        }, i.defaults = {
            pos_limit: 5,
            pos_time: 200,
            start: "mousedown",
            end: "mouseup",
            move: "mousemove",
            click: "click",
            scroll: "scroll",
            blur: "blur",
            parent: window,
            can_scroll: !0,
            physics: !1,
            start_position: !1,
            end_position: !1,
            update_position: !1,
            autostart: !0
        }, e.DragRelay = i
    }(jQuery, Tumblr),
    function(t, e) {
        var i = function(t) {
            return this.options = t, this.__init(this.config), this
        };
        i.prototype = {
            __init: function() {
                Tumblr.Glass.show(_.bind(function() {
                    this.__destroy()
                }, this)), this.click = t.proxy(this.__click, this), this.resize = t.proxy(this.__resize, this), this.keydown = t.proxy(this.__keydown, this), this.keyup = t.proxy(this.__keyup, this), this.keycancel = t.proxy(this.__keycancel, this), this.__create(), this.options.pano && this.__clone_pano(this.options.pano), this.__open()
            },
            __bind_events: function() {
                this.$lightbox.on("click", this.click), t(window).on("resize", this.resize), t(window).on("keydown", this.keydown)
            },
            __unbind_events: function() {
                this.$lightbox.off("click", this.click), t(window).off("resize", this.resize), t(window).off("keydown", this.keydown), t(window).off("keyup", this.keyup), t(window).off("blur", this.keycancel)
            },
            __create: function() {
                this.$lightbox = t("<div/>").attr("class", "pano_lightbox").appendTo(t("body")), this.$lightbox.css({
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 4294967294,
                    overflow: "hidden",
                    backgroundColor: "rgba(15,15,15,0.95)"
                }), t("<img/>").attr("id", "vignette").attr("src", "//assets.tumblr.com/images/full_page_vignette.png").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100%"
                }).appendTo(this.$lightbox), t("<div/>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100%"
                }).appendTo(this.$lightbox)
            },
            __destroy: function() {
                this.__unbind_events(), this.$lightbox.css("display", "none").remove(), this.pano.$parent.css("overflow", ""), delete this.$lightbox, window.top != window.self && "undefined" != typeof window.top.pano_iframe_preloader && window.top.pano_iframe_preloader && window.top.pano_iframe_preloader.remove(), o.unregister(this)
            },
            __clone_pano: function(e) {
                this.$pano = t(e).clone(!1).appendTo(this.$lightbox), this.pano = new o(this.$pano, {
                    side_margins: 100
                }), this.pano.lightbox = this
            },
            __open: function() {
                this.__bind_events(), this.pano.__center_vertically(t(window).height()), this.pano.$parent.css("overflow", "hidden")
            },
            __close: function() {
                Tumblr.Glass.hide()
            },
            __click: function(e) {
                t(e.target).closest(".pano_dragger").length || t(e.target).closest(".pano_thumb").length || this.__close()
            },
            __resize: function(e) {
                this.pano.__enforce_max_height(), this.pano.__center_vertically(t(window).height()), this.pano.__draw_shades(), t("#vignette").css("display", "none")
            },
            __keydown: function(e) {
                if (!e) return !1;
                var i = e.charCode ? e.charCode : e.keyCode;
                if ((e.ctrlKey || e.metaKey) && 87 === i) return this.__close(), !1;
                if (!e.shiftKey && !e.ctrlKey && e.altKey && !e.metaKey) return !0;
                switch (i) {
                    case 37:
                        return !this.arrowed && (this.arrowed = !0, this.pano.physics.set_properties({
                            drag0: this.pano.physics._.drag,
                            drag: 1,
                            vx0: this.pano.physics._.vx,
                            vx: -.9
                        }).autostart_xy(), t(window).on("blur", this.keycancel), t(window).on("keyup", this.keyup), !1);
                    case 39:
                        return !this.arrowed && (this.arrowed = !0, this.pano.physics.set_properties({
                            drag0: this.pano.physics._.drag,
                            drag: 1,
                            vx0: this.pano.physics._.vx,
                            vx: .9
                        }).autostart_xy(), t(window).on("blur", this.keycancel), t(window).on("keyup", this.keyup), !1);
                    case 27:
                    case 32:
                    case 74:
                    case 75:
                        return this.__close(), !1
                }
            },
            __keyup: function(e) {
                if (!e) return !1;
                var i = e.charCode ? e.charCode : e.keyCode;
                if (!e.shiftKey && !e.ctrlKey && e.altKey && !e.metaKey) return !0;
                switch (i) {
                    case 37:
                        return this.arrowed = !1, this.pano.physics.set_properties({
                            drag: this.pano.physics._.drag0
                        }).autostop_xy(), t(window).off("blur", this.keycancel), t(window).off("keyup", this.keyup), !1;
                    case 39:
                        return this.arrowed = !1, this.pano.physics.set_properties({
                            drag: this.pano.physics._.drag0
                        }).autostop_xy(), t(window).off("blur", this.keycancel), t(window).off("keyup", this.keyup), !1
                }
            },
            __keycancel: function(e) {
                this.arrowed && (this.arrowed = !1, this.pano.physics.set_properties({
                    drag: this.pano.physics._.drag0,
                    vx0: this.pano.physics._.vx,
                    vx: 0
                }).autostop_xy()), t(window).off("blur", this.keycancel), t(window).off("keyup", this.keyup)
            }
        };
        var o = function(e, i) {
            return this instanceof o ? (this.el = "string" == typeof e ? t(e).get(0) : e, this.$el = t(e), this.$el.data("panoObject") ? this.$el.data("panoObject") : (this.options = i, this.metadata = this.$el.data("plugin-options"), this.config = t.extend({
                physics: {
                    post_tick: t.proxy(function(t) {
                        this.viewport_size(), t._.px <= 0 ? (t.set_properties({
                            px: 0,
                            vx: .1 * Math.abs(t._.vx)
                        }), this.lightbox && this.lightbox.keycancel()) : t._.px >= this.display_width + 2 * this.display_side_margins - this.viewport_width && (t.set_properties({
                            px: this.display_width + 2 * this.display_side_margins - this.viewport_width,
                            vx: -.1 * Math.abs(t._.vx)
                        }), this.lightbox && this.lightbox.keycancel()), this.set_position(t._.px, t._.py, !0)
                    }, this),
                    slide_start: t.proxy(function(t) {
                        this.relay.disable_scrolling(), this.scrubber_relay.disable_scrolling()
                    }, this),
                    no_motion: t.proxy(function(t) {
                        t.stop_clock(), this.relay.enable_scrolling(), this.scrubber_relay.enable_scrolling(), this.relay.sync_scroll(this.$viewport)
                    }, this)
                },
                autostart: !0
            }, this.options, this.metadata), this.__init(this.config), this)) : new o(e, i)
        };
        o.prototype = {
            __init: function(e) {
                this.img_loaded = t.proxy(this.__img_loaded, this), this.img_ready = t.proxy(this.__img_ready, this), this.__create(), t.extend(this.config, {
                    start_position: t.proxy(this.set_start_position, this),
                    end_position: t.proxy(this.set_end_position, this),
                    update_position: t.proxy(this.set_position, this)
                }), this.relay = new Tumblr.DragRelay(this.$dragger, this.config), this.physics = this.relay.physics, this.scrubber_relay = new Tumblr.DragRelay(this.$scrubber, t.extend({}, this.config, {
                    can_scroll: !1,
                    physics: !1,
                    start_position: t.proxy(this.set_inverted_start_position, this),
                    update_position: t.proxy(this.set_inverted_position, this)
                })), this.__load_pano_image(), o.register(this)
            },
            __create: function() {
                return this.$el.is("a") ? (this.$orig_a = this.$el, this.$orig_img = this.$el.children("img")) : this.$orig_img = this.$el, this.src = this.$orig_img.data("panoSrc"), this.href = this.$orig_img.data("panoHref"), this.width = this.$orig_img.data("panoWidth"), this.height = this.$orig_img.data("panoHeight"), this.position_height = Math.min(80, this.$orig_img.data("thumbHeight")), this.position_width = this.$orig_img.data("thumbWidth") * (this.position_height / this.$orig_img.data("thumbHeight")), this.position_width = Math.min(500, this.position_width), this.$parent = t("body"), this.$container = t("<div/>").attr("class", "pano_container loading"), this.$view_container = t("<div/>").attr("class", "pano_view_container").appendTo(this.$container), this.$viewport = t("<div/>").attr("class", "pano_viewport").appendTo(this.$view_container), this.$img_container = t("<div/>").attr("class", "pano_img_container").css({
                    width: this.width,
                    height: this.height,
                    padding: "0 " + this.options.side_margins + "px"
                }).appendTo(this.$viewport), this.$img = t("<img/>").attr({
                    src: "//assets.tumblr.com/images/x.gif",
                    "class": "pano_img"
                }).css({
                    width: this.width,
                    height: this.height
                }).appendTo(this.$img_container), this.$loader_img = t("<img/>").attr({
                    "class": "pano_loader_img",
                    src: this.$orig_img.attr("src")
                }).css({
                    width: this.width,
                    height: this.height
                }).appendTo(this.$img_container), this.$position = t("<div/>").attr("class", "pano_position").css({
                    width: this.position_width,
                    height: this.position_height
                }).appendTo(this.$container), this.$thumb = t("<img/>").attr("class", "pano_thumb").attr("src", this.$orig_img.attr("src")).appendTo(this.$position), this.$shade_left = t("<div/>").attr("class", "pano_shade left").appendTo(this.$position), this.$shade_right = t("<div/>").attr("class", "pano_shade right").appendTo(this.$position), this.$scrubber = t("<div/>").attr("class", "pano_scrubber grab").appendTo(this.$position), this.$dragger = t("<div/>").attr("class", "pano_dragger grab").css({
                    height: this.height
                }).appendTo(this.$container), this.$scroller = t("<div/>").attr("class", "pano_scroller").css({
                    width: this.width,
                    height: this.height,
                    borderLeft: this.options.side_margins + "px solid transparent",
                    borderRight: this.options.side_margins + "px solid transparent"
                }).appendTo(this.$dragger), this.$el.css("display", "none").data("panoObject", this).after(this.$container), this.__set_img_dimensions(this.width, this.height, this.options.side_margins), this.__enforce_max_height(), this
            },
            __destroy: function() {
                this.$img.off("load", this.img_ready), this.$container.remove(), delete this.$container, delete this.$view_container, delete this.$viewport, delete this.$img, delete this.$loader_img, delete this.$position, delete this.$thumb, delete this.$pos_frame, delete this.$dragger, this.$el.css("display", "").data("panoObject", "")
            },
            __load_pano_image: function(t) {
                t || (t = this.src), this.img_poll = setInterval(this.img_ready, 1e3), this.$img.on("load", this.img_loaded).attr("src", t), this.__img_init()
            },
            __img_init: function() {
                this.relay.enable(), this.scrubber_relay.enable(), this.__scrubber_sizing(), this.set_position(0, 0)
            },
            __img_ready: function(t) {
                t || (t = this.$img[0]), t && t.src && t.complete && this.__img_loaded()
            },
            __img_loaded: function(t) {
                this.__scrubber_sizing(), this.$container.removeClass("loading"), clearInterval(this.img_poll)
            },
            __scrubber_sizing: function() {
                this.viewport_size();
                var t = 100 * this.viewport_width / (this.$img.width() + 2 * this.options.side_margins);
                this.$scrubber.width(Math.min(t, 100) + "%"), 100 == Math.min(t, 100) ? this.$position.css("opacity", "0") : this.$position.css("opacity", "1")
            },
            __draw_shades: function() {
                this.relay.touch || (this.$shade_left.css("width", Math.max(0, this.scrubber_x)), this.$shade_right.css("width", Math.max(0, this.position_width - this.scrubber_x - this.$scrubber.width())))
            },
            __set_img_dimensions: function(t, e, i) {
                this.$img_container.css({
                    width: t,
                    height: e
                }), this.$img.css({
                    width: t,
                    height: e
                }), this.$loader_img.css({
                    width: t,
                    height: e
                }), this.$dragger.css({
                    height: e
                }), this.$scroller.css({
                    width: t,
                    height: e
                }), this.display_width = t, this.display_height = e, "number" == typeof i && (this.$img_container.css({
                    padding: "0 " + i + "px"
                }), this.$scroller.css({
                    borderLeft: i + "px solid transparent",
                    borderRight: i + "px solid transparent"
                }), this.display_side_margins = i)
            },
            __enforce_max_height: function(e) {
                e = e || 200;
                var i = t(window).height() - this.$position.outerHeight(!0);
                i -= 30;
                var o = Math.max(e, Math.min(this.height, i)),
                    s = this.width * (o / this.height);
                this.__set_img_dimensions(s, o), this.$img_container.css("min-width", t(window).width() - 2 * this.display_side_margins), this.__scrubber_sizing()
            },
            __center_vertically: function(t) {
                this.$container.css("top", t / 2 - this.$container.height() / 2)
            },
            set_start_position: function(t, e) {
                this.$parent.addClass("grabbing"), this.start_x = this.$viewport.scrollLeft(), this.start_y = this.$viewport.scrollTop()
            },
            set_inverted_start_position: function(t, e) {
                this.$parent.addClass("grabbing"), this.start_x = this.$scrubber.position().left, this.start_y = this.$scrubber.position().top
            },
            set_end_position: function(t, e) {
                this.$parent.removeClass("grabbing"), this.relay.sync_scroll(this.$viewport)
            },
            viewport_size: function() {
                this.viewport_width = this.$viewport.width(), this.viewport_height = this.$viewport.height()
            },
            set_position: function(t, e, i) {
                this.viewport_size(), i ? (this.position_x = t, this.position_y = e) : (this.position_x = this.start_x - t, this.position_y = this.start_y - e), this.$viewport.scrollLeft(this.position_x), this.position_x = this.$viewport.scrollLeft(), this.scrubber_x = this.$scrubber.width() * this.position_x / this.viewport_width, this.$scrubber.css("left", parseInt(this.scrubber_x, 10) + "px"), this.__draw_shades()
            },
            set_inverted_position: function(t, e, i) {
                this.viewport_size(), i ? this.scrubber_x = t : this.scrubber_x = this.start_x + t, this.scrubber_x = Math.max(0, Math.min(this.scrubber_x, this.$position.width() - this.$scrubber.width())), this.position_x = this.$viewport.width() * this.scrubber_x / this.$scrubber.width(), this.$scrubber.css("left", parseInt(this.scrubber_x, 10) + "px"), this.__draw_shades(), this.$viewport.scrollLeft(this.position_x)
            }
        }, o.instances = [], o.register = function(t) {
            this.instances.push(t)
        }, o.unregister = function(t) {
            this.instances.splice(this.instances.indexOf(t), 1)
        }, t.fn.panorama = function(e) {
            e = e || {};
            var s = e.lightbox || !1;
            return this.each(function() {
                s ? new i(t.extend({}, e, {
                    pano: this
                })) : new o(this, e)
            })
        }, e.Panorama = o
    }(jQuery, this.Tumblr || (this.Tumblr = {})), /*! scripts/search/views/popover/search_popover.js */
    function(t, e, i) {
        "use strict";
        var o = Tumblr.BaseSearchPopover.extend({
            events: {
                "focusout #search_query": "blur_search_query",
                "focusin #search_query": "focus_search_query",
                "click #popover_search .popover_menu_item": "click_popover",
                'click [data-search-popover-action="explore"]': "click_explore",
                "submit #search_form": "submit",
                "click .search_form_field": "click_search_field"
            },
            getSearchPosition: function() {
                return "header_fullwidth"
            },
            on_update: function() {
                Tumblr.BaseSearchPopover.prototype.on_update.apply(this, arguments), this.pixelateAndShowAvatars()
            },
            defaultLoggingdata: function() {
                var t = this.getSearchPosition();
                return {
                    context: t
                }
            },
            initialize: function(t) {
                this.options = t || {}, this.options.popover_selector = "#popover_search", this.log_session = Tumblr.Flags.bool("log_search_box"), this.onboarding_search = this.options.onboarding || !1, this.onboarding_search_endpoint = this.options.onboarding_search_endpoint || !1, Tumblr.BaseSearchPopover.prototype.initialize.apply(this, arguments), this.search_term = this.$search_query.val(), this.capturing = Tumblr.Capture ? new Tumblr.Capture.SearchPopover : null, this.listenTo(Tumblr.Events, "search:change:query", this.change_query, this), this.listenTo(Tumblr.Events, "search:submit", this.force_submit, this)
            },
            click_popover: function(t) {
                var e = this.$(t.currentTarget),
                    i = e.find("a"),
                    o = i.attr("href");
                (t.metaKey || t.altKey) && (t.stopPropagation(), t.preventDefault(), Tumblr.Prima.Url.hasAllowedProtocol(o) && window.open(o)), this.popover.hide(), this.change_query(i.data("tag-result")), i.hasClass("search_typeahead") && (t.preventDefault(), t.stopPropagation(), this.force_submit(), this.clicked_typeahead(i.data("tag-result"), i))
            },
            pixelateAndShowAvatars: function() {
                Tumblr.Prima.Utils.CanvasTools.drawPixelatedImages(this), this.$el.find(".pixelated-avatar").removeClass("hide").addClass("show")
            },
            click_search_field: function(t) {
                t.preventDefault(), this.$search_query.is(":focus") || this.$search_query.focus()
            },
            click_explore: function(t) {
                Tumblr.Events.trigger("explore-links:click", {
                    loggingData: {
                        source: "search-popover"
                    }
                }), this.log_search_box("explore_click")
            },
            clicked_typeahead: function(t, e) {
                var i = e.closest(".popover_menu_item"),
                    o = i.parent().children().index(i),
                    s = e.find(".result_title u").text();
                this.log_search_box("typeahead_click", {
                    position: o,
                    query: t,
                    characters: s,
                    context: "header"
                })
            },
            log_search_box: function(t, i) {
                i = e.extend({}, this.defaultLoggingdata(), i), this.log_session && Tumblr.Events.trigger("Capture:push", "search_box_usage", t, i), e.contains(["focus", "form_submit", "explore_click", "typeahead_click"], t) && Tumblr.Events.trigger("header_search:" + t, {
                    loggingData: i
                })
            },
            setup_autocomplete: function() {
                this.onboarding_search ? this.auto_complete = new Tumblr.OnboardingAutoCompleteSearch({
                    el: this.$search_query,
                    endpoint: this.onboarding_search_endpoint,
                    popover: this.popover
                }) : this.auto_complete = new Tumblr.AutoCompleteSearch({
                    el: this.$search_query,
                    store: "/svc/search_popover",
                    popover: this.popover,
                    base_blog_search_url: this.options.base_blog_search_url || null,
                    blog_search_label: this.options.blog_search_label || 'More results for "%1$s"'
                })
            },
            focus_search_query: function() {
                this.$search_field.addClass("active"), this.currentIndex = -1, this.$search_query.val() === this.$search_query.attr("placeholder") && this.$search_query.val(""), this.auto_complete.lookup(), this.$search_query.val().length || (this.$("#unread_tag_notice").hide(), this.$search_query.removeClass("with_unread")), Tumblr.Events.trigger("SearchPopover:focus"), this.log_search_box("focus")
            },
            blur_search_query: function(t) {
                Tumblr.Events.trigger("SearchPopover:blur"), this.log_search_box("blur")
            },
            set_active: function(e) {
                var i = t(this.popover_selector + " .popover_menu_item a").filter(":visible"),
                    o = i.filter(":focus");
                o.length && (this.currentIndex = "previous" === e ? i.index(o) - 1 : i.index(o) + 1), this.currentIndex >= 0 && this.currentIndex < i.length ? i.eq(this.currentIndex).focus() : this.currentIndex === -2 && "previous" === e ? (i.eq(i.length - 1).focus(), this.currentIndex = i.length - 1) : (this.currentIndex = -1, this.$search_query.focus())
            },
            change_query: function(t) {
                return this.$search_query.val(t), this
            },
            force_submit: function() {
                this.$("#search_form").trigger("submit")
            },
            submit: function() {
                return "" === t.trim(this.$search_query.val()) ? (window.location = "/explore", !1) : (e.isFunction(this.auto_complete.abort) && this.auto_complete.abort(), this.popover.hide(), this.$search_query.blur(), this.$search_field.removeClass("active"), this.log_search_box("form_submit"), void Tumblr.Events.trigger("Capture:push", "search_page_usage", "submit", {
                    query: this.$search_query.val()
                }))
            }
        });
        i.SearchPopover = o
    }(jQuery, _, Tumblr), /*! scripts/search/views/popover/search_autocomplete.js */
    function(t, e) {
        var i = Backbone.View.extend({
            events: {
                keyup: "keyup"
            },
            initialize: function(e) {
                this.options = e || {}, this.endpoint = this.options.endpoint || "/svc/search_popover/", this.threshold = this.options.threshold || 1, this.cache_size = this.options.cache_size || 15, this.init_value = this.$el.val(), this.base_blog_search_url = this.options.base_blog_search_url || "/search/blogs?q=", this.blog_search_label = this.options.blog_search_label || 'More blogs with "%1$s"', this.form_key = t("#tumblr_form_key").attr("content"), this.cache = {}, this.queries = [], this.popover = this.options.popover, this.search_results_template = t("#search_results_template").html(), this.search_results_item_blogs_template = t("#search_results_item_blogs").html(), this.search_results_item_tags_template = t("#search_results_item_tags").html(), this.$search_query = t("#search_query"), this.$search_results_container = t("#search_results_container .scrollable_container"), this.$tracked_tags = t(".tracked_tags.search_results_section"), this.tracked_tags_markup = t("<div>").append(this.$tracked_tags.clone()).html()
            },
            keyup: _.throttle(function(t) {
                this.lookup()
            }, 300),
            prepare_search_data: function() {
                return this.queries.push(this.search_query), {
                    q: this.search_query_raw
                }
            },
            get_results: function(e) {
                return e = e || function() {}, this.cache[this.search_query] ? (this.results = this.cache[this.search_query], void e.call(this)) : (this.search_in_progress = !0, this.results = {
                    tags: [],
                    blogs: []
                }, this.store_xhr = t.ajax({
                    url: this.endpoint,
                    data: this.prepare_search_data(),
                    dataType: "json",
                    type: "GET"
                }), this.store_xhr.done(_.bind(function(t) {
                    this.results = t, this.add_to_cache(this.search_query, t)
                }, this)), this.store_xhr.fail(_.bind(function(t, e) {
                    "abort" === e && (this.force_hide = !0)
                }, this)), void this.store_xhr.always(_.bind(function(t) {
                    this.search_in_progress = !1, e.call(this)
                }, this)))
            },
            lookup: function() {
                var e = t.trim(this.$el.val());
                "#" == e[0] && (e = e.substr(1));
                var i = e.length;
                i >= this.threshold && e.length ? (this.search_query = _.escape(e), this.search_query_raw = e, this.force_hide = !1, this.get_results(_.bind(function() {
                    this.update(), Tumblr.Events.trigger("SearchPopover:update")
                }, this))) : this.reset_popover(), this.init = !1, this.init_value = ""
            },
            show_tracked_tags: function() {
                this.$tracked_tags.children().length > 0 ? this.$tracked_tags.show() : this.popover.hide()
            },
            hide_tracked_tags: function() {
                this.$tracked_tags.hide()
            },
            reset_popover: function() {
                this.$tracked_tags.children().length > 0 ? (this.$search_results_container.html(this.tracked_tags_markup), this.popover.show()) : this.popover.hide()
            },
            add_to_cache: function(t, e) {
                this.cache[t] = e, _.size(this.cache) > this.cache_size && (delete this.cache[this.queries[0]], this.queries.shift())
            },
            should_add_query_to_tags: function(t) {
                var e = _.find(t, function(t) {
                    var e = t.tag.toLowerCase(),
                        i = this.search_query.toLowerCase(),
                        o = this.search_query_raw.toLowerCase();
                    return e == i || e == o
                }, this);
                if (!e) {
                    var i = {
                        tag: this.search_query,
                        url: "/tagged/" + this.search_query,
                        is_query: !0
                    };
                    t.unshift(i)
                }
                return t
            },
            should_add_query_to_blogs: function(t) {
                var e = _.find(t, function(t) {
                    var e = t.name.toLowerCase(),
                        i = this.search_query.toLowerCase(),
                        o = this.search_query_raw.toLowerCase();
                    return e == i || e == o
                }, this);
                if (!e) {
                    var i = [this.search_query, ".", window.location.hostname].join(""),
                        o = {
                            escaped_title: this.search_query,
                            hilite_title: this.search_query,
                            hilite_url: i,
                            name: this.search_query,
                            show_pixelation: !0,
                            tumblr_url: i,
                            isGoToBlog: !0
                        };
                    t.unshift(o)
                }
                return t
            },
            inject_search_substring: function(t, e) {
                if (this.search_query) {
                    var i = new RegExp(this._escapeRegExp(this.search_query), "gi"),
                        o = this.decorate_search_substring;
                    if (i) return _.each(t, function(s, n) {
                        "tag" != e || s.is_query || (t[n].escaped_tag = t[n].escaped_tag || _.escape(s.tag), t[n].hilite_tag = t[n].hilite_tag || s.escaped_tag.replace(i, o)), "blog" == e && (t[n].hilite_name = t[n].hilite_name || s.name.replace(i, o), t[n].escaped_title = t[n].escaped_title || _.escape(s.title), t[n].hilite_title = t[n].hilite_title || s.escaped_title.replace(i, o), t[n].hilite_url = t[n].hilite_url || s.url.replace(i, o))
                    }), t
                }
            },
            decorate_search_substring: function(t) {
                return "<u>" + t + "</u>"
            },
            _escapeRegExp: function(t) {
                return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|\~\`\!\@\#]/g, "\\$&")
            },
            update: function() {
                if (_.isObject(this.results)) {
                    var t, e = _.isArray(this.results.tags) ? this.results.tags : [],
                        i = _.isArray(this.results.blogs) ? this.results.blogs : [],
                        o = "",
                        s = _.template(this.search_results_template);
                    e = this.should_add_query_to_tags(e), e = this.inject_search_substring(e, "tag"), this.results.query_term_is_active_blog && (i = this.should_add_query_to_blogs(i)), i = this.inject_search_substring(i, "blog"), _.size(e) && (e.length > 5 && (e = e.slice(0, 5)), t = {
                        results: {
                            type: "tag",
                            items: e,
                            query: this.search_query,
                            item_template: this.search_results_item_tags_template,
                            blog_search_url: this.base_blog_search_url,
                            blog_search_label: this.blog_search_label
                        }
                    }, o += s(t)), _.size(i) && (s = _.template(this.search_results_template), t = {
                        results: {
                            type: "blog",
                            items: i,
                            query: this.search_query,
                            item_template: this.search_results_item_blogs_template,
                            blog_search_url: this.base_blog_search_url,
                            blog_search_label: this.blog_search_label
                        }
                    }, o += s(t)), o.length && !this.force_hide ? (this.$search_results_container.empty().prop("innerHTML", o), this.popover.show()) : this.reset_popover()
                }
            },
            abort: function() {
                this.store_xhr && this.store_xhr.abort()
            }
        });
        e.AutoCompleteSearch = i
    }(jQuery, Tumblr), /*! scripts/capture.js */
    function(t, e) {
        var i = {};
        i.Base = Backbone.View.extend({
            el: "body",
            svc_url: "/svc/log/capture",
            initialize: function() {
                this.form_key = t("#tumblr_form_key").attr("content"), this.start_time = (e.getRealNow || _.now)(), this.tracking_data = {}, t(window).on("beforeunload.capture", _.bind(this.send_data, this))
            },
            _get_delta: function() {
                var t = (e.getRealNow || _.now)();
                return t - this.start_time
            },
            enable_listeners: function() {
                this.listenTo(Tumblr.Events, "Capture:set", this._set, this), this.listenTo(Tumblr.Events, "Capture:push", this._push, this)
            },
            _set: function(t, e, i) {
                t in this.tracking_data || (this.tracking_data[t] = {}), this.tracking_data[t][e] = i
            },
            _push: function(t, e, i) {
                i = i || {}, _.isObject(i) && (i.time = this._get_delta()), t in this.tracking_data || (this.tracking_data[t] = {}), e in this.tracking_data[t] && _.isArray(this.tracking_data[t][e]) || (this.tracking_data[t][e] = []), this.tracking_data[t][e].push(i)
            },
            send_data: function() {
                if (Tumblr.Flags.bool("enable_capture_js") && !(this.sending_data || _.size(this.tracking_data) < 1)) {
                    this.track_context();
                    t.ajax({
                        url: this.svc_url,
                        type: "POST",
                        data: {
                            log: this.tracking_data
                        },
                        withFormKey: !0,
                        async: !1
                    });
                    this.tracking_data = {}
                }
            },
            unique_cookie: function() {
                var t = Tumblr.Cookie.get("capture") || this.form_key;
                return t == this.form_key && Tumblr.Cookie.set("capture", this.form_key), t
            },
            track_context: function() {
                this.tracking_data.context = this.tracking_data.context || {}, this.tracking_data.context.id = this.unique_cookie(), this.tracking_data.context.language = (window.navigator.userLanguage || window.navigator.language).toLowerCase(), this.tracking_data.context.path = document.location.pathname
            }
        }), i.Generic = i.Base.extend({
            initialize: function() {
                i.Base.prototype.initialize.call(this), this.enable_listeners(), Tumblr.Events.trigger("capture:init")
            },
            _set_generic_data: function() {
                this.tracking_data._init = this.start_time, this.tracking_data._elapsed = this._get_delta()
            },
            send_data: function() {
                _.size(this.tracking_data) < 1 || (this._set_generic_data(), i.Base.prototype.send_data.call(this))
            }
        }), i.UserActions = i.Base.extend({
            el: "body",
            mb_sent: {},
            premium_action_sent: {},
            initialize: function() {
                i.Base.prototype.initialize.call(this), this.tracking_data.context = {}
            },
            send_moneyball_beacon: function(t, e) {
                Tumblr.Logging.ads.doLogExternal(t.$el.data("serve-id"), e)
            },
            get_post_id: function(t, e) {
                e = e || ".post";
                var i = 0,
                    o = t.closest(e);
                return o.length && (i = o.data("post-id")), i
            },
            track_signup_buttons: function(e) {
                var i = t(e.target),
                    o = i.attr("id").replace("signup_button_", "");
                this.tracking_data.signup_button[o] = 1
            },
            track_search: function(e) {
                var i = t(e.target),
                    o = i.serialize();
                this.tracking_data.search = o
            },
            track_explore_tag: function(e) {
                var i = t(e.target);
                this.tracking_data.explore = i.text()
            },
            track_small_links: function(e) {
                var i = t(e.target),
                    o = i.attr("href");
                "/explore" == o && (this.tracking_data.explore_link = 1)
            },
            track_post_tags: function(e) {
                var i = t(e.target),
                    o = (this.get_post_id(i), {
                        post_id: i.text()
                    });
                this.tracking_data.post_tags.push(o)
            },
            track_post_info: function(e) {
                var i = t(e.target),
                    o = (this.get_post_id(i), i.text());
                this.tracking_data.post_info = {
                    post_id: o
                }
            },
            track_post_controls: function(e) {
                var i, o = t(e.target),
                    s = this.get_post_id(o);
                o.hasClass("reblog_button") && (i = "reblog"), o.hasClass("like_button") && (i = "like"), (o.hasClass("reblog_count") || o.closest(".reblog_count").length) && (i = "notes"), this.tracking_data.post_controls[s] = this.tracking_data.post_controls[s] || [], this.tracking_data.post_controls[s][i] = 1
            },
            track_post_content: function(e) {
                var i = t(e.target),
                    o = i.closest(".post"),
                    s = this.get_post_id(i),
                    n = o.attr("data-type") || "unknown",
                    r = i[0].outerHTML.replace(/[\n\r]/g, " ").replace(/\>\s+\/</g, "");
                this.tracking_data.post_content[s] = this.tracking_data.post_content[s] || {}, this.tracking_data.post_content[s].post_type = n, this.tracking_data.post_content[s].clicks = this.tracking_data.post_content[s].clicks || [], this.tracking_data.post_content[s].clicks.push(r)
            },
            track_j_k_keys: function(e) {
                var i = e.keyCode;
                74 != i && 75 != i || t("body").hasClass("show_form") || (this.tracking_data.keycommands = 1)
            },
            track_auto_pager: function(t) {
                this.page_number = this.page_number || 1, this.tracking_data.auto_pager = this.page_number, this.page_number++
            },
            track_recommendations: function(e) {
                var i = t(e.target),
                    o = i.closest(".ht_post").data("id"),
                    s = i.hasClass("hello_tag") ? "tag" : "thumbnail",
                    n = i.attr("href");
                this.tracking_data.recommendations.push({
                    post_id: o,
                    type: s,
                    url: n
                })
            },
            track_related_tag: function(e) {
                var i = t(e.target),
                    o = !1;
                i.hasClass(".tag") || (i = i.closest(".tag")), o = t.trim(i.text()), o && o.length && this.tracking_data.related_tags.push(o)
            },
            track_related_blog: function(e) {
                var i = t(e.target),
                    o = !1;
                i.hasClass(".blog") || (i = i.closest(".blog")), o = i.data("tumblelog"), o && o.length && this.tracking_data.related_blogs.push(o)
            },
            track_tag_source: function() {
                t("body").hasClass("sassafras") ? this.tracking_data.tag_source = "sassafras" : this.tracking_data.tag_source = "default"
            }
        }), i.OnboardingDash = i.UserActions.extend({
            events: {
                "submit #search_form": "track_search",
                "click .signup_buttons .chrome": "track_signup_buttons",
                "click .tracked_tag .tag": "track_explore_tag",
                "click .post .tag": "track_post_tags",
                "click .post_info a": "track_post_info",
                "click .post_controls a": "track_post_controls",
                "click .post_content > *": "track_post_content",
                "click #right_column .small_links a": "track_small_links",
                keydown: "track_j_k_keys"
            },
            initialize: function() {
                i.UserActions.prototype.initialize.call(this), this.svc_url = "/svc/log/capture/logged_out_dashboard", this.tracking_data.signup_button = {}, this.tracking_data.search = "", this.tracking_data.explore = "", this.tracking_data.explore_link = 0, this.tracking_data.post_tags = [], this.tracking_data.post_info = {}, this.tracking_data.post_controls = {}, this.tracking_data.post_content = {}, this.tracking_data.keycommands = 0, this.tracking_data.auto_pager = 0, this.track_auto_pager(), window.AfterAutoPaginationQueue && window.AfterAutoPaginationQueue.push(_.bind(this.track_auto_pager, this)), this.source_page = "onboarding_dash"
            }
        }), i.OnboardingTags = i.OnboardingDash.extend({
            events: _.extend({
                "click #related_tags .tag": "track_related_tag"
            }, i.OnboardingDash.prototype.events),
            initialize: function() {
                i.OnboardingDash.prototype.initialize.call(this), this.svc_url = "/svc/log/capture/logged_out_tags", this.tracking_data.related_tags = [], this.track_tag_source(), this.source_page = "onboarding_tags"
            }
        }), i.HelloDash = i.UserActions.extend({
            el: "body",
            events: {
                "submit #search_form": "track_search",
                "click .signup_buttons .chrome": "track_signup_buttons",
                "click .ht_post .hello_tag": "track_post_tags",
                "click .ht_post .go": "track_go_lightbox",
                keydown: "track_j_k_keys"
            },
            track_post_tags: function(e) {
                var i = t(e.target),
                    o = this.get_post_id(i, ".ht_post"),
                    s = {};
                s[o] = i.text(), this.tracking_data.post_tags.push(s)
            },
            track_go_lightbox: function(e) {
                var i = t(e.target),
                    o = this.get_post_id(i, ".ht_post");
                this.tracking_data.go_lightbox.push(o)
            },
            has_zoom_effect: function() {
                return t('.ht_post[data-effect="grow"]').length || t(".ht_post").data("grow")
            },
            track_post_zoom_effect: function() {
                this.has_zoom_effect && (this.tracking_data.has_zoom = 1)
            },
            initialize: function() {
                i.UserActions.prototype.initialize.call(this), this.svc_url = "/svc/log/capture/hello_dash", this.tracking_data.signup_button = {}, this.tracking_data.search = "", this.tracking_data.post_tags = [], this.tracking_data.go_lightbox = [], this.tracking_data.has_zoom = 0, this.track_post_zoom_effect(), this.source_page = "hello_dash"
            }
        }), i.HelloLightbox = i.UserActions.extend({
            events: {
                "click .post .tag": "track_post_tags",
                "click .post_info a": "track_post_info",
                "click .post_controls a": "track_post_controls",
                "click .post_content > *": "track_post_content",
                "click .recommendations a": "track_recommendations",
                keydown: "track_j_k_keys"
            },
            initialize: function() {
                i.UserActions.prototype.initialize.call(this), this.svc_url = "/svc/log/capture/hello_lightbox", this.tracking_data.post_tags = [], this.tracking_data.post_info = {}, this.tracking_data.post_controls = {}, this.tracking_data.post_content = {}, this.tracking_data.keycommands = 0, this.tracking_data.auto_pager = 0, this.tracking_data.recommendations = [], this.track_auto_pager(), window.AfterAutoPaginationQueue && window.AfterAutoPaginationQueue.push(_.bind(this.track_auto_pager, this)), this.source_page = "hello_lightbox"
            }
        }), i.Radar = i.UserActions.extend({
            el: "#tumblr_radar",
            events: {
                "click .radar_content a": "track_radar_content",
                "click .radar_controls a": "track_radar_controls",
                "click .radar_footer a": "track_radar_footer"
            },
            initialize: function() {
                i.UserActions.prototype.initialize.call(this), this.svc_url = "/svc/log/capture_radar", this.init_tracking_data()
            },
            init_tracking_data: function() {
                this.tracking_data.radar_id = {}, this.tracking_data.radar_content = [], this.tracking_data.radar_controls = {}, this.tracking_data.radar_footer = 0
            },
            send_data: function() {
                this.tracking_data.radar_id.post_id && (i.UserActions.prototype.send_data.call(this), this.init_tracking_data())
            },
            track_radar_id: function() {
                this.tracking_data.radar_id.post_id || (this.tracking_data.radar_id = {
                    tumblelog: this.$el.data("tumblelog-name"),
                    post_id: this.$el.data("post-id")
                })
            },
            track_follow: function(t) {
                var e = t ? "follow" : "unfollow";
                this.tracking_data.radar_controls[e] = 1 + (this.tracking_data.radar_controls[e] || 0), this.track_radar_id(), t && i.UserActions.prototype.send_moneyball_beacon(this, e)
            },
            track_like: function(t) {
                var e = t ? "like" : "unlike";
                this.tracking_data.radar_controls[e] = 1 + (this.tracking_data.radar_controls[e] || 0), this.track_radar_id(), t && i.UserActions.prototype.send_moneyball_beacon(this, e)
            },
            track_reblog: function(t, e) {
                var o = "reblog";
                this.tracking_data.radar_controls[o] = 1 + (this.tracking_data.radar_controls[o] || 0), this.track_radar_id(), i.UserActions.prototype.send_moneyball_beacon(this, o)
            },
            track_fast_reblog: function(t, e) {
                var o = "reblog";
                this.tracking_data.radar_controls[o] = 1 + (this.tracking_data.radar_controls[o] || 0), this.track_radar_id(), i.UserActions.prototype.send_moneyball_beacon(this, o)
            },
            track_notes: function(t, e) {
                var o = "notes";
                this.tracking_data.radar_controls[o] = 1 + (this.tracking_data.radar_controls[o] || 0), this.track_radar_id(), i.UserActions.prototype.send_moneyball_beacon(this, o)
            },
            track_radar_content: function(e) {
                var o = t(e.target);
                o = o.is("a") ? o : o.closest("a");
                var s = o.attr("href");
                this.tracking_data.radar_content.push({
                    clicked: s
                }), this.track_radar_id(), i.UserActions.prototype.send_moneyball_beacon(this, "photo")
            },
            track_avatar: function(t, e) {
                var o = "avatar";
                this.tracking_data.radar_controls[o] = 1 + (this.tracking_data.radar_controls[o] || 0), this.track_radar_id(), i.UserActions.prototype.send_moneyball_beacon(this, o)
            },
            track_radar_controls: function(e) {
                var i = t(e.target);
                i = i.is("a") ? i : i.closest("a");
                var o = !1;
                if (i.hasClass("reblog") && !e.altKey ? o = "reblog" : i.hasClass("note_link_current") && (o = "notes"), o !== !1)
                    if ("reblog" == o) {
                        var s = this,
                            n = function(e) {
                                s.track_reblog(t(e.target), e), s.track_radar_id(), t("body").off("click.capturejs")
                            };
                        t("body").on("click.capturejs", "#create_post > button, .post-composer_save [data-js-clickablesave]", n)
                    } else this["track_" + o](i, e), this.track_radar_id()
            },
            track_radar_footer: function(e) {
                t(e.currentTarget).hasClass("follow") || (this.tracking_data.radar_footer = 1, this.track_radar_id(), i.UserActions.prototype.send_moneyball_beacon(this, "posts"))
            }
        }), i.WebInStream = i.UserActions.extend({
            el: ".sponsored_post",
            events: {
                "click .post_controls .post_control": "track_sponsored_controls",
                "click .post_permalink": "track_sponsored_controls",
                "click .post_avatar a": "track_sponsored_controls",
                "click .post_info .post_info_fence": "track_sponsored_controls",
                "click .post_info .reblog_follow_button": "track_sponsored_controls",
                "click .sponsored_wrapper .post_header_follow": "track_blue_follow",
                "click .post_tags a.post_tag": "track_sponsored_controls",
                "click .post_media_photo": "track_photo",
                "click .photoset_photo": "track_photo",
                "click .post_body img": "track_photo",
                "click .post_notes_label": "track_sponsored_controls",
                "click .post_body a:not(.read_more)": "track_sponsored_controls",
                "click .link-button": "track_click_thru"
            },
            initialize: function() {
                this.initialized || (i.UserActions.prototype.initialize.call(this), this.svc_url = "/svc/log/capture_web_instream", this.init_tracking_data(), this.control_names = {
                    post_avatar_link: "avatar",
                    post_tag: "tags",
                    post_permalink: "permalink",
                    reblog: "reblog",
                    post_notes_label: "notes",
                    share_email: "share",
                    share_facebook: "share",
                    share_twitter: "share",
                    share_permalink: "share",
                    post_media_photo: "photo",
                    photoset_photo: "photo",
                    post_media: "photo",
                    post_body: "post_body"
                }, this.initialized = !0)
            },
            init_tracking_data: function() {
                this.tracking_data.sponsored_id = {}, this.tracking_data.sponsored_controls = {}, this.tracking_data.sponsored_content = [], this.tracking_data.sponsored_tags = [], this.tracking_data.is_moneyball = this.$el.data("mb-click-url") ? 1 : 0
            },
            send_data: function() {
                this.tracking_data.sponsored_id.post_id && this.$el.hasClass("sponsored_post") && (i.UserActions.prototype.send_data.call(this), this.init_tracking_data())
            },
            track_sponsored_id: function() {
                this.tracking_data.sponsored_id.post_id || (this.tracking_data.sponsored_id = {
                    tumblelog: this.$el.data("tumblelog-name"),
                    post_id: this.$el.data("post-id"),
                    placement_id: this.$el.data("placement_id")
                })
            },
            track_follow: function(t) {
                var e = t ? "follow" : "unfollow";
                this.tracking_data.sponsored_controls[e] = 1 + (this.tracking_data.sponsored_controls[e] || 0), this.track_sponsored_id(), t && i.UserActions.prototype.send_moneyball_beacon(this, e)
            },
            track_blue_follow: function() {
                var t = "follow";
                this.tracking_data.sponsored_controls[t] = 1 + (this.tracking_data.sponsored_controls[t] || 0), this.track_sponsored_id(), i.UserActions.prototype.send_moneyball_beacon(this, t)
            },
            track_like: function(t) {
                var e = t ? "like" : "unlike";
                this.tracking_data.sponsored_controls[e] = 1 + (this.tracking_data.sponsored_controls[e] || 0), this.track_sponsored_id(), t && i.UserActions.prototype.send_moneyball_beacon(this, e)
            },
            track_reblog: function(t, e) {
                var o = "reblog";
                this.tracking_data.sponsored_controls[o] = 1 + (this.tracking_data.sponsored_controls[o] || 0), this.track_sponsored_id(), i.UserActions.prototype.send_moneyball_beacon(this, o)
            },
            track_fast_reblog: function() {
                var t = "reblog";
                this.tracking_data.sponsored_controls[t] = 1 + (this.tracking_data.sponsored_controls[t] || 0), this.track_sponsored_id(), i.UserActions.prototype.send_moneyball_beacon(this, t)
            },
            track_notes: function() {
                var t = "notes";
                this.tracking_data.sponsored_controls[t] = 1 + (this.tracking_data.sponsored_controls[t] || 0), this.track_sponsored_id(), i.UserActions.prototype.send_moneyball_beacon(this, t)
            },
            track_click_thru: function() {
                var t = "click_thru";
                this.tracking_data.sponsored_controls[t] = 1 + (this.tracking_data.sponsored_controls[t] || 0), this.track_sponsored_id(), i.UserActions.prototype.send_moneyball_beacon(this, t)
            },
            track_share: function() {
                var t = "share";
                this.tracking_data.sponsored_controls[t] = 1 + (this.tracking_data.sponsored_controls[t] || 0), this.track_sponsored_id(), i.UserActions.prototype.send_moneyball_beacon(this, t)
            },
            track_photo: function() {
                var t = "photo";
                this.tracking_data.sponsored_controls[t] = 1 + (this.tracking_data.sponsored_controls[t] || 0), this.track_sponsored_id(), i.UserActions.prototype.send_moneyball_beacon(this, t)
            },
            track_caption: function() {
                var t = "caption";
                this.tracking_data.sponsored_controls[t] = 1 + (this.tracking_data.sponsored_controls[t] || 0), this.track_sponsored_id(), i.UserActions.prototype.send_moneyball_beacon(this, t)
            },
            track_sponsored_content: function(e) {
                var o = t(e.target);
                o = o.is("a") ? o : o.closest("a"), this.tracking_data.sponsored_content.push({
                    clicked: o.attr("href")
                }), this.track_sponsored_id(), i.UserActions.prototype.send_moneyball_beacon(this, "sponsored_controls_click")
            },
            track_sponsored_controls: function(e) {
                var o = t(t(e.target).className ? e.target : e.currentTarget);
                o.hasClass("share_social_button") && e.target != e.currentTarget && (o = t(e.target).parent());
                var s = null;
                if (o.parent().hasClass("source_url")) s = "source_url";
                else if (!o.parent().hasClass("post_info") || o.hasClass("reblog_follow_button") || o.hasClass("post_header_follow")) {
                    if (0 != o.parents(".post_body").length) s = "caption";
                    else
                        for (var n in this.control_names)
                            if (o.hasClass(n)) {
                                s = this.control_names[n];
                                break
                            }
                } else s = "posts";
                if (s)
                    if ("reblog" == s) {
                        var r = this,
                            a = function(e) {
                                r.track_reblog(t(e.target), e), r.track_sponsored_id(), t("body").off("click.capturejs")
                            };
                        t("body").on("click.capturejs", "#create_post > button, .post-composer_save [data-js-clickablesave]", a)
                    } else this["track_" + s] && this["track_" + s].call ? (this["track_" + s](o, e), this.track_sponsored_id()) : (this.tracking_data.sponsored_controls[s] = 1 + (this.tracking_data.sponsored_controls[s] || 0), this.track_sponsored_id(), i.UserActions.prototype.send_moneyball_beacon(this, s))
            },
            force_track_sponsored_controls: function(t) {
                this.tracking_data.sponsored_controls[t] = 1 + (this.tracking_data.sponsored_controls[t] || 0), this.track_sponsored_id(), i.UserActions.prototype.send_moneyball_beacon(this, t)
            }
        }), i.PremiumRadar = i.Radar.extend({
            el: "#tumblr_radar.premium",
            events: function() {
                return _.extend({}, i.Radar.prototype.events, {
                    "mouseenter .radar_content a": "track_radar_hover",
                    "mouseleave .radar_content a": "track_radar_hover"
                })
            },
            initialize: function() {
                i.Radar.prototype.initialize.call(this), this.svc_url = "/svc/log/capture_premium_radar", this.tracking_data.is_moneyball = this.$el.data("mb-click-url") ? 1 : 0, _.bindAll(this, "track_radar_loaded"), t(window).load(this.track_radar_loaded), this.track_radar_visibility(), _.bindAll(this, "track_radar_visibility"), t(window).scroll(this.track_radar_visibility)
            },
            track_radar_id: function() {
                this.tracking_data.radar_id.post_id || (this.tracking_data.radar_id = {
                    tumblelog: this.$el.data("tumblelog-name"),
                    post_id: this.$el.data("post-id"),
                    placement_id: this.$el.data("placement_id")
                })
            },
            get_radar_args: function(t) {
                for (var e = [this.$el.data("tumblelog-name"), this.$el.data("post-id")], i = 0; i < arguments.length; i++) e.push(arguments[i]);
                return e
            },
            track_follow: function(t) {
                i.Radar.prototype.track_follow.call(this, t)
            },
            track_like: function(t) {
                i.Radar.prototype.track_like.call(this, t)
            },
            track_reblog: function(t, e) {
                i.Radar.prototype.track_reblog.call(this, t, e)
            },
            track_radar_content: function(t) {
                i.Radar.prototype.track_radar_content.call(this, t)
            },
            track_radar_hover: function(t) {},
            track_radar_loaded: function(t) {},
            track_radar_visibility: function(t) {},
            elInView: function(t) {
                for (var e = t.offsetTop, i = t.offsetLeft, o = t.offsetWidth, s = t.offsetHeight; t.offsetParent;) t = t.offsetParent, e += t.offsetTop, i += t.offsetLeft;
                return e < window.pageYOffset + window.innerHeight && i < window.pageXOffset + window.innerWidth && e + s > window.pageYOffset && i + o > window.pageXOffset
            },
            track_radar_footer: function(t) {
                i.Radar.prototype.track_radar_footer.call(this, t)
            },
            track_radar_badge: function(t) {
                this.tracking_data.radar_badge = 1, this.track_radar_id()
            },
            force_track_radar_controls: function(t) {
                this.tracking_data.radar_controls[t] = 1 + (this.tracking_data.radar_controls[t] || 0), this.track_radar_id(), i.UserActions.prototype.send_moneyball_beacon(this, t)
            }
        }), i.SearchPopover = i.UserActions.extend({
            el: ".l-header",
            events: {
                "mousedown .tracked_tags .result_link": "track_tracked_tag_click",
                "mousedown .tag .result_title": "track_tag_click",
                "mousedown .blog .result_link": "track_blog_click",
                "mousedown .blog .more_results_link": "track_blog_click",
                "keydown #popover_search": "keyup"
            },
            initialize: function() {
                i.UserActions.prototype.initialize.call(this), this.svc_url = "/svc/log/capture_search", this.$search_field = this.$el.find("#search_query"), this.$search_popover = this.$el.find("#popover_search"), this.tracking_data.query = 0, this.tracking_data.tag = 0, this.tracking_data.blog = 0, this.tracking_data.search_tag = 0, this.tracking_data.search_blog = 0, this.tracking_data.tracked_tag = 0
            },
            send_data: function() {
                0 === this.tracking_data.tracked_tag && 0 === this.tracking_data.query || i.UserActions.prototype.send_data.call(this)
            },
            get_query_name: function() {
                return t.trim(this.$search_field.val())
            },
            get_tag_name: function(e) {
                return t.trim(e.text()).replace("#", "")
            },
            get_tumblelog_name: function(t) {
                return t ? t.attr("data-tumblelog-name") : ""
            },
            track_query: function(t) {
                this.tracking_data.query = this.get_query_name().length ? 1 : 0
            },
            track_tag: function(t) {
                t.closest(".result.is_query").length ? this.tracking_data.search_tag++ : this.tracking_data.tag++, this.track_query()
            },
            track_blog: function(t) {
                t.hasClass("more_results_link") ? this.tracking_data.search_blog++ : this.tracking_data.blog++, this.track_query()
            },
            track_tag_click: function(e) {
                var i = t(e.currentTarget);
                this.track_tag(i)
            },
            track_tracked_tag_click: function(e) {
                var i = t(e.currentTarget);
                this.track_tracked_tag(i)
            },
            track_tracked_tag: function(t) {
                this.tracking_data.tracked_tag++, this.track_query()
            },
            track_blog_click: function(e) {
                var i = t(e.currentTarget);
                this.track_blog(i)
            },
            track_submit: function(t) {
                this.track_query()
            },
            keyup: function(e) {
                if (13 == e.keyCode) {
                    var i = t(document.activeElement);
                    i.closest(".tag").length && this.track_tag(i), i.closest(".tracked_tags").length && this.track_tracked_tag(i), i.closest(".blog").length && this.track_blog(i)
                }
            }
        }), i.CrushClick = i.UserActions.extend({
            el: "#crushes",
            events: {
                "mousedown .crush": "track_crush_click"
            },
            initialize: function() {
                i.UserActions.prototype.initialize.call(this), this.svc_url = "/svc/log/capture_crush", this.tracking_data.crush_clicks = []
            },
            track_crush_click: function(e) {
                var i = t(e.currentTarget);
                this.tracking_data.crush_clicks.push({
                    click_time: Math.round(Date.now() / 1e3),
                    tumblelog_name: i.data("tumblelog-name"),
                    position: i.attr("id").split("_")[1],
                    love: i.data("love")
                })
            }
        }), i.TumblelogClick = i.UserActions.extend({
            el: '[href^="http"][href*=".tumblr"]:not([href*="://tumblr"]):not([href*="://www.tumblr"]):not([href*=".media.tumblr"])',
            events: {
                mousedown: "track_click"
            },
            initialize: function() {
                i.UserActions.prototype.initialize.call(this), this.svc_url = "/svc/log/capture_tumblelog_click", this.tracking_data.page = t(location).attr("href"), this.tracking_data.tumblelog_clickthrough = {}
            },
            track_click: function(e) {
                var i = t(e.currentTarget),
                    o = t.trim(i.closest("[class]").prop("className"));
                this.tracking_data.tumblelog_clickthrough[o] = 1 + (this.tracking_data.tumblelog_clickthrough[o] || 0)
            }
        }), e.Capture = i, t(function(t) {
            Tumblr.CaptureGeneric = new Tumblr.Capture.Generic, Tumblr.Flags("tumblelog_clickthrough")(function() {
                Tumblr.CaptureTumblelogClick = new Tumblr.Capture.TumblelogClick
            }, !1)
        })
    }(jQuery, Tumblr), /*! scripts/vendor/gif-js/gif.js */
    function(t) {
        function e(t, i) {
            if ({}.hasOwnProperty.call(e.cache, t)) return e.cache[t];
            var o = e.resolve(t);
            if (!o) throw new Error("Failed to resolve module " + t);
            var s = {
                id: t,
                require: e,
                filename: t,
                exports: {},
                loaded: !1,
                parent: i,
                children: []
            };
            i && i.children.push(s);
            var n = t.slice(0, t.lastIndexOf("/") + 1);
            return e.cache[t] = s.exports, o.call(s.exports, s, s.exports, n, t), s.loaded = !0, e.cache[t] = s.exports
        }
        e.modules = {}, e.cache = {}, e.resolve = function(t) {
            return {}.hasOwnProperty.call(e.modules, t) ? e.modules[t] : void 0
        }, e.define = function(t, i) {
            e.modules[t] = i
        };
        var i = function(e) {
            return e = "/", {
                title: "browser",
                version: "v0.10.5",
                browser: !0,
                env: {},
                argv: [],
                nextTick: t.setImmediate || function(t) {
                    setTimeout(t, 0)
                },
                cwd: function() {
                    return e
                },
                chdir: function(t) {
                    e = t
                }
            }
        }();
        e.define("/gif.coffee", function(t, i, o, s) {
            function n(t, e) {
                return {}.hasOwnProperty.call(t, e)
            }

            function r(t, e) {
                for (var i = 0, o = e.length; i < o; ++i)
                    if (i in e && e[i] === t) return !0;
                return !1
            }

            function a(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var o in e) n(e, o) && (t[o] = e[o]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            }
            var l, h, c;
            h = e("events", t).EventEmitter, l = e("/browser.coffee", t), c = function(t, e, i) {
                function o(t) {
                    var i, o;
                    this.running = !1, this.options = {}, this.frames = [], this.freeWorkers = [], this.activeWorkers = [], this.setOptions(t);
                    for (i in e) o = e[i], null != this.options[i] ? this.options[i] : this.options[i] = o
                }
                return a(o, t), e = {
                    workerScript: "gif.worker.js",
                    workers: 2,
                    repeat: 0,
                    background: "#fff",
                    quality: 10,
                    width: null,
                    height: null
                }, i = {
                    delay: 500,
                    copy: !1
                }, o.prototype.setOption = function(t, e) {
                    return this.options[t] = e, null == this._canvas || "width" !== t && "height" !== t ? void 0 : this._canvas[t] = e
                }, o.prototype.setOptions = function(t) {
                    return function(e) {
                        var i, o;
                        for (i in t) n(t, i) && (o = t[i], e.push(this.setOption(i, o)));
                        return e
                    }.call(this, [])
                }, o.prototype.addFrame = function(t, e) {
                    var o, s;
                    null == e && (e = {}), o = {};
                    for (s in i) o[s] = e[s] || i[s];
                    if ("undefined" != typeof CanvasRenderingContext2D && null != CanvasRenderingContext2D && t instanceof CanvasRenderingContext2D || "undefined" != typeof WebGLRenderingContext && null != WebGLRenderingContext && t instanceof WebGLRenderingContext) e.copy ? o.data = this.getContextData(t) : o.context = t;
                    else {
                        if (null == t.childNodes) throw new Error("Invalid image");
                        null != this.options.width || this.setOption("width", t.width), null != this.options.height || this.setOption("height", t.height), e.copy ? o.data = this.getImageData(t) : o.image = t
                    }
                    return this.frames.push(o), null != o.width && this.setOption("width", o.width), null != o.height ? this.setOption("height", o.height) : void 0
                }, o.prototype.render = function() {
                    var t, e;
                    if (this.running) throw new Error("Already running");
                    this.running = !0, this.nextFrame = 0, this.finishedFrames = 0, this.imageParts = function(t) {
                        for (var e, i = 0, o = function() {
                                var t, t;
                                t = [];
                                for (var e = 0; 0 <= this.frames.length ? e < this.frames.length : e > this.frames.length; 0 <= this.frames.length ? ++e : --e) t.push(e);
                                return t
                            }.apply(this, arguments).length; i < o; ++i) e = function() {
                            var t, t;
                            t = [];
                            for (var e = 0; 0 <= this.frames.length ? e < this.frames.length : e > this.frames.length; 0 <= this.frames.length ? ++e : --e) t.push(e);
                            return t
                        }.apply(this, arguments)[i], t.push(null);
                        return t
                    }.call(this, []), e = this.spawnWorkers();
                    for (var i = 0, o = function() {
                            var t, t;
                            t = [];
                            for (var i = 0; 0 <= e ? i < e : i > e; 0 <= e ? ++i : --i) t.push(i);
                            return t
                        }.apply(this, arguments).length; i < o; ++i) t = function() {
                        var t, t;
                        t = [];
                        for (var i = 0; 0 <= e ? i < e : i > e; 0 <= e ? ++i : --i) t.push(i);
                        return t
                    }.apply(this, arguments)[i], this.renderNextFrame();
                    return this.emit("start"), this.emit("progress", 0)
                }, o.prototype.abort = function() {
                    for (var t;;) {
                        if (t = this.activeWorkers.shift(), !(null != t)) break;
                        console.log("killing active worker"), t.terminate()
                    }
                    return this.running = !1, this.emit("abort")
                }, o.prototype.spawnWorkers = function() {
                    var t, e, i;
                    e = Math.min(this.options.workers, this.frames.length);
                    for (var o = 0, s = function() {
                            var t, t;
                            t = [];
                            for (var i = this.freeWorkers.length; this.freeWorkers.length <= e ? i < e : i > e; this.freeWorkers.length <= e ? ++i : --i) t.push(i);
                            return t
                        }.apply(this, arguments).length; o < s; ++o) t = function() {
                        var t, t;
                        t = [];
                        for (var i = this.freeWorkers.length; this.freeWorkers.length <= e ? i < e : i > e; this.freeWorkers.length <= e ? ++i : --i) t.push(i);
                        return t
                    }.apply(this, arguments)[o], (i = this, function(t) {
                        var e, o;
                        return console.log("spawning worker " + t), o = new Worker(i.options.workerScript), e = i, o.onmessage = function(t) {
                            return e.activeWorkers.splice(e.activeWorkers.indexOf(o), 1), e.freeWorkers.push(o), e.frameFinished(t.data)
                        }, i.freeWorkers.push(o)
                    })();
                    return e
                }, o.prototype.frameFinished = function(t) {
                    return console.log("frame " + t.index + " finished - " + this.activeWorkers.length + " active"), this.finishedFrames++, this.emit("progress", this.finishedFrames / this.frames.length), this.imageParts[t.index] = t, r(null, this.imageParts) ? this.renderNextFrame() : this.finishRendering()
                }, o.prototype.finishRendering = function() {
                    var t, e, i, o, s, n, r;
                    s = 0;
                    for (var a = 0, l = this.imageParts.length; a < l; ++a) e = this.imageParts[a], s += (e.data.length - 1) * e.pageSize + e.cursor;
                    s += e.pageSize - e.cursor, console.log("rendering finished - filesize " + Math.round(s / 1e3) + "kb"), t = new Uint8Array(s), n = 0;
                    for (var h = 0, c = this.imageParts.length; h < c; ++h) {
                        e = this.imageParts[h];
                        for (var d = 0, _ = e.data.length; d < _; ++d) r = e.data[d], i = d, t.set(r, n), n += i === e.data.length - 1 ? e.cursor : e.pageSize
                    }
                    return o = new Blob([t], {
                        type: "image/gif"
                    }), this.emit("finished", o, t)
                }, o.prototype.renderNextFrame = function() {
                    var t, e, i;
                    if (0 === this.freeWorkers.length) throw new Error("No free workers");
                    return this.nextFrame >= this.frames.length ? void 0 : (t = this.frames[this.nextFrame++], i = this.freeWorkers.shift(), e = this.getTask(t), console.log("starting frame " + (e.index + 1) + " of " + this.frames.length), this.activeWorkers.push(i), i.postMessage(e))
                }, o.prototype.getContextData = function(t) {
                    return t.getImageData(0, 0, this.options.width, this.options.height).data
                }, o.prototype.getImageData = function(t) {
                    var e;
                    return null != this._canvas || (this._canvas = document.createElement("canvas"), this._canvas.width = this.options.width, this._canvas.height = this.options.height), e = this._canvas.getContext("2d"), e.setFill = this.options.background, e.fillRect(0, 0, this.options.width, this.options.height), e.drawImage(t, 0, 0), this.getContextData(e)
                }, o.prototype.getTask = function(t) {
                    var e, i;
                    if (e = this.frames.indexOf(t), i = {
                            index: e,
                            last: e === this.frames.length - 1,
                            delay: t.delay,
                            width: this.options.width,
                            height: this.options.height,
                            quality: this.options.quality,
                            repeat: this.options.repeat,
                            canTransfer: "chrome" === l.name
                        }, null != t.data) i.data = t.data;
                    else if (null != t.context) i.data = this.getContextData(t.context);
                    else {
                        if (null == t.image) throw new Error("Invalid frame");
                        i.data = this.getImageData(t.image)
                    }
                    return i
                }, o
            }(h), t.exports = c
        }), e.define("/browser.coffee", function(t, e, i, o) {
            var s, n, r, a, l;
            a = navigator.userAgent.toLowerCase(), r = navigator.platform.toLowerCase(), l = a.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/) || [null, "unknown", 0], n = "ie" === l[1] && document.documentMode, s = {
                name: "version" === l[1] ? l[3] : l[1],
                version: n || parseFloat("opera" === l[1] && l[4] ? l[4] : l[2]),
                platform: {
                    name: a.match(/ip(?:ad|od|hone)/) ? "ios" : (a.match(/(?:webos|android)/) || r.match(/mac|win|linux/) || ["other"])[0]
                }
            }, s[s.name] = !0, s[s.name + parseInt(s.version, 10)] = !0, s.platform[s.platform.name] = !0, t.exports = s
        }), e.define("events", function(t, e, o, s) {
            i.EventEmitter || (i.EventEmitter = function() {});
            var n = e.EventEmitter = i.EventEmitter,
                r = "function" == typeof Array.isArray ? Array.isArray : function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                },
                a = 10;
            n.prototype.setMaxListeners = function(t) {
                this._events || (this._events = {}), this._events.maxListeners = t
            }, n.prototype.emit = function(t) {
                if ("error" === t && (!this._events || !this._events.error || r(this._events.error) && !this._events.error.length)) throw arguments[1] instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
                if (!this._events) return !1;
                var e = this._events[t];
                if (!e) return !1;
                if ("function" != typeof e) {
                    if (r(e)) {
                        for (var i = Array.prototype.slice.call(arguments, 1), o = e.slice(), s = 0, n = o.length; s < n; s++) o[s].apply(this, i);
                        return !0
                    }
                    return !1
                }
                switch (arguments.length) {
                    case 1:
                        e.call(this);
                        break;
                    case 2:
                        e.call(this, arguments[1]);
                        break;
                    case 3:
                        e.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        var i = Array.prototype.slice.call(arguments, 1);
                        e.apply(this, i)
                }
                return !0
            }, n.prototype.addListener = function(t, e) {
                if ("function" != typeof e) throw new Error("addListener only takes instances of Function");
                if (this._events || (this._events = {}), this.emit("newListener", t, e), this._events[t])
                    if (r(this._events[t])) {
                        if (!this._events[t].warned) {
                            var i;
                            i = void 0 !== this._events.maxListeners ? this._events.maxListeners : a, i && i > 0 && this._events[t].length > i && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), console.trace())
                        }
                        this._events[t].push(e)
                    } else this._events[t] = [this._events[t], e];
                else this._events[t] = e;
                return this
            }, n.prototype.on = n.prototype.addListener, n.prototype.once = function(t, e) {
                var i = this;
                return i.on(t, function o() {
                    i.removeListener(t, o), e.apply(this, arguments)
                }), this
            }, n.prototype.removeListener = function(t, e) {
                if ("function" != typeof e) throw new Error("removeListener only takes instances of Function");
                if (!this._events || !this._events[t]) return this;
                var i = this._events[t];
                if (r(i)) {
                    var o = i.indexOf(e);
                    if (o < 0) return this;
                    i.splice(o, 1), 0 == i.length && delete this._events[t]
                } else this._events[t] === e && delete this._events[t];
                return this
            }, n.prototype.removeAllListeners = function(t) {
                return t && this._events && this._events[t] && (this._events[t] = null), this
            }, n.prototype.listeners = function(t) {
                return this._events || (this._events = {}), this._events[t] || (this._events[t] = []), r(this._events[t]) || (this._events[t] = [this._events[t]]), this._events[t]
            }
        }), t.GIF = e("/gif.coffee")
    }.call(this, this), /*! scripts/tumblr/binary_switch.js */
    function(t, e) {
        var i = Backbone.View.extend({
            el: ".binary_switcher",
            className: "binary_switch",
            defaults: {
                additionalClassNames: ""
            },
            initialize: function(t) {
                this.options = t || {}, this.options = _.extend(this.defaults, this.options || {})
            },
            render: function() {
                return _.each(this.$el.not("[data-binary-switch-init]"), _.bind(function(e) {
                    var i = t(e);
                    i.attr("data-binary-switch-init", !0), i.wrap(t("<label>").addClass(this.className).addClass(this.options.additionalClassNames)), i.after(t("<span>", {
                        "class": this.className + "_button"
                    })), i.after(t("<span>", {
                        "class": this.className + "_track"
                    }))
                }, this)), this
            }
        });
        e.BinarySwitch = i
    }(jQuery, Tumblr), /*! scripts/ghostlist.js */
    function(t, e, i) {
        "use strict";

        function o(t) {
            return null !== t && void 0 !== t ? "length" in t ? t : [t] : []
        }

        function s(t) {
            return t && "function" == typeof t.then ? t : "function" == typeof t ? function() {
                return s(t.apply(this, arguments))
            } : e.Deferred()[t === !1 ? "reject" : "resolve"](t).promise()
        }

        function n(e, i) {
            return t.compact(t.map(o(i), function(t) {
                return r(e, t)
            }))
        }

        function r(t, e) {
            var i;
            return !!(i = e.parentNode) && (i !== t ? r(t, i) : e)
        }

        function a(i, o) {
            var s = o.options.onBeforeAttach,
                n = o.options.onAfterAttach;
            return t.map(i, function(t) {
                var i = e.data(t);
                return i.exclude ? t : i.reattach ? void s.call(o, t, i).then(function() {
                    i.reattach(), i.reattach = null, n.call(o, t, i)
                }) : t
            })
        }

        function l(i, o) {
            var s = o.options.onViewable;
            t.each(i, function(t) {
                var i = e.data(t);
                if (!i.exclude) return i.promise && i.promise.state && "pending" === i.promise.state() ? t : void s.call(o, t, i, v)
            })
        }

        function h(i, o) {
            var s = o.options.styles,
                n = o.options.onBeforeDetach,
                r = o.options.onAfterDetach;
            return t.chain(i).map(function(t) {
                var i = e.data(t);
                return i.exclude ? t : i.promise && i.promise.state && "pending" === i.promise.state() ? t : ((i.promise = n.call(o, t, i)).then(function(e) {
                    i.reattach = d(t, s, "hide" === e), i.promise = null, r.call(o, t, i)
                }, function() {
                    i.promise = null
                }), t)
            }).tap(function() {
                i = null
            }).value()
        }

        function c(t, e) {
            try {
                t.removeChild(e)
            } catch (i) {}
        }

        function d(i, o, s) {
            var n = t.toArray(i.children),
                r = function() {
                    var s = t.pick(i.style, t.keys(o));
                    return t.extend(i.style, o, {
                            height: e(i).height() + "px",
                            width: e(i).width() + "px"
                        }),
                        function() {
                            t.extend(i.style, s, {
                                height: "",
                                width: ""
                            })
                        }
                }(),
                a = t.map(n, s ? function(t) {
                    var e = t.style.display;
                    return t.style.display = "none",
                        function() {
                            return t.style.display = e, t
                        }
                } : function(t) {
                    return c(i, t),
                        function() {
                            return i.appendChild(t), t
                        }
                }),
                l = m(n),
                h = function() {
                    return s ? t.noop : f(n)
                };
            return n = null, o = null,
                function() {
                    l(), h(), r(), t.each(a, function(t) {
                        t()
                    })
                }
        }

        function _(t, e, i, o) {
            for (var s, n, r = [], a = !1, l = 0, h = e.length; l < h;)
                if (s = e[l++], n = s.getBoundingClientRect(), 1 === s.nodeType)
                    if (n.bottom < i || n.top > o) {
                        if (a) break
                    } else a || (a = n.top > i), r.push(s);
            return r
        }

        function u(t, e, i, o) {
            var s = [],
                n = t.windowScrollY / t.documentHeight;
            n >= 0 || (n = 0), n <= 1 || (n = 1);
            var r, a, l, h = Math.floor(e.length * n);
            for (r = h; r >= 0 && (a = e[r--]) && (l = a.getBoundingClientRect()) && i < l.bottom;) 1 === a.nodeType && l.top < o && s.push(a);
            for (r = h + 1;
                (a = e[r++]) && (l = a.getBoundingClientRect()) && l.top < o;) 1 === a.nodeType && i < l.bottom && s.push(a);
            return s
        }

        function p(e, i) {
            var o, s = -(i.windowHeight * e.options.PAGES_ABOVE),
                n = i.windowHeight + i.windowHeight * e.options.PAGES_BELOW,
                r = e.container.children;
            o = e.options.nonlinear ? _(i, r, s, n) : u(i, r, s, n);
            var c = t.difference(e.attached, o);
            c.length && h(c, e);
            var d = t.intersection(o, e.detached);
            d.length && a(d, e);
            var p = t.difference(o, e.attached);
            p.length && l(p, e), e.detached = t.without.apply(null, [e.detached].concat(d)).concat(c), e.attached = o
        }

        function g(i) {
            var o = e(i.container).get(0);
            if (!o) throw "GhostList: Bad container form.";
            var n = t.bind(p, null, this),
                r = t.debounce(t.bind(p, null, this), 500);
            if (!i.eventor) throw "GhostList depends on DOMEventor";
            i.eventor.on("DOMEventor:flatscroll", n), i.eventor.on("DOMEventor:flatresize", r), this.container = o, this.attached = [], this.detached = [], this.options = {
                styles: i.styles || {},
                onBeforeDetach: s(i.onBeforeDetach || t.noop),
                onAfterDetach: i.onAfterDetach || t.noop,
                onBeforeAttach: s(i.onBeforeAttach || t.noop),
                onAfterAttach: i.onAfterAttach || t.noop,
                onViewable: i.onViewable || t.noop,
                PAGES_ABOVE: i.pages && void 0 !== i.pages[0] ? i.pages[0] : 1,
                PAGES_BELOW: i.pages && void 0 !== i.pages[1] ? i.pages[1] : 1,
                nonlinear: i.nonlinear,
                eventor: i.eventor,
                boundOnScroll: n,
                boundOnResize: r
            }, t.isFunction(i.initialize) && i.initialize.call(this)
        }
        var m = function() {
                function e(e) {
                    return "IMG" === e.nodeName ? [e] : t.toArray(e.getElementsByTagName("img"))
                }

                function i(t) {
                    var e = t.src;
                    if (e && e !== n) return t.src = n, {
                        img: t,
                        src: e
                    }
                }

                function s(t) {
                    return t.img.src = t.src, t.img
                }
                var n = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
                return function(n) {
                    var r = t.chain(o(n)).map(e).flatten().map(i).compact().value();
                    return r.length ? t.partial(t.map, r, s) : t.noop
                }
            }(),
            f = function() {
                function e(e) {
                    return "IFRAME" === e.nodeName ? [e] : t.toArray(e.getElementsByTagName("iframe"))
                }

                function i(t) {
                    var e = t.src;
                    if (e && e !== n) return t.src = n, {
                        iframe: t,
                        src: e
                    }
                }

                function s(t) {
                    return t.iframe.src = t.src, t.iframe
                }
                var n = "about:blank";
                return function(n) {
                    var r = t.chain(o(n)).map(e).flatten().map(i).compact().value();
                    return r.length ? t.partial(t.map, r, s) : t.noop
                }
            }(),
            v = function() {
                function e(e) {
                    var i = t.toArray(e.querySelectorAll("[data-background-image]"));
                    return e.getAttribute("data-background-image") && i.push(e), i
                }

                function i(t) {
                    var e = t.getAttribute("data-background-image");
                    if (e) return t.style.backgroundImage = "url(" + e + ")", t.removeAttribute("data-background-image"), t
                }
                return function(s) {
                    return t.chain(o(s)).map(e).flatten().map(i).compact().value()
                }
            }();
        g.prototype = {
            exclude: function(i) {
                return t.map(n(this.container, i), function(t) {
                    return e.data(t, "exclude", !0), t
                })
            },
            unexclude: function(i) {
                return t.map(n(this.container, i), function(t) {
                    return e.data(t, "exclude", !1), t
                })
            },
            clean: function() {},
            destroy: function() {
                a(this.detached, this), this.remove()
            },
            remove: function() {
                this.options.boundOnScroll && (this.options.eventor.off("DOMEventor:flatscroll", this.options.boundOnScroll), this.options.boundOnScroll = null), this.options.boundOnResize && (this.options.eventor.off("DOMEventor:flatresize", this.options.boundOnResize), this.options.boundOnResize = null)
            },
            relayout: function() {}
        }, i.GhostList = g
    }(_, jQuery, Tumblr), /*! scripts/fast_dashboard.js */
    function(t, e, i) {
        "use strict";
        Tumblr.Flags("fast_dashboard")(function() {
            var t = function() {
                    return function(t) {
                        var i = e(t),
                            s = i.children(".post").first(),
                            n = s.data("tumblelog-name");
                        return n && (o[n] = !0, i.data("tumblelog-name", n)), s.hasClass("is_audio") ? "hide" : !s.hasClass("is_video") && (i.hasClass("remnant_ad") ? "hide" : i.hasClass("yamplus-unit-container") ? "hide" : !i.hasClass("standalone-ad-container") && !(s.hasClass("is_persistent") || i.hasClass("is_persistent")))
                    }
                },
                o = {};
            Tumblr.Events.on("tumblelog:unfollow", function(t) {
                o[t.name] && (o[t.name] = !1)
            }), Tumblr.Events.on("tumblelog:follow", function(t) {
                o[t.name] = !0
            }), e(function() {
                i.fastDashboard = new Tumblr.GhostList({
                    container: "#posts",
                    pages: [1, 2],
                    eventor: Tumblr.Events,
                    styles: {
                        backgroundColor: "#ffffff",
                        borderRadius: "3px"
                    },
                    initialize: function() {
                        this.exclude(this.container.querySelector("#new_post_buttons")), this.exclude(this.container.querySelector("#tumblr_radar.premium")), this.exclude(this.container.querySelector(".post.sponsored_post")), this.exclude(this.container.querySelector(".yamplus-unit-container")), this.exclude(this.container.querySelector(".post.pt")), this.exclude(this.container.querySelector(".takeover-container"))
                    },
                    onBeforeDetach: t(),
                    onAfterDetach: function() {},
                    onBeforeAttach: function(t, i, s) {
                        var n = e(t),
                            r = n.data("tumblelog-name");
                        r && !o[r] && (n.data("reattach", function() {}), n.remove())
                    },
                    onAfterAttach: function() {}
                })
            })
        })
    }(_, jQuery, Tumblr), /*! scripts/application/keycommands.js */
    function(t, e) {
        "use strict";
        var i = Backbone.View.extend({
            el: "body",
            post_types: ["text", "photo", "quote", "link", "chat", "audio", "video"],
            suspended: !1,
            suspended_exceptions: [],
            last_key_code: 0,
            mouseout_id: null,
            events: {
                keydown: "keydown",
                keyup: "keyup",
                "click .post_tab_switching .tab_post_type": "click_tab_switch",
                "mouseover .post_tab_switching .tab_post_type": "mouseover_tab_switch",
                "mouseout .post_tab_switching .tab_post_type": "mouseout_tab_switch"
            },
            click_tab_switch: function(t) {
                this.post_keys({
                    toggle: "stop"
                })
            },
            mouseover_tab_switch: function(t) {
                window.clearTimeout(this.mouseout_id), this.post_keys({
                    toggle: "start",
                    pos: t.currentTarget.attributes["data-index"].value
                })
            },
            mouseout_tab_switch: function(t) {
                this.mouseout_id = window.setTimeout(_.bind(function() {
                    this.post_keys({
                        toggle: "clear"
                    })
                }, this), 250)
            },
            initialize: function() {
                this.logged_in = !t(document.body).hasClass("logged_out"), this.auto_paginate = Tumblr.auto_paginate || !1, this.animate_scroll = void 0 !== Tumblr.animate_scroll && Tumblr.animate_scroll, this.scroll_speed = 100;
                var e = 15,
                    i = t(".l-header-container");
                i.length ? this.scroll_offset = i.position().top + i.height() + e : this.scroll_offset = e, this.pressed_keys = [], this.current_post = null, Tumblr.enable_dashboard_key_commands || this.suspend(), this.blog_switcher_detection(), this.is_xbox = Tumblr.Flags.bool("is_xbox"), this.is_xbox && (this.animate_scroll = !1), Tumblr.Events && (this.listenTo(Tumblr.Events, "keycommands:suspend", this.suspend), this.listenTo(Tumblr.Events, "keycommands:resume", this.resume), this.listenTo(Tumblr.Events, "fastCompose:create", this.create_new))
            },
            suspend: function(t) {
                this.suspended = !0, this.suspended_exceptions = t || []
            },
            resume: function() {
                this.suspended = !1, this.suspended_exceptions = []
            },
            left: function() {
                if (!this.auto_paginate && !t("#tumblr_lightbox").length) {
                    var e = t("#previous_page_link").attr("href");
                    e && (location.href = e)
                }
            },
            right: function() {
                if (!this.auto_paginate && !t("#tumblr_lightbox").length) {
                    var e = t("#next_page_link").attr("href");
                    e && (location.href = e)
                }
            },
            next: function(t) {
                t > this.current_position + 2 && (t < this.go_to_position || !this.go_to_position) && (Tumblr.Popover.hide_all(), this.go_to_position = t)
            },
            previous: function(t) {
                t < this.current_position - 2 && t > this.go_to_position && (Tumblr.Popover.hide_all(), this.go_to_position = t)
            },
            check_offset: function(t) {
                return Math.abs(t - this.current_position) < 2
            },
            update_post_positions: function() {
                var e = {};
                t("#posts [data-pageable]").each(function(i, o) {
                    var s = t(o),
                        n = s.data("pageable") || _.uniqueId("pageable_");
                    e[n] = s.offset().top
                }), this.post_positions = e
            },
            get_parse_params: function(t) {
                var e = window.location.pathname.split("/");
                return e.shift(), "tagged" === e[0] ? "/new/" + t + "?post[tags]=" + e[1] : "/new/" + t
            },
            create_new: function(t) {
                document.location.href = "/new/" + t.type, this.suspend()
            },
            like: function(e) {
                var i = t("#" + e),
                    o = i.find(".post_control.like"),
                    s = i.data("post-id");
                o.length && s && Tumblr.Events.trigger("post:like", s, "keyboard")
            },
            share: function(e) {
                var i = t("#" + e + " [data-subview=share]");
                _.isEmpty(i) || 1 !== i.length || i.get(0).click()
            },
            notes: function(e) {
                var i = t("#" + e),
                    o = i.find(".note_link_current");
                if (!(o.length < 1)) {
                    var s, n = o.offset().top - 500;
                    i.find(".post_notes .popover").length > 0 && n > i.offset().top ? t("html,body").animate({
                        scrollTop: n
                    }, 200, function() {
                        s || o.trigger("click"), s = !0
                    }) : o.trigger("click")
                }
            },
            reblog: function(e) {
                var i = t("#" + e),
                    o = i.find(".post_control.reblog");
                o.length && o.trigger("click")
            },
            follow: function(e) {
                var i = t("#" + e),
                    o = i.find(".post_header_button.follow");
                o.length && o.trigger("click")
            },
            dock: function(e) {
                var i = t("#" + e),
                    o = i.find(".dock_video_button.dock");
                if (o.length) o.trigger("click");
                else {
                    var s = t(".docked"),
                        n = s.find(".dock_video_button.undock");
                    n.length && n.trigger("click")
                }
            },
            dismiss: function(e) {
                var i = t('[data-pageable="' + e + '"]'),
                    o = i.find('[data-post-action="remove"]');
                o.length && o.trigger("click")
            },
            elevate: function() {
                var e = window.pageYOffset || document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
                e >= 1500 && t("html, body").stop(!0).animate({
                    scrollTop: 0
                }, "slow")
            },
            focusSearch: function() {
                t("#search_query").focus()
            },
            play: function(e, i) {
                var o = t("#" + e),
                    s = o.data("type");
                if ("video" == s) {
                    var n = o.find("iframe.tumblr_video_iframe"),
                        r = o.find(".retro_video_preview");
                    n.length > 0 ? (n[0].contentWindow.postMessage("toggle", n.attr("data-origin")), n[0].contentWindow.focus()) : r.length > 0 && (t(".big_play_button", r).click(), i.preventDefault())
                }
            },
            fast_reblog: function(e, i, o) {
                var s = (t("#tumblr_form_key").attr("content"), t("#" + e)),
                    n = s.find(".post_control.reblog:not(.reblogged)");
                n.length && this.check_offset(i) && !n.data("reblogged") && (Tumblr.Events.trigger("post:fastreblog", t("#" + e).data("post-id"), o), n.data("reblogged", !0))
            },
            show_plexi: function() {
                Tumblr.Plexi.findByToken("body-plexi") && (this.body_plexi = Tumblr.Plexi.findByToken("body-plexi")), this.body_plexi || (this.body_plexi = new Tumblr.Plexi({
                    token: "body-plexi"
                }), this.body_plexi.create(document.body, {
                    insertAt: "top",
                    cssClass: "color"
                })), this.body_plexi.show({
                    transition_class: "fast"
                })
            },
            hide_plexi: function() {
                Tumblr.Plexi.findByToken("body-plexi") && (this.body_plexi = Tumblr.Plexi.findByToken("body-plexi")), this.body_plexi && this.body_plexi.hide()
            },
            post_keys: function(e) {
                if (e.toggle = e.toggle || null, e.shift = e.shift || null, e.pos = e.pos || null, !this.tab_switching) {
                    var i = t("#post_tab_switching");
                    if (i.length) {
                        var o = i.find(".tab_post_type");
                        if ("cancel" == e.toggle) return this.creating_new || this.hide_plexi(), this.creating_new = !1, i.removeClass("active"), clearTimeout(this.show_timeout), clearTimeout(this.fade_timeout), this.cancel_timeout = setTimeout(function() {
                            i.addClass("inactive undimmed")
                        }, 50), this.post_keying = !1, void(this.post_tab_index = void 0);
                        if ("clear" == e.toggle && (this.post_tab_index = void 0, o.removeClass("selected loading")), "stop" == e.toggle) {
                            var s = null;
                            return void 0 !== this.post_tab_index && (s = this.post_types[this.post_tab_index]), this.post_tab_index = void 0, s ? (this.creating_new = !0, this.create_new({
                                type: s
                            })) : this.hide_plexi(), void this.post_keys({
                                toggle: "cancel"
                            })
                        }
                        if ("init" == e.toggle) return this.show_plexi(), clearTimeout(this.cancel_timeout), clearTimeout(this.fade_timeout), setTimeout(_.bind(function() {
                            o.removeClass("selected loading"), i.removeClass("inactive"), i.addClass("active"), this.post_keys({
                                toggle: "start"
                            })
                        }, this), 50), void(this.post_keying = !0);
                        if ("start" == e.toggle) {
                            if (clearTimeout(this.show_timeout), e.pos && e.pos - 1 == this.post_tab_index) return;
                            return void setTimeout(_.bind(function() {
                                i.removeClass("undimmed"), o.removeClass("selected loading"), void 0 === this.post_tab_index ? this.post_tab_index = e.pos ? e.pos - 1 : 0 : (this.post_tab_index = e.pos ? e.pos - 1 : this.post_tab_index + (e.shift ? -1 : 1), this.post_tab_index >= 7 && (this.post_tab_index = 0), this.post_tab_index < 0 && (this.post_tab_index = 6)), i.addClass("active"), this.tab_current_post_type = o.eq(this.post_tab_index), this.tab_current_post_type.addClass("selected")
                            }, this), 1)
                        }
                    }
                }
            },
            blog_switcher: function(e) {
                if (e.toggle = e.toggle || null, e.shift = e.shift || null, !this.post_keying) {
                    this.tab_switching = !!e.toggle.length;
                    var i = t("#tab_switching");
                    if (i.length) {
                        var o = i.find(".tab_blog");
                        if (o.removeClass("selected loading"), "cancel" == e.toggle) return this.tab_switching = !1, this.tab_index = void 0, this.hide_plexi(), i.removeClass("active"), void setTimeout(function() {
                            i.addClass("inactive")
                        }, 500);
                        if ("stop" != e.toggle) return "start" == e.toggle ? (i.removeClass("inactive"), this.show_plexi(), void setTimeout(_.bind(function() {
                            void 0 === this.tab_index ? this.tab_index = 1 : (this.tab_index = this.tab_index + (e.shift ? -1 : 1), this.tab_index >= o.length && (this.tab_index = 0), this.tab_index < 0 && (this.tab_index = o.length - 1)), i.addClass("active"), this.tab_current_blog = o.eq(this.tab_index), this.tab_current_blog.addClass("selected")
                        }, this), 50)) : void 0;
                        this.tab_index = void 0;
                        var s = this.tab_current_blog.find("a.blog_name").attr("href");
                        if (document.location.href.match(s)) this.blog_switcher({
                            toggle: "cancel"
                        });
                        else {
                            this.tab_current_blog.addClass("loading");
                            var n = new Tumblr.Prima.KnightRiderLoader({
                                variation: "centered small",
                                loading: !0
                            });
                            this.tab_current_blog.append(n.render().$el), document.location.href = s, this.suspend(), t(window).on("keydown", function() {
                                return !1
                            })
                        }
                    }
                }
            },
            blog_switcher_detection: function() {
                window.devicePixelRatio && ("function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D" == escape(navigator.javaEnabled.toString()) ? t("html").addClass("tab_switcher_chrome") : "function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D" != escape(navigator.javaEnabled.toString()) && t("html").addClass("tab_switcher_safari"))
            },
            match_modifier_keys: function(t, e) {
                "string" == typeof e && (e = [e]);
                var i = {
                        shift: _.indexOf(e, "shift") > -1,
                        ctrl: _.indexOf(e, "ctrl") > -1,
                        alt: _.indexOf(e, "alt") > -1,
                        meta: _.indexOf(e, "meta") > -1
                    },
                    o = {
                        shift: t.shiftKey,
                        ctrl: t.ctrlKey,
                        alt: t.altKey,
                        meta: t.metaKey
                    };
                return _.isEqual(i, o)
            },
            keydown: function(e) {
                var i = e.charCode ? e.charCode : e.keyCode;
                if (!(this.suspended && _.indexOf(this.suspended_exceptions, i) < 0 || this.animating)) {
                    var o = t(e ? e.target : window.event.srcElement);
                    if (!(o.is("input:focus") || o.is("textarea:focus") || o.is(".result_link:focus") || o.is("[contenteditable=true]"))) {
                        this.update_post_positions(), this.current_position = (window.pageYOffset || document.documentElement && document.documentElement.scrollTop || document.body.scrollTop) + this.scroll_offset, this.go_to_position = 0;
                        var s, n = e.shiftKey || e.ctrlKey || e.altKey || e.metaKey;
                        if (this.pressed_keys[i] = 1, (this.post_keying || this.tab_switching) && !(e.ctrlKey || e.altKey || e.metaKey)) {
                            var r = [74, 75, 190, 76, 78, 82, 32, 38, 40, 33, 34, 35, 36];
                            if (_.indexOf(r, i) >= 0) return !1
                        }
                        if (37 == i) this.left();
                        else if (39 == i) this.right();
                        else if (!n) {
                            for (s in this.post_positions) {
                                var a = s,
                                    l = this.post_positions[s];
                                if (74 == i && this.next(l), 75 == i && this.previous(l), this.is_xbox && 40 == i && (this.next(l), e.preventDefault()), this.is_xbox && 38 == i && (this.previous(l), e.preventDefault()), 190 == i) return this.elevate(), e.preventDefault(), !1;
                                if (191 == i && (this.focusSearch(), e.preventDefault()), this.check_offset(l)) {
                                    if (this.current_post = t('[data-pageable="' + a + '"]'), 76 == i && this.like(a), 78 == i && this.notes(a), 82 == i && this.reblog(a), 70 == i && this.follow(a), 68 == i && this.dock(a), 13 == i && !this.post_keying && Tumblr.Flags.bool("indash_blogs")) {
                                        var h = this.current_post.find(".post_avatar_link, .blog_name");
                                        h.first().trigger("click")
                                    }
                                    if (32 == i) return this.play(a, e), !this.current_post.length || "video" != this.current_post.attr("data-type") || !this.current_post.attr("data-direct-video");
                                    88 == i && this.dismiss(a), 83 == i && this.share(a)
                                }
                            }
                            74 != i || this.go_to_position || (this.go_to_position = t(document).height()), this.animate_scroll ? this.go_to_position && !this.animating && (this.animating = !0, t("html,body").stop().animate({
                                scrollTop: this.go_to_position - this.scroll_offset
                            }, this.scroll_speed, _.bind(function() {
                                this.animating = !1
                            }, this))) : this.go_to_position && window.scrollTo(0, this.go_to_position - this.scroll_offset)
                        }
                        if ("MacIntel" == navigator.platform) {
                            if (e.altKey && 9 == i) return this.blog_switcher({
                                toggle: "start",
                                shift: e.shiftKey
                            }), !1;
                            if (e.altKey && 192 == i) return this.blog_switcher({
                                toggle: "start",
                                shift: !0
                            }), !1;
                            if (e.altKey && 27 == i && this.tab_switching) return this.blog_switcher({
                                toggle: "cancel"
                            }), !1;
                            if (e.altKey && 37 == i && this.tab_switching) return this.blog_switcher({
                                toggle: "start",
                                shift: !0
                            }), !1;
                            if (e.altKey && 39 == i && this.tab_switching) return this.blog_switcher({
                                toggle: "start"
                            }), !1;
                            if (e.altKey && 82 == i && this.logged_in) {
                                for (s in this.post_positions) this.fast_reblog(s, this.post_positions[s], !1);
                                return !1
                            }
                            if (e.altKey && 69 == i && this.logged_in) {
                                for (s in this.post_positions) this.fast_reblog(s, this.post_positions[s], !0);
                                return !1
                            }
                        }
                        if ("Win32" == navigator.platform) {
                            if (this.pressed_keys[90] && this.pressed_keys[9]) return this.blog_switcher({
                                toggle: "start",
                                shift: e.shiftKey
                            }), !1;
                            if (this.pressed_keys[90] && this.pressed_keys[27] && this.tab_switching) return this.blog_switcher({
                                toggle: "cancel"
                            }), !1;
                            if (this.pressed_keys[90] && this.pressed_keys[192]) return this.blog_switcher({
                                toggle: "start",
                                shift: !0
                            }), !1;
                            if (this.pressed_keys[90] && this.pressed_keys[37] && this.tab_switching) return this.blog_switcher({
                                toggle: "start",
                                shift: !0
                            }), !1;
                            if (this.pressed_keys[90] && this.pressed_keys[39] && this.tab_switching) return this.blog_switcher({
                                toggle: "start"
                            }), !1;
                            if (e.shiftKey && 82 == i && this.logged_in) {
                                for (s in this.post_positions) this.fast_reblog(s, this.post_positions[s]);
                                return !1
                            }
                            if (e.shiftKey && 69 == i && this.logged_in) {
                                for (s in this.post_positions) this.fast_reblog(s, this.post_positions[s], !0);
                                return !1
                            }
                        }
                    }
                }
            },
            keyup: function(t) {
                var e = t.charCode ? t.charCode : t.keyCode;
                t.shiftKey || t.ctrlKey || t.altKey || t.metaKey;
                return this.pressed_keys[e] = 0, "MacIntel" == navigator.platform && !t.altKey && this.tab_switching ? (this.blog_switcher({
                    toggle: "stop"
                }), !1) : "Win32" == navigator.platform && !this.pressed_keys[90] && this.tab_switching ? (this.blog_switcher({
                    toggle: "stop"
                }), !1) : void 0
            }
        });
        e.KeyCommandsConstructor = i
    }(jQuery, Tumblr), /*! scripts/color_utilities.js */
    function(t, e, i) {
        var o = {
            rgb_to_hex: function(t, e, i) {
                return "#" + ((1 << 24) + (t << 16) + (e << 8) + i).toString(16).slice(1)
            },
            hex_to_rgb: function(t) {
                t = new String(t).replace(/[^0-9a-f]/gi, ""), t.length < 6 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
                var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                return e ? {
                    r: parseInt(e[1], 16),
                    g: parseInt(e[2], 16),
                    b: parseInt(e[3], 16)
                } : null
            },
            rgb_to_hsv: function(t, e, i) {
                var o = Math.min(Math.min(t, e), i),
                    s = Math.max(Math.max(t, e), i),
                    n = s - o,
                    r = {
                        h: 6,
                        s: s ? (s - o) / s : 0,
                        v: s / 255
                    };
                return n ? s === t ? r.h += (e - i) / n : s === e ? r.h += 2 + (i - t) / n : r.h += 4 + (t - e) / n : r.h = 0, r.h = 60 * r.h % 360, r
            },
            hsv_to_rgb: function(t, e, i) {
                var o, s, n;
                if (e) {
                    o = s = n = 0;
                    var r = (t + 360) % 360 / 60,
                        a = i * e,
                        l = i - a,
                        h = a * (1 - Math.abs(r % 2 - 1));
                    r < 1 ? (o = a, s = h) : r < 2 ? (o = h, s = a) : r < 3 ? (s = a, n = h) : r < 4 ? (s = h, n = a) : r < 5 ? (n = a, o = h) : (n = h, o = a), o += l, s += l, n += l
                } else o = s = n = i;
                return {
                    r: Math.round(255 * o),
                    g: Math.round(255 * s),
                    b: Math.round(255 * n)
                }
            },
            hex_to_hsv: function(t) {
                t = new String(t).replace(/[^0-9a-f]/gi, ""), t.length < 6 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
                var o = i.ColorUtilities.hex_to_rgb(t),
                    s = i.ColorUtilities.rgb_to_hsv.apply(i.ColorUtilities, e.toArray(o));
                return s
            },
            hsv_to_hex: function(t, o, s) {
                var n = i.ColorUtilities.hsv_to_rgb(t, o, s),
                    r = i.ColorUtilities.rgb_to_hex.apply(i.ColorUtilities, e.toArray(n));
                return r
            },
            hex_brightness: function(t, e) {
                t = String(t).replace(/[^0-9a-f]/gi, ""), t.length < 6 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), e = e || 0;
                var i, o, s, n = parseInt(t, 16),
                    r = e < 0 ? 0 : 255,
                    a = e < 0 ? -e : e,
                    l = n >> 16,
                    h = n >> 8 & 255,
                    c = 255 & n;
                return i = Math.round((r - l) * a) + l, o = Math.round((r - h) * a) + h, s = Math.round((r - c) * a) + c, "#" + (16777216 + 65536 * i + 256 * o + s).toString(16).slice(1)
            },
            hsv_to_readable: function(t) {
                return "string" == typeof t && (t = i.ColorUtilities.hex_to_hsv(t)), t.s < .2 && t.v > .8 ? "#444" : "#FFF"
            },
            compare_colors: function(t, i, o) {
                var s = {
                    upper_bound: .8,
                    lower_bound: .2,
                    diff_bound: .1,
                    hue_bound: 15
                };
                e.extend(s, o);
                var n = s.upper_bound,
                    r = s.lower_bound,
                    a = s.diff_bound,
                    l = s.hue_bound,
                    h = Math.abs(t.h - i.h),
                    c = Math.abs(t.s - i.s),
                    d = Math.abs(t.v - i.v);
                return h <= a && c <= a && d <= a || c <= a && d <= a && (c >= n || c <= r && d >= n || d <= r && h <= l)
            }
        };
        i.ColorUtilities = o
    }(jQuery, _, Tumblr), /*! scripts/color_editor/views/_palette.js */
    Tumblr.ColorEditor || (Tumblr.ColorEditor = {}),
    function(t, e, i, o) {
        var s = i.View.extend({
            className: "color_palette",
            defaults: {
                colors: [],
                current_color: !1,
                current_page: 0,
                on_change: t.noop
            },
            events: {
                "click .swatch": "__color_click",
                "click .pagination a.dot": "__pagination_click",
                "click .pagination a.next": "__pagination_next_click",
                "click .pagination a.previous": "__pagination_previous_click"
            },
            __color_click: function(e) {
                e.preventDefault();
                var i = t(e.currentTarget);
                i.hasClass("selected") || (this.$(".swatch.selected").removeClass("selected"), i.addClass("selected"), this.update_color(i.data("color")))
            },
            __pagination_click: function(e) {
                e.preventDefault();
                var i = t(e.currentTarget);
                i.hasClass("selected") || (this.current_page = i.data("page"), this.render(!0))
            },
            __pagination_next_click: function(e) {
                e.preventDefault(), !t(e.currentTarget).hasClass("disabled") && this.current_page < this.page_count - 1 && (this.current_page++, this.render(!0))
            },
            __pagination_previous_click: function(e) {
                e.preventDefault(), !t(e.currentTarget).hasClass("disabled") && this.current_page > 0 && (this.current_page--, this.render(!0))
            },
            initialize: function(t) {
                this.options = e.extend({}, this.defaults, t), this.colors = this.options.colors, this.current_color = this.options.current_color, this.current_page = this.options.current_page, this.page_count = this.colors.length
            },
            render: function(t) {
                return this.$el.html(this.template({
                    colors: this.colors[this.current_page],
                    current_color: this.current_color,
                    page: this.current_page,
                    page_color: this.colors[this.current_page][4],
                    page_count: this.page_count
                })), this.$el.toggleClass("paginating", t || !1), this
            },
            update_color: function(t) {
                this.current_color = t, this.options.on_change(this.current_color)
            },
            template: e.template('            <%                var previous_arrow_class = "arrow previous icon_arrow_carrot_left";                previous_arrow_class += (page === 0) ? " disabled" : "";                var next_arrow_class = "arrow next icon_arrow_carrot_right";                next_arrow_class += (page === page_count - 1) ? " disabled" : "";            %>            <% _.each(colors, function(color) { %>                <a class="swatch<% if(color === current_color){ print(" selected") } %>" data-color="<%= color %>" style="background-color:<%= color %>"><span class="inner_border"></span></a>            <% }); %>            <% if(page_count > 1) { %>                <div class="pagination">                    <a class="<%= previous_arrow_class %>"></a>                    <% for(var i=0; i<page_count; i++) { %>                        <% if(i === page) { %>                            <a class="dot selected" data-page="<%= i %>" style="background-color:<%= page_color %>"></a>                        <% } else { %>                            <a class="dot" data-page="<%= i %>"></a>                        <% } %>                    <% } %>                    <a class="<%= next_arrow_class %>"></a>                </div>            <% } %>        ')
        });
        o.Palette = s
    }(jQuery, _, Backbone, Tumblr.ColorEditor), /*! scripts/color_editor/views/_picker.js */
    Tumblr.ColorEditor || (Tumblr.ColorEditor = {}),
    function(t, e, i, o) {
        var s = i.View.extend({
            className: "color_picker",
            defaults: {
                color: {
                    r: 0,
                    g: 0,
                    b: 0
                },
                debounce: 30,
                on_change: t.noop
            },
            events: {
                paste: "__paste",
                "mousedown .hue_selector": "__hue_mousedown",
                "mousedown .saturation_wrapper": "__saturation_mousedown",
                "focus .color_text": "__color_text_focus",
                "keyup .color_text": "__color_text_keyup"
            },
            __hue_mousedown: function(i) {
                this.hue_width = this.$hue.width();
                var o = (i.pageX - this.$hue.offset().left) / this.hue_width;
                this.hsv.h = Math.round(360 * o), this.update_hue(), t("body").on("mousemove.pickerhue", e.bind(e.throttle(this.__hue_mousemove, this.options.debounce), this)), t("body").on("mouseup.pickerhue", e.bind(this.__hue_mouseup, this))
            },
            __hue_mousemove: function(t) {
                var e = this.$hue.offset().left;
                if (t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0, t.returnValue = !1, !(t.pageX < e || t.pageX > e + this.hue_width)) {
                    var i = (t.pageX - this.$hue.offset().left) / this.hue_width;
                    return this.hsv.h = Math.round(360 * i), this.update_hue(), !1
                }
            },
            __hue_mouseup: function(e) {
                e.preventDefault(), e.stopPropagation(), t("body").off(".pickerhue")
            },
            __saturation_mousedown: function(i) {
                var o = this.$saturation.offset(),
                    s = i.pageX - o.left,
                    n = i.pageY - o.top;
                this.saturation_width = this.$saturation.width(), this.saturation_height = this.$saturation.height(), this.hsv.s = Math.max(0, Math.min(s / this.saturation_width, 1)), this.hsv.v = Math.max(0, Math.min(1 - n / this.saturation_height, 1)), this.update_saturation(), this.$saturation_indicator.addClass("dragging"), t("body").on("mousemove.pickersaturation", e.bind(e.throttle(this.__saturation_mousemove, this.options.debounce), this)), t("body").on("mouseup.pickersaturation", e.bind(this.__saturation_mouseup, this))
            },
            __saturation_mousemove: function(t) {
                var e = this.$saturation.offset(),
                    i = t.pageX - e.left,
                    o = t.pageY - e.top;
                return t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0, t.returnValue = !1, this.hsv.s = Math.max(0, Math.min(i / this.saturation_width, 1)), this.hsv.v = Math.max(0, Math.min(1 - o / this.saturation_height, 1)), this.update_saturation(), !1
            },
            __saturation_mouseup: function() {
                this.$saturation_indicator.removeClass("dragging"), t("body").off(".pickersaturation")
            },
            __color_text_keyup: function(e) {
                var i = t(e.currentTarget).val().replace(/[^0-9a-f]/gi, "");
                13 !== e.which || 3 !== i.length && 6 !== i.length || (this.hsv = Tumblr.ColorUtilities.hex_to_hsv(i), this.update_hue(), this.update_saturation(!1))
            },
            __paste: function(t) {
                t.preventDefault(), t.stopPropagation();
                var e = !1;
                if (window.clipboardData && window.clipboardData.getData ? e = window.clipboardData.getData("Text") : t.originalEvent.clipboardData && t.originalEvent.clipboardData.getData && (e = t.originalEvent.clipboardData.getData("text/plain")), e) {
                    e = String(e).replace(/[^0-9a-f]/gi, "");
                    var i = /(^[0-9A-F]{6}$)|(^[0-9A-F]{3}$)/i.test(e);
                    i && (this.hsv = Tumblr.ColorUtilities.hex_to_hsv(e), this.update_hue(), this.update_saturation(!1))
                }
                return !1
            },
            initialize: function(i) {
                this.options = e.extend({}, this.defaults, i), this.current_color = e.isObject(this.options.color) ? this.options.color : Tumblr.ColorUtilities.hex_to_rgb(this.options.color), this.hsv = Tumblr.ColorUtilities.rgb_to_hsv.apply(this, e.toArray(this.current_color)), this.current_hex = !1, this.hue_width = 0, this.saturation_height = 0, this.saturation_width = 0, this.$hue = t(), this.$hue_indicator = t(), this.$saturation = t(), this.$color = t(), this.$color_text = t()
            },
            render: function() {
                return this.$el.html(this.template({
                    color: this.current_color,
                    hue_position: this.hue_position
                })), this.$hue = this.$(".hue_selector"), this.$hue_indicator = this.$(".hue_selector .indicator"), this.$saturation = this.$(".saturation_wrapper"), this.$saturation_indicator = this.$(".saturation_wrapper .indicator"), this.$color = this.$(".color_value"), this.$color_text = this.$(".color_value .color_text"), this.update_hue(), this.update_saturation(!1), this
            },
            update_hue: function() {
                var t = e.toArray(Tumblr.ColorUtilities.hsv_to_rgb(this.hsv.h, 1, 1)),
                    i = "rgb(" + t.toString() + ")";
                this.$hue_indicator.css({
                    "background-color": i,
                    left: Math.round(this.hsv.h / 360 * 100) + "%"
                }), this.$saturation.css("background-color", i), this.update_color_value()
            },
            update_saturation: function(t) {
                t = t || !0, this.$saturation_indicator.css({
                    left: Math.round(100 * this.hsv.s) + "%",
                    top: Math.round(100 - 100 * this.hsv.v) + "%"
                }), t && this.update_color_value()
            },
            update_color_value: function() {
                var t = Tumblr.ColorUtilities.hsv_to_hex.apply(this, e.toArray(this.hsv)),
                    i = this.hsv.s,
                    o = this.hsv.v;
                this.$saturation_indicator.css("background-color", t), this.$color.css("background-color", t), this.$color_text.css("color", i < .2 && o > .8 ? "#444" : "#FFF").val(t), this.current_hex && t !== this.current_hex && this.options.on_change(t), this.current_hex = t
            },
            template: e.template('            <div class="hue_wrapper">                <div class="hue_selector">                    <div class="indicator"></div>                </div>                <div class="color_value">                    <input class="color_text" type="text" maxlength="7" />                </div>            </div>            <div class="saturation_wrapper">                <div class="saturation_inner">                    <div class="indicator"></div>                </div>            </div>        ')
        });
        o.Picker = s
    }(jQuery, _, Backbone, Tumblr.ColorEditor), /*! scripts/color_editor/views/color_editor_view.js */
    Tumblr.ColorEditor || (Tumblr.ColorEditor = {}),
    function(t, e, i, o) {
        var s = i.View.extend({
            className: "color_editor",
            colors: {
                red: ["#D95E40", "#FB4C16", "#FF4141", "#F0BFB6", "#FF7373"],
                yellow: ["#F2992E", "#FFD800", "#FFF231", "#DECBA4", "#E7EC6C"],
                green: ["#56BC8A", "#56BF4B", "#5ACDB3", "#9BCACA", "#BFE4A8"],
                blue: ["#529ECC", "#5AC9E1", "#5289DB", "#394ACB", "#6154C4"],
                purple: ["#A77DC2", "#B09BD5", "#D969C3", "#E1B7D2", "#FE3B80"],
                grayscale: ["#FFFFFF", "#F6F6F6", "#EEEEEE", "#CCCCCC", "#888888", "#666666", "#444444", "#222222", "#000000"]
            },
            defaults: {
                color: "#444444",
                debounce: 30,
                on_change: t.noop
            },
            events: {
                "click .palette_selector": "__palette_selector_click",
                "click .picker_selector": "__picker_selector_click"
            },
            __palette_selector_click: function(e) {
                e.preventDefault();
                var i = t(e.currentTarget);
                i.hasClass("selected") || (this.$(".color_selectors .selected").removeClass("selected"), i.addClass("selected"), i.hasClass("custom") ? this.render_custom_palette() : this.render_palette(i.data("color")))
            },
            __picker_selector_click: function(e) {
                e.preventDefault();
                var i = t(e.currentTarget);
                i.hasClass("selected") || (this.$(".color_selectors .selected").removeClass("selected"), i.addClass("selected"), this.render_picker())
            },
            __custom_palette_change: function(t) {
                this.custom_palette = t, this.$custom_palette_selector.html(this.custom_palette_template({
                    colors: t[0].slice(0, 3)
                })), this.$el.addClass("has_custom_palette"), this.is_custom_palette_open && this.render_custom_palette()
            },
            __color_change: function(t) {
                e.isObject(t) ? this.current_color = Tumblr.ColorUtilities.rgb_to_hex(t.r, t.g, t.b) : this.current_color = t, this.$picker_selector.css("border-color", this.current_color), this.options.on_change(this.current_color)
            },
            initialize: function(i) {
                this.options = e.extend({}, this.defaults, i), this.current_color = this.options.color, this.current_color_palette = !1, this.current_color_palette_page = 0, this.current_view = null, this.color_palette = null, this.custom_palette = null, this.is_custom_palette_open = !1, this.$color_view = t(), this.$custom_palette_selector = t(), this.$picker_selector = t(), Tumblr.Events && Tumblr.Flags.bool("indash_header_image_colors") && this.listenTo(Tumblr.Events, "coloreditor:custompalette", this.__custom_palette_change), this.generate_colors()
            },
            render: function() {
                return this.$el.html(this.template({
                    colors: this.colors
                })), this.$color_view = this.$(".color_view"), this.$custom_palette_selector = this.$(".palette_selector.custom"), this.$picker_selector = this.$(".picker_selector").css("border-color", this.current_color), this.$(".color_selectors .selected").removeClass("selected"), this.current_color_palette ? (this.$('.palette_selector[data-color="' + this.current_color_palette + '"]').addClass("selected"), this.render_palette(this.current_color_palette, this.current_color_palette_page)) : (this.$(".picker_selector").addClass("selected"), this.render_picker()), this
            },
            render_palette: function(t, i) {
                this.remove_current_view(), this.current_view = new o.Palette({
                    colors: this.color_palette[t],
                    current_color: this.current_color,
                    current_page: i || 0,
                    on_change: e.bind(this.__color_change, this)
                }), this.$color_view.html(this.current_view.render().el)
            },
            render_custom_palette: function() {
                this.custom_palette && (this.remove_current_view(), this.current_view = new o.Palette({
                    colors: this.custom_palette,
                    current_color: this.current_color,
                    current_page: 0,
                    on_change: e.bind(this.__color_change, this)
                }), this.$color_view.html(this.current_view.render().el), this.is_custom_palette_open = !0)
            },
            render_picker: function() {
                this.remove_current_view(), this.current_view = new o.Picker({
                    color: Tumblr.ColorUtilities.hex_to_rgb(this.current_color),
                    debounce: this.options.debounce,
                    on_change: e.bind(this.__color_change, this)
                }), this.$color_view.html(this.current_view.render().el)
            },
            remove_current_view: function() {
                this.current_view && (this.current_view.remove(), this.current_view = null), this.is_custom_palette_open = !1
            },
            generate_colors: function() {
                var t = {};
                e.each(this.colors, function(e, i) {
                    if (t[i] = [], "grayscale" === i) e.indexOf(this.current_color) > -1 && (this.current_color_palette = i, this.current_color_palette_page = 0), t[i].push(e);
                    else
                        for (var o = 0, s = e.length; o < s; o++) {
                            var n = this.get_color_variations(e[o]);
                            n.indexOf(this.current_color) > -1 && (this.current_color_palette = i, this.current_color_palette_page = o), t[i].push(n)
                        }
                }, this), this.color_palette = t
            },
            get_color_variations: function(t) {
                for (var e = [], i = (Tumblr.ColorUtilities.hex_to_hsv(t), .2), o = 4; o > 0; o--) {
                    var s = i * o;
                    e.push(Tumblr.ColorUtilities.hex_brightness(t, s))
                }
                e.push(t);
                for (var o = 1; o <= 4; o++) {
                    var s = -(i * o);
                    e.push(Tumblr.ColorUtilities.hex_brightness(t, s))
                }
                return e
            },
            template: e.template('            <div class="color_selectors">                <a class="palette_selector" data-color="red" style="background-color:<%= colors.red[0] %>" />                <a class="palette_selector" data-color="yellow" style="background-color:<%= colors.yellow[0] %>" />                <a class="palette_selector" data-color="green" style="background-color:<%= colors.green[0] %>" />                <a class="palette_selector" data-color="blue" style="background-color:<%= colors.blue[0] %>" />                <a class="palette_selector" data-color="purple" style="background-color:<%= colors.purple[0] %>" />                <a class="palette_selector grayscale" data-color="grayscale" style="background-color:#444" />                <a class="palette_selector custom" />                <a class="picker_selector" />            </div>            <div class="color_view"></div>        '),
            custom_palette_template: e.template('            <% _.each(colors, function(color) { %>                <span class="custom_color" style="background-color:<%- color %>"></span>            <% }) %>        ')
        });
        o.Editor = s
    }(jQuery, _, Backbone, Tumblr.ColorEditor), /*! scripts/font_picker.js */
    function(t, e, i, o) {
        var s = i.View.extend({
            className: "font_picker",
            defaults: {
                fonts: {},
                current_font: "",
                current_font_weight: "normal",
                on_show: t.noop,
                on_hide: t.noop,
                on_change: t.noop
            },
            events: {
                "mouseover .font": "__font_mouseover",
                "click .font": "__font_click",
                "click .font_picker_glass": "__glass_click"
            },
            __font_mouseover: function(e) {
                t(e.currentTarget)
            },
            __font_click: function(e) {
                this.$(".font.selected").removeClass("selected");
                var i = t(e.currentTarget).addClass("selected");
                this.current_font = i.attr("data-value"), this.on_change(this.current_font), this.hide()
            },
            __glass_click: function(t) {
                t.preventDefault(), this.hide()
            },
            initialize: function(t) {
                this.options = e.extend({}, this.defaults, t), this.fonts = this.options.fonts, this.current_font = this.options.current_font, this.is_bold = "bold" === this.options.current_font_weight, this.on_show = this.options.on_show, this.on_hide = this.options.on_hide, this.on_change = this.options.on_change
            },
            render: function() {
                return this.$el.html(this.template({
                    fonts: this.fonts,
                    current_font: this.current_font
                })), this.toggle_font_weight(this.is_bold), this
            },
            show: function() {
                this.$el.show(), this.on_show()
            },
            hide: function() {
                this.$el.hide(), this.on_hide()
            },
            scroll_to_current_font: function(t) {
                var e = this.$(".font_options"),
                    i = e.children(".selected").first();
                i.length && e.scrollTop(t + e.scrollTop() + i.position().top + .5 * (i.outerHeight() - e.innerHeight()))
            },
            toggle_font_weight: function(t) {
                this.is_bold = !!t, this.$el.toggleClass("bold", this.is_bold)
            },
            template: e.template('            <ul class="font_options">                <% _.each(fonts, function(font, font_name) { %>                    <% if(font.hidden) return; %>                    <% if(font_name === current_font) { %>                        <li class="font selected" data-value="<%- font_name %>" style="font-family:<%- font.family %>;"><i class="icon icon_checkmark" /><%- font.display_name %></li>                    <% } else { %>                        <li class="font" data-value="<%- font_name %>" style="font-family:<%- font.family %>;"><i class="icon icon_checkmark" /><%- font.display_name %></li>                    <% } %>                <% }) %>            </ul>            <div class="font_picker_glass"></div>        ')
        });
        o.FontPicker = s
    }(jQuery, _, Backbone, Tumblr); /*! scripts/vendor/color-thief/color-thief.js */
/*!
 * Color Thief v2.0
 * by Lokesh Dhakar - http://www.lokeshdhakar.com
 *
 * License
 * -------
 * Creative Commons Attribution 2.5 License:
 * http://creativecommons.org/licenses/by/2.5/
 *
 * Thanks
 * ------
 * Nick Rabinowitz - For creating quantize.js.
 * John Schulz - For clean up and optimization. @JFSIII
 * Nathan Spady - For adding drag and drop support to the demo page.
 *
 */
var CanvasImage = function(t) {
    this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), document.body.appendChild(this.canvas), this.width = this.canvas.width = t.width, this.height = this.canvas.height = t.height, this.context.drawImage(t, 0, 0, this.width, this.height)
};
CanvasImage.prototype.clear = function() {
    this.context.clearRect(0, 0, this.width, this.height)
}, CanvasImage.prototype.update = function(t) {
    this.context.putImageData(t, 0, 0)
}, CanvasImage.prototype.getPixelCount = function() {
    return this.width * this.height
}, CanvasImage.prototype.getImageData = function() {
    return this.context.getImageData(0, 0, this.width, this.height)
}, CanvasImage.prototype.removeCanvas = function() {
    this.canvas.parentNode.removeChild(this.canvas)
};
var ColorThief = function() {};
/*!
 * quantize.js Copyright 2008 Nick Rabinowitz.
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 */
/*!
 * Block below copied from Protovis: http://mbostock.github.com/protovis/
 * Copyright 2010 Stanford Visualization Group
 * Licensed under the BSD License: http://www.opensource.org/licenses/bsd-license.php
 */
if (ColorThief.prototype.getColor = function(t, e) {
        var i = this.getPalette(t, 5, e),
            o = i[0];
        return o
    }, ColorThief.prototype.getPalette = function(t, e, i) {
        "undefined" == typeof e && (e = 10), "undefined" == typeof i && (i = 10);
        for (var o, s, n, r, a, l = new CanvasImage(t), h = l.getImageData(), c = h.data, d = l.getPixelCount(), _ = [], u = 0; u < d; u += i) o = 4 * u, s = c[o + 0], n = c[o + 1], r = c[o + 2], a = c[o + 3], a >= 125 && (s > 250 && n > 250 && r > 250 || _.push([s, n, r]));
        var p = MMCQ.quantize(_, e),
            g = p.palette();
        return l.removeCanvas(), g
    }, !pv) var pv = {
    map: function(t, e) {
        var i = {};
        return e ? t.map(function(t, o) {
            return i.index = o, e.call(i, t)
        }) : t.slice()
    },
    naturalOrder: function(t, e) {
        return t < e ? -1 : t > e ? 1 : 0
    },
    sum: function(t, e) {
        var i = {};
        return t.reduce(e ? function(t, o, s) {
            return i.index = s, t + e.call(i, o)
        } : function(t, e) {
            return t + e
        }, 0)
    },
    max: function(t, e) {
        return Math.max.apply(null, e ? pv.map(t, e) : t)
    }
};
var MMCQ = function() {
    function t(t, e, i) {
        return (t << 2 * l) + (e << l) + i
    }

    function e(t) {
        function e() {
            i.sort(t), o = !0
        }
        var i = [],
            o = !1;
        return {
            push: function(t) {
                i.push(t), o = !1
            },
            peek: function(t) {
                return o || e(), void 0 === t && (t = i.length - 1), i[t]
            },
            pop: function() {
                return o || e(), i.pop()
            },
            size: function() {
                return i.length
            },
            map: function(t) {
                return i.map(t)
            },
            debug: function() {
                return o || e(), i
            }
        }
    }

    function i(t, e, i, o, s, n, r) {
        var a = this;
        a.r1 = t, a.r2 = e, a.g1 = i, a.g2 = o, a.b1 = s, a.b2 = n, a.histo = r
    }

    function o() {
        this.vboxes = new e(function(t, e) {
            return pv.naturalOrder(t.vbox.count() * t.vbox.volume(), e.vbox.count() * e.vbox.volume())
        })
    }

    function s(e) {
        var i, o, s, n, r = 1 << 3 * l,
            a = new Array(r);
        return e.forEach(function(e) {
            o = e[0] >> h, s = e[1] >> h, n = e[2] >> h, i = t(o, s, n), a[i] = (a[i] || 0) + 1
        }), a
    }

    function n(t, e) {
        var o, s, n, r = 1e6,
            a = 0,
            l = 1e6,
            c = 0,
            d = 1e6,
            _ = 0;
        return t.forEach(function(t) {
            o = t[0] >> h, s = t[1] >> h, n = t[2] >> h, o < r ? r = o : o > a && (a = o), s < l ? l = s : s > c && (c = s), n < d ? d = n : n > _ && (_ = n)
        }), new i(r, a, l, c, d, _, e)
    }

    function r(e, i) {
        function o(t) {
            var e, o, s, n, r, a = t + "1",
                h = t + "2",
                c = 0;
            for (l = i[a]; l <= i[h]; l++)
                if (p[l] > u / 2) {
                    for (s = i.copy(), n = i.copy(), e = l - i[a], o = i[h] - l, r = e <= o ? Math.min(i[h] - 1, ~~(l + o / 2)) : Math.max(i[a], ~~(l - 1 - e / 2)); !p[r];) r++;
                    for (c = g[r]; !c && p[r - 1];) c = g[--r];
                    return s[h] = r, n[a] = s[h] + 1, [s, n]
                }
        }
        if (i.count()) {
            var s = i.r2 - i.r1 + 1,
                n = i.g2 - i.g1 + 1,
                r = i.b2 - i.b1 + 1,
                a = pv.max([s, n, r]);
            if (1 == i.count()) return [i.copy()];
            var l, h, c, d, _, u = 0,
                p = [],
                g = [];
            if (a == s)
                for (l = i.r1; l <= i.r2; l++) {
                    for (d = 0, h = i.g1; h <= i.g2; h++)
                        for (c = i.b1; c <= i.b2; c++) _ = t(l, h, c), d += e[_] || 0;
                    u += d, p[l] = u
                } else if (a == n)
                    for (l = i.g1; l <= i.g2; l++) {
                        for (d = 0, h = i.r1; h <= i.r2; h++)
                            for (c = i.b1; c <= i.b2; c++) _ = t(h, l, c), d += e[_] || 0;
                        u += d, p[l] = u
                    } else
                        for (l = i.b1; l <= i.b2; l++) {
                            for (d = 0, h = i.r1; h <= i.r2; h++)
                                for (c = i.g1; c <= i.g2; c++) _ = t(h, c, l), d += e[_] || 0;
                            u += d, p[l] = u
                        }
            return p.forEach(function(t, e) {
                g[e] = u - t
            }), o(a == s ? "r" : a == n ? "g" : "b")
        }
    }

    function a(t, i) {
        function a(t, e) {
            for (var i, o = 1, s = 0; s < c;)
                if (i = t.pop(), i.count()) {
                    var n = r(l, i),
                        a = n[0],
                        h = n[1];
                    if (!a) return;
                    if (t.push(a), h && (t.push(h), o++), o >= e) return;
                    if (s++ > c) return
                } else t.push(i), s++
        }
        if (!t.length || i < 2 || i > 256) return !1;
        var l = s(t),
            h = 0;
        l.forEach(function() {
            h++
        });
        var _ = n(t, l),
            u = new e(function(t, e) {
                return pv.naturalOrder(t.count(), e.count())
            });
        u.push(_), a(u, d * i);
        for (var p = new e(function(t, e) {
                return pv.naturalOrder(t.count() * t.volume(), e.count() * e.volume())
            }); u.size();) p.push(u.pop());
        a(p, i - p.size());
        for (var g = new o; p.size();) g.push(p.pop());
        return g
    }
    var l = 5,
        h = 8 - l,
        c = 1e3,
        d = .75;
    return i.prototype = {
        volume: function(t) {
            var e = this;
            return e._volume && !t || (e._volume = (e.r2 - e.r1 + 1) * (e.g2 - e.g1 + 1) * (e.b2 - e.b1 + 1)), e._volume
        },
        count: function(e) {
            var i = this,
                o = i.histo;
            if (!i._count_set || e) {
                var s, n, r, a = 0;
                for (s = i.r1; s <= i.r2; s++)
                    for (n = i.g1; n <= i.g2; n++)
                        for (r = i.b1; r <= i.b2; r++) index = t(s, n, r), a += o[index] || 0;
                i._count = a, i._count_set = !0
            }
            return i._count
        },
        copy: function() {
            var t = this;
            return new i(t.r1, t.r2, t.g1, t.g2, t.b1, t.b2, t.histo)
        },
        avg: function(e) {
            var i = this,
                o = i.histo;
            if (!i._avg || e) {
                var s, n, r, a, h, c = 0,
                    d = 1 << 8 - l,
                    _ = 0,
                    u = 0,
                    p = 0;
                for (n = i.r1; n <= i.r2; n++)
                    for (r = i.g1; r <= i.g2; r++)
                        for (a = i.b1; a <= i.b2; a++) h = t(n, r, a), s = o[h] || 0, c += s, _ += s * (n + .5) * d, u += s * (r + .5) * d, p += s * (a + .5) * d;
                c ? i._avg = [~~(_ / c), ~~(u / c), ~~(p / c)] : i._avg = [~~(d * (i.r1 + i.r2 + 1) / 2), ~~(d * (i.g1 + i.g2 + 1) / 2), ~~(d * (i.b1 + i.b2 + 1) / 2)]
            }
            return i._avg
        },
        contains: function(t) {
            var e = this,
                i = t[0] >> h;
            return gval = t[1] >> h, bval = t[2] >> h, i >= e.r1 && i <= e.r2 && gval >= e.g1 && gval <= e.g2 && bval >= e.b1 && bval <= e.b2
        }
    }, o.prototype = {
        push: function(t) {
            this.vboxes.push({
                vbox: t,
                color: t.avg()
            })
        },
        palette: function() {
            return this.vboxes.map(function(t) {
                return t.color
            })
        },
        size: function() {
            return this.vboxes.size()
        },
        map: function(t) {
            for (var e = this.vboxes, i = 0; i < e.size(); i++)
                if (e.peek(i).vbox.contains(t)) return e.peek(i).color;
            return this.nearest(t)
        },
        nearest: function(t) {
            for (var e, i, o, s = this.vboxes, n = 0; n < s.size(); n++) i = Math.sqrt(Math.pow(t[0] - s.peek(n).color[0], 2) + Math.pow(t[1] - s.peek(n).color[1], 2) + Math.pow(t[2] - s.peek(n).color[2], 2)), (i < e || void 0 === e) && (e = i, o = s.peek(n).color);
            return o
        },
        forcebw: function() {
            var t = this.vboxes;
            t.sort(function(t, e) {
                return pv.naturalOrder(pv.sum(t.color), pv.sum(e.color))
            });
            var e = t[0].color;
            e[0] < 5 && e[1] < 5 && e[2] < 5 && (t[0].color = [0, 0, 0]);
            var i = t.length - 1,
                o = t[i].color;
            o[0] > 251 && o[1] > 251 && o[2] > 251 && (t[i].color = [255, 255, 255])
        }
    }, {
        quantize: a
    }
}(); /*! scripts/indash_blog/models/header_model.js */
Tumblr.IndashBlog || (Tumblr.IndashBlog = {}),
    function(t, e, i, o) {
        var s = i.Model.extend({
            url: "/svc/indash_blog/header",
            tumblelog_name_or_id: "",
            initialize: function(t, e) {
                e = e || {}, e.tumblelog_name_or_id && (this.tumblelog_name_or_id = e.tumblelog_name_or_id), e.url && (this.url = e.url)
            },
            get_theme_param: function(t) {
                var e = this.get("global_theme_params") || {};
                return e[t]
            },
            set_theme_params: function(t) {
                var i = e.clone(this.get("global_theme_params"));
                this.set("global_theme_params", e.extend({}, i, t))
            },
            fetch: function(t) {
                t = t || {}, t.data = {
                    tumblelog_name_or_id: t.tumblelog_name_or_id || this.tumblelog_name_or_id
                }, i.Model.prototype.fetch.call(this, t)
            },
            save: function(t, o) {
                var s = e.extend({}, this.defaults, t);
                return s.global_theme_params = e.omit(s.global_theme_params, ["header_image_dimens", "header_image_focused"]), o = o || {}, o.contentType = "application/json", o.data = JSON.stringify({
                    tumblelog_name_or_id: this.tumblelog_name_or_id,
                    tumblelog: s
                }), o.withFormKey = !0, i.Model.prototype.save.call(this, t, o)
            },
            parse: function(t, e) {
                return t.response
            }
        });
        o.HeaderModel = s
    }(jQuery, _, Backbone, Tumblr.IndashBlog), /*! scripts/indash_blog/views/header/dropzone.js */
    Tumblr.IndashBlog || (Tumblr.IndashBlog = {}), Tumblr.IndashBlog.Header || (Tumblr.IndashBlog.Header = {}),
    function(t, e, i, o) {
        var s = i.View.extend({
            defaults: {
                accepted_types: /^image\/(gif|jpe?g|png)$/,
                max_file_size: 1e7,
                upload_url: "/svc/post/upload_photo"
            },
            events: {
                "dragover .header_dropzone": "__dropzone_dragover",
                "dragleave .header_dropzone": "__dropzone_dragleave",
                "drop .header_dropzone": "__dropzone_drop"
            },
            __dropzone_dragover: function(t) {
                t.preventDefault(), this.$el.addClass("drop")
            },
            __dropzone_dragleave: function(t) {
                t.preventDefault(), this.$el.removeClass("drop")
            },
            __dropzone_drop: function(t) {
                t.preventDefault(), this.$el.removeClass("drop")
            },
            __file_add: function(t, e) {
                if (!e.files || !e.files.length) return void this.fail();
                var i = e.files[0];
                if (i.type && !this.options.accepted_types.test(i.type)) {
                    var o = this.$input.attr("data-filetype-error") || null,
                        s = this.$input.attr("data-filetype-ok") || null;
                    return void this.fail(o, s)
                }
                if (i.size > this.options.max_file_size) {
                    var o = this.$input.attr("data-filesize-error") || null,
                        s = this.$input.attr("data-filesize-ok") || null;
                    this.fail(o, s)
                } else this.file_reader ? (this.file_data = e, this.load_preview(i)) : (this.file_data = null, this.xhr = this.file_data.submit()), Tumblr.Events.trigger("dropzone:add", this.$input)
            },
            __file_send: function(t, e) {
                Tumblr.Events.trigger("dropzone:send", this.$input)
            },
            __file_done: function(t, i) {
                if (this.xhr = null, this.file_data = null, !i.result || !e.isArray(i.result.response) || !i.result.response.length) return void this.fail();
                var o = i.result.response[0];
                if (e.has(o, "error")) this.fail(o.error);
                else {
                    var s = i.result.response[0].url;
                    Tumblr.Events.trigger("dropzone:done", this.$input, s)
                }
            },
            __file_fail: function(t, e) {
                this.xhr = null, this.fail()
            },
            __save: function() {
                this.file_data && (this.xhr = this.file_data.submit())
            },
            __preview_loaded: function(t) {
                var i = t.target.result;
                this.preload_image(i, e.bind(function() {
                    this.render_preview(i)
                }, this))
            },
            initialize: function(i) {
                this.options = e.extend({}, this.defaults, i), this.form_key = this.options.form_key || t("#tumblr_form_key").attr("content"), this.xhr = null, this.file_data = null, this.file_reader = window.FileReader ? new FileReader : null, this.preview_url = !1, this.$dropzone = this.$(".header_dropzone"), this.$input = this.$('input[type="file"]'), this.listenTo(Tumblr.Events, "indashblog:customize:save", this.__save), this.$input.length && this.initialize_dropzone()
            },
            initialize_dropzone: function() {
                this.$input.fileupload({
                    url: this.options.upload_url,
                    formData: {
                        form_key: this.form_key
                    },
                    maxFileSize: this.options.max_file_size,
                    maxNumberOfFiles: 1,
                    pasteZone: null,
                    dropZone: this.$dropzone,
                    fileInput: this.$input,
                    replaceFileInput: !1,
                    previewMaxWidth: 500,
                    previewMaxHeight: 800,
                    add: e.bind(this.__file_add, this),
                    done: e.bind(this.__file_done, this),
                    send: e.bind(this.__file_send, this),
                    fail: e.bind(this.__file_fail, this)
                })
            },
            cancel: function() {
                if (this.xhr) try {
                    this.xhr.abort()
                } catch (t) {}
            },
            fail: function(t, e) {
                Tumblr.Events.trigger("dropzone:fail", this.$input, t, e)
            },
            remove: function() {
                return this.cancel(), i.View.prototype.remove.call(this)
            },
            render_preview: function(t) {
                var e = this.$(".image_preview");
                e.length > 1 && e.filter(":lt(1)").remove(), this.preview_url = t, this.$el.append(this.preview_template({
                    url: t
                }))
            },
            load_preview: function(t) {
                t && this.file_reader && (this.file_reader.onload = e.bind(this.__preview_loaded, this), this.file_reader.readAsDataURL(t))
            },
            preload_image: function(i, o) {
                var s = new Image;
                o = o || t.noop, s.onload = e.delay(function() {
                    o()
                }, 500), s.src = i
            },
            preview_template: e.template('<div class="image_preview" style="background-image:url(<%= url %>)"></div>')
        });
        o.Dropzone = s
    }(jQuery, _, Backbone, Tumblr.IndashBlog.Header), /*! scripts/indash_blog/views/header/popover.js */
    Tumblr.IndashBlog || (Tumblr.IndashBlog = {}), Tumblr.IndashBlog.Header || (Tumblr.IndashBlog.Header = {}),
    function(t, e, i, o) {
        var s = i.View.extend({
            className: "indash_header_popover",
            defaults: {
                direction: "left",
                edit_field: null,
                template: !1,
                template_data: {},
                trigger: null,
                glassless: !0
            },
            __close: function() {
                this.hide()
            },
            initialize: function(i) {
                this.options = e.extend({}, this.defaults, i), this.template = this.options.template, this.template_data = this.options.template_data, this.checkbox_template = e.template(t("#tumblelog_header_checkbox_template").html()), this.color_picker_template = e.template(t("#tumblelog_header_color_picker_template").html()), this.is_showing = !1, this.$popover = null, this.popover_view = null, o.Popover.register(this)
            },
            render: function() {
                var i = this.template(this.template_data);
                return this.$popover = t(i).appendTo(this.$el).hide(), this.popover_view = new Tumblr.Popover({
                    el: this.options.trigger,
                    popover: this.$popover,
                    glassless: this.options.glassless,
                    glassless_options: this.options.glassless_options,
                    auto_show: !1,
                    direction: this.options.direction,
                    skip_offset: !0,
                    on_show: e.bind(function() {
                        this.is_showing || (Tumblr.Events.trigger("indashblog:popover:show", this, this.options.edit_field), this.is_showing = !0)
                    }, this),
                    on_hide: e.bind(function() {
                        this.is_showing && (Tumblr.Events.trigger("indashblog:popover:hide", this, this.options.edit_field), this.is_showing = !1)
                    }, this)
                }), this
            },
            show: function() {
                this.popover_view.show()
            },
            hide: function() {
                this.is_showing && (Tumblr.Events.trigger("indashblog:popover:hide", this, this.options.edit_field), this.is_showing = !1, this.popover_view.hide())
            }
        });
        s.instances = [], s.register = function(t) {
            this.instances.push(t)
        }, s.hide_all = function() {
            for (var t = 0, e = this.instances.length; t < e; t++) this.instances[t].hide()
        }, o.Popover = s
    }(jQuery, _, Backbone, Tumblr.IndashBlog.Header), /*! scripts/indash_blog/views/header/info_popover.js */
    Tumblr.IndashBlog || (Tumblr.IndashBlog = {}), Tumblr.IndashBlog.Header || (Tumblr.IndashBlog.Header = {}),
    function(t, e, i, o) {
        var s = o.Popover.extend({
            template: e.template(t("#tumblelog_header_info_popover_template").html()),
            defaults: {
                show_flag_button: !0
            },
            events: {
                "click .ask_menu_item": "__ask_menu_item_clicked",
                "click .fan_mail_menu_item": "__fan_mail_menu_item_clicked",
                "click .archive_menu_item": "__archive_menu_item_clicked",
                "click .block": "__block_click",
                "click .toggle_spam": "__toggle_spam_click",
                "click .toggle_nsfw": "__toggle_nsfw_click",
                "click .toggle_suspended": "__toggle_suspended_click",
                "click .panel_menu_item": "__panel_menu_item_clicked"
            },
            __panel_menu_item_clicked: function(t) {
                this.hide()
            },
            __ask_menu_item_clicked: function(t) {
                t.preventDefault(), Tumblr.Events.trigger("indashblog:tumblelog:ask", {
                    recipient: this.model.get("name"),
                    anonymous_asks: this.model.get("anonymous_asks")
                }), this.hide()
            },
            __fan_mail_menu_item_clicked: function(t) {
                t.preventDefault(), Tumblr.Events.trigger("indashblog:tumblelog:fan_mail", {
                    recipient: this.model.get("name")
                }), this.hide()
            },
            __archive_menu_item_clicked: function() {
                this.hide()
            },
            __block_click: function(t) {
                t.preventDefault();
                var i = {
                    blockedTumblelog: this.model.get("name")
                };
                Tumblr.Prima.Block.confirmBlock(i).then(e.bind(this.__onBlockConfirm, this)), Tumblr.Events.trigger("TumblelogPopover:navigation_menu_item_clicked"), this.hide()
            },
            __onBlockConfirm: function() {
                var t = new Tumblr.Prima.Models.Tumblelog({
                    name: this.model.get("name")
                });
                t.block().then(e.bind(this._afterBlock, this))
            },
            __toggle_spam_click: function(t) {
                t.preventDefault();
                var i = this.model.toggle_spam();
                i.success(e.bind(function(t) {
                    this.model.set("spam", !!t.spammer)
                }, this))
            },
            __toggle_nsfw_click: function(t) {
                t.preventDefault();
                var i = this.model.toggle_nsfw();
                i.success(e.bind(function(t) {
                    this.model.set("nsfw", t.nsfw)
                }, this))
            },
            __toggle_suspended_click: function(t) {
                t.preventDefault();
                var i = this.model.toggle_suspended();
                i.success(e.bind(function(t) {
                    this.model.set("suspended", t.suspended)
                }, this))
            },
            __model_change: function() {
                var t = this.model.toJSON();
                this.$(".toggle_spam").toggleClass("is_flagged", !!t.spam), this.$(".toggle_nsfw").toggleClass("is_flagged", !!t.nsfw), this.$(".toggle_suspended").toggleClass("is_flagged", !!t.suspended)
            },
            _afterIgnore: function() {
                this.model.set("ignoring", !0), this.model.set("following", !1)
            },
            _afterBlock: function() {
                this.model.set("blocking", !0), this.model.set("following", !1)
            },
            _open_dialog: function(t, i) {
                i = i || e.noop, this.is_disabled = !0, t.fail(e.bind(function() {
                    this.is_disabled = this.is_menu_open
                }, this)), t.done(e.bind(function() {
                    this.is_disabled = this.is_menu_open, i()
                }, this))
            },
            initialize: function(i) {
                if (this.$trigger = i.trigger, this.targetPost = i.targetPost, this.model) {
                    var o = this.model.toJSON();
                    e.defaults(o, i, this.defaults), this.$popover = t(this.template(o)).appendTo(this.$el).hide(), this.tumblelog = new Tumblr.Prima.Models.Tumblelog({
                        name: this.model.get("name")
                    }), this.listenTo(this.model, "change", this.__model_change), i = e.extend(i, {
                        popover: this.$popover
                    }), Tumblr.Popover.prototype.initialize.call(this, i)
                }
            },
            show: function() {
                this.position_popover(), this.listenTo(Tumblr.Events, "DOMEventor:flatresize", this.position_popover), Tumblr.Popover.prototype.show.call(this)
            },
            hide: function() {
                this.stopListening(Tumblr.Events, "DOMEventor:flatresize"), Tumblr.Popover.prototype.hide.call(this)
            },
            position_popover: function() {
                var t = this.$trigger.offset().left + "px";
                this.$popover.css({
                    right: "auto",
                    left: t
                })
            }
        });
        o.InfoPopover = s
    }(jQuery, _, Backbone, Tumblr.IndashBlog.Header), /*! scripts/indash_blog/views/header/editable_text.js */
    Tumblr.IndashBlog || (Tumblr.IndashBlog = {}), Tumblr.IndashBlog.Header || (Tumblr.IndashBlog.Header = {}),
    function(t, e, i, o) {
        var s = i.View.extend({
            defaults: {
                character_limit: 0,
                show_popover: !0,
                spellcheck: !1
            },
            events: {
                "keydown .editable_text": "__text_keydown",
                "input .editable_text": "__text_input",
                "blur .editable_text": "__text_blur",
                "paste .editable_text": "__text_paste"
            },
            __text_keydown: function(t) {
                8 === t.which || t.metaKey || t.ctrlKey || this.character_limit && this.character_count >= this.character_limit && (t.preventDefault(), t.stopPropagation())
            },
            __text_input: function() {
                this.update_character_count(), this.$text.toggleClass("empty", !this.character_count)
            },
            __text_paste: function(t) {
                var e = t.originalEvent || t;
                if (e.clipboardData) {
                    t.preventDefault();
                    var i = document.createElement("div");
                    i.innerHTML = e.clipboardData.getData("text/html"), document.execCommand("insertHTML", !1, i.innerText || i.textContent)
                }
            },
            __text_blur: function() {
                this.render_underline()
            },
            initialize: function(i) {
                this.options = e.extend({}, this.defaults, i), this.character_limit = this.options.character_limit, this.character_count = 0, this.$text = this.$(".editable_text"), this.$underline = t(), this.$text.length && (this.update_character_count(), this.$text.attr({
                    contenteditable: !0,
                    spellcheck: this.options.spellcheck
                }).toggleClass("empty", !this.character_count))
            },
            render: function() {
                return e.delay(e.bind(this.render_underline, this), 100), this
            },
            render_underline: function() {
                this.$underline && this.$underline.length && this.$underline.remove();
                var e = this.$text.innerHeight(),
                    i = parseInt(this.$text.css("line-height")),
                    o = this.underline_template({
                        lines: Math.round(e / i),
                        height: i,
                        width: this.$text.width()
                    });
                this.$underline = t(o).prependTo(this.$text)
            },
            update_character_count: function() {
                this.$text.length && (this.$underline && this.$underline.length && this.$underline.remove(), this.character_count = this.$text.text().length, this.render_underline())
            },
            underline_template: e.template('            <span class="underline">                <% for(var i=0; i<lines; i++) { %>                    <span class="line" style="height:<%= height %>px; width:<%= width %>px"></span>                <% } %>            </span>        ')
        });
        o.EditableText = s
    }(jQuery, _, Backbone, Tumblr.IndashBlog.Header), /*! scripts/indash_blog/views/header/customize.js */
    Tumblr.IndashBlog || (Tumblr.IndashBlog = {}), Tumblr.IndashBlog.Header || (Tumblr.IndashBlog.Header = {}),
    function(t, e, i, o) {
        var s = i.View.extend({
            className: "indash_header_customize",
            events: {
                "click .cancel_button": "__cancel_button_click",
                "click .save_button": "__save_button_click",
                "click #indash_header_overlay": "__popover_overlay_click",
                "click .header_image_glass": "__popover_overlay_click"
            },
            __cancel_button_click: function(t) {
                t.preventDefault(), this.is_saving || (this.model.set(this.reset_data), this.remove())
            },
            __save_button_click: function(t) {
                t.preventDefault(), this.is_saving = !0, this.$save_button.addClass("loading"), this.$save_button.find(".loader").addClass("animate"), this.current_dropzone_upload ? Tumblr.Events.trigger("indashblog:customize:save") : this.save()
            },
            __dropzone_add: function() {
                this.current_dropzone_upload = !0, this.enable_save_button()
            },
            __dropzone_fail: function(t, i, o) {
                this.current_dropzone_upload = !1, i && Tumblr.Dialog && (this.$el.addClass("dialog_open"), Tumblr.Dialog.alert({
                    text: i,
                    text_ok: o || this.$save_button.data("error-confirm"),
                    callback_ok: e.bind(function() {
                        this.$el.removeClass("dialog_open")
                    }, this)
                }))
            },
            __dropzone_done: function(t, e) {
                var i = t.length ? t.attr("id") : "";
                switch (i) {
                    case "tumblelog_avatar_url":
                        this.model.set("avatar_url", e);
                        break;
                    case "tumblelog_header_image":
                        this.model.set_theme_params({
                            header_image: e
                        })
                }
                this.current_dropzone_upload = !1, this.is_saving && this.save()
            },
            __popover_overlay_click: function(t) {
                t.preventDefault(), this.$el.removeClass("popover_open editing_header"), this.$(".editing_focus").removeClass("editing_focus"), o.Popover.hide_all()
            },
            __popover_show: function(t, e) {
                this.$el.addClass("popover_open"), e && e.length && (e.addClass("editing_focus"), this.$el.toggleClass("editing_header", e.hasClass("header_image")))
            },
            __popover_hide: function(t, e) {
                this.$el.removeClass("popover_open editing_header"), e && e.length && e.removeClass("editing_focus")
            },
            __theme_params_change: function() {
                var t = this.model.get("global_theme_params"),
                    i = e.result(this.all_fonts, t.title_font),
                    o = Tumblr.ColorUtilities.hex_to_rgb(t.title_color);
                this.$wrapper.css({
                    "background-color": t.background_color,
                    color: t.title_color
                }), this.$avatar.css("color", t.background_color), this.$editable_text.css("border-color", t.link_color), this.$(".description").css("color", o), this.$dropzones.css("background-color", t.title_color), this.$title_text.css({
                    "font-family": i ? i.family : "inherit",
                    "font-weight": t.title_font_weight
                })
            },
            __error: function() {
                this.$el.addClass("dialog_open"), Tumblr.Dialog.alert({
                    text: this.$save_button.data("error"),
                    text_ok: this.$save_button.data("error-confirm"),
                    callback_ok: function() {
                        window.location.reload()
                    }
                })
            },
            initialize: function(i) {
                this.options = e.extend({}, this.defaults, i), this.all_fonts = e.isFunction(this.model.getAvailableFonts) ? this.model.getAvailableFonts() : o.fonts, this.template = e.template(t("#tumblelog_header_customize_template").html()), this.reset_data = {}, this.is_saving = !1, this.current_dropzone_upload = !1, this.$save_button = t(), this.$wrapper = t(), this.$avatar = t(), this.$title_text = t(), this.$editable_text = t(), this.$dropzones = t(), this.listenToOnce(this.model, "error", this.__error), this.listenToOnce(this.model, "change", this.enable_save_button), this.listenTo(this.model, "sync", this.remove), this.listenTo(this.model, "change:global_theme_params", this.__theme_params_change), this.listenTo(Tumblr.Events, "dropzone:add", this.__dropzone_add), this.listenTo(Tumblr.Events, "dropzone:fail", this.__dropzone_fail), this.listenTo(Tumblr.Events, "dropzone:done", this.__dropzone_done), this.listenTo(Tumblr.Events, "indashblog:popover:show", this.__popover_show), this.listenTo(Tumblr.Events, "indashblog:popover:hide", this.__popover_hide), this.subviews = {}
            },
            render: function() {
                var i = this.model.toJSON(),
                    o = e.result(this.all_fonts, i.global_theme_params.title_font),
                    s = Tumblr.ColorUtilities.hex_to_rgb(i.global_theme_params.title_color);
                return this.reset_data = t.extend(!0, {}, i), this.$el.html(this.template(e.merge({}, i, {
                    title_font_family: !!o && o.family,
                    title_color_rgb: String(e.values(s).join(","))
                }))), this.render_customize_views(), this.$save_button = this.$(".save_button").attr("disabled", !0), this.$wrapper = this.$(".indash_header_wrapper"), this.$avatar = this.$(".avatar"), this.$title_text = this.$(".title .editable_text"), this.$editable_text = this.$(".editable_text"), this.$dropzones = this.$(".header_dropzone"), Tumblr.IndashBlog.keycommands && Tumblr.IndashBlog.keycommands.suspend(!0), Tumblr.IndashBlog.is_peepr && t("html, body").animate({
                    scrollTop: 0
                }, 200), this
            },
            render_customize_views: function() {
                this.subviews.header_image_edit = new o.HeaderImage({
                    el: this.$(".header_image"),
                    model: this.model,
                    form_key: this.form_key
                }), this.subviews.avatar_edit = new o.Avatar({
                    el: this.$(".avatar"),
                    model: this.model,
                    form_key: this.form_key
                }), this.subviews.title_edit = new o.Title({
                    el: this.$(".title"),
                    model: this.model,
                    all_fonts: this.all_fonts
                }), this.subviews.description_edit = new o.Description({
                    el: this.$(".description"),
                    model: this.model
                }), this.subviews.background_color_edit = new o.BackgroundColor({
                    el: this.$(".background_color"),
                    model: this.model
                }), this.subviews.link_color_edit = new o.LinkColor({
                    el: this.$(".link_color"),
                    model: this.model
                })
            },
            enable_save_button: function() {
                this.$save_button.attr("disabled", !1)
            },
            remove: function() {
                return e.each(this.subviews, function(t) {
                    t.remove()
                }), Tumblr.IndashBlog.keycommands && Tumblr.IndashBlog.keycommands.resume(), Tumblr.Popover.hide_all(), this.trigger("remove", this), i.View.prototype.remove.call(this, arguments)
            },
            save: function() {
                this.is_saving = !1, e.isEqual(this.model.attributes, this.reset_data) ? this.remove() : this.model.save(this.model.attributes, {
                    wait: !0
                })
            }
        });
        o.Customize = s
    }(jQuery, _, Backbone, Tumblr.IndashBlog.Header), /*! scripts/indash_blog/views/header/header_position.js */
    Tumblr.IndashBlog || (Tumblr.IndashBlog = {}), Tumblr.IndashBlog.Header || (Tumblr.IndashBlog.Header = {}),
    function(t, e, i, o) {
        var s = i.View.extend({
            el: ".header_image",
            defaults: {
                background_color: "#000",
                bounds: {},
                image: "",
                loader_color: "#FFF",
                max_aspect_ratio: 16 / 9,
                max_zoom: 3,
                show_cancel: !0,
                zoom_increment: .2
            },
            events: {
                "click .cancel_header_position": "__cancel_click",
                "click .save_header_position": "__save_click",
                "mousedown .full_image": "__image_mousedown",
                "mousedown .zoom_control": "__zoom_mousedown",
                "click .zoom_in": "__zoom_in_click",
                "click .zoom_out": "__zoom_out_click"
            },
            __cancel_click: function(t) {
                t.preventDefault(), this.remove()
            },
            __save_click: function(t) {
                t.preventDefault();
                var e = this.dimensions.width / this.image_position.width;
                this.bounds = {
                    top: Math.floor(this.image_position.top * -e),
                    right: Math.floor((this.min_width - this.image_position.left) * e),
                    bottom: Math.floor((this.min_height - this.image_position.top) * e),
                    left: Math.floor(this.image_position.left * -e)
                }, this.trigger("save", this.bounds, this.image_position), this.remove()
            },
            __image_mousedown: function(t) {
                this.drag_position = {
                    x: t.pageX,
                    y: t.pageY
                }, this.$body.on("mousemove.header_position", e.throttle(e.bind(this.__image_mousemove, this), 40)), this.$body.on("mouseup.header_position", e.bind(this.__image_mouseup, this)), this.$body.addClass("dragging_header_image")
            },
            __image_mousemove: function(t) {
                return t.preventDefault(), t.stopPropagation(), this.image_position.left += t.pageX - this.drag_position.x, this.image_position.top += t.pageY - this.drag_position.y, this.drag_position.x = t.pageX, this.drag_position.y = t.pageY, this.position_image(), !1
            },
            __image_mouseup: function() {
                this.$body.off(".header_position").removeClass("dragging_header_image"), e.delay(e.bind(this.snap_image, this), 50)
            },
            __zoom_mousedown: function(t) {
                this.$body.on("mousemove.header_position", e.throttle(e.bind(this.__zoom_mousemove, this), 20)), this.$body.on("mouseup.header_position", e.bind(this.__zoom_mouseup, this)), this.$body.addClass("dragging_header_image")
            },
            __zoom_mousemove: function(t) {
                t.preventDefault(), t.stopPropagation();
                var e = this.$zoom_track.width(),
                    i = Math.round(t.pageX - this.$zoom_track.offset().left);
                return i > 0 && i < e && (this.zoom = 1 + (this.options.max_zoom - 1) * (i / e), this.zoom_image()), !1
            },
            __zoom_mouseup: function() {
                this.$body.off(".header_position").removeClass("dragging_header_image"), e.delay(e.bind(this.snap_image, this), 50)
            },
            __zoom_in_click: function(t) {
                t.preventDefault();
                var e = this.zoom + this.options.zoom_increment;
                this.zoom = e > this.options.max_zoom ? this.options.max_zoom : e, this.zoom_image()
            },
            __zoom_out_click: function(t) {
                t.preventDefault();
                var e = this.zoom - this.options.zoom_increment;
                this.zoom = e < 1 ? 1 : e, this.zoom_image()
            },
            __escape: function(t) {
                this.is_open && this.options.show_cancel && this.remove()
            },
            initialize: function(i) {
                this.options = e.extend({}, this.defaults, i), this.image = this.options.image, this.bounds = this.options.bounds, this.dimensions = this.options.dimensions, this.template = e.template(t("#tumblelog_header_position_template").html()), this.aspect_ratio = 1, this.zoom = 1, this.scale = 1, this.min_width = 0, this.min_height = 0, this.center_point = {}, this.drag_position = {
                    x: 0,
                    y: 0
                }, this.image_position = {
                    left: 0,
                    top: 0,
                    height: 0,
                    width: 0
                }, this.is_open = !1, this.$body = t("body"), this.$container = t(), this.$loader = t(), this.$image = t(), this.$zoom_track = t(), this.$zoom_control = t(), this.listenTo(Tumblr.Events, "DOMEventor:keydown:escape", this.__escape), this.render()
            },
            render: function() {
                this.$el.append(this.template({
                    background_color: this.options.background_color,
                    image: this.image,
                    loader_color: this.options.loader_color,
                    show_cancel: this.options.show_cancel
                })), this.$container = this.$(".indash_header_position_wrapper").addClass("loading"), this.$loader = this.$container.find(".loader").addClass("animate"), this.$image = this.$container.find(".full_image"), this.$zoom_track = this.$container.find(".header_zoom"), this.$zoom_control = this.$container.find(".zoom_control"), this.$body.addClass("positioning_header"), Tumblr.IndashBlog.keycommands && Tumblr.IndashBlog.keycommands.suspend();
                var t = this.$container.get(0).getBoundingClientRect();
                return this.min_height = t.height, this.min_width = t.width, this.is_open = !0, this.center_point = {
                    x: .5 * this.min_width,
                    y: .5 * this.min_height
                }, this.preload_image(this.image, e.bind(function(t) {
                    this.dimensions = {
                        height: t.height,
                        width: t.width
                    }, this.ready()
                }, this)), this
            },
            ready: function() {
                var t = !!e.size(this.bounds),
                    i = t ? this.bounds.right - this.bounds.left : this.dimensions.width,
                    o = t ? this.bounds.bottom - this.bounds.top : this.dimensions.height;
                this.aspect_ratio = this.dimensions.width / this.dimensions.height, this.zoom = this.aspect_ratio <= this.options.max_aspect_ratio ? this.dimensions.width / i : this.dimensions.height / o, this.scale = this.aspect_ratio <= this.options.max_aspect_ratio ? this.min_width / this.dimensions.width : this.min_height / this.dimensions.height;
                var s = this.scale * this.zoom,
                    n = this.dimensions.height * s,
                    r = this.dimensions.width * s;
                this.image_position = {
                    left: t ? this.bounds.left * -s : this.center_point.x - .5 * r,
                    top: t ? this.bounds.top * -s : this.center_point.y - .5 * n,
                    height: n,
                    width: r
                }, this.$container.removeClass("loading"), this.$loader.remove(), this.zoom_image()
            },
            remove: function() {
                Tumblr.IndashBlog.keycommands && Tumblr.IndashBlog.keycommands.resume(!0), this.is_open = !1, this.stopListening(), this.$body.removeClass("positioning_header"), this.$container.remove(), this.trigger("remove", this)
            },
            preload_image: function(e, i) {
                var o = document.createElement("img");
                i = i || t.noop, t(o).on("load error", function() {
                    t(o).off(), i(o)
                }), o.src = e
            },
            zoom_image: function() {
                var t = this.scale * this.zoom,
                    e = this.dimensions.width * t,
                    i = this.dimensions.height * t,
                    o = e - this.image_position.width,
                    s = i - this.image_position.height,
                    n = this.image_position.left - o * ((Math.abs(this.image_position.left) + this.center_point.x) / this.image_position.width),
                    r = this.image_position.top - s * ((Math.abs(this.image_position.top) + this.center_point.y) / this.image_position.height);
                this.image_position = {
                    left: n,
                    top: r,
                    width: e,
                    height: i
                }, this.snap_image()
            },
            position_image: function() {
                var t = (this.zoom - 1) / (this.options.max_zoom - 1);
                this.$zoom_control.css("left", t * this.$zoom_track.width()), this.$image.css(this.image_position)
            },
            snap_image: function() {
                this.image_position.left + this.image_position.width < this.min_width && (this.image_position.left = this.min_width - this.image_position.width), this.image_position.left > 0 && (this.image_position.left = 0), this.image_position.top + this.image_position.height < this.min_height && (this.image_position.top = this.min_height - this.image_position.height), this.image_position.top > 0 && (this.image_position.top = 0), this.position_image()
            }
        });
        o.HeaderImagePosition = s
    }(jQuery, _, Backbone, Tumblr.IndashBlog.Header), /*! scripts/indash_blog/views/header/customize_fields/avatar_edit.js */
    Tumblr.IndashBlog || (Tumblr.IndashBlog = {}), Tumblr.IndashBlog.Header || (Tumblr.IndashBlog.Header = {}),
    function(t, e, i, o) {
        var s = o.Dropzone.extend({
            events: function() {
                return e.defaults({
                    "click .choose_photo": "__choose_photo_click",
                    "click .avatar_shape": "__avatar_shape_click",
                    "change #tumblelog_show_avatar": "__show_avatar_change"
                }, o.Dropzone.prototype.events)
            },
            __choose_photo_click: function(t) {
                t.preventDefault(), this.$input.trigger("click")
            },
            __avatar_shape_click: function(e) {
                if (e.preventDefault(), !t(e.currentTarget).hasClass("selected")) {
                    var i = this.$(".avatar_shape.selected"),
                        o = t(e.currentTarget).addClass("selected"),
                        s = o.data("value");
                    i.length && i.removeClass("selected"), this.$el.removeClass(this.model.get_theme_param("avatar_shape")).addClass(s), this.model.set_theme_params({
                        avatar_shape: s
                    })
                }
            },
            __show_avatar_change: function(e) {
                var i = t(e.currentTarget).is(":checked");
                this.model.set_theme_params({
                    show_avatar: i
                }), this.$el.toggleClass("disabled", !i)
            },
            initialize: function(i) {
                o.Dropzone.prototype.initialize.call(this, i), this.popover = new o.Popover({
                    direction: "left",
                    edit_field: this.$el,
                    template: e.template(t("#tumblelog_header_avatar_popover_template").html()),
                    template_data: this.model.toJSON(),
                    trigger: this.$(".edit_button"),
                    glassless_options: {
                        prevent_clicks: !1,
                        click_root: this.$el
                    }
                }), this.$avatar_shape = this.$("#tumblelog_avatar_shape"), this.model.get("global_theme_params").show_avatar || this.$el.addClass("disabled"), this.$el.append(this.popover.render().el)
            },
            remove: function() {
                return this.cancel(), this.popover.remove(), i.View.prototype.remove.call(this)
            }
        });
        o.Avatar = s
    }(jQuery, _, Backbone, Tumblr.IndashBlog.Header), /*! scripts/indash_blog/views/header/customize_fields/background_color_edit.js */
    Tumblr.IndashBlog || (Tumblr.IndashBlog = {}), Tumblr.IndashBlog.Header || (Tumblr.IndashBlog.Header = {}),
    function(t, e, i, o) {
        var s = i.View.extend({
            __color_editor_change: function(t) {
                this.$color_dot.css("background-color", t), this.model.set_theme_params({
                    background_color: t
                })
            },
            initialize: function(i) {
                this.options = e.extend({}, this.defaults, i), this.$color_dot = t(), this.popover = new o.Popover({
                    direction: "up",
                    edit_field: this.$el,
                    template: e.template(t("#tumblelog_header_color_popover_template").html()),
                    trigger: this.$el,
                    glassless_options: {
                        prevent_clicks: !1,
                        click_root: this.$el
                    }
                }), this.color_editor = new Tumblr.ColorEditor.Editor({
                    color: this.model.get_theme_param("background_color"),
                    on_change: e.bind(this.__color_editor_change, this)
                }), this.render()
            },
            render: function() {
                return this.$el.append(this.popover.render().el), this.$(".popover_inner").append(this.color_editor.render().el), this.$color_dot = this.$(".color_dot"), this
            }
        });
        o.BackgroundColor = s
    }(jQuery, _, Backbone, Tumblr.IndashBlog.Header), /*! scripts/indash_blog/views/header/customize_fields/description_edit.js */
    Tumblr.IndashBlog || (Tumblr.IndashBlog = {}), Tumblr.IndashBlog.Header || (Tumblr.IndashBlog.Header = {}),
    function(t, e, i, o) {
        var s = o.EditableText.extend({
            events: function() {
                return e.defaults({
                    "focus .editable_text": "__text_focus",
                    "change #tumblelog_show_description": "__show_description_change"
                }, o.EditableText.prototype.events)
            },
            __text_focus: function() {
                this.popover.show()
            },
            __text_blur: function(e) {
                var i = t(e.currentTarget).text();
                this.model.set("description", i), o.EditableText.prototype.__text_blur.call(this)
            },
            __show_description_change: function(e) {
                var i = t(e.currentTarget).is(":checked");
                this.model.set_theme_params({
                    show_description: i
                }), this.$el.toggleClass("disabled", !i)
            },
            initialize: function(i) {
                o.EditableText.prototype.initialize.call(this, i), this.popover = new o.Popover({
                    direction: "up",
                    edit_field: this.$el,
                    trigger: !1,
                    template: e.template(t("#tumblelog_header_description_popover_template").html()),
                    template_data: this.model.toJSON(),
                    glassless_options: {
                        prevent_clicks: !1,
                        click_root: this.$el
                    }
                }), this.model.get("global_theme_params").show_description || this.$el.addClass("disabled"), this.$el.append(this.popover.render().el), o.EditableText.prototype.render.call(this)
            }
        });
        o.Description = s
    }(jQuery, _, Backbone, Tumblr.IndashBlog.Header), /*! scripts/indash_blog/views/header/customize_fields/header_image_edit.js */
    Tumblr.IndashBlog || (Tumblr.IndashBlog = {}), Tumblr.IndashBlog.Header || (Tumblr.IndashBlog.Header = {}),
    function(t, e, i, o) {
        var s = o.Dropzone.extend({
            events: function() {
                return e.defaults({
                    "click .choose_photo": "__choose_photo_click",
                    "click .position_photo": "__position_photo_click",
                    "change #tumblelog_stretch_header_image": "__stretch_header_image_change",
                    "change #tumblelog_show_header_image": "__show_header_image_change"
                }, o.Dropzone.prototype.events)
            },
            __choose_photo_click: function(t) {
                t.preventDefault(), this.$input.click()
            },
            __position_photo_click: function(t) {
                return t.preventDefault(), t.stopPropagation(), this.popover.hide(), this.render_header_position(), !1
            },
            __stretch_header_image_change: function(e) {
                var i = t(e.currentTarget).is(":checked");
                this.model.set_theme_params({
                    header_stretch: i
                }), this.$(".position_photo").toggleClass("disabled", !i)
            },
            __show_header_image_change: function(e) {
                var i = t(e.currentTarget).is(":checked");
                this.model.set_theme_params({
                    show_header_image: i
                }), this.$el.toggleClass("disabled", !i)
            },
            __position_header_save: function(t, e) {
                this.model.set_theme_params({
                    header_bounds: t
                });
                var i = this.model.get("global_theme_params");
                this.$el.css({
                    "background-image": "url(" + (this.preview_url || i.header_image) + ")",
                    "background-position": e.left + "px " + e.top + "px",
                    "background-size": e.width + "px " + e.height + "px"
                })
            },
            __position_header_remove: function() {
                this.stopListening(this.position_header_view), this.position_header_view = null
            },
            initialize: function(i) {
                o.Dropzone.prototype.initialize.call(this, i), this.position_photo_view = null, this.color_thief = null, this.popover = new o.Popover({
                    direction: "right",
                    edit_field: this.$el,
                    template: e.template(t("#tumblelog_header_image_popover_template").html()),
                    template_data: this.model.toJSON(),
                    trigger: this.$(".edit_button"),
                    glassless_options: {
                        prevent_clicks: !1
                    }
                }), this.position_header_view = null, this.$el.append(this.popover.render().el), this.setup()
            },
            setup: function() {
                var t = this.model.get("global_theme_params");
                t.show_header_image || this.$el.addClass("disabled"), t.header_stretch || this.$(".position_photo").addClass("disabled")
            },
            render_header_position: function(t) {
                var e = this.model.get("global_theme_params");
                t = !!t || !1, this.position_header_view = new o.HeaderImagePosition({
                    el: this.$el,
                    background_color: e.background_color,
                    bounds: this.preview_url ? {} : e.header_bounds,
                    image: this.preview_url || e.header_image,
                    loader_color: e.title_color,
                    show_cancel: !t
                }), this.listenToOnce(this.position_header_view, "remove", this.__position_header_remove), this.listenToOnce(this.position_header_view, "save", this.__position_header_save)
            },
            render_preview: function(t) {
                this.preview_url = t, this.popover.hide(), this.$el.css("background-image", "url(" + this.preview_url + ")"), this.$("img").attr("src", this.preview_url), this.model.get_theme_param("header_stretch") && this.render_header_position(!0), this.generate_color_palette(t)
            },
            generate_color_palette: function(t) {
                if (Tumblr.Flags.bool("indash_header_image_colors") && ColorThief) {
                    this.color_thief = this.color_thief || new ColorThief;
                    var i = new Image;
                    i.onload = e.bind(function() {
                        var t = this.color_thief.getPalette(i, 10);
                        if (t && Tumblr.Events && Tumblr.ColorUtilities) {
                            var o = [];
                            e.each(t, function(t) {
                                var i = Tumblr.ColorUtilities.rgb_to_hex.apply(null, e.toArray(t));
                                o.push(i)
                            }), Tumblr.Events.trigger("coloreditor:custompalette", [o])
                        }
                    }, this), i.src = t
                }
            },
            remove: function() {
                return this.cancel(), i.View.prototype.remove.call(this)
            }
        });
        o.HeaderImage = s
    }(jQuery, _, Backbone, Tumblr.IndashBlog.Header), /*! scripts/indash_blog/views/header/customize_fields/link_color_edit.js */
    Tumblr.IndashBlog || (Tumblr.IndashBlog = {}), Tumblr.IndashBlog.Header || (Tumblr.IndashBlog.Header = {}),
    function(t, e, i, o) {
        var s = i.View.extend({
            __color_editor_change: function(t) {
                this.$color_dot.css("background-color", t), this.model.set_theme_params({
                    link_color: t
                })
            },
            initialize: function(i) {
                this.options = e.extend({}, this.defaults, i), this.$color_dot = t(), this.popover = new o.Popover({
                    direction: "up",
                    glassless: !0,
                    glassless_options: {
                        prevent_clicks: !1
                    },
                    edit_field: this.$el,
                    template: e.template(t("#tumblelog_header_color_popover_template").html()),
                    trigger: this.$el
                }), this.color_editor = new Tumblr.ColorEditor.Editor({
                    color: this.model.get_theme_param("link_color"),
                    on_change: e.bind(this.__color_editor_change, this)
                }), this.render()
            },
            render: function() {
                return this.$el.append(this.popover.render().el), this.$(".popover_inner").append(this.color_editor.render().el), this.$color_dot = this.$(".color_dot"), this
            }
        });
        o.LinkColor = s
    }(jQuery, _, Backbone, Tumblr.IndashBlog.Header), /*! scripts/indash_blog/views/header/customize_fields/title_edit.js */
    Tumblr.IndashBlog || (Tumblr.IndashBlog = {}), Tumblr.IndashBlog.Header || (Tumblr.IndashBlog.Header = {}),
    function(t, e, i, o) {
        var s = o.EditableText.extend({
            events: function() {
                return e.defaults({
                    "focus .editable_text": "__text_focus",
                    "change #tumblelog_show_title": "__show_title_change",
                    "click .current_font": "__font_click",
                    "click .font_weight": "__font_weight_click"
                }, o.EditableText.prototype.events)
            },
            __text_focus: function() {
                this.popover.show()
            },
            __text_blur: function() {
                var t = this.$text.text();
                this.model.set("title", t), o.EditableText.prototype.__text_blur.call(this)
            },
            __show_title_change: function(e) {
                var i = t(e.currentTarget).is(":checked");
                this.model.set_theme_params({
                    show_title: i
                }), this.$el.toggleClass("disabled", !i)
            },
            __color_editor_change: function(t) {
                this.model.set_theme_params({
                    title_color: t
                })
            },
            __font_click: function(t) {
                t.preventDefault(), this.font_picker.show(), this.font_picker.scroll_to_current_font(-38)
            },
            __font_change: function(t) {
                var i = e.result(this.all_fonts, t);
                i && (this.$current_font.css("font-family", i.family), this.$current_font_label.text(i.display_name), this.model.set_theme_params({
                    title_font: t
                })), this.render_underline()
            },
            __font_weight_click: function(e) {
                var i = t(e.currentTarget),
                    o = !i.hasClass("on"),
                    s = o ? "bold" : "normal";
                this.font_picker.toggle_font_weight(o), this.model.set_theme_params({
                    title_font_weight: s
                }), this.$current_font.css("font-weight", s), i.toggleClass("on", o)
            },
            initialize: function(i) {
                o.EditableText.prototype.initialize.call(this, e.extend({
                    character_limit: 50
                }, i)), this.all_fonts = this.options.all_fonts, this.current_font = e.result(this.all_fonts, this.model.get_theme_param("title_font")), this.$current_font = t(), this.$current_font_label = t(), this.popover = new o.Popover({
                    direction: "up",
                    edit_field: this.$el,
                    trigger: !1,
                    template: e.template(t("#tumblelog_header_title_popover_template").html()),
                    template_data: e.merge(this.model.toJSON(), {
                        current_font: this.current_font || !1
                    }),
                    glassless_options: {
                        prevent_clicks: !1,
                        click_root: this.$el
                    }
                }), this.color_editor = new Tumblr.ColorEditor.Editor({
                    color: this.model.get_theme_param("title_color"),
                    on_change: e.bind(this.__color_editor_change, this)
                }), this.font_picker = new Tumblr.FontPicker({
                    fonts: this.all_fonts,
                    current_font: this.model.get_theme_param("title_font"),
                    current_font_weight: this.model.get_theme_param("title_font_weight"),
                    on_change: e.bind(this.__font_change, this)
                }), this.model.get("global_theme_params").show_title || this.$el.addClass("disabled"), this.render()
            },
            render: function() {
                return this.$el.append(this.popover.render().el), this.$(".title_popover").append(this.color_editor.render().el), this.$(".font_dropdown").append(this.font_picker.render().el), this.$current_font = this.$(".current_font"), this.$current_font_label = this.$current_font.find("span"), o.EditableText.prototype.render.call(this), this
            }
        });
        o.Title = s
    }(jQuery, _, Backbone, Tumblr.IndashBlog.Header); /*! scripts/indash_blog/views/header_view.js */
var TumblrData = window.TumblrData || {};
Tumblr.IndashBlog || (Tumblr.IndashBlog = {}), Tumblr.IndashBlog.Header || (Tumblr.IndashBlog.Header = {}),
    function(t, e, i, o) {
        "use strict";
        var s = i.View.extend({
            el: ".header",
            defaults: {
                aspect_ratio: 9 / 16,
                show_navigation: !0,
                show_share_controls: !1,
                show_dismiss_controls: !1,
                show_user_controls: !1,
                show_follow_button: !1,
                on_customize_open: t.noop,
                on_customize_close: t.noop
            },
            events: {
                "click .customize_button": "__customize_button_clicked",
                "click .follow": "__follow_button_clicked",
                "click .unfollow": "__unfollow_button_clicked",
                "click .open_blog_button": "__open_blog_button_clicked",
                "click .show_description": "__toggle_description_click",
                "click .description a": "__description_link_click"
            },
            __open_blog_button_clicked: function(e) {
                e.preventDefault(), new Tumblr.Prima.SharePopover({
                    popoverData: {
                        url: this.model.get("url"),
                        tumblelog_name: this.model.get("name"),
                        show_permalink: !1,
                        show_embed: !1,
                        show_pinterest: !1,
                        show_reddit: !1,
                        show_reporting_links: !1,
                        show_flagging: !1,
                        tumblelog_share: !0
                    },
                    pinnedTarget: t(e.target)
                }).render()
            },
            __follow_button_clicked: function(t) {
                this.model.set("following", !0)
            },
            __unfollow_button_clicked: function(t) {
                var e = Tumblr.Prima.Translate;
                Tumblr.Dialog.confirm({
                    text: e("Are you sure you want to unfollow %1$s?", this.model.get("name")),
                    text_ok: e("Ok"),
                    callback_ok: function() {
                        this.model.set("following", !1)
                    }.bind(this),
                    text_cancel: e("Nevermind"),
                    templates: {
                        content: ['<div class="avatar_image" style="background-image: url(' + this.model.get("avatar_url") + ');">', '<div class="avatar_frame"></div>', "</div>", '<span class="text"><%= text %></span>'].join("")
                    }
                })
            },
            __customize_button_clicked: function(t) {
                t.preventDefault(), this.start_customizing()
            },
            __toggle_description_click: function(t) {
                t.preventDefault(), this.$description.toggleClass("show_all"), this.$description_inner.css("height", this.$description.hasClass("show_all") ? this.$description_inner.get(0).scrollHeight : "")
            },
            __description_link_click: function(i) {
                var o = t(i.currentTarget).attr("href");
                if (!e.startsWith(o.toLowerCase(), "mailto:")) {
                    i.preventDefault();
                    try {
                        if (Tumblr.Prima.Url && Tumblr.Prima.Url.hasAllowedProtocol(o)) {
                            if (!Tumblr.Prima.Url.isAbsoluteUrl(o)) {
                                var s = "http://" + this.model.get("name") + ".tumblr.com/";
                                o = "/" === o.charAt(0) ? o.substr(1) : o, o = s + o
                            }
                            window.open(o, "_blank")
                        }
                    } catch (n) {}
                }
            },
            __theme_param_change: function() {
                var t = this.model.get("global_theme_params");
                this.$(".indash_header_wrapper").toggleClass("no_stretch_header", !t.header_stretch)
            },
            __window_scroll: function(t) {
                this.set_sticky_header(this._near_top(t.windowScrollTop)), this.parallax_header(t.windowScrollTop)
            },
            _render_follow_button: function() {
                this.model.get("following") ? (this.$el.find(".follow").hide(), this.$el.find(".unfollow").show()) : (this.$el.find(".unfollow").hide(), this.$el.find(".follow").show())
            },
            _customize_remove: function() {
                this.stopListening(this.customize_view), this.customize_view = null, this.render(), this.on_customize_close()
            },
            _near_top: function(t) {
                return t >= this.header_image_height
            },
            __addSnowMan: function() {
                var t = {
                    el: this.$el.find(".indash_header_wrapper"),
                    auto_show: !1,
                    trigger: this.$el.find(".info_popover_button"),
                    useRecipient: !0,
                    glassless: !0,
                    standalone: !0,
                    show_flag_button: !0,
                    show_user_controls: this.options.show_user_controls
                };
                this.snowman = new Tumblr.Prima.Snowman({
                    el: this.$("[data-snowman-container]"),
                    tumblelogName: this.model.get("name"),
                    infoPopover: t
                })
            },
            initialize: function(i) {
                this.options = e.extend({
                    header_min_height: 50,
                    parallax_inertia: .3,
                    avatar_inertia: .4
                }, this.defaults, i), this.is_peepr = o.is_peepr || this.options.is_peepr, this.on_customize_open = this.options.on_customize_open, this.on_customize_close = this.options.on_customize_close, this.$show_description = t(), this.$header_image = t(), this.$navigation_bg = t(), this.$blurred_header = t(), this.template = e.template(t("#tumblelog_header_template").html()), this.inline_styles_template = e.template(t("#tumblelog_header_inline_styles").html()), this.customize_view = null, this.listenTo(this.model, "change:global_theme_params", this.__theme_param_change), this.listenTo(this.model, "change:following", this._render_follow_button), this.is_peepr && this.listenTo(Tumblr.Events, "DOMEventor:flatscroll peepr-body-scroll", this.__window_scroll, this)
            },
            render: function() {
                if (!this.model) return this;
                if (!e.isEmpty(this.model.get("advertiser_name"))) return this.$el.addClass("blogless-advertiser"), this;
                var t = this.model.toJSON(),
                    i = e.isFunction(this.model.getAvailableFonts) ? this.model.getAvailableFonts() : TumblrData.fonts,
                    o = e.result(i, t.global_theme_params.title_font),
                    s = Tumblr.ColorUtilities.hex_to_rgb(t.global_theme_params.title_color);
                this.$el.html(this.template(e.merge({}, t, {
                    show_navigation: this.options.show_navigation,
                    show_share_controls: this.options.show_share_controls,
                    show_dismiss_controls: this.options.show_dismiss_controls,
                    show_user_controls: this.options.show_user_controls,
                    show_follow_button: this.options.show_follow_button,
                    has_peepr_header: !1,
                    title_font_family: !!o && o.family,
                    title_color_rgb: String(e.values(s).join(",")),
                    is_verified: !1
                })));
                var n = this.$el.width();
                this.$(".header_image_wrapper, .header_image").height(n * this.options.aspect_ratio), this.cache_selectors(), this.$description_inner.length && this.truncate_description(), this.render_inline_styles();
                var r = !(!t.global_theme_params.header_image_focused || !t.global_theme_params.show_header_image);
                this.is_peepr && r && t.global_theme_params.header_stretch && this.generate_short_header(), this.__addSnowMan();
                var a = Tumblr.Prima.currentUser(),
                    l = e.contains(a.channels.pluck("name"), this.model.get("name"));
                return a.canMessage() && !l && this.model.get("can_receive_messages") && (this.messaging_popover = new Tumblr.Prima.MessagingPopover({
                    model: this.model
                }).render(), this.$(".indash_header_wrapper .open_blog_button").after(this.messaging_popover.$el)), this.parallax_header(0), Tumblr.Flags.bool("peepr_search_and_filter") && !Tumblr.Flags.bool("settings_tumblelog_header") && (this.searchView = new Tumblr.Prima.PeeprSearch({
                    blog: this.model
                }), this.$(".navigation_inner h3").after(this.searchView.render().$el)), this.$el.hasClass("loading") && this.preload_images(this.$el, e.bind(function() {
                    this.$el.removeClass("loading")
                }, this)), this
            },
            render_inline_styles: function() {
                this.$("#indash_blog_styles").length && this.$("#indash_blog_styles").remove();
                var t = this.model.toJSON(),
                    i = t.global_theme_params.link_color,
                    o = Tumblr.ColorUtilities.hex_to_hsv(t.global_theme_params.link_color),
                    s = Tumblr.ColorUtilities.hex_to_hsv(t.global_theme_params.background_color);
                return Tumblr.ColorUtilities.compare_colors(o, s) && (i = Tumblr.ColorUtilities.hsv_to_readable(s)), this.$el.prepend(this.inline_styles_template(e.extend({
                    link_font_color: Tumblr.ColorUtilities.hsv_to_readable(o),
                    header_override_color: i
                }, t))), this
            },
            remove: function() {
                this.stopListening(), this.undelegateEvents(), this.searchView && this.searchView.remove(), this.snowman && this.snowman.remove()
            },
            generate_short_header: function() {
                var i = this.model.get_theme_param("header_image_focused");
                if (i) {
                    var o = document.createElement("img"),
                        s = document.createElement("canvas"),
                        n = s.getContext("2d");
                    this.$navigation_bg.length && (this.$navigation_bg.addClass("has_image"), s.className = "sticky_header_image", s.width = this.$header_image.width(), s.height = this.$header_image.height(), o.onload = e.bind(function() {
                        var e = o.naturalWidth / o.naturalHeight;
                        o.width = s.width, o.height = o.width / e, o.height < s.height && (o.height = s.height, o.width = o.height * e), n.drawImage(o, .5 * -(o.width - s.width), .5 * -(o.height - s.height), o.width, o.height), n.fillStyle = "rgba(0,0,0,0.4)", n.fillRect(0, 0, s.width, s.height), this.$blurred_header = t(s), this.$navigation_bg.html(this.$blurred_header)
                    }, this), o.src = i)
                }
            },
            truncate_description: function() {
                var t = this.$description_inner.get(0);
                t.scrollHeight <= t.clientHeight || (this.is_description_truncated = !0, this.$description.addClass("truncated"), this.render_description_gradient())
            },
            render_description_gradient: function() {
                var i = this.model.get_theme_param("background_color"),
                    o = Tumblr.ColorUtilities.hex_to_rgb(i);
                this.$show_description.length && this.$show_description.remove(), this.$show_description = t(this.show_description_template({
                    background_color: String(e.values(o).join(",")),
                    title_color: this.model.get_theme_param("title_color")
                })).appendTo(this.$description)
            },
            cache_selectors: function() {
                this.$win = t(window), this.$header_image = this.$(".header_image"), this.$avatar = this.$(".avatar"), this.$description = this.$(".description"), this.$description_links = this.$(".description a"), this.$description_inner = this.$(".description .description_inner"), this.$navigation_bg = this.$(".navigation_bg"), this.$sticky_items = this.$("[data-sticky-styles]"), this.header_image_height = this.$header_image.height() - this.options.header_min_height > this.options.header_min_height ? this.$header_image.height() - this.options.header_min_height : this.options.header_min_height
            },
            parallax_header: function(t) {
                if (this.is_peepr && !this.customize_view && this.$header_image.length) {
                    var i = e.isUndefined(t) ? this.$win.scrollTop() : t;
                    if (!(i > this.header_image_height)) {
                        var o = Math.round(i * this.options.parallax_inertia);
                        this.$header_image.css({
                            transform: "translate3d(0," + o + "px, 0)"
                        });
                        var s = i * this.options.avatar_inertia,
                            n = (100 - s) / 100;
                        if (n < 0 && (n = 0), this.$avatar.css({
                                opacity: n
                            }), this.$navigation_bg.length && this.$blurred_header.length) {
                            var r = this.$header_image.height() - i,
                                a = o - i;
                            this.$navigation_bg.css({
                                height: r,
                                opacity: 1 - n
                            }), this.$blurred_header.css({
                                transform: "translate3d(0," + a + "px, 0)"
                            })
                        }
                    }
                }
            },
            set_sticky_header: function(t) {
                t ? (this.$el.addClass("sticky_header"), this.$navigation_bg.css({
                    height: "",
                    opacity: ""
                })) : this.$el.removeClass("sticky_header")
            },
            close_customize: function() {
                this.customize_view && this.customize_view.remove()
            },
            preload_images: function(e, i) {
                var o = t(e).find("img"),
                    s = document.createElement("img"),
                    n = 0;
                i = i || t.noop, o.length || i();
                for (var r = 0, a = o.length; r < a; r++) t(s).on("load error", function() {
                    t(s).off(), n++, n === a && i()
                }), s.src = o[r].src
            },
            start_customizing: function() {
                this.customize_view = new o.Header.Customize({
                    model: this.model
                }), this.listenTo(this.customize_view, "remove", this._customize_remove), this.$el.html(this.customize_view.render().el);
                var t = this.$el.width();
                this.$(".header_image").height(t * this.options.aspect_ratio), this.on_customize_open()
            },
            show_description_template: e.template('            <div class="show_description" style="                background: -moz-linear-gradient(top,  rgba(<%= background_color %>,0) 0%, rgba(<%= background_color %>,0.75) 50%, rgba(<%= background_color %>,1) 100%);                background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(<%= background_color %>,0)), color-stop(50%,rgba(<%= background_color %>,0.75)), color-stop(100%,rgba(<%= background_color %>,1)));                background: -webkit-linear-gradient(top,  rgba(<%= background_color %>,0) 0%,rgba(<%= background_color %>,0.75) 50%,rgba(<%= background_color %>,1) 100%);                background: -o-linear-gradient(top,  rgba(<%= background_color %>,0) 0%,rgba(<%= background_color %>,0.75) 50%,rgba(<%= background_color %>,1) 100%);                background: -ms-linear-gradient(top,  rgba(<%= background_color %>,0) 0%,rgba(<%= background_color %>,0.75) 50%,rgba(<%= background_color %>,1) 100%);                background: linear-gradient(to bottom,  rgba(<%= background_color %>,0) 0%,rgba(<%= background_color %>,0.75) 50%,rgba(<%= background_color %>,1) 100%);                color: <%= title_color %>;            ">                <i class="show_icon icon_arrow_carrot_down"></i>                <i class="hide_icon icon_arrow_carrot_up"></i>            </div>        ')
        });
        o.HeaderView = s, o.Header.fonts = TumblrData.fonts || {}
    }(jQuery, _, Backbone, Tumblr.IndashBlog), /*! scripts/indash_blog/views/post_view.js */
    window.Tumblr.IndashBlog || (window.Tumblr.IndashBlog = {}),
    function(t, e, i, o, s) {
        "use strict";
        var n = e.get(o, "Prima.LivePhotos"),
            r = e.get(o, "Prima.ExpandableTags"),
            a = e.get(o, "Prima.Utils.CanvasTools"),
            l = i.View.extend({
                subviews: {},
                events: {
                    "click .post_header .reblog_info": "__reblog_info_clicked",
                    "click .post_header .source_info": "__source_info_clicked",
                    "click .post_header .reblog_follow_button": "__reblog_follow_clicked",
                    "click .post_controls .like": "__like_clicked",
                    "click .post_controls .reblog": "__reblog_clicked",
                    "click .post_controls .share": "__share_clicked",
                    "click .post_controls .reply": "__reply_clicked",
                    "click .post_notes .post_notes_label": "__notes_clicked",
                    "click .post_notes .tumblelog": "__notes_tumblelog_clicked",
                    "click .post_notes .avatar_frame": "__notes_tumblelog_clicked",
                    "click .post_tag": "__post_tag_clicked",
                    "mousedown .post_tag": "__post_tag_mousedown",
                    "click .video_preview": "__video_preview_click",
                    "click .photo_exif_flipper": "__exif_flip_click",
                    "click a.photoset_photo": "__photoset_clicked",
                    "click a.panorama": "__panorama_clicked",
                    "click a.high_res_link.no_pop": "__no_pop_high_res_photo_clicked",
                    "click .post_content a:not(.high_res_link.no_pop)": "__post_content_link_clicked",
                    "click .post_content img": "__post_content_img_clicked",
                    "click .post_content .external-image-wrapper": "__post_content_external_img_clicked",
                    "click .link-safemode-settings": "_onlinkClick",
                    "click .show-me": "_openPeepr",
                    "click .show-me-tag": "_openPeeprTagFiltering",
                    "click .link-tagfiltering-settings": "_onTaglinkClick",
                    "click .x-banner .review": "_handleProjectXBannerRequest"
                },
                className: "post post_full",
                template: e.template(t("#indash_blog_post_template").html()),
                _handleProjectXBannerRequest: function(e) {
                    var i = t(e.target).closest(".post_full"),
                        s = i.attr("data-post-id");
                    o.Prima.SafeMode._handleProjectXBannerRequest(e, s, this)
                },
                __reblog_follow_clicked: function(e) {
                    e.preventDefault(), o.follow({
                        tumblelog: this.model.get("reblogged_from_name"),
                        source: "FOLLOW_SOURCE_REBLOG"
                    });
                    var i = t(e.currentTarget);
                    i.addClass("animating is-following"), setTimeout(function() {
                        i.removeClass("animating")
                    }, 300)
                },
                _onlinkClick: function(t) {
                    t.preventDefault();
                    var e = {
                        source: "peepr"
                    };
                    o.Events.trigger("Kraken:safeMode:FilteringSettingLinkClicked", {
                        loggingData: e
                    }), window.open("/settings/account#safe_mode")
                },
                _onTaglinkClick: function(t) {
                    t.preventDefault();
                    var e = {
                        source: "peepr"
                    };
                    o.Events.trigger("userTagFiltering::FilteredLinkClicked", {
                        loggingData: e
                    }), window.open("/settings/account#tagfiltering")
                },
                __source_info_clicked: function(e) {
                    e.preventDefault(), this._open_link_in_new_tab(t(e.currentTarget).attr("href"))
                },
                __reblog_info_clicked: function(e) {
                    e.preventDefault(), o.Events.trigger("indashblog:navigate", t(e.currentTarget).data("tumblelogName"))
                },
                __post_content_img_clicked: function() {
                    var t = this.$(".inline_external_image");
                    e.each(t, this.toggle_external_images, this)
                },
                __post_content_external_img_clicked: function() {
                    var t = this.$(".external-image-wrapper");
                    e.each(t, this.show_external_image, this)
                },
                __post_tag_mousedown: function(e) {
                    if (o.Flags.bool("peepr_search_and_filter")) return e.stopPropagation(), void o.Events.trigger("peeprsearch:change:term", {
                        term: t(e.currentTarget).data("tag")
                    })
                },
                __post_tag_clicked: function(e) {
                    e.preventDefault(), o.Flags.bool("peepr_search_and_filter") || this._open_link_in_new_tab(t(e.currentTarget).attr("href"))
                },
                __post_content_link_clicked: function(e) {
                    e.preventDefault();
                    var i = t(e.currentTarget),
                        s = i.attr("href"),
                        n = o.Prima.Url.parseTumblelogUrl(s),
                        r = !!n.tumblelog_name && n.tumblelog_name,
                        a = !!n.post_id && n.post_id;
                    return i.hasClass("tmblr-truncated-link") ? void this._open_link_in_new_tab(s) : void(r ? o.Events.trigger("peepr-open-request", {
                        tumblelog_name: r,
                        post_id: a
                    }) : this._open_link_in_new_tab(s))
                },
                __no_pop_high_res_photo_clicked: function(i) {
                    return this.livePhoto ? (i.preventDefault(), void setTimeout(e.bind(function() {
                        t(i.currentTarget).prop("livePhotoSneezeguard") && (i.preventDefault(), i.stopImmediatePropagation(), this._open_in_photo_lightbox({
                            post: this.model
                        }))
                    }, this), 0)) : (i.preventDefault(), i.stopImmediatePropagation(), void this._open_in_photo_lightbox({
                        post: this.model
                    }))
                },
                pixelateAndShowAvatars: function() {
                    a.drawPixelatedImages(this), this.$el.find(".pixelated-avatar").removeClass("hide").addClass("show")
                },
                __photoset_clicked: function(e) {
                    e.preventDefault(), e.stopImmediatePropagation();
                    var i = t(e.currentTarget);
                    this._open_in_photo_lightbox({
                        post: this.model,
                        photoset_index: i.data("photosetIndex"),
                        target: i
                    })
                },
                __panorama_clicked: function(e) {
                    e.preventDefault(), e.stopImmediatePropagation();
                    var i = t(e.currentTarget);
                    this._open_in_pano_lightbox(i)
                },
                __like_clicked: function() {
                    this.clicked_flag = !0, this.model.toggleLike(), o.Events.trigger("peepr:like_update", this.model.get("tumblelog"), this.model.toJSON()), o.Events.trigger("Kraken:peepr:like_update", this.model.get("tumblelog"), this.model.toJSON())
                },
                __reblog_clicked: function(t) {
                    return t.preventDefault(), t.altKey ? void(this.is_reblogged || this.model.fastReblog()) : void o.Events.trigger("indashblog:post:reblog", this.model.toJSON())
                },
                __reply_clicked: function() {
                    this.showNotes({
                        pinnedTarget: this.$(".note_link_current"),
                        postModel: this.model,
                        popoverContainer: this.$el,
                        shouldFocusReplyField: !0
                    })
                },
                __share_clicked: function(i) {
                    var s = t(i.currentTarget);
                    return new o.Prima.Messaging.SharePost({
                        postId: s.attr("data-post-id"),
                        blogUuid: s.attr("data-tumblelog-uuid"),
                        isNsfw: s.attr("data-is-nsfw"),
                        favoritesNames: e.compact([s.attr("data-tumblelog-name"), s.attr("data-parent-tumblelog-name")]),
                        externalNetworksData: this.model.get("share_popover_data"),
                        pinnedTarget: s,
                        popoverContainer: this.$el
                    }).render()
                },
                __notes_clicked: function(t) {
                    o.Events.trigger("useraction:click:post:notes", {
                        event: t
                    }), this.__notes_opened()
                },
                __notes_reply_clicked: function(t) {
                    setTimeout(e.bind(function() {
                        this.model.set("replyToTumblogName", t), this.__notes_opened()
                    }, this), 250)
                },
                __notes_opened: function() {
                    this.showNotes({
                        pinnedTarget: this.$(".note_link_current"),
                        postModel: this.model,
                        popoverContainer: this.$el
                    })
                },
                __notes_tumblelog_clicked: function(e) {
                    e.preventDefault(), this._open_link_in_new_tab(t(e.currentTarget).attr("href"))
                },
                __video_preview_click: function(t) {
                    t.preventDefault(), this.show_video()
                },
                __exif_flip_click: function(i) {
                    i.preventDefault(), i.stopImmediatePropagation();
                    var s = t(i.currentTarget).parents(".flipcard");
                    s.addClass("initialized"), s.hasClass("reveal_back") || o.Events.trigger("postchrome-interactions:show-exif-click", {
                        loggingData: {
                            action: "show-exif-click",
                            postId: this.model.get("id")
                        }
                    }), e.defer(function() {
                        s.toggleClass("reveal_back")
                    })
                },
                _open_link_in_new_tab: function(t) {
                    t && t.length && window.open(t, "_blank")
                },
                _open_in_photo_lightbox: function(t) {
                    o.Events.trigger("indashblog:post:photo_lightbox", t)
                },
                _open_in_pano_lightbox: function(t) {
                    t && t.panorama({
                        lightbox: !0
                    })
                },
                _update_note_count: function(t) {
                    var e, i = this.$el.find(".post_notes_label"),
                        o = i.find(".note_link_current");
                    t ? (e = o.data("more"), o.data("more") !== o.text() && o.data("less", o.text()), i.removeClass("no_notes")) : (e = o.data("less"), "0 notes" === e && i.addClass("no_notes")), o.text(e), o.attr("title", e)
                },
                _render_like: function() {
                    var e = this.$el.find(".post_control.like"),
                        i = this.clicked_flag ? e : this.$el,
                        o = this.model.get("liked");
                    e.toggleClass("liked", o);
                    var s = t('<div class="post_animated_heart post_poof"><span class="heart_left"></span><span class="heart_right"></span></div>').toggleClass("unliked", !o);
                    if (!this.clicked_flag) {
                        var n = t(window).height();
                        if (this.$el.height() > n && s.css("top", .5 * n), t(".post_animated_heart").length > 0) {
                            var r = .2 + .6 * Math.random();
                            s.css("left", this.$el.width() * r)
                        }
                    }
                    this._update_note_count(o), i.append(s), this.clicked_flag = !1, setTimeout(function() {
                        s.fadeOut(200, function() {
                            s.remove()
                        })
                    }, 300)
                },
                _render_reblog_poof: function(i) {
                    this.is_reblogged = !0;
                    var o = t('<div class="post_reblog_poof post_poof"></div>');
                    i && o.addClass("queue");
                    var s = t(window).height();
                    this.$el.height() > s && o.css("top", .5 * s), this.$el.append(o), setTimeout(e.bind(function() {
                        o.fadeOut(200, e.bind(function() {
                            o.remove(), this._update_reblog_control(i)
                        }, this))
                    }, this), 300)
                },
                _update_reblog_control: function(t) {
                    var e = this.$el.find(".post_control.reblog");
                    e.addClass("reblogged"), t && e.addClass("queued")
                },
                _add_post_container_classes: function() {
                    var t = "";
                    t += "is_" + this.model.get("type"), this.model.get("source_url") && (t += " has_source generic_source"), this.$el.addClass(t)
                },
                _openPeepr: function(e) {
                    var i = t(e.target).closest(".post_full"),
                        s = i.attr("data-tumblelog-name"),
                        n = i.attr("data-post-id");
                    o.Prima.SafeMode.openPeepr(s, n)
                },
                _openPeeprTagFiltering: function(e) {
                    var i = t(e.target).closest(".post_full"),
                        s = i.attr("data-tumblelog-name"),
                        n = i.attr("data-post-id");
                    o.Events.trigger("peepr-open-request", {
                        tumblelog_name: s,
                        post_id: n,
                        editing_appearance: !1,
                        should_bypass_tagfiltering: !0
                    });
                    var r = {
                        source: "peepr"
                    };
                    o.Events.trigger("userTagFiltering:FilteredTagViewPostClicked", {
                        loggingData: r
                    })
                },
                initialize: function(t) {
                    this.options = t || {}, this.currentUser = o.Prima.currentUser(), this.clicked_flag = !1, this.listenTo(this.model, "like:success", this._render_like), this.listenTo(this.model, "unlike:success", this._render_like), this.listenTo(this.model, "fastreblog:success", this._render_reblog_poof), this.listenTo(this.model, "reblog:success", this._update_reblog_control), this.listenTo(o.Events, "peepr:close", this.beforeTeardown, this), this.listenTo(o.Events, "drawer:notes:open", this.__notes_reply_clicked, this)
                },
                attributes: function() {
                    var t = {
                        "data-post-id": this.model.get("id"),
                        "data-tumblelog-key": this.model.get("tumblelog_key"),
                        "data-tumblelog-name": this.model.get("tumblelog"),
                        "data-is-nsfw": this.model.get("is_nsfw")
                    };
                    return this.model.get("supply_logging") && this.model.get("supply_logging").length && (t["data-supply-logging"] = JSON.stringify(this.model.get("supply_logging"))), t
                },
                isSafeMode: function() {
                    return !(!o.Flags.bool("safe_mode") || !this.currentUser.attributes.safe_mode)
                },
                isCurrentUsersBlog: function() {
                    var t = !1;
                    return e.each(this.currentUser.channels.models, function(e) {
                        e.id === this.model.attributes.blog.name && (t = !0)
                    }, this), t
                },
                isInlineTags: function() {
                    return o.Flags.bool("show_post_tags_inline")
                },
                render: function() {
                    this._add_post_container_classes(), this.$el.html(this.template({
                        model: this.model.toJSON(),
                        currentUser: this.currentUser,
                        safeMode: this.isSafeMode(),
                        isTagFilteringEnabled: o.Flags.bool("user_tag_filtering"),
                        ownBlog: this.isCurrentUsersBlog(),
                        appealState: o.Prima.SafeMode.getAppealArray(),
                        projectx: o.Flags.bool("project_x_web_sensitive_covers"),
                        flagFrontend: o.Flags.bool("safe_mode_own_post"),
                        flagProjectXappeal: o.Flags.bool("project_x_appeal"),
                        inlineTags: this.isInlineTags(),
                        __: o.Prima.Translate,
                        addTagClass: this.model.get("tag_layout_class") || "",
                        shouldBypassSafeModeForBlog: this.model.get("should_bypass_safemode_forblog"),
                        shouldBypassSafeModeForPost: this.model.get("should_bypass_safemode_forpost"),
                        shouldBypassTagFiltering: this.model.get("should_bypass_tagfiltering"),
                        canModifySafeMode: this.model.get("can_modify_safe_mode")
                    }));
                    var t = this.$("video[data-crt-video]");
                    t.length && (this.video = o.Prima.CrtControl.newPlayer(t[0], {
                        attributes: {
                            autoplay: !1,
                            muted: !0,
                            isInPeepr: !0,
                            watch: !1
                        }
                    }));
                    var e = this.$("[data-native-audio]");
                    if (e.length && (this.audio = new o.Prima.NativeAudio({
                            el: e,
                            model: this.model,
                            albumArt: e.data("album-art"),
                            streamUrl: e.data("stream-url"),
                            track: e.data("track"),
                            artist: e.data("artist"),
                            noId3: e.data("no-id3"),
                            preview: !1
                        }), this.audio.render().$el), n && n.hasInstance() && "photo" === this.model.get("type")) {
                        this.livePhoto = n.getInstance().create(this.$el.find("[data-live-photo]"));
                        var i = this.$("[data-carousel]");
                        i.length && (this.carousel = new o.Prima.Carousel({
                            el: i,
                            model: this.model,
                            redirect_url_primary: i.data("redirect-url-primary")
                        }), this.carousel.render().$el)
                    }
                    return this.pixelateAndShowAvatars(), this
                },
                make_tags_draggable: function() {
                    var t = this.$(".post_tags"),
                        e = t.find(".post_tags_inner");
                    if (t.width() < e.width()) t.addClass("draggable"), new o.DraggableTags({
                        el: t
                    });
                    else if (!o.Flags.bool("show_post_tags_inline") && e.height() > 4 * parseInt(t.css("line-height"), 10)) {
                        t.addClass("fade");
                        var i = new r({
                            el: t,
                            model: this.model
                        });
                        return i.render(), this.tag_layout = "expandable", i
                    }
                },
                show_video: function() {
                    if ("blank" === this.$(".video_preview").data("render-context")) return this._open_link_in_new_tab(this.model.get("post_url")), !1;
                    var t = this.$(".video_embed_code").val();
                    this.$(".video_embed").html(t), this.$(".post_chrome").addClass("playing")
                },
                toggle_external_images: function(t) {
                    var e = this.$(t),
                        i = e.attr("external_src");
                    if (e.hasClass("enlarged")) e.attr("src", e.attr("original_src")), e.removeClass("enlarged");
                    else {
                        e.attr("original_src", e.attr("src")), e.addClass("enlarged"), e.attr("loader") && e.attr("src", e.attr("loader"));
                        var o = new Image;
                        o.onload = function() {
                            e.attr("src", i)
                        }, o.src = i
                    }
                },
                show_external_image: function(e) {
                    var i = this.$(e),
                        o = i.data("src"),
                        s = i.data("loading-text"),
                        n = t("<img>"),
                        r = t("<p>");
                    r.append(n), i.html(s), n.load(function() {
                        i.replaceWith(r)
                    }), n.attr("src", o)
                },
                beforeTeardown: function() {
                    this.video && this.video.teardown(), this.video = null
                },
                showNotes: function(t) {
                    o.Prima.postActivityLoader(e.bind(function(e) {
                        return new e(t).render()
                    }, this))
                }
            });
        s.PostView = l
    }(window.jQuery, window._, window.Backbone, window.Tumblr, window.Tumblr.IndashBlog), /*! scripts/search/views/blogs/indash_tumblelog_compact.js */
    function(t, e) {
        "use strict";
        e.Search || (e.Search = {});
        var i = e.IndashBlog.HeaderCompact.extend({
            className: "indash_blog indash_tumblelog_compact",
            events: function() {
                return _.extend({}, e.IndashBlog.HeaderCompact.prototype.events, {
                    "click .indash_header_wrapper .customize_button": "__on_customize_click",
                    "click .indash_header_wrapper": "_on_blog_click"
                })
            },
            subviews: [],
            defaults: {
                follow_data: {
                    source: "FOLLOW_SOURCE_SEARCH_RESULTS_BLOG_CAROUSEL"
                },
                unfollow_data: {
                    source: "UNFOLLOW_SOURCE_SEARCH_RESULTS_BLOG_CAROUSEL"
                },
                hide_posts_on_unfollow: !1,
                include_posts: !1,
                template_data: {
                    search_blog_card: !0,
                    show_navigation: !0,
                    show_user_controls: e.Flags.bool("is_logged_in"),
                    show_share_controls: !1,
                    show_follow_button: !0
                },
                strip_description_line_breaks: !0,
                fade_in: !0,
                include_info_popover: !0
            },
            initialize: function(t) {
                this.options = _.defaults({}, t, this.defaults), this.options.follow_data.source = this.defaults.follow_data.source, this.options.unfollow_data.source = this.defaults.unfollow_data.source, this.options.on_render = _.bind(this._setup_posts, this), this.options.fade_in && this.$el.addClass("hidden fade_in"), e.IndashBlog.HeaderCompact.prototype.initialize.call(this, this.options)
            },
            render: function() {
                return setTimeout(_.bind(function() {
                    this.$el.removeClass("hidden")
                }, this), 100), e.IndashBlog.HeaderCompact.prototype.render.call(this), this
            },
            _on_blog_click: function(i) {
                if (!t(i.target).closest(".indash_header_wrapper .navigation").length) {
                    i.preventDefault();
                    var o = "blog_carousel",
                        s = t(i.target).parents(".post").data("post-id"),
                        n = this.model.get("name");
                    this.options.blog_position, t(i.target).closest("[data-context-path]").data("context-path");
                    s && (o += "_post");
                    e.Flags.bool("is_logged_in") ? s || e.Events.trigger("peepr-open-request", {
                        tumblelog_name: n
                    }) : window.open(this.model.get("url")), e.Events.trigger("search:blog:click:posts_click", this.ads_generate_payload("posts"))
                }
            },
            ads_generate_payload: function(t) {
                return {
                    loggingData: {
                        postData: {
                            "serve-id": this.model.get("pt"),
                            pt: this.model.get("pt")
                        },
                        userAction: t
                    }
                }
            },
            show_posts: function() {
                this.$(".recent_posts") && this.$el.addClass("show_posts")
            },
            hide_posts: function() {
                this.$el.removeClass("show_posts")
            },
            _setup_posts: function() {
                this.subviews.highlighted_posts = new e.TumblelogPopover.Posts({
                    model: this.model,
                    on_bottom: !0,
                    parent: this.$el.find(".indash_header_wrapper")
                })
            },
            __on_customize_click: function(e) {
                var i = t(e.currentTarget),
                    o = i.data("url");
                o && (e.preventDefault(), e.stopPropagation(), window.open(o))
            }
        });
        e.Search.indashTumblelogCompactView = i
    }(jQuery, Tumblr), /*! scripts/posts/collections/posts.js */
    function(t) {
        "use strict";
        var e = Backbone.Collection.extend({
            model: Tumblr.Prima.Models.Post,
            initialize: function() {
                this.on("change:liked", this.updateLikeStatus, this), this.on("ignore:success", this.dismiss, this), this.on("unfollow:success", this.dismiss, this)
            },
            updateLikeStatus: function(t, e) {
                var i = this.whereBy({
                    liked: !e,
                    root_id: t.get("root_id")
                });
                i.invoke("set", {
                    liked: e
                }), t.get("liked") ? i.invoke("trigger", "like:success") : i.invoke("trigger", "unlike:success")
            },
            dismiss: function(t) {
                this.whereBy({
                    tumblelog: t.get("tumblelog"),
                    sponsored: !1
                }).invoke("dismiss")
            },
            whereBy: function(t) {
                return new e(this.where(t))
            }
        });
        Tumblr.Posts = new e
    }(jQuery), /*! scripts/posts/views/posts_view.js */
    function(t) {
        "use strict";
        var e = Tumblr.Events,
            i = Tumblr.Flags("is_logged_in");
        Tumblr.PostsView = Backbone.View.extend({
            el: "#posts",
            initialize: function() {
                this.collection = Tumblr.Posts, this.postViews = [], this.trendingExplorePosts = [], this.form_key = t("#tumblr_form_key").attr("content"), this.setupViewabilityTracking(), this.createPostsAndAds(), this.listenTo(Tumblr.AutoPaginator, "after", this.createPostsAndAds), this.listenTo(e, "posts:load", this.createPostsAndAds), this.listenTo(e, "post:like", this.likePostById), this.listenTo(e, "post:fastreblog", this.fastReblogById), this.listenTo(e, "post:embed:focus", this.embedFocus), this.listenTo(e, "post:form:success", this.postFormSubmit), this.listenTo(e, "CrtControl:playerCreated", this.setupMoatForVideo), this.listenTo(e, "post:view:create", this.createPostView)
            },
            setupViewabilityTracking: function() {
                this.viewabilityTracker = new Tumblr.Prima.ViewabilityTracker
            },
            setupMoatForVideo: function(t, e) {
                var i = e.attributes.viewability;
                i && this.listenToOnce(t, "ready", function() {
                    this._setupMoatViewability({
                        element: t,
                        isVideo: !0,
                        beacons: i.beacons,
                        beaconRules: i.beaconRules
                    })
                })
            },
            createPostsAndAds: function() {
                this.createPosts(), this.createVideoAds(), this.createImageAds()
            },
            createPosts: function() {
                var t = ".post[data-json]:not([data-view-exists])";
                _.forEach(this.$el.find(t), this.createPost, this), this.logExploreTrending()
            },
            createPostView: function(t, e) {
                var i = this.createPostModelFromEl(t),
                    o = new Tumblr.PostView({
                        el: t,
                        model: i
                    });
                _.isFunction(e) && e(o, i)
            },
            createPostModelFromEl: function(t) {
                return new Tumblr.Prima.Models.Post(t.data("json"))
            },
            createTumblrVideoPlayer: function(e, i) {
                var o = t(e),
                    s = o.data("json") || {},
                    n = o.find("video[data-crt-video]");
                if (n.length) {
                    var r = !1,
                        a = s.beacons,
                        l = s.beacon_rules;
                    a && l && (r = {
                        beacons: a,
                        beaconRules: l
                    });
                    var h = {
                        attributes: {
                            autoplay: "undefined" == typeof s.autoplay || Boolean(s.autoplay),
                            isAd: i,
                            viewability: r
                        }
                    };
                    Tumblr.Prima.Events.trigger("CrtControl:newPlayer", n, h)
                }
            },
            createVideoAds: function() {
                var t = ".video-ad[data-json]:not([data-view-exists])";
                _.forEach(this.$el.find(t), this.setUpVideoAdVideoPlayer, this)
            },
            createImageAds: function() {
                var t = ".image-ad[data-json]:not([data-view-exists])";
                _.forEach(this.$el.find(t), this.setupViewabilityForImageAd, this)
            },
            setupViewabilityForImageAd: function(e) {
                var i = t(e),
                    o = i.data("json") || {},
                    s = o.beacons,
                    n = o.beaconRules;
                s && n && this._setupMoatViewability({
                    element: e,
                    isVideo: !1,
                    beacons: s,
                    beaconRules: n
                }), t(e).attr("data-view-exists", !0)
            },
            setUpVideoAdVideoPlayer: function(e) {
                this.createTumblrVideoPlayer(e, !0), t(e).attr("data-view-exists", !0)
            },
            _setupMoatViewability: function(t) {
                this.viewabilityTracker.handleNewViewabilityComponent(new Tumblr.Prima.Viewability(t))
            },
            createPost: function(e) {
                var o = t(e),
                    s = this.createPostModelFromEl(o),
                    n = s.get("sponsored");
                if (n && "video" !== s.get("type")) {
                    var r = s.get("beacons"),
                        a = s.get("beacon_rules");
                    r && a && this._setupMoatViewability({
                        element: e,
                        isVideo: !1,
                        beacons: r,
                        beaconRules: a
                    })
                }
                var l = i(function() {
                    var t = "fan_mail" === s.get("type") ? Tumblr.FanMailView : Tumblr.PostView;
                    return new t({
                        el: o,
                        model: s
                    })
                }, function() {
                    return new Tumblr.PostViewLoggedOut({
                        el: o,
                        model: s
                    })
                });
                return this.collection.add(s), this.postViews.push(l), Tumblr.Prima && Tumblr.Prima.Events && this.createTumblrVideoPlayer(e, n), o.attr("data-view-exists", !0), Tumblr.Events.trigger("postView:createPost", {
                    view: l
                }), l.$(".explore-trending-badge").length && this.trendingExplorePosts.push(s), l
            },
            likePostById: function(t, e) {
                e = e || "mouse", this.collection.get(t).like(e)
            },
            fastReblogById: function(t, e) {
                this.collection.get(t).fastReblog(e)
            },
            embedFocus: function(t) {
                var e = this.collection.get(t.embedData.post_id);
                _.isEmpty(e) || e.embedFocus()
            },
            postFormSubmit: function(t) {
                var e, i;
                if (t && t.reblog && (e = this.collection.get(t.reblog_id), !_.isEmpty(e))) {
                    if (1 === parseInt(t["post[state]"], 10)) return;
                    "on.2" !== t["post[state]"] && 2 !== parseInt(t["post[state]"], 10) || (i = !0), e.updateReblogControl(i)
                }
            },
            logExploreTrending: function() {
                this.trendingExplorePosts.length && (Tumblr.Events.trigger("explore-trending:badge-serve", {
                    loggingData: {
                        post_ids: _.pluck(this.trendingExplorePosts, "id")
                    }
                }), this.trendingExplorePosts = [])
            }
        }), t(function() {
            Tumblr.postsView = new Tumblr.PostsView
        })
    }(jQuery), /*! scripts/posts/views/sponsor_popover.js */
    function(t, e, i, o) {
        "use strict";
        i.SponsorPopover = i.Popover.extend({
            events: {
                "click .post_control.add": "add"
            },
            initialize: function(t) {
                this.options = t || {}, e.extend(this.options, {
                    on_show: this.on_show,
                    disable_auto_show: !0
                }), i.Popover.prototype.initialize.apply(this, arguments)
            },
            add: function(t) {
                this.hide(), this.$el.removeClass("active"), this.trigger("action:add", t)
            },
            on_show: function() {
                this.position()
            }
        })
    }(window.jQuery, window._, window.Tumblr, window.Tumblr), /*! scripts/posts/views/creator_popover.js */
    function(t, e, i, o) {
        "use strict";
        var s = i.Popover,
            n = s.extend({
                events: {
                    "click .post_control.delete": "delete",
                    "click .post_control.edit": "edit",
                    "click .post_control.queue": "queue"
                },
                initialize: function(t) {
                    this.options = t || {}, e.extend(this.options, {
                        on_show: this.on_show,
                        disable_auto_show: !0
                    }), s.prototype.initialize.apply(this, arguments)
                },
                "delete": function() {
                    this.hide(), this.$el.removeClass("active")
                },
                edit: function(t) {
                    this.hide(), this.$el.removeClass("active"), this.trigger("action:edit", t)
                },
                queue: function() {
                    this.hide()
                },
                on_show: function() {
                    this.position()
                }
            });
        o.CreatorPopover = n
    }(window.jQuery, window._, window.Tumblr, window.Tumblr), /*! scripts/posts/views/post_view.js */
    function(t, e, i, o, s) {
        "use strict";
        var n = o.Prima,
            r = o.Flags,
            a = o.Events,
            l = e.get(o, "Prima.LivePhotos"),
            h = e.get(o, "Prima.Carousel"),
            c = e.get(o, "Prima.NativeAudio"),
            d = e.get(o, "Prima.ExpandableTags"),
            _ = e.get(o, "Prima.CTAButton"),
            u = e.get(o, "Prima.Utils.CanvasTools"),
            p = window.l10n_str || {},
            g = i.View.extend({
                events: {
                    "click .post_control.like:not(.liked)": "like",
                    "click .post_control.liked": "unlike",
                    "click .post_control.reblog": "reblog",
                    "click .post_control.reply": "reply",
                    "click .post_control.block": "ignore",
                    "click .post_control.message-controls": "messageControls",
                    "click .post_control.publish": "publish",
                    "click .post_control.queue": "queue",
                    "click .post_control.queue_submission": "queue_submission",
                    "click .post_control.edit.submission": "edit",
                    "click .post_control.delete": "delete",
                    "click .post_control.approve": "approve",
                    "click .post_control.post_control_menu.creator": "creator_popover",
                    "click .post_control.post_control_menu.sponsor": "sponsor_popover",
                    "click .post_control.post_control_menu.admin": "admin_popover",
                    "click .post_control.reblog-graph-control": "reblog_graph_click",
                    "click .post_control.deny": "deny",
                    "click .photo_reply_image_container": "photo_reply_click",
                    'click .reblog_follow_button:not(".onboard")': "handle_follow_button",
                    "click [data-post-action]": "_click_post_action",
                    "click .post_media": "media_click",
                    "click .post_body .read_more": "read_more_click",
                    "click .post_body a:not(.read_more)": "caption_click",
                    "click .post_permalink": "permalink_click",
                    "click .post_control.share": "share_click",
                    'click .popover_menu_item a[data-share-type="email"]': "share_menu_email",
                    'click .popover_menu_item a[data-share-type="twitter"]': "share_menu_twitter",
                    'click .popover_menu_item a[data-share-type="facebook"]': "share_menu_facebook",
                    'click .popover_menu_item a[data-share-type="permalink"]': "share_menu_permalink",
                    "click .post_media_photo_anchor": "photo_lightbox",
                    "click .panorama": "_onPanoramaClick",
                    "click .post_control.ask_answer": "ask_answer",
                    "click .post_avatar_link": "avatar_click",
                    "click .post_source_link": "source_click",
                    "click .post_tag": "tag_click",
                    "click .recommendation-reason-link": "trending_badge_click",
                    "click .note_link_current": "notes_click",
                    "click .post_info_fence > .post_info_link": "blogname_click",
                    "click .cpi_install_button": "install_click",
                    "click .post_content a": "content_link_click",
                    "click .link-safemode-settings": "_onlinkClick",
                    "click .show-me": "_openPeepr",
                    "click .show-me-tag": "_openPeeprTagFiltering",
                    "click .link-tagfiltering-settings": "_onTaglinkClick",
                    "click .x-banner .review": "_handleProjectXBannerRequest"
                },
                initialize: function() {
                    this.controls = {}, this.controls.like = this.$el.find(".post_control.like"), this.controls.reblog = this.$el.find(".post_control.reblog"), this.note_count = this.$el.find(".note_count"), this.tag_layout = "normal", this.tagsDraggable(), this.checkForVendor(), this.checkForCTA(), this.model.get("is_reblog") && this._bindReblogTrailEvents(), this.like_heart_timeout = null, this.is_click_trigger = !1, this.is_reblogged = !1, this.stopListening(), this.listenTo(this.model, "like:set", this.updateLikeStatus), this.listenTo(this.model, "unlike:set", this.updateLikeStatus), this.listenTo(this.model, "like:set", e.bind(this.updateNoteCount, this, !0)), this.listenTo(this.model, "unlike:set", e.bind(this.updateNoteCount, this, !1)), this.listenTo(a, "tumblelog:unfollow", function(t) {
                        this.model.get("sponsored") || t.name !== this.model.get("tumblelog") || this.destroy()
                    }), this.listenTo(this.model, "destroy:success", this.destroy), this.listenTo(this.model, "dismiss", this.destroy), this.listenTo(this.model, "publish:success", this.destroy), this.listenTo(this.model, "queue:success", this.destroy), this.listenTo(this.model, "unpromote:success", this.destroy), this.listenTo(this.model, "deny:success", this.destroy), this.listenTo(this.model, "approve:success", this.destroy), this.listenTo(this.model, "publish:failure", this.failure), this.listenTo(this.model, "promote:failure", this.alert), this.listenTo(this.model, "fastreblog:success", this.updateReblog), this.listenTo(this.model, "remove_source:success", this.hidePost), this.listenTo(this.model, "embed:focus", this.excludeFromGhostlist), this.listenTo(this.model, "reblog:success", this.updateReblogControl), this.listenTo(a, "TumblelogPopover:follow", this._on_tumblelog_popover_follow), this.listenTo(a, "peepr:like_update", this._on_external_like_update), this.listenTo(a, "fastreblog:success", this.onExternalFastReblog), this.modelForFollowButton = this.model.parentTumblelog || this.model.tumblelog, this.modelForFollowButton && this.listenTo(this.modelForFollowButton, "change:following", this.updateParentTumblelogFollow), o.Capture && (this.model.get("sponsored") || this.model.get("pt")) && (this.capture_web_instream = new o.Capture.WebInStream({
                        el: this.$el
                    })), this.current_link = !0, this.less_link = !1, this.more_link = !1, e.result(this, "initialize_type_" + this.model.get("type"))
                },
                _bindReblogTrailEvents: function() {
                    this.$reblog_list = this.$el.find(".reblog-list"), this.$reblog_list.on("click", ".reblog-tumblelog-name", e.bind(this._onReblogTrailEvent, this, "reblogtrail_tumblelog_name")), this.$reblog_list.on("click", ".reblog-avatar", e.bind(this._onReblogTrailEvent, this, "reblogtrail_tumblelog_avatar")), this.$reblog_list.on("click", ".external-image-wrapper", e.bind(this._onReblogTrailEvent, this, "reblogtrail_external_image")), this.$reblog_list.on("click", ".tmblr-truncated-link", e.bind(this._onReblogTrailEvent, this, "reblogtrail_truncated_link")), this.pixelateAndShowAvatars()
                },
                pixelateAndShowAvatars: function() {
                    u.drawPixelatedImages(this), this.$el.find(".pixelated-avatar").removeClass("hide").addClass("show")
                },
                _onReblogTrailEvent: function(t, e) {
                    var i = e.type,
                        o = "ReblogTrail:" + i + ":" + t;
                    this.model.get("pt") && a.trigger(o, {
                        model: this.model,
                        loggingData: this.loggingData({
                            userAction: t
                        })
                    })
                },
                _click_post_action: function(i) {
                    i.preventDefault();
                    var o = t(i.currentTarget),
                        s = o.data(),
                        n = s.postAction,
                        r = "_post_action_",
                        a = r + n;
                    e.isFunction(this[a]) && this[a](s, o)
                },
                _onlinkClick: function(t) {
                    t.preventDefault();
                    var e = {
                        source: "dashboard"
                    };
                    o.Events.trigger("Kraken:safeMode:FilteringSettingLinkClicked", {
                        loggingData: e
                    }), window.open("/settings/account#safe_mode")
                },
                _onTaglinkClick: function(t) {
                    t.preventDefault();
                    var e = {
                        source: "dashboard"
                    };
                    o.Events.trigger("userTagFiltering::FilteredLinkClicked", {
                        loggingData: e
                    }), window.open("/settings/account#tagfiltering")
                },
                _post_action_remove: function() {
                    if (this._handle_pinned_post_dismissal(), this.model.get("is_recommended")) {
                        var t = this.model.get("recommendation_reason"),
                            e = t && "search" === t.icon ? "followed_search" : "recommended";
                        this._log_recommendation_dismissal(e)
                    }
                    this.destroy()
                },
                _post_action_follow: function(t, i) {
                    var s = this.model.tumblelog,
                        n = t.postActionSource || !1,
                        r = i.hasClass("worded-follow-button"),
                        a = r ? i : this.$(".follow");
                    s.save_following({
                        following: !0
                    }, {
                        source: n,
                        pt: this.model.get("pt"),
                        offset: this.model.get("carousel_index")
                    }).done(e.bind(function() {
                        o.Events.trigger("ads:client_follow", {
                            model: this.model,
                            loggingData: this.loggingData({
                                userAction: "client_follow"
                            })
                        })
                    }, this)).fail(function() {
                        o.Dialog.alert(p.ajax_error)
                    }), this.$el.addClass("is_followed"), a.addClass(r ? "" : "follow_poof")
                },
                _on_tumblelog_popover_follow: function(t) {
                    this.model.tumblelog && this.model.tumblelog.get("name") === t && (this.$el.addClass("is_followed popover_open"), this.$el.find(".follow").addClass("follow_poof"), this.listenToOnce(a, "TumblelogPopover:hide", function() {
                        this.$el.removeClass("popover_open")
                    }))
                },
                _on_external_like_update: function(t, e) {
                    this.model.get("root_id") === e.root_id && (this.controls.like.toggleClass("liked", e.liked), this.updateNoteCount(e.liked))
                },
                _hide_posts: function(t) {
                    t || (t = {
                        tumblelog: this.model.get("tumblelog"),
                        sponsored: !1
                    }), o.Posts.whereBy(t).invoke("dismiss")
                },
                photo_lightbox: function(e) {
                    if (!e && window.event && (window.event.metaKey || window.event.altKey) || e && (e.metaKey || e.altKey)) return !0;
                    var i = t(e.currentTarget),
                        s = i.data("big-photo"),
                        n = i.find(".image, .live-photo-keyframe").attr("src");
                    !e.isDefaultPrevented() && s && n && (e.preventDefault(), o.Lightbox.init([{
                        high_res: s,
                        low_res: n
                    }]))
                },
                _onPanoramaClick: function(e) {
                    e.preventDefault(), e.stopImmediatePropagation();
                    var i = t(e.currentTarget);
                    i.panorama({
                        lightbox: !0
                    })
                },
                ask_answer: function(e) {
                    e.preventDefault();
                    var i = t(e.currentTarget),
                        s = i.closest(".post"),
                        r = s.find(".post_ask_answer_form"),
                        a = s.find(".post_ask_answer_field");
                    r.show(), s.find(".post_footer").hide(), i.hide(), a.focus();
                    var l = function() {
                            o.KeyCommands.suspend()
                        },
                        h = function() {
                            o.KeyCommands.resume()
                        };
                    if (!this.richTextEditor) {
                        var c = new n.PostForms.Post({
                            type: "note",
                            ask: s.find(".post_body").eq(0).html()
                        });
                        this.richTextEditor = new n.RichTextEditorView({
                            placeholder: p.write_a_response || "Your answer here",
                            ariaLabel: p.write_a_response || "Your answer here",
                            className: "ask-answer-field",
                            supportImageSearch: !0,
                            model: c,
                            name: "answer",
                            post: c
                        }), this.listenTo(c, "change:answer", function(t, e) {
                            e = e.replace(/src=\"data:[^\"]*\">/gi, ""), a.val(e)
                        }), this.listenTo(c, "change validate", function() {
                            t("#ask_publish_button_" + s.attr("data-post-id")).prop("disabled", !c.isValid())
                        }), a.after(this.richTextEditor.render().$el).hide()
                    }
                    t(this.richTextEditor.editor.element).focus(l).blur(h), this.richTextEditor.focus()
                },
                _log_recommendation_dismissal: function(e) {
                    t.ajax({
                        method: "POST",
                        url: "/svc/search/log_dismissal",
                        data: {
                            tumblelog_name: this.model.get("tumblelog"),
                            post_id: this.model.get("id"),
                            type: e
                        },
                        withFormKey: !0
                    })
                },
                _handle_pinned_post_dismissal: function() {
                    var t = this.$el,
                        e = !!t.data("isPinned"),
                        i = 604800;
                    e && (o.Cookie.set("post_dismissed", this.model.get("id"), i), o.Events.trigger("useraction:dismiss:pinned_post", {
                        model: this.model,
                        loggingData: this.loggingData({
                            userAction: "post_dismissal"
                        })
                    }))
                },
                _openPeeprTagFiltering: function(e) {
                    var i = t(e.target).closest(".post_full"),
                        s = i.attr("data-tumblelog-name"),
                        n = i.attr("data-post-id");
                    o.Events.trigger("peepr-open-request", {
                        tumblelog_name: s,
                        post_id: n,
                        editing_appearance: !1,
                        should_bypass_tagfiltering: !0
                    });
                    var r = {
                        source: "dashboard"
                    };
                    o.Events.trigger("userTagFiltering:FilteredTagViewPostClicked", {
                        loggingData: r
                    })
                },
                _openPeepr: function(e) {
                    var i = t(e.target).closest(".post_full"),
                        s = i.attr("data-tumblelog"),
                        n = i.attr("data-id");
                    o.Prima.SafeMode.openPeepr(s, n)
                },
                _handleProjectXBannerRequest: function(e) {
                    var i = t(e.target).closest(".post_full"),
                        s = i.attr("data-id");
                    o.Prima.SafeMode._handleProjectXBannerRequest(e, s, this)
                },
                edit: function(t) {
                    var e = {
                        type: this.model.get("type"),
                        edit: !0,
                        channel_id: this.model.get("tumblelog"),
                        post_id: this.model.get("id"),
                        endpoint: this.model.get("type"),
                        attach_to: this.$el,
                        previous_content_selector: this.$(".post_wrapper"),
                        adjust_offset: !0
                    };
                    t.preventDefault(), a.trigger("postForms:edit", {
                        postEl: e.attach_to,
                        editId: e.post_id,
                        channelId: e.channel_id
                    })
                },
                "delete": function(i) {
                    i.preventDefault();
                    var s = t(i.currentTarget).data("confirm");
                    o.Dialog.confirm(s, e.bind(this.model.destroy, this.model))
                },
                deny: function(i) {
                    i.preventDefault();
                    var s = t(i.currentTarget).data("confirm");
                    o.Dialog.confirm(s, e.bind(function() {
                        this.destroy(), this.model.deny()
                    }, this))
                },
                approve: function(i) {
                    i.preventDefault();
                    var s = t(i.currentTarget).data("confirm");
                    o.Dialog.confirm(s, e.bind(this.model.approve, this.model, !1))
                },
                queue: function(i) {
                    i.preventDefault();
                    var s = t(i.currentTarget).data("confirm");
                    o.Dialog.confirm(s, e.bind(this.model.queue, this.model))
                },
                queue_submission: function(i) {
                    i.preventDefault();
                    var s = t(i.currentTarget).data("confirm");
                    o.Dialog.confirm(s, e.bind(this.model.approve, this.model, !0))
                },
                sponsor_popover: function(i) {
                    if (i.target === i.currentTarget) {
                        var s = t(i.currentTarget),
                            n = o.SponsorPopover;
                        this.sponsorPopover instanceof n || (this.sponsorPopover = new n({
                            model: this.model,
                            el: t(i.target),
                            glassless: !0,
                            on_hide: e.bind(function() {
                                s.removeClass("active")
                            }, this)
                        }), this.listenTo(this.sponsorPopover, "action:edit", this.edit)), s.addClass("active"), this.sponsorPopover.show()
                    }
                },
                creator_popover: function(i) {
                    if (i.target === i.currentTarget) {
                        var s = t(i.currentTarget),
                            n = o.CreatorPopover;
                        this.creatorPopover instanceof n || (this.creatorPopover = new n({
                            model: this.model,
                            el: t(i.target),
                            glassless: !0,
                            on_hide: e.bind(function() {
                                s.removeClass("active")
                            }, this)
                        }), this.listenTo(this.creatorPopover, "action:edit", this.edit)), s.addClass("active"), this.creatorPopover.show()
                    }
                },
                admin_popover: function(e) {
                    if (e.target === e.currentTarget) {
                        var i = o.AdminPopover;
                        this.adminPopover instanceof i || (this.adminPopover = new i({
                            model: this.model,
                            el: t(e.target)
                        })), this.adminPopover.show()
                    }
                },
                like: function(t) {
                    t.preventDefault(), this.is_click_trigger = !0, this.model.like("mouse")
                },
                unlike: function(t) {
                    t.preventDefault(), this.is_click_trigger = !0, this.model.unlike()
                },
                reply: function(t) {
                    this.showNotes({
                        pinnedTarget: this.$(".note_link_current"),
                        postModel: this.model,
                        shouldFocusReplyField: !0
                    })
                },
                publish: function(i) {
                    i.preventDefault();
                    var s = t(i.currentTarget).data("confirm");
                    o.Dialog.confirm(s, e.bind(this.model.publish, this.model))
                },
                reblog: function(t) {
                    var e = {};
                    return t.altKey && !this.model.reblogged ? (t.preventDefault(), this.is_click_trigger = !0, this.fastReblog(t)) : void(this.is_reblogged || (e = {
                        type: this.model.get("type"),
                        channel_id: this.model.get("tumblelog"),
                        reblog_id: this.model.get("id"),
                        endpoint: this.model.get("type"),
                        detached: !0,
                        reblog: !0,
                        animate_from: this.$el,
                        reblog_key: this.model.get("reblog_key"),
                        previous_content_selector: null,
                        is_recommended: this.model.get("is_recommended"),
                        reblog_source: this.model.get("reblog_source"),
                        placement_id: this.model.get("placement_id"),
                        pt: this.model.get("pt"),
                        offset: this.model.get("carousel_index")
                    }, t.preventDefault(), a.trigger("postForms:reblog", {
                        postEl: e.animate_from,
                        pt: e.pt,
                        reblogId: e.reblog_id,
                        reblogKey: e.reblog_key,
                        reblogSource: e.reblog_source,
                        carousel_index: e.offset
                    })))
                },
                fastReblog: function(t) {
                    t.stopPropagation(), t.preventDefault(), this.is_reblogged || this.model.fastReblog()
                },
                handle_follow_button: function() {
                    return this.modelForFollowButton ? (this.modelForFollowButton.save_following({
                        following: !0
                    }, {
                        source: this.getFollowReblogSource(),
                        placement_id: this.model.get("placement_id"),
                        pt: this.model.get("pt")
                    }).done(e.bind(function() {
                        this.capture_web_instream && this.capture_web_instream.track_follow(!0)
                    }, this)).fail(function() {
                        o.Dialog.alert(p.ajax_error)
                    }), !1) : (r.bool("is_dev") && console.error("Follow Parent Tumblelog Failed -- No Parent Tumblelog Model"), !1)
                },
                getFollowReblogSource: function() {
                    var e = "FOLLOW_SOURCE_REBLOG",
                        i = document.body.id;
                    return this.model.get("is_docked") ? e = "FOLLOW_SOURCE_REBLOG_DOCKED_POST" : "dashboard_posts_likes" === i ? e = "FOLLOW_SOURCE_REBLOG_LIKES" : "tagged_display" === i ? e = "FOLLOW_SOURCE_REBLOG_TAGGED" : "pagebox_layout" === i ? e = "FOLLOW_SOURCE_SEARCH_LIGHTBOX" : t("body").hasClass("tablet") && (e = "FOLLOW_SOURCE_REBLOG_TABLET"), e
                },
                messageControls: function(e) {
                    e.preventDefault();
                    var i = t(e.currentTarget),
                        o = {
                            post: this,
                            pinnedTarget: e.currentTarget,
                            blockString: i.data("block-tumblelog")
                        },
                        s = new n.MessageControlsPopover(o);
                    s.render()
                },
                ignore: function(t) {
                    if (t.preventDefault(), o.TumblelogActions) {
                        var i = "";
                        e.has(this.model.get("tumblelog-data"), "avatar_url") ? i = this.model.get("tumblelog-data").avatar_url : this.$(".post_avatar_link").attr("data-avatar-url") && (i = this.$(".post_avatar_link").attr("data-avatar-url"));
                        var s = {
                                tumblelog: this.model.get("tumblelog"),
                                post_id: this.model.get("id")
                            },
                            n = this.$(".post_control.block").data("block");
                        if (n)
                            if (n.indexOf("name:") === -1) s = {
                                tumblelog: n
                            };
                            else
                                for (var r, a = n.split(","), l = 0; l < a.length; l++)
                                    if (r = a[l].indexOf("name:"), r !== -1) {
                                        s.tumblelog = a[l].substring(5, a[l].length);
                                        break
                                    } var h = this.$(".post_control.block").data("confirm");
                        o.TumblelogActions.confirm_ignore({
                            confirm_text: h,
                            tumblelog: s.tumblelog,
                            avatar_url: i
                        })
                    }
                },
                block: function(i) {
                    var o = t(i.currentTarget).data("block");
                    if (o.length) {
                        var s;
                        o.indexOf("name:") === -1 ? (s = {
                            currentTumblelog: this.model.get("tumblelog"),
                            blockedTumblelog: o
                        }, n.Block.confirmBlock(s).then(e.bind(this._blockConfirmed, this, s))) : (s = {
                            currentTumblelog: this.model.get("tumblelog"),
                            blockedPost: this.model.get("id")
                        }, n.Block.confirmBlock(s).then(e.bind(this._anonBlockConfirmed, this, s)))
                    }
                },
                _blockConfirmed: function(t) {
                    n.Block.block(t).then(e.bind(this._afterBlock, this, t))
                },
                _anonBlockConfirmed: function(t) {
                    n.Block.block(t).then(e.bind(this._afterBlock, this, t))
                },
                _afterBlock: function(e) {
                    if (this.model.set("ignoring", !0), e.blockedTumblelog) {
                        var i = t('[data-tumblelog-name="' + e.blockedTumblelog + '"]').closest(".post");
                        i.filter('[data-tumblelog="' + e.currentTumblelog + '"]').parent().fadeOut("fast"), a.trigger("Kraken:blocks:block_added", {
                            loggingData: {
                                from: "inbox"
                            }
                        })
                    } else e.blockedPost && (this.$el.fadeOut("fast"), a.trigger("Kraken:blocks:ip_block_added", {
                        loggingData: {
                            from: "inbox"
                        }
                    }))
                },
                hidePost: function() {
                    this.$el.fadeOut("fast")
                },
                excludeFromGhostlist: function() {
                    this.$el.addClass("is_persistent")
                },
                updateParentTumblelogFollow: function(t, e) {
                    var i = this.$('.reblog_follow_button:not(".onboard")');
                    null != t._previousAttributes.following && t._previousAttributes.following !== e && (e === !1 ? i.removeClass("animating is-following") : (i.addClass("animating is-following"), setTimeout(function() {
                        i.removeClass("animating")
                    }, 300), a.trigger("post:follow:success", t), a.trigger("useraction:follow_reblog:success", this.model)))
                },
                updateReblog: function(i) {
                    this.is_reblogged = !0;
                    var o = t('<div class="post_reblog_poof post_poof"></div>'),
                        s = this.controls.reblog;
                    i && o.addClass("queue"), this.is_click_trigger ? s.append(o) : (this.$el.height() > t(window).height() && o.css("top", .5 * t(window).height()), this.$el.append(o)), this.is_click_trigger = !1, setTimeout(e.bind(function() {
                        o.fadeOut(200, e.bind(function() {
                            o.remove(), this.updateReblogControl(i)
                        }, this))
                    }, this), 300), this.capture_web_instream && this.capture_web_instream.track_fast_reblog(), a.trigger("useraction:fast_reblog:success", this.model)
                },
                updateReblogControl: function(t) {
                    o.Events.trigger("ads:client_reblog", {
                        model: this.model,
                        loggingData: this.loggingData({
                            userAction: "client_reblog"
                        })
                    }), this.controls.reblog.addClass("reblogged"), t && this.controls.reblog.addClass("queued")
                },
                onExternalFastReblog: function(t) {
                    this.model.get("id") === t.model.get("id").toString() && this.updateReblogControl(!1)
                },
                updateLikeStatus: function() {
                    var e = this.model.get("liked"),
                        i = "";
                    this.controls.like.toggleClass("liked", e);
                    var o = t('<div class="post_animated_heart post_poof' + i + '"><span class="heart_left"></span><span class="heart_right"></span></div>').toggleClass("unliked", !e);
                    if (this.is_click_trigger) this.controls.like.append(o);
                    else {
                        if (this.$el.height() > t(window).height() && o.css("top", .5 * t(window).height()), t(".post_animated_heart").length > 0) {
                            var s = .2 + .6 * Math.random();
                            o.css("left", this.$el.width() * s)
                        }
                        this.$el.append(o)
                    }
                    this.is_click_trigger = !1, setTimeout(function() {
                        o.fadeOut(200, function() {
                            o.remove()
                        })
                    }, 300), this.capture_web_instream && this.capture_web_instream.track_like(e)
                },
                updateNoteCount: function(t) {
                    var e, i = this.$(".note_link_current"),
                        o = i.first().text();
                    t ? (e = i.data("more"), i.data("more") !== o && i.data("less", o), this.$el.removeClass("no_notes")) : (e = i.data("less"), e !== o && i.data("more", o), e.length || this.$el.addClass("no_notes")), i.text(e), i.attr("title", e)
                },
                destroy: function() {
                    this.$el.fadeOut(500, e.bind(function() {
                        this.unbind(), this.$el.parent().hasClass("post_container") && this.$el.parent().remove(), a.trigger("DOMEventor:updateRect"), this.remove(), a.trigger("posts:destroyed", this.$el)
                    }, this))
                },
                failure: function(t) {
                    "" !== t.response[0] ? o.Dialog.alert(t.response[0]) : o.Dialog.alert("Unknown error occurred")
                },
                tagsDraggable: function() {
                    var t = this.$(".post_tags"),
                        e = t.find(".post_tags_inner");
                    if (t.width() < e.width()) return t.addClass("draggable"), this.tag_layout = "draggable", new o.DraggableTags({
                        el: t,
                        model: this.model
                    });
                    if (!o.Flags.bool("show_post_tags_inline") && e.height() > 4 * parseInt(t.css("line-height"), 10)) {
                        t.addClass("fade");
                        var i = new d({
                            el: t,
                            model: this.model
                        });
                        return i.render(), this.tag_layout = "expandable", i
                    }
                },
                checkForVendor: function() {
                    var t = this.$(".vendor_button"),
                        e = o.VendorButton;
                    if (t.length) return new e({
                        el: t,
                        vendorData: t.data("vendor-json"),
                        postModel: this.model
                    })
                },
                checkForCTA: function() {
                    var t = this.$(".tsp-cta");
                    return t.length ? new _({
                        el: t,
                        postModel: this.model
                    }) : null
                },
                initialize_type_photo: function() {
                    l && l.hasInstance() && (this.livePhoto = l.getInstance().create(this.$el.find("[data-live-photo]")));
                    var t = this.$("[data-carousel]");
                    t.length && (this.carousel = new h({
                        el: t,
                        model: this.model,
                        redirect_url_primary: t.data("redirect-url-primary")
                    }), this.carousel.render().$el)
                },
                initialize_type_photoset: function() {
                    this.initialize_type_photo()
                },
                initialize_type_audio: function() {
                    var t = this.$("[data-native-audio]");
                    t.length && (this.audio = new c({
                        el: t,
                        model: this.model,
                        albumArt: t.data("album-art"),
                        streamUrl: t.data("stream-url"),
                        track: t.data("track"),
                        artist: t.data("artist"),
                        noId3: t.data("no-id3"),
                        preview: !1
                    }), this.audio.render().$el)
                },
                initialize_type_video: function() {
                    setTimeout(e.bind(function() {
                        var t = this.$(".dockable_video_embed[data-can-gutter]")[0];
                        t && (this.dockable_video_embed = new g.DockableVideo({
                            model: this.model,
                            el: t
                        }))
                    }, this))
                },
                photo_reply_click: function(e) {
                    o.Lightbox.init([{
                        high_res: t(e.currentTarget).find("img").attr("src"),
                        low_res: t(e.currentTarget).find("img").attr("src"),
                        width: 500
                    }])
                },
                media_click: function() {
                    a.trigger("useraction:click:post_media", {
                        model: this.model,
                        loggingData: this.loggingData({
                            userAction: "media_click"
                        })
                    })
                },
                read_more_click: function() {
                    a.trigger("useraction:click:read_more", {
                        model: this.model,
                        loggingData: this.loggingData({
                            userAction: "read_more"
                        })
                    })
                },
                caption_click: function() {
                    a.trigger("useraction:click:post_caption", {
                        model: this.model,
                        loggingData: this.loggingData({
                            userAction: "caption"
                        })
                    })
                },
                permalink_click: function() {
                    a.trigger("useraction:click:post_permalink", {
                        model: this.model,
                        loggingData: this.loggingData({
                            userAction: "permalink"
                        })
                    })
                },
                share_click: function(i) {
                    var o = t(i.currentTarget);
                    return a.trigger("useraction:click:share", {
                        model: this.model,
                        loggingData: this.loggingData({
                            userAction: "share"
                        })
                    }), new n.Messaging.SharePost({
                        postId: o.attr("data-post-id"),
                        blogUuid: o.attr("data-tumblelog-uuid"),
                        favoritesNames: e.compact([o.attr("data-tumblelog-name"), o.attr("data-parent-tumblelog-name")]),
                        externalNetworksData: this.model.get("share_popover_data"),
                        pinnedTarget: o
                    }).render()
                },
                reblog_graph_click: function(e) {
                    var i = t(e.target).closest(".reblog-graph-control");
                    a.trigger("useraction:click:reblog-graph", {
                        model: this.model,
                        rootPostTs: i.data("root-post-ts"),
                        rootPostTumblelogKey: i.data("root-post-tumblelog-key"),
                        target: i
                    })
                },
                share_menu_email: function() {
                    a.trigger("useraction:click:share_menu:email", {
                        model: this.model,
                        loggingData: this.loggingData({
                            userAction: "share_email"
                        })
                    })
                },
                share_menu_twitter: function() {
                    a.trigger("useraction:click:share_menu:twitter", {
                        model: this.model,
                        loggingData: this.loggingData({
                            userAction: "share_twitter"
                        })
                    })
                },
                share_menu_facebook: function() {
                    a.trigger("useraction:click:share_menu:facebook", {
                        model: this.model,
                        loggingData: this.loggingData({
                            userAction: "share_facebook"
                        })
                    })
                },
                share_menu_permalink: function() {
                    a.trigger("useraction:click:share_menu:permalink", {
                        model: this.model,
                        loggingData: this.loggingData({
                            userAction: "share_permalink"
                        })
                    })
                },
                avatar_click: function() {
                    a.trigger("useraction:click:avatar", {
                        model: this.model,
                        loggingData: this.loggingData({
                            userAction: "avatar"
                        })
                    })
                },
                source_click: function() {
                    a.trigger("useraction:click:source", {
                        model: this.model,
                        loggingData: this.loggingData({
                            userAction: "source"
                        })
                    })
                },
                tag_click: function(e) {
                    if ("expandable" !== this.tag_layout) {
                        if ("draggable" === this.tag_layout && this.$(".post_tags_inner").hasClass("dragging")) return;
                        var i = t(e.target);
                        a.trigger("postchrome-interactions:tag-click", {
                            loggingData: {
                                action: "tag-click",
                                tag: i.text(),
                                hasExpandedTags: "false",
                                wasHidden: "false",
                                postId: this.model.get("id"),
                                tagIndex: i.index()
                            }
                        })
                    }
                    a.trigger("useraction:click:tag", {
                        model: this.model,
                        loggingData: this.loggingData({
                            userAction: "tags"
                        })
                    })
                },
                trending_badge_click: function(e) {
                    var i = t(e.currentTarget).data("trending-id");
                    i && a.trigger("explore-trending:badge-click", {
                        loggingData: {
                            post_id: this.model.id,
                            trending_id: i
                        }
                    })
                },
                dockedNoteOptions: function() {
                    e.extend(this.options, {
                        pinnedTarget: this.$el.find(".note_link_current"),
                        shift: {
                            x: 110,
                            y: this.options.pinnedTarget.context.offsetHeight - 30
                        },
                        isPopoverDocked: !0,
                        isFixedPosition: !0,
                        pinnedSide: "top"
                    })
                },
                notes_click: function(t) {
                    t.preventDefault(), t.stopPropagation(), a.trigger("useraction:click:notes", {
                        model: this.model,
                        loggingData: this.loggingData({
                            userAction: "notes"
                        })
                    }), this.options = {
                        pinnedTarget: this.$el.closest(".post_container").find(".post_wrapper > .post_footer .note_link_current"),
                        postModel: this.model
                    }, this.model.get("is_docked") && this.$el.closest(".docked").length && this.dockedNoteOptions(), this.showNotes(this.options)
                },
                blogname_click: function() {
                    a.trigger("useraction:click:posts", {
                        model: this.model,
                        loggingData: this.loggingData({
                            userAction: "posts"
                        })
                    })
                },
                install_click: function(e) {
                    var i = t(e.target);
                    a.trigger("useraction:click:install_click", {
                        model: this.model,
                        loggingData: this.loggingData({
                            userAction: "install_click",
                            url: i.attr("href") || ""
                        })
                    })
                },
                content_link_click: function(i) {
                    var s = i.currentTarget.href,
                        l = t(i.currentTarget),
                        h = n.Url;
                    if (l.is(".photo_exif_flipper") && this.showExif(i, l), r.bool("indash_blogs") && !l.is(".sponsored_post, .read_more")) {
                        i.preventDefault(), i.stopPropagation();
                        var c, d;
                        if (l.is("[data-peepr]")) {
                            var _ = l.data("peepr");
                            _ && (c = _.tumblelog, d = _.postId)
                        } else {
                            if (l.is(".photoset_photo") && l.data("enable-lightbox")) return void o.Lightbox.init(this.model.get("photoset_photos"), l.data("photoset-index"));
                            if (h.isTumblelogUrl(s)) {
                                var u = h.parseUrl(s),
                                    p = u.path.match(/^\/$|^\/post/i);
                                if (p) {
                                    var g = h.parseTumblelogUrl(s);
                                    g && (c = g.tumblelog_name, d = g.post_id)
                                }
                            } else if (h.isTumblelogShortUrl(s)) {
                                var m = "/" === s.substr(-1) ? s.substr(0, s.length - 1) : s,
                                    f = m.split("/"),
                                    v = f[f.length - 1],
                                    b = o.Prima.Models.Tumblelog.modelFromToken(v);
                                return void b.then(e.bind(function(t) {
                                    a.trigger("peepr-open-request", {
                                        tumblelog_name: t.get("name"),
                                        post_id: d
                                    })
                                }, this))
                            }
                        }
                        if (c) return void a.trigger("peepr-open-request", {
                            tumblelog_name: c,
                            post_id: d
                        })
                    }
                    if (!l.is(".no_pop, .photo_exif_flipper, .fan_mail_read_more, .follow")) {
                        if (window.self !== top && l.is(".post_control.reblog, .post_control.edit")) s = s.replace(/\?.*/, "");
                        else {
                            if (l.closest(".no_pop, .post_controls, #new_post, .controls, .user_menu_list, form, .flash_notification, .more_notes_link").length > 0) return;
                            if (!s || "#" === s) return
                        }
                        i.preventDefault(), i.stopPropagation(), n.Url.hasAllowedProtocol(s) && window.open(s)
                    }
                },
                showExif: function(t, i) {
                    t.preventDefault(), t.stopImmediatePropagation();
                    var o = i.parents(".flipcard");
                    o.addClass("initialized"), o.hasClass("reveal_back") || a.trigger("postchrome-interactions:show-exif-click", {
                        loggingData: {
                            action: "show-exif-click",
                            postId: this.model.get("id")
                        }
                    }), e.defer(function() {
                        o.toggleClass("reveal_back")
                    })
                },
                showNotes: function(t) {
                    n.postActivityLoader(e.bind(function(e) {
                        return new e(t).render()
                    }, this))
                }
            });
        n.Mixins.loggingData.applyTo(g.prototype), s.PostView = g
    }(window.jQuery, window._, window.Backbone, window.Tumblr, window.Tumblr), /*! scripts/posts/views/post_view_logged_out.js */
    function(t) {
        "use strict";
        var e = (Tumblr.PostView, Tumblr.Events);
        Tumblr.PostViewLoggedOut = Tumblr.PostView.extend({
            events: {
                "click .post_control.like": "send_to_signup",
                "click .post_control.reblog": "send_to_signup"
            },
            send_to_signup: function(i) {
                if (i) {
                    var o = t(i.currentTarget).hasClass("reblog") ? "reblog" : "like";
                    if (e.trigger("PostsView:send_to_signup", {
                            event: i,
                            type: o,
                            model: this.model
                        }, this), i.isPropagationStopped()) return !1;
                    i.preventDefault(), i.stopPropagation()
                }
                return window.open("/register"), !1
            }
        })
    }(jQuery), /*! scripts/posts/views/dockable_video_background_post.js */
    function(t) {
        "use strict";
        var e = Tumblr.PostView.extend({
            events: _.defaults({
                mouseenter: "__onMouseEnter",
                mouseleave: "__onMouseLeave"
            }, Tumblr.PostView.prototype.events),
            header_template: _.template('<header class="post_header post_info"><% if (isBloglessAdvertiser) { %><div class="post_info_tumblelog"><%= blog_name %></div><% } else { %><a class="tumblelog_info post_info_link" href="<%- permalink %>" data-peepr=\'{"tumblelog":"<%- blog_name %>"}\'<% if (popover_data) {%>data-tumblelog-popover=\'<%- popover_data %>\'<% } %>title="<%= blog_name %>"><div class="tumblelog_avatar" style="background-image: url(\'<%= avatar_url %>\');"></div><div class="post_info_tumblelog"><%= blog_name %></div></a><% } %><% if(reblog_infos){ %><span class="reblog_source"><span class="reblog_icon" title="<%= parentIsBloglessAdvertiser ? reblog_infos.advertiser_name : reblog_infos.name  %>"></span><% if (parentIsBloglessAdvertiser) { %><span><%= reblog_infos.advertiser_name %></span><% } else { %><a class="post_info_link" title="<%=  reblog_infos.name  %>" href="<%=  reblog_infos.url  %>"><%=  reblog_infos.name  %></a><% } %></span><% } %><a class="<% if (can_follow) { %>is-following <% } %>reblog_follow_button"href="/follow/<%= blog_name %>" title="<%= __("Follow") %>"><span class="follow-text"><%= __("Follow") %></span></a></header>'),
            initialize: function() {},
            keep_controls: [".reblog", ".like"],
            $embed: function() {
                return this._$embed || (this._$embed = this.$(".embed_iframe, .crt-video")), this._$embed
            },
            $permalink: function() {
                return !this._$permalink && this.$post && (this._$permalink = this.$post.closest(".post_full").find(".post_permalink")), this._$permalink
            },
            render: function() {
                var e = this.$post = this.$el.closest(".post"),
                    i = {},
                    o = e.find(".post_info_link:first");
                i.popover_data = function() {
                    var t = o.data("tumblelogPopover");
                    return !!t && JSON.stringify(t)
                }();
                var s = this.$post.attr("data-json");
                this.$el.attr("data-json", s), i.avatar_url = function() {
                    var t, i = e.find(".post_avatar_link"),
                        o = i.css("background-image");
                    if (o && (t = o.match(/url\(['"]?(.+?)['"]?\)/)), t) return t[1]
                }(), i.blog_name = o.text(), i.permalink = this.$post.find(".post_avatar_link").data("blog-url"), this.model.parentTumblelog ? (i.can_follow = this.model.parentTumblelog.get("following") || !this.model.parentTumblelog.get("can_be_followed"), i.reblog_infos = this.model.parentTumblelog.toJSON(), i.parentIsBloglessAdvertiser = this.model.parentTumblelog.get("is_blogless_advertiser")) : (i.can_follow = this.model.tumblelog.get("following") || this.model.get("is_mine") || !this.model.tumblelog.get("can_be_followed"), i.reblog_infos = !1), i.isBloglessAdvertiser = this.model.tumblelog.get("is_blogless_advertiser"), this.$header = t(this.header_template(i));
                var n = this.$post.find(".sponsored_wrapper");
                n.length && (n = n.clone(), t(".follow_button_wrapper", n).remove(), this.$header.append(n), n.find(".popover_sponsored").remove()), this.post_classes = function() {
                    var t = e[0].className.split(/\s+/);
                    return _.pull(t, "post_full"), t.push("post_brick"), t.push("docked_post_underlay"), t
                }(), this.$el.addClass(this.post_classes.join(" ")), this.$el.attr("data-view-exists", "true"), this.$footer = this.$post.find(".post_footer").clone(), this.$footer.find(".post_notes .popover").removeClass("nipple_on_left").addClass("nipple_on_right"), this.$footer.find(".post_control").each(_.bind(function(e, i) {
                    var o, s = t(i);
                    for (o = 0; o < this.keep_controls.length; o += 1)
                        if (s.is(this.keep_controls[o])) return;
                    s.hide()
                }, this)), this.$el.prepend(this.$header, this.$footer), Tumblr.PostView.prototype.initialize.call(this), this.disableToaster(), this.reveal();
                var r = this._$embed.attr("id");
                this.trigger("afterRender", {
                    embedID: r
                }), Tumblr.Events.trigger("post:docked:afterRender", {
                    embedID: r
                })
            },
            updateNoteCount: _.noop,
            reveal: function() {
                this.$el.velocity({
                    height: "+=89px"
                }, {
                    duration: 150
                }), this.$embed().velocity({
                    top: "+=44px"
                }, {
                    duration: 150
                })
            },
            remove: function(t) {
                var e = _.bind(function() {
                    this.$el.removeClass(this.post_classes.join(" ")), this.$footer.remove(), this.$header.remove(), this.$embed().css({
                        top: ""
                    }), this.releaseDogear(), this.enableToaster(), t && t()
                }, this);
                this.$el.velocity({
                    height: "-=89px"
                }, {
                    duration: 150,
                    complete: e
                }), this.$embed().velocity({
                    top: "-=44px"
                }, {
                    duration: 150
                })
            },
            enableToaster: function() {
                Tumblr.Events.trigger("toastr:canDisplayToggle", !1)
            },
            disableToaster: function() {
                Tumblr.Events.trigger("toastr:canDisplayToggle", !0), Tumblr.Events.trigger("nukeAllToasts")
            },
            wrangleDogear: function() {
                this.$el.hasClass("docked") && this.$permalink() && this.$permalink().css("display", "none")
            },
            releaseDogear: function() {
                this.$permalink() && this.$permalink().removeAttr("style")
            },
            __onMouseEnter: function() {
                this.wrangleDogear()
            },
            __onMouseLeave: function() {
                this.releaseDogear()
            },
            reblog: function(t) {
                t.stopPropagation(), Tumblr.PostView.prototype.reblog.apply(this, arguments)
            },
            like: function(t) {
                t.stopPropagation(), Tumblr.PostView.prototype.like.apply(this, arguments)
            },
            unlike: function(t) {
                t.stopPropagation(), Tumblr.PostView.prototype.unlike.apply(this, arguments)
            }
        });
        Tumblr.DockableVideoBackgroundPost = e
    }(jQuery), /*! scripts/posts/views/dockable_video.js */
    function(t) {
        "use strict";
        var e = "autoplaying",
            i = Backbone.View.extend({
                autoDockOnScroll: !0,
                videoState: "",
                placeholder_template: _.template('<div class="dockable_video_placeholder"><div class="dockable_video_placeholder_content"><div class="arrow_icon icon_arrow_video"></div><%= __("Put it back") %></div></div>'),
                events: {
                    "click .dock_video_button": "_dockVideoButton"
                },
                aspectRatio: null,
                initialWidth: null,
                isAnimating: !1,
                initialize: function() {
                    var e = {
                        postData: this.model.toJSON(),
                        service: this.$el.data("embed-service")
                    };
                    this.gutterViewOptions = {
                        dockLoggingData: e,
                        undockLoggingData: e,
                        onUndock: this.removeFromGutter,
                        onDock: this.moveToGutter
                    }, this.embedManager = Tumblr.Prima.embedHarness, this.gutterManager = Tumblr.Prima.gutterMediaManager, this.canResize = this.$el.is("[data-can-resize]"), this.$doc = t(document), this.docIsFullscreen = !1, this.dockablePost = new Tumblr.DockableVideoBackgroundPost({
                        el: this.el,
                        model: this.model
                    }), this.$embed().attr("id") && this.setupHarness(), this.listenTo(Tumblr.Events, "peepr:open", this.pauseVideo), this.listenTo(Tumblr.Events, "posts:destroyed", this.onPostDestroyed), this.listenTo(Tumblr.Events, "Glass:show", this.onGlassShow), this.listenTo(Tumblr.Events, "Glass:hide", this.onGlassHide), this.listenTo(Tumblr.Events, "CrtPlayer:ready", this.onCrtReady), this.listenTo(this.dockablePost, "afterRender", this.onPostDock)
                },
                onCrtReady: function(t) {
                    t.on("teardown", _.bind(function() {
                        delete this.harness
                    }, this)), this.setupHarness()
                },
                onPostDock: function(t) {
                    if (this.harness) {
                        var e = t.embedID;
                        e === this.harness.getData().embedID && this.harness.play()
                    }
                },
                setupHarness: function() {
                    if (!this.harness) {
                        this.$embed(!0);
                        var t = this.embedManager.getHarness(this.$embed().attr("id"));
                        t.then(_.bind(function(t) {
                            this.harness = t, this._setStateAndAutoDockOnScroll(this.harness.videoState), this.listenTo(this.harness, "exitViewport", this.onExitViewport), this.listenTo(this.harness, "stateChange", this.onStateChange), this._bindCrtPlayerEvents()
                        }, this))
                    }
                },
                _bindCrtPlayerEvents: function() {
                    if ("tumblr" === this.harness._data.service && this.harness.player) {
                        var t = this.harness.player;
                        this.listenTo(t.player, "pause", _.bind(function() {
                            t.get("autoplay") || (this.autoDockOnScroll = !0)
                        }, this)), this.listenTo(t.player, "muteClicked", _.bind(function() {
                            t.get("autoplay") || (this.autoDockOnScroll = !1)
                        }, this)), this.listenTo(t.player, "loop", _.bind(function() {
                            t.get("autoplay") || (this.autoDockOnScroll = !1)
                        }, this))
                    }
                },
                onExitViewport: function() {
                    if (this.autoDockOnScroll) {
                        var t = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
                        if (!this.isInGutter() && "playing" === this.videoState && !t) {
                            var e = _.clone(this.gutterViewOptions);
                            e.animation = "slide", this.gutterManager.putViewInGutter(this, e)
                        }
                    } else this.isInGutter() || this.pauseVideo()
                },
                onStateChange: function(t) {
                    this.harness && (this._setStateAndAutoDockOnScroll(t), this.isInGutter() || "playing" !== this.videoState || (this.autoDockOnScroll = !0))
                },
                $post: function() {
                    return this._$post || (this._$post = this.$el.closest(".post")), this._$post
                },
                $embed: function(t) {
                    return t !== !0 && this._$embed || (this._$embed = this.$(".embed_iframe, .crt-video")), this._$embed
                },
                _dockVideoButton: function() {
                    var t = _.clone(this.gutterViewOptions);
                    this.isAnimating === !1 && (this.isInGutter() ? (this.gutterManager.removeGutteredView(), this.autoDockOnScroll = !1) : (t.animation = "fall", this.gutterManager.putViewInGutter(this, t)))
                },
                _setStateAndAutoDockOnScroll: function(t) {
                    this.videoState = t, t === e && (this.autoDockOnScroll = !1)
                },
                makePersistent: function() {
                    this.$post().addClass("is_persistent"), this.makePersistent = _.noop
                },
                onPostDestroyed: function(t) {
                    t.hasClass("docked") && this.gutterManager.removeGutteredView()
                },
                onGlassShow: function(t) {
                    this.isInGutter() && this.$el.css("z-index", 2147483649)
                },
                onGlassHide: function() {
                    this.$el.css("z-index", "")
                },
                setReblogSource: function(t) {
                    void 0 === this.originalReblogSource && (this.originalReblogSource = this.model.get("reblog_source") || ""), t ? this.model.set("reblog_source", t) : this.model.set("reblog_source", this.originalReblogSource)
                },
                moveToGutter: function(t) {
                    var e = this.rect();
                    this.makePersistent();
                    var i = t.gutterPosition;
                    if (i.height = this.embedDimensionsForWidth(i.width).height, this.fixElInOriginalPlace({
                            animate: !1
                        }), this.$placeholder || (this.$placeholder = this.buildPlaceholder(e)), this.$el.before(this.$placeholder), this.isAnimating = !0, this.canResize) {
                        if (this.$embed().velocity(_.pick(i, "width", "height")), "fall" === t.animation) this.$el.velocity(i, {
                            complete: _.bind(function() {
                                this.dockablePost.render(), this.isAnimating = !1
                            }, this)
                        });
                        else if ("slide" === t.animation) {
                            var o = i.bottom;
                            i.bottom = -(i.height + i.bottom + 90), this.listenToOnce(this.dockablePost, "afterRender", function() {
                                this.$el.velocity({
                                    bottom: o,
                                    opacity: 1
                                }, {
                                    duration: 400,
                                    easing: "ease",
                                    complete: _.bind(function() {
                                        this.isAnimating = !1
                                    }, this)
                                })
                            }), this.$el.velocity({
                                opacity: 0
                            }, {
                                duration: 10
                            }), this.$el.velocity(i, {
                                duration: 10,
                                complete: _.bind(function() {
                                    this.dockablePost.render()
                                }, this)
                            })
                        }
                    } else delete i.height, delete i.width;
                    this.model.set("is_docked", !0), this.$el.addClass("docked"), this.setReblogSource("POST_CONTEXT_DOCKED_POST")
                },
                removeFromGutter: function() {
                    var t = this.$placeholder.get(0).getBoundingClientRect(); - t.top > t.height || t.top > window.innerHeight ? this.slideOutOfGutter() : this.translateOutOfGutter(!0)
                },
                originalEmbedLocation: function() {
                    var t;
                    t = this.$placeholder ? this.$placeholder[0].getBoundingClientRect() : this.rect();
                    var e = Tumblr.Prima.DOMEventor.rect(),
                        i = t.left - e.windowWidth / 2;
                    return {
                        left: "50%",
                        width: t.width,
                        height: this.embedDimensionsForWidth(t.width).height,
                        bottom: e.windowHeight - t.bottom,
                        translateX: i,
                        translateY: 0
                    }
                },
                translateOutOfGutter: function() {
                    this.isInGutter() && this.returnToOriginalState(!0)
                },
                returnToOriginalState: function(t) {
                    t && (this.isAnimating = !0), this.dockablePost.remove(), this.fixElInOriginalPlace({
                        animate: t,
                        complete: _.bind(function() {
                            this.$placeholder.remove(), this.$placeholder = null, this.$el.attr("style", ""), this.$el.css(this.embedDimensionsForWidth(this.initialWidth)), this.isAnimating = !1
                        }, this)
                    }), this.model.set("is_docked", !1), this.$el.removeClass("docked"), this.setReblogSource()
                },
                slideOutOfGutter: function() {
                    if (this.isInGutter()) {
                        this.isAnimating = !0;
                        var t = this.$el.outerHeight() + parseInt(this.$el.css("bottom"), 10);
                        this.$el.velocity({
                            translateY: t,
                            opacity: 0
                        }, {
                            duration: 400,
                            easing: "ease",
                            complete: _.bind(function() {
                                this.returnToOriginalState(!1)
                            }, this)
                        }), this.pauseVideo()
                    }
                },
                fixElInOriginalPlace: function(t) {
                    var e = this.originalEmbedLocation();
                    t.animate || (t.duration = 0, this.$el.css({
                        "z-index": 79,
                        position: "fixed"
                    })), this.$el.velocity(e, t), this.$embed().velocity(_.pick(e, "width", "height"), _.pick(t, "duration"))
                },
                embedDimensionsForWidth: function(t) {
                    this.aspectRatio || this.rect();
                    var e = t * this.aspectRatio;
                    return {
                        width: t,
                        height: e
                    }
                },
                rect: function() {
                    var t = this.el.getBoundingClientRect();
                    return this.aspectRatio || (this.aspectRatio = t.height / t.width), this.initialWidth || (this.initialWidth = t.width), t
                },
                pauseVideo: function() {
                    if (this.harness) this.harness.pause();
                    else if (this.$embed().is("iframe")) {
                        var t = this.$embed()[0];
                        t.src = t.src
                    } else {
                        var e = this.$embed().find("video");
                        e.length && e[0].pause()
                    }
                },
                buildPlaceholder: function(e) {
                    return e || (e = this.rect()), this.$dockable_video_placeholder = t(this.placeholder_template()), this.$dockable_video_placeholder.css({
                        width: e.width,
                        height: e.height
                    }), this.$dockable_video_placeholder.on("click", _.bind(function() {
                        this.gutterManager.removeGutteredView(), this.autoDockOnScroll = !1
                    }, this)), this.$dockable_video_placeholder
                },
                isInGutter: function() {
                    return this.gutterManager.isViewInGutter(this)
                }
            });
        Tumblr.PostView.DockableVideo = i
    }(jQuery), /*! scripts/posts/views/fan_mail_view.js */
    function(t) {
        "use strict";
        Tumblr.FanMailView = Tumblr.PostView.extend({
            events: {
                'click [data-action="ignore"]': "ignore",
                'click [data-action="message-controls"]': "messageControls",
                'click [data-action="read_more"]': "read_more",
                'click [data-action="deny"]': "deny",
                'click [data-action="reply"]': "reply"
            },
            read_more: function(t) {
                t.preventDefault(), this.$(".read_more").hide(), this.$(".message_body_truncated").hide(), this.$(".message_body").show()
            },
            reply: function(t) {
                t.preventDefault(), Tumblr.FanMail.show(t.target)
            },
            deny: function(t) {
                Tumblr.PostView.prototype.deny.call(this, t)
            }
        })
    }(jQuery), /*! scripts/posts/views/draggable_tags.js */
    function(t) {
        "use strict";
        var e = Tumblr.Events;
        Tumblr.DraggableTags = Backbone.View.extend({
            initialize: function() {
                this.dragging = !1, this.drag_x = !1, this.drag_inner = this.$(".post_tags_inner"), this.doc = t(document), this.transform = this.isTransformSupported(), this.bindEvents()
            },
            bindEvents: function() {
                this.$el.on("mousedown touchstart touchmove mouseleave mouseup touchend", ".post_tags_inner", _.bind(this.dragEvents, this)), this.$el.on("click", ".post_tag", _.bind(this.handleLinks, this))
            },
            getDimensions: function() {
                var t = this.$el.width(),
                    e = this.drag_inner.width();
                return {
                    post_width: t,
                    tag_width: e,
                    max_left: 0,
                    max_right: t - e - 10
                }
            },
            isTransformSupported: function() {
                for (var t = "transform WebkitTransform MozTransform OTransform msTransform".split(" "), e = 0; e < t.length; e++)
                    if (void 0 !== document.createElement("div").style[t[e]]) return !0;
                return !1
            },
            dragEvents: function(t) {
                switch (t.type) {
                    case "mousedown":
                    case "touchstart":
                        this.dragStart(t);
                        break;
                    case "mousemove":
                    case "touchmove":
                        this.pointer_down && this.dragMove(t);
                        break;
                    case "touchend":
                    case "mouseup":
                        this.dragEnd(t)
                }
            },
            bindDocEvents: function() {
                this.doc.on("mousemove.tagsDraggable", _.bind(this.dragEvents, this)), this.doc.on("mouseup.tagsDraggable", _.bind(this.resetDrag, this)), this.doc.on("mouseout", _.bind(this.checkMouseOut, this))
            },
            unbindDocEvents: function() {
                this.doc.off("mousemove.tagsDraggable"), this.doc.off("mouseup.tagsDraggable"), this.doc.off("mouseout")
            },
            dragStart: function(t) {
                t.preventDefault(), this.dragging || this.pointer_down || (this.pointer_down = !0, this.start_x = this.drag_inner.position().left, this.page_x = "pageX" in t ? t.pageX : t.originalEvent.touches[0].pageX, this.bindDocEvents())
            },
            dragMove: function(t) {
                t.preventDefault(), t.stopPropagation(), this.drag_inner[0].classList.add("dragging"), this.dragging = !0;
                var e = ("clientX" in t ? t.clientX : t.originalEvent.touches[0].clientX) - this.page_x;
                this.drag_x = e + this.start_x, this.dragSet(this.drag_x)
            },
            dragSet: function(t) {
                this.transform ? this.drag_inner.css("transform", "translate(" + t + "px, 0)") : this.drag_inner.css("left", t)
            },
            checkMouseOut: function(t) {
                var e = t.relatedTarget || t.toElement;
                e && "HTML" != e.nodeName || this.dragEnd(t)
            },
            handleLinks: function(e) {
                if (e.preventDefault(), this.dragging) e.stopPropagation();
                else {
                    var i = t(e.currentTarget),
                        o = i.attr("href");
                    if (Tumblr.Flags.bool("post_tag_links_to_search")) return !0;
                    Tumblr.Prima.Url.hasAllowedProtocol(o) && window.open(o, "_blank")
                }
            },
            resetDragPosition: function() {
                this.d || (this.d = this.getDimensions()), this.drag_x > this.d.max_left ? this.dragSet(this.d.max_left) : this.drag_x < this.d.max_right && this.dragSet(this.d.max_right)
            },
            dragEnd: function(t) {
                t.preventDefault(), t.stopPropagation(), this.dragging && e.trigger("postchrome-interactions:tag-drag", {
                    loggingData: {
                        action: "tag-drag",
                        postID: this.model.get("id")
                    }
                });
                var i = _.bind(this.resetDrag, this);
                _.delay(i, 100)
            },
            resetDrag: function() {
                (this.dragging || this.pointer_down) && (this.dragging = !1, this.pointer_down = !1, this.drag_inner[0].classList.remove("dragging"), this.resetDragPosition(), this.unbindDocEvents())
            }
        })
    }(jQuery), /*! scripts/posts/views/dashboard_blog_card.js */
    function(t) {
        "use strict";
        var e = Tumblr.Search.indashTumblelogCompactView.extend({
                defaults: _.extend({}, Tumblr.Search.indashTumblelogCompactView.prototype.defaults, {
                    follow_data: {
                        source: "FOLLOW_SOURCE_INDASH_RECOMMENDED_BLOG"
                    },
                    unfollow_data: {
                        source: "UNFOLLOW_SOURCE_INDASH_RECOMMENDED_BLOG"
                    }
                }),
                events: function() {
                    return _.extend({}, Tumblr.Search.indashTumblelogCompactView.prototype.events.apply(this, arguments), {
                        "click .info_wrapper": "__open_peepr"
                    })
                },
                __open_peepr: function() {
                    Tumblr.Events.trigger("peepr-open-request", {
                        tumblelog_name: this.model.get("name")
                    })
                }
            }),
            i = Tumblr.IndashBlog.HeaderCompact.extend({
                className: "indash_header_compact indash_blog",
                events: Tumblr.IndashBlog.HeaderCompact.prototype.events,
                defaults: _.extend({}, Tumblr.IndashBlog.HeaderCompact.prototype.defaults, {
                    include_info_popover: !1,
                    template_data: {
                        show_navigation: !0,
                        show_user_controls: !1,
                        show_share_controls: !1,
                        show_follow_button: !0,
                        show_dismiss_controls: !0,
                        popover: !1
                    },
                    follow_data: {
                        source: "FOLLOW_SOURCE_INDASH_RECOMMENDED_BLOG"
                    },
                    unfollow_data: {
                        source: "UNFOLLOW_SOURCE_INDASH_RECOMMENDED_BLOG"
                    },
                    aspect_ratio: 9 / 16,
                    width: 540
                }),
                render: function() {
                    Tumblr.IndashBlog.HeaderCompact.prototype.render.apply(this, arguments);
                    var e = this.options.width;
                    this.$(".header_image_wrapper, .header_image").height(e * this.options.aspect_ratio);
                    var i = t('<a href="/explore" class="post_header_discover_button"><i class="icon_explore"></i></a>'),
                        o = this.$(".follow, .unfollow"),
                        s = this.$(".navigation_inner .post_dismiss");
                    return s.before(i), o.insertBefore(i), this._setup_posts(), this
                },
                _setup_posts: function() {
                    this.highlighted_posts = new Tumblr.TumblelogPopover.Posts({
                        model: this.model,
                        on_bottom: !0,
                        parent: this.$el.find(".indash_header_wrapper")
                    })
                }
            });
        i.attach_to_el = function(o) {
            var s = t(o.$el),
                n = o.blogs;
            if (!n.length) return n;
            for (var r = "compact" === o.blog_card_type, a = r ? e : i, l = t(), h = 0; h < n.length; h++) {
                var c = new a({
                    model: n[h],
                    include_posts: !0,
                    width: r ? 265 : 540,
                    aspect_ratio: r ? .5 : 9 / 16
                }).render();
                t.merge(l, t('<div class="blog-card-container"></div>').append(c.$el))
            }
            l.appendTo(s)
        }, Tumblr.Events.on("component:DashboardBlogCard:attach_to_el", i.attach_to_el), Tumblr.DashboardBlogCard = i
    }(jQuery), /*! scripts/posts/views/vendor_button.js */
    function(t) {
        "use strict";
        Tumblr.VendorButton = Backbone.View.extend({
            events: {
                "click .dropdown-area": "onDropDownClick",
                "click .button-area": "onLinkClick"
            },
            initialize: function(t) {
                t || (t = {}), this.postModel = t.postModel || {}, this.listing_id = t.vendorData.listing_id, this.price = t.vendorData.price, this.state = t.vendorData.state, this.name = t.vendorData.name, this.vendorPopover = new Tumblr.VendorPopover({
                    glassless: !0,
                    el: this.$(".dropdown-area"),
                    listing_id: this.listing_id
                }), this.listenTo(this.vendorPopover, "emailClick", _.bind(function(t) {
                    this.triggerEvent("emailClick")
                }, this)), this.triggerEvent("serve")
            },
            onDropDownClick: function(t) {
                this.vendorPopover.show(), this.triggerEvent("dropdownOpen")
            },
            onLinkClick: function(t) {
                this.triggerEvent("buttonClick")
            },
            triggerEvent: function(t) {
                Tumblr.Events.trigger("VendorButton:" + t, {
                    loggingData: {
                        listing_id: this.listing_id,
                        price: this.price,
                        state: this.state,
                        partner: this.name,
                        postData: this.postModel.toJSON(),
                        userAction: "action_click"
                    }
                })
            }
        })
    }(jQuery), /*! scripts/posts/views/vendor_popover.js */
    function(t) {
        "use strict";
        Tumblr.VendorPopover = Tumblr.Popover.extend({
            hiding: !1,
            popoverTimer: null,
            hideButtonTimer: null,
            hidePopoverTimeout: 2e3,
            hideButtonTimeout: 2150,
            events: {
                "click .email-vendor-listing": "onEmailClick"
            },
            initialize: function(t) {
                this.options = t || {}, _.extend(this.options, {
                    on_hide: this.onHide
                }), Tumblr.Popover.prototype.initialize.apply(this, arguments), this.$popoverEl = this.$(".popover_vendor")
            },
            onEmailClick: function(e) {
                e.stopPropagation(), t.ajax({
                    method: "POST",
                    url: "/svc/vendor/buy_it_later",
                    data: {
                        item_id: this.options.listing_id
                    },
                    withFormKey: !0,
                    success: function() {},
                    failure: function() {}
                }), this.trigger("emailClick"), this.tellOfGreatEmailingSuccess()
            },
            onHide: function() {
                this.hiding && (clearTimeout(this.popoverTimer), clearTimeout(this.hideButtonTimer), this.hidePopover(), this.hideDropdown())
            },
            tellOfGreatEmailingSuccess: function() {
                this.hiding = !0, this.$popoverEl.addClass("success"), this.popoverTimer = setTimeout(_.bind(function() {
                    this.hidePopover()
                }, this), this.hidePopoverTimeout), this.hideButtonTimer = setTimeout(_.bind(function() {
                    this.hideDropdown()
                }, this), this.hideButtonTimeout)
            },
            hidePopover: function() {
                this.$popoverEl.addClass("fade-out")
            },
            hideDropdown: function() {
                this.$popoverEl.remove(), this.$el.addClass("slide-out"), this.hiding = !1, this.hide()
            }
        })
    }(jQuery), /*! scripts/follow_list.js */
    function(t, e) {
        function i() {
            return window.location.pathname.split("/")[1]
        }
        var o = window.l10n_str || {},
            s = Backbone.View.extend({
                tagName: "ul",
                events: {
                    "click .show_more": "show_more"
                },
                initialize: function(t) {
                    this.template || (this.template = t.template), this.subviews = [], this.data = this.$el.data("json") || {}, this.tumblelogs = this.data.tumblelogs || [], this.context = this.data.context || "", this.enable_refresh = !1, this.collection_url = "", this.exclude_following = !1, this.minimum_list_length = null, this.visible_list_length = 4, this.viewed = [], this.log_impressions = !1, this.is_popover_showing = !1, this.set_context_props();
                    var e = this,
                        i = Backbone.Collection.extend({
                            url: this.collection_url,
                            model: Tumblr.Prima.Models.Tumblelog,
                            parse: function(t) {
                                var i = t.response.blogs;
                                return e.exclude_following && (i = _.filter(i, {
                                    following: !1
                                })), i
                            }
                        });
                    this.collection = new i, this.listenTo(this.collection, "add", this.add_tumblelog), this.listenTo(this.collection, "remove", this.remove_tumblelog), this.listenTo(this.collection, "change:following", this.on_follow), this.listenTo(Tumblr.Events, "TumblelogPopover:show", this.on_popover_show), this.listenTo(Tumblr.Events, "TumblelogPopover:hide", this.on_popover_hide), this.log_impressions && (this.listenTo(this.collection, "add", this.log_impression), this.listenTo(this.collection, "remove", this.log_impression)), this.$el.attr("data-json", null)
                },
                before_render: function() {
                    this.$el.addClass("is_rendering")
                },
                render: function() {
                    this.before_render();
                    var t = _.template(this.template);
                    return this.$el.html(t({
                        heading: this.data.heading || "",
                        context: this.data.context || ""
                    })), this.collection.add(this.tumblelogs), this.add_footer(), this.after_render(), this
                },
                after_render: function() {
                    setTimeout(_.bind(function() {
                        this.$el.removeClass("is_rendering")
                    }, this), 0)
                },
                set_context_props: function() {
                    "recommended_tumblelogs" === this.context ? (this.collection_url = "/svc/search/get_recommended_tumblelogs", this.enable_refresh = !0, this.has_dismiss = !0, this.auto_refresh = !0, this.exclude_following = !0, this.minimum_list_length = 6, this.log_impressions = !0) : "trending_tumblelogs" === this.context && (this.collection_url = "/svc/search/get_trending_tumblelogs", this.enable_refresh = !0, this.has_dismiss = !0, this.auto_refresh = !0, this.exclude_following = !0, this.minimum_list_length = 6, this.log_impressions = !1)
                },
                on_popover_show: function() {
                    this.is_popover_showing = !0
                },
                on_popover_hide: function() {
                    this.is_popover_showing = !1
                },
                add_footer: function() {
                    var e = _.template(t("#follow_list_" + this.data.context + "_small_links_template").html()),
                        i = e({
                            user_is_editor: this.data.user_is_editor || !1
                        });
                    this.$el.append(i)
                },
                on_follow: function(t, e) {
                    var i = _.find(this.subviews, {
                        model: t
                    });
                    return this.enable_refresh ? (e ? this.collection.length > this.visible_list_length ? this.is_popover_showing ? (this.listenToOnce(Tumblr.Events, "TumblelogPopover:hide", function() {
                        this.collection.remove(t), this.animate(i, !1)
                    }), i.$el.find(".follow").addClass("follow_poof"), i.$el.addClass("flash"), i.$el.find(".dismiss").addClass("hide")) : (this.collection.remove(t), this.animate(i, !0)) : i.render() : (this.stopListening(Tumblr.Events, "TumblelogPopover:hide"), i.render(), i.$el.removeClass("flash")), void i.disable_dismiss()) : void i.render()
                },
                add_tumblelog: function(t) {
                    var e = new n({
                        model: t,
                        collection: this.collection,
                        params: {
                            follow_source: this.data.follow_source,
                            has_dismiss: this.has_dismiss
                        }
                    });
                    this.subviews.push(e), !this.auto_refresh && this.visible_list_length && this.subviews.length > this.visible_list_length && e.hide(), this.$el.append(e.el), e.render()
                },
                remove_tumblelog: function(t) {
                    this.subviews = _.filter(this.subviews, function(e) {
                        return e.model !== t
                    });
                    var e = this.minimum_list_length - this.collection.length;
                    e > 0 && this.fetch_tumblelogs(e)
                },
                fetch_tumblelogs: function(t) {
                    this.collection.fetch({
                        data: {
                            limit: t,
                            page: i(),
                            include_posts: !1
                        },
                        withFormKey: !0,
                        remove: !1
                    })
                },
                animate: function(e, i) {
                    e.$el.find(".follow").addClass("follow_poof"), i && e.$el.addClass("flash").delay(200), e.$el.animate({
                        opacity: 0
                    }, 100).slideUp(300, function() {
                        t(this).remove()
                    })
                },
                show_more: function(e) {
                    return this.$(".item.last").removeClass("last"), this.$(".item").last().addClass("after_showing"), this.$(".item.hidden").removeClass("hidden"), t(e.currentTarget).hide(), !1
                },
                log_impression: function() {
                    _.forEach(this.collection.slice(0, this.visible_list_length), function(t) {
                        var e = _.find(this.subviews, {
                            model: t
                        });
                        if (!_.isEmpty(e) && _.indexOf(this.viewed, t) === -1) {
                            this.viewed.push(t);
                            var o = (Tumblr.getRealNow || _.now)();
                            Tumblr.Events.trigger("Capture:push", "recommended_blog_impressions", "impressions", {
                                tumblelog_name: t.get("name"),
                                algorithm_id: t.get("algorithm_id") || "",
                                page: i(),
                                ts: Math.floor(o / 1e3),
                                position: e.$el.offset(),
                                format: "RECOMMEND_FORMAT_DASH_SIDEBAR"
                            })
                        }
                    }, this)
                }
            }),
            n = Backbone.View.extend({
                tagName: "li",
                className: "item",
                events: {
                    "click .follow": "follow",
                    "click .icon_close": "dismiss"
                },
                initialize: function(t) {
                    this.params = t.params || {}, this.$button = this.$(".follow")
                },
                render: function() {
                    var e = _.extend(this.model.toJSON(), this.params);
                    e.following = this.model.get("following") || this.model.get("is_you");
                    var i = _.template(t("#follow_list_item_template").html());
                    return this.$el.html(i(e)), this.$button.toggle(!this.model.get("following")), this
                },
                follow: function() {
                    return this.model.save_following({
                        following: !0
                    }, {
                        source: this.params.follow_source
                    }).fail(function() {
                        Tumblr.Dialog.alert(o.ajax_error)
                    }), !1
                },
                hide: function() {
                    this.$el.addClass("hidden")
                },
                dismiss: function() {
                    this.collection.remove(this.model), this.$el.animate({
                        left: -245
                    }, 250).slideUp(300, function() {
                        t(this).remove()
                    }), t.ajax({
                        method: "POST",
                        url: "/svc/search/log_dismissal",
                        data: {
                            tumblelog_name: this.model.get("name"),
                            page: i()
                        },
                        withFormKey: !0
                    })
                },
                disable_dismiss: function() {
                    this.$el.find(".dismiss").remove()
                }
            });
        e.FollowList = s, e.FollowListItem = n
    }(jQuery, Tumblr), jQuery(document).ready(function(t) {
        "use strict";
        if (t("#tagged_actions_display").hasClass("is_featured_tag")) {
            var e = t.trim(t("#follow_list_template").html());
            t(".follow_list").each(function(t, i) {
                new Tumblr.FollowList({
                    el: i,
                    template: e
                }).render()
            })
        }
    }),
    function(t, e, i, o) {
        "use strict";

        function s() {
            var t = arguments;
            return function() {
                for (var e = 0, i = t.length; e < i && t[e].apply(this, arguments) !== !1; e++);
            }
        }

        function n() {
            return this.isRenderable()
        }

        function r(t) {
            return function(e) {
                return !(null == e._previousAttributes[t] || e._previousAttributes[t] === e.attributes[t])
            }
        }

        function a(t) {
            var i = /\d[\d\s\.,]*/;
            return function(o, s) {
                var n = this[t],
                    r = parseInt(n.data("count"), 10) + (s ? 1 : -1);
                n.data("count", r);
                var a = n.text(),
                    h = e.trim(a.match(i));
                h && n.text(a.replace(h, l(this.locale, r)))
            }
        }
        var l = function() {
                try {
                    var t = 0;
                    return t.toLocaleString("i"),
                        function(t, e) {
                            return e.toLocaleString()
                        }
                } catch (e) {
                    return function(t, e) {
                        return e.toLocaleString(t)
                    }
                }
            }(),
            h = i.View.extend({
                initialize: function(t) {
                    this._renderable = !1, this.locale = t.locale, this.allPosts = t.allPosts, this.allTumblelogs = t.allTumblelogs, this.listenTo(this.allTumblelogs, "change:following", this.changeFollowingLabel), this.listenTo(this.allPosts, "change:liked", this.changeLikesLabel)
                },
                changeFollowingLabel: s(n, r("following"), a("$followingLabel")),
                changeLikesLabel: s(n, r("liked"), a("$likesLabel")),
                isRenderable: function() {
                    return !!this._renderable
                },
                render: function() {
                    return this.$likesLabel = this.$(".likes [data-count]"), this.$followingLabel = this.$(".following [data-count]"), this._renderable = 0 !== this.$likesLabel.length && 0 !== this.$followingLabel, this
                }
            }),
            c = "string" == typeof language_for_tinymce ? language_for_tinymce : "en",
            d = new h({
                el: "#right_column",
                allPosts: Tumblr.Posts,
                allTumblelogs: Tumblr.Prima.Models.Tumblelog.collection,
                locale: c
            }).render();
        o.DashboardControls = h, o.dashboardControls = d
    }(_, jQuery, Backbone, Tumblr), /*! scripts/jquery.sparkline.min.js */
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        "use strict";
        var e, i, o, s, n, r, a, l, h, c, d, _, u, p, g, m, f, v, b, k, w, y, T, x, $, C, E, P, D, S, M, B, A = {},
            z = 0;
        e = function() {
                return {
                    common: {
                        type: "line",
                        lineColor: "#00f",
                        fillColor: "#cdf",
                        defaultPixelsPerValue: 3,
                        width: "auto",
                        height: "auto",
                        composite: !1,
                        tagValuesAttribute: "values",
                        tagOptionsPrefix: "spark",
                        enableTagOptions: !1,
                        enableHighlight: !0,
                        highlightLighten: 1.4,
                        tooltipSkipNull: !0,
                        tooltipPrefix: "",
                        tooltipSuffix: "",
                        disableHiddenCheck: !1,
                        numberFormatter: !1,
                        numberDigitGroupCount: 3,
                        numberDigitGroupSep: ",",
                        numberDecimalMark: ".",
                        disableTooltips: !1,
                        disableInteraction: !1
                    },
                    line: {
                        spotColor: "#f80",
                        highlightSpotColor: "#5f5",
                        highlightLineColor: "#f22",
                        spotRadius: 1.5,
                        minSpotColor: "#f80",
                        maxSpotColor: "#f80",
                        lineWidth: 1,
                        normalRangeMin: void 0,
                        normalRangeMax: void 0,
                        normalRangeColor: "#ccc",
                        drawNormalOnTop: !1,
                        chartRangeMin: void 0,
                        chartRangeMax: void 0,
                        chartRangeMinX: void 0,
                        chartRangeMaxX: void 0,
                        tooltipFormat: new o('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')
                    },
                    bar: {
                        barColor: "#3366cc",
                        negBarColor: "#f44",
                        stackedBarColor: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
                        zeroColor: void 0,
                        nullColor: void 0,
                        zeroAxis: !0,
                        barWidth: 4,
                        barSpacing: 1,
                        chartRangeMax: void 0,
                        chartRangeMin: void 0,
                        chartRangeClip: !1,
                        colorMap: void 0,
                        tooltipFormat: new o('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')
                    },
                    tristate: {
                        barWidth: 4,
                        barSpacing: 1,
                        posBarColor: "#6f6",
                        negBarColor: "#f44",
                        zeroBarColor: "#999",
                        colorMap: {},
                        tooltipFormat: new o('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),
                        tooltipValueLookups: {
                            map: {
                                "-1": "Loss",
                                0: "Draw",
                                1: "Win"
                            }
                        }
                    },
                    discrete: {
                        lineHeight: "auto",
                        thresholdColor: void 0,
                        thresholdValue: 0,
                        chartRangeMax: void 0,
                        chartRangeMin: void 0,
                        chartRangeClip: !1,
                        tooltipFormat: new o("{{prefix}}{{value}}{{suffix}}")
                    },
                    bullet: {
                        targetColor: "#f33",
                        targetWidth: 3,
                        performanceColor: "#33f",
                        rangeColors: ["#d3dafe", "#a8b6ff", "#7f94ff"],
                        base: void 0,
                        tooltipFormat: new o("{{fieldkey:fields}} - {{value}}"),
                        tooltipValueLookups: {
                            fields: {
                                r: "Range",
                                p: "Performance",
                                t: "Target"
                            }
                        }
                    },
                    pie: {
                        offset: 0,
                        sliceColors: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
                        borderWidth: 0,
                        borderColor: "#000",
                        tooltipFormat: new o('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')
                    },
                    box: {
                        raw: !1,
                        boxLineColor: "#000",
                        boxFillColor: "#cdf",
                        whiskerColor: "#000",
                        outlierLineColor: "#333",
                        outlierFillColor: "#fff",
                        medianColor: "#f00",
                        showOutliers: !0,
                        outlierIQR: 1.5,
                        spotRadius: 1.5,
                        target: void 0,
                        targetColor: "#4a2",
                        chartRangeMax: void 0,
                        chartRangeMin: void 0,
                        tooltipFormat: new o("{{field:fields}}: {{value}}"),
                        tooltipFormatFieldlistKey: "field",
                        tooltipValueLookups: {
                            fields: {
                                lq: "Lower Quartile",
                                med: "Median",
                                uq: "Upper Quartile",
                                lo: "Left Outlier",
                                ro: "Right Outlier",
                                lw: "Left Whisker",
                                rw: "Right Whisker"
                            }
                        }
                    }
                }
            }, C = '.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}', i = function() {
                var e, i;
                return e = function() {
                    this.init.apply(this, arguments)
                }, arguments.length > 1 ? (arguments[0] ? (e.prototype = t.extend(new arguments[0], arguments[arguments.length - 1]), e._super = arguments[0].prototype) : e.prototype = arguments[arguments.length - 1], arguments.length > 2 && (i = Array.prototype.slice.call(arguments, 1, -1), i.unshift(e.prototype), t.extend.apply(t, i))) : e.prototype = arguments[0], e.prototype.cls = e, e
            }, t.SPFormatClass = o = i({
                fre: /\{\{([\w.]+?)(:(.+?))?\}\}/g,
                precre: /(\w+)\.(\d+)/,
                init: function(t, e) {
                    this.format = t, this.fclass = e
                },
                render: function(t, e, i) {
                    var o, s, n, r, a, l = this,
                        c = t;
                    return this.format.replace(this.fre, function() {
                        var t;
                        return s = arguments[1], n = arguments[3], o = l.precre.exec(s), o ? (a = o[2], s = o[1]) : a = !1, r = c[s], void 0 === r ? "" : n && e && e[n] ? (t = e[n], t.get ? e[n].get(r) || r : e[n][r] || r) : (h(r) && (r = i.get("numberFormatter") ? i.get("numberFormatter")(r) : p(r, a, i.get("numberDigitGroupCount"), i.get("numberDigitGroupSep"), i.get("numberDecimalMark"))), r)
                    })
                }
            }), t.spformat = function(t, e) {
                return new o(t, e)
            }, s = function(t, e, i) {
                return t < e ? e : t > i ? i : t
            }, n = function(t, e) {
                var i;
                return 2 === e ? (i = Math.floor(t.length / 2), t.length % 2 ? t[i] : (t[i - 1] + t[i]) / 2) : t.length % 2 ? (i = (t.length * e + e) / 4, i % 1 ? (t[Math.floor(i)] + t[Math.floor(i) - 1]) / 2 : t[i - 1]) : (i = (t.length * e + 2) / 4, i % 1 ? (t[Math.floor(i)] + t[Math.floor(i) - 1]) / 2 : t[i - 1])
            }, r = function(t) {
                var e;
                switch (t) {
                    case "undefined":
                        t = void 0;
                        break;
                    case "null":
                        t = null;
                        break;
                    case "true":
                        t = !0;
                        break;
                    case "false":
                        t = !1;
                        break;
                    default:
                        e = parseFloat(t), t == e && (t = e)
                }
                return t
            }, a = function(t) {
                var e, i = [];
                for (e = t.length; e--;) i[e] = r(t[e]);
                return i
            }, l = function(t, e) {
                var i, o, s = [];
                for (i = 0, o = t.length; i < o; i++) t[i] !== e && s.push(t[i]);
                return s
            }, h = function(t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            }, p = function(e, i, o, s, n) {
                var r, a;
                for (e = (i === !1 ? parseFloat(e).toString() : e.toFixed(i)).split(""), r = (r = t.inArray(".", e)) < 0 ? e.length : r, r < e.length && (e[r] = n), a = r - o; a > 0; a -= o) e.splice(a, 0, s);
                return e.join("")
            }, c = function(t, e, i) {
                var o;
                for (o = e.length; o--;)
                    if ((!i || null !== e[o]) && e[o] !== t) return !1;
                return !0
            }, d = function(t) {
                var e, i = 0;
                for (e = t.length; e--;) i += "number" == typeof t[e] ? t[e] : 0;
                return i
            }, u = function(e) {
                return t.isArray(e) ? e : [e]
            }, _ = function(t) {
                var e;
                document.createStyleSheet ? document.createStyleSheet().cssText = t : (e = document.createElement("style"), e.type = "text/css", document.getElementsByTagName("head")[0].appendChild(e), e["string" == typeof document.body.style.WebkitAppearance ? "innerText" : "innerHTML"] = t)
            }, t.fn.simpledraw = function(e, i, o, s) {
                var n, r;
                if (o && (n = this.data("_jqs_vcanvas"))) return n;
                if (void 0 === e && (e = t(this).innerWidth()), void 0 === i && (i = t(this).innerHeight()), t.fn.sparkline.hasCanvas) n = new S(e, i, this, s);
                else {
                    if (!t.fn.sparkline.hasVML) return !1;
                    n = new M(e, i, this)
                }
                return r = t(this).data("_jqs_mhandler"), r && r.registerCanvas(n), n
            }, t.fn.cleardraw = function() {
                var t = this.data("_jqs_vcanvas");
                t && t.reset()
            }, t.RangeMapClass = g = i({
                init: function(t) {
                    var e, i, o = [];
                    for (e in t) t.hasOwnProperty(e) && "string" == typeof e && e.indexOf(":") > -1 && (i = e.split(":"), i[0] = 0 === i[0].length ? -(1 / 0) : parseFloat(i[0]), i[1] = 0 === i[1].length ? 1 / 0 : parseFloat(i[1]), i[2] = t[e], o.push(i));
                    this.map = t, this.rangelist = o || !1
                },
                get: function(t) {
                    var e, i, o, s = this.rangelist;
                    if (void 0 !== (o = this.map[t])) return o;
                    if (s)
                        for (e = s.length; e--;)
                            if (i = s[e], i[0] <= t && i[1] >= t) return i[2]
                }
            }), t.range_map = function(t) {
                return new g(t)
            }, m = i({
                init: function(e, i) {
                    var o = t(e);
                    this.$el = o, this.options = i, this.currentPageX = 0, this.currentPageY = 0, this.el = e, this.splist = [], this.tooltip = null, this.over = !1, this.displayTooltips = !i.get("disableTooltips"), this.highlightEnabled = !i.get("disableHighlight")
                },
                registerSparkline: function(t) {
                    this.splist.push(t), this.over && this.updateDisplay()
                },
                registerCanvas: function(e) {
                    var i = t(e.canvas);
                    this.canvas = e, this.$canvas = i, i.mouseenter(t.proxy(this.mouseenter, this)), i.mouseleave(t.proxy(this.mouseleave, this)), i.click(t.proxy(this.mouseclick, this))
                },
                reset: function(t) {
                    this.splist = [], this.tooltip && t && (this.tooltip.remove(), this.tooltip = void 0)
                },
                mouseclick: function(e) {
                    var i = t.Event("sparklineClick");
                    i.originalEvent = e, i.sparklines = this.splist, this.$el.trigger(i)
                },
                mouseenter: function(e) {
                    t(document.body).unbind("mousemove.jqs"), t(document.body).bind("mousemove.jqs", t.proxy(this.mousemove, this)), this.over = !0, this.currentPageX = e.pageX, this.currentPageY = e.pageY, this.currentEl = e.target, !this.tooltip && this.displayTooltips && (this.tooltip = new f(this.options), this.tooltip.updatePosition(e.pageX, e.pageY)), this.updateDisplay()
                },
                mouseleave: function() {
                    t(document.body).unbind("mousemove.jqs");
                    var e, i, o = this.splist,
                        s = o.length,
                        n = !1;
                    for (this.over = !1, this.currentEl = null, this.tooltip && (this.tooltip.remove(), this.tooltip = null), i = 0; i < s; i++) e = o[i], e.clearRegionHighlight() && (n = !0);
                    n && this.canvas.render()
                },
                mousemove: function(t) {
                    this.currentPageX = t.pageX, this.currentPageY = t.pageY, this.currentEl = t.target, this.tooltip && this.tooltip.updatePosition(t.pageX, t.pageY), this.updateDisplay()
                },
                updateDisplay: function() {
                    var e, i, o, s, n, r = this.splist,
                        a = r.length,
                        l = !1,
                        h = this.$canvas.offset(),
                        c = this.currentPageX - h.left,
                        d = this.currentPageY - h.top;
                    if (this.over) {
                        for (o = 0; o < a; o++) i = r[o], s = i.setRegionHighlight(this.currentEl, c, d), s && (l = !0);
                        if (l) {
                            if (n = t.Event("sparklineRegionChange"), n.sparklines = this.splist, this.$el.trigger(n), this.tooltip) {
                                for (e = "", o = 0; o < a; o++) i = r[o], e += i.getCurrentRegionTooltip();
                                this.tooltip.setContent(e)
                            }
                            this.disableHighlight || this.canvas.render()
                        }
                        null === s && this.mouseleave()
                    }
                }
            }), f = i({
                sizeStyle: "position: static !important;display: block !important;visibility: hidden !important;float: left !important;",
                init: function(e) {
                    var i, o = e.get("tooltipClassname", "jqstooltip"),
                        s = this.sizeStyle;
                    this.container = e.get("tooltipContainer") || document.body, this.tooltipOffsetX = e.get("tooltipOffsetX", 10), this.tooltipOffsetY = e.get("tooltipOffsetY", 12), t("#jqssizetip").remove(), t("#jqstooltip").remove(), this.sizetip = t("<div/>", {
                        id: "jqssizetip",
                        style: s,
                        "class": o
                    }), this.tooltip = t("<div/>", {
                        id: "jqstooltip",
                        "class": o
                    }).appendTo(this.container), i = this.tooltip.offset(), this.offsetLeft = i.left, this.offsetTop = i.top, this.hidden = !0, t(window).unbind("resize.jqs scroll.jqs"), t(window).bind("resize.jqs scroll.jqs", t.proxy(this.updateWindowDims, this)), this.updateWindowDims()
                },
                updateWindowDims: function() {
                    this.scrollTop = t(window).scrollTop(), this.scrollLeft = t(window).scrollLeft(), this.scrollRight = this.scrollLeft + t(window).width(), this.updatePosition()
                },
                getSize: function(t) {
                    this.sizetip.html(t).appendTo(this.container), this.width = this.sizetip.width() + 1, this.height = this.sizetip.height(), this.sizetip.remove()
                },
                setContent: function(t) {
                    return t ? (this.getSize(t), this.tooltip.html(t).css({
                        width: this.width,
                        height: this.height,
                        visibility: "visible"
                    }), this.hidden && (this.hidden = !1, this.updatePosition()), void 0) : (this.tooltip.css("visibility", "hidden"), void(this.hidden = !0))
                },
                updatePosition: function(t, e) {
                    if (void 0 === t) {
                        if (void 0 === this.mousex) return;
                        t = this.mousex - this.offsetLeft, e = this.mousey - this.offsetTop
                    } else this.mousex = t -= this.offsetLeft, this.mousey = e -= this.offsetTop;
                    this.height && this.width && !this.hidden && (e -= this.height + this.tooltipOffsetY, t += this.tooltipOffsetX, e < this.scrollTop && (e = this.scrollTop), t < this.scrollLeft ? t = this.scrollLeft : t + this.width > this.scrollRight && (t = this.scrollRight - this.width), this.tooltip.css({
                        left: t,
                        top: e
                    }))
                },
                remove: function() {
                    this.tooltip.remove(), this.sizetip.remove(), this.sizetip = this.tooltip = void 0, t(window).unbind("resize.jqs scroll.jqs")
                }
            }), E = function() {
                _(C)
            }, t(E), B = [], t.fn.sparkline = function(e, i) {
                return this.each(function() {
                    var o, s, n = new t.fn.sparkline.options(this, i),
                        r = t(this);
                    if (o = function() {
                            var i, o, s, a, l, h, c;
                            return "html" === e || void 0 === e ? (c = this.getAttribute(n.get("tagValuesAttribute")), void 0 !== c && null !== c || (c = r.html()), i = c.replace(/(^\s*<!--)|(-->\s*$)|\s+/g, "").split(",")) : i = e, o = "auto" === n.get("width") ? i.length * n.get("defaultPixelsPerValue") : n.get("width"), "auto" === n.get("height") ? n.get("composite") && t.data(this, "_jqs_vcanvas") || (a = document.createElement("span"), a.innerHTML = "a", r.html(a), s = t(a).innerHeight() || t(a).height(), t(a).remove(), a = null) : s = n.get("height"), n.get("disableInteraction") ? l = !1 : (l = t.data(this, "_jqs_mhandler"), l ? n.get("composite") || l.reset() : (l = new m(this, n), t.data(this, "_jqs_mhandler", l))), n.get("composite") && !t.data(this, "_jqs_vcanvas") ? void(t.data(this, "_jqs_errnotify") || (alert("Attempted to attach a composite sparkline to an element with no existing sparkline"), t.data(this, "_jqs_errnotify", !0))) : (h = new(t.fn.sparkline[n.get("type")])(this, i, n, o, s), h.render(), l && l.registerSparkline(h), void 0)
                        }, t(this).html() && !n.get("disableHiddenCheck") && t(this).is(":hidden") || t.fn.jquery < "1.3.0" && t(this).parents().is(":hidden") || !t(this).parents("body").length) {
                        if (!n.get("composite") && t.data(this, "_jqs_pending"))
                            for (s = B.length; s; s--) B[s - 1][0] == this && B.splice(s - 1, 1);
                        B.push([this, o]), t.data(this, "_jqs_pending", !0)
                    } else o.call(this)
                })
            }, t.fn.sparkline.defaults = e(), t.sparkline_display_visible = function() {
                var e, i, o, s = [];
                for (i = 0, o = B.length; i < o; i++) e = B[i][0], t(e).is(":visible") && !t(e).parents().is(":hidden") ? (B[i][1].call(e), t.data(B[i][0], "_jqs_pending", !1), s.push(i)) : !t(e).closest("html").length && !t.data(e, "_jqs_pending") && (t.data(B[i][0], "_jqs_pending", !1), s.push(i));
                for (i = s.length; i; i--) B.splice(s[i - 1], 1)
            }, t.fn.sparkline.options = i({
                init: function(e, i) {
                    var o, s, n, r;
                    this.userOptions = i = i || {}, this.tag = e, this.tagValCache = {}, s = t.fn.sparkline.defaults, n = s.common, this.tagOptionsPrefix = i.enableTagOptions && (i.tagOptionsPrefix || n.tagOptionsPrefix), r = this.getTagSetting("type"), o = r === A ? s[i.type || n.type] : s[r], this.mergedOptions = t.extend({}, n, o, i)
                },
                getTagSetting: function(t) {
                    var e, i, o, s, n = this.tagOptionsPrefix;
                    if (n === !1 || void 0 === n) return A;
                    if (this.tagValCache.hasOwnProperty(t)) e = this.tagValCache.key;
                    else {
                        if (e = this.tag.getAttribute(n + t), void 0 === e || null === e) e = A;
                        else if ("[" === e.substr(0, 1))
                            for (e = e.substr(1, e.length - 2).split(","), i = e.length; i--;) e[i] = r(e[i].replace(/(^\s*)|(\s*$)/g, ""));
                        else if ("{" === e.substr(0, 1))
                            for (o = e.substr(1, e.length - 2).split(","), e = {}, i = o.length; i--;) s = o[i].split(":", 2), e[s[0].replace(/(^\s*)|(\s*$)/g, "")] = r(s[1].replace(/(^\s*)|(\s*$)/g, ""));
                        else e = r(e);
                        this.tagValCache.key = e
                    }
                    return e
                },
                get: function(t, e) {
                    var i, o = this.getTagSetting(t);
                    return o !== A ? o : void 0 === (i = this.mergedOptions[t]) ? e : i
                }
            }), t.fn.sparkline._base = i({
                disabled: !1,
                init: function(e, i, o, s, n) {
                    this.el = e, this.$el = t(e), this.values = i, this.options = o, this.width = s, this.height = n, this.currentRegion = void 0
                },
                initTarget: function() {
                    var t = !this.options.get("disableInteraction");
                    (this.target = this.$el.simpledraw(this.width, this.height, this.options.get("composite"), t)) ? (this.canvasWidth = this.target.pixelWidth, this.canvasHeight = this.target.pixelHeight) : this.disabled = !0
                },
                render: function() {
                    return !this.disabled || (this.el.innerHTML = "", !1)
                },
                getRegion: function(t, e) {},
                setRegionHighlight: function(t, e, i) {
                    var o, s = this.currentRegion,
                        n = !this.options.get("disableHighlight");
                    return e > this.canvasWidth || i > this.canvasHeight || e < 0 || i < 0 ? null : (o = this.getRegion(t, e, i), s !== o && (void 0 !== s && n && this.removeHighlight(), this.currentRegion = o, void 0 !== o && n && this.renderHighlight(), !0))
                },
                clearRegionHighlight: function() {
                    return void 0 !== this.currentRegion && (this.removeHighlight(), this.currentRegion = void 0, !0)
                },
                renderHighlight: function() {
                    this.changeHighlight(!0)
                },
                removeHighlight: function() {
                    this.changeHighlight(!1)
                },
                changeHighlight: function(t) {},
                getCurrentRegionTooltip: function() {
                    var e, i, s, n, r, a, l, h, c, d, _, u, p, g, m = this.options,
                        f = "",
                        v = [];
                    if (void 0 === this.currentRegion) return "";
                    if (e = this.getCurrentRegionFields(), _ = m.get("tooltipFormatter")) return _(this, m, e);
                    if (m.get("tooltipChartTitle") && (f += '<div class="jqs jqstitle">' + m.get("tooltipChartTitle") + "</div>\n"), i = this.options.get("tooltipFormat"), !i) return "";
                    if (t.isArray(i) || (i = [i]), t.isArray(e) || (e = [e]), l = this.options.get("tooltipFormatFieldlist"), h = this.options.get("tooltipFormatFieldlistKey"), l && h) {
                        for (c = [], a = e.length; a--;) d = e[a][h], (g = t.inArray(d, l)) != -1 && (c[g] = e[a]);
                        e = c
                    }
                    for (s = i.length, p = e.length, a = 0; a < s; a++)
                        for (u = i[a], "string" == typeof u && (u = new o(u)), n = u.fclass || "jqsfield", g = 0; g < p; g++) e[g].isNull && m.get("tooltipSkipNull") || (t.extend(e[g], {
                            prefix: m.get("tooltipPrefix"),
                            suffix: m.get("tooltipSuffix")
                        }), r = u.render(e[g], m.get("tooltipValueLookups"), m), v.push('<div class="' + n + '">' + r + "</div>"));
                    return v.length ? f + v.join("\n") : ""
                },
                getCurrentRegionFields: function() {},
                calcHighlightColor: function(t, e) {
                    var i, o, n, r, a = e.get("highlightColor"),
                        l = e.get("highlightLighten");
                    if (a) return a;
                    if (l && (i = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(t) || /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(t))) {
                        for (n = [], o = 4 === t.length ? 16 : 1, r = 0; r < 3; r++) n[r] = s(Math.round(parseInt(i[r + 1], 16) * o * l), 0, 255);
                        return "rgb(" + n.join(",") + ")"
                    }
                    return t
                }
            }), v = {
                changeHighlight: function(e) {
                    var i, o = this.currentRegion,
                        s = this.target,
                        n = this.regionShapes[o];
                    n && (i = this.renderRegion(o, e), t.isArray(i) || t.isArray(n) ? (s.replaceWithShapes(n, i), this.regionShapes[o] = t.map(i, function(t) {
                        return t.id
                    })) : (s.replaceWithShape(n, i), this.regionShapes[o] = i.id))
                },
                render: function() {
                    var e, i, o, s, n = this.values,
                        r = this.target,
                        a = this.regionShapes;
                    if (this.cls._super.render.call(this)) {
                        for (o = n.length; o--;)
                            if (e = this.renderRegion(o))
                                if (t.isArray(e)) {
                                    for (i = [], s = e.length; s--;) e[s].append(), i.push(e[s].id);
                                    a[o] = i
                                } else e.append(), a[o] = e.id;
                        else a[o] = null;
                        r.render()
                    }
                }
            }, t.fn.sparkline.line = b = i(t.fn.sparkline._base, {
                type: "line",
                init: function(t, e, i, o, s) {
                    b._super.init.call(this, t, e, i, o, s), this.vertices = [], this.regionMap = [], this.xvalues = [], this.yvalues = [], this.yminmax = [], this.hightlightSpotId = null, this.lastShapeId = null, this.initTarget()
                },
                getRegion: function(t, e, i) {
                    var o, s = this.regionMap;
                    for (o = s.length; o--;)
                        if (null !== s[o] && e >= s[o][0] && e <= s[o][1]) return s[o][2]
                },
                getCurrentRegionFields: function() {
                    var t = this.currentRegion;
                    return {
                        isNull: null === this.yvalues[t],
                        x: this.xvalues[t],
                        y: this.yvalues[t],
                        color: this.options.get("lineColor"),
                        fillColor: this.options.get("fillColor"),
                        offset: t
                    }
                },
                renderHighlight: function() {
                    var t, e, i = this.currentRegion,
                        o = this.target,
                        s = this.vertices[i],
                        n = this.options,
                        r = n.get("spotRadius"),
                        a = n.get("highlightSpotColor"),
                        l = n.get("highlightLineColor");
                    s && (r && a && (t = o.drawCircle(s[0], s[1], r, void 0, a), this.highlightSpotId = t.id, o.insertAfterShape(this.lastShapeId, t)), l && (e = o.drawLine(s[0], this.canvasTop, s[0], this.canvasTop + this.canvasHeight, l), this.highlightLineId = e.id, o.insertAfterShape(this.lastShapeId, e)))
                },
                removeHighlight: function() {
                    var t = this.target;
                    this.highlightSpotId && (t.removeShapeId(this.highlightSpotId), this.highlightSpotId = null), this.highlightLineId && (t.removeShapeId(this.highlightLineId), this.highlightLineId = null)
                },
                scanValues: function() {
                    var t, e, i, o, s, n = this.values,
                        r = n.length,
                        a = this.xvalues,
                        l = this.yvalues,
                        h = this.yminmax;
                    for (t = 0; t < r; t++) e = n[t], i = "string" == typeof n[t], o = "object" == typeof n[t] && n[t] instanceof Array, s = i && n[t].split(":"), i && 2 === s.length ? (a.push(Number(s[0])), l.push(Number(s[1])), h.push(Number(s[1]))) : o ? (a.push(e[0]), l.push(e[1]), h.push(e[1])) : (a.push(t), null === n[t] || "null" === n[t] ? l.push(null) : (l.push(Number(e)), h.push(Number(e))));
                    this.options.get("xvalues") && (a = this.options.get("xvalues")), this.maxy = this.maxyorg = Math.max.apply(Math, h), this.miny = this.minyorg = Math.min.apply(Math, h), this.maxx = Math.max.apply(Math, a), this.minx = Math.min.apply(Math, a), this.xvalues = a, this.yvalues = l, this.yminmax = h
                },
                processRangeOptions: function() {
                    var t = this.options,
                        e = t.get("normalRangeMin"),
                        i = t.get("normalRangeMax");
                    void 0 !== e && (e < this.miny && (this.miny = e), i > this.maxy && (this.maxy = i)), void 0 !== t.get("chartRangeMin") && (t.get("chartRangeClip") || t.get("chartRangeMin") < this.miny) && (this.miny = t.get("chartRangeMin")), void 0 !== t.get("chartRangeMax") && (t.get("chartRangeClip") || t.get("chartRangeMax") > this.maxy) && (this.maxy = t.get("chartRangeMax")), void 0 !== t.get("chartRangeMinX") && (t.get("chartRangeClipX") || t.get("chartRangeMinX") < this.minx) && (this.minx = t.get("chartRangeMinX")), void 0 !== t.get("chartRangeMaxX") && (t.get("chartRangeClipX") || t.get("chartRangeMaxX") > this.maxx) && (this.maxx = t.get("chartRangeMaxX"))
                },
                drawNormalRange: function(t, e, i, o, s) {
                    var n = this.options.get("normalRangeMin"),
                        r = this.options.get("normalRangeMax"),
                        a = e + Math.round(i - i * ((r - this.miny) / s)),
                        l = Math.round(i * (r - n) / s);
                    this.target.drawRect(t, a, o, l, void 0, this.options.get("normalRangeColor")).append()
                },
                render: function() {
                    var e, i, o, s, n, r, a, l, h, c, d, _, u, p, m, f, v, k, w, y, T, x, $, C, E, P = this.options,
                        D = this.target,
                        S = this.canvasWidth,
                        M = this.canvasHeight,
                        B = this.vertices,
                        A = P.get("spotRadius"),
                        z = this.regionMap;
                    if (b._super.render.call(this) && (this.scanValues(), this.processRangeOptions(), $ = this.xvalues, C = this.yvalues, this.yminmax.length && !(this.yvalues.length < 2))) {
                        for (s = n = 0, e = this.maxx - this.minx === 0 ? 1 : this.maxx - this.minx, i = this.maxy - this.miny === 0 ? 1 : this.maxy - this.miny, o = this.yvalues.length - 1, A && (S < 4 * A || M < 4 * A) && (A = 0), A && (T = P.get("highlightSpotColor") && !P.get("disableInteraction"), (T || P.get("minSpotColor") || P.get("spotColor") && C[o] === this.miny) && (M -= Math.ceil(A)), (T || P.get("maxSpotColor") || P.get("spotColor") && C[o] === this.maxy) && (M -= Math.ceil(A), s += Math.ceil(A)), (T || (P.get("minSpotColor") || P.get("maxSpotColor")) && (C[0] === this.miny || C[0] === this.maxy)) && (n += Math.ceil(A), S -= Math.ceil(A)), (T || P.get("spotColor") || P.get("minSpotColor") || P.get("maxSpotColor") && (C[o] === this.miny || C[o] === this.maxy)) && (S -= Math.ceil(A))), M--, void 0 !== P.get("normalRangeMin") && !P.get("drawNormalOnTop") && this.drawNormalRange(n, s, M, S, i), a = [], l = [a], p = m = null, f = C.length, E = 0; E < f; E++) h = $[E], d = $[E + 1], c = C[E], _ = n + Math.round((h - this.minx) * (S / e)), u = E < f - 1 ? n + Math.round((d - this.minx) * (S / e)) : S, m = _ + (u - _) / 2, z[E] = [p || 0, m, E], p = m, null === c ? E && (null !== C[E - 1] && (a = [], l.push(a)), B.push(null)) : (c < this.miny && (c = this.miny), c > this.maxy && (c = this.maxy), a.length || a.push([_, s + M]), r = [_, s + Math.round(M - M * ((c - this.miny) / i))], a.push(r), B.push(r));
                        for (v = [], k = [], w = l.length, E = 0; E < w; E++) a = l[E], a.length && (P.get("fillColor") && (a.push([a[a.length - 1][0], s + M]), k.push(a.slice(0)), a.pop()), a.length > 2 && (a[0] = [a[0][0], a[1][1]]), v.push(a));
                        for (w = k.length, E = 0; E < w; E++) D.drawShape(k[E], P.get("fillColor"), P.get("fillColor")).append();
                        for (void 0 !== P.get("normalRangeMin") && P.get("drawNormalOnTop") && this.drawNormalRange(n, s, M, S, i), w = v.length, E = 0; E < w; E++) D.drawShape(v[E], P.get("lineColor"), void 0, P.get("lineWidth")).append();
                        if (A && P.get("valueSpots"))
                            for (y = P.get("valueSpots"), void 0 === y.get && (y = new g(y)), E = 0; E < f; E++) x = y.get(C[E]), x && D.drawCircle(n + Math.round(($[E] - this.minx) * (S / e)), s + Math.round(M - M * ((C[E] - this.miny) / i)), A, void 0, x).append();
                        A && P.get("spotColor") && null !== C[o] && D.drawCircle(n + Math.round(($[$.length - 1] - this.minx) * (S / e)), s + Math.round(M - M * ((C[o] - this.miny) / i)), A, void 0, P.get("spotColor")).append(), this.maxy !== this.minyorg && (A && P.get("minSpotColor") && (h = $[t.inArray(this.minyorg, C)], D.drawCircle(n + Math.round((h - this.minx) * (S / e)), s + Math.round(M - M * ((this.minyorg - this.miny) / i)), A, void 0, P.get("minSpotColor")).append()), A && P.get("maxSpotColor") && (h = $[t.inArray(this.maxyorg, C)], D.drawCircle(n + Math.round((h - this.minx) * (S / e)), s + Math.round(M - M * ((this.maxyorg - this.miny) / i)), A, void 0, P.get("maxSpotColor")).append())), this.lastShapeId = D.getLastShapeId(), this.canvasTop = s, D.render()
                    }
                }
            }), t.fn.sparkline.bar = k = i(t.fn.sparkline._base, v, {
                type: "bar",
                init: function(e, i, o, n, h) {
                    var c, d, _, u, p, m, f, v, b, w, y, T, x, $, C, E, P, D, S, M, B, A, z = parseInt(o.get("barWidth"), 10),
                        I = parseInt(o.get("barSpacing"), 10),
                        O = o.get("chartRangeMin"),
                        R = o.get("chartRangeMax"),
                        L = o.get("chartRangeClip"),
                        F = 1 / 0,
                        V = -(1 / 0);
                    for (k._super.init.call(this, e, i, o, n, h), m = 0, f = i.length; m < f; m++) M = i[m], c = "string" == typeof M && M.indexOf(":") > -1, (c || t.isArray(M)) && (C = !0, c && (M = i[m] = a(M.split(":"))), M = l(M, null), d = Math.min.apply(Math, M), _ = Math.max.apply(Math, M), d < F && (F = d), _ > V && (V = _));
                    this.stacked = C, this.regionShapes = {}, this.barWidth = z, this.barSpacing = I, this.totalBarWidth = z + I, this.width = n = i.length * z + (i.length - 1) * I, this.initTarget(), L && (x = void 0 === O ? -(1 / 0) : O, $ = void 0 === R ? 1 / 0 : R), p = [], u = C ? [] : p;
                    var j = [],
                        H = [];
                    for (m = 0, f = i.length; m < f; m++)
                        if (C)
                            for (E = i[m], i[m] = S = [], j[m] = 0, u[m] = H[m] = 0, P = 0, D = E.length; P < D; P++) M = S[P] = L ? s(E[P], x, $) : E[P], null !== M && (M > 0 && (j[m] += M), F < 0 && V > 0 ? M < 0 ? H[m] += Math.abs(M) : u[m] += M : u[m] += Math.abs(M - (M < 0 ? V : F)), p.push(M));
                        else M = L ? s(i[m], x, $) : i[m], M = i[m] = r(M), null !== M && p.push(M);
                    this.max = T = Math.max.apply(Math, p), this.min = y = Math.min.apply(Math, p), this.stackMax = V = C ? Math.max.apply(Math, j) : T, this.stackMin = F = C ? Math.min.apply(Math, p) : y, void 0 !== o.get("chartRangeMin") && (o.get("chartRangeClip") || o.get("chartRangeMin") < y) && (y = o.get("chartRangeMin")), void 0 !== o.get("chartRangeMax") && (o.get("chartRangeClip") || o.get("chartRangeMax") > T) && (T = o.get("chartRangeMax")), this.zeroAxis = b = o.get("zeroAxis", !0), w = y <= 0 && T >= 0 && b ? 0 : 0 == b ? y : y > 0 ? y : T, this.xaxisOffset = w, v = C ? Math.max.apply(Math, u) + Math.max.apply(Math, H) : T - y, this.canvasHeightEf = b && y < 0 ? this.canvasHeight - 2 : this.canvasHeight - 1, y < w ? (A = C && T >= 0 ? V : T, B = (A - w) / v * this.canvasHeight, B !== Math.ceil(B) && (this.canvasHeightEf -= 2, B = Math.ceil(B))) : B = this.canvasHeight, this.yoffset = B, t.isArray(o.get("colorMap")) ? (this.colorMapByIndex = o.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = o.get("colorMap"), this.colorMapByValue && void 0 === this.colorMapByValue.get && (this.colorMapByValue = new g(this.colorMapByValue))), this.range = v
                },
                getRegion: function(t, e, i) {
                    var o = Math.floor(e / this.totalBarWidth);
                    return o < 0 || o >= this.values.length ? void 0 : o
                },
                getCurrentRegionFields: function() {
                    var t, e, i = this.currentRegion,
                        o = u(this.values[i]),
                        s = [];
                    for (e = o.length; e--;) t = o[e], s.push({
                        isNull: null === t,
                        value: t,
                        color: this.calcColor(e, t, i),
                        offset: i
                    });
                    return s
                },
                calcColor: function(e, i, o) {
                    var s, n, r = this.colorMapByIndex,
                        a = this.colorMapByValue,
                        l = this.options;
                    return s = this.stacked ? l.get("stackedBarColor") : i < 0 ? l.get("negBarColor") : l.get("barColor"), 0 === i && void 0 !== l.get("zeroColor") && (s = l.get("zeroColor")), a && (n = a.get(i)) ? s = n : r && r.length > o && (s = r[o]), t.isArray(s) ? s[e % s.length] : s
                },
                renderRegion: function(e, i) {
                    var o, s, n, r, a, l, h, d, _, u, p = this.values[e],
                        g = this.options,
                        m = this.xaxisOffset,
                        f = [],
                        v = this.range,
                        b = this.stacked,
                        k = this.target,
                        w = e * this.totalBarWidth,
                        y = this.canvasHeightEf,
                        T = this.yoffset;
                    if (p = t.isArray(p) ? p : [p], h = p.length, d = p[0], r = c(null, p), u = c(m, p, !0), r) return g.get("nullColor") ? (n = i ? g.get("nullColor") : this.calcHighlightColor(g.get("nullColor"), g), o = T > 0 ? T - 1 : T, k.drawRect(w, o, this.barWidth - 1, 0, n, n)) : void 0;
                    for (a = T, l = 0; l < h; l++) {
                        if (d = p[l], b && d === m) {
                            if (!u || _) continue;
                            _ = !0
                        }
                        s = v > 0 ? Math.floor(y * (Math.abs(d - m) / v)) + 1 : 1, d < m || d === m && 0 === T ? (o = a, a += s) : (o = T - s, T -= s), n = this.calcColor(l, d, e), i && (n = this.calcHighlightColor(n, g)), f.push(k.drawRect(w, o, this.barWidth - 1, s - 1, n, n))
                    }
                    return 1 === f.length ? f[0] : f
                }
            }), t.fn.sparkline.tristate = w = i(t.fn.sparkline._base, v, {
                type: "tristate",
                init: function(e, i, o, s, n) {
                    var r = parseInt(o.get("barWidth"), 10),
                        a = parseInt(o.get("barSpacing"), 10);
                    w._super.init.call(this, e, i, o, s, n), this.regionShapes = {}, this.barWidth = r, this.barSpacing = a, this.totalBarWidth = r + a, this.values = t.map(i, Number), this.width = s = i.length * r + (i.length - 1) * a, t.isArray(o.get("colorMap")) ? (this.colorMapByIndex = o.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = o.get("colorMap"), this.colorMapByValue && void 0 === this.colorMapByValue.get && (this.colorMapByValue = new g(this.colorMapByValue))), this.initTarget()
                },
                getRegion: function(t, e, i) {
                    return Math.floor(e / this.totalBarWidth)
                },
                getCurrentRegionFields: function() {
                    var t = this.currentRegion;
                    return {
                        isNull: void 0 === this.values[t],
                        value: this.values[t],
                        color: this.calcColor(this.values[t], t),
                        offset: t
                    }
                },
                calcColor: function(t, e) {
                    var i, o, s = this.values,
                        n = this.options,
                        r = this.colorMapByIndex,
                        a = this.colorMapByValue;
                    return i = a && (o = a.get(t)) ? o : r && r.length > e ? r[e] : s[e] < 0 ? n.get("negBarColor") : s[e] > 0 ? n.get("posBarColor") : n.get("zeroBarColor")
                },
                renderRegion: function(t, e) {
                    var i, o, s, n, r, a, l = this.values,
                        h = this.options,
                        c = this.target;
                    if (i = c.pixelHeight, s = Math.round(i / 2), n = t * this.totalBarWidth, l[t] < 0 ? (r = s, o = s - 1) : l[t] > 0 ? (r = 0, o = s - 1) : (r = s - 1, o = 2), a = this.calcColor(l[t], t), null !== a) return e && (a = this.calcHighlightColor(a, h)), c.drawRect(n, r, this.barWidth - 1, o - 1, a, a)
                }
            }), t.fn.sparkline.discrete = y = i(t.fn.sparkline._base, v, {
                type: "discrete",
                init: function(e, i, o, s, n) {
                    y._super.init.call(this, e, i, o, s, n), this.regionShapes = {}, this.values = i = t.map(i, Number), this.min = Math.min.apply(Math, i), this.max = Math.max.apply(Math, i), this.range = this.max - this.min, this.width = s = "auto" === o.get("width") ? 2 * i.length : this.width, this.interval = Math.floor(s / i.length), this.itemWidth = s / i.length, void 0 !== o.get("chartRangeMin") && (o.get("chartRangeClip") || o.get("chartRangeMin") < this.min) && (this.min = o.get("chartRangeMin")), void 0 !== o.get("chartRangeMax") && (o.get("chartRangeClip") || o.get("chartRangeMax") > this.max) && (this.max = o.get("chartRangeMax")), this.initTarget(), this.target && (this.lineHeight = "auto" === o.get("lineHeight") ? Math.round(.3 * this.canvasHeight) : o.get("lineHeight"))
                },
                getRegion: function(t, e, i) {
                    return Math.floor(e / this.itemWidth)
                },
                getCurrentRegionFields: function() {
                    var t = this.currentRegion;
                    return {
                        isNull: void 0 === this.values[t],
                        value: this.values[t],
                        offset: t
                    }
                },
                renderRegion: function(t, e) {
                    var i, o, n, r, a = this.values,
                        l = this.options,
                        h = this.min,
                        c = this.max,
                        d = this.range,
                        _ = this.interval,
                        u = this.target,
                        p = this.canvasHeight,
                        g = this.lineHeight,
                        m = p - g;
                    return o = s(a[t], h, c), r = t * _, i = Math.round(m - m * ((o - h) / d)), n = l.get("thresholdColor") && o < l.get("thresholdValue") ? l.get("thresholdColor") : l.get("lineColor"), e && (n = this.calcHighlightColor(n, l)), u.drawLine(r, i, r, i + g, n)
                }
            }), t.fn.sparkline.bullet = T = i(t.fn.sparkline._base, {
                type: "bullet",
                init: function(t, e, i, o, s) {
                    var n, r, l;
                    T._super.init.call(this, t, e, i, o, s), this.values = e = a(e), l = e.slice(), l[0] = null === l[0] ? l[2] : l[0], l[1] = null === e[1] ? l[2] : l[1], n = Math.min.apply(Math, e), r = Math.max.apply(Math, e), n = void 0 === i.get("base") ? n < 0 ? n : 0 : i.get("base"), this.min = n, this.max = r, this.range = r - n, this.shapes = {}, this.valueShapes = {}, this.regiondata = {}, this.width = o = "auto" === i.get("width") ? "4.0em" : o, this.target = this.$el.simpledraw(o, s, i.get("composite")), e.length || (this.disabled = !0), this.initTarget()
                },
                getRegion: function(t, e, i) {
                    var o = this.target.getShapeAt(t, e, i);
                    return void 0 !== o && void 0 !== this.shapes[o] ? this.shapes[o] : void 0
                },
                getCurrentRegionFields: function() {
                    var t = this.currentRegion;
                    return {
                        fieldkey: t.substr(0, 1),
                        value: this.values[t.substr(1)],
                        region: t
                    }
                },
                changeHighlight: function(t) {
                    var e, i = this.currentRegion,
                        o = this.valueShapes[i];
                    switch (delete this.shapes[o], i.substr(0, 1)) {
                        case "r":
                            e = this.renderRange(i.substr(1), t);
                            break;
                        case "p":
                            e = this.renderPerformance(t);
                            break;
                        case "t":
                            e = this.renderTarget(t)
                    }
                    this.valueShapes[i] = e.id, this.shapes[e.id] = i, this.target.replaceWithShape(o, e)
                },
                renderRange: function(t, e) {
                    var i = this.values[t],
                        o = Math.round(this.canvasWidth * ((i - this.min) / this.range)),
                        s = this.options.get("rangeColors")[t - 2];
                    return e && (s = this.calcHighlightColor(s, this.options)), this.target.drawRect(0, 0, o - 1, this.canvasHeight - 1, s, s)
                },
                renderPerformance: function(t) {
                    var e = this.values[1],
                        i = Math.round(this.canvasWidth * ((e - this.min) / this.range)),
                        o = this.options.get("performanceColor");
                    return t && (o = this.calcHighlightColor(o, this.options)), this.target.drawRect(0, Math.round(.3 * this.canvasHeight), i - 1, Math.round(.4 * this.canvasHeight) - 1, o, o)
                },
                renderTarget: function(t) {
                    var e = this.values[0],
                        i = Math.round(this.canvasWidth * ((e - this.min) / this.range) - this.options.get("targetWidth") / 2),
                        o = Math.round(.1 * this.canvasHeight),
                        s = this.canvasHeight - 2 * o,
                        n = this.options.get("targetColor");
                    return t && (n = this.calcHighlightColor(n, this.options)), this.target.drawRect(i, o, this.options.get("targetWidth") - 1, s - 1, n, n)
                },
                render: function() {
                    var t, e, i = this.values.length,
                        o = this.target;
                    if (T._super.render.call(this)) {
                        for (t = 2; t < i; t++) e = this.renderRange(t).append(), this.shapes[e.id] = "r" + t, this.valueShapes["r" + t] = e.id;
                        null !== this.values[1] && (e = this.renderPerformance().append(), this.shapes[e.id] = "p1", this.valueShapes.p1 = e.id), null !== this.values[0] && (e = this.renderTarget().append(), this.shapes[e.id] = "t0", this.valueShapes.t0 = e.id), o.render()
                    }
                }
            }), t.fn.sparkline.pie = x = i(t.fn.sparkline._base, {
                type: "pie",
                init: function(e, i, o, s, n) {
                    var r, a = 0;
                    if (x._super.init.call(this, e, i, o, s, n), this.shapes = {}, this.valueShapes = {}, this.values = i = t.map(i, Number), "auto" === o.get("width") && (this.width = this.height), i.length > 0)
                        for (r = i.length; r--;) a += i[r];
                    this.total = a, this.initTarget(), this.radius = Math.floor(Math.min(this.canvasWidth, this.canvasHeight) / 2)
                },
                getRegion: function(t, e, i) {
                    var o = this.target.getShapeAt(t, e, i);
                    return void 0 !== o && void 0 !== this.shapes[o] ? this.shapes[o] : void 0
                },
                getCurrentRegionFields: function() {
                    var t = this.currentRegion;
                    return {
                        isNull: void 0 === this.values[t],
                        value: this.values[t],
                        percent: this.values[t] / this.total * 100,
                        color: this.options.get("sliceColors")[t % this.options.get("sliceColors").length],
                        offset: t
                    }
                },
                changeHighlight: function(t) {
                    var e = this.currentRegion,
                        i = this.renderSlice(e, t),
                        o = this.valueShapes[e];
                    delete this.shapes[o], this.target.replaceWithShape(o, i), this.valueShapes[e] = i.id, this.shapes[i.id] = e
                },
                renderSlice: function(t, e) {
                    var i, o, s, n, r, a = this.target,
                        l = this.options,
                        h = this.radius,
                        c = l.get("borderWidth"),
                        d = l.get("offset"),
                        _ = 2 * Math.PI,
                        u = this.values,
                        p = this.total,
                        g = d ? 2 * Math.PI * (d / 360) : 0;
                    for (n = u.length, s = 0; s < n; s++) {
                        if (i = g, o = g, p > 0 && (o = g + _ * (u[s] / p)), t === s) return r = l.get("sliceColors")[s % l.get("sliceColors").length], e && (r = this.calcHighlightColor(r, l)), a.drawPieSlice(h, h, h - c, i, o, void 0, r);
                        g = o
                    }
                },
                render: function() {
                    var t, e, i = this.target,
                        o = this.values,
                        s = this.options,
                        n = this.radius,
                        r = s.get("borderWidth");
                    if (x._super.render.call(this)) {
                        for (r && i.drawCircle(n, n, Math.floor(n - r / 2), s.get("borderColor"), void 0, r).append(), e = o.length; e--;) o[e] && (t = this.renderSlice(e).append(), this.valueShapes[e] = t.id, this.shapes[t.id] = e);
                        i.render()
                    }
                }
            }), t.fn.sparkline.box = $ = i(t.fn.sparkline._base, {
                type: "box",
                init: function(e, i, o, s, n) {
                    $._super.init.call(this, e, i, o, s, n), this.values = t.map(i, Number), this.width = "auto" === o.get("width") ? "4.0em" : s, this.initTarget(), this.values.length || (this.disabled = 1)
                },
                getRegion: function() {
                    return 1
                },
                getCurrentRegionFields: function() {
                    var t = [{
                        field: "lq",
                        value: this.quartiles[0]
                    }, {
                        field: "med",
                        value: this.quartiles[1]
                    }, {
                        field: "uq",
                        value: this.quartiles[2]
                    }];
                    return void 0 !== this.loutlier && t.push({
                        field: "lo",
                        value: this.loutlier
                    }), void 0 !== this.routlier && t.push({
                        field: "ro",
                        value: this.routlier
                    }), void 0 !== this.lwhisker && t.push({
                        field: "lw",
                        value: this.lwhisker
                    }), void 0 !== this.rwhisker && t.push({
                        field: "rw",
                        value: this.rwhisker
                    }), t
                },
                render: function() {
                    var t, e, i, o, s, r, a, l, h, c, d, _ = this.target,
                        u = this.values,
                        p = u.length,
                        g = this.options,
                        m = this.canvasWidth,
                        f = this.canvasHeight,
                        v = void 0 === g.get("chartRangeMin") ? Math.min.apply(Math, u) : g.get("chartRangeMin"),
                        b = void 0 === g.get("chartRangeMax") ? Math.max.apply(Math, u) : g.get("chartRangeMax"),
                        k = 0;
                    if ($._super.render.call(this)) {
                        if (g.get("raw")) g.get("showOutliers") && u.length > 5 ? (e = u[0], t = u[1], o = u[2], s = u[3], r = u[4], a = u[5], l = u[6]) : (t = u[0], o = u[1], s = u[2], r = u[3], a = u[4]);
                        else if (u.sort(function(t, e) {
                                return t - e
                            }), o = n(u, 1), s = n(u, 2), r = n(u, 3), i = r - o, g.get("showOutliers")) {
                            for (t = a = void 0, h = 0; h < p; h++) void 0 === t && u[h] > o - i * g.get("outlierIQR") && (t = u[h]), u[h] < r + i * g.get("outlierIQR") && (a = u[h]);
                            e = u[0], l = u[p - 1]
                        } else t = u[0], a = u[p - 1];
                        this.quartiles = [o, s, r], this.lwhisker = t, this.rwhisker = a, this.loutlier = e, this.routlier = l, d = m / (b - v + 1), g.get("showOutliers") && (k = Math.ceil(g.get("spotRadius")), m -= 2 * Math.ceil(g.get("spotRadius")), d = m / (b - v + 1), e < t && _.drawCircle((e - v) * d + k, f / 2, g.get("spotRadius"), g.get("outlierLineColor"), g.get("outlierFillColor")).append(), l > a && _.drawCircle((l - v) * d + k, f / 2, g.get("spotRadius"), g.get("outlierLineColor"), g.get("outlierFillColor")).append()), _.drawRect(Math.round((o - v) * d + k), Math.round(.1 * f), Math.round((r - o) * d), Math.round(.8 * f), g.get("boxLineColor"), g.get("boxFillColor")).append(), _.drawLine(Math.round((t - v) * d + k), Math.round(f / 2), Math.round((o - v) * d + k), Math.round(f / 2), g.get("lineColor")).append(), _.drawLine(Math.round((t - v) * d + k), Math.round(f / 4), Math.round((t - v) * d + k), Math.round(f - f / 4), g.get("whiskerColor")).append(), _.drawLine(Math.round((a - v) * d + k), Math.round(f / 2), Math.round((r - v) * d + k), Math.round(f / 2), g.get("lineColor")).append(), _.drawLine(Math.round((a - v) * d + k), Math.round(f / 4), Math.round((a - v) * d + k), Math.round(f - f / 4), g.get("whiskerColor")).append(), _.drawLine(Math.round((s - v) * d + k), Math.round(.1 * f), Math.round((s - v) * d + k), Math.round(.9 * f), g.get("medianColor")).append(), g.get("target") && (c = Math.ceil(g.get("spotRadius")), _.drawLine(Math.round((g.get("target") - v) * d + k), Math.round(f / 2 - c), Math.round((g.get("target") - v) * d + k), Math.round(f / 2 + c), g.get("targetColor")).append(), _.drawLine(Math.round((g.get("target") - v) * d + k - c), Math.round(f / 2), Math.round((g.get("target") - v) * d + k + c), Math.round(f / 2), g.get("targetColor")).append()), _.render()
                    }
                }
            }),
            function() {
                document.namespaces && !document.namespaces.v ? (t.fn.sparkline.hasVML = !0, document.namespaces.add("v", "urn:schemas-microsoft-com:vml", "#default#VML")) : t.fn.sparkline.hasVML = !1;
                var e = document.createElement("canvas");
                t.fn.sparkline.hasCanvas = !!e.getContext && !!e.getContext("2d")
            }(), P = i({
                init: function(t, e, i, o) {
                    this.target = t, this.id = e, this.type = i, this.args = o
                },
                append: function() {
                    return this.target.appendShape(this), this
                }
            }), D = i({
                _pxregex: /(\d+)(px)?\s*$/i,
                init: function(e, i, o) {
                    e && (this.width = e, this.height = i, this.target = o, this.lastShapeId = null, o[0] && (o = o[0]), t.data(o, "_jqs_vcanvas", this))
                },
                drawLine: function(t, e, i, o, s, n) {
                    return this.drawShape([
                        [t, e],
                        [i, o]
                    ], s, n)
                },
                drawShape: function(t, e, i, o) {
                    return this._genShape("Shape", [t, e, i, o])
                },
                drawCircle: function(t, e, i, o, s, n) {
                    return this._genShape("Circle", [t, e, i, o, s, n])
                },
                drawPieSlice: function(t, e, i, o, s, n, r) {
                    return this._genShape("PieSlice", [t, e, i, o, s, n, r])
                },
                drawRect: function(t, e, i, o, s, n) {
                    return this._genShape("Rect", [t, e, i, o, s, n])
                },
                getElement: function() {
                    return this.canvas
                },
                getLastShapeId: function() {
                    return this.lastShapeId
                },
                reset: function() {
                    alert("reset not implemented")
                },
                _insert: function(e, i) {
                    t(i).html(e)
                },
                _calculatePixelDims: function(e, i, o) {
                    var s;
                    s = this._pxregex.exec(i), s ? this.pixelHeight = s[1] : this.pixelHeight = t(o).height(), s = this._pxregex.exec(e), s ? this.pixelWidth = s[1] : this.pixelWidth = t(o).width()
                },
                _genShape: function(t, e) {
                    var i = z++;
                    return e.unshift(i), new P(this, i, t, e)
                },
                appendShape: function(t) {
                    alert("appendShape not implemented")
                },
                replaceWithShape: function(t, e) {
                    alert("replaceWithShape not implemented")
                },
                insertAfterShape: function(t, e) {
                    alert("insertAfterShape not implemented")
                },
                removeShapeId: function(t) {
                    alert("removeShapeId not implemented")
                },
                getShapeAt: function(t, e, i) {
                    alert("getShapeAt not implemented")
                },
                render: function() {
                    alert("render not implemented")
                }
            }), S = i(D, {
                init: function(e, i, o, s) {
                    S._super.init.call(this, e, i, o), this.canvas = document.createElement("canvas"), o[0] && (o = o[0]), t.data(o, "_jqs_vcanvas", this), t(this.canvas).css({
                        display: "inline-block",
                        width: e,
                        height: i,
                        verticalAlign: "top"
                    }), this._insert(this.canvas, o), this._calculatePixelDims(e, i, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, this.interact = s, this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = void 0, t(this.canvas).css({
                        width: this.pixelWidth,
                        height: this.pixelHeight
                    })
                },
                _getContext: function(t, e, i) {
                    var o = this.canvas.getContext("2d");
                    return void 0 !== t && (o.strokeStyle = t), o.lineWidth = void 0 === i ? 1 : i, void 0 !== e && (o.fillStyle = e), o
                },
                reset: function() {
                    var t = this._getContext();
                    t.clearRect(0, 0, this.pixelWidth, this.pixelHeight), this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = void 0
                },
                _drawShape: function(t, e, i, o, s) {
                    var n, r, a = this._getContext(i, o, s);
                    for (a.beginPath(), a.moveTo(e[0][0] + .5, e[0][1] + .5), n = 1, r = e.length; n < r; n++) a.lineTo(e[n][0] + .5, e[n][1] + .5);
                    void 0 !== i && a.stroke(), void 0 !== o && a.fill(), void 0 !== this.targetX && void 0 !== this.targetY && a.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = t)
                },
                _drawCircle: function(t, e, i, o, s, n, r) {
                    var a = this._getContext(s, n, r);
                    a.beginPath(), a.arc(e, i, o, 0, 2 * Math.PI, !1), void 0 !== this.targetX && void 0 !== this.targetY && a.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = t), void 0 !== s && a.stroke(), void 0 !== n && a.fill()
                },
                _drawPieSlice: function(t, e, i, o, s, n, r, a) {
                    var l = this._getContext(r, a);
                    l.beginPath(), l.moveTo(e, i), l.arc(e, i, o, s, n, !1), l.lineTo(e, i), l.closePath(), void 0 !== r && l.stroke(), a && l.fill(), void 0 !== this.targetX && void 0 !== this.targetY && l.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = t)
                },
                _drawRect: function(t, e, i, o, s, n, r) {
                    return this._drawShape(t, [
                        [e, i],
                        [e + o, i],
                        [e + o, i + s],
                        [e, i + s],
                        [e, i]
                    ], n, r)
                },
                appendShape: function(t) {
                    return this.shapes[t.id] = t, this.shapeseq.push(t.id), this.lastShapeId = t.id, t.id
                },
                replaceWithShape: function(t, e) {
                    var i, o = this.shapeseq;
                    for (this.shapes[e.id] = e, i = o.length; i--;) o[i] == t && (o[i] = e.id);
                    delete this.shapes[t]
                },
                replaceWithShapes: function(t, e) {
                    var i, o, s, n = this.shapeseq,
                        r = {};
                    for (o = t.length; o--;) r[t[o]] = !0;
                    for (o = n.length; o--;) i = n[o], r[i] && (n.splice(o, 1), delete this.shapes[i], s = o);
                    for (o = e.length; o--;) n.splice(s, 0, e[o].id), this.shapes[e[o].id] = e[o]
                },
                insertAfterShape: function(t, e) {
                    var i, o = this.shapeseq;
                    for (i = o.length; i--;)
                        if (o[i] === t) return o.splice(i + 1, 0, e.id), void(this.shapes[e.id] = e)
                },
                removeShapeId: function(t) {
                    var e, i = this.shapeseq;
                    for (e = i.length; e--;)
                        if (i[e] === t) {
                            i.splice(e, 1);
                            break
                        } delete this.shapes[t]
                },
                getShapeAt: function(t, e, i) {
                    return this.targetX = e, this.targetY = i, this.render(), this.currentTargetShapeId
                },
                render: function() {
                    var t, e, i, o = this.shapeseq,
                        s = this.shapes,
                        n = o.length,
                        r = this._getContext();
                    for (r.clearRect(0, 0, this.pixelWidth, this.pixelHeight), i = 0; i < n; i++) t = o[i], e = s[t], this["_draw" + e.type].apply(this, e.args);
                    this.interact || (this.shapes = {}, this.shapeseq = [])
                }
            }), M = i(D, {
                init: function(e, i, o) {
                    var s;
                    M._super.init.call(this, e, i, o), o[0] && (o = o[0]), t.data(o, "_jqs_vcanvas", this), this.canvas = document.createElement("span"), t(this.canvas).css({
                        display: "inline-block",
                        position: "relative",
                        overflow: "hidden",
                        width: e,
                        height: i,
                        margin: "0px",
                        padding: "0px",
                        verticalAlign: "top"
                    }), this._insert(this.canvas, o), this._calculatePixelDims(e, i, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, s = '<v:group coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '" style="position:absolute;top:0;left:0;width:' + this.pixelWidth + "px;height=" + this.pixelHeight + 'px;"></v:group>', this.canvas.insertAdjacentHTML("beforeEnd", s), this.group = t(this.canvas).children()[0], this.rendered = !1, this.prerender = ""
                },
                _drawShape: function(t, e, i, o, s) {
                    var n, r, a, l, h, c, d, _ = [];
                    for (d = 0, c = e.length; d < c; d++) _[d] = "" + e[d][0] + "," + e[d][1];
                    return n = _.splice(0, 1), s = void 0 === s ? 1 : s, r = void 0 === i ? ' stroked="false" ' : ' strokeWeight="' + s + 'px" strokeColor="' + i + '" ', a = void 0 === o ? ' filled="false"' : ' fillColor="' + o + '" filled="true" ', l = _[0] === _[_.length - 1] ? "x " : "", h = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"  id="jqsshape' + t + '" ' + r + a + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;"  path="m ' + n + " l " + _.join(", ") + " " + l + 'e"> </v:shape>'
                },
                _drawCircle: function(t, e, i, o, s, n, r) {
                    var a, l, h;
                    return e -= o, i -= o, a = void 0 === s ? ' stroked="false" ' : ' strokeWeight="' + r + 'px" strokeColor="' + s + '" ', l = void 0 === n ? ' filled="false"' : ' fillColor="' + n + '" filled="true" ', h = '<v:oval  id="jqsshape' + t + '" ' + a + l + ' style="position:absolute;top:' + i + "px; left:" + e + "px; width:" + 2 * o + "px; height:" + 2 * o + 'px"></v:oval>'
                },
                _drawPieSlice: function(t, e, i, o, s, n, r, a) {
                    var l, h, c, d, _, u, p, g;
                    if (s === n) return "";
                    if (n - s === 2 * Math.PI && (s = 0, n = 2 * Math.PI), h = e + Math.round(Math.cos(s) * o), c = i + Math.round(Math.sin(s) * o), d = e + Math.round(Math.cos(n) * o), _ = i + Math.round(Math.sin(n) * o), h === d && c === _) {
                        if (n - s < Math.PI) return "";
                        h = d = e + o, c = _ = i
                    }
                    return h === d && c === _ && n - s < Math.PI ? "" : (l = [e - o, i - o, e + o, i + o, h, c, d, _], u = void 0 === r ? ' stroked="false" ' : ' strokeWeight="1px" strokeColor="' + r + '" ', p = void 0 === a ? ' filled="false"' : ' fillColor="' + a + '" filled="true" ', g = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"  id="jqsshape' + t + '" ' + u + p + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;"  path="m ' + e + "," + i + " wa " + l.join(", ") + ' x e"> </v:shape>')
                },
                _drawRect: function(t, e, i, o, s, n, r) {
                    return this._drawShape(t, [
                        [e, i],
                        [e, i + s],
                        [e + o, i + s],
                        [e + o, i],
                        [e, i]
                    ], n, r)
                },
                reset: function() {
                    this.group.innerHTML = ""
                },
                appendShape: function(t) {
                    var e = this["_draw" + t.type].apply(this, t.args);
                    return this.rendered ? this.group.insertAdjacentHTML("beforeEnd", e) : this.prerender += e, this.lastShapeId = t.id, t.id
                },
                replaceWithShape: function(e, i) {
                    var o = t("#jqsshape" + e),
                        s = this["_draw" + i.type].apply(this, i.args);
                    o[0].outerHTML = s
                },
                replaceWithShapes: function(e, i) {
                    var o, s = t("#jqsshape" + e[0]),
                        n = "",
                        r = i.length;
                    for (o = 0; o < r; o++) n += this["_draw" + i[o].type].apply(this, i[o].args);
                    for (s[0].outerHTML = n, o = 1; o < e.length; o++) t("#jqsshape" + e[o]).remove()
                },
                insertAfterShape: function(e, i) {
                    var o = t("#jqsshape" + e),
                        s = this["_draw" + i.type].apply(this, i.args);
                    o[0].insertAdjacentHTML("afterEnd", s)
                },
                removeShapeId: function(e) {
                    var i = t("#jqsshape" + e);
                    this.group.removeChild(i[0])
                },
                getShapeAt: function(t, e, i) {
                    var o = t.id.substr(8);
                    return o
                },
                render: function() {
                    this.rendered || (this.group.innerHTML = this.prerender, this.rendered = !0)
                }
            })
    }), /*! scripts/fullsize_photo_slideshow.js */
    function(t, e) {
        var i = Backbone.View.extend({
            initialize: function(e) {
                this.options = e || {}, this.slides = this.options.slideshow_items || [], this.root = t(this.options.slideshow_container) || t("#rad_slideshow"), this.interval = this.options.interval || 3e3, this.display_badge = this.options.display_badge || !1, this.display_like_and_reblog = this.options.display_like_and_reblog || !1, this.current_slide = !1, this.next_slide = !1, this.count = !1, this.slides.length && this.start_slideshow()
            },
            create_slide: function() {
                var e, i, o, s, n;
                return e = t('<div class="slide" />'), o = t('<a class="source" />'), this.display_badge && (i = t('<div class="radar_badge" />'), e.append(i)), this.display_like_and_reblog && (s = t('<a class="post-control reblog reblog_button" />'), n = t('<a class="like" />'), e.append(s), e.append(n)), e.append(o), e
            },
            update_slide: function(e, i) {
                if (!i) return !1;
                var o = e.find(".source"),
                    s = e.find(".like"),
                    n = e.find(".reblog"),
                    r = e.find(".radar_badge");
                "undefined" != typeof i.photo_url && e.css({
                    "background-image": "url(" + i.photo_url + ")"
                }), void 0 !== i.source_url && (o.attr("href", i.source_url), o.attr("target", "_new"), void 0 !== i.source_label && o.html(i.source_label || "Source")), this.display_badge && r.addClass(i.radar_badge_class || "radar_badge"), this.display_like_and_reblog && (void 0 !== i.like_url && s.attr("href", i.like_url), "#like" === i.like_url && s.off("click.NerdSlideshow").on("click.NerdSlideshow", function(e) {
                    e.preventDefault();
                    var o = i.like_state ? "unlike" : "like";
                    Tumblr[o]({
                        id: i.post_id,
                        key: i.reblog_key
                    }, {
                        complete: function() {
                            t("#rad_slideshow_like_" + i.post_id).toggleClass("red"), i.like_state = !i.like_state
                        }
                    })
                }), s.attr({
                    id: "rad_slideshow_like_" + i.post_id,
                    "class": i.like_state === !0 ? "post-control like red like_button" : "post-control like like_button"
                }), void 0 !== i.reblog_url && n.attr("href", i.reblog_url))
            },
            transition: function() {
                t(this.current_slide).fadeOut(_.bind(function(t) {
                    this.next_slide && this.next_slide.css({
                        zIndex: 1
                    }), this.current_slide && this.current_slide.css({
                        zIndex: 0
                    }).show();
                    var e = this.next_slide;
                    this.next_slide = this.current_slide, this.current_slide = e;
                    var i = this.slides[count % this.slides.length];
                    this.update_slide(this.next_slide, i), count++, setTimeout(_.bind(this.transition, this), this.interval)
                }, this))
            },
            start_slideshow: function() {
                this.current_slide = this.create_slide(), this.root.append(this.current_slide), this.update_slide(this.current_slide, this.slides[0]), this.slides.length > 1 && (this.next_slide = this.create_slide(), this.root.append(this.next_slide), this.update_slide(this.next_slide, this.slides[1]), count = 2, this.transition())
            }
        });
        e.NerdSlideshow = i
    }(jQuery, Tumblr), /*! scripts/radar.js */
    function(t, e, i, o) {
        "use strict";
        var s = window.l10n_str || {},
            n = i.View.extend({
                el: "#tumblr_radar",
                events: {
                    "click a": "run_click",
                    "click .notes_outer_container.popover .follow": "notes_popover_follow",
                    "click .radar_footer .follow": "toggleFollow",
                    "click .radar_controls_buttons .reblog": "reblog",
                    "click .radar_controls_buttons .like:not(.liked)": "like",
                    "click .radar_controls_buttons .liked": "unlike",
                    "click .post_notes_label": "onPostNoteClick"
                },
                initialize: function() {
                    this.post_id = this.$el.attr("data-post-id"), this.post_root_id = this.$el.attr("data-root_id"), this.form_key = t("#tumblr_form_key").attr("content"), this.is_premium = this.$el.hasClass("premium"), this.placement_id = this.$el.attr("data-placement_id"), this.pt = this.$el.attr("data-pt"), this.$followButton = this.$(".follow"), this.is_new_radar_design = this.$el.hasClass("new_radar_design"), this.postModel = Tumblr.postsView.createPostModelFromEl(this.$el), Tumblr.postsView.collection.add(this.postModel), this.tumblelogModel = this.postModel.tumblelog, this.listenTo(this.tumblelogModel, "change:following", this.renderFollow)
                },
                renderFollow: function(t, e) {
                    null != t._previousAttributes.following && t._previousAttributes.following !== e && (e ? this.$followButton.toggleClass("follow_poof", e) : this.$followButton.toggleClass("followed follow_poof", e), this.$(".radar_footer").toggleClass("has_follow_button", !e))
                },
                toggleFollow: function() {
                    var t = this,
                        e = !this.tumblelogModel.get("following");
                    return this.tumblelogModel.save_following({
                        following: e
                    }, {
                        placement_id: this.placement_id,
                        pt: this.pt,
                        source: e ? "FOLLOW_SOURCE_RADAR" : "UNFOLLOW_SOURCE_RADAR"
                    }).done(function() {
                        Tumblr.CapturePremiumRadar && t.placement_id ? Tumblr.CapturePremiumRadar.track_follow(e) : Tumblr.CaptureRadar && Tumblr.CaptureRadar.track_follow(e)
                    }).fail(function() {
                        Tumblr.Dialog.alert(s.ajax_error)
                    }), !1
                },
                like: function(e) {
                    e.stopPropagation(), e.preventDefault();
                    var i = t(e.currentTarget);
                    i.addClass("liked"), this.show_heart_poof(i.parent(), !0), this.update_note_count(!0);
                    var o = this;
                    Tumblr.like({
                        id: this.post_id,
                        root_id: this.post_root_id,
                        key: i.attr("data-reblog-key"),
                        placement_id: this.placement_id,
                        pt: this.pt,
                        source: "LIKE_SOURCE_RADAR"
                    }, {
                        success: function() {
                            Tumblr.CapturePremiumRadar && o.placement_id ? Tumblr.CapturePremiumRadar.track_like(!0) : Tumblr.CaptureRadar && Tumblr.CaptureRadar.track_like(!0)
                        },
                        error: function() {
                            i.removeClass("liked"), Tumblr.Dialog.alert(s.ajax_error)
                        }
                    })
                },
                unlike: function(e) {
                    e.stopPropagation(), e.preventDefault();
                    var i = t(e.currentTarget);
                    i.removeClass("liked"), this.show_heart_poof(i.parent(), !1), this.update_note_count(!1);
                    var o = this;
                    Tumblr.unlike({
                        id: this.post_id,
                        key: i.attr("data-reblog-key"),
                        placement_id: this.placement_id,
                        source: "UNLIKE_SOURCE_RADAR"
                    }, {
                        success: function() {
                            Tumblr.CapturePremiumRadar && o.placement_id ? Tumblr.CapturePremiumRadar.track_like(!1) : Tumblr.CaptureRadar && Tumblr.CaptureRadar.track_like(!1)
                        },
                        error: function() {
                            i.addClass("liked"), Tumblr.Dialog.alert(s.ajax_error)
                        }
                    })
                },
                show_heart_poof: function(e, i) {
                    var o = t('<div class="post_animated_heart post_poof"><span class="heart_left"></span><span class="heart_right"></span></div>').toggleClass("unliked", !i);
                    e.append(o), setTimeout(function() {
                        o.fadeOut(200, function() {
                            o.remove()
                        })
                    }, 300)
                },
                reblog: function(i) {
                    var o = t(i.currentTarget);
                    if (i.altKey) {
                        if (i.stopPropagation(), i.preventDefault(), o.hasClass("reblogged")) return;
                        o.addClass("reblogged");
                        var n = this;
                        t.ajax({
                            url: "/fast_reblog",
                            type: "post",
                            data: {
                                reblog_key: o.attr("data-reblog-key"),
                                reblog_post_id: o.attr("data-reblog-id"),
                                form_key: this.form_key,
                                pt: this.pt
                            },
                            success: function() {
                                Tumblr.CapturePremiumRadar && n.placement_id ? Tumblr.CapturePremiumRadar.track_fast_reblog(o, i) : Tumblr.CaptureRadar && Tumblr.CaptureRadar.track_fast_reblog(o, i)
                            },
                            error: function() {
                                o.removeClass("reblogged"), Tumblr.Dialog.alert(s.ajax_error)
                            }
                        })
                    } else i.stopPropagation(), i.preventDefault(), this.listenTo(Tumblr.Events, "postForms:saved", e.bind(this._rebloggedPost, this, o)), Tumblr.Events.trigger("postForms:reblog", {
                        reblogKey: o.attr("data-reblog-key"),
                        reblogId: o.attr("data-reblog-id"),
                        pt: this.pt
                    })
                },
                _rebloggedPost: function(t) {
                    t.hasClass("reblogged") || t.addClass("reblogged")
                },
                notes_popover_follow: function(e) {
                    var i = t(e.currentTarget),
                        o = i.closest(".note"),
                        s = o.data("tumblelog");
                    o.addClass("is_following"), Tumblr.follow({
                        tumblelog: s
                    })
                },
                update_note_count: function(t) {
                    var e, i = this.$el.find(".note_link_current");
                    t ? (e = i.data("more"), i.data("more") !== i.text() && i.data("less", i.text()), this.$el.removeClass("no_notes")) : (e = i.data("less"), e && e.length || this.$el.addClass("no_notes")), i.text(e), i.attr("title", e)
                },
                run_click: function(e) {
                    var i = e.currentTarget.href,
                        o = t(e.currentTarget);
                    if (!o.is(".no_pop, .photoset_photo, .photo_exif_flipper, .fan_mail_read_more, .follow, .like, .reblog")) {
                        if (window.self !== window.top && o.is(".post_control.reblog, .post_control.edit")) i = i.replace(/\?.*/, "");
                        else {
                            if (o.closest(".no_pop, .post_controls, #new_post, .controls, .user_menu_list, form, .flash_notification, .more_notes_link").length > 0) return;
                            if (!i || "#" === i) return
                        }
                        Tumblr.Flags.bool("indash_blogs") || (Tumblr.Prima.Url.hasAllowedProtocol(i) && window.open(i), e.preventDefault(), e.stopPropagation())
                    }
                },
                onPostNoteClick: function(t) {
                    Tumblr.Events.trigger("useraction:click:post:notes", {
                        event: t
                    }), Tumblr.Prima.postActivityLoader(e.bind(function(t) {
                        return new t({
                            pinnedTarget: this.$(".note_link_current"),
                            postModel: this.postModel
                        }).render()
                    }, this))
                }
            });
        o.Radar = n
    }(jQuery, _, Backbone, Tumblr), jQuery(document).ready(function(t) {
        var e = t("#tumblr_radar");
        e.length && (Tumblr.radar = new Tumblr.Radar({
            el: e
        }))
    }), /*! scripts/ads_impression_tracking.js */
    function(t, e) {
        "use strict";
        var i = Tumblr.Flags.bool("kraken_web_logging_library") ? "Kraken:" : "LSLog:";
        e.ImpressionTracking = {
            ad_selectors: ["#tumblr_radar[data-pt]", ".post.sponsored_post", ".takeover-container", ".post.pt", ".remnant_ad.pt", ".follow_list_item_blog.pt", ".discovery-hero", ".video-ad", ".image-ad", ".dfp-ad"],
            initialize: function() {
                this.tracking = [], this.setup(), Tumblr.Events.on("DOMEventor:updateRect", this.check_for_ads, this), Tumblr.Events.on("search:layout:updated", this.check_for_ads, this)
            },
            throttleRate: 300,
            setup: function() {
                this.throttledTrack = _.throttle(_.bind(this.track, this), this.throttleRate), this.check_for_ads(), Tumblr.Events.on("DOMEventor:flatscroll DOMEventor:flatresize", this.throttledTrack, this)
            },
            register: function(e) {
                var i = t("body"),
                    o = i.find(e);
                _.each(o, function(e) {
                    var i = t(e);
                    i.data("mb-tracked") || (i.data("mb-tracked", 1), this.tracking.push({
                        classList: e.classList,
                        was_below: null,
                        el: e,
                        $el: i
                    }))
                }, this)
            },
            track: function() {
                var t = Tumblr.Prima.DOMEventor.rect(),
                    e = t.windowScrollTop,
                    i = e + t.windowHeight,
                    o = Tumblr.Prima.DOMEventor.lastRect().windowScrollTop,
                    s = (o || 0) <= e;
                _.each(this.tracking, function(t) {
                    if (t.$el.is(":visible") && !t.$el.data("yx")) {
                        var o = t.$el.hasClass("video-ad"),
                            n = t.$el.hasClass("image-ad"),
                            r = t.$el.hasClass("remnant_ad pt"),
                            a = t.$el.hasClass("sponsored_post"),
                            l = !1,
                            h = t.el.offsetHeight,
                            c = t.$el.offset().top + h,
                            d = t.$el.offset().top + .5 * h;
                        if (null === t.was_below && (t.was_below = e > c), s ? l = d < i : t.was_below && (l = d > e), l && (this.log_impression(t.$el, t.classList), (o || n || a || r) && !t.$el.data("yx_v"))) {
                            var _ = Date.now();
                            this.trackViewableImpression(t, _)
                        }
                    }
                }, this)
            },
            trackViewableImpression: function(t, e) {
                var i = Tumblr.Prima.DOMEventor.rect(),
                    o = i.windowScrollTop,
                    s = o + i.windowHeight,
                    n = t.el.offsetHeight,
                    r = t.$el.offset().top + .5 * n,
                    a = r >= o && r <= s,
                    l = Date.now() - e,
                    h = 300;
                if (a) {
                    if (l >= 1e3) return void this.logViewableImpression(t.$el);
                    h = Math.min(h, 1e3 - l)
                } else e = Date.now();
                setTimeout(_.bind(function() {
                    this.trackViewableImpression(t, e)
                }, this), h)
            },
            check_for_ads: function() {
                this.register(this.ad_selectors.join(", ")), this.throttledTrack()
            },
            log_impression: function(e, o) {
                if (e instanceof jQuery && e.length && !e.data("yx")) {
                    e.data("yx", 1);
                    var s = e.data("placementId"),
                        n = e.hasClass("radar"),
                        r = e.data("pt"),
                        a = !1;
                    /^mb_[0-9]{1,20}$/.test(s) ? a = "622" : s && (a = n ? "641" : "640");
                    try {
                        if (!r) return;
                        if (Tumblr.Flags.bool("little_sister_kill_switch") || 1 === e.data("log-index")) this._should_log_to_yx(e.data("log-index")) && t.ajax({
                            url: "/svc/log/yx",
                            type: "POST",
                            data: {
                                type: a,
                                post_id: e.data("postId"),
                                placement_id: s,
                                pt: r
                            },
                            withFormKey: !0
                        });
                        else {
                            var l = {};
                            if (e.find(".safemode").length) {
                                var h = e.find(".safemode").attr("data-nsfw-score"),
                                    c = e.find(".safemode").attr("data-nsfw-threshold");
                                l = {
                                    in_safe_mode: "true",
                                    nsfw_score: h,
                                    nsfw_threshold: c
                                }
                            }
                            Tumblr.Events.trigger(i + "impression", {
                                loggingData: {
                                    pt: r,
                                    is_ad: this._should_log_to_yx(e.data("log-index")),
                                    extraData: l
                                }
                            })
                        }
                    } catch (d) {}
                }
            },
            logViewableImpression: function(e) {
                if (e instanceof jQuery && e.length && e.data("log-index") && !e.data("yx_v")) {
                    e.data("yx_v", 1);
                    var o = e.data("placementId"),
                        s = e.data("pt"),
                        n = "27";
                    try {
                        Tumblr.Flags.bool("little_sister_kill_switch") || 1 === e.data("log-index") ? this._should_log_to_yx(e.data("log-index")) && t.ajax({
                            url: "/svc/log/yx",
                            type: "POST",
                            data: {
                                action: n,
                                post_id: e.data("postId"),
                                placement_id: o,
                                pt: s
                            },
                            withFormKey: !0
                        }) : Tumblr.Events.trigger(i + "viewable_impression", {
                            loggingData: {
                                pt: s,
                                is_ad: this._should_log_to_yx(e.data("log-index"))
                            }
                        })
                    } catch (r) {}
                }
            },
            _should_log_to_yx: function(t) {
                return 1 === t || 3 === t
            },
            fire_tracking_pixels: function(t) {
                var e = !1;
                if (e) {
                    var i = new Image;
                    i.src = e
                }
            }
        }
    }(jQuery, Tumblr || {}), jQuery(document).ready(function() {
        Tumblr.ImpressionTracking.initialize()
    }), /*! scripts/tumblr/utils/post_tags.js */
    Tumblr.Utils || (Tumblr.Utils = {}),
    function(t, e) {
        var i = {
            tag_url: function(t) {
                var e = encodeURIComponent(t);
                return e = e.replace("+", "-"), e = e.replace("%20", "-"), e = e.replace("_", "-"), "/tagged/" + e
            }
        };
        e.PostTags = i
    }(jQuery, Tumblr.Utils);