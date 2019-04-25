define("@ta/social.social-reference", ["@ta/common.typeahead", "@ta/input.text-area", "@ta/list.navigable-list", "@ta/styleguide.avatar", "@ta/common.global"], function(e, t, n, r, a) {
    return function(e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var a = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
        }
        return n.m = e, n.c = t, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var a in e) n.d(r, a, function(t) {
                    return e[t]
                }.bind(null, a));
            return r
        }, n.n = function(e) {
            var t = e && e.__esModule ? function t() {
                return e.default
            } : function t() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = "./packages/social/social-reference/social-reference.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js": function(e, t, n) {
            "use strict";

            function r(e) {
                if (Array.isArray(e)) return e
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js": function(e, t, n) {
            "use strict";

            function r(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js": function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/createClass.js": function(e, t, n) {
            "use strict";

            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function a(e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), e
            }
            n.d(t, "a", function() {
                return a
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js": function(e, t, n) {
            "use strict";

            function r(e) {
                return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(e)
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/inherits.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Object(r.a)(e, t)
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js": function(e, t, n) {
            "use strict";

            function r(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js": function(e, t, n) {
            "use strict";

            function r() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function o(e, t) {
                return !t || "object" !== Object(r.a)(t) && "function" != typeof t ? Object(a.a)(e) : t
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js": function(e, t, n) {
            "use strict";

            function r(e, t) {
                return (r = Object.setPrototypeOf || function e(t, n) {
                    return t.__proto__ = n, t
                })(e, t)
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");

            function o(e, t) {
                return Object(r.a)(e) || function n(e, t) {
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var s, u = e[Symbol.iterator](); !(r = (s = u.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || Object(a.a)()
            }
            n.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js": function(e, t, n) {
            "use strict";
            var r = n("./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");

            function a(e) {
                return function t(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                }(e) || Object(r.a)(e) || function n() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }
            n.d(t, "a", function() {
                return a
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/typeof.js": function(e, t, n) {
            "use strict";

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(t) {
                    return typeof t
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(e)
            }

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function e(t) {
                    return r(t)
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : r(t)
                })(e)
            }
            n.d(t, "a", function() {
                return a
            })
        },
        "./node_modules/react/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/classnames/classnames.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/classnames/classnames.jsx")
        },
        "./packages/events/keyboard-event-listener/KeyboardEventListener.jsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                o = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                u = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                i = function(e) {
                    function t(e) {
                        var n;
                        return Object(r.a)(this, t), n = Object(o.a)(this, Object(s.a)(t).call(this, e)), Object(l.a)(Object(c.a)(Object(c.a)(n)), "keyNames", void 0), Object(l.a)(Object(c.a)(Object(c.a)(n)), "handleEvent", function(e) {
                            var t = e.key;
                            t && -1 !== n.keyNames.indexOf(t) && n.props.callback(e)
                        }), n.keyNames = Array.isArray(e.keyName) ? e.keyName : [e.keyName], n
                    }
                    return Object(u.a)(t, e), Object(a.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            window.addEventListener(this.props.eventType, this.handleEvent)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function e() {
                            window.removeEventListener(this.props.eventType, this.handleEvent)
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            return null
                        }
                    }]), t
                }(n("./node_modules/react/index.js").Component);
            Object(l.a)(i, "defaultProps", {
                eventType: "keydown"
            })
        },
        "./packages/social/social-reference/social-reference.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                o = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                u = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                i = n("./node_modules/react/index.js"),
                p = n("@ta/list.navigable-list"),
                f = n("@ta/styleguide.avatar"),
                d = n("@ta/common.typeahead"),
                b = function(e) {
                    function t() {
                        var e, n;
                        Object(r.a)(this, t);
                        for (var a = arguments.length, u = new Array(a), i = 0; i < a; i++) u[i] = arguments[i];
                        return n = Object(o.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(u))), Object(l.a)(Object(c.a)(Object(c.a)(n)), "onSelection", function(e) {
                            n.props.onSelection && "function" == typeof n.props.onSelection && n.props.onSelection(e, n.props.result)
                        }), n
                    }
                    return Object(u.a)(t, e), Object(a.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = "@".concat(this.props.result.name).concat(this.props.result.following ? " • ".concat(this.props.result.following) : ""),
                                n = {
                                    withBorder: !0,
                                    size: "small",
                                    photo: {
                                        photoSizes: [{
                                            url: this.props.result.avatar && this.props.result.avatar.url_small,
                                            width: 32,
                                            height: 32
                                        }]
                                    }
                                };
                            return i.createElement(p.NavigableListItem, {
                                onSelection: this.onSelection,
                                active: !!this.props.active
                            }, i.createElement("div", {
                                className: "".concat("social-social-reference-typeahead-result-UserProfileResult__result_container--1cgyP", " ").concat(this.props.active ? "social-social-reference-typeahead-result-UserProfileResult__active--3EaMI" : "")
                            }, i.createElement("div", {
                                className: "social-social-reference-typeahead-result-UserProfileResult__avatar_container--BpPYT"
                            }, i.createElement(f.Avatar, n)), i.createElement(d.BasicResult, {
                                title: this.props.result.details && this.props.result.details.name,
                                subtitle: t,
                                verifiedIcon: this.props.result.details && this.props.result.details.verified,
                                paddingStyle: "narrow"
                            })))
                        }
                    }]), t
                }(i.Component);
            Object(l.a)(b, "defaultProps", {
                onSelection: void 0,
                active: !1
            });
            var m = b,
                h = n("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                y = n("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),
                j = n("./packages/events/keyboard-event-listener/KeyboardEventListener.jsx"),
                O = n("./packages/common/classnames/classnames.jsx"),
                v = n.n(O),
                g = n("@ta/input.text-area"),
                x = function(e) {
                    function t() {
                        var e, n;
                        Object(r.a)(this, t);
                        for (var a = arguments.length, u = new Array(a), i = 0; i < a; i++) u[i] = arguments[i];
                        return n = Object(o.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(u))), Object(l.a)(Object(c.a)(Object(c.a)(n)), "state", {
                            textInputValue: n.props.value
                        }), Object(l.a)(Object(c.a)(Object(c.a)(n)), "onSelection", function(e, t) {
                            e.preventDefault(), t && (n.props.selectionChanged && n.props.selectionChanged(t), n.updateSearch(""), n.textInput && n.textInput.focus())
                        }), Object(l.a)(Object(c.a)(Object(c.a)(n)), "tracker", new d.TypeaheadTracking("", "")), Object(l.a)(Object(c.a)(Object(c.a)(n)), "textInput", void 0), Object(l.a)(Object(c.a)(Object(c.a)(n)), "updateSearch", void 0), n
                    }
                    return Object(u.a)(t, e), Object(a.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this;
                            return i.createElement(d.Typeahead, {
                                fetchers: this.props.fetchers
                            }, function(e, n) {
                                t.updateSearch = n;
                                var r = e && Object.keys(e).filter(function(t) {
                                    return ! function e(t) {
                                        return !t || 0 === t.length
                                    }(e[t])
                                }).length > 0 ? e : null;
                                return i.createElement("div", null, i.createElement("span", {
                                    className: v()("ui_icon", "social-social-reference-ReferenceSelector__textInput--32Uyj")
                                }, i.createElement(d.TypeaheadTextArea, {
                                    name: t.props.name,
                                    inputComponentType: g.TextArea,
                                    inputComponentClassName: v()("ui_textarea", t.props.className),
                                    value: t.state.textInputValue,
                                    onChange: function e(n, r) {
                                        t.props.textInputChanged(n, r), t.setState({
                                            textInputValue: r
                                        })
                                    },
                                    onQueryChange: function e(r) {
                                        t.props.updateQuery(r, n)
                                    },
                                    onFocus: t.props.onFocus,
                                    onBlur: function e(r) {
                                        setTimeout(function() {
                                            n("")
                                        }, 500), t.props.onBlur && t.props.onBlur(r)
                                    },
                                    searchDelay: 50,
                                    placeholder: t.props.placeholder,
                                    onRef: function e(n) {
                                        t.textInput = n, t.props.onRef && t.props.onRef(n)
                                    },
                                    cols: t.props.cols,
                                    rows: t.props.rows,
                                    maxLength: t.props.maxLength,
                                    focusOnMount: t.props.focusOnMount
                                }), i.createElement("div", {
                                    className: "social-social-reference-ReferenceSelector__resultsContainer--fDpWm"
                                }, r && i.createElement("div", {
                                    className: "social-social-reference-ReferenceSelector__results--1P_SP"
                                }, t.props.children(e, t.tracker, t.onSelection)))), i.createElement(j.a, {
                                    keyName: "Escape",
                                    callback: function e() {
                                        n("")
                                    }
                                }))
                            })
                        }
                    }]), t
                }(i.Component);
            Object(l.a)(x, "defaultProps", {
                placeholder: "",
                className: void 0,
                inputType: void 0,
                focusOnMount: !1,
                onFocus: void 0,
                onBlur: void 0,
                rows: 5,
                cols: 50,
                value: ""
            });
            var S = x,
                _ = function(e) {
                    function t() {
                        var e, n;
                        Object(r.a)(this, t);
                        for (var a = arguments.length, u = new Array(a), p = 0; p < a; p++) u[p] = arguments[p];
                        return n = Object(o.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(u))), Object(l.a)(Object(c.a)(Object(c.a)(n)), "state", {
                            textInputValue: n.props.value || "",
                            shouldQuery: !1,
                            queryStartIndex: -1,
                            queryEndIndex: -1,
                            references: [],
                            referenceType: "USER_PROFILE"
                        }), Object(l.a)(Object(c.a)(Object(c.a)(n)), "onResultSelected", function(e) {
                            var t = n.state.textInputValue,
                                r = n.state.queryStartIndex,
                                a = n.state.queryEndIndex,
                                o = n.replaceCurrentValue(t, r, a, "".concat(e.name, " "));
                            if (n.setState({
                                    textInputValue: o,
                                    queryStartIndex: -1,
                                    queryEndIndex: -1,
                                    shouldQuery: !1,
                                    references: [].concat(Object(y.a)(n.state.references), [{
                                        start: r,
                                        length: e.name.length
                                    }])
                                }), n.textInput) {
                                n.textInput.setSelectionRange(r + e.name.length + 2, r + e.name.length + 2);
                                var s = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, "value");
                                s && s.set.call(n.textInput, o), n.textInput.dispatchEvent(new Event("input", {
                                    bubbles: !0
                                }))
                            }
                            n.autoScrollWrapElement({
                                block: "start",
                                behavior: "smooth"
                            })
                        }), Object(l.a)(Object(c.a)(Object(c.a)(n)), "autoScrollWrapElement", function(e) {
                            n.props.shouldAutoScroll && n.autoScrollAnchorRef.current && n.autoScrollAnchorRef.current.parentElement && n.autoScrollAnchorRef.current.parentElement.scrollIntoView(e)
                        }), Object(l.a)(Object(c.a)(Object(c.a)(n)), "queryStartWith", ["@"]), Object(l.a)(Object(c.a)(Object(c.a)(n)), "queryStopWith", [" ", "\n", "\t"]), Object(l.a)(Object(c.a)(Object(c.a)(n)), "referenceFinder", /(([\s!.,?])|^)([@][\w_-]+)/g), Object(l.a)(Object(c.a)(Object(c.a)(n)), "textInput", void 0), Object(l.a)(Object(c.a)(Object(c.a)(n)), "autoScrollAnchorRef", i.createRef()), Object(l.a)(Object(c.a)(Object(c.a)(n)), "typeaheadJsonFetcher", new d.TypeaheadJsonFetcher({
                            interleaved: !0,
                            types: ["profiles"],
                            filter: void 0,
                            link_type: "none",
                            details: !0,
                            legacy_format: !0,
                            urlList: !1,
                            matchUserProfiles: !0,
                            max: n.props.numberOfResults
                        })), Object(l.a)(Object(c.a)(Object(c.a)(n)), "replaceCurrentValue", function(e, t, n, r) {
                            return e.substring(0, t + 1).concat(r, e.substring(n + 1))
                        }), Object(l.a)(Object(c.a)(Object(c.a)(n)), "findDifference", function(e, t) {
                            if (0 === e.length) return [0, t];
                            for (var n = e.length - 1, r = t.length - 1; n < r && n >= 0;)
                                if (e.charAt(n--) !== t.charAt(r--)) return [r + 1, t.charAt(r + 1)];
                            return -1 === n && 0 === r ? [0, t.charAt(0)] : [-1, void 0]
                        }), Object(l.a)(Object(c.a)(Object(c.a)(n)), "updateReferences", function(e) {
                            if (null !== e && 0 !== e.length) {
                                var t = 0,
                                    r = [],
                                    a = e.match(n.referenceFinder);
                                a && a.forEach(function(a) {
                                    var o = -1 !== n.queryStartWith.indexOf(a.charAt(0)) ? a : a.substring(1);
                                    t = e.substring(t).search(o) + t, r = [].concat(Object(y.a)(r), [{
                                        start: t,
                                        length: o.length
                                    }])
                                }), n.setState({
                                    references: r
                                })
                            }
                        }), Object(l.a)(Object(c.a)(Object(c.a)(n)), "editReferences", function(e, t, r) {
                            var a = n.state.references.filter(function(e) {
                                return t[0] > e.start && t[0] <= e.start + e.length
                            })[0];
                            return a ? (n.setState({
                                textInputValue: e,
                                queryStartIndex: a.start,
                                queryEndIndex: a.start + a.length + r,
                                shouldQuery: !0
                            }), !0) : (n.setState({
                                textInputValue: e,
                                queryStartIndex: -1,
                                queryEndIndex: -1,
                                shouldQuery: !1
                            }), !1)
                        }), Object(l.a)(Object(c.a)(Object(c.a)(n)), "textInputChanged", function(e, t) {
                            if (n.props.onChange && n.props.onChange(e, t), t.length > n.state.textInputValue.length) {
                                n.updateReferences(t);
                                var r, a, o, s = n.findDifference(n.state.textInputValue, t); - 1 !== n.queryStopWith.indexOf(s[1]) ? n.setState({
                                    textInputValue: t,
                                    queryStartIndex: -1,
                                    queryEndIndex: -1,
                                    shouldQuery: !1
                                }) : n.editReferences(t, s, 1) || (a = -1 === (r = -1 === n.queryStartWith.indexOf(s[1]) ? n.state.queryStartIndex : s[0]) ? -1 : -1 === s[0] ? n.state.queryEndIndex : Object(h.a)(s, 1)[0], o = -1 !== r && -1 !== a && r < a, n.setState({
                                    textInputValue: t,
                                    queryStartIndex: r,
                                    queryEndIndex: a,
                                    shouldQuery: o
                                }))
                            } else if (t.length < n.state.textInputValue.length) {
                                n.updateReferences(t);
                                var u = n.findDifference(t, n.state.textInputValue); - 1 !== u[0] ? n.editReferences(t, u, -1) : n.setState({
                                    textInputValue: t
                                })
                            }
                        }), Object(l.a)(Object(c.a)(Object(c.a)(n)), "updateQuery", function(e, t) {
                            n.state.shouldQuery ? t(e.substring(n.state.queryStartIndex, n.state.queryEndIndex + 1).trim()) : t("")
                        }), n
                    }
                    return Object(u.a)(t, e), Object(a.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            this.setState({
                                textInputValue: this.props.value,
                                references: this.props.references
                            })
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var t = this;
                            return i.createElement("div", {
                                ref: this.autoScrollAnchorRef
                            }, i.createElement(S, {
                                className: this.props.className,
                                fetchers: [this.typeaheadJsonFetcher],
                                name: this.props.name,
                                value: this.state.textInputValue,
                                selectionChanged: this.onResultSelected,
                                textInputChanged: this.textInputChanged,
                                placeholder: this.props.placeholder,
                                updateQuery: this.updateQuery,
                                onRef: function e(n) {
                                    n && (t.textInput = n, t.props.onRef && t.props.onRef(n))
                                },
                                onFocus: function e(n) {
                                    t.autoScrollWrapElement(), t.props.onFocus && t.props.onFocus(n)
                                },
                                onBlur: this.props.onBlur,
                                cols: this.props.cols,
                                rows: this.props.rows,
                                maxLength: this.props.maxLength,
                                focusOnMount: this.props.focusOnMount
                            }, function(e, n, r) {
                                return i.createElement(p.NavigableList, null, Object(y.a)(e.typeaheadjson || []).map(function(e) {
                                    return function(n, a) {
                                        return i.createElement(p.NavigableListItem, {
                                            onSelection: function t(n) {
                                                return r(n, e)
                                            },
                                            onMouseMove: a,
                                            active: n,
                                            key: "item_".concat(e.name)
                                        }, i.createElement(j.a, {
                                            keyName: "Tab",
                                            callback: function t(a) {
                                                n && r(a, e)
                                            }
                                        }), function e(n, r, a) {
                                            switch (t.state.referenceType) {
                                                case "USER_PROFILE":
                                                    return i.createElement(m, {
                                                        result: n,
                                                        onSelection: r,
                                                        active: a
                                                    });
                                                default:
                                                    return null
                                            }
                                        }(e, r, n))
                                    }
                                }))
                            }))
                        }
                    }]), t
                }(i.Component);
            Object(l.a)(_, "defaultProps", {
                placeholder: "",
                value: "",
                references: [],
                onRef: void 0,
                onChange: void 0,
                onFocus: void 0,
                onBlur: void 0,
                focusOnMount: !1,
                numberOfResults: 5,
                shouldAutoScroll: !1
            });
            var I = _;
            n.d(t, "UserProfileResult", function() {
                return m
            }), n.d(t, "ReferenceSelectorController", function() {
                return I
            })
        },
        "@ta/common.typeahead": function(t, n) {
            t.exports = e
        },
        "@ta/input.text-area": function(e, n) {
            e.exports = t
        },
        "@ta/list.navigable-list": function(e, t) {
            e.exports = n
        },
        "@ta/styleguide.avatar": function(e, t) {
            e.exports = r
        },
        "dll-reference @ta/common.global": function(e, t) {
            e.exports = a
        }
    })
});
//# sourceMappingURL=social.social-reference.147ded160a.js.map