(window.webpackJsonp = window.webpackJsonp || []).push([
    [76], {
        2576: function(e, t, n) {
            "use strict";
            var a = u(n(5)),
                r = u(n(6)),
                o = "function" == typeof r.default && "symbol" == typeof a.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e
                };

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = E(n(2)),
                l = E(n(7)),
                s = E(n(8)),
                c = E(n(9)),
                f = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), (0, i.default)(e, a.key, a)
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t
                    }
                }(),
                d = n(1),
                p = E(d),
                m = n(22),
                y = E(n(0)),
                v = n(38),
                h = E(n(2793)),
                _ = E(n(768)),
                b = n(72),
                g = E(n(21)),
                w = E(n(2795));

            function E(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function P(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== (void 0 === t ? "undefined" : o(t)) && "function" != typeof t ? e : t
            }
            var L = n(2277),
                k = function(e) {
                    function t() {
                        var e, n, a;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var r = arguments.length, o = Array(r), u = 0; u < r; u++) o[u] = arguments[u];
                        return n = a = P(this, (e = t.__proto__ || (0, c.default)(t)).call.apply(e, [this].concat(o))), a.fetchBedrockToken = function() {
                            _.default.fetchBedrockToken()
                        }, a.isUserPro = function() {
                            if (null !== a.props.authentication.user && a.props.authentication.user.brand_data && a.props.authentication.user.brand_data.app_access) {
                                var e = a.props.authentication.user.brand_data.app_access.includes("PRO");
                                return (0, b.createCookie)("ispro", !0, 1), e
                            }
                            return (0, b.getCookie)("ispro")
                        }, a.isLiveStreamUp = function() {
                            var e = new Date,
                                t = new Date,
                                n = new Date,
                                a = e.getTimezoneOffset() / 60;
                            if (t.setHours(e.getHours() + a - 4), n.setHours(e.getHours() + a + 8), 5 === t.getDay()) {
                                if (t.getHours() > 18) return !1
                            } else {
                                if (6 === t.getDay()) return !1;
                                if (1 === n.getDay() && n.getHours() < 6) return !1
                            }
                            return !0
                        }, P(a, n)
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : o(t)));
                        e.prototype = (0, s.default)(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (l.default ? (0, l.default)(e, t) : e.__proto__ = t)
                    }(t, d.Component), f(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this.interval = setInterval(function() {
                                return e.setState({
                                    time: Date.now()
                                })
                            }, 6e4)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearInterval(this.interval)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.data;
                            if (e.loading) return p.default.createElement("div", null);
                            if (e.error) return p.default.createElement(g.default, {
                                data: e,
                                errorSource: "LegacyPlayerContainer",
                                errorProps: this.props
                            });
                            if (!e.assetList) return p.default.createElement(g.default, {
                                data: {
                                    error: "AssetList query came back as null"
                                },
                                errorSource: "LegacyPlayerContainer",
                                errorProps: this.props
                            });
                            if (null === this.props.authentication.user || !this.isUserPro() || !this.isLiveStreamUp()) return null;
                            var t = e.assetList && e.assetList.assets && Array.isArray(e.assetList.assets) ? e.assetList.assets : [];
                            return p.default.createElement("div", {
                                className: L.legacyPlayerContainer,
                                id: "LegacyPlayer"
                            }, p.default.createElement(h.default, {
                                authentication: this.props.authentication,
                                data: t
                            }))
                        }
                    }]), t
                }();
            k.propTypes = {
                authentication: y.default.PropTypes.object,
                data: y.default.object.isRequired
            }, k.defaultProps = {
                authentication: {}
            }, t.default = (0, m.connect)(function(e) {
                return {
                    authentication: e.authentication
                }
            }, null)((0, v.graphql)(w.default, {
                options: function(e) {
                    return {
                        variables: {
                            id: e.id,
                            clientComponent: "LegacyPlayer",
                            clientProps: e
                        },
                        errorPolicy: "all"
                    }
                }
            })(k))
        },
        2793: function(e, t, n) {
            "use strict";
            var a = u(n(5)),
                r = u(n(6)),
                o = "function" == typeof r.default && "symbol" == typeof a.default ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e
                };

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i, l, s = g(n(2)),
                c = g(n(7)),
                f = g(n(8)),
                d = g(n(9)),
                p = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), (0, s.default)(e, a.key, a)
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t
                    }
                }(),
                m = g(n(1)),
                y = g(n(0)),
                v = g(n(2794)),
                h = g(n(705)),
                _ = g(n(19)),
                b = g(n(15));

            function g(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function w(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== (void 0 === t ? "undefined" : o(t)) && "function" != typeof t ? e : t
            }
            var E = n(2276),
                P = b.default.getProperties().LEGACY_LIVESTREAM_URL,
                L = (l = i = function(e) {
                    function t() {
                        var e, n, a;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var r = arguments.length, o = Array(r), u = 0; u < r; u++) o[u] = arguments[u];
                        return n = a = w(this, (e = t.__proto__ || (0, d.default)(t)).call.apply(e, [this].concat(o))), a.handleRegionChange = function(e) {
                            a.setState({
                                region: e.target.options[e.target.selectedIndex].value
                            })
                        }, w(a, n)
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : o(t)));
                        e.prototype = (0, f.default)(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (c.default ? (0, c.default)(e, t) : e.__proto__ = t)
                    }(t, m.default.Component), p(t, [{
                        key: "componentDidMount",
                        value: function() {
                            function e() {
                                var e = parseInt(document.querySelector(".LegacyPlayer-iframeContainer").offsetWidth, 10);
                                e = "height:" + (e = 9 * e / 16 + 69) + "px", document.querySelector(".LegacyPlayer-iframeContainer").style.cssText = e
                            }
                            window.addEventListener("resize", function() {
                                e()
                            }), e()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return m.default.createElement("section", {
                                className: E.loggedInContainer
                            }, m.default.createElement("div", {
                                className: E.main
                            }, m.default.createElement("div", {
                                className: E.videoContainerStopped
                            }, m.default.createElement("iframe", {
                                title: "live-player",
                                scrolling: "no",
                                className: E.iframeContainer,
                                src: P
                            })), m.default.createElement("div", {
                                className: E.content
                            }, m.default.createElement("span", {
                                className: E.probug
                            }, m.default.createElement("img", {
                                src: h.default,
                                alt: "pro"
                            })), m.default.createElement("h2", {
                                className: E.title
                            }, "CNBC Live Stream"), m.default.createElement("p", {
                                className: E.description
                            }, m.default.createElement(_.default, {
                                to: "//www.cnbc.com/pro-story/"
                            }, "Pro News & Analysis"), "  |  ", m.default.createElement(_.default, {
                                to: "//www.cnbc.com/protalks/"
                            }, "Pro Talks"), "  |  ", m.default.createElement(_.default, {
                                to: "//www.cnbc.com/pro-uncut/"
                            }, "Pro Uncut")))), m.default.createElement(v.default, {
                                videos: this.props.data
                            }))
                        }
                    }]), t
                }(), i.propTypes = {
                    data: y.default.object.isRequired
                }, l);
            t.default = L
        },
        2794: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = i(n(1)),
                r = i(n(0)),
                o = i(n(143)),
                u = i(n(19));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = n(2275),
                s = function(e) {
                    var t = e.videos;
                    return a.default.createElement("div", {
                        className: l.container
                    }, t.map(function(e, t) {
                        return a.default.createElement(u.default, {
                            to: e.url,
                            className: l.link,
                            key: t
                        }, a.default.createElement("div", {
                            className: l.videoContainer
                        }, a.default.createElement("div", {
                            className: l.videoWrapper
                        }, a.default.createElement("div", {
                            className: l.videoContent
                        }, "cnbcvideo" === e.type && a.default.createElement(o.default, null), a.default.createElement("img", {
                            src: e.promoImage.url,
                            alt: e.linkHeadline
                        }), a.default.createElement("span", {
                            className: l.videoLength
                        }, "cnbcvideo" === e.type && a.default.createElement("time", null, "10"))))), a.default.createElement("p", {
                            className: l.description
                        }, e.title))
                    }))
                };
            s.propTypes = {
                videos: r.default.array.isRequired
            }, t.default = s
        },
        2795: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a, r, o = l(n(16)),
                u = l(n(17)),
                i = (a = ["\nquery outputListAssets($id: Int!) {\n  assetList(id: $id, pageSize: 3) {\n    id\n    assets {\n      id\n      headline\n      linkHeadline\n      shorterHeadline\n      slug\n      url\n      datePublished\n      type\n      promoImage {\n        id\n        url\n      }\n      title\n      premium\n      __typename\n    }\n    __typename\n  }\n}\n"], r = ["\nquery outputListAssets($id: Int!) {\n  assetList(id: $id, pageSize: 3) {\n    id\n    assets {\n      id\n      headline\n      linkHeadline\n      shorterHeadline\n      slug\n      url\n      datePublished\n      type\n      promoImage {\n        id\n        url\n      }\n      title\n      premium\n      __typename\n    }\n    __typename\n  }\n}\n"], (0, u.default)((0, o.default)(a, {
                    raw: {
                        value: (0, u.default)(r)
                    }
                })));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = (0, l(n(18)).default)(i);
            t.default = s
        }
    }
]);