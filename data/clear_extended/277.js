define("@ta/input.drop-zone", ["@ta/common.global"], function(e) {
    return function(e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
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
                for (var o in e) n.d(r, o, function(t) {
                    return e[t]
                }.bind(null, o));
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
        }, n.p = "", n(n.s = "./packages/input/drop-zone/index.jsx")
    }({
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

            function o(e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), e
            }
            n.d(t, "a", function() {
                return o
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
        "./node_modules/@babel/runtime/helpers/esm/extends.js": function(e, t, n) {
            "use strict";

            function r() {
                return (r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
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
                return o
            });
            var r = n("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function o(e, t) {
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
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                o = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function i(e, t) {
                return !t || "object" !== Object(r.a)(t) && "function" != typeof t ? Object(o.a)(e) : t
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
        "./node_modules/@babel/runtime/helpers/esm/typeof.js": function(e, t, n) {
            "use strict";

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(t) {
                    return typeof t
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(e)
            }

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function e(t) {
                    return r(t)
                } : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : r(t)
                })(e)
            }
            n.d(t, "a", function() {
                return o
            })
        },
        "./node_modules/react/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/input/drop-zone/index.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                o = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                s = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                a = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                u = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                f = n("./node_modules/react/index.js"),
                p = {
                    dropZone: "input-drop-zone-DropZone__dropZone--2XjBc",
                    isDragOver: "input-drop-zone-DropZone__isDragOver--2tkzq"
                },
                d = function e(t) {
                    var n = t.lastIndexOf(".");
                    if (!(n < 0)) return t.substring(n).toLowerCase()
                },
                b = function e(t, n, r, o, i, s) {
                    var a = function e(t, n, r) {
                        if (r && t.size > r) return "file_too_large";
                        if (n) {
                            var o = d(t.name);
                            if (!o) return "wrong_file_type";
                            if (!n.includes(o)) return "wrong_file_type"
                        }
                    }(t, r, o);
                    a ? i && i(t, a) : n(t, s)
                },
                m = function e(t, n, r, o, i) {
                    if (t.dataTransfer.items)
                        for (var s = 0; s < t.dataTransfer.items.length; s++) {
                            var a = t.dataTransfer.items[s].getAsFile();
                            b(a, n, r, o, i, "drag_drop")
                        } else
                            for (var u = 0; u < t.dataTransfer.files.length; u++) {
                                var l = t.dataTransfer.files[u];
                                b(l, n, r, o, i, "drag_drop")
                            }
                },
                j = function(e) {
                    function t(e) {
                        var n;
                        return Object(o.a)(this, t), n = Object(s.a)(this, Object(a.a)(t).call(this, e)), Object(c.a)(Object(l.a)(Object(l.a)(n)), "fileInputRef", void 0), Object(c.a)(Object(l.a)(Object(l.a)(n)), "eventPreventDefault", function(e) {
                            e.preventDefault()
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "handleDragOver", function(e) {
                            e.preventDefault(), n.setState({
                                isDragOver: !0
                            })
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "handleDragLeave", function(e) {
                            e.preventDefault(), n.setState({
                                isDragOver: !1
                            })
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "handleDrop", function(e) {
                            e.preventDefault(), m(e, n.props.addFile, n.props.allowedFileTypes, n.props.maxSizeInBytes, n.props.fileRejected), n.setState({
                                isDragOver: !1
                            })
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "fileSelectionChanged", function(e) {
                            var t = e.target.files;
                            Array.from(t).forEach(function(e) {
                                return b(e, n.props.addFile, n.props.allowedFileTypes, n.props.maxSizeInBytes, n.props.fileRejected, "file_picker")
                            }), n.fileInputRef.value = ""
                        }), Object(c.a)(Object(l.a)(Object(l.a)(n)), "render", function() {
                            var e = n.props.allowMultipleSelection ? {
                                multiple: !0
                            } : {};
                            return f.createElement("div", {
                                style: {
                                    width: n.props.width,
                                    height: n.props.height
                                },
                                className: "".concat(p.dropZone, " ").concat(n.props.isDragOverOutsideComponent || n.state.isDragOver ? p.isDragOver : ""),
                                onDragOver: n.handleDragOver,
                                onDragLeave: n.handleDragLeave,
                                onDrop: n.handleDrop,
                                onClick: function e() {
                                    return n.fileInputRef.click()
                                }
                            }, f.createElement("input", Object(r.a)({
                                style: {
                                    display: "none"
                                },
                                type: "file",
                                name: "media",
                                accept: n.props.allowedFileTypes.join(",")
                            }, e, {
                                onChange: n.fileSelectionChanged,
                                ref: function e(t) {
                                    n.fileInputRef = t
                                }
                            })), n.props.children)
                        }), n.state = {
                            isDragOver: !1
                        }, n
                    }
                    return Object(u.a)(t, e), Object(i.a)(t, [{
                        key: "componentDidMount",
                        value: function e() {
                            this.props.disableOnDropForPage && (window.addEventListener("dragover", this.eventPreventDefault), window.addEventListener("drop", this.eventPreventDefault))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function e() {
                            this.props.disableOnDropForPage && (window.removeEventListener("dragover", this.eventPreventDefault), window.removeEventListener("drop", this.eventPreventDefault))
                        }
                    }]), t
                }(f.Component);
            Object(c.a)(j, "defaultProps", {
                allowedFileTypes: ["*"],
                allowMultipleSelection: !0,
                disableOnDropForPage: !0,
                isDragOverOutsideComponent: !1,
                width: "100%",
                height: "100%"
            }), n.d(t, "DropZone", function() {
                return j
            }), n.d(t, "fileExtentsion", function() {
                return d
            }), n.d(t, "processFile", function() {
                return b
            }), n.d(t, "processFilesFromDrop", function() {
                return m
            }), n.d(t, "maxImageUploadSizeInMB", function() {
                return 15
            }), n.d(t, "maxImageUploadSizeInBytes", function() {
                return 15728640
            }), n.d(t, "maxVideoUploadSizeInBytes", function() {
                return 524288e3
            })
        },
        "dll-reference @ta/common.global": function(t, n) {
            t.exports = e
        }
    })
});
//# sourceMappingURL=input.drop-zone.531daa5272.js.map