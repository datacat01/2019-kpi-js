/*!
 * Chartworks Builder 1.4.8 2018-09-18 
 * Copyright (c) 2018 Markit Digital
 */
! function(a) {
    "use strict";

    function b(a, c) {
        var d = this;
        this.version = "1.4.8", this.state = {}, this.xref = [], this.onComplete = c || function() {}, this.invalidTokenCount = 0, this.size = null, this.customEvents = {}, new b.DependencyLoader(this, a).load(function() {
            d.init(a)
        })
    }
    b.prototype.locales = {}, b.prototype.translate = function(a) {
        var b = this.locale.translate(a) || this.locales["en-US"].translate(a) || "%" + a + "%";
        return b
    }, b.prototype.init = function(b) {
        a = window.jQuery.noConflict(), this.clientParams = this.parseClientParams(b), this.initAjax(), this.initLocale(), this.createLayout(a.proxy(this.loadModchartsChart, this))
    }, b.prototype.initAjax = function() {
        a.support.cors = !0
    }, b.prototype.initLocale = function() {
        var a = this.clientParams.cultureCode || "en-US";
        this.locale = this.locales[a] || this.locales["en-US"]
    }, b.prototype.parseClientParams = function(b) {
        if (b.target && a(b.target).length || (this.warn("No target element found, using <body> instead."), b.target = "body"), b["template.size"]) this.size = b["template.size"];
        else {
            var c = a(b.target).width();
            this.size = c > 0 && c < 780 ? "small" : "large"
        }
        return b.typeAheadAPI || (b["feature.symbolSearch"] = !1, b["feature.comparison"] = !1, b["feature.small.comparison"] = !1), b["feature.share"] && !b.onShare && (this.warn("The onShare event is not defined."), b["feature.share"] = !1), b.data && (b["feature.frequency"] = !1, b["feature.indicators"] = !1, b["feature.events"] = !1), "small" !== this.size || b["feature.small.timeframes"] || (b["feature.small.timeframes"] = ["1d", "1m", "3m", "6m", "ytd", "1y", "3y", "5y", "10y"]), "large" !== this.size || b["feature.large.timeframes"] || (b["feature.large.timeframes"] = ["1d", "5d", "1m", "3m", "6m", "ytd", "1y", "3y", "5y", "10y", "Max"]), b
    }, b.prototype.getSymbolLookup = function(b, c) {
        var d = this;
        b || (b = {});
        var e = [{
            symbol: b.symbol,
            exchange: b.exchangeId
        }];
        this.chart.loadingStart(), a.ajax({
            dataType: "json",
            url: this.getSymbolLookupAPIPath().replace("%s", window.encodeURIComponent(JSON.stringify(e))),
            error: function(a) {
                "abort" !== a.statusText && (d.state.symbolLookupRetry = {
                    args: b,
                    onComplete: c
                }, d.onAPIError({
                    status: a.status,
                    statusMsg: a.statusText,
                    responseText: a.responseText
                }), c())
            },
            success: function(a) {
                var e = {};
                if (delete d.state.symbolLookupRetry, a && a.data && a.data.items && a.data.items.length > 0) {
                    var f = a.data.items[0];
                    f.xid && (e.xid = String(f.xid), e.exchangeId = f.exchange, e.inputSymbol = b.symbol, e.displaySymbol = b.displaySymbol, e.displayExchange = b.displayExchange), d.addLocalXref(e)
                }
                c && c(e)
            }
        })
    }, b.prototype.getCompareSymbolsLookup = function(b, c) {
        var d = this,
            e = [];
        b || (b = {}), b.forEach(function(a) {
            e.push({
                symbol: a.symbol,
                exchange: a.exchange
            })
        }), this.chart.loadingStart(), a.ajax({
            dataType: "json",
            url: this.getSymbolLookupAPIPath().replace("%s", window.encodeURIComponent(JSON.stringify(e))),
            error: function(a) {
                "abort" !== a.statusText && d.onAPIError({
                    status: a.status,
                    statusMsg: a.statusText,
                    responseText: a.responseText
                }), c()
            },
            success: function(a) {
                var e = [];
                delete d.state.symbolLookupRetry, a && a.data && a.data.items && a.data.items.length > 0 && a.data.items.forEach(function(a, c) {
                    var f = {};
                    a.xid && (f.xid = String(a.xid), f.exchangeId = a.exchange, f.inputSymbol = b[c].symbol, f.displaySymbol = b[c].displaySymbol, f.displayExchange = b[c].displayExchange), d.addLocalXref(f), e.push(f)
                }), c && c(e)
            }
        })
    }, b.prototype.getSymbolLookupAPIPath = function() {
        var a = this.getEnvironment(),
            b = "";
        if (this.clientParams.symbolLookupAPIPath) return b = this.clientParams.symbolLookupAPIPath + "xref/exact?inputs=%s&access_token=" + this.clientParams.token, "string" == typeof this.clientParams.clientId && (b += "&client_token=" + this.clientParams.clientId), b;
        switch (a) {
            case "D":
            case "A":
                return b = "https://content.markitqa.com/api.markitqa.com/apiman-gateway/MOD/chartworks-xref/1.0/xref/exact?inputs=%s&access_token=" + this.clientParams.token, "string" == typeof this.clientParams.clientId && (b += "&client_token=" + this.clientParams.clientId), b;
            default:
                return b = "https://content.markitcdn.com/api.markitondemand.com/apiman-gateway/MOD/chartworks-xref/1.0/xref/exact?inputs=%s&access_token=" + this.clientParams.token, "string" == typeof this.clientParams.clientId && (b += "&client_token=" + this.clientParams.clientId), b
        }
    }, b.prototype.warn = function(a) {
        window.console && window.console.warn && window.console.warn(a)
    }, b.prototype.getChartAPIPath = function() {
        var a = this.getEnvironment();
        if (this.clientParams.chartAPIPath) return this.clientParams.chartAPIPath;
        switch (a) {
            case "D":
            case "A":
                return "https://content.markitqa.com/api.markitqa.com/apiman-gateway/MOD/chartworks-data/1.0/";
            default:
                return "https://content.markitcdn.com/api.markitondemand.com/apiman-gateway/MOD/chartworks-data/1.0/"
        }
    }, b.prototype.getEnvironment = function() {
        for (var a = document.domain, b = document.getElementsByTagName("script"), c = "", d = 0; d < b.length; d++) {
            if (c = b[d].getAttribute("src") || "", /markitcdn\.com/i.test(c)) return "P";
            if (/markitqa\.com/i.test(c)) return "A"
        }
        return /^(10\.|local|boudev|boupmap)/i.test(a) ? "D" : "P"
    }, b.prototype.getXrefByXID = function(a) {
        var b = this.xref.filter(function(b) {
            return b.xid === a || b.crossRate && b.crossRate === a
        });
        return !b.length && this.chart.metaData.chartworksXref && (b = this.chart.metaData.chartworksXref.filter(function(b) {
            return b.xid === a || b.crossRate && b.crossRate === a
        })), b.length ? b[0] : null
    }, b.prototype.filterIndicators = function(b) {
        b = b || {};
        var c = a.extend([], this.indicators),
            d = this;
        if ("string" == typeof b.keyword) {
            var e = new RegExp(b.keyword.replace(/([\W])/g, "\\$1"), "i");
            return c.filter(function(a) {
                var b = e.exec(d.translate(a.labelId));
                if (b && "undefined" != typeof b.index) return a.matchIndex = b.index, !0
            })
        }
        if ("string" == typeof b.id) {
            var f = c.filter(function(a) {
                return a.templateId === b.id || a.id === b.id
            });
            return f.length ? f[0] : null
        }
        return "boolean" == typeof b.isUpper ? c.filter(function(a) {
            return a.isUpper === b.isUpper
        }) : b.category ? c.filter(function(a) {
            return "all" === b.category || a.category === b.category
        }) : c
    }, b.prototype.getOffset = function() {
        return this.layout.$el.core.offset()
    }, b.prototype.getLayout = function() {
        switch (this.size) {
            case "large":
                return new b.LargeLayout(this);
            default:
                return new b.SmallLayout(this)
        }
    }, b.prototype.createLayout = function(b) {
        this.layout = this.getLayout(), a(this.clientParams.target).empty(), this.layout.init(this), b()
    }, b.hexToRGB = function(a) {
        var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
        return b ? {
            r: parseInt(b[1], 16),
            g: parseInt(b[2], 16),
            b: parseInt(b[3], 16)
        } : null
    }, b.prototype.setSymbol = function(a) {
        this.chart.setSymbol(a.xid || a.crossRate), this.chart.loadData(), this.addLocalXref(a), this.onPrimarySymbolChange(a)
    }, b.prototype.setSymbolCompare = function(b) {
        var c = a.extend([], this.chart.params.symbolCompare);
        this.addLocalXref(b), c.indexOf(b.xid) === -1 && c.indexOf(b.crossRate) === -1 && (c.push(b.xid || b.crossRate), this.chart.setSymbolCompare(c))
    }, b.prototype.addModchartsIndicator = function(a, b, c) {
        return a.addIndicator(b, c)
    }, b.prototype.addLocalXref = function(a) {
        var b = this.getXrefByXID(a.xid || a.crossRate);
        b || this.xref.push({
            exchangeId: a.exchangeId,
            inputSymbol: a.symbol || a.inputSymbol,
            crossRate: a.crossRate,
            xid: a.xid,
            displayExchange: a.displayExchange,
            displaySymbol: a.displaySymbol,
            displayName: a.displayName
        })
    }, b.prototype.togglePrimaryExpandedLegend = function(b) {
        var c = a(".modcharts-legend.first"),
            d = c.parent().find(".chartworks-legend-indicators");
        c.toggleClass("chartworks-legend-expanded", b), c.hasClass("chartworks-legend-expanded") ? d.show() : d.hide()
    }, b.prototype.togglePanelEvent = function(b, c) {
        var d = this.hasEvent(b),
            e = this,
            f = this.chart,
            g = f.panels[0];
        d && "custom" === d.params.id ? (d.isHidden = "boolean" == typeof c ? !c : !d.isHidden, !d.isHidden && d.params.datasetURL ? a.ajax({
            url: d.params.datasetURL,
            success: function(b) {
                d.params.dataset = d.params.datasetCallback ? d.params.datasetCallback(b) : a.extend(!0, [], b), g.params.style.yaxisPaddingTop = e.getYAxisPadding(), f.render()
            },
            error: function(a) {
                console.warn("Error loading custom dataset URL", a.status), d.isHidden = !0
            }
        }) : (g.params.style.yaxisPaddingTop = this.getYAxisPadding(), f.render())) : (d && c !== !0 && (g.removeEvent(d), g.params.style.yaxisPaddingTop = this.getYAxisPadding(), f.render()), d || c === !1 || g.addEvent(b, {}, function() {
            g.params.style.yaxisPaddingTop = e.getYAxisPadding(), f.loadData()
        }))
    }, b.prototype.getFrequencyByDays = function(a) {
        var b = 0,
            c = 0;
        return a < 3 ? (b = 3, c = "Minute") : a <= 5 ? (b = 5, c = "Minute") : a <= 10 ? (b = 15, c = "Minute") : a <= 21 ? (b = 1, c = "Hour") : a <= 365 ? (b = 1, c = "Day") : a < 3650 ? (b = 1, c = "Week") : (b = 1, c = "Month"), {
            dataInterval: b,
            dataPeriod: c
        }
    }, b.prototype.getInceptionDate = function(b) {
        var c = this;
        a.ajax({
            url: c.getChartAPIPath() + "chartapi/inceptiondate?symbol=" + c.chart.params.symbol + "&access_token=" + c.clientParams.token,
            complete: function(a) {
                var d = c.chart.parseDebugInfo(a.responseText);
                if (d && "number" == typeof d.InceptionDate) {
                    var e = Math.ceil(c.chart.jsToMsDate(new Date) - d.InceptionDate);
                    0 === d.InceptionDate && (e = 10950), b(e)
                }
            }
        })
    }, b.prototype.destroy = function() {
        try {
            this.locale = null, this.chart.locale = null, this.chart.destroy()
        } catch (a) {
            console.warn(a.message)
        }
    }, b.Extend = function(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        var d = function() {};
        d.prototype = b.prototype, a.prototype = new d, a.prototype.constructor = a, a.prototype.superclass = b
    }, b.Locale = function(a) {
        this.id = a.id, this.modchartsLocale = a.modchartsLocale, this.translations = a.translations, this.indicators = a.indicators || [], this.settings = a.settings || {}
    }, b.Locale.prototype.getModchartsId = function() {
        return this.id.replace("-", "_")
    }, b.Locale.prototype.translate = function(a) {
        return this.translations[a]
    }, b.DependencyLoader = function(a, b) {
        this.core = a, this.urls = this.getURLs(b)
    }, b.DependencyLoader.prototype.getCDNPrefix = function(a) {
        switch (a) {
            case "D":
                return "//localhost/chartworks/public/content/chartworks";
            case "A":
                return "//chartworks.markitqa.com/content/chartworks";
            default:
                return "//content.markitcdn.com/www.chartworks.io/content/chartworks"
        }
    }, b.DependencyLoader.prototype.getURLs = function(a) {
        var b = this.core,
            c = b.getEnvironment(),
            d = location.protocol + this.getCDNPrefix(c),
            e = "D" !== c ? ".min" : "",
            f = ["https://fonts.googleapis.com/css?family=Roboto", "dist/{chartworksVersion}/css/chartworks{min}.css"];
        return window.d3 && /^3\./.test(window.d3.version) || f.push("vendor/d3/3.5.17/d3.min.js"), f.push("vendor/jquery/2.1.0/jquery.min.js", "vendor/modcharts/1.3.5/js/modcharts{min}.js"), f = f.map(function(a) {
            return a = a.replace("{chartworksVersion}", b.version), a = a.replace("{min}", e)
        }), f.map(function(b) {
            return a && a.modchartsJS && /vendor\/modcharts/.test(b) ? a.modchartsJS : /^http/.test(b) ? b : d + "/" + b
        }).reverse()
    }, b.DependencyLoader.prototype.load = function(a) {
        var b = this.urls;
        window.ModchartsModulePattern = "window";
        for (var c = b.length - 1; c >= 0; c--) this.loadFile(b[c], function(c) {
            for (var d = b.length - 1; d >= 0; d--) b[d] === c && b.splice(d, 1);
            0 === b.length && a && a()
        })
    }, b.DependencyLoader.prototype.loadFile = function(a, b) {
        var c, d = /\.js$/.test(a),
            e = /fonts\.googleapis\.com|\.css$/.test(a);
        d ? (c = document.createElement("script"), c.src = a, c.async = !1) : e && (c = document.createElement("link"), c.setAttribute("rel", "stylesheet"), c.setAttribute("type", "text/css"), c.setAttribute("href", a)), c.onreadystatechange = c.onload = function() {
            var d = c.readyState;
            b.done || d && !/loaded|complete/.test(d) || (b.done = !0, b(a))
        }, c && document.getElementsByTagName("head")[0].appendChild(c), e && /PhantomJS/.test(window.navigator.userAgent) && (b.done = !0, b(a))
    }, b.prototype.indicators = [{
        id: "adl",
        labelId: "IndicatorADL",
        isUpper: !1,
        category: "volume",
        style: {
            lineColor: "#FCD32E",
            lineWidth: 2
        }
    }, {
        id: "avgtruerange",
        labelId: "IndicatorATR",
        isUpper: !1,
        category: "momentum",
        inputs: [{
            name: "period",
            value: 14
        }],
        style: {
            lineColor: "#4B7BBB",
            lineWidth: 2
        }
    }, {
        id: "awesomeoscillator",
        labelId: "IndicatorAwesomeOscillator",
        isUpper: !1,
        category: "momentum",
        inputs: [{
            name: "period1",
            value: 5
        }, {
            name: "period2",
            value: 34
        }],
        style: {
            fillColorPos: "#00C02F",
            fillColorNeg: "#FD0000"
        },
        labelText: {
            period1: "Period1",
            period2: "Period2"
        },
        swatchColors: ["fillColorPos", "fillColorNeg"]
    }, {
        id: "percentb",
        labelId: "IndicatorPercentB",
        isUpper: !1,
        category: "momentum",
        inputs: [{
            name: "period",
            value: 20
        }, {
            name: "standardDeviations",
            value: 2
        }],
        style: {
            lineColor: "#009487",
            medianLineColor: "#04BBD3",
            lineWidth: 2
        },
        bands: [{
            labelText: "Overbought",
            style: {
                labelColor: "#999999",
                fillColor: "rgba(0,192,47,0.1)",
                lineColor: "rgba(0,192,47,0.1)"
            }
        }, {
            labelText: "Oversold",
            style: {
                labelColor: "#999999",
                fillColor: "rgba(253,0,0,0.1)",
                lineColor: "rgba(253,0,0,0.1)"
            }
        }],
        labelText: {
            standardDeviations: "StandardDeviations",
            medianLineColor: "MedianLineColor"
        }
    }, {
        id: "bollinger",
        labelId: "IndicatorBollinger",
        isUpper: !0,
        category: "momentum",
        style: {
            fillColor: "rgba(0,148,135,0.1)",
            lineColor: "#009487",
            lineColorSMA: "#9D9D9D",
            lineWidth: 1
        },
        inputs: [{
            name: "period",
            value: 20
        }, {
            name: "standardDeviations",
            value: 2
        }],
        labelText: {
            standardDeviations: "StandardDeviations",
            lineColor: "BandColor",
            lineColorSMA: "MovingAverageColor"
        }
    }, {
        id: "bollingerbandwidth",
        labelId: "IndicatorBollingerBandWidth",
        isUpper: !1,
        category: "momentum",
        inputs: [{
            name: "period",
            value: 20
        }, {
            name: "standardDeviations",
            value: 2
        }],
        style: {
            lineColor: "#4B7BBB",
            lineWidth: 2
        },
        labelText: {
            standardDeviations: "StandardDeviations",
            lineColor: "LineColor"
        }
    }, {
        id: "chaikins",
        labelId: "IndicatorChaikins",
        isUpper: !1,
        category: "momentum",
        inputs: [{
            name: "EMAPeriod",
            value: 10
        }, {
            name: "DifferencePeriod",
            value: 10
        }],
        style: {
            lineColor: "#2496F1",
            lineWidth: 2
        },
        labelText: {
            DifferencePeriod: "DifferencePeriod",
            EMAPeriod: "EMAPeriod"
        }
    }, {
        id: "dividendyield",
        labelId: "IndicatorDivYield",
        isUpper: !1,
        category: "fundamental",
        style: {
            lineColor: "#04BBD3",
            lineWidth: 2
        }
    }, {
        id: "dmi",
        labelId: "IndicatorDMI",
        isUpper: !1,
        category: "trend",
        inputs: [{
            name: "period",
            value: 14
        }],
        style: {
            lineWidthADX: 2,
            lineColorADX: "#9D9D9D",
            lineColorDINeg: "#04BBD3",
            lineColorDIPos: "#F98254"
        },
        swatchColors: ["lineColorDIPos", "lineColorDINeg"],
        labelText: {
            lineColorDINeg: "-DI",
            lineColorDIPos: "+DI",
            lineColorADX: "ADX"
        },
        styleExcluded: ["lineColorADXR"],
        sliderParams: {
            lineWidth: "lineWidthADX",
            lineColor: "lineColorADX"
        }
    }, {
        id: "ema",
        labelId: "IndicatorEMA",
        isUpper: !0,
        category: "trend",
        inputs: [{
            name: "period",
            value: 20
        }],
        style: {
            lineColor: "auto",
            lineWidth: 1
        }
    }, {
        id: "stochastics",
        templateId: "faststochastics",
        labelId: "IndicatorFastStoch",
        isUpper: !1,
        category: "momentum",
        style: {
            lineColor: "#192F41",
            lineColorD: "#04BBD3",
            lineWidth: 2
        },
        swatchColors: ["lineColor", "lineColorD"],
        inputs: [{
            name: "kperiod",
            value: 14
        }, {
            name: "smoothing",
            value: 1
        }, {
            name: "dperiod",
            value: 3
        }],
        inputsExcluded: ["smoothing"],
        labelText: {
            dperiod: "DPeriod",
            kperiod: "KPeriod",
            lineColorD: "DPeriod",
            smoothing: "Smoothing"
        },
        bands: [{
            labelText: "Overbought",
            style: {
                labelColor: "#999999",
                fillColor: "rgba(0,192,47,0.1)",
                lineColor: "rgba(0,192,47,0.1)"
            }
        }, {
            labelText: "Oversold",
            style: {
                labelColor: "#999999",
                fillColor: "rgba(253,0,0,0.1)",
                lineColor: "rgba(253,0,0,0.1)"
            }
        }]
    }, {
        id: "highlow",
        labelId: "IndicatorHighLow",
        isUpper: !0,
        category: "trend",
        heightMenu: 290,
        style: {
            highColor: "#9D9D9D",
            lowColor: "#9D9D9D"
        },
        inputsExcluded: ["extentType"],
        styleExcluded: ["glowColor"],
        swatchColors: ["highColor", "lowColor"]
    }, {
        id: "ichimokucloud",
        labelId: "IndicatorIchimokuCloud",
        isUpper: !0,
        category: "trend",
        style: {
            lineColorChikouSpan: "#FE6262",
            lineColorKijunSen: "#FF9898",
            lineColorSenkouSpanA: "green",
            lineColorSenkouSpanB: "red",
            lineColorTenkanSen: "#66FFF2",
            lineWidthChikouSpan: 1.25,
            lineWidthKijunSen: 1.25,
            lineWidthSenkouSpanA: 1.25,
            lineWidthSenkouSpanB: 1.25,
            lineWidthTenkanSen: 1.25,
            fillColorSenkouPos: "rgba(73, 184, 64, 0.3)",
            fillColorSenkouNeg: "rgba(255, 0, 0, 0.2)"
        },
        inputs: [{
            name: "fastPeriod",
            value: 9
        }, {
            name: "mediumPeriod",
            value: 26
        }, {
            name: "slowPeriod",
            value: 52
        }, {
            name: "displacementCloud",
            value: 26
        }],
        labelText: {
            fastPeriod: "FastPeriod",
            mediumPeriod: "MediumPeriod",
            slowPeriod: "SlowPeriod",
            displacementCloud: "DisplacementCloud",
            lineColorChikouSpan: "LineColorChikouSpan",
            lineColorKijunSen: "LineColorKijunSen",
            lineColorSenkouSpanA: "LineColorSenkouSpanA",
            lineColorSenkouSpanB: "LineColorSenkouSpanB",
            lineColorTenkanSen: "LineColorTenkanSen",
            fillColorSenkouPos: "FillColorSenkouPos",
            fillColorSenkouNeg: "FillColorSenkouNeg"
        },
        opacityStyle: {
            fillColorSenkouPos: .3,
            fillColorSenkouNeg: .3
        }
    }, {
        id: "rollingdividend",
        labelId: "IndicatorHistoricalDiv",
        isUpper: !1,
        noOverlays: !1,
        category: "fundamental",
        style: {
            lineColor: "#04BBD3",
            lineWidth: 2
        }
    }, {
        id: "linearregression",
        labelId: "IndicatorLR",
        isUpper: !0,
        category: "trend",
        style: {
            lineColor: "auto",
            lineWidth: 1
        }
    }, {
        id: "macd",
        labelId: "IndicatorMACD",
        isUpper: !1,
        category: "momentum",
        style: {
            lineColor: "#2496F1",
            lineColorEMA: "#F98254",
            fillColorPos: "#00C02F",
            fillColorNeg: "#FD0000",
            lineWidth: 2
        },
        swatchColors: ["lineColor", "lineColorEMA"],
        inputs: [{
            name: "fastperiod",
            value: 12
        }, {
            name: "slowperiod",
            value: 26
        }, {
            name: "smoothing",
            value: 9
        }],
        labelText: {
            lineColorEMA: "EMAColor",
            lineColor: "MACDColor",
            slowperiod: "SlowPeriod",
            fastperiod: "FastPeriod",
            smoothing: "Smoothing"
        }
    }, {
        id: "mae",
        labelId: "IndicatorMAE",
        isUpper: !0,
        category: "trend",
        labelText: {
            percent: "Percent"
        },
        style: {
            lineColor: "#76C147",
            fillColor: "rgba(118,193,71,0.1)",
            lineWidth: 1
        },
        inputs: [{
            name: "period",
            value: 20
        }, {
            name: "highfactor",
            value: 1.05
        }, {
            name: "lowfactor",
            value: .95
        }],
        inputsExcluded: ["lowfactor", "highfactor", "averagetype"],
        inputsCombined: [{
            id: "percent",
            getValue: function(a) {
                var b = a.getInput("lowfactor");
                return Math.round(100 * (1 - b))
            },
            setValue: function(a, b) {
                a = Math.min(100, a), a = Math.max(1, a), a /= 100, b.setInput("lowfactor", 1 - a), b.setInput("highfactor", 1 + a)
            }
        }]
    }, {
        id: "massindex",
        labelId: "IndicatorMassIndex",
        isUpper: !1,
        category: "momentum",
        inputs: [{
            name: "period",
            value: 25
        }],
        style: {
            lineColor: "#4B7BBB",
            lineColorSetup: "#E220A8",
            lineColorTrigger: "#009487",
            lineWidth: 2
        },
        labelText: {
            lineColor: "MassIndexColor",
            lineColorSetup: "SetupLineColor",
            lineColorTrigger: "TriggerLineColor"
        }
    }, {
        id: "momentum",
        labelId: "IndicatorMomentum",
        isUpper: !1,
        category: "momentum",
        inputs: [{
            name: "period",
            value: 20
        }],
        style: {
            lineWidth: 2,
            lineColor: "#F98254",
            fillColor: "rgba(250,131,84,0.1)"
        }
    }, {
        id: "moneyflow",
        labelId: "IndicatorMoneyFlow",
        isUpper: !1,
        category: "volume",
        style: {
            lineColor: "#9D9D9D",
            lineWidth: 2
        }
    }, {
        id: "moneyflowindex",
        labelId: "IndicatorMoneyFlowIndex",
        isUpper: !1,
        category: "volume",
        inputs: [{
            name: "period",
            value: 14
        }],
        style: {
            lineColor: "#192F41",
            lineWidth: 2
        },
        bands: [{
            labelText: "Overbought",
            style: {
                labelColor: "#999999",
                fillColor: "rgba(253,0,0,0.1)",
                lineColor: "rgba(253,0,0,0.1)"
            }
        }, {
            labelText: "Oversold",
            style: {
                labelColor: "#999999",
                fillColor: "rgba(0,192,47,0.1)",
                lineColor: "rgba(0,192,47,0.1)"
            }
        }]
    }, {
        id: "onbalancevolume",
        labelId: "IndicatorOBV",
        isUpper: !1,
        category: "volume",
        style: {
            lineColor: "#9D9D9D",
            lineWidth: 2
        }
    }, {
        id: "pricechannel",
        labelId: "IndicatorPriceChannel",
        isUpper: !0,
        category: "trend",
        inputs: [{
            name: "period",
            value: 20
        }],
        style: {
            lineColor: "#DD4BF9",
            fillColor: "rgba(221,75,249,0.1)",
            lineWidth: 1
        }
    }, {
        id: "price",
        labelId: "IndicatorPrice",
        isUpper: !0,
        style: {
            lineColor: "#2496F1",
            lineColorUp: "#00C02F",
            lineColorDown: "#FD0000",
            lineWidth: 2,
            fillColor: "rgba(95, 179, 241, 0.13)",
            diameterDot: 3,
            fillColorDot: "#2496F1",
            fillColorNeg: "#FD0000",
            fillColorPos: "#00C02F",
            lineColorDot: "#2496F1",
            penPxOnSessionBreak: 1,
            penPxOffSessionBreak: 2
        }
    }, {
        id: "proc",
        labelId: "IndicatorPROC",
        isUpper: !1,
        category: "momentum",
        inputs: [{
            name: "period",
            value: 14
        }],
        style: {
            lineColor: "#4B7BBB",
            lineWidth: 2
        },
        labelText: {
            lineColor: "PROCColor"
        }
    }, {
        id: "psar",
        labelId: "IndicatorPSAR",
        isUpper: !0,
        category: "trend",
        inputs: [{
            name: "initialPosition",
            value: 0
        }, {
            name: "accelerationIncrease",
            value: .02
        }, {
            name: "accelerationMaximum",
            value: .02
        }],
        style: {
            lineColor: "auto"
        },
        inputsExcluded: ["initialPosition"],
        labelText: {
            accelerationIncrease: "AccelerationIncrease",
            accelerationMaximum: "AccelerationMaximum"
        }
    }, {
        id: "rsi",
        labelId: "IndicatorRSI",
        isUpper: !1,
        category: "momentum",
        inputs: [{
            name: "period",
            value: 14
        }],
        style: {
            lineColor: "#192F41",
            lineWidth: 2
        },
        bands: [{
            labelText: "Overbought",
            style: {
                labelColor: "#999999",
                fillColor: "rgba(253,0,0,0.1)",
                lineColor: "rgba(253,0,0,0.1)"
            }
        }, {
            labelText: "Oversold",
            style: {
                labelColor: "#999999",
                fillColor: "rgba(0,192,47,0.1)",
                lineColor: "rgba(0,192,47,0.1)"
            }
        }]
    }, {
        id: "stochastics",
        templateId: "slowstochastics",
        labelId: "IndicatorSlowStoch",
        isUpper: !1,
        category: "momentum",
        style: {
            lineColor: "#192F41",
            lineColorD: "#04BBD3",
            lineWidth: 2
        },
        swatchColors: ["lineColor", "lineColorD"],
        inputs: [{
            name: "kperiod",
            value: 14
        }, {
            name: "smoothing",
            value: 3
        }, {
            name: "dperiod",
            value: 3
        }],
        inputsExcluded: ["smoothing"],
        labelText: {
            dperiod: "DPeriod",
            kperiod: "KPeriod",
            lineColorD: "DPeriod",
            smoothing: "Smoothing"
        },
        bands: [{
            labelText: "Overbought",
            style: {
                labelColor: "#999999",
                fillColor: "rgba(0,192,47,0.1)",
                lineColor: "rgba(0,192,47,0.1)"
            }
        }, {
            labelText: "Oversold",
            style: {
                labelColor: "#999999",
                fillColor: "rgba(253,0,0,0.1)",
                lineColor: "rgba(253,0,0,0.1)"
            }
        }]
    }, {
        id: "sma",
        labelId: "IndicatorSMA",
        isUpper: !0,
        category: "trend",
        inputs: [{
            name: "period",
            value: 20
        }],
        style: {
            lineColor: "auto",
            lineWidth: 1
        }
    }, {
        id: "tsf",
        labelId: "IndicatorTSF",
        isUpper: !0,
        category: "trend",
        inputs: [{
            name: "period",
            value: 20
        }],
        style: {
            lineColor: "auto",
            lineWidth: 1
        }
    }, {
        id: "ultimateoscillator",
        labelId: "IndicatorUO",
        isUpper: !1,
        category: "momentum",
        inputs: [{
            name: "period1",
            value: 7
        }, {
            name: "period2",
            value: 14
        }, {
            name: "period3",
            value: 28
        }, {
            name: "factor1",
            value: 4
        }, {
            name: "factor2",
            value: 2
        }, {
            name: "factor3",
            value: 1
        }],
        style: {
            lineColor: "#192F41",
            lineWidth: 2
        },
        labelText: {
            factor1: "Factor1",
            factor2: "Factor2",
            factor3: "Factor3",
            period1: "Period1",
            period2: "Period2",
            period3: "Period3"
        },
        bands: [{
            labelText: "Overbought",
            style: {
                labelColor: "#999999",
                fillColor: "rgba(253,0,0,0.1)",
                lineColor: "rgba(253,0,0,0.1)"
            }
        }, {
            labelText: "Oversold",
            style: {
                labelColor: "#999999",
                fillColor: "rgba(0,192,47,0.1)",
                lineColor: "rgba(0,192,47,0.1)"
            }
        }]
    }, {
        id: "volume",
        labelId: "IndicatorVolume",
        isUpper: !1,
        category: "volume",
        markerType: "posneg",
        style: {
            fillColorPos: "#00C02F",
            fillColorNeg: "#FD0000",
            fillColorUnch: "#999999"
        },
        styleInputMap: {
            fillColorPos: "fillColorUp",
            fillColorNeg: "fillColorDown",
            fillColorUnch: "fillColorNeutral"
        },
        swatchColors: ["fillColorPos", "fillColorNeg"],
        styleExcluded: ["fillColorUnch"]
    }, {
        id: "volumebyprice",
        labelId: "IndicatorVBP",
        isUpper: !0,
        category: "volume",
        inputs: [{
            name: "numBars",
            value: 12
        }],
        style: {
            upColor: "rgba(0,192,47,0.6)",
            downColor: "rgba(253,0,0,0.6)"
        },
        inputsExcluded: ["barWidth", "gapSize"],
        labelText: {
            numBars: "NumberOfBars",
            upColor: "PositiveVolume",
            downColor: "NegativeVolume"
        },
        opacityStyle: {
            upColor: .6,
            downColor: .6
        },
        swatchColors: ["upColor", "downColor"]
    }, {
        id: "vroc",
        labelId: "IndicatorVROC",
        isUpper: !1,
        category: "volume",
        inputs: [{
            name: "period",
            value: 10
        }],
        style: {
            lineColor: "#F98254",
            lineColorZero: "#FCD32E",
            lineWidth: 2
        },
        swatchColors: ["lineColor", "lineColorZero"],
        labelText: {
            lineColor: "VROCColor"
        }
    }, {
        id: "williamspctr",
        labelId: "IndicatorWilliams",
        isUpper: !1,
        category: "momentum",
        inputs: [{
            name: "period",
            value: 14
        }],
        bands: [{
            labelText: "Overbought",
            style: {
                labelColor: "#999999",
                fillColor: "rgba(253,0,0,0.1)",
                lineColor: "rgba(253,0,0,0.1)"
            }
        }, {
            labelText: "Oversold",
            style: {
                labelColor: "#999999",
                fillColor: "rgba(0,192,47,0.1)",
                lineColor: "rgba(0,192,47,0.1)"
            }
        }],
        style: {
            lineColor: "#192F41",
            lineWidth: 2
        }
    }, {
        id: "wma",
        labelId: "IndicatorWMA",
        isUpper: !0,
        category: "trend",
        inputs: [{
            name: "period",
            value: 20
        }],
        style: {
            lineColor: "auto",
            lineWidth: 1
        }
    }], b.Layout = function(a) {
        this.core = a, this.$el = {}, this.menus = {}, this.state = {}, this.theme = this.getTheme()
    }, b.Layout.prototype.setEventHandlersCommon = function() {
        var b = this;
        this.$el.container.find(".chartworks-pane-chart").on("click keypress", ".chartworks-legend-caret, .chartworks-legend-row span", function(c) {
            if ("keypress" === c.type && 13 !== c.which) return !0;
            var d = a(this).parents(".modcharts-legend"),
                e = b.core.chart.getPanelByUID(d.attr("uid"));
            if (d.hasClass("chartworks-legend-expanded") || e && e.indicators.length > 1) {
                d.toggleClass("chartworks-legend-expanded");
                var f = a(this).parents(".modcharts-panel").find(".chartworks-legend-indicators");
                d.hasClass("chartworks-legend-expanded") ? (f.show(), f.focus()) : f.hide()
            }
        })
    }, b.Layout.prototype.closeMenus = function() {
        a.each(this.menus, function() {
            this.close()
        }), this.toolbar && (this.toolbar.unselectToolbarAddition(), this.toolbar.update())
    }, b.Layout.prototype.removeMenus = function() {
        this.closeMenus(), this.menus = {}
    }, b.Layout.prototype.getTheme = function() {
        var c = {},
            d = this.core.clientParams["style.palette"];
        switch (this.core.clientParams.theme) {
            case "dark":
                c = new b.DarkTheme(this);
                break;
            default:
                c = new b.LightTheme(this)
        }
        return "object" == typeof d && d.length && c.params.style && c.params.style.swatchColors && a.extend(c.params.style.swatchColors, d), c
    }, b.Layout.prototype.isEnterOrClick = function(a) {
        return "click" === a.type || 13 === a.which
    }, b.Layout.prototype.getNewLineColor = function(b) {
        var c = this.theme.params.style.swatchColors,
            d = this.core.chart.getNewLineColor(b);
        return a.inArray(d, c) === -1 && (d = c[Math.floor(Math.random() * c.length)]), d
    }, b.Layout.prototype.getThemeIndicators = function() {
        var b = this.theme.getIndicators(),
            c = this,
            d = {};
        a.each(b, function(b, e) {
            d = c.core.filterIndicators({
                id: e.templateId || e.id
            }), a.extend(!0, d, e)
        })
    }, b.Layout.prototype.getLocaleIndicators = function() {
        var b = this.core.locale.indicators || [],
            c = this,
            d = {};
        a.each(b, function(b, e) {
            d = c.core.filterIndicators({
                id: e.templateId || e.id
            }), a.extend(!0, d, e)
        })
    }, b.Layout.prototype.translateContent = function(b) {
        var c = this;
        b.find("[data-translate]").each(function() {
            a(this).html(c.core.translate(a(this).data("translate")))
        }), b.find("[data-translate-placeholder]").each(function() {
            a(this).attr("placeholder", c.core.translate(a(this).data("translate-placeholder")))
        }), b.find("[data-translate-title]").each(function() {
            a(this).attr("title", c.core.translate(a(this).data("translate-title")))
        })
    }, b.Layout.prototype.getAttributionValue = function() {
        var a = this.core.clientParams["feature.attribution.value"] || this.core.translate("ChartByChartworks");
        return a.replace("{0}", '<a target="_blank" href="https://www.chartworks.io">Chartworks</a>')
    }, b.LargeLayout = function(a) {
        this.superclass.call(this, a), this.toolbar = new b.Toolbar(this)
    }, b.Extend(b.LargeLayout, b.Layout), b.LargeLayout.prototype.init = function() {
        this.$el.container = a(this.core.clientParams.target || "body"), this.getContent(), this.$el.core = this.$el.container.find(".chartworks-core").eq(0), this.toolbar.init(), this.setEventHandlers()
    }, b.LargeLayout.prototype.setEventHandlers = function() {
        this.setEventHandlersCommon();
        var c = this;
        a("body").on("click", function(b) {
            0 === a(b.target).parents(".chartworks-menu").length && c.closeMenus()
        }), a("body").on("keydown", function(a) {
            27 === a.which && c.closeMenus()
        }), this.$el.core.on("click", ".chartworks-menu-modal", function(a) {
            return a.stopPropagation(), a.preventDefault(), !1
        }), a(window).resize(function() {
            window.clearTimeout(c.resizeTimeout), c.menus.dialog && c.menus.dialog.state.open && (c.resizeTimeout = window.setTimeout(function() {
                c.menus.dialog.updatePosition()
            }, 10))
        }), this.$el.core.find(".chartworks-pane-chart").on("click keypress", ".chartworks-legend-label,.chartworks-legend-swatch", function(d) {
            if ("keypress" === d.type && 13 !== d.which) return !0;
            d.preventDefault();
            var e = a(this).parent().attr("indicatorUID"),
                f = "editindicator-" + e,
                g = a(this).parent().attr("templateId");
            if ("price" !== g || c.core.clientParams["feature.indicators.editColors"] !== !1) {
                if (!c.menus[f]) {
                    var h = {},
                        i = c.core.chart.getIndicatorByUID(e);
                    "price" === i.params.id && (h.height = 340), c.menus[f] = new b.EditIndicatorMenu(c, e), c.menus[f].init(null, h)
                }
                c.menus[f].toggle(), c.menus[f].params.$el.focus()
            }
            return !1
        }), this.$el.core.find(".chartworks-toolpalette").on("mousedown", "li", function() {
            a(".chartworks-toolpalette li").removeClass("chartworks-tool-selected"), a(this).addClass("chartworks-tool-selected");
            var b = a(this).attr("toolId");
            switch (b) {
                case "crosshair":
                    c.core.chart.setToolMode(null);
                    break;
                default:
                    c.core.chart.setToolMode(b)
            }
            c.core.chart.render()
        }), this.$el.core.find(".chartworks-toolbar-share").on("click keypress", function(a) {
            if ("keypress" === a.type && 13 !== a.which) return !0;
            var b = c.core.clientParams.onShare;
            b && (c.core.updateModchartsMetaData(), c.core.chart.save(!1, "Shared_0", function(a) {
                b.call(c.core, {
                    chartID: a
                })
            }))
        })
    }, b.LargeLayout.prototype.getContent = function() {
        var a = this.core.clientParams,
            b = this.$el.container;
        b.append(this.getTemplate()), b.find(".chartworks-core").addClass("chartworks-locale-" + this.core.locale.id), this.translateContent(b), a["feature.symbolSearch"] === !1 && b.find(".chartworks-feature-symbolsearch").remove(), a["feature.comparison"] === !1 && b.find(".chartworks-feature-comparison").remove(), a["feature.indicators"] === !1 && b.find(".chartworks-feature-indicators").remove(), a["feature.events"] === !1 && b.find(".chartworks-feature-events").remove(), a["feature.comparison"] === !1 && a["feature.indicators"] === !1 && a["feature.events"] === !1 && b.find(".chartworks-toolbar-compareicon").remove(), a["feature.timeframe"] === !1 && (b.find(".chartworks-feature-timeframe").remove(), b.find(".chartworks-feature-frequency").remove()), a["feature.frequency"] === !1 && b.find(".chartworks-feature-frequency").remove(), a["feature.markerType"] === !1 && b.find(".chartworks-feature-markertype").remove(), a["feature.share"] || b.find(".chartworks-feature-share").remove(), a["feature.saveLoad"] || a["feature.saveLoadCharts"] || a["feature.saveLoadTemplates"] || b.find(".chartworks-feature-saveload").remove(), a["feature.tools"] === !1 && (b.find(".chartworks-feature-tools").remove(), b.find(".chartworks-modcharts-core").addClass("chartworks-modcharts-core-wide")), b.find(".chartworks-attribution").html(this.getAttributionValue()), a["feature.settings"] !== !0 && b.find(".chartworks-feature-settings").remove(), a["feature.symbolSearch"] === !1 && a["feature.comparison"] === !1 && a["feature.indicators"] === !1 && a["feature.events"] === !1 && a["feature.markerType"] === !1 && a["feature.saveLoad"] === !1 && b.find(".chartworks-pane-toolbar").remove(), this.theme.getContent(b.find(".chartworks-core")), this.getThemeIndicators(), this.getLocaleIndicators()
    }, b.LargeLayout.prototype.getTemplate = function() {
        return '\t\t<div class="chartworks-core chartworks-size-large">\t\t\t<div class="chartworks-pane-toolbar chartworks-noselect" tabindex="-1">\t\t\t\t<ul class="chartworks-toolbar-group chartworks-feature-saveload">\t\t\t\t\t<li class="chartworks-toolbar-saveloadicon chartworks-sprite chartworks-sr-text" tabindex="0">Save and Load</li>\t\t\t\t</ul>\t\t\t\t<div class="chartworks-toolbar-additions">\t\t\t\t\t<ul class="chartworks-toolbar-group chartworks-feature-symbolsearch">\t\t\t\t\t\t<li class="chartworks-toolbar-searchicon chartworks-sprite"></li>\t\t\t\t\t\t<li class="chartworks-toolbar-search" tabindex="0"></li>\t\t\t\t\t</ul>\t\t\t\t\t<ul class="chartworks-toolbar-group">\t\t\t\t\t\t<li class="chartworks-toolbar-compareicon chartworks-sprite"></li>\t\t\t\t\t\t<li class="chartworks-toolbar-addcomparison chartworks-feature-comparison" tabindex="0"><span data-translate="Comparison"></span></li>\t\t\t\t\t\t<li class="chartworks-toolbar-addindicator chartworks-feature-indicators" tabindex="0"><span data-translate="Indicator"></span></li>\t\t\t\t\t\t<li class="chartworks-toolbar-addevent chartworks-feature-events" tabindex="0"><span data-translate="Event"></span></li>\t\t\t\t\t</ul>\t\t\t\t</div>\t\t\t\t<ul class="chartworks-toolbar-group chartworks-toolbar-group-last">\t\t\t\t\t<li class="chartworks-toolbar-timeframe chartworks-feature-timeframe" tabindex="0"><div class="chartworks-sprite"></div><span></span></li>\t\t\t\t\t<li class="chartworks-toolbar-frequency chartworks-feature-frequency" tabindex="0"><div class="chartworks-sprite"></div><span></span></li>\t\t\t\t\t<li class="chartworks-toolbar-markertype chartworks-feature-markertype" rowid="fill" tabindex="0"><div class="chartworks-sprite"></div><span></span></li>\t\t\t\t\t<li class="chartworks-toolbar-share chartworks-feature-share" tabindex="0"><span data-translate="Share"></span></li>\t\t\t\t</ul>\t\t\t\t<div class="chartworks-feature-settings" tabindex="0"><div class="chartworks-sprite chartworks-sr-text">Settings</div></div>\t\t\t</div>\t\t\t<div class="chartworks-pane-chart">\t\t\t\t<ul class="chartworks-toolpalette chartworks-feature-tools">\t\t\t\t\t<li toolId="crosshair" data-translate-title="Crosshair" class="chartworks-tool-selected"></li>\t\t\t\t\t<li toolId="text" data-translate-title="Text"></li>\t\t\t\t\t<li toolId="line" data-translate-title="Trendline"></li>\t\t\t\t\t<li toolId="horizontal" data-translate-title="HorizontalLine"></li>\t\t\t\t\t<li toolId="ray" data-translate-title="Ray"></li>\t\t\t\t\t<li toolId="extended" data-translate-title="ExtendedLine"></li>\t\t\t\t\t<li toolId="arrow" data-translate-title="Arrow"></li>\t\t\t\t\t<li toolId="ellipse" data-translate-title="Ellipse"></li>\t\t\t\t\t<li toolId="rect" data-translate-title="Rectangle"></li>\t\t\t\t\t<li toolId="fibonacci" data-translate-title="FibonacciRetracement"></li>\t\t\t\t\t<li toolId="fibarc" data-translate-title="FibonacciArc"></li>\t\t\t\t\t<li toolId="fibcircle" data-translate-title="FibonacciCircle"></li>\t\t\t\t\t<li toolId="gannfan" data-translate-title="GannFan"></li>\t\t\t\t</ul>\t\t\t\t<div class="chartworks-modcharts-core"></div>\t\t\t\t<div class="chartworks-attribution"></div>\t\t\t</div>\t\t</div>';
    }, b.LargeLayout.prototype.getModchartsPanelParams = function(a) {
        return this.core.clientParams["feature.tools"] === !1 && (a.style.gridColorBorderLeft = a.style.gridColorBorderTop), a
    }, b.SmallLayout = function(a) {
        this.superclass.call(this, a), this.toolbar = new b.Toolbar(this)
    }, b.Extend(b.SmallLayout, b.Layout), b.SmallLayout.prototype.init = function() {
        this.$el.container = a(this.core.clientParams.target), this.getContent(), this.$el.core = this.$el.container.find(".chartworks-core").eq(0), this.toolbar.init(), this.setEventHandlers()
    }, b.SmallLayout.prototype.setTimeframeContent = function(b) {
        var c = this.core,
            d = c.clientParams["feature.small.timeframes"],
            e = b.find(".chartworks-toolbar-group-days"),
            f = this.core.clientParams["feature.intraday"],
            g = "boolean" == typeof f && !f;
        a.each(d, function() {
            var b = c.getChartDays(this);
            if (b) {
                if (g && b <= 21) return !0;
                a("<li/>").attr("data-translate", this).attr("days", b).attr("tabindex", "0").appendTo(e)
            }
        });
        var h = e.find("li"),
            i = 100 / h.length;
        return h.each(function() {
            a(this).css("width", i + "%")
        }), b
    }, b.SmallLayout.prototype.getContent = function() {
        var a = this.$el.container,
            b = this.core.clientParams["feature.small.comparison"],
            c = this.core.clientParams["feature.small.dataLegend"],
            d = b || c;
        a.append(this.getTemplate()), this.setTimeframeContent(a), this.translateContent(a), a.find(".chartworks-core").addClass("chartworks-locale-" + this.core.locale.id), d ? (b ? a.find(".chartworks-core").addClass("chartworks-feature-comparison") : a.find(".chartworks-pane-toolbar-lower .chartworks-toolbar-group").remove(), c || (a.find(".chartworks-pane-toolbar-lower .chartworks-legend-timestamp").remove(), a.find(".chartworks-pane-toolbar-lower .chartworks-legend-ohlc-item").remove())) : a.find(".chartworks-pane-toolbar-lower").remove(), a.find(".chartworks-attribution").html(this.getAttributionValue());
        var e = this.core.getChartDays(this.core.clientParams.timeframe || "1y");
        if ("session" === this.core.clientParams.persistentSettings && "string" == typeof this.core.clientParams.id && "string" == typeof sessionStorage.getItem(["chartworks", this.core.clientParams.id].join("-"))) {
            var f = JSON.parse(sessionStorage.getItem("chartworks-" + this.core.clientParams.id));
            e = f.params.days
        }
        a.find('li[days="' + e + '"]').addClass("chartworks-toolbar-item-selected"), this.theme.getContent(a.find(".chartworks-core")), (b || c) && a.find(".chartworks-pane-toolbar").addClass("chartworks-pane-toolbar-haslower"), this.getThemeIndicators(), this.getLocaleIndicators()
    }, b.SmallLayout.prototype.setEventHandlers = function() {
        function b(b, d) {
            var e = c.core.chart,
                f = c.core.getFrequencyByDays(b);
            c.core.layout.closeMenus(), e.setDays(b), e.setDataInterval(f.dataInterval), e.setDataPeriod(f.dataPeriod), e.loadData(), c.$el.container.find(".chartworks-toolbar-group li").removeClass("chartworks-toolbar-item-selected"), a(this).addClass("chartworks-toolbar-item-selected"), d ? c.$el.container.find('li[days="-1"]').addClass("chartworks-toolbar-item-selected") : c.$el.container.find('li[days="' + b + '"]').addClass("chartworks-toolbar-item-selected")
        }
        this.setEventHandlersCommon();
        var c = this;
        this.$el.container.find(".chartworks-toolbar-group-days").on("click keypress", "li", function(d) {
            if ("keypress" === d.type && 13 !== d.which) return !0;
            var e = a(this).attr("days");
            "-1" === e ? c.core.getInceptionDate(function(a) {
                c.core.chart.params.isMax = !0, b(a, !0)
            }) : b(e)
        }), this.$el.container.find(".chartworks-pane-toolbar").on("mousedown", "[tabindex=0]", function(b) {
            a(this).addClass("chartworks-hidefocus")
        }), this.$el.container.find(".chartworks-pane-toolbar").on("blur", "[tabindex=0]", function(b) {
            a(this).removeClass("chartworks-hidefocus")
        }), this.$el.container.find(".chartworks-pane-toolbar-lower").on("mousedown", "[tabindex=0]", function(b) {
            a(this).addClass("chartworks-hidefocus")
        }), this.$el.container.find(".chartworks-pane-toolbar-lower").on("blur", "[tabindex=0]", function(b) {
            a(this).removeClass("chartworks-hidefocus")
        })
    }, b.SmallLayout.prototype.getTemplate = function() {
        return '\t\t<div class="chartworks-core chartworks-size-small">\t\t\t<div class="chartworks-pane-toolbar">\t\t\t\t<ul class="chartworks-toolbar-group chartworks-toolbar-group-days chartworks-noselect">\t\t\t\t</ul>\t\t\t</div>\t\t\t<div class="chartworks-pane-toolbar-lower">\t\t\t\t<ul class="chartworks-toolbar-group">\t\t\t\t\t<li class="chartworks-toolbar-compareicon chartworks-sprite"></li>\t\t\t\t\t<li class="chartworks-toolbar-addcomparison" tabindex="0"><span data-translate="Comparison"></span></li>\t\t\t\t</ul>\t\t\t\t<div class="chartworks-legend-timestamp">\t\t\t\t</div>\t\t\t\t<div class="chartworks-legend-ohlc-item chartworks-legend-ohlc-close"><label data-translate="Close"></label>\t\t\t\t\t<span></span>\t\t\t\t</div>\t\t\t\t<div class="chartworks-legend-ohlc-item">C\t\t\t\t\t<span class="chartworks-legend-ohlc-c"></span>\t\t\t\t</div>\t\t\t\t<div class="chartworks-legend-ohlc-item">L\t\t\t\t\t<span class="chartworks-legend-ohlc-l"></span>\t\t\t\t</div>\t\t\t\t<div class="chartworks-legend-ohlc-item">H\t\t\t\t\t<span class="chartworks-legend-ohlc-h"></span>\t\t\t\t</div>\t\t\t\t<div class="chartworks-legend-ohlc-item">O\t\t\t\t\t<span class="chartworks-legend-ohlc-o"></span>\t\t\t\t</div>\t\t\t</div>\t\t\t<div class="chartworks-pane-chart">\t\t\t\t<div class="chartworks-modcharts-core"></div>\t\t\t\t<div class="chartworks-attribution"></div>\t\t\t</div>\t\t</div>'
    }, b.SmallLayout.prototype.getModchartsPanelParams = function(a) {
        return a.style.gridColorBorderLeft = a.style.gridColorBorderTop, a
    }, b.prototype.locales["en-AU"] = new b.Locale({
        id: "en-AU",
        modchartsLocale: {
            decimal: ".",
            thousands: ",",
            grouping: [3],
            currency: ["$", ""],
            dateTime: "%a %b %e %X %Y",
            time: "%H:%M:%S",
            periods: ["AM", "PM"],
            date: "%-d/%-m/%Y",
            shortDate: "%-d/%-m",
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        translations: {}
    }), b.prototype.locales["en-GB"] = new b.Locale({
        id: "en-GB",
        modchartsLocale: {
            decimal: ".",
            thousands: ",",
            grouping: [3],
            currency: ["$", ""],
            dateTime: "%a %b %e %X %Y",
            time: "%H:%M:%S",
            periods: ["AM", "PM"],
            date: "%-d/%-m/%Y",
            shortDate: "%-d/%-m",
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        translations: {}
    }), b.prototype.locales["en-US"] = new b.Locale({
        id: "en-US",
        modchartsLocale: null,
        translations: {
            "+DI": "+DI",
            "-DI": "-DI",
            "10d": "10d",
            "10Day": "10 Day",
            "10Year": "10 Year",
            "10y": "10yr",
            "15y": "15yr",
            "15Year": "15 Year",
            "20y": "20yr",
            "20Year": "20 Year",
            "15Minute": "15 Minute",
            "1d": "1d",
            "1Day": "1 Day",
            "1DayAgo": "1 day ago",
            "1Hour": "1 Hour",
            "1m": "1m",
            "1Minute": "1 Minute",
            "1Month": "1 Month",
            "1Year": "1 Year",
            "1y": "1yr",
            "20d": "20d",
            "20Day": "20 Day",
            "3m": "3m",
            "3Minute": "3 Minute",
            "3Month": "3 Month",
            "3Year": "3 Year",
            "3y": "3yr",
            "5d": "5d",
            "5Day": "5 Day",
            "5Minute": "5 Minute",
            "5Year": "5 Year",
            "5y": "5yr",
            "6m": "6m",
            "6Month": "6 Month",
            AccelerationIncrease: "Acceleration Increase",
            AccelerationMaximum: "Acceleration Maximum",
            AddOverlay: "Add Overlay",
            AddText: "Add Text",
            ADX: "ADX",
            AllIndicators: "All Indicators",
            AndMore: "and {0} more",
            AndMorePlural: "and {0} more",
            Area: "Area",
            Arrow: "Arrow",
            BandColor: "Band Color",
            Bar: "Bar",
            BarColor: "Bar Color",
            Cancel: "Cancel",
            Candlestick: "Candlestick",
            ChartByChartworks: "chart by {0}",
            ChartNotAvailable: "Chart not available",
            ChartSavedAs: "Chart saved as",
            Close: "Close",
            Color: "Color",
            Comparison: "Comparison",
            Crosshair: "Crosshair",
            Custom: "Custom",
            Daily: "Daily",
            DaysAgo: "{0} days ago",
            Delete: "Delete",
            DifferencePeriod: "Difference Period",
            Dividend: "Dividend",
            Dividends: "Dividends",
            Done: "Done",
            Dot: "Dot",
            DotColor: "Dot Color",
            DownColor: "Down Color",
            DPeriod: "D Period",
            Ellipse: "Ellipse",
            EMAColor: "EMA Color",
            EMAPeriod: "EMA Period",
            EnterNameChart: "Enter a name for this chart",
            EnterNameTemplate: "Enter a name for this template",
            Event: "Event",
            ExtendedLine: "Extended Line",
            Factor1: "Factor 1",
            Factor2: "Factor 2",
            Factor3: "Factor 3",
            FastPeriod: "Fast Period",
            FibonacciArc: "Fibonacci Arc",
            FibonacciCircle: "Fibonacci Circle",
            FibonacciRetracement: "Fibonacci Retracement",
            Frequency: "Frequency",
            Fundamental: "Fundamental",
            FundamentalDesc: "Fundamental indicators display data related to the underlying company or the valuation of the stock. They can be helpful indicators for longer term analyses. ",
            GannFan: "Gann Fan",
            HighColor: "High Color",
            HLC: "HLC",
            HorizontalLine: "Horizonal Line",
            Indicator: "Indicator",
            IndicatorADL: "Accumulation / Distribution (ADL)",
            IndicatorADLDesc: "A volume-based indicator that is a running tally of volume multiplied by a factor based on high, low, and closing prices in order to incorporate price strength.",
            IndicatorATR: "Average True Range",
            IndicatorATRDesc: "A volatility indicator that uses Open, High, Low, and Close prices in order to include intra-period movements and not just the close.",
            IndicatorAwesomeOscillator: "Awesome Oscillator",
            IndicatorAwesomeOscillatorDesc: "The Awesome Oscillator is a momentum indicator developed by Bill Williams. This oscillator is calculated using midpoint prices instead of closing prices and is the difference between the 5 and 34 period simple moving averages. Traders will use this indicator both as a confirmation of trend and to spot potential reversals.",
            IndicatorBollinger: "Bollinger Bands&reg;",
            IndicatorBollingerBandWidth: "Bollinger Bands Width",
            IndicatorBollingerBandWidthDesc: "Bollinger Bands Width is a measure of volatility. It is calculated by subtracting the lower band's price from the upper band and dividing the result by the middle band.",
            IndicatorBollingerDesc: "A momentum indicator that uses standard deviation from a moving average to define when price is relatively high or low.",
            IndicatorChaikins: "Chaikin's Volatility",
            IndicatorChaikinsDesc: "A measurement of price volatility using the high and low prices from each period.",
            IndicatorDivYield: "Dividend Yield",
            IndicatorDivYieldDesc: "Rolling 12-month dividends paid divided by the price for each period.",
            IndicatorDMI: "Directional Movement Index (DMI)",
            IndicatorDMIDesc: "Measure the strength and direction of trend. +DI and -DI can be used to determine trend direction and when the ADX is above 20, the trend is strong.",
            IndicatorEMA: "Exponential Moving Average (EMA)",
            IndicatorEMADesc: "This moving average places a greater emphasis on more recent prices.",
            IndicatorFastStoch: "Fast Stochastics",
            IndicatorFastStochDesc: "Compares the current price relative to its recent range, displayed as a percentage.",
            IndicatorHighLow: "High / Low Price",
            IndicatorHighLowDesc: "Marks the high and low price for the current time frame.",
            IndicatorHistoricalDiv: "Historical Dividend",
            IndicatorHistoricalDivDesc: "Dividend amounts are displayed as a bar on the day that they trade ex-dividend.",
            IndicatorIchimokuCloud: "Ichimoku Cloud",
            IndicatorIchimokuCloudDesc: "The Ichimoku Cloud uses moving averages to show support, resistance, momentum and trend directions.",
            IndicatorLR: "Linear Regression",
            IndicatorLRDesc: "This statistical calculation is used to find the slope of a trend.",
            IndicatorMACD: "MACD",
            IndicatorMACDDesc: "MACD compares two exponential moving averages to measure the momentum of the underlying security.",
            IndicatorMAE: "Moving Average Envelope",
            IndicatorMAEDesc: "Bands are placed a user defined percentage above and below a moving average.",
            IndicatorMassIndex: "Mass Index",
            IndicatorMassIndexDesc: "An indicator that seeks to identify trend reversals by using differences in high-low ranges.",
            IndicatorMomentum: "Momentum",
            IndicatorMomentumDesc: "A measurement of the rate of change of a security where anything above 100 is positive price momentum.",
            IndicatorMoneyFlow: "Money Flow",
            IndicatorMoneyFlowDesc: "A volume-based momentum indicator that uses price and volume to gauge the strength of a security's movement.",
            IndicatorMoneyFlowIndex: "Money Flow Index",
            IndicatorMoneyFlowIndexDesc: "A volume-weighted version of the RSI that uses price and volume to measure price strength.",
            IndicatorOBV: "On Balance Volume",
            IndicatorOBVDesc: "Measures the strength of buying and selling pressure. It keeps a running tally of volume that adds the volume on up days and subtracts volume on down days.",
            IndicatorPercentB: "Bollinger Band %B",
            IndicatorPercentBDesc: "%B quantifies a security's price relative to the upper and lower Bollinger Band.",
            IndicatorPriceChannel: "Price Channel",
            IndicatorPriceChannelDesc: "This indicator provides a visual display of high and low prices, adjusting upwards during an uptrend and downwards during a downtrend.",
            IndicatorPROC: "Price Rate of Change (PROC)",
            IndicatorPROCDesc: "Measures the percentage change in the price of a security over a selected time period.",
            IndicatorPSAR: "Parabolic SAR (PSAR)",
            IndicatorPSARDesc: "A trend-based strategy that uses price reversals to provide bullish and bearish indications.",
            IndicatorRSI: "Relative Strength Index (RSI)",
            IndicatorRSIDesc: "A momentum indicator that measures the strength of the recent movement in price.",
            IndicatorSlowStoch: "Slow Stochastics",
            IndicatorSlowStochDesc: "A smoothed version of the Fast Stochastics that compares the current price relative to its range.",
            IndicatorSMA: "Simple Moving Average (SMA)",
            IndicatorSMADesc: "The Simple Moving Average is a trend indicator that smoothes price movements by averaging prices across a window of data.",
            IndicatorTSF: "Time Series Forecast (TSF)",
            IndicatorTSFDesc: "A trend indicator that uses a rolling linear regression to forecast prices.",
            IndicatorUO: "Ultimate Oscillator",
            IndicatorUODesc: "A rate of change indicator that uses the weighted average of three different time periods in order to reduce the volatility of standard rate of change.",
            IndicatorVBP: "Volume by Price",
            IndicatorVBPDesc: "A bar chart displayed along the y-axis of a price chart showing the sum of volume traded at each price level.",
            IndicatorVolume: "Volume",
            IndicatorVolumeDesc: "A bar chart showing the number of shares traded during each period.",
            IndicatorVROC: "Volume Rate of Change (VROC)",
            IndicatorVROCDesc: "Measures the percent change in volume from one period to another.",
            IndicatorWilliams: "Williams %R",
            IndicatorWilliamsDesc: "Similar in calculation to the Stochastic Oscillator, %R compares current price to the high-low range and displays the result as a percentage.",
            IndicatorWMA: "Weighted Moving Average (WMA)",
            IndicatorWMADesc: "Like the EMA, the WMA is a moving average that places greater emphasis on more recent prices.",
            InsertText: "Insert Text",
            KPeriod: "K Period",
            Line: "Line",
            LineColor: "Line Color",
            LineThickness: "Line Thickness",
            LoadChart: "Load chart",
            Loading: "Loading",
            LoadTemplate: "Load template",
            LowColor: "Low Color",
            LowerIndicators: "Lower Indicators",
            MACDColor: "MACD Color",
            MassIndexColor: "Mass Index Color",
            MedianLineColor: "Median Line Color",
            Momentum: "Momentum",
            MomentumDesc: "Momentum indicators measure the speed with which a security gains or falls in price. Many investors use them to determine when a security is undervalued or overvalued compared to their recent trends.",
            Monthly: "Monthly",
            MovingAverageColor: "Moving Average Color",
            NegativeVolume: "Negative Volume",
            NoResultsFound: "No results found",
            NumberOfBars: "Number of Bars",
            OHLC: "OHLC",
            OK: "OK",
            Overbought: "Overbought",
            Oversold: "Oversold",
            Percent: "Percent",
            Period: "Period",
            Period1: "Period 1",
            Period2: "Period 2",
            Period3: "Period 3",
            PositiveVolume: "Positive Volume",
            PROCColor: "PROC Color",
            Ray: "Ray",
            Rectangle: "Rectangle",
            Remove: "Remove",
            RemovePanel: "Remove Panel",
            Save: "Save",
            SaveChart: "Save chart",
            SaveChartDesc: "Save all your chart settings including drawings, annotations, indicators, timeframe and styles for this specific symbol.",
            SaveTemplate: "Save template",
            SaveTemplateDesc: "Save your chart settings including indicators, timeframe and styles as a template.",
            SearchForComparison: "Search for a comparison symbol",
            SearchForIndicator: "Search for an indicator",
            SearchForSymbol: "Search for a symbol",
            SetupLineColor: "Setup Line Color",
            Share: "Share",
            SlowPeriod: "Slow Period",
            Smoothing: "Smoothing",
            Split: "Split",
            Splits: "Splits",
            StandardDeviations: "Standard Deviations",
            TemplateSavedAs: "Template saved as",
            Text: "Text",
            Today: "Today",
            Trend: "Trend",
            TrendDesc: "Trend is a simple concept that measures whether a security is going up in price, downwards in price, or sideways. Trend indicators fall into two categories; those like moving averages which measure the direction of the trend and those like the ADX which measure the strength of the trend. ",
            Trendline: "Trendline",
            TriggerLineColor: "Trigger Line Color",
            UpColor: "Up Color",
            UpperIndicators: "Upper Indicators",
            Volume: "Volume",
            VolumeDesc: "Volume measures the number of shares which trade during a selected period. Volume indicators typically combine volume with the change in price to measure the strength of momentum for a security.",
            VROCColor: "VROC Color",
            Weekly: "Weekly",
            Yesterday: "Yesterday",
            YourSavedChartsWill: "Your saved charts will be displayed here.",
            YourSavedTemplatesWill: "Your saved templates will be displayed here.",
            ytd: "YTD",
            ZeroLineColor: "Zero Line Color",
            Print: "Print",
            ShowExtendedHours: "Show Extended Hours",
            DownloadImage: "Download Image",
            Max: "Max",
            MeasurementLine: "Measurement Line",
            ShowIndicatorValues: "Show Indicator Values",
            ShowIndicatorFlags: "Show Indicator Flags",
            ResetChart: "Reset Chart",
            MediumPeriod: "Medium Period",
            DisplacementCloud: "Displacement Cloud",
            LineColorChikouSpan: "Chikou Span Line Color",
            LineColorKijunSen: "Kijun-sen Line Color",
            LineColorSenkouSpanA: "Senkou Span A Line Color",
            LineColorSenkouSpanB: "Senkou Span B Line Color",
            LineColorTenkanSen: "Tenkan-sen Line Color",
            FillColorSenkouPos: "Senkou Positive Fill Color",
            FillColorSenkouNeg: "Senkou Negative Fill Color"
        }
    }), b.prototype.locales["fr-CA"] = new b.Locale({
        id: "fr-CA",
        modchartsLocale: {
            decimal: ".",
            thousands: ",",
            grouping: [3],
            currency: ["$", ""],
            dateTime: "%a %b %e %X %Y",
            time: "%H:%M:%S",
            periods: ["AM", "PM"],
            date: "%-d/%-m/%Y",
            shortDate: "%-d/%-m",
            days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
            shortDays: ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"],
            months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
            shortMonths: ["janv", "fév", "mars", "avr", "mai", "juin", "juill", "août", "sept", "oct", "nov", "déc"]
        },
        translations: {
            "+DI": "+DI",
            "-DI": "-DI",
            "10d": "10 jours",
            "10Day": "10 jours",
            "10Year": "10 ans",
            "10y": "10 ans",
            "15Year": "15 ans",
            "15y": "15 ans",
            "20Year": "20 ans",
            "20y": "20 ans",
            "15Minute": "15 minutes",
            "1d": "1 jour",
            "1Day": "1 jour",
            "1DayAgo": "Il y a 1 jour",
            "1Hour": "1 heure",
            "1m": "1 mois",
            "1Minute": "1 minute",
            "1Month": "1 mois",
            "1Year": "1 an",
            "1y": "1 an",
            "20d": "20 jours",
            "20Day": "20 jours",
            "3m": "3 mois",
            "3Minute": "3 minutes",
            "3Month": "3 mois",
            "3Year": "3 ans",
            "3y": "3 ans",
            "5d": "5 jour",
            "5Day": "5 jours",
            "5Minute": "5 minutes",
            "5Year": "5 ans",
            "5y": "5 ans",
            "6m": "6 mois",
            "6Month": "6 mois",
            AccelerationIncrease: "Augmentation de l'accélération",
            AccelerationMaximum: "Accélération maximale",
            AddOverlay: "Ajouter un couverture",
            AddText: "Insérer un texte",
            ADX: "ADX",
            AllIndicators: "Tous les indicateurs",
            AndMore: "et {0} supplémentaire",
            AndMorePlural: "{0} supplémentaires",
            Area: "Zone",
            Arrow: "Flèche",
            BandColor: "Coleur de la bande",
            Bar: "Barre",
            BarColor: "Couleur de la barre",
            Cancel: "Annuler",
            Candlestick: "Chandelier",
            ChartByChartworks: "chart by {0}",
            ChartNotAvailable: "Graphique non disponible",
            ChartSavedAs: "Graphique sauvé",
            Close: "Cloture",
            Color: "Couleur",
            Comparison: "Comparaison",
            Crosshair: "Crosshair",
            Custom: "Personnaliser",
            Daily: "Tous les jours",
            DaysAgo: "Il y a {0} jours",
            Delete: "Effacer",
            DifferencePeriod: "Difference Period",
            Dividend: "Dividendes",
            Dividends: "Dividendes",
            Done: "Terminer",
            DoneInsertText: "Insérer",
            Dot: "Point",
            DotColor: "Coulour du point",
            DownColor: "Couleur négative",
            DPeriod: "Période D",
            Ellipse: "Ellipse",
            EMAColor: "EMA Color",
            EMAPeriod: "EMA Period",
            EnterNameChart: "Saisissez un nom pour ce graphique",
            EnterNameTemplate: "Saisissez un nom pour ce template",
            Event: "Evénements",
            ExtendedLine: "Ligne prolongée",
            Factor1: "Facteur 1",
            Factor2: "Facteur 2",
            Factor3: "Facteur 3",
            FastPeriod: "Période rapide",
            FibonacciArc: "Fibonacci Arc",
            FibonacciCircle: "Cercle de Fibonacci",
            FibonacciRetracement: "Fibonacci Retracement",
            Frequency: "Fréquence",
            Fundamental: "Fondamental",
            FundamentalDesc: "Les indicateurs fondamentaux affichent les données relatives à une société ou à la valorisation d'un instrument. Ils peuvent être utiles pour des analyses long termes",
            GannFan: "Eventail de Gann",
            HighColor: "Couleur haut",
            HLC: "HLC",
            HorizontalLine: "Ligne horizontale",
            Indicator: "Indicateur",
            IndicatorADL: "Accumulation/Distribution (ADL)",
            IndicatorADLDesc: "cet indicateur pondère les volumes en utilisant le cours de clôture rapporté aux points extrêmes de la journée. Il valide le mouvement en cours en évoluant dans la même direction que les cours. Une divergence entre les cours et l'Accumulation/Distribution est souvent un signal d'inversion de la tendance en cours.",
            IndicatorATR: "Average True Range",
            IndicatorATRDesc: "Un indicateur de volatilité qui utilise les valeurs Open, High, Low et Close afin d'inclure les mouvements intra-période et pas seulement le Close.",
            IndicatorAwesomeOscillator: "Awesome Oscillator",
            IndicatorAwesomeOscillatorDesc: "",
            IndicatorBollinger: "Bandes de Bollinger",
            IndicatorBollingerBandWidth: "Bandes de Bollinger Largeur",
            IndicatorBollingerBandWidthDesc: "Bollinger Bands Largeur est une mesure de la volatilité. Il est calculé en soustrayant le prix de la bande inférieure de la bande supérieure et en divisant le résultat par la bande du milieu.",
            IndicatorBollingerDesc: "Un indicateur de momentum qui utilise l'écart type à partir d'une moyenne mobile à définir quand le prix est relativement élevé ou faible.",
            IndicatorChaikins: "Volatilité de Chaikin",
            IndicatorChaikinsDesc: "Une mesure de la volatilité des prix utilisant les prix élevés et faibles de chaque période.",
            IndicatorDivYield: "Rendement du dividende",
            IndicatorDivYieldDesc: "Paiement des dividendes divisé par prix pour chaque période sur 12 mois",
            IndicatorDMI: "Directional Movement Index (DMI)",
            IndicatorDMIDesc: "L'indice ADX (Average Directional Movement Index) est basé sur un indice directionnel lissé. Il mesure l'intensité de tendance sans en indiquer la direction. Une ligne ascendante de l'ADX confirme la tendance, alors qu'un indicateur décroissant indique un affaiblissement de tendance ou une tendance qui s'inverse.",
            IndicatorEMA: "Exponential Moving Average (EMA)",
            IndicatorEMADesc: "Cette moyenne mobile met d'avantage l'accent sur les prix les plus récents.",
            IndicatorFastStoch: "Stochastique rapide",
            IndicatorFastStochDesc: "Compare le prix relatif courrant à ces changements récents, affiché en pourcentage",
            IndicatorHighLow: "High/Low Price",
            IndicatorHighLowDesc: "Marque le prix élevé et faible pour la période actuelle.",
            IndicatorHistoricalDiv: "Historique des dividendes",
            IndicatorHistoricalDivDesc: "Les dividends sont affiché sous la forme de barre le jour du trade ex-dividend",
            IndicatorLR: "Régression linéaire",
            IndicatorLRDesc: "Ce calcul statistique est utilisé pour trouver la pente d'une tendance.",
            IndicatorMACD: "MACD",
            IndicatorMACDDesc: "MACD représente l'écart des moyennes mobiles aux cours, et sa courbe se trace sur le graphique de l'évolution du cours",
            IndicatorMAE: "Moving Average Envelope",
            IndicatorMAEDesc: "Les bandes sont placées d'un pourcentage défini par l'utilisateur au-dessus et au-dessous d'une moyenne mobile.",
            IndicatorMassIndex: "Mass Index",
            IndicatorMassIndexDesc: "Un indicateur qui cherche à identifier les inversions de tendance en utilisant les différences dans les gammes haut-bas.",
            IndicatorMomentum: "Momentum",
            IndicatorMomentumDesc: "Une mesure de la vitesse de changement d'un titre où tout est supérieur à 100 est un price momentum positif",
            IndicatorMoneyFlow: "Money Flow ",
            IndicatorMoneyFlowDesc: "Indique les pressions d'achat et de vente. Quand le money flow reste largement au dessus de 0, il indique une pression acheteuse et vice-versa.",
            IndicatorMoneyFlowIndex: "Money Flow Index",
            IndicatorMoneyFlowIndexDesc: "Le principe est identique à celui du RSI avec les paramètres du volume en plus. Si le MFI franchit les 80, le titre est en surachat et une décrue des cours est attendue. Au contraire, si le MFI enfonce le seuil des 20, le titre est en survente et une reprise devrait avoir lieu.",
            IndicatorOBV: "On Balance Volume",
            IndicatorOBVDesc: "l'OBV donne de bons signaux de divergence. Une divergence haussière est obtenue quand la courbe des prix touche un nouveau plus bas alors que l'OBV reste au dessus de son précédent point le plus bas. Une divergence baissière est obtenue quand la courbe des prix touche un nouveau plus haut alors que l'OBV reste en dessous de son précédent point le plus haut.",
            IndicatorPercentB: "Bandes de Bollinger %B",
            IndicatorPercentBDesc: "%B quantifie le prix d'une les titre par rapport à la bande Bollinger supérieure et inférieure.",
            IndicatorPriceChannel: "Canal de Prix",
            IndicatorPriceChannelDesc: "This indicator provides a visual display of high and low prices, adjusting upwards during an uptrend and downwards during a downtrend.",
            IndicatorPROC: "Price Rate of Change (PROC)",
            IndicatorPROCDesc: 'Compare le cours de clôture du jour avec le cours de clôture "n" jours avant.',
            IndicatorPSAR: "Parabolic SAR (PSAR)",
            IndicatorPSARDesc: "Les points Stop and Reverse sont utiles pour détecter les tendances car ils suivent la direction des prix. Tout au long d'une tendance, la direction du SAR est toujours la même. Tant que les points restent au-dessus ou en-dessous des prix, la tendance se poursuit.",
            IndicatorRSI: "Relative Strength Index (RSI)",
            IndicatorRSIDesc: "Un indicateur de momentum qui mesure la force de récent changement de prix",
            IndicatorSlowStoch: "Stochastique lent",
            IndicatorSlowStochDesc: "Une version alégée des Stochastique rapide qui compare le prix actuel par rapport à sa gamme.",
            IndicatorSMA: "Moyenne mobile simple (SMA)",
            IndicatorSMADesc: "La moyenne mobile arithmétique.",
            IndicatorTSF: "Time Series Forecast (TSF) ",
            IndicatorTSFDesc: "Une suite de valeurs numériques représentant l'évolution d'une quantité spécifique au cours du temps",
            IndicatorUO: "Oscillateur final",
            IndicatorUODesc: "L’oscillateur final (Ultimate oscillator) combine un Momentum à court, moyen et long terme, pesant en faveur des valeurs à court-terme.",
            IndicatorVBP: "Volume par prix",
            IndicatorVBPDesc: "Un graphique à barres affiché le long de l'axe y d'un graphique des prix représentant la somme des volumes échangés à chaque niveau de prix.",
            IndicatorVolume: "Volume",
            IndicatorVolumeDesc: "Un graphique à barres indiquant le nombre d'actions échangées au cours de chaque période.",
            IndicatorVROC: "Volume Rate of Change (VROC)",
            IndicatorVROCDesc: "Cet indicateur montre la vitesse de changement du volume. Des points d'entrées à l'achat peuvent être mis en évidence quand des résistances présentes sur l'indicateur sont franchies. Il est également possible d'utiliser les divergences haussières ou baissières.",
            IndicatorWilliams: "Williams %R",
            IndicatorWilliamsDesc: "Williams' %R est un indicateur de surachat/survente. Les valeurs -80 et -20 peuvent être utilisées comme limite pour détecter des situations de surachat/survente.",
            IndicatorWMA: "Weighted Moving Average (WMA)",
            IndicatorWMADesc: "Comme l'EMA, la WMA est une moyenne mobile qui met d'avantage l'accent sur les prix les plus récents.",
            InsertText: "Insérer un texte",
            KPeriod: "Période K",
            Line: "Ligne",
            LineColor: "Couleur de la ligne",
            LineThickness: "Epaisseur de la ligne",
            LoadChart: "Charger un graphique",
            Loading: "Chargement",
            LoadTemplate: "Sélectioner un template",
            LowColor: "Couleur bas",
            LowerIndicators: "Lower Indicators",
            MACDColor: "Couleur de la ligne",
            MassIndexColor: "Mass Index Color",
            MedianLineColor: "Couleur de ligne médiane",
            Momentum: "Momentum",
            MomentumDesc: "Le momentum est un indicateur d'analyse technique qui permet de détecter des tendances à la hausse ou à la baisse pour les différents actifs",
            Monthly: "Mensuel",
            MovingAverageColor: "Couleur de la Moyenne mobile",
            NegativeVolume: "Volume négatif",
            NoResultsFound: "Pas de résultat",
            NumberOfBars: "Nombre de barres",
            OHLC: "OHLC",
            OK: "OK",
            Overbought: "Sur-achat",
            Oversold: "sur-vente",
            Percent: "Pourcent",
            Period: "Période",
            Period1: "Période 1",
            Period2: "Période 2",
            Period3: "Période 3",
            PositiveVolume: "Volume positif",
            PROCColor: "Couleur du PROC",
            Ray: "Rayon",
            Rectangle: "Rectangle",
            Remove: "Retirer",
            RemovePanel: "Retirer cet indicateur",
            Save: "Sauvegarder",
            SaveChart: "Sauvegarder le graphique",
            SaveChartDesc: "Sauvegarder tous les paramètre de votre graphique, incluant les annotations, indicateurs, fenêtre temporel, styles, etc. pour ce symbole",
            SaveTemplate: "Sauvegarder ce template",
            SaveTemplateDesc: "Sauvegarder les paramètre de votre graphique, incluant les indicateurs, fenêtre temporels et les styles en temps que template",
            SearchForComparison: "Rechercher un symbole de comparaison",
            SearchForIndicator: "Rechercher un indicateur",
            SearchForSymbol: "Rechercher un symbole",
            SetupLineColor: "Setup Line Color",
            Share: "Paratager ce graphique",
            SlowPeriod: "Période lente",
            Smoothing: "Lissage",
            Split: "Divisions",
            Splits: "Divisions",
            StandardDeviations: "Déviation standards",
            TemplateSavedAs: "Modèle enregistré en tant que",
            Text: "Texte",
            Today: "Aujourd'hui",
            Trend: "Tendance",
            TrendDesc: "La tendance est définie comme l'évolution future d'un cours d'actif",
            Trendline: "Ligne de tendance",
            TriggerLineColor: "Trigger Line Color",
            UpColor: "Couleur positive",
            UpperIndicators: "Upper Indicators",
            Volume: "Volume",
            VolumeDesc: "Volume mesure le nombre d'actions qui se négocient au cours d'une période sélectionnée. Les indicateurs de volume combinent généralement le volume avec le changement de prix afin de mesurer la force de l'élan pour une sécurité.",
            VROCColor: "VROC Color",
            Weekly: "Hebdomadaire",
            Yesterday: "hier",
            YourSavedChartsWill: "Vos graphiques enregistrés seront affichés ici.",
            YourSavedTemplatesWill: "Vos modèles enregistrés seront affichés ici.",
            ytd: "Cumul à ce jour",
            ZeroLineColor: "Couleur du zero",
            Print: "Imprimer",
            ShowExtendedHours: "Heures prolongées",
            DownloadImage: "Télécharger l'image",
            Max: "Maximale",
            ShowIndicatorValues: "Afficher les valeurs d'indicateur",
            ShowIndicatorFlags: "Afficher les indicateurs",
            ResetChart: "Réinitialiser le graphique"
        }
    }), b.prototype.locales["it-IT"] = new b.Locale({
        id: "it-IT",
        modchartsLocale: {
            decimal: ".",
            thousands: ",",
            grouping: [3],
            currency: ["$", ""],
            dateTime: "%a %b %e %X %Y",
            time: "%H:%M:%S",
            periods: ["AM", "PM"],
            date: "%-m/%-d/%Y",
            shortDate: "%-m/%-d",
            days: ["Domenica", "Monday", "Lunedi", "Mercoledì", "Giovedi", "Venerdì", "Sabato"],
            shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Può", "Giugno", "July", "Luglio", "Settembre", "Ottobre", "Novembre", "Dicembre"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        translations: {
            "+DI": "+DI",
            "-DI": "-DI",
            "10d": "10 giorni",
            "10Day": "10 giorni",
            "10y": "10 anni",
            "10Year": "10 anni",
            "15Minute": "15 minuti",
            "15y": "15 anni",
            "15Year": "15 anni",
            "1d": "1 giorno",
            "1Day": "1 giorno",
            "1DayAgo": "1 giorno fa",
            "1Hour": "1 ora",
            "1m": "1 mese",
            "1Minute": "1 minuto",
            "1Month": "1 mese",
            "1y": "1 anno",
            "1Year": "1 anno",
            "20d": "20 giorni",
            "20Day": "20 giorni",
            "20y": "20 anni",
            "20Year": "20 anni",
            "3m": "3 mesi",
            "3Minute": "3 minuti",
            "3Month": "3 mesi",
            "3y": "3 anni",
            "3Year": "3 anni",
            "5d": "5 giorni",
            "5Day": "5 giorni",
            "5Minute": "5 minuti",
            "5y": "5 anni",
            "5Year": "5 anni",
            "6m": "6 mesi",
            "6Month": "6 mesi",
            AccelerationIncrease: "Incremento dell'accelerazione",
            AccelerationMaximum: "Massimo di accelerazione",
            AddOverlay: "Aggiungi Overlay",
            AddText: "Aggiungere Testo",
            ADX: "ADX",
            AllIndicators: "Tutti gli Indicatori",
            AndMore: "and {0} more",
            AndMorePlural: "and {0} more",
            Area: "Area",
            Arrow: "Freccia",
            BandColor: "Colore delle Bande",
            Bar: "Barra",
            BarColor: "Colore Barra",
            Cancel: "Cancella",
            Candlestick: "Candela",
            ChartByChartworks: "chart by {0}",
            ChartNotAvailable: "Chart not available",
            ChartSavedAs: "Grafico salvato come",
            Close: "Vicino",
            Color: "Colore",
            Comparison: "Confronto",
            Crosshair: "Crosshair",
            Custom: "Personalizzato",
            Daily: "Giornaliero",
            DaysAgo: "{0} giorno fa",
            Delete: "Cancellare",
            DifferencePeriod: "Periodo Differenze",
            Dividend: "Dividendo",
            Dividends: "Dividendi",
            Done: "Completato",
            Dot: "Punto",
            DotColor: "Colore punto",
            DownColor: "Colore Ribasso",
            DownloadImage: "Scarica l'immagine",
            DPeriod: "Periodo D",
            Ellipse: "Ellisse",
            EMAColor: "Colore EMA",
            EMAPeriod: "Periodo EMA",
            EnterNameChart: "Scegliere un nome per questo grafico",
            EnterNameTemplate: "Scegliere un nome per questo template",
            Event: "Evento",
            ExtendedLine: "Linea Estesa",
            Factor1: "Fattore 1",
            Factor2: "Fattore 2",
            Factor3: "Fattore 3",
            FastPeriod: "Periodo Veloce",
            FibonacciArc: "Arco di Fibonacci",
            FibonacciCircle: "Cercio di Fibonacci",
            FibonacciRetracement: "Ritracciamento di Fibonacci",
            Frequency: "Frequenza",
            Fundamental: "Fondamentale",
            FundamentalDesc: "Gli indicatori di analisi fondamentale mostrano dati dell'azienda sottostante o la valutazione del azione. Queste informazioni sono utili per analisi a lungo termine.",
            GannFan: "Gann Fann",
            HighColor: "Colore Alti",
            HLC: "HLC",
            HorizontalLine: "Linea orizzontale",
            Indicator: "Indicatore",
            IndicatorADL: "Accumulazione / Distribuzione (ADL)",
            IndicatorADLDesc: "Un indicatore basato su volumi in tempo reale calcolato moltiplicando i volumi per un fattore derivato da prezzi massimi e minimi al fine di prendere in considerazione l'intensita' del movimento del prezzo di un titolo.",
            IndicatorATR: "Average True Range ",
            IndicatorATRDesc: "Un indicatore di volatilità che utilizza prezzi di Apertura, Alti, Bassi e Chiusura per considerare movimenti intra-periodici e non solo la prezzi di chiusura.",
            IndicatorAwesomeOscillator: "Awesome Oscillator",
            IndicatorAwesomeOscillatorDesc: "",
            IndicatorBollinger: "Bande di Bollinger",
            IndicatorBollingerBandWidth: "Bande di Bollinger Larghezza",
            IndicatorBollingerBandWidthDesc: "Bollinger Band Width è una misura della volatilità. Viene calcolato sottraendo il prezzo della banda inferiore della banda superiore e dividendo il risultato per la banda centrale.",
            IndicatorBollingerDesc: "Un indicatore di momentum che utilizza la deviazione standard da una media mobile al fine di definire quando il prezzo e' relativamente alto o basso.",
            IndicatorChaikins: "Volatilità di Chaikin",
            IndicatorChaikinsDesc: "Una misura della volatilità del prezzo utilizzando I massimi e I minimi di ogni periodo.",
            IndicatorDivYield: "Rendimento da dividendo",
            IndicatorDivYieldDesc: "La somma dei dividendi pagati su un periodo mobile di 12 mesi diviso per il prezzo di ogni periodo",
            IndicatorDMI: "Directional Movement Index (DMI)",
            IndicatorDMIDesc: "Misura la forza e direzione di un trend. +DI e -DI possono essere utilizzati per determinare la direzione di un trend e quando l'ADX e' al di sopra di 20, il trend e 'forte.",
            IndicatorEMA: "Media mobile esponenziale (EMA)",
            IndicatorEMADesc: "Questa media mobile assegna un peso maggiore ai prezzi piu recenti.",
            IndicatorFastStoch: "Fast Stochastics",
            IndicatorFastStochDesc: "Paragona il prezzo attuale al suo range recente, visualizzato come percentuale.",
            IndicatorHighLow: "Prezzo Massimo/Minimo",
            IndicatorHighLowDesc: "Segnala il prezzo massimo e minimo per il periodo prescelto.",
            IndicatorHistoricalDiv: "Dividendo storico",
            IndicatorHistoricalDivDesc: "Gli ammontari dei dividendi sono visualizzati in forma di barra il giorno dello stacco del dividendo",
            IndicatorLR: "Regressione lineare",
            IndicatorLRDesc: "Questo calcolo statistico e' utilizzato per scoprire la curva di tendenza di un trend.",
            IndicatorMACD: "MACD",
            IndicatorMACDDesc: "MACD contrasta due medie mobili esponenziali per misurare il momentum dell'titolo sottostante.",
            IndicatorMAE: "Moving Average Envelope (MAE)",
            IndicatorMAEDesc: "le bande sono posizionate al di sopra e al di sotto della media mobile a percentuali predefinite dall'utente.",
            IndicatorMassIndex: "Mass Index",
            IndicatorMassIndexDesc: "Un indicatore che cerca di indentificare inversioni di tend utilizzando le differenze tra i range massimi/minimi.",
            IndicatorMomentum: "Momentum",
            IndicatorMomentumDesc: "Una misura del tasso di variazione in un titolo dove un valore superiore a 100 rappresenta un momentum di prezzo positivo.",
            IndicatorMoneyFlow: "Money Flow",
            IndicatorMoneyFlowDesc: "Un indicatore di momentum su base volumetrica che utilizza prezzi e volumi per misurare la forza del movimento di prezzo di un titolo.",
            IndicatorMoneyFlowIndex: "Money Flow Index",
            IndicatorMoneyFlowIndexDesc: "Una versione dell'RSI ponderata per i volumi, che utilizza prezzi e volumi per misurare l'intensita' del prezzo.",
            IndicatorOBV: "On Balance Volume",
            IndicatorOBVDesc: "Misura la pressione delle forze di acquisto e di vendita. Calcola una quantita' totale di volumi definita come somma dei volumi dei giorni rialzisti sottraendo I volumi dei giorni ribassisti.",
            IndicatorPercentB: "Bande di Bollinger %B",
            IndicatorPercentBDesc: "%B quantifica il prezzo di una sicurezza rispetto alla fascia superiore e inferiore Bande di Bollinger.",
            IndicatorPriceChannel: "Price Channel",
            IndicatorPriceChannelDesc: "Questo indicatore rappresenta una visualizzazione del prezzi di massima e minima, spostandosi in alto durante un trend rialzista e un basso durante un trend ribassista.",
            IndicatorPROC: "Price Rate of Change (PROC)",
            IndicatorPROCDesc: "Misura la variazione percentuale del prezzo di un titolo su un periodo definito.",
            IndicatorPSAR: "Parabolic SAR (PSAR)",
            IndicatorPSARDesc: "Una strategia che utilizza trends che utilizza le inversioni di tendenza dei prezzi al fine di fornire indicatori rialzisti o ribassisti",
            IndicatorRSI: "Relative Strength Index (RSI)",
            IndicatorRSIDesc: "Un indicatore di momentum che misura l'intensita' di un  cambiamento recente di prezzo.",
            IndicatorSlowStoch: "Slow Stochastics",
            IndicatorSlowStochDesc: "Una versione smooth del Fast Stochastics che confronta il prezzo attuale con il suo range.",
            IndicatorSMA: "Media mobile semplice (SMA)",
            IndicatorSMADesc: "La media mobile semplice e' un indicatore di trend che livella i movimenti di prezzo tramite il calcolo della media di prezzi su un periodo definito",
            IndicatorTSF: "Time Series Forecast (TSF)",
            IndicatorTSFDesc: "Un indicatore di trend che utilizza una regressione lineare rolling per prevedere i prezzi.",
            IndicatorUO: "Ultimate Oscillator",
            IndicatorUODesc: "Un indicatore di tasso di variazione che utilizza la media ponderata di tre diversi periodi al fine di ridurre la volatilità del tasso di variazione standard.",
            IndicatorVBP: "Volume per ciascun livello di prezzo",
            IndicatorVBPDesc: "Un diagramma a barre visualizzato sull'asse Y di un grafico dei prezzi con le somme dei volumi scambiati a ciascun livello di prezzo",
            IndicatorVolume: "Volume",
            IndicatorVolumeDesc: "Un diagrama a barre che rappresenta il numero dei titoli scambiati in ogni periodo",
            IndicatorVROC: "Volume Rate of Change (VROC)",
            IndicatorVROCDesc: "Misura il cambio percentuale di volume tra un periodo e un altro.",
            IndicatorWilliams: "Williams % R",
            IndicatorWilliamsDesc: "Calcolato in maniera analoga all' Oscillatore Stocastic, %R confronta il prezzo attuale al rangemassimi/minimi e presenta il risultato come percentuale.",
            IndicatorWMA: "Media mobile ponderata (WMA)",
            IndicatorWMADesc: "Simile a l'EMA, il WMA e' una media mobile che che accentua I prezzi piu recenti.",
            InsertText: "Inserire Testo",
            KPeriod: "Periodo K",
            Line: "Linea",
            LineColor: "Colore Linea",
            LineThickness: "Spessore della linea",
            LoadChart: "Carica grafico",
            Loading: "Caricamento in corso",
            LoadTemplate: "Carica Template",
            LowColor: "Colore Bassi",
            LowerIndicators: "Indicatori di Minima",
            MACDColor: "Colore Linea",
            MassIndexColor: "Colore Indice di Massa",
            Max: "Massimo",
            MedianLineColor: "Colore della linea mediana",
            Momentum: "Momentum",
            MomentumDesc: "Gli indicatori di momentum misurano la velocita' con la quale uno strumento finanziario subisce un aumento o una diminuzione del prezzo. Molti investitori li utilizzano per determinare se uno stromento finanziario e' sottovalutato o sopravvalutato rispetto ai trend piu' recenti",
            Monthly: "Mensile",
            MovingAverageColor: "Colore Media Mobile",
            NegativeVolume: "Volume negativo",
            NoResultsFound: "Nessun risultato trovato",
            NumberOfBars: "Numero di barre",
            OHLC: "OHLC",
            OK: "OK",
            Overbought: "Overbought",
            Oversold: "Ipervenduto",
            Percent: "Percento",
            Period: "Periodo",
            Period1: "Periodo 1",
            Period2: "Periodo 2",
            Period3: "Periodo 3",
            PositiveVolume: "Volume positivo",
            Print: "Stampare",
            PROCColor: "Colore PROC",
            Ray: "Raggio",
            Rectangle: "Rettangolo",
            Remove: "Rimuovi",
            RemovePanel: "Rimuovere pannello",
            ResetChart: "Reimposta grafico",
            Save: "Salva",
            SaveChart: "Salva grafico",
            SaveChartDesc: "Salva le impostazioni dei grafici inclusi disegni, annotazioni, indicatori, lassi di tempo e stili per questo simbolo speficico",
            SaveTemplate: "Salva Template",
            SaveTemplateDesc: "Salva su template le impostazioni del grafico, inclusi gli indicatori, lasso di tempo e stili",
            SearchForComparison: "Cerca un simbolo da confrontare",
            SearchForIndicator: "Cerca un indicatore",
            SearchForSymbol: "Cerca simbolo",
            SetupLineColor: "Colore Linea Setup",
            Share: "Condividere",
            ShowExtendedHours: "Ore prolungate",
            ShowIndicatorFlags: "Mostra le bandiere degli indicatori",
            ShowIndicatorValues: "Mostra i valori dell'indicatore",
            SlowPeriod: "Periodo Lento",
            Smoothing: "Smoothing",
            Split: "Frazionamenti",
            Splits: "Frazionamenti",
            StandardDeviations: "Deviazioni standard",
            TemplateSavedAs: "Template salvato come",
            Text: "Testo",
            Today: "Oggi",
            Trend: "Trend",
            TrendDesc: "Il trend misura semplicemente l'andamento del prezzo di un titolo che puo' essere ralzista, ribassista o piatto. Tipicamente gli indicatori di trend sono divisi in due categorie; le medie mobili che misurano la direzione del trend e quelli come l'ADX che misurano l'intensita' del trend.",
            Trendline: "Trendline",
            TriggerLineColor: "Colore Linea Trigger",
            UpColor: "Colore Rialzo",
            UpperIndicators: "Indicatori di Massima",
            Volume: "Volume",
            VolumeDesc: "Il volume misura il numero di azioni scambiate nel periodo prescelto. Gli indicatori di volume tipicamente combinano il volume con il cambiamento di prezzo per misurare l'intensita' del momentum di un titolo.",
            VROCColor: "Colore VROC",
            Weekly: "Settimanale",
            Yesterday: "ieri",
            YourSavedChartsWill: "I grafici salvati saranno visualizzati qui.",
            YourSavedTemplatesWill: "I suoi modelli salvati saranno visualizzati qui.",
            ytd: "YTD",
            ZeroLineColor: "Colore Linea Zero"
        }
    }), b.prototype.locales["ja-JP"] = new b.Locale({
        id: "ja-JP",
        indicators: [{
            id: "awesomeoscillator",
            style: {
                fillColorPos: "#FD0000",
                fillColorNeg: "#00C02F"
            }
        }, {
            id: "price",
            style: {
                lineColorUp: "#FD0000",
                lineColorDown: "#2496F1",
                fillColorPos: "#FD0000",
                fillColorNeg: "#2496F1"
            }
        }, {
            id: "dmi",
            style: {
                lineColorDINeg: "#F98254",
                lineColorDIPos: "#04BBD3"
            }
        }, {
            id: "macd",
            style: {
                fillColorPos: "#FD0000",
                fillColorNeg: "#00C02F"
            }
        }, {
            id: "volume",
            style: {
                fillColorPos: "#FD0000",
                fillColorNeg: "#00C02F"
            }
        }, {
            id: "volumebyprice",
            style: {
                upColor: "rgba(253,0,0,0.6)",
                downColor: "rgba(0,192,47,0.6)"
            }
        }],
        settings: {
            splitNotation: "reverse"
        },
        modchartsLocale: {
            decimal: ".",
            thousands: ",",
            grouping: [3],
            currency: ["$", ""],
            dateTime: "%a %b %e %X %Y",
            time: "%H:%M:%S",
            periods: ["AM", "PM"],
            date: "%Y年%-m月%-d日",
            shortDate: "%-m/%-d",
            days: ["日曜日", "月曜", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
            shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        translations: {
            Indicator: "インジケーター",
            Comparison: "比較",
            Event: "イベント",
            "1Day": "1日",
            "5d": "5日",
            "5Day": "5日",
            "1Month": "1ヵ月",
            "3Month": "3ヶ月",
            "6Month": "6ヵ月",
            ytd: "YTD",
            "1Year": "1年",
            "3Year": "3年",
            "5Year": "5年",
            "10d": "10日",
            "10Day": "10日",
            "10Year": "10年",
            "20d": "20日",
            "20Day": "20日",
            Frequency: "期間",
            "1Minute": "1分足",
            "3Minute": "3分足",
            "5Minute": "5分足",
            "15Minute": "15分足",
            "1Hour": "時間足",
            Daily: "日足",
            Weekly: "週足",
            Monthly: "月足",
            Area: "エリア",
            OHLC: "OHLC",
            HLC: "HLC",
            Candlestick: "ローソク足",
            Line: "ライン",
            Bar: "バー",
            Dot: "ドット",
            SearchForIndicator: "インジケーターを検索",
            SearchForComparison: "比較シンボルを検索",
            SearchForSymbol: "シンボル検索",
            Fundamental: "ファンダメンタル",
            Momentum: "モメンタム",
            Trend: "トレンド",
            Volume: "ボリューム",
            FundamentalDesc: "ファンダメンタル指標は、基礎となる企業や株式の評価に関連するデータを表示します。ファンダメンタル指標は、長期的な分析に役立つかどうかを判断できます。",
            MomentumDesc: "モメンタム指標は、セキュリティの価格向上や低下する速度を測定します。多くの投資家は、セキュリティの価格が最新トレンドと比較して割安か割高を判断するためにモメンタムインジケーターを使用しています。",
            TrendDesc: "トレンドは、セキュリティの価格が上がっているか下がっているかまたは横向きにされているかどうかを測定するシンプルなコンセプトです。トレンド指標は2つのカテゴリに分類されます：トレンドの方向を測定する移動平均のようなものとトレンドの強さを測定ADXのもの。",
            VolumeDesc: "ボリュームは、選択した期間中に取引される株式数を測定します。ボリューム指標は、セキュリティのモメンタムの強度を測定するために、価格の変化にボリュームを兼ね備えています。",
            UpperIndicators: "アッパーインジケーター",
            LowerIndicators: "ロアーインジケーター",
            AllIndicators: "全インジケーター",
            IndicatorADL: "蓄積/配信（ＡＤＬ）",
            IndicatorATR: "実平均範囲",
            IndicatorBollinger: "ボリンジャーバンド",
            IndicatorBollingerBandWidth: "ボリンジャーバンドの幅",
            IndicatorChaikins: "チャイキンボラティリティ",
            IndicatorDivYield: "配当利回り",
            IndicatorDMI: "ディレクショナル・ムーブメントインデックス（ＤＭＩ）",
            IndicatorEMA: "指数移動平均（ＥＭＡ）",
            IndicatorFastStoch: "ファストストキャスティクス",
            IndicatorHighLow: "高・低価格",
            IndicatorHistoricalDiv: "ヒストリカル配当",
            IndicatorLR: "直線回帰",
            IndicatorMACD: "MACD",
            IndicatorMAE: "移動平均エンベロープ",
            IndicatorMassIndex: "マスインデックス",
            IndicatorMomentum: "モメンタム",
            IndicatorMoneyFlow: "マネーフロー",
            IndicatorMoneyFlowIndex: "マネーフロー指数",
            IndicatorOBV: "オンバランスボリューム",
            IndicatorPriceChannel: "価格チャンネル",
            IndicatorPROC: "変更の価格レート（ＰＲＯＣ）",
            IndicatorPSAR: "パラボリックＳＡＲ(PSAR)",
            IndicatorRSI: "RSI",
            IndicatorSlowStoch: "スローストキャスティックス",
            IndicatorSMA: "単純移動平均(SMA)",
            IndicatorTSF: "タイムシリーズフォーキャスト(TSF)",
            IndicatorUO: "究極発振器",
            IndicatorVolume: "ボリューム",
            IndicatorVBP: "価格別ボリューム",
            IndicatorVROC: "ＶＲＯＣカラー",
            IndicatorWilliams: "ウィリアムズ％Ｒ",
            IndicatorWMA: "加重移動平均（ＷＭＡ）",
            IndicatorADLDesc: "価格の強さを組み込むためには、高、低、および終値に基づいて係数を乗じた量の集計を実行しているボリュームベースのインジケータ。",
            IndicatorATRDesc: "クローズだけではなくイントラ期間の動きを含めるために始値、高値、低、および終値を使用しているボラティリティ指標。",
            IndicatorAwesomeOscillator: "オーサムオシレーター（AO）",
            IndicatorAwesomeOscillatorDesc: "オーサムオシレーターはビルウィリアムズが発展したモメンタムインディケーターです。このオシレーターはクロージングプライスではなく中点を横切って構築された5期間単純移動平均から同様に構築された34期間の単純移動平均を減算したものです。トレーダーは、このインディケーターを傾向の確認とポテンシャルリバーサルを見極めるために使用します。",
            IndicatorBollingerDesc: "モメンタムインジケーターは、価格が比較的高いまたは低い時に定義するために移動平均から標準偏差を使用しています。",
            IndicatorBollingerBandWidthDesc: "ボリンジャーバンドの幅は、揮発性の尺度です。これは、上のバンドからの低帯域の価格を減算し、中域によって結果を割ることによって計算されます。",
            IndicatorChaikinsDesc: "各期間の高値と安値を使用して、価格変動の測定。",
            IndicatorDivYieldDesc: "各期間の価格で割った支払ったローリング12ヶ月の配当金",
            IndicatorDMIDesc: "トレンドの強さとトレンドの方向を測定します。+ DIと-DIトレンド方向を決定するために使用することができ、ADXが20以上である場合、トレンドが強いという意味になります。",
            IndicatorEMADesc: "この移動平均は、より最近の価格に大きな重点を表します。",
            IndicatorFastStochDesc: "現在値を最新の範囲と比較しパーセンテージで表示",
            IndicatorHighLowDesc: "現在の期間範囲の高と低価格をマークします。",
            IndicatorHistoricalDivDesc: "取引が配当落ちとなった日に配当金額はバーとして表示されます。",
            IndicatorLRDesc: "この統計的計算は、トレンドの傾きを見つけるために使用されます。",
            IndicatorMACDDesc: "MACDは、基礎となるセキュリティのモメンタムを測定するために2つの指数関数移動平均を比較します。",
            IndicatorMAEDesc: "バンドは、移動平均の上方および下方ユーザ定義の割合に配置されています。",
            IndicatorMassIndexDesc: "高・低範囲の差額を利用して、トレンドの反転を識別しようとする指標。",
            IndicatorMomentumDesc: "100以上の場合全てポジティブ価格指標でセキュリティの変動率を測定する",
            IndicatorMoneyFlowDesc: "価格とボリュームを使用するボリュームベースのモメンタム指標は、セキュリティの動きの強さを測定します。",
            IndicatorMoneyFlowIndexDesc: "価格とボリュームを使用するRSIの出来高加重バージョンは、価格の強度を測定します。",
            IndicatorOBVDesc: "バイとセルのプレッシャーを測定します。これは、アップの日にボリュームを追加し、ダウンの日にボリュームを減算し、ボリュームの実行中の集計を保持します。",
            IndicatorPercentB: "ボリンジャーバンド %B",
            IndicatorPercentBDesc: "％Bは、上下のボリンジャーバンドに対する証券の価格を定量化します。",
            IndicatorPriceChannelDesc: "この指標は上昇トレンド中および下向きに下降中に上向き調整し、高値と安値の視覚表示を提供します。",
            IndicatorPROCDesc: "選択した期間における証券の価格の変化率を測定します。",
            IndicatorPSARDesc: "強気と弱気の指標を提供するために、価格の逆転現象を使用して、トレンドベースの戦略。",
            IndicatorRSIDesc: "価格の最近の動きの強度を測定するモメンタム指標。",
            IndicatorSlowStochDesc: "現在値を価格範囲と比較するファストストキャスティクスの平滑化バージョン。",
            IndicatorSMADesc: "単純移動平均は、データのウィンドウ全体で価格を平均化することにより価格の動きを滑らかにするトレンド指標です。",
            IndicatorTSFDesc: "価格を予測するために、ローリング線形回帰を使用するトレンドインジケーター。",
            IndicatorUODesc: "標準レート変更のボラティリティを低減するために三つの異なる期間を使用する変更指標のレート",
            IndicatorVolumeDesc: "各期間中に取引される株式数を示すバーチャート。",
            IndicatorVBPDesc: "バーチャートは、各価格レベルで取引ボリュームの合計を示す価格チャートのy軸に沿って表示されます。",
            IndicatorVROCDesc: "一つの期間から別の期間のボリュームの変更をパーセンテージで測定します。",
            IndicatorWilliamsDesc: "ストキャスティクスの計算と同様に、％Rは、高低域に現在の価格を比較し、パーセンテージとして結果を表示します。",
            IndicatorWMADesc: "EMAと同様、WMAは、より最近の価格に大きな重点を置いた移動平均値です。",
            Dividends: "配当",
            Splits: "スプリット",
            Custom: "カスタム",
            LineThickness: "厚線",
            Color: "カラー",
            Period: "期間",
            UpColor: "ＵＰカラー",
            DownColor: "ダウンカラー",
            ZeroLineColor: "ゼロラインカラー",
            HighColor: "ハイカラー",
            LowColor: "ローカラー",
            LineColor: "ラインカラー",
            BarColor: "バーカラー",
            DotColor: "ドットカラー",
            AddOverlay: "オーバーレイを追加",
            EMAPeriod: "ＥＭＡ期間",
            DifferencePeriod: "差分期間",
            StandardDeviations: "標準偏差",
            BandColor: "バンドカラー",
            MovingAverageColor: "移動平均カラー",
            "-DI": "-DI",
            "+DI": "+DI",
            ADX: "ADX",
            KPeriod: "Ｋ期間",
            DPeriod: "Ｄ期間",
            Smoothing: "スムージング",
            EMAColor: "ＥＭＡカラー",
            MACDColor: "ラインカラー",
            SlowPeriod: "スロー期間",
            FastPeriod: "ファスト期間",
            Percent: "パーセント",
            MassIndexColor: "マス指数カラー",
            MedianLineColor: "中央線の色",
            SetupLineColor: "セットアップラインカラー",
            TriggerLineColor: "トリガーラインカラー",
            PROCColor: "ＰＲＯＣカラー",
            AccelerationIncrease: "加速度増加",
            AccelerationMaximum: "加速度ＭＡＸ",
            Factor1: "ファクター１",
            Factor2: "ファクター2",
            Factor3: "ファクター3",
            Period1: "期間１",
            Period2: "期間2",
            Period3: "期間3",
            NumberOfBars: "バー数",
            PositiveVolume: "ポジティブボリューム",
            NegativeVolume: "ネガティブボリューム",
            VROCColor: "ＶＲＯＣカラー",
            Remove: "削除",
            Cancel: "キャンセル",
            Done: "完了",
            InsertText: "テキストを入力",
            AddText: "テキストを追加",
            EnterNameChart: "チャート名前を入力してください。",
            EnterNameTemplate: "テンプレートの名前を入力してください。",
            SaveTemplate: "テンプレート保存",
            SaveTemplateDesc: "インジケーター、スタイル、タイムフレーム等のチャート設定はテンプレートとして保存してください。",
            SaveChart: "チャートを保存",
            SaveChartDesc: "この特定のシンボルのための図面、注釈、指標、期間、およびスタイルを含むすべてのチャート設定を保存してください。",
            Save: "保存",
            LoadTemplate: "テンプレートをロードする",
            LoadChart: "チャートを表示する",
            Trendline: "トレンドライン",
            HorizontalLine: "水平線",
            Ray: "直線",
            ExtendedLine: "延長線",
            Arrow: "矢印",
            Ellipse: "円",
            Rectangle: "四角",
            FibonacciRetracement: "フィボナッチリトレースメント",
            FibonacciArc: "フィボナッチアーク",
            FibonacciCircle: "フィボナッチサークル",
            GannFan: "ギャンファン",
            Dividend: "配当",
            Split: "スプリット",
            Today: "本日",
            DaysAgo: "{0}日前",
            Yesterday: "昨日",
            "1DayAgo": "1日前",
            Share: "シェア",
            Close: "終値",
            "1d": "1日",
            "1m": "1ヶ月",
            "3m": "3ヶ月",
            "6m": "6ヶ月",
            "1y": "1年",
            "3y": "3年",
            "5y": "5年",
            "10y": "10年",
            "15y": "15年",
            "15Year": "15年",
            "20y": "20年",
            "20Year": "20年",
            Text: "テキスト",
            Crosshair: "ポインタ",
            Overbought: "買われすぎ",
            Oversold: "売られすぎ",
            RemovePanel: "パネル削除",
            Loading: "ロード中",
            Delete: "削除",
            ChartSavedAs: "チャートを名前付けて保存",
            TemplateSavedAs: "テンプレートを名前付けて保存",
            YourSavedTemplatesWill: "保存されたテンプレートがここで表示されます。",
            YourSavedChartsWill: "保存されたチャートがここで表示されます。",
            NoResultsFound: "結果が見つかりませんでした。",
            OK: "OK",
            ChartByChartworks: "{0}のチャート",
            ChartNotAvailable: "チャートを表示できません",
            AndMore: "その他{0}件",
            AndMorePlural: "その他{0}件",
            Print: "印刷する",
            ShowExtendedHours: "延長された時間",
            DownloadImage: "イメージをダウンロード",
            Max: "全期間",
            ShowIndicatorValues: "指示値を表示する",
            ShowIndicatorFlags: "インジケータフラグを表示する",
            ResetChart: "リセット"
        }
    }), b.Menu = function(a) {
        this.layout = a, this.state = {
            open: !1
        }
    }, b.Menu.prototype.init = function(b, c) {
        var d = this.getDefaultParams(b) || {
            align: "bottom",
            left: 0,
            top: 0,
            width: 0,
            height: 0,
            el: null,
            $elPaired: null
        };
        this.params = a.extend(d, c || {})
    }, b.Menu.prototype.getDefaultParams = function() {
        throw new Error("Required Menu method not found")
    }, b.Menu.prototype.getContent = function() {
        throw new Error("Required Menu method not found")
    }, b.Menu.prototype.updateContent = function() {}, b.Menu.prototype.setEventHandlers = function() {}, b.Menu.prototype.setEventHandlersCommon = function() {
        var b = this;
        this.params.$el.on("mouseenter", ".chartworks-menu-searchresults li", function() {
            var b = a(this),
                c = b.siblings();
            b.addClass("chartworks-menu-searchresults-hover"), c.eq(0).attr("selectPos", b.index())
        }), this.params.$el.on("mouseleave", ".chartworks-menu-searchresults li", function() {
            var b = a(this);
            b.removeClass("chartworks-menu-searchresults-hover"), b.siblings().eq(0).attr("selectPos", 0)
        }), this.params.$el.on("keydown", ".chartworks-menu-search-input", function(a) {
            var c = 38 === a.which,
                d = 40 === a.which,
                e = 13 === a.which;
            if (c || d || e) {
                var f = b.params.$el.find(".chartworks-menu-searchresults li");
                if (a.preventDefault(), f.length && !f.eq(0).attr("noresults")) {
                    var g = f.eq(0).attr("selectPos");
                    if (e) return void(g ? f.eq(g) && f.eq(g).click() : f.eq(0).click());
                    "undefined" == typeof g ? g = 0 : c ? g = Math.max(0, Number(g) - 1) : d && (g = Math.min(f.length - 1, Number(g) + 1)), f.removeClass("chartworks-menu-searchresults-hover"), f.eq(g).addClass("chartworks-menu-searchresults-hover"), f.eq(0).attr("selectPos", g)
                }
            }
        }), this.params.$el.on("click", ".chartworks-menu-header", function() {
            b.layout.closeMenus()
        })
    }, b.Menu.getMatchLabel = function(a, b) {
        var c = new RegExp(a, "i").exec(b);
        if (c && "undefined" != typeof c.index && b) {
            var d = c.index,
                e = c.index + a.length,
                f = b.substring(0, d),
                g = b.substring(e, b.length),
                h = b.substring(d, e);
            return f + "<span>" + h + "</span>" + g
        }
        return b
    }, b.Menu.prototype.getContentColorSwatch = function(c, d, e) {
        var f = this,
            g = this.layout.theme.params.style.swatchColors,
            h = d instanceof Modcharts.Indicator,
            i = g.map(function(a) {
                return '<div color="' + a + '" style="background-color:' + a + '" tabindex="0">' + (d.params.style[c] === a ? "&bull;" : "") + "</div>"
            }),
            j = a('<div class="chartworks-menu-swatches" selectedColor="' + d.params.style[c] + '" styleParam="' + c + '">' + i.join("") + "</div>");
        return j.on("click keypress", "div", function(c) {
            if ("keypress" === c.type && 13 !== c.which) return !0;
            var g = a(this).attr("color"),
                i = a(this).parent().attr("styleParam");
            if (a(this).siblings("div").html(""), a(this).html("&bull;"), a(this).parent().attr("styleParam", i), "lineColor" === i && f.sliders.lineWidth && f.sliders.lineWidth.setColor(g), h) {
                var j = f.layout.core.filterIndicators({
                    id: d.params.id
                });
                if (j && j.opacityStyle && j.opacityStyle[i]) {
                    var k = b.hexToRGB(g);
                    g = "rgba(" + k.r + "," + k.g + "," + k.b + "," + j.opacityStyle[i] + ")"
                }
            }
            if (d.params.style[i] = g, "price" === d.params.id && ("lineColorUp" === i ? d.params.style.fillColorPos = g : "lineColorDown" === i ? d.params.style.fillColorNeg = g : "lineColor" === i && (d.params.style.fillColorDot = g, d.params.style.lineColorDot = g)), a(this).parent().attr("selectedColor", g), e && e.css("background-color", g), "lineColor" === i && d.params.style.fillColor) {
                var l = b.hexToRGB(d.params.style[i]),
                    m = f.layout.theme.params.style.fillOpacity;
                d.params.style.fillColor = "rgba(" + l.r + "," + l.g + "," + l.b + "," + m + ")"
            }
            var n = d.panel;
            n.applyLegendContent(n.rootLegend, n.indicators), d.panel.core.render()
        }), j
    }, b.Menu.prototype.open = function(b) {
        this.parentMenu || this.layout.closeMenus(), this.params.isModal && !this.params.$elModal && (this.params.$elModal = a("<div/>").css("display", "none").addClass("chartworks-menu-modal").appendTo(this.layout.$el.core)), this.params.$el || (this.params.$el = a("<div/>").css("display", "none").attr("tabindex", "-1").addClass("chartworks-menu").addClass("chartworks-menu-" + this.params.id).addClass("chartworks-noselect").append(this.getContent()).appendTo(this.layout.$el.core), this.layout.translateContent(this.params.$el), this.setEventHandlersCommon(), this.setEventHandlers()), this.params.$el.show(), this.params.isModal && this.params.$elModal.show(), this.updateContent(), this.updatePosition(), b && "keypress" === b.type && this.params.$el.find(".chartworks-menu-content-rows li:visible, .chartworks-menu-browse-categorylist li:visible").first().focus(), this.state.open = !0
    }, b.Menu.prototype.updatePosition = function() {
        var b = this.layout.core.getOffset(),
            c = 0,
            d = 0;
        if (this.layout.state.currentMenu = this.params.id, this.params.x0 && this.params.y0) this.params.$el.css("left", this.params.x0), this.params.$el.css("top", this.params.y0);
        else if ("chartcenter" === this.params.align) {
            this.params.$el.css("position", "absolute"), this.params.$el.css("width", this.params.width), this.params.$el.css("height", this.params.height);
            var e = Math.max(400, this.layout.$el.core.height()) / 2,
                f = this.layout.$el.core.width() / 2;
            this.params.$el.css("top", e - this.params.$el.outerHeight() / 2), this.params.$el.css("left", f - this.params.$el.outerWidth() / 2)
        } else if (this.params.$elPaired) {
            var g = this.params.$elPaired;
            "bottom" === this.params.align ? (c = g.offset().left - b.left - 1, d = g.offset().top - b.top, this.params.$el.css("width", this.params.width || Math.max(95, g.outerWidth()) + 2), c + this.params.$el.width() > a(window).width() - 10 && (c = a(window).width() - this.params.$el.width() - 10), this.params.$el.css("left", c), this.params.$el.css("top", d)) : "right" === this.params.align ? (c = parseInt(g.offsetParent().css("left")) + g.offsetParent().width() + 1, d = g.offset().top - g.parent().offset().top, this.params.$el.css("width", this.params.width || 105), c + this.params.$el.width() > a(window).width() - 10 && (c = a(window).width() - this.params.$el.width() - 10), this.params.$el.css("left", c), this.params.$el.css("top", d)) : "flush-right" === this.params.align && (d = g.offset().top - g.parent().offset().top, this.params.$el.css("width", this.params.width || 105), this.params.$el.css("right", 0), this.params.$el.css("top", d))
        }
        this.params.isModal && this.updateModalPosition()
    }, b.Menu.prototype.updateModalPosition = function() {
        var a = this.params.$elModal,
            b = this.layout.$el.core;
        a.css("left", 0), a.css("top", 0), a.css("width", b.outerWidth()), a.css("height", b.outerHeight()), a.show()
    }, b.Menu.prototype.close = function(a) {
        this.params.$el && this.params.$el.hide(), this.params.$elModal && this.params.$elModal.hide(), this.layout.state.currentMenu = null, this.state.open = !1, this.layout.toolbar && this.layout.toolbar.update()
    }, b.Menu.prototype.toggle = function(a) {
        this.state.open ? this.close(a) : this.open(a)
    }, b.Menu.getYTDDays = function() {
        var a = new Date,
            b = new Date(a.getFullYear(), 0, 1);
        return Math.ceil((a - b) / 1e3 / 60 / 60 / 24)
    }, b.Menu.prototype.handleEventClearClose = function(a) {
        if (a && "keypress" === a.type && 13 !== a.which) return !0;
        var b = this.params.$el.find(".chartworks-menu-search-input").val().length;
        this.params.$el.find(".chartworks-menu-search-input").val(""), this.params.$el.find(".chartworks-menu-searchresults ul").empty(), this.state.activePane = "default", this.updateContent(), b || this.layout.closeMenus()
    }, b.Menu.prototype.handleEventInputSearch = function(c) {
        var d = 6,
            e = window.encodeURIComponent(this.params.$el.find(".chartworks-menu-search-input").val() || ""),
            f = this,
            g = [];
        if (38 !== c.which && 40 !== c.which) {
            if (0 === e.length) return void this.params.$el.find(".chartworks-menu-searchresults ul").empty();
            var h = this.layout.core.clientParams.typeAheadAPI.replace("%s", e);
            /api\.markitqa\.com|api\.markitondemand\.com/.test(h) && (h += "&access_token=" + f.layout.core.clientParams.token), this.prevAjax && this.prevAjax.abort(), this.prevAjax = a.ajax({
                dataType: "json",
                url: h,
                success: function(c) {
                    var h = f.params.$el.find(".chartworks-menu-searchresults ul");
                    h.empty(), g = c && c.data && c.data.items && c.data.items.length > 0 ? c.data.items.map(function(c, f) {
                        if (f < d) {
                            var g = b.Menu.getMatchLabel(e, c.displaySymbol || c.symbol),
                                i = b.Menu.getMatchLabel(e, c.displayName);
                            return c.displayExchange && (h.addClass("chartworks-menu-searchresults-exchange"), g += ":" + c.displayExchange), a('<li><div class="chartworks-menu-searchresults-symbol">' + g + "</div>" + i + "</li>").attr("symbol", c.symbol).attr("exchangeId", c.exchange).attr("displayExchange", c.displayExchange).attr("displaySymbol", c.displaySymbol).attr("crossRate", c.crossRate).attr("xid", c.xid).attr("tabindex", "0")
                        }
                    }) : [a('<li noresults="1" data-translate="NoResultsFound"></li>')], h.append(g), f.layout.translateContent(h);
                    var i = 0;
                    f.params.$el.find(".chartworks-menu-searchresults-symbol").each(function() {
                        a(this).width() > i && (i = a(this).width())
                    }), f.params.$el.find(".chartworks-menu-searchresults-symbol").width(i)
                }
            })
        }
    }, b.AddComparisonMenu = function(a) {
        this.superclass.call(this, a)
    }, b.Extend(b.AddComparisonMenu, b.Menu), b.AddComparisonMenu.prototype.getDefaultParams = function(a) {
        return {
            id: "addcomparison",
            align: "bottom",
            el: null,
            $elPaired: a
        }
    }, b.AddComparisonMenu.prototype.setEventHandlers = function() {
        var b = this.layout.core,
            c = this;
        this.params.$el.on("click keypress", ".chartworks-menu-search-clear", a.proxy(this.handleEventClearClose, this)), this.params.$el.on("keyup", ".chartworks-menu-search-input", a.proxy(this.handleEventInputSearch, this)), this.params.$el.on("click keypress", ".chartworks-menu-searchresults li", function(d) {
            if ("keypress" === d.type && 13 !== d.which) return !0;
            var e = a(this).attr("symbol"),
                f = a(this).attr("exchangeid"),
                g = a(this).attr("displaySymbol"),
                h = a(this).attr("displayExchange"),
                i = a(this).attr("xid"),
                j = a(this).attr("crossRate"),
                k = function(a) {
                    var d = b.chart;
                    a && (a.xid || a.crossRate) ? b.setSymbolCompare(a) : b.chart.loadingStop(), d.loadData(), /all|comparison/.test(b.clientParams["feature.legend.autoExpand"]) && b.togglePrimaryExpandedLegend(!0), c.handleEventClearClose(), b.layout.closeMenus()
                };
            return i || j ? k({
                xid: i,
                crossRate: j,
                symbol: e,
                exchangeId: f,
                displaySymbol: g,
                displayExchange: h
            }) : b.getSymbolLookup({
                symbol: e,
                exchangeId: f,
                displaySymbol: g,
                displayExchange: h
            }, function(a) {
                k(a)
            }), !1
        }), this.params.$el.find(".chartworks-menu-content").on("mousedown", "[tabindex=0]", function(b) {
            a(this).addClass("chartworks-hidefocus")
        }), this.params.$el.find(".chartworks-menu-content").on("blur", "[tabindex=0]", function(b) {
            a(this).removeClass("chartworks-hidefocus")
        })
    }, b.AddComparisonMenu.prototype.getContent = function() {
        var b = a("<div>").addClass("chartworks-menu-content");
        return b.append('\t\t<div class="chartworks-menu-search">\t\t\t<input class="chartworks-menu-search-input" maxlength="30" data-translate-placeholder="SearchForComparison"></input>\t\t\t<div class="chartworks-menu-search-clear chartworks-sprite" tabindex="0"></div>\t\t</div>\t\t<div class="chartworks-menu-searchresults">\t\t\t<ul></ul>\t\t</div>'), b
    }, b.AddComparisonMenu.prototype.updateContent = function() {
        var b = this.layout.core.clientParams.compareMenuOptions || [];
        b.length ? this.params.$el.find(".chartworks-menu-searchresults ul").html(b.map(function(b) {
            return a("<li>").text(b.displayName || b.displaySymbol || b.xid || "").attr("displaySymbol", b.displaySymbol).attr("displayExchange", b.displayExchange).attr("crossRate", b.crossRate).attr("xid", b.xid).attr("exchangeId", b.exchange).attr("symbol", b.symbol).attr("tabindex", "0")
        })) : this.params.$el.find(".chartworks-menu-searchresults ul").html(""), this.layout.$el.core.find(".chartworks-menu-searchresults").show()
    }, b.AddEventMenu = function(a) {
        this.superclass.call(this, a)
    }, b.Extend(b.AddEventMenu, b.Menu), b.AddEventMenu.prototype.getDefaultParams = function(a) {
        return {
            id: "addevent",
            align: "bottom",
            el: null,
            $elPaired: a
        }
    }, b.AddEventMenu.prototype.setEventHandlers = function() {
        var b = (this.layout.core.chart, this);
        this.params.$el.on("click keypress", "li", function(c) {
            return "keypress" === c.type && 13 !== c.which || (b.close(), b.layout.core.togglePanelEvent(a(this).attr("eventId")))
        }), this.params.$el.find(".chartworks-menu-content").on("mousedown", "[tabindex=0]", function(b) {
            a(this).addClass("chartworks-hidefocus")
        }), this.params.$el.find(".chartworks-menu-content").on("blur", "[tabindex=0]", function(b) {
            a(this).removeClass("chartworks-hidefocus")
        })
    }, b.AddEventMenu.prototype.getCustomEvents = function() {
        return this.layout.core.chart.panels[0].events.filter(function(a) {
            return "custom" === a.params.id
        })
    }, b.AddEventMenu.prototype.getContent = function() {
        var b = this.layout.core,
            c = a("<div>").addClass("chartworks-menu-content");
        return this.defaultYAxisPaddingTop = b.chart.panels[0].params.style.yaxisPaddingTop, c
    }, b.AddEventMenu.prototype.updateContent = function() {
        var b = this.layout.core,
            c = this,
            d = [],
            e = this.params.$el.find("div.chartworks-menu-content");
        d.push('<ul class="chartworks-menu-content-rows">'), b.clientParams["feature.events.dividends"] !== !1 && d.push('<li eventId="dividends" data-translate="Dividends" tabindex="0"></li>'), b.clientParams["feature.events.splits"] !== !1 && d.push('<li eventId="splits" data-translate="Splits" tabindex="0"></li>'), a.each(this.getCustomEvents(), function(a, c) {
            b.customEvents[c.params.uid] && "custom" !== c.params.label && d.push('<li eventId="' + c.params.uid + '" tabindex="0">' + c.params.label + "</li>")
        }), d.push("</ul>"), e.empty(), e.append(d.join("")), this.layout.translateContent(e), this.params.$el.find("li .chartworks-menu-checkmark").remove(), b.hasEvent("dividends") && this.params.$el.find('li[eventId="dividends"]').append('<div class="chartworks-menu-checkmark">&#10004;</div>'), b.hasEvent("splits") && this.params.$el.find('li[eventId="splits"]').append('<div class="chartworks-menu-checkmark">&#10004;</div>'), a.each(b.customEvents, function() {
            var a = this.params.uid,
                d = b.chart.panels[0].events.filter(function(b) {
                    return b.params.uid === a
                });
            d.length && !d[0].isHidden && "custom" !== d[0].params.label && c.params.$el.find('li[eventId="' + a + '"]').append('<div class="chartworks-menu-checkmark">&#10004;</div>')
        })
    }, b.AddIndicatorMenu = function(a) {
        this.superclass.call(this, a), this.state.activePane = "default", this.currentFilter = {
            isUpper: null,
            category: "fundamental"
        }
    }, b.Extend(b.AddIndicatorMenu, b.Menu), b.AddIndicatorMenu.prototype.getDefaultParams = function(a) {
        return {
            id: "addindicator",
            align: "bottom",
            el: null,
            $elPaired: a
        }
    }, b.AddIndicatorMenu.prototype.getIndicatorCategories = function() {
        return [{
            labelId: "Fundamental",
            id: "fundamental",
            descriptionId: "FundamentalDesc"
        }, {
            labelId: "Momentum",
            id: "momentum",
            descriptionId: "MomentumDesc"
        }, {
            labelId: "Trend",
            id: "trend",
            descriptionId: "TrendDesc"
        }, {
            labelId: "Volume",
            id: "volume",
            descriptionId: "VolumeDesc"
        }]
    }, b.AddIndicatorMenu.prototype.selectIndicator = function(a) {
        var b = this.layout.core,
            c = a.attr("templateId");
        c && (b.addNewIndicator(c), this.state.activePane = "default", this.handleEventClearClose())
    }, b.AddIndicatorMenu.prototype.setEventHandlers = function() {
        var c = this;
        this.params.$el.on("click keypress", ".chartworks-menu-browse-categories li[categoryId]", function(b) {
            return "keypress" === b.type && 13 !== b.which || (c.currentFilter.category = a(this).attr("categoryId"), c.currentFilter.isUpper = null, void c.updateContent())
        }), this.params.$el.on("click keypress", ".chartworks-menu-browse-upperlower li", function(b) {
            return "keypress" === b.type && 13 !== b.which || (c.currentFilter.isUpper = "true" === a(this).attr("isUpper"), c.currentFilter.category = null, void c.updateContent())
        }), this.params.$el.on("click keypress", "li", function(b) {
            return "keypress" === b.type && 13 !== b.which || void c.selectIndicator(a(this))
        }), this.params.$el.on("click keypress", ".chartworks-menu-search-clear", a.proxy(this.handleEventClearClose, this)), this.params.$el.on("keyup", ".chartworks-menu-search-input", function(d) {
            if (38 !== d.which && 40 !== d.which) {
                var e = 6,
                    f = a(this).val();
                if (0 === f.length) return c.state.activePane = "default", void c.updateContent();
                var g = c.layout.core.filterIndicators({
                    keyword: f
                });
                c.state.activePane = "search", c.updateContent();
                var h = c.params.$el.find(".chartworks-menu-searchresults ul");
                h.empty();
                var i = g.map(function(d, g) {
                    if (g < e) {
                        var h = b.Menu.getMatchLabel(f, c.layout.core.translate(d.labelId));
                        return a("<li>" + h + "</li>").attr("templateId", d.templateId || d.id).attr("isUpper", d.isUpper).attr("tabindex", "0")
                    }
                });
                0 === g.length && (i = [a('<li noresults="1" data-translate="NoResultsFound"></li>')]), h.append(i), c.layout.translateContent(h)
            }
        }), this.params.$el.find(".chartworks-menu-content").on("mousedown", "[tabindex=0]", function(b) {
            a(this).addClass("chartworks-hidefocus")
        }), this.params.$el.find(".chartworks-menu-content").on("blur", "[tabindex=0]", function(b) {
            a(this).removeClass("chartworks-hidefocus")
        })
    }, b.AddIndicatorMenu.prototype.getContent = function() {
        var b = this,
            c = a("<div>").addClass("chartworks-menu-content");
        return c.append('\t\t<div class="chartworks-menu-search">\t\t\t<input class="chartworks-menu-search-input" maxlength="30" data-translate-placeholder="SearchForIndicator"></input>\t\t\t<div class="chartworks-menu-search-clear chartworks-sprite" tabindex="0"></div>\t\t</div>\t\t<div class="chartworks-menu-browse">\t\t\t<div class="chartworks-menu-browse-categories">\t\t\t\t<ul class="chartworks-menu-browse-categorylist chartworks-menu-browse-categories-separator"></ul>\t\t\t\t<ul class="chartworks-menu-browse-upperlower chartworks-menu-browse-categories-separator">\t\t\t\t\t<li isUpper="true" data-translate="UpperIndicators" tabindex="0"></li>\t\t\t\t\t<li isUpper="false" data-translate="LowerIndicators" tabindex="0"></li>\t\t\t\t</ul>\t\t\t\t<ul class="chartworks-addindicator-other">\t\t\t\t\t<li categoryId="all" data-translate="AllIndicators" tabindex="0"></li>\t\t\t\t</ul>\t\t\t</div>\t\t\t<div class="chartworks-menu-browse-results">\t\t\t\t<div></div>\t\t\t\t<ul></ul>\t\t\t</div>\t\t</div>\t\t<div class="chartworks-menu-searchresults">\t\t\t<ul></ul>\t\t</div>'), c.find(".chartworks-menu-browse-categorylist").html(this.getIndicatorCategories().map(function(c) {
            var d = a('<li data-translate="' + c.labelId + '"></li>').attr("categoryId", c.id).attr("tabindex", "0");
            return c.id === b.currentFilter.category && d.addClass("chartworks-menu-browse-selected"), d
        })), c
    }, b.AddIndicatorMenu.prototype.updateContent = function() {
        var b, c = this;
        if ("search" === this.state.activePane) this.layout.$el.container.find(".chartworks-menu-browse").hide(), this.layout.$el.container.find(".chartworks-menu-searchresults").show();
        else {
            this.layout.$el.container.find(".chartworks-menu-browse").show(), this.layout.$el.container.find(".chartworks-menu-searchresults").hide(), this.params.$el.find(".chartworks-menu-browse-categories li").removeClass("chartworks-menu-browse-selected"), c.currentFilter.category ? b = this.params.$el.find('.chartworks-menu-browse-categories li[categoryId="' + c.currentFilter.category + '"]') : "boolean" == typeof c.currentFilter.isUpper && (b = this.params.$el.find('.chartworks-menu-browse-upperlower li[isUpper="' + (c.currentFilter.isUpper ? "true" : "false") + '"]')), b.addClass("chartworks-menu-browse-selected");
            var d = this.getIndicatorCategories().filter(function(a) {
                return a.id === c.currentFilter.category
            });
            this.params.$el.find(".chartworks-menu-browse-results div").html(d.length ? this.layout.core.translate(d[0].descriptionId) : "");
            var e = this.params.$el.find(".chartworks-menu-browse-results ul");
            e.empty(), e.append(this.layout.core.filterIndicators(this.currentFilter).map(function(b) {
                return "price" === b.id ? null : a("<li>" + c.layout.core.translate(b.labelId) + "</li>").attr("tabindex", "0").attr("templateId", b.templateId || b.id).attr("isUpper", b.isUpper)
            })), this.layout.$el.container.find(".content-lower-categories").show(), this.layout.$el.container.find(".content-lower-results").hide()
        }
    }, b.DialogMenu = function(a) {
        this.superclass.call(this, a)
    }, b.Extend(b.DialogMenu, b.Menu), b.DialogMenu.prototype.getDefaultParams = function() {
        return {
            id: "dialog",
            align: "chartcenter",
            el: null,
            width: 380,
            isModal: !0
        }
    }, b.DialogMenu.prototype.setEventHandlers = function() {
        var a = this;
        this.params.$el.on("click", 'div[action="ok"]', function() {
            a.layout.closeMenus()
        })
    }, b.DialogMenu.prototype.getContent = function() {
        var b = a("<div>").addClass("chartworks-menu-content");
        return b.append('\t\t<div class="chartworks-menu-dialog-title"></div>\t\t<div class="chartworks-menu-dialog-message"></div>\t\t<div class="chartworks-menucontrols">\t\t\t<div action="ok" data-translate="OK"></div>\t\t</div>'), b
    }, b.DialogMenu.prototype.updateContent = function() {
        this.params.$el.find(".chartworks-menu-dialog-title").html(this.params.title), this.params.$el.find(".chartworks-menu-dialog-message").html(this.params.message)
    }, b.EditIndicatorMenu = function(a, b) {
        this.superclass.call(this, a), this.targetUID = b, this.sliders = {}, this.defaultTargetStyle = {}
    }, b.Extend(b.EditIndicatorMenu, b.Menu), b.EditIndicatorMenu.prototype.getDefaultParams = function() {
        return {
            id: "editindicator",
            align: "chartcenter",
            el: null,
            width: 353,
            height: 380
        }
    }, b.EditIndicatorMenu.prototype.getTargetObject = function() {
        return this.layout.core.chart.getIndicatorByUID(this.targetUID)
    }, b.EditIndicatorMenu.prototype.getContent = function() {
        var b = a("<div>").addClass("chartworks-menu-content"),
            c = this.getTargetObject();
        if (b.append('\t\t<div class="chartworks-editobject-name"></div>\t\t<div class="chartworks-editobject-desc"></div>\t\t<div class="chartworks-editobject-inputs"></div>\t\t<div class="chartworks-editobject-styles"></div>\t\t<div class="chartworks-menucontrols">\t\t\t<div action="remove" data-translate="Remove" tabindex="0"></div>\t\t\t<div action="done" data-translate="Done" tabindex="0"></div>\t\t\t<div action="cancel" data-translate="Cancel" tabindex="0"></div>\t\t</div>'), "custom" === c.params.id && c.params.groupId) this.getContentGrouped(b), b.find('[action="cancel"]').remove();
        else if ("price" === c.params.id || "custom" === c.params.id) {
            var d = "price" === c.params.id ? "Price" : c.params.name,
                e = this.layout.core.getXrefByXID(c.params.symbol);
            e ? (d = e.displaySymbol || e.inputSymbol || e.crossRate || "", e.displayExchange && (d += ":" + e.displayExchange)) : "price" === c.params.id && c.params.symbol && (d = c.params.symbol), this.params.width = 365, b.find(".chartworks-editobject-name").text(d), c === c.panel.indicators[0] && b.find('div[action="remove"]').remove(), this.getContentPrice(b)
        } else {
            var f = this.layout.core.filterIndicators({
                id: c.templateId || c.params.id
            });
            b.find(".chartworks-editobject-name").attr("data-translate", f.labelId), b.find(".chartworks-editobject-desc").attr("data-translate", f.labelId + "Desc"), this.getContentDefault(b)
        }
        return this.layout.translateContent(b), b
    }, b.EditIndicatorMenu.prototype.appendInputRow = function(b, c, d, e) {
        if ("number" == typeof d.value) {
            b.append('<div class="chartworks-editobject-col1"><span data-translate="' + this.getInputLabel(c, d.name) + '"></span></div>');
            var f = a('<div class="chartworks-editobject-col2"></div>'),
                g = a('<input type="text" inputId="' + d.name + '" value="' + d.value + '" />');
            e && g.attr("isCombined", !0), b.append(f.append(g)), this.layout.translateContent(b)
        }
    }, b.EditIndicatorMenu.prototype.getContentDefault = function(c) {
        var d, e, f = c.find(".chartworks-editobject-inputs"),
            g = c.find(".chartworks-editobject-styles"),
            h = this,
            i = ["fillColor"],
            j = this.getTargetObject(),
            k = this.layout.core.filterIndicators({
                id: j.params.id
            });
        a.each(j.params.inputs, function() {
            return !(!k.inputsExcluded || a.inArray(this.name, k.inputsExcluded) === -1) || void h.appendInputRow(f, j.params.id, this)
        }), k.inputsCombined && a.each(k.inputsCombined, function() {
            h.appendInputRow(f, k.id, {
                name: this.id,
                value: this.getValue(j)
            }, !0)
        });
        var l = k.sliderParams || {
            lineColor: "lineColor",
            lineWidth: "lineWidth"
        };
        j.params.style[l.lineWidth] && (h.sliders.lineWidth = new b.Slider({
            value: j.params.style[l.lineWidth],
            color: j.params.style[l.lineColor],
            colorId: l.lineColor,
            widthId: l.lineWidth
        }, h), d = a('<div class="chartworks-editobject-col1" data-translate="LineThickness"></div>'), e = a('<div class="chartworks-editobject-col2"></div>'), e.append(h.sliders.lineWidth.content), g.append(d), g.append(e)), a.each(j.params.style, function(b) {
            return a.inArray(b, i) !== -1 || (!(!k.styleExcluded || a.inArray(b, k.styleExcluded) === -1) || (h.layout.core.clientParams["feature.indicators.editColors"] === !1 || void(!/color/i.test(b) || "price" === j.params.id && "lineColor" !== b || (d = a('<div class="chartworks-editobject-col1"><span data-translate="' + h.getInputLabel(j.params.id, b) + '"></span></div>'), e = a('<div class="chartworks-editobject-col2"></div>').appendTo(g), e.append(h.getContentColorSwatch(b, j)), g.append(d), g.append(e)))))
        }), this.layout.translateContent(g), "number" == typeof k.heightMenu && (this.params.height = k.heightMenu)
    }, b.EditIndicatorMenu.prototype.getContentGrouped = function(c) {
        var d, e, f = c.find(".chartworks-editobject-styles"),
            g = this,
            h = this.getTargetObject(),
            i = h.params.groupId;
        f.append('<div class="chartworks-editobject-name-custom">' + (h.params.groupName || h.params.groupId) + "</div>"), h.panel.indicators.forEach(function(c) {
            if (c.params.groupId === i) {
                if (f.append('<div class="chartworks-editobject-name-custom">' + c.params.name + "</div>"), /line|fill/.test(c.params.markerType)) {
                    var h = "lineWidth-" + c.uid;
                    g.sliders[h] = new b.Slider({
                        value: c.params.style.lineWidth,
                        color: c.params.style.lineColor,
                        targetObject: c
                    }, g), d = a('<div class="chartworks-editobject-col1" data-translate="LineThickness"></div>'), e = a('<div class="chartworks-editobject-col2"></div>'), e.append(g.sliders[h].content), f.append(d), f.append(e)
                }
                d = a('<div class="chartworks-editobject-col1"><span data-translate="' + g.getInputLabel(c.params.id, "lineColor") + '"></div>'), e = a('<div class="chartworks-editobject-col2"></div>').appendTo(f), e.append(g.getContentColorSwatch("lineColor", c)), f.append(d), f.append(e)
            }
        }), this.layout.translateContent(f)
    }, b.EditIndicatorMenu.prototype.getContentPrice = function(b) {
        var c = b.find(".chartworks-editobject-styles");
        c.addClass("chartworks-editobject-styles-price"), a('\t\t<div class="chartworks-editobject-col1">\t\t\t<ul>\t\t\t\t<li rowid="fill" selected tabindex="0"><div class="chartworks-sprite"></div><span data-translate="Area"></span></li>\t\t\t\t<li rowid="ohlc" tabindex="0"><div class="chartworks-sprite"></div><span data-translate="OHLC"></span></li>\t\t\t\t<li rowid="hlc" tabindex="0"><div class="chartworks-sprite"></div><span data-translate="HLC"></span></li>\t\t\t\t<li rowid="candlestick" tabindex="0"><div class="chartworks-sprite"></div><span data-translate="Candlestick"></span></li>\t\t\t\t<li rowid="line" tabindex="0"><div class="chartworks-sprite"></div><span data-translate="Line"></span></li>\t\t\t\t<li rowid="bar" tabindex="0"><div class="chartworks-sprite"></div><span data-translate="Bar"></span></li>\t\t\t\t<li rowid="dot" tabindex="0"><div class="chartworks-sprite"></div><span data-translate="Dot"></span></li>\t\t\t</ul>\t\t</div>\t\t<div class="chartworks-editobject-price-params"></div>').appendTo(c), this.layout.core.clientParams.data && (c.find('li[rowId="ohlc"]').remove(), c.find('li[rowId="hlc"]').remove(), c.find('li[rowId="candlestick"]').remove()), this.layout.translateContent(c)
    }, b.EditIndicatorMenu.prototype.getContentPriceByType = function(c) {
        var d = this.params.$el.find(".chartworks-editobject-price-params"),
            e = this,
            f = this.getTargetObject(),
            g = {
                fill: [{
                    labelId: "LineThickness",
                    paramId: "lineWidth",
                    colorId: "lineColor"
                }, {
                    labelId: "LineColor",
                    paramId: "lineColor"
                }],
                ohlc: [{
                    labelId: "UpColor",
                    paramId: "lineColorUp"
                }, {
                    labelId: "DownColor",
                    paramId: "lineColorDown"
                }],
                hlc: [{
                    labelId: "UpColor",
                    paramId: "lineColorUp"
                }, {
                    labelId: "DownColor",
                    paramId: "lineColorDown"
                }],
                candlestick: [{
                    labelId: "UpColor",
                    paramId: "lineColorUp"
                }, {
                    labelId: "DownColor",
                    paramId: "lineColorDown"
                }],
                line: [{
                    labelId: "LineThickness",
                    paramId: "lineWidth",
                    colorId: "lineColor"
                }, {
                    labelId: "LineColor",
                    paramId: "lineColor"
                }],
                bar: [{
                    labelId: "BarColor",
                    paramId: "lineColor"
                }],
                dot: [{
                    labelId: "DotColor",
                    paramId: "lineColor"
                }]
            };
        d.empty(), this.sliders = [];
        var h = g[c];
        h && (a.each(h, function(c, g) {
            var h, i = a('<div class="chartworks-editobject-col2-label" data-translate="' + g.labelId + '"></div>');
            /color/i.test(g.paramId) ? (h = a('<div class="chartworks-editobject-col2"></div>').appendTo(d), h.append(e.getContentColorSwatch(g.paramId, f))) : /width/i.test(g.paramId) && (e.sliders[g.paramId] = new b.Slider({
                value: f.params.style[g.paramId],
                color: f.params.style[g.colorId],
                colorId: g.colorId
            }, e), h = a('<div class="chartworks-editobject-col2"></div>').appendTo(d), h.append(e.sliders[g.paramId].content)), d.append(i), d.append(h)
        }), this.layout.translateContent(d))
    }, b.EditIndicatorMenu.prototype.updateContent = function() {
        var b = this.getTargetObject();
        this.defaultTargetStyle = a.extend(!0, {}, b.params.style), b.params.markerType && (this.defaultMarkerType = b.params.markerType, this.params.$el.find('li[rowid="' + b.params.markerType + '"]').eq(0).click())
    }, b.EditIndicatorMenu.prototype.setEventHandlers = function() {
        var b = this,
            c = this.getTargetObject();
        this.params.$el.find(".chartworks-menu-content").on("click keypress", '.chartworks-menucontrols [action="cancel"]', function(d) {
            if ("keypress" === d.type && 13 !== d.which) return !0;
            a.extend(c.params.style, b.defaultTargetStyle), b.defaultMarkerType && (c.params.markerType = b.defaultMarkerType);
            var e = c.panel;
            e.applyLegendContent(e.rootLegend, e.indicators), c.panel.core.render(), b.close()
        }), this.params.$el.find(".chartworks-menu-content").on("click keypress", '.chartworks-menucontrols [action="done"]', function(d) {
            if ("keypress" === d.type && 13 !== d.which) return !0;
            var e = JSON.stringify(c.params.inputs);
            b.params.$el.find(".chartworks-editobject-inputs [inputId]").each(function() {
                var d = Number(a(this).val()),
                    e = a(this).attr("inputId"),
                    f = a(this).attr("isCombined");
                if (f) {
                    var g = b.layout.core.filterIndicators({
                            id: c.params.id
                        }),
                        h = g.inputsCombined.filter(function(a) {
                            return a.id === e
                        });
                    h[0].setValue(d, c)
                } else c.setInput(e, d)
            }), e !== JSON.stringify(c.params.inputs) ? b.layout.core.chart.loadData() : (c.panel.updateLegend(), b.layout.core.chart.render()), b.close()
        }), this.params.$el.find(".chartworks-menu-content").on("click keypress", '.chartworks-menucontrols [action="remove"]', function(a) {
            if ("keypress" === a.type && 13 !== a.which) return !0;
            var d = c.params.groupId,
                e = c.panel;
            if (d)
                for (var f = e.indicators.length - 1; f >= 0; f--) e.indicators[f].params.groupId === d && e.onClickRemoveLegendIndicator(e.indicators[f]);
            else e.onClickRemoveLegendIndicator(c);
            e.core.resize(), e.core.render(), b.close()
        }), this.params.$el.find(".chartworks-editobject-styles").on("click keypress", "li", function(d) {
            if ("keypress" === d.type && 13 !== d.which) return !0;
            var e = a(this).attr("rowid"),
                f = b.layout.core.chart;
            if (a(this).siblings().removeAttr("selected"), a(this).attr("selected", !0), b.getContentPriceByType(e), c) {
                c.params.markerType = e, "candlestick" === e && (c.params.markerType = "candlestick", c.params.candleFillType = "hollow", "openClose" === b.layout.core.clientParams["style.indicator.price.markerType.candlestickFillRule"] && (c.params.candleFillType = "filled", c.params.candleFillRule = "openClose"));
                var g = b.layout.core.chart.panels[0];
                g.applyLegendContent(g.rootLegend, g.indicators), f.render()
            }
        }), this.params.$el.find(".chartworks-menu-content").on("mousedown", "[tabindex=0]", function(b) {
            a(this).addClass("chartworks-hidefocus")
        }), this.params.$el.find(".chartworks-menu-content").on("blur", "[tabindex=0]", function(b) {
            a(this).removeClass("chartworks-hidefocus")
        })
    }, b.EditIndicatorMenu.prototype.getInputLabel = function(a, b) {
        var c = this.layout.core.filterIndicators({
            id: a
        });
        if (c && c.labelText && c.labelText[b]) return c.labelText[b];
        var d = {
            period: "Period",
            lineColor: "Color",
            fillColorPos: "UpColor",
            fillColorNeg: "DownColor",
            lineColorZero: "ZeroLineColor",
            highColor: "HighColor",
            lowColor: "LowColor"
        };
        return d[b] || b
    }, b.EditSymbolMenu = function(a) {
        this.superclass.call(this, a)
    }, b.Extend(b.EditSymbolMenu, b.Menu), b.EditSymbolMenu.prototype.getDefaultParams = function(a) {
        return {
            id: "editsymbol",
            align: "bottom",
            el: null,
            $elPaired: a
        }
    }, b.EditSymbolMenu.prototype.setEventHandlers = function() {
        var b = this.layout.core,
            c = this;
        this.params.$el.on("click keypress", ".chartworks-menu-search-clear", a.proxy(this.handleEventClearClose, this)), this.params.$el.on("keyup", ".chartworks-menu-search-input", a.proxy(this.handleEventInputSearch, this)), this.params.$el.on("click keypress", ".chartworks-menu-searchresults li", function(d) {
            if ("keypress" === d.type && 13 !== d.which) return !0;
            var e = a(this).attr("symbol"),
                f = a(this).attr("exchangeId"),
                g = a(this).attr("displaySymbol"),
                h = a(this).attr("displayExchange"),
                i = a(this).attr("xid"),
                j = a(this).attr("crossRate"),
                k = function(a) {
                    a.xid ? (b.layout.removeMenus(), b.setSymbol({
                        symbol: e,
                        exchangeId: f,
                        crossRate: a.crossRate,
                        xid: a.xid,
                        displaySymbol: g,
                        displayExchange: h
                    })) : (b.layout.closeMenus(), b.chart.loadingStop()), c.handleEventClearClose()
                };
            return i || j ? k({
                xid: i,
                crossRate: j,
                symbol: e,
                exchangeId: f,
                displaySymbol: g,
                displayExchange: h
            }) : b.getSymbolLookup({
                symbol: e,
                exchangeId: f,
                displaySymbol: g,
                displayExchange: h
            }, function(a) {
                k(a)
            }), !1
        }), this.params.$el.find(".chartworks-menu-content").on("mousedown", "[tabindex=0]", function(b) {
            a(this).addClass("chartworks-hidefocus")
        }), this.params.$el.find(".chartworks-menu-content").on("blur", "[tabindex=0]", function(b) {
            a(this).removeClass("chartworks-hidefocus")
        })
    }, b.EditSymbolMenu.prototype.getContent = function() {
        var b = a("<div>").addClass("chartworks-menu-content");
        return b.append('\t\t<div class="chartworks-menu-search">\t\t\t<input class="chartworks-menu-search-input" maxlength="30" data-translate-placeholder="SearchForSymbol"></input>\t\t\t<div class="chartworks-menu-search-clear chartworks-sprite" tabindex="0"></div>\t\t</div>\t\t<div class="chartworks-menu-searchresults">\t\t\t<ul></ul>\t\t</div>'), b
    }, b.EditSymbolMenu.prototype.updateContent = function() {
        this.layout.$el.container.find(".chartworks-menu-searchresults").show()
    }, b.EditToolMenu = function(a, b) {
        this.superclass.call(this, a), this.targetUID = b, this.sliders = {}, this.defaultTargetStyle = {}
    }, b.Extend(b.EditToolMenu, b.Menu), b.EditToolMenu.prototype.getDefaultParams = function() {
        var a = {
                id: "edittool",
                align: "chartcenter",
                el: null,
                width: 340,
                height: 190
            },
            b = this.getTargetObject();
        return "text" === b.params.id && (a.width = 300, a.height = 220, b.params.value || (b.params.value = this.layout.core.translate("AddText"))), a
    }, b.EditToolMenu.prototype.getTargetObject = function() {
        return this.layout.core.chart.getToolByUID(this.targetUID)
    }, b.EditToolMenu.prototype.getContent = function() {
        var b = a("<div>").addClass("chartworks-menu-content");
        b.append('\t\t<div class="chartworks-editobject-name"></div>\t\t<div class="chartworks-editobject-styles"></div>\t\t<div class="chartworks-menucontrols">\t\t\t<div action="remove" data-translate="Remove"></div>\t\t\t<div action="done" data-translate="Done"></div>\t\t\t<div action="cancel" data-translate="Cancel"></div>\t\t</div>');
        var c = this.getTargetObject();
        return "text" === c.params.id ? (this.getContentText(b), c.panel.core.render()) : this.getContentDefault(b), this.layout.translateContent(b), b
    }, b.EditToolMenu.prototype.getContentDefault = function(c) {
        var d = this.getTargetObject();
        c.find(".chartworks-editobject-name").attr("data-translate", d.params.name.replace(/\s/g, ""));
        var e = c.find(".chartworks-editobject-styles"),
            f = this;
        f.sliders.lineWidth = new b.Slider({
            value: d.params.style.lineWidth,
            color: d.params.style.lineColor,
            colorId: "lineColor",
            widthId: "lineWidth"
        }, f), e.append('<div class="chartworks-editobject-col1"><span data-translate="LineThickness"></span></div>');
        var g = a('<div class="chartworks-editobject-col2"></div>');
        if (g.append(f.sliders.lineWidth.content), e.append(g), !/fib|gann/.test(d.params.id)) {
            e.append('<div class="chartworks-editobject-col1"><span data-translate="Color"></span></div>');
            var h = a('<div class="chartworks-editobject-col2"></div>');
            h.append(f.getContentColorSwatch("lineColor", d)), e.append(h)
        }
        return c
    }, b.EditToolMenu.FontList = [{
        name: "Arial Black",
        value: '"Arial Black", Gadget, sans-serif'
    }, {
        name: "Arial",
        value: "Arial, Helvetica, sans-serif"
    }, {
        name: "Comic Sans",
        value: '"Comic Sans MS", cursive, sans-serif'
    }, {
        name: "Courier New",
        value: '"Courier New", Courier, monospace'
    }, {
        name: "Georgia",
        value: "Georgia, serif"
    }, {
        name: "Impact",
        value: "Impact, Charcoal, sans-serif"
    }, {
        name: "Lucida Console",
        value: '"Lucida Console", Monaco, monospace'
    }, {
        name: "Lucida Sans",
        value: '"Lucida Sans Unicode", "Lucida Grande", sans-serif'
    }, {
        name: "Palatino",
        value: '"Palatino Linotype", "Book Antiqua", Palatino, serif'
    }, {
        name: "Tahoma",
        value: "Tahoma, Geneva, sans-serif"
    }, {
        name: "Times New Roman",
        value: '"Times New Roman", Times, serif'
    }, {
        name: "Trebuchet MS",
        value: '"Trebuchet MS", Helvetica, sans-serif'
    }, {
        name: "Verdana",
        value: "Verdana, Geneva, sans-serif"
    }], b.EditToolMenu.prototype.getContentText = function(c) {
        var d = this.getTargetObject();
        c.find(".chartworks-editobject-name").attr("data-translate", "InsertText"), c.addClass("chartworks-edittool-text-content");
        var e = c.find(".chartworks-editobject-styles");
        e.append('\t\t<select class="chartworks-edittool-fontfamily"></select>\t\t<select class="chartworks-edittool-fontsize"></select>\t\t<div class="chartworks-menu-swatches"><div class="chartworks-menu-swatch-single"></div></div>\t\t<textarea data-translate-placeholder="AddText"></textarea>');
        var f = e.find(".chartworks-edittool-fontfamily"),
            g = e.find(".chartworks-edittool-fontsize");
        a.each(b.EditToolMenu.FontList, function() {
            f.append(a("<option/>").text(this.name).val(this.value))
        });
        var h = [9, 10, 11, 12, 14, 16, 18, 22, 24, 32];
        return a.each(h, function() {
            g.append(a("<option/>").text(this).val(this))
        }), d.params.value && e.find("textarea").val(d.params.value), c
    }, b.EditToolMenu.prototype.updateContent = function() {
        var b = this.getTargetObject();
        this.defaultTargetStyle = a.extend({}, b.params.style), "text" === b.params.id && this.updateContentText()
    }, b.EditToolMenu.prototype.updateContentText = function() {
        var b = this.getTargetObject();
        this.defaultTargetStyle = a.extend({}, b.params.style), this.defaultTargetValue = b.params.value;
        var c = this.params.$el.find("textarea");
        c[0].select();
        var d = this.params.$el.find(".chartworks-edittool-fontfamily"),
            e = this.params.$el.find(".chartworks-edittool-fontsize");
        d.val(b.params.style.fontFamily), e.val(b.params.style.fontSize), d.val() || d.val(d.find("option").eq(0).val()), e.val() || e.val(e.find("option").eq(0).val()), this.layout.$el.container.find(".chartworks-edittool-text-content .chartworks-menu-swatches div").css("background-color", b.params.style.fontColor)
    }, b.EditToolMenu.prototype.setEventHandlers = function() {
        var b = this,
            c = this.getTargetObject();
        this.params.$el.find(".chartworks-menu-content").on("click", '.chartworks-menucontrols [action="cancel"]', function() {
            return "text" === c.params.id && "Add text" === b.defaultTargetValue ? (c.remove(), void b.close()) : (a.extend(c.params.style, b.defaultTargetStyle), b.defaultTargetValue && (c.params.value = b.defaultTargetValue), c.panel.core.render(), void b.close())
        }), this.params.$el.find(".chartworks-menu-content").on("click", '.chartworks-menucontrols [action="done"]', function() {
            var d = b.params.$el.find(".chartworks-menu-swatches");
            d.each(function() {
                var b = a(this).attr("styleParam");
                c.params.style[b] = a(this).attr("selectedColor")
            }), c.panel.updateLegend(), b.close()
        }), this.params.$el.find(".chartworks-menu-content").on("click", '.chartworks-menucontrols [action="remove"]', function() {
            c.remove(), b.close()
        }), this.params.$el.find(".chartworks-menu-content").on("change", ".chartworks-edittool-fontfamily", function() {
            var b = a(this).val();
            b && (c.params.style.fontFamily = b, c.panel.core.render())
        }), this.params.$el.find(".chartworks-edittool-text-content").on("change", ".chartworks-edittool-fontsize", function() {
            c.params.style.fontSize = a(this).val(), c.panel.core.render()
        }), this.params.$el.find(".chartworks-edittool-text-content").on("keyup", "textarea", function() {
            c.params.value = a(this).val(), c.panel.core.render()
        }), this.params.$el.find(".chartworks-edittool-text-content .chartworks-menu-swatches div").hover(function() {
            var d = a(this).position(),
                e = a("<div/>", {
                    class: "chartworks-menu-swatches-container"
                }).css("top", d.top - 60);
            e.on("mouseenter", function() {
                b.state.hoverSwatch = !0
            }), e.on("mouseleave", function() {
                a(this).remove(), b.state.hoverSwatch = !1
            }), e.append(b.getContentColorSwatch("fontColor", c, a(this))), b.params.$el.append(e), e.css("left", d.left - e.width() / 2 + a(this).width() / 2)
        }, function() {
            window.setTimeout(function() {
                b.state.hoverSwatch || b.params.$el.find(".chartworks-menu-swatches-container").remove()
            }, 75)
        })
    }, b.FrequencyMenu = function(a) {
        this.superclass.call(this, a)
    }, b.Extend(b.FrequencyMenu, b.Menu), b.FrequencyMenu.prototype.getDefaultParams = function(a) {
        return {
            id: "frequency",
            align: "bottom",
            el: null,
            $elPaired: a
        }
    }, b.FrequencyMenu.prototype.menuOptions = [{
        interval: "1",
        period: "Minute",
        intraday: 1,
        labelId: "1Minute"
    }, {
        interval: "3",
        period: "Minute",
        intraday: 1,
        labelId: "3Minute"
    }, {
        interval: "5",
        period: "Minute",
        intraday: 1,
        labelId: "5Minute"
    }, {
        interval: "15",
        period: "Minute",
        intraday: 1,
        labelId: "15Minute"
    }, {
        interval: "1",
        period: "Hour",
        intraday: 1,
        labelId: "1Hour"
    }, {
        interval: "1",
        period: "Day",
        labelId: "Daily"
    }, {
        interval: "1",
        period: "Week",
        labelId: "Weekly"
    }, {
        interval: "1",
        period: "Month",
        labelId: "Monthly"
    }], b.FrequencyMenu.prototype.getLabelFromFrequency = function(a, b, c) {
        var d = [];
        if (b)
            if (/Day|Week|Month/i.test(b)) switch (b) {
                case "Day":
                    d.push("Daily");
                    break;
                case "Week":
                    d.push("Weekly");
                    break;
                case "Month":
                    d.push("Monthly")
            } else d.push(c.toString()), d.push(b);
            else d.push("Daily");
        return a.translate(d.join(""))
    }, b.FrequencyMenu.prototype.getContent = function() {
        var b = this,
            c = a("<div>").addClass("chartworks-menu-content"),
            d = a('<div class="chartworks-menu-header"><div class="chartworks-sprite"></div><span></span></div>'),
            e = a("<ul/>").addClass("chartworks-menu-content-rows");
        return c.append(d), c.append(e), a.each(this.menuOptions, function() {
            e.append(a("<li/>").attr("period", this.period).attr("interval", this.interval).attr("intraday", this.intraday || -1).attr("tabindex", "0").text(b.layout.core.translate(this.labelId)))
        }), e.find("li").on("click keypress", function(c) {
            if ("keypress" === c.type && 13 !== c.which) return !0;
            var d = a(this).attr("period"),
                e = Number(a(this).attr("interval")),
                f = b.layout.core.chart;
            if (f.setDataInterval(e), f.setDataPeriod(d), b.params.$elPaired) {
                var g = b.params.$elPaired.attr("days");
                g && (f.setDays(Number(g)), b.params.$elPaired.removeClass("chartworks-menu-hover"))
            }
            f.loadData(), b.layout.closeMenus()
        }), c.on("mouseenter", function() {
            b.parentMenu && (b.params.$elPaired.addClass("chartworks-menu-hover"), b.state.isHover = !0)
        }), c.on("mousedown", "[tabindex=0]", function(b) {
            a(this).addClass("chartworks-hidefocus")
        }), c.on("blur", "[tabindex=0]", function(b) {
            a(this).removeClass("chartworks-hidefocus")
        }), c
    }, b.FrequencyMenu.prototype.updateContent = function(a) {
        a = a || {};
        var b = this.layout.core.chart,
            c = a.dataInterval || b.params.dataInterval,
            d = a.dataPeriod || b.params.dataPeriod,
            e = a.days || b.params.days;
        this.params.$el.find(".chartworks-menu-header span").html(a.label || this.getLabelFromFrequency(this.layout.core, d, c)), this.params.$el.find("li").hide(), e <= 21 ? this.params.$el.find('li[intraday="1"]').show() : this.params.$el.find('li[intraday="-1"]').show(), e <= 91 && this.params.$el.find('li[period="Month"]').hide()
    }, b.MarkerTypeMenu = function(a) {
        this.superclass.call(this, a)
    }, b.Extend(b.MarkerTypeMenu, b.Menu), b.MarkerTypeMenu.prototype.getDefaultParams = function(a) {
        return {
            id: "markertype",
            align: "bottom",
            el: null,
            $elPaired: a
        }
    }, b.MarkerTypeMenu.prototype.menuOptions = [{
        id: "fill",
        labelId: "Area"
    }, {
        id: "ohlc",
        labelId: "OHLC"
    }, {
        id: "hlc",
        labelId: "HLC"
    }, {
        id: "candlestick",
        labelId: "Candlestick"
    }, {
        id: "line",
        labelId: "Line"
    }, {
        id: "bar",
        labelId: "Bar"
    }, {
        id: "dot",
        labelId: "Dot"
    }], b.MarkerTypeMenu.prototype.getLabelFromMarkerType = function(a, b) {
        var c = this.menuOptions.filter(function(a) {
            return a.id === b
        });
        return c && c.length ? a.translate(c[0].labelId) : "Type"
    }, b.MarkerTypeMenu.prototype.getContent = function() {
        var b = this,
            c = a("<div>").addClass("chartworks-menu-content"),
            d = a('<div class="chartworks-menu-header"><div class="chartworks-sprite"></div><span></span></div>'),
            e = a("<ul/>").addClass("chartworks-menu-content-rows");
        return c.append(d), c.append(e), a.each(this.menuOptions, function() {
            var c = a("<li/>").attr("rowid", this.id).attr("tabindex", "0").text(b.layout.core.translate(this.labelId)),
                d = a("<div></div>", {
                    class: "chartworks-sprite"
                });
            c.prepend(d), e.append(c)
        }), e.find("li").on("mousedown keypress", function(c) {
            if ("keypress" === c.type && 13 !== c.which) return !0;
            var d = a(this).attr("rowid"),
                e = b.layout.core.chart,
                f = e.getPrimaryIndicator();
            f && (f.params.markerType = d, "candlestick" === d && (f.params.markerType = "candlestick", f.params.candleFillType = "hollow", "openClose" === b.layout.core.clientParams["style.indicator.price.markerType.candlestickFillRule"] && (f.params.candleFillType = "filled", f.params.candleFillRule = "openClose")), e.render(), e.dataPrimary && e.dataPrimary.length && e.crosshairDataCallback(e.dataPrimary[e.dataPrimary.length - 1]), e.panels[0].updateLegend(), b.close())
        }), c.on("mousedown", "[tabindex=0]", function(b) {
            a(this).addClass("chartworks-hidefocus")
        }), c.on("blur", "[tabindex=0]", function(b) {
            a(this).removeClass("chartworks-hidefocus")
        }), c
    }, b.MarkerTypeMenu.prototype.updateContent = function() {
        var a = this.layout.core.chart.getPrimaryIndicator().params.markerType;
        this.params.$el.find(".chartworks-menu-header span").html(this.getLabelFromMarkerType(this.layout.core, a)), this.params.$el.find(".chartworks-menu-header").attr("rowid", a)
    }, b.OverlayMenu = function(a) {
        this.superclass.call(this, a), this.menuOptions = [{
            id: "bollinger",
            labelId: "IndicatorBollinger"
        }, {
            id: "ema",
            labelId: "IndicatorEMA"
        }, {
            id: "linearregression",
            labelId: "IndicatorLR"
        }, {
            id: "mae",
            labelId: "IndicatorMAE"
        }, {
            id: "sma",
            labelId: "IndicatorSMA"
        }, {
            id: "wma",
            labelId: "IndicatorWMA"
        }]
    }, b.Extend(b.OverlayMenu, b.Menu), b.OverlayMenu.prototype.getDefaultParams = function(a) {
        return {
            id: "overlay",
            align: "bottom",
            el: null,
            $elPaired: a
        }
    }, b.OverlayMenu.prototype.getContent = function() {
        var b = this,
            c = a("<div>").addClass("chartworks-menu-content"),
            d = a("<ul/>").addClass("chartworks-menu-content-rows").appendTo(c);
        return a.each(this.menuOptions, function(c) {
            d.append(a("<li/>").attr("rowid", b.menuOptions[c].id).attr("data-translate", b.menuOptions[c].labelId).attr("tabindex", "0"))
        }), d.find("li").on("click keypress", function(c) {
            if ("keypress" === c.type && 13 !== c.which) return !0;
            var d = a(this).attr("rowid"),
                e = b.layout.core.chart,
                f = b.params.panel,
                g = {
                    parentUID: f.indicators[0].params.uid,
                    style: {},
                    inputs: []
                },
                h = b.layout.core.filterIndicators({
                    id: d
                });
            h && (h.style && (a.extend(g.style, h.style), "auto" === h.style.lineColor && (g.style.lineColor = b.layout.getNewLineColor(f.indicators))), h.inputs && a.extend(g.inputs, h.inputs)), b.layout.core.addModchartsIndicator(f, d, g), e.loadData(), b.close()
        }), c.on("mousedown", "[tabindex=0]", function(b) {
            a(this).addClass("chartworks-hidefocus")
        }), c.on("blur", "[tabindex=0]", function(b) {
            a(this).removeClass("chartworks-hidefocus")
        }), c
    }, b.OverlayMenu.prototype.updateContent = function() {}, b.SaveLoadMenu = function(a) {
        this.superclass.call(this, a), this.state.activePane = "default", this.currentFilter = {
            isUpper: null,
            category: a.core.clientParams["feature.saveLoadCharts"] ? "savechart" : "savetemplate"
        }
    }, b.Extend(b.SaveLoadMenu, b.Menu), b.SaveLoadMenu.prototype.getDefaultParams = function(a) {
        return {
            id: "saveload",
            align: "bottom",
            el: null,
            $elPaired: a
        }
    }, b.SaveLoadMenu.prototype.getCategories = function() {
        var a = [],
            b = this.layout.core.clientParams;
        return (b["feature.saveLoad"] || b["feature.saveLoadTemplates"]) && (a.push({
            nameId: "SaveTemplate",
            id: "savetemplate",
            descriptionId: "SaveTemplateDesc",
            placeholderId: "EnterNameTemplate"
        }), a.push({
            nameId: "LoadTemplate",
            id: "loadtemplate"
        })), (b["feature.saveLoad"] || b["feature.saveLoadCharts"]) && (a.push({
            nameId: "SaveChart",
            id: "savechart",
            descriptionId: "SaveChartDesc",
            placeholderId: "EnterNameChart"
        }), a.push({
            nameId: "LoadChart",
            id: "loadchart"
        })), a
    }, b.SaveLoadMenu.prototype.isEventAction = function(a) {
        return "click" === a.type || "mousedown" === a.type || 13 === a.which
    }, b.SaveLoadMenu.prototype.setEventHandlers = function() {
        var b = this,
            c = this.layout.core;
        this.params.$el.on("click keypress", ".chartworks-menu-browse-categories li[categoryId]", function(c) {
            b.isEventAction(c) && (c.preventDefault(), b.currentFilter.category = a(this).attr("categoryId"), b.currentFilter.isUpper = null, b.updateContent())
        }), this.params.$el.on("click keypress", '.chartworks-menucontrols [action="cancel"]', function(a) {
            b.isEventAction(a) && (a.preventDefault(), b.updateContent(), b.layout.closeMenus())
        }), this.params.$el.on("click keypress", '.chartworks-menucontrols [action="canceldelete"]', function(a) {
            if (b.isEventAction(a)) {
                a.preventDefault(), b.params.$el.focus();
                var c = b.params.$el.find(".chartworks-menucontrols");
                c.removeClass("chartworks-menucontrols-confirm"), c.html('<div action="cancel">Cancel</div>')
            }
        }), this.params.$el.on("click keypress", '.chartworks-menucontrols [action="savetemplate"]', function(a) {
            if (b.isEventAction(a)) {
                var d = b.params.$el.find(".chartworks-menu-browse-results input").val();
                return a.preventDefault(), d && (b.layout.core.updateModchartsMetaData(), "universal" === c.clientParams.saveTemplateFormat ? c.chart.saveTemplateUniversal({
                    name: d
                }) : c.chart.saveTemplate(d), b.confirmSave(d, "Template")), !1
            }
        }), this.params.$el.on("click keypress", '.chartworks-menucontrols-confirm [action="savedone"]', function(a) {
            b.isEventAction(a) && (a.preventDefault(), b.layout.closeMenus())
        }), this.params.$el.parent().on("keypress", '.chartworks-menu[categoryid="savetemplate"] input', function(a) {
            13 === a.which && (a.preventDefault(), b.params.$el.find('.chartworks-menucontrols [action="savetemplate"]').click())
        }), this.params.$el.on("click keypress", 'ul[categoryId="loadchart"] li', function(d) {
            if (b.isEventAction(d)) {
                d.preventDefault();
                var e = a(this).attr("savedId");
                e && (c.chart.loadSaved(e), b.layout.closeMenus())
            }
        }), this.params.$el.on("click keypress", 'ul[categoryId="loadtemplate"] li', function(d) {
            if (b.isEventAction(d)) {
                d.preventDefault();
                var e = a(this).attr("savedId");
                e && (c.chart.template(e, {
                    panelParams: b.layout.core.getModchartsPanelParams()
                }), b.layout.closeMenus())
            }
        }), this.params.$el.on("click keypress", ".chartworks-menu-removerow", function(c) {
            return "keypress" === c.type && 13 !== c.which || void(b.isEventAction(c) && (c.preventDefault(), c.stopPropagation(), b.confirmDelete(a(this).parent())))
        }), this.params.$el.on("click keypress", '.chartworks-menucontrols-confirm [action="delete"]', function(d) {
            if (b.isEventAction(d)) {
                d.preventDefault();
                var e = "loadtemplate" === a(this).attr("categoryId") ? "chartapi/deletetemplate/" : "chartapi/delete/";
                a.ajax({
                    dataType: "json",
                    url: c.chart.params.apiPath + e + a(this).attr("savedId"),
                    headers: {
                        Authorization: "Bearer " + c.clientParams.token
                    },
                    error: function(a) {
                        "abort" !== a.statusText && c.onAPIError({
                            status: a.status,
                            statusMsg: a.statusText
                        })
                    },
                    success: function() {
                        b.updateContent()
                    }
                })
            }
        }), this.params.$el.on("click keypress", '.chartworks-menucontrols [action="savechart"]', function(a) {
            if ("keypress" === a.type && 13 !== a.which) return !0;
            a.preventDefault();
            var d = b.params.$el.find(".chartworks-menu-browse-results input").val();
            return d && (b.layout.core.updateModchartsMetaData(), c.chart.save(!1, d), b.confirmSaveChart(d)), !1
        }), this.params.$el.parent().on("keypress", '.chartworks-menu[categoryid="savechart"] input', function(a) {
            13 === a.which && (a.preventDefault(), b.params.$el.find('.chartworks-menucontrols [action="savechart"]').click())
        }), this.params.$el.find(".chartworks-menu-content").on("mousedown", "[tabindex=0]", function(b) {
            a(this).addClass("chartworks-hidefocus")
        }), this.params.$el.find(".chartworks-menu-content").on("blur", "[tabindex=0]", function(b) {
            a(this).removeClass("chartworks-hidefocus")
        })
    }, b.SaveLoadMenu.prototype.confirmSaveChart = function(a) {
        return this.confirmSave(a, "Chart")
    }, b.SaveLoadMenu.prototype.confirmSave = function(a, b) {
        var c = this.params.$el.find(".chartworks-menucontrols");
        b || (b = "Template");
        var d = "Template" === b ? "TemplateSavedAs" : "ChartSavedAs";
        c.addClass("chartworks-menucontrols-confirm"), c.empty(), c.append('<div class="chartworks-menucontrols-label"><span data-translate="' + d + '"></span> <strong>' + this.trimText(a) + "</strong></div>"), c.append('<div action="savedone" data-translate="Done" tabindex="0"></div>'), this.layout.translateContent(c)
    }, b.SaveLoadMenu.prototype.confirmDelete = function(a) {
        var b = a.attr("savedId"),
            c = a.attr("title"),
            d = a.attr("categoryId"),
            e = this.params.$el.find(".chartworks-menucontrols");
        e.focus(), e.addClass("chartworks-menucontrols-confirm"), e.empty(), e.append('<div class="chartworks-menucontrols-label"><span data-translate="Delete">Delete</span> <strong>' + this.trimText(c) + "</strong>?</div>"), e.append('<div action="delete" savedId="' + b + '" categoryId="' + d + '" data-translate="Delete" tabindex="0"></div>'), e.append('<div action="canceldelete" data-translate="Cancel" tabindex="0"></div>'), this.layout.translateContent(e)
    }, b.SaveLoadMenu.prototype.getContent = function() {
        var b = this,
            c = a("<div>").addClass("chartworks-menu-content");
        return c.append('\t\t<div class="chartworks-menu-browse">\t\t\t<div class="chartworks-menu-browse-categories">\t\t\t\t<ul class="chartworks-menu-browse-categorylist"></ul>\t\t\t</div>\t\t\t<div class="chartworks-menu-browse-results"></div>\t\t</div>\t\t<div class="chartworks-menucontrols" tabindex="-1"></div>'), c.find(".chartworks-menu-browse-categorylist").html(this.getCategories().map(function(c) {
            var d = a('<li data-translate="' + c.nameId + '"></li>').attr("categoryId", c.id).attr("tabindex", "0");
            return c.id === b.currentFilter.category && d.addClass("chartworks-menu-browse-selected"), d
        })), c
    }, b.SaveLoadMenu.prototype.getDateElapsedLabel = function(a) {
        var b = new Date,
            c = (b - a) / 1e3;
        if (c < 86400) return b.getDate() === a.getDate() ? this.layout.core.translate("Today") : this.layout.core.translate("Yesterday");
        var d = Math.ceil(c / 60 / 60 / 24);
        return d > 1 ? this.layout.core.translate("DaysAgo").replace("{0}", d) : this.layout.core.translate("1DayAgo")
    }, b.SaveLoadMenu.prototype.trimText = function(a) {
        return a.length > 18 && (a = a.substring(0, 18) + "..."), a
    }, b.SaveLoadMenu.prototype.updateContent = function() {
        var b, c = this,
            d = c.currentFilter.category,
            e = /save/i.test(d),
            f = this.params.$el.find(".chartworks-menu-browse-results"),
            g = this.params.$el.find(".chartworks-menucontrols"),
            h = this.getCategories().filter(function(a) {
                return a.id === d
            })[0];
        if (f.empty(), g.empty(), this.params.$el.find(".chartworks-menucontrols").removeClass("chartworks-menucontrols-confirm"), this.params.$el.attr("categoryId", d), this.params.$el.find(".chartworks-menu-browse-categories li").removeClass("chartworks-menu-browse-selected"), b = this.params.$el.find('.chartworks-menu-browse-categories li[categoryId="' + d + '"]'), b.addClass("chartworks-menu-browse-selected"), e) a("<input />").attr("data-translate-placeholder", h.placeholderId).attr("maxlength", "20").appendTo(f), a("<div></div>").attr("data-translate", h.descriptionId).appendTo(f), "savetemplate" === d ? g.append('<div action="savetemplate" data-translate="Save" tabindex="0"></div>') : "savechart" === d && g.append('<div action="savechart" data-translate="Save" tabindex="0"></div>');
        else {
            var i = a('<ul categoryId="' + d + '"></ul>').appendTo(f),
                j = c.layout.core.chart,
                k = "loadtemplate" === d ? '<li data-translate="YourSavedTemplatesWill"></li>' : '<li data-translate="YourSavedChartsWill"></li>',
                l = {};
            c.layout.core.clientParams.token && (l.Authorization = "Bearer " + c.layout.core.clientParams.token), c.layout.core.clientParams.accessToken && (l["X-MOD-ACCESS-TOKEN"] = c.layout.core.clientParams.accessToken), i.append('<li><span data-translate="Loading"></span> ...</li>'), a.ajax({
                cache: !1,
                url: j.params.apiPath + "chartapi/list",
                headers: l,
                dataType: "json",
                error: function(a) {
                    "abort" !== a.statusText && (i.html(k), c.layout.core.onAPIError({
                        status: a.status,
                        statusMsg: a.statusText
                    }), c.layout.translateContent(i))
                },
                success: function(b, e, f) {
                    var g = j.parseDebugInfo(f.responseText),
                        h = "loadchart" === d ? "Modcharts" : "Modcharts-Template",
                        l = g.filter(function(a) {
                            return a.Category === h && "Shared_0" !== a.Name
                        });
                    i.empty(), i.append(l.map(function(b) {
                        var e = "";
                        try {
                            e = decodeURIComponent(b.Name)
                        } catch (a) {
                            e = window.unescape(b.Name)
                        }
                        e = c.trimText(e);
                        var f = a("<li>").attr("title", e).attr("savedId", b.Id).attr("categoryId", d);
                        return a('<span tabindex="0"></span>').html(e).appendTo(f), f.append('<div class="chartworks-sprite chartworks-menu-removerow" data-translate-title="Delete" tabindex="0"></div>'), f.append('<div class="chartworks-menu-saveload-date">' + c.getDateElapsedLabel(new Date(b.Date)) + "</div>"), f
                    })), 0 === l.length && i.append(k), c.layout.translateContent(i)
                }
            })
        }
        g.append('<div action="cancel" data-translate="Cancel" tabindex="0"></div>'), this.layout.translateContent(this.params.$el)
    }, b.SettingsMenu = function(a) {
        this.superclass.call(this, a)
    }, b.Extend(b.SettingsMenu, b.Menu), b.SettingsMenu.prototype.getDefaultParams = function(a) {
        return {
            id: "settings",
            align: "flush-right",
            el: null,
            $elPaired: a
        }
    }, b.SettingsMenu.prototype.setEventHandlers = function() {
        var b = this.layout.core.chart,
            c = this;
        this.params.$el.on("click keypress", "li", function(d) {
            if ("keypress" === d.type && 13 !== d.which) return !0;
            var e = a(this).attr("setting");
            "extended" === e ? (b.setExtendedHours(!b.params.extendedHours), b.params.extendedHours === !0 && b.params.days > 21 && (b.setDays(1), b.setDataInterval(3), b.setDataPeriod("Minute"), b.resetDomain()), b.loadData()) : "print" === e ? c.layout.core.print() : "downloadImage" === e ? c.layout.core.downloadImage() : "indicatorLegendValues" === e ? (b.parent.clientParams.showIndicatorLegendValues = !b.parent.clientParams.showIndicatorLegendValues, b.loadData()) : "reset" === e ? c.layout.core.reset() : "indicatorFlags" === e && (b.params.showComponentSeriesFlags = !b.params.showComponentSeriesFlags, b.panels[0].resetComponentSeriesFlags(), b.render()), c.close()
        }), this.params.$el.find(".chartworks-menu-content").on("mousedown", "[tabindex=0]", function(b) {
            a(this).addClass("chartworks-hidefocus")
        }), this.params.$el.find(".chartworks-menu-content").on("blur", "[tabindex=0]", function(b) {
            a(this).removeClass("chartworks-hidefocus")
        })
    }, b.SettingsMenu.prototype.getContent = function() {
        var b = (this.layout.core, a("<div>").addClass("chartworks-menu-content"));
        return b.append('<ul class="chartworks-menu-content-rows" />'), b
    }, b.SettingsMenu.prototype.updateContent = function() {
        var b = this.layout.core,
            c = this.params.$el.find("div.chartworks-menu-content").find("ul");
        if (c.empty(), b.clientParams["feature.settings.print"] !== !1 && c.append('<li setting="print" data-translate="Print" tabindex="0"></li>'), b.clientParams["feature.settings.downloadImage"] !== !1 && c.append('<li setting="downloadImage" data-translate="DownloadImage" tabindex="0"></li>'), b.clientParams["feature.settings.extendedHours"] === !0) {
            a('<li setting="extended" data-translate="ShowExtendedHours" tabindex="0"></li>').appendTo(c)
        }
        b.clientParams["feature.settings.indicatorLegendValues"] === !0 && c.append('<li setting="indicatorLegendValues" data-translate="ShowIndicatorValues" tabindex="0"></li>'), b.clientParams["feature.settings.indicatorFlags"] === !0 && c.append('<li setting="indicatorFlags" data-translate="ShowIndicatorFlags" tabindex="0"></li>'), b.clientParams["feature.settings.reset"] === !0 && c.append('<li setting="reset" data-translate="ResetChart" tabindex="0"></li>'), this.layout.translateContent(c), this.updateCheckmarks(c)
    }, b.SettingsMenu.prototype.updateCheckmarks = function(a) {
        var b = this.layout.core;
        b.chart.params.extendedHours === !0 && a.find('li[setting="extended"]').append('<div class="chartworks-menu-checkmark">&#10004;</div>'), b.clientParams.showIndicatorLegendValues === !0 && a.find('li[setting="indicatorLegendValues"]').append('<div class="chartworks-menu-checkmark">&#10004;</div>'), b.chart.params.showComponentSeriesFlags === !0 && a.find('li[setting="indicatorFlags"]').append('<div class="chartworks-menu-checkmark">&#10004;</div>')
    }, b.TimeframeMenu = function(a) {
        this.superclass.call(this, a), this.flyout = null
    }, b.Extend(b.TimeframeMenu, b.Menu), b.TimeframeMenu.prototype.getDefaultParams = function(a) {
        return {
            id: "timeframe",
            align: "bottom",
            el: null,
            $elPaired: a
        }
    }, b.TimeframeMenu.prototype.getMenuOptions = function(a) {
        var b = this,
            c = "large" === a.size ? a.clientParams["feature.large.timeframes"] : a.clientParams["feature.small.timeframes"],
            d = [];
        return c.forEach(function(c) {
            d.push({
                labelId: b.getLabelId(c),
                days: a.getChartDays(c)
            })
        }), d
    }, b.TimeframeMenu.prototype.getLabelId = function(a) {
        var b = {
            "1d": "1Day",
            "5d": "5Day",
            "10d": "10Day",
            "20d": "20Day",
            "1m": "1Month",
            "3m": "3Month",
            "6m": "6Month",
            ytd: "ytd",
            "1y": "1Year",
            "3y": "3Year",
            "5y": "5Year",
            "10y": "10Year",
            "15y": "15Year",
            "20y": "20Year",
            Max: "Max"
        };
        return b[a]
    }, b.TimeframeMenu.prototype.getLabelFromDays = function(b, c, d) {
        var e = this.getMenuOptions(b);
        if (b.clientParams.data && b.clientParams.timeframe && (c = b.chart.params.days || b.getChartDays()), !c || d.params.dateStart && d.params.dateStop && !b.clientParams.data) return b.translate("Custom");
        var f = e.filter(function(a) {
            return a.days === c
        });
        if (f.length) return b.translate(f[0].labelId);
        var g = e[e.length - 1].days,
            h = "";
        return a.each(e, function() {
            g = Math.min(c, this.days), g === this.days && (h = this.labelId)
        }), b.translate(h)
    }, b.TimeframeMenu.prototype.getContent = function() {
        var c = this,
            d = this.layout.core.chart,
            e = a("<div>").addClass("chartworks-menu-content"),
            f = a('<div class="chartworks-menu-header"><div class="chartworks-sprite"></div><span></span></div>'),
            g = a("<ul/>").addClass("chartworks-menu-content-rows"),
            h = this.layout.core.clientParams["feature.intraday"],
            i = "boolean" == typeof h && !h,
            j = this.getMenuOptions(this.layout.core);
        return e.append(f), e.append(g), a.each(j, function() {
            return !!(i && this.days < 31) || void g.append(a("<li/>").attr("days", this.days).attr("tabindex", "0").text(c.layout.core.translate(this.labelId)))
        }), g.on("click keypress", "li", function(b) {
            return "keypress" === b.type && 13 !== b.which || void("-1" === a(this).attr("days") ? c.layout.core.getInceptionDate(function(a) {
                d.params.isMax = !0, c.setDays(a)
            }) : c.setDays(Number(a(this).attr("days"))))
        }), e.on("mousedown", "[tabindex=0]", function(b) {
            a(this).addClass("chartworks-hidefocus")
        }), e.on("blur", "[tabindex=0]", function(b) {
            a(this).removeClass("chartworks-hidefocus")
        }), c.layout.core.clientParams.data || g.on("mouseenter", "li", function() {
            var d = a(this);
            if ("-1" === d.attr("days")) return window.clearTimeout(c.flyoutTimeout), void(c.layout.menus["frequency-flyout"] && c.layout.menus["frequency-flyout"].close());
            d.siblings().removeClass("chartworks-menu-hover"), c.layout.menus["frequency-flyout"] || (c.layout.menus["frequency-flyout"] = new b.FrequencyMenu(c.layout), c.layout.menus["frequency-flyout"].init(d, {
                align: "right"
            }), c.layout.menus["frequency-flyout"].parentMenu = c);
            var e = c.layout.menus["frequency-flyout"].state.open ? 10 : 400;
            window.clearTimeout(c.flyoutTimeout), c.flyoutTimeout = window.setTimeout(function() {
                c.layout.menus["frequency-flyout"].params.$elPaired = d, c.layout.menus["frequency-flyout"].open();
                var a = Number(d.attr("days")),
                    b = c.layout.core.getFrequencyByDays(a);
                c.layout.menus["frequency-flyout"].updateContent({
                    label: c.layout.core.translate("Frequency"),
                    days: a,
                    dataPeriod: b.dataPeriod,
                    dataInterval: b.dataInterval
                })
            }, e)
        }), e
    }, b.TimeframeMenu.prototype.updateContent = function() {
        var a = this.layout.core.chart.params.days;
        this.params.$el.find(".chartworks-menu-header span").html(this.getLabelFromDays(this.layout.core, a, this.layout.core.chart))
    }, b.TimeframeMenu.prototype.setDays = function(b) {
        var c = this.layout.core.chart,
            d = new Date;
        if (c.params.customData) d.setDate(d.getDate() - b), c.setDateRange(new Date(d), new Date), c.params.days = b, c.loadCustomData();
        else {
            var e = this.layout.core.getFrequencyByDays(b);
            c.setDays(b), c.setDataInterval(e.dataInterval), c.setDataPeriod(e.dataPeriod), c.loadData()
        }
        this.close(), a(this).siblings().removeClass("chartworks-menu-hover"), window.clearTimeout(this.flyoutTimeout), this.layout.closeMenus()
    }, b.prototype.addNewIndicator = function(b, c, d) {
        var e, f = this.chart,
            g = a.extend(!0, {}, this.filterIndicators({
                id: b
            })),
            h = a.extend(!0, {}, this.getModchartsIndicatorParams(g));
        if (d = d || {}, (h.inputs || []).forEach(function(b) {
                a.each(c || {}, function(a, c) {
                    a === b.name && (b.value = c)
                })
            }), g.isUpper) e = this.addModchartsIndicator(f.panels[0], g.id, h);
        else {
            var i = a.extend({}, f.panels[0].params);
            i.size.heightPct = null, i.style.yaxisPaddingTop = 30, i.style.yaxisPaddingBottom = 30;
            var j = f.addPanel(i);
            e = this.addModchartsIndicator(j, g.id, h)
        }
        e.templateId = b, d.noLoad || f.loadData(), this.layout.closeMenus()
    }, b.prototype.getModchartsIndicatorParams = function(b) {
        var c = this,
            d = {
                inputs: [],
                style: {}
            };
        return b && (b.markerType && (d.markerType = b.markerType), b.inputs && (d.inputs = a.extend(!0, [], b.inputs)), b.bands && (d.bands = a.extend(!0, [], b.bands), a.each(d.bands, function() {
            this.labelText && (this.labelText = c.translate(this.labelText))
        })), b.style && (d.style = a.extend(!0, {}, b.style), a.extend(d.style, this.getClientIndicatorStyle(b))), b.style && "auto" === b.style.lineColor && (d.style.lineColor = c.layout.getNewLineColor())), d
    }, b.prototype.getClientIndicatorStyleKey = function(a, b) {
        return a.styleInputMap && a.styleInputMap[b] && (b = a.styleInputMap[b]), "style.indicator.{id}.{key}".replace("{id}", a.id).replace("{key}", b)
    }, b.prototype.getClientIndicatorStyle = function(b) {
        var c = this,
            d = {};
        return "price" === b.id ? a.each({
            lineColor: "lineColor",
            lineWidth: "lineWidth",
            fillColor: "fillColor",
            fillColorDot: "lineColor",
            lineColorDot: "lineColor",
            fillColorPos: "lineColorUp",
            fillColorNeg: "lineColorDown",
            fillColorNeutral: "lineColorNeutral",
            lineColorUp: "lineColorUp",
            lineColorDown: "lineColorDown",
            lineColorNeutral: "lineColorNeutral"
        }, function(a, b) {
            var e = "style.indicator.price.{0}".replace("{0}", b);
            c.clientParams[e] && (d[a] = c.clientParams[e])
        }) : a.each(b.style, function(a, e) {
            var f = c.getClientIndicatorStyleKey(b, a),
                g = c.clientParams[f];
            g && (d[a] = g)
        }), d
    }, b.prototype.getModchartsPrimaryIndicator = function() {
        var a = this.filterIndicators({
                id: "price"
            }),
            b = "fill",
            c = this.clientParams["style.indicator.price.markerType"],
            d = {
                id: "price",
                markerType: b,
                ohlcPosNeg: !0,
                style: this.getModchartsIndicatorParams(a).style
            };
        return "string" == typeof c && /^bar|dot|area|line|hlc|ohlc|candlestick$/i.test(c) && ("area" === c && (c = "fill"), "openClose" === this.clientParams["style.indicator.price.markerType.candlestickFillRule"] && (d.candleFillType = "filled", d.candleFillRule = "openClose"), d.markerType = c.toLowerCase()), d
    }, b.prototype.getLegendRow = function(c, d) {
        var e = d.panel,
            f = e.isUpper(),
            g = "",
            h = [],
            i = this,
            j = 0,
            k = this.filterIndicators({
                id: d.templateId || d.params.templateId || d.params.id
            }) || {},
            l = a("<div>", {
                class: "chartworks-legend-row" + (0 === c ? " chartworks-legend-row-first" : ""),
                indicatorUID: d.params.uid,
                templateId: d.templateId || d.params.id
            });
        if ("price" === d.params.id) {
            var m = this.getXrefByXID(d.params.symbol);
            m || (m = {
                inputSymbol: d.params.symbol
            }), g = m.displaySymbol || m.inputSymbol || m.xid || m.crossRate || "", m.displayExchange && (g += ":" + m.displayExchange), i.layout.core.clientParams["feature.indicators.editColors"] === !1 && l.addClass("chartworks-legend-row-nomenu")
        } else if ("custom" === d.params.id) g = d.params.groupName || d.params.name;
        else if ("crs" === d.params.id) g = d.params.name, this.chart.wsodIssue[d.params.inputs[0].value] && (g += " (" + this.chart.wsodIssue[d.params.inputs[0].value].companyName + ")");
        else if ("sectorindustry" === d.params.id) g = d.params.name, this.chart.metaData[d.params.uid] && this.chart.metaData[d.params.uid].Name && (g = this.chart.metaData[d.params.uid].Name);
        else if (k.labelId) {
            for (g = e.core.parent.translate(k.labelId), j = 0; j < d.params.inputs.length; j++) k.inputsExcluded && a.inArray(d.params.inputs[j].name, k.inputsExcluded) !== -1 || h.push(d.params.inputs[j].value);
            a.each(k.inputsCombined || [], function(a, b) {
                h.push(b.getValue(d))
            }), g += 0 !== h.length ? " (" + h.join(", ") + ")" : ""
        }
        if (g += '<span class="chartworks-legend-indicatorvalues"></span>', 0 === c) {
            var n = !1;
            if (d.params.groupId) {
                var o = e.indicators.filter(function(a, b) {
                    return b > 0 && (!a.params.groupId || a.params.groupId !== d.params.groupId)
                });
                o.length > 0 && (n = !0)
            } else e.indicators.length > 1 && (n = !0);
            if (n) {
                var p = a("<div/>", {
                    class: "chartworks-legend-caret chartworks-sprite chartworks-sr-text",
                    tabindex: "0"
                });
                p.attr("aria-label", "Expand or Collapse"), l.append(p)
            }
        } else {
            var q = a("<div />", {
                class: "chartworks-legend-item-right chartworks-legend-removeindicator chartworks-sprite chartworks-sr-text",
                tabindex: "0"
            });
            q.text("Remove Indicator"), l.append(q.on("click keypress", function(a) {
                if ("keypress" === a.type && 13 !== a.which) return !0;
                var b = d.params.groupId,
                    c = d.panel;
                if (b)
                    for (var e = c.indicators.length - 1; e >= 0; e--) c.indicators[e].params.groupId === b && c.onClickRemoveLegendIndicator(c.indicators[e]);
                else c.onClickRemoveLegendIndicator(d)
            }))
        }
        var r = a("<div />", {
            class: "chartworks-legend-item chartworks-legend-swatch"
        }).css("background-color", d.params.style.lineColor || d.params.style.fillColor);
        if (k.swatchColors ? (r.append(a("<div />").css("background-color", d.params.style[k.swatchColors[0]])), r.append(a("<div />").css("background-color", d.params.style[k.swatchColors[1]]))) : "price" === d.params.id && ("candlestick" === d.params.markerType ? (r.append(a("<div />").css("background-color", d.params.style.fillColorPos)), r.append(a("<div />").css("background-color", d.params.style.fillColorNeg))) : "ohlc" !== d.params.markerType && "hlc" !== d.params.markerType || (r.append(a("<div />").css("background-color", d.params.style.lineColorUp)), r.append(a("<div />").css("background-color", d.params.style.lineColorDown)))), l.append(r), l.append(a("<div />", {
                class: "chartworks-legend-item chartworks-legend-label chartworks-legend-" + d.params.id,
                tabindex: "0"
            }).html(g)), 0 === c)
            if (f) {
                if ("price" === d.params.id && d.panel.indicators.length > 1) {
                    var s = d.panel.indicators.length - 1,
                        t = "";
                    t = 1 === s ? this.translate("AndMore").replace("{0}", s) : this.translate("AndMorePlural").replace("{0}", s), l.append('<span tabindex="0">' + t + "</span>")
                }
            } else k.noOverlays || "custom" === d.params.id || i.clientParams["feature.legend.addOverlay"] === !1 || l.append(a("<div />", {
                class: "chartworks-legend-overlay",
                "data-translate": "AddOverlay",
                tabindex: "0"
            }).on("click keypress", function(c) {
                if ("keypress" === c.type && 13 !== c.which) return !0;
                c.preventDefault();
                var d = a(this).parents(".modcharts-legend").attr("uid"),
                    f = "overlay-" + d;
                return i.layout.menus[f] && i.layout.menus[f].close(), i.layout.menus[f] = new b.OverlayMenu(i.layout), i.layout.menus[f].init(a(this), {
                    panel: e,
                    width: 210
                }), i.layout.menus[f].toggle(), i.layout.menus[f].params.$el.focus(), !1
            }));
        return 0 !== c || f || l.append(a("<div />", {
            class: "chartworks-legend-indicatorvalues-lower"
        })), e.core.parent.layout.translateContent(l), l.on("mousedown", "[tabindex=0]", function(b) {
            a(this).addClass("chartworks-hidefocus")
        }), l.on("blur", "[tabindex=0]", function(b) {
            a(this).removeClass("chartworks-hidefocus")
        }), l
    }, b.prototype.applyLegendContent = function(b, c) {
        if (null !== c && c.length) {
            var d = this,
                e = d.core,
                f = e.parent,
                g = d.isUpper(),
                h = [];
            g ? (h.push(a("<div/>", {
                class: "chartworks-legend-timestamp"
            })), h.push('\t\t\t<div class="chartworks-legend-ohlc-item chartworks-legend-ohlc-close"><label data-translate="Close"></label>\t\t\t\t<span></span>\t\t\t</div>\t\t\t<div class="chartworks-legend-ohlc-item">C\t\t\t\t<span class="chartworks-legend-ohlc-c"></span>\t\t\t</div>\t\t\t<div class="chartworks-legend-ohlc-item">L\t\t\t\t<span class="chartworks-legend-ohlc-l"></span>\t\t\t</div>\t\t\t<div class="chartworks-legend-ohlc-item">H\t\t\t\t<span class="chartworks-legend-ohlc-h"></span>\t\t\t</div>\t\t\t<div class="chartworks-legend-ohlc-item">O\t\t\t\t<span class="chartworks-legend-ohlc-o"></span>\t\t\t</div>\t\t')) : h.push(a("<div />", {
                class: "chartworks-legend-removepanel chartworks-sprite"
            }).attr("data-translate-title", "RemovePanel").attr("tabindex", "0").on("click keypress", function(a) {
                return "keypress" === a.type && 13 !== a.which || (e.removePanel(d), f.layout.toolbar.update(), f.chart.resize(), void f.chart.render())
            })), h.push(f.getLegendRow(0, c[0]));
            var i = a(b[0]).parent().find(".chartworks-legend-indicators").eq(0);
            i.length ? i.empty() : (i = a("<div />", {
                class: "chartworks-legend-indicators",
                tabindex: "-1"
            }), a(b[0]).before(i));
            for (var j = {}, k = 1; k < c.length; k++)
                if (j = f.getLegendRow(k, c[k]), j && i.append(j), c[k].params.groupId)
                    for (var l = k; l < c.length; l++) c[l].params.groupId === c[k].params.groupId && k++;
            var m = a(b[0]);
            c.length < 2 && (m.removeClass("chartworks-legend-expanded"), i.hide()), a(b[0]).empty(), a(b[0]).append(h), f.layout.translateContent(a(b[0]))
        }
    }, b.prototype.getModchartsPanels = function() {
        var b = [],
            c = this,
            d = this.getModchartsPanelParams(),
            e = this.getModchartsPanelEvents(),
            f = [this.getModchartsPrimaryIndicator()],
            g = "",
            h = null,
            i = null,
            j = this.clientParams["panel.upper.indicator"],
            k = this.clientParams["panel.lower.indicator"];
        return j && ("string" == typeof j && (this.clientParams["panel.upper.indicator"] = [{
            id: j
        }]), this.clientParams["panel.upper.indicator"].forEach(function(b) {
            b.id && (g = b.id.toLowerCase(), h = c.filterIndicators({
                id: g
            }), h && h.isUpper && (i = c.getModchartsIndicatorParams(h), (i.inputs || []).forEach(function(c) {
                a.each(b.params || {}, function(a, b) {
                    a === c.name && (c.value = b)
                })
            }), i.style && i.style.lineColor && (i.style.lineColor = c.chart.getNewLineColor(f)), f.push({
                id: h.id,
                templateId: h.templateId || h.id,
                style: i.style,
                inputs: a.extend(!0, [], i.inputs || [])
            })))
        })), b.push({
            params: a.extend(!0, {}, d),
            indicators: f,
            events: e
        }), k && ("string" == typeof k && (this.clientParams["panel.lower.indicator"] = [{
            id: k
        }]), this.clientParams["panel.lower.indicator"].forEach(function(e) {
            e.id && (g = e.id.toLowerCase(), h = c.filterIndicators({
                id: g
            }), h && !h.isUpper && (i = c.getModchartsIndicatorParams(h), (i.inputs || []).forEach(function(b) {
                a.each(e.params || {}, function(a, c) {
                    a === b.name && (b.value = c)
                })
            }), b.push({
                params: a.extend(!0, {}, d),
                indicators: [{
                    id: h.id,
                    templateId: h.templateId || h.id,
                    style: i.style,
                    inputs: a.extend(!0, [], i.inputs || []),
                    markerType: i.markerType,
                    bands: a.extend(!0, [], i.bands || [])
                }]
            }), "volume" === g && (b[1].params.style.yaxisPaddingBottom = 0)))
        })), b
    }, b.prototype.getYAxisPadding = function() {
        return this.hasEvent("custom") ? 100 : this.hasEvent("dividends") || this.hasEvent("splits") ? 40 : 30
    };
    b.prototype.hasEvent = function(a) {
        if (!this.layout.core.chart.panels.length) return !1;
        var b = this.layout.core.chart.panels[0].events.filter(function(b) {
            return b.params.id === a || b.params.uid === a
        });
        return b.length > 0 ? b[0] : null
    };
    b.prototype.getModchartsPanelParams = function() {
        var a = this.getYAxisPadding(),
            b = {
                style: {
                    gridColor: "#DDDDDD",
                    gridColorAlt: "#AAAAAA",
                    gridColorBorderBottom: "#ACACAC",
                    gridColorBorderRight: "#ACACAC",
                    gridColorBorderTop: "#CFCFCF",
                    gridColorTicks: this.clientParams["style.xAxis.tickColor"] || "#CCCCCC",
                    gridColorTicksAlt: this.clientParams["style.xAxis.altTickColor"] || "#AAAAAA",
                    gridColorVertNormalize: "#777777",
                    gridColorHorizNormalize: "#777777",
                    gridVertPenPxOn: 1,
                    gridVertPenPxOff: 0,
                    gridHorizPenPxOn: 1,
                    gridHorizPenPxOff: 0,
                    gridVertAltPenPxOn: 1,
                    gridVertAltPenPxOff: 0,
                    labelClosureColor: "rgba(255,255,255,0.12)",
                    axisFontColor: this.clientParams["style.axis.fontColor"] || "#999999",
                    axisFontSize: this.clientParams["style.axis.fontSize"] || 12,
                    axisFontFamily: this.clientParams["style.axis.fontFamily"] || "Roboto",
                    axisFontWeight: "normal",
                    xaxisBgColor: "none",
                    xaxisTextAlign: "left",
                    xaxisTickHeight: 5,
                    xaxisTickHeightAlt: 10,
                    xaxisPaddingLeft: 5,
                    xaxisPaddingRight: 0,
                    xaxisPaddingTop: 5,
                    xaxisLineHeight: 15,
                    yaxisBgColor: "none",
                    yaxisPaddingTop: a,
                    yaxisPaddingBottom: a
                },
                padding: {
                    bottom: 40,
                    right: 57
                },
                margin: {
                    bottom: 22
                }
            };
        return b = this.layout.theme.getModchartsPanelParams(b), b = this.layout.getModchartsPanelParams(b)
    }, b.prototype.getModchartsPanelEvents = function() {
        var a = [];
        return this.clientParams.events && this.clientParams.events.length && this.clientParams.events.forEach(function(b) {
            "splits" !== b && "dividends" !== b || a.push({
                id: b
            })
        }), a
    }, b.prototype.loadModchartsChart = function() {
        var b = a(this.clientParams.target).find(".chartworks-modcharts-core")[0],
            c = this;
        if (b) {
            a(b).empty(), this.updateChartPane(), this.chart = new Modcharts(b, {}, this), this.addModchartsExtras(), this.clientParams.token && this.chart.setAuthToken(this.clientParams.token), this.clientParams.accessToken && this.chart.setAccessToken(this.clientParams.accessToken), this.chart.setLineColors(this.layout.theme.params.style.swatchColors);
            var d = this.getChartParams(this.clientParams),
                e = this.getModchartsPanels();
            if (this.clientParams.chartID) this.chart.params = d, this.clientParams.customEvents = [], this.chart.loadSaved(this.clientParams.chartID, function() {
                c.clientParams.chartID = null, c.loadModchartsChartComplete()
            });
            else if (this.clientParams.data) {
                if (c.chart.params.customData = {}, this.clientParams.data.forEach(function(b) {
                        var d = {},
                            e = b.id || b.name;
                        d = b.isLower || !c.chart.panels.length ? c.chart.addPanel(a.extend({}, c.getModchartsPanelParams())) : c.chart.panels[0], b.series ? (d.addIndicator("custom", {
                            datasetId: e,
                            name: b.name,
                            markerType: b.markerType || "line",
                            style: {
                                lineColor: b.color || c.chart.getNewLineColor(d.indicators)
                            }
                        }), c.chart.params.customData[e] = b.series) : b.group && b.group.forEach(function(a) {
                            var f = [e, a.id || a.name].join(":");
                            d.addIndicator("custom", {
                                datasetId: f,
                                groupId: e,
                                groupName: b.name,
                                name: a.name,
                                markerType: a.markerType || "line",
                                style: {
                                    lineColor: a.color || c.chart.getNewLineColor(d.indicators)
                                }
                            }), c.chart.params.customData[f] = a.series
                        })
                    }), this.clientParams.timeframe) {
                    var f = c.getChartDays(this.clientParams.timeframe),
                        g = new Date,
                        h = new Date;
                    g.setDate(g.getDate() - f), c.chart.setDateRange(g, h)
                }
                c.chart.loadCustomData(function() {
                    c.loadModchartsChartComplete()
                })
            } else {
                var i = {
                        xid: this.clientParams.xid,
                        crossRate: this.clientParams.crossRate,
                        symbol: this.clientParams.symbol,
                        exchangeId: this.clientParams.exchange,
                        lookupCode: this.clientParams.lookupCode,
                        displaySymbol: this.clientParams.displaySymbol,
                        displayExchange: this.clientParams.displayExchange
                    },
                    j = function(a) {
                        d.symbol = a;
                        var b = function() {
                            if ("session" === c.clientParams.persistentSettings && "string" == typeof c.clientParams.id && "string" == typeof sessionStorage.getItem(["chartworks", c.clientParams.id].join("-"))) {
                                c.chart.load({
                                    params: d,
                                    panels: e
                                }, null, {
                                    loadData: !1
                                });
                                var a = JSON.parse(sessionStorage.getItem("chartworks-" + c.clientParams.id));
                                c.chart.applyTemplate(a, {
                                    panelParams: c.getModchartsPanelParams()
                                }), c.chart.loadData(function() {
                                    c.loadModchartsChartComplete()
                                })
                            } else d.days === -1 ? (c.chart.load({
                                params: d,
                                panels: e
                            }, null, {
                                loadData: !1
                            }), c.setTimeframe("max", function() {
                                c.loadModchartsChartComplete()
                            })) : c.chart.load({
                                params: d,
                                panels: e
                            }, function() {
                                c.loadModchartsChartComplete()
                            })
                        };
                        if (!a) return b();
                        var f = function(a) {
                                var b = a.xid || a.crossRate;
                                b && (d.symbolCompare.push(b), e[0].indicators.push({
                                    id: "price",
                                    symbol: b,
                                    style: {
                                        lineColor: c.chart.getNewLineColor(e[0].indicators)
                                    }
                                }))
                            },
                            g = c.clientParams.compareSymbols || [],
                            h = g.filter(function(a) {
                                return a.xid || a.crossRate
                            }),
                            i = g.filter(function(a) {
                                return !a.xid && !a.crossRate && a.symbol
                            });
                        h.length && h.forEach(function(a) {
                            c.addLocalXref(a), f(a)
                        }), i.length ? c.getCompareSymbolsLookup(i, function(a) {
                            a = a || [], a.forEach(function(a) {
                                f(a)
                            }), b()
                        }) : b()
                    };
                this.clientParams.xid || this.clientParams.crossRate ? (this.addLocalXref(i), j(this.clientParams.xid || this.clientParams.crossRate)) : this.getSymbolLookup(i, function(a) {
                    a = a || {}, j(a.xid)
                })
            }
        }
    }, b.prototype.loadModchartsChartComplete = function() {
        "object" == typeof this.clientParams.customEvents && this.clientParams.customEvents.length && this.loadCustomEvents(this.clientParams.customEvents), this.clientParams["feature.attribution"] && this.layout.$el.core.find(".chartworks-attribution").show(), "number" == typeof this.clientParams["poll.rate"] && this.startPoll(this.clientParams["poll.rate"]), "all" === this.clientParams["feature.legend.autoExpand"] && this.togglePrimaryExpandedLegend(!0), "comparison" === this.clientParams["feature.legend.autoExpand"] && (this.clientParams.compareSymbols || []).length > 0 && this.togglePrimaryExpandedLegend(!0), this.onComplete()
    }, b.prototype.getChartDays = function(a) {
        if (/(\d+)d/.test(a)) return Number(RegExp.$1);
        if (/(\d+)m/.test(a)) {
            var c = RegExp.$1;
            return "6" === c ? 182 : "3" === c ? 91 : 31 * Number(c)
        }
        return /(\d+)y/.test(a) ? 365 * Number(RegExp.$1) : "ytd" === a ? b.Menu.getYTDDays() : "string" == typeof a && "max" === a.toLowerCase() ? -1 : 365
    }, b.prototype.enforceMinHeight = function() {
        var b = this.clientParams["panel.upper.size.height"];
        b || (b = "large" === this.size ? 430 : 200), this.clientParams["panel.lower.size.height"] && (b += this.clientParams["panel.lower.size.height"]);
        var c = a(this.clientParams.target);
        c.height() < b && c.css("height", b)
    }, b.prototype.updateModchartsMetaData = function() {
        var b = a.merge([], this.xref);
        a.merge(b, this.chart.metaData.chartworksXref || []), this.chart.metaData.chartworksXref = a.merge([], b)
    }, b.prototype.getChartHeight = function() {
        var b = 0;
        return this.chart ? a.each(this.chart.panels, function() {
            b += this.size.height, b += Math.max(this.size.padding.bottom, this.size.margin.bottom)
        }) : this.clientParams && (b += this.clientParams["panel.upper.size.height"] || 0, this.clientParams["panel.lower.size.height"] && this.clientParams["panel.lower.indicator"] && (b += this.clientParams["panel.lower.size.height"])), b
    }, b.prototype.isSessionStorageSupported = function() {
        return !!window.sessionStorage && "function" == typeof sessionStorage.getItem && "function" == typeof sessionStorage.setItem && "function" == typeof sessionStorage.removeItem
    }, b.prototype.updatePersistentSettings = function() {
        if ("string" == typeof this.clientParams.id) {
            var a = ["chartworks", this.clientParams.id].join("-");
            if (this.isSessionStorageSupported())
                if ("session" === this.clientParams.persistentSettings) {
                    var b = this.chart.saveTemplate(null, {
                        noStore: !0
                    });
                    delete b.metaData, sessionStorage.setItem(a, JSON.stringify(b))
                } else sessionStorage.removeItem(a)
        }
    }, b.prototype.updateChartPane = function() {
        var b = a(this.clientParams.target),
            c = b.find(".chartworks-pane-chart"),
            d = b.find(".chartworks-modcharts-core"),
            e = "large" === this.size,
            f = e && this.clientParams["feature.tools"] !== !1,
            g = this.clientParams["feature.attribution"],
            h = this.clientParams["feature.attribution.position"],
            i = parseInt(d.css("margin-top")),
            j = d.offset().top - b.offset().top,
            k = this.layout.$el.core.find(".chartworks-attribution"),
            l = 0;
        if (l = this.clientParams["panel.upper.size.height"] ? this.getChartHeight() : b.height() - j, d.css("height", l), f ? c.css("height", Math.max(400, l + i)) : c.css("height", l + i), this.chart && this.chart.panels.length && g)
            if ("panelBottomLeft" === h) {
                var m = this.chart.panels[0].getPanelHeight(),
                    n = m - k.height(),
                    o = 3;
                e && (n += i, o = f ? 33 : 3), k.addClass("chartworks-attribution-panelbottomleft").css("top", n).css("left", o)
            } else k.removeClass("chartworks-attribution-panelbottomleft").css("top", "auto").css("left", "auto");
        this.chart && this.chart.panels.length && b.find(".modcharts-legend").css("width", 1 + this.chart.panels[0].size.width + "px")
    }, b.prototype.addModchartsExtras = function() {
        function c(a) {
            return l.chart.timeFormat(l.chart.locale[l.chart.params.localeId].date)(a)
        }

        function d(a) {
            return l.chart.timeFormat(l.chart.locale[l.chart.params.localeId].shortDate)(a)
        }

        function e(a) {
            return l.chart.timeFormat("%-I:%M %p")(a).toLowerCase()
        }

        function f(a) {
            return l.chart.timeFormat("%-I:%M%p")(a).toLowerCase().replace("pm", "p").replace("am", "a")
        }

        function g(a) {
            return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }

        function h(a) {
            if (!a) return "";
            var b = l.chart.panels[0].yAxis.scale[0].domain(),
                c = Math.abs(b[1] - b[0]),
                d = c < 1 ? 3 : 2;
            return a >= 1e3 ? g(l.clientParams.showAllMouseoverDecimalPoints && "large" === l.size ? a.toFixed(2) : a.toFixed(0)) : a.toFixed(d)
        }

        function i() {
            return (l.clientParams["feature.attribution.value"] || l.translate("ChartByChartworks")).replace("{0}", "Chartworks")
        }

        function j(a, b) {
            if (!b || !b.panels) return null;
            for (var c = 0, d = []; c < b.panels.length; c++)
                if (d = b.panels[c].filter(function(b) {
                        return b.uid === a
                    }), d.length) return d[0];
            return null
        }

        function k(b, c, d) {
            var e = j(b, d);
            if (e) {
                var f = [],
                    g = l.chart.getIndicatorByUID(b).panel;
                if ("linearregression" === e.id) return;
                var h = !1;
                if ("price" === e.id) {
                    var i = l.chart.getIndicatorByUID(b);
                    h = /candlestick|hlc/.test(i.params.markerType)
                }
                a.each(e, function(a) {
                    if ("number" == typeof e[a] && "symbol" !== a) {
                        if ("price" === e.id && !h && /open|high|low/.test(a)) return !0;
                        var b = g.isNormalized(),
                            c = g.yAxis.getFormatString(null, null, 5);
                        "0,s" === c && (c = "0,.4s");
                        var d = window.d3.locale(g.core.locale[g.core.params.localeId]).numberFormat(c),
                            i = g.yAxis.getFormatValue(d(e[a]), null, b);
                        f.push(i)
                    }
                }), f.length && c.html(f.join(", "))
            }
        }
        var l = this;
        a.each(this.locales, function() {
            this.modchartsLocale && (Modcharts.prototype.locale[this.getModchartsId()] = a.extend({}, this.modchartsLocale))
        }), this.chart.getFlagStyle = function() {
            return {
                crosshair: {
                    backgroundColor: "#555555",
                    labelColor: "#FFFFFF"
                }
            }
        }, this.chart.renderEvent = function(a, b, c, d, e, f) {
            function g(a) {
                var b = a.height,
                    c = o + 2 * q,
                    d = b / 2 - c / 2,
                    e = a.width,
                    f = o + 2 * q,
                    g = e / 2 - f / 2;
                return [g, d]
            }
            if ("custom" !== c || this.parent.customEvents[a] && !this.parent.customEvents[a].isHidden) {
                var h, i, j, k, m = this.getEventByUID(a),
                    n = m.panel.rootContext,
                    o = 16,
                    p = o / 2,
                    q = 5,
                    r = 20;
                for (f || (f = m.coords), "dividends" === c && l.clientParams["feature.events.dividends.iconImage"] && m.coords.forEach(function(a) {
                        a.event.iconImage = l.clientParams["feature.events.dividends.iconImage"]
                    }), "splits" === c && l.clientParams["feature.events.splits.iconImage"] && m.coords.forEach(function(a) {
                        a.event.iconImage = l.clientParams["feature.events.splits.iconImage"]
                    }), h = 0; h < f.length; h++) {
                    var s = f[h].event.iconImage;
                    if (s && 0 !== s.length)
                        if (i = f[h].x - p - q, j = f[h].y - r - p - q, l.state.customEventImages || (l.state.customEventImages = {}), l.state.customEventImages[s]) {
                            var t = g(l.state.customEventImages[s]);
                            i -= t[0], j -= t[1], n.drawImage(l.state.customEventImages[s], i, j)
                        } else {
                            var u = new Image;
                            u.src = s, u.setAttribute("orig-x", i), u.setAttribute("orig-y", j), u.setAttribute("orig-source", s), u.onload = function() {
                                var a = this.getAttribute("orig-source"),
                                    b = this.getAttribute("orig-x"),
                                    c = this.getAttribute("orig-y");
                                l.state.customEventImages[a] = this;
                                var d = g(l.state.customEventImages[a]);
                                b -= d[0], c -= d[1], n.drawImage(l.state.customEventImages[a], b, c)
                            }
                        }
                }
                for (n.textBaseline = "middle", n.textAlign = "center", h = 0; h < f.length; h++) f[h].event.iconImage || (k = d || f[h].event.iconBackgroundColor || "#999999", n.fillStyle !== k && (n.fillStyle = k), i = f[h].x, j = f[h].y - r, n.beginPath(), n.arc(i, j, p, 0, 2 * Math.PI), n.fill());
                for (n.beginPath(), n.font = "bold 11px Roboto", h = 0; h < f.length; h++) f[h].event.iconImage || (k = f[h].event.iconCharacterColor || "#FFFFFF", n.fillStyle !== k && (n.fillStyle = k), i = f[h].x, j = f[h].y - r, n.fillText(e || f[h].event.iconCharacter || "E", i, j));
                for (h = 0; h < f.length; h++) i = f[h].x, j = f[h].y - r, f[h].id = m.params.id, f[h].left = i - (p + q), f[h].top = j - (p + q), f[h].right = f[h].left + o + 2 * q, f[h].bottom = f[h].top + o + 2 * q;
                n.stroke(), n.closePath(), m.coords = f
            }
        }, Modcharts.DividendEvent.prototype.render = function(a) {
            this.panel.core.renderEvent(this.params.uid, a, "dividends", "#F98254", "D")
        }, Modcharts.SplitsEvent.prototype.render = function(a) {
            this.panel.core.renderEvent(this.params.uid, a, "splits", "#9D9D9D", "S")
        }, this.chart.onMouseoverChartEventCallback = function(b) {
            var d = l.chart.getEventByUID(b.uid),
                e = l.layout.$el.core.find(".chartworks-modcharts-core"),
                f = this.panels[0];
            if (d && !d.isHidden) {
                a(".chartworks-popup").remove(), l.chart.setCursor("pointer");
                var g = d.params.id,
                    h = a("<div/>", {
                        class: "chartworks-popup chartworks-popup-event-" + g
                    }).css("left", b.x).css("top", b.top + 21),
                    i = a("<div/>", {
                        class: "chartworks-popup-title"
                    }).appendTo(h),
                    j = a("<div/>", {
                        class: "chartworks-popup-date"
                    }).appendTo(h),
                    k = a("<div/>", {
                        class: "chartworks-popup-content"
                    }).appendTo(h),
                    m = new Date(b.event.date);
                if ("dividends" === g) {
                    var n = "",
                        o = "",
                        p = Number(b.event.dividends || 0).toFixed(2),
                        q = b.event.currency || "";
                    /USD|AUD/.test(q) ? n = "$" : "GBP" === q ? n = "&pound;" : q.length && (o = " (" + q + ")"), i.attr("data-translate", "Dividend"), j.text(c(m)), k.html(n + p + o)
                } else if ("splits" === g) {
                    i.attr("data-translate", "Split"), j.text(c(m));
                    var r = b.event.splits;
                    "reverse" === l.locale.settings.splitNotation && (r = r.replace(/^([0-9]+):([0-9]+)$/g, "$2:$1")), k.text(r)
                } else "custom" === g && (m.setMinutes(m.getMinutes() + m.getTimezoneOffset()), b.event.rolloverBodyText ? (i.text(b.event.rolloverTitle), j.text(c(m)), k.text(b.event.rolloverBodyText)) : b.event.rolloverBodyHTML ? (i.html(b.event.rolloverTitle), j.text(c(m)), k.html(b.event.rolloverBodyHTML)) : (i.html(b.event.rolloverTitle || "Event"), j.text(c(m))));
                h.appendTo(e), l.layout.translateContent(h), b.x + h.width() > f.size.padding.left + f.size.width && h.css("left", f.size.padding.left + f.size.width - h.width() - 10)
            }
        }, this.chart.onMouseoutChartEventCallback = function() {
            l.chart.setCursor("default"), a(".chartworks-popup").remove()
        }, this.getAriaLabel = function() {
            if (l.chart.xref && l.chart.xref[l.chart.params.symbol]) return "Chart for " + l.chart.xref[l.chart.params.symbol].companyName + " (" + l.chart.xref[l.chart.params.symbol].exchangeId + ")"
        }, this.initializeCrosshairPosition = function() {
            var a = l.chart.params.customData ? l.chart.dataPrimary : l.chart.dataFrame;
            if (a.length > 0) {
                var b = a.length - 1,
                    c = l.chart.panels[0].px(Number(l.chart.panels[0].xAxis.scale[0](a[b].dateIndex))),
                    d = l.chart.params.customData ? a[b].value : a[b].close;
                if ("number" == typeof d) {
                    var e = new Date(a[b].date),
                        f = l.chart.panels[0].px(Number(l.chart.panels[0].yAxis.scale[0](d)));
                    l.chart.callbackCrosshair(e, c, 0, f)
                }
            }
        }, this.chart.onLoadComplete = function() {
            var a = l.layout.$el.core;
            if ("large" === l.size) {
                l.layout.toolbar.update(), a.find(".modcharts-legend").show();
                var b = a.find(".modcharts-panel").eq(0).find(".modcharts-panel-root");
                b.attr("role", "img"), b.attr("aria-label", l.getAriaLabel())
            } else if ("small" === l.size) {
                l.layout.toolbar.update();
                var c = this.params.symbolCompare.length > 0 && l.clientParams["feature.small.dataLegend"] === !0;
                a.find(".chartworks-pane-toolbar-lower").toggleClass("chartworks-pane-toolbar-lower-expanded", c), a.find(".modcharts-legend").toggle(c), a.find(".modcharts-legend .chartworks-legend-ohlc-item").remove(), a.find(".modcharts-legend .chartworks-legend-timestamp").remove()
            }
            l.clientParams["feature.attribution"] && a.find(".chartworks-attribution").show(), l.chart.rootModchart.attr("aria-hidden", !1), l.updatePersistentSettings(), l.updateChartPane(), l.chart.resize(), l.updateChartPane(), l.chart.render(), l.initializeCrosshairPosition(), "all" === l.clientParams["feature.legend.autoExpand"] && l.togglePrimaryExpandedLegend(!0), "comparison" === l.clientParams["feature.legend.autoExpand"] && (l.clientParams.compareSymbols || []).length > 0 && l.togglePrimaryExpandedLegend(!0), l.onChartLoad()
        }, this.chart.onDataError = function(a, b) {
            l.showMessageChartNotAvailable(), a && "undefined" != typeof a.status && (0 === a.status && 401 === b.status && (a.status = b.status, a.statusMsg = b.statusText), l.layout.core.onAPIError(a))
        }, this.chart.onResizeCallback = function() {
            l.updateChartPane()
        }, this.chart.crosshairDataCallback = function(b) {
            if ("small" !== l.size || l.clientParams["feature.small.dataLegend"]) {
                var g = "",
                    i = "",
                    j = this.panels[0].indicators[0].params.markerType,
                    m = l.layout.$el.core,
                    n = l.layout.$el.core.find(".chartworks-legend-timestamp"),
                    o = this.state.currency || "",
                    p = "small" === l.size && l.clientParams["feature.small.dataLegend"] === !0 && this.state.isIntraday,
                    q = [p ? d(b.date) : c(b.date)],
                    r = /hlc|candle/.test(j) || l.clientParams["feature.dataLegendOHLC"] === !0 || l.clientParams["feature.small.dataLegendOHLC"] === !0;
                /USD|AUD/.test(o) ? g = "$" : "GBP" === o && (g = "&pound;"), this.panels[0].isNormalized() && (g = "", i = "%"), "IN" === b.issueType && (g = ""), this.state.isIntraday ? (q.push(p ? f(b.date) : e(b.date)), q.push(b.timezoneLabel || ""), n.addClass("chartworks-legend-timestamp-intraday")) : n.removeClass("chartworks-legend-timestamp-intraday"), n.css("visibility", "visible"), n.text(q.join(" ")), m.find(".chartworks-legend-ohlc-item").css("display", "none"), r ? (m.find(".chartworks-legend-ohlc-item").not(".chartworks-legend-ohlc-close").css("display", "block"), m.find(".chartworks-legend-ohlc-o").html(g + h(b.open) + i), m.find(".chartworks-legend-ohlc-h").html(g + h(b.high) + i), m.find(".chartworks-legend-ohlc-l").html(g + h(b.low) + i), m.find(".chartworks-legend-ohlc-c").html(g + h(b.close) + i)) : (m.find(".chartworks-legend-ohlc-close").css("display", "block"), m.find(".chartworks-legend-ohlc-close span").html(g + h(b.close) + i)), l.clientParams.showIndicatorLegendValues && (a(".chartworks-legend-indicators:visible").each(function(c, d) {
                    a(d).find(".chartworks-legend-row").each(function(c, d) {
                        k(a(d).attr("indicatoruid"), a(d).find(".chartworks-legend-indicatorvalues"), b)
                    })
                }), a(".chartworks-legend-indicatorvalues-lower").each(function(c, d) {
                    var e = a(d).parent(".chartworks-legend-row").attr("indicatoruid");
                    k(e, a(d), b)
                }))
            }
        }, this.chart.onLoadTemplateCompleteCallback = function(b, c, d) {
            c && c.ChartSettings && l.chart.panels.forEach(function(b) {
                b.indicators.forEach(function(b) {
                    var c = l.filterIndicators({
                            id: b.params.id
                        }),
                        d = l.getModchartsIndicatorParams(c);
                    b.params.style = a.extend(!0, b.params.style, d.style), b.markers && d.bands && d.bands.forEach(function(c, d) {
                        a.each(b.markers, function(b, d) {
                            d.params.labelText && d.params.labelText === c.labelText && a.extend(!0, d.params, c)
                        })
                    })
                })
            })
        }, Modcharts.Panel.prototype.applyLegendContent = function(a, b) {
            return l.applyLegendContent.call(this, a, b)
        }, "large" === this.size ? (this.chart.onZoomCallback = function() {
            window.clearTimeout(this.customZoomCallbackTimeout);
            var a = this.parent;
            this.customZoomCallbackTimeout = window.setTimeout(function() {
                l.layout.$el.core.find(".chartworks-toolbar-timeframe span").text(a.translate("Custom"))
            }, 100)
        }, this.chart.getToolStyle = function() {
            var a = {
                text: {
                    fontColor: "#192F41",
                    boundingBoxLineColor: "#CCCCCC",
                    boundingBoxPenPxOn: 1,
                    boundingBoxPenPxOff: 1
                },
                line: {
                    lineColor: "#2496F1",
                    lineWidth: 2
                },
                horizontal: {
                    lineColor: "#2496F1",
                    lineWidth: 2
                },
                ray: {
                    lineColor: "#2496F1",
                    lineWidth: 2
                },
                extended: {
                    lineColor: "#2496F1",
                    lineWidth: 2
                },
                arrow: {
                    lineColor: "#2496F1",
                    lineWidth: 2
                },
                ellipse: {
                    lineColor: "#2496F1",
                    lineWidth: 2
                },
                rect: {
                    lineColor: "#2496F1",
                    lineWidth: 1.5
                },
                fibonacci: {
                    lineColor: "#9d9d9d"
                },
                measurementline: {
                    lineColor: "#2496F1",
                    lineWidth: 2,
                    fontColor: "#333333"
                }
            };
            return a = l.layout.theme.getToolStyle(a)
        }, this.chart.getIndicatorStyle = function(a) {
            var b = l.filterIndicators({
                    id: a
                }),
                c = {};
            return b && (c[b.id] = b.style), c
        }, this.chart.onClickCallback = function() {
            l.layout.closeMenus(), this.setToolMode(!1)
        }, this.chart.onSaveCompleteCallback = function() {
            return null
        }, this.chart.onSaveTemplateCompleteCallback = function() {
            return null
        }, this.chart.onSaveImageSuccess = function(a) {
            a && a.Id ? window.open(l.getChartAPIPath() + "chartapi/loadimage/" + a.Id + "?remove=true&access_token=" + l.clientParams.token) : window.alert("An error occurred.\n\n" + JSON.stringify(a))
        }, this.chart.onGetExportCanvasBegin = function() {
            l.exportImageBorderLeft = this.panels[0].params.style.gridColorBorderLeft, this.eachPanel(function(a) {
                a.params.style.gridColorBorderLeft = a.params.style.gridColorBorderTop
            })
        }, this.chart.onGetExportCanvasComplete = function() {
            this.eachPanel(function(a) {
                a.params.style.gridColorBorderLeft = l.exportImageBorderLeft
            }), delete l.exportImageBorderLeft, this.resize(), this.render(), l.updateChartPane()
        }, Modcharts.Tool.prototype.configToolCustom = function(a, c) {
            var d = "edittool-" + c.uid,
                e = this.panel.core.parent.layout;
            return e.menus[d] || (e.menus[d] = new b.EditToolMenu(e, c.uid), e.menus[d].init()), e.menus[d].toggle(), !1
        }, this.chart.onSetToolModeCallback = function(a) {
            a = a || "crosshair", this.state.tool || this.state.dragTool || (l.layout.$el.core.find(".chartworks-toolpalette li").removeClass("chartworks-tool-selected"), l.layout.$el.core.find('.chartworks-toolpalette li[toolid="' + a + '"]').addClass("chartworks-tool-selected"))
        }, this.chart.onToolRemoveCallback = function() {
            l.layout.closeMenus()
        }, this.chart.getExportCanvasHeader = function() {
            function a() {
                var a = 20;
                return l.clientParams["export.header.message"] && (a += 20), a
            }
            return {
                height: a(),
                applyContent: function(a, b) {
                    var d = l.layout.theme.getExportCanvasHeaderStyle(),
                        f = 4,
                        g = new Date;
                    a.beginPath(), a.font = "12px Roboto", a.textBaseline = "top", a.textAlign = "left", a.fillStyle = d.fontColor, l.clientParams["export.header.message"] && (a.fillText(l.clientParams["export.header.message"], 5, b + f), b += 20), a.fillText("Chart generated on " + c(g) + " at " + e(g), 5, b + f)
                }
            }
        }, this.chart.getExportCanvasFooter = function() {
            if (l.clientParams["feature.attribution"]) {
                var a = "panelBottomLeft" === l.clientParams["feature.attribution.position"];
                return {
                    height: a ? 0 : 20,
                    applyContent: function(b, c) {
                        var d = l.layout.theme.getExportCanvasFooterStyle(),
                            e = l.chart.getExportCanvasHeader().height,
                            f = i();
                        b.textBaseline = "top", a ? (c = e + l.chart.panels[0].size.height - 2, b.textBaseline = "bottom") : c = e + l.chart.size.height + 3, b.beginPath(), b.font = "12px Roboto", b.textAlign = "left", b.fillStyle = d.fontColor, b.fillText(f, 5, c)
                    }
                }
            }
            return {
                height: 0,
                applyContent: function() {}
            }
        }, this.chart.applyExportCanvasLegendContent = function(b, c, d) {
            function e(a, c) {
                b.beginPath(), b.fillStyle = c, b.rect(a, v + 6, 5, 10), b.fill()
            }

            function f(a, b) {
                e(7, a), e(12, b)
            }
            var g = {},
                h = c.indicators,
                i = [],
                j = [],
                k = {},
                m = 23,
                n = !c.isUpper(),
                o = {},
                p = l.layout.theme.getExportCanvasStyle();
            n && (d -= m), d = c.px(d), b.font = "12px Roboto";
            for (var q = 0; q < h.length && !(n && q > 0); q++) {
                g = h[q], o = l.filterIndicators({
                    id: g.params.id
                }) || {}, i = [], k = {};
                for (var r = 0; r < g.params.inputs.length; r++) o.inputsExcluded && a.inArray(g.params.inputs[r].name, o.inputsExcluded) !== -1 || i.push(g.params.inputs[r].value);
                if (a.each(o.inputsCombined || [], function(a, b) {
                        i.push(b.getValue(g))
                    }), "price" === g.params.id) {
                    var s = l.getXrefByXID(g.params.symbol);
                    s || (s = {
                        inputSymbol: g.params.symbol
                    }), k.name = s.displaySymbol || s.inputSymbol || s.crossRate || g.params.symbol
                } else k.name = a("<textarea/>").html(c.core.parent.translate(o.labelId) + (0 !== i.length ? " (" + i.join(", ") + ")" : "")).text();
                k.y = d + 2, k.width = Math.ceil(b.measureText(k.name).width), k.indicator = g, k.template = o, k.color = g.params.style.lineColor || g.params.style.fillColor || p.fontColor, j.push(k)
            }
            var t = c.isUpper() ? Math.max.apply(Math, j.map(function(a) {
                    return a.width
                })) + 25 : c.size.width,
                u = n ? m : h.length * m;
            b.beginPath(), b.fillStyle = p.rectFillColor, b.strokeStyle = p.rectBorderColor, b.lineWidth = 1, b.rect(.5, d, t, u), b.fill(), b.stroke();
            var v = Math.floor(d) + 1;
            a.each(j, function() {
                b.beginPath();
                var a = this.indicator.params;
                this.template.swatchColors ? f(a.style[this.template.swatchColors[0]], a.style[this.template.swatchColors[1]]) : "candlestick" === a.markerType ? f(a.style.fillColorPos, a.style.fillColorNeg) : "ohlc" === a.markerType || "hlc" === a.markerType ? f(a.style.lineColorUp, a.style.lineColorDown) : (b.fillStyle = this.color, b.rect(7, v + 6, 10, 10), b.fill()), b.fillStyle = p.fontColor, b.fillText(this.name, 21, v + 4), v += m
            })
        }) : "small" === this.size && (this.chart.onZoomCallback = function() {
            window.clearTimeout(this.customZoomCallbackTimeout), this.customZoomCallbackTimeout = window.setTimeout(function() {
                l.layout.$el.core.find(".chartworks-toolbar-group li").removeClass("chartworks-toolbar-item-selected")
            }, 50)
        })
    }, b.prototype.showMessageChartNotAvailable = function() {
        this.chart && this.chart.showMessageChartNotAvailable(this.translate("ChartNotAvailable"))
    }, b.prototype.getExtendedHoursStyle = function(a) {
        var b = this.layout.theme.params.style.extendedHours;
        return {
            fillColorPre: a["style.extendedHours.fillColorPre"] || b.fillColorPre,
            fillColorPost: a["style.extendedHours.fillColorPost"] || b.fillColorPost
        }
    }, b.prototype.getPercentAsDouble = function(a) {
        return Math.max(0, Math.min(1, Number(a / 100)))
    }, b.prototype.getDataPeriod = function(a, b) {
        var c = b.period;
        return c && /Minute|Hour|Day|Week|Month/.test(c) ? c : a >= 3650 ? "Month" : a >= 1095 ? "Week" : a > 21 ? "Day" : "Minute"
    }, b.prototype.getDataInterval = function(a, b) {
        var c = b.interval,
            d = b.period;
        return d && "Minute" !== d && (c = 1), c && [1, 3, 5, 15].indexOf(c) > -1 ? c : a > 21 ? 1 : a >= 5 ? 5 : 3
    }, b.prototype.getChartParams = function(a) {
        var b = this.getChartDays(a.timeframe || "1y"),
            c = /SlimerJS/.test(window.navigator.userAgent) ? "application/json" : "application/x-www-form-urlencoded",
            d = {
                apiPath: this.getChartAPIPath(),
                apiContentType: c,
                apiSeries: "chartapi/series",
                apiAuthMode: "querystring",
                backfill: !0,
                crosshairEnabled: !0,
                cssPath: null,
                dataInterval: this.getDataInterval(b, a),
                dataPeriod: this.getDataPeriod(b, a),
                days: b,
                extendedHours: a.extendedHours === !0,
                extendedHoursDurationPre: 90,
                extendedHoursStyle: this.getExtendedHoursStyle(a),
                flagOverlap: "boolean" != typeof a.flagOverlap || a.flagOverlap,
                localeId: this.locale.getModchartsId(),
                panelXAxis: "first",
                showFlags: !0,
                crosshairFlagEnabled: !0,
                symbolCompare: [],
                toolSnapOHLC: !0,
                realtime: "boolean" == typeof a.realTime && a.realTime,
                zoomEnabled: "boolean" != typeof a["feature.panZoom"] || a["feature.panZoom"]
            };
        return "boolean" == typeof a.showIndicatorFlags && (d.showComponentSeriesFlags = a.showIndicatorFlags), "number" == typeof a["panel.lower.size.percent"] ? (d.panelHeightPctLower = this.getPercentAsDouble(a["panel.lower.size.percent"]), "number" == typeof a["panel.upper.size.percentMin"] && (d.panelHeightPctMinUpper = this.getPercentAsDouble(a["panel.upper.size.percentMin"]))) : (a["panel.upper.size.height"] && (d.panelHeightUpper = a["panel.upper.size.height"]), a["panel.lower.size.height"] && (d.panelHeightLower = a["panel.lower.size.height"])), d
    }, b.prototype.onPrimarySymbolChange = function(a) {
        "function" == typeof this.clientParams.onPrimarySymbolChange && this.clientParams.onPrimarySymbolChange.call(this, a)
    }, b.prototype.onAPIError = function(a) {
        0 === a.status && "error" === a.statusMsg ? this.showMessageChartNotAvailable() : 401 === a.status ? (this.invalidTokenCount++, this.showMessageChartNotAvailable()) : 500 === a.status && this.showMessageChartNotAvailable(), "function" == typeof this.clientParams.onAPIError && this.clientParams.onAPIError.call(this, a)
    }, b.prototype.onChartLoad = function() {
        1 === this.chart.status && (this.invalidTokenCount = 0), "function" == typeof this.clientParams.onChartLoad && this.clientParams.onChartLoad.call(this)
    }, b.prototype.clearCustomEvents = function() {
        var a = this;
        if (this.chart.panels.length) {
            var b = this.chart.panels[0];
            b.params.style.yaxisPaddingTop = this.getYAxisPadding();
            for (var c = b.events.length - 1; c >= 0; c--) "custom" === b.events[c].params.id && (a.customEvents[b.events[c].params.uid] && delete a.customEvents[b.events[c].params.uid], b.removeEvent(b.events[c]))
        }
    }, b.prototype.toggleEvent = function(a, b) {
        if ("string" == typeof a && /earnings|dividends|splits|custom/.test(a)) return this.togglePanelEvent(a, b)
    }, b.prototype.setFrequency = function(a, b) {
        var c = this.chart.state.isIntraday,
            d = this.chart.params.days;
        return /Minute|Hour|Day|Week|Month/.test(b) ? (c && /Day|Week|Month/.test(b) && (d = 365), !c && /Minute|Hour/.test(b) && (d = 1), "Minute" !== b && (a = 1), this.chart.params.dataInterval = a, this.chart.params.dataPeriod = b, this.chart.setDays(d), void this.chart.loadData()) : void this.warn("setFrequency: invalid period")
    }, b.prototype.loadCustomEvents = function(b) {
        function c(a, b) {
            return new Date(a.date) < new Date(b.date) ? -1 : new Date(a.date) > new Date(b.date) ? 1 : 0
        }
        if (b && b.length) {
            var d = [],
                e = this,
                f = this.chart.panels[0];
            d = b[0].date ? [{
                label: "custom",
                dataset: b
            }] : b, this.clearCustomEvents(), a.each(d, function() {
                var a = f.addEvent("custom", {
                        clusterDist: "number" == typeof this.minHorizDistance ? this.minHorizDistance : 5,
                        stackDist: "number" == typeof this.minVertDistance ? this.minVertDistance : 17,
                        datasetCallback: this.datasetCallback,
                        datasetURL: this.datasetURL,
                        dataset: (this.dataset || []).map(function(a) {
                            return "string" == typeof a.date && a.date.length ? /T/.test(a.date) && !/Z$/.test(a.date) && (a.date += "Z") : a.date instanceof Date && (a.date = a.date.toISOString()), a
                        }).sort(c)
                    }),
                    b = a.params.uid;
                a.params.renderMethod = function(a) {
                    e.chart.renderEvent && e.chart.renderEvent(b, a, "custom", null, null, a)
                }, a.params.label = this.label || "custom", a.isHidden = this.display === !1, "number" == typeof this.utcOffset && (a.utcOffset = this.utcOffset), e.customEvents[b] = a, !a.isHidden && a.params.datasetURL && e.togglePanelEvent(b, !0)
            }), this.chart.panels[0].params.style.yaxisPaddingTop = e.layout.core.getYAxisPadding(), this.chart.render()
        }
    }, b.prototype.showDialog = function(a, c) {
        this.layout.menus.dialog || (this.layout.menus.dialog = new b.DialogMenu(this.layout), this.layout.menus.dialog.init()), this.layout.closeMenus();
        var d = this.layout.menus.dialog;
        d.params.title = a || "", d.params.message = c || "", d.open()
    }, b.prototype.setConfigParam = function(a, b) {
        "string" == typeof a && "undefined" != typeof b && (this.clientParams[a] = b), "token" === a ? this.chart.setAuthToken(this.clientParams.token) : "feature.panZoom" === a ? this.chart.setZoomEnabled("boolean" != typeof b || b) : "extendedHours" === a && "boolean" == typeof b && (this.chart.setExtendedHours(b), this.chart.loadData())
    }, b.prototype.reload = function() {
        this.init(this.clientParams)
    }, b.prototype.loadData = function(b, c) {
        this.layout && this.chart && (this.layout.closeMenus(), this.chart.setAuthToken(this.clientParams.token), this.chart.panels.length > 0 ? this.state.symbolLookupRetry ? this.getSymbolLookup(this.state.symbolLookupRetry.args, this.state.symbolLookupRetry.onComplete) : this.chart.loadData(c, b) : (a(this.clientParams.target).find(".chartworks-modcharts-core").empty(), this.loadModchartsChart()))
    }, b.prototype.getInvalidTokenCount = function() {
        return this.invalidTokenCount
    }, b.prototype.getCurrentTimeframe = function() {
        var a = this.chart.params.days.toString(),
            c = b.Menu.getYTDDays().toString(),
            d = {
                31: "1m",
                91: "3m",
                182: "6m",
                365: "1y",
                1095: "3y",
                1825: "5y",
                3650: "10y"
            };
        return d[c] = "ytd", d[a] ? d[a] : a + "d"
    }, b.prototype.generateChartID = function(a) {
        var b = this;
        this.updateModchartsMetaData(), this.chart.save(!1, "Shared_0", function(c) {
            a ? a({
                chartID: c
            }) : (b.warn("No onComplete callback passed to generateChartID"), b.warn("chartID: ", c))
        })
    }, b.prototype.getCurrentSymbol = function() {
        var a = this.getXrefByXID(this.chart.params.symbol);
        return a && a.inputSymbol ? a.inputSymbol : void this.warn("Current symbol not found")
    }, b.prototype.getCurrentExchange = function() {
        var a = this.getXrefByXID(this.chart.params.symbol);
        return a && a.exchangeId ? a.exchangeId : void this.warn("Current exchange not found")
    }, b.prototype.setCurrentSymbol = function(a) {
        function b(b) {
            b = b || {}, j.layout.removeMenus(), j.setSymbol({
                symbol: b.inputSymbol,
                exchangeId: d,
                xid: b.xid,
                crossRate: b.crossRate,
                displaySymbol: e,
                displayExchange: f
            }), c && !b.xid ? j.warn("Symbol not found " + JSON.stringify(a)) : h && !b.crossRate && j.warn("Cross Rate not found " + JSON.stringify(a))
        }
        var c, d, e, f, g, h, i = !1,
            j = this;
        try {
            c = a.symbol, d = a.exchange, e = a.displaySymbol, f = a.displayExchange, g = a.xid, h = a.crossRate, "string" == typeof c && c.length ? i = !0 : "string" == typeof g && g.length ? i = !0 : "string" == typeof h && h.length && (i = !0)
        } catch (a) {}
        return i ? void(g || h ? b({
            xid: g,
            crossRate: h,
            symbol: c,
            exchangeId: d,
            displaySymbol: e,
            displayExchange: f
        }) : this.getSymbolLookup({
            symbol: c,
            exchangeId: d,
            displaySymbol: e,
            displayExchange: f
        }, function(a) {
            b(a)
        })) : (this.layout.closeMenus(), this.chart.loadingStop(), this.warn("Invalid symbol inputs"))
    }, b.prototype.downloadImage = function() {
        this.chart && 1 === this.chart.status && this.chart.downloadImage({
            filename: "chartdownload"
        })
    }, b.prototype.openImage = function() {
        this.chart.saveImage()
    }, b.prototype.print = function() {
        this.chart && 1 === this.chart.status && this.chart.print()
    }, b.prototype.startPoll = function(a) {
        a = "number" == typeof a ? a : 60;
        var b = 0 === a ? 0 : Math.max(10 / 60, a / 60);
        this.chart.pollData(b)
    }, b.prototype.stopPoll = function() {
        this.chart.pollData(0)
    }, b.prototype.addIndicator = function(a, b, c) {
        return "string" == typeof a && this.filterIndicators({
            id: a
        }) ? this.addNewIndicator(a, b, c) : this.warn("addIndicator: Indicator not found")
    }, b.prototype.addIndicators = function(a) {
        var b = this;
        (a || []).forEach(function(a) {
            a.id && b.addIndicator(a.id, a.params || {}, {
                noLoad: !0
            })
        }), this.chart.loadData()
    }, b.prototype.resize = function() {
        this.chart.resize(), this.chart.render()
    }, b.prototype.setTimeframe = function(a, b) {
        function c(a) {
            var c = d.getFrequencyByDays(a);
            d.chart.params.dataInterval = c.dataInterval, d.chart.params.dataPeriod = c.dataPeriod, d.chart.setDays(a), d.chart.loadData(b || function() {})
        }
        var d = this;
        "max" === a ? d.layout.core.getInceptionDate(function(a) {
            d.chart.params.isMax = !0, c(a)
        }) : c(this.getChartDays(a))
    }, b.prototype.toDataURI = function() {
        var a = this.chart.getExportCanvas()[0],
            b = a.toDataURL();
        return b
    }, b.prototype.removeIndicatorsByPanelType = function(a) {
        "string" == typeof a && /upper|lower/i.test(a) && this.chart.removeIndicatorsByPanelType(a.toLowerCase())
    }, b.prototype.removeIndicatorsById = function(a) {
        "string" == typeof a && null !== typeof this.filterIndicators({
            id: a
        }) && this.chart.removeIndicatorsById(a)
    }, b.prototype.getExportPanels = function() {
        var a = {
                panels: []
            },
            b = this;
        return this.chart.panels.forEach(function(c, d) {
            a.panels.push({
                indicators: []
            });
            var e = a.panels[a.panels.length - 1];
            c.indicators.forEach(function(a) {
                e.indicators.push({
                    id: a.params.id
                });
                var c = e.indicators[e.indicators.length - 1],
                    d = b.filterIndicators({
                        id: a.params.id
                    });
                d.inputs && d.inputs.forEach(function(b) {
                    a.params.inputs && a.params.inputs.forEach(function(a) {
                        a.name === b.name && (c.params || (c.params = {}), c.params[a.name] = a.value)
                    })
                })
            })
        }), a
    }, b.prototype.reset = function() {
        var a = this;
        window.setTimeout(function() {
            a.destroy(), "string" == typeof a.clientParams.id && a.isSessionStorageSupported() && sessionStorage.removeItem(["chartworks", a.clientParams.id].join("-")), a.init(a.clientParams)
        }, 10)
    }, b.Slider = function(a, b) {
        this.menu = b, this.params = {
            color: a.color || "#AAAAAA",
            colorId: a.colorId || "lineColor",
            widthId: a.widthId || "lineWidth",
            min: .5,
            max: 7,
            value: a.value,
            width: a.width || 170,
            height: a.height || 13,
            targetObject: a.targetObject
        }, this.init(), this.render()
    }, b.Slider.prototype.init = function() {
        this.state = {
            mouseDown: !1
        }, this.content = a("<div>", {
            class: "chartworks-slider"
        }), this.canvas = a("<canvas/>").prop({
            width: this.params.width,
            height: this.params.height
        }), this.handle = a("<div>", {
            class: "chartworks-slider-handle"
        }), this.content.append(this.canvas), this.content.append(this.handle), this.ctx = this.canvas[0].getContext("2d"), this.setEventHandlers()
    }, b.Slider.prototype.setEventHandlers = function() {
        var b = this;
        this.content.on("mousedown touchstart", function() {
            a("body").on("mouseup touchend", function() {
                b.state.mouseDown = !1, b.content.removeClass("chartworks-slider-active"), a("body").off("mouseup touchend")
            }), b.state.mouseDown = !0, b.content.addClass("chartworks-slider-active")
        }), this.content.on("mousemove touchmove", function(a) {
            if (b.state.mouseDown) {
                var c = a.clientX;
                a.originalEvent && a.originalEvent.touches && a.originalEvent.touches.length && (c = a.originalEvent.touches[0].clientX);
                var d = c - b.content.offset().left;
                b.params.value = Math.min(b.params.max, Math.max(b.params.min, d / b.params.width * b.params.max)).toFixed(1), b.render();
                var e = b.params.targetObject || b.menu.getTargetObject(),
                    f = e.params.style;
                f[b.params.colorId] = b.params.color, f[b.params.widthId] = b.params.value, e.panel.core.render()
            }
        })
    }, b.Slider.prototype.render = function() {
        this.clear(), this.ctx.fillStyle = this.params.color, this.ctx.beginPath(), this.ctx.moveTo(0, this.params.height), this.ctx.lineTo(this.params.width, 0), this.ctx.lineTo(this.params.width, this.params.height), this.ctx.lineTo(0, this.params.height), this.ctx.fill(), this.handle.css("left", -8 + this.params.width / this.params.max * this.params.value)
    }, b.Slider.prototype.setColor = function(a) {
        this.params.color = a, this.render(), this.menu.getTargetObject().panel.core.render()
    }, b.Slider.prototype.clear = function() {
        this.ctx.clearRect(0, 0, this.canvas[0].width, this.canvas[0].height)
    }, b.Theme = function(a, b) {
        this.params = a, this.layout = b
    }, b.Theme.prototype.getDefaultParams = function() {
        throw new Error("Required Theme method not found")
    }, b.Theme.prototype.getContent = function() {
        throw new Error("Required Theme method not found")
    }, b.Theme.prototype.getModchartsPanelParams = function() {
        throw new Error("Required Theme method not found")
    }, b.Theme.prototype.getToolStyle = function() {
        throw new Error("Required Theme method not found")
    }, b.Theme.prototype.getExportCanvasStyle = function() {
        throw new Error("Required Theme method not found")
    }, b.Theme.prototype.getExportCanvasHeaderStyle = function() {
        throw new Error("Required Theme method not found")
    }, b.Theme.prototype.getExportCanvasFooterStyle = function() {
        throw new Error("Required Theme method not found")
    }, b.Theme.prototype.getIndicators = function() {
        return []
    }, b.DarkTheme = function(a) {
        this.id = "dark", this.superclass.call(this, this.getDefaultParams(), a)
    }, b.Extend(b.DarkTheme, b.Theme), b.DarkTheme.prototype.getDefaultParams = function() {
        return {
            style: {
                fillOpacity: .15,
                swatchColors: ["#2496F1", "#F98254", "#009487", "#9D9D9D", "#E220A8", "#FFFFFF", "#FD0000", "#DD4BF9", "#76C147", "#AD81C7", "#04BBD3", "#FCD32E", "#4B7BBB", "#00C02F"],
                extendedHours: {
                    fillColorPre: "rgba(255,255,255,0.15)",
                    fillColorPost: "rgba(255,255,255,0.15)"
                }
            }
        }
    }, b.DarkTheme.prototype.getContent = function(a) {
        a.addClass("chartworks-theme-dark")
    }, b.DarkTheme.prototype.getModchartsPanelParams = function(a) {
        return a.style.gridColor = "#333333", a.style.gridColorAlt = "#666666", a.style.gridColorBorderBottom = "#B1B1B1", a.style.gridColorBorderRight = "#B1B1B1", a.style.gridColorBorderTop = "#404040", a.style.gridBgColor = "#000000", a.style.gridColorTicks = "#B1B1B1", a.style.gridColorTicksAlt = "#B1B1B1", a.style.xaxisBgColor = "#000000", a.style.yaxisBgColor = "#000000", a
    }, b.DarkTheme.prototype.getIndicators = function() {
        var a = [{
            style: {
                fillColor: "rgba(253,0,0,0.15)",
                lineColor: "rgba(253,0,0,0.15)"
            }
        }, {
            style: {
                fillColor: "rgba(0,192,47,0.15)",
                lineColor: "rgba(0,192,47,0.15)"
            }
        }];
        return [{
            id: "bollinger",
            style: {
                lineWidth: 1.5
            }
        }, {
            templateId: "slowstochastics",
            style: {
                lineColor: "#FFFFFF",
                lineColorD: "#04BBD3"
            },
            bands: a
        }, {
            templateId: "faststochastics",
            style: {
                lineColor: "#FFFFFF",
                lineColorD: "#04BBD3"
            },
            bands: a
        }, {
            id: "moneyflowindex",
            style: {
                lineColor: "#FFFFFF"
            },
            bands: a
        }, {
            id: "rsi",
            style: {
                lineColor: "#FFFFFF"
            },
            bands: a
        }, {
            id: "ultimateoscillator",
            style: {
                lineColor: "#FFFFFF"
            },
            bands: a
        }, {
            id: "williamspctr",
            style: {
                lineColor: "#FFFFFF"
            },
            bands: a
        }]
    }, b.DarkTheme.prototype.getToolStyle = function(a) {
        return a.text.boundingBoxLineColor = "#666666", a.text.fontColor = "#FFFFFF", a.measurementline.fontColor = "#FFFFFF", a
    }, b.DarkTheme.prototype.getExportCanvasHeaderStyle = function() {
        return {
            fontColor: "#aaa"
        }
    }, b.DarkTheme.prototype.getExportCanvasStyle = function() {
        return {
            fontColor: "#fff",
            rectFillColor: "#1f2d38",
            rectBorderColor: "#1f2d38"
        }
    }, b.DarkTheme.prototype.getExportCanvasFooterStyle = function() {
        return {
            fontColor: "#aaa"
        }
    }, b.LightTheme = function(a) {
        this.id = "light", this.superclass.call(this, this.getDefaultParams(), a)
    }, b.Extend(b.LightTheme, b.Theme), b.LightTheme.prototype.getDefaultParams = function() {
        return {
            style: {
                fillOpacity: .1,
                swatchColors: ["#2496F1", "#F98254", "#009487", "#9D9D9D", "#E220A8", "#192F41", "#FD0000", "#DD4BF9", "#76C147", "#AD81C7", "#04BBD3", "#FCD32E", "#4B7BBB", "#00C02F"],
                extendedHours: {
                    fillColorPre: "rgba(0,0,0,0.05)",
                    fillColorPost: "rgba(0,0,0,0.05)"
                }
            }
        }
    }, b.LightTheme.prototype.getContent = function(a) {
        a.addClass("chartworks-theme-light")
    }, b.LightTheme.prototype.getModchartsPanelParams = function(a) {
        return a
    }, b.LightTheme.prototype.getToolStyle = function(a) {
        return a.measurementline.fontColor = "#000000", a
    }, b.LightTheme.prototype.getExportCanvasHeaderStyle = function() {
        return {
            fontColor: "#222"
        }
    }, b.LightTheme.prototype.getExportCanvasStyle = function() {
        return {
            fontColor: "#404040",
            rectFillColor: "#fafafa",
            rectBorderColor: "#c9c9c9"
        }
    }, b.LightTheme.prototype.getExportCanvasFooterStyle = function() {
        return {
            fontColor: "#222"
        }
    }, b.Toolbar = function(a) {
        this.layout = a
    }, b.Toolbar.prototype.init = function() {
        this.setEventHandlers()
    }, b.Toolbar.prototype.setEventHandlers = function() {
        var c = this.layout,
            d = this,
            e = c.$el.core;
        e.find(".chartworks-toolbar-markertype").on("click keypress", function(d) {
            return "keypress" === d.type && 13 !== d.which || (d.preventDefault(), c.menus.markertype || (c.menus.markertype = new b.MarkerTypeMenu(c), c.menus.markertype.init(a(this))), c.menus.markertype.toggle(d), !1)
        }), e.find(".chartworks-toolbar-frequency").on("click keypress", function(d) {
            return "keypress" === d.type && 13 !== d.which || (d.preventDefault(), c.menus.frequency || (c.menus.frequency = new b.FrequencyMenu(c), c.menus.frequency.init(a(this))), c.menus.frequency.toggle(d), !1)
        }), e.find(".chartworks-toolbar-timeframe").on("click keypress", function(d) {
            return "keypress" === d.type && 13 !== d.which || (d.preventDefault(), c.menus.timeframe || (c.menus.timeframe = new b.TimeframeMenu(c), c.menus.timeframe.init(a(this))), c.menus.timeframe.toggle(d), !1)
        }), e.find(".chartworks-toolbar-addindicator").on("click keypress", function(a) {
            return "keypress" === a.type && 13 !== a.which || (a.preventDefault(), c.menus.addindicator || (c.menus.addindicator = new b.AddIndicatorMenu(c), c.menus.addindicator.init(e.find(".chartworks-pane-chart"), {
                width: 450
            })), d.selectToolbarAddition("addindicator", a), c.menus.addindicator.params.$el.find(".chartworks-menu-search-input").focus(), !1)
        }), e.find(".chartworks-toolbar-addcomparison").on("click keypress", function(a) {
            return "keypress" === a.type && 13 !== a.which || (a.preventDefault(), d.layout.core.clientParams.typeAheadAPI ? (c.menus.addcomparison || (c.menus.addcomparison = new b.AddComparisonMenu(c), c.menus.addcomparison.init(e.find(".chartworks-pane-chart"), {
                width: 450
            })), d.selectToolbarAddition("addcomparison", a), c.menus.addcomparison.params.$el.find(".chartworks-menu-search-input").focus(), !1) : void 0)
        }), e.find(".chartworks-toolbar-addevent").on("click keypress", function(a) {
            return "keypress" === a.type && 13 !== a.which || (a.preventDefault(), c.menus.addevent || (c.menus.addevent = new b.AddEventMenu(c), c.menus.addevent.init(e.find(".chartworks-pane-chart"), {
                width: 450
            })), d.selectToolbarAddition("addevent", a), !1)
        }), e.find(".chartworks-feature-settings").on("click keypress", function(a) {
            return "keypress" === a.type && 13 !== a.which || (a.preventDefault(), c.menus.settings || (c.menus.settings = new b.SettingsMenu(c), c.menus.settings.init(e.find(".chartworks-pane-chart"), {
                width: 165
            })), d.selectToolbarAddition("settings", a), !1)
        }), e.find(".chartworks-toolbar-searchicon,.chartworks-toolbar-search").on("click keypress", function(a) {
            return "keypress" === a.type && (9 === a.which || 9 === a.keyCode) || (a.preventDefault(), d.layout.core.clientParams.typeAheadAPI ? (c.menus.editsymbol || (c.menus.editsymbol = new b.EditSymbolMenu(c), c.menus.editsymbol.init(e.find(".chartworks-pane-chart"), {
                width: 450
            })), c.menus.editsymbol.toggle(), c.menus.editsymbol.params.$el.find(".chartworks-menu-search-input").focus(), c.toolbar.update(), !1) : void 0)
        }), e.find(".chartworks-toolbar-saveloadicon").on("click keypress", function(a) {
            return "keypress" === a.type && 13 !== a.which || (a.preventDefault(), c.menus.saveload || (c.menus.saveload = new b.SaveLoadMenu(c), c.menus.saveload.init(e.find(".chartworks-pane-chart"), {
                width: 450
            })), d.selectToolbarAddition("saveload", a), c.menus.saveload.params.$el.find(".chartworks-menu-search-input").focus(), !1)
        }), e.find(".chartworks-pane-toolbar [tabindex=0]").on("mousedown", function(b) {
            a(this).addClass("chartworks-hidefocus")
        }), e.find(".chartworks-pane-toolbar [tabindex=0]").on("blur", function(b) {
            a(this).removeClass("chartworks-hidefocus")
        })
    }, b.Toolbar.prototype.update = function() {
        var a = this.layout,
            c = a.$el.core,
            d = a.core.chart;
        c.find(".chartworks-toolbar-group li").removeClass("chartworks-toolbar-selected"), c.find(".chartworks-toolbar-compareicon").removeClass("chartworks-toolbar-compareicon-selected"), c.find(".chartworks-toolbar-searchicon").removeClass("chartworks-toolbar-searchicon-selected"), /addcomparison|addindicator|addevent/.test(a.state.currentMenu) && (c.find(".chartworks-toolbar-" + a.state.currentMenu).addClass("chartworks-toolbar-selected"), c.find(".chartworks-toolbar-compareicon").addClass("chartworks-toolbar-compareicon-selected"));
        var e = this.layout.core.getXrefByXID(d.params.symbol),
            f = "";
        e && (f = e.displaySymbol || e.inputSymbol || e.crossRate || "", e.displayExchange && (f += ":" + e.displayExchange)), c.find(".chartworks-toolbar-search").html(f);
        var g = d.params.days;
        c.find(".chartworks-toolbar-timeframe span").html(b.TimeframeMenu.prototype.getLabelFromDays(a.core, g, d));
        var h = d.params.dataInterval,
            i = d.params.dataPeriod;
        h && i && c.find(".chartworks-toolbar-frequency span").html(b.FrequencyMenu.prototype.getLabelFromFrequency(a.core, i, h));
        var j = d.getPrimaryIndicator();
        if (j) {
            var k = j.params.markerType;
            c.find(".chartworks-toolbar-markertype span").html(b.MarkerTypeMenu.prototype.getLabelFromMarkerType(a.core, k)), c.find(".chartworks-toolbar-markertype").attr("rowid", k)
        }
        this.layout.core.updatePersistentSettings()
    }, b.Toolbar.prototype.selectToolbarAddition = function(a, b) {
        this.unselectToolbarAddition(), this.update(), this.layout.menus[a].toggle(b), this.update()
    }, b.Toolbar.prototype.unselectToolbarAddition = function() {
        this.update()
    }, window.ChartworksBuilder = b
}(window.jQuery);