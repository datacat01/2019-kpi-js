function strtotime(a, b) {
    function c(a, b, c) {
        var d, e = j[b];
        void 0 !== e && (d = e - i.getDay(), 0 === d ? d = 7 * c : d > 0 && "last" === a ? d -= 7 : d < 0 && "next" === a && (d += 7), i.setDate(i.getDate() + d))
    }

    function d(a) {
        var b = a.split(" "),
            d = b[0],
            e = b[1].substring(0, 3),
            f = /\d+/.test(d),
            g = "ago" === b[2],
            h = ("last" === d ? -1 : 1) * (g ? -1 : 1);
        if (f && (h *= parseInt(d, 10)), k.hasOwnProperty(e) && !b[1].match(/^mon(day|\.)?$/i)) return i["set" + k[e]](i["get" + k[e]]() + h);
        if ("wee" === e) return i.setDate(i.getDate() + 7 * h);
        if ("next" === d || "last" === d) c(d, e, h);
        else if (!f) return !1;
        return !0
    }
    var e, f, g, h, i, j, k, l, m, n, o, p = !1;
    if (!a) return p;
    if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s{2,}/g, " ").replace(/[\t\r\n]/g, "").toLowerCase(), (f = a.match(/^(\d{1,4})([\-\.\/\:])(\d{1,2})([\-\.\/\:])(\d{1,4})(?:\s(\d{1,2}):(\d{2})?:?(\d{2})?)?(?:\s([A-Z]+)?)?$/)) && f[2] === f[4])
        if (f[1] > 1901) switch (f[2]) {
            case "-":
                return f[3] > 12 || f[5] > 31 ? p : new Date(f[1], parseInt(f[3], 10) - 1, f[5], f[6] || 0, f[7] || 0, f[8] || 0, f[9] || 0) / 1e3;
            case ".":
                return p;
            case "/":
                return f[3] > 12 || f[5] > 31 ? p : new Date(f[1], parseInt(f[3], 10) - 1, f[5], f[6] || 0, f[7] || 0, f[8] || 0, f[9] || 0) / 1e3
        } else if (f[5] > 1901) switch (f[2]) {
            case "-":
            case ".":
                return f[3] > 12 || f[1] > 31 ? p : new Date(f[5], parseInt(f[3], 10) - 1, f[1], f[6] || 0, f[7] || 0, f[8] || 0, f[9] || 0) / 1e3;
            case "/":
                return f[1] > 12 || f[3] > 31 ? p : new Date(f[5], parseInt(f[1], 10) - 1, f[3], f[6] || 0, f[7] || 0, f[8] || 0, f[9] || 0) / 1e3
        } else switch (f[2]) {
            case "-":
                return f[3] > 12 || f[5] > 31 || f[1] < 70 && f[1] > 38 ? p : (h = f[1] >= 0 && f[1] <= 38 ? +f[1] + 2e3 : f[1], new Date(h, parseInt(f[3], 10) - 1, f[5], f[6] || 0, f[7] || 0, f[8] || 0, f[9] || 0) / 1e3);
            case ".":
                return f[5] >= 70 ? f[3] > 12 || f[1] > 31 ? p : new Date(f[5], parseInt(f[3], 10) - 1, f[1], f[6] || 0, f[7] || 0, f[8] || 0, f[9] || 0) / 1e3 : f[5] < 60 && !f[6] ? f[1] > 23 || f[3] > 59 ? p : (g = new Date, new Date(g.getFullYear(), g.getMonth(), g.getDate(), f[1] || 0, f[3] || 0, f[5] || 0, f[9] || 0) / 1e3) : p;
            case "/":
                return f[1] > 12 || f[3] > 31 || f[5] < 70 && f[5] > 38 ? p : (h = f[5] >= 0 && f[5] <= 38 ? +f[5] + 2e3 : f[5], new Date(h, parseInt(f[1], 10) - 1, f[3], f[6] || 0, f[7] || 0, f[8] || 0, f[9] || 0) / 1e3);
            case ":":
                return f[1] > 23 || f[3] > 59 || f[5] > 59 ? p : (g = new Date, new Date(g.getFullYear(), g.getMonth(), g.getDate(), f[1] || 0, f[3] || 0, f[5] || 0) / 1e3)
        }
    if ("now" === a) return null === b || isNaN(b) ? (new Date).getTime() / 1e3 | 0 : 0 | b;
    if (!isNaN(e = Date.parse(a))) return e / 1e3 | 0;
    if ((f = a.match(/^([0-9]{4}-[0-9]{2}-[0-9]{2})[ t]([0-9]{2}:[0-9]{2}:[0-9]{2}(\.[0-9]+)?)([\+-][0-9]{2}(:[0-9]{2})?|z)/)) && ("z" == f[4] ? f[4] = "Z" : f[4].match(/^([\+-][0-9]{2})$/) && (f[4] = f[4] + ":00"), !isNaN(e = Date.parse(f[1] + "T" + f[2] + f[4])))) return e / 1e3 | 0;
    if (i = b ? new Date(1e3 * b) : new Date, j = {
            sun: 0,
            mon: 1,
            tue: 2,
            wed: 3,
            thu: 4,
            fri: 5,
            sat: 6
        }, k = {
            yea: "FullYear",
            mon: "Month",
            day: "Date",
            hou: "Hours",
            min: "Minutes",
            sec: "Seconds"
        }, m = "(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)", n = "([+-]?\\d+\\s" + m + "|(last|next)\\s" + m + ")(\\sago)?", !(f = a.match(new RegExp(n, "gi")))) return p;
    for (o = 0, l = f.length; o < l; o++)
        if (!d(f[o])) return p;
    return i.getTime() / 1e3
}! function(a, b, c, d) {
    var e = a(b);
    a.fn.lazyload = function(f) {
        function g() {
            var b = 0;
            i.each(function() {
                var c = a(this);
                if (!j.skip_invisible || c.is(":visible"))
                    if (a.abovethetop(this, j) || a.leftofbegin(this, j));
                    else if (a.belowthefold(this, j) || a.rightoffold(this, j)) {
                    if (++b > j.failure_limit) return !1
                } else c.trigger("appear"), b = 0
            })
        }
        var h, i = this,
            j = {
                threshold: 0,
                failure_limit: 0,
                event: "scroll",
                effect: "show",
                container: b,
                data_attribute: "original",
                skip_invisible: !1,
                appear: null,
                load: null,
                placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
            };
        return f && (d !== f.failurelimit && (f.failure_limit = f.failurelimit, delete f.failurelimit), d !== f.effectspeed && (f.effect_speed = f.effectspeed, delete f.effectspeed), a.extend(j, f)), h = j.container === d || j.container === b ? e : a(j.container), 0 === j.event.indexOf("scroll") && h.on(j.event, function() {
            return g()
        }), this.each(function() {
            var b = this,
                c = a(b);
            b.loaded = !1, c.attr("src") !== d && !1 !== c.attr("src") || c.is("img") && c.attr("src", j.placeholder), c.one("appear", function() {
                if (!this.loaded) {
                    if (j.appear) {
                        var d = i.length;
                        j.appear.call(b, d, j)
                    }
                    a("<img />").one("load", function() {
                        var d = c.attr("data-" + j.data_attribute);
                        c.hide(), c.is("img") ? c.attr("src", d) : c.css("background-image", "url('" + d + "')"), c[j.effect](j.effect_speed), b.loaded = !0;
                        var e = a.grep(i, function(a) {
                            return !a.loaded
                        });
                        if (i = a(e), j.load) {
                            var f = i.length;
                            j.load.call(b, f, j)
                        }
                    }).attr("src", c.attr("data-" + j.data_attribute))
                }
            }), 0 !== j.event.indexOf("scroll") && c.on(j.event, function() {
                b.loaded || c.trigger("appear")
            })
        }), e.on("resize", function() {
            g()
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && e.on("pageshow", function(b) {
            b.originalEvent && b.originalEvent.persisted && i.each(function() {
                a(this).trigger("appear")
            })
        }), a(c).ready(function() {
            g()
        }), this
    }, a.belowthefold = function(c, f) {
        return (f.container === d || f.container === b ? (b.innerHeight ? b.innerHeight : e.height()) + e.scrollTop() : a(f.container).offset().top + a(f.container).height()) <= a(c).offset().top - f.threshold
    }, a.rightoffold = function(c, f) {
        return (f.container === d || f.container === b ? e.width() + e.scrollLeft() : a(f.container).offset().left + a(f.container).width()) <= a(c).offset().left - f.threshold
    }, a.abovethetop = function(c, f) {
        return (f.container === d || f.container === b ? e.scrollTop() : a(f.container).offset().top) >= a(c).offset().top + f.threshold + a(c).height()
    }, a.leftofbegin = function(c, f) {
        return (f.container === d || f.container === b ? e.scrollLeft() : a(f.container).offset().left) >= a(c).offset().left + f.threshold + a(c).width()
    }, a.inviewport = function(b, c) {
        return !(a.rightoffold(b, c) || a.leftofbegin(b, c) || a.belowthefold(b, c) || a.abovethetop(b, c))
    }, a.extend(a.expr[":"], {
        "below-the-fold": function(b) {
            return a.belowthefold(b, {
                threshold: 0
            })
        },
        "above-the-top": function(b) {
            return !a.belowthefold(b, {
                threshold: 0
            })
        },
        "right-of-screen": function(b) {
            return a.rightoffold(b, {
                threshold: 0
            })
        },
        "left-of-screen": function(b) {
            return !a.rightoffold(b, {
                threshold: 0
            })
        },
        "in-viewport": function(b) {
            return a.inviewport(b, {
                threshold: 0
            })
        },
        "above-the-fold": function(b) {
            return !a.belowthefold(b, {
                threshold: 0
            })
        },
        "right-of-fold": function(b) {
            return a.rightoffold(b, {
                threshold: 0
            })
        },
        "left-of-fold": function(b) {
            return !a.rightoffold(b, {
                threshold: 0
            })
        }
    })
}(jQuery, window, document),
function(a) {
    "use strict";

    function b(b, c, d) {
        "addEventListener" in a ? b.addEventListener(c, d, !1) : "attachEvent" in a && b.attachEvent("on" + c, d)
    }

    function c(b, c, d) {
        "removeEventListener" in a ? b.removeEventListener(c, d, !1) : "detachEvent" in a && b.detachEvent("on" + c, d)
    }

    function d() {
        var b, c = ["moz", "webkit", "o", "ms"];
        for (b = 0; b < c.length && !N; b += 1) N = a[c[b] + "RequestAnimationFrame"];
        N || h("setup", "RequestAnimationFrame not supported")
    }

    function e(b) {
        var c = "Host page: " + b;
        return a.top !== a.self && (c = a.parentIFrame && a.parentIFrame.getId ? a.parentIFrame.getId() + ": " + b : "Nested host page: " + b), c
    }

    function f(a) {
        return K + "[" + e(a) + "]"
    }

    function g(a) {
        return P[a] ? P[a].log : G
    }

    function h(a, b) {
        k("log", a, b, g(a))
    }

    function i(a, b) {
        k("info", a, b, g(a))
    }

    function j(a, b) {
        k("warn", a, b, !0)
    }

    function k(b, c, d, e) {
        !0 === e && "object" == typeof a.console && console[b](f(c), d)
    }

    function l(d) {
        function e() {
            function a() {
                s(V), p(W)
            }
            g("Height"), g("Width"), t(a, V, "init")
        }

        function f() {
            var a = U.substr(L).split(":");
            return {
                iframe: P[a[0]].iframe,
                id: a[0],
                height: a[1],
                width: a[2],
                type: a[3]
            }
        }

        function g(a) {
            var b = Number(P[W]["max" + a]),
                c = Number(P[W]["min" + a]),
                d = a.toLowerCase(),
                e = Number(V[d]);
            h(W, "Checking " + d + " is in range " + c + "-" + b), c > e && (e = c, h(W, "Set " + d + " to min value")), e > b && (e = b, h(W, "Set " + d + " to max value")), V[d] = "" + e
        }

        function k() {
            function a() {
                function a() {
                    var a = 0,
                        d = !1;
                    for (h(W, "Checking connection is from allowed list of origins: " + c); a < c.length; a++)
                        if (c[a] === b) {
                            d = !0;
                            break
                        } return d
                }

                function d() {
                    var a = P[W].remoteHost;
                    return h(W, "Checking connection is from: " + a), b === a
                }
                return c.constructor === Array ? a() : d()
            }
            var b = d.origin,
                c = P[W].checkOrigin;
            if (c && "" + b != "null" && !a()) throw new Error("Unexpected message received from: " + b + " for " + V.iframe.id + ". Message was: " + d.data + ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");
            return !0
        }

        function l() {
            return K === ("" + U).substr(0, L) && U.substr(L).split(":")[0] in P
        }

        function w() {
            var a = V.type in {
                true: 1,
                false: 1,
                undefined: 1
            };
            return a && h(W, "Ignoring init message from meta parent page"), a
        }

        function y(a) {
            return U.substr(U.indexOf(":") + J + a)
        }

        function z(a) {
            h(W, "MessageCallback passed: {iframe: " + V.iframe.id + ", message: " + a + "}"), N("messageCallback", {
                iframe: V.iframe,
                message: JSON.parse(a)
            }), h(W, "--")
        }

        function A() {
            var b = document.body.getBoundingClientRect(),
                c = V.iframe.getBoundingClientRect();
            return JSON.stringify({
                iframeHeight: c.height,
                iframeWidth: c.width,
                clientHeight: Math.max(document.documentElement.clientHeight, a.innerHeight || 0),
                clientWidth: Math.max(document.documentElement.clientWidth, a.innerWidth || 0),
                offsetTop: parseInt(c.top - b.top, 10),
                offsetLeft: parseInt(c.left - b.left, 10),
                scrollTop: a.pageYOffset,
                scrollLeft: a.pageXOffset
            })
        }

        function B(a, b) {
            function c() {
                u("Send Page Info", "pageInfo:" + A(), a, b)
            }
            x(c, 32)
        }

        function C() {
            function d(b, c) {
                function d() {
                    P[g] ? B(P[g].iframe, g) : e()
                } ["scroll", "resize"].forEach(function(e) {
                    h(g, b + e + " listener for sendPageInfo"), c(a, e, d)
                })
            }

            function e() {
                d("Remove ", c)
            }

            function f() {
                d("Add ", b)
            }
            var g = W;
            f(), P[g].stopPageInfo = e
        }

        function D() {
            P[W] && P[W].stopPageInfo && (P[W].stopPageInfo(), delete P[W].stopPageInfo)
        }

        function E() {
            var a = !0;
            return null === V.iframe && (j(W, "IFrame (" + V.id + ") not found"), a = !1), a
        }

        function F(a) {
            var b = a.getBoundingClientRect();
            return o(W), {
                x: Math.floor(Number(b.left) + Number(M.x)),
                y: Math.floor(Number(b.top) + Number(M.y))
            }
        }

        function G(b) {
            function c() {
                M = g, H(), h(W, "--")
            }

            function d() {
                return {
                    x: Number(V.width) + f.x,
                    y: Number(V.height) + f.y
                }
            }

            function e() {
                a.parentIFrame ? a.parentIFrame["scrollTo" + (b ? "Offset" : "")](g.x, g.y) : j(W, "Unable to scroll to requested position, window.parentIFrame not found")
            }
            var f = b ? F(V.iframe) : {
                    x: 0,
                    y: 0
                },
                g = d();
            h(W, "Reposition requested from iFrame (offset x:" + f.x + " y:" + f.y + ")"), a.top !== a.self ? e() : c()
        }

        function H() {
            !1 !== N("scrollCallback", M) ? p(W) : q()
        }

        function I(b) {
            function c() {
                var a = F(g);
                h(W, "Moving to in page link (#" + e + ") at x: " + a.x + " y: " + a.y), M = {
                    x: a.x,
                    y: a.y
                }, H(), h(W, "--")
            }

            function d() {
                a.parentIFrame ? a.parentIFrame.moveToAnchor(e) : h(W, "In page link #" + e + " not found and window.parentIFrame not found")
            }
            var e = b.split("#")[1] || "",
                f = decodeURIComponent(e),
                g = document.getElementById(f) || document.getElementsByName(f)[0];
            g ? c() : a.top !== a.self ? d() : h(W, "In page link #" + e + " not found")
        }

        function N(a, b) {
            return m(W, a, b)
        }

        function O() {
            switch (P[W].firstRun && T(), V.type) {
                case "close":
                    n(V.iframe);
                    break;
                case "message":
                    z(y(6));
                    break;
                case "scrollTo":
                    G(!1);
                    break;
                case "scrollToOffset":
                    G(!0);
                    break;
                case "pageInfo":
                    B(P[W].iframe, W), C();
                    break;
                case "pageInfoStop":
                    D();
                    break;
                case "inPageLink":
                    I(y(9));
                    break;
                case "reset":
                    r(V);
                    break;
                case "init":
                    e(), N("initCallback", V.iframe), N("resizedCallback", V);
                    break;
                default:
                    e(), N("resizedCallback", V)
            }
        }

        function Q(a) {
            var b = !0;
            return P[a] || (b = !1, j(V.type + " No settings for " + a + ". Message was: " + U)), b
        }

        function S() {
            for (var a in P) u("iFrame requested init", v(a), document.getElementById(a), a)
        }

        function T() {
            P[W].firstRun = !1
        }
        var U = d.data,
            V = {},
            W = null;
        "[iFrameResizerChild]Ready" === U ? S() : l() ? (V = f(), W = R = V.id, !w() && Q(W) && (h(W, "Received: " + U), E() && k() && O())) : i(W, "Ignored: " + U)
    }

    function m(a, b, c) {
        var d = null,
            e = null;
        if (P[a]) {
            if ("function" != typeof(d = P[a][b])) throw new TypeError(b + " on iFrame[" + a + "] is not a function");
            e = d(c)
        }
        return e
    }

    function n(a) {
        var b = a.id;
        h(b, "Removing iFrame: " + b), a.parentNode.removeChild(a), m(b, "closedCallback", b), h(b, "--"), delete P[b]
    }

    function o(b) {
        null === M && (M = {
            x: void 0 !== a.pageXOffset ? a.pageXOffset : document.documentElement.scrollLeft,
            y: void 0 !== a.pageYOffset ? a.pageYOffset : document.documentElement.scrollTop
        }, h(b, "Get page position: " + M.x + "," + M.y))
    }

    function p(b) {
        null !== M && (a.scrollTo(M.x, M.y), h(b, "Set page position: " + M.x + "," + M.y), q())
    }

    function q() {
        M = null
    }

    function r(a) {
        function b() {
            s(a), u("reset", "reset", a.iframe, a.id)
        }
        h(a.id, "Size reset requested by " + ("init" === a.type ? "host page" : "iFrame")), o(a.id), t(b, a, "reset")
    }

    function s(a) {
        function b(b) {
            a.iframe.style[b] = a[b] + "px", h(a.id, "IFrame (" + e + ") " + b + " set to " + a[b] + "px")
        }

        function c(b) {
            H || "0" !== a[b] || (H = !0, h(e, "Hidden iFrame detected, creating visibility listener"), y())
        }

        function d(a) {
            b(a), c(a)
        }
        var e = a.iframe.id;
        P[e] && (P[e].sizeHeight && d("height"), P[e].sizeWidth && d("width"))
    }

    function t(a, b, c) {
        c !== b.type && N ? (h(b.id, "Requesting animation frame"), N(a)) : a()
    }

    function u(a, b, c, d) {
        function e() {
            var e = P[d].targetOrigin;
            h(d, "[" + a + "] Sending msg to iframe[" + d + "] (" + b + ") targetOrigin: " + e), c.contentWindow.postMessage(K + b, e)
        }

        function f() {
            i(d, "[" + a + "] IFrame(" + d + ") not found"), P[d] && delete P[d]
        }

        function g() {
            c && "contentWindow" in c && null !== c.contentWindow ? e() : f()
        }
        d = d || c.id, P[d] && g()
    }

    function v(a) {
        return a + ":" + P[a].bodyMarginV1 + ":" + P[a].sizeWidth + ":" + P[a].log + ":" + P[a].interval + ":" + P[a].enablePublicMethods + ":" + P[a].autoResize + ":" + P[a].bodyMargin + ":" + P[a].heightCalculationMethod + ":" + P[a].bodyBackground + ":" + P[a].bodyPadding + ":" + P[a].tolerance + ":" + P[a].inPageLinks + ":" + P[a].resizeFrom + ":" + P[a].widthCalculationMethod
    }

    function w(a, c) {
        function d() {
            function b(b) {
                1 / 0 !== P[w][b] && 0 !== P[w][b] && (a.style[b] = P[w][b] + "px", h(w, "Set " + b + " = " + P[w][b] + "px"))
            }

            function c(a) {
                if (P[w]["min" + a] > P[w]["max" + a]) throw new Error("Value for min" + a + " can not be greater than max" + a)
            }
            c("Height"), c("Width"), b("maxHeight"), b("minHeight"), b("maxWidth"), b("minWidth")
        }

        function e() {
            var a = c && c.id || S.id + F++;
            return null !== document.getElementById(a) && (a += F++), a
        }

        function f(b) {
            return R = b, "" === b && (a.id = b = e(), G = (c || {}).log, R = b, h(b, "Added missing iframe ID: " + b + " (" + a.src + ")")), b
        }

        function g() {
            h(w, "IFrame scrolling " + (P[w].scrolling ? "enabled" : "disabled") + " for " + w), a.style.overflow = !1 === P[w].scrolling ? "hidden" : "auto", a.scrolling = !1 === P[w].scrolling ? "no" : "yes"
        }

        function i() {
            ("number" == typeof P[w].bodyMargin || "0" === P[w].bodyMargin) && (P[w].bodyMarginV1 = P[w].bodyMargin, P[w].bodyMargin = P[w].bodyMargin + "px")
        }

        function k() {
            var b = P[w].firstRun,
                c = P[w].heightCalculationMethod in O;
            !b && c && r({
                iframe: a,
                height: 0,
                width: 0,
                type: "init"
            })
        }

        function l() {
            Function.prototype.bind && (P[w].iframe.iFrameResizer = {
                close: n.bind(null, P[w].iframe),
                resize: u.bind(null, "Window resize", "resize", P[w].iframe),
                moveToAnchor: function(a) {
                    u("Move to anchor", "moveToAnchor:" + a, P[w].iframe, w)
                },
                sendMessage: function(a) {
                    a = JSON.stringify(a), u("Send Message", "message:" + a, P[w].iframe, w)
                }
            })
        }

        function m(c) {
            function d() {
                u("iFrame.onload", c, a), k()
            }
            b(a, "load", d), u("init", c, a)
        }

        function o(a) {
            if ("object" != typeof a) throw new TypeError("Options is not an object")
        }

        function p(a) {
            for (var b in S) S.hasOwnProperty(b) && (P[w][b] = a.hasOwnProperty(b) ? a[b] : S[b])
        }

        function q(a) {
            return "" === a || "file://" === a ? "*" : a
        }

        function s(b) {
            b = b || {}, P[w] = {
                firstRun: !0,
                iframe: a,
                remoteHost: a.src.split("/").slice(0, 3).join("/")
            }, o(b), p(b), P[w].targetOrigin = !0 === P[w].checkOrigin ? q(P[w].remoteHost) : "*"
        }

        function t() {
            return w in P && "iFrameResizer" in a
        }
        var w = f(a.id);
        t() ? j(w, "Ignored iFrame, already setup.") : (s(c), g(), d(), i(), m(v(w)), l())
    }

    function x(a, b) {
        null === Q && (Q = setTimeout(function() {
            Q = null, a()
        }, b))
    }

    function y() {
        function b() {
            function a(a) {
                function b(b) {
                    return "0px" === P[a].iframe.style[b]
                }

                function c(a) {
                    return null !== a.offsetParent
                }
                c(P[a].iframe) && (b("height") || b("width")) && u("Visibility change", "resize", P[a].iframe, a)
            }
            for (var b in P) a(b)
        }

        function c(a) {
            h("window", "Mutation observed: " + a[0].target + " " + a[0].type), x(b, 16)
        }

        function d() {
            var a = document.querySelector("body"),
                b = {
                    attributes: !0,
                    attributeOldValue: !1,
                    characterData: !0,
                    characterDataOldValue: !1,
                    childList: !0,
                    subtree: !0
                };
            new e(c).observe(a, b)
        }
        var e = a.MutationObserver || a.WebKitMutationObserver;
        e && d()
    }

    function z(a) {
        function b() {
            B("Window " + a, "resize")
        }
        h("window", "Trigger event: " + a), x(b, 16)
    }

    function A() {
        function a() {
            B("Tab Visable", "resize")
        }
        "hidden" !== document.visibilityState && (h("document", "Trigger event: Visiblity change"), x(a, 16))
    }

    function B(a, b) {
        function c(a) {
            return "parent" === P[a].resizeFrom && P[a].autoResize && !P[a].firstRun
        }
        for (var d in P) c(d) && u(a, b, document.getElementById(d), d)
    }

    function C() {
        b(a, "message", l), b(a, "resize", function() {
            z("resize")
        }), b(document, "visibilitychange", A), b(document, "-webkit-visibilitychange", A), b(a, "focusin", function() {
            z("focus")
        }), b(a, "focus", function() {
            z("focus")
        })
    }

    function D() {
        function a(a, c) {
            function d() {
                if (!c.tagName) throw new TypeError("Object is not a valid DOM element");
                if ("IFRAME" !== c.tagName.toUpperCase()) throw new TypeError("Expected <IFRAME> tag, found <" + c.tagName + ">")
            }
            c && (d(), w(c, a), b.push(c))
        }
        var b;
        return d(), C(),
            function(c, d) {
                switch (b = [], typeof d) {
                    case "undefined":
                    case "string":
                        Array.prototype.forEach.call(document.querySelectorAll(d || "iframe"), a.bind(void 0, c));
                        break;
                    case "object":
                        a(c, d);
                        break;
                    default:
                        throw new TypeError("Unexpected data type (" + typeof d + ")")
                }
                return b
            }
    }

    function E(a) {
        a.fn ? a.fn.iFrameResize = function(a) {
            function b(b, c) {
                w(c, a)
            }
            return this.filter("iframe").each(b).end()
        } : i("", "Unable to bind to jQuery, it is not fully loaded.")
    }
    var F = 0,
        G = !1,
        H = !1,
        I = "message",
        J = I.length,
        K = "[iFrameSizer]",
        L = K.length,
        M = null,
        N = a.requestAnimationFrame,
        O = {
            max: 1,
            scroll: 1,
            bodyScroll: 1,
            documentElementScroll: 1
        },
        P = {},
        Q = null,
        R = "Host Page",
        S = {
            autoResize: !0,
            bodyBackground: null,
            bodyMargin: null,
            bodyMarginV1: 8,
            bodyPadding: null,
            checkOrigin: !0,
            inPageLinks: !1,
            enablePublicMethods: !0,
            heightCalculationMethod: "bodyOffset",
            id: "iFrameResizer",
            interval: 32,
            log: !1,
            maxHeight: 1 / 0,
            maxWidth: 1 / 0,
            minHeight: 0,
            minWidth: 0,
            resizeFrom: "parent",
            scrolling: !1,
            sizeHeight: !0,
            sizeWidth: !1,
            tolerance: 0,
            widthCalculationMethod: "scroll",
            closedCallback: function() {},
            initCallback: function() {},
            messageCallback: function() {
                j("MessageCallback function not defined")
            },
            resizedCallback: function() {},
            scrollCallback: function() {
                return !0
            }
        };
    a.jQuery && E(jQuery), "function" == typeof define && define.amd ? define([], D) : "object" == typeof module && "object" == typeof module.exports ? module.exports = D() : a.iFrameResize = a.iFrameResize || D()
}(window || {}),
function() {
    function a(a) {
        function b(b, c, d, e, f, g) {
            for (; f >= 0 && f < g; f += a) {
                var h = e ? e[f] : f;
                d = c(d, b[h], h, b)
            }
            return d
        }
        return function(c, d, e, f) {
            d = s(d, f, 4);
            var g = !x(c) && r.keys(c),
                h = (g || c).length,
                i = a > 0 ? 0 : h - 1;
            return arguments.length < 3 && (e = c[g ? g[i] : i], i += a), b(c, d, e, g, i, h)
        }
    }

    function b(a) {
        return function(b, c, d) {
            c = t(c, d);
            for (var e = null != b && b.length, f = a > 0 ? 0 : e - 1; f >= 0 && f < e; f += a)
                if (c(b[f], f, b)) return f;
            return -1
        }
    }

    function c(a, b) {
        var c = C.length,
            d = a.constructor,
            e = r.isFunction(d) && d.prototype || g,
            f = "constructor";
        for (r.has(a, f) && !r.contains(b, f) && b.push(f); c--;)(f = C[c]) in a && a[f] !== e[f] && !r.contains(b, f) && b.push(f)
    }
    var d = this,
        e = d._,
        f = Array.prototype,
        g = Object.prototype,
        h = Function.prototype,
        i = f.push,
        j = f.slice,
        k = g.toString,
        l = g.hasOwnProperty,
        m = Array.isArray,
        n = Object.keys,
        o = h.bind,
        p = Object.create,
        q = function() {},
        r = function(a) {
            return a instanceof r ? a : this instanceof r ? void(this._wrapped = a) : new r(a)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = r), exports._ = r) : d._ = r, r.VERSION = "1.8.2";
    var s = function(a, b, c) {
            if (void 0 === b) return a;
            switch (null == c ? 3 : c) {
                case 1:
                    return function(c) {
                        return a.call(b, c)
                    };
                case 2:
                    return function(c, d) {
                        return a.call(b, c, d)
                    };
                case 3:
                    return function(c, d, e) {
                        return a.call(b, c, d, e)
                    };
                case 4:
                    return function(c, d, e, f) {
                        return a.call(b, c, d, e, f)
                    }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        t = function(a, b, c) {
            return null == a ? r.identity : r.isFunction(a) ? s(a, b, c) : r.isObject(a) ? r.matcher(a) : r.property(a)
        };
    r.iteratee = function(a, b) {
        return t(a, b, 1 / 0)
    };
    var u = function(a, b) {
            return function(c) {
                var d = arguments.length;
                if (d < 2 || null == c) return c;
                for (var e = 1; e < d; e++)
                    for (var f = arguments[e], g = a(f), h = g.length, i = 0; i < h; i++) {
                        var j = g[i];
                        b && void 0 !== c[j] || (c[j] = f[j])
                    }
                return c
            }
        },
        v = function(a) {
            if (!r.isObject(a)) return {};
            if (p) return p(a);
            q.prototype = a;
            var b = new q;
            return q.prototype = null, b
        },
        w = Math.pow(2, 53) - 1,
        x = function(a) {
            var b = a && a.length;
            return "number" == typeof b && b >= 0 && b <= w
        };
    r.each = r.forEach = function(a, b, c) {
        b = s(b, c);
        var d, e;
        if (x(a))
            for (d = 0, e = a.length; d < e; d++) b(a[d], d, a);
        else {
            var f = r.keys(a);
            for (d = 0, e = f.length; d < e; d++) b(a[f[d]], f[d], a)
        }
        return a
    }, r.map = r.collect = function(a, b, c) {
        b = t(b, c);
        for (var d = !x(a) && r.keys(a), e = (d || a).length, f = Array(e), g = 0; g < e; g++) {
            var h = d ? d[g] : g;
            f[g] = b(a[h], h, a)
        }
        return f
    }, r.reduce = r.foldl = r.inject = a(1), r.reduceRight = r.foldr = a(-1), r.find = r.detect = function(a, b, c) {
        var d;
        if (void 0 !== (d = x(a) ? r.findIndex(a, b, c) : r.findKey(a, b, c)) && -1 !== d) return a[d]
    }, r.filter = r.select = function(a, b, c) {
        var d = [];
        return b = t(b, c), r.each(a, function(a, c, e) {
            b(a, c, e) && d.push(a)
        }), d
    }, r.reject = function(a, b, c) {
        return r.filter(a, r.negate(t(b)), c)
    }, r.every = r.all = function(a, b, c) {
        b = t(b, c);
        for (var d = !x(a) && r.keys(a), e = (d || a).length, f = 0; f < e; f++) {
            var g = d ? d[f] : f;
            if (!b(a[g], g, a)) return !1
        }
        return !0
    }, r.some = r.any = function(a, b, c) {
        b = t(b, c);
        for (var d = !x(a) && r.keys(a), e = (d || a).length, f = 0; f < e; f++) {
            var g = d ? d[f] : f;
            if (b(a[g], g, a)) return !0
        }
        return !1
    }, r.contains = r.includes = r.include = function(a, b, c) {
        return x(a) || (a = r.values(a)), r.indexOf(a, b, "number" == typeof c && c) >= 0
    }, r.invoke = function(a, b) {
        var c = j.call(arguments, 2),
            d = r.isFunction(b);
        return r.map(a, function(a) {
            var e = d ? b : a[b];
            return null == e ? e : e.apply(a, c)
        })
    }, r.pluck = function(a, b) {
        return r.map(a, r.property(b))
    }, r.where = function(a, b) {
        return r.filter(a, r.matcher(b))
    }, r.findWhere = function(a, b) {
        return r.find(a, r.matcher(b))
    }, r.max = function(a, b, c) {
        var d, e, f = -1 / 0,
            g = -1 / 0;
        if (null == b && null != a) {
            a = x(a) ? a : r.values(a);
            for (var h = 0, i = a.length; h < i; h++)(d = a[h]) > f && (f = d)
        } else b = t(b, c), r.each(a, function(a, c, d) {
            ((e = b(a, c, d)) > g || e === -1 / 0 && f === -1 / 0) && (f = a, g = e)
        });
        return f
    }, r.min = function(a, b, c) {
        var d, e, f = 1 / 0,
            g = 1 / 0;
        if (null == b && null != a) {
            a = x(a) ? a : r.values(a);
            for (var h = 0, i = a.length; h < i; h++)(d = a[h]) < f && (f = d)
        } else b = t(b, c), r.each(a, function(a, c, d) {
            ((e = b(a, c, d)) < g || e === 1 / 0 && f === 1 / 0) && (f = a, g = e)
        });
        return f
    }, r.shuffle = function(a) {
        for (var b, c = x(a) ? a : r.values(a), d = c.length, e = Array(d), f = 0; f < d; f++) b = r.random(0, f), b !== f && (e[f] = e[b]), e[b] = c[f];
        return e
    }, r.sample = function(a, b, c) {
        return null == b || c ? (x(a) || (a = r.values(a)), a[r.random(a.length - 1)]) : r.shuffle(a).slice(0, Math.max(0, b))
    }, r.sortBy = function(a, b, c) {
        return b = t(b, c), r.pluck(r.map(a, function(a, c, d) {
            return {
                value: a,
                index: c,
                criteria: b(a, c, d)
            }
        }).sort(function(a, b) {
            var c = a.criteria,
                d = b.criteria;
            if (c !== d) {
                if (c > d || void 0 === c) return 1;
                if (c < d || void 0 === d) return -1
            }
            return a.index - b.index
        }), "value")
    };
    var y = function(a) {
        return function(b, c, d) {
            var e = {};
            return c = t(c, d), r.each(b, function(d, f) {
                var g = c(d, f, b);
                a(e, d, g)
            }), e
        }
    };
    r.groupBy = y(function(a, b, c) {
        r.has(a, c) ? a[c].push(b) : a[c] = [b]
    }), r.indexBy = y(function(a, b, c) {
        a[c] = b
    }), r.countBy = y(function(a, b, c) {
        r.has(a, c) ? a[c]++ : a[c] = 1
    }), r.toArray = function(a) {
        return a ? r.isArray(a) ? j.call(a) : x(a) ? r.map(a, r.identity) : r.values(a) : []
    }, r.size = function(a) {
        return null == a ? 0 : x(a) ? a.length : r.keys(a).length
    }, r.partition = function(a, b, c) {
        b = t(b, c);
        var d = [],
            e = [];
        return r.each(a, function(a, c, f) {
            (b(a, c, f) ? d : e).push(a)
        }), [d, e]
    }, r.first = r.head = r.take = function(a, b, c) {
        if (null != a) return null == b || c ? a[0] : r.initial(a, a.length - b)
    }, r.initial = function(a, b, c) {
        return j.call(a, 0, Math.max(0, a.length - (null == b || c ? 1 : b)))
    }, r.last = function(a, b, c) {
        if (null != a) return null == b || c ? a[a.length - 1] : r.rest(a, Math.max(0, a.length - b))
    }, r.rest = r.tail = r.drop = function(a, b, c) {
        return j.call(a, null == b || c ? 1 : b)
    }, r.compact = function(a) {
        return r.filter(a, r.identity)
    };
    var z = function(a, b, c, d) {
        for (var e = [], f = 0, g = d || 0, h = a && a.length; g < h; g++) {
            var i = a[g];
            if (x(i) && (r.isArray(i) || r.isArguments(i))) {
                b || (i = z(i, b, c));
                var j = 0,
                    k = i.length;
                for (e.length += k; j < k;) e[f++] = i[j++]
            } else c || (e[f++] = i)
        }
        return e
    };
    r.flatten = function(a, b) {
        return z(a, b, !1)
    }, r.without = function(a) {
        return r.difference(a, j.call(arguments, 1))
    }, r.uniq = r.unique = function(a, b, c, d) {
        if (null == a) return [];
        r.isBoolean(b) || (d = c, c = b, b = !1), null != c && (c = t(c, d));
        for (var e = [], f = [], g = 0, h = a.length; g < h; g++) {
            var i = a[g],
                j = c ? c(i, g, a) : i;
            b ? (g && f === j || e.push(i), f = j) : c ? r.contains(f, j) || (f.push(j), e.push(i)) : r.contains(e, i) || e.push(i)
        }
        return e
    }, r.union = function() {
        return r.uniq(z(arguments, !0, !0))
    }, r.intersection = function(a) {
        if (null == a) return [];
        for (var b = [], c = arguments.length, d = 0, e = a.length; d < e; d++) {
            var f = a[d];
            if (!r.contains(b, f)) {
                for (var g = 1; g < c && r.contains(arguments[g], f); g++);
                g === c && b.push(f)
            }
        }
        return b
    }, r.difference = function(a) {
        var b = z(arguments, !0, !0, 1);
        return r.filter(a, function(a) {
            return !r.contains(b, a)
        })
    }, r.zip = function() {
        return r.unzip(arguments)
    }, r.unzip = function(a) {
        for (var b = a && r.max(a, "length").length || 0, c = Array(b), d = 0; d < b; d++) c[d] = r.pluck(a, d);
        return c
    }, r.object = function(a, b) {
        for (var c = {}, d = 0, e = a && a.length; d < e; d++) b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
        return c
    }, r.indexOf = function(a, b, c) {
        var d = 0,
            e = a && a.length;
        if ("number" == typeof c) d = c < 0 ? Math.max(0, e + c) : c;
        else if (c && e) return d = r.sortedIndex(a, b), a[d] === b ? d : -1;
        if (b !== b) return r.findIndex(j.call(a, d), r.isNaN);
        for (; d < e; d++)
            if (a[d] === b) return d;
        return -1
    }, r.lastIndexOf = function(a, b, c) {
        var d = a ? a.length : 0;
        if ("number" == typeof c && (d = c < 0 ? d + c + 1 : Math.min(d, c + 1)), b !== b) return r.findLastIndex(j.call(a, 0, d), r.isNaN);
        for (; --d >= 0;)
            if (a[d] === b) return d;
        return -1
    }, r.findIndex = b(1), r.findLastIndex = b(-1), r.sortedIndex = function(a, b, c, d) {
        c = t(c, d, 1);
        for (var e = c(b), f = 0, g = a.length; f < g;) {
            var h = Math.floor((f + g) / 2);
            c(a[h]) < e ? f = h + 1 : g = h
        }
        return f
    }, r.range = function(a, b, c) {
        arguments.length <= 1 && (b = a || 0, a = 0), c = c || 1;
        for (var d = Math.max(Math.ceil((b - a) / c), 0), e = Array(d), f = 0; f < d; f++, a += c) e[f] = a;
        return e
    };
    var A = function(a, b, c, d, e) {
        if (!(d instanceof b)) return a.apply(c, e);
        var f = v(a.prototype),
            g = a.apply(f, e);
        return r.isObject(g) ? g : f
    };
    r.bind = function(a, b) {
        if (o && a.bind === o) return o.apply(a, j.call(arguments, 1));
        if (!r.isFunction(a)) throw new TypeError("Bind must be called on a function");
        var c = j.call(arguments, 2),
            d = function() {
                return A(a, d, b, this, c.concat(j.call(arguments)))
            };
        return d
    }, r.partial = function(a) {
        var b = j.call(arguments, 1),
            c = function() {
                for (var d = 0, e = b.length, f = Array(e), g = 0; g < e; g++) f[g] = b[g] === r ? arguments[d++] : b[g];
                for (; d < arguments.length;) f.push(arguments[d++]);
                return A(a, c, this, this, f)
            };
        return c
    }, r.bindAll = function(a) {
        var b, c, d = arguments.length;
        if (d <= 1) throw new Error("bindAll must be passed function names");
        for (b = 1; b < d; b++) c = arguments[b], a[c] = r.bind(a[c], a);
        return a
    }, r.memoize = function(a, b) {
        var c = function(d) {
            var e = c.cache,
                f = "" + (b ? b.apply(this, arguments) : d);
            return r.has(e, f) || (e[f] = a.apply(this, arguments)), e[f]
        };
        return c.cache = {}, c
    }, r.delay = function(a, b) {
        var c = j.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(null, c)
        }, b)
    }, r.defer = r.partial(r.delay, r, 1), r.throttle = function(a, b, c) {
        var d, e, f, g = null,
            h = 0;
        c || (c = {});
        var i = function() {
            h = !1 === c.leading ? 0 : r.now(), g = null, f = a.apply(d, e), g || (d = e = null)
        };
        return function() {
            var j = r.now();
            h || !1 !== c.leading || (h = j);
            var k = b - (j - h);
            return d = this, e = arguments, k <= 0 || k > b ? (g && (clearTimeout(g), g = null), h = j, f = a.apply(d, e), g || (d = e = null)) : g || !1 === c.trailing || (g = setTimeout(i, k)), f
        }
    }, r.debounce = function(a, b, c) {
        var d, e, f, g, h, i = function() {
            var j = r.now() - g;
            j < b && j >= 0 ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(f, e), d || (f = e = null)))
        };
        return function() {
            f = this, e = arguments, g = r.now();
            var j = c && !d;
            return d || (d = setTimeout(i, b)), j && (h = a.apply(f, e), f = e = null), h
        }
    }, r.wrap = function(a, b) {
        return r.partial(b, a)
    }, r.negate = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }, r.compose = function() {
        var a = arguments,
            b = a.length - 1;
        return function() {
            for (var c = b, d = a[b].apply(this, arguments); c--;) d = a[c].call(this, d);
            return d
        }
    }, r.after = function(a, b) {
        return function() {
            if (--a < 1) return b.apply(this, arguments)
        }
    }, r.before = function(a, b) {
        var c;
        return function() {
            return --a > 0 && (c = b.apply(this, arguments)), a <= 1 && (b = null), c
        }
    }, r.once = r.partial(r.before, 2);
    var B = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        C = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    r.keys = function(a) {
        if (!r.isObject(a)) return [];
        if (n) return n(a);
        var b = [];
        for (var d in a) r.has(a, d) && b.push(d);
        return B && c(a, b), b
    }, r.allKeys = function(a) {
        if (!r.isObject(a)) return [];
        var b = [];
        for (var d in a) b.push(d);
        return B && c(a, b), b
    }, r.values = function(a) {
        for (var b = r.keys(a), c = b.length, d = Array(c), e = 0; e < c; e++) d[e] = a[b[e]];
        return d
    }, r.mapObject = function(a, b, c) {
        b = t(b, c);
        for (var d, e = r.keys(a), f = e.length, g = {}, h = 0; h < f; h++) d = e[h], g[d] = b(a[d], d, a);
        return g
    }, r.pairs = function(a) {
        for (var b = r.keys(a), c = b.length, d = Array(c), e = 0; e < c; e++) d[e] = [b[e], a[b[e]]];
        return d
    }, r.invert = function(a) {
        for (var b = {}, c = r.keys(a), d = 0, e = c.length; d < e; d++) b[a[c[d]]] = c[d];
        return b
    }, r.functions = r.methods = function(a) {
        var b = [];
        for (var c in a) r.isFunction(a[c]) && b.push(c);
        return b.sort()
    }, r.extend = u(r.allKeys), r.extendOwn = r.assign = u(r.keys), r.findKey = function(a, b, c) {
        b = t(b, c);
        for (var d, e = r.keys(a), f = 0, g = e.length; f < g; f++)
            if (d = e[f], b(a[d], d, a)) return d
    }, r.pick = function(a, b, c) {
        var d, e, f = {},
            g = a;
        if (null == g) return f;
        r.isFunction(b) ? (e = r.allKeys(g), d = s(b, c)) : (e = z(arguments, !1, !1, 1), d = function(a, b, c) {
            return b in c
        }, g = Object(g));
        for (var h = 0, i = e.length; h < i; h++) {
            var j = e[h],
                k = g[j];
            d(k, j, g) && (f[j] = k)
        }
        return f
    }, r.omit = function(a, b, c) {
        if (r.isFunction(b)) b = r.negate(b);
        else {
            var d = r.map(z(arguments, !1, !1, 1), String);
            b = function(a, b) {
                return !r.contains(d, b)
            }
        }
        return r.pick(a, b, c)
    }, r.defaults = u(r.allKeys, !0), r.clone = function(a) {
        return r.isObject(a) ? r.isArray(a) ? a.slice() : r.extend({}, a) : a
    }, r.tap = function(a, b) {
        return b(a), a
    }, r.isMatch = function(a, b) {
        var c = r.keys(b),
            d = c.length;
        if (null == a) return !d;
        for (var e = Object(a), f = 0; f < d; f++) {
            var g = c[f];
            if (b[g] !== e[g] || !(g in e)) return !1
        }
        return !0
    };
    var D = function(a, b, c, d) {
        if (a === b) return 0 !== a || 1 / a == 1 / b;
        if (null == a || null == b) return a === b;
        a instanceof r && (a = a._wrapped), b instanceof r && (b = b._wrapped);
        var e = k.call(a);
        if (e !== k.call(b)) return !1;
        switch (e) {
            case "[object RegExp]":
            case "[object String]":
                return "" + a == "" + b;
            case "[object Number]":
                return +a != +a ? +b != +b : 0 == +a ? 1 / +a == 1 / b : +a == +b;
            case "[object Date]":
            case "[object Boolean]":
                return +a == +b
        }
        var f = "[object Array]" === e;
        if (!f) {
            if ("object" != typeof a || "object" != typeof b) return !1;
            var g = a.constructor,
                h = b.constructor;
            if (g !== h && !(r.isFunction(g) && g instanceof g && r.isFunction(h) && h instanceof h) && "constructor" in a && "constructor" in b) return !1
        }
        c = c || [], d = d || [];
        for (var i = c.length; i--;)
            if (c[i] === a) return d[i] === b;
        if (c.push(a), d.push(b), f) {
            if ((i = a.length) !== b.length) return !1;
            for (; i--;)
                if (!D(a[i], b[i], c, d)) return !1
        } else {
            var j, l = r.keys(a);
            if (i = l.length, r.keys(b).length !== i) return !1;
            for (; i--;)
                if (j = l[i], !r.has(b, j) || !D(a[j], b[j], c, d)) return !1
        }
        return c.pop(), d.pop(), !0
    };
    r.isEqual = function(a, b) {
        return D(a, b)
    }, r.isEmpty = function(a) {
        return null == a || (x(a) && (r.isArray(a) || r.isString(a) || r.isArguments(a)) ? 0 === a.length : 0 === r.keys(a).length)
    }, r.isElement = function(a) {
        return !(!a || 1 !== a.nodeType)
    }, r.isArray = m || function(a) {
        return "[object Array]" === k.call(a)
    }, r.isObject = function(a) {
        var b = typeof a;
        return "function" === b || "object" === b && !!a
    }, r.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(a) {
        r["is" + a] = function(b) {
            return k.call(b) === "[object " + a + "]"
        }
    }), r.isArguments(arguments) || (r.isArguments = function(a) {
        return r.has(a, "callee")
    }), "function" != typeof /./ && "object" != typeof Int8Array && (r.isFunction = function(a) {
        return "function" == typeof a || !1
    }), r.isFinite = function(a) {
        return isFinite(a) && !isNaN(parseFloat(a))
    }, r.isNaN = function(a) {
        return r.isNumber(a) && a !== +a
    }, r.isBoolean = function(a) {
        return !0 === a || !1 === a || "[object Boolean]" === k.call(a)
    }, r.isNull = function(a) {
        return null === a
    }, r.isUndefined = function(a) {
        return void 0 === a
    }, r.has = function(a, b) {
        return null != a && l.call(a, b)
    }, r.noConflict = function() {
        return d._ = e, this
    }, r.identity = function(a) {
        return a
    }, r.constant = function(a) {
        return function() {
            return a
        }
    }, r.noop = function() {}, r.property = function(a) {
        return function(b) {
            return null == b ? void 0 : b[a]
        }
    }, r.propertyOf = function(a) {
        return null == a ? function() {} : function(b) {
            return a[b]
        }
    }, r.matcher = r.matches = function(a) {
        return a = r.extendOwn({}, a),
            function(b) {
                return r.isMatch(b, a)
            }
    }, r.times = function(a, b, c) {
        var d = Array(Math.max(0, a));
        b = s(b, c, 1);
        for (var e = 0; e < a; e++) d[e] = b(e);
        return d
    }, r.random = function(a, b) {
        return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1))
    }, r.now = Date.now || function() {
        return (new Date).getTime()
    };
    var E = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        F = r.invert(E),
        G = function(a) {
            var b = function(b) {
                    return a[b]
                },
                c = "(?:" + r.keys(a).join("|") + ")",
                d = RegExp(c),
                e = RegExp(c, "g");
            return function(a) {
                return a = null == a ? "" : "" + a, d.test(a) ? a.replace(e, b) : a
            }
        };
    r.escape = G(E), r.unescape = G(F), r.result = function(a, b, c) {
        var d = null == a ? void 0 : a[b];
        return void 0 === d && (d = c), r.isFunction(d) ? d.call(a) : d
    };
    var H = 0;
    r.uniqueId = function(a) {
        var b = ++H + "";
        return a ? a + b : b
    }, r.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var I = /(.)^/,
        J = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        K = /\\|'|\r|\n|\u2028|\u2029/g,
        L = function(a) {
            return "\\" + J[a]
        };
    r.template = function(a, b, c) {
        !b && c && (b = c), b = r.defaults({}, b, r.templateSettings);
        var d = RegExp([(b.escape || I).source, (b.interpolate || I).source, (b.evaluate || I).source].join("|") + "|$", "g"),
            e = 0,
            f = "__p+='";
        a.replace(d, function(b, c, d, g, h) {
            return f += a.slice(e, h).replace(K, L), e = h + b.length, c ? f += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'" : d ? f += "'+\n((__t=(" + d + "))==null?'':__t)+\n'" : g && (f += "';\n" + g + "\n__p+='"), b
        }), f += "';\n", b.variable || (f = "with(obj||{}){\n" + f + "}\n"), f = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + f + "return __p;\n";
        try {
            var g = new Function(b.variable || "obj", "_", f)
        } catch (j) {
            throw j.source = f, j
        }
        var h = function(a) {
                return g.call(this, a, r)
            },
            i = b.variable || "obj";
        return h.source = "function(" + i + "){\n" + f + "}", h
    }, r.chain = function(a) {
        var b = r(a);
        return b._chain = !0, b
    };
    var M = function(a, b) {
        return a._chain ? r(b).chain() : b
    };
    r.mixin = function(a) {
        r.each(r.functions(a), function(b) {
            var c = r[b] = a[b];
            r.prototype[b] = function() {
                var a = [this._wrapped];
                return i.apply(a, arguments), M(this, c.apply(r, a))
            }
        })
    }, r.mixin(r), r.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(a) {
        var b = f[a];
        r.prototype[a] = function() {
            var c = this._wrapped;
            return b.apply(c, arguments), "shift" !== a && "splice" !== a || 0 !== c.length || delete c[0], M(this, c)
        }
    }), r.each(["concat", "join", "slice"], function(a) {
        var b = f[a];
        r.prototype[a] = function() {
            return M(this, b.apply(this._wrapped, arguments))
        }
    }), r.prototype.value = function() {
        return this._wrapped
    }, r.prototype.valueOf = r.prototype.toJSON = r.prototype.value, r.prototype.toString = function() {
        return "" + this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return r
    })
}.call(this);
var site = new function() {
    var a = this,
        b = /localhost|releases.aol.com|releases-staging.aol.com/,
        c = /localhost|releases-staging.aol.com/,
        d = /sandbox.aol.com/,
        e = /staging.sandbox.aol.com/;
    this.init = function() {}, this.isReleases = function() {
        return !!window.location.hostname.match(b)
    }, this.isReleasesNonProduction = function() {
        return !!window.location.hostname.match(c)
    }, this.isAMPLive = function() {
        return !a.isReleases() && !a.isAMPSandbox()
    }, this.isAMPSandbox = function() {
        var a = window.location.hostname;
        return !(!a.match(d) || a.match(e))
    }, this.createCookie = function(a, b, c, d) {
        if (c) {
            var e = new Date;
            e.setTime(e.getTime() + 24 * c * 60 * 60 * 1e3);
            var f = "; expires=" + e.toGMTString()
        } else var f = "";
        var g = "";
        null != d && void 0 != d && d.length > 0 && (g = "; domain=" + d), document.cookie = a + "=" + b + f + "; path=/" + g
    }, this.readCookie = function(a) {
        for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
            for (var e = c[d];
                " " == e.charAt(0);) e = e.substring(1, e.length);
            if (0 == e.indexOf(b)) return e.substring(b.length, e.length)
        }
        return null
    }, this.eraseCookie = function(a, b) {
        var c = "";
        null != b && void 0 != b && b.length > 0 && (c = "; domain=" + b), document.cookie = a + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/" + c
    }, this.isElementInViewport = function(a, b, c) {
        c = "number" == typeof c ? c : 0, b = "boolean" == typeof b && b, "function" == typeof jQuery && a instanceof jQuery && (a = a[0]);
        var d = a.getBoundingClientRect(),
            e = window.innerHeight || document.documentElement.clientHeight,
            f = window.innerWidth || document.documentElement.clientWidth;
        return b ? (0 + c >= d.top - e || 0 + c >= d.bottom - e) && (d.left >= 0 + c || d.right <= f) : d.top >= 0 + c && d.left >= 0 + c && d.bottom <= e && d.right <= f
    }
};
$(document).ready(function() {
    site.init()
});
var bonLazyLoad = new function() {
    var a = this;
    this.init = function() {
        a.lazyLoad()
    }, this.lazyLoad = function() {
        site.isReleases() ? ($(".lazy-load").lazyload({
            container: $(".content"),
            failure_limit: 100,
            skip_invisible: !0,
            threshold: 600,
            load: function() {
                a.onImgLoad(this)
            }
        }), $(document).ajaxStop(function() {
            $(".lazy-load").lazyload({
                container: $(".content"),
                failure_limit: 100,
                skip_invisible: !0,
                threshold: 600,
                load: function() {
                    a.onImgLoad(this)
                }
            })
        })) : ($(".lazy-load").lazyload({
            failure_limit: 100,
            skip_invisible: !0,
            threshold: 600,
            load: function() {
                a.onImgLoad(this)
            }
        }), $(document).ajaxStop(function() {
            $(".lazy-load").lazyload({
                failure_limit: 100,
                skip_invisible: !0,
                threshold: 600,
                load: function() {
                    a.onImgLoad(this)
                }
            })
        }))
    }, this.onImgLoad = function(a) {
        $(a).removeClass("lazy-load")
    }
};
jQuery(document).on("releases:init", function() {
    bonLazyLoad.init()
});
var bonStandard = new function() {
    var a = this;
    this.init = function() {
        a.impTag()
    }, this.impTag = function() {
        $(".module-standard a[data-imp-tag]").each(function() {
            var a = $(this).attr("data-imp-tag");
            $(".imp-tag").attr("src", ""), $(".imp-tag").attr("src", a)
        })
    }
};
jQuery(document).on("releases:init", function() {
    bonStandard.init()
});
var bonLatest = new function() {
    var a, b = this;
    this.init = function() {
        a = $(window).width(), b.handleTaboolaBlock(), b.loadMore(), $(window).resize(function() {
            a = $(window).width(), b.handleTaboolaBlock()
        })
    }, this.loadMore = function() {
        $(".latest-show-more").length && (b.totalLimit = $(".subitems").data("total-limit") || 1e3, $("body").on("click", ".latest-show-more", function() {
            if (event.preventDefault(), $(this).hasClass("disabled")) return !1;
            $(this).addClass("disabled");
            var a = $(this).parents(".module-the-latest"),
                c = a.find(".subitems .subitem:last").data("published-at"),
                d = a.find(".subitems").data("limit"),
                e = a.find(".subitems").data("offset"),
                f = a.find(".subitems").data("compound"),
                g = a.data("id"),
                h = a.find(".subitems").data("channel-key"),
                i = a.find(".subitems").data("latest-channel-key"),
                j = "";
            if (c && g && h && i) {
                var k = "/api/v2/the_latest/" + i + "?limit=" + d + "&before=" + c + "&format=html&tile=" + g + "&channel=" + h + "&index_offset=" + e;
                site.isAMPSandbox() ? k = "http://releases-staging.aol.com" + k : site.isAMPLive() && (k = "/api/modules/latest-loader.json?endpoint=" + i + "&format=html&limit=" + d + "&before=" + c + "&tile=" + g + "&channel=" + h + "&index_offset=" + e), f && (k = k + "&compound=" + f), $.get(k, function(c) {
                    if (void 0 !== c.the_latest) {
                        for (var d = 0; d < c.the_latest.length; d++) j += c.the_latest[d].content;
                        var f = a.find(".subitems");
                        f.data("offset", e + c.the_latest.length), (c.articles_remaining <= 0 || 0 == c.the_latest.length || f.data("offset") >= b.totalLimit) && a.find(".latest-show-more").hide(), j && a.find(".subitems").append(j), bonLazyLoad.lazyLoad()
                    }
                    $(".latest-show-more").removeClass("disabled")
                })
            } else $(".latest-show-more").removeClass("disabled")
        }))
    }, this.handleTaboolaBlock = function() {
        if ($(".taboola-wrapper").length) {
            var b = $(".taboola-wrapper").prev(".subitem").add($(".taboola-wrapper").next(".subitem"));
            $(".taboola-wrapper").prevAll(".subitem").length % 2 == 1 && a < 1100 ? b.hide() : b.show()
        }
    }
};
jQuery(document).on("releases:init", function() {
    bonLatest.init()
});
var bonEveryonesSearching = new function() {
    this.init = function(a) {
        if ($(".module-everyones-searching").length) {
            $("body").on("submit", ".module-everyones-searching form", function(a) {
                $(".module-everyones-searching .submit-button").attr("href");
                $(".module-everyones-searching .submit-button").attr("href", "//search.aol.com/aol/search?q=" + $(".module-everyones-searching .search-input").val());
                try {
                    bN.click($(".module-everyones-searching .submit-button").get(0))
                } catch (b) {}
            }), $("body").on("click", ".module-everyones-searching .submit-button", function(a) {
                a.preventDefault(), a.stopPropagation(), $(".module-everyones-searching form").trigger("submit")
            });
            var b = $('.module-everyones-searching input[name="s_it"]'),
                c = $("#header-s_it").attr("data-default-value");
            "string" == typeof c && c.length && b.attr("value", c)
        }
    }
};
jQuery(document).on("releases:init", function() {
    bonEveryonesSearching.init()
});
var bonHoroscopes = new function() {
    this.init = function() {
        $(".module-horoscopes").length && ($(".choose-your-sign-select select").on("change", function() {
            var a = $(this).parents(".bon-grid-item.module-horoscopes"),
                b = $(this).val(),
                c = $(this).find(":selected").data("index");
            a.find(".horoscope." + b);
            a.find(".horoscope").addClass("hidden"), a.find(".horoscope." + b).removeClass("hidden");
            var d = {
                itc: "1",
                elm: "dropdown"
            };
            "undefined" != typeof myRapidInstance && $(".template-homepage").length > 0 && myRapidInstance.beaconClick("app-horoscope", b, c, d)
        }), $(".choose-your-sign .sign").on("click", function() {
            var a = $(this).parents(".bon-grid-item.module-horoscopes"),
                b = $(this).data("sign"),
                c = a.find(".horoscope." + b),
                d = $(this).data("index");
            a.find(".choose-your-sign").addClass("hidden"), a.find(".see-all").addClass("hidden"), a.find(".choose-your-sign-select").removeClass("hidden"), a.find(".choose-your-sign-select select").val(b), a.find(".horoscope").addClass("hidden"), a.find(".button").addClass("see-full-horoscope"), $(c).removeClass("hidden");
            var e = {
                itc: "1",
                elm: "sign"
            };
            "undefined" != typeof myRapidInstance && $(".template-homepage").length > 0 && myRapidInstance.beaconClick("app-horoscope", b, d, e)
        }), $(".choose-your-sign .sign").on("keyup", function(a) {
            13 == a.which && $(this).click()
        }), $(".bon-grid-item.module-horoscopes").on("click", "h4.select", function() {
            $(this).parents(".bon-grid-item.module-horoscopes").find(".horoscope").hide().end().find(".choose-your-sign").show().end().find(".i-wr").addClass("select").end().find("h4").html("Choose your sign:").end().find(".i-wr>a").show().end().find("h4.select").removeClass("select").removeAttr("role").end().find("h4 span.horoscope-hidden-accessible").html("")
        }), $(".bon-grid-item.module-horoscopes").on("keyup", "h4.select", function(a) {
            13 == a.which && $(this).click()
        }))
    }
};
jQuery(document).on("releases:init", function() {
    bonHoroscopes.init()
});
var bonMarkets = new function() {
    var a = this;
    this.init = function() {
        $(".module-markets").length && ($(".module-markets .tab-nav li").on("click", function() {
            var a = $(this).data("href"),
                b = $(this).parents(".module-markets");
            b.find(".tab").hide(), b.find(".tab." + a).show(), b.find(".tab-nav li").removeClass("active"), $(this).addClass("active")
        }), $(".module-markets .get-quote a").on("click", function(a) {
            var b = $(".module-markets .get-quote input").val();
            b && ($(".module-markets .get-quote a").attr("href", "//www.aol.com/stock-quotes/lookup/" + b), window.location.href = "//www.aol.com/stock-quotes/lookup/" + b)
        }), $(".module-markets .get-quote input").on("focusin", function() {
            $(document).on("keypress", a.keypressListener)
        }), $(".module-markets .get-quote input").on("focusout", function() {
            $(document).off("keypress", a.keypressListener)
        }))
    }, this.keypressListener = function(a) {
        if (13 == a.which) {
            var b = $(".module-markets .get-quote input").val();
            b && ($(".module-markets .get-quote a").attr("href", "//www.aol.com/stock-quotes/lookup/" + b), bN.click($(".module-markets .get-quote a").get(0)), window.location.href = "//www.aol.com/stock-quotes/lookup/" + b)
        }
    }
};
jQuery(document).on("releases:init", function() {
    bonMarkets.init()
});
var bonZillow = new function() {
    var a = this;
    this.init = function() {
        a.findAHome(), a.findAHomeHomepage()
    }, this.findAHome = function() {
        $(".module-zillow-find-a-home").length && !$(".bon-grid-item.homepage").length && ($("body").on("click", ".module-zillow-find-a-home .action-selector .action", function() {
            var a = $(this).parents(".bon-grid-item.module-zillow-find-a-home"),
                b = $(this).data("action");
            a.find(".action").removeClass("selected").removeAttr("selected"), a.find("[data-action='" + b + "']").addClass("selected").prop("selected", "selected"), a.find(".action-selector, .action-form").removeClass("buy rent value").addClass(b)
        }), $(".option-select select").change(function() {
            var a = $(this).parents(".bon-grid-item.module-zillow-find-a-home"),
                b = $(this).val().toLowerCase();
            a.find(".action").removeClass("selected").removeAttr("selected"), a.find("[data-action='" + b + "']").addClass("selected").prop("selected", "selected"), a.find(".action-selector, .action-form").removeClass("buy rent value").addClass(b)
        }), $("body").on("click", ".module-zillow-find-a-home .search", function() {
            var a = $(this).parents(".bon-grid-item.module-zillow-find-a-home"),
                b = a.find(".action.selected").data("action"),
                c = a.find(".location input").val(),
                d = a.find(".price .from input").val(),
                e = a.find(".price .to input").val(),
                f = a.find(".beds select").val() + "-",
                g = a.find(".bathrooms select").val() + "-",
                h = "";
            "rent" == b ? propertyType = "fr" : "value" == b ? (propertyType = "", d = "", e = "", f = "", g = "") : propertyType = a.find(".property-type select").val(), h = a.hasClass("finance") ? "fin_hub_cw_searchcta" : a.hasClass("finance-real-estate") ? "fin_re_cw_searchcta" : "fin_cw_searchcta", "undefined" != typeof bN && (bN.set("category", b, 1), bN.ping("zillow-find-a-home-submit")), url = "", url = "http://www.zillow.com/search/WidgetHomeSearch.htm?propertyType=" + propertyType + "&searchbox=" + c + "&minPrice=" + d + "&maxPrice=" + e + "&bed=" + f + "&bath=" + g + "&ga_utm_source=dailyfinance&ga_utm_medium=referral&ga_utm_content=map&ga_utm_campaign=" + h + "&cbpartner=dailyfinance", window.open(url, "_blank")
        }))
    }, this.findAHomeHomepage = function() {
        if ($(".module-zillow-find-a-home.bon-grid-item.homepage").length) {
            var b = "/api/v1/weather/local";
            site.isReleases() && (b = "http://www.aol.com/api/v1/weather/local"), site.isReleases() && (b += "?zip=11217"), $.getJSON(b, function(a) {
                $(".module-zillow-find-a-home.homepage #zillow-home-search").val(a.local.location.zip)
            }), $(".module-zillow-find-a-home .category").click(function() {
                $(this).hasClass("active") || ($(".module-zillow-find-a-home .category").removeClass("active"), $(this).addClass("active")), "undefined" != typeof bN && (bN.set("category", $(".module-zillow-find-a-home .category.active").data("action"), 1), bN.ping("zillow-find-a-home-homepage-tab-select"))
            }), $(".module-zillow-find-a-home .category").on("keyup", function(a) {
                13 == a.which && $(this).click()
            }), $("#zillow-home-search").click(function() {
                this.select()
            }), $(".module-zillow-find-a-home.bon-grid-item.homepage .btn-cta").on("click", function() {
                a.zillowLookup($(this).parents(".bon-grid-item.module-zillow-find-a-home"))
            }), $("#zillow-home-search, .module-zillow-find-a-home.bon-grid-item.homepage .btn-cta").keypress(function(b) {
                13 == b.keyCode && a.zillowLookup($(this).parents(".bon-grid-item.module-zillow-find-a-home"))
            })
        }
    }, this.zillowLookup = function(a) {
        var b = a.find(".category.active").data("action"),
            c = a.find("#zillow-home-search").val();
        propertyType = "rent" == b ? "fr" : "value" == b ? "" : "fs", "undefined" != typeof bN && (bN.set("category", b, 1), bN.ping("zillow-find-a-home-homepage-submit")), url = "", url = "http://www.zillow.com/search/WidgetHomeSearch.htm?propertyType=" + propertyType + "&searchbox=" + c + "&ga_utm_source=aol_homepage&ga_utm_medium=referral&ga_utm_content=map&ga_utm_campaign=homesearchHP&cbpartner=dailyfinance", window.open(url, "_blank")
    }
};
jQuery(document).on("releases:init", function() {
    bonZillow.init()
});
var bonEventCoverage = new function() {
    this.init = function() {
        $(".bon-grid-item.module-event-coverage").length && $(".bon-grid-item.module-event-coverage .theme-superbowl-51").length && $('.module-event-coverage .game-state span:contains("EST")').parent().parent().addClass("pre-game")
    }
};
jQuery(document).on("releases:init", function() {
    bonEventCoverage.init()
});
var bonAOLOnVideo = new function() {
    var a = this,
        b = {
            updateTitle: !1
        },
        c = [];
    this.init = function() {
        b.$module = $(".module-aol-on-video"), b.$module.length && (b.$shareFb = b.$module.find(".share-fb"), b.$shareEmail = b.$module.find(".share-email"), b.bid = b.$module.find(".video-wrap").data("bid"), a.setupPlayer(), a.impTag(), a.scrollToPlayer())
    }, this.setupPlayer = function() {
        if (b.$module.find(".vdb_player").length) var c = setInterval(function() {
            var d = b.$module.find(".vdb_player").get(0).vdb_Player;
            void 0 !== d && (clearInterval(c), a.setupPlayerEvents(d))
        }, 100)
    }, this.setupPlayerEvents = function(c) {
        c.addEventListener(vdb.VIDEO_END, function(a) {
            b.updateTitle = !0
        }), c.addEventListener(vdb.VIDEO_START, function(a) {
            try {
                if (a.data.title && b.updateTitle && (b.$module.find("h3").text(a.data.title), a.data.videoId && b.$shareFb.length && b.$shareEmail.length)) {
                    var c = "https://www.aol.com/?vid=" + a.data.videoId;
                    b.bid && (c += "&bid=" + b.bid);
                    var d = "https://www.facebook.com/sharer.php?t=" + encodeURIComponent(a.data.title) + "&u=" + encodeURIComponent(c),
                        e = "mailto:?subject=" + encodeURIComponent("Check this out: " + a.data.title) + "&body=" + encodeURIComponent(c);
                    b.$shareFb.attr("href", d), b.$shareEmail.attr("href", e)
                }
            } catch (f) {}
            try {
                a.data.videoId && b.$module.attr("data-video-id", a.data.videoId)
            } catch (f) {}
        }), b.$module.find(".video-wrap").data("auto-pause") && (b.autoRestart = !1, b.$module.find(".video-wrap").data("auto-restart") && (b.autoRestart = !0), a.pausePlayerOnFocus(c))
    }, this.pausePlayerOnFocus = function(a) {
        b.inFocusConsecutive = 0, b.pausedAutomatically = !1;
        setInterval(function() {
            document.hasFocus() ? (b.inFocusConsecutive < 10 && b.inFocusConsecutive++, b.autoRestart && b.inFocusConsecutive > 3 && b.pausedAutomatically && (a.play(), b.pausedAutomatically = !1)) : (a.pause(), b.inFocusConsecutive = 0, b.pausedAutomatically = !0)
        }, 250)
    }, this.setPlayer = function(a) {
        c.push(a.player)
    }, this.pauseOtherVideos = function() {
        $.each(c, function(a, b) {
            b != window.playerObj && b.pause()
        })
    }, this.play = function(b) {
        window.playerObj = b.player, a.pauseOtherVideos(), $(".module-aol-on-video .article-body").removeClass("hide-body")
    }, this.impTag = function() {
        $(".module-aol-on-video a[data-imp-tag]").each(function() {
            var a = $(this).attr("data-imp-tag");
            $(".imp-tag").attr("src", ""), $(".imp-tag").attr("src", a)
        })
    }, this.scrollToPlayer = function() {
        location.search.indexOf("vid=") > -1 && !site.isReleases() && $("html, body").animate({
            scrollTop: $(".module-aol-on-video").offset().top - $(".l-navbar").height()
        }, 600)
    }
};
jQuery(document).on("releases:init", function() {
    bonAOLOnVideo.init()
});
var bonCountdown = new function() {
    var a = this;
    this.init = function() {
        a.countdown()
    }, this.countdown = function() {
        $(".module-countdown .countdown, .sports-countdown, .module-countdown-hp .countdown, .module-countdown-black-friday .countdown").each(function() {
            var b = $(this),
                c = new Date(b.data("date")).getTime(),
                d = setInterval(function() {
                    a.doCountdown(b, d, c, "day")
                }, 1e3);
            a.doCountdown(b, d, c, "day")
        }), $(".timeline-countdown").each(function() {
            var b = $(this),
                c = new Date(b.data("date")).getTime(),
                d = setInterval(function() {
                    a.doCountdown(b, d, c, "month")
                }, 1e3);
            a.doCountdown(b, d, c, "month")
        })
    }, this.dateDiff = function(a, b, c) {
        switch (a /= 1e3, b /= 1e3, a > b && (b = [a, a = b][0]), c) {
            case "year":
                var d = {
                    year: 0,
                    month: 0,
                    day: 0,
                    hour: 0,
                    minute: 0,
                    second: 0
                };
                break;
            case "month":
                var d = {
                    month: 0,
                    day: 0,
                    hour: 0,
                    minute: 0,
                    second: 0
                };
                break;
            case "day":
                var d = {
                    day: 0,
                    hour: 0,
                    minute: 0,
                    second: 0
                };
                break;
            default:
                var d = {
                    year: 0,
                    month: 0,
                    day: 0,
                    hour: 0,
                    minute: 0,
                    second: 0
                }
        }
        return Object.keys(d).forEach(function(c) {
            for (; b >= (dee3 = strtotime("+1 " + c, a));) a = dee3, ++d[c]
        }), d
    }, this.doCountdown = function(b, c, d, e) {
        var f = (new Date).getTime();
        if ((d - f) / 1e3 >= 0) {
            var g, h, i, j, k, l, m = a.dateDiff(d, f, e);
            switch (e) {
                case "year":
                    g = m.year, h = m.month, i = m.day, j = m.hour, k = m.minute, l = m.second;
                    break;
                case "month":
                    h = m.month, i = m.day, j = m.hour, k = m.minute, l = m.second;
                    break;
                case "day":
                    i = m.day, j = m.hour, k = m.minute, l = m.second;
                    break;
                default:
                    g = m.year, h = m.month, i = m.day, j = m.hour, k = m.minute, l = m.second
            }
            b.find(".years .text").text(g), b.find(".months .text").text(h), b.find(".days .text").text(i), b.find(".hours .text").text(j), b.find(".minutes .text").text(k), b.find(".seconds .text").text(l)
        } else clearInterval(c), b.parent().addClass("countdown-over"), b.remove()
    }
};
jQuery(document).on("releases:init", function() {
    bonCountdown.init()
});
var bonPromo = new function() {
    this.init = function() {}
};
jQuery(document).on("releases:init", function() {
    bonPromo.init()
});
var bonEqualHeights = new function() {
        this.equalize = function() {
            $(".bon-grid-item.news-election-2016").length && ($(window).width() > 1e3 ? $("#cw-full-6 .module-twitter-user-timeline iframe").height($("#cw-full-5 .bon-grid-item").height() - 34) : $("#cw-full-6 .module-twitter-user-timeline iframe").height(300))
        }
    },
    bonTemplate = new function() {
        var a = this;
        this.build = function() {
            a.isTouchDevice() ? $("#bon-cw, #bon-rr, #bon-top").addClass("touch") : $("#bon-cw, #bon-rr, #bon-top").addClass("no-touch"), "function" == typeof bonTemplate.ads && bonTemplate.ads(), a.respond(), a.socials(), a.coverImages(), a.tapeHeight(), $(document).trigger("releases:init"), $(window).load(function() {
                bonEqualHeights.equalize(), a.tapeHeight()
            }), $(window).resize(function() {
                $(window).width();
                a.coverImages(), a.tapeHeight(), bonEqualHeights.equalize(), "object" == typeof bonTwitter && bonTwitter.setWidth(), "object" == typeof bonCandidatePolicies && bonCandidatePolicies.setSelectWidth(), "object" == typeof bonTimelineSocialShare && bonTimelineSocialShare.windowResize()
            })
        }, this.respond = function() {
            if ($("#cw-right.homepage").length && $(window).width() < 754) {
                var a = '<div id="bon-rr-respond">' + $("#bon-rr").html() + "</div>";
                $("#bon-rr-respond").remove(), $("#bon-rr").remove(), $("#cw-right-300").before(a)
            }
        }, this.isTouchDevice = function() {
            return 1 == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
        }, this.tapeHeight = function() {
            $(".partner-wrap").each(function() {
                if ($(this).hasClass("multiline")) {
                    var a = $(this).find(".partner"),
                        b = $(this).find(".partner b").first(),
                        c = $(this).find(".partner b").last(),
                        d = a.height() + parseInt(a.css("padding-top").replace("px", "")) + parseInt(a.css("padding-bottom").replace("px", ""));
                    b.css({
                        "border-width": "0 0 " + d + "px 14px"
                    }), c.css({
                        "border-width": d + "px 14px 0 0"
                    })
                }
            })
        }, this.socials = function() {
            $("body").on("click", ".social-button", function(a) {
                a.preventDefault();
                var b = $(this),
                    c = 510,
                    d = 440;
                b.hasClass("navicon-email-circle") && (c = 382, d = 477);
                var e = void 0 != window.screenLeft ? window.screenLeft : screen.left,
                    f = void 0 != window.screenTop ? window.screenTop : screen.top,
                    g = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
                    h = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
                    i = g / 2 - c / 2 + e,
                    j = h / 2 - d / 2 + f,
                    k = window.open(b.attr("href"), "Share", "menubar=0,resizable=1,width=" + c + ",height=" + d + ", top=" + j + ", left=" + i);
                window.focus && k.focus(), "undefined" != typeof bN && (b.attr("class").indexOf("navicon-facebook") > -1 && bN.set("dL_shareType", "fb_share", 1), b.attr("class").indexOf("navicon-twitter") > -1 && bN.set("dL_shareType", "twitter", 1), b.attr("class").indexOf("navicon-pinterest") > -1 && bN.set("dL_shareType", "pinterest", 1), b.attr("class").indexOf("navicon-email") > -1 && bN.set("dL_shareType", "email", 1), bN.set("dL_shareURL", b.attr("data-url"), 1), bN.ping("aol-share"))
            })
        }, this.ads = function() {
            $(".bon-grid-item.ad").each(function() {
                var a = $(this).find(".ad-container");
                htmlAdWH(a.data("magic-number"), "RR", "RR", a.attr("id"), a.attr("id"))
            })
        }, this.coverImages = function() {
            $(".bon-grid-item .cover").each(function() {
                var a, b, c = $(this),
                    d = c.height(),
                    e = c.width(),
                    f = e / d,
                    g = c.find("img"),
                    h = g.height(),
                    i = g.width(),
                    j = i / h,
                    k = 0,
                    l = 0;
                f > j ? (b = e, a = h * b / i) : (a = d, b = i * a / h), b > e && (k = (b - e) / 2), a > d && (l = (a - d) / 2), g.css({
                    marginLeft: "-" + k + "px",
                    marginTop: "-" + l + "px",
                    height: a,
                    width: b
                })
            })
        }, this.isChannel = function(a) {
            return $("html." + a).length || $(".bon-grid-item." + a).length || $("*[data-main-channel=" + a + "]").length
        }
    };
