define("@ta/common.typeahead", ["@ta/common.string", "@ta/input.text-input", "@ta/list.navigable-list", "@ta/media.image", "@ta/styleguide.icon", "@ta/common.global"], function(e, t, n, a, o, r) {
    return function(e) {
        var t = {};

        function n(a) {
            if (t[a]) return t[a].exports;
            var o = t[a] = {
                i: a,
                l: !1,
                exports: {}
            };
            return e[a].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }
        return n.m = e, n.c = t, n.d = function(e, t, a) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: a
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
            var a = Object.create(null);
            if (n.r(a), Object.defineProperty(a, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) n.d(a, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return a
        }, n.n = function(e) {
            var t = e && e.__esModule ? function t() {
                return e.default
            } : function t() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = "./packages/common/typeahead/typeaheadExports.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js": function(e, t, n) {
            "use strict";

            function a(e) {
                if (Array.isArray(e)) return e
            }
            n.d(t, "a", function() {
                return a
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js": function(e, t, n) {
            "use strict";

            function a(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            n.d(t, "a", function() {
                return a
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js": function(e, t, n) {
            "use strict";

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            n.d(t, "a", function() {
                return a
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/createClass.js": function(e, t, n) {
            "use strict";

            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function o(e, t, n) {
                return t && a(e.prototype, t), n && a(e, n), e
            }
            n.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, t, n) {
            "use strict";

            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, "a", function() {
                return a
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js": function(e, t, n) {
            "use strict";

            function a(e) {
                return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(e)
            }
            n.d(t, "a", function() {
                return a
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/inherits.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var a = n("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function o(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Object(a.a)(e, t)
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js": function(e, t, n) {
            "use strict";

            function a(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }
            n.d(t, "a", function() {
                return a
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js": function(e, t, n) {
            "use strict";

            function a() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
            n.d(t, "a", function() {
                return a
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/objectSpread.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var a = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), o.forEach(function(t) {
                        Object(a.a)(e, t, n[t])
                    })
                }
                return e
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var a = n("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                o = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function r(e, t) {
                return !t || "object" !== Object(a.a)(t) && "function" != typeof t ? Object(o.a)(e) : t
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js": function(e, t, n) {
            "use strict";

            function a(e, t) {
                return (a = Object.setPrototypeOf || function e(t, n) {
                    return t.__proto__ = n, t
                })(e, t)
            }
            n.d(t, "a", function() {
                return a
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js": function(e, t, n) {
            "use strict";
            var a = n("./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js"),
                o = n("./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");

            function r(e, t) {
                return Object(a.a)(e) || function n(e, t) {
                    var n = [],
                        a = !0,
                        o = !1,
                        r = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(a = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); a = !0);
                    } catch (e) {
                        o = !0, r = e
                    } finally {
                        try {
                            a || null == c.return || c.return()
                        } finally {
                            if (o) throw r
                        }
                    }
                    return n
                }(e, t) || Object(o.a)()
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js": function(e, t, n) {
            "use strict";
            var a = n("./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");

            function o(e) {
                return function t(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                }(e) || Object(a.a)(e) || function n() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }
            n.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/typeof.js": function(e, t, n) {
            "use strict";

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(t) {
                    return typeof t
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(e)
            }

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function e(t) {
                    return a(t)
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : a(t)
                })(e)
            }
            n.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/react-apollo/react-apollo.browser.umd.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react-apollo/react-apollo.browser.umd.js")
        },
        "./node_modules/react/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/classnames/classnames.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/classnames/classnames.jsx")
        },
        "./packages/common/features/features.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/features/features.jsx")
        },
        "./packages/common/i18n/i18n.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/i18n/i18n.jsx")
        },
        "./packages/common/logging/logging.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/logging/logging.jsx")
        },
        "./packages/common/tracking/tracking.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/tracking/tracking.jsx")
        },
        "./packages/common/typeahead/typeaheadExports.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                o = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                u = n("./node_modules/react/index.js"),
                p = function(e) {
                    function t() {
                        var e, n;
                        Object(a.a)(this, t);
                        for (var o = arguments.length, c = new Array(o), u = 0; u < o; u++) c[u] = arguments[u];
                        return n = Object(r.a)(this, (e = Object(i.a)(t)).call.apply(e, [this].concat(c))), Object(l.a)(Object(s.a)(Object(s.a)(n)), "state", {
                            results: Object.freeze({})
                        }), Object(l.a)(Object(s.a)(Object(s.a)(n)), "notifyFetchers", function(e) {
                            n.props.fetchers.forEach(function(t) {
                                return t.fetch(e, n.props.context, n.recalculate)
                            })
                        }), Object(l.a)(Object(s.a)(Object(s.a)(n)), "recalculate", function() {
                            var e = {};
                            n.props.fetchers.forEach(function(t) {
                                var a = t.getResults();
                                e[t.id] = a ? a.filter(function(e) {
                                    return e && (n.props.filters || []).every(function(t) {
                                        return t(e)
                                    })
                                }) : a
                            }), n.setState({
                                results: e
                            }, function() {
                                return n.props.onResultsChange(n.state.results)
                            })
                        }), n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            this.props.runOnInit && this.notifyFetchers("")
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function e(t) {
                            var n = this;
                            this.props.context !== t.context && this.props.fetchers.forEach(function(e) {
                                var t = e;
                                t.onContextChange && "function" == typeof t.onContextChange && t.onContextChange(n.props.context, n.recalculate)
                            })
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            return this.props.children ? this.props.children(this.state.results, this.notifyFetchers) : null
                        }
                    }]), t
                }(u.Component);
            Object(l.a)(p, "defaultProps", {
                context: void 0,
                filters: void 0,
                onResultsChange: function e() {},
                runOnInit: !1
            });
            var d = p,
                h = 9,
                m = 13,
                f = 20,
                b = 27,
                v = 37,
                j = 38,
                y = 39,
                O = 40,
                g = 91,
                S = 16,
                k = 17,
                _ = function(e) {
                    function t() {
                        var e, n;
                        Object(a.a)(this, t);
                        for (var o = arguments.length, c = new Array(o), u = 0; u < o; u++) c[u] = arguments[u];
                        return n = Object(r.a)(this, (e = Object(i.a)(t)).call.apply(e, [this].concat(c))), Object(l.a)(Object(s.a)(Object(s.a)(n)), "onChange", function(e, t) {
                            if (n.props.onChange && n.props.onChange(t), (!e || e.keyCode !== m) && n.currentQuery !== t) {
                                if (e) switch (e.keyCode) {
                                    case O:
                                    case j:
                                    case b:
                                    case h:
                                    case f:
                                    case v:
                                    case y:
                                    case g:
                                    case S:
                                    case k:
                                        return
                                }
                                n.updateSearchTimeout && clearTimeout(n.updateSearchTimeout), n.currentQuery = t, n.updateSearchTimeout = setTimeout(function() {
                                    n.props.onQueryChange && n.props.onQueryChange(t)
                                }, n.props.searchDelay)
                            }
                        }), Object(l.a)(Object(s.a)(Object(s.a)(n)), "updateSearchTimeout", void 0), Object(l.a)(Object(s.a)(Object(s.a)(n)), "currentQuery", void 0), n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = {
                                name: this.props.name,
                                value: this.props.value,
                                type: this.props.type,
                                className: this.props.inputComponentClassName,
                                fontSize: this.props.fontSize,
                                lineHeight: this.props.lineHeight,
                                placeholder: this.props.placeholder,
                                onChange: this.onChange,
                                onKeyUp: this.onChange,
                                onCompositionEnd: this.onChange,
                                onInteractionStart: this.props.onInteractionStart,
                                onSelect: this.props.onSelect,
                                onFocus: this.props.onFocus,
                                onBlur: this.props.onBlur,
                                focusOnMount: this.props.focusOnMount,
                                focusOnUpdate: this.props.focusOnUpdate,
                                onRef: this.props.onRef,
                                hideAutoComplete: this.props.hideAutoComplete
                            };
                            return u.createElement(this.props.inputComponentType, t)
                        }
                    }]), t
                }(u.Component);
            Object(l.a)(_, "defaultProps", {
                name: void 0,
                value: void 0,
                type: void 0,
                placeholder: void 0,
                focusOnMount: !1,
                focusOnUpdate: !1,
                hideAutoComplete: !1,
                searchDelay: 250,
                onQueryChange: void 0,
                onInteractionStart: void 0,
                onFocus: void 0,
                onBlur: void 0,
                onRef: void 0,
                onSelect: void 0
            });
            var I = _,
                C = function(e) {
                    function t() {
                        var e, n;
                        Object(a.a)(this, t);
                        for (var o = arguments.length, c = new Array(o), u = 0; u < o; u++) c[u] = arguments[u];
                        return n = Object(r.a)(this, (e = Object(i.a)(t)).call.apply(e, [this].concat(c))), Object(l.a)(Object(s.a)(Object(s.a)(n)), "onChange", function(e, t) {
                            if (n.props.onChange && n.props.onChange(e, t), (!e || e.keyCode !== m) && n.currentQuery !== t) {
                                if (e) switch (e.keyCode) {
                                    case O:
                                    case j:
                                    case b:
                                    case h:
                                    case f:
                                    case v:
                                    case y:
                                    case g:
                                    case S:
                                    case k:
                                        return
                                }
                                n.updateSearchTimeout && clearTimeout(n.updateSearchTimeout), n.currentQuery = t, n.updateSearchTimeout = setTimeout(function() {
                                    n.props.onQueryChange && n.props.onQueryChange(t)
                                }, n.props.searchDelay)
                            }
                        }), Object(l.a)(Object(s.a)(Object(s.a)(n)), "updateSearchTimeout", void 0), Object(l.a)(Object(s.a)(Object(s.a)(n)), "currentQuery", void 0), n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = {
                                id: this.props.id,
                                name: this.props.name,
                                value: this.props.value,
                                className: this.props.inputComponentClassName,
                                rows: this.props.rows,
                                cols: this.props.cols,
                                placeholder: this.props.placeholder,
                                disabled: this.props.disabled,
                                focusOnMount: this.props.focusOnMount,
                                onFocus: this.props.onFocus,
                                onBlur: this.props.onBlur,
                                onChange: this.onChange,
                                onKeyUp: this.onChange,
                                onKeyDown: this.onChange,
                                onCompositionEnd: this.onChange,
                                onInteractionStart: this.props.onInteractionStart,
                                onRef: this.props.onRef,
                                maxLength: this.props.maxLength
                            };
                            return u.createElement(this.props.inputComponentType, t)
                        }
                    }]), t
                }(u.Component);
            Object(l.a)(C, "defaultProps", {
                name: void 0,
                value: void 0,
                placeholder: void 0,
                focusOnMount: !1,
                focusOnUpdate: !1,
                searchDelay: 250,
                onQueryChange: void 0,
                onInteractionStart: void 0,
                onFocus: void 0,
                onBlur: void 0,
                onRef: void 0
            });
            var x = C,
                T = n("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                N = n("./packages/common/tracking/tracking.jsx"),
                E = function e(t, n) {
                    var o = this;
                    Object(a.a)(this, e), Object(l.a)(this, "interactionStart", void 0), Object(l.a)(this, "uiOrigin", void 0), Object(l.a)(this, "searchSessionId", void 0), Object(l.a)(this, "setInteractionStart", function(e) {
                        o.interactionStart = e
                    }), Object(l.a)(this, "createTrackingData", function(e) {
                        var t = e.eventType,
                            n = e.userInteractionType,
                            a = e.selectedItem,
                            r = a && a.query,
                            i = a && a.value,
                            c = a && a.url,
                            s = a && a.resultIdx,
                            l = a && a.type,
                            u = a && a.data_type,
                            p = a && a.totalCount,
                            d = a && a.document_id,
                            h = {
                                action: "RECORD",
                                eventType: t,
                                uiOrigin: o.uiOrigin,
                                global: "true",
                                type: l,
                                value: i,
                                source: o.uiOrigin,
                                startTime: String(o.interactionStart),
                                selDepth: s,
                                isChild: "false",
                                totalNum: p ? String(p) : void 0,
                                userInteractionType: n,
                                scope: "1",
                                query: r,
                                dataType: u,
                                url: c,
                                searchSessionId: o.searchSessionId,
                                documentId: d
                            },
                            m = {};
                        return Object.keys(h).forEach(function(e) {
                            null != h[e] && (m[e] = String(h[e]))
                        }), m
                    }), Object(l.a)(this, "ajaxTrack", function(e) {
                        var t = o.createTrackingData(e);
                        fetch("/TypeAheadJson?".concat(new URLSearchParams(t).toString()), {
                            credentials: "same-origin"
                        })
                    }), Object(l.a)(this, "trackInteractionStart", function() {
                        o.ajaxTrack({
                            eventType: "start",
                            userInteractionType: "start"
                        })
                    }), Object(l.a)(this, "trackSelection", function(e, t) {
                        o.ajaxTrack({
                            eventType: "select",
                            userInteractionType: t,
                            selectedItem: e
                        })
                    }), Object(l.a)(this, "trackEventViaMEVTCookie", function(e, t) {
                        var n = o.createTrackingData({
                            eventType: "search",
                            userInteractionType: t,
                            selectedItem: e
                        });
                        Object(N.addMevtCookie)(Object(T.a)({}, n, {
                            t: "ta"
                        }))
                    }), this.uiOrigin = t, this.searchSessionId = n
                },
                R = "geonavi",
                w = function() {
                    function e(t) {
                        var n = t.geoId,
                            o = t.limit;
                        Object(a.a)(this, e), Object(l.a)(this, "id", R), Object(l.a)(this, "geoId", "1"), Object(l.a)(this, "limit", 26), Object(l.a)(this, "cache", {}), Object(l.a)(this, "results", null), Object(l.a)(this, "stack", []), n && (this.geoId = n), o && (this.limit = o)
                    }
                    return Object(o.a)(e, [{
                        key: "getResults",
                        value: function e() {
                            return this.results
                        }
                    }, {
                        key: "fetch",
                        value: function e(t, n, a) {
                            this.onContextChange(n, a)
                        }
                    }, {
                        key: "onContextChange",
                        value: function e(t, n) {
                            var a = this;
                            if (t && t.geoNaviId) {
                                var o = t.geoNaviId;
                                "1" === o ? this.stack = [] : -1 !== this.stack.indexOf(o) ? this.stack = this.stack.slice(0, this.stack.indexOf(o)) : this.stack.push(this.geoId), this.geoId = o;
                                var r = this.cache[this.geoId];
                                if (r) {
                                    if (r instanceof Promise) return;
                                    return this.results = r, void n()
                                }
                                var i = new URLSearchParams({
                                        action: "GEONAVI",
                                        geoID: this.geoId
                                    }),
                                    c = this.geoId;
                                this.cache[c] = fetch("/TypeAheadJson?".concat(i.toString()), {
                                    method: "GET",
                                    credentials: "same-origin"
                                }).then(function(e) {
                                    if (e.ok) return e;
                                    throw Error(e.statusText)
                                }).then(function(e) {
                                    return e.json()
                                }).then(function(e) {
                                    return e.results.map(function(e, t) {
                                        var n = String(e.id) === c ? a.stack[a.stack.length - 1] : String(e.id),
                                            o = 0 === t && 1 !== parseInt(a.geoId, 10);
                                        return {
                                            name: e.displayName,
                                            geoId: n,
                                            back: o,
                                            forward: !o && !e.isLeaf
                                        }
                                    })
                                }).then(function(e) {
                                    return a.results = e.slice(0, a.limit), a.cache[c] = a.results, n(), a.results
                                }).catch(function() {
                                    return a.results = [], n(), a.results
                                })
                            }
                        }
                    }]), e
                }(),
                M = n("./packages/common/logging/logging.jsx"),
                P = n.n(M),
                F = "recentlyviewed",
                L = function() {
                    function e(t) {
                        var n = t.categories,
                            o = t.limit;
                        Object(a.a)(this, e), Object(l.a)(this, "id", F), Object(l.a)(this, "categories", void 0), Object(l.a)(this, "limit", 10), Object(l.a)(this, "results", null), Object(l.a)(this, "inFlight", !1), n && (this.categories = n), o && (this.limit = o)
                    }
                    return Object(o.a)(e, [{
                        key: "getResults",
                        value: function e() {
                            return this.results
                        }
                    }, {
                        key: "fetch",
                        value: function(e) {
                            function t(t, n, a) {
                                return e.apply(this, arguments)
                            }
                            return t.toString = function() {
                                return e.toString()
                            }, t
                        }(function(e, t, n) {
                            var a = this;
                            if (!this.inFlight && null === this.results) {
                                var o = new URLSearchParams({
                                    limit: String(this.limit)
                                });
                                this.categories && this.categories.forEach(function(e) {
                                    return o.append("categories[]", e)
                                }), this.inFlight = !0, fetch("/data/1.0/recent?".concat(o.toString()), {
                                    method: "GET",
                                    credentials: "same-origin"
                                }).then(function(e) {
                                    if (e.ok) return e;
                                    throw Error(e.statusText)
                                }).then(function(e) {
                                    return e.json()
                                }).then(function(e) {
                                    a.results = e.data.map(function(e) {
                                        return e.result_object
                                    }), a.inFlight = !1, n()
                                }).catch(function(e) {
                                    P.a.error("recentPrefill", e), a.results = [], a.inFlight = !1, n()
                                })
                            }
                        })
                    }]), e
                }(),
                A = "geotheme",
                V = function() {
                    function e(t) {
                        var n = t.theme,
                            o = t.limit;
                        Object(a.a)(this, e), Object(l.a)(this, "id", A), Object(l.a)(this, "theme", 0), Object(l.a)(this, "limit", 10), Object(l.a)(this, "results", null), Object(l.a)(this, "inFlight", !1), n && (this.theme = n), o && (this.limit = o)
                    }
                    return Object(o.a)(e, [{
                        key: "getResults",
                        value: function e() {
                            return this.results
                        }
                    }, {
                        key: "fetch",
                        value: function(e) {
                            function t(t, n, a) {
                                return e.apply(this, arguments)
                            }
                            return t.toString = function() {
                                return e.toString()
                            }, t
                        }(function(e, t, n) {
                            var a = this;
                            if (!this.inFlight && null === this.results) {
                                var o = new URLSearchParams({
                                    geoThemeId: String(this.theme),
                                    limit: String(this.limit)
                                });
                                this.inFlight = !0, fetch("/data/1.0/destinations/bundle?".concat(o.toString()), {
                                    method: "GET",
                                    credentials: "same-origin"
                                }).then(function(e) {
                                    if (e.ok) return e;
                                    throw Error(e.statusText)
                                }).then(function(e) {
                                    return e.json()
                                }).then(function(e) {
                                    a.results = e.geos, a.inFlight = !1, n()
                                }).catch(function(e) {
                                    P.a.error("Could not fetch geo theme typeahead results.", e), a.results = [], a.inFlight = !1, n()
                                })
                            }
                        })
                    }]), e
                }(),
                B = n("@ta/common.string"),
                D = ["act", "air", "al", "ship", "attr", "eat", "geo", "hotel", "nbrhd"],
                G = ["act", "air", "al", "attr", "eat", "geo", "hotel", "nbrhd"],
                z = "typeaheadjson",
                H = function() {
                    function e(t) {
                        Object(a.a)(this, e), Object(l.a)(this, "id", z), Object(l.a)(this, "props", void 0), Object(l.a)(this, "cache", void 0), Object(l.a)(this, "mostRecentTerm", void 0), Object(l.a)(this, "results", null), Object(l.a)(this, "additionalParams", void 0), this.props = t, void 0 === this.props.cache && (this.props.cache = !0), this.props.cache && (this.cache = {})
                    }
                    return Object(o.a)(e, [{
                        key: "setAdditionalParams",
                        value: function e(t) {
                            this.additionalParams = t
                        }
                    }, {
                        key: "getResults",
                        value: function e() {
                            return this.results
                        }
                    }, {
                        key: "fetch",
                        value: function(e) {
                            function t(t, n, a) {
                                return e.apply(this, arguments)
                            }
                            return t.toString = function() {
                                return e.toString()
                            }, t
                        }(function(e, t, n) {
                            var a = this;
                            if (this.mostRecentTerm = e, Object(B.inputLength)(e) < 3) null !== this.results && (this.results = null, n());
                            else if (this.cache && this.cache[e]) {
                                var o = this.cache[e];
                                this.results !== o && (this.results = o, n())
                            } else {
                                var r = {
                                    action: "API",
                                    query: e
                                };
                                Object.keys(this.props).filter(function(e) {
                                    return "cache" !== e
                                }).forEach(function(e) {
                                    var t = a.props[e];
                                    t && (Array.isArray(t) ? r[e] = t.join(",") : r[e] = String(t))
                                }), this.additionalParams && (r = Object(T.a)({}, r, this.additionalParams)), fetch("/TypeAheadJson?".concat(new URLSearchParams(r).toString()), {
                                    method: "GET",
                                    credentials: "same-origin"
                                }).then(function(e) {
                                    if (e.ok) return e;
                                    throw Error(e.statusText)
                                }).then(function(e) {
                                    return e.json()
                                }).then(function(t) {
                                    t && a.cache && (a.cache[e] = t), e === a.mostRecentTerm && (t ? (a.results = t, n()) : a.results = [])
                                }).catch(function() {
                                    a.results = [], n()
                                })
                            }
                        })
                    }]), e
                }(),
                Q = n("./packages/common/classnames/classnames.jsx"),
                J = n.n(Q),
                U = n("@ta/styleguide.icon"),
                Y = {
                    result: "common-typeahead-results-BasicResult__result--1mjnd",
                    subtitle: "common-typeahead-results-BasicResult__subtitle--1dWGg",
                    rescue: "common-typeahead-results-BasicResult__rescue--1yg-h",
                    rescueResult: "common-typeahead-results-BasicResult__rescueResult--1h3jO",
                    active: "common-typeahead-results-BasicResult__active--1wjd4",
                    noPadding: "common-typeahead-results-BasicResult__noPadding--YYQWt",
                    narrow: "common-typeahead-results-BasicResult__narrow--3PmRG",
                    rescueIcon: "common-typeahead-results-BasicResult__rescueIcon--3Ak38",
                    leftIcon: "common-typeahead-results-BasicResult__leftIcon--2V-ru",
                    resultTitle: "common-typeahead-results-BasicResult__resultTitle--1TQbu",
                    rightIcon: "common-typeahead-results-BasicResult__rightIcon--22yLp",
                    verified: "common-typeahead-results-BasicResult__verified--3po-r"
                },
                W = function e(t) {
                    var n = [Y.result];
                    t.active && n.push(Y.active), t.paddingStyle && n.push(Y[t.paddingStyle]), t.isRescue && n.push(Y.rescue);
                    var a = t.subtitle ? u.createElement("span", {
                            className: Y.subtitle
                        }, t.subtitle) : void 0,
                        o = t.iconName ? u.createElement("span", {
                            className: t.isRescue ? Y.rescueIcon : Y.leftIcon
                        }, u.createElement(U.Icon, {
                            name: t.iconName
                        })) : void 0,
                        r = t.chevronName ? u.createElement("span", {
                            className: Y.rightIcon
                        }, u.createElement(U.Icon, {
                            name: t.chevronName
                        })) : void 0,
                        i = t.verifiedIcon ? u.createElement("span", {
                            className: Y.verified
                        }) : void 0;
                    return u.createElement("div", {
                        className: n.join(" ")
                    }, o, u.createElement("span", {
                        className: J()(Y.resultTitle, Object(l.a)({}, Y.rescueResult, t.isRescue))
                    }, t.title, i, a), r)
                };
            W.defaultProps = {
                subtitle: void 0,
                active: void 0,
                iconName: void 0,
                verifiedIcon: !1,
                chevronName: void 0,
                paddingStyle: void 0,
                isRescue: !1
            };
            var q = W,
                K = function e(t) {
                    switch (t) {
                        case "HOTEL":
                            return "hotels";
                        case "EATERY":
                            return "restaurants";
                        case "ATTRACTION":
                            return "attractions";
                        case "UNIVERSITY":
                            return "classes-workshops";
                        case "TRAIN_STATION":
                            return "train";
                        case "AIRPORT":
                            return "flights";
                        case "THEME_PARK":
                            return "amusement-parks";
                        case "ACTIVITY":
                            return "activities";
                        case "SHOPPING":
                            return "shopping-bag-fill";
                        case "PORT":
                            return "ports";
                        case "GENERAL_HOSPITAL":
                            return "hospital";
                        case "FERRY":
                            return "cruises";
                        case "CORPORATION":
                            return "office";
                        case "BRAND":
                        case "NEIGHBORHOOD":
                            return "";
                        case "AIRLINE":
                            return "flights";
                        case "SHIP":
                            return "cruises";
                        case "GEO":
                        default:
                            return "map-pin-fill"
                    }
                },
                X = n("@ta/list.navigable-list"),
                Z = function(e) {
                    function t() {
                        var e, n;
                        Object(a.a)(this, t);
                        for (var o = arguments.length, c = new Array(o), u = 0; u < o; u++) c[u] = arguments[u];
                        return n = Object(r.a)(this, (e = Object(i.a)(t)).call.apply(e, [this].concat(c))), Object(l.a)(Object(s.a)(Object(s.a)(n)), "onSelection", function(e) {
                            if (n.props.onSelection && "function" == typeof n.props.onSelection) {
                                var t = n.props.result,
                                    a = t.geoId,
                                    o = t.back,
                                    r = t.forward,
                                    i = o || r ? "geonavi" : "location_id";
                                n.props.onSelection(e, {
                                    type: i,
                                    value: a
                                })
                            }
                        }), n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t;
                            return this.props.result.back ? t = "single-chevron-left" : this.props.result.forward && (t = "single-chevron-right"), u.createElement(X.NavigableListItem, {
                                onSelection: this.onSelection,
                                onMouseMove: this.props.onMouseMove,
                                active: !!this.props.active
                            }, u.createElement(q, {
                                title: this.props.result.name,
                                chevronName: t,
                                active: !!this.props.active
                            }))
                        }
                    }]), t
                }(u.Component);
            Object(l.a)(Z, "defaultProps", {
                onSelection: void 0,
                onMouseMove: void 0,
                active: !1
            });
            var $ = Z,
                ee = n("./packages/common/i18n/i18n.jsx"),
                te = function e(t) {
                    return u.createElement(X.NavigableListItem, {
                        onSelection: function e(n) {
                            t.onSelection && t.onSelection(n, {
                                type: "nearby"
                            })
                        },
                        onMouseMove: t.onMouseMove,
                        active: t.active
                    }, u.createElement(q, {
                        title: Object(ee.localize)("mx_nearby"),
                        iconName: "nearby-fill",
                        active: t.active
                    }))
                };
            te.defaultProps = {
                onSelection: void 0,
                onMouseMove: void 0,
                active: !1
            };
            var ne = te,
                ae = function e(t) {
                    return u.createElement(X.NavigableListItem, {
                        onSelection: function e(n) {
                            t.onSelection && t.onSelection(n, {
                                type: "worldwide"
                            })
                        },
                        onMouseMove: t.onMouseMove,
                        active: t.active
                    }, u.createElement(q, {
                        title: Object(ee.localize)("dual_search_worldwide"),
                        iconName: "globe-world",
                        active: t.active
                    }))
                };
            ae.defaultProps = {
                onSelection: void 0,
                onMouseMove: void 0,
                active: !1
            };
            var oe = ae,
                re = function e() {
                    return u.createElement("div", {
                        className: "common-typeahead-results-NoResults__no_results--2UlUM"
                    }, Object(ee.localize)("mobile_no_results_found_8e0"))
                };
            re[X.NonNavigableItem] = !0;
            var ie = re,
                ce = function e(t, n, a, o) {
                    var r = [n, a].filter(function(e) {
                        return !!e
                    }).join(", ");
                    return "full_address" === t && o ? "".concat(o, ", ").concat(r) : "parent_geos" === t ? r : ""
                },
                se = function(e) {
                    function t() {
                        var e, n;
                        Object(a.a)(this, t);
                        for (var o = arguments.length, c = new Array(o), u = 0; u < o; u++) c[u] = arguments[u];
                        return n = Object(r.a)(this, (e = Object(i.a)(t)).call.apply(e, [this].concat(c))), Object(l.a)(Object(s.a)(Object(s.a)(n)), "onSelect", function(e) {
                            var t = "click" === e.type ? "click" : "enter";
                            n.props.tracker.trackSelection(n.props.result, t);
                            var a = n.props.result.location_id;
                            n.props.onSelection && n.props.onSelection(e, {
                                type: "recent_location_id",
                                value: a
                            })
                        }), Object(l.a)(Object(s.a)(Object(s.a)(n)), "iconFromCategoryKey", function(e) {
                            switch (e) {
                                case "attraction":
                                    return "attractions";
                                case "hotel":
                                    return "hotels";
                                case "restaurant":
                                    return "restaurants";
                                case "geographic":
                                default:
                                    return "map-pin-fill"
                            }
                        }), n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t, n, a, o = this.props.result,
                                r = o.name,
                                i = o.category,
                                c = o.ancestors,
                                s = void 0 === c ? [] : c,
                                l = ce(this.props.addressDisplay, null === (t = s[0]) || void 0 === t ? void 0 : t.name, null === (n = s[1]) || void 0 === n ? void 0 : n.name, null == o ? void 0 : null === (a = o.address_obj) || void 0 === a ? void 0 : a.street1),
                                p = this.props.includeIcon ? this.iconFromCategoryKey(i && i.key || "") : "";
                            return u.createElement(X.NavigableListItem, {
                                active: !!this.props.active,
                                onMouseMove: this.props.onMouseMove,
                                onSelection: this.onSelect
                            }, u.createElement(q, {
                                title: r,
                                subtitle: l,
                                iconName: p,
                                active: this.props.active,
                                paddingStyle: this.props.paddingStyle
                            }))
                        }
                    }]), t
                }(u.Component);
            Object(l.a)(se, "defaultProps", {
                onSelection: void 0,
                onMouseMove: void 0,
                active: !1,
                includeIcon: !1,
                paddingStyle: void 0,
                addressDisplay: "parent_geos"
            });
            var le = se,
                ue = function(e) {
                    function t() {
                        var e, n;
                        Object(a.a)(this, t);
                        for (var o = arguments.length, c = new Array(o), u = 0; u < o; u++) c[u] = arguments[u];
                        return n = Object(r.a)(this, (e = Object(i.a)(t)).call.apply(e, [this].concat(c))), Object(l.a)(Object(s.a)(Object(s.a)(n)), "onSelect", function(e) {
                            var t = "click" === e.type ? "click" : "enter";
                            n.props.tracker.trackSelection(n.props.result, t);
                            var a = n.props.result.location_id;
                            n.props.onSelection && n.props.onSelection(e, {
                                type: "geo_theme_location_id",
                                value: a
                            })
                        }), n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t, n = this.props.result.name,
                                a = this.props.result.ancestors ? this.props.result.ancestors.length : 0;
                            return a > 1 ? t = "".concat(this.props.result.ancestors[0].name, ", ").concat(this.props.result.ancestors[1].name) : a > 0 && (t = this.props.result.ancestors[0].name), u.createElement(X.NavigableListItem, {
                                active: !!this.props.active,
                                onMouseMove: this.props.onMouseMove,
                                onSelection: this.onSelect
                            }, u.createElement(q, {
                                title: n,
                                subtitle: t,
                                active: this.props.active
                            }))
                        }
                    }]), t
                }(u.Component);
            Object(l.a)(ue, "defaultProps", {
                onSelection: void 0,
                onMouseMove: void 0,
                active: !1
            });
            var pe = ue,
                de = function e(t) {
                    var n = t.title;
                    return u.createElement("div", {
                        className: "common-typeahead-results-SectionTitle__section--3aPog"
                    }, n)
                };
            de[X.NonNavigableItem] = !0;
            var he = de,
                me = function(e) {
                    function t() {
                        var e, n;
                        Object(a.a)(this, t);
                        for (var o = arguments.length, c = new Array(o), u = 0; u < o; u++) c[u] = arguments[u];
                        return n = Object(r.a)(this, (e = Object(i.a)(t)).call.apply(e, [this].concat(c))), Object(l.a)(Object(s.a)(Object(s.a)(n)), "onSelect", function(e) {
                            var t = "click" === e.type ? "click" : "enter";
                            n.props.tracker.trackSelection(n.props.result, t), n.props.tracker.trackEventViaMEVTCookie(n.props.result, t);
                            var a = n.props.result.value;
                            n.props.onSelection && n.props.onSelection(e, {
                                type: "location_id",
                                value: a,
                                displayValue: n.props.result.name,
                                scope: n.props.result.scope
                            })
                        }), n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this.props.result.details || {},
                                n = t.name,
                                a = ce(this.props.addressDisplay, t.parent_name, t.grandparent_name, t.address),
                                o = this.props.includeIcon ? K(this.props.result.type) : "";
                            return u.createElement(X.NavigableListItem, {
                                onSelection: this.onSelect,
                                onMouseMove: this.props.onMouseMove,
                                active: this.props.active
                            }, u.createElement(q, {
                                title: n,
                                subtitle: a,
                                iconName: o,
                                active: this.props.active,
                                paddingStyle: this.props.paddingStyle
                            }))
                        }
                    }]), t
                }(u.Component);
            Object(l.a)(me, "defaultProps", {
                onSelection: void 0,
                onMouseMove: void 0,
                active: !1,
                includeIcon: !1,
                addressDisplay: "parent_geos",
                paddingStyle: void 0
            });
            var fe = me,
                be = function(e) {
                    function t() {
                        var e, n;
                        Object(a.a)(this, t);
                        for (var o = arguments.length, c = new Array(o), u = 0; u < o; u++) c[u] = arguments[u];
                        return n = Object(r.a)(this, (e = Object(i.a)(t)).call.apply(e, [this].concat(c))), Object(l.a)(Object(s.a)(Object(s.a)(n)), "onSelect", function(e) {
                            var t = "click" === e.type ? "click" : "enter";
                            n.props.tracker.trackSelection(n.props.result, t), n.props.tracker.trackEventViaMEVTCookie(n.props.result, t), n.props.onSelection && n.props.onSelection(e, {
                                type: "rescue",
                                value: n.props.result.url
                            })
                        }), n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = "".concat(Object(ee.localize)("typeAheadSearchFor_fffff81b", {
                                0: this.props.result.query
                            }));
                            return u.createElement(X.NavigableListItem, {
                                onSelection: this.onSelect,
                                onMouseMove: this.props.onMouseMove,
                                active: this.props.active
                            }, u.createElement(q, {
                                title: t,
                                active: this.props.active,
                                iconName: "search",
                                isRescue: !0
                            }))
                        }
                    }]), t
                }(u.Component);
            Object(l.a)(be, "defaultProps", {
                onSelection: void 0,
                onMouseMove: void 0,
                active: !1
            });
            var ve = be,
                je = n("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),
                ye = n("@ta/input.text-input"),
                Oe = function(e) {
                    function t() {
                        var e, n;
                        Object(a.a)(this, t);
                        for (var o = arguments.length, c = new Array(o), u = 0; u < o; u++) c[u] = arguments[u];
                        return n = Object(r.a)(this, (e = Object(i.a)(t)).call.apply(e, [this].concat(c))), Object(l.a)(Object(s.a)(Object(s.a)(n)), "onSelection", function(e, t) {
                            t && (n.props.selectionChanged(t), n.updateSearch(""), n.textInput && n.textInput.focus())
                        }), Object(l.a)(Object(s.a)(Object(s.a)(n)), "tracker", new E("", "")), Object(l.a)(Object(s.a)(Object(s.a)(n)), "textInput", void 0), Object(l.a)(Object(s.a)(Object(s.a)(n)), "updateSearch", void 0), n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this,
                                n = this.props.placeHolder || Object(ee.localize)("common_Search");
                            return u.createElement(d, {
                                fetchers: this.props.fetchers
                            }, function(e, a) {
                                t.updateSearch = a;
                                var o = e && Object.keys(e).filter(function(t) {
                                    return ! function e(t) {
                                        return !t || 0 === t.length
                                    }(e[t])
                                }).length > 0 ? e : null;
                                return u.createElement("div", null, u.createElement("span", {
                                    className: J()("ui_icon", t.props.iconType, "common-typeahead-location-Selector__textInput--5C4DU")
                                }, u.createElement(I, {
                                    inputComponentType: ye.ManagedTextInput,
                                    inputComponentClassName: J()("ui_input_text", "common-typeahead-location-Selector__socialInput--2Zgrm", t.props.className),
                                    value: t.props.typeaheadTextInputValue,
                                    type: t.props.inputType,
                                    onChange: function e(n) {
                                        return t.props.textInputChanged(n)
                                    },
                                    onQueryChange: function e(t) {
                                        a(t)
                                    },
                                    onFocus: t.props.onFocus,
                                    onBlur: t.props.onBlur,
                                    searchDelay: 50,
                                    placeholder: n,
                                    onRef: function e(n) {
                                        t.textInput = n
                                    }
                                }), o && u.createElement("div", {
                                    className: "common-typeahead-location-Selector__results--3df4J"
                                }, t.props.children(e, t.tracker, t.onSelection))))
                            })
                        }
                    }]), t
                }(u.Component);
            Object(l.a)(Oe, "defaultProps", {
                placeHolder: null,
                className: void 0,
                inputType: void 0,
                iconType: "search",
                onFocus: void 0,
                onBlur: void 0
            });
            var ge = Oe,
                Se = function(e) {
                    function t() {
                        var e, n;
                        Object(a.a)(this, t);
                        for (var o = arguments.length, c = new Array(o), u = 0; u < o; u++) c[u] = arguments[u];
                        return n = Object(r.a)(this, (e = Object(i.a)(t)).call.apply(e, [this].concat(c))), Object(l.a)(Object(s.a)(Object(s.a)(n)), "state", {
                            textInputValue: n.props.selectedLocation.displayValue || ""
                        }), Object(l.a)(Object(s.a)(Object(s.a)(n)), "onResultSelected", function(e) {
                            n.props.selectionChanged(e), n.setState({
                                textInputValue: n.props.clearValueOnSelection ? "" : e.displayValue || ""
                            })
                        }), Object(l.a)(Object(s.a)(Object(s.a)(n)), "typeaheadJsonFetcher", new H({
                            interleaved: !0,
                            types: n.props.locationTypes,
                            name_depth: 1,
                            details: !0,
                            legacy_format: !0,
                            urlList: !1,
                            max: 8,
                            scoreThreshold: .8
                        })), Object(l.a)(Object(s.a)(Object(s.a)(n)), "textInputChanged", function(e) {
                            n.setState({
                                textInputValue: e
                            })
                        }), n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function e() {
                            return u.createElement(ge, {
                                fetchers: [this.typeaheadJsonFetcher],
                                typeaheadTextInputValue: this.state.textInputValue,
                                selectionChanged: this.onResultSelected,
                                textInputChanged: this.textInputChanged,
                                className: this.props.className,
                                onFocus: this.props.onFocus,
                                onBlur: this.props.onBlur,
                                placeHolder: this.props.placeHolder
                            }, function(e, t, n) {
                                return u.createElement(X.NavigableList, null, Object(je.a)(e.typeaheadjson || []).map(function(e) {
                                    return function(a, o) {
                                        return u.createElement(fe, {
                                            result: e,
                                            tracker: t,
                                            onMouseMove: o,
                                            onSelection: n,
                                            active: a,
                                            key: "result=".concat(e.value),
                                            includeIcon: !0
                                        })
                                    }
                                }))
                            })
                        }
                    }]), t
                }(u.Component);
            Object(l.a)(Se, "defaultProps", {
                locationTypes: G,
                className: void 0,
                onFocus: void 0,
                onBlur: void 0,
                placeHolder: void 0,
                clearValueOnSelection: !1
            });
            var ke = Se,
                _e = n("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),
                Ie = n("./packages/common/features/features.jsx"),
                Ce = n("./node_modules/react-apollo/react-apollo.browser.umd.js"),
                xe = n("@ta/media.image"),
                Te = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "LocationDetails"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "locationIds"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Int"
                                            }
                                        }
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
                                    value: "locations"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "locationIds"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "locationIds"
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
                                            value: "locationId"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "placeType"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "name"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "thumbnail"
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
                                                    value: "photoSizes"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "url"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "width"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "height"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isHorizontal"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "parent"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "locationId"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "additionalNames"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "long"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "additionalNames"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "long"
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
                        end: 372
                    }
                };
            Te.loc.source = {
                body: "f26d8cc49abb"
            };
            var Ne = Te,
                Ee = function e(t) {
                    var n = t.selectedLocations,
                        a = t.onClose;
                    return u.createElement(Ce.Query, {
                        errorPolicy: "all",
                        query: Ne,
                        variables: {
                            locationIds: Array.from(n.keys()).map(function(e) {
                                return parseInt(e, 10)
                            })
                        }
                    }, function(e) {
                        var t = e.loading,
                            n = e.data;
                        return !t && n && n.locations && n.locations[0] ? u.createElement(u.Fragment, null, n.locations.map(function(e) {
                            return function e(t) {
                                var n, o, r, i, c, s;
                                switch (o = "CITY" === (null == t ? void 0 : t.placeType) ? null == t ? void 0 : null === (r = t.additionalNames) || void 0 === r ? void 0 : r.longOnlyParent : null == t ? void 0 : null === (i = t.parent) || void 0 === i ? void 0 : null === (c = i.additionalNames) || void 0 === c ? void 0 : c.long, null == t ? void 0 : t.placeType) {
                                    case "ACCOMMODATION":
                                        s = "hotels";
                                        break;
                                    case "ATTRACTION":
                                        s = "attractions";
                                        break;
                                    case "ACTIVITY":
                                        s = "activities";
                                        break;
                                    case "CITY":
                                        s = "globe-world";
                                        break;
                                    case "EATERY":
                                        s = "restaurants";
                                        break;
                                    default:
                                        s = ""
                                }
                                return u.createElement("div", {
                                    key: "poi_tag_".concat(null == t ? void 0 : t.locationId),
                                    className: "".concat("common-typeahead-location-POIObjectList__poi_block--1iFBx", " ").concat("common-typeahead-location-POIObjectList__relative_container--L6oNS")
                                }, u.createElement("div", {
                                    className: "common-typeahead-location-POIObjectList__poi_thumbnail--1qDET"
                                }, (null == t ? void 0 : t.thumbnail) ? u.createElement(xe.ResponsiveImage, {
                                    sources: null == t ? void 0 : null === (n = t.thumbnail) || void 0 === n ? void 0 : n.photoSizes,
                                    width: "60px",
                                    height: "60px",
                                    notLazy: !1,
                                    borderRadius: "2px"
                                }) : u.createElement("div", {
                                    style: {
                                        width: "60px",
                                        height: "60px"
                                    }
                                }, u.createElement("div", {
                                    className: "common-typeahead-location-POIObjectList__no_photo_available--3MpR8"
                                }, u.createElement(U.Icon, {
                                    name: s,
                                    className: "common-typeahead-location-POIObjectList__icon--1793k"
                                })))), u.createElement("div", {
                                    className: "common-typeahead-location-POIObjectList__poi_info_vertical_center--3op-7"
                                }, u.createElement("div", {
                                    className: "common-typeahead-location-POIObjectList__poi_info--37Kva"
                                }, u.createElement("div", {
                                    className: "common-typeahead-location-POIObjectList__poi_name--FlhXE"
                                }, null == t ? void 0 : t.name), u.createElement("div", {
                                    className: "common-typeahead-location-POIObjectList__poi_location--3DY8C"
                                }, o))), a && (null == t ? void 0 : t.locationId) ? u.createElement("div", {
                                    className: "ui_icon times ".concat("common-typeahead-location-POIObjectList__trashIcon--2GksF"),
                                    onClick: function e() {
                                        return a(t.locationId.toString())
                                    }
                                }) : null)
                            }(e)
                        })) : null
                    })
                };
            Ee.defaultProps = {
                onClose: void 0
            };
            var Re = Ee,
                we = function(e) {
                    function t() {
                        var e, n;
                        Object(a.a)(this, t);
                        for (var o = arguments.length, c = new Array(o), u = 0; u < o; u++) c[u] = arguments[u];
                        return n = Object(r.a)(this, (e = Object(i.a)(t)).call.apply(e, [this].concat(c))), Object(l.a)(Object(s.a)(Object(s.a)(n)), "state", {
                            textInputValue: "",
                            focused: !1,
                            hasResults: !1
                        }), Object(l.a)(Object(s.a)(Object(s.a)(n)), "onSelection", function(e, t) {
                            if (t && "location_id" === t.type && t.value) {
                                var a = String(t.value),
                                    o = new Map(n.props.selectedLocations);
                                if (!o.has(a)) {
                                    if (o.set(a, t), n.props.maxLocations > 0 && o.size > n.props.maxLocations) {
                                        var r = Array.from(o.keys())[0];
                                        o.delete(r)
                                    }
                                    n.props.selectionChanged(o)
                                }
                                n.setState({
                                    textInputValue: ""
                                }), n.updateSearch(""), n.textInput && n.textInput.focus()
                            }
                        }), Object(l.a)(Object(s.a)(Object(s.a)(n)), "handleResultChange", function(e) {
                            var t = e && e.typeaheadjson && e.typeaheadjson.length > 0;
                            t && !n.state.hasResults ? (n.props.hasResultsChanged && n.props.hasResultsChanged(!0), n.setState({
                                hasResults: !0
                            })) : !t && n.state.hasResults && (n.props.hasResultsChanged && n.props.hasResultsChanged(!1), n.setState({
                                hasResults: !1
                            }))
                        }), Object(l.a)(Object(s.a)(Object(s.a)(n)), "handleItemRemoveClick", function(e) {
                            var t = new Map(n.props.selectedLocations);
                            t.delete(e), n.props.selectionChanged(t)
                        }), Object(l.a)(Object(s.a)(Object(s.a)(n)), "typeaheadJsonFetcher", new H({
                            interleaved: !0,
                            types: Object(Ie.featureIsEnabled)("cruise_war") ? D : G,
                            name_depth: 1,
                            details: !0,
                            legacy_format: !0,
                            urlList: !1,
                            max: 8,
                            scoreThreshold: .8
                        })), Object(l.a)(Object(s.a)(Object(s.a)(n)), "tracker", new E("", "")), Object(l.a)(Object(s.a)(Object(s.a)(n)), "textInput", void 0), Object(l.a)(Object(s.a)(Object(s.a)(n)), "updateSearch", void 0), n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = this;
                            return u.createElement(d, {
                                fetchers: [this.typeaheadJsonFetcher],
                                onResultsChange: this.handleResultChange
                            }, function(e, n) {
                                return t.updateSearch = n, u.createElement("div", {
                                    className: "".concat("common-typeahead-location-MultiLocationSelector__wrapper--aeYj9", " ").concat(t.props.className ? t.props.className : "")
                                }, u.createElement("div", {
                                    className: "".concat("common-typeahead-location-MultiLocationSelector__inputContainer--3y7N4", " ").concat(t.state.focused ? "common-typeahead-location-MultiLocationSelector__inputFocused--xvPlx" : ""),
                                    onClick: function e() {
                                        return t.textInput && t.textInput.focus()
                                    }
                                }, u.createElement("span", {
                                    className: "ui_icon search ".concat("common-typeahead-location-MultiLocationSelector__searchIcon--2bJmn")
                                }), u.createElement(I, {
                                    inputComponentType: ye.ManagedTextInput,
                                    inputComponentClassName: "common-typeahead-location-MultiLocationSelector__textInput--30bwX",
                                    value: t.state.textInputValue,
                                    onChange: function e(n) {
                                        return t.setState({
                                            textInputValue: n
                                        })
                                    },
                                    onQueryChange: function e(t) {
                                        n(t)
                                    },
                                    onFocus: function e(n) {
                                        t.setState({
                                            focused: !0
                                        }), t.props.onFocus && t.props.onFocus(n)
                                    },
                                    onBlur: function e(n) {
                                        t.setState({
                                            focused: !1
                                        }), t.props.onBlur && t.props.onBlur(n)
                                    },
                                    searchDelay: 50,
                                    placeholder: 0 === t.props.selectedLocations.size || t.props.selectedLocations.size === t.props.maxLocations ? Object(ee.localize)("post_video_typeahead_placeholder_text_search") : Object(ee.localize)("post_video_location_typeahead_add_location"),
                                    onRef: function e(n) {
                                        t.textInput = n
                                    }
                                })), e && e.typeaheadjson && e.typeaheadjson.length > 0 ? u.createElement("div", {
                                    className: "common-typeahead-location-MultiLocationSelector__results--1sW6j"
                                }, u.createElement(X.NavigableList, null, e && e.typeaheadjson ? e.typeaheadjson.map(function(e) {
                                    return function(n, a) {
                                        return u.createElement(fe, {
                                            result: e,
                                            tracker: t.tracker,
                                            onMouseMove: a,
                                            onSelection: t.onSelection,
                                            active: n,
                                            key: "result=".concat(e.value),
                                            includeIcon: !0
                                        })
                                    }
                                }) : [])) : null, t.props.showLocationsAsPoiObjects ? u.createElement(Re, {
                                    selectedLocations: t.props.selectedLocations,
                                    onClose: t.handleItemRemoveClick
                                }) : Array.from(t.props.selectedLocations.entries()).map(function(e) {
                                    var n = Object(_e.a)(e, 2),
                                        a = n[0],
                                        o = n[1];
                                    return u.createElement("div", {
                                        className: "ui_tag_box ui_icon times ".concat("common-typeahead-location-MultiLocationSelector__selectedItem--pRT_v"),
                                        key: a,
                                        onClick: function e() {
                                            return t.handleItemRemoveClick(a)
                                        }
                                    }, o.displayValue)
                                }))
                            })
                        }
                    }]), t
                }(u.Component);
            Object(l.a)(we, "defaultProps", {
                hasResultsChanged: null,
                maxLocations: 0,
                className: void 0,
                onFocus: void 0,
                onBlur: void 0,
                showLocationsAsPoiObjects: !0
            });
            var Me = we,
                Pe = "worldwide",
                Fe = function() {
                    function e() {
                        Object(a.a)(this, e), Object(l.a)(this, "id", Pe), Object(l.a)(this, "results", null), Object(l.a)(this, "name", Object(ee.localize)("dual_search_worldwide"))
                    }
                    return Object(o.a)(e, [{
                        key: "getResults",
                        value: function e() {
                            return this.results
                        }
                    }, {
                        key: "fetch",
                        value: function e(t, n, a) {
                            this.results = t.length < 3 || this.name.toLowerCase().indexOf(t.toLowerCase()) < 0 ? null : [{
                                type: "GEO",
                                value: "1",
                                displayValue: this.name,
                                details: {
                                    name: this.name
                                }
                            }], a()
                        }
                    }]), e
                }(),
                Le = function(e) {
                    function t() {
                        var e, n;
                        Object(a.a)(this, t);
                        for (var o = arguments.length, c = new Array(o), u = 0; u < o; u++) c[u] = arguments[u];
                        return n = Object(r.a)(this, (e = Object(i.a)(t)).call.apply(e, [this].concat(c))), Object(l.a)(Object(s.a)(Object(s.a)(n)), "state", {
                            textInputValue: n.props.selectedLocation.displayValue || ""
                        }), Object(l.a)(Object(s.a)(Object(s.a)(n)), "onResultSelected", function(e) {
                            n.props.selectionChanged(e), n.setState({
                                textInputValue: e.displayValue || ""
                            })
                        }), Object(l.a)(Object(s.a)(Object(s.a)(n)), "typeaheadJsonFetcher", new H({
                            interleaved: !0,
                            types: ["geo"],
                            filter: "cities" === n.props.mode ? ["nobroad"] : void 0,
                            name_depth: 1,
                            details: !0,
                            legacy_format: !0,
                            urlList: !1,
                            max: 8
                        })), Object(l.a)(Object(s.a)(Object(s.a)(n)), "textInputChanged", function(e) {
                            "" === e && n.props.selectionCleared && n.props.selectionCleared(), n.setState({
                                textInputValue: e
                            })
                        }), n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function e() {
                            var t = [this.typeaheadJsonFetcher];
                            return this.props.includeWorld && t.unshift(new Fe), u.createElement(ge, {
                                fetchers: t,
                                typeaheadTextInputValue: this.state.textInputValue,
                                selectionChanged: this.onResultSelected,
                                textInputChanged: this.textInputChanged
                            }, function(e, t, n) {
                                return u.createElement(X.NavigableList, null, [].concat(Object(je.a)(e.worldwide || []), Object(je.a)(e.typeaheadjson || [])).map(function(e) {
                                    return function(a, o) {
                                        return u.createElement(fe, {
                                            result: e,
                                            tracker: t,
                                            onMouseMove: o,
                                            onSelection: n,
                                            active: a,
                                            key: "result=".concat(e.value),
                                            includeIcon: !0
                                        })
                                    }
                                }))
                            })
                        }
                    }]), t
                }(u.Component);
            Object(l.a)(Le, "defaultProps", {
                mode: "all",
                includeWorld: !0,
                selectionCleared: function e() {}
            });
            var Ae = Le,
                Ve = function(e) {
                    function t() {
                        var e, n;
                        Object(a.a)(this, t);
                        for (var o = arguments.length, c = new Array(o), u = 0; u < o; u++) c[u] = arguments[u];
                        return n = Object(r.a)(this, (e = Object(i.a)(t)).call.apply(e, [this].concat(c))), Object(l.a)(Object(s.a)(Object(s.a)(n)), "state", {
                            textInputValue: ""
                        }), Object(l.a)(Object(s.a)(Object(s.a)(n)), "onResultSelected", function(e) {
                            n.props.selectionChanged(e), n.setState({
                                textInputValue: e.displayValue || ""
                            })
                        }), Object(l.a)(Object(s.a)(Object(s.a)(n)), "typeaheadJsonFetcher", new H({
                            interleaved: !0,
                            types: ["hotel", "attr", "eat"],
                            filter: ["nobroad"],
                            name_depth: 1,
                            details: !0,
                            legacy_format: !0,
                            urlList: !1,
                            max: 8
                        })), Object(l.a)(Object(s.a)(Object(s.a)(n)), "textInputChanged", function(e) {
                            n.setState({
                                textInputValue: e
                            })
                        }), n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function e() {
                            return u.createElement(ge, {
                                fetchers: [this.typeaheadJsonFetcher],
                                typeaheadTextInputValue: this.state.textInputValue,
                                selectionChanged: this.onResultSelected,
                                textInputChanged: this.textInputChanged,
                                placeHolder: this.props.placeholderText
                            }, function(e, t, n) {
                                return u.createElement(X.NavigableList, null, Object(je.a)(e.typeaheadjson || []).map(function(e) {
                                    return function(a, o) {
                                        return u.createElement(fe, {
                                            result: e,
                                            tracker: t,
                                            onMouseMove: o,
                                            onSelection: n,
                                            active: a,
                                            key: "result=".concat(e.value),
                                            includeIcon: !0
                                        })
                                    }
                                }))
                            })
                        }
                    }]), t
                }(u.Component);
            n.d(t, "Typeahead", function() {
                return d
            }), n.d(t, "TypeaheadTextInput", function() {
                return I
            }), n.d(t, "TypeaheadTextArea", function() {
                return x
            }), n.d(t, "TypeaheadTracking", function() {
                return E
            }), n.d(t, "GeoNaviFetcher", function() {
                return w
            }), n.d(t, "GeoNaviFetcherId", function() {
                return R
            }), n.d(t, "RecentlyViewedFetcher", function() {
                return L
            }), n.d(t, "RecentlyViewedFetcherId", function() {
                return F
            }), n.d(t, "GeoThemeFetcher", function() {
                return V
            }), n.d(t, "GeoThemeFetcherId", function() {
                return A
            }), n.d(t, "TypeaheadJsonFetcher", function() {
                return H
            }), n.d(t, "TypeaheadJsonFetcherId", function() {
                return z
            }), n.d(t, "BasicResult", function() {
                return q
            }), n.d(t, "getIconFromResultType", function() {
                return K
            }), n.d(t, "GeoNaviResult", function() {
                return $
            }), n.d(t, "GoNearbyResult", function() {
                return ne
            }), n.d(t, "GoWorldwideResult", function() {
                return oe
            }), n.d(t, "NoResults", function() {
                return ie
            }), n.d(t, "RecentlyViewedResult", function() {
                return le
            }), n.d(t, "GeoThemeResult", function() {
                return pe
            }), n.d(t, "SectionTitle", function() {
                return he
            }), n.d(t, "TypeaheadJsonResult", function() {
                return fe
            }), n.d(t, "RescueResult", function() {
                return ve
            }), n.d(t, "LocationSelector", function() {
                return ke
            }), n.d(t, "MultiLocationSelector", function() {
                return Me
            }), n.d(t, "GeoSelector", function() {
                return Ae
            }), n.d(t, "POISelector", function() {
                return Ve
            }), n.d(t, "Selector", function() {
                return ge
            }), n.d(t, "WorldwideFetcher", function() {
                return Fe
            }), n.d(t, "POIObjectList", function() {
                return Re
            })
        },
        "@ta/common.string": function(t, n) {
            t.exports = e
        },
        "@ta/input.text-input": function(e, n) {
            e.exports = t
        },
        "@ta/list.navigable-list": function(e, t) {
            e.exports = n
        },
        "@ta/media.image": function(e, t) {
            e.exports = a
        },
        "@ta/styleguide.icon": function(e, t) {
            e.exports = o
        },
        "dll-reference @ta/common.global": function(e, t) {
            e.exports = r
        }
    })
});
//# sourceMappingURL=common.typeahead.3ccbd3b083.js.map