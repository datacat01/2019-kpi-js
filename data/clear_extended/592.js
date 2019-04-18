if (function(jindoName) {
        function _toArray(t) {
            return _slice.apply(t)
        }

        function _createEle(t, e, n, i) {
            var o = "R" + (new Date).getTime() + parseInt(1e5 * Math.random(), 10),
                r = n.createElement("div");
            switch (t) {
                case "select":
                case "table":
                case "dl":
                case "ul":
                case "fieldset":
                    r.innerHTML = "<" + t + ' class="' + o + '">' + e + "</" + t + ">";
                    break;
                case "thead":
                case "tbody":
                case "col":
                    r.innerHTML = "<table><" + t + ' class="' + o + '">' + e + "</" + t + "></table>";
                    break;
                case "tr":
                    r.innerHTML = '<table><tbody><tr class="' + o + '">' + e + "</tr></tbody></table>";
                    break;
                default:
                    r.innerHTML = '<div class="' + o + '">' + e + "</div>"
            }
            var s;
            for (s = r.firstChild; s && s.className != o; s = s.firstChild);
            return i ? s : s.childNodes
        }

        function _kindOf(t, e) {
            return t == e || !!t._$superClass && _kindOf(t._$superClass.prototype, e)
        }

        function _event_getScrollbarSize() {
            var t = {
                    x: 0,
                    y: 0
                },
                e = jindo.$(['<div style="', ["overflow:scroll", "width:100px", "height:100px", "position:absolute", "left:-1000px", "border:0", "margin:0", "padding:0"].join(" !important;"), ' !important;">'].join(""));
            return document.body.insertBefore(e, document.body.firstChild), t = {
                x: e.offsetWidth - e.scrollWidth,
                y: e.offsetHeight - e.scrollHeight
            }, document.body.removeChild(e), e = null, _event_getScrollbarSize = function() {
                return t
            }, t
        }

        function _event_isScroll(t, e) {
            if (t.componentFromPoint) return /(scrollbar|outside)/.test(t.componentFromPoint(e.clientX, e.clientY));
            if (_JINDO_IS_FF) try {
                var n = e.originalTarget.localName;
                return "thumb" === n || "slider" === n || "scrollcorner" === n || "scrollbarbutton" === n
            } catch (i) {
                return !0
            }
            var o = jindo.$Element(t).css("display");
            if ("inline" === o) return !1;
            var r = {
                x: e.offsetX || e.layerX || 0,
                y: e.offsetY || e.layerY || 0
            };
            _JINDO_IS_WK && (r.x -= t.clientLeft, r.y -= t.clientTop);
            var s = _event_getScrollbarSize(),
                a = {
                    x: [t.clientWidth, t.clientWidth + s.x],
                    y: [t.clientHeight, t.clientHeight + s.y]
                };
            return a.x[0] <= r.x && r.x <= a.x[1] || a.y[0] <= r.y && r.y <= a.y[1]
        }

        function _makeRandom() {
            return "e" + (new Date).getTime() + parseInt(1e8 * Math.random(), 10)
        }

        function _releaseEventHandlerForAllChildren(t) {
            var e, n = t._element.all || t._element.getElementsByTagName("*"),
                i = n.length,
                o = null;
            for (e = 0; e < i; e++) o = n[e], 1 == o.nodeType && o.__jindo__id && jindo.$Element.eventManager.cleanUpUsingKey(o.__jindo__id, !0);
            n = o = null
        }
        var jindo = {};
        if (window[jindoName]) {
            var __old_jindo = window[jindoName];
            for (var i in __old_jindo) jindo[i] = __old_jindo[i]
        }
        window[jindoName] = jindo;
        var _j_ag = navigator.userAgent,
            _JINDO_IS_IE = _j_ag.indexOf("MSIE") > -1,
            _JINDO_IS_FF = _j_ag.indexOf("Firefox") > -1,
            _JINDO_IS_OP = _j_ag.indexOf("Opera") > -1,
            _JINDO_IS_SP = _j_ag.indexOf("Safari") > -1,
            _JINDO_IS_SF = _j_ag.indexOf("Apple") > -1,
            _JINDO_IS_CH = _j_ag.indexOf("Chrome") > -1,
            _JINDO_IS_WK = _j_ag.indexOf("WebKit") > -1,
            _JINDO_IS_MO = /(iPad|Mobile|Android|Nokia|webOS|BlackBerry|Opera Mini)/.test(_j_ag),
            tNumeric = "Numeric",
            tElement = "Element+",
            tDocument = "Document+",
            tFunction = "Function+",
            tArray = "Array+",
            tString = "String+",
            tBoolean = "Boolean",
            tDate = "Date+",
            tRegExp = "RegExp",
            tNode = "Node",
            tHash = "Hash+",
            tNull = "Null",
            tUndefined = "Undefined",
            tWindow = "Window+",
            t$Class = "$Class",
            tArrayStyle = "ArrayStyle",
            tForm = "Form+",
            tVariant = "Variant";
        jindo.$Jindo = function() {
            var t = arguments.callee,
                e = t._cached;
            return e ? e : this instanceof t ? (e || (t._cached = this), void(this.version = "2.4.2")) : new t
        }, jindo.$Jindo.VERSION = "2.4.2", jindo.$Jindo.compatible = function() {
            return !1
        }, jindo.$Jindo.mixin = function(t, e) {
            g_checkVarType(arguments, {
                obj: ["oDestination:" + tHash, "oSource:" + tHash]
            }, "<static> $Jindo#mixin");
            var n = {};
            for (var i in t) n[i] = t[i];
            for (i in e) e.hasOwnProperty(i) && !jindo.$Jindo.isHash(e[i]) && (n[i] = e[i]);
            return n
        };
        var _objToString = Object.prototype.toString,
            _slice = Array.prototype.slice;
        jindo.$Error = function(t, e) {
            this.message = "\tmethod : " + e + "\n\tmessage : " + t, this.type = "Jindo Custom Error", this.toString = function() {
                return this.message + "\n\t" + this.type
            }
        }, jindo.$Except = {
            CANNOT_USE_OPTION: "해당 옵션은 사용할 수 없습니다.",
            CANNOT_USE_HEADER: "type이 jsonp일때 header메서드는 사용할 수 없습니다.",
            PARSE_ERROR: "파싱중 에러가 발생했습니다.",
            NOT_FOUND_ARGUMENT: "파라메터가 없습니다.",
            NOT_STANDARD_QUERY: "css셀렉터가 정상적이지 않습니다.",
            INVALID_DATE: "날짜 포멧이 아닙니다.",
            REQUIRE_AJAX: "가 없습니다.",
            NOT_FOUND_ELEMENT: "엘리먼트가 없습니다.",
            HAS_FUNCTION_FOR_GROUP: "그룹으로 지우지 않는 경우 detach할 함수가 있어야 합니다.",
            NONE_ELEMENT: "에 해당하는 엘리먼트가 없습니다.",
            NOT_SUPPORT_SELECTOR: "는 지원하지 않는 selector입니다.",
            NOT_SUPPORT_METHOD: "desktop에서 지원하지 않는 메서드 입니다.",
            JSON_MUST_HAVE_ARRAY_HASH: "get메서드는 json타입이 hash나 array타입만 가능합니다.",
            MUST_APPEND_DOM: "document에 붙지 않은 엘리먼트를 기준 엘리먼트로 사용할 수 없습니다.",
            NOT_USE_CSS: "는 css를 사용 할수 없습니다.",
            NOT_WORK_DOMREADY: "domready이벤트는 iframe안에서 사용할 수 없습니다.",
            CANNOT_SET_OBJ_PROPERTY: "속성은 오브젝트입니다.\n클래스 속성이 오브젝트이면 모든 인스턴스가 공유하기 때문에 위험합니다.",
            NOT_FOUND_HANDLEBARS: ""
        };
        try {
            _slice.apply(document.documentElement.childNodes)
        } catch (e) {
            _toArray = function(t) {
                for (var e = [], n = t.length, i = 0; i < n; i++) e.push(t[i]);
                return e
            }
        }
        jindo.$Jindo.isNumeric = function(t) {
                return !isNaN(parseFloat(t)) && !jindo.$Jindo.isArray(t) && isFinite(t)
            },
            function() {
                var t = {
                    Element: 1,
                    Document: 9
                };
                for (var e in t) jindo.$Jindo["is" + e] = function(t, e) {
                    return function(n) {
                        return !!new RegExp(t).test(_objToString.call(n)) || "[object Object]" == _objToString.call(n) && null !== n && void 0 !== n && n.nodeType == e
                    }
                }(e, t[e]);
                for (var n = ["Function", "Array", "String", "Boolean", "Date", "RegExp"], e = 0, i = n.length; e < i; e++) jindo.$Jindo["is" + n[e]] = function(t) {
                    return function(e) {
                        return _objToString.call(e) == "[object " + t + "]"
                    }
                }(n[e])
            }(), jindo.$Jindo.isNode = function(t) {
                try {
                    return !(!t || !t.nodeType)
                } catch (e) {
                    return !1
                }
            }, jindo.$Jindo.isHash = function(t) {
                return "[object Object]" == _objToString.call(t) && null !== t && void 0 !== t && !t.nodeType && !jindo.$Jindo.isWindow(t)
            }, jindo.$Jindo.isNull = function(t) {
                return null === t
            }, jindo.$Jindo.isUndefined = function(t) {
                return void 0 === t
            }, jindo.$Jindo.isWindow = function(t) {
                return t == window || t == window.top
            }, jindo.$Jindo.Break = function() {
                if (!(this instanceof arguments.callee)) throw new arguments.callee
            }, jindo.$Jindo.Continue = function() {
                if (!(this instanceof arguments.callee)) throw new arguments.callee
            }, jindo.$Jindo._F = function(t) {
                return t
            }, jindo.$Jindo._warn = function(t) {
                window.console && (console.warn && void 0, !0)
            }, jindo.$Jindo._maxWarn = function(t, e, n) {
                t > e && jindo.$Jindo._warn("추가적인 파라메터가 있습니다. : " + n)
            }, jindo.$Jindo.checkVarType = function(t, e, n) {
                var n = n || t.callee.name || "anonymous",
                    i = jindo.$Jindo,
                    o = i.compatible(),
                    r = t.callee["_checkVarType_" + o];
                if (r) return r(t, e, n);
                var s = [];
                s.push("var nArgsLen = aArgs.length;"), s.push("var $Jindo = " + jindoName + ".$Jindo;"), o && (s.push("var nMatchScore;"), s.push("var nMaxMatchScore = -1;"), s.push("var oFinalRet = null;"));
                var a = [],
                    c = 0;
                for (var h in e) e.hasOwnProperty(h) && (c = Math.max(e[h].length, c));
                for (var h in e)
                    if (e.hasOwnProperty(h)) {
                        var u = e[h],
                            l = u.length,
                            d = [],
                            f = [],
                            p = [];
                        o || (l < c ? f.push("nArgsLen === " + l) : f.push("nArgsLen >= " + l)), p.push("var oRet = new $Jindo._varTypeRetObj();");
                        for (var _ = l, m = 0; m < l; ++m) {
                            /^([^:]+):([^\+]*)(\+?)$/.test(u[m]);
                            var g = RegExp.$1,
                                v = RegExp.$2,
                                y = !!RegExp.$3;
                            if ("Variant" === v) o && f.push(m + " in aArgs"), p.push('oRet["' + g + '"] = aArgs[' + m + "];"), _--;
                            else if (i._varTypeList[v]) {
                                var E = "tmp" + v + "_" + m;
                                d.push("var " + E + " = $Jindo._varTypeList." + v + "(aArgs[" + m + "], " + y + ");"), f.push(E + " !== " + jindoName + ".$Jindo.VARTYPE_NOT_MATCHED"), p.push('oRet["' + g + '"] = ' + E + ";")
                            } else if (/^\$/.test(v) && jindo[v]) {
                                var j, b = "";
                                y && (j = {
                                    $Fn: "Function",
                                    $S: "String",
                                    $A: "Array",
                                    $H: "Hash",
                                    $ElementList: "Array"
                                } [v] || v.replace(/^\$/, ""), jindo.$Jindo["is" + j] && (b = " || $Jindo.is" + j + "(vNativeArg_" + m + ")")), f.push("(aArgs[" + m + "] instanceof " + jindoName + "." + v + b + ")"), p.push('oRet["' + g + '"] = ' + jindoName + "." + v + "(aArgs[" + m + "]);")
                            } else {
                                if (!jindo.$Jindo["is" + v]) throw new Error("VarType(" + v + ") Not Found");
                                var $, b = "";
                                y && ($ = {
                                    Function: "$Fn",
                                    String: "$S",
                                    Array: "$A",
                                    Hash: "$H"
                                } [v] || "$" + v, jindo[$] && (b = " || aArgs[" + m + "] instanceof " + jindoName + "." + $)), f.push("($Jindo.is" + v + "(aArgs[" + m + "])" + b + ")"), p.push('oRet["' + g + '"] = vNativeArg_' + m + ";")
                            }
                        }
                        p.push('oRet.__type = "' + h + '";'), o ? (p.push("nMatchScore = " + (1e3 * l + 10 * _) + " + (nArgsLen === " + l + " ? 1 : 0);"), p.push("if (nMatchScore > nMaxMatchScore) {"), p.push("    nMaxMatchScore = nMatchScore;"), p.push("    oFinalRet = oRet;"), p.push("}")) : p.push("return oRet;"), a.push(d.join("\n")), f.length && a.push("if (" + f.join(" && ") + ") {"), a.push(p.join("\n")), f.length && a.push("}")
                    } s.push(" $Jindo._maxWarn(nArgsLen," + c + ',"' + n + '");');
                for (var m = 0; m < c; ++m) {
                    var T = "aArgs[" + m + "]";
                    s.push(["var vNativeArg_", m, " = ", T, " && ", T, ".$value ? ", T, ".$value() : ", T + ";"].join(""))
                }
                return o || a.push("$Jindo.checkVarType._throwException(aArgs, oRules, sFuncName);"), a.push("return oFinalRet;"), t.callee["_checkVarType_" + o] = r = new Function("aArgs,oRules,sFuncName", s.join("\n") + a.join("\n")), r(t, e, n)
            };
        var g_checkVarType = jindo.$Jindo.checkVarType;
        jindo.$Jindo._varTypeRetObj = function() {}, jindo.$Jindo._varTypeRetObj.prototype.toString = function() {
            return this.__type
        }, jindo.$Jindo.checkVarType._throwException = function(t, e, n) {
            for (var i = function(t) {
                    for (var e in jindo)
                        if (jindo.hasOwnProperty(e)) {
                            var n = jindo[e];
                            if ("function" != typeof n) continue;
                            if (t instanceof n) return e
                        } var i = jindo.$Jindo;
                    for (var e in i)
                        if (i.hasOwnProperty(e)) {
                            if (!/^is(.+)$/.test(e)) continue;
                            var o = RegExp.$1,
                                r = i[e];
                            if (r(t)) return o
                        } return "Unknown"
                }, o = function(t, e, n) {
                    var i = ["잘못된 파라미터입니다.", ""];
                    if (t && (i.push("호출한 형태 :"), i.push("\t" + t), i.push("")), e.length) {
                        i.push("사용 가능한 형태 :");
                        for (var o = 0, r = e.length; o < r; o++) i.push("\t" + e[o]);
                        i.push("")
                    }
                    return n && (i.push("매뉴얼 페이지 :"), i.push("\t" + n), i.push("")), i.unshift(), i.join("\n")
                }, r = [], s = 0, a = t.length; s < a; ++s) try {
                r.push(i(t[s]))
            } catch (c) {
                r.push("Unknown")
            }
            var h = n + "(" + r.join(", ") + ")",
                u = [];
            for (var l in e)
                if (e.hasOwnProperty(l)) {
                    var d = e[l];
                    u.push("" + n + "(" + d.join(", ").replace(/(^|,\s)[^:]+:/g, "$1") + ")")
                } var f;
            throw /(\$\w+)#(\w+)?/.test(n) && (f = "http://jindo.dev.naver.com/docs/jindo/2.4.2/desktop/ko/classes/" + encodeURIComponent(RegExp.$1) + ".html#method_" + RegExp.$2), new TypeError(o(h, u, f))
        };
        var _getElementById = function(t, e) {
            var n = t.documentElement,
                i = "jindo" + (new Date).getTime(),
                o = t.createElement("div");
            return o.style.display = "none", "undefined" != typeof MSApp ? MSApp.execUnsafeLocalFunction(function() {
                o.innerHTML = "<input type='hidden' name='" + i + "'/>"
            }) : o.innerHTML = "<input type='hidden' name='" + i + "'/>", n.insertBefore(o, n.firstChild), _getElementById = t.getElementById(i) ? function(t, e) {
                var n = t.getElementById(e);
                if (null == n) return n;
                if (n.attributes.id && n.attributes.id.value == e) return n;
                for (var i = t.all[e], o = 1; o < i.length; o++)
                    if (i[o].attributes.id && i[o].attributes.id.value == e) return i[o]
            } : function(t, e) {
                return t.getElementById(e)
            }, n.removeChild(o), _getElementById(t, e)
        };
        jindo.$Jindo.varType = function() {
                var t = this.checkVarType(arguments, {
                        s4str: ["sTypeName:" + tString, "fpFunc:" + tFunction],
                        s4obj: ["oTypeLists:" + tHash],
                        g: ["sTypeName:" + tString]
                    }),
                    e = jindo.$Jindo._denyTypeListComma;
                switch (t + "") {
                    case "s4str":
                        var n = "," + t.sTypeName.replace(/\+$/, "") + ",";
                        if (e.indexOf(n) > -1) throw new Error("Not allowed Variable Type");
                        return this._varTypeList[t.sTypeName] = t.fpFunc, this;
                    case "s4obj":
                        var i = t.oTypeLists;
                        for (var o in i) i.hasOwnProperty(o) && (fpFunc = i[o], arguments.callee.call(this, o, fpFunc));
                        return this;
                    case "g":
                        return this._varTypeList[t.sTypeName]
                }
            }, jindo.$Jindo.VARTYPE_NOT_MATCHED = {},
            function() {
                var t = jindo.$Jindo._varTypeList = {},
                    e = jindo.$Jindo,
                    n = e.VARTYPE_NOT_MATCHED;
                t.Numeric = function(t) {
                    return e.isNumeric(t) ? 1 * t : n
                }, t.Hash = function(t, i) {
                    return i && jindo.$H && t instanceof jindo.$H ? t.$value() : e.isHash(t) ? t : n
                }, t.$Class = function(t, i) {
                    return e.isFunction(t) && t.extend ? t : n
                };
                var i = [];
                for (var o in e) e.hasOwnProperty(o) && /^is(.+)$/.test(o) && i.push(RegExp.$1);
                e._denyTypeListComma = i.join(","), e.varType("ArrayStyle", function(t, i) {
                    return t && (/(Arguments|NodeList|HTMLCollection|global|Window)/.test(_objToString.call(t)) || /Object/.test(_objToString.call(t)) && e.isNumeric(t.length)) ? _toArray(t) : n
                }), e.varType("Form", function(t, e) {
                    return t ? (e && t.$value && (t = t.$value()), t.tagName && "FORM" == t.tagName.toUpperCase() ? t : n) : n
                })
            }(), jindo.$ = function(t) {
                if (!arguments.length) throw new jindo.$Error(jindo.$Except.NOT_FOUND_ARGUMENT, "$");
                var e = [],
                    n = arguments,
                    i = n.length,
                    o = n[i - 1],
                    r = document,
                    s = null,
                    a = /^<([a-z]+|h[1-5])>$/i,
                    c = /^<([a-z]+|h[1-5])(\s+[^>]+)?>/i;
                i > 1 && "string" != typeof o && o.body && (n = Array.prototype.slice.apply(n, [0, i - 1]), r = o);
                for (var h = 0; h < i; h++) {
                    if (s = n[h] && n[h].$value ? n[h].$value() : n[h], jindo.$Jindo.isString(s) || jindo.$Jindo.isNumeric(s))
                        if (s += "", s = s.replace(/^\s+|\s+$/g, ""), s = s.replace(/<!--(.|\n)*?-->/g, ""), s.indexOf("<") > -1) {
                            if (a.test(s)) s = r.createElement(RegExp.$1);
                            else if (c.test(s)) {
                                for (var u = {
                                        thead: "table",
                                        tbody: "table",
                                        tr: "tbody",
                                        td: "tr",
                                        dt: "dl",
                                        dd: "dl",
                                        li: "ul",
                                        legend: "fieldset",
                                        option: "select"
                                    }, l = RegExp.$1.toLowerCase(), d = _createEle(u[l], s, r), h = 0, f = d.length; h < f; h++) e.push(d[h]);
                                s = null
                            }
                        } else s = _getElementById(r, s);
                    s && s.nodeType && (e[e.length] = s)
                }
                return e.length > 1 ? e : e[0] || null
            }, jindo.$Class = function(oDef) {
                function typeClass() {
                    for (var t = this, a = [], superFunc = function(m, superClass, func) {
                            if ("constructor" != m && func.toString().indexOf("$super") > -1) {
                                var funcArg = func.toString().replace(/function\s*\(([^\)]*)[\w\W]*/g, "$1").split(","),
                                    funcStr = func.toString().replace(/function[^{]*{/, "").replace(/(\w|\.?)(this\.\$super|this)/g, function(t, e, n) {
                                        return e ? t : n + ".$super"
                                    });
                                funcStr = funcStr.substr(0, funcStr.length - 1), func = superClass[m] = eval("false||function(" + funcArg.join(",") + "){" + funcStr + "}")
                            }
                            return function() {
                                var t = this.$this[m],
                                    e = this.$this,
                                    n = (e[m] = func).apply(e, arguments);
                                return e[m] = t, n
                            }
                        }; void 0 !== t._$superClass;) {
                        t.$super = new Object, t.$super.$this = this;
                        for (var x in t._$superClass.prototype) t._$superClass.prototype.hasOwnProperty(x) && (void 0 === this[x] && "$init" != x && (this[x] = t._$superClass.prototype[x]), "constructor" != x && "_$superClass" != x && "function" == typeof t._$superClass.prototype[x] ? t.$super[x] = superFunc(x, t._$superClass, t._$superClass.prototype[x]) : t.$super[x] = t._$superClass.prototype[x]);
                        "function" == typeof t.$super.$init && (a[a.length] = t), t = t.$super
                    }
                    for (var i = a.length - 1; i > -1; i--) a[i].$super.$init.apply(a[i].$super, arguments);
                    if (this.$autoBind)
                        for (var i in this) /^\_/.test(i) && (this[i] = jindo.$Fn(this[i], this).bind());
                    "function" == typeof this.$init && this.$init.apply(this, arguments)
                }
                var oArgs = g_checkVarType(arguments, {
                    "4obj": ["oDef:" + tHash]
                }, "" + t$Class);
                if (void 0 !== oDef.$static) {
                    var i = 0,
                        x;
                    for (x in oDef) oDef.hasOwnProperty(x) && ("$static" == x || i++);
                    for (x in oDef.$static) oDef.$static.hasOwnProperty(x) && (typeClass[x] = oDef.$static[x]);
                    if (!i) return oDef.$static;
                    delete oDef.$static
                }
                return typeClass.prototype = oDef, typeClass.prototype.constructor = typeClass, typeClass.prototype.kindOf = function(t) {
                    return _kindOf(this.constructor.prototype, t.prototype)
                }, typeClass.extend = jindo.$Class.extend, typeClass
            }, jindo.$Class.extend = function(t) {
                g_checkVarType(arguments, {
                    "4obj": ["oDef:" + t$Class]
                }, "<static> $Class#extend");
                this.prototype._$superClass = t;
                var e = t.prototype;
                for (var n in e) jindo.$Jindo.isHash(e[n]) && jindo.$Jindo._warn(jindo.$Except.CANNOT_SET_OBJ_PROPERTY);
                for (var i in t)
                    if (t.hasOwnProperty(i)) {
                        if ("prototype" == i) continue;
                        this[i] = t[i]
                    } return this
            }, jindo.$$ = jindo.cssquery = function() {
                function GEBID(t, e, n) {
                    if (9 === t.nodeType || t.parentNode && t.parentNode.tagName) return _getElementById(n, e);
                    for (var i = t.getElementsByTagName("*"), o = 0, r = i.length; o < r; o++)
                        if (i[o].id === e) return i[o]
                }

                function getElementsByClass(t, e, n) {
                    var o = new Array;
                    null == e && (e = document), null == n && (n = "*");
                    var r = e.getElementsByTagName(n),
                        s = r.length,
                        a = new RegExp("(^|\\s)" + t + "(\\s|$)");
                    for (i = 0, j = 0; i < s; i++) a.test(r[i].className) && (o[j] = r[i], j++);
                    return o
                }

                function _isNonStandardQueryButNotException(t) {
                    return /\[\s*(?:checked|selected|disabled)/.test(t)
                }

                function _commaRevise(t, e) {
                    return t.replace(/\,/gi, e)
                }

                function _startCombinator(t) {
                    return /^[~>+]/.test(t)
                }

                function _addQueryId(t, e) {
                    var n, i;
                    return t.id ? n = "#" + t.id : (i = "C" + (new Date).getTime() + Math.floor(1e6 * Math.random()), t.setAttribute(e, i), n = "[" + e + "=" + i + "]"), n
                }
                var sVersion = "3.0",
                    debugOption = {
                        repeat: 1
                    },
                    UID = 1,
                    cost = 0,
                    validUID = {},
                    bSupportByClassName = !!document.getElementsByClassName,
                    safeHTML = !1,
                    getUID4HTML = function(t) {
                        var e = safeHTML ? t._cssquery_UID && t._cssquery_UID[0] : t._cssquery_UID;
                        return e && validUID[e] == t ? e : (e = UID++, t._cssquery_UID = safeHTML ? [e] : e, validUID[e] = t, e)
                    },
                    getUID4XML = function(t) {
                        var e = t.getAttribute("_cssquery_UID"),
                            n = safeHTML ? e && e[0] : e;
                        return n || (n = UID++, t.setAttribute("_cssquery_UID", safeHTML ? [n] : n)), n
                    },
                    getUID = getUID4HTML,
                    uniqid = function(t) {
                        return (t || "") + (new Date).getTime() + parseInt(1e8 * Math.random(), 10)
                    },
                    getChilds_dontShrink = function(t, e, n) {
                        return bSupportByClassName && n ? t.getElementsByClassName ? t.getElementsByClassName(n) : t.querySelectorAll ? t.querySelectorAll(n) : getElementsByClass(n, t, e) : "*" == e ? t.all || t.getElementsByTagName(e) : t.getElementsByTagName(e)
                    },
                    clearKeys = function() {
                        backupKeys._keys = {}
                    },
                    oDocument_dontShrink = document,
                    bXMLDocument = !1,
                    backupKeys = function(t) {
                        var e = backupKeys._keys;
                        t = t.replace(/'(\\'|[^'])*'/g, function(t) {
                            var n = uniqid("QUOT");
                            return e[n] = t, n
                        }), t = t.replace(/"(\\"|[^"])*"/g, function(t) {
                            var n = uniqid("QUOT");
                            return e[n] = t, n
                        }), t = t.replace(/\[(.*?)\]/g, function(t, n) {
                            if (0 == n.indexOf("ATTR")) return t;
                            var i = "[" + uniqid("ATTR") + "]";
                            return e[i] = t, i
                        });
                        var n;
                        do n = !1, t = t.replace(/\(((\\\)|[^)|^(])*)\)/g, function(t, i) {
                            if (0 == i.indexOf("BRCE")) return t;
                            var o = "_" + uniqid("BRCE");
                            return e[o] = t, n = !0, o
                        }); while (n);
                        return t
                    },
                    restoreKeys = function(t, e) {
                        var n, i = backupKeys._keys,
                            o = e ? /(\[ATTR[0-9]+\])/g : /(QUOT[0-9]+|\[ATTR[0-9]+\])/g;
                        do n = !1, t = t.replace(o, function(t) {
                            return i[t] ? (n = !0, i[t]) : t
                        }); while (n);
                        return t = t.replace(/_BRCE[0-9]+/g, function(t) {
                            return i[t] ? i[t] : t
                        })
                    },
                    restoreString = function(sKey) {
                        var oKeys = backupKeys._keys,
                            sOrg = oKeys[sKey];
                        return sOrg ? eval(sOrg) : sKey
                    },
                    wrapQuot = function(t) {
                        return '"' + t.replace(/"/g, '\\"') + '"'
                    },
                    getStyleKey = function(t) {
                        return /^@/.test(t) ? t.substr(1) : null
                    },
                    getCSS = function(t, e) {
                        return t.currentStyle ? ("float" == e && (e = "styleFloat"), t.currentStyle[e] || t.style[e]) : window.getComputedStyle ? oDocument_dontShrink.defaultView.getComputedStyle(t, null).getPropertyValue(e.replace(/([A-Z])/g, "-$1").toLowerCase()) || t.style[e] : ("float" == e && _JINDO_IS_IE && (e = "styleFloat"), t.style[e])
                    },
                    oCamels = {
                        accesskey: "accessKey",
                        cellspacing: "cellSpacing",
                        cellpadding: "cellPadding",
                        "class": "className",
                        colspan: "colSpan",
                        "for": "htmlFor",
                        maxlength: "maxLength",
                        readonly: "readOnly",
                        rowspan: "rowSpan",
                        tabindex: "tabIndex",
                        valign: "vAlign"
                    },
                    getDefineCode = function(t) {
                        var e, n;
                        if (bXMLDocument) e = 'oEl.getAttribute("' + t + '",2)';
                        else if (n = getStyleKey(t)) t = "$$" + n, e = 'getCSS(oEl, "' + n + '")';
                        else switch (t) {
                            case "checked":
                                e = 'oEl.checked + ""';
                                break;
                            case "disabled":
                                e = 'oEl.disabled + ""';
                                break;
                            case "enabled":
                                e = '!oEl.disabled + ""';
                                break;
                            case "readonly":
                                e = 'oEl.readOnly + ""';
                                break;
                            case "selected":
                                e = 'oEl.selected + ""';
                                break;
                            default:
                                e = oCamels[t] ? "oEl." + oCamels[t] : 'oEl.getAttribute("' + t + '",2)'
                        }
                        return "_" + t.replace(/\-/g, "_") + " = " + e
                    },
                    getReturnCode = function(t) {
                        var e = getStyleKey(t.key),
                            n = "_" + (e ? "$$" + e : t.key);
                        n = n.replace(/\-/g, "_");
                        var i = t.val ? wrapQuot(t.val) : "";
                        switch (t.op) {
                            case "~=":
                                return "(" + n + ' && (" " + ' + n + ' + " ").indexOf(" " + ' + i + ' + " ") > -1)';
                            case "^=":
                                return "(" + n + " && " + n + ".indexOf(" + i + ") == 0)";
                            case "$=":
                                return "(" + n + " && " + n + ".substr(" + n + ".length - " + t.val.length + ") == " + i + ")";
                            case "*=":
                                return "(" + n + " && " + n + ".indexOf(" + i + ") > -1)";
                            case "!=":
                                return "(" + n + " != " + i + ")";
                            case "=":
                                return "(" + n + " == " + i + ")"
                        }
                        return "(" + n + ")"
                    },
                    getNodeIndex = function(t) {
                        var e = getUID(t),
                            n = oNodeIndexes[e] || 0;
                        if (0 == n) {
                            for (var i = (t.parentNode || t._IE5_parentNode).firstChild; i; i = i.nextSibling) 1 == i.nodeType && (n++, setNodeIndex(i, n));
                            n = oNodeIndexes[e]
                        }
                        return n
                    },
                    oNodeIndexes = {},
                    setNodeIndex = function(t, e) {
                        var n = getUID(t);
                        oNodeIndexes[n] = e
                    },
                    unsetNodeIndexes = function() {
                        setTimeout(function() {
                            oNodeIndexes = {}
                        }, 0)
                    },
                    oPseudoes_dontShrink = {
                        contains: function(t, e) {
                            return (t.innerText || t.textContent || "").indexOf(e) > -1
                        },
                        "last-child": function(t, e) {
                            for (t = t.nextSibling; t; t = t.nextSibling)
                                if (1 == t.nodeType) return !1;
                            return !0
                        },
                        "first-child": function(t, e) {
                            for (t = t.previousSibling; t; t = t.previousSibling)
                                if (1 == t.nodeType) return !1;
                            return !0
                        },
                        "only-child": function(t, e) {
                            for (var n = 0, i = (t.parentNode || t._IE5_parentNode).firstChild; i; i = i.nextSibling)
                                if (1 == i.nodeType && n++, n > 1) return !1;
                            return !!n
                        },
                        empty: function(t, e) {
                            return !t.firstChild
                        },
                        "nth-child": function(t, e, n) {
                            var i = getNodeIndex(t);
                            return i % e == n
                        },
                        "nth-last-child": function(t, e, n) {
                            for (var i = (t.parentNode || t._IE5_parentNode).lastChild; i && 1 != i.nodeType; i = i.previousSibling);
                            var o = getNodeIndex(i),
                                r = getNodeIndex(t),
                                s = o - r + 1;
                            return s % e == n
                        },
                        checked: function(t) {
                            return !!t.checked
                        },
                        selected: function(t) {
                            return !!t.selected
                        },
                        enabled: function(t) {
                            return !t.disabled
                        },
                        disabled: function(t) {
                            return !!t.disabled
                        }
                    },
                    getExpression = function(t) {
                        var e, n, i = {
                                defines: "",
                                returns: "true"
                            },
                            t = restoreKeys(t, !0),
                            o = [],
                            r = [],
                            s = [],
                            t = t.replace(/:([\w-]+)(\(([^)]*)\))?/g, function(t, e, n, o) {
                                switch (e) {
                                    case "not":
                                        var r = getExpression(o),
                                            a = r.defines,
                                            c = r.returnsID + r.returnsTAG + r.returns;
                                        s.push("!(function() { " + a + " return " + c + " })()");
                                        break;
                                    case "nth-child":
                                    case "nth-last-child":
                                        o = restoreString(o), "even" == o ? o = "2n" : "odd" == o && (o = "2n+1");
                                        var h, u, l = o.match(/([0-9]*)n([+-][0-9]+)*/);
                                        l ? (h = l[1] || 1, u = l[2] || 0) : (h = 1 / 0, u = parseInt(o, 10)), s.push("oPseudoes_dontShrink[" + wrapQuot(e) + "](oEl, " + h + ", " + u + ")");
                                        break;
                                    case "first-of-type":
                                    case "last-of-type":
                                        e = "first-of-type" == e ? "nth-of-type" : "nth-last-of-type", o = 1;
                                    case "nth-of-type":
                                    case "nth-last-of-type":
                                        o = restoreString(o), "even" == o ? o = "2n" : "odd" == o && (o = "2n+1");
                                        var h, u;
                                        /([0-9]*)n([+-][0-9]+)*/.test(o) ? (h = parseInt(RegExp.$1, 10) || 1, u = parseInt(RegExp.$2, 20) || 0) : (h = 1 / 0, u = parseInt(o, 10)), i.nth = [h, u, e];
                                        break;
                                    default:
                                        o = o ? restoreString(o) : "", s.push("oPseudoes_dontShrink[" + wrapQuot(e) + "](oEl, " + wrapQuot(o) + ")")
                                }
                                return ""
                            }),
                            t = t.replace(/\[(@?[\w-]+)(([!^~$*]?=)([^\]]*))?\]/g, function(t, e, n, i, r) {
                                return e = restoreString(e), r = restoreString(r), "checked" != e && "disabled" != e && "enabled" != e && "readonly" != e && "selected" != e || r || (i = "=", r = "true"), o.push({
                                    key: e,
                                    op: i,
                                    val: r
                                }), ""
                            }),
                            a = null,
                            t = t.replace(/\.([\w-]+)/g, function(t, e) {
                                return o.push({
                                    key: "class",
                                    op: "~=",
                                    val: e
                                }), a || (a = e), ""
                            }),
                            t = t.replace(/#([\w-]+)/g, function(t, n) {
                                return bXMLDocument ? o.push({
                                    key: "id",
                                    op: "=",
                                    val: n
                                }) : e = n, ""
                            });
                        n = "*" == t ? "" : t;
                        for (var c, h = {}, u = 0; c = o[u]; u++) {
                            var l = c.key;
                            h[l] || r.push(getDefineCode(l)), s.unshift(getReturnCode(c)), h[l] = !0
                        }
                        return r.length && (i.defines = "var " + r.join(",") + ";"), s.length && (i.returns = s.join("&&")), i.quotID = e ? wrapQuot(e) : "", i.quotTAG = n ? wrapQuot(bXMLDocument ? n : n.toUpperCase()) : "", bSupportByClassName && (i.quotCLASS = a ? wrapQuot(a) : ""), i.returnsID = e ? "oEl.id == " + i.quotID + " && " : "", i.returnsTAG = n && "*" != n ? "oEl.tagName == " + i.quotTAG + " && " : "", i
                    },
                    splitToParts = function(t) {
                        var e = [],
                            n = " ",
                            i = t.replace(/(.*?)\s*(!?[+>~ ]|!)\s*/g, function(t, i, o) {
                                return i && e.push({
                                    rel: n,
                                    body: i
                                }), n = o.replace(/\s+$/g, "") || " ", ""
                            });
                        return i && e.push({
                            rel: n,
                            body: i
                        }), e
                    },
                    isNth_dontShrink = function(t, e, n, i, o) {
                        for (var r = 0, s = t; s; s = s[o]) 1 != s.nodeType || e && e != s.tagName || r++;
                        return r % n == i
                    },
                    compileParts = function(aParts) {
                        for (var aPartExprs = [], i = 0, oPart; oPart = aParts[i]; i++) aPartExprs.push(getExpression(oPart.body));
                        for (var sFunc = "", sPushCode = "aRet.push(oEl); if (oOptions.single) { bStop = true; }", i = aParts.length - 1, oPart; oPart = aParts[i]; i--) {
                            var oExpr = aPartExprs[i],
                                sPush = (debugOption.callback ? "cost++;" : "") + oExpr.defines,
                                sReturn = "if (bStop) {" + (0 == i ? "return aRet;" : "return;") + "}";
                            sPush += "true" == oExpr.returns ? (sFunc ? sFunc + "(oEl);" : sPushCode) + sReturn : "if (" + oExpr.returns + ") {" + (sFunc ? sFunc + "(oEl);" : sPushCode) + sReturn + "}";
                            var sCheckTag = "oEl.nodeType != 1";
                            oExpr.quotTAG && (sCheckTag = "oEl.tagName != " + oExpr.quotTAG);
                            var sTmpFunc = "(function(oBase" + (0 == i ? ", oOptions) { var bStop = false; var aRet = [];" : ") {");
                            switch (oExpr.nth && (sPush = "if (isNth_dontShrink(oEl, " + (oExpr.quotTAG ? oExpr.quotTAG : "false") + "," + oExpr.nth[0] + "," + oExpr.nth[1] + ',"' + ("nth-of-type" == oExpr.nth[2] ? "previousSibling" : "nextSibling") + '")) {' + sPush + "}"), oPart.rel) {
                                case " ":
                                    sTmpFunc += oExpr.quotID ? "var oEl = GEBID(oBase," + oExpr.quotID + ",oDocument_dontShrink);var oCandi = oEl;for (; oCandi; oCandi = (oCandi.parentNode || oCandi._IE5_parentNode)) {if (oCandi == oBase) break;}if (!oCandi || " + sCheckTag + ") return aRet;" + sPush : "var aCandi = getChilds_dontShrink(oBase, " + (oExpr.quotTAG || '"*"') + ", " + (oExpr.quotCLASS || "null") + ");for (var i = 0, oEl; oEl = aCandi[i]; i++) {" + (oExpr.quotCLASS ? "if (" + sCheckTag + ") continue;" : "") + sPush + "}";
                                    break;
                                case ">":
                                    sTmpFunc += oExpr.quotID ? "var oEl = GEBID(oBase," + oExpr.quotID + ",oDocument_dontShrink);if ((oEl.parentNode || oEl._IE5_parentNode) != oBase || " + sCheckTag + ") return aRet;" + sPush : "for (var oEl = oBase.firstChild; oEl; oEl = oEl.nextSibling) {if (" + sCheckTag + ") { continue; }" + sPush + "}";
                                    break;
                                case "+":
                                    sTmpFunc += oExpr.quotID ? "var oEl = GEBID(oBase," + oExpr.quotID + ",oDocument_dontShrink);var oPrev;for (oPrev = oEl.previousSibling; oPrev; oPrev = oPrev.previousSibling) { if (oPrev.nodeType == 1) break; }if (!oPrev || oPrev != oBase || " + sCheckTag + ") return aRet;" + sPush : "for (var oEl = oBase.nextSibling; oEl; oEl = oEl.nextSibling) { if (oEl.nodeType == 1) break; }if (!oEl || " + sCheckTag + ") { return aRet; }" + sPush;
                                    break;
                                case "~":
                                    sTmpFunc += oExpr.quotID ? "var oEl = GEBID(oBase," + oExpr.quotID + ",oDocument_dontShrink);var oCandi = oEl;for (; oCandi; oCandi = oCandi.previousSibling) { if (oCandi == oBase) break; }if (!oCandi || " + sCheckTag + ") return aRet;" + sPush : "for (var oEl = oBase.nextSibling; oEl; oEl = oEl.nextSibling) {if (" + sCheckTag + ") { continue; }if (!markElement_dontShrink(oEl, " + i + ")) { break; }" + sPush + "}";
                                    break;
                                case "!":
                                    sTmpFunc += oExpr.quotID ? "var oEl = GEBID(oBase," + oExpr.quotID + ",oDocument_dontShrink);for (; oBase; oBase = (oBase.parentNode || oBase._IE5_parentNode)) { if (oBase == oEl) break; }if (!oBase || " + sCheckTag + ") return aRet;" + sPush : "for (var oEl = (oBase.parentNode || oBase._IE5_parentNode); oEl; oEl = (oEl.parentNode || oEl._IE5_parentNode)) {if (" + sCheckTag + ") { continue; }" + sPush + "}";
                                    break;
                                case "!>":
                                    sTmpFunc += oExpr.quotID ? "var oEl = GEBID(oBase," + oExpr.quotID + ",oDocument_dontShrink);var oRel = (oBase.parentNode || oBase._IE5_parentNode);if (!oRel || oEl != oRel || (" + sCheckTag + ")) return aRet;" + sPush : "var oEl = (oBase.parentNode || oBase._IE5_parentNode);if (!oEl || " + sCheckTag + ") { return aRet; }" + sPush;
                                    break;
                                case "!+":
                                    sTmpFunc += oExpr.quotID ? "var oEl = GEBID(oBase," + oExpr.quotID + ",oDocument_dontShrink);var oRel;for (oRel = oBase.previousSibling; oRel; oRel = oRel.previousSibling) { if (oRel.nodeType == 1) break; }if (!oRel || oEl != oRel || (" + sCheckTag + ")) return aRet;" + sPush : "for (oEl = oBase.previousSibling; oEl; oEl = oEl.previousSibling) { if (oEl.nodeType == 1) break; }if (!oEl || " + sCheckTag + ") { return aRet; }" + sPush;
                                    break;
                                case "!~":
                                    sTmpFunc += oExpr.quotID ? "var oEl = GEBID(oBase," + oExpr.quotID + ",oDocument_dontShrink);var oRel;for (oRel = oBase.previousSibling; oRel; oRel = oRel.previousSibling) { if (oRel.nodeType != 1) { continue; }if (oRel == oEl) { break; }}if (!oRel || (" + sCheckTag + ")) return aRet;" + sPush : "for (oEl = oBase.previousSibling; oEl; oEl = oEl.previousSibling) {if (" + sCheckTag + ") { continue; }if (!markElement_dontShrink(oEl, " + i + ")) { break; }" + sPush + "}"
                            }
                            sTmpFunc += (0 == i ? "return aRet;" : "") + "})", sFunc = sTmpFunc
                        }
                        return eval("var fpCompiled = " + sFunc + ";"), fpCompiled
                    },
                    parseQuery = function(t) {
                        var e = t,
                            n = arguments.callee,
                            i = n._cache[e];
                        if (!i) {
                            t = backupKeys(t);
                            var o = splitToParts(t);
                            i = n._cache[e] = compileParts(o), i.depth = o.length
                        }
                        return i
                    };
                parseQuery._cache = {};
                var parseTestQuery = function(sQuery) {
                    for (var fpSelf = arguments.callee, aSplitQuery = backupKeys(sQuery).split(/\s*,\s*/), aResult = [], nLen = aSplitQuery.length, aFunc = [], i = 0; i < nLen; i++) aFunc.push(function(sQuery) {
                        var sCacheKey = sQuery,
                            fpFunction = fpSelf._cache[sCacheKey];
                        if (!fpFunction) {
                            sQuery = backupKeys(sQuery);
                            var oExpr = getExpression(sQuery);
                            eval("fpFunction = function(oEl) { " + oExpr.defines + "return (" + oExpr.returnsID + oExpr.returnsTAG + oExpr.returns + "); };")
                        }
                        return fpFunction
                    }(restoreKeys(aSplitQuery[i])));
                    return aFunc
                };
                parseTestQuery._cache = {};
                var distinct = function(t) {
                        for (var e, n = [], i = {}, o = 0; e = t[o]; o++) {
                            var r = getUID(e);
                            i[r] || (n.push(e), i[r] = !0)
                        }
                        return n
                    },
                    markElement_dontShrink = function(t, e) {
                        var n = getUID(t);
                        return !cssquery._marked[e][n] && (cssquery._marked[e][n] = !0, !0)
                    },
                    getParentElement = function(t) {
                        var e;
                        if (t = t && t.$value ? t.$value() : t, jindo.$Jindo.isString(t)) try {
                            t = document.getElementById(t)
                        } catch (n) {
                            t = document
                        }
                        return t || (t = document), e = t.nodeType, 1 != e && 9 != e && 10 != e && 11 != e && (t = t.ownerDocument || t.document), t || t.ownerDocument || t.document
                    },
                    oResultCache = null,
                    bUseResultCache = !1,
                    bExtremeMode = !1,
                    old_cssquery = function(t, e, n) {
                        g_checkVarType(arguments, {
                            "4str": ["sQuery:" + tString],
                            "4var": ["sQuery:" + tString, "oParent:" + tVariant],
                            "4var2": ["sQuery:" + tString, "oParent:" + tVariant, "oOptions:" + tVariant]
                        }, "cssquery");
                        if (e = getParentElement(e), n = n && n.$value ? n.$value() : n, "object" == typeof t) {
                            var i = {};
                            for (var o in t) t.hasOwnProperty(o) && (i[o] = arguments.callee(t[o], e, n));
                            return i
                        }
                        cost = 0;
                        for (var r, s = (new Date).getTime(), a = 0, c = debugOption.repeat; a < c; a++) r = function(t, e, n) {
                            if (n ? n.oneTimeOffCache || (n.oneTimeOffCache = !1) : n = {
                                    oneTimeOffCache: !1
                                }, cssquery.safeHTML(n.oneTimeOffCache), e || (e = document), oDocument_dontShrink = e.ownerDocument || e.document || e, /\bMSIE\s([0-9]+(\.[0-9]+)*);/.test(_j_ag) && parseFloat(RegExp.$1) < 6) {
                                try {
                                    oDocument_dontShrink.location
                                } catch (i) {
                                    oDocument_dontShrink = document
                                }
                                oDocument_dontShrink.firstChild = oDocument_dontShrink.getElementsByTagName("html")[0], oDocument_dontShrink.firstChild._IE5_parentNode = oDocument_dontShrink
                            }
                            bXMLDocument = "undefined" != typeof XMLDocument ? oDocument_dontShrink.constructor === XMLDocument : !oDocument_dontShrink.location, getUID = bXMLDocument ? getUID4XML : getUID4HTML, clearKeys();
                            for (var o = backupKeys(t).split(/\s*,\s*/), r = [], s = o.length, a = 0; a < s; a++) o[a] = restoreKeys(o[a]);
                            for (var a = 0; a < s; a++) {
                                var c = o[a],
                                    h = null,
                                    u = c + (n.single ? "_single" : ""),
                                    l = bUseResultCache ? oResultCache[u] : null;
                                if (l)
                                    for (var d, f = 0; d = l[f]; f++)
                                        if (d.parent == e) {
                                            h = d.result;
                                            break
                                        } if (!h) {
                                    var p = parseQuery(c);
                                    cssquery._marked = [];
                                    for (var f = 0, _ = p.depth; f < _; f++) cssquery._marked.push({});
                                    h = distinct(p(e, n)), bUseResultCache && !n.oneTimeOffCache && (oResultCache[u] instanceof Array || (oResultCache[u] = []), oResultCache[u].push({
                                        parent: e,
                                        result: h
                                    }))
                                }
                                r = r.concat(h)
                            }
                            return unsetNodeIndexes(), r
                        }(t, e, n);
                        return s = (new Date).getTime() - s, debugOption.callback && debugOption.callback(t, cost, s), r
                    },
                    cssquery;
                if (document.querySelectorAll) {
                    var _div = document.createElement("div");
                    cssquery = function(t, e, n) {
                        var i, o, r, s, a, c, h;
                        g_checkVarType(arguments, {
                            "4str": ["sQuery:" + tString],
                            "4var": ["sQuery:" + tString, "oParent:" + tVariant],
                            "4var2": ["sQuery:" + tString, "oParent:" + tVariant, "oOptions:" + tVariant]
                        }, "cssquery");
                        e = getParentElement(e), n = n && n.$value ? n.$value() : n, t = t.replace(/\[(.*?)\=(\d*)\]/g, function(t, e, n) {
                            return "[" + e + "='" + n + "']"
                        }), o = e.nodeType;
                        try {
                            if (_isNonStandardQueryButNotException(t)) return old_cssquery(t, e, n);
                            if (h = (e.tagName || "").toUpperCase(), 9 !== o && "HTML" != h) 11 === o && (e = e.cloneNode(!0), c = _div.cloneNode(!0), c.appendChild(e), e = c, c = null), a = _addQueryId(e, "queryid"), (_parent = e.parentNode) || "BODY" === h || jindo.$Element._contain((e.ownerDocument || e.document).body, e) ? (s = e, e = _parent) : (c = _div.cloneNode(!0), s = e, c.appendChild(s), e = c), t = _commaRevise(a + " " + t, ", " + a + " ");
                            else if (e = e.ownerDocument || e.document || e, _startCombinator(t)) return [];
                            i = n && n.single ? [e.querySelector(t)] : _toArray(e.querySelectorAll(t))
                        } catch (u) {
                            i = old_cssquery(t, e, n)
                        }
                        return r && (s.removeAttribute("queryid"), c = null), i
                    }
                } else cssquery = old_cssquery;
                return cssquery.test = function(t, e) {
                    clearKeys();
                    try {
                        var n = g_checkVarType(arguments, {
                            "4ele": ["oEl:" + tElement, "sQuery:" + tString],
                            "4doc": ["oEl:" + tDocument, "sQuery:" + tString]
                        }, "<static> cssquery#test");
                        eEl = n.oEl, e = n.sQuery
                    } catch (i) {
                        return !1
                    }
                    for (var o = parseTestQuery(e), r = 0, s = o.length; r < s; r++)
                        if (o[r](t)) return !0;
                    return !1
                }, cssquery.useCache = function(t) {
                    return void 0 !== t && (bUseResultCache = t, cssquery.clearCache()), bUseResultCache
                }, cssquery.clearCache = function() {
                    oResultCache = {}
                }, cssquery.getSingle = function(t, e, n) {
                    return n = n && n.$value ? n.$value() : n, cssquery(t, e, {
                        single: !0,
                        oneTimeOffCache: !!n && !!n.oneTimeOffCache
                    })[0] || null
                }, cssquery.xpath = function(t, e) {
                    return t = t && t.$value ? t.$value() : t, t = t.replace(/\/(\w+)(\[([0-9]+)\])?/g, function(t, e, n, i) {
                        return i = i || "1", ">" + e + ":nth-of-type(" + i + ")"
                    }), old_cssquery(t, e)
                }, cssquery.debug = function(t, e) {
                    var n = g_checkVarType(arguments, {
                        "4fun": ["fpCallback:" + tFunction],
                        "4fun2": ["fpCallback:" + tFunction, "nRepeat:" + tNumeric]
                    }, "<static> cssquery#debug");
                    debugOption.callback = n.fpCallback, debugOption.repeat = n.nRepeat || 1
                }, cssquery.safeHTML = function(t) {
                    return arguments.length > 0 && (safeHTML = t && _JINDO_IS_IE), safeHTML || !_JINDO_IS_IE
                }, cssquery.version = sVersion, cssquery.release = function() {
                    _JINDO_IS_IE && (delete validUID, validUID = {}, bUseResultCache && cssquery.clearCache())
                }, cssquery._getCacheInfo = function() {
                    return {
                        uidCache: validUID,
                        eleCache: oResultCache
                    }
                }, cssquery._resetUID = function() {
                    UID = 0
                }, cssquery.extreme = function(t) {
                    0 == arguments.length && (t = !0), bExtremeMode = t
                }, cssquery
            }(), jindo.$Agent = function() {
                var t = arguments.callee,
                    e = t._cached;
                return e ? e : this instanceof t ? (e || (t._cached = this), this._navigator = navigator, void(this._dm = document.documentMode)) : new t
            }, jindo.$Agent.prototype.navigator = function() {
                function t(t, e) {
                    return (e || "").indexOf(t) > -1
                }
                var e = {},
                    n = -1,
                    i = -1,
                    o = this._navigator.userAgent,
                    r = this._navigator.vendor || "",
                    s = this._dm;
                e.getName = function() {
                    var t = "";
                    for (x in e) "boolean" == typeof e[x] && e[x] && e.hasOwnProperty(x) && (t = x);
                    return t
                }, e.webkit = t("WebKit", o), e.opera = void 0 !== window.opera || t("Opera", o), e.ie = !e.opera && t("MSIE", o), e.chrome = e.webkit && t("Chrome", o), e.safari = e.webkit && !e.chrome && t("Apple", r), e.firefox = t("Firefox", o), e.mozilla = t("Gecko", o) && !e.safari && !e.chrome && !e.firefox, e.camino = t("Camino", r), e.netscape = t("Netscape", o), e.omniweb = t("OmniWeb", o), e.icab = t("iCab", r), e.konqueror = t("KDE", r), e.mobile = (t("Mobile", o) || t("Android", o) || t("Nokia", o) || t("webOS", o) || t("Opera Mini", o) || t("BlackBerry", o) || t("Windows", o) && t("PPC", o) || t("Smartphone", o) || t("IEMobile", o)) && !t("iPad", o), e.msafari = !t("IEMobile", o) && t("Mobile", o) || t("iPad", o) && t("Safari", o), e.mopera = t("Opera Mini", o), e.mie = t("PPC", o) || t("Smartphone", o) || t("IEMobile", o);
                try {
                    if (e.ie)
                        if (s > 0)
                            if (n = s, o.match(/(?:Trident)\/([0-9.]+)/)) {
                                var a = parseInt(RegExp.$1, 10);
                                a > 3 && (i = a + 4)
                            } else i = n;
                    else i = n = o.match(/(?:MSIE) ([0-9.]+)/)[1];
                    else e.safari || e.msafari ? (n = parseFloat(o.match(/Safari\/([0-9.]+)/)[1]), n = 100 == n ? 1.1 : o.match(/Version\/([0-9.]+)/) ? RegExp.$1 : [1, 1.2, -1, 1.3, 2, 3][Math.floor(n / 100)]) : e.mopera ? n = o.match(/(?:Opera\sMini)\/([0-9.]+)/)[1] : e.firefox || e.opera || e.omniweb ? n = o.match(/(?:Firefox|Opera|OmniWeb)\/([0-9.]+)/)[1] : e.mozilla ? n = o.match(/rv:([0-9.]+)/)[1] : e.icab ? n = o.match(/iCab[ \/]([0-9.]+)/)[1] : e.chrome && (n = o.match(/Chrome[ \/]([0-9.]+)/)[1]);
                    e.version = parseFloat(n), e.nativeVersion = parseFloat(i), isNaN(e.version) && (e.version = -1)
                } catch (c) {
                    e.version = -1
                }
                return this.navigator = function() {
                    return e
                }, e
            }, jindo.$Agent.prototype.os = function() {
                var t = {};
                return u = this._navigator.userAgent, p = this._navigator.platform, f = function(t, e) {
                    return e.indexOf(t) > -1
                }, aMatchResult = null, t.getName = function() {
                    var e = "";
                    for (x in t) t[x] === !0 && t.hasOwnProperty(x) && (e = x);
                    return e
                }, t.win = f("Win", p), t.mac = f("Mac", p), t.linux = f("Linux", p), t.win2000 = t.win && (f("NT 5.0", u) || f("Windows 2000", u)), t.winxp = t.win && f("NT 5.1", u), t.xpsp2 = t.winxp && f("SV1", u), t.vista = t.win && f("NT 6.0", u), t.win7 = t.win && f("NT 6.1", u), t.win8 = t.win && f("NT 6.2", u), t.ipad = f("iPad", u), t.iphone = f("iPhone", u) && !t.ipad, t.android = f("Android", u), t.nokia = f("Nokia", u), t.webos = f("webOS", u), t.blackberry = f("BlackBerry", u), t.mwin = f("PPC", u) || f("Smartphone", u) || f("IEMobile", u) || f("Windows Phone", u), t.ios = t.ipad || t.iphone, t.symbianos = f("SymbianOS", u), t.version = null, t.win ? (aMatchResult = u.match(/Windows NT ([\d|\.]+)/), null != aMatchResult && void 0 != aMatchResult[1] && (t.version = aMatchResult[1])) : t.mac ? (aMatchResult = u.match(/Mac OS X ([\d|_]+)/), null != aMatchResult && void 0 != aMatchResult[1] && (t.version = String(aMatchResult[1]).split("_").join("."))) : t.linux || (t.android ? (aMatchResult = u.match(/Android ([\d|\.]+)/), null != aMatchResult && void 0 != aMatchResult[1] && (t.version = aMatchResult[1])) : t.ios ? (aMatchResult = u.match(/(iPhone )?OS ([\d|_]+)/), null != aMatchResult && void 0 != aMatchResult[2] && (t.version = String(aMatchResult[2]).split("_").join("."))) : t.blackberry ? (aMatchResult = u.match(/Version\/([\d|\.]+)/), null == aMatchResult && (aMatchResult = u.match(/BlackBerry\s?\d{4}\/([\d|\.]+)/)), null != aMatchResult && void 0 != aMatchResult[1] && (t.version = aMatchResult[1])) : t.symbianos ? (aMatchResult = u.match(/SymbianOS\/(\d+.\w+)/), null != aMatchResult && void 0 != aMatchResult[1] && (t.version = aMatchResult[1])) : t.webos ? (aMatchResult = u.match(/webOS\/([\d|\.]+)/), null != aMatchResult && void 0 != aMatchResult[1] && (t.version = aMatchResult[1])) : t.mwin && (aMatchResult = u.match(/Windows CE ([\d|\.]+)/), null != aMatchResult && void 0 != aMatchResult[1] && (t.version = aMatchResult[1]), !t.version && (aMatchResult = u.match(/Windows Phone (OS )?([\d|\.]+)/)) && (t.version = aMatchResult[2]))), this.os = function() {
                    return t
                }, t
            }, jindo.$Agent.prototype.flash = function() {
                var t = {},
                    e = this._navigator.plugins,
                    n = this._navigator.mimeTypes,
                    i = null;
                if (t.installed = !1, t.version = -1, !jindo.$Jindo.isUndefined(e) && e.length) i = e["Shockwave Flash"], i && (t.installed = !0, i.description && (t.version = parseFloat(i.description.match(/[0-9.]+/)[0]))), e["Shockwave Flash 2.0"] && (t.installed = !0, t.version = 2);
                else if (!jindo.$Jindo.isUndefined(n) && n.length) i = n["application/x-shockwave-flash"], t.installed = i && i.enabledPlugin;
                else try {
                    t.version = parseFloat(new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").match(/(.\d?),/)[1]), t.installed = !0
                } catch (o) {}
                return this.flash = function() {
                    return t
                }, this.info = this.flash, t
            }, jindo.$Agent.prototype.silverlight = function() {
                var t = new Object,
                    e = this._navigator.plugins,
                    n = null;
                if (t.installed = !1, t.version = -1, !jindo.$Jindo.isUndefined(e) && e.length) n = e["Silverlight Plug-In"], n && (t.installed = !0, t.version = parseInt(n.description.split(".")[0], 10), "1.0.30226.2" == n.description && (t.version = 2));
                else try {
                    n = new ActiveXObject("AgControl.AgControl"), t.installed = !0, n.isVersionSupported("3.0") ? t.version = 3 : n.isVersionSupported("2.0") ? t.version = 2 : n.isVersionSupported("1.0") && (t.version = 1)
                } catch (i) {}
                return this.silverlight = function() {
                    return t
                }, t
            }, jindo.$A = function(t) {
                var e = arguments.callee;
                if (t instanceof e) return t;
                if (!(this instanceof e)) try {
                    return jindo.$Jindo._maxWarn(arguments.length, 1, "$A"), new e(t)
                } catch (n) {
                    if (n instanceof TypeError) return null;
                    throw n
                }
                var i = g_checkVarType(arguments, {
                    "4voi": [],
                    "4arr": ["aPram:" + tArray],
                    "4nul": ["oNull:" + tNull],
                    "4und": ["oUndefined:" + tUndefined],
                    arrt: ["aPram:" + tArrayStyle]
                }, "$A");
                switch (null == i && (t = []), i + "") {
                    case "arrt":
                    case "4arr":
                        t = i.aPram;
                        break;
                    case "4nul":
                    case "4und":
                    case "4voi":
                        t = []
                }
                this._array = [];
                for (var o = 0; o < t.length; o++) this._array[this._array.length] = t[o]
            }, jindo.$A.checkVarTypeObj = {
                "4fun": ["fCallback:" + tFunction],
                "4thi": ["fCallback:" + tFunction, "oThis:" + tVariant]
            }, jindo.$A.prototype.toString = function() {
                return this._array.toString()
            }, jindo.$A.prototype.get = function(t) {
                return g_checkVarType(arguments, {
                    "4num": ["nIndex:" + tNumeric]
                }, "$A#get"), this._array[t]
            }, jindo.$A.prototype.set = function(t, e) {
                return g_checkVarType(arguments, {
                    "4num": ["nIndex:" + tNumeric, "vValue:" + tVariant]
                }, "$A#set"), this._array[t] = e, this
            }, jindo.$A.prototype.length = function(t, e) {
                var n = g_checkVarType(arguments, {
                    "4num": [jindo.$Jindo._F("nLen:" + tNumeric)],
                    sv: ["nLen:" + tNumeric, "vValue:" + tVariant],
                    "4voi": []
                }, "$A#length");
                switch (n + "") {
                    case "4num":
                        return this._array.length = n.nLen, this;
                    case "sv":
                        var i = this._array.length;
                        this._array.length = n.nLen;
                        for (var o = i; o < t; o++) this._array[o] = n.vValue;
                        return this;
                    case "4voi":
                        return this._array.length
                }
            }, jindo.$A.prototype.has = function(t) {
                return this.indexOf(t) > -1
            }, jindo.$A.prototype.indexOf = function(t) {
                return this._array.indexOf ? jindo.$A.prototype.indexOf = function(t) {
                    return this._array.indexOf(t)
                } : jindo.$A.prototype.indexOf = function(t) {
                    for (var e = 0; e < this._array.length; e++)
                        if (this._array[e] == t) return e;
                    return -1
                }, this.indexOf(t)
            }, jindo.$A.prototype.$value = function() {
                return this._array
            }, jindo.$A.prototype.push = function(t) {
                return this._array.push.apply(this._array, _toArray(arguments))
            }, jindo.$A.prototype.pop = function() {
                return this._array.pop()
            }, jindo.$A.prototype.shift = function() {
                return this._array.shift()
            }, jindo.$A.prototype.unshift = function(t) {
                return this._array.unshift.apply(this._array, _toArray(arguments)), this._array.length
            }, jindo.$A.prototype.forEach = function(t, e) {
                function n(t) {
                    return function(e, n) {
                        function i(t, i, r) {
                            try {
                                e.apply(n || o, _slice.call(arguments))
                            } catch (s) {
                                if (!(s instanceof o.constructor.Continue)) throw s
                            }
                        }
                        var o = (g_checkVarType(arguments, jindo.$A.checkVarTypeObj, "$A#forEach"), this);
                        return t(this, i), this
                    }
                }
                return this._array.forEach ? jindo.$A.prototype.forEach = n(function(t, e) {
                    try {
                        t._array.forEach(e)
                    } catch (n) {
                        if (!(n instanceof t.constructor.Break)) throw n
                    }
                }) : jindo.$A.prototype.forEach = n(function(t, e) {
                    for (var n = t._array, i = 0, o = n.length; i < o; i++) try {
                        e(n[i], i, n)
                    } catch (r) {
                        if (r instanceof t.constructor.Break) break;
                        throw r
                    }
                }), this.forEach.apply(this, _slice.call(arguments))
            }, jindo.$A.prototype.slice = function(t, e) {
                var n = this._array.slice.call(this._array, t, e);
                return jindo.$A(n)
            }, jindo.$A.prototype.splice = function(t, e) {
                var n = this._array.splice.apply(this._array, _toArray(arguments));
                return jindo.$A(n)
            }, jindo.$A.prototype.shuffle = function() {
                return this._array.sort(function(t, e) {
                    return Math.random() > Math.random() ? 1 : -1
                }), this
            }, jindo.$A.prototype.reverse = function() {
                return this._array.reverse(), this
            }, jindo.$A.prototype.empty = function() {
                return this._array.length = 0, this
            }, jindo.$A.Break = jindo.$Jindo.Break, jindo.$A.Continue = jindo.$Jindo.Continue, jindo.$A.prototype.map = function(t, e) {
                function n(t) {
                    return function(e, n) {
                        function i(t, i, o) {
                            try {
                                r.push(e.apply(n || s, _toArray(arguments)))
                            } catch (a) {
                                if (!(a instanceof s.constructor.Continue)) throw a;
                                r.push(t)
                            }
                        }
                        var o = g_checkVarType(arguments, jindo.$A.checkVarTypeObj, "$A#map");
                        if (null == o) return this;
                        var r = [],
                            s = this;
                        return t(this, i), jindo.$A(r)
                    }
                }
                return this._array.map ? jindo.$A.prototype.map = n(function(t, e) {
                    t.forEach(e)
                }) : jindo.$A.prototype.map = n(function(t, e) {
                    for (var n = t._array, i = 0, o = t._array.length; i < o; i++) try {
                        e(n[i], i, n)
                    } catch (r) {
                        if (r instanceof t.constructor.Break) break;
                        throw r
                    }
                }), this.map.apply(this, _toArray(arguments))
            }, jindo.$A.prototype.filter = function(t, e) {
                function n(t) {
                    return function(e, n) {
                        function i(t, i, o) {
                            try {
                                e.apply(n || s, _toArray(arguments)) && r.push(t)
                            } catch (a) {
                                if (!(a instanceof s.constructor.Continue)) throw a
                            }
                        }
                        var o = g_checkVarType(arguments, jindo.$A.checkVarTypeObj, "$A#filter");
                        if (null == o) return this;
                        var r = [],
                            s = this;
                        return t(this, i), jindo.$A(r)
                    }
                }
                return this._array.filter ? jindo.$A.prototype.filter = n(function(t, e) {
                    try {
                        t.forEach(e)
                    } catch (n) {
                        if (!(n instanceof t.constructor.Break)) throw n
                    }
                }) : jindo.$A.prototype.filter = n(function(t, e) {
                    for (var n = t._array, i = 0, o = t._array.length; i < o; i++) try {
                        e(n[i], i, n)
                    } catch (r) {
                        if (r instanceof t.constructor.Break) break;
                        throw r
                    }
                }), this.filter.apply(this, _toArray(arguments))
            }, jindo.$A.prototype.every = function(t, e) {
                var n = g_checkVarType,
                    i = jindo.$A.checkVarTypeObj;
                return this._array.every ? jindo.$A.prototype.every = function(t, e) {
                    return n(arguments, i, "$A#every"), this._array.every(t, e || this)
                } : jindo.$A.prototype.every = function(t, e) {
                    n(arguments, i, "$A#every");
                    for (var o = !0, r = this._array, s = 0, a = r.length; s < a; s++)
                        if (t.call(e || this, r[s], s, r) === !1) {
                            o = !1;
                            break
                        } return o
                }, this.every.apply(this, _toArray(arguments))
            }, jindo.$A.prototype.some = function(t, e) {
                var n = g_checkVarType,
                    i = jindo.$A.checkVarTypeObj;
                return this._array.some ? jindo.$A.prototype.some = function(t, e) {
                    return n(arguments, i, "$A#some"), this._array.some(t, e || this)
                } : jindo.$A.prototype.some = function(t, e) {
                    n(arguments, i, "$A#some");
                    for (var o = !1, r = this._array, s = 0, a = r.length; s < a; s++)
                        if (t.call(e || this, r[s], s, r) === !0) {
                            o = !0;
                            break
                        } return o
                }, this.some.apply(this, _toArray(arguments))
            }, jindo.$A.prototype.refuse = function(t) {
                var e = jindo.$A(_slice.apply(arguments));
                return this.filter(function(t, n) {
                    return !(e.indexOf(t) > -1)
                })
            }, jindo.$A.prototype.unique = function() {
                var t, e, n = this._array,
                    i = [],
                    o = n.length;
                for (t = 0; t < o; t++) {
                    for (e = 0; e < i.length && n[t] != i[e]; e++);
                    e >= i.length && (i[e] = n[t])
                }
                return this._array = i, this
            }, jindo.$Ajax = function(t, e) {
                function n() {
                    if (window.XMLHttpRequest) return new XMLHttpRequest;
                    if (ActiveXObject) {
                        try {
                            return new ActiveXObject("MSXML2.XMLHTTP")
                        } catch (t) {
                            return new ActiveXObject("Microsoft.XMLHTTP")
                        }
                        return null
                    }
                }
                var i = arguments.callee;
                if (!(this instanceof i)) try {
                    return jindo.$Jindo._maxWarn(arguments.length, 2, "$Ajax"), new i(t, e || {})
                } catch (o) {
                    if (o instanceof TypeError) return null;
                    throw o
                }
                var r = jindo.$Ajax,
                    s = jindo.$Error,
                    a = jindo.$Except,
                    c = g_checkVarType(arguments, {
                        "4str": ["sURL:" + tString],
                        "4obj": ["sURL:" + tString, "oOption:" + tHash]
                    }, "$Ajax");
                c + "" == "for_string" && (c.oOption = {});
                var h = location.toString(),
                    u = "";
                try {
                    u = h.match(/^https?:\/\/([a-z0-9_\-\.]+)/i)[1]
                } catch (o) {}
                this._status = 0, this._url = c.sURL, this._headers = {}, this._options = {
                    type: "xhr",
                    method: "post",
                    proxy: "",
                    timeout: 0,
                    onload: function(t) {},
                    onerror: null,
                    ontimeout: function(t) {},
                    jsonp_charset: "utf-8",
                    callbackid: "",
                    callbackname: "",
                    sendheader: !0,
                    async: !0,
                    decode: !0,
                    postBody: !1
                }, this._options = r._setProperties(c.oOption, this), r._validationOption(this._options, "$Ajax"), r.CONFIG && this.option(r.CONFIG);
                var l = this._options;
                l.type = l.type.toLowerCase(), l.method = l.method.toLowerCase(), void 0 === window["__" + jindoName + "_callback"] && (window["__" + jindoName + "_callback"] = []);
                var d = this;
                switch (l.type) {
                    case "put":
                    case "delete":
                    case "get":
                    case "post":
                        l.method = l.type;
                    case "xhr":
                        this._request = n();
                        break;
                    case "flash":
                        if (!r.SWFRequest) throw new s(jindoName + ".$Ajax.SWFRequest" + a.REQUIRE_AJAX, "$Ajax");
                        this._request = new r.SWFRequest(function(t, e) {
                            return d.option.apply(d, arguments)
                        });
                        break;
                    case "jsonp":
                        if (!r.JSONPRequest) throw new s(jindoName + ".$Ajax.JSONPRequest" + a.REQUIRE_AJAX, "$Ajax");
                        this._request = new r.JSONPRequest(function(t, e) {
                            return d.option.apply(d, arguments)
                        });
                        break;
                    case "iframe":
                        if (!r.FrameRequest) throw new s(jindoName + ".$Ajax.FrameRequest" + a.REQUIRE_AJAX, "$Ajax");
                        this._request = new r.FrameRequest(function(t, e) {
                            return d.option.apply(d, arguments)
                        })
                }
            }, jindo.$Ajax._setProperties = function(t, e) {
                t = t || {};
                var n;
                return n = t.type = t.type || "xhr", t.onload = jindo.$Fn(t.onload || function() {}, e).bind(), t.method = t.method || "post", "iframe" != n && (t.timeout = t.timeout || 0, t.ontimeout = jindo.$Fn(t.ontimeout || function() {}, e).bind(), t.onerror = jindo.$Fn(t.onerror || function() {}, e).bind()), "xhr" == n ? (t.async = void 0 === t.async || t.async, t.postBody = void 0 !== t.postBody && t.postBody) : "jsonp" == n ? (t.method = "get", t.jsonp_charset = t.jsonp_charset || "utf-8", t.callbackid = t.callbackid || "", t.callbackname = t.callbackname || "") : "flash" == n ? (t.sendheader = void 0 === t.sendheader || t.sendheader, t.decode = void 0 === t.decode || t.decode) : "iframe" == n && (t.proxy = t.proxy || ""), t
            }, jindo.$Ajax._validationOption = function(t, e) {
                var n = jindo.$Except,
                    i = t.type;
                "jsonp" === i ? "get" !== t.method && jindo.$Jindo._warn(n.CANNOT_USE_OPTION + "\n\t" + e + "-method=" + t.method) : "flash" === i && "get" !== t.method && "post" !== t.method && jindo.$Jindo._warn(n.CANNOT_USE_OPTION + "\n\t" + e + "-method=" + t.method), t.postBody && ("xhr" === i && "get" !== t.method || jindo.$Jindo._warn(n.CANNOT_USE_OPTION + "\n\t" + t.method + "-postBody=" + t.postBody));
                var o = {
                        xhr: "onload|timeout|ontimeout|onerror|async|method|postBody|type",
                        jsonp: "onload|timeout|ontimeout|onerror|jsonp_charset|callbackid|callbackname|method|type",
                        flash: "onload|timeout|ontimeout|onerror|sendheader|decode|method|type",
                        iframe: "onload|proxy|method|type"
                    },
                    r = [],
                    s = 0;
                for (r[s++] in t);
                for (var a = o[i], s = 0, c = r.length; s < c; s++) a.indexOf(r[s]) == -1 && jindo.$Jindo._warn(n.CANNOT_USE_OPTION + "\n\t" + i + "-" + r[s])
            }, jindo.$Ajax.prototype._onload = function(t) {
                var e = jindo.$Ajax,
                    n = jindo.$Jindo;
                return t ? function() {
                    var t, i = this._request.status,
                        o = 4 == this._request.readyState && (200 == i || 0 == i);
                    if (4 == this._request.readyState) try {
                        !o && n.isFunction(this._options.onerror) ? this._options.onerror(new e.Response(this._request)) : this._is_abort || (t = this._options.onload(new e.Response(this._request)))
                    } catch (r) {
                        throw r
                    } finally {
                        if (n.isFunction(this._oncompleted) && this._oncompleted(o, t), "xhr" == this._options.type) {
                            this.abort();
                            try {
                                delete this._request.onload
                            } catch (r) {
                                this._request.onload = void 0
                            }
                        }
                        delete this._request.onreadystatechange
                    }
                } : function() {
                    var t, i = this._request.status,
                        o = 4 == this._request.readyState && (200 == i || 0 == i);
                    if (4 == this._request.readyState) try {
                        !o && n.isFunction(this._options.onerror) ? this._options.onerror(new e.Response(this._request)) : t = this._options.onload(new e.Response(this._request))
                    } catch (r) {
                        throw r
                    } finally {
                        this._status--, n.isFunction(this._oncompleted) && this._oncompleted(o, t)
                    }
                }
            }(_JINDO_IS_IE), jindo.$Ajax.prototype.request = function(t) {
                var e = jindo.$Jindo,
                    n = e.checkVarType(arguments, {
                        "4voi": [],
                        "4obj": [e._F("oData:" + tHash)],
                        "4str": ["sData:" + tString]
                    }, "$Ajax#request");
                this._status++;
                var i, o, r = this,
                    s = this._request,
                    a = this._options,
                    c = [],
                    i = "",
                    h = null,
                    u = this._url;
                this._is_abort = !1;
                var l = a.type.toUpperCase(),
                    d = a.method.toUpperCase();
                if (a.postBody && "XHR" == l && "GET" != d) i = n + "" == "4str" ? n.sData : n + "" == "4obj" ? jindo.$Json(n.oData).toString() : null;
                else switch (n + "") {
                    case "4voi":
                        i = null;
                        break;
                    case "4obj":
                        var t = n.oData;
                        for (var f in t)
                            if (t.hasOwnProperty(f))
                                if (o = t[f], e.isFunction(o) && (o = o()), e.isArray(o) || jindo.$A && o instanceof jindo.$A) {
                                    o instanceof jindo.$A && (o = o._array);
                                    for (var p = 0; p < o.length; p++) c[c.length] = f + "=" + encodeURIComponent(o[p])
                                } else c[c.length] = f + "=" + encodeURIComponent(o);
                        i = c.join("&")
                }
                if (i && "XHR" == l && "GET" == d && (u += u.indexOf("?") == -1 ? "?" : "&", u += i, i = null), "XHR" == l && a.async ? s.open(d, u, a.async) : "XHR" == l ? s.open(d, u, !1) : s.open(d, u), "XHR" == l && "POST" == d && s.setRequestHeader("If-Modified-Since", "Thu, 1 Jan 1970 00:00:00 GMT"), "XHR" == l || "IFRAME" == l || "FLASH" == l && a.sendheader) {
                    this._headers["Content-Type"] || s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8"), s.setRequestHeader("charset", "utf-8"), this._headers["X-Requested-With"] || s.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                    for (var _ in this._headers)
                        if (this._headers.hasOwnProperty(_)) {
                            if ("function" == typeof this._headers[_]) continue;
                            s.setRequestHeader(_, String(this._headers[_]))
                        }
                }
                if (!s.addEventListener || _JINDO_IS_OP || _JINDO_IS_IE)
                    if (void 0 !== s.onload) s.onload = function(t) {
                        4 != s.readyState || r._is_abort || (clearTimeout(h), h = void 0, r._onload(t))
                    };
                    else if (6 == _j_ag.match(/(?:MSIE) ([0-9.]+)/)[1] && a.async) {
                    var m = function(t) {
                        4 != s.readyState || r._is_abort || (h && (clearTimeout(h), h = void 0), r._onload(t), clearInterval(r._interval), r._interval = void 0)
                    };
                    this._interval = setInterval(m, 300)
                } else s.onreadystatechange = function(t) {
                    4 == s.readyState && (clearTimeout(h), h = void 0, r._onload(t))
                };
                else this._loadFunc && s.removeEventListener("load", this._loadFunc, !1), this._loadFunc = function(t) {
                    clearTimeout(h), h = void 0, r._onload(t)
                }, s.addEventListener("load", this._loadFunc, !1);
                return a.timeout > 0 && (this._timer && clearTimeout(this._timer), h = setTimeout(function() {
                    r._is_abort = !0, r._interval && (clearInterval(r._interval), r._interval = void 0);
                    try {
                        s.abort()
                    } catch (t) {}
                    a.ontimeout(s), e.isFunction(r._oncompleted) && r._oncompleted(!1)
                }, 1e3 * a.timeout), this._timer = h), this._test_url = u, s.send(i), this
            }, jindo.$Ajax.prototype.isIdle = function() {
                return 0 == this._status
            }, jindo.$Ajax.prototype.abort = function() {
                try {
                    this._interval && clearInterval(this._interval), this._timer && clearTimeout(this._timer), this._interval = void 0, this._timer = void 0, this._is_abort = !0, this._request.abort()
                } finally {
                    this._status--
                }
                return this
            }, jindo.$Ajax.prototype.url = function(t) {
                var e = g_checkVarType(arguments, {
                    g: [],
                    s: ["sURL:" + tString]
                }, "$Ajax#url");
                switch (e + "") {
                    case "g":
                        return this._url;
                    case "s":
                        return this._url = e.sURL, this
                }
            }, jindo.$Ajax.prototype.option = function(t, e) {
                var n = g_checkVarType(arguments, {
                    s4var: ["sKey:" + tString, "vValue:" + tVariant],
                    s4obj: ["oOption:" + tHash],
                    g: ["sKey:" + tString]
                }, "$Ajax#option");
                switch (n + "") {
                    case "s4var":
                        n.oOption = {}, n.oOption[n.sKey] = n.vValue;
                    case "s4obj":
                        var i = n.oOption;
                        try {
                            for (var o in i) i.hasOwnProperty(o) && ("onload" === o || "ontimeout" === o || "onerror" === o ? this._options[o] = jindo.$Fn(i[o], this).bind() : this._options[o] = i[o])
                        } catch (r) {}
                        break;
                    case "g":
                        return this._options[n.sKey]
                }
                return jindo.$Ajax._validationOption(this._options, "$Ajax#option"), this
            }, jindo.$Ajax.prototype.header = function(t, e) {
                "jsonp" === this._options.type && jindo.$Jindo._warn("");
                var n = g_checkVarType(arguments, {
                    s4str: ["sKey:" + tString, "sValue:" + tString],
                    s4obj: ["oOption:" + tHash],
                    g: ["sKey:" + tString]
                }, "$Ajax#option");
                switch (n + "") {
                    case "s4str":
                        this._headers[n.sKey] = n.sValue;
                        break;
                    case "s4obj":
                        var i = n.oOption;
                        try {
                            for (var o in i) i.hasOwnProperty(o) && (this._headers[o] = i[o])
                        } catch (r) {}
                        break;
                    case "g":
                        return this._headers[n.sKey]
                }
                return this
            }, jindo.$Ajax.Response = function(t) {
                this._response = t, this._regSheild = /^for\(;;\);/
            }, jindo.$Ajax.Response.prototype.xml = function() {
                return this._response.responseXML
            }, jindo.$Ajax.Response.prototype.text = function() {
                return this._response.responseText.replace(this._regSheild, "")
            }, jindo.$Ajax.Response.prototype.status = function() {
                var t = this._response.status;
                return 0 == t ? 200 : t
            }, jindo.$Ajax.Response.prototype.readyState = function() {
                return this._response.readyState
            }, jindo.$Ajax.Response.prototype.json = function() {
                if (this._response.responseJSON) return this._response.responseJSON;
                if (this._response.responseText) try {
                    return eval("(" + this.text() + ")")
                } catch (e) {
                    throw new jindo.$Error(jindo.$Except.PARSE_ERROR, "$Ajax#json")
                }
                return {}
            }, jindo.$Ajax.Response.prototype.header = function(t) {
                var e = g_checkVarType(arguments, {
                    "4str": ["name:" + tString],
                    "4voi": []
                }, "$Ajax.Response#header");
                switch (e + "") {
                    case "4str":
                        return this._response.getResponseHeader(t);
                    case "4voi":
                        return this._response.getAllResponseHeaders()
                }
            };
        var klass = jindo.$Class;
        jindo.$Ajax.RequestBase = klass({
            _respHeaderString: "",
            callbackid: "",
            callbackname: "",
            responseXML: null,
            responseJSON: null,
            responseText: "",
            status: 404,
            readyState: 0,
            $init: function(t) {},
            onload: function() {},
            abort: function() {},
            open: function() {},
            send: function() {},
            setRequestHeader: function(t, e) {
                g_checkVarType(arguments, {
                    "4str": ["sName:" + tString, "sValue:" + tString]
                }, "$Ajax.RequestBase#setRequestHeader"), this._headers[t] = e
            },
            getResponseHeader: function(t) {
                return g_checkVarType(arguments, {
                    "4str": ["sName:" + tString]
                }, "$Ajax.RequestBase#getResponseHeader"), this._respHeaders[t] || ""
            },
            getAllResponseHeaders: function() {
                return this._respHeaderString
            },
            _getCallbackInfo: function() {
                var t = "";
                if ("" != this.option("callbackid")) {
                    var e = 0;
                    do t = "_" + this.option("callbackid") + "_" + e, e++; while (window["__" + jindoName + "_callback"][t])
                } else
                    do t = "_" + Math.floor(1e4 * Math.random()); while (window["__" + jindoName + "_callback"][t]);
                return "" == this.option("callbackname") && this.option("callbackname", "_callback"), {
                    callbackname: this.option("callbackname"),
                    id: t,
                    name: "window.__" + jindoName + "_callback." + t
                }
            }
        }), jindo.$Ajax.JSONPRequest = klass({
            _headers: {},
            _respHeaders: {},
            _script: null,
            _onerror: null,
            $init: function(t) {
                this.option = t
            },
            _callback: function(t) {
                this._onerror && (clearTimeout(this._onerror), this._onerror = null);
                var e = this;
                this.responseJSON = t, this.onload(this), setTimeout(function() {
                    e.abort()
                }, 10)
            },
            abort: function() {
                if (this._script) try {
                    this._script.parentNode.removeChild(this._script)
                } catch (t) {}
            },
            open: function(t, e) {
                g_checkVarType(arguments, {
                    "4str": ["method:" + tString, "url:" + tString]
                }, "$Ajax.JSONPRequest#open"), this.responseJSON = null, this._url = e
            },
            send: function(t) {
                var e = g_checkVarType(arguments, {
                        "4voi": [],
                        "4nul": ["data:" + tNull],
                        "4str": ["data:" + tString]
                    }, "$Ajax.JSONPRequest#send"),
                    n = this,
                    i = this._getCallbackInfo(),
                    o = document.getElementsByTagName("head")[0];
                this._script = document.createElement("script"), this._script.type = "text/javascript", this._script.charset = this.option("jsonp_charset"), o ? o.appendChild(this._script) : document.body && document.body.appendChild(this._script), window["__" + jindoName + "_callback"][i.id] = function(t) {
                    try {
                        n.readyState = 4, n.status = 200, n._callback(t)
                    } finally {
                        delete window["__" + jindoName + "_callback"][i.id]
                    }
                };
                var r = jindo.$Agent(navigator),
                    s = function() {
                        n.responseJSON || (n.readyState = 4, n.status = 500, n._onerror = setTimeout(function() {
                            n._callback(null)
                        }, 200))
                    };
                r.navigator().ie ? this._script.onreadystatechange = function() {
                    "loaded" == this.readyState && (s(), this.onreadystatechange = null)
                } : this._script.onload = this._script.onerror = function() {
                    s(), this.onerror = null, this.onload = null
                };
                var a = "&";
                switch (this._url.indexOf("?") == -1 && (a = "?"), e + "") {
                    case "4voi":
                    case "4nul":
                        t = "";
                        break;
                    case "4str":
                        t = "&" + t
                }
                this._test_url = this._script.src = this._url + a + i.callbackname + "=" + i.name + t
            }
        }).extend(jindo.$Ajax.RequestBase), jindo.$Ajax.SWFRequest = klass({
            $init: function(t) {
                this.option = t
            },
            _headers: {},
            _respHeaders: {},
            _getFlashObj: function() {
                var t, e = jindo.$Ajax.SWFRequest._tmpId,
                    n = jindo.$Agent(window.navigator).navigator();
                return t = n.ie && 9 == n.version ? _getElementById(document, e) : window.document[e], (this._getFlashObj = function() {
                    return t
                })()
            },
            _callback: function(t, e, n) {
                if (this.readyState = 4, jindo.$Jindo.isNumeric(t) ? this.status = t : 1 == t && (this.status = 200), 200 == this.status) {
                    if (jindo.$Jindo.isString(e)) try {
                        this.responseText = this.option("decode") ? decodeURIComponent(e) : e, this.responseText && "" != this.responseText || (this.responseText = e)
                    } catch (i) {
                        "URIError" == i.name && (this.responseText = e, this.responseText && "" != this.responseText || (this.responseText = e))
                    }
                    jindo.$Jindo.isHash(n) && (this._respHeaders = n)
                }
                this.onload(this)
            },
            open: function(t, e) {
                g_checkVarType(arguments, {
                    "4str": ["method:" + tString, "url:" + tString]
                }, "$Ajax.SWFRequest#open");
                this._url = e, this._method = t
            },
            send: function(t) {
                function e(t) {
                    switch (typeof t) {
                        case "string":
                            return '"' + t.replace(/\"/g, '\\"') + '"';
                        case "number":
                            return t;
                        case "object":
                            var i = "",
                                o = [];
                            if (n.isArray(t)) {
                                for (var r = 0; r < t.length; r++) o[r] = e(t[r]);
                                i = "[" + o.join(",") + "]"
                            } else {
                                for (var s in t) t.hasOwnProperty(s) && (o[o.length] = e(s) + ":" + e(t[s]));
                                i = "{" + o.join(",") + "}"
                            }
                            return i;
                        default:
                            return '""'
                    }
                }
                var n = jindo.$Jindo;
                n.checkVarType(arguments, {
                    "4voi": [],
                    "4nul": ["data:" + tNull],
                    "4str": ["data:" + tString]
                }, "$Ajax.SWFRequest#send");
                this.responseXML = !1, this.responseText = "";
                var i = this,
                    o = {},
                    r = this._getCallbackInfo(),
                    s = this._getFlashObj();
                t = (t || "").split("&");
                for (var a, c = 0; c < t.length; c++) a = t[c], pos = a.indexOf("="), key = a.substring(0, pos), val = a.substring(pos + 1), o[key] = decodeURIComponent(val);
                this._current_callback_id = r.id, window["__" + jindoName + "_callback"][r.id] = function(t, e) {
                    try {
                        i._callback(t, e)
                    } finally {
                        delete window["__" + jindoName + "_callback"][r.id]
                    }
                };
                var h = {
                    url: this._url,
                    type: this._method,
                    data: o,
                    charset: "UTF-8",
                    callback: r.name,
                    header_json: this._headers
                };
                s.requestViaFlash(e(h))
            },
            abort: function() {
                this._current_callback_id && (window["__" + jindoName + "_callback"][this._current_callback_id] = function() {
                    delete window["__" + jindoName + "_callback"][info.id]
                })
            }
        }).extend(jindo.$Ajax.RequestBase), jindo.$Ajax.SWFRequest.write = function(t) {
            var e = g_checkVarType(arguments, {
                "4voi": [],
                "4str": ["data:" + tString]
            }, "<static> $Ajax.SWFRequest#write");
            switch (e + "") {
                case "4voi":
                    t = "./ajax.swf"
            }
            var n = jindo.$Ajax;
            n.SWFRequest._tmpId = "tmpSwf" + (new Date).getMilliseconds() + Math.floor(1e5 * Math.random());
            var i = jindoName + ".$Ajax.SWFRequest.loaded",
                o = "https:" == location.protocol ? "https:" : "http:";
            n._checkFlashLoad(), document.write('<div style="position:absolute;top:-1000px;left:-1000px"><object id="' + n.SWFRequest._tmpId + '" width="1" height="1" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="' + o + '//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"><param name="movie" value="' + t + '"><param name = "FlashVars" value = "activeCallback=' + i + '" /><param name = "allowScriptAccess" value = "always" /><embed name="' + n.SWFRequest._tmpId + '" src="' + t + '" type="application/x-shockwave-flash" pluginspage="' + o + '://www.macromedia.com/go/getflashplayer" width="1" height="1" allowScriptAccess="always" swLiveConnect="true" FlashVars="activeCallback=' + i + '"></embed></object></div>')
        }, jindo.$Ajax._checkFlashLoad = function() {
            jindo.$Ajax._checkFlashKey = setTimeout(function() {
                jindo.$Ajax.SWFRequest.onerror()
            }, 5e3), jindo.$Ajax._checkFlashLoad = function() {}
        }, jindo.$Ajax.SWFRequest.activeFlash = !1, jindo.$Ajax.SWFRequest.onload = function() {}, jindo.$Ajax.SWFRequest.onerror = function() {}, jindo.$Ajax.SWFRequest.loaded = function() {
            clearTimeout(jindo.$Ajax._checkFlashKey), jindo.$Ajax.SWFRequest.activeFlash = !0, jindo.$Ajax.SWFRequest.onload()
        }, jindo.$Ajax.FrameRequest = klass({
            _headers: {},
            _respHeaders: {},
            _frame: null,
            _domain: "",
            $init: function(t) {
                this.option = t
            },
            _callback: function(t, e, n) {
                var i = this;
                this.readyState = 4, this.status = 200, this.responseText = e, this._respHeaderString = n, n.replace(/^([\w\-]+)\s*:\s*(.+)$/m, function(t, e, n) {
                    i._respHeaders[e] = n
                }), this.onload(this), setTimeout(function() {
                    i.abort()
                }, 10)
            },
            abort: function() {
                if (this._frame) try {
                    this._frame.parentNode.removeChild(this._frame)
                } catch (t) {}
            },
            open: function(t, e) {
                g_checkVarType(arguments, {
                    "4str": ["method:" + tString, "url:" + tString]
                }, "$Ajax.FrameRequest#open");
                var n = /https?:\/\/([a-z0-9_\-\.]+)/i,
                    i = document.location.toString().match(n);
                this._method = t, this._url = e, this._remote = String(e).match(/(https?:\/\/[a-z0-9_\-\.]+)(:[0-9]+)?/i)[0], this._frame = null, this._domain = null != i && i[1] != document.domain ? document.domain : ""
            },
            send: function(t) {
                g_checkVarType(arguments, {
                    "4voi": [],
                    "4nul": ["data:" + tNull],
                    "4str": ["data:" + tString]
                }, "$Ajax.FrameRequest#send");
                this.responseXML = "", this.responseText = "";
                var e = this,
                    n = /https?:\/\/([a-z0-9_\-\.]+)/i,
                    i = this._getCallbackInfo(),
                    o = [];
                o.push(this._remote + "/ajax_remote_callback.html?method=" + this._method);
                var r = [];
                window["__" + jindoName + "_callback"][i.id] = function(t, n, o) {
                    try {
                        e._callback(t, n, o)
                    } finally {
                        delete window["__" + jindoName + "_callback"][i.id]
                    }
                };
                for (var s in this._headers) this._headers.hasOwnProperty(s) && (r[r.length] = "'" + s + "':'" + this._headers[s] + "'");
                r = "{" + r.join(",") + "}", o.push("&id=" + i.id), o.push("&header=" + encodeURIComponent(r)), o.push("&proxy=" + encodeURIComponent(this.option("proxy"))), o.push("&domain=" + this._domain), o.push("&url=" + encodeURIComponent(this._url.replace(n, ""))), o.push("#" + encodeURIComponent(t));
                var a = this._frame = document.createElement("iframe"),
                    c = a.style;
                c.position = "absolute", c.visibility = "hidden", c.width = "1px", c.height = "1px";
                var h = document.body || document.documentElement;
                h.firstChild ? h.insertBefore(a, h.firstChild) : h.appendChild(a), "undefined" != typeof MSApp && MSApp.addPublicLocalApplicationUri(this.option("proxy")), a.src = o.join("")
            }
        }).extend(jindo.$Ajax.RequestBase), jindo.$Ajax.Queue = function(t) {
            var e = arguments.callee;
            if (!(this instanceof e)) return new e(t || {});
            var n = g_checkVarType(arguments, {
                "4voi": [],
                "4obj": ["option:" + tHash]
            }, "$Ajax.Queue");
            t = n.option, this._options = {
                async: !1,
                useResultAsParam: !1,
                stopOnFailure: !1
            }, this.option(t), this._queue = []
        }, jindo.$Ajax.Queue.prototype.option = function(t, e) {
            var n = g_checkVarType(arguments, {
                s4str: ["sKey:" + tString, "sValue:" + tVariant],
                s4obj: ["oOption:" + tHash],
                g: ["sKey:" + tString]
            }, "$Ajax.Queue#option");
            switch (n + "") {
                case "s4str":
                    this._options[n.sKey] = n.sValue;
                    break;
                case "s4obj":
                    var i = n.oOption;
                    try {
                        for (var o in i) i.hasOwnProperty(o) && (this._options[o] = i[o])
                    } catch (r) {}
                    break;
                case "g":
                    return this._options[n.sKey]
            }
            return this
        }, jindo.$Ajax.Queue.prototype.add = function(t, e) {
            var n = g_checkVarType(arguments, {
                "4obj": ["oAjax:" + tHash],
                "4obj2": ["oAjax:" + tHash, "oPram:" + tHash]
            }, "$Ajax.Queue");
            switch (n + "") {
                case "4obj2":
                    e = n.oPram
            }
            return this._queue.push({
                obj: t,
                param: e
            }), this
        }, jindo.$Ajax.Queue.prototype.request = function() {
            return this._requestAsync.apply(this, this.option("async") ? [] : [0]), this
        }, jindo.$Ajax.Queue.prototype._requestSync = function(t, e) {
            var n = this,
                i = this._queue;
            i.length > t + 1 && (i[t].obj._oncompleted = function(e, i) {
                n.option("stopOnFailure") && !e || n._requestSync(t + 1, i)
            });
            var o = i[t].param || {};
            if (this.option("useResultAsParam") && e) try {
                for (var r in e) void 0 === o[r] && e.hasOwnProperty(r) && (o[r] = e[r])
            } catch (s) {}
            i[t].obj.request(o)
        }, jindo.$Ajax.Queue.prototype._requestAsync = function() {
            for (var t = 0; t < this._queue.length; t++) this._queue[t].obj.request(this._queue[t].param || {})
        }, jindo.$H = function(t) {
            var e = arguments.callee;
            if (t instanceof e) return t;
            if (!(this instanceof e)) try {
                return jindo.$Jindo._maxWarn(arguments.length, 1, "$H"), new e(t || {})
            } catch (n) {
                if (n instanceof TypeError) return null;
                throw n
            }
            g_checkVarType(arguments, {
                "4obj": ["oObj:" + tHash],
                "4vod": []
            }, "$H");
            this._table = {};
            for (var i in t) t.hasOwnProperty(i) && (this._table[i] = t[i])
        }, jindo.$H.prototype.$value = function() {
            return this._table
        }, jindo.$H.prototype.$ = function(t, e) {
            var n = g_checkVarType(arguments, {
                s4var: [jindo.$Jindo._F("key:" + tString), "value:" + tVariant],
                s4var2: ["key:" + tNumeric, "value:" + tVariant],
                g4str: ["key:" + tString],
                s4obj: ["oObj:" + tHash],
                g4num: ["key:" + tNumeric]
            }, "$H#$");
            switch (n + "") {
                case "s4var":
                case "s4var2":
                    return this._table[t] = e, this;
                case "s4obj":
                    var i = n.oObj;
                    for (var o in i) this._table[o] = i[o];
                    return this;
                default:
                    return this._table[t]
            }
        }, jindo.$H.prototype.length = function() {
            var t = 0;
            for (var e in this._table)
                if (this._table.hasOwnProperty(e)) {
                    if (void 0 !== Object.prototype[e] && Object.prototype[e] === this._table[e]) continue;
                    t++
                } return t
        }, jindo.$H.prototype.forEach = function(t, e) {
            var n = (g_checkVarType(arguments, {
                    "4fun": ["callback:" + tFunction],
                    "4obj": ["callback:" + tFunction, "thisObject:" + tVariant]
                }, "$H#forEach"), this._table),
                i = this.constructor;
            for (var o in n)
                if (n.hasOwnProperty(o)) {
                    if (!n.propertyIsEnumerable(o)) continue;
                    try {
                        t.call(e || this, n[o], o, n)
                    } catch (r) {
                        if (r instanceof i.Break) break;
                        if (r instanceof i.Continue) continue;
                        throw r
                    }
                } return this
        }, jindo.$H.prototype.filter = function(t, e) {
            var n = (g_checkVarType(arguments, {
                    "4fun": ["callback:" + tFunction],
                    "4obj": ["callback:" + tFunction, "thisObject:" + tVariant]
                }, "$H#filter"), jindo.$H()),
                i = this._table,
                o = this.constructor;
            for (var r in i)
                if (i.hasOwnProperty(r)) {
                    if (!i.propertyIsEnumerable(r)) continue;
                    try {
                        t.call(e || this, i[r], r, i) && n.add(r, i[r])
                    } catch (s) {
                        if (s instanceof o.Break) break;
                        if (s instanceof o.Continue) continue;
                        throw s
                    }
                } return n
        }, jindo.$H.prototype.map = function(t, e) {
            var n = (g_checkVarType(arguments, {
                    "4fun": ["callback:" + tFunction],
                    "4obj": ["callback:" + tFunction, "thisObject:" + tVariant]
                }, "$H#map"), jindo.$H()),
                i = this._table,
                o = this.constructor;
            for (var r in i)
                if (i.hasOwnProperty(r)) {
                    if (!i.propertyIsEnumerable(r)) continue;
                    try {
                        n.add(r, t.call(e || this, i[r], r, i))
                    } catch (s) {
                        if (s instanceof o.Break) break;
                        if (!(s instanceof o.Continue)) throw s;
                        n.add(r, i[r])
                    }
                } return n
        }, jindo.$H.prototype.add = function(t, e) {
            g_checkVarType(arguments, {
                "4str": ["key:" + tString, "value:" + tVariant],
                "4num": ["key:" + tNumeric, "value:" + tVariant]
            }, "$H#add");
            return this._table[t] = e, this
        }, jindo.$H.prototype.remove = function(t) {
            g_checkVarType(arguments, {
                "4str": ["key:" + tString],
                "4num": ["key:" + tNumeric]
            }, "$H#remove");
            if (void 0 === this._table[t]) return null;
            var e = this._table[t];
            return delete this._table[t], e
        }, jindo.$H.prototype.search = function(t) {
            var e = (g_checkVarType(arguments, {
                    "4str": ["value:" + tVariant]
                }, "$H#search"), !1),
                n = this._table;
            for (var i in n)
                if (n.hasOwnProperty(i)) {
                    if (!n.propertyIsEnumerable(i)) continue;
                    var o = n[i];
                    if (o === t) {
                        e = i;
                        break
                    }
                } return e
        }, jindo.$H.prototype.hasKey = function(t) {
            g_checkVarType(arguments, {
                "4str": ["key:" + tString],
                "4num": ["key:" + tNumeric]
            }, "$H#hasKey");
            return void 0 !== this._table[t]
        }, jindo.$H.prototype.hasValue = function(t) {
            g_checkVarType(arguments, {
                "4str": ["value:" + tVariant]
            }, "$H#hasValue");
            return this.search(t) !== !1
        }, jindo.$H.prototype.sort = function() {
            var t = new Object,
                e = [];
            for (var n in this._table) this._table.hasOwnProperty(n) && (e[e.length] = this._table[n]);
            var n = !1;
            e.sort();
            for (var i = 0; i < e.length; i++) n = this.search(e[i]), t[n] = e[i], delete this._table[n];
            return this._table = t, this
        }, jindo.$H.prototype.ksort = function() {
            var t = new Object,
                e = this.keys();
            e.sort();
            for (var n = 0; n < e.length; n++) t[e[n]] = this._table[e[n]];
            return this._table = t, this
        }, jindo.$H.prototype.keys = function() {
            var t = new Array;
            for (var e in this._table) this._table.hasOwnProperty(e) && t.push(e);
            return t
        }, jindo.$H.prototype.values = function() {
            var t = [];
            for (var e in this._table) this._table.hasOwnProperty(e) && (t[t.length] = this._table[e]);
            return t
        }, jindo.$H.prototype.toQueryString = function() {
            var t = [],
                e = null;
            for (var n in this._table)
                if (this._table.hasOwnProperty(n))
                    if (e = this._table[n], jindo.$Jindo.isArray(e))
                        for (i = 0; i < e.length; i++) t[t.length] = encodeURIComponent(n) + "[]=" + encodeURIComponent(e[i] + "");
                    else t[t.length] = encodeURIComponent(n) + "=" + encodeURIComponent(this._table[n] + "");
            return t.join("&")
        }, jindo.$H.prototype.empty = function() {
            return this._table = {}, this
        }, jindo.$H.Break = jindo.$Jindo.Break, jindo.$H.Continue = jindo.$Jindo.Continue, jindo.$Json = function(t) {
            var e = arguments.callee;
            if (t instanceof e) return t;
            if (!(this instanceof e)) try {
                return jindo.$Jindo._maxWarn(arguments.length, 1, "$Json"), new e(arguments.length ? t : {})
            } catch (n) {
                if (n instanceof TypeError) return null;
                throw n
            }
            g_checkVarType(arguments, {
                "4var": ["oObject:" + tVariant]
            }, "$Json"), this._object = t
        }, jindo.$Json._oldMakeJSON = function(sObject, sType) {
            try {
                if (!jindo.$Jindo.isString(sObject) || !/^(?:\s*)[\{\[]/.test(sObject)) return sObject;
                sObject = eval("(" + sObject + ")")
            } catch (e) {
                throw new jindo.$Error(jindo.$Except.PARSE_ERROR, sType)
            }
            return sObject
        }, jindo.$Json.fromXML = function(t) {
            var e = jindo.$Jindo,
                n = (e.checkVarType(arguments, {
                    "4str": ["sXML:" + tString]
                }, "<static> $Json#fromXML"), {}),
                i = /\s*<(\/?[\w:\-]+)((?:\s+[\w:\-]+\s*=\s*(?:"(?:\\"|[^"])*"|'(?:\\'|[^'])*'))*)\s*((?:\/>)|(?:><\/\1>|\s*))|\s*<!\[CDATA\[([\w\W]*?)\]\]>\s*|\s*>?([^<]*)/gi,
                o = /^[0-9]+(?:\.[0-9]+)?$/,
                r = {
                    "&amp;": "&",
                    "&nbsp;": " ",
                    "&quot;": '"',
                    "&lt;": "<",
                    "&gt;": ">"
                },
                s = {
                    tags: ["/"],
                    stack: [n]
                },
                a = function(t) {
                    return e.isUndefined(t) ? "" : t.replace(/&[a-z]+;/g, function(t) {
                        return e.isString(r[t]) ? r[t] : t
                    })
                },
                c = function(t, e) {
                    t.replace(/([\w\:\-]+)\s*=\s*(?:"((?:\\"|[^"])*)"|'((?:\\'|[^'])*)')/g, function(t, n, i, o) {
                        e[n] = a((i ? i.replace(/\\"/g, '"') : void 0) || (o ? o.replace(/\\'/g, "'") : void 0))
                    })
                },
                h = function(t) {
                    for (var e in t)
                        if (t.hasOwnProperty(e)) {
                            if (Object.prototype[e]) continue;
                            return !1
                        } return !0
                },
                u = function(t, n, i, r, u, l) {
                    var d, f = "",
                        p = s.stack.length - 1;
                    if (e.isString(n) && n)
                        if ("/" != n.substr(0, 1)) {
                            var _ = "string" == typeof i && i,
                                m = "string" == typeof r && r,
                                g = !_ && m ? "" : {};
                            if (d = s.stack[p], e.isUndefined(d[n])) d[n] = g, d = s.stack[p + 1] = d[n];
                            else if (d[n] instanceof Array) {
                                var v = d[n].length;
                                d[n][v] = g, d = s.stack[p + 1] = d[n][v]
                            } else d[n] = [d[n], g], d = s.stack[p + 1] = d[n][1];
                            _ && c(i, d), s.tags[p + 1] = n, m && (s.tags.length--, s.stack.length--)
                        } else s.tags.length--, s.stack.length--;
                    else e.isString(u) && u ? f = u : e.isString(l) && l && (f = a(l));
                    if (f.replace(/^\s+/g, "").length > 0) {
                        var y = s.stack[p - 1],
                            E = s.tags[p];
                        if (o.test(f) ? f = parseFloat(f) : "true" == f ? f = !0 : "false" == f && (f = !1), e.isUndefined(y)) return;
                        if (y[E] instanceof Array) {
                            var j = y[E];
                            e.isHash(j[j.length - 1]) && !h(j[j.length - 1]) ? (j[j.length - 1].$cdata = f, j[j.length - 1].toString = function() {
                                return f
                            }) : j[j.length - 1] = f
                        } else e.isHash(y[E]) && !h(y[E]) ? (y[E].$cdata = f, y[E].toString = function() {
                            return f
                        }) : y[E] = f
                    }
                };
            return t = t.replace(/<(\?|\!-)[^>]*>/g, ""), t.replace(i, u), jindo.$Json(n)
        }, jindo.$Json.prototype.get = function(t) {
            var e = jindo.$Jindo,
                n = (e.checkVarType(arguments, {
                    "4str": ["sPath:" + tString]
                }, "$Json#get"), jindo.$Json._oldMakeJSON(this._object, "$Json#get"));
            if (!e.isHash(n) && !e.isArray(n)) throw new jindo.$Error(jindo.$Except.JSON_MUST_HAVE_ARRAY_HASH, "$Json#get");
            for (var i, o, r, s, a, c = t.split("/"), h = /^([\w:\-]+)\[([0-9]+)\]$/, u = [
                    [n]
                ], l = u[0], d = c.length, f = 0; f < d; f++)
                if ("." != c[f] && "" != c[f]) {
                    if (".." == c[f]) u.length--;
                    else {
                        if (r = [], o = -1, i = l.length, 0 == i) return [];
                        for (h.test(c[f]) && (o = +RegExp.$2), s = 0; s < i; s++) a = l[s][c[f]], e.isUndefined(a) || (e.isArray(a) ? o > -1 ? o < a.length && (r[r.length] = a[o]) : r = r.concat(a) : o == -1 && (r[r.length] = a));
                        u[u.length] = r
                    }
                    l = u[u.length - 1]
                } return l
        }, jindo.$Json.prototype.toString = function() {
            return jindo.$Json._oldToString(this._object)
        }, jindo.$Json._oldToString = function(t) {
            var e = jindo.$Jindo,
                n = {
                    $: function(t) {
                        if (e.isNull(t) || t == 1 / 0) return "null";
                        if (!e.isFunction(t) && !e.isUndefined(t)) return e.isBoolean(t) ? t ? "true" : "false" : e.isString(t) ? this.s(t) : e.isNumeric(t) ? t : e.isArray(t) ? this.a(t) : e.isHash(t) ? this.o(t) : e.isDate(t) ? t + "" : "object" == typeof t || e.isRegExp(t) ? "{}" : isNaN(t) ? "null" : void 0
                    },
                    s: function(t) {
                        var e = {
                                '"': '\\"',
                                "\\": "\\\\",
                                "\n": "\\n",
                                "\r": "\\r",
                                "\t": "\\t"
                            },
                            n = function(t) {
                                return void 0 !== e[t] ? e[t] : t
                            };
                        return '"' + t.replace(/[\\"'\n\r\t]/g, n) + '"'
                    },
                    a: function(t) {
                        for (var n = "[", i = "", o = t.length, r = 0; r < o; r++) e.isFunction(t[r]) || (n += i + this.$(t[r]), i || (i = ","));
                        return n + "]"
                    },
                    o: function(t) {
                        t = jindo.$H(t).ksort().$value();
                        var n = "{",
                            i = "";
                        for (var o in t)
                            if (t.hasOwnProperty(o)) {
                                if (e.isUndefined(t[o]) || e.isFunction(t[o])) continue;
                                n += i + this.s(o) + ":" + this.$(t[o]), i || (i = ",")
                            } return n + "}"
                    }
                };
            return n.$(t)
        }, jindo.$Json.prototype.toXML = function() {
            var t = function(e, n) {
                var i = function(t, e) {
                    return "<" + n + (e || "") + ">" + t + "</" + n + ">"
                };
                switch (typeof e) {
                    case "undefined":
                    case "null":
                        return i("");
                    case "number":
                        return i(e);
                    case "string":
                        return i(e.indexOf("<") < 0 ? e.replace(/&/g, "&amp;") : "<![CDATA[" + e + "]]>");
                    case "boolean":
                        return i(String(e));
                    case "object":
                        var o = "";
                        if (e instanceof Array)
                            for (var r = e.length, s = 0; s < r; s++) o += t(e[s], n);
                        else {
                            var a = "";
                            for (var c in e)
                                if (e.hasOwnProperty(c)) {
                                    if ("$cdata" == c || "function" == typeof e[c]) continue;
                                    o += t(e[c], c)
                                } n && (o = i(o, a))
                        }
                        return o
                }
            };
            return t(jindo.$Json._oldMakeJSON(this._object, "$Json#toXML"), "")
        }, jindo.$Json.prototype.toObject = function() {
            return jindo.$Json._oldMakeJSON(this._object, "$Json#toObject")
        }, jindo.$Json.prototype.compare = function(t) {
            function e(t, e) {
                if (n.isArray(t)) {
                    if (t.length !== e.length) return !1;
                    for (var i = 0, o = t.length; i < o; i++)
                        if (!arguments.callee(t[i], e[i])) return !1;
                    return !0
                }
                if (n.isRegExp(t) || n.isFunction(t) || n.isDate(t)) return String(t) === String(e);
                if ("number" == typeof t && isNaN(t)) return isNaN(e);
                if (n.isHash(t)) {
                    var o = 0;
                    for (var r in t) o++;
                    for (var r in e) o--;
                    if (0 !== o) return !1;
                    for (var r in t)
                        if (r in e == !1 || !arguments.callee(t[r], e[r])) return !1;
                    return !0
                }
                return t === e
            }
            var n = jindo.$Jindo;
            n.checkVarType(arguments, {
                "4obj": ["oData:" + tHash],
                "4arr": ["oData:" + tArray]
            }, "$Json#compare");
            try {
                return e(jindo.$Json._oldMakeJSON(this._object, "$Json#compare"), t)
            } catch (i) {
                return !1
            }
        }, jindo.$Json.prototype.$value = jindo.$Json.prototype.toObject, jindo.$Cookie = function() {
            var t = arguments.callee;
            t._cached;
            if (t._cached) return t._cached;
            if (!(this instanceof t)) try {
                return jindo.$Jindo._maxWarn(arguments.length, 1, "$Cookie"), arguments.length > 0 ? new t(arguments[0]) : new t
            } catch (e) {
                if (e instanceof TypeError) return null;
                throw e
            }
            jindo.$Jindo.isUndefined(t._cached), t._cached = this;
            var n = g_checkVarType(arguments, {
                "4voi": [],
                "4bln": ["bURIComponent:" + tBoolean]
            }, "$Cookie");
            switch (n + "") {
                case "4voi":
                    this._bURIComponent = !1;
                    break;
                case "4bln":
                    this._bURIComponent = n.bURIComponent
            }
        }, jindo.$Cookie.prototype.keys = function() {
            for (var t = document.cookie.split(";"), e = /^\s+|\s+$/g, n = new Array, i = 0; i < t.length; i++) n[n.length] = t[i].substr(0, t[i].indexOf("=")).replace(e, "");
            return n
        }, jindo.$Cookie.prototype.get = function(t) {
            for (var e, n, i = (g_checkVarType(arguments, {
                    "4str": ["sName:" + tString]
                }, "$Cookie#get"), document.cookie.split(/\s*;\s*/)), o = new RegExp("^(\\s*" + t + "\\s*=)"), r = 0; r < i.length; r++)
                if (o.test(i[r])) return e = i[r].substr(RegExp.$1.length), n = this._bURIComponent && jindo.$Jindo.isNull(e.match(/%u\w{4}/)) ? decodeURIComponent(e) : unescape(e);
            return null
        }, jindo.$Cookie.prototype.set = function(t, e, n, i, o) {
            var r, s = jindo.$Jindo,
                a = s.checkVarType(arguments, {
                    "4str": ["sName:" + tString, "sValue:" + tString],
                    day_for_string: ["sName:" + tString, "sValue:" + tString, "nDays:" + tNumeric],
                    domain_for_string: ["sName:" + tString, "sValue:" + tString, "nDays:" + tNumeric, "sDomain:" + tString],
                    path_for_string: ["sName:" + tString, "sValue:" + tString, "nDays:" + tNumeric, "sDomain:" + tString, "sPath:" + tString]
                }, "$Cookie#set"),
                c = "";
            return a + "" != "4str" && 0 !== n && (c = ";expires=" + new Date((new Date).getTime() + 1e3 * n * 60 * 60 * 24).toGMTString()), s.isUndefined(i) && (i = ""), s.isUndefined(o) && (o = "/"), r = this._bURIComponent ? encodeURIComponent(e) : escape(e), document.cookie = t + "=" + r + c + "; path=" + o + (i ? "; domain=" + i : ""), this
        }, jindo.$Cookie.prototype.remove = function(t, e, n) {
            for (var i = jindo.$Jindo, o = (i.checkVarType(arguments, {
                    "4str": ["sName:" + tString],
                    domain_for_string: ["sName:" + tString, "sDomain:" + tString],
                    path_for_string: ["sName:" + tString, "sDomain:" + tString, "sPath:" + tString]
                }, "$Cookie#remove"), _toArray(arguments)), r = [], s = 0, a = o.length; s < a; s++) r.push(o[s]), 0 == s && (r.push(""), r.push(-1));
            return i.isNull(this.get(t)) || this.set.apply(this, r), this
        }, jindo.$Event = function(t) {
            return t ? function(t) {
                var e = arguments.callee;
                return t instanceof e ? t : this instanceof e ? (this._event = this._posEvent = t, this._globalEvent = window.event, this.type = t.type.toLowerCase(), "dommousescroll" == this.type ? this.type = "mousewheel" : "domcontentloaded" == this.type && (this.type = "domready"), this.isTouch = !1, this.type.indexOf("touch") > -1 && (this._posEvent = t.changedTouches[0], this.isTouch = !0), this.canceled = !1, this.element = t.target || t.srcElement, this.currentElement = t.currentTarget, this.relatedElement = null, void(jindo.$Jindo.isUndefined(t.relatedTarget) ? t.fromElement && t.toElement && (this.relatedElement = t["mouseout" == this.type ? "to" + tElement : "from" + tElement]) : this.relatedElement = t.relatedTarget)) : new e(t)
            } : function(t) {
                var e = arguments.callee;
                return t instanceof e ? t : this instanceof e ? (void 0 === t && (t = window.event), t === window.event && document.createEventObject && (t = document.createEventObject(t)), this.isTouch = !1, this._event = this._posEvent = t, this._globalEvent = window.event, this.type = t.type.toLowerCase(), "dommousescroll" == this.type ? this.type = "mousewheel" : "domcontentloaded" == this.type && (this.type = "domready"), this.canceled = !1, this.element = t.target || t.srcElement, this.currentElement = t.currentTarget, this.relatedElement = null, void(void 0 !== t.relatedTarget ? this.relatedElement = t.relatedTarget : t.fromElement && t.toElement && (this.relatedElement = t["mouseout" == this.type ? "to" + tElement : "from" + tElement]))) : new e(t)
            }
        }(_JINDO_IS_MO);
        var _eventHook = {};
        jindo.$Event.hook = function(t, e) {
                var n = g_checkVarType(arguments, {
                    g: ["sName:" + tString],
                    s4var: ["sName:" + tString, "vRevisionEvent:" + tVariant],
                    s4obj: ["oObj:" + tHash]
                }, "jindo.$Event.hook");
                switch (n + "") {
                    case "g":
                        return _eventHook[n.sName.toLowerCase()];
                    case "s4var":
                        return null == e ? delete _eventHook[n.sName.toLowerCase()] : _eventHook[n.sName.toLowerCase()] = e, this;
                    case "s4obj":
                        var i = n.oObj;
                        for (var o in i) _eventHook[o.toLowerCase()] = i[o];
                        return this
                }
            }, jindo.$Event.prototype.mouse = function(t) {
                g_checkVarType(arguments, {
                    voi: [],
                    bol: ["bIsScrollbar:" + tBoolean]
                });
                var e = this._event,
                    n = this.element,
                    i = 0,
                    o = !1,
                    r = !1,
                    s = !1,
                    o = e.which ? 0 == e.button : !!(1 & e.button),
                    r = e.which ? 1 == e.button : !!(4 & e.button),
                    s = e.which ? 2 == e.button : !!(2 & e.button),
                    a = {};
                e.wheelDelta ? i = e.wheelDelta / 120 : e.detail && (i = -e.detail / 3);
                var c;
                return t && (c = _event_isScroll(n, e)), a = {
                    delta: i,
                    left: o,
                    middle: r,
                    right: s,
                    scrollbar: c
                }, this.mouse = function(t) {
                    return t && (a.scrollbar = _event_isScroll(this.element, this._event), this.mouse = function() {
                        return a
                    }), a
                }, a
            }, jindo.$Event.prototype.key = function() {
                var t = this._event,
                    e = t.keyCode || t.charCode,
                    n = {
                        keyCode: e,
                        alt: t.altKey,
                        ctrl: t.ctrlKey,
                        meta: t.metaKey,
                        shift: t.shiftKey,
                        up: 38 == e,
                        down: 40 == e,
                        left: 37 == e,
                        right: 39 == e,
                        enter: 13 == e,
                        esc: 27 == e
                    };
                return this.key = function() {
                    return n
                }, n
            }, jindo.$Event.prototype.pos = function(t) {
                g_checkVarType(arguments, {
                    voi: [],
                    bol: ["bGetOffset:" + tBoolean]
                });
                var e = this._posEvent,
                    n = this.element.ownerDocument || document,
                    i = n.body,
                    o = n.documentElement,
                    r = [i.scrollLeft || o.scrollLeft, i.scrollTop || o.scrollTop],
                    s = {
                        clientX: e.clientX,
                        clientY: e.clientY,
                        pageX: "pageX" in e ? e.pageX : e.clientX + r[0] - i.clientLeft,
                        pageY: "pageY" in e ? e.pageY : e.clientY + r[1] - i.clientTop,
                        layerX: "offsetX" in e ? e.offsetX : e.layerX - 1,
                        layerY: "offsetY" in e ? e.offsetY : e.layerY - 1
                    };
                if (t && jindo.$Element) {
                    var a = jindo.$Element(this.element).offset();
                    s.offsetX = s.pageX - a.left, s.offsetY = s.pageY - a.top
                }
                return s
            }, jindo.$Event.prototype.stop = function(t) {
                g_checkVarType(arguments, {
                    voi: [],
                    num: ["nCancel:" + tNumeric]
                }), t = t || jindo.$Event.CANCEL_ALL;
                var e = window.event && window.event == this._globalEvent ? this._globalEvent : this._event,
                    n = !!(t & jindo.$Event.CANCEL_BUBBLE),
                    i = !!(t & jindo.$Event.CANCEL_DEFAULT);
                return this.canceled = !0, void 0 !== e.preventDefault && i && e.preventDefault(), void 0 !== e.stopPropagation && n && e.stopPropagation(), i && (e.returnValue = !1), n && (e.cancelBubble = !0), this
            }, jindo.$Event.prototype.stopDefault = function() {
                return this.stop(jindo.$Event.CANCEL_DEFAULT)
            }, jindo.$Event.prototype.stopBubble = function() {
                return this.stop(jindo.$Event.CANCEL_BUBBLE)
            }, jindo.$Event.CANCEL_BUBBLE = 1, jindo.$Event.CANCEL_DEFAULT = 2, jindo.$Event.CANCEL_ALL = 3, jindo.$Event.prototype.$value = function() {
                return this._event
            },
            function(t) {
                for (var e = "Touch", n = 0, i = t.length; n < i; n++) jindo.$Event.prototype[t[n] + e] = function(t) {
                    return function(e) {
                        if (this.isTouch) {
                            for (var n, i = [], o = this._event[t + "es"], r = o.length, s = 0; s < r; s++) n = o[s], i.push({
                                id: n.identifier,
                                event: this,
                                element: n.target,
                                _posEvent: n,
                                pos: jindo.$Event.prototype.pos
                            });
                            this[t] = function(e) {
                                var n = g_checkVarType(arguments, {
                                    "void": [],
                                    "4num": ["nIndex:" + tNumeric]
                                }, "$Event#" + t);
                                return n + "" == "void" ? i : i[e]
                            }
                        } else this[t] = function(e) {
                            throw new jindo.$Error(jindo.$Except.NOT_SUPPORT_METHOD, "$Event#" + t)
                        };
                        return this[t].apply(this, _toArray(arguments))
                    }
                }(t[0] + e)
            }(["changed", "target"]), jindo.$Element = function(t) {
                var e = arguments.callee;
                if (t && t instanceof e) return t;
                if (!(this instanceof e)) try {
                    return jindo.$Jindo._maxWarn(arguments.length, 1, "$" + tElement), new e(t)
                } catch (n) {
                    if (n instanceof TypeError) return null;
                    throw n
                }
                var i = jindo.$Jindo,
                    o = i.checkVarType(arguments, {
                        "4str": ["sID:" + tString],
                        "4nod": ["oEle:" + tNode],
                        "4doc": ["oEle:" + tDocument],
                        "4win": ["oEle:" + tWindow]
                    }, "$" + tElement);
                switch (o + "") {
                    case "4str":
                        t = jindo.$(t);
                        break;
                    default:
                        t = o.oEle
                }
                if (this._element = t, null == this._element) throw new TypeError("{not_found_element}");
                if (this._element.__jindo__id) this._key = this._element.__jindo__id;
                else try {
                    this._element.__jindo__id = this._key = _makeRandom()
                } catch (n) {}
                this.tag = (this._element.tagName || "").toLowerCase()
            }, jindo.$Element._eventBind = function(t, e, n, i) {
                t.addEventListener ? 9 == document.documentMode ? jindo.$Element._eventBind = function(t, e, n) {
                    /resize/.test(e) ? t.attachEvent("on" + e, n) : t.addEventListener(e, n, !!i)
                } : jindo.$Element._eventBind = function(t, e, n, i) {
                    t.addEventListener(e, n, !!i)
                } : jindo.$Element._eventBind = function(t, e, n) {
                    t.attachEvent("on" + e, n)
                }, jindo.$Element._eventBind(t, e, n, i)
            }, jindo.$Element._unEventBind = function(t, e, n) {
                t.removeEventListener ? 9 == document.documentMode ? jindo.$Element._unEventBind = function(t, e, n) {
                    /resize/.test(e) ? t.detachEvent("on" + e, n) : t.removeEventListener(e, n, !1)
                } : jindo.$Element._unEventBind = function(t, e, n) {
                    t.removeEventListener(e, n, !1)
                } : jindo.$Element._unEventBind = function(t, e, n) {
                    t.detachEvent("on" + e, n)
                }, jindo.$Element._unEventBind(t, e, n)
            }, jindo.$Element.prototype.$value = function() {
                return this._element
            }, jindo.$Element.prototype.visible = function(t, e) {
                var n = g_checkVarType(arguments, {
                    g: [],
                    s4bln: [jindo.$Jindo._F("bVisible:" + tBoolean)],
                    s4str: ["bVisible:" + tBoolean, "sDisplay:" + tString]
                }, "$Element#visible");
                switch (n + "") {
                    case "g":
                        return "none" != this._getCss(this._element, "display");
                    case "s4bln":
                        return this[t ? "show" : "hide"](), this;
                    case "s4str":
                        return this[t ? "show" : "hide"](e), this
                }
            }, jindo.$Element.prototype.show = function(t) {
                var e = g_checkVarType(arguments, {
                        "4voi": [],
                        "4str": ["sDisplay:" + tString]
                    }, "$Element#show"),
                    n = this._element.style,
                    i = "block",
                    o = {
                        p: i,
                        div: i,
                        form: i,
                        h1: i,
                        h2: i,
                        h3: i,
                        h4: i,
                        ol: i,
                        ul: i,
                        fieldset: i,
                        td: "table-cell",
                        th: "table-cell",
                        li: "list-item",
                        table: "table",
                        thead: "table-header-group",
                        tbody: "table-row-group",
                        tfoot: "table-footer-group",
                        tr: "table-row",
                        col: "table-column",
                        colgroup: "table-column-group",
                        caption: "table-caption",
                        dl: i,
                        dt: i,
                        dd: i
                    };
                try {
                    switch (e + "") {
                        case "4voi":
                            var r = o[this.tag];
                            n.display = r || "inline";
                            break;
                        case "4str":
                            n.display = t
                    }
                } catch (s) {
                    n.display = "block"
                }
                return this
            }, jindo.$Element.prototype.hide = function() {
                return this._element.style.display = "none", this
            }, jindo.$Element.prototype.toggle = function(t) {
                g_checkVarType(arguments, {
                    "4voi": [],
                    "4str": ["sDisplay:" + tString]
                }, "$Element#toggle");
                return this["none" == this._getCss(this._element, "display") ? "show" : "hide"].apply(this, arguments), this
            }, jindo.$Element.prototype.opacity = function(t) {
                var e, n, i = g_checkVarType(arguments, {
                        g: [],
                        s: ["nOpacity:" + tNumeric]
                    }, "$Element#opacity"),
                    o = this._element;
                switch (i + "") {
                    case "g":
                        return n = "none" != this._getCss(o, "display"), "undefined" != typeof o.filters ? (e = "undefined" == typeof o.filters.alpha ? n ? 100 : 0 : o.filters.alpha.opacity, e /= 100) : (e = parseFloat(o.style.opacity), isNaN(e) && (e = n ? 1 : 0)), e;
                    case "s":
                        return n = "none" != this._getCss(o, "display"), t = i.nOpacity, o.style.zoom = 1, t = Math.max(Math.min(t, 1), 0), "undefined" != typeof o.filters ? (t = Math.ceil(100 * t), "unknown" != typeof o.filters && "undefined" != typeof o.filters.alpha ? o.filters.alpha.opacity = t : o.style.filter = o.style.filter + " alpha(opacity=" + t + ")") : o.style.opacity = t, this
                }
            }, jindo.$Element.prototype.css = function(t, e) {
                var n = g_checkVarType(arguments, {
                        g: ["sName:" + tString],
                        s4str: [jindo.$Jindo._F("sName:" + tString), jindo.$Jindo._F("vValue:" + tString)],
                        s4num: ["sName:" + tString, "vValue:" + tNumeric],
                        s4obj: ["oObj:" + tHash]
                    }, "$Element#css"),
                    i = this._element;
                switch (n + "") {
                    case "s4str":
                    case "s4num":
                        var o = {};
                        o[t] = e, t = o;
                        break;
                    case "s4obj":
                        t = n.oObj;
                        break;
                    case "g":
                        var r = this._getCss;
                        if ("opacity" == t) return this.opacity();
                        if ((_JINDO_IS_FF || _JINDO_IS_OP) && ("backgroundPositionX" == t || "backgroundPositionY" == t)) {
                            var s = r(i, "backgroundPosition").split(/\s+/);
                            return "backgroundPositionX" == t ? s[0] : s[1]
                        }
                        if (!window.getComputedStyle && "backgroundPosition" == t) return r(i, "backgroundPositionX") + " " + r(i, "backgroundPositionY");
                        if (!_JINDO_IS_OP && window.getComputedStyle && ("padding" == t || "margin" == t)) {
                            var a = r(i, t + "Top"),
                                c = r(i, t + "Right"),
                                h = r(i, t + "Bottom"),
                                u = r(i, t + "Left");
                            return a == c && h == u ? a : a == h && c == u ? a + " " + c : a + " " + c + " " + h + " " + u
                        }
                        return r(i, t)
                }
                var l;
                for (var d in t)
                    if (t.hasOwnProperty(d)) {
                        if (l = t[d], !jindo.$Jindo.isString(l) && !jindo.$Jindo.isNumeric(l)) continue;
                        if ("opacity" == d) {
                            this.opacity(l);
                            continue
                        }
                        if ("cssFloat" == d && _JINDO_IS_IE && (d = "styleFloat"), !_JINDO_IS_FF && !_JINDO_IS_OP || "backgroundPositionX" != d && "backgroundPositionY" != d) this._setCss(i, d, l);
                        else {
                            var s = this.css("backgroundPosition").split(/\s+/);
                            l = "backgroundPositionX" == d ? l + " " + s[1] : s[0] + " " + l, this._setCss(i, "backgroundPosition", l)
                        }
                    } return this
            }, jindo.$Element.prototype._getCss = function(t, e) {
                var n;
                return n = window.getComputedStyle ? function(t, e) {
                    try {
                        "cssFloat" == e && (e = "float");
                        var n = t.ownerDocument || t.document || document,
                            i = t.style[e] || n.defaultView.getComputedStyle(t, null).getPropertyValue(e.replace(/([A-Z])/g, "-$1").toLowerCase());
                        return "textDecoration" == e && (i = i.replace(",", "")), i
                    } catch (o) {
                        throw new jindo.$Error((t.tagName || "document") + jindo.$Except.NOT_USE_CSS, "$Element#css")
                    }
                } : t.currentStyle ? function(t, e) {
                    try {
                        "cssFloat" == e && (e = "styleFloat");
                        var n = t.style[e];
                        if (n) return n;
                        var i = t.currentStyle;
                        return i ? i[e] : n
                    } catch (o) {
                        throw new jindo.$Error((t.tagName || "document") + jindo.$Except.NOT_USE_CSS, "$Element#css")
                    }
                } : function(t, e) {
                    try {
                        return "cssFloat" == e && _JINDO_IS_IE && (e = "styleFloat"), t.style[e]
                    } catch (n) {
                        throw new jindo.$Error((t.tagName || "document") + jindo.$Except.NOT_USE_CSS, "$Element#css")
                    }
                }, jindo.$Element.prototype._getCss = n, n(t, e)
            }, jindo.$Element.prototype._setCss = function(t, e, n) {
                "#top#left#right#bottom#".indexOf(e + "#") > 0 && ("number" == typeof n || /\d$/.test(n)) ? t.style[e] = parseInt(n, 10) + "px" : t.style[e] = n
            }, jindo.$Element.prototype.attr = function(t, e) {
                var n, i, o, r, s, a = g_checkVarType(arguments, {
                        g: ["sName:" + tString],
                        s4str: ["sName:" + tString, "vValue:" + tString],
                        s4num: ["sName:" + tString, "vValue:" + tNumeric],
                        s4nul: ["sName:" + tString, "vValue:" + tNull],
                        s4bln: ["sName:" + tString, "vValue:" + tBoolean],
                        s4arr: ["sName:" + tString, "vValue:" + tArray],
                        s4obj: [jindo.$Jindo._F("oObj:" + tHash)]
                    }, "$Element#attr"),
                    c = this._element,
                    h = null;
                switch (a + "") {
                    case "s4str":
                    case "s4nul":
                    case "s4num":
                    case "s4bln":
                    case "s4arr":
                        var u = {};
                        u[t] = e, t = u;
                        break;
                    case "s4obj":
                        t = a.oObj;
                        break;
                    case "g":
                        if ("class" == t || "className" == t) return c.className;
                        if ("style" == t) return c.style.cssText;
                        if ("checked" == t || "disabled" == t) return !!c[t];
                        if ("value" == t) {
                            if ("button" == this.tag) return c.getAttributeNode("value").value;
                            if ("select" == this.tag) {
                                if (c.multiple) {
                                    for (n = 0, i = c.options.length; n < i; n++) r = c.options[n], r.selected && (h || (h = []), e = r.value, "" == e && (e = r.text), h.push(e));
                                    return h
                                }
                                return c.selectedIndex < 0 ? null : (e = c.options[c.selectedIndex].value, "" == e ? c.options[c.selectedIndex].text : e)
                            }
                            return c.value
                        }
                        return "href" == t ? c.getAttribute(t, 2) : c.getAttribute(t)
                }
                o = function(t, e) {
                    var n, i, o, r = -1;
                    for (n = 0, i = t.length; n < i; n++)
                        if (o = t[n], o.value === e || o.text === e) {
                            r = n;
                            break
                        } return r
                };
                for (var l in t)
                    if (t.hasOwnProperty(l)) {
                        var d = t[l];
                        if (jindo.$Jindo.isNull(d))
                            if ("select" == this.tag)
                                if (c.multiple)
                                    for (n = 0, i = c.options.length; n < i; n++) c.options[n].selected = !1;
                                else c.selectedIndex = -1;
                        else c.removeAttribute(l);
                        else if ("class" == l || "className" == l) c.className = d;
                        else if ("style" == l) c.style.cssText = d;
                        else if ("checked" == l || "disabled" == l) c[l] = d;
                        else if ("value" == l)
                            if ("select" == this.tag)
                                if (c.multiple)
                                    if (jindo.$Jindo.isArray(d))
                                        for (s = jindo.$A(d), n = 0, i = c.options.length; n < i; n++) r = c.options[n], r.selected = s.has(r.value) || s.has(r.text);
                                    else c.selectedIndex = o(c.options, d);
                        else c.selectedIndex = o(c.options, d);
                        else c.value = d;
                        else c.setAttribute(l, d)
                    } return this
            }, jindo.$Element.prototype.width = function(t) {
                var e = g_checkVarType(arguments, {
                    g: [],
                    s: ["nWidth:" + tNumeric]
                }, "$Element#width");
                switch (e + "") {
                    case "g":
                        return this._element.offsetWidth;
                    case "s":
                        t = e.nWidth;
                        var n = this._element;
                        n.style.width = t + "px";
                        var i = n.offsetWidth;
                        if (i != t && 0 !== i) {
                            var o = 2 * t - i;
                            o > 0 && (n.style.width = o + "px")
                        }
                        return this
                }
            }, jindo.$Element.prototype.height = function(t) {
                var e = g_checkVarType(arguments, {
                    g: [],
                    s: ["nHeight:" + tNumeric]
                }, "$Element#height");
                switch (e + "") {
                    case "g":
                        return this._element.offsetHeight;
                    case "s":
                        t = e.nHeight;
                        var n = this._element;
                        n.style.height = t + "px";
                        var i = n.offsetHeight;
                        if (i != t && 0 !== i) {
                            var t = 2 * t - i;
                            t > 0 && (n.style.height = t + "px")
                        }
                        return this
                }
            }, jindo.$Element.prototype.className = function(t) {
                var e = g_checkVarType(arguments, {
                        g: [],
                        s: [jindo.$Jindo._F("sClass:" + tString)]
                    }, "$Element#className"),
                    n = this._element;
                switch (e + "") {
                    case "g":
                        return n.className;
                    case "s":
                        return n.className = t, this
                }
            }, jindo.$Element.prototype.hasClass = function(t) {
                var e = g_checkVarType;
                return this._element.classList ? jindo.$Element.prototype.hasClass = function(t) {
                    e(arguments, {
                        "4str": ["sClass:" + tString]
                    }, "$Element#hasClass");
                    return this._element.classList.contains(t)
                } : jindo.$Element.prototype.hasClass = function(t) {
                    e(arguments, {
                        "4str": ["sClass:" + tString]
                    }, "$Element#hasClass");
                    return (" " + this._element.className + " ").indexOf(" " + t + " ") > -1
                }, this.hasClass.apply(this, arguments)
            }, jindo.$Element.prototype.addClass = function(t) {
                for (var e, n = (g_checkVarType(arguments, {
                        "4str": ["sClass:" + tString]
                    }, "$Element#addClass"), this._element), i = n.className, o = (t + "").split(" "), r = o.length - 1; r >= 0; r--) e = o[r], (" " + i + " ").indexOf(" " + e + " ") == -1 && (i = i + " " + e);
                return n.className = i.replace(/\s+$/, "").replace(/^\s+/, ""), this
            }, jindo.$Element.prototype.removeClass = function(t) {
                for (var e = (g_checkVarType(arguments, {
                        "4str": ["sClass:" + tString]
                    }, "$Element#removeClass"), this._element), n = e.className, i = (t + "").split(" "), o = i.length - 1; o >= 0; o--) n = (" " + n + " ").replace(new RegExp("\\b" + i[o] + "\\s+", "g"), " ");
                return e.className = n.replace(/\s+$/, "").replace(/^\s+/, ""), this
            }, jindo.$Element.prototype.toggleClass = function(t, e) {
                var n = g_checkVarType;
                return this._element.classList ? jindo.$Element.prototype.toggleClass = function(t, e) {
                    var i = n(arguments, {
                        "4str": ["sClass:" + tString],
                        "4str2": ["sClass:" + tString, "sClass2:" + tString]
                    }, "$Element#toggleClass");
                    switch (i + "") {
                        case "4str":
                            this._element.classList.toggle(t + "");
                            break;
                        case "4str2":
                            t += "", e += "", this.hasClass(t) ? (this.removeClass(t), this.addClass(e)) : (this.addClass(t), this.removeClass(e))
                    }
                    return this
                } : jindo.$Element.prototype.toggleClass = function(t, e) {
                    n(arguments, {
                        "4str": ["sClass:" + tString],
                        "4str2": ["sClass:" + tString, "sClass2:" + tString]
                    }, "$Element#toggleClass");
                    return e = e || "", this.hasClass(t) ? (this.removeClass(t), e && this.addClass(e)) : (this.addClass(t), e && this.removeClass(e)), this
                }, this.toggleClass.apply(this, arguments)
            }, jindo.$Element.prototype.cssClass = function(t, e) {
                var n = g_checkVarType(arguments, {
                    g: ["sClass:" + tString],
                    s4bln: ["sClass:" + tString, "bCondition:" + tBoolean],
                    s4obj: ["oObj:" + tHash]
                }, "$Element#cssClass");
                switch (n + "") {
                    case "g":
                        return this.hasClass(n.sClass);
                    case "s4bln":
                        return n.bCondition ? this.addClass(n.sClass) : this.removeClass(n.sClass), this;
                    case "s4obj":
                        var i = this._element;
                        t = n.oObj;
                        var o = i.className;
                        for (var r in t) t.hasOwnProperty(r) && (t[r] ? (" " + o + " ").indexOf(" " + r + " ") == -1 && (o = (o + " " + r).replace(/^\s+/, "")) : (" " + o + " ").indexOf(" " + r + " ") > -1 && (o = (" " + o + " ").replace(" " + r + " ", " ").replace(/\s+$/, "").replace(/^\s+/, "")));
                        return i.className = o, this
                }
            }, jindo.$Element.prototype.text = function(t) {
                var e, n, i = g_checkVarType(arguments, {
                        g: [],
                        s4str: ["sText:" + tString],
                        s4num: [jindo.$Jindo._F("sText:" + tNumeric)],
                        s4bln: ["sText:" + tBoolean]
                    }, "$Element#text"),
                    o = this._element,
                    r = this.tag;
                switch (i + "") {
                    case "g":
                        return e = void 0 !== o.textContent ? "textContent" : "innerText", "textarea" != r && "input" != r || (e = "value"), o[e];
                    case "s4str":
                    case "s4num":
                    case "s4bln":
                        try {
                            if ("textarea" == r || "input" == r) o.value = t + "";
                            else {
                                var n = o.ownerDocument || o.document || document;
                                this.empty(), o.appendChild(n.createTextNode(t))
                            }
                        } catch (s) {
                            return o.innerHTML = (t + "").replace(/&/g, "&amp;").replace(/</g, "&lt;")
                        }
                        return this
                }
            }, jindo.$Element.prototype.html = function(t) {
                var e = _JINDO_IS_IE,
                    n = _JINDO_IS_FF,
                    i = {
                        g: [],
                        s4str: [jindo.$Jindo._F("sText:" + tString)],
                        s4num: ["sText:" + tNumeric],
                        s4bln: ["sText:" + tBoolean]
                    },
                    o = g_checkVarType;
                return e ? jindo.$Element.prototype.html = function(t) {
                    var e = o(arguments, i, "$Element#html");
                    switch (e + "") {
                        case "g":
                            return this._element.innerHTML;
                        case "s4str":
                        case "s4num":
                        case "s4bln":
                            t += "", jindo.cssquery && jindo.cssquery.release();
                            for (var n = this._element; n.firstChild;) n.removeChild(n.firstChild);
                            var r, s = "R" + (new Date).getTime() + parseInt(1e5 * Math.random(), 10),
                                a = n.ownerDocument || n.document || document,
                                c = n.tagName.toLowerCase();
                            switch (c) {
                                case "select":
                                case "table":
                                    r = a.createElement("div"), r.innerHTML = "<" + c + ' class="' + s + '">' + t + "</" + c + ">";
                                    break;
                                case "tr":
                                case "thead":
                                case "tbody":
                                case "colgroup":
                                    r = a.createElement("div"), r.innerHTML = "<table><" + c + ' class="' + s + '">' + t + "</" + c + "></table>";
                                    break;
                                default:
                                    n.innerHTML = t
                            }
                            if (r) {
                                var h;
                                for (h = r.firstChild; h && h.className != s; h = h.firstChild);
                                if (h) {
                                    for (var u, l = !0; u = n.firstChild;) u.removeNode(!0);
                                    for (var u = h.firstChild; u; u = h.firstChild)
                                        if ("select" == c) {
                                            var d = u.cloneNode(!0);
                                            u.selected && l && (l = !1, d.selected = !0), n.appendChild(d), u.removeNode(!0)
                                        } else n.appendChild(u);
                                    r.removeNode && r.removeNode(!0)
                                }
                                r = null
                            }
                            return this
                    }
                } : n ? jindo.$Element.prototype.html = function(t) {
                    var e = o(arguments, i, "$Element#html");
                    switch (e + "") {
                        case "g":
                            return this._element.innerHTML;
                        case "s4str":
                        case "s4num":
                        case "s4bln":
                            t += "";
                            var n = this._element;
                            if (n.parentNode) n.innerHTML = t;
                            else {
                                var r, s = "R" + (new Date).getTime() + parseInt(1e5 * Math.random(), 10),
                                    a = n.ownerDocument || n.document || document,
                                    c = n.tagName.toLowerCase();
                                switch (c) {
                                    case "select":
                                    case "table":
                                        r = a.createElement("div"), r.innerHTML = "<" + c + ' class="' + s + '">' + t + "</" + c + ">";
                                        break;
                                    case "tr":
                                    case "thead":
                                    case "tbody":
                                    case "colgroup":
                                        r = a.createElement("div"), r.innerHTML = "<table><" + c + ' class="' + s + '">' + t + "</" + c + "></table>";
                                        break;
                                    default:
                                        n.innerHTML = t
                                }
                                if (r) {
                                    var h;
                                    for (h = r.firstChild; h && h.className != s; h = h.firstChild);
                                    if (h) {
                                        for (var u; u = n.firstChild;) u.removeNode(!0);
                                        for (var u = h.firstChild; u; u = h.firstChild) n.appendChild(u);
                                        r.removeNode && r.removeNode(!0)
                                    }
                                    r = null
                                }
                            }
                            return this
                    }
                } : jindo.$Element.prototype.html = function(t) {
                    var e = o(arguments, i, "$Element#html");
                    switch (e + "") {
                        case "g":
                            return this._element.innerHTML;
                        case "s4str":
                        case "s4num":
                        case "s4bln":
                            t += "";
                            var n = this._element;
                            return n.innerHTML = t, this
                    }
                }, this.html.apply(this, arguments)
            }, jindo.$Element.prototype.outerHTML = function() {
                var t = this._element;
                if (void 0 !== t.outerHTML) return t.outerHTML;
                var e = t.ownerDocument || t.document || document,
                    n = e.createElement("div"),
                    i = t.parentNode;
                if (!i) return t.innerHTML;
                i.insertBefore(n, t), n.style.display = "none", n.appendChild(t);
                var o = n.innerHTML;
                return i.insertBefore(t, n), i.removeChild(n), o
            }, jindo.$Element.prototype.toString = jindo.$Element.prototype.outerHTML, jindo.$Element.prototype.attach = function(t, e) {
                g_checkVarType(arguments, {
                    "4str": ["sEvent:" + tString, "fpCallback:" + tFunction]
                }, "$Element#attach");
                return this._add("normal", t, null, e)
            }, jindo.$Element.prototype.detach = function(t, e) {
                g_checkVarType(arguments, {
                    group_for_string: ["sEvent:" + tString],
                    "4fun": ["sEvent:" + tString, "fpCallback:" + tFunction]
                }, "$Element#detach");
                return this._del("normal", t, null, e)
            }, jindo.$Element.prototype.delegate = function(t, e, n) {
                g_checkVarType(arguments, {
                    "4str": ["sEvent:" + tString, "vFilter:" + tString, "fpCallback:" + tFunction],
                    "4fun": ["sEvent:" + tString, "vFilter:" + tFunction, "fpCallback:" + tFunction]
                }, "$Element#delegate");
                return this._add("delegate", t, e, n)
            }, jindo.$Element.prototype.undelegate = function(t, e, n) {
                g_checkVarType(arguments, {
                    "4str": ["sEvent:" + tString, "vFilter:" + tString, "fpCallback:" + tFunction],
                    "4fun": ["sEvent:" + tString, "vFilter:" + tFunction, "fpCallback:" + tFunction],
                    group_for_string: ["sEvent:" + tString, "vFilter:" + tString],
                    group_for_function: ["sEvent:" + tString, "vFilter:" + tFunction]
                }, "$Element#undelegate");
                return this._del("delegate", t, e, n)
            }, jindo.$Element.prototype._add = function(t, e, n, i) {
                var o = jindo.$Element.eventManager,
                    r = e;
                e = e.toLowerCase();
                var s = o.splitGroup(e);
                e = s.event;
                var a = s.group,
                    c = this._element.ownerDocument || this._element.document || document;
                if ("domready" == e && jindo.$Jindo.isWindow(this._element)) return jindo.$Element(c).attach(e, i), this;
                if ("load" == e && this._element === c) return jindo.$Element(window).attach(e, i), this;
                if (!document.addEventListener && "domready" == e) {
                    if (window.top != window) throw jindo.$Error(jindo.$Except.NOT_WORK_DOMREADY, "$Element#attach");
                    return jindo.$Element._domready(this._element, i), this
                }
                return e = o.revisionEvent(t, e, r),
                    i = o.revisionCallback(t, e, i), o.isInit(this._key) || o.init(this._key, this._element), o.hasEvent(this._key, e, r) || o.initEvent(this, e, a), o.hasGroup(this._key, e, a) || o.initGroup(this._key, e, a), o.addEventListener(this._key, e, a, t, n, i), this
            }, jindo.$Element.prototype._del = function(t, e, n, i) {
                var o = jindo.$Element.eventManager,
                    r = e;
                e = e.toLowerCase();
                var s = o.splitGroup(e);
                e = s.event;
                var a = s.group,
                    c = this._element.ownerDocument || this._element.document || document;
                if ("domready" == e && jindo.$Jindo.isWindow(this._element)) return jindo.$Element(c).detach(e, i), this;
                if ("load" == e && this._element === c) return jindo.$Element(window).detach(e, i), this;
                if (e = o.revisionEvent(t, e, r), !document.addEventListener && "domready" == e) {
                    for (var h = [], u = jindo.$Element._domready.list, l = 0, d = u.length; l < d; l++) u[l] != i && h.push(u[l]);
                    return jindo.$Element._domready.list = h, this
                }
                var f = "_jindo_event_none";
                if (a === f && !jindo.$Jindo.isFunction(i)) throw new jindo.$Error(jindo.$Except.HAS_FUNCTION_FOR_GROUP, "$Element#" + ("normal" == t ? "detach" : "delegate"));
                return o.removeEventListener(this._key, e, a, t, n, i), this
            };
        var mouseTouchPointerEvent = function(t) {
            var e = {};
            return window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0 ? e = {
                mousedown: "MSPointerDown",
                mouseup: "MSPointerUp",
                mousemove: "MSPointerMove",
                mouseover: "MSPointerOver",
                mouseout: "MSPointerOut",
                touchstart: "MSPointerDown",
                touchend: "MSPointerUp",
                touchmove: "MSPointerMove",
                pointerdown: "MSPointerDown",
                pointerup: "MSPointerUp",
                pointermove: "MSPointerMove",
                pointerover: "MSPointerOver",
                pointerout: "MSPointerOut",
                pointercancel: "MSPointerCancel"
            } : _JINDO_IS_MO && (e = {
                mousedown: "touchstart",
                mouseup: "touchend",
                mousemove: "touchmove",
                pointerdown: "touchstart",
                pointerup: "touchend",
                pointermove: "touchmove"
            }), (mouseTouchPointerEvent = function(t) {
                return e[t] ? e[t] : t
            })(t)
        };
        if (jindo.$Element.eventManager = function() {
                function t(t, e, n) {
                    return function() {
                        var i = _slice.call(arguments, 0);
                        return n.length && (i = n.concat(i)), t.apply(e, i)
                    }
                }
                var e = {},
                    n = "_jindo_event_none";
                return {
                    revisionCallback: function(t, e, n) {
                        if (void 0 !== document.addEventListener && ("mouseenter" == e || "mouseleave" == e) || _JINDO_IS_IE && "delegate" == t && ("mouseenter" == e || "mouseleave" == e)) {
                            var i = jindo.$Element.eventManager._fireWhenElementBoundary(t, n);
                            i._origin_ = n, n = i
                        }
                        return n
                    },
                    _fireWhenElementBoundary: function(t, e) {
                        return function(n) {
                            var i = n.relatedElement ? jindo.$Element(n.relatedElement) : null,
                                o = n.currentElement;
                            "delegate" == t && (o = n.element), i && (i.isEqual(o) || i.isChildOf(o)) || e(n)
                        }
                    },
                    revisionEvent: function(t, e, n) {
                        return void 0 !== document.addEventListener ? this.revisionEvent = function(t, e, n) {
                            if (/^ms/i.test(n)) return n;
                            var i = jindo.$Event.hook(e);
                            if (i) return jindo.$Jindo.isFunction(i) ? i() : i;
                            if (e = e.toLowerCase(), "domready" == e || "domcontentloaded" == e) e = "DOMContentLoaded";
                            else if ("mousewheel" != e || _JINDO_IS_WK || _JINDO_IS_OP || _JINDO_IS_IE)
                                if ("mouseenter" != e || _JINDO_IS_IE && "delegate" != t)
                                    if ("mouseleave" != e || _JINDO_IS_IE && "delegate" != t) {
                                        if ("transitionend" == e || "transitionstart" == e) {
                                            var o = e.replace("transition", "");
                                            o = o.substr(0, 1).toUpperCase() + o.substr(1), void 0 !== document.body.style.WebkitTransition ? e = "webkitTransition" + o : void 0 !== document.body.style.OTransition ? e = "otrantion" + o.toLowerCase() : void 0 !== document.body.style.msTransition && (e = "MSTransition" + o)
                                        } else if ("animationstart" == e || "animationend" == e || "animationiteration" == e) {
                                            var o = e.replace("animation", "");
                                            o = o.substr(0, 1).toUpperCase() + o.substr(1), void 0 !== document.body.style.WebkitAnimationName ? e = "webkitAnimation" + o : void 0 !== document.body.style.OAnimationName ? e = "oanimation" + o.toLowerCase() : void 0 !== document.body.style.msAnimationName && (e = "MSAnimation" + o)
                                        }
                                    } else e = "mouseout";
                            else e = "mouseover";
                            else e = "DOMMouseScroll";
                            return mouseTouchPointerEvent(e)
                        } : this.revisionEvent = function(t, e, n) {
                            if (/^ms/i.test(n)) return n;
                            var i = jindo.$Event.hook(e);
                            return i ? jindo.$Jindo.isFunction(i) ? i() : i : ("delegate" == t && "mouseenter" == e ? e = "mouseover" : "delegate" == t && "mouseleave" == e && (e = "mouseout"), mouseTouchPointerEvent(e))
                        }, this.revisionEvent(t, e, n)
                    },
                    test: function() {
                        return e
                    },
                    isInit: function(t) {
                        return !!e[t]
                    },
                    init: function(t, n) {
                        e[t] = {
                            ele: n,
                            event: {}
                        }
                    },
                    getEventConfig: function(t) {
                        return e[t]
                    },
                    hasEvent: function(t, n, i) {
                        if (!document.addEventListener && "domready" == n.toLowerCase()) return !!jindo.$Element._domready.list && jindo.$Element._domready.list.length > 0;
                        n = jindo.$Element.eventManager.revisionEvent("", n, i);
                        try {
                            return !!e[t].event[n]
                        } catch (o) {
                            return !1
                        }
                    },
                    hasGroup: function(t, n, i) {
                        return !!e[t].event[n].type[i]
                    },
                    initEvent: function(n, i, o) {
                        var r = n._key,
                            s = e[r].event,
                            a = t(function(t, e) {
                                e = e || window.event, void 0 === e.currentTarget && (e.currentTarget = this._element);
                                var n = jindo.$Event(e);
                                n.currentElement || (n.currentElement = this._element);
                                var i = n.element,
                                    o = jindo.$Element.eventManager,
                                    r = o.getEventConfig(n.currentElement.__jindo__id),
                                    s = r.event[t].type;
                                for (var a in s)
                                    if (s.hasOwnProperty(a)) {
                                        for (var c = s[a].normal, h = 0, u = c.length; h < u; h++) c[h].call(this, n);
                                        var l, d, f = s[a].delegate;
                                        for (var p in f)
                                            if (f.hasOwnProperty(p) && (l = f[p].checker(i), l[0])) {
                                                d = f[p].callback, n.element = l[1];
                                                for (var _ = 0, m = d.length; _ < m; _++) d[_].call(this, n)
                                            }
                                    }
                            }, n, [i]);
                        s[i] = {
                            listener: a,
                            type: {}
                        }, jindo.$Element._eventBind(n._element, i, a, !1)
                    },
                    initGroup: function(t, n, i) {
                        var o = e[t].event[n].type;
                        o[i] = {
                            normal: [],
                            delegate: {}
                        }
                    },
                    addEventListener: function(t, n, i, o, r, s) {
                        var a = e[t].event[n].type[i];
                        "normal" === o ? a.normal.push(s) : "delegate" === o && (this.hasDelegate(a, r) || this.initDelegate(e[t].ele, a, r), this.addDelegate(a, r, s))
                    },
                    hasDelegate: function(t, e) {
                        return !!t.delegate[e]
                    },
                    containsElement: function(t, e, n) {
                        for (var i = jindo.$$(n, t), o = 0, r = i.length; o < r; o++)
                            if (i[o] == e) return !0;
                        return !1
                    },
                    initDelegate: function(e, n, i) {
                        var o;
                        o = jindo.$Jindo.isString(i) ? t(function(t, e, n) {
                            var i = n,
                                o = this.containsElement(t, n, e);
                            if (!o)
                                for (var r = this._getParent(t, n), s = 0, a = r.length; s < a; s++)
                                    if (i = r[s], this.containsElement(t, i, e)) {
                                        o = !0;
                                        break
                                    } return [o, i]
                        }, this, [e, i]) : t(function(t, e, n) {
                            var i = n,
                                o = e(t, n);
                            if (!o)
                                for (var r = this._getParent(t, n), s = 0, a = r.length; s < a; s++)
                                    if (i = r[s], e(t, i)) {
                                        o = !0;
                                        break
                                    } return [o, i]
                        }, this, [e, i]), n.delegate[i] = {
                            checker: o,
                            callback: []
                        }
                    },
                    addDelegate: function(t, e, n) {
                        t.delegate[e].callback.push(n)
                    },
                    removeEventListener: function(t, i, o, r, s, a) {
                        var c;
                        try {
                            c = e[t].event[i].type[o]
                        } catch (h) {
                            return
                        }
                        var u, l = [];
                        if (u = "normal" === r ? c.normal : c.delegate[s].callback, i == n || jindo.$Jindo.isFunction(a))
                            for (var d = 0, f = u.length; d < f; d++)(u[d]._origin_ || u[d]) != a && l.push(u[d]);
                        "normal" === r ? (delete c.normal, c.normal = l) : "delegate" === r && (delete c.delegate[s].callback, c.delegate[s].callback = l), this.cleanUp(t, i)
                    },
                    cleanUpAll: function() {
                        for (var t in e) e.hasOwnProperty(t) && this.cleanUpUsingKey(t, !0)
                    },
                    cleanUpUsingKey: function(t, n) {
                        var i;
                        if (e[t] && e[t].event) {
                            i = e[t].event;
                            for (var o in i) i.hasOwnProperty(o) && this.cleanUp(t, o, n)
                        }
                    },
                    cleanUp: function(t, n, i) {
                        var o;
                        try {
                            o = e[t].event[n].type
                        } catch (r) {
                            return
                        }
                        var s, a = !1;
                        if (!i)
                            for (var c in o)
                                if (o.hasOwnProperty(c)) {
                                    if (s = o[c], s.normal.length) {
                                        a = !0;
                                        break
                                    }
                                    var h = s.delegate;
                                    for (var u in h)
                                        if (h.hasOwnProperty(u) && h[u].callback.length) {
                                            a = !0;
                                            break
                                        } if (a) break
                                } if (!a) {
                            jindo.$Element._unEventBind(e[t].ele, n, e[t].event[n].listener), delete e[t].event[n];
                            var l = !0,
                                d = e[t].event;
                            for (var f in d)
                                if (d.hasOwnProperty(f)) {
                                    l = !1;
                                    break
                                } l && delete e[t]
                        }
                    },
                    splitGroup: function(t) {
                        var e = /\s*(.+?)\s*\(\s*(.*?)\s*\)/.exec(t);
                        return e ? {
                            event: e[1].toLowerCase(),
                            group: e[2].toLowerCase()
                        } : {
                            event: t.toLowerCase(),
                            group: n
                        }
                    },
                    _getParent: function(t, e) {
                        for (var n = t, i = [], o = null, r = e.ownerDocument || e.document || document; e.parentNode && o != n && (o = e.parentNode, o != r.documentElement);) i[i.length] = o, e = o;
                        return i
                    }
                }
            }(), jindo.$Element._domready = function(t, e) {
                if (void 0 === jindo.$Element._domready.list) {
                    var n = null;
                    jindo.$Element._domready.list = [e];
                    var i = !1,
                        o = function() {
                            if (!i) {
                                i = !0;
                                for (var e = jindo.$Element._domready.list.concat(), o = {
                                        type: "domready",
                                        target: t,
                                        currentTarget: t
                                    }; n = e.shift();) n(o)
                            }
                        };
                    ! function() {
                        try {
                            t.documentElement.doScroll("left")
                        } catch (e) {
                            return void setTimeout(arguments.callee, 50)
                        }
                        o()
                    }(), t.onreadystatechange = function() {
                        "complete" == t.readyState && (t.onreadystatechange = null, o())
                    }
                } else jindo.$Element._domready.list.push(e)
            }, jindo.$Jindo.isUndefined(window) || _j_ag.indexOf("IEMobile") == -1 && _j_ag.indexOf("Mobile") > -1 && _JINDO_IS_SP || new jindo.$Element(window).attach("unload", function(t) {
                jindo.$Element.eventManager.cleanUpAll()
            }), jindo.$Element._getTransition = function() {
                var t = !1,
                    e = "";
                return document.body.style.trasition ? (t = !0, e = "trasition") : void 0 !== document.body.style.msTransition ? (t = !0, e = "MSTransition") : void 0 !== document.body.style.webkitTransition ? (t = !0, e = "webkitTransition") : void 0 !== document.body.style.otransition && (t = !0, e = "otransition"), (jindo.$Element._getTransition = function() {
                    return {
                        hasTransition: t,
                        name: e
                    }
                })()
            }, jindo.$Element.prototype.appear = function(t, e) {
                function n() {
                    var n = g_checkVarType(arguments, {
                        "4voi": [],
                        "4num": ["nDuration:" + tNumeric],
                        "4fun": ["nDuration:" + tNumeric, "fpCallback:" + tFunction]
                    }, "$Element#appear");
                    switch (n + "") {
                        case "4voi":
                            t = .3, e = function() {};
                            break;
                        case "4num":
                            t = n.nDuration, e = function() {};
                            break;
                        case "4fun":
                            t = n.nDuration, e = n.fpCallback
                    }
                    return [t, e]
                }
                var i = jindo.$Element._getTransition();
                return i.hasTransition ? jindo.$Element.prototype.appear = function(t, e) {
                    var o = n.apply(this, _toArray(arguments));
                    t = o[0], e = o[1];
                    var r = this,
                        s = this._element,
                        a = i.name,
                        c = function() {
                            r.show(), s.style[a + "Property"] = "", s.style[a + "Duration"] = "", s.style[a + "Timing" + tFunction] = "", s.style.opacity = "", e.call(r, r), s.removeEventListener(a + "End", arguments.callee, !1)
                        };
                    return this.visible() || (s.style.opacity = s.style.opacity || 0, r.show()), s.addEventListener(a + "End", c, !1), s.style[a + "Property"] = "opacity", s.style[a + "Duration"] = t + "s", s.style[a + "Timing" + tFunction] = "linear", setTimeout(function() {
                        s.style.opacity = "1"
                    }, 1), this
                } : jindo.$Element.prototype.appear = function(t, e) {
                    var i = n.apply(this, _toArray(arguments));
                    t = i[0], e = i[1];
                    var o = this,
                        r = this.opacity();
                    if ("none" == this._getCss(this._element, "display") && (r = 0), 1 == r) return this;
                    try {
                        clearTimeout(this._fade_timer)
                    } catch (s) {}
                    var a = (1 - r) / (100 * (t || .3)),
                        c = function() {
                            r += a, o.opacity(r), r >= 1 ? (o._element.style.filter = "", e.call(o, o)) : o._fade_timer = setTimeout(c, 10)
                        };
                    return this.show(), c(), this
                }, this.appear.apply(this, arguments)
            }, jindo.$Element.prototype.disappear = function(t, e) {
                function n() {
                    var n = g_checkVarType(arguments, {
                        "4voi": [],
                        "4num": ["nDuration:" + tNumeric],
                        "4fun": ["nDuration:" + tNumeric, "fpCallback:" + tFunction]
                    }, "$Element#disappear");
                    switch (n + "") {
                        case "4voi":
                            t = .3, e = function() {};
                            break;
                        case "4num":
                            t = n.nDuration, e = function() {};
                            break;
                        case "4fun":
                            t = n.nDuration, e = n.fpCallback
                    }
                    return [t, e]
                }
                var i = jindo.$Element._getTransition();
                return i.hasTransition ? jindo.$Element.prototype.disappear = function(t, e) {
                    var o = n.apply(this, _toArray(arguments));
                    t = o[0], e = o[1];
                    var r = this,
                        s = i.name,
                        a = function() {
                            r.hide(), c.style[s + "Property"] = "", c.style[s + "Duration"] = "", c.style[s + "Timing" + tFunction] = "", c.style.opacity = "", e.call(r, r), this.removeEventListener(s + "End", arguments.callee, !1)
                        },
                        c = this._element;
                    return c.addEventListener(s + "End", a, !1), c.style[s + "Property"] = "opacity", c.style[s + "Duration"] = t + "s", c.style[s + "Timing" + tFunction] = "linear", setTimeout(function() {
                        c.style.opacity = "0"
                    }, 1), this
                } : jindo.$Element.prototype.disappear = function(t, e) {
                    var i = n.apply(this, _toArray(arguments));
                    t = i[0], e = i[1];
                    var o = this,
                        r = this.opacity();
                    if (0 == r) return this;
                    try {
                        clearTimeout(this._fade_timer)
                    } catch (s) {}
                    var a = r / (100 * (t || .3)),
                        c = function() {
                            r -= a, o.opacity(r), r <= 0 ? (o._element.style.display = "none", o.opacity(1), e.call(o, o)) : o._fade_timer = setTimeout(c, 10)
                        };
                    return c(), this
                }, this.disappear.apply(this, arguments)
            }, jindo.$Element.prototype.offset = function(t, e) {
                var n = g_checkVarType(arguments, {
                    g: [],
                    s: ["nTop:" + tNumeric, "nLeft:" + tNumeric]
                }, "$Element#offset");
                switch (n + "") {
                    case "g":
                        return this.offset_get();
                    case "s":
                        return this.offset_set(n.nTop, n.nLeft)
                }
            }, jindo.$Element.prototype.offset_set = function(t, e) {
                var n = this._element;
                isNaN(parseFloat(this._getCss(n, "top"))) && (n.style.top = "0px"), isNaN(parseFloat(this._getCss(n, "left"))) && (n.style.left = "0px");
                var i = this.offset_get(),
                    o = {
                        top: t - i.top,
                        left: e - i.left
                    };
                return n.style.top = parseFloat(this._getCss(n, "top")) + o.top + "px", n.style.left = parseFloat(this._getCss(n, "left")) + o.left + "px", this
            }, jindo.$Element.prototype.offset_get = function(t, e) {
                var n = this._element,
                    i = null,
                    o = _JINDO_IS_SP,
                    r = _JINDO_IS_IE,
                    s = 0;
                r && (s = document.documentMode ? document.documentMode : navigator.userAgent.match(/(?:MSIE) ([0-9.]+)/)[1]);
                var a = function(t) {
                        for (var e = {
                                left: 0,
                                top: 0
                            }, n = t, i = n.offsetParent; n = n.parentNode;) n.offsetParent && (e.left -= n.scrollLeft, e.top -= n.scrollTop), n == i && (e.left += t.offsetLeft + n.clientLeft, e.top += t.offsetTop + n.clientTop, n.offsetParent || (e.left += n.offsetLeft, e.top += n.offsetTop), i = n.offsetParent, t = n);
                        return e
                    },
                    c = function(t) {
                        var e = {
                                left: 0,
                                top: 0
                            },
                            n = t.ownerDocument || t.document || document,
                            o = n.documentElement,
                            a = n.body;
                        if (t.getBoundingClientRect) {
                            if (!i) {
                                var c = window == top;
                                if (!c) try {
                                    c = window.frameElement && 1 == window.frameElement.frameBorder
                                } catch (h) {}
                                r && s < 8 && window.external && c ? (i = {
                                    left: 2,
                                    top: 2
                                }, oBase = null) : i = {
                                    left: 0,
                                    top: 0
                                }
                            }
                            var u;
                            try {
                                u = t.getBoundingClientRect()
                            } catch (h) {
                                u = {
                                    left: 0,
                                    top: 0
                                }
                            }
                            t !== o && t !== a && (e.left = u.left - i.left, e.top = u.top - i.top, e.left += o.scrollLeft || a.scrollLeft, e.top += o.scrollTop || a.scrollTop)
                        } else if (n.getBoxObjectFor) {
                            var u = n.getBoxObjectFor(t),
                                l = n.getBoxObjectFor(o || a);
                            e.left = u.screenX - l.screenX, e.top = u.screenY - l.screenY
                        } else {
                            for (var d = t; d; d = d.offsetParent) e.left += d.offsetLeft, e.top += d.offsetTop;
                            for (var d = t.parentNode; d && "BODY" != d.tagName; d = d.parentNode) "TR" == d.tagName && (e.top += 2), e.left -= d.scrollLeft, e.top -= d.scrollTop
                        }
                        return e
                    };
                return (o ? a : c)(n)
            }, jindo.$Element.prototype.evalScripts = function(sHTML) {
                var oArgs = g_checkVarType(arguments, {
                        "4str": ["sHTML:" + tString]
                    }, "$Element#evalScripts"),
                    aJS = [];
                return sHTML = sHTML.replace(new RegExp("<script(\\s[^>]+)*>(.*?)</script>", "gi"), function(t, e, n) {
                    return aJS.push(n), ""
                }), eval(aJS.join("\n")), this
            }, jindo.$Element._common = function(t, e) {
                try {
                    return jindo.$Element(t)._element
                } catch (n) {
                    throw TypeError(n.message.replace(/\$Element/g, "$Element#" + e).replace(/Element\.html/g, "Element.html#" + e))
                }
            }, jindo.$Element._prepend = function(t, e) {
                var n = t.childNodes;
                n.length > 0 ? t.insertBefore(e, n[0]) : t.appendChild(e)
            }, jindo.$Element.prototype.append = function(t) {
                return this._element.appendChild(jindo.$Element._common(t, "append")), this
            }, jindo.$Element.prototype.prepend = function(t) {
                return jindo.$Element._prepend(this._element, jindo.$Element._common(t, "prepend")), this
            }, jindo.$Element.prototype.replace = function(t) {
                t = jindo.$Element._common(t, "replace"), jindo.cssquery && jindo.cssquery.release();
                var e = this._element,
                    n = e.parentNode;
                if (n && n.replaceChild) return n.replaceChild(t, e), this;
                var i = t;
                return n.insertBefore(i, e), n.removeChild(e), this
            }, jindo.$Element.prototype.appendTo = function(t) {
                return jindo.$Element._common(t, "appendTo").appendChild(this._element), this
            }, jindo.$Element.prototype.prependTo = function(t) {
                return jindo.$Element._prepend(jindo.$Element._common(t, "prependTo"), this._element), this
            }, jindo.$Element.prototype.before = function(t) {
                var e = jindo.$Element._common(t, "before");
                return this._element.parentNode.insertBefore(e, this._element), this
            }, jindo.$Element.prototype.after = function(t) {
                return t = jindo.$Element._common(t, "after"), this.before(t), jindo.$Element(t).before(this), this
            }, jindo.$Element.prototype.parent = function(t, e) {
                var n = g_checkVarType(arguments, {
                        "4voi": [],
                        "4fun": ["fpFunc:" + tFunction],
                        "4nul": ["fpFunc:" + tNull],
                        for_function_number: ["fpFunc:" + tFunction, "nLimit:" + tNumeric],
                        for_null_number: ["fpFunc:" + tNull, "nLimit:" + tNumeric]
                    }, "$Element#parent"),
                    i = this._element;
                switch (n + "") {
                    case "4voi":
                        return i.parentNode ? jindo.$Element(i.parentNode) : null;
                    case "4fun":
                    case "4nul":
                        e = -1;
                        break;
                    case "for_function_number":
                    case "for_null_number":
                        0 == n.nLimit && (e = -1)
                }
                for (var o = [], r = null; i.parentNode && 0 != e--;) {
                    try {
                        r = jindo.$Element(i.parentNode)
                    } catch (i) {
                        r = null
                    }
                    if (i.parentNode == document.documentElement) break;
                    (!t || t && t.call(this, r)) && (o[o.length] = r), i = i.parentNode
                }
                return o
            }, jindo.$Element.prototype.child = function(t, e) {
                var n = g_checkVarType(arguments, {
                        "4voi": [],
                        "4fun": ["fpFunc:" + tFunction],
                        "4nul": ["fpFunc:" + tNull],
                        for_function_number: ["fpFunc:" + tFunction, "nLimit:" + tNumeric],
                        for_null_number: ["fpFunc:" + tNull, "nLimit:" + tNumeric]
                    }, "$Element#child"),
                    i = this._element,
                    o = [],
                    r = null;
                switch (n + "") {
                    case "4voi":
                        for (var s = i.childNodes, a = [], c = 0, h = s.length; c < h; c++)
                            if (1 == s[c].nodeType) try {
                                a.push(jindo.$Element(s[c]))
                            } catch (i) {
                                a.push(null)
                            }
                        return a;
                    case "4fun":
                    case "4nul":
                        e = -1;
                        break;
                    case "for_function_number":
                    case "for_null_number":
                        0 == n.nLimit && (e = -1)
                }
                return (r = function(e, n, i) {
                    for (var s = null, a = null, c = 0; c < e.childNodes.length; c++)
                        if (s = e.childNodes[c], 1 == s.nodeType) {
                            try {
                                a = jindo.$Element(e.childNodes[c])
                            } catch (h) {
                                a = null
                            }(!t || t && t.call(i, a)) && (o[o.length] = a), 0 != n && r(e.childNodes[c], n - 1)
                        }
                })(i, e - 1, this), o
            }, jindo.$Element.prototype.prev = function(t) {
                var e = g_checkVarType(arguments, {
                        "4voi": [],
                        "4fun": ["fpFunc:" + tFunction],
                        "4nul": ["fpFunc:" + tNull]
                    }, "$Element#prev"),
                    n = this._element,
                    i = [];
                switch (e + "") {
                    case "4voi":
                        if (!n) return null;
                        do
                            if (n = n.previousSibling, n && 1 == n.nodeType) try {
                                return null == n ? null : jindo.$Element(n)
                            } catch (n) {
                                return null
                            }
                        while (n);
                        try {
                            return null == n ? null : jindo.$Element(n)
                        } catch (n) {
                            return null
                        }
                    case "4fun":
                    case "4nul":
                        if (!n) return i;
                        do
                            if (n = n.previousSibling, n && 1 == n.nodeType && (!t || t.call(this, n))) try {
                                null == n ? i[i.length] = null : i[i.length] = jindo.$Element(n)
                            } catch (n) {
                                i[i.length] = null
                            }
                        while (n);
                        try {
                            return i
                        } catch (n) {
                            return null
                        }
                }
            }, jindo.$Element.prototype.next = function(t) {
                var e = g_checkVarType(arguments, {
                        "4voi": [],
                        "4fun": ["fpFunc:" + tFunction],
                        "4nul": ["fpFunc:" + tNull]
                    }, "$Element#next"),
                    n = this._element,
                    i = [];
                switch (e + "") {
                    case "4voi":
                        if (!n) return null;
                        do
                            if (n = n.nextSibling, n && 1 == n.nodeType) try {
                                return null == n ? null : jindo.$Element(n)
                            } catch (n) {
                                return null
                            }
                        while (n);
                        try {
                            return null == n ? null : jindo.$Element(n)
                        } catch (n) {
                            return null
                        }
                    case "4fun":
                    case "4nul":
                        if (!n) return i;
                        do
                            if (n = n.nextSibling, n && 1 == n.nodeType && (!t || t.call(this, n))) try {
                                null == n ? i[i.length] = null : i[i.length] = jindo.$Element(n)
                            } catch (n) {
                                i[i.length] = null
                            }
                        while (n);
                        try {
                            return i
                        } catch (n) {
                            return null
                        }
                }
            }, jindo.$Element.prototype.first = function() {
                var t = this._element.firstElementChild || this._element.firstChild;
                if (!t) return null;
                for (; t && 1 != t.nodeType;) t = t.nextSibling;
                try {
                    return t ? jindo.$Element(t) : null
                } catch (e) {
                    return null
                }
            }, jindo.$Element.prototype.last = function() {
                var t = this._element.lastElementChild || this._element.lastChild;
                if (!t) return null;
                for (; t && 1 != t.nodeType;) t = t.previousSibling;
                try {
                    return t ? jindo.$Element(t) : null
                } catch (e) {
                    return null
                }
            }, jindo.$Element._contain = function(t, e) {
                if (document.compareDocumentPosition) return !!(16 & t.compareDocumentPosition(e));
                if (t.contains) return t !== e && (!t.contains || t.contains(e));
                if (!document.body.contains) {
                    for (var n = t, i = e; n && n.parentNode;)
                        if (n = n.parentNode, n == i) return !0;
                    return !1
                }
                if (t === (e.ownerDocument || e.document) && e.tagName && "BODY" === e.tagName.toUpperCase()) return !0;
                9 === t.nodeType && t !== e && (t = t.body);
                try {
                    return t !== e && (!t.contains || t.contains(e))
                } catch (n) {
                    return !1
                }
            }, jindo.$Element.prototype.isChildOf = function(t) {
                try {
                    return jindo.$Element._contain(jindo.$Element(t)._element, this._element)
                } catch (e) {
                    return !1
                }
            }, jindo.$Element.prototype.isParentOf = function(t) {
                try {
                    return jindo.$Element._contain(this._element, jindo.$Element(t)._element)
                } catch (e) {
                    return !1
                }
            }, jindo.$Element.prototype.isEqual = function(t) {
                try {
                    return this._element === jindo.$Element(t)._element
                } catch (e) {
                    return !1
                }
            }, jindo.$Element.prototype.fireEvent = function(t, e) {
                function n(t, e) {
                    var n = g_checkVarType(arguments, o, "$Element#fireEvent");
                    t = (t + "").toLowerCase();
                    var i = document.createEventObject();
                    switch (n + "") {
                        case "4obj":
                            e = n.oProps;
                            for (k in e) e.hasOwnProperty(k) && (i[k] = e[k]);
                            i.button = (e.left ? 1 : 0) + (e.middle ? 4 : 0) + (e.right ? 2 : 0), i.relatedTarget = e.relatedElement || null
                    }
                    var r = this._element;
                    return "input" == this.tag && "click" == t && ("checkbox" == r.type ? r.checked = !r.checked : "radio" == r.type && (r.checked = !0)), this._element.fireEvent("on" + t, i), this
                }

                function i(t, e) {
                    var n = g_checkVarType(arguments, o, "$Element#fireEvent"),
                        i = "HTMLEvents";
                    t = (t + "").toLowerCase(), "click" == t || 0 == t.indexOf("mouse") ? (i = "MouseEvent", "mousewheel" == t && (t = "dommousescroll")) : 0 == t.indexOf("key") && (i = "KeyboardEvent");
                    var r;
                    switch (n + "") {
                        case "4obj":
                            switch (e = n.oProps, e.button = 0 + (e.middle ? 1 : 0) + (e.right ? 2 : 0), e.ctrl = e.ctrl || !1, e.alt = e.alt || !1, e.shift = e.shift || !1, e.meta = e.meta || !1, i) {
                                case "MouseEvent":
                                    r = document.createEvent(i), r.initMouseEvent(t, !0, !0, null, e.detail || 0, e.screenX || 0, e.screenY || 0, e.clientX || 0, e.clientY || 0, e.ctrl, e.alt, e.shift, e.meta, e.button, e.relatedElement || null);
                                    break;
                                case "KeyboardEvent":
                                    if (window.KeyEvent) r = document.createEvent("KeyEvents"), r.initKeyEvent(t, !0, !0, window, e.ctrl, e.alt, e.shift, e.meta, e.keyCode, e.keyCode);
                                    else try {
                                        r = document.createEvent("Events")
                                    } catch (s) {
                                        r = document.createEvent("UIEvents")
                                    } finally {
                                        r.initEvent(t, !0, !0), r.ctrlKey = e.ctrl, r.altKey = e.alt, r.shiftKey = e.shift, r.metaKey = e.meta, r.keyCode = e.keyCode, r.which = e.keyCode
                                    }
                                    break;
                                default:
                                    r = document.createEvent(i), r.initEvent(t, !0, !0)
                            }
                            break;
                        case "4str":
                            r = document.createEvent(i), r.initEvent(t, !0, !0)
                    }
                    return this._element.dispatchEvent(r), this
                }
                var o = {
                    "4str": [jindo.$Jindo._F("sEvent:" + tString)],
                    "4obj": ["sEvent:" + tString, "oProps:" + tHash]
                };
                return jindo.$Element.prototype.fireEvent = void 0 !== document.dispatchEvent ? i : n, this.fireEvent.apply(this, _toArray(arguments))
            }, jindo.$Element.prototype.empty = function() {
                return jindo.cssquery && jindo.cssquery.release(), this.html(""), this
            }, jindo.$Element.prototype.remove = function(t) {
                jindo.cssquery && jindo.cssquery.release();
                var e = jindo.$Element;
                return e(e._common(t, "remove")).leave(), this
            }, jindo.$Element.prototype.leave = function() {
                var t = this._element;
                return t.parentNode && (jindo.cssquery && jindo.cssquery.release(), t.parentNode.removeChild(t)), this
            }, jindo.$Element.prototype.wrap = function(t) {
                var e = this._element;
                return t = jindo.$Element._common(t, "wrap"), e.parentNode && e.parentNode.insertBefore(t, e), t.appendChild(e), this
            }, jindo.$Element.prototype.ellipsis = function(t) {
                g_checkVarType(arguments, {
                    "4voi": [],
                    "4str": ["stringTail:" + tString]
                }, "$Element#ellipsis");
                t = t || "...";
                var e = this.text(),
                    n = e.length,
                    i = parseInt(this._getCss(this._element, "paddingTop"), 10) + parseInt(this._getCss(this._element, "paddingBottom"), 10),
                    o = this._element.offsetHeight - i,
                    r = 0,
                    s = this.text("A")._element.offsetHeight - i;
                if (o < 1.5 * s) return this.text(e), this;
                for (o = s; o < 1.5 * s;) r += Math.max(Math.ceil((n - r) / 2), 1), o = this.text(e.substring(0, r) + t)._element.offsetHeight - i;
                for (; o > 1.5 * s;) r--, o = this.text(e.substring(0, r) + t)._element.offsetHeight - i;
                return this
            }, jindo.$Element.prototype.indexOf = function(t) {
                try {
                    for (var e = jindo.$Element(t)._element, n = this._element.childNodes, i = 0, o = n.length, r = 0; r < o; r++)
                        if (1 == n[r].nodeType) {
                            if (n[r] === e) return i;
                            i++
                        }
                } catch (e) {}
                return -1
            }, jindo.$Element.prototype.queryAll = function(t) {
                for (var e = (g_checkVarType(arguments, {
                        "4str": ["sSelector:" + tString]
                    }, "$Element#queryAll"), jindo.cssquery(t, this._element)), n = [], i = 0, o = e.length; i < o; i++) n.push(jindo.$Element(e[i]));
                return n
            }, jindo.$Element.prototype.query = function(t) {
                var e = (g_checkVarType(arguments, {
                    "4str": ["sSelector:" + tString]
                }, "$Element#query"), jindo.cssquery.getSingle(t, this._element));
                return null === e ? e : jindo.$Element(e)
            }, jindo.$Element.prototype.test = function(t) {
                g_checkVarType(arguments, {
                    "4str": ["sSelector:" + tString]
                }, "$Element#test");
                return jindo.cssquery.test(this._element, t)
            }, jindo.$Element.prototype.xpathAll = function(t) {
                for (var e = (g_checkVarType(arguments, {
                        "4str": ["sXPath:" + tString]
                    }, "$Element#xpathAll"), jindo.cssquery.xpath(t, this._element)), n = [], i = 0, o = e.length; i < o; i++) n.push(jindo.$Element(e[i]));
                return n
            }, jindo.$Element.insertAdjacentHTML = function(t, e, n, i, o, r) {
                var s = [e];
                s.callee = arguments.callee;
                var a = (g_checkVarType(s, {
                    "4str": ["sHTML:" + tString]
                }, "$Element#" + r), t._element);
                if (e += "", a.insertAdjacentHTML && !/^<(option|tr|td|th|col)(?:.*?)>/.test(e.replace(/^(\s|　)+|(\s|　)+$/g, "").toLowerCase())) a.insertAdjacentHTML(n, e);
                else {
                    var c, h = a.ownerDocument || a.document || document,
                        u = h.createDocumentFragment(),
                        l = e.replace(/^(\s|　)+|(\s|　)+$/g, ""),
                        d = {
                            option: "select",
                            tr: "tbody",
                            thead: "table",
                            tbody: "table",
                            col: "table",
                            td: "tr",
                            th: "tr",
                            div: "div"
                        },
                        f = /^\<(option|tr|thead|tbody|td|th|col)(?:.*?)\>/i.exec(l),
                        p = null === f ? "div" : f[1].toLowerCase(),
                        _ = d[p];
                    c = _createEle(_, l, h, !0);
                    for (var m = c.getElementsByTagName("script"), g = 0, v = m.length; g < v; g++) m[g].parentNode.removeChild(m[g]);
                    for (; c[i];) u.appendChild(c[i]);
                    o(u.cloneNode(!0))
                }
                return t
            }, jindo.$Element.prototype.appendHTML = function(t) {
                return jindo.$Element.insertAdjacentHTML(this, t, "beforeEnd", "firstChild", jindo.$Fn(function(t) {
                    var e = this._element;
                    if ("table" === e.tagName.toLowerCase())
                        for (var n = e.childNodes, i = 0, o = n.length; i < o; i++)
                            if (1 == n[i].nodeType) {
                                e = n[i];
                                break
                            } e.appendChild(t)
                }, this).bind(), "appendHTML")
            }, jindo.$Element.prototype.prependHTML = function(t) {
                var e = jindo.$Element;
                return e.insertAdjacentHTML(this, t, "afterBegin", "firstChild", jindo.$Fn(function(t) {
                    var n = this._element;
                    if ("table" === n.tagName.toLowerCase())
                        for (var i = n.childNodes, o = 0, r = i.length; o < r; o++)
                            if (1 == i[o].nodeType) {
                                n = i[o];
                                break
                            } e._prepend(n, t)
                }, this).bind(), "prependHTML")
            }, jindo.$Element.prototype.beforeHTML = function(t) {
                return jindo.$Element.insertAdjacentHTML(this, t, "beforeBegin", "firstChild", jindo.$Fn(function(t) {
                    this._element.parentNode.insertBefore(t, this._element)
                }, this).bind(), "beforeHTML")
            }, jindo.$Element.prototype.afterHTML = function(t) {
                return jindo.$Element.insertAdjacentHTML(this, t, "afterEnd", "firstChild", jindo.$Fn(function(t) {
                    this._element.parentNode.insertBefore(t, this._element.nextSibling)
                }, this).bind(), "afterHTML")
            }, jindo.$Element.prototype.hasEventListener = function(t) {
                var e, n = g_checkVarType(arguments, {
                        "4str": ["sEvent:" + tString]
                    }, "$Element#hasEventListener"),
                    i = !1,
                    o = n.sEvent.toLowerCase();
                return !!this._key && (e = this._element.ownerDocument || this._element.document || document, i = "load" == o && this._element === e ? jindo.$Element(window).hasEventListener(n.sEvent) : "domready" == o && jindo.$Jindo.isWindow(this._element) ? jindo.$Element(e).hasEventListener(n.sEvent) : !!jindo.$Element.eventManager.hasEvent(this._key, n.sEvent))
            }, jindo.$Element.prototype.preventTapHighlight = function(t) {
                if (_JINDO_IS_MO) {
                    var e = "no_tap_highlight" + (new Date).getTime(),
                        n = document.createElement("style"),
                        i = document.getElementsByTagName("html")[0];
                    n.type = "text/css", i.insertBefore(n, i.firstChild);
                    var o = n.sheet || n.styleSheet;
                    o.insertRule("." + e + " { -webkit-tap-highlight-color: rgba(0,0,0,0); }", 0), o.insertRule("." + e + " * { -webkit-tap-highlight-color: rgba(0,0,0,.25); }", 0), jindo.$Element.prototype.preventTapHighlight = function(t) {
                        return this[t ? "addClass" : "removeClass"](e)
                    }
                } else jindo.$Element.prototype.preventTapHighlight = function(t) {
                    return this
                };
                return this.preventTapHighlight.apply(this, _toArray(arguments))
            }, jindo.$Element.prototype.data = function(sKey, vValue) {
                var oType = {
                    g: ["sKey:" + tString],
                    s4var: ["sKey:" + tString, "vValue:" + tVariant],
                    s4obj: ["oObj:" + tHash]
                };
                return document.body.dataset ? jindo.$Element.prototype.data = function(t, e) {
                    var n, i = g_checkVarType(arguments, oType, "$Element#data"),
                        o = jindo.$Jindo.isNull;
                    switch (i + "") {
                        case "g":
                            var r = this._element.dataset[t];
                            return r ? window.JSON.parse(r) : null;
                        case "s4var":
                            var s;
                            if (o(e)) return delete this._element.dataset[t], this;
                            s = {}, s[t] = e, t = s;
                        case "s4obj":
                            for (var a in t) o(t[a]) ? delete this._element.dataset[a] : (n = jindo.$Json._oldToString(t[a]), null != n && (this._element.dataset[a] = n));
                            return this
                    }
                } : jindo.$Element.prototype.data = function(sKey, vValue) {
                    var sToStr, oArgs = g_checkVarType(arguments, oType, "$Element#data"),
                        isNull = jindo.$Jindo.isNull;
                    switch (oArgs + "") {
                        case "g":
                            var sVal = this._element.getAttribute("data-" + sKey);
                            return null != sVal ? eval("(" + this._element.getAttribute("data-" + sKey) + ")") : null;
                        case "s4var":
                            var oData;
                            if (isNull(vValue)) return this._element.removeAttribute("data-" + sKey), this;
                            oData = {}, oData[sKey] = vValue, sKey = oData;
                        case "s4obj":
                            for (var i in sKey) isNull(sKey[i]) ? this._element.removeAttribute("data-" + sKey) : (sToStr = jindo.$Json._oldToString(sKey[i]), null != sToStr && this._element.setAttribute("data-" + i, sToStr));
                            return this
                    }
                }, this.data.apply(this, _toArray(arguments))
            }, jindo.$Fn = function(func, thisObject) {
                var cl = arguments.callee;
                if (func instanceof cl) return func;
                if (!(this instanceof cl)) try {
                    return jindo.$Jindo._maxWarn(arguments.length, 2, "$Fn"), new cl(func, thisObject)
                } catch (e) {
                    if (e instanceof TypeError) return null;
                    throw e
                }
                var oArgs = g_checkVarType(arguments, {
                    "4fun": ["func:" + tFunction],
                    "4fun2": ["func:" + tFunction, "thisObject:" + tVariant],
                    "4str": ["func:" + tString, "thisObject:" + tString]
                }, "$Fn");
                switch (this._tmpElm = null, this._key = null, oArgs + "") {
                    case "4str":
                        this._func = eval("false||function(" + func + "){" + thisObject + "}");
                        break;
                    case "4fun":
                    case "4fun2":
                        this._func = func, this._this = thisObject
                }
            }, jindo.$Fn._commonPram = function(t, e) {
                return g_checkVarType(t, {
                    "4ele": ["eElement:" + tElement, "sEvent:" + tString],
                    "4ele2": ["eElement:" + tElement, "sEvent:" + tString, "bUseCapture:" + tBoolean],
                    "4str": ["eElement:" + tString, "sEvent:" + tString],
                    "4str2": ["eElement:" + tString, "sEvent:" + tString, "bUseCapture:" + tBoolean],
                    "4arr": ["aElement:" + tArray, "sEvent:" + tString],
                    "4arr2": ["aElement:" + tArray, "sEvent:" + tString, "bUseCapture:" + tBoolean],
                    "4doc": ["eElement:" + tDocument, "sEvent:" + tString],
                    "4win": ["eElement:" + tWindow, "sEvent:" + tString],
                    "4doc2": ["eElement:" + tDocument, "sEvent:" + tString, "bUseCapture:" + tBoolean],
                    "4win2": ["eElement:" + tWindow, "sEvent:" + tString, "bUseCapture:" + tBoolean]
                }, e)
            }, jindo.$Fn.prototype.$value = function() {
                return this._func
            }, jindo.$Fn.prototype.bind = function() {
                var t, e = _slice.call(arguments, 0),
                    n = this._func,
                    i = this._this || this;
                return n.bind ? (e.unshift(i), t = Function.prototype.bind.apply(n, e)) : t = function() {
                    var t = _slice.call(arguments, 0);
                    return e.length && (t = e.concat(t)), n.apply(i, t)
                }, t
            }, jindo.$Fn.prototype.attach = function(t, e, n) {
                var i, o = jindo.$Fn._commonPram(arguments, "$Fn#attach"),
                    r = null,
                    s = e,
                    a = t;
                switch (n !== !0 && (n = !1), this._bUseCapture = n, o + "") {
                    case "4arr":
                    case "4arr2":
                        for (var a = o.aElement, s = o.sEvent, c = 0, i = a.length; c < i; c++) this.attach(a[c], s, !!n);
                        return this
                }
                return r = this._bind = this._bind ? this._bind : this.bind(), jindo.$Element(a).attach(s, r), this
            }, jindo.$Fn.prototype.detach = function(t, e, n) {
                var i, o = jindo.$Fn._commonPram(arguments, "$Fn#detach"),
                    r = null,
                    s = t,
                    a = e;
                switch (o + "") {
                    case "4arr":
                    case "4arr2":
                        for (var s = o.aElement, a = o.sEvent, c = 0, i = s.length; c < i; c++) this.detach(s[c], a, !!n);
                        return this
                }
                return r = this._bind = this._bind ? this._bind : this.bind(), jindo.$Element(o.eElement).detach(o.sEvent, r), this
            }, jindo.$Fn.prototype.delay = function(t, e) {
                var n = g_checkVarType(arguments, {
                    "4num": ["nSec:" + tNumeric],
                    "4arr": ["nSec:" + tNumeric, "args:" + tArray]
                }, "$Fn#delay");
                switch (n + "") {
                    case "4num":
                        e = e || [];
                        break;
                    case "4arr":
                        e = n.args
                }
                return this._delayKey = setTimeout(this.bind.apply(this, e), 1e3 * t), this
            }, jindo.$Fn.prototype.setInterval = function(t, e) {
                var n = g_checkVarType(arguments, {
                    "4num": ["nSec:" + tNumeric],
                    "4arr": ["nSec:" + tNumeric, "args:" + tArray]
                }, "$Fn#setInterval");
                switch (n + "") {
                    case "4num":
                        e = e || [];
                        break;
                    case "4arr":
                        e = n.args
                }
                return this._repeatKey = setInterval(this.bind.apply(this, e), 1e3 * t), this
            }, jindo.$Fn.prototype.repeat = jindo.$Fn.prototype.setInterval, jindo.$Fn.prototype.stopDelay = function() {
                return void 0 !== this._delayKey && (window.clearTimeout(this._delayKey), delete this._delayKey), this
            }, jindo.$Fn.prototype.stopRepeat = function() {
                return void 0 !== this._repeatKey && (window.clearInterval(this._repeatKey), delete this._repeatKey), this
            }, jindo.$ElementList = function(t) {
                var e = arguments.callee;
                if (t instanceof e) return t;
                if (!(this instanceof e)) try {
                    return new e(t)
                } catch (n) {
                    if (n instanceof TypeError) return null;
                    throw n
                }
                var i = g_checkVarType(arguments, {
                    "4arr": ["aEle:" + tArray],
                    "4str": ["sCssQuery:" + tString],
                    "4nul": ["oEle:" + tNull],
                    "4und": ["oEle:" + tUndefined]
                }, "$ElementList");
                switch (i + "") {
                    case "4arr":
                        t = i.aEle;
                        break;
                    case "4str":
                        t = jindo.cssquery(i.sCssQuery);
                        break;
                    case "4nul":
                    case "4und":
                        t = []
                }
                this._elements = [];
                for (var o = 0, r = t.length; o < r; o++) this._elements.push(jindo.$Element(t[o]))
            }, function(t) {
                for (var e = ["show", "hide", "toggle", "addClass", "removeClass", "toggleClass", "fireEvent", "leave", "empty", "className", "width", "height", "text", "html", "css", "attr"], n = 0, i = e.length; n < i; n++) {
                    var o = e[n];
                    jindo.$Element.prototype[o] && (t[e[n]] = function(t) {
                        return function() {
                            try {
                                for (var e = [], n = 0, i = arguments.length; n < i; n++) e.push(arguments[n]);
                                for (var o = 0, r = this._elements.length; o < r; o++) this._elements[o][t].apply(this._elements[o], e);
                                return this
                            } catch (s) {
                                throw TypeError(s.message.replace(/\$Element/g, "$Elementlist#" + t).replace(/Element\.html/g, "Elementlist.html#" + t))
                            }
                        }
                    }(e[n]))
                }
                for (var r = ["appear", "disappear"], n = 0, i = r.length; n < i; n++) jindo.$Element.prototype[o] && (t[r[n]] = function(t) {
                    return function(e, n) {
                        try {
                            for (var i = this, o = 0, r = this._elements.length; o < r; o++) o == r - 1 ? this._elements[o][t](e, function() {
                                n && n(i)
                            }) : this._elements[o][t](e);
                            return this
                        } catch (s) {
                            throw TypeError(s.message.replace(/\$Element/g, "$Elementlist#" + t).replace(/Element\.html/g, "Elementlist.html#" + t))
                        }
                    }
                }(r[n]))
            }(jindo.$ElementList.prototype), jindo.$ElementList.prototype.get = function(t) {
                g_checkVarType(arguments, {
                    "4num": ["nIdx:" + tNumeric]
                }, "$ElementList#get");
                return this._elements[t]
            }, jindo.$ElementList.prototype.getFirst = function() {
                return this._elements[0]
            }, jindo.$ElementList.prototype.getLast = function() {
                return this._elements[Math.max(this._elements.length - 1, 0)]
            }, jindo.$ElementList.prototype.length = function(t, e) {
                var n = (g_checkVarType(arguments, {
                    "4voi": [],
                    "4num": [jindo.$Jindo._F("nLen:" + tNumeric)],
                    "4var": ["nLen:" + tNumeric, "oValue:" + tVariant]
                }, "$ElementList#length"), jindo.$A(this._elements));
                try {
                    return n.length.apply(n, _toArray(arguments))
                } catch (i) {
                    throw TypeError(i.message.replace(/\$A/g, "$Elementlist#length").replace(/A\.html/g, "Elementlist.html#length"))
                }
            }, jindo.$ElementList.prototype.$value = function() {
                return this._elements
            }, jindo.$S = function(t) {
                var e = arguments.callee;
                if (t instanceof e) return t;
                if (!(this instanceof e)) try {
                    return jindo.$Jindo._maxWarn(arguments.length, 1, "$Json"), new e(t || "")
                } catch (n) {
                    if (n instanceof TypeError) return null;
                    throw n
                }
                g_checkVarType(arguments, {
                    "4str": ["str:" + tString]
                }, "$S");
                this._str = t + ""
            }, jindo.$S.prototype.$value = function() {
                return this._str
            }, jindo.$S.prototype.toString = jindo.$S.prototype.$value, jindo.$S.prototype.trim = function() {
                return "".trim ? jindo.$S.prototype.trim = function() {
                    return jindo.$S(this._str.trim())
                } : jindo.$S.prototype.trim = function() {
                    return jindo.$S(this._str.replace(/^(\s|　)+/g, "").replace(/(\s|　)+$/g, ""))
                }, jindo.$S(this.trim())
            }, jindo.$S.prototype.escapeHTML = function() {
                var t = {
                        '"': "quot",
                        "&": "amp",
                        "<": "lt",
                        ">": "gt",
                        "'": "#39"
                    },
                    e = this._str.replace(/[<>&"']/g, function(e) {
                        return t[e] ? "&" + t[e] + ";" : e
                    });
                return jindo.$S(e)
            }, jindo.$S.prototype.stripTags = function() {
                return jindo.$S(this._str.replace(/<\/?(?:h[1-5]|[a-z]+(?:\:[a-z]+)?)[^>]*>/gi, ""))
            }, jindo.$S.prototype.times = function(t) {
                var e = g_checkVarType(arguments, {
                    "4str": ["nTimes:" + tNumeric]
                }, "$S#times");
                return e ? jindo.$S(Array(e.nTimes + 1).join(this._str)) : this
            }, jindo.$S.prototype.unescapeHTML = function() {
                var t = {
                        quot: '"',
                        amp: "&",
                        lt: "<",
                        gt: ">",
                        "#39": "'"
                    },
                    e = this._str.replace(/&([a-z]+|#[0-9]+);/g, function(e, n) {
                        return t[n] ? t[n] : e
                    });
                return jindo.$S(e)
            }, jindo.$S.prototype.escape = function() {
                var t = this._str.replace(/([\u0080-\uFFFF]+)|[\n\r\t"'\\]/g, function(t, e, n) {
                    return e ? escape(e).replace(/%/g, "\\") : (n = {
                        "\n": "\\n",
                        "\r": "\\r",
                        "\t": "\\t"
                    })[t] ? n[t] : "\\" + t
                });
                return jindo.$S(t)
            }, jindo.$S.prototype.bytes = function(t) {
                var e, n, i = g_checkVarType(arguments, {
                        "4voi": [],
                        "4num": ["nConfig:" + tNumeric],
                        "4obj": ["nConfig:" + tHash]
                    }, "$S#bytes"),
                    o = 0,
                    r = 0,
                    s = 0,
                    a = this._str.length,
                    c = (document.charset || document.characterSet || document.defaultCharset) + "";
                switch (i + "") {
                    case "4voi":
                        e = !1;
                        break;
                    case "4num":
                        e = !0, n = t;
                        break;
                    case "4obj":
                        c = t.charset || c, n = t.size || !1, e = !!n
                }
                if ("utf-8" == c.toLowerCase()) {
                    for (s = 0; s < a; s++)
                        if (o = this._str.charCodeAt(s), r += o < 128 ? 1 : o < 2048 ? 2 : o < 65536 ? 3 : 4, e && r > n) {
                            this._str = this._str.substr(0, s);
                            break
                        }
                } else
                    for (s = 0; s < a; s++)
                        if (r += this._str.charCodeAt(s) > 128 ? 2 : 1, e && r > n) {
                            this._str = this._str.substr(0, s);
                            break
                        } return e ? this : r
            }, jindo.$S.prototype.parseString = function() {
                if ("" == this._str) return {};
                for (var t, e, n, i = this._str.split(/&/g), o = {}, r = !1, s = 0; s < i.length; s++) {
                    e = i[s].substring(0, t = i[s].indexOf("=")), r = !1;
                    try {
                        n = decodeURIComponent(i[s].substring(t + 1))
                    } catch (a) {
                        r = !0, n = decodeURIComponent(unescape(i[s].substring(t + 1)))
                    }
                    "[]" == e.substr(e.length - 2, 2) ? (e = e.substring(0, e.length - 2), jindo.$Jindo.isUndefined(o[e]) && (o[e] = []), o[e][o[e].length] = r ? escape(n) : n) : o[e] = r ? escape(n) : n
                }
                return o
            }, jindo.$S.prototype.escapeRegex = function() {
                var t = this._str,
                    e = /([\?\.\*\+\-\/\(\)\{\}\[\]\:\!\^\$\\\|])/g;
                return jindo.$S(t.replace(e, "\\$1"))
            }, jindo.$S.prototype.format = function() {
                var t = arguments,
                    e = 0,
                    n = this._str.replace(/%([ 0])?(-)?([1-9][0-9]*)?([bcdsoxX])/g, function(n, i, o, r, s) {
                        var a = t[e++],
                            c = "",
                            h = "";
                        if (r = r ? +r : 0, "s" == s) c = a + "";
                        else if (" bcdoxX".indexOf(s) > 0) {
                            if (!jindo.$Jindo.isNumeric(a)) return "";
                            c = "c" == s ? String.fromCharCode(a) : a.toString({
                                b: 2,
                                d: 10,
                                o: 8,
                                x: 16,
                                X: 16
                            } [s]), " X".indexOf(s) > 0 && (c = c.toUpperCase())
                        }
                        return c.length < r && (h = jindo.$S(i || " ").times(r - c.length)._str), "-" == o ? c += h : c = h + c, c
                    });
                return jindo.$S(n)
            }, jindo.$Document = function(t) {
                var e = arguments.callee;
                if (t instanceof e) return t;
                if (!(this instanceof e)) try {
                    return jindo.$Jindo._maxWarn(arguments.length, 1, "$Document"), new e(t || document)
                } catch (n) {
                    if (n instanceof TypeError) return null;
                    throw n
                }
                var i = g_checkVarType(arguments, {
                    "4doc": ["oDocument:" + tDocument]
                }, "$Document");
                null == i ? this._doc = document : this._doc = t, this._docKey = "Standards" == this.renderingMode() ? "documentElement" : "body"
            }, function() {
                var t = jindo.cssquery,
                    e = {
                        query: t.getSingle,
                        queryAll: t,
                        xpathAll: t.xpath
                    };
                for (var n in e) jindo.$Document.prototype[n] = function(t, e) {
                    return function(n) {
                        g_checkVarType(arguments, {
                            "4str": ["sQuery:" + tString]
                        }, "$Document#" + t);
                        return e(n, this._doc)
                    }
                }(n, e[n])
            }(), jindo.$Document.prototype.$value = function() {
                return this._doc
            }, jindo.$Document.prototype.scrollSize = function() {
                var t = this._doc[_JINDO_IS_WK ? "body" : this._docKey];
                return {
                    width: Math.max(t.scrollWidth, t.clientWidth),
                    height: Math.max(t.scrollHeight, t.clientHeight)
                }
            }, jindo.$Document.prototype.scrollPosition = function() {
                var t = this._doc[_JINDO_IS_WK ? "body" : this._docKey];
                return {
                    left: t.scrollLeft || window.pageXOffset || window.scrollX || 0,
                    top: t.scrollTop || window.pageYOffset || window.scrollY || 0
                }
            }, jindo.$Document.prototype.clientSize = function() {
                var t = this._doc[this._docKey],
                    e = _JINDO_IS_SP && !_JINDO_IS_CH;
                return e ? {
                    width: window.innerWidth,
                    height: window.innerHeight
                } : {
                    width: t.clientWidth,
                    height: t.clientHeight
                }
            }, jindo.$Document.prototype.renderingMode = function() {
                var t, e = (navigator.userAgent, _JINDO_IS_IE),
                    n = _JINDO_IS_WK && !_JINDO_IS_CH && navigator.vendor.indexOf("Apple") > -1;
                return t = "compatMode" in this._doc ? "CSS1Compat" == this._doc.compatMode ? "Standards" : e ? "Quirks" : "Almost" : n ? "Standards" : "Quirks"
            }, jindo.$Form = function(t) {
                var e = arguments.callee;
                if (t instanceof e) return t;
                if (!(this instanceof e)) try {
                    return jindo.$Jindo._maxWarn(arguments.length, 1, "$" + tForm), new e(t)
                } catch (n) {
                    if (n instanceof TypeError) return null;
                    throw n
                }
                var i = g_checkVarType(arguments, {
                    "4str": ["oForm:" + tString],
                    "4ele": ["oForm:" + tElement]
                }, "$" + tForm);
                switch (i + "") {
                    case "4str":
                        t = jindo.$(t)
                }
                if (!t.tagName || "FORM" != t.tagName.toUpperCase()) throw TypeError("only form");
                this._form = t
            }, jindo.$Form.prototype.$value = function() {
                return this._form
            }, jindo.$Form.prototype.serialize = function() {
                var t = this,
                    e = {},
                    n = arguments.length,
                    i = function(n, i) {
                        if (!n.disabled) {
                            var o = t.value(i);
                            void 0 !== o && (e[i] = o)
                        }
                    };
                if (0 == n)
                    for (var o = this._form.elements.length, r = 0; r < o; r++) {
                        var s = this._form.elements[r];
                        s.name && i(s, s.name)
                    } else
                        for (var r = 0; r < n; r++) i(this.element(arguments[r]), arguments[r]);
                return jindo.$H(e).toQueryString()
            }, jindo.$Form.prototype.element = function(t) {
                var e = g_checkVarType(arguments, {
                    "4voi": [],
                    "4str": [jindo.$Jindo._F("sKey:" + tString)]
                }, "$Form#element");
                switch (e + "") {
                    case "4voi":
                        return _toArray(this._form.elements);
                    case "4str":
                        return this._form.elements[t + ""]
                }
            }, jindo.$Form.prototype.enable = function(t) {
                var e = g_checkVarType(arguments, {
                    s4bln: ["sName:" + tString, "bEnable:" + tBoolean],
                    s4obj: ["oObj:" + tHash],
                    g: [jindo.$Jindo._F("sName:" + tString)]
                }, "$Form#enable");
                switch (e + "") {
                    case "s4bln":
                        var n = this._form[t];
                        if (!n) return this;
                        n = 1 == n.nodeType ? [n] : n;
                        for (var i = e.bEnable, o = 0; o < n.length; o++) n[o].disabled = !i;
                        return this;
                    case "s4obj":
                        t = e.oObj;
                        var r = this;
                        for (var s in t) t.hasOwnProperty(s) && r.enable(s, t[s]);
                        return this;
                    case "g":
                        var n = this._form[t];
                        if (!n) return this;
                        n = 1 == n.nodeType ? [n] : n;
                        for (var a = !0, o = 0; o < n.length; o++)
                            if (n[o].disabled) {
                                a = !1;
                                break
                            } return a
                }
            }, jindo.$Form.prototype.value = function(t) {
                var e, n, i = g_checkVarType(arguments, {
                    s4str: ["sKey:" + tString, "vValue:" + tVariant],
                    s4obj: [jindo.$Jindo._F("oObj:" + tHash)],
                    g: ["sKey:" + tString]
                }, "$Form#value");
                if (i + "" == "s4obj") {
                    var o = this;
                    t = i.oObj;
                    for (var r in t) t.hasOwnProperty(r) && o.value(r, t[r]);
                    return this
                }
                var s = this._form[t];
                if (!s) throw new jindo.$Error(t + jindo.$Except.NONE_ELEMENT, "$Form#value");
                switch (s = 1 == s.nodeType ? [s] : s, i + "") {
                    case "s4str":
                        for (var a = i.vValue, c = s.length, h = 0; h < c; h++) {
                            var u = s[h];
                            switch (u.type) {
                                case "radio":
                                    u.checked = u.value == a;
                                    break;
                                case "checkbox":
                                    a.constructor == Array ? u.checked = jindo.$A(a).has(u.value) : u.checked = u.value == a;
                                    break;
                                case "select-one":
                                    for (var l = -1, h = 0, d = u.options.length; h < d; h++) e = u.options[h], e.value != a && e.text != a || (l = h);
                                    u.selectedIndex = l;
                                    break;
                                case "select-multiple":
                                    var l = -1;
                                    if (jindo.$Jindo.isArray(a))
                                        for (var f = jindo.$A(a), h = 0, d = u.options.length; h < d; h++) e = u.options[h], u.options[h].selected = f.has(e.value) || f.has(e.text);
                                    else {
                                        for (var h = 0, d = u.options.length; h < d; h++) e = u.options[h], e.value != a && e.text != a || (l = h);
                                        u.selectedIndex = l
                                    }
                                    break;
                                default:
                                    u.value = a
                            }
                        }
                        return this;
                    case "g":
                        for (var p = [], c = s.length, h = 0; h < c; h++) {
                            var u = s[h];
                            switch (u.type) {
                                case "radio":
                                case "checkbox":
                                    u.checked && p.push(u.value);
                                    break;
                                case "select-one":
                                    u.selectedIndex != -1 && (e = u.options[u.selectedIndex], n = "" == e.value ? e.text : e.value, p.push(n));
                                    break;
                                case "select-multiple":
                                    if (u.selectedIndex != -1)
                                        for (var h = 0, d = u.options.length; h < d; h++) e = u.options[h], e.selected && (n = "" == e.value ? e.text : e.value, p.push(n));
                                    break;
                                default:
                                    p.push(u.value)
                            }
                        }
                        return p.length > 1 ? p : p[0]
                }
            }, jindo.$Form.prototype.submit = function(t, e) {
                var n = g_checkVarType(arguments, {
                        voi: [],
                        "4str": ["sTargetName:" + tString],
                        "4fun": ["fValidation:" + tFunction],
                        "4fun2": ["sTargetName:" + tString, "fValidation:" + tFunction]
                    }, "$Form#submit"),
                    i = null;
                switch (n + "") {
                    case "4str":
                        i = this._form.target, this._form.target = n.sTargetName;
                        break;
                    case "4fun":
                    case "4fun2":
                        if (!n.fValidation.call(this, this._form)) return this;
                        n + "" == "4fun2" && (i = this._form.target, this._form.target = n.sTargetName)
                }
                return this._form.submit(), jindo.$Jindo.isNull(i) || (this._form.target = i), this
            }, jindo.$Form.prototype.reset = function(t) {
                var e = g_checkVarType(arguments, {
                    "4voi": [],
                    "4fun": ["fValidation:" + tFunction]
                }, "$Form#reset");
                return e + "" != "4fun" || t.call(this, this._form) ? (this._form.reset(), this) : this
            }, jindo.$Template = function(t, e) {
                var n, i = null,
                    o = "",
                    r = arguments.callee;
                if (t instanceof r) return t;
                if (!(this instanceof r)) try {
                    return jindo.$Jindo._maxWarn(arguments.length, 2, "$Template"), new r(t || "", e || "default")
                } catch (s) {
                    if (s instanceof TypeError) return null;
                    throw s
                }
                var a = g_checkVarType(arguments, {
                    "4str": ["str:" + tString],
                    "4ele": ["ele:" + tElement],
                    "4str3": ["str:" + tString, "sEngineName:" + tString],
                    "4ele3": ["ele:" + tElement, "sEngineName:" + tString]
                }, "$Template");
                switch ((i = _getElementById(document, t) || t) && i.tagName && (o = i.tagName.toUpperCase()) && ("TEXTAREA" == o || "SCRIPT" == o && "text/template" == i.getAttribute("type")) && (t = (i.value || i.innerHTML).replace(/^\s+|\s+$/g, "")), this._str = t + "", n = "default", a + "") {
                    case "4str3":
                    case "4ele3":
                        n = a.sEngineName
                }
                this._compiler = jindo.$Template.getEngine(n)
            }, jindo.$Template._aEngines = {}, jindo.$Template._cache = {}, jindo.$Template.splitter = /(?!\\)[\{\}]/g, jindo.$Template.pattern = /^(?:if (.+)|elseif (.+)|for (?:(.+)\:)?(.+) in (.+)|(else)|\/(if|for)|=(.+)|js (.+)|set (.+)|gset (.+))$/, jindo.$Template.addEngine = function(t, e) {
                var n = g_checkVarType(arguments, {
                    "4fun": ["sEngineName:" + tString, "fnEngine:" + tFunction]
                }, "$Template#addEngine");
                jindo.$Template._aEngines[n.sEngineName] = n.fnEngine
            }, jindo.$Template.getEngine = function(t) {
                var e = g_checkVarType(arguments, {
                    "4str": ["sEngineName:" + tString]
                }, "$Template#getEngine");
                return jindo.$Template._aEngines[e.sEngineName]
            }, jindo.$Template.prototype.process = function(t) {
                var e, n = g_checkVarType(arguments, {
                    "4obj": ["data:" + tHash],
                    "4voi": []
                }, "$Template#process");
                return jindo.$Template._cache && jindo.$Template._cache[this._str] ? (e = jindo.$Template._cache[this._str])(n + "" == "for_void" ? "" : n.data) : (jindo.$Template._cache[this._str] = e = this._compiler(this._str), e(n + "" == "for_void" ? "" : n.data))
            }, jindo.$Template.addEngine("default", function(t) {
                var e, n = "",
                    i = "",
                    o = "",
                    r = (" " + t + " ").replace(/\\{/g, i).replace(/\\}/g, o).replace(/(?!\\)\}\{/g, "}" + n + "{").split(jindo.$Template.splitter),
                    s = r.length,
                    a = {
                        '"': '\\"',
                        "\\": "\\\\",
                        "\n": "\\n",
                        "\r": "\\r",
                        "\t": "\\t",
                        "\f": "\\f"
                    },
                    c = [/(["'](?:(?:\\.)+|[^\\["']+)*["']|[a-zA-Z_](?:[\w\.]|\[(?:.*?)\])*)/g, /[\n\r\t\f"\\]/g, /^\s+/, /\s+$/, /#/g],
                    h = [function(t) {
                        return '"' == t.substring(0, 1) || "'" == t.substring(0, 1) || "null" == t || "false" == t || "true" == t ? t : "d." + t
                    }, function(t) {
                        return a[t] || t
                    }, "", ""],
                    u = 0;
                if (r[0] = r[0].substr(1), r[s - 1] = r[s - 1].substr(0, r[s - 1].length - 1), s < 2) return function(t) {
                    return function() {
                        return t
                    }
                }(r[0]);
                for (r = r.reverse(); s--;) s % 2 ? r[s] = r[s].replace(jindo.$Template.pattern, function() {
                    var t = arguments;
                    if (t[11]) return t[11].replace(/(\w+)(?:\s*)=(?:\s*)(?:([a-zA-Z0-9_]+)|(.+))$/g, function() {
                        var t = arguments,
                            e = "var " + t[1] + "=";
                        return e += t[2] ? t[2] : t[3].replace(/(=(?:[a-zA-Z_][\w\.]*)+)/g, function(t) {
                            return "=" == t.substring(0, 1) ? "d." + t.replace("=", "") : t
                        })
                    }) + ";";
                    if (t[10]) return t[10].replace(/(\w+)(?:\s*)=(?:\s*)(?:([a-zA-Z0-9_]+)|(.+))$/g, function() {
                        var t = arguments,
                            e = "d." + t[1] + "=";
                        return e += t[2] ? "d." + t[2] : t[3].replace(/(=(?:[a-zA-Z_][\w\.]*)+)/g, function(t) {
                            return "=" == t.substring(0, 1) ? "d." + t.replace("=", "") : t
                        })
                    }) + ";";
                    if (t[9]) return "s[i++] = " + t[9].replace(/(=(?:[a-zA-Z_][\w\.]*)+)/g, function(t) {
                        return "=" == t.substring(0, 1) ? "d." + t.replace("=", "") : t
                    }) + ";";
                    if (t[8]) return "s[i++] = d." + t[8] + ";";
                    if (t[1]) return "if(" + t[1].replace(c[0], h[0]).replace(/d\.(typeof) /, "$1 ").replace(/ d\.(instanceof) d\./, " $1 ") + "){";
                    if (t[2]) return "}else if(" + t[2].replace(c[0], h[0]).replace(/d\.(typeof) /, "$1 ").replace(/ d\.(instanceof) d\./, " $1 ") + "){";
                    if (t[5]) {
                        e = t[4];
                        var n = [];
                        return n.push("var t# = d." + t[5] + " || {},"), n.push("p# = " + jindoName + ".$Jindo.isArray(t#),"), n.push("i# = 0,"), n.push("j#,"), n.push("leng#,"), n.push("aProp# = [],"), n.push("sProp#;"), n.push("if(p#){"), n.push("\tleng# = t#.length;"), n.push("\tfor(j# = 0; j# < leng#; j#++){aProp#.push(j#);}"), n.push("}else{"), n.push("\tfor(j# in t#){aProp#.push(j#);}"), n.push("}"), n.push("leng# = aProp#.length;"), n.push("for(var x# = 0; x# < leng#; x#++){"), n.push("\tsProp# = aProp#[x#];"), n.push("\tif(!p# && !t#.hasOwnProperty(sProp#)){"), n.push("\t\tcontinue;"), n.push("\t}"), n.push("\tif((p# && isNaN(i# = parseInt(sProp#, 10))) || (!p# && !t#.propertyIsEnumerable(sProp#))){"), n.push("\t\tcontinue;"), n.push("\t}"), n.push("\td." + t[4] + " = t#[sProp#];"), n.push(t[3] ? "d." + t[3] + " = sProp#;" : ""), n.join("").replace(c[4], u++)
                    }
                    return t[6] ? "}else{" : t[7] ? "for" == t[7] ? "delete d." + e + "; };" : "};" : t[0]
                }) : r[s] == n ? r[s] = "" : r[s] && (r[s] = 's[i++] = "' + r[s].replace(c[1], h[1]) + '";');
                r = r.reverse().join("").replace(new RegExp(i, "g"), "{").replace(new RegExp(o, "g"), "}");
                var l = [];
                return l.push("d = d || {};"), l.push("var s = [], i = 0;"), l.push(r), l.push('return s.join("");'), r = new Function("d", "" + l.join(""))
            }), jindo.$Template.addEngine("micro", function(t) {
                return new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"
                        $1\ r ").replace(/\t=(.*?)%>/g,"
                        ',$1,'
                        ").split("\
                        t ").join("
                        ');").split("%>").join("p.push('
                        ").split("\
                        r ").join("\\
                        '")+"');
                }
                return p.join('');
                ")}),jindo.$Template.addEngine("
                handlebars ",function(t){if("
                undefined "==typeof Handlebars)throw new jindo.$Error(jindo.$Except.NOT_FOUND_HANDLEBARS,"
                $Template# process ");return Handlebars.compile(t)}),jindo.$Template.addEngine("
                simple ",function(t){return function(e){return t.replace(/\{\{([^{}]*)\}\}/g,function(t,n){return"
                undefined "==typeof e[n]?"
                ":e[n]})}}),jindo.$Date=function(t){var e=arguments,n=arguments.callee;if(t&&t instanceof n)return t;if(!(this instanceof n)){for(var i="
                ",o=0,r=e.length;o<r;o++)i+="
                a["+o+"], ";var s=new Function("
                cl ","
                a ","
                return new cl("+i.replace(/,$/,"
                    ")+");
                ");try{return jindo.$Jindo._maxWarn(arguments.length,7,"
                $ "+tDate),s(n,e)}catch(a){if(a instanceof TypeError)return null;throw a}}var c=g_checkVarType(arguments,{"
                4 voi ":[],"
                4 str ":["
                src: "+tString],"
                4n um ":["
                src: "+tNumeric],"
                4 dat ":["
                src: "+tDate],"
                4n um2 ":["
                src: "+tNumeric,"
                src: "+tNumeric],"
                4n um3 ":["
                src: "+tNumeric,"
                src: "+tNumeric,"
                src: "+tNumeric],"
                4n um4 ":["
                src: "+tNumeric,"
                src: "+tNumeric,"
                src: "+tNumeric,"
                src: "+tNumeric],"
                4n um5 ":["
                src: "+tNumeric,"
                src: "+tNumeric,"
                src: "+tNumeric,"
                src: "+tNumeric,"
                src: "+tNumeric],"
                4n um6 ":["
                src: "+tNumeric,"
                src: "+tNumeric,"
                src: "+tNumeric,"
                src: "+tNumeric,"
                src: "+tNumeric,"
                src: "+tNumeric],"
                4n um7 ":["
                src: "+tNumeric,"
                src: "+tNumeric,"
                src: "+tNumeric,"
                src: "+tNumeric,"
                src: "+tNumeric,"
                src: "+tNumeric,"
                src: "+tNumeric]},"
                $ "+tDate);switch(c+"
                "){case"
                4 voi ":this._date=new Date;break;case"
                4n um ":this._date=new Date(1*t);break;case"
                4 str ":/(\d\d\d\d)(?:-?(\d\d)(?:-?(\d\d)))/.test(t)?this._date=jindo.$Date._makeISO(t):this._date=n.parse(t);break;case"
                4 dat ":(this._date=new Date).setTime(t.getTime()),this._date.setMilliseconds(t.getMilliseconds());break;case"
                4n um2 ":case"
                4n um3 ":case"
                4n um4 ":case"
                4n um5 ":case"
                4n um6 ":case"
                4n um7 ":for(var o=0;o<7;o++)jindo.$Jindo.isNumeric(e[o])||(e[o]=1);this._date=new Date(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}this._names={};for(var o in jindo.$Date.names)jindo.$Date.names.hasOwnProperty(o)&&(this._names[o]=jindo.$Date.names[o])},jindo.$Date._makeISO=function(t){var e=t.match(/(\d{4})(?:-?(\d\d)(?:-?(\d\d)(?:[T ](\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|(?:([-+])(\d\d)(?::?(\d\d))?)?)?)?)?)?/),n=parseInt(e[4]||0,10),i=parseInt(e[5]||0,10);return"
                Z "==e[8]?n+=jindo.$Date.utc:" + "!=e[9]&&" - "!=e[9]||(n+=jindo.$Date.utc-parseInt(e[9]+e[10],10),i+=parseInt(e[9]+e[11],10)),new Date(e[1]||0,parseInt(e[2]||0,10)-1,e[3]||0,n,i,e[6]||0,e[7]||0)},jindo.$Date._paramCheck=function(t,e){return g_checkVarType(t,{s:["
                nParm: "+tNumeric],g:[]},"
                $Date# "+e)},jindo.$Date.names={month:["
                January ","
                Febrary ","
                March ","
                April ","
                May ","
                June ","
                July ","
                August ","
                September ","
                October ","
                Novermber ","
                December "],s_month:["
                Jan ","
                Feb ","
                Mar ","
                Apr ","
                May ","
                Jun ","
                Jul ","
                Aug ","
                Sep ","
                Oct ","
                Nov ","
                Dec "],day:["
                Sunday ","
                Monday ","
                Tuesday ","
                Wednesday ","
                Thursday ","
                Friday ","
                Saturday "],s_day:["
                Sun ","
                Mon ","
                Tue ","
                Wed ","
                Thu ","
                Fri ","
                Sat "],ampm:["
                AM ","
                PM "]},jindo.$Date.utc=9,jindo.$Date.now=function(){return Date.now?this.now=function(){return Date.now()}:this.now=function(){return+new Date},this.now()},jindo.$Date.prototype.name=function(t,e){var n=g_checkVarType(arguments,{s4str:["
                sKey: "+tString,"
                aValue: "+tArray],s4obj:["
                oObject: "+tHash],g:["
                sKey: "+tString]},"
                $Date# name ");switch(n+"
                "){case"
                s4str ":this._names[t]=e;break;case"
                s4obj ":t=n.oObject;for(var i in t)t.hasOwnProperty(i)&&(this._names[i]=t[i]);break;case"
                g ":return this._names[t]}return this},jindo.$Date.parse=function(t){var e=(g_checkVarType(arguments,{"
                4 str ":["
                sKey: "+tString]},"
                $Date# parse "),new Date(Date.parse(t)));if(isNaN(e)||e=="
                Invalid "+tDate)throw new jindo.$Error(jindo.$Except.INVALID_DATE,"
                $Date# parse ");return e},jindo.$Date.prototype.$value=function(){return this._date},jindo.$Date.prototype.format=function(t){var e=g_checkVarType(arguments,{"
                4 str ":["
                sFormat: "+tString]},"
                $Date# format ");t=e.sFormat;var n={},i=this._date,o=this._names,r=this;return(t||"
                ").replace(/[a-z]/gi,function(t){if(void 0!==n[t])return n[t];switch(t){case"
                d ":case"
                j ":return n.j=i.getDate(),n.d=(n.j>9?"
                ":"
                0 ")+n.j,n[t];case"
                l ":case"
                D ":case"
                w ":case"
                N ":return n.w=i.getDay(),n.N=n.w?n.w:7,n.D=o.s_day[n.w],n.l=o.day[n.w],n[t];case"
                S ":return(n.S=["
                st ","
                nd ","
                rd "][i.getDate()])?n.S:n.S="
                th ";case"
                z ":return n.z=Math.floor((i.getTime()-new Date(i.getFullYear(),0,1).getTime())/864e5),n.z;case"
                m ":case"
                n ":return n.n=i.getMonth()+1,n.m=(n.n>9?"
                ":"
                0 ")+n.n,n[t];case"
                L ":return n.L=r.isLeapYear(),n.L;case"
                o ":case"
                Y ":case"
                y ":return n.o=n.Y=i.getFullYear(),n.y=(n.o+"
                ").substr(2),n[t];case"
                a ":case"
                A ":case"
                g ":case"
                G ":case"
                h ":case"
                H ":return n.G=i.getHours(),n.g=(n.g=n.G%12)?n.g:12,n.A=n.G<12?o.ampm[0]:o.ampm[1],n.a=n.A.toLowerCase(),n.H=(n.G>9?"
                ":"
                0 ")+n.G,n.h=(n.g>9?"
                ":"
                0 ")+n.g,n[t];case"
                i ":return n.i=((n.i=i.getMinutes())>9?"
                ":"
                0 ")+n.i,n.i;case"
                s ":return n.s=((n.s=i.getSeconds())>9?"
                ":"
                0 ")+n.s,n.s;case"
                u ":return n.u=i.getMilliseconds(),n.u;case"
                U ":return n.U=r.time(),n.U;default:return t}})},jindo.$Date.prototype.time=function(t){var e=jindo.$Date._paramCheck(arguments,"
                time ");switch(t=e.nParm,e+"
                "){case"
                s ":return this._date.setTime(t),this;case"
                g ":return this._date.getTime()}},jindo.$Date.prototype.year=function(t){var e=jindo.$Date._paramCheck(arguments,"
                year ");switch(t=e.nParm,e+"
                "){case"
                s ":return this._date.setFullYear(t),this;case"
                g ":return this._date.getFullYear()}},jindo.$Date.prototype.month=function(t){var e=jindo.$Date._paramCheck(arguments,"
                month ");switch(t=e.nParm,e+"
                "){case"
                s ":return this._date.setMonth(t),this;case"
                g ":return this._date.getMonth()}},jindo.$Date.prototype.date=function(t){var e=jindo.$Date._paramCheck(arguments,"
                date ");switch(t=e.nParm,e+"
                "){case"
                s ":return this._date.setDate(t),this;case"
                g ":return this._date.getDate()}},jindo.$Date.prototype.day=function(){return this._date.getDay()},jindo.$Date.prototype.hours=function(t){var e=jindo.$Date._paramCheck(arguments,"
                hours ");switch(t=e.nParm,e+"
                "){case"
                s ":return this._date.setHours(t),this;case"
                g ":return this._date.getHours()}},jindo.$Date.prototype.minutes=function(t){var e=jindo.$Date._paramCheck(arguments,"
                minutes ");switch(t=e.nParm,e+"
                "){case"
                s ":return this._date.setMinutes(t),this;case"
                g ":return this._date.getMinutes()}},jindo.$Date.prototype.seconds=function(t){var e=jindo.$Date._paramCheck(arguments,"
                seconds ");switch(t=e.nParm,e+"
                "){case"
                s ":return this._date.setSeconds(t),this;case"
                g ":return this._date.getSeconds()}},jindo.$Date.prototype.isLeapYear=function(){var t=this._date.getFullYear();return!((t%4||!(t%100))&&t%400)},jindo.$Date.prototype.compare=function(t,e){var n=g_checkVarType(arguments,{"
                4 dat ":["
                oDate: "+tDate],"
                4 str ":["
                oDate: "+tDate,"
                sType: "+tString]},"
                $Date# compare ");return t=n.oDate,e=n.sType,e?"
                s "===e?Math.floor(t/1e3)-Math.floor(this._date/1e3):"
                i "===e?Math.floor(Math.floor(t/1e3)/60)-Math.floor(Math.floor(this._date/1e3)/60):"
                h "===e?Math.floor(Math.floor(Math.floor(t/1e3)/60)/60)-Math.floor(Math.floor(Math.floor(this._date/1e3)/60)/60):"
                d "===e?Math.floor(Math.floor(Math.floor(Math.floor(t/1e3)/60)/60)/24)-Math.floor(Math.floor(Math.floor(Math.floor(this._date/1e3)/60)/60)/24):"
                m "===e?t.getMonth()-this._date.getMonth():"
                y "===e?t.getFullYear()-this._date.getFullYear():void 0:t-this._date},jindo.$Window=function(t){var e=arguments.callee;if(t instanceof e)return t;if(!(this instanceof e))try{return jindo.$Jindo._maxWarn(arguments.length,1,"
                $ "+tWindow),new e(t||window)}catch(n){if(n instanceof TypeError)return null;throw n}g_checkVarType(arguments,{"
                4 win ":["
                el: "+tWindow]},"
                $ "+tWindow);this._win=t},jindo.$Window.prototype.$value=function(){return this._win},jindo.$Window.prototype.resizeTo=function(t,e){g_checkVarType(arguments,{"
                4n um ":["
                nWidth: "+tNumeric,"
                nHeight: "+tNumeric]},"
                $Window# resizeTo ");return this._win.resizeTo(t,e),this},jindo.$Window.prototype.resizeBy=function(t,e){g_checkVarType(arguments,{"
                4n um ":["
                nWidth: "+tNumeric,"
                nHeight: "+tNumeric]},"
                $Window# resizeBy ");return this._win.resizeBy(t,e),this},jindo.$Window.prototype.moveTo=function(t,e){g_checkVarType(arguments,{"
                4n um ":["
                nLeft: "+tNumeric,"
                nTop: "+tNumeric]},"
                $Window# moveTo ");return this._win.moveTo(t,e),this},jindo.$Window.prototype.moveBy=function(t,e){g_checkVarType(arguments,{"
                4n um ":["
                nLeft: "+tNumeric,"
                nTop: "+tNumeric]},"
                $Window# moveBy ");return this._win.moveBy(t,e),this},jindo.$Window.prototype.sizeToContent=function(t,e){g_checkVarType(arguments,{"
                4n um ":["
                nWidth: "+tNumeric,"
                nHeight: "+tNumeric],"
                4 voi ":[]},"
                $Window# sizeToContent ");if(this._win.sizeToContent)this._win.sizeToContent();else{if(2!=arguments.length){var n,i,o=this._win,r=this._win.document;o.innerHeight?(n=o.innerWidth,i=o.innerHeight):r.documentElement&&r.documentElement.clientHeight?(n=r.documentElement.clientWidth,i=r.documentElement.clientHeight):r.body&&(n=r.body.clientWidth,i=r.body.clientHeight);var s,a,c=r.body.scrollHeight,h=r.body.offsetHeight;c>h?(s=r.body.scrollWidth,a=r.body.scrollHeight):(s=r.body.offsetWidth,a=r.body.offsetHeight),t=s-n,e=a-i}this._win.resizeBy(t,e)}return this},"
                undefined "!=typeof window)for(prop in jindo)jindo.hasOwnProperty(prop)&&(window[prop]=jindo[prop]);"
                function "==typeof define&&define.amd&&define.amd.jindo&&define("
                jindo ",[],function(){return jindo})}(function(){var t=document.getElementsByTagName("
                script ");return t[t.length-1].src.match(/[\?\&]jindo=(.*?)\&?$/)&&RegExp.$1?RegExp.$1.replace(/(\&.*)/,"
                "):"
                jindo "}()),jindo.Component=jindo.$Class({_htEventHandler:null,_htOption:null,$init:function(){var t=this.constructor.getInstance();t.push(this),this._htEventHandler={},this._htOption={},this._htOption._htSetter={}},option:function(t,e){switch(typeof t){case"
                undefined ":var n={};for(var i in this._htOption)"
                htCustomEventHandler "!=i&&"
                _htSetter "!=i&&(n[i]=this._htOption[i]);return n;case"
                string ":if("
                undefined "==typeof e)return this._htOption[t];if("
                htCustomEventHandler "==t){if("
                undefined "!=typeof this._htOption[t])return this;this.attach(e)}this._htOption[t]=e,"
                function "==typeof this._htOption._htSetter[t]&&this._htOption._htSetter[t](e);break;case"
                object ":for(var o in t){if("
                htCustomEventHandler "==o){if("
                undefined "!=typeof this._htOption[o])continue;this.attach(t[o])}"
                _htSetter "!==o&&(this._htOption[o]=t[o]),"
                function "==typeof this._htOption._htSetter[o]&&this._htOption._htSetter[o](t[o])}}return this},optionSetter:function(t,e){switch(typeof t){case"
                undefined ":return this._htOption._htSetter;case"
                string ":if("
                undefined "==typeof e)return this._htOption._htSetter[t];this._htOption._htSetter[t]=jindo.$Fn(e,this).bind();break;case"
                object ":for(var n in t)this._htOption._htSetter[n]=jindo.$Fn(t[n],this).bind()}return this},fireEvent:function(t,e){e=e||{};var n=this["
                on "+t],i=this._htEventHandler[t]||[],o="
                function "==typeof n,r=i.length>0;if(!o&&!r)return!0;i=i.concat(),e.sType=t,"
                undefined "==typeof e._aExtend&&(e._aExtend=[],e.stop=function(){e._aExtend.length>0&&(e._aExtend[e._aExtend.length-1].bCanceled=!0)}),e._aExtend.push({sType:t,bCanceled:!1});var s,a,c=[e];for(s=2,a=arguments.length;s<a;s++)c.push(arguments[s]);if(o&&n.apply(this,c),r){var h;for(s=0,h;h=i[s];s++)h.apply(this,c)}return!e._aExtend.pop().bCanceled},attach:function(t,e){if(1==arguments.length)return jindo.$H(arguments[0]).forEach(jindo.$Fn(function(t,e){this.attach(e,t)},this).bind()),this;var n=this._htEventHandler[t];return"
                undefined "==typeof n&&(n=this._htEventHandler[t]=[]),n.push(e),this},detach:function(t,e){if(1==arguments.length)return jindo.$H(arguments[0]).forEach(jindo.$Fn(function(t,e){this.detach(e,t)},this).bind()),this;var n=this._htEventHandler[t];if(n)for(var i,o=0;i=n[o];o++)if(i===e){n=n.splice(o,1);break}return this},detachAll:function(t){var e=this._htEventHandler;if(arguments.length)return"
                undefined "==typeof e[t]?this:(delete e[t],this);for(var n in e)delete e[n];return this}}),jindo.Component.factory=function(t,e){var n,i=[];"
                undefined "==typeof e&&(e={});for(var o,r=0;o=t[r];r++)n=new this(o,e),i[i.length]=n;return i},jindo.Component.getInstance=function(){return"
                undefined "==typeof this._aInstance&&(this._aInstance=[]),this._aInstance},jindo.Component.VERSION="
                1.3 .0 ",jindo.UIComponent=jindo.$Class({$init:function(){this._bIsActivating=!1},isActivating:function(){return this._bIsActivating},activate:function(){return this.isActivating()?this:(this._bIsActivating=!0,arguments.length>0?this._onActivate.apply(this,arguments):this._onActivate(),this)},deactivate:function(){return this.isActivating()?(this._bIsActivating=!1,arguments.length>0?this._onDeactivate.apply(this,arguments):this._onDeactivate(),this):this}}).extend(jindo.Component),jindo.Timer=jindo.$Class({$init:function(){this._nTimer=null,this._nLatest=null,this._nRemained=0,this._nDelay=null,this._fRun=null,this._bIsRunning=!1},start:function(t,e){return this.abort(),this._nRemained=0,this._nDelay=e,this._fRun=t,this._bIsRunning=!0,this._nLatest=this._getTime(),this.fireEvent("
                wait "),this._excute(this._nDelay,!1),!0},isRunning:function(){return this._bIsRunning},_getTime:function(){return(new Date).getTime()},_clearTimer:function(){var t=!1;return this._nTimer&&(clearTimeout(this._nTimer),this._bIsRunning=!1,t=!0),this._nTimer=null,t},abort:function(){return this._clearTimer(),!!this._fRun&&(this.fireEvent("
                abort "),this._fRun=null,!0)},pause:function(){var t=this._getTime()-this._nLatest;return this._nRemained=Math.max(this._nDelay-t,0),this._clearTimer()},_excute:function(t,e){var n=this;this._clearTimer(),this._bIsRunning=!0;var i=function(t){if(n._nTimer||t){n.fireEvent("
                run ");var e=n._fRun();if(n._nLatest=n._getTime(),!e)return t||clearTimeout(n._nTimer),n._nTimer=null,n._bIsRunning=!1,void n.fireEvent("
                end ");n.fireEvent("
                wait "),n._excute(n._nDelay,!1)}};t>-1?this._nTimer=setTimeout(i,t):i(!0)},resume:function(){return!(!this._fRun||this.isRunning())&&(this._bIsRunning=!0,this.fireEvent("
                wait "),this._excute(this._nRemained,!0),this._nRemained=0,!0)}}).extend(jindo.Component),jindo.Effect=function(t){if(this instanceof arguments.callee)throw new Error("
                You can 't create a instance of this");var e=/^(\-?[0-9\.]+)(%|px|pt|em)?$/,n=/^rgb\(([0-9]+)\s?,\s?([0-9]+)\s?,\s?([0-9]+)\)$/i,i=/^#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,o=/^#([0-9A-F])([0-9A-F])([0-9A-F])$/i,r=function(t){var r,s=t;return e.test(t)?(s=parseFloat(t),r=RegExp.$2||""):n.test(t)?(s=[parseInt(RegExp.$1,10),parseInt(RegExp.$2,10),parseInt(RegExp.$3,10)],r="color"):i.test(t=t.replace(o,"#$1$1$2$2$3$3"))&&(s=[parseInt(RegExp.$1,16),parseInt(RegExp.$2,16),parseInt(RegExp.$3,16)],r="color"),{nValue:s,sUnit:r}};return function(e,n){var i;if(arguments.length>1?(e=r(e),n=r(n),i=n.sUnit):(n=r(e),e=null,i=n.sUnit),e&&n&&e.sUnit!=n.sUnit)throw new Error("unit error");e=e&&e.nValue,n=n&&n.nValue;var o=function(o){var r=t(o),s=function(t,e){return(e-t)*r+t+i};if("color"==i){var a=Math.max(0,Math.min(255,parseInt(s(e[0],n[0]),10)))<<16;a|=Math.max(0,Math.min(255,parseInt(s(e[1],n[1]),10)))<<8,a|=Math.max(0,Math.min(255,parseInt(s(e[2],n[2]),10))),a=a.toString(16).toUpperCase();for(var c=0;6-a.length;c++)a="0"+a;return"#"+a}return s(e,n)};return null===e&&(o.setStart=function(t){if(t=r(t),t.sUnit!=i)throw new Error("unit eror");e=t.nValue}),o}},jindo.Effect.linear=jindo.Effect(function(t){return t}),jindo.Effect.easeInSine=jindo.Effect(function(t){return 1==t?1:-Math.cos(t*(Math.PI/2))+1}),jindo.Effect.easeOutSine=jindo.Effect(function(t){return Math.sin(t*(Math.PI/2))}),jindo.Effect.easeInOutSine=jindo.Effect(function(t){return t<.5?.5*jindo.Effect.easeInSine(0,1)(2*t):.5*jindo.Effect.easeOutSine(0,1)(2*t-1)+.5}),jindo.Effect.easeOutInSine=jindo.Effect(function(t){return t<.5?.5*jindo.Effect.easeOutSine(0,1)(2*t):.5*jindo.Effect.easeInSine(0,1)(2*t-1)+.5}),jindo.Effect.easeInQuad=jindo.Effect(function(t){return t*t}),jindo.Effect.easeOutQuad=jindo.Effect(function(t){return-(t*(t-2))}),jindo.Effect.easeInOutQuad=jindo.Effect(function(t){return t<.5?.5*jindo.Effect.easeInQuad(0,1)(2*t):.5*jindo.Effect.easeOutQuad(0,1)(2*t-1)+.5}),jindo.Effect.easeOutInQuad=jindo.Effect(function(t){return t<.5?.5*jindo.Effect.easeOutQuad(0,1)(2*t):.5*jindo.Effect.easeInQuad(0,1)(2*t-1)+.5}),jindo.Effect.easeInCubic=jindo.Effect(function(t){return Math.pow(t,3)}),jindo.Effect.easeOutCubic=jindo.Effect(function(t){return Math.pow(t-1,3)+1}),jindo.Effect.easeInOutCubic=jindo.Effect(function(t){return t<.5?.5*jindo.Effect.easeIn(0,1)(2*t):.5*jindo.Effect.easeOut(0,1)(2*t-1)+.5}),jindo.Effect.easeOutInCubic=jindo.Effect(function(t){return t<.5?.5*jindo.Effect.easeOut(0,1)(2*t):.5*jindo.Effect.easeIn(0,1)(2*t-1)+.5}),jindo.Effect.easeInQuart=jindo.Effect(function(t){return Math.pow(t,4)}),jindo.Effect.easeOutQuart=jindo.Effect(function(t){return-(Math.pow(t-1,4)-1)}),jindo.Effect.easeInOutQuart=jindo.Effect(function(t){return t<.5?.5*jindo.Effect.easeInQuart(0,1)(2*t):.5*jindo.Effect.easeOutQuart(0,1)(2*t-1)+.5}),jindo.Effect.easeOutInQuart=jindo.Effect(function(t){return t<.5?.5*jindo.Effect.easeOutQuart(0,1)(2*t):.5*jindo.Effect.easeInQuart(0,1)(2*t-1)+.5}),jindo.Effect.easeInQuint=jindo.Effect(function(t){return Math.pow(t,5)}),jindo.Effect.easeOutQuint=jindo.Effect(function(t){return Math.pow(t-1,5)+1}),jindo.Effect.easeInOutQuint=jindo.Effect(function(t){
                return t < .5 ? .5 * jindo.Effect.easeInQuint(0, 1)(2 * t) : .5 * jindo.Effect.easeOutQuint(0, 1)(2 * t - 1) + .5
            }), jindo.Effect.easeOutInQuint = jindo.Effect(function(t) {
                return t < .5 ? .5 * jindo.Effect.easeOutQuint(0, 1)(2 * t) : .5 * jindo.Effect.easeInQuint(0, 1)(2 * t - 1) + .5
            }), jindo.Effect.easeInCircle = jindo.Effect(function(t) {
                return -(Math.sqrt(1 - t * t) - 1)
            }), jindo.Effect.easeOutCircle = jindo.Effect(function(t) {
                return Math.sqrt(1 - (t - 1) * (t - 1))
            }), jindo.Effect.easeInOutCircle = jindo.Effect(function(t) {
                return t < .5 ? .5 * jindo.Effect.easeInCircle(0, 1)(2 * t) : .5 * jindo.Effect.easeOutCircle(0, 1)(2 * t - 1) + .5
            }), jindo.Effect.easeOutInCircle = jindo.Effect(function(t) {
                return t < .5 ? .5 * jindo.Effect.easeOutCircle(0, 1)(2 * t) : .5 * jindo.Effect.easeInCircle(0, 1)(2 * t - 1) + .5
            }), jindo.Effect.easeInBack = jindo.Effect(function(t) {
                var e = 1.70158;
                return 1 == t ? 1 : t / 1 * (t / 1) * ((1 + e) * t - e)
            }), jindo.Effect.easeOutBack = jindo.Effect(function(t) {
                var e = 1.70158;
                return 0 === t ? 0 : (t = t / 1 - 1) * t * ((e + 1) * t + e) + 1
            }), jindo.Effect.easeInOutBack = jindo.Effect(function(t) {
                return t < .5 ? .5 * jindo.Effect.easeInBack(0, 1)(2 * t) : .5 * jindo.Effect.easeOutBack(0, 1)(2 * t - 1) + .5
            }), jindo.Effect.easeInElastic = jindo.Effect(function(t) {
                var e, n = 0,
                    i = 0;
                return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (n || (n = .3), !i || i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - 1) * (2 * Math.PI) / n)))
            }), jindo.Effect.easeOutElastic = jindo.Effect(function(t) {
                var e, n = 0,
                    i = 0;
                return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (n || (n = .3), !i || i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
            }), jindo.Effect.easeInOutElastic = jindo.Effect(function(t) {
                var e, n = 0,
                    i = 0;
                return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = .3 * 1.5), !i || i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), t < 1 ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
            }), jindo.Effect.easeOutBounce = jindo.Effect(function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }), jindo.Effect.easeInBounce = jindo.Effect(function(t) {
                return 1 - jindo.Effect.easeOutBounce(0, 1)(1 - t)
            }), jindo.Effect.easeInOutBounce = jindo.Effect(function(t) {
                return t < .5 ? .5 * jindo.Effect.easeInBounce(0, 1)(2 * t) : .5 * jindo.Effect.easeOutBounce(0, 1)(2 * t - 1) + .5
            }), jindo.Effect.easeInExpo = jindo.Effect(function(t) {
                return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
            }), jindo.Effect.easeOutExpo = jindo.Effect(function(t) {
                return 1 == t ? 1 : -Math.pow(2, -10 * t / 1) + 1
            }), jindo.Effect.easeInOutExpo = jindo.Effect(function(t) {
                return t < .5 ? .5 * jindo.Effect.easeInExpo(0, 1)(2 * t) : .5 * jindo.Effect.easeOutExpo(0, 1)(2 * t - 1) + .5
            }), jindo.Effect.easeOutInExpo = jindo.Effect(function(t) {
                return t < .5 ? .5 * jindo.Effect.easeOutExpo(0, 1)(2 * t) : .5 * jindo.Effect.easeInExpo(0, 1)(2 * t - 1) + .5
            }), jindo.Effect._cubicBezier = function(t, e, n, i) {
                return function(o) {
                    function r(t) {
                        return ((l * t + u) * t + h) * t
                    }

                    function s(t) {
                        return ((p * t + f) * t + d) * t
                    }

                    function a(t) {
                        return (3 * l * t + 2 * u) * t + h
                    }

                    function c(t, e) {
                        var n, i, o, s, c, h;
                        for (o = t, h = 0; h < 8; h++) {
                            if (s = r(o) - t, Math.abs(s) < e) return o;
                            if (c = a(o), Math.abs(c) < 1e-6) break;
                            o -= s / c
                        }
                        if (n = 0, i = 1, o = t, o < n) return n;
                        if (o > i) return i;
                        for (; n < i;) {
                            if (s = r(o), Math.abs(s - t) < e) return o;
                            t > s ? n = o : i = o, o = .5 * (i - n) + n
                        }
                        return o
                    }
                    var h = 3 * t,
                        u = 3 * (n - t) - h,
                        l = 1 - h - u,
                        d = 3 * e,
                        f = 3 * (i - e) - d,
                        p = 1 - d - f;
                    return s(c(o, .005))
                }
            }, jindo.Effect.cubicBezier = function(t, e, n, i) {
                return jindo.Effect(jindo.Effect._cubicBezier(t, e, n, i))
            }, jindo.Effect.cubicEase = jindo.Effect.cubicBezier(.25, .1, .25, 1), jindo.Effect.cubicEaseIn = jindo.Effect.cubicBezier(.42, 0, 1, 1), jindo.Effect.cubicEaseOut = jindo.Effect.cubicBezier(0, 0, .58, 1), jindo.Effect.cubicEaseInOut = jindo.Effect.cubicBezier(.42, 0, .58, 1), jindo.Effect.cubicEaseOutIn = jindo.Effect.cubicBezier(0, .42, 1, .58), jindo.Effect.overphase = jindo.Effect(function(t) {
                return t /= .652785, (Math.sqrt((2 - t) * t) + .1 * t).toFixed(5)
            }), jindo.Effect.sinusoidal = jindo.Effect(function(t) {
                return -Math.cos(t * Math.PI) / 2 + .5
            }), jindo.Effect.mirror = jindo.Effect(function(t) {
                return t < .5 ? jindo.Effect.sinusoidal(0, 1)(2 * t) : jindo.Effect.sinusoidal(0, 1)(1 - 2 * (t - .5))
            }), jindo.Effect.pulse = function(t) {
                return jindo.Effect(function(e) {
                    return -Math.cos(e * (t - .5) * 2 * Math.PI) / 2 + .5
                })
            }, jindo.Effect.wave = function(t, e) {
                return jindo.Effect(function(n) {
                    return (e || 1) * Math.sin(t * (360 * n) * Math.PI / 180).toFixed(5)
                })
            }, jindo.Effect.easeIn = jindo.Effect.easeInCubic, jindo.Effect.easeOut = jindo.Effect.easeOutCubic, jindo.Effect.easeInOut = jindo.Effect.easeInOutCubic, jindo.Effect.easeOutIn = jindo.Effect.easeOutInCubic, jindo.Effect.bounce = jindo.Effect.easeOutBounce, jindo.Effect.elastic = jindo.Effect.easeInElastic, jindo.Transition = jindo.$Class({
                _nFPS: 30,
                _aTaskQueue: null,
                _oTimer: null,
                _bIsWaiting: !0,
                _bIsPlaying: !1,
                $init: function(t) {
                    this._aTaskQueue = [], this._oTimer = new jindo.Timer, this._oSleepTimer = new jindo.Timer, this.option({
                        fEffect: jindo.Effect.linear,
                        bCorrection: !1
                    }), this.option(t || {})
                },
                fps: function(t) {
                    return arguments.length > 0 ? (this._nFPS = t, this) : this._nFPS
                },
                isPlaying: function() {
                    return this._bIsPlaying
                },
                abort: function() {
                    return this._aTaskQueue = [], this._oTimer.abort(), this._oSleepTimer.abort(), this._bIsPlaying && this.fireEvent("abort"), this._bIsWaiting = !0, this._bIsPlaying = !1, this._htTaskToDo = null, this
                },
                start: function(t, e, n) {
                    return arguments.length > 0 && this.queue.apply(this, arguments), this._prepareNextTask(), this
                },
                queue: function(t, e) {
                    var n;
                    if ("function" == typeof arguments[0]) n = {
                        sType: "function",
                        fTask: arguments[0]
                    };
                    else {
                        var i = [];
                        if (arguments[1] instanceof Array) i = arguments[1];
                        else {
                            var o = [];
                            jindo.$A(arguments).forEach(function(t, e) {
                                e > 0 && (o.push(t), e % 2 === 0 && (i.push(o.concat()), o = []))
                            })
                        }
                        n = {
                            sType: "task",
                            nDuration: t,
                            aList: []
                        };
                        for (var r = 0, s = i.length; r < s; r++) {
                            var a, c = [],
                                h = i[r][1];
                            for (var u in h) a = h[u], /^(@|style\.)(\w+)/i.test(u) ? c.push(["style", RegExp.$2, a]) : c.push(["attr", u, a]);
                            n.aList.push({
                                elTarget: i[r][0],
                                aValue: c
                            })
                        }
                    }
                    return this._queueTask(n), this
                },
                pause: function() {
                    return this._oTimer.abort() && this.fireEvent("pause"), this
                },
                resume: function() {
                    if (this._htTaskToDo) {
                        this._bIsWaiting === !1 && this._bIsPlaying === !0 && this.fireEvent("resume"), this._doTask(), this._bIsWaiting = !1, this._bIsPlaying = !0;
                        var t = this;
                        this._oTimer.start(function() {
                            var e = !t._doTask();
                            return e && (t._bIsWaiting = !0, setTimeout(function() {
                                t._prepareNextTask()
                            }, 0)), !e
                        }, this._htTaskToDo.nInterval)
                    }
                    return this
                },
                precede: function(t, e, n) {
                    return this.start.apply(this, arguments), this
                },
                sleep: function(t, e) {
                    return "undefined" == typeof e && (e = function() {}), this._queueTask({
                        sType: "sleep",
                        nDuration: t,
                        fCallback: e
                    }), this._prepareNextTask(), this
                },
                _queueTask: function(t) {
                    this._aTaskQueue.push(t)
                },
                _dequeueTask: function() {
                    var t = this._aTaskQueue.shift();
                    if (t) {
                        if ("task" == t.sType)
                            for (var e = t.aList, n = 0, i = e.length; n < i; n++)
                                for (var o = e[n].elTarget, r = null, s = 0, a = e[n].aValue, c = a.length; s < c; s++) {
                                    var h = a[s][0],
                                        u = a[s][1],
                                        l = a[s][2];
                                    if ("function" != typeof l) {
                                        var d = this.option("fEffect");
                                        l = l instanceof Array ? d(l[0], l[1]) : d(l), a[s][2] = l
                                    }
                                    if (l.setStart)
                                        if (this._isHTMLElement(o)) switch (r = r || jindo.$Element(o), h) {
                                            case "style":
                                                l.setStart(r.css(u));
                                                break;
                                            case "attr":
                                                l.setStart(r.$value()[u])
                                        } else l.setStart(o.getter(u))
                                }
                        return t
                    }
                    return null
                },
                _prepareNextTask: function() {
                    if (this._bIsWaiting) {
                        var t = this._dequeueTask();
                        if (t) switch (t.sType) {
                            case "task":
                                this._bIsPlaying || this.fireEvent("start");
                                var e = 1e3 / this._nFPS,
                                    n = e / t.nDuration;
                                this._htTaskToDo = {
                                    aList: t.aList,
                                    nRatio: 0,
                                    nInterval: e,
                                    nGap: n,
                                    nStep: 0,
                                    nTotalStep: Math.ceil(t.nDuration / e)
                                }, this.resume();
                                break;
                            case "function":
                                this._bIsPlaying || this.fireEvent("start"), t.fTask(), this._prepareNextTask();
                                break;
                            case "sleep":
                                this._bIsPlaying && (this.fireEvent("sleep", {
                                    nDuration: t.nDuration
                                }), t.fCallback());
                                var i = this;
                                this._oSleepTimer.start(function() {
                                    i.fireEvent("awake"), i._prepareNextTask()
                                }, t.nDuration)
                        } else this._bIsPlaying && (this._bIsPlaying = !1, this.abort(), this.fireEvent("end"))
                    }
                },
                _isHTMLElement: function(t) {
                    return "tagName" in t
                },
                _doTask: function() {
                    for (var t = this._htTaskToDo, e = parseFloat(t.nRatio.toFixed(5), 1), n = t.nStep, i = t.nTotalStep, o = t.aList, r = {}, s = this.option("bCorrection"), a = 0, c = o.length; a < c; a++)
                        for (var h = o[a].elTarget, u = null, l = 0, d = o[a].aValue, f = d.length; l < f; l++) {
                            var p = d[l][0],
                                _ = d[l][1],
                                m = d[l][2](e);
                            if (this._isHTMLElement(h)) {
                                if (s) {
                                    var g = /^\-?[0-9\.]+(%|px|pt|em)?$/.test(m) && RegExp.$1 || "";
                                    if (g) {
                                        var v = parseFloat(m);
                                        v += r[_] || 0, v = parseFloat(v.toFixed(5)), a == c - 1 ? m = Math.round(v) + g : (r[_] = v - Math.floor(v), m = parseInt(v, 10) + g)
                                    }
                                }
                                switch (u = u || jindo.$Element(h), p) {
                                    case "style":
                                        u.css(_, m);
                                        break;
                                    case "attr":
                                        u.$value()[_] = m
                                }
                            } else h.setter(_, m);
                            this._bIsPlaying && this.fireEvent("playing", {
                                element: h,
                                sKey: _,
                                sValue: m,
                                nStep: n,
                                nTotalStep: i
                            })
                        }
                    return t.nRatio = Math.min(t.nRatio + t.nGap, 1), t.nStep += 1, 1 != e
                }
            }).extend(jindo.Component), function() {
                var t = jindo.$Element.prototype.css;
                jindo.$Element.prototype.css = function(e, n) {
                    return "opacity" == e ? "undefined" != typeof n ? this.opacity(parseFloat(n)) : this.opacity() : "undefined" != typeof n ? t.call(this, e, n) : t.call(this, e)
                }
            }(), jindo.Rolling = jindo.$Class({
                _oTransition: null,
                $init: function(t, e) {
                    this.option({
                        nFPS: 50,
                        nDuration: 800,
                        sDirection: "horizontal",
                        fEffect: jindo.Effect.linear,
                        sClassPrefix: "rolling-"
                    }), this.option(e || {}), this._el = jindo.$(t);
                    var n = "." + this.option("sClassPrefix") + "list";
                    this._bUsedClassPrefix = !0, this._elList = jindo.$$.test(this._el, n) ? this._el : jindo.$$.getSingle("> " + n, t), this._elList || (this._elList = jindo.$$.test(this._el, "ul, ol") ? this._el : jindo.$$.getSingle("> ul, > ol", t), this._bUsedClassPrefix = !1), this._oKeys = "horizontal" == this.option("sDirection") ? {
                        offsetWidth: "offsetWidth",
                        marginLeft: "marginLeft",
                        marginRight: "marginRight",
                        clientWidth: "clientWidth",
                        scrollLeft: "scrollLeft"
                    } : {
                        offsetWidth: "offsetHeight",
                        marginLeft: "marginTop",
                        marginRight: "marginBottom",
                        clientWidth: "clientHeight",
                        scrollLeft: "scrollTop"
                    }, this._initTransition()
                },
                _initTransition: function() {
                    var t = this;
                    this._oTransition = (new jindo.Transition).fps(this.option("nFPS")).attach({
                        end: function(e) {
                            if (t._nItemCount) {
                                var n = t._oKeys;
                                t._el[n.scrollLeft] = t._getPosition(t.getIndex() % t._nItemCount)
                            }
                            t.fireEvent("afterMove", {
                                nIndex: t.getIndex()
                            })
                        }
                    })
                },
                getTransition: function() {
                    return this._oTransition
                },
                getList: function() {
                    return this._elList
                },
                getItems: function() {
                    var t = "." + this.option("sClassPrefix") + "item";
                    return this._bUsedClassPrefix ? jindo.$$("> " + t, this._elList) : jindo.$$("> li", this._elList)
                },
                _offsetSize: function(t) {
                    var e = jindo.$Element(t),
                        n = this._oKeys,
                        i = parseInt(e.css(n.marginLeft), 10) || 0,
                        o = parseInt(e.css(n.marginRight), 10) || 0;
                    return t[n.offsetWidth] + i + o
                },
                getIndex: function() {
                    if (this.isMoving()) return this._nMoveTo;
                    for (var t = this._el, e = this._oKeys, n = t[e.scrollLeft], i = this.getItems(), o = 0, r = 0, s = 99999999, a = 0; a < i.length; a++) {
                        var c = Math.abs(n - o);
                        c < s && (s = c, r = a), o += this._offsetSize(i[a])
                    }
                    return r
                },
                _getPosition: function(t) {
                    for (var e = this._el, n = this._oKeys, i = this.getItems(), o = 0, r = this._getSize(), s = 0; s < t; s++) o += this._offsetSize(i[s]);
                    return o + e[n.clientWidth] > r && (o = r - e[n.clientWidth]), o
                },
                _getSize: function() {
                    for (var t = this.getItems(), e = 0, n = 0; n < t.length; n++) e += this._offsetSize(t[n]);
                    return this._nSize = e
                },
                _move: function(t) {
                    var e = this._el,
                        n = this._oKeys,
                        i = (this.getItems(), this._getPosition(t)),
                        o = (this._getSize(), {
                            element: e,
                            nIndex: t,
                            nScroll: i
                        });
                    if (this.fireEvent("beforeMove", o) && e[n.scrollLeft] != o.nScroll) {
                        var r = {};
                        return r[n.scrollLeft] = this.option("fEffect")(o.nScroll), this._nMoveTo = t, this.getTransition().abort().start(this.option("nDuration"), o.element, r), !0
                    }
                    return !1
                },
                moveTo: function(t) {
                    return t = Math.min(t, this.getItems().length - 1), t = Math.max(t, 0), this._move(t)
                },
                moveLastTo: function(t) {
                    return this.moveTo(this.getItems().length - 1 - t)
                },
                moveBy: function(t) {
                    return this.moveTo(this.getIndex() + t)
                },
                isMoving: function() {
                    return this._oTransition.isPlaying()
                },
                isOverflowed: function() {
                    return this._getSize() > this._el[this._oKeys.clientWidth]
                },
                getDisplayedItemCount: function() {
                    for (var t = 0, e = this.getItems(), n = 0, i = 0; i < e.length && (n += this._offsetSize(e[i]), n <= this._el[this._oKeys.clientWidth]); i++) t++;
                    return t
                }
            }).extend(jindo.Component), "undefined" == typeof jindo.m && "undefined" != typeof Node) {
            var ___Old__addEventListener___ = Node.prototype.addEventListener;
            Node.prototype.addEventListener = function(t, e, n) {
                var i = arguments.callee;
                return i && "click" === t && "A" === this.tagName && (this.___listeners___ || (this.___listeners___ = [])).push({
                    listener: e,
                    useCapture: n
                }), ___Old__addEventListener___.apply(this, arguments)
            };
            var ___Old__removeEventListener___ = Node.prototype.removeEventListener;
            Node.prototype.removeEventListener = function(t) {
                var e = arguments.callee;
                return e && "click" === t && "A" === this.tagName && this.___listeners___ && this.___listeners___.pop(), ___Old__removeEventListener___.apply(this, arguments)
            }
        }
        var raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame,
            caf = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame;
        if (raf && !caf) {
            var keyInfo = {},
                oldraf = raf;
            raf = function(t) {
                function e() {
                    keyInfo[n] && t()
                }
                var n = oldraf(e);
                return keyInfo[n] = !0, n
            }, caf = function(t) {
                delete keyInfo[t]
            }
        } else raf && caf || (raf = function(t) {
            return window.setTimeout(t, 16)
        }, caf = window.clearTimeout);
        window.requestAnimationFrame = raf, window.cancelAnimationFrame = caf, jindo.m = function() {
            function _initTouchEventName() {
                "ontouchstart" in window ? (_htTouchEventName.start = "touchstart", _htTouchEventName.move = "touchmove", _htTouchEventName.end = "touchend", _htTouchEventName.cancel = "touchcancel") : window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0 && (_htTouchEventName.start = "MSPointerDown", _htTouchEventName.move = "MSPointerMove", _htTouchEventName.end = "MSPointerUp", _htTouchEventName.cancel = "MSPointerCancel")
            }

            function _getOrientationChangeEvt() {
                var t = "onorientationchange" in window ? "orientationchange" : "resize";
                return _htOsInfo.android && "2.1" === _htOsInfo.version && (t = "resize"), t
            }

            function _getVertical() {
                var t = null,
                    e = _getOrientationChangeEvt();
                if ("resize" === e) {
                    var n = document.documentElement.clientWidth;
                    t = _nPreWidth > n || n == _nPreWidth && (!jindo.$Agent().navigator().mobile || jindo.$Agent().os().ipad ? n < document.documentElement.clientHeight : _isVertical), _nPreWidth = n
                } else {
                    var i = window.orientation;
                    0 === i || 180 == i ? t = !0 : (90 == i || -90 == i) && (t = !1)
                }
                return t
            }

            function _attachEvent() {
                jindo.$Fn(_onOrientationChange, this).attach(window, _getOrientationChangeEvt()).attach(window, "load"), jindo.$Fn(_onPageshow, this).attach(window, "pageshow")
            }

            function _initDeviceInfo() {
                function t(t, e) {
                    return (e || "").indexOf(t) > -1
                }
                _setOsInfo(), _setBrowserInfo();
                var e = navigator.userAgent;
                _htDeviceInfo = {
                    iphone: _htOsInfo.iphone,
                    ipad: _htOsInfo.ipad,
                    android: _htOsInfo.android,
                    win: t("Windows Phone", e),
                    galaxyTab: /SHW-M180/.test(e),
                    galaxyTab2: /SHW-M380/.test(e),
                    galaxyS: /SHW-M110/.test(e),
                    galaxyS2: /SHW-M250|GT-I9100/.test(e),
                    galaxyS2LTE: /SHV-E110/.test(e),
                    galaxyS3: /SHV-E210|SHW-M440|GT-I9300/.test(e),
                    galaxyNote: /SHV-E160/.test(e),
                    galaxyNote2: /SHV-E250/.test(e),
                    galaxyNexus: /Galaxy Nexus/.test(e),
                    optimusLte2: /LG-F160/.test(e),
                    optimusVu: /LG-F100/.test(e),
                    optimusLte: /LG-LU6200|LG-SU640|LG-F120K'/.test(e),
                    galaxyS4: /SHV-E300|GT-I9500|GT-I9505|SGH-M919|SPH-L720|SGH-I337|SCH-I545/.test(e),
                    bChrome: _htBrowserInfo.chrome,
                    bSBrowser: _htBrowserInfo.bSBrowser,
                    bInapp: !1,
                    version: _htOsInfo.version,
                    browserVersion: _htBrowserInfo.version
                };
                for (var n in _htDeviceInfo) "boolean" == typeof _htDeviceInfo[n] && _htDeviceInfo[n] && _htDeviceInfo.hasOwnProperty(n) && "b" !== n[0] && (_htDeviceInfo.name = n);
                _htDeviceInfo.samsung = /GT-|SCH-|SHV-|SHW-|SPH|SWT-|SGH-|EK-|Galaxy Nexus|SAMSUNG/.test(e), _htDeviceInfo.lg = /LG-/.test(e), _htDeviceInfo.pantech = /IM-/.test(e), _htDeviceInfo.iphone || _htDeviceInfo.ipad ? t("Safari", e) || (_htDeviceInfo.bInapp = !0) : _htDeviceInfo.android && (e = e.toLowerCase(), (t("inapp", e) || t("app", e.replace("applewebkit", ""))) && (_htDeviceInfo.bInapp = !0))
            }

            function _setOsInfo() {
                _htOsInfo = jindo.$Agent().os(), _isInapp(), _htOsInfo.version = _htOsInfo.version || _getOsVersion(), _htOsInfo.ios = "undefined" == typeof _htOsInfo.ios ? _htOsInfo.ipad || _htOsInfo.iphone : _htOsInfo.ios
            }

            function _setBrowserInfo() {
                _htBrowserInfo = jindo.$Agent().navigator(), _htOsInfo.ios && /CriOS/.test(navigator.userAgent) && (_htBrowserInfo.chrome = !0), "undefined" == typeof _htBrowserInfo.firefox && (_htBrowserInfo.firefox = /Firefox/.test(navigator.userAgent)), _isSBrowser(), _updateUnderVersion()
            }

            function _updateUnderVersion() {
                _htBrowserInfo.msafari && _htBrowserInfo.chrome ? _htBrowserInfo.version = parseFloat(_htOsInfo.ios ? navigator.userAgent.match(/CriOS[ \/]([0-9.]+)/)[1] : navigator.userAgent.match(/Chrome[ \/]([0-9.]+)/)[1]) : _htBrowserInfo.firefox && (_htBrowserInfo.version = parseFloat(navigator.userAgent.match(/Firefox[ \/]([0-9.]+)/)[1]))
            }

            function _isInapp() {
                var t = navigator.userAgent;
                _htOsInfo.bInapp = !1, _htOsInfo.ios ? -1 == t.indexOf("Safari") && (_htOsInfo.bInapp = !0) : _htOsInfo.android && (t = t.toLowerCase(), (-1 != t.indexOf("inapp") || -1 != t.replace("applewebkit", "").indexOf("app")) && (_htOsInfo.bInapp = !0))
            }

            function _isSBrowser() {
                _htBrowserInfo.bSBrowser = !1;
                var t = navigator.userAgent,
                    e = t.match(/(SAMSUNG|Chrome)/gi) || "";
                e.length > 1 && (_htBrowserInfo.bSBrowser = !0)
            }

            function _getOsVersion() {
                if (!_htOsInfo.version) {
                    var t, e = navigator.userAgent,
                        n = "";
                    return _htOsInfo.iphone || _htOsInfo.ipad ? (t = e.match(/OS\s([\d|\_]+\s)/i), null !== t && t.length > 1 && (n = t[1])) : _htOsInfo.android ? (t = e.match(/Android\s([^\;]*)/i), null !== t && t.length > 1 && (n = t[1])) : _htOsInfo.mwin && (t = e.match(/Windows Phone\s([^\;]*)/i), null !== t && t.length > 1 && (n = t[1])), n.replace(/\_/g, ".").replace(/\s/g, "")
                }
            }

            function _onOrientationChange(t) {
                if ("load" === t.type) return _nPreWidth = document.documentElement.clientWidth, void(_isVertical = _htOsInfo.bInapp || !_htOsInfo.iphone && !_htOsInfo.ipad && "resize" === _getOrientationChangeEvt() ? !(_nPreWidth > document.documentElement.clientHeight) : _getVertical());
                if ("resize" === _getOrientationChangeEvt()) setTimeout(function() {
                    _orientationChange(t)
                }, 0);
                else {
                    var e = jindo.$Document().clientSize().width,
                        n = 300;
                    if (_htDeviceInfo.android) {
                        if ("orientationchange" == t.type && e == _nPreWidth) return setTimeout(function() {
                            _onOrientationChange(t)
                        }, 500), !1;
                        _nPreWidth = e
                    }
                    clearTimeout(_nRotateTimer), _nRotateTimer = setTimeout(function() {
                        _orientationChange(t)
                    }, n)
                }
            }

            function _orientationChange(t) {
                var e = _isVertical;
                _isVertical = _getVertical(), (jindo.$Agent().navigator().mobile || jindo.$Agent().os().ipad) && e !== _isVertical && (t.sType = "rotate", t.isVertical = _isVertical, _fireEvent("mobilerotate", t))
            }

            function _onPageshow(t) {
                _isVertical = _getVertical(), t.sType = "pageShow", setTimeout(function() {
                    _fireEvent("mobilePageshow", t)
                }, 300)
            }

            function _getTranslateOffsetFromCSSMatrix(t) {
                var e = new WebKitCSSMatrix(window.getComputedStyle(t).webkitTransform);
                return {
                    top: e.m42,
                    left: e.m41
                }
            }

            function _fireEvent(t, e) {
                if (_htHandler[t])
                    for (var n = _htHandler[t].concat(), i = 0, o = n.length; o > i; i++) n[i].call(this, e)
            }

            function _getTranslateOffsetFromStyle(t) {
                var e = 0,
                    n = 0,
                    i = null,
                    o = t.style["" == jindo.m.getCssPrefix() ? "transform" : jindo.m.getCssPrefix() + "Tranform"];
                if (o && o.length > 0 && (i = o.match(/translate.{0,2}\((.*)\)/), i && i.length > 1)) {
                    var r = i[1].split(",");
                    r && r.length > 1 && (e = parseInt(r[1], 10), n = parseInt(r[0], 10))
                }
                return {
                    top: e,
                    left: n
                }
            }
            var _isVertical = null,
                _nPreWidth = -1,
                _nRotateTimer = null,
                _htHandler = {},
                _htDeviceInfo = {},
                _htAddPatch = {},
                _htOsInfo = {},
                _htBrowserInfo = {},
                _htTouchEventName = {
                    start: "mousedown",
                    move: "mousemove",
                    end: "mouseup",
                    cancel: null
                },
                _htDeviceList = {
                    galaxyTab: ["SHW-M180"],
                    galaxyTab2: ["SHW-M380"],
                    galaxyS: ["SHW-M110"],
                    galaxyS2: ["SHW-M250", "GT-I9100"],
                    galaxyS2LTE: ["SHV-E110"],
                    galaxyS3: ["SHV-E210", "SHW-M440", "GT-I9300"],
                    galaxyNote: ["SHV-E160"],
                    galaxyNote2: ["SHV-E250"],
                    galaxyNexus: ["Galaxy Nexus"],
                    optimusLte2: ["LG-F160"],
                    optimusVu: ["LG-F100"],
                    optimusLte: ["LG-LU6200", "LG-SU640", "LG-F120K"]
                },
                _htClientSize = {
                    galaxyTab: {
                        4: {
                            portrait: 400
                        },
                        "default": {
                            portrait: 300,
                            landscape: 100
                        }
                    },
                    galaxyTab2: {
                        "default": {
                            portrait: 500,
                            landscape: 100
                        }
                    },
                    galaxyNexus: {
                        "default": {
                            portrait: 800,
                            address: 30,
                            landscape: 100
                        }
                    }
                },
                __M__ = {
                    MOVETYPE: {
                        0: "hScroll",
                        1: "vScroll",
                        2: "dScroll",
                        3: "tap",
                        4: "longTap",
                        5: "doubleTap",
                        6: "pinch",
                        7: "rotate",
                        8: "pinch-rotate"
                    },
                    sVersion: "unknown",
                    $init: function() {
                        _initDeviceInfo(), _initTouchEventName(), _attachEvent()
                    },
                    bindRotate: function(t) {
                        var e = _htHandler.mobilerotate;
                        "undefined" == typeof e && (e = _htHandler.mobilerotate = []), e.push(t)
                    },
                    unbindRotate: function(t) {
                        var e = _htHandler.mobilerotate;
                        if (e)
                            for (var n, i = 0; n = e[i]; i++)
                                if (n === t) {
                                    e.splice(i, 1);
                                    break
                                }
                    },
                    bindPageshow: function(t) {
                        var e = _htHandler.mobilePageshow;
                        "undefined" == typeof e && (e = _htHandler.mobilePageshow = []), e.push(t)
                    },
                    unbindPageshow: function(t) {
                        var e = _htHandler.mobilePageshow;
                        if (e)
                            for (var n, i = 0; n = e[i]; i++)
                                if (n === t) {
                                    e.splice(i, 1);
                                    break
                                }
                    },
                    getDeviceInfo: function() {
                        return _htDeviceInfo
                    },
                    getOsInfo: function() {
                        return _htOsInfo
                    },
                    getBrowserInfo: function() {
                        return _htBrowserInfo
                    },
                    isVertical: function() {
                        return null === _isVertical ? _getVertical() : _isVertical
                    },
                    getNodeElement: function(t) {
                        for (; 1 != t.nodeType;) t = t.parentNode;
                        return t
                    },
                    getTranslateOffset: function(t) {
                        t = jindo.$Element(t);
                        var e, n = t.$value();
                        return e = _htOsInfo.android && 3 === parseInt(_htOsInfo.version, 10) ? _getTranslateOffsetFromStyle(n) : "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix ? _getTranslateOffsetFromCSSMatrix(n) : _getTranslateOffsetFromStyle(n)
                    },
                    getStyleOffset: function(t) {
                        var e = parseInt(t.css("left"), 10),
                            n = parseInt(t.css("top"), 10);
                        return e = isNaN(e) ? 0 : e, n = isNaN(n) ? 0 : n, {
                            left: e,
                            top: n
                        }
                    },
                    attachTransitionEnd: function(t, e) {
                        var n = +jindo.$Jindo().version.replace(/[a-z.]/gi, "");
                        if (n > 230) t._jindo_fn_ = jindo.$Fn(e, this).attach(t, "transitionend");
                        else {
                            var i = ("ms" === this.getCssPrefix() ? "MS" : this.getCssPrefix()) + "TransitionEnd";
                            t.addEventListener(i, e, !1)
                        }
                    },
                    detachTransitionEnd: function(t, e) {
                        var n = +jindo.$Jindo().version.replace(/[a-z.]/gi, "");
                        if (n > 230) t._jindo_fn_ && (t._jindo_fn_.detach(t, "transitionend"), delete t._jindo_fn_);
                        else {
                            var i = ("ms" === this.getCssPrefix() ? "MS" : this.getCssPrefix()) + "TransitionEnd";
                            t.removeEventListener(i, e, !1)
                        }
                    },
                    _attachFakeJindo: function(t, e, n) {
                        var i = +jindo.$Jindo().version.replace(/[a-z.]/gi, ""),
                            o = null;
                        return o = 230 > i && "undefined" != typeof _notSupport ? _notSupport.$Fn(e).attach(t, n) : jindo.$Fn(e).attach(t, n)
                    },
                    _getTouchEventName: function() {
                        return _htTouchEventName
                    },
                    getCssPrefix: function() {
                        var t = "";
                        return "undefined" != typeof document.body.style.webkitTransition ? t = "webkit" : "undefined" != typeof document.body.style.transition || ("undefined" != typeof document.body.style.MozTransition ? t = "Moz" : "undefined" != typeof document.body.style.OTransition ? t = "O" : "undefined" != typeof document.body.style.msTransition && (t = "ms")), t
                    },
                    getClosest: function(t, e) {
                        var n, i = jindo.$Element(e),
                            o = /<\/?(?:h[1-5]|[a-z]+(?:\:[a-z]+)?)[^>]*>/gi;
                        return o.test(t) ? "<" + e.tagName.toUpperCase() + ">" == t.toUpperCase() ? n = e : (n = i.parent(function(e) {
                            return "<" + e.$value().tagName.toUpperCase() + ">" == t.toUpperCase() ? e : void 0
                        }), n = !!n.length && n[0].$value()) : (0 == t.indexOf(".") && (t = t.substring(1, t.length)), i.hasClass(t) ? n = e : (n = i.parent(function(e) {
                            return e.hasClass(t) ? e : void 0
                        }), n = !!n.length && n[0].$value())), n
                    },
                    useCss3d: function(t) {
                        if (_htAddPatch.useCss3d && "function" == typeof _htAddPatch.useCss3d) switch (_htAddPatch.useCss3d()) {
                            case -1:
                                return !1;
                            case 1:
                                return !0
                        }
                        "undefined" == typeof t && (t = !1);
                        var e = !1;
                        if (_htBrowserInfo.chrome && _htBrowserInfo.version < "25" && !_htBrowserInfo.bSBrowser) return e;
                        if (_htOsInfo.ios) e = !0;
                        else if (_htBrowserInfo.firefox) e = !0;
                        else if (_htOsInfo.android) {
                            var n = navigator.userAgent.match(/\(.*\)/)[0];
                            _htOsInfo.version >= "4.1.0" ? e = !/EK-GN120|SM-G386F/.test(n) : (!t && _htOsInfo.version >= "4.0" && (e = !0), _htOsInfo.version >= "4.0.3" && /SHW-|SHV-|GT-|SCH-|SGH-|SPH-|LG-F160|LG-F100|LG-F180|LG-F200|EK-|IM-A|LG-F240|LG-F260/.test(n) && !/SHW-M420|SHW-M200|GT-S7562/.test(n) && (e = !0))
                        }
                        return e
                    },
                    patch: function(t) {
                        return _htAddPatch.ver = t, this
                    },
                    _checkPatchVersion: function() {
                        var t = jindo.m.Component.VERSION.split("."),
                            e = t.slice(0, 3).join(".");
                        return _htAddPatch.ver >= e
                    },
                    add: function(t) {
                        if (this._checkPatchVersion())
                            for (var e in t) _htAddPatch[e] = t[e];
                        return this
                    },
                    getDeviceName: function() {
                        if (_htAddPatch.getDeviceName && "function" == typeof _htAddPatch.getDeviceName && _htAddPatch.getDeviceName()) return _htAddPatch.getDeviceName();
                        var sUserAgent = navigator.userAgent;
                        for (var i in _htDeviceList)
                            if (eval("/" + _htDeviceList[i].join("|") + "/").test(sUserAgent)) return i;
                        var htInfo = jindo.$Agent().os();
                        for (var x in htInfo)
                            if (htInfo[x] === !0 && htInfo.hasOwnProperty(x)) return x
                    },
                    useFixed: function() {
                        if (_htAddPatch.useFixed && "function" == typeof _htAddPatch.useFixed) switch (_htAddPatch.useFixed()) {
                            case -1:
                                return !1;
                            case 1:
                                return !0
                        }
                        var t = !1;
                        return (_htBrowserInfo.chrome || _htBrowserInfo.firefox || _htOsInfo.android && parseInt(_htOsInfo.version, 10) >= 3 || _htOsInfo.ios && parseInt(_htOsInfo.version, 10) >= 5 || _htOsInfo.mwin && parseInt(_htOsInfo.version, 10) >= 8) && (t = !0), t
                    },
                    useTimingFunction: function(t) {
                        if (_htAddPatch.useTimingFunction && "function" == typeof _htAddPatch.useTimingFunction && _htAddPatch.useTimingFunction()) switch (_htAddPatch.useTimingFunction()) {
                            case -1:
                                return !1;
                            case 1:
                                return !0
                        }
                        "undefined" == typeof t && (t = !1);
                        var e = this.useCss3d();
                        return _htOsInfo.android ? (e = !1, !t && _htOsInfo.version >= "4.0" && (e = !0)) : _htOsInfo.ios && parseInt(_htOsInfo.version, 10) >= 6 && (e = !!t), e
                    },
                    _cacheMaxClientSize: {},
                    _fullSizeCheckElement: null,
                    _allEventStop: function(t, e) {
                        this._htEvent || (this._htEvent = {}), "detach" == e ? (this._htEvent.touchstart.detach(document.body, "touchstart").detach(document.body, "touchmove"), this._htEvent = {}) : this._htEvent.touchstart || "attach" != e || (this._htEvent.touchstart = jindo.$Fn(t, this).attach(document.body, "touchstart").attach(document.body, "touchmove"))
                    },
                    _stopDefault: function(t) {
                        t.stop()
                    },
                    _hasOrientation: void 0 !== window.orientation,
                    _maxClientSize: function(t, e) {
                        var n = this.getOsInfo();
                        this._allEventStop(this._stopDefault, "attach"), this._fullSizeCheckElement || (this._fullSizeCheckElement = document.createElement("div"));
                        var i = n.android ? 500 : 100;
                        i = e ? 1 : i;
                        var o;
                        this._hasOrientation && (o = Math.abs(window.orientation / 90) % 2, i = void 0 !== this._cacheMaxClientSize[o] ? 0 : i);
                        var r = this;
                        document.body.scrollTop <= 1 ? (document.body.appendChild(r._fullSizeCheckElement), r._fullSizeCheckElement.style.cssText = "position:absolute; top: 0px; width:100%;height:" + parseInt(window.innerHeight + 200, 10) + "px;", window.scrollTo(0, 1), setTimeout(function() {
                            r._checkSize(r._hasOrientation, r._cacheMaxClientSize, o, t, r, i)
                        }, i)) : (this._fullSizeCheckElement.style.height = window.innerHeight + "px", this._checkSize(this._hasOrientation, this._cacheMaxClientSize, o, t, r, i))
                    },
                    _checkSize: function(t, e, n, i, o, r) {
                        var s = this.getOsInfo(),
                            a = this.getBrowserInfo();
                        this._allEventStop(this._stopDefault, "attach");
                        var c;
                        t && e[n] ? c = e[n] : (o._fullSizeCheckElement.style.cssText = "position:absolute; top: 0px; width:100%;height:" + window.innerHeight + "px;overflow:hidden", c = a.mobile || s.ipad ? {
                            width: window.innerWidth,
                            height: window.innerHeight
                        } : {
                            width: document.documentElement.clientWidth,
                            height: document.documentElement.clientHeight
                        }, t && (e[n] = c)), i.call(o, c);
                        var h = this;
                        this._allEventStop(this._stopDefault, "detach"), 0 === r ? this._fullSizeCheckElement.style.height = "0px" : setTimeout(function() {
                            h._fullSizeCheckElement.style.height = "0px"
                        }, r)
                    },
                    hasOffsetBug: function() {
                        if (_htAddPatch.hasOffsetBug && "function" == typeof _htAddPatch.hasOffsetBug) switch (_htAddPatch.hasOffsetBug()) {
                            case -1:
                                return !1;
                            case 1:
                                return !0
                        }
                        var t = !1;
                        return t = !!_htOsInfo.android && (!_htBrowserInfo.chrome && !_htBrowserInfo.firefox && _htOsInfo.version < "4")
                    },
                    hasClickBug: function() {
                        if (_htAddPatch.hasClickBug && "function" == typeof _htAddPatch.hasClickBug) switch (_htAddPatch.hasClickBug()) {
                            case -1:
                                return !1;
                            case 1:
                                return !0
                        }
                        return _htOsInfo.ios || window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0 || !1
                    }
                };
            return __M__._isUseFixed = __M__.useFixed, __M__._isUseTimingFunction = __M__.useTimingFunction, __M__._isUseCss3d = __M__.useCss3d, __M__.getCssOffset = __M__.getTranslateOffset, __M__.$init(), __M__
        }(), "mixin" in jindo.$Jindo || (jindo.$Jindo.mixin = function(t, e) {
            var n = {};
            for (var i in t) n[i] = t[i];
            for (i in e) e.hasOwnProperty(i) && (n[i] = e[i]);
            return n
        }), jindo.m.Effect = function(t) {
            if (this instanceof arguments.callee) throw new Error("You can't create a instance of this");
            var e = /^(\-?[0-9\.]+)(%|\w+)?$/,
                n = /^rgb\(([0-9]+)\s?,\s?([0-9]+)\s?,\s?([0-9]+)\)$/i,
                i = /^rgba\(([0-9]+)\s?,\s?([0-9]+)\s?,\s?([0-9]+),\s?([0-9\.]+)\)$/i,
                o = /^hsl\(([0-9\.]+)\s?,\s?([0-9\.]+)%\s?,\s?([0-9\.]+)%\)$/i,
                r = /^hsla\(([0-9\.]+)\s?,\s?([0-9\.]+)%\s?,\s?([0-9\.]+)%,\s?([0-9\.]+)\)$/i,
                s = /^#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,
                a = /^#([0-9A-F])([0-9A-F])([0-9A-F])$/i,
                c = function(t) {
                    var c, h = t;
                    if (e.test(t)) h = parseFloat(t), c = RegExp.$2 || "";
                    else if (n.test(t)) h = [parseInt(RegExp.$1, 10), parseInt(RegExp.$2, 10), parseInt(RegExp.$3, 10), 1], c = "color";
                    else if (i.test(t)) h = [parseInt(RegExp.$1, 10), parseInt(RegExp.$2, 10), parseInt(RegExp.$3, 10), parseFloat(RegExp.$4, 10)], c = "color";
                    else if (o.test(t)) h = d(parseFloat(RegExp.$1, 10), parseFloat(RegExp.$2, 10) / 100, parseFloat(RegExp.$3, 10) / 100, 1), h.push(1), c = "color";
                    else if (r.test(t)) h = d(parseFloat(RegExp.$1, 10), parseFloat(RegExp.$2, 10) / 100, parseFloat(RegExp.$3, 10) / 100, 1), h.push(parseFloat(RegExp.$4, 10)), c = "color";
                    else {
                        if (!s.test(t = t.replace(a, "#$1$1$2$2$3$3"))) throw new Error("unit error (" + t + ")");
                        h = [parseInt(RegExp.$1, 16), parseInt(RegExp.$2, 16), parseInt(RegExp.$3, 16), 1], c = "color"
                    }
                    return {
                        nValue: h,
                        sUnit: c
                    }
                },
                h = function(t) {
                    var e = [];
                    return t.replace(/([^\s]+\([^\)]*\)|[^\s]+)\s?/g, function(t, n) {
                        e.push(n)
                    }), e
                },
                u = function(t) {
                    for (var e = h(t ? t + "" : "0"), n = [], i = 0, o = e.length; o > i; i++) n.push(c(e[i]));
                    return n
                },
                l = function(t) {
                    return "object" == typeof t ? {
                        nValue: t.nValue,
                        sUnit: t.sUnit
                    } : t
                },
                d = function(t, e, n) {
                    var i, o, r, s = (1 - Math.abs(2 * n - 1)) * e,
                        a = t / 60,
                        c = s * (1 - Math.abs(a % 2 - 1));
                    void 0 === t || isNaN(t) || null === t ? i = o = r = 0 : a >= 0 && 1 > a ? (i = s, o = c, r = 0) : a >= 1 && 2 > a ? (i = c, o = s, r = 0) : a >= 2 && 3 > a ? (i = 0, o = s, r = c) : a >= 3 && 4 > a ? (i = 0, o = c, r = s) : a >= 4 && 5 > a ? (i = c, o = 0, r = s) : a >= 5 && 6 > a && (i = s, o = 0, r = c);
                    var h = n - s / 2;
                    return [Math.round(255 * (i + h)), Math.round(255 * (o + h)), Math.round(255 * (r + h))]
                };
            return function(e, n) {
                var i, o, r = function() {
                        var t = !1;
                        if (s.start !== e && (i = u(s.start), e = s.start, t = !0), s.end !== n && (o = u(s.end), n = s.end, t = !0), t) {
                            var r, a, c = Math.max(i.length, o.length);
                            if (i.length !== o.length && c > 1) {
                                switch (i.length) {
                                    case 1:
                                        i[1] = l(i[2] = l(i[3] = l(i[0])));
                                        break;
                                    case 2:
                                        i[2] = l(i[0]), i[3] = l(i[1]);
                                        break;
                                    case 3:
                                        i[3] = l(i[1])
                                }
                                switch (o.length) {
                                    case 1:
                                        o[1] = o[2] = o[3] = o[0];
                                        break;
                                    case 2:
                                        o[2] = o[0], o[3] = o[1];
                                        break;
                                    case 3:
                                        o[3] = o[1]
                                }
                            }
                            for (var h = 0; c > h; h++)
                                if (r = i[h], a = o[h], 0 === r.nValue ? r.sUnit = a.sUnit : 0 === a.nValue && (a.sUnit = r.sUnit), r.sUnit != a.sUnit) throw new Error("unit error (" + e + ", " + n + ")")
                        }
                    },
                    s = function(e) {
                        var n = [];
                        r();
                        for (var s, a, c, h, u, l = 0, d = Math.max(i.length, o.length); d > l; l++) {
                            s = i[l], a = o[l], c = s.nValue, h = a.nValue, u = s.sUnit;
                            var f = t(e),
                                p = function(t, e, n) {
                                    return (e - t) * f + t + (n || 0)
                                };
                            if ("color" != u) n.push(p(c, h, u));
                            else {
                                var _ = p(c[3], h[3], 0);
                                if (1 === _) {
                                    var m = Math.max(0, Math.min(255, Math.round(p(c[0], h[0], 0)))) << 16;
                                    m |= Math.max(0, Math.min(255, Math.round(p(c[1], h[1], 0)))) << 8, m |= Math.max(0, Math.min(255, Math.round(p(c[2], h[2], 0)))), m = m.toString(16).toUpperCase();
                                    for (var g = 0; 6 - m.length; g++) m = "0" + m;
                                    n.push("#" + m)
                                } else n.push("rgba(" + [Math.round(p(c[0], h[0], 0)), Math.round(p(c[1], h[1], 0)), Math.round(p(c[2], h[2], 0)), p(c[3], h[3], 0)].join(",") + ")")
                            }
                        }
                        return n.join(" ")
                    };
                switch (arguments.length) {
                    case 0:
                        break;
                    case 1:
                        n = e || "0", e = "0", s.setStart = function(t) {
                            this.start = t
                        }
                }
                return s.start = e, s.end = n, s.effectConstructor = arguments.callee, e = n = null, arguments.length > 1 && r(), s
            }
        }, jindo.m.Effect.linear = jindo.m.Effect(function(t) {
            return t
        }), jindo.m.Effect.easeInSine = jindo.m.Effect(function(t) {
            return 1 == t ? 1 : -Math.cos(t * (Math.PI / 2)) + 1
        }), jindo.m.Effect.easeOutSine = jindo.m.Effect(function(t) {
            return Math.sin(t * (Math.PI / 2))
        }), jindo.m.Effect.easeInOutSine = jindo.m.Effect(function(t) {
            return .5 > t ? .5 * jindo.m.Effect.easeInSine(0, 1)(2 * t) : .5 * jindo.m.Effect.easeOutSine(0, 1)(2 * t - 1) + .5
        }), jindo.m.Effect.easeOutInSine = jindo.m.Effect(function(t) {
            return .5 > t ? .5 * jindo.m.Effect.easeOutSine(0, 1)(2 * t) : .5 * jindo.m.Effect.easeInSine(0, 1)(2 * t - 1) + .5
        }), jindo.m.Effect.easeInQuad = jindo.m.Effect(function(t) {
            return t * t
        }), jindo.m.Effect.easeOutQuad = jindo.m.Effect(function(t) {
            return -(t * (t - 2))
        }), jindo.m.Effect.easeInOutQuad = jindo.m.Effect(function(t) {
            return .5 > t ? .5 * jindo.m.Effect.easeInQuad(0, 1)(2 * t) : .5 * jindo.m.Effect.easeOutQuad(0, 1)(2 * t - 1) + .5
        }), jindo.m.Effect.easeOutInQuad = jindo.m.Effect(function(t) {
            return .5 > t ? .5 * jindo.m.Effect.easeOutQuad(0, 1)(2 * t) : .5 * jindo.m.Effect.easeInQuad(0, 1)(2 * t - 1) + .5
        }), jindo.m.Effect.easeInCubic = jindo.m.Effect(function(t) {
            return Math.pow(t, 3)
        }), jindo.m.Effect.easeOutCubic = jindo.m.Effect(function(t) {
            return Math.pow(t - 1, 3) + 1
        }), jindo.m.Effect.easeInOutCubic = jindo.m.Effect(function(t) {
            return .5 > t ? .5 * jindo.m.Effect.easeIn(0, 1)(2 * t) : .5 * jindo.m.Effect.easeOut(0, 1)(2 * t - 1) + .5;
        }), jindo.m.Effect.easeOutInCubic = jindo.m.Effect(function(t) {
            return .5 > t ? .5 * jindo.m.Effect.easeOut(0, 1)(2 * t) : .5 * jindo.m.Effect.easeIn(0, 1)(2 * t - 1) + .5
        }), jindo.m.Effect.easeInQuart = jindo.m.Effect(function(t) {
            return Math.pow(t, 4)
        }), jindo.m.Effect.easeOutQuart = jindo.m.Effect(function(t) {
            return -(Math.pow(t - 1, 4) - 1)
        }), jindo.m.Effect.easeInOutQuart = jindo.m.Effect(function(t) {
            return .5 > t ? .5 * jindo.m.Effect.easeInQuart(0, 1)(2 * t) : .5 * jindo.m.Effect.easeOutQuart(0, 1)(2 * t - 1) + .5
        }), jindo.m.Effect.easeOutInQuart = jindo.m.Effect(function(t) {
            return .5 > t ? .5 * jindo.m.Effect.easeOutQuart(0, 1)(2 * t) : .5 * jindo.m.Effect.easeInQuart(0, 1)(2 * t - 1) + .5
        }), jindo.m.Effect.easeInQuint = jindo.m.Effect(function(t) {
            return Math.pow(t, 5)
        }), jindo.m.Effect.easeOutQuint = jindo.m.Effect(function(t) {
            return Math.pow(t - 1, 5) + 1
        }), jindo.m.Effect.easeInOutQuint = jindo.m.Effect(function(t) {
            return .5 > t ? .5 * jindo.m.Effect.easeInQuint(0, 1)(2 * t) : .5 * jindo.m.Effect.easeOutQuint(0, 1)(2 * t - 1) + .5
        }), jindo.m.Effect.easeOutInQuint = jindo.m.Effect(function(t) {
            return .5 > t ? .5 * jindo.m.Effect.easeOutQuint(0, 1)(2 * t) : .5 * jindo.m.Effect.easeInQuint(0, 1)(2 * t - 1) + .5
        }), jindo.m.Effect.easeInCircle = jindo.m.Effect(function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), jindo.m.Effect.easeOutCircle = jindo.m.Effect(function(t) {
            return Math.sqrt(1 - (t - 1) * (t - 1))
        }), jindo.m.Effect.easeInOutCircle = jindo.m.Effect(function(t) {
            return .5 > t ? .5 * jindo.m.Effect.easeInCircle(0, 1)(2 * t) : .5 * jindo.m.Effect.easeOutCircle(0, 1)(2 * t - 1) + .5
        }), jindo.m.Effect.easeOutInCircle = jindo.m.Effect(function(t) {
            return .5 > t ? .5 * jindo.m.Effect.easeOutCircle(0, 1)(2 * t) : .5 * jindo.m.Effect.easeInCircle(0, 1)(2 * t - 1) + .5
        }), jindo.m.Effect.easeInBack = jindo.m.Effect(function(t) {
            var e = 1.70158;
            return 1 == t ? 1 : t / 1 * (t / 1) * ((1 + e) * t - e)
        }), jindo.m.Effect.easeOutBack = jindo.m.Effect(function(t) {
            var e = 1.70158;
            return 0 === t ? 0 : (t = t / 1 - 1) * t * ((e + 1) * t + e) + 1
        }), jindo.m.Effect.easeInOutBack = jindo.m.Effect(function(t) {
            return .5 > t ? .5 * jindo.m.Effect.easeInBack(0, 1)(2 * t) : .5 * jindo.m.Effect.easeOutBack(0, 1)(2 * t - 1) + .5
        }), jindo.m.Effect.easeInElastic = jindo.m.Effect(function(t) {
            var e, n = 0,
                i = 0;
            return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (n || (n = .3), !i || 1 > i ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - 1) * Math.PI / n)))
        }), jindo.m.Effect.easeOutElastic = jindo.m.Effect(function(t) {
            var e, n = 0,
                i = 0;
            return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (n || (n = .3), !i || 1 > i ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / n) + 1)
        }), jindo.m.Effect.easeInOutElastic = jindo.m.Effect(function(t) {
            var e, n = 0,
                i = 0;
            return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = .3 * 1.5), !i || 1 > i ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), 1 > t ? -.5 * i * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / n) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / n) * .5 + 1)
        }), jindo.m.Effect.easeOutBounce = jindo.m.Effect(function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), jindo.m.Effect.easeInBounce = jindo.m.Effect(function(t) {
            return 1 - jindo.m.Effect.easeOutBounce(0, 1)(1 - t)
        }), jindo.m.Effect.easeInOutBounce = jindo.m.Effect(function(t) {
            return .5 > t ? .5 * jindo.m.Effect.easeInBounce(0, 1)(2 * t) : .5 * jindo.m.Effect.easeOutBounce(0, 1)(2 * t - 1) + .5
        }), jindo.m.Effect.easeInExpo = jindo.m.Effect(function(t) {
            return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
        }), jindo.m.Effect.easeOutExpo = jindo.m.Effect(function(t) {
            return 1 == t ? 1 : -Math.pow(2, -10 * t / 1) + 1
        }), jindo.m.Effect.easeInOutExpo = jindo.m.Effect(function(t) {
            return .5 > t ? .5 * jindo.m.Effect.easeInExpo(0, 1)(2 * t) : .5 * jindo.m.Effect.easeOutExpo(0, 1)(2 * t - 1) + .5
        }), jindo.m.Effect.easeOutInExpo = jindo.m.Effect(function(t) {
            return .5 > t ? .5 * jindo.m.Effect.easeOutExpo(0, 1)(2 * t) : .5 * jindo.m.Effect.easeInExpo(0, 1)(2 * t - 1) + .5
        }), jindo.m.Effect._cubicBezier = function(t, e, n, i) {
            return function(o) {
                function r(t) {
                    return ((l * t + u) * t + h) * t
                }

                function s(t) {
                    return ((p * t + f) * t + d) * t
                }

                function a(t) {
                    return (3 * l * t + 2 * u) * t + h
                }

                function c(t, e) {
                    var n, i, o, s, c, h;
                    for (o = t, h = 0; 8 > h; h++) {
                        if (s = r(o) - t, Math.abs(s) < e) return o;
                        if (c = a(o), Math.abs(c) < 1e-6) break;
                        o -= s / c
                    }
                    if (n = 0, i = 1, o = t, n > o) return n;
                    if (o > i) return i;
                    for (; i > n;) {
                        if (s = r(o), Math.abs(s - t) < e) return o;
                        t > s ? n = o : i = o, o = .5 * (i - n) + n
                    }
                    return o
                }
                var h = 3 * t,
                    u = 3 * (n - t) - h,
                    l = 1 - h - u,
                    d = 3 * e,
                    f = 3 * (i - e) - d,
                    p = 1 - d - f;
                return s(c(o, .005))
            }
        }, jindo.m.Effect.cubicBezier = function(t, e, n, i) {
            var o = jindo.m.Effect(jindo.m.Effect._cubicBezier(t, e, n, i));
            return o.cubicBezier = [t, e, n, i], o
        }, jindo.m.Effect.cubicEase = jindo.m.Effect.cubicBezier(.25, .1, .25, 1), jindo.m.Effect.cubicEaseIn = jindo.m.Effect.cubicBezier(.42, 0, 1, 1), jindo.m.Effect.cubicEaseOut = jindo.m.Effect.cubicBezier(0, 0, .58, 1), jindo.m.Effect.cubicEaseInOut = jindo.m.Effect.cubicBezier(.42, 0, .58, 1), jindo.m.Effect.cubicEaseOutIn = jindo.m.Effect.cubicBezier(0, .42, 1, .58), jindo.m.Effect.overphase = jindo.m.Effect(function(t) {
            return t /= .652785, (Math.sqrt((2 - t) * t) + .1 * t).toFixed(5)
        }), jindo.m.Effect.sinusoidal = jindo.m.Effect(function(t) {
            return -Math.cos(t * Math.PI) / 2 + .5
        }), jindo.m.Effect.mirror = jindo.m.Effect(function(t) {
            return jindo.m.Effect.sinusoidal(0, 1)(.5 > t ? 2 * t : 1 - 2 * (t - .5))
        }), jindo.m.Effect.pulse = function(t) {
            return jindo.m.Effect(function(e) {
                return -Math.cos(e * (t - .5) * 2 * Math.PI) / 2 + .5
            })
        }, jindo.m.Effect.wave = function(t, e) {
            return jindo.m.Effect(function(n) {
                return (e || 1) * Math.sin(360 * t * n * Math.PI / 180).toFixed(5)
            })
        }, jindo.m.Effect.stepStart = jindo.m.Effect(function(t) {
            return 0 === t ? 0 : 1
        }), jindo.m.Effect.stepEnd = jindo.m.Effect(function(t) {
            return 1 === t ? 1 : 0
        }), jindo.m.Effect.easeIn = jindo.m.Effect.easeInCubic, jindo.m.Effect.easeOut = jindo.m.Effect.easeOutCubic, jindo.m.Effect.easeInOut = jindo.m.Effect.easeInOutCubic, jindo.m.Effect.easeOutIn = jindo.m.Effect.easeOutInCubic, jindo.m.Effect.bounce = jindo.m.Effect.easeOutBounce, jindo.m.Effect.elastic = jindo.m.Effect.easeInElastic, jindo.m.Component = jindo.$Class({
            _htEventHandler: null,
            _htOption: null,
            $init: function() {
                this._htEventHandler = {}, this._htOption = {}, this._htOption._htSetter = {}
            },
            option: function(t, e) {
                switch (typeof t) {
                    case "undefined":
                        var n = {};
                        for (var i in this._htOption) "htCustomEventHandler" != i && "_htSetter" != i && (n[i] = this._htOption[i]);
                        return n;
                    case "string":
                        if ("undefined" == typeof e) return this._htOption[t];
                        if ("htCustomEventHandler" == t) {
                            if ("undefined" != typeof this._htOption[t]) return this;
                            this.attach(e)
                        }
                        this._htOption[t] = e, "function" == typeof this._htOption._htSetter[t] && this._htOption._htSetter[t](e);
                        break;
                    case "object":
                        for (var o in t) {
                            if ("htCustomEventHandler" == o) {
                                if ("undefined" != typeof this._htOption[o]) continue;
                                this.attach(t[o])
                            }
                            "_htSetter" !== o && (this._htOption[o] = t[o]), "function" == typeof this._htOption._htSetter[o] && this._htOption._htSetter[o](t[o])
                        }
                }
                return this
            },
            optionSetter: function(t, e) {
                switch (typeof t) {
                    case "undefined":
                        return this._htOption._htSetter;
                    case "string":
                        if ("undefined" == typeof e) return this._htOption._htSetter[t];
                        this._htOption._htSetter[t] = jindo.$Fn(e, this).bind();
                        break;
                    case "object":
                        for (var n in t) this._htOption._htSetter[n] = jindo.$Fn(t[n], this).bind()
                }
                return this
            },
            fireEvent: function(t, e) {
                e = e || {};
                var n = this["on" + t],
                    i = this._htEventHandler[t] || [],
                    o = "function" == typeof n,
                    r = i.length > 0;
                if (!o && !r) return !0;
                i = i.concat(), e.sType = t, "undefined" == typeof e._aExtend && (e._aExtend = [], e.stop = function() {
                    e._aExtend.length > 0 && (e._aExtend[e._aExtend.length - 1].bCanceled = !0)
                }), e._aExtend.push({
                    sType: t,
                    bCanceled: !1
                });
                var s, a, c = [e];
                for (s = 2, a = arguments.length; a > s; s++) c.push(arguments[s]);
                if (o && n.apply(this, c), r) {
                    var h;
                    for (s = 0, h; h = i[s]; s++) h.apply(this, c)
                }
                return !e._aExtend.pop().bCanceled
            },
            attach: function(t, e) {
                if (1 == arguments.length) return jindo.$H(arguments[0]).forEach(jindo.$Fn(function(t, e) {
                    this.attach(e, t)
                }, this).bind()), this;
                var n = this._htEventHandler[t];
                return "undefined" == typeof n && (n = this._htEventHandler[t] = []), n.push(e), this
            },
            detach: function(t, e) {
                if (1 == arguments.length) return jindo.$H(arguments[0]).forEach(jindo.$Fn(function(t, e) {
                    this.detach(e, t)
                }, this).bind()), this;
                var n = this._htEventHandler[t];
                if (n)
                    for (var i, o = 0; i = n[o]; o++)
                        if (i === e) {
                            n = n.splice(o, 1);
                            break
                        } return this
            },
            detachAll: function(t) {
                var e = this._htEventHandler;
                if (arguments.length) return "undefined" == typeof e[t] ? this : (delete e[t], this);
                for (var n in e) delete e[n];
                return this
            }
        }), jindo.m.Component.factory = function(t, e) {
            var n, i = [];
            "undefined" == typeof e && (e = {});
            for (var o, r = 0; o = t[r]; r++) n = new this(o, e), i[i.length] = n;
            return i
        }, jindo.m.Component.getInstance = function() {
            throw new Error("JC 1.11.0 or JMC 1.13.0 later, getInstance method of Component is not longer supported.")
        }, jindo.m.Component.VERSION = "1.13.0", jindo.m.Morph = jindo.$Class({
            $init: function(t) {
                this.option({
                    fEffect: jindo.m.Effect.linear,
                    bUseTransition: !0
                }).option(t);
                var e = document.body.style;
                this._bTransitionSupport = "transition" in e || "webkitTransition" in e || "MozTransition" in e || "OTransition" in e || "msTransition" in e;
                var n = jindo.$Agent(),
                    i = n.os(),
                    o = n.navigator();
                this._bHasTransformRenderBug = i.ios && 5 === parseInt(i.version, 10) && o.msafari, this._aQueue = [], this._aIngItem = null, this._oTimer = null, this._bPlaying = null, this._nPtr = 0, this._nPausePassed = 0, this._aRepeat = [], this._sTransitionEnd = "webkitTransition" in e && "webkitTransitionEnd" || "transition" in e && "transitionend" || "MozTransition" in e && "transitionend" || "OTransition" in e && "oTransitionEnd" || "msTransition" in e && "MSTransitionEnd"
            },
            pushAnimate: function(t, e) {
                if (e && !(e instanceof Array)) throw Error("aLists should be a instance of Array");
                return e = [].concat(e), e.duration = t, this._aQueue.push(e), this
            },
            pushWait: function() {
                for (var t = 0, e = arguments.length; e > t; t++) {
                    var n = arguments[t];
                    n instanceof this.constructor ? this._aQueue.push(n) : this.pushAnimate(n, [])
                }
                return this
            },
            pushCall: function(t) {
                return this._aQueue.push(t), this
            },
            pushRepeatStart: function(t) {
                "undefined" == typeof t && (t = 1);
                var e = "L" + Math.round((new Date).getTime() * Math.random());
                return this._aRepeat.push(e), this._pushLabel(e, t), this
            },
            _pushLabel: function(t, e) {
                return "undefined" == typeof e && (e = 1 / 0), this._aQueue.push({
                    action: "label",
                    args: {
                        label: t,
                        times: e
                    }
                }), this
            },
            pushRepeatEnd: function() {
                var t = this,
                    e = this._aRepeat.pop(),
                    n = function() {
                        var n = t._getLabelIndex(e);
                        if (-1 === n) throw "Repeat calls don't matched.";
                        var i = this._aQueue[n];
                        i.args.count = i.args.count || 0, ++i.args.count < i.args.times && t._goto(n + 1)
                    };
                return n.__repeat_end = e, this.pushCall(n), this
            },
            _waitMorph: function(t) {
                var e = this;
                if (!t.isPlaying()) return !0;
                var n = function() {
                    t.detach("end", n).detach("pause", n), e._flushQueue()
                };
                return t.attach("end", n).attach("pause", n), !1
            },
            _getLabelIndex: function(t) {
                for (var e = null, n = 0, i = this._aQueue.length; i > n; n++)
                    if (e = this._aQueue[n], "label" === e.action && e.args.label === t) return n;
                return -1
            },
            _getRepeatEndIndex: function(t, e) {
                for (var n = null, i = e || 0, o = this._aQueue.length; o > i; i++)
                    if (n = this._aQueue[i], n instanceof Function && n.__repeat_end === t) return i;
                return -1
            },
            _flushQueue: function() {
                var t, e, n = this;
                do {
                    if (t = !1, e = this._aIngItem = this._aQueue[this._nPtr], !e) return this._bPlaying = !1, void(e || this.fireEvent("end"));
                    if (this._nPtr++, e instanceof Function) e.call(this), t = !0;
                    else if (e instanceof this.constructor) t = this._waitMorph(e);
                    else if ("number" != typeof e)
                        if ("label" !== e.action)
                            if ("goto" !== e.action) {
                                var i = this._aCompiledItem,
                                    o = this._nPausePassed;
                                if (o) {
                                    for (var r = 0, s = i.length; s > r; r++) i[r].sTimingFunc = "";
                                    i.allCSS = !1
                                } else i = this._aCompiledItem = this._compileItem(e);
                                t = i.duration < 0, t ? this._processItem(1, !0) : (this._playItem(o), this._nPausePassed = 0)
                            } else this._goto(e.args.label), t = !0;
                    else {
                        if (delete e.args.count, e.args.times < 1) {
                            var a = this._getRepeatEndIndex(e.args.label, this._nPtr);
                            a > -1 && this._goto(a + 1)
                        }
                        t = !0
                    } else setTimeout(function() {
                        n._flushQueue()
                    }, e)
                } while (t)
            },
            _playItem: function(t) {
                var e = this;
                this._nStart = (new Date).getTime() - t, this._nIng = 2, t || this._processItem(0, !0, 3, !0);
                var n = this._aCompiledItem;
                n.allCSS ? this._nIng-- : this._animationLoop(!0),
                    function() {
                        var t = e._processItem(1, !0, 1).transitionCache;
                        if (!t || 0 === n.duration) return void(0 === --e._nIng && e._flushQueue());
                        for (var i = null, o = t.length, r = 0; o > r; r++)
                            if (t[r].visible()) {
                                i = t[r];
                                break
                            } var s = function(n) {
                            for (var i, o = []; i = t.pop();) i.css(e._getCSSKey("transitionDuration"), "0.0001ms"), o.push(i);
                            t = null, (window.requestAnimationFrame || window.setTimeout)(function() {
                                for (; i = o.pop();) i.css(e._getCSSKey("transitionDuration"), "0"), i.css(e._getCSSKey("transitionProperty"), "none");
                                o = null
                            }, 0), e.fireEvent("transitionEnd"), 0 !== --e._nIng || n || e._requestAnimationFrame(function() {
                                e._flushQueue()
                            })
                        };
                        if (!i) return void s();
                        var a = i.$value(),
                            c = function(t) {
                                a.removeEventListener(e._sTransitionEnd, e._fpOnTransitionEnd, !0), e._fpOnTransitionEnd = null, s(t === !0)
                            };
                        e._fpOnTransitionEnd = function(t) {
                            c(t)
                        }, a.addEventListener(e._sTransitionEnd, e._fpOnTransitionEnd, !0)
                    }()
            },
            _animationLoop: function(t) {
                var e = this;
                this._oTimer = this._requestAnimationFrame(function() {
                    var n = e._nStart,
                        i = e._aCompiledItem.duration;
                    if (null !== e._oTimer) {
                        e._oTimer = null;
                        var o = Math.min(1, Math.max(0, ((new Date).getTime() - n) / i));
                        e._processItem(o, t, 2), 1 > o ? e._animationLoop() : (e.fireEvent("timerEnd"), 0 === --e._nIng && e._flushQueue())
                    }
                })
            },
            _processItem: function(t, e, n, i) {
                var o = {
                        normalPropsToPause: [],
                        transitionCache: []
                    },
                    r = o.normalPropsToPause,
                    s = o.transitionCache,
                    a = this._aCompiledItem,
                    c = a.duration;
                0 === c ? c = 1 : 0 > c && (c = 0);
                var h, u, l, d, f, p, _ = this._bHasTransformRenderBug;
                if (n = n || 3, this.fireEvent("beforeProgress", {
                        nRate: t
                    })) {
                    for (var m, g, v = [], y = 0; g = a[y]; y++) {
                        h = g.oObj, u = g.welObj, l = g.oProps;
                        var E = g.sTimingFunc;
                        E && 1 & n && (u && u.$value().clientHeight, "@transition" in l || i || ("@transitionProperty" in l || u.css(this._getCSSKey("transitionProperty"), "all"), "@transitionDuration" in l || u.css(this._getCSSKey("transitionDuration"), (c / 1e3).toFixed(3) + "s"), "@transitionTimingFunction" in l || u.css(this._getCSSKey("transitionTimingFunction"), E)), s.push(u)), m = {}, v.push(h, m), i && 1 === t && "@transform" in l && /AppleWebKit\/534\.30/.test(navigator.userAgent) && (u.css(this._getCSSKey("transform"), ""), h.clientHeight);
                        for (var j in l)
                            if (l.hasOwnProperty(j)) {
                                if (d = l[j], p = /^@(.*)$/.test(j) && RegExp.$1, f = E && p ? 1 : 2, !(n & f)) continue;
                                if ("function" == typeof d) d = d(t);
                                else if (!e) continue;
                                p ? (/transition/.test(j) && (d = this._getCSSVal(d)), _ && "@transform" === j && ("@left" in l || "@top" in l) && h.clientHeight, u.css(this._getCSSKey(p), d)) : i ? r.push([h, j, d]) : h[j] = d, m[j] = d
                            }
                    }
                    return this.fireEvent("progress", {
                        aLists: v,
                        nRate: t
                    }), o
                }
            },
            _compileItem: function(t) {
                var e = 0 == t.length,
                    n = [];
                n.duration = t.duration;
                for (var i, o, r, s, a, c, h, u, l = this.option("fEffect"), d = 0, f = t.length; f > d; d += 2) {
                    var p = null;
                    i = t[d], o = jindo.$Element(i), r = t[d + 1], c = {};
                    for (var _ in r)
                        if (r.hasOwnProperty(_)) {
                            var m, g;
                            if (a = r[_], h = /^@(.*)$/.test(_), u = RegExp.$1, a instanceof Array ? (s = a[0], a = a[1]) : s = h ? o.css(this._getCSSKey(u)) : i[_], s = 0 === s ? s : s || "", m = "function" == typeof a ? a.effectConstructor : l, g = this._getEffectCSS(m) || "", h ? null === p ? p = g : p !== g && (p = "") : g = "", /^@transform$/.test(_)) c[_] = this._getTransformFunction(s, a, m);
                            else try {
                                "function" == typeof a ? ("setStart" in a && a.setStart(s), c[_] = a) : c[_] = m(s, a)
                            } catch (v) {
                                if (!/^unit error/.test(v.message)) throw v;
                                c[_] = a
                            }
                            e = e || !p
                        } n.push({
                        oObj: i,
                        welObj: o,
                        oProps: c,
                        sTimingFunc: p
                    })
                }
                return n.allCSS = !e, n
            },
            play: function() {
                return this._bPlaying || (this._bPlaying = !0, this.fireEvent("play"), this._flushQueue()), this
            },
            reset: function() {
                return this._goto(0)
            },
            pause: function(t) {
                if (!this._bPlaying) return this;
                this._cancelAnimationFrame(this._oTimer), this._oTimer = null;
                var e = this._aCompiledItem.duration;
                if ("undefined" == typeof t) {
                    var n = (new Date).getTime() - this._nStart;
                    t = n / e
                }
                t = Math.max(0, Math.min(1, t));
                var i = this._processItem(t, !0, 3, !0, "DEBUG").normalPropsToPause;
                this._nPtr--, this._nPausePassed = Math.round(e * t), this._fpOnTransitionEnd && this._fpOnTransitionEnd(!0);
                for (var o = 0, r = i.length; r > o; o++) {
                    var s = i[o];
                    s[0][s[1]] = s[2]
                }
                return this._bPlaying = !1, this.fireEvent("pause"), this
            },
            _goto: function(t) {
                var e = t;
                if ("number" == typeof t) t = t || 0;
                else {
                    if (t = this._getLabelIndex(e), -1 === t) throw "Label not found";
                    t++
                }
                return this._nPtr = t, this._nPausePassed = 0, this
            },
            isPlaying: function() {
                return this._bPlaying || !1
            },
            clear: function() {
                return this._aQueue.length = 0, this._aRepeat.length = 0, this._nPtr = 0, this._nPausePassed = 0, this
            },
            _getPointer: function() {
                return this._nPtr
            },
            _oProperPrefix: {},
            _getProperPrefix: function(t) {
                var e = this._oProperPrefix;
                if (t in e) return e[t];
                for (var n, i, o = document.body.style, r = ["webkit", "", "Moz", "O", "ms"], s = 0, a = r.length; a > s; s++)
                    if (n = r[s], i = n + (n ? t.replace(/^[a-z]/, function(t) {
                            return t.toUpperCase()
                        }) : t), i in o) return e[t] = n;
                return e[t] = ""
            },
            _getCSSKey: function(t) {
                var e = this,
                    n = "",
                    i = t.replace(/^(\-(webkit|o|moz|ms)\-)?([a-z]+)/, function(t, i, o, r) {
                        return n = o || e._getProperPrefix(r), n && (r = r.replace(/^[a-z]/, function(t) {
                            return t.toUpperCase()
                        })), r
                    }).replace(/\-(\w)/g, function(t, e) {
                        return e.toUpperCase()
                    });
                return ({
                    o: "O",
                    moz: "Moz",
                    webkit: "Webkit"
                } [n] || n) + i
            },
            _getCSSVal: function(t) {
                var e = this,
                    n = t.replace(/(^|\s)(\-(webkit|moz|o|ms)\-)?([a-z]+)/g, function(t, n, i, o, r) {
                        return o = o || e._getProperPrefix(r), n + (o && "-" + o + "-") + r
                    });
                return n
            },
            _parseTransformText: function(t) {
                t = t || "";
                var e = {};
                return t.replace(/([\w\-]+)\(([^\)]*)\)/g, function(t, n, i) {
                    var o = i.split(/\s*,\s*/);
                    switch (n) {
                        case "translate3d":
                        case "scale3d":
                        case "skew3d":
                            n = n.replace(/3d$/, ""), e[n + "Z"] = o[2];
                        case "translate":
                        case "scale":
                        case "skew":
                            e[n + "X"] = o[0], "undefined" == typeof o[1] ? "scale" === n && (e[n + "Y"] = o[0]) : e[n + "Y"] = o[1];
                            break;
                        default:
                            e[n] = o.join(",")
                    }
                }), e
            },
            _getTransformFunction: function(t, e, n) {
                var i, o = this._parseTransformText(t),
                    r = this._parseTransformText(e),
                    s = {};
                for (i in o) o.hasOwnProperty(i) && (s[i] = n(o[i], r[i] || (/^scale/.test(i) ? 1 : 0)));
                for (i in r) !r.hasOwnProperty(i) || i in o || (s[i] = n(o[i] || (/^scale/.test(i) ? 1 : 0), r[i]));
                var a = function(t) {
                    var e = [];
                    for (var n in s) s.hasOwnProperty(n) && e.push(n + "(" + s[n](t) + ")");
                    return e.join(" ")
                };
                return a
            },
            _getEffectCSS: function(t) {
                var e = this.option("bUseTransition") && this._bTransitionSupport;
                if (!e) return null;
                if (this._htEventHandler.progress && this._htEventHandler.progress.length || this._htEventHandler.beforeProgress && this._htEventHandler.beforeProgress.length) return null;
                switch (t) {
                    case jindo.m.Effect.linear:
                        return "linear";
                    case jindo.m.Effect.cubicEase:
                        return "ease";
                    case jindo.m.Effect.cubicEaseIn:
                        return "ease-in";
                    case jindo.m.Effect.cubicEaseOut:
                        return "ease-out";
                    case jindo.m.Effect.cubicEaseInOut:
                        return "ease-in-out";
                    default:
                        if (t.cubicBezier && Math.max.apply(Math, t.cubicBezier) <= 1 && Math.min.apply(Math, t.cubicBezier) >= 0) return "cubic-bezier(" + t.cubicBezier.join(",") + ")"
                }
                return null
            },
            _requestAnimationFrame: function(t) {
                var e, n = this,
                    i = function() {
                        e === n._oLastRAF && (n._oLastRAF = null, t())
                    };
                return e = window.requestAnimationFrame ? requestAnimationFrame(i) : setTimeout(i, 1e3 / 60), this._oLastRAF = e
            },
            _cancelAnimationFrame: function(t) {
                var e;
                return e = window.cancelAnimationFrame ? cancelAnimationFrame(t) : clearTimeout(t), this._oLastRAF = null, e
            }
        }).extend(jindo.m.Component), jindo.m.UIComponent = jindo.$Class({
            $init: function() {
                this._bIsActivating = !1
            },
            isActivating: function() {
                return this._bIsActivating
            },
            activate: function() {
                return this.isActivating() ? this : (this._bIsActivating = !0, arguments.length > 0 ? this._onActivate.apply(this, arguments) : this._onActivate(), this)
            },
            deactivate: function() {
                return this.isActivating() ? (this._bIsActivating = !1, arguments.length > 0 ? this._onDeactivate.apply(this, arguments) : this._onDeactivate(), this) : this
            }
        }).extend(jindo.m.Component), jindo.m.Animation = jindo.$Class({
            $init: function(t) {
                this.option({
                    bUseH: !0,
                    bHasOffsetBug: !1,
                    fEffect: jindo.m.Effect.cubicEaseOut,
                    bUseCss3d: jindo.m.useCss3d(),
                    bUseTimingFunction: jindo.m.useTimingFunction()
                }), this.option(t || {}), this._initVar()
            },
            _initVar: function() {
                this.sCssPrefix = jindo.m.getCssPrefix(), this._htTans = this.option("bUseCss3d") ? {
                    open: "3d(",
                    end: ",0)"
                } : {
                    open: "(",
                    end: ")"
                }, this._oMorph = new jindo.m.Morph({
                    fEffect: this.option("fEffect"),
                    bUseTransition: this.option("bUseTimingFunction")
                }).attach({
                    end: jindo.$Fn(function(t) {
                        this._oMorph.clear(), this.fireEvent("end", t)
                    }, this).bind()
                }), this._welTarget = null
            },
            setStyle: function() {},
            move: function() {},
            getTarget: function(t) {
                return t ? this._welTarget : this._welTarget.$value()
            },
            p: function(t) {
                return t.length <= 0 ? t : (t = "" == this.sCssPrefix ? t.charAt(0).toLowerCase() + t.substr(1) : t.charAt(0).toUpperCase() + t.substr(1), this.sCssPrefix + t)
            },
            getTranslate: function(t, e) {
                return "translate" + this._htTans.open + t + "," + e + this._htTans.end
            },
            toCss: function(t) {
                var e, n, i, o = {};
                for (e in t) n = e, /^@/.test(e) && (e.match(/^(@\w)/), i = RegExp.$1, /transition|transform/.test(n) ? (n = "" == this.sCssPrefix ? e.replace(i, i.toLowerCase()) : e.replace(i, i.toUpperCase()), n = n.replace("@", this.sCssPrefix)) : n = n.replace("@", "")), o[n] = t[e];
                return o
            },
            isPlaying: function() {
                return this._oMorph.isPlaying()
            },
            stop: function(t) {
                "undefined" == typeof t && (t = 0), this._oMorph.pause(t).clear()
            },
            destroy: function() {
                this._oMorph.detachAll("progress")
            }
        }).extend(jindo.m.UIComponent), jindo.m.Slide = jindo.$Class({
            $init: function(t) {
                this.option({}), this.option(t || {})
            },
            setStyle: function(t) {
                var e = {};
                return e[this.p("TransitionProperty")] = "" == this.sCssPrefix ? "tranform" : "-" + this.sCssPrefix + "-transform", e[this.p("TransitionDuration")] = "0ms", e[this.p("Transform")] = this.getTranslate(0, 0), this._welTarget = t[0].css(e), this.fireEvent("set", {
                    css: e
                }), e
            },
            move: function(t, e, n, i) {
                i = i || {};
                var o, r = this.getTarget(!0);
                if (i.useCircular) this.option("bUseH") ? t = this._getPos(t, i) : e = this._getPos(e, i);
                else if (this.option("bHasOffsetBug")) {
                    var s = jindo.m.getStyleOffset(r);
                    t -= s.left, e -= s.top
                }
                return o = {
                    "@transitionProperty": "" == this.sCssPrefix ? "tranform" : "-" + this.sCssPrefix + "-transform",
                    "@transform": this.getTranslate(t + "px", e + "px")
                }, n ? this._oMorph.pushAnimate(n, [r, o]) : r.css(this.toCss(o)), this._oMorph
            },
            _getPos: function(t, e) {
                var n = t,
                    i = e.next,
                    o = e.range;
                if (e.restore) n = 0;
                else if (0 != e.duration && t % o === 0) n = i ? -o : o;
                else if ("undefined" != typeof e.startIndex) {
                    var r = -1 * parseInt(n / o, 10);
                    i = r == e.startIndex || r > e.startIndex, n = n % o + (i ? -1 : 1) * Math.abs(r - e.startIndex) * o
                } else n = n % o + (i ? 0 : 2 * o), n %= o;
                return n
            }
        }).extend(jindo.m.Animation), jindo.m.Touch = jindo.$Class({
            $init: function(t, e) {
                this._el = jindo.$(t);
                var n = {
                    nMomentumDuration: 350,
                    nMoveThreshold: 7,
                    nSlopeThreshold: 25,
                    nLongTapDuration: 1e3,
                    nDoubleTapDuration: 400,
                    nTapThreshold: 6,
                    nPinchThreshold: .1,
                    nRotateThreshold: 5,
                    nEndEventThreshold: 0,
                    bActivateOnload: !0,
                    bVertical: !0,
                    bHorizental: !1
                };
                this.option(n), this.option(e || {}), this._initVariable(), this._setSlope(), this.option("bActivateOnload") && this.activate()
            },
            _initVariable: function() {
                if (this._hasTouchEvent = !1, this._htEventName = jindo.m._getTouchEventName(), this._htEventName.start.indexOf("touch") > -1) this._hasTouchEvent = !0;
                else if (this._htEventName.start.indexOf("MSPointer") > -1 && "undefined" != typeof this._el.style.msTouchAction) {
                    var t = "none";
                    this.option("bHorizental") && !this.option("bVertical") && (t = "pan-x"), this.option("bVertical") && !this.option("bHorizental") && (t = "pan-y"), this._el.style.msTouchAction = t
                }
                this._radianToDegree = 180 / Math.PI, this._htMoveInfo = {
                    nStartX: 0,
                    nStartY: 0,
                    nBeforeX: 0,
                    nBeforeY: 0,
                    nStartTime: 0,
                    nBeforeTime: 0,
                    nStartDistance: 0,
                    nBeforeDistance: 0,
                    nStartAngle: 0,
                    nLastAngle: 0
                }, this.bStart = !1, this.bMove = !1, this.nMoveType = -1, this.htEndInfo = {}, this._nVSlope = 0, this._nHSlope = 0, this.bSetSlope = !1
            },
            _attachEvents: function() {
                this._htEvent = {}, this._hasTouchEvent, this._htEvent[this._htEventName.start] = {
                    fn: jindo.$Fn(this._onStart, this).bind(),
                    el: this._el
                }, this._htEvent[this._htEventName.move] = {
                    fn: jindo.$Fn(this._onMove, this).bind(),
                    el: this._el
                }, this._htEvent[this._htEventName.end] = {
                    fn: jindo.$Fn(this._onEnd, this).bind(),
                    el: this._el
                }, this._htEvent.rotate = jindo.$Fn(this._onResize, this).bind(), jindo.m.bindRotate(this._htEvent.rotate), this._htEventName.cancel && (this._htEvent[this._htEventName.cancel] = {
                    fn: jindo.$Fn(this._onCancel, this).bind(),
                    el: this._el
                });
                for (var t in this._htEvent) this._htEvent[t].fn && (this._htEvent[t].ref = jindo.m._attachFakeJindo(this._htEvent[t].el, this._htEvent[t].fn, t))
            },
            _detachEvents: function() {
                for (var t in this._htEvent) {
                    var e = this._htEvent[t];
                    e.ref && e.ref.detach(e.el, t)
                }
                jindo.m.unbindRotate(this._htEvent.rotate), this._htEvent = null
            },
            _onCancel: function(t) {
                this._onEnd(t)
            },
            _onStart: function(t) {
                this._resetTouchInfo();
                for (var e = this._getTouchInfo(t), n = [], i = [], o = 0, r = e.length; r > o; o++) n.push(e[o].nX), i.push(e[o].nY);
                var s = {
                    element: e[0].el,
                    nX: e[0].nX,
                    nY: e[0].nY,
                    aX: n,
                    aY: i,
                    oEvent: t
                };
                this._fireCustomEvent("touchStart", s) && (this.bStart = !0, this._htMoveInfo.nStartX = e[0].nX, this._htMoveInfo.nBeforeX = e[0].nX, this._htMoveInfo.nStartY = e[0].nY, this._htMoveInfo.nBeforeY = e[0].nY, this._htMoveInfo.nStartTime = e[0].nTime, this._htMoveInfo.aStartInfo = e, this._startLongTapTimer(e, t))
            },
            _onMove: function(t) {
                if (this.bStart) {
                    this.bMove = !0;
                    var e = this._getTouchInfo(t),
                        n = this._getCustomEventParam(e, !1);
                    if (1 === e.length) {
                        if (this.nMoveType < 0 || 3 == this.nMoveType || 4 == this.nMoveType) {
                            var i = this._getMoveType(e);
                            (4 != this.nMoveType || 3 != i) && (this.nMoveType = i)
                        }
                    } else 8 !== this.nMoveType && (this.nMoveType = this._getMoveType(e));
                    n = this._getCustomEventParam(e, !1), "undefined" != typeof this._nLongTapTimer && 3 != this.nMoveType && this._deleteLongTapTimer(), n.oEvent = t;
                    var o = 0;
                    if (o = 0 == this.nMoveType ? Math.abs(n.nVectorX) : 1 == this.nMoveType ? Math.abs(n.nVectorY) : Math.abs(n.nVectorX) + Math.abs(n.nVectorY), !(o < this.option("nMoveThreshold"))) {
                        if (!this.fireEvent("touchMove", n)) return void(this.bStart = !1);
                        this._htMoveInfo.nBeforeX = e[0].nX, this._htMoveInfo.nBeforeY = e[0].nY, this._htMoveInfo.nBeforeTime = e[0].nTime
                    }
                }
            },
            _onEnd: function(t) {
                if (this.bStart) {
                    var e = this;
                    if (this._deleteLongTapTimer(), this._deleteEndEventTimer(), this.bMove || 4 == this.nMoveType || (this.nMoveType = 3), !(this.nMoveType < 0)) {
                        var n = this._getTouchInfo(t);
                        this._isDblTap(n[0].nX, n[0].nY, n[0].nTime) && (clearTimeout(this._nTapTimer), delete this._nTapTimer, this.nMoveType = 5);
                        var i = this._getCustomEventParam(n, !0);
                        i.oEvent = t;
                        var o = i.sMoveType;
                        "undefined" != typeof this._htEventHandler[jindo.m.MOVETYPE[5]] && this._htEventHandler[jindo.m.MOVETYPE[5]].length > 0 && 3 == this.nMoveType ? this._nTapTimer = setTimeout(function() {
                            e.fireEvent("touchEnd", i), e._fireCustomEvent(o, i), delete e._nTapTimer
                        }, this.option("nDoubleTapDuration")) : (this.fireEvent("touchEnd", i), 4 != this.nMoveType && (8 === this.nMoveType ? (i.sMoveType = jindo.m.MOVETYPE[6], this._fireCustomEvent(jindo.m.MOVETYPE[6], i), i.sMoveType = jindo.m.MOVETYPE[7], this._fireCustomEvent(jindo.m.MOVETYPE[7], i)) : setTimeout(function() {
                            e._fireCustomEvent(o, i)
                        }, 0))), this._updateTouchEndInfo(n), this._resetTouchInfo()
                    }
                }
            },
            _startEndEventTimer: function(t) {
                var e = this;
                this._nEndEventTimer = setTimeout(function() {
                    e._onEnd(t), delete e._nEndEventTimer
                }, e.option("nEndEventThreshold"))
            },
            _deleteEndEventTimer: function() {
                "undefined" != typeof this._nEndEventTimer && (clearTimeout(this._nEndEventTimer), delete this._nEndEventTimer)
            },
            _fireCustomEvent: function(t, e) {
                return this.fireEvent(t, e)
            },
            _getCustomEventParam: function(t, e) {
                var n = jindo.m.MOVETYPE[this.nMoveType],
                    i = t[0].nTime - this._htMoveInfo.nStartTime,
                    o = 0,
                    r = 0,
                    s = 0,
                    a = 0,
                    c = 0,
                    h = 0,
                    u = 0,
                    l = 0;
                u = 1 === this.nMoveType ? 0 : t[0].nX - this._htMoveInfo.nStartX, l = 0 === this.nMoveType ? 0 : t[0].nY - this._htMoveInfo.nStartY, o = t[0].nX - this._htMoveInfo.nBeforeX, r = t[0].nY - this._htMoveInfo.nBeforeY, !e || 0 != this.nMoveType && 1 != this.nMoveType && 2 != this.nMoveType || i <= this.option("nMomentumDuration") && (c = Math.abs(u) / i, s = c * c / 2, h = Math.abs(l) / i, a = h * h / 2);
                var d = {
                    element: t[0].el,
                    nX: t[0].nX,
                    nY: t[0].nY,
                    nVectorX: o,
                    nVectorY: r,
                    nDistanceX: u,
                    nDistanceY: l,
                    sMoveType: n,
                    nStartX: this._htMoveInfo.nStartX,
                    nStartY: this._htMoveInfo.nStartY,
                    nStartTimeStamp: this._htMoveInfo.nStartTime
                };
                if ((t.length > 1 || this.nMoveType >= 6) && (d.nScale = this._getScale(t), d.nRotation = this._getRotation(t), null === d.nScale && (d.nScale = this._htMoveInfo.nBeforeScale), null === d.nRotation && (d.nRotation = this._htMoveInfo.nBeforeRotation)), t.length >= 1) {
                    for (var f = [], p = [], _ = [], m = 0, g = t.length; g > m; m++) f.push(t[m].nX), p.push(t[m].nY), _.push(t[m].el);
                    t[t.length - 1].nX, d.aX = f, d.aY = p, d.aElement = _
                }
                return e && (d.nMomentumX = s, d.nMomentumY = a, d.nSpeedX = c, d.nSpeedY = h, d.nDuration = i), d
            },
            _updateTouchEndInfo: function(t) {
                this.htEndInfo = {
                    element: t[0].el,
                    time: t[0].nTime,
                    movetype: this.nMoveType,
                    nX: t[0].nX,
                    nY: t[0].nY
                }
            },
            _deleteLongTapTimer: function() {
                "undefined" != typeof this._nLongTapTimer && (clearTimeout(this._nLongTapTimer), delete this._nLongTapTimer)
            },
            _startLongTapTimer: function(t, e) {
                var n = this;
                "undefined" != typeof this._htEventHandler[jindo.m.MOVETYPE[4]] && this._htEventHandler[jindo.m.MOVETYPE[4]].length > 0 && (n._nLongTapTimer = setTimeout(function() {
                    n.fireEvent("longTap", {
                        element: t[0].el,
                        oEvent: e,
                        nX: t[0].nX,
                        nY: t[0].nY
                    }), delete n._nLongTapTimer, n.nMoveType = 4
                }, n.option("nLongTapDuration")))
            },
            _onResize: function() {
                this._setSlope()
            },
            _isDblTap: function(t, e) {
                if ("undefined" != typeof this._nTapTimer && 3 == this.nMoveType) {
                    var n = this.option("nTapThreshold");
                    if (Math.abs(this.htEndInfo.nX - t) <= n && Math.abs(this.htEndInfo.nY - e) <= n) return !0
                }
                return !1
            },
            _setSlope: function() {
                this.bSetSlope || (this._nHSlope = 1 * (window.innerHeight / 2 / window.innerWidth).toFixed(2), this._nVSlope = 1 * (window.innerHeight / (window.innerWidth / 2)).toFixed(2))
            },
            setSlope: function(t, e) {
                this._nHSlope = e, this._nVSlope = t, this.bSetSlope = !0
            },
            getSlope: function() {
                return {
                    nVSlope: this._nVSlope,
                    nHSlope: this._nHSlope
                }
            },
            _resetTouchInfo: function() {
                for (var t in this._htMoveInfo) this._htMoveInfo[t] = 0;
                this._deleteLongTapTimer(), this.bStart = !1, this.bMove = !1, this.nMoveType = -1
            },
            _getMoveTypeBySingle: function(t, e) {
                var n = this.nMoveType,
                    i = Math.abs(this._htMoveInfo.nStartX - t),
                    o = Math.abs(this._htMoveInfo.nStartY - e),
                    r = i + o,
                    s = this.option("nTapThreshold");
                if (n = s >= i && s >= o ? 3 : -1, this.option("nSlopeThreshold") <= r) {
                    var a = parseFloat((o / i).toFixed(2), 10);
                    n = -1 === this._nHSlope && -1 === this._nVSlope ? 2 : a <= this._nHSlope ? 0 : a >= this._nVSlope ? 1 : 2
                }
                return n
            },
            _getMoveTypeByMulti: function() {
                var t = -1;
                return (6 === this.nMoveType || Math.abs(1 - this._htMoveInfo.nBeforeScale) >= this.option("nPinchThreshold")) && (t = 6), (7 === this.nMoveType || Math.abs(0 - this._htMoveInfo.nBeforeRotation) >= this.option("nRotateThreshold")) && (t = 6 === t ? 8 : 7), -1 === t ? this.nMoveType : t
            },
            _getScale: function(t) {
                var e = -1,
                    n = this._getDistance(t);
                return 0 >= n ? null : (0 === this._htMoveInfo.nStartDistance ? (e = 1, this._htMoveInfo.nStartDistance = n) : e = n / this._htMoveInfo.nStartDistance, this._htMoveInfo.nBeforeScale = e, e)
            },
            _getRotation: function(t) {
                var e = -1,
                    n = this._getAngle(t);
                return null === n ? null : (0 === this._htMoveInfo.nStartAngle ? (this._htMoveInfo.nStartAngle = n, e = 0) : e = n - this._htMoveInfo.nStartAngle, this._htMoveInfo.nLastAngle = n, this._htMoveInfo.nBeforeRotation = e, e)
            },
            _getMoveType: function(t) {
                var e = this.nMoveType;
                return 1 === t.length ? e = this._getMoveTypeBySingle(t[0].nX, t[0].nY) : 2 === t.length && (e = this._getMoveTypeByMulti(t)), e
            },
            _getDistance: function(t) {
                return 1 === t.length ? -1 : Math.sqrt(Math.pow(Math.abs(t[0].nX - t[1].nX), 2) + Math.pow(Math.abs(t[0].nY - t[1].nY), 2))
            },
            _getAngle: function(t) {
                if (1 === t.length) return null;
                var e = t[0].nX - t[1].nX,
                    n = t[0].nY - t[1].nY,
                    i = Math.atan2(n, e) * this._radianToDegree;
                if (null !== this._htMoveInfo.nLastAngle) {
                    var o = Math.abs(this._htMoveInfo.nLastAngle - i),
                        r = i + 360,
                        s = i - 360;
                    Math.abs(r - this._htMoveInfo.nLastAngle) < o ? i = r : Math.abs(s - this._htMoveInfo.nLastAngle) < o && (i = s)
                }
                return i
            },
            _getTouchInfo: function(t) {
                var e = [],
                    n = t.$value().timeStamp,
                    i = null;
                if (this._hasTouchEvent) {
                    i = "touchend" === t.type ? t.$value().changedTouches : t.$value().targetTouches;
                    for (var o = 0, r = i.length; r > o; o++) e.push({
                        el: jindo.m.getNodeElement(i[o].target),
                        nX: i[o].pageX,
                        nY: i[o].pageY,
                        nTime: n
                    })
                } else e.push({
                    el: t.element,
                    nX: t.pos().pageX,
                    nY: t.pos().pageY,
                    nTime: n
                });
                return e
            },
            getBaseElement: function() {
                return this._el
            },
            _onDeactivate: function() {
                this._detachEvents()
            },
            _onActivate: function() {
                this._attachEvents()
            },
            destroy: function() {
                var t;
                this.deactivate(), this._el = null;
                for (t in this._htMoveInfo) this._htMoveInfo[t] = null;
                this._htMoveInfo = null;
                for (t in this.htEndInfo) this.htEndInfo[t] = null;
                this.htEndInfo = null, this.bStart = null, this.bMove = null, this.nMoveType = null, this._nVSlope = null, this._nHSlope = null, this.bSetSlope = null
            }
        }).extend(jindo.m.UIComponent), jindo.m.SwipeCommon = jindo.$Class({
            $init: function() {
                this.option({
                    bActivateOnload: !0,
                    bUseHighlight: !0,
                    bUseDiagonalTouch: !0,
                    bUseMomentum: !0,
                    nDeceleration: 6e-4,
                    bAutoResize: !0,
                    fEffect: jindo.m.Effect.cubicEaseOut,
                    bUseCss3d: jindo.m.useCss3d(),
                    bUseTimingFunction: jindo.m.useTimingFunction(),
                    nZIndex: 2e3
                })
            },
            _getAnimationOption: function(t) {
                return jindo.$Jindo.mixin({
                    bUseH: this._bUseH,
                    bHasOffsetBug: this._hasOffsetBug(),
                    fEffect: this.option("fEffect"),
                    bUseCss3d: this.option("bUseCss3d"),
                    bUseTimingFunction: this.option("bUseTimingFunction")
                }, t || {})
            },
            _initVar: function() {
                this._htWElement = {}, this._bUseH = !1, this._bUseV = !1, this._nX = 0, this._nY = 0, this._bUseDiagonalTouch = this.option("bUseDiagonalTouch"), this._htClickBug = {
                    hasBug: jindo.m.hasClickBug(),
                    anchors: null,
                    isBlocked: !1,
                    dummyFnc: function() {
                        return !1
                    },
                    hasDummyFnc: !1,
                    dummyTagForFocus: null
                }, this._htOffsetBug = {
                    hasBug: jindo.m.hasOffsetBug() && this.option("bUseHighlight"),
                    timer: -1,
                    elDummyTag: null
                }, this._htSize = {
                    viewWidth: 0,
                    viewHeight: 0,
                    contWidth: 0,
                    contHeight: 0,
                    maxX: 0,
                    maxY: 0
                }, this._isStop = !1, this._oTouch = null, this._oAnimation = null
            },
            _setWrapperElement: function(t) {
                this._htWElement.view = jindo.$Element(t), this._htWElement.base = jindo.$Element(this._htWElement.view.query("." + this.option("sClassPrefix") + "base")), this._htWElement.container = this._htWElement.base ? this._htWElement.base.query("." + this.option("sClassPrefix") + "container") : this._htWElement.view.query("." + this.option("sClassPrefix") + "container") || this._htWElement.view.first(), this._htWElement.container = jindo.$Element(this._htWElement.container), this._htWElement.view.css({
                    overflow: "hidden",
                    zIndex: this.option("nZIndex")
                }), this._htWElement.base && this._htWElement.base.css({
                    position: "relavite"
                }), this._htWElement.container.css({
                    left: "0px",
                    top: "0px"
                }), this._createOffsetBugDummyTag()
            },
            _onActivate: function() {
                this._oTouch || (this._oTouch = new jindo.m.Touch(this._htWElement.view.$value(), {
                    nMoveThreshold: 0,
                    nMomentumDuration: 200,
                    nTapThreshold: 1,
                    nSlopeThreshold: 5,
                    nEndEventThreshold: jindo.m.getDeviceInfo().win8 ? 100 : 0,
                    bActivateOnload: !1
                })), this._attachEvent(), this._attachAniEvent(), this._oTouch.activate()
            },
            _onDeactivate: function() {
                this._detachEvent(), this._detachAniEvent(), this._oTouch.deactivate(), this._oAnimation && this._oAnimation.deactivate()
            },
            _attachEvent: function() {
                this._htEvent = {}, this._htEvent.touchStart = jindo.$Fn(this._onStart, this).bind(), this._htEvent.touchMove = jindo.$Fn(this._onMove, this).bind(), this._htEvent.touchEnd = jindo.$Fn(this._onEnd, this).bind(), this._oTouch.attach({
                    touchStart: this._htEvent.touchStart,
                    touchMove: this._htEvent.touchMove,
                    touchEnd: this._htEvent.touchEnd
                }), this.option("bAutoResize") && (this._htEvent.resize = jindo.$Fn(this._onResize, this).bind(), jindo.m.bindRotate(this._htEvent.resize), jindo.m.bindPageshow(this._htEvent.resize))
            },
            _detachEvent: function() {
                this._oTouch.detachAll(), this.option("bAutoResize") && (jindo.m.unbindRotate(this._htEvent.resize), jindo.m.unbindPageshow(this._htEvent.resize))
            },
            _getX: function(t) {
                return t >= 0 ? 0 : t <= this._htSize.maxX ? this._htSize.maxX : t
            },
            _getY: function(t) {
                return t >= 0 ? 0 : t <= this._htSize.maxY ? this._htSize.maxY : t
            },
            _attachAniEvent: function() {
                this._oAnimation && (this._htEvent.endAni = jindo.$Fn(this._onEndAniImpl, this).bind(), this._oAnimation.attach({
                    end: this._htEvent.endAni
                }))
            },
            _detachAniEvent: function() {
                this._oAnimation && this._oAnimation.detachAll()
            },
            set: function() {
                var t = Array.prototype.slice.apply(arguments);
                return t.length >= 1 && (this._oAnimation = t.shift(), this._oAnimation.setStyle(t), this._attachAniEvent()), this._oAnimation
            },
            getAnimation: function() {
                return this._oAnimation
            },
            isPlaying: function() {
                return !!this._oAnimation && this._oAnimation.isPlaying()
            },
            isAnimating: this.isPlaying,
            refresh: function() {
                this._refreshAnchor()
            },
            resize: function() {
                var t = this._htWElement.view,
                    e = this._htWElement.container,
                    n = parseInt(t.css("borderLeftWidth"), 10),
                    i = parseInt(t.css("borderRightWidth"), 10),
                    o = parseInt(t.css("borderTopWidth"), 10),
                    r = parseInt(t.css("borderBottomWidth"), 10);
                n = isNaN(n) ? 0 : n, i = isNaN(i) ? 0 : i, o = isNaN(o) ? 0 : o, r = isNaN(r) ? 0 : r, this._htSize.viewWidth = t.width() - n - i, this._htSize.viewHeight = t.height() - o - r, this._htSize.contWidth = e.width(), this._htSize.contHeight = e.height()
            },
            _refreshAnchor: function() {
                this._htClickBug.hasBug && (this._htClickBug.isBlocked = !1, this._htClickBug.anchors = jindo.$$("A", this._htWElement.view.$value()), this._htClickBug.anchors || (this._htClickBug.hasBug = !1))
            },
            _calcMomentum: function(t, e, n, i, o, r) {
                var s = this.option("nDeceleration"),
                    a = n / s,
                    c = 0,
                    h = 0;
                return t > 0 && a > i ? (h = r / (6 / (a / e * s)), i += h, e = e * i / a, a = i) : 0 > t && a > o && (h = r / (6 / (a / e * s)), o += h, e = e * o / a, a = o), a *= 0 > t ? -1 : 1, c = e / s, {
                    nDist: a,
                    nTime: Math.round(c)
                }
            },
            _clearAnchor: function() {
                if (this._htClickBug.hasBug && !this._htClickBug.isBlocked) {
                    for (var t = null, e = null, n = 0, i = this._htClickBug.anchors.length; i > n; n++) e = this._htClickBug.anchors[n], e.___isClear___ || (this._htClickBug.dummyFnc !== e.onclick && (e._onclick = e.onclick), e.onclick = this._htClickBug.dummyFnc, e.___isClear___ = !0, t = e.___listeners___ || [], jindo.$A(t).forEach(function(t) {
                        ___Old__removeEventListener___.call(e, "click", t.listener, t.useCapture)
                    }));
                    this._htClickBug.isBlocked = !0
                }
            },
            _restoreAnchor: function() {
                if (this._htClickBug.hasBug && this._htClickBug.isBlocked) {
                    for (var t = null, e = null, n = 0, i = this._htClickBug.anchors.length; i > n; n++) e = this._htClickBug.anchors[n], e.___isClear___ && (e.onclick = this._htClickBug.dummyFnc !== e._onclick ? e._onclick : null, e.___isClear___ = null, t = e.___listeners___ || [], jindo.$A(t).forEach(function(t) {
                        ___Old__addEventListener___.call(e, "click", t.listener, t.useCapture)
                    }));
                    this._htClickBug.isBlocked = !1
                }
            },
            _onStart: function(t) {
                return this.isPlaying() ? void t.oEvent.stop() : (this._clearOffsetBug(), this._clearAnchor(), void(this.fireEvent("beforeTouchStart", t) ? (this._isStop = !1, this._startImpl(t), this.fireEvent("touchStart", jindo.$Jindo.mixin(t, {})) || t.stop()) : t.stop()))
            },
            _onMove: function(t) {
                if (this._clearOffsetBug(), this.fireEvent("beforeTouchMove", t)) {
                    var e = this._preventSystemEvent(t);
                    e && !this.isPlaying() && this._moveImpl(t), e || this.fireEvent("scroll");
                    var n = jindo.$Jindo.mixin(t, {});
                    n.bPreventDefaultEvent = e, this.fireEvent("touchMove", n) || t.stop()
                } else t.stop()
            },
            _onEnd: function(t) {
                this.isPlaying() || (this._isStop || this._clearOffsetBug(), this.fireEvent("beforeTouchEnd", t) ? (t.sMoveType === jindo.m.MOVETYPE[3] || t.sMoveType === jindo.m.MOVETYPE[4] || t.sMoveType === jindo.m.MOVETYPE[5] ? this._isStop ? t.oEvent.stop(jindo.$Event.CANCEL_ALL) : (this._restoreAnchor(), this._tapImpl && this._tapImpl()) : (this._endImpl(t), this._htClickBug.hasBug && t.oEvent.stop(jindo.$Event.CANCEL_DEFAULT)), this.fireEvent("touchEnd", jindo.$Jindo.mixin(t, {})) || t.stop()) : t.stop())
            },
            _preventSystemEvent: function(t) {
                var e = t.oEvent;
                return t.sMoveType === jindo.m.MOVETYPE[0] ? !!this._bUseH && (e.stop(), !0) : t.sMoveType === jindo.m.MOVETYPE[1] ? !!this._bUseV && (e.stop(), !0) : t.sMoveType === jindo.m.MOVETYPE[2] ? !!this._bUseDiagonalTouch && (e.stop(), !0) : t.sMoveType === jindo.m.MOVETYPE[6] || t.sMoveType === jindo.m.MOVETYPE[7] || t.sMoveType === jindo.m.MOVETYPE[8] ? (e.stop(), !0) : (e.stop(), !0)
            },
            _onResize: function(t) {
                this._resizeImpl(t), "rotate" === t.sType && this.fireEvent("rotate", {
                    isVertical: t.isVertical
                })
            },
            _getMomentumData: function(t, e, n) {
                var i = {
                        nDist: 0,
                        nTime: 0
                    },
                    o = {
                        nDist: 0,
                        nTime: 0
                    },
                    r = {
                        momentumX: t.nMomentumX,
                        momentumY: t.nMomentumY,
                        distanceX: t.nDistanceX,
                        distanceY: t.nDistanceY,
                        x: this._nX,
                        y: this._nY,
                        nextX: this._nX,
                        nextY: this._nY
                    };
                return this.option("bUseMomentum") && (t.nMomentumX && t.nMomentumX > e || t.nMomentumY && t.nMomentumY > e) ? (this._bUseH && (i = this._calcMomentum(t.nDistanceX, t.nSpeedX, t.nMomentumX, -this._nX, -this._htSize.maxX + this._nX, n ? this._htSize.viewWidth : 0)), this._bUseV && (o = this._calcMomentum(t.nDistanceY, t.nSpeedY, t.nMomentumY, -this._nY, -this._htSize.maxY + this._nY, n ? this._htSize.viewHeight : 0)), r.nextX = this._nX + i.nDist, r.nextY = this._nY + o.nDist, r.duration = Math.max(Math.max(i.nTime, o.nTime), 10), r.duration = jindo.m.getOsInfo().android ? .7 * r.duration : r.duration) : r.duration = 0, r
            },
            _makeStylePos: function(t) {
                var e = this.getAnimation(),
                    n = jindo.m.getTranslateOffset(t),
                    i = jindo.m.getStyleOffset(t),
                    o = {
                        top: n.top + i.top + "px",
                        left: n.left + i.left + "px"
                    };
                o[e.p("Transform")] = e.getTranslate("0px", "0px"), t.css(o), this._htOffsetBug.elDummyTag.focus()
            },
            _createOffsetBugDummyTag: function() {
                this._hasOffsetBug() && (this._htOffsetBug.elDummyTag = jindo.$$.getSingle("._offsetbug_dummy_atag_", this._htWElement.view.$value()), this._htOffsetBug.elDummyTag || (this._htOffsetBug.elDummyTag = jindo.$("<a href='javascript:void(0);' style='position:absolute;height:0px;width:0px;' class='_offsetbug_dummy_atag_'></a>"), this._htWElement.view.append(this._htOffsetBug.elDummyTag)))
            },
            _clearOffsetBug: function() {
                this._hasOffsetBug() && (clearTimeout(this._htOffsetBug.timer), this._htOffsetBug.timer = -1)
            },
            _fixOffsetBugImpl: function() {
                if (this._hasOffsetBug()) {
                    var t = this,
                        e = this.getAnimation().getTarget(!0);
                    this._clearOffsetBug(), this._htOffsetBug.timer = setTimeout(function() {
                        e && t._makeStylePos(e)
                    }, 200)
                }
            },
            _hasOffsetBug: function() {
                return this._htOffsetBug.hasBug
            },
            destroy: function() {
                var t;
                this.deactivate();
                for (t in this._htWElement) this._htWElement[t] = null;
                this._htWElement = null;
                for (t in this._htEvent) this._htEvent[t] = null;
                this._htEvent = null, this._oTouch && this._oTouch.destroy(), this._oAnimation && this._oAnimation.destroy()
            }
        }).extend(jindo.m.UIComponent), jindo.m.Flick = jindo.$Class({
            $init: function() {
                this.option({
                    bHorizontal: !0,
                    sClassPrefix: "flick-",
                    sContentClass: "ct",
                    bUseCircular: !1,
                    nTotalContents: 3,
                    nFlickThreshold: 40,
                    nDuration: 100,
                    nBounceDuration: 100,
                    fpPanelEffect: jindo.m.Effect.cubicEaseIn,
                    nDefaultIndex: 0,
                    nDeceleration: .001,
                    bUseMomentum: !1
                })
            },
            _initVar: function() {
                jindo.m.SwipeCommon.prototype._initVar.apply(this), this._bUseH = this.option("bHorizontal"), this._bUseV = !this._bUseH, this._bUseCircular = this.option("bUseCircular"), this._nContentIndex = 0, this._welElement = null, this._aPos = [], this._nRange = null, this._nDefaultPanel = 3, this._sHighlightClass = "_jmc_no_tap_highlight_", this._hasHighlightBug = jindo.m.getBrowserInfo().chrome && !jindo.m.getBrowserInfo().bSBrowser, this._nHightlightBug = -1
            },
            _setWrapperElement: function(t) {
                jindo.m.SwipeCommon.prototype._setWrapperElement.call(this, t);
                var e = this.option("bHorizontal") ? "height" : "width";
                this._htWElement.aPanel = this._htWElement.container.queryAll("." + this.option("sClassPrefix") + this.option("sContentClass"));
                var n = jindo.$A(this._htWElement.aPanel);
                this._bUseCircular || (n = n.filter(function(t) {
                    return jindo.$Element(t).visible()
                })), this._htWElement.container.css({
                    position: "relative",
                    height: this._htWElement.view.height() + "px",
                    width: "100%"
                }), this._htWElement.aPanel = n.forEach(function(t, n, i) {
                    i[n] = jindo.$Element(t).css(e, "100%")
                }).$value()
            },
            _checkIndex: function(t) {
                var e = !0,
                    n = this.getTotalContents() - 1;
                return (isNaN(1 * t) || 0 > t) && (e = !1), t > n && (e = !1), e
            },
            _refreshPanelInfo: function() {
                var t = 0;
                this._aPos = [0];
                for (var e = 0; e < this.option("nTotalContents"); e++) t -= this._nRange, this._aPos.push(t)
            },
            _onActivate: function() {
                jindo.m.SwipeCommon.prototype._onActivate.apply(this)
            },
            _onDeactivate: function() {
                jindo.m.SwipeCommon.prototype._onDeactivate.apply(this)
            },
            set: function() {
                if (!this._oAnimation) {
                    jindo.m.SwipeCommon.prototype.set.apply(this, Array.prototype.slice.apply(arguments)), this._bUseCircular ? this.option("nTotalContents", parseInt(this.option("nTotalContents"), 10)) : this.option("nTotalContents", this._htWElement.aPanel.length);
                    var t = this.option("nDefaultIndex");
                    this._checkIndex(t) || (t = 0), this.resize(), this.refresh(t)
                }
                return this._oAnimation
            },
            refresh: function(t, e, n) {
                jindo.m.SwipeCommon.prototype.refresh.call(this), t = "undefined" == typeof t ? this.getContentIndex() : t, this._makeHighlightStyle(), this._moveTo(t, 0, e, n, !0)
            },
            resize: function() {
                jindo.m.SwipeCommon.prototype.resize.call(this), this._nRange = this._bUseH ? this._htSize.viewWidth : this._htSize.viewHeight, this._refreshPanelInfo(), this._bUseH ? (this._htSize.maxX = (this.option("nTotalContents") - 1) * -this._htSize.viewWidth, this._nX = this._aPos[this.getContentIndex()]) : (this._htSize.maxY = (this.option("nTotalContents") - 1) * -this._htSize.viewHeight, this._nY = this._aPos[this.getContentIndex()])
            },
            getElement: function() {
                if (this._welElement) return this._welElement;
                var t = this.getContentIndex();
                return this._bUseCircular && (t %= this._nDefaultPanel), this._htWElement.aPanel[t]
            },
            getNextElement: function() {
                var t;
                return this._bUseCircular ? (t = this._getIndexByElement(this.getElement()), t = ((t + 1) % this._nDefaultPanel > this._nDefaultPanel - 1 ? 0 : t + 1) % this._nDefaultPanel) : t = this.getNextIndex(), this._htWElement.aPanel[t]
            },
            getPrevElement: function() {
                var t;
                return this._bUseCircular ? (t = this._getIndexByElement(this.getElement()), t = 0 > t - 1 ? this._nDefaultPanel - 1 : t - 1) : t = this.getPrevIndex(), this._htWElement.aPanel[t]
            },
            _getIndexByElement: function(t) {
                var e = -1;
                return jindo.$A(this._htWElement.aPanel).forEach(function(n, i) {
                    n.isEqual(t) && (e = i)
                }), e
            },
            getContentIndex: function() {
                return parseInt(this._nContentIndex, 10)
            },
            getNextIndex: function() {
                var t = this.getContentIndex() + 1,
                    e = this.getTotalContents() - 1;
                return this._bUseCircular && t > e && (t = 0), Math.min(e, t)
            },
            getPrevIndex: function() {
                var t = this.getContentIndex() - 1;
                return this._bUseCircular && 0 > t && (t = this.getTotalContents() - 1), Math.max(0, t)
            },
            getTotalContents: function() {
                return this.option("nTotalContents")
            },
            setTotalContents: function(t) {
                isNaN(t) || 1 > t || (t = parseInt(t, 10), this.getContentIndex() + 1 > t && this._moveTo(t - 1, 0, !0, !0), this.option("nTotalContents", t), this.resize())
            },
            getTotalPanels: function() {
                return this._htWElement.aPanel.length
            },
            getPanels: function() {
                return this._htWElement.aPanel
            },
            moveTo: function(t, e) {
                return t != this.getContentIndex() ? this._moveTo(t, e) : void 0
            },
            _moveTo: function(t, e, n, i, o) {
                var r = this.getTotalContents();
                if (!(this.isPlaying() || isNaN(t) || 0 > t || t >= r)) {
                    e = "undefined" == typeof e ? this.option("nDuration") : e, n = "undefined" == typeof n || n, i = "undefined" != typeof i && i;
                    var s = this._bUseH ? this._nX : this._nY,
                        a = this._aPos[t];
                    if (s != a) this._bUseCircular && (s >= 0 && t == r - 1 ? a = this._nRange : s <= (this._bUseH ? this._htSize.maxX : this._htSize.maxY) && 0 == t && (a = this._aPos[r])), this._move(s, a, {
                        duration: e,
                        contentsNextIndex: t,
                        fireEvent: n,
                        fireMoveEvent: i,
                        corrupt: o
                    });
                    else if (0 === e && n)
                        if (i) this._fireMoveEvent(t) && this._fireMoveEvent();
                        else {
                            var c = {
                                next: null,
                                moveCount: 0,
                                corrupt: "undefined" == typeof o || o,
                                contentsNextIndex: t
                            };
                            this._fireFlickingEvent("beforeFlicking", c) && (this._fireFlickingEvent("flicking", c), this._fireFlickingEvent("afterFlicking", c))
                        }
                }
            },
            moveNext: function(t) {
                this._bUseCircular && this.option("nTotalContents") < 3 && (this._bUseH ? this._nX-- : this._nY--), this._moveTo(this.getNextIndex(), t)
            },
            movePrev: function(t) {
                this._bUseCircular && this.option("nTotalContents") < 3 && (this._bUseH ? this._nX++ : this._nY++), this._moveTo(this.getPrevIndex(), t)
            },
            _startImpl: function() {
                this.isPlaying() || (this._nPosToIndex = this._posToIndex(this._bUseH ? this._nX : this._nY))
            },
            _moveImpl: function(t) {
                var e = this._bUseH ? t.nVectorX : t.nVectorY,
                    n = this._bUseH ? t.nDistanceX : t.nDistanceY,
                    i = 0 > n,
                    o = this._bUseH ? this._nX : this._nY,
                    r = i ? this.getNextIndex() : this.getPrevIndex();
                return o += this._bUseCircular ? e : r == this.getContentIndex() ? e / 2 : e, this._nX = this._bUseH ? o : 0, this._nY = this._bUseV ? o : 0, t.bNext = i, this._moveAfterCall && this._moveAfterCall(t), i
            },
            _endImpl: function(t) {
                var e = null,
                    n = (this._bUseH ? t.nDistanceX : t.nDistanceY) < 0,
                    i = this.getContentIndex(),
                    o = n ? this.getNextIndex() : this.getPrevIndex(),
                    r = this._aPos[i],
                    s = Math.abs((this._bUseH ? this._nX : this._nY) - r),
                    a = i === o || s < parseInt(this.option("nFlickThreshold"), 10);
                if (0 != s) {
                    var c = this._nRange - 1;
                    if (this._bUseH ? this._nX = r + (n ? -c : c) : this._nY = r + (n ? -c : c), a) this._restore();
                    else if (e = this._getMomentumData(t, 1.5), 0 === e.duration || n && i === this.getTotalContents() - 1 || !n && 0 === i) this._moveTo(o, this.option("nDuration"));
                    else {
                        var h = this._posToIndex(this._bUseH ? e.nextX : e.nextY);
                        h == i ? this._restore() : this._moveTo(h, e.duration)
                    }
                }
            },
            _resizeImpl: function() {
                this.resize()
            },
            _restore: function() {
                if (this._bUseH || this._bUseV) {
                    var t = this._aPos[this.getContentIndex()],
                        e = this._bUseH ? this._nX : this._nY;
                    t !== e && this._move(e, t, {
                        duration: this.option("nBounceDuration"),
                        restore: !0
                    })
                }
            },
            _getRevisionNo: function(t) {
                var e = this.getTotalContents();
                return 0 > t ? t += e : t > e - 1 && (t %= e), t
            },
            _fireCustomBeforeEvent: function(t) {
                if (t.restore) {
                    if (!this._fireRestoreEvent("beforeRestore", t)) return !1
                } else if (t.fireMoveEvent) {
                    if (0 == t.moveIndex && !this._fireMoveEvent(t.contentsNextIndex)) return !1
                } else if (!this._fireFlickingEvent("beforeFlicking", t)) return this._restore(), !1;
                return !0
            },
            _setPanelEndInfo: function(t) {
                t.restore ? (this._nX = this._bUseH ? t.no * -this._nRange : 0, this._nY = this._bUseV ? t.no * -this._nRange : 0) : (t.no = this._getRevisionNo(t.no), this._updateFlickInfo(t.no, t.next ? this.getNextElement() : this.getPrevElement()))
            },
            _fireCustomEvent: function(t) {
                t.restore ? this._fireRestoreEvent("restore", t) : t.fireMoveEvent ? (0 === t.duration || t.moveCount == t.moveIndex + 1) && this._fireMoveEvent() : (this._fireFlickingEvent("flicking", t), this._fireFlickingEvent("afterFlicking", t))
            },
            _fireFlickingEvent: function(t, e) {
                var n = {
                    nContentsIndex: this.getContentIndex(),
                    bNext: e.next
                };
                return /before/.test(t) && (n.nContentsNextIndex = 0 === e.duration && e.moveCount > 1 ? e.contentsNextIndex : e.next ? this.getNextIndex() : this.getPrevIndex()), n.nMoveCount = e.moveCount, n.bCorrupt = e.corrupt, n[this._bUseH ? "bLeft" : "bTop"] = n.bNext, this.fireEvent(t, n)
            },
            _fireRestoreEvent: function(t) {
                return this.fireEvent(t, {
                    nContentsIndex: this.getContentIndex()
                })
            },
            _fireMoveEvent: function(t) {
                return "undefined" == typeof t ? this.fireEvent("move", {
                    nContentsIndex: this.getContentIndex()
                }) : this.fireEvent("beforeMove", {
                    nContentsIndex: this.getContentIndex(),
                    nContentsNextIndex: t
                })
            },
            _updateFlickInfo: function(t, e) {
                this._nContentIndex = "undefined" == typeof t ? this.getContentIndex() : t, e = "undefined" == typeof e ? this.getElement() : e, this._nX = this._bUseH ? this._nContentIndex * -this._nRange : 0, this._nY = this._bUseV ? this._nContentIndex * -this._nRange : 0, this._welElement = e
            },
            _onEndAniImpl: function() {
                this._bUseCircular && this._refreshAnchor()
            },
            _makeOption: function(t) {
                var e = jindo.$Jindo.mixin({
                    duration: 0,
                    restore: !1,
                    fireEvent: !0,
                    fireMoveEvent: !1,
                    moveCount: 1,
                    moveIndex: 0,
                    corrupt: !1,
                    useCircular: this._bUseCircular,
                    range: this._nRange
                }, t || {});
                return e.restore && (e.moveCount = 0), e.moveCount > 1 && 0 === e.duration && (e.corrupt = !0), e.corrupt = "undefined" == typeof t.corrupt ? e.corrupt : t.corrupt, e
            },
            _moveWithEvent: function(t, e, n) {
                var i = this,
                    o = {};
                return n.no = this._posToIndex(t), o = jindo.$Jindo.mixin(n, {}), !o.fireMoveEvent && o.moveCount > 1 && (o.contentsNextIndex = o.no), i._panelEndBeforeCall && i._panelEndBeforeCall(o), this._oAnimation._oMorph.pushCall(function() {
                    o.fireEvent && !i._fireCustomBeforeEvent(o) && (this.clear(), i._restore())
                }), this._oAnimation.move(this._bUseH ? t : 0, this._bUseV ? t : 0, e, o), this._oAnimation._oMorph.pushCall(function() {
                    i._setPanelEndInfo(o), i._panelEndAfterCall && i._panelEndAfterCall(o), o.fireEvent && i._fireCustomEvent(o)
                }), this._oAnimation._oMorph
            },
            _move: function(t, e, n) {
                if (t !== e) {
                    this._clearOffsetBug();
                    var i = t > e,
                        o = this._getStepCount(t, e);
                    if (n = n || {}, n.moveCount = o, n.next = i, n = this._makeOption(n), n.restore && (o = 1), 0 == n.duration) this._moveWithEvent(e, 0, n).play();
                    else {
                        for (var r = 0, s = t, a = 0, c = this.option("fpPanelEffect")(n.duration), h = 0; o > h; h++) n.moveIndex = h, a = this._getPanelEndPos(s, i), r = c((h + 1) / o) - c(h / o), this._moveWithEvent(a, r, n), s = a;
                        this._oAnimation._oMorph.play()
                    }
                }
            },
            _getStepCount: function(t, e) {
                var n = !(t > 0 && !this._bUseCircular) && t > e,
                    i = this._getStartIndex(t, n),
                    o = this._posToIndex(e),
                    r = (o * -this._nRange, Math.abs(o - i)),
                    s = i;
                return t % this._nRange === 0 && (s += n ? 0 : -1, n || r--), s *= -this._nRange, r
            },
            _posToIndex: function(t) {
                return Math.floor(-t / this._nRange)
            },
            _getStartIndex: function(t, e) {
                var n = this._posToIndex(t);
                return n += e ? 0 : 1
            },
            _getPanelEndPos: function(t, e) {
                var n = 0,
                    i = this._getStartIndex(t, e),
                    o = t % this._nRange === 0;
                return n = o ? t + (e ? -this._nRange : this._nRange) : (e ? i + 1 : i - 1) * -this._nRange
            },
            _getTranslate: function(t) {
                return this._oAnimation.getTranslate(this._bUseH ? t : 0, this._bUseV ? t : 0)
            },
            _makeHighlightStyle: function() {
                if (this._hasHighlightBug) {
                    var t = jindo.$("_jmc_no_tap_highlight_tag_");
                    if (!t) {
                        t = document.createElement("style");
                        var e = document.getElementsByTagName("html")[0];
                        t.type = "text/css", t.id = "_jmc_no_tap_highlight_tag_", e.insertBefore(t, e.firstChild);
                        var n = t.sheet || t.styleSheet;
                        n.insertRule("." + this._sHighlightClass + " { -webkit-tap-highlight-color: rgba(0,0,0,0); }", 0), n.insertRule("." + this._sHighlightClass + " * { -webkit-tap-highlight-color: rgba(0,0,0,0); }", 0)
                    }
                    this._htWElement.container.addClass(this._sHighlightClass)
                }
            },
            _tapImpl: function() {
                if (this._hasHighlightBug) {
                    this._htWElement.container.removeClass(this._sHighlightClass);
                    var t = this;
                    clearTimeout(this._nHightlightBug), this._nHightlightBug = setTimeout(function() {
                        t._htWElement.container.addClass(t._sHighlightClass)
                    }, 200)
                }
            },
            destroy: function() {
                jindo.m.SwipeCommon.prototype.destroy.apply(this)
            }
        }).extend(jindo.m.SwipeCommon), jindo.m.SlideFlicking = jindo.$Class({
            $init: function(t, e) {
                this.option(e || {}), this._initVar(), this._oDocFragment = document.createDocumentFragment(), this._setWrapperElement(t), this.option("bActivateOnload") && this.activate()
            },
            _onActivate: function() {
                jindo.m.Flick.prototype._onActivate.apply(this);
                var t = this;
                this.set(new jindo.m.Slide(this._getAnimationOption()).attach({
                    set: function(e) {
                        t._setStyle(e.css)
                    }
                }), this._htWElement.container)
            },
            _setStyle: function(t) {
                var e = {},
                    n = 0,
                    i = this._bUseH ? "width" : "height",
                    o = this._bUseH ? "left" : "top";
                jindo.$Jindo.mixin(e, t), this._bUseCircular && (e[i] = "100%", e[o] = "-100%", t.position = "absolute", t[i] = "100%", t.left = 0, t.top = 0), this._bUseH && (e.clear = "both", t["float"] = "left"), this._htWElement.container.css(e), jindo.$A(this._htWElement.aPanel).forEach(function(e, i) {
                    n = (i + 1) % this._nDefaultPanel * 100 + "%", this._bUseCircular && (this._hasOffsetBug() ? t[o] = n : t[this._oAnimation.p("Transform")] = this._getTranslate(n)), e.css(t)
                }, this)
            },
            resize: function() {
                jindo.m.Flick.prototype.resize.call(this);
                var t = this._bUseH ? "width" : "height",
                    e = this._htWElement.view[t]();
                this._bUseCircular || (this._htWElement.container.css(t, this._htWElement.aPanel.length * e + "px"), jindo.$A(this._htWElement.aPanel).forEach(function(n) {
                    n.css(t, e + "px")
                }), this._updateFlickInfo(), this._oAnimation.move(this._nX, this._nY))
            },
            _restorePanel: function(t) {
                t = t || this.getElement();
                var e = this._getIndexByElement(t),
                    n = this._hasOffsetBug() ? this._bUseH ? "left" : "top" : this._oAnimation.p("Transform"),
                    i = (0 > e - 1 ? this._nDefaultPanel - 1 : e - 1) % this._nDefaultPanel,
                    o = ((e + 1) % this._nDefaultPanel > this._nDefaultPanel - 1 ? 0 : e + 1) % this._nDefaultPanel,
                    r = e % this._nDefaultPanel;
                this._welElement = this._htWElement.aPanel[r], this._htWElement.container.css(this._oAnimation.p("Transform"), this._getTranslate(0)), this._welElement.css(n, this._getPosValue("100%")).css("zIndex", 10), this._htWElement.aPanel[i].css(n, this._getPosValue("0%")).css("zIndex", 1), this._htWElement.aPanel[o].css(n, this._getPosValue("200%")).css("zIndex", 1), jindo.m.getOsInfo().ios && this._bUseCircular && (this._oDocFragment.appendChild(this._htWElement.aPanel[i].$value()), this._oDocFragment.appendChild(this._htWElement.aPanel[o].$value()), this._htWElement.container.$value().appendChild(this._oDocFragment))
            },
            _getPosValue: function(t) {
                return this._hasOffsetBug() ? t : this._getTranslate(t)
            },
            _panelEndAfterCall: function() {
                this._bUseCircular && this._restorePanel()
            },
            _moveAfterCall: function(t) {
                this._oAnimation.move(this._nX, this._nY, 0, this._makeOption({
                    next: t.bNext
                }))
            },
            _onEndAniImpl: function() {
                jindo.m.Flick.prototype._onEndAniImpl.apply(this), this._bUseCircular || this._fixOffsetBugImpl()
            },
            destroy: function() {
                jindo.m.Flick.prototype.destroy.apply(this)
            }
        }).extend(jindo.m.Flick), jindo.m.Flicking = jindo.$Class({
            $init: function(t, e) {
                this.option({
                    bHorizontal: !0,
                    nDefaultIndex: 0,
                    sClassPrefix: "flick-",
                    sContentClass: "ct",
                    nDuration: 100,
                    nFlickThreshold: 40,
                    bUseCircular: !1,
                    sAnimation: "slide",
                    nFlickDistanceOffset: null,
                    bAutoResize: !0,
                    nBounceDuration: 100,
                    bSetNextPanelPos: !1,
                    bUseCss3d: jindo.m.useCss3d(),
                    bUseTimingFunction: jindo.m.useTimingFunction(),
                    bUseTranslate: !0,
                    bActivateOnload: !0,
                    bUseDiagonalTouch: !1,
                    nDefaultScale: .94,
                    nZIndex: 2e3
                }), this.option(e || {}), this._initVar(t), this.option("bActivateOnload") && this.activate()
            },
            $static: {
                _htAnimation: {
                    flip: "_FlipFlicking_",
                    "circular-flip": "_FlipFlicking_",
                    alignFlip: "_AlignFlipFlicking_",
                    "circular-alignFlip": "_AlignFlipFlicking_",
                    "circular-slide": "SlideFlicking",
                    slide: "SlideFlicking",
                    "circular-cover": "CoverFlicking",
                    cover: "CoverFlicking"
                }
            },
            _initVar: function(t) {
                this._el = jindo.$(t), this._oFlickingImpl = null, this._isSwipeType = !!/slide|cover/.test(this.option("sAnimation"))
            },
            _createFlicking: function() {
                var t = this.option("sAnimation");
                this.option("bUseCircular") && (t = "circular-" + t);
                try {
                    var e = this.option();
                    e.bActivateOnload = !1, this._oFlickingImpl = new jindo.m[jindo.m.Flicking._htAnimation[t]](this._el, e)
                } catch (n) {}
            },
            refresh: function(t, e, n) {
                this._oFlickingImpl && (this._isSwipeType ? this._oFlickingImpl.refresh(t, n, !0) : this._oFlickingImpl.refresh(t, e, n))
            },
            getIndexByElement: function(t) {
                return this._oFlickingImpl ? this._isSwipeType ? this._oFlickingImpl._getIndexByElement(t) : this._oFlickingImpl.getIndexByElement(t) : -1
            },
            getElement: function() {
                return this._oFlickingImpl ? this._oFlickingImpl.getElement() : null
            },
            getContentElement: function() {
                return this.getElement()
            },
            getContentIndex: function() {
                return this._oFlickingImpl ? this._oFlickingImpl.getContentIndex() : null
            },
            getNextElement: function() {
                return this._oFlickingImpl ? this._oFlickingImpl.getNextElement() : null
            },
            getPrevElement: function() {
                return this._oFlickingImpl ? this._oFlickingImpl.getPrevElement() : null
            },
            getTotalContents: function() {
                return this._oFlickingImpl ? this._oFlickingImpl.getTotalContents() : null
            },
            getTotalPanels: function() {
                return this._oFlickingImpl ? this._oFlickingImpl.getTotalPanels() : null
            },
            getPanels: function() {
                return this._oFlickingImpl ? this._oFlickingImpl._htWElement.aPanel : null
            },
            getPrevIndex: function() {
                return this._oFlickingImpl ? this._oFlickingImpl.getPrevIndex() : null
            },
            getNextIndex: function() {
                return this._oFlickingImpl ? this._oFlickingImpl.getNextIndex() : null
            },
            moveNext: function(t) {
                this.isActivating() && this._oFlickingImpl && this._oFlickingImpl.moveNext(t)
            },
            movePrev: function(t) {
                this.isActivating() && this._oFlickingImpl && this._oFlickingImpl.movePrev(t)
            },
            moveTo: function(t, e, n) {
                "undefined" != typeof t && t != this.getContentIndex() && (0 > t || t >= this.getTotalContents() || this._oFlickingImpl && (this._isSwipeType ? this._oFlickingImpl._moveTo(t, e, n, !0) : this._oFlickingImpl.moveTo(t, e, n)))
            },
            isAnimating: function() {
                return this._oFlickingImpl ? this._isSwipeType ? this._oFlickingImpl.isPlaying() : this._oFlickingImpl._doFlicking : void 0
            },
            _onActivate: function() {
                this._oFlickingImpl || this._createFlicking(), this._oFlickingImpl && !this._oFlickingImpl.isActivating() && (this._oFlickingImpl.activate(), this._attachEvent(), this._isSwipeType || this.refresh(this.getContentIndex(), !0, !1))
            },
            _onDeactivate: function() {
                this._oFlickingImpl.deactivate(), this._detachEvent()
            },
            _attachEvent: function() {
                if (this._oFlickingImpl) {
                    var t = this;
                    this._oFlickingImpl.attach({
                        touchStart: function(e) {
                            t.fireEvent("touchStart", e) || e.stop()
                        },
                        touchMove: function(e) {
                            t.fireEvent("touchMove", e)
                        },
                        touchEnd: function(e) {
                            t.fireEvent("touchEnd", e)
                        },
                        beforeFlicking: function(e) {
                            t.fireEvent("beforeFlicking", e) || e.stop()
                        },
                        afterFlicking: function(e) {
                            t.fireEvent("afterFlicking", e)
                        },
                        beforeMove: function(e) {
                            t.fireEvent("beforeMove", e) || e.stop()
                        },
                        move: function(e) {
                            t.fireEvent("move", e)
                        },
                        scroll: function() {
                            t.fireEvent("scroll")
                        },
                        beforeRestore: function(e) {
                            t.fireEvent("beforeRestore", e) || e.stop()
                        },
                        restore: function(e) {
                            t.fireEvent("restore", e)
                        }
                    })
                }
            },
            _detachEvent: function() {
                this._oFlickingImpl && this._oFlickingImpl.detachAll()
            },
            destroy: function() {
                this.deactivate(), this._el = null, this._oFlickingImpl = null, this._isSwipeType = !1
            }
        }).extend(jindo.m.UIComponent), jindo.LazyLoading = {
            _waLoading: jindo.$A([]),
            _waLoaded: jindo.$A([]),
            _whtScript: jindo.$H({}),
            _whtCallback: jindo.$H({})
        }, jindo.LazyLoading.load = function(t, e, n) {
            if ("function" != typeof e && (e = function() {}), t instanceof Array) {
                for (var i = (arguments.callee, !0), o = t.length, r = o, s = 0; s < o; s++) i &= this.load(t[s], function() {
                    r--, 0 === r && e()
                }, n);
                return i
            }
            if (this._queueCallback(t, e), this._checkIsLoading(t)) return !1;
            if (this._checkAlreadyLoaded(t)) return this._doCallback(t), !0;
            this._waLoading.push(t);
            var a = this,
                c = document.getElementsByTagName("head")[0],
                h = document.createElement("script");
            return h.type = "text/javascript", h.charset = n || "utf-8", h.src = t, this._whtScript.add(t, h), "onload" in h ? h.onload = function() {
                a._waLoaded.push(t), a._waLoading = a._waLoading.refuse(t), a._doCallback(t)
            } : h.onreadystatechange = function() {
                "complete" != this.readyState && "loaded" != this.readyState || (a._waLoaded.push(t), a._waLoading = a._waLoading.refuse(t), a._doCallback(t), this.onreadystatechange = null)
            }, c.appendChild(h), !0
        }, jindo.LazyLoading._queueCallback = function(t, e) {
            var n = this._whtCallback.$(t);
            n ? n.push(e) : this._whtCallback.$(t, [e])
        }, jindo.LazyLoading._doCallback = function(t) {
            for (var e = this._whtCallback.$(t).concat(), n = 0; n < e.length; n++) this._whtCallback.$(t).splice(n, 1), e[n]()
        }, jindo.LazyLoading.abort = function(t) {
            if (this._checkIsLoading(t)) {
                var e = this.getScriptElement(t);
                return this._waLoading = this._waLoading.refuse(t), "onload" in e ? e.onload = null : e.onreadystatechange = null, jindo.$Element(e).leave(), this._whtScript.remove(t), this._whtCallback.remove(t), !0
            }
            return !1
        }, jindo.LazyLoading._checkAlreadyLoaded = function(t) {
            return this._waLoaded.has(t)
        }, jindo.LazyLoading._checkIsLoading = function(t) {
            return this._waLoading.has(t)
        }, jindo.LazyLoading.getLoaded = function() {
            return this._waLoaded.$value()
        }, jindo.LazyLoading.getLoading = function() {
            return this._waLoading.$value()
        }, jindo.LazyLoading.getScriptElement = function(t) {
            return this._whtScript.$(t) || null
        };