jQuery(document).ready(function(a) {
    bonTemplate.build()
});
var bonCause = new function() {
    var a = this;
    this.init = function() {
        $(".module-cause").length && ($(window).on("load", function() {
            a.respond()
        }), $(window).on("resize", function() {
            a.respond()
        }), $(window).on("scroll", _.debounce(function() {
            site.isElementInViewport($(".module-cause"), !0, 0) && (site.imp_fired = !0, a.impTag())
        }, 50)))
    }, this.respond = function() {
        var a = $("#cw-left .module-cause"),
            b = $("#cw-left").outerHeight(),
            c = $("#cw-right").outerHeight();
        b + (a.is(":visible") ? 0 : a.outerHeight()) + -20 <= c ? a.show() : a.hide()
    }, this.impTag = function() {
        $(".module-cause a[data-imp-tag]").each(function() {
            var a = $(this).attr("data-imp-tag");
            $(".cause-imp-tag").attr("src", ""), $(".cause-imp-tag").attr("src", a)
        })
    }
};
jQuery(document).on("releases:init", function() {
    bonCause.init()
});
var bonBoardOfAdvisors = new function() {
    var a = this;
    this.init = function() {
        $(".module-board-of-advisors").length && $(window).on("scroll", _.debounce(function() {
            site.isElementInViewport($(".module-board-of-advisors"), !0, 0) && (site.imp_fired = !0, a.impTag())
        }, 50))
    }, this.impTag = function() {
        $(".module-board-of-advisors a[data-imp-tag]").each(function() {
            var a = $(this).attr("data-imp-tag");
            $(".board-of-advisors-imp-tag").attr("src", ""), $(".board-of-advisors-imp-tag").attr("src", a)
        })
    }
};
jQuery(document).on("releases:init", function() {
    bonBoardOfAdvisors.init()
});
var bonChooseNews = new function() {
    var a = this;
    this.init = function() {
        a.loadInitialProviders(), a.selectNewsSource()
    }, this.loadInitialProviders = function() {
        if (a.setupBaseProviderArray(), providersString = site.readCookie("choose-news-providers-6"), providersString) {
            providersRawArray = providersString.split("|");
            for (var b = 0; b < providersRawArray.length; b++) providerKeyAndValue = providersRawArray[b].split(":"), providerKeyAndValue && $('.choose-news[data-channel="' + providerKeyAndValue[0] + '"] .provider.' + providerKeyAndValue[1]).length && (a.providers[providerKeyAndValue[0]] = providerKeyAndValue[1])
        }
        $.each(a.providers, function(a, b) {
            channelChooseNews = $('.choose-news[data-channel="' + a + '"]'), channelChooseNews.find(".provider." + b).removeClass("unselected"), channelChooseNews.find('.select-provider option[data-provider="' + b + '"]').attr("selected", !0)
        })
    }, this.selectNewsSource = function() {
        var b = $(".choose-news .select-provider");
        b.off("change"), b.on("change", function() {
            var b = $(this).val(),
                c = $(this).parents(".choose-news"),
                d = c.data("channel");
            c.find(".provider:not(." + b + ")").addClass("unselected"), c.find(".provider." + b).removeClass("unselected"), a.providers[d] = b, a.setProvidersCookie();
            try {
                bN.ping("choose-news-provider", [
                    ["selected-channel", d, 1],
                    ["selected-provider", b, 1]
                ])
            } catch (f) {}
            var e = {
                itc: "1",
                elm: "filter"
            };
            "undefined" != typeof myRapidInstance && myRapidInstance.beaconClick("cn-" + d, b, "1", e)
        })
    }, this.setupBaseProviderArray = function() {
        a.providers || (a.providers = {}, a.providers.news = "aol", a.providers.entertainment = "aol", a.providers.lifestyle = "aol", a.providers.sports = "yahoo_sports", a.providers.finance = "aol")
    }, this.setProvidersCookie = function() {
        providersString = "news:" + a.providers.news + "|entertainment:" + a.providers.entertainment + "|lifestyle:" + a.providers.lifestyle + "|sports:" + a.providers.sports + "|finance:" + a.providers.finance, site.createCookie("choose-news-providers-6", providersString)
    }
};
jQuery(document).on("releases:init", function() {
    bonChooseNews.init()
});
var bonLocalNewsHomepage = new function() {
    var a = this,
        b = {};
    this.suggestionsTimeoutId = 0, this.renderArticles = function(c) {
        var d = $(".module-local-news-homepage .local"),
            e = (d.data("mnid"), d.data("msiz")),
            f = d.data("lnid"),
            g = (d.data("plid"), 100);
        if (void 0 !== c.local.news.errorMessage) b.$module.find(".news-articles").html('<li class="no-dot">No local news available</li>'), b.$module.find(".read-more-local-news a").hide();
        else if (void 0 !== c.local.news && void 0 !== c.local.news.headlines) {
            b.$module.find(".news-articles").html("");
            for (var h = 0; h < c.local.news.headlines.length; h++)
                if (h < 3) {
                    var i = "itc:0;cpos:" + (h + 1) + ";",
                        j = c.local.news.headlines[h].title,
                        k = c.local.news.headlines[h].href,
                        l = $("<li />"),
                        m = $('<a class="link-out" target="_blank" href="' + k + '" data-beacon=\'{"p":{"lnid":"' + f + h + '","msiz":"' + e + '"}}\' data-ylk="' + i + '">');
                    j.length > g && (j = a.trimStringAtWord(j, g)), m.append(j), l.append(m), b.$module.find(".news-articles").append(l)
                } b.$module.find(".read-more-local-news a").show()
        }
        if (void 0 !== c.local.weather.items) {
            b.$module.find(".local-weather").html("");
            for (var n = $('<div class="local-weather-days"/>'), o = $('<div class="local-weather-values" />'), p = {
                    0: "602",
                    1: "601",
                    2: "611",
                    3: "603",
                    4: "603",
                    5: "60E",
                    6: "60E",
                    7: "60E",
                    8: "60E",
                    9: "604",
                    10: "60E",
                    11: "60C",
                    12: "60C",
                    13: "608",
                    14: "60A",
                    15: "608",
                    16: "60A",
                    17: "614",
                    18: "60E",
                    19: "60B",
                    20: "60B",
                    21: "60B",
                    22: "60B",
                    23: "600",
                    24: "600",
                    25: "609",
                    26: "605",
                    27: "616",
                    28: "615",
                    29: "616",
                    30: "615",
                    31: "607",
                    32: "607",
                    33: "607",
                    34: "607",
                    35: "610",
                    36: "612",
                    37: "603",
                    38: "60D",
                    39: "60C",
                    40: "60C",
                    41: "60A",
                    42: "60A",
                    43: "608",
                    44: "60F",
                    45: "60C",
                    46: "60A",
                    47: "60D"
                }, h = 0; h < c.local.weather.items.length; h++)
                if (h < 2) {
                    var j = c.local.weather.items[h].day,
                        q = $('<div class="day" />');
                    1 == h && (j = "Tomorrow"), q.append(j), n.append(q);
                    var r = c.local.weather.items[h].icon_code,
                        s = c.local.weather.items[h].current_temp,
                        t = c.local.weather.items[h].max_temp,
                        u = c.local.weather.items[h].min_temp,
                        v = $('<div class="value"/>'),
                        w = p[r],
                        x = t ? "" : "visiblyHidden",
                        y = u ? "" : "visiblyHidden";
                    1 == h ? (v.append('<img alt="Weather Icon" class="icon-styles" src=" https://s.aolcdn.com/aoldotcom-releases/weather/UniE' + w + '-g.svg" />'), v.append('<div class="max-min"><span class="max">' + t + '°</span>/<span class="min">' + u + "°</span></div>")) : (v.addClass("current"), v.append('<img alt="Weather Icon" class="icon-styles" src=" https://s.aolcdn.com/aoldotcom-releases/weather/UniE' + w + '-g.svg" />'), v.append('<div class="current"><span class="current">' + s + "°</span></div>"), v.append('<div class="max-min"><div class="max navicon-high-temp ' + x + '">' + t + '°</div><div class="min navicon-low-temp ' + y + '">' + u + "°</div></div>")), o.append(v)
                } b.$module.find(".local-weather").append(n), b.$module.find(".local-weather").append(o), b.$module.find(".below").addClass("weather")
        }
        b.$module.find(".local-loading").remove(), b.$module.find(".local").show(), $(".weather-suggestions").hide()
    }, this.trimStringAtWord = function(a, b) {
        var c = $.trim(a).substring(0, b - 2);
        return c = -1 == c.lastIndexOf(" ") ? c.trim() : c.split(" ").slice(0, -1).join(" ").trim() + "..."
    }, this.updateHeader = function(c) {
        var d = "";
        void 0 !== c.local.location && void 0 !== c.local.location.errorCode && 0 == c.local.location.errorCode ? (d = void 0 !== c.local.location.city && c.local.location.city ? c.local.location.city : c.local.location.zip, $(".local-news-search input").attr("placeholder", "ZIP or City"), b.$module.find(".local").removeClass("not-found")) : d = a.noLocationSet(), null == d && (d = a.noLocationSet()), b.$module.find(".location .text").text(d || "")
    }, this.zipIsValid = function(a) {
        return /^\b\d{5}(-\d{4})?\b$/.test(a)
    }, this.woeidIsValid = function(a) {
        return !0
    }, this.noLocationSet = function() {
        return $(".local-news-search input").attr("placeholder", "ZIP or City"), b.$module.find(".local").addClass("not-found"), "Set your location"
    }, this.showError = function(a, b) {
        b.find(".local-news-search").append('<div class="error">' + a + "</div>")
    }, this.saveZip = function(c) {
        var d = c.find(".weather-suggestions");
        c.find(".error").remove(), d.empty(), d.hide();
        var e = c.find(".local-news-search input").val();
        if (e)
            if (a.zipIsValid(e)) {
                var f = new $.Event("window.local.changeLocation");
                f.local = {
                    changeLocation: e
                }, $(document).trigger(f), site.isReleases() ? a.fetchData(e) : a.fetchData(), b.$module.find(".local-news-show-search-button").removeClass("hidden"), b.$module.find(".local-news-search").addClass("hidden")
            } else a.showError("Please enter a valid ZIP code", c)
    }, this.saveAddress = function(c, d) {
        var e = c.find(".weather-suggestions");
        if (c.find(".error").remove(), e.empty(), e.hide(), d) {
            var f = new $.Event("window.local.changeLocation");
            f.local = {
                changeAddress: d
            }, $(document).trigger(f), site.isReleases(), a.fetchData(d), b.$module.find(".local-news-show-search-button").removeClass("hidden"), b.$module.find(".local-news-search").addClass("hidden")
        }
    }, this.fetchData = function(b) {
        !site.isReleases() || null != b && null != b.woeid || (b || (b = {}), b.zip = "11217");
        var c = "https://www.aol.com/api/v1/weather/local";
        window.location.hostname.match(".sandbox.aol.com") && (c = "/api/v1/weather/local"), site.isReleases() && (c = "https://weatherhub.sandbox.aol.com/api/v1/weather/local"), b && b.zip ? c = c + "?zip=" + b.zip : b && b.woeid && (c = c + "?woeid=" + b.woeid), b && (b.zip || b.woeid) && $.getJSON(c, function(b) {
            a.updateHeader(b), a.renderArticles(b)
        })
    }, this.showSuggestions = function(a, c) {
        var d = this;
        if ("" != a.trim()) {
            var e = "https://www.aol.com/amp-proxy/api/weather/addresses/";
            window.location.hostname.match(".sandbox.aol.com") && (e = "/amp-proxy/api/weather/addresses/"), site.isReleases() && (e = "https://weatherhub.sandbox.aol.com/amp-proxy/api/weather/addresses/"), e = e + encodeURIComponent(a) + "/?country=US";
            var f = !1;
            b.$module.data("firstsuggestion", ""), $.ajax({
                url: e,
                type: "get",
                dataType: "jsonp",
                success: function(e) {
                    c.empty(), e.addresses && e.addresses.length <= 1 && d.zipIsValid(a) && (f = !0);
                    var g = !1;
                    $.each(e.addresses, function(d, e) {
                            if ("US" == e.country_code) {
                                var h = $('<li class="bN" data-beacon=\'{"p": {"lnid": "zip-suggestion"}}\'></li>');
                                null != e.locality && void 0 != e.locality && ($(h).text(e.full_display_name), $(h).attr("data-latitude", e.latitude), $(h).attr("data-longitude", e.longitude), $(h).attr("data-woeid", e.woeid), null != e.postal_code && void 0 != e.postal_code && $(h).attr("data-zip", e.postal_code), f && (e.zip = a, $(h).attr("data-zip", a)), $(h).data("address", e), g || (b.$module.data("firstsuggestion", e), g = !0), c.append(h))
                            }
                        }),
                        c.find("li").length > 0 && 1 != this.saved && $(".local-news-search input").is(":focus") && c.show()
                },
                error: function(a, b, c) {
                    console.log("error", a, b, c)
                }
            })
        } else c.empty(), c.hide()
    }, this.saveSelectedLocation = function(b) {
        console.log("saveSelectedLocation "), console.log(b);
        var c = $(b).data("longitude"),
            d = $(b).data("latitude"),
            e = $(b).data("zip"),
            f = ($(b).data("woeid"), $(b).data("address")),
            g = "https://www.aol.com/amp-proxy/api/weather/addresses/";
        window.location.hostname.match(".sandbox.aol.com") && (g = "/amp-proxy/api/weather/addresses/"), site.isReleases() && (g = "https://weatherhub.sandbox.aol.com/amp-proxy/api/weather/addresses/"), g = g + d + "/" + c + "/", f && f.woeid ? a.saveAddress($(".module-local-news-homepage"), f) : e && a.zipIsValid(e) && ($(".local-news-search input").val(e), a.saveZip($(".module-local-news-homepage")))
    }, this.init = function() {
        $(".module-local-news-homepage").length && (b.$module = $(".module-local-news-homepage"), a.fetchData(), $(document).on("window.local.refresh", function(b) {
            a.fetchData()
        }), $("body").on("submit", ".module-local-news-homepage .local-news-search", function(a) {
            a.preventDefault();
            var b = $(this).parents(".module-local-news-homepage"),
                c = b.find(".save");
            try {
                void 0 !== window.bN && window.bN && window.bN.click && (window.bN.extractIds(c[0]), window.bN.click(a))
            } catch (d) {}
            b.find(".save").trigger("click")
        }), $("body").on("click", ".module-local-news-homepage .location, .module-local-news-homepage .local-news-show-search-button", function(a) {
            b.$module.find(".local-news-show-search-button").addClass("hidden"), b.$module.find(".local-news-search").removeClass("hidden");
            var c = {
                itc: "1",
                elm: "change_location"
            };
            "undefined" != typeof myRapidInstance && myRapidInstance.beaconClick("cn-weather", "change_location", "1", c)
        }), $("body").on("click", ".module-local-news-homepage .save", function(b) {
            var c = $(this).parents(".module-local-news-homepage");
            c.data("firstsuggestion") ? a.saveAddress(c, c.data("firstsuggestion")) : a.saveZip(c)
        }), $("body").on("mouseover", ".module-local-news-homepage .error", function(a) {
            var b = $(this);
            b.fadeOut("slow", function() {
                b.remove()
            })
        }), $("body .module-local-news-homepage .local-news-search input").on("input propertychange", function(b) {
            var c = $(".weather-suggestions");
            clearTimeout(a.suggestionsTimeoutId);
            var d = $(this).val();
            a.suggestionsTimeoutId = setTimeout(function() {
                a.showSuggestions(d, c)
            }, 300)
        }), $("body .module-local-news-homepage .weather-suggestions").on("click", "li", function(b) {
            a.saveSelectedLocation(b.target), $(".weather-suggestions").hide()
        }))
    }
};
jQuery(document).on("releases:init", function() {
    bonLocalNewsHomepage.init()
});
var bonPollOfTheDay = new function() {
    var a, b = this,
        c = "polls";
    this.init = function() {
        $(".module-poll-of-the-day").length && b.createPollOnReady()
    }, this.createPollOnReady = function() {
        if ("undefined" != typeof AolPolls) a = b.createPoll();
        else var c = 0,
            d = setInterval(function() {
                c++, "undefined" != typeof AolPolls ? (clearInterval(d), a = b.createPoll()) : c > 20 && clearInterval(d)
            }, 250)
    }, this.createPoll = function() {
        var a = "production";
        (site.isReleasesNonProduction() || site.isAMPSandbox()) && (a = "development");
        var c = $(".polls-element");
        $.each(c, function(c, d) {
            "2x1-grid" == $(".polls-element").eq(c).attr("data-template") ? b.returnImagesGridPoll(c, a) : b.returnPoll(c, a)
        })
    }, this.returnImagesGridPoll = function(a, d) {
        return new AolPolls($(".polls-element")[a], {
            environment: d,
            templates: {
                title: ["<h3>%title%</h3>"].join("\n"),
                backgroundImage: ["%backgroundImagePlaceholder%"].join("\n"),
                radios: ['<a target="_blank">', '<div class="' + c + '__option">', '<input type="radio" class="submit-button" name="option" id="option%key%" autocomplete="off" value="%key%">', '<div class="image">', "%imagePlaceholder%", '<div class="overlay"></div>', '<div class="percent-bar"></div>', '<span class="percent">%percent%%</span>', "</div>", !0 === $(".polls-element").eq(a).data("hide-labels") ? "" : "<label>%value%</div>", "</div>", "</a>"].join("\n"),
                meter: ['<div class="' + c + '__result">', '<span class="' + c + '__result-label text-size-7-md">%label%</span>', '<span class="' + c + '__result-percent text-size-3">%percent%</span>', '<span class="' + c + '__result-votes">%votes%</span>', '<span class="' + c + '__result-bar" style="width: %percent%%;"></span>', "</div>"].join("\n")
            },
            callbacks: {
                onResultsLoaded: function(a) {
                    var c = $(a.element).find(".polls__options input:checked").val();
                    if (void 0 !== c && $(a.element).find(".polls__option").eq(c).find(".percent").addClass("selected"), $(a.element).find(".polls__options").show(), $(a.element).find(".polls__options input").hide(), $(a.element).find(".polls__options").addClass("results"), $(a.element).find(".polls__result").length) {
                        if ($(a.element).find(".percent-bar").show(), $(a.element).find(".vs").hide(), $(a.element).find(".polls__options .overlay").fadeIn(), void 0 !== a.pollData.data && "undefined" !== a.pollData.data.links)
                            for (var d in a.pollData.data.links) {
                                var e = $(a.element).find(".polls__option").eq(d).parents("a"),
                                    f = a.pollData.data.links[d];
                                e.attr("href", f)
                            }
                        $(a.element).find(".polls__option").each(function(a, b) {
                            var c = $(b).parents("a");
                            c.attr("href").length || c.click(function(a) {
                                a.preventDefault()
                            })
                        }), bonTemplate.coverImages(), b.repositionImagesGridPollResults(a), setTimeout(function() {
                            $(a.element).find(".percent").fadeIn()
                        }, 1e3)
                    }
                },
                onUICreated: function(a) {
                    if (void 0 !== a.pollData.data && (void 0 !== a.pollData.data.title && a.pollData.data.title.length > 0 && ("top" == $(a.element).data("title-position") || "bottom" == $(a.element).data("title-position") && $(a.element).find(".polls").append($(a.element).find(".polls__header"))), void 0 !== a.pollData.data.description && a.pollData.data.description.length > 0)) {
                        var b = "<h4>" + a.pollData.data.description + "</h4>";
                        "top" == $(a.element).data("description-position") ? $(a.element).find(".polls__header").append(b) : "bottom" == $(a.element).data("description-position") && $(a.element).find(".polls-container").append(b)
                    }
                    $(a.element).attr("data-images-count", $(a.element).find(".polls__options img").length), $(a.element).find(".polls__options").append('<div class="vs"><span class="vs-text">vs</span></div>'), $(a.element).find(".polls__options").find("label:empty").remove(), $(a.element).find(".polls__options").show(), bonTemplate.coverImages()
                }
            }
        })
    }, this.repositionImagesGridPollResults = function(a) {
        $(a.element).find(".polls__result").each(function(b, c) {
            var d = $(c),
                e = $(a.element).find(".polls__option").eq(b),
                f = e.find(".percent-bar"),
                g = e.find(".percent"),
                h = Math.round(parseInt(d.find(".polls__result-percent").html())) + "%";
            f.height(h), g.html(h), f.show(), setTimeout(function() {
                f.height(h)
            }, 20), g.css("margin-top", "-8px")
        })
    }, this.returnPoll = function(a, d) {
        return new AolPolls($(".polls-element")[a], {
            environment: d,
            templates: {
                title: ["<h3>%title%</h3>"].join("\n"),
                radios: ['<label class="' + c + '__radio-btn text-size-7">', '<input type="radio" class="submit-button" name="option" id="option%key%" autocomplete="off" value="%key%"> <p>%value%</p><img class="vote-tick" src="https://s3.amazonaws.com/aol-releases-assets-production/site/images/tick.svg" alt="vote-tick">', "</label>"].join("\n"),
                meter: ['<div class="' + c + '__result">', '<span class="' + c + '__result-label text-size-7-md">%label%</span>', "", '<span class="' + c + '__result-votes">%votes%</span>', '<div class="' + c + '__result-bar-container">', '   <span class="' + c + '__result-percent text-size-3">%percent%%</span>', '   <span class="' + c + '__result-bar"></span>', "</div>", "</div>"].join("\n"),
                submit: '<input type="radio" class="submit-button" name="option">'
            },
            callbacks: {
                onUICreated: b.onPollCreated,
                onResultsLoaded: function(a) {
                    bonTemplate.coverImages(), setTimeout(function() {
                        $("." + c + "__result-bar-container").each(function() {
                            var a = $(this).find("." + c + "__result-percent").text(),
                                b = $(this).find("." + c + "__result-bar");
                            $(b).css("width", a)
                        })
                    }, 20)
                }
            }
        })
    }, this.onPollCreated = function(a) {
        $(a.element).find(".polls__options").each(function(a, b) {
            var c = b.cloneNode(!0);
            b.parentNode.replaceChild(c, b)
        });
        var b = $(a.element).find(".submit-button");
        b.click(function() {
            var b = $(a.element).find(".polls__options input:checked").val();
            if (void 0 === b) return void $(a.element).find(".error-message").html("Please select an option.");
            $(a.element).find(".polls__radio-btn input:checked").next().next().css("display", "inline-block"), $(a.element).find(".polls__radio-btn input:checked").parent().addClass("chosen"), $(a.element).find(".polls__radio-btn input:checked").next().css("color", "#fff"), $(a.element).css("border-right", "none"), $(a.element).find(".polls__options").delay(500).hide(0), setTimeout(function() {
                a.vote(b)
            }, 500)
        }), $(a.element).find(".polls__options input").click(function(b) {
            $(a.element).find(".error-message").html("")
        }), $(a.element).find(".polls__options").append('<div class="error-message"></div>'), $(a.element).find(".polls__options .polls__radio-btn").length || b.hide(), bonTemplate.coverImages()
    }
};
jQuery(document).on("releases:init", function() {
    bonPollOfTheDay.init()
});
var bonDynamicLede = new function() {
    var a, b = this,
        c = !1,
        d = {};
    this.init = function() {
        if (d.module = $(".module-dynamic-lede"), d.subitems = d.module.find(".subitems"), d.module.length) {
            if (d.subitems.hasClass("no-slick")) return !1;
            d.subitems.hasClass("slick-initialized") && d.subitems.slick("unslick"), a = d.subitems.find(".item").length;
            var e = d.subitems.slick({
                arrows: !0,
                dots: !1,
                autoplay: !0,
                autoplaySpeed: 11e3,
                centerMode: !0,
                infinite: !0,
                lazyLoad: "ondemand",
                prevArrow: d.module.find(".slick-prev"),
                nextArrow: d.module.find(".slick-next"),
                variableWidth: !0,
                responsive: [{
                    breakpoint: 1109,
                    settings: {
                        centerMode: !1,
                        variableWidth: !1
                    }
                }]
            });
            d.subitems.find(".slide-overlay").on("click", function(a) {
                a.preventDefault();
                var b = $(this).parents(".item").data("slick-index");
                $(e).slick("slickGoTo", b)
            }), e.on("beforeChange", function(a, c, d, e) {
                b.updateCopy(e)
            }).on("afterChange", function(a, d, e) {
                c && b.dlView(), c = !1
            }).on("swipe", function(a, b, d) {
                c = !0
            }).on("click", ".slick-arrow, .slick-slide", function(a) {
                c = !0
            })
        }
    }, this.updateCopy = function(a) {
        $(".module-dynamic-lede .item-copy").hide(), $('.module-dynamic-lede .item-copy[data-index="' + a + '"]').show()
    }, this.dlView = function() {
        try {
            bN.set("dL_view", "true", 1), bN.view()
        } catch (a) {}
    }, this.csTrack = function(b) {
        if ("undefined" != typeof s_265) {
            "undefined" == typeof csPageName && (csPageName = s_265.pageName);
            var c = window.location.protocol + "//" + window.location.hostname + "/dl_track/";
            (new Image).src = c, s_265.pageName = csPageName + " dl", s_265.prop2 = "dl", s_265.pageURL = c, s_265.prop12 = c, s_265.prop59 = "dllength_" + a, s_265.prop52 = "dl_" + parseInt(b / a * 100), s_265.prop20 = "dl_" + (b + 1), s_265.mmxgo = !0, s_265.mmxcustom = c, s_265.t()
        }
    }
};
jQuery(document).on("releases:init", function() {
    bonDynamicLede.init()
});
var bonPodcast = new function() {
    var a = this,
        b = {};
    this.init = function() {
        $(".module-podcast").length && (b.wrapId = "#podcast-iframe-wrap", b.iframeId = "podcast-iframe", a.windowOrContent = site.isReleases() ? ".content" : window, $(a.windowOrContent).on("scroll", a.scrollEvent), a.checkInView())
    }, this.destroyBindings = function() {
        $(a.windowOrContent).off("scroll", a.scrollEvent)
    }, this.scrollEvent = function(b) {
        a.checkInView()
    }, this.checkInView = function() {
        site.isElementInViewport($(b.wrapId), !0, 0) && a.renderIframe()
    }, this.checkForClicks = function() {
        var a = setInterval(function() {
            var b = document.activeElement;
            if (b && "IFRAME" == b.tagName && "podcast-iframe" == b.id) {
                clearInterval(a);
                var c = $(".module-podcast");
                try {
                    void 0 !== window.bN && window.bN && window.bN.click && bN.click(c[0])
                } catch (d) {}
            }
        }, 100)
    }, this.renderIframe = function() {
        a.destroyBindings(), $(b.wrapId).html('<iframe id="' + b.iframeId + '" name="' + b.iframeId + '" src="" width="100%" height="211px" scrolling="no" align="top left" frameborder="0" marginwidth="0" marginheight="0"></iframe>'), $("#" + b.iframeId).attr("src", podcast_iframe_url), $("#" + b.iframeId).load(function() {
            $("#" + b.iframeId).iFrameResize([{
                checkOrigin: !1
            }])
        }), a.checkForClicks()
    }
};
jQuery(document).on("releases:init", function() {
    bonPodcast.init()
});
var bonPricelineRR = new function() {
    var a = this;
    this.init = function() {
        $(".module-priceline").length && (a.pl = $("#rs_home_search"), a.windowOrContent = site.isReleases() ? ".content" : window, $(a.windowOrContent).on("scroll", a.scrollEvent), a.checkInView())
    }, this.destroyBindings = function() {
        $(a.windowOrContent).off("scroll", a.scrollEvent)
    }, this.scrollEvent = function(b) {
        a.checkInView()
    }, this.checkInView = function() {
        site.isElementInViewport($(".module-priceline"), !0, 0) && (void 0 !== window.uuid && null !== window.uuid || a.loadScript("//secure.rezserver.com/public/js/searchbox/searchbox.min.js", function() {
            a.initSearchForm(), a.initTabs()
        }))
    }, this.loadScript = function(a, b) {
        $.ajax({
            url: a,
            dataType: "script",
            success: b,
            async: !0
        })
    }, this.initSearchForm = function() {
        var b = {
            refid: 7577,
            environment: "prod",
            skip_ref: !0,
            accountid: 7577,
            cname: "//secure.rezserver.com/?refid=7577",
            protocol: "http",
            hotel: {
                elements: {
                    form: "hotel",
                    autosuggest: ".rs_autosuggest",
                    rooms: ".rs_rooms",
                    search: ".rs_search",
                    chk_in: ".rs_chk_in, .rs_chk_in_calendar, .rs_date_chk_in",
                    chk_out: ".rs_chk_out, .rs_chk_out_calendar, .rs_date_chk_out"
                },
                calendar: {
                    output_format: "<div class='rs_mobi_chk_day'>[d]</div><div class='rs_mobi_chk_month'>[F]</div>"
                },
                select_name: !0,
                pre_check: a.mobileDate,
                active: !0,
                enabled: !0
            },
            car: {
                elements: {
                    form: "car",
                    from: ".rs_pickup",
                    to: ".rs_dropoff",
                    chk_in: ".rs_chk_in, .rs_chk_in_calendar, .rs_date_chk_in",
                    chk_out: ".rs_chk_out, .rs_chk_out_calendar, .rs_date_chk_out",
                    search: ".rs_search"
                },
                calendar: {
                    output_format: "<div class='rs_mobi_chk_day'>[d]</div><div class='rs_mobi_chk_month'>[F]</div>"
                },
                select_name: !0,
                pre_check: a.mobileDate,
                active: !0,
                enabled: !0
            },
            air: {
                elements: {
                    form: "air",
                    round_trip: "#air_round_trip",
                    one_way: "#air_one_way",
                    multi_dest: "#air_multi_dest",
                    adults: ".rs_adults_input",
                    children: ".rs_child_input",
                    chk_in: ".rs_chk_in, .rs_chk_in_calendar, .rs_date_chk_in",
                    chk_out: ".rs_chk_out, .rs_chk_out_calendar, .rs_date_chk_out",
                    search: ".rs_search"
                },
                calendar: {
                    output_format: '<div class="rs_mobi_chk_day">[d]</div><div class="rs_mobi_chk_month">[F]</div>'
                },
                autosuggest: {
                    airports: !0
                },
                select_name: !0,
                pre_check: a.mobileDate,
                active: !0,
                enabled: !0
            },
            vp: {
                active: !0,
                enabled: !0,
                elements: {
                    chk_in: ".rs_chk_in, .rs_chk_in_calendar, .rs_date_chk_in",
                    chk_out: ".rs_chk_out, .rs_chk_out_calendar, .rs_date_chk_out",
                    search: ".rs_search"
                },
                calendar: {
                    output_format: "<div class='rs_mobi_chk_day'>[d]</div><div class='rs_mobi_chk_month'>[F]</div>"
                },
                select_name: !0,
                pre_check: a.mobileDate
            }
        };
        try {
            $("#rs_home_search").searchbox(b)
        } catch (e) {}
        a.pl.find("#different_return").click(function() {
            a.pl.find(".rs_droppff_div").toggle()
        }), a.pl.find(".round-trip").click(function(b) {
            a.pl.find("#air_round_trip").show(), a.pl.find("#air_one_way").hide(), a.pl.find("#air_multi_dest").hide(), b.preventDefault()
        }), a.pl.find(".one-way").click(function(b) {
            a.pl.find("#air_round_trip").hide(), a.pl.find("#air_one_way").show(), a.pl.find("#air_multi_dest").hide(), b.preventDefault()
        }), a.pl.find(".multi-city").click(function(b) {
            a.pl.find("#air_round_trip").hide(), a.pl.find("#air_one_way").hide(), a.pl.find("#air_multi_dest").show(), b.preventDefault()
        });
        var c = a.pl.find(".rs_air_option");
        c.click(function() {
            c.removeClass("rs_air_highlight"), $(this).addClass("rs_air_highlight")
        });
        var d = a.getParam("refclickid", window.location.href);
        d && $(".aol_refclickid").val(d), a.pl.find(".rs_hotel_form").submit(function(b) {
            a.sendImpression("priceline-travel-search-hotels-submit")
        }), a.pl.find(".rs_air_form").submit(function(b) {
            a.sendImpression("priceline-travel-search-flights-submit")
        }), a.pl.find(".rs_vp_form").submit(function(b) {
            a.sendImpression("priceline-travel-search-vacations-submit")
        }), a.pl.find(".rs_car_form").submit(function(b) {
            a.sendImpression("priceline-travel-search-cars-submit")
        })
    }, this.sendImpression = function(a) {
        "undefined" != typeof bN && bN.ping(a)
    }, this.getParam = function(a, b) {
        var c = new RegExp(a + "=(.+?)(&|$)").exec(b);
        return !(!c || "&" == c[1].charAt(0)) && decodeURIComponent(c[1])
    }, this.formatDate = function(a) {
        if ("" === a) return a;
        var b = a.split("-"),
            c = new Date(b[0], b[1], b[2]);
        return c.getMonth() + "/" + c.getDate() + "/" + c.getFullYear()
    }, this.mobileDate = function(b, c) {
        var d, e, f = b.prop("form");
        if ("hotel" === c || "car" == c || "vp" == c) d = $(".rs_chk_in_mobile", f).val(), e = $(".rs_chk_out_mobile", f).val(), "" !== d && "" !== e && ($(".rs_chk_in", f).val(a.formatDate(d)), $(".rs_chk_out", f).val(a.formatDate(e)));
        else if ("air" === c) {
            var g = b.parents().is("#air_round_trip"),
                h = b.parents().is("#air_one_way"),
                i = b.parents().is("#air_multi_dest");
            g ? (f = $("#air_round_trip"), d = $(".rs_chk_in_mobile", f).val(), e = $(".rs_chk_out_mobile", f).val(), "" !== d && "" !== e && ($(".rs_chk_in", f).val(a.formatDate(d)), $(".rs_chk_out", f).val(a.formatDate(e)))) : h ? (f = $("#air_one_way"), check_in1 = $(".rs_chk_in_mobile[data-check_in=1]", f).val(), "" !== check_in1 && $("input[name=rs_chk_in1]", f).val(a.formatDate(check_in1))) : i && (f = $("#air_multi_dest"), check_in1 = $(".rs_chk_in_mobile[data-check_in=1]", f).val(), "" !== check_in1 && $("input[name=rs_chk_in1]", f).val(a.formatDate(check_in1)), check_in2 = $(".rs_chk_in_mobile[data-check_in=2]", f).val(), "" !== check_in2 && $("input[name=rs_chk_in2]", f).val(a.formatDate(check_in2)), check_in3 = $(".rs_chk_in_mobile[data-check_in=3]", f).val(), "" !== check_in3 && $("input[name=rs_chk_in3]", f).val(a.formatDate(check_in3)), check_in4 = $(".rs_chk_in_mobile[data-check_in=4]", f).val(), "" !== check_in4 && $("input[name=rs_chk_in4]", f).val(a.formatDate(check_in4)), check_in5 = $(".rs_chk_in_mobile[data-check_in=5]", f).val(), "" !== check_in5 && $("input[name=rs_chk_in5]", f).val(a.formatDate(check_in5)))
        }
        return !0
    }, this.initTabs = function() {
        a.pl.find(".rs_product_select").on("change", function() {
            var b = a.pl.find(".rs_product_select").val();
            a.pl.find("form").addClass("rs_searchbox_hide"), a.pl.find(".rs_" + b + "_form").removeClass("rs_searchbox_hide"), a.pl.find(".rs_tabs").removeClass("highlight_tab"), a.pl.find("#rs_" + b + "_tab").addClass("highlight_tab")
        })
    }, this.showMulti = function(a, b) {
        var c = a + 1,
            d = $("#rs_home_search");
        d.find(".rem_flight" + a).hide(), d.find(".add_flight" + a).hide(), d.find(".air_flight_" + c).slideDown(), b.preventDefault()
    }, this.hideMulti = function(a, b) {
        var c = a - 1,
            d = $("#rs_home_search");
        d.find(".air_flight_" + a).slideUp(), d.find(".rem_flight" + c).show(), d.find(".add_flight" + c).show(), b.preventDefault()
    }
};
jQuery(document).on("releases:init", function() {
    bonPricelineRR.init()
});
var bonWeather = new function() {
    var a = this;
    this.renderWeather = function(a) {
        if (void 0 !== a.local.weather.items) {
            var b = {
                0: "602",
                1: "601",
                2: "611",
                3: "603",
                4: "603",
                5: "60E",
                6: "60E",
                7: "60E",
                8: "60E",
                9: "604",
                10: "60E",
                11: "60C",
                12: "60C",
                13: "608",
                14: "60A",
                15: "608",
                16: "60A",
                17: "614",
                18: "60E",
                19: "60B",
                20: "60B",
                21: "60B",
                22: "60B",
                23: "600",
                24: "600",
                25: "609",
                26: "605",
                27: "616",
                28: "615",
                29: "616",
                30: "615",
                31: "607",
                32: "607",
                33: "607",
                34: "607",
                35: "610",
                36: "612",
                37: "603",
                38: "60D",
                39: "60C",
                40: "60C",
                41: "60A",
                42: "60A",
                43: "608",
                44: "60F",
                45: "60C",
                46: "60A",
                47: "60D"
            };
            _.templateSettings.escape = /\{\{-(.*?)\}\}/g, $(".module-weather .local-weather").html(_.template($("script#tmpl_local_weather").html())({
                city: a.local.location.city,
                state: a.local.location.state,
                icon_code_final: b[a.local.weather.items[0].icon_code],
                currentFahrenheit: a.local.weather.items[0].current_temp,
                currentCelsius: Math.round((a.local.weather.items[0].current_temp - 32) / 1.8)
            }))
        }
    }, this.fetchData = function() {
        var b = "";
        site.isReleases() && (b = "11217"), url = "https://www.aol.com/api/v1/weather/local", "" != b && (url = url + "?zip=" + b), $.getJSON(url, function(b) {
            -1 == b.local.weather.errorCode ? $(".module-weather .local-weather").addClass("hidden") : ($(".module-weather .local-weather").removeClass("hidden"), a.renderWeather(b))
        })
    }, this.init = function() {
        a.module = $(".module-weather"), a.module.length && (a.fetchData(), $(document).on("window.local.refresh", function(b) {
            a.fetchData()
        }), a.module.on("click", ".local-weather .current .unit", function() {
            var a = $(this).data("unit"),
                b = $(".module-weather .local-weather .current");
            b.find(".value, .unit").removeClass("active"), b.find('.value[data-unit="' + a + '"], .unit[data-unit="' + a + '"]').addClass("active")
        })), a.digitsRegex = new RegExp("^[0-9]+$"), a.setupLocale()
    }, this.setupLocale = function() {
        a.setupLocationForm(), a.setupLocationSubmission(), a.setupLocationEventListener()
    }, this.setupLocationForm = function() {
        a.module.off("click", ".edit-toggle"), a.module.on("click", ".edit-toggle", function(b) {
            b.preventDefault(), a.module.find(".city-state, .edit-toggle").addClass("is-hidden"), a.module.find("img.icon-styles, .current").addClass("is-visibly-hidden"), a.module.find(".edit-location").removeClass("is-hidden"), a.module.on("click touchstart", "form input", function(b) {
                $(this).val(""), a.saved = !1, a.module.find(".location-suggestions").empty().hide()
            }), a.module.find("form input").bind("input propertychange", function() {
                a.locationAutocomplete($(this))
            }), a.module.on("click", ".location-suggestions li", function(b) {
                a.chooseLocation(b)
            })
        })
    }, this.setupLocationSubmission = function() {
        a.module.off("submit", ".edit-location form"), a.module.on("submit", ".edit-location form", function(b) {
            b.preventDefault();
            var c = a.module.find("form input").val();
            a.digitsRegex.test(c) ? a.reloadLocal(c, null, !0) : a.smartFetchZip(c, function(b, c) {
                a.reloadLocal(b, c, !0)
            }, function() {
                a.module.find(".city-state, .edit-toggle").removeClass("is-hidden"), a.module.find("img.icon-styles, .current").removeClass("is-visibly-hidden"), a.module.find(".edit-location").addClass("is-hidden")
            })
        })
    }, this.setupLocationEventListener = function() {
        $(document).on("window.local.changeLocation", function(a) {
            null != a && void 0 != a && null != a.local && void 0 != a.local && null != a.local.changeLocation && void 0 != a.local.changeLocation && site.createCookie("weathergeo", a.local.changeLocation, 365, ".aol.com")
        })
    }, this.reloadLocal = function(b, c) {
        if (null == c) {
            $.ajax({
                url: "https://www.aol.com/api/v1/weather/local" + "?lookup=" + b,
                type: "get",
                dataType: "jsonp",
                success: function(c) {
                    if (c && c.addresses && c.addresses.length > 0 && c.addresses[0].locations.length > 0) {
                        var d = c.addresses[0].locations[0],
                            e = a.round(d.latLng.lat, 2),
                            f = a.round(d.latLng.lng, 2);
                        if (d.adminArea5 && d.woeid) {
                            var g = e + "|" + f + "|" + d.adminArea5 + "|" + d.adminArea3 + "|" + d.adminArea1 + "|" + b + "|" + d.woeid;
                            site.createCookie("weathergeo", g, 365, ".aol.com")
                        }
                    }
                },
                error: function(a, b, c) {
                    console.log("error", a, b, c)
                }
            })
        } else {
            var d = a.round(c.latLng.lat, 2),
                e = a.round(c.latLng.lng, 2);
            c.adminArea5 && c.woeid && site.createCookie("weathergeo", d + "|" + e + "|" + c.adminArea5 + "|" + c.adminArea3 + "|" + c.adminArea1 + "|" + b + "|" + c.woeid, 365, ".aol.com")
        }
    }, this.getAPIHost = function() {
        return site.isAMPSandbox() ? "//user-location-pref-qa.comet.aol.com/" : "//user-location-pref.comet.aol.com/"
    }, this.getWeatherAPIHost = function() {
        return "https://www.aol.com/amp-proxy/api/weather/"
    }, this.zipIsValid = function(a) {
        return /^\b\d{5}(-\d{4})?\b$/.test(a)
    }, this.smartFetchZip = function(b, c, d) {
        var e = a.getAPIHost();
        null != b && "" != b && $.get(e + "v1/weather/location?lookup=" + encodeURIComponent(b) + "/", function(b) {
            for (var f = null, g = null, h = b.addresses[0].locations[0], f = a.round(h.latLng.lat, 2), g = a.round(h.latLng.lng, 2), i = 0; i < b.addresses[0].locations.length; ++i) {
                var h = b.addresses[0].locations[i];
                if ("US" == h.adminArea1) {
                    f = a.round(h.latLng.lat, 2), g = a.round(h.latLng.lng, 2);
                    break
                }
            }
            null != f && null != g ? $.get(e + "v1/weather/location?latitude=" + f + "&longitude=" + g, function(a) {
                for (var b = 0; b < a.addresses.length; ++b) {
                    var d = a.addresses[0].locations[b],
                        e = d.postalCode;
                    if ("US" == d.adminArea1 && e.length > 0) {
                        e = e.split("-")[0], c(e, d);
                        break
                    }
                }
            }) : d()
        })
    }, this.locationAutocomplete = function(b) {
        var c = b;
        a.suggestionsTimeoutId = setTimeout(function() {
            var b = $(c).val().trim();
            "" != b ? $.ajax({
                url: a.getWeatherAPIHost() + "addresses/" + encodeURIComponent(b) + "/",
                type: "get",
                dataType: "jsonp",
                success: function(b) {
                    var c = a.module.find(".location-suggestions");
                    c.empty(), $.each(b.addresses, function(a, b) {
                        if ("US" == b.country_code) {
                            var d = $('<li class="bN" data-beacon=\'{"p": {"lnid": "zip-suggestion"}}\'></li>');
                            null != b.locality && void 0 != b.locality && "" != b.locality.trim() && ($(d).text(b.locality + ", " + b.admin_district), $(d).attr("data-latitude", b.latitude), $(d).attr("data-longitude", b.longitude), null != b.postal_code && void 0 != b.postal_code && $(d).attr("data-zip", b.postal_code), c.append(d))
                        }
                    }), $(c).find("li").length > 0 && 1 != a.saved && $(c).show()
                },
                error: function(a, b, c) {
                    console.log("error", a, b, c)
                }
            }) : a.module.find(".location-suggestions").empty().hide()
        }, 300)
    }, this.chooseLocation = function(b) {
        var c = $(b.target).data("longitude"),
            d = $(b.target).data("latitude");
        $(b.target).data("zip");
        $.ajax({
            url: a.getWeatherAPIHost() + "addresses/" + d + "/" + c + "/",
            type: "get",
            dataType: "jsonp",
            success: function(b) {
                if (null != b.addresses)
                    for (var c = 0; c < b.addresses.length; ++c) {
                        var d = b.addresses[c];
                        if ("US" == d.country_code) {
                            null != d.postal_code && void 0 != d.postal_code && (a.module.find("form input#zip-value").val(d.postal_code), a.module.find("form input#local-weather-location").val(d.locality + ", " + d.admin_district), a.module.find("form button").click());
                            break
                        }
                    }
            },
            error: function(a, b, c) {
                console.log("error", a, b, c)
            }
        }), a.module.find(".location-suggestions").hide()
    }, this.round = function(a, b) {
        var c = Number(a).toFixed(b);
        return Number(c)
    }
};
jQuery(document).on("releases:init", function() {
    bonWeather.init()
});
var bonZergnet = new function() {
    var a = this;
    this.init = function() {
        $(".module-zergnet").length && a.watchForLoad()
    }, this.watchForLoad = function() {
        var b = site.isAMPSandbox() || site.isAMPLive() ? window : ".content";
        $(b).on("load.lazyZergnet resize.lazyZergnet scroll.lazyZergnet", function(c) {
            if (("scroll" != c.type || 0 != $(b).scrollTop()) && a.isElementInViewport($(".module-zergnet"), 200)) {
                $(".module-zergnet").addClass("is-loaded"), a.appendZergnetScript(), $(b).off(".lazyZergnet");
                var d = setInterval(function() {
                    var a = $(".module-zergnet").find(".zergimg img");
                    a.length && (a.lazyload({
                        data_attribute: "lazy-small",
                        event: "scroll",
                        container: b
                    }), clearInterval(d))
                }, 50)
            }
        })
    }, this.appendZergnetScript = function(a) {
        var b = $(".module-zergnet .zergnet-container").data("zergnet-id"),
            c = document.createElement("script");
        c.type = "text/javascript", c.async = !0, c.src = ("https:" == document.location.protocol ? "https:" : "http:") + "//www.zergnet.com/zerg.js?id=" + b;
        var d = document.getElementsByTagName("script")[0];
        d.parentNode.insertBefore(c, d)
    }, this.isElementInViewport = function(a, b) {
        var c = a[0].getBoundingClientRect(),
            d = window.innerHeight || document.documentElement.clientHeight,
            e = window.innerWidth || document.documentElement.clientWidth;
        return (0 + b >= c.top - d || 0 + b >= c.bottom - d) && (c.left >= 0 + b || c.right <= e)
    }
};
jQuery(document).on("releases:init", function() {
    bonZergnet.init()
});
var bonShowMore = new function() {
    this.init = function() {
        $("[data-show-more]").length && ($("[data-show-more]").each(function() {
            $(this).closest("." + $(this).data("item-container")).find("." + $(this).data("item") + ":visible").last().addClass("is-last")
        }), $("[data-show-more]").show().on("click", function() {
            var a = $(this),
                b = a.closest("." + a.data("item-container")),
                c = a.data("item"),
                d = b.find(".hidden." + c);
            d.slice(0, a.data("page-size")).removeClass("hidden"), b.find("." + c).removeClass("is-last"), d.slice(0, a.data("page-size")).last().addClass("is-last");
            try {
                bonLazyLoad.init()
            } catch (e) {}
            0 == b.find(".hidden." + c).length && a.hide()
        }))
    }
};
jQuery(document).ready(function(a) {
        bonShowMore.init()
    }),
    function(a) {
        a.fn.marquee = function(b) {
            return this.each(function() {
                var c, d, e, f, g, h = a.extend({}, a.fn.marquee.defaults, b),
                    i = a(this),
                    j = 3,
                    k = "animation-play-state",
                    l = !1,
                    m = function(a, b, c) {
                        for (var d = ["webkit", "moz", "MS", "o", ""], e = 0; e < d.length; e++) d[e] || (b = b.toLowerCase()), a.addEventListener(d[e] + b, c, !1)
                    },
                    n = function(a) {
                        var b = [];
                        for (var c in a) a.hasOwnProperty(c) && b.push(c + ":" + a[c]);
                        return b.push(), "{" + b.join(",") + "}"
                    },
                    o = function() {
                        i.timer = setTimeout(E, h.delayBeforeStart)
                    },
                    p = {
                        pause: function() {
                            l && h.allowCss3Support ? c.css(k, "paused") : a.fn.pause && c.pause(), i.data("runningStatus", "paused"), i.trigger("paused")
                        },
                        resume: function() {
                            l && h.allowCss3Support ? c.css(k, "running") : a.fn.resume && c.resume(), i.data("runningStatus", "resumed"), i.trigger("resumed")
                        },
                        toggle: function() {
                            p["resumed" == i.data("runningStatus") ? "pause" : "resume"]()
                        },
                        destroy: function() {
                            clearTimeout(i.timer), i.find("*").addBack().unbind(), i.html(i.find(".js-marquee:first").html())
                        }
                    };
                if ("string" == typeof b) return void(a.isFunction(p[b]) && (c || (c = i.find(".js-marquee-wrapper")), !0 === i.data("css3AnimationIsSupported") && (l = !0), p[b]()));
                var q;
                a.each(h, function(a, b) {
                    if (void 0 !== (q = i.attr("data-" + a))) {
                        switch (q) {
                            case "true":
                                q = !0;
                                break;
                            case "false":
                                q = !1
                        }
                        h[a] = q
                    }
                }), h.duration = h.speed || h.duration, f = "up" == h.direction || "down" == h.direction, h.gap = h.duplicated ? parseInt(h.gap) : 0, i.wrapInner('<div class="js-marquee"></div>');
                var r = i.find(".js-marquee").css({
                    "margin-right": h.gap,
                    float: "left"
                });
                if (h.duplicated && r.clone(!0).appendTo(i), i.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>'), c = i.find(".js-marquee-wrapper"), f) {
                    var s = i.height();
                    c.removeAttr("style"), i.height(s), i.find(".js-marquee").css({
                        float: "none",
                        "margin-bottom": h.gap,
                        "margin-right": 0
                    }), h.duplicated && i.find(".js-marquee:last").css({
                        "margin-bottom": 0
                    });
                    var t = i.find(".js-marquee:first").height() + h.gap;
                    h.startVisible && !h.duplicated ? (h._completeDuration = (parseInt(t, 10) + parseInt(s, 10)) / parseInt(s, 10) * h.duration, h.duration = parseInt(t, 10) / parseInt(s, 10) * h.duration) : h.duration = (parseInt(t, 10) + parseInt(s, 10)) / parseInt(s, 10) * h.duration
                } else g = i.find(".js-marquee:first").width() + h.gap, d = i.width(), h.startVisible && !h.duplicated ? (h._completeDuration = (parseInt(g, 10) + parseInt(d, 10)) / parseInt(d, 10) * h.duration, h.duration = parseInt(g, 10) / parseInt(d, 10) * h.duration) : h.duration = (parseInt(g, 10) + parseInt(d, 10)) / parseInt(d, 10) * h.duration;
                if (h.duplicated && (h.duration = h.duration / 2), h.allowCss3Support) {
                    var u = document.body || document.createElement("div"),
                        v = "marqueeAnimation-" + Math.floor(1e7 * Math.random()),
                        w = "Webkit Moz O ms Khtml".split(" "),
                        x = "animation",
                        y = "",
                        z = "";
                    if (u.style.animation && (z = "@keyframes " + v + " ", l = !0), !1 === l)
                        for (var A = 0; A < w.length; A++)
                            if (void 0 !== u.style[w[A] + "AnimationName"]) {
                                var B = "-" + w[A].toLowerCase() + "-";
                                x = B + x, k = B + k, z = "@" + B + "keyframes " + v + " ", l = !0;
                                break
                            } l && (y = v + " " + h.duration / 1e3 + "s " + h.delayBeforeStart / 1e3 + "s infinite " + h.css3easing, i.data("css3AnimationIsSupported", !0))
                }
                var C = function() {
                        c.css("margin-top", "up" == h.direction ? s + "px" : "-" + t + "px")
                    },
                    D = function() {
                        c.css("margin-left", "left" == h.direction ? d + "px" : "-" + g + "px")
                    };
                h.duplicated ? (f ? h.startVisible ? c.css("margin-top", 0) : c.css("margin-top", "up" == h.direction ? s + "px" : "-" + (2 * t - h.gap) + "px") : h.startVisible ? c.css("margin-left", 0) : c.css("margin-left", "left" == h.direction ? d + "px" : "-" + (2 * g - h.gap) + "px"), h.startVisible || (j = 1)) : h.startVisible ? j = 2 : f ? C() : D();
                var E = function() {
                    if (h.duplicated && (1 === j ? (h._originalDuration = h.duration, h.duration = f ? "up" == h.direction ? h.duration + s / (t / h.duration) : 2 * h.duration : "left" == h.direction ? h.duration + d / (g / h.duration) : 2 * h.duration, y && (y = v + " " + h.duration / 1e3 + "s " + h.delayBeforeStart / 1e3 + "s " + h.css3easing), j++) : 2 === j && (h.duration = h._originalDuration, y && (v += "0", z = a.trim(z) + "0 ", y = v + " " + h.duration / 1e3 + "s 0s infinite " + h.css3easing), j++)), f ? h.duplicated ? (j > 2 && c.css("margin-top", "up" == h.direction ? 0 : "-" + t + "px"), e = {
                            "margin-top": "up" == h.direction ? "-" + t + "px" : 0
                        }) : h.startVisible ? 2 === j ? (y && (y = v + " " + h.duration / 1e3 + "s " + h.delayBeforeStart / 1e3 + "s " + h.css3easing), e = {
                            "margin-top": "up" == h.direction ? "-" + t + "px" : s + "px"
                        }, j++) : 3 === j && (h.duration = h._completeDuration, y && (v += "0", z = a.trim(z) + "0 ", y = v + " " + h.duration / 1e3 + "s 0s infinite " + h.css3easing), C()) : (C(), e = {
                            "margin-top": "up" == h.direction ? "-" + c.height() + "px" : s + "px"
                        }) : h.duplicated ? (j > 2 && c.css("margin-left", "left" == h.direction ? 0 : "-" + g + "px"), e = {
                            "margin-left": "left" == h.direction ? "-" + g + "px" : 0
                        }) : h.startVisible ? 2 === j ? (y && (y = v + " " + h.duration / 1e3 + "s " + h.delayBeforeStart / 1e3 + "s " + h.css3easing), e = {
                            "margin-left": "left" == h.direction ? "-" + g + "px" : d + "px"
                        }, j++) : 3 === j && (h.duration = h._completeDuration, y && (v += "0", z = a.trim(z) + "0 ", y = v + " " + h.duration / 1e3 + "s 0s infinite " + h.css3easing), D()) : (D(), e = {
                            "margin-left": "left" == h.direction ? "-" + g + "px" : d + "px"
                        }), i.trigger("beforeStarting"), l) {
                        c.css(x, y);
                        var b = z + " { 100%  " + n(e) + "}",
                            k = c.find("style");
                        0 !== k.length ? k.filter(":last").html(b) : a("head").append("<style>" + b + "</style>"), m(c[0], "AnimationIteration", function() {
                            i.trigger("finished")
                        }), m(c[0], "AnimationEnd", function() {
                            E(), i.trigger("finished")
                        })
                    } else c.animate(e, h.duration, h.easing, function() {
                        i.trigger("finished"), h.pauseOnCycle ? o() : E()
                    });
                    i.data("runningStatus", "resumed")
                };
                i.bind("pause", p.pause), i.bind("resume", p.resume), h.pauseOnHover && i.bind("mouseenter mouseleave", p.toggle), l && h.allowCss3Support ? E() : o()
            })
        }, a.fn.marquee.defaults = {
            allowCss3Support: !0,
            css3easing: "linear",
            easing: "linear",
            delayBeforeStart: 1e3,
            direction: "left",
            duplicated: !1,
            duration: 5e3,
            gap: 20,
            pauseOnCycle: !1,
            pauseOnHover: !1,
            startVisible: !1
        }
    }(jQuery);
