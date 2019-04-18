(window.webpackJsonp = window.webpackJsonp || []).push([
    ["manifests/homepage-en"], {
        "./app/javascripts/application.js": function(e, t, i) {
            "use strict";
            i.r(t);
            i("./node_modules/core-js/fn/object/assign.js"), i("./node_modules/core-js/es6/promise.js");
            var n = i("./node_modules/jquery/dist/jquery.js"),
                a = i.n(n),
                o = i("./node_modules/@shopify/marketing-assets/dist/javascripts/index.js"),
                s = i("./node_modules/babel-runtime/helpers/toConsumableArray.js"),
                r = i.n(s),
                d = i("./node_modules/babel-runtime/helpers/slicedToArray.js"),
                l = i.n(d),
                u = i("./node_modules/babel-runtime/helpers/classCallCheck.js"),
                c = i.n(u),
                h = i("./node_modules/babel-runtime/helpers/createClass.js"),
                p = i.n(h);

            function m(e, t) {
                return f(e.querySelector(t))
            }

            function f(e) {
                return e && Boolean(e.value.length) ? "yes" : "no"
            }

            function k(e) {
                return e.replace(/\[/, "_").replace(/\]$/, "")
            }
            var v = function() {
                function e() {
                    var t = this;
                    c()(this, e), this.trekkieEvent = "free_trial_signup", this.defaultAttributes = {
                        url: window.location.toString(),
                        "data-trekkie-event": this.trekkieEvent
                    }, this.modalListeners = [], this.listenToModalClose = this.listenToModalClose.bind(this), this.listenToModalInputs = this.listenToModalInputs.bind(this), this.handleModalClose = this.handleModalClose.bind(this), this.removeModalListeners = this.removeModalListeners.bind(this), this.handleInput = this.handleInput.bind(this), this.handleSubmit = this.handleSubmit.bind(this), "function" == typeof MutationObserver && (this.observer = new MutationObserver(function(e) {
                        e.forEach(function(e) {
                            return t.handleInputErrors(e)
                        })
                    }))
                }
                return p()(e, [{
                    key: "listen",
                    value: function() {
                        this.oneField(), this.modalOpen()
                    }
                }, {
                    key: "oneField",
                    value: function() {
                        var e = this,
                            t = document.querySelectorAll(".marketing-form--inline"),
                            i = [].concat(r()(t)).reverse(),
                            n = l()(i, 2),
                            a = n[0],
                            o = {
                                hero: n[1],
                                footer: a
                            };
                        Object.keys(o).forEach(function(t) {
                            var i = o[t];
                            i && i.addEventListener("submit", function() {
                                window.analytics.track("onefield_submit", Object.assign({}, e.defaultAttributes, {
                                    "data-trekkie-id": e.trekkieEvent + "_onefield_submit",
                                    "data-trekkie-action": "onefield_submit",
                                    "data-trekkie-label": JSON.stringify({
                                        position: t,
                                        withEmail: m(i, "[type=email]")
                                    })
                                }))
                            })
                        })
                    }
                }, {
                    key: "modalOpen",
                    value: function() {
                        var e = this,
                            t = document.querySelectorAll('[action$="services/signup/setup"]'),
                            i = [].concat(r()(t)).reverse(),
                            n = l()(i, 4),
                            a = n[0],
                            o = n[1],
                            s = n[2],
                            d = {
                                nav: n[3],
                                drawer: s,
                                hero: o,
                                footer: a
                            };
                        Object.keys(d).forEach(function(t) {
                            var i = d[t],
                                n = "threefield_modal_open";
                            i && i.addEventListener("click", function() {
                                window.analytics.track(n, Object.assign({}, e.defaultAttributes, {
                                    "data-trekkie-id": e.trekkieEvent + "_" + n,
                                    "data-trekkie-action": n,
                                    "data-trekkie-label": t
                                }))
                            })
                        }), ShopifyMarketing && ShopifyMarketing.signup && ShopifyMarketing.signup.SignupModal && ShopifyMarketing.signup.SignupModal.on("opened", function() {
                            e.listenToModalInputs(), e.listenToModalClose()
                        })
                    }
                }, {
                    key: "listenToModalClose",
                    value: function() {
                        var e = document.getElementById("CloseModal");
                        e.addEventListener("click", this.handleModalClose), this.modalListeners.push([e, "click", this.handleModalClose])
                    }
                }, {
                    key: "handleModalClose",
                    value: function() {
                        var e = document.querySelector("#ModalContainer .signup-form"),
                            t = "threefield_modal_close";
                        window.analytics.track(t, Object.assign({}, this.defaultAttributes, {
                            "data-trekkie-id": this.trekkieEvent + "_" + t,
                            "data-trekkie-action": t,
                            "data-trekkie-label": JSON.stringify({
                                withEmail: m(e, "[type=email]"),
                                withPassword: m(e, "[type=password]"),
                                withShop: m(e, '[name="signup[shop_name]"]'),
                                withSubdomain: m(e, '[name="signup[subdomain]"]')
                            })
                        })), this.removeModalListeners()
                    }
                }, {
                    key: "listenToModalInputs",
                    value: function() {
                        var e = this,
                            t = document.querySelector("#ModalContainer .signup-form"),
                            i = document.querySelectorAll("#ModalContainer .marketing-input"),
                            n = ["focus", "change"];
                        [].concat(r()(i)).forEach(function(t) {
                            n.forEach(function(i) {
                                t.addEventListener(i, e.handleInput), e.modalListeners.push([t, i, e.handleInput]), e.observer && e.observer.observe(t.parentNode, {
                                    attributes: !0,
                                    attributeFilter: ["class"],
                                    attributeOldValue: !0
                                })
                            })
                        }), t.addEventListener("submit", this.handleSubmit), this.modalListeners.push([t, "submit", this.handleSubmit])
                    }
                }, {
                    key: "handleInput",
                    value: function(e) {
                        var t = e.target,
                            i = "threefield_field_" + e.type,
                            n = k(t.name);
                        window.analytics.track(i, Object.assign({}, this.defaultAttributes, {
                            "data-trekkie-id": this.trekkieEvent + "_" + i,
                            "data-trekkie-action": i,
                            "data-trekkie-label": "{'" + n + "':'" + f(t) + "'}"
                        }))
                    }
                }, {
                    key: "handleInputErrors",
                    value: function(e) {
                        var t = e.target;
                        if (t.classList.contains("js-has-error")) {
                            var i = "threefield_field_error",
                                n = t.querySelector("span.error"),
                                a = k(t.querySelector("input").name);
                            window.analytics.track(i, Object.assign({}, this.defaultAttributes, {
                                "data-trekkie-id": this.trekkieEvent + "_" + i,
                                "data-trekkie-action": i,
                                "data-trekkie-label": "{'" + a + "':'" + n.innerText + "'}"
                            }))
                        }
                    }
                }, {
                    key: "handleSubmit",
                    value: function(e) {
                        var t = e.target,
                            i = "threefield_modal_submit";
                        window.utag && window.analytics && window.utag.link({
                            tealium_event: "signup",
                            user_token: window.analytics.user().traits().uniqToken || ""
                        }), window.analytics.track(i, Object.assign({}, this.defaultAttributes, {
                            "data-trekkie-id": this.trekkieEvent + "_" + i,
                            "data-trekkie-action": i,
                            "data-trekkie-label": JSON.stringify({
                                withEmail: m(t, "[type=email]"),
                                withPassword: m(t, "[type=password]"),
                                withStore: m(t, '[name="signup[shop_name]"]'),
                                withSubdomain: m(t, '[name="signup[subdomain]"]')
                            })
                        })), window.LUX && "function" == typeof window.LUX.addData && window.LUX.addData(i, "yes")
                    }
                }, {
                    key: "removeModalListeners",
                    value: function() {
                        for (; this.modalListeners.length;) {
                            var e = this.modalListeners.shift(),
                                t = l()(e, 3),
                                i = t[0],
                                n = t[1],
                                a = t[2];
                            i.removeEventListener(n, a)
                        }
                        this.observer && this.observer.disconnect()
                    }
                }]), e
            }();
            window.App = window.App || {}, window.ShopifyMarketing = window.ShopifyMarketing || {}, window.jQuery = a.a, App.config && App.config.signupHost && o.config.set("SignupBaseURI", "https://" + App.config.signupHost), o.config.set("customGoogleAnalyticsNamespace", "_other"), Object(o.init)(), App.scrollTo = new o.ScrollTo({
                offset: -a()("#ShopifyMainNav").height(),
                $selector: a()(".link-scroll-to")
            }), a()("body").hasClass("page--home") || new o.Video(a()(".background-video")), new o.StickyNav, document.addEventListener("DOMContentLoaded", function() {
                (new v).listen()
            })
        },
        "./app/javascripts/components/demo-video.js": function(e, t, i) {
            "use strict";
            var n = i("./node_modules/babel-runtime/helpers/classCallCheck.js"),
                a = i.n(n),
                o = i("./node_modules/babel-runtime/helpers/createClass.js"),
                s = i.n(o),
                r = i("./node_modules/enquire.js/src/index.js"),
                d = i.n(r),
                l = i("./node_modules/waypoints/src/entries/noframework.js"),
                u = i.n(l),
                c = (i("./node_modules/nodelist-foreach-polyfill/index.js"), i("./node_modules/@shopify/marketing-assets/dist/javascripts/index.js")),
                h = "demo-video__video",
                p = "demo-video__button--play",
                m = "demo-video__button--pause";
            var f = function() {
                function e(t) {
                    a()(this, e), this.isLoaded = !1, this.container = t, this.video = t.querySelector("." + h), this.playButton = t.querySelector("." + p), this.pauseButton = t.querySelector("." + m), this.buttonWasClicked = !1, this.bindFunctions(), this.init()
                }
                return s()(e, [{
                    key: "bindFunctions",
                    value: function() {
                        this.playVideoClicked = this.playVideoClicked.bind(this), this.pauseVideoClicked = this.pauseVideoClicked.bind(this), this.onVideoClick = this.onVideoClick.bind(this), this.onVideoIsPlaying = this.onVideoIsPlaying.bind(this), this.onVideoIsPaused = this.onVideoIsPaused.bind(this), this.onDesktopEnter = this.onDesktopEnter.bind(this), this.onDesktopExit = this.onDesktopExit.bind(this), this.loadVideo = c.utils.once(this.loadVideo), this.onVideoLoadEnd = c.utils.once(this.onVideoLoadEnd.bind(this))
                    }
                }, {
                    key: "init",
                    value: function() {
                        this.container.classList.remove("js-demo-video--loading"), this.playButton.addEventListener("click", this.playVideoClicked), this.pauseButton.addEventListener("click", this.pauseVideoClicked), this.video.addEventListener("click", this.onVideoClick), this.video.addEventListener("play", this.onVideoIsPlaying), this.video.addEventListener("pause", this.onVideoIsPaused), this.bindScreenResize()
                    }
                }, {
                    key: "initLazyload",
                    value: function() {
                        var e = this;
                        this.lazyload = new u.a({
                            element: this.video,
                            offset: "100%",
                            handler: function(t) {
                                var i;
                                "down" === t && ((i = e.video).offsetWidth > 0 || i.offsetHeight > 0) && e.loadVideo()
                            }
                        })
                    }
                }, {
                    key: "clearLazyload",
                    value: function() {
                        return this.lazyload && this.lazyload.disable()
                    }
                }, {
                    key: "onDesktopEnter",
                    value: function() {
                        this.initLazyload()
                    }
                }, {
                    key: "onDesktopExit",
                    value: function() {
                        this.clearLazyload()
                    }
                }, {
                    key: "bindScreenResize",
                    value: function() {
                        d.a.register(c.Breakpoints.prototype.phone, this.onDesktopExit), d.a.register(c.Breakpoints.prototype.tabletUp, this.onDesktopEnter)
                    }
                }, {
                    key: "onVideoIsPlaying",
                    value: function() {
                        this.onVideoLoadEnd(), this.container.classList.add("js-demo-video--active"), this.buttonWasClicked && (this.buttonWasClicked = !1, this.pauseButton.focus())
                    }
                }, {
                    key: "onVideoIsPaused",
                    value: function() {
                        this.container.classList.remove("js-demo-video--active"), this.buttonWasClicked && (this.buttonWasClicked = !1, this.playButton.focus())
                    }
                }, {
                    key: "removeLazyloadListeners",
                    value: function() {
                        this.clearLazyload(), d.a.unregister(c.Breakpoints.prototype.phone, this.onDesktopExit), d.a.unregister(c.Breakpoints.prototype.tabletUp, this.onDesktopEnter)
                    }
                }, {
                    key: "loadVideo",
                    value: function() {
                        this.removeLazyloadListeners(), this.container.classList.add("js-demo-video--loading"), this.isLoaded = !0, this.video.querySelectorAll("source").forEach(function(e) {
                            e.src = e.getAttribute("data-src")
                        }), this.video.load()
                    }
                }, {
                    key: "onVideoClick",
                    value: function() {
                        this.video.paused ? this.playVideoClicked() : this.pauseVideoClicked()
                    }
                }, {
                    key: "onVideoLoadEnd",
                    value: function() {
                        this.container.classList.remove("js-demo-video--loading")
                    }
                }, {
                    key: "playVideoClicked",
                    value: function() {
                        this.buttonWasClicked = !0, this.playVideo()
                    }
                }, {
                    key: "pauseVideoClicked",
                    value: function() {
                        this.buttonWasClicked = !0, this.pauseVideo()
                    }
                }, {
                    key: "playVideo",
                    value: function() {
                        this.isLoaded ? this.video.play().then(function() {}).catch(function() {}) : this.loadVideo()
                    }
                }, {
                    key: "pauseVideo",
                    value: function() {
                        this.video.pause()
                    }
                }]), e
            }();
            t.a = f
        },
        "./app/javascripts/manifests/homepage-en.js": function(e, t, i) {
            "use strict";
            i.r(t);
            i("./node_modules/nodelist-foreach-polyfill/index.js");
            var n = i("./node_modules/waypoints/src/entries/noframework.js"),
                a = i.n(n),
                o = (i("./app/javascripts/application.js"), i("./app/javascripts/components/demo-video.js")),
                s = i("./node_modules/babel-runtime/helpers/typeof.js"),
                r = i.n(s),
                d = i("./node_modules/babel-runtime/helpers/classCallCheck.js"),
                l = i.n(d),
                u = i("./node_modules/babel-runtime/helpers/createClass.js"),
                c = i.n(u),
                h = function() {
                    function e(t, i) {
                        l()(this, e), this.waypointContainer = i, this.mapContainer = t
                    }
                    return c()(e, [{
                        key: "init",
                        value: function() {
                            this.mapContainer.classList.add("interactive-map-enabled"), this.bindWaypoint()
                        }
                    }, {
                        key: "mapFallback",
                        value: function() {
                            this.mapContainer.classList.remove("interactive-map-enabled");
                            var e = this.mapContainer.querySelector(".map__globe-wrapper");
                            return e.parentElement.removeChild(e), "object" === r()(this.mapApp) ? this.mapApp.destroy() : null
                        }
                    }, {
                        key: "bindWaypoint",
                        value: function() {
                            var e = this,
                                t = new a.a({
                                    element: this.waypointContainer,
                                    offset: "100%",
                                    handler: function(i) {
                                        "down" === i && (e.handleWaypointTriggered(), t.disable())
                                    }
                                })
                        }
                    }, {
                        key: "handleMapError",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "an error occured fetching map data";
                            window.bugsnagClient.notify(e), this.mapFallback()
                        }
                    }, {
                        key: "onMapAppLoad",
                        value: function(e) {
                            var t = e.default;
                            this.pauseButton = this.mapContainer.querySelector(".map__control--pause"), this.playButton = this.mapContainer.querySelector(".map__control--play");
                            var i = this.mapContainer.querySelector("#Map");
                            this.mapApp = new t(i, i.dataset.start, this.handleMapError.bind(this)), this.mapContainer.classList.add("js-map-animation--active"), this.pauseButton.addEventListener("click", this.pause.bind(this)), this.playButton.addEventListener("click", this.play.bind(this))
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            var e = this;
                            this.mapApp.pause().then(function() {
                                e.mapContainer.classList.remove("js-map-animation--active"), e.playButton.focus()
                            }).catch(function(e) {
                                return window.bugsnagClient.notify(e)
                            })
                        }
                    }, {
                        key: "play",
                        value: function() {
                            var e = this;
                            this.mapApp.play().then(function() {
                                e.mapContainer.classList.add("js-map-animation--active"), e.pauseButton.focus()
                            }).catch(function(e) {
                                return window.bugsnagClient.notify(e)
                            })
                        }
                    }, {
                        key: "handleWaypointTriggered",
                        value: function() {
                            Promise.all([i.e("vendors~map-app/MapApp"), i.e("map-app/MapApp")]).then(i.bind(null, "./app/javascripts/map-app/MapApp.js")).then(this.onMapAppLoad.bind(this)).catch(this.handleMapError.bind(this))
                        }
                    }]), e
                }(),
                p = i("./app/javascripts/manifests/homepage/hero-dark.js"),
                m = i("./app/javascripts/manifests/homepage/hero-light.js");

            function f() {
                document.querySelectorAll(".js-waypoint-track").forEach(k), document.querySelectorAll(".pillars-animation").forEach(function(e) {
                        new o.a(e)
                    }), document.querySelector(".homepage-hero").classList.contains("homepage-hero--light") ? Object(m.default)() : Object(p.default)(),
                    function() {
                        var e = document.querySelector(".homepage-merchants");
                        if (e.classList.contains("merchants-map--interactive")) {
                            var t = document.querySelector(".map__container"),
                                i = new h(t, e);
                            i.init()
                        } else document.querySelectorAll(".merchants__section-video").forEach(function(e) {
                            new o.a(e)
                        })
                    }()
            }

            function k(e) {
                var t = new a.a({
                    element: e,
                    offset: "50%",
                    handler: function(i) {
                        var n;
                        "down" === i && (n = e.getAttribute("data-track-name"), window.analytics.track("page-track", {
                            "data-trekkie-event": "homepage",
                            "data-trekkie-action": "scroll",
                            "data-trekkie-label": n
                        }), t.disable())
                    }
                })
            }
            "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", f) : f()
        },
        "./app/javascripts/manifests/homepage/hero-dark.js": function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, "default", function() {
                return o
            });
            var n = i("./node_modules/waypoints/src/entries/noframework.js"),
                a = i.n(n);

            function o() {
                var e = document.querySelector(".homepage-hero"),
                    t = document.querySelector(".marketing-nav");
                new a.a({
                    element: e,
                    offset: -50,
                    handler: function(e) {
                        "down" === e ? t.classList.add("marketing-nav--homepage-opaque") : t.classList.remove("marketing-nav--homepage-opaque")
                    }
                })
            }
        },
        "./app/javascripts/manifests/homepage/hero-light.js": function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, "default", function() {
                return o
            });
            var n = i("./node_modules/waypoints/src/entries/noframework.js"),
                a = i.n(n);

            function o() {
                var e = document.querySelector(".homepage-hero"),
                    t = document.querySelector(".marketing-nav");
                new a.a({
                    element: e,
                    offset: function() {
                        return -e.clientHeight + t.clientHeight
                    },
                    handler: function(e) {
                        "down" === e ? t.classList.add("marketing-nav--homepage-default") : t.classList.remove("marketing-nav--homepage-default")
                    }
                })
            }
        },
        16: function(e, t, i) {
            e.exports = i("./app/javascripts/manifests/homepage-en.js")
        }
    },
    [
        [16, "runtime", "vendor"]
    ]
]);
//# sourceMappingURL=homepage-en-6ea71aaedfd8ab01e2675ffb7639a5c3f1b23f7bc2778a0c67211de7e0253c18.js.map