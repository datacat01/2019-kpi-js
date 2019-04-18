var _i_ = this._i_ || function() {},
    _r_ = this._r_ || function(e) {
        return e
    },
    _sp_ = this._sp_ || function(e) {
        B.et.customGoal("cDPPESHbfNFVTAYZSQDZET", 1), B.reportError({
            message: "SPDR function called - " + e
        }, "SPDR")
    };
B.define("caret", function() {
    _i_("4ab:50a5d6aa");
    return _r_({
        getPosition: function(e) {
            var t;
            if (_i_("4ab:1399bc4f"), !e) return _r_();
            if (document.selection) return e.focus(), (t = document.selection.createRange()).moveStart("character", -e.value.length), _r_(t.text.length);
            if (e.selectionStart || 0 === e.selectionStart) return _r_(e.selectionStart);
            return _r_(0)
        },
        setPosition: function(e, t) {
            var i;
            if (_i_("4ab:536e7091"), !e) return _r_();
            document.selection ? (e.focus(), (i = document.selection.createRange()).moveStart("character", -e.value.length), i.moveStart("character", t), i.moveEnd("character", 0), i.select()) : (e.selectionStart || 0 === e.selectionStart) && (e.selectionStart = t, e.selectionEnd = t, e.focus()), _r_()
        },
        setSelection: function(e, t, i) {
            var n;
            if (_i_("4ab:b3966198"), !e) return _r_();
            document.selection ? (e.focus(), (n = document.selection.createRange()).moveStart("character", -e.value.length), n.moveStart("character", t), n.moveEnd("character", i - t), n.select()) : (e.selectionStart || 0 === e.selectionStart) && (e.selectionStart = t, e.selectionEnd = i, e.focus()), _r_()
        },
        getSelectionLength: function(e) {
            var t;
            if (_i_("4ab:735a2def"), !e) return _r_();
            if (document.selection) return e.focus(), t = document.selection.createRange(), _r_(t.text.length || 0);
            if (e.selectionStart || 0 === e.selectionStart) return _r_(e.selectionEnd - e.selectionStart);
            return _r_(0)
        }
    })
}), B.define("click-out", function(e, t, i) {
    "use strict";
    _i_("4ab:fff452bb");
    var s = {},
        n = !1;

    function a(e) {
        _i_("4ab:ad210c4a");
        var t, i = Object.keys(s),
            n = {},
            a = !1;
        if (i.length)
            for (t = e.target || e.srcElement; t && (i.forEach(function(e) {
                    _i_("4ab:efe0fbc1"), s[e].element === t && (n[e] = !0, 1 == i.length && (a = !0)), _r_()
                }), !a);) t = t.parentNode;
        i.forEach(function(e) {
            _i_("4ab:bf144444"), !n[e] && s[e] && (s[e].callback.call(!1), r(e)), _r_()
        }), _r_()
    }

    function r(e) {
        _i_("4ab:e16b90f5"), s[e] && delete s[e], _r_()
    }
    t.addMonitor = function(e, t) {
        _i_("4ab:4eea37e7"), _i_("4ab:c17566ca"), n || (n = !0, document.documentElement.addEventListener ? document.documentElement.addEventListener("click", a) : document.documentElement.attachEvent && document.documentElement.attachEvent("onclick", a)), _r_();
        var i = Math.random();
        return "string" == typeof e.jquery && (e = e[0]), setTimeout(function() {
            _i_("4ab:9952e084"), s[i] = {
                element: e,
                callback: t
            }, _r_()
        }, 4), _r_(i)
    }, t.removeMonitor = r, t.forceClickOut = function() {
        _i_("4ab:d4e2fa88"), Object.keys(s).forEach(function(e) {
            _i_("4ab:ffe354e3"), s[e].callback.call(!1), r(e), _r_()
        }), _r_()
    }, _r_()
}), B.define("deny-focus", function(e, t, i) {
    "use strict";
    return _i_("4ab:c105dfa2"), _r_({
        _focusAttributes: {
            tabindex: -1,
            "aria-hidden": !0
        },
        _denyFocusOn: [],
        _get: function(t) {
            return _i_("4ab:49251ead"), _r_(this._denyFocusOn.filter(function(e) {
                if (_i_("4ab:5bd98b23"), e.el === t) return _r_(!0);
                return _r_(!1)
            })[0])
        },
        _add: function(e) {
            _i_("4ab:3560760b");
            var t = this._getFocusableElements(e),
                i = {
                    el: e,
                    focusable: t,
                    focusableOriginalAttributes: this._buildAttributesObject(t)
                };
            return this._denyFocusOn.push(i), _r_(i)
        },
        _update: function(e) {
            _i_("4ab:3e71e8fe");
            var t = this._getFocusableElements(e.el);
            e.focusable = t, e.focusableOriginalAttributes = this._buildAttributesObject(t), _r_()
        },
        _buildAttributesObject: function(e) {
            return _i_("4ab:9f219c08"), _r_(e.map(function(t) {
                _i_("4ab:48092da2");
                var i = {};
                return Object.keys(this._focusAttributes).forEach(function(e) {
                    _i_("4ab:42b3beef"), i[e] = t.getAttribute(e), _r_()
                }), _r_(i)
            }.bind(this)))
        },
        _getFocusableElements: function(e) {
            _i_("4ab:5fdb8c82");
            var t = e.querySelectorAll("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]");
            return _r_(Array.prototype.slice.call(t))
        },
        deny: function(e) {
            if (_i_("4ab:71875e1f"), !e || !e instanceof Node) return console.log("Please provide a valid DOMElement to deny focus for"), _r_(!1);
            var t = this._get(e);
            t ? this._update(t) : t = this._add(e), t.focusable.forEach(function(t) {
                _i_("4ab:ead5a0b7"), Object.keys(this._focusAttributes).forEach(function(e) {
                    _i_("4ab:f3a3f028"), t.setAttribute(e, this._focusAttributes[e]), _r_()
                }.bind(this)), _r_()
            }.bind(this)), _r_()
        },
        allow: function(e) {
            if (_i_("4ab:1c780576"), !e || !e instanceof Node) return console.log("Please provide a valid DOMElement to deny focus for"), _r_(!1);
            var t = this._get(e);
            return t ? (t.focusable.forEach(function(i, e) {
                _i_("4ab:79cd96c7");
                var n = t.focusableOriginalAttributes[e];
                Object.keys(n).forEach(function(e) {
                    _i_("4ab:6f949722");
                    var t = n[e];
                    null == t ? i.removeAttribute(e) : i.setAttribute(e, n[e]), _r_()
                }), _r_()
            }), _r_(!0)) : _r_(!1)
        }
    })
}), B.define("keycodes", [], function() {
    "use strict";
    _i_("4ab:f9eca8dd");
    var n = {
        backspace: 8,
        tab: 9,
        enter: 13,
        shift: 16,
        control: 17,
        alt: 18,
        escape: 27,
        space: 32,
        pageUp: 33,
        pageDown: 34,
        end: 35,
        home: 36,
        leftArrow: 37,
        upArrow: 38,
        rightArrow: 39,
        downArrow: 40,
        delete: 46,
        navigation: [9].concat(e(33, 40)),
        deletion: [8, 46],
        arrow: e(37, 40),
        number: e(48, 57).concat(e(96, 105)),
        alphabetic: e(65, 90),
        modifier: e(16, 18)
    };

    function e(e, t) {
        _i_("4ab:83a52ba4");
        for (var i = [], n = 0; n <= t - e; n++) i.push(e + n);
        return _r_(i)
    }

    function a(e, t) {
        if (_i_("4ab:768b926a"), Array.isArray(n[e]) && -1 !== n[e].indexOf(t)) return _r_(!0);
        if (n[e] === t) return _r_(!0);
        return _r_(!1)
    }

    function i(e, t) {
        return _i_("4ab:bf671d22"), _r_(a(t, e))
    }
    n = function(e) {
        _i_("4ab:0fefaabc");
        var i = 65;
        return _r_("abcdefghijklmnopqrstuvwxyz".split("").reduce(function(e, t) {
            return _i_("4ab:d3ccc5bc"), e[t] = i++, _r_(e)
        }, e))
    }(n);
    var s = {
        getTypes: function(t) {
            _i_("4ab:ad5c6319");
            var i = [];
            return Object.keys(n).forEach(function(e) {
                _i_("4ab:8fc15c2d"), a(e, t) && i.push(e), _r_()
            }), _r_(i)
        },
        isKeycodeType: i
    };
    return Object.keys(n).forEach(function(t) {
        var e;
        _i_("4ab:484ba84e"), s["is" + (e = t, _i_("4ab:2984a907"), _r_(e.slice(0, 1).toUpperCase() + e.slice(1)))] = function(e) {
            return _i_("4ab:4209f82c"), _r_(i(e, t))
        }, _r_()
    }), _r_(s)
}), B.define("read-data-options", function(e, t, i) {
    _i_("4ab:b2e7a21d"), i.exports = function(a, s) {
        _i_("4ab:9b133c1b");
        var r = {};
        return a.jquery && (a = a[0]), Object.keys(s).forEach(function(e) {
            _i_("4ab:dcce8877");
            var t = s[e],
                i = "data-" + e,
                n = null;
            if ("function" == typeof t && (t = {
                    type: t
                }), "string" == typeof t.name && (i = "data-" + t.name), !a.attributes[i]) {
                if (t.hasOwnProperty("defaultValue")) r[e] = t.defaultValue;
                else if (t.hasOwnProperty("required")) throw new Error("read-data-options: missing required " + i + " attribute");
                return _r_()
            }
            n = a.getAttribute(i);
            if (t.type === Boolean) n = !/^0|false|no|off$/.test(n);
            else if (t.type === String) n = n || t.defaultValue;
            else {
                if (t.type !== Number) throw new Error("data-options: Invalid option type for " + e);
                n = parseFloat(n, 10), isNaN(n) && (n = t.defaultValue)
            }
            r[e] = n, _r_()
        }), _r_(r)
    }, _r_()
}), B.define("calendar-base", function(e, t, i) {
    function m(e) {
        _i_("4ab:eadb8bc9"), e = e || {}, this.startDate = e.startDate, this.endDate = e.endDate, this.siblingMonths = e.siblingMonths, this.weekNumbers = e.weekNumbers, this.weekStart = e.weekStart, void 0 === this.weekStart && (this.weekStart = 0), _r_()
    }
    _i_("4ab:75a1be19"), m.prototype.getCalendar = function(e, t) {
        _i_("4ab:af5a1508");
        var i = new Date(Date.UTC(e, t, 1, 0, 0, 0, 0));
        e = i.getUTCFullYear(), t = i.getUTCMonth();
        for (var n, a, s, r, o, _ = [], l = i.getUTCDay(), d = -(7 - this.weekStart + l) % 7, h = m.daysInMonth(e, t), c = (h - d) % 7, u = m.daysInMonth(e, t - 1), f = d, b = h - f + (0 != c ? 7 - c : 0) + d, p = null; f < b;) n = ((f < 1 ? 7 + f : f) + l) % 7, (a = f + 1) < 1 || h < a ? this.siblingMonths ? (a < 1 ? (o = e, (r = t - 1) < 0 && (r = 11, o--), a = u + a) : h < a && (o = e, 11 < (r = t + 1) && (r = 0, o++), a = f - h + 1), s = {
            day: a,
            weekDay: n,
            month: r,
            year: o,
            siblingMonth: !0
        }) : s = !1 : s = {
            day: a,
            weekDay: n,
            month: t,
            year: e
        }, s && this.weekNumbers && (null === p ? p = m.calculateWeekNumber(s) : 1 == n && 52 == p ? p = 1 : 1 == n && p++, s.weekNumber = p), s && this.startDate && (s.selected = this.isDateSelected(s)), _.push(s), f++;
        return _r_(_)
    }, m.prototype.isDateSelected = function(e) {
        if (_i_("4ab:15796b9b"), e.year == this.startDate.year && e.month == this.startDate.month && e.day == this.startDate.day) return _r_(!0);
        if (this.endDate) {
            if (e.year == this.startDate.year && e.month == this.startDate.month && e.day < this.startDate.day) return _r_(!1);
            if (e.year == this.endDate.year && e.month == this.endDate.month && e.day > this.endDate.day) return _r_(!1);
            if (e.year == this.startDate.year && e.month < this.startDate.month) return _r_(!1);
            if (e.year == this.endDate.year && e.month > this.endDate.month) return _r_(!1);
            if (e.year < this.startDate.year) return _r_(!1);
            if (e.year > this.endDate.year) return _r_(!1);
            return _r_(!0)
        }
        return _r_(!1)
    }, m.prototype.setStartDate = function(e) {
        _i_("4ab:b46bd485"), this.startDate = e, _r_()
    }, m.prototype.setEndDate = function(e) {
        _i_("4ab:5e5b3f69"), this.endDate = e, _r_()
    }, m.prototype.setDate = m.prototype.setStartDate, m.diff = function(e, t) {
        return _i_("4ab:bd7e1bb7"), e = new Date(Date.UTC(e.year, e.month, e.day, 0, 0, 0, 0)), t = new Date(Date.UTC(t.year, t.month, t.day, 0, 0, 0, 0)), _r_(Math.ceil((e.getTime() - t.getTime()) / 864e5))
    }, m.interval = function(e, t) {
        return _i_("4ab:5f59974d"), _r_(Math.abs(m.diff(e, t)) + 1)
    }, m.compare = function(e, t) {
        if (_i_("4ab:93d77961"), "object" != typeof e || "object" != typeof t || null === e || null === t) throw new TypeError("dates must be objects");
        if (e.year < t.year) return _r_(-1);
        if (e.year > t.year) return _r_(1);
        if (e.month < t.month) return _r_(-1);
        if (e.month > t.month) return _r_(1);
        if (e.day < t.day) return _r_(-1);
        if (e.day > t.day) return _r_(1);
        return _r_(0)
    }, m.daysInMonth = function(e, t) {
        return _i_("4ab:d478bc66"), _r_(new Date(e, t + 1, 0).getDate())
    }, m.isLeapYear = function(e) {
        return _i_("4ab:7e93f3c0"), _r_(e % 4 == 0 && e % 100 != 0 || e % 400 == 0)
    }, m.calculateWeekNumber = function(e) {
        _i_("4ab:7a7ad21e");
        var t = new Date(Date.UTC(e.year, e.month, e.day, 0, 0, 0, 0)),
            i = new Date(t.valueOf()),
            n = (t.getUTCDay() + 6) % 7;
        i.setUTCDate(i.getUTCDate() - n + 3);
        var a = i.valueOf();
        return i.setUTCMonth(0, 1), 4 != i.getUTCDay() && i.setUTCMonth(0, 1 + (4 - i.getUTCDay() + 7) % 7), _r_(1 + Math.ceil((a - i) / 6048e5))
    }, i.exports = {
        Calendar: m
    }, _r_()
}), B.define("morphdom", function(e, t, i) {
    _i_("4ab:7ecd2528"),
        function(e) {
            if (_i_("4ab:ab944764"), "object" == typeof t && void 0 !== i) i.exports = e();
            else if ("function" == typeof define && define.amd) define([], e);
            else {
                ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).morphdom = e()
            }
            _r_()
        }(function() {
            var e, S;
            _i_("4ab:08426732"), e = {
                exports: {}
            };
            var N, t = "undefined" != typeof document ? document.body || document.createElement("div") : {},
                j = "http://www.w3.org/1999/xhtml";

            function T(e) {
                for (var t in _i_("4ab:ace7a10f"), e)
                    if (e.hasOwnProperty(t)) return _r_(!1);
                return _r_(!0)
            }
            N = t.hasAttributeNS ? function(e, t, i) {
                return _i_("4ab:eade7059"), _r_(e.hasAttributeNS(t, i))
            } : t.hasAttribute ? function(e, t, i) {
                return _i_("4ab:48b626c7"), _r_(e.hasAttribute(i))
            } : function(e, t, i) {
                return _i_("4ab:b1b897cf"), _r_(!!e.getAttributeNode(i))
            };
            var I = {
                OPTION: function(e, t) {
                    _i_("4ab:766a26cf"), e.selected = t.selected, e.selected ? e.setAttribute("selected", "") : e.removeAttribute("selected", ""), _r_()
                },
                INPUT: function(e, t) {
                    _i_("4ab:8ce9f1cf"), e.checked = t.checked, e.checked ? e.setAttribute("checked", "") : e.removeAttribute("checked"), e.value !== t.value && (e.value = t.value), N(t, null, "value") || e.removeAttribute("value"), e.disabled = t.disabled, e.disabled ? e.setAttribute("disabled", "") : e.removeAttribute("disabled"), _r_()
                },
                TEXTAREA: function(e, t) {
                    _i_("4ab:fafa0a75");
                    var i = t.value;
                    e.value !== i && (e.value = i), e.firstChild && e.firstChild.nodeValue !== i && (e.firstChild.nodeValue = i), _r_()
                }
            };

            function A() {}
            var O = function(e, t) {
                return _i_("4ab:ee20f945"), _r_(e.nodeName === t.nodeName && e.namespaceURI === t.namespaceURI)
            };

            function J(e) {
                return _i_("4ab:dc0a4ac8"), _r_(e.id)
            }
            return e.exports = function(e, t, i) {
                if (_i_("4ab:af448acf"), i || (i = {}), "string" == typeof t)
                    if ("#document" === e.nodeName || "HTML" === e.nodeName) {
                        var n = t;
                        (t = document.createElement("html")).innerHTML = n
                    } else a = t, _i_("4ab:6e64c2c2"), !S && document.createRange && (S = document.createRange()).selectNode(document.body), S && S.createContextualFragment ? s = S.createContextualFragment(a) : (s = document.createElement("body")).innerHTML = a, t = _r_(s.childNodes[0]);
                var a, s, p = {},
                    m = {},
                    g = i.getNodeKey || J,
                    v = i.onBeforeNodeAdded || A,
                    M = i.onNodeAdded || A,
                    y = i.onBeforeElUpdated || A,
                    x = i.onElUpdated || A,
                    r = i.onBeforeNodeDiscarded || A,
                    o = i.onNodeDiscarded || A,
                    B = i.onBeforeElChildrenUpdated || A,
                    _ = !0 === i.childrenOnly,
                    C = [];

                function l(e) {
                    if (_i_("4ab:5e13d614"), 1 === e.nodeType)
                        for (var t = e.firstChild; t;) g(t) || (o(t), l(t)), t = t.nextSibling;
                    _r_()
                }

                function k(e, t, i) {
                    if (_i_("4ab:f34545d8"), !1 === r(e)) return _r_();
                    t.removeChild(e), i ? g(e) || (o(e), l(e)) : function e(t, i) {
                        _i_("4ab:17cb2e51");
                        var n = g(t);
                        if (n ? p[n] = t : i || o(t), 1 === t.nodeType)
                            for (var a = t.firstChild; a;) e(a, i || n), a = a.nextSibling;
                        _r_()
                    }(e), _r_()
                }

                function w(e, t, i, n) {
                    _i_("4ab:cb66c668");
                    var a = g(t);
                    if (a && delete p[a], !n) {
                        if (!1 === y(e, t)) return _r_();
                        if (function(e, t) {
                                _i_("4ab:3c17c39e");
                                var i, n, a, s, r, o, _ = t.attributes;
                                for (i = _.length - 1; 0 <= i; i--) a = (n = _[i]).name, r = n.value, (s = n.namespaceURI) ? (a = n.localName || a, o = e.getAttributeNS(s, a)) : o = e.getAttribute(a), o !== r && (s ? ("xmlns" === n.prefix && (a = n.name), e.setAttributeNS(s, a, r)) : e.setAttribute(a, r));
                                for (i = (_ = e.attributes).length - 1; 0 <= i; i--) !1 !== (n = _[i]).specified && (a = n.name, s = n.namespaceURI, N(t, s, s ? a = n.localName || a : a) || e.removeAttributeNode(n));
                                _r_()
                            }(e, t), x(e), !1 === B(e, t)) return _r_()
                    }
                    if ("TEXTAREA" !== e.nodeName) {
                        var s, r, o, _, l, d = t.firstChild,
                            h = e.firstChild;
                        e: for (; d;) {
                            for (o = d.nextSibling, s = g(d); h;) {
                                var c = g(h);
                                if (r = h.nextSibling, !i && c && (l = m[c])) {
                                    l.parentNode.replaceChild(h, l), w(h, l, i), h = r;
                                    continue
                                }
                                var u = h.nodeType;
                                if (u === d.nodeType) {
                                    var f = !1;
                                    if (1 === u ? (O(h, d) && (c || s ? s === c && (f = !0) : f = !0), f && w(h, d, i)) : 3 !== u && 8 != u || (f = !0, h.nodeValue = d.nodeValue), f) {
                                        d = o, h = r;
                                        continue e
                                    }
                                }
                                k(h, e, i), h = r
                            }
                            s && ((_ = p[s]) ? (w(_, d, !0), d = _) : m[s] = d), !1 !== v(d) && (e.appendChild(d), M(d)), 1 === d.nodeType && (s || d.firstChild) && C.push(d), d = o, h = r
                        }
                        for (; h;) r = h.nextSibling, k(h, e, i), h = r
                    }
                    var b = I[e.nodeName];
                    b && b(e, t), _r_()
                }
                var d, h, c = e,
                    u = c.nodeType,
                    f = t.nodeType;
                if (!_)
                    if (1 === u) 1 === f ? O(e, t) || (o(e), c = function(e, t) {
                        _i_("4ab:611baa4f");
                        for (var i = e.firstChild; i;) {
                            var n = i.nextSibling;
                            t.appendChild(i), i = n
                        }
                        return _r_(t)
                    }(e, (d = t.nodeName, h = t.namespaceURI, _i_("4ab:e01bc717"), _r_(h && h !== j ? document.createElementNS(h, d) : document.createElement(d))))) : c = t;
                    else if (3 === u || 8 === u) {
                    if (f === u) return c.nodeValue = t.nodeValue, _r_(c);
                    c = t
                }
                if (c === t) o(e);
                else {
                    w(c, t, !1, _);
                    var b = function(e) {
                        _i_("4ab:07e8f038");
                        for (var t = e.firstChild; t;) {
                            var i = t.nextSibling,
                                n = g(t);
                            if (n) {
                                var a = p[n];
                                if (a && O(t, a)) {
                                    if (t.parentNode.replaceChild(a, t), w(a, t, !0), t = i, T(p)) return _r_(!1);
                                    continue
                                }
                            }
                            1 === t.nodeType && b(t), t = i
                        }
                        _r_()
                    };
                    if (!T(p)) e: for (; C.length;) {
                        var D = C;
                        C = [];
                        for (var $ = 0; $ < D.length; $++)
                            if (!1 === b(D[$])) break e
                    }
                    for (var F in p)
                        if (p.hasOwnProperty(F)) {
                            var E = p[F];
                            o(E), l(E)
                        }
                }
                return !_ && c !== e && e.parentNode && e.parentNode.replaceChild(c, e), _r_(c)
            }, _r_(e.exports)
        }), _r_()
}), booking.browserStorageHandler = function(d, e, h, c) {
    _i_("4ab:3fc107dc");
    var u = !1;
    try {
        (u = !(!d.localStorage || !d.sessionStorage)) && d.localStorage.setItem("btest", "1")
    } catch (e) {
        u = !1
    }
    var n = {
        _readCookie: function(e) {
            _i_("4ab:a38560a0");
            var t = {};
            try {
                "undefined" != typeof JSON && (t = JSON.parse(c.cookie(e)) || {})
            } catch (e) {}
            return _r_(t)
        },
        _modifySingleValue: function(e, t, i, n, a) {
            if (_i_("4ab:2a3f9040"), !t || !i) return _r_(!1);
            if (u && !a) {
                var s = "session" === e ? d.sessionStorage : d.localStorage;
                if ("delete" === t) s.removeItem(i);
                else try {
                    s.setItem(i, n)
                } catch (e) {}
            } else {
                var r, o, _, l;
                "session" === e ? r = "bs" : (r = "b", l = 30), o = this._readCookie(r), "delete" === t ? delete o[i] : o[i] = n, _ = c.isEmptyObject(o) ? null : JSON.stringify(o), c.cookie(r, _, {
                    expires: l,
                    path: "/",
                    domain: h.b_domain_end
                })
            }
            _r_()
        },
        _getValue: function(e, t, i) {
            if (_i_("4ab:baa97cdc"), !t) return _r_(void 0);
            if (u && !i) {
                var n = "session" === e ? d.sessionStorage : d.localStorage;
                return _r_(n.getItem(t))
            }
            var a, s;
            return a = "session" === e ? "bs" : "b", s = this._readCookie(a), _r_(s[t])
        }
    };
    return _r_({
        addSessionValue: function(e, t, i) {
            return _i_("4ab:8dba9d97"), _r_(n._modifySingleValue("session", "add", e, t, i))
        },
        deleteSessionValue: function(e, t) {
            return _i_("4ab:9fe487a4"), _r_(n._modifySingleValue("session", "delete", e, void 0, t))
        },
        getSessionValue: function(e, t) {
            return _i_("4ab:8dab55f2"), _r_(n._getValue("session", e, t))
        },
        addPermanentValue: function(e, t, i) {
            return _i_("4ab:bea78684"), _r_(n._modifySingleValue("permanent", "add", e, t, i))
        },
        deletePermanentValue: function(e, t) {
            return _i_("4ab:7a210658"), _r_(n._modifySingleValue("permanent", "delete", e, void 0, t))
        },
        getPermanentValue: function(e, t) {
            return _i_("4ab:d0d2ce28"), _r_(n._getValue("permanent", e, t))
        },
        isLocalStorageSupported: function() {
            return _i_("4ab:50cc1570"), _r_(u)
        }
    })
}(window, document, booking.env, window.jQuery), booking.define && booking.define("browser-storage-handler", booking.browserStorageHandler), B.define("search/modules/flags", function(e, t, i) {
    _i_("4ab:57d4a47a"), i.exports = {
        parse: function(e) {
            _i_("4ab:69c5e761");
            var s = {};
            if ("string" != typeof e) throw new TypeError("First argument must be a string");
            if ("" === (e = e.trim())) return _r_(s);
            return e.split(/\s+/).forEach(function(e) {
                _i_("4ab:9427ee60");
                var t, i = e,
                    n = !0,
                    a = e.indexOf(":"); - 1 !== a && (i = e.substr(0, a), (n = e.substr(a + 1)) || (n = 0), t = n, _i_("4ab:e20f3480"), _r_(!isNaN(parseFloat(t)) && isFinite(t)) && (n = parseInt(n, 10))), s[i] = n, _r_()
            }), _r_(s)
        }
    }, _r_()
}), B.define("search/modules/search-date", function(e, t, i) {
    _i_("4ab:17595073");
    var n = e("calendar-base").Calendar;

    function a(e) {
        _i_("4ab:40685ddd"), this.year = null, this.month = null, this.day = null, this.complete = !1, "number" == typeof e.year && (this.year = e.year), "number" == typeof e.month && (this.month = e.month), "number" == typeof e.day && (this.day = e.day), null !== this.month && (this.month < 0 ? this.month = 0 : 11 < this.month && (this.month = 11)), null !== this.day && (this.day < 0 ? this.day = 0 : this.day > s(this.year, this.month) && (this.day = s(this.year, this.month))), this.complete = null !== this.year && null !== this.month && null !== this.day, _r_()
    }

    function s(e, t) {
        return _i_("4ab:240ba80f"), _r_("number" == typeof e && "number" == typeof t ? n.daysInMonth(e, t) : 3 == t || 5 == t || 8 == t || 10 == t ? 30 : 1 == t ? 29 : 31)
    }
    a.prototype = {
        toString: function() {
            if (_i_("4ab:d1b52d54"), !this.complete) return _r_("");
            var e = this.month + 1;
            return _r_(this.year + "-" + (e < 10 ? "0" : "") + e + "-" + (this.day < 10 ? "0" : "") + this.day)
        },
        toNative: function() {
            if (_i_("4ab:3b3a334b"), !this.complete) return _r_(new Date(NaN));
            return _r_(new Date(Date.UTC(this.year, this.month, this.day, 0, 0, 0, 0)))
        },
        valueOf: function() {
            return _i_("4ab:f9ce5f81"), _r_(this.toNative().valueOf())
        }
    }, a.create = function(e) {
        var t;
        if (_i_("4ab:08a1a2fc"), "string" == typeof e && 3 == (t = e.split("-")).length && (e = {
                year: parseInt(t[0], 10),
                month: parseInt(t[1], 10) - 1,
                day: parseInt(t[2], 10)
            }), "object" != typeof e || null === e) throw new TypeError("date must be an object");
        return _r_(new a(e))
    }, a.createFromString = function(e) {
        if (_i_("4ab:37ad9e01"), "string" != typeof e) throw new TypeError("dateString must be a string");
        var t = e.split(/-/g),
            i = {
                year: parseInt(t[0], 10),
                month: parseInt(t[1], 10) - 1,
                day: parseInt(t[2], 10)
            };
        return _r_(a.create(i))
    }, a.createFlexible = function(e) {
        if (_i_("4ab:a03c854a"), "object" != typeof e || null === e) throw new TypeError("date must be an object");
        if ("number" != typeof e.year || "number" != typeof e.month || "number" != typeof e.day) throw new TypeError("invalid date");
        var t = new Date(Date.UTC(e.year, e.month, e.day, 0, 0, 0, 0));
        return e = {
            year: t.getUTCFullYear(),
            month: t.getUTCMonth(),
            day: t.getUTCDate()
        }, _r_(a.create(e))
    }, a.isStrictlyValid = function(e) {
        _i_("4ab:b9e87158");
        var t = a.create(e);
        return _r_(e.year === t.year && e.month === t.month && e.day === t.day)
    }, a.compare = function(e, t) {
        if (_i_("4ab:06bb6bb8"), !(e instanceof a && t instanceof a)) throw new TypeError("dates must be an instance of SearchDate");
        if (e.year < t.year) return _r_(-1);
        if (e.year > t.year) return _r_(1);
        if (e.month < t.month) return _r_(-1);
        if (e.month > t.month) return _r_(1);
        if (e.day < t.day) return _r_(-1);
        if (e.day > t.day) return _r_(1);
        return _r_(0)
    }, i.exports = {
        SearchDate: a
    }, _r_()
}), B.define("component/autocomplete-core", function(e, t, i) {
    _i_("4ab:d02420e1");
    var n = e("jquery"),
        a = e("component"),
        s = e("read-data-options");
    i.exports = a.extend({
        init: function() {
            _i_("4ab:666b445b"), this.highlightedIndex = -1, this.isDeletion = !1, this.items = [], this.keyDownCount = 0, this.keysDown = {}, this.listHeight = 0, this.listVisible = !1, this.preventBlurClose = !1, this.selectedIndex = -1, this.selectedValue = null, this.valueBuffer = null, this.clickOutController = e("click-out"), this.clickOutMonitorId = null, this.$input = this.$el.find('[data-input=""]'), this.input = this.$input[0], this.$list = this.$el.find('[data-list=""]'), this.$items = this.$list.children(), this.optionsSpec = this.optionsSpec || {}, this.optionsSpec = n.extend(this.optionsSpec, {
                openFocus: {
                    name: "open-focus",
                    type: Boolean
                },
                highlightFirst: {
                    name: "highlight-first",
                    type: Boolean
                },
                forceHighlight: {
                    name: "highlight-force",
                    type: Boolean
                },
                focusOnItemSelect: {
                    name: "focus-on-item-select",
                    type: Boolean
                }
            }), this.options = s(this.$el, this.optionsSpec), this.supportsInputEvent = this.input && "oninput" in this.input, this.addInputEventListeners(), this.addListEventListeners(), this.addItemsEventListeners(), this.calculateListHeight(), this.$input.attr("autocomplete", "off"), _r_()
        },
        addInputEventListeners: function() {
            _i_("4ab:8c22dd2d");
            var e = this.$input.component("keyboard");
            e.on("keydown:Escape", this.inputEscape.bind(this)), e.on("keydown:ArrowUp", this.inputArrowUp.bind(this)), e.on("keydown:ArrowDown", this.inputArrowDown.bind(this)), e.on("keydown:Enter", this.inputEnter.bind(this)), e.on("keydown:Tab", this.inputTab.bind(this)), this.$input.on("click", this.inputClick.bind(this)), this.$input.focus(this.inputFocus.bind(this)), this.$input.blur(this.inputBlur.bind(this)), this.$input.keydown(this.inputKeyDown.bind(this)), this.$input.bind("input", this.inputInput.bind(this)), this.$input.keyup(this.inputKeyUp.bind(this)), _r_()
        },
        addListEventListeners: function() {
            _i_("4ab:4ad6c428"), this.$list.mousedown(this.listMouseDown.bind(this)), this.$list.mouseup(this.listMouseUp.bind(this)), this.$list.on("click", '[data-list-item=""]', this.listItemClick.bind(this)), _r_()
        },
        addItemsEventListeners: function() {
            _i_("4ab:6105a1b9"), this.$items.click(this.listItemClick.bind(this)), _r_()
        },
        addClickOutEventListener: function() {
            _i_("4ab:5a26544b"), this.clickOutMonitorId = this.clickOutController.addMonitor(this.el, this.clickOut.bind(this)), _r_()
        },
        removeClickOutEventListener: function() {
            _i_("4ab:ab36beb4"), this.clickOutController.removeMonitor(this.clickOutMonitorId), _r_()
        },
        calculateListHeight: function() {
            _i_("4ab:a06d8252"), this.listHeight = this.$list.outerHeight(), _r_()
        },
        inputClick: function(e) {},
        inputFocus: function(e) {
            _i_("4ab:5cab6d89"), this.options.openFocus && (this.listShow(), this.autocomplete({
                fromFocus: !0
            })), _r_()
        },
        inputBlur: function(e) {
            _i_("4ab:7b0d251b"), setTimeout(this.inputBlurSync.bind(this), 4), _r_()
        },
        inputBlurSync: function() {
            _i_("4ab:3564bcc4"), !this.preventBlurClose && this.listVisible && (this.highlightReset(), this.reset()), _r_()
        },
        inputKeyDown: function(e) {
            _i_("4ab:7eedd7b4");
            var t = e.ctrlKey || e.metaKey || e.shiftKey || e.altKey,
                i = 8 == e.which || 46 == e.which;
            this.isDeletion = i, this.taintedKeyDown = t, _r_()
        },
        inputInput: function(e) {
            _i_("4ab:b3797752"), this.autocomplete(), _r_()
        },
        inputKeyUp: function(e) {
            _i_("4ab:701df07a");
            var t = this.taintedKeyDown || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || 16 <= e.which && e.which <= 18 || 91 == e.which,
                i = 32 == e.which || 48 <= e.which,
                n = 37 <= e.which && e.which <= 40;
            t || ((n || i) && this.listShow(), !this.isDeletion && !i || this.supportsInputEvent || this.autocomplete(), i && this.keyDownCount++), _r_()
        },
        inputEscape: function(e) {
            _i_("4ab:21af7760"), this.listVisible && (e.originalEvent.preventDefault(), this.highlightReset(), this.reset()), _r_()
        },
        inputArrowUp: function(e) {
            _i_("4ab:330b32cc"), e.originalEvent.preventDefault(), this.listVisible ? this.highlightPrevious() : this.listShow(), _r_()
        },
        inputArrowDown: function(e) {
            _i_("4ab:8475bbad"), e.originalEvent.preventDefault(), this.listVisible ? this.highlightNext() : this.listShow(), _r_()
        },
        inputEnter: function(e) {
            _i_("4ab:8faecce2"), this.listVisible && -1 != this.highlightedIndex && (e.originalEvent.preventDefault(), this.choose(this.highlightedIndex)), _r_()
        },
        inputTab: function(e) {
            _i_("4ab:d6bb0389"), this.inputEnter.apply(this, arguments), _r_()
        },
        listItemClick: function(e) {
            _i_("4ab:3a576f02");
            var t = n(e.currentTarget);
            this.options.focusOnItemSelect && this.input.focus(), this.choose(t.data("i")), _r_()
        },
        listMouseDown: function(e) {
            _i_("4ab:00c6d228"), this.preventBlurClose = !0, _r_()
        },
        listMouseUp: function(e) {
            _i_("4ab:5b7558ea"), this.preventBlurClose = !1, _r_()
        },
        clickOut: function() {
            _i_("4ab:47c173d2"), this.listVisible && (this.highlightReset(), this.reset()), _r_()
        },
        setValue: function(e) {
            _i_("4ab:14cae509"), this.input.value = e, _r_()
        },
        listShow: function() {
            _i_("4ab:d93e12e8"), this.listVisible || this._loading || (this.$list.addClass("-visible"), this.listVisible = !0, this.addClickOutEventListener(), this.$list[0].scrollTop = 1, setTimeout(function() {
                _i_("4ab:28fd9fe6"), this.$list[0].scrollTop = 0, _r_()
            }.bind(this), 10)), _r_()
        },
        listHide: function() {
            _i_("4ab:9c2d908d"), this.listVisible && (this.$list.removeClass("-visible"), this.resetFlags(), this.removeClickOutEventListener()), _r_()
        },
        highlightPrevious: function() {
            _i_("4ab:de4395ef");
            for (var e = this.highlightedIndex; - 1 == e ? e = this.items.length - 1 : e--, -1 != e && this.items[e].hidden;);
            this.highlightFromNavigation(e), _r_()
        },
        highlightNext: function() {
            _i_("4ab:fa949528");
            for (var e = this.highlightedIndex; e == this.items.length - 1 ? e = -1 : e++, -1 != e && this.items[e].hidden;);
            this.highlightFromNavigation(e), _r_()
        },
        highlightFromNavigation: function(e, t, i) {
            if (_i_("4ab:d9f82d1d"), (-1 == this.highlightedIndex || t) && (this.valueBuffer = this.input.value), -1 == e) this.highlightReset({
                preserveFocus: !0
            });
            else if (this.supportsInputEvent)
                if (this.valueBuffer && 0 == this.items[e].valueLowerCase.indexOf(this.valueBuffer.toLowerCase())) {
                    var n = this.valueBuffer.length,
                        a = this.items[e].value.length,
                        s = this.valueBuffer + this.items[e].value.substring(n);
                    if (this.input.value == s || i || this.setValue(s), this.input.setSelectionRange) this.input.setSelectionRange(a, a);
                    else if (this.input.createTextRange) {
                        var r = this.input.createTextRange();
                        r.collapse(!0), r.moveStart("character", n), r.moveEnd("character", a), r.select()
                    } else void 0 !== this.input.selectionStart && (this.input.selectionStart = n, this.input.selectionEnd = a)
                } else i || (this.setValue(this.items[e].value), this.fixIEFocusLoss());
            this.highlight(e), _r_()
        },
        highlightFromAutocomplete: function() {
            _i_("4ab:082bdb05");
            var e = this.input.value,
                t = this.getListFirstIndex(); - 1 !== t && this.options.highlightFirst && !this.isDeletion && e && 0 === this.items[t].valueLowerCase.indexOf(e.toLowerCase()) || this.options.forceHighlight ? this.highlightFromNavigation(t, !0) : this.highlight(-1), _r_()
        },
        highlight: function(e) {
            _i_("4ab:d5ddd8b9"), this.listShow(), -1 != this.highlightedIndex && this.$items.eq(this.highlightedIndex).removeClass("-highlighted"), -1 != e && this.$items.eq(e).addClass("-highlighted"), this.highlightedIndex = e, this.highlightScroll(), _r_()
        },
        highlightReset: function(e) {
            _i_("4ab:f5adc469"), e = e || {}, null === this.valueBuffer || e.preserveInputValue || (this.setValue(this.valueBuffer), e.preserveFocus && this.fixIEFocusLoss()), -1 != this.highlightedIndex && this.$items.eq(this.highlightedIndex).removeClass("-highlighted"), this.highlightedIndex = -1, _r_()
        },
        highlightScroll: function() {
            _i_("4ab:23869224");
            var e = !1,
                t = this.$list[0].scrollTop;
            if (-1 != this.highlightedIndex) {
                var i = this.$items.eq(this.highlightedIndex),
                    n = (1 == i.length && i.position().top) + t,
                    a = i.outerHeight();
                n + a > this.listHeight + t ? e = n + a - this.listHeight : n < t && (e = n)
            } else e = 0;
            !1 !== e && e != t && (this.$list[0].scrollTop = e), _r_()
        },
        getListLength: function() {
            return _i_("4ab:80a0a6d3"), _r_(this.items.length)
        },
        getListFirstIndex: function() {
            return _i_("4ab:3e3fdbb2"), 0 === this.items.length ? _r_(-1) : _r_(0)
        },
        autocomplete: function() {
            _i_("4ab:ee533fba"), this.postAutocomplete(), _r_()
        },
        postAutocomplete: function() {
            _i_("4ab:64423811"), this.listShow(), this.calculateListHeight(), this.highlightFromAutocomplete(), _r_()
        },
        choose: function(e) {
            _i_("4ab:eb16458f"), this.selectedIndex = e, B.env.fe_s_prprtyt ? this.selectedValue = this.items[e].valueWithPropertyType ? this.items[e].valueWithPropertyType : this.items[e].value : this.selectedValue = this.items[e].value, this.setValue(this.selectedValue), this.reset(), _r_()
        },
        reset: function(e) {
            _i_("4ab:f52a182f"), e = e || {}, -1 != this.highlightedIndex && this.$items.eq(this.highlightedIndex).removeClass("-highlighted"), this.listHide(), e.hard && (this.resetFlags(), this.selectedIndex = -1, this.selectedValue = null, this.setValue("")), _r_()
        },
        resetFlags: function() {
            _i_("4ab:cf298bfd"), this.highlightedIndex = -1, this.isDeletion = !1, this.keyDownCount = 0, this.keysDown = {}, this.listVisible = !1, this.preventBlurClose = !1, this.valueBuffer = null, _r_()
        },
        fixIEFocusLoss: function() {
            if (_i_("4ab:ad6c1d0b"), this.input.createTextRange) {
                var e = this.input.createTextRange();
                e.moveStart("character", this.input.value.length), e.collapse(), e.select()
            }
            _r_()
        }
    }), _r_()
}), B.define("component/core/input-placeholder", function(e, t, i) {
    "use strict";
    _i_("4ab:25610c83");
    var n = e("component"),
        a = e("read-data-options");
    return _r_(n.extend({
        init: function() {
            if (_i_("4ab:099889c9"), this.browserSupported()) return _r_();
            this.options = a(this.$el, {
                placeholderClass: {
                    name: "placeholder-class",
                    type: String
                },
                placeholderColor: {
                    name: "placeholder-color",
                    type: String,
                    defaultValue: "#7C90A6"
                }
            });
            var e = "input, textarea",
                t = this.$el.find(e);
            this.$el.is(e) && (t = t.add(this.$el)), t.filter(function(e, t) {
                return _i_("4ab:794725e4"), _r_(!!$(t).attr("placeholder"))
            }).each(function(e, t) {
                _i_("4ab:1208c2aa"), this.setupPlaceholder($(t)), _r_()
            }.bind(this)), _r_()
        },
        browserSupported: function() {
            _i_("4ab:90563039");
            var e = $('input[type="text"]')[0] || $('<input type="text">')[0];
            return _r_(!!("placeholder" in e))
        },
        setupPlaceholder: function(e) {
            _i_("4ab:69f56982");
            var t = $("<label />").text(e.attr("placeholder")).css({
                width: e.width() + "px",
                height: e.height() + "px",
                paddingTop: e.css("padding-top"),
                paddingLeft: e.css("padding-left"),
                paddingRight: e.css("padding-right"),
                fontFamily: e.css("font-family"),
                fontSize: e.css("font-size"),
                color: this.options.placeholderColor,
                overflow: "hidden",
                cursor: "text",
                position: "absolute"
            });
            this.options.placeholderClass && t.addClass(this.options.placeholderClass), t.insertBefore(e), t.click(function() {
                _i_("4ab:9e273151"), e.focus(), _r_()
            }), e.focus(function() {
                _i_("4ab:5c6a8b0c"), t.hide(), _r_()
            }).blur(function() {
                _i_("4ab:ee094ca9"), t[e.val().length ? "hide" : "show"](), _r_()
            }), e.get(0) === document.activeElement ? e.triggerHandler("focus") : e.triggerHandler("blur"), _r_()
        }
    }))
}), B.define("component/keyboard", function(e, t, i) {
    _i_("4ab:6d533b75");
    var n = e("component"),
        a = e("event-emitter"),
        s = {
            8: "Backspace",
            46: "Delete",
            9: "Tab",
            13: "Enter",
            32: "Space",
            27: "Escape",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            48: "0",
            49: "1",
            50: "2",
            51: "3",
            52: "4",
            53: "5",
            54: "6",
            55: "7",
            56: "8",
            57: "9",
            65: "A",
            66: "B",
            67: "C",
            68: "D",
            69: "E",
            70: "F",
            71: "G",
            72: "H",
            73: "I",
            74: "J",
            75: "K",
            76: "L",
            77: "M",
            78: "N",
            79: "O",
            80: "P",
            81: "Q",
            82: "R",
            83: "S",
            84: "T",
            85: "U",
            86: "V",
            87: "W",
            88: "X",
            89: "Y",
            90: "Z"
        };

    function r(i, n) {
        return _i_("4ab:dc192754"), _r_(function(e) {
            _i_("4ab:bd3022e0");
            var t = "";
            e.which && void 0 !== s[e.which.toString()] && (e.originalEvent.altKey && (t += ":alt"), e.originalEvent.ctrlKey && (t += ":ctrl"), e.originalEvent.metaKey && (t += ":meta"), e.originalEvent.shiftKey && (t += ":shift"), t += ":" + s[e.which], i.trigger(n + t, {
                keys: n + t,
                originalEvent: e
            })), _r_()
        })
    }
    i.exports = n.extend({
        init: function() {
            _i_("4ab:7a254e40"), a.extend(this), this.$el.bind("keydown", r(this, "keydown")).bind("keyup", r(this, "keyup")), _r_()
        }
    }), _r_()
}), B.define("component/tooltip-loc", function(e, t, i) {
    "use strict";
    _i_("4ab:29a68227");
    var n = e("component"),
        r = e("jquery");
    i.exports = n.extend({
        DEFAULTS: {
            template: '<div class="component-tooltip off" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            placement: "top",
            alignment: "center",
            trigger: "hover focus",
            animation: "true"
        },
        init: function() {
            _i_("4ab:610aec21"), this._buildOptions(), this._createTooltip(), this._attachEvents(), this.$el.trigger("ready.B.tooltip", [this.$tip]), _r_()
        },
        _buildOptions: function() {
            _i_("4ab:9ddbfae8"), this.options = r.extend({}, this.DEFAULTS, this.$el.data()), this.options.intangible = "intangible" in this.options, this.options.target && (this.options.target = r(this.options.target).first()), this.options.content || (this.options.content = this.options.title || this.el.title), _r_()
        },
        _createTooltip: function() {
            _i_("4ab:41ae04fe");
            var e = "tooltip-" + this.options.placement + " tooltip-align-" + this.options.alignment;
            this.options.extraClass && (e = e + " " + this.options.extraClass), "true" === this.options.animation && (e += " tooltip-animate"), this.$tip = r(this.options.template), this.$tip.addClass(e), this._attachContent(), this.$tip.appendTo(r("body")), this.$el.trigger("inserted.B.tooltip", [this.$tip]), _r_()
        },
        _attachContent: function() {
            _i_("4ab:48323c54");
            var e = this.$tip.find(".tooltip-inner");
            this.options.target ? e.append(this.options.target.clone()) : (this.options.target = [], e.text(this.options.content)), _r_()
        },
        _positionTooltip: function() {
            _i_("4ab:e5c31512"), this._defineAlignmentVars(), this._placeTooltip(), this._alignTooltip(), this.$tip.css({
                left: this.left,
                top: this.top,
                right: "auto"
            }), _r_()
        },
        _defineAlignmentVars: function() {
            _i_("4ab:79a44411"), this.elOffset = this.$el.offset(), this.position = "left", this.dimension = "outerWidth", this.options.placement.match(/top|bottom/) && (this.position = "top", this.dimension = "outerHeight"), _r_()
        },
        _accountForRTL: function(e) {
            if (_i_("4ab:815c5c97"), !B.env.rtl) return _r_(e);
            if ("left" === e) return _r_("right");
            if ("right" === e) return _r_("left");
            return _r_(e)
        },
        _placeTooltip: function() {
            _i_("4ab:ab5a83db");
            var e = this._accountForRTL(this.position),
                t = this.dimension;
            this._accountForRTL(this.options.placement) === e ? this[e] = this.elOffset[e] - this.$tip[t]() : this[e] = this.elOffset[e] + this.$el[t](), _r_()
        },
        _alignTooltip: function() {
            var e, t;
            switch (_i_("4ab:e5dfbb2b"), "left" === this.position ? (e = "top", t = "outerHeight") : (e = "left", t = "outerWidth"), this._accountForRTL(this.options.alignment)) {
                case e:
                    this[e] = this.elOffset[e];
                    break;
                case "center":
                    this[e] = this.$el[t]() / 2 + this.elOffset[e] - this.$tip[t]() / 2;
                    break;
                default:
                    this[e] = this.elOffset[e] + this.$el[t]() - this.$tip[t]()
            }
            _r_()
        },
        _attachEvents: function() {
            if (_i_("4ab:c4be165f"), this.options.trigger.match(/manual/)) return _r_();
            var e, t, i, n = this.options.trigger.split(" "),
                a = n.length,
                s = this.$el.add(this.$tip);
            for (this.options.intangible && (s = this.$el); a--;) "click" === (e = n[a]) ? this.$el.on("click", r.proxy(this.toggle, this)) : (t = "hover" == e ? "mouseenter" : "focusin", i = "hover" == e ? "mouseleave" : "focusout", s.on(t, r.proxy(this.show, this)), s.on(i, r.proxy(this.hide, this)));
            _r_()
        },
        _trackTransitionEnd: function(t) {
            _i_("4ab:1ec652bb");
            var i = this.$el;
            this.$tip.one("transitionend", function(e) {
                _i_("4ab:124e5a85"), i.trigger(t, [this]), _r_()
            }), _r_()
        },
        show: function() {
            _i_("4ab:be0b1075"), this.$el.trigger("show.B.tooltip", [this.$tip]), this._trackTransitionEnd("shown.B.tooltip"), this.$el.attr("aria-describedby", this.el.id), this._positionTooltip(), this.$tip.addClass("on").removeClass("off"), _r_()
        },
        hide: function() {
            _i_("4ab:3e97dd72"), this.$el.trigger("hide.B.tooltip", [this.$tip]), this._trackTransitionEnd("hidden.B.tooltip"), this.$el.removeAttr("aria-describedby"), this.$tip.removeClass("on").addClass("off"), _r_()
        },
        toggle: function() {
            _i_("4ab:e75904c1"), this.$tip.is(".on") ? this.hide() : this.show(), _r_()
        }
    }), _r_()
}), B.define("component/search/destination/input-placeholder", function(e, t, i) {
    _i_("4ab:1088c01d");
    var n = B.require("component/core/input-placeholder"),
        a = e("search/searchbox/model");
    return _r_(n.extend({
        init: function() {
            _i_("4ab:f213e46f"), this.model = a.getInstance(this.$el.data("sb-id")), n.prototype.init.apply(this, arguments), _r_()
        }
    }))
}), B.define("component/search/destination/input", function(e, t, i) {
    "use strict";
    _i_("4ab:8a13af7a"), booking.jstmpl("search_destination_autocomplete_results", function() {
        _i_("4ab:a4ae1175");
        var c = ["\n        ", "\n\n    ", "\n\t", "\n\n\t\t\n\n        ", '\n            <li\n                class="', "c-autocomplete__item sb-autocomplete__item ", "sb-autocomplete__item--cjk ", '"\n                >\n                <div class="sb-autocomplete__section-title-wrapper">\n                    <div class="sb-autocomplete__section-title">\n                        ', '\n                            <i class="bicon bicon-', '"></i>\n                        ', "\n                        <span>", "</span>\n                    </div>\n                </div>\n            </li>\n        ", '\n        <li\n            class="', "c-autocomplete__item sb-autocomplete__item sb-autocomplete__item-with_photo ", "sb-autocomplete__item--airport ", "sb-autocomplete__item--city ", "sb-autocomplete__item--country ", "sb-autocomplete__item--district ", "sb-autocomplete__item--hotel ", "sb-autocomplete__item--landmark ", "sb-autocomplete__item--region ", "sb-autocomplete__item--theme ", "sb-autocomplete__item__item--elipsis ", "sb-autocomplete__item--with-title ", "sb-autocomplete__item--with-two-lines ", "sb-autocomplete__item--regioncity ", "sb-autocomplete__item--theme-expanded ", "first_theme ", "1", "smaller_theme_wrapper ", "sb-autocomplete__item--tabbed ", "sb-autocomplete__item--with-flex ", '"\n            role="option"\n            data-list-item\n            data-i="', '"\n            data-value="', '"\n            ', '\n                data-label="', "\n            >", "", '<div class="sb-autocomplete__item-fl-title">', '<img alt="', '" src="', '" class="sb-autocomplete--photo">', '<span class="sb-autocomplete--photo"></span>', '<div class="', "sb_passion_highlight_wrapper smaller_theme ", '">\n                        <p class="sb_passion_highlight_inner">', "</strong>\n                        </p>\n                    </div>", '<span class="airport-code">', "</span>", '<span class="sb-autocomplete__item__highlight">', '<span class="sb-autocomplete__item__extra">', '<span class="bui-badge bui-badge--outline sb-autocomplete__item__property_in">', "</span><span>", "<span>", '</div>\n                <div class="sb-autocomplete__item-fl-badges">', '<span class="bui-badge bui-badge--complement">', "/private/sxp_index_sbox_label_recent_search/name", '<span class="bui-badge bui-badge--constructive">', "/private/ski_area_autocomplete_alone/name", '<span class="bui-badge bui-badge--callout">', "/private/sb_autocomplete_beach_area_badge/name", "/private/search_top_50_badge/name", "</div>", '<span class="searchbox__region__subcity__item">', ",", '<span class="sb-autocomplete__badge sb-autocomplete__badge--ski-area">', '<span class="sb-autocomplete__badge sb-autocomplete__badge--beach-area">', '<span class="sb-autocomplete__badge sb-autocomplete__badge--popular">', "</li>\n\t", "\n\n\t", '\n\t\t<li class="sb-autocomplete__google"></li>\n\t', "\n", "\n    "],
            u = ["total_index", "results", "lc", "section_title_icon", "section_title", "dest_type", "search_config", "group_config", "flags", "is_first_theme", "index", "value", "label", "photo_uri", "fe_xpi_show_flights", "iata", "search_propertytype_destination", "label_blocks", "highlighted", "text", "label_highlighted", "additional_label", "property_in_label", "b_region_city_endorsements", "is_powered_by_google"];
        return _r_(function(d) {
            _i_("4ab:ae38ab85");
            var e = "",
                h = this.fn;
            return e = function(e) {
                if (_i_("4ab:4c4c74a2"), h.MD(u[1])) {
                    e += c[1], h.MN("index", 0), e += c[2], h.MN(u[0], h.F.maybexss(h.MI(h.array_length(h.MB(u[1]))) - h.MI(1))), e += c[2];
                    var t = h.MC(u[1]) || [];
                    d.unshift(null);
                    for (var i = 1, n = t.length; i <= n; i++) {
                        if (d[0] = t[i - 1], e += c[3], h.MJ(h.MB(u[4])) && (e += c[4], e += c[5], h.MJ(/zh|xt|ja|ko/.test(h.MB(u[2]))) && (e += c[6]), e += c[7], h.MD(u[3]) && (e += [c[8], h.F.maybexss(h.MC(u[3])), c[9]].join("")), e += [c[10], h.F.maybexss(h.MC(u[4])), c[11]].join("")), e += c[12], e += c[13], h.MJ(/zh|xt|ja|ko/.test(h.MB(u[2]))) && (e += c[6]), h.MJ(h.MB(u[5]) + "" == "airport") ? e += c[14] : h.MJ(h.MB(u[5]) + "" == "city") ? e += c[15] : h.MJ(h.MB(u[5]) + "" == "country") ? e += c[16] : h.MJ(h.MB(u[5]) + "" == "district") ? e += c[17] : h.MJ(h.MB(u[5]) + "" == "hotel") ? e += c[18] : h.MJ(h.MB(u[5]) + "" == "landmark") ? e += c[19] : h.MJ(h.MB(u[5]) + "" == "region") ? e += c[20] : h.MJ(h.MB(u[5]) + "" == "theme") ? e += c[21] : e += c[16], e += c[22], h.MD(u[4]) && (e += c[23]), h.MJ(h.MB(u[6])) && h.MJ(h.MB(u[7])) && (e += c[24]), h.MJ(h.MB(u[8])) && h.MJ(h.MC(u[8]).is_region_city) && (e += c[25]), h.MJ(h.MB(u[5]) + "" == "theme") && (e += c[26], h.MD(u[9]) || (e += c[27], h.MN(u[9], c[28])), e += c[29]), h.MJ(h.MB(u[8])) && h.MJ(h.MC(u[8]).tabbed) && (e += c[30]), h.MJ(h.MC(u[8]).use_flexbox) && (e += c[31]), e += [c[32], h.F.maybexss(h.MC(u[10])), c[33], h.F.entities(h.MC(u[11])), c[34]].join(""), h.MD(u[12]) && (e += [c[35], h.F.html(h.MC(u[12])), c[34]].join("")), e += c[36], e += c[37], h.MJ(h.MC(u[8]).use_flexbox) && (e += c[38]), e += c[37], h.MJ(h.MC(u[8]).ski_item_replace_image) ? e += [c[39], h.F.html(h.MC(u[12])), c[40], h.STATIC_HOSTNAME("/static/img/ski/ski.png", 0, 0, 0), c[41]].join("") : h.MJ(h.MC(u[8]).beach_labeled_filter) ? (e += c[37], h.MJ(2 == h.track_experiment("HMDIFMWBaUEVWNERT")) ? e += [c[39], h.F.html(h.MC(u[12])), c[40], h.STATIC_HOSTNAME("/static/img/beach/beach_icon.jpg", 0, 0, 0), c[41]].join("") : h.MJ(3 == h.track_experiment("HMDIFMWBaUEVWNERT")) && (e += [c[39], h.F.html(h.MC(u[12])), c[40], h.STATIC_HOSTNAME("/static/img/beach/beach_image.jpg", 0, 0, 0), c[41]].join("")), e += c[37]) : h.MJ(h.MB(u[13])) ? e += [c[39], h.F.html(h.MC(u[12])), c[40], h.STATIC_HOSTNAME(h.MB(u[13]), 0, 0, 0), c[41]].join("") : (e += c[37], h.MK(h.MB(u[14])) && (e += c[42]), e += c[37]), e += c[37], h.MJ(h.MB(u[5]) + "" == "theme")) e += c[43], e += c[44], e += [c[45], h.F.entities(h.MC(u[12])), c[46]].join("");
                        else {
                            e += c[37], h.MJ(h.MB(u[15])) && h.MJ(h.MB(u[14])) && (e += [c[47], h.F.maybexss(h.MC(u[15])), c[48]].join("")), e += c[37];
                            var a = "";
                            if (a += c[37], h.MD(u[17])) {
                                a += c[37];
                                var s = i,
                                    r = t,
                                    o = n;
                                for (t = h.MC(u[17]) || [], d.unshift(null), i = 1, n = t.length; i <= n; i++) d[0] = t[i - 1], a += c[37], h.MD(u[18]) && (a += c[49]), a += [c[37], h.F.entities(h.MC(u[19])), c[37]].join(""), h.MD(u[18]) && (a += c[48]), a += c[37];
                                d.shift(), i = s, t = r, n = o, a += c[37]
                            } else h.MD(u[20]) ? a += [c[37], h.F.maybexss(h.MC(u[20])), c[37]].join("") : h.MD(u[12]) && (a += [c[37], h.F.entities(h.MC(u[12])), c[37]].join(""));
                            if (a += c[37], h.MD(u[21]) && (a += [c[50], h.F.maybexss(h.MC(u[21])), c[48]].join("")), a += c[37], h.MN(u[16], a), e += c[37], h.MJ(h.MB(u[22])) ? e += [c[51], h.F.maybexss(h.MC(u[22])), c[52], h.F.maybexss(h.MC(u[16])), c[48]].join("") : e += [c[53], h.F.maybexss(h.MC(u[16])), c[48]].join(""), e += c[37], h.MJ(h.MC(u[8]).use_flexbox)) e += c[54], h.MJ(h.MC(u[8]).previous_search) && (e += [c[55], h.ME(c[56], h.MB, h.MN, null), c[48]].join("")), e += c[37], h.MJ(h.MC(u[8]).ski_item) ? e += [c[57], h.ME(c[58], h.MB, h.MN, null), c[48]].join("") : h.MJ(h.MC(u[8]).beach_labeled_filter) && h.MJ(3 == h.track_experiment("HMDIFMWBaUEVWNERT")) ? e += [c[59], h.ME(c[60], h.MB, h.MN, null), c[48]].join("") : h.MK(h.MC(u[8]).previous_search) && h.MJ(h.MC(u[8]).popular) && (e += [c[57], h.F.entities(h.ME(c[61], h.MB, h.MN, null)), c[48]].join("")), e += c[62];
                            else {
                                if (e += c[37], h.MD(u[23])) {
                                    e += c[37], s = i, r = t, o = n;
                                    var _, l = _;
                                    for (t = h.MC(u[23]) || [], d.unshift({
                                            endorsement: null
                                        }), i = 1, n = t.length; i <= n; i++) d[0].endorsement = _ = t[i - 1], e += [c[63], h.F.maybexss(_)].join(""), h.MJ(i != t.length) && (e += c[64]), e += c[48];
                                    d.shift(), i = s, t = r, n = o, _ = l, e += c[37]
                                }
                                e += c[37], h.MJ(h.MC(u[8]).ski_item) ? e += [c[65], h.ME(c[58], h.MB, h.MN, null), c[48]].join("") : h.MJ(h.MC(u[8]).beach_labeled_filter) && h.MJ(3 == h.track_experiment("HMDIFMWBaUEVWNERT")) ? e += [c[66], h.ME(c[60], h.MB, h.MN, null), c[48]].join("") : h.MJ(h.MC(u[8]).popular) && (e += [c[67], h.F.entities(h.ME(c[61], h.MB, h.MN, null)), c[48]].join("")), e += c[37]
                            }
                            e += c[37]
                        }
                        e += c[37], h.MN("index", h.MI(h.MB(u[10])) + h.MI(1)), e += c[37], e += c[68]
                    }
                    d.shift(), e += c[69], h.MD(u[24]) && (e += c[70]), e += c[71]
                }
                return e += c[71], _r_(e)
            }(e += c[0]), e += c[72], _r_(e)
        })
    }()), booking.jstmpl("search_destination_autocomplete_loading", function() {
        _i_("4ab:82995877");
        var l = ["\n        ", '\n\n<ul class="c-autocomplete__list sb-autocomplete__list sb-autocomplete__list--loading">\n\t', '\n\t\t<li class="c-autocomplete__item sb-autocomplete__item sb-autocomplete__item--city">\n\t\t\t', '\n\t\t\t\t<span class="sb-autocomplete__item-placeholder-text js-placeholder-text"></span>\n\t\t\t', "\n\t\t</li>\n\t", "\n</ul>\n", "\n    "],
            d = ["fe_sb_autocomplete_loading_items"];
        return _r_(function(o) {
            _i_("4ab:d9585df0");
            var e = "",
                _ = this.fn;
            return e = function(e) {
                _i_("4ab:2cc1f6cd"), _.MN("fe_sb_autocomplete_loading_items", 5), e += l[1];
                var t = _.seq(1, _.MB(d[0])) || [];
                o.unshift(null);
                for (var i = 1, n = t.length; i <= n; i++) {
                    o[0] = t[i - 1], e += l[2];
                    var a = i,
                        s = t,
                        r = n;
                    for (t = _.seq(1, 3) || [], o.unshift(null), i = 1, n = t.length; i <= n; i++) o[0] = t[i - 1], e += l[3];
                    o.shift(), i = a, t = s, n = r, e += l[4]
                }
                return o.shift(), _r_(e += l[5])
            }(e += l[0]), _r_(e += l[6])
        })
    }());
    var a = e("jquery"),
        n = e("component/autocomplete-core"),
        s = e("search/searchbox/model"),
        r = e("search/searchbox/analytics"),
        o = e("search/searchbox/events");
    i.exports = n.extend({
        init: function() {
            _i_("4ab:625d038f"), this.optionsSpec = {
                delay: {
                    name: "delay",
                    type: Number,
                    defaultValue: 300
                },
                modelId: {
                    name: "sb-id",
                    type: String,
                    required: !0
                },
                filterDestType: {
                    name: "filter-dest-type",
                    type: String
                },
                gpf: {
                    name: "gpf",
                    type: Boolean
                },
                gpOnly: {
                    name: "gp-only",
                    type: Boolean
                },
                minLength: {
                    name: "minlength",
                    type: Number,
                    defaultValue: 2
                },
                focusOnLoad: {
                    name: "focus-on-load",
                    type: Boolean
                },
                focusOnTyping: {
                    name: "focus-on-typing",
                    type: Boolean
                },
                isSticky: {
                    name: "is-sticky",
                    type: Boolean
                },
                required: {
                    name: "required",
                    type: Boolean
                },
                disableAutoComplete: {
                    name: "disable-auto-complete",
                    type: Boolean,
                    default: !1
                },
                isOrigin: {
                    name: "origin",
                    type: Boolean
                },
                collapseACSingleAirport: {
                    name: "collapse-ac-single-airport",
                    type: Boolean
                },
                flags: {
                    name: "flags",
                    type: String,
                    defaultValue: ""
                }
            }, a.extend(this.optionsSpec, this.extendOptions()), this.$errors = this.$el.find("[data-error-id]"), this.$clear = this.$el.find('[data-clear=""]'), this.$searchbox = this.$el.closest(".sb-searchbox__outer"), this.isA11yMessageReading = !1, this.$searchbox.length ? this.$skiInput = this.$searchbox.find('input[name="is_ski_area"]') : this.$skiInput = a('form#frm input[name="is_ski_area"]'), this.$skiInput.length || (this.$el.after('<input type="hidden" name="is_ski_area" value="0">'), this.$skiInput = a('input[name="is_ski_area"]')), n.prototype.init.apply(this, arguments), this.model = s.getInstance(this.options.modelId), this.groupName = this.options.isOrigin ? "origin" : "destination", this.model.use(this.groupName), this.model.use("dates"), this.model.updateFlags(this.options.flags), this.inputUntouched = !0, this.model.on("change", this.modelChange.bind(this)), this.model.on("validation", this.modelValidation.bind(this)), this.destinationModel = this.options.isOrigin ? this.model.origin : this.model.destination, this.options.isOrigin && this.destinationModel.configure({
                groupName: "origin"
            }), this.options.required && this.destinationModel.configure({
                validate: !0
            }), this.options.gpOnly && this.destinationModel.configurePredictions({
                gpo: 1
            }), this.options.gpf && this.destinationModel.configure({
                gpf: 1
            }), this.options.filterDestType && this.destinationModel.configurePredictions({
                dest_type: this.options.filterDestType
            }), this.options.focusOnLoad && this.focusOnLoad(), this.options.focusOnTyping && this.options.isSticky && (this.stickyController = e("search/searchbox/searchbox-sticky-controller").getController()), this.options.focusOnTyping && this.enableFocusOnTyping(), this.$errors.filter(".-visible").length && (this.destinationModel.valid = !1), this.templateResults = B.jstmpl("search_destination_autocomplete_results"), this.toggleClear(), this.modelInit(), this.renderLoadingElement(), _r_()
        },
        addInputEventListeners: function() {
            _i_("4ab:24e521ff"), n.prototype.addInputEventListeners.apply(this, arguments), this.$clear.length && this.$clear.on("click", this.clearClick.bind(this)), _r_()
        },
        renderLoadingElement: function() {
            _i_("4ab:cc2eea09"), this.shouldShowLoadingState = !0;
            this.$loading = a(B.jstmpl("search_destination_autocomplete_loading").render({})), this.$loading.find(".js-placeholder-text").each(function() {
                _i_("4ab:c89d5b36"), a(this).width(65 + parseInt(65 * Math.random(), 10)), _r_()
            }), this.$loading.insertAfter(this.$list), _r_()
        },
        showLoading: function() {
            _i_("4ab:96c0c99b"), this.shouldShowLoadingState && (n.prototype.listHide.apply(this), this.$loading.addClass("-visible")), _r_()
        },
        hideLoading: function() {
            _i_("4ab:57a3a0b0"), this.shouldShowLoadingState && this.$loading.removeClass("-visible"), _r_()
        },
        modelInit: function() {
            _i_("4ab:1c0c0ee5");
            var e = {
                ss: this.input.value
            };
            this.destinationModel.init(e), _r_()
        },
        modelChange: function(e) {
            if (_i_("4ab:b5cbe522"), e && e.group && e.group == this.groupName) {
                var t = this.destinationModel.get();
                t.ss == this.input.value || this.isDeletion || (t.ss_modified && B.env.fe_s_prprtyt ? this.setValue(t.ss_modified) : this.setValue(t.ss)), e.onlyCurrentCountry && (this.$input.focus(), this.autocomplete()), this.inputUntouched = !1
            }
            _r_()
        },
        modelValidation: function(e) {
            _i_("4ab:c7ade742"), e && e.group == this.groupName && (this.$errors.filter(".-visible").removeClass("-visible"), this.destinationModel.valid || (this.$el.find("#destination__error").addClass("-visible"), this.$errors.filter('[data-error-id="' + this.destinationModel.validationError + '"]').addClass("-visible"), r.send("[error] destination: " + this.destinationModel.validationError))), _r_()
        },
        inputClick: function() {
            _i_("4ab:68860ba7"), ("" === this.input.value || this.inputUntouched) && this.model.getFlag("on_click_suggestions") && this.showSuggestions(), n.prototype.inputClick.apply(this, arguments), _r_()
        },
        inputInput: function() {
            _i_("4ab:c248fea4"), this.isVisibleCalendar() && this.hideCalendar();
            var e = this.input.value;
            this.destinationModel.setSearchString(e), this.inputUntouched = !1, n.prototype.inputInput.apply(this, arguments), _r_()
        },
        inputKeyUp: function(e) {
            _i_("4ab:3219e728"), n.prototype.inputKeyUp.apply(this, arguments), _r_()
        },
        inputBlur: function() {
            _i_("4ab:d599e928"), clearTimeout(this.timer), this.destinationModel.abortPredictions(), this.hideLoading();
            var e = this.destinationModel.get().ss_raw;
            if (e) {
                var t = e.split(/\s+/).length;
                r.sendOnce("[interaction] autocomplete tokens typed [" + t + "]")
            }
            0 === this.input.value.length && this.model.getFlag("clear_input_on_click") && this.input.value !== this.$input.data("cached-value") && (this.input.value = this.$input.data("cached-value") || ""), n.prototype.inputBlur.apply(this, arguments), this.suggestionsLocked = !1, _r_()
        },
        inputEnter: function(e) {
            _i_("4ab:4cf5fa63"), r.send("[interaction] search input pressed enter"), n.prototype.inputEnter.apply(this, arguments), _r_()
        },
        onAutocompleteSearchStart: function() {},
        clearClick: function(e) {
            _i_("4ab:8ef3f742"), e.preventDefault(), this.reset({
                hard: !0
            }), this.input.focus(), _r_()
        },
        setValue: function(e) {
            _i_("4ab:121e7d07"), n.prototype.setValue.apply(this, arguments), this.toggleClear(), _r_()
        },
        toggleClear: function() {
            _i_("4ab:514e2251"), this.$clear.length && this.$clear.toggleClass("-visible", "" !== this.input.value), _r_()
        },
        listShow: function() {
            _i_("4ab:07ef5b76"), this.results && this.results.filter(function(e) {
                return _i_("4ab:171866a8"), _r_(e.photo_uri)
            }).length ? this.$list.addClass("sb-autocomplete__list-with_photos") : this.$list.removeClass("sb-autocomplete__list-with_photos"), 0 < this.items.length && this.input.value.length >= this.options.minLength ? n.prototype.listShow.apply(this, arguments) : 0 < this.items.length && this.model.getFlag("on_click_suggestions") && n.prototype.listShow.apply(this, arguments), _r_()
        },
        autocomplete: function(e) {
            if (_i_("4ab:47695c6a"), this.options.disableAutoComplete) return clearTimeout(this.naturalSearchTimeout), this.input.value.length >= this.options.minLength && (this.naturalSearchTimeout = setTimeout(function() {
                _i_("4ab:11a0b526"), a.get("/natural_search_strings", {
                    ss: this.query()
                }), _r_()
            }.bind(this), this.options.delay)), _r_();
            e = e || {}, this.highlightReset({
                preserveInputValue: !0
            }), clearTimeout(this.timer), this.destinationModel.abortPredictions(), this.hideLoading(), this.toggleClear(), e.fromFocus || (this.isDeletion ? this.destinationModel.reset() : this.postAutocomplete(), this.input.value.length >= this.options.minLength && (this._loading = !0), this.timer = setTimeout(function() {
                _i_("4ab:a9af8f9c"), this.input.value.length >= this.options.minLength && (this.showLoading(), this.destinationModel.getPredictions(this.query(), this.render.bind(this)), this.onAutocompleteSearchStart()), _r_()
            }.bind(this), this.options.delay)), _r_()
        },
        query: function() {
            return _i_("4ab:2a33cf36"), _r_(this.input.value)
        },
        extendOptions: function() {
            return _i_("4ab:306d554b"), _r_({})
        },
        render: function(e, t) {
            if (_i_("4ab:f499a806"), this.results = [], this.items = [], this.$items = a({}), this.on_click_suggestion = !1, this.hideLoading(), !e && this.model.getFlag("on_click_suggestions_track") && t.on_click_suggestion && (this.on_click_suggestion = !0), this._loading = !1, !e || "service-booking-no-results" != e.toString() && -1 === e.toString().indexOf("ZERO_RESULTS") || r.send("[context] autocomplete zero results search"), !e && Array.isArray(t.results)) {
                if (r.send("[context] autocomplete suggestions [" + t.results.length + "]"), t.is_powered_by_google && r.send("[context] autocomplete google place search"), B.env.fe_s_prprtyt && t.results.map(function(e) {
                        _i_("4ab:2fd9b0fd");
                        var t = e.meta_matches;
                        if (t && 0 < t.length)
                            for (var i = 0; i < t.length; i++) {
                                var n = t[i];
                                "hoteltype_new" !== n.type || e.property_in_label || (e.property_in_label = n.text, e.property_in_id = n.id)
                            }
                        _r_()
                    }), 1 < B.et.track("HMDIFMWBaUEVWNERT")) t.results.some(function(e) {
                    return _i_("4ab:f072ecd6"), _r_(e.flags && e.flags.beach_labeled_filter)
                }) && B.et.stage("HMDIFMWBaUEVWNERT", 2);
                this.results = t.results, B.env.rtl && (t.is_rtl = !0), this.options.collapseACSingleAirport && 2 == t.results.length && "city" === t.results[0].dest_type && "airport" === t.results[1].dest_type && t.results[1].flags && t.results[1].flags.tabbed && (t.results[1].flags.tabbed = 0, t.results.shift()), this.items = t.results.filter(function(e) {
                    return _i_("4ab:ac61c77f"), _r_(!!e.label)
                }).map(function(e) {
                    if (_i_("4ab:8f54c1dd"), e.property_in_label && B.env.fe_s_prprtyt) return _r_({
                        value: e.label,
                        valueLowerCase: e.label.toLowerCase(),
                        valueWithPropertyType: B.jstmpl.translations("ss_search_box_search_property_type", null, {
                            property_type: e.property_in_label,
                            destination: e.ss
                        })
                    });
                    return _r_({
                        value: e.label,
                        valueLowerCase: e.label.toLowerCase()
                    })
                }), this.$list.html(this.templateResults.render(t)), this.$items = this.$list.find('[data-list-item=""]'), this.model.getFlag("a11yinput") && this.a11yAnnounceResults(t)
            } else e || (this.$list.html(this.templateResults.render(t)), this.model.getFlag("a11yinput") && this.a11yAnnounceResults(t));
            this.postAutocomplete(), setTimeout(function() {
                _i_("4ab:2f456915"), this.$items.each(function() {
                    _i_("4ab:00324166"), this.scrollWidth > this.offsetWidth && this.setAttribute("data-title", this.getAttribute("data-label")), _r_()
                }), _r_()
            }.bind(this), 500), _r_()
        },
        a11yAnnounceResults: function(e) {
            if (_i_("4ab:ed896d16"), Array.isArray(e.results) && 0 < e.results.length && !this.isA11yMessageReading) {
                this.isA11yMessageReading = !0;
                var t = setTimeout(function() {
                    _i_("4ab:f93d45a5"), this.$el.find(".sb-a11y-announcement").show(), this.$el.find(".sb-a11y-announcement").html("<p>" + B.jstmpl.translations("a11y_index_autocomplete_suggested_destinations") + "</p>"), setTimeout(function() {
                        _i_("4ab:444f6be7"), this.$el.find(".sb-a11y-announcement").html(""), this.$el.find(".sb-a11y-announcement").hide(), clearTimeout(t), this.isA11yMessageReading = !1, _r_()
                    }.bind(this), 500), _r_()
                }.bind(this), 900)
            }
            _r_()
        },
        postAutocomplete: function() {
            _i_("4ab:4fadc203"), n.prototype.postAutocomplete.apply(this, arguments), this.a11yAnnounceResults(this), _r_()
        },
        choose: function(e) {
            _i_("4ab:0da8ed6a"), r.send("[interaction] autocomplete click position [" + e + "]"), r.send("[interaction] autocomplete click [" + this.results[e].dest_type + "]"), clearTimeout(this.timer), this.destinationModel.abortPredictions(), this.destinationModel.set(this.results[e]), n.prototype.choose.apply(this, arguments);
            var t = this.results[e];
            B.env.fe_s_prprtyt && (a(".property_in_filter").remove(), t.property_in_id && a("form.sb-searchbox").append('<input class="property_in_filter" type="hidden" name="order_ht_id" value="' + t.property_in_id + '">')), t.flags && t.flags.deals && this.$el.after("<input type='hidden' name='em_ac_deal_option_clicked' value='1'>"), this.$skiInput && this.$skiInput.length && this.$skiInput.val(t.flags && t.flags.ski_item), B.et.goal("autocomplete_option_selected"), "theme" == this.results[e].dest_type ? B.et.goal("autocomplete_option_selected_theme") : "hotel" == this.results[e].dest_type ? B.et.goal("autocomplete_option_selected_hotel") : this.results[e].place_id ? B.et.goal("autocomplete_option_selected_google_places") : "query_finder" == this.results[e].result_type || B.et.goal("autocomplete_option_selected_destination"), this.results[e].place_id || B.et.goal("autocomplete_option_selected_brick"), "anywhere" == this.results[e].dest_type ? this.model.setFields("drec_traffic", [{
                name: "dr_source",
                value: "sb_anywhere"
            }]) : this.model.setFields("drec_traffic", []), this.model.emit("change", {
                group: ""
            });
            if (-1 !== ["landmark", "airport", "district", "region"].indexOf(t.dest_type)) {
                this.locationSelected = !0;
                var i = [];
                (this.model.getFlag("open_location_in_map") || this.model.getFlag("open_location_in_map_checkbox")) && (this.model.getFlag("open_location_in_map") && i.push({
                    name: "map",
                    value: 1
                }), this.model.getFlag("open_location_in_map_checkbox") && a(".sb-searchbox__map_trigger input").prop("checked", "checked"), a(".sb-searchbox__map_trigger").removeClass("g-hidden"), this.destinationModel.setTrackingFields("map_trigger", i))
            } else(this.model.getFlag("open_location_in_map") || this.model.getFlag("open_location_in_map_checkbox")) && (a(".sb-searchbox__map_trigger").addClass("g-hidden"), this.model.getFlag("open_location_in_map_checkbox") && a(".sb-searchbox__map_trigger input").prop("checked", null), this.destinationModel.setTrackingFields("map_trigger", []));
            "theme" != this.results[e].dest_type && "theme_dest" != this.results[e].result_type || this.model.submit(), o.emit(o.SEARCHBOX_DESTINATION_SELECTED, {
                destination: t
            }), this.showCalendarOnDesinationChange(), _r_()
        },
        showCalendarOnDesinationChange: function() {
            if (_i_("4ab:b4b21470"), !this.model.getFlag("calendar_on_destination_change") || this.model.dates.get().checkin) return _r_();
            this.showCalendar(), _r_()
        },
        showCalendar: function() {
            _i_("4ab:b61f6959"), setTimeout(function() {
                _i_("4ab:d736bf4f"), B.env.fe_sb_single_calendar ? this.$searchbox.find(".xp__date-time:first").trigger("click") : this.$searchbox.find(".c2-wrapper-s-checkin").trigger("show"), _r_()
            }.bind(this)), _r_()
        },
        hideCalendar: function() {
            _i_("4ab:e21627eb"), setTimeout(function() {
                _i_("4ab:bea99b4c"), this.$searchbox.find(".c2-wrapper-s-checkin").trigger("hide"), this.$searchbox.find(".c2-wrapper-s-checkout").trigger("hide"), _r_()
            }.bind(this)), _r_()
        },
        isVisibleCalendar: function() {
            return _i_("4ab:431de88e"), _r_(this.$searchbox.find(".c2-calendar").is(":visible"))
        },
        showSuggestions: function() {
            if (_i_("4ab:443fd77a"), this.suggestionsLocked) return _r_();
            this.destinationModel.getSuggestions(this.render.bind(this)), this.suggestionsLocked = !0, _r_()
        },
        focusOnLoad: function() {
            _i_("4ab:ce00b1fb"), a(document).ready(function() {
                _i_("4ab:49e84ab1"), this.input.focus(), _r_()
            }.bind(this)), _r_()
        },
        enableFocusOnTyping: function() {
            _i_("4ab:6e04453b");
            var e = a(document),
                t = this.onKeyDown.bind(this);
            e.on("keydown.autofocus", t), this.$input.on("blur", function() {
                _i_("4ab:4a28701a"), e.on("keydown.autofocus", t), _r_()
            }.bind(this)).on("focus", function() {
                _i_("4ab:9df4e392"), e.off("keydown.autofocus", t), _r_()
            }.bind(this)), _r_()
        },
        onKeyDown: function(e) {
            if (_i_("4ab:25a5d610"), B.env.copy_editor_enabled) return _r_();
            var t = this.$input.offset().top,
                i = e.keyCode,
                n = e.metaKey || e.ctrlKey;
            !(47 < i && i < 58 || 64 < i && i < 91 || 95 < i && i < 112) || n || !document.activeElement || /INPUT|TEXTAREA|SELECT/.test(document.activeElement.nodeName) || a(".modal-mask:visible").length || (this.options.isSticky && this.stickyController ? this.stickyController.show() : window.scrollY > t && a("html, body").animate({
                scrollTop: t - 5
            }), this.input.value && this.setValue(""), this.$input.focus(), this.$input.trigger("focus_destionation_whilie_typing")), _r_()
        },
        reset: function() {
            _i_("4ab:f34c1d07"), this.selectedValue || this.destinationModel.reset(), n.prototype.reset.apply(this, arguments), _r_()
        },
        inputBlurSync: function() {
            _i_("4ab:cc183c13"), n.prototype.inputBlurSync.apply(this, arguments), _r_()
        },
        clickOut: function() {
            _i_("4ab:3f94e649"), n.prototype.clickOut.apply(this, arguments), _r_()
        }
    }), _r_()
}), B.define("search/destination/model", function(e, t, i) {
    "use strict";
    _i_("4ab:b0ceb1db");
    var n = e("search/destination/service"),
        a = e("browser-storage-handler"),
        s = e("server-data");

    function r(e) {
        _i_("4ab:93f52184"), this.model = e, this.data = {
            ss: ""
        }, this.valid = !0, this.validationError = "", this.options = {
            groupName: "destination"
        }, this.predicitonParameters = {}, this.searchInstance = null, this.skipValidation = !1, this.suggestionsCache = {
            results: []
        }, this.ac = {
            selected: !1,
            dataset: []
        }, _r_()
    }
    $.extend(r.prototype, {
        init: function(e) {
            _i_("4ab:dd883746"), this.data = e;
            var t = {};
            this.model && this.model.getFlag && (this.model.getFlag("on_click_suggestions") || this.model.getFlag("on_click_suggestions_anywhere")) && (this.model.getFlag("on_click_suggestions_anywhere") && (t.anywhere = !0), s.b_ac_search_history && this.model.getFlag("on_click_suggestions") && (t.searchHistory = !0), this.model.use("group"), this.model.on("init", function(e) {
                _i_("4ab:6fa2874c"), "group" === e.group && this.fetchSuggestions(t), _r_()
            }.bind(this))), this.emit("init"), _r_()
        },
        configure: function(e, t) {
            _i_("4ab:4db4fdf8"), void 0 !== t ? this.options[e] = t : "object" == typeof e && $.extend(this.options, e), _r_()
        },
        getOption: function(e) {
            return _i_("4ab:7b16e4e9"), _r_(this.options[e])
        },
        get: function() {
            return _i_("4ab:6dd4b5d3"), _r_(this.data)
        },
        set: function(i) {
            if (_i_("4ab:a1bb7825"), a.isLocalStorageSupported() && i.dest_id && i.dest_id !== a.getSessionValue("prev_destination_id")) {
                var e = JSON.stringify(i);
                a.addSessionValue("prev_destination_id", i.dest_id, !1), a.addSessionValue("prev_destination_data", e, !1)
            }
            if (this.ac.selected = !0, this.searchInstance && this.searchInstance.getResultDetails && !i._details) return this.searchInstance.getResultDetails(i, function(e, t) {
                _i_("4ab:c9457da2"), (t = t || {})._details = !0, this.set(t), window.ga && window.ga("send", "event", "ac_google_places", [i.place_types || "unknown", i.name].join("|"), this.data.ss_raw, i.position), _r_()
            }.bind(this)), _r_();
            this.data.ss = i.ss, this.data.dest_id = i.dest_id, this.data.dest_type = i.dest_type, this.data.city = i.city, this.data.iata = i.iata, i.property_in_label && B.env.fe_s_prprtyt && (this.data.ss_modified = B.jstmpl.translations("ss_search_box_search_property_type", null, {
                property_type: i.property_in_label,
                destination: i.ss
            })), i.flags && 1 < B.et.track("HMDIFMWBaUEVWNERT") ? this.data.ac_flags = i.flags : this.data.ac_flags = {}, i.nr_hotels && (this.data.nr_hotels = i.nr_hotels), this.data.acc_type_id = i.acc_type_id, i.place_id && i.latitude && i.longitude ? (this.data.place_id = i.place_id, this.data.latitude = i.latitude, this.data.longitude = i.longitude, this.data.place_types = i.place_types) : (i.dest_id && i.latitude && i.longitude ? (this.data.place_id = "", this.data.latitude = i.latitude, this.data.longitude = i.longitude) : (this.data.place_id = "", this.data.latitude = "", this.data.longitude = ""), this.data.place_types = null), i._fa && this.model.setFormAction(i._fa), i._ef = i._ef || [], this.data.dest_id && i._ef.push({
                name: "dest_id",
                value: this.data.dest_id
            }), this.data.dest_type && i._ef.push({
                name: "dest_type",
                value: this.data.dest_type
            }), this.data.iata && i._ef.push({
                name: "iata",
                value: this.data.iata
            }), this.data.place_id && i._ef.push({
                name: "place_id",
                value: this.data.place_id
            }), this.data.latitude && i._ef.push({
                name: "place_id_lat",
                value: this.data.latitude
            }), this.data.longitude && i._ef.push({
                name: "place_id_lon",
                value: this.data.longitude
            }), this.data.place_types && Array.isArray(this.data.place_types) && i._ef.push({
                name: "place_types",
                value: this.data.place_types.join(",")
            }), i.exp_tags && i._ef.push({
                name: "ettar",
                value: i.exp_tags
            }), i._ef.push({
                name: "search_pageview_id",
                value: s.pageview_id
            }), i._ef.push({
                name: "search_selected",
                value: "true"
            }), "rentalcars" === i.type && (this.data.type = "rentalcars", this.data.placeKey = i.placeKey, this.data.rentalcarsItem = i, "origin" === this.options.groupName ? this.model.setFields("rentalcars", i.fields.puFields) : this.model.setFields("rentalcarsDrop", i.fields.doFields)), i.region_type && i._ef.push({
                name: "region_type",
                value: i.region_type
            }), this.model.setFields("destinationNotSelected", []), this.model.setFields("destinationSelected", i._ef), this.emit("change"), _r_()
        },
        setSearchString: function(e) {
            _i_("4ab:9e900bbe"), this.data.ss = e, this.data.ss_raw = e, this.valid || this.validate(), _r_()
        },
        reset: function() {
            _i_("4ab:3a2fa1d0"), this.data.dest_id = null, this.data.dest_type = null, this.data.iata = null, this.data.place_id = null, this.data.latitude = null, this.data.longitude = null, this.model.setFormAction(null), this.model.setFields(this.options.groupName, []), this.model.setFields("destinationNotSelected", []), this.model.setFields("destinationSelected", [{
                name: "dest_id",
                value: ""
            }, {
                name: "dest_type",
                value: ""
            }, {
                name: "search_pageview_id",
                value: s.pageview_id
            }, {
                name: "search_selected",
                value: "false"
            }]), "rentalcars" == this.data.type && (this.ac.selected = !1, this.data.type = null, this.data.placeKey = null, this.data.rentalcarsItem = null, "origin" == this.options.groupName ? this.model.setFields("rentalcars", []) : this.model.setFields("rentalcarsDrop", [])), this.emit("change"), _r_()
        },
        setTrackingFields: function(e, t) {
            _i_("4ab:b1a2c949"), this.model.setFields(e, t), this.emit("change"), _r_()
        },
        validate: function() {
            _i_("4ab:e5c7ef6a");
            var e = !0,
                t = "";
            if (!this.options.validate) return this.valid = e, this.validationError = t, _r_(e);
            return "rentalcars" !== this.model.getMode() || this.ac.selected || (e = !1, t = "search-string-empty"), "" === this.data.ss && (e = !1, t = "search-string-empty"), this.valid !== e && (this.valid = e, this.validationError = t, this.emit("validation")), _r_(e)
        },
        initPredictions: function() {
            (_i_("4ab:d62dd623"), this.options.gpf) && B.require("search/destination/service-atlas").init();
            _r_()
        },
        configurePredictions: function(e) {
            _i_("4ab:2348e34e"), $.extend(this.predicitonParameters, e), _r_()
        },
        getPredictions: function(e, a) {
            _i_("4ab:f598218f");
            var t = $.extend({}, s.search_autocomplete_params, this.predicitonParameters);
            this.searchInstance && this.searchInstance.abort(), this.ac = {
                selected: !1,
                dataset: []
            }, t.ss = e, t.gpf = this.options.gpf, this.options.onlyCurrentCountry && (t.e_acf_i = s.b_country_id, t.e_acf_t = "country"), "rentalcars" == this.model.getMode() && (t.bgo = 1), this.searchInstance = n.search(t, function(e, i) {
                _i_("4ab:38fe5c61");
                var n = arguments;
                if (i) {
                    if (this.model.setFields(this.options.groupName, i._ef), this.model.setFields("destinationNotSelected", i._efd), this.searchInstance && this.searchInstance.getResultDetails && i.results && i.results[0] && !i.results[0]._details) return this.searchInstance.getResultDetails(i.results[0], function(e, t) {
                        _i_("4ab:606dd660"), e || (this.ac.dataset = i.results, this.ac.dataset[0] = t, this.ac.dataset[0]._details = !0), a.apply(null, n), _r_()
                    }.bind(this)), _r_();
                    this.ac.dataset = i.results
                }
                a.apply(null, n), _r_()
            }.bind(this)), this.model.setFields("destinationOriginal", [{
                name: "ss_raw",
                value: t.ss
            }]), this.model.setFields("destinationSelected", [{
                name: "search_pageview_id",
                value: s.pageview_id
            }]), _r_()
        },
        abortPredictions: function() {
            _i_("4ab:c8ff77c3"), this.searchInstance && this.searchInstance.abort(), _r_()
        },
        getSuggestions: function(e, t) {
            if (_i_("4ab:2b4e0241"), this.suggestionsCache.results.length) return setTimeout(function() {
                _i_("4ab:48316781"), e(null, this.suggestionsCache), _r_()
            }.bind(this), 0), _r_();
            this.model.one("destination:suggestions", function() {
                _i_("4ab:76e249d1"), this.suggestionsCache.results.length && e(null, this.suggestionsCache), _r_()
            }.bind(this)), _r_()
        },
        fetchSuggestions: function(e) {
            if (_i_("4ab:c86e178d"), this.suggestionsLoading) return _r_();
            var t = B.require("search/destination/service-booking");
            this.suggestionsInstance = t.getSuggestions(function(e, t) {
                if (_i_("4ab:28ad48ee"), !e && t && t.results) {
                    t.on_click_suggestion = 0 < t.results.length;
                    for (var i = 0; i < t.results.length; i++) !t.results[i].ss && t.results[i].label && (t.results[i].ss = t.results[i].label);
                    this.suggestionsCache = t
                }
                this.suggestionsLoading = !1, this.emit("destination:suggestions"), _r_()
            }.bind(this), e), this.suggestionsLoading = !0, _r_()
        },
        initOnlyCurrentCountry: function(e) {
            _i_("4ab:af26eabf"), this.options.onlyCurrentCountry = !!e, _r_()
        },
        getOnlyCurrentCountry: function() {
            return _i_("4ab:aad660fa"), _r_(!!this.options.onlyCurrentCountry)
        },
        setOnlyCurrentCountry: function(e) {
            _i_("4ab:cdbded91"), this.options.onlyCurrentCountry = !!e, this.emit("change", {
                onlyCurrentCountry: !0
            }), _r_()
        },
        emit: function(e, t) {
            _i_("4ab:a87f384f"), t = t || {}, this.model.emit(e, $.extend(t, {
                group: this.options.groupName
            })), _r_()
        },
        parseMltRecommendations: function(e) {
            return _i_("4ab:d5b0070b"), e && e.length && e.forEach(function(e) {
                _i_("4ab:2ff1e9b7"), e.ss = e.label, e.dest_id = e.b_ufi, e.dest_type = "city", e.photo_uri = e.picture_city ? e.picture_city : e.b_image_url, e.mlt_recommendation = 1, _r_()
            }), _r_(e)
        }
    }), i.exports = r, _r_()
}), B.define("search/destination/service", function(i, e, t) {
    "use strict";
    _i_("4ab:66a8c5f6");
    var n = i("search/destination/service-booking"),
        a = i("search/destination/service-carrier");

    function s(e, t, a) {
        var i, n, s;
        _i_("4ab:d49d2f29");
        var r = [],
            o = [],
            _ = [],
            l = 0,
            d = function(e, t, i) {
                if (_i_("4ab:98f723f7"), l++, r.length && (t ? o.push(t) : _[e] = i, l == r.length))
                    if (o.length == r.length) a.call(null, o[0], null);
                    else {
                        var n = function(e, i, t, n) {
                            _i_("4ab:7270a272");
                            var a = t || 6,
                                s = n || 3,
                                r = {
                                    results: [],
                                    _ef: [],
                                    _efd: []
                                };
                            return e.forEach(function(t) {
                                if (_i_("4ab:5dc5bf98"), !t) return _r_();
                                if (t.results)
                                    if (r.results.length) {
                                        i && (t.results = t.results.filter(h)), t.results.splice(s);
                                        var e = a - t.results.length;
                                        r.results.splice(e), r.results = t.results.concat(r.results)
                                    } else r.results = t.results;
                                ["_ef", "_efd"].forEach(function(e) {
                                    _i_("4ab:6dab5c6f"), t[e] && (r[e] = r[e].concat(t[e].filter(function(e) {
                                        _i_("4ab:cfe35e0f");
                                        var t = {};
                                        return e.forEach(function(e) {
                                            _i_("4ab:3ea7ecae"), t[e.name] = !0, _r_()
                                        }), _r_(function(e) {
                                            return _i_("4ab:a960f252"), _r_(!t[e.name])
                                        })
                                    }(r[e])))), _r_()
                                }), r.is_powered_by_google = r.is_powered_by_google || t.results.length && t.is_powered_by_google, _r_()
                            }), r.results.forEach(function(e, t) {
                                var i, n, a;
                                _i_("4ab:584c6ebc"), e._ef = (i = e._ef, n = "ac_position", a = t, _i_("4ab:ca4a0847"), (i = i.filter(function(e) {
                                    return _i_("4ab:a68aebab"), _r_(e.name !== n)
                                })).push({
                                    name: n,
                                    value: a
                                }), _r_(i)), _r_()
                            }), r.city = r.results, r.__js_upa__ = r.is_powered_by_google, _r_(r)
                        }(_, !0);
                        a.call(null, null, n)
                    } _r_()
            };
        for (i = 0; i < e.length; i++)(n = e[i].search.call(e[i], $.extend({}, t), d.bind(null, i))).getResultDetails && (s = n.getResultDetails), r.push(n);
        return _r_({
            abort: function() {
                for (_i_("4ab:576abf68"), i = 0; i < r.length; i++) r[i].abort();
                _r_()
            },
            getResultDetails: s
        })
    }

    function h(e) {
        return _i_("4ab:251aa6fe"), _r_(-1 != ["route", "postal_code", "street_address"].indexOf(e.place_type))
    }

    function r(e, t, i) {
        var n;
        _i_("4ab:529ac1f3");
        var a = {};
        return n = e.search.call(e, $.extend({}, t), function(e, t) {
            _i_("4ab:60458060"), setTimeout(function() {
                _i_("4ab:9e1c7e98"), e ? i.call(null, e, null) : i.call(null, e, t), _r_()
            }, 0), _r_()
        }), a.abort = function() {
            _i_("4ab:bdda41de1"), n && n.abort(), _r_()
        }, _r_(a)
    }
    t.exports = {
        search: function(e, t) {
            if (_i_("4ab:7e165367"), !e || !e.ss || "function" != typeof t) throw new Error("Invalid arguments");
            if (e.bgo) return _r_(i("search/destination/service-rentalcars").search(e, t));
            if (e.useAutoCompleteService) return _r_(i("search/destination/service-autocomplete").search(e, t));
            if (/^[,\s]+$/.test(e.ss)) return t(new Error("Invalid search string"), null), _r_();
            return e.gpo ? _r_(a.search(e, t)) : e.fesp_acf_i || e.fesp_acf_i_regions || e.fesp_acf_i_cities ? _r_(r(n, e, t)) : e.gpf && e.ss.match(/[0-9]/) ? _r_(s([n, a], e, t)) : e.gpr ? _r_(function(e, t, i) {
                var n;
                _i_("4ab:6f86c29a");
                var a = [],
                    s = [],
                    r = function(e, t) {
                        if (_i_("4ab:ed5c5479"), a.length)
                            if (e) s.push(e), s.length == a.length && i.call(null, e, t);
                            else
                                for (i.call(null, e, t), n = 0; n < a.length; n++) a[n].abort();
                        _r_()
                    };
                for (n = 0; n < e.length; n++) a.push(e[n].search.call(e[n], $.extend({}, t), r));
                return _r_({
                    abort: function() {
                        for (_i_("4ab:576abf681"), n = 0; n < a.length; n++) a[n].abort();
                        _r_()
                    }
                })
            }([n, a], e, t)) : e.gpf ? _r_(function(i, t, n) {
                var a;
                _i_("4ab:f4c2df45");
                var s, r = {},
                    o = function(e, t) {
                        _i_("4ab:822a41e4"), setTimeout(function() {
                            _i_("4ab:c066c38d"), e && i.length ? s() : n.call(null, e, t), _r_()
                        }, 0), _r_()
                    };
                return (s = function() {
                    _i_("4ab:fd77b50e");
                    var e = i.shift();
                    a = e.search.call(e, $.extend({}, t), o), r.getResultDetails = a.getResultDetails, _r_()
                })(), r.abort = function() {
                    _i_("4ab:bdda41de"), a && a.abort(), _r_()
                }, _r_(r)
            }([n, a], e, t)) : _r_(r(n, e, t))
        }
    }, _r_()
}), B.define("search/destination/service-atlas", function(e, t, i) {
    "use strict";
    _i_("4ab:79f3cc35");
    var n = e("event-emitter"),
        s = e("server-data"),
        r = s.b_map_center_latitude || s.b_latitude || void 0,
        o = s.b_map_center_longitude || s.b_longitude || void 0,
        a = ["ChIJNy0jzGPMUQ4RWpboPw0ztMY", "ChIJ2xJC2SwmsUcRBqiHnUEubtY", "ChIJT-IyeGHurw0Rx89nUEaYTPM", "ChIJk_Swujrurw0R7yS_X2BSuD4", "ChIJv02k1k9oWQ0RWvhKDOLvTWA", "ChIJEdjOLYEU9x4RSanYNmYyKNE"],
        _ = {
            administrative_area_level_1: "region",
            administrative_area_level_2: "region",
            administrative_area_level_3: "region",
            administrative_area_level_4: "region",
            administrative_area_level_5: "region",
            region: "region",
            airport: "airport",
            country: "country",
            locality: "city",
            point_of_interest: "landmark",
            poi: "landmark",
            route: "region",
            street_address: "region",
            postal_code: "region",
            sublocality: "district"
        },
        l = "zh" === s.b_lang || "xt" === s.b_lang || "ja" === s.b_lang || "ko" === s.b_lang,
        d = "cn" === s.b_guest_country,
        h = !s.b_enable_mapbox_fallback || !d;

    function c() {
        return _i_("4ab:1442e591"), _r_(!!B.atlas)
    }

    function u(n, e, t) {
        _i_("4ab:d472c002");
        var i = {
            city: []
        };
        i.__upa__ = e.filter(f).slice(0, 5).map(function(e, t) {
            _i_("4ab:27b1d603"), e = e.get("data");
            var i = {
                upa: !0,
                nr_hotels: 0,
                nr_hotels_25: 0,
                ss_raw: n.ss,
                dest_id: e.id,
                place_id: e.id,
                dest_type: _[e.types && e.types[0]] || "landmark",
                place_type: e.types && e.types[0],
                place_types: e.types,
                ss: e.description,
                label: e.description,
                label_blocks: function(a, s) {
                    _i_("4ab:6036b1d4");
                    var r = [];
                    if (!s || 0 === s.length) return _r_([{
                        text: a
                    }]);
                    s[0].offset && r.push({
                        text: a.substr(0, s[0].offset)
                    });
                    return s.forEach(function(e, t) {
                        _i_("4ab:0ca6c165");
                        var i = e.offset + e.length,
                            n = (s[t + 1] && s[t + 1].offset || a.length) - i;
                        r.push({
                            highlighted: !0,
                            text: a.substr(e.offset, e.length)
                        }), n && r.push({
                            text: a.substr(i, n)
                        }), _r_()
                    }), _r_(r)
                }(e.description, e.matched_substrings),
                label_highlighted: function(e, t, i) {
                    _i_("4ab:c213b701");
                    var n = "";
                    if (i = i || {}, !t || 0 === t.length) return _r_(e);
                    for (var a = t.map(function(e) {
                            return _i_("4ab:ca1dc371"), _r_(e.offset)
                        }), s = t.map(function(e) {
                            return _i_("4ab:7fb56cd4"), _r_(e.offset + e.length - 1)
                        }), r = 0; r < e.length; r++) - 1 != a.indexOf(r) && (n += "<b>"), n += e.charAt(r), -1 != s.indexOf(r) && (n += "</b>");
                    i.encode && (n = (n = (n = B.jstmpl.fn.FILTERS.entities(n)).replace(/&lt;b&gt;/g, "<b>")).replace(/&lt;&#47;b&gt;/g, "</b>"));
                    return _r_(n)
                }(e.description, e.matched_substrings, {
                    encode: n.gpf_encode
                }),
                label_multiline: "<span><b>" + e.description + "</b></span>",
                hotels: 0,
                lc: s.b_lang,
                position: t,
                is_google_result: h,
                _ef: [],
                cjk: l
            };
            return d && (i.is_mapbox_result = !0, i.longitude = e.longitude, i.latitude = e.latitude, i._details = !0), i._ef.push({
                name: "ac_position",
                value: t
            }), i._ef.push({
                name: "ac_click_type",
                value: "g"
            }), _r_(i)
        }), i.results = i.__upa__, i._ef = [], i._ef.push({
            name: "search_pageview_id",
            value: s.pageview_id
        }), window.google && (i.is_powered_by_google = 0 < i.results.length, i.__js_upa__ = i.is_powered_by_google), t(null, i), _r_()
    }

    function f(e) {
        _i_("4ab:ef069c17");
        var t = e.get("data");
        return _r_(-1 === a.indexOf(t.id))
    }

    function b(a, s) {
        if (_i_("4ab:9221a364"), !a.place_id) return s(null, a), _r_();
        this.atlas.getGeocodeDetails({
            placeId: a.place_id
        }, function(e) {
            var t, i, n;
            _i_("4ab:c06b68e2"), t = a, i = e, n = s, _i_("4ab:917860fc"), (t = t || {}).id = i.id || i.place_id, t.place_id = t.id, t.name = i.name || i.formatted_address, t.latitude = i.geometry.location.lat(), t.longitude = i.geometry.location.lng(), t.place_types = i.types, t.dest_type = _[i.types && i.types[0]] || "landmark", t._ef = t._ef || [], t._ef.push({
                name: "ss_short",
                value: i.name
            }), n(null, t), _r_(), _r_()
        }), _r_()
    }
    i.exports = n.extend({
        init: function(e, n) {
            _i_("4ab:158480be"), e = e || {};
            var a = this;
            if (!c()) throw "service-atlas: B.atlas is not available";
            if (this.initialized) return n && this.atlas && this.atlas.done(n), _r_();
            this.initialized = !0;
            B.require(["async-loader"], function(e) {
                _i_("4ab:2d04b6b9"), e.load({
                    js: "async_atlas_places_js"
                }).then(function() {
                    _i_("4ab:a1bb1e25"),
                        function(e) {
                            _i_("4ab:865b974b");
                            var t = document.createElement("div"),
                                i = "provider-google-places";
                            s.b_enable_mapbox_fallback && (i = d ? "provider-mapbox-places" : "provider-google-places"), a.atlas = new e({
                                provider: i,
                                modules: ["autocomplete", "places"],
                                options: {
                                    domNode: t,
                                    channel: "booking-places"
                                }
                            }), n && a.atlas.done(n), _r_()
                        }(B.atlas.require("atlas-places")), _r_()
                }), _r_()
            }), _r_()
        },
        search: function(t, i) {
            if (_i_("4ab:91576c26"), !t || !t.ss || "function" != typeof i) throw new Error("service-atlas-invalid-arguments");
            if (t.ss.length < 2) return setTimeout(function() {
                _i_("4ab:b941c4cc"), i(new Error("service-atlas-too-short-search-string"), {}), _r_()
            }, 4), _r_({
                getDetails: $.noop,
                abort: $.noop
            });
            if (!c()) return setTimeout(function() {
                _i_("4ab:db39d051"), i(new Error("service-atlas-no-atlas"), null), _r_()
            }, 4), _r_({
                getDetails: $.noop,
                abort: $.noop
            });
            var n = !1,
                e = {
                    query: t.ss
                };
            r && o && (e.lat = r, e.lon = o, e.radius = 3e4);
            var a = function(e) {
                    _i_("4ab:e88f2721"), n || (e && Array.isArray(e) ? u(t, e, i) : i(new Error("service-atlas-invalid-results"), null)), _r_()
                },
                s = function(e) {
                    _i_("4ab:914a5be9"), n || i(new Error("service-atlas-error " + e), null), _r_()
                };
            this.init(t, function() {
                _i_("4ab:e076c80f"), this.atlas.autocomplete(e, a, s), _r_()
            }.bind(this));
            return _r_({
                getResultDetails: b.bind(this),
                abort: function() {
                    _i_("4ab:3598375c"), n = !0, _r_()
                }
            })
        }
    }), _r_()
}), B.define("search/destination/service-booking", function(e, t, i) {
    "use strict";
    _i_("4ab:2e8824b0");
    var n = e("event-emitter"),
        s = B.env.b_sb_autocomplete_predictions_url,
        r = B.env.b_sb_autocomplete_predictions_method || "GET";

    function o(n, e, t) {
        _i_("4ab:d3955a00"), n && n.city ? n.__upa__ || 0 !== n.city.length || n.bbtoollocations && 0 !== n.bbtoollocations.length || n.theme && 0 !== n.theme.length || n.searches && 0 !== n.searches.length ? (n.city = n.city.map(function(e, t) {
            var i;
            return _i_("4ab:d41e504d"), !e.label && e.labels && (e.label = (i = e.labels, _i_("4ab:0e901f84"), _r_(i.map(function(e) {
                return _i_("4ab:5a0bfd0c"), _r_(e.text)
            }).join(", ")))), !e.labels || "zh" !== e.lc && "xt" !== e.lc && "ja" !== e.lc && "ko" !== e.lc || (e.label_blocks = function(e) {
                _i_("4ab:b468720b");
                var i = [];
                return e.forEach(function(e, t) {
                    _i_("4ab:3460616d"), 0 < t && i.push({
                        text: ", "
                    }), i.push({
                        highlighted: !!e.hl,
                        text: e.text
                    }), _r_()
                }), _r_(i)
            }(e.labels)), e.ss = e.label, e.label_highlighted = e.label_highlighted || e.label, e.position = t, e._ef = e._ef || [], e._ef.push({
                name: "ac_position",
                value: t
            }), e._ef.push({
                name: "ac_langcode",
                value: e.lc
            }), e._ef.push({
                name: "ac_click_type",
                value: "b"
            }), n.__did_you_mean__ && (e._ef.push({
                name: "suggested_term",
                value: n.__did_you_mean__.suggestion
            }), e._ef.push({
                name: "suggestion_clicked",
                value: 1
            })), _r_(e)
        }), n.results = n.city, n.bbtoollocations && (n.results = n.bbtoollocations.map(function(e, t) {
            return _i_("4ab:5a42b6da"), delete e.label_highlighted, e.label_blocks = [{
                highlighted: 1,
                text: e.name
            }, {
                text: ", "
            }, {
                text: e.address
            }], e.ss = e.name, e.latitude = e.place_id_lat, e.longitude = e.place_id_lon, e.position = t, e._ef = e._ef || [], e._ef.push({
                name: "bbtoollocation",
                value: "1"
            }), _r_(e)
        }).concat(n.results)), n.theme && (n.theme = n.theme.map(function(e, t) {
            return _i_("4ab:69e34768"), e.ss = e.label, e._ef = e._ef || [], e._ef.push({
                name: "ac_position",
                value: t + n.city.length
            }), e._ef.push({
                name: "ac_click_type",
                value: "b"
            }), _r_(e)
        }), n.theme.length && e.limitOneTheme && (n.theme = [n.theme[0]]), n.results = n.results.concat(n.theme)), n._ef = n._ef || [], n._ef.push({
            name: "search_pageview_id",
            value: B.env.pageview_id
        }), n._ef.push({
            name: "ac_suggestion_list_length",
            value: n.city.length
        }), n._ef.push({
            name: "ac_suggestion_theme_list_length",
            value: n.theme ? n.theme.length : 0
        }), n._efd = n._efd || [], t(null, n)) : t(new Error("service-booking-no-results"), n) : t(new Error("service-booking-data-invalid"), null), _r_()
    }
    i.exports = n.extend({
        search: function(n, a) {
            if (_i_("4ab:62f69040"), !n || !n.ss || "function" != typeof a) throw new Error("Invalid arguments");
            var e, t = (e = n, _i_("4ab:559d946f"), e.term = e.ss, delete e.ss, _r_(e));
            this.emit("beforeajax", n, t);
            var i = $.ajax({
                type: r,
                url: s,
                data: t,
                success: function(e, t, i) {
                    _i_("4ab:bc1b1311"), o(e, n, a), _r_()
                }.bind(this),
                error: function(e, t, i) {
                    _i_("4ab:43a0a1b4"),
                        function(e, t, i) {
                            if (_i_("4ab:086594e5"), "error" === t && 403 === e.status) {
                                var n = window.location.href;
                                if (n.indexOf("page_reload") < 0) {
                                    var a = 2e3;
                                    "mdot" === B.env.b_site_type && (a = 1e3);
                                    var s = B.jstmpl.translations("search_sbox_abandoned_search_open_tab_message"),
                                        r = B.jstmpl.translations("search_sbox_abandoned_search_open_tab_message_refresh_cta"); - 1 < n.indexOf("#") ? ($("body").append($("<div class='sb-lightbox-brick-error'><p>" + s + "<br><br><a class='btn btn-primary' onclick='window.location.reload(true)'>" + r + "</a></p></div>")), setTimeout(function() {
                                        _i_("4ab:fd72ef7a"), window.location.reload(!0), _r_()
                                    }, a)) : (-1 < n.indexOf("?") ? n += "&page_reload=1" : n += "?page_reload=1", $("body").append($("<div class='sb-lightbox-brick-error'><p>" + s + "<br><br><a class='btn btn-primary' href='" + n + "'>" + r + "</a></p></div>")), setTimeout(function() {
                                        _i_("4ab:b9dc97e2"), window.location.href = n, _r_()
                                    }, a))
                                }
                            }
                            _r_()
                        }(e, t), "abort" !== t && a(new Error("service-booking-error " + i), null), _r_()
                }.bind(this)
            });
            return _r_({
                abort: function() {
                    _i_("4ab:5bcdce42"), i && i.abort && i.abort(), _r_()
                }
            })
        },
        getSuggestions: function(n, e) {
            _i_("4ab:20c1eb6f");
            var t = B.env.search_autocomplete_params,
                i = "";
            if (e && e.searchHistory && B.env.b_ac_search_history) return n(!1, {
                results: B.env.b_ac_search_history
            }), _r_();
            "searchresults" === B.env.b_action && (i = "valid" === (i = B.search.dates("checkin")).type ? i.toString() : ""), t = Object.assign({}, t, {
                ttype: 0,
                checkin: i
            });
            var a = $.ajax({
                type: "get",
                url: "/search_history_and_suggestions",
                data: t,
                success: function(e, t, i) {
                    _i_("4ab:c06447a2"), n(null, e), _r_()
                },
                error: function(e, t, i) {
                    if (_i_("4ab:5cf8cb68"), "abort" === t) return _r_();
                    n(new Error("service-booking-error " + i), null), _r_()
                }
            });
            return _r_({
                abort: function() {
                    _i_("4ab:5bcdce421"), a && a.abort && a.abort(), _r_()
                }
            })
        }
    }), _r_()
}), B.define("search/destination/service-carrier", function(e, t, i) {
    "use strict";
    _i_("4ab:f2c05fc2");
    var n = e("event-emitter"),
        a = B.env.b_sb_googleplaces_carrier_url,
        r = B.env.b_sb_googleplaces_carrier_method || "POST";

    function o(i, n) {
        if (_i_("4ab:0c9fc41f"), !i.place_id) return n(null, i), _r_();
        ! function(e, n) {
            if (_i_("4ab:a41428fa"), !e) return _r_();
            e.geo = 1, $.ajax({
                type: r,
                url: a,
                data: JSON.stringify(e),
                xhrFields: {
                    withCredentials: !0
                },
                crossDomain: !0,
                success: function(e, t) {
                    _i_("4ab:eb5b715c"), n(t, e), _r_()
                }.bind(this),
                error: function(e, t, i) {
                    _i_("4ab:805b6ae3"), "abort" !== t && n(t, new Error("service-booking-error " + i)), _r_()
                }.bind(this)
            }), _r_()
        }({
            place_id: i.place_id
        }, function(e, t) {
            if (_i_("4ab:0a1a3e2d"), "success" != e) return n(null, i), _r_();
            (i = i || {}).latitude = t.latitude, i.longitude = t.longitude, n(null, i), _r_()
        }), _r_()
    }
    i.exports = n.extend({
        search: function(e, s) {
            if (_i_("4ab:bc55f999"), !e || !e.ss || "function" != typeof s) throw new Error("service-carrier-invalid-arguments");
            if (e.ss.length < 2) return setTimeout(function() {
                _i_("4ab:18829fb0"), s(new Error("service-carrier-too-short-search-string"), {}), _r_()
            }, 4), _r_({
                getDetails: $.noop,
                abort: $.noop
            });
            var t, i = (t = e, _i_("4ab:a4371962"), _r_({
                ss: t.ss,
                languagecode: t.lang
            }));
            i.geo = 0, this.emit("beforeajax", e, i);
            var n = $.ajax({
                type: r,
                url: a,
                data: JSON.stringify(i),
                xhrFields: {
                    withCredentials: !0
                },
                crossDomain: !0,
                success: function(e, t, i) {
                    var n, a;
                    _i_("4ab:bc1b13111"), n = e, a = s, _i_("4ab:c5cd02c8"), n && n.length ? a(null, {
                        results: n = n.filter(function(e) {
                            if (_i_("4ab:b3f9c498"), !e) return _r_(!1);
                            return e.place_type, e.place_type, e._ef = e._ef || [], _r_(e)
                        }),
                        is_powered_by_google: 1
                    }) : a(new Error("service-carrier-invalid-results"), null), _r_(), _r_()
                }.bind(this),
                error: function(e, t, i) {
                    _i_("4ab:5bc5e4fc"), "abort" !== t && s(new Error("service-booking-error " + i), null), _r_()
                }.bind(this)
            });
            return _r_({
                getResultDetails: o.bind(this),
                abort: function() {
                    _i_("4ab:5bcdce422"), n && n.abort && n.abort(), _r_()
                }
            })
        },
        getSuggestions: function(n, e) {
            _i_("4ab:20c1eb6f1");
            var t = B.env.search_autocomplete_params,
                i = "";
            if (e && e.searchHistory && B.env.b_ac_search_history) return n(!1, {
                results: B.env.b_ac_search_history
            }), _r_();
            "searchresults" === B.env.b_action && (i = "valid" === (i = B.search.dates("checkin")).type ? i.toString() : ""), t = Object.assign({}, t, {
                ttype: 0,
                checkin: i
            });
            var a = $.ajax({
                type: "get",
                url: "/search_history_and_suggestions",
                data: t,
                success: function(e, t, i) {
                    _i_("4ab:c06447a21"), n(null, e), _r_()
                },
                error: function(e, t, i) {
                    if (_i_("4ab:5cf8cb681"), "abort" === t) return _r_();
                    n(new Error("service-booking-error " + i), null), _r_()
                }
            });
            return _r_({
                abort: function() {
                    _i_("4ab:5bcdce423"), a && a.abort && a.abort(), _r_()
                }
            })
        }
    }), _r_()
}), B.define("component/search/travel-purpose/checkbox", function(e, t, i) {
    "use strict";
    _i_("4ab:c97147f0");
    var n = e("component"),
        a = e("search/searchbox/model");
    i.exports = n.extend({
        init: function() {
            _i_("4ab:96e0d65c"), this.$form = this.$el.closest("form"), this.$checkbox = this.$el.find("[name=sb_travel_purpose]"), this.profileSplitAccounts = B.env.b_connected_user_accounts, this.formAction = this.$form.attr("action"), this.model = a.getInstance(this.$form.attr("data-sb-id")), this.searchedBusiness = !1, this.$checkbox.length && "checked" === this.$checkbox[0].getAttribute("checked") && (this.searchedBusiness = !0), this.updateRedirectFormFieldsOnModelChange = !1, (this.searchedBusiness || this.profileSplitAccounts) && this.bindEvents(), _r_()
        },
        bindEvents: function() {
            _i_("4ab:7bbe26f9"), this.$checkbox.on("change", this.handleCheckboxChange.bind(this)), this.model.on("change", function(e) {
                _i_("4ab:1b76a97f"), !this.updateRedirectFormFieldsOnModelChange || e && e.redirectFormFields || this.createRedirectFormFields(), _r_()
            }.bind(this)), _r_()
        },
        handleCheckboxChange: function() {
            _i_("4ab:8eb5c85b"), this.$checkbox.prop("checked") ? this.$hidden && (this.$hidden.remove(), this.$checkbox[0].setAttribute("name", "sb_travel_purpose")) : (this.$hidden = $('<input name="sb_travel_purpose" value="leisure" type="hidden" />').appendTo(this.$el), this.$checkbox[0].setAttribute("name", "h_sb_travel_purpose")), this.createRedirectFormFields(), _r_()
        },
        createRedirectFormFields: function() {
            if (_i_("4ab:62fcb273"), !this.profileSplitAccounts || !this.profileSplitAccounts.length || !B.env.feature_profile_split_sb_checkbox) return _r_();
            this.model.setFields("bnss", []), this.model.trigger("change", {
                redirectFormFields: !0
            });
            var e = this.findAccountType(this.$checkbox.prop("checked")),
                t = this.formAction,
                i = B.env.b_secure_domain + this.$el.attr("data-profile-switch-url"); - 1 === t.indexOf(B.env.b_nonsecure_hostname) && (t = B.env.b_nonsecure_hostname + t), -1 === t.indexOf("?") ? t += +this.$form.serialize() : t += "&" + this.$form.serialize(), this.model.setFields("bnss", [{
                type: "hidden",
                name: "redirect_url",
                value: t
            }, {
                type: "hidden",
                name: "switch_to_user_id",
                value: e.b_user_id
            }]), this.$form.attr("method", "POST"), this.model.setFormAction(i), this.model.trigger("change", {
                redirectFormFields: !0
            }), this.updateRedirectFormFieldsOnModelChange = !0, _r_()
        },
        findAccountType: function(e) {
            var t, i, n;
            for (_i_("4ab:ac648a14"), t = 0, i = this.profileSplitAccounts.length; t < i; ++t) "business" === this.profileSplitAccounts[t].b_type && e ? n = this.profileSplitAccounts[t] : "business" === this.profileSplitAccounts[t].b_type || e || (n = this.profileSplitAccounts[t]);
            return _r_(n)
        }
    }), _r_()
}), B.define("component/search/dates/date-field", function(e, t, i) {
    "use strict";
    _i_("4ab:d7169192");
    var h = e("caret"),
        n = e("component"),
        c = e("formatting/date"),
        a = e("keycodes"),
        s = e("read-data-options"),
        r = e("ga-tracker"),
        o = e("search/searchbox/model");
    i.exports = n.extend({
        init: function() {
            _i_("4ab:cecab28d"), this.options = s(this.el, {
                forceInitRender: {
                    name: "force-init-render",
                    type: Boolean,
                    defaultValue: !1
                },
                modelId: {
                    name: "sb-id",
                    type: String,
                    required: !0
                },
                modelMode: {
                    name: "mode",
                    type: String,
                    defaultValue: "single"
                },
                validators: {
                    name: "validators",
                    type: String,
                    defaultValue: ""
                }
            });
            var e = this.options.validators.split(",");
            this.model = o.getInstance(this.options.modelId), this.model.use("dates"), this.model.on("change", this.modelChange.bind(this)), this.model.dates.configure({
                noValidation: !0,
                allowMaxLos: !0,
                notEmpty: 0 <= e.indexOf("not-empty")
            }), this.$display = this.$el.find("[data-display]"), this.$inputs = this.$el.find("[data-input]"), this.$inputYear = this.$inputs.filter('[data-input-fragment="year"]'), this.$inputMonth = this.$inputs.filter('[data-input-fragment="month"]'), this.$inputDay = this.$inputs.filter('[data-input-fragment="day"]'), this.$controls = this.$el.find("[data-controls]"), this.$iconDay = this.$el.find("[data-icon-day]"), this.$field = this.$el.find("[data-field]"), this.$controls.on("mousedown", this.controlsMouseDown.bind(this)), this.$inputs.on("focus", this.inputFocus.bind(this)), this.$inputs.one("focus", this.inputFocusTrack.bind(this)), this.$inputs.on("blur", this.inputBlur.bind(this)), this.$inputs.on("keydown", this.inputKeyDown.bind(this)), this.$inputs.on("keyup", this.inputKeyUp.bind(this)), this.$inputs.on("keypress", this.inputKeyPress.bind(this)), B.eventEmitter.on("CALENDAR:shown CALENDAR:closed", this.updateFocusClass.bind(this)), this.previousState = {}, this.state = {
                editing: !1,
                currentField: null
            }, this.checkDateFields(), this.initModel(), _r_()
        },
        checkDateFields: function() {
            var e, t;
            _i_("4ab:639fee1f"), this.$inputYear.length && this.$inputMonth.length && this.$inputDay.length || (e = this.model.dates.getFallbackDates(this.options.modelMode), 0 === this.$inputYear.length && (t = e.year || "", this.$inputYear = this.createDateInputField(this.options.modelMode + "_year", t).appendTo(this.el), setTimeout(function() {
                throw _i_("4ab:f7d72499"), Error("Date input field year was not found in " + B.env.b_action + " action")
            }, 0)), 0 === this.$inputMonth.length && (t = e.month || "", this.$inputMonth = this.createDateInputField(this.options.modelMode + "_month", t).appendTo(this.el), setTimeout(function() {
                throw _i_("4ab:1e62334d"), Error("Date input field month was not found in " + B.env.b_action + " action")
            }, 0)), 0 === this.$inputDay.length && (t = e.day || "", this.$inputDay = this.createDateInputField(this.options.modelMode + "_monthday", t).appendTo(this.el), setTimeout(function() {
                throw _i_("4ab:e1a1e0b8"), Error("Date input field day was not found in " + B.env.b_action + " action")
            }, 0))), _r_()
        },
        createDateInputField: function(e, t) {
            return _i_("4ab:99d37a75"), _r_($("<input>").attr({
                type: "hidden",
                name: e,
                value: t
            }).val(t))
        },
        initModel: function() {
            _i_("4ab:4e748ee9");
            var e = !1,
                t = this.$inputYear.val(),
                i = this.$inputMonth.val(),
                n = this.$inputDay.val();
            t && i && n ? (e = this.model.dates.initDate(this.options.modelMode, {
                year: +t,
                month: +i - 1,
                day: +n
            }), this.$field.hasClass("-empty") && "index" === B.env.b_action && this.render()) : e = this.model.dates.initDate(this.options.modelMode, null), e && !this.options.forceInitRender || this.render(), _r_()
        },
        modelChange: function(e) {
            if (_i_("4ab:94cc79f8"), "dates" !== e.group || !e[this.options.modelMode]) return _r_();
            this.render(), _r_()
        },
        controlsMouseDown: function(e) {
            _i_("4ab:56a16f95"), this.inputBlurPrevented = !0, setTimeout(function() {
                _i_("4ab:96f15264"), this.inputBlurPrevented = !1, _r_()
            }.bind(this)), _r_()
        },
        inputFocus: function(e) {
            _i_("4ab:a58647e4"), clearTimeout(this.inputBlurTimer), this.state.editing = !0, this.state.currentField = e.target.getAttribute("data-input-fragment"), this.startEditing(), this.updateFocusClass(), _r_()
        },
        inputFocusTrack: function() {
            _i_("4ab:7986bd2d"), r.trackEvent(r.SearchBoxTracker, "Keyboard Focus", this.options.modelMode + " field"), _r_()
        },
        inputBlur: function(e) {
            _i_("4ab:f8108e6d");
            var t = e.target,
                i = t.getAttribute("data-input-fragment");
            this.inputBlurPrevented || (this.state.editing = !1, this.state.currentField = null), this.setDateFragment(i, t.value), this.inputBlurTimer = setTimeout(function() {
                _i_("4ab:39a28af8"), this.apply(), this.updateFocusClass(), _r_()
            }.bind(this)), _r_()
        },
        inputKeyDown: function(e) {
            _i_("4ab:edca6e04");
            var t = e.target,
                i = t.getAttribute("data-input-fragment");
            if (a.isModifier(e.which)) return _r_();
            a.isUpArrow(e.which) ? (this.adjustDateFragment(i, t.value, 1), e.preventDefault()) : a.isDownArrow(e.which) ? (this.adjustDateFragment(i, t.value, -1), e.preventDefault()) : a.isLeftArrow(e.which) || a.isBackspace(e.which) ? this.inputMoveAdjacent(e, -1, {
                backspace: a.isBackspace(e.which)
            }) : a.isRightArrow(e.which) && this.inputMoveAdjacent(e, 1), _r_()
        },
        inputKeyUp: function(e) {
            _i_("4ab:1328b311");
            var t = e.target;
            if (a.isModifier(e.which)) return _r_();
            !a.isNavigation(e.which) && !a.isDeletion(e.which) && t.value.length >= Math.floor(t.getAttribute("maxlength")) && this.inputMoveAdjacent(e, 1, {
                automatic: !0
            }), _r_()
        },
        inputMoveAdjacent: function(e, t, i) {
            _i_("4ab:eab99f25");
            var n, a, s = e.target,
                r = this.$inputs.length,
                o = h.getPosition(s),
                _ = 0,
                l = this.$inputs.filter(s).index(),
                d = r - 1;
            i = i || {};
            if (0 < t && (_ = s.value.length, d = 0), i.automatic && l == r - 1) return _r_();
            if (!i.force && h.getSelectionLength(s)) return _r_();
            (i.force || o == _) && (((l += t) < 0 || r - 1 < l) && (l = d), n = this.$inputs.get(l), i.automatic && n.value.length ? n.select() : (a = 0 < t ? 0 : n.value.length, h.setPosition(n, a), i.backspace || e.preventDefault())), _r_()
        },
        inputKeyPress: function(e) {
            _i_("4ab:518cd65b"), e.keyCode && a.isNavigation(e.keyCode) || !(e.which < 48 || 57 < e.which) || (this.inputMoveAdjacent(e, 1, {
                automatic: !0,
                force: !0
            }), e.preventDefault()), _r_()
        },
        startEditing: function() {
            _i_("4ab:84307c20"), setTimeout(function() {
                _i_("4ab:71b9ac58"), this.model.dates.startEditing(), _r_()
            }.bind(this)), this.render(), _r_()
        },
        setDateFragment: function(e, t) {
            _i_("4ab:9cb37549"), t = "" === t ? null : +t, "month" === e && null !== t && (t -= 1), this.model.dates.setEditingFragment(this.options.modelMode, e, t), _r_()
        },
        adjustDateFragment: function(e, t, i) {
            _i_("4ab:51010f90"), t = "" === t ? 0 : +t, "month" === e && (t -= 1), this.model.dates.adjustEditingFragment(this.options.modelMode, e, t, i), _r_()
        },
        apply: function() {
            _i_("4ab:01d1593e"), this.model.dates.applyEditing(this.options.modelMode), _r_()
        },
        render: function() {
            _i_("4ab:d4579591");
            var e = this.$field.hasClass("-editing"),
                t = this.model.dates.get(),
                i = this.$inputYear.val(),
                n = this.$inputMonth.val(),
                a = this.$inputDay.val(),
                s = t[this.options.modelMode],
                r = t["editing_" + this.options.modelMode] || {},
                o = r.year,
                _ = r.month,
                l = r.day,
                d = "date_with_weekday";
            i = "" === i ? null : +i, n = "" === n ? null : +n, a = "" === a ? null : +a, o = "number" == typeof o ? o : null, _ = "number" == typeof _ ? _ + 1 : null, l = "number" == typeof l ? l : null, e != this.state.editing && (B.et.stage("OTfdASFVFYBMFSIJWe", 1), e = this.state.editing, this.$field.toggleClass("-editing", e)), i !== o && (this.$inputYear.val(o), "year" === this.state.currentField && this.$inputYear.select()), n !== _ && (this.$inputMonth.val(_), "month" === this.state.currentField && this.$inputMonth.select()), a !== l && (this.$inputDay.val(l), "day" === this.state.currentField && this.$inputDay.select()), e || s || (this.$field.addClass("-empty"), this.$display.html(this.$display.attr("data-placeholder")), this.$iconDay.html(this.$iconDay.attr("data-placeholder"))), !e && s && (this.$field.removeClass("-empty"), d = this.$display.data("date-format") || d, this.$display.html(c.format(s, d)), this.$iconDay.html(c.format(s, "{day_of_month}"))), _r_()
        },
        updateFocusClass: function() {
            _i_("4ab:baacc28f"), setTimeout(function() {
                _i_("4ab:06d1adfc");
                var e = this.$el.parent(),
                    t = this.state.editing,
                    i = !e.hasClass("c2-wrapper-s-hidden");
                t || i ? this.$el.addClass("-focus") : this.$el.removeClass("-focus"), _r_()
            }.bind(this), 100), _r_()
        }
    }), _r_()
}), B.define("search/dates/util", function(e, t, i) {
    _i_("4ab:c1df00dd"), i.exports = {
        formatDate: function(e) {
            _i_("4ab:d9bc22d0");
            var t = new Date(e),
                i = "" + (t.getMonth() + 1),
                n = "" + t.getDate(),
                a = t.getFullYear();
            return i.length < 2 && (i = "0" + i), n.length < 2 && (n = "0" + n), _r_([a, i, n].join("-"))
        },
        addDay: function(e) {
            _i_("4ab:52a53234");
            var t = new Date(e);
            return t.setDate(t.getDate() + 1), _r_(t)
        },
        substractDay: function(e) {
            _i_("4ab:ff921332");
            var t = new Date(e);
            return t.setDate(t.getDate() - 1), _r_(t)
        },
        daysBetween: function(e, t) {
            _i_("4ab:c4830dfc"), e = new Date(e), t = new Date(t);
            var i = e.getTime(),
                n = t.getTime(),
                a = Math.abs(i - n);
            return _r_(Math.round(a / 864e5))
        }
    }, _r_()
}), B.define("component/search/dates/dates-errors", function(e, t, i) {
    "use strict";
    _i_("4ab:17a69455");
    var n = e("component"),
        a = e("jstmpl"),
        s = e("read-data-options"),
        r = e("search/searchbox/model");
    i.exports = n.extend({
        init: function() {
            _i_("4ab:9c2990e4"), this.options = s(this.el, {
                modelId: {
                    name: "sb-id",
                    type: String,
                    required: !0
                }
            }), this.model = r.getInstance(this.options.modelId), this.model.use("dates"), this.model.on("validation", this.modelValidation.bind(this)), this.template = a("fe_search_dates_errors"), _r_()
        },
        modelValidation: function(e) {
            if (_i_("4ab:bcf03923"), "dates" !== e.group) return _r_();
            var t = s(this.el, {
                viewId: {
                    name: "view-id",
                    type: String,
                    defaultValue: ""
                }
            });
            e.valid ? this.$el.html("") : this.$el.html(this.template.render({
                fe_error: e.validationError,
                fe_new: !0,
                fe_view: t.viewId
            })), _r_()
        }
    }), _r_()
}), booking.jstmpl("search_dates_length_of_stay", function() {
    _i_("4ab:d04e5c1f");
    var a, s = ["\n\t\t", "\n\n", "\n\n    ", "\n        ", "\n    ", '\n\n    <div\n      class="sb-dates__los\n      ', " sb-dates__los--bold\n      ", '\n      ">\n\n      \n      ', '\n          <i class="bicon bicon-halfmoon sb_dates__los__icon"></i>\n          <span class="sb-dates__los__text">\n      ', "\n\n        ", "\n          ", "/private/bh_gf_sbox_general_dates_num_nights_1/name", "/private/sbox_general_dates_num_nights_1/name", "\n      ", "\n         </span>\n      ", "\n    </div>\n", '\n    <div class="sb-dates--los-placeholder"></div>\n', "\n"],
        r = ["b_action", "fe_sb_los_bold", "fe_sb_state_length_of_stay", "fe_is_family", "b_search_config"];
    return _r_(function(e) {
        _i_("4ab:2d0acf81");
        var t, i = "",
            n = this.fn;
        return i += s[0], t = i, _i_("4ab:d7c182f9"), t += s[1], n.MJ(n.MB(r[2])) ? (t += s[2], n.MJ(n.MB(r[1]) + "" == "") && (t += s[3], n.MN("fe_sb_los_bold", n.MJ(n.MC(r[0]) + "" == "hotel") && n.track_experiment("AEJPOTIKSBOEQC")), t += s[4]), t += s[5], n.MD(r[1]) && (t += s[6]), t += s[7], n.MD(r[1]) && (t += s[8]), t += s[9], n.MJ(n.MB(r[3])) || n.MJ(n.MC(r[4])) && n.MJ(n.MC(r[4]).b_children_total) ? t += [s[10], (e.unshift({
            num_nights: n.MB(r[2])
        }), a = n.ME(s[11], n.MB, n.MN, n.MO(n.MC(r[2]), null, s[11])), e.shift(), a), s[3]].join("") : t += [s[10], (e.unshift({
            num_nights: n.MB(r[2])
        }), a = n.ME(s[12], n.MB, n.MN, n.MO(n.MC(r[2]), null, s[12])), e.shift(), a), s[3]].join(""), t += s[13], n.MD(r[1]) && (t += s[14]), t += s[15]) : t += s[16], t += s[17], i = _r_(t), i += s[4], _r_(i)
    })
}()), B.define("component/search/dates/length-of-stay", function(e, t, i) {
    _i_("4ab:b6b16338");
    var n = e("calendar-base").Calendar,
        a = e("component"),
        s = e("read-data-options"),
        r = e("search/searchbox/model");
    i.exports = a.extend({
        init: function() {
            _i_("4ab:f93f1ef5"), this.options = s(this.$el, {
                modelId: {
                    name: "sb-id",
                    type: String,
                    required: !0
                },
                isAvailability: {
                    name: "is-availability",
                    type: Boolean
                }
            }), this.model = r.getInstance(this.options.modelId), this.model.use("dates"), this.model.use("group"), this.model.on("change", this.modelChange.bind(this)), this.state = {}, "hotel" === B.env.b_action && B.et.track("AEJPOTIKSBOEQC") && (this.state.fe_sb_los_bold = 1), this.template = B.jstmpl("search_dates_length_of_stay"), _r_()
        },
        modelChange: function(e) {
            if (_i_("4ab:ae188229"), !e || "dates" != e.group && "group" != e.group) return _r_();
            this.render(), _r_()
        },
        render: function() {
            _i_("4ab:f1fa6e6e");
            var e = this.model.dates.get(),
                t = this.model.group.get();
            this.state.fe_is_family = t.children_ages && 0 < t.children_ages.length ? 1 : 0, this.state.fe_is_availability = this.options.isAvailability, this.state.fe_sb_state_length_of_stay = !e.editing && e.checkin && e.checkout && 0 < n.diff(e.checkout, e.checkin) ? n.interval(e.checkin, e.checkout) - 1 : "", this.$el.html(this.template.render(this.state)), _r_()
        }
    }), _r_()
}), B.define("search/dates/model", function(e, t, i) {
    "use strict";
    _i_("4ab:43c215b2");
    var _ = e("calendar-base").Calendar,
        l = e("search/modules/search-date").SearchDate,
        n = B.env.b_timestamp,
        a = B.env.sunday_first,
        s = B.env.b_search_max_months || 13;

    function r(e) {
        _i_("4ab:14676838"), this._model = e, this._data = {
            initialized: !1,
            checkin: null,
            checkinTime: null,
            checkout: null,
            checkoutTime: null,
            firstValidDay: null,
            lastValidDay: null,
            editing: !1,
            editing_checkin: null,
            editing_checkout: null,
            length_of_stay: null,
            week_start: a ? 0 : 1
        }, this._valid = !0, this._validationError = "", this._options = {
            maxLos: 30,
            maxMonths: s,
            syncLegacy: !B.env.fe_xpi_no_legacy_sync,
            allowZeroLos: !1
        };
        var t = new Date(1e3 * (n - 39600));
        this._data.firstValidDay = l.create({
            year: t.getUTCFullYear(),
            month: t.getUTCMonth(),
            day: t.getUTCDate()
        }), this._data.lastValidDay = l.createFlexible({
            year: t.getUTCFullYear(),
            month: t.getUTCMonth() + this._options.maxMonths,
            day: 0
        }), this._data.firstValidCheckoutDay = l.create({
            year: t.getUTCFullYear(),
            month: t.getUTCMonth(),
            day: t.getUTCDate() + 1
        }), this._options.syncLegacy && (this.boundLegacyDateChange = this.legacyDateChange.bind(this), B.eventEmitter.on(B.Search.Events.DATE_CHANGED, this.boundLegacyDateChange)), _r_()
    }
    $.extend(r.prototype, {
        init: function(e) {
            _i_("4ab:53c0dd77");
            var t = l.create(e.checkin),
                i = l.create(e.checkout);
            this.validateDate("checkin", t).valid && this.validateDate("checkout", i, {
                checkin: t
            }).valid && (this.setDate("checkin", t, {
                init: !0
            }), this.setDate("checkout", i, {
                init: !0
            }), this.emit("init")), _r_()
        },
        configure: function(e, t) {
            _i_("4ab:4a2cc427");
            var i = this._options.maxMonths,
                n = this._options.syncLegacy;
            void 0 !== t ? this._options[e] = t : "object" == typeof e && $.extend(this._options, e), i != this._options.maxMonths && (this._data.lastValidDay = l.createFlexible({
                year: this._data.firstValidDay.year,
                month: this._data.firstValidDay.month + this._options.maxMonths,
                day: 0
            })), n !== this._options.syncLegacy && B.eventEmitter[this._options.syncLegacy ? "on" : "off"](B.Search.Events.DATE_CHANGED, this.boundLegacyDateChange), _r_()
        },
        getOption: function(e) {
            return _i_("4ab:4efe52f0"), _r_(this._options[e])
        },
        get: function() {
            return _i_("4ab:e34c03cf"), _r_(this._data)
        },
        initDate: function(e, t, i) {
            _i_("4ab:e6239d59");
            var n = !((i = i || {}).init = !0);
            if (this._data.initialized) return _r_(!1);
            return t && (n = this.setDate(e, t, i)), this._data[e + "Time"] = {
                hours: 10,
                minutes: 0
            }, this["initialized" + e] = !0, this.initializedcheckin && this.initializedcheckout && (this.emit("init"), this._data.initialized = !0), _r_(n)
        },
        setDate: function(e, t, i) {
            var n, a, s;
            _i_("4ab:b21c8d26"), i = i || {};
            var r = {};
            if (t = l.create(t), !this._options.noValidation && !this.validateDate(e, t, {
                    loose: !0
                }).valid) return _r_(!1);
            if ("checkin" == e) this._data.checkin = t, a = !0, l.compare(this._data.checkin, this._data.firstValidDay) < 0 && (this._data.checkin = l.create(this._data.firstValidDay)), 0 < l.compare(this._data.checkin, this._data.lastValidDay) && (this._data.checkin = l.createFlexible({
                year: this._data.lastValidDay.year,
                month: this._data.lastValidDay.month,
                day: this._data.lastValidDay.day - 1
            })), this._data.checkout ? (n = _.diff(this._data.checkout, t)) <= 0 ? (this._data.checkout = l.createFlexible({
                year: t.year,
                month: t.month,
                day: t.day + 1
            }), s = !0) : !this._options.allowMaxLos && n > this._options.maxLos && (this._data.checkout = l.createFlexible({
                year: t.year,
                month: t.month,
                day: t.day + this._options.maxLos
            }), s = !0) : (this._data.checkout = l.createFlexible({
                year: t.year,
                month: t.month,
                day: t.day + 1
            }), s = !0);
            else {
                if ("checkout" != e) return _r_(!1);
                var o;
                this._data.checkout = t, s = !0, 0 < l.compare(this._data.checkout, this._data.lastValidDay) && (this._data.checkout = l.create(this._data.lastValidDay)), 0 == l.compare(this._data.checkout, this._data.firstValidDay) && (o = this._options.allowZeroLos ? 0 : 1, this._data.checkin = l.create(this._data.firstValidDay), this._data.checkout = l.createFlexible({
                    year: this._data.firstValidDay.year,
                    month: this._data.firstValidDay.month,
                    day: this._data.firstValidDay.day + o
                }), s = !0), this._data.checkin && (n = _.diff(t, this._data.checkin)) <= 0 && (this._data.checkin = null), this._data.checkin || (o = this._options.allowZeroLos ? 0 : 1, this._data.checkin = l.createFlexible({
                    year: t.year,
                    month: t.month,
                    day: t.day - o
                }), a = !0)
            }
            return a && (this._options.syncLegacy && B.search.setDate_("checkin", this._data.checkin.toString(), {
                referrer: "search/dates/model"
            }), this._data.editing_checkin = this._data.checkin, r.checkin = !0), s && (this._options.syncLegacy && B.search.setDate_("checkout", this._data.checkout.toString(), {
                referrer: "search/dates/model"
            }), this._data.editing_checkout = this._data.checkout, r.checkout = !0), (a || s) && (this._data.length_of_stay = this._data.checkin && this._data.checkout && _.interval(this._data.checkin, this._data.checkout) - 1), this._data.editing = !1, i.init || this.emit("change", r), _r_(!0)
        },
        startEditing: function() {
            if (_i_("4ab:f1d3385b"), this._data.editing) return _r_();
            this._data.editing = !0, this.emit("change", {
                editing: !0
            }), _r_()
        },
        setEditingFragment: function(e, t, i) {
            if (_i_("4ab:a49bffb1"), "checkin" !== e && "checkout" !== e) throw new TypeError("invalid type");
            if ("day" !== t && "month" !== t && "year" !== t) throw new TypeError("invalid fragment");
            if ("number" != typeof i && null !== i) throw new TypeError("invalid value");
            var n = this._data["editing_" + e] || {},
                a = {
                    year: n.year,
                    month: n.month,
                    day: n.day
                },
                s = {
                    editing: !0
                };
            return a[t] = i, this._data.editing = !0, this._data["editing_" + e] = l.create(a), s[e] = !0, this.emit("change", s), _r_(!0)
        },
        adjustEditingFragment: function(e, t, i, n) {
            if (_i_("4ab:757cccbf"), "checkin" !== e && "checkout" !== e) throw new TypeError("invalid type");
            if ("day" !== t && "month" !== t && "year" !== t) throw new TypeError("invalid fragment");
            var a = 1,
                s = i + n;
            return "month" == t ? a = 0 : "year" == t && (a = this._data.firstValidDay.year), s < a && (s = a), _r_(this.setEditingFragment(e, t, s))
        },
        applyEditing: function(e) {
            if (_i_("4ab:710382f5"), "checkin" !== e && "checkout" !== e) throw new TypeError("invalid type");
            return this._data["editing_" + e].complete ? _r_(this.setDate(e, this._data["editing_" + e])) : (this.clearDates(), _r_(!0))
        },
        clearDates: function() {
            _i_("4ab:e1109c2d"), this._data.checkin = null, this._data.checkout = null, this._data.editing = !1, this._data.editing_checkin = null, this._data.editing_checkout = null, this._data.length_of_stay = null, this._options.syncLegacy && (B.search.setDate_("checkin", "", {
                referrer: "search/dates/model"
            }), B.search.setDate_("checkout", "", {
                referrer: "search/dates/model"
            })), this.emit("change", {
                checkin: !0,
                checkout: !0
            }), _r_()
        },
        validate: function(e) {
            _i_("4ab:f36a21e9"), e = e || {};
            var t, i = !0,
                n = "";
            (!i || !e.notEmpty || this._data.checkin && this._data.checkout || (i = !1, n = "missing-dates"), i && !this._data.checkin && this._data.checkout && (i = !1, n = "missing-checkin"), i && this._data.checkin && !this._data.checkout && (i = !1, n = "missing-checkout"), i && this._data.checkin) && ((t = this.validateDate("checkin", this._data.checkin)).valid || (i = t.valid, n = t.validationError));
            i && this._data.checkout && ((t = this.validateDate("checkout", this._data.checkout)).valid || (i = t.valid, n = t.validationError));
            if (i && e.validateTime) {
                var a = new Date(1e3 * B.env.b_timestamp),
                    s = a.getUTCDate(),
                    r = a.getUTCMonth(),
                    o = a.getUTCFullYear(),
                    _ = a.getHours() + 2;
                (!this._data.checkin || this._data.checkin.year === o && this._data.checkin.month === r && this._data.checkin.day == s) && this._data.checkinTime <= _ && (i = !1, n = "past-time")
            }
            return e.checkOnly || this._valid == i || (this._valid = i, this._validationError = n, this.emit("validation", {
                valid: i,
                validationError: n
            })), _r_(i)
        },
        validateDate: function(e, t, i) {
            _i_("4ab:68e8eca5"), (i = i || {}).checkin = i.checkin || this._data.checkin;
            var n = null;
            if (!e || "checkin" != e && "checkout" != e) return _r_({
                valid: !1,
                validationError: "invalid-data"
            });
            if (!t || void 0 === t.year || void 0 === t.month || void 0 === t.day || isNaN(t.year) || isNaN(t.month) || isNaN(t.day)) return _r_({
                valid: !1,
                validationError: "invalid-data"
            });
            if ("checkin" == e && l.compare(t, this._data.firstValidDay) < 0 || "checkout" == e && 0 == l.compare(t, this._data.firstValidDay)) return _r_({
                valid: !1,
                validationError: "past"
            });
            if ("checkout" == e && i.checkin && (n = _.diff(t, i.checkin)), null !== n) {
                if (0 == n && !this._options.allowZeroLos) return _r_({
                    valid: !1,
                    validationError: "more-than-one-day"
                });
                if (n < 0) return _r_({
                    valid: !1,
                    validationError: "negative-period"
                });
                if (n > this._options.maxLos) return _r_({
                    valid: !1,
                    validationError: "exceeds-max-los"
                })
            }
            return _r_({
                valid: !0,
                validationError: ""
            })
        },
        legacyDateChange: function(e, t) {
            var i, n;
            if (_i_("4ab:7a3351a7"), "search/dates/model" == t.referrer) return _r_();
            i = "checkin" == t.type ? "checkin" : "checkout", n = l.createFromString(t.value.toString()), this.setDate(i, n), _r_()
        },
        emit: function(e, t) {
            _i_("4ab:96b54781"), t = t || {}, this._model.emit(e, $.extend(t, {
                group: "dates"
            })), _r_()
        },
        getFallbackDates: function(e) {
            var t, i;
            return _i_("4ab:1b596316"), (i = "checkin" === e ? B.env.b_checkin_date : B.env.b_checkout_date) && (i = i.split("-"), t = {
                year: parseInt(i[2], 10),
                month: parseInt(i[1], 10),
                day: parseInt(i[0], 10)
            }), _r_(t || {})
        }
    }), i.exports = r, _r_()
}), booking.jstmpl("fe_search_dates_errors", function() {
    _i_("4ab:1c498580");
    var a = ["\n\t", "\n\n\t\t", "\n\t\t\t", "\n\t\t\t\t", "/error/checkout_date_invalid/name", "/error/checkin_date_invalid/name", "/private/sbox_error_checkin_future/name", "/error/checkin_date_to_far_in_the_future/name", "/private/sbox_error_checkout_after/name", "/private/sbox_error_30_night_res/name", "\n\t\t", "\n\t\t\t\t\t", "/private/iq_sbox_error_flights_return_date_invalid/name", "/private/iq_sbox_error_flights_departure_date_invalid/name", "/private/iq_sbox_error_dates/name", "/private/iq_sbox_error_flights_departure_date_too_far_future/name", "/private/iq_sbox_error_flights_return_after_departure/name", "\n\t\n\t\t", "/private/iq_sbox_error_cars_arrival_date_invalid/name", "/private/iq_sbox_error_cars_departure_date_invalid/name", "/private/iq_sbox_error_cars_departure_date_too_far_future/name", "/private/iq_sbox_error_cars_arrival_after_departure/name", "/private/iq_sbox_error_cars_1_hour_future/name", "\n\n\n\n\n\n\n", "\n\n    ", "\n        ", "data-", '="', '"', "\n    ", " data-", '<div data-component="onview-animate" data-anim-type="fadeInBottom"> ', "<div ", 'data-et-view="', ':1" data-et-click="customGoal:', ':1" ', 'class="fe_banner fe_banner__accessible ', "fe_banner__scale_small ", "fe_banner__w-icon ", "fe_banner__w-dismiss ", "fe_banner__", " ", "fe_banner__w-icon-", "fe_banner__bp fe_banner__inherit_font_size ", ' " ', 'id="', '" ', 'role="alert"', "> ", '<i class="fe_banner__icon ', '" aria-hidden="true"></i> ', '<img class="fe_banner__icon" src="', '"> ', '<span class="', "fe_banner__icon", " </span> ", '<div class="fe_banner__btn_container"> <div class="fe_banner__btn_container_content"> ', '<h3 class="fe_banner__title"> ', " </h3> ", '<div class="fe_banner__message ', "fe_banner__genius-trial", " </div> ", '</div> <div class="fe_banner__button"> ', "</div> ", '<span class="fe_banner__dismiss js-close"><i class="bicon-btnclose" aria-label="close"></i></span> ', '<form action="', "/genius_activate_trial", '" class="fe_banner__genius-banner-form" method="post"> <input type="hidden" name="return_url" value="', '"> <input type="hidden" name="src" value="hp_banner"> <input type="hidden" name="campaign_id" value="', '"> <input type="submit" class="button fe_banner__genius-banner-button" value="', '"> </form> ', "\n", "\n\n\n\n", "\n\n", "0", "red"],
        s = ["fe_error_message", "fe_error", "s_raw_param_errorc_checkout_date_invalid", "s_raw_param_errorc_checkin_date_invalid", "s_raw_param_errorc_checkin_date_in_the_past", "s_raw_param_errorc_checkin_date_to_far_in_the_future", "s_raw_param_errorc_checkout_date_not_after_checkin_date", "s_raw_param_errorc_checkout_date_more_than_30_days_after_checkin", "fe_view", "fe_banner__data", "fe_banner__data_id", "fe_banner__data_value", "fe_banner__data_id_2", "fe_banner__data_value_2", "fe_banner__data_id_3", "fe_banner__data_value_3", "fe_banner__data_id_4", "fe_banner__data_value_4", "fe_banner__data_id_5", "fe_banner__data_value_5", "fe_banner__animate", "b_action", "fe_banner__scale", "fe_banner__icon_class", "fe_banner__icon_img_url", "fe_banner__icon_svg", "fe_banner__close_button", "fe_banner__color_scheme", "fe_banner__color_scheme_classes", "fe_banner__icon_size", "fe_banner__extra_classes", "fe_banner__id", "fe_banner__aria_alert", "fe_banner__icon_svg_class", "fe_banner__btn_include", "fe_banner__title_text", "fe_banner__start_genius_trial", "fe_banner__message_text", "b_secure_hostname", "b_query_params_with_lang", "b_original_url", "fe_ge_trial_desktop_campaign_id", "ge_expand_hp_trial_sidebar_cta", "fe_banner__banners_count"];
    return _r_(function(i) {
        _i_("4ab:8bb0e023");
        var e = "",
            n = this.fn;
        return e = function(e) {
            if (_i_("4ab:e77545bf"), n.MJ(n.MB(s[1])) || n.MJ(n.MC(s[2])) || n.MJ(n.MC(s[3])) || n.MJ(n.MC(s[4])) || n.MJ(n.MC(s[5])) || n.MJ(n.MC(s[6])) || n.MJ(n.MC(s[7]))) {
                e += a[1];
                var t = "";
                t += a[2], n.MJ(n.MB(s[1]) + "" == "missing-checkout") || n.MJ(n.MC(s[2])) ? t += [a[3], n.ME(a[4], n.MB, n.MN, null), a[2]].join("") : n.MJ(n.MB(s[1]) + "" == "missing-checkin") || n.MJ(n.MC(s[3])) ? t += [a[3], n.ME(a[5], n.MB, n.MN, null), a[2]].join("") : n.MJ(n.MB(s[1]) + "" == "past") || n.MJ(n.MC(s[4])) ? t += [a[3], n.ME(a[6], n.MB, n.MN, null), a[2]].join("") : n.MJ(n.MB(s[1]) + "" == "checkin_date_to_far_in_the_future") || n.MJ(n.MC(s[5])) ? t += [a[3], n.ME(a[7], n.MB, n.MN, null), a[2]].join("") : n.MJ(n.MB(s[1]) + "" == "negative-period") || n.MJ(n.MC(s[6])) ? t += [a[3], n.ME(a[8], n.MB, n.MN, null), a[2]].join("") : n.MJ(n.MB(s[1]) + "" == "exceeds-max-los") || n.MJ(n.MC(s[7])) ? t += [a[3], n.ME(a[9], n.MB, n.MN, null), a[2]].join("") : n.MJ(n.MB(s[1])) && (t += [a[3], n.ME(a[5], n.MB, n.MN, null), a[2]].join("")), t += a[10], n.MN(s[0], t), e += a[1], n.MJ(n.MB(s[8]) + "" == "flights") && (e += a[2], t = "", t += a[3], n.MJ(n.MB(s[1]) + "" == "missing-checkout") ? t += [a[11], n.ME(a[12], n.MB, n.MN, null), a[3]].join("") : n.MJ(n.MB(s[1]) + "" == "missing-checkin") ? t += [a[11], n.ME(a[13], n.MB, n.MN, null), a[3]].join("") : n.MJ(n.MB(s[1]) + "" == "past") ? t += [a[11], n.ME(a[14], n.MB, n.MN, null), a[3]].join("") : n.MJ(n.MB(s[1]) + "" == "checkin_date_to_far_in_the_future") ? t += [a[11], n.ME(a[15], n.MB, n.MN, null), a[3]].join("") : n.MJ(n.MB(s[1]) + "" == "negative-period") ? t += [a[11], n.ME(a[16], n.MB, n.MN, null), a[3]].join("") : n.MJ(n.MB(s[1]) + "" == "missing-dates") ? t += [a[11], n.ME(a[13], n.MB, n.MN, null), a[3]].join("") : n.MJ(n.MB(s[1])) && (t += [a[11], n.ME(a[13], n.MB, n.MN, null), a[3]].join("")), t += a[2], n.MN(s[0], t), e += a[10]), e += a[17], n.MJ(n.MB(s[8]) + "" == "rentalcars") && (e += a[2], t = "", t += a[3], n.MJ(n.MB(s[1]) + "" == "missing-checkout") ? t += [a[11], n.ME(a[18], n.MB, n.MN, null), a[3]].join("") : n.MJ(n.MB(s[1]) + "" == "missing-checkin") ? t += [a[11], n.ME(a[19], n.MB, n.MN, null), a[3]].join("") : n.MJ(n.MB(s[1]) + "" == "past") ? t += [a[11], n.ME(a[14], n.MB, n.MN, null), a[3]].join("") : n.MJ(n.MB(s[1]) + "" == "checkin_date_to_far_in_the_future") ? t += [a[11], n.ME(a[20], n.MB, n.MN, null), a[3]].join("") : n.MJ(n.MB(s[1]) + "" == "negative-period") ? t += [a[3], n.ME(a[21], n.MB, n.MN, null), a[3]].join("") : n.MJ(n.MB(s[1]) + "" == "missing-dates") ? t += [a[11], n.ME(a[19], n.MB, n.MN, null), a[3]].join("") : n.MJ(n.MB(s[1]) + "" == "past-time") ? t += [a[11], n.ME(a[22], n.MB, n.MN, null), a[3]].join("") : n.MJ(n.MB(s[1])) && (t += [a[11], n.ME(a[19], n.MB, n.MN, null), a[3]].join("")), t += a[2], n.MN(s[0], t), e += a[10]), e += a[1], i.unshift({
                    fe_banner__close_button: a[74],
                    fe_banner__color_scheme: a[75],
                    fe_banner__message_text: n.MB(s[0])
                }), e = function(e) {
                    if (_i_("4ab:ce629a21"), e += ["", a[23]].join(""), n.MD(s[37])) {
                        e += a[24], n.MD(s[10]) && (e += a[25], n.MN(s[9], [a[26], n.F.maybexss(n.MB(s[10])), a[27], n.F.maybexss(n.MB(s[11])), a[28]].join("")), e += a[29]), e += a[24], n.MD(s[12]) && (e += a[25], n.MN(s[9], [n.F.maybexss(n.MB(s[9])), a[30], n.F.maybexss(n.MB(s[12])), a[27], n.F.maybexss(n.MB(s[13])), a[28]].join("")), e += a[29]), e += a[24], n.MD(s[14]) && (e += a[25], n.MN(s[9], [n.F.maybexss(n.MB(s[9])), a[30], n.F.maybexss(n.MB(s[14])), a[27], n.F.maybexss(n.MB(s[15])), a[28]].join("")), e += a[29]), e += a[24], n.MD(s[16]) && (e += a[25], n.MN(s[9], [n.F.maybexss(n.MB(s[9])), a[30], n.F.maybexss(n.MB(s[16])), a[27], n.F.maybexss(n.MB(s[17])), a[28]].join("")), e += a[29]), e += a[24], n.MD(s[18]) && (e += a[25], n.MN(s[9], [n.F.maybexss(n.MB(s[9])), a[30], n.F.maybexss(n.MB(s[18])), a[27], n.F.maybexss(n.MB(s[19])), a[28]].join("")), e += a[29]), e += a[24], n.MD(s[20]) && (e += a[31]), e += a[32], n.MJ(n.MC(s[21]) + "" == "index") && (n.MJ(n.track_experiment("adUTWALOLOLOMXSYNCedLdWTCUZZOeGDPHe")), e += [a[33], n.F.entities("adUTWALOLOLOMXSYNCedLdWTCUZZOeGDPHe"), a[34], n.F.entities("adUTWALOLOLOMXSYNCedLdWTCUZZOeGDPHe"), a[35]].join("")), e += a[36];
                        var t = n.MB(s[22]);
                        n.MJ(t + "" == "small") && (e += a[37]), (n.MJ(n.MB(s[23])) || n.MJ(n.MB(s[24])) || n.MJ(n.MB(s[25]))) && (e += a[38]), n.MD(s[26]) && (e += a[39]), n.MJ(n.MB(s[27])) && (e += [a[40], n.F.entities(n.MC(s[27])), n.F.entities(n.MC(s[28])), a[41]].join("")), n.MJ(n.MB(s[23])) && n.MJ(n.MB(s[29])) && (e += [a[42], n.F.maybexss(n.MC(s[29])), a[41]].join("")), n.MJ(n.MC(s[21]) + "" == "book") && (e += a[43]), e += [n.F.entities(n.MC(s[30])), a[44]].join(""), n.MD(s[31]) && (e += [a[45], n.F.maybexss(n.MC(s[31])), a[46]].join("")), n.MD(s[9]) && (e += [n.F.maybexss(n.MC(s[9])), a[41]].join("")), n.MD(s[32]) && (e += a[47]), e += a[48], n.MD(s[23]) ? e += [a[49], n.F.entities(n.MC(s[23])), a[50]].join("") : n.MD(s[24]) ? e += [a[51], n.F.entities(n.MC(s[24])), a[52]].join("") : n.MD(s[25]) && (e += a[53], n.MD(s[33]) ? e += n.F.entities(n.MC(s[33])) : e += a[54], e += [a[52], n.F.maybexss(n.MC(s[25])), a[55]].join("")), n.MD(s[34]) && (e += a[56]), n.MD(s[35]) && (e += [a[57], n.F.maybexss(n.MC(s[35])), a[58]].join("")), n.MD(s[37]) && (e += a[59], n.MD(s[36]) && (e += a[60]), e += [a[52], n.F.maybexss(n.MC(s[37])), a[61]].join("")), n.MD(s[34]) && (e += [a[62], n.F.maybexss(n.MC(s[34])), a[61]].join("")), n.MD(s[34]) && (e += a[63]), n.MD(s[26]) && (e += a[64]), n.MD(s[36]) && (e += [a[65], n.F.maybexss(n.MC(s[38])), a[66], n.F.maybexss(n.MC(s[39])), a[67], n.F.maybexss(n.MC(s[40])), a[68], n.F.maybexss(n.MB(s[41])), a[69], n.F.maybexss(n.MB(s[42])), a[70]].join("")), e += a[63], n.MD(s[20]) && (e += a[63]), e += a[71]
                    }
                    return e += a[72], n.MN(s[27], void 0), e += a[71], n.MN(s[23], void 0), e += a[71], n.MN(s[24], void 0), e += a[71], n.MN(s[25], void 0), e += a[71], n.MN(s[29], void 0), e += a[71], n.MN(s[35], void 0), e += a[71], n.MN(s[37], void 0), e += a[71], n.MN(s[34], void 0), e += a[71], n.MN(s[26], void 0), e += a[71], n.MN(s[31], void 0), e += a[71], n.MN(s[30], void 0), e += a[71], n.MN(s[22], void 0), e += a[73], n.MN(s[10], void 0), e += a[71], n.MN(s[11], void 0), e += a[71], n.MN(s[12], void 0), e += a[71], n.MN(s[13], void 0), e += a[71], n.MN(s[14], void 0), e += a[71], n.MN(s[15], void 0), e += a[71], n.MN(s[16], void 0), e += a[71], n.MN(s[17], void 0), e += a[71], n.MN(s[18], void 0), e += a[71], n.MN(s[19], void 0), e += a[73], n.MN(s[28], void 0), e += a[73], n.MN(s[9], void 0), e += a[71], n.MN("fe_banner__banners_count", n.MI(n.MB(s[43])) + n.MI(1)), e += a[73], n.MJ(n.MC(s[21]) + "" == "book") && n.MJ(n.track_experiment_stage("HBaMEAbXDMUBdOYZbKZTSfXPRQYO", 2)) ? e += a[71] : n.MJ(n.track_experiment_stage("HBaMEAbXDMUBdOYZbKZTSfXPRQYO", 1)) && (e += a[71]), e += [a[73], "", a[71]].join(""), _r_(e)
                }(e), i.shift(), e += a[73]
            }
            return e += a[71], _r_(e)
        }(e += a[0]), e += a[71], _r_(e)
    })
}()), B.define("component/search/destination/country-only", function(e, t, i) {
    "use strict";
    _i_("4ab:584073f2");
    var n = e("component"),
        a = e("search/searchbox/model"),
        s = e("read-data-options");
    i.exports = n.extend({
        init: function() {
            _i_("4ab:fac5bb27"), this.options = s(this.$el, {
                modelId: {
                    name: "sb-id",
                    type: String,
                    required: !0
                }
            }), this.model = a.getInstance(this.options.modelId), this.model.use("destination"), this.model.on("change", this.modelChange.bind(this)), this.$onlyCurrentCountry = this.$el.find("[data-input]"), this.$onlyCurrentCountry.bind("change", this.onlyCurrentCountryChange.bind(this)), this.modelInit(), _r_()
        },
        modelInit: function() {
            _i_("4ab:a1ddd507");
            var e = this.$onlyCurrentCountry.is(":checked");
            this.model.destination.initOnlyCurrentCountry(e), _r_()
        },
        modelChange: function(e) {
            if (_i_("4ab:3db4fcdf"), !e || !e.onlyCurrentCountry) return _r_();
            var t = this.$onlyCurrentCountry.is(":checked"),
                i = this.model.destination.getOnlyCurrentCountry();
            t != i && this.$onlyCurrentCountry.prop("checked", i), _r_()
        },
        onlyCurrentCountryChange: function() {
            _i_("4ab:4751d78e"), this.model.destination.setOnlyCurrentCountry(this.$onlyCurrentCountry.is(":checked")), _r_()
        }
    }), _r_()
}), B.define("component/search/group/group", function(t, e, i) {
    _i_("4ab:fc33b511"), booking.jstmpl("search_group_group_html", function() {
        _i_("4ab:1b2614d0");
        var p, m = ["\n\t\t", "\n\n\n\n\n", "\n", " \n\n\n\n", "\n    ", '\n        <div class="sb-searchbox-children-tooltip">\n            <span class="fly-dropdown-close fly-dropdown-close-icon"></span>\n            <h4 class="sb-searchbox-children-tooltip__title">', "/private/gs_index_model_header_family/name", '</h4>\n            <p class="sb-searchbox-children-tooltip__text">', "/private/gs_index_model_desc_family/name", "</p>\n        </div>\n    ", "\n\n\n", "\n\n", '\n\n\n\n<div class="u-clearfix" data-render>\n  ', '\n    <div class="sb-custom-wrapper">\n  ', "\n\n  ", "\n      ", "\n        ", "\n  ", '\n    <div class="sb-group__field sb-group__field-rooms">\n      ', "/private/sbox_rooms/name", '\n  <div class="bui-stepper" data-bui-component="InputStepper">\n    <div class="bui-stepper__title-wrapper">\n      <label class="bui-stepper__title" for="', '">', "</label>\n      ", '\n        <span class="bui-stepper__subtitle">', "</span>\n      ", '\n    </div>\n    <div class="bui-stepper__wrapper">\n      <input type="range" class="bui-stepper__input" data-bui-ref="input-stepper-field" id="', '" name="', '" min="', '" max="', '" value="', '" ', ' />\n      <button class="bui-button bui-button--secondary bui-stepper__subtract-button" data-bui-ref="input-stepper-subtract-button" type="button" aria-hidden="true" ', "disabled", '>\n        <span class="bui-button__text">-</span>\n      </button>\n      <span class="bui-stepper__display" data-bui-ref="input-stepper-value" aria-hidden="true">', '</span>\n      <button class="bui-button bui-button--secondary bui-stepper__add-button" data-bui-ref="input-stepper-add-button" type="button" aria-hidden="true" ', '>\n        <span class="bui-button__text">+</span>\n      </button>\n    </div>\n  </div>\n', "data-group-rooms-count", "no_rooms", "1", "\n    </div>\n  ", '\n          <label class="sb-searchbox__label sb-group__field__label ', "-inline", " -small ", '"\n             ', '\n                for="no_rooms_', '"\n              ', '\n               for="no_rooms"\n              ', "\n          >\n              ", "\n          </label>\n      ", '<div class="sb-custom-select">', '\n    <select name="no_rooms"\n        ', '\n            id="no_rooms_', '"\n            class="no_rooms"\n        ', '\n            id="no_rooms"\n        ', '\n        data-group-rooms-count\n        aria-label="', "/private/index_sbox_rooms_aria/name", '"\n    >\n        ', '\n            <option value="', 'selected="selected"', ">\n                ", "/private/search_box_room_filter/name", "\n            </option>\n        ", "\n    </select>\n    ", "</div>", '\n    <input type="hidden" name="no_rooms" value="', '">\n  ', "\n\n\n  ", '\n    <div class="sb-group__field sb-group__field-adults">\n      ', "/private/sbox_adults/name", "\n          ", "/private/pex_flights_search_traveller_adult_age/name", "data-group-adults-count", "group_adults", '\n        <label class="sb-searchbox__label sb-group__field__label ', "group_children", '"\n           ', '\n              for="group_adults_', '"\n            ', '\n             for="group_adults"\n            ', "\n         >\n          ", "/private/bbt_searchbox_travellers/name", "\n        </label>\n        ", '\n  <select\n    name="group_adults"\n    aria-label="', "/private/index_sbox_adults_aria/name", '"\n    ', '\n       id="group_adults_', '"\n       class="group_adults"\n    ', '\n       id="group_adults"\n    ', "\n    data-group-adults-count\n   >\n    ", '\n      <option value="', ">\n        ", "/private/search_box_adults_filter/name", "\n      </option>\n    ", "\n  </select>\n", '\n    <input type="hidden" name="group_adults" value="', '\n      <div class="sb-group__field sb-group-children ', "sb-group-children-universal", '">\n      ', "/private/sbox_children/name", "/private/pex_flights_search_traveller_children_age/name", "data-group-children-count", "0", '\n              for="group_children_', '\n             for="group_children"\n            ', "\n            >\n          ", '\n  <select\n    name="group_children"\n    aria-label="', "/private/index_sbox_children_aria/name", '\n        id="group_children_', '"\n        class="group_children"\n    ', '\n       id="group_children"\n    ', "\n    data-group-children-count ", 'data-component="search/group/children-ages-tooltip search/group/add-children-tooltip"\n    data-add-children-tooltip="', '"', "\n  >\n    ", "/private/search_box_no_children_filter_default/name", "/private/search_box_children_filter/name", "\n      \n      ", '\n      <div class="sb-group__children__field clearfix">\n        ', '\n        <label class="sb-searchbox__label -small sb-group__children__label">\n          ', "/private/sxp_index_sbox_horizontal_age_of_children_q/name", "/private/bh_gsb_search_box_checkout_age/name", "/private/bh_gsb_search_box_checkout_age_plural/name", "/private/loc_sbox_children_age_singular/name", "/private/loc_sbox_children_age_plural/name", "\n\n        ", '<div class="sb-group-children-age"><div class="sb-custom-select">', '\n    <select\n      name="age"\n      data-group-child-age="', '"\n      aria-label="', "/private/acc_index_child_age_screenread/name", '"\n    >\n      <option class="sb_child_ages_empty_zero" value="12 ">\n          ', "\n            ", "/private/sxp_index_sbox_horizontal_age_at_checkout/name", "/private/sxp_index_sbox_age_at_checkout/name", "\n      </option>\n      ", '\n        <option value="', ">\n            ", "\n                ", "/private/sxp_index_sbox_num_years_old/name", "/private/loc_counter_word_child_age_cjk/name", "\n        </option>\n      ", "</div></div>", "\n      </div>\n    ", "\n              ", ' \n    <div class="sb-group__field">\n      ', "/private/pex_flights_search_traveller_infants/name", "/private/pex_flights_search_traveller_babies_age/name", "data-group-infants-count", "group_infants", '\n                for="group_infants_', '\n                for="group_infants"\n              ', "\n           >\n            ", "\n          </label>\n        ", " \n  ", '\n    <select\n      name="group_infants"\n      ', '\n         id="group_infants_', '"\n         class="group_infants"\n      ', '\n         id="group_infants"\n      ', "\n      data-group-infants-count\n     >\n      ", ">\n          ", "\n    </select>\n  ", "\n\n</div>\n", "\n\t"],
            g = ["fe_sb_group_max_adults", "fe_add_children_tooltip", "b_action", "b_search_config", "b_predicted_traveller_type", "fe_sb_universal_design", "fe_group_rooms_title", "fe_bui_stepper_id", "fe_bui_stepper_title", "fe_bui_stepper_subtitle", "fe_bui_stepper_min", "fe_bui_stepper_max", "fe_bui_stepper_value", "fe_bui_stepper_additional_attrs", "fe_sb_group_max_rooms", "fe_sb_state_number_of_rooms", "fe_sb_group_rooms_hide", "fe_sb_group_use_bui_stepper", "fe_sb_group_block_labels", "fe_remove_duplicate_ids", "fe_sb_unique_id", "fe_sb_group_descriptive_dropdowns", "fe_sb_width", "fe_sb_include_nr_rooms", "fe_group_adults_title", "fe_group_adults_subtitle", "fe_xpi_show_flights", "fe_xpi_show_resorts", "fe_sb_state_number_of_adults", "fe_sb_group_use_adults_label", "fe_sb_group_adults_hide", "fe_sb_state_number_of_children", "fe_sb_state_rooms", "fe_sb_state_children_ages", "fe_sb_group_has_children", "fe_group_children_title", "fe_group_children_subtitle", "fe_sb_group_max_children", "fe_sb_xpi", "fe_sb_group_localized_short_date", "fe_sb_state_checkout", "fe_children_ages", "fe_child_i", "fe_sb_group_max_children_age", "b_lang_is_cjk", "fe_sb_group_children_hide", "fe_sb_group_children_ages_hide", "fe_group_infants_title", "fe_group_infants_subtitle", "fe_sb_group_max_infants", "fe_sb_state_number_of_infants", "fe_sb_group_infants_hide"];
        return _r_(function(f) {
            _i_("4ab:d0e614cd");
            var e, t = "",
                b = this.fn;

            function s(e) {
                _i_("4ab:c13b1a81"), e += m[17];
                var t = o,
                    i = s,
                    n = _,
                    a = r,
                    s = b.MC(g[41]) || [];
                f.unshift({
                    fe_child_age: null
                });
                for (var r, o = 1, _ = s.length; o <= _; o++) {
                    f[0].fe_child_age = r = s[o - 1], e += m[17], b.MD(g[5]) && (e += m[125]), e += [m[126], b.F.entities(b.MC(g[42])), m[127], (f.unshift({
                        child_number: b.MI(b.MB(g[42])) + b.MI(1)
                    }), p = b.ME(m[128], b.MB, b.MN, null), f.shift(), p), m[129]].join(""), b.MD(g[38]) ? e += [m[130], b.ME(m[131], b.MB, b.MN, null), m[69]].join("") : b.MD(g[5]) && (e += [m[130], b.ME(m[132], b.MB, b.MN, null), m[69]].join("")), e += m[133];
                    var l = o,
                        d = s,
                        h = _,
                        c = u;
                    s = b.seq(0, b.MB(g[43])) || [];
                    f.unshift({
                        i: null
                    });
                    var u;
                    for (o = 1, _ = s.length; o <= _; o++) f[0].i = u = s[o - 1], e += [m[134], b.F.entities(u.value), m[30]].join(""), b.MJ(r + "" != "") && b.MJ(r + "" == "" + u.value) && (e += m[58]), e += m[135], b.MJ(b.MB(g[5])) || b.MJ(b.MB(g[38])) ? e += [m[136], (f.unshift({
                        num_years: u.value
                    }), p = b.ME(m[137], b.MB, b.MN, b.MO(u.value, null, m[137])), f.shift(), p), m[130]].join("") : (e += [m[136], b.F.maybexss(u.value)].join(""), b.MD(g[44]) && (e += b.ME(m[138], b.MB, b.MN, null)), e += m[130]), e += m[139];
                    f.shift(), o = l, s = d, _ = h, u = c, e += m[62], b.MD(g[5]) && (e += m[140]), e += m[4], b.MN("fe_child_i", b.MI(b.MB(g[42])) + b.MI(1)), e += m[17]
                }
                return f.shift(), o = t, s = i, _ = n, r = a, e += m[2], _r_(e)
            }

            function r(e) {
                _i_("4ab:e5078249"), e += m[17];
                var t = o,
                    i = s,
                    n = _,
                    a = r,
                    s = b.MC(g[41]) || [];
                f.unshift({
                    fe_child_age: null
                });
                for (var r, o = 1, _ = s.length; o <= _; o++) {
                    f[0].fe_child_age = r = s[o - 1], e += m[17], b.MD(g[5]) && (e += m[125]), e += [m[126], b.F.entities(b.MC(g[42])), m[127], (f.unshift({
                        child_number: b.MI(b.MB(g[42])) + b.MI(1)
                    }), p = b.ME(m[128], b.MB, b.MN, null), f.shift(), p), m[129]].join(""), b.MD(g[38]) ? e += [m[130], b.ME(m[131], b.MB, b.MN, null), m[69]].join("") : b.MD(g[5]) && (e += [m[130], b.ME(m[132], b.MB, b.MN, null), m[69]].join("")), e += m[133];
                    var l = o,
                        d = s,
                        h = _,
                        c = u;
                    s = b.seq(0, b.MB(g[43])) || [];
                    f.unshift({
                        i: null
                    });
                    var u;
                    for (o = 1, _ = s.length; o <= _; o++) f[0].i = u = s[o - 1], e += [m[134], b.F.entities(u.value), m[30]].join(""), b.MJ(r + "" != "") && b.MJ(r + "" == "" + u.value) && (e += m[58]), e += m[135], b.MJ(b.MB(g[5])) || b.MJ(b.MB(g[38])) ? e += [m[136], (f.unshift({
                        num_years: u.value
                    }), p = b.ME(m[137], b.MB, b.MN, b.MO(u.value, null, m[137])), f.shift(), p), m[130]].join("") : (e += [m[136], b.F.maybexss(u.value)].join(""), b.MD(g[44]) && (e += b.ME(m[138], b.MB, b.MN, null)), e += m[130]), e += m[139];
                    f.shift(), o = l, s = d, _ = h, u = c, e += m[62], b.MD(g[5]) && (e += m[140]), e += m[4], b.MN("fe_child_i", b.MI(b.MB(g[42])) + b.MI(1)), e += m[17]
                }
                return f.shift(), o = t, s = i, _ = n, r = a, e += m[2], _r_(e)
            }

            function i(e) {
                return _i_("4ab:cf8fa58b"), e += m[17], b.MK(b.MB(g[16])) ? (e += m[18], b.MD(g[5]) || (e += m[40], b.MD(g[18]) || (e += m[41]), e += m[42], b.MD(g[19]) && (e += m[37]), e += m[43], b.MD(g[19]) ? e += [m[44], b.F.entities(b.MC(g[20])), m[45]].join("") : e += m[46], e += [m[47], b.ME(m[19], b.MB, b.MN, null), m[48]].join("")), e = function(e) {
                    _i_("4ab:14575741"), e += m[4], b.MD(g[5]) && (e += m[49]);
                    e += m[50], b.MD(g[19]) ? e += [m[51], b.F.entities(b.MC(g[20])), m[52]].join("") : e += m[53];
                    e += [m[54], b.ME(m[55], b.MB, b.MN, null), m[56]].join("");
                    var t = b.seq(1, b.MB(g[14])) || [];
                    f.unshift({
                        i: null
                    });
                    for (var i, n = 1, a = t.length; n <= a; n++) f[0].i = i = t[n - 1], e += [m[57], b.F.entities(i.value), m[30]].join(""), b.MJ(b.MB(g[15]) == i.value) && (e += m[58]), e += m[59], b.MD(g[21]) ? e += (f.unshift({
                        num_rooms: i.value
                    }), p = b.ME(m[60], b.MB, b.MN, b.MO(i.value, null, m[60])), f.shift(), p) : e += b.F.maybexss(i.value), e += m[61];
                    f.shift(), e += m[62], b.MD(g[5]) && (e += m[63]);
                    return e += m[2], _r_(e)
                }(e += m[15]), e += m[39]) : e += [m[64], b.F.entities(b.MC(g[15])), m[65]].join(""), e += m[2], _r_(e)
            }

            function n(e) {
                return _i_("4ab:9118c1d7"), e += m[17], b.MK(b.MB(g[16])) && (e += m[18], b.MN(g[6], b.ME(m[19], b.MB, b.MN, null)), e += m[15], f.unshift({
                    fe_bui_stepper_additional_attrs: m[36],
                    fe_bui_stepper_id: m[37],
                    fe_bui_stepper_max: b.MB(g[14]),
                    fe_bui_stepper_min: m[38],
                    fe_bui_stepper_title: b.MB(g[6]),
                    fe_bui_stepper_value: b.MB(g[15]) ? b.MB(g[15]) : 0
                }), e = function(e) {
                    _i_("4ab:231f7067"), e += [m[20], b.F.maybexss(b.MC(g[7])), m[21], b.F.maybexss(b.MC(g[8])), m[22]].join(""), b.MD(g[9]) && (e += [m[23], b.F.maybexss(b.MC(g[9])), m[24]].join(""));
                    e += [m[25], b.F.maybexss(b.MC(g[7])), m[26], b.F.maybexss(b.MC(g[7])), m[27], b.F.maybexss(b.MC(g[10])), m[28], b.F.maybexss(b.MC(g[11])), m[29], b.F.maybexss(b.MC(g[12])), m[30], b.F.maybexss(b.MC(g[13])), m[31]].join(""), b.MJ(b.MB(g[12]) == b.MB(g[10])) && (e += m[32]);
                    e += [m[33], b.F.maybexss(b.MC(g[12])), m[34]].join(""), b.MJ(b.MB(g[12]) == b.MB(g[11])) && (e += m[32]);
                    return e += m[35], _r_(e)
                }(e), f.shift(), e += m[39]), e += m[2], _r_(e)
            }

            function a(e) {
                return _i_("4ab:a2339c53"), e += m[17], b.MK(b.MB(g[16])) ? (e += m[18], b.MD(g[5]) || (e += m[40], b.MD(g[18]) || (e += m[41]), e += m[42], b.MD(g[19]) && (e += m[37]), e += m[43], b.MD(g[19]) ? e += [m[44], b.F.entities(b.MC(g[20])), m[45]].join("") : e += m[46], e += [m[47], b.ME(m[19], b.MB, b.MN, null), m[48]].join("")), e = function(e) {
                    _i_("4ab:95cc6eb8"), e += m[4], b.MD(g[5]) && (e += m[49]);
                    e += m[50], b.MD(g[19]) ? e += [m[51], b.F.entities(b.MC(g[20])), m[52]].join("") : e += m[53];
                    e += [m[54], b.ME(m[55], b.MB, b.MN, null), m[56]].join("");
                    var t = b.seq(1, b.MB(g[14])) || [];
                    f.unshift({
                        i: null
                    });
                    for (var i, n = 1, a = t.length; n <= a; n++) f[0].i = i = t[n - 1], e += [m[57], b.F.entities(i.value), m[30]].join(""), b.MJ(b.MB(g[15]) == i.value) && (e += m[58]), e += m[59], b.MD(g[21]) ? e += (f.unshift({
                        num_rooms: i.value
                    }), p = b.ME(m[60], b.MB, b.MN, b.MO(i.value, null, m[60])), f.shift(), p) : e += b.F.maybexss(i.value), e += m[61];
                    f.shift(), e += m[62], b.MD(g[5]) && (e += m[63]);
                    return e += m[2], _r_(e)
                }(e += m[15]), e += m[39]) : e += [m[64], b.F.entities(b.MC(g[15])), m[65]].join(""), e += m[2], _r_(e)
            }

            function o(e) {
                return _i_("4ab:43c35fdf"), e += m[17], b.MK(b.MB(g[16])) && (e += m[18], b.MN(g[6], b.ME(m[19], b.MB, b.MN, null)), e += m[15], f.unshift({
                    fe_bui_stepper_additional_attrs: m[36],
                    fe_bui_stepper_id: m[37],
                    fe_bui_stepper_max: b.MB(g[14]),
                    fe_bui_stepper_min: m[38],
                    fe_bui_stepper_title: b.MB(g[6]),
                    fe_bui_stepper_value: b.MB(g[15]) ? b.MB(g[15]) : 0
                }), e = function(e) {
                    _i_("4ab:7d2d23f6"), e += [m[20], b.F.maybexss(b.MC(g[7])), m[21], b.F.maybexss(b.MC(g[8])), m[22]].join(""), b.MD(g[9]) && (e += [m[23], b.F.maybexss(b.MC(g[9])), m[24]].join(""));
                    e += [m[25], b.F.maybexss(b.MC(g[7])), m[26], b.F.maybexss(b.MC(g[7])), m[27], b.F.maybexss(b.MC(g[10])), m[28], b.F.maybexss(b.MC(g[11])), m[29], b.F.maybexss(b.MC(g[12])), m[30], b.F.maybexss(b.MC(g[13])), m[31]].join(""), b.MJ(b.MB(g[12]) == b.MB(g[10])) && (e += m[32]);
                    e += [m[33], b.F.maybexss(b.MC(g[12])), m[34]].join(""), b.MJ(b.MB(g[12]) == b.MB(g[11])) && (e += m[32]);
                    return e += m[35], _r_(e)
                }(e), f.shift(), e += m[39]), e += m[2], _r_(e)
            }

            function _(e) {
                return _i_("4ab:ab0cd69c"), e += [m[20], b.F.maybexss(b.MC(g[7])), m[21], b.F.maybexss(b.MC(g[8])), m[22]].join(""), b.MD(g[9]) && (e += [m[23], b.F.maybexss(b.MC(g[9])), m[24]].join("")), e += [m[25], b.F.maybexss(b.MC(g[7])), m[26], b.F.maybexss(b.MC(g[7])), m[27], b.F.maybexss(b.MC(g[10])), m[28], b.F.maybexss(b.MC(g[11])), m[29], b.F.maybexss(b.MC(g[12])), m[30], b.F.maybexss(b.MC(g[13])), m[31]].join(""), b.MJ(b.MB(g[12]) == b.MB(g[10])) && (e += m[32]), e += [m[33], b.F.maybexss(b.MC(g[12])), m[34]].join(""), b.MJ(b.MB(g[12]) == b.MB(g[11])) && (e += m[32]), e += m[35], _r_(e)
            }
            return t += m[0], e = t, _i_("4ab:d5614797"), e += m[1], b.MN("fe_sb_group_max_rooms", 30), e += m[2], b.MN("fe_sb_group_max_pets", 10), e += m[2], b.MN("fe_sb_group_max_adults", b.MB(g[0]) || 30), e += m[2], b.MN("fe_sb_group_max_children", 10), e += m[2], b.MN("fe_sb_group_max_children_age", 17), e += m[2], b.MN("fe_sb_group_max_infants", 10), e += m[3], b.MN("fe_add_children_tooltip", ""), e += m[2], b.MJ(b.MC(g[2]) + "" == "searchresults") && b.MJ(b.MC(g[3])) && b.MK(b.MC(g[3]).b_children_total) && b.MJ(b.MC(g[4]) + "" == "family") && (e += m[4], b.MN(g[1], [m[5], b.ME(m[6], b.MB, b.MN, null), m[7], b.ME(m[8], b.MB, b.MN, null), m[9]].join("")), e += m[2]), e += m[10], e += m[11], e += m[11], e += m[11], e += m[11], e += m[11], e += m[11], e += m[11], e += m[11], e += m[12], b.MD(g[5]) && (e += m[13]), e += m[14], b.MJ(0 == b.MB(g[23])) && (e += m[4], b.MJ(b.MB(g[22])) && b.MJ(b.MB(g[5])) || (e += m[15], e = b.MD(g[17]) ? n(e += m[16]) : i(e += m[16]), e += m[15], e += m[4]), e += m[17]), e += m[66], b.MK(b.MB(g[30])) ? (e += m[67], b.MD(g[17]) ? (e += m[16], b.MN(g[24], b.ME(m[68], b.MB, b.MN, null)), e += m[16], b.MJ(b.MB(g[26])) && b.MK(b.MB(g[27])) && (e += m[69], b.MN(g[25], b.ME(m[70], b.MB, b.MN, null)), e += m[16]), e += m[16], f.unshift({
                fe_bui_stepper_additional_attrs: m[71],
                fe_bui_stepper_id: m[72],
                fe_bui_stepper_max: b.MB(g[0]),
                fe_bui_stepper_min: m[38],
                fe_bui_stepper_subtitle: b.MB(g[25]),
                fe_bui_stepper_title: b.MB(g[24]),
                fe_bui_stepper_value: b.MB(g[28]) ? b.MB(g[28]) : 0
            }), e = _(e), f.shift()) : (e += m[16], b.MD(g[5]) || (e += m[73], b.MD(g[18]) || (e += m[41]), e += m[42], b.MD(g[19]) && (e += m[74]), e += m[75], b.MD(g[19]) ? e += [m[76], b.F.entities(b.MC(g[20])), m[77]].join("") : e += m[78], e += m[79], b.MD(g[29]) ? e += b.ME(m[80], b.MB, b.MN, null) : e += b.ME(m[68], b.MB, b.MN, null), e += m[81]), e = function(e) {
                _i_("4ab:e0f2a5c6"), e += m[2], b.MD(g[5]) && (e += m[49]), e += [m[82], b.ME(m[83], b.MB, b.MN, null), m[84]].join(""), b.MD(g[19]) ? e += [m[85], b.F.entities(b.MC(g[20])), m[86]].join("") : e += m[87], e += m[88];
                var t = b.seq(1, b.MB(g[0])) || [];
                f.unshift({
                    i: null
                });
                for (var i, n = 1, a = t.length; n <= a; n++) f[0].i = i = t[n - 1], e += [m[89], b.F.entities(i.value), m[30]].join(""), b.MJ(b.MB(g[28]) == i.value) && (e += m[58]), e += m[90], b.MD(g[21]) ? e += (f.unshift({
                    num_adults: i.value
                }), p = b.ME(m[91], b.MB, b.MN, b.MO(i.value, null, m[91])), f.shift(), p) : e += b.F.maybexss(i.value), e += m[92];
                return f.shift(), e += m[93], b.MD(g[5]) && (e += m[63]), e += m[2], _r_(e)
            }(e += m[16])), e += m[15], e += m[39]) : e += [m[94], b.F.entities(b.MC(g[28])), m[65]].join(""), e += m[14], b.MK(b.MB(g[45])) && (e += m[15], b.MN("fe_sb_group_has_children", b.MB(g[31]) && (b.MB(g[32]) || b.MB(g[33]))), e += m[95], b.MJ(b.MB(g[5])) && b.MJ(b.MB(g[34])) && (e += m[96]), e += m[97], b.MD(g[17]) ? (e += m[16], b.MN(g[35], b.ME(m[98], b.MB, b.MN, null)), e += m[16], b.MJ(b.MB(g[26])) && b.MK(b.MB(g[27])) && (e += m[69], b.MN(g[36], b.ME(m[99], b.MB, b.MN, null)), e += m[16]), e += m[16], f.unshift({
                fe_bui_stepper_additional_attrs: m[100],
                fe_bui_stepper_id: m[74],
                fe_bui_stepper_max: b.MB(g[37]),
                fe_bui_stepper_min: m[101],
                fe_bui_stepper_subtitle: b.MB(g[36]),
                fe_bui_stepper_title: b.MB(g[35]),
                fe_bui_stepper_value: b.MB(g[31]) ? b.MB(g[31]) : 0
            }), e = _(e), f.shift()) : (e += m[16], b.MD(g[5]) || (e += m[73], b.MD(g[18]) || (e += m[41]), e += m[42], b.MD(g[19]) && (e += m[74]), e += m[75], b.MD(g[19]) ? e += [m[102], b.F.entities(b.MC(g[20])), m[77]].join("") : e += m[103], e += [m[104], b.ME(m[98], b.MB, b.MN, null), m[81]].join("")), e = function(e) {
                _i_("4ab:1a1ca321"), e += m[2], b.MD(g[5]) && (e += m[49]), e += [m[105], b.ME(m[106], b.MB, b.MN, null), m[84]].join(""), b.MD(g[19]) ? e += [m[107], b.F.entities(b.MC(g[20])), m[108]].join("") : e += m[109], e += m[110], b.MD(g[5]) || (e += [m[111], b.F.html(b.MC(g[1])), m[112]].join("")), e += m[113];
                var t = b.seq(0, b.MB(g[37])) || [];
                f.unshift({
                    i: null
                });
                for (var i, n = 1, a = t.length; n <= a; n++) f[0].i = i = t[n - 1], e += [m[89], b.F.entities(i.value), m[30]].join(""), b.MJ(b.MB(g[31]) == i.value) && (e += m[58]), e += m[90], b.MJ(b.MB(g[21])) && b.MJ(0 == i.value) ? e += [m[69], b.ME(m[114], b.MB, b.MN, null), m[16]].join("") : b.MJ(b.MB(g[21])) ? e += [m[69], (f.unshift({
                    num_kids: i.value
                }), p = b.ME(m[115], b.MB, b.MN, b.MO(i.value, null, m[115])), f.shift(), p), m[16]].join("") : e += [m[69], b.F.maybexss(i.value), m[16]].join(""), e += m[92];
                return f.shift(), e += m[93], b.MD(g[5]) && (e += m[63]), e += m[2], _r_(e)
            }(e += m[16])), e += m[15], e += m[116], b.MK(b.MB(g[45]) || b.MB(g[46])) && b.MJ(b.MB(g[5])) && (e = function(e) {
                if (_i_("4ab:ea575062"), e += m[4], b.MJ(b.MB(g[31])) && (b.MJ(b.MB(g[32])) || b.MJ(b.MB(g[33])))) {
                    if (e += m[117], b.MD(g[5]) || (e += m[118], b.MD(g[38]) ? e += [b.ME(m[119], b.MB, b.MN, null), m[2]].join("") : b.MD(g[40]) ? (b.MN(g[39], b.DATE(b.MB(g[40]), "short_date", "", "", "")), b.MJ(1 == b.MB(g[31])) ? e += [(f.unshift({
                            date: b.MB(g[39])
                        }), p = b.ME(m[120], b.MB, b.MN, null), f.shift(), p), m[2]].join("") : e += [(f.unshift({
                            date: b.MB(g[39])
                        }), p = b.ME(m[121], b.MB, b.MN, null), f.shift(), p), m[2]].join("")) : b.MJ(1 == b.MB(g[31])) ? e += [b.ME(m[122], b.MB, b.MN, null), m[2]].join("") : e += [b.ME(m[123], b.MB, b.MN, null), m[2]].join(""), e += m[81]), e += m[124], b.MN("fe_child_i", 0), e += m[124], b.MD(g[33])) e += m[69], f.unshift({
                        fe_children_ages: b.MB(g[33])
                    }), e = function(e) {
                        _i_("4ab:e8525b12"), e += m[17];
                        var t = b.MC(g[41]) || [];
                        f.unshift({
                            fe_child_age: null
                        });
                        for (var i, n = 1, a = t.length; n <= a; n++) {
                            f[0].fe_child_age = i = t[n - 1], e += m[17], b.MD(g[5]) && (e += m[125]), e += [m[126], b.F.entities(b.MC(g[42])), m[127], (f.unshift({
                                child_number: b.MI(b.MB(g[42])) + b.MI(1)
                            }), p = b.ME(m[128], b.MB, b.MN, null), f.shift(), p), m[129]].join(""), b.MD(g[38]) ? e += [m[130], b.ME(m[131], b.MB, b.MN, null), m[69]].join("") : b.MD(g[5]) && (e += [m[130], b.ME(m[132], b.MB, b.MN, null), m[69]].join("")), e += m[133];
                            var s, r = n,
                                o = t,
                                _ = a,
                                l = s;
                            for (t = b.seq(0, b.MB(g[43])) || [], f.unshift({
                                    i: null
                                }), n = 1, a = t.length; n <= a; n++) f[0].i = s = t[n - 1], e += [m[134], b.F.entities(s.value), m[30]].join(""), b.MJ(i + "" != "") && b.MJ(i + "" == "" + s.value) && (e += m[58]), e += m[135], b.MJ(b.MB(g[5])) || b.MJ(b.MB(g[38])) ? e += [m[136], (f.unshift({
                                num_years: s.value
                            }), p = b.ME(m[137], b.MB, b.MN, b.MO(s.value, null, m[137])), f.shift(), p), m[130]].join("") : (e += [m[136], b.F.maybexss(s.value)].join(""), b.MD(g[44]) && (e += b.ME(m[138], b.MB, b.MN, null)), e += m[130]), e += m[139];
                            f.shift(), n = r, t = o, a = _, s = l, e += m[62], b.MD(g[5]) && (e += m[140]), e += m[4], b.MN("fe_child_i", b.MI(b.MB(g[42])) + b.MI(1)), e += m[17]
                        }
                        return f.shift(), e += m[2], _r_(e)
                    }(e), f.shift(), e += m[16];
                    else if (b.MD(g[32])) {
                        e += m[69];
                        var t = b.MC(g[32]) || [];
                        f.unshift({
                            fe_room: null
                        });
                        for (var i, n = 1, a = t.length; n <= a; n++) f[0].fe_room = i = t[n - 1], e += m[130], f.unshift({
                            fe_children_ages: b.MG((i || {}).b_children_ages)
                        }), e = s(e), f.shift(), e += m[69];
                        f.shift(), e += m[16]
                    }
                    e += m[141]
                }
                return e += m[2], _r_(e)
            }(e += m[69]), e += m[15]), e += m[39]), e += m[14], b.MJ(b.MB(g[23])) && (e += m[15], b.MJ(b.MB(g[22])) && b.MJ(b.MB(g[5])) || (e += m[69], e = b.MD(g[17]) ? n(e += m[142]) : i(e += m[142]), e += m[69], e += m[15]), e += m[17]), e += m[14], b.MK(b.MB(g[51])) && (e += m[143], b.MD(g[17]) ? (e += m[16], b.MN(g[47], b.ME(m[144], b.MB, b.MN, null)), e += m[16], b.MJ(b.MB(g[26])) && b.MK(b.MB(g[27])) && (e += m[69], b.MN(g[48], b.ME(m[145], b.MB, b.MN, null)), e += m[16]), e += m[16], f.unshift({
                fe_bui_stepper_additional_attrs: m[146],
                fe_bui_stepper_id: m[147],
                fe_bui_stepper_max: b.MB(g[49]),
                fe_bui_stepper_min: m[101],
                fe_bui_stepper_subtitle: b.MB(g[48]),
                fe_bui_stepper_title: b.MB(g[47]),
                fe_bui_stepper_value: b.MB(g[50]) ? b.MB(g[50]) : 0
            }), e = _(e), f.shift()) : (e += m[16], b.MD(g[5]) || (e += m[40], b.MD(g[18]) || (e += m[41]), e += m[42], b.MD(g[19]) && (e += m[147]), e += m[43], b.MD(g[19]) ? e += [m[148], b.F.entities(b.MC(g[20])), m[45]].join("") : e += m[149], e += [m[150], b.ME(m[144], b.MB, b.MN, null), m[151]].join("")), e = function(e) {
                _i_("4ab:7c850f81"), e += m[152], b.MD(g[5]) && (e += m[49]), e += m[153], b.MD(g[19]) ? e += [m[154], b.F.entities(b.MC(g[20])), m[155]].join("") : e += m[156], e += m[157];
                var t = b.seq(0, b.MB(g[49])) || [];
                f.unshift({
                    i: null
                });
                for (var i, n = 1, a = t.length; n <= a; n++) f[0].i = i = t[n - 1], e += [m[134], b.F.entities(i.value), m[30]].join(""), b.MJ(b.MB(g[50]) == i.value) && (e += m[58]), e += [m[158], b.F.maybexss(i.value), m[139]].join("");
                return f.shift(), e += m[159], b.MD(g[5]) && (e += m[63]), e += m[2], _r_(e)
            }(e += m[16])), e += m[15], e += m[39]), e += m[14], b.MJ(b.MB(g[5])) && (e += m[4], e = b.MD(g[17]) ? o(e += m[15]) : a(e += m[15]), e += m[4], e += m[17]), e += m[14], b.MD(g[5]) && (e += m[63]), e += m[14], b.MK(b.MB(g[45]) || b.MB(g[46]) || b.MB(g[5])) && (e = function(e) {
                if (_i_("4ab:985efb6b"), e += m[4], b.MJ(b.MB(g[31])) && (b.MJ(b.MB(g[32])) || b.MJ(b.MB(g[33])))) {
                    if (e += m[117], b.MD(g[5]) || (e += m[118], b.MD(g[38]) ? e += [b.ME(m[119], b.MB, b.MN, null), m[2]].join("") : b.MD(g[40]) ? (b.MN(g[39], b.DATE(b.MB(g[40]), "short_date", "", "", "")), b.MJ(1 == b.MB(g[31])) ? e += [(f.unshift({
                            date: b.MB(g[39])
                        }), p = b.ME(m[120], b.MB, b.MN, null), f.shift(), p), m[2]].join("") : e += [(f.unshift({
                            date: b.MB(g[39])
                        }), p = b.ME(m[121], b.MB, b.MN, null), f.shift(), p), m[2]].join("")) : b.MJ(1 == b.MB(g[31])) ? e += [b.ME(m[122], b.MB, b.MN, null), m[2]].join("") : e += [b.ME(m[123], b.MB, b.MN, null), m[2]].join(""), e += m[81]), e += m[124], b.MN("fe_child_i", 0), e += m[124], b.MD(g[33])) e += m[69], f.unshift({
                        fe_children_ages: b.MB(g[33])
                    }), e = function(e) {
                        _i_("4ab:a95950dc"), e += m[17];
                        var t = b.MC(g[41]) || [];
                        f.unshift({
                            fe_child_age: null
                        });
                        for (var i, n = 1, a = t.length; n <= a; n++) {
                            f[0].fe_child_age = i = t[n - 1], e += m[17], b.MD(g[5]) && (e += m[125]), e += [m[126], b.F.entities(b.MC(g[42])), m[127], (f.unshift({
                                child_number: b.MI(b.MB(g[42])) + b.MI(1)
                            }), p = b.ME(m[128], b.MB, b.MN, null), f.shift(), p), m[129]].join(""), b.MD(g[38]) ? e += [m[130], b.ME(m[131], b.MB, b.MN, null), m[69]].join("") : b.MD(g[5]) && (e += [m[130], b.ME(m[132], b.MB, b.MN, null), m[69]].join("")), e += m[133];
                            var s, r = n,
                                o = t,
                                _ = a,
                                l = s;
                            for (t = b.seq(0, b.MB(g[43])) || [], f.unshift({
                                    i: null
                                }), n = 1, a = t.length; n <= a; n++) f[0].i = s = t[n - 1], e += [m[134], b.F.entities(s.value), m[30]].join(""), b.MJ(i + "" != "") && b.MJ(i + "" == "" + s.value) && (e += m[58]), e += m[135], b.MJ(b.MB(g[5])) || b.MJ(b.MB(g[38])) ? e += [m[136], (f.unshift({
                                num_years: s.value
                            }), p = b.ME(m[137], b.MB, b.MN, b.MO(s.value, null, m[137])), f.shift(), p), m[130]].join("") : (e += [m[136], b.F.maybexss(s.value)].join(""), b.MD(g[44]) && (e += b.ME(m[138], b.MB, b.MN, null)), e += m[130]), e += m[139];
                            f.shift(), n = r, t = o, a = _, s = l, e += m[62], b.MD(g[5]) && (e += m[140]), e += m[4], b.MN("fe_child_i", b.MI(b.MB(g[42])) + b.MI(1)), e += m[17]
                        }
                        return f.shift(), e += m[2], _r_(e)
                    }(e), f.shift(), e += m[16];
                    else if (b.MD(g[32])) {
                        e += m[69];
                        var t = b.MC(g[32]) || [];
                        f.unshift({
                            fe_room: null
                        });
                        for (var i, n = 1, a = t.length; n <= a; n++) f[0].fe_room = i = t[n - 1], e += m[130], f.unshift({
                            fe_children_ages: b.MG((i || {}).b_children_ages)
                        }), e = r(e), f.shift(), e += m[69];
                        f.shift(), e += m[16]
                    }
                    e += m[141]
                }
                return e += m[2], _r_(e)
            }(e += m[15]), e += m[17]), e += m[160], t = _r_(e), t += m[161], _r_(t)
        })
    }());
    var n = t("component"),
        a = t("morphdom"),
        s = t("read-data-options"),
        r = t("search-config"),
        o = t("search/searchbox/model");
    i.exports = n.extend({
        init: function() {
            if (_i_("4ab:108be4b8"), this.options = s(this.$el, {
                    modelId: {
                        name: "sb-id",
                        type: String,
                        required: !0
                    },
                    sbWidth: {
                        name: "sb-width",
                        type: String
                    },
                    sbBBToolSearchbox: {
                        name: "sb-bbtool-searchbox",
                        type: Boolean
                    },
                    childrenHide: {
                        name: "sb-group-children-hide",
                        type: Boolean
                    },
                    childrenAgesHide: {
                        name: "sb-group-children-ages-hide",
                        type: Boolean
                    },
                    infantsHide: {
                        name: "sb-group-infants-hide",
                        type: Boolean
                    },
                    useBUIStepper: {
                        name: "sb-group-use-bui-stepper",
                        type: Boolean
                    },
                    petsHide: {
                        name: "sb-group-pets-hide",
                        type: Boolean
                    },
                    roomsHide: {
                        name: "sb-group-rooms-hide",
                        type: Boolean
                    },
                    useAdultsLabel: {
                        name: "sb-group-use_adults_label",
                        type: Boolean
                    },
                    blockLabels: {
                        name: "sb-group-block-labels",
                        type: Boolean
                    },
                    alwaysExpanded: {
                        name: "sb-group-always-expanded",
                        type: Boolean
                    },
                    descriptiveDropdowns: {
                        name: "fe_sb_group_descriptive_dropdowns",
                        type: Boolean
                    },
                    universalDesign: {
                        name: "fe_sb_universal_design",
                        type: Boolean
                    },
                    removeDuplicateIds: {
                        name: "fe_remove_duplicate_ids",
                        type: Boolean
                    },
                    searchBoxUniqueId: {
                        name: "fe_sb_unique_id",
                        type: String
                    },
                    searchboxXPI: {
                        name: "fe_sb_xpi",
                        type: Boolean
                    },
                    reorderGroupBlock: {
                        name: "sb_reorder_rooms_block",
                        type: Boolean
                    }
                }), this.model = o.getInstance(this.options.modelId), this.model.use("group"), this.model.use("dates"), this.model.on("change", this.modelChange.bind(this)), this.$form = this.$el.parents("form"), r.on("change", this.searchConfigChange.bind(this)), this.$el.on("change", '[data-group-rooms-count=""]', this.groupRoomsChange.bind(this)), this.$el.on("change", '[data-group-adults-count=""]', this.groupAdultsChange.bind(this)), this.$el.on("change", '[data-group-children-count=""]', this.groupChildrenChange.bind(this)), this.$el.on("change", "[data-group-child-age]", this.groupChildAgeChange.bind(this)), this.$el.on("change", '[data-group-infants-count=""]', this.groupInfantsChange.bind(this)), this.renderEl = this.$el.find('[data-render=""]')[0], this.template = B.jstmpl("search_group_group_html"), this.$form.on("change", ".b-booker-type__input_business-booker", this.businessBookerSelected.bind(this)), this.modelInit(), "index" === B.env.b_action && "sessionStorage" in window && !r.childrenAges.length) {
                var e;
                try {
                    e = JSON.parse(window.sessionStorage.getItem("search_group_children_ages"))
                } catch (e) {}
                if (e) {
                    this.model.group.set({
                        key: "children_count",
                        value: e.length
                    });
                    for (var t = 0; t < e.length; t++) this.model.group.set({
                        i: t,
                        key: "children_ages",
                        value: e[t]
                    })
                }
            }
            _r_()
        },
        modelInit: function() {
            _i_("4ab:c3432114");
            var e = {
                rooms_count: r.rooms ? r.rooms.length : 1,
                adults_count: r.adults || 2,
                children_ages: r.childrenAges || [],
                default_empty_age_to: "12 "
            };
            this.options.infantsHide || (e.infants_count = r.infants), this.model.group.init(e), _r_()
        },
        modelChange: function(e) {
            if (_i_("4ab:694521b7"), !e || "group" != e.group && "dates" != e.group) return _r_();
            this.render(), _r_()
        },
        searchConfigChange: function() {
            _i_("4ab:880384aa"), this.model.group.set({
                key: "rooms_count",
                value: Array.isArray(r.rooms) ? r.rooms.length : 1
            }), this.model.group.set({
                key: "adults_count",
                value: r.adults
            }), this.model.group.set({
                key: "children_count",
                value: Array.isArray(r.childrenAges) ? r.childrenAges.length : 1
            }), this.options.infantsHide || this.model.group.set({
                key: "infants_count",
                value: r.infants
            }), Array.isArray(r.childrenAges) && r.childrenAges.forEach(function(e, t) {
                _i_("4ab:550ed85a"), this.model.group.set({
                    key: "children_ages",
                    i: t,
                    value: e
                }), _r_()
            }.bind(this)), _r_()
        },
        groupRoomsChange: function(e) {
            _i_("4ab:ea31094b");
            var t = $(e.currentTarget);
            this.model.group.set({
                key: "rooms_count",
                value: t.val()
            }), _r_()
        },
        groupAdultsChange: function(e) {
            _i_("4ab:87670d74");
            var t = $(e.currentTarget);
            this.model.group.set({
                key: "adults_count",
                value: t.val()
            }), this.groupAdultsChanged = !0, _r_()
        },
        groupChildrenChange: function(e) {
            _i_("4ab:d9e925f4");
            var t = $(e.currentTarget);
            this.model.group.set({
                key: "children_count",
                value: t.val()
            }), _r_()
        },
        groupInfantsChange: function(e) {
            _i_("4ab:caa31a74");
            var t = $(e.currentTarget);
            this.model.group.set({
                key: "infants_count",
                value: t.val()
            }), _r_()
        },
        groupChildAgeChange: function(e) {
            _i_("4ab:938d8031");
            var t = $(e.currentTarget),
                i = t.attr("data-group-child-age");
            this.model.group.set({
                key: "children_ages",
                i: +i,
                value: t.val()
            }), _r_()
        },
        render: function() {
            _i_("4ab:d304fa43");
            var e = {},
                t = this.model.group.get(),
                i = this.model.dates.get();
            t = {
                fe_sb_state_number_of_rooms: t.rooms_count,
                fe_sb_state_number_of_adults: t.adults_count,
                fe_sb_state_number_of_children: t.children_ages.length,
                fe_sb_state_children_ages: t.children_ages,
                fe_sb_state_number_of_infants: t.infants_count,
                fe_sb_state_traveller: t.fe_sb_state_traveller,
                fe_sb_state_rooms: [{
                    b_adults: t.adults_count,
                    b_children: t.children_ages.length,
                    b_children_ages: t.children_ages,
                    b_room_order: 1
                }]
            }, B.env.b_lang_is_cjk && (t.b_lang_is_cjk = B.env.b_lang_is_cjk), i.checkout && (t.fe_sb_state_checkout = i.checkout.toString()), this.options.sbWidth && (t.fe_sb_width = this.options.sbWidth), this.options.childrenHide && (t.fe_sb_group_children_hide = 1), this.options.childrenAgesHide && (t.fe_sb_group_children_ages_hide = 1), this.options.infantsHide && (t.fe_sb_group_infants_hide = 1), this.options.useBUIStepper && (t.fe_sb_group_use_bui_stepper = 1), this.options.petsHide && (t.fe_sb_group_pets_hide = 1), this.options.roomsHide && (t.fe_sb_group_rooms_hide = 1), this.options.blockLabels && (t.fe_sb_group_block_labels = 1), this.options.alwaysExpanded && (t.fe_sb_group_always_expanded = 1), this.options.useAdultsLabel && (t.fe_sb_group_use_adults_label = 1), this.options.sbBBToolSearchbox && (t.fe_sb_bbtool_searchbox = 1), this.options.descriptiveDropdowns && (t.fe_sb_group_descriptive_dropdowns = 1), this.options.universalDesign && (t.fe_sb_universal_design = 1), this.options.removeDuplicateIds && (t.fe_remove_duplicate_ids = 1), this.options.searchBoxUniqueId && (t.fe_sb_unique_id = this.options.searchBoxUniqueId), this.options.searchboxXPI && (t.fe_sb_xpi = 1), this.options.reorderGroupBlock && (t.fe_sb_include_nr_rooms = 1);
            var n = this.template.render(t).trim();
            "msie" === B.env.b_browser && B.env.b_browser_version <= 8 && (e.onBeforeElUpdated = function(e, t) {
                _i_("4ab:2ad4db29");
                var i = e.getAttribute(jQuery.expando);
                return i && t.setAttribute(jQuery.expando, i), _r_(!0)
            }), a(this.renderEl, n, e), _r_()
        },
        businessBookerSelected: function() {
            _i_("4ab:4b365a2c"), this.groupAdultsChanged || this.model.group.set({
                key: "adults_count",
                value: 1
            }), _r_()
        },
        groupChildrenAgeSave: function(e) {
            _i_("4ab:a8436cf8"), e.preventDefault(), t("events").trigger("SearchBox::SaveTravelGroupsClicked", e), _r_()
        }
    }), _r_()
}), B.define("search/group/model", function(e, t, i) {
    "use strict";

    function n(e) {
        _i_("4ab:1117a8f7"), this.model = e, this.data = {
            preset: -1
        }, this.valid = !0, this.validationError = "", this.options = {}, _r_()
    }
    _i_("4ab:16d0753d"), $.extend(n.prototype, {
        init: function(e) {
            _i_("4ab:36e46bba"), this.data = e, this.emit("init"), _r_()
        },
        configure: function(e, t) {
            _i_("4ab:4db4fdf81"), void 0 !== t ? this.options[e] = t : "object" == typeof e && $.extend(this.options, e), _r_()
        },
        get: function() {
            return _i_("4ab:6dd4b5d31"), _r_(this.data)
        },
        setAll: function(t) {
            if (_i_("4ab:7bab9fd6"), !t) return _r_(!1);
            var i = this;
            return Object.keys(t).forEach(function(e) {
                _i_("4ab:1bc66b31"), i.set({
                    key: e,
                    value: t[e]
                }, !0), _r_()
            }), this.emit("change"), _r_(!0)
        },
        set: function(e, t) {
            if (_i_("4ab:1ddf7807"), !e || !e.key) return _r_(!1);
            if ("children_count" == e.key)
                if (this.data.children_ages || (this.data.children_ages = []), 0 == e.value) this.data.children_ages = [];
                else if (this.data.children_ages.length < e.value)
                for (var i = this.data.children_ages.length; i < e.value; i++) this.data.default_empty_age_to ? this.data.children_ages.push(this.data.default_empty_age_to) : this.data.children_ages.push("");
            else this.data.children_ages.length > e.value && this.data.children_ages.splice(e.value, this.data.children_ages.length - e.value);
            else e.hasOwnProperty("i") ? (this.data[e.key] || (this.data[e.key] = []), this.data[e.key][e.i] = e.value) : this.data[e.key] = e.value;
            if ("index" === B.env.b_action && "sessionStorage" in window) {
                var n = JSON.stringify(this.data.children_ages);
                window.sessionStorage.setItem("search_group_children_ages", n)
            }
            return t || this.emit("change"), _r_(!0)
        },
        validate: function(e) {
            _i_("4ab:af1265a3");
            var t = !0,
                i = "";
            if ((e = e || {}).groupLimit) {
                var n = 0;
                this.data && this.data.adults_count && (n += parseInt(this.data.adults_count)), this.data && this.data.children_ages && (n += this.data.children_ages.length), n > e.groupLimit && (t = !1, i = "over-limit")
            }
            return this.valid != t && (this.valid = t, this.validationError = i, this.emit("validation", {
                valid: t,
                validationError: i
            })), _r_(t)
        },
        modelChange: function(e) {
            if (_i_("4ab:fc5eae5e"), !e || "traveller" !== e.group) return _r_();
            var t = this.model.traveller.get().travellerType;
            switch (t) {
                case null:
                case "":
                case "couple":
                    this.data.rooms_count = 1, this.data.adults_count = 2, this.data.children_ages = [];
                    break;
                case "solo":
                case "business":
                    this.data.rooms_count = 1, this.data.adults_count = 1, this.data.children_ages = [];
                    break;
                case "family":
                    this.data.adults_count = 1 == this.data.adults_count ? 2 : this.data.adults_count, this.data.children_ages && 0 != this.data.children_ages.length || (this.data.children_ages = [this.data.default_empty_age_to]);
                    break;
                case "group":
                    this.data.adults_count = 1 == this.data.adults_count ? 2 : this.data.adults_count, this.data.children_ages = []
            }
            this.data.fe_sb_state_traveller = t, this.emit("change"), _r_()
        },
        emit: function(e, t) {
            _i_("4ab:73d03bf3"), t = t || {}, this.model.emit(e, $.extend(t, {
                group: "group"
            })), _r_()
        }
    }), i.exports = n, _r_()
}), B.define("search/searchbox/analytics", function(e, n, t) {
    _i_("4ab:e7508c5f");
    var a = {};
    n.send = function(e, t, i) {
        if (_i_("4ab:34abea4d"), !window.ga) return _r_();
        window.ga("send", "event", "Searchbox", B.env.b_action, e, t, i), _r_()
    }, n.sendNonInteractive = function(e, t) {
        _i_("4ab:26b6ccd6"), n.send(e, t, {
            nonInteraction: !0
        }), _r_()
    }, n.sendOnce = function(e, t) {
        _i_("4ab:89306d8e");
        var i = e + ":" + t;
        a[i] || (n.send(e, t), a[i] = !0), _r_()
    }, _r_()
}), B.define("search/searchbox/model", function(_, e, t) {
    "use strict";
    _i_("4ab:2c9787a1");
    var i = _("event-emitter"),
        n = _("search/modules/flags"),
        a = {};

    function s(e) {
        _i_("4ab:0c204bd6"), i.extend(this), this.id = e, this.formAction, this.fieldGroups = {
            track: []
        }, this.flags = {}, this.validators = [], this.mode = "", _r_()
    }
    $.extend(s.prototype, {
        use: function(e) {
            if (_i_("4ab:82c0434e"), this[e]) return _r_();
            switch (e) {
                case "destination":
                    var t = _("search/destination/model");
                    this[e] = new t(this);
                    break;
                case "origin":
                    var i = _("search/destination/model");
                    this[e] = new i(this);
                    break;
                case "dates":
                    var n = _("search/dates/model");
                    this[e] = new n(this);
                    break;
                case "group":
                    var a = _("search/group/model");
                    this[e] = new a(this);
                    break;
                case "driverAge":
                    var s = _("search/driver-age/model");
                    this[e] = new s(this);
                    break;
                case "flights":
                    var r = _("search/flights/model");
                    this[e] = new r(this);
                    break;
                default:
                    return _r_()
            }
            if ("function" == typeof this[e].validate) {
                var o = this[e]._options ? this[e]._options : this[e].options;
                o || (o = {}), this.validators.push(this[e].validate.bind(this[e], o))
            }
            _r_()
        },
        submit: function() {
            _i_("4ab:9812a29f"), this.emit("submit"), _r_()
        },
        getFormAction: function() {
            return _i_("4ab:79f234f3"), _r_(this.formAction)
        },
        setFormAction: function(e) {
            _i_("4ab:29b6d747"), this.formAction = e, _r_()
        },
        getFields: function() {
            _i_("4ab:23eeccf0");
            var t = [];
            return Object.keys(this.fieldGroups).forEach(function(e) {
                _i_("4ab:e7afd7a5"), Array.isArray(this.fieldGroups[e]) && (t = t.concat(this.fieldGroups[e])), _r_()
            }.bind(this)), _r_(t)
        },
        setFields: function(e, t) {
            _i_("4ab:98ae65e2"), this.fieldGroups[e] = t, _r_()
        },
        getMode: function() {
            return _i_("4ab:0d862871"), _r_(this.mode)
        },
        setMode: function(e) {
            _i_("4ab:09026df4"), this.mode = e, this.emit("change-mode", e), _r_()
        },
        hasFlag: function(e) {
            return _i_("4ab:a1fc2a7f"), _r_(e in this.flags)
        },
        getFlag: function(e) {
            return _i_("4ab:9ef09a09"), _r_(this.flags[e])
        },
        updateFlags: function(e) {
            _i_("4ab:e0075d67");
            var t = n.parse(e);
            Object.assign(this.flags, t), _r_()
        },
        validate: function() {
            _i_("4ab:e3e8395a");
            var e = this.validators.filter(function(e) {
                return _i_("4ab:e115dcbd"), _r_(e.call())
            });
            return _r_(e.length == this.validators.length)
        }
    }), t.exports = {
        getInstance: function(e) {
            return _i_("4ab:8b26e77a"), a[e] || (a[e] = new s(e)), _r_(a[e])
        }
    }, _r_()
}), B.define("search/searchbox/events", function(e, t, i) {
    "use strict";
    _i_("4ab:031dcfc3");
    var n = new(e("event-emitter"));
    return n.SEARCHBOX_SUBMIT_SUCCESS = "searchbox_submit_success", n.SEARCHBOX_DESTINATION_SELECTED = "searchbox_destination_selected", _r_(n)
}), B.define("component/search/searchbox/searchbox", function(i, e, t) {
    "use strict";
    _i_("4ab:19ccd30e");
    var n = i("server-data"),
        a = i("component"),
        s = i("search/searchbox/model"),
        r = i("read-data-options"),
        o = i("search/searchbox/events"),
        _ = !1,
        l = ["country", "dest_id", "dest_type", "district", "iata", "landmark", "latitude", "longitude", "place_id", "place_id_lat", "place_id_lon", "region", "prefill_submitted"];
    t.exports = a.extend({
        init: function() {
            (_i_("4ab:df7c8476"), this.hiddenFields = [], this.options = r(this.$el, {
                modelId: {
                    name: "sb-id",
                    type: String,
                    required: !0
                },
                flags: {
                    name: "sb-flags",
                    type: String,
                    defaultValue: ""
                },
                isFirstVisible: {
                    name: "is-first-visible",
                    type: Boolean
                }
            }), this.model = s.getInstance(this.options.modelId), this.model.on("init", this.modelChange.bind(this)), this.model.on("change", this.modelChange.bind(this)), this.model.on("submit", this.modelSubmit.bind(this)), this.model.updateFlags(this.options.flags), this.$form = this.$el.is("form") ? this.$el : this.$el.find("form:eq(0)"), this.$form.submit(this.formSubmit.bind(this)), this.originalAction = this.$form.attr("action"), this.options.isFirstVisible && this.model.hasFlag("sticky")) && i("search/searchbox/searchbox-sticky-controller").getController().setElement(this.$form);
            this.model.hasFlag("sticky") && this.model.hasFlag("deny_focus") && this.$el.get(0) && this.model.getFlag("deny_focus") && new(i("search/searchbox/searchbox-deny-focus-controller"))(this.$el.get(0));
            this.$searchOverlay = this.$el.find("[data-searching-overlay]"), this.shouldShowSearchOverlay = this.model.getFlag("AEJPAcBacPONDcFGHT") && this.$searchOverlay.length, this.shouldShowSearchOverlay && (this.$searchOverlay.on("click", this.searchOverlayClick.bind(this)), $(document).on("keydown", this.hideSearchOverlay.bind(this))), this.initCurrentCountryField();
            var e = $(".sb-searchbox-horizontal__dismissible-btn");
            if (e.length && !_) {
                var t = e.parents(".sb-searchbox-horizontal");
                _ = !0, e.click(function() {
                    _i_("4ab:8742af51"), t.hasClass("hidden") ? t.removeClass("hidden") : t.addClass("hidden"), _r_()
                })
            }
            "www" == n.b_site_type && this.model.setFields("sr_traffic", [{
                name: "from_sf",
                value: 1
            }]), B.env.b_force_dates && (this.model.setFields("sr_user_modifications", [{
                name: "user_changed_date",
                value: 0
            }]), B.eventEmitter.on("FORM:user-changes", function(e, t) {
                _i_("4ab:1bab8e28"), this.model.setFields("sr_user_modifications", [{
                    name: "user_changed_" + t.type,
                    value: 1
                }]), this.updateHiddenFields(), _r_()
            }.bind(this))), _r_()
        },
        modelChange: function(e) {
            _i_("4ab:88f20344"), this.updateHiddenFields(), _r_()
        },
        modelSubmit: function() {
            _i_("4ab:92c6cafc"), this.$form.submit(), _r_()
        },
        initCurrentCountryField: function() {
            _i_("4ab:6adc9882");
            var e = !1;
            this.$onlyCurrentCountry = this.$form.find("#limit-search-area"), this.$onlyCurrentCountry.length && (e = this.$onlyCurrentCountry.is(":checked"), this.$onlyCurrentCountry.bind("change", this.onlyCurrentCountryChange.bind(this)), this.model.use("destination"), this.model.destination.initOnlyCurrentCountry(e)), _r_()
        },
        onlyCurrentCountryChange: function() {
            _i_("4ab:89625bb4"), this.model.use("destination"), this.model.destination.setOnlyCurrentCountry(this.$onlyCurrentCountry.is(":checked")), _r_()
        },
        updateHiddenFields: function() {
            _i_("4ab:7dc447d1");
            var e = this.model.getFormAction(),
                t = this.$form.attr("action");
            e || (e = this.originalAction), t != e && this.$form.attr("action", e), this.hiddenFields && this.hiddenFields.forEach(function(e) {
                _i_("4ab:b648de20"), e.$node.remove(), e.$node = null, _r_()
            });
            var i = this.model.getFields();
            this.hiddenFields = [];
            var n = [],
                a = !1;
            i.forEach(function(e) {
                _i_("4ab:3454694f"), this.hiddenFields.push({
                    name: e.name,
                    value: e.value
                }), n.push(e.name), -1 != l.indexOf(e.name) && (a = !0), _r_()
            }.bind(this)), this.$form.find("input").filter(function() {
                return _i_("4ab:60cecddd"), _r_(a && -1 != l.indexOf(this.name) || -1 != n.indexOf(this.name))
            }).remove(), this.hiddenFields.forEach(function(e) {
                _i_("4ab:39b29132");
                var t = $("<input>");
                t.attr("type", "hidden"), t.attr("name", e.name), t.attr("value", e.value), e.$node = t, this.$form.append(t), _r_()
            }.bind(this)), _r_()
        },
        selectFirstFromAutocomplete: function() {
            _i_("4ab:c6931665");
            var e = this.model.destination && this.model.destination.ac;
            e && !e.selected && e.dataset && e.dataset.length && this.model.destination.set(e.dataset[0]), _r_()
        },
        formSubmit: function(e) {
            if (_i_("4ab:2827dab9"), !this.model.validate()) return e.preventDefault(), _r_();
            o.trigger(o.SEARCHBOX_SUBMIT_SUCCESS, this), this.shouldShowSearchOverlay ? this.showSearchOverlay() : this.shouldShowSearchPageOverlay ? this.pageOverlay.show(this.model.destination.data.ss_raw) : this.shouldShowSRPP && this.SRPPOverlay.show(this.model.destination.data.ss_raw), this.selectFirstFromAutocomplete(), _r_()
        },
        searchOverlayClick: function() {
            _i_("4ab:86875d97"), this.abortSubmit(), this.hideSearchOverlay(), B.et.customGoal("AEJPAcBacPONDcFGHT", 1), _r_()
        },
        abortSubmit: function() {
            _i_("4ab:59ccc51a"), window.stop ? window.stop() : document.execCommand && document.execCommand("Stop"), _r_()
        },
        showSearchOverlay: function() {
            _i_("4ab:bdd7b242"), this.$searchOverlay.addClass("-visible"), _r_()
        },
        hideSearchOverlay: function() {
            _i_("4ab:f79d19f5"), this.$searchOverlay.removeClass("-visible"), _r_()
        }
    }), _r_()
}), B.define("search/searchbox/searchbox-sticky-controller", function(e, t, i) {
    "use strict";
    _i_("4ab:96010371");
    var n = e("jquery"),
        a = e("event-emitter"),
        s = null;

    function r() {
        _i_("4ab:1842ddfa"), a.extend(this), this.visible = !1, this.bottomPosition = null, this.$el = null, this.$sticky = null, this.$window = n(window), this.$window.on("scroll", this.windowScroll.bind(this)), this.$window.on("keydown", this.onKeyDown.bind(this)), this.$window.on("click", this.clickOnWindow.bind(this)), _r_()
    }
    Object.assign(r.prototype, {
        setElement: function(e) {
            if (_i_("4ab:5c9dbbd1"), this.bottomPosition) {
                var t = e.offset(),
                    i = e.outerHeight();
                if (t && t.top + i > this.bottomPosition) return _r_()
            }
            this.$el = e, this.recalculate(), _r_()
        },
        setStickyElement: function(e) {
            _i_("4ab:4409ce23"), this.$sticky = e, _r_()
        },
        isVisible: function() {
            return _i_("4ab:5393a12a"), _r_(this.visible)
        },
        recalculate: function() {
            if (_i_("4ab:cb3bda32"), null === this.$el) return _r_();
            var e = this.$el.offset(),
                t = this.$el.outerHeight();
            if (!e) return _r_();
            this.bottomPosition = e.top + t, this.updateStatus(), _r_()
        },
        show: function() {
            _i_("4ab:ba1a50e9"), this.visible = !0, this.emit("show"), _r_()
        },
        onKeyDown: function(e) {
            _i_("4ab:aa7bbd20"), 27 === e.keyCode && this.visible && this.updateStatus(), _r_()
        },
        clickOnWindow: function(e) {
            if (_i_("4ab:0f2ac108"), this.$sticky && this.$sticky.length) {
                var t = e.target,
                    i = this.$sticky.get(0);
                !(n.contains(i, t) || i === t) && this.visible && this.updateStatus()
            }
            _r_()
        },
        updateStatus: function() {
            _i_("4ab:3e5c598e"), !this.visible && this.$window.scrollTop() >= this.bottomPosition ? (this.visible = !0, this.emit("show")) : this.visible && this.$window.scrollTop() < this.bottomPosition && (this.visible = !1, this.emit("hide")), _r_()
        },
        windowScroll: function(e) {
            if (_i_("4ab:cf8eeb33"), null === this.bottomPosition) return _r_();
            this.updateStatus(), _r_()
        }
    }), i.exports = {
        getController: function() {
            return _i_("4ab:0f46f741"), s || (s = new r), _r_(s)
        }
    }, _r_()
}), B.define("component/search/searchbox/searchbox-sticky", function(e, t, i) {
    "use strict";
    _i_("4ab:adca3176");
    var n = e("component"),
        a = e("events"),
        s = e("search/searchbox/searchbox-sticky-controller").getController();
    i.exports = n.extend({
        init: function() {
            _i_("4ab:43f5b479"), s.on("show", this.show.bind(this)), s.on("hide", this.hide.bind(this)), s.setStickyElement(this.$el), s.isVisible() && this.hardShow(), _r_()
        },
        show: function(e) {
            _i_("4ab:0180b0f9"), this.$el.addClass("-visible-1"), a.trigger("searchbox-sticky:show"), setTimeout(function() {
                _i_("4ab:d6a5fa72"), this.$el.addClass("-visible-2"), _r_()
            }.bind(this), 0), _r_()
        },
        hardShow: function() {
            _i_("4ab:0579d075"), this.$el.addClass("-visible-1 -visible-2"), _r_()
        },
        hide: function(e) {
            _i_("4ab:34395e9c"), this.$el.removeClass("-visible-2"), setTimeout(function() {
                _i_("4ab:cfe3cb5e"), this.$el.removeClass("-visible-1"), _r_()
            }.bind(this), 1e3), _r_()
        }
    }), _r_()
}), B.define("search/searchbox/searchbox-deny-focus-controller", function(e, t, i) {
    "use strict";
    _i_("4ab:e88bf486");
    var n = e("jquery"),
        a = e("deny-focus");

    function s(e) {
        _i_("4ab:947d6856"), this.el = e, this.state = null, this._timeoutId = null, this.deny();
        var t = this.eventHandler.bind(this);
        n(this.el).on("focus change blur", "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), *[tabindex], *[contenteditable]", t), B.eventEmitter.bind("CALENDAR:dates_changed CALENDAR:dayclick", t), _r_()
    }(s.prototype = s.prototype || {}).eventHandler = function(e) {
        _i_("4ab:c680ff8a"), this._timeoutId && clearTimeout(this._timeoutId), this._timeoutId = null, "focusout" === e.type || "blur" === e.type ? this._timeoutId = setTimeout(this.deny.bind(this), 100) : this.allow(), _r_()
    }, s.prototype.deny = function() {
        if (_i_("4ab:3ab34bf4"), "deny" === this.state) return _r_();
        this.state = "deny", a.deny(this.el), _r_()
    }, s.prototype.allow = function() {
        if (_i_("4ab:7603ee45"), "allow" === this.state) return _r_();
        this.state = "allow", a.allow(this.el), _r_()
    }, i.exports = s, _r_()
}), B.define("component/search/group/children-ages-tooltip", function(e, t, i) {
    "use strict";
    _i_("4ab:d930ee05");
    var n = e("jquery"),
        a = e("jstmpl"),
        s = e("component"),
        r = e("events");
    i.exports = s.extend({
        init: function() {
            _i_("4ab:1bcc6f96"), this.dropdown = !1, this.$form = this.$el.closest("form"), this.isPopupAlreadyShown = !1, this.agesSelector = '[name="age"]', this.addEventListeners(), _r_()
        },
        addEventListeners: function() {
            _i_("4ab:d659cffa"), this.$el.change(this.showTooltip.bind(this)), this.$form.delegate(this.agesSelector, "click", this.hideTooltip.bind(this)), B.eventEmitter.bind("CALENDAR:opened", this.hideTooltip.bind(this)), void 0 !== B.hotel.Events && (r.on(B.hotel.Events.RT.LIGHTBOX_CLOSE, this.hideTooltip.bind(this)), r.on(B.hotel.Events.RT.LIGHTBOX_OPEN, this.hideTooltip.bind(this))), _r_()
        },
        showTooltip: function() {
            if (_i_("4ab:776e88ab"), 0 < parseInt(this.$el.val()) && !this.isPopupAlreadyShown) var t = setTimeout(function() {
                _i_("4ab:c3442845");
                var e = this.$form.find(this.agesSelector).eq(0);
                if (0 === e.length) return _r_();
                this.dropdown = n.fly.dropdown.extend({
                    defaults: {
                        position: "bottom left",
                        content: function() {
                            return _i_("4ab:ce5204be"), _r_(a("searchbox_children_ages_tooltip").render({}))
                        },
                        extraClass: "searchbox_children_ages_tooltip"
                    }
                }).create(e[0]), this.dropdown.show(), this.isPopupAlreadyShown = !0, clearTimeout(t), _r_()
            }.bind(this), 0);
            _r_()
        },
        hideTooltip: function() {
            _i_("4ab:f7ccaced"), this.dropdown && (this.dropdown.hide(), this.dropdown.destroy()), _r_()
        }
    }), _r_()
}), B.define("component/search/group/add-children-tooltip", function(e, t, i) {
    "use strict";
    _i_("4ab:61c7b5d3");
    var n = e("jquery"),
        a = B.env.rtl ? "left" : "right",
        s = "searchbox_children_tooltip",
        r = null,
        o = null === B.browserStorageHandler.getSessionValue("gs_sb_add_children_tooltip"),
        _ = e("component");
    i.exports = _.extend({
        init: function() {
            _i_("4ab:b89a9bb1"), o && this.$el.data("add-children-tooltip") && (this.showTooltip(), B.browserStorageHandler.addSessionValue("gs_sb_add_children_tooltip", 1), o = !1, B.eventEmitter.bind("CALENDAR:opened", this.hideTooltip), n(".sb-destination__input").on("focus", this.hideTooltip)), _r_()
        },
        showTooltip: function() {
            _i_("4ab:439aa3e2");
            var e = this.$el;
            r && r.hide(), (r = n.fly.dropdown.extend({
                defaults: {
                    position: a,
                    content: function() {
                        return _i_("4ab:8385062d"), _r_(e.data("add-children-tooltip"))
                    },
                    extraClass: s
                },
                actions: {
                    click: function(e) {
                        _i_("4ab:ae1f5f37"), n(e.target).is("select") && this.hide(), _r_()
                    }
                },
                _autohide: function() {},
                init: function() {
                    _i_("4ab:3d8323e5"), this.bind(this.events.show, function() {
                        _i_("4ab:1b8e83a1"), n("." + s).delegate(".fly-dropdown-close", "click", function(e) {
                            _i_("4ab:edc671d6"), r.hide(), _r_()
                        }), _r_()
                    }), _r_()
                }
            }).create(e)).show(), _r_()
        },
        hideTooltip: function() {
            _i_("4ab:ed78e032"), r && r.hide(), _r_()
        }
    }), _r_()
}), booking.jstmpl("guest_errors", function() {
    _i_("4ab:41f6cae5");
    var a = ["\n\t", "\n\t\t", "/private/iq_sbox_error_flights_group_size/name", "\n\n\t", "\n\n\n\n\n\n\n", "\n\n    ", "\n        ", "data-", '="', '"', "\n    ", " data-", '<div data-component="onview-animate" data-anim-type="fadeInBottom"> ', "<div ", 'data-et-view="', ':1" data-et-click="customGoal:', ':1" ', 'class="fe_banner fe_banner__accessible ', "fe_banner__scale_small ", "fe_banner__w-icon ", "fe_banner__w-dismiss ", "fe_banner__", " ", "fe_banner__w-icon-", "fe_banner__bp fe_banner__inherit_font_size ", ' " ', 'id="', '" ', 'role="alert"', "> ", '<i class="fe_banner__icon ', '" aria-hidden="true"></i> ', '<img class="fe_banner__icon" src="', '"> ', '<span class="', "fe_banner__icon", " </span> ", '<div class="fe_banner__btn_container"> <div class="fe_banner__btn_container_content"> ', '<h3 class="fe_banner__title"> ', " </h3> ", '<div class="fe_banner__message ', "fe_banner__genius-trial", " </div> ", '</div> <div class="fe_banner__button"> ', "</div> ", '<span class="fe_banner__dismiss js-close"><i class="bicon-btnclose" aria-label="close"></i></span> ', '<form action="', "/genius_activate_trial", '" class="fe_banner__genius-banner-form" method="post"> <input type="hidden" name="return_url" value="', '"> <input type="hidden" name="src" value="hp_banner"> <input type="hidden" name="campaign_id" value="', '"> <input type="submit" class="button fe_banner__genius-banner-button" value="', '"> </form> ', "\n", "\n\n\n\n", "\n\n", "0", "red"],
        s = ["fe_error_message", "fe_banner__data", "fe_banner__data_id", "fe_banner__data_value", "fe_banner__data_id_2", "fe_banner__data_value_2", "fe_banner__data_id_3", "fe_banner__data_value_3", "fe_banner__data_id_4", "fe_banner__data_value_4", "fe_banner__data_id_5", "fe_banner__data_value_5", "fe_banner__animate", "b_action", "fe_banner__scale", "fe_banner__icon_class", "fe_banner__icon_img_url", "fe_banner__icon_svg", "fe_banner__close_button", "fe_banner__color_scheme", "fe_banner__color_scheme_classes", "fe_banner__icon_size", "fe_banner__extra_classes", "fe_banner__id", "fe_banner__aria_alert", "fe_banner__icon_svg_class", "fe_banner__btn_include", "fe_banner__title_text", "fe_banner__start_genius_trial", "fe_banner__message_text", "b_secure_hostname", "b_query_params_with_lang", "b_original_url", "fe_ge_trial_desktop_campaign_id", "ge_expand_hp_trial_sidebar_cta", "fe_banner__banners_count", "fe_error"];
    return _r_(function(e) {
        _i_("4ab:e7a7302a");
        var t, i = "",
            n = this.fn;
        return i += a[0], t = i, _i_("4ab:83666e18"), n.MJ(n.MB(s[36])) && (t += a[0], n.MN(s[0], [a[1], n.ME(a[2], n.MB, n.MN, null), a[0]].join("")), t += a[3], e.unshift({
            fe_banner__close_button: a[55],
            fe_banner__color_scheme: a[56],
            fe_banner__message_text: n.MB(s[0])
        }), t = function(e) {
            if (_i_("4ab:041631da"), e += ["", a[4]].join(""), n.MD(s[29])) {
                e += a[5], n.MD(s[2]) && (e += a[6], n.MN(s[1], [a[7], n.F.maybexss(n.MB(s[2])), a[8], n.F.maybexss(n.MB(s[3])), a[9]].join("")), e += a[10]), e += a[5], n.MD(s[4]) && (e += a[6], n.MN(s[1], [n.F.maybexss(n.MB(s[1])), a[11], n.F.maybexss(n.MB(s[4])), a[8], n.F.maybexss(n.MB(s[5])), a[9]].join("")), e += a[10]), e += a[5], n.MD(s[6]) && (e += a[6], n.MN(s[1], [n.F.maybexss(n.MB(s[1])), a[11], n.F.maybexss(n.MB(s[6])), a[8], n.F.maybexss(n.MB(s[7])), a[9]].join("")), e += a[10]), e += a[5], n.MD(s[8]) && (e += a[6], n.MN(s[1], [n.F.maybexss(n.MB(s[1])), a[11], n.F.maybexss(n.MB(s[8])), a[8], n.F.maybexss(n.MB(s[9])), a[9]].join("")), e += a[10]), e += a[5], n.MD(s[10]) && (e += a[6], n.MN(s[1], [n.F.maybexss(n.MB(s[1])), a[11], n.F.maybexss(n.MB(s[10])), a[8], n.F.maybexss(n.MB(s[11])), a[9]].join("")), e += a[10]), e += a[5], n.MD(s[12]) && (e += a[12]), e += a[13], n.MJ(n.MC(s[13]) + "" == "index") && (n.MJ(n.track_experiment("adUTWALOLOLOMXSYNCedLdWTCUZZOeGDPHe")), e += [a[14], n.F.entities("adUTWALOLOLOMXSYNCedLdWTCUZZOeGDPHe"), a[15], n.F.entities("adUTWALOLOLOMXSYNCedLdWTCUZZOeGDPHe"), a[16]].join("")), e += a[17];
                var t = n.MB(s[14]);
                n.MJ(t + "" == "small") && (e += a[18]), (n.MJ(n.MB(s[15])) || n.MJ(n.MB(s[16])) || n.MJ(n.MB(s[17]))) && (e += a[19]), n.MD(s[18]) && (e += a[20]), n.MJ(n.MB(s[19])) && (e += [a[21], n.F.entities(n.MC(s[19])), n.F.entities(n.MC(s[20])), a[22]].join("")), n.MJ(n.MB(s[15])) && n.MJ(n.MB(s[21])) && (e += [a[23], n.F.maybexss(n.MC(s[21])), a[22]].join("")), n.MJ(n.MC(s[13]) + "" == "book") && (e += a[24]), e += [n.F.entities(n.MC(s[22])), a[25]].join(""), n.MD(s[23]) && (e += [a[26], n.F.maybexss(n.MC(s[23])), a[27]].join("")), n.MD(s[1]) && (e += [n.F.maybexss(n.MC(s[1])), a[22]].join("")), n.MD(s[24]) && (e += a[28]), e += a[29], n.MD(s[15]) ? e += [a[30], n.F.entities(n.MC(s[15])), a[31]].join("") : n.MD(s[16]) ? e += [a[32], n.F.entities(n.MC(s[16])), a[33]].join("") : n.MD(s[17]) && (e += a[34], n.MD(s[25]) ? e += n.F.entities(n.MC(s[25])) : e += a[35], e += [a[33], n.F.maybexss(n.MC(s[17])), a[36]].join("")), n.MD(s[26]) && (e += a[37]), n.MD(s[27]) && (e += [a[38], n.F.maybexss(n.MC(s[27])), a[39]].join("")), n.MD(s[29]) && (e += a[40], n.MD(s[28]) && (e += a[41]), e += [a[33], n.F.maybexss(n.MC(s[29])), a[42]].join("")), n.MD(s[26]) && (e += [a[43], n.F.maybexss(n.MC(s[26])), a[42]].join("")), n.MD(s[26]) && (e += a[44]), n.MD(s[18]) && (e += a[45]), n.MD(s[28]) && (e += [a[46], n.F.maybexss(n.MC(s[30])), a[47], n.F.maybexss(n.MC(s[31])), a[48], n.F.maybexss(n.MC(s[32])), a[49], n.F.maybexss(n.MB(s[33])), a[50], n.F.maybexss(n.MB(s[34])), a[51]].join("")), e += a[44], n.MD(s[12]) && (e += a[44]), e += a[52]
            }
            return e += a[53], n.MN(s[19], void 0), e += a[52], n.MN(s[15], void 0), e += a[52], n.MN(s[16], void 0), e += a[52], n.MN(s[17], void 0), e += a[52], n.MN(s[21], void 0), e += a[52], n.MN(s[27], void 0), e += a[52], n.MN(s[29], void 0), e += a[52], n.MN(s[26], void 0), e += a[52], n.MN(s[18], void 0), e += a[52], n.MN(s[23], void 0), e += a[52], n.MN(s[22], void 0), e += a[52], n.MN(s[14], void 0), e += a[54], n.MN(s[2], void 0), e += a[52], n.MN(s[3], void 0), e += a[52], n.MN(s[4], void 0), e += a[52], n.MN(s[5], void 0), e += a[52], n.MN(s[6], void 0), e += a[52], n.MN(s[7], void 0), e += a[52], n.MN(s[8], void 0), e += a[52], n.MN(s[9], void 0), e += a[52], n.MN(s[10], void 0), e += a[52], n.MN(s[11], void 0), e += a[54], n.MN(s[20], void 0), e += a[54], n.MN(s[1], void 0), e += a[52], n.MN("fe_banner__banners_count", n.MI(n.MB(s[35])) + n.MI(1)), e += a[54], n.MJ(n.MC(s[13]) + "" == "book") && n.MJ(n.track_experiment_stage("HBaMEAbXDMUBdOYZbKZTSfXPRQYO", 2)) ? e += a[52] : n.MJ(n.track_experiment_stage("HBaMEAbXDMUBdOYZbKZTSfXPRQYO", 1)) && (e += a[52]), e += [a[54], "", a[52]].join(""), _r_(e)
        }(t), e.shift(), t += a[52]), t += a[52], i = _r_(t), i += a[52], _r_(i)
    })
}()), B.define("component/xp-index/guest-errors", function(e, t, i) {
    "use strict";
    _i_("4ab:36d31440");
    var n = e("component"),
        a = e("jstmpl"),
        s = e("read-data-options"),
        r = e("search/searchbox/model");
    i.exports = n.extend({
        init: function() {
            _i_("4ab:03f6e29f"), this.options = s(this.el, {
                modelId: {
                    name: "sb-id",
                    type: String,
                    required: !0
                }
            }), this.model = r.getInstance(this.options.modelId), this.model.use("group"), this.model.on("validation", this.modelValidation.bind(this)), this.template = a("guest_errors"), _r_()
        },
        modelValidation: function(e) {
            if (_i_("4ab:136a7bfb"), "group" !== e.group) return _r_();
            var t = s(this.el, {
                viewId: {
                    name: "view-id",
                    type: String,
                    required: !0
                }
            });
            e.valid ? this.$el.html("") : this.$el.html(this.template.render({
                fe_error: e.validationError,
                fe_new: !0,
                fe_view: t.viewId
            })), _r_()
        }
    }), _r_()
}), B.define("component/search/group/group-with-modal", function(e, t, i) {
    _i_("4ab:1fe65ed7");
    var n = e("component"),
        a = e("search/searchbox/model"),
        s = e("read-data-options"),
        r = e("jquery");
    i.exports = n.extend({
        init: function() {
            _i_("4ab:7373343b"), this.options = s(this.$el, {
                modelId: {
                    name: "sb-id",
                    type: String,
                    required: !0
                }
            }), this.$modal = this.$el.find("[data-group-modal]"), this.$toggle = this.$el.find("[data-group-toggle]"), this.model = a.getInstance(this.options.modelId), this.model.use("group"), this.$roomCount = this.$el.find("[data-room-count]"), this.$guestCount = this.$el.find("[data-guest-count]"), this.$adultsCount = this.$el.find("[data-adults-count]"), this.$childrenCount = this.$el.find("[data-children-count]"), this.addModelListeners(), this.addEventListeners(), this.$el.find("#xp__guests__input").remove(), _r_()
        },
        addModelListeners: function() {
            _i_("4ab:8d3cbca2"), this.model.on("change", this.modelChange.bind(this)), this.model.on("init", this.modelChange.bind(this)), _r_()
        },
        addEventListeners: function() {
            _i_("4ab:62cb11f8"), this.$toggle.on("click", function(e) {
                _i_("4ab:421bf86a"), this.$modal.toggleClass("hidden"), this.$toggle[this.$modal.hasClass("hidden") ? "removeAttr" : "attr"]("data-group-toggle-shown", 1), _r_()
            }.bind(this)), r(document).on("mouseup", function(e) {
                _i_("4ab:956f8b44"), r(e.target).closest(this.$el).length || (this.$modal.addClass("hidden"), this.$toggle.removeAttr("data-group-toggle-shown")), _r_()
            }.bind(this)), this.$el.find("input").on("focus", function(e) {
                if (_i_("4ab:d2817bf5"), !this.$modal.is(".hidden")) return _r_();
                this.$modal.removeClass("hidden"), this.$toggle.attr("data-group-toggle-shown", 1), _r_()
            }.bind(this)), _r_()
        },
        modelChange: function(e) {
            _i_("4ab:201be9ef"), "group" == e.group && this.render(), _r_()
        },
        render: function(e) {
            _i_("4ab:3b6f12c7");
            var t = +(e = this.model.group.get()).adults_count,
                i = e.children_ages.length,
                n = t + i,
                a = e.rooms_count;
            this.$roomCount.html(B.jstmpl.translations("iq_sbox_accommodation_num_rooms", a, {
                num_rooms: a
            })), this.$adultsCount.html(B.jstmpl.translations("sxp_index_sbox_horizontal_adults", t, {
                num_adults: t
            })), this.$guestCount.html(B.jstmpl.translations("iq_sbox_accommodation_num_guests", n, {
                num_guests: n
            })), this.$childrenCount.html(B.jstmpl.translations("sxp_lp_sbox_num_children", i, {
                num_children: i
            })), _r_()
        }
    }), _r_()
}), B.define("component/search/searchbox/searchbox-xp", function(e, t, i) {
    "use strict";
    _i_("4ab:8255b6c1");
    var n = e("component/search/searchbox/searchbox"),
        s = e("jquery");
    i.exports = n.extend({
        init: function() {
            _i_("4ab:4b6fb5ae"), n.prototype.init.apply(this, arguments), this.model.use("dates"), this.model.on("change-mode", this.onChangeMode.bind(this)), this.addDestinationLogic(), this.addCalendarsLogic(), _r_()
        },
        addDestinationLogic: function() {
            _i_("4ab:f8634e75");
            var e = this.$el.find("[data-destination-input]");
            e.find("#ss").on("focus", function() {
                _i_("4ab:e28c388e"), e.find("#destination__error").removeClass("-visible"), e.find(".sb-searchbox__error").hide(), _r_()
            }.bind(this)), _r_()
        },
        addCalendarsLogic: function() {
            _i_("4ab:22514955");
            var i = s("body"),
                n = this.$el.find(".xp__dates"),
                a = this.$el.find("[data-dates-errors]");
            B.env.b_hijri_calendar_available && i.addClass("c2-wrapper-s-has-hijri-calendar"), B.eventEmitter.on("CALENDAR:opened", function(e, t) {
                _i_("4ab:a82723ae"), n.attr("data-calendar-shown", 1), a.html(""), i.addClass("calendar-open"), _r_()
            }), B.eventEmitter.on("CALENDAR:closed", function(e, t) {
                _i_("4ab:dd794775"), n.removeAttr("data-calendar-shown"), i.removeClass("calendar-open"), _r_()
            }), _r_()
        },
        onChangeMode: function(e) {
            _i_("4ab:9e7a4011"), "accommodation" == e && (this.model.setFormAction(B.env.fe_sb_accommodation_search_url), this.model.destination && this.model.destination.configure({
                validate: !1
            }), this.model.emit("change", {})), _r_()
        }
    }), _r_()
}), B.define("component/search/dates/prompt", function(e, t, i) {
    "use strict";
    _i_("4ab:421396a0");
    var n = "sb-dates-prompt-dismissed",
        a = "mdot" === B.env.b_site_type,
        s = e("component"),
        r = e("click-out"),
        o = !a && "searchresults" === B.env.b_action && e("searchresults/events");
    i.exports = s.extend({
        init: function() {
            if (_i_("4ab:68a10fba"), this.boundHide = this.hide.bind(this), this.boundCleanUp = this.cleanUp.bind(this), this.$el.find(".sb-dates-prompt__close").on("click", this.dismiss.bind(this)), this.isDismissed()) return _r_();
            o && this.isLandingScrollStarted() ? o.once(o.UI_LANDING_SCROLL_COMPLETED, this.show.bind(this)) : this.show(), _r_()
        },
        show: function() {
            if (_i_("4ab:eaede618"), this.hiding) return _r_();
            this.$el.removeClass("g-hidden").addClass("fadein"), this.monitorId = r.addMonitor(this.el, this.boundHide), _r_()
        },
        hide: function() {
            _i_("4ab:22797725"), this.hiding = !0, this.$el.removeClass("fadein").addClass("fadeout"), window.setTimeout(this.boundCleanUp, 200), _r_()
        },
        dismiss: function() {
            _i_("4ab:0745977a"),
                function() {
                    _i_("4ab:45a788dc"), a ? B.storage({
                        key: n,
                        value: !0,
                        location: "sessionstorage"
                    }) : B.browserStorageHandler.addSessionValue(n, !0);
                    _r_()
                }(), this.hide(), _r_()
        },
        cleanUp: function() {
            _i_("4ab:3ecc2689"), this.monitorId && r.removeMonitor(this.monitorId), this.$el.addClass("g-hidden").removeClass("fadeout"), this.hiding = !1, _r_()
        },
        isDismissed: function() {
            _i_("4ab:98bc85c0");
            var e = a ? B.storage({
                key: n,
                location: "sessionstorage"
            }) : "true" === B.browserStorageHandler.getSessionValue(n);
            return _r_(e)
        },
        isLandingScrollStarted: function() {
            return _i_("4ab:f6bb9fa1"), _r_(B.sr && B.sr.landingScrollStarted || B.env.fe_landing_scroll_started)
        }
    }), _r_()
}), B.define("component/search/dates/date-field-select", function(e, t, i) {
    "use strict";
    _i_("4ab:25c5c2a0");
    var n = "OTfdASFVFYBMFSIJWe",
        a = e("et"),
        s = e("component"),
        r = e("read-data-options"),
        o = e("search/searchbox/model"),
        p = e("formatting/date"),
        _ = e("ga-tracker"),
        m = "checkin",
        l = "[data-display]",
        d = "[data-controls]",
        h = "[data-field]",
        c = "[data-icon-day]",
        u = ".js-date-field__part",
        f = ".js-date-field__select",
        b = ".js-date-field__value",
        g = '.js-date-field__part[data-type="month-year"]',
        v = '.js-date-field__part[data-type="date"]',
        M = ".js-date-field__year",
        y = ".js-date-field__month",
        x = "-empty",
        C = "-editing",
        k = "-editing-select",
        w = "sb-date-field__select_disabled",
        D = "sb-date-field__select_focused",
        F = "sb-date-field__value_empty";
    i.exports = s.extend({
        init: function() {
            _i_("4ab:7821d9ea"), this.options = r(this.el, {
                forceInitRender: {
                    name: "force-init-render",
                    type: Boolean,
                    defaultValue: !1
                },
                modelId: {
                    name: "sb-id",
                    type: String,
                    required: !0
                },
                modelMode: {
                    name: "mode",
                    type: String,
                    defaultValue: "single"
                },
                validators: {
                    name: "validators",
                    type: String,
                    defaultValue: ""
                }
            });
            var e = this.options.validators.split(",");
            this.model = o.getInstance(this.options.modelId), this.model.use("dates"), this.model.on("change", this.handleModelChange.bind(this)), this.model.dates.configure({
                noValidation: !0,
                allowMaxLos: !0,
                notEmpty: 0 <= e.indexOf("not-empty")
            }), this.$display = this.$el.find(l), this.$iconDay = this.$el.find(c), this.$controls = this.$el.find(d), this.$field = this.$el.find(h), this.$part = this.$el.find(u), this.$monthYear = this.$el.find(g), this.$monthYearSelect = this.$monthYear.find(f), this.$date = this.$el.find(v), this.$dateSelect = this.$date.find(f), this.$select = this.$el.find(f), this.$inputYear = this.$el.find(M), this.$inputMonth = this.$el.find(y), this.$part.on("focus", f, this.handleSelectFocus.bind(this)), this.$part.on("blur", f, this.handleSelectBlur.bind(this)), this.$monthYearSelect.on("change", this.handleMonthYearChange.bind(this)), this.$dateSelect.on("change", this.handleDateChange.bind(this)), this.$select.one("focus", this.trackSelectFocus.bind(this)), this.initModel.call(this), _r_()
        },
        initModel: function() {
            _i_("4ab:e3c0ae27");
            var e = this.$inputYear.val(),
                t = this.$inputMonth.val(),
                i = this.$dateSelect.attr("data-selected"),
                n = e && t && i;
            this.model.dates.initDate(this.options.modelMode, n && {
                year: +e,
                month: +t - 1,
                day: +i
            }), this.renderFields.call(this), _r_()
        },
        toggleMode: function(e) {
            _i_("4ab:386c4557"), this.$field.toggleClass(C, e), B.et.stage(n, 1), this.$field.toggleClass(k, e), _r_()
        },
        trackSelectFocus: function() {
            _i_("4ab:de93442c"), a.customGoal(n, 1), _.trackEvent(_.SearchBoxTracker, "Keyboard Focus", this.options.modelMode + " field"), _r_()
        },
        handleModelChange: function() {
            _i_("4ab:3aeed71d"), this.renderFields.call(this), _r_()
        },
        handleSelectFocus: function(e) {
            _i_("4ab:71e33903"), clearTimeout(this.inputBlurTimer), $(e.delegateTarget).addClass(D), this.toggleMode(!0), setTimeout(function() {
                _i_("4ab:a6a7913e"), this.model.dates.startEditing(), _r_()
            }.bind(this)), _r_()
        },
        handleSelectBlur: function(e) {
            _i_("4ab:ea58a611"), $(e.delegateTarget).removeClass(D), this.toggleMode(!1), this.inputBlurTimer = setTimeout(function() {
                _i_("4ab:0b178f6b"), this.applyChange(), _r_()
            }.bind(this)), _r_()
        },
        handleMonthYearChange: function(e) {
            _i_("4ab:49cdb6e1");
            var t = this.options.modelMode,
                i = e.target.value.split("-");
            this.model.dates.setEditingFragment(t, "month", +i[0]), this.model.dates.setEditingFragment(t, "year", +i[1]), this.model.dates.setEditingFragment(t, "day", null), _r_()
        },
        handleDateChange: function(e) {
            _i_("4ab:217a944c");
            var t = e.target,
                i = this.options.modelMode;
            this.renderDateValue.call(this), this.model.dates.setEditingFragment(i, "day", +t.value), this.applyChange.call(this), a.customGoal(n, 2), _r_()
        },
        applyChange: function() {
            if (_i_("4ab:a241b52f"), !this.model.dates.get()["editing_" + this.options.modelMode]) return _r_();
            this.model.dates.applyEditing(this.options.modelMode), _r_()
        },
        getOptionHtml: function(e, t, i) {
            _i_("4ab:2825281e");
            var n, a = [];
            if (i)
                for (var s in i)
                    if (i.hasOwnProperty(s)) {
                        var r = i[s];
                        if (!r) break;
                        n = s, "boolean" != typeof r && (n += "=" + r), a.push(n)
                    } return _r_('<option value="' + e + '" ' + a.join(" ") + ">" + t + "</option>")
        },
        renderMonthYearField: function() {
            _i_("4ab:8eecea0e");
            var e = this.options.modelMode,
                t = this.model.dates.get(),
                i = t[e],
                n = t["editing_" + e] || i,
                a = this.$monthYearSelect,
                s = e === m ? t.firstValidDay : t.firstValidCheckoutDay,
                r = t.lastValidDay,
                o = s.month,
                _ = r.month,
                l = s.year,
                d = r.year;
            for (a.html(this.getOptionHtml("", "", {
                    disabled: !0,
                    selected: !n
                })); o <= _ || l < d;) {
                var h = o + 1,
                    c = p.format({
                        year: l,
                        month: h,
                        day: 0
                    }, "month_with_year"),
                    u = [o, l].join("-");
                a.append(this.getOptionHtml(u, c, {
                    selected: n && o === n.month && l === n.year
                })), 12 === h ? (o = 0, l += 1) : o += 1
            }
            this.renderMonthYearValue.call(this), _r_()
        },
        renderDateField: function() {
            _i_("4ab:fae83e5d");
            var e = this.options.modelMode,
                t = this.model.dates.get(),
                i = t[e],
                n = t["editing_" + e] || i,
                a = n && n.month,
                s = n && n.year,
                r = "number" != typeof a,
                o = !r && new Date(s, a, 1),
                _ = e === m ? t.firstValidDay : t.firstValidCheckoutDay,
                l = t.lastValidDay,
                d = e === m ? l.day - 1 : l.day,
                h = this.$dateSelect;
            if (h.html(this.getOptionHtml("", "", {
                    disabled: !0,
                    selected: !n || !n.day
                })), h.prop("disabled", r), this.$date.toggleClass(w, r), o)
                for (; o.getMonth() === a;) {
                    var c = o.getDate(),
                        u = a !== _.month || s !== _.year || c >= _.day,
                        f = a !== l.month || s !== l.year || c <= d;
                    if (u && f) {
                        var b = p.format({
                            year: s,
                            month: a,
                            day: c
                        }, "{day_of_month}, {weekday}");
                        h.append(this.getOptionHtml(c, b, {
                            selected: n && n.day === c
                        }))
                    }
                    o.setDate(c + 1)
                }
            this.renderDateValue.call(this), _r_()
        },
        renderValue: function(e, t) {
            _i_("4ab:1b9b0a94");
            var i = t.find(b),
                n = e.options[e.selectedIndex],
                a = i.data("placeholder") || "",
                s = n && !n.disabled;
            i.text(s ? n.innerHTML : a), i.toggleClass(F, !s), _r_()
        },
        renderMonthYearValue: function() {
            _i_("4ab:f4ece69f"), this.renderValue(this.$monthYearSelect[0], this.$monthYear), _r_()
        },
        renderDateValue: function() {
            _i_("4ab:b15ca074"), this.renderValue(this.$dateSelect[0], this.$date), _r_()
        },
        renderFields: function() {
            _i_("4ab:23a3b6a3");
            var e = this.options.modelMode,
                t = this.model.dates.get(),
                i = t[e],
                n = t["editing_" + e],
                a = n || i,
                s = n && !n.complete;
            if (this.renderMonthYearField.call(this), this.renderDateField.call(this), a && "number" == typeof a.month && this.$inputMonth.val(a.month + 1), a && "number" == typeof a.year && this.$inputYear.val(a.year), a && "number" == typeof a.day && this.$dateSelect.val(a.day), !s && i) {
                var r = this.$display.data("date-format") || "date_with_weekday";
                this.$field.removeClass(x), this.$display.html(p.format(i, r)), this.$iconDay.html(p.format(i, "{day_of_month}"))
            }
            s || i || (this.$field.addClass(x), this.$display.html(this.$display.attr("data-placeholder")), this.$iconDay.html(this.$iconDay.attr("data-placeholder"))), _r_()
        }
    }), _r_()
}), B.define("component/search/dates/single-calendar", function(e, t, i) {
    "use strict";
    _i_("4ab:bce5db40");
    var n = e("component"),
        a = e("formatting/date"),
        s = e("search/searchbox/model"),
        r = e("search/modules/search-date").SearchDate,
        o = e("jquery");

    function _(e) {
        return _i_("4ab:a4f6ff92"), _r_(("0" + e).slice(-2))
    }
    i.exports = n.extend({
        init: function() {
            _i_("4ab:70aef0c7"), this.$calendar = this.$el.find(".bui-calendar"), this.$form = this.$el.parents("form"), this.calendarMounted = !1, this.calendarOpen = !1, this.checkinPlaceholder = this.$form.find('[data-mode="checkin"] [data-display]').data("placeholder"), this.$checkoutPlaceholder = this.$form.find('[data-mode="checkout"] [data-display]'), this.checkoutPlaceholder = this.$checkoutPlaceholder.data("placeholder"), this.dateFormat = this.$form.find(".sb-date-field__display").data("date-format") || "date_with_weekday", this.model = s.getInstance(this.$el.data("sb-id")), this.model.use("dates"), this.renderLoS = !!this.$el.data("render-los"), this.autoOpenOnLoad = !!this.$el.data("auto-open-on-load"), this.initCalendar(), this.bindEvents(), this.autoOpenOnLoad && (this.mountCalendar(), this.showCalendar()), _r_()
        },
        bindEvents: function() {
            _i_("4ab:200d77fa"), this.$form.find(".xp__date-time").on("click", function(e) {
                if (_i_("4ab:a895d620"), o(e.target).is("select")) return _r_();
                this.mountCalendar(), this.calendarOpen ? this.hideCalendar() : this.showCalendar(), _r_()
            }.bind(this)), o("body").on("click", function(e) {
                _i_("4ab:7ea86058");
                var t = o(e.target),
                    i = t.parents(".xp__dates");
                t.hasClass("xp__dates") || i.length || this.hideCalendar(), _r_()
            }.bind(this)), this.$form.find(".xp__date-time").one("mouseenter touchstart", this.mountCalendar.bind(this)), this.model.on("change", this.onModelChange.bind(this)), this.onModelChange({
                checkin: !0,
                checkout: !0
            }), _r_()
        },
        getMinMaxDates: function() {
            _i_("4ab:785bc094");
            var e = new Date,
                t = new Date;
            return B.env.b_search_max_months ? (t.setMonth(t.getMonth() + B.env.b_search_max_months), t.setDate(0)) : t = new Date(t.getFullYear() + 1, t.getMonth() + 1, 0), _r_({
                minDate: e,
                minDateISO: e.getFullYear() + "-" + _(e.getMonth() + 1) + "-" + _(e.getDate()),
                maxDate: t,
                maxDateISO: t.getFullYear() + "-" + _(t.getMonth() + 1) + "-" + _(t.getDate())
            })
        },
        initCalendar: function() {
            _i_("4ab:64f4853b");
            var e = {
                monthsToShow: 2,
                renderOnHover: 1,
                allowSameDateSelection: 0,
                dayNames: {
                    monday: "Mon",
                    tuesday: "Tue",
                    wednesday: "Wed",
                    thursday: "Thu",
                    friday: "Fri",
                    saturday: "Sat",
                    sunday: "Sun"
                },
                monthNames: {
                    january: "January",
                    february: "February",
                    march: "March",
                    april: "April",
                    may: "May",
                    june: "June",
                    july: "July",
                    august: "August",
                    september: "September",
                    october: "October",
                    november: "November",
                    december: "December"
                },
                renderSelected: function(e) {
                    if (_i_("4ab:2ab2776f"), !this.renderLoS) return _r_("");
                    var t = e.startDate,
                        i = e.endDate;
                    if (t && i && t < i) {
                        var n = this.getFormattedDate(t),
                            a = this.getFormattedDate(i),
                            s = B.jstmpl.translations("ss_sxp_index_sbox_calendar_num_night_stay", null, {
                                num_nights: Math.floor((i - t) / 864e5)
                            });
                        if (B.env.rtl) return _r_("(" + s + ") " + n + " - " + a);
                        return _r_(n + " - " + a + " " + s)
                    }
                    if (t) {
                        n = this.getFormattedDate(t);
                        return _r_(n + " - " + this.checkoutPlaceholder)
                    }
                    return _r_(this.checkinPlaceholder + " - " + this.checkoutPlaceholder)
                }.bind(this),
                onDateChange: function(e) {
                    _i_("4ab:5bf81f40"), this.settingDatesFromUserInteraction = !0;
                    var t = e.startDate,
                        i = e.endDate;
                    t && (t = r.create({
                        year: t.getFullYear(),
                        month: t.getMonth(),
                        day: t.getDate()
                    }), this.model.dates.setDate("checkin", t), i || this.$checkoutPlaceholder.text(this.checkoutPlaceholder)), i && (i = r.create({
                        year: i.getFullYear(),
                        month: i.getMonth(),
                        day: i.getDate()
                    }), this.model.dates.setDate("checkout", i)), t && i && this.hideCalendar(), e.startDate === e.clickedDate && B.Search.tracker.trackEvent(B.Search.TrackingEvents.CHECKIN_DATEPICKER), e.endDate === e.clickedDate && B.Search.tracker.trackEvent(B.Search.TrackingEvents.CHECKOUT_DATEPICKER), this.settingDatesFromUserInteraction = !1, _r_()
                }.bind(this)
            };
            if (B.env.b_simple_weekdays && 7 === B.env.b_simple_weekdays.length) {
                var t = 0;
                for (var i in e.dayNames) e.dayNames[i] = B.env.b_simple_weekdays[t++]
            }
            if (B.env.b_short_months && 12 === B.env.b_short_months.length) {
                t = 0;
                for (var i in e.monthNames) e.monthNames[i] = B.env.b_short_months[t++]
            }
            B.env.sunday_first && o.extend(e, {
                firstWeekDay: 7
            }), this.minMaxDates = this.getMinMaxDates(), e.minDate = this.minMaxDates.minDateISO, e.maxDate = this.minMaxDates.maxDateISO, this.calendarInstance = window.BUI.createInstance("Calendar", this.$calendar[0], e), _r_()
        },
        mountCalendar: function() {
            _i_("4ab:31e69dac"), this.calendarMounted || (this.calendarInstance.mount(), this.calendarMounted = !0), _r_()
        },
        onModelChange: function(e) {
            if (_i_("4ab:276e9c99"), this.settingDatesFromUserInteraction) return _r_();
            if (e.checkin || e.checkout) {
                var t = this.model.dates.get().checkin,
                    i = this.model.dates.get().checkout,
                    n = {
                        startDate: null,
                        endDate: null
                    };
                t && (n.startDate = new Date(t.year, t.month, t.day)), i && (n.endDate = new Date(i.year, i.month, i.day)), n.startDate && (n.baseMonthDate = n.startDate), n.chooseMode = n.startDate && !n.endDate ? "end" : "start", this.calendarInstance.setState(n), this.calendarInstance._updateDateClassNames && (this.calendarInstance._updateDateClassNames(), this.calendarInstance._updateDisplayRender())
            }
            _r_()
        },
        showCalendar: function() {
            _i_("4ab:cd37de9f"), this.$form.find("[data-dates-errors]").html(""), this.$calendar.show(), this.calendarOpen = !0, _r_()
        },
        hideCalendar: function() {
            _i_("4ab:ed0eb7c1"), this.$calendar.hide(), this.calendarOpen = !1, _r_()
        },
        getFormattedDate: function(e) {
            return _i_("4ab:f32f34ee"), _r_(a.format({
                day: e.getDate(),
                month: e.getMonth(),
                year: e.getFullYear()
            }, this.dateFormat))
        }
    }), _r_()
}), B.when({
    events: "ready",
    action: "index",
    condition: B.env.b_favourite_properties
}).run(function() {
    _i_("4ab:30fab7df");
    var i = $("#ss"),
        t = $(".favourite-properties"),
        n = $(".favourite-properties").children(),
        e = i.val(),
        a = B.require("search/searchbox/model").getInstance("main"),
        s = 0;

    function r() {
        _i_("4ab:e0337659"), setTimeout(function() {
            _i_("4ab:49078f81"), (t.is(":focus") || i.is(":focus")) && d() || !t.hasClass("-visible") || (t.removeClass("-visible"), o()), _r_()
        }, 0), _r_()
    }

    function o() {
        _i_("4ab:1ea3516c"), $(n[s]).removeClass("favourite-hover"), s = 0, _r_()
    }

    function _(e) {
        var t;
        _i_("4ab:43f22acf"), t = e, _i_("4ab:09a133b7"), i.val(t), i.focus(), a.destination.set({
                ss: t
            }), $(".xp__input-group").find('input[name="dest_id"]').remove(), $(".xp__input-group").find('input[name="dest_type"]').remove(), $(".xp__input-group").find('input[name="dest_type"]').remove(), _r_(), r(),
            function() {
                _i_("4ab:b355c3e6");
                var e = $(".sb-date-field__field");
                if (e.hasClass("-empty")) {
                    var t = e.children();
                    t[0] && "button" === t[0].type && setTimeout(function() {
                        _i_("4ab:aba4425b"), $(t[0]).trigger("click"), _r_()
                    }, 0)
                }
                _r_()
            }(), _r_()
    }

    function l(e) {
        if (_i_("4ab:9d6fa4f8"), e.preventDefault(), 40 === e.keyCode) ! function() {
            if (_i_("4ab:db995f49"), s === n.length - 1) return o(), i.focus(), _r_();
            0 !== s && $(n[s]).removeClass("favourite-hover"), s++, $(n[s]).addClass("favourite-hover"), _r_()
        }();
        else if (38 === e.keyCode) ! function() {
            if (_i_("4ab:f343b361"), 0 === s ? s = n.length - 1 : ($(n[s]).removeClass("favourite-hover"), s--), 0 === s) return i.focus(), _r_();
            $(n[s]).addClass("favourite-hover"), _r_()
        }();
        else if ("Enter" === e.key || 13 === e.keyCode) _($(n[s]).text());
        else {
            var t = String.fromCharCode(e.keyCode);
            /[a-zA-Z0-9-_ ]/.test(t) && (i.val(e.key), i.focus(), r())
        }
        _r_()
    }

    function d() {
        return _i_("4ab:fe913a8c"), _r_(i.val() == e || "" == i.val())
    }
    i.on("change keyup paste blur", r), i.focusin(function() {
        _i_("4ab:e3c657a3"), d() && !t.hasClass("-visible") && t.addClass("-visible");
        _r_()
    }), i.keydown(function(e) {
        _i_("4ab:a278d5d0"), !d() || 40 !== e.keyCode && 38 !== e.keyCode || (t.focus(), l(e));
        _r_()
    }), t.blur(r), t.keydown(l), t.hover(o), t.click(function(e) {
        _i_("4ab:47e052cc");
        var t = e.target;
        if (t.classList.contains("favourite-heading") || t.classList.contains("search-suggestion__title")) return _r_();
        "LI" !== t.tagName && (t = t.parentElement);
        "LI" === t.tagName && _($(t).text());
        _r_()
    }), _r_()
});