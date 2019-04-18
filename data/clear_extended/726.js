(window.webpackJsonp = window.webpackJsonp || []).push([
    [52], {
        2317: function(e, t, a) {
            "use strict";
            var r = u(a(5)),
                n = u(a(6)),
                l = "function" == typeof n.default && "symbol" == typeof r.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof n.default && e.constructor === n.default && e !== n.default.prototype ? "symbol" : typeof e
                };

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = h(a(2)),
                i = h(a(7)),
                d = h(a(8)),
                s = h(a(9)),
                c = function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var r = t[a];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, o.default)(e, r.key, r)
                        }
                    }
                    return function(t, a, r) {
                        return a && e(t.prototype, a), r && e(t, r), t
                    }
                }(),
                f = a(1),
                p = h(f),
                m = h(a(0));

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function y(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== (void 0 === t ? "undefined" : l(t)) && "function" != typeof t ? e : t
            }
            var v = {
                    m: 760,
                    l: 1020,
                    xl: 1340
                },
                b = function(e) {
                    function t() {
                        var e, a, r;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var n = arguments.length, l = Array(n), u = 0; u < n; u++) l[u] = arguments[u];
                        return a = r = y(this, (e = t.__proto__ || (0, s.default)(t)).call.apply(e, [this].concat(l))), r.state = {
                            error: !1
                        }, r.handleImageError = function() {
                            return r.setState({
                                error: !0
                            })
                        }, y(r, a)
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : l(t)));
                        e.prototype = (0, d.default)(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (i.default ? (0, i.default)(e, t) : e.__proto__ = t)
                    }(t, f.Component), c(t, [{
                        key: "srcSet",
                        value: function(e) {
                            var t = this.getSrc(e),
                                a = "(min-width: " + v[e] + "px)";
                            return t ? p.default.createElement("source", {
                                srcSet: t,
                                media: a
                            }) : null
                        }
                    }, {
                        key: "getSrc",
                        value: function(e) {
                            var t = this.props,
                                a = t.url,
                                r = t.viewportSizes,
                                n = t.aspectRatio,
                                l = r[e] || {},
                                u = l.width,
                                o = l.height;
                            if (!u && !o) return a;
                            if (u && o) return a + (a.includes("?") ? "&" : "?") + "w=" + u + "&h=" + o;
                            if (!u && o) {
                                var i = Math.round(o * n);
                                return a + (a.includes("?") ? "&" : "?") + "w=" + i + "&h=" + o
                            }
                            var d = Math.round(u / n);
                            return a + (a.includes("?") ? "&" : "?") + "w=" + u + "&h=" + d
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.alt,
                                a = e.className,
                                r = this.state.error ? {
                                    visibility: "hidden"
                                } : {};
                            return p.default.createElement("picture", {
                                style: r
                            }, this.srcSet("xl"), this.srcSet("l"), this.srcSet("m"), p.default.createElement("img", {
                                src: this.getSrc("s"),
                                alt: t,
                                className: a,
                                onError: this.handleImageError
                            }))
                        }
                    }]), t
                }();
            b.defaultProps = {
                alt: "",
                viewportSizes: {
                    s: {
                        width: 0
                    },
                    m: {
                        width: 0
                    },
                    l: {
                        width: 0
                    },
                    xl: {
                        width: 0
                    }
                },
                aspectRatio: 2,
                className: ""
            }, b.propTypes = {
                url: m.default.string.isRequired,
                alt: m.default.string,
                viewportSizes: m.default.object,
                aspectRatio: m.default.number,
                className: m.default.string
            }, t.default = b
        },
        2574: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = o(a(1)),
                n = o(a(0)),
                l = o(a(2788)),
                u = o(a(2789));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var i = a(2273),
                d = function(e) {
                    var t = e.data,
                        a = e.dataId,
                        n = e.showEyeBrow,
                        o = e.isProUser,
                        d = (t || {}).assets,
                        s = void 0 === d ? [] : d;
                    if (!Array.isArray(s) || s.length < 2) return null;
                    var c = s.map(function(e) {
                            return {
                                type: e.type,
                                brand: e.brand,
                                title: e.headline || e.title,
                                description: e.shorterDescription,
                                link: e.url,
                                imageUrl: (e.promoImage || {}).url,
                                premium: e.premium,
                                dateLastPublishedSixHr: e.dateLastPublishedSixHr
                            }
                        }),
                        f = c[0],
                        p = c.slice(1, 4);
                    return r.default.createElement("div", {
                        id: a,
                        className: i.container
                    }, r.default.createElement(l.default, null), r.default.createElement(u.default, {
                        leadItem: f,
                        deckItems: p,
                        showEyeBrow: n,
                        isProUser: o,
                        dataId: a
                    }))
                };
            d.propTypes = {
                data: n.default.object.isRequired,
                dataId: n.default.oneOfType([n.default.string, n.default.number]).isRequired,
                showEyeBrow: n.default.bool,
                isProUser: n.default.bool.isRequired
            }, d.defaultProps = {
                showEyeBrow: !1
            }, t.default = d
        },
        2788: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = l(a(1)),
                n = l(a(19));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u = a(2268);
            t.default = function() {
                return r.default.createElement("div", {
                    id: "HeroLedePlusThreeBanner",
                    className: u.container
                }, r.default.createElement("div", {
                    className: u.title
                }, r.default.createElement("h2", null, "Top News")), r.default.createElement(n.default, {
                    to: "/live-tv",
                    className: u.button,
                    dataType: "button"
                }, "Live TV"))
            }
        },
        2789: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i(a(1)),
                n = i(a(0)),
                l = i(a(699)),
                u = i(a(2790)),
                o = i(a(2792));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var d = a(2272),
                s = function(e) {
                    var t = e.leadItem,
                        a = e.deckItems,
                        n = e.showEyeBrow,
                        i = e.isProUser,
                        s = e.dataId;
                    return r.default.createElement("div", {
                        className: d.container
                    }, r.default.createElement(o.default, {
                        data: t,
                        showEyeBrow: n
                    }), r.default.createElement(u.default, {
                        data: a
                    }), !i && r.default.createElement(l.default, {
                        dataId: "BoxInline-" + s,
                        className: d.adContainer
                    }))
                };
            s.propTypes = {
                leadItem: n.default.object.isRequired,
                deckItems: n.default.array.isRequired,
                showEyeBrow: n.default.bool,
                isProUser: n.default.bool.isRequired,
                dataId: n.default.string.isRequired
            }, s.defaultProps = {
                showEyeBrow: !1
            }, t.default = s
        },
        2790: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = u(a(1)),
                n = u(a(0)),
                l = u(a(2791));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var o = a(2270);

            function i(e, t) {
                return r.default.createElement("li", {
                    className: o.story,
                    key: t
                }, r.default.createElement(l.default, {
                    data: e,
                    dataId: "HeroLedePlusThreeTopStory-" + t
                }))
            }
            var d = function(e) {
                var t = e.data;
                return r.default.createElement("div", {
                    className: o.container
                }, r.default.createElement("div", {
                    className: o.stories
                }, r.default.createElement("ul", null, t && t.length && t.map(i) || null)))
            };
            d.propTypes = {
                data: n.default.array.isRequired
            }, t.default = d
        },
        2791: function(e, t, a) {
            "use strict";
            var r = u(a(5)),
                n = u(a(6)),
                l = "function" == typeof n.default && "symbol" == typeof r.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof n.default && e.constructor === n.default && e !== n.default.prototype ? "symbol" : typeof e
                };

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = g(a(2)),
                i = g(a(7)),
                d = g(a(8)),
                s = g(a(9)),
                c = function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var r = t[a];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, o.default)(e, r.key, r)
                        }
                    }
                    return function(t, a, r) {
                        return a && e(t.prototype, a), r && e(t, r), t
                    }
                }(),
                f = g(a(1)),
                p = g(a(0)),
                m = g(a(731)),
                h = g(a(15)),
                y = g(a(143)),
                v = g(a(20)),
                b = g(a(19)),
                E = g(a(485)),
                w = g(a(37));

            function g(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function _(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== (void 0 === t ? "undefined" : l(t)) && "function" != typeof t ? e : t
            }
            var N = h.default.getProperties().NODE_ENV,
                k = a(2269),
                S = function(e) {
                    function t() {
                        var e, a, r;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var n = arguments.length, l = Array(n), u = 0; u < n; u++) l[u] = arguments[u];
                        return a = r = _(this, (e = t.__proto__ || (0, s.default)(t)).call.apply(e, [this].concat(l))), r.state = {
                            currentBreakpoint: null,
                            imageError: !1
                        }, r.handleBreakpointChange = function() {
                            r.state.currentBreakpoint !== w.default.current() && r.setState({
                                currentBreakpoint: w.default.current()
                            })
                        }, r.getImageRequestString = function() {
                            var e = r.props.data.imageUrl,
                                t = {
                                    large_desktop: {
                                        width: "256",
                                        height: "256"
                                    },
                                    small_desktop: {
                                        width: "160",
                                        height: "160"
                                    },
                                    tablet: {
                                        width: "160",
                                        height: "160"
                                    },
                                    mobile: {
                                        width: "200",
                                        height: "200"
                                    }
                                } [r.state.currentBreakpoint] || {},
                                a = t.width,
                                n = void 0 === a ? 256 : a,
                                l = t.height;
                            return e ? e + "&w=" + n + "&h=" + (void 0 === l ? 256 : l) : E.default
                        }, r.renderThumbnail = function() {
                            var e = r.props.data || {},
                                t = e.link,
                                a = e.title,
                                n = e.type,
                                l = r.getImageRequestString();
                            return f.default.createElement(b.default, {
                                to: t,
                                title: a,
                                className: k.thumbnailContainer
                            }, "cnbcvideo" === n && f.default.createElement(y.default, {
                                hoverEffect: !1,
                                sizeVariationOne: !0
                            }), f.default.createElement("img", {
                                src: l,
                                className: k.thumbnail,
                                alt: a,
                                onError: function() {
                                    return r.setState({
                                        imageError: !0
                                    })
                                }
                            }))
                        }, r.renderEyebrow = function() {
                            var e = r.props.data || {},
                                t = e.type,
                                a = e.premium,
                                n = e.section;
                            if ("webresource" === t) return null;
                            var l = f.default.createElement(b.default, {
                                    to: "/pro",
                                    dataType: "pro-button"
                                }, f.default.createElement("span", {
                                    className: k.proSmall + " icon-probug"
                                })),
                                u = f.default.createElement(b.default, {
                                    to: n && n.url,
                                    title: n && n.eyebrow,
                                    className: k.topicEyebrow
                                }, "test" === N ? n && n.eyebrow || "" : f.default.createElement(m.default, {
                                    clamp: 1
                                }, n && n.eyebrow || ""));
                            return a ? f.default.createElement("div", {
                                className: k.proSmallContainer
                            }, l) : n && n.eyebrow ? f.default.createElement("div", null, u) : null
                        }, r.renderDescription = function() {
                            var e = r.state.currentBreakpoint,
                                t = r.props.data || {},
                                a = t.link,
                                n = t.title,
                                l = t.type;
                            return f.default.createElement(b.default, {
                                to: a,
                                title: n,
                                className: k.heading + " " + (k[l] || "")
                            }, "test" === N ? n : f.default.createElement(m.default, {
                                clamp: (e || "").includes("mobile") ? 5 : 4
                            }, n))
                        }, _(r, a)
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : l(t)));
                        e.prototype = (0, d.default)(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (i.default ? (0, i.default)(e, t) : e.__proto__ = t)
                    }(t, f.default.Component), c(t, [{
                        key: "componentDidMount",
                        value: function() {
                            v.default.on("breakpointChange", this.handleBreakpointChange)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            v.default.remove("breakpointChange", this.handleBreakpointChange)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return f.default.createElement("div", {
                                id: this.props.dataId
                            }, this.renderThumbnail(), f.default.createElement("div", {
                                className: k.descriptionContainer
                            }, this.renderEyebrow(), this.renderDescription(), f.default.createElement("span", {
                                className: k.timeStamp
                            }, this.props.data.dateLastPublishedSixHr || "")))
                        }
                    }]), t
                }();
            S.propTypes = {
                data: p.default.object.isRequired,
                dataId: p.default.string.isRequired
            }, t.default = S
        },
        2792: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = d(a(1)),
                n = d(a(0)),
                l = d(a(731)),
                u = d(a(15)),
                o = d(a(2317)),
                i = d(a(19));

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = u.default.getProperties().NODE_ENV,
                c = a(2271),
                f = function(e) {
                    var t = e.data,
                        a = e.showEyeBrow,
                        n = t || {},
                        u = n.title,
                        d = n.description,
                        f = n.link,
                        p = n.imageUrl,
                        m = n.section,
                        h = n.premium;
                    return r.default.createElement(i.default, {
                        to: f,
                        title: u,
                        className: c.container,
                        renderAsDiv: !0
                    }, r.default.createElement("div", {
                        className: c.imageMask
                    }, function(e, t) {
                        if (!e) return null;
                        var a = e ? e.includes("?") ? "&" : "?" : "";
                        return r.default.createElement(o.default, {
                            viewportSizes: {
                                s: {
                                    width: 320,
                                    height: 180
                                },
                                m: {
                                    height: 387
                                },
                                l: {
                                    height: 377
                                },
                                xl: {
                                    height: 436
                                }
                            },
                            aspectRatio: 4 / 3,
                            url: "" + e + a,
                            className: c.image,
                            alt: t
                        })
                    }(p, u)), r.default.createElement("div", {
                        id: "HeroLedePlusThreeLeadItem",
                        className: c.content
                    }, a ? function(e, t) {
                        var a = r.default.createElement(i.default, {
                                to: "/pro",
                                dataType: "pro-button"
                            }, r.default.createElement("span", {
                                className: c.proSmall + " icon-probug"
                            })),
                            n = r.default.createElement(i.default, {
                                to: e && e.url,
                                title: e && e.eyebrow,
                                className: c.eyebrow
                            }, e && e.eyebrow || "");
                        return t ? r.default.createElement("div", {
                            className: c.proSmallContainer
                        }, a) : e ? r.default.createElement("div", {
                            className: c.eyebrowDiv
                        }, n) : null
                    }(m, h) : null, r.default.createElement("h2", {
                        className: c.title
                    }, r.default.createElement(i.default, {
                        to: f,
                        title: u
                    }, "test" === s ? u : r.default.createElement(l.default, {
                        clamp: 5
                    }, u))), a ? function(e) {
                        return r.default.createElement("p", {
                            className: c.description
                        }, "test" === s ? e : r.default.createElement(l.default, {
                            clamp: 3
                        }, e))
                    }(d) : null))
                };
            f.propTypes = {
                data: n.default.object.isRequired,
                showEyeBrow: n.default.bool
            }, f.defaultProps = {
                showEyeBrow: !1
            }, t.default = f
        }
    }
]);