var promoMultipleHalf = new function() {
    var a = this;
    this.init = function() {
        $(".bon-grid-item.module-promo-multiple-half").length && ($(".bon-grid-item.module-promo-multiple-half .promo-half.inline").each(function() {
            a.trimWords($(this))
        }), $(window).resize(function() {
            $(".bon-grid-item.module-promo-multiple-half .promo-half.inline").each(function() {
                a.trimWords($(this))
            })
        }))
    }, this.trimWords = function(b) {
        var c = window.innerWidth || document.documentElement.clientWidth,
            d = 80;
        d = c <= 400 ? 50 : c > 400 && c <= 1100 ? 60 : c > 1100 && c <= 1130 ? 25 : c > 1100 && c <= 1200 || c > 1265 && c <= 1309 ? 30 : c > 1200 && c <= 1390 ? 35 : 42, b.find(".promo-text-list-item-content").each(function() {
            var b = $(this).data("orig");
            void 0 === b && (b = $(this).text(), $(this).attr("data-orig", b)), b.length > d ? $(this).text(a.trimStringAtWord(b, d)) : $(this).text(b)
        })
    }, this.trimStringAtWord = function(a, b) {
        var c = $.trim(a).substring(0, b - 3);
        return c = -1 == c.lastIndexOf(" ") ? c.trim() : c.split(" ").slice(0, -1).join(" ").trim() + " ..."
    }
};
jQuery(document).on("releases:init", function() {
    promoMultipleHalf.init()
});
var bonOlympicsMedals = new function() {
    var a = this;
    this.init = function() {
        $(".olympics-medals").length > 0 && a.initializeSlick()
    }, this.getViewportSize = function() {
        return {
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        }
    }, this.initializeSlick = function() {
        a.getViewportSize().width <= 500 || $(".template-homepage-homepage-mobile").length > 0 || $(".template-homepage").length > 0 || $(".template-homepage-tiny-keanu").length > 0 ? $(".countries").hasClass("slick-initialized") || $(".countries").slick({
            cssEase: "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
            infinite: !1,
            nextArrow: '<button type="button" class="slick-next"></button>',
            prevArrow: '<button type="button" class="slick-prev"></button>',
            variableWidth: !1,
            slide: ".country",
            slidesToScroll: 1,
            slidesToShow: 3,
            useTransform: !0
        }) : $(".countries").hasClass("slick-initialized") && $(".countries").removeClass("shifted").slick("unslick")
    }
};
$(window).on("resize", function() {
    $(".olympics-medals").length > 0 && bonOlympicsMedals.init()
}), jQuery(document).on("releases:init", function() {
    bonOlympicsMedals.init()
});