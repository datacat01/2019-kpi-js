/*
 Service Ashiato 1.0.0
 Copyright(c) 2011 Rakuten.Inc
 Date: 2011-12-15 22:09:23
*/
(function(i, l) {
    if (i.jQuery !== l) {
        jQuery.noConflict();
        for (var k = jQuery, o = function() {
                var a = this;
                k.extend(a, {
                    config: {
                        ajaxtimer: ["3", "Range", "1,99"],
                        jsonurl: ["", "Str", "^http(s?)+(:\\/\\/[a-zA-Z0-9_\\-\\.]+)(\\.rakuten\\.co\\.jp\\/)+([a-zA-Z0-9_&=\\?\\-\\.\\/]+)$"],
                        maxnum: ["5", "Range", "1,99"],
                        scid_key: ["sc-id", "Str", "^[a-zA-Z0-9_\\-]{3,64}$"],
                        scid_val: ["", "Str", "^[a-zA-Z0-9_\\-]{3,64}$"],
                        scid_seq: ["0", "Str", "^[0-1]$"],
                        sc_impvar: ["", "Str", "^[a-zA-Z0-9_\\-]{3,64}$"],
                        sc_impcode: ["", "Str", "^[a-zA-Z0-9_\\-]{3,64}$"],
                        sc_hovcode: ["", "Str", "^[a-zA-Z0-9_\\-]{3,64}$"]
                    },
                    define: {
                        startTime: 0,
                        configClass: "svcAshiatoConfig",
                        serviceIdClass: "svcAshiatoServiceId",
                        labelClass: "svcAshiatoLabel",
                        labelDefault: "default",
                        labelExist: "exist",
                        labelHover: "hover",
                        viewClass: "svcAshiatoView",
                        viewTmpl: "viewTemplate"
                    },
                    vars: {
                        openTimerId: null,
                        serviceNum: 0,
                        json: null
                    },
                    eobj: {
                        ashiato: null,
                        config: null,
                        serviceId: null,
                        label: null,
                        labelAll: null,
                        labelDefault: null,
                        labelExist: null,
                        labelHover: null,
                        view: null,
                        labelTmpl: null,
                        viewTmpl: null
                    },
                    status: {
                        isTimeout: false
                    },
                    initialize: function(b) {
                        a.eobj.ashiato = b;
                        a.eobj.config = b.find("." + a.define.configClass);
                        a.eobj.serviceId = b.find("." + a.define.serviceIdClass);
                        a.eobj.label = b.find("." + a.define.labelClass);
                        a.eobj.labelAll = a.eobj.label.children();
                        a.eobj.labelDefault = a.eobj.label.find("." + a.define.labelDefault);
                        a.eobj.labelExist = a.eobj.label.find("." + a.define.labelExist);
                        a.eobj.labelHover = a.eobj.label.find("." + a.define.labelHover);
                        a.eobj.view = b.find("." + a.define.viewClass);
                        a.define.viewTmpl = a.eobj.ashiato.attr("id") + "_" +
                            a.define.viewTmpl;
                        a.eobj.viewTmpl = b.find("#" + a.define.viewTmpl);
                        if (!(a.eobj.labelExist.length == 0 || a.eobj.labelHover.length == 0))
                            if (a.eobj.viewTmpl.length == 1) {
                                a.eobj.viewTmpl.template(a.define.viewTmpl);
                                a.define.startTime = (new Date).getTime();
                                a.config = a.readAttr(a.eobj.config, a.config);
                                a.config.ajaxtimer = parseInt(a.config.ajaxtimer) * 1E3;
                                a.config.maxnum = parseInt(a.config.maxnum);
                                a.config.jsonurl != "" && a.getData()
                            }
                    },
                    getData: function() {
                        var b = setTimeout(function() {
                            a.status.isTimeout = true
                        }, a.config.ajaxtimer);
                        k.ajax({
                            url: a.config.jsonurl,
                            cache: true,
                            dataType: "jsonp",
                            timeout: a.config.ajaxtimer,
                            success: function(c) {
                                if (!a.status.isTimeout) {
                                    clearTimeout(b);
                                    if (!(c.code != "0" || c.num == "0")) {
                                        a.vars.serviceNum = a.remakeServices(c);
                                        if (c.services.length > 0) {
                                            a.eobj.labelAll.hide();
                                            a.eobj.labelExist.show();
                                            k.tmpl(a.define.viewTmpl, c, a.templatesOption).appendTo(a.eobj.view);
                                            a.setImpression();
                                            a.setLabelEvent()
                                        }
                                    }
                                }
                            }
                        })
                    },
                    remakeServices: function(b) {
                        var c = {};
                        a.eobj.serviceId.find("li").each(function() {
                            var e = k(this).html().split(",");
                            if (e[0] === "") return true;
                            if (e[1] === l) c[parseInt(e[0])] = "";
                            else c[parseInt(e[0])] = e[1]
                        });
                        for (var g = b.services.length, d = [], h = {}, f = 0; f < g; f++) {
                            var j = b.services[f].serviceid;
                            if (c[j] !== l) {
                                if (c[j] !== "") b.services[f].serviceurl = c[j];
                                else if (a.config.scid_val != "") {
                                    h[a.config.scid_key] = a.config.scid_val + (a.config.scid_seq == "0" ? "" : "_" + b.services[f].serviceid);
                                    b.services[f].serviceurl = a.urlParameter(b.services[f].serviceurl, h)
                                }
                                d.push(b.services[f]);
                                if (d.length >= a.config.maxnum) break
                            }
                        }
                        b.services = d;
                        b.num = b.services.length;
                        return b.num
                    },
                    setLabelEvent: function() {
                        a.eobj.label.length != 0 && a.eobj.ashiato.hover(function() {
                            a.eobj.labelAll.hide();
                            a.eobj.labelHover.show();
                            a.eobj.view.show();
                            a.setTrackingOnce()
                        }, function() {
                            a.eobj.labelAll.hide();
                            a.eobj.labelExist.show();
                            a.eobj.view.hide()
                        })
                    },
                    templatesOption: {
                        omitStr: function(b, c, g) {
                            if (b !== l) {
                                var d = 0,
                                    h = "",
                                    f = "",
                                    j = b.length,
                                    e, m;
                                for (m = 0; m < j; m++) {
                                    f = escape(e = b.charAt(m));
                                    d += f.length < 4 && !/%[0|1|8-9|A-F]\w|%7F/.test(f) ? 1 : 2;
                                    if (d > c) return h + g;
                                    h += e
                                }
                                return "" + b
                            }
                        }
                    },
                    setImpression: function() {
                        if (!(a.config.sc_impvar ==
                                "" || i[a.config.sc_impvar] === l || a.config.sc_impcode == "")) {
                            var b = a.vars.serviceNum,
                                c = "";
                            if (b > 0 && b < 10) c = "_0" + b;
                            else if (b >= 10) c = "_" + b;
                            i[a.config.sc_impvar] = a.config.sc_impcode + c
                        }
                    },
                    setTrackingOnce: function() {
                        if (!(a.config.sc_hovcode == "" || typeof i.s_gi != "function")) {
                            i.s = i.s_gi(i.s_account);
                            i.s.linkTrackVars = "prop13";
                            i.s.prop13 = "" + a.config.sc_hovcode;
                            i.s.tl(a.eobj.label.get(0), "o", "top_sbh")
                        }
                        a.setTrackingOnce = function() {}
                    },
                    readAttr: function(b, c) {
                        var g, d, h;
                        if (b.length != 0) {
                            g = b[0].attributes;
                            for (d = g.length -
                                1; d >= 0; d--)
                                if (h = c[g[d].nodeName.replace(/^data-/, "")]) h[0] = a.affirmValue(g[d].nodeValue, h[1], h[2], h[0])
                        }
                        for (d in c) c[d] = c[d][0];
                        return c
                    },
                    affirmValue: function(b, c, g, d) {
                        if ((c == "Int" || c == "Str") && a.isMatch(b, g)) return c == "Int" ? parseInt(b) : b;
                        else if (c == "Range" && (b = a.isInRange(b, g))) return b;
                        return d
                    },
                    isMatch: function(b, c) {
                        return b && RegExp(c).test(b) ? true : false
                    },
                    isInRange: function(b, c) {
                        b = parseInt(b);
                        c = c.split(",", 2);
                        return parseInt(c[0]) <= b && b <= parseInt(c[1]) ? b : false
                    },
                    urlParameter: function(b, c, g) {
                        var d = {},
                            h, f, j, e;
                        if (!(!b || b == "")) {
                            if (g !== false) g = true;
                            if (g) b = unescape(b.replace(/\+/g, " "));
                            b = b.split("?", 2);
                            if (b[1]) {
                                f = b[1].split("&");
                                j = f.length;
                                for (e = 0; e < j; e++) {
                                    h = f[e].split("=");
                                    d[h[0]] = h[1]
                                }
                            }
                            if (!c) return d;
                            if (typeof c === "string") return d[c];
                            for (e in c) d[e] = c[e];
                            f = "";
                            for (e in d) f += e + "=" + d[e] + "&";
                            b[1] = f.slice(0, -1);
                            b = b.join("?");
                            if (g) b = encodeURI(b);
                            return b
                        }
                    }
                })
            }, n = 1;;) {
            var p = k("#svcAshiato" + n);
            if (p.length == 0) break;
            (new o).initialize(p);
            n++
        }
        k(function() {
            for (;;) {
                var a = k("#svcAshiato" + n);
                if (a.length == 0) break;
                (new o).initialize(a);
                n++
            }
        })
    }
})(this);