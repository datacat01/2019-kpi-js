(window.wjp = window.wjp || []).push([
    [3], {
        1003: function(t, e, n) {
            "use strict";
            n.d(e, "b", function() {
                return o
            }), n.d(e, "a", function() {
                return a
            });
            var r = n(1358),
                i = n.n(r);

            function o(t) {
                var e = function(t) {
                    return t.split("/").pop()
                }(t);
                return e.length > 4 ? null : e
            }

            function a(t) {
                var e = o(t);
                return e ? i()(e) : null
            }
        },
        102: function(t, e, n) {
            "use strict";
            n.d(e, "c", function() {
                return u
            }), n.d(e, "a", function() {
                return c
            }), n.d(e, "b", function() {
                return s
            }), n.d(e, "d", function() {
                return l
            }), n.d(e, "g", function() {
                return p
            }), n.d(e, "e", function() {
                return m
            }), n.d(e, "f", function() {
                return b
            });
            var r = n(6),
                i = n(7),
                o = n(193),
                a = Object(r.j)("profileInterest"),
                u = a("ACTION_SET_FILTERS"),
                c = a("ACTION_LOAD_MORE_BEGIN"),
                s = a("ACTION_LOAD_MORE_SUCCESS"),
                l = a("ACTION_SET_SEARCH_RESULTS"),
                d = a("ACTION_LOAD_MORE_BEGIN"),
                f = a("ACTION_LOAD_MORE_SUCCESS"),
                p = function(t, e) {
                    return {
                        type: u,
                        payload: {
                            selectedAction: parseInt(t, 10),
                            selectedType: parseInt(e, 10)
                        }
                    }
                },
                m = function(t, e) {
                    return {
                        offset: e,
                        types: [c, s],
                        performAsync: function(n, r, a) {
                            var u = Object(o.f)(a(), {
                                offset: e
                            });
                            return 0 === u.length ? Promise.resolve() : n(t, {
                                query: {
                                    rgIds: u
                                }
                            }).then(function(t) {
                                t.success && r(Object(i.b)(t.result.state))
                            })
                        }
                    }
                },
                h = function(t) {
                    return {
                        type: l,
                        payload: {
                            searchResults: t
                        }
                    }
                },
                b = function(t, e, n, r, i) {
                    return {
                        types: [d, f],
                        performAsync: function(o, a) {
                            return a(h([])), o(e, {
                                query: {
                                    accountId: t,
                                    searchKeyword: n,
                                    type: i
                                }
                            }).then(function(t) {
                                t.success && (a(h(t.result.items)), a(m(r, 0)))
                            })
                        }
                    }
                }
        },
        1020: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return f
            });
            var r, i, o, a, u = n(456),
                c = n.n(u),
                s = ["touchstart", "touchend", "touchcancel", "touchleave", "touchmove", "focus"],
                l = ["click", "mousemove", "focus"];
            "undefined" != typeof window && (void 0 !== (a = document).hidden ? (r = "hidden", i = "visibilitychange") : void 0 !== a.webkitHidden && (r = "webkitHidden", i = "webkitvisibilitychange"), o = void 0 !== a[r]);
            var d = !1,
                f = function() {
                    function t(t, e) {
                        this.subscriptions = [], this.onChange = t, this.inactivityTimeout = e, this.handleActivity = c()(this.handleActivity.bind(this), Math.max(e / 150, 100)), this.handleInactivity = this.handleInactivity.bind(this), this.handleBeforeUnload = this.handleBeforeUnload.bind(this)
                    }
                    var e = t.prototype;
                    return e.subscribeEvent = function(t, e, n, r) {
                        t.addEventListener(e, n, r);
                        var i = function() {
                            t.removeEventListener(e, n)
                        };
                        return this.subscriptions.push(i), i
                    }, e.handleActivity = function() {
                        this.recentlyActive || this.onChange(this.recentlyActive = !0), this.timeoutID && clearTimeout(this.timeoutID), this.subscriptions.length > 0 && (this.timeoutID = setTimeout(this.handleInactivity, this.inactivityTimeout))
                    }, e.handleInactivity = function() {
                        this.timeoutID = null, this.onChange(this.recentlyActive = !1)
                    }, e.handleBeforeUnload = function() {
                        d = !0, this.stop()
                    }, e.start = function() {
                        var t = this;
                        "ontouchstart" in window ? s.forEach(function(e) {
                            t.subscribeEvent(window, e, t.handleActivity, {
                                passive: !0
                            })
                        }) : l.forEach(function(e) {
                            t.subscribeEvent(window, e, t.handleActivity)
                        }), this.subscribeEvent(window, "scroll", this.handleActivity, {
                            passive: !0
                        }), o && this.subscribeEvent(document, i, function() {
                            var e = !a[r];
                            e || t.timeoutID && (clearTimeout(t.timeoutID), t.timeoutID = null), d || t.onChange(t.recentlyActive = e)
                        }), this.subscribeEvent(window, "beforeunload", this.handleBeforeUnload), this.recentlyActive = !0, this.handleActivity()
                    }, e.stop = function() {
                        var t;
                        for (this.timeoutID && (clearTimeout(this.timeoutID), this.timeoutID = null); t = this.subscriptions.shift();) t()
                    }, t
                }()
        },
        1023: function(t, e, n) {
            "use strict";
            var r = n(0),
                i = n.n(r),
                o = (n(2), n(60)),
                a = n(556),
                u = n.n(a);
            e.a = function(t) {
                var e = t.qualifier;
                return i.a.createElement(o.a, {
                    title: u()(e) + " recommended",
                    description: "Your recommendation will be visible to anyone viewing this " + e + "."
                })
            }
        },
        1024: function(t, e, n) {
            "use strict";
            var r = n(0),
                i = n.n(r),
                o = (n(2), n(66));
            e.a = function(t) {
                var e = t.qualifier;
                return i.a.createElement(o.a, {
                    title: "You no longer recommend this " + e
                })
            }
        },
        1029: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return u
            }), n.d(e, "b", function() {
                return s
            });
            n(2);
            var r = n(0),
                i = n.n(r),
                o = n(148),
                a = n(932),
                u = {
                    SUPERSCRIPT: {
                        verticalAlign: "super",
                        fontSize: "smaller"
                    },
                    SUBSCRIPT: {
                        verticalAlign: "sub",
                        fontSize: "smaller"
                    }
                },
                c = [{
                    label: "Bold",
                    style: "BOLD",
                    icon: "bold"
                }, {
                    label: "Italic",
                    style: "ITALIC",
                    icon: "italic"
                }, {
                    label: "Superscript",
                    style: "SUPERSCRIPT",
                    icon: "superscript"
                }, {
                    label: "Subscript",
                    style: "SUBSCRIPT",
                    icon: "subscript"
                }];

            function s(t) {
                var e = t.editorState.getCurrentInlineStyle();
                return i.a.createElement("div", {
                    className: t.className
                }, i.a.createElement(o.a, {
                    gutter: "xs"
                }, c.map(function(n) {
                    return i.a.createElement(a.a, {
                        key: n.label,
                        active: e.has(n.style),
                        onToggle: t.onToggle,
                        style: n.style,
                        icon: n.icon
                    })
                })))
            }
        },
        103: function(t, e, n) {
            "use strict";
            var r = n(0),
                i = n.n(r),
                o = n(6),
                a = n(3),
                u = n(17),
                c = n.n(u);
            var s = n(72),
                l = n(136),
                d = n(137),
                f = n(129),
                p = n(45),
                m = n(20),
                h = n(66);
            n.d(e, "a", function() {
                return g
            }), n.d(e, "c", function() {
                return v
            }), n.d(e, "d", function() {
                return y
            }), n.d(e, "b", function() {
                return I
            }), n.d(e, "f", function() {
                return O
            }), n.d(e, "g", function() {
                return E
            }), n.d(e, "h", function() {
                return A
            }), n.d(e, "e", function() {
                return P
            });
            var b = Object(o.j)("projectsBibliography"),
                g = b("ACTION_ADD_PROJECT_BIBLIOGRAPHY"),
                v = b("ACTION_REMOVE_PROJECT_BIBLIOGRAPHY_ITEM"),
                y = b("ACTION_SHOW_REFERENCES_FORM"),
                I = b("ACTION_HIDE_REFERENCES_FORM");

            function O(t, e, n) {
                return function(r) {
                    return function(t, e) {
                        var n = e.offset,
                            r = e.limit;
                        return Object(a.default)("projects.bibliography.ProjectBibliography.loadProjectBibliography.html", {
                            method: "GET",
                            query: {
                                projectId: t,
                                offset: n,
                                limit: r
                            }
                        }).then(c()("result"))
                    }(t, {
                        offset: e,
                        limit: n
                    }).then(function(t) {
                        var i;
                        r(Object(s.c)(t.publicationGlobalPublications)), r(Object(l.b)(t.publicationGlobalPublicationCounters)), r(Object(d.b)(t.publicationGlobalPublicationAuthors)), r(Object(f.b)(t.literatureGlobalAuthors)), r(Object(p.b)(t.accountsGlobalAccounts)), r((i = t.projectsBibliography.publicationUids, {
                            type: g,
                            publicationUids: i,
                            nextOffset: e + n
                        }))
                    })
                }
            }

            function E(t, e) {
                return function(n) {
                    return function(t, e) {
                        return Object(a.default)("/api/projects/bibliography", {
                            method: "DELETE",
                            query: {
                                projectId: t,
                                publicationUid: e
                            }
                        }).then(c()("result"))
                    }(t, e).then(function(t) {
                        var r = t.totalItems;
                        n(Object(m.pushAlert)(function() {
                            return i.a.createElement(h.a, {
                                color: "green",
                                title: "Item deleted"
                            })
                        })), n(function(t, e) {
                            return {
                                type: v,
                                publicationUid: t,
                                totalItems: e
                            }
                        }(e, r))
                    }).catch(function(t) {
                        n(Object(m.notifyAboutError)(t))
                    })
                }
            }

            function A() {
                return {
                    type: y
                }
            }

            function P() {
                return {
                    type: I
                }
            }
        },
        104: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return o
            }), n.d(e, "b", function() {
                return a
            }), n.d(e, "c", function() {
                return u
            });
            var r = n(6),
                i = Object(r.j)("contentItems"),
                o = i("ADD_CONTENT_ITEM"),
                a = i("ADD_CONTENT_ITEMS");

            function u(t) {
                return {
                    type: a,
                    contentItems: t
                }
            }
        },
        105: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return i
            });
            var r = "questionnaireQuestionnaire",
                i = function(t, e) {
                    return e && t[r] ? t[r][e] : t[r]
                }
        },
        1063: function(t, e, n) {
            "use strict";
            var r = n(1),
                i = n(5),
                o = (n(2), n(0)),
                a = n.n(o),
                u = n(35),
                c = n(940),
                s = n(376);
            e.a = function(t) {
                var e = function(e) {
                    function n() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(r)) || this).state = {
                            isMobile: t.props.isMobile
                        }, t.handleMatchMedia = function(e) {
                            var n = e.matches;
                            t.setState({
                                isMobile: n
                            })
                        }, t
                    }
                    Object(i.a)(n, e);
                    var o = n.prototype;
                    return o.componentDidMount = function() {
                        this.matchMedia = window.matchMedia("(max-width: " + (parseInt(c.a.getBreakpoint("m"), 10) - 1) + "px)"), this.handleMatchMedia({
                            matches: this.matchMedia.matches
                        }), this.matchMedia.addListener(this.handleMatchMedia)
                    }, o.componentWillUnmount = function() {
                        this.matchMedia && this.matchMedia.removeListener(this.handleMatchMedia)
                    }, o.render = function() {
                        var e = Object(r.a)({}, this.props, this.state);
                        return a.a.createElement(t, e)
                    }, n
                }(o.Component);
                return e.displayName = "Responsive", Object(u.connect)(function(t) {
                    return {
                        isMobile: Object(s.d)(t, s.b)
                    }
                })(e)
            }
        },
        109: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return a
            }), n.d(e, "c", function() {
                return u
            }), n.d(e, "b", function() {
                return c
            }), n.d(e, "d", function() {
                return p
            }), n.d(e, "e", function() {
                return m
            });
            var r = n(6),
                i = n(86),
                o = Object(r.j)("publicationFulltextRequests"),
                a = o("ACTION_REQUEST_PUBLICATION"),
                u = o("ACTION_UNDO_REQUEST_PUBLICATION"),
                c = o("ACTION_UNDO_NOT_ALLOWED"),
                s = 1e4,
                l = {};

            function d(t, e) {
                l[e] = setTimeout(function() {
                    f(e), t(function(t) {
                        return {
                            type: c,
                            payload: {
                                publicationUid: t
                            }
                        }
                    }(e))
                }, s)
            }

            function f(t) {
                l[t] && (clearTimeout(l[t]), delete l[t])
            }

            function p(t, e) {
                return function(n) {
                    d(n, e), n(h(e)), Object(i.c)(t).catch(function() {
                        n(b(e))
                    })
                }
            }

            function m(t, e) {
                return function(n) {
                    f(e), n(b(e)), Object(i.c)(t).catch(function() {
                        n(h(e))
                    })
                }
            }

            function h(t) {
                return {
                    type: a,
                    payload: {
                        publicationUid: t
                    }
                }
            }

            function b(t) {
                return {
                    type: u,
                    payload: {
                        publicationUid: t
                    }
                }
            }
        },
        112: function(t, e, n) {
            "use strict";
            e.a = function(t, e) {
                YRG.use(t, e)
            }
        },
        113: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return b
            }), n.d(e, "b", function() {
                return g
            }), n.d(e, "e", function() {
                return v
            }), n.d(e, "c", function() {
                return y
            }), n.d(e, "g", function() {
                return I
            }), n.d(e, "d", function() {
                return O
            }), n.d(e, "l", function() {
                return E
            }), n.d(e, "j", function() {
                return P
            }), n.d(e, "k", function() {
                return S
            }), n.d(e, "h", function() {
                return j
            }), n.d(e, "f", function() {
                return w
            }), n.d(e, "i", function() {
                return C
            });
            var r = n(12),
                i = n(1),
                o = n(3),
                a = n(17),
                u = n.n(a),
                c = n(23);

            function s() {
                var t = Object(r.a)(["/", "/overview"]);
                return s = function() {
                    return t
                }, t
            }

            function l() {
                var t = Object(r.a)(["/", "/onboarding"]);
                return l = function() {
                    return t
                }, t
            }

            function d() {
                var t = Object(r.a)(["/", "/interval"]);
                return d = function() {
                    return t
                }, t
            }

            function f() {
                var t = Object(r.a)(["/", "/toggleBlacklisting"]);
                return f = function() {
                    return t
                }, t
            }

            function p() {
                var t = Object(r.a)(["/", ""]);
                return p = function() {
                    return t
                }, t
            }

            function m() {
                var t = Object(r.a)(["/", ""]);
                return m = function() {
                    return t
                }, t
            }
            var h = "api/projects",
                b = "projects.ProjectMethodsModal.search.html";

            function g(t, e) {
                var n = e.trackingMetadata,
                    r = e.viewIds,
                    a = void 0 === r ? null : r,
                    c = e.linkRgKeys,
                    s = void 0 === c ? null : c,
                    l = e.linkType,
                    d = void 0 === l ? null : l;
                return Object(o.default)(h, {
                    method: "POST",
                    body: Object(i.a)({}, t, {
                        trackingMetadata: n,
                        viewIds: a,
                        linkRgKeys: s,
                        linkType: d
                    })
                }).then(u()("result"))
            }

            function v(t, e, n, r) {
                return void 0 === r && (r = !1), Object(o.default)(h + Object(c.a)(m(), t), {
                    method: "PATCH",
                    body: Object(i.a)({}, e, {
                        context: n,
                        updateGoalMessage: r
                    })
                }).then(u()("result"))
            }

            function y(t) {
                return Object(o.default)(h + Object(c.a)(p(), t), {
                    method: "DELETE"
                }).then(u()("result"))
            }

            function I(t, e, n, r) {
                return void 0 === r && (r = null), Array.isArray(t) || (t = [t]), Object(o.default)(h + "/request", {
                    method: "POST",
                    body: {
                        targetAccountIds: t,
                        viewId: e,
                        context: n,
                        trackingMetadata: r
                    }
                }).then(u()("result"))
            }

            function O(t, e, n, r) {
                return void 0 === r && (r = {}), A("POST", Object(i.a)({
                    projectId: t,
                    reason: e,
                    context: n
                }, r))
            }

            function E(t, e, n) {
                return void 0 === n && (n = null), A("DELETE", {
                    projectId: t,
                    context: e,
                    entryChannel: n
                })
            }

            function A(t, e) {
                return Object(o.default)("/api/projects/follow", {
                    method: t,
                    body: e
                })
            }

            function P(t, e) {
                return Object(o.default)(h + Object(c.a)(f(), t), {
                    method: "POST",
                    body: {
                        blacklist: e
                    }
                }).then(u()("result"))
            }

            function S(t, e) {
                return Object(o.default)(h + "/trackPreview", {
                    method: "POST",
                    body: {
                        projectIds: t,
                        context: e
                    }
                })
            }

            function j(t, e, n, r) {
                if (void 0 === r && (r = null), !e) throw new Error("Trying to save undefined interval");
                return Object(o.default)(h + Object(c.a)(d(), t), {
                    method: "POST",
                    body: Object(i.a)({
                        interval: e,
                        context: n
                    }, r && {
                        viewIds: r
                    })
                }).then(u()("result"))
            }

            function w(t, e, n, r) {
                var a = e.interval,
                    s = e.description,
                    d = e.motivation;
                return void 0 === r && (r = null), Object(o.default)(h + Object(c.a)(l(), t), {
                    method: "POST",
                    body: Object(i.a)({
                        interval: a,
                        description: s,
                        motivation: d,
                        context: n
                    }, r && {
                        viewIds: r
                    })
                }).then(u()("result"))
            }

            function C(t, e) {
                var n = e.hypothesis,
                    r = e.experiment,
                    i = e.conclusion,
                    a = {};
                return void 0 !== n && (a.hypothesis = n), void 0 !== r && (a.experiment = r), void 0 !== i && (a.conclusion = i), Object(o.default)(h + Object(c.a)(s(), t), {
                    method: "POST",
                    body: a
                }).then(u()("result"))
            }
        },
        1137: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return l
            });
            var r = n(28),
                i = n.n(r),
                o = n(3),
                a = n(931),
                u = "leave",
                c = "timeout",
                s = 50,
                l = function() {
                    function t(t) {
                        var e = this;
                        i()(t.translator instanceof a.a, "Please define a valid Translator in the options"), this.options = t, this.set = new Set, this.maxSetSize = s, this.isDebugModeOn = t.debug, this.translator = t.translator, window.addEventListener("unload", this.flush.bind(this, u)), t.sessionTimeout > 0 && setTimeout(this.flush.bind(this, c), t.sessionTimeout), RGCommons.debug.addReadyListener(function() {
                            RGCommons.debug.addListener("intersectionObserver:switch", e.switchDebugMode.bind(e))
                        })
                    }
                    var e = t.prototype;
                    return e.switchDebugMode = function(t) {
                        this.isDebugModeOn = t
                    }, e.append = function(t) {
                        for (var e = new Map, n = Object.keys(t), r = 0; r < n.length; r++) {
                            var i = n[r];
                            e.set(i, t[i])
                        }
                        return this.set.size >= this.maxSetSize && (this.maxSetSize += s, this.flush("premature")), this.set.add(e), e
                    }, e.remove = function(t) {
                        this.set.delete(t) && this.maxSetSize--
                    }, e.flush = function(t) {
                        var e = [],
                            n = 0,
                            r = this.set,
                            i = Array.isArray(r),
                            o = 0;
                        for (r = i ? r : r[Symbol.iterator]();;) {
                            var a;
                            if (i) {
                                if (o >= r.length) break;
                                a = r[o++]
                            } else {
                                if ((o = r.next()).done) break;
                                a = o.value
                            }
                            var u = a;
                            u.has("onPreFlush") && u.get("onPreFlush")();
                            var c = this.translator.translate(u);
                            c && (e.push(c), u.has("onPostFlush") && u.get("onPostFlush")()), u.has("accountId") && (n = u.get("accountId"))
                        }
                        if (e.length > 0) {
                            var s = {
                                a: n,
                                e: e,
                                r: t
                            };
                            this.send(s, t)
                        }
                    }, e.send = function(t, e) {
                        var n = this.options.endpoint;
                        switch (e) {
                            case u:
                                Object(o.sendBeacon)(n, JSON.stringify(t));
                                break;
                            case c:
                            case "premature":
                                Object(o.default)(n, {
                                    method: "POST",
                                    headers: {
                                        "Content-type": "application/x-www-form-urlencoded"
                                    },
                                    body: t
                                })
                        }
                    }, t
                }()
        },
        1138: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return r
            });
            var r = function(t) {
                return t.applicationGlobalContent.contentKey
            }
        },
        1139: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return c
            });
            n(2);
            var r = n(0),
                i = n.n(r),
                o = n(148),
                a = n(932),
                u = [{
                    label: "UL",
                    style: "unordered-list-item",
                    icon: "list-unordered"
                }, {
                    label: "OL",
                    style: "ordered-list-item",
                    icon: "list-ordered"
                }];

            function c(t) {
                var e = t.editorState,
                    n = e.getSelection(),
                    r = e.getCurrentContent().getBlockForKey(n.getStartKey()).getType();
                return i.a.createElement("div", {
                    className: t.className
                }, i.a.createElement(o.a, {
                    gutter: "xs"
                }, u.map(function(e) {
                    return i.a.createElement(a.a, {
                        key: e.label,
                        active: e.style === r,
                        onToggle: t.onToggle,
                        style: e.style,
                        icon: e.icon
                    })
                })))
            }
        },
        114: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return i
            }), n.d(e, "b", function() {
                return o
            });
            var r = n(112),
                i = "attention",
                o = "warning";
            e.c = function(t, e) {
                void 0 === e && (e = o), Object(r.a)("rg-header-notify", function(n) {
                    n.rg.notify(t, e)
                })
            }
        },
        1140: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return p
            });
            var r = n(11),
                i = n(5),
                o = (n(2), n(0)),
                a = n.n(o),
                u = n(22),
                c = n.n(u),
                s = n(30),
                l = n(1977),
                d = n(148),
                f = new c.a("mention-controls"),
                p = function(t) {
                    function e() {
                        for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(r)) || this).handleMentionsClick = function() {
                            e.props.onMentionClick("@")
                        }, e
                    }
                    Object(i.a)(e, t);
                    var n = e.prototype;
                    return n.getMentionItem = function() {
                        var t = a.a.createElement(s.a, {
                            type: "button",
                            theme: "bare",
                            onClick: this.handleMentionsClick,
                            tabIndex: "-1"
                        }, a.a.createElement(s.a.Icon, null), !this.props.hideLabels && a.a.createElement(s.a.Label, null, "Mention"));
                        return this.props.isMobileDevice ? t : a.a.createElement(l.a, {
                            mode: "hover",
                            color: "black",
                            target: t,
                            position: "below"
                        }, "You can type @ to mention people")
                    }, n.getReferencesItem = function() {
                        var t = a.a.createElement(s.a, {
                            type: "button",
                            theme: "bare",
                            onClick: this.props.onReferenceClick,
                            tabIndex: "-1"
                        }, a.a.createElement(s.a.Icon, {
                            identifier: "paper"
                        }), !this.props.hideLabels && a.a.createElement(s.a.Label, null, "Reference"));
                        return this.props.isMobileDevice ? t : a.a.createElement(l.a, {
                            mode: "hover",
                            color: "black",
                            target: t,
                            position: "below"
                        }, "Add references to related research")
                    }, n.render = function() {
                        return a.a.createElement("div", {
                            className: this.props.className
                        }, a.a.createElement(d.a, {
                            gutter: "xs"
                        }, a.a.createElement("div", f(), a.a.createElement("span", f("divider")), a.a.createElement("div", f("button-wrapper"), a.a.createElement(d.a, null, a.a.createElement(d.a.Item, {
                            key: "mentions"
                        }, this.getMentionItem()), this.props.showReferenceResearch ? a.a.createElement(d.a.Item, Object(r.a)({}, f("button-wrapper"), {
                            key: "references"
                        }), this.getReferencesItem()) : null)))))
                    }, e
                }(o.Component);
            p.displayName = "MentionControls"
        },
        1146: function(t, e, n) {
            "use strict";
            var r = n(46),
                i = n(5),
                o = (n(2), n(0)),
                a = n.n(o),
                u = n(209),
                c = n.n(u),
                s = n(218),
                l = n(1304),
                d = n.n(l),
                f = n(1100),
                p = n(12),
                m = n(11),
                h = n(22),
                b = n.n(h),
                g = n(940),
                v = n(379),
                y = n(540),
                I = n(15);

            function O() {
                var t = Object(p.a)(["\n        query MentionListItem($accountId: ID!) {\n            account(id: $accountId) {\n                id\n                fullName\n                ...AccountPersonListItemFullName @embed\n                ...AccountPersonListItemImage @embed\n                ...AccountPersonListItemMetaItems @embed\n            }\n        }\n    "]);
                return O = function() {
                    return t
                }, t
            }
            var E = function(t) {
                function e() {
                    for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    return (e = t.call.apply(t, [this].concat(r)) || this).handleClick = function(t) {
                        t.preventDefault(), e.props.onClick(e.props.accountId, e.props.fullName)
                    }, e.handleMouseOver = function() {
                        var t = e.props,
                            n = t.accountId,
                            r = t.fullName;
                        (0, t.onHighlight)(n, r)
                    }, e
                }
                Object(i.a)(e, t);
                var n = e.prototype;
                return n.componentDidMount = function() {
                    this.notifyIfSelected()
                }, n.componentDidUpdate = function(t) {
                    this.props.isSelected !== t.isSelected && this.notifyIfSelected()
                }, n.notifyIfSelected = function() {
                    var t = this.props,
                        e = t.isSelected,
                        n = t.accountId,
                        r = t.fullName,
                        i = t.onHighlight;
                    e && i(n, r)
                }, n.render = function() {
                    var t = this.props,
                        e = t.accountId,
                        n = (0, t.bem)({
                            element: "item",
                            extra: {
                                "is-selected": this.props.isSelected
                            }
                        });
                    return a.a.createElement("div", Object(m.a)({}, n, {
                        onMouseDown: this.handleClick,
                        onTouchStart: this.handleClick,
                        onMouseOver: this.handleMouseOver
                    }), a.a.createElement(v.a, null, a.a.createElement(y.b, {
                        id: e
                    }), a.a.createElement(y.d, {
                        id: e
                    }), a.a.createElement(y.f, {
                        id: e
                    })))
                }, e
            }(o.Component);
            E.displayName = "MentionListItem", E.defaultProps = {
                isSelected: !1
            };
            var A = Object(I.withQuery)(Object(I.gql)(O()), {
                    mapDataToProps: function(t) {
                        return {
                            fullName: t.account.fullName
                        }
                    }
                })(E),
                P = n(13),
                S = n.n(P),
                j = n(111),
                w = n.n(j),
                C = n(107),
                R = n.n(C),
                T = n(241),
                L = n.n(T),
                D = n(691),
                k = n.n(D),
                _ = n(687),
                F = n.n(_),
                x = n(14),
                N = n(35),
                M = n(16);

            function U() {
                var t = Object(p.a)(['\n                query MentionPopover_Network($search: String = "") @allowToSkipSSR {\n                    viewer {\n                        search {\n                            allowedToMentionNetworkAccounts(searchQuery: $search) {\n                                id\n                                ...MentionListItem @embed\n                            }\n                        }\n                    }\n                }\n            ']);
                return U = function() {
                    return t
                }, t
            }

            function q() {
                var t = Object(p.a)(["\n            query MentionPopover_Creators(\n                $rootId: ID!\n                $isPublication: Boolean!\n                $isPost: Boolean!\n                $isMessage: Boolean!\n            ) {\n                viewer {\n                    account {\n                        id\n                        blockedAnyDirectionAccounts {\n                            id\n                        }\n                    }\n                }\n                publication(id: $rootId) @include(if: $isPublication) {\n                    id\n                    comments(limit: 10, offset: 0) {\n                        id\n                        creator {\n                            id\n                            fullName\n                            ...MentionListItem @embed\n                        }\n                        replies {\n                            id\n                            creator {\n                                id\n                                fullName\n                                ...MentionListItem @embed\n                            }\n                        }\n                    }\n                    authorships {\n                        author {\n                            id\n                            claimingAccount {\n                                id\n                                fullName\n                                ...MentionListItem @embed\n                            }\n                        }\n                    }\n                }\n                post(id: $rootId) @include(if: $isPost) {\n                    id\n                    author {\n                        id\n                        fullName\n                        ...MentionListItem @embed\n                    }\n                    children(limit: 10, sortOrder: CREATED_AT_DESC) {\n                        message {\n                            id\n                            creator {\n                                id\n                                fullName\n                                ...MentionListItem @embed\n                            }\n                        }\n                    }\n                }\n                message(id: $rootId) @include(if: $isMessage) {\n                    id\n                    root {\n                        id\n                        ... on Project {\n                            id\n                            collaborators(limit: 10, offset: 0) {\n                                id\n                                account {\n                                    id\n                                    fullName\n                                    ...MentionListItem @embed\n                                }\n                            }\n                        }\n                    }\n\n                    creator {\n                        id\n                        fullName\n                        ...MentionListItem @embed\n                    }\n                    replies {\n                        id\n                        creator {\n                            id\n                            fullName\n                            ...MentionListItem @embed\n                        }\n                    }\n                }\n            }\n        "]);
                return q = function() {
                    return t
                }, t
            }
            var G = new b.a("mention-list"),
                B = new b.a("mention-popover"),
                z = function(t) {
                    function e(e) {
                        var n;
                        return (n = t.call(this, e) || this).handleScroll = function() {
                            n.props.hidePopup()
                        }, n.handleSelectPerson = function(t, e) {
                            var r = n.props.editorState.getCurrentContent().createEntity("ACCOUNT", "IMMUTABLE", {
                                accountId: x.a.parse(t).id
                            });
                            n.props.replaceSearchTermWithEntity(r.getLastCreatedEntityKey(), e)
                        }, n.state = {
                            highlightedIndex: 0
                        }, n.highlightedAccount = null, n.handleItemHighlight = n.handleItemHighlight.bind(Object(r.a)(n)), n.handleUpArrow = n.handleUpArrow.bind(Object(r.a)(n)), n.handleDownArrow = n.handleDownArrow.bind(Object(r.a)(n)), n.pickMention = n.pickMention.bind(Object(r.a)(n)), n
                    }
                    Object(i.a)(e, t);
                    var n = e.prototype;
                    return n.componentDidMount = function() {
                        this.props.subscribeToEditorKey("up", this.handleUpArrow), this.props.subscribeToEditorKey("down", this.handleDownArrow), this.props.subscribeToEditorKey("enter", this.pickMention), this.props.subscribeToEditorKey("tab", this.pickMention), window.addEventListener("scroll", this.handleScroll);
                        var t = "only screen and (max-width: " + (parseInt(g.a.getBreakpoint("m"), 10) - 1) + "px)";
                        this.isMobile = window.matchMedia(t).matches
                    }, n.componentWillUnmount = function() {
                        this.props.unsubscribeFromEditorKey("up"), this.props.unsubscribeFromEditorKey("down"), this.props.unsubscribeFromEditorKey("enter"), this.props.unsubscribeFromEditorKey("tab"), window.removeEventListener("scroll", this.handleScroll)
                    }, n.handleUpArrow = function() {
                        var t = this.state.highlightedIndex;
                        t > 0 && this.setState({
                            highlightedIndex: t - 1
                        })
                    }, n.handleDownArrow = function() {
                        var t = this.state.highlightedIndex;
                        t < this.props.accountIds.length - 1 && this.setState({
                            highlightedIndex: t + 1
                        })
                    }, n.handleItemHighlight = function(t, e) {
                        this.highlightedAccount = {
                            accountId: t,
                            fullName: e
                        };
                        var n = this.props.accountIds.indexOf(t);
                        n !== this.state.highlightedIndex && this.setState({
                            highlightedIndex: n
                        })
                    }, n.pickMention = function() {
                        this.highlightedAccount && this.handleSelectPerson(this.highlightedAccount.accountId, this.highlightedAccount.fullName)
                    }, n.render = function() {
                        var t = this,
                            e = this.props,
                            n = e.target,
                            r = e.accountIds,
                            i = e.search,
                            o = this.state.highlightedIndex;
                        if (!r.length) return null;
                        var u = document.documentElement,
                            c = (window.pageYOffset || u.scrollTop) - (u.clientTop || 0),
                            s = this.isMobile ? this.props.editorRef.editor.offsetLeft : n.left,
                            l = {
                                top: n.top + 25 + c,
                                left: s
                            },
                            d = r.map(function(e, n) {
                                return a.a.createElement(A, {
                                    search: i,
                                    key: e,
                                    index: n,
                                    accountId: e,
                                    isSelected: o === n,
                                    onClick: t.handleSelectPerson,
                                    onHighlight: t.handleItemHighlight,
                                    bem: G
                                })
                            });
                        return a.a.createElement("div", Object(m.a)({}, B({
                            modifiers: {
                                mobile: this.isMobile
                            }
                        }), {
                            style: l
                        }), a.a.createElement("div", G(), d))
                    }, e
                }(o.Component);
            z.displayName = "MentionPopover";
            var H = Object(M.compose)(Object(N.connect)(), Object(M.withProps)(function(t) {
                var e = t.rootId;
                return {
                    creatorAccountIds: [],
                    filteredCreatorAccountIds: [],
                    isMessage: x.a.parse(e).type === x.b.TYPE_MESSAGE,
                    isPost: x.a.parse(e).type === x.b.TYPE_POST,
                    isPublication: x.a.parse(e).type === x.b.TYPE_PUBLICATION
                }
            }), Object(I.withQuery)(Object(I.gql)(q()), {
                mapDataToProps: function(t, e) {
                    var n = e.search,
                        r = w()(S()(t, "publication.comments"), "creator"),
                        i = w()(F()(w()(S()(t, "publication.comments"), "replies")), "creator"),
                        o = w()(w()(S()(t, "publication.authorships"), "author"), "claimingAccount"),
                        a = [S()(t, "message.creator")],
                        u = S()(t, "message.replies.creator"),
                        c = R()(w()(S()(t, "message.root.collaborators"), "account")),
                        s = [S()(t, "post.author")],
                        l = w()(w()(S()(t, "post.children"), "message"), "creator"),
                        d = R()([].concat(r, i, o, a, u, s, l, c)),
                        f = w()(R()(d, function(t) {
                            var e = t.fullName;
                            return !(n && !e.toLowerCase().includes(n.toLowerCase()))
                        }), "id"),
                        p = w()(S()(t, "viewer.account.blockedAnyDirectionAccounts"), "id"),
                        m = S()(t, "viewer.account.id");
                    return {
                        filteredCreatorAccountIds: k()(L()(f, p, [m]))
                    }
                }
            }), Object(M.branch)(function(t) {
                return t.filteredCreatorAccountIds.length < 6
            }, Object(I.withQuery)(Object(I.gql)(U()), {
                mapDataToProps: function(t, e) {
                    var n = e.filteredCreatorAccountIds,
                        r = w()(S()(t, "viewer.search.allowedToMentionNetworkAccounts"), "id");
                    return {
                        accountIds: k()([].concat(n, r)).slice(0, 6)
                    }
                }
            }), Object(M.withProps)(function(t) {
                return {
                    accountIds: t.filteredCreatorAccountIds
                }
            })))(z);

            function Q(t, e) {
                if (t) {
                    var n = t.getSelection(),
                        r = n.getEndKey();
                    if (!n.getHasFocus() && e.querySelector && (e = e.querySelector('div[data-offset-key^="' + r + '"][data-block="true"] span[data-offset-key^="' + r + '"]:last-child'))) return e.getBoundingClientRect()
                }
                return Object(s.getVisibleSelectionRect)(window)
            }
            var W = function(t) {
                function e(e) {
                    var n;
                    return (n = t.call(this, e) || this).state = {
                        activeTrigger: null,
                        searchSelection: null,
                        target: null
                    }, n.updatePopupState = n.updatePopupState.bind(Object(r.a)(n)), n.handleEscape = n.handleEscape.bind(Object(r.a)(n)), n.hidePopup = n.hidePopup.bind(Object(r.a)(n)), n.triggersToComponent = {
                        "@": H
                    }, n
                }
                Object(i.a)(e, t);
                var n = e.prototype;
                return n.UNSAFE_componentWillReceiveProps = function(t) {
                    t.editorState !== this.props.editorState && this.updatePopupState(t.editorState)
                }, n.componentDidUpdate = function() {
                    this.isPopupShown() && !this.state.target && this.setState({
                        target: Q()
                    })
                }, n.isMentionTrigger = function(t, e) {
                    return !!this.triggersToComponent.hasOwnProperty(t[e]) && ((0 === e || " " === t[e - 1]) && (e === t.length - 1 || " " !== t[e + 1]))
                }, n.updatePopupState = function(t) {
                    var e = this,
                        n = t.getSelection();
                    if (n.isCollapsed() && n.getHasFocus()) {
                        var r = n.getEndKey(),
                            i = t.getCurrentContent().getBlockForKey(r),
                            o = n.getEndOffset(),
                            a = i.getText().slice(0, o);
                        if (void 0 !== a && 0 !== a.length) {
                            var u = d()(a, function(t, n) {
                                return e.isMentionTrigger(a, n)
                            });
                            if (-1 !== u) {
                                var c = s.SelectionState.createEmpty(r).merge({
                                        anchorOffset: u,
                                        focusOffset: o
                                    }),
                                    l = a[u];
                                this.showPopup(l, c)
                            } else this.hidePopup()
                        } else this.hidePopup()
                    } else this.hidePopup()
                }, n.showPopup = function(t, e) {
                    this.setState({
                        activeTrigger: t,
                        searchSelection: e,
                        target: this.state.target ? this.state.target : Q()
                    }), this.subscribeToEscape()
                }, n.hidePopup = function() {
                    this.isPopupShown() && (this.setState({
                        activeTrigger: null,
                        searchSelection: null,
                        target: null
                    }), this.unsubscribeFromEscape())
                }, n.isPopupShown = function() {
                    return Boolean(this.state.activeTrigger)
                }, n.getSearchString = function() {
                    var t = this.props.editorState,
                        e = this.state.searchSelection,
                        n = e.getEndKey(),
                        r = e.getStartOffset(),
                        i = e.getEndOffset();
                    return t.getCurrentContent().getBlockForKey(n).getText().slice(r + 1, i)
                }, n.subscribeToEscape = function() {
                    this.props.subscribeToEditorKey("escape", this.handleEscape)
                }, n.unsubscribeFromEscape = function() {
                    this.props.unsubscribeFromEditorKey("escape")
                }, n.handleEscape = function() {
                    this.hidePopup()
                }, n.renderPopup = function() {
                    var t = this,
                        e = Q(this.props.editorState, this.props.editorRef.editor);
                    if (!e || !this.isPopupShown()) return null;
                    var n = this.state,
                        r = n.activeTrigger,
                        i = n.searchSelection,
                        o = this.triggersToComponent[r];
                    return a.a.createElement(o, {
                        editorState: this.props.editorState,
                        editorRef: this.props.editorRef,
                        target: e,
                        search: this.getSearchString(),
                        replaceSearchTermWithEntity: function(e, n) {
                            return t.props.replaceSelectionWithEntity(i, e, n)
                        },
                        subscribeToEditorKey: this.props.subscribeToEditorKey,
                        unsubscribeFromEditorKey: this.props.unsubscribeFromEditorKey,
                        rootId: this.props.rootId,
                        hidePopup: this.hidePopup
                    })
                }, n.render = function() {
                    return this.props.editorRef ? a.a.createElement(f.a, null, a.a.createElement(c.a, {
                        transitionName: "mention-popover",
                        transitionEnterTimeout: 150,
                        transitionLeaveTimeout: 100
                    }, this.renderPopup())) : null
                }, e
            }(o.Component);
            W.displayName = "HotkeyManager";
            e.a = W
        },
        115: function(t, e, n) {
            "use strict";
            n.d(e, "b", function() {
                return r
            }), n.d(e, "a", function() {
                return i
            });
            var r = function(t, e) {
                    return e.uploads[t] ? e.uploads[t].fileList : []
                },
                i = function(t, e) {
                    return e.uploads[t] || {
                        uploadState: {}
                    }
                }
        },
        117: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return o
            }), n.d(e, "f", function() {
                return a
            }), n.d(e, "d", function() {
                return u
            }), n.d(e, "e", function() {
                return c
            }), n.d(e, "b", function() {
                return s
            }), n.d(e, "c", function() {
                return l
            });
            var r = n(6),
                i = Object(r.j)("projectsShare"),
                o = i("ACTION_SHOW_RECOMMEND_ALERT"),
                a = i("STORAGE_KEY_SHOW_RECOMMEND_ALERT"),
                u = "projectShareNotificationCTARecommend",
                c = "projectShareNotificationUpdateCollaborator",
                s = "projectShareNotificationCommentCollaborator",
                l = "projectShareNotificationCommentNonCollaborator"
        },
        119: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return r
            }), n.d(e, "c", function() {
                return i
            }), n.d(e, "b", function() {
                return o
            }), n.d(e, "d", function() {
                return a
            }), n.d(e, "f", function() {
                return u
            }), n.d(e, "e", function() {
                return c
            });
            var r = "ADD_PERSON",
                i = "REMOVE_PERSON",
                o = "REMOVE_ALL";

            function a(t, e) {
                return function(n) {
                    n({
                        type: r,
                        item: t,
                        name: e
                    })
                }
            }

            function u(t, e) {
                return function(n) {
                    n({
                        type: i,
                        item: t,
                        name: e
                    })
                }
            }

            function c() {
                return function(t) {
                    t({
                        type: o
                    })
                }
            }
        },
        120: function(t, e, n) {
            "use strict";
            n.d(e, "b", function() {
                return r
            }), n.d(e, "c", function() {
                return i
            }), n.d(e, "a", function() {
                return o
            }), n.d(e, "e", function() {
                return a
            }), n.d(e, "f", function() {
                return u
            }), n.d(e, "d", function() {
                return c
            });
            var r = "REMOVE_AUTHOR_EMAIL",
                i = "SET_AUTHOR_EMAIL",
                o = "CONFIRM_AUTHOR_EMAIL";

            function a(t) {
                return {
                    type: r,
                    authorUid: t
                }
            }

            function u(t, e) {
                return {
                    type: i,
                    authorUid: t,
                    email: e
                }
            }

            function c(t) {
                return {
                    type: o,
                    authorUid: t
                }
            }
        },
        121: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return a
            }), n.d(e, "b", function() {
                return u
            }), n.d(e, "c", function() {
                return c
            }), n.d(e, "e", function() {
                return s
            }), n.d(e, "d", function() {
                return l
            });
            var r = n(6),
                i = n(86),
                o = Object(r.j)("publicationFollowed"),
                a = o("ACTION_FOLLOW_PUBLICATION"),
                u = o("ACTION_UNFOLLOW_PUBLICATION");

            function c(t, e) {
                return function(n) {
                    return n(l(e)), Object(i.b)(t).catch(function() {
                        n(d(e))
                    })
                }
            }

            function s(t, e) {
                return function(n) {
                    return n(d(e)), Object(i.a)(t).catch(function() {
                        n(l(e))
                    })
                }
            }

            function l(t) {
                return {
                    type: a,
                    payload: {
                        publicationUid: t
                    }
                }
            }

            function d(t) {
                return {
                    type: u,
                    payload: {
                        publicationUid: t
                    }
                }
            }
        },
        122: function(t, e, n) {
            "use strict";
            var r = n(1),
                i = n(126),
                o = n.n(i),
                a = n(43),
                u = n(28),
                c = n.n(u),
                s = n(5),
                l = function(t) {
                    function e(e) {
                        var n;
                        return (n = t.call(this, e) || this).isRequestError = !0, n
                    }
                    return Object(s.a)(e, t), e.prototype.shouldSendToKibana = function() {
                        return !0
                    }, e
                }(n(245).a),
                d = n(1443),
                f = function(t) {
                    function e(e) {
                        var n;
                        return (n = t.call(this, d.b) || this).errors = e, n
                    }
                    Object(s.a)(e, t);
                    var n = e.prototype;
                    return n.getMessageForUser = function() {
                        var t = Array.isArray(this.errors) ? this.errors : Object.values(this.errors);
                        return 0 === t.length ? d.c : Array.isArray(t[0]) ? t[0][0] : "string" == typeof t[0] ? t[0] : d.c
                    }, n.shouldSendToKibana = function() {
                        return !1
                    }, e
                }(l),
                p = function(t) {
                    function e(e, n) {
                        var r;
                        return (r = t.call(this, d.a + " " + n) || this).statusCode = e, r.correlationId = n, r
                    }
                    Object(s.a)(e, t);
                    var n = e.prototype;
                    return n.getMessageForUser = function() {
                        return d.d
                    }, n.shouldSendToKibana = function() {
                        return !1
                    }, e
                }(l),
                m = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }
                    return Object(s.a)(e, t), e
                }(l);
            n.d(e, "a", function() {
                return I
            }), n.d(e, "f", function() {
                return y
            }), n.d(e, "b", function() {
                return O
            }), n.d(e, "d", function() {
                return E
            }), n.d(e, "e", function() {
                return A
            }), n.d(e, "c", function() {
                return P
            });
            var h = 0,
                b = new Map;

            function g(t) {
                void 0 === t && (t = {});
                var e, n = {
                        method: "GET",
                        headers: {
                            "Rg-Request-Token": RGCommons.requestToken.get(),
                            "X-Requested-With": "XMLHttpRequest",
                            Accept: "application/json"
                        },
                        credentials: "same-origin"
                    },
                    i = Object(r.a)({}, n, t, {
                        headers: Object(r.a)({}, n.headers, t.headers)
                    });
                return !i.headers["Content-Type"] && ["POST", "PUT", "DELETE", "PATCH"].indexOf(i.method.toUpperCase()) > -1 && (null === i.headers["Content-Type"] ? delete i.headers["Content-Type"] : i.body instanceof FormData || (i.headers["Content-Type"] = "application/json")), null == (e = i.body) || "object" != typeof e || e instanceof FormData || (i.body = function(t, e) {
                    return "application/json" === e ? JSON.stringify(t) : o.a.stringify(t)
                }(i.body, i.headers["Content-Type"])), delete i.query, i
            }

            function v(t, e) {
                var n = Date.now(),
                    i = function(t, e) {
                        var n = Object(r.a)({}, e, {
                            headers: Object(r.a)({}, e.headers)
                        });
                        return delete n.headers["Rg-Request-Token"], t + "__" + JSON.stringify(n)
                    }(t, e);
                if (b.has(i)) return b.get(i);
                RGCommons.activeAjaxRequests++;
                var o = fetch(t, e).then(function(r) {
                    var o = Date.now();
                    if (b.delete(i), RGCommons.performedRequests.log(t, e.method, r, r.status < 400, parseInt(o - n, 10)), r.status >= 400) throw new p(r.status, r.headers.get("x-correlation-id"));
                    if (204 !== r.status) {
                        if ("arraybuffer" === e.forcedResponseType) return r.arrayBuffer();
                        if ("blob" === e.forcedResponseType) return r.blob();
                        if (r.headers.has("Content-Type")) {
                            var a = r.headers.get("Content-Type");
                            if (!a.startsWith(e.headers.Accept)) throw new m("Received content of type " + a + ", expected type to be " + e.headers.Accept + ". URI: " + t);
                            if (a.startsWith("application/json")) return r.json();
                            if (a.startsWith("text/")) return r.text()
                        }
                    }
                    return null
                }).then(function(n) {
                    if (null === n) return null;
                    if ("string" == typeof n) return n;
                    if (n instanceof ArrayBuffer) return n;
                    if (n instanceof Blob) return n;
                    if (n.requestToken && RGCommons.requestToken.update(n.requestToken), n.errors && "csrf-retry" === n.errors[0] && h < 5) return h++, v(t, e);
                    if (!n.success) {
                        var r = new f(n.errors);
                        return n.result.redirect && (r.isRedirect = !0, Object(a.b)(n.result.redirect)), Promise.reject(r)
                    }
                    return RGCommons.activeAjaxRequests--, h = 0, n
                }).catch(function(t) {
                    return b.delete(i), RGCommons.activeAjaxRequests--, Promise.reject(t)
                });
                return b.set(i, o), o
            }

            function y(t, e) {
                return c()(/\/beacon\//.test(t), "sendBeacon calls have to be directed to %s so that CSRF checks are handled properly. Check the provided URL: %s", "/beacon/", t), navigator.sendBeacon(t, e)
            }

            function I(t, e) {
                return void 0 === e && (e = {}), v(t = Object(a.a)(t, e.query), e = g(e))
            }

            function O(t, e, n) {
                return void 0 === n && (n = {}), I(t, Object(r.a)({}, n, {
                    method: "GET",
                    query: e
                }))
            }

            function E(t, e, n) {
                return void 0 === n && (n = {}), I(t, Object(r.a)({}, n, {
                    method: "POST",
                    body: e
                }))
            }

            function A(t, e, n) {
                return void 0 === n && (n = {}), I(t, Object(r.a)({}, n, {
                    method: "PUT",
                    body: e
                }))
            }

            function P(t, e, n) {
                return void 0 === n && (n = {}), I(t, Object(r.a)({}, n, {
                    method: "PATCH",
                    body: e
                }))
            }
        },
        124: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return a
            }), n.d(e, "d", function() {
                return c
            }), n.d(e, "c", function() {
                return s
            }), n.d(e, "b", function() {
                return l
            });
            var r = n(13),
                i = n.n(r),
                o = n(34),
                a = "business",
                u = {
                    accountId: null,
                    accountURL: "",
                    canBeFollowed: null,
                    fullName: "",
                    isActive: null,
                    type: "",
                    isFollowedByCurrentUser: null,
                    profile: {
                        professionalInstitution: null,
                        imageURL: "",
                        imageURL2x: ""
                    },
                    reputation: {
                        score: null
                    }
                },
                c = function(t) {
                    return t.accountsGlobalAccounts
                },
                s = function(t, e) {
                    var n = e.accountId;
                    return i()(t, ["accountsGlobalAccounts", n], u)
                },
                l = function(t) {
                    return Object(o.a)([c, t], function(t, e) {
                        return Array.isArray(e) ? e.map(function(e) {
                            return i()(t, e, u)
                        }) : i()(t, e, u)
                    })
                }
        },
        125: function(t, e, n) {
            "use strict";
            var r = n(3),
                i = n(17),
                o = n.n(i);
            var a = n(26);
            n.d(e, "b", function() {
                return u
            }), n.d(e, "a", function() {
                return c
            }), n.d(e, "c", function() {
                return s
            }), n.d(e, "d", function() {
                return l
            }), n.d(e, "e", function() {
                return d
            });
            var u = "ACTION_BEGIN_LOADING_PUBLIC_PUBLICATION_CITATIONS",
                c = "ACTION_ADD_PUBLIC_PUBLICATION_CITATIONS",
                s = "ACTION_STOP_LOADING_PUBLIC_PUBLICATION_CITATIONS",
                l = "publicliteratureCitations";

            function d(t, e, n) {
                return function(i, d) {
                    var f = d()[l].nextOffset;
                    i({
                            type: u
                        }),
                        function(t) {
                            var e = t.publicationUid,
                                n = t.offset,
                                i = t.limit,
                                a = t.extendCitationContext;
                            return Object(r.default)("publicliterature.LegacyPublicationCitationList.loadPublicPublications.html", {
                                method: "GET",
                                query: {
                                    publicationUid: e,
                                    offset: n,
                                    limit: i,
                                    extendCitationContext: a
                                }
                            }).then(o()("result"))
                        }({
                            publicationUid: t,
                            offset: f,
                            limit: e,
                            extendCitationContext: n
                        }).then(function(t) {
                            i(function(t, e) {
                                return {
                                    type: c,
                                    items: t.items,
                                    itemEntities: t.itemEntities,
                                    nextOffset: e
                                }
                            }(t[l], f + e))
                        }).catch(function(t) {
                            Object(a.default)(t), i({
                                type: s
                            })
                        })
                }
            }
        },
        128: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return i
            }), n.d(e, "b", function() {
                return o
            });
            var r = n(6),
                i = Object(r.j)("keywordSelect")("ADD_KEYWORD_OPTIONS");

            function o(t) {
                return {
                    type: i,
                    options: t
                }
            }
        },
        129: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return r
            }), n.d(e, "b", function() {
                return i
            });
            var r = "ADD_MORE_GLOBAL_AUTHORS";

            function i(t) {
                return {
                    type: r,
                    authors: t
                }
            }
        },
        130: function(t, e, n) {
            "use strict";
            n.d(e, "b", function() {
                return u
            }), n.d(e, "c", function() {
                return c
            }), n.d(e, "a", function() {
                return s
            }), n.d(e, "f", function() {
                return l
            }), n.d(e, "g", function() {
                return d
            }), n.d(e, "e", function() {
                return f
            }), n.d(e, "d", function() {
                return p
            });
            var r = n(1),
                i = n(6),
                o = n(203),
                a = Object(i.j)("publicationCreation"),
                u = a("UPDATE_PUBLICATION_DATA"),
                c = a("UPDATE_PUBLICATION_RELATION"),
                s = a("UPDATE_PUBLICATION_CREATION_STEP_INDEX");

            function l(t) {
                return {
                    type: u,
                    payload: Object(r.a)({}, t)
                }
            }

            function d(t) {
                return {
                    type: c,
                    payload: Object(r.a)({}, t)
                }
            }

            function f(t) {
                return {
                    type: s,
                    payload: {
                        stepIndex: t
                    }
                }
            }

            function p(t) {
                return function(e) {
                    return Object(o.k)(t).then(function(t) {
                        t.invitableAuthors && e(l({
                            invitableAuthors: t.invitableAuthors
                        }))
                    }).catch(function() {})
                }
            }
        },
        131: function(t, e, n) {
            "use strict";
            var r = n(3),
                i = n(17),
                o = n.n(i);
            n.d(e, "c", function() {
                return a
            }), n.d(e, "b", function() {
                return u
            }), n.d(e, "a", function() {
                return c
            }), n.d(e, "f", function() {
                return l
            }), n.d(e, "d", function() {
                return d
            }), n.d(e, "e", function() {
                return f
            });
            var a = "SET_IS_BUSY_REFRESHING",
                u = "ACTION_DASHBORD_COUNTERS_REFRESHED",
                c = "ACTION_ACTIVE_USER_COUNT_REFRESHED";

            function s(t) {
                return {
                    type: a,
                    isBusy: t
                }
            }

            function l() {
                return function(t) {
                    t(s(!0)), Object(r.default)("admindashboard.DashboardTVGrowth.getCounter.html", {
                        method: "GET"
                    }).then(o()("result")).then(function(e) {
                        t({
                            type: u,
                            activeAccountCount: e.activeAccountCount,
                            accountActivationsDaily: e.accountActivationsDaily,
                            accountActivationsWeekly: e.accountActivationsWeekly,
                            invitationActivationsDaily: e.invitationActivationsDaily,
                            invitationActivationsWeekly: e.invitationActivationsWeekly,
                            accountActivationsDailyPast: e.accountActivationsDailyPast,
                            accountActivationsWeeklyPast: e.accountActivationsWeeklyPast,
                            invitationActivationsDailyPast: e.invitationActivationsDailyPast,
                            invitationActivationsWeeklyPast: e.invitationActivationsWeeklyPast
                        }), t(s(!1))
                    }).catch(function() {
                        t(s(!1))
                    })
                }
            }

            function d(t) {
                return p(1, t)
            }

            function f(t) {
                return p(7, t)
            }

            function p(t, e) {
                return function(n) {
                    n(s(!0)),
                        function(t) {
                            return Object(r.default)("admindashboard.DashboardActivityProportions.ajaxGetActiveNumber.html", {
                                method: "POST",
                                query: {
                                    timeRange: t
                                }
                            }).then(o()("result"))
                        }(t).then(function(t) {
                            var r = {
                                type: c
                            };
                            r[e] = t.total, n(r), n(s(!1))
                        }).catch(function() {
                            n(s(!1))
                        })
                }
            }
        },
        132: function(t, e, n) {
            "use strict";
            var r = n(3),
                i = n(55),
                o = n.n(i),
                a = "/likes/api/like",
                u = "/likes/api/unlike";
            n.d(e, "a", function() {
                return c
            }), n.d(e, "b", function() {
                return s
            }), n.d(e, "c", function() {
                return d
            }), n.d(e, "d", function() {
                return f
            });
            var c = "ACTION_OBJECT_LIKE",
                s = "ACTION_OBJECT_UNLIKE";

            function l(t) {
                return t.accountsGlobalCurrentAccount.id
            }

            function d(t, e, n) {
                return void 0 === n && (n = []),
                    function(i, u) {
                        var d = l(u());
                        return i({
                                type: c,
                                id: t,
                                context: e,
                                accountId: d
                            }),
                            function(t, e, n) {
                                return void 0 === n && (n = []), Object(r.default)(a, {
                                    method: "POST",
                                    query: {
                                        id: t,
                                        context: e,
                                        _iepl: n
                                    }
                                }).then(o()("result"))
                            }(t, e, n).catch(function() {
                                return i({
                                    type: s,
                                    id: t,
                                    context: e,
                                    accountId: d
                                })
                            })
                    }
            }

            function f(t, e) {
                return void 0 === e && (e = []),
                    function(n, i) {
                        var a = l(i());
                        return n({
                                type: s,
                                id: t,
                                context: e,
                                accountId: a
                            }),
                            function(t, e) {
                                return void 0 === e && (e = []), Object(r.default)(u, {
                                    method: "POST",
                                    query: {
                                        id: t,
                                        context: e
                                    }
                                }).then(o()("result"))
                            }(t, e).catch(function() {
                                return n({
                                    type: c,
                                    id: t,
                                    context: e,
                                    accountId: a
                                })
                            })
                    }
            }
        },
        1324: function(t, e, n) {
            "use strict";
            var r = n(5),
                i = n(0),
                o = n.n(i),
                a = n(16);
            e.a = function(t) {
                var e = function(e) {
                    function n() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(r)) || this).state = {
                            isMounted: !1
                        }, t
                    }
                    Object(r.a)(n, e);
                    var i = n.prototype;
                    return i.componentDidMount = function() {
                        this.setState({
                            isMounted: !0
                        })
                    }, i.render = function() {
                        return this.state.isMounted ? o.a.createElement(t, this.props) : o.a.createElement("noscript", null)
                    }, n
                }(i.Component);
                return e.displayName = "RenderOnClient", e.displayName = Object(a.wrapDisplayName)(t, "renderOnClient"), e
            }
        },
        133: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return a
            }), n.d(e, "b", function() {
                return u
            }), n.d(e, "c", function() {
                return c
            });
            var r = n(4),
                i = n.n(r),
                o = n(3),
                a = "hide_login_promo",
                u = "not_me_login_promo";

            function c(t, e) {
                return Object(o.default)(e.notMeUrl, {
                    method: "GET",
                    query: {}
                }), t = i()("isVisible", !1, t), i()("show", !1, t)
            }
        },
        134: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return r
            });
            var r = function() {
                function t() {
                    this.data = {}, this.loading = {}
                }
                var e = t.prototype;
                return e.getData = function(t) {
                    return this.data[t]
                }, e.addData = function(t) {
                    Object.assign(this.data, t)
                }, e.addWidgetData = function(t, e) {
                    this.data[t] = e
                }, e.addWidgetTree = function(t) {
                    var e = this;
                    if (t && "object" == typeof t && (t._isYUI || Object.keys(t).forEach(function(n) {
                            t[n] = e.addWidgetTree(t[n])
                        }), t.templateName)) {
                        var n = t.id;
                        return this.addWidgetData(n, t), n
                    }
                    return t
                }, e.removeWidgetTree = function(t) {
                    delete this.data[t]
                }, e.registerWidgetLoading = function(t) {
                    t && (this.loading[t] = 1)
                }, e.isWidgetLoading = function(t) {
                    return 1 === this.loading[t]
                }, e.unregisterWidgetLoading = function(t) {
                    t && delete this.loading[t]
                }, t
            }()
        },
        136: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return r
            }), n.d(e, "b", function() {
                return i
            });
            var r = "ADD_MORE_GLOBAL_PUBLICATION_COUNTERS";

            function i(t) {
                return {
                    type: r,
                    counters: t
                }
            }
        },
        137: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return r
            }), n.d(e, "b", function() {
                return i
            });
            var r = "ADD_MORE_GLOBAL_PUBLICATION_AUTHORS";

            function i(t) {
                var e = t.authors,
                    n = t.totalCounts,
                    i = t.mappings;
                return {
                    type: r,
                    authors: e,
                    totalCounts: n,
                    mappings: i
                }
            }
        },
        138: function(t, e, n) {
            "use strict";
            n.d(e, "c", function() {
                return r
            }), n.d(e, "b", function() {
                return i
            }), n.d(e, "a", function() {
                return o
            }), n.d(e, "f", function() {
                return a
            }), n.d(e, "e", function() {
                return u
            }), n.d(e, "d", function() {
                return c
            });
            var r = "ACTION_SELECT_PUBLICATION_AS_PROJECT_REFERENCES",
                i = "ACTION_DESELECT_PUBLICATION_AS_PROJECT_REFERENCES",
                o = "ACTION_DESELECT_ALL_PUBLICATION_AS_PROJECT_REFERENCES";

            function a(t) {
                return {
                    type: r,
                    payload: {
                        publication: t
                    }
                }
            }

            function u(t) {
                return {
                    type: i,
                    payload: {
                        publication: t
                    }
                }
            }

            function c() {
                return {
                    type: o
                }
            }
        },
        139: function(t, e, n) {
            "use strict";
            var r = n(6),
                i = n(3);
            n.d(e, "a", function() {
                return a
            }), n.d(e, "b", function() {
                return u
            }), n.d(e, "c", function() {
                return c
            }), n.d(e, "d", function() {
                return s
            });
            var o = Object(r.j)("publication/feedbackRequests"),
                a = o("ADD_FEEDBACK_REQUEST"),
                u = o("REMOVE_FEEDBACK_REQUEST"),
                c = o("SET_FEEDBACK_REQUEST_PROGRESS"),
                s = function(t) {
                    var e = t.publicationUid,
                        n = t.context,
                        r = t.feedbackRequestMessage,
                        o = t.ids;
                    return function(t) {
                        return t({
                                type: c,
                                payload: {
                                    publicationUid: e,
                                    processing: !0
                                }
                            }),
                            function(t) {
                                var e = t.publicationUid,
                                    n = t.context,
                                    r = t.feedbackRequestMessage,
                                    o = t.ids;
                                return Object(i.default)("publication.PublicationFeedbackEndpoint.addRequest.html", {
                                    method: "POST",
                                    query: {
                                        publicationUid: e,
                                        context: n,
                                        feedbackRequestMessage: r,
                                        ids: o
                                    }
                                })
                            }({
                                publicationUid: e,
                                context: n,
                                feedbackRequestMessage: r,
                                ids: o
                            }).then(function() {
                                return t({
                                    type: c,
                                    payload: {
                                        publicationUid: e,
                                        processing: !1
                                    }
                                }), t({
                                    type: a,
                                    payload: {
                                        publicationUid: e,
                                        context: n,
                                        feedbackRequestMessage: r,
                                        ids: o
                                    }
                                })
                            }).catch(function(i) {
                                return t({
                                    type: c,
                                    payload: {
                                        publicationUid: e,
                                        processing: !1
                                    }
                                }), t({
                                    type: u,
                                    payload: {
                                        publicationUid: e,
                                        context: n,
                                        feedbackRequestMessage: r,
                                        ids: o
                                    }
                                }).then(function() {
                                    return Promise.reject(i)
                                })
                            })
                    }
                }
        },
        1396: function(t, e, n) {},
        141: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return s
            }), n.d(e, "b", function() {
                return d
            }), n.d(e, "c", function() {
                return f
            }), n.d(e, "d", function() {
                return p
            }), n.d(e, "e", function() {
                return m
            });
            var r = n(13),
                i = n.n(r),
                o = n(111),
                a = n.n(o),
                u = n(124),
                c = n(34),
                s = {
                    liked: !1,
                    total: 0,
                    accountIds: []
                },
                l = function(t) {
                    return t.likesLikes
                },
                d = function(t) {
                    return Object(c.a)([l, t], function(t, e) {
                        return i()(t, e, s)
                    })
                },
                f = function(t, e) {
                    return i()(t, ["likesLikes", e], s)
                },
                p = function(t, e) {
                    return f(t, e).liked
                },
                m = function() {
                    return Object(c.a)(f, u.d, function(t, e) {
                        return a()(t.accountIds, function(t) {
                            return e[t]
                        })
                    })
                }
        },
        1414: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return i
            }), n.d(e, "b", function() {
                return o
            }), n.d(e, "c", function() {
                return a
            }), n.d(e, "d", function() {
                return u
            });
            var r = n(657),
                i = "GRANT_OVERVIEW_PAGE.SET_ACTIVE_TAB",
                o = "GRANT_OVERVIEW_PAGE.SET_NAVIGATION_MILESTONES";
            r.h, r.k, r.j, r.i;

            function a(t) {
                return {
                    type: i,
                    activeTabName: t
                }
            }

            function u(t) {
                return {
                    type: o,
                    navigationMilestones: t
                }
            }
        },
        144: function(t, e, n) {
            "use strict";
            var r = n(192),
                i = n(0),
                o = n.n(i),
                a = function() {
                    return o.a.createElement("div", {
                        className: "rendering"
                    })
                };
            n.d(e, "b", function() {
                return r.a
            }), n.d(e, "a", function() {
                return a
            })
        },
        1443: function(t, e, n) {
            "use strict";
            n.d(e, "e", function() {
                return r
            }), n.d(e, "f", function() {
                return i
            }), n.d(e, "a", function() {
                return o
            }), n.d(e, "d", function() {
                return a
            }), n.d(e, "c", function() {
                return u
            }), n.d(e, "b", function() {
                return c
            });
            var r = "It looks like something went wrong.",
                i = "We're working on the problem and we'll get it fixed as soon as possible.",
                o = "Bad response from server",
                a = "Unexpected error occurred.",
                u = "Unexpected error occurred. Operation could not be completed.",
                c = "PHP Request returned errors"
        },
        146: function(t, e, n) {
            "use strict";
            var r = n(6),
                i = n(0),
                o = n.n(i),
                a = n(60),
                u = n(3),
                c = "publictopics.PostFeedItem.follow.html",
                s = "publictopics.PostFeedItem.unfollow.html";
            var l = n(20),
                d = n(70);

            function f(t, e) {
                return function(n) {
                    return function(t, e) {
                        return Object(u.default)(c, {
                            method: "POST",
                            body: {
                                _iepl: e,
                                postId: t
                            }
                        }).then(function(t) {
                            if (!t.result) throw new Error(t.message);
                            return t.result
                        })
                    }(t, e).then(function() {
                        Object(d.b)("follow", t), n(Object(l.pushAlert)(function() {
                            return o.a.createElement(a.a, {
                                title: "You are now following this content"
                            })
                        }))
                    })
                }
            }

            function p(t) {
                return function(e) {
                    return function(t) {
                        return Object(u.default)(s, {
                            method: "POST",
                            body: {
                                postId: t
                            }
                        }).then(function(t) {
                            if (!t.result) throw new Error(t.message);
                            return t.result
                        })
                    }(t).then(function() {
                        e(Object(l.pushAlert)(function() {
                            return o.a.createElement(a.a, {
                                title: "You are no longer following this content"
                            })
                        }))
                    })
                }
            }
            n.d(e, "a", function() {
                return h
            }), n.d(e, "b", function() {
                return b
            }), n.d(e, "c", function() {
                return g
            }), n.d(e, "d", function() {
                return v
            });
            var m = Object(r.j)("topicsFollow"),
                h = m("ACTION_FOLLOW"),
                b = m("ACTION_UNFOLLOW"),
                g = function(t, e) {
                    return function(n) {
                        return n({
                            type: h,
                            payload: {
                                postId: t
                            }
                        }), f(t, e)(n).catch(function() {
                            n({
                                type: b,
                                payload: {
                                    postId: t
                                }
                            })
                        })
                    }
                },
                v = function(t) {
                    return function(e) {
                        return e({
                            type: b,
                            payload: {
                                postId: t
                            }
                        }), p(t)(e).catch(function() {
                            e({
                                type: h,
                                payload: {
                                    postId: t
                                }
                            })
                        })
                    }
                }
        },
        149: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return a
            });
            var r = n(0),
                i = n.n(r),
                o = (n(2), n(91));

            function a(t) {
                var e = t.error,
                    n = "";
                return "function" == typeof e.getMessageForUser ? n = e.getMessageForUser() : e && e.errors && e.errors.length > 0 && (n = e.errors[0]), i.a.createElement(o.a, {
                    title: "An error occurred",
                    description: n
                })
            }
        },
        152: function(t, e, n) {
            "use strict";
            n.d(e, "b", function() {
                return o
            }), n.d(e, "a", function() {
                return a
            }), n.d(e, "d", function() {
                return u
            }), n.d(e, "c", function() {
                return c
            });
            var r = n(6),
                i = Object(r.j)("globalSidebar"),
                o = i("SET_SIDEBAR_IS_OPEN"),
                a = i("ADD_PROJECT_URL_PARAMS");

            function u(t, e) {
                return {
                    type: o,
                    payload: {
                        isOpen: t,
                        origin: e
                    }
                }
            }

            function c(t) {
                return void 0 === t && (t = {}), {
                    type: a,
                    payload: t
                }
            }
        },
        153: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return r
            }), n.d(e, "b", function() {
                return i
            }), n.d(e, "c", function() {
                return o
            }), n.d(e, "d", function() {
                return a
            });
            var r = "ADD_PUBLICATION",
                i = "REMOVE_PUBLICATION";

            function o(t) {
                return {
                    type: r,
                    publication: t
                }
            }

            function a(t) {
                return {
                    type: i,
                    publication: t
                }
            }
        },
        154: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return r
            }), n.d(e, "b", function() {
                return i
            }), n.d(e, "c", function() {
                return o
            }), n.d(e, "d", function() {
                return a
            });
            var r = "SET_FILTER_TYPE",
                i = "SET_PENDING_REQUESTS_FILTER_TYPE";

            function o(t) {
                return function(e) {
                    e({
                        type: r,
                        filterType: t
                    })
                }
            }

            function a(t) {
                return function(e) {
                    e({
                        type: i,
                        pendingRequestsFilterType: t
                    })
                }
            }
        },
        155: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return r
            }), n.d(e, "b", function() {
                return i
            }), n.d(e, "c", function() {
                return o
            }), n.d(e, "d", function() {
                return a
            });
            var r = "CARD_SELECTED",
                i = "CARD_UNSELECTED";

            function o(t) {
                return function(e) {
                    e({
                        type: r,
                        cardId: t
                    })
                }
            }

            function a(t) {
                return function(e) {
                    e({
                        type: i,
                        cardId: t
                    })
                }
            }
        },
        156: function(t, e, n) {
            "use strict";
            var r = n(6),
                i = n(3),
                o = n(55),
                a = n.n(o),
                u = (n(14), "/converse/api/mention");
            var c = n(45),
                s = n(72);
            n.d(e, "b", function() {
                return d
            }), n.d(e, "a", function() {
                return f
            }), n.d(e, "c", function() {
                return p
            });
            var l = Object(r.j)("converseMentions"),
                d = l("ACTION_START_LOADING_PEOPLE"),
                f = l("ACTION_FINISH_LOADING_PEOPLE");

            function p(t) {
                return function(e) {
                    return new Promise(function(n, o) {
                        (function(t) {
                            var e = t.trim(),
                                n = Object(r.h)(e);
                            return Object(i.default)(u + "/parseUrl", {
                                query: {
                                    url: e,
                                    internalUrl: n ? 1 : 0
                                }
                            }).then(a()("result"))
                        })(t).then(function(t) {
                            switch (t.type) {
                                case "publication":
                                    e(Object(s.c)(t.publicationGlobalPublications)), n({
                                        type: "publication",
                                        publicationUid: t.publicationUid,
                                        publicationTitle: t.publicationTitle,
                                        publicationType: t.publicationType,
                                        externalUrl: t.externalUrl
                                    });
                                    break;
                                case "account":
                                    e(Object(c.b)(t.accountsGlobalAccounts)), n({
                                        type: "account",
                                        accountId: t.accountId,
                                        accountFullName: t.accountFullName
                                    });
                                    break;
                                default:
                                    n({
                                        type: "unknown"
                                    })
                            }
                        }).catch(function(t) {
                            o(t)
                        })
                    })
                }
            }
        },
        157: function(t, e, n) {
            "use strict";
            var r = n(3);
            n.d(e, "a", function() {
                return i
            }), n.d(e, "b", function() {
                return o
            }), n.d(e, "c", function() {
                return a
            });
            var i = "ADD_MORE_RECOMMENDATIONS",
                o = 4;

            function a(t, e, n, o) {
                return function(a, u) {
                    (function(t, e, n, i, o) {
                        return Object(r.default)("recommendations.CarouselFollowerSuggestions.loadMore.html", {
                            method: "GET",
                            query: {
                                accountKey: t,
                                seenAccountKeys: e,
                                source: n,
                                payload: i,
                                suggestionType: o
                            }
                        }).then(function(t) {
                            if (!t.result) throw new Error("Server did not return recommendations.");
                            return t.result
                        })
                    })(t, u().recommendationsCarouselFollowerSuggestions.items.map(function(t) {
                        return t.account.accountKey
                    }), e, n, o).then(function(t) {
                        t.carouselFollowerSuggestions && t.carouselFollowerSuggestions.items && a({
                            type: i,
                            items: t.carouselFollowerSuggestions.items
                        }), t.recommendationsCarouselFollowerSuggestions && t.recommendationsCarouselFollowerSuggestions.items && a({
                            type: i,
                            items: t.recommendationsCarouselFollowerSuggestions.items
                        })
                    })
                }
            }
        },
        158: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return r
            }), n.d(e, "b", function() {
                return i
            }), n.d(e, "c", function() {
                return o
            });
            var r = "GRANT_OPPORTUNITY_PAGE.SET_ACTIVE_TAB",
                i = "overview";

            function o(t) {
                return {
                    type: r,
                    activeTabName: t
                }
            }
        },
        160: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return c
            }), n.d(e, "b", function() {
                return s
            });
            var r = n(3),
                i = n(127),
                o = n.n(i),
                a = n(198),
                u = n.n(a);

            function c(t, e, n, i, a) {
                return void 0 === e && (e = null), void 0 === n && (n = null), void 0 === i && (i = null), void 0 === a && (a = null), Object(r.default)("browse.Browse.ajaxFollow.html", {
                    method: "POST",
                    query: o()({
                        id: t,
                        ev: e,
                        experimentGoal: n,
                        experimentViewId: i,
                        _iepl: a
                    }, u.a)
                })
            }

            function s(t, e, n) {
                return void 0 === e && (e = null), void 0 === n && (n = null), Object(r.default)("browse.Browse.ajaxToggleFollow.html", {
                    method: "POST",
                    query: o()({
                        id: t,
                        ev: e,
                        _iepl: n
                    }, u.a)
                })
            }
        },
        161: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return i
            }), n.d(e, "e", function() {
                return o
            }), n.d(e, "b", function() {
                return a
            }), n.d(e, "c", function() {
                return u
            }), n.d(e, "d", function() {
                return c
            });
            var r = "recommendationsFollowSuggestionsPromo",
                i = function(t) {
                    return Object.values(t[r].items).sort(function(t, e) {
                        return t.order - e.order
                    })
                },
                o = function(t) {
                    return i(t).filter(function(t) {
                        return t.isSkipped
                    })
                },
                a = function(t) {
                    return i(t).filter(function(t) {
                        return !t.isProcessed && !t.isSkipped
                    })
                },
                u = function(t) {
                    return t[r].hasMoreSuggestions
                },
                c = function(t) {
                    return t[r].isRequestInProgress
                }
        },
        163: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return a
            }), n.d(e, "c", function() {
                return u
            }), n.d(e, "b", function() {
                return d
            });
            var r = n(3),
                i = n(77),
                o = n.n(i),
                a = "REQUEST_COUNTERS_UPDATED",
                u = {
                    fulfilledCount: 0,
                    outgoingPendingCount: 0,
                    outgoingFulfilledCount: 0
                },
                c = "messages.NotificationCenter.getRequestCounters.html",
                s = "requestCounters:1",
                l = 4;

            function d() {
                return function(t) {
                    var e = o.a.get(s);
                    e ? t(f(e)) : Object(r.default)(c, {}).then(function(e) {
                        o.a.set(s, e.result, l), t(f(e.result))
                    }).catch(function() {
                        t(f(u))
                    })
                }
            }

            function f(t) {
                return function(e) {
                    e({
                        type: a,
                        counters: t
                    })
                }
            }
        },
        164: function(t, e, n) {
            "use strict";
            n.d(e, "b", function() {
                return o
            }), n.d(e, "a", function() {
                return a
            }), n.d(e, "d", function() {
                return u
            }), n.d(e, "c", function() {
                return c
            });
            var r = n(6),
                i = Object(r.j)("statsReport"),
                o = i("SET_STICKY_HEADER"),
                a = i("SET_FILTER");

            function u(t) {
                return {
                    type: o,
                    payload: {
                        isSticky: t
                    }
                }
            }

            function c(t) {
                var e = t.filter;
                return {
                    type: a,
                    payload: {
                        filter: e
                    }
                }
            }
        },
        165: function(t, e, n) {
            "use strict";
            n.d(e, "b", function() {
                return o
            }), n.d(e, "a", function() {
                return a
            }), n.d(e, "d", function() {
                return u
            }), n.d(e, "c", function() {
                return c
            });
            var r = n(6),
                i = Object(r.j)("projectsDiscussions"),
                o = i("ACTION_SHOW_QUESTION_FORM"),
                a = i("ACTION_HIDE_QUESTION_FORM");

            function u() {
                return {
                    type: o
                }
            }

            function c() {
                return {
                    type: a
                }
            }
        },
        166: function(t, e, n) {
            "use strict";
            n.d(e, "b", function() {
                return r
            }), n.d(e, "a", function() {
                return i
            }), n.d(e, "d", function() {
                return o
            }), n.d(e, "c", function() {
                return a
            });
            var r = "SET_REINVITED",
                i = "BLACKLIST_AUTHOR_SUGGESTION";

            function o(t) {
                return {
                    type: r,
                    invitationKey: t
                }
            }

            function a(t, e, n) {
                return void 0 === n && (n = !0), {
                    type: i,
                    invitationKey: t,
                    authorUid: e,
                    shouldRemove: n
                }
            }
        },
        167: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return o
            }), n.d(e, "b", function() {
                return a
            }), n.d(e, "c", function() {
                return u
            }), n.d(e, "d", function() {
                return c
            });
            var r = n(6),
                i = Object(r.j)("chartInteraction"),
                o = i("ADD_INTERACTION"),
                a = i("REMOVE_INTERACTION");

            function u(t) {
                return function(e) {
                    return {
                        type: o,
                        payload: {
                            chartId: t,
                            interaction: e
                        }
                    }
                }
            }

            function c(t) {
                return function() {
                    return {
                        type: a,
                        payload: {
                            chartId: t
                        }
                    }
                }
            }
        },
        170: function(t, e, n) {
            "use strict";
            n.d(e, "b", function() {
                return o
            }), n.d(e, "a", function() {
                return a
            }), n.d(e, "d", function() {
                return u
            }), n.d(e, "c", function() {
                return c
            });
            var r = n(6),
                i = Object(r.j)("publicationEdit"),
                o = i("AUTHORS_HAVE_ERRORS"),
                a = i("AUTHOR_EDIT_REQUEST_OPEN");

            function u(t) {
                return {
                    type: o,
                    payload: {
                        hasUserDeletedTheySelf: t
                    }
                }
            }

            function c(t) {
                return {
                    type: a,
                    payload: {
                        isAuthorEditRequestOpen: t
                    }
                }
            }
        },
        171: function(t, e, n) {
            "use strict";
            var r = n(3);
            var i = n(6);
            n.d(e, "a", function() {
                return a
            }), n.d(e, "b", function() {
                return u
            });
            var o = Object(i.j)("publicationPersonalFeedbackRequest"),
                a = {
                    ADD_PUBLICATION_PERSONAL_FEEDBACK_REQUESTS: o("ADD_PUBLICATION_PERSONAL_FEEDBACK_REQUESTS"),
                    REMOVE_PUBLICATION_PERSONAL_FEEDBACK_REQUEST: o("REMOVE_PUBLICATION_PERSONAL_FEEDBACK_REQUEST")
                };

            function u(t) {
                var e = t.publicationUid,
                    n = t.targetAccountIds,
                    i = t.context,
                    o = t.type,
                    u = t.message,
                    c = t.ids,
                    s = t.suggestionLogEntryId;
                return function(t) {
                    return function(t) {
                        var e = t.publicationUid,
                            n = t.targetAccountIds,
                            i = t.context,
                            o = t.type,
                            a = t.message,
                            u = t.ids,
                            c = t.suggestionLogEntryId;
                        return Object(r.default)("publication.PublicationPersonalFeedbackEndpoint.addPublicationPersonalFeedbackRequests.html", {
                            method: "POST",
                            query: {
                                publicationUid: e,
                                targetAccountIds: n,
                                context: i,
                                type: o,
                                message: a,
                                ids: u,
                                suggestionLogEntryId: c
                            }
                        }).then(function(t) {
                            if (!t.success) throw new Error("Unable to post personal feedback.");
                            return t.result
                        })
                    }({
                        publicationUid: e,
                        targetAccountIds: n,
                        context: i,
                        type: o,
                        message: u,
                        ids: c,
                        suggestionLogEntryId: s
                    }).then(function() {
                        return t({
                            type: a.ADD_PUBLICATION_PERSONAL_FEEDBACK_REQUESTS,
                            payload: {
                                publicationUid: e,
                                targetAccountIds: n,
                                context: i,
                                type: o,
                                message: u,
                                ids: c,
                                suggestionLogEntryId: s
                            }
                        })
                    })
                }
            }
        },
        172: function(t, e, n) {
            "use strict";
            (function(t) {
                n.d(e, "a", function() {
                    return r
                });
                var r;
                n(28);
                ! function(t) {
                    if (r = "sessionStorage" in t, "localStorage" in t) {
                        var e = "rg-session_storage.test-key";
                        try {
                            var n = t.localStorage;
                            n.setItem(e, "rg"), n.removeItem(e)
                        } catch (t) {
                            !1
                        }
                    }
                    if (r) {
                        var i = "rg-local_storage.test-key";
                        try {
                            var o = t.sessionStorage;
                            o.setItem(i, "rg"), o.removeItem(i)
                        } catch (t) {
                            r = !1
                        }
                    }
                }("undefined" != typeof window ? window : t)
            }).call(this, n(388))
        },
        1743: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return o
            }), n.d(e, "default", function() {
                return a
            });
            var r = n(1),
                i = n(1414),
                o = {
                    activeTabName: n(657).k,
                    navigationMilestones: {}
                };

            function a(t, e) {
                switch (void 0 === t && (t = o), void 0 === e && (e = {}), e.type) {
                    case i.a:
                        return Object(r.a)({}, t, {
                            activeTabName: e.activeTabName
                        });
                    case i.b:
                        return Object(r.a)({}, t, {
                            navigationMilestones: e.navigationMilestones
                        })
                }
                return t
            }
        },
        175: function(t, e, n) {
            "use strict";
            var r = n(51),
                i = n.n(r),
                o = function(t) {
                    return i()(t).format()
                },
                a = function(t, e) {
                    return i()(t ? e / t : 0).format("0.00%")
                },
                u = function(t) {
                    return i()(t).format("0,0.00")
                },
                c = function(t) {
                    return i()(t).format("0,0")
                },
                s = function(t) {
                    return i()(t).format("0[.]00 b")
                };
            n.d(e, "d", function() {
                return o
            }), n.d(e, "e", function() {
                return a
            }), n.d(e, "c", function() {
                return u
            }), n.d(e, "a", function() {
                return c
            }), n.d(e, "b", function() {
                return s
            })
        },
        18: function(t, e, n) {
            "use strict";
            var r = n(188);
            n.d(e, "a", function() {
                return r.a
            })
        },
        182: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(1),
                i = n(227),
                o = n.n(i),
                a = n(1888),
                u = n(48),
                c = n.n(u),
                s = n(407),
                l = n(1441),
                d = n(462),
                f = {
                    parse: function(t) {
                        return new Date(t).valueOf()
                    },
                    format: function(t) {
                        return Object(l.default)(Object(d.a)(t), "y-MM-dd")
                    }
                },
                p = n(6);
            n.d(e, "handleValidationErrors", function() {
                return h
            }), n.d(e, "createValidator", function() {
                return b
            }), n.d(e, "fixFlatErrorStructure", function() {
                return g
            }), o.a.options = {
                fullMessages: !1
            }, o.a.validators.imageFile = s.b, o.a.extend(o.a.validators.datetime, f);
            var m = function(t) {
                    return Object.keys(t).reduce(function(e, n) {
                        var r = function(t, e) {
                            for (var n = {}, r = n, i = t.replace("[", ".").replace("]", "").split("."), o = 0; o < i.length - 1; o++) n = n[i[o]] = {};
                            return n[i[i.length - 1]] = e, r
                        }(n, Array.isArray(t[n]) ? t[n][0] : t[n]);
                        return c()(e, r)
                    }, {})
                },
                h = function(t) {
                    if (t.errors && !Array.isArray(t.errors) && Object.keys(t.errors).length) throw new a.a(m(t.errors));
                    throw t
                },
                b = function(t) {
                    return function(e) {
                        var n = o()(e, "function" == typeof t ? t(e) : t);
                        return n ? m(n) : {}
                    }
                };

            function g(t) {
                return t instanceof a.a && t.errors && !Array.isArray(t.errors) && Object.keys(t.errors).forEach(function(e) {
                    e.includes(".") && (t.errors = Object(r.a)({}, t.errors, Object(p.e)(e, t.errors[e])), delete t.errors[e])
                }), t
            }
        },
        183: function(t, e, n) {
            "use strict";
            var r = n(19),
                i = n(5),
                o = n(1),
                a = n(0),
                u = n.n(a),
                c = n(174),
                s = n(28),
                l = n.n(s),
                d = n(93),
                f = n.n(d),
                p = n(6),
                m = n(11),
                h = (n(2), n(249)),
                b = n(87),
                g = n(26),
                v = Object(h.a)(void 0, !1),
                y = v.Slot,
                I = v.Fill,
                O = Object(a.createContext)(),
                E = O.Provider,
                A = O.Consumer;
            E.propTypes = c.a.propTypes;
            var P = function(t) {
                function e() {
                    for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    return (e = t.call.apply(t, [this].concat(r)) || this).hasRenderedFill = !1, e.state = {
                        isOpen: !0
                    }, e.handleLoad = function() {
                        e.guardTimeout = setTimeout(function() {
                            try {
                                l()(e.hasRenderedFill, "mountAsyncModal: The AsyncWidget component loaded '" + e.props.url + "', but it never received any contents from the async. modal. Please make sure you're using the Modal component from 'common/components/AsyncModal' instead of Nova's\n                        and that the components inside the modal can be rendered.")
                            } catch (t) {
                                Object(g.default)(t), e.setState({
                                    hasError: !0
                                })
                            }
                        }, 2500), e.props.onLoad()
                    }, e.handleError = function() {
                        e.props.onError()
                    }, e.handleClose = function(t) {
                        e.setState({
                            isOpen: !1
                        }, "function" == typeof t ? t : void 0)
                    }, e.slotRenderer = function(t) {
                        var n = t.children;
                        if (void 0 !== n) return e.hasRenderedFill = !0, n;
                        var r = e.props.modalProps;
                        return u.a.createElement(c.a, Object(m.a)({
                            width: "s"
                        }, r, {
                            isOpen: !0,
                            isCloseable: !1,
                            scope: "local",
                            status: "busy"
                        }))
                    }, e
                }
                Object(i.a)(e, t);
                var n = e.prototype;
                return n.componentWillUnmount = function() {
                    clearTimeout(this.guardTimeout)
                }, n.render = function() {
                    if (this.state.hasError) return null;
                    var t = this.props,
                        e = t.url,
                        n = t.widgetParams,
                        i = t.loadComponentInternalDoNotSetOrYouWillBeFired,
                        a = t.hmrAcceptInternalDoNotSetOrYouWillBeFired,
                        c = Object(r.a)(t, ["url", "widgetParams", "loadComponentInternalDoNotSetOrYouWillBeFired", "hmrAcceptInternalDoNotSetOrYouWillBeFired"]),
                        s = c.modalProps,
                        l = Object(r.a)(c, ["modalProps"]),
                        d = Object(o.a)({}, s, {
                            isOpen: this.state.isOpen,
                            onRequestClose: this.handleClose,
                            scope: "local"
                        });
                    return u.a.createElement(u.a.Fragment, null, u.a.createElement(y, {
                        render: this.slotRenderer
                    }), u.a.createElement(E, {
                        value: d
                    }, u.a.createElement(b.a, Object(m.a)({}, l, {
                        url: e,
                        widgetParams: n,
                        onLoad: this.handleLoad,
                        onError: this.handleError,
                        renderPreloader: !1,
                        isAsyncModal: !0,
                        loadComponentInternalDoNotSetOrYouWillBeFired: i,
                        hmrAcceptInternalDoNotSetOrYouWillBeFired: a
                    }))))
                }, e
            }(a.Component);
            P.displayName = "AsyncModal";
            var S = function(t) {
                function e() {
                    return t.apply(this, arguments) || this
                }
                Object(i.a)(e, t);
                var n = e.prototype;
                return n.safeOnRequestClose = function(t) {
                    var e, n = t.onRequestClose;
                    return function() {
                        l()(!e, "Modal: the AsyncModal's instance method close() should never be called in an implementation of onRequestClose(). This method is automatically wrapped to close the modal for you and it will incur on infinite recursion."), e = !0, n.apply(void 0, arguments), e = !1
                    }
                }, n.render = function() {
                    var t = this;
                    return u.a.createElement(A, null, function(e) {
                        var n = t.props,
                            i = (n.scope, n.isOpen, n.position, n.width, function(t, e) {
                                var n = Object.keys(t).reduce(function(n, r) {
                                    return "function" == typeof e[r] && (n[r] = Object(p.c)(e[r], t[r])), n
                                }, {});
                                return Object(o.a)({}, t, e, n)
                            }(e || {}, Object(r.a)(n, ["scope", "isOpen", "position", "width"])));
                        return t.close = i.isCloseable ? t.safeOnRequestClose(i) : e.onRequestClose, u.a.createElement(I, null, u.a.createElement(c.a, i))
                    })
                }, e
            }(a.Component);
            S.displayName = "Modal", S.defaultProps = {
                isCloseable: !0
            };
            var j = f()(S, c.a);
            n.d(e, "a", function() {
                return j
            }), n.d(e, "b", function() {
                return P
            })
        },
        185: function(t, e, n) {
            "use strict";
            var r = n(1063);
            n.d(e, "a", function() {
                return r.a
            })
        },
        186: function(t, e, n) {
            "use strict";
            var r = n(149);
            n.d(e, "a", function() {
                return r.a
            });
            var i = n(91);
            n.d(e, "b", function() {
                return i.a
            });
            var o = n(60);
            n.d(e, "c", function() {
                return o.a
            })
        },
        187: function(t, e, n) {
            "use strict";
            var r = n(13),
                i = n.n(r),
                o = n(56),
                a = n.n(o),
                u = n(101),
                c = n.n(u),
                s = n(44),
                l = function(t) {
                    var e = t.props,
                        n = t.props.dispatch,
                        r = t.prevProps,
                        o = t.formName,
                        u = t.dependants;
                    if (a()(e) || a()(r) || !o || !u.length) return null;
                    c()(u, function(t) {
                        var a = t.dependencyPath,
                            u = t.fieldToClear,
                            c = i()(r, a),
                            l = i()(e, a);
                        !c || l && l === c || (n(Object(s.clearFields)(o, !1, !1, [u])), n(Object(s.change)(o, u, [])))
                    })
                },
                d = function(t, e) {
                    var n = 0,
                        r = i()(e, "value", "");
                    return a()(t) ? n : (["0", ""].includes(r) ? n = t.totalItems : c()(t.items, function(t) {
                        t.label === r && (n += t.count)
                    }), n)
                },
                f = n(213),
                p = function(t, e) {
                    var n = 0,
                        r = i()(t, "steps"),
                        o = a()(r) ? 0 : r.length;
                    if (!o) return n;
                    for (var u = 0; u < o; u++) {
                        var c = t.steps[u];
                        if (c.status !== f.z.DONE || c.urlKey === e) {
                            n = u;
                            break
                        }
                    }
                    return n
                },
                m = function(t) {
                    return i()(t, "job.id")
                },
                h = function(t) {
                    var e = t.dispatch,
                        n = t.formName,
                        r = t.field,
                        i = t.value;
                    return e && n && r ? (e(Object(s.change)(n, r, i)), !0) : null
                },
                b = function(t) {
                    return "string" != typeof t ? {} : {
                        "data-testid": t
                    }
                };
            n.d(e, "a", function() {
                return l
            }), n.d(e, "b", function() {
                return d
            }), n.d(e, "c", function() {
                return p
            }), n.d(e, "d", function() {
                return m
            }), n.d(e, "e", function() {
                return h
            }), n.d(e, "f", function() {
                return b
            })
        },
        188: function(t, e, n) {
            "use strict";
            var r = n(1),
                i = n(19),
                o = n(46),
                a = n(5),
                u = n(2),
                c = n.n(u),
                s = n(0),
                l = n.n(s),
                d = n(35),
                f = n(28),
                p = n.n(f),
                m = n(93),
                h = n.n(m),
                b = n(16),
                g = n(41),
                v = n(6),
                y = n(31),
                I = n(88);
            new Set;
            e.a = function(t, e, n, u) {
                return void 0 === u && (u = {}),
                    function(f) {
                        var m = Object(d.connect)(t, e, n, u)(f),
                            O = Object(b.wrapDisplayName)(m, "Widget"),
                            E = function(t, e) {
                                var n = t.widgetStore,
                                    r = e.widgetId,
                                    i = n.getData(r);
                                return i && "application/stubs/AsyncClientSideRenderingWrapper.html" === i.templateName
                            },
                            A = function(t) {
                                function e(e, n) {
                                    var r;
                                    r = t.call(this, e, n) || this;
                                    var i = {
                                        widgetData: null
                                    };
                                    return e.hasOwnProperty("widgetId") && (i.widgetId = e.widgetId), r.state = i, r.loadWidget = r.loadWidget.bind(Object(o.a)(r)), r
                                }
                                Object(a.a)(e, t), e.getDerivedStateFromProps = function(t, e) {
                                    if (!e.widgetData) {
                                        var n = t.widgetStore.getData(e.widgetId);
                                        if (n) return {
                                            widgetData: n.data
                                        }
                                    }
                                    return null
                                };
                                var n = e.prototype;
                                return n.internalLoadWidget = function(t, e, n, r, i) {
                                    p()("string" == typeof t || t.length, "connectWidget: Invalid route supplied to loadWidget()");
                                    var o, a = this.props.widgetStore;
                                    n && a.isWidgetLoading(n) ? console.log("Calling loadWidget with the same reference multiple times got blocked (" + n + ")") : (a.registerWidgetLoading(n), o = Object(y.getPageConfigValue)(y.PAGE_YUI_DISABLED) ? function(t, e) {
                                        e(), "function" == typeof r && r(t)
                                    } : function(t, e) {
                                        var n = a.getData(t);
                                        widgetRenderer.prepareWidgetTree(n, function() {
                                            widgetLoader.createWidget(n, function() {
                                                e(), "function" == typeof r && r(t)
                                            })
                                        })
                                    }, this.context.store.dispatch(Object(g.d)({
                                        route: t,
                                        params: e,
                                        ref: n,
                                        method: i
                                    }, a, o)))
                                }, n.loadWidget = function(t, e, n, r) {
                                    this.internalLoadWidget(t, e, n, null, r)
                                }, n.isWidgetRenderable = function() {
                                    return (!this.state.hasOwnProperty("widgetId") || null !== this.state.widgetId) && (!this.state.widgetId || !E(this.props, this.state))
                                }, n.getWrappedInstance = function() {
                                    return this.wrappedComponent.getWrappedInstance()
                                }, n.componentDidCatch = function() {
                                    v.d.apply(void 0, arguments)
                                }, n.componentDidMount = function() {
                                    var t = this,
                                        e = this.state.widgetId;
                                    var n = this.props.widgetStore,
                                        r = n.getData(e);
                                    r && E(this.props, this.state) && this.internalLoadWidget(r.data.innerWidgetUrl, {}, null, function(e) {
                                        t.setState({
                                            widgetId: e,
                                            widgetData: n.getData(e).data
                                        })
                                    })
                                }, n.componentWillUnmount = function() {
                                    0
                                }, n.render = function() {
                                    var t = this;
                                    if (!this.isWidgetRenderable()) return null;
                                    var e = this.props,
                                        n = (e.widgetStore, Object(i.a)(e, ["widgetStore"])),
                                        o = Object(r.a)({}, this.state.widgetData, n, {
                                            loadWidget: this.loadWidget
                                        });
                                    return this.state.widgetId && (o.widgetId = this.state.widgetId), u.withRef && (o.ref = function(e) {
                                        t.wrappedComponent = e
                                    }), l.a.createElement(m, o)
                                }, e
                            }(s.Component);
                        return A.displayName = O, A.contextTypes = {
                            store: c.a.shape({
                                dispatch: c.a.func.isRequired
                            })
                        }, h()(Object(I.a)(A), m)
                    }
            }
        },
        189: function(t, e, n) {
            "use strict";
            n.d(e, "b", function() {
                return i
            }), n.d(e, "a", function() {
                return o
            });
            var r = 31,
                i = function() {
                    function t(t) {
                        this.validHostTypes = r, t && this.parse(t)
                    }
                    var e = t.prototype;
                    return e.reset = function() {
                        this.setScheme(null), this.setPort(null), this.setUserInfo(null), this.setHost(null), this.setPath(null), this.setFragment(null), this.setQuery(null)
                    }, t.validateHost = function(t, e) {
                        return !!(1 & e) || (!!(16 & e) || !!(8 & e))
                    }, e.setHost = function(e) {
                        if ("" !== e && null !== e && !t.validateHost(e, this.validHostTypes)) throw new Error("host is not valid");
                        return this.host = e, this
                    }, e.getHost = function() {
                        return this.host
                    }, e.setUserInfo = function(t) {
                        return this.userInfo = t, this
                    }, e.getUserInfo = function() {
                        return this.userInfo
                    }, e.setPort = function(t) {
                        return this.port = t, this
                    }, e.getPort = function() {
                        return this.port
                    }, e.setPath = function(t) {
                        return this.path = t, this
                    }, e.getPath = function() {
                        return this.path
                    }, e.setQuery = function(t) {
                        if (t && "object" == typeof t) {
                            var e = [];
                            Object.keys(t).forEach(function(n) {
                                var r = t[n];
                                Array.isArray(r) ? r.forEach(function(t) {
                                    e.push(encodeURIComponent(n + "[]").replace("+", "%20") + "=" + encodeURIComponent(t).replace("+", "%20"))
                                }) : e.push(encodeURIComponent(n).replace("+", "%20") + "=" + encodeURIComponent(r).replace("+", "%20"))
                            }), t = e.join("&")
                        }
                        return this.query = t, this
                    }, e.getQuery = function() {
                        return this.query
                    }, e.getQueryAsObject = function() {
                        var t = {};
                        this.query && this.query.split("&").forEach(function(e) {
                            var n = e.split("=");
                            t[decodeURIComponent(n[0])] = decodeURIComponent(n[1])
                        });
                        return t
                    }, e.setFragment = function(t) {
                        return this.fragment = t, this
                    }, e.getFragment = function() {
                        return this.fragment
                    }, e.setScheme = function(e) {
                        if (null !== e && !t.validateScheme(e)) throw new Error("Scheme is not valod or is not accepted");
                        return this.scheme = e, this
                    }, e.getScheme = function() {
                        return this.scheme
                    }, t.validateScheme = function(e) {
                        return (!t.validSchemes || !1 !== t.validSchemes.indexOf(e)) && !!e.match(/^[A-Za-z][A-Za-z0-9\-.+]*$/)
                    }, e.parse = function(e) {
                        this.reset();
                        var n = t.parseScheme(e);
                        if (null !== n) {
                            this.setScheme(n);
                            var r = e.substring(n.length + 1);
                            e = r || null
                        }
                        if (!e) return this;
                        var i = e.match(/^\/\/([^\/?#]*)/);
                        if (i) {
                            var o = i[1];
                            if (e = e.substring(i[0].length), !1 !== o.indexOf("@")) {
                                var a = o.split("@");
                                o = a.pop();
                                var u = a.join("@");
                                this.setUserInfo(u)
                            }
                            if (i = o.match(/:[\d]{1,5}$/)) {
                                var c = i[0].length,
                                    s = i[0].substring(1);
                                this.setPort(parseInt(s)), o = o.substring(0, o.length - c)
                            }
                            this.setHost(o)
                        }
                        return e ? ((i = e.match(/^[^?#]*/)) && (this.setPath(i[0]), e = e.substring(i[0].length)), e ? ((i = e.match(/^\?([^#]*)/)) && (this.setQuery(i[1]), e = e.substring(i[0].length)), e ? (e && "#" === e.substring(0, 1) && this.setFragment(e.substring(1)), this) : this) : this) : this
                    }, t.parseScheme = function(t) {
                        if ("string" != typeof t) throw new Error("Invalid argument");
                        var e = t.match(/^([A-Za-z][A-Za-z0-9.+-]*):/);
                        return e ? e[1] : null
                    }, t.encodeQueryFragment = function(t) {
                        if ("string" != typeof t) throw new Error("Expecting string");
                        return t.replace(/(?:[^a-zA-Z0-9_\-.~!$&'()*+,;=%:@\/?]+|%(?![A-Fa-f0-9]{2}))/g, function(t) {
                            return encodeURI(t[0])
                        })
                    }, t.encodePath = function(t) {
                        if ("string" != typeof t) throw new Error("Expecting string");
                        return t.replace(/(?:[^a-zA-Z0-9_\-.~%:]|%(?![A-Fa-f0-9]{2}))/g, function(t) {
                            return encodeURI(t[0])
                        })
                    }, e.isValid = function() {
                        return this.host ? !(this.path.length > 0 && "/" !== this.path.substring(0, 1)) : !this.userInfo && !this.port && (this.path ? "//" !== this.path.substring(0, 2) : !(!this.query && !this.fragment))
                    }, e.isValidRelative = function() {
                        return !(this.scheme || this.host || this.userInfo || this.port) && (this.path ? "//" !== this.path.substring(0, 2) : !(!this.query && !this.fragment))
                    }, e.isAbsolute = function() {
                        return null !== this.scheme
                    }, e.toString = function() {
                        if (!this.isValid() && (this.isAbsolute() || !this.isValidRelative())) throw new Error("URI is not valid and cannot be converted into a string");
                        var e = "";
                        return this.scheme && (e += this.scheme + ":"), null !== this.host && (e += "//", this.userInfo && (e += this.userInfo + "@"), e += this.host, this.port && (e += ":" + this.port)), this.path ? e += t.encodePath(this.path) : this.host && (this.query || this.fragment) && (e += "/"), this.query && (e += "?" + t.encodeQueryFragment(this.query)), this.fragment && (e += "#" + t.encodeQueryFragment(this.fragment)), e
                    }, t
                }();

            function o(t) {
                return new i(t)
            }
            i.defaultPorts = [], i.validSchemes = []
        },
        192: function(t, e, n) {
            "use strict";
            var r = n(0),
                i = n.n(r),
                o = (n(2), n(22)),
                a = n.n(o),
                u = n(1044),
                c = n(5),
                s = function(t) {
                    function e() {
                        for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(r)) || this).state = {
                            duration: 0
                        }, e
                    }
                    Object(c.a)(e, t), e.getDerivedStateFromProps = function(t, e) {
                        return {
                            duration: t.duration !== e.prevPropsDuration ? t.duration : e.duration,
                            prevPropsDuration: t.duration
                        }
                    };
                    var n = e.prototype;
                    return n.maybeDelayRender = function() {
                        var t = this,
                            e = this.state.duration;
                        e > 0 && (this.timer = setTimeout(function() {
                            t.timer = requestAnimationFrame(function() {
                                t.setState({
                                    duration: -1
                                })
                            })
                        }, e))
                    }, n.clearTimers = function() {
                        cancelAnimationFrame(this.timer), clearTimeout(this.timer)
                    }, n.componentDidMount = function() {
                        this.maybeDelayRender()
                    }, n.componentDidUpdate = function() {
                        this.clearTimers(), this.maybeDelayRender()
                    }, n.componentWillUnmount = function() {
                        this.clearTimers()
                    }, n.render = function() {
                        return this.state.duration <= 16 ? this.props.children : null
                    }, e
                }(r.PureComponent);
            s.displayName = "Delay", s.defaultProps = {
                duration: 500
            };
            n(338);
            var l = new a.a("spinner"),
                d = function(t) {
                    var e = t.color,
                        n = t.size,
                        r = t.delay,
                        o = t.valign;
                    return i.a.createElement(s, {
                        duration: r
                    }, i.a.createElement("div", l({
                        modifier: o && "valign"
                    }), i.a.createElement(u.a, {
                        color: e,
                        size: n
                    })))
                };
            d.defaultProps = {
                color: "grey",
                size: "s",
                delay: 0
            };
            e.a = d
        },
        193: function(t, e, n) {
            "use strict";
            n.d(e, "e", function() {
                return c
            }), n.d(e, "g", function() {
                return s
            }), n.d(e, "b", function() {
                return l
            }), n.d(e, "d", function() {
                return d
            }), n.d(e, "c", function() {
                return f
            }), n.d(e, "f", function() {
                return p
            }), n.d(e, "a", function() {
                return m
            });
            var r = n(14),
                i = n(10),
                o = n(32),
                a = n(34),
                u = function(t) {
                    return t.profileInterest.get("items")
                },
                c = function(t) {
                    return t.profileInterest.get("loadingCount") > 0
                },
                s = function(t) {
                    return t.profileInterest.get("offset")
                },
                l = function(t) {
                    return t.profileInterest.get("filters")
                },
                d = Object(a.a)([function(t) {
                    return t.profileInterest.get("mappings")
                }, l, function(t) {
                    return t.profileInterest.get("searchResults")
                }], function(t, e, n) {
                    var a = e.get("action"),
                        u = e.get("type");
                    if (a === o.c) {
                        var c = n.map(function(t) {
                            return {
                                rgKey: t,
                                type: o.g
                            }
                        });
                        return Object(i.fromJS)(c)
                    }
                    return t.filter(function(t) {
                        return function(t, e) {
                            return Boolean(t & o.a[e.get("type")])
                        }(a, t) && function(t, e) {
                            return Boolean(t & o.i[r.a.parse(e.get("rgKey")).type])
                        }(u, t)
                    })
                }),
                f = Object(a.a)([d, u, s], function(t, e, n) {
                    for (var r, a = new Set, u = n ? n + o.h : o.h, c = 0; c < t.size && a.size < u;) r = t.get(c), a.add(r.get("rgKey")), c++;
                    var s = [],
                        l = a,
                        d = Array.isArray(l),
                        f = 0;
                    for (l = d ? l : l[Symbol.iterator]();;) {
                        var p;
                        if (d) {
                            if (f >= l.length) break;
                            p = l[f++]
                        } else {
                            if ((f = l.next()).done) break;
                            p = f.value
                        }
                        var m = p;
                        e.has(m) && s.push({
                            rgKey: m,
                            data: e.get(m)
                        })
                    }
                    return Object(i.fromJS)(s)
                }),
                p = Object(a.a)([d, u, function(t, e) {
                    return e.offset
                }], function(t, e, n) {
                    for (var r, i = new Set, a = n + o.h, u = n; u < t.size && u < a;) r = t.get(u), e.has(r.get("rgKey")) || i.add(r.get("rgKey")), u++;
                    return Array.from(i)
                }),
                m = (Object(a.a)(l, function(t) {
                    var e = t.get("action"),
                        n = t.get("type");
                    return Object.keys(o.a).reduce(function(t, r) {
                        return e & o.a[r] && n & o.e[r] && t.push(r), t
                    }, [])
                }), Object(a.a)(l, function(t) {
                    var e = t.get("type");
                    return Object.keys(o.i).reduce(function(t, n) {
                        return e & o.i[n] && t.push(n), t
                    }, [])
                }), Object(a.a)([l, function(t, e) {
                    return {
                        rgType: e,
                        filterKey: ~o.d.indexOf(e) ? "action" : "type"
                    }
                }], function(t, e) {
                    var n = e.rgType,
                        r = e.filterKey;
                    return Boolean(t.get(r) & o.e[n])
                }))
        },
        194: function(t, e, n) {
            "use strict";
            var r = n(11),
                i = n(19),
                o = n(5),
                a = (n(2), n(0)),
                u = n.n(a),
                c = n(18),
                s = n(41),
                l = n(88),
                d = n(144),
                f = n(99),
                p = function(t) {
                    function e() {
                        for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(r)) || this).state = {
                            LoadedComponent: null
                        }, e.hasAcceptListner = !1, e.setLoadedComponent = function(t) {
                            e.mounted && e.setState({
                                LoadedComponent: Object(f.default)(t)
                            })
                        }, e
                    }
                    Object(o.a)(e, t), e.getDerivedStateFromProps = function(t, e) {
                        return e.prevUrl !== t.url ? {
                            LoadedComponent: null,
                            prevUrl: t.url
                        } : {
                            prevUrl: t.url
                        }
                    };
                    var n = e.prototype;
                    return n.loadWidget = function() {
                        var t = this.state.LoadedComponent,
                            e = this.props,
                            n = e.url,
                            r = e.loadedWidgetId,
                            i = e.widgetParams,
                            o = e.widgetRef,
                            a = e.httpMethod,
                            u = e.loadWidget;
                        r || u(n, i, o, a), t || this.loadComponent()
                    }, n.removeLoadedWidget = function() {
                        var t = this.props,
                            e = t.widgetRef,
                            n = t.loadedWidgetId;
                        (0, t.removeWidget)({
                            ref: e,
                            widgetId: n
                        }, this.props.widgetStore)
                    }, n.loadComponent = function() {
                        var t = this.props.loadComponentInternalDoNotSetOrYouWillBeFired;
                        t().then(this.setLoadedComponent)
                    }, n.reloadComponent = function() {
                        this.setState({
                            LoadedComponent: null
                        }), this.loadComponent()
                    }, n.componentDidMount = function() {
                        this.mounted = !0, this.loadWidget()
                    }, n.componentWillUnmount = function() {
                        this.mounted = !1;
                        var t = this.props,
                            e = t.destroyOnUnmount;
                        t.url;
                        e && this.removeLoadedWidget()
                    }, n.componentDidUpdate = function(t) {
                        var e = this.props,
                            n = e.widgetRef,
                            r = e.loadedWidgetId,
                            i = e.status;
                        t.widgetRef !== n && r ? this.removeLoadedWidget() : r || i === s.c.LOADING || i === s.c.ERROR || this.loadWidget(), i !== t.status && (i === s.c.FINISHED ? this.props.onLoad && this.props.onLoad() : i === s.c.ERROR && this.props.onError && this.props.onError())
                    }, n.render = function() {
                        var t = this.props,
                            e = t.status,
                            n = t.loadedWidgetId,
                            o = t.renderPreloader,
                            a = (t.widgetParams, t.widgetRef, t.removeWidget, t.destroyOnUnmount, t.onLoad, t.onError, t.loadComponentInternalDoNotSetOrYouWillBeFired, Object(i.a)(t, ["status", "loadedWidgetId", "renderPreloader", "widgetParams", "widgetRef", "removeWidget", "destroyOnUnmount", "onLoad", "onError", "loadComponentInternalDoNotSetOrYouWillBeFired"])),
                            c = this.state.LoadedComponent;
                        return e === s.c.FINISHED && n && c ? u.a.createElement(c, Object(r.a)({
                            widgetId: n
                        }, a)) : e === s.c.ERROR ? null : o ? u.a.createElement(o, null) : null
                    }, e
                }(a.Component);
            p.displayName = "AsyncWidget", p.defaultProps = {
                destroyOnUnmount: !0,
                renderPreloader: d.a
            };
            e.a = Object(c.a)(function(t, e) {
                var n = e.url,
                    r = e.widgetParams,
                    i = JSON.stringify([n, r]),
                    o = {
                        widgetRef: i
                    },
                    a = t.widget.ref[i];
                return a ? (a.status === s.c.FINISHED && (o.loadedWidgetId = a.id), o.status = a.status, o) : o
            }, function(t) {
                return {
                    removeWidget: function() {
                        t(s.e.apply(void 0, arguments))
                    }
                }
            })(Object(l.a)(p))
        },
        195: function(t, e, n) {
            "use strict";
            var r = n(6),
                i = n(1),
                o = n(3);

            function a(t, e) {
                return Object(o.default)("adminconferences.ConferenceEvents." + t + ".html", {
                    method: "POST",
                    body: e
                })
            }
            n.d(e, "a", function() {
                return u
            }), n.d(e, "c", function() {
                return c
            }), n.d(e, "e", function() {
                return s
            }), n.d(e, "d", function() {
                return l
            }), n.d(e, "b", function() {
                return d
            });
            var u = Object(r.j)("conferenceEvents")("REPLACE_STATE");

            function c(t) {
                return function(e) {
                    return (n = t, a("deleteEvent", {
                        conferenceEventId: n
                    })).then(function(t) {
                        var n = t.result;
                        return e(f(n)), Promise.resolve()
                    });
                    var n
                }
            }

            function s(t, e) {
                return function(n) {
                    return function(t, e) {
                        return a("saveEvent", Object(i.a)({}, e, {
                            conferenceId: t
                        }))
                    }(t, e).then(function(t) {
                        var e = t.result;
                        return n(f(e)), Promise.resolve()
                    })
                }
            }

            function l(t) {
                return function(e) {
                    return function(t) {
                        return a("rejectCandidate", {
                            candidateId: t
                        })
                    }(t).then(function(t) {
                        var n = t.result;
                        return e(f(n)), Promise.resolve()
                    })
                }
            }

            function d(t) {
                return function(e) {
                    return function(t) {
                        return a("approveCandidate", {
                            candidateId: t
                        })
                    }(t).then(function(t) {
                        var n = t.result;
                        return e(f(n)), Promise.resolve()
                    })
                }
            }

            function f(t) {
                return {
                    type: u,
                    nextState: t
                }
            }
        },
        196: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return i
            }), n.d(e, "b", function() {
                return o
            });
            var r = n(6),
                i = Object(r.j)("adsTargetingValue")("ADD_TARGETING_VALUES");

            function o(t) {
                return {
                    type: i,
                    values: t
                }
            }
        },
        197: function(t, e, n) {
            "use strict";
            var r = function(t) {
                    return t.id
                },
                i = function(t) {
                    if (t <= 0) return 0;
                    if (t < 10) return 10;
                    var e = 1;
                    return e = t < 1e4 ? 10 : t < 1e5 ? 100 : t < 1e6 ? 1e3 : t < 1e7 ? 1e4 : 1e5, Math.floor(t / e) * e
                };
            n.d(e, "a", function() {
                return r
            }), n.d(e, "b", function() {
                return i
            })
        },
        199: function(t, e, n) {
            "use strict";
            n.d(e, "c", function() {
                return r
            }), n.d(e, "b", function() {
                return i
            }), n.d(e, "a", function() {
                return o
            });
            var r = "recommendedQuestionPosts",
                i = "followedQuestionPosts",
                o = "authoredQuestionPosts"
        },
        20: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(0),
                i = n.n(r),
                o = n(65),
                a = n.n(o),
                u = n(246),
                c = n.n(u),
                s = n(28),
                l = n.n(s),
                d = n(66),
                f = n(59),
                p = n(24),
                m = n(53),
                h = function(t, e) {
                    return function(n, r) {
                        Object(f.a)(r, "queue").size || function t(e, n) {
                            setTimeout(function() {
                                var r = Object(f.a)(n, "queue").first();
                                e({
                                    type: p.j
                                }), m.d(e, r.get("componentGenerator"), r.get("uid")), Object(f.a)(n, "queue").size && t(e, n)
                            }, 500)
                        }(n, r), n({
                            type: p.h,
                            componentGenerator: t,
                            uid: e
                        })
                    }
                },
                b = n(26),
                g = n(186);

            function v() {
                l()(!0, "alertStack actions are not allowed execution during the server-side rendering phase. Please ensure these actions are only being dispatched on the client-side.")
            }
            n.d(e, "pushAlert", function() {
                return y
            }), n.d(e, "notifyAboutError", function() {
                return I
            }), n.d(e, "yuiConversionMap", function() {
                return O
            }), n.d(e, "pushYUINotification", function() {
                return E
            }), n.d(e, "pullAlert", function() {
                return A
            }), n.d(e, "popAlert", function() {
                return P
            }), n.d(e, "flushAlerts", function() {
                return S
            });
            var y = function(t, e, n) {
                    return void 0 === e && (e = a()()), void 0 === n && (n = setTimeout), v(), l()("function" == typeof t, "Component generator must be a function, pushAlert takes a function as its first argument.\ne.g. pushAlert(() => <Alert />)"),
                        function(r, i) {
                            var o = Object(f.a)(i),
                                a = !!o.get("stack").size && c()(Date.now(), 500) <= o.get("stack").last().get("addedAt");
                            o.get("queue").size || a ? r(h(t, e)) : m.d(r, t, e, m.a, n)
                        }
                },
                I = function(t) {
                    return Object(b.default)(t), y(function() {
                        return i.a.createElement(g.a, {
                            error: t
                        })
                    })
                },
                O = {
                    success: "green",
                    promo: "yellow",
                    attention: "blue",
                    warning: "red"
                },
                E = function(t, e, n) {
                    return void 0 === n && (n = a()()),
                        function(r) {
                            return r(y(function() {
                                return i.a.createElement(d.a, {
                                    key: a()(),
                                    title: t,
                                    color: O[e]
                                })
                            }, n))
                        }
                },
                A = function(t) {
                    return v(), m.c(t, !0)
                },
                P = function() {
                    return v(), {
                        type: p.d
                    }
                },
                S = function() {
                    return v(), {
                        type: p.a
                    }
                }
        },
        202: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return i
            }), n.d(e, "b", function() {
                return o
            });
            var r = n(6),
                i = Object(r.j)("supplierSelect")("ADD_SUPPLIER_OPTIONS");

            function o(t) {
                return {
                    type: i,
                    options: t
                }
            }
        },
        203: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return I
            }), n.d(e, "b", function() {
                return O
            }), n.d(e, "f", function() {
                return E
            }), n.d(e, "e", function() {
                return A
            }), n.d(e, "i", function() {
                return P
            }), n.d(e, "c", function() {
                return S
            }), n.d(e, "d", function() {
                return j
            }), n.d(e, "m", function() {
                return w
            }), n.d(e, "k", function() {
                return C
            }), n.d(e, "l", function() {
                return R
            }), n.d(e, "j", function() {
                return T
            }), n.d(e, "g", function() {
                return L
            }), n.d(e, "h", function() {
                return D
            });
            var r = n(12),
                i = n(1),
                o = n(3),
                a = n(17),
                u = n.n(a),
                c = n(23);

            function s() {
                var t = Object(r.a)(["/", "/relation"]);
                return s = function() {
                    return t
                }, t
            }

            function l() {
                var t = Object(r.a)(["/", "/relation"]);
                return l = function() {
                    return t
                }, t
            }

            function d() {
                var t = Object(r.a)(["/doi/", "/", ""]);
                return d = function() {
                    return t
                }, t
            }

            function f() {
                var t = Object(r.a)(["/inviteAuthorsOfNewlyCreatedPublication"]);
                return f = function() {
                    return t
                }, t
            }

            function p() {
                var t = Object(r.a)(["/getInvitableAuthorsForNewlyCreatedPublication"]);
                return p = function() {
                    return t
                }, t
            }

            function m() {
                var t = Object(r.a)(["/match"]);
                return m = function() {
                    return t
                }, t
            }

            function h() {
                var t = Object(r.a)(["/claim/", ""]);
                return h = function() {
                    return t
                }, t
            }

            function b() {
                var t = Object(r.a)(["/checkNameSimilarity"]);
                return b = function() {
                    return t
                }, t
            }

            function g() {
                var t = Object(r.a)(["/", ""]);
                return g = function() {
                    return t
                }, t
            }

            function v() {
                var t = Object(r.a)(["/create/experimentFindings"]);
                return v = function() {
                    return t
                }, t
            }
            var y = "api/literature",
                I = "isPreprintOf",
                O = "supplements";

            function E(t, e, n, r) {
                void 0 === e && (e = null);
                var a = n.isFilePrivate,
                    u = void 0 !== a && a,
                    c = n.publicationRelation,
                    s = void 0 === c ? {} : c,
                    l = r.trackingMetadata,
                    d = void 0 === l ? null : l,
                    f = r.viewIds,
                    p = void 0 === f ? null : f;
                return Object(o.default)(y, {
                    method: "POST",
                    body: Object(i.a)({
                        publicationData: t,
                        fileReference: e,
                        isFilePrivate: u
                    }, s, d, {
                        viewIds: p
                    })
                })
            }

            function A(t, e, n, r, a) {
                void 0 === e && (e = null), void 0 === n && (n = null);
                var u = r.isFilePrivate,
                    s = void 0 !== u && u,
                    l = r.publicationRelation,
                    d = void 0 === l ? {} : l,
                    f = a.trackingMetadata,
                    p = void 0 === f ? null : f,
                    m = a.viewIds,
                    h = void 0 === m ? null : m;
                return Object(o.default)(y + Object(c.a)(v()), {
                    method: "POST",
                    body: Object(i.a)({
                        publicationData: t,
                        descriptionFileReference: e,
                        resultsFileReference: n,
                        isFilePrivate: s
                    }, d, p, {
                        viewIds: h
                    })
                })
            }

            function P(t, e, n) {
                var r = n.trackingMetadata,
                    a = void 0 === r ? null : r,
                    u = n.viewIds,
                    s = void 0 === u ? null : u;
                return Object(o.default)(y + Object(c.a)(g(), t), {
                    method: "PATCH",
                    body: Object(i.a)({
                        publicationData: e
                    }, a, {
                        viewIds: s
                    })
                })
            }

            function S(t) {
                return Object(o.default)(y + Object(c.a)(b()), {
                    method: "POST",
                    body: {
                        authors: t
                    }
                })
            }

            function j(t, e) {
                var n = e.fileReference,
                    r = void 0 === n ? null : n,
                    a = e.isFilePrivate,
                    s = void 0 === a ? null : a,
                    l = e.trackingMetadata,
                    d = void 0 === l ? null : l,
                    f = e.viewIds,
                    p = void 0 === f ? null : f;
                return Object(o.default)(y + Object(c.a)(h(), t), {
                    method: "POST",
                    body: Object(i.a)({
                        fileReference: r,
                        isFilePrivate: s
                    }, d, {
                        viewIds: p
                    })
                }).then(u()("result"))
            }

            function w(t, e, n, r) {
                void 0 === e && (e = null);
                var a = n.isFilePrivate,
                    s = void 0 !== a && a,
                    l = r.trackingMetadata,
                    d = void 0 === l ? null : l;
                return Object(o.default)(y + Object(c.a)(m()), {
                    method: "POST",
                    body: Object(i.a)({
                        publicationData: t,
                        fileReference: e,
                        isFilePrivate: s
                    }, d)
                }).then(u()("result"))
            }

            function C(t) {
                return Object(o.default)(y + Object(c.a)(p()), {
                    method: "POST",
                    body: {
                        publicationUid: t
                    }
                }).then(u()("result"))
            }

            function R(t, e, n) {
                return Object(o.default)(y + Object(c.a)(f()), {
                    method: "POST",
                    body: {
                        publicationKey: t,
                        authors: e,
                        viewIds: n
                    }
                }).then(u()("result"))
            }

            function T(t, e, n) {
                var r = n.viewIds,
                    i = void 0 === r ? null : r;
                return Object(o.default)(y + Object(c.a)(d(), t, e), {
                    method: "POST",
                    body: {
                        viewIds: i
                    }
                }).then(u()("result"))
            }

            function L(t, e, n, r) {
                var a = r.viewIds,
                    s = void 0 === a ? null : a,
                    d = r.trackingMetadata,
                    f = void 0 === d ? null : d;
                return Object(o.default)(y + Object(c.a)(l(), t), {
                    method: "POST",
                    body: Object(i.a)({
                        relationType: e,
                        targetPublicationUid: n,
                        viewIds: s
                    }, f)
                }).then(u()("result"))
            }

            function D(t, e, n) {
                return Object(o.default)(y + Object(c.a)(s(), t), {
                    method: "DELETE",
                    body: {
                        relationType: e,
                        targetPublicationUid: n
                    }
                }).then(u()("result"))
            }
        },
        204: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return i
            }), n.d(e, "b", function() {
                return o
            });
            var r = n(6),
                i = Object(r.j)("notificationsRequestsResponseRate")("DECREMENT_PENDING_REQUESTS");

            function o() {
                return function(t) {
                    t({
                        type: i
                    })
                }
            }
        },
        205: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return r
            }), n.d(e, "b", function() {
                return i
            });
            var r = "ADD_RESOLVED_PUBLICATION_REQUEST";

            function i(t) {
                return {
                    type: r,
                    publicationUid: t
                }
            }
        },
        206: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return r
            }), n.d(e, "b", function() {
                return i
            });
            var r = "ACTION_ADD_MORE_PROJECTS_COLLABORATORS";

            function i(t) {
                return {
                    type: r,
                    payload: {
                        projectsCollaborators: t
                    }
                }
            }
        },
        207: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return o
            }), n.d(e, "c", function() {
                return a
            }), n.d(e, "b", function() {
                return u
            });
            var r = n(6),
                i = Object(r.j)("additionalEmailFormSubmitted"),
                o = i("FORM_BEGIN_PROCESSING"),
                a = i("FORM_PROCESSING_SUCCESS"),
                u = i("FORM_PROCESSING_FAILURE")
        },
        208: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return i
            }), n.d(e, "b", function() {
                return o
            });
            var r = n(6),
                i = Object(r.j)("institutions")("ADD_INSTITUTIONS");

            function o(t) {
                return {
                    type: i,
                    institutions: t
                }
            }
        },
        21: function(t, e, n) {
            "use strict";
            n.d(e, "c", function() {
                return i
            }), n.d(e, "f", function() {
                return o
            }), n.d(e, "e", function() {
                return a
            }), n.d(e, "d", function() {
                return u
            }), n.d(e, "m", function() {
                return c
            }), n.d(e, "h", function() {
                return s
            }), n.d(e, "l", function() {
                return l
            }), n.d(e, "j", function() {
                return d
            }), n.d(e, "g", function() {
                return f
            }), n.d(e, "k", function() {
                return p
            }), n.d(e, "i", function() {
                return m
            }), n.d(e, "b", function() {
                return h
            }), n.d(e, "a", function() {
                return b
            }), n.d(e, "q", function() {
                return g
            }), n.d(e, "r", function() {
                return v
            }), n.d(e, "p", function() {
                return y
            }), n.d(e, "o", function() {
                return I
            }), n.d(e, "u", function() {
                return O
            }), n.d(e, "n", function() {
                return E
            }), n.d(e, "s", function() {
                return A
            }), n.d(e, "t", function() {
                return P
            });
            var r = n(1),
                i = "INIT_UPLOAD",
                o = "REMOVE_FILES",
                a = "REMOVE_FILE",
                u = "RECEIVE_FILES",
                c = "UPLOAD_START",
                s = "UPLOAD_BEGIN",
                l = "UPLOAD_PROGRESS",
                d = "UPLOAD_DONE",
                f = "UPLOAD_ABORT",
                p = "UPLOAD_ERROR",
                m = "UPLOAD_COMPLETE",
                h = {
                    IDLE: "idle",
                    UPLOADING: "uploading"
                },
                b = {
                    IDLE: "idle",
                    UPLOADING: "uploading",
                    DONE: "done"
                },
                g = function(t) {
                    var e = t.id,
                        n = t.multiple,
                        r = void 0 !== n && n,
                        o = t.uploadOnReceive,
                        a = void 0 === o || o,
                        u = t.onFileComplete,
                        c = t.url,
                        s = t.method,
                        l = t.fileFieldName,
                        d = t.maxFileSize;
                    return {
                        type: i,
                        payload: {
                            formId: e,
                            multiple: r,
                            uploadOnReceive: a,
                            onFileComplete: u,
                            url: c,
                            method: s,
                            fileFieldName: l,
                            maxFileSize: d
                        }
                    }
                },
                v = function(t, e) {
                    return {
                        type: u,
                        payload: {
                            formId: t,
                            fileList: e.map(function(t) {
                                return Object(r.a)({}, t, {
                                    status: b.IDLE
                                })
                            })
                        }
                    }
                },
                y = function(t, e, n) {
                    return {
                        type: d,
                        payload: {
                            formId: t,
                            file: e,
                            response: n
                        }
                    }
                },
                I = function(t) {
                    return {
                        type: m,
                        payload: {
                            formId: t
                        }
                    }
                },
                O = function(t) {
                    return {
                        type: c,
                        payload: {
                            formId: t
                        }
                    }
                },
                E = function(t, e) {
                    return {
                        type: s,
                        payload: {
                            formId: t,
                            file: e
                        }
                    }
                },
                A = function(t) {
                    return function(e) {
                        return {
                            type: a,
                            payload: {
                                formId: t,
                                file: e
                            }
                        }
                    }
                },
                P = function(t) {
                    return function() {
                        return {
                            type: o,
                            payload: {
                                formId: t
                            }
                        }
                    }
                }
        },
        211: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return r
            }), n.d(e, "b", function() {
                return i
            });
            var r = "ACTION_PERFORMANCE_CHART_UPDATED";

            function i(t, e) {
                return function(n) {
                    n(function(t, e) {
                        return {
                            type: r,
                            chartId: t,
                            config: e
                        }
                    }(t, e))
                }
            }
        },
        212: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return i
            }), n.d(e, "b", function() {
                return o
            });
            var r = n(6),
                i = Object(r.j)("topicsFilter")("ACTION_SET_LIST_FILTERS"),
                o = function(t) {
                    return {
                        type: i,
                        payload: {
                            filterKey: t
                        }
                    }
                }
        },
        213: function(t, e, n) {
            "use strict";
            n.d(e, "u", function() {
                return r
            }), n.d(e, "t", function() {
                return i
            }), n.d(e, "s", function() {
                return o
            }), n.d(e, "x", function() {
                return a
            }), n.d(e, "q", function() {
                return u
            }), n.d(e, "r", function() {
                return c
            }), n.d(e, "y", function() {
                return s
            }), n.d(e, "v", function() {
                return l
            }), n.d(e, "w", function() {
                return d
            }), n.d(e, "d", function() {
                return f
            }), n.d(e, "f", function() {
                return p
            }), n.d(e, "b", function() {
                return m
            }), n.d(e, "c", function() {
                return h
            }), n.d(e, "g", function() {
                return b
            }), n.d(e, "h", function() {
                return g
            }), n.d(e, "k", function() {
                return v
            }), n.d(e, "j", function() {
                return y
            }), n.d(e, "i", function() {
                return I
            }), n.d(e, "e", function() {
                return O
            }), n.d(e, "n", function() {
                return E
            }), n.d(e, "l", function() {
                return A
            }), n.d(e, "p", function() {
                return P
            }), n.d(e, "o", function() {
                return S
            }), n.d(e, "z", function() {
                return j
            }), n.d(e, "A", function() {
                return w
            }), n.d(e, "a", function() {
                return C
            }), n.d(e, "m", function() {
                return R
            });
            var r = "ExpressCheckoutJobSingleStep",
                i = "ExpressCheckoutJobPreviewStep",
                o = "ExpressCheckoutJobBenefitsStep",
                a = "LandingPageStep",
                u = "DescriptionStep",
                c = "JobDetailStep",
                s = "JobPreviewStep",
                l = "JobDetailsStep",
                d = "JobPreviewStep",
                f = "ExpressCheckoutJobSingleStep",
                p = "JobPostWorkflowLandingStep",
                m = "JobPostWorkflowDescriptionStep",
                h = "JobPostWorkflowJobDetailStep",
                b = "JobPostWorkflowPreviewStep",
                g = "JobPostWorkflowAccountDetailsStep",
                v = "RectruiterOnePageAccountDetailsStep",
                y = "JobPostWorkflowOverviewStep",
                I = "JobPostWorkflowDetailsStep",
                O = "JobPostCollaborateEditAllStep",
                E = 160,
                A = "It looks like you’ve added a job description in a language other than English. We suggest posting your job in English or including an English translation to make your job accessible to the largest number of candidates. ",
                P = ["i am", "i want", "i'm"],
                S = ["professor", "postdoc", "post doc", "student", "researcher", "scientist"],
                j = {
                    DONE: "done",
                    UNDONE: "undone"
                },
                w = {
                    EXPRESS: "express",
                    UNITED: "u",
                    LEAD: "lg",
                    ADMIN: "admin",
                    PREPAID: "pw",
                    SIGN_UP_JOB_LEAD: "sg",
                    SUBSCRIPTION: "sw"
                },
                C = {
                    EMAIL: {
                        name: "email",
                        value: "Email",
                        placeholder: "Enter email address"
                    },
                    WEBSITE: {
                        name: "website",
                        value: "External website",
                        placeholder: "Enter website url"
                    }
                },
                R = [".jpg", ".jpeg", ".png"]
        },
        215: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return i
            }), n.d(e, "b", function() {
                return o
            });
            var r = n(6),
                i = Object(r.j)("entityComplaints")("ENTITY_REPORTED"),
                o = function(t) {
                    return {
                        type: i,
                        payload: {
                            entityId: t
                        }
                    }
                }
        },
        216: function(t, e, n) {
            "use strict";
            var r = n(19),
                i = n(3),
                o = n(243),
                a = n.n(o),
                u = n(5),
                c = function(t) {
                    function e(e) {
                        var n;
                        return (n = t.call(this, e) || this).isValidationError = !0, n.isRequestError = !0, n
                    }
                    Object(u.a)(e, t);
                    var n = e.prototype;
                    return n.getMessageForUser = function() {
                        return Array.isArray(this.errors) ? this.errors[0] : Object.values(this.errors).join("\n")
                    }, n.shouldSendToKibana = function() {
                        return !1
                    }, e
                }(n(1888).a),
                s = n(31);
            n.d(e, "b", function() {
                return d
            }), n.d(e, "a", function() {
                return f
            });
            var l = !1;

            function d(t) {
                var e = t.queryHash,
                    n = t.options,
                    o = Object(r.a)(t, ["queryHash", "options"]),
                    a = e ? "graphapi/" + e : "graphapi",
                    u = {
                        method: "POST",
                        body: JSON.stringify(o),
                        headers: {
                            Accept: "application/json"
                        },
                        signal: n && n.signal
                    };
                return e && !Object(s.getRequestConfigValue)(s.REQUEST_IS_LOGGED_IN) && (u = {
                    method: "GET",
                    query: {
                        queryName: o.queryName || null,
                        variables: JSON.stringify(o.variables || null)
                    },
                    headers: {
                        Accept: "application/json"
                    }
                }), Object(i.default)(a, u).then(function(e) {
                    var n = e.result;
                    return p(t, n.extensions), n
                }).catch(function(e) {
                    return p(t), Promise.reject(e)
                })
            }

            function f(t) {
                return d(t).then(function(t) {
                    return function(t) {
                        if (!t) return;
                        for (var e = {}, n = t, r = Array.isArray(n), i = 0, n = r ? n : n[Symbol.iterator]();;) {
                            var o;
                            if (r) {
                                if (i >= n.length) break;
                                o = n[i++]
                            } else {
                                if ((i = n.next()).done) break;
                                o = i.value
                            }
                            var u = o;
                            "validation" === u.category && Object.assign(e, u.validationErrors)
                        }
                        if (Object.keys(e).length > 0) throw new c(function(t) {
                            return a()(t, function(t) {
                                return Array.isArray(t) ? t.join(". ") : t
                            })
                        }(e))
                    }(t.errors), t
                })
            }

            function p(t, e) {
                l || RGCommons.debug.on("toolbarLoaded", function() {
                    return function(t, e) {
                        l = !0, p(t, e)
                    }(t, e)
                }), RGCommons.debug.logGraphQLQuery(t, e)
            }
        },
        223: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "FILTER_TYPE_OPEN", function() {
                return a
            }), n.d(e, "FILTER_TYPE_OUTGOING_FULFILLED", function() {
                return u
            }), n.d(e, "FILTER_TYPE_OUTGOING_PENDING", function() {
                return c
            }), n.d(e, "FILTER_TYPE_FULFILLED", function() {
                return s
            }), n.d(e, "PENDING_REQUEST_FILTER_TYPE_ALL", function() {
                return l
            }), n.d(e, "PENDING_REQUEST_FILTER_TYPE_ITEM_FULLTEXTS", function() {
                return d
            }), n.d(e, "PENDING_REQUEST_FILTER_TYPE_ITEM_SKILLS", function() {
                return f
            }), n.d(e, "PENDING_REQUEST_FILTER_TYPE_ITEM_FEEDBACK", function() {
                return p
            }), n.d(e, "PENDING_REQUEST_FILTER_TYPE_ITEM_PROJECTS", function() {
                return m
            }), n.d(e, "PENDING_REQUEST_FILTER_TYPE_ITEM_ACCOUNT", function() {
                return h
            }), n.d(e, "PENDING_REQUEST_FILTER_TYPE_ITEM_AUTHOR_SUGGESTIONS", function() {
                return b
            }), n.d(e, "PENDING_REQUEST_FILTER_TYPE_ITEM_PROFILE_ABOUT_ME_GENERATED", function() {
                return g
            }), n.d(e, "PENDING_REQUEST_FILTER_TYPE_ITEM_REVIEW_PUSHED_PUBLICATION", function() {
                return v
            }), n.d(e, "default", function() {
                return I
            });
            var r = n(4),
                i = n.n(r),
                o = n(154),
                a = "open",
                u = "outgoingFulfilled",
                c = "outgoingPending",
                s = "fulfilled",
                l = "all",
                d = "fulltexts",
                f = "skills",
                p = "feedback",
                m = "projects",
                h = "account",
                b = "authorSuggestions",
                g = "profileAboutMeGenerated",
                v = "reviewPushedPublication",
                y = {
                    filterType: a,
                    pendingRequestsFilterType: l
                };

            function I(t, e) {
                switch (void 0 === t && (t = y), e.type) {
                    case o.a:
                        return i()("filterType", e.filterType, t);
                    case o.b:
                        return i()("pendingRequestsFilterType", e.pendingRequestsFilterType, t)
                }
                return t
            }
        },
        23: function(t, e, n) {
            "use strict";

            function r(t) {
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                var i = [];
                return t.forEach(function(t, e) {
                    i.push(t), e < n.length && i.push(encodeURIComponent(n[e]))
                }), i.join("")
            }
            n.d(e, "a", function() {
                return r
            })
        },
        234: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "STATUS_NEW", function() {
                return d
            }), n.d(e, "STATUS_APPROVED", function() {
                return f
            }), n.d(e, "STATUS_HIDDEN", function() {
                return p
            }), n.d(e, "STATUS_IGNORED", function() {
                return m
            }), n.d(e, "default", function() {
                return b
            });
            var r = n(1),
                i = n(4),
                o = n.n(i),
                a = n(106),
                u = n.n(a),
                c = n(159),
                s = n.n(c),
                l = n(68),
                d = "new",
                f = "approved",
                p = "hidden",
                m = "ignored",
                h = {
                    isAllSuggestionsLoaded: !1,
                    isRequestInProgress: !1,
                    showOneSuggestionPerAccount: !1,
                    suggestions: {}
                };

            function b(t, e) {
                switch (void 0 === t && (t = h), e.type) {
                    case l.a:
                        return o()(["suggestions", e.targetAccountId, e.accountMappingSuggesterId, "status"], f, t);
                    case l.b:
                        return o()(["suggestions", e.targetAccountId, e.accountMappingSuggesterId, "status"], p, t);
                    case l.c:
                        return o()(["suggestions", e.targetAccountId, e.accountMappingSuggesterId, "status"], m, t);
                    case l.d:
                        return o()(["suggestions", e.targetAccountId], (n = t.suggestions[e.targetAccountId], i = m, u()(function(t) {
                            return Object(r.a)({}, t, {
                                status: t.status === d ? i : t.status
                            })
                        }, n)), t);
                    case l.f:
                        return o()("isRequestInProgress", e.isRequestInProgress, t);
                    case l.e:
                        return function(t, e, n) {
                            var i = t.suggestions,
                                o = t.targetAccountIds,
                                a = s()(o, n);
                            return n.forEach(function(t) {
                                i.hasOwnProperty(t) && (i[t] = Object(r.a)({}, e[e], i[t]))
                            }), Object(r.a)({}, t, {
                                targetAccountIds: a,
                                suggestions: Object(r.a)({}, e, i)
                            })
                        }(t, e.suggestions, e.targetAccountIds)
                }
                var n, i;
                return t
            }
        },
        24: function(t, e, n) {
            "use strict";
            n.d(e, "d", function() {
                return o
            }), n.d(e, "a", function() {
                return a
            }), n.d(e, "i", function() {
                return u
            }), n.d(e, "e", function() {
                return c
            }), n.d(e, "b", function() {
                return s
            }), n.d(e, "k", function() {
                return l
            }), n.d(e, "g", function() {
                return d
            }), n.d(e, "f", function() {
                return f
            }), n.d(e, "c", function() {
                return p
            }), n.d(e, "h", function() {
                return m
            }), n.d(e, "j", function() {
                return h
            });
            var r = n(6),
                i = Object(r.j)("alerts"),
                o = i("POP_ALERT"),
                a = i("FLUSH_ALERTS"),
                u = i("PUSH_TO_STACK"),
                c = i("PULL_FROM_STACK"),
                s = i("FREEZE_STACK"),
                l = i("UNFREEZE_STACK"),
                d = i("PUSH_TIMEOUT"),
                f = i("PULL_TIMEOUT"),
                p = i("INVALIDATE_TIMEOUT"),
                m = i("PUSH_TO_QUEUE"),
                h = i("SHIFT_QUEUE")
        },
        244: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "ANSWER_OTHER", function() {
                return u
            }), n.d(e, "ANSWER_YES", function() {
                return c
            }), n.d(e, "default", function() {
                return l
            });
            var r = n(1),
                i = n(4),
                o = n.n(i),
                a = n(62),
                u = "other",
                c = "yes",
                s = {
                    answer1: null,
                    answer2: null,
                    answer3: null,
                    answer2OtherText: null,
                    answer3OtherText: null,
                    answer4ProofDocuments: {}
                };

            function l(t, e) {
                void 0 === t && (t = s);
                var n = e.type,
                    i = e.answer,
                    u = e.answerOtherText,
                    c = e.documentId,
                    l = e.document,
                    d = Object(r.a)({}, t.answer4ProofDocuments);
                switch (n) {
                    case a.b:
                        return Object(r.a)({}, t, {
                            answer1: i
                        });
                    case a.c:
                        return Object(r.a)({}, t, {
                            answer2: i
                        });
                    case a.e:
                        return Object(r.a)({}, t, {
                            answer3: i
                        });
                    case a.d:
                        return Object(r.a)({}, t, {
                            answer2OtherText: u
                        });
                    case a.f:
                        return Object(r.a)({}, t, {
                            answer3OtherText: u
                        });
                    case a.g:
                        return o()(["answer4ProofDocuments", c], l, t);
                    case a.a:
                        return delete d[c], o()("answer4ProofDocuments", d, t)
                }
                return t
            }
        },
        250: function(t, e, n) {
            var r = {
                "./accounts/reducers/follow.js": 251,
                "./accounts/reducers/globalAccounts.js": 252,
                "./accounts/reducers/globalCurrentAccount.js": 253,
                "./admin/reducers/activitySelect.js": 254,
                "./admin/reducers/adCampaignBilling.js": 255,
                "./admin/reducers/adCampaignItems.js": 256,
                "./admin/reducers/conferenceEvents.js": 257,
                "./admin/reducers/contentItems.js": 258,
                "./admin/reducers/keywordSelect.js": 259,
                "./admin/reducers/supplierSelect.js": 261,
                "./admindashboard/reducers/dashboardPerformanceChart.js": 262,
                "./admindashboard/reducers/tvGrowthDashboard.js": 263,
                "./ads/reducers/targetingValue.js": 264,
                "./application/reducers/additionalEmailForm.js": 265,
                "./application/reducers/ads.js": 266,
                "./application/reducers/globalContent.js": 267,
                "./application/reducers/globalSidebar.js": 268,
                "./application/reducers/locations.js": 352,
                "./application/reducers/loginForm.js": 351,
                "./application/reducers/notificationCounters.js": 269,
                "./application/reducers/reach.js": 270,
                "./application/reducers/stickySidebar.js": 350,
                "./application/reducers/trustedDeviceLoginPromo.js": 271,
                "./common/reducers/chartInteraction.js": 272,
                "./common/reducers/cities.js": 273,
                "./common/reducers/countries.js": 274,
                "./complaints/reducers/entityComplaints.js": 275,
                "./converse/reducers/editor.js": 276,
                "./converse/reducers/links.js": 277,
                "./converse/reducers/mentions.js": 278,
                "./converse/reducers/messageStats.js": 279,
                "./converse/reducers/messages.js": 280,
                "./experiments/reducers/runningExperiments.js": 349,
                "./go/reducers/accountRequestVerificationSurvey.js": 244,
                "./grants/reducers/opportunitiesDetailPage.js": 281,
                "./grants/reducers/overviewPage.js": 1743,
                "./institutions/reducers/institutions.js": 282,
                "./invitations/reducers/cloudSpongeImportServices.js": 348,
                "./invitations/reducers/inviteAuthorsList.js": 283,
                "./invitations/reducers/reinvite.js": 284,
                "./jobs/reducers/jobRating.js": 285,
                "./labs/reducers/peopleSelector.js": 286,
                "./labs/reducers/publicationsSelector.js": 287,
                "./likes/reducers/RgIdLikers.js": 288,
                "./likes/reducers/likes.js": 289,
                "./lite/reducers/liteAds.js": 310,
                "./literature/reducers/fulltextRequests.js": 290,
                "./literature/reducers/globalAuthorSuggestions.js": 234,
                "./literature/reducers/globalAuthors.js": 291,
                "./literature/reducers/publicationCreation.js": 292,
                "./literature/reducers/publicationEdit.js": 293,
                "./literature/reducers/publicationFulltext.js": 294,
                "./notifications/reducers/requestCounters.js": 295,
                "./notifications/reducers/requestResponseRate.js": 296,
                "./notifications/reducers/requestsFilter.js": 223,
                "./profile/reducers/additionalEmailDialogForm.js": 297,
                "./profile/reducers/interest.js": 298,
                "./profile/reducers/statsReport.js": 299,
                "./profile/reducers/statsReportFeatures.js": 300,
                "./projects/reducers/bibliography.js": 301,
                "./projects/reducers/collaborators.js": 302,
                "./projects/reducers/discussions.js": 303,
                "./projects/reducers/followedProjects.js": 304,
                "./projects/reducers/followers.js": 305,
                "./projects/reducers/projects.js": 306,
                "./projects/reducers/referencesAdd.js": 307,
                "./projects/reducers/share.js": 308,
                "./projects/reducers/stats.js": 309,
                "./publication/reducers/authors.js": 343,
                "./publication/reducers/feedbackRequests.js": 311,
                "./publication/reducers/figure.js": 312,
                "./publication/reducers/figureStub.js": 313,
                "./publication/reducers/followed.js": 314,
                "./publication/reducers/fulltextRequests.js": 315,
                "./publication/reducers/globalPublicationAuthors.js": 316,
                "./publication/reducers/globalPublicationCounters.js": 317,
                "./publication/reducers/globalPublicationStats.js": 318,
                "./publication/reducers/globalPublications.js": 319,
                "./publication/reducers/links.js": 347,
                "./publication/reducers/personalFeedbackRequests.js": 321,
                "./publicbrowse/reducers/search.js": 342,
                "./publicliterature/reducers/citations.js": 346,
                "./publicliterature/reducers/similarPublications.js": 322,
                "./publicliterature/reducers/tab.js": 345,
                "./questionnaire/reducers/questionnaire.js": 323,
                "./recommendations/reducers/carouselFollowerSuggestions.js": 324,
                "./recommendations/reducers/carouselJobSuggestions.js": 344,
                "./recommendations/reducers/followSuggestionsPromo.js": 325,
                "./recommendations/reducers/suggestionCards.js": 326,
                "./research/reducers/detailPage.js": 327,
                "./search/reducers/search.js": 329,
                "./share/reducers/contentSharing.js": 330,
                "./topics/reducers/follow.js": 331,
                "./topics/reducers/globalTopicPosts.js": 332,
                "./topics/reducers/overview.js": 333
            };

            function i(t) {
                var e = o(t);
                return n(e)
            }

            function o(t) {
                if (!n.o(r, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return r[t]
            }
            i.keys = function() {
                return Object.keys(r)
            }, i.resolve = o, t.exports = i, i.id = 250
        },
        251: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return a
            });
            var r = n(4),
                i = n.n(r),
                o = n(78);

            function a(t, e) {
                void 0 === t && (t = {});
                var n = [e.followingAccountId, e.followedAccountId];
                switch (e.type) {
                    case o.a:
                        return i()(n, !0, t);
                    case o.b:
                        return i()(n, !1, t)
                }
                return t
            }
        },
        252: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return d
            });
            var r = n(1),
                i = n(4),
                o = n.n(i),
                a = n(214),
                u = n.n(a),
                c = n(45),
                s = n(78),
                l = n(38);

            function d(t, e) {
                var n;
                switch (void 0 === t && (t = {}), e.type) {
                    case c.a:
                        return e.accounts ? Object(r.a)({}, t, e.accounts) : t;
                    case s.a:
                        return o()([e.accountId, "isFollowedByCurrentUser"], !0, t);
                    case s.b:
                        return o()([e.accountId, "isFollowedByCurrentUser"], !1, t);
                    case l.d:
                        return n = Object(r.a)({}, t), u()(function(t) {
                            n = o()([t, "isProjectRequestedByCurrentUser"], !0, n)
                        }, e.targetAccountIds), Object(r.a)({}, n);
                    case l.e:
                        return n = Object(r.a)({}, t), u()(function(t) {
                            n = o()([t, "isProjectRequestedByCurrentUser"], !1, n)
                        }, e.targetAccountIds), Object(r.a)({}, n)
                }
                return t
            }
        },
        253: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return i
            });
            var r = {};

            function i(t) {
                return void 0 === t && (t = r), t
            }
        },
        254: function(t, e, n) {
            "use strict";

            function r(t) {
                return void 0 === t && (t = {}), t
            }
            n.r(e), n.d(e, "default", function() {
                return r
            })
        },
        255: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return a
            });
            var r = n(1),
                i = n(97),
                o = {
                    creation: null,
                    bookedStats: {}
                };

            function a(t, e) {
                switch (void 0 === t && (t = o), e.type) {
                    case i.i:
                        return Object(r.a)({}, t, e.data);
                    case i.e:
                        return Object(r.a)({}, t, {
                            creation: e.data
                        });
                    case i.a:
                        return Object(r.a)({}, t, {
                            creation: null
                        });
                    case i.h:
                        var n = Object(r.a)({}, t.bookedStats, e.data);
                        return Object(r.a)({}, t, {
                            bookedStats: n
                        })
                }
                return t
            }
        },
        256: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return a
            });
            var r = n(1),
                i = n(42),
                o = {
                    items: [],
                    data: {},
                    isLoading: !1
                };

            function a(t, e) {
                var n;
                switch (void 0 === t && (t = o), e.type) {
                    case i.h:
                        return Object(r.a)({}, t, e.newStateData, {
                            isLoading: !1
                        });
                    case i.l:
                        return Object(r.a)({}, t, {
                            items: e.items,
                            isLoading: !1
                        });
                    case i.k:
                        var a = Object(r.a)({}, t.activityGroups, e.activityGroups);
                        return Object(r.a)({}, t, {
                            activityGroups: a
                        });
                    case i.a:
                        var u = Object(r.a)({}, t.data, e.data);
                        return Object(r.a)({}, t, {
                            data: u
                        });
                    case i.d:
                        return Object(r.a)({}, t, {
                            startDate: e.startDate,
                            endDate: e.endDate,
                            isLoading: !0
                        });
                    case i.i:
                        return Object(r.a)({}, t, {
                            isLoading: !0
                        });
                    case i.j:
                        return Object(r.a)({}, t, {
                            isLoading: !1
                        });
                    case i.f:
                        return Object(r.a)({}, t, {
                            orderId: e.orderId,
                            lineItemId: null
                        });
                    case i.c:
                        return Object(r.a)({}, t, {
                            creativeId: e.creativeId
                        });
                    case i.e:
                        return Object(r.a)({}, t, {
                            lineItemId: e.lineItemId
                        });
                    case i.b:
                        return Object(r.a)({}, t, {
                            companyId: e.companyId
                        });
                    case i.g:
                        return Object(r.a)({}, t, {
                            data: Object(r.a)({}, t.data, (n = {}, n[e.rgKey] = Object(r.a)({}, t.data[e.rgKey], e.data), n))
                        })
                }
                return t
            }
        },
        257: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return a
            });
            var r = n(1),
                i = n(195),
                o = {
                    items: {},
                    events: {},
                    candidates: {}
                };

            function a(t, e) {
                switch (void 0 === t && (t = o), e.type) {
                    case i.a:
                        return Object(r.a)({}, t, e.nextState)
                }
                return t
            }
        },
        258: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return a
            });
            var r = n(1),
                i = n(104),
                o = {
                    items: {}
                };

            function a(t, e) {
                switch (void 0 === t && (t = o), e.type) {
                    case i.a:
                        var n;
                        return Object(r.a)({}, t, {
                            items: Object(r.a)({}, t.items, (n = {}, n[e.contentItem.rgKey] = e.contentItem, n))
                        });
                    case i.b:
                        return Object(r.a)({}, t, {
                            items: Object(r.a)({}, t.items, e.contentItems)
                        })
                }
                return t
            }
        },
        259: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return o
            });
            var r = n(1),
                i = n(128);

            function o(t, e) {
                switch (void 0 === t && (t = {}), e.type) {
                    case i.a:
                        var n = Object(r.a)({}, t.options, e.options);
                        return Object(r.a)({}, t, {
                            options: n
                        })
                }
                return t
            }
        },
        26: function(t, e, n) {
            "use strict";

            function r(t) {
                "AbortError" !== t.name && "undefined" != typeof window && window.Bugsnag && ("string" == typeof t ? window.Bugsnag.notify("js-error", t, {}) : ("function" != typeof t.shouldSendToKibana || t.shouldSendToKibana()) && window.Bugsnag.notifyException(t))
            }
            n.r(e), n.d(e, "default", function() {
                return r
            })
        },
        261: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return o
            });
            var r = n(1),
                i = n(202);

            function o(t, e) {
                switch (void 0 === t && (t = {}), e.type) {
                    case i.a:
                        var n = Object(r.a)({}, t.options, e.options);
                        return Object(r.a)({}, t, {
                            options: n
                        })
                }
                return t
            }
        },
        262: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return u
            });
            var r, i = n(1),
                o = n(211),
                a = n(9),
                u = {
                    adminPerformanceChartUpdate: {
                        chartId: null,
                        config: null
                    }
                };
            e.default = Object(a.a)(u, ((r = {})[o.a] = function(t, e) {
                var n = Object(i.a)({}, t);
                return n.adminPerformanceChartUpdate = {
                    chartId: e.chartId,
                    config: e.config
                }, n
            }, r))
        },
        263: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return s
            });
            var r, i = n(1),
                o = n(131),
                a = n(4),
                u = n.n(a),
                c = n(9),
                s = {
                    activeAccountCount: null,
                    accountActivationsDaily: null,
                    accountActivationsWeekly: null,
                    invitationActivationsDaily: null,
                    invitationActivationsWeekly: null,
                    accountActivationsDailyPast: null,
                    accountActivationsWeeklyPast: null,
                    invitationActivationsDailyPast: null,
                    invitationActivationsWeeklyPast: null,
                    wau: null,
                    dau: null,
                    isBusy: !1
                };
            e.default = Object(c.a)(s, ((r = {})[o.c] = function(t, e) {
                return u()("isBusy", e.isBusy, t)
            }, r[o.b] = function(t, e) {
                var n = Object(i.a)({}, t);
                return n.activeAccountCount = e.activeAccountCount, n.accountActivationsDaily = e.accountActivationsDaily, n.accountActivationsWeekly = e.accountActivationsWeekly, n.invitationActivationsDaily = e.invitationActivationsDaily, n.invitationActivationsWeekly = e.invitationActivationsWeekly, n.accountActivationsDailyPast = e.accountActivationsDailyPast, n.accountActivationsWeeklyPast = e.accountActivationsWeeklyPast, n.invitationActivationsDailyPast = e.invitationActivationsDailyPast, n.invitationActivationsWeeklyPast = e.invitationActivationsWeeklyPast, n
            }, r[o.a] = function(t, e) {
                var n = Object(i.a)({}, t);
                e.wau && (n.wau = e.wau);
                e.dau && (n.dau = e.dau);
                return n
            }, r))
        },
        264: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return o
            });
            var r = n(1),
                i = n(196);

            function o(t, e) {
                switch (void 0 === t && (t = {}), e.type) {
                    case i.a:
                        return Object(r.a)({}, t, e.values)
                }
                return t
            }
        },
        265: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return u
            });
            var r = n(207),
                i = n(36),
                o = n.n(i),
                a = {
                    additionalEmail: ""
                };

            function u(t, e) {
                switch (void 0 === t && (t = a), void 0 === e && (e = {}), e.type) {
                    case r.c:
                        return function(t, e) {
                            return o()(t, {
                                additionalEmail: e
                            })
                        }(t, e.payload.result.email)
                }
                return t
            }
        },
        266: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return d
            });
            var r = n(1),
                i = n(47),
                o = n(101),
                a = n.n(o),
                u = n(127),
                c = n.n(u),
                s = n(65),
                l = n.n(s);

            function d(t, e) {
                switch (void 0 === t && (t = {}), e.type) {
                    case i.j:
                        return p(t, e.snippetId, function(t) {
                            return function(t, e) {
                                return Object(r.a)({}, t, e)
                            }(t, e)
                        });
                    case i.g:
                        return function(t, e) {
                            var n = t.adUnits;
                            return a()(e, function(t, e) {
                                n[e].refreshTimer = t
                            }), Object(r.a)({}, t, {
                                adUnits: Object(r.a)({}, n)
                            })
                        }(t, e.refreshes);
                    case i.i:
                        return p(t, e.snippetId, function(t) {
                            return function(t, e) {
                                var n = e.creativeId,
                                    i = e.isEmpty,
                                    o = e.lineItemId,
                                    a = e.advertiserId,
                                    u = e.serviceName,
                                    c = e.size,
                                    s = e.creativeTemplateId;
                                return Object(r.a)({}, t, {
                                    creativeId: n,
                                    isEmpty: i,
                                    lineItemId: o,
                                    advertiserId: a,
                                    serviceName: u,
                                    size: c,
                                    renderCount: t.renderCount + 1,
                                    creativeTemplateId: s
                                })
                            }(t, e)
                        });
                    case i.e:
                        return p(t, e.snippetId, function(t) {
                            return f(t, !0)
                        });
                    case i.c:
                        return p(t, e.snippetId, function(t) {
                            return f(t, !1)
                        });
                    case i.h:
                        return p(t, e.snippetId, function(t) {
                            return function(t, e) {
                                var n = t.refreshCounter;
                                return n++, Object(r.a)({}, t, {
                                    lastRefresh: e,
                                    refreshCounter: n
                                })
                            }(t, e.lastRefresh)
                        });
                    case i.f:
                        return function(t, e) {
                            return Object(r.a)({}, t, {
                                adUnits: c()(t.adUnits, function(t, n) {
                                    return n !== e
                                })
                            })
                        }(t, e.snippetId);
                    case i.b:
                        return p(t, e.snippetId, function(t) {
                            return function(t) {
                                return Object(r.a)({}, t, {
                                    isDisabled: !0,
                                    refreshTimer: 0,
                                    refreshCounter: 0,
                                    renderCount: 0,
                                    lastRefresh: null,
                                    creativeId: null,
                                    isEmpty: null,
                                    lineItemId: null,
                                    advertiserId: null,
                                    serviceName: null,
                                    size: null,
                                    slot: null,
                                    snippetId: l()("google-dfp-snippet-")
                                })
                            }(t)
                        });
                    case i.d:
                        return p(t, e.snippetId, function(t) {
                            return function(t, e) {
                                void 0 === e && (e = {});
                                return Object(r.a)({}, t, {
                                    isDisabled: !1,
                                    targetingInfo: Object(r.a)({}, t.targetingInfo, e)
                                })
                            }(t, e.targetingInfo)
                        });
                    case i.a:
                        return p(t, e.snippetId, function(t) {
                            return function(t, e) {
                                var n = e.interactionGoals,
                                    i = Object(r.a)({}, t);
                                i.interactionGoals || (i.interactionGoals = []);
                                n && (i.interactionGoals = i.interactionGoals.concat(n));
                                return i
                            }(t, e)
                        })
                }
                return t
            }

            function f(t, e) {
                return Object(r.a)({}, t, {
                    refreshOn: e
                })
            }

            function p(t, e, n) {
                var i, o = t.adUnits[e],
                    a = Object(r.a)({}, t.adUnits, ((i = {})[e] = n(o), i)),
                    u = {};
                return Object.keys(a).forEach(function(t) {
                    var e = a[t],
                        n = e.slotId,
                        r = e.advertiserId;
                    r && (u[n] || (u[n] = []), -1 === u[n].indexOf(r) && u[n].push(r))
                }), Object(r.a)({}, t, {
                    excludedAdvertisers: u,
                    adUnits: a
                })
            }
        },
        267: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return i
            });
            var r = {};

            function i(t) {
                return void 0 === t && (t = r), t
            }
        },
        268: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return a
            });
            var r = n(1),
                i = n(152),
                o = {
                    isOpen: !1,
                    origin: null,
                    addProjectUrlParams: null
                };

            function a(t, e) {
                switch (void 0 === t && (t = o), void 0 === e && (e = {}), e.type) {
                    case i.b:
                        return Object(r.a)({}, t, {
                            isOpen: e.payload.isOpen,
                            origin: e.payload.origin
                        });
                    case i.a:
                        return Object(r.a)({}, t, {
                            addProjectUrlParams: e.payload
                        })
                }
                return t
            }
        },
        269: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return u
            }), n.d(e, "default", function() {
                return c
            });
            var r = n(1),
                i = n(48),
                o = n.n(i),
                a = n(74);
            var u = {
                pendingRequests: {
                    count: 0,
                    wasSeen: !1
                },
                unseenMessages: {
                    count: 0,
                    wasSeen: !1
                },
                unseenSubscriptions: {
                    count: 0,
                    wasSeen: !1
                }
            };

            function c(t, e) {
                switch (void 0 === t && (t = u), void 0 === e && (e = {}), e.type) {
                    case a.f:
                        return o()({}, t, e.result);
                    case a.a:
                        return Object(r.a)({}, t, {
                            errors: e.errors
                        });
                    case a.d:
                        return o()({}, t, {
                            pendingRequests: {
                                wasSeen: !0
                            }
                        });
                    case a.c:
                        return o()({}, t, {
                            pendingRequests: {
                                count: 0
                            }
                        });
                    case a.b:
                        return o()({}, t, {
                            unseenMessages: {
                                wasSeen: !0
                            }
                        });
                    case a.e:
                        return o()({}, t, {
                            unseenSubscriptions: {
                                count: 0,
                                wasSeen: !0
                            }
                        })
                }
                return t
            }
        },
        27: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return s
            }), n.d(e, "d", function() {
                return l
            }), n.d(e, "b", function() {
                return d
            }), n.d(e, "c", function() {
                return f
            });
            var r = n(1),
                i = n(3),
                o = n(31),
                a = "application.AjaxCommon.ajaxScoreGoal.html",
                u = "_sg",
                c = "_sgd";

            function s(t, e, n, r) {
                return t ? Object(o.trackingConfigExists)() && !0 === Object(o.getTrackingConfigValue)(o.TRACKING_IS_CRAWLER) ? Promise.resolve() : Object(i.default)(a, {
                    method: "POST",
                    query: {
                        encExpParams: t,
                        viewIds: e,
                        data: n,
                        reward: r
                    }
                }) : Promise.resolve()
            }
            var l = function(t) {
                return t ? 0 === t.length ? Promise.resolve() : Object(o.trackingConfigExists)() && !0 === Object(o.getTrackingConfigValue)(o.TRACKING_IS_CRAWLER) ? Promise.resolve() : Object(i.default)("application.AjaxCommon.scoreGoals.html", {
                    method: "POST",
                    body: {
                        encExpParams: t
                    }
                }) : Promise.resolve()
            };

            function d(t, e) {
                var n;
                return void 0 === e && (e = {}), Object(r.a)(((n = {})[u] = t, n), f(e))
            }

            function f(t) {
                void 0 === t && (t = {});
                var e = {};
                return Object.keys(t).length > 0 && (e[c] = t), e
            }
        },
        270: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return o
            });
            var r = n(1),
                i = n(64);

            function o(t, e) {
                switch (void 0 === t && (t = {}), e.type) {
                    case i.a:
                        return function(t, e, n) {
                            var i;
                            return Object(r.a)({}, t, {
                                targeting: Object(r.a)({}, t.targeting, (i = {}, i[e] = n, i))
                            })
                        }(t, e.field, e.value);
                    case i.b:
                        return Object(r.a)({}, t, {
                            targeting: Object(r.a)({}, t.targeting, e.updates)
                        })
                }
                return t
            }
        },
        271: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(4),
                i = n.n(r),
                o = n(133),
                a = {
                    isVisible: !0,
                    show: !1,
                    userData: {}
                };
            e.default = function(t, e) {
                switch (void 0 === t && (t = a), e.type) {
                    case o.b:
                        return Object(o.c)(t, e);
                    case o.a:
                        return i()("isVisible", !1, t)
                }
                return t
            }
        },
        272: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return c
            }), n.d(e, "handleMergeState", function() {
                return s
            });
            var r, i = n(7),
                o = n(9),
                a = n(10),
                u = n(167),
                c = Object(a.fromJS)({
                    charts: {}
                });

            function s(t, e) {
                return t.mergeDeep(e.data.commonChartInteraction)
            }
            e.default = Object(o.a)(c, ((r = {})[i.a] = s, r[u.a] = function(t, e) {
                var n = e.payload,
                    r = n.chartId,
                    i = n.interaction;
                return t.setIn(["charts", r, "interaction"], i)
            }, r[u.b] = function(t, e) {
                var n = e.payload.chartId;
                return t.setIn(["charts", n, "interaction"], null)
            }, r))
        },
        273: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return u
            }), n.d(e, "handleMergeState", function() {
                return c
            });
            var r, i = n(7),
                o = n(9),
                a = n(10),
                u = Object(a.fromJS)({
                    cities: {}
                });

            function c(t, e) {
                return t.mergeDeep(e.data.commonCities)
            }
            e.default = Object(o.a)(u, ((r = {})[i.a] = c, r))
        },
        274: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return u
            }), n.d(e, "handleMergeState", function() {
                return c
            });
            var r, i = n(7),
                o = n(9),
                a = n(10),
                u = Object(a.fromJS)({
                    countries: {}
                });

            function c(t, e) {
                return t.mergeDeep(e.data.commonCountries)
            }
            e.default = Object(o.a)(u, ((r = {})[i.a] = c, r))
        },
        275: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return c
            });
            var r, i = n(10),
                o = n(9),
                a = n(7),
                u = n(215),
                c = Object(i.fromJS)({
                    entities: {}
                });
            e.default = Object(o.a)(c, ((r = {})[a.a] = function(t, e) {
                return t.merge(e.data.complaintsEntityComplaints)
            }, r[u.a] = function(t, e) {
                var n = e.payload.entityId;
                return t.mergeIn(["entities", n], {
                    reported: !0
                })
            }, r))
        },
        276: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return c
            }), n.d(e, "handleMergeState", function() {
                return s
            }), n.d(e, "handleSetExternalUrlEntityKey", function() {
                return l
            }), n.d(e, "handleUnsetExternalUrlEntityKey", function() {
                return d
            }), n.d(e, "handleUndoExternalUrlConversion", function() {
                return f
            }), n.d(e, "handleSetEditorStatus", function() {
                return p
            });
            var r, i = n(7),
                o = n(9),
                a = n(10),
                u = n(95),
                c = Object(a.fromJS)({
                    externalUrl: "",
                    externalUrlKey: "",
                    undoExternalUrlConversion: !1,
                    editorStatus: ""
                });

            function s(t) {
                return t
            }

            function l(t, e) {
                var n = e.payload,
                    r = n.externalUrlKey,
                    i = n.externalUrl;
                return t.merge({
                    externalUrlKey: r,
                    externalUrl: i
                })
            }

            function d() {
                return c
            }

            function f(t) {
                return t.merge({
                    undoExternalUrlConversion: !0
                })
            }

            function p(t, e) {
                var n = e.payload.editorStatus;
                return t.merge({
                    editorStatus: n
                })
            }
            e.default = Object(o.a)(c, ((r = {})[i.a] = s, r[u.b] = l, r[u.d] = d, r[u.c] = f, r[u.a] = p, r))
        },
        277: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return u
            }), n.d(e, "handleMergeState", function() {
                return c
            });
            var r, i = n(7),
                o = n(9),
                a = n(10),
                u = Object(a.fromJS)({
                    links: {},
                    parentIdToLinkIds: {}
                });

            function c(t, e) {
                return t.mergeDeep(e.data.converseLinks)
            }
            e.default = Object(o.a)(u, ((r = {})[i.a] = c, r))
        },
        278: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return c
            });
            var r, i = n(7),
                o = n(9),
                a = n(10),
                u = n(156),
                c = Object(a.fromJS)({
                    rootId: null,
                    boostedAccountIds: [],
                    isLoading: !1
                });
            e.default = Object(o.a)(c, ((r = {})[i.a] = function(t, e) {
                return t.merge(e.data.converseMentions)
            }, r[u.b] = function(t) {
                return t.merge({
                    isLoading: !0
                })
            }, r[u.a] = function(t, e) {
                return t.update(function(t) {
                    return t.set("isLoading", !1).update("boostedAccountIds", function(t) {
                        return t.concat(e.payload.boostedAccountIds)
                    })
                })
            }, r))
        },
        279: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return u
            }), n.d(e, "handleMergeState", function() {
                return c
            });
            var r, i = n(7),
                o = n(9),
                a = n(10),
                u = Object(a.fromJS)({
                    messages: {}
                });

            function c(t, e) {
                return t.mergeDeep(e.data.converseMessageStats)
            }
            e.default = Object(o.a)(u, ((r = {})[i.a] = c, r))
        },
        280: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return s
            });
            var r, i = n(7),
                o = n(9),
                a = n(10),
                u = n(14),
                c = n(40),
                s = Object(a.fromJS)({
                    messages: {},
                    rootIdToMessageIds: {},
                    messageIdToReplyIds: {},
                    messageIdToDraftId: {},
                    composer: {}
                });

            function l(t, e) {
                return t.has("messageIds") ? t.get("messageIds").indexOf(e) : -1
            }

            function d(t, e) {
                return t.has("replyIds") ? t.get("replyIds").indexOf(e) : -1
            }
            e.default = Object(o.a)(s, ((r = {})[i.a] = function(t, e) {
                var n = e.data.converseMessages,
                    r = n.messages,
                    i = n.rootIdToMessageIds,
                    o = n.messageIdToReplyIds;
                r && (t = t.mergeIn(["messages"], r));
                i && (t = t.updateIn(["rootIdToMessageIds"], function(t) {
                    var e = function(e) {
                        if (!i.hasOwnProperty(e)) return "continue";
                        var n = i[e];
                        if (!t.has(e)) return t = t.set(e, Object(a.fromJS)(n)), "continue";
                        t = t.updateIn([e, "messageIds"], function(t) {
                            return t.concat(n.messageIds)
                        }).setIn([e, "totalCount"], n.totalCount)
                    };
                    for (var n in i) e(n);
                    return t
                }));
                o && (t = t.updateIn(["messageIdToReplyIds"], function(t) {
                    var e = function(e) {
                        if (!o.hasOwnProperty(e)) return "continue";
                        var n = o[e];
                        if (!t.has(e)) return t = t.set(e, Object(a.fromJS)(n)), "continue";
                        t = t.updateIn([e, "replyIds"], function(t) {
                            return t.concat(n.replyIds)
                        }).setIn([e, "totalCount"], n.totalCount)
                    };
                    for (var n in o) e(n);
                    return t
                }));
                return t
            }, r[c.a] = function(t, e) {
                if (e.meta.status === c.f.SUCCESS) {
                    var n, r = e.payload,
                        i = r.message,
                        o = r.message.id,
                        s = String(u.a.parse(i.rootId).id),
                        l = {
                            rootIdToMessageIds: (n = {}, n[s] = {
                                messageIds: t.getIn(["rootIdToMessageIds", s, "messageIds"], new a.List).unshift(o),
                                totalCount: t.getIn(["rootIdToMessageIds", s, "totalCount"], 0) + 1
                            }, n)
                        };
                    t = t.mergeDeep(l)
                }
                return t
            }, r[c.d] = function(t, e) {
                if (e.meta.status === c.f.SUCCESS) {
                    var n = e.payload,
                        r = n.message,
                        i = n.message.id,
                        o = String(u.a.parse(r.rootId).id);
                    t = t.deleteIn(["messages", i]).updateIn(["rootIdToMessageIds", o], function(t) {
                        return t.update(function(t) {
                            for (var e; - 1 !== (e = l(t, i));) t = t.deleteIn(["messageIds", e]).update("totalCount", function(t) {
                                return t - 1
                            });
                            return t
                        })
                    })
                }
                return t
            }, r[c.b] = function(t, e) {
                if (e.meta.status === c.f.SUCCESS) {
                    var n, r = e.payload.message,
                        i = r.id,
                        o = r.replyTo,
                        u = {
                            messageIdToReplyIds: (n = {}, n[o] = {
                                replyIds: t.getIn(["messageIdToReplyIds", o, "replyIds"], new a.List).unshift(i),
                                totalCount: t.getIn(["messageIdToReplyIds", o, "totalCount"], 0) + 1
                            }, n)
                        };
                    t = t.mergeDeep(u)
                }
                return t
            }, r[c.c] = function(t, e) {
                var n = e.payload,
                    r = n.rootId,
                    i = n.parentId,
                    o = n.highlight;
                return t.setIn(["composer"], new a.Map({
                    rootId: r,
                    parentId: i,
                    highlight: o
                }))
            }, r[c.e] = function(t, e) {
                if (e.meta.status === c.f.SUCCESS) {
                    var n = e.payload.message,
                        r = n.id,
                        i = n.replyTo;
                    t = t.deleteIn(["messages", r]).updateIn(["messageIdToReplyIds", i], function(t) {
                        return t.update(function(t) {
                            for (var e; - 1 !== (e = d(t, r));) t = t.deleteIn(["replyIds", e]).update("totalCount", function(t) {
                                return t - 1
                            });
                            return t
                        })
                    })
                }
                return t
            }, r[c.g] = function(t, e) {
                if (e.meta.status === c.f.SUCCESS) {
                    var n = e.payload,
                        r = n.oldMessageId,
                        i = n.message,
                        o = i.id,
                        a = i.rootId,
                        s = String(u.a.parse(a).id);
                    t = t.updateIn(["rootIdToMessageIds", s], function(t) {
                        for (var e; - 1 !== (e = l(t, r));) t = t.setIn(["messageIds", e], o);
                        return t
                    })
                }
                return t
            }, r[c.h] = function(t, e) {
                if (e.meta.status === c.f.SUCCESS) {
                    var n = e.payload,
                        r = n.replyTo,
                        i = n.oldMessageId,
                        o = n.message.id;
                    t = t.updateIn(["messageIdToReplyIds", r], function(t) {
                        for (var e; - 1 !== (e = d(t, i));) t = t.setIn(["replyIds", e], o);
                        return t
                    })
                }
                return t
            }, r))
        },
        281: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return a
            });
            var r = n(1),
                i = n(158),
                o = {
                    activeTabName: i.b
                };

            function a(t, e) {
                switch (void 0 === t && (t = o), void 0 === e && (e = {}), e.type) {
                    case i.a:
                        return Object(r.a)({}, t, {
                            activeTabName: e.activeTabName
                        })
                }
                return t
            }
        },
        282: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return c
            }), n.d(e, "handleMergeState", function() {
                return s
            });
            var r, i = n(7),
                o = n(208),
                a = n(9),
                u = n(10),
                c = Object(u.fromJS)({
                    institutions: {}
                });

            function s(t, e) {
                return t.mergeDeep(e.data.institutionsInstitutions)
            }
            e.default = Object(a.a)(c, ((r = {})[i.a] = s, r[o.a] = function(t, e) {
                var n = e.institutions;
                return t.mergeDeep(n)
            }, r))
        },
        283: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return c
            });
            var r = n(120),
                i = n(4),
                o = n.n(i),
                a = n(14),
                u = {
                    authors: {}
                };

            function c(t, e) {
                switch (void 0 === t && (t = u), e.type) {
                    case r.b:
                        return function(t, e) {
                            var n = new a.a(e.authorUid, a.b.TYPE_AUTHOR);
                            return o()(["authors", n.toString(), "suggestedEmail"], null, t)
                        }(t, e);
                    case r.a:
                        return function(t, e) {
                            var n = new a.a(e.authorUid, a.b.TYPE_AUTHOR),
                                r = o()(["authors", n.toString(), "email"], t.authors[n.toString()].suggestedEmail, t);
                            return o()(["authors", n.toString(), "usedSuggestedEmail"], !0, r)
                        }(t, e);
                    case r.c:
                        return function(t, e) {
                            var n = new a.a(e.authorUid, a.b.TYPE_AUTHOR);
                            return o()(["authors", n.toString(), "email"], e.email, t)
                        }(t, e)
                }
                return t
            }
        },
        284: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, i = n(166),
                o = n(7),
                a = n(9),
                u = n(36),
                c = n.n(u);
            e.default = Object(a.a)({}, ((r = {})[i.b] = function(t, e) {
                var n, r = ((n = {})[e.invitationKey] = {
                    status: "reinvited"
                }, n);
                return c()(t, r)
            }, r[i.a] = function(t, e) {
                var n, r = ((n = {})[e.invitationKey] = {
                    status: e.shouldRemove ? "blacklisted" : ""
                }, n);
                return c()(t, r)
            }, r[o.a] = function(t, e) {
                return e.data.invitationsReinvite
            }, r))
        },
        285: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return o
            });
            var r = n(1),
                i = n(50);

            function o(t, e) {
                switch (void 0 === t && (t = {}), e.type) {
                    case i.a:
                        return a(t, e.jobId, function(t) {
                            return function(t, e) {
                                return Object(r.a)({}, t, {
                                    satisfaction: e
                                })
                            }(t, e.satisfaction)
                        });
                    case i.e:
                        return a(t, e.jobId, function(t) {
                            return u(t, 2)
                        });
                    case i.f:
                        return a(t, e.jobId, function(t) {
                            return u(t, 1)
                        });
                    case i.c:
                        return a(t, e.jobId, function(t) {
                            return c(t, 1)
                        });
                    case i.b:
                        return a(t, e.jobId, function(t) {
                            return c(t, 2)
                        });
                    case i.i:
                        return a(t, e.jobId, function(t) {
                            return function(t, e) {
                                return Object(r.a)({}, t, {
                                    step: e
                                })
                            }(t, e.step)
                        });
                    case i.h:
                        return a(t, e.jobId, function(t) {
                            return function(t, e) {
                                return Object(r.a)({}, t, {
                                    hiring: e
                                })
                            }(t, e.hiring)
                        });
                    case i.g:
                        return a(t, e.jobId, function(t) {
                            return function(t, e) {
                                return Object(r.a)({}, t, {
                                    feedback: e
                                })
                            }(t, e.feedback)
                        });
                    case i.d:
                        return a(t, e.jobId, function(t) {
                            return function(t, e) {
                                return Object(r.a)({}, t, {
                                    consent: e
                                })
                            }(t, e.consent)
                        })
                }
                return t
            }

            function a(t, e, n) {
                var i, o = n(t[e]);
                return Object(r.a)({}, t, ((i = {})[e] = o, i))
            }

            function u(t, e) {
                return Object(r.a)({}, t, {
                    status: t.status | e
                })
            }

            function c(t, e) {
                return Object(r.a)({}, t, {
                    status: t.status & ~e
                })
            }
        },
        286: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return f
            });
            var r = n(119),
                i = n(4),
                o = n.n(i),
                a = n(58),
                u = n.n(a),
                c = n(14),
                s = n(49),
                l = n.n(s),
                d = {
                    selectedItems: {},
                    searchableItems: []
                };

            function f(t, e) {
                switch (void 0 === t && (t = d), e.type) {
                    case r.a:
                        return function(t, e) {
                            var n = !1;
                            if (Object.keys(t.selectedItems).some(function(r) {
                                    if (e.item.rgKey in t.selectedItems[r]) return n = !0, !0
                                }), n || !c.a.parse(e.item.rgKey)) return t;
                            return o()(["selectedItems", e.name, e.item.rgKey], e.item, t)
                        }(t, e);
                    case r.c:
                        return function(t, e) {
                            if (!c.a.parse(e.item.rgKey)) return t;
                            return u()(["selectedItems", e.name, e.item.rgKey], t)
                        }(t, e);
                    case r.b:
                        return function(t) {
                            return (t = l()(t)).selectedItems = {}, t
                        }(t)
                }
                return t
            }
        },
        287: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return f
            });
            var r = n(1),
                i = n(153),
                o = n(4),
                a = n.n(o),
                u = n(58),
                c = n.n(u),
                s = {
                    selectedPublications: {},
                    removedPublications: {}
                },
                l = function(t, e) {
                    var n = e;
                    t.removedPublications.hasOwnProperty(e.id) && (n = Object(r.a)({}, t.removedPublications[e.id]));
                    var i = a()(["selectedPublications", n.id], n, t);
                    return c()(["removedPublications", n.id], i)
                },
                d = function(t, e) {
                    var n = e;
                    t.selectedPublications.hasOwnProperty(e.id) && (n = Object(r.a)({}, t.selectedPublications[e.id]));
                    var i = c()(["selectedPublications", n.id], t);
                    return a()(["removedPublications", n.id], n, i)
                };

            function f(t, e) {
                void 0 === t && (t = s);
                var n = e.type,
                    r = e.publication;
                switch (n) {
                    case i.a:
                        return l(t, r);
                    case i.b:
                        return d(t, r)
                }
                return t
            }
        },
        288: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return l
            });
            var r = n(1),
                i = n(80),
                o = n(79),
                a = n(4),
                u = n.n(a),
                c = n(13),
                s = n.n(c);

            function l(t, e) {
                switch (void 0 === t && (t = {}), e.type) {
                    case i.b:
                        return function(t, e) {
                            var n = d(t, e);
                            return u()(e.id, Object(r.a)({}, n, {
                                isLoading: !0
                            }), t)
                        }(t, e);
                    case i.a:
                        return function(t, e) {
                            var n = d(t = f(t, e), e),
                                r = e.likesRgIdLikers[e.id];
                            return t = u()([e.id, "items"], n.items.concat(r.items), t), t = u()([e.id, "totalItems"], r.totalItems, t), t = u()([e.id, "offset"], r.offset, t)
                        }(t, e);
                    case i.d:
                        return f(t, e);
                    case i.c:
                        return function(t, e) {
                            return u()(e.id, o.a, t)
                        }(t, e)
                }
                return t
            }

            function d(t, e) {
                return s()(t, e.id, o.a)
            }

            function f(t, e) {
                var n = d(t, e);
                return u()(e.id, Object(r.a)({}, n, {
                    isLoading: !1
                }), t)
            }
        },
        289: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return p
            });
            var r = n(1),
                i = n(4),
                o = n.n(i),
                a = n(13),
                u = n.n(a),
                c = n(107),
                s = n.n(c),
                l = n(141),
                d = n(132),
                f = {};

            function p(t, e) {
                switch (void 0 === t && (t = f), e.type) {
                    case d.a:
                        return function(t, e) {
                            var n = e.id,
                                i = m(n, t);
                            return h(n, Object(r.a)({}, i, {
                                liked: !0,
                                total: i.total + 1,
                                accountIds: [e.accountId].concat(i.accountIds)
                            }), t)
                        }(t, e);
                    case d.b:
                        return function(t, e) {
                            var n = e.id,
                                i = m(n, t);
                            return h(n, Object(r.a)({}, i, {
                                liked: !1,
                                total: i.total - 1,
                                accountIds: s()(i.accountIds, function(t) {
                                    return t !== e.accountId
                                })
                            }), t)
                        }(t, e)
                }
                return t
            }

            function m(t, e) {
                return u()(e, t, l.a)
            }

            function h(t, e, n) {
                return o()(t, e, n)
            }
        },
        290: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return c
            });
            var r = n(1),
                i = n(159),
                o = n.n(i),
                a = n(205),
                u = {
                    resolvedPublicationRequests: []
                };

            function c(t, e) {
                switch (void 0 === t && (t = u), e.type) {
                    case a.a:
                        return e.publicationUid ? Object(r.a)({}, t, {
                            resolvedPublicationRequests: o()(t.resolvedPublicationRequests, [e.publicationUid])
                        }) : t
                }
                return t
            }
        },
        291: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return o
            });
            var r = n(1),
                i = n(129);

            function o(t, e) {
                switch (void 0 === t && (t = {}), e.type) {
                    case i.a:
                        return e.authors ? Object(r.a)({}, t, e.authors) : t
                }
                return t
            }
        },
        292: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return u
            });
            var r, i = n(1),
                o = n(9),
                a = n(130),
                u = {
                    publicationData: {},
                    stepIndex: 0
                };
            e.default = Object(o.a)(u, ((r = {})[a.b] = function(t, e) {
                return Object(i.a)({}, t, {
                    publicationData: Object(i.a)({}, t.publicationData, e.payload)
                })
            }, r[a.c] = function(t, e) {
                return Object(i.a)({}, t, {
                    publicationRelation: Object(i.a)({}, t.publicationRelation, e.payload)
                })
            }, r[a.a] = function(t, e) {
                return Object(i.a)({}, t, {
                    stepIndex: e.payload.stepIndex
                })
            }, r))
        },
        293: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return u
            });
            var r, i = n(1),
                o = n(9),
                a = n(170),
                u = {
                    hasUserDeletedTheySelf: !1,
                    isAuthorEditRequestOpen: !1
                };
            e.default = Object(o.a)(u, ((r = {})[a.b] = function(t, e) {
                return Object(i.a)({}, t, {
                    hasUserDeletedTheySelf: e.payload.hasUserDeletedTheySelf
                })
            }, r[a.a] = function(t, e) {
                return Object(i.a)({}, t, {
                    isAuthorEditRequestOpen: e.payload.isAuthorEditRequestOpen
                })
            }, r))
        },
        294: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return o
            });
            var r = n(1),
                i = n(98);

            function o(t, e) {
                switch (void 0 === t && (t = {}), e.type) {
                    case i.d:
                        return e.file ? Object(r.a)({}, t, {
                            temporaryFile: e.file
                        }) : t;
                    case i.b:
                        return Object(r.a)({}, t, {
                            temporaryFile: null
                        });
                    case i.c:
                        return e.link ? Object(r.a)({}, t, {
                            selectedLink: e.link
                        }) : t;
                    case i.a:
                        return Object(r.a)({}, t, {
                            selectedLink: null
                        })
                }
                return t
            }
        },
        295: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return o
            });
            var r = n(1),
                i = n(163);

            function o(t, e) {
                switch (void 0 === t && (t = i.c), e.type) {
                    case i.a:
                        return Object(r.a)({}, t, e.counters)
                }
                return t
            }
        },
        296: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "requestCount", function() {
                return o
            }), n.d(e, "default", function() {
                return a
            });
            var r = n(1),
                i = n(204),
                o = {
                    pendingRequestsCount: 0,
                    totalRequestsCount: 0
                };

            function a(t, e) {
                switch (void 0 === t && (t = o), e.type) {
                    case i.a:
                        return Object(r.a)({}, t, {
                            pendingRequestsCount: u(t)
                        })
                }
                return t
            }

            function u(t) {
                var e = t.pendingRequestsCount - 1;
                return e >= 0 ? e : 0
            }
        },
        297: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return s
            });
            var r = n(90),
                i = n(4),
                o = n.n(i),
                a = n(36),
                u = n.n(a),
                c = {
                    isProcessing: !1,
                    isSubmitSucceeded: !1,
                    additionalEmail: ""
                };

            function s(t, e) {
                switch (void 0 === t && (t = c), void 0 === e && (e = {}), e.type) {
                    case r.a:
                        return l(t, !0);
                    case r.d:
                        return function(t, e) {
                            return u()(t, {
                                isSubmitSucceeded: !0,
                                isProcessing: !1,
                                additionalEmail: e
                            })
                        }(t, e.payload.result.email);
                    case r.b:
                        return l(t, !1);
                    case r.c:
                        return c
                }
                return t
            }

            function l(t, e) {
                return o()("isProcessing", e, t)
            }
        },
        298: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return s
            });
            var r, i = n(7),
                o = n(102),
                a = n(9),
                u = n(10),
                c = n(32),
                s = Object(u.fromJS)({
                    mappings: [],
                    items: {},
                    filters: {
                        action: c.b,
                        type: c.j
                    },
                    offset: 0,
                    loadingCount: 0,
                    searchResults: []
                });
            e.default = Object(a.a)(s, ((r = {})[i.a] = function(t, e) {
                return t.mergeDeep(e.data.profileInterest)
            }, r[o.c] = function(t, e) {
                var n = e.payload;
                n.selectedType && n.selectedType !== t.getIn(["filters", "type"]) && (t = t.setIn(["filters", "type"], n.selectedType));
                n.selectedAction && n.selectedAction !== t.getIn(["filters", "action"]) && (t = t.setIn(["filters", "action"], n.selectedAction));
                return t
            }, r[o.d] = function(t, e) {
                var n = e.payload;
                return t.set("searchResults", n.searchResults)
            }, r[o.a] = function(t) {
                return t.set("loadingCount", t.get("loadingCount") + 1)
            }, r[o.b] = function(t, e) {
                var n = e.offset;
                return t.merge({
                    offset: n,
                    loadingCount: Math.max(t.get("loadingCount"), 1) - 1
                })
            }, r))
        },
        299: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return c
            }), n.d(e, "handleMergeState", function() {
                return s
            }), n.d(e, "toggleStickyHeader", function() {
                return l
            });
            var r, i = n(7),
                o = n(9),
                a = n(164),
                u = n(10),
                c = Object(u.fromJS)({
                    reports: {},
                    header: {
                        isSticky: !1
                    },
                    breakdown: {
                        date: ""
                    },
                    filter: null
                });

            function s(t, e) {
                return t.mergeDeep(e.data.profileStatsReport)
            }

            function l(t, e) {
                return t.setIn(["header", "isSticky"], e.payload.isSticky)
            }
            e.default = Object(o.a)(c, ((r = {})[i.a] = s, r[a.b] = l, r[a.a] = function(t, e) {
                return t.setIn(["filter"], e.payload.filter)
            }, r))
        },
        3: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(122);
            n.d(e, "sendBeacon", function() {
                return r.f
            }), n.d(e, "get", function() {
                return r.b
            }), n.d(e, "post", function() {
                return r.d
            }), n.d(e, "put", function() {
                return r.e
            }), n.d(e, "patch", function() {
                return r.c
            }), n.d(e, "default", function() {
                return r.a
            })
        },
        300: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return u
            }), n.d(e, "handleMergeState", function() {
                return c
            });
            var r, i = n(10),
                o = n(7),
                a = n(9),
                u = Object(i.fromJS)({
                    features: {
                        sectionStyle: "default"
                    }
                });

            function c(t, e) {
                return t.mergeDeep(e.data.profileStatsReportFeatures)
            }
            e.default = Object(a.a)(u, ((r = {})[o.a] = c, r))
        },
        301: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return l
            });
            var r, i = n(1),
                o = n(4),
                a = n.n(o),
                u = n(9),
                c = n(7),
                s = n(103),
                l = {
                    publicationUids: [],
                    totalItems: 0,
                    nextOffset: 0,
                    isFormVisible: !1
                };
            e.default = Object(u.a)(l, ((r = {})[c.a] = function(t, e) {
                var n = e.data;
                return Object(i.a)({}, t, n.projectsBibliography)
            }, r[s.a] = function(t, e) {
                return a()("publicationUids", t.publicationUids.concat(e.publicationUids), a()("nextOffset", e.nextOffset, t))
            }, r[s.c] = function(t, e) {
                return a()("publicationUids", t.publicationUids.filter(function(t) {
                    return e.publicationUid !== t
                }), a()("totalItems", e.totalItems, t))
            }, r[s.d] = function(t) {
                return a()("isFormVisible", !0, t)
            }, r[s.b] = function(t) {
                return a()("isFormVisible", !1, t)
            }, r))
        },
        302: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(36),
                i = n.n(r),
                o = n(206);
            e.default = function(t, e) {
                switch (void 0 === t && (t = {}), e.type) {
                    case o.a:
                        return i()(t, e.payload.projectsCollaborators)
                }
                return t
            }
        },
        303: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return a
            }), n.d(e, "default", function() {
                return u
            });
            var r = n(4),
                i = n.n(r),
                o = n(165),
                a = {
                    isQuestionTabVisible: !1
                };

            function u(t, e) {
                switch (void 0 === t && (t = a), e.type) {
                    case o.b:
                        return function(t) {
                            return i()("isQuestionTabVisible", !0, t)
                        }(t);
                    case o.a:
                        return function(t) {
                            return i()("isQuestionTabVisible", !1, t)
                        }(t)
                }
                return t
            }
        },
        304: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return a
            });
            var r = n(247),
                i = n.n(r),
                o = n(38);

            function a(t, e) {
                switch (void 0 === t && (t = []), e.type) {
                    case o.b:
                        return t.concat([e.projectId]);
                    case o.f:
                        return i()([e.projectId], t)
                }
                return t
            }
        },
        305: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return u
            });
            var r = n(1),
                i = n(4),
                o = n.n(i),
                a = n(73);

            function u(t, e) {
                switch (void 0 === t && (t = {}), e.type) {
                    case a.b:
                        return Object(r.a)({}, t, {
                            isLoading: !0
                        });
                    case a.a:
                        return function(t, e) {
                            var n = t[e.projectId] || {
                                    followerAccountIds: [],
                                    thisWeekFollowerAccountIds: []
                                },
                                i = n.followerAccountIds.concat(e.followerAccountIds),
                                a = n.thisWeekFollowerAccountIds.concat(e.thisWeekFollowerAccountIds),
                                u = Object(r.a)({}, n, {
                                    isLoading: !1,
                                    followerAccountIds: i,
                                    thisWeekFollowerAccountIds: a
                                });
                            return o()(e.projectId, u, t)
                        }(t, e);
                    case a.c:
                        return function(t, e) {
                            var n = t[e.projectId] || {},
                                i = Object(r.a)({}, n, {
                                    isLoading: !1
                                }, e.data);
                            return o()(e.projectId, i, t)
                        }(t, e)
                }
                return t
            }
        },
        306: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return d
            });
            var r = n(1),
                i = n(4),
                o = n.n(i),
                a = n(13),
                u = n.n(a),
                c = n(36),
                s = n.n(c),
                l = n(38);

            function d(t, e) {
                switch (void 0 === t && (t = {}), e.type) {
                    case l.i:
                        var n = u()(t, e.id),
                            i = !!n && n.referenceAdded;
                        return o()(e.id, Object(r.a)({}, e.project, {
                            referenceAdded: i
                        }), t);
                    case l.b:
                        return function(t, e) {
                            var n = t[e.projectId];
                            return t = o()([e.projectId, "isFollowing"], !0, t), t = o()([e.projectId, "followerCount"], n.followerCount + 1, t)
                        }(t, e);
                    case l.f:
                        return function(t, e) {
                            var n = t[e.projectId];
                            return t = o()([e.projectId, "isFollowing"], !1, t), t = o()([e.projectId, "followerCount"], n.followerCount - 1, t)
                        }(t, e);
                    case l.a:
                        return s()(t, e.projects);
                    case l.j:
                        return function(t, e) {
                            return t[e.projectId].collaborators.map(function(n, r) {
                                n.collaboratorId === e.projectCollaboratorId && (t[e.projectId].collaborators[r].email = e.email)
                            }), t
                        }(t, e);
                    case l.c:
                        return Object(r.a)({}, t, {
                            projectRequested: !0
                        })
                }
                return t
            }
        },
        307: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return c
            }), n.d(e, "default", function() {
                return s
            });
            var r = n(4),
                i = n.n(r),
                o = n(225),
                a = n.n(o),
                u = n(138),
                c = {
                    selectedPublications: []
                };

            function s(t, e) {
                switch (void 0 === t && (t = c), e.type) {
                    case u.c:
                        return function(t, e) {
                            var n = t.selectedPublications.slice(0);
                            return n.push(e.publication), i()("selectedPublications", a()(n, "uid"), t)
                        }(t, e.payload);
                    case u.b:
                        return function(t, e) {
                            return i()("selectedPublications", t.selectedPublications.filter(function(t) {
                                return e.publication.uid !== t.uid
                            }), t)
                        }(t, e.payload);
                    case u.a:
                        return function(t) {
                            return i()("selectedPublications", [], t)
                        }(t)
                }
                return t
            }
        },
        308: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return l
            });
            var r, i = n(9),
                o = n(10),
                a = n(7),
                u = n(38),
                c = n(117),
                s = n(172),
                l = Object(o.fromJS)({
                    recommendAlert: {
                        shown: !1,
                        UIDs: []
                    }
                });
            e.default = Object(i.a)(l, ((r = {})[a.a] = function(t, e) {
                var n = e.data;
                return t.mergeDeep(n.projectsShare)
            }, r[u.b] = function(t) {
                return t.mergeDeep({
                    recommendAlert: {
                        shown: !0
                    }
                })
            }, r[c.a] = function(t, e) {
                var n = e.payload,
                    r = n.projectId,
                    i = n.title,
                    o = n.context,
                    a = n.UIDs;
                if (function(t) {
                        if (s.a && t) return sessionStorage.getItem(c.f + "/" + t);
                        return !1
                    }(r)) return t.mergeDeep({
                    recommendAlert: {
                        shown: !1
                    }
                });
                return function(t) {
                    s.a && t && sessionStorage.setItem(c.f + "/" + t, 1)
                }(r), t.merge({
                    recommendAlert: {
                        shown: !0,
                        title: i,
                        context: o,
                        UIDs: a
                    }
                })
            }, r))
        },
        309: function(t, e, n) {
            "use strict";
            n.r(e), e.default = function(t) {
                return void 0 === t && (t = {}), t
            }
        },
        31: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "REQUEST_BACKEND_TIME", function() {
                return c
            }), n.d(e, "REQUEST_CORRELATION_ID", function() {
                return s
            }), n.d(e, "REQUEST_IS_CACHED_PAGE", function() {
                return l
            }), n.d(e, "REQUEST_IS_LOGGED_IN", function() {
                return d
            }), n.d(e, "PAGE_MODULE", function() {
                return f
            }), n.d(e, "PAGE_ACTION", function() {
                return p
            }), n.d(e, "PAGE_LONG_RUNNING_REQUEST_IDENTIFIER", function() {
                return m
            }), n.d(e, "PAGE_LONG_RUNNING_REQUEST_FP", function() {
                return h
            }), n.d(e, "PAGE_YUI_DISABLED", function() {
                return b
            }), n.d(e, "TRACKING_CONTINENT", function() {
                return g
            }), n.d(e, "TRACKING_COUNTRY_CODE", function() {
                return v
            }), n.d(e, "TRACKING_FLAG", function() {
                return y
            }), n.d(e, "TRACKING_ACTIVE_QUESTIONNAIRE_TRIGGERS", function() {
                return I
            }), n.d(e, "TRACKING_IS_CRAWLER", function() {
                return O
            }), n.d(e, "TRACKING_IS_MOBILE", function() {
                return E
            }), n.d(e, "TRACKING_LOG_EXTENDED_REQUEST", function() {
                return A
            }), n.d(e, "TRACKING_LOG_TIME_TO_FIRST_AD", function() {
                return P
            }), n.d(e, "TRACKING_FINGERPRINT", function() {
                return S
            }), n.d(e, "getPageConfigValue", function() {
                return R
            }), n.d(e, "getTrackingConfigValue", function() {
                return T
            }), n.d(e, "getRequestConfigValue", function() {
                return L
            }), n.d(e, "trackingConfigExists", function() {
                return D
            }), n.d(e, "pageConfigExists", function() {
                return k
            }), n.d(e, "requestConfigExists", function() {
                return _
            });
            var r = "rgConfig",
                i = "pageConfig",
                o = "requestConfig",
                a = "requestCachedConfig",
                u = "trackingConfig",
                c = "backendTime",
                s = "correlationId",
                l = "isCachedPage",
                d = "isLoggedIn",
                f = "module",
                p = "action",
                m = "longRunningRequestIdentifier",
                h = "longRunningRequestFp",
                b = "yuiDisabled",
                g = "continent",
                v = "countryCode",
                y = "flag",
                I = "activeQuestionnaireTriggers",
                O = "isCrawler",
                E = "isMobile",
                A = "logExtendedRequest",
                P = "logTimeToFirstAd",
                S = "fingerprint";

            function j(t) {
                return void 0 !== window.rgConfig || void 0 !== window[t]
            }

            function w(t, e) {
                return void 0 !== window[t] && void 0 !== window[t][e]
            }

            function C(t, e) {
                return w(r, e) ? window[r][e] : w(t, e) ? window[t][e] : null
            }

            function R(t) {
                return C(i, t)
            }

            function T(t) {
                return C(u, t)
            }

            function L(t, e) {
                return e = e || !1, w(r, t) ? window[r][t] : !e && w(a, t) ? window.requestCachedConfig[t] : w(o, t) ? window.requestConfig[t] : null
            }

            function D() {
                return j(u)
            }

            function k() {
                return j(i)
            }

            function _() {
                return j(o)
            }
        },
        310: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return i
            });
            var r = n(9),
                i = {
                    adsByInjectionPoint: {}
                };
            e.default = Object(r.a)(i, {})
        },
        311: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return c
            }), n.d(e, "handleMergeState", function() {
                return s
            });
            var r, i = n(7),
                o = n(139),
                a = n(9),
                u = n(10),
                c = Object(u.fromJS)({
                    requests: {}
                });

            function s(t, e) {
                return t.mergeDeep(e.data.publicationFeedbackRequests)
            }
            e.default = Object(a.a)(c, ((r = {})[i.a] = s, r[o.c] = function(t, e) {
                var n = e.payload,
                    r = n.publicationUid,
                    i = n.processing;
                return t.setIn(["requests", "" + r, "processing"], i)
            }, r[o.a] = function(t, e) {
                var n = e.payload.publicationUid;
                return t.setIn(["requests", "" + n, "hasRequested"], !0)
            }, r[o.b] = function(t, e) {
                var n = e.payload.publicationUid;
                return t.setIn(["requests", "" + n, "hasRequested"], !1)
            }, r))
        },
        312: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return p
            });
            var r = n(1),
                i = n(36),
                o = n.n(i),
                a = n(4),
                u = n.n(a),
                c = n(58),
                s = n.n(c),
                l = n(106),
                d = n.n(l),
                f = {};

            function p(t, e) {
                var n, i;
                switch (void 0 === t && (t = f), e.type) {
                    case "UPDATE_FIGURE":
                        return o()(t, ((i = {})[e.publicationUid] = ((n = {})[e.assetId] = Object(r.a)({}, e.figure, {
                            isUpdating: !1
                        }), n), i));
                    case "BEGIN_UPDATING_FIGURE":
                        return u()([e.publicationUid, e.assetId, "isUpdating"], !0, t);
                    case "REMOVE_FIGURE":
                        return s()([e.publicationUid, e.assetId], t);
                    case "UPDATE_FIGURE_FAIL":
                        return u()([e.publicationUid, e.assetId, "isUpdating"], !1, t);
                    case "REPLACE_ASSET":
                        return function(t, e, n) {
                            return d()(function(t) {
                                return function(t, e, n) {
                                    var r = t[e];
                                    if (!r) return t;
                                    var i = u()("assetKey", n, r);
                                    return u()(n, i, s()(e, t))
                                }(t, e, n)
                            }, t)
                        }(t, e.from, e.to);
                    case "CREATE_FIGURE":
                        return u()([e.publicationUid, e.figure.assetKey], e.figure, t);
                    case "EDIT_FIGURES":
                        return u()("figuresHaveBeenEdited", !0, t)
                }
                return t
            }
        },
        313: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return d
            });
            var r = n(81),
                i = n(4),
                o = n.n(i),
                a = n(58),
                u = n.n(a),
                c = n(65),
                s = n.n(c),
                l = {};

            function d(t, e) {
                switch (void 0 === t && (t = l), e.type) {
                    case r.a:
                        var n = {
                            id: s()(),
                            initialFileId: e.tmpFileId,
                            isUpdating: !1
                        };
                        return o()(n.id, n, t);
                    case r.c:
                        return u()(e.id, t);
                    case r.d:
                        return o()([e.id, "isUpdating"], !0, t);
                    case r.e:
                        return o()([e.id, "isUpdating"], !1, t);
                    case r.b:
                        return l
                }
                return t
            }
        },
        314: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return c
            });
            var r, i = n(9),
                o = n(10),
                a = n(7),
                u = n(121),
                c = new o.Map;
            e.default = Object(i.a)(c, ((r = {})[a.a] = function(t, e) {
                var n = e.data;
                return t.merge(Object(o.fromJS)(n.publicationFollowed))
            }, r[u.a] = function(t, e) {
                var n, r = e.payload,
                    i = t.get(String(r.publicationUid));
                if (!i) return t;
                return t.merge(((n = {})[r.publicationUid] = i.merge({
                    isFollowing: !0
                }), n))
            }, r[u.b] = function(t, e) {
                var n, r = e.payload,
                    i = t.get(String(r.publicationUid));
                return t.merge(((n = {})[r.publicationUid] = i.merge({
                    isFollowing: !1
                }), n))
            }, r))
        },
        315: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return c
            });
            var r, i = n(9),
                o = n(10),
                a = n(7),
                u = n(109),
                c = new o.Map;
            e.default = Object(i.a)(c, ((r = {})[a.a] = function(t, e) {
                var n = e.data;
                return t.merge(Object(o.fromJS)(n.publicationFulltextRequests))
            }, r[u.a] = function(t, e) {
                var n, r = e.payload,
                    i = t.get(String(r.publicationUid));
                return t.merge(((n = {})[r.publicationUid] = i.merge({
                    isRequested: !0,
                    isUndoRequestAllowed: !0
                }), n))
            }, r[u.c] = function(t, e) {
                var n, r = e.payload,
                    i = t.get(String(r.publicationUid));
                return t.merge(((n = {})[r.publicationUid] = i.merge({
                    isRequested: !1,
                    isUndoRequestAllowed: !0
                }), n))
            }, r[u.b] = function(t, e) {
                var n, r = e.payload,
                    i = t.get(String(r.publicationUid));
                return t.merge(((n = {})[r.publicationUid] = i.merge({
                    isUndoRequestAllowed: !1
                }), n))
            }, r))
        },
        316: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return a
            });
            var r = n(36),
                i = n.n(r),
                o = n(137);

            function a(t, e) {
                switch (void 0 === t && (t = {}), e.type) {
                    case o.a:
                        var n = e.authors,
                            r = e.totalCounts,
                            a = e.mappings;
                        return i()(t, {
                            authors: n,
                            totalCounts: r,
                            mappings: a
                        })
                }
                return t
            }
        },
        317: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return o
            });
            var r = n(1),
                i = n(136);

            function o(t, e) {
                switch (void 0 === t && (t = {}), e.type) {
                    case i.a:
                        return e.counters ? Object(r.a)({}, t, e.counters) : t
                }
                return t
            }
        },
        318: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return u
            }), n.d(e, "handleMergeState", function() {
                return c
            });
            var r, i = n(7),
                o = n(9),
                a = n(10),
                u = Object(a.fromJS)({
                    stats: {}
                });

            function c(t, e) {
                return t.mergeDeep(e.data.publicationGlobalPublicationStats)
            }
            e.default = Object(o.a)(u, ((r = {})[i.a] = c, r))
        },
        319: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return u
            });
            var r = n(1),
                i = n(4),
                o = n.n(i),
                a = n(72);

            function u(t, e) {
                switch (void 0 === t && (t = {}), e.type) {
                    case a.a:
                        return e.publications ? Object(r.a)({}, t, e.publications) : t;
                    case a.b:
                        return o()([e.payload.publicationUid, "hasFulltext"], e.payload.hasFulltext, t)
                }
                return t
            }
        },
        32: function(t, e, n) {
            "use strict";
            n.d(e, "h", function() {
                return s
            }), n.d(e, "c", function() {
                return l
            }), n.d(e, "b", function() {
                return d
            }), n.d(e, "l", function() {
                return f
            }), n.d(e, "k", function() {
                return p
            }), n.d(e, "m", function() {
                return m
            }), n.d(e, "j", function() {
                return h
            }), n.d(e, "f", function() {
                return b
            }), n.d(e, "g", function() {
                return g
            }), n.d(e, "a", function() {
                return v
            }), n.d(e, "i", function() {
                return y
            }), n.d(e, "e", function() {
                return I
            }), n.d(e, "d", function() {
                return O
            });
            var r, i, o, a = n(14),
                u = n(2),
                c = n.n(u),
                s = 10,
                l = 128,
                d = 7,
                f = 8,
                p = 16,
                m = 32,
                h = f | p | m | 64,
                b = "all",
                g = "search",
                v = ((r = {}).follow = 2, r.like = 1, r.cited = 4, r[g] = g, r),
                y = ((i = {})[a.b.TYPE_PUBLICATION] = f, i[a.b.TYPE_PROJECT] = p, i[a.b.TYPE_QUESTION] = m, i[a.b.TYPE_MESSAGE] = 64, i),
                I = ((o = {})[a.b.TYPE_PUBLICATION] = 7, o[a.b.TYPE_PROJECT] = 2, o[a.b.TYPE_QUESTION] = 3, o[a.b.TYPE_MESSAGE] = 1, o.like = f | m | 64, o.follow = f | p | m, o[g] = f | p | m, o),
                O = Object.keys(y);
            c.a.shape({
                action: c.a.number.isRequired,
                type: c.a.number.isRequired
            }), c.a.arrayOf(c.a.oneOf(O)), c.a.arrayOf(c.a.oneOf(Object.keys(v)))
        },
        321: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return l
            }), n.d(e, "handleMergeState", function() {
                return d
            });
            var r, i = n(9),
                o = n(10),
                a = n(61),
                u = n.n(a),
                c = n(7),
                s = n(171),
                l = Object(o.fromJS)({
                    states: {},
                    variants: {}
                });

            function d(t, e) {
                return t.mergeDeep(e.data.publicationPersonalFeedbackRequests)
            }
            e.default = Object(i.a)(l, ((r = {})[c.a] = d, r[s.a.ADD_PUBLICATION_PERSONAL_FEEDBACK_REQUESTS] = function(t, e) {
                var n = e.payload,
                    r = n.publicationUid,
                    i = n.targetAccountIds,
                    o = Array.isArray(i),
                    a = 0;
                for (i = o ? i : i[Symbol.iterator]();;) {
                    var c;
                    if (o) {
                        if (a >= i.length) break;
                        c = i[a++]
                    } else {
                        if ((a = i.next()).done) break;
                        c = a.value
                    }
                    var s = c;
                    t = t.setIn(["states", u()(r), u()(s)], !0)
                }
                return t
            }, r[s.a.REMOVE_PUBLICATION_PERSONAL_FEEDBACK_REQUEST] = function(t, e) {
                var n = e.payload,
                    r = n.publicationUid,
                    i = n.accountId;
                return t.setIn(["states", u()(r), u()(i)], !1)
            }, r))
        },
        322: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = {
                items: [],
                itemEntities: {},
                isLoading: !1,
                totalItems: 0,
                nextOffset: 0
            };
            e.default = function(t) {
                return void 0 === t && (t = r), t
            }
        },
        323: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return u
            }), n.d(e, "handleStartQuestionnaire", function() {
                return c
            }), n.d(e, "handleEndQuestionnaire", function() {
                return s
            }), n.d(e, "handleActivateQuestionnaire", function() {
                return l
            }), n.d(e, "handleDeactivateQuestionnaire", function() {
                return d
            }), n.d(e, "handleAddTimeoutQuestionnaire", function() {
                return f
            });
            var r, i = n(1),
                o = n(83),
                a = n(9),
                u = {
                    currentQuestionnaireId: null,
                    isActive: !1,
                    timeoutId: null,
                    activeTriggers: {}
                };

            function c(t, e) {
                var n = e.id;
                return Object(i.a)({}, t, {
                    currentQuestionnaireId: n
                })
            }

            function s(t) {
                return Object(i.a)({}, t, {
                    currentQuestionnaireId: null,
                    isActive: !1,
                    timeoutId: null
                })
            }

            function l(t) {
                return Object(i.a)({}, t, {
                    isActive: !0,
                    timeoutId: null
                })
            }

            function d(t) {
                return Object(i.a)({}, t, {
                    isActive: !1
                })
            }

            function f(t, e) {
                var n = e.timeoutId;
                return Object(i.a)({}, t, {
                    timeoutId: n
                })
            }
            e.default = Object(a.a)(u, ((r = {})[o.e] = c, r[o.a] = l, r[o.c] = d, r[o.b] = f, r[o.d] = s, r))
        },
        324: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return a
            });
            var r = n(1),
                i = n(157),
                o = {
                    items: [],
                    suggestionsDepleted: !1
                };

            function a(t, e) {
                switch (void 0 === t && (t = o), void 0 === e && (e = {}), e.type) {
                    case i.a:
                        return function(t, e) {
                            return Object(r.a)({}, t, {
                                items: t.items.concat(e.items),
                                suggestionsDepleted: e.items.length < i.b
                            })
                        }(t, e)
                }
                return t
            }
        },
        325: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return l
            });
            var r = n(1),
                i = n(4),
                o = n.n(i),
                a = n(106),
                u = n.n(a),
                c = n(82),
                s = {
                    items: {},
                    hasMoreSuggestions: !0,
                    isRequestInProgress: !1
                };

            function l(t, e) {
                switch (void 0 === t && (t = s), void 0 === e && (e = {}), e.type) {
                    case c.c:
                        return o()(["items", e.accountId, "isProcessed"], !0, t);
                    case c.d:
                        return o()(["items", e.accountId, "isSkipped"], e.isSkipped, t);
                    case c.e:
                        return Object(r.a)({}, t, {
                            items: u()(o()("isSkipped", !1), t.items)
                        });
                    case c.a:
                        return o()("hasMoreSuggestions", e.hasMoreSuggestions, t);
                    case c.b:
                        return o()("isRequestInProgress", e.isRequestInProgress, t)
                }
                return t
            }
        },
        326: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return a
            });
            var r = n(49),
                i = n.n(r),
                o = n(155);

            function a(t, e) {
                switch (void 0 === t && (t = {
                    items: {}
                }), e.type) {
                    case o.a:
                        return function(t, e) {
                            if (!t.items[e.cardId]) return t;
                            return (t = i()(t)).items[e.cardId].isSelected = !0, t
                        }(t, e);
                    case o.b:
                        return function(t, e) {
                            if (!t.items[e.cardId]) return t;
                            return (t = i()(t)).items[e.cardId].isSelected = !1, t
                        }(t, e)
                }
                return t
            }
        },
        327: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return a
            });
            var r = n(1),
                i = n(92),
                o = {
                    activeTabName: i.f,
                    selectedDownloadLink: null,
                    activeFulltextTab: 0
                };

            function a(t, e) {
                switch (void 0 === t && (t = o), void 0 === e && (e = {}), e.type) {
                    case i.a:
                        return Object(r.a)({}, t, {
                            activeTabName: e.activeTabName
                        });
                    case i.c:
                        return Object(r.a)({}, t, {
                            selectedDownloadLink: e.selectedDownloadLink
                        });
                    case i.b:
                        return Object(r.a)({}, t, {
                            activeFulltextTab: e.activeFulltextTab
                        })
                }
                return t
            }
        },
        329: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return u
            });
            var r, i = n(1),
                o = n(9),
                a = n(7),
                u = {
                    query: "",
                    generalViewId: "fakeViewId",
                    subfilter: {},
                    offset: 0,
                    viewIds: {
                        department: "",
                        institution: "",
                        publication: "",
                        question: "",
                        researcher: "",
                        job: "",
                        project: ""
                    },
                    department: {
                        items: [],
                        totalItems: 0,
                        nextOffset: 0
                    },
                    institution: {
                        items: [],
                        totalItems: 0,
                        nextOffset: 0
                    },
                    publication: {
                        items: [],
                        totalItems: 0,
                        nextOffset: 0
                    },
                    question: {
                        items: [],
                        totalItems: 0,
                        nextOffset: 0
                    },
                    researcher: {
                        items: [],
                        totalItems: 0,
                        nextOffset: 0
                    },
                    job: {
                        items: [],
                        totalItems: 0,
                        nextOffset: 0
                    },
                    project: {
                        items: [],
                        totalItems: 0,
                        nextOffset: 0
                    }
                };

            function c(t, e) {
                var n = t.map(function(t) {
                    return t.id
                });
                return e.forEach(function(e) {
                    -1 === n.indexOf(e.id) && t.push(e)
                }), t
            }
            e.default = Object(o.a)(u, ((r = {})[a.a] = function(t, e) {
                var n = e.data;
                if (0 === n.searchSearch.offset) return Object(i.a)({}, t, n.searchSearch);
                var r = Object(i.a)({}, t, {
                    viewIds: n.searchSearch.viewIds
                });
                for (var o in t) n.searchSearch[o] && n.searchSearch[o].items && (r[o] = Object(i.a)({}, t[o], {
                    items: c(t[o].items, n.searchSearch[o].items),
                    nextOffset: n.searchSearch[o].nextOffset,
                    totalItems: n.searchSearch[o].totalItems
                }));
                return r
            }, r))
        },
        33: function(t, e, n) {
            "use strict";
            n.d(e, "c", function() {
                return u
            }), n.d(e, "o", function() {
                return c
            }), n.d(e, "k", function() {
                return s
            }), n.d(e, "r", function() {
                return l
            }), n.d(e, "p", function() {
                return d
            }), n.d(e, "l", function() {
                return f
            }), n.d(e, "h", function() {
                return p
            }), n.d(e, "g", function() {
                return m
            }), n.d(e, "j", function() {
                return b
            }), n.d(e, "e", function() {
                return v
            }), n.d(e, "b", function() {
                return y
            }), n.d(e, "d", function() {
                return I
            }), n.d(e, "a", function() {
                return O
            }), n.d(e, "n", function() {
                return E
            }), n.d(e, "m", function() {
                return A
            }), n.d(e, "q", function() {
                return P
            }), n.d(e, "f", function() {
                return S
            }), n.d(e, "i", function() {
                return j
            });
            var r = n(13),
                i = n.n(r),
                o = n(14),
                a = "adminAdCampaignItems",
                u = function(t) {
                    return i()(t, [a, "campaignId"])
                },
                c = function(t) {
                    return i()(t, [a, "opportunityId"])
                },
                s = function(t) {
                    return i()(t, [a, "isLoading"])
                },
                l = function(t) {
                    return i()(t, [a, "rgType"])
                },
                d = function(t) {
                    return i()(t, [a, "orderId"])
                },
                f = function(t) {
                    return i()(t, [a, "lineItemId"])
                },
                p = function(t) {
                    return i()(t, [a, "creativeId"])
                },
                m = function(t) {
                    return i()(t, [a, "breakdown"], null)
                },
                h = function(t) {
                    return i()(t, [a, "salesforceCampaigns"])
                },
                b = function(t) {
                    var e = i()(t, a, {});
                    return {
                        startDate: e.startDate,
                        endDate: e.endDate,
                        minDate: e.minDate,
                        maxDate: e.maxDate
                    }
                },
                g = function(t, e) {
                    return e ? t.filter(function(t) {
                        return o.a.parse(t).type === e
                    }) : t
                },
                v = function(t, e) {
                    return void 0 === e && (e = null), g(i()(t, [a, "items"], []), e)
                },
                y = function(t, e) {
                    return void 0 === e && (e = null), g(i()(t, [a, "availableItems"], []), e)
                },
                I = function(t, e) {
                    var n = e.rgKey;
                    return i()(t, [a, "data", n], {
                        sponsoredContentItemKeys: []
                    })
                },
                O = function(t, e) {
                    var n = e.activityGroupId;
                    return i()(t, [a, "activityGroups", n], {})
                },
                E = function(t, e) {
                    var n = e.rgKey;
                    return i()(t, [a, "data", n, "status"], "")
                },
                A = function(t, e) {
                    var n = e.rgKey;
                    return i()(t, [a, "data", n, "countImpressions"], 0)
                },
                P = function(t, e) {
                    var n = h(t).find(function(t) {
                        var n = t.id;
                        return e === n
                    });
                    return n ? n.name : void 0
                },
                S = function(t) {
                    var e = Object.values(i()(t, [a, "data"])).filter(function(t) {
                        return t.salesforceCampaignId
                    }).map(function(t) {
                        return t.salesforceCampaignId
                    });
                    return h(t).filter(function(t) {
                        var n = t.id;
                        return !e.find(function(t) {
                            return n === t
                        })
                    })
                },
                j = function(t) {
                    var e = i()(t, [a], {});
                    return {
                        campaignId: e.campaignId,
                        rgType: e.rgType,
                        orderId: e.orderId,
                        lineItemId: e.lineItemId,
                        creativeId: e.creativeId,
                        breakdown: e.breakdown,
                        startDate: e.startDate,
                        endDate: e.endDate
                    }
                }
        },
        330: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, i = n(63),
                o = n(4),
                a = n.n(o),
                u = n(7),
                c = n(9),
                s = n(10),
                l = Object(s.fromJS)({
                    context: {},
                    key: {},
                    targets: {}
                });
            e.default = Object(c.a)(l, ((r = {})[i.a] = function(t, e) {
                return a()(["targets", e.key, "state"], "claimSuggestionWrong", t)
            }, r[i.b] = function(t, e) {
                return a()(["targets", e.key, "state"], "claimSuggestionSkipped", t)
            }, r[i.c] = function(t, e) {
                return a()(["targets", e.key, "state"], "claimSuggestionCompleted", t)
            }, r[i.d] = function(t, e) {
                return a()(["targets", e.key, "state"], "emailInviteCompleted", t)
            }, r[i.e] = function(t, e) {
                return a()(["targets", e.key, "state"], "emailInviteSkipped", t)
            }, r[i.f] = function(t, e) {
                return t.targets = e.shareTargets, t
            }, r[u.a] = function(t, e) {
                return e.data.shareContentSharing
            }, r[i.g] = function(t, e) {
                return a()("isBusy", e.isBusy, t)
            }, r))
        },
        331: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return c
            });
            var r, i = n(9),
                o = n(10),
                a = n(7),
                u = n(146),
                c = Object(o.Map)();
            e.default = Object(i.a)(c, ((r = {})[a.a] = function(t, e) {
                return t.merge(e.data.topicsFollow)
            }, r[u.a] = function(t, e) {
                return t.set(e.payload.postId, !0)
            }, r[u.b] = function(t, e) {
                return t.set(e.payload.postId, !1)
            }, r))
        },
        332: function(t, e, n) {
            "use strict";

            function r(t) {
                return void 0 === t && (t = {}), t
            }
            n.r(e), n.d(e, "default", function() {
                return r
            })
        },
        333: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return c
            });
            var r, i = n(1),
                o = n(212),
                a = n(199),
                u = n(9),
                c = {
                    filterKey: a.c
                };
            e.default = Object(u.a)(c, ((r = {})[o.a] = function(t, e) {
                return Object(i.a)({}, t, {
                    filterKey: e.payload.filterKey
                })
            }, r))
        },
        334: function(t, e, n) {
            var r = {
                "./alertStack.js": 335,
                "./environment.js": 336,
                "./modalRoot.js": 337,
                "./uploads.js": 339,
                "./widget.js": 340
            };

            function i(t) {
                var e = o(t);
                return n(e)
            }

            function o(t) {
                if (!n.o(r, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return r[t]
            }
            i.keys = function() {
                return Object.keys(r)
            }, i.resolve = o, t.exports = i, i.id = 334
        },
        335: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return l
            });
            var r, i = n(10),
                o = n(28),
                a = n.n(o),
                u = n(7),
                c = n(9),
                s = n(24),
                l = new i.Map({
                    stack: new i.OrderedSet,
                    queue: new i.OrderedSet,
                    timeouts: new i.OrderedMap,
                    isFrozen: !1
                });
            e.default = Object(c.a)(l, ((r = {})[u.a] = function(t) {
                return t
            }, r[s.h] = function(t, e) {
                var n = e.componentGenerator,
                    r = e.uid;
                return t.update("queue", function(t) {
                    return t.add(new i.Map({
                        addedAt: Date.now(),
                        componentGenerator: n,
                        uid: r
                    }))
                })
            }, r[s.j] = function(t) {
                return t.update("queue", function(t) {
                    return t.rest()
                })
            }, r[s.i] = function(t, e) {
                var n = e.componentGenerator,
                    r = e.uid,
                    o = t.get("stack").find(function(t) {
                        return t.get("uid") === r
                    }, null, !1);
                return o ? (a()(o, "An alert with identifier " + r + " already exists."), t) : t.update("stack", function(t) {
                    return t.add(new i.Map({
                        addedAt: Date.now(),
                        componentGenerator: n,
                        uid: r
                    }))
                })
            }, r[s.d] = function(t) {
                return clearTimeout(t.get("timeouts").last()), t.update("stack", function(t) {
                    return t.remove(t.keySeq().last())
                }).update("timeouts", function(t) {
                    return t.remove(t.keySeq().last())
                })
            }, r[s.a] = function(t) {
                return t.get("timeouts").map(function(e) {
                    return clearTimeout(t.getIn("timeouts", e))
                }), l
            }, r[s.e] = function(t, e) {
                if (!e.uid) throw new Error("You should pass an identifier string");
                return clearTimeout(t.getIn(["timeouts", e.uid])), t.update("stack", function(t) {
                    return t.filter(function(t) {
                        return t.get("uid") !== e.uid
                    })
                })
            }, r[s.b] = function(t) {
                return t.set("isFrozen", !0)
            }, r[s.k] = function(t) {
                return t.set("isFrozen", !1)
            }, r[s.g] = function(t, e) {
                return t.update("timeouts", function(t) {
                    return t.set(e.uid, e.timeoutId)
                })
            }, r[s.f] = function(t, e) {
                return t.removeIn(["timeouts", e.uid])
            }, r[s.c] = function(t, e) {
                return t.setIn(["timeouts", e.uid], null)
            }, r))
        },
        336: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, i = n(1),
                o = n(9),
                a = n(7);
            e.default = Object(o.a)({}, ((r = {})[a.a] = function(t, e) {
                return 0 === Object.keys(t).length ? Object(i.a)({}, e.data.environment) : t
            }, r))
        },
        337: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "initialState", function() {
                return c
            });
            var r, i = n(10),
                o = n(7),
                a = n(9),
                u = n(37),
                c = Object(i.Map)({
                    activeModal: null
                });
            e.default = Object(a.a)(c, ((r = {})[o.a] = function(t) {
                return t
            }, r[u.MOUNT_MODAL] = function(t, e) {
                var n = e.componentGenerator;
                return t.set("activeModal", n)
            }, r[u.UNMOUNT_MODAL] = function() {
                return c
            }, r))
        },
        338: function(t, e, n) {},
        339: function(t, e, n) {
            "use strict";
            n.r(e);
            var r, i = n(1),
                o = n(19),
                a = n(21),
                u = n(9);
            e.default = Object(u.a)({}, ((r = {})[a.c] = function(t, e) {
                var n, r = e.payload,
                    u = r.formId,
                    c = Object(o.a)(r, ["formId"]);
                return Object(i.a)({}, t, ((n = {})[u] = Object(i.a)({}, c, {
                    status: a.b.IDLE,
                    fileList: []
                }), n))
            }, r[a.e] = function(t, e) {
                var n, r = e.payload,
                    o = r.formId,
                    a = r.file.nativeFile,
                    u = t[o],
                    c = u.fileList.findIndex(function(t) {
                        var e = t.nativeFile;
                        return a === e
                    });
                return Object(i.a)({}, t, ((n = {})[o] = Object(i.a)({}, u, {
                    fileList: u.fileList.filter(function(t, e) {
                        return e !== c
                    })
                }), n))
            }, r[a.f] = function(t, e) {
                var n, r = e.payload.formId,
                    o = t[r];
                return Object(i.a)({}, t, ((n = {})[r] = Object(i.a)({}, o, {
                    fileList: []
                }), n))
            }, r[a.d] = function(t, e) {
                var n, r = e.payload,
                    o = r.fileList,
                    a = r.formId,
                    u = t[a];
                if (!u) throw new Error("\nA form with formId " + a + " received files,\nbut wasn't initialized. This is not supposed to happen.\n\nAction:\n" + JSON.stringify(e, null, 2) + "\n");
                return Object(i.a)({}, t, ((n = {})[a] = Object(i.a)({}, u, {
                    fileList: u.fileList ? u.fileList.concat(o) : o
                }), n))
            }, r[a.m] = function(t, e) {
                var n, r = e.payload.formId,
                    o = t[r];
                return Object(i.a)({}, t, ((n = {})[r] = Object(i.a)({}, o, {
                    status: a.b.UPLOADING
                }), n))
            }, r[a.h] = function(t, e) {
                var n, r = e.payload,
                    o = r.formId,
                    u = r.file.nativeFile,
                    c = t[o],
                    s = c.fileList.findIndex(function(t) {
                        var e = t.nativeFile;
                        return u === e
                    });
                return Object(i.a)({}, t, ((n = {})[o] = Object(i.a)({}, c, {
                    fileList: c.fileList.map(function(t, e) {
                        return e !== s ? t : Object(i.a)({}, t, {
                            status: a.a.UPLOADING
                        })
                    })
                }), n))
            }, r[a.l] = function(t, e) {
                var n, r = e.payload,
                    o = r.formId,
                    u = r.file.nativeFile,
                    c = r.progress,
                    s = t[o],
                    l = s.fileList.findIndex(function(t) {
                        var e = t.nativeFile;
                        return u === e
                    });
                return Object(i.a)({}, t, ((n = {})[o] = Object(i.a)({}, s, {
                    fileList: s.fileList.map(function(t, e) {
                        return e !== l ? t : Object(i.a)({}, t, {
                            progress: c,
                            status: a.a.UPLOADING
                        })
                    })
                }), n))
            }, r[a.j] = function(t, e) {
                var n, r = e.payload,
                    o = r.formId,
                    u = r.file,
                    c = r.response,
                    s = t[o];
                return Object(i.a)({}, t, ((n = {})[o] = Object(i.a)({}, s, {
                    fileList: s.fileList.map(function(t) {
                        return t.nativeFile !== u.nativeFile ? t : Object(i.a)({}, t, {
                            response: c,
                            status: a.a.DONE
                        })
                    })
                }), n))
            }, r[a.i] = function(t, e) {
                var n, r = e.payload.formId,
                    o = t[r];
                return Object(i.a)({}, t, ((n = {})[r] = Object(i.a)({}, o, {
                    status: a.b.IDLE
                }), n))
            }, r[a.k] = function(t, e) {
                var n, r = e.payload,
                    o = r.formId,
                    u = r.file,
                    c = r.response,
                    s = t[o];
                return Object(i.a)({}, t, ((n = {})[o] = Object(i.a)({}, s, {
                    fileList: s.fileList.map(function(t) {
                        return t.nativeFile !== u.nativeFile ? t : Object(i.a)({}, t, {
                            response: c,
                            progress: null,
                            status: a.a.DONE
                        })
                    })
                }), n))
            }, r[a.g] = function(t) {
                return t
            }, r))
        },
        340: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", function() {
                return a
            });
            var r = n(1),
                i = n(41),
                o = {
                    ref: {}
                };

            function a(t, e) {
                var n;
                switch (void 0 === t && (t = o), e.type) {
                    case i.b:
                        var a = {
                            ref: Object(r.a)({}, t.ref)
                        };
                        return delete a.ref[e.ref], a;
                    case i.a:
                        return {
                            ref: Object(r.a)({}, t.ref, (n = {}, n[e.ref] = {
                                id: e.id ? e.id : null,
                                status: e.status
                            }, n))
                        }
                }
                return t
            }
        },
        341: function(t) {
            t.exports = {
                CityAdvancedSelect: "1k24dhu",
                ProfileQuestionPosts: "184zeos",
                AMP_authorProjects: "nkq1wp",
                ResearchActionFollow: "1ysja3z",
                HeaderRequestsCounter: "676hlk",
                ProjectProperties: "1igm01s",
                createEmailCampaign: "1o9w0jp",
                AddSupplementaryResourcesAuthorItemFromAccountKey: "gdaznu",
                removeBusinessCreditCard: "xlxslu",
                FundingSubscriptionGroupRequest: "1x8266y",
                PublicationItemFromGraphqlDataDefaultActions: "1z0j3mm",
                AwardedGrantDetailTabOverview: "rn3n50",
                UpdateTitleCodeSnippet: "o9fl2k",
                UpdateAnswerPost: "kftrmd",
                BusinessAutoBillRunBusinesses: "127x9xg",
                JobStats: "1royrxn",
                AccountPersonItemMetricCitationCount: "118k0jx",
                QuestionPostItemViewMetric: "1j2b54y",
                PublicTopicPostRecommendationItemNew: "1r3hhav",
                ProfileHeaderAvatar: "h1yhos",
                PlacementItem: "1fsyc9o",
                ProjectDescription: "1j8e0y8",
                GrantItemBadges: "1ned5xv",
                SetPreprintDiscoveryHeaderClosed: "1mzv3z",
                WithPostAttentionTracking: "rkidrc",
                AdminTakeDownBatchInvalidLinksList: "hnff7h",
                FulltextExternalRequestResolutionStepRequest: "mp9m4t",
                ProfileStatsReportResearchListAnswerItem: "1dcupsh",
                HomeFeedAdItemSocialActions: "144uewr",
                BusinessAutoChargeLogs: "1ti7l0u",
                AMP_figureForHeader: "1re0esq",
                CreatePrivateConversation: "1n9hl5d",
                EmailCampaignPromotionList: "10kjjy5",
                PostJobOverviewDefault: "q7dbp2",
                HomeFeedProjectUpdateListItem: "15pj0xo",
                Regions: "3j3g5s",
                ProjectCollaboratorsTable: "1v47j3c",
                ProjectItemDescription: "bsqtuw",
                RequestFullText: "1i6p174",
                BusinessAccountInvitationsTable: "e86eul",
                DeleteGrantOpportunitySavedSearch: "7qlsbj",
                PublicationCurationItem: "1ywa3pb",
                ManagePremiumContentAccessDialog: "11g7y4x",
                ProfileStatsContentRecommendationsListItem: "ywwcj9",
                ProfileStatsReportInteractionsReadersAnonymizedListItem_Publication: "9mmro4",
                GrantOpportunitiesAdminFilterSecondLevelScience: "17a5b2b",
                LatestAuthoredQuestionPostList: "w5o91q",
                ActiveRecruitmentPersonItemQuery: "zmf4bp",
                AdvertCampaignsList: "1phh0j",
                AwardedGrantItemBadges: "1r2whh6",
                ClaimPublicationSelectionItem: "1n35u56",
                AwardedGrantParticipantInlineItem: "gj7yfi",
                AuthorsInviteDialog: "15ez2bn",
                SubscriptionFeedAccountListItem: "1ntx02x",
                pauseOrder: "xz7yho",
                DeleteJob: "kujlkg",
                addCreditCard: "xq41xb",
                JobOrderListQuery: "3nlwko",
                ProfileStatsCitationsContent: "iglpw4",
                DeletePublicationLink: "173wclz",
                HomeFeedJobListItemBare: "13jxm0c",
                AdminPublisherInsightsFeedbackListItemOpenAccess: "fqeztp",
                LiteProfileAccountHeaderDetails: "10ryalb",
                ResearchActionAddEditFigures: "k4g3h7",
                deactivateCreative: "1kt397z",
                QuestionPostItemCommentCount: "1bdyift",
                ProfileManagePublicationLinksExperimentProvider: "3sf0d5",
                GrantOpportunityAwardedGrantRecommendationListItem: "jd4t00",
                PublicationEditFormAbstract: "1a9pr7i",
                AwardedGrantItemTitle: "1p6qrjq",
                LocationPresetsEdit: "ij2fh8",
                JobPromoRelatedExperiments: "6e9fio",
                StoryCollectionSelect: "d3tyxn",
                AccountPersonListItemFullNameLink: "um0j8z",
                DeleteAnswerPost: "1teuc5d",
                GrantOpportunityRelatedPublications: "1314u2s",
                deleteBusiness: "rmzyib",
                PublicationEditAuthorsEditRequestDialog: "mijr53",
                AdminCountries: "1jvjiw4",
                EmailCampaignsList: "1pvm4i3",
                ResearchDetailMeta: "ts19v8",
                deleteBusinessNotification: "szr6au",
                ApplicationsQuery: "1t647ci",
                JobListQuery: "9w3iut",
                AccountReportButton: "1l9q3nq",
                InstitutionNameAutocomplete: "12fqhbb",
                GrantOverviewRecommendedGrantItem: "cobbwi",
                AdvertGroupFormAudienceSelect: "17z1ame",
                QuestionPostItemStoryImage: "1ip2rxh",
                GrantOpportunityAwardedGrantRecommendations: "vao63i",
                CandidateProfileResearchQuery: "f0lkvw",
                FulltextRemovalLinkLegalInformationJournal: "s5kjwm",
                BusinessAccountInvitationRolesSelect: "13yi6u4",
                InstitutionPostsTable: "1pufgkz",
                RecruiterProfileContactQuery: "mvrgha",
                ProfileHeaderEditableAvatar: "1fnq89e",
                FulltextExternalRequestResolutionFlow: "11z6hby",
                FollowAccount: "vmnpx9",
                UnpaidJobOrderListQuery: "b9b6sw",
                BusinessAudienceSelect: "lhe1oq",
                MentionPopover_Network: "o7r8zd",
                BusinessNotificationServiceApproveOrder: "w3pfvu",
                ProfileManagePublicationLinkListItemAdditionalLinks: "75x209",
                AMP_FigureDetails: "104w6hq",
                EditAnswerPostComposer: "1eeytmp",
                PreprintDiscoveryPublicationItem: "1avjrd0",
                PublicationDetailAdFallback: "1epqbua",
                ResearchDetailStatsOverviewItemScoreBreakdown: "1p8fl4v",
                WithQuestionPostCreationChannelExperiment: "1lofk21",
                GrantOpportunityRelatedPublicationsList: "1ppf4ro",
                PromotionsChart: "13zh720",
                PublicFigureDetailsSimilarPublicationItem: "tjkvmt",
                AccountDmcaInfringementList: "miqmgm",
                QuestionPostItemCreatedAt: "1mg13e6",
                AddLabMembersModalSuggestedPublications: "1w6akcy",
                ProfileHeaderDetailsDegree: "1a3xee9",
                AMP_PublicFigureDetailsSimilarPublications: "1q6zned",
                AdministrationRetractPublicationForm: "12k5t4t",
                PersonItemYearsSinceFirstPublicationQuery: "1rpco91",
                createBusiness: "aeif8s",
                ResearchDetailLinkedDataInTab: "t47uwp",
                AuthorSuggestionsPromo: "18c881s",
                FollowPersonListItem: "1yuop6b",
                QuestionPostItemTitle: "p1tf92",
                AnswerPostItemTime: "gl184s",
                addBusinessBillingAddress: "1d18mjm",
                BusinessTermsOfServiceModal: "1xry9gc",
                LiteAwardedGrantFundingAmount: "6ydik3",
                JobsManagementFeedbackPromo: "1uws17n",
                ProfileManagePublicationLinkVisibilityModal: "1m7mz16",
                ResearchDetailHeaderStatsItemScore_viewer: "k1beqn",
                MessageItemContextActionReport: "11xv8f5",
                LiteProfileResearchPostItem: "19103dv",
                GrantOpportunityDetailTabOverviewSidebar: "107h5y3",
                JobPostWorkflowLandingStepExperiment: "18zuqxo",
                FollowAccount_ProfileHeader: "hdk4nr",
                ProfileContributionsUnclaimedSearchResults: "1n6ugjp",
                NavigateToNextStepTile_Viewer: "hrrgqz",
                UnlinkDirectPromotion: "174yoih",
                ProfileHeaderDetails: "1kpaiw8",
                ProfileStatsResearchInterestPercentilesModal: "qedgxh",
                SearchCandidatesQuery: "wshnzj",
                TabPaymentHistoryOrders: "37ib3r",
                ResearchDetailCommentItemActions: "1rebxp4",
                AdminPublisherInsightsFeedbacksInError: "ecen3d",
                EmailCampaignListItem: "15jha4r",
                authorStats: "9809vd",
                MentionPopover_Creators: "1lpeq9r",
                TargetingReachFetcher: "2pt47z",
                CheckoutBillingAddressSelectedAddress: "1uk5rs1",
                UnfollowProject: "18na76m",
                updateBusinessBillingAddress: "qm7o9e",
                HelpByGivingFeedbackPromo: "vsyagd",
                PublicFigureDetailsSourcePublication: "d4n42u",
                EmailCampaignsChart: "1vln0jr",
                EditTitle: "gpd13e",
                LeadCampaignCreate: "1yqh17a",
                ExpressCheckoutJobBenefitsStep_Viewer: "a0456g",
                UnclaimedCoauthorsList_Viewer: "wvk9i9",
                ProductEditForm: "16f91lq",
                PublicationItemAbstract: "1so8i7h",
                LitePostAnswerItem: "1czlt26",
                JobPostingEdit: "vhoehp",
                PublicationFileInfo: "s2u87x",
                ProfileManagePublicationLinkVisibilityModalStepConfirmPublic: "t7tyso",
                FulltextRequestResolutionStepDeclineAll: "osyhjf",
                SimilarQuestions: "1q8gzbp",
                LeaveLabModal: "atly3q",
                ProfileContributionsPublicationsList: "f6if1o",
                AdminRateLimitUnblock: "17pl7v4",
                LiteKeywordSimilarKeywordsCard: "1ym8ghc",
                LiteProfileFollowersLoadMore: "qqbc74",
                ResearchActionDownload: "lqefh",
                GrantOpportunitiesAdminFilterTopLevelScience: "1mma6ov",
                BlockAccount: "15j108e",
                HomeFeedPostListItem: "l13z03",
                AccountPersonListItemFullName: "10h9f97",
                StorySelect: "1f4t2h9",
                ProfileStatsReportInteractionsReadersListItem_Account: "1odxoh6",
                createBusinessLeadCampaign: "c1i34q",
                ProjectItemCollaborators: "ts1hyy",
                JobPostWorkflowClassificationStep: "u5owps",
                LiteAwardedGrantDetails: "1pje60w",
                ProfileAnswerPostList: "9k7idy",
                LabPublicationsList: "1jbwf26",
                LabInvitationsModal: "6mpubj",
                CreateAnswerPostComposer: "15f8c7a",
                ProjectQuestionItem: "k0imyr",
                EditLabAlumniModalPeople: "1m5ztu6",
                AnswerPostContributionItemLikeRatingCount: "xnu5w0",
                PostDetailQuestionPostItemLocal: "1oj3hzx",
                AdminTakeDownBatchDetailsNavigation: "whhi9y",
                JobDetailsStep: "1bocyol",
                ProfileManagePublicationLinkVisibilityModalPublicationLinkItem: "kn7roj",
                EmailCampaignsTable: "s2405x",
                ResearchActionAddSupplementaryResources: "121ohhg",
                SatisfyFulltextExternalRequestByEmailFromPublicationLink: "1dv2i7p",
                UnlikePublication: "sl46xr",
                AdminPublisherInsightsFeedbackListItem: "1a0brn0",
                ResearchDetailHeaderStats: "5owhje",
                RightsHolderSelect: "1yi3oo3",
                SaveJobPostWorkFlowLandingStep: "1ck8c29",
                AwardedGrantDetail: "16bkglo",
                SatisfyFulltextRequestByPrivateMessageFromTemporaryFile: "5tyx0w",
                PostDetailAnswerPostDisplayListItemLocal: "asfird",
                PostFollowButtonPost: "c4qqir",
                NavigationQuery: "12kx0xr",
                BusinessDashboardNotificationList: "nh7g1h",
                PublicationItemFigures: "1c3ax1t",
                AccountPersonItemActionFollow: "tecyrh",
                updateAdvert: "17thwgq",
                acceptTermsOfServices: "fg0pzy",
                RemoveKeywordFromPost: "1d86cd6",
                ProfileRelatedResearchersFollows: "g2bk9h",
                AccountPersonItemActionPrivateMessageForPublicationFeedback: "1qub60b",
                LitePostAnswersList: "1kp4fut",
                PublicationLabCreationPromo: "2r8y4r",
                ResearchDetail: "oajzxc",
                FulltextExternalRequestResolutionStepPublicUploadByPublicationLink: "fogyom",
                PromotionScheduleSelector: "reaxaq",
                AwardedGrantClaimClusterDialog: "d0c3xg",
                ProfileHeaderDetailsBadges: "1377cz3",
                PublicProfileCitationItemSource: "xiry6l",
                PublicationItemMetricTooltipContentReads: "1stv3gn",
                BusinessAccountManager: "1ffrnux",
                FulltextRemovalLinkLegalInformation: "n9irlg",
                FulltextPublicUpload: "1ub4rop",
                AnswerPostItemMessageLinkImages: "1d4mggt",
                CreateLabStickyPromo: "15e0xr6",
                AccountActionMessage: "1mecqld",
                GrantSaveSearchModal: "1ixyhki",
                renameAdvert: "dvpz2j",
                CandidateProfileHeaderQuery: "15wc63s",
                PostDetailAnswerPostList: "1cp6uux",
                GrantOverview: "1cbbaee",
                AccountAdminInfoButton: "ally0e",
                ResearchDetailHeader: "9vwpoo",
                HomeFeedMessageAnswerItem: "1pqkxpp",
                JobPostWorkflowDescriptionStepExperiments: "13p7lv1",
                LiteProfileResearchPostProjectQuestionItem: "g6fx1",
                ResearchDetailCommentReplyList: "rmqpg6",
                TabPurchasesSubscriptionItem: "shtfpz",
                addBusinessBillingAddressToList: "5aiehi",
                LabAlumniModal: "1tbmj4y",
                CreateIssue: "q8fdo9",
                CreateManualInfringement: "rv4eum",
                LinkDirectPromotion: "54cme4",
                LiteAwardedGrantContent: "kkzly3",
                GraphQLMessageBody: "yz065g",
                PaidJobOrderListQuery: "1o49ehu",
                AdminPublisherInsightsOverviewTabs: "1ke5hgy",
                AdminTakeDownPublicationAbstractsActions: "1868ji0",
                ResearchDetailRelationIndicatorFeedbackRequest: "13765at",
                AwardedGrantAdminOverviewPage: "69c38r",
                createAdvertGroup: "1j0lrp",
                PublicationItemMetricTooltipContentAssetConsumes: "jh2sdq",
                AwardedGrantClaimClusterDialogItem: "c14jj3",
                ProfileOverviewStats: "3bhtsx",
                ProfileOverviewOngoing: "d38ada",
                ResearchDetailAuthorList: "e8jwba",
                BusinessNotificationAccountSendMessage: "zt8665",
                FulltextRemovalLinkLegalInformationAccount: "1wkg118",
                RequestFeedback: "1aspj9d",
                FollowKeyword: "3fz0tr",
                CreatePublicPublicationLinkFromTemporaryFile: "12r3c5",
                skipJobPostWorkFlowClassificationStep: "uid61r",
                HomeFeedPostListItemSocialContext: "11wmnsa",
                InstitutionSearchQuery: "r9cwty",
                SaveJobPostWorkflowExpressCheckoutJobImage: "5ae5oa",
                AcceptPublisherInsightsFeedbackAction: "57ubdg",
                AdminTakeDownBatchListItem: "184ieap",
                ProfileStatsReportRecommendationsPersonActions_Account: "k0u76t",
                QuestionPostItemQuestionViewsMetricsTotal: "1nbcm82",
                GrantOpportunityAwardedGrantRecommendationList: "19mgw52",
                PostLikeButton: "p787sy",
                PreprintDiscovery: "1tjq6dx",
                ChangeLinkVisibilityFromPublicToPrivate: "mllpgg",
                TopicSkillsListReact: "1ss484x",
                AddPublicationToLabPromo: "i53ip1",
                ProfileContributionsrenderContent: "oswj1k",
                InstitutionPostsList: "jeod6p",
                BusinessDelete: "1vvech",
                RecruiterProfileHeaderQuery: "w25ey0",
                ProjectDetailsMeta: "oz7bqm",
                PostJobDetailsDefault: "1hsgnpp",
                PublicationItemMetricTooltipContentRecommendations: "4fhrak",
                GrantListItem: "1yh8u5e",
                OrderStatusToggler: "10gera3",
                JobPostCollaborateWorkflow: "zkn602",
                AccountPersonListItemImage: "s2le8o",
                CreateComment: "mld5n4",
                AccountAdminItem: "lz8sif",
                AdvertRenameModal: "7em9m1",
                InlinePublicationMention: "1r7zqac",
                FulltextExternalRequestResolutionStepUpload: "1fh6e8q",
                QuestionPostItemAuthorFacePill: "1ja6ceh",
                ProfileHeaderDetailsMetaItemsContainer: "1thfmbi",
                linkOrderToBusiness: "1vxy7lq",
                AdminTakeDownInfringingAccount: "3hlxql",
                SubscriptionFeedPostListItem: "awyk7w",
                AnswerPostContributionItemMetaItems: "194nbeg",
                ReportDuplicateAccountForm: "18euvxq",
                FulltextRequestResolutionRequestPublication: "zwaxsf",
                HomeFeedPostListItemActions: "11nzdfs",
                BusinessBillingSettings: "u10uql",
                CreateLab: "sg6ozk",
                AwardedGrantDescription: "rz666f",
                ResearchDetailStatsCitingAccounts: "1en9xbc",
                AMP_headerMenuSelection: "dqp61z",
                GrantOpportunitiesAdminFilterEligibilityType: "1afltll",
                ResearchDetailApplicationBar: "vl8kk8",
                CreativeIframePreviewModal: "1t6owrq",
                createCustomerWithCreditCard: "1tf1s0d",
                deleteAdvertCampaign: "7pkzbc",
                TopicPostAskQuestionOrStartDiscussion: "1dvsadn",
                GrantOpportunityListItem: "yowvkl",
                saveFirstCreditCard: "ic8svl",
                GrantOpportunityInsightsTeaser_Viewer: "fn2bse",
                CandidateProfileHeaderDetailsMetaItemsContainer: "16a4pmd",
                PublicationsSelectOption: "1pofnin",
                PromotionsTable: "88ufsf",
                PromotionsList: "1b17rf4",
                ResearchDetailCommentEditForm: "nwkvxd",
                LoaderQuery: "1x14xe2",
                AdminPublisherInsightsFeedbackListItemPublication: "13fivuq",
                PublicationDoiInfo: "a79vxz",
                HeaderLoggedinMarkNotificationCenterSubscriptionsAsSeen: "1f1f87b",
                ShoppingCartTile: "1qbm98a",
                UpdateResearchExperience: "m81trf",
                unlinkOrderFromBusiness: "1w3ys8o",
                AdvertCreate: "1gy4012",
                ProjectItemTitleLink: "56a6z6",
                LiteKeywordPostsList: "8q0vtb",
                GrantOpportunityDetailTabOverviewSidebar_Viewer: "1pqgmqo",
                PublicationItemMetricReads: "1aeei7e",
                GrantOpportunityRelatedGrantOportunitiesList: "sn378h",
                FulltextRequestResolutionStepDeclineMessage: "1ii1bx7",
                PublicationEditDialog: "ou2fj0",
                GrantOpportunitiesAdminFilterAgency: "274pz8",
                AnswerPostContributionItemBody: "c39f4d",
                LiteProfileIntroduction: "35suc6",
                unschedulePromotion: "2w2tfn",
                GraphQLAccountTooltip: "6fbgdz",
                ExpertAccount: "1fegt19",
                ProfileHeaderAvatarContainer: "n59dxs",
                changeSubscriptionBillingAddress: "iygc3t",
                coreTags: "1rowd1",
                LocationPresetsItem: "1b398n8",
                SaveJobPosting: "xj5lda",
                IndirectAuthorSuggestionsTargetAccountSection: "m983mb",
                SatisfyFulltextRequestByPrivateMessageFromLinkId: "f274in",
                SlotJobListQuery: "1vduit1",
                HomeFeedProjectUpdateItemBare: "16tfv7f",
                QuestionPostItemAuthor: "1wvamsy",
                declineAllFulltextRequests: "13i5bo3",
                PendingApprovalAdsList: "10bi03x",
                GraphQLPublicationTooltip: "l3bvy8",
                PostFollowersList: "3sk86l",
                LiteProfileStats: "1ss16vu",
                AwardedGrantPublications: "506f2",
                changeSubscriptionPaymentMethod: "169u60l",
                NotificationsReact: "1pl61lh",
                AwardedGrantClaimItem: "1hr985t",
                PersonItemSkillsQuery: "1ypna00",
                SuccessStoryDetailsStoryContent: "q9d2za",
                HomeFeedAdItemSocialFooter: "oyk55v",
                AuthorClaimLandingPageAuthorDetailsPublications: "15vu8xw",
                WithPublicationFollow: "eluxyb",
                ProfileManagePublicationLinksBatchVisibilityModal: "1dj0dgu",
                HomeFeedPostAnswerItem: "s3u3ti",
                FulltextPrivateUpload: "nxoxft",
                MessageReplyItemAuthor: "18fwqlr",
                PublicationItemMetricCitations: "mtkcpn",
                PromotionInstitutionSelector: "19axtkw",
                AMP_IncomingAuthorCitationsList: "11hz0ft",
                QuestionPostItemKeywords: "di83kz",
                SuccessStoryDate: "m980jf",
                CreateSubscriptions: "1lvxcqt",
                LineItemStatusToggler: "ftikde",
                GrantOpportunityDetailBadges: "1j3fm3s",
                updateBusinessLeadCampaign: "7d3b",
                PublicationEditHeader: "tno4xl",
                removeAccountCustomerCreditCard: "138la3w",
                AdminPublicationCurationSpace: "1bgnzlg",
                CoreTagsAutoSuggest: "y4m2gj",
                ProjectActionView: "1ru38n8",
                AccountPersonItemMetaItems: "vzlaxw",
                BusinessAccountsTable: "1ivg7p0",
                HomeFeedItemAd: "5cl1p4",
                FeedbackEditor: "aqkvxb",
                deleteReply: "1c56lnq",
                AMP_FigureSourcePublication: "14qg865",
                AddLabModalSuggestedPublications: "1tn5asy",
                CreatePublicPublicationLinkFromPublicationLink: "10rsjvl",
                ProjectItemStatus: "mzqugg",
                HomeFeedPublicationListItemActions: "cn3nkk",
                AuthorPublicationList: "dt82lb",
                ProfileContributionPublicationLinkFileListItemName: "ggwgbo",
                ResearchDetailStatsOverviewReadsBreakdown: "95du7f",
                ExpressCheckoutJobSingleStep: "1f49yrp",
                renameAdvertGroup: "1tezurj",
                FulltextRemovalLinkNote: "352up0",
                QuestionPostItemStorySubject: "70gh2n",
                BusinessAutoBillLogItem: "1jyoxjy",
                AccountFollowSimpleButton: "1fbb8l1",
                ProfileContributionPublicationLinkFileListItemMetaItemOwner: "4bgo2w",
                MessageReplyItemActionRecommend: "rel2pu",
                LeadCampaignsTable: "szwiis",
                JobPostCollaboratorStepEditAll: "gw9cjd",
                ProfileManagePublicationLinkListPublicationLinkItemActionDownload: "jyh7h4",
                CreateGrantOpportunityBookmark: "9y9v4v",
                BusinessPaymentDialog: "221a9p",
                ResearchDetailStatsChart: "y13xmc",
                CheckoutBillingAddress: "1wimzbo",
                FollowLab: "1ul5iti",
                LitePostFollowersModal: "17b2jy9",
                ShareJobDraftModal: "1cbmk0n",
                ProfileStatsReportContentPublicationResourceDownloadReasons: "14nx7rz",
                ShoppingCartTileCollaborator: "3tejqi",
                TopicPostOverviewHeader: "1bvthtx",
                FulltextRequestResolutionFlow: "1gvdg9",
                AMP_authorSciences: "1bzacrt",
                activateCreative: "1r72j0l",
                FullTextLegalInformation: "10ynnha",
                ProfileStatsReportSuccessStoryItem: "wqymx",
                ResearchDetailCommentReplyEntryForm: "1gqe14c",
                ProfileStatsContentRecommendationsList: "l5c8vl",
                ProfileManagePublicationLinkListPublicationLinkItem: "cf1zwd",
                SuccessStoryText: "1qzqpwa",
                AddLabMembers: "13666gn",
                FulltextRequestResolutionStepRequest: "1guhf13",
                deleteComment: "6skomt",
                ResearchDetailRelatedProjects: "8236tu",
                CreateResearchExperience: "1c77tda",
                ToggleJobBookmark: "1wsqj5g",
                AdminPublisherInsightsFeedback: "1l7uh2a",
                SetQualityRating: "hpgh69",
                UpdateHeaderRequestState: "1yg7l56",
                InstitutionPostsChart: "hofk76",
                PostDetailQuestionPostItem: "bdv568",
                GrantOpportunityDetailHeader: "14eltxp",
                JobPositionAdvancedSelect: "vesrok",
                ProjectLabCreationPromo: "jswk9g",
                AccountMergeRequestModal: "rp16rx",
                AdminTakeDownBatchPublicationAbstractsList: "itvs7y",
                ProjectAdminDetail: "rhc4i9",
                AdminTakeDownPublicationAbstractsTabContent: "p9r74g",
                CreativeStatusToggler: "1iax4z5",
                HomeFeedPublicationListItemBare: "1c3efkj",
                saveJobPostWorkflowExpressCheckoutJobBenefitsStep: "mrovqa",
                HomeFeedProjectListItemBare: "11lcdlb",
                AccountSubscriptionManagement: "179r6eb",
                AwardedGrantDetailTitle: "1trfwzj",
                FulltextRequestResolutionStepPrivateMessageByFile: "7pnc5r",
                ResearchDetailFullText: "1fcnh44",
                ProfileManagePublicationLinkListItem: "ztdnf7",
                AwardedGrantDetailActionClaim: "hci1go",
                QuestionActionRecommend: "we2e1a",
                ActivityItemSocialContextModal: "c0jaur",
                createBasicJobDraft: "jgfiu4",
                ProfileStatsReportInteractionItemActions_Publication: "1x46rz3",
                JobPostWorkflow: "1p7jz5y",
                ClaimFlow: "kh7hkd",
                PublicationItemMetricTooltipContentCitations: "cafbsh",
                ProfileStatsReportResourceDownloadReasonItem_Account: "in9ihr",
                LatestAuthoredQuestionPosts: "1uve52e",
                RecruiterOnePageAccountDetailsDefault: "1k0jtfc",
                updateBusinessRole: "1nq0ryg",
                DeleteGrantOpportunityFeedback: "1vwafgm",
                ProfileStatsReportContentCitations: "1ny2i0f",
                ProfileHeaderDetailsFullName: "1gx1m0n",
                LiteProfileHeader: "1939wp1",
                ResearchDetailTabReferences: "156y2db",
                createAdvert: "b13aqc",
                ResearchActionClaimAuthorship: "1nwlu0w",
                FulltextRequestResolutionHeaderPublication: "10lh8mm",
                FigureLegalInformation: "16q1dpe",
                UnfollowAccount_ProfileHeader: "nrzna6",
                AddLabModal: "yq6dlm",
                AdvertCampaignsTable: "kkdm1f",
                Stories: "1rkcp94",
                exportAdvertGroup: "1uja1py",
                AnswerPostItemMessageLinkFiles: "6rhzbn",
                followLineItem: "sl50k8",
                pauseLineItem: "454tmu",
                ResearchDetailAbstract: "xfjour",
                GenerateDoiDialog: "9yrwpb",
                ProfileContributionPublicationLinkFileListItemMetaItemCreationDate: "yc5ryn",
                CreateLabPublications: "1qqbci8",
                LitePostQuestionBody: "khhzo0",
                RecommendedQuestionPostList: "g7091g",
                AMP_figure: "1we0d37",
                SaveRecruiterProfileGeneralDetails: "3nad9m",
                EmailCampaignsPromotions: "1ij7y1b",
                AdminRateLimitInspect: "1cnotnh",
                SuccessStoryTargetTitle: "9gc8o0",
                ProjectDetailsQuestionsNumber: "ud433a",
                ProfileGrantsBox: "11l5co",
                LabDetailsAlumni: "7xj1fv",
                AdminTakeDownBatchDetails: "onjjng",
                likeLineItem: "jylezv",
                QuestionPostDetailItemAuthor: "1q22t4z",
                ProfileManagePublicationLinkListPublicationItem: "cqz51j",
                LocationPresets: "qyqanf",
                FulltextUploadFlowExperiment: "1961wim",
                LiteProfileEducationLoadMore: "x7p53l",
                ClaimAuthorSelection: "1i4b22i",
                AccountActionFollow: "ro1vro",
                FulltextRequestResolutionByPublication_viewer: "1eebzj6",
                PersonItemCurrentLocationQuery: "1lzyu4j",
                PublicationItemSocialBarGraphQL: "1vvjoci",
                InsightPresetsAndKeywordsSearchQuery: "1ujbazk",
                SetSeenActiveRecruitmentSearchTips: "7igr7k",
                QuestionPostItemShareBar: "1sqohr6",
                SaveJobPostWorkFlowDescriptionStep: "173r3dh",
                AccountPersonItemMostRecentPublication: "c5401m",
                AdminTrafficExperimentAdMetrics: "169oo7j",
                PublicationCitationItemWithTrafficExperiment: "86yyqb",
                GrantItemTitle: "q12cwy",
                ResearchDetailAuthorLatestCitationPromo: "ism9vo",
                ProfileStatsReportStatBoxResearchInterest: "1x9bh5d",
                UnlikeMessage: "14ib2tw",
                DeleteQuestionPost: "16bz8z0",
                ProfileContributionsUnclaimed: "1oeuc0f",
                GrantSaveSearchRenameModal: "jxr5tt",
                RecruiterProfileQuery: "gl7cu2",
                PublicationItemDefaultMetaItems: "4kanc1",
                PublicationEditDialog_Viewer: "xwg19m",
                respondToFeedbackConsent: "jome8e",
                QuestionPostItemBody: "1739g2w",
                GrantTabSearchFilterSecondLevelScience: "wd8krv",
                BusinessDashboardNavigation: "i03afa",
                deleteLocaitonPreset: "6r8yqw",
                ProfileStatsReportFeedbackPromo: "10cu2o6",
                ProfileImageEditDialogReact: "1t6hbqm",
                RemoveLabLink: "yqhksc",
                AccountBlockModalContent: "5bng4q",
                AccountPersonItemActionViewProfile: "e9xe0y",
                AwardedGrantParticipantInlineItemList: "m6egeo",
                markJobApplicationsSeen: "10dayza",
                PublicationItemPreview: "nqx49q",
                FulltextExternalRequestResolutionStepPrivateMessageByPublicationLink: "v3j6dw",
                AdvertIframePreviewModal: "1jo05vj",
                IntroductionModal: "11o4sqp",
                updateJobCollaborators: "aymbxo",
                AnswerPostItemContextActions: "14s6tai",
                PublicationItemJournal: "1o71pqr",
                AdministrationAccountInfoItemOwnerScore: "1plvsvr",
                FulltextRequestResolutionPublicationLinkList: "12uf79u",
                QuestionActionFollow: "1mwltn",
                EditLabLeadModalQuery: "nztznx",
                JobDashboardQuery: "19n3fvd",
                FulltextRequestResolutionStepFileList: "s7o94f",
                AccountAutoComplete: "58dpsj",
                UpdateLab: "15jym2w",
                TabPurchasesSubscriptions: "1mbigq4",
                ResearchActionView: "1fazjzc",
                GrantTabSearchFilterFundingType: "ozst8z",
                HomeFeedPostListItemSocialActions: "1u8mjzk",
                UpdateProfile: "jaopjb",
                CandidateProfileResearchExperience: "vpjhqi",
                ProfileStatsReportRecommendationsPersonListItem_Account: "1ow8fnc",
                MentionListItem: "g876qa",
                EmailCampaignDelete: "10lcdgn",
                DownloadActionQuery: "15mgryq",
                HomeFeedProjectListItemSocialContext: "brl712",
                ProfileFeaturedResearchItems: "t42rez",
                ProfileStatsReportCitationPublication: "x6nwvo",
                ResearchDetailHighlightedCitationPromo: "8asy0p",
                CreateGrantCollaboratorAvailability: "1tzz60b",
                FeedbackCreationHeader: "qa0m3v",
                FollowPost: "414co2",
                ProjectActionFollow: "mgv1ov",
                AffiliationLabOverviewItem: "zxjm85",
                AMP_authorAccounts: "trn7rd",
                AdminPublisherInsightsFeedbacksInSuccess: "11y2a16",
                BusinessContentItemPromotionList: "1mgue0o",
                CreativesChart: "bjr6qx",
                HomeFeedProjectListItemSocialActions: "1f9l94c",
                DeactivateLab: "7s7wlq",
                PublicationIncomingCitations: "fcj941",
                LitePostAnswerMessageMetrics: "1a2c34o",
                AdminPublisherInsightsFeedbacksInProcessing: "tuoww6",
                AccountPersonListItemImageLink: "1qhqyf5",
                PeopleSelectorValueItemAuthorFromRgKey: "1ny455x",
                HelpByGivingFeedbackToaster: "71952m",
                ProfileHeaderDetailsEditDegree: "1wdafsr",
                LiteKeywordContentHeader: "eelip",
                ResearchDetailTabStats: "ciqd72",
                AuthorTopCoAuthorsDialog: "1134tel",
                ResearchDetailTopReferencedAuthors: "7j8gbo",
                CandidateProfileResearchExperienceList: "12ahv5j",
                AnswerPostItemMessageMetrics: "1kqyuli",
                JobLocationCountrySelector: "1pynzns",
                CitationItems: "14lla7z",
                QuestionPostItemStoryBody: "1hgrzov",
                HomeFeedViewAllModal: "mkorbc",
                ResearchActionGenerateDOI: "cjv4i3",
                GrantActionBookmark_Account: "fdia9k",
                ProfileOverviewStats_Viewer: "arqfyh",
                LeadCampaignList: "baaj9t",
                BusinessBillingLogs: "17r77bc",
                LabMembersModal: "q9oi90",
                JobPostWorkflowDescriptionStep: "15xakne",
                LeadCampaignMappingsModal: "1cdy5n0",
                CandidateProfileQuery: "1kdkqh8",
                ProfileContributionsPublicationsListItem: "1myo8mv",
                LiteAwardedGrantDetailBadges: "1g4rxll",
                ProfileContributionsPublicationsGenericLoader: "wp2qd5",
                SubscriptionChangeBillingAddressModal: "84zks8",
                ProfileStatsContentCitationDetailsItem: "1s7fk7o",
                updateBusinessLeadCampaignMappings: "15w8g6r",
                DoubleAdSlot: "d0aq1a",
                TopicPostOverview: "wtwn48",
                CandidateProfileAffiliation: "19y2m2",
                AccountAutoCompleteSearch: "17omr2b",
                PublicationItemMicrodata: "1d47nz3",
                ProfileQuestionPostList: "vkso4l",
                JobCountrySelector: "pblsbz",
                PublicationItemFulltext: "1q0hbzz",
                ProfileContributionPublicationLinkFileListItemMetaItemFileSize: "1x5q8mm",
                ResearchDetailHeaderStats_Viewer: "173e2sk",
                ResearchDetailFigures: "1linx6b",
                ResearchDetailFullTextRequestList: "uaowc7",
                GrantActionFeedback: "qqix3r",
                CreativesList: "e4bq1e",
                FulltextRequestResolutionRequestersAvatars: "x75rgf",
                AddGrantOpportunityFeedbackNotRelevant: "1hznat8",
                ProfileContributionPublicationLinkFileListItemBadgeMimeType: "6ylaw4",
                GrantOpportunityContact: "1nkhay",
                sendPromotionPreview: "1fv8waq",
                AdvertsChart: "p9gv3g",
                InstitutionAdvancedSelect: "o5w6tc",
                FulltextSelectUploadType: "1gqdy6",
                PersonItemInstitutionDepartmentQuery: "1tkroo2",
                PeopleSelectorValueItemAccountFromRgKey: "1nz1r8h",
                ResearchListItemQuery: "1yja6l8",
                GoogleDfpTraffickerSelect: "1nr73us",
                AdvertsList: "1dk0201",
                LabLink: "1ie8hdx",
                LiteProfileExperienceLoadMore: "fhmudi",
                AdvertGroupForm: "19buldq",
                SubscriptionChangePaymentMethodModal: "6rco9f",
                AccountPersonItemMetricPublicationCount: "smp5e2",
                GrantTabRecommendations: "1yxad7x",
                ManageJobSlotsModal: "u4gvzd",
                FulltextRequestResolutionStepPublicUploadByPublicationLink: "1tvhuv",
                GrantOpportunityDetailMeta: "172l62",
                UpdateAccountName: "1smri8y",
                GrantOpportunityAdminPage: "1ijj71i",
                AccountBlockActionProvider: "1e6u3ps",
                GrantOpportunitiesAdminSearch: "13usx3s",
                HomeFeed: "1cxe8q7",
                HomeFeedPublicationListItemSocialActions: "1qzaj3i",
                EmailCampaignChartSingle: "q9h7i6",
                HomeFeedPostListItemBare: "1y3feqv",
                PublicationItemMetricTooltipContent: "jtf9ed",
                ExpressCheckoutJobBenefitsStep: "19f0ze5",
                authorAccounts: "udrq60",
                ProfileInfoRightColumnActions: "1ck3uso",
                PublicationEditFormAuthorsEditRequest: "10qtvln",
                GrantListItemAwardedQualifier: "r6k7bj",
                ResearchDetailPrivateFullTexts: "1cu2txh",
                BusinessAutoChargeLogItem: "nxek5x",
                AnswerPostContributionItemRoot: "6yfj79",
                PublicationCitingYouPromo: "jw24t3",
                acceptBusinessAccountInvitation: "1fbemgj",
                AccountBlockButton: "xsy8ze",
                ResearchDetailCommentItem: "1p877up",
                CurrentAccountPersonListItem: "1tmfi31",
                ResearchDetailStatsRecentReaders: "m8ggkf",
                LitePostMicroData: "ktgva2",
                AccountMergeRequestsListItem: "hlx2j7",
                UnollowPublication: "1llwb30",
                AuthorClaimLandingPageAuthorList: "19xrobk",
                GeographySelect: "1ignxfi",
                JobSearchPreferences: "1pdqjcj",
                RemoveLinkFromPublication: "13gxxyv",
                ProductCategoriesSelect: "gespix",
                ResearchDetailPublicationItem: "fgkcj5",
                ProductEdit: "1pdnn5a",
                AnswerPostContributionItemImages: "vpuib",
                FulltextRequestResolutionByPublication: "12gnk3m",
                UploadPublicFileEot: "6atto9",
                ResearchDetailFullTextEmptyAuthor: "1mnbayq",
                TakeDownBatchActionInfringement: "16y86ds",
                unlikeLineItem: "1d5yhlx",
                FulltextRequestResolutionStepPublicUploadByFile: "ututt4",
                AdvertPreview: "1bmuyy2",
                ResearchDetailBadges_Experiment: "6sdckj",
                AdminPublisherInsightsFeedbackListItemAccount: "16hh8te",
                changeBusinessDefaultCreditCard: "1ecsgjb",
                AddLabMembersQuery: "6cx4zr",
                FollowedQuestionPostList: "1u9zptf",
                AwardedGrantAwardees: "bttw5q",
                ResearchDetailTabRelatedResearch: "1u7ufyd",
                ResearchDetailRelatedSimilarResearch: "r7agnw",
                LabDetailsQuery: "12ax7si",
                AdvertsOverview: "bcfwsb",
                CreateRightsHolder: "123vmwk",
                AdminTakeDownBatchPublicationAssetsListItem: "1e5ujuv",
                ProfileAvatar: "xd9uof",
                GrantOverviewRecommendedGrants: "1ytubae",
                ProfileStatsReportResearchPublicationActions: "1l6as0c",
                saveJobSearchPreferences: "1lkw4lj",
                EmailCampaignPromotionDelete: "3tlb8w",
                QuestionPostItemImages: "k3qzgg",
                FeedbackCreate: "14jbvl4",
                AnswerPostContributionItemType: "188jsoq",
                RecruiterWelcomeBlogQuery: "163p5g3",
                AdminPublisherInsightsFeedbacksInProcessed: "xkzolw",
                AMP_publicationRecommendations: "12uo3ai",
                ClaimPublicationSelection: "1mjssu9",
                CreateEmailCampaignLegacy: "1onqftv",
                BusinessCreditCardList: "1eafhdr",
                HeaderMessagesList: "1pfdg7t",
                QuestionPostItemContextActionReport: "11bs8sk",
                RemoveMemberFromLab: "12kcs0h",
                ResearchDetailRecommendPromoRecommenderImage: "fjjrg",
                TakeDownBatchActionProcessMatchedPublicationAssets: "1vu0xc9",
                ProfileManagePublicationLinkVisibilityModalStepVisibility: "1ntg5p7",
                FulltextRequestResolutionStepDeclineAllFormLayoutHeadline: "xa0qn",
                QuestionPostItemStatus: "1x96cof",
                ProfileManagePublicationLinksBatchVisibilityModalStepSubmit: "2n953q",
                ProfileContributionsUnclaimedSearchListItem: "1cfqxsn",
                FulltextRemovalLinkRemovalReason: "1hz2qmp",
                BusinessRoleEdit: "18wrzha",
                ProjectTitle: "313mgr",
                TopicPostOverviewContent: "w1430u",
                AdvertApprovalToggler: "1ke29cy",
                ProfileFollowedAccountsList: "y5gjp4",
                ProjectDetailsQuestions: "7b9xq",
                ProfileStatsDetailsResearchInterestPercentileByScience: "vurom4",
                ProfileStatsReportInteractionItemActions_Account: "15cagn6",
                GrantTabSearchResults: "140sijd",
                JobPositions: "1biee6a",
                ProfileHeaderActionsMessage: "ivf3qu",
                LitePublicationItem: "f30rpc",
                RightsHolderComposer: "1szs2yb",
                ProductsTable: "qfwko4",
                PreprintDiscoverySearch: "5f67j",
                CreateLabCardSuggestedPublications: "vz762a",
                AdminTakeDownBatchList: "1hx66ut",
                LocationSelectorQuery: "1vk761l",
                EditAccountBillingAddress: "awtw7j",
                CheckoutPaymentMethod: "alfr10",
                LabDetailsMembers: "16brb11",
                PostDetailAnswerPostDisplayListItem: "1xfuy0i",
                LitePostQuestionHeader: "119yz3c",
                BusinessInvoicesList: "eu97f6",
                WithPostEditFormLinkData: "438u7y",
                changeBusinessDefaultBillingAddress: "15sse7c",
                AwardedGrantItemAmount: "1pa9glc",
                SaveSimpleSurveyResult: "x62y8z",
                CandidateProfileOverviewStats: "2v93kz",
                JobsRelated: "h8qrb5",
                PublicationEditFormAuthors: "1xpjmg4",
                GrantTabSavedSearch: "17f4931",
                QuestionPostItemMetrics: "u9wqno",
                exportAdvert: "179z5xd",
                AccountPersonListItemMetaItems: "14olck3",
                AMP_FigureCitations: "1jp4nzm",
                CollaboratorAdminItem: "1stug7w",
                AccountPersonItemImage: "3zfgq6",
                AdCampaignInvoices: "my5fmg",
                AccountFollowButton: "18hi897",
                ResearchActionRequestFeedback: "mcmu6w",
                NotificationLandingPage: "mzqvz6",
                IndirectAuthorSuggestionsContentReact: "5xhiio",
                LiteQuestionItemBody: "7vl76p",
                PostItemMessageLinkPublication: "6tps4i",
                LiteKeywordBreadcrumbPath: "wjv8t5",
                PublicationItemMetricItemScore: "11jwq5t",
                LiteProfileSkillsAndExpertiseLoadMore: "1rkexl6",
                ResearchDetailStatsResearchInterestPercentilesModal: "1msy7gd",
                LiteProfileSidebar: "1e0zvzr",
                ManualInfringementComposer: "huakvv",
                AccountPersonItemDepartment: "15w9hsm",
                PromotionContentItems: "h1jmzi",
                updateBusinessAudience: "1pfqa7u",
                deleteBusinessAccountInvitation: "xr53af",
                ProfileContributionsUnclaimedListItem: "12e6p45",
                GrantTabSearchBookmarkPreview: "gsrwwj",
                GrantTabSearchFilterTopLevelScience: "hmkxvx",
                AwardedGrantRelatedGrantOpportunities: "1ekba5u",
                UnfollowKeyword: "1tgsi4",
                PersonItemAcademicLevelQuery: "1hxe39w",
                InstitutionFeedbackPromo: "l7jatm",
                TakeDownBatchActionRetryFailedPublicationAssets: "iu51p3",
                LinkQuestionToProject: "12xke09",
                CandidateProfileLab: "nnh361",
                approveAdvert: "yk9ytq",
                LabEditDescriptionModalQuery: "1r2wdfi",
                ProfileStatsContentCitationDetailsItemSource: "1on68hl",
                updateBusinessSettings: "vq19zy",
                ProfileStatsReportInteractionsReaders: "1ppqgzi",
                DenyAwardedGrant: "6py3o2",
                SaveSimpleSurveyCustomAnswer: "1visjd0",
                ActiveRecruitmentContainer: "msquu",
                AwardedGrantAdminPage: "3h1u03",
                FulltextRequestResolutionStepPrivateMessageByPublicationLink: "1j5x0in",
                LitePostPopularAnswersList: "8p77nt",
                DeclineAuthorship: "1sa0a6i",
                GrantOpportunityDetailStats: "sm9otx",
                EditComment: "ne5z8b",
                GrantOpportunityRelatedGrantOportunitiesListItem: "151i4a1",
                RecruiterProfileAffiliationQuery: "1ndgbcx",
                AdminTakeDownInfringementsTabContent: "19gcpxc",
                AdvertGroupPreview_Campaign: "1mha0j7",
                PublicationItemType: "j7dgqu",
                LabEditProjectsQuery: "15aa3d2",
                ProfileStatsDetailsChart: "14yfmfs",
                SaveJobPostWorkflowUnitedPreviewStep: "1xleccy",
                MessageReplyItemActions: "13vezw2",
                BusinessSwitcher: "v6kxxk",
                BusinessNotificationItem: "xmx29n",
                AccountAdminActionLogList: "ywjion",
                SaveJobPostWorkFlowDetailStep: "81g99r",
                MarkJobBundlePurchaseOfferAsRead: "1ci3taz",
                AMP_FigureCitationPublicationItem: "1rdzb6a",
                LiteProfileBadges: "1ujphe3",
                GraphQLInlinePublication: "1bq2khv",
                ResearchDetailClaim: "a85jsl",
                LiteProfileResearchMessageItem: "60q4w7",
                SaveJobPostWorkFlowPreviewStep: "1f1w6yw",
                CandidateProfileIntroductionSkills: "ugvwr8",
                QuestionPostDetailItemHeader: "1sq63j0",
                PromotionFormAudienceSelect: "1crcgnj",
                CandidateProfileCoauthors: "m2yacz",
                SaveRecruiterProfileIntroduction: "84d8li",
                AwardedGrantDetailMeta: "1uxsk4i",
                JobsPromoJobItem: "zdx66u",
                SetProfileStatsReportInteractionsDataUsagePromoClosed: "1dm7i0q",
                CandidateProfileEducation: "bxfbhq",
                UpdateDegree: "reatox",
                LocationPresetsDelete: "18pephf",
                ProjectCitedPublicationRow: "1xhccb6",
                ResearchDetailTopCitedAuthors: "1ac1baq",
                GrantTabSearchFilterEligibilityType: "1go9ir9",
                AdvertGroupRenameModal: "axxlzl",
                PlaygroundAdminList: "f402gi",
                LiteProfileCurrentInstitution: "lwyeur",
                NotificationCountersPolling: "ucozel",
                AwardedGrantRelatedGrantOportunitiesListItem: "1otem54",
                SubscriptionFeedLabListItem: "f9331b",
                GrantOpportunityDetailTabOverview: "1uu3pe5",
                MessageReplyItemActionEdit: "qyv4ln",
                AddLabMembersProjectCollaborators: "16q1rnw",
                renameAdvertCampaign: "1fg9yg2",
                createAdvertCampaign: "1bo8878",
                LiteProfileCitedLoadMore: "1nuq83w",
                LabCreatedProject: "1kj7ax3",
                CurrentAccountAvatar: "whe2uo",
                PublicFigureDetailsSourceContexts: "18f6i1m",
                TabPurchases: "1khqadw",
                ResearchDetailViewerWasCitedPromo: "gtjo5w",
                HomeFeedProjectUpdateListItemSocialActions: "b8atll",
                AdvertGroupCreate: "1g2g17r",
                BusinessAccountRolesEdit: "tg8h0w",
                BusinessDashboardNotifications: "17etv30",
                UnlikePost: "1oxcark",
                ResearchDetailApplicationBarActionLike: "1nlowg6",
                NewActiveRecruitmentPersonItemQuery: "1gsus8k",
                TakeDownBatchActionRetryFailedPublicationAbstracts: "go5qxd",
                ShareJobDraftTile: "1jb3zw0",
                LitePostQuestionAuthor: "1tsj38c",
                ProjectsAdminOverview: "1gj36e9",
                ProfileContributionPublicationLinkFileListItemBadgeVisibility: "1o64f7f",
                AnswerPostContributionItemAccount: "rtyxwf",
                ProductCreate: "1ethtup",
                ResearchDetailAbstractModal: "on54cr",
                saveBusinessCreditCard: "105claa",
                cancelSubscription: "1fd130f",
                CandidateProfileHeaderDetails: "18royaq",
                JobPostWorkflowStepTrackingExperiments: "1gia4s6",
                FulltextRequestSocialContext: "1hm3ham",
                HeaderRequestsList: "r1qvhb",
                FulltextRequestResolutionStepAvailability: "72d2ia",
                GrantItemOrganisation: "1w8cj4m",
                NotificationCenterHeaderRequestItemSubject: "1koyqvu",
                AwardedGrantItemInstitution: "5yrpyl",
                PostKeywords: "8yyo3",
                EditAboutMeModal: "12isqqy",
                QuestionPostDetailItemTitle: "14xrc1e",
                CurrentAccountUrl: "v95iw0",
                DeactivateJob: "1okxue4",
                SubscriptionFeed: "1hg9va",
                MessageActionRecommend: "qeq8ev",
                AMP_authorAffiliation: "13jifo6",
                HomeFeedJobListItem: "1gaw4v7",
                ProfileContributionPublicationLinkFileListItemPreview: "113fqx1",
                AdminTrafficExperimentAdMetricsExportButton: "pbar72",
                AddAccountBillingAddress: "4bw8es",
                HomeFeedMessageItemBare: "ie3au8",
                FulltestRequestResolutionDeclineAllModal: "1q080xn",
                PublicationItemDefaultMetrics: "1gantqr",
                HeaderSubscriptionsList: "167bkc1",
                RenameGrantOpportunitySavedSearch: "1urtj64",
                AuthorClaimLandingPageSearchResults: "1a1asqa",
                JobPreviewStep: "148a7cn",
                EmailCampaignEdit: "114dxrv",
                ResearchActionAddFullText: "xyxujt",
                ProfileStatsReportInteractionsReadersListItem_Publication: "lmutsn",
                PublicationItemAuthors: "v33wra",
                PublicationItemTitle: "2fsc7t",
                PreprintDiscoveryActivityItem: "1nfth7h",
                GrantOpportunityDescription: "f71izj",
                LiteProfileNetworkFollowersList: "ktcgl6",
                ProfileStatsReportResourceDownloadReasonItemAccount: "19obk3y",
                LiteProfileResearchPublicationItem: "1capr4q",
                deleteAdvertGroup: "fps9ep",
                GrantOpportunityInsightsTeaser: "c086ae",
                RequestDenyModal_Experiment: "ghmzth",
                PromotionForm: "1p2bpx3",
                ProfileStatsReportPublicationItemTitleLink: "zn0gf8",
                HomeFeedProjectUpdateListItemSocialContext: "17kwl15",
                SignUpModal: "avk84t",
                FulltextExternalRequestResolutionStepPrivateMessageByFile: "22dbxe",
                AMP_relatedPublicationFromPost: "ppltdt",
                EditReply: "1m7qkkk",
                PublicationItemBadges: "1dg02oi",
                updateBusinessAccount: "1so9d82",
                PromotionListItem: "1ipcpxm",
                CountriesEdit: "17cdlnq",
                FulltextRequestResolutionFlow_viewer: "62ati6",
                AwardedGrantFundingAmount: "vlf0p3",
                SubscriptionFeedPublicationListItem: "3v7o9n",
                ResearchDetailHighlightedCitationPromo_Account: "ii7vlu",
                FulltextExternalRequestResolutionStepPublicUploadByFile: "6zn9xt",
                deleteBusinessAccount: "lyqv38",
                TopicKeywordFollowButton: "1e1scfv",
                disapproveAdvert: "6fvqh5",
                LitePostSimilarQuestions: "a7plez",
                AdSettings: "mjsrbu",
                ProjectAdminOverviewItem: "10enel",
                LabAdminOverview: "186ce6c",
                AddCurrentLabMembers: "wd9cw3",
                updateBusinessNotificationStatus: "1xjh7fc",
                PublicationItemPublicationDate: "zj02y2",
                PublicationItemTitleLink: "71c1an",
                UpdateAllPublicationLinksSetVisibilityPrivate: "1hm5ypa",
                AdvertEdit: "1aws2bn",
                BookingModalPersistBusyStep: "8tcgfq",
                LiteProfileProjectsSection: "878nfe",
                SingleInstitutionSelectSearch: "1ittgg0",
                ResearchDetailHeader_Viewer: "6thqtv",
                StoryMetadata: "gumjdx",
                LiteProfileLab: "e04hih",
                AddLabModalPrefilledMembersQuery: "16fnmuh",
                removeBusinessBillingAddress: "1rybvl0",
                AwardedGrantDetailActions: "xbibja",
                LitePostRelatedPublications: "151ittn",
                ProfileManagePublicationLinkVisibilityModalStepConfirmDelete: "1h0knp5",
                FulltextSlurpUpload: "vxe6bm",
                ProfileStatsReportInteractionsReadersAnonymizedListItem_Account: "13a12sw",
                LicenceSelect: "11l0oc4",
                LiteProfileFollowingLoadMore: "1g2z5nb",
                SearchFlagQuery: "1s5f8ei",
                ProfileOverviewAbout: "yu56dl",
                HeaderMessageItem: "13d29u5",
                JobSlotBalanceQuery: "8cmjb1",
                SetProfileStatsReportFeedbackLastClosed: "rol147",
                AdCampaignEmailsList: "1h2sc8u",
                LabAddProjectPromo: "ikgub",
                SingleInstitutionSelectInitialValue: "twavgl",
                PublicationItemMetricRecommendations: "161e8ho",
                TargetingImportModal: "1kbge4r",
                ProfileStatsReportResourceDownloadReasonItem_Publication: "on6lrq",
                AdminTakeDownBatchInfringingAccountsList: "qp4d90",
                ResearchDetailCommentEntryForm: "1fef69p",
                FiguresLegalInformation: "rfopuc",
                GrantItemMetaItems: "1xj4nus",
                AccountFollowActionProvider: "16uehxa",
                ResearchDetailTabComments: "2iqqjs",
                PreprintDiscoveryActivityStory: "7t814v",
                ProfileStatsReportResourceDownloadReasonItemActions_Account: "14w5a90",
                GrantOpportunityRelatedResearchers: "1m1sh9",
                saveJobPostWorkFlowClassificationStep: "14r7txg",
                ApplicationListFilterQuery: "7zsefd",
                AdvertCampaignsChart: "884l6t",
                LitePostDetails: "45ewpy",
                LiteProfileNetworkCitedByList: "16lshnf",
                AccountPersonInlineItemFullName: "ph5a3r",
                ResearchDetailMetaDoi: "7itnkc",
                ResearchDetailTabSelector: "4l6grx",
                BusinessAccountForm: "1bwm26q",
                AddKeywordToPost: "1wf9vqm",
                ProfileFeaturedResearchItemSuccessStoryQualifier: "xn7wpg",
                BusinessBillingAddress: "15hxs5p",
                LiteKeywordSidebar: "1r1mnhu",
                AdvertGroupsList: "1w944z9",
                LiteProfileExperience: "1ur1dpd",
                SubscriptionFeedPublicationTitle: "42dbay",
                unfollowLineItem: "1tnboc2",
                LabInvitationsAddPublicationModal: "xp9pcj",
                ProfileSkillsEditModal: "gm1frj",
                ResearchDetailTabOverview: "xztndj",
                FulltextMakePrivatePublic: "t4fpd4",
                FulltextRequestResolutionRequest: "13uftc3",
                ResearchDetailFullTextEmptyReader: "13ezde8",
                resumeOrder: "1rl1ggb",
                AccountPersonItemSkills: "17znesr",
                ProductCreateForm: "3ajzsy",
                mapSalesforceCampaign: "10y8rra",
                PublicProfileCitationItem: "xn1oms",
                LiteAwardedGrantParticipantInlineItem: "1tqadvl",
                PromotionItemSelector: "1jhymq0",
                ResearchDetailApplicationBar_Experiment: "1145o8m",
                EmailCampaignSalesforceMapping: "ab8cqj",
                CreateTakeDownBatch: "10m6fqm",
                PublicationCreationEOTSummary: "1rd23k5",
                LikePost: "h5w07k",
                AddLabHeadPublicationList: "1gb3fu4",
                ProjectItemMetrics: "ypg75c",
                AccountPersonItemFullName: "94wrv",
                SaveJobPostWorkflowUnitedDetailStep: "1v8to08",
                ProjectTitleForm: "1r4l0ww",
                SidebarHeaderQuery: "dfs1zc",
                PublicationItemTypeAndFeedbackLabel: "1bp8sbs",
                JobsSuggestion: "uwwvi9",
                AuthorClaimLandingPageAuthorClaimed: "1svocai",
                AwardedGrantDetailActionRemoveFromProfile: "10ymwup",
                GrantOpportunityCloseDateInWords: "5kv482",
                ResearchDetailCitations: "fg7q72",
                JobPostWorflowJobDetailStep: "t6vuiq",
                CandidateProfileEducationList: "6yveta",
                ProfileStatsReportResourceDownloadReasons: "1g1d1p3",
                PromotionAvailability: "1wq9wta",
                CreateBusinessAccountInvitation: "v8eli2",
                createBusinessNotification: "146xkq2",
                ProjectItemFromGraphqlData: "v30pm3",
                ResearchDetailActions: "1kio5kw",
                SetLabDetailPostJobPromoHidden: "3bflx7",
                ResearchDetailBadgeType: "1x9v2mh",
                GrantItemAwardCeiling: "1ha6duo",
                CandidateProfileOverview: "17fsiy6",
                createBusinessAudience: "i0vu43",
                ResearchDetailPDFLoadMore: "u7qvo2",
                LiteAwardedGrantSidebar: "17qkb0a",
                LitePersonListItem: "m227pj",
                HomeFeedPublicationListItemSocialContext: "ghvasu",
                PromotionScheduleCompleted: "1ntt7by",
                LiteProfileResearchSection: "1tsqoco",
                createBusinessAccount: "168sta9",
                SubmitGrantOpportunityFeedbackNotRelevant: "1jw0fu2",
                AnswerPostItemContextActionReport: "rr7mi2",
                ResearchDetailMetaDetails: "1gcvx3e",
                InstitutionSelectorFormField: "1b79fkp",
                UnfollowAccount: "lrqurk",
                ResearchDetailFundingInformation: "k4rj52",
                BusinessList: "30d54y",
                GrantTabSearch: "1u9b5u4",
                CheckoutTermsOfServiceSubscriptionPlanLink: "t801gc",
                AwardedGrantPublicationsItem: "1udg2lq",
                ProfileRelatedResearchersFollowedAccountsHeader: "xid9vr",
                FulltextRequestResolutionRequestersQualifier: "j8o7cw",
                AdminTakeDownBatchInfringingAccountsListItem: "15k7pr7",
                BusinessEditNotification: "1khoy1a",
                AwardedGrantItemDescription: "6jh186",
                MessageItemContextActionEdit: "1vz29yu",
                WithdrawPremiumContentAccess: "eav7su",
                GrantItemTitleWithHighlight: "e7ffg5",
                AwardedGrantAdminSearch: "n1g3qf",
                ResearchDetailStatsPersonItem: "bbeluh",
                JobDetailsStep_Viewer: "1rli6if",
                ResearchActionRecommend: "kh40mo",
                RenameEmailCampaign: "1cvnb5q",
                DenyAwardedGrantParticipantCluster: "1ue4oz3",
                BusinessAudiencesList: "1mo5akr",
                ChangeDefaultAccountBillingAddress: "jreeqd",
                ResearchDetailCommentList: "102f4w1",
                PreprintDiscoveryPublicationItemSocialBar: "nbc85i",
                AudiencesTable: "amnjv6",
                JobPostWorkflowLandingStep: "dg3zkq",
                PromotionEdit: "1h1ha7p",
                CandidateProfileIntroduction: "1rby3y0",
                ResearchDetailAuthorModal: "esuih9",
                RemoveCodeSnippet: "2gd4k",
                PreprintDiscoveryActivityItem_Viewer: "1ucl8e0",
                ProjectsByAccountId: "eu363",
                authorSciences: "grmoah",
                AdministrationPublicationItemScore: "9v7gea",
                ResearchDetailFullTextsAndLinkedResearch: "umpbj6",
                ResearchDetailPublisherPilotContactMethodChoiceModal: "11rbhhs",
                ProfileHeaderDetailsPrizeBadges: "1ajg58w",
                ProfileFollowingAccountsList: "79ofcp",
                FulltextExternalRequestResolutionEmailInfo: "rdyfmu",
                JobBundlesQuery: "166bqa5",
                ResearchDetailPublisherPilotBanner_Viewer: "1gkwhan",
                HomeFeedProjectListItemActions: "1f3k3e1",
                AccountPersonListItemActionFollow: "kssccl",
                RequestPublication: "1x8ksiu",
                ResearchDetailDataSet: "1exu2z7",
                FulltextUploadEot: "1wmlojg",
                PreprintDiscoverySidebar: "1b6gvkj",
                FulltextRequestResolutionStepUpload: "1elnygy",
                PublicationsItemGQL: "n9n4jl",
                createPromotion: "1769el9",
                LabSuggestPublicationsQuery: "kc45ut",
                LabOverviewItem: "plf9xr",
                MessageReplyItemActionDelete: "1fqjizj",
                ContentHeaderQuery: "16yc3zm",
                updateBusiness: "1nibz9v",
                UnfollowLab: "1nwov2e",
                AdminPublisherInsightsOverview: "iio9cz",
                BusinessMenu: "1hpdonz",
                AwardedGrantDetailHeader: "3x649b",
                BusinessAudienceEdit: "1vyf0s9",
                AccountInfoModal: "1odhu3q",
                AdvertGroupsOverview: "3x143o",
                updateAdvertGroup: "uux6iq",
                LitePostSidebar: "4i0m3a",
                GrantOpportunitiesAdminOverviewPage: "1xd37xs",
                AwardedGrantClaim: "8nrei",
                FollowPublication: "mrzcnl",
                ProfileHeaderDeceasedAvatar: "gnlf28",
                DismissGrantCollaboratorAvailability: "lao8gv",
                LabsInviteModal: "zrgw8a",
                ResearchDetailFullTextTitle: "1djjg4",
                ExpressCheckoutJobPreviewStep: "1co7v6r",
                ResearchDetailCommentReplyEditForm: "xk900g",
                LiteProfileProjectsLoadMore: "1v4enpy",
                UpdateEmailCampaignMapping: "13qao8s",
                LabCreated: "1mejda0",
                BusinessAudienceCreate: "1j3y7v2",
                BusinessAddressItem: "ld1xl8",
                LikePublication: "1e8990o",
                LitePostQuestion: "17z9x6x",
                GrantActionBookmark: "17lquhv",
                CreateGlobalGrantCollaboratorAvailability: "i0qzmk",
                UpdateQuestionPost: "1l06bxj",
                ResearchDetailPublisherPilotBanner: "sm7a9p",
                DeclinePublisherInsightsFeedbackAction: "n1o6oa",
                FulltextRequestResolutionBasicStepUpload: "1cq5art",
                ResearchDetailReferences: "imc6r6",
                AdminRateLimitCreateBypassToken: "xzg9lf",
                PublicationEditForm: "17clspc",
                GiveJobFeedback: "1fq6xmy",
                ResearchDetailApplicationBarActionFollow: "7x08pt",
                MessageReplyItemActionReport: "fxwlk7",
                TakeDownBatchActionProcessMatchedPublicationAbstracts: "18gsmdv",
                LiteProfileEducation: "1howbml",
                UpdateCollaboratedJobPost: "1nppnzz",
                GrantItemDescription: "1i4uajd",
                CreateAnswerPost: "14f5ddk",
                authorAffiliation: "15jzmnm",
                PublicFigureDetailsCitations: "1p3zib9",
                LiteProfile: "270gsd",
                AdminRateLimitGetBypassTokens: "1n819v8",
                RequestAbstract: "13pnnhl",
                CarouselInviteSuggestions: "hmzuvv",
                ProfileDegreeModal: "wnmjzq",
                ProfileStatsReportPublicationItem: "13gs6aa",
                AwardedGrantListItem: "kgeiut",
                PromotionItem: "12wvcje",
                LiteProfileNetworkSection: "txjkl",
                QuestionPostItemLikeRatingCount: "ph2fud",
                FeedbackRequestMessageForm: "iermgq",
                ActivityStoryAccount: "1qpe1m3",
                CreatePublicationAuthorshipEditRequest: "10udn1s",
                ClaimAwardedGrantParticipantCluster: "1d4gnw4",
                AdminPublisherInsightsFeedbackListItemRightsHolder: "1ificnv",
                ProfileQuestionPostListItemAccount: "1lt73tc",
                BusinessItem: "nn9cuy",
                updateLocationPreset: "fpuhei",
                ContactModal: "1ca5byw",
                QuestionPostItemMetaItems: "1w4sr15",
                LiteProfileAboutSection: "1cdecx2",
                ActivityStoryAuthor: "l3k3fd",
                SetInstitutionsFeedbackPromoLastClosed: "14iapjr",
                FulltextRemovalLink: "j1fcdc",
                LiteAwardedGrantContentHeader: "1u6zcjl",
                CheckoutReviewOrderSubscriptionPlan: "13lv103",
                PersonProfileList: "3x0upj",
                ProfileContributionsPublicationsListItemActionsMobile: "cpt2a",
                GrantOverviewNavigation: "gq2ke9",
                LiteProfileResearchPostQuestionItem: "eojkdg",
                ConfirmFulltextRequestSimilarPublications: "tgaalb",
                AdminPublisherInsightsFeedbackListItemActions: "kq2oth",
                AMP_publicationChapters: "1xcrscu",
                AdminTakeDownBatchPublicationAssetsList: "1x1tcdh",
                ProductList: "ynayjx",
                PersonProfileListItem: "1ag0n9j",
                ProfileHeader: "1o35xmt",
                DepartmentAdvancedSelect: "1htv7bx",
                BusinessAccountDelete: "vyf20w",
                EmailCampaignName: "7r4ntc",
                RequestAuthor: "1n9gjxh",
                HomeFeedProjectListItem: "10w5836",
                AnswerPostItemContextActionDelete: "1rshoui",
                ProjectCitedPublicationsTable: "q3y8zu",
                AnswerPostItemMessageBody: "ad18e9",
                ProfileStatsReportContentInteractions: "3ayap1",
                GrantItemDescriptionWithHighlight: "ey46ll",
                GrantActionSource: "1opy1ei",
                LabCreatedPDP: "rzyigj",
                AdvertGroupPreviewForecast: "1e09a4f",
                RemoveCollaborator: "14oxpl3",
                FundingSubscriptionPage: "11a6u7j",
                LiteKeywordOverview: "1g09i0v",
                SubscriptionFeedProjectListItem: "z6y6ga",
                ProfileInfoRightColumnAdminActions: "cmcw6z",
                updateCountry: "dq624m",
                ResearchDetailHeaderStatsItemScore: "1mlebgb",
                AudienceSuggestionStepSelectUrl: "1xun2s3",
                AwardedGrantDetailBadges: "raq6lr",
                GrantTabSavedSearchItem: "11nz5p4",
                BusinessSettings: "i578rq",
                ResearchActionRequestFullText: "9k2rol",
                LabDetailsLead: "7flqmb",
                ResearchDetailDataSetMetadata: "1w8e0ov",
                HeaderMessagesCounter: "1d7rvx8",
                GrantTabSearchFilterAgency: "hl0zw0",
                AccountPersonItemActionViewResearch: "18hgxxm",
                FacepileAvatar: "de84wo",
                UpdateJobLabVisibility: "iphyzj",
                JobBundlesPriceQuery: "13e7plo",
                ResearchDetailTabCitations: "fe2wo2",
                ResearchDetailRecommendPromo: "xvhw34",
                ProfileLabBox: "1pi6tn7",
                AllowPremiumContentAccess: "14lt196",
                EmailCampaignAggregatedChart: "1f16xl7",
                CreateGrantOpportunitySavedSearch: "rdfbib",
                GrantOpportunityApplicationDetails: "1ynyw04",
                GrantOpportunityAdvancedSelect: "so5y5",
                RemoveEmailCampaign: "95glz2",
                LiteQuestionItem: "z6kfe4",
                GrantItemType: "1na2d2z",
                DeleteResearchExperience: "84q3b8",
                PromotionAvailabilityTotalsTable: "v1wfnv",
                SuccessStoryTargetType: "1q3tslu",
                FulltextRequestResolutionRequesterAccountSelectPeopleListItem: "166lb94",
                MessageItemContextActionDelete: "1xe66u8",
                AddLabHead: "3vxxlz",
                WithQuestionPostCreationChannelExperiment3: "4xehl6",
                AwardedGrantObjective: "z9j1r6",
                AuthorClaimLandingPageByPublicationSearchResults: "1b2wqtp",
                ProfileFeaturedResearchPublicationItem: "ljgaju",
                PostLikerAccountsModal: "108w7ou",
                deleteBusinessAudience: "ufg5oo",
                QuestionStats: "1oku24r",
                AddLabMembersModalLabMembers: "1naht5w",
                FulltextExternalRequestResolutionStepFileList: "1l6b9h0",
                AMP_authorStats: "17nxm2y",
                FulltextExternalRequestResolutionFlow_Viewer: "w3amim",
                AccountPersonInlineItemImage: "1cclkyu",
                AdministrationRemoveSingleCitationsOutgoing: "wg5vbm",
                UpdateLabLead: "1675lyz",
                LiteProfileNetworkCitedList: "ti53xt",
                LiteProfileResearchPostAnswerItem: "sn7r8q",
                GrantOpportunitySources: "14trhe2",
                GrantOpportunityDetail: "1bnd0mv",
                ProfileStatsReportResourceDownloadReasonItemActions_Publication: "17t3uen",
                PublicationFigureDetailReferenceItem: "17vvnh8",
                JobPostWorkflowPreviewStep: "w1i9et",
                EmailCampaignsGroups: "sjqmyt",
                AdminSuccessStoryDetails: "omzvhe",
                ResetFailedPublisherInsightFeedbackItemAction: "sc9wnp",
                AdminRateLimitDeleteBypassToken: "1o6d66f",
                LiteProfileNetworkFollowingList: "pvdbrx",
                GrantOpportunityRelatedGrantOportunities: "1txbsq",
                SaveJobPostWorkflowExpressCheckoutJobPreviewStep: "79qjht",
                updatePromotion: "ritk58",
                GrantTabSearchSave: "19gu36p",
                UserPublicationsList: "10gddrz",
                PublicFigureDetailsSimilarPublications: "fiis4a",
                PublicTopicPostRecommendations: "rwt46t",
                AdminTakeDownPublicationAssetsTabContent: "1wjv5r9",
                LiteProfileCoAuthors: "1ycd7c0",
                AdCampaignEmails: "w4jyk8",
                AwardedGrantItemParticipants: "15zjlof",
                EditAbstract: "1v1tucu",
                OverviewHeaderQuery: "9s45h2",
                AMP_AuthorPublicationsList: "1ssabcx",
                AdministrationRemoveSingleCitationsIncoming: "25pphs",
                QuestionPostDetailItemDropdownActions: "1qjj5oz",
                GrantTabSearchFilterResearchType: "s2ck1s",
                RemoveAccountBillingAddress: "1jvq8dr",
                EditQuestionPostComposer: "13envk4",
                AdvertGroupFormWithPreview: "13ih28i",
                LabAddMembersPromoQuery: "8we8ei",
                ResearchDetailFigures_CurrentAccount: "1ymudym",
                UnfollowPost: "1cw0d18",
                FulltextUploadFlowFunnelExperiment: "pqypug",
                GrantOpportunitiesAdminEdit: "1jvfvyg",
                LitePageConverseMessageBody: "11klwrm",
                ProfileOverviewResearchStats: "3u4ppw",
                LikeMessage: "r3v5jw",
                FulltextRequestResolutionRequesterAccountSelect: "tklouv",
                AnswerPostItemAuthor: "8q6guh",
                AdvertGroupEdit: "1vsgnvk",
                AuthorPublicationsList: "hxayo",
                updateAdPreferenceSettings: "1pa7cug",
                AdminTakeDownBatchPublicationAbstractsListItem: "1btyanh",
                GrantOpportunityDetailActions: "192n3n2",
                AddLabMembersPublicationList: "nc6cvs",
                ResearchDetailStatsOverview: "wxghvf",
                HeaderLoggedinMarkNotificationCenterRequestsAsSeen: "1t9f9oc",
                LabDetailsPostJobPromo: "1rszrsq",
                BusinessAutoBillRuns: "104vkuz",
                PostDetailPopularAnswerPostList: "1ajta2g",
                ResearchDetailCommentReplyItem: "1kcozlh",
                UnblockAccount: "i6ryyz",
                SetJobsManagementFeedbackLastClosed: "22jcz4",
                ProfileHeaderActionsContainer: "9od7uj",
                QuestionPostItemTime: "1wfssxq",
                PlacementList: "167jej5",
                BusinessRoleForm: "171ip3s",
                GrantTabBookmarks: "140tz8u",
                AwardedGrantItemQualifierLabel: "1fm4hkx",
                createLocationPreset: "1hk019c",
                LabAdminQuery: "34b4av",
                schedulePromotion: "bue0qt",
                AccountBlockModal: "1hkxw4v",
                HomeFeedPublicationListItem: "10fnikj",
                ResearchDetailLinkedData: "w1ta4p",
                AdvertsTablePaginated: "1wy5id7",
                PublicationAddSupplementaryResources: "qxxuxv",
                ProfileManagePublicationLinkList: "osogbx",
                QuestionPostDetailItemBody: "f5w0kg",
                LiteProfileContent: "19lpj79",
                PostJobAccountDetailsDefault: "1ilel88",
                updateProduct: "ct5wyk",
                CreateReply: "14cgqa9",
                TakeDownBatchComposer: "1ajswi5",
                exportAdvertCampaign: "12xxgtp",
                LeadCampaignEdit: "2a9k0k",
                PostFollowersAccountsModal: "1x6ofkt",
                PersonItemResearchAreasQuery: "nw5k8r",
                PostLikerAccountItem: "174posx",
                AdditionalLabMembers: "3tccch",
                resumeLineItem: "yy9rgd",
                ResearchDetailStatsLikers: "10epqu1",
                CandidateProfileAwardsAndAchievements: "1tlp99u",
                CarouselPrePrintsItem: "1hhu1jx",
                PrepaidJobBalanceQuery: "xf4wn",
                AddLabModalCurrentMembers: "1hdkv7f",
                SaveRecruiterProfileContact: "1amc2pc",
                AdminBusinessList: "adtclr",
                GrantOpportunitiesAdminFilterResearchType: "bqp4fq",
                AdvertiserList: "n5rk5b",
                QuestionPostListItem: "uwj4qb",
                LiteKeywordTopExpertsCard: "1wrxd3x",
                AdvertCampaignRenameModal: "zwqy6z",
                BusinessRoles: "1yhglra",
                ResearchDetailBadges: "1t299of",
                FulltextRequestResolutionRequesterAccountSelectPeopleInlineItem: "1kydmq8",
                ResearchDetailStatsResearchInterestPercentileByScience: "1kdnbjy",
                GrantOpportunityDetailTitle: "jp9k9t",
                MessageItemStorySubject: "rwd7mz",
                ProfileRelatedResearchersFollowingAccountsHeader: "e4t07v",
                SatisfyFulltextExternalRequestByEmailFromTemporaryFile: "1hcdein",
                AddLabMembersModal: "laqwy3",
                ProfileImageModal: "obzo0d",
                createBusinessAndAccount: "1h26h83",
                BusinessRoleItem: "181do3l",
                TopicPostAskQuestionInputForm: "10hsh6f",
                SalesforceAccountOwnerSelect: "vjpbv0",
                ResearchDetailAuthorListViewer: "q3ho04",
                JobPostCollaboratorStepPreview: "1xeoiow",
                PublicationItemPreviewImage: "d6hq6a",
                AddSupplementaryResourcesAuthorItemFromAuthorKey: "14qwvjz",
                PreprintDiscoveryHeader: "1ifzvd5",
                ProjectCollaboratorRow: "138ex2m",
                declineFulltextRequestsByPrivateMessage: "u2z6rx",
                LabsAlumniInviteModal: "1y5j871",
                RecruiterProfileIntroductionQuery: "1j51090",
                UpdateCollaboratedJobPostImage: "yweawa",
                PersonItemResearchItemsQuery: "ynezfr",
                UpdateLabAlumni: "dwzpc6",
                BusinessAccountInvitationDelete: "1b725is",
                HeaderSubscriptionsCounter: "1jqr3ih",
                AnswerPostContributionItemCreatedAt: "wegvmf",
                deleteAdvert: "1dy5exi",
                CreatePublicationEditRequest: "35cb30",
                TabPaymentHistory: "126r4ii",
                createProduct: "14luc8j",
                LiteProfileCitedByLoadMore: "lxbhbr",
                ProfileQuestionPostListItem: "ie4wy5",
                Story: "1e8v5jg",
                ProfileManagePublicationLinks: "mskndn",
                Checkout: "wtt61e",
                restartSubscription: "12f1v0p",
                FulltextRequestResolutionStepShareMethodByPublicationLink: "1ke5toq",
                ResearchActionAddPublishedVersion: "uibulk",
                HomeFeedAccountListItem: "s2bjai",
                GrantOpportunityEligibility: "fucz6r",
                ResearchDetailAbstractAndFigures: "1srjqye",
                AnswerPostContributionItemFiles: "llaxvi",
                LiteProfileAllCoAuthorsLoadMore: "e4s4n2",
                PromotionCreate: "1857dap",
                WithPublicationLike: "9qbwu5",
                UpdatePublicationLinkVisibility: "53lac0",
                AdminPublisherInsightsProcessedFeedbackListItem: "lrnm5y",
                AnswerPostContributionItemMetrics: "1uhnzp3",
                FollowProject: "6l5vqd",
                FeedbackExpertList: "139y2j",
                BusinessEdit: "klf5lb",
                ProductNameAutocomplete: "19gdq3e",
                createBusinessRole: "1xpa6ye",
                LineItemsList: "3ev6fr",
                AnswerPostItemMessageLinkEntities: "5d0ojf",
                IncomingAuthorCitationsList: "17zn9hc",
                Countries: "wjc8qv",
                ProfileStatsDetailsContent: "o7rbdd",
                DeleteGrantOpportunityBookmark: "14vi21b",
                FundingSubscriptionInstitutionRequest: "1e64dzg",
                SaveJobPostWorkflowExpressCheckoutJobSingleStep: "nna60y",
                LiteAwardedGrantAwardees: "8cdlax",
                ApplicationListQuery: "j23rbh",
                FulltextUploadFlow: "1s3x7zr",
                JobBundlePurchaseOfferQuery: "1e6n1ts",
                LabMembersPublicationsList: "mneax4",
                HomeFeedJobItemSocialActions: "1yfxs8x",
                DeleteLabModal: "1c8yo2f",
                AdvertGroupsChart: "gxoteo",
                LiteProfileAwardsAndAchievements: "1h72kut",
                AccountMergeRequestsList: "tweza4",
                BusinessBillingAwareStatusToggler: "xfiex0",
                BlacklistRecommendationForAccountId: "visip2",
                AMP_FigureSimilarPublicationItem: "n6n491",
                AdminBusinessPromotionList: "9scpbr",
                QuestionPostItemSocialFooter: "8cmiuj",
                ProfileAnswerPostListItem: "y34o9i",
                AudienceSuggestionStepSelectText: "1i7rn73",
                BusinessDashboardLayout: "v42cbq",
                AdminEditAccountNamesModal: "1nbqvoc",
                GraphQLInlineAccount: "1os8x6h",
                AdvertCampaignCreate: "k30sbk",
                PersonItemCurrentPositionQuery: "d07ex1",
                LitePostAnswerBody: "1x2n38r",
                SearchCandidatesFiltersFooterQuery: "1pm4z79",
                HeaderLoggedinMarkNotificationCenterMessagesAsSeen: "14rvpoq",
                ProfileContributionPublicationLinkFileListItem: "ogicsq",
                EmailCampaignList: "warzro",
                ProfileHeaderActionsFollow: "skcgbn",
                AMP_publicationCitations: "1xmjjwv",
                LabInvitations: "1yd00zo",
                updateBusinessNotification: "1210pt7",
                FulltextRequestResolutionRequesters: "2oy0gz"
            }
        },
        342: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(1);
            n(3), n(189), n(101);
            var i = "BEGIN_SEARCHING",
                o = "ERROR_SEARCHING",
                a = "SEARCH_COMPLETE";

            function u(t, e) {
                switch (void 0 === t && (t = {}), e.type) {
                    case i:
                        return Object(r.a)({}, t, {
                            isLoading: !0
                        });
                    case o:
                        return Object(r.a)({}, t, {
                            isLoading: !1,
                            error: !0
                        });
                    case a:
                        return function(t) {
                            var e = {};
                            t.state.publicbrowseSearch && (e.hasResults = t.state.publicbrowseSearch.hasResults, e.items = t.state.publicbrowseSearch.items, e.totalItems = t.state.publicbrowseSearch.totalItems, e.page = t.state.publicbrowseSearch.page, e.totalItems = t.state.publicbrowseSearch.totalItems, e.pageUrl = t.state.publicbrowseSearch.pageUrl);
                            return e
                        }(e.result)
                }
                return t
            }
            n.d(e, "default", function() {
                return u
            })
        },
        343: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(1),
                i = n(4),
                o = n.n(i);
            n(55), n(3);
            n(26);
            var a = "BEGIN_LOADING_AUTHORS",
                u = "ADD_MORE_AUTHORS",
                c = "SET_AUTHORS_DISPLAY_COUNT",
                s = "FINISH_LOADING_AUTHORS";

            function l(t, e) {
                switch (void 0 === t && (t = {}), e.type) {
                    case a:
                        return o()([e.publicationUid, "isLoading"], !0, t);
                    case u:
                        return function(t, e) {
                            var n = e.publicationUid,
                                i = Object(r.a)({}, t[n].accounts, e.accounts),
                                a = t[n].loadedItems.concat();
                            a.splice.apply(a, [e.offset, 0].concat(e.items));
                            var u = Object.assign({}, t[n], {
                                loadedItems: a,
                                displayCount: a.length,
                                isLoading: !1,
                                accounts: i
                            });
                            return o()(n, u, t)
                        }(t, e);
                    case c:
                        return o()([e.publicationUid, "displayCount"], e.count, t);
                    case s:
                        return o()([e.publicationUid, "isLoading"], !1, t)
                }
                return t
            }
            n.d(e, "default", function() {
                return l
            })
        },
        344: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(1),
                i = "RELOAD";
            n.d(e, "default", function() {
                return a
            });
            var o = {
                items: []
            };

            function a(t, e) {
                switch (void 0 === t && (t = o), void 0 === e && (e = {}), e.type) {
                    case i:
                        return function(t, e) {
                            return Object(r.a)({}, t, {
                                items: e.items
                            })
                        }(t, e)
                }
                return t
            }
        },
        345: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(1),
                i = "UPDATE_TAB_INDEX";
            n.d(e, "default", function() {
                return a
            });
            var o = {
                tabIndex: -1
            };

            function a(t, e) {
                switch (void 0 === t && (t = o), e.type) {
                    case i:
                        return Object(r.a)({}, t, {
                            tabIndex: e.tabIndex
                        })
                }
                return t
            }
        },
        346: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(125),
                i = n(1),
                o = n(4),
                a = n.n(o);

            function u(t) {
                return a()("isLoading", !1, t)
            }
            var c = {
                items: [],
                itemEntities: {},
                isLoading: !1,
                totalItems: 0,
                nextOffset: 0
            };
            e.default = function(t, e) {
                switch (void 0 === t && (t = c), e.type) {
                    case r.b:
                        return function(t) {
                            return a()("isLoading", !0, t)
                        }(t);
                    case r.a:
                        return function(t, e) {
                            var n = u(t);
                            return n = a()("nextOffset", e.nextOffset, n), n = a()("itemEntities", Object(i.a)({}, t.itemEntities, e.itemEntities), n), n = a()("items", t.items.concat(e.items), n)
                        }(t, e);
                    case r.c:
                        return u(t)
                }
                return t
            }
        },
        347: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(1),
                i = "CHANGE_SELECTED_ASSET";

            function o(t, e) {
                switch (void 0 === t && (t = {}), e.type) {
                    case i:
                        return function(t, e, n) {
                            var i, o = t[e];
                            return o.selectedAssetKey = n, Object(r.a)({}, t, ((i = {})[e] = o, i))
                        }(t, e.publicationUid, e.assetKey)
                }
                return t
            }
            n.d(e, "default", function() {
                return o
            })
        },
        348: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = "SET_SERVICE_IMPORTED",
                i = "SET_SERVICE_RUNNING",
                o = "RESET_SERVICE_STATUS";
            var a = n(49),
                u = n.n(a);
            n.d(e, "SERVICE_STATUS_DEFAULT", function() {
                return c
            }), n.d(e, "SERVICE_STATUS_RUNNING", function() {
                return s
            }), n.d(e, "SERVICE_STATUS_IMPORTED", function() {
                return l
            }), n.d(e, "default", function() {
                return f
            });
            var c = "",
                s = "running",
                l = "imported",
                d = {};

            function f(t, e) {
                switch (void 0 === t && (t = d), e.type) {
                    case r:
                        return function(t, e) {
                            return (t = u()(t))[e.service].status = l, t
                        }(t, e);
                    case i:
                        return function(t, e) {
                            return (t = u()(t))[e.service].status = s, t
                        }(t, e);
                    case o:
                        return function(t, e) {
                            return (t = u()(t))[e.service].status = c, t
                        }(t, e)
                }
                return t
            }
        },
        349: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(1),
                i = "ADD_EXPERIMENTS";

            function o(t, e) {
                switch (void 0 === t && (t = {}), e.type) {
                    case i:
                        return t.experiments = Object(r.a)({}, t.experiments, e.experiments), t
                }
                return t
            }
            n.d(e, "default", function() {
                return o
            })
        },
        350: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(6),
                i = Object(r.j)("stickySidebar")("REFRESH");
            n.d(e, "default", function() {
                return a
            });
            var o = {
                refreshCounter: 0
            };

            function a(t, e) {
                switch (void 0 === t && (t = o), void 0 === e && (e = {}), e.type) {
                    case i:
                        return {
                            refreshCounter: t.refreshCounter + 1
                        }
                }
                return t
            }
        },
        351: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(6),
                i = Object(r.j)("loginFormSubmitted"),
                o = i("FORM_BEGIN_PROCESSING"),
                a = i("FORM_PROCESSING_SUCCESS"),
                u = i("FORM_PROCESSING_FAILURE"),
                c = n(4),
                s = n.n(c),
                l = n(36),
                d = n.n(l);
            n.d(e, "default", function() {
                return p
            });
            var f = {
                isProcessing: !1,
                isSubmitSucceeded: !1,
                additionalEmail: ""
            };

            function p(t, e) {
                switch (void 0 === t && (t = f), void 0 === e && (e = {}), e.type) {
                    case o:
                        return m(t, !0);
                    case a:
                        return function(t) {
                            return d()(t, {
                                isSubmitSucceeded: !0,
                                isProcessing: !1
                            })
                        }(t);
                    case u:
                        return m(t, !1)
                }
                return t
            }

            function m(t, e) {
                return s()("isProcessing", e, t)
            }
        },
        352: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(1),
                i = n(6),
                o = Object(i.j)("locations")("UPDATE_LOCATIONS");

            function a(t, e) {
                switch (void 0 === t && (t = {}), e.type) {
                    case o:
                        return Object(r.a)({}, t, e.locations)
                }
                return t
            }
            n.d(e, "default", function() {
                return a
            })
        },
        355: function(t, e, n) {
            "use strict";
            var r = n(11),
                i = (n(2), n(0)),
                o = n.n(i),
                a = n(354),
                u = n(1),
                c = n(19),
                s = n(240),
                l = n(187),
                d = function(t, e) {
                    var n = t.touched,
                        r = t.invalid;
                    return n && r ? "invalid" : e
                },
                f = function(t) {
                    var e = t.input,
                        n = t.helpMessage,
                        r = t.helpLabel,
                        i = t.errorReporting,
                        a = t.label,
                        f = t.children,
                        p = t.meta,
                        m = p.touched,
                        h = p.error,
                        b = p.invalid,
                        g = Object(c.a)(t, ["input", "helpMessage", "helpLabel", "errorReporting", "label", "children", "meta"]),
                        v = 0,
                        y = g.status || "",
                        I = "field-" + e.name + (v++ > 1 ? "_" + (v - 1) : "");
                    return o.a.createElement("div", null, a && o.a.createElement(s.a, {
                        status: d({
                            touched: m,
                            invalid: b
                        }, y),
                        errorMessage: Array.isArray(h) ? h[0] : h,
                        errorReporting: i,
                        helpMessage: n,
                        helpLabel: r,
                        htmlFor: I
                    }, a), o.a.cloneElement(o.a.Children.only(f), Object(u.a)({}, e, g, Object(l.f)(e.name), {
                        id: I,
                        status: d({
                            touched: m,
                            invalid: b
                        }, y)
                    })))
                };
            e.a = function(t) {
                return o.a.createElement(a.a, Object(r.a)({}, t, {
                    component: f
                }))
            }
        },
        368: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return r
            }), n.d(e, "b", function() {
                return i
            });
            var r = {
                    EXTERNAL_TYPE_DESCRIPTION: "description",
                    EXTERNAL_TYPE_POST: "post",
                    EXTERNAL_TYPE_REPLY: "reply",
                    EXTERNAL_TYPE_ANSWER: "answer",
                    EXTERNAL_TYPE_QUESTION: "question",
                    EXTERNAL_TYPE_OPEN_REVIEW: "openReview"
                },
                i = {
                    ATTACHMENT: "attachment",
                    MENTION: "mention",
                    PRODUCED: "produced",
                    HIGHLIGHT: "highlight",
                    RELATED: "related",
                    REFERENCE: "reference"
                }
        },
        37: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(11),
                i = n(0),
                o = n.n(i),
                a = n(6),
                u = n(183),
                c = Object(a.j)("modal-root"),
                s = c("MOUNT_MODAL"),
                l = c("UNMOUNT_MODAL"),
                d = function() {
                    return {
                        type: l
                    }
                },
                f = function(t) {
                    return {
                        types: [l, s],
                        performAsync: function() {
                            return Promise.resolve()
                        },
                        componentGenerator: t
                    }
                },
                p = function(t, e, n, i, a) {
                    return function(c) {
                        return new Promise(function(s, l) {
                            c(f(function() {
                                return o.a.createElement(u.b, Object(r.a)({}, n, {
                                    url: t,
                                    widgetParams: e,
                                    onLoad: s,
                                    onError: l,
                                    loadComponentInternalDoNotSetOrYouWillBeFired: i,
                                    hmrAcceptInternalDoNotSetOrYouWillBeFired: a
                                }))
                            }))
                        }).catch(function() {
                            return c(d()), Promise.reject()
                        })
                    }
                };
            n.d(e, "MOUNT_MODAL", function() {
                return s
            }), n.d(e, "UNMOUNT_MODAL", function() {
                return l
            }), n.d(e, "unmountModal", function() {
                return d
            }), n.d(e, "mountModal", function() {
                return f
            }), n.d(e, "mountAsyncModal", function() {
                return p
            })
        },
        371: function(t, e, n) {
            "use strict";
            var r = n(11),
                i = n(5),
                o = (n(2), n(0)),
                a = n.n(o),
                u = n(18),
                c = n(124),
                s = n(572),
                l = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }
                    Object(i.a)(e, t), e.getDimension = function(t) {
                        switch (t) {
                            case "xxl":
                                return {
                                    width: 80,
                                    height: 80
                                };
                            case "xl":
                                return {
                                    width: 75,
                                    height: 75
                                };
                            case "l-m":
                                return {
                                    width: 60,
                                    height: 60
                                };
                            case "l":
                                return {
                                    width: 50,
                                    height: 50
                                };
                            case "m":
                                return {
                                    width: 40,
                                    height: 40
                                };
                            case "s":
                                return {
                                    width: 30,
                                    height: 30
                                };
                            case "xs":
                                return {
                                    width: 20,
                                    height: 20
                                };
                            case "xxs":
                                return {
                                    width: 15,
                                    height: 15
                                }
                        }
                        return {
                            width: 50,
                            height: 50
                        }
                    };
                    var n = e.prototype;
                    return n.getImage = function() {
                        var t = this.props,
                            e = t.imageURL,
                            n = t.imageURL2x,
                            i = t.fullName,
                            o = t.size,
                            u = this.constructor.getDimension(this.props.size),
                            c = "img-circle " + this.props.className,
                            s = null;
                        e && n && (s = e + " 1x, " + n + " 2x");
                        var l = {};
                        return this.props.itemProp && (l = {
                            itemProp: this.props.itemProp
                        }), "xl" === o ? a.a.createElement("img", Object(r.a)({
                            src: n,
                            alt: i,
                            width: u.width,
                            height: u.height,
                            className: c,
                            onMouseEnter: this.props.onMouseEnter,
                            onMouseLeave: this.props.onMouseLeave
                        }, l)) : a.a.createElement("img", Object(r.a)({
                            src: e,
                            srcSet: s,
                            alt: i,
                            width: u.width,
                            height: u.height,
                            className: c,
                            onMouseEnter: this.props.onMouseEnter,
                            onMouseLeave: this.props.onMouseLeave
                        }, l))
                    }, n.getLink = function() {
                        var t, e = Object(s.a)(this.props.iepl);
                        return t = this.props.iepl ? this.props.accountURL + e : this.props.accountURL, a.a.createElement("a", {
                            href: t,
                            onClick: this.props.onClick
                        }, this.getImage())
                    }, n.getContent = function() {
                        return this.props.linked && this.props.accountURL ? this.getLink() : this.getImage()
                    }, n.render = function() {
                        return this.props.hideWhenNoProfilePicture && !this.props.isProfilePictureAvailable ? null : this.getContent()
                    }, e
                }(o.PureComponent);
            l.displayName = "ProfilePicture", l.defaultProps = {
                linked: !0,
                className: ""
            }, e.a = Object(u.a)(function(t, e) {
                var n = Object(c.c)(t, e);
                return {
                    fullName: n.fullName,
                    imageURL: n.profile.imageURL,
                    imageURL2x: n.profile.imageURL2x,
                    isProfilePictureAvailable: n.profile.isProfilePictureAvailable,
                    accountURL: n.accountURL
                }
            })(l)
        },
        376: function(t, e, n) {
            "use strict";
            n.d(e, "b", function() {
                return r
            }), n.d(e, "a", function() {
                return i
            }), n.d(e, "c", function() {
                return o
            });
            var r = "isMobile",
                i = "isAccountLoggedIn",
                o = "profileImageFallback",
                a = function(t, e) {
                    return t.environment[e]
                };
            e.d = a
        },
        378: function(t, e, n) {
            "use strict";
            var r = n(19),
                i = n(5),
                o = (n(2), n(0)),
                a = n.n(o),
                u = n(30),
                c = n(772),
                s = n(22),
                l = new(n.n(s).a)({
                    name: "uploader"
                }),
                d = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }
                    return Object(i.a)(e, t), e.prototype.render = function() {
                        var t = this.props,
                            e = t.buttonIcon,
                            n = t.buttonLabel,
                            i = t.buttonSubline,
                            o = t.buttonProps,
                            s = Object(r.a)(t, ["buttonIcon", "buttonLabel", "buttonSubline", "buttonProps"]);
                        return a.a.createElement("div", l(), a.a.createElement(c.a, s, a.a.createElement(u.a, {
                            type: "button",
                            theme: o.theme,
                            width: o.width,
                            size: o.size,
                            align: o.align,
                            status: o.status
                        }, e && a.a.createElement(u.a.Icon, {
                            identifier: e
                        }), a.a.createElement(u.a.Label, null, n), i ? a.a.createElement(u.a.Subline, null, i) : null)))
                    }, e
                }(o.Component);
            d.displayName = "UploadButton", d.defaultProps = {
                buttonLabel: "Add files",
                buttonProps: {
                    theme: "bare",
                    width: "auto",
                    size: "m"
                }
            }, e.a = d
        },
        38: function(t, e, n) {
            "use strict";
            var r = n(1),
                i = n(0),
                o = n.n(i),
                a = n(66),
                u = n(113),
                c = n(73),
                s = n(12),
                l = n(17),
                d = n.n(l),
                f = n(3),
                p = n(23);

            function m() {
                var t = Object(s.a)(["/api/projects/", "/methods"]);
                return m = function() {
                    return t
                }, t
            }
            var h = n(20);
            n.d(e, "i", function() {
                return b
            }), n.d(e, "b", function() {
                return g
            }), n.d(e, "f", function() {
                return v
            }), n.d(e, "a", function() {
                return y
            }), n.d(e, "d", function() {
                return I
            }), n.d(e, "e", function() {
                return O
            }), n.d(e, "c", function() {
                return E
            }), n.d(e, "j", function() {
                return A
            }), n.d(e, "h", function() {
                return P
            }), n.d(e, "g", function() {
                return S
            }), n.d(e, "p", function() {
                return j
            }), n.d(e, "m", function() {
                return w
            }), n.d(e, "o", function() {
                return C
            }), n.d(e, "l", function() {
                return R
            }), n.d(e, "n", function() {
                return T
            }), n.d(e, "k", function() {
                return L
            });
            var b = "UPDATE_PROJECT",
                g = "ACTION_FOLLOW_PROJECT",
                v = "ACTION_UNFOLLOW_PROJECT",
                y = "ACTION_ADD_MORE_PROJECTS",
                I = "ACTION_REQUEST_PROJECT",
                O = "ACTION_UNDO_REQUEST_PROJECT",
                E = "ACTION_REQUEST_PROJECT_FROM_PUBLICATION_AUTHORS",
                A = "UPDATE_PROJECT_COLLABORATOR_INVITED",
                P = "explicit",
                S = "comment";

            function j(t, e) {
                return {
                    type: b,
                    id: t,
                    project: e
                }
            }

            function w(t, e, n, i, s) {
                return void 0 === e && (e = P), void 0 === i && (i = null), void 0 === s && (s = {}),
                    function(l) {
                        return l({
                            type: g,
                            projectId: t
                        }), Object(u.d)(t, e, n, Object(r.a)({
                            entryChannel: i
                        }, s)).then(function() {
                            return l(Object(c.e)(t))
                        }).catch(function(e) {
                            var n = e.errors[0] ? e.errors[0] : "Sorry, you cannot follow this project";
                            l(Object(h.pushAlert)(function() {
                                return o.a.createElement(a.a, {
                                    title: n,
                                    color: "yellow"
                                })
                            })), l({
                                type: v,
                                projectId: t
                            })
                        })
                    }
            }

            function C(t, e, n) {
                return void 0 === n && (n = null),
                    function(r) {
                        return r({
                            type: v,
                            projectId: t
                        }), Object(u.l)(t, e, n).then(function() {
                            return r(Object(c.e)(t))
                        }).catch(function() {
                            return r({
                                type: g,
                                projectId: t
                            })
                        })
                    }
            }

            function R(t) {
                return {
                    type: y,
                    projects: t
                }
            }

            function T(t, e, n) {
                return Array.isArray(t) || (t = [t]),
                    function(r) {
                        return new Promise(function(i, o) {
                            r({
                                type: I,
                                targetAccountIds: t
                            }), Object(u.g)(t, e, n).then(function(t) {
                                return i(t)
                            }).catch(function(e) {
                                r({
                                    type: O,
                                    targetAccountIds: t
                                }), o(e)
                            })
                        })
                    }
            }

            function L(t, e, n, r) {
                return function(i) {
                    (function(t, e, n, r) {
                        return Object(f.default)(Object(p.a)(m(), t), {
                            method: "POST",
                            query: {
                                projectId: t,
                                methodKeys: e,
                                context: n,
                                viewIds: r
                            }
                        }).then(d()("result"))
                    })(t, e, n, r).then(function(e) {
                        i(j(t, e.project))
                    }).catch(function(t) {
                        var e = t.errors[0] ? t.errors[0] : "An unexpected error occurred.";
                        i(Object(h.pushAlert)(function() {
                            return o.a.createElement(a.a, {
                                title: e,
                                color: "yellow"
                            })
                        }))
                    })
                }
            }
        },
        387: function(t, e, n) {
            "use strict";
            var r = n(11),
                i = n(1),
                o = n(19),
                a = n(0),
                u = n.n(a),
                c = n(354),
                s = n(240),
                l = n(179),
                d = function(t) {
                    var e = t.input,
                        n = t.helpMessage,
                        r = t.helpLabel,
                        a = t.errorReporting,
                        c = t.label,
                        d = t.layout,
                        f = t.gutter,
                        p = t.children,
                        m = t.meta,
                        h = m.touched,
                        b = m.error,
                        g = m.invalid,
                        v = Object(o.a)(t, ["input", "helpMessage", "helpLabel", "errorReporting", "label", "layout", "gutter", "children", "meta"]),
                        y = function(t) {
                            e.onChange(t), e.onBlur(t)
                        };
                    return u.a.createElement("div", null, c && u.a.createElement(s.a, {
                        status: h && g ? "invalid" : "",
                        errorMessage: b,
                        errorReporting: a,
                        helpMessage: n,
                        helpLabel: r
                    }, c), u.a.createElement(l.a, {
                        layout: d,
                        gutter: f
                    }, u.a.Children.map(p, function(t) {
                        return u.a.createElement(l.a.Item, null, u.a.cloneElement(t, Object(i.a)({}, e, v, {
                            value: t.props.value,
                            checked: (n = t.props.value, e.value === n),
                            onChange: y
                        })));
                        var n
                    })))
                },
                f = function(t) {
                    return u.a.createElement(c.a, Object(r.a)({}, t, {
                        component: d
                    }))
                };
            f.defaultProps = {
                layout: "inline",
                gutter: "s"
            }, e.a = f
        },
        389: function(t, e, n) {
            "use strict";
            var r = n(11),
                i = (n(2), n(0)),
                o = n.n(i),
                a = n(18),
                u = n(123),
                c = n(34),
                s = n(124),
                l = n(572);
            e.a = Object(a.a)(function() {
                return Object(c.a)(Object(s.b)(function(t, e) {
                    return e.accountId
                }), function(t) {
                    return {
                        accountURL: t.accountURL,
                        fullName: t.fullName
                    }
                })
            })(function(t) {
                var e = t.accountURL,
                    n = t.fullName,
                    i = t.theme,
                    a = t.color,
                    c = t.className,
                    s = t.iepl,
                    d = t.bold,
                    f = function() {
                        return d ? o.a.createElement("b", null, n) : n
                    };
                if (e && !s) return o.a.createElement(u.a, Object(r.a)({
                    theme: i,
                    color: a,
                    className: c
                }, {
                    href: e
                }), f());
                if (e) {
                    var p, m = Object(l.a)(s);
                    return p = s ? e + m : e, o.a.createElement(u.a, Object(r.a)({
                        theme: i,
                        color: a,
                        className: c
                    }, {
                        href: p
                    }), f())
                }
                return o.a.createElement("span", null, n)
            })
        },
        39: function(t, e, n) {
            "use strict";
            var r = n(947);
            n.d(e, "a", function() {
                return r.a
            })
        },
        399: function(t, e, n) {
            "use strict";
            var r = n(16);
            e.a = Object(r.compose)(Object(r.withState)("isModalOpen", "setModalOpen", function(t) {
                return t.isModalOpen
            }), Object(r.withHandlers)({
                handleModalClose: function(t) {
                    var e = t.isModalOpen,
                        n = t.setModalOpen,
                        r = t.onModalClose;
                    return function() {
                        e && (n(!1), "function" == typeof r && r())
                    }
                },
                handleModalOpen: function(t) {
                    var e = t.isModalOpen,
                        n = t.setModalOpen,
                        r = t.onModalOpen;
                    return function() {
                        e || (n(!0), "function" == typeof r && r())
                    }
                }
            }), Object(r.defaultProps)({
                isModalOpen: !1
            }))
        },
        40: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return s
            }), n.d(e, "g", function() {
                return d
            }), n.d(e, "d", function() {
                return f
            }), n.d(e, "b", function() {
                return p
            }), n.d(e, "c", function() {
                return m
            }), n.d(e, "h", function() {
                return h
            }), n.d(e, "e", function() {
                return b
            }), n.d(e, "f", function() {
                return g
            }), n.d(e, "o", function() {
                return v
            }), n.d(e, "i", function() {
                return y
            }), n.d(e, "n", function() {
                return I
            }), n.d(e, "k", function() {
                return O
            }), n.d(e, "l", function() {
                return E
            }), n.d(e, "j", function() {
                return A
            }), n.d(e, "m", function() {
                return P
            }), n.d(e, "p", function() {
                return S
            });
            var r = n(1),
                i = n(7),
                o = n(114),
                a = n(71),
                u = n(6),
                c = Object(u.j)("converseMessages"),
                s = c("ACTION_ADD_MESSAGE"),
                l = c("ACTION_ADD_MESSAGE_DRAFT"),
                d = c("ACTION_UPDATE_MESSAGE"),
                f = c("ACTION_DELETE_MESSAGE"),
                p = c("ACTION_ADD_MESSAGE_REPLY"),
                m = c("ACTION_COMPOSE_MESSAGE"),
                h = c("ACTION_UPDATE_MESSAGE_REPLY"),
                b = c("ACTION_DELETE_MESSAGE_REPLY"),
                g = {
                    NEW: "NEW",
                    SUCCESS: "SUCCESS",
                    ERROR: "ERROR"
                };

            function v(t, e, n) {
                return {
                    type: m,
                    payload: {
                        rootId: t,
                        parentId: e,
                        highlight: n
                    }
                }
            }

            function y(t, e, n, o) {
                return function(u) {
                    return u({
                        type: s,
                        payload: {
                            message: t,
                            context: e
                        },
                        meta: {
                            status: g.NEW
                        }
                    }), Object(a.e)(t, e, n, o).then(function(n) {
                        u(v()), u(Object(i.b)(n.state));
                        var o = Object(r.a)({}, t, {
                            id: n.messageId
                        });
                        return u({
                            type: s,
                            payload: {
                                message: o,
                                context: e
                            },
                            meta: {
                                status: g.SUCCESS
                            }
                        }), {
                            message: o,
                            highlightUrl: n.highlightUrl,
                            messageUrl: n.messageUrl
                        }
                    })
                }
            }

            function I(t, e, n) {
                var r = t.messageId,
                    o = t.replyTo,
                    u = t.title,
                    c = t.body,
                    s = t.struct,
                    l = t.linkIds,
                    f = t.files,
                    p = t.contributors;
                return function(t) {
                    return Object(a.g)({
                        messageId: r,
                        title: u,
                        body: c,
                        structData: s,
                        linkIds: l,
                        files: f,
                        contributors: p
                    }, e, n).then(function(e) {
                        return t(Object(i.b)(e.state)), t({
                            type: o ? h : d,
                            payload: {
                                message: e.state.converseMessages.messages[e.messageId],
                                replyTo: o,
                                oldMessageId: e.oldMessageId
                            },
                            meta: {
                                status: g.SUCCESS
                            }
                        }), {
                            highlightUrl: e.highlightUrl
                        }
                    })
                }
            }

            function O(t, e) {
                return function(n) {
                    return Object(a.c)(t, e).then(function(t) {
                        return n(Object(i.b)(t.state)), n({
                            type: l,
                            payload: {
                                message: t.state.converseMessages.messages[t.draftId]
                            },
                            meta: {
                                status: g.SUCCESS
                            }
                        }), {
                            draftId: t.draftId
                        }
                    })
                }
            }

            function E(t, e) {
                return function(n) {
                    return n({
                        type: f,
                        payload: {
                            message: t,
                            context: e
                        },
                        meta: {
                            status: g.NEW
                        }
                    }), Object(a.a)(t.id, e).then(function() {
                        n({
                            type: f,
                            payload: {
                                message: t,
                                context: e
                            },
                            meta: {
                                status: g.SUCCESS
                            }
                        })
                    })
                }
            }

            function A(t, e, n, o) {
                return void 0 === o && (o = []),
                    function(u) {
                        return u({
                            type: p,
                            payload: {
                                message: t,
                                context: e
                            },
                            meta: {
                                status: g.NEW
                            }
                        }), Object(a.f)(t, e, n, o).then(function(n) {
                            return u(Object(i.b)(n.state)), u({
                                type: p,
                                payload: {
                                    message: Object(r.a)({}, t, {
                                        id: n.messageId
                                    }),
                                    context: e
                                },
                                meta: {
                                    status: g.SUCCESS
                                }
                            }), n
                        })
                    }
            }

            function P(t, e) {
                return function(n) {
                    return n({
                        type: b,
                        payload: {
                            message: t,
                            context: e
                        },
                        meta: {
                            status: g.NEW
                        }
                    }), Object(a.b)(t.id, e).then(function() {
                        n({
                            type: b,
                            payload: {
                                message: t,
                                context: e
                            },
                            meta: {
                                status: g.SUCCESS
                            }
                        }), Object(o.c)("Comment deleted", o.a)
                    }, function() {
                        return Object(o.c)("Comment could not be deleted")
                    })
                }
            }

            function S(t) {
                return Object(i.b)({
                    converseMessages: t
                })
            }
        },
        400: function(t, e, n) {
            "use strict";
            n.d(e, "b", function() {
                return a
            }), n.d(e, "e", function() {
                return u
            }), n.d(e, "c", function() {
                return c
            }), n.d(e, "d", function() {
                return s
            }), n.d(e, "a", function() {
                return l
            });
            var r = n(17),
                i = n.n(r),
                o = n(124),
                a = function(t) {
                    return t.accountsGlobalCurrentAccount.id
                },
                u = function(t) {
                    return Object(o.c)(t, {
                        accountId: a(t)
                    })
                };

            function c(t) {
                return t.accountsGlobalCurrentAccount.isAccountLoggedIn
            }

            function s(t) {
                return t.accountsGlobalCurrentAccount.isScientistLoggedIn
            }
            var l = function(t) {
                return i()(["settings", "allowPublicationDownloadDataUsage"], t.accountsGlobalCurrentAccount, !0)
            }
        },
        401: function(t, e, n) {
            "use strict";
            var r = n(6);

            function i(t, e, n) {
                var i = t[e];
                if (null != i) {
                    var o, a = !1;
                    if ("string" == typeof i || i instanceof URL)
                        if ("" === i) a = !0;
                        else {
                            try {
                                var u = new URL(i, location.protocol + "//" + location.host);
                                Object(r.h)(u.toString()) || (a = !0)
                            } catch (t) {
                                a = !0
                            }
                        }
                    else a = !0;
                    return a && (o = new TypeError("Invalid `" + e + "` of type `" + typeof i + "` supplied to `" + n + "`, expected types non-empty string or URL.")), o
                }
            }
            i.isRequired = function(t, e, n) {
                return void 0 === t[e] || null === t[e] ? new TypeError("`" + e + "` is marked as required in `" + n + "`") : i(t, e, n)
            }
        },
        404: function(t, e, n) {
            "use strict";
            (function(t) {
                n.d(e, "a", function() {
                    return N
                });
                var r = n(11),
                    i = n(46),
                    o = n(5),
                    a = (n(2), n(0)),
                    u = n.n(a),
                    c = n(940),
                    s = n(34),
                    l = n(28),
                    d = n.n(l),
                    f = n(218),
                    p = n(18),
                    m = n(56),
                    h = n.n(m),
                    b = n(1139),
                    g = n(1140),
                    v = n(1029),
                    y = n(209),
                    I = n.n(y),
                    O = n(880),
                    E = n(1146),
                    A = n(156),
                    P = n(575),
                    S = n(22),
                    j = n.n(S),
                    w = n(95),
                    C = n(906),
                    R = (n(916), n(599)),
                    T = n(656),
                    L = n(189),
                    D = n(37),
                    k = n(27),
                    _ = n(13),
                    F = n.n(_),
                    x = n(69),
                    N = (n(860), 70),
                    M = new j.a({
                        name: "converse-editor"
                    }),
                    U = function(e) {
                        function a(t) {
                            var n;
                            return (n = e.call(this, t) || this).handleRgMentions = function(t, e) {
                                t && 0 !== t.length && t.forEach(function(t) {
                                    n.processUrl(t.url, P.e, null, e)
                                })
                            }, n.state = {
                                editorState: n.getEditorState(t),
                                showRichTextOptions: !!t.showRichTextOptionsOnMount,
                                isEditorFocused: !1,
                                expanded: !1,
                                externalUrlKey: null,
                                editorStatus: ""
                            }, n.editorKey = Object(R.a)("converse-editor-key", "ce"), n.handleToggleBlock = function(t) {
                                return n.handleToggleBlockControls(t)
                            }, n.handleToggleInline = function(t) {
                                return n.handleToggleInlineControls(t)
                            }, n.handleMentionControlsClick = n.handleMentionControlsClick.bind(Object(i.a)(n)), n.handleReferenceControlsClick = n.handleReferenceControlsClick.bind(Object(i.a)(n)), n.onChange = function(t) {
                                return n.handleChange(t)
                            }, n.handleClick = n.handleClick.bind(Object(i.a)(n)), n.handleFocus = n.handleFocus.bind(Object(i.a)(n)), n.handleBlur = n.handleBlur.bind(Object(i.a)(n)), n.handlePastedText = n.handlePastedText.bind(Object(i.a)(n)), n.handleUpArrow = n.handleUpArrow.bind(Object(i.a)(n)), n.handleDownArrow = n.handleDownArrow.bind(Object(i.a)(n)), n.handleEnter = n.handleEnter.bind(Object(i.a)(n)), n.handleEscape = n.handleEscape.bind(Object(i.a)(n)), n.handleTab = n.handleTab.bind(Object(i.a)(n)), n.handleReplaceSelectionWithEntity = n.handleReplaceSelectionWithEntity.bind(Object(i.a)(n)), n.subscribeToEditorKey = n.subscribeToEditorKey.bind(Object(i.a)(n)), n.unsubscribeFromEditorKey = n.unsubscribeFromEditorKey.bind(Object(i.a)(n)), n.keyHandlers = {
                                up: null,
                                down: null,
                                enter: null,
                                escape: null,
                                tab: null
                            }, t.editorRef && t.editorRef(Object(i.a)(n)), n
                        }
                        Object(o.a)(a, e);
                        var s = a.prototype;
                        return s.componentDidMount = function() {
                            var t = "only screen and (max-width: " + (parseInt(c.a.getBreakpoint("m"), 10) - 1) + "px)";
                            this.isMobileDevice = window.matchMedia(t).matches, this.props.focusOnMount && (Object(x.findDOMNode)(this).scrollIntoView(!0), this.focus()), this.propagateChange(!!this.props.prefilledMentions), this.handleRgMentions(this.props.prefilledMentions, this.props.postPrefillMentionsCallback)
                        }, s.UNSAFE_componentWillReceiveProps = function(t) {
                            t.editor.undoExternalUrlConversion !== this.props.editor.undoExternalUrlConversion && !0 === t.editor.undoExternalUrlConversion && this.undoExternalUrlToRgUrlConversion()
                        }, s.handleScoreGoal = function() {
                            var t = F()(this.props, "milestones.clickRichText", null);
                            t && Object(k.a)(t)
                        }, s.handleToggleBlockControls = function(t) {
                            this.handleScoreGoal(), this.handleChange(f.RichUtils.toggleBlockType(this.state.editorState, t))
                        }, s.handleToggleInlineControls = function(t) {
                            this.handleScoreGoal(), this.handleChange(f.RichUtils.toggleInlineStyle(this.state.editorState, t))
                        }, s.handleMentionControlsClick = function(t) {
                            var e = Object(P.h)(this.state.editorState, t);
                            this.handleChange(e, !0)
                        }, s.handleReferenceControlsClick = function() {
                            var e = this.props,
                                r = e.dispatch,
                                i = e.referenceResearchDialogUrl,
                                o = Object(L.a)(i).getQueryAsObject();
                            r(Object(D.mountAsyncModal)("projects.ProjectUpdateAddReferenceResearch.html", o, {
                                onResolve: this.handleRgMentions
                            }, function() {
                                return Promise.all([n.e(0), n.e(3), n.e(438), n.e(13), n.e(144)]).then(n.bind(null, 2051))
                            }, t.hot && !1))
                        }, s.handleFocus = function() {
                            this.setState({
                                isEditorFocused: !0,
                                expanded: !0
                            }), this.props.onFocus && this.props.onFocus()
                        }, s.handleBlur = function() {
                            this.setState({
                                isEditorFocused: !1
                            }), this.props.onBlur && this.props.onBlur()
                        }, s.handleUpArrow = function(t) {
                            this.keyHandlers.up && (t.preventDefault(), this.keyHandlers.up(t))
                        }, s.handleDownArrow = function(t) {
                            this.keyHandlers.down && (t.preventDefault(), this.keyHandlers.down(t))
                        }, s.handleEscape = function(t) {
                            this.keyHandlers.escape && (t.preventDefault(), this.keyHandlers.escape(t))
                        }, s.handleTab = function(t) {
                            this.keyHandlers.tab && (t.preventDefault(), this.keyHandlers.tab(t))
                        }, s.handleEnter = function(t) {
                            return this.keyHandlers.enter ? (this.keyHandlers.enter(t), "handled") : "not-handled"
                        }, s.handleClick = function() {
                            this.setRenderRichTextOptions()
                        }, s.handleChange = function(t, e, n) {
                            var r = this;
                            void 0 === e && (e = !1), this.setState({
                                editorState: t
                            }, function() {
                                r.propagateChange(), e && r.focus(), n && n()
                            })
                        }, s.handleReplaceSelectionWithEntity = function(t, e, n) {
                            var r = this,
                                i = Object(P.k)(this.state.editorState, t, e, n);
                            this.setState({
                                editorState: i
                            }, function() {
                                r.focus()
                            })
                        }, s.subscribeToEditorKey = function(t, e) {
                            d()(this.keyHandlers.hasOwnProperty(t), "Unknown key: " + t + ". Possible values: " + Object.keys(this.keyHandlers)), this.keyHandlers[t] = e
                        }, s.unsubscribeFromEditorKey = function(t, e) {
                            d()(this.keyHandlers.hasOwnProperty(t), "Unknown key: " + t + ". Possible values: " + Object.keys(this.keyHandlers)), this.keyHandlers[t] = e
                        }, s.handlePastedText = function(t) {
                            Object(P.i)(t) && this.processUrl(t, P.f)
                        }, s.processUrl = function(t, e, n, r) {
                            var i = this;
                            void 0 === n && (n = null), this.props.dispatch(Object(A.c)(t)).then(function(o) {
                                if (o) {
                                    var a, u, c, s = i.state.editorState,
                                        l = s.getCurrentContent();
                                    switch (o.type) {
                                        case "publication":
                                            a = l.createEntity("PUBLICATION", "IMMUTABLE", {
                                                publicationUid: o.publicationUid,
                                                publicationTitle: o.publicationTitle,
                                                externalUrl: o.externalUrl
                                            }).getLastCreatedEntityKey(), u = o.publicationTitle.length > N ? o.publicationTitle.substring(0, N - 10).concat("...") : o.publicationTitle, null !== o.externalUrl && i.props.dispatch(Object(w.f)(a, o.externalUrl));
                                            break;
                                        case "account":
                                            a = l.createEntity("ACCOUNT", "IMMUTABLE", {
                                                accountId: o.accountId
                                            }).getLastCreatedEntityKey(), u = o.accountFullName;
                                            break;
                                        case "unknown":
                                            return
                                    }(c = e === P.f ? Object(P.l)(s, t, a, u) : Object(P.g)(s, a, u)) && (n && (c = Object(P.h)(c, " " + n)), i.handleChange(c, !0, r))
                                }
                            })
                        }, s.undoExternalUrlToRgUrlConversion = function() {
                            var t = this.state.editorState,
                                e = this.props.editor,
                                n = e.externalUrlKey,
                                r = e.externalUrl,
                                i = Object(P.j)(t, n, r);
                            this.handleChange(i, !0), this.props.dispatch(Object(w.h)())
                        }, s.focus = function() {
                            this.editorRef.focus(), this.setRenderRichTextOptions()
                        }, s.clear = function() {
                            this.handleChange(this.getEditorState(this.props))
                        }, s.propagateChange = function(t) {
                            void 0 === t && (t = !0), this.props.onChange({
                                text: this.getCurrentContentState().getPlainText().trim(),
                                struct: Object(f.convertToRaw)(this.getCurrentContentState())
                            }, t)
                        }, s.getEditorState = function(t) {
                            var e, n = new f.CompositeDecorator([t.mentionDecorator]);
                            return e = t.structuredData || t.text ? t.structuredData ? Object(f.convertFromRaw)(t.structuredData) : Object(T.a)(t.text) : Object(T.a)(), f.EditorState.createWithContent(e, n)
                        }, s.getCurrentContentState = function() {
                            return this.state.editorState.getCurrentContent()
                        }, s.setContent = function(t) {
                            this.handleChange(f.EditorState.createWithContent(f.ContentState.createFromText(t)))
                        }, s.setRenderRichTextOptions = function() {
                            this.state.showRichTextOptions || this.setState({
                                showRichTextOptions: !0
                            })
                        }, s.renderRichTextControls = function() {
                            if (this.props.hideRichTextControls) return null;
                            if (!this.state.showRichTextOptions) return null;
                            var t = [u.a.createElement(v.b, Object(r.a)({
                                key: "inline-controls"
                            }, M("inline-controls"), {
                                editorState: this.state.editorState,
                                onToggle: this.handleToggleInline
                            })), u.a.createElement(b.a, Object(r.a)({
                                key: "block-controls"
                            }, M("block-controls"), {
                                editorState: this.state.editorState,
                                showReferenceResearch: !h()(this.props.referenceResearchDialogUrl),
                                onToggle: this.handleToggleBlock,
                                onMentionClick: this.handleMentionControlsClick,
                                onReferenceClick: this.handleReferenceControlsClick
                            }))];
                            return this.props.useMentionControls && t.push(u.a.createElement(g.a, Object(r.a)({
                                key: "mention-controls"
                            }, M("mention-controls"), {
                                showReferenceResearch: !h()(this.props.referenceResearchDialogUrl),
                                onMentionClick: this.handleMentionControlsClick,
                                onReferenceClick: this.handleReferenceControlsClick,
                                isMobileDevice: this.isMobileDevice,
                                hideLabels: this.props.hideControlsLabels
                            }))), u.a.createElement("div", M("controls"), t)
                        }, s.render = function() {
                            var t, e = this,
                                n = this.state.editorState,
                                i = n.getCurrentContent(),
                                o = i.hasText(),
                                a = "unstyled" !== i.getBlockMap().first().getType(),
                                c = {
                                    "hide-placeholder": !o && a,
                                    "is-focused": this.state.isEditorFocused && this.props.blockModifier,
                                    expanded: this.state.expanded,
                                    "has-error": this.props.hasError
                                },
                                s = ((t = {})[this.props.blockModifier] = this.props.blockModifier, t["controls-under"] = this.props.showRichTextControlsUnderInput, t),
                                l = [u.a.createElement(f.Editor, {
                                    key: "editor",
                                    editorKey: this.editorKey,
                                    editorState: n,
                                    onChange: this.onChange,
                                    placeholder: this.props.placeholder,
                                    ref: function(t) {
                                        e.editorRef = t
                                    },
                                    spellCheck: !0,
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    handlePastedText: this.handlePastedText,
                                    onUpArrow: this.handleUpArrow,
                                    onDownArrow: this.handleDownArrow,
                                    onEscape: this.handleEscape,
                                    onTab: this.handleTab,
                                    handleReturn: this.handleEnter,
                                    customStyleMap: v.a
                                })];
                            return this.props.useHotKeyManager && l.push(u.a.createElement(E.a, {
                                key: "hotkey-manager",
                                editorRef: this.editorRef,
                                editorState: n,
                                replaceSelectionWithEntity: this.handleReplaceSelectionWithEntity,
                                subscribeToEditorKey: this.subscribeToEditorKey,
                                unsubscribeFromEditorKey: this.unsubscribeFromEditorKey,
                                rootId: this.props.rootId
                            })), u.a.createElement("div", Object(r.a)({}, M("", s), {
                                onClick: this.handleClick
                            }), u.a.createElement(I.a, {
                                transitionName: "converse-editor__controls",
                                transitionEnterTimeout: 500,
                                transitionLeaveTimeout: 500
                            }, this.renderRichTextControls()), u.a.createElement("div", M("input", c), l))
                        }, a
                    }(a.Component);
                U.displayName = "ConverseEditor", U.defaultProps = {
                    focusOnMount: !1,
                    hideRichTextControls: !1,
                    showRichTextOptionsOnMount: !1,
                    useMentionControls: !0,
                    useHotKeyManager: !0,
                    hideControlsLabels: !1,
                    showRichTextControlsUnderInput: !1,
                    mentionDecorator: O.a
                };
                var q = Object(s.a)([C.a], function(t) {
                    return {
                        editor: t.toJS()
                    }
                });
                e.b = Object(p.a)(q, null, null, {
                    withRef: !0
                })(U)
            }).call(this, n(140)(t))
        },
        407: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return r
            }), n.d(e, "b", function() {
                return a
            });
            n(28);
            var r = {
                    NULL: "null",
                    SAVED: "saved",
                    NEW: "new",
                    ERROR: "error"
                },
                i = "Please upload a file",
                o = "Unknown error";

            function a(t, e, n) {
                var a = e.allowEmpty,
                    u = e.emptyMessage,
                    c = e.errorMessage;
                if (!t) return a ? null : u || i;
                var s = t.state,
                    l = t.errors;
                switch (s) {
                    case r.NULL:
                        return a ? null : u || i;
                    case r.SAVED:
                    case r.NEW:
                        return null;
                    case r.ERROR:
                        return l && l.join(" ") || c || o;
                    default:
                        return "Internal error"
                }
            }
        },
        408: function(t, e, n) {
            "use strict";
            var r = n(11),
                i = n(1),
                o = n(19),
                a = (n(2), n(0)),
                u = n.n(a),
                c = n(240),
                s = n(354),
                l = function(t) {
                    var e = t.hasLabel,
                        n = t.input,
                        r = t.helpMessage,
                        a = t.helpLabel,
                        s = t.errorReporting,
                        l = t.label,
                        d = t.children,
                        f = t.meta,
                        p = f.touched,
                        m = f.error,
                        h = f.invalid,
                        b = Object(o.a)(t, ["hasLabel", "input", "helpMessage", "helpLabel", "errorReporting", "label", "children", "meta"]),
                        g = 0,
                        v = function(t) {
                            return t + (g++ > 1 ? "_" + (g - 1) : "")
                        };
                    return u.a.createElement("div", null, e ? u.a.createElement(c.a, {
                        status: p && h ? "invalid" : "",
                        errorMessage: m,
                        errorReporting: s,
                        helpMessage: r,
                        helpLabel: a,
                        htmlFor: v(n.name)
                    }, l) : null, u.a.cloneElement(u.a.Children.only(d), Object(i.a)({}, n, b, {
                        id: v(n.name),
                        checked: !!n.value,
                        onChange: function(t) {
                            var e = !!t.target.checked;
                            n.onChange(e), n.onBlur(e)
                        },
                        onBlur: function() {
                            n.onBlur(n.value)
                        }
                    })))
                },
                d = function(t) {
                    return u.a.createElement(s.a, Object(r.a)({}, t, {
                        component: l
                    }))
                };
            d.defaultProps = {
                hasLabel: !0
            }, e.a = d
        },
        409: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return c
            });
            var r = n(0),
                i = n.n(r),
                o = (n(2), n(1977)),
                a = n(29),
                u = n(123),
                c = "By uploading this file you confirm that you hold the necessary copyright, license, permission or other rights necessary to publish the work, and that it does not violate the personal rights of another person. You also ask ResearchGate to extract from the file any structured data and figures (including, without limitation, data, tables, graphs, images, illustrations) and, if public, display them on your profile as separate items and/or in an enriched viewing format, including an enriched version of the file when downloaded. If you do not wish to have the file enriched on download, you may turn it off in Settings.",
                s = function(t) {
                    var e = t.target,
                        n = t.children;
                    return i.a.createElement(o.a, {
                        scope: "local",
                        color: "black",
                        target: e
                    }, n)
                };
            s.defaultProps = {
                target: i.a.createElement(a.a, {
                    size: "s",
                    color: "grey-400",
                    className: "legal"
                }, "View ", i.a.createElement(u.a, null, "conditions"), " for sharing content"),
                children: "By uploading and sharing this content you confirm you have any necessary rights to do so."
            }, e.b = s
        },
        41: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return a
            }), n.d(e, "b", function() {
                return u
            }), n.d(e, "c", function() {
                return c
            }), n.d(e, "d", function() {
                return s
            }), n.d(e, "e", function() {
                return l
            });
            var r = n(19),
                i = n(3),
                o = n(7),
                a = "LOAD_WIDGET",
                u = "REMOVE_WIDGET",
                c = {
                    LOADING: "LOADING",
                    FINISHED: "FINISHED",
                    ERROR: "ERROR"
                };

            function s(t, e, n) {
                return function(u) {
                    var s = t.route,
                        l = t.method && "string" == typeof t.method ? t.method : "GET"; - 1 !== s.indexOf("?") || s.endsWith(".html") || (s += ".html");
                    var d = {
                        method: l
                    };
                    t.params && (d["POST" === l ? "body" : "query"] = t.params);
                    return u({
                        type: a,
                        ref: t.ref,
                        status: c.LOADING
                    }), Object(i.default)(s, d).then(function(i) {
                        var s = i.result,
                            l = s.state,
                            d = Object(r.a)(s, ["state"]);
                        e.addWidgetTree(d), e.unregisterWidgetLoading(t.ref);
                        var f = d.id;
                        u(Object(o.b)(l)), n(f, function() {
                            u({
                                type: a,
                                id: f,
                                ref: t.ref,
                                status: c.FINISHED
                            })
                        })
                    }, function(n) {
                        e.unregisterWidgetLoading(t.ref), u({
                            type: a,
                            ref: t.ref,
                            status: c.ERROR
                        })
                    })
                }
            }

            function l(t, e) {
                var n = t.widgetId;
                return e.removeWidgetTree(n), {
                    type: u,
                    ref: t.ref
                }
            }
        },
        411: function(t, e, n) {
            "use strict";
            var r = n(1324);
            n.d(e, "a", function() {
                return r.a
            })
        },
        414: function(t, e, n) {
            "use strict";
            var r = n(11),
                i = n(1),
                o = n(19),
                a = n(0),
                u = n.n(a),
                c = (n(2), n(240)),
                s = n(354),
                l = function(t) {
                    var e, n = t.valueParamName,
                        r = t.input,
                        a = t.helpMessage,
                        s = t.helpLabel,
                        l = t.errorReporting,
                        d = t.label,
                        f = t.children,
                        p = t.meta,
                        m = p.touched,
                        h = p.error,
                        b = p.invalid,
                        g = Object(o.a)(t, ["valueParamName", "input", "helpMessage", "helpLabel", "errorReporting", "label", "children", "meta"]),
                        v = 0,
                        y = function(t) {
                            return t + (v++ > 1 ? "_" + (v - 1) : "")
                        };
                    return u.a.createElement("div", null, u.a.createElement(c.a, {
                        status: m && b ? "invalid" : "",
                        errorMessage: h,
                        errorReporting: l,
                        helpMessage: a,
                        helpLabel: s,
                        htmlFor: y(r.name)
                    }, d), u.a.cloneElement(u.a.Children.only(f), Object(i.a)({}, r, g, ((e = {
                        status: m && b ? "invalid" : ""
                    })[n] = r.value, e.id = y(r.name), e))))
                },
                d = function(t) {
                    return u.a.createElement(s.a, Object(r.a)({}, t, {
                        component: l,
                        onBlur: function(e) {
                            t.preventDefaultEventOnBlur && e.preventDefault()
                        }
                    }))
                };
            d.defaultProps = {
                valueParamName: "value",
                preventDefaultEventOnBlur: !0
            }, e.a = d
        },
        415: function(t, e, n) {
            "use strict";
            var r = n(11),
                i = n(19),
                o = n(0),
                a = n.n(o),
                u = n(354);
            e.a = function(t) {
                var e = t.value,
                    n = Object(i.a)(t, ["value"]);
                return a.a.createElement(u.a, Object(r.a)({}, n, {
                    component: function(t) {
                        return t.input.onChange(e), null
                    }
                }))
            }
        },
        418: function(t, e, n) {
            "use strict";
            var r = n(11),
                i = n(1),
                o = n(19),
                a = (n(2), n(0)),
                u = n.n(a),
                c = n(94),
                s = n.n(c),
                l = n(240),
                d = n(354),
                f = function(t) {
                    var e = t.dateFormat,
                        n = t.input,
                        r = t.helpMessage,
                        a = t.helpLabel,
                        c = t.errorReporting,
                        d = t.label,
                        f = t.children,
                        p = t.meta,
                        m = p.touched,
                        h = p.error,
                        b = p.invalid,
                        g = Object(o.a)(t, ["dateFormat", "input", "helpMessage", "helpLabel", "errorReporting", "label", "children", "meta"]),
                        v = 0,
                        y = function(t) {
                            return t + (v++ > 1 ? "_" + (v - 1) : "")
                        },
                        I = n.value ? s()(n.value) : s()();
                    return u.a.createElement("div", null, u.a.createElement(l.a, {
                        status: m && b ? "invalid" : "",
                        errorMessage: h,
                        errorReporting: c,
                        helpMessage: r,
                        helpLabel: a,
                        htmlFor: y(n.name)
                    }, d), u.a.cloneElement(u.a.Children.only(f), Object(i.a)({}, n, g, {
                        id: y(n.name),
                        status: m && b ? "invalid" : "",
                        onChange: function(t) {
                            n.onChange(t.format(e))
                        },
                        selected: I,
                        dateFormat: e
                    })))
                };
            e.a = function(t) {
                return u.a.createElement(d.a, Object(r.a)({}, t, {
                    component: f
                }))
            }
        },
        419: function(t, e, n) {
            "use strict";
            var r = n(5),
                i = (n(2), n(0)),
                o = n.n(i),
                a = n(18),
                u = n(145),
                c = n.n(u),
                s = n(115),
                l = n(620),
                d = n(16),
                f = function(t) {
                    var e = t.progress;
                    return o.a.createElement("div", null, o.a.createElement("div", {
                        className: "item-upload-progress-bar"
                    }, o.a.createElement("div", {
                        style: {
                            width: e + "%"
                        }
                    })), o.a.createElement("span", null, Math.floor(e), "%"))
                },
                p = Object(d.compose)(Object(d.withProps)(function(t) {
                    return {
                        progress: 100 * t.file.progress || 0
                    }
                }), Object(d.branch)(function(t) {
                    var e = t.progress;
                    return 0 === e || 100 === e
                }, d.renderNothing, Object(d.renderComponent)(f)))(f),
                m = n(763),
                h = n(21),
                b = n(30),
                g = n(1977),
                v = n(766),
                y = n(854),
                I = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }
                    return Object(r.a)(e, t), e.prototype.render = function() {
                        var t = this.props,
                            e = t.remove,
                            n = t.uploadState.fileList,
                            r = c()(this.props.className, {
                                "research-update-item": !0
                            });
                        return o.a.createElement("div", {
                            className: r
                        }, n ? n.map(function(t, n) {
                            var r = t.nativeFile,
                                i = t.response,
                                a = [],
                                u = null;
                            if (i && i.success) u = i.result.id, t.status === h.a.IDLE && a.push(o.a.createElement("span", {
                                className: "ajax-loading-small"
                            })), i.result.image && a.push(o.a.createElement(v.a, {
                                downloadUrl: i.result.url,
                                imageUrl: i.result.image.large
                            }, o.a.createElement(b.a, {
                                type: "button",
                                theme: "bare",
                                color: "grey"
                            }, "View"))), i.result.url && a.push(o.a.createElement(b.a, {
                                type: "button",
                                theme: "bare",
                                color: "grey",
                                href: i.result.url
                            }, "Download"));
                            else if (i && !i.success) {
                                var c = i.errors && i.errors.length > 0 ? i.errors[0] : "Error uploading file";
                                a.push(o.a.createElement(g.a, {
                                    color: "black",
                                    target: o.a.createElement(b.a, {
                                        type: "button",
                                        theme: "bare",
                                        color: "yellow"
                                    }, "Upload error")
                                }, c))
                            }
                            return a.push(o.a.createElement(b.a, {
                                type: "button",
                                theme: "bare",
                                color: "grey",
                                onClick: function() {
                                    return e(t)
                                }
                            }, "Remove")), o.a.createElement("div", {
                                key: "attachment-list-item-" + n
                            }, o.a.createElement(l.a, {
                                headline: r.name,
                                subline: o.a.createElement(m.a, {
                                    fileSize: r.size
                                }),
                                actions: a,
                                iconText: Object(y.a)(r.type),
                                isFilePreviewEnabled: !1,
                                isInactive: !1,
                                attachmentFieldName: "fileReference",
                                attachmentId: u
                            }), o.a.createElement(p, {
                                file: t
                            }))
                        }) : null)
                    }, e
                }(i.Component);
            I.displayName = "UploadFileList", I.defaultProps = {
                className: "project-updates-attachment-list"
            };
            e.a = Object(a.a)(function(t, e) {
                return {
                    uploadState: Object(s.a)(e.id, t)
                }
            }, function(t, e) {
                return {
                    remove: function(n) {
                        return t(Object(h.s)(e.id)(n))
                    }
                }
            })(I)
        },
        42: function(t, e, n) {
            "use strict";
            var r = n(19),
                i = n(1),
                o = n(6),
                a = n(3),
                u = n(14),
                c = n(57),
                s = n(33),
                l = "/admin/ads/api/lineitems";

            function d(t, e) {
                return function(t, e) {
                    return Object(a.default)(t, e).then(function(t) {
                        var e = t.result;
                        return Promise.resolve(e)
                    })
                }(l + "/" + t + "/status", {
                    method: "PATCH",
                    body: {
                        status: e
                    }
                })
            }
            var f = n(104),
                p = n(26);
            n.d(e, "h", function() {
                return h
            }), n.d(e, "l", function() {
                return b
            }), n.d(e, "a", function() {
                return g
            }), n.d(e, "k", function() {
                return v
            }), n.d(e, "d", function() {
                return y
            }), n.d(e, "f", function() {
                return I
            }), n.d(e, "e", function() {
                return O
            }), n.d(e, "c", function() {
                return E
            }), n.d(e, "i", function() {
                return A
            }), n.d(e, "j", function() {
                return P
            }), n.d(e, "b", function() {
                return S
            }), n.d(e, "g", function() {
                return j
            }), n.d(e, "t", function() {
                return w
            }), n.d(e, "n", function() {
                return C
            }), n.d(e, "m", function() {
                return R
            }), n.d(e, "s", function() {
                return T
            }), n.d(e, "q", function() {
                return D
            }), n.d(e, "p", function() {
                return k
            }), n.d(e, "o", function() {
                return _
            }), n.d(e, "z", function() {
                return F
            }), n.d(e, "y", function() {
                return x
            }), n.d(e, "w", function() {
                return N
            }), n.d(e, "r", function() {
                return M
            }), n.d(e, "v", function() {
                return U
            }), n.d(e, "x", function() {
                return q
            }), n.d(e, "u", function() {
                return z
            });
            var m = Object(o.j)("adCampaignItems"),
                h = m("REPLACE_STATE"),
                b = m("UPDATE_ITEMS"),
                g = m("ADD_DATA"),
                v = m("UPDATE_ACTIVITY_GROUPS"),
                y = m("CHANGE_DATE_RANGE"),
                I = m("CHANGE_ORDER_ID"),
                O = m("CHANGE_CREATIVE_ID"),
                E = m("CHANGE_LINE_ITEM_ID"),
                A = m("START_LOADING"),
                P = m("STOP_LOADING"),
                S = m("CHANGE_COMPANY_ID"),
                j = m("MODIFY_ITEM_DATA");

            function w(t) {
                var e = t.orderId,
                    n = t.lineItemId,
                    r = t.creativeId,
                    i = t.startDate,
                    o = t.endDate,
                    a = t.breakdown;
                return function(t, u) {
                    var l = Object(s.c)(u()),
                        d = Object(s.r)(u());
                    t({
                        type: A
                    });
                    var f = {
                        campaignId: l,
                        rgType: d,
                        orderId: e,
                        lineItemId: n,
                        creativeId: r,
                        startDate: i,
                        endDate: o,
                        breakdown: a
                    };
                    return Object(c.d)(f).then(function(e) {
                        return L(t, e)
                    })
                }
            }

            function C(t, e) {
                return function(n) {
                    return n({
                        type: y,
                        startDate: t,
                        endDate: e
                    }), n((r = {
                        startDate: t,
                        endDate: e
                    }, function(t, e) {
                        var n = Object(s.i)(e()),
                            o = Object(i.a)({}, n, r),
                            a = o.orderId,
                            u = o.lineItemId,
                            c = o.creativeId,
                            l = o.breakdown;
                        return t(w({
                            orderId: a,
                            lineItemId: u,
                            creativeId: c,
                            startDate: o.startDate,
                            endDate: o.endDate,
                            breakdown: l
                        }))
                    }));
                    var r
                }
            }

            function R(t, e) {
                return function(n, i) {
                    var o = Object(s.i)(i()),
                        a = o.campaignId,
                        u = Object(r.a)(o, ["campaignId"]);
                    return Object(c.b)(a, t, e, u).then(function(t) {
                        return L(n, t)
                    })
                }
            }

            function T(t) {
                return function(e, n) {
                    var i = Object(s.i)(n()),
                        o = i.campaignId,
                        a = Object(r.a)(i, ["campaignId"]);
                    return Object(c.c)(o, t, a).then(function(t) {
                        return L(e, t)
                    })
                }
            }

            function L(t, e) {
                var n = e.contentItems,
                    i = Object(r.a)(e, ["contentItems"]);
                return n && t(Object(f.c)(n)), t({
                    type: h,
                    newStateData: i
                }), t({
                    type: P
                }), Promise.resolve()
            }

            function D() {
                return {
                    type: I,
                    orderId: null
                }
            }

            function k() {
                return {
                    type: E,
                    creativeId: null
                }
            }

            function _(t) {
                return {
                    type: O,
                    lineItemId: t
                }
            }

            function F(t, e) {
                return function(n, r) {
                    var o = Object(s.c)(r()),
                        u = Object(s.d)(r(), {
                            rgKey: t
                        });
                    return n({
                        type: A
                    }), Object(a.default)(u.detailUrl, {
                        method: "PUT",
                        body: Object(i.a)({
                            campaignId: o
                        }, e)
                    }).then(function() {
                        var r;
                        return n(G(((r = {})[t] = Object(i.a)({}, u, e), r))), n({
                            type: P
                        }), Promise.resolve()
                    })
                }
            }

            function x(t, e) {
                return function(n, r) {
                    return n({
                        type: A
                    }), Object(c.i)(t, e).then(function(e) {
                        var o, a = e.result,
                            u = a.salesforceCampaignId,
                            c = a.salesforceUrl,
                            l = Object(s.d)(r(), {
                                rgKey: t
                            });
                        return n(G(((o = {})[t] = Object(i.a)({}, l, {
                            salesforceCampaignId: u,
                            salesforceUrl: c
                        }), o))), n({
                            type: P
                        }), Promise.resolve()
                    })
                }
            }

            function N(t, e) {
                return function(n, r) {
                    return n({
                        type: A
                    }), Object(c.f)(t, e).then(function(e) {
                        var o, a = e.result.activityIds,
                            u = Object(s.d)(r(), {
                                rgKey: t
                            });
                        return n(G(((o = {})[t] = Object(i.a)({}, u, {
                            activityIds: a
                        }), o))), n({
                            type: P
                        }), Promise.resolve()
                    })
                }
            }

            function M(t, e) {
                return function(n, r) {
                    var i = Object(s.j)(r()),
                        o = i.startDate,
                        a = i.endDate;
                    return Object(c.a)(t, o, a, e).then(function(t) {
                        var e = t.result,
                            r = e.activityGroups,
                            i = e.data;
                        return n(G(i)), n(B(r)), Promise.resolve()
                    })
                }
            }

            function U(t, e, n) {
                return function(r) {
                    return Object(c.g)(t, e, n).then(function(t) {
                        return r(B(t.result)), Promise.resolve()
                    })
                }
            }

            function q(t, e, n) {
                return function(r, i) {
                    var o = Object(s.c)(i()),
                        a = Object(s.j)(i()),
                        u = a.startDate,
                        l = a.endDate,
                        d = Object(s.r)(i());
                    r({
                        type: A
                    });
                    var f = {
                        campaignId: o,
                        rgKey: t,
                        creativeIds: e,
                        lineItemIds: n,
                        startDate: u,
                        endDate: l,
                        rgType: d
                    };
                    Object(c.h)(f).then(function(t) {
                        var e, n = t.result;
                        return r({
                            type: P
                        }), r(G(n.data)), r((e = n.items, {
                            type: b,
                            items: e
                        })), Promise.resolve()
                    }).catch(function(t) {
                        return r({
                            type: P
                        }), Promise.reject(t)
                    })
                }
            }

            function G(t) {
                return {
                    type: g,
                    data: t
                }
            }

            function B(t) {
                return {
                    type: v,
                    activityGroups: t
                }
            }

            function z(t) {
                return function(e, n) {
                    var r = new u.a(t, u.b.TYPE_DFPLINEITEM).toString(),
                        o = Object(s.n)(n(), {
                            rgKey: r
                        }),
                        a = Object(s.m)(n(), {
                            rgKey: r
                        }),
                        c = "";
                    return -1 !== ["DELIVERING", "DELIVERY_EXTENDED", "READY"].indexOf(o) ? c = "PAUSED" : "PAUSED" === o && (c = a > 0 ? "DELIVERING" : "READY"), c ? (e(Object(i.a)({
                        type: j
                    }, {
                        rgKey: r,
                        data: {
                            status: c
                        }
                    })), d(t, c).then(function(t) {
                        return function(t, e) {
                            return t(Object(i.a)({
                                type: j
                            }, e)), Promise.resolve()
                        }(e, t)
                    }).catch(function(t) {
                        return Object(p.default)(t), e(Object(i.a)({
                            type: j
                        }, t.errors)), Promise.reject({
                            errors: ["Error while updating ad group status."]
                        })
                    })) : Promise.reject({
                        errors: ["Invalid status to toggle"]
                    })
                }
            }
        },
        428: function(t, e, n) {
            "use strict";
            var r = n(0),
                i = n.n(r),
                o = n(20),
                a = n(1023),
                u = n(1024),
                c = (n(2), n(66)),
                s = n(148),
                l = n(30),
                d = n(52),
                f = n.n(d),
                p = function(t) {
                    var e = t.count,
                        n = t.url;
                    return i.a.createElement(c.a, {
                        title: "Want to recommend more research?",
                        description: "We found " + f()("more item", e, !0) + " for you to recommend."
                    }, i.a.createElement(s.a, null, i.a.createElement(l.a, {
                        href: n,
                        theme: "inverted"
                    }, "Yes")))
                },
                m = n(3);

            function h(t, e, n) {
                return function(r) {
                    function u() {
                        n || r(Object(o.pushAlert)(function() {
                            return i.a.createElement(a.a, {
                                qualifier: t
                            })
                        }, "like-" + e))
                    }~["comment", "update", "publicationDetail"].indexOf(t) ? Object(m.default)("recommendations.LikeSuggestions.followUp.html", {
                        method: "POST",
                        body: {
                            type: t
                        }
                    }).then(function(t) {
                        var n = t.result,
                            a = n.likeSuggestionCount,
                            c = n.likeSuggestionsUrl;
                        a > 0 ? r(Object(o.pushAlert)(function() {
                            return i.a.createElement(p, {
                                url: c,
                                count: a
                            })
                        }, "like-" + e)) : u()
                    }).catch(u) : u()
                }
            }

            function b(t, e) {
                return function(n) {
                    return n(Object(o.pushAlert)(function() {
                        return i.a.createElement(u.a, {
                            qualifier: t
                        })
                    }, "unlike-" + e))
                }
            }
            n.d(e, "a", function() {
                return h
            }), n.d(e, "b", function() {
                return b
            })
        },
        43: function(t, e, n) {
            "use strict";
            n.d(e, "e", function() {
                return a
            }), n.d(e, "b", function() {
                return u
            }), n.d(e, "d", function() {
                return s
            }), n.d(e, "a", function() {
                return d
            }), n.d(e, "c", function() {
                return p
            });
            var r = n(126),
                i = n.n(r),
                o = {
                    protocol: /^https?:\/\//,
                    leadingSlash: /^\//,
                    leadingQS: /^[&?]/,
                    trailingSlashes: /[\/]+$/,
                    leadingAmpersand: /^&/
                };

            function a(t) {
                window.open(c(t), "_blank").focus()
            }

            function u(t) {
                var e;
                e = c(t), document.location.href = e
            }

            function c(t) {
                if (o.protocol.test(t)) return t;
                var e = document.querySelector("base"),
                    n = e && e.href;
                return n && ("/" === n.charAt(n.length - 1) && "/" === t.charAt(0) && (t = t.substr(1)), t = n + t), t
            }
            var s = function(t, e) {
                    return void 0 === e && (e = document.location.search), i.a.parse(e, {
                        ignoreQueryPrefix: !0
                    })[t]
                },
                l = "http://example.com";

            function d(t, e) {
                if (!e || 0 === Object.keys(e).length) return t;
                var n = "string" == typeof e ? e.replace(o.leadingQS, "") : i.a.stringify(e, {
                    arrayFormat: "indices"
                });
                if ("" === n) return t;
                var r, a = o.protocol.test(t);
                (r = a ? new URL(t) : new URL(t, l)).search = (r.search + "&" + n).replace(o.leadingAmpersand, "?");
                var u = r.toString();
                return a ? u : (u = u.replace(l, ""), o.leadingSlash.test(t) ? u : u.replace(o.leadingSlash, ""))
            }
            var f = null;

            function p() {
                if (null === f) {
                    if (!(f = document.baseURI)) {
                        var t = document.getElementsByTagName("base");
                        f = t.length > 0 ? t[0].href : ""
                    }
                    f = f.replace(o.trailingSlashes, "")
                }
                return f
            }
        },
        438: function(t, e, n) {
            "use strict";
            var r = n(11),
                i = n(5),
                o = (n(2), n(0)),
                a = n.n(o),
                u = n(30),
                c = function(t) {
                    function e() {
                        for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(r)) || this).state = {
                            hovered: !1
                        }, e.handleMouseEnter = function() {
                            e.setState({
                                hovered: !0
                            })
                        }, e.handleMouseLeave = function() {
                            e.setState({
                                hovered: !1
                            })
                        }, e
                    }
                    return Object(i.a)(e, t), e.prototype.render = function() {
                        var t = this.props,
                            e = t.isVisible,
                            n = t.isFollowing,
                            i = t.follow,
                            o = t.unfollow,
                            u = t.toggleFollow,
                            c = t.labelFollow,
                            s = t.labelFollowing,
                            l = t.labelUnfollow,
                            d = t.theme,
                            f = t.color,
                            p = t.className,
                            m = t.size,
                            h = t.useHover,
                            b = t.width,
                            g = t.renderAs;
                        if (!e) return null;
                        var v = this.props.buttonProps ? this.props.buttonProps : {
                            theme: d,
                            color: f,
                            className: p,
                            size: m,
                            width: b
                        };
                        if (!n) return a.a.createElement(g, Object(r.a)({
                            type: "button",
                            onClick: i
                        }, v), c);
                        if (!h) {
                            var y = n ? s : c;
                            return a.a.createElement(g, Object(r.a)({
                                type: "button",
                                onClick: u
                            }, v), y)
                        }
                        var I = this.state.hovered ? l : s;
                        return a.a.createElement(g, Object(r.a)({
                            onClick: o,
                            onMouseEnter: this.handleMouseEnter,
                            onMouseLeave: this.handleMouseLeave,
                            type: "button"
                        }, v), I)
                    }, e
                }(o.Component);
            c.displayName = "FollowButton", c.defaultProps = {
                labelFollow: "Follow",
                labelUnfollow: "Unfollow",
                labelFollowing: "Following",
                isVisible: !0,
                useHover: !0,
                renderAs: u.a
            }, e.a = c
        },
        442: function(t, e, n) {
            "use strict";
            var r = n(5),
                i = (n(2), n(0)),
                o = n.n(i),
                a = n(18),
                u = n(124),
                c = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }
                    return Object(r.a)(e, t), e.prototype.render = function() {
                        return this.props.institution ? o.a.createElement("span", null, this.props.institution) : null
                    }, e
                }(i.Component);
            c.displayName = "ProfileAffiliation", e.a = Object(a.a)(function(t, e) {
                return {
                    institution: Object(u.c)(t, e).profile.professionalInstitution || e.fallbackString
                }
            })(c)
        },
        448: function(t, e, n) {
            "use strict";
            var r = n(18),
                i = n(78),
                o = n(438);
            e.a = Object(r.a)(function(t, e) {
                var n = t.accountsGlobalAccounts[e.accountId],
                    r = n.isFollowedByCurrentUser;
                return {
                    color: r ? "grey" : "blue",
                    isFollowing: r,
                    isVisible: n.canBeFollowed,
                    labelUnfollow: "Following"
                }
            }, function(t, e) {
                return {
                    follow: function() {
                        e.beforeFollow && e.beforeFollow();
                        var n = [e.accountId, e.afterFollow ? e.afterFollow : null, e.context ? e.context : null, e.experimentGoal ? e.experimentGoal : null, e.experimentViewId ? e.experimentViewId : null, e.errorFollow ? e.errorFollow : null, e.ieplFollow ? e.ieplFollow : null];
                        t(i.c.apply(void 0, n))
                    },
                    unfollow: function() {
                        var n = [e.accountId, e.context ? e.context : null, e.ieplUnfollow ? e.ieplUnfollow : null];
                        t(i.d.apply(void 0, n))
                    }
                }
            })(o.a)
        },
        45: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return r
            }), n.d(e, "b", function() {
                return i
            });
            var r = "ADD_MORE_ACCOUNTS";

            function i(t) {
                return function(e) {
                    e({
                        type: r,
                        accounts: t
                    })
                }
            }
        },
        454: function(t, e, n) {
            "use strict";
            var r = n(5),
                i = n(0),
                o = n.n(i),
                a = n(397),
                u = n(11),
                c = n(19),
                s = (n(2), n(391)),
                l = n.n(s),
                d = n(583),
                f = n(1643),
                p = "react-intersection-debugger",
                m = d.a.getColor("blue-500"),
                h = d.a.getColor("blue-700"),
                b = f.a.getFontFamily("monospace"),
                g = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAK0lEQVQYV2NkwA7+g4QZsciBJUBy6JJwCXSdKBLIkhgSMEmsEsiS2BzGAADXNgcHKFU9NgAAAABJRU5ErkJggg==";
            var v = 0,
                y = function(t) {
                    function e() {
                        for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(r)) || this).state = {
                            isIntersecting: !1
                        }, e.handleChange = function(t, n) {
                            e.setState({
                                isIntersecting: t.isIntersecting
                            }), e.props.onChange(t, n)
                        }, e
                    }
                    Object(r.a)(e, t);
                    var n = e.prototype;
                    return n.componentDidMount = function() {
                        var t;
                        1 == ++v && ((t = document.createElement("style")).setAttribute("data-" + p, ""), t.textContent = "\n.intersection-observer-debugger {\n    outline: " + m + " dashed 2px;\n    outline-offset: -2px\n}\n.intersection-observer-debugger-meta {\n    height: 0;\n    position: relative;\n    mix-blend-mode: normal !important\n}\n.intersection-observer-debugger-meta::before {\n    content: attr(data-root) '  ' attr(data-root-margin);\n    pointer-events: none;\n    color: #fff;\n    background-color: " + m + ";\n    font-size: 11px;\n    font-family: " + b + ";\n    z-index: 1;\n    position: absolute;\n    top: 0;\n    left: 0;\n    white-space: nowrap;\n    padding: 0 7px;\n    line-height: 19px\n}\n.intersection-observer-debugger--with-margin {\n    mix-blend-mode: multiply;\n    isolation: isolate;\n    background-color: rgba(134,134,134,.2);\n    outline-color: " + h + "\n}\n.intersection-observer-debugger--with-margin > * {\n    mix-blend-mode: multiply\n}", document.head.appendChild(t)),
                            function(t, e) {
                                var n = e ? e.concat().reduce(function(t, e) {
                                        return e.charCodeAt(0) + t
                                    }, 0) : "",
                                    r = p + "-" + t + n,
                                    i = document.querySelector("style[data-" + r + "]");
                                if (i) i.dataset[l()(r)] = parseInt(i.dataset[l()(r)], 10) + 1;
                                else {
                                    var o = Object(a.b)(e).split(" "),
                                        u = parseInt(o[0], 10),
                                        c = parseInt(o[1], 10),
                                        s = parseInt(o[2], 10),
                                        d = parseInt(o[3], 10),
                                        f = {
                                            marginTop: Math.max(0, -u) + o[0].replace(u, ""),
                                            marginRight: Math.max(0, 100 - -c) + o[1].replace(c, ""),
                                            marginBottom: Math.max(0, 100 - -s) + o[2].replace(s, ""),
                                            marginLeft: Math.max(0, -d) + o[3].replace(d, "")
                                        },
                                        m = [];
                                    if (u || s) {
                                        var h = "url(" + g + "), linear-gradient(rgba(0,0,0,.5) {{marginTop}}, #000 {{marginTop}}, #000 {{marginBottom}}, rgba(0,0,0,.5) {{marginBottom}})";
                                        m.push(h.replace(/\{\{(marginTop|marginBottom)\}\}/g, function(t, e) {
                                            return f[e]
                                        }))
                                    }
                                    if (d || c) {
                                        var b = "url(" + g + "), linear-gradient(to right, rgba(0,0,0,.5) {{marginLeft}}, #000 {{marginLeft}}, #000 {{marginRight}}, rgba(0,0,0,.5) {{marginRight}})";
                                        m.push(b.replace(/\{\{(marginLeft|marginRight)\}\}/g, function(t, e) {
                                            return f[e]
                                        }))
                                    }
                                    var v = m.join(",");
                                    (i = document.createElement("style")).dataset[l()(r)] = 1, i.textContent = "\n.intersection-observer-debugger--with-margin_" + t + n + "::before {\n    pointer-events: none;\n    content: '';\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    position: fixed;\n    background: #fff;\n    mix-blend-mode: overlay;\n    -webkit-mask-image: " + v + ";\n    mask-image: " + v + "\n}", document.head.appendChild(i)
                                }
                            }(this.rootName, this.props.rootMargin)
                    }, n.componentWillUnmount = function() {
                        var t;
                        0 == --v && (t = document.querySelector("style[data-" + p + "]")) && t.parentNode.removeChild(t),
                            function(t, e) {
                                var n = e ? e.concat().reduce(function(t, e) {
                                        return e.charCodeAt(0) + t
                                    }, 0) : "",
                                    r = p + "-" + t + n,
                                    i = document.querySelector("style[data-" + r + "]");
                                if (i) {
                                    if (i.dataset[l()(r)] > 1) return void(i.dataset[l()(r)] = parseInt(i.dataset[l()(r)], 10) - 1);
                                    i.parentNode.removeChild(i)
                                }
                            }(this.rootName, this.props.rootMargin)
                    }, n.render = function() {
                        var t, e = this.props,
                            n = (e.onChange, e.children),
                            r = Object(c.a)(e, ["onChange", "children"]),
                            i = this.state.isIntersecting,
                            s = r.root,
                            l = r.rootMargin,
                            d = "intersection-observer-debugger",
                            f = {
                                className: d
                            },
                            p = ((t = {})["data-root"] = this.rootName, t);
                        if (this.rootName = "Window", s && (this.rootName = ("string" == typeof s ? document.querySelector(s) : s).match(/\[.+\s(\w+)\]/)[1]), l && i) {
                            if (Object(a.b)(l).split(" ").some(function(t) {
                                    return parseInt(t, 10)
                                })) {
                                var m = l.concat().reduce(function(t, e) {
                                    return e.charCodeAt(0) + t
                                }, 0);
                                f.className += " " + d + "--with-margin " + d + "--with-margin_" + this.rootName + m
                            }
                            p["data-root-margin"] = l
                        }
                        return o.a.createElement("div", f, i && o.a.createElement("div", Object(u.a)({
                            className: "intersection-observer-debugger-meta"
                        }, p)), o.a.createElement(a.a, Object(u.a)({}, r, {
                            onChange: this.handleChange
                        }), n))
                    }, e
                }(i.Component);
            y.displayName = "IntersectionObserverDebugger";
            var I = a.a;
            RGCommons.debug.addReadyListener(function() {
                RGCommons.debug.addListener("intersectionObserver:switch", function(t) {
                    I = t ? y : a.a
                })
            });
            var O = function(t) {
                function e() {
                    for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    return (e = t.call.apply(t, [this].concat(r)) || this).state = {
                        Element: null
                    }, e.switchUpdateMode = function() {
                        e.setState({
                            Element: I
                        })
                    }, e
                }
                Object(r.a)(e, t);
                var n = e.prototype;
                return n.componentDidMount = function() {
                    var t = this;
                    RGCommons.debug.addReadyListener(function() {
                        RGCommons.debug.emit("intersectionObserver:add"), RGCommons.debug.addListener("intersectionObserver:switch", t.switchUpdateMode)
                    })
                }, n.componentWillUnmount = function() {
                    var t = this;
                    RGCommons.debug.addReadyListener(function() {
                        RGCommons.debug.emit("intersectionObserver:remove"), RGCommons.debug.removeListener("intersectionObserver:switch", t.switchUpdateMode)
                    })
                }, n.render = function() {
                    return o.a.createElement(this.state.Element || I, this.props)
                }, e
            }(i.Component);
            O.displayName = "IntersectionObserverSwitch", n.d(e, "a", function() {
                return O
            })
        },
        455: function(t, e, n) {
            "use strict";
            var r = n(11),
                i = n(1),
                o = n(5),
                a = (n(2), n(0)),
                u = n.n(a),
                c = n(30),
                s = n(1100),
                l = n(148),
                d = n(217),
                f = n(501),
                p = n(454),
                m = n(488),
                h = Object(f.a)(function(t) {
                    return t.tracking
                })(function(t) {
                    return u.a.createElement(p.a, {
                        onChange: Object(m.a)(t.onAttentionChange),
                        rootMargin: "-15% 0%"
                    }, t.children)
                }),
                b = function(t) {
                    function e() {
                        for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(r)) || this).state = {
                            currentImage: e.props.initialImageUrl
                        }, e.handleRequestClose = function(t) {
                            t.stopPropagation();
                            var n = t.target;
                            !n || n.classList.contains("lightbox-arrow") || n.parentNode.classList.contains("lightbox-arrow") || e.props.onClose()
                        }, e.handleKeyDown = function(t) {
                            27 === t.keyCode && e.handleRequestClose(t), 37 === t.keyCode && e.hasMultipleImages() && e.handlePrevImage(), 39 === t.keyCode && e.hasMultipleImages() && e.handleNextImage()
                        }, e.handleNextImage = function() {
                            var t = e.getCurrentImageIndex() > e.props.imageLinks.length - 2 ? 0 : e.getCurrentImageIndex() + 1;
                            e.setState({
                                currentImage: e.props.imageLinks[t].urls
                            })
                        }, e.handlePrevImage = function() {
                            var t = e.getCurrentImageIndex() > 0 ? e.getCurrentImageIndex() - 1 : e.props.imageLinks.length - 1;
                            e.setState({
                                currentImage: e.props.imageLinks[t].urls
                            })
                        }, e
                    }
                    Object(o.a)(e, t);
                    var n = e.prototype;
                    return n.renderAdditionalButtons = function(t) {
                        var e = this;
                        return this.props.buttons ? this.props.buttons.map(function(n) {
                            var o = n.iconProps ? u.a.createElement(c.a.Icon, n.iconProps) : null,
                                a = n.label ? u.a.createElement(c.a.Label, null, n.label) : null;
                            return u.a.createElement(c.a, Object(r.a)({}, Object(i.a)({}, t, n.buttonProps, {
                                href: e.state.currentImage.downloadUrl
                            }), {
                                key: a,
                                className: n.className
                            }), o, a)
                        }) : null
                    }, n.getCurrentImageIndex = function() {
                        var t = this;
                        return this.hasMultipleImages() ? this.props.imageLinks.findIndex(function(e) {
                            return e.urls.largeUrl === t.state.currentImage.largeUrl
                        }) : 0
                    }, n.hasMultipleImages = function() {
                        return this.props.imageLinks.length > 1
                    }, n.getTrackingProps = function() {
                        var t = this.props,
                            e = t.context,
                            n = t.imageLinks;
                        return !(!e || !n[this.getCurrentImageIndex()].entityId) && {
                            rgKey: n[this.getCurrentImageIndex()].entityId,
                            context: e,
                            componentIdentifier: "LightBox"
                        }
                    }, n.componentDidMount = function() {
                        window.addEventListener("keydown", this.handleKeyDown)
                    }, n.componentWillUnmount = function() {
                        window.removeEventListener("keydown", this.handleKeyDown)
                    }, n.render = function() {
                        var t = {
                                theme: "bare",
                                color: "white",
                                size: "m",
                                type: "button"
                            },
                            e = this.getTrackingProps(),
                            n = u.a.createElement("img", {
                                src: this.state.currentImage.largeUrl,
                                className: "lightbox-img",
                                key: "lazyload-" + Date.now()
                            });
                        return u.a.createElement(s.a, null, u.a.createElement("div", null, u.a.createElement("div", {
                            className: "lightbox",
                            onClick: this.handleRequestClose
                        }, u.a.createElement("div", {
                            className: "lightbox-mediawrapper lightbox-dark"
                        }, u.a.createElement(h, {
                            tracking: e
                        }, n)), u.a.createElement("div", {
                            className: "lightbox-close"
                        }, u.a.createElement(l.a, null, this.renderAdditionalButtons(t), u.a.createElement(c.a, Object(r.a)({
                            onClick: this.props.onClose
                        }, t, {
                            key: "close"
                        }), u.a.createElement(c.a.Icon, {
                            identifier: "close-circle"
                        })))), this.hasMultipleImages() && [u.a.createElement("div", {
                            className: "lightbox-arrow-wrapper-prev lightbox-arrow",
                            onClick: this.handlePrevImage,
                            key: "arrow-left"
                        }, u.a.createElement(d.a, {
                            className: "lightbox-arrow",
                            identifier: "arrow-left",
                            size: "m"
                        })), u.a.createElement("div", {
                            className: "lightbox-arrow-wrapper-next lightbox-arrow",
                            onClick: this.handleNextImage,
                            key: "arrow-right"
                        }, u.a.createElement(d.a, {
                            className: "lightbox-arrow",
                            identifier: "arrow-right",
                            size: "m"
                        }))]), u.a.createElement("div", {
                            className: "lightbox-backdrop js-lightbox-backdrop",
                            onClick: this.props.onClose
                        })))
                    }, e
                }(a.PureComponent);
            b.displayName = "Lightbox", b.defaultProps = {
                imageLinks: [],
                initialImageUrl: null
            };
            e.a = b
        },
        458: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return o
            });
            var r = n(3),
                i = "application.AjaxCommon.ajaxScoreInteractionExperiment.html";

            function o(t, e) {
                var n = e ? "?timestamp=" + Date.now() : "";
                return Object(r.default)(i + n, {
                    method: "POST",
                    query: {
                        _iepl: t
                    }
                })
            }
        },
        462: function(t, e, n) {
            "use strict";

            function r(t) {
                if (!Date.parse(t)) throw new Error("Invalid Date");
                var e, n = new Date(t);
                if (e = t, a.some(function(t) {
                        return t.exec(e)
                    })) {
                    var r = i(function(t) {
                        var e = new Date(t.getTime()),
                            n = e.getTimezoneOffset();
                        e.setSeconds(0, 0);
                        var r = e.getTime() % o;
                        return n * o + r
                    }(n));
                    return new Date(i(n.getTime()) + r)
                }
                return n
            }

            function i(t) {
                var e = Number(t);
                return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e)
            }
            n.d(e, "a", function() {
                return r
            });
            var o = 6e4;
            var a = [/(Z)$/, /([+-])(\d{2})$/, /([+-])(\d{2}):?(\d{2})$/, /(UTC|(?:[a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?))$/]
        },
        463: function(t, e, n) {
            "use strict";
            (function(t) {
                n.d(e, "a", function() {
                    return c
                });
                var r = n(1),
                    i = n(0),
                    o = n.n(i),
                    a = n(87),
                    u = n(37);

                function c(e, i, c) {
                    e(Object(u.mountModal)(function() {
                        return o.a.createElement(a.a, {
                            url: "publication.PublicationFigures.html",
                            widgetParams: Object(r.a)({
                                publicationUid: i
                            }, c),
                            loadComponentInternalDoNotSetOrYouWillBeFired: function() {
                                return Promise.all([n.e(1), n.e(0), n.e(3), n.e(438), n.e(164)]).then(n.bind(null, 210))
                            },
                            hmrAcceptInternalDoNotSetOrYouWillBeFired: t.hot && !1
                        })
                    }))
                }
            }).call(this, n(140)(t))
        },
        47: function(t, e, n) {
            "use strict";
            n.d(e, "g", function() {
                return u
            }), n.d(e, "j", function() {
                return c
            }), n.d(e, "i", function() {
                return s
            }), n.d(e, "h", function() {
                return l
            }), n.d(e, "e", function() {
                return d
            }), n.d(e, "c", function() {
                return f
            }), n.d(e, "f", function() {
                return p
            }), n.d(e, "b", function() {
                return m
            }), n.d(e, "d", function() {
                return h
            }), n.d(e, "a", function() {
                return b
            }), n.d(e, "k", function() {
                return g
            }), n.d(e, "m", function() {
                return v
            }), n.d(e, "n", function() {
                return y
            }), n.d(e, "l", function() {
                return I
            }), n.d(e, "o", function() {
                return O
            });
            var r = n(1),
                i = n(70),
                o = n(13),
                a = n.n(o),
                u = "SET_REFRESH_TIMER",
                c = "UPDATE_SLOT",
                s = "UPDATE_RENDERING_INFO",
                l = "UPDATE_LAST_REFRESH",
                d = "ENABLE_REFRESH",
                f = "DISABLE_REFRESH",
                p = "REMOVE_AD_UNIT",
                m = "DISABLE_AD_UNIT",
                h = "ENABLE_AD_UNIT",
                b = "ADD_INTERACTION_GOALS";

            function g(t, e, n, r, o) {
                Object(i.a)(e, n, r, o),
                    function(t) {
                        var e = a()(window, ["reactData", "reduxStore"]);
                        a()(e.getState(), ["applicationAds", "adUnits", t]) && (e.dispatch({
                            type: p,
                            snippetId: t
                        }), rgDelivery.cmd.push(function() {
                            rgDelivery.unregisterAdSlot(t)
                        }))
                    }(t)
            }

            function v(t) {
                return function(e, n) {
                    rgDelivery.cmd.push(function() {
                        var e = n().applicationAds.adUnits;
                        e[t] && rgDelivery.refreshAdSlot(e[t].snippetId)
                    })
                }
            }

            function y(t) {
                return function(e) {
                    e({
                        type: s,
                        slotId: t,
                        creativeId: null,
                        isEmpty: !0,
                        lineItemId: null,
                        serviceName: null,
                        size: null
                    })
                }
            }

            function I() {
                window.googletag.openConsole()
            }

            function O(t) {
                return function(e) {
                    e(Object(r.a)({
                        type: c
                    }, t))
                }
            }
        },
        486: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return c
            });
            var r = n(5),
                i = (n(2), n(0)),
                o = n.n(i),
                a = n(658),
                u = n(218),
                c = function(t) {
                    function e() {
                        for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(r)) || this).handleChange = function(t) {
                            var n = t.target.value;
                            e.props.onChange({
                                text: n,
                                struct: Object(u.convertToRaw)(u.ContentState.createFromText(n))
                            }, !0)
                        }, e.handleFocus = function() {
                            e.props.onFocus && e.props.onFocus()
                        }, e.handleBlur = function() {
                            e.props.onBlur && e.props.onBlur()
                        }, e
                    }
                    Object(r.a)(e, t);
                    var n = e.prototype;
                    return n.clear = function() {
                        this.editor.value = ""
                    }, n.focus = function() {
                        this.editor.focus()
                    }, n.render = function() {
                        var t = this,
                            e = this.props,
                            n = e.placeholder,
                            r = e.hasError;
                        return o.a.createElement(a.a, {
                            fieldRef: function(e) {
                                t.editor = e
                            },
                            rows: 5,
                            onChange: this.handleChange,
                            placeholder: n,
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur,
                            status: r ? "invalid" : null
                        })
                    }, e
                }(i.Component);
            c.displayName = "ConversePlainTextEditor"
        },
        488: function(t, e, n) {
            "use strict";
            var r = "undefined" != typeof window && "IntersectionObserver" in window && window.IntersectionObserver.prototype.toString().includes("[object IntersectionObserver");
            e.a = function(t) {
                return r ? t : function() {
                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    return window.requestIdleCallback(function() {
                        t.apply(void 0, n)
                    })
                }
            }
        },
        50: function(t, e, n) {
            "use strict";
            var r = n(3);
            n.d(e, "a", function() {
                return i
            }), n.d(e, "f", function() {
                return o
            }), n.d(e, "c", function() {
                return a
            }), n.d(e, "i", function() {
                return u
            }), n.d(e, "h", function() {
                return c
            }), n.d(e, "g", function() {
                return s
            }), n.d(e, "d", function() {
                return l
            }), n.d(e, "b", function() {
                return d
            }), n.d(e, "e", function() {
                return f
            }), n.d(e, "l", function() {
                return h
            }), n.d(e, "m", function() {
                return b
            }), n.d(e, "k", function() {
                return g
            }), n.d(e, "j", function() {
                return v
            });
            var i = "BEGIN_PERSIST_SATISFACTION",
                o = "SHOW_PERFORMANCE_RATING",
                a = "CLOSE_PERFORMANCE_RATING",
                u = "UPDATE_STEP",
                c = "UPDATE_HIRING",
                s = "UPDATE_FEEDBACK",
                l = "GIVE_CONSENT",
                d = "CLOSE_JOB_EXPIRATION_FEEDBACK_DIALOG",
                f = "OPEN_PERFORMANCE_DETAILS",
                p = "ERROR_PERSIST_SATISFACTION",
                m = "DONE_PERSIST_SATISFACTION";

            function h(t, e) {
                return function(n) {
                    n(function(t) {
                            return function(e) {
                                e({
                                    type: f,
                                    jobId: t
                                })
                            }
                        }(t)), n(g(t)), n({
                            type: i,
                            jobId: t,
                            satisfaction: e
                        }),
                        function(t, e) {
                            var n = {
                                jobId: t,
                                satisfaction: e
                            };
                            return Object(r.default)("jobs.performance.JobPerformanceRating.persistFeedback.html", {
                                method: "POST",
                                body: n
                            }).then(function(t) {
                                if (!t.result) throw new Error("Error in persisting satisfaction");
                                return t.result
                            })
                        }(t, e).then(function() {
                            return n({
                                type: m,
                                jobId: t,
                                satisfaction: e
                            })
                        }).catch(function() {
                            return n({
                                type: p,
                                jobId: t,
                                satisfaction: e
                            })
                        })
                }
            }

            function b(t) {
                return function(e) {
                    e({
                        type: o,
                        jobId: t
                    })
                }
            }

            function g(t) {
                return function(e) {
                    e({
                        type: a,
                        jobId: t
                    })
                }
            }

            function v(t) {
                return function(e) {
                    e({
                        type: d,
                        jobId: t
                    })
                }
            }
        },
        501: function(t, e, n) {
            "use strict";
            (function(t) {
                var r = n(11),
                    i = n(19),
                    o = n(5),
                    a = n(1),
                    u = (n(2), n(0)),
                    c = n.n(u),
                    s = n(35),
                    l = n(16),
                    d = n(34),
                    f = n(28),
                    p = n.n(f),
                    m = n(566),
                    h = n(1020),
                    b = n(1137),
                    g = n(931),
                    v = n(400),
                    y = n(1138);
                e.a = function(e, f) {
                    var I;
                    void 0 === f && (f = {});
                    var O = {
                        endpoint: "/beacon/attention/v6/track",
                        sessionTimeout: 6e5,
                        inactivityTimeout: 1e4,
                        translator: new g.a,
                        debug: Boolean(RGCommons.debug.isDebugModeOn)
                    };
                    return f = Object(a.a)({}, O, f), I = new b.a(f),
                        function(b) {
                            var g = function(e) {
                                function u() {
                                    for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                    return (t = e.call.apply(e, [this].concat(r)) || this).state = {
                                        isDebugModeOn: f.debug
                                    }, t.hasAttention = !1, t.switchDebugMode = function(e) {
                                        t.setState({
                                            isDebugModeOn: e
                                        })
                                    }, t.handleAttentionChange = function(e) {
                                        ("boolean" == typeof e.isIntersecting ? e.isIntersecting : !(0 === e.intersectionRatio && 0 === e.intersectionRect.top)) ? t.activate(): t.deactivate()
                                    }, t.handlePreFlush = function() {
                                        t.hasAttention && t.persistAttentionTime()
                                    }, t.handlePostFlush = function() {
                                        t.dataStore.set("attentionMilliseconds", 0), t.dataStore.set("inactivitiesCount", 0), t.lastAttentionStart = Date.now(), t.updateDebugger()
                                    }, t.handleActivityChange = function(e) {
                                        e || t.dataStore.set("inactivitiesCount", t.dataStore.get("inactivitiesCount") + 1), t.hasAttention !== e && (e ? t.attentionStart() : t.attentionStop())
                                    }, t
                                }
                                Object(o.a)(u, e);
                                var s = u.prototype;
                                return s.updateDebugger = function(t) {
                                    this.state.isDebugModeOn && this.debugger && (t ? this.debugger.stop(this.hasAttention, this.dataStore.get("attentionMilliseconds"), this.dataStore.get("inactivitiesCount")) : this.debugger.update(this.hasAttention, this.dataStore.get("attentionMilliseconds"), this.dataStore.get("inactivitiesCount")))
                                }, s.activate = function() {
                                    this.hasAttention || (this.ensureDataStore(), this.attentionStart(), this.startMonitoring())
                                }, s.deactivate = function() {
                                    this.hasAttention && (this.stopMonitoring(), this.attentionStop())
                                }, s.ensureDataStore = function() {
                                    this.dataStore || (this.dataStore = I.append({
                                        attentionMilliseconds: 0,
                                        inactivitiesCount: 0,
                                        extraData: this.props.attentionTrackerData,
                                        onPreFlush: this.handlePreFlush,
                                        onPostFlush: this.handlePostFlush,
                                        accountId: this.props.currentAccountId,
                                        contentId: this.props.currentContentId
                                    }))
                                }, s.attentionStart = function() {
                                    this.hasAttention = !0, this.lastAttentionStart = Date.now(), this.updateDebugger()
                                }, s.attentionStop = function() {
                                    this.hasAttention = !1, this.persistAttentionTime(), this.updateDebugger(!0)
                                }, s.startMonitoring = function() {
                                    this.lifeMonitor = new h.a(this.handleActivityChange, f.inactivityTimeout), this.lifeMonitor.start()
                                }, s.stopMonitoring = function() {
                                    this.lifeMonitor.stop(), this.lifeMonitor = null
                                }, s.persistAttentionTime = function() {
                                    var t = this.dataStore.get("attentionMilliseconds");
                                    this.dataStore.set("attentionMilliseconds", t + Date.now() - this.lastAttentionStart)
                                }, s.componentDidMount = function() {
                                    var t = this;
                                    RGCommons.debug.addReadyListener(function() {
                                        RGCommons.debug.addListener("intersectionObserver:switch", t.switchDebugMode)
                                    })
                                }, s.componentWillUnmount = function() {
                                    var t = this;
                                    this.lifeMonitor && (this.stopMonitoring(), this.hasAttention && this.attentionStop()), this.dataStore && !I.translator.containsValuableData(this.dataStore) && I.remove(this.dataStore), RGCommons.debug.addReadyListener(function() {
                                        RGCommons.debug.removeListener("intersectionObserver:switch", t.switchDebugMode)
                                    })
                                }, s.render = function() {
                                    var e = this,
                                        o = this.props,
                                        u = (o.attentionTrackerData, Object(i.a)(o, ["attentionTrackerData"])),
                                        s = c.a.createElement(b, Object(a.a)({}, u, {
                                            onAttentionChange: this.handleAttentionChange
                                        }));
                                    if (this.state.isDebugModeOn) {
                                        var l = {
                                            hasAttention: this.hasAttention
                                        };
                                        return this.dataStore && (l.attentionMilliseconds = this.dataStore.get("attentionMilliseconds") + Date.now() - this.lastAttentionStart, l.inactivitiesCount = this.dataStore.get("inactivitiesCount")), c.a.createElement(m.a, Object(r.a)({
                                            ref: function(t) {
                                                e.debugger = t
                                            },
                                            src: "common/hocs/attentionTracker/Debugger",
                                            renderPreloader: function() {
                                                return s
                                            }
                                        }, l, {
                                            resolveComponentInternalDoNotSetOrYouWillBeFired: function() {
                                                return n.e(52).then(n.bind(null, 2050))
                                            },
                                            hmrAccept: t.hot && !1
                                        }), s)
                                    }
                                    return s
                                }, u
                            }(u.Component);
                            return g.displayName = "AttentionTracker", g.displayName = Object(l.wrapDisplayName)(b, "AttentionTracker"), e ? Object(l.toClass)(Object(l.compose)(Object(l.branch)(function(t) {
                                return !t.currentAccountId
                            }, Object(s.connect)(Object(d.b)({
                                currentAccountId: v.b
                            }))), Object(l.branch)(function(t) {
                                return !t.currentContentId
                            }, Object(s.connect)(Object(d.b)({
                                currentContentId: y.a
                            }))), Object(l.withProps)(function(t) {
                                return p()(!t.attentionTrackerData, "Providing `attentionTrackerData` via component props will overwrite its value when `attentionTracker` is used."), {
                                    attentionTrackerData: e(t)
                                }
                            }))(g)) : g
                        }
                }
            }).call(this, n(140)(t))
        },
        510: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return m
            }), n.d(e, "b", function() {
                return h
            }), n.d(e, "d", function() {
                return v
            }), n.d(e, "c", function() {
                return y
            });
            var r = n(1),
                i = n(12),
                o = n(15);

            function a() {
                var t = Object(i.a)(["\n            mutation UnfollowAccount_ProfileHeader($id: ID!) {\n                unfollowAccount(id: $id) {\n                    id\n                    ...FollowAccountUpdateFields_ProfileHeader\n                }\n            }\n        "]);
                return a = function() {
                    return t
                }, t
            }

            function u() {
                var t = Object(i.a)(["\n            mutation UnfollowAccount($id: ID!) {\n                unfollowAccount(id: $id) {\n                    id\n                    ...FollowAccountUpdateFields\n                }\n            }\n        "]);
                return u = function() {
                    return t
                }, t
            }

            function c() {
                var t = Object(i.a)(["\n            mutation FollowAccount_ProfileHeader($id: ID!, $context: String!) {\n                followAccount(id: $id, context: $context) {\n                    id\n                    ...FollowAccountUpdateFields_ProfileHeader\n                }\n            }\n        "]);
                return c = function() {
                    return t
                }, t
            }

            function s() {
                var t = Object(i.a)(["\n            mutation FollowAccount($id: ID!, $context: String!) {\n                followAccount(id: $id, context: $context) {\n                    id\n                    ...FollowAccountUpdateFields\n                }\n            }\n        "]);
                return s = function() {
                    return t
                }, t
            }

            function l() {
                var t = Object(i.a)(["\n    fragment FollowAccountUpdateFields_ProfileHeader on Account {\n        id\n        ...FollowAccountUpdateFields\n        followingAccountsCount\n    }\n"]);
                return l = function() {
                    return t
                }, t
            }

            function d() {
                var t = Object(i.a)(["\n    fragment FollowAccountUpdateFields on Account {\n        id\n        isFollowing\n        canFollow\n        hasPermissionToFollow\n        hasPermissionToSendMessage\n    }\n"]);
                return d = function() {
                    return t
                }, t
            }

            function f(t) {
                return {
                    followAccount: {
                        id: t.id,
                        isFollowing: !0,
                        canFollow: !0,
                        hasPermissionToFollow: !0,
                        hasPermissionToSendMessage: !0,
                        __typename: "Account"
                    }
                }
            }

            function p(t) {
                var e = t.id,
                    n = t.followingAccountsCount;
                return function(t, i) {
                    var o;
                    return (o = {})[(0, i.fieldKey)("account", {
                        id: e
                    })] = Object(r.a)({
                        followingAccountsCount: n + 1
                    }, t.followAccount), o
                }
            }

            function m(t) {
                var e = t.id,
                    n = t.context;
                return {
                    mutation: Object(o.gql)(s()),
                    variables: {
                        id: e,
                        context: n
                    },
                    optimisticResponse: f({
                        id: e
                    })
                }
            }

            function h(t) {
                var e = t.id,
                    n = t.context,
                    r = t.followingAccountsCount;
                return {
                    mutation: Object(o.gql)(c()),
                    variables: {
                        id: e,
                        context: n
                    },
                    optimisticResponse: f({
                        id: e
                    }),
                    update: p({
                        id: e,
                        followingAccountsCount: r
                    })
                }
            }

            function b(t) {
                return {
                    unfollowAccount: {
                        id: t.id,
                        isFollowing: !1,
                        canFollow: !0,
                        hasPermissionToFollow: !0,
                        hasPermissionToSendMessage: !1,
                        __typename: "Account"
                    }
                }
            }

            function g(t) {
                var e = t.id,
                    n = t.followingAccountsCount;
                return function(t, i) {
                    var o, a = (0, i.fieldKey)("account", {
                            id: e
                        }),
                        u = n - 1;
                    return (o = {})[a] = Object(r.a)({
                        followingAccountsCount: u < 0 ? 0 : u
                    }, t.unfollowAccount), o
                }
            }

            function v(t) {
                var e = t.id;
                return {
                    mutation: Object(o.gql)(u()),
                    variables: {
                        id: e
                    },
                    optimisticResponse: b({
                        id: e
                    })
                }
            }

            function y(t) {
                var e = t.id,
                    n = t.followingAccountsCount;
                return {
                    mutation: Object(o.gql)(a()),
                    variables: {
                        id: e
                    },
                    optimisticResponse: b({
                        id: e
                    }),
                    update: g({
                        id: e,
                        followingAccountsCount: n
                    })
                }
            }
            Object(o.gql)(d()), Object(o.gql)(l())
        },
        516: function(t, e, n) {
            "use strict";
            n(2);
            var r = n(0),
                i = n.n(r);
            e.a = function(t) {
                var e = t.score;
                return i.a.createElement("span", null, i.a.createElement("span", {
                    className: "ico-publication-author-score"
                }), " ", parseFloat(e).toFixed(2))
            }
        },
        53: function(t, e, n) {
            "use strict";
            var r = n(24),
                i = n(59);
            n.d(e, "a", function() {
                return o
            }), n.d(e, "c", function() {
                return a
            }), n.d(e, "d", function() {
                return c
            }), n.d(e, "b", function() {
                return s
            }), n.d(e, "e", function() {
                return l
            });
            var o = 1e4,
                a = function(t, e) {
                    return void 0 === e && (e = !1),
                        function(n, o) {
                            var a = Object(i.a)(o);
                            if (a.get("isFrozen") && !e) return clearTimeout(a.getIn(["timeouts", t])), void n(function(t) {
                                return {
                                    type: r.c,
                                    uid: t
                                }
                            }(t));
                            n({
                                type: r.e,
                                uid: t
                            }), n(function(t) {
                                return {
                                    type: r.f,
                                    uid: t
                                }
                            }(t))
                        }
                },
                u = function(t, e, n, i) {
                    return void 0 === n && (n = o), void 0 === i && (i = setTimeout), t(function(t, e) {
                        return {
                            type: r.g,
                            uid: t,
                            timeoutId: e
                        }
                    }(e, i(function() {
                        t(a(e))
                    }, n)))
                },
                c = function(t, e, n, i, a) {
                    return void 0 === i && (i = o), void 0 === a && (a = setTimeout), t(function(t, e) {
                        return {
                            type: r.i,
                            componentGenerator: t,
                            uid: e
                        }
                    }(e, n)), u(t, n, i, a)
                },
                s = function() {
                    return {
                        type: r.b
                    }
                },
                l = function() {
                    return function(t, e) {
                        var n = Object(i.a)(e),
                            o = n.get("stack").filter(function(t) {
                                return null == n.getIn(["timeouts", t.get("uid")])
                            });
                        t({
                            type: r.k
                        });
                        var a = 0;
                        return o.map(function(e) {
                            var n = 2e3 + 1e3 * a;
                            u(t, e.get("uid"), n), a += 1
                        })
                    }
                }
        },
        540: function(t, e, n) {
            "use strict";
            var r = n(12),
                i = n(0),
                o = n.n(i),
                a = (n(2), n(16)),
                u = n(15),
                c = n(39),
                s = n(379),
                l = n(217),
                d = n(13),
                f = n.n(d);

            function p() {
                var t = Object(r.a)(["\n            query AccountPersonListItemMetaItems($id: ID!) {\n                account(id: $id) {\n                    id\n                    displayScore\n                    profile {\n                        affiliation {\n                            institution {\n                                name\n                            }\n                            departmentNew {\n                                name\n                            }\n                        }\n                    }\n                }\n            }\n        "]);
                return p = function() {
                    return t
                }, t
            }
            var m = function(t) {
                var e = t.displayScore,
                    n = t.shouldDisplayScore,
                    r = t.professionalInstitution,
                    i = t.showDepartment,
                    a = t.professionalDepartment;
                return o.a.createElement(s.a.MetaItems, null, e && n && o.a.createElement(s.a.MetaItem, null, o.a.createElement(l.a, {
                    identifier: "rg-score",
                    size: "s"
                }), " ", e), r && o.a.createElement(s.a.MetaItem, null, o.a.createElement("span", {
                    title: r
                }, r)), i && a && o.a.createElement(s.a.MetaItem, null, o.a.createElement("span", {
                    title: a
                }, a)))
            };
            m.defaultProps = {
                shouldDisplayScore: !0,
                showDepartment: !1
            };
            var h = Object(a.compose)(Object(c.a)(s.a.MetaItems), Object(u.withQuery)(Object(u.gql)(p()), {
                    mapDataToProps: function(t) {
                        var e = t.account;
                        return {
                            displayScore: f()(e, "displayScore"),
                            professionalInstitution: f()(e, "profile.affiliation.institution.name"),
                            professionalDepartment: f()(e, "profile.affiliation.departmentNew.name")
                        }
                    }
                }))(m),
                b = n(1),
                g = function(t) {
                    var e = t.fullName,
                        n = t.url;
                    return o.a.createElement(s.a.Fullname, {
                        href: n
                    }, e)
                };

            function v() {
                var t = Object(r.a)(["\n            query AccountPersonListItemFullName($id: ID!) {\n                account(id: $id) {\n                    id\n                    fullName\n                }\n            }\n        "]);
                return v = function() {
                    return t
                }, t
            }
            var y = Object(a.compose)(Object(c.a)(s.a.Fullname), Object(u.withQuery)(Object(u.gql)(v()), {
                    mapDataToProps: function(t) {
                        var e = t.account;
                        return Object(b.a)({}, e)
                    }
                }))(g),
                I = n(43);

            function O() {
                var t = Object(r.a)(["\n            query AccountPersonListItemFullNameLink($id: ID!) {\n                account(id: $id) {\n                    id\n                    fullName\n                    url\n                }\n            }\n        "]);
                return O = function() {
                    return t
                }, t
            }
            var E = Object(a.compose)(Object(c.a)(s.a.Fullname), Object(u.withQuery)(Object(u.gql)(O()), {
                    mapDataToProps: function(t, e) {
                        var n = t.account,
                            r = e.params,
                            i = r ? Object(I.a)(n.url, r) : n.url;
                        return Object(b.a)({}, n, {
                            url: i
                        })
                    }
                }))(g),
                A = function(t) {
                    var e = t.fullName,
                        n = t.imageUrl,
                        r = t.url;
                    return o.a.createElement(s.a.Image, {
                        alt: e,
                        imageUrl: n,
                        href: r
                    })
                };

            function P() {
                var t = Object(r.a)(["\n            query AccountPersonListItemImage($id: ID!) {\n                account(id: $id) {\n                    id\n                    fullName\n                    imageUrl\n                }\n            }\n        "]);
                return P = function() {
                    return t
                }, t
            }
            var S = Object(a.compose)(Object(c.a)(s.a.Image), Object(u.withQuery)(Object(u.gql)(P()), {
                mapDataToProps: function(t) {
                    var e = t.account;
                    return Object(b.a)({}, e)
                }
            }))(A);

            function j() {
                var t = Object(r.a)(["\n            query AccountPersonListItemImageLink($id: ID!) {\n                account(id: $id) {\n                    id\n                    fullName\n                    imageUrl\n                    url\n                }\n            }\n        "]);
                return j = function() {
                    return t
                }, t
            }
            var w = Object(a.compose)(Object(c.a)(s.a.Image), Object(u.withQuery)(Object(u.gql)(j()), {
                    mapDataToProps: function(t, e) {
                        var n = t.account,
                            r = e.params,
                            i = r ? Object(I.a)(n.url, r) : n.url;
                        return Object(b.a)({}, n, {
                            url: i
                        })
                    }
                }))(A),
                C = n(11),
                R = n(19),
                T = n(177),
                L = n.n(T),
                D = n(510);

            function k() {
                var t = Object(r.a)(["\n            query AccountPersonListItemActionFollow($id: ID!) {\n                account(id: $id) {\n                    id\n                    canFollow\n                    isFollowing\n                }\n            }\n        "]);
                return k = function() {
                    return t
                }, t
            }
            var _ = function(t) {
                var e = t.isFollowing,
                    n = t.labelFollowing,
                    r = t.labelFollow,
                    i = t.onFollow,
                    a = t.onUnfollow,
                    u = t.isVisible,
                    c = Object(R.a)(t, ["isFollowing", "labelFollowing", "labelFollow", "onFollow", "onUnfollow", "isVisible"]);
                if (!u) return null;
                var l = e ? n : r;
                return o.a.createElement(s.a.Action, Object(C.a)({
                    onClick: e ? a : i,
                    icon: e ? "check" : null
                }, L()(c, ["priority"])), l)
            };
            _.defaultProps = {
                labelFollow: "Follow",
                labelUnfollow: "Unfollow",
                labelFollowing: "Following",
                isVisible: !0
            };
            var F = Object(a.compose)(Object(c.a)(s.a.Action), Object(u.withQuery)(Object(u.gql)(k()), {
                mapDataToProps: function(t) {
                    var e = t.account,
                        n = e.canFollow,
                        r = e.isFollowing;
                    return {
                        isFollowing: r,
                        isVisible: n || r,
                        labelUnfollow: "Following"
                    }
                }
            }), Object(a.withHandlers)({
                onFollow: function(t) {
                    var e = t.id,
                        n = t.context,
                        r = t.mutate;
                    return function() {
                        r(Object(D.a)({
                            id: e,
                            context: n
                        }))
                    }
                },
                onUnfollow: function(t) {
                    var e = t.id,
                        n = t.mutate;
                    return function() {
                        n(Object(D.d)({
                            id: e
                        }))
                    }
                }
            }))(_);
            n.d(e, "d", function() {
                return S
            }), n.d(e, "e", function() {
                return w
            }), n.d(e, "c", function() {
                return E
            }), n.d(e, "b", function() {
                return y
            }), n.d(e, "f", function() {
                return h
            }), n.d(e, "a", function() {
                return F
            })
        },
        566: function(t, e, n) {
            "use strict";
            var r = n(11),
                i = n(19),
                o = n(5),
                a = n(0),
                u = n.n(a),
                c = n(99),
                s = n(6),
                l = n(26);
            var d = function(t) {
                    var e = t.name,
                        n = t.resolve,
                        d = (t.hmrAccept, t.LoadingComponent),
                        f = t.ErrorComponent,
                        p = ["node", "browser"].includes(t.env) ? t.env : "undefined" == typeof window ? "node" : "browser",
                        m = {
                            module: null,
                            error: null,
                            resolver: null
                        },
                        h = function(t) {
                            function e() {
                                for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                return (e = t.call.apply(t, [this].concat(r)) || this).state = {}, e.updateModule = function(t) {
                                    e.setState({
                                        module: t
                                    })
                                }, e
                            }
                            Object(o.a)(e, t), e.getDerivedStateFromProps = function() {
                                return m.error && "browser" === p ? {
                                    error: m.error
                                } : {
                                    module: m.module
                                }
                            };
                            var a = e.prototype;
                            return a.shouldResolve = function() {
                                return null == m.module && null == m.error && !this.resolving && "undefined" != typeof window
                            }, a.resolveModule = function() {
                                var t = this;
                                this.resolving = !0, this.resolverController = Object(s.f)(function() {
                                    if (null == m.resolver) try {
                                        var t = n();
                                        m.resolver = Promise.resolve(t)
                                    } catch (t) {
                                        m.resolver = Promise.reject(t)
                                    }
                                    return m.resolver
                                }()), this.resolverController.promise.then(function(e) {
                                    m.module = e, "browser" === p && t.updateModule(e), t.resolving = !1
                                }).catch(function(e) {
                                    Object(l.default)(e), ("node" === p || "browser" === p && !f) && console.warn("asyncComponentFactory: Failed to resolve asyncComponent: " + e), m.error = e, "browser" === p && t.setState({
                                        error: e
                                    }), t.resolving = !1
                                })
                            }, a.componentDidMount = function() {
                                this.shouldResolve() && this.resolveModule()
                            }, a.componentDidUpdate = function() {
                                this.shouldResolve() && this.resolveModule()
                            }, a.componentWillUnmount = function() {
                                this.resolverController && this.resolverController.cancel()
                            }, a.render = function() {
                                var t = this.state,
                                    e = t.module,
                                    n = t.error,
                                    o = this.props,
                                    a = o.forwardedRef,
                                    s = Object(i.a)(o, ["forwardedRef"]);
                                if (n) return f ? u.a.createElement(f, Object(r.a)({}, s, {
                                    error: n
                                })) : null;
                                var l = Object(c.default)(e);
                                return l ? u.a.createElement(l, Object(r.a)({}, s, {
                                    ref: a
                                })) : d ? u.a.createElement(d, s) : null
                            }, e
                        }(a.Component);
                    return h.displayName = e || "AsyncComponent", Object(a.forwardRef)(function(t, e) {
                        return u.a.createElement(h, Object(r.a)({}, t, {
                            forwardedRef: e
                        }))
                    })
                },
                f = (n(2), n(144)),
                p = function(t) {
                    return window.Bugsnag && window.Bugsnag.notifyException(t), null
                },
                m = new Map,
                h = Object(a.forwardRef)(function(t, e) {
                    var n = t.resolveComponentInternalDoNotSetOrYouWillBeFired,
                        o = t.renderPreloader,
                        a = void 0 === o ? f.b : o,
                        c = t.src,
                        s = t.hmrAccept,
                        l = Object(i.a)(t, ["resolveComponentInternalDoNotSetOrYouWillBeFired", "renderPreloader", "src", "hmrAccept"]);
                    m.has(c) || m.set(c, d({
                        resolve: n,
                        hmrAccept: s,
                        LoadingComponent: a,
                        ErrorComponent: p
                    }));
                    var h = m.get(c);
                    return u.a.createElement(h, Object(r.a)({}, l, {
                        ref: e
                    }))
                });
            n.d(e, "a", function() {
                return h
            })
        },
        57: function(t, e, n) {
            "use strict";
            n.d(e, "d", function() {
                return a
            }), n.d(e, "b", function() {
                return u
            }), n.d(e, "c", function() {
                return c
            }), n.d(e, "i", function() {
                return s
            }), n.d(e, "f", function() {
                return l
            }), n.d(e, "a", function() {
                return d
            }), n.d(e, "g", function() {
                return f
            }), n.d(e, "h", function() {
                return p
            }), n.d(e, "e", function() {
                return m
            });
            var r = n(1),
                i = n(3),
                o = "/admin/ads/api/adCampaignItems";

            function a(t) {
                var e = t.campaignId,
                    n = t.rgType,
                    r = t.orderId,
                    i = t.lineItemId,
                    a = t.creativeId,
                    u = t.startDate,
                    c = t.endDate,
                    s = t.breakdown;
                return h(o, {
                    query: {
                        campaignId: e,
                        rgType: n,
                        orderId: r,
                        lineItemId: i,
                        creativeId: a,
                        startDate: u,
                        endDate: c,
                        breakdown: s
                    }
                })
            }

            function u(t, e, n, i) {
                return h(o + "/" + t, {
                    method: "POST",
                    body: Object(r.a)({}, i, {
                        campaignId: t,
                        rgType: e,
                        reference: n
                    })
                })
            }

            function c(t, e, n) {
                return h(o + "/" + t + "/" + e, {
                    method: "DELETE",
                    body: n
                })
            }

            function s(t, e) {
                return h(o + "/updateSalesforceMapping", {
                    method: "POST",
                    body: {
                        rgKey: t,
                        salesforceCampaignId: e
                    }
                })
            }

            function l(t, e) {
                return h(o + "/saveActivityMappings", {
                    method: "POST",
                    body: {
                        rgKey: t,
                        activityIds: e
                    }
                })
            }

            function d(t, e, n, i) {
                return h(o + "/createActivity", {
                    method: "POST",
                    body: Object(r.a)({
                        rgKey: t,
                        startDate: e,
                        endDate: n
                    }, i)
                })
            }

            function f(t, e, n) {
                return h(o + "/updateActivity", {
                    method: "PUT",
                    body: Object(r.a)({
                        activityGroupId: t,
                        id: e
                    }, n)
                })
            }

            function p(t) {
                var e = t.campaignId,
                    n = t.rgKey,
                    r = t.creativeIds,
                    i = t.lineItemIds,
                    a = t.startDate,
                    u = t.endDate,
                    c = t.rgType;
                return h(o + "/updateLineItemCreativeAssociations", {
                    method: "PUT",
                    body: {
                        campaignId: e,
                        rgKey: n,
                        creativeIds: r,
                        lineItemIds: i,
                        startDate: a,
                        endDate: u,
                        rgType: c
                    }
                })
            }

            function m(t, e) {
                return h(o + "/loadAssociationDataForAdCampaign", {
                    query: {
                        adCampaignId: t,
                        rgKey: e
                    }
                })
            }

            function h(t, e) {
                return Object(i.default)(t, e).then(function(t) {
                    var e = t.result;
                    return Promise.resolve(e)
                })
            }
        },
        572: function(t, e, n) {
            "use strict";

            function r(t) {
                if (!t) return "";
                var e = Object.keys(t).map(function(e) {
                    return ("contexts" === e ? "_iepl[" + e + "][]" : "_iepl[" + e + "]") + "=" + t[e]
                }).join("&");
                return encodeURI("?" + e)
            }
            n.d(e, "a", function() {
                return r
            })
        },
        575: function(t, e, n) {
            "use strict";
            n.d(e, "f", function() {
                return o
            }), n.d(e, "e", function() {
                return a
            }), n.d(e, "a", function() {
                return u
            }), n.d(e, "d", function() {
                return c
            }), n.d(e, "b", function() {
                return s
            }), n.d(e, "c", function() {
                return l
            }), n.d(e, "i", function() {
                return d
            }), n.d(e, "k", function() {
                return f
            }), n.d(e, "l", function() {
                return p
            }), n.d(e, "j", function() {
                return m
            }), n.d(e, "h", function() {
                return h
            }), n.d(e, "g", function() {
                return b
            });
            var r = n(218),
                i = n(6),
                o = "REPLACE_URL_WITH_ENTITY",
                a = "INSERT_ENTITY",
                u = "",
                c = "typing",
                s = "submitted",
                l = "submittedQuality";

            function d(t) {
                if (Object(i.h)(t)) return !0;
                return /(http|https):\/\/(\w+:?\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/.test(t)
            }

            function f(t, e, n, r) {
                return g(t, e, r, n)
            }

            function p(t, e, n, i) {
                var o = function(t, e) {
                    var n = e.getSelection();
                    if (!n.isCollapsed() || !n.getHasFocus()) return null;
                    var i = n.getEndKey(),
                        o = e.getCurrentContent().getBlockForKey(i),
                        a = n.getEndOffset(),
                        u = o.getText().slice(0, a);
                    if (void 0 === u || 0 === u.length) return null;
                    var c = u.indexOf(t);
                    if (-1 === c) return null;
                    return r.SelectionState.createEmpty(i).merge({
                        anchorOffset: c,
                        focusOffset: c + t.length
                    })
                }(e, t);
                if (o) return g(t, o, i, n)
            }

            function m(t, e, n) {
                var i = function(t, e) {
                    var n = e.getCurrentContent().getEntity(t).getData().publicationTitle,
                        i = e.getSelection(),
                        o = i.getEndKey(),
                        a = e.getCurrentContent().getBlockForKey(o),
                        u = i.getEndOffset(),
                        c = a.getText().slice(0, u);
                    if (void 0 === c || 0 === c.length) return null;
                    var s = c; - 1 !== s.indexOf("...") && (s = s.substring(0, s.indexOf("...")));
                    var l = n.indexOf(s);
                    if (-1 === l) return null;
                    return r.SelectionState.createEmpty(o).merge({
                        anchorOffset: l,
                        focusOffset: l + c.length
                    })
                }(e, t);
                if (i) return g(t, i, n)
            }

            function h(t, e) {
                var n = r.Modifier.insertText(t.getCurrentContent(), t.getSelection(), e, null, null),
                    i = n.merge({
                        selectionAfter: n.getSelectionAfter().set("hasFocus", !0)
                    });
                return r.EditorState.push(t, i, "insert-characters")
            }

            function b(t, e, n) {
                var i = r.Modifier.insertText(t.getCurrentContent(), t.getSelection(), n, null, e),
                    o = i.merge({
                        selectionAfter: i.getSelectionAfter().set("hasFocus", !0)
                    });
                return h(r.EditorState.push(t, o, "apply-entity"), " ")
            }

            function g(t, e, n, i) {
                void 0 === i && (i = null);
                var o = r.Modifier.replaceText(t.getCurrentContent(), e, n, null, i),
                    a = o.merge({
                        selectionAfter: o.getSelectionAfter().set("hasFocus", !0)
                    });
                return h(r.EditorState.push(t, a, "apply-entity"), " ")
            }
        },
        59: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return i
            });
            var r = "alertStack",
                i = function(t, e) {
                    return e ? t()[r].get(e) : t()[r]
                }
        },
        599: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return i
            });
            var r = [];

            function i(t, e) {
                return void 0 === e && (e = t), r[t] = r[t] || 0, "" + e + r[t]++
            }
        },
        6: function(t, e, n) {
            "use strict";
            n.d(e, "b", function() {
                return o
            }), n.d(e, "c", function() {
                return a
            }), n.d(e, "g", function() {
                return u
            }), n.d(e, "j", function() {
                return c
            }), n.d(e, "f", function() {
                return s
            }), n.d(e, "h", function() {
                return l
            }), n.d(e, "d", function() {
                return d
            }), n.d(e, "a", function() {
                return f
            }), n.d(e, "e", function() {
                return p
            }), n.d(e, "i", function() {
                return m
            });
            var r = n(27);
            n.d(e, "l", function() {
                return r.a
            });
            var i = n(197);
            n.d(e, "k", function() {
                return i.b
            });
            var o = function(t) {
                    if ("function" == typeof t) {
                        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                        t.apply(void 0, n)
                    }
                },
                a = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return function() {
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return e.filter(function(t) {
                            return t
                        }).forEach(function(t) {
                            return t.apply(void 0, n)
                        })
                    }
                },
                u = "undefined" != typeof navigator && /(android)/i.test(navigator.userAgent),
                c = function(t) {
                    return function(e) {
                        return "@@rg/" + t + "/" + e
                    }
                },
                s = function(t) {
                    var e = !1;
                    return {
                        promise: t.then(function(t) {
                            return e ? Promise.reject({
                                isCanceled: !0
                            }) : t
                        }).catch(function(t) {
                            return e ? Promise.reject({
                                isCanceled: !0
                            }) : Promise.reject(t)
                        }),
                        cancel: function() {
                            e = !0
                        }
                    }
                },
                l = function(t) {
                    return ["devm.rgoffice.net", "www.rgoffice.net", "www.researchgate.net", "www.rgbeta.net", "community.kluster-01.rgoffice.net"].some(function(e) {
                        return 0 === t.indexOf("https://" + e + "/")
                    })
                },
                d = function(t, e) {
                    window.Bugsnag && window.Bugsnag.notifyException(t, e)
                };
            var f = "·";

            function p(t, e) {
                var n, r = t.split(".").reverse(),
                    i = r[0];
                return r.slice(1).reduce(function(t, e) {
                    var n;
                    return (n = {})[e] = t, n
                }, ((n = {})[i] = e, n))
            }
            var m = function() {
                return !0
            }
        },
        60: function(t, e, n) {
            "use strict";
            n(2);
            var r = n(0),
                i = n.n(r),
                o = n(66),
                a = n(217),
                u = function(t) {
                    var e = t.title,
                        n = t.description,
                        r = t.color;
                    return i.a.createElement(o.a, {
                        title: e,
                        description: n,
                        color: r
                    }, i.a.createElement(a.a, {
                        size: "l",
                        identifier: "check-circle"
                    }))
                };
            u.defaultProps = {
                description: "",
                color: "green"
            }, e.a = u
        },
        62: function(t, e, n) {
            "use strict";
            n.d(e, "b", function() {
                return r
            }), n.d(e, "c", function() {
                return i
            }), n.d(e, "e", function() {
                return o
            }), n.d(e, "d", function() {
                return a
            }), n.d(e, "f", function() {
                return u
            }), n.d(e, "g", function() {
                return c
            }), n.d(e, "a", function() {
                return s
            }), n.d(e, "i", function() {
                return l
            }), n.d(e, "j", function() {
                return d
            }), n.d(e, "l", function() {
                return f
            }), n.d(e, "k", function() {
                return p
            }), n.d(e, "m", function() {
                return m
            }), n.d(e, "n", function() {
                return h
            }), n.d(e, "h", function() {
                return b
            });
            var r = "SET_ANSWER_1",
                i = "SET_ANSWER_2",
                o = "SET_ANSWER_3",
                a = "SET_ANSWER_2_OTHER_TEXT",
                u = "SET_ANSWER_3_OTHER_TEXT",
                c = "UPDATE_ANSWER_4_PROOF_DOCUMENT",
                s = "ADD_ANSWER_4_PROOF_DOCUMENT";

            function l(t) {
                return {
                    type: r,
                    answer: t
                }
            }

            function d(t) {
                return {
                    type: i,
                    answer: t
                }
            }

            function f(t) {
                return {
                    type: o,
                    answer: t
                }
            }

            function p(t) {
                return {
                    type: a,
                    answerOtherText: t
                }
            }

            function m(t) {
                return {
                    type: u,
                    answerOtherText: t
                }
            }

            function h(t, e) {
                return {
                    type: c,
                    documentId: t,
                    document: e
                }
            }

            function b(t) {
                return {
                    type: s,
                    documentId: t
                }
            }
        },
        620: function(t, e, n) {
            "use strict";
            n(2);
            var r = n(0),
                i = n.n(r),
                o = n(145),
                a = n.n(o),
                u = n(123),
                c = n(110),
                s = n(570),
                l = n.n(s),
                d = function(t) {
                    var e = t.iconText ? i.a.createElement("span", {
                            className: "file-extension"
                        }, t.iconText) : null,
                        n = a()("project-updates-attachment-item attachment-list-item", t.className, {
                            "is-inactive": t.isInactive
                        }),
                        r = a()("item-thumbnail", t.iconClass),
                        o = t.headline;
                    o = t.titleUrl ? i.a.createElement(u.a, {
                        href: t.titleUrl,
                        theme: "bare"
                    }, o) : t.isFilePreviewEnabled ? i.a.createElement(u.a, {
                        onClick: t.viewAction,
                        theme: "bare"
                    }, o) : l()(o, {
                        length: 130
                    }), e = t.isFilePreviewEnabled ? i.a.createElement(u.a, {
                        onClick: t.viewAction,
                        theme: "bare"
                    }, i.a.createElement("span", {
                        className: "ico-file-thumbnail"
                    }, e)) : i.a.createElement("span", {
                        className: "ico-file-thumbnail"
                    }, e);
                    var s = [t.subline].concat(t.actions).map(function(t, e) {
                            if (t) return i.a.createElement(c.a.Item, {
                                key: e
                            }, t)
                        }),
                        d = t.isInactive || !t.attachmentId ? null : i.a.createElement("input", {
                            type: "hidden",
                            name: t.attachmentFieldName + "[]",
                            value: t.attachmentId
                        });
                    return i.a.createElement("div", {
                        className: n
                    }, d, i.a.createElement("div", {
                        className: r
                    }, e), i.a.createElement("div", {
                        className: "item-info"
                    }, i.a.createElement("div", {
                        className: "item-title"
                    }, o), i.a.createElement(c.a, {
                        type: "inline",
                        spacing: "xxs"
                    }, s)))
                };
            d.defaultProps = {
                attachmentFieldName: "attachments"
            }, e.a = d
        },
        63: function(t, e, n) {
            "use strict";
            var r = n(0),
                i = n.n(r),
                o = n(20),
                a = n(26),
                u = n(66),
                c = n(12),
                s = n(3),
                l = n(17),
                d = n.n(l),
                f = n(23);

            function p() {
                var t = Object(c.a)(["/api/sharecontent/declineCoauthorMatch"]);
                return p = function() {
                    return t
                }, t
            }

            function m() {
                var t = Object(c.a)(["/api/sharecontent/confirmCoauthorMatch"]);
                return m = function() {
                    return t
                }, t
            }

            function h() {
                var t = Object(c.a)(["/api/sharecontent/emailShare"]);
                return h = function() {
                    return t
                }, t
            }

            function b() {
                var t = Object(c.a)(["/api/sharecontent/share"]);
                return b = function() {
                    return t
                }, t
            }
            n.d(e, "a", function() {
                return g
            }), n.d(e, "b", function() {
                return v
            }), n.d(e, "c", function() {
                return y
            }), n.d(e, "d", function() {
                return I
            }), n.d(e, "e", function() {
                return O
            }), n.d(e, "f", function() {
                return E
            }), n.d(e, "g", function() {
                return A
            }), n.d(e, "i", function() {
                return S
            }), n.d(e, "j", function() {
                return j
            }), n.d(e, "l", function() {
                return w
            }), n.d(e, "h", function() {
                return C
            }), n.d(e, "m", function() {
                return R
            }), n.d(e, "k", function() {
                return T
            });
            var g = "CLAIM_SUGGESTION_NO",
                v = "CLAIM_SUGGESTION_SKIP",
                y = "CLAIM_SUGGESTION_YES",
                I = "EMAIL_INVITE_SENT",
                O = "EMAIL_INVITE_SKIP",
                E = "PEOPLE_SELECTOR_SHARED",
                A = "SET_IS_BUSY";

            function P(t) {
                return {
                    type: A,
                    isBusy: t
                }
            }

            function S(t, e, n, r) {
                return function(c) {
                    c(P(!0)),
                        function(t, e, n) {
                            return Object(s.default)(Object(f.a)(m()), {
                                method: "POST",
                                body: {
                                    suggestionId: t,
                                    rgKey: e,
                                    context: n
                                }
                            }).then(d()("result"))
                        }(e, n, r).then(function() {
                            c({
                                type: y,
                                key: t
                            }), c(P(!1))
                        }).catch(function(t) {
                            Object(a.default)(t), c(Object(o.pushAlert)(function() {
                                return i.a.createElement(u.a, {
                                    color: "red",
                                    title: t.errors ? t.errors[0] : t
                                })
                            })), c(P(!1))
                        })
                }
            }

            function j(t, e) {
                return function(n) {
                    n(P(!0)),
                        function(t) {
                            return Object(s.default)(Object(f.a)(p()), {
                                method: "POST",
                                body: {
                                    suggestionId: t
                                }
                            }).then(d()("result"))
                        }(e).then(function() {
                            n({
                                type: g,
                                key: t
                            }), n(P(!1))
                        }).catch(function(t) {
                            Object(a.default)(t), n(Object(o.pushAlert)(function() {
                                return i.a.createElement(u.a, {
                                    color: "red",
                                    title: t.errors ? t.errors[0] : t
                                })
                            })), n(P(!1))
                        })
                }
            }

            function w(t) {
                return {
                    type: v,
                    key: t
                }
            }

            function C(t, e, n, r, c, l) {
                return function(t) {
                    t(P(!0)),
                        function(t, e, n, r, i) {
                            return t = JSON.stringify(t), Object(s.default)(Object(f.a)(h()), {
                                method: "POST",
                                body: {
                                    shareTarget: t,
                                    rgKey: e,
                                    context: n,
                                    invitationContext: r,
                                    invitationChannel: i
                                }
                            }).then(d()("result"))
                        }(e, n, r, c, l).then(function() {
                            t({
                                type: I,
                                key: e.key
                            }), t(P(!1))
                        }).catch(function(e) {
                            Object(a.default)(e), t(Object(o.pushAlert)(function() {
                                return i.a.createElement(u.a, {
                                    color: "red",
                                    title: e.errors ? e.errors[0] : e
                                })
                            })), t(P(!1))
                        })
                }
            }

            function R(t) {
                return function(e) {
                    e({
                        type: O,
                        key: t
                    })
                }
            }

            function T(t, e, n, r) {
                return void 0 === r && (r = []),
                    function(c) {
                        c(P(!0)),
                            function(t, e, n, r) {
                                return t = JSON.stringify(t), Object(s.default)(Object(f.a)(b()), {
                                    method: "POST",
                                    body: {
                                        shareTargets: t,
                                        rgKey: e,
                                        context: n,
                                        viewIds: r
                                    }
                                }).then(d()("result"))
                            }(t, e, n, r).then(function(t) {
                                c({
                                    type: E,
                                    shareTargets: t.shareTargets
                                }), c(P(!1))
                            }).catch(function(t) {
                                Object(a.default)(t), c(Object(o.pushAlert)(function() {
                                    return i.a.createElement(u.a, {
                                        color: "red",
                                        title: t.errors ? t.errors[0] : t
                                    })
                                })), c(P(!1))
                            })
                    }
            }
        },
        64: function(t, e, n) {
            "use strict";
            var r = n(3);
            n.d(e, "a", function() {
                return i
            }), n.d(e, "b", function() {
                return o
            }), n.d(e, "d", function() {
                return a
            }), n.d(e, "c", function() {
                return u
            });
            var i = "UPDATE_REACH_FIELD",
                o = "UPDATE_REACH_FIELDS";

            function a(t) {
                return {
                    type: o,
                    updates: t
                }
            }

            function u(t, e) {
                return function() {
                    return function(t, e) {
                        return Object(r.default)(e, {
                            method: "POST",
                            body: {
                                data: t
                            }
                        }).then(function(t) {
                            return t.success
                        })
                    }(t, e)
                }
            }
        },
        644: function(t, e, n) {
            "use strict";
            var r = n(5),
                i = n(0),
                o = n.n(i),
                a = (n(2), n(1977)),
                u = n(1),
                c = n(12),
                s = n(15),
                l = n(11),
                d = n(30),
                f = n(123),
                p = n(29),
                m = n(110),
                h = n(52),
                b = n.n(h),
                g = n(94),
                v = n.n(g),
                y = n(22),
                I = n.n(y),
                O = (n(1396), "converse-message-inline-publication"),
                E = new I.a({
                    name: "" + O
                }),
                A = new I.a({
                    name: O + "__meta"
                }),
                P = new I.a({
                    name: "publication-type-badge"
                }),
                S = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }
                    Object(r.a)(e, t);
                    var n = e.prototype;
                    return n.getIcon = function() {
                        return this.props.hasPublicFulltexts ? o.a.createElement("span", A("list-item--ico", null, "ico-publication-fulltext")) : null
                    }, n.getFullTextButton = function() {
                        if (this.props.deactivateLinks) return null;
                        var t = this.props.hasPublicFulltexts ? "View full-text" : "View";
                        return o.a.createElement(d.a, {
                            href: this.props.url,
                            color: "blue",
                            theme: "bare",
                            type: "button"
                        }, t)
                    }, n.render = function() {
                        var t = this.props,
                            e = t.title,
                            n = t.url,
                            r = t.publicationType,
                            i = t.publicationDate,
                            a = t.journal,
                            u = t.hasPublicFulltexts,
                            c = t.commentCount,
                            s = t.incomingCitationCount,
                            d = t.deactivateLinks,
                            h = o.a.createElement(f.a, {
                                className: "js-publication-title-link ga-publication-item",
                                theme: "bare",
                                href: n
                            }, e);
                        return d && (h = e), o.a.createElement("div", E(), o.a.createElement(p.a, Object(l.a)({}, E("title"), {
                            size: "m",
                            tag: "h5"
                        }), h), o.a.createElement("div", A(), r ? o.a.createElement("span", P("", u ? "green" : "grey", "lf"), r) : null, o.a.createElement(m.a, Object(l.a)({
                            type: "inline",
                            spacing: "none"
                        }, A("details", "lf")), u ? o.a.createElement(m.a.Item, null, "Full-text") : null, i ? o.a.createElement(m.a.Item, null, v.a.utc(i).format("MMM YYYY")) : null, a && a.title ? o.a.createElement(m.a.Item, null, a.title.length > 15 ? a.title.substring(0, 15).concat("...") : a.title) : null)), o.a.createElement("div", E("footer"), o.a.createElement("div", E("footer-item"), this.getFullTextButton()), o.a.createElement("div", E("footer-item"), o.a.createElement(m.a, {
                            type: "inline",
                            spacing: "none"
                        }, c > 0 ? o.a.createElement(m.a.Item, null, b()("Comment", c, !0)) : null, o.a.createElement(m.a.Item, null, b()("Citation", s, !0))))))
                    }, e
                }(i.Component);
            S.displayName = "PublicationTooltip";
            var j = S;

            function w() {
                var t = Object(c.a)(["\n        query GraphQLPublicationTooltip($id: ID!) {\n            publication(id: $id) {\n                id\n                title\n                url\n                publicationType: displayablePublicationType\n                publicationDate\n                hasPublicFulltexts\n                commentCount\n                incomingCitationCount\n                journal {\n                    id\n                    title\n                }\n            }\n        }\n    "]);
                return w = function() {
                    return t
                }, t
            }
            var C = function(t) {
                function e() {
                    return t.apply(this, arguments) || this
                }
                Object(r.a)(e, t);
                var n = e.prototype;
                return n.componentDidMount = function() {
                    this.props.onComponentDidMount()
                }, n.render = function() {
                    return o.a.createElement(j, this.props)
                }, e
            }(i.Component);
            C.displayName = "GraphQLPublicationTooltip";
            var R = Object(s.withQuery)(Object(s.gql)(w()), {
                    mapDataToProps: function(t) {
                        var e = t.publication;
                        return Object(u.a)({}, e)
                    },
                    preloader: function() {
                        return o.a.createElement("div", {
                            className: "rendering-small"
                        })
                    }
                })(C),
                T = function(t) {
                    function e() {
                        for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(r)) || this).handleTooltipLoaded = function() {
                            e.forceUpdate()
                        }, e
                    }
                    return Object(r.a)(e, t), e.prototype.render = function() {
                        var t = this.props,
                            e = t.id,
                            n = t.target;
                        return o.a.createElement(a.a, {
                            target: n,
                            color: "white",
                            position: "above-left",
                            scope: "global"
                        }, o.a.createElement(R, {
                            id: e,
                            onComponentDidMount: this.handleTooltipLoaded
                        }))
                    }, e
                }(i.Component);
            T.displayName = "InlinePublicationTooltip";
            e.a = T
        },
        656: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return o
            });
            var r = n(218),
                i = n(599);

            function o(t) {
                return void 0 === t && (t = ""), Object(r.convertFromRaw)({
                    entityMap: {},
                    blocks: [{
                        key: Object(i.a)("djsk"),
                        text: t,
                        type: "unstyled",
                        depth: 0,
                        inlineStyleRanges: [],
                        entityRanges: [],
                        data: {}
                    }]
                })
            }
        },
        657: function(t, e, n) {
            "use strict";
            n.d(e, "k", function() {
                return r
            }), n.d(e, "h", function() {
                return i
            }), n.d(e, "j", function() {
                return o
            }), n.d(e, "i", function() {
                return a
            }), n.d(e, "d", function() {
                return u
            }), n.d(e, "e", function() {
                return c
            }), n.d(e, "c", function() {
                return s
            }), n.d(e, "g", function() {
                return l
            }), n.d(e, "f", function() {
                return d
            }), n.d(e, "a", function() {
                return f
            }), n.d(e, "b", function() {
                return p
            });
            var r = "search",
                i = "bookmarks",
                o = "saved-searches",
                a = "recommendations",
                u = "-score",
                c = "relevanceProfile",
                s = "nextCloseDate",
                l = "-creationDate",
                d = "-awardCeilingNormalized",
                f = "dbt",
                p = "dst"
        },
        68: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return s
            }), n.d(e, "b", function() {
                return l
            }), n.d(e, "c", function() {
                return d
            }), n.d(e, "d", function() {
                return f
            }), n.d(e, "f", function() {
                return p
            }), n.d(e, "e", function() {
                return m
            }), n.d(e, "h", function() {
                return g
            }), n.d(e, "g", function() {
                return y
            }), n.d(e, "i", function() {
                return I
            }), n.d(e, "j", function() {
                return O
            }), n.d(e, "k", function() {
                return E
            });
            var r = n(1),
                i = n(0),
                o = n.n(i),
                a = n(3),
                u = n(20),
                c = n(66),
                s = "APPROVE_AUTHOR_MAPPING_SUGGESTION",
                l = "HIDE_AUTHOR_MAPPING_SUGGESTION",
                d = "IGNORE_AUTHOR_MAPPING_SUGGESTION",
                f = "IGNORE_AUTHOR_MAPPING_SUGGESTIONS_FOR_ACCOUNT_ID",
                p = "SET_REQUEST_IN_PROGRESS",
                m = "MERGE_NEW_SUGGESTIONS_IN_STATE",
                h = "/api/u2u/approve",
                b = "/api/u2u/delete",
                g = function(t, e) {
                    return t + e
                },
                v = function(t, e) {
                    var n = {
                        viewId: e
                    };
                    return t(A(!0)),
                        function(t, e) {
                            return e.body = Object(r.a)({}, e.body, n), Object(a.default)(t, e)
                        }
                };

            function y(t, e, n, r) {
                return void 0 === r && (r = null),
                    function(i) {
                        v(i, n)(h, {
                            method: "PATCH",
                            body: {
                                accountMappingSuggesterId: e,
                                context: r
                            }
                        }).then(function() {
                            i(A(!1))
                        }).catch(function(t) {
                            var e = t.errors;
                            i(Object(u.pushAlert)(function() {
                                return o.a.createElement(c.a, {
                                    color: "red",
                                    title: e[0]
                                })
                            })), i(A(!1))
                        }), setTimeout(function() {
                            return i({
                                type: s,
                                targetAccountId: t,
                                accountMappingSuggesterId: e
                            })
                        }, 0)
                    }
            }

            function I(t, e, n, r) {
                return void 0 === r && (r = null),
                    function(i) {
                        v(i, n)(b, {
                            method: "DELETE",
                            body: {
                                accountMappingSuggesterId: e,
                                context: r
                            }
                        }).then(function() {
                            i(A(!1))
                        }).catch(function(t) {
                            var e = t.errors;
                            i(Object(u.pushAlert)(function() {
                                return o.a.createElement(c.a, {
                                    color: "red",
                                    title: e[0]
                                })
                            })), i(A(!1))
                        }), setTimeout(function() {
                            return i({
                                type: l,
                                targetAccountId: t,
                                accountMappingSuggesterId: e
                            })
                        }, 0)
                    }
            }

            function O(t, e, n, r) {
                return void 0 === r && (r = null),
                    function(i) {
                        v(i, n)(b, {
                            method: "DELETE",
                            body: {
                                accountMappingSuggesterId: e,
                                ignore: !0,
                                context: r
                            }
                        }).then(function() {
                            i(A(!1))
                        }).catch(function(t) {
                            var e = t.errors;
                            i(Object(u.pushAlert)(function() {
                                return o.a.createElement(c.a, {
                                    color: "red",
                                    title: e[0]
                                })
                            })), i(A(!1))
                        }), setTimeout(function() {
                            return i({
                                type: d,
                                targetAccountId: t,
                                accountMappingSuggesterId: e
                            })
                        }, 0)
                    }
            }

            function E(t, e, n) {
                return void 0 === n && (n = null),
                    function(r) {
                        v(r, e)(b, {
                            method: "DELETE",
                            body: {
                                targetAccountId: t,
                                ignore: !0,
                                context: n
                            }
                        }).then(function() {
                            r(A(!1))
                        }).catch(function(t) {
                            var e = t.errors;
                            r(Object(u.pushAlert)(function() {
                                return o.a.createElement(c.a, {
                                    color: "red",
                                    title: e[0]
                                })
                            })), r(A(!1))
                        }), setTimeout(function() {
                            return r({
                                type: f,
                                targetAccountId: t
                            })
                        }, 0)
                    }
            }

            function A(t) {
                return function(e) {
                    return e({
                        type: p,
                        isRequestInProgress: t
                    })
                }
            }
        },
        7: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return o
            }), n.d(e, "b", function() {
                return a
            });
            var r = n(56),
                i = n.n(r),
                o = "@@rg/MERGE_STATE";

            function a(t) {
                return function(e) {
                    i()(t) || e({
                        type: o,
                        data: t
                    })
                }
            }
        },
        70: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return a
            }), n.d(e, "c", function() {
                return u
            }), n.d(e, "b", function() {
                return c
            });
            var r = n(3),
                i = n(239),
                o = n.n(i);

            function a(t, e, n, i) {
                return Object(r.default)("application.GoogleDfpSlot.blacklistCreative.html", {
                    method: "DELETE",
                    body: {
                        slotId: t,
                        creativeId: e,
                        lineItemId: n,
                        contentKey: i
                    }
                }).then(function(t) {
                    return t.result
                })
            }

            function u(t, e, n, i, o) {
                return Object(r.default)("application.GoogleDfpSlot.markRelevantAd.html", {
                    method: "POST",
                    body: {
                        slotId: t,
                        creativeId: e,
                        lineItemId: n,
                        advertiserId: i,
                        contentKey: o
                    }
                }).then(function(t) {
                    return t.result
                })
            }

            function c(t, e) {
                return Object(r.default)("application.LotameSlot.getDmpData.html", {
                    method: "GET",
                    query: {
                        rgKey: e
                    }
                }).then(function(e) {
                    var n = e.result;
                    if ("object" == typeof _cc11780 && n.length > 0) {
                        var r, i = o()(n, function(e) {
                            var n = e.key,
                                r = e.value;
                            return ["act", t + "_" + n + " : " + r]
                        });
                        (r = _cc11780).bcpw.apply(r, i)
                    }
                })
            }
        },
        71: function(t, e, n) {
            "use strict";
            n.d(e, "d", function() {
                return m
            }), n.d(e, "e", function() {
                return h
            }), n.d(e, "c", function() {
                return b
            }), n.d(e, "g", function() {
                return g
            }), n.d(e, "a", function() {
                return v
            }), n.d(e, "f", function() {
                return y
            }), n.d(e, "b", function() {
                return I
            });
            var r = n(1),
                i = n(3),
                o = n(177),
                a = n.n(o),
                u = n(17),
                c = n.n(u),
                s = n(48),
                l = n.n(s),
                d = "/converse/api/message",
                f = d + "/reply",
                p = function(t) {
                    var e = t.struct;
                    return JSON.stringify(e)
                };

            function m(t, e) {
                var n = void 0 === e ? {} : e,
                    r = n.offset,
                    o = n.limit;
                return Object(i.default)(f + "/" + t, {
                    query: {
                        offset: r,
                        limit: o
                    }
                }).then(c()("result"))
            }

            function h(t, e, n, r) {
                void 0 === r && (r = []);
                var o = a()(t, ["rootId", "parentId", "externalType", "body", "files", "highlightText", "highlightPath", "title", "contributors", "attachmentsRgKeys"]),
                    u = p(t);
                return Object(i.default)(d, {
                    method: "POST",
                    body: l()(o, {
                        structData: u,
                        context: e,
                        viewIds: n,
                        metadata: r
                    })
                }).then(c()("result"))
            }

            function b(t, e) {
                return Object(i.default)(d + "/" + t + "/requestDraft", {
                    method: "POST",
                    query: {
                        messageId: t,
                        context: e
                    }
                }).then(c()("result"))
            }

            function g(t, e, n) {
                var o = t.messageId,
                    a = t.title,
                    u = t.body,
                    s = t.structData,
                    l = t.linkIds,
                    f = t.files,
                    p = t.contributors;
                return Object(i.default)(d + "/" + o, {
                    method: "PUT",
                    body: Object(r.a)({
                        messageId: o
                    }, a && {
                        title: a
                    }, p && {
                        contributors: p
                    }, {
                        body: u,
                        structData: JSON.stringify(s),
                        linkIds: l,
                        files: f,
                        context: e,
                        viewIds: n
                    })
                }).then(c()("result"))
            }

            function v(t, e) {
                return Object(i.default)(d + "/" + t, {
                    method: "DELETE",
                    body: {
                        context: e
                    }
                }).then(c()("result"))
            }

            function y(t, e, n, r) {
                void 0 === r && (r = []);
                var o = a()(t, ["replyTo", "body", "files"]),
                    u = p(t);
                return Object(i.default)(f, {
                    method: "POST",
                    body: l()(o, {
                        structData: u,
                        context: e,
                        viewIds: n,
                        _iepl: r
                    })
                }).then(c()("result"))
            }

            function I(t, e) {
                return Object(i.default)(f + "/" + t, {
                    method: "DELETE",
                    body: {
                        context: e
                    }
                }).then(c()("result"))
            }
        },
        72: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return o
            }), n.d(e, "b", function() {
                return a
            }), n.d(e, "c", function() {
                return u
            }), n.d(e, "d", function() {
                return c
            });
            var r = n(6),
                i = Object(r.j)("globalPublications"),
                o = i("ACTION_ADD_MORE_GLOBAL_PUBLICATIONS"),
                a = i("ACTION_SET_PUBLICATION_HAS_FULLTEXT");

            function u(t) {
                return {
                    type: o,
                    publications: t
                }
            }

            function c(t) {
                var e = t.publicationUid,
                    n = t.hasFulltext;
                return {
                    type: a,
                    payload: {
                        publicationUid: e,
                        hasFulltext: n
                    }
                }
            }
        },
        73: function(t, e, n) {
            "use strict";
            var r = n(55),
                i = n.n(r),
                o = n(3);

            function a(t, e) {
                return Object(o.default)("projects.ProjectFollowersFullList.loadMore.html", {
                    method: "GET",
                    query: {
                        projectId: t,
                        offset: e
                    }
                }).then(i()("result"))
            }
            var u = n(45);
            n.d(e, "b", function() {
                return c
            }), n.d(e, "a", function() {
                return s
            }), n.d(e, "c", function() {
                return l
            }), n.d(e, "d", function() {
                return d
            }), n.d(e, "e", function() {
                return f
            });
            var c = "BEGIN_LOADING_FOLLOWERS",
                s = "ADD_MORE_FOLLOWERS",
                l = "REPLACE_FOLLOWERS";

            function d(t, e) {
                return function(n) {
                    return n({
                        type: c
                    }), a(e, t).then(function(t) {
                        n(Object(u.b)(t.accounts)), n({
                            type: s,
                            followerAccountIds: t[e].followerAccountIds,
                            projectId: e,
                            thisWeekFollowerAccountIds: t[e].thisWeekFollowerAccountIds
                        })
                    })
                }
            }

            function f(t) {
                return function(e) {
                    return e({
                        type: c
                    }), a(t, 0).then(function(n) {
                        e(Object(u.b)(n.accounts)), e({
                            type: l,
                            data: n[t],
                            projectId: t
                        })
                    })
                }
            }
        },
        74: function(t, e, n) {
            "use strict";
            n.d(e, "f", function() {
                return o
            }), n.d(e, "a", function() {
                return a
            }), n.d(e, "d", function() {
                return u
            }), n.d(e, "b", function() {
                return c
            }), n.d(e, "e", function() {
                return s
            }), n.d(e, "c", function() {
                return l
            }), n.d(e, "g", function() {
                return f
            });
            n(3);
            var r = n(77),
                i = n.n(r),
                o = "NOTIFICATION_COUNTERS_UPDATED",
                a = "NOTIFICATION_COUNTERS_ERROR",
                u = "NOTIFICATION_COUNTERS_REQUEST_COUNTER_WAS_SEEN",
                c = "NOTIFICATION_COUNTERS_MESSAGE_COUNTER_WAS_SEEN",
                s = "NOTIFICATION_COUNTERS_SUBSCRIPTION_COUNTER_WAS_SEEN",
                l = "NOTIFICATION_COUNTERS_REQUEST_COUNTER_HIDE",
                d = "notificationCounters:1";

            function f() {
                i.a.remove(d)
            }
        },
        75: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(69),
                i = n.n(r),
                o = n(134),
                a = n(85),
                u = n(96),
                c = n(1),
                s = n(169),
                l = n.n(s),
                d = n(201),
                f = n.n(d),
                p = n(7),
                m = n(15),
                h = n(28),
                b = n.n(h),
                g = n(10),
                v = null;

            function y(t, e, n, r) {
                return b()(!g.Iterable.isIterable(r), "An Immutable data structure was encountered, for which\nan ACTION_MERGE_STATE handler was not written. Please take\na minute to read through the Wiki page about ImmutableJS:\n\nhttp://bit.ly/merge-state\n\nReducer shape:\n" + JSON.stringify(r, null, 2)), f()(t) && f()(e) ? l()(Object(c.a)({}, t), e, y) : Array.isArray(t) && Array.isArray(e) && e.length > 0 ? l()([].concat(t), e, y) : void 0
            }

            function I(t) {
                var e = Object(u.combineReducers)(t),
                    n = function(t) {
                        return v || (v = Object.keys(t).reduce(function(e, n) {
                            var r = t[n];
                            return r.isImmutable ? (e[n] = r.initialState, e) : e
                        }, {}))
                    }(t),
                    r = function(n, r) {
                        return r.type === p.a && r.data ? Object.keys(t).reduce(function(e, n) {
                            var i, o = r.data[n];
                            if (!o) return e;
                            var a, u = t[n],
                                s = e[n];
                            return "rigel" === n ? Object(c.a)({}, e, {
                                rigel: Object(c.a)({}, s, {
                                    store: Object(m.mergeNormalizedStore)(s.store, r.data.rigel.store)
                                })
                            }) : u && u.hasCustomMerger ? Object(c.a)({}, e, ((a = {})[n] = u(s, r), a)) : Object(c.a)({}, e, ((i = {})[n] = l()(s, o, y), i))
                        }, Object.assign({}, n)) : e(n, r)
                    };
                return r.setInitialIterables = function(t) {
                    if (t) return Object.keys(n).reduce(function(t, e) {
                        var r = n[e],
                            i = t[e];
                        return t[e] = i ? r.mergeDeep(i) : r, t
                    }, t)
                }, r
            }
            var O = n(230),
                E = n.n(O),
                A = n(48),
                P = n.n(A),
                S = n(26),
                j = n(2815),
                w = n(99);

            function C() {
                return P()((t = {}, (e = n(250)).keys().forEach(function(n) {
                    var r = n.match(/([^\/]+)\/reducers\/([^\/]+)\.js$/),
                        i = r[1],
                        o = r[2],
                        a = i + E()(o);
                    try {
                        t[a] = Object(w.default)(e(n))
                    } catch (t) {
                        Object(S.default)("Could not load reducer: " + n)
                    }
                }), t), function() {
                    var t = {},
                        e = n(334);
                    return e.keys().forEach(function(n) {
                        var r = n.match(/([^\/]+)\.js$/)[1];
                        try {
                            t[r] = Object(w.default)(e(n))
                        } catch (t) {
                            Object(S.default)("Could not load reducer: " + n)
                        }
                    }), t
                }(), {
                    form: j.a,
                    rigel: m.defaultContext.createReducer()
                });
                var t, e
            }
            var R = n(248),
                T = n(21),
                L = n(175),
                D = n(115),
                k = function(t) {
                    var e = t.method,
                        n = t.Request,
                        r = void 0 === n ? "undefined" != typeof XMLHttpRequest ? XMLHttpRequest : null : n,
                        i = t.addHeaders,
                        o = void 0 === i ? function() {} : i;
                    return function(t) {
                        var n = t.getState;
                        return function(t) {
                            return function(i) {
                                if (i.type !== T.m && i.type !== T.d) return t(i);
                                if (i.type === T.d && !Object(D.a)(i.payload.formId, n()).uploadOnReceive) return t(i);
                                var a = i.payload.formId;
                                t(i), i.type === T.d && t(Object(c.a)({}, i, {
                                    type: T.m
                                }));
                                var u = Object(D.a)(a, n()),
                                    s = u.fileList,
                                    l = u.url;
                                e = e || u.method || "POST";
                                var d = s.filter(function(t) {
                                    return t.status === T.a.IDLE
                                });
                                (function n(i, c) {
                                    if (i)
                                        if (u.maxFileSize > 0 && i.nativeFile.size > u.maxFileSize) t({
                                            type: T.k,
                                            payload: {
                                                formId: a,
                                                file: i,
                                                response: {
                                                    errors: ["The maximum file size is " + Object(L.b)(u.maxFileSize)]
                                                },
                                                progress: 0
                                            },
                                            error: !0
                                        });
                                        else {
                                            Object(T.n)(a, i);
                                            var s = new r,
                                                d = new FormData,
                                                f = u.fileFieldName || "file";
                                            d.append(f, i.nativeFile), s.open(e, l), o(s, u), s.upload.addEventListener("progress", function(e) {
                                                if (e.lengthComputable) {
                                                    var n = e.loaded / e.total;
                                                    t({
                                                        type: T.l,
                                                        payload: {
                                                            formId: a,
                                                            file: i,
                                                            progress: n
                                                        }
                                                    })
                                                } else t({
                                                    type: T.l,
                                                    payload: {
                                                        formId: a,
                                                        file: i,
                                                        progress: null
                                                    }
                                                })
                                            }), s.addEventListener("load", function() {
                                                var e = {
                                                    success: s.status > 4 && s.status < 400
                                                };
                                                try {
                                                    e = JSON.parse(s.responseText)
                                                } catch (t) {
                                                    e.errors = ["Error parsing server response."]
                                                }
                                                t(Object(T.p)(a, i, e));
                                                var r = c[0],
                                                    o = c.slice(1);
                                                n(r, o)
                                            }), s.addEventListener("error", function() {
                                                if (t({
                                                        type: T.k,
                                                        payload: {
                                                            formId: a,
                                                            file: i,
                                                            response: {
                                                                success: !1,
                                                                errors: ["Request failed."]
                                                            }
                                                        },
                                                        error: !0
                                                    }), u.continueOnError) {
                                                    var e = c[0],
                                                        r = c.slice(1);
                                                    n(e, r)
                                                } else t(Object(T.o)(a))
                                            }), s.addEventListener("abort", function() {
                                                t({
                                                    type: T.g,
                                                    payload: {
                                                        formId: a,
                                                        file: i
                                                    }
                                                })
                                            }), s.send(d)
                                        }
                                    else t(Object(T.o)(a))
                                })(d[0], d.slice(1))
                            }
                        }
                    }
                },
                _ = n(19),
                F = function(t) {
                    return function(e) {
                        var n = e.dispatch,
                            r = e.getState;
                        return function(e) {
                            return function(i) {
                                if ("function" == typeof i) return i(n, r, t);
                                var o = i.performAsync,
                                    a = i.types,
                                    u = i.alwaysReject,
                                    s = Object(_.a)(i, ["performAsync", "types", "alwaysReject"]);
                                if (!o) return e(i);
                                var l = a[0],
                                    d = a[1],
                                    f = a[2];
                                return e(Object(c.a)({}, s, {
                                    type: l
                                })), o(t, n, r).then(function(t) {
                                    return b()(d, "Please supply a success action type as the 2nd array item of your types property."), e(Object(c.a)({}, s, {
                                        type: d,
                                        payload: t
                                    })), t
                                }).catch(function(t) {
                                    return f ? (e(Object(c.a)({}, s, {
                                        type: f,
                                        error: t
                                    })), u ? Promise.reject(t) : null) : Promise.reject(t)
                                })
                            }
                        }
                    }
                },
                x = n(216),
                N = n(3),
                M = n(31);

            function U(t, e) {
                var n = (new Date).getTime();
                t.setRequestHeader("Rg-Request-Token", RGCommons.requestToken.get()), t.onreadystatechange = function() {
                    if (4 === N.default.readystate) {
                        var r = (new Date).getTime(),
                            i = e.url,
                            o = e.method;
                        RGCommons.performedRequests.log(i, o, t.responseText, t.status < 400, parseInt(r - n, 10))
                    }
                }
            }

            function q() {
                return self.reactData.widgetStore || (self.reactData.widgetStore = z()), self.reactData.widgetStore
            }

            function G() {
                if (!self.reactData.reduxStore) {
                    var t = I(C());
                    self.reactData.reduxStore = B(t)
                }
                return self.reactData.reduxStore
            }

            function B(t, e) {
                var i = k({
                        addHeaders: U
                    }),
                    o = F(N.default),
                    a = {
                        fetcher: x.a
                    };
                "adminplayground" !== Object(M.getPageConfigValue)(M.PAGE_MODULE) && (a.persistedQueryMap = n(341));
                var c = [o, Object(m.middleware)(a), i],
                    s = [u.applyMiddleware.apply(void 0, c), Object(R.batchedSubscribe)(r.unstable_batchedUpdates)];
                return e = t.setInitialIterables(e), Object(u.createStore)(t, e, u.compose.apply(void 0, s))
            }

            function z(t) {
                var e = new o.a;
                return t && e.addData(t), e
            }

            function H(t, e) {
                var n = self.reactData,
                    r = q(),
                    o = G();
                r.addData(n.widgets);
                var u = Object(a.c)(t, o, r, e);
                o.dispatch(Object(p.b)(n.initState)), n.initState = {};
                var c = document.getElementById(e);
                c ? (n.unmount[e] = function() {
                    return i.a.unmountComponentAtNode(c)
                }, c.innerHTML ? i.a.hydrate(u, c) : i.a.render(u, c)) : console.warn("DOM Node for widget with id " + e + " not found")
            }

            function Q(t, e, n) {
                void 0 === n && (n = !0);
                var r, o = G();
                r = n ? Object(a.c)(t, o, q()) : Object(a.b)(t, o), i.a.render(r, e)
            }
            n.d(e, "createReduxStore", function() {
                return B
            }), n.d(e, "createWidgetStore", function() {
                return z
            }), n.d(e, "renderForClient", function() {
                return H
            }), n.d(e, "renderForDomNode", function() {
                return Q
            })
        },
        76: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(408),
                i = n(11),
                o = n(1),
                a = n(19),
                u = n(0),
                c = n.n(u),
                s = n(354),
                l = n(240),
                d = n(179),
                f = (n(28), function(t) {
                    var e = t.label,
                        n = t.helpMessage,
                        r = t.helpLabel,
                        i = t.errorReporting,
                        u = t.input,
                        s = t.layout,
                        f = t.children,
                        p = t.meta,
                        m = p.touched,
                        h = p.error,
                        b = p.invalid,
                        g = Object(a.a)(t, ["label", "helpMessage", "helpLabel", "errorReporting", "input", "layout", "children", "meta"]),
                        v = function(t) {
                            var e = t.target.checked ? function(t, e) {
                                return Array.isArray(t) ? t.concat(e) : [e]
                            }(u.value, t.target.value) : function(t, e) {
                                if (!Array.isArray(t)) return [];
                                var n = t.indexOf(e);
                                return -1 !== n ? t.slice(0, n).concat(t.slice(n + 1, t.length)) : t
                            }(u.value, t.target.value);
                            u.onChange(e), u.onBlur(e)
                        },
                        y = function() {
                            u.onBlur(u.value)
                        };
                    return c.a.createElement("div", null, c.a.createElement(l.a, {
                        status: m && b ? "invalid" : "",
                        errorMessage: h,
                        errorReporting: i,
                        helpMessage: n,
                        helpLabel: r
                    }, e), c.a.createElement(d.a, {
                        layout: s
                    }, c.a.Children.map(f, function(t) {
                        return c.a.createElement(d.a.Item, null, c.a.cloneElement(t, Object(o.a)({}, u, g, {
                            value: t.props.value,
                            checked: (e = t.props.value, !!Array.isArray(u.value) && -1 !== u.value.indexOf(e)),
                            onChange: v,
                            onBlur: y
                        })));
                        var e
                    })))
                }),
                p = function(t) {
                    return c.a.createElement(s.a, Object(i.a)({}, t, {
                        component: f
                    }))
                };
            p.defaultProps = {
                layout: "stack"
            };
            var m = p,
                h = n(387),
                b = (n(2), function(t) {
                    var e = t.input,
                        n = t.helpMessage,
                        r = t.helpLabel,
                        i = t.errorReporting,
                        u = t.label,
                        s = t.children,
                        d = t.meta,
                        f = d.touched,
                        p = d.error,
                        m = d.invalid,
                        h = Object(a.a)(t, ["input", "helpMessage", "helpLabel", "errorReporting", "label", "children", "meta"]),
                        b = 0,
                        g = function(t) {
                            return t + (b++ > 1 ? "_" + (b - 1) : "")
                        };
                    return delete e.value, c.a.createElement("div", null, c.a.createElement(l.a, {
                        status: f && m ? "invalid" : "",
                        errorMessage: p,
                        errorReporting: i,
                        helpMessage: n,
                        helpLabel: r,
                        htmlFor: g(e.name)
                    }, u), c.a.cloneElement(c.a.Children.only(s), Object(o.a)({}, e, h, {
                        id: g(e.name),
                        onChange: function(t) {
                            e.onChange(t.target.files)
                        }
                    })))
                }),
                g = function(t) {
                    return c.a.createElement(s.a, Object(i.a)({}, t, {
                        component: b
                    }))
                },
                v = n(418),
                y = n(414),
                I = function(t) {
                    var e = t.input,
                        n = t.children,
                        r = (t.meta, Object(a.a)(t, ["input", "children", "meta"])),
                        i = function(t) {
                            e.onChange(t), e.onBlur(t)
                        };
                    return c.a.createElement("div", null, c.a.Children.map(n, function(t) {
                        return c.a.cloneElement(t, Object(o.a)({}, e, r, {
                            value: t.props.value,
                            checked: (n = t.props.value, e.value === n),
                            onChange: i
                        }));
                        var n
                    }))
                },
                O = function(t) {
                    return c.a.createElement(s.a, Object(i.a)({}, t, {
                        component: I
                    }))
                },
                E = function(t) {
                    var e = t.input,
                        n = t.children,
                        r = (t.meta, Object(a.a)(t, ["input", "children", "meta"])),
                        i = function(t) {
                            var n = !!t.target.checked || null;
                            t.target.value && "on" !== t.target.value && (n = t.target.checked ? function(t, e) {
                                return (t || []).concat(e)
                            }(e.value, t.target.value) : function(t, e) {
                                var n = t.indexOf(e);
                                return -1 !== n ? t.slice(0, n).concat(t.slice(n + 1, t.length)) : t
                            }(e.value, t.target.value)), e.onChange(n), e.onBlur(n)
                        },
                        u = function() {
                            e.onBlur(e.value)
                        };
                    return c.a.createElement("div", null, c.a.Children.map(n, function(t) {
                        return c.a.cloneElement(t, Object(o.a)({}, e, r, {
                            value: t.props.value,
                            checked: (n = t.props.value, Array.isArray(e.value) ? -1 !== e.value.indexOf(n) : e.value),
                            onChange: i,
                            onBlur: u
                        }));
                        var n
                    }))
                },
                A = function(t) {
                    return c.a.createElement(s.a, Object(i.a)({}, t, {
                        component: E
                    }))
                };
            var P = function(t) {
                    var e, n = t.input,
                        r = t.helpMessage,
                        i = t.helpLabel,
                        u = t.errorReporting,
                        s = t.label,
                        d = t.children,
                        f = t.onFocus,
                        p = t.meta,
                        m = p.touched,
                        h = p.error,
                        b = p.invalid,
                        g = Object(a.a)(t, ["input", "helpMessage", "helpLabel", "errorReporting", "label", "children", "onFocus", "meta"]),
                        v = 0,
                        y = function(t) {
                            return "field-" + t + (v++ > 1 ? "_" + (v - 1) : "")
                        },
                        I = g.status ? g.status : "";
                    return c.a.createElement(c.a.Fragment, null, c.a.createElement(l.a, {
                        status: m && b ? "invalid" : "",
                        errorMessage: h,
                        errorReporting: u,
                        helpMessage: r,
                        helpLabel: i,
                        htmlFor: y(n.name)
                    }, s), c.a.cloneElement(c.a.Children.only(d), Object(o.a)({}, g, {
                        getTagInputProps: {
                            onBlur: function() {
                                return n.onBlur(n.value)
                            },
                            onFocus: function(t) {
                                n.onFocus(t), f && f()
                            },
                            status: b && m ? "invalid" : ""
                        },
                        id: y(n.name),
                        elementTestId: n.name,
                        status: m && b ? "invalid" : I,
                        values: (e = n.value, Array.isArray(e) ? e : e ? [e] : []),
                        onChange: function(t) {
                            return n.onChange(t)
                        },
                        isInvalid: b && m
                    })))
                },
                S = function(t) {
                    return c.a.createElement(s.a, Object(i.a)({}, t, {
                        component: P
                    }))
                },
                j = function(t) {
                    var e = t.input,
                        n = t.helpMessage,
                        r = t.helpLabel,
                        i = t.errorReporting,
                        u = t.label,
                        s = t.children,
                        d = t.meta,
                        f = d.touched,
                        p = d.error,
                        m = d.invalid,
                        h = t.onAfterBlur,
                        b = Object(a.a)(t, ["input", "helpMessage", "helpLabel", "errorReporting", "label", "children", "meta", "onAfterBlur"]),
                        g = 0,
                        v = function(t) {
                            return t + (g++ > 1 ? "_" + (g - 1) : "")
                        };
                    return c.a.createElement("div", null, c.a.createElement(l.a, {
                        status: f && m ? "invalid" : "",
                        errorMessage: p,
                        errorReporting: i,
                        helpMessage: n,
                        helpLabel: r,
                        htmlFor: v(e.name)
                    }, u), c.a.cloneElement(c.a.Children.only(s), Object(o.a)({}, e, b, {
                        id: v(e.name),
                        onChange: function(t) {
                            e.onChange(t)
                        },
                        onBlur: function() {
                            e.onBlur(e.value), h && h(e.name, e.value)
                        },
                        value: e.value
                    })))
                },
                w = function(t) {
                    return c.a.createElement(s.a, Object(i.a)({}, t, {
                        component: j
                    }))
                },
                C = n(415),
                R = n(355);
            n.d(e, "SingleCheckboxFormField", function() {
                return r.a
            }), n.d(e, "MultipleCheckboxFormField", function() {
                return m
            }), n.d(e, "RadioFormField", function() {
                return h.a
            }), n.d(e, "InputFormField", function() {
                return R.a
            }), n.d(e, "TextareaFormField", function() {
                return R.a
            }), n.d(e, "SelectFormField", function() {
                return R.a
            }), n.d(e, "FileInputFormField", function() {
                return g
            }), n.d(e, "DatePickerFormField", function() {
                return v.a
            }), n.d(e, "ReactSelectFormField", function() {
                return y.a
            }), n.d(e, "DropdownRadioFormField", function() {
                return O
            }), n.d(e, "DropdownCheckboxFormField", function() {
                return A
            }), n.d(e, "AdvancedSelectFormField", function() {
                return S
            }), n.d(e, "CodeEditorFormField", function() {
                return w
            }), n.d(e, "HiddenField", function() {
                return C.a
            })
        },
        763: function(t, e, n) {
            "use strict";
            n(2);
            var r = n(0),
                i = n.n(r),
                o = n(175);
            e.a = function(t) {
                var e = t.fileSize;
                return i.a.createElement("span", {
                    className: "item-size"
                }, Object(o.b)(e))
            }
        },
        766: function(t, e, n) {
            "use strict";
            n(2);
            var r = n(0),
                i = n.n(r),
                o = n(5),
                a = n(455),
                u = n(458),
                c = function(t) {
                    function e() {
                        for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(r)) || this).state = {
                            isVisible: !1
                        }, e.handleClick = function() {
                            e.setState({
                                isVisible: !0
                            }), e.props.iepl && Object(u.a)(e.props.iepl)
                        }, e.handleClose = function() {
                            e.setState({
                                isVisible: !1
                            })
                        }, e
                    }
                    return Object(o.a)(e, t), e.prototype.render = function() {
                        var t = this.props,
                            e = t.context,
                            n = t.initialImageUrl,
                            r = t.imageLinks,
                            o = t.children,
                            u = t.buttons;
                        return i.a.createElement("span", {
                            className: "lightbox-trigger",
                            onClick: this.handleClick
                        }, o, this.state.isVisible && i.a.createElement(a.a, {
                            onClose: this.handleClose,
                            buttons: u,
                            imageLinks: r,
                            initialImageUrl: n,
                            context: e
                        }))
                    }, e
                }(r.Component);
            c.displayName = "LightboxTrigger";
            var s = c,
                l = function(t) {
                    var e = t.src;
                    return i.a.createElement("img", {
                        "data-src": e,
                        className: "lightbox-img lazyload"
                    })
                };
            s.Image = l;
            var d = s;
            e.a = function(t) {
                var e = t.children,
                    n = t.downloadUrl,
                    r = t.imageUrl,
                    o = t.iepl,
                    a = {
                        largeUrl: r,
                        downloadUrl: n
                    },
                    u = [{
                        urls: a,
                        entityId: t.entityId
                    }];
                return i.a.createElement(d, {
                    buttons: [{
                        buttonProps: {
                            href: n,
                            key: "download"
                        },
                        iconProps: {
                            identifier: "download"
                        },
                        label: "Download",
                        className: "lightbox-download-button"
                    }],
                    iepl: o,
                    imageLinks: u,
                    initialImageUrl: a,
                    context: "projectImageLightbox"
                }, i.a.Children.only(e))
            }
        },
        772: function(t, e, n) {
            "use strict";
            var r = n(5),
                i = n(2),
                o = n.n(i),
                a = n(0),
                u = n.n(a),
                c = n(11),
                s = n(46),
                l = n(96),
                d = n(35),
                f = n(21),
                p = function(t, e, n) {
                    return function(i) {
                        var p = function(o) {
                            function a(r, a) {
                                var u;
                                u = o.call(this, r, a) || this;
                                var c = a.store,
                                    p = c.getState,
                                    m = c.dispatch;
                                u.uploadConfig = t(p, m, r), u.handleFormChange = u.handleFormChange.bind(Object(s.a)(u)), u.ConnectedComponent = Object(d.connect)(e, n)(i), u.addFiles = u.addFiles.bind(Object(s.a)(u));
                                var h = u.uploadConfig.id;
                                return u.actions = Object(l.bindActionCreators)({
                                    removeFile: Object(f.s)(h),
                                    receiveFiles: f.r,
                                    removeFiles: Object(f.t)(h)
                                }, m), u
                            }
                            Object(r.a)(a, o);
                            var p = a.prototype;
                            return p.componentDidMount = function() {
                                var t = this.uploadConfig.preventInitialisation,
                                    e = this.context.store.dispatch;
                                t || e(Object(f.q)(this.uploadConfig))
                            }, p.addFiles = function(t) {
                                var e = this.input;
                                e && e.click(t)
                            }, p.handleFormChange = function(t) {
                                var e = this.uploadConfig.id;
                                t.preventDefault();
                                var n = this.getFilesFromEvent(t);
                                this.actions.receiveFiles(e, n), this.input && (this.input.value = "")
                            }, p.getFilesFromEvent = function(t) {
                                var e = t.target.files || t.dataTransfer.files;
                                return Object.keys(e).map(function(t) {
                                    return {
                                        nativeFile: e[t]
                                    }
                                })
                            }, p.render = function() {
                                var t = this,
                                    e = this.uploadConfig,
                                    n = e.accept,
                                    r = e.multiple,
                                    i = this.ConnectedComponent,
                                    o = this.actions;
                                return u.a.createElement("div", null, u.a.createElement("input", {
                                    type: "file",
                                    multiple: r,
                                    onChange: this.handleFormChange,
                                    ref: function(e) {
                                        t.input = e
                                    },
                                    style: {
                                        visibility: "hidden",
                                        display: "none"
                                    },
                                    accept: n
                                }), u.a.createElement(i, Object(c.a)({}, this.props, o, {
                                    addFiles: this.addFiles,
                                    uploadConfig: this.uploadConfig
                                })))
                            }, a
                        }(a.Component);
                        return p.displayName = "UploadWrapper", p.contextTypes = {
                            store: o.a.shape({
                                getState: o.a.func.isRequired,
                                dispatch: o.a.func.isRequired
                            }).isRequired
                        }, p
                    }
                },
                m = n(115),
                h = n(6),
                b = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }
                    return Object(r.a)(e, t), e.prototype.render = function() {
                        var t = this.props,
                            e = t.uploadState.status,
                            n = t.children,
                            r = u.a.Children.only(n),
                            i = {
                                type: "button",
                                onClick: Object(h.c)(this.props.addFiles, this.props.onClickCallback)
                            };
                        return e === f.b.UPLOADING && (i.status = "busy"), u.a.cloneElement(r, i)
                    }, e
                }(a.Component);
            b.displayName = "InternalUploadButton", b.defaultProps = {
                multiple: !0,
                accept: "",
                fileFieldName: "file",
                onClickCallback: function() {}
            };
            e.a = p(function(t, e, n) {
                return {
                    id: n.id,
                    url: n.url,
                    multiple: n.multiple,
                    accept: n.accept,
                    fileFieldName: n.fileFieldName,
                    preventInitialisation: !!n.preventInitialisation && n.preventInitialisation,
                    uploadOnReceive: null == n.uploadOnReceive || n.uploadOnReceive,
                    maxFileSize: n.maxFileSize
                }
            }, function(t, e) {
                return {
                    uploadState: Object(m.a)(e.id, t)
                }
            })(b)
        },
        78: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return i
            }), n.d(e, "b", function() {
                return o
            }), n.d(e, "c", function() {
                return a
            }), n.d(e, "d", function() {
                return u
            });
            var r = n(160),
                i = "ACTION_FOLLOW_PERSON",
                o = "ACTION_UNFOLLOW_PERSON";

            function a(t, e, n, a, u, c, s) {
                return void 0 === e && (e = null), void 0 === n && (n = null), void 0 === a && (a = null), void 0 === u && (u = null), void 0 === c && (c = null), void 0 === s && (s = null),
                    function(l) {
                        l({
                            type: i,
                            accountId: t
                        }), Object(r.a)(t, n, a, u, s).then(function() {
                            e && e()
                        }).catch(function(e) {
                            c && c(e), l({
                                type: o,
                                accountId: t
                            })
                        })
                    }
            }

            function u(t, e, n) {
                return void 0 === e && (e = null), void 0 === n && (n = null),
                    function(a) {
                        a({
                            type: o,
                            accountId: t
                        }), Object(r.b)(t, e, n).catch(function() {
                            return a({
                                type: i,
                                accountId: t
                            })
                        })
                    }
            }
        },
        784: function(t, e, n) {
            "use strict";
            var r = n(12),
                i = n(5),
                o = n(15),
                a = n(11),
                u = n(0),
                c = n.n(u),
                s = (n(2), n(52)),
                l = n.n(s),
                d = n(1977),
                f = n(382),
                p = n(148),
                m = n(30),
                h = n(510);

            function b() {
                var t = Object(r.a)(["\n        query GraphQLAccountTooltip($accountKey: ID!) {\n            account(id: $accountKey) {\n                id\n                accountKey\n                authorStats {\n                    citationCount\n                    publicationCount\n                }\n                profile {\n                    affiliation {\n                        department\n                        institution {\n                            name\n                        }\n                    }\n                }\n                fullName\n                image {\n                    url\n                }\n                url\n                isFollowing\n                isSelf\n            }\n        }\n    "]);
                return b = function() {
                    return t
                }, t
            }
            var g = "mentionsTooltip",
                v = function(t) {
                    function e() {
                        for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(r)) || this).handleToggleFollow = function() {
                            var t = e.props,
                                n = t.account,
                                r = t.mutate;
                            n.isFollowing ? r(Object(h.d)({
                                id: n.id
                            })) : r(Object(h.a)({
                                id: n.id,
                                context: g
                            }))
                        }, e
                    }
                    return Object(i.a)(e, t), e.prototype.render = function() {
                        var t = this.props,
                            e = t.target,
                            n = t.account,
                            r = n.url,
                            i = n.image,
                            o = n.fullName,
                            u = n.profile,
                            s = n.authorStats,
                            h = n.isFollowing,
                            b = n.isSelf,
                            g = t.tooltipProps;
                        return c.a.createElement(d.a, Object(a.a)({
                            target: e
                        }, g), c.a.createElement(d.a.Body, {
                            style: {
                                width: "350px"
                            }
                        }, c.a.createElement(f.a, null, c.a.createElement(f.a.Fullname, {
                            href: r
                        }, o), u.affiliation.institution.name && c.a.createElement(f.a.MetaItems, null, c.a.createElement(f.a.MetaItem, null, u.affiliation.institution.name)), c.a.createElement(f.a.Image, {
                            imageUrl: i.url,
                            alt: o
                        }), u.affiliation.department && c.a.createElement(f.a.Info, {
                            title: "Department"
                        }, c.a.createElement(f.a.InfoItem, null, u.affiliation.department)), (s.publicationCount || s.citationCount) && c.a.createElement(f.a.Info, {
                            title: "Research information"
                        }, s.publicationCount > 0 && c.a.createElement(f.a.InfoItem, null, s.publicationCount + " " + l()("Publication", s.publicationCount)), s.citationCount > 0 && c.a.createElement(f.a.InfoItem, null, s.citationCount + " " + l()("Citation", s.citationCount))))), !b && c.a.createElement(d.a.Footer, null, c.a.createElement(p.a, null, c.a.createElement(m.a, {
                            type: "button",
                            onClick: this.handleToggleFollow
                        }, c.a.createElement(m.a.Label, null, h ? "Following" : "Follow")))))
                    }, e
                }(u.Component);
            v.displayName = "GraphQLAccountTooltip";
            var y = Object(o.withQuery)(Object(o.gql)(b()))(v),
                I = n(14),
                O = n(16),
                E = n(123),
                A = n(29),
                P = n(1044);

            function S() {
                var t = Object(r.a)(["\n            query GraphQLInlineAccount($accountKey: ID!) @allowToSkipSSR {\n                account(id: $accountKey) {\n                    id\n                    url\n                    fullName\n                    ...GraphQLAccountTooltip @embed\n                }\n            }\n        "]);
                return S = function() {
                    return t
                }, t
            }
            var j = function(t) {
                function e() {
                    return t.apply(this, arguments) || this
                }
                return Object(i.a)(e, t), e.prototype.render = function() {
                    var t = this.props,
                        e = t.data.accountId,
                        n = t.accountKey,
                        r = t.account,
                        i = t.children;
                    if (null !== r) {
                        var o = c.a.createElement(E.a, {
                            theme: "bare",
                            color: "blue",
                            href: r.url
                        }, r.fullName);
                        return c.a.createElement(y, {
                            accountKey: n,
                            target: o,
                            tooltipProps: {
                                position: "below-left",
                                key: "redraft-tooltip-account-" + e,
                                color: "white"
                            }
                        })
                    }
                    return i.map(function(t, e) {
                        return c.a.createElement(A.a, {
                            key: e,
                            size: "m",
                            spacing: "s",
                            className: "redraft-text"
                        }, t)
                    })
                }, e
            }(u.Component);
            j.displayName = "GraphQLInlineAccount";
            e.a = Object(O.compose)(Object(O.branch)(function(t) {
                return !!t.data
            }, Object(O.withProps)(function(t) {
                var e = t.data.accountId;
                return {
                    accountKey: new I.a(e, I.b.TYPE_ACCOUNT).getFullKey()
                }
            }), Object(O.withProps)(function(t) {
                var e = t.accountKey;
                return {
                    data: {
                        accountId: I.a.parse(e).id
                    }
                }
            })), Object(o.withQuery)(Object(o.gql)(S()), {
                preloader: P.a
            }))(j)
        },
        79: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return o
            }), n.d(e, "b", function() {
                return a
            });
            var r = n(13),
                i = n.n(r),
                o = {
                    items: [],
                    totalItems: 0,
                    isLoading: !1,
                    offset: 0
                },
                a = function(t, e) {
                    return i()(t, ["likesRgIdLikers", e.id], o)
                }
        },
        80: function(t, e, n) {
            "use strict";
            var r = n(3),
                i = n(17),
                o = n.n(i);
            var a = n(45),
                u = n(79);
            n.d(e, "b", function() {
                return c
            }), n.d(e, "a", function() {
                return s
            }), n.d(e, "c", function() {
                return l
            }), n.d(e, "d", function() {
                return d
            }), n.d(e, "f", function() {
                return f
            }), n.d(e, "e", function() {
                return p
            });
            var c = "ACTION_BEGIN_LOADING_RG_ID_LIKERS",
                s = "ACTION_ADD_RG_ID_LIKERS",
                l = "ACTION_CLEAR_RG_ID_LIKERS",
                d = "ACTION_STOP_LOADING_RG_ID_LIKERS";

            function f(t, e) {
                return function(n, i) {
                    var l = i(),
                        f = Object(u.b)(l, {
                            id: t
                        }).offset;
                    n(function(t) {
                            return {
                                type: c,
                                id: t
                            }
                        }(t)),
                        function(t) {
                            var e = t.id,
                                n = t.offset,
                                i = t.limit;
                            return Object(r.default)("/likes/api/likers", {
                                method: "GET",
                                query: {
                                    id: e,
                                    offset: n,
                                    limit: i
                                }
                            }).then(o()("result"))
                        }({
                            id: t,
                            offset: f,
                            limit: e
                        }).then(function(e) {
                            n(Object(a.b)(e.accountsGlobalAccounts)), n(function(t, e) {
                                return {
                                    type: s,
                                    id: t,
                                    likesRgIdLikers: e
                                }
                            }(t, e.likesRgIdLikers))
                        }).catch(function() {
                            n(function(t) {
                                return {
                                    type: d,
                                    id: t
                                }
                            }(t))
                        })
                }
            }

            function p(t) {
                return function(e) {
                    e({
                        type: l,
                        id: t
                    })
                }
            }
        },
        81: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return r
            }), n.d(e, "c", function() {
                return i
            }), n.d(e, "b", function() {
                return o
            }), n.d(e, "d", function() {
                return a
            }), n.d(e, "e", function() {
                return u
            }), n.d(e, "f", function() {
                return c
            }), n.d(e, "i", function() {
                return s
            }), n.d(e, "j", function() {
                return l
            }), n.d(e, "h", function() {
                return d
            }), n.d(e, "g", function() {
                return f
            });
            var r = "ADD_FIGURE_STUB",
                i = "REMOVE_FIGURE_STUB",
                o = "CLEAR_FIGURE_STUBS",
                a = "START_POSTING_STUB",
                u = "STOP_POSTING_STUB";

            function c(t) {
                return {
                    type: r,
                    tmpFileId: t
                }
            }

            function s(t) {
                return {
                    type: a,
                    id: t
                }
            }

            function l(t) {
                return {
                    type: u,
                    id: t
                }
            }

            function d(t) {
                return {
                    type: i,
                    id: t
                }
            }

            function f() {
                return {
                    type: o
                }
            }
        },
        82: function(t, e, n) {
            "use strict";
            var r = n(7),
                i = n(56),
                o = n.n(i),
                a = n(6),
                u = n(3);
            var c = n(161);
            n.d(e, "c", function() {
                return l
            }), n.d(e, "d", function() {
                return d
            }), n.d(e, "e", function() {
                return f
            }), n.d(e, "a", function() {
                return p
            }), n.d(e, "b", function() {
                return m
            }), n.d(e, "g", function() {
                return h
            }), n.d(e, "h", function() {
                return b
            }), n.d(e, "i", function() {
                return v
            }), n.d(e, "f", function() {
                return I
            });
            var s = Object(a.j)("carouselFollowerSuggestions"),
                l = s("SET_SUGGESTION_PROCESSED"),
                d = s("SET_SUGGESTION_SKIPPED"),
                f = s("UNSKIP_ALL_SUGGESTIONS"),
                p = s("SET_HAS_MORE_SUGGESTIONS"),
                m = s("SET_IS_REQUEST_IN_PROGRESS");

            function h(t) {
                return {
                    type: l,
                    accountId: t
                }
            }

            function b(t, e) {
                return {
                    type: d,
                    accountId: t,
                    isSkipped: e
                }
            }

            function g(t) {
                return {
                    type: p,
                    hasMoreSuggestions: t
                }
            }

            function v() {
                return {
                    type: f
                }
            }

            function y(t) {
                return {
                    type: m,
                    isRequestInProgress: t
                }
            }

            function I() {
                return function(t, e) {
                    var n, i, a = Object(c.a)(e());
                    t(y(!0)), (n = a.map(function(t) {
                        return t.accountId
                    }), i = a.length, Object(u.default)("recommendations.FollowSuggestionsPromo.loadMore.html", {
                        method: "GET",
                        query: {
                            ignoredAccountIds: n,
                            suggestionsOrderIncrement: i
                        }
                    }).then(function(t) {
                        if (!t.result) throw new Error("Server did not return recommendations.");
                        return t.result
                    })).then(function(e) {
                        o()(Object(c.a)(e)) && t(g(!1)), t(Object(r.b)(e)), t(y(!1))
                    }).catch(function() {
                        t(g(!1)), t(y(!1))
                    })
                }
            }
        },
        83: function(t, e, n) {
            "use strict";
            n.d(e, "e", function() {
                return a
            }), n.d(e, "b", function() {
                return u
            }), n.d(e, "a", function() {
                return c
            }), n.d(e, "c", function() {
                return s
            }), n.d(e, "d", function() {
                return l
            }), n.d(e, "h", function() {
                return d
            }), n.d(e, "f", function() {
                return p
            }), n.d(e, "g", function() {
                return m
            }), n.d(e, "i", function() {
                return h
            });
            var r = n(20),
                i = n(53),
                o = n(105),
                a = "START_QUESTIONNAIRE",
                u = "ADD_TIMEOUT_QUESTIONNAIRE",
                c = "ACTIVATE_QUESTIONNAIRE",
                s = "DEACTIVATE_QUESTIONNAIRE",
                l = "END_QUESTIONNAIRE",
                d = function(t) {
                    return function(e) {
                        e({
                            type: l,
                            id: t
                        }), e(Object(r.pullAlert)(t))
                    }
                },
                f = function(t, e, n, r) {
                    void 0 === r && (r = i.a);
                    var a = window.setTimeout(function() {
                        var r = Object(o.a)(e());
                        r && r.currentQuestionnaireId && !0 !== r.active && t(d(n))
                    }, r);
                    t({
                        type: u,
                        timeoutId: a
                    })
                },
                p = function() {
                    return function(t, e) {
                        var n = Object(o.a)(e(), "timeoutId");
                        n && clearTimeout(n), t({
                            type: c
                        })
                    }
                },
                m = function(t, e) {
                    return void 0 === e && (e = i.a),
                        function(n, r) {
                            f(n, r, t, e), n({
                                type: s,
                                id: t
                            })
                        }
                },
                h = function(t, e, n) {
                    return void 0 === n && (n = i.a),
                        function(i, u) {
                            Object(o.a)(u(), "currentQuestionnaireId") || (i({
                                type: a,
                                id: t
                            }), i(Object(r.pushAlert)(function() {
                                return e
                            }, t, function() {
                                return f(i, u, t, n), !0
                            })))
                        }
                }
        },
        85: function(t, e, n) {
            "use strict";
            n.d(e, "c", function() {
                return f
            }), n.d(e, "b", function() {
                return p
            }), n.d(e, "a", function() {
                return d
            });
            var r = n(0),
                i = n.n(r),
                o = n(2),
                a = n.n(o),
                u = n(35),
                c = n(134),
                s = Object(r.createContext)(),
                l = s.Provider,
                d = s.Consumer;
            l.propTypes = {
                value: a.a.instanceOf(c.a).isRequired
            };
            var f = function(t, e, n, o) {
                    var a = function(r) {
                        return i.a.createElement(u.Provider, {
                            store: e
                        }, i.a.createElement(l, {
                            value: n
                        }, i.a.createElement(t, r)))
                    };
                    return a.displayName = "Root", Object(r.createElement)(a, {
                        widgetId: o
                    })
                },
                p = function(t, e) {
                    var n = function(n) {
                        return i.a.createElement(u.Provider, {
                            store: e
                        }, i.a.createElement(t, n))
                    };
                    return n.displayName = "Root", Object(r.createElement)(n)
                }
        },
        854: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return i
            });
            var r = n(1003);

            function i(t) {
                return Object(r.b)(t)
            }
        },
        86: function(t, e, n) {
            "use strict";
            n.d(e, "b", function() {
                return i
            }), n.d(e, "c", function() {
                return o
            }), n.d(e, "a", function() {
                return a
            });
            var r = n(3);

            function i(t) {
                return Object(r.default)(t, {
                    method: "POST",
                    query: {}
                }).then(function(t) {
                    if (!t.result) throw new Error(t.message);
                    return t.result
                })
            }

            function o(t) {
                return Object(r.default)(t, {
                    method: "POST",
                    query: {}
                }).then(function(t) {
                    if (!t.result) throw new Error(t.message);
                    return t.result
                })
            }

            function a(t) {
                return Object(r.default)(t, {
                    method: "DELETE",
                    query: {}
                }).then(function(t) {
                    if (!t.result) throw new Error(t.message);
                    return t.result
                })
            }
        },
        860: function(t, e, n) {},
        87: function(t, e, n) {
            "use strict";
            var r = n(194);
            n.d(e, "a", function() {
                return r.a
            })
        },
        88: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return p
            });
            var r = n(11),
                i = n(5),
                o = n(2),
                a = n.n(o),
                u = n(0),
                c = n.n(u),
                s = n(85),
                l = n(16),
                d = n(93),
                f = n.n(d);

            function p(t) {
                var e = function(e) {
                    function n() {
                        return e.apply(this, arguments) || this
                    }
                    Object(i.a)(n, e);
                    var o = n.prototype;
                    return o.getWrappedInstance = function() {
                        return this.wrappedComponent.getWrappedInstance()
                    }, o.render = function() {
                        var e = this;
                        return c.a.createElement(s.a, null, function(n) {
                            return c.a.createElement(t, Object(r.a)({
                                ref: function(t) {
                                    return e.wrappedComponent = t
                                },
                                widgetStore: n
                            }, e.props))
                        })
                    }, n
                }(u.Component);
                return e.displayName = Object(l.wrapDisplayName)(t, "withWidgetStore"), f()(e, t)
            }
            a.a.shape({
                addWidgetTree: a.a.func.isRequired,
                removeWidgetTree: a.a.func.isRequired,
                unregisterWidgetLoading: a.a.func.isRequired,
                addData: a.a.func.isRequired,
                getData: a.a.func.isRequired
            }).isRequired
        },
        880: function(t, e, n) {
            "use strict";
            var r = ["ACCOUNT", "PUBLICATION"],
                i = n(0),
                o = n.n(i),
                a = (n(2), n(14)),
                u = n(784),
                c = n(1),
                s = n(12),
                l = n(16),
                d = n(35),
                f = n(15),
                p = n(34),
                m = n(95),
                h = n(906),
                b = n(46),
                g = n(5),
                v = n(1977),
                y = n(30),
                I = n(123),
                O = n(644),
                E = n(22),
                A = n.n(E),
                P = new A.a({
                    name: "inline-mention"
                }),
                S = new A.a({
                    name: "publication-type-badge"
                }),
                j = function(t) {
                    function e(e) {
                        var n;
                        return (n = t.call(this, e) || this).timeout = null, n.autoAcceptConversion = n.autoAcceptConversion.bind(Object(b.a)(n)), n
                    }
                    Object(g.a)(e, t);
                    var n = e.prototype;
                    return n.isExternalUrlConverted = function() {
                        return this.props.entityKey === this.props.externalUrlKey
                    }, n.autoAcceptConversion = function() {
                        this.infoTooltip && this.infoTooltip.hide(), null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null), this.props.autoAcceptConversion()
                    }, n.renderExternalUrlConvertedTooltip = function(t) {
                        var e = this;
                        return o.a.createElement(v.a, {
                            target: t,
                            color: "white",
                            position: "above-left",
                            initVisible: !0,
                            ref: function(t) {
                                e.infoTooltip = t
                            }
                        }, o.a.createElement(v.a.Body, null, "We linked this to a corresponding item that is already on ResearchGate."), o.a.createElement(v.a.Footer, null, o.a.createElement(y.a, {
                            theme: "bare",
                            onClick: this.props.undoConversion
                        }, "Undo")))
                    }, n.renderGeneralTooltip = function(t) {
                        var e = new a.a(this.props.publicationUid, a.b.TYPE_PUBLICATION).getFullKey();
                        return o.a.createElement(O.a, {
                            id: e,
                            target: t
                        })
                    }, n.renderContent = function(t) {
                        return this.isExternalUrlConverted() ? this.renderExternalUrlConvertedTooltip(t) : this.renderGeneralTooltip(t)
                    }, n.render = function() {
                        var t = this,
                            e = o.a.createElement("span", S("", this.props.hasFulltext ? "green" : "grey"), this.props.displayablePublicationType),
                            n = o.a.createElement("div", null, e, " ", o.a.createElement(I.a, {
                                href: this.props.publicationUrl
                            }, this.props.children));
                        return this.isExternalUrlConverted() && (this.timeout = setTimeout(function() {
                            return t.autoAcceptConversion()
                        }, 1e4)), o.a.createElement("div", P(), this.renderContent(n))
                    }, e
                }(i.Component);
            j.displayName = "InlinePublicationMention";
            var w = j;

            function C() {
                var t = Object(s.a)(["\n            query InlinePublicationMention($id: ID!) @allowToSkipSSR {\n                publication(id: $id) {\n                    id\n                    url\n                    title\n                    displayablePublicationType\n                    hasPublicFulltexts\n                }\n            }\n        "]);
                return C = function() {
                    return t
                }, t
            }
            var R = Object(p.a)([h.a], function(t) {
                    return {
                        externalUrlKey: t.get("externalUrlKey")
                    }
                }),
                T = Object(l.compose)(Object(d.connect)(R, function(t) {
                    return {
                        undoConversion: function() {
                            t(Object(m.g)())
                        },
                        autoAcceptConversion: function() {
                            t(Object(m.h)())
                        }
                    }
                }, null, {
                    withRef: !0
                }), Object(f.withQuery)(Object(f.gql)(C()), {
                    mapDataToProps: function(t) {
                        var e = t.publication,
                            n = e.url,
                            r = e.hasPublicFulltexts;
                        return Object(c.a)({}, e, {
                            publicationUrl: n,
                            hasFulltext: r
                        })
                    }
                }), Object(l.setDisplayName)("GraphQLInlinePublicationMention"))(w),
                L = function(t) {
                    var e = t.entityKey,
                        n = t.children,
                        r = t.contentState.getEntity(e),
                        i = r.getData(),
                        c = r.getType();
                    if ("ACCOUNT" === c) return o.a.createElement(u.a, {
                        data: i
                    }, n);
                    if ("PUBLICATION" === c) {
                        var s = i.publicationUid,
                            l = new a.a(s, a.b.TYPE_PUBLICATION).getFullKey();
                        return o.a.createElement(T, {
                            id: l,
                            publicationUid: s,
                            entityKey: e
                        }, n)
                    }
                    return null
                };
            e.a = {
                strategy: function(t, e, n) {
                    t.findEntityRanges(function(t) {
                        var e = t.getEntity();
                        if (null === e) return !1;
                        var i = n.getEntity(e);
                        return r.indexOf(i.getType()) > -1
                    }, e)
                },
                component: L
            }
        },
        9: function(t, e, n) {
            "use strict";
            var r = n(7),
                i = n(10);
            e.a = function(t, e) {
                var n = function(n, r) {
                    void 0 === n && (n = t);
                    var i = e[r.type];
                    return i ? i(n, r) : n
                };
                return n.hasCustomMerger = "function" == typeof e[r.a], n.initialState = t, n.isImmutable = i.Iterable.isIterable(t), n
            }
        },
        90: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return o
            }), n.d(e, "d", function() {
                return a
            }), n.d(e, "b", function() {
                return u
            }), n.d(e, "c", function() {
                return c
            });
            var r = n(6),
                i = Object(r.j)("additionalEmailDialogFormSubmitted"),
                o = i("FORM_BEGIN_PROCESSING"),
                a = i("FORM_PROCESSING_SUCCESS"),
                u = i("FORM_PROCESSING_FAILURE"),
                c = i("FORM_RESET")
        },
        906: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return r
            });
            var r = function(t) {
                return t.converseEditor
            }
        },
        91: function(t, e, n) {
            "use strict";
            n(2);
            var r = n(0),
                i = n.n(r),
                o = n(66),
                a = function(t) {
                    var e = t.title,
                        n = t.description,
                        r = t.color;
                    return i.a.createElement(o.a, {
                        title: e,
                        description: n,
                        color: r
                    })
                };
            a.defaultProps = {
                description: "",
                color: "red"
            }, e.a = a
        },
        916: function(t, e, n) {
            "use strict";
            var r = n(2),
                i = n.n(r),
                o = n(368),
                a = Object.keys(o.a).map(function(t) {
                    return o.a[t]
                }),
                u = (i.a.shape({
                    accountId: i.a.number,
                    body: i.a.string,
                    createdAt: i.a.string.isRequired,
                    deleted: i.a.bool.isRequired,
                    externalType: i.a.oneOf(a).isRequired,
                    firstVersion: i.a.string,
                    id: i.a.string.isRequired,
                    modifiedAt: i.a.string.isRequired,
                    nextVersion: i.a.string,
                    parentId: i.a.string.isRequired,
                    postedAt: i.a.string.isRequired,
                    previousVersion: i.a.string,
                    replyTo: i.a.string,
                    rgKey: i.a.string,
                    rootId: i.a.string.isRequired,
                    struct: i.a.object,
                    urls: i.a.object
                }), i.a.shape({
                    externalUrlKey: i.a.string.isRequired,
                    externalUrl: i.a.string.isRequired,
                    undoExternalUrlConversion: i.a.bool.isRequired
                }), i.a.shape({
                    text: i.a.string
                }));
            i.a.shape({
                id: i.a.string.isRequired,
                entityId: i.a.string.isRequired,
                parentId: i.a.string.isRequired,
                rootId: i.a.string.isRequired,
                createdAt: i.a.string.isRequired,
                modifiedAt: i.a.string.isRequired,
                type: i.a.string,
                metadata: i.a.oneOfType([u, i.a.array])
            })
        },
        92: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return r
            }), n.d(e, "c", function() {
                return i
            }), n.d(e, "b", function() {
                return o
            }), n.d(e, "f", function() {
                return a
            }), n.d(e, "e", function() {
                return u
            }), n.d(e, "d", function() {
                return c
            }), n.d(e, "g", function() {
                return s
            }), n.d(e, "h", function() {
                return l
            }), n.d(e, "i", function() {
                return d
            }), n.d(e, "k", function() {
                return f
            }), n.d(e, "l", function() {
                return p
            }), n.d(e, "j", function() {
                return m
            });
            var r = "RESEARCH_DETAIL_PAGE.SET_ACTIVE_TAB",
                i = "RESEARCH_DETAIL_PAGE.SET_SELECTED_DOWNLOAD_LINK",
                o = "RESEARCH_DETAIL_PAGE.SET_SELECTED_ACTIVE_FULLTEXT_TAB",
                a = "overview",
                u = "comments",
                c = "citations",
                s = "references",
                l = "related",
                d = "stats";

            function f(t) {
                return {
                    type: r,
                    activeTabName: t
                }
            }

            function p(t) {
                return {
                    type: i,
                    selectedDownloadLink: t
                }
            }

            function m(t) {
                return {
                    type: o,
                    activeFulltextTab: t
                }
            }
        },
        931: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return a
            });
            var r = n(184),
                i = n.n(r),
                o = n(31),
                a = function() {
                    function t() {}
                    var e = t.prototype;
                    return e.translate = function(t) {
                        return this.containsValuableData(t) ? {
                            a: Math.floor(t.get("attentionMilliseconds") / 1e3),
                            i: t.get("inactivitiesCount"),
                            e: i()(t.get("extraData"), ["context", "rgKey", "componentIdentifier", "currentAccountId", "contentId"]),
                            c: t.get("extraData").context,
                            r: t.get("extraData").rgKey,
                            coi: t.get("extraData").componentIdentifier,
                            cor: Object(o.getRequestConfigValue)(o.REQUEST_CORRELATION_ID),
                            ci: t.get("contentId")
                        } : null
                    }, e.containsValuableData = function(t) {
                        return t.get("extraData").rgKey && (t.get("attentionMilliseconds") > 999 || t.get("inactivitiesCount") > 0)
                    }, t
                }()
        },
        932: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return c
            });
            var r = n(46),
                i = n(5),
                o = (n(2), n(0)),
                a = n.n(o),
                u = n(30),
                c = function(t) {
                    function e() {
                        var e;
                        return (e = t.call(this) || this).onToggle = e.onToggle.bind(Object(r.a)(e)), e
                    }
                    Object(i.a)(e, t);
                    var n = e.prototype;
                    return n.onToggle = function(t) {
                        t.preventDefault(), this.props.onToggle(this.props.style)
                    }, n.render = function() {
                        var t, e = this.props,
                            n = e.className,
                            r = e.icon,
                            i = e.active,
                            o = ((t = {})["style-button"] = !0, t["is-active"] = i, t);
                        n && (o[n] = !0);
                        var c = i ? "solid" : "inverted",
                            s = i ? "blue" : "grey";
                        return a.a.createElement(u.a, {
                            size: "s",
                            theme: c,
                            width: "square",
                            color: s,
                            onMouseDown: this.onToggle,
                            type: "button",
                            tabIndex: "-1"
                        }, a.a.createElement(u.a.Icon, {
                            identifier: r
                        }))
                    }, e
                }(o.Component);
            c.displayName = "StyleButton"
        },
        947: function(t, e, n) {
            "use strict";
            var r = n(28),
                i = n.n(r);
            e.a = function(t, e) {
                return void 0 === e && (e = !0),
                    function(n) {
                        return e && i()(t.role, "The mask component does not have a role defined to masquerade with."), i()(!n.role, "The component you're about to masquerade already has a role defined."), n.role = t.role, n
                    }
            }
        },
        95: function(t, e, n) {
            "use strict";
            n.d(e, "b", function() {
                return o
            }), n.d(e, "c", function() {
                return a
            }), n.d(e, "d", function() {
                return u
            }), n.d(e, "a", function() {
                return c
            }), n.d(e, "f", function() {
                return s
            }), n.d(e, "g", function() {
                return l
            }), n.d(e, "h", function() {
                return d
            }), n.d(e, "e", function() {
                return f
            });
            var r = n(6),
                i = Object(r.j)("converseEditor"),
                o = i("ACTION_SET_EXTERNAL_URL_ENTITY_KEY"),
                a = i("ACTION_UNDO_EXTERNAL_URL_CONVERSION"),
                u = i("ACTION_UNSET_EXTERNAL_URL_ENTITY_KEY"),
                c = i("ACTION_SET_EDITOR_STATUS"),
                s = function(t, e) {
                    return {
                        type: o,
                        payload: {
                            externalUrlKey: t,
                            externalUrl: e
                        }
                    }
                },
                l = function() {
                    return {
                        type: a
                    }
                },
                d = function() {
                    return {
                        type: u
                    }
                },
                f = function(t) {
                    return {
                        type: c,
                        payload: {
                            editorStatus: t
                        }
                    }
                }
        },
        97: function(t, e, n) {
            "use strict";
            n.d(e, "i", function() {
                return o
            }), n.d(e, "e", function() {
                return a
            }), n.d(e, "a", function() {
                return u
            }), n.d(e, "h", function() {
                return c
            }), n.d(e, "g", function() {
                return s
            }), n.d(e, "f", function() {
                return l
            }), n.d(e, "b", function() {
                return d
            }), n.d(e, "c", function() {
                return f
            }), n.d(e, "d", function() {
                return p
            }), n.d(e, "l", function() {
                return m
            }), n.d(e, "k", function() {
                return h
            }), n.d(e, "j", function() {
                return b
            }), n.d(e, "m", function() {
                return g
            });
            var r = n(6),
                i = Object(r.j)("adCampaignBills"),
                o = i("UPDATE_STATE"),
                a = i("OPEN_BILL_CREATION"),
                u = i("CLOSE_BILL_CREATION"),
                c = i("UPDATE_ITEMS_BOOKED_STATS"),
                s = "total",
                l = "monthly",
                d = "grouped",
                f = "itemized",
                p = "total";

            function m(t) {
                return {
                    type: o,
                    data: t
                }
            }

            function h(t) {
                return {
                    type: a,
                    data: t
                }
            }

            function b() {
                return {
                    type: u
                }
            }

            function g(t) {
                return {
                    type: c,
                    data: t
                }
            }
        },
        98: function(t, e, n) {
            "use strict";
            n.d(e, "d", function() {
                return r
            }), n.d(e, "b", function() {
                return i
            }), n.d(e, "c", function() {
                return o
            }), n.d(e, "a", function() {
                return a
            }), n.d(e, "h", function() {
                return u
            }), n.d(e, "f", function() {
                return c
            }), n.d(e, "g", function() {
                return s
            }), n.d(e, "e", function() {
                return l
            });
            var r = "SELECT_FULLTEXT_FILE",
                i = "REMOVE_FULLTEXT_FILE",
                o = "SELECT_FULLTEXT_LINK",
                a = "REMOVE_FULLTEXT_LINK";

            function u(t) {
                return function(e) {
                    e({
                        type: r,
                        file: t
                    })
                }
            }

            function c() {
                return function(t) {
                    t({
                        type: i
                    })
                }
            }

            function s(t) {
                return function(e) {
                    e({
                        type: o,
                        link: t
                    })
                }
            }

            function l() {
                return function(t) {
                    t({
                        type: a
                    })
                }
            }
        },
        99: function(t, e, n) {
            "use strict";

            function r(t) {
                return null == t || "function" != typeof t && "object" != typeof t || !t.default ? t : t.default
            }
            n.r(e), n.d(e, "default", function() {
                return r
            })
        }
    }
]);