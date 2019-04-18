/*! jquery-intelecomchat - v1.9.1 - 2017-05-09 */ ! function(a) {
    "function" == typeof define && define.amd ? define("intelecom.chat", ["jquery", "jqueryui", "knockout", "moment", "knockout.command", "knockout.mapping", "underscore", "underscore.string", "log", "starrr"], a) : a(jQuery, void 0, ko, moment, void 0, void 0, _, window.s, log, void 0)
}(function(a, b, c, d, e, f, g, h, i) {
    "function" == typeof require && (c.asyncCommand = e.asyncCommand, c.command = e.command, c.mapping = f), g.string = h;
    var j = a;
    if (!a.support.cors && window.XDomainRequest) {
        var k = /^https?:\/\//i,
            l = /^get|post$/i,
            m = new RegExp("^" + location.protocol, "i"),
            n = /\/json/i,
            o = /\/xml/i;
        a.ajaxTransport("text html xml json", function(a, b) {
            if (a.crossDomain && a.async && l.test(a.type) && k.test(b.url) && m.test(b.url)) {
                var c = null,
                    d = (b.dataType || "").toLowerCase(),
                    e = a.url.split("?");
                return e[0] = g.string.rtrim(e[0], ["/"]), e[0] += "Ie/", a.url = e.join("?"), {
                    send: function(e, f) {
                        c = new window.XDomainRequest, /^\d+$/.test(b.timeout) && (c.timeout = b.timeout), c.ontimeout = function() {
                            f(500, "timeout")
                        }, c.onload = function() {
                            var a = "Content-Length: " + c.responseText.length + "\r\nContent-Type: " + c.contentType,
                                b = {
                                    code: 200,
                                    message: "success"
                                },
                                e = {
                                    text: c.responseText
                                };
                            try {
                                if ("json" === d || "text" !== d && n.test(c.contentType)) try {
                                    e.json = j.parseJSON(c.responseText)
                                } catch (g) {
                                    b.code = 500, b.message = "parseerror"
                                } else if ("xml" === d || "text" !== d && o.test(c.contentType)) {
                                    var h = new ActiveXObject("Microsoft.XMLDOM");
                                    h.async = !1;
                                    try {
                                        h.loadXML(c.responseText)
                                    } catch (g) {
                                        h = void 0
                                    }
                                    if (!h || !h.documentElement || h.getElementsByTagName("parsererror").length) throw b.code = 500, b.message = "parseerror", "Invalid XML: " + c.responseText;
                                    e.xml = h
                                }
                            } catch (i) {
                                throw i
                            } finally {
                                f(b.code, b.message, e, a)
                            }
                        }, c.onerror = function() {
                            f(500, "error", {
                                text: c.responseText
                            })
                        }, c.onprogress = function() {};
                        var h = b.data ? g.isString(b.data) ? b.data : JSON.stringify(b.data) : "";
                        c.open(a.type, a.url), c.send(h)
                    },
                    abort: function() {
                        c && c.abort()
                    }
                }
            }
        })
    }
    var p = {
        create: function() {
            function a() {}
            return function(b) {
                return a.prototype = b, new a
            }
        }(),
        extend: function(a) {
            var b, c, d = Array.prototype.slice.call(arguments, 1);
            for (c = 0; c < d.length; ++c)
                for (b in d[c]) a[b] = d[c][b];
            return a
        }
    };
    return function() {
            var a;
            p.helpers = {
                init: function(b) {
                    a = b
                },
                ajax: function(a, b) {
                    var c = this.getFullUrl(a);
                    return j.support.cors = !0, j.ajax({
                        url: c,
                        type: b.type || "GET",
                        dataType: b.dataType || "json",
                        data: b.data,
                        cache: b.cache || !1,
                        traditional: b.traditional || !1,
                        success: function(a) {
                            a.IsRedirecting && (window.location.href = a.RedirectUrl)
                        }
                    })
                },
                getFullUrl: function(b) {
                    var c = h.trim(a.chatURL);
                    return h.startsWith(b, "/") ? h.rtrim(c, ["/"]) + b : h.startsWith(b, "http") ? b : c + b
                },
                getQueryStringValue: function(a) {
                    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(a).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"))
                }
            }
        }(),
        function() {
            function a(a, b, j, p) {
                var t, u, v, w;
                o = a, q = b, r = j, s = p, h = q.indexOf("Android") > -1 ? "android" : q.indexOf("iPad") > -1 ? "ipad" : "", t = o.toLowerCase(), u = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [], g = u[1] ? u[1] : "", v = u[2] || "0", w = "msie" === g, i = "android" === h, k = d(), l = e(w, v), n = c(), m = f()
            }

            function b() {
                var a, b, c = j("body"),
                    d = 0;
                return b = j("<div style='position:fixed;right:0px;bottom:0px;width:1px;height:1px;'/>"), c.append(b), a = b.position(), b.remove(), "-ms-autohiding-scrollbar" === c.css("-ms-overflow-style") && (d = 17), {
                    width: Math.round(a.left - d),
                    height: Math.round(a.top)
                }
            }

            function c() {
                function a(a) {
                    var b = document.createElement("div");
                    return b.style.cssText = a + "width:calc(1px);", !!b.style.length
                }
                return a("") || a("-webkit-") || a("-moz-")
            }

            function d() {
                var a = o || r || s;
                return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
            }

            function e(a, b) {
                if (a) {
                    var c = parseInt(b, 10);
                    if (9 > c || 9 == c && "https:" != location.protocol) return !1
                }
                return !0
            }

            function f() {
                return !k && "ipad" !== h || "webkit" !== g && "chrome" !== g ? !0 : !1
            }
            var g, h, i, k, l, m, n, o, q, r, s;
            p.browserInfo = {
                init: a,
                getSize: b,
                hasCalcSupport: function() {
                    return n
                },
                isAndroid: function() {
                    return i
                },
                isBrowserSupported: function() {
                    return l
                },
                isMobile: function() {
                    return k
                },
                isAudioSupported: function() {
                    return m
                }
            }
        }(),
        function() {
            function a(a, b, c, d, e, f, g, h, i, j, k) {
                var l = [null === a ? "" : a, null === b ? "" : b, null === c ? "" : c, null === d ? "" : d, null === e ? "" : e, null === f ? "" : f, null === g ? "" : g, null === h ? "" : h, null === i ? "" : i, null === j ? "" : j, null === k ? "" : k];
                return encodeURIComponent(l.join(","))
            }

            function b(a) {
                var b = decodeURIComponent(a).split(","),
                    c = parseInt(b[3], 10),
                    d = parseInt(b[5], 10),
                    e = parseInt(b[6], 10),
                    f = parseInt(b[7], 10),
                    g = parseInt(b[8], 10);
                return {
                    iqSessionId: "" === b[0] ? null : b[0],
                    requestId: "" === b[1] ? null : b[1],
                    minimized: "true" === b[2] ? !0 : "false" === b[2] ? !1 : null,
                    fontSize: isNaN(c) ? null : c,
                    mute: "true" === b[4] ? !0 : "false" === b[4] ? !1 : null,
                    left: isNaN(d) ? null : d,
                    top: isNaN(e) ? null : e,
                    width: isNaN(f) ? null : f,
                    height: isNaN(g) ? null : g,
                    horizontal: "" === b[9] ? null : b[9],
                    vertical: "" === b[10] ? null : b[10]
                }
            }

            function c(b, c, d, f, g, h, i, j, k, l, m) {
                var n = a(b, c, d, f, g, h, i, j, k, l, m),
                    o = new Date;
                o.setTime(o.getTime() + 72e5), document.cookie = e + "=" + n + "; expires=" + o.toGMTString() + "; path=/"
            }

            function d() {
                for (var a = e + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
                    for (var f = c[d];
                        " " === f.charAt(0);) f = f.substring(1, f.length);
                    if (0 === f.indexOf(a)) return b(f.substring(a.length, f.length))
                }
                return {
                    iqSessionId: null,
                    requestId: null,
                    minimized: null,
                    fontSize: null,
                    mute: null,
                    left: null,
                    right: null,
                    width: null,
                    height: null,
                    horizontal: null,
                    vertical: null
                }
            }
            var e, f = {};
            p.chatCookies = {
                init: function(a) {
                    e = "intelecomchat_" + a
                },
                setSessionId: function(a) {
                    return f.iqSessionId = a, this
                },
                setRequestId: function(a) {
                    return f.requestId = a, this
                },
                setMinimized: function(a) {
                    return f.minimized = a, this
                },
                setFontSize: function(a) {
                    return f.fontSize = a, this
                },
                setMute: function(a) {
                    return f.mute = a, this
                },
                setLeft: function(a) {
                    return f.left = a, this
                },
                setTop: function(a) {
                    return f.top = a, this
                },
                setWidth: function(a) {
                    return f.width = a, this
                },
                setHeight: function(a) {
                    return f.height = a, this
                },
                setHorizontal: function(a) {
                    return f.horizontal = a, this
                },
                setVertical: function(a) {
                    return f.vertical = a, this
                },
                save: function() {
                    var a = d();
                    c(void 0 === f.iqSessionId ? a.iqSessionId : f.iqSessionId, void 0 === f.requestId ? a.requestId : f.requestId, void 0 === f.minimized ? a.minimized : f.minimized, void 0 === f.fontSize ? a.fontSize : f.fontSize, void 0 === f.mute ? a.mute : f.mute, void 0 === f.left ? a.left : f.left, void 0 === f.top ? a.top : f.top, void 0 === f.width ? a.width : f.width, void 0 === f.height ? a.height : f.height, void 0 === f.horizontal ? a.horizontal : f.horizontal, void 0 === f.vertical ? a.vertical : f.vertical), f = {}
                },
                clear: function() {
                    c(null, null, null, null, null, null, null, null, null, null, null), f = {}
                },
                get: d
            }
        }(),
        function() {
            p.chatOptions = {
                chatlink: ".chatstarter",
                horizontalChatPosition: "right",
                verticalChatPosition: "bottom",
                horizontalStarterPosition: "right",
                verticalStarterPosition: "middle",
                customEmailCss: "",
                chatURL: "https://chat.puzzel.com/",
                showForm: !1,
                draggable: !0,
                resizable: !0,
                customerKey: -1,
                visualQueueId: 0,
                timeId: "",
                timeOpenExits: ["open"],
                nickName: "",
                chatId: "",
                chatIssueLabel: "",
                chatIssuePlaceholder: "",
                chatIssue: "",
                chatIssues: [],
                queueLabel: "",
                queuePlaceholder: "",
                queueKey: "",
                queues: [],
                altQueueKey: "",
                languageCode: "UK",
                msgWelcomeHeader: "",
                msgWelcome: "",
                msgWelcomeFull: "",
                msgWelcomeEmpty: "",
                msgWelcomePause: "",
                msgReject: "",
                msgClosedHeader: "",
                msgTimeClosed: "",
                msgNoAgents: "",
                msgGoodbyeHeader: "",
                msgGoodbye: "",
                emailSubject: "",
                fromEmailDisplayName: "",
                emailPreText: "",
                emailPostText: "",
                emailLogoUrl: "",
                emailLogoLink: "",
                emailLogoAlt: "",
                emailTopBackgroundColor: "#FFFFFF",
                emailTopLineColor: "#555555",
                emailBottomLineColor: "#555555",
                emailTextStyle: "",
                variables: {},
                showIntro: !1,
                showAgentLoggedOnInIntro: !1,
                showAgentActiveInIntro: !1,
                showNumberInQueueInIntro: !1,
                showStarter: !0,
                showStarterWhenMinimized: !0,
                showVariablesInIntro: !0,
                showIpAddressInIntro: !1,
                showSendEmail: !0,
                delayStarterSeconds: 0,
                inputFields: {},
                visualQueueExpression: function(a) {
                    return a && a.AgentsLoggedIn > 0
                },
                maxinfoMessageLength: 30,
                useTracker: !1,
                trackerArea: "",
                trackerMaxTracks: 30,
                enableSurvey: !0,
                surveyOnlyWhenConnected: !0,
                surveyMaxScore: 5,
                surveyMinScore: 1,
                surveyType: "star",
                startTextFromBottom: !1,
                msgSurveyQuestion: "",
                msgSurveyHeader: "",
                startChatImmediately: !1,
                msgOptionHeader: "",
                msgOptionButton: "",
                msgOptionConfirmed: "",
                msgOptionCancel: "",
                notifyChatterOnNewMessage: !0,
                msgNotificationText: "",
                sendEmailAutomatically: !1,
                authConnectionName: "",
                itcAuthCode: "",
                authMapping: {
                    NickName: {
                        MapType: "NickName"
                    },
                    Email: {
                        MapType: "ChatId"
                    }
                },
                msgFormHeader: "",
                msgFormIngress: ""
            }
        }(),
        function() {
            var a, b = '<div class="intelecomchatstarter itc_Chat__starter" style="display:none;"></div>',
                c = {
                    left: "intelecomStarterLeft",
                    center: "intelecomStarterCenter",
                    right: "intelecomStarterRight"
                },
                d = {
                    top: "intelecomStarterTop",
                    bottom: "intelecomStarterBottom",
                    middle: "intelecomStarterMiddle"
                };
            p.chatStarter = {
                init: function(c, d) {
                    a = j(b), c.prepend(a), a.on("click", d)
                },
                setPosition: function(b, e) {
                    var f;
                    for (f in c) a.removeClass(c[f]);
                    for (f in d) a.removeClass(d[f]);
                    a.addClass(c[b] || c.right), a.addClass(d[e] || d.middle)
                },
                show: function() {
                    a.show()
                },
                hide: function() {
                    a.hide()
                }
            }
        }(),
        function() {
            function a() {
                function a() {
                    d = p.chat.create(e, f), d.init(), b.resolve()
                }
                var b = j.Deferred();
                return d ? b.resolve() : "undefined" == typeof p.chat ? require(["intelecomchat.part2"], a) : a(), b
            }

            function b() {
                return a().done(function() {
                    d.startChat()
                }), !1
            }

            function c(a) {
                return "function" == typeof i ? i(a) : !1
            }
            var d, e, f = {};
            p.chatInitialiser = {
                init: function(a, c) {
                    var d = this,
                        g = p.chatCookies.get(),
                        h = g.minimized === !1 || c.startChatImmediately && (null === g.minimized || null === g.iqSessionId),
                        i = g.iqSessionId || h ? 0 : 1e3 * c.delayStarterSeconds;
                    e = a, c.resizable = c.resizable && p.browserInfo.hasCalcSupport(), j.inArray(c.horizontalChatPosition, ["left", "center", "right"]) < 0 && (c.horizontalChatPosition = "right"), j.inArray(c.verticalChatPosition, ["top", "middle", "bottom"]) < 0 && (c.verticalChatPosition = "bottom"), d.setOptions(c), p.chatStarter.init(e, b), p.chatStarter.setPosition(f.horizontalStarterPosition, f.verticalStarterPosition), j(f.chatlink).on("click", b), p.browserInfo.isBrowserSupported() ? setTimeout(function() {
                        g.iqSessionId ? d.startupChat(g, h) : d.checkIfChatOpen(f.customerKey, f.timeId, f.timeOpenExits, f.msgTimeClosed, f.visualQueueId, f.msgNoAgents, f.visualQueueExpression).done(function() {
                            d.startupChat(g, h)
                        }).fail(function() {
                            console && console.log("Contactcenter is closed.")
                        })
                    }, i) : console && console.log("Your browser doesn't support this chat. Please upgrade your browser.")
                },
                startupChat: function(a, c) {
                    c ? b() : !d && (f.showStarter || a.minimized === !0 && f.showStarterWhenMinimized) && p.chatStarter.show()
                },
                setOptions: function(a) {
                    j.extend(f, a), d && d.reloadOptions(a)
                },
                startChat: function() {
                    b()
                },
                checkIfChatOpen: function(a, b, c, d, f, g, h) {
                    var i = this,
                        k = j.Deferred();
                    return i.checkTimeExit(a, b, c, d).done(function() {
                        i.checkQueueStatus(a, f, g, h).done(function() {
                            return k.resolve()
                        }).fail(function() {
                            return e.trigger("onContactCenterClosed"), k.reject()
                        })
                    }).fail(function() {
                        return e.trigger("onContactCenterClosed"), k.reject()
                    }), k.promise()
                },
                checkQueueStatus: function(a, b, e, f) {
                    var g = this,
                        h = j.Deferred();
                    try {
                        if (!a || !b) return h.resolve();
                        g.getQueueStatusService(a, b, e).done(function(a) {
                            if (a.Ok) {
                                if (c("get queue status OK."), a.Queue) {
                                    try {
                                        if ("function" == typeof f && f(a.Queue)) return c("Queue open!"), h.resolve();
                                        c("Queue closed!")
                                    } catch (b) {
                                        c("Calculate queue status failed.", b.message)
                                    }
                                    d && d.vm.msgClosed(a.ClosedMessage)
                                } else c("Did not get any queue result");
                                return h.reject()
                            }
                            return c("get queue status failed. ", a.message), h.reject()
                        }).fail(function(a) {
                            return c("get queue status failed. ", a), h.reject()
                        })
                    } catch (i) {
                        return c("Get queue status failed.", i.message), h.reject()
                    }
                    return h.promise()
                },
                checkTimeExit: function(a, b, e, f) {
                    var g = this,
                        h = j.Deferred();
                    try {
                        if (!b) return h.resolve();
                        g.getTimeExitService(a, b, f).done(function(a) {
                            if (a.Ok) {
                                if (c("get time exit OK."), a.Exit) {
                                    if (j.inArray(a.Exit, e) > -1) return c("Callcenter open: " + a.Exit), h.resolve();
                                    d && d.vm.msgClosed(a.ClosedMessage), c("Callcenter closed, Time exit found now: " + a.Exit)
                                } else c("Did not get any time exit");
                                return h.reject()
                            }
                            return c("get time exit failed. ", a.message), h.reject()
                        }).fail(function(a) {
                            return c("get time exit failed. ", a), h.reject()
                        })
                    } catch (i) {
                        return c("get time exit failed.", i.message), h.reject()
                    }
                    return h.promise()
                },
                getQueueStatusService: function(a, b, c) {
                    return p.helpers.ajax("/Queue/GetQueueStatusJson/", {
                        action: "GetQueueStatus",
                        type: "POST",
                        data: {
                            customerKey: a,
                            visualQueueId: b,
                            closedMessage: c
                        }
                    })
                },
                getTimeExitService: function(a, b, c) {
                    return p.helpers.ajax("/Time/GetTimeExitJson/", {
                        action: "GetTimeExit",
                        type: "POST",
                        data: {
                            customerKey: a,
                            timeId: b,
                            closedMessage: c
                        }
                    })
                }
            }
        }(),
        function(a) {
            a.widget("intelecom.intelecomChat", {
                options: {},
                _create: function() {
                    var b = this,
                        c = a.extend(!0, p.chatOptions, this.options);
                    return c.customerKey ? (b.element.on("onChatStart", function() {
                        b._trigger("beforeChatStart"), b._trigger("onChatStart")
                    }), b.element.on("onChatEnd", function() {
                        b._trigger("afterChatEnd"), b._trigger("onChatEnd")
                    }), b.element.on("onChatWindowClose", function() {
                        b._trigger("afterChatWindowClose"), b._trigger("onChatWindowClose")
                    }), b.element.on("onContactCenterClosed", function() {
                        b._trigger("onContactCenterClosed")
                    }), b.element.on("onChatWindowMinimize", function() {
                        b._trigger("onChatWindowMinimize")
                    }), b.element.on("onChatWindowShow", function() {
                        b._trigger("onChatWindowShow")
                    }), b.element.on("onChatInitialized", function() {
                        b._trigger("onChatInitialized")
                    }), b.element.on("onChatCommand", function(a, c, d) {
                        b._trigger("onChatCommand", a, [c, d])
                    }), p.helpers.init(c), p.browserInfo.init(navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera), p.chatCookies.init(c.customerKey), void p.chatInitialiser.init(b.element, c)) : void alert("customerKey required")
                },
                reloadOptions: function(a) {
                    p.chatInitialiser.setOptions(a)
                },
                startChat: function() {
                    p.chatInitialiser.startChat()
                }
            })
        }(a),
        function() {
            function a() {
                var a, b;
                for (a = 0; a < arguments.length; ++a)
                    if (b = arguments[a], void 0 !== b && null !== b) return b;
                throw "There are no default value"
            }

            function b(b) {
                d.NickName = a(b.nickName, d.NickName, ""), d.ChatId = a(b.chatId, d.ChatId, ""), d.ChatIssue = a(b.chatIssue, d.ChatIssue, ""), d.CustomerKey = a(b.customerKey, d.CustomerKey, ""), d.QueueKey = a(b.queueKey, d.QueueKey, ""), d.LanguageCode = a(b.languageCode, d.LanguageCode, ""), d.UICulture = "", d.MsgWelcomeHeader = a(b.msgWelcomeHeader, d.MsgWelcomeHeader, ""), d.MsgWelcome = a(b.msgWelcome, d.MsgWelcome, ""), d.MsgWelcomeFull = a(b.msgWelcomeFull, d.MsgWelcomeFull, ""), d.MsgWelcomeEmpty = a(b.msgWelcomeEmpty, d.MsgWelcomeEmpty, ""), d.MsgWelcomePause = a(b.msgWelcomePause, d.MsgWelcomePause, ""), d.MsgReject = a(b.msgReject, d.MsgReject, ""), d.AltQueueKey = a(b.altQueueKey, d.AltQueueKey, ""), d.CustomerCss = a(b.customEmailCss, d.CustomerCss, ""), d.MsgGoodbyeHeader = a(b.msgGoodbyeHeader, d.MsgGoodbyeHeader, ""), d.MsgGoodbye = a(b.msgGoodbye, d.MsgGoodbye, ""), d.EmailSubject = a(b.emailSubject, d.EmailSubject, ""), d.ShowAgentLoggedOnInIntro = a(b.showAgentLoggedOnInIntro, d.ShowAgentLoggedOnInIntro, !1), d.ShowAgentActiveInIntro = a(b.showAgentActiveInIntro, d.ShowAgentActiveInIntro, !1), d.ShowNumberInQueueInIntro = a(b.showNumberInQueueInIntro, d.ShowNumberInQueueInIntro, !1), d.FromEmailDisplayName = a(b.fromEmailDisplayName, d.FromEmailDisplayName, ""), d.ShowIpAddressInIntro = a(b.showIpAddressInIntro, d.ShowIpAddressInIntro, !1), d.Variables = a(b.variables, d.Variables, {}), d.ShowVariablesInIntro = a(b.showVariablesInIntro, d.ShowVariablesInIntro, !1), d.RequestId = a(b.requestId, d.RequestId, 0), d.IqSessionId = a(b.iqSessionId, d.IqSessionId, ""), d.EnteredQueueKey = a(d.EnteredQueueKey, ""), d.CaptchaResult = a(b.captchaResult, d.CaptchaResult, ""), d.CaptchaTicket = a(b.captchaTicket, d.CaptchaTicket, ""), d.CaptchaMessage = a(b.captchaMessage, d.CaptchaMessage, ""), d.ShowCaptcha = a(d.ShowCaptcha, !1), d.EncrNickName = "", d.EncrChatId = "", d.EnableSurvey = a(b.enableSurvey, d.EnableSurvey, !0), d.MsgSurveyQuestion = a(b.msgSurveyQuestion, d.MsgSurveyQuestion, ""), d.MsgSurveyHeader = a(b.msgSurveyHeader, d.MsgSurveyHeader, ""), d.IsMobile = a(b.isMobile, p.browserInfo.isMobile(), !1), d.ShowIsMobileInIntro = a(b.showIsMobileInIntro, d.ShowIsMobileInIntro, !0), d.SendEmailAutomatically = a(b.sendEmailAutomatically, d.SendEmailAutomatically, !1), d.AuthCode = a(b.itcAuthCode, d.AuthCode, ""), d.AuthMapping = a(b.authMapping, d.AuthMapping, {})
            }

            function c(a) {
                var b, c;
                for (b in a) switch (c = a[b], b) {
                    case "EnableSurvey":
                        d[b] = d[b] && c;
                        break;
                    default:
                        d[b] = c
                }
            }
            var d;
            p.chatModel = {
                create: function(a) {
                    return d = {}, b(a || {}), d
                },
                update: function(a) {
                    b(a || {})
                },
                mergeWithServer: c
            }
        }(),
        function() {
            function a(a) {
                var b = c.observable(!0),
                    e = c.observable(0),
                    f = 4;
                d = {}, p.extend(d, {
                    activeUsers: c.observableArray([]),
                    afterExit: c.observable(!1),
                    agentTypingStatus: {
                        timeStamp: c.observable(null),
                        nickName: c.observable(""),
                        isTyping: c.pureComputed(function() {
                            return null !== d.agentTypingStatus.timeStamp()
                        })
                    },
                    beenInConference: c.observable(!1),
                    browserSupported: c.observable(!1),
                    captcha: c.observable(!1),
                    captchaResult: c.observable(""),
                    captchaMessage: c.observable(""),
                    chatMessages: c.observableArray([]),
                    clientTypingStatus: {
                        timeStamp: c.observable(null)
                    },
                    enteredCaptchaResult: c.observable(""),
                    enteredFormName: c.observable(""),
                    enteredChatId: c.observable(""),
                    enteredFormIssue: c.observable(""),
                    errorMessage: c.observable(""),
                    errorMessageHeader: c.observable(""),
                    fontSize: c.computed({
                        read: function() {
                            return e()
                        },
                        write: function(a) {
                            e(a > f ? 0 : a)
                        }
                    }),
                    fontSizeIsMax: c.computed(function() {
                        return e() === f
                    }),
                    firstStart: c.observable(!1),
                    inputFields: c.observableArray([]),
                    infoMessageStr: c.observable(""),
                    inActiveChat: c.observable(!1),
                    lastMessageId: c.observable(0),
                    messageText: c.observable(""),
                    minimized: c.observable(!0),
                    mute: c.computed({
                        read: function() {
                            return b()
                        },
                        write: function(a) {
                            p.browserInfo.isAudioSupported() && b(a)
                        }
                    }),
                    msgGoodbyeHeader: c.observable(""),
                    msgGoodbye: c.observable(""),
                    msgClosed: c.observable(""),
                    needPollForQueuePosition: c.observable(!0),
                    emailMessage: c.observable(""),
                    requestDisconnected: c.observable(!1),
                    showSurvey: c.observable(!1),
                    showForm: c.observable(!1),
                    showError: c.observable(!1),
                    showLoading: c.observable(!0),
                    showIntro: c.observable(!1),
                    showFlashingInfoMessage: c.observable(!1),
                    toEmailAddress: c.observable(""),
                    sendSurveyMessage: c.observable(""),
                    surveyComment: c.observable(""),
                    surveyResult: c.observable(-1),
                    msgSurveyHeader: c.observable(""),
                    msgSurveyQuestion: c.observable(""),
                    optionResult: c.observable(""),
                    notification: c.observable(),
                    msgFormHeader: c.observable(""),
                    msgFormIngress: c.observable("")
                }), p.extend(d, {
                    sessionState: c.computed(function() {
                        return d.requestDisconnected() ? "DISCONNECTED" : 1 === d.activeUsers().length ? "CONNECTED" : d.activeUsers().length > 1 ? (d.beenInConference(!0), "CONFERENCE") : d.needPollForQueuePosition() ? "IN QUEUE" : d.inChatDialog() ? "ALONE" : "EXIT"
                    }),
                    inChatDialog: c.computed(function() {
                        return !(d.afterExit() || d.captcha() || d.showForm() || d.showError() || d.showLoading() || d.showSurvey())
                    }),
                    showStarter: c.computed(function() {
                        return (a.showStarter || a.showStarterWhenMinimized && d.inActiveChat()) && d.minimized() && d.browserSupported()
                    }),
                    infoState: c.pureComputed(function() {
                        var a = d.sessionState(),
                            b = {
                                CONNECTED: "intelecomchat_infostatelamp_connected",
                                CONFERENCE: "intelecomchat_infostatelamp_connected",
                                "IN QUEUE": "intelecomchat_infostatelamp_queue"
                            },
                            c = b[a] || "intelecomchat_infostatelamp_disconnected";
                        return '<span class="intelecomchat__infostatelamp ' + c + '"></span>' + p.langChat.l(a)
                    }),
                    infoMessage: c.pureComputed(function() {
                        var b, c, e, f = d.sessionState();
                        return d.showFlashingInfoMessage() ? b = d.infoMessageStr() : "CONNECTED" == f ? (c = d.activeUsers()[0].NickName, b = p.langChat.l("msg_chatting_with") + " " + c, b.length > a.maxinfoMessageLength && (b = c)) : "CONFERENCE" == f ? (c = d.activeUsers()[0].NickName, e = d.activeUsers().length - 1, b = p.langChat.l("msg_chatting_with") + " " + c + " + " + e, b.length > a.maxinfoMessageLength && (b = c)) : b = "ALONE" == f || "DISCONNECTED" == f ? p.langChat.l("msg_chat_has_ended") : d.infoMessageStr(), b.length > a.maxinfoMessageLength && (b = g.string.truncate(b, a.maxinfoMessageLength - 3)), b
                    }),
                    disableEditor: c.pureComputed(function() {
                        return "ALONE" == d.sessionState() || "DISCONNECTED" == d.sessionState()
                    }),
                    captchaPlaceholder: c.pureComputed(function() {
                        return p.langChat.l("placeholder_captcha") + ": " + d.captchaResult()
                    })
                })
            }

            function b(a) {
                return {
                    inputLabel: c.observable(a.inputLabel || ""),
                    inputVariableName: c.observable(a.inputVariableName || "unknownInputName"),
                    inputPlaceholder: c.observable(a.inputPlaceholder || ""),
                    inputType: c.observable(a.inputType || "text"),
                    inputMaxlength: c.observable(a.inputMaxlength || ""),
                    inputRequired: c.observable(a.inputRequired || !1),
                    inputValue: c.observable(a.inputValue || ""),
                    inputItems: c.observableArray(a.inputItems)
                }
            }
            var d;
            p.chatViewModel = {
                create: function(b) {
                    return a(b), d
                },
                addInputField: function(a) {
                    var c = b(a);
                    d.inputFields.push(c)
                }
            }
        }(),
        function() {
            function a(a, b) {
                var c = [],
                    d = j(j.parseXML(b));
                return d.find("text").each(function(b, d) {
                    c.push({
                        text: d.textContent,
                        optionName: "intelecomoption" + a
                    })
                }), c
            }
            var b = {
                key: function(a) {
                    return c.utils.unwrapObservable(a.data.id)
                },
                Message: {
                    update: function(a) {
                        return a.data.replace(/src="(\/ckeditor\/plugins\/smiley)/gim, 'src="' + g.string.rtrim(p.chatOptions.chatURL, "/") + "$1")
                    }
                }
            };
            p.chatMessage = {
                create: function(e) {
                    var f, h = {
                            userId: c.observable(0),
                            messageQueuePosition: c.observable(!1)
                        },
                        k = e.Message;
                    switch (c.mapping.fromJS(e, b, h), h.sentTimeFormatted = c.computed(function() {
                        return d(h.Sent()).format("HH:mm")
                    }), h.systemMessage = c.computed({
                        deferEvaluation: !0,
                        read: function() {
                            return 1 !== e.Type || "TYPE_MSG" === k ? k : g.string.startsWith(k, "USER_INVITED") ? k.substr(k.indexOf("ExtraInfo:") + 11) + " " + p.langChat.l("USER_INVITED") : g.string.startsWith(k, "REQUEST_PUTINQUEUE") ? p.langChat.l("REQUEST_PUTINQUEUE") + " " + k.substr(k.indexOf("QueueDescript:") + 15) : g.string.startsWith(k, "REQUEST_QUEUEPOSITION:") ? (h.messageQueuePosition(!0), p.langChat.l("msg_number_in_queue_start") + " " + k.substr(k.indexOf("REQUEST_QUEUEPOSITION:") + 22) + " " + p.langChat.l("msg_number_in_queue_end")) : h.NickName() + " " + (p.langChat.l(k) != k ? p.langChat.l(k) : k)
                        }
                    }), e.Type) {
                        case 6:
                            try {
                                var l = j.parseJSON(k);
                                h.commandId = l.commandId ? l.commandId : "unknown", h.command = l.command ? l.command : "unknown", h.buttonText = l.buttonText ? l.buttonText : h.command, h.headerText = l.headerText ? l.headerText : "", h.stateText = c.observable(l.stateText ? l.stateText : ""), h.data = l.data, h.showCommand = void 0 !== l.showCommand ? l.showCommand : !0, h.showButton = c.observable(void 0 !== l.showButton ? l.showButton : !0)
                            } catch (m) {
                                i("error when parsing command message: " + m.message), h.command = "error", h.buttonText = "error", h.data = null
                            }
                            break;
                        case 5:
                            f = k.match(/(\d+)\|(.*)/), h.offerResultMsgId = f[1], h.offerResultValue = f[2];
                            break;
                        case 4:
                            h.offerOptions = a(h.Id(), k), h.offerResult = c.observable(""), h.selectedRadioValue = c.observable(), h.offerResult.subscribe(function(a) {
                                h.selectedRadioValue(a)
                            })
                    }
                    return h
                }
            }
        }(),
        function() {
            p.langChat = p.extend({
                languageCode: "",
                create: function(a) {
                    return this.languageCode = a, p.extend(p.create(this), {})
                },
                l: function(a) {
                    var b = this,
                        c = "";
                    switch (b.languageCode) {
                        case "NO":
                            c = b.lang_no[a];
                            break;
                        case "SE":
                            c = b.lang_se[a];
                            break;
                        case "DK":
                            c = b.lang_dk[a];
                            break;
                        case "HU":
                            c = b.lang_hu[a];
                            break;
                        case "BG":
                            c = b.lang_bg[a];
                            break;
                        case "FI":
                            c = b.lang_fi[a];
                            break;
                        default:
                            c = b.lang_default[a]
                    }
                    return c
                },
                lang_no: {
                    btn_send_email: "send",
                    err_chat_create_email_body: "En feil oppstod da vi skulle lage eposten din. ",
                    err_chat_send_email: "En feil oppstod da vi skulle sende eposten din.",
                    err_chat_send_msg: "En feil oppstod da vi prøvde å sende meldingen din. Den kom dessverre ikke frem.",
                    err_chat_service_not_available: "Beklager, tjenesten er ikke tilgjengelig.",
                    err_enter_email_address: "Skriv inn din epostadresse.",
                    err_not_valid_email_address: "Epostadressen er ikke gyldig.",
                    h_after_exit: "Chatten er avsluttet",
                    h_send_email: "Trenger du en kopi?",
                    lbl_after_exit: "Takk for at du kontaktet oss og velkommen tilbake.",
                    lbl_send_email: "Vi sender deg gjerne chat-dialogen på e-post.",
                    lbl_send_email_adr: "Din e-post",
                    msg_chat_reject: "Beklager vi har for stor pågang. Vennligst prøv igjen siden.",
                    USER_CONNECTED: "er tilkoblet",
                    USER_DISCONNECTED: "har lagt på",
                    USER_INVITED: "er invitert med",
                    REQUEST_PUTINQUEUE: "Henvendelsen er satt over til køen",
                    msg_is_typing: "skriver melding",
                    msg_number_in_queue_end: "i køen",
                    msg_number_in_queue_start: "Du er nummer",
                    msg_want_to_exit: "Er du sikker på at du vil avslutte?",
                    btn_enter_captcha: "OK",
                    h_captcha: "Validering",
                    lbl_captcha: "Vennligst skriv inn koden: ",
                    msg_captcha_entered_is_empty: "Feltet kan ikke være tomt.",
                    msg_captcha_entered_is_wrong: "Beklager, koden var feil.",
                    REQUEST_DISCONNECTED: "har lagt på",
                    REQUESTER_INACTIVE: "har mistet forbindelsen",
                    lbl_starter_title: "Chat",
                    "IN QUEUE": "I KØ",
                    CONNECTED: "TILKOBLET",
                    CONFERENCE: "KONFERANSE",
                    ALONE: "FRAKOBLET",
                    DISCONNECTED: "FRAKOBLET",
                    msg_chatting_with: "Du chatter med",
                    msg_chat_has_ended: "Chatten er avsluttet",
                    placeholder_message: "Skriv din tekst her",
                    placeholder_captcha: "Kode",
                    placeholder_yourName: "Ditt navn",
                    placeholder_yourEmail: "Din e-post",
                    btn_start_chat: "Start chat",
                    lbl_enterName: "Ditt navn",
                    lbl_enterEmail: "Din e-post",
                    msg_browserNotSupported: "Din nettleser støtter ikke denne chatten. Vennligst oppgrader din nettleser.",
                    h_closed: "Stengt",
                    lbl_closed: "Vi beklager, men tjenesten er nå stengt.",
                    msg_email_sent_to: "E-posten ble sendt til",
                    err_chat_no_messages_in_email_body: "Beklager, men det tok for lang tid. Innholdet er ikke lenger tilgjengelig.",
                    lbl_survey_question: "Hjelp oss med å bli bedre ved å vurdere denne chatten.",
                    h_survey_header: "En ting til ...",
                    placeholder_survey_comment: "Legg til en kommentar",
                    btn_send_survey: "send",
                    err_enter_survey: "Du må vurdere chatten før du sender",
                    err_chat_send_survey: "Det oppstod en feil da vi skulle sende din tilbakemelding.",
                    FailedToSendSurvey: "Det oppstod en feil da vi skulle sende din tilbakemelding.",
                    SurveyDisabled: "Kundeundersøkelsen er ikke aktivert.",
                    intelecom_url: "https://www.puzzel.no",
                    h_option: "Vennligst velg en:",
                    btn_confirm_option: "Bekreft",
                    lbl_confirm_option: "Takk!",
                    lbl_cancel_option: "Kanseller",
                    lbl_selectQueue: "Velg kø",
                    placeholder_selectQueue: "Velg...",
                    lbl_selectFormIssue: "Hva gjelder det?",
                    placeholder_selectFormIssue: "Velg...",
                    new_message_from_agent: "Ny chatmelding",
                    msg_email_sending: "Sender e-post...",
                    err_queue_needs_authentication: "Denne chatten krever at din identitet er autentisert gjennom en tredjeparts applikasjon. Dessverre ser det ikke ut som at du er autentisert.",
                    err_queue_wrong_authentication: "Denne chatten krever at din identitet er autentisert gjennom en tredjeparts applikasjon. Dessverre ser det ikke ut som at du er korrekt autentisert.",
                    err_failed_authentication: "Denne chatten krever at din identitet er autentisert gjennom en tredjeparts applikasjon. Dessverre klarte vi ikke å autentisere deg."
                },
                lang_se: {
                    btn_send_email: "Skicka",
                    err_chat_create_email_body: "Ett fel uppstod när vi skulle skapa ditt e-post",
                    err_chat_send_email: "Ett fel uppstod när vi skulle sända ditt e-post",
                    err_chat_send_msg: "Ett fel uppstod när vi skulle sända ditt meddelande.",
                    err_chat_service_not_available: "Beklagar, tjänsten är inte tillgänglig",
                    err_enter_email_address: "Skriv in din emailadress",
                    err_not_valid_email_address: "Ogiltig Emailadress",
                    h_after_exit: "Chatten är avslutad",
                    h_send_email: "Önskar du en kopia?",
                    lbl_after_exit: "Tack för att du kontaktat oss och välkommen tillbaka.",
                    lbl_send_email: "Vi sänder dig gärna chattkonversationen per e-post",
                    lbl_send_email_adr: "Din e-post",
                    msg_chat_reject: "Vi har tyvärr för stor belastning. Var vänlig försök igen senare.",
                    USER_CONNECTED: "är ansluten",
                    USER_DISCONNECTED: "har lagt på",
                    USER_INVITED: "är inviterad",
                    REQUEST_PUTINQUEUE: "Din förfrågan är placerad i kö",
                    msg_is_typing: "skriver meddelande",
                    msg_number_in_queue_end: "i kö",
                    msg_number_in_queue_start: "Du är nummer",
                    msg_want_to_exit: "Är du säker på att du vill avsluta?",
                    btn_enter_captcha: "OK",
                    h_captcha: "Validering",
                    lbl_captcha: "Ange kod:",
                    msg_captcha_entered_is_empty: "Fältet får inte vara tomt.",
                    msg_captcha_entered_is_wrong: "Tyvärr, koden var felaktig.",
                    REQUEST_DISCONNECTED: "har lagt på",
                    REQUESTER_INACTIVE: "har tappat förbindelsen",
                    lbl_starter_title: "Chat",
                    "IN QUEUE": "I KÖ",
                    CONNECTED: "ANSLUTEN",
                    CONFERENCE: "KONFERENS",
                    ALONE: "FRÅNKOPPLAD",
                    DISCONNECTED: "FRÅNKOPPLAD",
                    msg_chatting_with: "Du chattar med",
                    msg_chat_has_ended: "Chatten är avslutad",
                    placeholder_message: "Skriv din text här",
                    placeholder_captcha: "Kod",
                    placeholder_yourName: "Ditt namn",
                    placeholder_yourEmail: "Din e-post",
                    btn_start_chat: "Starta chatt",
                    lbl_enterName: "Ditt namn",
                    lbl_enterEmail: "Din e-post",
                    msg_browserNotSupported: "Din webbläsare stödjer inte denna chatt. Vännligen uppgradera din webbläsare.",
                    h_closed: "Stängd",
                    lbl_closed: "Tyvärr, men tjänsten är nu stängd",
                    msg_email_sent_to: "E-post är skickat till",
                    err_chat_no_messages_in_email_body: "Tyvärr, men det har tagit för lång tid. Innehållet är inte längre tillgängligt.",
                    lbl_survey_question: "Hjälp oss gärna att bli bättre genom att bedöma denna chatt.",
                    h_survey_header: "En sak till ...",
                    placeholder_survey_comment: "Lägg till en kommentar",
                    btn_send_survey: "Skicka",
                    err_enter_survey: "Vänligen värdera chatten innan du skickar",
                    err_chat_send_survey: "Ett fel uppstod då vi skulle skicka din feedback.",
                    FailedToSendSurvey: "Ett fel uppstod då vi skulle skicka din feedback.",
                    SurveyDisabled: "Kundundersökningen är inte aktiverad.",
                    intelecom_url: "https://www.puzzel.se",
                    h_option: "Vänligen välj en:",
                    btn_confirm_option: "Bekräfta",
                    lbl_confirm_option: "Tack!",
                    lbl_cancel_option: "Avbryt",
                    lbl_selectQueue: "Välj kö",
                    placeholder_selectQueue: "Välj...",
                    lbl_selectFormIssue: "Vad är din fråga om?",
                    placeholder_selectFormIssue: "Välj...",
                    new_message_from_agent: "Nytt chattmeddelande",
                    msg_email_sending: "Skickar e-post...",
                    err_queue_needs_authentication: "Denna chat kräver att din identitet autentiseras via en tredjepartsapplikation. Dessvärre verkar du inte ha blivit autentiserad. ",
                    err_queue_wrong_authentication: "Denna chat kräver att din identitet autentiseras via en tredjepartsapplikation. Dessvärre verkar du inte blivit korrekt autentiserad.",
                    err_failed_authentication: "Denna chat kräver att din identitet autentiseras via en tredjepartsapplikation. Dessvärre kunde vi inte autentisera dig."
                },
                lang_dk: {
                    btn_send_email: "send",
                    err_chat_create_email_body: "Der opstod fejl i f.m. oprettelse af e-mail",
                    err_chat_send_email: "Der opstod fejl i f.m. afsendelse af e-mail",
                    err_chat_send_msg: "Der opstod fejl i f.m. afsendelse af meddelelse.",
                    err_chat_service_not_available: "Desværre, tjenesten er ikke tilgængelig",
                    err_enter_email_address: "Skriv din e-mail adresse",
                    err_not_valid_email_address: "e-mail adressen er ugyldig",
                    h_after_exit: "Chatten er afsluttet",
                    h_send_email: "Har du brug for en kopi?",
                    lbl_after_exit: "Tak for din henvendelse og velkommen tilbage en anden gang.",
                    lbl_send_email: "Vi sender gerne chatten på e-mail til dig.",
                    lbl_send_email_adr: "Din e-mail",
                    msg_chat_reject: "Vi er optaget i øjeblikket. Prøv venligst igen lidt senere",
                    USER_CONNECTED: "er forbundet",
                    USER_DISCONNECTED: "har afsluttet",
                    USER_INVITED: "er inviteret",
                    REQUEST_PUTINQUEUE: "Henvendelsen venter i kø",
                    msg_is_typing: "skriver meddelelse",
                    msg_number_in_queue_end: "i køen",
                    msg_number_in_queue_start: "Du venter som nummer",
                    msg_want_to_exit: "Er du sikker på, du vil afslutte?",
                    btn_enter_captcha: "OK",
                    h_captcha: "Validering",
                    lbl_captcha: "Skriv venligst kode: ",
                    msg_captcha_entered_is_empty: "Feltet kan ikke være tomt.",
                    msg_captcha_entered_is_wrong: "Beklager, koden var ikke korrekt.",
                    REQUEST_DISCONNECTED: "har afsluttet",
                    REQUESTER_INACTIVE: "har mistet forbindelsen",
                    lbl_starter_title: "Chat",
                    "IN QUEUE": "I KØ",
                    CONNECTED: "FORBUNDET",
                    CONFERENCE: "KONFERENCE",
                    ALONE: "AFSLUTTET",
                    DISCONNECTED: "AFSLUTTET",
                    msg_chatting_with: "Du chatter med",
                    msg_chat_has_ended: "Chatten er afsluttet",
                    placeholder_message: "Skriv din meddelelse her",
                    placeholder_captcha: "Kode",
                    placeholder_yourName: "Dit navn",
                    placeholder_yourEmail: "Din e-mail",
                    btn_start_chat: "Chat",
                    lbl_enterName: "Dit navn",
                    lbl_enterEmail: "Din e-mail",
                    msg_browserNotSupported: "Din browser understøtter ikke denne chat. Opgrader venligst din browser.",
                    h_closed: "Lukket",
                    lbl_closed: "Vi beklager, men tjenesten er nu lukket",
                    msg_email_sent_to: "E-mailen blev sendt til",
                    err_chat_no_messages_in_email_body: "Beklager, men det tog for lang tid. Indholdet er ikke længere tilgængeligt.",
                    lbl_survey_question: "Hjælp os gerne med at blive bedre ved at bedømme denne chat.",
                    h_survey_header: "Lige én ting til ...",
                    placeholder_survey_comment: "Tilføj en kommentar",
                    btn_send_survey: "send",
                    err_enter_survey: "Udfyld venligst bedømmelsen, inden du sender",
                    err_chat_send_survey: "En fejl opstod ved afsendelse af din bedømmelse.",
                    FailedToSendSurvey: "En fejl opstod ved afsendelse af din bedømmelse.",
                    SurveyDisabled: "Tilfredshedsmålingen er ikke aktiv.",
                    intelecom_url: "https://www.puzzel.dk",
                    h_option: "Vælg venligst en:",
                    btn_confirm_option: "Bekræft",
                    lbl_confirm_option: "Tak!",
                    lbl_cancel_option: "Annuller",
                    lbl_selectQueue: "Vælg kø",
                    placeholder_selectQueue: "Vælg...",
                    lbl_selectFormIssue: "Hvad drejer din henvendelse sig om?",
                    placeholder_selectFormIssue: "Vælg...",
                    new_message_from_agent: "Ny chathenvendelse",
                    msg_email_sending: "Sender E-mail...",
                    err_queue_needs_authentication: "Denne chat kræver, at din identitet er autenticeret via tredjepartsapplikation. Det ser desvære ud til, at du ikke er autenticeret.",
                    err_queue_wrong_authentication: "Denne chat kræver, at din identitet er autenticeret via tredjepartsapplikation. Det ser desvære ud til, at du ikke er korrekt autenticeret.",
                    err_failed_authentication: "Denne chat kræver, at din identitet er autenticeret via tredjepartsapplikation. Vi kunne desværre ikke autenticere dig."
                },
                lang_hu: {
                    btn_send_email: "küldés",
                    err_chat_create_email_body: "Az email létrehozása közben hiba történt",
                    err_chat_send_email: "az email elüldése közben hiba történt: ",
                    err_chat_send_msg: "Az üzenet elküldése közben hiba történt. Sajnálom az üzenet elveszett.",
                    err_chat_service_not_available: "Sajnálom, a szolgáltatás nem elérhető",
                    err_enter_email_address: "Kérlek írd be az email címed",
                    err_not_valid_email_address: "Az email cím nem érvényes",
                    h_after_exit: "A chat beszélgetésed véget ért",
                    h_send_email: "Kérsz másolatot?",
                    lbl_after_exit: "Köszönjük, hogy megkerestél minket, várunk máskor is.",
                    lbl_send_email: "Chat beszélgetés elküldése az emailedre",
                    lbl_send_email_adr: "A te emailed",
                    msg_chat_reject: "Sajnálom mindenki foglalt. Próbálkozz később.",
                    USER_CONNECTED: "kapcsolatban",
                    USER_DISCONNECTED: "szétkapcsolt",
                    USER_INVITED: "meghívva",
                    REQUEST_PUTINQUEUE: "A megkeresés sorba lett állítva",
                    msg_is_typing: "gépel egy üzenetet",
                    msg_number_in_queue_end: "a sorban",
                    msg_number_in_queue_start: "A te pozíciód a",
                    msg_want_to_exit: "Biztos, hogy be akarod fejezni ezt a Chat-et?",
                    btn_enter_captcha: "OK",
                    h_captcha: "Érvényesítés",
                    lbl_captcha: "Kérlek add meg ezt a kódot: ",
                    msg_captcha_entered_is_empty: "A mező nem lehet üres.",
                    msg_captcha_entered_is_wrong: "Sajnálom a megadott kód nem jó.",
                    REQUEST_DISCONNECTED: "szétkapcsolt",
                    REQUESTER_INACTIVE: "elvesztette a kapcsolatot",
                    lbl_starter_title: "Chat",
                    "IN QUEUE": "SORBAN",
                    CONNECTED: "KAPCSOLT",
                    CONFERENCE: "KONFERENCIA",
                    ALONE: "SZÉTKAPCSOLT",
                    DISCONNECTED: "SZÉTKAPCSOLT",
                    msg_chatting_with: "Chatpartnered",
                    msg_chat_has_ended: "A chat véget ért",
                    placeholder_message: "Ide írd az üzeneted",
                    placeholder_captcha: "Ide írd a kódot",
                    placeholder_yourName: "A Neved",
                    placeholder_yourEmail: "Email címed",
                    btn_start_chat: "Chat kezdése",
                    lbl_enterName: "Add meg a neved",
                    lbl_enterEmail: "Add meg az email címed",
                    msg_browserNotSupported: "A keresőd nem támogatja ezt a chat-et. Kérlek upgradelj.",
                    h_closed: "A Chat zárva",
                    lbl_closed: "sajnáljuk, de szolgáltatásunk jelenleg zárva van",
                    msg_email_sent_to: "Az email sikeresen elküldésre került",
                    err_chat_no_messages_in_email_body: "Sajnáljuk de ez túl sokáig tartott. A tartalom már nem elérhető.",
                    lbl_survey_question: "Kérlük segítse a szolgáltatás fejlesztést azzal, hogy értékeli ezt a chat-et.",
                    h_survey_header: "Még egy dolog ...",
                    placeholder_survey_comment: "Megjegyzés beírása",
                    btn_send_survey: "küldés",
                    err_chat_send_survey: "A visszacsatolás küldése során hiba történt.",
                    err_enter_survey: "Küldés előtt kérlek értéked a Chat-et",
                    FailedToSendSurvey: "A visszacsatolás küldése során hiba történt.",
                    SurveyDisabled: "A felmérés nem engedélyezett.",
                    intelecom_url: "https://www.puzzel.com",
                    h_option: "Kérlek válassz egyet:",
                    btn_confirm_option: "Megerősítés",
                    lbl_confirm_option: "Köszönöm!",
                    lbl_cancel_option: "Törlés",
                    lbl_selectQueue: "Válassz Sort",
                    placeholder_selectQueue: "Válassz...",
                    lbl_selectFormIssue: "Mi a keresett szó?",
                    placeholder_selectFormIssue: "Válassz...",
                    new_message_from_agent: "Új Chat üzenet",
                    msg_email_sending: "Email küldése...",
                    err_queue_needs_authentication: "Ez a táblázat megköveteli, hogy be legyél jelentkezve egy harmadik fél általi applikáción keresztül. Sajnos úgy tűnik, hogy nem vagy bejelentkezve.",
                    err_queue_wrong_authentication: "Ez a táblázat megköveteli, hogy be legyél jelentkezve egy harmadik fél általi applikáción keresztül. Sajnos úgy tűnik, hogy nem megfelelően vagy bejelentkezve.",
                    err_failed_authentication: "Ez a táblázat megköveteli, hogy be legyél jelentkezve egy harmadik fél általi applikáción keresztül. Sajnos nem tudtunk azonosítani téged."
                },
                lang_bg: {
                    btn_send_email: "изпращане",
                    err_chat_create_email_body: "Възникна грешка при опит за създаване на Вашия имейл",
                    err_chat_send_email: "Възникна грешка при опит за изпращане на имейл: ",
                    err_chat_send_msg: "Възникна грешка при опит за изпращане на съобщението Ви. Съжаляваме, но съобщението е загубено.",
                    err_chat_service_not_available: "Съжаляваме, но услугата не е налична",
                    err_enter_email_address: "Моля, въведете имейл адреса си",
                    err_not_valid_email_address: "Имейл адресът не е валиден",
                    h_after_exit: "Вашата чат сесия завърши",
                    h_send_email: "Трябва ли Ви копие?",
                    lbl_after_exit: "Благодарим Ви, че се свързахте с нас и Ви очакваме отново.",
                    lbl_send_email: "Изпращане на разговора в чата на имейл адреса Ви",
                    lbl_send_email_adr: "Вашият имейл",
                    msg_chat_reject: "За съжаление сме много заети. Моля, опитайте отново по-късно.",
                    USER_CONNECTED: "е свързан/а",
                    USER_DISCONNECTED: "не е свързан/а",
                    USER_INVITED: "е поканен",
                    REQUEST_PUTINQUEUE: "Заявката е поставена в опашката",
                    msg_is_typing: "въвежда съобщение",
                    msg_number_in_queue_end: "в опашка",
                    msg_number_in_queue_start: "Вие сте номер",
                    msg_want_to_exit: "Наистина ли искате да приключите този чат?",
                    btn_enter_captcha: "OK",
                    h_captcha: "Валидиране",
                    lbl_captcha: "Моля, въведете този код: ",
                    msg_captcha_entered_is_empty: "Полето не може да бъде празно.",
                    msg_captcha_entered_is_wrong: "Съжаляваме, но въведеният код е грешен.",
                    REQUEST_DISCONNECTED: "не е свързан/а",
                    REQUESTER_INACTIVE: "загуби връзка",
                    lbl_starter_title: "Чат",
                    "IN QUEUE": "В ОПАШКА",
                    CONNECTED: "СВЪРЗАН",
                    CONFERENCE: "В КОНФЕРЕНТНА ВРЪЗКА",
                    ALONE: "НЕ Е СВЪРЗАН",
                    DISCONNECTED: "НЕ Е СВЪРЗАН",
                    msg_chatting_with: "Извършва чат с",
                    msg_chat_has_ended: "Чатът приключи",
                    placeholder_message: "Въведете съобщението си тук",
                    placeholder_captcha: "Въведете кода тук",
                    placeholder_yourName: "Вашето име",
                    placeholder_yourEmail: "Вашият имейл",
                    btn_start_chat: "Започване на чата",
                    lbl_enterName: "Въведете името си",
                    lbl_enterEmail: "Въведете имейла си",
                    msg_browserNotSupported: "Браузърът Ви не поддържа този чат. Моля, надградете браузъра си.",
                    h_closed: "Чатът е затворен",
                    lbl_closed: "Извиняваме се, но отделът за чат в момента е затворен",
                    msg_email_sent_to: "Имейлът беше изпратен успешно на",
                    err_chat_no_messages_in_email_body: "Извиняваме се, но това отне твърде много време. Съдържанието вече не е налично.",
                    lbl_survey_question: "Моля, помогнете ни да подобрим обслужването, като дадете оценка на този чат.",
                    h_survey_header: "Още нещо, ...",
                    placeholder_survey_comment: "Въведете коментар",
                    btn_send_survey: "изпращане",
                    err_chat_send_survey: "Възникна грешка при изпращане на обратната връзка от Вас.",
                    err_enter_survey: "Моля, дайте оценка на чата преди да го изпратите",
                    FailedToSendSurvey: "Възникна грешка при изпращане на обратната връзка от Вас.",
                    SurveyDisabled: "Проучването е деактивирано.",
                    intelecom_url: "https://www.puzzel.com",
                    h_option: "Моля, изберете една:",
                    btn_confirm_option: "Потвърждаване",
                    lbl_confirm_option: "Благодарим ви!",
                    lbl_cancel_option: "Отказ",
                    lbl_selectQueue: "Изберете опашката",
                    placeholder_selectQueue: "Изберете...",
                    lbl_selectFormIssue: "От какво естество е Вашата заявка?",
                    placeholder_selectFormIssue: "Изберете...",
                    new_message_from_agent: "Ново чат съобщение",
                    msg_email_sending: "Изпращане на имейл...",
                    err_queue_needs_authentication: "Този чат изисква Вашата самоличност да бъде удостоверена посредством приложение от трета страна. За съжаление не изглежда да сте се удостоверили.",
                    err_queue_wrong_authentication: "Този чат изисква Вашата самоличност да бъде удостоверена посредством приложение от трета страна. За съжаление не изглежда да сте се удостоверили правилно.",
                    err_failed_authentication: "Този чат изисква Вашата самоличност да бъде удостоверена посредством приложение от трета страна. За съжаление нямахме възможността да Ви удостоверим."
                },
                lang_fi: {
                    btn_send_email: "Lähetä",
                    err_chat_create_email_body: "Virhe sähköpostin luomisen yhteydessä",
                    err_chat_send_email: "Virhe sähköpostin lähetyksen yhteydessä.",
                    err_chat_send_msg: "Tapahtui virhe, kun yritimme lähettää viestin. Se ei valitettavasti mennyt perille.",
                    err_chat_service_not_available: "Valitettavasti palvelu ei ole käytettävissä",
                    err_enter_email_address: "Kirjoita sähköpostiosoitteesi",
                    err_not_valid_email_address: "Sähköpostiosoiteessa on virhe",
                    h_after_exit: "Chat on päättynyt",
                    h_send_email: "Tarvitsetko kopion?",
                    lbl_after_exit: "Kiitos yhteydenotosta ja tervetuloa takaisin.",
                    lbl_send_email: "Voimme lähettää chat-keskustelun sinulle sähköpostissa",
                    lbl_send_email_adr: "Sinun sähköpostiosoitteesi",
                    msg_chat_reject: "Valitettavasti meillä on liian suuri kysyntä. Ole hyvä ja yritä uudelleen myöhemmin.",
                    USER_CONNECTED: "on yhteydessä",
                    USER_DISCONNECTED: "on lopettanut yhteyden",
                    USER_INVITED: "on kutsuttu mukaan",
                    REQUEST_PUTINQUEUE: "Tiedustelu on siirretty jonoon",
                    msg_is_typing: "Kirjoittaa viestiä",
                    msg_number_in_queue_end: "jonossa",
                    msg_number_in_queue_start: "Sinä olet numero",
                    msg_want_to_exit: "Oletko varma että haluat lopettaa chat-keskustelun?",
                    btn_enter_captcha: "OK",
                    h_captcha: "Vahvistaminen",
                    lbl_captcha: "Ole hyvä ja kirjoita tämä koodi: ",
                    msg_captcha_entered_is_empty: "Tämä kenttä ei voi olla tyhjä.",
                    msg_captcha_entered_is_wrong: "Valitettavasti, koodi on väärä.",
                    REQUEST_DISCONNECTED: "on lopettanut yhteyden",
                    REQUESTER_INACTIVE: "on kadottanut yhteyden",
                    lbl_starter_title: "Chat",
                    "IN QUEUE": "JONOSSA",
                    CONNECTED: "YHTEYDESSÄ",
                    CONFERENCE: "KONFERENSSI",
                    ALONE: "LOPETTANUT YHTEYDEN",
                    DISCONNECTED: "EI YHTEYTTÄ",
                    msg_chatting_with: "Sinun Chat-neuvojasi",
                    msg_chat_has_ended: "Chat-keskustelu on loppunut",
                    placeholder_message: "Kirjoita viestisi tähän",
                    placeholder_captcha: "Kirjoita koodi tähän",
                    placeholder_yourName: "Sinun nimesi",
                    placeholder_yourEmail: "Sinun sähköpostisi",
                    btn_start_chat: "Aloita chat-keskustelu",
                    lbl_enterName: "Sinun nimesi",
                    lbl_enterEmail: "Sinun sähköpostisi",
                    msg_browserNotSupported: "Selaimesi ei tue tätä chat-ohjelmaa. Ole hyvä ja päivitä selaimesi.",
                    h_closed: "Suljettu",
                    lbl_closed: "Pahoittelemme, mutta palvelu on nyt suljettu",
                    msg_email_sent_to: "Sähköposti on lähettety osoitteessen",
                    err_chat_no_messages_in_email_body: "Pahoittelemme, mutta tämä kesti liian kauan. Sisältö ei ole enää käytettävissä.",
                    lbl_survey_question: "Auta meitä parantamaan palveluamme arvioimalla tämä chat.",
                    h_survey_header: "Vielä yksi asia…",
                    placeholder_survey_comment: "Kirjoita kommentti",
                    btn_send_survey: "lähetä",
                    err_chat_send_survey: "Virhe palautteesi lähettämisen yhteydessä.",
                    err_enter_survey: "Ole hyvä ja arvioi chat ennen lähettämistä",
                    FailedToSendSurvey: "Virhe palautteesi lähettämisen yhteydessä.",
                    SurveyDisabled: "Asiakaskysely on poistettu käytöstä.",
                    intelecom_url: "https://www.puzzel.com",
                    h_option: "Ole hyvä ja valitse yksi:",
                    btn_confirm_option: "Varmista",
                    lbl_confirm_option: "Kiitos!",
                    lbl_cancel_option: "Peruuta",
                    lbl_selectQueue: "Valitse jono",
                    placeholder_selectQueue: "Valitse...",
                    lbl_selectFormIssue: "Mitä tiedustelusi koskee?",
                    placeholder_selectFormIssue: "Valitse...",
                    new_message_from_agent: "Uusi viesti asiakasneuvojalta",
                    msg_email_sending: "Lähettää sähkopostia...",
                    err_queue_needs_authentication: "Tämä chat edellyttää, että henkilöllisyytesi on varmistettu kolmannen osapuolen sovelluksen  kautta. Valitettavasti näyttää siltä, että sinua ei ole varmistettu.",
                    err_queue_wrong_authentication: "Tämä chat edellyttää, että henkilöllisyytesi on varmistettu kolmannen osapuolen sovelluksen  kautta. Valitettavasti näyttää siltä, että sinua ei ole varmistettu oikein.",
                    err_failed_authentication: "Tämä chat edellyttää, että henkilöllisyytesi on varmistettu kolmannen osapuolen sovelluksen  kautta. Valitettavasti emme pystyneet varmistamaan henkilöllisyyttäsi."
                },
                lang_default: {
                    btn_send_email: "send",
                    err_chat_create_email_body: "An error occured while trying to create your email",
                    err_chat_send_email: "An error occured while trying to send an email: ",
                    err_chat_send_msg: "An error occured while trying to send your message. Sorry, but the message was lost.",
                    err_chat_service_not_available: "Sorry, the service is not available",
                    err_enter_email_address: "Please enter your email address",
                    err_not_valid_email_address: "The email address is not valid",
                    h_after_exit: "Your chat session has ended",
                    h_send_email: "Need a copy?",
                    lbl_after_exit: "Thank you for contacting us and please come back soon.",
                    lbl_send_email: "Get the chat conversation sent to you by email",
                    lbl_send_email_adr: "Your e-mail",
                    msg_chat_reject: "Sorry, we are too busy. Please try again later.",
                    USER_CONNECTED: "is connected",
                    USER_DISCONNECTED: "is disconnected",
                    USER_INVITED: "is invited",
                    REQUEST_PUTINQUEUE: "The request is put in the queue",
                    msg_is_typing: "is typing a message",
                    msg_number_in_queue_end: "in queue",
                    msg_number_in_queue_start: "You are number",
                    msg_want_to_exit: "Are you sure you want to end this chat?",
                    btn_enter_captcha: "OK",
                    h_captcha: "Validation",
                    lbl_captcha: "Please enter this code: ",
                    msg_captcha_entered_is_empty: "The field can not be empty.",
                    msg_captcha_entered_is_wrong: "Sorry, the entered code is wrong.",
                    REQUEST_DISCONNECTED: "is disconnected",
                    REQUESTER_INACTIVE: "has lost connection",
                    lbl_starter_title: "Chat",
                    "IN QUEUE": "IN QUEUE",
                    CONNECTED: "CONNECTED",
                    CONFERENCE: "CONFERENCE",
                    ALONE: "DISCONNECTED",
                    DISCONNECTED: "DISCONNECTED",
                    msg_chatting_with: "Chatting with",
                    msg_chat_has_ended: "The chat has ended",
                    placeholder_message: "Type your message here",
                    placeholder_captcha: "Enter code here",
                    placeholder_yourName: "Your name",
                    placeholder_yourEmail: "Your e-mail",
                    btn_start_chat: "Start chat",
                    lbl_enterName: "Enter your name",
                    lbl_enterEmail: "Enter your e-mail",
                    msg_browserNotSupported: "Your browser doesn't support this chat. Please upgrade your browser.",
                    h_closed: "Chat is closed",
                    lbl_closed: "We apologize but our chat service is currently closed",
                    msg_email_sent_to: "The e-mail was successfully sent to",
                    err_chat_no_messages_in_email_body: "We apologize, but this took too long. The contend is no longer available.",
                    lbl_survey_question: "Please help us improve our service by rating this chat.",
                    h_survey_header: "One more thing ...",
                    placeholder_survey_comment: "Enter a comment",
                    btn_send_survey: "send",
                    err_chat_send_survey: "An error occured while sending your feedback.",
                    err_enter_survey: "Please rate the chat before sending",
                    FailedToSendSurvey: "An error occured while sending your feedback.",
                    SurveyDisabled: "The survey is disabled.",
                    intelecom_url: "https://www.puzzel.com",
                    h_option: "Please select one:",
                    btn_confirm_option: "confirm",
                    lbl_confirm_option: "Thank you!",
                    lbl_cancel_option: "Cancel",
                    lbl_selectQueue: "Select queue",
                    placeholder_selectQueue: "Select...",
                    lbl_selectFormIssue: "What's your query about?",
                    placeholder_selectFormIssue: "Select...",
                    new_message_from_agent: "New chat message",
                    msg_email_sending: "Sending e-mail...",
                    err_queue_needs_authentication: "This chat requires that your identity is authenticated through a third party application. Unfortunately you do not seem to be authenticated.",
                    err_queue_wrong_authentication: "This chat requires that your identity is authenticated through a third party application. Unfortunately you do not seem to be authenticated correctly.",
                    err_failed_authentication: "This chat requires that your identity is authenticated through a third party application. Unfortunately we were not able to authenticate you."
                }
            })
        }(),
        function() {
            p.chatTemplates = p.extend({
                chatFrame: g.template('<div class="intelecomchatdialog" data-bind="visible: !minimized()"><div class="intelecomchatheader"><div class="intelecomchatheader__settings"><i data-bind="command: fontSizeChatCmd, css: {\'intelecomchaticon-fontsize\': !fontSizeIsMax(), \'intelecomchaticon-fontsize-m\': fontSizeIsMax()}"></i><i data-bind="command: muteChatCmd, css: {\'intelecomchaticon-volume-up\': !mute(), \'intelecomchaticon-volume-off\': mute()}"></i></div><div class="intelecomchatheader__actions"><i class="intelecomchaticon-minus" data-bind="command: minimizeChatCmd"></i><i class="intelecomchaticon-cancel" data-bind="command: exitChatCmd"></i></div></div><div class="intelecomchatinner" ><div class="intelecomchat__info" data-bind="visible: inChatDialog()"><span class="intelecomchat__infostate" data-bind="html:infoState()"></span><span class="intelecomchat__infomessage" data-bind="html:infoMessage()"></span></div><div class="intelecomchatoverlay" data-bind="visible: captcha() || showForm() || afterExit() || showError() || showLoading()" ><div class="intelecomcaptcha" data-bind="visible: !showError()"><%= tmplCapthca %><%= tmplEnter %><%= tmplLeave %><%= tmplSurvey %></div><div class="intelecomcaptcha" data-bind="visible: showError()"><%= tmplError %></div><div class="intelecomcaptcha" data-bind="visible: showLoading() && !showForm() && !showError()"><%= tmplLoading %></div><div class="intelecomchatoverlay__footer"><span class="intelecomchatoverlay__footer_logo">Powered by <a href="<%= intelecomUrl %>" target="_blank"></a></span></div></div><%= tmplDialog %><%= tmplFooter %></div></div>'),
                error: g.template('<div class="intelecomcaptchaform"><form class="intelecomcaptcha__form" ><div class="intelecomcaptcha__title" data-bind="text:errorMessageHeader"></div><label class="intelecomcaptcha__label" data-bind="html: errorMessage"></label></form></div>'),
                loading: g.template('<div class="intelecomcaptchaform"><form class="intelecomcaptcha__form" ><div class="intelecomprogress" ></div></form></div>'),
                captcha: g.template('<div class="intelecomcaptchaform" data-bind="visible: captcha() && !showForm()"><div class="intelecomcaptcha__title"><%= chatCaptchaHeader %></div><form class="intelecomcaptcha__form" action="" data-bind="submit: enterCaptchaCmd" ><label class="intelecomcaptcha__label"><%= chatCaptchaLabel %> <span data-bind="text: captchaResult"></span></label><input class="intelecomchat__input  intelecomchat__input_margin_b" name="CaptchaResult" data-bind="value: enteredCaptchaResult, valueUpdate: \'afterkeydown\', hasFocus: captcha() && !showForm(), placeholder: captchaPlaceholder" type="number" /><button  type="submit" class="intelecomchat__button"><%= btnEnterCaptcha %></button></form></div>'),
                enter: g.template('<div class="intelecomenterform" data-bind="visible: showForm()"><div class="intelecomcaptcha__title" data-bind="html:msgFormHeader()"></div>    <div class="intelecomcaptcha__label" data-bind="html:msgFormIngress()"></div>    <form class="intelecomenterform__form" action="" data-bind="submit: enterFormCmd" >       <!-- ko foreach: inputFields  -->       <label data-bind="text: inputLabel"></label>          <!-- ko if: inputType() === "select" -->             <select class="intelecomchat__input intelecomchat__input_margin_b" data-bind="options:inputItems, optionsValue: \'value\', optionsText: \'text\', value: inputValue, optionsCaption: inputPlaceholder,attr: { name: inputVariableName}"></select>          <!--/ko-->          <!-- ko if: inputType() !== "select" -->             <input class="intelecomchat__input intelecomchat__input_margin_b" data-bind="value: inputValue, attr: { name: inputVariableName, placeholder: inputPlaceholder, type: inputType, maxlength: inputMaxlength }, valueUpdate: \'afterkeydown\'"   />          <!--/ko-->       <!-- /ko -->       <button  type="submit" class="intelecomchat__button start_chat"><%= startChat %></button>   </form></div>'),
                dialog: g.template('<div class="intelecomdialog"><div class="intelecomMsgPnlTable"><div class="intelecomMsgPnlRow"><div class="intelecomMsgPnlCell"><div class="intelecomMsgPnl" data-bind="visible: inChatDialog(), changechatsize: {}, scrollBarDown: { data: chatMessages() }">   <!-- Loop through all the messages -->   <!-- ko foreach: { data: chatMessages, afterAdd: animateMessage  } -->   <!-- Normal messages from user and request -->   <!-- ko if: Type() == 0 && Role() == 0 -->	<div class="intelecomdialog__question" ><div class="intelecomdialog__question-time" data-bind="html: sentTimeFormatted()"></div><div class="intelecomdialog__question-text" ><span  data-bind="html: Message" /><div class="intelecomdialog__question-arrow-shadow" /><div class="intelecomdialog__question-arrow" /></div></div>  <!--/ko-->   <!-- ko if: Type() == 0 && Role() == 1-->   <div class="intelecomdialog__answer"><div class="intelecomdialog__answer-text"><div class="intelecomdialog__answer-info" data-bind="visible: $parent.beenInConference()"> <small data-bind="html: NickName() "></small></div><span data-bind="html: Message" /><div class="intelecomdialog__answer-arrow-shadow" /><div class="intelecomdialog__answer-arrow" />       </div><div class="intelecomdialog__answer-time" data-bind="html:sentTimeFormatted()"></div>    </div>        <!--/ko-->        <!-- Intro message -->        <!-- ko if:Type() == 2 && $parent.showIntro() -->        <div class="msg_intro" data-bind="html: Message()"></div>        <!--/ko-->  <!-- Options -->  <!-- ko if:Type() == 4 --><div class="intelecomoption" ><h1><%= h_option %></h1><ul><!-- ko foreach:{data:offerOptions} --><li><label><input type="radio" data-bind="checked:$parent.selectedRadioValue,attr:{value:text,name:optionName,disabled:(!!$parent.offerResult() || $root.disableEditor())}" /><span data-bind="text:text"></span></label></li><!--/ko--></ul><div class="intelecomoption__footer"><button type="submit" class="intelecomchat__button" data-bind="visible:!offerResult(),enable:!$root.disableEditor(),click:$root.confirmOption"><%= btn_confirm_option %></button><div class="intelecomoption__confirmed" data-bind="visible:offerResult()"><i class="intelecom_icon-ok"></i><span><%= lbl_confirm_option %></span><a data-bind="click:$root.cancelOption,visible:!$root.disableEditor()"><%= lbl_cancel_option %></a></div></div></div><!--/ko-->  <!-- Command -->  <!-- ko if:Type() == 6 && showCommand --><div class="intelecomcommand" ><h1 data-bind="text:headerText"></h1><div class="intelecomcommand__footer" ><button type="submit" class="intelecomchat__button" data-bind="visible:showButton(),enable:!$root.disableEditor(),click:$root.chatCommandCmd,text:buttonText"></button><div class="intelecomcommand__buttonPressed" data-bind="visible:!showButton()"><i class="intelecom_icon-ok"></i><span data-bind="text:stateText" /></div></div></div><!--/ko--><!--/ko--><div class="intelecomdialog__typing" data-bind="visible:agentTypingStatus.isTyping, text: agentTypingStatus.nickName() + \' <%= msg_is_typing %>...\'"></div></div></div></div></div></div>'),
                footer: g.template('<div class="intelecomfooter" data-bind="visible: inChatDialog()" >        <textarea class="intelecomtext" placeholder="<%= placeholderMessage %>" data-bind="textInput:messageText, event:{keypress:messageKeysHandler}, disable: disableEditor, hasFocus: inChatDialog()"></textarea>        <button type="submit" class="intelecomsubmit icon intelecomchaticon-right" data-bind="click: sendMessageCmd, disable: disableEditor" ></button></div>'),
                leave: g.template('<div class="intelecomleaveform" data-bind="visible: afterExit() && !showSurvey()"><div class="intelecomcaptcha__title" data-bind="html:msgGoodbyeHeader()"></div><label class="intelecomcaptcha__label"  data-bind="html:msgGoodbye()"></label><p /><%= tmplSendEmail %> </div>'),
                survey: g.template('<div class="intelecomsurveyform" data-bind="visible: afterExit() && showSurvey()"><div class="intelecomcaptcha__title" data-bind="html:msgSurveyHeader()"></div><form class="intelecomsurveyform__form" action=""  data-bind="submit: sendSurveyCmd" ><label class="intelecomcaptcha__label"  data-bind="html:msgSurveyQuestion()"></label><div class="intelecomsurvey"></div><textarea class="intelecomtext" rows="3" placeholder="<%= placeholder_survey_comment %>" data-bind="textInput:surveyComment, event:{keypress:surveyCommentKeysHandler}"></textarea><button  type="submit" class="intelecomchat__button send_info " ><%= btn_send_survey %></button><p><label class="intelecomcaptcha__label"  data-bind="text:sendSurveyMessage()"></label></form></div>'),
                sendEmail: g.template('<div class="intelecomsendemail"><div class="intelecomcaptcha__title"><%= h_send_email %></div><label class="intelecomcaptcha__label"><%= lbl_send_email %></label><form class="intelecomleaveform__form" action=""  data-bind="submit: sendEmailCmd" ><input class="intelecomchat__input intelecomchat__input_margin_b" name="CaptchaResult" type="email" data-bind="value: toEmailAddress" placeholder="<%= lbl_send_email_adr %>" /> <button  type="submit" class="intelecomchat__button send_info "><%= btn_send_email %></button><p><label class="intelecomcaptcha__label"  data-bind="text:emailMessage()"></label></form></div>'),
                audio: g.template('<audio id="intelecomaudiomessage" style="position:absolute;display:none;"  preload="none" src="<%= audioUrl %>"></audio>')
            })
        }(),
        function(a) {
            var b, c = {
                    className: "autosizejs",
                    id: "autosizejs",
                    append: "\n",
                    callback: !1,
                    resizeDelay: 10,
                    placeholder: !0
                },
                d = '<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',
                e = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent", "whiteSpace"],
                f = a(d).data("autosize", !0)[0];
            f.style.lineHeight = "99px", "99px" === a(f).css("lineHeight") && e.push("lineHeight"), f.style.lineHeight = "", a.fn.autosize = function(d) {
                return this.length ? (d = a.extend({}, c, d || {}), f.parentNode !== document.body && a(document.body).append(f), this.each(function() {
                    function c() {
                        var b, c = window.getComputedStyle ? window.getComputedStyle(m, null) : null;
                        c ? (b = parseFloat(c.width), ("border-box" === c.boxSizing || "border-box" === c.webkitBoxSizing || "border-box" === c.mozBoxSizing) && a.each(["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"], function(a, d) {
                            b -= parseFloat(c[d])
                        })) : b = n.width(), f.style.width = Math.max(b, 0) + "px"
                    }

                    function g() {
                        var g = {};
                        if (b = m, f.className = d.className, f.id = d.id, j = parseFloat(n.css("maxHeight")), a.each(e, function(a, b) {
                                g[b] = n.css(b)
                            }), a(f).css(g).attr("wrap", n.attr("wrap")), c(), window.chrome) {
                            var h = m.style.width;
                            m.style.width = "0px"; {
                                m.offsetWidth
                            }
                            m.style.width = h
                        }
                    }

                    function h() {
                        var a, e;
                        b !== m ? g() : c(), f.value = !m.value && d.placeholder ? n.attr("placeholder") || "" : m.value, f.value += d.append || "", f.style.overflowY = m.style.overflowY, e = parseFloat(m.style.height) || 0, f.scrollTop = 0, f.scrollTop = 9e4, a = f.scrollTop, j && a > j ? (m.style.overflowY = "scroll", a = j) : (m.style.overflowY = "hidden", k > a && (a = k)), a += o, Math.abs(e - a) > .01 && (m.style.height = a + "px", f.className = f.className, p && d.callback.call(m, m), n.trigger("autosize.resized"))
                    }

                    function i() {
                        clearTimeout(l), l = setTimeout(function() {
                            var a = n.width();
                            a !== r && (r = a, h())
                        }, parseInt(d.resizeDelay, 10))
                    }
                    var j, k, l, m = this,
                        n = a(m),
                        o = 0,
                        p = a.isFunction(d.callback),
                        q = {
                            height: m.style.height,
                            overflow: m.style.overflow,
                            overflowY: m.style.overflowY,
                            wordWrap: m.style.wordWrap,
                            resize: m.style.resize
                        },
                        r = n.width(),
                        s = n.css("resize");
                    n.data("autosize") || (n.data("autosize", !0), ("border-box" === n.css("box-sizing") || "border-box" === n.css("-moz-box-sizing") || "border-box" === n.css("-webkit-box-sizing")) && (o = n.outerHeight() - n.height()), k = Math.max(parseFloat(n.css("minHeight")) - o || 0, n.height()), n.css({
                        overflow: "hidden",
                        overflowY: "hidden",
                        wordWrap: "break-word"
                    }), "vertical" === s ? n.css("resize", "none") : "both" === s && n.css("resize", "horizontal"), "onpropertychange" in m ? "oninput" in m ? n.on("input.autosize keyup.autosize", h) : n.on("propertychange.autosize", function() {
                        "value" === event.propertyName && h()
                    }) : n.on("input.autosize", h), d.resizeDelay !== !1 && a(window).on("resize.autosize", i), n.on("autosize.resize", h), n.on("autosize.resizeIncludeStyle", function() {
                        b = null, h()
                    }), n.on("autosize.destroy", function() {
                        b = null, clearTimeout(l), a(window).off("resize", i), n.off("autosize").off(".autosize").css(q).removeData("autosize")
                    }), h())
                })) : this
            }
        }(a || j),
        function() {
            function a() {
                n >= i && (n = i), m >= h && (m = h), q > n && (n = q), o > m && (m = o)
            }

            function b() {
                t = 0, v = h - m, u = v / 2, w = 0, y = i - n, x = y / 2
            }

            function c() {
                if (f) {
                    var a = [];
                    u + 2 * g > k && k > u - 2 * g && a.push("center"), t + g > k && a.push("left"), k > v - g && a.push("right"), a.length > 0 ? j.inArray(r, a) < 0 && (r = a[0]) : r = "", a = [], x + 2 * g > l && l > x - 2 * g && a.push("middle"), w + g > l && a.push("top"), l > y - g && a.push("bottom"), a.length > 0 ? j.inArray(s, a) < 0 && (s = a[0]) : s = "", "middle" == s && "" == r && (s = ""), "center" == r && "" == s && (r = "")
                }
            }

            function d() {
                l > y || n > i ? l = y : w > l && (l = w), k > v || m > h ? k = v : t > k && (k = t)
            }

            function e() {
                switch (r) {
                    case "left":
                        k = t;
                        break;
                    case "center":
                        k = u;
                        break;
                    case "right":
                        k = v
                }
                switch (s) {
                    case "top":
                        l = w;
                        break;
                    case "middle":
                        l = x;
                        break;
                    case "bottom":
                        l = y
                }
            }
            var f, g, h, i, k, l, m, n, o, q, r, s, t, u, v, w, x, y;
            p.chatStickyDialog = {
                init: function(a, c, j, p, t, u, v, w, x, y, z, A) {
                    f = a, g = c, h = j, i = p, k = t, l = u, m = v, n = w, o = x, q = y, r = z, s = A, b(), d(), e()
                },
                setWindowSize: function(c, f) {
                    h = c, i = f, a(), b(), d(), e()
                },
                setChatPosAndSize: function(f, g, h, i) {
                    k = f, l = g, m = h, n = i, a(), b(), c(), d(), e()
                },
                getInfo: function() {
                    return {
                        left: k,
                        top: l,
                        width: m,
                        height: n,
                        horizontal: r,
                        vertical: s,
                        windowWidth: h,
                        windowHeight: i
                    }
                }
            }
        }(),
        function() {
            var a = {
                init: function() {
                    var b = p.chatCookies.get();
                    a.vm.msgFormHeader(a.options.msgFormHeader || ""), a.vm.msgFormIngress(a.options.msgFormIngress || ""), a.renderHtml(), a.chatDialog = j(".intelecomchatdialog"), a.initSurvey(), a.bind(), a.vm.browserSupported(p.browserInfo.isBrowserSupported()), a.vm.mute(b.mute === !0 ? !0 : !1), a.vm.fontSize("number" == typeof b.fontSize ? b.fontSize : 0), a.vm.firstStart(!0), a.vm.captcha(!a.options.authConnectionName && a.model.ShowCaptcha), a.vm.showForm(a.options.showForm), a.vm.enteredFormName(a.options.nickName), a.vm.enteredFormIssue(a.options.chatIssue), a.vm.enteredChatId(a.options.chatId), a.model.ChatId && a.model.ChatId.match("@") && a.vm.toEmailAddress(a.model.ChatId), a.vm.showIntro(a.options.showIntro), a.vm.msgGoodbye(a.model.MsgGoodbye || p.langChat.l("lbl_after_exit")), a.vm.msgGoodbyeHeader(a.model.MsgGoodbyeHeader || p.langChat.l("h_after_exit")), a.vm.msgSurveyQuestion(a.model.MsgSurveyQuestion || p.langChat.l("lbl_survey_question")), a.vm.msgSurveyHeader(a.model.MsgSurveyHeader || p.langChat.l("h_survey_header")), j.isEmptyObject(a.options.inputFields) ? (p.chatViewModel.addInputField({
                        inputLabel: p.langChat.l("lbl_enterName"),
                        inputVariableName: "enteredFormName",
                        inputPlaceholder: p.langChat.l("placeholder_yourName")
                    }), p.chatViewModel.addInputField({
                        inputLabel: p.langChat.l("lbl_enterEmail"),
                        inputVariableName: "enteredChatId",
                        inputType: "email",
                        inputPlaceholder: p.langChat.l("placeholder_yourEmail")
                    }), a.options.queues.length > 0 && p.chatViewModel.addInputField({
                        inputLabel: a.options.queueLabel || p.langChat.l("lbl_selectQueue"),
                        inputVariableName: "selectedQueueKey",
                        inputType: "select",
                        inputPlaceholder: a.options.queuePlaceholder || p.langChat.l("placeholder_selectQueue"),
                        inputItems: a.options.queues,
                        inputRequired: !0,
                        inputValue: a.options.queueKey || ""
                    }), a.options.chatIssues.length > 0 && p.chatViewModel.addInputField({
                        inputLabel: a.options.chatIssueLabel || p.langChat.l("lbl_selectFormIssue"),
                        inputVariableName: "enteredFormIssue",
                        inputType: "select",
                        inputPlaceholder: a.options.chatIssuePlaceholder || p.langChat.l("placeholder_selectFormIssue"),
                        inputItems: a.options.chatIssues,
                        inputRequired: !0,
                        inputValue: a.options.chatIssue || ""
                    })) : j.each(a.options.inputFields, function(a, b) {
                        p.chatViewModel.addInputField(b)
                    }), j(".intelecomtext").autosize({
                        placeholder: !1,
                        append: " "
                    }), b.iqSessionId && a.vm.inActiveChat(!0), a.options.startTextFromBottom && j(".intelecomMsgPnlCell").addClass("intelecomStartTextFromBottom"), p.browserInfo.isMobile() ? a.chatDialog.addClass("intelecomismobile") : (a.options.resizable === !0 && a.chatDialog.resizable({
                        handles: "n,e,s,w,ne,se,sw,nw"
                    }).bind({
                        resizestop: function() {
                            a.onChatMoveResize()
                        }
                    }), a.options.draggable === !0 && a.chatDialog.draggable({
                        cancel: ".intelecomchatinner *",
                        revert: function() {
                            a.onChatMoveResize()
                        }
                    }), a.chatDialog.css({
                        minWidth: a.minWidth,
                        minHeight: a.minHeight
                    }), a.initStickyDialog(b)), j(window).on("resize", function() {
                        a.onWindowResize()
                    }), j(window).on("focus", function() {
                        a.closeNotification()
                    }), setInterval(function() {
                        a.updateAgentTypingStatus()
                    }, 1e3), a.chatDialog.trigger("onChatInitialized")
                },
                renderHtml: function() {
                    a.chatContainer.prepend(p.chatTemplates.chatFrame({
                        intelecomUrl: p.langChat.l("intelecom_url"),
                        tmplCapthca: p.chatTemplates.captcha({
                            chatCaptchaHeader: p.langChat.l("h_captcha"),
                            chatCaptchaLabel: p.langChat.l("lbl_captcha"),
                            btnEnterCaptcha: p.langChat.l("btn_enter_captcha")
                        }),
                        tmplEnter: p.chatTemplates.enter({
                            startChat: p.langChat.l("btn_start_chat")
                        }),
                        tmplLeave: p.chatTemplates.leave({
                            tmplSendEmail: this.options.showSendEmail ? p.chatTemplates.sendEmail({
                                h_send_email: p.langChat.l("h_send_email"),
                                lbl_send_email: p.langChat.l("lbl_send_email"),
                                lbl_send_email_adr: p.langChat.l("lbl_send_email_adr"),
                                btn_send_email: p.langChat.l("btn_send_email")
                            }) : ""
                        }),
                        tmplDialog: p.chatTemplates.dialog({
                            msg_is_typing: p.langChat.l("msg_is_typing"),
                            h_option: a.options.msgOptionHeader || p.langChat.l("h_option"),
                            btn_confirm_option: a.options.msgOptionButton || p.langChat.l("btn_confirm_option"),
                            lbl_confirm_option: a.options.msgOptionConfirmed || p.langChat.l("lbl_confirm_option"),
                            lbl_cancel_option: a.options.msgOptionCancel || p.langChat.l("lbl_cancel_option")
                        }),
                        tmplFooter: p.chatTemplates.footer({
                            placeholderMessage: p.langChat.l("placeholder_message")
                        }),
                        tmplError: p.chatTemplates.error(),
                        tmplLoading: p.chatTemplates.loading(),
                        tmplSurvey: p.chatTemplates.survey({
                            placeholder_survey_comment: p.langChat.l("placeholder_survey_comment"),
                            btn_send_survey: p.langChat.l("btn_send_survey")
                        })
                    })), p.browserInfo.isAudioSupported() && a.chatContainer.prepend(p.chatTemplates.audio({
                        audioUrl: p.helpers.getFullUrl("/Content/Client/audio/message.mp3")
                    }))
                },
                initStickyDialog: function(b) {
                    var c, d, e, f, g, h, i, j;
                    a.options.draggable ? (i = null == b.horizontal ? null == b.left ? a.options.horizontalChatPosition : "" : b.horizontal, h = null == b.vertical ? null == b.top ? a.options.verticalChatPosition : "" : b.vertical) : (i = a.options.horizontalChatPosition, h = a.options.verticalChatPosition), c = null === b.left ? parseInt(a.chatDialog.css("left"), 10) : b.left, d = null === b.top ? parseInt(a.chatDialog.css("top"), 10) : b.top, e = null === b.width ? parseInt(a.chatDialog.css("width"), 10) : b.width, f = null === b.height ? parseInt(a.chatDialog.css("height"), 10) : b.height, g = p.browserInfo.getSize(), p.chatStickyDialog.init(a.options.draggable, 40, g.width, g.height, c, d, e, f, a.minWidth, a.minHeight, i, h), j = p.chatStickyDialog.getInfo(), a.chatDialog.css({
                        left: j.left,
                        top: j.top,
                        width: j.width,
                        height: j.height
                    })
                },
                onChatMoveResize: function() {
                    var b, c = parseInt(a.chatDialog.css("left"), 10),
                        d = parseInt(a.chatDialog.css("top"), 10),
                        e = parseInt(a.chatDialog.css("width"), 10),
                        f = parseInt(a.chatDialog.css("height"), 10);
                    p.chatStickyDialog.setChatPosAndSize(c, d, e, f), b = p.chatStickyDialog.getInfo(), a.chatDialog.css({
                        left: b.left,
                        top: b.top,
                        width: b.width,
                        height: b.height
                    }), p.browserInfo.isAndroid() && (a.fixAndroidKeyboard(p.browserInfo.getSize()), b = p.chatStickyDialog.getInfo()), p.chatCookies.setLeft(b.left).setTop(b.top).setWidth(b.width).setHeight(b.height).setHorizontal(b.horizontal).setVertical(b.vertical).save()
                },
                onWindowResize: function() {
                    var b = p.browserInfo.getSize(),
                        c = p.chatStickyDialog.getInfo();
                    (c.windowWidth != b.width || c.windowHeight != b.height) && (p.chatStickyDialog.setWindowSize(b.width, b.height), c = p.chatStickyDialog.getInfo(), a.chatDialog.css({
                        left: c.left,
                        top: c.top,
                        width: c.width,
                        height: c.height
                    })), p.browserInfo.isAndroid() && (a.fixAndroidKeyboard(b), c = p.chatStickyDialog.getInfo()), p.chatCookies.setLeft(c.left).setTop(c.top).setWidth(c.width).setHeight(c.height).setHorizontal(c.horizontal).setVertical(c.vertical).save()
                },
                fixAndroidKeyboard: function(b) {
                    function c(a) {
                        var b = a.prev();
                        return 1 === b.length && "LABEL" === b[0].tagName ? b : (b = a.parent().prev(), 1 === b.length && "LABEL" === b[0].tagName ? b : a)
                    }

                    function d(a) {
                        k.scrollTop(0), k.scrollTop(a.offset().top - k.offset().top)
                    }
                    var e, f, g, h, i, k = j(".intelecomchatoverlay"),
                        l = j("textarea.intelecomtext:focus"),
                        m = j(".intelecomchat__input:focus");
                    1 === l.length && a.scrollMsgsPnlDown(), 1 === m.length && b.height < a.minHeight ? (k.css("overflow-y", "scroll"), e = parseInt(a.chatDialog.css("left"), 10), f = 0, g = parseInt(a.chatDialog.css("width"), 10), h = b.height, p.chatStickyDialog.setChatPosAndSize(e, f, g, h), i = p.chatStickyDialog.getInfo(), a.chatDialog.css({
                        left: i.left,
                        top: i.top,
                        minHeight: 100,
                        height: h
                    }), d(c(m))) : parseInt(a.chatDialog.css("height"), 10) < a.minHeight && (k.css("overflow-y", "hidden"), a.chatDialog.css({
                        minHeight: ""
                    }), e = parseInt(a.chatDialog.css("left"), 10), f = parseInt(a.chatDialog.css("top"), 10), g = parseInt(a.chatDialog.css("width"), 10), h = a.minHeight, p.chatStickyDialog.setChatPosAndSize(e, f, g, h), i = p.chatStickyDialog.getInfo(), a.chatDialog.css({
                        left: i.left,
                        top: i.top,
                        width: i.width,
                        height: i.height
                    }))
                },
                scrollMsgsPnlDown: function() {
                    var a = j(".intelecomdialog");
                    setTimeout(function() {
                        a.scrollTop(a[0].scrollHeight)
                    }, 0)
                },
                bind: function() {
                    function b(a) {
                        a ? p.chatStarter.show() : p.chatStarter.hide()
                    }
                    var d = {
                        duration: 700,
                        step: a.scrollMsgsPnlDown
                    };
                    c.bindingHandlers.slideVisible = {
                        init: function(a) {
                            j(a).css({
                                opacity: "0.0"
                            }).slideUp(0)
                        },
                        update: function(a, b) {
                            var c = b(),
                                e = j(a);
                            e.is(":visible") ? c || e.stop().slideUp(d) : c && e.stop().css({
                                opacity: "0.0"
                            }).slideDown(d).animate({
                                opacity: "1.0"
                            })
                        }
                    }, a.vm.showStarter.subscribe(b), b(a.vm.showStarter()), a.vm.fontSize.subscribe(function() {
                        var b = j(".intelecomchatinner"),
                            c = j(".intelecomtext"),
                            d = parseInt(b.css("font-size")),
                            e = parseInt(c.css("font-size"));
                        return function(f) {
                            var g = d + f + "px",
                                h = e + f + "px";
                            b.css("font-size", g), c.css("font-size", h), p.chatCookies.setFontSize(f).save(), a.scrollMsgsPnlDown(),
                                function i() {
                                    c.css("font-size") != h ? setTimeout(i, 100) : c.trigger("autosize.resizeIncludeStyle")
                                }()
                        }
                    }()), a.vm.mute.subscribe(function(a) {
                        p.chatCookies.setMute(a).save()
                    }), a.vm.minimized.subscribe(function(a) {
                        p.chatCookies.setMinimized(a).save()
                    }), c.bindingHandlers.scrollBarDown = {
                        update: function(b) {
                            b && a.scrollMsgsPnlDown()
                        }
                    }, c.bindingHandlers.placeholder = {
                        init: function(a, b) {
                            var d = b();
                            c.applyBindingsToNode(a, {
                                attr: {
                                    placeholder: d
                                }
                            })
                        }
                    }, p.extend(a.vm, {
                        messageKeysHandler: function(b, c) {
                            function d() {
                                var b = a.vm.clientTypingStatus.timeStamp(),
                                    c = (new Date).getTime();
                                (null === b || b + a.typingMsgTimeout < c) && (a.vm.clientTypingStatus.timeStamp(c), a.sendMessageService(a.model.CustomerKey, a.model.IqSessionId, a.model.NickName, "TYPE_MSG", 1))
                            }
                            var e = a.vm.messageText(),
                                f = !e || e.match(/^[\s\n]*$/);
                            return (13 === c.keyCode || 32 === c.keyCode) && f || 60 === c.charCode || 62 === c.charCode ? !1 : (f || (13 != c.keyCode || c.shiftKey ? d() : a.sendChatMessage()), !0)
                        },
                        surveyCommentKeysHandler: function(b, c) {
                            var d = a.vm.surveyComment(),
                                e = !d || d.match(/^[\s\n]*$/);
                            return (13 === c.keyCode || 32 === c.keyCode) && e || 60 === c.charCode || 62 === c.charCode ? !1 : (e || 13 != c.keyCode || c.shiftKey || a.sendSurvey(), !0)
                        },
                        sendMessageCmd: c.asyncCommand({
                            execute: function(b, c, d) {
                                j.when(a.sendChatMessage(b)).always(d)
                            }
                        }),
                        animateMessage: function(b) {
                            var c = b.className;
                            return 1 !== b.nodeType || "intelecomdialog__question" !== c && "intelecomdialog__answer" !== c && "intelecomoption" !== c && "intelecomcommand" !== c || j(b).hide().animate({
                                opacity: "toggle",
                                height: "toggle"
                            }, {
                                step: function() {
                                    a.scrollMsgsPnlDown()
                                },
                                duration: 200
                            }), !0
                        },
                        sendEmailCmd: c.asyncCommand({
                            execute: function(b, c, d) {
                                j.when(a.sendEmailAndValidate(b)).always(d)
                            }
                        }),
                        enterCaptchaCmd: c.asyncCommand({
                            execute: function(b, c, d) {
                                j.when(a.enterCaptcha(b)).always(d)
                            }
                        }),
                        enterFormCmd: c.asyncCommand({
                            execute: function(b, c, d) {
                                j.when(a.enterForm(b)).always(d)
                            }
                        }),
                        sendSurveyCmd: c.asyncCommand({
                            execute: function(b, c, d) {
                                j.when(a.sendSurvey(b)).always(d)
                            }
                        }),
                        exitChatCmd: c.command({
                            execute: function() {
                                a.tryExitChat()
                            }
                        }),
                        minimizeChatCmd: c.command({
                            execute: function() {
                                a.chatDialog.trigger("onChatWindowMinimize"), a.vm.minimized(!0)
                            }
                        }),
                        expandChatCmd: c.command({
                            execute: function() {
                                a.startChat()
                            }
                        }),
                        muteChatCmd: c.command({
                            execute: function() {
                                a.switchMuteMode()
                            }
                        }),
                        fontSizeChatCmd: c.command({
                            execute: function() {
                                a.incrementFontSize()
                            }
                        }),
                        confirmOption: function(b) {
                            var c = b.selectedRadioValue();
                            c && a.sendOptionResult(b.Id(), c)
                        },
                        cancelOption: function(b) {
                            a.sendOptionResult(b.Id(), "")
                        },
                        chatCommandCmd: function(b) {
                            b.showButton(!1), a.chatDialog.trigger("onChatCommand", [b.command, b.data])
                        }
                    }), c.applyBindings(a.vm, a.chatContainer[0])
                },
                updateAgentTypingStatus: function() {
                    var b = a.vm.agentTypingStatus.timeStamp(),
                        c = (new Date).getTime();
                    "number" == typeof b && b + a.typingMsgTimeout + 5e3 < c && a.vm.agentTypingStatus.timeStamp(null)
                },
                switchMuteMode: function() {
                    a.vm.mute(!a.vm.mute())
                },
                incrementFontSize: function() {
                    a.vm.fontSize(a.vm.fontSize() + 1)
                },
                startChat: function() {
                    var b;
                    return a.vm.browserSupported() ? (a.vm.minimized() && a.chatDialog.trigger("onChatWindowShow"), a.vm.minimized(!1), a.vm.inActiveChat(!0), void(a.vm.firstStart() === !0 && (a.vm.firstStart(!1), a.vm.afterExit(!1), a.vm.showSurvey(!1), b = p.chatCookies.get(), a.continueChatSession(b.requestId, b.iqSessionId).done(function() {
                        a.vm.showForm(!1), a.vm.captcha(!1), a.model.ChatId && a.model.ChatId.match("@") && a.vm.toEmailAddress(a.model.ChatId), a.pollForQueuePosition(), a.pollForData(), a.sendTracks()
                    }).fail(function() {
                        a.checkIfChatOpenElseShowError().done(function() {
                            return a.options.authConnectionName && a.needAuthCode() ? void a.authenticate(a.options.authConnectionName) : void(a.vm.showForm() || a.startChatSession().done(function() {
                                a.logOutFromAuth0() || a.vm.captcha() || (a.pollForQueuePosition(), a.pollForData())
                            }))
                        })
                    })))) : void alert(p.langChat.l("msg_browserNotSupported"))
                },
                initSurvey: function() {
                    if ("radio" == a.options.surveyType) {
                        for (var b = "", c = a.options.surveyMinScore; c <= a.options.surveyMaxScore; c++) b += '<label class="intelecomsurvey__radio">' + c + '<br><input type="radio" name="survey" value="' + c + '" data-bind="checked: surveyResult"></label>';
                        j(".intelecomsurvey").append(b)
                    } else j(".intelecomsurvey").starrr({
                        max: a.options.surveyMaxScore,
                        change: function(b, c) {
                            a.vm.surveyResult(c)
                        }
                    })
                },
                clearSurvey: function() {
                    a.vm.sendSurveyMessage(""), a.vm.surveyComment(""), "radio" == a.options.surveyType && a.vm.surveyResult(-1)
                },
                tryExitChat: function() {
                    a.vm.inChatDialog() ? window.confirm(p.langChat.l("msg_want_to_exit")) && a.exitChat().done(function() {
                        a.vm.afterExit(!0), a.model.SendEmailAutomatically && a.sendEmail(!0)
                    }) : a.vm.afterExit() ? a.vm.showSurvey() || !a.model.EnableSurvey || a.options.surveyOnlyWhenConnected && !a.wasConnected ? (a.vm.minimized(!0), a.clearChat(), p.chatCookies.clear(), a.chatDialog.trigger("onChatWindowClose"), a.vm.afterExit(!1)) : (a.vm.showSurvey(!0), a.sendOfferSurvey()) : (a.vm.minimized(!0), a.clearChat(), p.chatCookies.clear(), a.chatDialog.trigger("onChatWindowMinimize"))
                },
                reloadOptions: function(a) {
                    p.chatModel.update(a)
                },
                clearChat: function() {
                    i("clear chat."), a.model = p.chatModel.create(a.options), a.vm.lastMessageId(0), a.vm.clientTypingStatus.timeStamp(null), a.vm.firstStart(!0), a.vm.chatMessages([]), a.vm.captcha(!a.options.authConnectionName && a.model.ShowCaptcha), a.vm.showForm(a.options.showForm), a.vm.enteredCaptchaResult(""), a.vm.messageText(""), a.vm.activeUsers([]), a.vm.infoMessageStr(""), a.vm.needPollForQueuePosition(!0), a.vm.showLoading(!0), a.vm.inActiveChat(!1), a.vm.emailMessage(""), a.vm.requestDisconnected(!1), a.wasConnected = !1, a.lastConnectedUserId = null, this.clearSurvey()
                },
                shakeInvalidInput: function(a) {
                    a.animate({
                        marginLeft: 7
                    }, 80, function() {
                        a.css({
                            bordlerWidth: 1,
                            borderColor: "red",
                            borderStyle: "solid"
                        })
                    });
                    for (var b = 0; 7 > b; b++) a.animate({
                        marginLeft: b % 2 == 0 ? -7 : 7
                    }, 80);
                    a.animate({
                        marginLeft: 0
                    }, 80, function() {
                        a.css({
                            bordlerWidth: "",
                            borderColor: "",
                            borderStyle: ""
                        })
                    })
                },
                enterCaptcha: function() {
                    var b = j.Deferred(),
                        c = j(".intelecomcaptcha input");
                    return a.checkIfChatOpenElseShowError().done(function() {
                        a.vm.enteredCaptchaResult() ? a.vm.enteredCaptchaResult() != a.vm.captchaResult() ? (a.vm.captchaMessage(p.langChat.l("msg_captcha_entered_is_wrong")), a.shakeInvalidInput(c), b.reject()) : (a.model.CaptchaResult = a.vm.enteredCaptchaResult(), a.startChatSession().done(function() {
                            a.logOutFromAuth0() && b.resolve(), a.vm.captcha() || (a.pollForQueuePosition(), a.pollForData()), b.resolve()
                        }).fail(function() {
                            b.reject()
                        })) : (a.vm.captchaMessage(p.langChat.l("msg_captcha_entered_is_empty")), a.shakeInvalidInput(c), b.reject())
                    }).fail(function() {
                        b.reject()
                    }), b.promise()
                },
                enterForm: function() {
                    var b = j.Deferred(),
                        c = !1;
                    return j.each(a.vm.inputFields(), function(b, d) {
                        var e = d.inputVariableName(),
                            f = d.inputValue(),
                            g = d.inputType(),
                            h = d.inputRequired(),
                            i = !1;
                        switch (h && !f && (i = !0), "email" !== g || "" === f || f.match("@") || (i = !0), e) {
                            case "enteredFormName":
                                a.model.NickName = f;
                                break;
                            case "enteredChatId":
                                a.model.ChatId = f, a.vm.toEmailAddress(f);
                                break;
                            case "enteredFormIssue":
                                a.model.ChatIssue = f;
                                break;
                            case "selectedQueueKey":
                                a.model.QueueKey = f;
                                break;
                            default:
                                a.model.Variables[e] = f
                        }
                        i && (a.shakeInvalidInput(j(".intelecomchat__input[name*='" + e + "']")), c = !0)
                    }), c ? (b.reject(), b.promise()) : (a.checkIfChatOpenElseShowError().done(function() {
                        a.startChatSession().done(function() {
                            a.logOutFromAuth0() && b.resolve(), a.vm.showForm(!1), a.vm.captcha() || (a.pollForQueuePosition(), a.pollForData()), b.resolve()
                        }).fail(function() {
                            b.reject()
                        })
                    }).fail(function() {
                        b.reject()
                    }), b.promise())
                },
                sendEmailAndValidate: function() {
                    var b = j.Deferred();
                    return a.vm.toEmailAddress() ? a.sendEmail(!1).done(function() {
                        b.resolve()
                    }).fail(function() {
                        b.reject()
                    }) : (a.shakeInvalidInput(j(".intelecomleaveform__form .intelecomchat__input")), a.vm.emailMessage(p.langChat.l("err_enter_email_address")), b.reject()), b.promise()
                },
                sendEmail: function(b) {
                    var c = j.Deferred();
                    try {
                        if (null == a.model.IqSessionId || !a.vm.toEmailAddress()) return c.reject(), c.promise();
                        a.vm.emailMessage(p.langChat.l("msg_email_sending")), a.sendEmailService(a.model.CustomerKey, a.model.IqSessionId, a.vm.toEmailAddress(), a.model.EmailSubject, a.model.CustomerCss, a.model.FromEmailDisplayName, a.model.LanguageCode, a.options.emailPreText, a.options.emailPostText, a.options.emailLogoUrl, a.options.emailLogoLink, a.options.emailLogoAlt, a.options.emailTopBackgroundColor, a.options.emailTopLineColor, a.options.emailBottomLineColor, a.options.emailTextStyle).done(function(d) {
                            return d.Ok ? (i("send email OK."), a.vm.emailMessage(p.langChat.l("" + d.ReturnString) + " " + a.vm.toEmailAddress()), a.model.EnableSurvey ? (a.vm.showSurvey(!0), a.sendOfferSurvey()) : b && a.tryExitChat(), c.resolve()) : (i("send email failed.", d.message), a.vm.emailMessage(p.langChat.l("" + d.ErrorName)), c.reject())
                        }).fail(function(b) {
                            return i("send email failed.", b), a.vm.emailMessage(p.langChat.l("err_chat_send_email")), c.reject()
                        })
                    } catch (d) {
                        return i("sendEmail failed.", d.message), c.reject()
                    }
                    return c.promise()
                },
                sendOptionResult: function(b, c) {
                    var d, e = j.Deferred();
                    try {
                        if (null == a.model.IqSessionId) return i("send option result failed: no iqSessionId."), e.reject();
                        d = b + "|" + c, a.sendMessageService(a.model.CustomerKey, a.model.IqSessionId, a.model.NickName, d, 5).done(function(a) {
                            return a.Ok ? (i("send option result OK."), e.resolve()) : (i("send option result failed.", a.message), e.reject())
                        }).fail(function(a) {
                            return i("send option result.", a), e.reject()
                        })
                    } catch (f) {
                        return i("sendSurvey failed.", f.message), e.reject()
                    }
                    return e.promise()
                },
                sendOfferSurvey: function() {
                    var b = j.Deferred();
                    return a.sendSurveyService(a.model.CustomerKey, a.model.IqSessionId, a.model.NickName, a.vm.msgSurveyQuestion(), -1, a.options.surveyMaxScore, a.options.surveyMinScore, null, !0, null, a.model.QueueKey, a.lastConnectedUserId).done(function(c) {
                        return c.Ok ? (i("send offered survey."), a.surveyParentSessionId = c.ParentSessionId, b.resolve()) : (i("send offered survey failed.", c.message), b.reject())
                    }).fail(function(a) {
                        return i("send survey failed.", a), b.reject()
                    }), b.promise()
                },
                sendSurvey: function() {
                    var b = j.Deferred();
                    try {
                        if (null == a.model.IqSessionId) return b.reject();
                        var c = parseInt(a.vm.surveyResult(), 10);
                        if (c < a.options.surveyMinScore) return a.vm.sendSurveyMessage(p.langChat.l("err_enter_survey")), b.reject();
                        a.sendSurveyService(a.model.CustomerKey, a.model.IqSessionId, a.model.NickName, a.vm.msgSurveyQuestion(), c, a.options.surveyMaxScore, a.options.surveyMinScore, a.vm.surveyComment(), !1, a.surveyParentSessionId, a.model.QueueKey, a.lastConnectedUserId).done(function(c) {
                            return c.Ok ? (i("send survey."), a.vm.sendSurveyMessage("OK"), a.surveyParentSessionId = c.ParentSessionId, a.tryExitChat(), b.resolve()) : (i("send survey failed.", c.message), a.vm.sendSurveyMessage(p.langChat.l("" + c.ErrorName)), b.reject())
                        }).fail(function(c) {
                            return i("send survey failed.", c), a.vm.sendSurveyMessage(p.langChat.l("err_chat_send_survey")), b.reject()
                        })
                    } catch (d) {
                        return i("sendSurvey failed.", d.message), b.reject()
                    }
                    return b.promise()
                },
                sendChatMessage: function() {
                    var b, c = j.Deferred();
                    try {
                        if (null == a.model.IqSessionId) return c.reject();
                        if (b = a.vm.messageText(), !b || b.match(/^[\s\n]*$/)) return a.clearTextField(), c.reject();
                        b = b.replace(/^[\s\n]+/g, ""), b = b.replace(/[\s\n]+$/g, ""), b = b.replace(/\n/g, "[br]"), b = b.replace(/:\-?\)/g, "[smiley]regular_smile.gif[/smiley]"), b = b.replace(/;\-?\)/g, "[smiley]wink_smile.gif[/smiley]"), b = b.replace(/:\-?\(/g, "[smiley]sad_smile.gif[/smiley]"), b = b.replace(/:\-?@/g, "[smiley]angry_smile.gif[/smiley]"), b = b.replace(/:-?D/gi, "[smiley]teeth_smile.gif[/smiley]"), b = b.replace(/:\-?o/gi, "[smiley]omg_smile.gif[/smiley]"), b = b.replace(/:\-?P/gi, "[smiley]tongue_smile.gif[/smiley]"), b = b.replace(/:\*\)/gi, "[smiley]embarrassed_smile.gif[/smiley]"), b = b.replace(/:\-?\|/gi, "[smiley]whatchutalkingabout_smile.gif[/smiley]"), b = b.replace(/:\-\*/gi, "[smiley]kiss.gif[/smiley]"), a.sendMessageService(a.model.CustomerKey, a.model.IqSessionId, a.model.NickName, b, 0).done(function(b) {
                            return b.Ok ? (i("send chat message OK."), a.clearTextField(), a.vm.clientTypingStatus.timeStamp(null), c.resolve()) : (i("send chat message failed.", b.message), c.reject())
                        }).fail(function(a) {
                            return i("send chat message failed.", a), c.reject()
                        })
                    } catch (d) {
                        return i("sendChatMessage failed.", d.message), c.reject()
                    }
                    return c.promise()
                },
                clearTextField: function() {
                    a.vm.messageText(""), j(".intelecomtext").trigger("autosize.resize")
                },
                checkIfChatOpenElseShowError: function() {
                    return p.chatInitialiser.checkIfChatOpen(a.options.customerKey, a.options.timeId, a.options.timeOpenExits, a.options.msgTimeClosed, a.options.visualQueueId, a.options.msgNoAgents, a.options.visualQueueExpression).fail(function() {
                        i(a.vm.msgClosed() || p.langChat.l("lbl_closed")), a.vm.errorMessageHeader(a.options.msgClosedHeader || p.langChat.l("h_closed")), a.vm.errorMessage(a.vm.msgClosed() || p.langChat.l("lbl_closed")), a.vm.showError(!0)
                    })
                },
                startChatSession: function() {
                    var b = j.Deferred();
                    if (a.chatDialog.trigger("onChatStart"), !a.model.QueueKey) return i("Could not start chat. Missing queueKey"), b.reject();
                    if (!a.model.CustomerKey) return i("Could not start chat. Missing customerKey"), b.reject();
                    try {
                        i("start chat session.."), a.startChatSessionService(a.model).done(function(c) {
                            return a.vm.showLoading(!1), c.Ok ? (i("start chat session OK."), p.chatModel.mergeWithServer(c.ReturnObject), a.vm.captchaResult(a.model.CaptchaResult), a.vm.captchaMessage(a.model.CaptchaMessage), a.model.RequestId > 0 ? (a.vm.captcha(!1), p.chatCookies.setSessionId(a.model.IqSessionId).setRequestId(a.model.RequestId).save(), a.sendTracks()) : a.vm.captcha(a.model.ShowCaptcha), a.vm.msgGoodbye(a.model.MsgGoodbye || p.langChat.l("lbl_after_exit")), a.vm.msgGoodbyeHeader(a.model.MsgGoodbyeHeader || p.langChat.l("h_after_exit")), a.vm.msgSurveyQuestion(a.model.MsgSurveyQuestion || p.langChat.l("lbl_survey_question")), a.vm.msgSurveyHeader(a.model.MsgSurveyHeader || p.langChat.l("h_survey_header")), a.model.ChatId && a.model.ChatId.match("@") && a.vm.toEmailAddress(a.model.ChatId), b.resolve()) : (i("start chat session failed.", c.ErrorMessage || c.ErrorName), "FailedToStartSession" == c.ErrorName ? (i(p.chatOptions.msgReject || p.langChat.l("err_chat_service_not_available")), a.vm.errorMessage(p.chatOptions.msgReject || p.langChat.l("err_chat_service_not_available"))) : "FailedToAuthenticateInStartSession" == c.ErrorName ? (i(p.chatOptions.msgReject || p.langChat.l("err_failed_authentication")), a.vm.errorMessage(p.chatOptions.msgReject || p.langChat.l("err_failed_authentication"))) : "TryToEnterSecureQueueWithoutBeingAuthenticated" == c.ErrorName ? (i(p.chatOptions.msgReject || p.langChat.l("err_queue_needs_authentication")), a.vm.errorMessage(p.chatOptions.msgReject || p.langChat.l("err_queue_needs_authentication"))) : "TryToEnterSecureQueueWithoutRightConnectionName" == c.ErrorName ? (i(p.chatOptions.msgReject || p.langChat.l("err_queue_wrong_authentication")), a.vm.errorMessage(p.chatOptions.msgReject || p.langChat.l("err_queue_wrong_authentication"))) : (i(p.chatOptions.msgReject || p.langChat.l("msg_chat_reject")), a.vm.errorMessage(p.chatOptions.msgReject || p.langChat.l("msg_chat_reject"))), a.vm.showError(!0), b.reject())
                        }).fail(function(a) {
                            return i("start chat session failed.", a.ErrorName), b.reject()
                        })
                    } catch (c) {
                        return i("startChatSession failed.", c.message), b.reject()
                    }
                    return b.promise()
                },
                continueChatSession: function(b, c) {
                    var d = j.Deferred();
                    if (!b || !c) return d.reject();
                    try {
                        i("try to continue chat session on request id " + b + " and iqSessionId " + c), a.continueChatSessionService(b, c, a.model).done(function(b) {
                            return b.Ok ? (i("continue chat session OK."), p.chatModel.mergeWithServer(b.ReturnObject), a.vm.msgGoodbye(a.model.MsgGoodbye || p.langChat.l("lbl_after_exit")), a.vm.msgGoodbyeHeader(a.model.MsgGoodbyeHeader || p.langChat.l("h_after_exit")), a.vm.msgSurveyQuestion(a.model.MsgSurveyQuestion || p.langChat.l("lbl_survey_question")), a.vm.msgSurveyHeader(a.model.MsgSurveyHeader || p.langChat.l("h_survey_header")), a.vm.showLoading(!1), d.resolve()) : (i("continue chat session failed.", b.ErrorMessage || b.ErrorName), d.reject())
                        }).fail(function(a) {
                            return i("continue chat session failed.", a.ErrorName), d.reject()
                        })
                    } catch (e) {
                        return i("continue chat failed.", e.message), d.reject()
                    }
                    return d.promise()
                },
                exitChat: function() {
                    var b = j.Deferred();
                    try {
                        i("disconnecting chat .."), a.endChatSessionService(a.model.CustomerKey, a.model.IqSessionId, a.model.RequestId, a.model.NickName).done(function(c) {
                            return c.Ok ? (i("end chat session OK."), p.chatCookies.clear(), a.chatDialog.trigger("onChatEnd"), b.resolve()) : (i("end chat session failed.", c.message), b.reject())
                        }).fail(function(a) {
                            return i("end chat session failed.", a), b.reject()
                        })
                    } catch (c) {
                        i("disconnectChat failed.", c.message)
                    }
                    return b.promise()
                },
                pollForData: function() {
                    return a.getChatMessages().always(function() {
                        a.vm.afterExit() || !a.model.IqSessionId || a.vm.requestDisconnected() || setTimeout(function() {
                            a.pollForData()
                        }, a.refreshRate)
                    })
                },
                getChatMessages: function() {
                    var b = j.Deferred();
                    try {
                        if (null == a.model || null == a.model.IqSessionId || "" == a.model.IqSessionId) return b.reject();
                        a.getMessagesService(a.model.CustomerKey, a.model.IqSessionId, a.vm.lastMessageId()).done(function(d) {
                            var e, f, h = 0 === a.vm.lastMessageId(),
                                k = !1,
                                l = {};
                            if (commandStateTexts = {}, commandShowButton = {}, d.Ok) {
                                if (d.ReturnObject && d.ReturnObject.length) {
                                    if (i("got new chat messages."), f = c.utils.arrayMap(d.ReturnObject, function(b) {
                                            return b.Id > a.vm.lastMessageId() && a.vm.lastMessageId(b.Id), e = p.chatMessage.create(b), b.Message && (g.string.startsWith(b.Message, "USER_CONNECTED") ? (a.wasConnected = !0, a.lastConnectedUserId = b.UserId, a.addActiveUser(b), a.updateInfoMessage(e.systemMessage()), a.vm.needPollForQueuePosition() && (a.vm.needPollForQueuePosition(!1), a.vm.chatMessages.remove(function(a) {
                                                return a.Message() && g.string.startsWith(a.Message(), "REQUEST_QUEUEPOSITION:")
                                            }))) : g.string.startsWith(b.Message, "USER_DISCONNECTED") ? (a.removeActiveUser(b), a.updateInfoMessage(e.systemMessage())) : g.string.startsWith(b.Message, "REQUEST_QUEUEPOSITION:") || g.string.startsWith(b.Message, "USER_INVITED") ? a.updateInfoMessage(e.systemMessage()) : g.string.startsWith(b.Message, "REQUEST_PUTINQUEUE:") ? a.vm.needPollForQueuePosition() || (a.vm.needPollForQueuePosition(!0), a.pollForQueuePosition()) : g.string.startsWith(b.Message, "REQUEST_DISCONNECTED") ? a.vm.requestDisconnected(!0) : 1 === b.Role && "TYPE_MSG" === b.Message ? h || (a.vm.agentTypingStatus.timeStamp((new Date).getTime()), a.vm.agentTypingStatus.nickName(b.NickName), a.scrollMsgsPnlDown()) : 4 === b.Type ? k = !0 : 5 === b.Type ? l[e.offerResultMsgId] = e.offerResultValue : 6 === b.Type ? (commandStateTexts[e.commandId] = e.stateText(), commandShowButton[e.commandId] = e.showButton()) : 1 === b.Role && 0 === b.Type && (k = !0, a.vm.agentTypingStatus.timeStamp(null))), e
                                        }), k && !h && a.vm.inChatDialog() && (a.options.notifyChatterOnNewMessage && a.showNotification(), !a.vm.mute())) try {
                                        j("#intelecomaudiomessage")[0].play()
                                    } catch (m) {}
                                    c.utils.arrayPushAll(a.vm.chatMessages, f), j.isEmptyObject(l) || c.utils.arrayForEach(a.vm.chatMessages(), function(a) {
                                        4 === a.Type() && l.hasOwnProperty(a.Id()) && a.offerResult(l[a.Id()])
                                    }), j.isEmptyObject(commandStateTexts) || c.utils.arrayForEach(a.vm.chatMessages(), function(a) {
                                        6 === a.Type() && commandStateTexts.hasOwnProperty(a.commandId) && (a.stateText(commandStateTexts[a.commandId]), a.showButton(commandShowButton[a.commandId]))
                                    })
                                }
                                return b.resolve()
                            }
                            return "IqSessionNotFound" == d.ErrorName ? (i("Iq session not found, disconnecting chat."), a.vm.requestDisconnected(!0)) : i("get chat message failed. ", d.ErrorMessage), b.reject()
                        }).fail(function(a) {
                            return i("get chat message failed. ", a), b.reject()
                        })
                    } catch (d) {
                        return i("sendChatMessage failed.", d.message), b.reject()
                    }
                    return b.promise()
                },
                addActiveUser: function(b) {
                    a.vm.activeUsers.remove(function(a) {
                        return a.UserId && a.UserId == b.UserId
                    }), a.vm.activeUsers.push(b), i("added to activeUsers: " + b)
                },
                removeActiveUser: function(b) {
                    a.vm.activeUsers.remove(function(a) {
                        return a.UserId && a.UserId == b.UserId
                    }), i("removed from activeUsers: " + b)
                },
                updateInfoMessage: function(b) {
                    a.vm.infoMessageStr(b), a.vm.showFlashingInfoMessage(!0), setTimeout(function() {
                        a.vm.showFlashingInfoMessage(!1)
                    }, 5e3)
                },
                showNotification: function() {
                    function b() {
                        var b = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAGEUlEQVRoQ+1Ze0idZRh/z7xrWuZl2mWYl2IIU3IKq1Xg/pibOeuPBO2PMtYcomxsboqoYypjXvKyILo4xoKSpXjpL+9RSGGotCCiJHPkdrykri2dl6n9fofvyOfZd8737Zzv1BZ+8KB+3/s+7/N7n/ujQTzkj+Ehl19sAfivNbilgf+lBtbX13XTrMFgWLd1SbodJAntgsPcQZ4g/u4Ifwq+CloELfN3JTCOHLBxMZLwFPxx0HZQIMgbtM0BE1vD3gXQn6BJ0CyBWILQC4ArmAcvLS3t6ujoSBsaGkqanp4OdUB409agoCBjXFxcR1JS0hceHh4/4tUUANyV89ULgA+YPtve3p7b2dmZubpKzevzuLi4iP37919KTU19Hxx/BYB5XQFI5uMPpnGlpaWXoYXQgIAA4e3tLXCY3SjAVywsLIiZmRmB2zeWlJS8BWZDoDm5Gdl/giSaBIA2v+fMmTPtISEhwt3d3SHhzagJYnl5WUxMTIizZ8+m4v139AlnAAgC4xfq6upafXx8dBFeDmJ+fl4cP378dbz7FjTtLAAvXrx4sUXNbHira2sMMNof7jly5Ih9ADQkJZohNfBSV1dX07Zt1iMnnfvOnTvi5s2bJtOgYFqfrKws7QDsSEp04hhQAEjJryjpGkLrY+Pj47uMRmPK5OSkLxxeq/zi6NGj2gDYmZTcIMkjIP5UemgzzKhMTAZo4Mne3t5SAHpUqzllZ2drBrCRlFpaWtKGh4dNSel+1G2JgH7BpLR79+7uQ4cOdXp5eS0NDAy8Ojg4+LZWvjk5OZoBmJLSlStXcpFVdU9KBw4c+DQtLe1LhMawpqamaq02lJubqw5AnpQKCgouLy4uhvr7+5uSkqMPk9Lc3Jzw9PQ0nj9/Ph/83Ovr6xu08j127JhmAKaklJeX1x4cHCzc3Nx0ies0lZWVFTE1NSWqq6vfpS8gb3ysBoDmh0xMJ34Na5nIrOcBSQOmpFRWVtbqaDlgKZy5PCguLs7it5qamo9sAaDwDMu4yPH09HSC/h5kvZSQA6iqqmpVS0pqt6f0nSBOnTpFAIba2toPuUYpuVFwOLvw9fUVYWFhjXv37q3B0p9tFnOWAOwRUMseCYBLW1vbBxSUvsGizVzF8uKo/R07dkzAB79G9PoMZjQM3pM2y2k5gIqKilYtwtizJj8//x3sM5fF7sgJmdeuXUucnZ3dAIGK9rfDhw8XYd3voD9AMyDbDY0cACKF0wAgwqVBGDYof4GYAKN6enpOAsQ+Mwjc/jcZGRklNBvaPeiuakspB3Du3DmnASgsLGRINEUUEFvRYFB0d3f3ybGxsX00qejo6Mbk5GTmiV9AC9aa+011ixxAeXm50wAUFRVtxHTJBAmCvXQ0OjqTJmJjYysSEhIu4d0YhLdaNFkFwDBqj31r2YMwuikpyeovEwhUACdiYmKaQkNDO/D3DUvHlZ9hDcCeysrKNmTi+yp51YRndEEmFqdPn74nKVmAiAIvyvYDndfWbEgJAEvjhIaGhk9QrzzF0Ka14LIFgMKzQUfLOY7oopiUZCBYlrMmM2Lf3zb5Wn4EE27c2dfXd2JkZCT91q1bgi2dZdnL+G2redmkZunm/fz8RFRUVGNiYqJiUuIeWS/CqngFAGyOOO5pPsCAG7ffvn37eZS7b6KUfmV0dDSEIMyacHV1FYGBgYLTB60gsG4S67+Kj4//HNlVMSmpmaDSdyUAfMeoQDU+DXrmwoUL5SjCIgiAwlPwyMjIvoMHDzJKcOyn1huap2wMmzdo19ynNvfUAkhxrCKpkZqgP+yEP5RCCy/Thil8REREb0pKynv4NgKijap16eY5J8MhSXHOqUVgyzVW50ISCDYCzzU3N+ddvXo13UL4n/BtSqMGTOfqceOaAUgO5YGfYf39/ZmYd+aHh4ebb57Cc+CqixnYc/PmPTYnc5JDP3H9+vUkOPQbmE8yejwwwpu0agu9ZEZ05ljJUWnzD8TNa9KAZEasFjkqZ/mrW/RwxGzke1WHu9AC/9PCeQ/n8rpFj38NgF4HOYuPqgacdbBefLcA6HWT9vLZ0oC9N6fXvn8ApsHFT+A73uoAAAAASUVORK5CYII=",
                            c = new Notification(a.options.msgNotificationText || p.langChat.l("new_message_from_agent"), {
                                icon: b,
                                silent: !0
                            });
                        c.onclose = function() {
                            a.vm.notification(null)
                        }, c.onclick = function() {
                            window.focus()
                        }, a.vm.notification(c)
                    }
                    "Notification" in window && !document.hasFocus() && !a.vm.notification() && ("granted" === Notification.permission ? b() : "denied" !== Notification.permission && Notification.requestPermission(function(a) {
                        "granted" === a && b()
                    }))
                },
                closeNotification: function() {
                    var b = a.vm.notification();
                    b && b.close()
                },
                pollForQueuePosition: function() {
                    return a.sendQueuePosition().always(function() {
                        a.vm.needPollForQueuePosition() && !a.vm.afterExit() && a.model.IqSessionId && !a.vm.requestDisconnected() && setTimeout(function() {
                            a.pollForQueuePosition()
                        }, 3e4)
                    })
                },
                sendQueuePosition: function() {
                    var b = j.Deferred();
                    try {
                        if (!a.vm.needPollForQueuePosition() || null == a.model || 0 == a.model.RequestId) return b.reject();
                        a.sendRequestQueuePositionService(a.model.CustomerKey, a.model.IqSessionId, a.model.NickName, a.model.RequestId).done(function(a) {
                            return a.Ok ? (i("send queue position OK."), b.resolve()) : (i("send queue position failed. ", a.message), b.reject())
                        }).fail(function(a) {
                            return i("send queue position failed. ", a), b.reject()
                        })
                    } catch (c) {
                        return i("send queue position failed.", c.message), b.reject()
                    }
                    return b.promise()
                },
                sendTracks: function() {
                    var b = j.Deferred();
                    try {
                        if (!a.options.useTracker) return b.reject();
                        i("start to send tracks ..");
                        var c = intelecomtracker.list(a.options.trackerArea);
                        if (!c || 0 == c.length) return i("no tracks to send on area " + a.options.trackerArea), b.reject();
                        (c.length > a.options.trackerMaxTracks || c.length > 100) && (c = c.slice(-(a.options.trackerMaxTracks > 0 && a.options.trackerMaxTracks < 100 ? a.options.trackerMaxTracks : 100))), a.sendTracksService(a.model.CustomerKey, a.model.IqSessionId, a.model.NickName, a.options.trackerArea, c).done(function(a) {
                            return a.Ok ? (i("sent tracks OK."), b.resolve()) : (i("sent tracks failed.", a.message), b.reject())
                        }).fail(function(a) {
                            return i("sent tracks failed.", a), b.reject()
                        }), intelecomtracker.clear(a.options.trackerArea)
                    } catch (d) {
                        return i("send tracks failed.", d.message), b.reject()
                    }
                    return b.promise()
                },
                endChatSessionService: function(a, b, c, d) {
                    return p.helpers.ajax("/Chat/EndChatSession/", {
                        action: "EndChatSession",
                        type: "POST",
                        data: {
                            customerKey: a,
                            iqSessionId: b,
                            requestId: c,
                            nickName: d
                        }
                    })
                },
                startChatSessionService: function(a) {
                    return p.helpers.ajax("/Chat/StartChatSession/", {
                        action: "StartChatSession",
                        type: "POST",
                        data: {
                            model: a
                        }
                    })
                },
                continueChatSessionService: function(a, b, c) {
                    return p.helpers.ajax("/Chat/ContinueChatSession/", {
                        action: "ContinueChatSession",
                        type: "POST",
                        data: {
                            requestId: a,
                            iqSessionId: b,
                            model: c
                        }
                    })
                },
                sendMessageService: function(a, b, c, d, e) {
                    return p.helpers.ajax("/Chat/SendMessage/", {
                        action: "SendMessage",
                        type: "POST",
                        data: {
                            customerKey: a,
                            iqSessionId: b,
                            nickName: c,
                            message: d,
                            messageType: e
                        }
                    })
                },
                sendTracksService: function(a, b, c, d, e) {
                    return p.helpers.ajax("/Chat/SendTracks/", {
                        action: "SendTracks",
                        type: "POST",
                        data: {
                            customerKey: a,
                            iqSessionId: b,
                            nickName: c,
                            area: d,
                            tracks: e
                        }
                    })
                },
                sendEmailService: function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, q) {
                    return p.helpers.ajax("/Chat/SendEmail/", {
                        action: "SendEmail",
                        type: "POST",
                        data: {
                            customerKey: a,
                            iqSessionId: b,
                            toEmailAddress: c,
                            emailSubject: d,
                            customerCss: e,
                            fromEmailDisplayName: f,
                            languageCode: g,
                            timezoneOffset: (new Date).getTimezoneOffset(),
                            customerChat: !0,
                            preText: h,
                            postText: i,
                            logoUrl: j,
                            logoLink: k,
                            logoAlt: l,
                            topBackgroundColor: m,
                            topLineColor: n,
                            bottomLineColor: o,
                            textStyle: q
                        }
                    })
                },
                getMessagesService: function(a, b, c) {
                    return p.helpers.ajax("/Chat/GetMessages/", {
                        action: "GetMessages",
                        data: {
                            customerKey: a,
                            iqSessionId: b,
                            lastMessageId: c
                        }
                    })
                },
                sendRequestQueuePositionService: function(a, b, c, d) {
                    return p.helpers.ajax("/Chat/SendRequestQueuePosition/", {
                        action: "SendRequestQueuePosition",
                        type: "POST",
                        data: {
                            customerKey: a,
                            iqSessionId: b,
                            nickName: c,
                            requestId: d
                        }
                    })
                },
                sendSurveyService: function(a, b, c, d, e, f, g, h, i, j, k, l) {
                    return p.helpers.ajax("/Chat/SendSurvey/", {
                        action: "SendSurvey",
                        type: "POST",
                        data: {
                            customerKey: a,
                            iqSessionId: b,
                            nickName: c,
                            surveyQuestion: d,
                            surveyResult: e,
                            surveyMaxScore: f,
                            surveyMinScore: g,
                            surveyComment: h,
                            offerSurvey: i,
                            parentSessionId: j,
                            queueKey: k,
                            userId: l
                        }
                    })
                },
                needAuthCode: function() {
                    if (a.model.AuthCode) return !1;
                    var b = p.helpers.getQueryStringValue("itcAuthCode");
                    return b ? (a.model.AuthCode = b, !1) : !0
                },
                authenticate: function(a) {
                    var b = encodeURIComponent(p.helpers.getFullUrl("Account/Auth0Callback?chatCurrentUrl=" + encodeURIComponent(window.location.href))),
                        c = "ljkas7lkj3aks8979jsa",
                        d = "itcsso.eu.auth0.com",
                        e = "6yq1cqw2f7h41GR89wGftg7BLUmqDYBH",
                        f = "https://" + d + "/authorize?scope=openid%20profile&response_type=code&connection=" + a + "&client_id=" + e + "&state=" + c + "&redirect_uri=" + b;
                    window.location.replace(f)
                },
                logOutFromAuth0: function() {
                    if (a.model.AuthCode) {
                        var b = encodeURIComponent(p.helpers.getFullUrl("Account/Auth0Logout?chatCurrentUrl=" + encodeURIComponent(window.location.href))),
                            c = "itcsso.eu.auth0.com",
                            d = "6yq1cqw2f7h41GR89wGftg7BLUmqDYBH",
                            e = "https://" + c + "/v2/logout?client_id=" + d + "&returnTo=" + b;
                        return window.location.replace(e), !0
                    }
                    return !1
                }
            };
            p.chat = {
                create: function(b, c) {
                    return p.langChat.create(c.languageCode), p.extend(a, {
                        minWidth: 300,
                        minHeight: 500,
                        refreshRate: 1500,
                        typingMsgTimeout: 1e4,
                        options: c,
                        model: p.chatModel.create(c),
                        vm: p.chatViewModel.create(c),
                        chatContainer: b,
                        chatDialog: null,
                        surveyParentSessionId: null,
                        wasConnected: !1,
                        lastConnectedUserId: null
                    })
                }
            }
        }(), p
});