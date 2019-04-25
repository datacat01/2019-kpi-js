define("@ta/social.common-popover", ["@ta/overlays.popover", "@ta/styleguide.button", "@ta/common.global"], function(e, o, n) {
    return function(e) {
        var o = {};

        function n(t) {
            if (o[t]) return o[t].exports;
            var r = o[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(r.exports, r, r.exports, n), r.l = !0, r.exports
        }
        return n.m = e, n.c = o, n.d = function(e, o, t) {
            n.o(e, o) || Object.defineProperty(e, o, {
                enumerable: !0,
                get: t
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(e, o) {
            if (1 & o && (e = n(e)), 8 & o) return e;
            if (4 & o && "object" == typeof e && e && e.__esModule) return e;
            var t = Object.create(null);
            if (n.r(t), Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & o && "string" != typeof e)
                for (var r in e) n.d(t, r, function(o) {
                    return e[o]
                }.bind(null, r));
            return t
        }, n.n = function(e) {
            var o = e && e.__esModule ? function o() {
                return e.default
            } : function o() {
                return e
            };
            return n.d(o, "a", o), o
        }, n.o = function(e, o) {
            return Object.prototype.hasOwnProperty.call(e, o)
        }, n.p = "", n(n.s = "./packages/social/common-popover/common-popover.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/extends.js": function(e, o, n) {
            "use strict";

            function t() {
                return (t = Object.assign || function(e) {
                    for (var o = 1; o < arguments.length; o++) {
                        var n = arguments[o];
                        for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
                    }
                    return e
                }).apply(this, arguments)
            }
            n.d(o, "a", function() {
                return t
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js": function(e, o, n) {
            "use strict";

            function t(e, o) {
                if (null == e) return {};
                var n, t, r = function i(e, o) {
                    if (null == e) return {};
                    var n, t, r = {},
                        i = Object.keys(e);
                    for (t = 0; t < i.length; t++) n = i[t], o.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, o);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (t = 0; t < a.length; t++) n = a[t], o.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }
            n.d(o, "a", function() {
                return t
            })
        },
        "./node_modules/react/index.js": function(e, o, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/social/common-popover/common-popover.jsx": function(e, o, n) {
            "use strict";
            n.r(o);
            var t = n("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                r = n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),
                i = n("./node_modules/react/index.js"),
                a = n("@ta/overlays.popover"),
                c = n.n(a),
                l = n("@ta/styleguide.button"),
                u = n.n(l),
                s = function e(o, n) {
                    return function(e) {
                        n && n(e), o()
                    }
                },
                p = function e(o) {
                    return "function" == typeof o ? o() : o
                },
                m = function e(o) {
                    var n = o.header,
                        a = o.description,
                        l = o.cancel,
                        m = o.confirm,
                        f = o.onConfirm,
                        d = o.onCancel,
                        v = Object(r.a)(o, ["header", "description", "cancel", "confirm", "onConfirm", "onCancel"]);
                    return i.createElement(c.a, Object(t.a)({}, v, {
                        contents: function e(o) {
                            return i.createElement("div", {
                                className: "social-common-popover-ConfirmationPopover__container--3_tZ7"
                            }, i.createElement("div", {
                                className: "social-common-popover-ConfirmationPopover__header--3imX9"
                            }, p(n)), i.createElement("div", {
                                className: "social-common-popover-ConfirmationPopover__text--3nl8v"
                            }, p(a)), i.createElement("div", {
                                className: "social-common-popover-ConfirmationPopover__social_button_wrapper--1P4Dl"
                            }, i.createElement("span", {
                                className: "social-common-popover-ConfirmationPopover__secondary_wrap--2CM0O"
                            }, i.createElement(u.a, {
                                type: "secondary",
                                onClick: s(o, d),
                                size: "fullwidth"
                            }, p(l))), i.createElement("span", {
                                className: "social-common-popover-ConfirmationPopover__primary_wrap--2UbKu"
                            }, i.createElement(u.a, {
                                type: "primary",
                                onClick: s(o, f),
                                size: "fullwidth"
                            }, p(m)))))
                        },
                        arrowType: "none",
                        local: !0,
                        closeButton: !1
                    }))
                };
            m.defaultProps = {
                above: void 0,
                below: void 0,
                rightOf: void 0,
                leftOf: void 0,
                alignEdge: void 0,
                shiftX: 0,
                shiftY: 0,
                shiftArrow: 0,
                fixed: !1,
                onCancel: null,
                onConfirm: null
            };
            var f = m;
            n.d(o, "ConfirmationPopover", function() {
                return f
            })
        },
        "@ta/overlays.popover": function(o, n) {
            o.exports = e
        },
        "@ta/styleguide.button": function(e, n) {
            e.exports = o
        },
        "dll-reference @ta/common.global": function(e, o) {
            e.exports = n
        }
    })
});
//# sourceMappingURL=social.common-popover.ac0f626406.js.map