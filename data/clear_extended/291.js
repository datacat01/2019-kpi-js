define("@ta/styleguide.avatar", ["@ta/media.image", "@ta/styleguide.icon", "@ta/common.global"], function(e, t, n) {
    return function(e) {
        var t = {};

        function n(a) {
            if (t[a]) return t[a].exports;
            var r = t[a] = {
                i: a,
                l: !1,
                exports: {}
            };
            return e[a].call(r.exports, r, r.exports, n), r.l = !0, r.exports
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
                for (var r in e) n.d(a, r, function(t) {
                    return e[t]
                }.bind(null, r));
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
        }, n.p = "", n(n.s = "./packages/styleguide/avatar/index.jsx")
    }({
        "./node_modules/react-redux/es/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react-redux/es/index.js")
        },
        "./node_modules/react/index.js": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./packages/common/classnames/classnames.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/classnames/classnames.jsx")
        },
        "./packages/common/routing/routing.jsx": function(e, t, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/routing/routing.jsx")
        },
        "./packages/styleguide/avatar/index.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("./node_modules/react/index.js"),
                r = n("./packages/common/classnames/classnames.jsx"),
                o = n.n(r),
                l = n("./node_modules/react-redux/es/index.js"),
                i = n("./packages/common/routing/routing.jsx"),
                c = n("@ta/styleguide.icon"),
                s = n("@ta/media.image"),
                u = {
                    avatar: "styleguide-avatar-Avatar__avatar--2NStU"
                },
                d = {
                    "xtra-small": 24,
                    small: 32,
                    default: 42,
                    large: 72,
                    "xtra-large": 120
                },
                m = {
                    className: void 0,
                    photo: void 0,
                    icon: null,
                    size: "default",
                    tabletSize: null,
                    desktopSize: null,
                    widescreenSize: null,
                    display: null,
                    href: "",
                    target: "_blank",
                    mobileTarget: null,
                    onClick: void 0,
                    imgCdnUrl: "",
                    alt: "",
                    withBorder: !1,
                    notLazy: !1
                },
                g = function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
                        a = d[n],
                        r = null;
                    if (t && t.photoSizes && t.photoSizes.length > 0) {
                        var o = t.photoSizes.find(function(e) {
                            return e.width >= a ? e.url : null
                        });
                        r = o ? o.url : t.photoSizes[t.photoSizes.length - 1].url
                    }
                    return r
                },
                f = function e(t) {
                    var n = t.photoUrl,
                        r = t.imgCdnUrl,
                        o = t.icon,
                        l = t.alt,
                        i = t.notLazy;
                    return a.createElement(a.Fragment, null, n ? function e(t, n, r) {
                        return r ? a.createElement("img", {
                            src: t,
                            alt: n
                        }) : a.createElement(s.LazyImage, {
                            src: t,
                            alt: n
                        })
                    }(function e(t, n) {
                        return 0 === t.indexOf("http://") || 0 === t.indexOf("https://") ? t : n ? n + t : t
                    }(n, r), l || "", i) : a.createElement(c.Icon, {
                        name: "member-fill"
                    }), o && a.createElement("div", {
                        className: o
                    }))
                },
                p = function e(t) {
                    return a.createElement(i.ResponsiveTargetLink, {
                        className: t.className,
                        href: t.href,
                        target: t.target,
                        mobileTarget: t.mobileTarget,
                        onClick: t.onClick
                    }, a.createElement(f, {
                        photoUrl: t.photoUrl,
                        imgCdnUrl: t.imgCdnUrl,
                        icon: t.icon,
                        alt: t.alt,
                        notLazy: t.notLazy
                    }))
                };

            function h(e) {
                var t = e.photo,
                    n = e.photoUrl,
                    r = e.imgCdnUrl,
                    l = e.viewportCategory,
                    i = e.icon,
                    c = e.size,
                    s = e.tabletSize,
                    d = e.desktopSize,
                    m = e.widescreenSize,
                    h = e.display,
                    v = e.href,
                    x = e.onClick,
                    y = e.alt,
                    b = e.withBorder ? "ui_social_avatar" : "ui_avatar",
                    z = "default" !== e.size && e.size,
                    C = s ? "".concat(s, "-tablet") : null,
                    U = d ? "".concat(d, "-desktop") : null,
                    j = m ? "".concat(m, "-widescreen") : null,
                    k = o()(u.avatar, b, z, C, U, j, h, e.className),
                    S = t ? g(t, "DESKTOP" === l ? d || s || c : "TABLET" === l && s || c) : n;
                return v ? a.createElement(p, {
                    photoUrl: S,
                    imgCdnUrl: e.imgCdnUrl,
                    icon: e.icon,
                    href: e.href,
                    target: e.target,
                    mobileTarget: e.mobileTarget,
                    onClick: e.onClick,
                    alt: e.alt,
                    className: k,
                    withBorder: e.withBorder,
                    notLazy: e.notLazy
                }) : a.createElement("span", {
                    className: k,
                    onClick: x
                }, a.createElement(f, {
                    photoUrl: S,
                    imgCdnUrl: r,
                    icon: i,
                    alt: y,
                    notLazy: e.notLazy
                }))
            }
            p.defaultProps = {
                photoUrl: null,
                icon: m.icon,
                className: m.className,
                href: m.href,
                target: m.target,
                onClick: m.onClick,
                imgCdnUrl: m.imgCdnUrl,
                alt: m.alt,
                withBorder: m.withBorder,
                mobileTarget: m.mobileTarget
            }, f.defaultProps = {
                photoUrl: p.defaultProps.photoUrl,
                imgCdnUrl: m.imgCdnUrl,
                icon: m.icon,
                alt: m.alt,
                notLazy: m.notLazy
            }, h.defaultProps = m;
            var v = Object(l.connect)(function(e) {
                return {
                    imgCdnUrl: e.meta.imageCdnUrl,
                    viewportCategory: e.meta.device.viewportCategory
                }
            })(h);
            n.d(t, "Avatar", function() {
                return v
            })
        },
        "@ta/media.image": function(t, n) {
            t.exports = e
        },
        "@ta/styleguide.icon": function(e, n) {
            e.exports = t
        },
        "dll-reference @ta/common.global": function(e, t) {
            e.exports = n
        }
    })
});
//# sourceMappingURL=styleguide.avatar.b631fa704c.js.map