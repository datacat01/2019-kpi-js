/*
 suggest.js top 1.0.0
 Copyright (c) 2018 Rakuten.Inc
 Date : 2018-03-13 15:29:06
 suggest - swg.js top 1.0.0
 Copyright (c) 2018 Rakuten.Inc
 Date : 2018-03-13 15:29:06
 suggest - cnavi.js top 1.0.0
 Copyright (c) 2018 Rakuten.Inc
 Date : 2018-03-13 15:29:06
 suggest - asuraku.js top 1.0.0
 Copyright (c) 2018 Rakuten.Inc
 Date : 2018-03-13 15:29:06
*/
(function(e, g) {
    if ("undefined" !== typeof e) {
        var d;
        window.searchplat || (searchplat = {});
        searchplat.suggest || (searchplat.suggest = {});
        d = searchplat.suggest;
        var a = function() {};
        a.prototype = {
            pluginArray: [],
            add: function(f) {
                this.pluginArray.push(f)
            },
            invokeFunction: function(f, a, b) {
                for (var c = 0, e = this.pluginArray.length; c < e; c++) {
                    var d = this.pluginArray[c];
                    "function" === typeof d[a] && d[a].call(d, f, b)
                }
            },
            init: function(f) {
                for (var a = 0, b = this.pluginArray.length; a < b; a++) {
                    var c = this.pluginArray[a];
                    if ("function" === typeof c.init &&
                        !c.init(f)) return !1
                }
                return !0
            },
            createSuggestElems: function(f) {
                for (var a = "", b, c = 0, e = this.pluginArray.length; c < e; c++) b = this.pluginArray[c], "function" === typeof b.createSuggestElems && (a += b.createSuggestElems(f));
                return a
            },
            getSelectedText: function(f, a) {
                for (var b = 0, c = this.pluginArray.length; b < c; b++) {
                    var d = this.pluginArray[b];
                    if ("function" === typeof d.getSelectedText && (d = d.getSelectedText(f, a))) return d
                }
                return e(a).text()
            },
            addSubmitLog: function(f) {
                for (var a = "", b = 0, c = this.pluginArray.length; b < c; b++) {
                    var d =
                        this.pluginArray[b];
                    "function" === typeof d.addSubmitLog && (a += d.addSubmitLog(f))
                }
                return a
            }
        };
        var b = d.plugins = new a,
            c = function() {
                d.rsuggest = this
            };
        c.prototype = {
            resultCache: {},
            backup: "",
            lastInput: "",
            respInput: null,
            sggstSelectNum: -1,
            usingChar: "",
            usingPluginChar: "",
            mouseInput: null,
            mouseState: 0,
            mouseMove: 0,
            mouseOver: 0,
            enterFlag: 1,
            keyCode: null,
            currentFontSize: null,
            maxIndex: 0,
            index: -1,
            clickEnableFlag: 1,
            IeVersion: 0,
            viewEvent: null,
            showTimer: null,
            waitTimeout: null,
            suggestDivPos: e("body"),
            onoff: 1,
            onoffInitFlag: 0,
            onElem: null,
            offElem: null,
            decisionFlag: 0,
            scVal: 0,
            submitWay: 0,
            spaceRegExp: RegExp("^[\\s" + unescape(String.fromCharCode("0x3000")) + unescape(String.fromCharCode("0x00A0")) + "]+"),
            whitespaceMatcher: RegExp("[\\s" + unescape(String.fromCharCode("0x3000")) + unescape(String.fromCharCode("0x00A0")) + "]+"),
            trimMatcher: RegExp("^[\\s" + unescape(String.fromCharCode("0x3000")) + unescape(String.fromCharCode("0x00A0")) + "]+|[\\s" + unescape(String.fromCharCode("0x3000")) + unescape(String.fromCharCode("0x00A0")) + "]+$", "g"),
            blackList: ["iphone",
                "ipod", "ipad", "android"
            ],
            onOffBlackList: [],
            count: 10,
            configCollection: "col",
            cssRow: "sggstRow",
            cssSelect: "sggstSelect",
            cssNoSelect: "sggstNoselect",
            cssKeyword: "sggstKeyword",
            cssOnoff: "sggstOnoff",
            cssOffImage: "sggstHideimg",
            cssOnImage: "sggstOpenimg",
            cssRemarks: "sggstComment",
            cssRemarksBox: "sggstCommentbox",
            cssComment: "sggstBetabtn01",
            cssOff: "sggstBetabtn02",
            cssOn: "openSuggest",
            searchCommand: "suggest",
            submitLogCommand: "submit",
            cookieCommand: "conf",
            paramInput: "q",
            paramCollection: "cl",
            paramSuggestid: "sid",
            paramSuggestUse: "su",
            paramSelectNum: "sn",
            paramSuggestOnOff: "so",
            paramFormParam: "fp",
            paramReqid: "rid",
            sggstReqid: Math.floor(1E10 * Math.random()),
            paramEncoding: "oe",
            paramSelect: "ss",
            paramGroupId: "gi",
            paramCookieMethod: "mt",
            paramCookieCheck: "c",
            paramCookieAdd: "a",
            paramCookieDelete: "d",
            paramSubmitWay: "sw",
            paramCallback: "cb",
            paramExParam: "ex",
            ajaxSearchTimeout: 1E4,
            ajaxSubmitLogTimeout: 3E3,
            afterWaitingforEventTimeout: 100,
            justAddedToQueueTimeout: 10,
            pollingTime: 10,
            retryCount: 20,
            isTimeout: !1,
            readyState: 0,
            browser: {},
            init: function(f) {
                var a = this,
                    f = a.config = e(f),
                    h = d.hook;
                if (!a.validateConfig(f)) return !1;
                a.form = e("#" + f.attr("form"));
                a.baseUrl = f.attr("baseUrl");
                a.button = e("#" + f.attr("button"));
                a.suggestId = f.attr("suggestId");
                a.encoding = f.attr("encoding");
                a.exParam = f.attr("exParam") || "";
                a.groupId = f.attr("groupId");
                a.input = e("#" + f.attr("input"));
                a.input.attr("autocomplete", "off");
                a.sendFormParam = a.checkBoolNum(f.attr("sendFormParam")) || 1;
                a.onoffEnable = a.checkBoolNum(f.attr("onoff")) || 1;
                a.hookRequired = a.checkBoolNum(f.attr("hookRequired")) ||
                    0;
                a.keywordReplaceOnMouseover = a.checkBoolNum(f.attr("keywordReplaceOnMouseover")) || 0;
                a.addBlackList = f.attr("uaBlackList") || "";
                a.byteNumToHideOpenSggst = f.attr("byteNumToHideOpenSggst") || 36;
                a.nowFontSize = e("html").css("font-size");
                a.hideToolTips = f.attr("hideToolTips") || "";
                a.openToolTips = f.attr("openToolTips") || "";
                a.pollingTime = f.attr("pollingTime") || a.pollingTime;
                a.retryCount = f.attr("retryCount") || a.retryCount;
                a.spOn = f.attr("spOn") || 0;
                a.spOn && (a.blackList = []);
                a.getBrowser(navigator.userAgent);
                if (!a.preInit() ||
                    -1 == a.judge() || 1 != a.input.parent(".sggstInputWrap").length || 1 == a.hookRequired && "undefined" === typeof h) {
                    try {
                        a.initFailure()
                    } catch (i) {}
                    return !1
                }
                "undefined" !== typeof h && h.prototype != g && e.extend(c.prototype, h.prototype);
                if (!b.init(a)) return a.initFailure(), !1;
                a.createSuggestDiv();
                a.onoffReady();
                a.resize();
                e(window).resize(function() {
                    a.resize()
                });
                a.input.keydown(function(f) {
                    a.enterFlag = 0;
                    a.keyCode = f.keyCode;
                    switch (f.keyCode) {
                        case 40:
                            a.down();
                            break;
                        case 38:
                            a.up();
                            break;
                        case 9:
                            a.hide()
                    }
                }).keypress(function(f) {
                    a.keyCode =
                        f.keyCode;
                    a.enterFlag = 1;
                    switch (f.keyCode) {
                        case 27:
                            return 27 == a.keyCode && a.hide(!0), !1;
                        case 13:
                            return 13 == a.keyCode && (1 == a.enterFlag && 1 == a.clickEnableFlag) && (a.clickEnableFlag = 0, a.decisionFlag = 1, a.submitWay = 1, setTimeout(function() {
                                a.button.click()
                            }, 10), a.eventStop()), !1
                    }
                }).keyup(function(f) {
                    switch (f.keyCode) {
                        case 27:
                            return 27 == a.keyCode && a.hide(!0), !1;
                        case 13:
                            return 13 == a.keyCode && (1 == a.enterFlag && 1 == a.clickEnableFlag) && (a.clickEnableFlag = 0, a.decisionFlag = 1, a.submitWay = 1, setTimeout(function() {
                                    a.button.click()
                                },
                                10), a.eventStop()), !1
                    }
                }).focus(function() {
                    a.lastInput = a.input.val();
                    0 == a.mouseOver && (a.backup = a.input.val());
                    a.eventStart()
                }).blur(function() {
                    0 == a.mouseState && 0 == a.mouseOver ? a.eventStop() : (1 == a.mouseState || 1 == a.mouseOver) && a.input.focus();
                    a.mouseState = 0
                }).mouseover(function() {
                    1 == a.keywordReplaceOnMouseover && (a.suggest.is(":visible") && -1 != a.index && 0 != a.backup.length && a.lastInput == a.input.val()) && (a.input.val(a.backup), a.sggstSelectNum = -1, a.usingChar = "", a.usingPluginChar = "")
                }).attr("maxlength", 2048);
                document.activeElement.id == a.input.attr("id") && (a.input.blur(), a.input.focus());
                b.invokeFunction(a, "postInit");
                a.postInit();
                return !0
            },
            preInit: function() {
                return !0
            },
            postInit: function() {
                return !0
            },
            validateConfig: function(a) {
                if (a == g || !this.isMatch(a.attr("input"), /^[a-zA-Z0-9_\-]+$/) || !this.isMatch(a.attr("form"), /^[a-zA-Z0-9_\-]+$/) || !this.isMatch(a.attr("baseUrl"), /(^https?:\/\/|^\/\/).+$/) || !this.isMatch(a.attr("button"), /^[a-zA-Z0-9_\-]+$/) || !this.isMatch(a.attr("suggestId"), /^[a-zA-Z0-9_\-]+$/) ||
                    !this.isMatch(a.attr("encoding"), /^(utf-8|euc-jp)$/) || !this.isMatch(a.attr("col"), /^[a-z]+$/) || !this.isMatch(a.attr("groupId"), /^[a-zA-Z0-9_\-]+$/)) return !1;
                var b = a.attr("byteNumToHideOpenSggst");
                return b && !this.isInRange(b, 1, 99) || (b = a.attr("openToolTips")) && !this.isMatch(b, /^[^<>]+$/) || (b = a.attr("hideToolTips")) && !this.isMatch(b, /^[^<>]+$/) || (b = a.attr("uaBlackList")) && !this.isMatch(b, /^[a-zA-Z0-9 _\/\.;]+$/) || (b = a.attr("exParam")) && !this.isMatch(b, /^[^<>]+$/) || (b = a.attr("pollingTime")) && !this.isInRange(b,
                    10, 1E3) || (b = a.attr("retryCount")) && !this.isInRange(b, 1, 100) || (b = a.attr("onoff")) && !this.isInRange(b, 0, 1) || (b = a.attr("hookRequired")) && !this.isInRange(b, 0, 1) || (b = a.attr("sendFormParam")) && !this.isInRange(b, 0, 1) || (b = a.attr("keywordReplaceOnMouseover")) && !this.isInRange(b, 0, 1) ? !1 : (a = a.attr("spOn")) && !this.isInRange(a, 0, 1) ? !1 : !0
            },
            checkBoolNum: function(a) {
                return "undefined" != typeof a && 0 != a.length && (0 == a || 1 == a) ? a : ""
            },
            escapeHtml: function(a) {
                return e("<div/>").text(a).html()
            },
            initFailure: function() {
                this.input.attr("autocomplete",
                    "")
            },
            createSuggestDiv: function() {
                var a = this;
                a.suggest = e("<div>").attr({
                    id: "suggest"
                }).show().hide().appendTo(a.suggestDivPos);
                var c = b.createSuggestElems(this);
                a.suggest.append(c);
                a.suggest.delegate("." + a.cssKeyword, "mouseup", function(c) {
                    var l = e(this),
                        d = l.text();
                    1 != c.which || (a.mouseInput != d || 0 == a.clickEnableFlag) || (a.mouseState = 2, a.input.blur(), c = b.getSelectedText(a, l.parent("." + a.cssRow)), a.input.val(c), a.sggstSelectNum = a.index, a.usingChar = d, a.usingPluginChar = c, a.clickEnableFlag = 0, a.decisionFlag =
                        1, a.submitWay = 2, a.selectDiv = l.parent("." + a.cssRow), setTimeout(function() {
                            a.button.click()
                        }, 10), a.eventStop())
                });
                a.suggest.delegate("." + a.cssKeyword, "mousedown", function(b) {
                    if (1 != b.which) a.input.blur();
                    else return a.mouseInput = e(this).text(), a.mouseState = 1, !1
                });
                a.suggest.delegate("." + a.cssKeyword, "mouseover", function() {
                    a.over(e(this))
                });
                a.suggest.delegate("." + a.cssKeyword, "mouseout", function() {
                    e(this).parent().removeClass(a.cssSelect).addClass(a.cssNoSelect);
                    a.mouseState = 0
                });
                a.suggest.delegate("." +
                    a.cssKeyword, "mousemove",
                    function() {
                        a.mouseMove = 1
                    });
                a.remarks = e('<div class="' + a.cssRemarks + '"><div class="' + a.cssRemarksBox + '"><div class="' + a.cssComment + '">')
            },
            preSearch: function() {
                return !0
            },
            search: function() {
                var a = this,
                    c = a.input.val(),
                    h;
                a.preSearch() && 0 != a.onoffInitFlag && (!c || a.isMatch(c, a.spaceRegExp) ? (a.usingChar = "", a.usingPluginChar = "", a.sggstSelectNum = -1, a.hide()) : c != a.lastInput && (a.resize(), a.lastInput = c, a.backup = c, a.readyState = 0, clearTimeout(a.waitTimeout), clearInterval(a.showTimer), clearTimeout(h),
                    h = setTimeout(function() {
                        a.index = -1;
                        a.mouseMove = 0;
                        a.maxIndex = 0;
                        b.invokeFunction(a, "search");
                        a.waitTimeout = setTimeout(function() {
                            clearInterval(a.showTimer)
                        }, a.pollingTime * a.retryCount);
                        clearInterval(a.showTimer);
                        a.showTimer = setInterval(function() {
                            2 > a.readyState || (a.suggest.append(a.remarks), clearTimeout(a.waitTimeout), clearInterval(a.showTimer), 3 > a.readyState ? setTimeout(function() {
                                a.showInternal()
                            }, a.pollingTime) : a.showInternal())
                        }, a.pollingTime)
                    }, a.justAddedToQueueTimeout), a.postSearch()))
            },
            showInternal: function() {
                this.mouseMove =
                    1;
                var a = this.suggest.children().not(this.remarks).filter(function() {
                    return "none" !== e(this).css("display")
                });
                1 == this.onoff && 0 < a.length ? this.suggest.show() : this.suggest.hide()
            },
            showAfterGetSuggest: function(a) {
                b.invokeFunction(this, "showWithSuggestKeyword", a)
            },
            postSearch: function() {},
            read: function(a, b) {
                var c = this,
                    d = setTimeout(function() {
                        c.isTimeout = !0
                    }, c.ajaxSearchTimeout);
                c.isTimeout = !1;
                try {
                    e.ajax({
                        url: a,
                        cache: !0,
                        timeout: c.ajaxSearchTimeout,
                        dataType: "jsonp",
                        scriptCharset: c.encoding,
                        jsonp: c.paramCallback,
                        success: function(a) {
                            clearTimeout(d);
                            if (!c.isTimeout) {
                                var f = {
                                    query: c.getParsedUrlInfo(this.url, c)
                                };
                                a.qInfo = f;
                                b(a)
                            }
                        }
                    })
                } catch (s) {
                    clearTimeout(c.waitTimeout), clearInterval(c.showTimer)
                }
            },
            getParsedUrlInfo: function(a, b) {
                if (!a) return null;
                var c = {};
                try {
                    var d = document.createElement("a");
                    d.href = a;
                    for (var e = d.search.replace("?", "").split("&"), d = 0, j = e.length; d < j; d++) {
                        var g = e[d].split("=");
                        c[g[0]] = 2 == g.length ? decodeURIComponent(g[1]) : ""
                    }
                } catch (n) {
                    c = {
                        q: b.lastInput
                    }
                }
                return c
            },
            eventStart: function() {
                var a = this;
                clearInterval(a.viewEvent);
                a.clickEnableFlag = !0;
                a.decisionFlag = !1;
                a.viewEvent = setInterval(function() {
                    a.nowFontSize = e("html").css("font-size");
                    a.currentFontSize != a.nowFontSize && (a.currentFontSize = a.nowFontSize, a.resize());
                    a.controlOnElem();
                    a.search()
                }, 100)
            },
            eventStop: function() {
                var a = this;
                clearInterval(this.viewEvent);
                setTimeout(function() {
                    a.hide()
                }, 200)
            },
            hide: function(a) {
                a && 0 != this.lastInput.length && (this.input.val(this.backup), this.sggstSelectNum = -1, this.usingPluginChar = this.usingChar = "");
                this.lastInput = this.input.val();
                this.suggest.hide()
            },
            select: function(a) {
                var c = this.suggest.children("." + this.cssSelect + ", ." + this.cssNoSelect);
                c.filter("." + this.cssSelect).removeClass(this.cssSelect).addClass(this.cssNoSelect);
                c = c.filter(":visible").eq(this.index); - 1 != this.index && c.removeClass(this.cssNoSelect).addClass(this.cssSelect);
                a && (a = "", -1 >= this.index || this.index >= this.maxIndex ? (a = this.backup, this.usingPluginChar = this.usingChar = "", this.sggstSelectNum = -1, this.selectDiv = g) : (this.usingPluginChar = this.usingChar = a = b.getSelectedText(this, c), this.sggstSelectNum =
                    this.index, this.selectDiv = c), this.input.val(a), this.lastInput = a);
                this.decisionFlag = 1
            },
            up: function() {
                0 == this.maxIndex || (0 == this.lastInput.length || 0 == this.config.attr(this.configCollection).length) || (-1 >= this.index && (this.index = this.maxIndex), this.suggest.is(":visible") ? (this.index--, this.select(1)) : this.respInput == this.lastInput && 1 == this.onoff && (this.select(), this.suggest.show()))
            },
            down: function() {
                0 == this.maxIndex || (0 == this.lastInput.length || 0 == this.config.attr(this.configCollection).length) || (this.index >=
                    this.maxIndex && (this.index = -1), this.suggest.is(":visible") ? (this.index++, this.select(1)) : this.respInput == this.lastInput && 1 == this.onoff && (this.select(), this.suggest.show()))
            },
            over: function(a) {
                var b = this,
                    c = -1,
                    d = b.suggest.children("." + b.cssSelect + ", ." + b.cssNoSelect);
                d.filter("." + b.cssSelect).removeClass(b.cssSelect).addClass(b.cssNoSelect);
                d.filter(":visible").each(function(d, i) {
                    if (a.get(0) == e(i).find("." + b.cssKeyword).get(0)) return c = d, !1
                });
                if (d = 1 == b.keywordReplaceOnMouseover && 1 == b.mouseMove) b.mouseOver =
                    1, b.input.blur(), b.input.focus();
                b.index = c;
                b.select(d);
                setTimeout(function() {
                    b.mouseOver = 0
                }, 50)
            },
            preJump: function() {
                return !0
            },
            jump: function(a) {
                this.preJump() && (this.scVal = 1 == this.decisionFlag ? a : 0, this.sendSubmitLog())
            },
            sendSubmitLog: function() {
                try {
                    var a = searchplat.suggest.rsbmt;
                    "undefined" !== typeof a && ("function" === typeof a.sendSubmitLog && "function" === typeof a.setParamPlugin) && a.sendSubmitLog(a.setParamPlugin, this, b.pluginArray)
                } catch (c) {}
                return !0
            },
            isUse: function() {
                var a = this.input.val() !== g ? this.input.val().replace(this.trimMatcher,
                    "") : "";
                return 0 != a.length && this.usingPluginChar == a ? 1 : 0
            },
            judge: function() {
                for (var a = this, b = navigator.userAgent.toLowerCase(), c = 0; c < a.blackList.length; c++) {
                    var d = a.blackList[c];
                    if (0 != d.length && (d = RegExp("(" + d + ")"), null != d.exec(b))) return -1
                }
                if (0 != a.addBlackList.length)
                    for (var e = a.addBlackList.split(","), c = 0; c < e.length; c++)
                        if (d = e[c], 0 != d.length && -1 != b.indexOf(d)) return -1;
                a.browser.msie && (a = this, c = a.browser.version, 5 < c && 7 > c ? a.IeVersion = 6 : 6 < c && 8 > c && (a.IeVersion = 7));
                6 == a.IeVersion && (a.onoffEnable = 0);
                for (c =
                    0; c < a.onOffBlackList.length; c++)
                    if (d = a.onOffBlackList[c], 0 != d.length && (d = RegExp("(" + d + ")"), null != d.exec(b))) {
                        a.onoffEnable = 0;
                        break
                    } return a.IeVersion
            },
            getBrowser: function(a) {
                var b = {};
                a && (a = a.toLowerCase(), a = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || 0 > a.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [], a[1] && (b[a[1]] = !0, b.version = a[2] || "0"),
                    b.chrome && "undefined" === typeof window.chrome ? b.webkit = !0 : b.chrome && "undefined" !== typeof window.chrome ? b.blink = !0 : b.webkit && (b.safari = !0));
                this.browser = b
            },
            preResize: function() {
                return !0
            },
            resize: function() {
                if (this.preResize()) {
                    var a = this.getTextPos(),
                        b;
                    7 == this.IeVersion && (a = this.getIe7TextPos(a));
                    b = a.top;
                    var a = a.left,
                        c = Math.ceil(this.input.outerHeight());
                    this.suggest.css({
                        top: b + c,
                        left: a
                    });
                    this.changeSuggestWidth();
                    this.postResize()
                }
            },
            postResize: function() {},
            getTextPos: function() {
                return this.input.position()
            },
            getIe7TextPos: function(a) {
                var b = [],
                    c = document.body,
                    d = c.getBoundingClientRect(),
                    e = (d.right - d.left) / c.offsetWidth;
                b.top = Math.ceil(a.top / ((d.bottom - d.top) / c.offsetHeight));
                b.left = Math.ceil(a.left / e);
                return b
            },
            changeSuggestWidth: function() {
                var a = this.input.outerWidth(),
                    b = this.input.innerWidth(),
                    c = 0,
                    d = c = 0;
                try {
                    c = parseInt(this.suggest.css("border-left-width")), d = parseInt(this.suggest.css("border-right-width"))
                } catch (e) {}
                c += d;
                d = this.suggest.outerWidth() - c;
                a != d && (this.suggest.css({
                    width: a - c
                }), this.suggest.find("." +
                    this.cssKeyword).css({
                    width: b - c
                }))
            },
            onoffReady: function() {
                1 == this.onoffEnable ? (this.createOnElm(), this.createOffElm(), this.checkCookie()) : this.setInitOnoffNum(1)
            },
            checkCookie: function() {
                var a = this;
                e.ajax({
                    type: "GET",
                    url: a.baseUrl + "/" + a.cookieCommand + "?" + a.paramGroupId + "=" + a.groupId + "&" + a.paramCookieMethod + "=" + a.paramCookieCheck,
                    dataType: "jsonp",
                    timeout: 500,
                    jsonp: a.paramCallback,
                    success: function(b) {
                        b = b.result;
                        if ("undefined" != typeof b && (0 == b || 1 == b)) a.setInitOnoffNum(0 == b ? 1 : 0)
                    }
                });
                setTimeout(function() {
                        a.setInitOnoffNum(1)
                    },
                    1E3)
            },
            setInitOnoffNum: function(a) {
                1 != this.onoffInitFlag && (this.onoff = a, this.onoffInitFlag = 1, this.displayOnoff())
            },
            createOnElm: function() {
                var a = this;
                a.onElem = e("<div />").hide().attr({
                    "class": a.cssOn,
                    title: a.openToolTips
                }).click(function() {
                    a.setOnoffNum(1);
                    a.input.focus();
                    setTimeout(function() {
                        a.lastInput = ""
                    }, 120)
                });
                a.input.after(a.onElem)
            },
            createOffElm: function() {
                var a = this;
                a.offElem = e("<div />").attr({
                    "class": a.cssOff,
                    title: a.hideToolTips
                }).append(e("<span />").attr("class", a.cssOffImage));
                a.remarks.children().append(a.offElem);
                a.suggest.delegate("." + a.cssOff, "mousedown", function(b) {
                    if (1 != b.which) a.input.blur();
                    else return a.mouseState = 1, a.setOnoffNum(0), a.input.blur(), !1
                });
                a.suggest.delegate("." + a.cssOff, "mouseout", function() {
                    a.mouseState = 0
                })
            },
            setOnoffNum: function(a) {
                this.onoff = a;
                this.setCookie(a);
                this.displayOnoff()
            },
            setCookie: function(a) {
                e.ajax({
                    type: "GET",
                    url: this.baseUrl + "/" + this.cookieCommand + "?" + this.paramGroupId + "=" + this.groupId + "&" + this.paramCookieMethod + "=" + (1 == a ? this.paramCookieDelete : this.paramCookieAdd),
                    dataType: "jsonp",
                    timeout: 500,
                    jsonp: this.paramCallback,
                    success: function() {}
                })
            },
            displayOnoff: function() {
                1 == this.onoffEnable && (1 == this.onoff ? (this.onElem.hide(), this.resize(), this.input.attr("autocomplete", "off")) : (this.resize(), this.input.attr("autocomplete", ""), this.controlOnElem(), this.suggest.hide()))
            },
            controlOnElem: function() {
                1 != this.onoffEnable || (0 != this.onoff || 0 == this.byteNumToHideOpenSggst) || (1 == this.isByteLengthOver(this.input.val(), this.byteNumToHideOpenSggst) ? this.onElem.hide() : this.onElem.is(":visible") ||
                    this.onElem.show())
            },
            isSuggestUse: function() {
                return "undefined" != typeof this.scVal && 1 == this.scVal
            },
            isMatch: function(a, b) {
                return a && RegExp(b).test(a) ? !0 : !1
            },
            isInRange: function(a, b, c) {
                a = parseInt(a);
                return !isNaN(a) && a >= b && a <= c
            },
            isNotEmptyArray: function(a) {
                return "object" === typeof a && "function" === typeof a.pop && 0 < a.length
            },
            createWordLine: function(a) {
                if (!a || this.isMatch(a, this.spaceRegExp)) return "";
                for (var a = this.escapeHtml(a), b = this.respInput.toLowerCase().split(this.whitespaceMatcher), c, d = 0, e = b.length; d <
                    e; d++) c = this.escapeHtml(b[d]), a = a.replace(RegExp("(^|\\s)(" + this.escapeRegExp(c) + ")"), "$1<strong>$2</strong>");
                return a
            },
            escapeRegExp: function(a) {
                return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
            },
            isByteLengthOver: function(a, b) {
                if (a === g) return 0;
                var c = 0,
                    d = "",
                    e = a.length,
                    j;
                for (j = 0; j < e; j++)
                    if (d = escape(a.charAt(j)), c += 4 > d.length && !/%[0|1|8-9|A-F]\w|%7F/.test(d) ? 1 : 2, c > b) return 1;
                return 0
            }
        };
        e(function() {
            (new c).init("#sggstConfig")
        })
    }
})(jQuery);
(function(e, g) {
    if ("undefined" != typeof e && !("undefined" == typeof searchplat || "undefined" == typeof searchplat.suggest || "undefined" == typeof searchplat.suggest.plugins)) {
        var d = function() {};
        d.prototype = {
            pluginName: "swg",
            cssRow: "swgRow",
            cssSwgTopRow: "swgTopRow",
            cssBorder: "sggstBorder",
            cssSwgRow: "swgWordRow",
            cssSwgTopWordRow: "swgTopWordRow",
            paramGenre: "ge",
            paramGenreUse: "gu",
            paramOutputFormat: "of",
            paramSortLogic: "sl",
            maxRows: 10,
            maxAddGenreRows: 1,
            maxEachGenreRows: 3,
            noGenreId: "0",
            swgQuery: "swg",
            swgOutput: "osgenre",
            gbQuery: "",
            gbOutput: "osgenre",
            genreBoostOutput: "osgenre",
            swgExistsCss: "sggstSwg",
            validateConfig: function(a) {
                var b = a.config;
                if (b == g) return !1;
                var c = b.attr("selectBoxId");
                return c && !a.isMatch(c, /^[a-zA-Z0-9_\-]+$/) || (c = b.attr("maxRows")) && !a.isInRange(c, 1, 30) || (c = b.attr("maxAddGenreRows")) && !a.isInRange(c, 0, 1) || (c = b.attr("maxEachGenreRows")) && !a.isInRange(c, 0, 10) || (c = b.attr("noGenreId")) && !a.isMatch(c, /^[a-zA-Z0-9_\-]+$/) || (c = b.attr("swgQuery")) && !a.isMatch(c, /^[^<>]+$/) || (c = b.attr("swgOutput")) && !a.isMatch(c,
                    /^[^<>]+$/) || (c = b.attr("genreBoostQuery")) && !a.isMatch(c, /^[^<>]+$/) ? !1 : (b = b.attr("genreBoostOutput")) && !a.isMatch(b, /^[^<>]+$/) ? !1 : !0
            },
            init: function(a) {
                var b = this,
                    c = a.config;
                b.genreSelectBox = e([{
                    value: b.noGenreId,
                    isDummy: !0
                }]);
                if (!b.validateConfig(a)) return !1;
                a.maxRows = c.attr("maxRows") || b.maxRows;
                b.maxAddGenreRows = c.attr("maxAddGenreRows") || b.maxAddGenreRows;
                b.maxEachGenreRows = c.attr("maxEachGenreRows") || b.maxEachGenreRows;
                b.swgQuery = c.attr("swgQuery") || b.swgQuery;
                b.swgOutput = c.attr("swgOutput") ||
                    b.swgOutput;
                b.gbQuery = c.attr("genreBoostQuery") || b.gbQuery;
                b.gbOutput = c.attr("genreBoostOutput") || b.genreBoostOutput;
                var f = c.attr("selectboxId");
                b.noGenreId = c.attr("noGenreId") || "0";
                "undefined" != typeof f && 0 < f.length && (b.genreSelectBox = e("#" + f));
                if ("undefined" == typeof b.genreSelectBox.val() || !b.genreSelectBox.attr("isDummy") && 0 == b.genreSelectBox.find("option[value=" + b.noGenreId + "]").length) return a.config = e(), !1;
                a.form.bind("reset", function() {
                    setTimeout(function() {
                            b.genreSelectBox.val(b.noGenreId)
                        },
                        a.afterWaitingforEventTimeout)
                });
                b.genreSelectBox.getAddingQuery = function() {
                    var a;
                    this.val() == b.noGenreId ? a = b.paramSortLogic + "=" + b.swgQuery + "&" + b.paramOutputFormat + "=" + b.swgOutput : (a = b.paramGenre + "=" + this.val() + "&" + b.paramOutputFormat + "=" + b.gbOutput, b.gbQuery && (a += "&" + b.paramSortLogic + "=" + b.gbQuery));
                    return a
                };
                b.genreSelectBox.change(function() {
                    a.respInput = ""
                });
                var d = b.genreSelectBox.attr("name") || "g";
                b.genreSelectBox.setGenreId = function(a) {
                    var c = b.getSelectedSwg(a).genreId,
                        g = b.getSelectedSwg(a).swgIndex,
                        j = f + "_hidden_for_suggest";
                    a.form.children("#" + j).length && a.form.children("#" + j).remove();
                    a.swgIndex = 0;
                    this.val() == b.noGenreId && 0 < c.length && (b.genreHidden = e("<input />").attr("id", j).attr("name", d).attr("type", "hidden").val(c), b.genreHidden.appendTo(a.form), a.swgIndex = g, this.isDummy || e(this).removeAttr("name"))
                };
                0 == e("body[onunload]").length && e(window).bind("unload", function() {});
                a.getTextPos = function() {
                    return this.input.offset()
                };
                a.button.bind("click.swg", function() {
                    try {
                        b.genreSelectBox.setGenreId(a),
                            a.jump(a.isUse())
                    } catch (c) {}
                    return !0
                });
                return !0
            },
            createSuggestElems: function(a) {
                for (var b = '<span class="' + a.cssKeyword + '"></span></div>', c = '<div class="' + a.cssNoSelect + " " + a.cssRow + '"data-sgst-idx="nrm_###N###">' + b, b = '<div class="' + a.cssNoSelect + " " + this.cssRow + '"data-sgst-idx="swg_###N###">' + b, d = "", e = "", h = parseInt(a.maxRows), a = isNaN(parseInt(this.maxAddGenreRows)) ? 0 : parseInt(this.maxAddGenreRows), i = isNaN(parseInt(this.maxEachGenreRows)) ? 0 : parseInt(this.maxEachGenreRows), a = a * i > h ? h : a * i, h = h - a, i = 0; i <
                    h; i++) var g = c,
                    d = d + g.replace(/###N###/, i + 1);
                if (0 < a) {
                    0 < h && (e += '<hr class="lastSwgBorder">');
                    for (i = 0; i < a; i++) g = b, e += g.replace(/###N###/, i + 1)
                }
                return d + e + '<hr class="' + this.cssBorder + '">'
            },
            postInit: function(a) {
                var b = this;
                a.suggest.find("." + b.cssRow + " > ." + a.cssKeyword).bind("mouseup", function(c) {
                    c.stopPropagation();
                    var d = e(this),
                        l = d.text();
                    1 != c.which || (a.mouseInput != l || 0 == a.clickEnableFlag) || (a.over(d), a.mouseState = 2, a.input.blur(), c = b.getSelectText(d), a.input.val(c), a.sggstSelectNum = a.index, a.usingChar =
                        l, a.usingPluginChar = c, a.clickEnableFlag = 0, a.decisionFlag = 1, a.submitWay = 2, a.selectDiv = d.parent("." + b.cssRow), setTimeout(function() {
                            a.button.click()
                        }, a.justAddedToQueueTimeout), a.eventStop())
                })
            },
            getValidIntValue: function(a, b, c, d) {
                a = isNaN(a) || 0 == a.length ? b : parseInt(a);
                return a < c ? c : a > d ? d : a
            },
            getSelectText: function(a) {
                a = a.clone();
                a.children("span").remove();
                return a.text()
            },
            getSelectedSwg: function(a) {
                var b = {
                    genreId: "",
                    swgIndex: 0
                };
                a.suggest.children(":not(hr)").filter(":visible").eq(a.sggstSelectNum).filter(":not(." +
                    a.cssNoSelect + ")").children("." + a.cssKeyword).children("span[key]");
                a.suggest.children(":visible").filter("." + this.cssRow).each(function(c) {
                    if (!e(this).hasClass(a.cssNoSelect)) {
                        var c = c + 1,
                            d = e(this).children("." + a.cssKeyword).children("span[key]");
                        swgGenreId = 0 === d.length ? "" : d.attr("key");
                        b.genreId = swgGenreId;
                        b.swgIndex = c;
                        return !1
                    }
                });
                return b
            },
            search: function(a) {
                var b = this,
                    c = a.lastInput.replace(a.spaceRegExp, "");
                if (0 == c.length) a.readyState += 2;
                else {
                    var d = a.config.attr(a.configCollection),
                        e = d + b.genreSelectBox.val();
                    "undefined" == typeof a.resultCache[e] && (a.resultCache[e] = {});
                    e = a.resultCache[e];
                    if ("undefined" == typeof e[c]) try {
                        var h = a.baseUrl + "/" + a.searchCommand + "?" + a.paramCollection + "=" + d + "&" + a.paramReqid + "=" + a.sggstReqid + "&" + a.paramSuggestid + "=" + a.suggestId + "&" + a.paramInput + "=" + encodeURIComponent(c) + "&" + a.paramEncoding + "=" + a.encoding + "&" + b.genreSelectBox.getAddingQuery();
                        0 != a.exParam.length && (h += "&" + a.exParam);
                        a.read(h, function(c) {
                            b.show(a, c)
                        })
                    } catch (g) {
                        a.readyState += 2
                    } else b.show(a, e[c])
                }
            },
            show: function(a, b) {
                var c =
                    this,
                    d = e.extend(!0, [], b),
                    l = d[1],
                    h = d[2],
                    g = a.suggest.find(".lastSwgBorder");
                a.suggest.children("." + a.cssRow + ", ." + c.cssRow).hide();
                a.suggest.removeClass(c.swgExistsCss);
                a.showAfterGetSuggest(d);
                a.suggest.find("." + c.cssBorder).hide();
                e(g).hide();
                if (a.isNotEmptyArray(l) && a.isNotEmptyArray(h)) {
                    var s = h[0],
                        j = h[1];
                    if (a.isNotEmptyArray(s) && "object" == typeof j) {
                        h = "";
                        d && (d.qInfo && d.qInfo.query && d.qInfo.query.q) && (h = d.qInfo.query.q);
                        d = h ? h : a.lastInput;
                        h = a.config.attr(a.configCollection) + c.genreSelectBox.val();
                        "undefined" == typeof a.resultCache[h][d] && (a.resultCache[h][d] = b);
                        a.lastSuggestQuery = d;
                        a.respInput = a.lastInput;
                        var m = 0,
                            n = 0,
                            d = a.suggest.children("." + c.cssRow),
                            k = 0,
                            r = !1;
                        d.filter("." + a.cssSelect).removeClass(a.cssSelect).addClass(a.cssNoSelect);
                        d.each(function(b, d) {
                            var f = e(d),
                                h = a.createWordLine(l[m]),
                                g = s[m];
                            if ("undefined" != typeof g) {
                                var g = g[n],
                                    i = j[g] || " ";
                                a.isMatch(g, /^[^\s]+/) && (r = !0, h += '<span key="' + g + '" class="' + c.cssSwgRow + '">' + i + "</span>", f.show().children("." + a.cssKeyword).html(h), k++)
                            }
                            r || f.hide();
                            n++;
                            n >= c.maxEachGenreRows && (m++, n = 0)
                        });
                        d.removeClass("swgLastRow");
                        k && e(d.get(k - 1)).addClass("swgLastRow");
                        var q = l.length,
                            d = a.maxRows;
                        r && d++;
                        q > d && (q = d);
                        d = a.suggest.children("." + a.cssRow);
                        d.filter("." + a.cssSelect).removeClass(a.cssSelect).addClass(a.cssNoSelect);
                        d.each(function(b, d) {
                            var f = e(d);
                            if (b < q) {
                                var h = a.createWordLine(l[b]);
                                f.show().children("." + a.cssKeyword).html(h);
                                k++
                            } else f.hide(), a.suggest.removeClass(c.swgExistsCss)
                        });
                        r ? e(g).show() : e(g).hide();
                        0 < k && (a.suggest.find("." + c.cssBorder).show(),
                            a.suggest.addClass(c.swgExistsCss));
                        a.maxIndex += k
                    }
                }
                a.readyState += 2
            },
            addSubmitLog: function() {
                var a, b = "&" + this.paramGenre + "=" + this.genreSelectBox.val();
                a = "undefined" == typeof this.genreHidden ? this.noGenreId : this.genreHidden.val();
                return b += "&" + this.paramGenreUse + "=" + a
            },
            getSelectedText: function(a, b) {
                var c = e(b);
                return c.hasClass(this.cssRow) || c.hasClass(this.cssSwgTopRow) ? (c = c.children("." + a.cssKeyword).clone(), c.children("span").remove(), c.text()) : null
            }
        };
        d = new d;
        searchplat.suggest.plugins.add(d)
    }
})(jQuery);
(function(e, g) {
    if ("undefined" != typeof e && !("undefined" === typeof searchplat || "undefined" === typeof searchplat.suggest || "undefined" === typeof searchplat.suggest.plugins)) {
        var d = function() {};
        d.prototype = {
            pluginName: "cnavi",
            cnaviCache: null,
            destinationStartMark: "<em>",
            destinationEndMark: "</em>",
            destinationRegExp: /<em>(.*)<\/em>/,
            cssEmphasize: "cnaviEm",
            cssRow: "cnaviRow",
            cssImg: "cnaviImg",
            cssLink: "cnaviLink",
            cssHorizon: "cnaviBorder",
            rowCount: 1,
            searchCount: 2,
            searchCommand: "cnavi",
            paramCNaviUse: "cu",
            paramSearchCount: "h",
            paramLanguage: "lr",
            cnaviCollectionKey: "cnavicol",
            lang: "ja",
            cnaviCollection: null,
            selectboxId: null,
            noGenreId: "0",
            genreSelectBox: null,
            ignoreUrls: [],
            partsname: "suggestcn1",
            channel: null,
            func: "Suggest",
            parts: null,
            cnaviExistsCss: "sggstCn",
            paramExParam: "cex",
            validateConfig: function(a) {
                var b = a.config;
                if (b == g || !a.isMatch(b.attr("channel"), /^[a-zA-Z0-9_\-]+$/) || !a.isMatch(b.attr("parts"), /^[a-zA-Z0-9_\-]+$/)) return !1;
                var c = b.attr("cnaviRowCount");
                return c && !a.isInRange(c, 0, 1) || (c = b.attr("cnaviSearchCount")) &&
                    !a.isInRange(c, 0, 10) || (c = b.attr("lang")) && !a.isMatch(c, /^[a-zA-Z0-9_\-]+$/) || (c = b.attr("selectboxId")) && !a.isMatch(c, /^[a-zA-Z0-9_\-]+$/) || (c = b.attr("noGenreId")) && !a.isMatch(c, /^[a-zA-Z0-9_\-]+$/) || (c = b.attr("ignoreUrls")) && !a.isMatch(c, /^https?:\/\/.+$/) || (c = b.attr(this.cnaviCollectionKey)) && !a.isMatch(c, /^[a-zA-Z0-9_\-]+$/) || (c = b.attr("partsname")) && !a.isMatch(c, /^[a-zA-Z0-9_\-]+$/) ? !1 : (b = b.attr("cnaviExParam")) && !a.isMatch(b, /^[^<>]+$/) ? !1 : !0
            },
            init: function(a) {
                var b = this,
                    c = a.config,
                    d = c.attr(a.configCollection);
                if (!b.validateConfig(a)) return !1;
                b.rowCount = c.attr("cnaviRowCount") || b.rowCount;
                b.searchCount = c.attr("cnaviSearchCount") || b.searchCount;
                b.channel = c.attr("channel");
                b.parts = c.attr("parts");
                b.partsname = c.attr("partsname") || b.partsname;
                b.lang = c.attr("lang") || b.lang;
                b.cnaviCollection = c.attr(b.cnaviCollectionKey) || d;
                b.cnaviCache = a.resultCache[b.cnaviCollection + b.searchCommand] = {};
                b.selectboxId = c.attr("selectboxId") || b.selectboxId;
                b.selectboxId && (b.genreSelectBox = e("#" + b.selectboxId));
                b.noGenreId = c.attr("noGenreId") ||
                    b.noGenreId;
                if (d = c.attr("ignoreUrls")) b.ignoreUrls = d.split(",");
                b.exParam = c.attr("cnaviExParam") || "";
                a.input.bind("keydown.cnavi", function(c) {
                    if (13 == c.keyCode && 1 == a.clickEnableFlag) {
                        var d = a.suggest.children("." + b.cssRow);
                        if (!d.is("." + a.cssSelect + ":visible")) return !0;
                        a.clickEnableFlag = 0;
                        a.decisionFlag = 1;
                        b.cnaviSubmit(a, d, 1, c);
                        return !1
                    }
                });
                return !0
            },
            createSuggestElems: function(a) {
                for (var a = '<div class="' + a.cssNoSelect + " " + this.cssRow + '" data-sgst-idx="cn_1"><a href="" class="' + this.cssLink + '"><hr class="' +
                        this.cssHorizon + '" /><span class="' + a.cssKeyword + '"></span></a></div>', b = "", c = 0, d = this.rowCount; c < d; c++) b += a;
                return b
            },
            postInit: function(a) {
                var b = this,
                    c = a.suggest.find("." + b.cssRow).find("." + b.cssLink),
                    d = c.find("." + a.cssKeyword);
                c.bind("click", function(c) {
                    c.preventDefault();
                    var d = e(this).parents("." + b.cssRow).first();
                    b.cnaviSubmit(a, d, 2, c)
                });
                d.bind("mouseup", function(a) {
                    a.stopPropagation()
                }).bind("mouseover", function() {
                    a.over(e(this))
                }).bind("mouseout", function() {
                    e(this).parents("." + b.cssRow).first().removeClass(a.cssSelect).addClass(a.cssNoSelect)
                })
            },
            search: function(a) {
                var b = this,
                    c = a.lastInput;
                if (0 == c.length) a.readyState += 1;
                else {
                    var d = b.cnaviCollection;
                    a.suggest.children("." + b.cssRow).hide();
                    a.suggest.removeClass(b.cnaviExistsCss);
                    if ("undefined" == typeof b.cnaviCache[c]) try {
                        var e = a.baseUrl + "/" + b.searchCommand + "?" + a.paramCollection + "=" + d + "&" + a.paramReqid + "=" + a.sggstReqid + "&" + a.paramSuggestid + "=" + a.suggestId + "&" + a.paramInput + "=" + encodeURIComponent(c) + "&" + a.paramEncoding + "=" + a.encoding + "&" + b.paramSearchCount + "=" + b.searchCount + "&" + b.paramLanguage +
                            "=" + b.lang;
                        0 != a.exParam.length && (e += "&" + a.exParam);
                        a.read(e, function(c) {
                            b.show(a, c)
                        })
                    } catch (h) {
                        a.readyState += 1
                    } else b.show(a, b.cnaviCache[c])
                }
            },
            show: function(a, b) {
                var c = "";
                b && (b.qInfo && b.qInfo.query && b.qInfo.query.q) && (c = b.qInfo.query.q);
                var d = c ? c : a.lastInput;
                if ("object" != typeof b[4]) a.readyState += 1;
                else {
                    var g = e.extend(!0, {}, b[4]),
                        h = g.destination,
                        c = g.sentence,
                        i = g.imageurl,
                        g = g.queryurl;
                    if (!a.isNotEmptyArray(h) || !a.isNotEmptyArray(c) || !a.isNotEmptyArray(i) || !a.isNotEmptyArray(g)) a.readyState += 1, this.cnaviCache[d] =
                        b;
                    else {
                        "undefined" == typeof this.cnaviCache[d] && (this.cnaviCache[d] = b);
                        a.respInput = a.lastInput;
                        var d = h.length,
                            h = 0,
                            s = a.suggest.children("." + this.cssRow),
                            j = [];
                        s.removeClass(a.cssSelect).addClass(a.cssNoSelect);
                        var m = 0;
                        a: for (; m < d && !(h >= this.rowCount); m++) {
                            var n = s.eq(h),
                                k = c[m],
                                r = i[m],
                                q = g[m],
                                p = "",
                                t;
                            if (a.isMatch(k, /^[^\s]+/) && a.isMatch(q, /^https?:\/\/.+$/) && (k.match(this.destinationRegExp), t = a.escapeHtml(RegExp.$1), -1 == e.inArray(t, j) && (j.push(t), k = k.replace(this.destinationStartMark, ""), k = k.replace(this.destinationEndMark,
                                    ""), !(-1 < location.href.indexOf(q))))) {
                                if (this.genreSelectBox && this.genreSelectBox.val() != this.noGenreId)
                                    for (var u = 0, v = this.ignoreUrls.length; u < v; u++)
                                        if (-1 < q.indexOf(this.ignoreUrls[u])) continue a;
                                n.find("a." + this.cssLink).attr("href", q);
                                a.isMatch(r, /^[a-zA-Z0-9\/:\._\-]+$/) && (p += '<img src="' + r + '" class="' + this.cssImg + '" />');
                                p += a.escapeHtml(k); - 1 < p.indexOf(t) && (p = p.replace(t, '<span class="' + this.cssEmphasize + '">' + t + "</span>"));
                                n.show().find("." + a.cssKeyword).html(p);
                                a.suggest.addClass(this.cnaviExistsCss);
                                h++
                            }
                        }
                        a.maxIndex += h;
                        a.readyState += 1
                    }
                }
            },
            getSelectedText: function(a, b) {
                return e(b).hasClass(this.cssRow) ? a.backup : null
            },
            cnaviSubmit: function(a, b, c, d) {
                var e = b.find("." + this.cssLink).attr("href");
                this.isCNaviUsed = 1;
                a.submitWay = c;
                a.usingChar = b.text();
                a.sggstSelectNum = a.index;
                "function" === typeof s_partsCounter && s_partsCounter(this.partsname);
                "function" === typeof ontrackingidAjax && (1 == c ? ontrackingidAjax(this.channel, this.func, this.parts, "Enter") : 2 == c && ontrackingidAjax(this.channel, this.func, this.parts, "Click"));
                this.cnaviCollection && (a.configCollection = this.cnaviCollectionKey);
                a.isCNaviUsed = 1;
                a.jump(1, d);
                setTimeout(function() {
                    window.location.href = e
                }, a.afterWaitingforEventTimeout);
                a.eventStop()
            },
            addSubmitLog: function() {
                var a = "",
                    a = "&" + this.paramCNaviUse + "=" + this.isCNaviUsed;
                0 != this.exParam.length && (a += "&" + this.paramExParam + "=" + encodeURIComponent(this.exParam));
                return a
            }
        };
        d = new d;
        searchplat.suggest.plugins.add(d)
    }
})(jQuery);
(function(e) {
    if ("undefined" != typeof e && !("undefined" === typeof searchplat || "undefined" === typeof searchplat.suggest || "undefined" === typeof searchplat.suggest.plugins)) {
        var g = function() {};
        g.prototype = {
            pluginName: "asuraku",
            linkUrl: "",
            collection: null,
            cssRow: "asurakuRow",
            cssLink: "asurakuLink",
            cssEmphasize: "asurakuEm",
            linkSuffix: "",
            isAsurakuUsed: 0,
            asurakuExsistsCss: "sggstAr",
            partsname: "suggestasu",
            channel: null,
            func: "Suggest",
            parts: null,
            validateConfig: function(d) {
                var a = d.config,
                    b = a.attr("asurakublacklist");
                this.linkSuffix = a.attr("asurakuphrase");
                this.linkUrl = a.attr("asurakuurl");
                this.collection = a.attr(d.configCollection);
                if (0 === this.collection.length) return !1;
                b && 0 < b.length && (this.blacklist = b.split(","));
                return (a = a.attr("asurakupartsname")) && !d.isMatch(a, /^[a-zA-Z0-9_\-]+$/) ? !1 : !0
            },
            init: function(d) {
                var a = this,
                    b = d.config;
                if (!a.validateConfig(d)) return !1;
                a.partsname = b.attr("asurakupartsname") || a.partsname;
                a.parts = b.attr("parts");
                a.channel = b.attr("channel");
                d.input.bind("keydown.asuraku", function(b) {
                    if (13 ==
                        b.keyCode && 1 == d.clickEnableFlag) {
                        if (!d.suggest.find("." + a.cssRow).is("." + d.cssSelect + ":visible")) return !0;
                        d.clickEnableFlag = 0;
                        d.decisionFlag = 1;
                        a.asurakuSubmit(d, 1, b);
                        return !1
                    }
                    return !0
                });
                return !0
            },
            createSuggestElems: function(d) {
                return '<div class="' + d.cssNoSelect + " " + this.cssRow + '" data-sgst-idx="as_1"><a href="" class="' + this.cssLink + '"><span class="' + d.cssKeyword + '"><span class="' + this.cssEmphasize + '"></span>' + this.linkSuffix + "</span></a></div>"
            },
            postInit: function(d) {
                var a = this,
                    b = d.suggest.find("." +
                        a.cssRow),
                    c = b.find("." + d.cssKeyword);
                b.bind("click", function(b) {
                    b.preventDefault();
                    d.sggstSelectNum = d.index;
                    a.asurakuSubmit(d, 2, b)
                });
                c.bind("mouseup", function(a) {
                    a.stopPropagation()
                }).bind("mouseover", function() {
                    d.over(e(this))
                }).bind("mouseout", function() {
                    e(this).parents("." + a.cssRow).first().removeClass(d.cssSelect).addClass(d.cssNoSelect)
                })
            },
            showWithSuggestKeyword: function(d, a) {
                var b = e.extend(!0, [], a),
                    c = [],
                    f = d.suggest.children("." + this.cssRow).hide(),
                    c = b[1];
                d.suggest.removeClass(this.asurakuExsistsCss);
                if (!(0 === f.size() || !c || 0 === c.length))
                    if ((b = c[0]) && !this._contains(b) && this.linkSuffix && this.linkUrl) c = this.linkUrl.replace(/###keyphrase###/, encodeURIComponent(b)), f.find("." + this.cssEmphasize).text(b), f.find("." + this.cssLink).attr("href", c), d.maxIndex += 1, f.show(), d.suggest.addClass(this.asurakuExsistsCss), this.asurakuText = b
            },
            _contains: function(d) {
                if (this.blacklist) {
                    for (var a = 0; a < this.blacklist.length; a++)
                        if (0 === d.indexOf(this.blacklist[a])) return !0;
                    return !1
                }
            },
            getSelectedText: function(d, a) {
                if (e(a).hasClass(this.cssRow)) return d.backup
            },
            asurakuSubmit: function(d, a, b) {
                var c = d.suggest.find("." + this.cssRow).find("." + this.cssLink).attr("href");
                this.isAsurakuUsed = 1;
                d.submitWay = a;
                d.usingChar = d.suggest.find("." + this.cssRow).text();
                try {
                    "function" === typeof s_partsCounter && s_partsCounter(this.partsname), "function" === typeof ontrackingidAjax && (1 == a ? ontrackingidAjax(this.channel, this.func, this.parts, "Enter") : 2 == a && ontrackingidAjax(this.channel, this.func, this.parts, "Click"))
                } catch (e) {}
                d.jump(1, b);
                setTimeout(function() {
                    window.location.href = c
                }, d.afterWaitingforEventTimeout);
                d.eventStop()
            },
            addSubmitLog: function() {
                return "&au=" + this.isAsurakuUsed
            }
        };
        g = new g;
        searchplat.suggest.plugins.add(g)
    }
})(jQuery);