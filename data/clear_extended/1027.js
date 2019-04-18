define("@ta/social.cover-photo", ["@ta/media.image", "@ta/overlays.managers", "@ta/styleguide.icon", "@ta/tracking.interactions", "@ta/common.global"], function(e, o, t, n, r) {
    return function(e) {
        var o = {};

        function t(n) {
            if (o[n]) return o[n].exports;
            var r = o[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports
        }
        return t.m = e, t.c = o, t.d = function(e, o, n) {
            t.o(e, o) || Object.defineProperty(e, o, {
                enumerable: !0,
                get: n
            })
        }, t.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, t.t = function(e, o) {
            if (1 & o && (e = t(e)), 8 & o) return e;
            if (4 & o && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (t.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & o && "string" != typeof e)
                for (var r in e) t.d(n, r, function(o) {
                    return e[o]
                }.bind(null, r));
            return n
        }, t.n = function(e) {
            var o = e && e.__esModule ? function o() {
                return e.default
            } : function o() {
                return e
            };
            return t.d(o, "a", o), o
        }, t.o = function(e, o) {
            return Object.prototype.hasOwnProperty.call(e, o)
        }, t.p = "", t(t.s = "./packages/social/cover-photo/cover-photo.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js": function(e, o, t) {
            "use strict";

            function n(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            t.d(o, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js": function(e, o, t) {
            "use strict";

            function n(e, o) {
                if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function")
            }
            t.d(o, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/createClass.js": function(e, o, t) {
            "use strict";

            function n(e, o) {
                for (var t = 0; t < o.length; t++) {
                    var n = o[t];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function r(e, o, t) {
                return o && n(e.prototype, o), t && n(e, t), e
            }
            t.d(o, "a", function() {
                return r
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, o, t) {
            "use strict";

            function n(e, o, t) {
                return o in e ? Object.defineProperty(e, o, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[o] = t, e
            }
            t.d(o, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js": function(e, o, t) {
            "use strict";

            function n(e) {
                return (n = Object.setPrototypeOf ? Object.getPrototypeOf : function e(o) {
                    return o.__proto__ || Object.getPrototypeOf(o)
                })(e)
            }
            t.d(o, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/inherits.js": function(e, o, t) {
            "use strict";
            t.d(o, "a", function() {
                return r
            });
            var n = t("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function r(e, o) {
                if ("function" != typeof o && null !== o) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(o && o.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), o && Object(n.a)(e, o)
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/objectSpread.js": function(e, o, t) {
            "use strict";
            t.d(o, "a", function() {
                return r
            });
            var n = t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

            function r(e) {
                for (var o = 1; o < arguments.length; o++) {
                    var t = null != arguments[o] ? arguments[o] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.forEach(function(o) {
                        Object(n.a)(e, o, t[o])
                    })
                }
                return e
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, o, t) {
            "use strict";
            t.d(o, "a", function() {
                return c
            });
            var n = t("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                r = t("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function c(e, o) {
                return !o || "object" !== Object(n.a)(o) && "function" != typeof o ? Object(r.a)(e) : o
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js": function(e, o, t) {
            "use strict";

            function n(e, o) {
                return (n = Object.setPrototypeOf || function e(o, t) {
                    return o.__proto__ = t, o
                })(e, o)
            }
            t.d(o, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/typeof.js": function(e, o, t) {
            "use strict";

            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(o) {
                    return typeof o
                } : function e(o) {
                    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
                })(e)
            }

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? function e(o) {
                    return n(o)
                } : function e(o) {
                    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : n(o)
                })(e)
            }
            t.d(o, "a", function() {
                return r
            })
        },
        "./node_modules/react-redux/es/index.js": function(e, o, t) {
            e.exports = t("dll-reference @ta/common.global")("./node_modules/react-redux/es/index.js")
        },
        "./node_modules/react/index.js": function(e, o, t) {
            e.exports = t("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/i18n/i18n.jsx": function(e, o, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/i18n/i18n.jsx")
        },
        "./packages/social/cover-photo/cover-photo.jsx": function(e, o, t) {
            "use strict";
            t.r(o);
            var n = t("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                r = t("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                c = t("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                a = t("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                i = t("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                s = t("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                l = t("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                u = t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                m = t("./node_modules/react/index.js"),
                p = t("./node_modules/react-redux/es/index.js"),
                d = t("@ta/styleguide.icon"),
                f = t("@ta/overlays.managers"),
                b = t("./packages/common/i18n/i18n.jsx"),
                h = t("@ta/media.image"),
                v = t("@ta/tracking.interactions"),
                _ = function(e) {
                    function o() {
                        var e, t;
                        Object(r.a)(this, o);
                        for (var n = arguments.length, c = new Array(n), s = 0; s < n; s++) c[s] = arguments[s];
                        return t = Object(a.a)(this, (e = Object(i.a)(o)).call.apply(e, [this].concat(c))), Object(u.a)(Object(l.a)(Object(l.a)(t)), "onClickFn", function(e, o, t) {
                            t(e, "editCoverPhotoClick"), o()
                        }), Object(u.a)(Object(l.a)(Object(l.a)(t)), "containerRef", m.createRef()), t
                    }
                    return Object(s.a)(o, e), Object(c.a)(o, [{
                        key: "componentDidMount",
                        value: function e() {
                            if (this.props.onLoad) {
                                var o = this.containerRef.current ? this.containerRef.current.getBoundingClientRect().top : 0;
                                this.props.onLoad(o)
                            }
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var o = this,
                                t = this.props,
                                n = t.isNarrow,
                                r = t.device,
                                c = t.isMe,
                                a = t.children,
                                i = t.editMode,
                                s = t.photoSizes,
                                l = n ? "2px" : "inherit",
                                u = n || "MOBILE" === r ? "120px" : "350px";
                            return s ? m.createElement("div", {
                                ref: this.containerRef
                            }, i && c ? m.createElement(m.Fragment, null, m.createElement(f.Opener, {
                                name: "upload-profile-cover-modal"
                            }, function(e) {
                                return m.createElement(v.InteractionLogger, null, function(t) {
                                    return m.createElement("div", {
                                        onClick: function n(r) {
                                            return o.onClickFn(r, e, t)
                                        },
                                        className: "".concat("social-cover-photo-CoverPhoto__cover_photo--QZV5e", " ").concat(n ? "social-cover-photo-CoverPhoto__narrow--3DL3N" : "", " ").concat(i ? "social-cover-photo-CoverPhoto__editMode--3GaRR" : "")
                                    }, m.createElement("div", {
                                        className: "social-cover-photo-CoverPhoto__edit_cover_photo--2bzsj",
                                        onClick: function n(r) {
                                            return o.onClickFn(r, e, t)
                                        }
                                    }, m.createElement(d.Icon, {
                                        name: "photo",
                                        className: "social-cover-photo-CoverPhoto__photo--11o9u"
                                    }), m.createElement("span", {
                                        className: "social-cover-photo-CoverPhoto__text--19aev"
                                    }, Object(b.localize)("edit_cover_photo"))), m.createElement(h.ResponsiveImage, {
                                        sources: s,
                                        width: "100%",
                                        height: u,
                                        borderRadius: l,
                                        allowedStretch: 0
                                    }), !n && m.createElement("div", {
                                        className: "social-cover-photo-CoverPhoto__background_gradient--2W12a"
                                    }, a))
                                })
                            })) : m.createElement("div", {
                                className: "".concat("social-cover-photo-CoverPhoto__cover_photo--QZV5e", " ").concat(n ? "social-cover-photo-CoverPhoto__narrow--3DL3N" : "")
                            }, m.createElement(h.ResponsiveImage, {
                                sources: s,
                                width: "100%",
                                height: u,
                                borderRadius: l,
                                allowedStretch: 0
                            }), !n && m.createElement("div", {
                                className: "social-cover-photo-CoverPhoto__background_gradient--2W12a"
                            }, a))) : m.createElement("div", {
                                ref: this.containerRef
                            }, n && m.createElement("div", {
                                className: "".concat("social-cover-photo-CoverPhoto__no_cover_photo--5ssTp", " ").concat("social-cover-photo-CoverPhoto__narrow--3DL3N")
                            }), !n && !c && m.createElement("div", {
                                className: "social-cover-photo-CoverPhoto__no_cover_photo--5ssTp"
                            }, a), !n && c && m.createElement(m.Fragment, null, m.createElement(f.Opener, {
                                name: "upload-profile-cover-modal"
                            }, function(e) {
                                return m.createElement(v.InteractionLogger, null, function(t) {
                                    return m.createElement("div", {
                                        className: "".concat("social-cover-photo-CoverPhoto__no_cover_photo--5ssTp", " ").concat("social-cover-photo-CoverPhoto__add_cover_photo--27fQR", " ").concat(i ? "social-cover-photo-CoverPhoto__editMode--3GaRR" : ""),
                                        onClick: function n(r) {
                                            return i ? o.onClickFn(r, e, t) : null
                                        }
                                    }, m.createElement("span", {
                                        onClick: function n(r) {
                                            return o.onClickFn(r, e, t)
                                        }
                                    }, m.createElement(d.Icon, {
                                        name: "photo",
                                        className: "social-cover-photo-CoverPhoto__photo--11o9u"
                                    })), m.createElement("span", {
                                        onClick: function n(r) {
                                            return o.onClickFn(r, e, t)
                                        },
                                        className: "social-cover-photo-CoverPhoto__text--19aev"
                                    }, Object(b.localize)("social_Add_cover_photo")), a)
                                })
                            })))
                        }
                    }]), o
                }(m.Component),
                y = Object(p.connect)(function(e, o) {
                    return Object(n.a)({}, o, {
                        device: e.meta.device.viewportCategory
                    })
                })(_);
            t.d(o, "CoverPhoto", function() {
                return y
            }), t.d(o, "CoverPhotoImage", function() {
                return _
            })
        },
        "@ta/media.image": function(o, t) {
            o.exports = e
        },
        "@ta/overlays.managers": function(e, t) {
            e.exports = o
        },
        "@ta/styleguide.icon": function(e, o) {
            e.exports = t
        },
        "@ta/tracking.interactions": function(e, o) {
            e.exports = n
        },
        "dll-reference @ta/common.global": function(e, o) {
            e.exports = r
        }
    })
});
//# sourceMappingURL=social.cover-photo.1416410f4e.js.map