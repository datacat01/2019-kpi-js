define("@ta/social.confirm-username", ["@ta/input.text-input", "@ta/styleguide.button", "@ta/styleguide.loading", "@ta/common.global"], function(e, n, a, t) {
    return function(e) {
        var n = {};

        function a(t) {
            if (n[t]) return n[t].exports;
            var i = n[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(i.exports, i, i.exports, a), i.l = !0, i.exports
        }
        return a.m = e, a.c = n, a.d = function(e, n, t) {
            a.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: t
            })
        }, a.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, a.t = function(e, n) {
            if (1 & n && (e = a(e)), 8 & n) return e;
            if (4 & n && "object" == typeof e && e && e.__esModule) return e;
            var t = Object.create(null);
            if (a.r(t), Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & n && "string" != typeof e)
                for (var i in e) a.d(t, i, function(n) {
                    return e[n]
                }.bind(null, i));
            return t
        }, a.n = function(e) {
            var n = e && e.__esModule ? function n() {
                return e.default
            } : function n() {
                return e
            };
            return a.d(n, "a", n), n
        }, a.o = function(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }, a.p = "", a(a.s = "./packages/social/confirm-username/index.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js": function(e, n, a) {
            "use strict";

            function t(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            a.d(n, "a", function() {
                return t
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js": function(e, n, a) {
            "use strict";

            function t(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }
            a.d(n, "a", function() {
                return t
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/createClass.js": function(e, n, a) {
            "use strict";

            function t(e, n) {
                for (var a = 0; a < n.length; a++) {
                    var t = n[a];
                    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
                }
            }

            function i(e, n, a) {
                return n && t(e.prototype, n), a && t(e, a), e
            }
            a.d(n, "a", function() {
                return i
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, n, a) {
            "use strict";

            function t(e, n, a) {
                return n in e ? Object.defineProperty(e, n, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = a, e
            }
            a.d(n, "a", function() {
                return t
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js": function(e, n, a) {
            "use strict";

            function t(e) {
                return (t = Object.setPrototypeOf ? Object.getPrototypeOf : function e(n) {
                    return n.__proto__ || Object.getPrototypeOf(n)
                })(e)
            }
            a.d(n, "a", function() {
                return t
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/inherits.js": function(e, n, a) {
            "use strict";
            a.d(n, "a", function() {
                return i
            });
            var t = a("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function i(e, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), n && Object(t.a)(e, n)
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, n, a) {
            "use strict";
            a.d(n, "a", function() {
                return r
            });
            var t = a("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                i = a("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function r(e, n) {
                return !n || "object" !== Object(t.a)(n) && "function" != typeof n ? Object(i.a)(e) : n
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js": function(e, n, a) {
            "use strict";

            function t(e, n) {
                return (t = Object.setPrototypeOf || function e(n, a) {
                    return n.__proto__ = a, n
                })(e, n)
            }
            a.d(n, "a", function() {
                return t
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/typeof.js": function(e, n, a) {
            "use strict";

            function t(e) {
                return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(n) {
                    return typeof n
                } : function e(n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
                })(e)
            }

            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" === t(Symbol.iterator) ? function e(n) {
                    return t(n)
                } : function e(n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : t(n)
                })(e)
            }
            a.d(n, "a", function() {
                return i
            })
        },
        "./node_modules/lodash/_Symbol.js": function(e, n, a) {
            var t = a("./node_modules/lodash/_root.js").Symbol;
            e.exports = t
        },
        "./node_modules/lodash/_baseGetTag.js": function(e, n, a) {
            var t = a("./node_modules/lodash/_Symbol.js"),
                i = a("./node_modules/lodash/_getRawTag.js"),
                r = a("./node_modules/lodash/_objectToString.js"),
                o = t ? t.toStringTag : void 0;
            e.exports = function l(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : o && o in Object(e) ? i(e) : r(e)
            }
        },
        "./node_modules/lodash/_freeGlobal.js": function(e, n, a) {
            (function(n) {
                var a = "object" == typeof n && n && n.Object === Object && n;
                e.exports = a
            }).call(this, a("./node_modules/webpack/buildin/global.js"))
        },
        "./node_modules/lodash/_getRawTag.js": function(e, n, a) {
            var t = a("./node_modules/lodash/_Symbol.js"),
                i = Object.prototype,
                r = i.hasOwnProperty,
                o = i.toString,
                l = t ? t.toStringTag : void 0;
            e.exports = function s(e) {
                var n = r.call(e, l),
                    a = e[l];
                try {
                    e[l] = void 0;
                    var t = !0
                } catch (e) {}
                var i = o.call(e);
                return t && (n ? e[l] = a : delete e[l]), i
            }
        },
        "./node_modules/lodash/_objectToString.js": function(e, n) {
            var a = Object.prototype.toString;
            e.exports = function t(e) {
                return a.call(e)
            }
        },
        "./node_modules/lodash/_root.js": function(e, n, a) {
            var t = a("./node_modules/lodash/_freeGlobal.js"),
                i = "object" == typeof self && self && self.Object === Object && self,
                r = t || i || Function("return this")();
            e.exports = r
        },
        "./node_modules/lodash/debounce.js": function(e, n, a) {
            var t = a("./node_modules/lodash/isObject.js"),
                i = a("./node_modules/lodash/now.js"),
                r = a("./node_modules/lodash/toNumber.js"),
                o = Math.max,
                l = Math.min;
            e.exports = function s(e, n, a) {
                var s, u, d, c, m, b, p = 0,
                    f = !1,
                    k = !1,
                    v = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");

                function _(n) {
                    var a = s,
                        t = u;
                    return s = u = void 0, p = n, c = e.apply(t, a)
                }

                function j(e) {
                    var a = e - b;
                    return void 0 === b || a >= n || a < 0 || k && e - p >= d
                }

                function N() {
                    var e = i();
                    if (j(e)) return y(e);
                    m = setTimeout(N, function a(e) {
                        var a = n - (e - b);
                        return k ? l(a, d - (e - p)) : a
                    }(e))
                }

                function y(e) {
                    return m = void 0, v && s ? _(e) : (s = u = void 0, c)
                }

                function O() {
                    var e = i(),
                        a = j(e);
                    if (s = arguments, u = this, b = e, a) {
                        if (void 0 === m) return function t(e) {
                            return p = e, m = setTimeout(N, n), f ? _(e) : c
                        }(b);
                        if (k) return m = setTimeout(N, n), _(b)
                    }
                    return void 0 === m && (m = setTimeout(N, n)), c
                }
                return n = r(n) || 0, t(a) && (f = !!a.leading, d = (k = "maxWait" in a) ? o(r(a.maxWait) || 0, n) : d, v = "trailing" in a ? !!a.trailing : v), O.cancel = function g() {
                    void 0 !== m && clearTimeout(m), p = 0, s = b = u = m = void 0
                }, O.flush = function h() {
                    return void 0 === m ? c : y(i())
                }, O
            }
        },
        "./node_modules/lodash/isObject.js": function(e, n) {
            e.exports = function a(e) {
                var n = typeof e;
                return null != e && ("object" == n || "function" == n)
            }
        },
        "./node_modules/lodash/isObjectLike.js": function(e, n) {
            e.exports = function a(e) {
                return null != e && "object" == typeof e
            }
        },
        "./node_modules/lodash/isSymbol.js": function(e, n, a) {
            var t = a("./node_modules/lodash/_baseGetTag.js"),
                i = a("./node_modules/lodash/isObjectLike.js");
            e.exports = function r(e) {
                return "symbol" == typeof e || i(e) && "[object Symbol]" == t(e)
            }
        },
        "./node_modules/lodash/now.js": function(e, n, a) {
            var t = a("./node_modules/lodash/_root.js");
            e.exports = function() {
                return t.Date.now()
            }
        },
        "./node_modules/lodash/toNumber.js": function(e, n, a) {
            var t = a("./node_modules/lodash/isObject.js"),
                i = a("./node_modules/lodash/isSymbol.js"),
                r = /^\s+|\s+$/g,
                o = /^[-+]0x[0-9a-f]+$/i,
                l = /^0b[01]+$/i,
                s = /^0o[0-7]+$/i,
                u = parseInt;
            e.exports = function d(e) {
                if ("number" == typeof e) return e;
                if (i(e)) return NaN;
                if (t(e)) {
                    var n = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = t(n) ? n + "" : n
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(r, "");
                var a = l.test(e);
                return a || s.test(e) ? u(e.slice(2), a ? 2 : 8) : o.test(e) ? NaN : +e
            }
        },
        "./node_modules/react-apollo/react-apollo.browser.umd.js": function(e, n, a) {
            e.exports = a("dll-reference @ta/common.global")("./node_modules/react-apollo/react-apollo.browser.umd.js")
        },
        "./node_modules/react-redux/es/index.js": function(e, n, a) {
            e.exports = a("dll-reference @ta/common.global")("./node_modules/react-redux/es/index.js")
        },
        "./node_modules/react/index.js": function(e, n, a) {
            e.exports = a("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./node_modules/webpack/buildin/global.js": function(e, n) {
            var a;
            a = function() {
                return this
            }();
            try {
                a = a || Function("return this")() || (0, eval)("this")
            } catch (e) {
                "object" == typeof window && (a = window)
            }
            e.exports = a
        },
        "./packages/common/classnames/classnames.jsx": function(e, n, a) {
            e.exports = a("dll-reference @ta/common.global")("./packages/common/classnames/classnames.jsx")
        },
        "./packages/common/i18n/i18n.jsx": function(e, n, a) {
            e.exports = a("dll-reference @ta/common.global")("./packages/common/i18n/i18n.jsx")
        },
        "./packages/common/logging/logging.jsx": function(e, n, a) {
            e.exports = a("dll-reference @ta/common.global")("./packages/common/logging/logging.jsx")
        },
        "./packages/common/tracking/tracking.jsx": function(e, n, a) {
            e.exports = a("dll-reference @ta/common.global")("./packages/common/tracking/tracking.jsx")
        },
        "./packages/social/confirm-username/index.jsx": function(e, n, a) {
            "use strict";
            a.r(n);
            var t = a("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                i = a("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                r = a("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                o = a("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                l = a("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                s = a("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                u = a("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                d = a("./node_modules/react/index.js"),
                c = a("./node_modules/react-apollo/react-apollo.browser.umd.js"),
                m = a("./node_modules/react-redux/es/index.js"),
                b = a("@ta/styleguide.loading"),
                p = a("./packages/common/i18n/i18n.jsx"),
                f = a("./packages/common/logging/logging.jsx"),
                k = a.n(f),
                v = a("@ta/input.text-input"),
                _ = a("@ta/styleguide.button"),
                j = a.n(_),
                N = a("./packages/common/classnames/classnames.jsx"),
                y = a.n(N),
                O = a("./packages/common/tracking/tracking.jsx"),
                g = a.n(O),
                h = a("./node_modules/lodash/debounce.js"),
                S = a.n(h),
                E = {
                    contentWrapper: "social-confirm-username-ConfirmUsername__contentWrapper--1spQP",
                    title: "social-confirm-username-ConfirmUsername__title--3C1vw",
                    label: "social-confirm-username-ConfirmUsername__label--1FEyN",
                    terms: "social-confirm-username-ConfirmUsername__terms--FPLdo",
                    link: "social-confirm-username-ConfirmUsername__link--2eyrT",
                    spinner: "social-confirm-username-ConfirmUsername__spinner--1jWxh",
                    username: "social-confirm-username-ConfirmUsername__username--YXmAK",
                    usernameInput: "social-confirm-username-ConfirmUsername__usernameInput--VOueD",
                    editInput: "social-confirm-username-ConfirmUsername__editInput--2G3CZ",
                    errorInputBox: "social-confirm-username-ConfirmUsername__errorInputBox--1TuMb",
                    errorLabel: "social-confirm-username-ConfirmUsername__errorLabel--vMzUd",
                    advisory: "social-confirm-username-ConfirmUsername__advisory--3hHQ4",
                    helperText: "social-confirm-username-ConfirmUsername__helperText--3SjE2",
                    buttonContainer: "social-confirm-username-ConfirmUsername__buttonContainer--UGWXl",
                    ui_error: "social-confirm-username-ConfirmUsername__ui_error--wWzf6",
                    ui_error_button: "social-confirm-username-ConfirmUsername__ui_error_button--1OIoG"
                },
                I = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "updateInsightProfile"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "userId"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "taUnique"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "cardId"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "CardTypeEnumInput"
                                    }
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "cardAction"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ActionTypeEnumInput"
                                    }
                                }
                            },
                            directives: []
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "updateInsightProfile"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "request"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "id"
                                            },
                                            value: {
                                                kind: "ObjectValue",
                                                fields: [{
                                                    kind: "ObjectField",
                                                    name: {
                                                        kind: "Name",
                                                        value: "userId"
                                                    },
                                                    value: {
                                                        kind: "Variable",
                                                        name: {
                                                            kind: "Name",
                                                            value: "userId"
                                                        }
                                                    }
                                                }, {
                                                    kind: "ObjectField",
                                                    name: {
                                                        kind: "Name",
                                                        value: "taUnique"
                                                    },
                                                    value: {
                                                        kind: "Variable",
                                                        name: {
                                                            kind: "Name",
                                                            value: "taUnique"
                                                        }
                                                    }
                                                }]
                                            }
                                        }, {
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "profile"
                                            },
                                            value: {
                                                kind: "ObjectValue",
                                                fields: [{
                                                    kind: "ObjectField",
                                                    name: {
                                                        kind: "Name",
                                                        value: "uiCardActions"
                                                    },
                                                    value: {
                                                        kind: "ListValue",
                                                        values: [{
                                                            kind: "ObjectValue",
                                                            fields: [{
                                                                kind: "ObjectField",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "cardId"
                                                                },
                                                                value: {
                                                                    kind: "Variable",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "cardId"
                                                                    }
                                                                }
                                                            }, {
                                                                kind: "ObjectField",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "cardAction"
                                                                },
                                                                value: {
                                                                    kind: "Variable",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "cardAction"
                                                                    }
                                                                }
                                                            }]
                                                        }]
                                                    }
                                                }]
                                            }
                                        }]
                                    }
                                }],
                                directives: []
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 323
                    }
                };
            I.loc.source = {
                body: "a133e269960c"
            };
            var T = I,
                x = function(e) {
                    function n() {
                        var e, a;
                        Object(t.a)(this, n);
                        for (var i = arguments.length, l = new Array(i), d = 0; d < i; d++) l[d] = arguments[d];
                        return a = Object(r.a)(this, (e = Object(o.a)(n)).call.apply(e, [this].concat(l))), Object(u.a)(Object(s.a)(Object(s.a)(a)), "componentDidMount", function() {
                            a.props.submit()
                        }), a
                    }
                    return Object(l.a)(n, e), Object(i.a)(n, [{
                        key: "render",
                        value: function e() {
                            return null
                        }
                    }]), n
                }(d.Component),
                C = new Set,
                V = Object(m.connect)(function(e) {
                    return {
                        userId: e.auth.loggedInUserId,
                        taUnique: e.meta.taUnique
                    }
                })(function e(n) {
                    var a = n.userId,
                        t = n.taUnique,
                        i = n.cardId,
                        r = n.cardAction;
                    return C.has(i) ? null : (C.add(i), d.createElement(c.Mutation, {
                        mutation: T
                    }, function(e) {
                        var n = {
                            userId: a,
                            taUnique: t,
                            cardId: i,
                            cardAction: r
                        };
                        return d.createElement(x, {
                            submit: function a() {
                                e({
                                    variables: n
                                })
                            }
                        })
                    }))
                }),
                U = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "ConfirmUsernameComplete"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "userId"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "taUnique"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "cardId"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "CardTypeEnumInput"
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "cardState"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "CardStateEnumInput"
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "newlyAccepted"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Boolean"
                                    }
                                }
                            },
                            directives: []
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "updateInsightProfile"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "request"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "id"
                                            },
                                            value: {
                                                kind: "ObjectValue",
                                                fields: [{
                                                    kind: "ObjectField",
                                                    name: {
                                                        kind: "Name",
                                                        value: "userId"
                                                    },
                                                    value: {
                                                        kind: "Variable",
                                                        name: {
                                                            kind: "Name",
                                                            value: "userId"
                                                        }
                                                    }
                                                }, {
                                                    kind: "ObjectField",
                                                    name: {
                                                        kind: "Name",
                                                        value: "taUnique"
                                                    },
                                                    value: {
                                                        kind: "Variable",
                                                        name: {
                                                            kind: "Name",
                                                            value: "taUnique"
                                                        }
                                                    }
                                                }]
                                            }
                                        }, {
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "profile"
                                            },
                                            value: {
                                                kind: "ObjectValue",
                                                fields: [{
                                                    kind: "ObjectField",
                                                    name: {
                                                        kind: "Name",
                                                        value: "uiCardsState"
                                                    },
                                                    value: {
                                                        kind: "ObjectValue",
                                                        fields: [{
                                                            kind: "ObjectField",
                                                            name: {
                                                                kind: "Name",
                                                                value: "states"
                                                            },
                                                            value: {
                                                                kind: "ListValue",
                                                                values: [{
                                                                    kind: "ObjectValue",
                                                                    fields: [{
                                                                        kind: "ObjectField",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "id"
                                                                        },
                                                                        value: {
                                                                            kind: "Variable",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "cardId"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        kind: "ObjectField",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "state"
                                                                        },
                                                                        value: {
                                                                            kind: "Variable",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "cardState"
                                                                            }
                                                                        }
                                                                    }]
                                                                }]
                                                            }
                                                        }]
                                                    }
                                                }]
                                            }
                                        }]
                                    }
                                }],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "acceptTermsOfUse"
                                },
                                arguments: [],
                                directives: [{
                                    kind: "Directive",
                                    name: {
                                        kind: "Name",
                                        value: "include"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "if"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "newlyAccepted"
                                            }
                                        }
                                    }]
                                }]
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 398
                    }
                };
            U.loc.source = {
                body: "22ce2e56766d"
            };
            var A = U,
                F = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "UsernameValidation"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "userId"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "username"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            },
                            directives: []
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "updateMemberProfile"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "userId"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "userId"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "displayName"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "displayName"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "username"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "username"
                                        }
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "status"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "memberProfile"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: {
                                                    kind: "Name",
                                                    value: "userId"
                                                },
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [{
                                                    kind: "Directive",
                                                    name: {
                                                        kind: "Name",
                                                        value: "static"
                                                    },
                                                    arguments: []
                                                }]
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "displayName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "username"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 279
                    }
                };
            F.loc.source = {
                body: "4925eba452f4"
            };
            var D = F,
                P = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "ConfirmUsernameQuery"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "userId"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                }
                            },
                            directives: []
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "memberProfiles"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "userIds"
                                    },
                                    value: {
                                        kind: "ListValue",
                                        values: [{
                                            kind: "ObjectValue",
                                            fields: [{
                                                kind: "ObjectField",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "userId"
                                                    }
                                                }
                                            }]
                                        }]
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "displayName"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "username"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "insightProfile"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "uiCardsState"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "states"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "id"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "state"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "getTermOfUseAcceptanceInfo"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "accepted"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 273
                    }
                };
            P.loc.source = {
                body: "e05d14fbc2cb"
            };
            var w = P,
                M = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "CheckUsernameQuery"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "username"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                }
                            },
                            directives: []
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "checkUsername"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "username"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "username"
                                        }
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "status"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 103
                    }
                };
            M.loc.source = {
                body: "9d7ecc257e65"
            };
            var q = M,
                z = "Social_onboarding_unknown",
                R = /^[a-zA-Z]+\d{11}$/,
                L = function e(n) {
                    return n && "string" == typeof n && n.match(R)
                },
                G = function e(n) {
                    return n.accepted ? null : d.createElement("div", {
                        className: E.terms
                    }, Object(p.unescaped)(Object(p.localize)("social_legal_tou_returnmem_confirm", {
                        0: "/pages/terms.html",
                        1: E.link
                    })))
                },
                W = function e(n) {
                    var a = n.usernameMutationVars,
                        t = n.screenCompleteMutationVars,
                        i = n.onUsernameValid,
                        r = n.screenCompleteCallback,
                        o = n.children,
                        l = n.textInputIsInvalid;
                    return d.createElement(c.Mutation, {
                        mutation: A,
                        refetchQueries: [{
                            query: w,
                            variables: {
                                userId: a.userId
                            }
                        }]
                    }, function(e) {
                        return d.createElement(c.Mutation, {
                            mutation: D,
                            onCompleted: function n(a) {
                                i(a) && (e({
                                    variables: t
                                }), r())
                            }
                        }, function(e) {
                            return d.createElement("form", {
                                onKeyPress: function e(n) {
                                    "Enter" === n.key && n.preventDefault()
                                },
                                onSubmit: function n(t) {
                                    t.preventDefault && t.preventDefault(), l() || e({
                                        variables: a
                                    })
                                }
                            }, o)
                        })
                    })
                };
            W.defaultProps = {
                children: null
            };
            var H = function(e) {
                    function n(e) {
                        var a;
                        return Object(t.a)(this, n), a = Object(r.a)(this, Object(o.a)(n).call(this, e)), Object(u.a)(Object(s.a)(Object(s.a)(a)), "onChange", function(e, n) {
                            a.setState(Object(u.a)({}, e, n)), "username" === e && "string" == typeof n && (a.clearErrorState("username"), a.debouncedHandleUsernameChange(n))
                        }), Object(u.a)(Object(s.a)(Object(s.a)(a)), "setErrorState", function(e) {
                            var n = a.state.name ? a.state.name : Object(p.localize)("onboarding_social_name_screen_display_name_field_v2"),
                                t = a.state.username ? a.state.username : Object(p.localize)("social_edit_profile_username");
                            switch (e) {
                                case "USERNAME_TOO_SHORT":
                                    a.setError(d.createElement(d.Fragment, null, Object(p.localize)("profile_update_error_username_too_short", {
                                        0: t
                                    })), "username");
                                    break;
                                case "USERNAME_TOO_LONG":
                                    a.setError(d.createElement(d.Fragment, null, Object(p.localize)("profile_update_error_username_too_long", {
                                        0: t
                                    })), "username");
                                    break;
                                case "USERNAME_INVALID_CHARACTERS":
                                    a.setError(Object(p.unescaped)(Object(p.localize)("profile_update_error_username_invalid_characters")), "username");
                                    break;
                                case "USERNAME_ALREADY_EXISTS":
                                    a.setError(d.createElement(d.Fragment, null, Object(p.localize)("profile_update_error_username_already_exists", {
                                        0: t
                                    })), "username");
                                    break;
                                case "USERNAME_CONTAINS_PROFANITY":
                                    a.setError(d.createElement(d.Fragment, null, Object(p.localize)("profile_update_error_contains_profanity")), "username");
                                    break;
                                case "USERNAME_CONTAINS_TA_WORDS":
                                    a.setError(d.createElement(d.Fragment, null, Object(p.localize)("profile_update_error_username_contains_ta_words")), "username");
                                    break;
                                case "DISPLAYNAME_TOO_SHORT":
                                    a.setError(d.createElement(d.Fragment, null, Object(p.localize)("mobile_profile_update_error_display_name_too_short")), "displayname");
                                    break;
                                case "DISPLAYNAME_TOO_LONG":
                                    a.setError(d.createElement(d.Fragment, null, Object(p.localize)("profile_update_error_display_name_too_long", {
                                        0: n
                                    })), "displayname");
                                    break;
                                case "DISPLAYNAME_CONTAINS_PROFANITY":
                                    a.setError(d.createElement(d.Fragment, null, Object(p.localize)("profile_update_error_contains_profanity")), "displayname");
                                    break;
                                case "DISPLAYNAME_CONTAINS_TA_WORDS":
                                    a.setError(d.createElement(d.Fragment, null, Object(p.localize)("profile_update_error_username_contains_ta_words")), "displayname");
                                    break;
                                default:
                                    k.a.error("Unknown username edit error: ".concat(e)), a.setError(d.createElement(d.Fragment, null, Object(p.localize)("social_loading_error_1")), "username")
                            }
                        }), Object(u.a)(Object(s.a)(Object(s.a)(a)), "setError", function(e, n) {
                            a.setState({
                                error: {
                                    message: e,
                                    field: n,
                                    advisory: !1
                                }
                            })
                        }), Object(u.a)(Object(s.a)(Object(s.a)(a)), "setAdvisory", function(e, n) {
                            a.setState({
                                error: {
                                    message: e,
                                    field: n,
                                    advisory: !0
                                }
                            })
                        }), Object(u.a)(Object(s.a)(Object(s.a)(a)), "clearErrorState", function(e) {
                            a.setAdvisory(null, e)
                        }), Object(u.a)(Object(s.a)(Object(s.a)(a)), "hasError", function(e) {
                            return a.state.error && a.state.error.field === e
                        }), Object(u.a)(Object(s.a)(Object(s.a)(a)), "isAdvisory", function() {
                            return a.state.error && a.state.error.advisory
                        }), Object(u.a)(Object(s.a)(Object(s.a)(a)), "newUser", function() {
                            return !a.props.displayName || !a.props.username || L(a.props.username)
                        }), Object(u.a)(Object(s.a)(Object(s.a)(a)), "handleUsernameChange", function(e) {
                            a.props.client.query({
                                query: q,
                                variables: {
                                    username: e
                                },
                                fetchPolicy: "no-cache"
                            }).then(function(e) {
                                var n = e.data.checkUsername.status;
                                "OK" !== n ? "USERNAME_IS_SAME" === n ? a.clearErrorState("username") : a.setErrorState(n) : a.setAdvisory(d.createElement("span", {
                                    className: E.advisory
                                }, Object(p.localize)("social_username_available")), "username")
                            })
                        }), Object(u.a)(Object(s.a)(Object(s.a)(a)), "debouncedHandleUsernameChange", S()(a.handleUsernameChange, 500)), a.state = {
                            name: L(e.username) ? "" : e.displayName,
                            username: L(e.username) ? "" : e.username,
                            error: null
                        }, z = e.trackingModule, a
                    }
                    return Object(l.a)(n, e), Object(i.a)(n, [{
                        key: "componentDidMount",
                        value: function e() {
                            var n = L(this.props.username);
                            g()({
                                module: z,
                                action: "namescreen_displayname",
                                context: this.props.displayName && !n ? "prefilled" : "blank"
                            }), g()({
                                module: z,
                                action: "namescreen_username",
                                context: this.props.username && !n ? "prefilled" : "blank"
                            })
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var n = this;
                            return d.createElement(W, {
                                usernameMutationVars: {
                                    userId: this.props.userId,
                                    displayName: this.props.displayName !== this.state.name ? this.state.name : null,
                                    username: this.props.username !== this.state.username ? this.state.username : null
                                },
                                screenCompleteMutationVars: {
                                    userId: this.props.userId,
                                    taUnique: this.props.taUnique,
                                    cardId: "ONBOARDING_CONFIRM_USER",
                                    cardState: "COMPLETED",
                                    newlyAccepted: !this.props.acceptedTou
                                },
                                screenCompleteCallback: function e() {
                                    n.props.onComplete()
                                },
                                onUsernameValid: function e(a) {
                                    var t, i = (null == a ? void 0 : null === (t = a.updateMemberProfile) || void 0 === t ? void 0 : t.status) || "UNKNOWN";
                                    return "OK" === i ? (g()({
                                        module: z,
                                        action: "namescreen_complete_success",
                                        context: ""
                                    }), !0) : (n.setErrorState(i), g()({
                                        module: z,
                                        action: "namescreen_submit_error",
                                        context: i
                                    }), !1)
                                },
                                textInputIsInvalid: function e() {
                                    return n.state.name ? !n.state.username && (n.setErrorState("USERNAME_TOO_SHORT"), !0) : (n.setErrorState("DISPLAYNAME_TOO_SHORT"), !0)
                                }
                            }, d.createElement(d.Fragment, null, d.createElement(V, {
                                cardId: "ONBOARDING_CONFIRM_USER",
                                cardAction: "SHOW"
                            }), d.createElement("div", {
                                className: E.contentWrapper
                            }, d.createElement("div", {
                                className: E.title
                            }, this.newUser() ? Object(p.localize)("onboarding_social_name_screen_new_header") : Object(p.localize)("onboarding_social_name_screen_returning_header")), d.createElement("div", null, d.createElement("span", {
                                className: E.label
                            }, Object(p.localize)("onboarding_social_name_screen_display_name_field_v2")), d.createElement("span", {
                                className: E.helperText
                            }, Object(p.localize)("onboarding_social_name_screen_display_name_helper_text_period_814")), d.createElement(v.TextInput, {
                                maxLength: 40,
                                value: this.state.name || "",
                                className: y()(E.editInput, Object(u.a)({}, E.errorInputBox, this.hasError("displayname"))),
                                onChange: function e(a, t) {
                                    return n.onChange("name", t)
                                },
                                placeholder: Object(p.localize)("onboarding_social_name_screen_display_name_ghost_text")
                            }), this.state.error && this.hasError("displayname") && d.createElement("span", {
                                className: E.errorLabel
                            }, this.state.error.message), Object(p.unescaped)("&nbsp;")), d.createElement("div", null, d.createElement("span", {
                                className: E.label
                            }, Object(p.localize)("social_edit_profile_username")), d.createElement("span", {
                                className: E.helperText
                            }, Object(p.localize)("onboarding_social_name_screen_username_helper_text_period_814")), d.createElement("span", {
                                className: E.username
                            }, d.createElement(v.TextInput, {
                                maxLength: 20,
                                value: this.state.username || "",
                                className: y()(E.usernameInput, E.editInput, Object(u.a)({}, E.errorInputBox, this.hasError("username") && !this.isAdvisory())),
                                onChange: function e(a, t) {
                                    return n.onChange("username", t)
                                },
                                placeholder: Object(p.localize)("onboarding_social_name_screen_username_ghost_text")
                            }), this.state.error && this.hasError("username") && d.createElement("span", {
                                className: E.errorLabel
                            }, this.state.error.message), Object(p.unescaped)("&nbsp;"))), d.createElement(G, {
                                accepted: this.props.acceptedTou
                            }), d.createElement("div", {
                                className: E.buttonContainer
                            }, d.createElement(O.Track, {
                                click: {
                                    module: z,
                                    action: "namescreen_confirm_click",
                                    context: ""
                                },
                                visible: {
                                    module: z,
                                    action: "namescreen_shown",
                                    context: ""
                                }
                            }, d.createElement(j.a, {
                                type: "primary",
                                size: "fullwidth"
                            }, Object(p.localize)("onboarding_social_name_screen_cta")))))))
                        }
                    }]), n
                }(d.Component),
                Y = Object(m.connect)(function(e) {
                    return {
                        userId: e.auth.loggedInUserId,
                        taUnique: e.meta.taUnique
                    }
                })(function e(n) {
                    return d.createElement(c.Query, {
                        query: w,
                        variables: {
                            userId: n.userId
                        },
                        fetchPolicy: "network-only"
                    }, function(e) {
                        var a = e.loading,
                            t = e.data,
                            i = e.error,
                            r = e.refetch;
                        if (i) return k.a.error("Error in ConfirmUsername query: ".concat(i)), g()({
                            module: z,
                            action: "confirmusername_query_error_shown",
                            context: n.userId
                        }), d.createElement("div", {
                            className: E.ui_error
                        }, Object(p.localize)("compliment_9bd"), d.createElement("div", {
                            className: E.ui_error_button
                        }, d.createElement(j.a, {
                            type: "primary",
                            onClick: function e() {
                                return r()
                            }
                        }, Object(p.localize)("link_uploader_refresh")), d.createElement(j.a, {
                            type: "primary",
                            onClick: n.closerForError
                        }, Object(p.localize)("btn_cancel"))));
                        if (a) return d.createElement("div", {
                            className: E.spinner
                        }, d.createElement(b.LoadingSpinner, null));
                        if (t) {
                            var o = t.getTermOfUseAcceptanceInfo && t.getTermOfUseAcceptanceInfo.accepted,
                                l = t.insightProfile && t.insightProfile.uiCardsState;
                            if (l && function e(n) {
                                    return n.states.find(function(e) {
                                        return "ONBOARDING_CONFIRM_USER" === e.id && "COMPLETED" === e.state
                                    })
                                }(l) && o) return n.onComplete(), null;
                            var s = t.memberProfiles[0],
                                u = s ? s.displayName : "",
                                m = s ? s.username : "";
                            return d.createElement(c.ApolloConsumer, null, function(e) {
                                return d.createElement(H, {
                                    userId: n.userId,
                                    taUnique: n.taUnique,
                                    displayName: u,
                                    username: m,
                                    onComplete: n.onComplete,
                                    trackingModule: n.trackingModule,
                                    acceptedTou: o,
                                    client: e
                                })
                            })
                        }
                        return null
                    })
                }),
                B = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "updateInsightProfile"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "userId"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "taUnique"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "cardId"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "CardTypeEnumInput"
                                    }
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "cardState"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "CardStateEnumInput"
                                }
                            },
                            directives: []
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "updateInsightProfile"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "request"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "id"
                                            },
                                            value: {
                                                kind: "ObjectValue",
                                                fields: [{
                                                    kind: "ObjectField",
                                                    name: {
                                                        kind: "Name",
                                                        value: "userId"
                                                    },
                                                    value: {
                                                        kind: "Variable",
                                                        name: {
                                                            kind: "Name",
                                                            value: "userId"
                                                        }
                                                    }
                                                }, {
                                                    kind: "ObjectField",
                                                    name: {
                                                        kind: "Name",
                                                        value: "taUnique"
                                                    },
                                                    value: {
                                                        kind: "Variable",
                                                        name: {
                                                            kind: "Name",
                                                            value: "taUnique"
                                                        }
                                                    }
                                                }]
                                            }
                                        }, {
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "profile"
                                            },
                                            value: {
                                                kind: "ObjectValue",
                                                fields: [{
                                                    kind: "ObjectField",
                                                    name: {
                                                        kind: "Name",
                                                        value: "uiCardsState"
                                                    },
                                                    value: {
                                                        kind: "ObjectValue",
                                                        fields: [{
                                                            kind: "ObjectField",
                                                            name: {
                                                                kind: "Name",
                                                                value: "states"
                                                            },
                                                            value: {
                                                                kind: "ListValue",
                                                                values: [{
                                                                    kind: "ObjectValue",
                                                                    fields: [{
                                                                        kind: "ObjectField",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "id"
                                                                        },
                                                                        value: {
                                                                            kind: "Variable",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "cardId"
                                                                            }
                                                                        }
                                                                    }, {
                                                                        kind: "ObjectField",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "state"
                                                                        },
                                                                        value: {
                                                                            kind: "Variable",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "cardState"
                                                                            }
                                                                        }
                                                                    }]
                                                                }]
                                                            }
                                                        }]
                                                    }
                                                }]
                                            }
                                        }]
                                    }
                                }],
                                directives: []
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 321
                    }
                };
            B.loc.source = {
                body: "4ce1ebdfe873"
            };
            var Q = B,
                K = new Set,
                $ = Object(m.connect)(function(e) {
                    return {
                        userId: e.auth.loggedInUserId,
                        taUnique: e.meta.taUnique
                    }
                })(function e(n) {
                    var a = n.userId,
                        t = n.taUnique,
                        i = n.cardId,
                        r = n.cardState;
                    return K.has(i) ? null : (K.add(i), d.createElement(c.Mutation, {
                        mutation: Q
                    }, function(e) {
                        var n = {
                            userId: a,
                            taUnique: t,
                            cardId: i,
                            cardState: r
                        };
                        return d.createElement(x, {
                            submit: function a() {
                                e({
                                    variables: n
                                })
                            }
                        })
                    }))
                });
            a.d(n, "ConfirmUsername", function() {
                return Y
            }), a.d(n, "LogCardActionToInsightProfile", function() {
                return V
            }), a.d(n, "LogCardStateToInsightProfile", function() {
                return $
            })
        },
        "@ta/input.text-input": function(n, a) {
            n.exports = e
        },
        "@ta/styleguide.button": function(e, a) {
            e.exports = n
        },
        "@ta/styleguide.loading": function(e, n) {
            e.exports = a
        },
        "dll-reference @ta/common.global": function(e, n) {
            e.exports = t
        }
    })
});
//# sourceMappingURL=social.confirm-username.ebbf2eea85.js.map