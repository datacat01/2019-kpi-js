! function(e) {
    var t = {};

    function o(n) {
        if (t[n]) return t[n].exports;
        var a = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(a.exports, a, a.exports, o), a.l = !0, a.exports
    }
    o.m = e, o.c = t, o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) o.d(n, a, function(t) {
                return e[t]
            }.bind(null, a));
        return n
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "/", o(o.s = "./index.tsx")
}({
    "../node_modules/classnames/bind.js": function(e, t, o) {
        var n;
        /*!
          Copyright (c) 2016 Jed Watson.
          Licensed under the MIT License (MIT), see
          http://jedwatson.github.io/classnames
        */
        /*!
          Copyright (c) 2016 Jed Watson.
          Licensed under the MIT License (MIT), see
          http://jedwatson.github.io/classnames
        */
        ! function() {
            "use strict";
            var o = {}.hasOwnProperty;

            function a() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    if (n) {
                        var i = typeof n;
                        if ("string" === i || "number" === i) e.push(this && this[n] || n);
                        else if (Array.isArray(n)) e.push(a.apply(this, n));
                        else if ("object" === i)
                            for (var r in n) o.call(n, r) && n[r] && e.push(this && this[r] || r)
                    }
                }
                return e.join(" ")
            }
            e.exports ? e.exports = a : void 0 === (n = function() {
                return a
            }.apply(t, [])) || (e.exports = n)
        }()
    },
    "../node_modules/create-react-class/factory.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/object-assign/index.js"),
            a = o("../node_modules/fbjs/lib/emptyObject.js"),
            i = o("../node_modules/fbjs/lib/invariant.js"),
            r = "mixins";
        e.exports = function(e, t, o) {
            var s = [],
                l = {
                    mixins: "DEFINE_MANY",
                    statics: "DEFINE_MANY",
                    propTypes: "DEFINE_MANY",
                    contextTypes: "DEFINE_MANY",
                    childContextTypes: "DEFINE_MANY",
                    getDefaultProps: "DEFINE_MANY_MERGED",
                    getInitialState: "DEFINE_MANY_MERGED",
                    getChildContext: "DEFINE_MANY_MERGED",
                    render: "DEFINE_ONCE",
                    componentWillMount: "DEFINE_MANY",
                    componentDidMount: "DEFINE_MANY",
                    componentWillReceiveProps: "DEFINE_MANY",
                    shouldComponentUpdate: "DEFINE_ONCE",
                    componentWillUpdate: "DEFINE_MANY",
                    componentDidUpdate: "DEFINE_MANY",
                    componentWillUnmount: "DEFINE_MANY",
                    UNSAFE_componentWillMount: "DEFINE_MANY",
                    UNSAFE_componentWillReceiveProps: "DEFINE_MANY",
                    UNSAFE_componentWillUpdate: "DEFINE_MANY",
                    updateComponent: "OVERRIDE_BASE"
                },
                u = {
                    getDerivedStateFromProps: "DEFINE_MANY_MERGED"
                },
                c = {
                    displayName: function(e, t) {
                        e.displayName = t
                    },
                    mixins: function(e, t) {
                        if (t)
                            for (var o = 0; o < t.length; o++) p(e, t[o])
                    },
                    childContextTypes: function(e, t) {
                        e.childContextTypes = n({}, e.childContextTypes, t)
                    },
                    contextTypes: function(e, t) {
                        e.contextTypes = n({}, e.contextTypes, t)
                    },
                    getDefaultProps: function(e, t) {
                        e.getDefaultProps ? e.getDefaultProps = h(e.getDefaultProps, t) : e.getDefaultProps = t
                    },
                    propTypes: function(e, t) {
                        e.propTypes = n({}, e.propTypes, t)
                    },
                    statics: function(e, t) {
                        ! function(e, t) {
                            if (t)
                                for (var o in t) {
                                    var n = t[o];
                                    if (t.hasOwnProperty(o)) {
                                        var a = o in c;
                                        i(!a, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', o);
                                        var r = o in e;
                                        if (r) {
                                            var s = u.hasOwnProperty(o) ? u[o] : null;
                                            return i("DEFINE_MANY_MERGED" === s, "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", o), void(e[o] = h(e[o], n))
                                        }
                                        e[o] = n
                                    }
                                }
                        }(e, t)
                    },
                    autobind: function() {}
                };

            function d(e, t) {
                var o = l.hasOwnProperty(t) ? l[t] : null;
                v.hasOwnProperty(t) && i("OVERRIDE_BASE" === o, "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.", t), e && i("DEFINE_MANY" === o || "DEFINE_MANY_MERGED" === o, "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", t)
            }

            function p(e, o) {
                if (o) {
                    i("function" != typeof o, "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."), i(!t(o), "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");
                    var n = e.prototype,
                        a = n.__reactAutoBindPairs;
                    for (var s in o.hasOwnProperty(r) && c.mixins(e, o.mixins), o)
                        if (o.hasOwnProperty(s) && s !== r) {
                            var u = o[s],
                                p = n.hasOwnProperty(s);
                            if (d(p, s), c.hasOwnProperty(s)) c[s](e, u);
                            else {
                                var m = l.hasOwnProperty(s);
                                if ("function" != typeof u || m || p || !1 === o.autobind)
                                    if (p) {
                                        var g = l[s];
                                        i(m && ("DEFINE_MANY_MERGED" === g || "DEFINE_MANY" === g), "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.", g, s), "DEFINE_MANY_MERGED" === g ? n[s] = h(n[s], u) : "DEFINE_MANY" === g && (n[s] = f(n[s], u))
                                    } else n[s] = u;
                                else a.push(s, u), n[s] = u
                            }
                        }
                }
            }

            function m(e, t) {
                for (var o in i(e && t && "object" == typeof e && "object" == typeof t, "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."), t) t.hasOwnProperty(o) && (i(void 0 === e[o], "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.", o), e[o] = t[o]);
                return e
            }

            function h(e, t) {
                return function() {
                    var o = e.apply(this, arguments),
                        n = t.apply(this, arguments);
                    if (null == o) return n;
                    if (null == n) return o;
                    var a = {};
                    return m(a, o), m(a, n), a
                }
            }

            function f(e, t) {
                return function() {
                    e.apply(this, arguments), t.apply(this, arguments)
                }
            }

            function g(e, t) {
                return t.bind(e)
            }
            var k = {
                    componentDidMount: function() {
                        this.__isMounted = !0
                    }
                },
                b = {
                    componentWillUnmount: function() {
                        this.__isMounted = !1
                    }
                },
                v = {
                    replaceState: function(e, t) {
                        this.updater.enqueueReplaceState(this, e, t)
                    },
                    isMounted: function() {
                        return !!this.__isMounted
                    }
                },
                y = function() {};
            return n(y.prototype, e.prototype, v),
                function(e) {
                    var t = function(e, n, r) {
                        this.__reactAutoBindPairs.length && function(e) {
                            for (var t = e.__reactAutoBindPairs, o = 0; o < t.length; o += 2) {
                                var n = t[o],
                                    a = t[o + 1];
                                e[n] = g(e, a)
                            }
                        }(this), this.props = e, this.context = n, this.refs = a, this.updater = r || o, this.state = null;
                        var s = this.getInitialState ? this.getInitialState() : null;
                        i("object" == typeof s && !Array.isArray(s), "%s.getInitialState(): must return an object or null", t.displayName || "ReactCompositeComponent"), this.state = s
                    };
                    for (var n in t.prototype = new y, t.prototype.constructor = t, t.prototype.__reactAutoBindPairs = [], s.forEach(p.bind(null, t)), p(t, k), p(t, e), p(t, b), t.getDefaultProps && (t.defaultProps = t.getDefaultProps()), i(t.prototype.render, "createClass(...): Class specification must implement a `render` method."), l) t.prototype[n] || (t.prototype[n] = null);
                    return t
                }
        }
    },
    "../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!../node_modules/postcss-loader/lib/index.js!./css/style.less": function(e, t, o) {
        (e.exports = o("../node_modules/css-loader/lib/css-base.js")(void 0)).push([e.i, '.perspective{-webkit-perspective:800px;perspective:800px}body,div,footer,h1,h2,header,html,img,nav,p,span,table,td,th,tr{margin:0;padding:0;border:0;vertical-align:baseline}body{font-family:Segoe UI,SegoeUI,Helvetica Neue,Helvetica,Arial,sans-serif;overflow-x:hidden}.clearfix:after,.clearfix:before,.container:after,.container:before{content:" ";display:table}.clearfix:after,.container:after{clear:both}.hidden{display:none}.app{position:relative;overflow-x:hidden}.linkButtonMenuItem{padding:15px;display:block;text-align:center;border-bottom:1px solid #e1e1e1;color:#212121;font-size:18px;text-decoration:none}.linkButtonMenuItem:focus{outline-offset:-3px}.linkButtonMenuItem:hover{background-color:#f8f8f8}.linkButton{display:inline-block;line-height:39px;height:39px;padding:0 5px;cursor:pointer;color:#fff;font:inherit;text-decoration:none}.linkButton:hover{color:#78b4e0}.linkButtonFixedHeader{display:flex;align-items:baseline;height:39px;padding:0;cursor:pointer;font-size:15px!important;color:#222;font:inherit;text-decoration:none;transition:color .167s ease}.linkButtonFixedHeader.office-signIn{height:auto;padding:0 12px}.linkButtonFixedHeader-hamburger{display:none}.linkButtonFixedHeader:hover{color:#0078d7}@media screen and (min-width:768px) and (max-width:1024px){.linkButtonMenu{right:0}}@media screen and (min-width:320px) and (max-width:767px){.linkButtonSigninHeader{margin:5px 13px}}.landing-background{position:absolute;top:0;min-width:100vw;display:flex;justify-content:flex-start;overflow:hidden;z-index:-1;height:100%;box-sizing:border-box;background-size:1713px auto;background-position:center 350px;background-repeat:no-repeat}@media screen and (min-width:768px) and (max-width:1024px){.landing-background{background-size:1155px auto;background-position:center 445px}}.edgeFlyout{background-color:#f2f2f2;display:flex;justify-content:space-between;align-items:center;padding:0 5%;margin-top:-72px;height:72px;animation-name:ms-slideDownIn100;animation-duration:.367s;animation-delay:.267s;animation-fill-mode:forwards}.edgeFlyout.out{margin-top:0;animation-name:ms-slideUpOut100;animation-duration:.267s;animation-delay:0;animation-fill-mode:forwards}.edgeFlyout .edgePromo{display:flex;flex-direction:column;justify-content:center;flex-wrap:wrap;height:72px}.edgeFlyout .edgePromo .edgeLogo{height:40px;margin-right:9px;padding:10px 0}.edgeFlyout .edgePromo .edgeTry{color:#262626;font-size:16px;font-weight:700;margin-bottom:8px}.edgeFlyout .edgePromo .edgeDescript{font-size:12px;color:#818181}.edgeFlyout .egdeActionButton{background-color:#0078d7;height:26px;width:120px;color:#fff;padding:4px 28px 5px;font-size:13px;text-decoration:none;box-sizing:border-box}.edgeFlyout .egdeActionButton:hover{background-color:#0060ac;text-decoration:underline}.edgeFlyout .egdeActionButton.edgeDeny{background-color:transparent;color:#0078d7;text-decoration:underline;margin-right:5px}.edgeFlyout .egdeActionButton.edgeDeny:hover{background-color:#c1c1c1}@keyframes ms-slideDownIn100{0%{margin-top:-72px}to{margin-top:0}}@keyframes ms-slideUpOut100{0%{margin-top:0}to{margin-top:-72px}}@media screen and (min-width:320px) and (max-width:767px){.edgeAction{display:flex;flex-direction:column;width:120px;align-items:center}.edgeFlyout .egdeActionButton.edgeDeny{margin-right:0}.edgeDescript,.edgeTry{max-width:45vw}}@media screen and (min-width:320px) and (max-width:374px){.edgeTry{max-width:40vw}.edgeDescript{display:none}}.officeHeader .headerContainer{max-width:1600px;height:100%;margin:0 auto;height:50px;justify-content:space-between;align-items:center}.officeHeader .microsoftLogo{width:108px;margin-top:1px}.landing-section{max-width:960px;margin:0 auto;padding:0 5%;display:block}.landing-section:after,.landing-sectionImgs:after{content:" ";visibility:hidden;display:block;height:0;clear:both}.landing-sectionImgs a{display:inline-block}.landing-sectionImgs .landing-sectionImg{float:none}.landing-sectionCopy{max-width:60%;float:left}.landing-sectionImg{float:left}.sectionOne{flex-direction:column;align-items:center;position:relative;perspective:1000px;margin-top:70px}.sectionOne .landing-sectionCopy{align-self:flex-start;margin-top:150px}.sectionTwo{margin-top:140px}.sectionTwo .landing-sectionCopy{margin:250px 0 0 50px}.sectionThree{margin-top:350px}.sectionThree .landing-sectionCopy{margin:180px 0 0}.sectionThree.noAnimation{margin-top:230px}.sectionFour{margin-bottom:80px;margin-top:90px}.sectionFour .landing-sectionCopy{width:100%;text-align:center;margin:40px 0;float:none;max-width:100%}.sectionFour .landing-sectionImgs{text-align:center;cursor:pointer}.sectionFive{margin-top:180px}.sectionFive .landing-sectionCopy{width:100%;text-align:center;margin:0;float:none;max-width:100%}.section-header{font-size:32px;font-style:normal;color:#222;letter-spacing:.2px;font-weight:100}.section-subheader{font-size:17px;font-weight:400;line-height:1.75;color:#666;margin-top:17px;font-weight:300}.sectionOne-subheader{max-width:445px}.sectionTwo-subheader{max-width:375px}.sectionThree-subheader{max-width:520px}.sectionFive-subheader{max-width:465px;margin:17px auto 0;text-align:center}.sectionFive-subheader .linkButtonSigninHeader{margin:20px 0}@media screen and (min-width:768px) and (max-width:1024px){.landing-sectionCopy{max-width:100%;float:none;text-align:center;clear:both}.section-header,.section-subheader{max-width:522px;margin:25px auto}.sectionTwo{margin-top:180px}.sectionTwo .landing-sectionCopy{margin:86px 0 0}.sectionTwo.noAnimation .outlookTabletScreen{margin-bottom:100px}.sectionTwo.noAnimation .landing-sectionCopy{margin-top:0}.sectionThree{display:flex;flex-direction:column;align-items:center;margin-top:100px;padding-top:0}.sectionThree .landing-sectionCopy{order:2;margin:50px 0 0}.sectionThree.noAnimation{margin-top:130px}.sectionFour{margin-bottom:100px;margin-top:170px}.sectionFour .section-header,.sectionFour .section-subheader{max-width:100%}}@media screen and (min-width:320px) and (max-width:767px){.landing-section{max-width:716px;padding:30px 25px}.landing-sectionCopy{width:520px!important;text-align:center;margin:0 auto}.landing-sectionCopy,.landing-sectionCopy .section-subheader{max-width:100%!important}.section-header{font-size:24px}.section-subheader{font-size:14px}.sectionFive,.sectionFour,.sectionOne,.sectionThree,.sectionTwo{margin-top:0;display:flex;flex-direction:column;align-items:center}.sectionOne .landing-sectionCopy{margin-top:80px}.sectionTwo{padding-top:0}.sectionTwo .landing-sectionCopy{margin-top:230px;margin-left:0}.sectionTwo.noAnimation .outlookTabletScreen{transform:scale(1.3) translate(-10%,10%)}.sectionTwo.noAnimation .landing-sectionCopy{margin-top:130px}.sectionThree.noAnimation{margin-top:0}.sectionThree .landing-sectionCopy{margin-top:219px;order:2;padding-top:30px;margin-top:0}.sectionFour{margin-bottom:0}.sectionFour .landing-sectionCopy{margin-top:10px}.outlookAppstore,.outlookPlaystore,.outlookWinstore{padding:10px 0}.sectionFour--android .outlookAppstore,.sectionFour--android .outlookWinstore,.sectionFour--ios .outlookPlaystore,.sectionFour--ios .outlookWinstore{display:none}}.headerLogo{float:left;width:135px;display:block}.headerLogo-mini{float:left;width:37px;display:none}.headerNav{padding:32px 0}.fixedHeaderNav,.headerNav{z-index:2;position:relative}.fixedHeaderNav{padding:5px 0}.headerLogo{font-size:24px;line-height:28px;font-weight:200}.headerContainer{margin:0 auto;padding:0 5%}.fixedHeaderMenu,.headerContainer{position:relative;display:flex;align-items:baseline;justify-content:flex-start}.fixedHeaderMenu{flex-grow:1}.fixedHeaderMenu .linkButtonFixedHeader-mobileMenu{display:flex;align-items:baseline;line-height:45px}.fixedHeaderMenu .linkButtonFixedHeader{margin-right:40px;position:relative}.fixedHeaderHidden{height:0}.fixedHeader{background-color:#fff;width:100%;height:80px}.fixedHeader .headerContainer{max-width:1600px;height:100%;margin:0 auto}.buyO365Button{width:170px;height:38px;display:flex;color:#fff;font-size:13px!important;justify-content:center;align-items:center;text-decoration:none;transition:background-color .3s ease;font-weight:100;letter-spacing:.975px;background-color:#0078d7}.buyO365Button:hover{background-color:#005b9e}.linkButtonMenu{display:block;position:absolute;width:190px;border-radius:2px;background-color:#fff;box-shadow:0 1px 4px 0 rgba(34,34,34,.28);top:45px;right:-50px;overflow:hidden}@media screen and (min-width:320px) and (max-width:767px){.linkButtonFixedHeader-mobileMenu{line-height:normal;position:absolute;width:190px;border-radius:2px;background-color:#fff;box-shadow:0 1px 4px 0 rgba(34,34,34,.28);top:40px;left:0;display:none}.linkButtonFixedHeader-mobileMenu .linkButtonFixedHeader{padding:15px;display:block;text-align:center;border-bottom:1px solid #e1e1e1;color:#222;font-size:18px;text-decoration:none;margin:0;height:55px;box-sizing:border-box;display:flex;justify-content:center;align-items:center}.linkButtonFixedHeader-mobileMenu .linkButtonMenu{top:202%;left:0}.linkButtonFixedHeader-mobileMenu .linkButtonMenuItem{padding:10px 15px;font-size:16px}.linkButtonFixedHeader-mobileMenu.linkButtonFixedHeader-mobileMenu--visible{display:block}}@media screen and (min-width:320px) and (max-width:767px){.headerContainer{padding:0 25px;max-width:716px}.headerLogo{display:none}.headerLogo-mini{display:block}.headerHero{padding-top:100px}.headerHero .headerHero-title{font-size:27px}.headerHero .headerHero-subtitle{margin-bottom:35px}.fixedHeaderMenu .linkButtonFixedHeader-mobileMenu{display:none;flex-direction:column;align-items:stretch}.fixedHeaderMenu .linkButtonFixedHeader-mobileMenu.linkButtonFixedHeader-mobileMenu--visible{display:block}.fixedHeaderMenu .linkButtonFixedHeader-hamburger{display:block;width:23px}}.headerHero{text-align:center;padding:117px 0 100px;position:relative;flex-direction:column}.headerHero-title{font-size:47px;color:#222;margin-bottom:26px;letter-spacing:.5px;font-weight:100}.headerHero-subtitle{font-size:16px;color:#676767;letter-spacing:0;line-height:1.88;margin:0 auto 29px;max-width:530px;font-weight:300}.linkButtonSigninHeader{width:210px;border-radius:2px;background-color:#fff;border:2px solid #0078d7;color:#0078d7;font-size:18px;text-decoration:none;padding:10px 0;display:inline-block;margin:0 13px;text-align:center;transition:background-color .3s ease;cursor:pointer}.linkButtonSigninHeader.linkButtonSigninHeader--premium{background-color:#0078d7;color:#fff}.linkButtonSigninHeader:hover{border-color:#005b9e;color:#005b9e}.linkButtonSigninHeader.linkButtonSigninHeader--premium:hover{background-color:#005b9e;border-color:#005b9e;color:#fff}@media screen and (min-width:320px) and (max-width:767px){.headerHero{padding:30px 20px 50px}.headerHero .linkButtonSigninHeader{margin:0 13px 20px}}@-webkit-keyframes slideDown{0%{transform:translateY(-300px)}to{transform:translateY(0)}}@keyframes slideDown{0%{transform:translateY(-300px)}to{transform:translateY(0)}}@-webkit-keyframes slideUp{0%{transform:translateY(0)}to{transform:translateY(-300px)}}@keyframes slideUp{0%{transform:translateY(0)}to{transform:translateY(-300px)}}@-webkit-keyframes rotateInRight{0%{transform:matrix3d(.617678,.139478,0,-.000589,-.220175,.905113,0,-.000005,0,0,1,0,0,0,0,1)}to{transform:matrix3d(.717678,.139478,0,-.000089,-.200175,.925113,0,-.000005,0,0,1,0,0,0,0,1)}}@keyframes rotateInRight{0%{transform:matrix3d(.617678,.139478,0,-.000589,-.220175,.905113,0,-.000005,0,0,1,0,0,0,0,1)}to{transform:matrix3d(.717678,.139478,0,-.000089,-.200175,.925113,0,-.000005,0,0,1,0,0,0,0,1)}}@-webkit-keyframes rotateOutRight{0%{transform:matrix3d(.717678,.139478,0,-.000089,-.200175,.925113,0,-.000005,0,0,1,0,0,0,0,1)}to{transform:matrix3d(.617678,.139478,0,-.000589,-.220175,.905113,0,-.000005,0,0,1,0,0,0,0,1)}}@keyframes rotateOutRight{0%{transform:matrix3d(.717678,.139478,0,-.000089,-.200175,.925113,0,-.000005,0,0,1,0,0,0,0,1)}to{transform:matrix3d(.617678,.139478,0,-.000589,-.220175,.905113,0,-.000005,0,0,1,0,0,0,0,1)}}@-webkit-keyframes rotateInRightX{0%{transform:matrix3d(.9,.102242,0,.000598,-.004839,1.880642,0,-.000048,0,0,1,0,0,100,0,1)}to{transform:matrix3d(1.170318,.102242,0,.000598,-.004839,1.880642,0,-.000048,0,0,1,0,0,100,0,1)}}@keyframes rotateInRightX{0%{transform:matrix3d(.9,.102242,0,.000598,-.004839,1.880642,0,-.000048,0,0,1,0,0,100,0,1)}to{transform:matrix3d(1.170318,.102242,0,.000598,-.004839,1.880642,0,-.000048,0,0,1,0,0,100,0,1)}}@-webkit-keyframes rotateOutRightX{0%{transform:matrix3d(1.170318,.102242,0,.000598,-.004839,1.880642,0,-.000048,0,0,1,0,0,100,0,1)}to{transform:matrix3d(.9,.102242,0,.000598,-.004839,1.880642,0,-.000048,0,0,1,0,0,100,0,1)}}@keyframes rotateOutRightX{0%{transform:matrix3d(1.170318,.102242,0,.000598,-.004839,1.880642,0,-.000048,0,0,1,0,0,100,0,1)}to{transform:matrix3d(.9,.102242,0,.000598,-.004839,1.880642,0,-.000048,0,0,1,0,0,100,0,1)}}@-webkit-keyframes rotateInLeft{0%{transform:matrix3d(6.76044,.16718,-2,.00125,1.91031,7.838,2,-.00032,0,0,1,0,28,32,0,8)}to{transform:matrix3d(6.76044,.16718,0,.00125,.91031,7.838,0,-.00032,0,0,1,0,28,32,0,7)}}@keyframes rotateInLeft{0%{transform:matrix3d(6.76044,.16718,-2,.00125,1.91031,7.838,2,-.00032,0,0,1,0,28,32,0,8)}to{transform:matrix3d(6.76044,.16718,0,.00125,.91031,7.838,0,-.00032,0,0,1,0,28,32,0,7)}}@-webkit-keyframes rotateOutLeft{0%{transform:matrix3d(6.76044,.16718,0,.00125,.91031,7.838,0,-.00032,0,0,1,0,28,32,0,7)}to{transform:matrix3d(6.76044,.16718,-2,.00125,1.91031,7.838,2,-.00032,0,0,1,0,28,32,0,8)}}@keyframes rotateOutLeft{0%{transform:matrix3d(6.76044,.16718,0,.00125,.91031,7.838,0,-.00032,0,0,1,0,28,32,0,7)}to{transform:matrix3d(6.76044,.16718,-2,.00125,1.91031,7.838,2,-.00032,0,0,1,0,28,32,0,8)}}@-webkit-keyframes rotateInAndriod{0%{transform:matrix3d(1,.059794,0,-.000485,-.154995,1,0,-.000282,0,0,1,0,0,0,0,1)}to{transform:matrix3d(1,.049794,0,-.000085,-.134995,1,0,-.000082,0,0,1,0,0,0,0,1)}}@keyframes rotateInAndriod{0%{transform:matrix3d(1,.059794,0,-.000485,-.154995,1,0,-.000282,0,0,1,0,0,0,0,1)}to{transform:matrix3d(1,.049794,0,-.000085,-.134995,1,0,-.000082,0,0,1,0,0,0,0,1)}}@-webkit-keyframes rotateOutAndriod{0%{transform:matrix3d(1,.049794,0,-.000085,-.134995,1,0,-.000082,0,0,1,0,0,0,0,1)}to{transform:matrix3d(1,.059794,0,-.000485,-.154995,1,0,-.000282,0,0,1,0,0,0,0,1)}}@keyframes rotateOutAndriod{0%{transform:matrix3d(1,.049794,0,-.000085,-.134995,1,0,-.000082,0,0,1,0,0,0,0,1)}to{transform:matrix3d(1,.059794,0,-.000485,-.154995,1,0,-.000282,0,0,1,0,0,0,0,1)}}@-webkit-keyframes fadeInDown{0%{opacity:0;-webkit-transform:translateY(-20px)}to{opacity:1;-webkit-transform:translateY(0)}}@keyframes fadeInDown{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}.fadeInDown{animation:fadeInDown .267s cubic-bezier(.28,.06,.07,1);animation-fill-mode:forwards}.rotateInLeft{animation:rotateInLeft 1s cubic-bezier(.28,.06,.07,1);animation-delay:.367s;animation-fill-mode:forwards}.rotateInAndriod{animation:rotateInAndriod 1s cubic-bezier(.28,.06,.07,1);animation-delay:.367s;animation-fill-mode:forwards}.rotateOutAndriod{animation:rotateOutAndriod 1s cubic-bezier(.28,.06,.07,1);animation-fill-mode:forwards}.rotateOutLeft{animation:rotateOutLeft 1s cubic-bezier(.28,.06,.07,1);animation-fill-mode:forwards}.rotateInRight{animation:rotateInRight 1s cubic-bezier(.28,.06,.07,1);animation-delay:.367s;animation-fill-mode:forwards}.rotateOutRight{animation:rotateOutRight 1s cubic-bezier(.28,.06,.07,1);animation-fill-mode:forwards}.rotateInRightX{animation:rotateInRightX 1s cubic-bezier(.28,.06,.07,1);animation-delay:.367s;animation-fill-mode:forwards}.rotateOutRightX{animation:rotateOutRightX 1s cubic-bezier(.28,.06,.07,1);animation-fill-mode:forwards}.noAnimation .rotateInAndriod,.noAnimation .rotateInLeft,.noAnimation .rotateInRight,.noAnimation .rotateInRightX,.noAnimation .rotateOutAndriod,.noAnimation .rotateOutLeft,.noAnimation .rotateOutRight,.noAnimation .rotateOutRightX{animation:none}.noAnimation .outlookAndroidScreen,.noAnimation .outlookCalendarScreen,.noAnimation .outlookIphoneAppScreen,.noAnimation .outlookTabletScreen{transform:none}.noAnimation .outlookTabletScreen{max-height:none;transform:scale(1.3) translateX(-10%)}.landing-sectionImg{margin:0}.outlookCalendarScreen{width:855px;max-height:565px;max-width:80%;margin-left:-40px;transform:matrix3d(6.76044,.16718,-2,.00125,1.91031,7.838,2,-.00032,0,0,1,0,28,32,0,8)}.outlookIphoneAppScreen{width:377px;max-height:586px;max-width:40vw;position:absolute;top:200px;left:55%;transform:matrix3d(.617678,.139478,0,-.000589,-.220175,.905113,0,-.000005,0,0,1,0,0,0,0,1)}.outlookTabletScreen{width:542px;margin-top:100px;max-height:300px;max-width:50%;transform:matrix3d(.9,.102242,0,.000598,-.004839,1.880642,0,-.000048,0,0,1,0,0,100,0,1)}.outlookAndroidScreen{width:auto;max-width:50%;max-height:551px;margin-top:59px;margin-right:35px;float:right;transform-origin:center right -10px;transform:matrix3d(1,.059794,0,-.000485,-.154995,1,0,-.000282,0,0,1,0,0,0,0,1)}.outlookAppstore,.outlookPlaystore,.outlookWinstore{min-width:167px;height:50px;margin:0 14px}@media screen and (min-width:768px) and (max-width:1024px){.outlookTabletScreen{float:none;margin:0 auto;display:block;margin-bottom:260px;margin-top:-100px}.outlookAndroidScreen{width:275px;height:500px;margin:0}.outlookCalendarScreen{width:610px;max-width:90%;margin-left:25px;float:none}.outlookIphoneAppScreen{top:90px;width:270px;height:427px;left:60%}}@media screen and (min-width:320px) and (max-width:767px){.outlookCalendarScreen{margin-left:-10px;max-width:100%}.outlookIphoneAppScreen{top:35px;max-height:60vw}.outlookTabletScreen{max-width:375px;width:85%;max-height:40vh;margin-top:0;margin-left:30px}.outlookAndroidScreen{max-width:50%;max-height:310px;margin-top:0}}#footerCurve{position:absolute;width:100%;height:70px;top:-70px;bottom:0;left:0}.footer{background-color:#f8f8f8;text-align:center;position:relative;padding-top:50px;padding-bottom:70px;max-width:100vw}.footer .linkButtonMenu{top:-140%}.footerNav{z-index:2;position:relative;max-width:1600px;height:100%;margin:0 auto}.footerNav-contentLeft,.footerNav-topMenu{float:left;width:50%}.footerNav-contentLeft{text-align:left}.footerNav-contentLeft .linkButtonFixedFooter{color:#333;font-size:17px;margin:24px 24px 24px 0;display:block;float:left}.footerNav-contentLeft .linkButtonFixedFooter:hover{color:#222}.footerNav-contentLeft .privacy{font-weight:600}.footerNav-contentLeft .legal{font-weight:400}.footerNav-topMenu{text-align:right;display:flex;flex-wrap:wrap;justify-content:flex-end;align-items:baseline}.footerNav-topMenu .linkButtonFixedFooter{color:#000;font-size:16px;font-weight:400;padding:6px 0 10px 36px;cursor:pointer}.footerNav-topMenu .linkButtonFixedFooter:hover{color:#0078d7}@supports (-ms-ime-align:auto){.footerNav-topMenu .linkButtonFixedFooter{padding:7px 0 10px 36px}}.footerLogo{width:108px;padding-top:6px}.footerCopyright{float:left;color:#333;font-size:16px;clear:both;font-weight:400}.linkButtonFixedFooter{text-decoration:none}@media screen and (min-width:768px) and (max-width:1024px){.footer{max-width:100vw}.footerNav{padding:0 40px}.footerNav-contentLeft{width:60%}.footerNav-topMenu{width:40%}}@media screen and (min-width:320px) and (max-width:767px){.footer{max-width:100vw}.footerNav{padding:0}.linkButtonFixedFooter{clear:both}.footerNav-contentLeft .linkButtonFixedFooter{margin:5px 0 0}.footerLogo{margin-bottom:20px}.footerCopyright{margin-top:15px}.footer .linkButtonMenu{top:-90%;right:0}.footerNav-contentLeft{width:40%}.footerNav-topMenu{width:60%}}.modal-overlay{position:fixed;top:0;left:0;height:100%;width:100%;z-index:999;opacity:1;background:rgba(0,0,0,.4);animation-name:fadeIn;animation-duration:.2s;animation-timing-function:ease-in-out;animation-fill-mode:both}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.modal-close{position:absolute;top:16px;right:16px;background:none;border:none;padding:0}.modal-close,.modal-close svg{cursor:pointer}.modal{max-width:480px;height:380px;background:#fff;margin:120px auto;text-align:center;animation-name:scaleUp;animation-delay:.1s;animation-duration:.2s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes scaleUp{0%{opacity:0;transform:scale3d(.95,.95,1)}to{opacity:1;transform:scaleX(1)}}.modal-header{font-size:24px;color:#222;font-weight:200;padding:26px 0 0}.modal-button{width:270px;height:60px;font-size:20px;display:flex;align-items:center;cursor:pointer;text-decoration:none}.modal-button .button-logo{width:59px;border-right:2px solid hsla(0,0%,100%,.2);height:100%;display:flex;align-items:center;justify-content:center}.modal-button .button-text{margin-left:22px}.modal-button--microsoft{background:#0078d7;color:#fff;margin:35px auto 0}.modal-button--microsoft:hover{background-color:#005a9e}.modal-button--google{border:1px solid #fce2df;color:#ea4335;margin:0 auto}.modal-button--google:hover{background-color:#eaeaea}.modal-button--google .button-logo{border-right-color:#fce2df}.modal-buttonSeparator{padding:14px 0 15px;font-size:16px;color:#8e8e93}.modal-footer{font-size:20px;color:#222;border-top:1px solid #f1f1f1;margin:28px 0 0;padding:30px 0 0}.modal-footer a{text-decoration:none;color:#0078d7}.modal-footer a:hover{color:#005a9e}.tnarrowDiv{text-align:center;font-weight:400;margin-left:35px;margin-right:35px;overflow:hidden}.tnarrowMain{margin-top:40px}.tnarrowAppIcon{height:65px;width:65px}.tnarrowBrand{color:#0072c6;margin-top:10px;font-size:32px}.tnarrowTitle{color:#222;font-size:22px;margin-top:40px}.tnarrowDescription{margin-top:15px;font-size:14px}.tnarrowButton{margin-top:25px;border-radius:3px;color:#fff;background-color:#0072c6;font-size:16px;display:inline-block;padding:7px 20px;text-decoration:none;width:80px}.tnarrowLink{margin-top:10px;font-size:14px}.tnarrowStoreIcon{margin-top:40px;width:134px}.tnarrowSignupText{margin-top:50px}.tnarrowSignupLink{margin-left:5px;text-decoration:none}', ""])
    },
    "../node_modules/css-loader/lib/css-base.js": function(e, t) {
        e.exports = function(e) {
            var t = [];
            return t.toString = function() {
                return this.map(function(t) {
                    var o = function(e, t) {
                        var o = e[1] || "",
                            n = e[3];
                        if (!n) return o;
                        if (t && "function" == typeof btoa) {
                            var a = (r = n, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"),
                                i = n.sources.map(function(e) {
                                    return "/*# sourceURL=" + n.sourceRoot + e + " */"
                                });
                            return [o].concat(i).concat([a]).join("\n")
                        }
                        var r;
                        return [o].join("\n")
                    }(t, e);
                    return t[2] ? "@media " + t[2] + "{" + o + "}" : o
                }).join("")
            }, t.i = function(e, o) {
                "string" == typeof e && (e = [
                    [null, e, ""]
                ]);
                for (var n = {}, a = 0; a < this.length; a++) {
                    var i = this[a][0];
                    "number" == typeof i && (n[i] = !0)
                }
                for (a = 0; a < e.length; a++) {
                    var r = e[a];
                    "number" == typeof r[0] && n[r[0]] || (o && !r[2] ? r[2] = o : o && (r[2] = "(" + r[2] + ") and (" + o + ")"), t.push(r))
                }
            }, t
        }
    },
    "../node_modules/es6-promise/dist/es6-promise.js": function(e, t, o) {
        (function(t, n) {
            var a;
            /*!
             * @overview es6-promise - a tiny implementation of Promises/A+.
             * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
             * @license   Licensed under MIT license
             *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
             * @version   4.0.5
             */
            /*!
             * @overview es6-promise - a tiny implementation of Promises/A+.
             * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
             * @license   Licensed under MIT license
             *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
             * @version   4.0.5
             */
            a = function() {
                "use strict";

                function e(e) {
                    return "function" == typeof e
                }
                var a = Array.isArray ? Array.isArray : function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    i = 0,
                    r = void 0,
                    s = void 0,
                    l = function(e, t) {
                        f[i] = e, f[i + 1] = t, 2 === (i += 2) && (s ? s(g) : j())
                    },
                    u = "undefined" != typeof window ? window : void 0,
                    c = u || {},
                    d = c.MutationObserver || c.WebKitMutationObserver,
                    p = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t),
                    m = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

                function h() {
                    var e = setTimeout;
                    return function() {
                        return e(g, 1)
                    }
                }
                var f = new Array(1e3);

                function g() {
                    for (var e = 0; e < i; e += 2) {
                        (0, f[e])(f[e + 1]), f[e] = void 0, f[e + 1] = void 0
                    }
                    i = 0
                }
                var k, b, v, y, j = void 0;

                function w(e, t) {
                    var o = arguments,
                        n = this,
                        a = new this.constructor(C);
                    void 0 === a[O] && U(a);
                    var i, r = n._state;
                    return r ? (i = o[r - 1], l(function() {
                        return G(r, a, i, n._result)
                    })) : L(n, a, e, t), a
                }

                function _(e) {
                    if (e && "object" == typeof e && e.constructor === this) return e;
                    var t = new this(C);
                    return N(t, e), t
                }
                p ? j = function() {
                    return t.nextTick(g)
                } : d ? (b = 0, v = new d(g), y = document.createTextNode(""), v.observe(y, {
                    characterData: !0
                }), j = function() {
                    y.data = b = ++b % 2
                }) : m ? ((k = new MessageChannel).port1.onmessage = g, j = function() {
                    return k.port2.postMessage(0)
                }) : j = void 0 === u ? function() {
                    try {
                        var e = o(0);
                        return void 0 !== (r = e.runOnLoop || e.runOnContext) ? function() {
                            r(g)
                        } : h()
                    } catch (e) {
                        return h()
                    }
                }() : h();
                var O = Math.random().toString(36).substring(16);

                function C() {}
                var x = void 0,
                    E = 1,
                    z = 2,
                    S = new D;

                function P(e) {
                    try {
                        return e.then
                    } catch (e) {
                        return S.error = e, S
                    }
                }

                function M(t, o, n) {
                    o.constructor === t.constructor && n === w && o.constructor.resolve === _ ? function(e, t) {
                        t._state === E ? T(e, t._result) : t._state === z ? I(e, t._result) : L(t, void 0, function(t) {
                            return N(e, t)
                        }, function(t) {
                            return I(e, t)
                        })
                    }(t, o) : n === S ? I(t, S.error) : void 0 === n ? T(t, o) : e(n) ? function(e, t, o) {
                        l(function(e) {
                            var n = !1,
                                a = function(e, t, o, n) {
                                    try {
                                        e.call(t, o, n)
                                    } catch (e) {
                                        return e
                                    }
                                }(o, t, function(o) {
                                    n || (n = !0, t !== o ? N(e, o) : T(e, o))
                                }, function(t) {
                                    n || (n = !0, I(e, t))
                                }, e._label);
                            !n && a && (n = !0, I(e, a))
                        }, e)
                    }(t, o, n) : T(t, o)
                }

                function N(e, t) {
                    var o;
                    e === t ? I(e, new TypeError("You cannot resolve a promise with itself")) : "function" == typeof(o = t) || "object" == typeof o && null !== o ? M(e, t, P(t)) : T(e, t)
                }

                function A(e) {
                    e._onerror && e._onerror(e._result), B(e)
                }

                function T(e, t) {
                    e._state === x && (e._result = t, e._state = E, 0 !== e._subscribers.length && l(B, e))
                }

                function I(e, t) {
                    e._state === x && (e._state = z, e._result = t, l(A, e))
                }

                function L(e, t, o, n) {
                    var a = e._subscribers,
                        i = a.length;
                    e._onerror = null, a[i] = t, a[i + E] = o, a[i + z] = n, 0 === i && e._state && l(B, e)
                }

                function B(e) {
                    var t = e._subscribers,
                        o = e._state;
                    if (0 !== t.length) {
                        for (var n = void 0, a = void 0, i = e._result, r = 0; r < t.length; r += 3) n = t[r], a = t[r + o], n ? G(o, n, a, i) : a(i);
                        e._subscribers.length = 0
                    }
                }

                function D() {
                    this.error = null
                }
                var R = new D;

                function G(t, o, n, a) {
                    var i = e(n),
                        r = void 0,
                        s = void 0,
                        l = void 0,
                        u = void 0;
                    if (i) {
                        if ((r = function(e, t) {
                                try {
                                    return e(t)
                                } catch (e) {
                                    return R.error = e, R
                                }
                            }(n, a)) === R ? (u = !0, s = r.error, r = null) : l = !0, o === r) return void I(o, new TypeError("A promises callback cannot return that same promise."))
                    } else r = a, l = !0;
                    o._state !== x || (i && l ? N(o, r) : u ? I(o, s) : t === E ? T(o, r) : t === z && I(o, r))
                }
                var q = 0;

                function U(e) {
                    e[O] = q++, e._state = void 0, e._result = void 0, e._subscribers = []
                }

                function H(e, t) {
                    this._instanceConstructor = e, this.promise = new e(C), this.promise[O] || U(this.promise), a(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? T(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && T(this.promise, this._result))) : I(this.promise, new Error("Array Methods must be provided an Array"))
                }

                function F(e) {
                    this[O] = q++, this._result = this._state = void 0, this._subscribers = [], C !== e && ("function" != typeof e && function() {
                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                    }(), this instanceof F ? function(e, t) {
                        try {
                            t(function(t) {
                                N(e, t)
                            }, function(t) {
                                I(e, t)
                            })
                        } catch (t) {
                            I(e, t)
                        }
                    }(this, e) : function() {
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                    }())
                }
                return H.prototype._enumerate = function() {
                    for (var e = this.length, t = this._input, o = 0; this._state === x && o < e; o++) this._eachEntry(t[o], o)
                }, H.prototype._eachEntry = function(e, t) {
                    var o = this._instanceConstructor,
                        n = o.resolve;
                    if (n === _) {
                        var a = P(e);
                        if (a === w && e._state !== x) this._settledAt(e._state, t, e._result);
                        else if ("function" != typeof a) this._remaining--, this._result[t] = e;
                        else if (o === F) {
                            var i = new o(C);
                            M(i, e, a), this._willSettleAt(i, t)
                        } else this._willSettleAt(new o(function(t) {
                            return t(e)
                        }), t)
                    } else this._willSettleAt(n(e), t)
                }, H.prototype._settledAt = function(e, t, o) {
                    var n = this.promise;
                    n._state === x && (this._remaining--, e === z ? I(n, o) : this._result[t] = o), 0 === this._remaining && T(n, this._result)
                }, H.prototype._willSettleAt = function(e, t) {
                    var o = this;
                    L(e, void 0, function(e) {
                        return o._settledAt(E, t, e)
                    }, function(e) {
                        return o._settledAt(z, t, e)
                    })
                }, F.all = function(e) {
                    return new H(this, e).promise
                }, F.race = function(e) {
                    var t = this;
                    return a(e) ? new t(function(o, n) {
                        for (var a = e.length, i = 0; i < a; i++) t.resolve(e[i]).then(o, n)
                    }) : new t(function(e, t) {
                        return t(new TypeError("You must pass an array to race."))
                    })
                }, F.resolve = _, F.reject = function(e) {
                    var t = new this(C);
                    return I(t, e), t
                }, F._setScheduler = function(e) {
                    s = e
                }, F._setAsap = function(e) {
                    l = e
                }, F._asap = l, F.prototype = {
                    constructor: F,
                    then: w,
                    catch: function(e) {
                        return this.then(null, e)
                    }
                }, F.polyfill = function() {
                    var e = void 0;
                    if (void 0 !== n) e = n;
                    else if ("undefined" != typeof self) e = self;
                    else try {
                        e = Function("return this")()
                    } catch (e) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                    var t = e.Promise;
                    if (t) {
                        var o = null;
                        try {
                            o = Object.prototype.toString.call(t.resolve())
                        } catch (e) {}
                        if ("[object Promise]" === o && !t.cast) return
                    }
                    e.Promise = F
                }, F.Promise = F, F
            }, e.exports = a()
        }).call(this, o("../node_modules/process/browser.js"), o("../node_modules/webpack/buildin/global.js"))
    },
    "../node_modules/fbjs/lib/EventListener.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/fbjs/lib/emptyFunction.js"),
            a = {
                listen: function(e, t, o) {
                    return e.addEventListener ? (e.addEventListener(t, o, !1), {
                        remove: function() {
                            e.removeEventListener(t, o, !1)
                        }
                    }) : e.attachEvent ? (e.attachEvent("on" + t, o), {
                        remove: function() {
                            e.detachEvent("on" + t, o)
                        }
                    }) : void 0
                },
                capture: function(e, t, o) {
                    return e.addEventListener ? (e.addEventListener(t, o, !0), {
                        remove: function() {
                            e.removeEventListener(t, o, !0)
                        }
                    }) : {
                        remove: n
                    }
                },
                registerDefault: function() {}
            };
        e.exports = a
    },
    "../node_modules/fbjs/lib/ExecutionEnvironment.js": function(e, t, o) {
        "use strict";
        var n = !("undefined" == typeof window || !window.document || !window.document.createElement),
            a = {
                canUseDOM: n,
                canUseWorkers: "undefined" != typeof Worker,
                canUseEventListeners: n && !(!window.addEventListener && !window.attachEvent),
                canUseViewport: n && !!window.screen,
                isInWorker: !n
            };
        e.exports = a
    },
    "../node_modules/fbjs/lib/camelize.js": function(e, t, o) {
        "use strict";
        var n = /-(.)/g;
        e.exports = function(e) {
            return e.replace(n, function(e, t) {
                return t.toUpperCase()
            })
        }
    },
    "../node_modules/fbjs/lib/camelizeStyleName.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/fbjs/lib/camelize.js"),
            a = /^-ms-/;
        e.exports = function(e) {
            return n(e.replace(a, "ms-"))
        }
    },
    "../node_modules/fbjs/lib/containsNode.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/fbjs/lib/isTextNode.js");
        e.exports = function e(t, o) {
            return !(!t || !o) && (t === o || !n(t) && (n(o) ? e(t, o.parentNode) : "contains" in t ? t.contains(o) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(o))))
        }
    },
    "../node_modules/fbjs/lib/createArrayFromMixed.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/fbjs/lib/invariant.js");
        e.exports = function(e) {
            return function(e) {
                return !!e && ("object" == typeof e || "function" == typeof e) && "length" in e && !("setInterval" in e) && "number" != typeof e.nodeType && (Array.isArray(e) || "callee" in e || "item" in e)
            }(e) ? Array.isArray(e) ? e.slice() : function(e) {
                var t = e.length;
                if ((Array.isArray(e) || "object" != typeof e && "function" != typeof e) && n(!1), "number" != typeof t && n(!1), 0 === t || t - 1 in e || n(!1), "function" == typeof e.callee && n(!1), e.hasOwnProperty) try {
                    return Array.prototype.slice.call(e)
                } catch (e) {}
                for (var o = Array(t), a = 0; a < t; a++) o[a] = e[a];
                return o
            }(e) : [e]
        }
    },
    "../node_modules/fbjs/lib/createNodesFromMarkup.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/fbjs/lib/ExecutionEnvironment.js"),
            a = o("../node_modules/fbjs/lib/createArrayFromMixed.js"),
            i = o("../node_modules/fbjs/lib/getMarkupWrap.js"),
            r = o("../node_modules/fbjs/lib/invariant.js"),
            s = n.canUseDOM ? document.createElement("div") : null,
            l = /^\s*<(\w+)/;
        e.exports = function(e, t) {
            var o = s;
            s || r(!1);
            var n = function(e) {
                    var t = e.match(l);
                    return t && t[1].toLowerCase()
                }(e),
                u = n && i(n);
            if (u) {
                o.innerHTML = u[1] + e + u[2];
                for (var c = u[0]; c--;) o = o.lastChild
            } else o.innerHTML = e;
            var d = o.getElementsByTagName("script");
            d.length && (t || r(!1), a(d).forEach(t));
            for (var p = Array.from(o.childNodes); o.lastChild;) o.removeChild(o.lastChild);
            return p
        }
    },
    "../node_modules/fbjs/lib/emptyFunction.js": function(e, t, o) {
        "use strict";

        function n(e) {
            return function() {
                return e
            }
        }
        var a = function() {};
        a.thatReturns = n, a.thatReturnsFalse = n(!1), a.thatReturnsTrue = n(!0), a.thatReturnsNull = n(null), a.thatReturnsThis = function() {
            return this
        }, a.thatReturnsArgument = function(e) {
            return e
        }, e.exports = a
    },
    "../node_modules/fbjs/lib/emptyObject.js": function(e, t, o) {
        "use strict";
        e.exports = {}
    },
    "../node_modules/fbjs/lib/focusNode.js": function(e, t, o) {
        "use strict";
        e.exports = function(e) {
            try {
                e.focus()
            } catch (e) {}
        }
    },
    "../node_modules/fbjs/lib/getActiveElement.js": function(e, t, o) {
        "use strict";
        e.exports = function(e) {
            if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
            try {
                return e.activeElement || e.body
            } catch (t) {
                return e.body
            }
        }
    },
    "../node_modules/fbjs/lib/getMarkupWrap.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/fbjs/lib/ExecutionEnvironment.js"),
            a = o("../node_modules/fbjs/lib/invariant.js"),
            i = n.canUseDOM ? document.createElement("div") : null,
            r = {},
            s = [1, '<select multiple="true">', "</select>"],
            l = [1, "<table>", "</table>"],
            u = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            c = [1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>"],
            d = {
                "*": [1, "?<div>", "</div>"],
                area: [1, "<map>", "</map>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                param: [1, "<object>", "</object>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                optgroup: s,
                option: s,
                caption: l,
                colgroup: l,
                tbody: l,
                tfoot: l,
                thead: l,
                td: u,
                th: u
            };
        ["circle", "clipPath", "defs", "ellipse", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "text", "tspan"].forEach(function(e) {
            d[e] = c, r[e] = !0
        }), e.exports = function(e) {
            return i || a(!1), d.hasOwnProperty(e) || (e = "*"), r.hasOwnProperty(e) || (i.innerHTML = "*" === e ? "<link />" : "<" + e + "></" + e + ">", r[e] = !i.firstChild), r[e] ? d[e] : null
        }
    },
    "../node_modules/fbjs/lib/getUnboundedScrollPosition.js": function(e, t, o) {
        "use strict";
        e.exports = function(e) {
            return e.Window && e instanceof e.Window ? {
                x: e.pageXOffset || e.document.documentElement.scrollLeft,
                y: e.pageYOffset || e.document.documentElement.scrollTop
            } : {
                x: e.scrollLeft,
                y: e.scrollTop
            }
        }
    },
    "../node_modules/fbjs/lib/hyphenate.js": function(e, t, o) {
        "use strict";
        var n = /([A-Z])/g;
        e.exports = function(e) {
            return e.replace(n, "-$1").toLowerCase()
        }
    },
    "../node_modules/fbjs/lib/hyphenateStyleName.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/fbjs/lib/hyphenate.js"),
            a = /^ms-/;
        e.exports = function(e) {
            return n(e).replace(a, "-ms-")
        }
    },
    "../node_modules/fbjs/lib/invariant.js": function(e, t, o) {
        "use strict";
        var n = function(e) {};
        e.exports = function(e, t, o, a, i, r, s, l) {
            if (n(t), !e) {
                var u;
                if (void 0 === t) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var c = [o, a, i, r, s, l],
                        d = 0;
                    (u = new Error(t.replace(/%s/g, function() {
                        return c[d++]
                    }))).name = "Invariant Violation"
                }
                throw u.framesToPop = 1, u
            }
        }
    },
    "../node_modules/fbjs/lib/isNode.js": function(e, t, o) {
        "use strict";
        e.exports = function(e) {
            var t = (e ? e.ownerDocument || e : document).defaultView || window;
            return !(!e || !("function" == typeof t.Node ? e instanceof t.Node : "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName))
        }
    },
    "../node_modules/fbjs/lib/isTextNode.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/fbjs/lib/isNode.js");
        e.exports = function(e) {
            return n(e) && 3 == e.nodeType
        }
    },
    "../node_modules/fbjs/lib/memoizeStringOnly.js": function(e, t, o) {
        "use strict";
        e.exports = function(e) {
            var t = {};
            return function(o) {
                return t.hasOwnProperty(o) || (t[o] = e.call(this, o)), t[o]
            }
        }
    },
    "../node_modules/fbjs/lib/shallowEqual.js": function(e, t, o) {
        "use strict";
        var n = Object.prototype.hasOwnProperty;

        function a(e, t) {
            return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
        }
        e.exports = function(e, t) {
            if (a(e, t)) return !0;
            if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
            var o = Object.keys(e),
                i = Object.keys(t);
            if (o.length !== i.length) return !1;
            for (var r = 0; r < o.length; r++)
                if (!n.call(t, o[r]) || !a(e[o[r]], t[o[r]])) return !1;
            return !0
        }
    },
    "../node_modules/fbjs/lib/warning.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/fbjs/lib/emptyFunction.js");
        e.exports = n
    },
    "../node_modules/object-assign/index.js": function(e, t, o) {
        "use strict";
        /*
        object-assign
        (c) Sindre Sorhus
        @license MIT
        */
        var n = Object.getOwnPropertySymbols,
            a = Object.prototype.hasOwnProperty,
            i = Object.prototype.propertyIsEnumerable;
        e.exports = function() {
            try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                for (var t = {}, o = 0; o < 10; o++) t["_" + String.fromCharCode(o)] = o;
                if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                        return t[e]
                    }).join("")) return !1;
                var n = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                    n[e] = e
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
            } catch (e) {
                return !1
            }
        }() ? Object.assign : function(e, t) {
            for (var o, r, s = function(e) {
                    if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(e)
                }(e), l = 1; l < arguments.length; l++) {
                for (var u in o = Object(arguments[l])) a.call(o, u) && (s[u] = o[u]);
                if (n) {
                    r = n(o);
                    for (var c = 0; c < r.length; c++) i.call(o, r[c]) && (s[r[c]] = o[r[c]])
                }
            }
            return s
        }
    },
    "../node_modules/process/browser.js": function(e, t) {
        var o, n, a = e.exports = {};

        function i() {
            throw new Error("setTimeout has not been defined")
        }

        function r() {
            throw new Error("clearTimeout has not been defined")
        }

        function s(e) {
            if (o === setTimeout) return setTimeout(e, 0);
            if ((o === i || !o) && setTimeout) return o = setTimeout, setTimeout(e, 0);
            try {
                return o(e, 0)
            } catch (t) {
                try {
                    return o.call(null, e, 0)
                } catch (t) {
                    return o.call(this, e, 0)
                }
            }
        }! function() {
            try {
                o = "function" == typeof setTimeout ? setTimeout : i
            } catch (e) {
                o = i
            }
            try {
                n = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (e) {
                n = r
            }
        }();
        var l, u = [],
            c = !1,
            d = -1;

        function p() {
            c && l && (c = !1, l.length ? u = l.concat(u) : d = -1, u.length && m())
        }

        function m() {
            if (!c) {
                var e = s(p);
                c = !0;
                for (var t = u.length; t;) {
                    for (l = u, u = []; ++d < t;) l && l[d].run();
                    d = -1, t = u.length
                }
                l = null, c = !1,
                    function(e) {
                        if (n === clearTimeout) return clearTimeout(e);
                        if ((n === r || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                        try {
                            n(e)
                        } catch (t) {
                            try {
                                return n.call(null, e)
                            } catch (t) {
                                return n.call(this, e)
                            }
                        }
                    }(e)
            }
        }

        function h(e, t) {
            this.fun = e, this.array = t
        }

        function f() {}
        a.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
            u.push(new h(e, t)), 1 !== u.length || c || s(m)
        }, h.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = f, a.addListener = f, a.once = f, a.off = f, a.removeListener = f, a.removeAllListeners = f, a.emit = f, a.prependListener = f, a.prependOnceListener = f, a.listeners = function(e) {
            return []
        }, a.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, a.cwd = function() {
            return "/"
        }, a.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, a.umask = function() {
            return 0
        }
    },
    "../node_modules/prop-types/checkPropTypes.js": function(e, t, o) {
        "use strict";
        e.exports = function(e, t, o, n, a) {}
    },
    "../node_modules/prop-types/factory.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/prop-types/factoryWithTypeCheckers.js");
        e.exports = function(e) {
            return n(e, !1)
        }
    },
    "../node_modules/prop-types/factoryWithTypeCheckers.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/object-assign/index.js"),
            a = o("../node_modules/prop-types/lib/ReactPropTypesSecret.js"),
            i = o("../node_modules/prop-types/checkPropTypes.js"),
            r = function() {};

        function s() {
            return null
        }
        e.exports = function(e, t) {
            var o = "function" == typeof Symbol && Symbol.iterator,
                l = "@@iterator";
            var u = "<<anonymous>>",
                c = {
                    array: h("array"),
                    bool: h("boolean"),
                    func: h("function"),
                    number: h("number"),
                    object: h("object"),
                    string: h("string"),
                    symbol: h("symbol"),
                    any: m(s),
                    arrayOf: function(e) {
                        return m(function(t, o, n, i, r) {
                            if ("function" != typeof e) return new p("Property `" + r + "` of component `" + n + "` has invalid PropType notation inside arrayOf.");
                            var s = t[o];
                            if (!Array.isArray(s)) {
                                var l = g(s);
                                return new p("Invalid " + i + " `" + r + "` of type `" + l + "` supplied to `" + n + "`, expected an array.")
                            }
                            for (var u = 0; u < s.length; u++) {
                                var c = e(s, u, n, i, r + "[" + u + "]", a);
                                if (c instanceof Error) return c
                            }
                            return null
                        })
                    },
                    element: function() {
                        return m(function(t, o, n, a, i) {
                            var r = t[o];
                            if (!e(r)) {
                                var s = g(r);
                                return new p("Invalid " + a + " `" + i + "` of type `" + s + "` supplied to `" + n + "`, expected a single ReactElement.")
                            }
                            return null
                        })
                    }(),
                    instanceOf: function(e) {
                        return m(function(t, o, n, a, i) {
                            if (!(t[o] instanceof e)) {
                                var r = e.name || u,
                                    s = function(e) {
                                        if (!e.constructor || !e.constructor.name) return u;
                                        return e.constructor.name
                                    }(t[o]);
                                return new p("Invalid " + a + " `" + i + "` of type `" + s + "` supplied to `" + n + "`, expected instance of `" + r + "`.")
                            }
                            return null
                        })
                    },
                    node: function() {
                        return m(function(e, t, o, n, a) {
                            if (!f(e[t])) return new p("Invalid " + n + " `" + a + "` supplied to `" + o + "`, expected a ReactNode.");
                            return null
                        })
                    }(),
                    objectOf: function(e) {
                        return m(function(t, o, n, i, r) {
                            if ("function" != typeof e) return new p("Property `" + r + "` of component `" + n + "` has invalid PropType notation inside objectOf.");
                            var s = t[o],
                                l = g(s);
                            if ("object" !== l) return new p("Invalid " + i + " `" + r + "` of type `" + l + "` supplied to `" + n + "`, expected an object.");
                            for (var u in s)
                                if (s.hasOwnProperty(u)) {
                                    var c = e(s, u, n, i, r + "." + u, a);
                                    if (c instanceof Error) return c
                                } return null
                        })
                    },
                    oneOf: function(e) {
                        if (!Array.isArray(e)) return s;
                        return m(function(t, o, n, a, i) {
                            for (var r = t[o], s = 0; s < e.length; s++)
                                if (d(r, e[s])) return null;
                            var l = JSON.stringify(e);
                            return new p("Invalid " + a + " `" + i + "` of value `" + r + "` supplied to `" + n + "`, expected one of " + l + ".")
                        })
                    },
                    oneOfType: function(e) {
                        if (!Array.isArray(e)) return s;
                        for (var t = 0; t < e.length; t++) {
                            var o = e[t];
                            if ("function" != typeof o) return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + b(o) + " at index " + t + "."), s
                        }
                        return m(function(t, o, n, i, r) {
                            for (var s = 0; s < e.length; s++) {
                                var l = e[s];
                                if (null == l(t, o, n, i, r, a)) return null
                            }
                            return new p("Invalid " + i + " `" + r + "` supplied to `" + n + "`.")
                        })
                    },
                    shape: function(e) {
                        return m(function(t, o, n, i, r) {
                            var s = t[o],
                                l = g(s);
                            if ("object" !== l) return new p("Invalid " + i + " `" + r + "` of type `" + l + "` supplied to `" + n + "`, expected `object`.");
                            for (var u in e) {
                                var c = e[u];
                                if (c) {
                                    var d = c(s, u, n, i, r + "." + u, a);
                                    if (d) return d
                                }
                            }
                            return null
                        })
                    },
                    exact: function(e) {
                        return m(function(t, o, i, r, s) {
                            var l = t[o],
                                u = g(l);
                            if ("object" !== u) return new p("Invalid " + r + " `" + s + "` of type `" + u + "` supplied to `" + i + "`, expected `object`.");
                            var c = n({}, t[o], e);
                            for (var d in c) {
                                var m = e[d];
                                if (!m) return new p("Invalid " + r + " `" + s + "` key `" + d + "` supplied to `" + i + "`.\nBad object: " + JSON.stringify(t[o], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
                                var h = m(l, d, i, r, s + "." + d, a);
                                if (h) return h
                            }
                            return null
                        })
                    }
                };

            function d(e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
            }

            function p(e) {
                this.message = e, this.stack = ""
            }

            function m(e) {
                function o(o, n, i, r, s, l, c) {
                    if ((r = r || u, l = l || i, c !== a) && t) {
                        var d = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                        throw d.name = "Invariant Violation", d
                    }
                    return null == n[i] ? o ? null === n[i] ? new p("The " + s + " `" + l + "` is marked as required in `" + r + "`, but its value is `null`.") : new p("The " + s + " `" + l + "` is marked as required in `" + r + "`, but its value is `undefined`.") : null : e(n, i, r, s, l)
                }
                var n = o.bind(null, !1);
                return n.isRequired = o.bind(null, !0), n
            }

            function h(e) {
                return m(function(t, o, n, a, i, r) {
                    var s = t[o];
                    return g(s) !== e ? new p("Invalid " + a + " `" + i + "` of type `" + k(s) + "` supplied to `" + n + "`, expected `" + e + "`.") : null
                })
            }

            function f(t) {
                switch (typeof t) {
                    case "number":
                    case "string":
                    case "undefined":
                        return !0;
                    case "boolean":
                        return !t;
                    case "object":
                        if (Array.isArray(t)) return t.every(f);
                        if (null === t || e(t)) return !0;
                        var n = function(e) {
                            var t = e && (o && e[o] || e[l]);
                            if ("function" == typeof t) return t
                        }(t);
                        if (!n) return !1;
                        var a, i = n.call(t);
                        if (n !== t.entries) {
                            for (; !(a = i.next()).done;)
                                if (!f(a.value)) return !1
                        } else
                            for (; !(a = i.next()).done;) {
                                var r = a.value;
                                if (r && !f(r[1])) return !1
                            }
                        return !0;
                    default:
                        return !1
                }
            }

            function g(e) {
                var t = typeof e;
                return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : function(e, t) {
                    return "symbol" === e || "Symbol" === t["@@toStringTag"] || "function" == typeof Symbol && t instanceof Symbol
                }(t, e) ? "symbol" : t
            }

            function k(e) {
                if (null == e) return "" + e;
                var t = g(e);
                if ("object" === t) {
                    if (e instanceof Date) return "date";
                    if (e instanceof RegExp) return "regexp"
                }
                return t
            }

            function b(e) {
                var t = k(e);
                switch (t) {
                    case "array":
                    case "object":
                        return "an " + t;
                    case "boolean":
                    case "date":
                    case "regexp":
                        return "a " + t;
                    default:
                        return t
                }
            }
            return p.prototype = Error.prototype, c.checkPropTypes = i, c.PropTypes = c, c
        }
    },
    "../node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, o) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    "../node_modules/react-dom/index.js": function(e, t, o) {
        "use strict";
        e.exports = o("../node_modules/react-dom/lib/ReactDOM.js")
    },
    "../node_modules/react-dom/lib/ARIADOMPropertyConfig.js": function(e, t, o) {
        "use strict";
        e.exports = {
            Properties: {
                "aria-current": 0,
                "aria-details": 0,
                "aria-disabled": 0,
                "aria-hidden": 0,
                "aria-invalid": 0,
                "aria-keyshortcuts": 0,
                "aria-label": 0,
                "aria-roledescription": 0,
                "aria-autocomplete": 0,
                "aria-checked": 0,
                "aria-expanded": 0,
                "aria-haspopup": 0,
                "aria-level": 0,
                "aria-modal": 0,
                "aria-multiline": 0,
                "aria-multiselectable": 0,
                "aria-orientation": 0,
                "aria-placeholder": 0,
                "aria-pressed": 0,
                "aria-readonly": 0,
                "aria-required": 0,
                "aria-selected": 0,
                "aria-sort": 0,
                "aria-valuemax": 0,
                "aria-valuemin": 0,
                "aria-valuenow": 0,
                "aria-valuetext": 0,
                "aria-atomic": 0,
                "aria-busy": 0,
                "aria-live": 0,
                "aria-relevant": 0,
                "aria-dropeffect": 0,
                "aria-grabbed": 0,
                "aria-activedescendant": 0,
                "aria-colcount": 0,
                "aria-colindex": 0,
                "aria-colspan": 0,
                "aria-controls": 0,
                "aria-describedby": 0,
                "aria-errormessage": 0,
                "aria-flowto": 0,
                "aria-labelledby": 0,
                "aria-owns": 0,
                "aria-posinset": 0,
                "aria-rowcount": 0,
                "aria-rowindex": 0,
                "aria-rowspan": 0,
                "aria-setsize": 0
            },
            DOMAttributeNames: {},
            DOMPropertyNames: {}
        }
    },
    "../node_modules/react-dom/lib/AutoFocusUtils.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/ReactDOMComponentTree.js"),
            a = o("../node_modules/fbjs/lib/focusNode.js"),
            i = {
                focusDOMComponent: function() {
                    a(n.getNodeFromInstance(this))
                }
            };
        e.exports = i
    },
    "../node_modules/react-dom/lib/BeforeInputEventPlugin.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/EventPropagators.js"),
            a = o("../node_modules/fbjs/lib/ExecutionEnvironment.js"),
            i = o("../node_modules/react-dom/lib/FallbackCompositionState.js"),
            r = o("../node_modules/react-dom/lib/SyntheticCompositionEvent.js"),
            s = o("../node_modules/react-dom/lib/SyntheticInputEvent.js"),
            l = [9, 13, 27, 32],
            u = 229,
            c = a.canUseDOM && "CompositionEvent" in window,
            d = null;
        a.canUseDOM && "documentMode" in document && (d = document.documentMode);
        var p, m = a.canUseDOM && "TextEvent" in window && !d && !("object" == typeof(p = window.opera) && "function" == typeof p.version && parseInt(p.version(), 10) <= 12),
            h = a.canUseDOM && (!c || d && d > 8 && d <= 11);
        var f = 32,
            g = String.fromCharCode(f),
            k = {
                beforeInput: {
                    phasedRegistrationNames: {
                        bubbled: "onBeforeInput",
                        captured: "onBeforeInputCapture"
                    },
                    dependencies: ["topCompositionEnd", "topKeyPress", "topTextInput", "topPaste"]
                },
                compositionEnd: {
                    phasedRegistrationNames: {
                        bubbled: "onCompositionEnd",
                        captured: "onCompositionEndCapture"
                    },
                    dependencies: ["topBlur", "topCompositionEnd", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown"]
                },
                compositionStart: {
                    phasedRegistrationNames: {
                        bubbled: "onCompositionStart",
                        captured: "onCompositionStartCapture"
                    },
                    dependencies: ["topBlur", "topCompositionStart", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown"]
                },
                compositionUpdate: {
                    phasedRegistrationNames: {
                        bubbled: "onCompositionUpdate",
                        captured: "onCompositionUpdateCapture"
                    },
                    dependencies: ["topBlur", "topCompositionUpdate", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown"]
                }
            },
            b = !1;

        function v(e, t) {
            switch (e) {
                case "topKeyUp":
                    return -1 !== l.indexOf(t.keyCode);
                case "topKeyDown":
                    return t.keyCode !== u;
                case "topKeyPress":
                case "topMouseDown":
                case "topBlur":
                    return !0;
                default:
                    return !1
            }
        }

        function y(e) {
            var t = e.detail;
            return "object" == typeof t && "data" in t ? t.data : null
        }
        var j = null;

        function w(e, t, o, a) {
            var s, l;
            if (c ? s = function(e) {
                    switch (e) {
                        case "topCompositionStart":
                            return k.compositionStart;
                        case "topCompositionEnd":
                            return k.compositionEnd;
                        case "topCompositionUpdate":
                            return k.compositionUpdate
                    }
                }(e) : j ? v(e, o) && (s = k.compositionEnd) : function(e, t) {
                    return "topKeyDown" === e && t.keyCode === u
                }(e, o) && (s = k.compositionStart), !s) return null;
            h && (j || s !== k.compositionStart ? s === k.compositionEnd && j && (l = j.getData()) : j = i.getPooled(a));
            var d = r.getPooled(s, t, o, a);
            if (l) d.data = l;
            else {
                var p = y(o);
                null !== p && (d.data = p)
            }
            return n.accumulateTwoPhaseDispatches(d), d
        }

        function _(e, t, o, a) {
            var r;
            if (!(r = m ? function(e, t) {
                    switch (e) {
                        case "topCompositionEnd":
                            return y(t);
                        case "topKeyPress":
                            return t.which !== f ? null : (b = !0, g);
                        case "topTextInput":
                            var o = t.data;
                            return o === g && b ? null : o;
                        default:
                            return null
                    }
                }(e, o) : function(e, t) {
                    if (j) {
                        if ("topCompositionEnd" === e || !c && v(e, t)) {
                            var o = j.getData();
                            return i.release(j), j = null, o
                        }
                        return null
                    }
                    switch (e) {
                        case "topPaste":
                            return null;
                        case "topKeyPress":
                            return t.which && ! function(e) {
                                return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey)
                            }(t) ? String.fromCharCode(t.which) : null;
                        case "topCompositionEnd":
                            return h ? null : t.data;
                        default:
                            return null
                    }
                }(e, o))) return null;
            var l = s.getPooled(k.beforeInput, t, o, a);
            return l.data = r, n.accumulateTwoPhaseDispatches(l), l
        }
        var O = {
            eventTypes: k,
            extractEvents: function(e, t, o, n) {
                return [w(e, t, o, n), _(e, t, o, n)]
            }
        };
        e.exports = O
    },
    "../node_modules/react-dom/lib/CSSProperty.js": function(e, t, o) {
        "use strict";
        var n = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        };
        var a = ["Webkit", "ms", "Moz", "O"];
        Object.keys(n).forEach(function(e) {
            a.forEach(function(t) {
                n[function(e, t) {
                    return e + t.charAt(0).toUpperCase() + t.substring(1)
                }(t, e)] = n[e]
            })
        });
        var i = {
            isUnitlessNumber: n,
            shorthandPropertyExpansions: {
                background: {
                    backgroundAttachment: !0,
                    backgroundColor: !0,
                    backgroundImage: !0,
                    backgroundPositionX: !0,
                    backgroundPositionY: !0,
                    backgroundRepeat: !0
                },
                backgroundPosition: {
                    backgroundPositionX: !0,
                    backgroundPositionY: !0
                },
                border: {
                    borderWidth: !0,
                    borderStyle: !0,
                    borderColor: !0
                },
                borderBottom: {
                    borderBottomWidth: !0,
                    borderBottomStyle: !0,
                    borderBottomColor: !0
                },
                borderLeft: {
                    borderLeftWidth: !0,
                    borderLeftStyle: !0,
                    borderLeftColor: !0
                },
                borderRight: {
                    borderRightWidth: !0,
                    borderRightStyle: !0,
                    borderRightColor: !0
                },
                borderTop: {
                    borderTopWidth: !0,
                    borderTopStyle: !0,
                    borderTopColor: !0
                },
                font: {
                    fontStyle: !0,
                    fontVariant: !0,
                    fontWeight: !0,
                    fontSize: !0,
                    lineHeight: !0,
                    fontFamily: !0
                },
                outline: {
                    outlineWidth: !0,
                    outlineStyle: !0,
                    outlineColor: !0
                }
            }
        };
        e.exports = i
    },
    "../node_modules/react-dom/lib/CSSPropertyOperations.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/CSSProperty.js"),
            a = o("../node_modules/fbjs/lib/ExecutionEnvironment.js"),
            i = (o("../node_modules/react-dom/lib/ReactInstrumentation.js"), o("../node_modules/fbjs/lib/camelizeStyleName.js"), o("../node_modules/react-dom/lib/dangerousStyleValue.js")),
            r = o("../node_modules/fbjs/lib/hyphenateStyleName.js"),
            s = o("../node_modules/fbjs/lib/memoizeStringOnly.js"),
            l = (o("../node_modules/fbjs/lib/warning.js"), s(function(e) {
                return r(e)
            })),
            u = !1,
            c = "cssFloat";
        if (a.canUseDOM) {
            var d = document.createElement("div").style;
            try {
                d.font = ""
            } catch (e) {
                u = !0
            }
            void 0 === document.documentElement.style.cssFloat && (c = "styleFloat")
        }
        var p = {
            createMarkupForStyles: function(e, t) {
                var o = "";
                for (var n in e)
                    if (e.hasOwnProperty(n)) {
                        var a = 0 === n.indexOf("--"),
                            r = e[n];
                        0, null != r && (o += l(n) + ":", o += i(n, r, t, a) + ";")
                    } return o || null
            },
            setValueForStyles: function(e, t, o) {
                var a = e.style;
                for (var r in t)
                    if (t.hasOwnProperty(r)) {
                        var s = 0 === r.indexOf("--");
                        0;
                        var l = i(r, t[r], o, s);
                        if ("float" !== r && "cssFloat" !== r || (r = c), s) a.setProperty(r, l);
                        else if (l) a[r] = l;
                        else {
                            var d = u && n.shorthandPropertyExpansions[r];
                            if (d)
                                for (var p in d) a[p] = "";
                            else a[r] = ""
                        }
                    }
            }
        };
        e.exports = p
    },
    "../node_modules/react-dom/lib/CallbackQueue.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/reactProdInvariant.js");
        var a = o("../node_modules/react-dom/lib/PooledClass.js"),
            i = (o("../node_modules/fbjs/lib/invariant.js"), function() {
                function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this._callbacks = null, this._contexts = null, this._arg = t
                }
                return e.prototype.enqueue = function(e, t) {
                    this._callbacks = this._callbacks || [], this._callbacks.push(e), this._contexts = this._contexts || [], this._contexts.push(t)
                }, e.prototype.notifyAll = function() {
                    var e = this._callbacks,
                        t = this._contexts,
                        o = this._arg;
                    if (e && t) {
                        e.length !== t.length && n("24"), this._callbacks = null, this._contexts = null;
                        for (var a = 0; a < e.length; a++) e[a].call(t[a], o);
                        e.length = 0, t.length = 0
                    }
                }, e.prototype.checkpoint = function() {
                    return this._callbacks ? this._callbacks.length : 0
                }, e.prototype.rollback = function(e) {
                    this._callbacks && this._contexts && (this._callbacks.length = e, this._contexts.length = e)
                }, e.prototype.reset = function() {
                    this._callbacks = null, this._contexts = null
                }, e.prototype.destructor = function() {
                    this.reset()
                }, e
            }());
        e.exports = a.addPoolingTo(i)
    },
    "../node_modules/react-dom/lib/ChangeEventPlugin.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/EventPluginHub.js"),
            a = o("../node_modules/react-dom/lib/EventPropagators.js"),
            i = o("../node_modules/fbjs/lib/ExecutionEnvironment.js"),
            r = o("../node_modules/react-dom/lib/ReactDOMComponentTree.js"),
            s = o("../node_modules/react-dom/lib/ReactUpdates.js"),
            l = o("../node_modules/react-dom/lib/SyntheticEvent.js"),
            u = o("../node_modules/react-dom/lib/inputValueTracking.js"),
            c = o("../node_modules/react-dom/lib/getEventTarget.js"),
            d = o("../node_modules/react-dom/lib/isEventSupported.js"),
            p = o("../node_modules/react-dom/lib/isTextInputElement.js"),
            m = {
                change: {
                    phasedRegistrationNames: {
                        bubbled: "onChange",
                        captured: "onChangeCapture"
                    },
                    dependencies: ["topBlur", "topChange", "topClick", "topFocus", "topInput", "topKeyDown", "topKeyUp", "topSelectionChange"]
                }
            };

        function h(e, t, o) {
            var n = l.getPooled(m.change, e, t, o);
            return n.type = "change", a.accumulateTwoPhaseDispatches(n), n
        }
        var f = null,
            g = null;
        var k = !1;

        function b(e) {
            var t = h(g, e, c(e));
            s.batchedUpdates(v, t)
        }

        function v(e) {
            n.enqueueEvents(e), n.processEventQueue(!1)
        }

        function y() {
            f && (f.detachEvent("onchange", b), f = null, g = null)
        }

        function j(e, t) {
            var o = u.updateValueIfChanged(e),
                n = !0 === t.simulated && M._allowSimulatedPassThrough;
            if (o || n) return e
        }

        function w(e, t) {
            if ("topChange" === e) return t
        }

        function _(e, t, o) {
            "topFocus" === e ? (y(), function(e, t) {
                g = t, (f = e).attachEvent("onchange", b)
            }(t, o)) : "topBlur" === e && y()
        }
        i.canUseDOM && (k = d("change") && (!document.documentMode || document.documentMode > 8));
        var O = !1;

        function C() {
            f && (f.detachEvent("onpropertychange", x), f = null, g = null)
        }

        function x(e) {
            "value" === e.propertyName && j(g, e) && b(e)
        }

        function E(e, t, o) {
            "topFocus" === e ? (C(), function(e, t) {
                g = t, (f = e).attachEvent("onpropertychange", x)
            }(t, o)) : "topBlur" === e && C()
        }

        function z(e, t, o) {
            if ("topSelectionChange" === e || "topKeyUp" === e || "topKeyDown" === e) return j(g, o)
        }

        function S(e, t, o) {
            if ("topClick" === e) return j(t, o)
        }

        function P(e, t, o) {
            if ("topInput" === e || "topChange" === e) return j(t, o)
        }
        i.canUseDOM && (O = d("input") && (!document.documentMode || document.documentMode > 9));
        var M = {
            eventTypes: m,
            _allowSimulatedPassThrough: !0,
            _isInputEventSupported: O,
            extractEvents: function(e, t, o, n) {
                var a, i, s, l, u = t ? r.getNodeFromInstance(t) : window;
                if ("select" === (l = (s = u).nodeName && s.nodeName.toLowerCase()) || "input" === l && "file" === s.type ? k ? a = w : i = _ : p(u) ? O ? a = P : (a = z, i = E) : function(e) {
                        var t = e.nodeName;
                        return t && "input" === t.toLowerCase() && ("checkbox" === e.type || "radio" === e.type)
                    }(u) && (a = S), a) {
                    var c = a(e, t, o);
                    if (c) return h(c, o, n)
                }
                i && i(e, u, t), "topBlur" === e && function(e, t) {
                    if (null != e) {
                        var o = e._wrapperState || t._wrapperState;
                        if (o && o.controlled && "number" === t.type) {
                            var n = "" + t.value;
                            t.getAttribute("value") !== n && t.setAttribute("value", n)
                        }
                    }
                }(t, u)
            }
        };
        e.exports = M
    },
    "../node_modules/react-dom/lib/DOMChildrenOperations.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/DOMLazyTree.js"),
            a = o("../node_modules/react-dom/lib/Danger.js"),
            i = (o("../node_modules/react-dom/lib/ReactDOMComponentTree.js"), o("../node_modules/react-dom/lib/ReactInstrumentation.js"), o("../node_modules/react-dom/lib/createMicrosoftUnsafeLocalFunction.js")),
            r = o("../node_modules/react-dom/lib/setInnerHTML.js"),
            s = o("../node_modules/react-dom/lib/setTextContent.js");

        function l(e, t) {
            return Array.isArray(t) && (t = t[1]), t ? t.nextSibling : e.firstChild
        }
        var u = i(function(e, t, o) {
            e.insertBefore(t, o)
        });

        function c(e, t, o) {
            n.insertTreeBefore(e, t, o)
        }

        function d(e, t, o) {
            Array.isArray(t) ? function(e, t, o, n) {
                var a = t;
                for (;;) {
                    var i = a.nextSibling;
                    if (u(e, a, n), a === o) break;
                    a = i
                }
            }(e, t[0], t[1], o) : u(e, t, o)
        }

        function p(e, t) {
            if (Array.isArray(t)) {
                var o = t[1];
                m(e, t = t[0], o), e.removeChild(o)
            }
            e.removeChild(t)
        }

        function m(e, t, o) {
            for (;;) {
                var n = t.nextSibling;
                if (n === o) break;
                e.removeChild(n)
            }
        }
        var h = {
            dangerouslyReplaceNodeWithMarkup: a.dangerouslyReplaceNodeWithMarkup,
            replaceDelimitedText: function(e, t, o) {
                var n = e.parentNode,
                    a = e.nextSibling;
                a === t ? o && u(n, document.createTextNode(o), a) : o ? (s(a, o), m(n, a, t)) : m(n, e, t)
            },
            processUpdates: function(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var n = t[o];
                    switch (n.type) {
                        case "INSERT_MARKUP":
                            c(e, n.content, l(e, n.afterNode));
                            break;
                        case "MOVE_EXISTING":
                            d(e, n.fromNode, l(e, n.afterNode));
                            break;
                        case "SET_MARKUP":
                            r(e, n.content);
                            break;
                        case "TEXT_CONTENT":
                            s(e, n.content);
                            break;
                        case "REMOVE_NODE":
                            p(e, n.fromNode)
                    }
                }
            }
        };
        e.exports = h
    },
    "../node_modules/react-dom/lib/DOMLazyTree.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/DOMNamespaces.js"),
            a = o("../node_modules/react-dom/lib/setInnerHTML.js"),
            i = o("../node_modules/react-dom/lib/createMicrosoftUnsafeLocalFunction.js"),
            r = o("../node_modules/react-dom/lib/setTextContent.js"),
            s = "undefined" != typeof document && "number" == typeof document.documentMode || "undefined" != typeof navigator && "string" == typeof navigator.userAgent && /\bEdge\/\d/.test(navigator.userAgent);

        function l(e) {
            if (s) {
                var t = e.node,
                    o = e.children;
                if (o.length)
                    for (var n = 0; n < o.length; n++) u(t, o[n], null);
                else null != e.html ? a(t, e.html) : null != e.text && r(t, e.text)
            }
        }
        var u = i(function(e, t, o) {
            11 === t.node.nodeType || 1 === t.node.nodeType && "object" === t.node.nodeName.toLowerCase() && (null == t.node.namespaceURI || t.node.namespaceURI === n.html) ? (l(t), e.insertBefore(t.node, o)) : (e.insertBefore(t.node, o), l(t))
        });

        function c() {
            return this.node.nodeName
        }

        function d(e) {
            return {
                node: e,
                children: [],
                html: null,
                text: null,
                toString: c
            }
        }
        d.insertTreeBefore = u, d.replaceChildWithTree = function(e, t) {
            e.parentNode.replaceChild(t.node, e), l(t)
        }, d.queueChild = function(e, t) {
            s ? e.children.push(t) : e.node.appendChild(t.node)
        }, d.queueHTML = function(e, t) {
            s ? e.html = t : a(e.node, t)
        }, d.queueText = function(e, t) {
            s ? e.text = t : r(e.node, t)
        }, e.exports = d
    },
    "../node_modules/react-dom/lib/DOMNamespaces.js": function(e, t, o) {
        "use strict";
        e.exports = {
            html: "http://www.w3.org/1999/xhtml",
            mathml: "http://www.w3.org/1998/Math/MathML",
            svg: "http://www.w3.org/2000/svg"
        }
    },
    "../node_modules/react-dom/lib/DOMProperty.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/reactProdInvariant.js");
        o("../node_modules/fbjs/lib/invariant.js");

        function a(e, t) {
            return (e & t) === t
        }
        var i = {
                MUST_USE_PROPERTY: 1,
                HAS_BOOLEAN_VALUE: 4,
                HAS_NUMERIC_VALUE: 8,
                HAS_POSITIVE_NUMERIC_VALUE: 24,
                HAS_OVERLOADED_BOOLEAN_VALUE: 32,
                injectDOMPropertyConfig: function(e) {
                    var t = i,
                        o = e.Properties || {},
                        r = e.DOMAttributeNamespaces || {},
                        l = e.DOMAttributeNames || {},
                        u = e.DOMPropertyNames || {},
                        c = e.DOMMutationMethods || {};
                    for (var d in e.isCustomAttribute && s._isCustomAttributeFunctions.push(e.isCustomAttribute), o) {
                        s.properties.hasOwnProperty(d) && n("48", d);
                        var p = d.toLowerCase(),
                            m = o[d],
                            h = {
                                attributeName: p,
                                attributeNamespace: null,
                                propertyName: d,
                                mutationMethod: null,
                                mustUseProperty: a(m, t.MUST_USE_PROPERTY),
                                hasBooleanValue: a(m, t.HAS_BOOLEAN_VALUE),
                                hasNumericValue: a(m, t.HAS_NUMERIC_VALUE),
                                hasPositiveNumericValue: a(m, t.HAS_POSITIVE_NUMERIC_VALUE),
                                hasOverloadedBooleanValue: a(m, t.HAS_OVERLOADED_BOOLEAN_VALUE)
                            };
                        if (h.hasBooleanValue + h.hasNumericValue + h.hasOverloadedBooleanValue <= 1 || n("50", d), l.hasOwnProperty(d)) {
                            var f = l[d];
                            h.attributeName = f
                        }
                        r.hasOwnProperty(d) && (h.attributeNamespace = r[d]), u.hasOwnProperty(d) && (h.propertyName = u[d]), c.hasOwnProperty(d) && (h.mutationMethod = c[d]), s.properties[d] = h
                    }
                }
            },
            r = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
            s = {
                ID_ATTRIBUTE_NAME: "data-reactid",
                ROOT_ATTRIBUTE_NAME: "data-reactroot",
                ATTRIBUTE_NAME_START_CHAR: r,
                ATTRIBUTE_NAME_CHAR: r + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
                properties: {},
                getPossibleStandardName: null,
                _isCustomAttributeFunctions: [],
                isCustomAttribute: function(e) {
                    for (var t = 0; t < s._isCustomAttributeFunctions.length; t++) {
                        if ((0, s._isCustomAttributeFunctions[t])(e)) return !0
                    }
                    return !1
                },
                injection: i
            };
        e.exports = s
    },
    "../node_modules/react-dom/lib/DOMPropertyOperations.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/DOMProperty.js"),
            a = (o("../node_modules/react-dom/lib/ReactDOMComponentTree.js"), o("../node_modules/react-dom/lib/ReactInstrumentation.js"), o("../node_modules/react-dom/lib/quoteAttributeValueForBrowser.js")),
            i = (o("../node_modules/fbjs/lib/warning.js"), new RegExp("^[" + n.ATTRIBUTE_NAME_START_CHAR + "][" + n.ATTRIBUTE_NAME_CHAR + "]*$")),
            r = {},
            s = {};

        function l(e) {
            return !!s.hasOwnProperty(e) || !r.hasOwnProperty(e) && (i.test(e) ? (s[e] = !0, !0) : (r[e] = !0, !1))
        }

        function u(e, t) {
            return null == t || e.hasBooleanValue && !t || e.hasNumericValue && isNaN(t) || e.hasPositiveNumericValue && t < 1 || e.hasOverloadedBooleanValue && !1 === t
        }
        var c = {
            createMarkupForID: function(e) {
                return n.ID_ATTRIBUTE_NAME + "=" + a(e)
            },
            setAttributeForID: function(e, t) {
                e.setAttribute(n.ID_ATTRIBUTE_NAME, t)
            },
            createMarkupForRoot: function() {
                return n.ROOT_ATTRIBUTE_NAME + '=""'
            },
            setAttributeForRoot: function(e) {
                e.setAttribute(n.ROOT_ATTRIBUTE_NAME, "")
            },
            createMarkupForProperty: function(e, t) {
                var o = n.properties.hasOwnProperty(e) ? n.properties[e] : null;
                if (o) {
                    if (u(o, t)) return "";
                    var i = o.attributeName;
                    return o.hasBooleanValue || o.hasOverloadedBooleanValue && !0 === t ? i + '=""' : i + "=" + a(t)
                }
                return n.isCustomAttribute(e) ? null == t ? "" : e + "=" + a(t) : null
            },
            createMarkupForCustomAttribute: function(e, t) {
                return l(e) && null != t ? e + "=" + a(t) : ""
            },
            setValueForProperty: function(e, t, o) {
                var a = n.properties.hasOwnProperty(t) ? n.properties[t] : null;
                if (a) {
                    var i = a.mutationMethod;
                    if (i) i(e, o);
                    else {
                        if (u(a, o)) return void this.deleteValueForProperty(e, t);
                        if (a.mustUseProperty) e[a.propertyName] = o;
                        else {
                            var r = a.attributeName,
                                s = a.attributeNamespace;
                            s ? e.setAttributeNS(s, r, "" + o) : a.hasBooleanValue || a.hasOverloadedBooleanValue && !0 === o ? e.setAttribute(r, "") : e.setAttribute(r, "" + o)
                        }
                    }
                } else if (n.isCustomAttribute(t)) return void c.setValueForAttribute(e, t, o)
            },
            setValueForAttribute: function(e, t, o) {
                l(t) && (null == o ? e.removeAttribute(t) : e.setAttribute(t, "" + o))
            },
            deleteValueForAttribute: function(e, t) {
                e.removeAttribute(t)
            },
            deleteValueForProperty: function(e, t) {
                var o = n.properties.hasOwnProperty(t) ? n.properties[t] : null;
                if (o) {
                    var a = o.mutationMethod;
                    if (a) a(e, void 0);
                    else if (o.mustUseProperty) {
                        var i = o.propertyName;
                        o.hasBooleanValue ? e[i] = !1 : e[i] = ""
                    } else e.removeAttribute(o.attributeName)
                } else n.isCustomAttribute(t) && e.removeAttribute(t)
            }
        };
        e.exports = c
    },
    "../node_modules/react-dom/lib/Danger.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/reactProdInvariant.js"),
            a = o("../node_modules/react-dom/lib/DOMLazyTree.js"),
            i = o("../node_modules/fbjs/lib/ExecutionEnvironment.js"),
            r = o("../node_modules/fbjs/lib/createNodesFromMarkup.js"),
            s = o("../node_modules/fbjs/lib/emptyFunction.js"),
            l = (o("../node_modules/fbjs/lib/invariant.js"), {
                dangerouslyReplaceNodeWithMarkup: function(e, t) {
                    if (i.canUseDOM || n("56"), t || n("57"), "HTML" === e.nodeName && n("58"), "string" == typeof t) {
                        var o = r(t, s)[0];
                        e.parentNode.replaceChild(o, e)
                    } else a.replaceChildWithTree(e, t)
                }
            });
        e.exports = l
    },
    "../node_modules/react-dom/lib/DefaultEventPluginOrder.js": function(e, t, o) {
        "use strict";
        e.exports = ["ResponderEventPlugin", "SimpleEventPlugin", "TapEventPlugin", "EnterLeaveEventPlugin", "ChangeEventPlugin", "SelectEventPlugin", "BeforeInputEventPlugin"]
    },
    "../node_modules/react-dom/lib/EnterLeaveEventPlugin.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/EventPropagators.js"),
            a = o("../node_modules/react-dom/lib/ReactDOMComponentTree.js"),
            i = o("../node_modules/react-dom/lib/SyntheticMouseEvent.js"),
            r = {
                mouseEnter: {
                    registrationName: "onMouseEnter",
                    dependencies: ["topMouseOut", "topMouseOver"]
                },
                mouseLeave: {
                    registrationName: "onMouseLeave",
                    dependencies: ["topMouseOut", "topMouseOver"]
                }
            },
            s = {
                eventTypes: r,
                extractEvents: function(e, t, o, s) {
                    if ("topMouseOver" === e && (o.relatedTarget || o.fromElement)) return null;
                    if ("topMouseOut" !== e && "topMouseOver" !== e) return null;
                    var l, u, c;
                    if (s.window === s) l = s;
                    else {
                        var d = s.ownerDocument;
                        l = d ? d.defaultView || d.parentWindow : window
                    }
                    if ("topMouseOut" === e) {
                        u = t;
                        var p = o.relatedTarget || o.toElement;
                        c = p ? a.getClosestInstanceFromNode(p) : null
                    } else u = null, c = t;
                    if (u === c) return null;
                    var m = null == u ? l : a.getNodeFromInstance(u),
                        h = null == c ? l : a.getNodeFromInstance(c),
                        f = i.getPooled(r.mouseLeave, u, o, s);
                    f.type = "mouseleave", f.target = m, f.relatedTarget = h;
                    var g = i.getPooled(r.mouseEnter, c, o, s);
                    return g.type = "mouseenter", g.target = h, g.relatedTarget = m, n.accumulateEnterLeaveDispatches(f, g, u, c), [f, g]
                }
            };
        e.exports = s
    },
    "../node_modules/react-dom/lib/EventPluginHub.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/reactProdInvariant.js"),
            a = o("../node_modules/react-dom/lib/EventPluginRegistry.js"),
            i = o("../node_modules/react-dom/lib/EventPluginUtils.js"),
            r = o("../node_modules/react-dom/lib/ReactErrorUtils.js"),
            s = o("../node_modules/react-dom/lib/accumulateInto.js"),
            l = o("../node_modules/react-dom/lib/forEachAccumulated.js"),
            u = (o("../node_modules/fbjs/lib/invariant.js"), {}),
            c = null,
            d = function(e, t) {
                e && (i.executeDispatchesInOrder(e, t), e.isPersistent() || e.constructor.release(e))
            },
            p = function(e) {
                return d(e, !0)
            },
            m = function(e) {
                return d(e, !1)
            },
            h = function(e) {
                return "." + e._rootNodeID
            };
        var f = {
            injection: {
                injectEventPluginOrder: a.injectEventPluginOrder,
                injectEventPluginsByName: a.injectEventPluginsByName
            },
            putListener: function(e, t, o) {
                "function" != typeof o && n("94", t, typeof o);
                var i = h(e);
                (u[t] || (u[t] = {}))[i] = o;
                var r = a.registrationNameModules[t];
                r && r.didPutListener && r.didPutListener(e, t, o)
            },
            getListener: function(e, t) {
                var o = u[t];
                if (function(e, t, o) {
                        switch (e) {
                            case "onClick":
                            case "onClickCapture":
                            case "onDoubleClick":
                            case "onDoubleClickCapture":
                            case "onMouseDown":
                            case "onMouseDownCapture":
                            case "onMouseMove":
                            case "onMouseMoveCapture":
                            case "onMouseUp":
                            case "onMouseUpCapture":
                                return !(!o.disabled || (n = t, "button" !== n && "input" !== n && "select" !== n && "textarea" !== n));
                            default:
                                return !1
                        }
                        var n
                    }(t, e._currentElement.type, e._currentElement.props)) return null;
                var n = h(e);
                return o && o[n]
            },
            deleteListener: function(e, t) {
                var o = a.registrationNameModules[t];
                o && o.willDeleteListener && o.willDeleteListener(e, t);
                var n = u[t];
                n && delete n[h(e)]
            },
            deleteAllListeners: function(e) {
                var t = h(e);
                for (var o in u)
                    if (u.hasOwnProperty(o) && u[o][t]) {
                        var n = a.registrationNameModules[o];
                        n && n.willDeleteListener && n.willDeleteListener(e, o), delete u[o][t]
                    }
            },
            extractEvents: function(e, t, o, n) {
                for (var i, r = a.plugins, l = 0; l < r.length; l++) {
                    var u = r[l];
                    if (u) {
                        var c = u.extractEvents(e, t, o, n);
                        c && (i = s(i, c))
                    }
                }
                return i
            },
            enqueueEvents: function(e) {
                e && (c = s(c, e))
            },
            processEventQueue: function(e) {
                var t = c;
                c = null, l(t, e ? p : m), c && n("95"), r.rethrowCaughtError()
            },
            __purge: function() {
                u = {}
            },
            __getListenerBank: function() {
                return u
            }
        };
        e.exports = f
    },
    "../node_modules/react-dom/lib/EventPluginRegistry.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/reactProdInvariant.js"),
            a = (o("../node_modules/fbjs/lib/invariant.js"), null),
            i = {};

        function r() {
            if (a)
                for (var e in i) {
                    var t = i[e],
                        o = a.indexOf(e);
                    if (o > -1 || n("96", e), !u.plugins[o]) {
                        t.extractEvents || n("97", e), u.plugins[o] = t;
                        var r = t.eventTypes;
                        for (var l in r) s(r[l], t, l) || n("98", l, e)
                    }
                }
        }

        function s(e, t, o) {
            u.eventNameDispatchConfigs.hasOwnProperty(o) && n("99", o), u.eventNameDispatchConfigs[o] = e;
            var a = e.phasedRegistrationNames;
            if (a) {
                for (var i in a) {
                    if (a.hasOwnProperty(i)) l(a[i], t, o)
                }
                return !0
            }
            return !!e.registrationName && (l(e.registrationName, t, o), !0)
        }

        function l(e, t, o) {
            u.registrationNameModules[e] && n("100", e), u.registrationNameModules[e] = t, u.registrationNameDependencies[e] = t.eventTypes[o].dependencies
        }
        var u = {
            plugins: [],
            eventNameDispatchConfigs: {},
            registrationNameModules: {},
            registrationNameDependencies: {},
            possibleRegistrationNames: null,
            injectEventPluginOrder: function(e) {
                a && n("101"), a = Array.prototype.slice.call(e), r()
            },
            injectEventPluginsByName: function(e) {
                var t = !1;
                for (var o in e)
                    if (e.hasOwnProperty(o)) {
                        var a = e[o];
                        i.hasOwnProperty(o) && i[o] === a || (i[o] && n("102", o), i[o] = a, t = !0)
                    } t && r()
            },
            getPluginModuleForEvent: function(e) {
                var t = e.dispatchConfig;
                if (t.registrationName) return u.registrationNameModules[t.registrationName] || null;
                if (void 0 !== t.phasedRegistrationNames) {
                    var o = t.phasedRegistrationNames;
                    for (var n in o)
                        if (o.hasOwnProperty(n)) {
                            var a = u.registrationNameModules[o[n]];
                            if (a) return a
                        }
                }
                return null
            },
            _resetEventPlugins: function() {
                for (var e in a = null, i) i.hasOwnProperty(e) && delete i[e];
                u.plugins.length = 0;
                var t = u.eventNameDispatchConfigs;
                for (var o in t) t.hasOwnProperty(o) && delete t[o];
                var n = u.registrationNameModules;
                for (var r in n) n.hasOwnProperty(r) && delete n[r]
            }
        };
        e.exports = u
    },
    "../node_modules/react-dom/lib/EventPluginUtils.js": function(e, t, o) {
        "use strict";
        var n, a, i = o("../node_modules/react-dom/lib/reactProdInvariant.js"),
            r = o("../node_modules/react-dom/lib/ReactErrorUtils.js");
        o("../node_modules/fbjs/lib/invariant.js"), o("../node_modules/fbjs/lib/warning.js");

        function s(e, t, o, n) {
            var a = e.type || "unknown-event";
            e.currentTarget = l.getNodeFromInstance(n), t ? r.invokeGuardedCallbackWithCatch(a, o, e) : r.invokeGuardedCallback(a, o, e), e.currentTarget = null
        }
        var l = {
            isEndish: function(e) {
                return "topMouseUp" === e || "topTouchEnd" === e || "topTouchCancel" === e
            },
            isMoveish: function(e) {
                return "topMouseMove" === e || "topTouchMove" === e
            },
            isStartish: function(e) {
                return "topMouseDown" === e || "topTouchStart" === e
            },
            executeDirectDispatch: function(e) {
                var t = e._dispatchListeners,
                    o = e._dispatchInstances;
                Array.isArray(t) && i("103"), e.currentTarget = t ? l.getNodeFromInstance(o) : null;
                var n = t ? t(e) : null;
                return e.currentTarget = null, e._dispatchListeners = null, e._dispatchInstances = null, n
            },
            executeDispatchesInOrder: function(e, t) {
                var o = e._dispatchListeners,
                    n = e._dispatchInstances;
                if (Array.isArray(o))
                    for (var a = 0; a < o.length && !e.isPropagationStopped(); a++) s(e, t, o[a], n[a]);
                else o && s(e, t, o, n);
                e._dispatchListeners = null, e._dispatchInstances = null
            },
            executeDispatchesInOrderStopAtTrue: function(e) {
                var t = function(e) {
                    var t = e._dispatchListeners,
                        o = e._dispatchInstances;
                    if (Array.isArray(t)) {
                        for (var n = 0; n < t.length && !e.isPropagationStopped(); n++)
                            if (t[n](e, o[n])) return o[n]
                    } else if (t && t(e, o)) return o;
                    return null
                }(e);
                return e._dispatchInstances = null, e._dispatchListeners = null, t
            },
            hasDispatches: function(e) {
                return !!e._dispatchListeners
            },
            getInstanceFromNode: function(e) {
                return n.getInstanceFromNode(e)
            },
            getNodeFromInstance: function(e) {
                return n.getNodeFromInstance(e)
            },
            isAncestor: function(e, t) {
                return a.isAncestor(e, t)
            },
            getLowestCommonAncestor: function(e, t) {
                return a.getLowestCommonAncestor(e, t)
            },
            getParentInstance: function(e) {
                return a.getParentInstance(e)
            },
            traverseTwoPhase: function(e, t, o) {
                return a.traverseTwoPhase(e, t, o)
            },
            traverseEnterLeave: function(e, t, o, n, i) {
                return a.traverseEnterLeave(e, t, o, n, i)
            },
            injection: {
                injectComponentTree: function(e) {
                    n = e
                },
                injectTreeTraversal: function(e) {
                    a = e
                }
            }
        };
        e.exports = l
    },
    "../node_modules/react-dom/lib/EventPropagators.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/EventPluginHub.js"),
            a = o("../node_modules/react-dom/lib/EventPluginUtils.js"),
            i = o("../node_modules/react-dom/lib/accumulateInto.js"),
            r = o("../node_modules/react-dom/lib/forEachAccumulated.js"),
            s = (o("../node_modules/fbjs/lib/warning.js"), n.getListener);

        function l(e, t, o) {
            var n = function(e, t, o) {
                var n = t.dispatchConfig.phasedRegistrationNames[o];
                return s(e, n)
            }(e, o, t);
            n && (o._dispatchListeners = i(o._dispatchListeners, n), o._dispatchInstances = i(o._dispatchInstances, e))
        }

        function u(e) {
            e && e.dispatchConfig.phasedRegistrationNames && a.traverseTwoPhase(e._targetInst, l, e)
        }

        function c(e) {
            if (e && e.dispatchConfig.phasedRegistrationNames) {
                var t = e._targetInst,
                    o = t ? a.getParentInstance(t) : null;
                a.traverseTwoPhase(o, l, e)
            }
        }

        function d(e, t, o) {
            if (o && o.dispatchConfig.registrationName) {
                var n = o.dispatchConfig.registrationName,
                    a = s(e, n);
                a && (o._dispatchListeners = i(o._dispatchListeners, a), o._dispatchInstances = i(o._dispatchInstances, e))
            }
        }

        function p(e) {
            e && e.dispatchConfig.registrationName && d(e._targetInst, 0, e)
        }
        var m = {
            accumulateTwoPhaseDispatches: function(e) {
                r(e, u)
            },
            accumulateTwoPhaseDispatchesSkipTarget: function(e) {
                r(e, c)
            },
            accumulateDirectDispatches: function(e) {
                r(e, p)
            },
            accumulateEnterLeaveDispatches: function(e, t, o, n) {
                a.traverseEnterLeave(o, n, d, e, t)
            }
        };
        e.exports = m
    },
    "../node_modules/react-dom/lib/FallbackCompositionState.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/object-assign/index.js"),
            a = o("../node_modules/react-dom/lib/PooledClass.js"),
            i = o("../node_modules/react-dom/lib/getTextContentAccessor.js");

        function r(e) {
            this._root = e, this._startText = this.getText(), this._fallbackText = null
        }
        n(r.prototype, {
            destructor: function() {
                this._root = null, this._startText = null, this._fallbackText = null
            },
            getText: function() {
                return "value" in this._root ? this._root.value : this._root[i()]
            },
            getData: function() {
                if (this._fallbackText) return this._fallbackText;
                var e, t, o = this._startText,
                    n = o.length,
                    a = this.getText(),
                    i = a.length;
                for (e = 0; e < n && o[e] === a[e]; e++);
                var r = n - e;
                for (t = 1; t <= r && o[n - t] === a[i - t]; t++);
                var s = t > 1 ? 1 - t : void 0;
                return this._fallbackText = a.slice(e, s), this._fallbackText
            }
        }), a.addPoolingTo(r), e.exports = r
    },
    "../node_modules/react-dom/lib/HTMLDOMPropertyConfig.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/DOMProperty.js"),
            a = n.injection.MUST_USE_PROPERTY,
            i = n.injection.HAS_BOOLEAN_VALUE,
            r = n.injection.HAS_NUMERIC_VALUE,
            s = n.injection.HAS_POSITIVE_NUMERIC_VALUE,
            l = n.injection.HAS_OVERLOADED_BOOLEAN_VALUE,
            u = {
                isCustomAttribute: RegExp.prototype.test.bind(new RegExp("^(data|aria)-[" + n.ATTRIBUTE_NAME_CHAR + "]*$")),
                Properties: {
                    accept: 0,
                    acceptCharset: 0,
                    accessKey: 0,
                    action: 0,
                    allowFullScreen: i,
                    allowTransparency: 0,
                    alt: 0,
                    as: 0,
                    async: i,
                    autoComplete: 0,
                    autoPlay: i,
                    capture: i,
                    cellPadding: 0,
                    cellSpacing: 0,
                    charSet: 0,
                    challenge: 0,
                    checked: a | i,
                    cite: 0,
                    classID: 0,
                    className: 0,
                    cols: s,
                    colSpan: 0,
                    content: 0,
                    contentEditable: 0,
                    contextMenu: 0,
                    controls: i,
                    controlsList: 0,
                    coords: 0,
                    crossOrigin: 0,
                    data: 0,
                    dateTime: 0,
                    default: i,
                    defer: i,
                    dir: 0,
                    disabled: i,
                    download: l,
                    draggable: 0,
                    encType: 0,
                    form: 0,
                    formAction: 0,
                    formEncType: 0,
                    formMethod: 0,
                    formNoValidate: i,
                    formTarget: 0,
                    frameBorder: 0,
                    headers: 0,
                    height: 0,
                    hidden: i,
                    high: 0,
                    href: 0,
                    hrefLang: 0,
                    htmlFor: 0,
                    httpEquiv: 0,
                    icon: 0,
                    id: 0,
                    inputMode: 0,
                    integrity: 0,
                    is: 0,
                    keyParams: 0,
                    keyType: 0,
                    kind: 0,
                    label: 0,
                    lang: 0,
                    list: 0,
                    loop: i,
                    low: 0,
                    manifest: 0,
                    marginHeight: 0,
                    marginWidth: 0,
                    max: 0,
                    maxLength: 0,
                    media: 0,
                    mediaGroup: 0,
                    method: 0,
                    min: 0,
                    minLength: 0,
                    multiple: a | i,
                    muted: a | i,
                    name: 0,
                    nonce: 0,
                    noValidate: i,
                    open: i,
                    optimum: 0,
                    pattern: 0,
                    placeholder: 0,
                    playsInline: i,
                    poster: 0,
                    preload: 0,
                    profile: 0,
                    radioGroup: 0,
                    readOnly: i,
                    referrerPolicy: 0,
                    rel: 0,
                    required: i,
                    reversed: i,
                    role: 0,
                    rows: s,
                    rowSpan: r,
                    sandbox: 0,
                    scope: 0,
                    scoped: i,
                    scrolling: 0,
                    seamless: i,
                    selected: a | i,
                    shape: 0,
                    size: s,
                    sizes: 0,
                    span: s,
                    spellCheck: 0,
                    src: 0,
                    srcDoc: 0,
                    srcLang: 0,
                    srcSet: 0,
                    start: r,
                    step: 0,
                    style: 0,
                    summary: 0,
                    tabIndex: 0,
                    target: 0,
                    title: 0,
                    type: 0,
                    useMap: 0,
                    value: 0,
                    width: 0,
                    wmode: 0,
                    wrap: 0,
                    about: 0,
                    datatype: 0,
                    inlist: 0,
                    prefix: 0,
                    property: 0,
                    resource: 0,
                    typeof: 0,
                    vocab: 0,
                    autoCapitalize: 0,
                    autoCorrect: 0,
                    autoSave: 0,
                    color: 0,
                    itemProp: 0,
                    itemScope: i,
                    itemType: 0,
                    itemID: 0,
                    itemRef: 0,
                    results: 0,
                    security: 0,
                    unselectable: 0
                },
                DOMAttributeNames: {
                    acceptCharset: "accept-charset",
                    className: "class",
                    htmlFor: "for",
                    httpEquiv: "http-equiv"
                },
                DOMPropertyNames: {},
                DOMMutationMethods: {
                    value: function(e, t) {
                        if (null == t) return e.removeAttribute("value");
                        "number" !== e.type || !1 === e.hasAttribute("value") ? e.setAttribute("value", "" + t) : e.validity && !e.validity.badInput && e.ownerDocument.activeElement !== e && e.setAttribute("value", "" + t)
                    }
                }
            };
        e.exports = u
    },
    "../node_modules/react-dom/lib/KeyEscapeUtils.js": function(e, t, o) {
        "use strict";
        var n = {
            escape: function(e) {
                var t = {
                    "=": "=0",
                    ":": "=2"
                };
                return "$" + ("" + e).replace(/[=:]/g, function(e) {
                    return t[e]
                })
            },
            unescape: function(e) {
                var t = {
                    "=0": "=",
                    "=2": ":"
                };
                return ("" + ("." === e[0] && "$" === e[1] ? e.substring(2) : e.substring(1))).replace(/(=0|=2)/g, function(e) {
                    return t[e]
                })
            }
        };
        e.exports = n
    },
    "../node_modules/react-dom/lib/LinkedValueUtils.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/reactProdInvariant.js"),
            a = o("../node_modules/react-dom/lib/ReactPropTypesSecret.js"),
            i = o("../node_modules/prop-types/factory.js")(o("../node_modules/react/lib/React.js").isValidElement),
            r = (o("../node_modules/fbjs/lib/invariant.js"), o("../node_modules/fbjs/lib/warning.js"), {
                button: !0,
                checkbox: !0,
                image: !0,
                hidden: !0,
                radio: !0,
                reset: !0,
                submit: !0
            });

        function s(e) {
            null != e.checkedLink && null != e.valueLink && n("87")
        }

        function l(e) {
            s(e), (null != e.value || null != e.onChange) && n("88")
        }

        function u(e) {
            s(e), (null != e.checked || null != e.onChange) && n("89")
        }
        var c = {
                value: function(e, t, o) {
                    return !e[t] || r[e.type] || e.onChange || e.readOnly || e.disabled ? null : new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")
                },
                checked: function(e, t, o) {
                    return !e[t] || e.onChange || e.readOnly || e.disabled ? null : new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")
                },
                onChange: i.func
            },
            d = {};

        function p(e) {
            if (e) {
                var t = e.getName();
                if (t) return " Check the render method of `" + t + "`."
            }
            return ""
        }
        var m = {
            checkPropTypes: function(e, t, o) {
                for (var n in c) {
                    if (c.hasOwnProperty(n)) var i = c[n](t, n, e, "prop", null, a);
                    if (i instanceof Error && !(i.message in d)) {
                        d[i.message] = !0;
                        p(o)
                    }
                }
            },
            getValue: function(e) {
                return e.valueLink ? (l(e), e.valueLink.value) : e.value
            },
            getChecked: function(e) {
                return e.checkedLink ? (u(e), e.checkedLink.value) : e.checked
            },
            executeOnChange: function(e, t) {
                return e.valueLink ? (l(e), e.valueLink.requestChange(t.target.value)) : e.checkedLink ? (u(e), e.checkedLink.requestChange(t.target.checked)) : e.onChange ? e.onChange.call(void 0, t) : void 0
            }
        };
        e.exports = m
    },
    "../node_modules/react-dom/lib/PooledClass.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/reactProdInvariant.js"),
            a = (o("../node_modules/fbjs/lib/invariant.js"), function(e) {
                if (this.instancePool.length) {
                    var t = this.instancePool.pop();
                    return this.call(t, e), t
                }
                return new this(e)
            }),
            i = function(e) {
                e instanceof this || n("25"), e.destructor(), this.instancePool.length < this.poolSize && this.instancePool.push(e)
            },
            r = a,
            s = {
                addPoolingTo: function(e, t) {
                    var o = e;
                    return o.instancePool = [], o.getPooled = t || r, o.poolSize || (o.poolSize = 10), o.release = i, o
                },
                oneArgumentPooler: a,
                twoArgumentPooler: function(e, t) {
                    if (this.instancePool.length) {
                        var o = this.instancePool.pop();
                        return this.call(o, e, t), o
                    }
                    return new this(e, t)
                },
                threeArgumentPooler: function(e, t, o) {
                    if (this.instancePool.length) {
                        var n = this.instancePool.pop();
                        return this.call(n, e, t, o), n
                    }
                    return new this(e, t, o)
                },
                fourArgumentPooler: function(e, t, o, n) {
                    if (this.instancePool.length) {
                        var a = this.instancePool.pop();
                        return this.call(a, e, t, o, n), a
                    }
                    return new this(e, t, o, n)
                }
            };
        e.exports = s
    },
    "../node_modules/react-dom/lib/ReactBrowserEventEmitter.js": function(e, t, o) {
        "use strict";
        var n, a = o("../node_modules/object-assign/index.js"),
            i = o("../node_modules/react-dom/lib/EventPluginRegistry.js"),
            r = o("../node_modules/react-dom/lib/ReactEventEmitterMixin.js"),
            s = o("../node_modules/react-dom/lib/ViewportMetrics.js"),
            l = o("../node_modules/react-dom/lib/getVendorPrefixedEventName.js"),
            u = o("../node_modules/react-dom/lib/isEventSupported.js"),
            c = {},
            d = !1,
            p = 0,
            m = {
                topAbort: "abort",
                topAnimationEnd: l("animationend") || "animationend",
                topAnimationIteration: l("animationiteration") || "animationiteration",
                topAnimationStart: l("animationstart") || "animationstart",
                topBlur: "blur",
                topCanPlay: "canplay",
                topCanPlayThrough: "canplaythrough",
                topChange: "change",
                topClick: "click",
                topCompositionEnd: "compositionend",
                topCompositionStart: "compositionstart",
                topCompositionUpdate: "compositionupdate",
                topContextMenu: "contextmenu",
                topCopy: "copy",
                topCut: "cut",
                topDoubleClick: "dblclick",
                topDrag: "drag",
                topDragEnd: "dragend",
                topDragEnter: "dragenter",
                topDragExit: "dragexit",
                topDragLeave: "dragleave",
                topDragOver: "dragover",
                topDragStart: "dragstart",
                topDrop: "drop",
                topDurationChange: "durationchange",
                topEmptied: "emptied",
                topEncrypted: "encrypted",
                topEnded: "ended",
                topError: "error",
                topFocus: "focus",
                topInput: "input",
                topKeyDown: "keydown",
                topKeyPress: "keypress",
                topKeyUp: "keyup",
                topLoadedData: "loadeddata",
                topLoadedMetadata: "loadedmetadata",
                topLoadStart: "loadstart",
                topMouseDown: "mousedown",
                topMouseMove: "mousemove",
                topMouseOut: "mouseout",
                topMouseOver: "mouseover",
                topMouseUp: "mouseup",
                topPaste: "paste",
                topPause: "pause",
                topPlay: "play",
                topPlaying: "playing",
                topProgress: "progress",
                topRateChange: "ratechange",
                topScroll: "scroll",
                topSeeked: "seeked",
                topSeeking: "seeking",
                topSelectionChange: "selectionchange",
                topStalled: "stalled",
                topSuspend: "suspend",
                topTextInput: "textInput",
                topTimeUpdate: "timeupdate",
                topTouchCancel: "touchcancel",
                topTouchEnd: "touchend",
                topTouchMove: "touchmove",
                topTouchStart: "touchstart",
                topTransitionEnd: l("transitionend") || "transitionend",
                topVolumeChange: "volumechange",
                topWaiting: "waiting",
                topWheel: "wheel"
            },
            h = "_reactListenersID" + String(Math.random()).slice(2);
        var f = a({}, r, {
            ReactEventListener: null,
            injection: {
                injectReactEventListener: function(e) {
                    e.setHandleTopLevel(f.handleTopLevel), f.ReactEventListener = e
                }
            },
            setEnabled: function(e) {
                f.ReactEventListener && f.ReactEventListener.setEnabled(e)
            },
            isEnabled: function() {
                return !(!f.ReactEventListener || !f.ReactEventListener.isEnabled())
            },
            listenTo: function(e, t) {
                for (var o = t, n = function(e) {
                        return Object.prototype.hasOwnProperty.call(e, h) || (e[h] = p++, c[e[h]] = {}), c[e[h]]
                    }(o), a = i.registrationNameDependencies[e], r = 0; r < a.length; r++) {
                    var s = a[r];
                    n.hasOwnProperty(s) && n[s] || ("topWheel" === s ? u("wheel") ? f.ReactEventListener.trapBubbledEvent("topWheel", "wheel", o) : u("mousewheel") ? f.ReactEventListener.trapBubbledEvent("topWheel", "mousewheel", o) : f.ReactEventListener.trapBubbledEvent("topWheel", "DOMMouseScroll", o) : "topScroll" === s ? u("scroll", !0) ? f.ReactEventListener.trapCapturedEvent("topScroll", "scroll", o) : f.ReactEventListener.trapBubbledEvent("topScroll", "scroll", f.ReactEventListener.WINDOW_HANDLE) : "topFocus" === s || "topBlur" === s ? (u("focus", !0) ? (f.ReactEventListener.trapCapturedEvent("topFocus", "focus", o), f.ReactEventListener.trapCapturedEvent("topBlur", "blur", o)) : u("focusin") && (f.ReactEventListener.trapBubbledEvent("topFocus", "focusin", o), f.ReactEventListener.trapBubbledEvent("topBlur", "focusout", o)), n.topBlur = !0, n.topFocus = !0) : m.hasOwnProperty(s) && f.ReactEventListener.trapBubbledEvent(s, m[s], o), n[s] = !0)
                }
            },
            trapBubbledEvent: function(e, t, o) {
                return f.ReactEventListener.trapBubbledEvent(e, t, o)
            },
            trapCapturedEvent: function(e, t, o) {
                return f.ReactEventListener.trapCapturedEvent(e, t, o)
            },
            supportsEventPageXY: function() {
                if (!document.createEvent) return !1;
                var e = document.createEvent("MouseEvent");
                return null != e && "pageX" in e
            },
            ensureScrollValueMonitoring: function() {
                if (void 0 === n && (n = f.supportsEventPageXY()), !n && !d) {
                    var e = s.refreshScrollValues;
                    f.ReactEventListener.monitorScrollValue(e), d = !0
                }
            }
        });
        e.exports = f
    },
    "../node_modules/react-dom/lib/ReactChildReconciler.js": function(e, t, o) {
        "use strict";
        (function(t) {
            var n = o("../node_modules/react-dom/lib/ReactReconciler.js"),
                a = o("../node_modules/react-dom/lib/instantiateReactComponent.js"),
                i = (o("../node_modules/react-dom/lib/KeyEscapeUtils.js"), o("../node_modules/react-dom/lib/shouldUpdateReactComponent.js")),
                r = o("../node_modules/react-dom/lib/traverseAllChildren.js");
            o("../node_modules/fbjs/lib/warning.js");

            function s(e, t, o, n) {
                var i = void 0 === e[o];
                null != t && i && (e[o] = a(t, !0))
            }
            void 0 !== t && t.env;
            var l = {
                instantiateChildren: function(e, t, o, n) {
                    if (null == e) return null;
                    var a = {};
                    return r(e, s, a), a
                },
                updateChildren: function(e, t, o, r, s, l, u, c, d) {
                    if (t || e) {
                        var p, m;
                        for (p in t)
                            if (t.hasOwnProperty(p)) {
                                var h = (m = e && e[p]) && m._currentElement,
                                    f = t[p];
                                if (null != m && i(h, f)) n.receiveComponent(m, f, s, c), t[p] = m;
                                else {
                                    m && (r[p] = n.getHostNode(m), n.unmountComponent(m, !1));
                                    var g = a(f, !0);
                                    t[p] = g;
                                    var k = n.mountComponent(g, s, l, u, c, d);
                                    o.push(k)
                                }
                            } for (p in e) !e.hasOwnProperty(p) || t && t.hasOwnProperty(p) || (m = e[p], r[p] = n.getHostNode(m), n.unmountComponent(m, !1))
                    }
                },
                unmountChildren: function(e, t) {
                    for (var o in e)
                        if (e.hasOwnProperty(o)) {
                            var a = e[o];
                            n.unmountComponent(a, t)
                        }
                }
            };
            e.exports = l
        }).call(this, o("../node_modules/process/browser.js"))
    },
    "../node_modules/react-dom/lib/ReactComponentBrowserEnvironment.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/DOMChildrenOperations.js"),
            a = {
                processChildrenUpdates: o("../node_modules/react-dom/lib/ReactDOMIDOperations.js").dangerouslyProcessChildrenUpdates,
                replaceNodeWithMarkup: n.dangerouslyReplaceNodeWithMarkup
            };
        e.exports = a
    },
    "../node_modules/react-dom/lib/ReactComponentEnvironment.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/reactProdInvariant.js"),
            a = (o("../node_modules/fbjs/lib/invariant.js"), !1),
            i = {
                replaceNodeWithMarkup: null,
                processChildrenUpdates: null,
                injection: {
                    injectEnvironment: function(e) {
                        a && n("104"), i.replaceNodeWithMarkup = e.replaceNodeWithMarkup, i.processChildrenUpdates = e.processChildrenUpdates, a = !0
                    }
                }
            };
        e.exports = i
    },
    "../node_modules/react-dom/lib/ReactCompositeComponent.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/reactProdInvariant.js"),
            a = o("../node_modules/object-assign/index.js"),
            i = o("../node_modules/react/lib/React.js"),
            r = o("../node_modules/react-dom/lib/ReactComponentEnvironment.js"),
            s = o("../node_modules/react/lib/ReactCurrentOwner.js"),
            l = o("../node_modules/react-dom/lib/ReactErrorUtils.js"),
            u = o("../node_modules/react-dom/lib/ReactInstanceMap.js"),
            c = (o("../node_modules/react-dom/lib/ReactInstrumentation.js"), o("../node_modules/react-dom/lib/ReactNodeTypes.js")),
            d = o("../node_modules/react-dom/lib/ReactReconciler.js"),
            p = o("../node_modules/fbjs/lib/emptyObject.js"),
            m = (o("../node_modules/fbjs/lib/invariant.js"), o("../node_modules/fbjs/lib/shallowEqual.js")),
            h = o("../node_modules/react-dom/lib/shouldUpdateReactComponent.js"),
            f = (o("../node_modules/fbjs/lib/warning.js"), 0),
            g = 1,
            k = 2;

        function b(e) {}

        function v(e, t) {
            0
        }
        b.prototype.render = function() {
            var e = u.get(this)._currentElement.type,
                t = e(this.props, this.context, this.updater);
            return v(e, t), t
        };
        var y = 1,
            j = {
                construct: function(e) {
                    this._currentElement = e, this._rootNodeID = 0, this._compositeType = null, this._instance = null, this._hostParent = null, this._hostContainerInfo = null, this._updateBatchNumber = null, this._pendingElement = null, this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1, this._renderedNodeType = null, this._renderedComponent = null, this._context = null, this._mountOrder = 0, this._topLevelWrapper = null, this._pendingCallbacks = null, this._calledComponentWillUnmount = !1
                },
                mountComponent: function(e, t, o, a) {
                    this._context = a, this._mountOrder = y++, this._hostParent = t, this._hostContainerInfo = o;
                    var r, s = this._currentElement.props,
                        l = this._processContext(a),
                        c = this._currentElement.type,
                        d = e.getUpdateQueue(),
                        m = function(e) {
                            return !(!e.prototype || !e.prototype.isReactComponent)
                        }(c),
                        h = this._constructComponent(m, s, l, d);
                    m || null != h && null != h.render ? ! function(e) {
                        return !(!e.prototype || !e.prototype.isPureReactComponent)
                    }(c) ? this._compositeType = f : this._compositeType = g : (r = h, v(), null === h || !1 === h || i.isValidElement(h) || n("105", c.displayName || c.name || "Component"), h = new b(c), this._compositeType = k), h.props = s, h.context = l, h.refs = p, h.updater = d, this._instance = h, u.set(h, this);
                    var j, w = h.state;
                    return void 0 === w && (h.state = w = null), ("object" != typeof w || Array.isArray(w)) && n("106", this.getName() || "ReactCompositeComponent"), this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1, j = h.unstable_handleError ? this.performInitialMountWithErrorHandling(r, t, o, e, a) : this.performInitialMount(r, t, o, e, a), h.componentDidMount && e.getReactMountReady().enqueue(h.componentDidMount, h), j
                },
                _constructComponent: function(e, t, o, n) {
                    return this._constructComponentWithoutOwner(e, t, o, n)
                },
                _constructComponentWithoutOwner: function(e, t, o, n) {
                    var a = this._currentElement.type;
                    return e ? new a(t, o, n) : a(t, o, n)
                },
                performInitialMountWithErrorHandling: function(e, t, o, n, a) {
                    var i, r = n.checkpoint();
                    try {
                        i = this.performInitialMount(e, t, o, n, a)
                    } catch (s) {
                        n.rollback(r), this._instance.unstable_handleError(s), this._pendingStateQueue && (this._instance.state = this._processPendingState(this._instance.props, this._instance.context)), r = n.checkpoint(), this._renderedComponent.unmountComponent(!0), n.rollback(r), i = this.performInitialMount(e, t, o, n, a)
                    }
                    return i
                },
                performInitialMount: function(e, t, o, n, a) {
                    var i = this._instance;
                    i.componentWillMount && (i.componentWillMount(), this._pendingStateQueue && (i.state = this._processPendingState(i.props, i.context))), void 0 === e && (e = this._renderValidatedComponent());
                    var r = c.getType(e);
                    this._renderedNodeType = r;
                    var s = this._instantiateReactComponent(e, r !== c.EMPTY);
                    return this._renderedComponent = s, d.mountComponent(s, n, t, o, this._processChildContext(a), 0)
                },
                getHostNode: function() {
                    return d.getHostNode(this._renderedComponent)
                },
                unmountComponent: function(e) {
                    if (this._renderedComponent) {
                        var t = this._instance;
                        if (t.componentWillUnmount && !t._calledComponentWillUnmount)
                            if (t._calledComponentWillUnmount = !0, e) {
                                var o = this.getName() + ".componentWillUnmount()";
                                l.invokeGuardedCallback(o, t.componentWillUnmount.bind(t))
                            } else t.componentWillUnmount();
                        this._renderedComponent && (d.unmountComponent(this._renderedComponent, e), this._renderedNodeType = null, this._renderedComponent = null, this._instance = null), this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1, this._pendingCallbacks = null, this._pendingElement = null, this._context = null, this._rootNodeID = 0, this._topLevelWrapper = null, u.remove(t)
                    }
                },
                _maskContext: function(e) {
                    var t = this._currentElement.type.contextTypes;
                    if (!t) return p;
                    var o = {};
                    for (var n in t) o[n] = e[n];
                    return o
                },
                _processContext: function(e) {
                    return this._maskContext(e)
                },
                _processChildContext: function(e) {
                    var t, o = this._currentElement.type,
                        i = this._instance;
                    if (i.getChildContext && (t = i.getChildContext()), t) {
                        for (var r in "object" != typeof o.childContextTypes && n("107", this.getName() || "ReactCompositeComponent"), t) r in o.childContextTypes || n("108", this.getName() || "ReactCompositeComponent", r);
                        return a({}, e, t)
                    }
                    return e
                },
                _checkContextTypes: function(e, t, o) {
                    0
                },
                receiveComponent: function(e, t, o) {
                    var n = this._currentElement,
                        a = this._context;
                    this._pendingElement = null, this.updateComponent(t, n, e, a, o)
                },
                performUpdateIfNecessary: function(e) {
                    null != this._pendingElement ? d.receiveComponent(this, this._pendingElement, e, this._context) : null !== this._pendingStateQueue || this._pendingForceUpdate ? this.updateComponent(e, this._currentElement, this._currentElement, this._context, this._context) : this._updateBatchNumber = null
                },
                updateComponent: function(e, t, o, a, i) {
                    var r = this._instance;
                    null == r && n("136", this.getName() || "ReactCompositeComponent");
                    var s, l = !1;
                    this._context === i ? s = r.context : (s = this._processContext(i), l = !0);
                    var u = t.props,
                        c = o.props;
                    t !== o && (l = !0), l && r.componentWillReceiveProps && r.componentWillReceiveProps(c, s);
                    var d = this._processPendingState(c, s),
                        p = !0;
                    this._pendingForceUpdate || (r.shouldComponentUpdate ? p = r.shouldComponentUpdate(c, d, s) : this._compositeType === g && (p = !m(u, c) || !m(r.state, d))), this._updateBatchNumber = null, p ? (this._pendingForceUpdate = !1, this._performComponentUpdate(o, c, d, s, e, i)) : (this._currentElement = o, this._context = i, r.props = c, r.state = d, r.context = s)
                },
                _processPendingState: function(e, t) {
                    var o = this._instance,
                        n = this._pendingStateQueue,
                        i = this._pendingReplaceState;
                    if (this._pendingReplaceState = !1, this._pendingStateQueue = null, !n) return o.state;
                    if (i && 1 === n.length) return n[0];
                    for (var r = a({}, i ? n[0] : o.state), s = i ? 1 : 0; s < n.length; s++) {
                        var l = n[s];
                        a(r, "function" == typeof l ? l.call(o, r, e, t) : l)
                    }
                    return r
                },
                _performComponentUpdate: function(e, t, o, n, a, i) {
                    var r, s, l, u = this._instance,
                        c = Boolean(u.componentDidUpdate);
                    c && (r = u.props, s = u.state, l = u.context), u.componentWillUpdate && u.componentWillUpdate(t, o, n), this._currentElement = e, this._context = i, u.props = t, u.state = o, u.context = n, this._updateRenderedComponent(a, i), c && a.getReactMountReady().enqueue(u.componentDidUpdate.bind(u, r, s, l), u)
                },
                _updateRenderedComponent: function(e, t) {
                    var o = this._renderedComponent,
                        n = o._currentElement,
                        a = this._renderValidatedComponent();
                    if (h(n, a)) d.receiveComponent(o, a, e, this._processChildContext(t));
                    else {
                        var i = d.getHostNode(o);
                        d.unmountComponent(o, !1);
                        var r = c.getType(a);
                        this._renderedNodeType = r;
                        var s = this._instantiateReactComponent(a, r !== c.EMPTY);
                        this._renderedComponent = s;
                        var l = d.mountComponent(s, e, this._hostParent, this._hostContainerInfo, this._processChildContext(t), 0);
                        this._replaceNodeWithMarkup(i, l, o)
                    }
                },
                _replaceNodeWithMarkup: function(e, t, o) {
                    r.replaceNodeWithMarkup(e, t, o)
                },
                _renderValidatedComponentWithoutOwnerOrContext: function() {
                    return this._instance.render()
                },
                _renderValidatedComponent: function() {
                    var e;
                    if (this._compositeType !== k) {
                        s.current = this;
                        try {
                            e = this._renderValidatedComponentWithoutOwnerOrContext()
                        } finally {
                            s.current = null
                        }
                    } else e = this._renderValidatedComponentWithoutOwnerOrContext();
                    return null === e || !1 === e || i.isValidElement(e) || n("109", this.getName() || "ReactCompositeComponent"), e
                },
                attachRef: function(e, t) {
                    var o = this.getPublicInstance();
                    null == o && n("110");
                    var a = t.getPublicInstance();
                    (o.refs === p ? o.refs = {} : o.refs)[e] = a
                },
                detachRef: function(e) {
                    delete this.getPublicInstance().refs[e]
                },
                getName: function() {
                    var e = this._currentElement.type,
                        t = this._instance && this._instance.constructor;
                    return e.displayName || t && t.displayName || e.name || t && t.name || null
                },
                getPublicInstance: function() {
                    var e = this._instance;
                    return this._compositeType === k ? null : e
                },
                _instantiateReactComponent: null
            };
        e.exports = j
    },
    "../node_modules/react-dom/lib/ReactDOM.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/ReactDOMComponentTree.js"),
            a = o("../node_modules/react-dom/lib/ReactDefaultInjection.js"),
            i = o("../node_modules/react-dom/lib/ReactMount.js"),
            r = o("../node_modules/react-dom/lib/ReactReconciler.js"),
            s = o("../node_modules/react-dom/lib/ReactUpdates.js"),
            l = o("../node_modules/react-dom/lib/ReactVersion.js"),
            u = o("../node_modules/react-dom/lib/findDOMNode.js"),
            c = o("../node_modules/react-dom/lib/getHostComponentFromComposite.js"),
            d = o("../node_modules/react-dom/lib/renderSubtreeIntoContainer.js");
        o("../node_modules/fbjs/lib/warning.js");
        a.inject();
        var p = {
            findDOMNode: u,
            render: i.render,
            unmountComponentAtNode: i.unmountComponentAtNode,
            version: l,
            unstable_batchedUpdates: s.batchedUpdates,
            unstable_renderSubtreeIntoContainer: d
        };
        "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject && __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
            ComponentTree: {
                getClosestInstanceFromNode: n.getClosestInstanceFromNode,
                getNodeFromInstance: function(e) {
                    return e._renderedComponent && (e = c(e)), e ? n.getNodeFromInstance(e) : null
                }
            },
            Mount: i,
            Reconciler: r
        }), e.exports = p
    },
    "../node_modules/react-dom/lib/ReactDOMComponent.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/reactProdInvariant.js"),
            a = o("../node_modules/object-assign/index.js"),
            i = o("../node_modules/react-dom/lib/AutoFocusUtils.js"),
            r = o("../node_modules/react-dom/lib/CSSPropertyOperations.js"),
            s = o("../node_modules/react-dom/lib/DOMLazyTree.js"),
            l = o("../node_modules/react-dom/lib/DOMNamespaces.js"),
            u = o("../node_modules/react-dom/lib/DOMProperty.js"),
            c = o("../node_modules/react-dom/lib/DOMPropertyOperations.js"),
            d = o("../node_modules/react-dom/lib/EventPluginHub.js"),
            p = o("../node_modules/react-dom/lib/EventPluginRegistry.js"),
            m = o("../node_modules/react-dom/lib/ReactBrowserEventEmitter.js"),
            h = o("../node_modules/react-dom/lib/ReactDOMComponentFlags.js"),
            f = o("../node_modules/react-dom/lib/ReactDOMComponentTree.js"),
            g = o("../node_modules/react-dom/lib/ReactDOMInput.js"),
            k = o("../node_modules/react-dom/lib/ReactDOMOption.js"),
            b = o("../node_modules/react-dom/lib/ReactDOMSelect.js"),
            v = o("../node_modules/react-dom/lib/ReactDOMTextarea.js"),
            y = (o("../node_modules/react-dom/lib/ReactInstrumentation.js"), o("../node_modules/react-dom/lib/ReactMultiChild.js")),
            j = o("../node_modules/react-dom/lib/ReactServerRenderingTransaction.js"),
            w = (o("../node_modules/fbjs/lib/emptyFunction.js"), o("../node_modules/react-dom/lib/escapeTextContentForBrowser.js")),
            _ = (o("../node_modules/fbjs/lib/invariant.js"), o("../node_modules/react-dom/lib/isEventSupported.js"), o("../node_modules/fbjs/lib/shallowEqual.js"), o("../node_modules/react-dom/lib/inputValueTracking.js")),
            O = (o("../node_modules/react-dom/lib/validateDOMNesting.js"), o("../node_modules/fbjs/lib/warning.js"), h),
            C = d.deleteListener,
            x = f.getNodeFromInstance,
            E = m.listenTo,
            z = p.registrationNameModules,
            S = {
                string: !0,
                number: !0
            },
            P = "__html",
            M = {
                children: null,
                dangerouslySetInnerHTML: null,
                suppressContentEditableWarning: null
            },
            N = 11;

        function A(e, t) {
            t && (W[e._tag] && (null != t.children || null != t.dangerouslySetInnerHTML) && n("137", e._tag, e._currentElement._owner ? " Check the render method of " + e._currentElement._owner.getName() + "." : ""), null != t.dangerouslySetInnerHTML && (null != t.children && n("60"), "object" == typeof t.dangerouslySetInnerHTML && P in t.dangerouslySetInnerHTML || n("61")), null != t.style && "object" != typeof t.style && n("62", function(e) {
                if (e) {
                    var t = e._currentElement._owner || null;
                    if (t) {
                        var o = t.getName();
                        if (o) return " This DOM node was rendered by `" + o + "`."
                    }
                }
                return ""
            }(e)))
        }

        function T(e, t, o, n) {
            if (!(n instanceof j)) {
                0;
                var a = e._hostContainerInfo,
                    i = a._node && a._node.nodeType === N ? a._node : a._ownerDocument;
                E(t, i), n.getReactMountReady().enqueue(I, {
                    inst: e,
                    registrationName: t,
                    listener: o
                })
            }
        }

        function I() {
            d.putListener(this.inst, this.registrationName, this.listener)
        }

        function L() {
            g.postMountWrapper(this)
        }

        function B() {
            v.postMountWrapper(this)
        }

        function D() {
            k.postMountWrapper(this)
        }
        var R = {
            topAbort: "abort",
            topCanPlay: "canplay",
            topCanPlayThrough: "canplaythrough",
            topDurationChange: "durationchange",
            topEmptied: "emptied",
            topEncrypted: "encrypted",
            topEnded: "ended",
            topError: "error",
            topLoadedData: "loadeddata",
            topLoadedMetadata: "loadedmetadata",
            topLoadStart: "loadstart",
            topPause: "pause",
            topPlay: "play",
            topPlaying: "playing",
            topProgress: "progress",
            topRateChange: "ratechange",
            topSeeked: "seeked",
            topSeeking: "seeking",
            topStalled: "stalled",
            topSuspend: "suspend",
            topTimeUpdate: "timeupdate",
            topVolumeChange: "volumechange",
            topWaiting: "waiting"
        };

        function G() {
            _.track(this)
        }

        function q() {
            this._rootNodeID || n("63");
            var e = x(this);
            switch (e || n("64"), this._tag) {
                case "iframe":
                case "object":
                    this._wrapperState.listeners = [m.trapBubbledEvent("topLoad", "load", e)];
                    break;
                case "video":
                case "audio":
                    for (var t in this._wrapperState.listeners = [], R) R.hasOwnProperty(t) && this._wrapperState.listeners.push(m.trapBubbledEvent(t, R[t], e));
                    break;
                case "source":
                    this._wrapperState.listeners = [m.trapBubbledEvent("topError", "error", e)];
                    break;
                case "img":
                    this._wrapperState.listeners = [m.trapBubbledEvent("topError", "error", e), m.trapBubbledEvent("topLoad", "load", e)];
                    break;
                case "form":
                    this._wrapperState.listeners = [m.trapBubbledEvent("topReset", "reset", e), m.trapBubbledEvent("topSubmit", "submit", e)];
                    break;
                case "input":
                case "select":
                case "textarea":
                    this._wrapperState.listeners = [m.trapBubbledEvent("topInvalid", "invalid", e)]
            }
        }

        function U() {
            b.postUpdateWrapper(this)
        }
        var H = {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            },
            F = {
                listing: !0,
                pre: !0,
                textarea: !0
            },
            W = a({
                menuitem: !0
            }, H),
            K = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
            V = {},
            Y = {}.hasOwnProperty;

        function Z(e, t) {
            return e.indexOf("-") >= 0 || null != t.is
        }
        var X = 1;

        function Q(e) {
            var t = e.type;
            ! function(e) {
                Y.call(V, e) || (K.test(e) || n("65", e), V[e] = !0)
            }(t), this._currentElement = e, this._tag = t.toLowerCase(), this._namespaceURI = null, this._renderedChildren = null, this._previousStyle = null, this._previousStyleCopy = null, this._hostNode = null, this._hostParent = null, this._rootNodeID = 0, this._domID = 0, this._hostContainerInfo = null, this._wrapperState = null, this._topLevelWrapper = null, this._flags = 0
        }
        Q.displayName = "ReactDOMComponent", Q.Mixin = {
            mountComponent: function(e, t, o, n) {
                this._rootNodeID = X++, this._domID = o._idCounter++, this._hostParent = t, this._hostContainerInfo = o;
                var a, r, u, d = this._currentElement.props;
                switch (this._tag) {
                    case "audio":
                    case "form":
                    case "iframe":
                    case "img":
                    case "link":
                    case "object":
                    case "source":
                    case "video":
                        this._wrapperState = {
                            listeners: null
                        }, e.getReactMountReady().enqueue(q, this);
                        break;
                    case "input":
                        g.mountWrapper(this, d, t), d = g.getHostProps(this, d), e.getReactMountReady().enqueue(G, this), e.getReactMountReady().enqueue(q, this);
                        break;
                    case "option":
                        k.mountWrapper(this, d, t), d = k.getHostProps(this, d);
                        break;
                    case "select":
                        b.mountWrapper(this, d, t), d = b.getHostProps(this, d), e.getReactMountReady().enqueue(q, this);
                        break;
                    case "textarea":
                        v.mountWrapper(this, d, t), d = v.getHostProps(this, d), e.getReactMountReady().enqueue(G, this), e.getReactMountReady().enqueue(q, this)
                }
                if (A(this, d), null != t ? (a = t._namespaceURI, r = t._tag) : o._tag && (a = o._namespaceURI, r = o._tag), (null == a || a === l.svg && "foreignobject" === r) && (a = l.html), a === l.html && ("svg" === this._tag ? a = l.svg : "math" === this._tag && (a = l.mathml)), this._namespaceURI = a, e.useCreateElement) {
                    var p, m = o._ownerDocument;
                    if (a === l.html)
                        if ("script" === this._tag) {
                            var h = m.createElement("div"),
                                y = this._currentElement.type;
                            h.innerHTML = "<" + y + "></" + y + ">", p = h.removeChild(h.firstChild)
                        } else p = d.is ? m.createElement(this._currentElement.type, d.is) : m.createElement(this._currentElement.type);
                    else p = m.createElementNS(a, this._currentElement.type);
                    f.precacheNode(this, p), this._flags |= O.hasCachedChildNodes, this._hostParent || c.setAttributeForRoot(p), this._updateDOMProperties(null, d, e);
                    var j = s(p);
                    this._createInitialChildren(e, d, n, j), u = j
                } else {
                    var w = this._createOpenTagMarkupAndPutListeners(e, d),
                        _ = this._createContentMarkup(e, d, n);
                    u = !_ && H[this._tag] ? w + "/>" : w + ">" + _ + "</" + this._currentElement.type + ">"
                }
                switch (this._tag) {
                    case "input":
                        e.getReactMountReady().enqueue(L, this), d.autoFocus && e.getReactMountReady().enqueue(i.focusDOMComponent, this);
                        break;
                    case "textarea":
                        e.getReactMountReady().enqueue(B, this), d.autoFocus && e.getReactMountReady().enqueue(i.focusDOMComponent, this);
                        break;
                    case "select":
                    case "button":
                        d.autoFocus && e.getReactMountReady().enqueue(i.focusDOMComponent, this);
                        break;
                    case "option":
                        e.getReactMountReady().enqueue(D, this)
                }
                return u
            },
            _createOpenTagMarkupAndPutListeners: function(e, t) {
                var o = "<" + this._currentElement.type;
                for (var n in t)
                    if (t.hasOwnProperty(n)) {
                        var i = t[n];
                        if (null != i)
                            if (z.hasOwnProperty(n)) i && T(this, n, i, e);
                            else {
                                "style" === n && (i && (i = this._previousStyleCopy = a({}, t.style)), i = r.createMarkupForStyles(i, this));
                                var s = null;
                                null != this._tag && Z(this._tag, t) ? M.hasOwnProperty(n) || (s = c.createMarkupForCustomAttribute(n, i)) : s = c.createMarkupForProperty(n, i), s && (o += " " + s)
                            }
                    } return e.renderToStaticMarkup ? o : (this._hostParent || (o += " " + c.createMarkupForRoot()), o += " " + c.createMarkupForID(this._domID))
            },
            _createContentMarkup: function(e, t, o) {
                var n = "",
                    a = t.dangerouslySetInnerHTML;
                if (null != a) null != a.__html && (n = a.__html);
                else {
                    var i = S[typeof t.children] ? t.children : null,
                        r = null != i ? null : t.children;
                    if (null != i) n = w(i);
                    else if (null != r) {
                        n = this.mountChildren(r, e, o).join("")
                    }
                }
                return F[this._tag] && "\n" === n.charAt(0) ? "\n" + n : n
            },
            _createInitialChildren: function(e, t, o, n) {
                var a = t.dangerouslySetInnerHTML;
                if (null != a) null != a.__html && s.queueHTML(n, a.__html);
                else {
                    var i = S[typeof t.children] ? t.children : null,
                        r = null != i ? null : t.children;
                    if (null != i) "" !== i && s.queueText(n, i);
                    else if (null != r)
                        for (var l = this.mountChildren(r, e, o), u = 0; u < l.length; u++) s.queueChild(n, l[u])
                }
            },
            receiveComponent: function(e, t, o) {
                var n = this._currentElement;
                this._currentElement = e, this.updateComponent(t, n, e, o)
            },
            updateComponent: function(e, t, o, n) {
                var a = t.props,
                    i = this._currentElement.props;
                switch (this._tag) {
                    case "input":
                        a = g.getHostProps(this, a), i = g.getHostProps(this, i);
                        break;
                    case "option":
                        a = k.getHostProps(this, a), i = k.getHostProps(this, i);
                        break;
                    case "select":
                        a = b.getHostProps(this, a), i = b.getHostProps(this, i);
                        break;
                    case "textarea":
                        a = v.getHostProps(this, a), i = v.getHostProps(this, i)
                }
                switch (A(this, i), this._updateDOMProperties(a, i, e), this._updateDOMChildren(a, i, e, n), this._tag) {
                    case "input":
                        g.updateWrapper(this), _.updateValueIfChanged(this);
                        break;
                    case "textarea":
                        v.updateWrapper(this);
                        break;
                    case "select":
                        e.getReactMountReady().enqueue(U, this)
                }
            },
            _updateDOMProperties: function(e, t, o) {
                var n, i, s;
                for (n in e)
                    if (!t.hasOwnProperty(n) && e.hasOwnProperty(n) && null != e[n])
                        if ("style" === n) {
                            var l = this._previousStyleCopy;
                            for (i in l) l.hasOwnProperty(i) && ((s = s || {})[i] = "");
                            this._previousStyleCopy = null
                        } else z.hasOwnProperty(n) ? e[n] && C(this, n) : Z(this._tag, e) ? M.hasOwnProperty(n) || c.deleteValueForAttribute(x(this), n) : (u.properties[n] || u.isCustomAttribute(n)) && c.deleteValueForProperty(x(this), n);
                for (n in t) {
                    var d = t[n],
                        p = "style" === n ? this._previousStyleCopy : null != e ? e[n] : void 0;
                    if (t.hasOwnProperty(n) && d !== p && (null != d || null != p))
                        if ("style" === n)
                            if (d ? d = this._previousStyleCopy = a({}, d) : this._previousStyleCopy = null, p) {
                                for (i in p) !p.hasOwnProperty(i) || d && d.hasOwnProperty(i) || ((s = s || {})[i] = "");
                                for (i in d) d.hasOwnProperty(i) && p[i] !== d[i] && ((s = s || {})[i] = d[i])
                            } else s = d;
                    else if (z.hasOwnProperty(n)) d ? T(this, n, d, o) : p && C(this, n);
                    else if (Z(this._tag, t)) M.hasOwnProperty(n) || c.setValueForAttribute(x(this), n, d);
                    else if (u.properties[n] || u.isCustomAttribute(n)) {
                        var m = x(this);
                        null != d ? c.setValueForProperty(m, n, d) : c.deleteValueForProperty(m, n)
                    }
                }
                s && r.setValueForStyles(x(this), s, this)
            },
            _updateDOMChildren: function(e, t, o, n) {
                var a = S[typeof e.children] ? e.children : null,
                    i = S[typeof t.children] ? t.children : null,
                    r = e.dangerouslySetInnerHTML && e.dangerouslySetInnerHTML.__html,
                    s = t.dangerouslySetInnerHTML && t.dangerouslySetInnerHTML.__html,
                    l = null != a ? null : e.children,
                    u = null != i ? null : t.children,
                    c = null != a || null != r,
                    d = null != i || null != s;
                null != l && null == u ? this.updateChildren(null, o, n) : c && !d && this.updateTextContent(""), null != i ? a !== i && this.updateTextContent("" + i) : null != s ? r !== s && this.updateMarkup("" + s) : null != u && this.updateChildren(u, o, n)
            },
            getHostNode: function() {
                return x(this)
            },
            unmountComponent: function(e) {
                switch (this._tag) {
                    case "audio":
                    case "form":
                    case "iframe":
                    case "img":
                    case "link":
                    case "object":
                    case "source":
                    case "video":
                        var t = this._wrapperState.listeners;
                        if (t)
                            for (var o = 0; o < t.length; o++) t[o].remove();
                        break;
                    case "input":
                    case "textarea":
                        _.stopTracking(this);
                        break;
                    case "html":
                    case "head":
                    case "body":
                        n("66", this._tag)
                }
                this.unmountChildren(e), f.uncacheNode(this), d.deleteAllListeners(this), this._rootNodeID = 0, this._domID = 0, this._wrapperState = null
            },
            getPublicInstance: function() {
                return x(this)
            }
        }, a(Q.prototype, Q.Mixin, y.Mixin), e.exports = Q
    },
    "../node_modules/react-dom/lib/ReactDOMComponentFlags.js": function(e, t, o) {
        "use strict";
        e.exports = {
            hasCachedChildNodes: 1
        }
    },
    "../node_modules/react-dom/lib/ReactDOMComponentTree.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/reactProdInvariant.js"),
            a = o("../node_modules/react-dom/lib/DOMProperty.js"),
            i = o("../node_modules/react-dom/lib/ReactDOMComponentFlags.js"),
            r = (o("../node_modules/fbjs/lib/invariant.js"), a.ID_ATTRIBUTE_NAME),
            s = i,
            l = "__reactInternalInstance$" + Math.random().toString(36).slice(2);

        function u(e, t) {
            return 1 === e.nodeType && e.getAttribute(r) === String(t) || 8 === e.nodeType && e.nodeValue === " react-text: " + t + " " || 8 === e.nodeType && e.nodeValue === " react-empty: " + t + " "
        }

        function c(e) {
            for (var t; t = e._renderedComponent;) e = t;
            return e
        }

        function d(e, t) {
            var o = c(e);
            o._hostNode = t, t[l] = o
        }

        function p(e, t) {
            if (!(e._flags & s.hasCachedChildNodes)) {
                var o = e._renderedChildren,
                    a = t.firstChild;
                e: for (var i in o)
                    if (o.hasOwnProperty(i)) {
                        var r = o[i],
                            l = c(r)._domID;
                        if (0 !== l) {
                            for (; null !== a; a = a.nextSibling)
                                if (u(a, l)) {
                                    d(r, a);
                                    continue e
                                } n("32", l)
                        }
                    } e._flags |= s.hasCachedChildNodes
            }
        }

        function m(e) {
            if (e[l]) return e[l];
            for (var t, o, n = []; !e[l];) {
                if (n.push(e), !e.parentNode) return null;
                e = e.parentNode
            }
            for (; e && (o = e[l]); e = n.pop()) t = o, n.length && p(o, e);
            return t
        }
        var h = {
            getClosestInstanceFromNode: m,
            getInstanceFromNode: function(e) {
                var t = m(e);
                return null != t && t._hostNode === e ? t : null
            },
            getNodeFromInstance: function(e) {
                if (void 0 === e._hostNode && n("33"), e._hostNode) return e._hostNode;
                for (var t = []; !e._hostNode;) t.push(e), e._hostParent || n("34"), e = e._hostParent;
                for (; t.length; e = t.pop()) p(e, e._hostNode);
                return e._hostNode
            },
            precacheChildNodes: p,
            precacheNode: d,
            uncacheNode: function(e) {
                var t = e._hostNode;
                t && (delete t[l], e._hostNode = null)
            }
        };
        e.exports = h
    },
    "../node_modules/react-dom/lib/ReactDOMContainerInfo.js": function(e, t, o) {
        "use strict";
        o("../node_modules/react-dom/lib/validateDOMNesting.js");
        var n = 9;
        e.exports = function(e, t) {
            return {
                _topLevelWrapper: e,
                _idCounter: 1,
                _ownerDocument: t ? t.nodeType === n ? t : t.ownerDocument : null,
                _node: t,
                _tag: t ? t.nodeName.toLowerCase() : null,
                _namespaceURI: t ? t.namespaceURI : null
            }
        }
    },
    "../node_modules/react-dom/lib/ReactDOMEmptyComponent.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/object-assign/index.js"),
            a = o("../node_modules/react-dom/lib/DOMLazyTree.js"),
            i = o("../node_modules/react-dom/lib/ReactDOMComponentTree.js"),
            r = function(e) {
                this._currentElement = null, this._hostNode = null, this._hostParent = null, this._hostContainerInfo = null, this._domID = 0
            };
        n(r.prototype, {
            mountComponent: function(e, t, o, n) {
                var r = o._idCounter++;
                this._domID = r, this._hostParent = t, this._hostContainerInfo = o;
                var s = " react-empty: " + this._domID + " ";
                if (e.useCreateElement) {
                    var l = o._ownerDocument.createComment(s);
                    return i.precacheNode(this, l), a(l)
                }
                return e.renderToStaticMarkup ? "" : "\x3c!--" + s + "--\x3e"
            },
            receiveComponent: function() {},
            getHostNode: function() {
                return i.getNodeFromInstance(this)
            },
            unmountComponent: function() {
                i.uncacheNode(this)
            }
        }), e.exports = r
    },
    "../node_modules/react-dom/lib/ReactDOMFeatureFlags.js": function(e, t, o) {
        "use strict";
        e.exports = {
            useCreateElement: !0,
            useFiber: !1
        }
    },
    "../node_modules/react-dom/lib/ReactDOMIDOperations.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/DOMChildrenOperations.js"),
            a = o("../node_modules/react-dom/lib/ReactDOMComponentTree.js"),
            i = {
                dangerouslyProcessChildrenUpdates: function(e, t) {
                    var o = a.getNodeFromInstance(e);
                    n.processUpdates(o, t)
                }
            };
        e.exports = i
    },
    "../node_modules/react-dom/lib/ReactDOMInput.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/reactProdInvariant.js"),
            a = o("../node_modules/object-assign/index.js"),
            i = o("../node_modules/react-dom/lib/DOMPropertyOperations.js"),
            r = o("../node_modules/react-dom/lib/LinkedValueUtils.js"),
            s = o("../node_modules/react-dom/lib/ReactDOMComponentTree.js"),
            l = o("../node_modules/react-dom/lib/ReactUpdates.js");
        o("../node_modules/fbjs/lib/invariant.js"), o("../node_modules/fbjs/lib/warning.js");

        function u() {
            this._rootNodeID && d.updateWrapper(this)
        }

        function c(e) {
            return "checkbox" === e.type || "radio" === e.type ? null != e.checked : null != e.value
        }
        var d = {
            getHostProps: function(e, t) {
                var o = r.getValue(t),
                    n = r.getChecked(t);
                return a({
                    type: void 0,
                    step: void 0,
                    min: void 0,
                    max: void 0
                }, t, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: null != o ? o : e._wrapperState.initialValue,
                    checked: null != n ? n : e._wrapperState.initialChecked,
                    onChange: e._wrapperState.onChange
                })
            },
            mountWrapper: function(e, t) {
                var o = t.defaultValue;
                e._wrapperState = {
                    initialChecked: null != t.checked ? t.checked : t.defaultChecked,
                    initialValue: null != t.value ? t.value : o,
                    listeners: null,
                    onChange: p.bind(e),
                    controlled: c(t)
                }
            },
            updateWrapper: function(e) {
                var t = e._currentElement.props,
                    o = t.checked;
                null != o && i.setValueForProperty(s.getNodeFromInstance(e), "checked", o || !1);
                var n = s.getNodeFromInstance(e),
                    a = r.getValue(t);
                if (null != a)
                    if (0 === a && "" === n.value) n.value = "0";
                    else if ("number" === t.type) {
                    var l = parseFloat(n.value, 10) || 0;
                    (a != l || a == l && n.value != a) && (n.value = "" + a)
                } else n.value !== "" + a && (n.value = "" + a);
                else null == t.value && null != t.defaultValue && n.defaultValue !== "" + t.defaultValue && (n.defaultValue = "" + t.defaultValue), null == t.checked && null != t.defaultChecked && (n.defaultChecked = !!t.defaultChecked)
            },
            postMountWrapper: function(e) {
                var t = e._currentElement.props,
                    o = s.getNodeFromInstance(e);
                switch (t.type) {
                    case "submit":
                    case "reset":
                        break;
                    case "color":
                    case "date":
                    case "datetime":
                    case "datetime-local":
                    case "month":
                    case "time":
                    case "week":
                        o.value = "", o.value = o.defaultValue;
                        break;
                    default:
                        o.value = o.value
                }
                var n = o.name;
                "" !== n && (o.name = ""), o.defaultChecked = !o.defaultChecked, o.defaultChecked = !o.defaultChecked, "" !== n && (o.name = n)
            }
        };

        function p(e) {
            var t = this._currentElement.props,
                o = r.executeOnChange(t, e);
            l.asap(u, this);
            var a = t.name;
            if ("radio" === t.type && null != a) {
                for (var i = s.getNodeFromInstance(this), c = i; c.parentNode;) c = c.parentNode;
                for (var d = c.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), p = 0; p < d.length; p++) {
                    var m = d[p];
                    if (m !== i && m.form === i.form) {
                        var h = s.getInstanceFromNode(m);
                        h || n("90"), l.asap(u, h)
                    }
                }
            }
            return o
        }
        e.exports = d
    },
    "../node_modules/react-dom/lib/ReactDOMOption.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/object-assign/index.js"),
            a = o("../node_modules/react/lib/React.js"),
            i = o("../node_modules/react-dom/lib/ReactDOMComponentTree.js"),
            r = o("../node_modules/react-dom/lib/ReactDOMSelect.js"),
            s = (o("../node_modules/fbjs/lib/warning.js"), !1);

        function l(e) {
            var t = "";
            return a.Children.forEach(e, function(e) {
                null != e && ("string" == typeof e || "number" == typeof e ? t += e : s || (s = !0))
            }), t
        }
        var u = {
            mountWrapper: function(e, t, o) {
                var n = null;
                if (null != o) {
                    var a = o;
                    "optgroup" === a._tag && (a = a._hostParent), null != a && "select" === a._tag && (n = r.getSelectValueContext(a))
                }
                var i, s = null;
                if (null != n)
                    if (i = null != t.value ? t.value + "" : l(t.children), s = !1, Array.isArray(n)) {
                        for (var u = 0; u < n.length; u++)
                            if ("" + n[u] === i) {
                                s = !0;
                                break
                            }
                    } else s = "" + n === i;
                e._wrapperState = {
                    selected: s
                }
            },
            postMountWrapper: function(e) {
                var t = e._currentElement.props;
                null != t.value && i.getNodeFromInstance(e).setAttribute("value", t.value)
            },
            getHostProps: function(e, t) {
                var o = n({
                    selected: void 0,
                    children: void 0
                }, t);
                null != e._wrapperState.selected && (o.selected = e._wrapperState.selected);
                var a = l(t.children);
                return a && (o.children = a), o
            }
        };
        e.exports = u
    },
    "../node_modules/react-dom/lib/ReactDOMSelect.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/object-assign/index.js"),
            a = o("../node_modules/react-dom/lib/LinkedValueUtils.js"),
            i = o("../node_modules/react-dom/lib/ReactDOMComponentTree.js"),
            r = o("../node_modules/react-dom/lib/ReactUpdates.js"),
            s = (o("../node_modules/fbjs/lib/warning.js"), !1);

        function l() {
            if (this._rootNodeID && this._wrapperState.pendingUpdate) {
                this._wrapperState.pendingUpdate = !1;
                var e = this._currentElement.props,
                    t = a.getValue(e);
                null != t && u(this, Boolean(e.multiple), t)
            }
        }

        function u(e, t, o) {
            var n, a, r = i.getNodeFromInstance(e).options;
            if (t) {
                for (n = {}, a = 0; a < o.length; a++) n["" + o[a]] = !0;
                for (a = 0; a < r.length; a++) {
                    var s = n.hasOwnProperty(r[a].value);
                    r[a].selected !== s && (r[a].selected = s)
                }
            } else {
                for (n = "" + o, a = 0; a < r.length; a++)
                    if (r[a].value === n) return void(r[a].selected = !0);
                r.length && (r[0].selected = !0)
            }
        }
        var c = {
            getHostProps: function(e, t) {
                return n({}, t, {
                    onChange: e._wrapperState.onChange,
                    value: void 0
                })
            },
            mountWrapper: function(e, t) {
                var o = a.getValue(t);
                e._wrapperState = {
                    pendingUpdate: !1,
                    initialValue: null != o ? o : t.defaultValue,
                    listeners: null,
                    onChange: d.bind(e),
                    wasMultiple: Boolean(t.multiple)
                }, void 0 === t.value || void 0 === t.defaultValue || s || (s = !0)
            },
            getSelectValueContext: function(e) {
                return e._wrapperState.initialValue
            },
            postUpdateWrapper: function(e) {
                var t = e._currentElement.props;
                e._wrapperState.initialValue = void 0;
                var o = e._wrapperState.wasMultiple;
                e._wrapperState.wasMultiple = Boolean(t.multiple);
                var n = a.getValue(t);
                null != n ? (e._wrapperState.pendingUpdate = !1, u(e, Boolean(t.multiple), n)) : o !== Boolean(t.multiple) && (null != t.defaultValue ? u(e, Boolean(t.multiple), t.defaultValue) : u(e, Boolean(t.multiple), t.multiple ? [] : ""))
            }
        };

        function d(e) {
            var t = this._currentElement.props,
                o = a.executeOnChange(t, e);
            return this._rootNodeID && (this._wrapperState.pendingUpdate = !0), r.asap(l, this), o
        }
        e.exports = c
    },
    "../node_modules/react-dom/lib/ReactDOMSelection.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/fbjs/lib/ExecutionEnvironment.js"),
            a = o("../node_modules/react-dom/lib/getNodeForCharacterOffset.js"),
            i = o("../node_modules/react-dom/lib/getTextContentAccessor.js");

        function r(e, t, o, n) {
            return e === o && t === n
        }
        var s = n.canUseDOM && "selection" in document && !("getSelection" in window),
            l = {
                getOffsets: s ? function(e) {
                    var t = document.selection.createRange(),
                        o = t.text.length,
                        n = t.duplicate();
                    n.moveToElementText(e), n.setEndPoint("EndToStart", t);
                    var a = n.text.length;
                    return {
                        start: a,
                        end: a + o
                    }
                } : function(e) {
                    var t = window.getSelection && window.getSelection();
                    if (!t || 0 === t.rangeCount) return null;
                    var o = t.anchorNode,
                        n = t.anchorOffset,
                        a = t.focusNode,
                        i = t.focusOffset,
                        s = t.getRangeAt(0);
                    try {
                        s.startContainer.nodeType, s.endContainer.nodeType
                    } catch (e) {
                        return null
                    }
                    var l = r(t.anchorNode, t.anchorOffset, t.focusNode, t.focusOffset) ? 0 : s.toString().length,
                        u = s.cloneRange();
                    u.selectNodeContents(e), u.setEnd(s.startContainer, s.startOffset);
                    var c = r(u.startContainer, u.startOffset, u.endContainer, u.endOffset) ? 0 : u.toString().length,
                        d = c + l,
                        p = document.createRange();
                    p.setStart(o, n), p.setEnd(a, i);
                    var m = p.collapsed;
                    return {
                        start: m ? d : c,
                        end: m ? c : d
                    }
                },
                setOffsets: s ? function(e, t) {
                    var o, n, a = document.selection.createRange().duplicate();
                    void 0 === t.end ? n = o = t.start : t.start > t.end ? (o = t.end, n = t.start) : (o = t.start, n = t.end), a.moveToElementText(e), a.moveStart("character", o), a.setEndPoint("EndToStart", a), a.moveEnd("character", n - o), a.select()
                } : function(e, t) {
                    if (window.getSelection) {
                        var o = window.getSelection(),
                            n = e[i()].length,
                            r = Math.min(t.start, n),
                            s = void 0 === t.end ? r : Math.min(t.end, n);
                        if (!o.extend && r > s) {
                            var l = s;
                            s = r, r = l
                        }
                        var u = a(e, r),
                            c = a(e, s);
                        if (u && c) {
                            var d = document.createRange();
                            d.setStart(u.node, u.offset), o.removeAllRanges(), r > s ? (o.addRange(d), o.extend(c.node, c.offset)) : (d.setEnd(c.node, c.offset), o.addRange(d))
                        }
                    }
                }
            };
        e.exports = l
    },
    "../node_modules/react-dom/lib/ReactDOMTextComponent.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/reactProdInvariant.js"),
            a = o("../node_modules/object-assign/index.js"),
            i = o("../node_modules/react-dom/lib/DOMChildrenOperations.js"),
            r = o("../node_modules/react-dom/lib/DOMLazyTree.js"),
            s = o("../node_modules/react-dom/lib/ReactDOMComponentTree.js"),
            l = o("../node_modules/react-dom/lib/escapeTextContentForBrowser.js"),
            u = (o("../node_modules/fbjs/lib/invariant.js"), o("../node_modules/react-dom/lib/validateDOMNesting.js"), function(e) {
                this._currentElement = e, this._stringText = "" + e, this._hostNode = null, this._hostParent = null, this._domID = 0, this._mountIndex = 0, this._closingComment = null, this._commentNodes = null
            });
        a(u.prototype, {
            mountComponent: function(e, t, o, n) {
                var a = o._idCounter++,
                    i = " react-text: " + a + " ";
                if (this._domID = a, this._hostParent = t, e.useCreateElement) {
                    var u = o._ownerDocument,
                        c = u.createComment(i),
                        d = u.createComment(" /react-text "),
                        p = r(u.createDocumentFragment());
                    return r.queueChild(p, r(c)), this._stringText && r.queueChild(p, r(u.createTextNode(this._stringText))), r.queueChild(p, r(d)), s.precacheNode(this, c), this._closingComment = d, p
                }
                var m = l(this._stringText);
                return e.renderToStaticMarkup ? m : "\x3c!--" + i + "--\x3e" + m + "\x3c!-- /react-text --\x3e"
            },
            receiveComponent: function(e, t) {
                if (e !== this._currentElement) {
                    this._currentElement = e;
                    var o = "" + e;
                    if (o !== this._stringText) {
                        this._stringText = o;
                        var n = this.getHostNode();
                        i.replaceDelimitedText(n[0], n[1], o)
                    }
                }
            },
            getHostNode: function() {
                var e = this._commentNodes;
                if (e) return e;
                if (!this._closingComment)
                    for (var t = s.getNodeFromInstance(this).nextSibling;;) {
                        if (null == t && n("67", this._domID), 8 === t.nodeType && " /react-text " === t.nodeValue) {
                            this._closingComment = t;
                            break
                        }
                        t = t.nextSibling
                    }
                return e = [this._hostNode, this._closingComment], this._commentNodes = e, e
            },
            unmountComponent: function() {
                this._closingComment = null, this._commentNodes = null, s.uncacheNode(this)
            }
        }), e.exports = u
    },
    "../node_modules/react-dom/lib/ReactDOMTextarea.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/reactProdInvariant.js"),
            a = o("../node_modules/object-assign/index.js"),
            i = o("../node_modules/react-dom/lib/LinkedValueUtils.js"),
            r = o("../node_modules/react-dom/lib/ReactDOMComponentTree.js"),
            s = o("../node_modules/react-dom/lib/ReactUpdates.js");
        o("../node_modules/fbjs/lib/invariant.js"), o("../node_modules/fbjs/lib/warning.js");

        function l() {
            this._rootNodeID && u.updateWrapper(this)
        }
        var u = {
            getHostProps: function(e, t) {
                return null != t.dangerouslySetInnerHTML && n("91"), a({}, t, {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + e._wrapperState.initialValue,
                    onChange: e._wrapperState.onChange
                })
            },
            mountWrapper: function(e, t) {
                var o = i.getValue(t),
                    a = o;
                if (null == o) {
                    var r = t.defaultValue,
                        s = t.children;
                    null != s && (null != r && n("92"), Array.isArray(s) && (s.length <= 1 || n("93"), s = s[0]), r = "" + s), null == r && (r = ""), a = r
                }
                e._wrapperState = {
                    initialValue: "" + a,
                    listeners: null,
                    onChange: c.bind(e)
                }
            },
            updateWrapper: function(e) {
                var t = e._currentElement.props,
                    o = r.getNodeFromInstance(e),
                    n = i.getValue(t);
                if (null != n) {
                    var a = "" + n;
                    a !== o.value && (o.value = a), null == t.defaultValue && (o.defaultValue = a)
                }
                null != t.defaultValue && (o.defaultValue = t.defaultValue)
            },
            postMountWrapper: function(e) {
                var t = r.getNodeFromInstance(e),
                    o = t.textContent;
                o === e._wrapperState.initialValue && (t.value = o)
            }
        };

        function c(e) {
            var t = this._currentElement.props,
                o = i.executeOnChange(t, e);
            return s.asap(l, this), o
        }
        e.exports = u
    },
    "../node_modules/react-dom/lib/ReactDOMTreeTraversal.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/reactProdInvariant.js");
        o("../node_modules/fbjs/lib/invariant.js");

        function a(e, t) {
            "_hostNode" in e || n("33"), "_hostNode" in t || n("33");
            for (var o = 0, a = e; a; a = a._hostParent) o++;
            for (var i = 0, r = t; r; r = r._hostParent) i++;
            for (; o - i > 0;) e = e._hostParent, o--;
            for (; i - o > 0;) t = t._hostParent, i--;
            for (var s = o; s--;) {
                if (e === t) return e;
                e = e._hostParent, t = t._hostParent
            }
            return null
        }
        e.exports = {
            isAncestor: function(e, t) {
                "_hostNode" in e || n("35"), "_hostNode" in t || n("35");
                for (; t;) {
                    if (t === e) return !0;
                    t = t._hostParent
                }
                return !1
            },
            getLowestCommonAncestor: a,
            getParentInstance: function(e) {
                return "_hostNode" in e || n("36"), e._hostParent
            },
            traverseTwoPhase: function(e, t, o) {
                for (var n, a = []; e;) a.push(e), e = e._hostParent;
                for (n = a.length; n-- > 0;) t(a[n], "captured", o);
                for (n = 0; n < a.length; n++) t(a[n], "bubbled", o)
            },
            traverseEnterLeave: function(e, t, o, n, i) {
                for (var r = e && t ? a(e, t) : null, s = []; e && e !== r;) s.push(e), e = e._hostParent;
                for (var l, u = []; t && t !== r;) u.push(t), t = t._hostParent;
                for (l = 0; l < s.length; l++) o(s[l], "bubbled", n);
                for (l = u.length; l-- > 0;) o(u[l], "captured", i)
            }
        }
    },
    "../node_modules/react-dom/lib/ReactDefaultBatchingStrategy.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/object-assign/index.js"),
            a = o("../node_modules/react-dom/lib/ReactUpdates.js"),
            i = o("../node_modules/react-dom/lib/Transaction.js"),
            r = o("../node_modules/fbjs/lib/emptyFunction.js"),
            s = {
                initialize: r,
                close: function() {
                    d.isBatchingUpdates = !1
                }
            },
            l = [{
                initialize: r,
                close: a.flushBatchedUpdates.bind(a)
            }, s];

        function u() {
            this.reinitializeTransaction()
        }
        n(u.prototype, i, {
            getTransactionWrappers: function() {
                return l
            }
        });
        var c = new u,
            d = {
                isBatchingUpdates: !1,
                batchedUpdates: function(e, t, o, n, a, i) {
                    var r = d.isBatchingUpdates;
                    return d.isBatchingUpdates = !0, r ? e(t, o, n, a, i) : c.perform(e, null, t, o, n, a, i)
                }
            };
        e.exports = d
    },
    "../node_modules/react-dom/lib/ReactDefaultInjection.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/ARIADOMPropertyConfig.js"),
            a = o("../node_modules/react-dom/lib/BeforeInputEventPlugin.js"),
            i = o("../node_modules/react-dom/lib/ChangeEventPlugin.js"),
            r = o("../node_modules/react-dom/lib/DefaultEventPluginOrder.js"),
            s = o("../node_modules/react-dom/lib/EnterLeaveEventPlugin.js"),
            l = o("../node_modules/react-dom/lib/HTMLDOMPropertyConfig.js"),
            u = o("../node_modules/react-dom/lib/ReactComponentBrowserEnvironment.js"),
            c = o("../node_modules/react-dom/lib/ReactDOMComponent.js"),
            d = o("../node_modules/react-dom/lib/ReactDOMComponentTree.js"),
            p = o("../node_modules/react-dom/lib/ReactDOMEmptyComponent.js"),
            m = o("../node_modules/react-dom/lib/ReactDOMTreeTraversal.js"),
            h = o("../node_modules/react-dom/lib/ReactDOMTextComponent.js"),
            f = o("../node_modules/react-dom/lib/ReactDefaultBatchingStrategy.js"),
            g = o("../node_modules/react-dom/lib/ReactEventListener.js"),
            k = o("../node_modules/react-dom/lib/ReactInjection.js"),
            b = o("../node_modules/react-dom/lib/ReactReconcileTransaction.js"),
            v = o("../node_modules/react-dom/lib/SVGDOMPropertyConfig.js"),
            y = o("../node_modules/react-dom/lib/SelectEventPlugin.js"),
            j = o("../node_modules/react-dom/lib/SimpleEventPlugin.js"),
            w = !1;
        e.exports = {
            inject: function() {
                w || (w = !0, k.EventEmitter.injectReactEventListener(g), k.EventPluginHub.injectEventPluginOrder(r), k.EventPluginUtils.injectComponentTree(d), k.EventPluginUtils.injectTreeTraversal(m), k.EventPluginHub.injectEventPluginsByName({
                    SimpleEventPlugin: j,
                    EnterLeaveEventPlugin: s,
                    ChangeEventPlugin: i,
                    SelectEventPlugin: y,
                    BeforeInputEventPlugin: a
                }), k.HostComponent.injectGenericComponentClass(c), k.HostComponent.injectTextComponentClass(h), k.DOMProperty.injectDOMPropertyConfig(n), k.DOMProperty.injectDOMPropertyConfig(l), k.DOMProperty.injectDOMPropertyConfig(v), k.EmptyComponent.injectEmptyComponentFactory(function(e) {
                    return new p(e)
                }), k.Updates.injectReconcileTransaction(b), k.Updates.injectBatchingStrategy(f), k.Component.injectEnvironment(u))
            }
        }
    },
    "../node_modules/react-dom/lib/ReactElementSymbol.js": function(e, t, o) {
        "use strict";
        var n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
        e.exports = n
    },
    "../node_modules/react-dom/lib/ReactEmptyComponent.js": function(e, t, o) {
        "use strict";
        var n, a = {
                injectEmptyComponentFactory: function(e) {
                    n = e
                }
            },
            i = {
                create: function(e) {
                    return n(e)
                }
            };
        i.injection = a, e.exports = i
    },
    "../node_modules/react-dom/lib/ReactErrorUtils.js": function(e, t, o) {
        "use strict";
        var n = null;

        function a(e, t, o) {
            try {
                t(o)
            } catch (e) {
                null === n && (n = e)
            }
        }
        var i = {
            invokeGuardedCallback: a,
            invokeGuardedCallbackWithCatch: a,
            rethrowCaughtError: function() {
                if (n) {
                    var e = n;
                    throw n = null, e
                }
            }
        };
        e.exports = i
    },
    "../node_modules/react-dom/lib/ReactEventEmitterMixin.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/EventPluginHub.js");
        var a = {
            handleTopLevel: function(e, t, o, a) {
                ! function(e) {
                    n.enqueueEvents(e), n.processEventQueue(!1)
                }(n.extractEvents(e, t, o, a))
            }
        };
        e.exports = a
    },
    "../node_modules/react-dom/lib/ReactEventListener.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/object-assign/index.js"),
            a = o("../node_modules/fbjs/lib/EventListener.js"),
            i = o("../node_modules/fbjs/lib/ExecutionEnvironment.js"),
            r = o("../node_modules/react-dom/lib/PooledClass.js"),
            s = o("../node_modules/react-dom/lib/ReactDOMComponentTree.js"),
            l = o("../node_modules/react-dom/lib/ReactUpdates.js"),
            u = o("../node_modules/react-dom/lib/getEventTarget.js"),
            c = o("../node_modules/fbjs/lib/getUnboundedScrollPosition.js");

        function d(e) {
            for (; e._hostParent;) e = e._hostParent;
            var t = s.getNodeFromInstance(e).parentNode;
            return s.getClosestInstanceFromNode(t)
        }

        function p(e, t) {
            this.topLevelType = e, this.nativeEvent = t, this.ancestors = []
        }

        function m(e) {
            var t = u(e.nativeEvent),
                o = s.getClosestInstanceFromNode(t),
                n = o;
            do {
                e.ancestors.push(n), n = n && d(n)
            } while (n);
            for (var a = 0; a < e.ancestors.length; a++) o = e.ancestors[a], h._handleTopLevel(e.topLevelType, o, e.nativeEvent, u(e.nativeEvent))
        }
        n(p.prototype, {
            destructor: function() {
                this.topLevelType = null, this.nativeEvent = null, this.ancestors.length = 0
            }
        }), r.addPoolingTo(p, r.twoArgumentPooler);
        var h = {
            _enabled: !0,
            _handleTopLevel: null,
            WINDOW_HANDLE: i.canUseDOM ? window : null,
            setHandleTopLevel: function(e) {
                h._handleTopLevel = e
            },
            setEnabled: function(e) {
                h._enabled = !!e
            },
            isEnabled: function() {
                return h._enabled
            },
            trapBubbledEvent: function(e, t, o) {
                return o ? a.listen(o, t, h.dispatchEvent.bind(null, e)) : null
            },
            trapCapturedEvent: function(e, t, o) {
                return o ? a.capture(o, t, h.dispatchEvent.bind(null, e)) : null
            },
            monitorScrollValue: function(e) {
                var t = function(e) {
                    e(c(window))
                }.bind(null, e);
                a.listen(window, "scroll", t)
            },
            dispatchEvent: function(e, t) {
                if (h._enabled) {
                    var o = p.getPooled(e, t);
                    try {
                        l.batchedUpdates(m, o)
                    } finally {
                        p.release(o)
                    }
                }
            }
        };
        e.exports = h
    },
    "../node_modules/react-dom/lib/ReactFeatureFlags.js": function(e, t, o) {
        "use strict";
        e.exports = {
            logTopLevelRenders: !1
        }
    },
    "../node_modules/react-dom/lib/ReactHostComponent.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/reactProdInvariant.js"),
            a = (o("../node_modules/fbjs/lib/invariant.js"), null),
            i = null;
        var r = {
            createInternalComponent: function(e) {
                return a || n("111", e.type), new a(e)
            },
            createInstanceForText: function(e) {
                return new i(e)
            },
            isTextComponent: function(e) {
                return e instanceof i
            },
            injection: {
                injectGenericComponentClass: function(e) {
                    a = e
                },
                injectTextComponentClass: function(e) {
                    i = e
                }
            }
        };
        e.exports = r
    },
    "../node_modules/react-dom/lib/ReactInjection.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/DOMProperty.js"),
            a = o("../node_modules/react-dom/lib/EventPluginHub.js"),
            i = o("../node_modules/react-dom/lib/EventPluginUtils.js"),
            r = o("../node_modules/react-dom/lib/ReactComponentEnvironment.js"),
            s = o("../node_modules/react-dom/lib/ReactEmptyComponent.js"),
            l = o("../node_modules/react-dom/lib/ReactBrowserEventEmitter.js"),
            u = o("../node_modules/react-dom/lib/ReactHostComponent.js"),
            c = o("../node_modules/react-dom/lib/ReactUpdates.js"),
            d = {
                Component: r.injection,
                DOMProperty: n.injection,
                EmptyComponent: s.injection,
                EventPluginHub: a.injection,
                EventPluginUtils: i.injection,
                EventEmitter: l.injection,
                HostComponent: u.injection,
                Updates: c.injection
            };
        e.exports = d
    },
    "../node_modules/react-dom/lib/ReactInputSelection.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/ReactDOMSelection.js"),
            a = o("../node_modules/fbjs/lib/containsNode.js"),
            i = o("../node_modules/fbjs/lib/focusNode.js"),
            r = o("../node_modules/fbjs/lib/getActiveElement.js");
        var s = {
            hasSelectionCapabilities: function(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && ("input" === t && "text" === e.type || "textarea" === t || "true" === e.contentEditable)
            },
            getSelectionInformation: function() {
                var e = r();
                return {
                    focusedElem: e,
                    selectionRange: s.hasSelectionCapabilities(e) ? s.getSelection(e) : null
                }
            },
            restoreSelection: function(e) {
                var t, o = r(),
                    n = e.focusedElem,
                    l = e.selectionRange;
                o !== n && (t = n, a(document.documentElement, t)) && (s.hasSelectionCapabilities(n) && s.setSelection(n, l), i(n))
            },
            getSelection: function(e) {
                var t;
                if ("selectionStart" in e) t = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
                else if (document.selection && e.nodeName && "input" === e.nodeName.toLowerCase()) {
                    var o = document.selection.createRange();
                    o.parentElement() === e && (t = {
                        start: -o.moveStart("character", -e.value.length),
                        end: -o.moveEnd("character", -e.value.length)
                    })
                } else t = n.getOffsets(e);
                return t || {
                    start: 0,
                    end: 0
                }
            },
            setSelection: function(e, t) {
                var o = t.start,
                    a = t.end;
                if (void 0 === a && (a = o), "selectionStart" in e) e.selectionStart = o, e.selectionEnd = Math.min(a, e.value.length);
                else if (document.selection && e.nodeName && "input" === e.nodeName.toLowerCase()) {
                    var i = e.createTextRange();
                    i.collapse(!0), i.moveStart("character", o), i.moveEnd("character", a - o), i.select()
                } else n.setOffsets(e, t)
            }
        };
        e.exports = s
    },
    "../node_modules/react-dom/lib/ReactInstanceMap.js": function(e, t, o) {
        "use strict";
        var n = {
            remove: function(e) {
                e._reactInternalInstance = void 0
            },
            get: function(e) {
                return e._reactInternalInstance
            },
            has: function(e) {
                return void 0 !== e._reactInternalInstance
            },
            set: function(e, t) {
                e._reactInternalInstance = t
            }
        };
        e.exports = n
    },
    "../node_modules/react-dom/lib/ReactInstrumentation.js": function(e, t, o) {
        "use strict";
        e.exports = {
            debugTool: null
        }
    },
    "../node_modules/react-dom/lib/ReactMarkupChecksum.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/adler32.js"),
            a = /\/?>/,
            i = /^<\!\-\-/,
            r = {
                CHECKSUM_ATTR_NAME: "data-react-checksum",
                addChecksumToMarkup: function(e) {
                    var t = n(e);
                    return i.test(e) ? e : e.replace(a, " " + r.CHECKSUM_ATTR_NAME + '="' + t + '"$&')
                },
                canReuseMarkup: function(e, t) {
                    var o = t.getAttribute(r.CHECKSUM_ATTR_NAME);
                    return o = o && parseInt(o, 10), n(e) === o
                }
            };
        e.exports = r
    },
    "../node_modules/react-dom/lib/ReactMount.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/reactProdInvariant.js"),
            a = o("../node_modules/react-dom/lib/DOMLazyTree.js"),
            i = o("../node_modules/react-dom/lib/DOMProperty.js"),
            r = o("../node_modules/react/lib/React.js"),
            s = o("../node_modules/react-dom/lib/ReactBrowserEventEmitter.js"),
            l = (o("../node_modules/react/lib/ReactCurrentOwner.js"), o("../node_modules/react-dom/lib/ReactDOMComponentTree.js")),
            u = o("../node_modules/react-dom/lib/ReactDOMContainerInfo.js"),
            c = o("../node_modules/react-dom/lib/ReactDOMFeatureFlags.js"),
            d = o("../node_modules/react-dom/lib/ReactFeatureFlags.js"),
            p = o("../node_modules/react-dom/lib/ReactInstanceMap.js"),
            m = (o("../node_modules/react-dom/lib/ReactInstrumentation.js"), o("../node_modules/react-dom/lib/ReactMarkupChecksum.js")),
            h = o("../node_modules/react-dom/lib/ReactReconciler.js"),
            f = o("../node_modules/react-dom/lib/ReactUpdateQueue.js"),
            g = o("../node_modules/react-dom/lib/ReactUpdates.js"),
            k = o("../node_modules/fbjs/lib/emptyObject.js"),
            b = o("../node_modules/react-dom/lib/instantiateReactComponent.js"),
            v = (o("../node_modules/fbjs/lib/invariant.js"), o("../node_modules/react-dom/lib/setInnerHTML.js")),
            y = o("../node_modules/react-dom/lib/shouldUpdateReactComponent.js"),
            j = (o("../node_modules/fbjs/lib/warning.js"), i.ID_ATTRIBUTE_NAME),
            w = i.ROOT_ATTRIBUTE_NAME,
            _ = 1,
            O = 9,
            C = 11,
            x = {};

        function E(e) {
            return e ? e.nodeType === O ? e.documentElement : e.firstChild : null
        }

        function z(e, t, o, n, a) {
            var i;
            if (d.logTopLevelRenders) {
                var r = e._currentElement.props.child.type;
                i = "React mount: " + ("string" == typeof r ? r : r.displayName || r.name), console.time(i)
            }
            var s = h.mountComponent(e, o, null, u(e, t), a, 0);
            i && console.timeEnd(i), e._renderedComponent._topLevelWrapper = e, L._mountImageIntoNode(s, t, e, n, o)
        }

        function S(e, t, o, n) {
            var a = g.ReactReconcileTransaction.getPooled(!o && c.useCreateElement);
            a.perform(z, null, e, t, a, o, n), g.ReactReconcileTransaction.release(a)
        }

        function P(e, t, o) {
            for (0, h.unmountComponent(e, o), t.nodeType === O && (t = t.documentElement); t.lastChild;) t.removeChild(t.lastChild)
        }

        function M(e) {
            var t = E(e);
            if (t) {
                var o = l.getInstanceFromNode(t);
                return !(!o || !o._hostParent)
            }
        }

        function N(e) {
            return !(!e || e.nodeType !== _ && e.nodeType !== O && e.nodeType !== C)
        }

        function A(e) {
            var t = function(e) {
                var t = E(e),
                    o = t && l.getInstanceFromNode(t);
                return o && !o._hostParent ? o : null
            }(e);
            return t ? t._hostContainerInfo._topLevelWrapper : null
        }
        var T = 1,
            I = function() {
                this.rootID = T++
            };
        I.prototype.isReactComponent = {}, I.prototype.render = function() {
            return this.props.child
        }, I.isReactTopLevelWrapper = !0;
        var L = {
            TopLevelWrapper: I,
            _instancesByReactRootID: x,
            scrollMonitor: function(e, t) {
                t()
            },
            _updateRootComponent: function(e, t, o, n, a) {
                return L.scrollMonitor(n, function() {
                    f.enqueueElementInternal(e, t, o), a && f.enqueueCallbackInternal(e, a)
                }), e
            },
            _renderNewRootComponent: function(e, t, o, a) {
                N(t) || n("37"), s.ensureScrollValueMonitoring();
                var i = b(e, !1);
                g.batchedUpdates(S, i, t, o, a);
                var r = i._instance.rootID;
                return x[r] = i, i
            },
            renderSubtreeIntoContainer: function(e, t, o, a) {
                return null != e && p.has(e) || n("38"), L._renderSubtreeIntoContainer(e, t, o, a)
            },
            _renderSubtreeIntoContainer: function(e, t, o, a) {
                f.validateCallback(a, "ReactDOM.render"), r.isValidElement(t) || n("39", "string" == typeof t ? " Instead of passing a string like 'div', pass React.createElement('div') or <div />." : "function" == typeof t ? " Instead of passing a class like Foo, pass React.createElement(Foo) or <Foo />." : null != t && void 0 !== t.props ? " This may be caused by unintentionally loading two independent copies of React." : "");
                var i, s = r.createElement(I, {
                    child: t
                });
                if (e) {
                    var l = p.get(e);
                    i = l._processChildContext(l._context)
                } else i = k;
                var u = A(o);
                if (u) {
                    var c = u._currentElement.props.child;
                    if (y(c, t)) {
                        var d = u._renderedComponent.getPublicInstance(),
                            m = a && function() {
                                a.call(d)
                            };
                        return L._updateRootComponent(u, s, i, o, m), d
                    }
                    L.unmountComponentAtNode(o)
                }
                var h, g = E(o),
                    b = g && !(!(h = g).getAttribute || !h.getAttribute(j)),
                    v = M(o),
                    w = b && !u && !v,
                    _ = L._renderNewRootComponent(s, o, w, i)._renderedComponent.getPublicInstance();
                return a && a.call(_), _
            },
            render: function(e, t, o) {
                return L._renderSubtreeIntoContainer(null, e, t, o)
            },
            unmountComponentAtNode: function(e) {
                N(e) || n("40");
                var t = A(e);
                if (!t) {
                    M(e), 1 === e.nodeType && e.hasAttribute(w);
                    return !1
                }
                return delete x[t._instance.rootID], g.batchedUpdates(P, t, e, !1), !0
            },
            _mountImageIntoNode: function(e, t, o, i, r) {
                if (N(t) || n("41"), i) {
                    var s = E(t);
                    if (m.canReuseMarkup(e, s)) return void l.precacheNode(o, s);
                    var u = s.getAttribute(m.CHECKSUM_ATTR_NAME);
                    s.removeAttribute(m.CHECKSUM_ATTR_NAME);
                    var c = s.outerHTML;
                    s.setAttribute(m.CHECKSUM_ATTR_NAME, u);
                    var d = e,
                        p = function(e, t) {
                            for (var o = Math.min(e.length, t.length), n = 0; n < o; n++)
                                if (e.charAt(n) !== t.charAt(n)) return n;
                            return e.length === t.length ? -1 : o
                        }(d, c),
                        h = " (client) " + d.substring(p - 20, p + 20) + "\n (server) " + c.substring(p - 20, p + 20);
                    t.nodeType === O && n("42", h)
                }
                if (t.nodeType === O && n("43"), r.useCreateElement) {
                    for (; t.lastChild;) t.removeChild(t.lastChild);
                    a.insertTreeBefore(t, e, null)
                } else v(t, e), l.precacheNode(o, t.firstChild)
            }
        };
        e.exports = L
    },
    "../node_modules/react-dom/lib/ReactMultiChild.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/reactProdInvariant.js"),
            a = o("../node_modules/react-dom/lib/ReactComponentEnvironment.js"),
            i = (o("../node_modules/react-dom/lib/ReactInstanceMap.js"), o("../node_modules/react-dom/lib/ReactInstrumentation.js"), o("../node_modules/react/lib/ReactCurrentOwner.js"), o("../node_modules/react-dom/lib/ReactReconciler.js")),
            r = o("../node_modules/react-dom/lib/ReactChildReconciler.js"),
            s = (o("../node_modules/fbjs/lib/emptyFunction.js"), o("../node_modules/react-dom/lib/flattenChildren.js"));
        o("../node_modules/fbjs/lib/invariant.js");

        function l(e, t) {
            return t && (e = e || []).push(t), e
        }

        function u(e, t) {
            a.processChildrenUpdates(e, t)
        }
        var c = {
            Mixin: {
                _reconcilerInstantiateChildren: function(e, t, o) {
                    return r.instantiateChildren(e, t, o)
                },
                _reconcilerUpdateChildren: function(e, t, o, n, a, i) {
                    var l;
                    return l = s(t, 0), r.updateChildren(e, l, o, n, a, this, this._hostContainerInfo, i, 0), l
                },
                mountChildren: function(e, t, o) {
                    var n = this._reconcilerInstantiateChildren(e, t, o);
                    this._renderedChildren = n;
                    var a = [],
                        r = 0;
                    for (var s in n)
                        if (n.hasOwnProperty(s)) {
                            var l = n[s];
                            0;
                            var u = i.mountComponent(l, t, this, this._hostContainerInfo, o, 0);
                            l._mountIndex = r++, a.push(u)
                        } return a
                },
                updateTextContent: function(e) {
                    var t, o = this._renderedChildren;
                    for (var a in r.unmountChildren(o, !1), o) o.hasOwnProperty(a) && n("118");
                    u(this, [(t = e, {
                        type: "TEXT_CONTENT",
                        content: t,
                        fromIndex: null,
                        fromNode: null,
                        toIndex: null,
                        afterNode: null
                    })])
                },
                updateMarkup: function(e) {
                    var t, o = this._renderedChildren;
                    for (var a in r.unmountChildren(o, !1), o) o.hasOwnProperty(a) && n("118");
                    u(this, [(t = e, {
                        type: "SET_MARKUP",
                        content: t,
                        fromIndex: null,
                        fromNode: null,
                        toIndex: null,
                        afterNode: null
                    })])
                },
                updateChildren: function(e, t, o) {
                    this._updateChildren(e, t, o)
                },
                _updateChildren: function(e, t, o) {
                    var n = this._renderedChildren,
                        a = {},
                        r = [],
                        s = this._reconcilerUpdateChildren(n, e, r, a, t, o);
                    if (s || n) {
                        var c, d = null,
                            p = 0,
                            m = 0,
                            h = 0,
                            f = null;
                        for (c in s)
                            if (s.hasOwnProperty(c)) {
                                var g = n && n[c],
                                    k = s[c];
                                g === k ? (d = l(d, this.moveChild(g, f, p, m)), m = Math.max(g._mountIndex, m), g._mountIndex = p) : (g && (m = Math.max(g._mountIndex, m)), d = l(d, this._mountChildAtIndex(k, r[h], f, p, t, o)), h++), p++, f = i.getHostNode(k)
                            } for (c in a) a.hasOwnProperty(c) && (d = l(d, this._unmountChild(n[c], a[c])));
                        d && u(this, d), this._renderedChildren = s
                    }
                },
                unmountChildren: function(e) {
                    var t = this._renderedChildren;
                    r.unmountChildren(t, e), this._renderedChildren = null
                },
                moveChild: function(e, t, o, n) {
                    if (e._mountIndex < n) return function(e, t, o) {
                        return {
                            type: "MOVE_EXISTING",
                            content: null,
                            fromIndex: e._mountIndex,
                            fromNode: i.getHostNode(e),
                            toIndex: o,
                            afterNode: t
                        }
                    }(e, t, o)
                },
                createChild: function(e, t, o) {
                    return function(e, t, o) {
                        return {
                            type: "INSERT_MARKUP",
                            content: e,
                            fromIndex: null,
                            fromNode: null,
                            toIndex: o,
                            afterNode: t
                        }
                    }(o, t, e._mountIndex)
                },
                removeChild: function(e, t) {
                    return function(e, t) {
                        return {
                            type: "REMOVE_NODE",
                            content: null,
                            fromIndex: e._mountIndex,
                            fromNode: t,
                            toIndex: null,
                            afterNode: null
                        }
                    }(e, t)
                },
                _mountChildAtIndex: function(e, t, o, n, a, i) {
                    return e._mountIndex = n, this.createChild(e, o, t)
                },
                _unmountChild: function(e, t) {
                    var o = this.removeChild(e, t);
                    return e._mountIndex = null, o
                }
            }
        };
        e.exports = c
    },
    "../node_modules/react-dom/lib/ReactNodeTypes.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/reactProdInvariant.js"),
            a = o("../node_modules/react/lib/React.js"),
            i = (o("../node_modules/fbjs/lib/invariant.js"), {
                HOST: 0,
                COMPOSITE: 1,
                EMPTY: 2,
                getType: function(e) {
                    return null === e || !1 === e ? i.EMPTY : a.isValidElement(e) ? "function" == typeof e.type ? i.COMPOSITE : i.HOST : void n("26", e)
                }
            });
        e.exports = i
    },
    "../node_modules/react-dom/lib/ReactOwner.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/reactProdInvariant.js");
        o("../node_modules/fbjs/lib/invariant.js");

        function a(e) {
            return !(!e || "function" != typeof e.attachRef || "function" != typeof e.detachRef)
        }
        var i = {
            addComponentAsRefTo: function(e, t, o) {
                a(o) || n("119"), o.attachRef(t, e)
            },
            removeComponentAsRefFrom: function(e, t, o) {
                a(o) || n("120");
                var i = o.getPublicInstance();
                i && i.refs[t] === e.getPublicInstance() && o.detachRef(t)
            }
        };
        e.exports = i
    },
    "../node_modules/react-dom/lib/ReactPropTypesSecret.js": function(e, t, o) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    "../node_modules/react-dom/lib/ReactReconcileTransaction.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/object-assign/index.js"),
            a = o("../node_modules/react-dom/lib/CallbackQueue.js"),
            i = o("../node_modules/react-dom/lib/PooledClass.js"),
            r = o("../node_modules/react-dom/lib/ReactBrowserEventEmitter.js"),
            s = o("../node_modules/react-dom/lib/ReactInputSelection.js"),
            l = (o("../node_modules/react-dom/lib/ReactInstrumentation.js"), o("../node_modules/react-dom/lib/Transaction.js")),
            u = o("../node_modules/react-dom/lib/ReactUpdateQueue.js"),
            c = [{
                initialize: s.getSelectionInformation,
                close: s.restoreSelection
            }, {
                initialize: function() {
                    var e = r.isEnabled();
                    return r.setEnabled(!1), e
                },
                close: function(e) {
                    r.setEnabled(e)
                }
            }, {
                initialize: function() {
                    this.reactMountReady.reset()
                },
                close: function() {
                    this.reactMountReady.notifyAll()
                }
            }];

        function d(e) {
            this.reinitializeTransaction(), this.renderToStaticMarkup = !1, this.reactMountReady = a.getPooled(null), this.useCreateElement = e
        }
        var p = {
            getTransactionWrappers: function() {
                return c
            },
            getReactMountReady: function() {
                return this.reactMountReady
            },
            getUpdateQueue: function() {
                return u
            },
            checkpoint: function() {
                return this.reactMountReady.checkpoint()
            },
            rollback: function(e) {
                this.reactMountReady.rollback(e)
            },
            destructor: function() {
                a.release(this.reactMountReady), this.reactMountReady = null
            }
        };
        n(d.prototype, l, p), i.addPoolingTo(d), e.exports = d
    },
    "../node_modules/react-dom/lib/ReactReconciler.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/ReactRef.js");
        o("../node_modules/react-dom/lib/ReactInstrumentation.js"), o("../node_modules/fbjs/lib/warning.js");

        function a() {
            n.attachRefs(this, this._currentElement)
        }
        var i = {
            mountComponent: function(e, t, o, n, i, r) {
                var s = e.mountComponent(t, o, n, i, r);
                return e._currentElement && null != e._currentElement.ref && t.getReactMountReady().enqueue(a, e), s
            },
            getHostNode: function(e) {
                return e.getHostNode()
            },
            unmountComponent: function(e, t) {
                n.detachRefs(e, e._currentElement), e.unmountComponent(t)
            },
            receiveComponent: function(e, t, o, i) {
                var r = e._currentElement;
                if (t !== r || i !== e._context) {
                    0;
                    var s = n.shouldUpdateRefs(r, t);
                    s && n.detachRefs(e, r), e.receiveComponent(t, o, i), s && e._currentElement && null != e._currentElement.ref && o.getReactMountReady().enqueue(a, e)
                }
            },
            performUpdateIfNecessary: function(e, t, o) {
                e._updateBatchNumber === o && e.performUpdateIfNecessary(t)
            }
        };
        e.exports = i
    },
    "../node_modules/react-dom/lib/ReactRef.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/ReactOwner.js"),
            a = {};
        a.attachRefs = function(e, t) {
            if (null !== t && "object" == typeof t) {
                var o = t.ref;
                null != o && function(e, t, o) {
                    "function" == typeof e ? e(t.getPublicInstance()) : n.addComponentAsRefTo(t, e, o)
                }(o, e, t._owner)
            }
        }, a.shouldUpdateRefs = function(e, t) {
            var o = null,
                n = null;
            null !== e && "object" == typeof e && (o = e.ref, n = e._owner);
            var a = null,
                i = null;
            return null !== t && "object" == typeof t && (a = t.ref, i = t._owner), o !== a || "string" == typeof a && i !== n
        }, a.detachRefs = function(e, t) {
            if (null !== t && "object" == typeof t) {
                var o = t.ref;
                null != o && function(e, t, o) {
                    "function" == typeof e ? e(null) : n.removeComponentAsRefFrom(t, e, o)
                }(o, e, t._owner)
            }
        }, e.exports = a
    },
    "../node_modules/react-dom/lib/ReactServerRenderingTransaction.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/object-assign/index.js"),
            a = o("../node_modules/react-dom/lib/PooledClass.js"),
            i = o("../node_modules/react-dom/lib/Transaction.js"),
            r = (o("../node_modules/react-dom/lib/ReactInstrumentation.js"), o("../node_modules/react-dom/lib/ReactServerUpdateQueue.js")),
            s = [];
        var l = {
            enqueue: function() {}
        };

        function u(e) {
            this.reinitializeTransaction(), this.renderToStaticMarkup = e, this.useCreateElement = !1, this.updateQueue = new r(this)
        }
        var c = {
            getTransactionWrappers: function() {
                return s
            },
            getReactMountReady: function() {
                return l
            },
            getUpdateQueue: function() {
                return this.updateQueue
            },
            destructor: function() {},
            checkpoint: function() {},
            rollback: function() {}
        };
        n(u.prototype, i, c), a.addPoolingTo(u), e.exports = u
    },
    "../node_modules/react-dom/lib/ReactServerUpdateQueue.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/ReactUpdateQueue.js");
        o("../node_modules/fbjs/lib/warning.js");
        var a = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.transaction = t
            }
            return e.prototype.isMounted = function(e) {
                return !1
            }, e.prototype.enqueueCallback = function(e, t, o) {
                this.transaction.isInTransaction() && n.enqueueCallback(e, t, o)
            }, e.prototype.enqueueForceUpdate = function(e) {
                this.transaction.isInTransaction() && n.enqueueForceUpdate(e)
            }, e.prototype.enqueueReplaceState = function(e, t) {
                this.transaction.isInTransaction() && n.enqueueReplaceState(e, t)
            }, e.prototype.enqueueSetState = function(e, t) {
                this.transaction.isInTransaction() && n.enqueueSetState(e, t)
            }, e
        }();
        e.exports = a
    },
    "../node_modules/react-dom/lib/ReactUpdateQueue.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/reactProdInvariant.js"),
            a = (o("../node_modules/react/lib/ReactCurrentOwner.js"), o("../node_modules/react-dom/lib/ReactInstanceMap.js")),
            i = (o("../node_modules/react-dom/lib/ReactInstrumentation.js"), o("../node_modules/react-dom/lib/ReactUpdates.js"));
        o("../node_modules/fbjs/lib/invariant.js"), o("../node_modules/fbjs/lib/warning.js");

        function r(e) {
            i.enqueueUpdate(e)
        }

        function s(e, t) {
            var o = a.get(e);
            return o || null
        }
        var l = {
            isMounted: function(e) {
                var t = a.get(e);
                return !!t && !!t._renderedComponent
            },
            enqueueCallback: function(e, t, o) {
                l.validateCallback(t, o);
                var n = s(e);
                if (!n) return null;
                n._pendingCallbacks ? n._pendingCallbacks.push(t) : n._pendingCallbacks = [t], r(n)
            },
            enqueueCallbackInternal: function(e, t) {
                e._pendingCallbacks ? e._pendingCallbacks.push(t) : e._pendingCallbacks = [t], r(e)
            },
            enqueueForceUpdate: function(e) {
                var t = s(e);
                t && (t._pendingForceUpdate = !0, r(t))
            },
            enqueueReplaceState: function(e, t, o) {
                var n = s(e);
                n && (n._pendingStateQueue = [t], n._pendingReplaceState = !0, null != o && (l.validateCallback(o, "replaceState"), n._pendingCallbacks ? n._pendingCallbacks.push(o) : n._pendingCallbacks = [o]), r(n))
            },
            enqueueSetState: function(e, t) {
                var o = s(e);
                o && ((o._pendingStateQueue || (o._pendingStateQueue = [])).push(t), r(o))
            },
            enqueueElementInternal: function(e, t, o) {
                e._pendingElement = t, e._context = o, r(e)
            },
            validateCallback: function(e, t) {
                e && "function" != typeof e && n("122", t, function(e) {
                    var t = typeof e;
                    if ("object" !== t) return t;
                    var o = e.constructor && e.constructor.name || t,
                        n = Object.keys(e);
                    return n.length > 0 && n.length < 20 ? o + " (keys: " + n.join(", ") + ")" : o
                }(e))
            }
        };
        e.exports = l
    },
    "../node_modules/react-dom/lib/ReactUpdates.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/reactProdInvariant.js"),
            a = o("../node_modules/object-assign/index.js"),
            i = o("../node_modules/react-dom/lib/CallbackQueue.js"),
            r = o("../node_modules/react-dom/lib/PooledClass.js"),
            s = o("../node_modules/react-dom/lib/ReactFeatureFlags.js"),
            l = o("../node_modules/react-dom/lib/ReactReconciler.js"),
            u = o("../node_modules/react-dom/lib/Transaction.js"),
            c = o("../node_modules/fbjs/lib/invariant.js"),
            d = [],
            p = 0,
            m = i.getPooled(),
            h = !1,
            f = null;

        function g() {
            w.ReactReconcileTransaction && f || n("123")
        }
        var k = [{
            initialize: function() {
                this.dirtyComponentsLength = d.length
            },
            close: function() {
                this.dirtyComponentsLength !== d.length ? (d.splice(0, this.dirtyComponentsLength), j()) : d.length = 0
            }
        }, {
            initialize: function() {
                this.callbackQueue.reset()
            },
            close: function() {
                this.callbackQueue.notifyAll()
            }
        }];

        function b() {
            this.reinitializeTransaction(), this.dirtyComponentsLength = null, this.callbackQueue = i.getPooled(), this.reconcileTransaction = w.ReactReconcileTransaction.getPooled(!0)
        }

        function v(e, t) {
            return e._mountOrder - t._mountOrder
        }

        function y(e) {
            var t = e.dirtyComponentsLength;
            t !== d.length && n("124", t, d.length), d.sort(v), p++;
            for (var o = 0; o < t; o++) {
                var a, i = d[o],
                    r = i._pendingCallbacks;
                if (i._pendingCallbacks = null, s.logTopLevelRenders) {
                    var u = i;
                    i._currentElement.type.isReactTopLevelWrapper && (u = i._renderedComponent), a = "React update: " + u.getName(), console.time(a)
                }
                if (l.performUpdateIfNecessary(i, e.reconcileTransaction, p), a && console.timeEnd(a), r)
                    for (var c = 0; c < r.length; c++) e.callbackQueue.enqueue(r[c], i.getPublicInstance())
            }
        }
        a(b.prototype, u, {
            getTransactionWrappers: function() {
                return k
            },
            destructor: function() {
                this.dirtyComponentsLength = null, i.release(this.callbackQueue), this.callbackQueue = null, w.ReactReconcileTransaction.release(this.reconcileTransaction), this.reconcileTransaction = null
            },
            perform: function(e, t, o) {
                return u.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, e, t, o)
            }
        }), r.addPoolingTo(b);
        var j = function() {
            for (; d.length || h;) {
                if (d.length) {
                    var e = b.getPooled();
                    e.perform(y, null, e), b.release(e)
                }
                if (h) {
                    h = !1;
                    var t = m;
                    m = i.getPooled(), t.notifyAll(), i.release(t)
                }
            }
        };
        var w = {
            ReactReconcileTransaction: null,
            batchedUpdates: function(e, t, o, n, a, i) {
                return g(), f.batchedUpdates(e, t, o, n, a, i)
            },
            enqueueUpdate: function e(t) {
                g(), f.isBatchingUpdates ? (d.push(t), null == t._updateBatchNumber && (t._updateBatchNumber = p + 1)) : f.batchedUpdates(e, t)
            },
            flushBatchedUpdates: j,
            injection: {
                injectReconcileTransaction: function(e) {
                    e || n("126"), w.ReactReconcileTransaction = e
                },
                injectBatchingStrategy: function(e) {
                    e || n("127"), "function" != typeof e.batchedUpdates && n("128"), "boolean" != typeof e.isBatchingUpdates && n("129"), f = e
                }
            },
            asap: function(e, t) {
                c(f.isBatchingUpdates, "ReactUpdates.asap: Can't enqueue an asap callback in a context whereupdates are not being batched."), m.enqueue(e, t), h = !0
            }
        };
        e.exports = w
    },
    "../node_modules/react-dom/lib/ReactVersion.js": function(e, t, o) {
        "use strict";
        e.exports = "15.6.2"
    },
    "../node_modules/react-dom/lib/SVGDOMPropertyConfig.js": function(e, t, o) {
        "use strict";
        var n = "http://www.w3.org/1999/xlink",
            a = "http://www.w3.org/XML/1998/namespace",
            i = {
                accentHeight: "accent-height",
                accumulate: 0,
                additive: 0,
                alignmentBaseline: "alignment-baseline",
                allowReorder: "allowReorder",
                alphabetic: 0,
                amplitude: 0,
                arabicForm: "arabic-form",
                ascent: 0,
                attributeName: "attributeName",
                attributeType: "attributeType",
                autoReverse: "autoReverse",
                azimuth: 0,
                baseFrequency: "baseFrequency",
                baseProfile: "baseProfile",
                baselineShift: "baseline-shift",
                bbox: 0,
                begin: 0,
                bias: 0,
                by: 0,
                calcMode: "calcMode",
                capHeight: "cap-height",
                clip: 0,
                clipPath: "clip-path",
                clipRule: "clip-rule",
                clipPathUnits: "clipPathUnits",
                colorInterpolation: "color-interpolation",
                colorInterpolationFilters: "color-interpolation-filters",
                colorProfile: "color-profile",
                colorRendering: "color-rendering",
                contentScriptType: "contentScriptType",
                contentStyleType: "contentStyleType",
                cursor: 0,
                cx: 0,
                cy: 0,
                d: 0,
                decelerate: 0,
                descent: 0,
                diffuseConstant: "diffuseConstant",
                direction: 0,
                display: 0,
                divisor: 0,
                dominantBaseline: "dominant-baseline",
                dur: 0,
                dx: 0,
                dy: 0,
                edgeMode: "edgeMode",
                elevation: 0,
                enableBackground: "enable-background",
                end: 0,
                exponent: 0,
                externalResourcesRequired: "externalResourcesRequired",
                fill: 0,
                fillOpacity: "fill-opacity",
                fillRule: "fill-rule",
                filter: 0,
                filterRes: "filterRes",
                filterUnits: "filterUnits",
                floodColor: "flood-color",
                floodOpacity: "flood-opacity",
                focusable: 0,
                fontFamily: "font-family",
                fontSize: "font-size",
                fontSizeAdjust: "font-size-adjust",
                fontStretch: "font-stretch",
                fontStyle: "font-style",
                fontVariant: "font-variant",
                fontWeight: "font-weight",
                format: 0,
                from: 0,
                fx: 0,
                fy: 0,
                g1: 0,
                g2: 0,
                glyphName: "glyph-name",
                glyphOrientationHorizontal: "glyph-orientation-horizontal",
                glyphOrientationVertical: "glyph-orientation-vertical",
                glyphRef: "glyphRef",
                gradientTransform: "gradientTransform",
                gradientUnits: "gradientUnits",
                hanging: 0,
                horizAdvX: "horiz-adv-x",
                horizOriginX: "horiz-origin-x",
                ideographic: 0,
                imageRendering: "image-rendering",
                in: 0,
                in2: 0,
                intercept: 0,
                k: 0,
                k1: 0,
                k2: 0,
                k3: 0,
                k4: 0,
                kernelMatrix: "kernelMatrix",
                kernelUnitLength: "kernelUnitLength",
                kerning: 0,
                keyPoints: "keyPoints",
                keySplines: "keySplines",
                keyTimes: "keyTimes",
                lengthAdjust: "lengthAdjust",
                letterSpacing: "letter-spacing",
                lightingColor: "lighting-color",
                limitingConeAngle: "limitingConeAngle",
                local: 0,
                markerEnd: "marker-end",
                markerMid: "marker-mid",
                markerStart: "marker-start",
                markerHeight: "markerHeight",
                markerUnits: "markerUnits",
                markerWidth: "markerWidth",
                mask: 0,
                maskContentUnits: "maskContentUnits",
                maskUnits: "maskUnits",
                mathematical: 0,
                mode: 0,
                numOctaves: "numOctaves",
                offset: 0,
                opacity: 0,
                operator: 0,
                order: 0,
                orient: 0,
                orientation: 0,
                origin: 0,
                overflow: 0,
                overlinePosition: "overline-position",
                overlineThickness: "overline-thickness",
                paintOrder: "paint-order",
                panose1: "panose-1",
                pathLength: "pathLength",
                patternContentUnits: "patternContentUnits",
                patternTransform: "patternTransform",
                patternUnits: "patternUnits",
                pointerEvents: "pointer-events",
                points: 0,
                pointsAtX: "pointsAtX",
                pointsAtY: "pointsAtY",
                pointsAtZ: "pointsAtZ",
                preserveAlpha: "preserveAlpha",
                preserveAspectRatio: "preserveAspectRatio",
                primitiveUnits: "primitiveUnits",
                r: 0,
                radius: 0,
                refX: "refX",
                refY: "refY",
                renderingIntent: "rendering-intent",
                repeatCount: "repeatCount",
                repeatDur: "repeatDur",
                requiredExtensions: "requiredExtensions",
                requiredFeatures: "requiredFeatures",
                restart: 0,
                result: 0,
                rotate: 0,
                rx: 0,
                ry: 0,
                scale: 0,
                seed: 0,
                shapeRendering: "shape-rendering",
                slope: 0,
                spacing: 0,
                specularConstant: "specularConstant",
                specularExponent: "specularExponent",
                speed: 0,
                spreadMethod: "spreadMethod",
                startOffset: "startOffset",
                stdDeviation: "stdDeviation",
                stemh: 0,
                stemv: 0,
                stitchTiles: "stitchTiles",
                stopColor: "stop-color",
                stopOpacity: "stop-opacity",
                strikethroughPosition: "strikethrough-position",
                strikethroughThickness: "strikethrough-thickness",
                string: 0,
                stroke: 0,
                strokeDasharray: "stroke-dasharray",
                strokeDashoffset: "stroke-dashoffset",
                strokeLinecap: "stroke-linecap",
                strokeLinejoin: "stroke-linejoin",
                strokeMiterlimit: "stroke-miterlimit",
                strokeOpacity: "stroke-opacity",
                strokeWidth: "stroke-width",
                surfaceScale: "surfaceScale",
                systemLanguage: "systemLanguage",
                tableValues: "tableValues",
                targetX: "targetX",
                targetY: "targetY",
                textAnchor: "text-anchor",
                textDecoration: "text-decoration",
                textRendering: "text-rendering",
                textLength: "textLength",
                to: 0,
                transform: 0,
                u1: 0,
                u2: 0,
                underlinePosition: "underline-position",
                underlineThickness: "underline-thickness",
                unicode: 0,
                unicodeBidi: "unicode-bidi",
                unicodeRange: "unicode-range",
                unitsPerEm: "units-per-em",
                vAlphabetic: "v-alphabetic",
                vHanging: "v-hanging",
                vIdeographic: "v-ideographic",
                vMathematical: "v-mathematical",
                values: 0,
                vectorEffect: "vector-effect",
                version: 0,
                vertAdvY: "vert-adv-y",
                vertOriginX: "vert-origin-x",
                vertOriginY: "vert-origin-y",
                viewBox: "viewBox",
                viewTarget: "viewTarget",
                visibility: 0,
                widths: 0,
                wordSpacing: "word-spacing",
                writingMode: "writing-mode",
                x: 0,
                xHeight: "x-height",
                x1: 0,
                x2: 0,
                xChannelSelector: "xChannelSelector",
                xlinkActuate: "xlink:actuate",
                xlinkArcrole: "xlink:arcrole",
                xlinkHref: "xlink:href",
                xlinkRole: "xlink:role",
                xlinkShow: "xlink:show",
                xlinkTitle: "xlink:title",
                xlinkType: "xlink:type",
                xmlBase: "xml:base",
                xmlns: 0,
                xmlnsXlink: "xmlns:xlink",
                xmlLang: "xml:lang",
                xmlSpace: "xml:space",
                y: 0,
                y1: 0,
                y2: 0,
                yChannelSelector: "yChannelSelector",
                z: 0,
                zoomAndPan: "zoomAndPan"
            },
            r = {
                Properties: {},
                DOMAttributeNamespaces: {
                    xlinkActuate: n,
                    xlinkArcrole: n,
                    xlinkHref: n,
                    xlinkRole: n,
                    xlinkShow: n,
                    xlinkTitle: n,
                    xlinkType: n,
                    xmlBase: a,
                    xmlLang: a,
                    xmlSpace: a
                },
                DOMAttributeNames: {}
            };
        Object.keys(i).forEach(function(e) {
            r.Properties[e] = 0, i[e] && (r.DOMAttributeNames[e] = i[e])
        }), e.exports = r
    },
    "../node_modules/react-dom/lib/SelectEventPlugin.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/EventPropagators.js"),
            a = o("../node_modules/fbjs/lib/ExecutionEnvironment.js"),
            i = o("../node_modules/react-dom/lib/ReactDOMComponentTree.js"),
            r = o("../node_modules/react-dom/lib/ReactInputSelection.js"),
            s = o("../node_modules/react-dom/lib/SyntheticEvent.js"),
            l = o("../node_modules/fbjs/lib/getActiveElement.js"),
            u = o("../node_modules/react-dom/lib/isTextInputElement.js"),
            c = o("../node_modules/fbjs/lib/shallowEqual.js"),
            d = a.canUseDOM && "documentMode" in document && document.documentMode <= 11,
            p = {
                select: {
                    phasedRegistrationNames: {
                        bubbled: "onSelect",
                        captured: "onSelectCapture"
                    },
                    dependencies: ["topBlur", "topContextMenu", "topFocus", "topKeyDown", "topKeyUp", "topMouseDown", "topMouseUp", "topSelectionChange"]
                }
            },
            m = null,
            h = null,
            f = null,
            g = !1,
            k = !1;

        function b(e, t) {
            if (g || null == m || m !== l()) return null;
            var o = function(e) {
                if ("selectionStart" in e && r.hasSelectionCapabilities(e)) return {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
                if (window.getSelection) {
                    var t = window.getSelection();
                    return {
                        anchorNode: t.anchorNode,
                        anchorOffset: t.anchorOffset,
                        focusNode: t.focusNode,
                        focusOffset: t.focusOffset
                    }
                }
                if (document.selection) {
                    var o = document.selection.createRange();
                    return {
                        parentElement: o.parentElement(),
                        text: o.text,
                        top: o.boundingTop,
                        left: o.boundingLeft
                    }
                }
            }(m);
            if (!f || !c(f, o)) {
                f = o;
                var a = s.getPooled(p.select, h, e, t);
                return a.type = "select", a.target = m, n.accumulateTwoPhaseDispatches(a), a
            }
            return null
        }
        var v = {
            eventTypes: p,
            extractEvents: function(e, t, o, n) {
                if (!k) return null;
                var a = t ? i.getNodeFromInstance(t) : window;
                switch (e) {
                    case "topFocus":
                        (u(a) || "true" === a.contentEditable) && (m = a, h = t, f = null);
                        break;
                    case "topBlur":
                        m = null, h = null, f = null;
                        break;
                    case "topMouseDown":
                        g = !0;
                        break;
                    case "topContextMenu":
                    case "topMouseUp":
                        return g = !1, b(o, n);
                    case "topSelectionChange":
                        if (d) break;
                    case "topKeyDown":
                    case "topKeyUp":
                        return b(o, n)
                }
                return null
            },
            didPutListener: function(e, t, o) {
                "onSelect" === t && (k = !0)
            }
        };
        e.exports = v
    },
    "../node_modules/react-dom/lib/SimpleEventPlugin.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/reactProdInvariant.js"),
            a = o("../node_modules/fbjs/lib/EventListener.js"),
            i = o("../node_modules/react-dom/lib/EventPropagators.js"),
            r = o("../node_modules/react-dom/lib/ReactDOMComponentTree.js"),
            s = o("../node_modules/react-dom/lib/SyntheticAnimationEvent.js"),
            l = o("../node_modules/react-dom/lib/SyntheticClipboardEvent.js"),
            u = o("../node_modules/react-dom/lib/SyntheticEvent.js"),
            c = o("../node_modules/react-dom/lib/SyntheticFocusEvent.js"),
            d = o("../node_modules/react-dom/lib/SyntheticKeyboardEvent.js"),
            p = o("../node_modules/react-dom/lib/SyntheticMouseEvent.js"),
            m = o("../node_modules/react-dom/lib/SyntheticDragEvent.js"),
            h = o("../node_modules/react-dom/lib/SyntheticTouchEvent.js"),
            f = o("../node_modules/react-dom/lib/SyntheticTransitionEvent.js"),
            g = o("../node_modules/react-dom/lib/SyntheticUIEvent.js"),
            k = o("../node_modules/react-dom/lib/SyntheticWheelEvent.js"),
            b = o("../node_modules/fbjs/lib/emptyFunction.js"),
            v = o("../node_modules/react-dom/lib/getEventCharCode.js"),
            y = (o("../node_modules/fbjs/lib/invariant.js"), {}),
            j = {};
        ["abort", "animationEnd", "animationIteration", "animationStart", "blur", "canPlay", "canPlayThrough", "click", "contextMenu", "copy", "cut", "doubleClick", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "focus", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "progress", "rateChange", "reset", "scroll", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchMove", "touchStart", "transitionEnd", "volumeChange", "waiting", "wheel"].forEach(function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                o = "on" + t,
                n = "top" + t,
                a = {
                    phasedRegistrationNames: {
                        bubbled: o,
                        captured: o + "Capture"
                    },
                    dependencies: [n]
                };
            y[e] = a, j[n] = a
        });
        var w = {};

        function _(e) {
            return "." + e._rootNodeID
        }

        function O(e) {
            return "button" === e || "input" === e || "select" === e || "textarea" === e
        }
        var C = {
            eventTypes: y,
            extractEvents: function(e, t, o, a) {
                var r, b = j[e];
                if (!b) return null;
                switch (e) {
                    case "topAbort":
                    case "topCanPlay":
                    case "topCanPlayThrough":
                    case "topDurationChange":
                    case "topEmptied":
                    case "topEncrypted":
                    case "topEnded":
                    case "topError":
                    case "topInput":
                    case "topInvalid":
                    case "topLoad":
                    case "topLoadedData":
                    case "topLoadedMetadata":
                    case "topLoadStart":
                    case "topPause":
                    case "topPlay":
                    case "topPlaying":
                    case "topProgress":
                    case "topRateChange":
                    case "topReset":
                    case "topSeeked":
                    case "topSeeking":
                    case "topStalled":
                    case "topSubmit":
                    case "topSuspend":
                    case "topTimeUpdate":
                    case "topVolumeChange":
                    case "topWaiting":
                        r = u;
                        break;
                    case "topKeyPress":
                        if (0 === v(o)) return null;
                    case "topKeyDown":
                    case "topKeyUp":
                        r = d;
                        break;
                    case "topBlur":
                    case "topFocus":
                        r = c;
                        break;
                    case "topClick":
                        if (2 === o.button) return null;
                    case "topDoubleClick":
                    case "topMouseDown":
                    case "topMouseMove":
                    case "topMouseUp":
                    case "topMouseOut":
                    case "topMouseOver":
                    case "topContextMenu":
                        r = p;
                        break;
                    case "topDrag":
                    case "topDragEnd":
                    case "topDragEnter":
                    case "topDragExit":
                    case "topDragLeave":
                    case "topDragOver":
                    case "topDragStart":
                    case "topDrop":
                        r = m;
                        break;
                    case "topTouchCancel":
                    case "topTouchEnd":
                    case "topTouchMove":
                    case "topTouchStart":
                        r = h;
                        break;
                    case "topAnimationEnd":
                    case "topAnimationIteration":
                    case "topAnimationStart":
                        r = s;
                        break;
                    case "topTransitionEnd":
                        r = f;
                        break;
                    case "topScroll":
                        r = g;
                        break;
                    case "topWheel":
                        r = k;
                        break;
                    case "topCopy":
                    case "topCut":
                    case "topPaste":
                        r = l
                }
                r || n("86", e);
                var y = r.getPooled(b, t, o, a);
                return i.accumulateTwoPhaseDispatches(y), y
            },
            didPutListener: function(e, t, o) {
                if ("onClick" === t && !O(e._tag)) {
                    var n = _(e),
                        i = r.getNodeFromInstance(e);
                    w[n] || (w[n] = a.listen(i, "click", b))
                }
            },
            willDeleteListener: function(e, t) {
                if ("onClick" === t && !O(e._tag)) {
                    var o = _(e);
                    w[o].remove(), delete w[o]
                }
            }
        };
        e.exports = C
    },
    "../node_modules/react-dom/lib/SyntheticAnimationEvent.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/SyntheticEvent.js");

        function a(e, t, o, a) {
            return n.call(this, e, t, o, a)
        }
        n.augmentClass(a, {
            animationName: null,
            elapsedTime: null,
            pseudoElement: null
        }), e.exports = a
    },
    "../node_modules/react-dom/lib/SyntheticClipboardEvent.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/SyntheticEvent.js"),
            a = {
                clipboardData: function(e) {
                    return "clipboardData" in e ? e.clipboardData : window.clipboardData
                }
            };

        function i(e, t, o, a) {
            return n.call(this, e, t, o, a)
        }
        n.augmentClass(i, a), e.exports = i
    },
    "../node_modules/react-dom/lib/SyntheticCompositionEvent.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/SyntheticEvent.js");

        function a(e, t, o, a) {
            return n.call(this, e, t, o, a)
        }
        n.augmentClass(a, {
            data: null
        }), e.exports = a
    },
    "../node_modules/react-dom/lib/SyntheticDragEvent.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/SyntheticMouseEvent.js");

        function a(e, t, o, a) {
            return n.call(this, e, t, o, a)
        }
        n.augmentClass(a, {
            dataTransfer: null
        }), e.exports = a
    },
    "../node_modules/react-dom/lib/SyntheticEvent.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/object-assign/index.js"),
            a = o("../node_modules/react-dom/lib/PooledClass.js"),
            i = o("../node_modules/fbjs/lib/emptyFunction.js"),
            r = (o("../node_modules/fbjs/lib/warning.js"), ["dispatchConfig", "_targetInst", "nativeEvent", "isDefaultPrevented", "isPropagationStopped", "_dispatchListeners", "_dispatchInstances"]),
            s = {
                type: null,
                target: null,
                currentTarget: i.thatReturnsNull,
                eventPhase: null,
                bubbles: null,
                cancelable: null,
                timeStamp: function(e) {
                    return e.timeStamp || Date.now()
                },
                defaultPrevented: null,
                isTrusted: null
            };

        function l(e, t, o, n) {
            this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = o;
            var a = this.constructor.Interface;
            for (var r in a)
                if (a.hasOwnProperty(r)) {
                    0;
                    var s = a[r];
                    s ? this[r] = s(o) : "target" === r ? this.target = n : this[r] = o[r]
                } var l = null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue;
            return this.isDefaultPrevented = l ? i.thatReturnsTrue : i.thatReturnsFalse, this.isPropagationStopped = i.thatReturnsFalse, this
        }
        n(l.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = i.thatReturnsTrue)
            },
            stopPropagation: function() {
                var e = this.nativeEvent;
                e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = i.thatReturnsTrue)
            },
            persist: function() {
                this.isPersistent = i.thatReturnsTrue
            },
            isPersistent: i.thatReturnsFalse,
            destructor: function() {
                var e = this.constructor.Interface;
                for (var t in e) this[t] = null;
                for (var o = 0; o < r.length; o++) this[r[o]] = null
            }
        }), l.Interface = s, l.augmentClass = function(e, t) {
            var o = function() {};
            o.prototype = this.prototype;
            var i = new o;
            n(i, e.prototype), e.prototype = i, e.prototype.constructor = e, e.Interface = n({}, this.Interface, t), e.augmentClass = this.augmentClass, a.addPoolingTo(e, a.fourArgumentPooler)
        }, a.addPoolingTo(l, a.fourArgumentPooler), e.exports = l
    },
    "../node_modules/react-dom/lib/SyntheticFocusEvent.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/SyntheticUIEvent.js");

        function a(e, t, o, a) {
            return n.call(this, e, t, o, a)
        }
        n.augmentClass(a, {
            relatedTarget: null
        }), e.exports = a
    },
    "../node_modules/react-dom/lib/SyntheticInputEvent.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/SyntheticEvent.js");

        function a(e, t, o, a) {
            return n.call(this, e, t, o, a)
        }
        n.augmentClass(a, {
            data: null
        }), e.exports = a
    },
    "../node_modules/react-dom/lib/SyntheticKeyboardEvent.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/SyntheticUIEvent.js"),
            a = o("../node_modules/react-dom/lib/getEventCharCode.js"),
            i = {
                key: o("../node_modules/react-dom/lib/getEventKey.js"),
                location: null,
                ctrlKey: null,
                shiftKey: null,
                altKey: null,
                metaKey: null,
                repeat: null,
                locale: null,
                getModifierState: o("../node_modules/react-dom/lib/getEventModifierState.js"),
                charCode: function(e) {
                    return "keypress" === e.type ? a(e) : 0
                },
                keyCode: function(e) {
                    return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                },
                which: function(e) {
                    return "keypress" === e.type ? a(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                }
            };

        function r(e, t, o, a) {
            return n.call(this, e, t, o, a)
        }
        n.augmentClass(r, i), e.exports = r
    },
    "../node_modules/react-dom/lib/SyntheticMouseEvent.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/SyntheticUIEvent.js"),
            a = o("../node_modules/react-dom/lib/ViewportMetrics.js"),
            i = {
                screenX: null,
                screenY: null,
                clientX: null,
                clientY: null,
                ctrlKey: null,
                shiftKey: null,
                altKey: null,
                metaKey: null,
                getModifierState: o("../node_modules/react-dom/lib/getEventModifierState.js"),
                button: function(e) {
                    var t = e.button;
                    return "which" in e ? t : 2 === t ? 2 : 4 === t ? 1 : 0
                },
                buttons: null,
                relatedTarget: function(e) {
                    return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
                },
                pageX: function(e) {
                    return "pageX" in e ? e.pageX : e.clientX + a.currentScrollLeft
                },
                pageY: function(e) {
                    return "pageY" in e ? e.pageY : e.clientY + a.currentScrollTop
                }
            };

        function r(e, t, o, a) {
            return n.call(this, e, t, o, a)
        }
        n.augmentClass(r, i), e.exports = r
    },
    "../node_modules/react-dom/lib/SyntheticTouchEvent.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/SyntheticUIEvent.js"),
            a = {
                touches: null,
                targetTouches: null,
                changedTouches: null,
                altKey: null,
                metaKey: null,
                ctrlKey: null,
                shiftKey: null,
                getModifierState: o("../node_modules/react-dom/lib/getEventModifierState.js")
            };

        function i(e, t, o, a) {
            return n.call(this, e, t, o, a)
        }
        n.augmentClass(i, a), e.exports = i
    },
    "../node_modules/react-dom/lib/SyntheticTransitionEvent.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/SyntheticEvent.js");

        function a(e, t, o, a) {
            return n.call(this, e, t, o, a)
        }
        n.augmentClass(a, {
            propertyName: null,
            elapsedTime: null,
            pseudoElement: null
        }), e.exports = a
    },
    "../node_modules/react-dom/lib/SyntheticUIEvent.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/SyntheticEvent.js"),
            a = o("../node_modules/react-dom/lib/getEventTarget.js"),
            i = {
                view: function(e) {
                    if (e.view) return e.view;
                    var t = a(e);
                    if (t.window === t) return t;
                    var o = t.ownerDocument;
                    return o ? o.defaultView || o.parentWindow : window
                },
                detail: function(e) {
                    return e.detail || 0
                }
            };

        function r(e, t, o, a) {
            return n.call(this, e, t, o, a)
        }
        n.augmentClass(r, i), e.exports = r
    },
    "../node_modules/react-dom/lib/SyntheticWheelEvent.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/SyntheticMouseEvent.js");

        function a(e, t, o, a) {
            return n.call(this, e, t, o, a)
        }
        n.augmentClass(a, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: null,
            deltaMode: null
        }), e.exports = a
    },
    "../node_modules/react-dom/lib/Transaction.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/reactProdInvariant.js"),
            a = (o("../node_modules/fbjs/lib/invariant.js"), {}),
            i = {
                reinitializeTransaction: function() {
                    this.transactionWrappers = this.getTransactionWrappers(), this.wrapperInitData ? this.wrapperInitData.length = 0 : this.wrapperInitData = [], this._isInTransaction = !1
                },
                _isInTransaction: !1,
                getTransactionWrappers: null,
                isInTransaction: function() {
                    return !!this._isInTransaction
                },
                perform: function(e, t, o, a, i, r, s, l) {
                    var u, c;
                    this.isInTransaction() && n("27");
                    try {
                        this._isInTransaction = !0, u = !0, this.initializeAll(0), c = e.call(t, o, a, i, r, s, l), u = !1
                    } finally {
                        try {
                            if (u) try {
                                this.closeAll(0)
                            } catch (e) {} else this.closeAll(0)
                        } finally {
                            this._isInTransaction = !1
                        }
                    }
                    return c
                },
                initializeAll: function(e) {
                    for (var t = this.transactionWrappers, o = e; o < t.length; o++) {
                        var n = t[o];
                        try {
                            this.wrapperInitData[o] = a, this.wrapperInitData[o] = n.initialize ? n.initialize.call(this) : null
                        } finally {
                            if (this.wrapperInitData[o] === a) try {
                                this.initializeAll(o + 1)
                            } catch (e) {}
                        }
                    }
                },
                closeAll: function(e) {
                    this.isInTransaction() || n("28");
                    for (var t = this.transactionWrappers, o = e; o < t.length; o++) {
                        var i, r = t[o],
                            s = this.wrapperInitData[o];
                        try {
                            i = !0, s !== a && r.close && r.close.call(this, s), i = !1
                        } finally {
                            if (i) try {
                                this.closeAll(o + 1)
                            } catch (e) {}
                        }
                    }
                    this.wrapperInitData.length = 0
                }
            };
        e.exports = i
    },
    "../node_modules/react-dom/lib/ViewportMetrics.js": function(e, t, o) {
        "use strict";
        var n = {
            currentScrollLeft: 0,
            currentScrollTop: 0,
            refreshScrollValues: function(e) {
                n.currentScrollLeft = e.x, n.currentScrollTop = e.y
            }
        };
        e.exports = n
    },
    "../node_modules/react-dom/lib/accumulateInto.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/reactProdInvariant.js");
        o("../node_modules/fbjs/lib/invariant.js");
        e.exports = function(e, t) {
            return null == t && n("30"), null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t]
        }
    },
    "../node_modules/react-dom/lib/adler32.js": function(e, t, o) {
        "use strict";
        var n = 65521;
        e.exports = function(e) {
            for (var t = 1, o = 0, a = 0, i = e.length, r = -4 & i; a < r;) {
                for (var s = Math.min(a + 4096, r); a < s; a += 4) o += (t += e.charCodeAt(a)) + (t += e.charCodeAt(a + 1)) + (t += e.charCodeAt(a + 2)) + (t += e.charCodeAt(a + 3));
                t %= n, o %= n
            }
            for (; a < i; a++) o += t += e.charCodeAt(a);
            return (t %= n) | (o %= n) << 16
        }
    },
    "../node_modules/react-dom/lib/createMicrosoftUnsafeLocalFunction.js": function(e, t, o) {
        "use strict";
        e.exports = function(e) {
            return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(t, o, n, a) {
                MSApp.execUnsafeLocalFunction(function() {
                    return e(t, o, n, a)
                })
            } : e
        }
    },
    "../node_modules/react-dom/lib/dangerousStyleValue.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/CSSProperty.js"),
            a = (o("../node_modules/fbjs/lib/warning.js"), n.isUnitlessNumber);
        e.exports = function(e, t, o, n) {
            if (null == t || "boolean" == typeof t || "" === t) return "";
            var i = isNaN(t);
            return n || i || 0 === t || a.hasOwnProperty(e) && a[e] ? "" + t : ("string" == typeof t && (t = t.trim()), t + "px")
        }
    },
    "../node_modules/react-dom/lib/escapeTextContentForBrowser.js": function(e, t, o) {
        "use strict";
        var n = /["'&<>]/;
        e.exports = function(e) {
            return "boolean" == typeof e || "number" == typeof e ? "" + e : function(e) {
                var t, o = "" + e,
                    a = n.exec(o);
                if (!a) return o;
                var i = "",
                    r = 0,
                    s = 0;
                for (r = a.index; r < o.length; r++) {
                    switch (o.charCodeAt(r)) {
                        case 34:
                            t = "&quot;";
                            break;
                        case 38:
                            t = "&amp;";
                            break;
                        case 39:
                            t = "&#x27;";
                            break;
                        case 60:
                            t = "&lt;";
                            break;
                        case 62:
                            t = "&gt;";
                            break;
                        default:
                            continue
                    }
                    s !== r && (i += o.substring(s, r)), s = r + 1, i += t
                }
                return s !== r ? i + o.substring(s, r) : i
            }(e)
        }
    },
    "../node_modules/react-dom/lib/findDOMNode.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/reactProdInvariant.js"),
            a = (o("../node_modules/react/lib/ReactCurrentOwner.js"), o("../node_modules/react-dom/lib/ReactDOMComponentTree.js")),
            i = o("../node_modules/react-dom/lib/ReactInstanceMap.js"),
            r = o("../node_modules/react-dom/lib/getHostComponentFromComposite.js");
        o("../node_modules/fbjs/lib/invariant.js"), o("../node_modules/fbjs/lib/warning.js");
        e.exports = function(e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = i.get(e);
            if (t) return (t = r(t)) ? a.getNodeFromInstance(t) : null;
            "function" == typeof e.render ? n("44") : n("45", Object.keys(e))
        }
    },
    "../node_modules/react-dom/lib/flattenChildren.js": function(e, t, o) {
        "use strict";
        (function(t) {
            o("../node_modules/react-dom/lib/KeyEscapeUtils.js");
            var n = o("../node_modules/react-dom/lib/traverseAllChildren.js");
            o("../node_modules/fbjs/lib/warning.js");

            function a(e, t, o, n) {
                if (e && "object" == typeof e) {
                    var a = e;
                    0, void 0 === a[o] && null != t && (a[o] = t)
                }
            }
            void 0 !== t && t.env, e.exports = function(e, t) {
                if (null == e) return e;
                var o = {};
                return n(e, a, o), o
            }
        }).call(this, o("../node_modules/process/browser.js"))
    },
    "../node_modules/react-dom/lib/forEachAccumulated.js": function(e, t, o) {
        "use strict";
        e.exports = function(e, t, o) {
            Array.isArray(e) ? e.forEach(t, o) : e && t.call(o, e)
        }
    },
    "../node_modules/react-dom/lib/getEventCharCode.js": function(e, t, o) {
        "use strict";
        e.exports = function(e) {
            var t, o = e.keyCode;
            return "charCode" in e ? 0 === (t = e.charCode) && 13 === o && (t = 13) : t = o, t >= 32 || 13 === t ? t : 0
        }
    },
    "../node_modules/react-dom/lib/getEventKey.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/getEventCharCode.js"),
            a = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified"
            },
            i = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta"
            };
        e.exports = function(e) {
            if (e.key) {
                var t = a[e.key] || e.key;
                if ("Unidentified" !== t) return t
            }
            if ("keypress" === e.type) {
                var o = n(e);
                return 13 === o ? "Enter" : String.fromCharCode(o)
            }
            return "keydown" === e.type || "keyup" === e.type ? i[e.keyCode] || "Unidentified" : ""
        }
    },
    "../node_modules/react-dom/lib/getEventModifierState.js": function(e, t, o) {
        "use strict";
        var n = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

        function a(e) {
            var t = this.nativeEvent;
            if (t.getModifierState) return t.getModifierState(e);
            var o = n[e];
            return !!o && !!t[o]
        }
        e.exports = function(e) {
            return a
        }
    },
    "../node_modules/react-dom/lib/getEventTarget.js": function(e, t, o) {
        "use strict";
        e.exports = function(e) {
            var t = e.target || e.srcElement || window;
            return t.correspondingUseElement && (t = t.correspondingUseElement), 3 === t.nodeType ? t.parentNode : t
        }
    },
    "../node_modules/react-dom/lib/getHostComponentFromComposite.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/ReactNodeTypes.js");
        e.exports = function(e) {
            for (var t;
                (t = e._renderedNodeType) === n.COMPOSITE;) e = e._renderedComponent;
            return t === n.HOST ? e._renderedComponent : t === n.EMPTY ? null : void 0
        }
    },
    "../node_modules/react-dom/lib/getIteratorFn.js": function(e, t, o) {
        "use strict";
        var n = "function" == typeof Symbol && Symbol.iterator,
            a = "@@iterator";
        e.exports = function(e) {
            var t = e && (n && e[n] || e[a]);
            if ("function" == typeof t) return t
        }
    },
    "../node_modules/react-dom/lib/getNodeForCharacterOffset.js": function(e, t, o) {
        "use strict";

        function n(e) {
            for (; e && e.firstChild;) e = e.firstChild;
            return e
        }

        function a(e) {
            for (; e;) {
                if (e.nextSibling) return e.nextSibling;
                e = e.parentNode
            }
        }
        e.exports = function(e, t) {
            for (var o = n(e), i = 0, r = 0; o;) {
                if (3 === o.nodeType) {
                    if (r = i + o.textContent.length, i <= t && r >= t) return {
                        node: o,
                        offset: t - i
                    };
                    i = r
                }
                o = n(a(o))
            }
        }
    },
    "../node_modules/react-dom/lib/getTextContentAccessor.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/fbjs/lib/ExecutionEnvironment.js"),
            a = null;
        e.exports = function() {
            return !a && n.canUseDOM && (a = "textContent" in document.documentElement ? "textContent" : "innerText"), a
        }
    },
    "../node_modules/react-dom/lib/getVendorPrefixedEventName.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/fbjs/lib/ExecutionEnvironment.js");

        function a(e, t) {
            var o = {};
            return o[e.toLowerCase()] = t.toLowerCase(), o["Webkit" + e] = "webkit" + t, o["Moz" + e] = "moz" + t, o["ms" + e] = "MS" + t, o["O" + e] = "o" + t.toLowerCase(), o
        }
        var i = {
                animationend: a("Animation", "AnimationEnd"),
                animationiteration: a("Animation", "AnimationIteration"),
                animationstart: a("Animation", "AnimationStart"),
                transitionend: a("Transition", "TransitionEnd")
            },
            r = {},
            s = {};
        n.canUseDOM && (s = document.createElement("div").style, "AnimationEvent" in window || (delete i.animationend.animation, delete i.animationiteration.animation, delete i.animationstart.animation), "TransitionEvent" in window || delete i.transitionend.transition), e.exports = function(e) {
            if (r[e]) return r[e];
            if (!i[e]) return e;
            var t = i[e];
            for (var o in t)
                if (t.hasOwnProperty(o) && o in s) return r[e] = t[o];
            return ""
        }
    },
    "../node_modules/react-dom/lib/inputValueTracking.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/ReactDOMComponentTree.js");

        function a(e) {
            var t = e.type,
                o = e.nodeName;
            return o && "input" === o.toLowerCase() && ("checkbox" === t || "radio" === t)
        }

        function i(e) {
            return e._wrapperState.valueTracker
        }
        var r = {
            _getTrackerFromNode: function(e) {
                return i(n.getInstanceFromNode(e))
            },
            track: function(e) {
                if (!i(e)) {
                    var t = n.getNodeFromInstance(e),
                        o = a(t) ? "checked" : "value",
                        r = Object.getOwnPropertyDescriptor(t.constructor.prototype, o),
                        s = "" + t[o];
                    t.hasOwnProperty(o) || "function" != typeof r.get || "function" != typeof r.set || (Object.defineProperty(t, o, {
                        enumerable: r.enumerable,
                        configurable: !0,
                        get: function() {
                            return r.get.call(this)
                        },
                        set: function(e) {
                            s = "" + e, r.set.call(this, e)
                        }
                    }), function(e, t) {
                        e._wrapperState.valueTracker = t
                    }(e, {
                        getValue: function() {
                            return s
                        },
                        setValue: function(e) {
                            s = "" + e
                        },
                        stopTracking: function() {
                            ! function(e) {
                                e._wrapperState.valueTracker = null
                            }(e), delete t[o]
                        }
                    }))
                }
            },
            updateValueIfChanged: function(e) {
                if (!e) return !1;
                var t = i(e);
                if (!t) return r.track(e), !0;
                var o, s, l = t.getValue(),
                    u = ((o = n.getNodeFromInstance(e)) && (s = a(o) ? "" + o.checked : o.value), s);
                return u !== l && (t.setValue(u), !0)
            },
            stopTracking: function(e) {
                var t = i(e);
                t && t.stopTracking()
            }
        };
        e.exports = r
    },
    "../node_modules/react-dom/lib/instantiateReactComponent.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/reactProdInvariant.js"),
            a = o("../node_modules/object-assign/index.js"),
            i = o("../node_modules/react-dom/lib/ReactCompositeComponent.js"),
            r = o("../node_modules/react-dom/lib/ReactEmptyComponent.js"),
            s = o("../node_modules/react-dom/lib/ReactHostComponent.js"),
            l = (o("../node_modules/react/lib/getNextDebugID.js"), o("../node_modules/fbjs/lib/invariant.js"), o("../node_modules/fbjs/lib/warning.js"), function(e) {
                this.construct(e)
            });

        function u(e, t) {
            var o;
            if (null === e || !1 === e) o = r.create(u);
            else if ("object" == typeof e) {
                var a = e,
                    i = a.type;
                if ("function" != typeof i && "string" != typeof i) {
                    var c = "";
                    0, c += function(e) {
                        if (e) {
                            var t = e.getName();
                            if (t) return " Check the render method of `" + t + "`."
                        }
                        return ""
                    }(a._owner), n("130", null == i ? i : typeof i, c)
                }
                "string" == typeof a.type ? o = s.createInternalComponent(a) : ! function(e) {
                    return "function" == typeof e && void 0 !== e.prototype && "function" == typeof e.prototype.mountComponent && "function" == typeof e.prototype.receiveComponent
                }(a.type) ? o = new l(a) : (o = new a.type(a)).getHostNode || (o.getHostNode = o.getNativeNode)
            } else "string" == typeof e || "number" == typeof e ? o = s.createInstanceForText(e) : n("131", typeof e);
            return o._mountIndex = 0, o._mountImage = null, o
        }
        a(l.prototype, i, {
            _instantiateReactComponent: u
        }), e.exports = u
    },
    "../node_modules/react-dom/lib/isEventSupported.js": function(e, t, o) {
        "use strict";
        var n, a = o("../node_modules/fbjs/lib/ExecutionEnvironment.js");
        a.canUseDOM && (n = document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", ""))
            /**
             * Checks if an event is supported in the current execution environment.
             *
             * NOTE: This will not work correctly for non-generic events such as `change`,
             * `reset`, `load`, `error`, and `select`.
             *
             * Borrows from Modernizr.
             *
             * @param {string} eventNameSuffix Event name, e.g. "click".
             * @param {?boolean} capture Check if the capture phase is supported.
             * @return {boolean} True if the event is supported.
             * @internal
             * @license Modernizr 3.0.0pre (Custom Build) | MIT
             */
            , e.exports = function(e, t) {
                if (!a.canUseDOM || t && !("addEventListener" in document)) return !1;
                var o = "on" + e,
                    i = o in document;
                if (!i) {
                    var r = document.createElement("div");
                    r.setAttribute(o, "return;"), i = "function" == typeof r[o]
                }
                return !i && n && "wheel" === e && (i = document.implementation.hasFeature("Events.wheel", "3.0")), i
            }
    },
    "../node_modules/react-dom/lib/isTextInputElement.js": function(e, t, o) {
        "use strict";
        var n = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        };
        e.exports = function(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return "input" === t ? !!n[e.type] : "textarea" === t
        }
    },
    "../node_modules/react-dom/lib/quoteAttributeValueForBrowser.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/escapeTextContentForBrowser.js");
        e.exports = function(e) {
            return '"' + n(e) + '"'
        }
    },
    "../node_modules/react-dom/lib/reactProdInvariant.js": function(e, t, o) {
        "use strict";
        e.exports = function(e) {
            for (var t = arguments.length - 1, o = "Minified React error #" + e + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + e, n = 0; n < t; n++) o += "&args[]=" + encodeURIComponent(arguments[n + 1]);
            o += " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
            var a = new Error(o);
            throw a.name = "Invariant Violation", a.framesToPop = 1, a
        }
    },
    "../node_modules/react-dom/lib/renderSubtreeIntoContainer.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/ReactMount.js");
        e.exports = n.renderSubtreeIntoContainer
    },
    "../node_modules/react-dom/lib/setInnerHTML.js": function(e, t, o) {
        "use strict";
        var n, a = o("../node_modules/fbjs/lib/ExecutionEnvironment.js"),
            i = o("../node_modules/react-dom/lib/DOMNamespaces.js"),
            r = /^[ \r\n\t\f]/,
            s = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,
            l = o("../node_modules/react-dom/lib/createMicrosoftUnsafeLocalFunction.js")(function(e, t) {
                if (e.namespaceURI !== i.svg || "innerHTML" in e) e.innerHTML = t;
                else {
                    (n = n || document.createElement("div")).innerHTML = "<svg>" + t + "</svg>";
                    for (var o = n.firstChild; o.firstChild;) e.appendChild(o.firstChild)
                }
            });
        if (a.canUseDOM) {
            var u = document.createElement("div");
            u.innerHTML = " ", "" === u.innerHTML && (l = function(e, t) {
                if (e.parentNode && e.parentNode.replaceChild(e, e), r.test(t) || "<" === t[0] && s.test(t)) {
                    e.innerHTML = String.fromCharCode(65279) + t;
                    var o = e.firstChild;
                    1 === o.data.length ? e.removeChild(o) : o.deleteData(0, 1)
                } else e.innerHTML = t
            }), u = null
        }
        e.exports = l
    },
    "../node_modules/react-dom/lib/setTextContent.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/fbjs/lib/ExecutionEnvironment.js"),
            a = o("../node_modules/react-dom/lib/escapeTextContentForBrowser.js"),
            i = o("../node_modules/react-dom/lib/setInnerHTML.js"),
            r = function(e, t) {
                if (t) {
                    var o = e.firstChild;
                    if (o && o === e.lastChild && 3 === o.nodeType) return void(o.nodeValue = t)
                }
                e.textContent = t
            };
        n.canUseDOM && ("textContent" in document.documentElement || (r = function(e, t) {
            3 !== e.nodeType ? i(e, a(t)) : e.nodeValue = t
        })), e.exports = r
    },
    "../node_modules/react-dom/lib/shouldUpdateReactComponent.js": function(e, t, o) {
        "use strict";
        e.exports = function(e, t) {
            var o = null === e || !1 === e,
                n = null === t || !1 === t;
            if (o || n) return o === n;
            var a = typeof e,
                i = typeof t;
            return "string" === a || "number" === a ? "string" === i || "number" === i : "object" === i && e.type === t.type && e.key === t.key
        }
    },
    "../node_modules/react-dom/lib/traverseAllChildren.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react-dom/lib/reactProdInvariant.js"),
            a = (o("../node_modules/react/lib/ReactCurrentOwner.js"), o("../node_modules/react-dom/lib/ReactElementSymbol.js")),
            i = o("../node_modules/react-dom/lib/getIteratorFn.js"),
            r = (o("../node_modules/fbjs/lib/invariant.js"), o("../node_modules/react-dom/lib/KeyEscapeUtils.js")),
            s = (o("../node_modules/fbjs/lib/warning.js"), "."),
            l = ":";

        function u(e, t) {
            return e && "object" == typeof e && null != e.key ? r.escape(e.key) : t.toString(36)
        }
        e.exports = function(e, t, o) {
            return null == e ? 0 : function e(t, o, c, d) {
                var p, m = typeof t;
                if ("undefined" !== m && "boolean" !== m || (t = null), null === t || "string" === m || "number" === m || "object" === m && t.$$typeof === a) return c(d, t, "" === o ? s + u(t, 0) : o), 1;
                var h = 0,
                    f = "" === o ? s : o + l;
                if (Array.isArray(t))
                    for (var g = 0; g < t.length; g++) h += e(p = t[g], f + u(p, g), c, d);
                else {
                    var k = i(t);
                    if (k) {
                        var b, v = k.call(t);
                        if (k !== t.entries)
                            for (var y = 0; !(b = v.next()).done;) h += e(p = b.value, f + u(p, y++), c, d);
                        else
                            for (; !(b = v.next()).done;) {
                                var j = b.value;
                                j && (h += e(p = j[1], f + r.escape(j[0]) + l + u(p, 0), c, d))
                            }
                    } else if ("object" === m) {
                        var w = String(t);
                        n("31", "[object Object]" === w ? "object with keys {" + Object.keys(t).join(", ") + "}" : w, "")
                    }
                }
                return h
            }(e, "", t, o)
        }
    },
    "../node_modules/react-dom/lib/validateDOMNesting.js": function(e, t, o) {
        "use strict";
        o("../node_modules/object-assign/index.js");
        var n = o("../node_modules/fbjs/lib/emptyFunction.js"),
            a = (o("../node_modules/fbjs/lib/warning.js"), n);
        e.exports = a
    },
    "../node_modules/react/lib/KeyEscapeUtils.js": function(e, t, o) {
        "use strict";
        var n = {
            escape: function(e) {
                var t = {
                    "=": "=0",
                    ":": "=2"
                };
                return "$" + ("" + e).replace(/[=:]/g, function(e) {
                    return t[e]
                })
            },
            unescape: function(e) {
                var t = {
                    "=0": "=",
                    "=2": ":"
                };
                return ("" + ("." === e[0] && "$" === e[1] ? e.substring(2) : e.substring(1))).replace(/(=0|=2)/g, function(e) {
                    return t[e]
                })
            }
        };
        e.exports = n
    },
    "../node_modules/react/lib/PooledClass.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react/lib/reactProdInvariant.js"),
            a = (o("../node_modules/fbjs/lib/invariant.js"), function(e) {
                if (this.instancePool.length) {
                    var t = this.instancePool.pop();
                    return this.call(t, e), t
                }
                return new this(e)
            }),
            i = function(e) {
                e instanceof this || n("25"), e.destructor(), this.instancePool.length < this.poolSize && this.instancePool.push(e)
            },
            r = a,
            s = {
                addPoolingTo: function(e, t) {
                    var o = e;
                    return o.instancePool = [], o.getPooled = t || r, o.poolSize || (o.poolSize = 10), o.release = i, o
                },
                oneArgumentPooler: a,
                twoArgumentPooler: function(e, t) {
                    if (this.instancePool.length) {
                        var o = this.instancePool.pop();
                        return this.call(o, e, t), o
                    }
                    return new this(e, t)
                },
                threeArgumentPooler: function(e, t, o) {
                    if (this.instancePool.length) {
                        var n = this.instancePool.pop();
                        return this.call(n, e, t, o), n
                    }
                    return new this(e, t, o)
                },
                fourArgumentPooler: function(e, t, o, n) {
                    if (this.instancePool.length) {
                        var a = this.instancePool.pop();
                        return this.call(a, e, t, o, n), a
                    }
                    return new this(e, t, o, n)
                }
            };
        e.exports = s
    },
    "../node_modules/react/lib/React.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/object-assign/index.js"),
            a = o("../node_modules/react/lib/ReactBaseClasses.js"),
            i = o("../node_modules/react/lib/ReactChildren.js"),
            r = o("../node_modules/react/lib/ReactDOMFactories.js"),
            s = o("../node_modules/react/lib/ReactElement.js"),
            l = o("../node_modules/react/lib/ReactPropTypes.js"),
            u = o("../node_modules/react/lib/ReactVersion.js"),
            c = o("../node_modules/react/lib/createClass.js"),
            d = o("../node_modules/react/lib/onlyChild.js"),
            p = s.createElement,
            m = s.createFactory,
            h = s.cloneElement,
            f = n,
            g = {
                Children: {
                    map: i.map,
                    forEach: i.forEach,
                    count: i.count,
                    toArray: i.toArray,
                    only: d
                },
                Component: a.Component,
                PureComponent: a.PureComponent,
                createElement: p,
                cloneElement: h,
                isValidElement: s.isValidElement,
                PropTypes: l,
                createClass: c,
                createFactory: m,
                createMixin: function(e) {
                    return e
                },
                DOM: r,
                version: u,
                __spread: f
            };
        e.exports = g
    },
    "../node_modules/react/lib/ReactBaseClasses.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react/lib/reactProdInvariant.js"),
            a = o("../node_modules/object-assign/index.js"),
            i = o("../node_modules/react/lib/ReactNoopUpdateQueue.js"),
            r = (o("../node_modules/react/lib/canDefineProperty.js"), o("../node_modules/fbjs/lib/emptyObject.js"));
        o("../node_modules/fbjs/lib/invariant.js"), o("../node_modules/react/lib/lowPriorityWarning.js");

        function s(e, t, o) {
            this.props = e, this.context = t, this.refs = r, this.updater = o || i
        }

        function l(e, t, o) {
            this.props = e, this.context = t, this.refs = r, this.updater = o || i
        }

        function u() {}
        s.prototype.isReactComponent = {}, s.prototype.setState = function(e, t) {
            "object" != typeof e && "function" != typeof e && null != e && n("85"), this.updater.enqueueSetState(this, e), t && this.updater.enqueueCallback(this, t, "setState")
        }, s.prototype.forceUpdate = function(e) {
            this.updater.enqueueForceUpdate(this), e && this.updater.enqueueCallback(this, e, "forceUpdate")
        }, u.prototype = s.prototype, l.prototype = new u, l.prototype.constructor = l, a(l.prototype, s.prototype), l.prototype.isPureReactComponent = !0, e.exports = {
            Component: s,
            PureComponent: l
        }
    },
    "../node_modules/react/lib/ReactChildren.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react/lib/PooledClass.js"),
            a = o("../node_modules/react/lib/ReactElement.js"),
            i = o("../node_modules/fbjs/lib/emptyFunction.js"),
            r = o("../node_modules/react/lib/traverseAllChildren.js"),
            s = n.twoArgumentPooler,
            l = n.fourArgumentPooler,
            u = /\/+/g;

        function c(e) {
            return ("" + e).replace(u, "$&/")
        }

        function d(e, t) {
            this.func = e, this.context = t, this.count = 0
        }

        function p(e, t, o) {
            var n = e.func,
                a = e.context;
            n.call(a, t, e.count++)
        }

        function m(e, t, o, n) {
            this.result = e, this.keyPrefix = t, this.func = o, this.context = n, this.count = 0
        }

        function h(e, t, o) {
            var n = e.result,
                r = e.keyPrefix,
                s = e.func,
                l = e.context,
                u = s.call(l, t, e.count++);
            Array.isArray(u) ? f(u, n, o, i.thatReturnsArgument) : null != u && (a.isValidElement(u) && (u = a.cloneAndReplaceKey(u, r + (!u.key || t && t.key === u.key ? "" : c(u.key) + "/") + o)), n.push(u))
        }

        function f(e, t, o, n, a) {
            var i = "";
            null != o && (i = c(o) + "/");
            var s = m.getPooled(t, i, n, a);
            r(e, h, s), m.release(s)
        }

        function g(e, t, o) {
            return null
        }
        d.prototype.destructor = function() {
            this.func = null, this.context = null, this.count = 0
        }, n.addPoolingTo(d, s), m.prototype.destructor = function() {
            this.result = null, this.keyPrefix = null, this.func = null, this.context = null, this.count = 0
        }, n.addPoolingTo(m, l);
        var k = {
            forEach: function(e, t, o) {
                if (null == e) return e;
                var n = d.getPooled(t, o);
                r(e, p, n), d.release(n)
            },
            map: function(e, t, o) {
                if (null == e) return e;
                var n = [];
                return f(e, n, null, t, o), n
            },
            mapIntoWithKeyPrefixInternal: f,
            count: function(e, t) {
                return r(e, g, null)
            },
            toArray: function(e) {
                var t = [];
                return f(e, t, null, i.thatReturnsArgument), t
            }
        };
        e.exports = k
    },
    "../node_modules/react/lib/ReactComponentTreeHook.js": function(e, t, o) {
        "use strict";
        var n, a, i, r, s, l, u, c = o("../node_modules/react/lib/reactProdInvariant.js"),
            d = o("../node_modules/react/lib/ReactCurrentOwner.js");
        o("../node_modules/fbjs/lib/invariant.js"), o("../node_modules/fbjs/lib/warning.js");

        function p(e) {
            var t = Function.prototype.toString,
                o = Object.prototype.hasOwnProperty,
                n = RegExp("^" + t.call(o).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            try {
                var a = t.call(e);
                return n.test(a)
            } catch (e) {
                return !1
            }
        }
        if ("function" == typeof Array.from && "function" == typeof Map && p(Map) && null != Map.prototype && "function" == typeof Map.prototype.keys && p(Map.prototype.keys) && "function" == typeof Set && p(Set) && null != Set.prototype && "function" == typeof Set.prototype.keys && p(Set.prototype.keys)) {
            var m = new Map,
                h = new Set;
            n = function(e, t) {
                m.set(e, t)
            }, a = function(e) {
                return m.get(e)
            }, i = function(e) {
                m.delete(e)
            }, r = function() {
                return Array.from(m.keys())
            }, s = function(e) {
                h.add(e)
            }, l = function(e) {
                h.delete(e)
            }, u = function() {
                return Array.from(h.keys())
            }
        } else {
            var f = {},
                g = {},
                k = function(e) {
                    return "." + e
                },
                b = function(e) {
                    return parseInt(e.substr(1), 10)
                };
            n = function(e, t) {
                var o = k(e);
                f[o] = t
            }, a = function(e) {
                var t = k(e);
                return f[t]
            }, i = function(e) {
                var t = k(e);
                delete f[t]
            }, r = function() {
                return Object.keys(f).map(b)
            }, s = function(e) {
                var t = k(e);
                g[t] = !0
            }, l = function(e) {
                var t = k(e);
                delete g[t]
            }, u = function() {
                return Object.keys(g).map(b)
            }
        }
        var v = [];

        function y(e) {
            var t = a(e);
            if (t) {
                var o = t.childIDs;
                i(e), o.forEach(y)
            }
        }

        function j(e, t, o) {
            return "\n    in " + (e || "Unknown") + (t ? " (at " + t.fileName.replace(/^.*[\\\/]/, "") + ":" + t.lineNumber + ")" : o ? " (created by " + o + ")" : "")
        }

        function w(e) {
            return null == e ? "#empty" : "string" == typeof e || "number" == typeof e ? "#text" : "string" == typeof e.type ? e.type : e.type.displayName || e.type.name || "Unknown"
        }

        function _(e) {
            var t, o = O.getDisplayName(e),
                n = O.getElement(e),
                a = O.getOwnerID(e);
            return a && (t = O.getDisplayName(a)), j(o, n && n._source, t)
        }
        var O = {
            onSetChildren: function(e, t) {
                var o = a(e);
                o || c("144"), o.childIDs = t;
                for (var n = 0; n < t.length; n++) {
                    var i = t[n],
                        r = a(i);
                    r || c("140"), null == r.childIDs && "object" == typeof r.element && null != r.element && c("141"), r.isMounted || c("71"), null == r.parentID && (r.parentID = e), r.parentID !== e && c("142", i, r.parentID, e)
                }
            },
            onBeforeMountComponent: function(e, t, o) {
                n(e, {
                    element: t,
                    parentID: o,
                    text: null,
                    childIDs: [],
                    isMounted: !1,
                    updateCount: 0
                })
            },
            onBeforeUpdateComponent: function(e, t) {
                var o = a(e);
                o && o.isMounted && (o.element = t)
            },
            onMountComponent: function(e) {
                var t = a(e);
                t || c("144"), t.isMounted = !0, 0 === t.parentID && s(e)
            },
            onUpdateComponent: function(e) {
                var t = a(e);
                t && t.isMounted && t.updateCount++
            },
            onUnmountComponent: function(e) {
                var t = a(e);
                t && (t.isMounted = !1, 0 === t.parentID && l(e));
                v.push(e)
            },
            purgeUnmountedComponents: function() {
                if (!O._preventPurging) {
                    for (var e = 0; e < v.length; e++) {
                        y(v[e])
                    }
                    v.length = 0
                }
            },
            isMounted: function(e) {
                var t = a(e);
                return !!t && t.isMounted
            },
            getCurrentStackAddendum: function(e) {
                var t = "";
                if (e) {
                    var o = w(e),
                        n = e._owner;
                    t += j(o, e._source, n && n.getName())
                }
                var a = d.current,
                    i = a && a._debugID;
                return t += O.getStackAddendumByID(i)
            },
            getStackAddendumByID: function(e) {
                for (var t = ""; e;) t += _(e), e = O.getParentID(e);
                return t
            },
            getChildIDs: function(e) {
                var t = a(e);
                return t ? t.childIDs : []
            },
            getDisplayName: function(e) {
                var t = O.getElement(e);
                return t ? w(t) : null
            },
            getElement: function(e) {
                var t = a(e);
                return t ? t.element : null
            },
            getOwnerID: function(e) {
                var t = O.getElement(e);
                return t && t._owner ? t._owner._debugID : null
            },
            getParentID: function(e) {
                var t = a(e);
                return t ? t.parentID : null
            },
            getSource: function(e) {
                var t = a(e),
                    o = t ? t.element : null;
                return null != o ? o._source : null
            },
            getText: function(e) {
                var t = O.getElement(e);
                return "string" == typeof t ? t : "number" == typeof t ? "" + t : null
            },
            getUpdateCount: function(e) {
                var t = a(e);
                return t ? t.updateCount : 0
            },
            getRootIDs: u,
            getRegisteredIDs: r,
            pushNonStandardWarningStack: function(e, t) {
                if ("function" == typeof console.reactStack) {
                    var o = [],
                        n = d.current,
                        a = n && n._debugID;
                    try {
                        for (e && o.push({
                                name: a ? O.getDisplayName(a) : null,
                                fileName: t ? t.fileName : null,
                                lineNumber: t ? t.lineNumber : null
                            }); a;) {
                            var i = O.getElement(a),
                                r = O.getParentID(a),
                                s = O.getOwnerID(a),
                                l = s ? O.getDisplayName(s) : null,
                                u = i && i._source;
                            o.push({
                                name: l,
                                fileName: u ? u.fileName : null,
                                lineNumber: u ? u.lineNumber : null
                            }), a = r
                        }
                    } catch (e) {}
                    console.reactStack(o)
                }
            },
            popNonStandardWarningStack: function() {
                "function" == typeof console.reactStackEnd && console.reactStackEnd()
            }
        };
        e.exports = O
    },
    "../node_modules/react/lib/ReactCurrentOwner.js": function(e, t, o) {
        "use strict";
        e.exports = {
            current: null
        }
    },
    "../node_modules/react/lib/ReactDOMFactories.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react/lib/ReactElement.js").createFactory,
            a = {
                a: n("a"),
                abbr: n("abbr"),
                address: n("address"),
                area: n("area"),
                article: n("article"),
                aside: n("aside"),
                audio: n("audio"),
                b: n("b"),
                base: n("base"),
                bdi: n("bdi"),
                bdo: n("bdo"),
                big: n("big"),
                blockquote: n("blockquote"),
                body: n("body"),
                br: n("br"),
                button: n("button"),
                canvas: n("canvas"),
                caption: n("caption"),
                cite: n("cite"),
                code: n("code"),
                col: n("col"),
                colgroup: n("colgroup"),
                data: n("data"),
                datalist: n("datalist"),
                dd: n("dd"),
                del: n("del"),
                details: n("details"),
                dfn: n("dfn"),
                dialog: n("dialog"),
                div: n("div"),
                dl: n("dl"),
                dt: n("dt"),
                em: n("em"),
                embed: n("embed"),
                fieldset: n("fieldset"),
                figcaption: n("figcaption"),
                figure: n("figure"),
                footer: n("footer"),
                form: n("form"),
                h1: n("h1"),
                h2: n("h2"),
                h3: n("h3"),
                h4: n("h4"),
                h5: n("h5"),
                h6: n("h6"),
                head: n("head"),
                header: n("header"),
                hgroup: n("hgroup"),
                hr: n("hr"),
                html: n("html"),
                i: n("i"),
                iframe: n("iframe"),
                img: n("img"),
                input: n("input"),
                ins: n("ins"),
                kbd: n("kbd"),
                keygen: n("keygen"),
                label: n("label"),
                legend: n("legend"),
                li: n("li"),
                link: n("link"),
                main: n("main"),
                map: n("map"),
                mark: n("mark"),
                menu: n("menu"),
                menuitem: n("menuitem"),
                meta: n("meta"),
                meter: n("meter"),
                nav: n("nav"),
                noscript: n("noscript"),
                object: n("object"),
                ol: n("ol"),
                optgroup: n("optgroup"),
                option: n("option"),
                output: n("output"),
                p: n("p"),
                param: n("param"),
                picture: n("picture"),
                pre: n("pre"),
                progress: n("progress"),
                q: n("q"),
                rp: n("rp"),
                rt: n("rt"),
                ruby: n("ruby"),
                s: n("s"),
                samp: n("samp"),
                script: n("script"),
                section: n("section"),
                select: n("select"),
                small: n("small"),
                source: n("source"),
                span: n("span"),
                strong: n("strong"),
                style: n("style"),
                sub: n("sub"),
                summary: n("summary"),
                sup: n("sup"),
                table: n("table"),
                tbody: n("tbody"),
                td: n("td"),
                textarea: n("textarea"),
                tfoot: n("tfoot"),
                th: n("th"),
                thead: n("thead"),
                time: n("time"),
                title: n("title"),
                tr: n("tr"),
                track: n("track"),
                u: n("u"),
                ul: n("ul"),
                var: n("var"),
                video: n("video"),
                wbr: n("wbr"),
                circle: n("circle"),
                clipPath: n("clipPath"),
                defs: n("defs"),
                ellipse: n("ellipse"),
                g: n("g"),
                image: n("image"),
                line: n("line"),
                linearGradient: n("linearGradient"),
                mask: n("mask"),
                path: n("path"),
                pattern: n("pattern"),
                polygon: n("polygon"),
                polyline: n("polyline"),
                radialGradient: n("radialGradient"),
                rect: n("rect"),
                stop: n("stop"),
                svg: n("svg"),
                text: n("text"),
                tspan: n("tspan")
            };
        e.exports = a
    },
    "../node_modules/react/lib/ReactElement.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/object-assign/index.js"),
            a = o("../node_modules/react/lib/ReactCurrentOwner.js"),
            i = (o("../node_modules/fbjs/lib/warning.js"), o("../node_modules/react/lib/canDefineProperty.js"), Object.prototype.hasOwnProperty),
            r = o("../node_modules/react/lib/ReactElementSymbol.js"),
            s = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };

        function l(e) {
            return void 0 !== e.ref
        }

        function u(e) {
            return void 0 !== e.key
        }
        var c = function(e, t, o, n, a, i, s) {
            return {
                $$typeof: r,
                type: e,
                key: t,
                ref: o,
                props: s,
                _owner: i
            }
        };
        c.createElement = function(e, t, o) {
            var n, r = {},
                d = null,
                p = null;
            if (null != t)
                for (n in l(t) && (p = t.ref), u(t) && (d = "" + t.key), void 0 === t.__self ? null : t.__self, void 0 === t.__source ? null : t.__source, t) i.call(t, n) && !s.hasOwnProperty(n) && (r[n] = t[n]);
            var m = arguments.length - 2;
            if (1 === m) r.children = o;
            else if (m > 1) {
                for (var h = Array(m), f = 0; f < m; f++) h[f] = arguments[f + 2];
                0, r.children = h
            }
            if (e && e.defaultProps) {
                var g = e.defaultProps;
                for (n in g) void 0 === r[n] && (r[n] = g[n])
            }
            return c(e, d, p, 0, 0, a.current, r)
        }, c.createFactory = function(e) {
            var t = c.createElement.bind(null, e);
            return t.type = e, t
        }, c.cloneAndReplaceKey = function(e, t) {
            return c(e.type, t, e.ref, e._self, e._source, e._owner, e.props)
        }, c.cloneElement = function(e, t, o) {
            var r, d, p = n({}, e.props),
                m = e.key,
                h = e.ref,
                f = (e._self, e._source, e._owner);
            if (null != t)
                for (r in l(t) && (h = t.ref, f = a.current), u(t) && (m = "" + t.key), e.type && e.type.defaultProps && (d = e.type.defaultProps), t) i.call(t, r) && !s.hasOwnProperty(r) && (void 0 === t[r] && void 0 !== d ? p[r] = d[r] : p[r] = t[r]);
            var g = arguments.length - 2;
            if (1 === g) p.children = o;
            else if (g > 1) {
                for (var k = Array(g), b = 0; b < g; b++) k[b] = arguments[b + 2];
                p.children = k
            }
            return c(e.type, m, h, 0, 0, f, p)
        }, c.isValidElement = function(e) {
            return "object" == typeof e && null !== e && e.$$typeof === r
        }, e.exports = c
    },
    "../node_modules/react/lib/ReactElementSymbol.js": function(e, t, o) {
        "use strict";
        var n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
        e.exports = n
    },
    "../node_modules/react/lib/ReactNoopUpdateQueue.js": function(e, t, o) {
        "use strict";
        o("../node_modules/fbjs/lib/warning.js");
        var n = {
            isMounted: function(e) {
                return !1
            },
            enqueueCallback: function(e, t) {},
            enqueueForceUpdate: function(e) {},
            enqueueReplaceState: function(e, t) {},
            enqueueSetState: function(e, t) {}
        };
        e.exports = n
    },
    "../node_modules/react/lib/ReactPropTypes.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react/lib/ReactElement.js").isValidElement,
            a = o("../node_modules/prop-types/factory.js");
        e.exports = a(n)
    },
    "../node_modules/react/lib/ReactVersion.js": function(e, t, o) {
        "use strict";
        e.exports = "15.6.2"
    },
    "../node_modules/react/lib/canDefineProperty.js": function(e, t, o) {
        "use strict";
        e.exports = !1
    },
    "../node_modules/react/lib/createClass.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react/lib/ReactBaseClasses.js").Component,
            a = o("../node_modules/react/lib/ReactElement.js").isValidElement,
            i = o("../node_modules/react/lib/ReactNoopUpdateQueue.js"),
            r = o("../node_modules/create-react-class/factory.js");
        e.exports = r(n, a, i)
    },
    "../node_modules/react/lib/getIteratorFn.js": function(e, t, o) {
        "use strict";
        var n = "function" == typeof Symbol && Symbol.iterator,
            a = "@@iterator";
        e.exports = function(e) {
            var t = e && (n && e[n] || e[a]);
            if ("function" == typeof t) return t
        }
    },
    "../node_modules/react/lib/getNextDebugID.js": function(e, t, o) {
        "use strict";
        var n = 1;
        e.exports = function() {
            return n++
        }
    },
    "../node_modules/react/lib/lowPriorityWarning.js": function(e, t, o) {
        "use strict";
        e.exports = function() {}
    },
    "../node_modules/react/lib/onlyChild.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react/lib/reactProdInvariant.js"),
            a = o("../node_modules/react/lib/ReactElement.js");
        o("../node_modules/fbjs/lib/invariant.js");
        e.exports = function(e) {
            return a.isValidElement(e) || n("143"), e
        }
    },
    "../node_modules/react/lib/reactProdInvariant.js": function(e, t, o) {
        "use strict";
        e.exports = function(e) {
            for (var t = arguments.length - 1, o = "Minified React error #" + e + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + e, n = 0; n < t; n++) o += "&args[]=" + encodeURIComponent(arguments[n + 1]);
            o += " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
            var a = new Error(o);
            throw a.name = "Invariant Violation", a.framesToPop = 1, a
        }
    },
    "../node_modules/react/lib/traverseAllChildren.js": function(e, t, o) {
        "use strict";
        var n = o("../node_modules/react/lib/reactProdInvariant.js"),
            a = (o("../node_modules/react/lib/ReactCurrentOwner.js"), o("../node_modules/react/lib/ReactElementSymbol.js")),
            i = o("../node_modules/react/lib/getIteratorFn.js"),
            r = (o("../node_modules/fbjs/lib/invariant.js"), o("../node_modules/react/lib/KeyEscapeUtils.js")),
            s = (o("../node_modules/fbjs/lib/warning.js"), "."),
            l = ":";

        function u(e, t) {
            return e && "object" == typeof e && null != e.key ? r.escape(e.key) : t.toString(36)
        }
        e.exports = function(e, t, o) {
            return null == e ? 0 : function e(t, o, c, d) {
                var p, m = typeof t;
                if ("undefined" !== m && "boolean" !== m || (t = null), null === t || "string" === m || "number" === m || "object" === m && t.$$typeof === a) return c(d, t, "" === o ? s + u(t, 0) : o), 1;
                var h = 0,
                    f = "" === o ? s : o + l;
                if (Array.isArray(t))
                    for (var g = 0; g < t.length; g++) h += e(p = t[g], f + u(p, g), c, d);
                else {
                    var k = i(t);
                    if (k) {
                        var b, v = k.call(t);
                        if (k !== t.entries)
                            for (var y = 0; !(b = v.next()).done;) h += e(p = b.value, f + u(p, y++), c, d);
                        else
                            for (; !(b = v.next()).done;) {
                                var j = b.value;
                                j && (h += e(p = j[1], f + r.escape(j[0]) + l + u(p, 0), c, d))
                            }
                    } else if ("object" === m) {
                        var w = String(t);
                        n("31", "[object Object]" === w ? "object with keys {" + Object.keys(t).join(", ") + "}" : w, "")
                    }
                }
                return h
            }(e, "", t, o)
        }
    },
    "../node_modules/react/react.js": function(e, t, o) {
        "use strict";
        e.exports = o("../node_modules/react/lib/React.js")
    },
    "../node_modules/style-loader/lib/addStyles.js": function(e, t, o) {
        var n, a, i = {},
            r = (n = function() {
                return window && document && document.all && !window.atob
            }, function() {
                return void 0 === a && (a = n.apply(this, arguments)), a
            }),
            s = function(e) {
                var t = {};
                return function(e) {
                    if (void 0 === t[e]) {
                        var o = function(e) {
                            return document.querySelector(e)
                        }.call(this, e);
                        if (o instanceof window.HTMLIFrameElement) try {
                            o = o.contentDocument.head
                        } catch (e) {
                            o = null
                        }
                        t[e] = o
                    }
                    return t[e]
                }
            }(),
            l = null,
            u = 0,
            c = [],
            d = o("../node_modules/style-loader/lib/urls.js");

        function p(e, t) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o],
                    a = i[n.id];
                if (a) {
                    a.refs++;
                    for (var r = 0; r < a.parts.length; r++) a.parts[r](n.parts[r]);
                    for (; r < n.parts.length; r++) a.parts.push(b(n.parts[r], t))
                } else {
                    var s = [];
                    for (r = 0; r < n.parts.length; r++) s.push(b(n.parts[r], t));
                    i[n.id] = {
                        id: n.id,
                        refs: 1,
                        parts: s
                    }
                }
            }
        }

        function m(e, t) {
            for (var o = [], n = {}, a = 0; a < e.length; a++) {
                var i = e[a],
                    r = t.base ? i[0] + t.base : i[0],
                    s = {
                        css: i[1],
                        media: i[2],
                        sourceMap: i[3]
                    };
                n[r] ? n[r].parts.push(s) : o.push(n[r] = {
                    id: r,
                    parts: [s]
                })
            }
            return o
        }

        function h(e, t) {
            var o = s(e.insertInto);
            if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var n = c[c.length - 1];
            if ("top" === e.insertAt) n ? n.nextSibling ? o.insertBefore(t, n.nextSibling) : o.appendChild(t) : o.insertBefore(t, o.firstChild), c.push(t);
            else if ("bottom" === e.insertAt) o.appendChild(t);
            else {
                if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var a = s(e.insertInto + " " + e.insertAt.before);
                o.insertBefore(t, a)
            }
        }

        function f(e) {
            if (null === e.parentNode) return !1;
            e.parentNode.removeChild(e);
            var t = c.indexOf(e);
            t >= 0 && c.splice(t, 1)
        }

        function g(e) {
            var t = document.createElement("style");
            return e.attrs.type = "text/css", k(t, e.attrs), h(e, t), t
        }

        function k(e, t) {
            Object.keys(t).forEach(function(o) {
                e.setAttribute(o, t[o])
            })
        }

        function b(e, t) {
            var o, n, a, i;
            if (t.transform && e.css) {
                if (!(i = t.transform(e.css))) return function() {};
                e.css = i
            }
            if (t.singleton) {
                var r = u++;
                o = l || (l = g(t)), n = j.bind(null, o, r, !1), a = j.bind(null, o, r, !0)
            } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (o = function(e) {
                var t = document.createElement("link");
                return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", k(t, e.attrs), h(e, t), t
            }(t), n = function(e, t, o) {
                var n = o.css,
                    a = o.sourceMap,
                    i = void 0 === t.convertToAbsoluteUrls && a;
                (t.convertToAbsoluteUrls || i) && (n = d(n));
                a && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */");
                var r = new Blob([n], {
                        type: "text/css"
                    }),
                    s = e.href;
                e.href = URL.createObjectURL(r), s && URL.revokeObjectURL(s)
            }.bind(null, o, t), a = function() {
                f(o), o.href && URL.revokeObjectURL(o.href)
            }) : (o = g(t), n = function(e, t) {
                var o = t.css,
                    n = t.media;
                n && e.setAttribute("media", n);
                if (e.styleSheet) e.styleSheet.cssText = o;
                else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(o))
                }
            }.bind(null, o), a = function() {
                f(o)
            });
            return n(e),
                function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        n(e = t)
                    } else a()
                }
        }
        e.exports = function(e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || (t.singleton = r()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
            var o = m(e, t);
            return p(o, t),
                function(e) {
                    for (var n = [], a = 0; a < o.length; a++) {
                        var r = o[a];
                        (s = i[r.id]).refs--, n.push(s)
                    }
                    e && p(m(e, t), t);
                    for (a = 0; a < n.length; a++) {
                        var s;
                        if (0 === (s = n[a]).refs) {
                            for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                            delete i[s.id]
                        }
                    }
                }
        };
        var v, y = (v = [], function(e, t) {
            return v[e] = t, v.filter(Boolean).join("\n")
        });

        function j(e, t, o, n) {
            var a = o ? "" : n.css;
            if (e.styleSheet) e.styleSheet.cssText = y(t, a);
            else {
                var i = document.createTextNode(a),
                    r = e.childNodes;
                r[t] && e.removeChild(r[t]), r.length ? e.insertBefore(i, r[t]) : e.appendChild(i)
            }
        }
    },
    "../node_modules/style-loader/lib/urls.js": function(e, t) {
        e.exports = function(e) {
            var t = "undefined" != typeof window && window.location;
            if (!t) throw new Error("fixUrls requires window.location");
            if (!e || "string" != typeof e) return e;
            var o = t.protocol + "//" + t.host,
                n = o + t.pathname.replace(/\/[^\/]*$/, "/");
            return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
                var a, i = t.trim().replace(/^"(.*)"$/, function(e, t) {
                    return t
                }).replace(/^'(.*)'$/, function(e, t) {
                    return t
                });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i) ? e : (a = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? o + i : n + i.replace(/^\.\//, ""), "url(" + JSON.stringify(a) + ")")
            })
        }
    },
    "../node_modules/webpack/buildin/global.js": function(e, t) {
        var o;
        o = function() {
            return this
        }();
        try {
            o = o || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (o = window)
        }
        e.exports = o
    },
    "./components/App.tsx": function(e, t, o) {
        "use strict";
        var n, a = this && this.__extends || (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            },
            function(e, t) {
                function o() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
            });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o("../node_modules/react/react.js"),
            r = o("./components/OfficeHeader.tsx"),
            s = o("./components/FixedHeader.tsx"),
            l = o("./components/Background.tsx"),
            u = o("./components/Header.tsx"),
            c = o("./components/SectionOne.tsx"),
            d = o("./components/SectionTwo.tsx"),
            p = o("./components/SectionThree.tsx"),
            m = o("./components/SectionFour.tsx"),
            h = o("./components/SectionFive.tsx"),
            f = o("./components/Footer.tsx"),
            g = o("./components/TNarrow.tsx"),
            k = o("./components/Modal.tsx");
        o("./css/style.less");
        var b = o("./strings/localizedStrings.ts"),
            v = o("./lib/helper.tsx"),
            y = o("./silentAuth/silentAuth.ts"),
            j = window,
            w = function(e) {
                function t(t) {
                    var o = e.call(this, t) || this;
                    return o.state = {
                        showModal: !1,
                        showFlyout: !1,
                        edgeState: !1,
                        chromeSate: !1,
                        showMenu: !1,
                        showMenuFooter: !1,
                        showPage: !1
                    }, o.changeModalState = o.changeModalState.bind(o), o.changeFlyoutState = o.changeFlyoutState.bind(o), o.changeMenuState = o.changeMenuState.bind(o), o.changeFooterMenuState = o.changeFooterMenuState.bind(o), o.resetMenu = o.resetMenu.bind(o), o.changePageDisplay = o.changePageDisplay.bind(o), o
                }
                return a(t, e), t.prototype.componentDidMount = function() {
                    this.detectEdge(), this.detectChromeWindows(), j.setting.IsSilentAuthEnabled ? y.trySilentAuth(this.changePageDisplay, j.setting.SilentAuthUrl, j.setting.SilentAuthTimeout) : this.changePageDisplay(!0)
                }, t.prototype.detectEdge = function() {
                    var e = window.navigator.userAgent,
                        t = e.indexOf("MSIE "),
                        o = e.indexOf("Trident/"),
                        n = e.indexOf("Edge/");
                    t > 0 ? this.setState({
                        edgeState: !0
                    }) : o > 0 ? this.setState({
                        edgeState: !0
                    }) : n > 0 ? this.setState({
                        edgeState: !0
                    }) : this.setState({
                        edgeState: !1
                    })
                }, t.prototype.detectChromeWindows = function() {
                    var e = window.navigator.userAgent,
                        t = e.indexOf("Chrome"),
                        o = e.indexOf("Windows"),
                        n = e.indexOf("Edge");
                    t > 0 && o > 0 && n < 0 && this.setState({
                        chromeSate: !0,
                        showFlyout: !0
                    })
                }, t.prototype.changeModalState = function(e) {
                    this.setState({
                        showModal: e
                    })
                }, t.prototype.changeMenuState = function(e) {
                    this.setState({
                        showMenu: e
                    })
                }, t.prototype.changeFooterMenuState = function(e) {
                    this.setState({
                        showMenuFooter: e
                    })
                }, t.prototype.changeFlyoutState = function(e) {
                    var t = this;
                    setTimeout(function() {
                        t.setState({
                            showFlyout: e
                        })
                    }, 367)
                }, t.prototype.changePageDisplay = function(e) {
                    this.setState({
                        showWholePage: e
                    })
                }, t.prototype.resetMenu = function(e) {
                    e.persist(), e.target.classList.contains("tryApps") || e.target.classList.contains("linkButtonMenu") || e.target.classList.contains("linkButtonMenuItem") || e.target.classList.contains("linkButtonFixedHeader-hamburger") || this.setState({
                        showMenuFooter: !1,
                        showMenu: !1
                    })
                }, t.prototype.render = function() {
                    j.setting.Language && j.setting.ParentCultureName && b.localizedStrings.setCurrentCulture(j.setting.Language, j.setting.ParentCultureName);
                    return v.IsIPhoneBrowser() || v.IsMobileAnroidBrowser() || v.IsWindowsPhoneBrowser() ? i.createElement("div", null, i.createElement(g.default, null)) : i.createElement("div", null, this.state.showWholePage && i.createElement("div", {
                        className: "app",
                        onClick: this.resetMenu
                    }, i.createElement(r.default, {
                        changeModalState: this.changeModalState
                    }), i.createElement(s.default, {
                        changeMenuState: this.changeMenuState,
                        showMenu: this.state.showMenu
                    }), i.createElement(l.default, null), i.createElement(u.default, {
                        changeModalState: this.changeModalState
                    }), i.createElement(c.default, {
                        edgeState: this.state.edgeState
                    }), i.createElement(d.default, {
                        edgeState: this.state.edgeState
                    }), i.createElement(p.default, {
                        edgeState: this.state.edgeState
                    }), i.createElement(h.default, null), i.createElement(m.default, null), i.createElement(f.default, {
                        changeMenuState: this.changeFooterMenuState,
                        showMenu: this.state.showMenuFooter
                    }), this.state.showModal && i.createElement(k.default, {
                        changeModalState: this.changeModalState
                    })))
                }, t
            }(i.Component);
        t.default = w
    },
    "./components/Background.tsx": function(e, t, o) {
        "use strict";
        var n, a = this && this.__extends || (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            },
            function(e, t) {
                function o() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
            });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o("../node_modules/react/react.js"),
            r = o("./lib/helper.tsx"),
            s = window,
            l = function(e) {
                function t(t) {
                    var o = e.call(this, t) || this;
                    return o.checkBlendModeSupport = function() {
                        var e = o;
                        if ("CSS" in s && "supports" in s.CSS) {
                            var t = s.CSS.supports("mix-blend-mode", "multiply");
                            e.setState({
                                cssBlendSupport: t
                            })
                        }
                    }, o.state = {
                        cssBlendSupport: !0
                    }, o
                }
                return a(t, e), t.prototype.componentWillMount = function() {
                    this.checkBlendModeSupport()
                }, t.prototype.render = function() {
                    var e = "none";
                    s.innerWidth > 1024 ? e = "desktop" : s.innerWidth > 768 && (e = "tablet");
                    var t = ".png";
                    this.state.cssBlendSupport && (t = ".svg"), "none" != e && (e = "url(" + r.GetImagePath(e + t) + ")");
                    var o = {
                        backgroundImage: e
                    };
                    return i.createElement("div", {
                        className: "landing-background",
                        style: o
                    })
                }, t
            }(i.Component);
        t.default = l
    },
    "./components/FixedHeader.tsx": function(e, t, o) {
        "use strict";
        var n, a = this && this.__extends || (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            },
            function(e, t) {
                function o() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
            });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o("../node_modules/react/react.js"),
            r = o("./strings/localizedStrings.ts"),
            s = o("./lib/helper.tsx"),
            l = o("./components/MenuDropdown.tsx"),
            u = window,
            c = o("../node_modules/classnames/bind.js").bind(),
            d = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.toggleMenu = function() {
                    this.props.changeMenuState(!this.props.showMenu)
                }, t.prototype.toggleMobileMenu = function() {
                    this.props.changeMenuState(!this.props.showMenu)
                }, t.prototype.handleKeyDown = function(e) {
                    27 === e.keyCode ? (this.props.changeMenuState(!1), this.refs.fixedHeaderTryButton.focus()) : 13 === e.keyCode && this.props.changeMenuState(!0)
                }, t.prototype.render = function() {
                    var e = this,
                        t = c("linkButtonFixedHeader-mobileMenu", {
                            "linkButtonFixedHeader-mobileMenu--visible": this.props.showMenu
                        }),
                        o = this.props.showMenu ? "Close '" + r.localizedStrings.get_tryOurAppsText() + "' menu" : "Open '" + r.localizedStrings.get_tryOurAppsText() + "' menu";
                    return i.createElement("header", {
                        className: "fixedHeader",
                        ref: "fixedHeader",
                        onKeyDown: function(t) {
                            return e.handleKeyDown(t)
                        }
                    }, i.createElement("div", {
                        className: "fixedHeaderNav clearfix"
                    }, i.createElement("div", {
                        className: "headerContainer"
                    }, i.createElement("a", {
                        className: "linkButtonFixedHeader",
                        href: "https://outlook.com",
                        onClick: s.SetCookieConsent
                    }, i.createElement("h1", {
                        className: "headerLogo"
                    }, r.localizedStrings.get_OutlookBrandName())), i.createElement("div", {
                        className: "fixedHeaderMenu"
                    }, i.createElement("img", {
                        className: "linkButtonFixedHeader-hamburger",
                        onClick: function() {
                            return e.toggleMobileMenu()
                        },
                        src: s.GetImagePath("hamburger.png"),
                        ref: "menuDropdown",
                        alt: "Menu Dropdown"
                    }), i.createElement("nav", {
                        className: t
                    }, i.createElement("a", {
                        className: "linkButtonFixedHeader",
                        href: u.setting.SignUpUrl,
                        ref: "fixedHeaderSignUpButton",
                        "data-m": '{"cN":"SIGNUP", "sN":"1", "pT":"D"}'
                    }, r.localizedStrings.get_signUpButton()), i.createElement("div", {
                        tabIndex: 0,
                        className: "linkButtonFixedHeader tryApps",
                        ref: "fixedHeaderTryButton",
                        onClick: function() {
                            return e.toggleMenu()
                        },
                        "aria-label": o
                    }, r.localizedStrings.get_tryOurAppsText(), this.props.showMenu && i.createElement(l.default, null)), i.createElement("a", {
                        className: "linkButtonFixedHeader",
                        href: "https://go.microsoft.com/fwlink/?linkid=867851",
                        ref: "fixedHeaderSupportButton",
                        onClick: s.SetCookieConsent
                    }, r.localizedStrings.get_supportText()))), i.createElement("a", {
                        className: "buyO365Button",
                        href: "https://go.microsoft.com/fwlink/?linkid=867852",
                        onClick: s.SetCookieConsent
                    }, r.localizedStrings.get_buyOfficeButton()))))
                }, t
            }(i.Component);
        t.default = d
    },
    "./components/Footer.tsx": function(e, t, o) {
        "use strict";
        var n, a = this && this.__extends || (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            },
            function(e, t) {
                function o() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
            });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o("../node_modules/react/react.js"),
            r = o("./strings/localizedStrings.ts"),
            s = o("./lib/helper.tsx"),
            l = o("./components/MenuDropdown.tsx"),
            u = window,
            c = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.toggleMenu = function() {
                    this.props.changeMenuState(!this.props.showMenu)
                }, t.prototype.handleCreate = function() {
                    window.location.href = u.setting.SignUpUrl, s.SetCookieConsent()
                }, t.prototype.handleKeyDown = function(e) {
                    27 === e.keyCode ? (this.props.changeMenuState(!1), this.refs.fixedHeaderTryButton.focus()) : 13 === e.keyCode && this.props.changeMenuState(!0)
                }, t.prototype.render = function() {
                    var e = this;
                    return i.createElement("div", {
                        className: "landing-section footer",
                        onKeyDown: function(t) {
                            return e.handleKeyDown(t)
                        }
                    }, i.createElement("div", {
                        className: "footerNav clearfix"
                    }, i.createElement("div", {
                        className: "footerNav-contentLeft"
                    }, i.createElement("a", {
                        href: "https://www.microsoft.com"
                    }, i.createElement("img", {
                        className: "footerLogo",
                        src: s.GetImagePath("logo-footer.png"),
                        alt: "Microsoft logo"
                    })), i.createElement("div", {
                        className: "footerMenu"
                    }, i.createElement("a", {
                        className: "linkButtonFixedFooter privacy",
                        href: "https://go.microsoft.com/fwlink/?LinkId=521839",
                        onClick: s.SetCookieConsent
                    }, r.localizedStrings.get_privacyCookie()), i.createElement("a", {
                        className: "linkButtonFixedFooter legal",
                        href: "http://www.microsoft.com/en-us/legal/intellectualproperty/copyright/default.aspx",
                        onClick: s.SetCookieConsent
                    }, r.localizedStrings.get_legalText()), i.createElement("a", {
                        className: "linkButtonFixedFooter legal",
                        href: "http://www.microsoft.com/trademarks",
                        onClick: s.SetCookieConsent
                    }, r.localizedStrings.get_tradeMarksText()), i.createElement("a", {
                        className: "linkButtonFixedFooter legal",
                        href: "http://support.microsoft.com/contactus/",
                        onClick: s.SetCookieConsent
                    }, r.localizedStrings.get_contactUsText())), i.createElement("div", {
                        className: "footerCopyright"
                    }, "© 2018 Microsoft")), i.createElement("div", {
                        className: "footerNav-topMenu"
                    }, i.createElement("a", {
                        className: "linkButtonFixedFooter",
                        href: "https://go.microsoft.com/fwlink/?linkid=867851",
                        onClick: s.SetCookieConsent
                    }, r.localizedStrings.get_supportText()), i.createElement("a", {
                        className: "linkButtonFixedFooter",
                        href: "https://outlook.live.com/owa/?nlp=1&signup=1",
                        onClick: function() {
                            return e.handleCreate()
                        },
                        ref: "fixedHeaderSignUpButton",
                        "data-m": '{"cN":"SIGNUP", "sN":"3", "pT":"D"}'
                    }, r.localizedStrings.get_signUpButton()), i.createElement("div", {
                        className: "linkButtonFixedFooter tryApps",
                        onClick: function() {
                            return e.toggleMenu()
                        },
                        tabIndex: 0,
                        ref: "fixedHeaderTryButton"
                    }, r.localizedStrings.get_tryOurAppsText(), this.props.showMenu && i.createElement(l.default, null)))))
                }, t
            }(i.Component);
        t.default = c
    },
    "./components/Header.tsx": function(e, t, o) {
        "use strict";
        var n, a = this && this.__extends || (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            },
            function(e, t) {
                function o() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
            });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o("../node_modules/react/react.js"),
            r = o("./strings/localizedStrings.ts"),
            s = o("./lib/helper.tsx"),
            l = window,
            u = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a(t, e), t.prototype.handleSignIn = function() {
                    1 == l.setting.ShadowSignInEnabled ? this.props.changeModalState(!0) : (window.location.href = s.GetSignInUrl(), s.SetCookieConsent())
                }, t.prototype.render = function() {
                    var e = this;
                    return i.createElement("div", {
                        className: "landing-section headerHero"
                    }, i.createElement("h1", {
                        className: "headerHero-title"
                    }, r.localizedStrings.get_newPageTitle()), i.createElement("p", {
                        className: "headerHero-subtitle"
                    }, r.localizedStrings.get_newPageDescription()), i.createElement("a", {
                        className: "linkButtonSigninHeader linkButtonSigninHeader--premium",
                        href: l.setting.SignUpUrl,
                        onClick: s.SetCookieConsent,
                        "data-m": '{"cN":"SIGNUP", "sN":"2", "pT":"D"}'
                    }, r.localizedStrings.get_signUpButton()), i.createElement("a", {
                        className: "linkButtonSigninHeader",
                        href: "#",
                        onClick: function() {
                            return e.handleSignIn()
                        },
                        ref: "fixedHeaderSignInButton",
                        "data-m": '{"cN":"SIGNIN", "sN":"2", "pT":"D"}'
                    }, r.localizedStrings.get_signInButton()))
                }, t
            }(i.Component);
        t.default = u
    },
    "./components/MenuDropdown.tsx": function(e, t, o) {
        "use strict";
        var n, a = this && this.__extends || (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            },
            function(e, t) {
                function o() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
            });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o("../node_modules/react/react.js"),
            r = o("./lib/helper.tsx"),
            s = window,
            l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a(t, e), t.prototype.componentDidMount = function() {
                    s.innerWidth > 767 && this.refs.fixedHeaderTryIphoneButton.focus()
                }, t.prototype.handleKeyDown = function(e) {
                    var t = document.activeElement;
                    40 === e.keyCode ? this.refs.fixedHeaderTryIphoneButton == t ? this.refs.fixedHeaderTryAndroidButton.focus() : this.refs.fixedHeaderTryAndroidButton == t && this.refs.fixedHeaderTryWindowsButton.focus() : 38 === e.keyCode && (this.refs.fixedHeaderTryWindowsButton == t ? this.refs.fixedHeaderTryAndroidButton.focus() : this.refs.fixedHeaderTryAndroidButton == t && this.refs.fixedHeaderTryIphoneButton.focus())
                }, t.prototype.render = function() {
                    var e = this;
                    return i.createElement("div", {
                        className: "linkButtonMenu fadeInDown",
                        onKeyDown: function(t) {
                            return e.handleKeyDown(t)
                        }
                    }, i.createElement("a", {
                        className: "linkButtonMenuItem",
                        href: "https://app.adjust.com/q1c6zw?fallback=https://w2.outlook.com/l/mobile?WT.mc_id=Outlook_Front_Door",
                        ref: "fixedHeaderTryIphoneButton",
                        onClick: r.SetCookieConsent,
                        "data-m": '{"cN":"APPSTORE", "sN":"1", "pT":"D"}'
                    }, "iPhone"), i.createElement("a", {
                        className: "linkButtonMenuItem",
                        href: "https://app.adjust.com/4q16sc?fallback=https://w2.outlook.com/l/mobile?WT.mc_id=Outlook_Front_Door",
                        ref: "fixedHeaderTryAndroidButton",
                        onClick: r.SetCookieConsent,
                        "data-m": '{"cN":"PLAYSTORE", "sN":"1", "pT":"D"}'
                    }, "Android"), i.createElement("a", {
                        className: "linkButtonMenuItem",
                        href: "https://www.microsoft.com/en-us/store/p/mail-and-calendar/9wzdncrfhvqm",
                        ref: "fixedHeaderTryWindowsButton",
                        onClick: r.SetCookieConsent,
                        "data-m": '{"cN":"WINSTORE", "sN":"1", "pT":"D"}'
                    }, "Windows 10"))
                }, t
            }(i.Component);
        t.default = l
    },
    "./components/Modal.tsx": function(e, t, o) {
        "use strict";
        var n, a = this && this.__extends || (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            },
            function(e, t) {
                function o() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
            });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o("../node_modules/react/react.js"),
            r = o("./lib/helper.tsx"),
            s = o("./lib/helper.tsx"),
            l = window,
            u = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a(t, e), t.prototype.componentDidMount = function() {
                    this.signInButton.focus()
                }, t.prototype.backgroundClick = function(e) {
                    "modal-overlay" == e.target.className && this.props.changeModalState(!1)
                }, t.prototype.closeClick = function() {
                    this.props.changeModalState(!1)
                }, t.prototype.handleKeyDown = function(e) {
                    27 === e.keyCode && this.props.changeModalState(!1)
                }, t.prototype.render = function() {
                    var e = this;
                    return i.createElement("div", {
                        className: "modal-overlay",
                        onClick: function(t) {
                            return e.backgroundClick(t)
                        },
                        onKeyDown: function(t) {
                            return e.handleKeyDown(t)
                        }
                    }, i.createElement("section", {
                        className: "modal"
                    }, i.createElement("button", {
                        className: "modal-close",
                        "aria-label": "Close",
                        onClick: function() {
                            return e.closeClick()
                        }
                    }, i.createElement("svg", {
                        width: "16px",
                        height: "16px",
                        viewBox: "0 0 16 16",
                        version: "1.1"
                    }, i.createElement("polygon", {
                        id: "close",
                        fill: "#222222",
                        strokeWidth: "1",
                        points: "16 1 15 0 8 7 1 0 0 1 7 8 0 15 1 16 8 9 15 16 16 15 9 8"
                    }))), i.createElement("header", {
                        className: "modal-header"
                    }, "Sign In to Outlook.com with:"), i.createElement("a", {
                        className: "modal-button modal-button--microsoft",
                        href: s.GetSignInUrl(),
                        ref: function(t) {
                            e.signInButton = t
                        },
                        onClick: r.SetCookieConsent
                    }, i.createElement("div", {
                        className: "button-logo"
                    }, i.createElement("img", {
                        width: "22px",
                        height: "22px",
                        src: r.GetImagePath("modal-msft.png"),
                        "aria-labelledby": "button-ms-signin",
                        alt: "Sign in with Microsoft Account"
                    })), i.createElement("div", {
                        className: "button-text",
                        id: "button-ms-signin",
                        "aria-label": "Sign in with Microsoft Account"
                    }, "Microsoft Account")), i.createElement("div", {
                        className: "modal-buttonSeparator"
                    }, "or"), i.createElement("a", {
                        className: "modal-button modal-button--google",
                        href: s.GetShawdowSignInUrl(),
                        onClick: r.SetCookieConsent
                    }, i.createElement("div", {
                        className: "button-logo"
                    }, i.createElement("img", {
                        width: "21px",
                        height: "22px",
                        src: r.GetImagePath("modal-google.png"),
                        "aria-labelledby": "button-google-signin",
                        alt: "Sign in with Google account"
                    })), i.createElement("div", {
                        className: "button-text",
                        id: "button-google-signin",
                        "aria-label": "Sign in with Google account"
                    }, "Google Account")), i.createElement("footer", {
                        className: "modal-footer"
                    }, "Don't have an account? ", i.createElement("a", {
                        href: l.setting.SignUpUrl
                    }, "Sign Up"))))
                }, t
            }(i.Component);
        t.default = u
    },
    "./components/OfficeHeader.tsx": function(e, t, o) {
        "use strict";
        var n, a = this && this.__extends || (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            },
            function(e, t) {
                function o() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
            });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o("../node_modules/react/react.js"),
            r = o("./strings/localizedStrings.ts"),
            s = o("./lib/helper.tsx"),
            l = window,
            u = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a(t, e), t.prototype.handleSignIn = function() {
                    !0 === l.setting.ShadowSignInEnabled ? this.props.changeModalState(!0) : (window.location.href = s.GetSignInUrl(), s.SetCookieConsent())
                }, t.prototype.render = function() {
                    var e = this;
                    return i.createElement("nav", {
                        className: "officeHeader"
                    }, i.createElement("div", {
                        className: "officeHeaderNav clearfix"
                    }, i.createElement("div", {
                        className: "headerContainer"
                    }, i.createElement("a", {
                        href: "https://www.microsoft.com"
                    }, i.createElement("img", {
                        className: "microsoftLogo",
                        src: s.GetImagePath("logo-header.png"),
                        alt: "Microsoft"
                    })), i.createElement("div", {
                        className: "officeHeaderMenu"
                    }, i.createElement("a", {
                        className: "linkButtonFixedHeader office-signIn",
                        onClick: function() {
                            return e.handleSignIn()
                        },
                        ref: "officeHeaderSignINpButton",
                        "data-m": '{"cN":"SIGNIN", "sN":"1", "pT":"D"}'
                    }, r.localizedStrings.get_signInButton())))))
                }, t
            }(i.Component);
        t.default = u
    },
    "./components/SectionFive.tsx": function(e, t, o) {
        "use strict";
        var n, a = this && this.__extends || (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            },
            function(e, t) {
                function o() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
            });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o("../node_modules/react/react.js"),
            r = o("./strings/localizedStrings.ts"),
            s = o("./lib/helper.tsx"),
            l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a(t, e), t.prototype.render = function() {
                    return i.createElement("div", {
                        className: "landing-section sectionFive"
                    }, i.createElement("div", {
                        className: "landing-sectionCopy"
                    }, i.createElement("h2", {
                        className: "section-header sectionFour-header"
                    }, r.localizedStrings.get_sectionFiveTitle()), i.createElement("div", {
                        className: "landing-sectionImgs"
                    }, i.createElement("div", {
                        className: "section-subheader sectionFive-subheader"
                    }, i.createElement("p", null, r.localizedStrings.get_sectionFiveDescription()), i.createElement("a", {
                        className: "linkButtonSigninHeader linkButtonSigninHeader--premium",
                        href: "https://go.microsoft.com/fwlink/?linkid=867852",
                        onClick: s.SetCookieConsent
                    }, r.localizedStrings.get_sectionFiveButton())))))
                }, t
            }(i.Component);
        t.default = l
    },
    "./components/SectionFour.tsx": function(e, t, o) {
        "use strict";
        var n, a = this && this.__extends || (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            },
            function(e, t) {
                function o() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
            });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o("../node_modules/react/react.js"),
            r = o("./strings/localizedStrings.ts"),
            s = o("./lib/helper.tsx"),
            l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a(t, e), t.prototype.render = function() {
                    return i.createElement("div", {
                        className: "landing-section sectionFour"
                    }, i.createElement("div", {
                        className: "landing-sectionCopy"
                    }, i.createElement("h2", {
                        className: "section-header sectionFour-header"
                    }, r.localizedStrings.get_familyMessageTitle())), i.createElement("div", {
                        className: "landing-sectionImgs"
                    }, i.createElement("a", {
                        href: "https://app.adjust.com/q1c6zw?fallback=https://w2.outlook.com/l/mobile?WT.mc_id=Outlook_Front_Door",
                        onClick: s.SetCookieConsent,
                        className: "outlookAppstore",
                        "data-m": '{"cN":"APPSTORE", "sN":"2", "pT":"D"}'
                    }, i.createElement("img", {
                        className: "outlookAppstore landing-sectionImg",
                        src: s.GetImagePath("apps-applestore.svg"),
                        alt: r.localizedStrings.get_appStoreImageText()
                    })), i.createElement("a", {
                        href: "https://app.adjust.com/4q16sc?fallback=https://w2.outlook.com/l/mobile?WT.mc_id=Outlook_Front_Door",
                        onClick: s.SetCookieConsent,
                        className: "outlookPlaystore",
                        "data-m": '{"cN":"PLAYSTORE", "sN":"2", "pT":"D"}'
                    }, i.createElement("img", {
                        className: "outlookPlaystore landing-sectionImg",
                        src: s.GetImagePath("apps-googleplay.png"),
                        alt: r.localizedStrings.get_googlePlayImageText()
                    })), i.createElement("a", {
                        href: "https://www.microsoft.com/en-us/store/p/mail-and-calendar/9wzdncrfhvqm",
                        onClick: s.SetCookieConsent,
                        className: "outlookWinstore",
                        "data-m": '{"cN":"WINSTORE", "sN":"2", "pT":"D"}'
                    }, i.createElement("img", {
                        className: "outlookWinstore landing-sectionImg",
                        src: s.GetImagePath("apps-winstore.png"),
                        alt: r.localizedStrings.get_windowsStoreImageText()
                    }))))
                }, t
            }(i.Component);
        t.default = l
    },
    "./components/SectionOne.tsx": function(e, t, o) {
        "use strict";
        var n, a = this && this.__extends || (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            },
            function(e, t) {
                function o() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
            });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o("../node_modules/react/react.js"),
            r = o("./strings/localizedStrings.ts"),
            s = o("./lib/helper.tsx"),
            l = window,
            u = o("../node_modules/classnames/bind.js").bind(),
            c = function(e) {
                function t(t) {
                    var o = e.call(this, t) || this;
                    return o.reverseEnabled = !1, o.handleScroll = function() {
                        var e = .7 * l.innerHeight > o.refs.targetDiv.getBoundingClientRect().top;
                        o.state.inView !== e && o.setState({
                            inView: e
                        })
                    }, o.renderImages = function() {
                        var e = u("outlookCalendarScreen", "landing-sectionImg", {
                                rotateInLeft: o.state.inView && !o.props.edgeState,
                                rotateOutLeft: !o.state.inView && o.reverseEnabled && !o.props.edgeState
                            }),
                            t = u("outlookIphoneAppScreen", "landing-sectionImg", {
                                rotateInRight: o.state.inView && !o.props.edgeState,
                                rotateOutRight: !o.state.inView && o.reverseEnabled && !o.props.edgeState
                            });
                        return o.props.edgeState ? i.createElement("div", null, i.createElement("img", {
                            className: e,
                            src: s.GetImagePath("Edge_surface.png"),
                            alt: "Outlook Web"
                        }), i.createElement("img", {
                            className: t,
                            src: s.GetImagePath("Edge_iphone.png"),
                            alt: "Outlook on iPhone"
                        })) : i.createElement("div", null, i.createElement("img", {
                            className: e,
                            src: s.GetImagePath("upfront_outlookWeb.png"),
                            alt: "Outlook Web"
                        }), i.createElement("img", {
                            className: t,
                            src: s.GetImagePath("upfront_phoneEmail.png"),
                            alt: "Outlook on iPhone"
                        }))
                    }, o.state = {
                        inView: !1
                    }, o
                }
                return a(t, e), t.prototype.componentDidMount = function() {
                    l.addEventListener("scroll", this.handleScroll)
                }, t.prototype.componentWillUnmount = function() {
                    l.removeEventListener("scroll", this.handleScroll)
                }, t.prototype.componentWillUpdate = function(e) {
                    e.inView && (this.reverseEnabled = !0)
                }, t.prototype.render = function() {
                    var e = u("landing-section", "sectionOne", {
                        noAnimation: this.props.edgeState,
                        animation: !this.props.edgeState
                    });
                    return i.createElement("section", {
                        ref: "targetDiv",
                        className: e
                    }, this.renderImages(), i.createElement("div", {
                        className: "landing-sectionCopy"
                    }, i.createElement("h2", {
                        className: "section-header sectionOne-header"
                    }, r.localizedStrings.get_sectionOneTitle()), i.createElement("div", {
                        className: "section-subheader sectionOne-subheader"
                    }, i.createElement("p", null, r.localizedStrings.get_sectionOneDescription()))))
                }, t
            }(i.Component);
        t.default = c
    },
    "./components/SectionThree.tsx": function(e, t, o) {
        "use strict";
        var n, a = this && this.__extends || (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            },
            function(e, t) {
                function o() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
            });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o("../node_modules/react/react.js"),
            r = o("./strings/localizedStrings.ts"),
            s = o("./lib/helper.tsx"),
            l = window,
            u = o("../node_modules/classnames/bind.js").bind(),
            c = function(e) {
                function t(t) {
                    var o = e.call(this, t) || this;
                    return o.reverseEnabled = !1, o.renderImages = function() {
                        var e = u("outlookAndroidScreen", "landing-sectionImg", {
                            rotateInAndriod: o.state.inView && !o.props.edgeState,
                            rotateOutAndriod: !o.state.inView && o.reverseEnabled && !o.props.edgeState
                        });
                        return o.props.edgeState ? i.createElement("img", {
                            className: e,
                            src: s.GetImagePath("Edge_Android.png"),
                            alt: "Outlook on Android"
                        }) : i.createElement("img", {
                            className: e,
                            src: s.GetImagePath("upfront_phoneAndroid.png"),
                            alt: "Outlook on Android"
                        })
                    }, o.handleScroll = function() {
                        var e = .7 * l.innerHeight > o.refs.targetDiv.getBoundingClientRect().top;
                        o.state.inView !== e && o.setState({
                            inView: e
                        })
                    }, o.state = {
                        inView: !1
                    }, o
                }
                return a(t, e), t.prototype.componentDidMount = function() {
                    l.addEventListener("scroll", this.handleScroll)
                }, t.prototype.componentWillUnmount = function() {
                    l.removeEventListener("scroll", this.handleScroll)
                }, t.prototype.componentWillUpdate = function(e) {
                    e.inView && (this.reverseEnabled = !0)
                }, t.prototype.render = function() {
                    var e = u("landing-section", "sectionThree", {
                        noAnimation: this.props.edgeState,
                        animation: !this.props.edgeState
                    });
                    return i.createElement("section", {
                        ref: "targetDiv",
                        className: e
                    }, i.createElement("div", {
                        className: "landing-sectionCopy"
                    }, i.createElement("h2", {
                        className: "section-header sectionThree-header"
                    }, r.localizedStrings.get_sectionThreeTitle()), i.createElement("div", {
                        className: "section-subheader sectionThree-subheader"
                    }, i.createElement("p", null, r.localizedStrings.get_sectionThreeDescription()))), this.renderImages())
                }, t
            }(i.Component);
        t.default = c
    },
    "./components/SectionTwo.tsx": function(e, t, o) {
        "use strict";
        var n, a = this && this.__extends || (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            },
            function(e, t) {
                function o() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
            });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o("../node_modules/react/react.js"),
            r = o("./strings/localizedStrings.ts"),
            s = o("./lib/helper.tsx"),
            l = window,
            u = o("../node_modules/classnames/bind.js").bind(),
            c = function(e) {
                function t(t) {
                    var o = e.call(this, t) || this;
                    return o.reverseEnabled = !1, o.renderImages = function() {
                        var e = u("outlookTabletScreen", "landing-sectionImg", {
                            rotateInRightX: o.state.inView && !o.props.edgeState,
                            rotateOutRightX: !o.state.inView && o.reverseEnabled && !o.props.edgeState
                        });
                        return o.props.edgeState ? i.createElement("img", {
                            className: e,
                            src: s.GetImagePath("Edge_iPad.png"),
                            alt: "Outlook Calendar on Tablet"
                        }) : i.createElement("img", {
                            className: e,
                            src: s.GetImagePath("upfront_outlookCalendar.png"),
                            alt: "Outlook Calendar on Tablet"
                        })
                    }, o.handleScroll = function() {
                        var e = .7 * l.innerHeight > o.refs.targetDiv.getBoundingClientRect().top;
                        o.setState({
                            inView: e
                        })
                    }, o.state = {
                        inView: !1
                    }, o
                }
                return a(t, e), t.prototype.componentDidMount = function() {
                    l.addEventListener("scroll", this.handleScroll)
                }, t.prototype.componentWillUnmount = function() {
                    l.removeEventListener("scroll", this.handleScroll)
                }, t.prototype.componentWillUpdate = function(e) {
                    e.inView && (this.reverseEnabled = !0)
                }, t.prototype.render = function() {
                    var e = u("landing-section", "sectionTwo", {
                        noAnimation: this.props.edgeState,
                        animation: !this.props.edgeState
                    });
                    return i.createElement("section", {
                        ref: "targetDiv",
                        className: e
                    }, this.renderImages(), i.createElement("div", {
                        className: "landing-sectionCopy"
                    }, i.createElement("h2", {
                        className: "section-header sectionTwo-header"
                    }, r.localizedStrings.get_setctionTwoTitle()), i.createElement("div", {
                        className: "section-subheader sectionTwo-subheader"
                    }, i.createElement("p", null, r.localizedStrings.get_sectionTwoDescription()))))
                }, t
            }(i.Component);
        t.default = c
    },
    "./components/TNarrow.tsx": function(e, t, o) {
        "use strict";
        var n, a = this && this.__extends || (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            },
            function(e, t) {
                function o() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
            });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o("../node_modules/react/react.js"),
            r = o("./strings/localizedStrings.ts"),
            s = o("./lib/helper.tsx"),
            l = window,
            u = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a(t, e), t.prototype.render = function() {
                    s.IsWindowsPhoneBrowser() && (window.location.href = s.GetSignInUrl());
                    var e = s.GetImagePath("apps-applestore.svg"),
                        t = '{"cN":"APPSTORE", "sN":"4", "pT":"N"}';
                    return s.IsMobileAnroidBrowser() && (e = s.GetImagePath("apps-googleplay.png"), t = '{"cN":"PLAYSTORE", "sN":"4", "pT":"N"}'), i.createElement("div", {
                        className: "tnarrowDiv"
                    }, i.createElement("div", {
                        className: "tnarrowMain"
                    }, i.createElement("img", {
                        className: "tnarrowAppIcon",
                        src: s.GetImagePath("landing-outlookappicon.png")
                    }), i.createElement("div", {
                        className: "tnarrowBrand"
                    }, r.localizedStrings.get_OutlookBrandText()), i.createElement("a", {
                        href: "https://aka.ms/mvs52s",
                        "data-m": t
                    }, i.createElement("img", {
                        className: "tnarrowStoreIcon",
                        src: e,
                        alt: r.localizedStrings.get_OutlookAppStoreText()
                    })), i.createElement("div", null, i.createElement("a", {
                        className: "tnarrowButton",
                        href: s.GetSignInUrl(),
                        "data-m": '{"cN":"SIGNIN", "sN":"4", "pT":"N"}'
                    }, r.localizedStrings.get_signInButton())), i.createElement("div", null, i.createElement("div", {
                        className: "tnarrowSignupText"
                    }, r.localizedStrings.get_SignUpTextTNarrow(), i.createElement("a", {
                        className: "tnarrowSignupLink",
                        href: l.setting.SignUpUrl,
                        "data-m": '{"cN":"SIGNUP", "sN":"4", "pT":"N"}'
                    }, r.localizedStrings.get_signUpButton())))))
                }, t
            }(i.Component);
        t.default = u
    },
    "./css/style.less": function(e, t, o) {
        var n = o("../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!../node_modules/postcss-loader/lib/index.js!./css/style.less");
        "string" == typeof n && (n = [
            [e.i, n, ""]
        ]);
        var a = {
            hmr: !0,
            transform: void 0
        };
        o("../node_modules/style-loader/lib/addStyles.js")(n, a);
        n.locals && (e.exports = n.locals)
    },
    "./index.tsx": function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o("../node_modules/react/react.js"),
            a = o("../node_modules/react-dom/index.js");
        o("../node_modules/es6-promise/dist/es6-promise.js").polyfill();
        var i = o("./components/App.tsx");
        a.render(n.createElement(i.default, null), document.querySelector(".landing"))
    },
    "./lib/helper.tsx": function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o("../node_modules/react/react.js"),
            a = window;

        function i() {
            return r(a.setting.SignInUrl)
        }

        function r(e) {
            var t = -1 == window.location.href.indexOf("?") ? "?" : "&";
            e.indexOf("&isc=1") && (e = e.replace("&isc=1", ""));
            var o = e.substr(e.indexOf("?") + 1);
            return window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search + t + o + window.location.hash
        }
        t.HandleNewLine = function(e) {
            return e.split("\n").map(function(e) {
                return n.createElement("span", null, e, n.createElement("br", null))
            })
        }, t.GetImagePath = function(e) {
            return null == e ? null : a.setting.ImageRoot + e.toLowerCase()
        }, t.GetSignInUrl = i, t.GetSilentAuthSignInUrl = function() {
            return r(a.setting.SilentAuthRedirectUrl)
        }, t.IsIPhoneBrowser = function() {
            return !(!navigator.userAgent || -1 == navigator.userAgent.indexOf("iPhone"))
        }, t.IsMobileAnroidBrowser = function() {
            return !(!navigator.userAgent || -1 == navigator.userAgent.indexOf("Android") || -1 == navigator.userAgent.indexOf("Mobile"))
        }, t.IsWindowsPhoneBrowser = function() {
            return !(!navigator.userAgent || -1 == navigator.userAgent.indexOf("Windows Phone"))
        };
        var s = a.mscc;
        t.SetCookieConsent = function() {
            s && !s.hasConsent() && s.setConsent()
        }, t.GetShawdowSignInUrl = function() {
            var e = i();
            return e.indexOf("isc=1") >= 0 ? i().replace("isc=1", "isc=2") : e += "&isc=2"
        }
    },
    "./silentAuth/awaLogger.ts": function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = window,
            a = 0;
        t.traceStartSilentAuth = function() {
            a = Date.now()
        }, t.traceSilentAuthTimeOut = function() {
            if (n.awa) {
                var e = {
                    behavior: n.awa.behavior.COMPLETEPROCESS,
                    actionType: "CL",
                    contentTags: {
                        scn: "silentAuth",
                        scnstp: "timeout:" + (Date.now() - a)
                    }
                };
                n.awa.ct.captureContentPageAction(e)
            }
        }, t.traceSilentAuthResponse = function(e) {
            if (n.awa) {
                var t = {
                    behavior: n.awa.behavior.COMPLETEPROCESS,
                    actionType: "CL",
                    contentTags: {
                        scn: "silentAuth",
                        scnstp: "response:" + e + ":" + (Date.now() - a)
                    }
                };
                n.awa.ct.captureContentPageAction(t)
            }
        }, t.traceSilentAuthResponseTimeout = function(e) {
            if (n.awa) {
                var t = {
                    behavior: n.awa.behavior.COMPLETEPROCESS,
                    actionType: "CL",
                    contentTags: {
                        scn: "silentAuth",
                        scnstp: "responseTimeout:" + e + ":" + (Date.now() - a)
                    }
                };
                n.awa.ct.captureContentPageAction(t)
            }
        }
    },
    "./silentAuth/silentAuth.ts": function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o("./lib/helper.tsx"),
            a = o("./silentAuth/awaLogger.ts"),
            i = 500,
            r = null,
            s = !1;

        function l(e) {
            if (e.origin == window.location.origin && e.data && e.data.split) {
                var t = e.data.split(":"),
                    o = t[0],
                    i = t[1];
                "backgroundAuthResponse" == o && (1 == s ? a.traceSilentAuthResponseTimeout(i) : (a.traceSilentAuthResponse(i), "0" == i && (window.location.href = n.GetSilentAuthSignInUrl())), u())
            }
        }

        function u() {
            r && (window.document.body.removeChild(r), r = null, window.document.removeEventListener("message", l))
        }
        t.trySilentAuth = function(e, t, o) {
            a.traceStartSilentAuth(), (r = window.document.createElement("iframe")).style.display = "none", window.document.body.appendChild(r), window.addEventListener("message", l, !1), r.src = t;
            var n = i;
            o && (n = o), window.setTimeout(function() {
                a.traceSilentAuthTimeOut(), s = !0, e(!0), u()
            }, n)
        }
    },
    "./strings/LandingPageStrings.ts": function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.LandingPageStrings = {
            AppStore_Image_Text: {
                af: "Toepassingwinkel-skakel",
                am: "የመተግበሪያ ማከማቻ አገናኝ",
                ar: "ارتباط متجر التطبيقات",
                "as-IN": "এপ্প্‌ ষ্ট’ৰ লিংক",
                "az-Latn-AZ": "Proqram mağazası keçidi",
                "be-BY": "Спасылка на App store",
                bg: "Връзка към магазина за приложения",
                "bn-BD": "অ্যাপ স্টোরের লিঙ্ক",
                "bn-IN": "অ্যাপ স্টোর লিঙ্ক",
                "bs-Latn-BA": "Veza pohrane aplikacije",
                "ca-ES-valencia": "Enllaç de la botiga d'aplicacions",
                ca: "Enllaç de la botiga d'aplicacions",
                cs: "Odkaz na App Store",
                cy: "Dolen siop apiau",
                da: "Link til App Store",
                de: "App Store-Link",
                el: "Σύνδεση στο App Store",
                "en-GB": "App store link",
                en: "Download on the App Store",
                "es-MX": "Vínculo de la tienda de aplicaciones",
                es: "Vínculo de la tienda de aplicaciones",
                et: "App Store'i link",
                eu: "App Store dendarako esteka",
                fa: "پیوند فروشگاه برنامه",
                fi: "Sovelluskaupan linkki",
                fil: "Link sa app store",
                "fr-CA": "Lien vers le magasin d’applications",
                fr: "Lien vers le magasin d’applications",
                "ga-IE": "Nasc App Store",
                "gd-GB": "Ceangal ris an App Store",
                gl: "Ligazón de App Store",
                gu: "એપ્લિકેશન સ્ટોર લિંક",
                "ha-Latn-NG": "Mahaɗin App store",
                he: "קישור ל- App Store",
                hi: "ऐप स्टोर लिंक",
                hr: "Veza na trgovinu aplikacija",
                hu: "Az App Store hivatkozása",
                hy: "Գործադիրների խանութի հղում",
                id: "Tautan bursa aplikasi",
                is: "Tengill í App Store",
                it: "Collegamento all'App Store",
                ja: "App Store のリンク",
                ka: "App store-ის ბმული",
                kk: "App store дүкенінің сілтемесі",
                "km-KH": "តំណទីផ្សារកម្មវិធី",
                kn: "ಅಪ್ಲಿ ಸ್ಟೋರ್ ಲಿಂಕ್",
                ko: "앱 스토어 링크",
                kok: "ऍप्लिकेशन सांठवण लिंक",
                ky: "Кайрылма дүкөнүнүн шилтемеси",
                "lb-LU": "App-Store-Link",
                "lo-LA": "​ລິ້ງຮ້ານ​ຄ້າ​ແອັບ",
                lt: "Programų parduotuvės saitas",
                lv: "Lietojumprogrammu veikala saite",
                "mi-NZ": "Hono pātaka taupānga",
                mk: "Врска до App Store",
                ml: "ആപ്പ് സ്റ്റോർ ലിങ്ക്",
                "mn-MN": "Програмын дэлгүүрийн холбоос",
                mr: "अनुप्रयोग संग्रह लिंक",
                ms: "Pautan gedung aplikasi",
                "mt-MT": "Link għall-ħanut tal-applikazzjonijiet",
                "ne-NP": "एप भण्डार लिङ्क",
                nl: "Koppeling naar de App Store",
                "nn-NO": "Kopling til App Store",
                no: "App Store-kobling",
                or: "ଆପ୍ଲିକେସନ୍‌ ଷ୍ଟୋର୍‌ ଲିଙ୍କ୍‌",
                "pa-IN": "ਐਪਲੀਕੇਸ਼ਨ ਸਟੋਰ ਲਿੰਕ",
                pl: "Link do sklepu z aplikacjami",
                prs: "پیوند فروشگاه برنامه",
                "pt-PT": "Ligação para a loja de aplicações",
                pt: "Link da App Store",
                "quz-PE": "Llamkana tienda tupana",
                ro: "Link la App Store",
                ru: "Ссылка на магазин App store",
                "sd-Arab-PK": "ائپ اسٽور جي ڪڙي",
                "si-LK": "යෙදුම් අලෙවිසැල් සබැඳිය",
                sk: "Prepojenie na App Store",
                sl: "Povezava trgovine z aplikacijami",
                sq: "Lidhja e dyqanit të aplikacioneve",
                "sr-Cyrl-BA": "Веза складишта апликације",
                "sr-Cyrl": "Веза складишта апликације",
                sr: "Veza skladišta aplikacije",
                sv: "App Store-länk",
                sw: "Kiungo cha duka la programu",
                ta: "App store இணைப்பு",
                te: "అనువర్తన స్టోర్ లింక్",
                th: "ลิงก์ App Store",
                "tk-TM": "App store bagy",
                tr: "App Store bağlantısı",
                tt: "Кибет кушымталарына сылтама",
                "ug-CN": "ئەپ دۇكىنى ئۇلانمىسى",
                uk: "Посилання на App Store",
                ur: "ایپ اسٹور کا ربط",
                uz: "App Store havolasi",
                vi: "Liên kết App store",
                "zh-Hans": "App Store 链接",
                "zh-Hant": "App Store 連結"
            },
            BlogButton_Text: {
                af: "Blog",
                am: "ጦማር",
                ar: "مدونة",
                "as-IN": "ব্লগ",
                "az-Latn-AZ": "Bloq",
                "be-BY": "Блог",
                bg: "Блог",
                "bn-BD": "ব্লগ",
                "bn-IN": "ব্লগ",
                "bs-Latn-BA": "Blog",
                "ca-ES-valencia": "Blog",
                ca: "Blog",
                cs: "Blog",
                cy: "Blog",
                da: "Blog",
                de: "Blog",
                el: "Ιστολόγιο",
                "en-GB": "Blog",
                en: "Blog",
                "es-MX": "Blog",
                es: "Blog",
                et: "Ajaveeb",
                eu: "Bloga",
                fa: "وبلاگ",
                fi: "Blogi",
                fil: "Blog",
                "fr-CA": "Blogue",
                fr: "Blog",
                "ga-IE": "Blag",
                "gd-GB": "Bloga",
                gl: "Blog",
                gu: "બ્લૉગ",
                "ha-Latn-NG": "Buloga",
                he: "בלוג",
                hi: "ब्लॉग",
                hr: "Blog",
                hu: "Blog",
                hy: "Բլոգ",
                id: "Blog",
                is: "Blogg",
                it: "Blog",
                ja: "ブログ",
                ka: "ბლოგი",
                kk: "Блог",
                "km-KH": "កំណត់ហេតុបណ្ដាញ",
                kn: "ಬ್ಲಾಗ್",
                ko: "블로그",
                kok: "ब्लॉग",
                ky: "Блог",
                "lb-LU": "Blog",
                "lo-LA": "ບລັອກຂໍ້​ມູນ",
                lt: "Tinklaraštis",
                lv: "Emuārs",
                "mi-NZ": "Rangitaki",
                mk: "Блог",
                ml: "ബ്ലോഗ്",
                "mn-MN": "Блог",
                mr: "ब्लॉग",
                ms: "Blog",
                "mt-MT": "Blogg",
                "ne-NP": "ब्लग",
                nl: "Blog",
                "nn-NO": "Blogg",
                no: "Blogg",
                or: "ବ୍ଲଗ୍",
                "pa-IN": "ਬਲੌਗ",
                pl: "Blog",
                prs: "بلاگ",
                "pt-PT": "Blogue",
                pt: "Blog",
                "qps-ploc": "Blog",
                "qps-ploca": "Blog",
                "qps-plocm": "Blog",
                "quz-PE": "Blog",
                ro: "Blog",
                ru: "Блог",
                "sd-Arab-PK": "بلاگ",
                "si-LK": "බ්ලොගය",
                sk: "Blog",
                sl: "Spletni dnevnik",
                sq: "Revista në ueb",
                "sr-Cyrl-BA": "Блог",
                "sr-Cyrl": "Блог",
                sr: "Blog",
                sv: "Blogg",
                sw: "Blogu",
                ta: "வலைப்பதிவு",
                te: "బ్లాగ్",
                th: "บล็อก",
                "tk-TM": "Blog",
                tr: "Blog",
                tt: "Блог",
                "ug-CN": "بىلوگ",
                uk: "Блоґ",
                ur: "بلاگ",
                uz: "Blog",
                vi: "Blog",
                "zh-Hans": "博客",
                "zh-Hant": "部落格"
            },
            Buy_O365_Text: {
                af: "Koop Office 365",
                am: "Office 365 ይግዙ",
                ar: "شراء Office 365",
                "as-IN": "Office 365 ক্ৰয় কৰক",
                "az-Latn-AZ": "Office 365 alın",
                "be-BY": "Купіць Office 365",
                bg: "Закупуване на Office 365",
                "bn-BD": "Office 365 কিনুন",
                "bn-IN": "Office 365 কিনুন",
                "bs-Latn-BA": "Kupite Office 365",
                "ca-ES-valencia": "Compra l'Office 365",
                ca: "Compreu l'Office 365",
                cs: "Kupte si Office 365",
                cy: "Prynu Office 365",
                da: "Køb Office 365",
                de: "Office 365 kaufen",
                el: "Αγορά του Office 365",
                "en-GB": "Buy Office 365",
                en: "Buy Office 365",
                "es-MX": "Comprar Office 365",
                es: "Comprar Office 365",
                et: "Ostke Office 365",
                eu: "Erosi Office 365",
                fa: "خریداری Office 365",
                fi: "Osta Office 365",
                fil: "Bilhin ang Office 365",
                "fr-CA": "Acheter Office 365",
                fr: "Acheter Office 365",
                "ga-IE": "Ceannaigh Office 365",
                "gd-GB": "Ceannaich Office 365",
                gl: "Comprar Office 365",
                gu: "Office 365 ખરીદો",
                "ha-Latn-NG": "Sayi Office 365",
                he: "קנה את Office 365",
                hi: "Office 365 खरीदें",
                hr: "Kupite Office 365",
                hu: "Az Office 365 megvásárlása",
                hy: "Գնել Office 365-ը",
                id: "Beli Office 365",
                is: "Kaupa Office 365",
                it: "Acquista Office 365",
                ja: "Office 365 を購入",
                ka: "შეიძინეთ Office 365",
                kk: "Office 365 қызметін сатып алу",
                "km-KH": "ទិញ Office 365",
                kn: "Office 365 ಖರೀದಿಸಿ",
                ko: "Office 365 구입",
                kok: "Office 365 विकतें घेवचें",
                ky: "Office 365 сатып алуу",
                "lb-LU": "Office 365 kafen",
                "lo-LA": "ຊື້ Office 365",
                lt: "Įsigyti „Office 365“",
                lv: "Office 365 iegāde",
                "mi-NZ": "Hokona te Office 365",
                mk: "Купете Office 365",
                ml: "Office 365 വാങ്ങുക",
                "mn-MN": "Office 365 худалдаж авах",
                mr: "Office 365 खरेदी करा",
                ms: "Beli Office 365",
                "mt-MT": "Ixtri Office 365",
                "ne-NP": "Office 365 किन्नुहोस्",
                nl: "Office 365 kopen",
                "nn-NO": "Kjøp Office 365",
                no: "Kjøp Office 365",
                or: "Office 365 କ୍ରୟ କରନ୍ତୁ",
                "pa-IN": "Office 365 ਨੂੰ ਖਰੀਦੋ",
                pl: "Kup usługę Office 365",
                prs: "خریداری Office 365",
                "pt-PT": "Comprar o Office 365",
                pt: "Comprar o Office 365",
                "quz-PE": "Office 365 kaqta rantiy",
                ro: "Cumpărați Office 365",
                ru: "Купить Office 365",
                "sd-Arab-PK": "Office 365 خريديو",
                "si-LK": "Office 365 මිල දී ගන්න",
                sk: "Kúpiť služby Office 365",
                sl: "Kupite Office 365",
                sq: "Bli Office 365",
                "sr-Cyrl-BA": "Купите Office 365",
                "sr-Cyrl": "Купите Office 365",
                sr: "Kupite Office 365",
                sv: "Köp Office 365",
                sw: "Nunua Office 365",
                ta: "Office 365 வாங்குக",
                te: "Office 365ని కొనుగోలు చేయండి",
                th: "ซื้อ Office 365",
                "tk-TM": "Office 365 satyn al",
                tr: "Office 365'i satın alın",
                tt: "Office 365-ны сатып алу",
                "ug-CN": "Office 365 نى سېتىۋېلىش",
                uk: "Придбати Office 365",
                ur: "Office 365 خریدیں",
                uz: "Office 365 sotib olish",
                vi: "Mua Office 365",
                "zh-Hans": "购买 Office 365",
                "zh-Hant": "購買 Office 365"
            },
            ContactUs_Text: {
                af: "Kontak ons",
                am: "እኛን ያነጋግሩ",
                ar: "اتصل بنا",
                "as-IN": "আমাক যোগাযোগ কৰক",
                "az-Latn-AZ": "Bizimlə Əlaqə Saxlayın",
                "be-BY": "Звяжыцеся з намі",
                bg: "Връзка с нас",
                "bn-BD": "আমাদের সাথে যোগাযোগ করুন",
                "bn-IN": "আমাদের সাথে যোগাযোগ করুন",
                "bs-Latn-BA": "Kontaktirajte nas",
                "ca-ES-valencia": "Poseu-vos en contacte amb nosaltres.",
                ca: "Poseu-vos en contacte amb nosaltres.",
                cs: "Kontaktujte nás",
                cy: "Cysylltu â Ni",
                da: "Kontakt os",
                de: "So erreichen Sie uns",
                el: "Επικοινωνήστε μαζί μας",
                "en-GB": "Contact Us",
                en: "Contact us",
                "es-MX": "Ponte en contacto con nosotros",
                es: "Póngase en contacto con nosotros",
                et: "Kontaktteave",
                eu: "Jarri gurekin harremanetan",
                fa: "تماس با ما",
                fi: "Ota yhteyttä",
                fil: "Makipag-ugnayan sa Amin",
                "fr-CA": "Nous contacter",
                fr: "Nous contacter",
                "ga-IE": "Déan teagmháil linn",
                "gd-GB": "Cuir fios thugainn",
                gl: "Contacto",
                gu: "અમારો સંપર્ક કરો",
                "ha-Latn-NG": "Tuntuɓe Mu",
                he: "צור קשר",
                hi: "हमसे संपर्क करें",
                hr: "Obratite nam se",
                hu: "Elérhetőségünk",
                hy: "Կապվել մեզ հետ",
                id: "Hubungi Kami",
                is: "Hafa samband",
                it: "Contattaci",
                ja: "お問い合わせ",
                ka: "დაგვიკავშირდით",
                kk: "Бізге хабарласыңыз",
                "km-KH": "ទាក់ទងយើងខ្ញុំ",
                kn: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
                ko: "연락처",
                kok: "आमकां संपर्क करचो",
                ky: "Бизге кайрылыңыз",
                "lb-LU": "Kontaktéiert eis",
                "lo-LA": "​ຕິດ​ຕໍ່​ຫາ​ພວກ​ເຮົາ",
                lt: "Susisiekite su mumis",
                lv: "Sazināties ar mums",
                "mi-NZ": "Me whakapā mai",
                mk: "Контактирајте со нас",
                ml: "ഞങ്ങളെ ബന്ധപ്പെടുക",
                "mn-MN": "Бидэнтэй холбоо барих",
                mr: "आम्हाला संपर्क करा",
                ms: "Hubungi Kami",
                "mt-MT": "Ikkuntattjana",
                "ne-NP": "हामीलाई सम्पर्क गर्नुहोस्",
                nl: "Contact opnemen",
                "nn-NO": "Kontakt oss",
                no: "Kontakt oss",
                or: "ଆମକୁ ସମ୍ପର୍କ କରନ୍ତୁ",
                "pa-IN": "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
                pl: "Kontakt z nami",
                prs: "تماس با ما",
                "pt-PT": "Contacte-nos",
                pt: "Fale Conosco",
                "qps-ploc": "Contact Us",
                "qps-ploca": "Contact Us",
                "qps-plocm": "Contact Us",
                "quz-PE": "Nuqaykuwan Tinkiy",
                ro: "Contactați-ne",
                ru: "Свяжитесь с нами",
                "sd-Arab-PK": "اسان سان رابطو ڪريو",
                "si-LK": "අපව අමතන්න",
                sk: "Kontaktujte nás",
                sl: "Stik z nami",
                sq: "Na kontakto",
                "sr-Cyrl-BA": "Обратите нам се",
                "sr-Cyrl": "Обратите нам се",
                sr: "Obratite nam se",
                sv: "Kontakta oss",
                sw: "Wasiliana Nasi",
                ta: "எங்களைத் தொடர்புகொள்ளவும்",
                te: "మమ్మల్ని సంప్రదించండి",
                th: "ติดต่อเรา",
                "tk-TM": "Bize ýüz tutuň",
                tr: "Bize Ulaşın",
                tt: "Безнең белән элемтәгә керү",
                "ug-CN": "بىز بىلەن ئالاقىلىشىش",
                uk: "Зверніться до нас",
                ur: "ہم سے رابطہ کریں",
                uz: "Biz bilan bog‘laning",
                vi: "Liên hệ với Chúng tôi",
                "zh-Hans": "联系我们",
                "zh-Hant": "與我們連絡"
            },
            CreatAccountButton_Text: {
                af: "Skep rekening",
                am: "መለያ ፍጠር",
                ar: "إنشاء حساب",
                "as-IN": "একাউণ্ট সৃষ্টি কৰক",
                "az-Latn-AZ": "Hesab yaradın",
                "be-BY": "Стварыць уліковы запіс",
                bg: "Създаване на акаунт",
                "bn-BD": "অ্যাকাউন্ট তৈরী করুন",
                "bn-IN": "অ্যাকাউন্ট তৈরি করুন",
                "bs-Latn-BA": "Kreiraj račun",
                "ca-ES-valencia": "Crea un compte",
                ca: "Crea un compte",
                cs: "Vytvořit účet",
                cy: "Creu cyfrif",
                da: "Opret konto",
                de: "Konto erstellen",
                el: "Δημιουργία λογαριασμού",
                "en-GB": "Create account",
                en: "Create account",
                "es-MX": "Crear cuenta",
                es: "Crear cuenta",
                et: "Loo konto",
                eu: "Sortu kontua",
                fa: "ایجاد حساب",
                fi: "Luo tili",
                fil: "Gumawa ng account",
                "fr-CA": "Créer un compte",
                fr: "Créer un compte",
                "ga-IE": "Cruthaigh cuntas",
                "gd-GB": "Cruthaich cunntas",
                gl: "Crear conta",
                gu: "ખાતું બનાવો",
                "ha-Latn-NG": "Ƙirƙira asusu",
                he: "צור חשבון",
                hi: "खाता बनाएँ",
                hr: "Stvaranje računa",
                hu: "Fiók létrehozása",
                hy: "Ստեղծել հաշիվ",
                id: "Buat akun",
                is: "Stofna reikning",
                it: "Crea account",
                ja: "アカウントの作成",
                ka: "ანგარიშის შექმნა",
                kk: "Тіркелгі жасау",
                "km-KH": "បង្កើតគណនី",
                kn: "ಖಾತೆ ರಚಿಸು",
                ko: "계정 만들기",
                kok: "खातें निर्माण करचें",
                ky: "Эсеп жазууну түзүү",
                "lb-LU": "Kont schafen",
                "lo-LA": "ສ້າງບັນຊີ",
                lt: "Kurti paskyrą",
                lv: "Izveidot kontu",
                "mi-NZ": "Waihanga pūkete",
                mk: "Создај сметка",
                ml: "അക്കൗണ്ട് സൃഷ്‌ടിക്കുക",
                "mn-MN": "Хэрэглэгчийн бүртгэл үүсгэх",
                mr: "खाते तयार करा",
                ms: "Cipta akaun",
                "mt-MT": "Oħloq kont",
                "ne-NP": "खाता सिर्जना गर्नुहोस्",
                nl: "Account maken",
                "nn-NO": "Opprett konto",
                no: "Opprett konto",
                or: "ଏକାଉଣ୍ଟ୍‌ ସୃଷ୍ଟି କରନ୍ତୁ",
                "pa-IN": "ਖਾਤਾ ਬਣਾਓ",
                pl: "Utwórz konto",
                prs: "ایجاد کردن حساب",
                "pt-PT": "Criar conta",
                pt: "Criar conta",
                "qps-ploc": "Create account",
                "qps-ploca": "Create account",
                "qps-plocm": "Create account",
                "quz-PE": "Yupayta paqarichiy",
                ro: "Creați contul",
                ru: "Создать учетную запись",
                "sd-Arab-PK": "اڪائونٽ ٺاهيو",
                "si-LK": "ගිණුම සාදන්න",
                sk: "Vytvoriť konto",
                sl: "Ustvarite račun",
                sq: "Krijo një llogari",
                "sr-Cyrl-BA": "Креирај рачун",
                "sr-Cyrl": "Креирај налог",
                sr: "Kreiraj nalog",
                sv: "Skapa konto",
                sw: "Fungua akaunti",
                ta: "கணக்கை உருவாக்கு",
                te: "ఖాతాని సృష్టించండి",
                th: "สร้างบัญชี",
                "tk-TM": "Hasap döret",
                tr: "Hesap oluştur",
                tt: "Хисап язмасын төзү",
                "ug-CN": "ھېسابات قۇرۇش",
                uk: "Створити обліковий запис",
                ur: "اکاؤنٹ بنائیں",
                uz: "Hisob yaratish",
                vi: "Tạo tài khoản",
                "zh-Hans": "创建帐户",
                "zh-Hant": "建立帳戶"
            },
            DontHaveAccount_Text: {
                af: "Nie 'n rekening nie?",
                am: "መለያ የለዎትም?",
                ar: "أليس لديك حساب؟",
                "as-IN": "কোনো একাউণ্ট নাই নেকি?",
                "az-Latn-AZ": "Hesabınız yoxdur?",
                "be-BY": "Не маеце ўліковага запісу?",
                bg: "Нямате акаунт?",
                "bn-BD": "কোনো অ্যাকাউন্ট নেই?",
                "bn-IN": "আপনার কি কোন অ্যাকাউন্ট নেই?",
                "bs-Latn-BA": "Nemate račun?",
                "ca-ES-valencia": "No teniu cap compte?",
                ca: "No teniu cap compte?",
                cs: "Nemáte účet?",
                cy: "Dim cyfrif?",
                da: "Har du ikke en konto?",
                de: "Sie haben noch kein Konto?",
                el: "Δεν έχετε λογαριασμό;",
                "en-GB": "Don't have an account?",
                en: "Don't have an account?",
                "es-MX": "¿No tienes una cuenta?",
                es: "¿No tiene una cuenta?",
                et: "Kas teil pole kontot?",
                eu: "Ez duzu konturik?",
                fa: "حسابی ندارید؟",
                fi: "Eikö sinulla ole tiliä?",
                fil: "Walang ka bang account?",
                "fr-CA": "Vous n’avez pas de compte?",
                fr: "Vous n’avez pas de compte ?",
                "ga-IE": "Nach bhfuil cuntas agat?",
                "gd-GB": "Nach eil cunntas agad?",
                gl: "Non tes conta?",
                gu: "શું કોઈ ખાતું નથી?",
                "ha-Latn-NG": "Ba ka da wani asusu?",
                he: "אין לך חשבון?",
                hi: "कोई खाता नहीं है?",
                hr: "Nemate račun?",
                hu: "Nincs fiókja?",
                hy: "Չունե՞ք հաշիվ:",
                id: "Belum punya akun?",
                is: "Ertu ekki með reikning?",
                it: "Non hai un account?",
                ja: "アカウントをお持ちではありませんか?",
                ka: "ანგარიში არ გაქვთ?",
                kk: "Тіркелгіңіз жоқ па?",
                "km-KH": "មិនមានគណនីឬ?",
                kn: "ಖಾತೆಯನ್ನು ಹೊಂದಿಲ್ಲವೇ?",
                ko: "계정이 없으세요?",
                kok: "तुमचे कडेन खातें ना?",
                ky: "Экаунтуңуз жокпу?",
                "lb-LU": "Dir hutt kee Kont?",
                "lo-LA": "ບໍ່ມີບັນຊີບໍ?",
                lt: "Neturite paskyros?",
                lv: "Vai jums nav konta?",
                "mi-NZ": "Kāhore rānei tāu pūkete?",
                mk: "Немате ли сметка?",
                ml: "ഒരു അക്കൗണ്ടില്ലേ?",
                "mn-MN": "Хэрэглэгчийн бүртгэл байхгүй юу?",
                mr: "आपल्याकडे खाते नाही का?",
                ms: "Tidak mempunyai akaun?",
                "mt-MT": "M'għandekx kont?",
                "ne-NP": "खाता छैन?",
                nl: "Hebt u geen account?",
                "nn-NO": "Har du ikkje ein konto?",
                no: "Har du ikke en konto?",
                or: "ଏକ ଏକାଉଣ୍ଟ୍‌ ନାହିଁ?",
                "pa-IN": "ਕੋਈ ਖਾਤਾ ਨਹੀਂ ਹੈ?",
                pl: "Nie masz konta?",
                prs: "حساب ندارید؟",
                "pt-PT": "Não tem uma conta?",
                pt: "Você não tem uma conta?",
                "qps-ploc": "Don't have an account?",
                "qps-ploca": "Don't have an account?",
                "qps-plocm": "Don't have an account?",
                "quz-PE": "¿Mana huk yupayta tiyankichu?",
                ro: "Nu aveți un cont?",
                ru: "У вас нет учетной записи?",
                "sd-Arab-PK": "هڪ اڪائونٽ ناهي؟",
                "si-LK": "ගිණුමක් නොමැති ද?",
                sk: "Nemáte konto?",
                sl: "Ali nimate računa?",
                sq: "Nuk ke një llogari?",
                "sr-Cyrl-BA": "Немате рачун?",
                "sr-Cyrl": "Немате налог?",
                sr: "Nemate nalog?",
                sv: "Har du inget konto?",
                sw: "Huna akaunti?",
                ta: "கணக்கு இல்லையா?",
                te: "ఖాతా లేదా?",
                th: "ไม่มีบัญชีใช่หรือไม่",
                "tk-TM": "Hasabyňyz ýokmy?",
                tr: "Hesabınız yok mu?",
                tt: "Хисап язмагыз юкмы?",
                "ug-CN": "ھېساباتىڭىز يوقمۇ؟",
                uk: "У вас немає облікового запису?",
                ur: "اکاؤنٹ نہیں ہے؟",
                uz: "Yangi hisob yaratasizmi?",
                vi: "Bạn không có tài khoản?",
                "zh-Hans": "没有帐户?",
                "zh-Hant": "沒有帳戶嗎?"
            },
            Edge_Deny_Text: {
                af: "Nee, dankie",
                am: "አይ አመሰግናለሁ",
                ar: "لا شكراً",
                "as-IN": "নালাগে, ধন্যবাদ",
                "az-Latn-AZ": "Xeyr, təşəkkür edirəm",
                "be-BY": "Не, дзякуй",
                bg: "Не, благодаря",
                "bn-BD": "না থাক",
                "bn-IN": "না থাক",
                "bs-Latn-BA": "Ne, hvala",
                "ca-ES-valencia": "No, gràcies",
                ca: "No, gràcies",
                cs: "Ne, díky",
                cy: "Dim diolch",
                da: "Nej tak",
                de: "Nein, danke",
                el: "Όχι, ευχαριστώ",
                "en-GB": "No, thanks",
                en: "No thanks",
                "es-MX": "No, gracias",
                es: "No, gracias",
                et: "Tänan, ei",
                eu: "Ez, eskerrik asko",
                fa: "خیر متشکرم",
                fi: "Ei kiitos",
                fil: "Hindi, salamat",
                "fr-CA": "Non merci",
                fr: "Non merci",
                "ga-IE": "Níl, go raibh maith agat",
                "gd-GB": "Chan eil, mòran taing",
                gl: "Non, grazas",
                gu: "નહીં આભાર",
                "ha-Latn-NG": "A'a nagode",
                he: "לא, תודה",
                hi: "नहीं, धन्यवाद",
                hr: "Ne, hvala",
                hu: "Köszönöm, nem",
                hy: "Ոչ, շնորհակալ եմ",
                id: "Tidak, terima kasih",
                is: "Nei, takk",
                it: "No grazie",
                ja: "必要ない",
                ka: "არა, გმადლობთ",
                kk: "Жоқ, рақмет",
                "km-KH": "ទេ អរគុណ",
                kn: "ಬೇಡ ಧನ್ಯವಾದಗಳು",
                ko: "아니요",
                kok: "नाका देव बरें करूं",
                ky: "Жок, рахмат",
                "lb-LU": "Nee Merci",
                "lo-LA": "ບໍ່, ຂອບໃຈ",
                lt: "Ne, ačiū",
                lv: "Nē, paldies!",
                "mi-NZ": "Kāo",
                mk: "Не, благодарам",
                ml: "വേണ്ട, നന്ദി",
                "mn-MN": "Үгүй баярлалаа",
                mr: "नको धन्यवाद",
                ms: "Tidak perlu",
                "mt-MT": "Le grazzi",
                "ne-NP": "पर्दैन, धन्यवाद",
                nl: "Nee, bedankt",
                "nn-NO": "Nei takk",
                no: "Nei takk",
                or: "ନା ଧନ୍ୟବାଦ",
                "pa-IN": "ਨਹੀਂ, ਧੰਨਵਾਦ",
                pl: "Nie, dziękuję",
                prs: "نخیر، تشکر",
                "pt-PT": "Não, obrigado",
                pt: "Não, obrigado",
                "quz-PE": "Mana, pachi",
                ro: "Nu, mulțumesc",
                ru: "Нет, спасибо",
                "sd-Arab-PK": "نه مهربانيون",
                "si-LK": "එපා ස්තූතියි",
                sk: "Nie, ďakujem",
                sl: "Ne, hvala",
                sq: "Jo, faleminderit",
                "sr-Cyrl-BA": "Не, хвала",
                "sr-Cyrl": "Не, хвала",
                sr: "Ne, hvala",
                sv: "Nej tack",
                sw: "La, asante",
                ta: "நன்றி, வேண்டாம்",
                te: "వద్దు, ధన్యవాదాలు",
                th: "ไม่เป็นไร ขอบคุณ",
                "tk-TM": "Ýok, sag bol",
                tr: "Hayır, teşekkürler",
                tt: "Юк, рәхмәт",
                "ug-CN": "ياق، رەھمەت",
                uk: "Ні, дякую",
                ur: "نہیں شکریہ",
                uz: "Kerak emas",
                vi: "Không, cảm ơn",
                "zh-Hans": "不，谢谢",
                "zh-Hant": "不，謝謝"
            },
            Edge_Description_Text: {
                af: "'n Vinnige en beveiligde blaaier wat vir Windows 10 ontwerp is",
                am: "ለWindows 10 የተነደፈ ፈጣን እና ደህንነቱ የተጠበቀ አሳሽ",
                ar: "متصفح سريع وآمن مصمم خصيصاً من أجل Windows 10",
                "as-IN": "Windows 10-ৰ বাবে এটা দ্ৰুত আৰু সুৰক্ষিত ব্ৰাউজাৰ ডিজাইন কৰা হৈছে",
                "az-Latn-AZ": "Windows 10 üçün tərtib olunmuş sürətli və təhlükəsiz brauzer",
                "be-BY": "Хуткі і бяспечны браўзер, распрацаваны для Windows 10",
                bg: "Бърз и сигурен браузър, проектиран за Windows 10",
                "bn-BD": "Windows 10 এর জন্য একটি দ্রুত এবং নিরাপদ ব্রাউজার ডিজাইন করা হয়েছে",
                "bn-IN": "Windows 10 এর জন্য একটি দ্রুত এবং নিরাপদ ব্রাউজার ডিজাইন করা হয়েছে",
                "bs-Latn-BA": "Brz i siguran preglednik namijenjen za Windows 10",
                "ca-ES-valencia": "Un navegador ràpid i segur dissenyat per al Windows 10",
                ca: "Un navegador ràpid i segur dissenyat per al Windows 10",
                cs: "Rychlý a bezpečný prohlížeč určený pro Windows 10",
                cy: "Porwr cyflym a diogel a ddyluniwyd ar gyfer Windows 10",
                da: "En hurtig og sikker browser, der er udviklet til Windows 10",
                de: "Ein schneller und sicherer Browser, entwickelt für Windows 10.",
                el: "Ένα γρήγορο και ασφαλές πρόγραμμα περιήγησης που έχει σχεδιαστεί για τα Windows 10",
                "en-GB": "A fast and secure browser designed for Windows 10",
                en: "A fast and secure browser designed for Windows 10",
                "es-MX": "Un explorador rápido y seguro diseñado para Windows 10",
                es: "Un explorador rápido y seguro diseñado para Windows 10",
                et: "Kiire ja turvaline brauser, mis on välja töötatud Windows 10 jaoks",
                eu: "Windows 10-erako diseinatutako arakatzaile bizkor eta segurua",
                fa: "مرورگر سریع و ایمنی که برای Windows 10 طراحی شده است",
                fi: "Nopea ja turvallinen Windows 10:lle tarkoitettu selain",
                fil: "Isang mabilis at secure na browser na dinisenyo para sa Windows 10",
                "fr-CA": "Un navigateur rapide et sécurisé conçu pour Windows 10",
                fr: "Un navigateur rapide et sécurisé conçu pour Windows 10",
                "ga-IE": "Brabhsálaí tapa slán deartha do Windows 10",
                "gd-GB": "Brabhsair luath agus tèarainte a chaidh a dhealbhadh airson Windows 10",
                gl: "Un explorador seguro e rápido deseñado para Windows 10",
                gu: "Windows 10 માટે ડિઝાઇન કરાયેલ એક ઝડપી અને સુરક્ષિત બ્રાઉઝર",
                "ha-Latn-NG": "Wata buraza mai sauri da kuma mai tsaro da aka gina don Windows 10",
                he: "דפדפן מהיר ומאובטח שתוכנן עבור Windows 10",
                hi: "Windows 10 के लिए डिज़ाइन किया गया एक तेज़ और सुरक्षित ब्राउज़र",
                hr: "Brz i siguran preglednik osmišljen za Windows 10",
                hu: "A Windows 10 gyors és biztonságos böngészője",
                hy: "Արագ և ապահով զննիչ՝ նախատեսված Windows 10-ի համար",
                id: "Browser cepat dan aman yang didesain untuk Windows 10",
                is: "Hraðvirkur og öruggur vafri sem er sérhannaður fyrir Windows 10",
                it: "Un browser sicuro e veloce, progettato per Windows 10",
                ja: "Windows 10 用にデザインされた高速で安全なブラウザー",
                ka: "Windows 10-სთვის შექმნილი სწრაფი და უსაფრთხო ბრაუზერი",
                kk: "Windows 10 үшін әзірленген жылдам әрі қауіпсіз браузер",
                "km-KH": "កម្មវិធីរុករកដែលរហ័ស និងមានសុវត្ថិភាពត្រូវបានរចនាឡើងសម្រាប់ Windows 10",
                kn: "Windows 10 ಗೆ ವಿನ್ಯಾಸ ಮಾಡಲಾಗಿರುವ ವೇಗವಾದ ಮತ್ತು ಸುರಕ್ಷಿತವಾದ ಬ್ರೌಸರ್",
                ko: "Windows 10을 위한 빠르고 안전한 브라우저",
                kok: "Windows 10 खातीर डिझायन केल्लो जलद आनी सुरक्षीत ब्रावजर",
                ky: "Windows 10 үчүн жасалган ыкчам жана коопсуз браузер",
                "lb-LU": "E séieren a séchere Browser extra fir Windows 10 entwéckelt",
                "lo-LA": "ບຣາວເຊີທີ່ໄວ ແລະ ປອດໄພ ອອກແບບມາສຳລັບ Windows 10",
                lt: "Greita ir saugi naršyklė, skirta „Windows 10“",
                lv: "Ātra un droša pārlūkprogrammu, kas izstrādāta sistēmai Windows 10",
                "mi-NZ": "He pūtirotiro tere, haumaru hoki i hoahoatia mō Windows 10",
                mk: "Брз и безбеден прегледувач дизајниран за Windows 10",
                ml: "Windows 10-നായി രൂപകൽപ്പന ചെയ്ത വേഗതയേറിയതും സുരക്ഷിതവുമായ ഒരു ബ്രൗസർ",
                "mn-MN": "Windows 10-т зориулан бүтээгдсэн хурдан, найдвартай вэб хөтөч",
                mr: "Windows 10 साठी डिझाइन केलेले एक जलद आणि सुरक्षित ब्राउझर",
                ms: "Pelayar yang cepat dan selamat yang direka bentuk untuk Windows 10",
                "mt-MT": "Brawżer veloċi u sigur imfassal għal Windows 10",
                "ne-NP": "Windows 10 का लागि डिजाइन गरिएको छरितो र सुरक्षित ब्राउजर",
                nl: "Een snelle en veilige browser ontworpen voor Windows 10",
                "nn-NO": "Ein rask og trygg nettlesar utforma for Windows 10",
                no: "En rask og sikker nettleser utformet for Windows 10",
                or: "Windows 10 ପାଇଁ ଏକ ଦ୍ରୁତ ଏବଂ ସୁରକ୍ଷିତ ବ୍ରାଉଜର୍ ଡିଜାଇନ୍ ହୋଇଛି",
                "pa-IN": "Windows 10 ਲਈ ਤਿਆਰ ਕੀਤਾ ਗਿਆ ਇੱਕ ਤੇਜ਼ ਅਤੇ ਸੁਰੱਖਿਅਤ ਬ੍ਰਾਉਜ਼ਰ",
                pl: "Szybka i bezpieczna przeglądarka dla systemu Windows 10",
                prs: "مرورگر سریع و امن طراحی شده برای Windows 10",
                "pt-PT": "Um browser rápido e seguro concebido para o Windows 10",
                pt: "Um navegador rápido e seguro, projetado para o Windows 10",
                "quz-PE": "Utqhay chaymanta harkasqa maskana Windows 10 kaqpaq ruwasqan",
                ro: "Un browser rapid și sigur, proiectat pentru Windows 10",
                ru: "Быстрый и безопасный браузер для Windows 10",
                "sd-Arab-PK": "Windows 10 لاءِ ڊزائين ڪيل تڪڙو ۽ محفوظ برائوزر",
                "si-LK": "Windows 10 සඳහා නිර්මාණය කර ඇති වේගවත් සහ ආරක්ෂිත බ්රවුසරයකි",
                sk: "Rýchly a zabezpečený prehliada, určený pre Windows 10",
                sl: "Hiter in varen brskalnik, zasnovan za Windows 10.",
                sq: "Një shfletues i shpejtë dhe i sigurt, i projektuar për Windows 10",
                "sr-Cyrl-BA": "Брзи и безбједан прегледач намијењен за Windows 10",
                "sr-Cyrl": "Брз и безбедан прегледач дизајниран за Windows 10",
                sr: "Brz i bezbedan pregledač dizajniran za Windows 10",
                sv: "En snabb och säker webbläsare för Windows 10",
                sw: "Kivinjari cha haraka na salama kilichoundwa kwa ajili ya Windows 10",
                ta: "Windows 10க்கான வேகமான மற்றும் பாதுகாப்பான உலாவி",
                te: "Windows 10 కోసం రూపొందించబడిన ఒక వేగవైన మరియు సురక్షితమైన బ్రౌజర్",
                th: "เบราว์เซอร์ที่รวดเร็วและปลอดภัยที่ออกแบบมาสำหรับ Windows 10",
                "tk-TM": "Windows 10 üçin dizaýn edilen çalt we howpsuz brauzer.",
                tr: "Windows 10 için tasarlanmış hızlı ve güvenli bir tarayıcı",
                tt: "Windows 10 өчен ясалган тиз һәм сак күзәтүче",
                "ug-CN": "Windows 10 ئۈچۈن لايىھەلەنگەن تېز ۋە بىخەتەر تور كۆرگۈچ",
                uk: "Швидкий і безпечний браузер для Windows 10",
                ur: "Windows 10 کے لئے ڈیزائن کیا گیا ایک تیز رفتار اور محفوظ براؤزر",
                uz: "Windows 10 uchun ishlab chiqilgan tez va xavfsiz brauzer",
                vi: "Một trình duyệt nhanh và bảo mật được thiết kế cho Windows 10",
                "zh-Hans": "专为 Windows 10 设计的快速安全的浏览器",
                "zh-Hant": "既快速又安全，專為 Windows 10 設計的瀏覽器"
            },
            Edge_Get_started_Text: {
                af: "Kom aan die gang",
                am: "ጀምር",
                ar: "بدء الاستخدام",
                "as-IN": "আৰম্ভ কৰক",
                "az-Latn-AZ": "İşə başlama",
                "be-BY": "Пачаць працу",
                bg: "Първи стъпки",
                "bn-BD": "শুরু করা যাক",
                "bn-IN": "শুরু করা যাক",
                "bs-Latn-BA": "Prvi koraci",
                "ca-ES-valencia": "Comença",
                ca: "Comença",
                cs: "Začínáme",
                cy: "Cychwyn arni",
                da: "Kom godt i gang",
                de: "Erste Schritte",
                el: "Γρήγορα αποτελέσματα",
                "en-GB": "Get started",
                en: "Get started",
                "es-MX": "Empezar",
                es: "Empezar",
                et: "Alusta",
                eu: "Hasi erabiltzen",
                fa: "شروع به کار",
                fi: "Aloita",
                fil: "Magsimula",
                "fr-CA": "Commençons",
                fr: "Commençons",
                "ga-IE": "Tosaigh air",
                "gd-GB": "Dèan toiseach-tòiseachaidh",
                gl: "Comezar",
                gu: "પ્રારંભ કરો",
                "ha-Latn-NG": "Farawa",
                he: "התחל בעבודה",
                hi: "प्रारंभ करें",
                hr: "Početak rada",
                hu: "Kezdés",
                hy: "Մեկնարկել",
                id: "Mulai",
                is: "Hefjast handa",
                it: "Inizia",
                ja: "使い始める",
                ka: "დაწყება",
                kk: "Жұмысты бастау",
                "km-KH": "ចាប់ផ្ដើម",
                kn: "ಪ್ರಾರಂಭಿಸು",
                ko: "시작",
                kok: "सुरवात करची",
                ky: "Ишти баштоо",
                "lb-LU": "Éischt Schrëtt",
                "lo-LA": "ເລີ່ມຕົ້ນ",
                lt: "Pradėkite naudotis",
                lv: "Sākt darbu",
                "mi-NZ": "Me tīmata",
                mk: "Започни",
                ml: "ആരംഭിക്കുക",
                "mn-MN": "Эхлэх",
                mr: "प्रारंभ करा",
                ms: "Bermula",
                "mt-MT": "Ibda",
                "ne-NP": "सुरू गर्नुहोस्",
                nl: "Aan de slag",
                "nn-NO": "Kom i gang",
                no: "Kom i gang",
                or: "ପ୍ରାରମ୍ଭ କରନ୍ତୁ",
                "pa-IN": "ਸ਼ੁਰੂਆਤ ਕਰੋ",
                pl: "Rozpocznij",
                prs: "آغاز کار",
                "pt-PT": "Começar",
                pt: "Introdução",
                "quz-PE": "Qallariy",
                ro: "Introducere",
                ru: "Начало работы",
                "sd-Arab-PK": "شروع ڪريو",
                "si-LK": "පටන් ගන්න",
                sk: "Začať",
                sl: "Uvod",
                sq: "Fillo",
                "sr-Cyrl-BA": "Први кораци",
                "sr-Cyrl": "Први кораци",
                sr: "Prvi koraci",
                sv: "Kom igång",
                sw: "Anza",
                ta: "தொடங்குங்கள்",
                te: "ప్రారంభించండి",
                th: "เริ่มต้นใช้งาน",
                "tk-TM": "Öwrenip başlamak",
                tr: "Kullanmaya başlayın",
                tt: "Башлап җибәрү",
                "ug-CN": "باشلاش",
                uk: "Почати",
                ur: "شروع کریں",
                uz: "Ishni boshlash",
                vi: "Bắt đầu",
                "zh-Hans": "开始使用",
                "zh-Hant": "開始"
            },
            Edge_Try_Text: {
                af: "Probeer Microsoft Edge",
                am: "Microsoft Edgeን ይሞክሩ",
                ar: "جرب Microsoft Edge",
                "as-IN": "Microsoft Edge চেষ্টা কৰক",
                "az-Latn-AZ": "Microsoft Edge-i sınaqdan keçirin",
                "be-BY": "Паспрабуйце Microsoft Edge",
                bg: "Изпробвайте Microsoft Edge",
                "bn-BD": "Microsoft Edge ব্যবহার করে দেখুন",
                "bn-IN": "Microsoft Edge ব্যবহার করে দেখুন",
                "bs-Latn-BA": "Isprobajte Microsoft Edge",
                "ca-ES-valencia": "Proveu el Microsoft Edge",
                ca: "Prova el Microsoft Edge",
                cs: "Vyzkoušejte Microsoft Edge",
                cy: "Rhowch gynnig ar Microsoft Edge",
                da: "Prøv Microsoft Edge",
                de: "Microsoft Edge testen",
                el: "Δοκιμάστε το Microsoft Edge",
                "en-GB": "Try Microsoft Edge",
                en: "Try Microsoft Edge",
                "es-MX": "Probar Microsoft Edge",
                es: "Probar Microsoft Edge",
                et: "Proovige Microsoft Edge'i",
                eu: "Probatu Microsoft Edge",
                fa: "Microsoft Edge را امتحان کنید",
                fi: "Kokeile Microsoft Edgeä",
                fil: "Subukan ang Microsoft Edge",
                "fr-CA": "Essayer Microsoft Edge",
                fr: "Essayer Microsoft Edge",
                "ga-IE": "Bain triail as Microsoft Edge",
                "gd-GB": "Feuch Microsoft Edge",
                gl: "Proba Microsoft Edge",
                gu: "Microsoft Edge અજમાવી જુઓ",
                "ha-Latn-NG": "Gwada Microsoft Edge",
                he: "נסה את Microsoft Edge",
                hi: "Microsoft Edge को आज़माएँ",
                hr: "Isprobajte Microsoft Edge",
                hu: "A Microsoft Edge kipróbálása",
                hy: "Փորձեք Microsoft Edge-ը",
                id: "Coba Microsoft Edge",
                is: "Prófa Microsoft Edge",
                it: "Prova Microsoft Edge",
                ja: "Microsoft Edge を試す",
                ka: "სცადეთ Microsoft Edge",
                kk: "Microsoft Edge браузерін пайдаланып көріңіз",
                "km-KH": "សាកល្បងប្រើ Microsoft Edge",
                kn: "Microsoft Edge ಪ್ರಯತ್ನಿಸಿ",
                ko: "Microsoft Edge 사용해 보기",
                kok: "Microsoft Edge वापरून पळोवचो",
                ky: "Microsoft Edge'ди колдонуп көрүү",
                "lb-LU": "Microsoft Edge ausprobéieren",
                "lo-LA": "ລອງໃຊ້ Microsoft Edge",
                lt: "Išbandykite „Microsoft Edge“",
                lv: "Izmēģiniet Microsoft Edge",
                "mi-NZ": "Whakamātauria te Microsoft Edge",
                mk: "Пробајте го Microsoft Edge",
                ml: "Microsoft Edge പരീക്ഷിക്കൂ",
                "mn-MN": "Microsoft Edge-ийг туршиж үзэх",
                mr: "Microsoft Edge वापरून पहा",
                ms: "Cuba Microsoft Edge",
                "mt-MT": "Ipprova Microsoft Edge",
                "ne-NP": "Microsoft Edge प्रयोग गरी हेर्नुहोस्",
                nl: "Microsoft Edge uitproberen",
                "nn-NO": "Prøv Microsoft Edge",
                no: "Prøv Microsoft Edge",
                or: "Microsoft Edge ଚେଷ୍ଟା କରନ୍ତୁ",
                "pa-IN": "Microsoft Edge ਨੂੰ ਅਜ਼ਮਾਓ",
                pl: "Wypróbuj program Microsoft Edge",
                prs: "امتحان Microsoft Edge",
                "pt-PT": "Experimente o Microsoft Edge",
                pt: "Experimente o Microsoft Edge",
                "quz-PE": "Microsoft Edge kaqta ruway",
                ro: "Încercați Microsoft Edge",
                ru: "Попробуйте Microsoft Edge",
                "sd-Arab-PK": "Microsoft Edge آزمايو",
                "si-LK": "Microsoft Edge උත්සාහ කරන්න",
                sk: "Skúsiť Microsoft Edge",
                sl: "Preskusite Microsoft Edge",
                sq: "Provo Microsoft Edge",
                "sr-Cyrl-BA": "Испробајте Microsoft Edge",
                "sr-Cyrl": "Испробајте Microsoft Edge",
                sr: "Isprobajte Microsoft Edge",
                sv: "Prova Microsoft Edge",
                sw: "Jaribu Microsoft Edge",
                ta: "Microsoft Edge பயன்படுத்துங்கள்",
                te: "Microsoft Edgeతో ప్రయత్నించండి",
                th: "ลอง Microsoft Edge",
                "tk-TM": "Microsoft Edge synap gör",
                tr: "Microsoft Edge'i deneyin",
                tt: "Microsoft чиген сынап карау",
                "ug-CN": "Microsoft Edge نى سىناپ بېقىش",
                uk: "Спробувати Microsoft Edge",
                ur: "Microsoft Edge آزمائیں",
                uz: "Microsoft Edge ishlatib ko‘ring",
                vi: "Dùng thử Microsoft Edge",
                "zh-Hans": "试用 Microsoft Edge",
                "zh-Hant": "嘗試 Microsoft Edge"
            },
            FamilyMessageTitle_Text: {
                af: "Kry die Outlook wat reg is vir jou",
                am: "ለእርስዎ ትክክለኛ የሆነው'u2019sን Outlook ያግኙ",
                ar: "الحصول على Outlook الذي يناسبك",
                "as-IN": "আপোনাৰ বাবে উপযুক্ত Outlook লাভ কৰক",
                "az-Latn-AZ": "Sizin üçün müvafiq olan Outlook-u əldə edin",
                "be-BY": "Атрымайце Outlook, які падыходзіць менавіта вам",
                bg: "Сдобийте се с Outlook, който е подходящ за вас",
                "bn-BD": "আপনার জন্য যে Outlook-টি সঠিক সেটি নিন",
                "bn-IN": "Outlook টি নিন যা’s আপনার জন্য ঠিক",
                "bs-Latn-BA": "Preuzmite Outlook koji vam najbolje odgovara",
                "ca-ES-valencia": "Aconseguiu l'Outlook més adequat a les vostres necessitats",
                ca: "Aconseguiu l'Outlook més adequat a les vostres necessitats",
                cs: "Získejte Outlook, který je pro vás optimální",
                cy: "Cael y fersiwn Outlook sydd fwyaf addas i chi",
                da: "Hent den Outlook, der passer til dig",
                de: "Holen Sie sich das Outlook, das für Sie richtig ist",
                el: "Αποκτήστε το Outlook που σας ταιριάζει",
                "en-GB": "Get the Outlook that’s right for you",
                en: "Get the Outlook that’s right for you",
                "es-MX": "Obtén la versión de Outlook más adecuada",
                es: "Obtenga la versión de Outlook más adecuada",
                et: "Outlook, mis sobib just teile",
                eu: "Lortu zure beharretara ondoen egokitzen den Outlook aplikazioa",
                fa: "Outlook را دریافت کنید که برای شما مناسب است",
                fi: "Hanki sinulle sopivin Outlook",
                fil: "Kunin ang Outlook na tama para sa iyo",
                "fr-CA": "Obtenez la version d’Outlook adaptée à vos besoins",
                fr: "Obtenez la version d’Outlook adaptée à vos besoins",
                "ga-IE": "Faigh Outlook a oireann duitse",
                "gd-GB": "Faigh an Outlook a tha freagarrach dhut-sa",
                gl: "Obtén a versión de Outlook adecuada para ti",
                gu: "Outlook મેળવો કે જે તમારા માટે યોગ્ય છે",
                "ha-Latn-NG": "Samu Outlook da ya dace maka",
                he: "קבל את גירסת Outlook המתאימה לך",
                hi: "अपने लिए सही Outlook प्राप्त करें",
                hr: "Nabavite Outlook baš po svojoj mjeri",
                hu: "Használja az Outlook Önnek megfelelő változatát",
                hy: "Ձեռք բերեք այն Outlook-ը, որն ամենահարմարն է ձեզ",
                id: "Dapatkan Outlook yang tepat bagi Anda",
                is: "Fáðu Outlook sem hentar þér",
                it: "Scarica la versione di Outlook che fa per te",
                ja: "最適な Outlook をご利用になれます",
                ka: "გამოიყენეთ Outlook, რომელიც ზუსტად თქვენთვისაა",
                kk: "Өзіңізге сәйкес Outlook бағдарламасын алыңыз",
                "km-KH": "ទទួលយកកម្មវិធី Outlook ដែលស័ក្ដសមសម្រាប់អ្នក",
                kn: "ನಿಮಗೆ ಸೂಕ್ತವಾಗಿರುವ Outlook ಪಡೆಯಿರಿ",
                ko: "내게 맞는 Outlook 사용하기",
                kok: "तुमच्या खातीर योग्य आशिल्लो Outlook मेळोवचो",
                ky: "Өзүңүзгө ылайыктуу Outlook тандап алыңыз",
                "lb-LU": "Huelt Iech deen Outlook, deen zu Iech passt",
                "lo-LA": "​ເອົາ Outlook ທີ່​ເໝາະ​ສົມ​ສຳລັບ​ທ່ານ",
                lt: "Gaukite jums tinkamiausią „Outlook“",
                lv: "Jums piemērotas Outlook versijas izvēle",
                "mi-NZ": "Tīkina te Outlook e tika ana mōu",
                mk: "Преземете го Outlook што ви одговара",
                ml: "നിങ്ങൾക്ക് ഉചിതമായ Outlook സ്വന്തമാക്കുക",
                "mn-MN": "Өөрт тохирох Outlook-г аваарай",
                mr: "आपल्यासाठी योग्य असलेले Outlook मिळवा",
                ms: "Dapatkan Outlook yang sesuai untuk anda",
                "mt-MT": "Ikseb l-Outlook li huwa tajjeb għalik",
                "ne-NP": "तपाइँको लागि ठीक हुने’ Outlook प्राप्त गर्नुहोस्",
                nl: "De Outlook-versie downloaden die geschikt is voor u",
                "nn-NO": "Få Outlook-versjonen som passar deg",
                no: "Få Outlook-utgaven som passer best for deg",
                or: "ଆପଣଙ୍କ ପାଇଁ ସଠିକ ହୋଇଥିବା Outlook ପ୍ରାପ୍ତ କରନ୍ତୁ",
                "pa-IN": "ਉਹ Outlook ਪ੍ਰਾਪਤ ਕਰੋ ਜੋ ਤੁਹਾਡੇ ਲਈ ਠੀਕ ਹੈ",
                pl: "Pobieranie odpowiedniej wersji programu Outlook",
                prs: "Outlook را که برای شما مناسب است بدست آورید",
                "pt-PT": "Obtenha o Outlook mais adequado a si",
                pt: "Obtenha o Outlook ideal para você",
                "quz-PE": "Chiqa Outlook qampaq tariy",
                ro: "Obțineți versiunea de Outlook potrivită pentru dvs.",
                ru: "Получите Outlook, который подходит именно вам",
                "sd-Arab-PK": "Outlook حاصل ڪريو جيڪو توهان جي لاءِ صحيح آهي",
                "si-LK": "ඔබට සරිලන Outlook ලබා ගන්න",
                sk: "Získajte Outlook, ktorý je pre vás optimálny",
                sl: "Dobite Outlook, ki je pravi za vas",
                sq: "Merr aplikacionin Outlook të përshtatshëm për ty",
                "sr-Cyrl-BA": "Преузмите Outlook који вам одговара",
                "sr-Cyrl": "Преузмите Outlook који вам одговара",
                sr: "Preuzmite Outlook koji vam odgovara",
                sv: "Skaffa det Outlook som passar dig",
                sw: "Pata Outlook inayokufaa",
                ta: "உங்களுக்கு ஏற்ற Outlook-ஐப் பெறுங்கள்",
                te: "మీకు సరిపోయే Outlookని పొందండి",
                th: "รับ Outlook ที่เหมาะสมกับคุณ",
                "tk-TM": "Size gabat gelýän Outlook-y alyň",
                tr: "Size uygun Outlook uygulamasını edinin",
                tt: "Сезгә туры килгән Outlook'ны алыгыз",
                "ug-CN": "سىزگە ئەڭ ماس Outlook نى ئېلىش",
                uk: "Отримайте програму Outlook, яка підходить саме вам",
                ur: "Outlook جوکہ آپ کے لئے ’صحیح ہے حاصل کریں",
                uz: "O‘zingizga Outlook xizmatini moslang",
                vi: "Tải Outlook phù hợp với bạn",
                "zh-Hans": "获取适合你的 Outlook",
                "zh-Hant": "取得適合您的 Outlook"
            },
            GoogleAccount_Text: {
                af: "Google-rekening",
                am: "የ Google መለያ",
                ar: "حساب Google",
                "as-IN": "Google একাউণ্ট",
                "az-Latn-AZ": "Google Hesabı",
                "be-BY": "Уліковы запіс Google",
                bg: "Акаунт за Google",
                "bn-BD": "Google অ্যাকাউন্ট",
                "bn-IN": "Google অ্যাকাউন্ট",
                "bs-Latn-BA": "Google račun",
                "ca-ES-valencia": "Compte de Google",
                ca: "Compte del Google",
                cs: "Účet Google",
                cy: "Cyfrif Google",
                da: "Google-konto",
                de: "Google-Konto",
                el: "Λογαριασμός Google",
                "en-GB": "Google Account",
                en: "Google Account",
                "es-MX": "Cuenta de Google",
                es: "Cuenta de Google",
                et: "Google'i kontoga",
                eu: "Google kontua",
                fa: "حساب Google",
                fi: "Google-tili",
                fil: "Google Account",
                "fr-CA": "Compte Google",
                fr: "Compte Google",
                "ga-IE": "Cuntas Google",
                "gd-GB": "Cunntas Google",
                gl: "Conta de Google",
                gu: "Google ખાતું",
                "ha-Latn-NG": "Asusun Google",
                he: "חשבון Google",
                hi: "Google खाता",
                hr: "Google račun",
                hu: "Google-fiókkal",
                hy: "Google-ի հաշվով",
                id: "Akun Google",
                is: "Google-reikningi",
                it: "Account Google",
                ja: "Google アカウント",
                ka: "Google ანგარიში",
                kk: "Google тіркелгісі",
                "km-KH": "គណនី Google",
                kn: "Google ಖಾತೆ",
                ko: "Google 계정",
                kok: "Google खातें",
                ky: "Google экаунту",
                "lb-LU": "Google-Kont",
                "lo-LA": "ບັນຊີ Google",
                lt: "„Google“ paskyra",
                lv: "Google konts",
                "mi-NZ": "Pūkete Google",
                mk: "Сметка на Google",
                ml: "Google അക്കൗണ്ട്",
                "mn-MN": "Google хэрэглэгчийн бүртгэл",
                mr: "Google खाते",
                ms: "Akaun Google",
                "mt-MT": "Kont ta' Google",
                "ne-NP": "Google खाता",
                nl: "Google-account",
                "nn-NO": "Google-konto",
                no: "Google-konto",
                or: "Google ଏକାଉଣ୍ଟ୍‌",
                "pa-IN": "Google ਖਾਤਾ",
                pl: "Konto Google",
                prs: "حساب Google",
                "pt-PT": "Conta Google",
                pt: "Conta do Google",
                "qps-ploc": "Google Account",
                "qps-ploca": "Google Account",
                "qps-plocm": "Google Account",
                "quz-PE": "Google Yupay",
                ro: "Cont Google",
                ru: "Учетная запись Google",
                "sd-Arab-PK": "Google اڪائونٽ",
                "si-LK": "Google ගිණුම",
                sk: "Konto Google",
                sl: "Google Račun",
                sq: "Llogarinë e Google",
                "sr-Cyrl-BA": "Google рачун",
                "sr-Cyrl": "Google налог",
                sr: "Google nalog",
                sv: "Google-konto",
                sw: "Akaunti ya Google",
                ta: "Google கணக்கு",
                te: "Google ఖాతా",
                th: "บัญชี Google",
                "tk-TM": "Google hasaby",
                tr: "Google Hesabı",
                tt: "Google хисап язмасы",
                "ug-CN": "Google ھېساباتى",
                uk: "облікового запису Google",
                ur: "Google اکاؤنٹ",
                uz: "Google hisobi",
                vi: "Tài khoản Google",
                "zh-Hans": "Google 帐户",
                "zh-Hant": "Google 帳戶"
            },
            GooglePlay_Image_Text: {
                af: "Google Play-skakel",
                am: "የ Google Play አገናኝ",
                ar: "ارتباط Google Play",
                "as-IN": "Google Play লিংক",
                "az-Latn-AZ": "Google Play keçidi",
                "be-BY": "Спасылка на Google Play",
                bg: "Връзка към Google Play",
                "bn-BD": "Google Play লিঙ্ক",
                "bn-IN": "Google Play লিঙ্ক",
                "bs-Latn-BA": "Veza na Google Play",
                "ca-ES-valencia": "Enllaç del Google Play",
                ca: "Enllaç del Google Play",
                cs: "Odkaz na Google Play",
                cy: "Dolen Google Play",
                da: "Link til Google Play",
                de: "Google Play-Link",
                el: "Σύνδεση Google Play",
                "en-GB": "Google Play link",
                en: "Get it on Google Play",
                "es-MX": "Vínculo a Google Play",
                es: "Vínculo a Google Play",
                et: "Google Play link",
                eu: "Google Play dendarako esteka",
                fa: "پیوند Google Play",
                fi: "Google Play -linkki",
                fil: "Link sa Google Play",
                "fr-CA": "Lien vers Google Play",
                fr: "Lien vers Google Play",
                "ga-IE": "Nasc Google Play",
                "gd-GB": "Ceangal ri Google Play",
                gl: "Ligazón de Google Play",
                gu: "Google Play લિંક",
                "ha-Latn-NG": "Mahaɗin Google Play",
                he: "קישור ל- Google Play",
                hi: "Google Play लिंक",
                hr: "Veza na Google Play",
                hu: "A Google Play Áruház hivatkozása",
                hy: "Google Play-ի հղում",
                id: "Tautan Google Play",
                is: "Tengill í Google Play",
                it: "Collegamento a Google Play",
                ja: "Google Play のリンク",
                ka: "Google Play-ს ბმული",
                kk: "Google Play сілтемесі",
                "km-KH": "តំណ Google Play",
                kn: "Google Play ಲಿಂಕ್",
                ko: "Google Play 링크",
                kok: "Google Play लिंक",
                ky: "Google Play шилтемеси",
                "lb-LU": "Google Play-Link",
                "lo-LA": "ລິ້ງ Google Play",
                lt: "„Google Play“ saitas",
                lv: "Google Play saite",
                "mi-NZ": "Hono Google Play",
                mk: "Врска до Google Play",
                ml: "Google Play ലിങ്ക്",
                "mn-MN": "Google Play-н холбоос",
                mr: "Google Play लिंक",
                ms: "Pautan Google Play",
                "mt-MT": "Link għal Google Play",
                "ne-NP": "Google Play लिङ्क",
                nl: "Koppeling naar Google Play",
                "nn-NO": "Kopling til Google Play",
                no: "Google Play-kobling",
                or: "Google Play ଲିଙ୍କ୍",
                "pa-IN": "Google Play ਲਿੰਕ",
                pl: "Link do sklepu Google Play",
                prs: "پیوند Google Play",
                "pt-PT": "Ligação do Google Play",
                pt: "Link do Google Play",
                "quz-PE": "Google Play tupana",
                ro: "Link la Google Play",
                ru: "Ссылка на Google Play",
                "sd-Arab-PK": "Google Play ڪڙي",
                "si-LK": "Google Play සබැඳිය",
                sk: "Prepojenie na Google Play",
                sl: "Povezava za Google Play",
                sq: "Lidhja e Google Play",
                "sr-Cyrl-BA": "Google Play веза",
                "sr-Cyrl": "Google Play веза",
                sr: "Google Play veza",
                sv: "Google Play-länk",
                sw: "Kiungo cha Google Play",
                ta: "Google Play இணைப்பு",
                te: "Google Play లింక్",
                th: "ลิงก์ Google Play",
                "tk-TM": "Google Play bagy",
                tr: "Google Play bağlantısı",
                tt: "Google Play'га сылтама",
                "ug-CN": "Google Play ئۇلانمىسى",
                uk: "Посилання на Google Play",
                ur: "Google Play ربط",
                uz: "Google Play havolasi",
                vi: "Liên kết Google Play",
                "zh-Hans": "Google Play 链接",
                "zh-Hant": "Google Play 連結"
            },
            Legal_Text: {
                af: "Wetlik",
                am: "ሕጋዊ",
                ar: "قانوني",
                "as-IN": "ন্যায়সন্মত",
                "az-Latn-AZ": "Hüquqi",
                "be-BY": "Прававыя звесткі",
                bg: "Правна информация",
                "bn-BD": "আইনি",
                "bn-IN": "আইনি",
                "bs-Latn-BA": "Pravne informacije",
                "ca-ES-valencia": "Informació legal",
                ca: "Informació legal",
                cs: "Právní informace",
                cy: "Cyfreithiol",
                da: "Juridisk meddelelse",
                de: "Rechtliche Hinweise",
                el: "Νομικές ανακοινώσεις",
                "en-GB": "Legal",
                en: "Legal",
                "es-MX": "Información legal",
                es: "Información legal",
                et: "Juriidiline teave",
                eu: "Lege-oharrak",
                fa: "قانونی",
                fi: "Lakitiedot",
                fil: "Legal",
                "fr-CA": "Conditions d’utilisation",
                fr: "Informations légales",
                "ga-IE": "Dlíthiúil",
                "gd-GB": "Nòtaichean laghail",
                gl: "Legal",
                gu: "કાનૂની",
                "ha-Latn-NG": "Na shari'a",
                he: "מידע משפטי",
                hi: "कानूनी",
                hr: "Pravne napomene",
                hu: "Jogi közlemények",
                hy: "Իրավական",
                id: "Hukum",
                is: "Lagalegt",
                it: "Note legali",
                ja: "法的情報",
                ka: "სამართლებრივი",
                kk: "Заң ақпараты",
                "km-KH": "ស្របច្បាប់",
                kn: "ಕಾನೂನು",
                ko: "법적 고지 사항",
                kok: "वैध",
                ky: "Юридикалык маалымат",
                "lb-LU": "Rechtlech Hiwäiser",
                "lo-LA": "ກົດໝາຍ",
                lt: "Teisinė informacija",
                lv: "Juridiskā informācija",
                "mi-NZ": "Ā-Ture",
                mk: "Правен дел",
                ml: "നിയമപരം",
                "mn-MN": "Хууль ёсны",
                mr: "कायदेशीर",
                ms: "Perundangan",
                "mt-MT": "Legali",
                "ne-NP": "कानूनी",
                nl: "Juridisch",
                "nn-NO": "Juridisk",
                no: "Juridisk",
                or: "ଆଇନଗତ",
                "pa-IN": "ਕਾਨੂੰਨੀ",
                pl: "Informacje prawne",
                prs: "قانونی",
                "pt-PT": "Legal",
                pt: "Legal",
                "qps-ploc": "Legal",
                "qps-ploca": "Legal",
                "qps-plocm": "Legal",
                "quz-PE": "Legay",
                ro: "Juridic",
                ru: "Юридические сведения",
                "sd-Arab-PK": "قانوني",
                "si-LK": "නෛතික",
                sk: "Právne informácie",
                sl: "Pravne informacije",
                sq: "Informacione ligjore",
                "sr-Cyrl-BA": "Правни аспекти",
                "sr-Cyrl": "Правни аспекти",
                sr: "Pravni aspekti",
                sv: "Juridisk information",
                sw: "Kisheria",
                ta: "சட்டம்",
                te: "చట్టపరమైనది",
                th: "ข้อมูลด้านกฎหมาย",
                "tk-TM": "Ýuridik",
                tr: "Yasal",
                tt: "Легаль",
                "ug-CN": "قانۇنىي ئىشلار",
                uk: "Юридичні відомості",
                ur: "قانونی",
                uz: "Huquqiy",
                vi: "Pháp lý",
                "zh-Hans": "法律信息",
                "zh-Hant": "法律聲明"
            },
            MicrosoftAccount_Text: {
                af: "Microsoft-rekening",
                am: "Microsoft መለያ",
                ar: "حساب Microsoft",
                "as-IN": "Microsoft একাউন্ট",
                "az-Latn-AZ": "Microsoft Hesabı",
                "be-BY": "Уліковы запіс Microsoft",
                bg: "Акаунт в Microsoft",
                "bn-BD": "Microsoft অ্যাকাউন্ট",
                "bn-IN": "Microsoft অ্যাকাউন্ট",
                "bs-Latn-BA": "Microsoft račun",
                "ca-ES-valencia": "Compte de Microsoft",
                ca: "Compte Microsoft",
                cs: "Účet Microsoft",
                cy: "Cyfrif Microsoft",
                da: "Microsoft-konto",
                de: "Microsoft-Konto",
                el: "Λογαριασμός Microsoft",
                "en-GB": "Microsoft Account",
                en: "Microsoft Account",
                "es-MX": "Cuenta Microsoft",
                es: "Cuenta Microsoft",
                et: "Microsofti kontoga",
                eu: "Microsoft kontua",
                fa: "حساب Microsoft",
                fi: "Microsoft-tili",
                fil: "Account sa Microsoft",
                "fr-CA": "Compte Microsoft",
                fr: "Compte Microsoft",
                "ga-IE": "Cuntas Microsoft",
                "gd-GB": "Cunntas Microsoft",
                gl: "Conta de Microsoft",
                gu: "Microsoft ખાતું",
                "ha-Latn-NG": "Asusun Microsoft",
                he: "חשבון Microsoft",
                hi: "Microsoft खाता",
                hr: "Microsoftov račun",
                hu: "Microsoft-fiókkal",
                hy: "Microsoft-ի հաշվով",
                id: "Akun Microsoft",
                is: "Microsoft-reikningi",
                it: "Account Microsoft",
                ja: "Microsoft アカウント",
                ka: "Microsoft-ის ანგარიში",
                kk: "Microsoft тіркелгісі",
                "km-KH": "គណនី Microsoft",
                kn: "Microsoft ಖಾತೆ",
                ko: "Microsoft 계정",
                kok: "Microsoft खातें",
                ky: "Microsoft экаунту",
                "lb-LU": "Microsoft-Kont",
                "lo-LA": "ບັນຊີ Microsoft",
                lt: "„Microsoft“ paskyra",
                lv: "Microsoft konts",
                "mi-NZ": "Pūkete Microsoft",
                mk: "Сметка на Microsoft",
                ml: "Microsoft അക്കൗണ്ട്",
                "mn-MN": "Microsoft хэрэглэгчийн бүртгэл",
                mr: "Microsoft खाते",
                ms: "Akaun Microsoft",
                "mt-MT": "Kont ta' Microsoft",
                "ne-NP": "Microsoft खाता",
                nl: "Microsoft-account",
                "nn-NO": "Microsoft-konto",
                no: "Microsoft-konto",
                or: "Microsoft ଏକାଉଣ୍ଟ୍",
                "pa-IN": "Microsoft ਖਾਤਾ",
                pl: "Konto Microsoft",
                prs: "حساب Microsoft",
                "pt-PT": "Conta Microsoft",
                pt: "Conta da Microsoft",
                "qps-ploc": "Microsoft Account",
                "qps-ploca": "Microsoft Account",
                "qps-plocm": "Microsoft Account",
                "quz-PE": "Microsoft Yupay",
                ro: "Cont Microsoft",
                ru: "Учетная запись Майкрософт",
                "sd-Arab-PK": "Microsoft اڪائونٽ",
                "si-LK": "Microsoft ගිණුම",
                sk: "Konto Microsoft",
                sl: "Microsoftov račun",
                sq: "Llogarinë e Microsoft",
                "sr-Cyrl-BA": "Microsoft рачун",
                "sr-Cyrl": "Microsoft налог",
                sr: "Microsoft nalog",
                sv: "Microsoft-konto",
                sw: "Akaunti ya Microsoft",
                ta: "Microsoft கணக்கு",
                te: "Microsoft ఖాతా",
                th: "บัญชี Microsoft",
                "tk-TM": "Microsoft hasaby",
                tr: "Microsoft Hesabı",
                tt: "Майкрософт хисап язмасы",
                "ug-CN": "Microsoft ھېساباتى",
                uk: "облікового запису Microsoft",
                ur: "Microsoft اکاؤنٹ",
                uz: "Microsoft hisobi",
                vi: "Tài khoản Microsoft",
                "zh-Hans": "Microsoft 帐户",
                "zh-Hant": "Microsoft 帳戶"
            },
            NPageDescription_Text: {
                af: "Of jy nou op hoogte van jou inbus bly of die volgende groot gebeurtenis skeduleer, Outlook maak dit maklik om jou produktiefste, mees georganiseerde en gekoppelde self te wees – by die werk, by die huis en oral tussenin.",
                am: "የገቢ መልዕክቶች ሳጥንዎን ለመከታተልም ሆነ ቀጣዩን ትልቅ ነገር ለማቀድ፣ Outlook የበለጡ ምርታማ፣ የተደራጁ እና ግንኙነትዎ የተጠበቀ እርስዎን እንዲሆኑ ሁኔታዎችን ቀላል ያደርጋል።",
                ar: "سواء كان الأمر يتعلق بالبقاء على اطلاع بكل ما يخص علبة الوارد أو بجدولة حدث قادم، سيساعدك Outlook على زيادة الإنتاجية وتنظيم الأعمال والبقاء على اتصال بسهولة في العمل والمنزل وفي أي مكان آخر.",
                "as-IN": "এইটো আপোনাৰ ইনবক্সৰ শীৰ্ষত থাককেই বা নাথাকক বা পিছৰ ডাঙৰ কামটোৰ অনুসূচী কৰক বা নকৰক, Outlook-এ ইয়াক আপোনাৰ কাৰণে অধিক উৎপাদনশীল, ব্যৱস্থিত আৰু নিজে সংযোজিত থকাত সহজ কৰি তোলে - ঘৰত, কৰ্মস্থানত আৰু ইয়াৰ মাজৰ যিকোনো ঠাইতে৷",
                "az-Latn-AZ": "Daxilolanlar qutunuzun yuxarısında qalmağından və ya növbəti böyük bir tədbir planlaşdırmağınızdan asılı olmayaraq, Outlook işdə, evdə və istənilən yerdə daha məhsuldar, qaydalı və qoşulu şəkildə olmağınızı asanlaşdırır.",
                "be-BY": "Outlook можа займацца вашай паштовай скрынкай або памагчы планаваць вашы грандыёзныя справы — і заўжды дапаможа вам падтрымліваць высокую эфектыўнасць, парадак у справах і заставацца на сувязі — на працы, дома і дзе б вы ні былі.",
                bg: "Независимо дали се справя с вашата пощенска кутия, или планира следващото голямо събитие, с Outlook е лесно да сте продуктивни, организирани и свързани – вкъщи, на работа и навсякъде другаде.",
                "bn-BD": "এ'টি আপনার ইনবক্সের শীর্ষে থাকুক বা পরবর্তী বড়ো কাজ নির্ধারণ করুক, আপনার ঘরে, কর্মক্ষেত্রে এবং এর মাঝামাঝি যেকোনো স্থানে নিজেকে সবচেয়েবেশি সুফলদায়ী, সংগঠিত ও সংযুক্ত করে তোলাকে Outlook সহজ করে দেয়।",
                "bn-IN": "এ'টি আপনার ইনবক্সের শীর্ষে থাকুক বা পরবর্তী বড়ো কাজ নির্ধারণ করুক, আপনার ঘরে, কর্মক্ষেত্রে এবং এর মাঝামাঝি যেকোনো স্থানে নিজেকে সবচেয়েবেশি সুফলদায়ী, সংগঠিত ও সংযুক্ত করে তোলাকে Outlook সহজ করে দেয়।",
                "bs-Latn-BA": "Bilo da je u pitanju kontrola nad prispjelom poštom ili planiranje slјedećeg velikog događaja, Outlook vam olakšava da budete najproduktivniji, najorganiziraniji i najpovezaniji što možete – na poslu, kod kuće i na svim drugim mjestima.",
                "ca-ES-valencia": "Tant si voleu estar al dia amb la vostra safata d'entrada com si voleu planificar el pròxim esdeveniment important, l'Outlook vos ajuda a millorar la vostra productivitat, organització i connexió (a casa, a la faena o a qualsevol altre lloc).",
                ca: "Tant si voleu estar al dia amb la vostra safata d'entrada com si voleu planificar el pròxim esdeveniment important, l'Outlook us facilita l'assoliment de la vostra versió més productiva, organitzada i connectada (a la feina, a casa o a qualsevol altre lloc).",
                cs: "Bez ohledu na to, jestli chcete mít jenom pod kontrolou doručenou poštu nebo plánujete něco důležitého, Outlook vám pomůže zvýšit produktivitu, lépe si vše zorganizovat a být neustále ve spojení – v práci, doma i na cestách.",
                cy: "P’un ai ydych chi’n ceisio rhoi trefn ar eich blwch derbyn neu’n trefnu’r digwyddiad mawr nesaf, mae Outlook yn ei wneud yn hawdd i wneud cysylltiadau ac i fod yn gynhyrchiol ac yn drefnus - boed hynny yn y gwaith, yn y cartref, neu unrhyw le yn y canol.",
                da: "Uanset, om det drejer sig om at holde styr på din indbakke eller planlægge den næste store ting, gør Outlook det nemt for dig at være produktiv, organiseret og forbundet – i hjemmet, på arbejde og alle steder andre steder.",
                de: "Ob es darum geht, den Überblick im Posteingang zu behalten oder den nächsten großen Wurf zu planen, Outlook erleichtert es, maximal produktiv, organisiert und vernetzt zu sein – zu Hause, bei der Arbeit und überall sonst.",
                el: "Είτε θέλετε να παρακολουθείτε τα Εισερχόμενά σας είτε σχεδιάζετε κάτι σημαντικό, το Outlook σας διευκολύνει να είστε πιο παραγωγικοί, οργανωμένοι και συνδεδεμένοι. Στην εργασία, στο σπίτι και οπουδήποτε αλλού.",
                "en-GB": "Whether it's staying on top of your inbox or scheduling the next big thing, Outlook makes it easy to be your most productive, organised and connected self – at home, at work and everywhere in between.",
                en: "Free Outlook email and calendar. Everything you need to be your most productive and connected self – at home, on the go, and everywhere in between.",
                "es-MX": "Ya sea para hacer el seguimiento de tu bandeja de entrada o para programar el próximo evento, Outlook te permite estar conectado y ser más productivo y organizado en el trabajo, en casa y en cualquier otro lugar.",
                es: "Ya sea para hacer el seguimiento de su bandeja de entrada o para programar el próximo evento, Outlook le permite estar conectado y ser más productivo y organizado en el trabajo, en casa y en cualquier otro lugar.",
                et: "Pole tähtis, kas teie eesmärk on kirjavahetust kontrolli all hoida või kavandate hoopis järgmist suurüritust. Outlook aitab teil alati viljakalt töötada, kõike korraldada ning vajalike inimestega suhelda – kodus, tööl ja mujal.",
                eu: "Dela sarrerako ontziko mezuak irakurrita izatea gustatzen zaizulako, dela gertaera garrantzitsuak antolatzen diharduzulako buru-belarri, Outlook da behar duzuna: hobeto antolatuko dituzu gauzak eta beti egongo zara konektatuta, lanean, etxean edo beste edonon.",
                fa: "فرقی نمی‌کند که روی صندوق دریافت خود کنترل داشته باشید یا مورد بزرگ بعدی را برنامه‌ریزی کنید، Outlook بهره‌ورترین و سازماندهی شده‌ترین است و خودش در خانه، در محل کار و در هر جایی متصل می‌شود.",
                fi: "Saapuneet-kansion hallinnasta tärkeiden hankkeiden ajoittamiseen – Outlookin avulla on helppoa ylläpitää tuottavuutta, pitää asiat järjestyksessä ja pysyä ajan tasalla kotona, töissä ja kaikkialla siinä välissä.",
                fil: "Ito man ay pagpapanatiling nakakasubaybay sa iyong inbox o nag-iiskedyul ng susunod na mahalagang kaganapan, ginagawang madali ng Outlook na maging produktibo, organisado at konektado ka - sa trabaho, sa bahay, at saanman.",
                "fr-CA": "Vous cherchez à maîtriser votre boîte de réception ou à planifier un événement d’importance? Outlook vous aide à rester productif, organisé et connecté où que vous soyez.",
                fr: "Vous cherchez à maîtriser votre boîte de réception ou à planifier un événement d’importance ? Outlook vous aide à rester productif, organisé et connecté où que vous soyez.",
                "ga-IE": "Cibé acu idir smacht á choimeád agat ar do bhosca isteach nó an chéad scéal mór eile á sceidealú agat, buíochas le Outlook tá sé éasca bheith táirgiúil, eagraithe agus nasctha sa bhaile, san ionad oibre, agus gach aon áit eile.",
                "gd-GB": "Chan eil e gu diofar a bheil thu airson rian a chumail air a’ bhogsa a-steach agad no an ath-phròiseact mòr agad a chur air sgeideal, nì Outlook e furasta dhut a bhith tairbheach, rianail is ceangailte aig an taigh agus aig àite-obrach agus gach àite eadar an dà dhiubh.",
                gl: "Tanto para facer un seguimento da caixa de entrada como para programar o próximo evento, Outlook permíteche estar conectado e ser máis produtivo e organizado no traballo, na casa e en calquera outra parte.",
                gu: "તમારા ઇનબૉક્સમાં બધાથી અવગત રહી ટોચ પર રહેવાનું હોય કે આગલી મોટી વસ્તુ શેડ્યૂલ કરવાની હોય, Outlook તમારા માટે સૌથી વધુ ઉત્પાદક, ગોઠવાયેલ અને કનેક્ટ થયેલ રહેવાનું સરળ બનાવે છે - ઘરે, કાર્યાલયમાં અને તે વચ્ચેના દરેક સ્થળે.",
                "ha-Latn-NG": "Ko yana zauna a saman akwatin saƙo ɗinka ko ana tsarawa babban abu na gaba, Outlook yana sa ka samu kasancewa kanka mafi mai albarka, tsararre da kuma haɗaɗɗe - a gida, a wurin aiki, da kuma ko'ina a tsakiya.",
                he: "בין אם ברצונך להתעדכן בהודעות בתיבת הדואר הנכנס ובין אם אתה מעוניין לקבוע פגישה, Outlook מקל עליך לשמור על פרודוקטיביות, ארגון וקשר – בבית, בעבודה ובכל מקום אחר.",
                hi: "चाहे अपने इनबॉक्स के बारे में पूरी तरह से अवगत रहना हो या किसी अगले बड़े कार्य को शेड्यूल करना हो, Outlook आपके लिए घर, कार्यस्थल पर और इनके बीच कहीं भी अधिक कार्यशील, व्यवस्थित और कनेक्ट रहना आसान बनाता है.",
                hr: "Bez obzira na to pratite li ulaznu poštu ili zakazujete sljedeći važan događaj, Outlook vam omogućuje da budete produktivni, organizirani i povezani kad ste kod kuće, na poslu ili bilo gdje drugdje.",
                hu: "Akár a beérkezett üzenetek kezeléséről, akár egy újabb jelentős eseményről van szó, az Outlookkal mindig flottul, rendezetten és másokkal közösen végezheti dolgait a munkahelyén, otthon vagy útközben.",
                hy: "Անկախ նրանից՝ այն մնում է ձեր մուտքի արկղի վերևում, թե հերթագրում է հաջորդ մեծ իրադարձությունը, Outlook-ը հեշտացնում է ամեն ինչ՝ մնալով ձեր ամենաարդյունավետ, կազմակերպված և կապակցված օգնականը աշխատավայրում, տանը և ցանկացած այլ վայրում:",
                id: "Outlook memudahkan Anda untuk tetap produktif, tertata, serta terhubung, dengan terus memantau kotak masuk atau melakukan penjadwalan hal penting berikutnya. Semua itu dapat dilakukan di rumah, di kantor, dan di mana saja Anda berada.",
                is: "Hvort sem þú ert að fara í gegnum póstinn í innhólfinu eða að undirbúa næsta viðburð hjálpar Outlook þér að koma sem mestu í verk og hafa skipulagið á hreinu í vinnunni, á heimilinu og alls staðar annars staðar.",
                it: "Sia che si tratti di organizzare la posta in arrivo o di pianificare un evento importante, Outlook favorisce la tua produttività, organizzazione e connessione a casa, al lavoro e in qualsiasi altro luogo.",
                ja: "受信トレイの整理整頓でも、今後の重要な事柄のスケジュールを決める場合でも、Outlook を利用すると、自宅や職場だけでなくそれ以外のすべての場所で、生産性を向上させ、整理された状態を維持し、他のユーザーとつながることが簡単にできるようになります。",
                ka: "ეს თქვენი შემოსულების შეტყობინებას ეხება თუ შემდეგი დიდი მოვლენის დაგეგმვას, Outlook ამარტივებს, იყოთ მაქსიმალურად პროდუქტიული, ორგანიზებული და კავშირზე მყოფი — სახლში, სამსახურში და ყველგან სადაც ხართ.",
                kk: "Кіріс жәшігіңіздегі хабарларды оқысаңыз да, кезекті маңызды істі жоспарласаңыз да, Outlook бағдарламасымен кез келген жұмысты үйде, жұмыста және басқа кез келген жерде өнімді, жүйелі және ұйымдасқан түрде жасай аласыз.",
                "km-KH": "ទោះជាថាវាកំពុងស្ថិតនៅពីលើ​ប្រអប់សារចូលរបស់អ្នក ឬកំពុងតែរៀបចំកាលវិភាគ​សម្រាប់រឿងធំបន្ទាប់ក៏ដោយ កម្មវិធី Outlook ធ្វើឲ្យវាងាយស្រួល​ក្នុងការ​ផ្ដល់ផលិតភាព​បានច្រើនបំផុតដល់អ្នក មានរបៀបរៀបរយ និងតភ្ជាប់ដោយស្វ័យប្រវត្តិ-នៅផ្ទះ នៅកន្លែងធ្វើការ និងគ្រប់ទីកន្លែងដែល​អ្នកស្ថិតនៅ។",
                kn: "ನಿಮ್ಮ ಇನ್‌ಬಾಕ್ಸ್ ನಿಯಂತ್ರದಲ್ಲಿರುವುದಾಗಲೀ ಅಥವಾ ಮುಂದಿನ ದೊಡ್ಡ ಸಂಗತಿಯನ್ನು ನಿಗದಿಪಡಿಸುವುದಾಗಲೀ, Outlook ಅದನ್ನು ಕೆಲಸದಲ್ಲಿ, ಮನೆಯಲ್ಲಿ ಮತ್ತು ಮಧ್ಯದಲ್ಲಿನ ಎಲ್ಲಿಯಾದರೂ ನೀವು ಹೆಚ್ಚು ಉತ್ಪಾದಕೀಯ, ಆಯೋಜಿತವಾಗಿರಲು ಮತ್ತು ಸ್ವಯಂ ಆಗಿ ಸಂಪರ್ಕಪಡಿಸಿದಂತೆ ಇರುವುದನ್ನು ಸುಲಭಗೊಳಿಸುತ್ತದೆ.",
                ko: "받은 편지함을 관리하거나 중요한 사항을 계획할 때 Outlook을 사용하면 집과 회사 그리고 이동 중에도 간편하게 생산성을 유지하고, 체계적으로 정리하며, 연결을 유지할 수 있습니다.",
                kok: "तुमच्या इनबॉक्सांत सामकें वयर आसा वा फुडल्या गजालींचें नियोजन करतात तें कितेंय आसूं, Outlook तुमकां घरा कडेन, कामाचेर वा खंयसरूय तुमकां चड उत्पादक, संघटीत दवरूंक आनी स्वयं कनॅक्टेड रावंक आदार दिता.",
                ky: "Үйдө, жумушта же башка жерде болобу, кирүүчү кутуңуздун башындагы нерсени же кийинки чоң нерсени плашдаштырууда Outlook ишти майнаптуу, ырааттуу жана тынымсыз байланыш аркылуу аткарат.",
                "lb-LU": "Ob et drëms geet, uewen an Ärer Inbox ze stoen oder dat nächst grousst Evenement ze plangen, Outlook erméiglecht Iech et, produktiv, organiséiert an um Lafenden ze bleiwen - sief et doheem, op der Aarbecht an och soss iwwerall.",
                "lo-LA": "ບໍ່ວ່າຈະເປັນການຕິດຕາມອິນບັອກຂອງທ່ານ ຫຼື ກຳນົດເວລານັດໝາຍເລື່ອງສຳຄັນເລື່ອງຖັດໄປ, Outlook ກໍເຮັດໃຫ້ມັນເປັນເລື່ອງງ່າຍດາຍໄດ້ ເພື່ອໃຫ້ທ່ານເຮັດວຽກ, ຈັດລະບຽບ ແລະ ເຊື່ອມຕໍ່ໄດ້ທັງຢູ່ບ່ອນເຮັດວຽກ, ຢູ່ເຮືອນ ແລະ ທຸກບ່ອນ.",
                lt: "Nesvarbu, ar siekiate nepraleisti nė vieno el. laiško ar planuojate naują grandiozinį įvykį, „Outlook“ padeda dirbti našiai, neatsilikti nuo plano ir palaikyti ryšį darbe, namuose ir kelyje.",
                lv: "Vai tā būtu iesūtnes sakārtošana vai nākamā lielā projekta plānošana, ar programmu Outlook ir viegli būs vislabākajam – darbīgam, organizētam un pieejamam – mājās, darbā un visur citur.",
                "mi-NZ": "Ahakoa ko te tirotiro rānei ki tō pouakauru, ko te whakarite rānei i te mea nui ka tū mai, mā Outlook e māmā ake ai kia tino huhua koe, kia raupapa, kia noho tūhono anō - i te kāinga, i te mahi, me ngā wāhi katoa i waenganui.",
                mk: "Без разлика дали го организира приемното сандаче или го закажува следниот голем настан, Outlook ви помага да бидете најпродуктивни, најорганизирани и најповрзани ‒ дома, на работа и секаде помеѓу нив.",
                ml: "ഇൻബോക്‌സ് നിങ്ങളുടെ നിയന്ത്രണത്തിലാക്കി നിർത്തുന്നതോ അടുത്ത വലിയ കാര്യം ഷെഡ്യൂൾ ചെയ്യുന്നതോ ആകട്ടെ, വീട്ടിലായാലും ജോലിസ്ഥലത്തായാലും ഇതിനിടയിൽ മറ്റെവിടെയായാലും, സ്വയം ഉൽപ്പാദനക്ഷതയുള്ളവരായും ആസൂത്രിതവും ബന്ധിപ്പിച്ചതുമായ നിലയിലും തുടരുന്നത് Outlook എളുപ്പമാക്കി മാറ്റുന്നു.",
                "mn-MN": "Ирсэн захидлууддаа хамгийн түрүүнд хариулж эсвэл дараагийн том зүйлийг төлөвлөж байгаа бол Outlook таныг ажил, гэр ер нь хаа ч байсан бүтээмжтэй, цэгцтэй, юм бүгдтэй холбоотой байхад туслана.",
                mr: "हे आपल्या इनबॉक्सच्या शीर्षस्थानी असले किंवा नसले किंवा पुढील मोठी गोष्ट शेड्युल करत असले किंवा नसले, तरीही Outlook आपल्यासाठी सर्वाधिक उत्पादकक्षम, व्यवस्थापित आणि स्वयं कनेक्ट केलेले - घरी, कार्यालयात आणि यादरम्यान प्रत्येक ठिकाणीच आपल्यासाठी सोपे बनविते.",
                ms: "Sama ada mengendalikan peti masuk anda atau menjadualkan perkara besar yang seterusnya, Outlook memudahkan anda menjadi paling produktif, teratur dan menghubungkan diri anda di tempat kerja, di rumah dan di mana-mana sahaja di antaranya.",
                "mt-MT": "Sew jekk trid tkun aġġornat dwar il-posta rċivuta tiegħek jew tiskeda l-akbar ħaġa li jmiss, huwa faċli permezz ta' Outlook biex tkun aktar produttiv, organizzat u konness - fuq ix-xogħol, id-dar, u kull fejn tkun.",
                "ne-NP": "तपाइँको पृष्ठमञ्जूषाको शीर्षस्थानमा रहने होस् वा आगामी विशाल कार्यको तालिका बनाउने होस्, Outlook ले तपाइँलाई सबैभन्दा उत्पादनजनक, व्यवस्थित र सम्बद्ध रहन सहज बनाउँछ - घरमा, काममा र सबै स्थानहरूमा।",
                nl: "Of u nu uw Postvak IN op orde wilt houden of iets belangrijks aan het plannen bent, met Outlook bent u altijd productief, georganiseerd en verbonden, thuis, op het werk en onderweg.",
                "nn-NO": "Enten det gjeld å halde deg oppdatert på innboksen eller planleggje den neste store hendinga, er det enkelt å vere produktiv, organisert og tilkopla heime, på jobb og elles med Outlook.",
                no: "Outlook gjør det enkelt å være produktiv, organisert og konsentrert både på jobb, hjemme og alle steder i mellom, enten det handler om å holde oversikten over innboksen eller planlegge det neste store prosjektet.",
                or: "ଏହା ଆପଣଙ୍କ ଇନ୍‌ବାକ୍ସର ଶୀର୍ଷରେ ରହୁଛି କିମ୍ବା ପରବର୍ତ୍ତୀ ବଡ ବିଷୟକୁ ଅନୁସୂଚୀତ କରୁଛି ତାହା ଯାହା ହେଉନା କାହିଁକି, Outlook ଏହାକୁ ଘରେ, କାର୍ଯ୍ୟାଳୟରେ, ଏବଂ ସବୁ ସ୍ଥାନରେ ଆପଣଙ୍କର ସର୍ବାଧିକ ଉତ୍ପାଦନକ୍ଷମ, ଶୃଙ୍ଖଳିତ, ଏବଂ ସଂଯୋଜିତ ବ୍ୟକ୍ତିତ୍ୱ କରିଥାଏ.",
                "pa-IN": "ਚਾਹੇ ਇਹ ਤੁਹਾਡੇ ਇਨਬਾਕਸ ਦੇ ਸਿਖਰ 'ਤੇ ਰਹਿਣਾ ਹੋਏ ਜਾਂ ਅਗਲੀ ਵੱਡੀ ਚੀਜ਼ ਲਈ ਸ਼ੈਡੀਊਲਿੰਗ ਕਰਨਾ, Outlook ਘਰ ਵਿੱਚ, ਕੰਮ ਵਿਖੇ, ਅਤੇ ਇਸ ਵਿਚਕਾਰਲੀ ਹਰੇਕ ਥਾਂ 'ਤੇ ਤੁਹਾਡਾ ਸਭ ਤੋਂ ਵੱਡਾ ਉਤਪਾਦਕ, ਸੰਗਠਿਤ ਅਤੇ ਜੁੜਿਆ ਆਤਮ-ਸਾਥੀ ਬਣਨਾ ਸੌਖਾ ਬਣਾ ਦਿੰਦਾ ਹੈ।",
                pl: "Czy próbujesz zapanować nad skrzynką odbiorczą, czy planujesz kolejne wielkie przedsięwzięcie, program Outlook pozwala łatwo osiągnąć najwyższy poziom wydajności, organizacji i komunikacji w domu, w pracy i we wszystkich innych miejscach.",
                prs: "اگر میخواهید از صندوق دریافت تان همیشه باخبر باشید و یا چیز بزرگ بعدی را زمان بندی کنید، با Outlook به آسانی میتوانید - در خانه، در محیط کاری و هرجای دیگر بین کار و خانه مؤثرترین، منظم و آگاه ترین شخص باشید.",
                "pt-PT": "Quer pretenda estar ao corrente da sua caixa de entrada ou agendar o próximo evento importante, o Outlook ajuda-o a ser mais produtivo, organizado e ligado em casa, no trabalho e em qualquer outro lugar.",
                pt: "Seja mantendo a caixa de entrada atualizada ou programando o próximo grande evento, o Outlook o ajuda a ser mais produtivo, organizado e a estar conectado em casa, no trabalho e em praticamente qualquer lugar.",
                "qps-ploc": "Whether it's staying on top of your inbox or scheduling the next big thing, Outlook makes it easy to be your most productive, organized, and connected self - at work, at home, and everywhere in between.",
                "qps-ploca": "Whether it's staying on top of your inbox or scheduling the next big thing, Outlook makes it easy to be your most productive, organized, and connected self - at work, at home, and everywhere in between.",
                "qps-plocm": "Whether it's staying on top of your inbox or scheduling the next big thing, Outlook makes it easy to be your most productive, organized, and connected self - at work, at home, and everywhere in between.",
                "quz-PE": "Sichus hanaq yaykumuq chaskiqniykimanta kachkan utaq qatiq hatun imamanta programachkan, Outlook sasa aswan llamkanayki ruwan, wasipi, llamkaypi chaymanta maypipas kanki kamachisqa chaymanta tinkisqa kanan.",
                ro: "Indiferent dacă doriți să rămâneți la curent cu inboxul sau să planificați următorul eveniment important, Outlook vă ajută să fiți cât mai productiv, organizat și conectat: la locul de muncă, acasă și oriunde altundeva.",
                ru: "Помогая эффективно разбираться с входящей почтой и планировать важные события, Outlook повышает вашу производительность и организованность, а также позволяет всегда оставаться на связи, где бы вы ни находились — дома, на работе или где-то еще.",
                "sd-Arab-PK": "آيا اهو توهانجي انباڪس جي چوٽي تي رهڻ آهي يا اڳئين وڏي شئي شيڊيول ڪرڻ آهي، Outlook توهانجو گهڻو پروڊڪٽو، آرگنائيزڊ ۽ خود-ڪم تي، گهر ۾، ۽ ان وچان ڪٿي به ڳنڍيل رهڻ لاءِ ان کي آسان بڻائي ٿو.",
                "si-LK": "එය ඔබේ එන ලිපි මත උඩින්ම රැඳී තිබෙනවා හෝ ඊළඟ ලොකු දෙය සැලසුම් කරනවා වේවා, Outlook කාර්යාලයේ දී, නිවසේ දී, සහ ඒ අතර සෑම තැනකම - ඔබේ වඩාත් ඵලදායී, සංවිධානාත්මක සහ සම්බන්ධිත වැඩ කිරීමේ දී ස්වයං වීම පහසු කරවයි.",
                sk: "Či už chcete zvládnuť všetku svoju doručenú poštu alebo plánujete niečo dôležité, Outlook vám pomôže zvýšiť efektivitu, organizovanosť aj komunikáciu doma, v práci aj na cestách.",
                sl: "Ne glede na to, ali poskušate priti na tekoče z vsebino v nabiralniku ali pa načrtujete naslednji veliki dogodek, boste z Outlookom produktivni, organizirani in osredotočeni v službi, doma in povsod vmes.",
                sq: "Si për t'u informuar për kutinë tënde mbërritëse, ashtu dhe për të planifikuar hapin tjetër të madh, Outlook e bën të lehtë që të arrish maksimumin e produktivitetit, organizimit dhe lidhjes - në shtëpi, në punë dhe kudo tjetër.",
                "sr-Cyrl-BA": "Било да је у питању контрола над приспјелом поштом или планирање сљедећег великог догађаја, Outlook вам олакшава да будете најпродуктивнији, најорганизованији и најповезанији што можете а будете – на послу, код куће и на свим другим мјестима.",
                "sr-Cyrl": "Било да је у питању контрола над пријемним сандучетом или планирање следећег великог догађаја, Outlook вам олакшава да будете најпродуктивнији, најорганизованији и најповезанији што можете – на послу, код куће и на свим другим местима.",
                sr: "Bilo da je u pitanju kontrola nad prijemnim sandučetom ili planiranje sledećeg velikog događaja, Outlook vam olakšava da budete najproduktivniji, najorganizovaniji i najpovezaniji što možete – na poslu, kod kuće i na svim drugim mestima.",
                sv: "Oavsett om det handlar om att hålla koll på inkorgen eller planera nästa stora händelse gör Outlook det enkelt för dig att vara produktiv, organiserad och ansluten – hemma, på jobbet och allt däremellan.",
                sw: "Iwe ni kusalia juu ya kisanduku pokezi chako au kuratibu jambo muhimu lijalo, Outlook inarahisisha kuwa mwenye tija, mpangilio na kujitambua kazini, nyumbani na kila mahali.",
                ta: "இது உங்கள் இன்பாக்ஸில் முதன்மையாக இருப்பதானாலும் அல்லது அடுத்த பெரிய விஷயத்தைத் திட்டமிடுவதாக இருந்தாலும், வீட்டில், வேலையில் மற்றும் இடைப்பட்ட நேரத்தில் எல்லா இடங்களிலும் மிகுந்த உற்பத்தித் திறனுள்ள, ஒழுங்கமைக்கப்பட்ட மற்றும் சுயமாக இணைக்கப்பட்ட ஒன்றாக அதை மாற்றுவதை Outlook எளிதாக்குகிறது.",
                te: "మీరు ఇంట్లో ఉన్నా లేదా ఎక్కడ ఉన్నా, మీ ఇన్‌బాక్స్‌లో అగ్ర స్థానంలో ఉండటం అయినా లేదా తదుపరి పెద్ద పనిని షెడ్యూల్ చేయడం అయినా, సులభంగా మీ ఉత్పాదకతను అత్యంత ఎక్కువ చేసుకోవడం, సంఘటితంగా ఉండటం మరియు ఇతరులతో సన్నిహితంగా ఉండటంలో Outlook మీకు సహాయపడుతుంది.",
                th: "ไม่ว่าจะเป็นการติดตามอีเมลในกล่องขาเข้าของคุณหรือการจัดกำหนดการของเรื่องใหญ่ในอนาคต Outlook ทำให้คุณมีประสิทธิภาพ เป็นระเบียบ และเชื่อมต่อได้ตลอดเวลาอย่างง่ายดาย ทั้งที่บ้าน ที่ทำงาน และทุกหนทุกแห่ง",
                "tk-TM": "Gelen gutyňyzy gysymyňda saklamak ýa-da indiki uly wakany rejelemek bolsun, tapawudy ýok, Outlook size öýde we işde, şeýle hem, şol iki aradaky ähli zatda iň önjeýli derejede tertipli we onlaýn işlemäge mümkinçilik berýär.",
                tr: "Gelen kutunuzu düzenlerken veya yaklaşan önemli bir etkinliği planlarken, Outlook ile evde, iş yerinde ve her yerde kolayca üretken ve düzenli kalabilir, iletişimi sürdürebilirsiniz.",
                tt: '"Килгән" папкагызның өстендә калуына яки киләсе зур әйберне планлаштыруыгызга карамастан, Outlook сезнең иң җитештерүчән, оешкан һәм тоташуыгызны эштә, өйдә һәм барлык урыннарда җиңеләйтә.',
                "ug-CN": "مەيلى خەت ساندۇقىدا چوققىلاش ياكى كېيىنكى مۇھىم ئىشنى ئورۇنلاشتۇرۇش بولسۇن، Outlook خىزمەتتە ۋە ئۆيدە ئىشلىرىڭىزنى رەتلىك ئورۇنلاشتۇرۇپ يۈرۈشتۈرۈش ۋە ئىش ئۈنۈمىنى ئاشۇرۇشقا ياردەم بېرىدۇ.",
                uk: "Працюйте з вхідною поштою або плануйте нові досягнення. Outlook допомагає вам бути продуктивнішими, організованішими та обізнанішими вдома, на роботі та скрізь.",
                ur: "چاہے وہ آپ کے ان باکس میں سب سے اوپر رہتا ہے یا کسی اگلے اہم کام کی میقات بندی کیا جا رہا ہے، Outlook آپ کو کافی بار آور اور خود مربوط - گھر میں، کام پر اور ان کے درمیان کہیں بھی منسلک رہنے کو آسان بناتا ہے۔",
                uz: "Pochta qutisining yuqorisida turadimi yoki katta narsani rejalashtiryapsizmi, Outlook uyda, ishda va har yerda ishlaringizni yanada samarali, tartibli va ulangan holda bo‘lishini ta’minlaydi.",
                vi: "Dù là cập nhật hộp thư đến hay lên lịch cho công việc quan trọng tiếp theo, Outlook luôn giúp bạn dễ dàng làm việc hiệu quả nhất, sắp xếp khoa học và luôn kết nối - tại nhà, nơi làm việc và bất kỳ đâu.",
                "zh-Hans": "无论是掌握收件箱动态还是计划下一件大事，Outlook 都可让你轻松自如: 在家、在公司或在其间任何位置，都能以最佳状态高效工作、有序组织并保持连接。",
                "zh-Hant": "不論是掌控收件匣的最新資訊或排定下一個重要工作，Outlook 都可以讓您在家裡、公司與任何地方輕鬆提高生產力、管理內容以及與他人聯繫。"
            },
            NPageTitle_Text: {
                af: "Maklike e-pos en kalender",
                am: "ጥረት የማያስፈልገው ኢሜይል እና ቀን መቁጠሪያ",
                ar: "استخدام البريد الإلكتروني والتقويم بسهولة",
                "as-IN": "অনায়াস ইমেইল আৰু কেলেণ্ডাৰ",
                "az-Latn-AZ": "Asan e-poçt və təqvim",
                "be-BY": "Зручныя электронная пошта і каляндар",
                bg: "Имейл и календар без усилие",
                "bn-BD": "সহজ ব্যবহারযোগ্য ইমেল ও ক্যালেন্ডার",
                "bn-IN": "সহজলভ্য ইমেল ও ক্যালেন্ডার",
                "bs-Latn-BA": "E-pošta i kalendar bez ikakvog napora",
                "ca-ES-valencia": "Ús fàcil del correu i del calendari",
                ca: "Ús fàcil del correu i del calendari",
                cs: "Snadnější ovládání e-mailu a kalendáře",
                cy: "E-bost a chalendr heb drafferth",
                da: "Ubesværet mail og kalender",
                de: "E-Mail und Kalender, ganz mühelos",
                el: "Εύκολο ηλεκτρονικό ταχυδρομείο και ημερολόγιο",
                "en-GB": "Effortless email and calendar",
                en: "Connect. Organize. Get things done. ",
                "es-MX": "Calendario y correo sin esfuerzo",
                es: "Calendario y correo electrónico sin esfuerzo",
                et: "Meil ja kalender pingevabalt",
                eu: "Posta eta egutegia aise erabili ahal izan ditzazun",
                fa: "ایمیل و تقویم بدون زحمت",
                fi: "Vaivaton sähköposti ja kalenteri",
                fil: "Madaling maunawaang email at kalendaryo",
                "fr-CA": "Calendrier et courriel simplifiés",
                fr: "Calendrier et courrier simplifiés",
                "ga-IE": "Ríomhphost agus féilire gan dua",
                "gd-GB": "Post-d is mìosachan gun chnap-starra",
                gl: "Correo electrónico e calendario sen esforzo",
                gu: "પ્રયાસરહિત ઈમેલ અને કૅલેન્ડર",
                "ha-Latn-NG": "Imel da kalanda mara wuya",
                he: "דואר אלקטרוני ולוח שנה ללא מאמץ",
                hi: "आसान ईमेल और कैलेंडर",
                hr: "E-pošta i kalendar bez muke",
                hu: "Levelezés és naptár gondok nélkül",
                hy: "Հեշտ կառավարվող էլ. փոստ և օրացույց",
                id: "Kemudahan email dan kalender",
                is: "Tölvupóstur og dagbók án fyrirhafnar",
                it: "Posta elettronica e calendario facili da gestire",
                ja: "無理のいらないメールと予定表",
                ka: "ელფოსტა და კალენდარი წვალების გარეშე",
                kk: "Қарапайым электрондық пошта және күнтізбе",
                "km-KH": "អ៊ីម៉ែល និងប្រតិទិនដែលងាយស្រួលប្រើ",
                kn: "ಸರಾಗವಾದ ಇಮೇಲ್ ಮತ್ತು ಕ್ಯಾಲೆಂಡರ್",
                ko: "간편한 전자 메일 및 일정",
                kok: "कश्टाविण ईमेल आनी दिनदर्शिका",
                ky: "Күч келтирбеген email жана календарь",
                "lb-LU": "E-Mail a Kalenner einfach gemaach",
                "lo-LA": "ອີ​ເມ​ວ ​ແລະ ປະຕິທິນ​ທີ່​ງ່າຍດາຍ",
                lt: "Paprastas el. paštas ir kalendorius",
                lv: "Darbs ar e-pastu un kalendāru – bez pūlēm",
                "mi-NZ": "Īmēra māmā me te maramataka rawa",
                mk: "Е-пошта и календар без мака",
                ml: "എളുപ്പമായ ഇമെയിലും കലണ്ടറും",
                "mn-MN": "Хялбархан э-шуудан ба цаглабар",
                mr: "सहज ईमेल आणि दिनदर्शिका",
                ms: "E-mel dan kalendar yang mudah",
                "mt-MT": "Posta elettronika u kalendarju bla problemi",
                "ne-NP": "निष्क्रिय इ-मेल र पात्रो",
                nl: "E-mail en agenda, eenvoudig in gebruik",
                "nn-NO": "Enkel e-post og kalender",
                no: "E-post og kalender, lekende lett",
                or: "ସହଜସାଧ୍ୟ ଇମେଲ୍‌ ଏବଂ କ୍ୟାଲେଣ୍ଡର୍‌",
                "pa-IN": "ਜਤਨ-ਰਹਿਤ ਈਮੇਲ ਅਤੇ ਕੈਲੰਡਰ",
                pl: "Bezproblemowa poczta e-mail i kalendarz",
                prs: "ایمیل و سالنمای اسان",
                "pt-PT": "E-mail e calendário simplificados",
                pt: "Calendário e email sem esforço",
                "qps-ploc": "Effortless email and calendar",
                "qps-ploca": "Effortless email and calendar",
                "qps-plocm": "Effortless email and calendar",
                "quz-PE": "Mana kallpawan correo electronico chaymanta intiwatana",
                ro: "E-mail și calendar fără efort",
                ru: "Удобство электронной почты и календаря",
                "sd-Arab-PK": "آسان اي ميل ۽ ڪئلينڊر",
                "si-LK": "නිරුත්සාහී ඊමේල් සහ දින දසුන",
                sk: "E-mail a kalendár, ktoré pracujú samostatne",
                sl: "Preprosto delo z e-pošto in koledarjem",
                sq: "Email dhe kalendar pa mundim",
                "sr-Cyrl-BA": "Несметана е-пошта и календар",
                "sr-Cyrl": "Несметана е-пошта и календар",
                sr: "Nesmetana e-pošta i kalendar",
                sv: "Enkel e-post och kalender",
                sw: "Barua pepe na kalenda zisizohitaji kutumia nguvu",
                ta: "எளிதான மின்னஞ்சல் மற்றும் நாள்காட்டி",
                te: "శ్రమరహితమైన ఇమెయిల్ మరియు క్యాలెండర్",
                th: "อีเมลและปฏิทินที่ใช้ได้โดยไม่ยุ่งยาก",
                "tk-TM": "Kösenmesiz e-poçta we senenama",
                tr: "Kolay e-posta ve takvim deneyimi",
                tt: "Уңайлы электрон почта һәм календарь",
                "ug-CN": "قولاي تورخەت ۋە كالېندار",
                uk: "Легка в користуванні електронна пошта та календар",
                ur: "آسان ای میل اور کیلنڈر",
                uz: "Qulay e-pochta va taqvim",
                vi: "Sử dụng email và lịch dễ dàng",
                "zh-Hans": "轻松的电子邮件和日历",
                "zh-Hant": "輕鬆使用電子郵件與行事曆"
            },
            O365_Message_Cta_Text: {
                af: "Koop Office 365",
                am: "Office 365 ይግዙ",
                ar: "شراء Office 365",
                "as-IN": "Office 365 ক্ৰয় কৰক",
                "az-Latn-AZ": "Office 365 alın",
                "be-BY": "Купіць Office 365",
                bg: "Закупуване на Office 365",
                "bn-BD": "Office 365 কিনুন",
                "bn-IN": "Office 365 কিনুন",
                "bs-Latn-BA": "Kupite Office 365",
                "ca-ES-valencia": "Compra l'Office 365",
                ca: "Compreu l'Office 365",
                cs: "Kupte si Office 365",
                cy: "Prynu Office 365",
                da: "Køb Office 365",
                de: "Office 365 kaufen",
                el: "Αγορά του Office 365",
                "en-GB": "Buy Office 365",
                en: "Buy Office 365",
                "es-MX": "Comprar Office 365",
                es: "Comprar Office 365",
                et: "Ostke Office 365",
                eu: "Erosi Office 365",
                fa: "خریداری Office 365",
                fi: "Osta Office 365",
                fil: "Bilhin ang Office 365",
                "fr-CA": "Acheter Office 365",
                fr: "Acheter Office 365",
                "ga-IE": "Ceannaigh Office 365",
                "gd-GB": "Ceannaich Office 365",
                gl: "Comprar Office 365",
                gu: "Office 365 ખરીદો",
                "ha-Latn-NG": "Sayi Office 365",
                he: "קנה את Office 365",
                hi: "Office 365 खरीदें",
                hr: "Kupite Office 365",
                hu: "Az Office 365 megvásárlása",
                hy: "Գնել Office 365-ը",
                id: "Beli Office 365",
                is: "Kaupa Office 365",
                it: "Acquista Office 365",
                ja: "Office 365 を購入",
                ka: "შეიძინეთ Office 365",
                kk: "Office 365 қызметін сатып алу",
                "km-KH": "ទិញ Office 365",
                kn: "Office 365 ಖರೀದಿಸಿ",
                ko: "Office 365 구입",
                kok: "Office 365 विकतें घेवचें",
                ky: "Office 365 сатып алуу",
                "lb-LU": "Office 365 kafen",
                "lo-LA": "ຊື້ Office 365",
                lt: "Įsigyti „Office 365“",
                lv: "Office 365 iegāde",
                "mi-NZ": "Hokona te Office 365",
                mk: "Купете Office 365",
                ml: "Office 365 വാങ്ങുക",
                "mn-MN": "Office 365 худалдаж авах",
                mr: "Office 365 खरेदी करा",
                ms: "Beli Office 365",
                "mt-MT": "Ixtri Office 365",
                "ne-NP": "Office 365 किन्नुहोस्",
                nl: "Office 365 kopen",
                "nn-NO": "Kjøp Office 365",
                no: "Kjøp Office 365",
                or: "Office 365 କ୍ରୟ କରନ୍ତୁ",
                "pa-IN": "Office 365 ਨੂੰ ਖਰੀਦੋ",
                pl: "Kup usługę Office 365",
                prs: "خریداری Office 365",
                "pt-PT": "Comprar o Office 365",
                pt: "Comprar o Office 365",
                "quz-PE": "Office 365 kaqta rantiy",
                ro: "Cumpărați Office 365",
                ru: "Купить Office 365",
                "sd-Arab-PK": "Office 365 خريديو",
                "si-LK": "Office 365 මිල දී ගන්න",
                sk: "Kúpiť služby Office 365",
                sl: "Kupite Office 365",
                sq: "Bli Office 365",
                "sr-Cyrl-BA": "Купите Office 365",
                "sr-Cyrl": "Купите Office 365",
                sr: "Kupite Office 365",
                sv: "Köp Office 365",
                sw: "Nunua Office 365",
                ta: "Office 365 வாங்குக",
                te: "Office 365ని కొనుగోలు చేయండి",
                th: "ซื้อ Office 365",
                "tk-TM": "Office 365 satyn al",
                tr: "Office 365'i satın alın",
                tt: "Office 365-ны сатып алу",
                "ug-CN": "Office 365 نى سېتىۋېلىش",
                uk: "Придбати Office 365",
                ur: "Office 365 خریدیں",
                uz: "Office 365 sotib olish",
                vi: "Mua Office 365",
                "zh-Hans": "购买 Office 365",
                "zh-Hant": "購買 Office 365"
            },
            O365_Message_Text: {
                af: "Kry meer gedoen en word beskerm teen aanlyn bedreigings. Of jy nou by die werk, by die skool of by die huis is, ons het die regte nutsmiddels om jou die ekstra myl te neem. Veilig.",
                am: "Outlook እና Office 365 ን በማጣመር የበለጠ ይስሩ። በሥራ ቦታም ሆነ በትምህርት ቤት፣ ወይም በቤትዎ፣ ተጨማሪውን ተጨማሪ እርቀት እንድንወስድዎ የሚያስችሉን ትክክለኛ መሳሪያዎች አሉን።",
                ar: "أنجز المزيد من أعمالك وكن محمياً من تهديدات الإنترنت. لدينا الأدوات المناسبة لك للتقدم بشكل كبير وآمن، سواء كنت في العمل أو في المؤسسة التعليمية أو في المنزل.",
                "as-IN": "অধিক কাৰ্য সম্পন্ন কৰক আৰু অনলাইন ভাবুকিবোৰৰ বিৰুদ্ধে সুৰক্ষিত থাকক৷ কৰ্মস্থান, বিদ্যালয় বা ঘৰতেই নাথাকক কিয়, আপোনাক আৰু আগবাঢ়িবলৈ দিবলৈ আমাৰ উপযুক্ত সঁজুলিসমূহ আছে৷ নিৰাপদে৷",
                "az-Latn-AZ": "Daha çox iş görün və onlayn təhlükələrdən qorunun. İşdə, məktəbdə və ya evdə olmağınızdan asılı olmayaraq, sizi əlavə millə təmin etmək üçün düzgün alətlərə malikik. Təhlükəsiz.",
                "be-BY": "Паспявайце болей і абараніце сябе ад пагроз у Інтэрнэце. Нашы інструменты створаны, каб дапамагаць вам дасягаць большага на працы, у вучобе і ў хатніх справах, застаючыся ў бяспецы.",
                bg: "Свършете повече работа и бъдете защитени срещу онлайн заплахи. Независимо дали сте на работа, в училище, или у дома, ние имаме правилните инструменти, за да продължите напред. Безопасно.",
                "bn-BD": "আরও কাজ সম্পন্ন করুন এবং অনলাইন হুমকী থেকে সুরক্ষিত থাকুন৷ কর্মস্থান, বিদ্যালয় বা বাড়ি যাই হোক না কেন, আপনাকে অতিরিক্ত মাইল দেওয়ার জন্য আমাদের কাছে সঠিক টুলগুলো রয়েছে৷ নিরাপদভাবে৷",
                "bn-IN": "আরও কাজ সম্পন্ন করুন এবং অনলাইন হুমকী থেকে সুরক্ষিত থাকুন৷ কর্মস্থান, বিদ্যালয় বা বাড়ি যাই হোক না কেন, আপনাকে অতিরিক্ত মাইল দেওয়ার জন্য আমাদের কাছে সঠিক টুলগুলি রয়েছে৷ নিরাপদভাবে৷",
                "bs-Latn-BA": "Uradite više toga i budite zaštićeni od prijetnji na mreži. Bilo da ste na poslu, u školi ili kod kuće, imamo prave alate koji će vas odvesti korak dalјe. Bezbjedno.",
                "ca-ES-valencia": "Treballeu millor i protegiu-vos contra les amenaces en línia. En la faena, en un centre educatiu o en casa... tenim les eines que vos permetran anar més lluny.",
                ca: "Augmenteu la vostra productivitat i protegiu-vos de les amenaces en línia. Independentment de si sou a la feina, a l'escola o a casa, tenim les eines adequades perquè pugueu anar un pas més enllà de forma segura.",
                cs: "Zvyšte svoji produktivitu a zajistěte si ochranu před online hrozbami. Získáte ty správné nástroje pro dosažení lepších výsledků v práci, ve škole i doma. A budete v bezpečí.",
                cy: "Gwnewch fwy a chael eich gwarchod rhag bygythiadau arlein. P’un ai ydych chi yn y gwaith, yn yr ysgol, neu gartref, mae gennym ni’r offer gorau i'ch helpu. Yn ddiogel.",
                da: "Få mere fra hånden, og få beskyttelse mod onlinetrusler. Vi har de rigtige værktøjer, der hjælper dig med at yde dit bedste, hvad enten du befinder dig på din arbejdplads, din skole eller derhjemme. Sikkert.",
                de: "Mehr schaffen und vor Onlinebedrohungen geschützt sein. Ob bei der Arbeit, in der Schule oder Uni oder zu Hause – wir haben die richtigen Tools, damit Sie noch einen draufsetzen können. In Sicherheit.",
                el: "Πετύχετε περισσότερα και προστατευτείτε από απειλές από το Internet. Είτε βρίσκεστε στον χώρο εργασίας, είτε στο σχολείο, είτε στο σπίτι, έχουμε τα κατάλληλα εργαλεία που θα σας βοηθήσουν να πετύχετε περισσότερους στόχους. Με ασφάλεια.",
                "en-GB": "Get more done and be protected against online threats. Whether at work, at school or at home, we have the right tools to take you the extra mile, safely.",
                en: "Get more done and be better protected against online threats. Wherever you are, we have the right tools to take you the extra mile.",
                "es-MX": "Obtén más resultados y protégete contra amenazas en línea. Tanto si estás en el trabajo como en la escuela o en casa, contamos con las herramientas adecuadas para que puedas dar ese paso adicional de forma segura.",
                es: "Obtenga más resultados y protéjase contra amenazas en línea. Tanto si está en el trabajo como en la escuela o en casa, contamos con las herramientas adecuadas para que pueda dar ese paso adicional de forma segura.",
                et: "Suurem tööviljakus koos kaitsega veebiohtude eest. Meie suurepäraste töövahenditega saate nii tööl, koolis kui ka kodus oma töö tehtud tõhusalt ja turvaliselt.",
                eu: "Egin gauza gehiago eta babestu Interneteko mehatxuen aurka. Lanean, eskolan zein etxean zaudela, urrunago iristeko behar dituzun tresna egokiak ditugu.",
                fa: "چیزهای بیشتری به دست آورید و در برابر تهدیدات آنلاین مصون باشید. چه سرکار باشید چه سر کلاس و چه در خانه، ما ابزار درست را برای اینکه بتوانید سنگ تمام بگذارید خواهید داشت. همه به شکل ایمن.",
                fi: "Paranna tuottavuutta ja suojaudu verkkouhilta. Ylitä itsesi niin töissä, koulussa kuin kotonakin juuri oikeiden työkalujen avulla – turvallisesti.",
                fil: "Makagawa nang mas marami at maprotektahan laban sa mga online na banta. Nasa trabaho ka man, nasa paaralan, o nasa bahay, nasa amin ang mga angkop na tool para maging produktibo ka. Nang maligtas.",
                "fr-CA": "Gagnez en productivité et restez protégé contre les menaces en ligne. Que vous soyez à l’école, au travail ou à votre domicile, nous vous proposons des outils sécurisés et adaptés à votre activité de demain.",
                fr: "Gagnez en productivité et restez protégé contre les menaces en ligne. Que vous soyez à l’école, au travail ou à votre domicile, nous vous proposons des outils sécurisés et adaptés à votre activité de demain.",
                "ga-IE": "Faigh tuilleadh déanta faoi chosaint ar bhagairtí ar líne. Cibé áit a bhfuil tú, ar obair, ar scoil, nó sa bhaile, tá na huirlisí cuí againn le tú a thabhairt níos faide. Slán sábháilte.",
                "gd-GB": "Dèan barrachd obrach is faigh dìon o chunnartan air loidhne. Ge b’ ann aig an obair, san sgoil no aig an taigh, tha na h-innealan againn a bheir comas dhut barrachd a dhèanamh. Gu sàbhailte.",
                gl: "Aumenta a produtividade e protéxete contra as ameazas en liña. Tanto se estás na escola, no traballo ou na casa, temos as ferramentas adecuadas para levarte sen riscos un paso máis adiante.",
                gu: "વધારે પૂર્ણ કરો અને ઑનલાઇન જોખમોની સામે રક્ષિત રહો. કાર્યાલયમાં હોવ, શાળામાં હોવ અથવા ઘર પર હોવ, અમારી પાસે તમને થોડા વધારે આગળ લઈ જવા માટે યોગ્ય ઉપકરણો છો. સુરક્ષિતરૂપે.",
                "ha-Latn-NG": "Samu yin ƙari kuma kasance a tsare daga barazana na kan layi. Ko ana a wurin aiki, a makaranta, ko a gida, muna da daidai kayayyakin aiki da za su ƙara gaba da kai. Cikin tsaro.",
                he: "תוכל להספיק יותר ובמקביל ליהנות מהגנה מפני איומים מקוונים. בין אם אתה בעבודה, בבית הספר או בבית, יש לנו כלים שיוכלו לקדם אותך לרמה הבאה. בבטחה.",
                hi: "अधिक कार्य करें और ऑनलाइन जोख़िमों से सुरक्षित रहें. भले ही कार्यालय में हों, विद्यालय में हों या घर पर हों, हमारे पास आपके अधिक कार्यों को पूर्ण करवाने के लिए सही उपकरण हैं. सुरक्षित तरीके से.",
                hr: "Povećajte produktivnost i zaštitite se od prijetnji na internetu. Bez obzira na to jeste li na poslu, u školi ili kod kuće, mi imamo odgovarajuće alate za povećavanje produktivnosti na siguran način.",
                hu: "Hatékonyabban dolgozhat és védheti adatait az online veszélyforrások ellen. Legyen szó munkahelyi, iskolai vagy otthoni munkáról, remek eszközöket kínálunk a hatékonyság fokozásához és a védelem kialakításához.",
                hy: "Բարելավեք ձեր աշխատանքը և պաշտպանվեք առցանց սպառնալիքներից: Ուր էլ որ լինեք՝ աշխատավայրում, դպրոցում, թե տանը, մենք ձեզ կառաջարկենք համապատասխան գործիքներ՝ ձեր աշխատանքը կատարելագործելու և անվտանգություն ապահովելու համար:",
                id: "Selesaikan lebih banyak hal dan dapatkan perlindungan terhadap ancaman online. Baik di kantor, di sekolah, atau di rumah, kami memiliki alat yang tepat untuk memberikan pelayanan maksimal. Secara aman.",
                is: "Komdu meiru í verk og verðu þig gegn netógnum. Hvort sem þú ert í vinnu, skóla eða heima erum við með verkfærin sem þú þarft til að ná lengra, á öruggan hátt.",
                it: "Aumenta la produttività e proteggiti dalle minacce online. Al lavoro, a scuola o a casa, ecco gli strumenti giusti per avere una marcia in più. In totale sicurezza.",
                ja: "より多くのことができるようになり、オンラインの脅威からも保護されます。職場、学校、または自宅でも安全に利用できる、さまざまな用途に適したツールが用意されています。",
                ka: "გააკეთეთ მეტი და იყავით დაცული ონლაინ საფრთხეებისგან. იქნება ეს სამსახურში, სკოლაში, თუ სახლში, ჩვენ გვაქვს საჭირო ხელსაწყოები, რათა მოგაწოდოთ დამატებითი შესაძლებლობები. უსაფრთხოება.",
                kk: "Көбірек жұмыс бітіріңіз және онлайн қауіптерден қорғаныңыз. Жұмыста, оқу орнында немесе үйде болсын, жұмысты артығымен орындауға мүмкіндік беретін қауіпсіз құралдарға ие болыңыз.",
                "km-KH": "ទទួលបានការងារបំពេញរួចរាល់ជាច្រើន និងអាចត្រូវបានការពារ​ប្រឆាំងនឹង​ការគំរាមកំហែង។ ទោះជានៅកន្លែងធ្វើការ សាលារៀន ឬនៅផ្ទះក៏ដោយ យើងមានឧបករណ៍ត្រឹមត្រូវ ដើម្បីនាំអ្នកទៅកាន់តែឆ្ងាយថែមទៀត។ ប្រកបដោយសុវត្ថិភាព។",
                kn: "ಇನ್ನಷ್ಟು ಮಾಡಿ ಮತ್ತು ಆನ್‌ಲೈನ್ ಅಪಾಯಗಳ ವಿರುದ್ಧ ರಕ್ಷಣೆ ಪಡೆಯಿರಿ. ಕೆಲಸದಲ್ಲಾಗಲೀ, ಶಾಲೆಯಲ್ಲಾಗಲೀ ಅಥವಾ ಮನೆಯಲ್ಲಾಗಲೀ, ನಿಮ್ಮನ್ನು ಪ್ರಗತಿ ಹೊಂದುವಂತೆ ಮಾಡಲು ನಮ್ಮ ಬಳಿ ಸೂಕ್ತವಾದ ಪರಿಕರಗಳಿವೆ. ಸುರಕ್ಷಿತವಾಗಿ.",
                ko: "더 많은 기능을 활용하고 온라인 위협으로부터의 보호가 더 강화됩니다. 회사, 학교 또는 집에서 더 많은 작업을 더 안전하게 수행할 수 있는 도구가 제공됩니다.",
                kok: "चड सारकें करचें आनी ऑनलायन भंयां कडच्यान राखण मेळोवंची. काम, विद्यालय वा घरा, तुमकां चड बरे तरेन राखपाक आमचे कडेन योग्य साधनां आसात. सुरक्षीतपणान.",
                ky: "Көбүрөөк иш бүтүрүңүз жана он-лайн коркунучтарынан коргонуңуз. Жумушта, мектепте же үйдө болобу, сизге керектүү куралдардын баары бизде бар. Коопсуз.",
                "lb-LU": "Kritt méi gemaach a schützt Iech géint online Bedrohungen. Ob op der Aarbecht, an der Schoul oder doheem, mir bidden déi richteg Tools, déi Iech méi wäit bréngen. An zwar an aller Sécherheet.",
                "lo-LA": "ເຮັດໄດ້ຫຼາຍຂຶ້ນ ແລະ ຮັບການປົກປ້ອງຈາກໄພຄຸກຄາມອອນລາຍ. ບໍ່ວ່າຈະຢູ່ບ່ອນເຮັດວຽກ, ຢູ່ໂຮງຮຽນ ຫຼື ຢູ່ເຮືອນ, ພວກເຮົາກໍມີເຄື່ອງມືທີ່ເໝາະສົມກຽມພ້ອມໃຫ້ທ່ານໃຊ້ຢ່າງປອດໄພ.",
                lt: "Atlikite daugiau darbų ir apsisaugokite nuo internetinių grėsmių. Nesvarbu, ar esate darbe, mokykloje ar namuose – turime tinkamų įrankių užduotims saugiai įveikti.",
                lv: "Paveiciet vairāk un esiet aizsargāts pret tiešsaistes draudiem. Vai esat skolā, darbā vai mājās, mums ir pareizie rīki, kas ļaus padarīt vairāk, turklāt droši.",
                "mi-NZ": "Kia nui ake ngā mahi, kia parea hoki ki ngā tuma tuihono. Ahakoa i te mahi, i te kura, i te kāinga rānei, kei a mātou ngā utauta tika hei tino āwhina ki a koe. Haumaru tonu.",
                mk: "Завршувајте повеќе работи и заштитете се од заканите на интернет. Без разлика дали сте на работа, на училиште или дома, имаме соодветни алатки за да постигнете повеќе. Безбедно.",
                ml: "കൂടുതൽ കാര്യങ്ങൾ ചെയ്‌തുതീർത്ത് ഓൺലൈൻ ഭീഷണികളിൽ നിന്ന് പരിരക്ഷിതരായി തുടരുക. ജോലിസ്ഥലത്തോ സ്‌കൂളിലോ വീട്ടിലോ ആകട്ടെ, നിങ്ങൾക്ക് അധിക കാര്യങ്ങൾ ചെയ്‌ത് തീർക്കാൻ ഉചിതമായ ഉപകരണങ്ങൾ ഞങ്ങളുടെ പക്കലുണ്ട്. സുരക്ഷിതമായി.",
                "mn-MN": "Илүү ихийг хийж мөн онлайн аюулаас хамгаалалттай байгаарай. Ажил, сургууль, гэртээ байхаас үл хамааран таныг илүү ихийг бүтээхэд туслах хэрэгслүүд бидэнд байна. Аюулгүй.",
                mr: "आणखी मिळवा आणि ऑनलाइन थ्रेट्सविरुद्ध संरक्षण मिळवा. आपण कार्यस्थानी, शाळेत किंवा घरी असलात, तरीही आमच्याकडे आपल्याला जास्त मैल.सुरक्षितपणे नेण्यासाठी योग्य साधने आहेत.",
                ms: "Lakukan lebih banyak lagi dan pastikan terlindung daripada ancaman dalam talian. Sama ada di tempat kerja, sekolah atau rumah, kami mempunyai alat yang sesuai untuk membantu anda lebih jauh. Dengan selamat.",
                "mt-MT": "Agħmel aktar u kun protett kontra theddidiet online. Sew jekk fuq ix-xogħol, l-iskola jew id-dar, għandna l-għodod it-tajbin biex int tkun tista' tagħmel aktar. B'mod sigur.",
                "ne-NP": "थप कामहरू गर्नुहोस् र अनलाइन जोखिमहरूबाट सुरक्षित रहनुहोस्। कार्यालय, विद्यालय, वा घरमा जहाँ भएपनि, हामीसँग तपाइँलाई अतिरिक्त काम गर्न चाहिने सही उपकरणहरू छन्।",
                nl: "Krijg meer gedaan en wees beveiligd tegen onlinebedreigingen. Of u nu op uw werk bent, op school, of thuis, we hebben de juiste hulpmiddelen waarmee u onbezorgd nét die extra stap kunt zetten.",
                "nn-NO": "Bli meir effektiv og verna mot truslar på nettet. Uansett om du er på arbeid, på skulen eller heime, har vi dei rette verktøya som hjelp deg langt på veg på ein trygg måte.",
                no: "Få gjort mer, og få beskyttelse mot trusler på nettet. Uansett om du er på jobben, skolen eller hjemme, har vi verktøyene som hjelper deg med å yte litt ekstra, trygt.",
                or: "ଅନଲାଇନ୍‌ ବିପଦଗୁଡିକ ବିପକ୍ଷରେ ସୁରକ୍ଷିତ ହୁଅନ୍ତୁ ଏବଂ ଅଧିକ କାର୍ଯ୍ୟ ସମାପ୍ତ କରନ୍ତୁ. କାର୍ଯ୍ୟ, ସ୍କୁଲ୍‌, କିମ୍ବା ଘରେ ଯେଉଁଠି ଥାଆନ୍ତୁ ନା କାହିଁକି, ଆପଣଙ୍କୁ ନିରାପଦରେ ବହୁତ ଆଗକୁ ନେବା ପାଇଁ ଆମ ନିକଟରେ ସଠିକ ଉପକରଣଗୁଡିକ ରହିଛି.",
                "pa-IN": "ਹੋਰ ਕਰਵਾਓ ਅਤੇ ਔਨਲਾਈਨ ਧਮਕੀਆਂ ਦੇ ਖਿਲਾਫ਼ ਸੁਰੱਖਿਅਤ ਰਹੋ। ਭਾਵੇਂ ਕੰਮ ਭਾਵੇਂ ਕੰਮ ਵਿਖੇ, ਸਕੂਲ ਵਿਖੇ, ਜਾਂ ਘਰ ਵਿਖੋ ਹੋਵੇ, ਸਾਡੇ ਕੋਲ ਤੁਹਾਨੂੰ ਵਾਧੂ ਪ੍ਰਦਾਨ ਕਰਨ ਲਈ ਸਹੀ ਸਾਧਨ ਹੁੰਦੇ ਹਨ। ਸੁਰੱਖਿਅਤ ਤਰੀਕੇ ਨਾਲ।",
                pl: "Pracuj wydajniej i zapewnij ochronę przed zagrożeniami online. Oferujemy bezpieczne narzędzia, dzięki którym zwiększysz swoje możliwości w pracy, w szkole i w domu.",
                prs: "کار های بیشتری انجام دهید و در مقابل تهدیدات آنلاین محافظت شده بمانید. چه در محل کار، مکتب یا خانه، ما اسباب مناسب را برای پیشبرد کار های تان داریم. بصورت امن.",
                "pt-PT": "Seja mais produtivo e proteja-se contra ameaças online. Temos as ferramentas certas para o ajudar a alcançar mais no trabalho, na escola ou em casa, de forma segura.",
                pt: "Realize mais tarefas e fique protegido contra ameaças online. No trabalho, na escola ou em casa, temos as ferramentas certas para conduzi-lo um pouco mais. Com segurança.",
                "quz-PE": "Aswan ruwasqa tariy chaymanta harkasqa tinkisqa pantaykunappaq kay. Llamkaypi, yachaywasipi utaq wasipi, chiqa akllanakuna tiyayku ruwaypaq yapa millata. Harkaynin.",
                ro: "Realizați mai multe lucruri și vă protejați împotriva amenințărilor online. Indiferent dacă vă aflați la locul de muncă, la școală sau acasă, avem instrumentele potrivite pentru a vă ajuta să ajungeți unde doriți. În siguranță.",
                ru: "Успевайте больше и защищайте себя от угроз из Интернета. У вас будут все инструменты, необходимые для того, чтобы продуктивно работать, эффективно учиться и отлично справляться с домашними делами.",
                "sd-Arab-PK": "وڌيڪ ڪم ڪريو ۽ آنلائن خطرن کان محفوظ رهو. ڀلي ڪم تي، اسڪول تي، يا وري گهر تي، توهان کي اضافي ميل طئي ڪرڻ لاءِ اسان وٽ درست اوزار آهن. محفوظ.",
                "si-LK": "වැඩියෙන් නිම කර සබැඳි තර්ජනවලට එරෙහිව ආරක්ෂා වන්න. කාර්යාලයේ, පාසැලේ හෝ නිවසේ සිටියත්, අපිට ඔබව අමතර සැතපුමක් සුරක්ෂිතව, රැගෙන යාමට නිවැරදි මෙවලම් ඇත.",
                sk: "Zvýšte svoju produktivitu a zabezpečte si ochranu pred online hrozbami. Bez ohľadu na to, či ste v práci, v škole alebo doma, máme pre vás tie správne nástroje na dosiahnutie lepších výsledkov. A budete v bezpečí.",
                sl: "Izboljšajte produktivnost in se zaščitite pred spletnimi grožnjami. V službi, v šoli ali doma – imamo prava orodja, s katerimi boste bolj učinkoviti. Na varen način.",
                sq: "Realizo më shumë dhe mbrohu ndaj kërcënimeve në linjë. Si në punë, në shkollë apo në shtëpi, ne kemi veglat e duhura për të arritur të pamundurën.",
                "sr-Cyrl-BA": "Урадите више тога и будите заштићени од пријетњи на мрежи. Било да сте на послу, у школи или код куће, имамо праве алатке које ће вас одвести корак даље. Безбједно.",
                "sr-Cyrl": "Урадите више тога и будите заштићени од претњи на мрежи. Било да сте на послу, у школи или код куће, имамо праве алатке које ће вас одвести корак даље. Безбедно.",
                sr: "Uradite više toga i budite zaštićeni od pretnji na mreži. Bilo da ste na poslu, u školi ili kod kuće, imamo prave alatke koje će vas odvesti korak dalje. Bezbedno.",
                sv: "Få mer gjort och skyddas mot onlinehot. Du får rätt verktyg på jobbet, i skolan och hemma. Säkert.",
                sw: "Fanya mengi zaidi na ulindwe dhidi ya vitisho vya mtandaoni. Iwe kazini, shuleni, au nyumbani, tuna zana sahihi za kukufanya upige hatua. Kwa usalama.",
                ta: "அதிகம் உழைப்பதுடன், ஆன்லைனில் அச்சுறுத்தல்களுக்கு எதிரான பாதுகாப்பையும் பெறுங்கள். பணியிடத்தில் இருந்தாலும், பள்ளியில் இருந்தாலும் அல்லது வீட்டில் இருந்தாலும், உங்களுக்குக் கூடுதல் உதவியளிக்கும் சரியான கருவிகள் எங்களிடம் உள்ளன. பாதுகாப்பாக.",
                te: "మరిన్ని చేయండి మరియు ఆన్‌లైన్ ప్రమాదాల నుండి రక్షణను పొందండి. కార్యాలయం, పాఠశాల లేదా ఇంట్లో, ఎక్కడైనా సరే మీరు మరిన్ని పనులు చేయడానికి అవసరమైన సరైన సాధనాలు మా వద్ద ఉన్నాయి. సురక్షితంగా.",
                th: "ทำสิ่งต่างๆ ได้มากขึ้น และได้รับการป้องกันจากภัยคุกคามออนไลน์ ไม่ว่าจะในที่ทำงาน ที่โรงเรียน หรือที่บ้าน เรามีเครื่องมือที่เหมาะสมที่จะพาให้คุณก้าวไกลได้อย่างปลอดภัย",
                "tk-TM": "Has köp iş bitiriň we onlaýn howplardan goranyň. Işde, mekdepde ýa-da öýde, tapawudy ýok, sizi ekstra sepgide aşyrmak üçin, bizde tüýs gerekli gurallar bar. Howpsuz.",
                tr: "Daha fazlasını yapın ve çevrimiçi tehditlere karşı korunun. İş yerinde, okulda veya evde en iyisini yapabilmenizi sağlayan doğru ve güvenli araçları sunuyoruz.",
                tt: "Күбрәк эш башкарып чыгыгыз һәм интернеттагы куркынычлардан сакланган булыгыз. Эштәме, мәктәптәме, өйдәме, эшегезне артыгы белән үтәр өчен бездә кораллар бар. Имин рәвештә.",
                "ug-CN": "تېخىمۇ كۆپ ئىشلارنى قىلالايسىز، بىخەتەرلىكى تېخىمۇ ياخشى. مەيلى خىزمەتتە، مەكتەپتە ياكى ئۆيدە بولۇڭ، سىزگە كېرەكلىك قوراللارنىڭ ھەممىسى بار ھەم بىخەتەر.",
                uk: "Встигайте більше та захистіть себе від загроз у мережі. У нас завжди знайдуться потрібні інструменти для виконання як робочих і навчальних, так і домашніх завдань. У повній безпеці.",
                ur: "آن لائن خطروں کے خلاف زیادہ کام کریں اور محفوظ رہیں۔ چاہے کام پر ہوں، اسکول میں ہوں یا گھر میں ہوں، آپ کو اضافی میل میں لے جانے کے لئے ہمارے پاس درست ٹولز موجود ہیں۔ بخیر و عافیت۔",
                uz: "Ko‘proq imkoniyatlarga ega bo‘ling va onlayn tahdidlarga himoyalaning. Ishxona, ta’lim muassasasi yoki uyda mos vositalardan foydalaning. Xavfsiz.",
                vi: "Hoàn thành được nhiều việc hơn và được bảo vệ trước mối đe dọa trực tuyến. Cho dù tại cơ quan, trường học hay ở nhà, chúng tôi cũng có công cụ phù hợp để hỗ trợ bạn. Một cách an toàn.",
                "zh-Hans": "完成更多工作，并抵御网络维修。无论是在工作场所、学校，还是在家中，我们都拥有适当的工具可帮助你安全完成更多工作。",
                "zh-Hant": "針對線上威脅採取更多保護。不論在公司、學校或家裡，我們均能夠提供適當的工具協助您抵抗威脅。"
            },
            O365_Message_Title_Text: {
                af: "Gaan verder met Office 365",
                am: "በ Office 365 ይዝለቁ",
                ar: "تقدم أكثر مع Office 365",
                "as-IN": "Office 365 ৰ সৈতে আগবাঢ়ক",
                "az-Latn-AZ": "Office 365 ilə irəli keçin",
                "be-BY": "Рабіце больш з праграмамі Office 365",
                bg: "Стигнете още по-далеч с Office 365",
                "bn-BD": "Office 365 এর মাধ্যমে আরও এগিয়ে যান",
                "bn-IN": "Office 365 এর মাধ্যমে আরও এগিয়ে যান",
                "bs-Latn-BA": "Idite dalјe uz Office 365",
                "ca-ES-valencia": "Aneu més lluny amb l'Office 365",
                ca: "Aneu més enllà amb l'Office 365",
                cs: "Zlepšete svoje výsledky díky Office 365",
                cy: "Gwnewch fwy gydag Office 365",
                da: "Yd dit bedste med Office 365",
                de: "Gehen Sie weiter mit Office 365.",
                el: "Κάντε περισσότερα με το Office 365",
                "en-GB": "Go further with Office 365",
                en: "Go further with Office 365",
                "es-MX": "Ir más allá con Office 365",
                es: "Ir más allá con Office 365",
                et: "Office 365 annab rohkem võimalusi",
                eu: "Iritsi urrunago Office 365-ekin",
                fa: "با Office 365 بیشتر به جلو بروید",
                fi: "Ylitä itsesi Office 365:n avulla",
                fil: "Makagawa ng mas marami sa Office 365",
                "fr-CA": "Allez plus loin avec Office 365",
                fr: "Allez plus loin avec Office 365",
                "ga-IE": "Gabh níos faide le Office 365",
                "gd-GB": "Dèan barrachd le Office 365",
                gl: "Dar un paso máis con Office 365",
                gu: "Office 365 સાથે વધુ આગળ જાઓ",
                "ha-Latn-NG": "A zarce da Office 365",
                he: "התקדם לרמה הבאה עם Office 365",
                hi: "Office 365 के साथ आगे जाएँ",
                hr: "Budite produktivniji uz Office 365",
                hu: "Az Office 365-tel eredményesebb a munka",
                hy: "Բարելավեք ձեր աշխատանքը Office 365-ի միջոցով",
                id: "Lakukan lebih baik dengan Office 365",
                is: "Náðu lengra með Office 365",
                it: "Prova anche Office 365",
                ja: "Office 365 を利用して機能を強化する",
                ka: "გზის გაგრძელება Office 365-თან ერთად",
                kk: "Office 365 қызметімен басқа да мүмкіндіктерге ие болыңыз",
                "km-KH": "បន្តទៅទៀតជាមួយ Office 365",
                kn: "Office 365 ಮೂಲಕ ಮತ್ತಷ್ಟು ಮುಂದಕ್ಕೆ ಹೋಗಿ",
                ko: "Office 365로 더 다양하게 활용",
                kok: "Office 365 वांगडा मुखार वच्चें",
                ky: "Office 365 менен ишти улантыңыз",
                "lb-LU": "Mat Office 365 méi erreechen",
                "lo-LA": "ກ້າວໄປໜ້າກັບ Office 365",
                lt: "Nuveikite daugiau su „Office 365“",
                lv: "Dodieties tālāk ar Office 365",
                "mi-NZ": "Haere mamao ake me te Office 365",
                mk: "Постигнете повеќе со Office 365",
                ml: "Office 365 ഉപയോഗിച്ച് കൂടുതൽ മുന്നോട്ടുപോകൂ",
                "mn-MN": "Office 365 ашиглан үргэлжлүүлэх",
                mr: "Office 365 वर पुढे जा",
                ms: "Pergi lebih jauh dengan Office 365",
                "mt-MT": "Agħmel aktar b'Office 365",
                "ne-NP": "Office 365 को सहायताले थप कामहरू गर्नुहोस्",
                nl: "Ga verder met Office 365",
                "nn-NO": "Gå lengre med Office 365",
                no: "Gå lengre med Office 365",
                or: "Office 365 ସହିତ ଅଗ୍ରସର ହୁଅନ୍ତୁ",
                "pa-IN": "Office 365 ਦੇ ਨਾਲ ਹੋਰ ਅੱਗੇ ਵਧੋ",
                pl: "Zwiększ swoje możliwości dzięki usłudze Office 365",
                prs: "استفاده بیشتر از Office 365",
                "pt-PT": "Vá mais longe com o Office 365",
                pt: "Vá mais longe com o Office 365",
                "quz-PE": "Office 365 kaqwan riy",
                ro: "Mergeți mai departe cu Office 365",
                ru: "Добивайтесь большего с Office 365",
                "sd-Arab-PK": "Office 365 سان اڳتي وڃو",
                "si-LK": "Office 365 සමඟ තව ඉදිරියට යන්න",
                sk: "Dokážte ešte viac so službami Office 365",
                sl: "Izkoristite vse funkcije storitve Office 365",
                sq: "Vazhdo më tej me Office 365",
                "sr-Cyrl-BA": "Идите даље уз Office 365",
                "sr-Cyrl": "Урадите више тога уз Office 365",
                sr: "Uradite više toga uz Office 365",
                sv: "Gå längre med Office 365",
                sw: "Nenda mbali ukitumia Office 365",
                ta: "Office 365 உடன் மேலும் முன்னேறுங்கள்",
                te: "Office 365తో మరిన్ని చేయండి",
                th: "ไปได้ไกลกว่าเดิมด้วย Office 365",
                "tk-TM": "Office 365 bilen has-da öňe git",
                tr: "Office 365 ile daha fazlasını yapın",
                tt: "Office 365 белән алга бару",
                "ug-CN": "Office 365 دىن تېخىمۇ ياخشى پايدىلىنىڭ",
                uk: "Більше можливостей в Office 365",
                ur: "Office 365 کے ساتھ آگے جائیں",
                uz: "Office 365 bilan kengroq imkoniyatlar",
                vi: "Tiến xa hơn với Office 365",
                "zh-Hans": "利用 Office 365 更进一步",
                "zh-Hant": "透過 Office 365 提高工作效率"
            },
            Or_Text: {
                af: "of",
                am: "ወይም",
                ar: "أو",
                "as-IN": "বা",
                "az-Latn-AZ": "və ya",
                "be-BY": "або",
                bg: "или",
                "bn-BD": "অথবা",
                "bn-IN": "অথবা",
                "bs-Latn-BA": "ili",
                "ca-ES-valencia": "o",
                ca: "o",
                cs: "nebo",
                cy: "neu",
                da: "eller",
                de: "oder",
                el: "ή",
                "en-GB": "or",
                en: "or",
                "es-MX": "o",
                es: "o",
                et: "või",
                eu: "edo",
                fa: "یا",
                fi: "tai",
                fil: "o",
                "fr-CA": "ou",
                fr: "ou",
                "ga-IE": "nó",
                "gd-GB": "no",
                gl: "ou",
                gu: "અથવા",
                "ha-Latn-NG": "ko",
                he: "או",
                hi: "या",
                hr: "ili",
                hu: "vagy",
                hy: "կամ",
                id: "atau",
                is: "eða",
                it: "oppure",
                ja: "または",
                ka: "ან",
                kk: "немесе",
                "km-KH": "ឬ",
                kn: "ಅಥವಾ",
                ko: "또는",
                kok: "वा",
                ky: "же",
                "lb-LU": "oder",
                "lo-LA": "ຫຼື",
                lt: "arba",
                lv: "vai",
                "mi-NZ": "rānei",
                mk: "или",
                ml: "അല്ലെങ്കില്‍",
                "mn-MN": "эсвэл",
                mr: "किंवा",
                ms: "atau",
                "mt-MT": "jew",
                "ne-NP": "वा",
                nl: "of",
                "nn-NO": "eller",
                no: "eller",
                or: "କିମ୍ବା",
                "pa-IN": "ਜਾਂ",
                pl: "lub",
                prs: "یا",
                "pt-PT": "ou",
                pt: "ou",
                "qps-ploc": "or",
                "qps-ploca": "or",
                "qps-plocm": "or",
                "quz-PE": "utaq",
                ro: "sau",
                ru: "или",
                "sd-Arab-PK": "يا",
                "si-LK": "හෝ",
                sk: "alebo",
                sl: "ali",
                sq: "ose",
                "sr-Cyrl-BA": "или",
                "sr-Cyrl": "или",
                sr: "ili",
                sv: "eller",
                sw: "au",
                ta: "அல்லது",
                te: "లేదా",
                th: "หรือ",
                "tk-TM": "ýa-da",
                tr: "veya",
                tt: "яки",
                "ug-CN": "ياكى",
                uk: "або",
                ur: "‏‏یا",
                uz: "yoki",
                vi: "hoặc",
                "zh-Hans": "或",
                "zh-Hant": "或"
            },
            Outlook_AppStore_Text: {
                af: "Laai af op die toepassingswinkel",
                am: "በመተግበሪያ ማከማቻ አውርድ",
                ar: "تنزيل من /متجر التطبيقات/",
                "as-IN": "এপ্প্‌ ষ্ট’ৰত ডাউনলোড কৰক",
                "az-Latn-AZ": "App Store-dan endirin",
                "be-BY": "Спампаваць праз App Store",
                bg: "Изтегляне от App Store",
                "bn-BD": "অ্যাপ স্টোরে ডাউনলোড করুন",
                "bn-IN": "App Store এ ডাউনলোড করুন",
                "bs-Latn-BA": "Preuzmite u usluzi App Store",
                "ca-ES-valencia": "Descarrega a l'App Store",
                ca: "Descarrega a l'App Store",
                cs: "Stáhnout z App Storu",
                cy: "Llwytho hwn i lawr yn y Siop Apiau",
                da: "Download den på App Store",
                de: "Aus dem App Store herunterladen",
                el: "Λήψη στο κατάστημα εφαρμογών",
                "en-GB": "Download in the App Store",
                en: "Download on the App Store",
                "es-MX": "Descargar en el App Store",
                es: "Descargar en el App Store",
                et: "Laadi alla App Store'ist",
                eu: "Deskargatu App Store-tik",
                fa: "در فروشگاه برنامه دانلود کنید",
                fi: "Lataa App Storesta",
                fil: "I-download sa App Store",
                "fr-CA": "Télécharger sur l’App Store",
                fr: "Télécharger sur l’App Store",
                "ga-IE": "Íoslódáil san App Store",
                "gd-GB": "Luchdaich a-nuas e san App Store",
                gl: "Descargar na App Store",
                gu: "App Store પર ડાઉનલોડ કરો",
                "ha-Latn-NG": "Zazzage App Store",
                he: "הורד בחנות האפליקציות",
                hi: "ऐप स्टोर से डाउनलोड करें",
                hr: "Preuzmite iz trgovine App Store",
                hu: "Letöltés az App Store-ból",
                hy: "Ներբեռնել Գործադիրների խանութից",
                id: "Unduh di Bursa Aplikasi",
                is: "Sækja í App Store",
                it: "Scarica dall'App Store",
                ja: "アプリ ストアでダウンロード",
                ka: "ჩამოტვირთვა App Store-დან",
                kk: "App Store дүкенінен жүктеп алу",
                "km-KH": "ទាញយកនៅលើ App Store",
                kn: "ಅಪ್ಲಿ ಸ್ಟೋರ್‌ನಲ್ಲಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
                ko: "App Store에서 다운로드",
                kok: "ऍप्लिकेशन स्टोराचेर डावनलोड करचें",
                ky: "Колдонмо дүкөнүнөн жүктөп алыңыз",
                "lb-LU": "Am App Store eroflueden",
                "lo-LA": "ດາວ​ໂຫຼດ​​ໃນ​ App Store",
                lt: "Atsisiųsti iš „App Store“",
                lv: "Lejupielādēt lietojumprogrammu veikalā",
                "mi-NZ": "Tikiake i te Pātaka Taupānga",
                mk: "Преземете од продавницата за апликации",
                ml: "ആപ്പ് സ്റ്റോറിൽ നിന്ന് ഡൗൺലോഡ് ചെയ്യൂ",
                "mn-MN": "Програмын дэлгүүрээс татаж авах",
                mr: "App Store डाउनलोड करा",
                ms: "Muat turun pada App Store",
                "mt-MT": "Niżżel fl-App Store",
                "ne-NP": "App Store बाट डाउनलोड गर्नुहोस्",
                nl: "Downloaden in de App Store",
                "nn-NO": "Last ned på App Store",
                no: "Last ned i App Store",
                or: "ଆପ୍ଲିକେସନ୍‌ ଷ୍ଟୋର୍‌ରେ ଡାଉନଲୋଡ୍‌ କରନ୍ତୁ",
                "pa-IN": "ਐਪ ਸਟੋਰ 'ਤੇ ਡਾਉਨਲੋਡ ਕਰੋ",
                pl: "Pobierz ze sklepu z aplikacjami",
                prs: "دانلود کردن در فروشگاه برنامه",
                "pt-PT": "Transferir na Loja de Aplicações",
                pt: "Baixar na App Store",
                "qps-ploc": "Download on the App Store",
                "qps-ploca": "Download on the App Store",
                "qps-plocm": "Download on the App Store",
                "quz-PE": "Llamkana Tiendapi Uraykachiy",
                ro: "Descărcați de la App Store",
                ru: "Скачать из магазина приложений",
                "sd-Arab-PK": "ائپ اسٽور تان ڊائون لوڊ ڪريو",
                "si-LK": "App Store මත බාගන්න",
                sk: "Stiahnuť v App Store",
                sl: "Prenesite iz trgovine App Store",
                sq: "Shkarko në App Store",
                "sr-Cyrl-BA": "Преузмите у услузи App Store",
                "sr-Cyrl": "Преузмите у услузи App Store",
                sr: "Preuzmite u usluzi App Store",
                sv: "Ladda ned i App Store",
                sw: "Pakua kwenye App Store",
                ta: "ஆப் ஸ்டோரிலிருந்து பதிவிறக்கு",
                te: "అనువర్తన స్టోర్ నుండి డౌన్‌లోడ్ చేయండి",
                th: "ดาวน์โหลดใน App Store",
                "tk-TM": "App Store-dan göçürip al",
                tr: "App Store'dan indir",
                tt: "Кушымталар кибетендә йөкләү",
                "ug-CN": "ھەپ دۇكىنىدا چۈشۈرۈش",
                uk: "Завантажити з App Store",
                ur: "ایپ اسٹور پر ڈاؤن لوڈ کریں",
                uz: "App Store orqali yuklab oling",
                vi: "Tải xuống trên App Store",
                "zh-Hans": "在 App Store 商店下载",
                "zh-Hant": "在 App Store 下載"
            },
            Outlook_Brand_Text: {
                af: "Outlook",
                am: "Outlook",
                ar: "Outlook",
                "as-IN": "Outlook",
                "az-Latn-AZ": "Outlook",
                "be-BY": "Outlook",
                bg: "Outlook",
                "bn-BD": "Outlook",
                "bn-IN": "Outlook",
                "bs-Latn-BA": "Outlook",
                "ca-ES-valencia": "Outlook",
                ca: "Outlook",
                cs: "Outlook",
                cy: "Outlook",
                da: "Outlook",
                de: "Outlook",
                el: "Outlook",
                "en-GB": "Outlook",
                en: "Outlook",
                "es-MX": "Outlook",
                es: "Outlook",
                et: "Outlook",
                eu: "Outlook",
                fa: "Outlook",
                fi: "Outlook",
                fil: "Outlook",
                "fr-CA": "Outlook",
                fr: "Outlook",
                "ga-IE": "Outlook",
                "gd-GB": "Outlook",
                gl: "Outlook",
                gu: "Outlook",
                "ha-Latn-NG": "Outlook",
                he: "Outlook",
                hi: "Outlook",
                hr: "Outlook",
                hu: "Outlook",
                hy: "Outlook",
                id: "Outlook",
                is: "Outlook",
                it: "Outlook",
                ja: "Outlook",
                ka: "Outlook",
                kk: "Outlook",
                "km-KH": "Outlook",
                kn: "Outlook",
                ko: "Outlook",
                kok: "Outlook",
                ky: "Outlook",
                "lb-LU": "Outlook",
                "lo-LA": "Outlook",
                lt: "Outlook",
                lv: "Outlook",
                "mi-NZ": "Outlook",
                mk: "Outlook",
                ml: "Outlook",
                "mn-MN": "Outlook",
                mr: "Outlook",
                ms: "Outlook",
                "mt-MT": "Outlook",
                "ne-NP": "Outlook",
                nl: "Outlook",
                "nn-NO": "Outlook",
                no: "Outlook",
                or: "Outlook",
                "pa-IN": "Outlook",
                pl: "Outlook",
                prs: "Outlook",
                "pt-PT": "Outlook",
                pt: "Outlook",
                "qps-ploc": "Outlook",
                "qps-ploca": "Outlook",
                "qps-plocm": "Outlook",
                "quz-PE": "Outlook",
                ro: "Outlook",
                ru: "Outlook",
                "sd-Arab-PK": "Outlook",
                "si-LK": "Outlook",
                sk: "Outlook",
                sl: "Outlook",
                sq: "Outlook",
                "sr-Cyrl-BA": "Outlook",
                "sr-Cyrl": "Outlook",
                sr: "Outlook",
                sv: "Outlook",
                sw: "Outlook",
                ta: "Outlook",
                te: "Outlook",
                th: "Outlook",
                "tk-TM": "Outlook",
                tr: "Outlook",
                tt: "Outlook",
                "ug-CN": "Outlook",
                uk: "Outlook",
                ur: "Outlook",
                uz: "Outlook",
                vi: "Outlook",
                "zh-Hans": "Outlook",
                "zh-Hant": "Outlook"
            },
            Outlook_Button_Text: {
                af: "Kry ons gratis toepassing",
                am: "የኛን ነጻ መተግበሪያ ያግኙ",
                ar: "الحصول على التطبيق المجاني",
                "as-IN": "আমাৰ বিনামূলীয়া এপ্প্‌ লাভ কৰক",
                "az-Latn-AZ": "Pulsuz proqramımızı əldə edin",
                "be-BY": "Атрымаць нашу бясплатную праграму",
                bg: "Получаване на нашето безплатно приложение",
                "bn-BD": "আমাদের বিনামূল্যের অ্যাপটি পেয়ে যান",
                "bn-IN": "আমাদের Free অ্যাপ পান",
                "bs-Latn-BA": "Preuzmite našu besplatnu aplikaciju",
                "ca-ES-valencia": "Obtín l'aplicació gratuïta",
                ca: "Obtén l'aplicació gratuïta",
                cs: "Získat naši bezplatnou aplikaci",
                cy: "Cael ein ap Am Ddim",
                da: "Hent vores gratis app",
                de: "Unsere kostenlose App abrufen",
                el: "Λήψη της δωρεάν εφαρμογής μας",
                "en-GB": "Get our free app",
                en: "Get our Free app",
                "es-MX": "Obtener nuestra aplicación gratuita",
                es: "Obtener nuestra aplicación gratuita",
                et: "Hangi meie tasuta rakendus",
                eu: "Eskuratu doako aplikazioa",
                fa: "برنامه رایگان ما را دریافت کنید",
                fi: "Hanki maksuton sovellus",
                fil: "Kunin ang aming Libreng app",
                "fr-CA": "Obtenir notre application gratuite",
                fr: "Obtenir notre application gratuite",
                "ga-IE": "Faigh ár bhfeidhmchlár saor in aisce",
                "gd-GB": "Faigh an aplacaid shaor an-asgaidh againn",
                gl: "Obter a aplicación gratuíta",
                gu: "અમારી મુફ્ત એપ્લિકેશન મેળવો",
                "ha-Latn-NG": "Sami aikace-aikace na kyauta",
                he: "קבל את האפליקציה שלנו ללא תשלום",
                hi: "हमारा निशुल्क ऐप प्राप्त करें",
                hr: "Nabavite besplatnu aplikaciju",
                hu: "Az ingyenes app letöltése",
                hy: "Ձեռք բերեք մեր անվճար գործադիրը",
                id: "Dapatkan aplikasi Gratis kami",
                is: "Sæktu ókeypis forritið okkar",
                it: "Scarica la nostra app gratuita",
                ja: "無料アプリを入手",
                ka: "მიიღეთ ჩვენი უფასო აპი",
                kk: "Тегін бағдарламаны алу",
                "km-KH": "ទទួលយកកម្មវិធី​ឥតគិតថ្លៃរបស់យើង",
                kn: "ನಮ್ಮ ಉಚಿತ ಅಪ್ಲಿಯನ್ನು ಪಡೆಯಿರಿ",
                ko: "무료 앱 다운로드",
                kok: "आमचें फुकट ऍप्लिकेशन मेळोवचें",
                ky: "Акысыз колдонмобузду алыңыз",
                "lb-LU": "Eis gratis App ofruffen",
                "lo-LA": "ຮັບ​ເອົາ​ແອັບ​ຟຣີຂອງ​ພວກ​ເຮົາ",
                lt: "Gaukite mūsų nemokamą programą",
                lv: "Saņemiet bezmaksas lietojumprogrammu",
                "mi-NZ": "Tīkina tā mātou taupānga Koreutu",
                mk: "Преземете ја нашата бесплатна апликација",
                ml: "ഞങ്ങളുടെ സൗജന്യ ആപ്പ് സ്വന്തമാക്കൂ",
                "mn-MN": "Манай үнэгүй програмыг авах",
                mr: "आमचा विनामूल्य अनुप्रयोग मिळवा",
                ms: "Dapatkan aplikasi Percuma kami",
                "mt-MT": "Ikseb l-app Bla Ħlas tagħna",
                "ne-NP": "हाम्रो नि:शुल्क एप प्राप्त गर्नुहोस्",
                nl: "Onze gratis app downloaden",
                "nn-NO": "Få gratisappen",
                no: "Få vår kostnadsfrie app",
                or: "ମୁକ୍ତ ଆପ୍ଲିକେସନ୍‌ ପ୍ରାପ୍ତ କରନ୍ତୁ",
                "pa-IN": "ਸਾਡੀ ਫਰੀ ਐਪਲੀਕੇਸ਼ਨ ਪ੍ਰਾਪਤ ਕਰੋ",
                pl: "Pobierz naszą bezpłatną aplikację",
                prs: "بدست آوردن برنامه مجانی ما",
                "pt-PT": "Obter a aplicação Gratuita",
                pt: "Obtenha nosso aplicativo gratuito",
                "qps-ploc": "Get our Free app",
                "qps-ploca": "Get our Free app",
                "qps-plocm": "Get our Free app",
                "quz-PE": "Qhasi llamkanaykuta tariy",
                ro: "Obțineți aplicația noastră gratuită",
                ru: "Скачать бесплатное приложение",
                "sd-Arab-PK": "اسان جي مفت ائپ حاصل ڪريو",
                "si-LK": "අපගේ නොමිලේ යෙදුම ලබා ගන්න",
                sk: "Získať bezplatnú aplikáciu",
                sl: "Dobite brezplačno aplikacijo",
                sq: "Merr aplikacionin tonë falas",
                "sr-Cyrl-BA": "Преузмите нашу бесплатну апликацију",
                "sr-Cyrl": "Преузмите нашу бесплатну апликацију",
                sr: "Preuzmite našu besplatnu aplikaciju",
                sv: "Skaffa vår kostnadsfria app",
                sw: "Pata programu ya Bila Malipo",
                ta: "எங்களின் இலவசப் பயன்பாட்டைப் பெறுக",
                te: "మా ఉచిత అనువర్తనాన్ని పొందండి",
                th: "ดาวน์โหลดแอปฟรีของเรา",
                "tk-TM": "Mugt programmamyzy alyň",
                tr: "Ücretsiz uygulamamızı edinin",
                tt: "Түләүсез кушымта йөкләгез",
                "ug-CN": "ھەقسىز ئەپنى ئېلىش",
                uk: "Отримати безкоштовну програму",
                ur: "ہماری مفت ایپ حاصل کریں",
                uz: "Bepul ilovamizni o‘rnating",
                vi: "Tải ứng dụng Miễn phí của chúng tôi",
                "zh-Hans": "获取免费应用",
                "zh-Hant": "取得我們的免費 App"
            },
            Outlook_Description_Text: {
                af: "Gebruik jy steeds webblaaier vir Outlook? Gebruik die Outlook-toepassing, die beste e-pos-toepassing om toegang te verkry tot jou e-pos op die pad.",
                am: "አሁንም ለOutlook የድር አሳሽ እየተጠቀሙ ነው? በጉዞም ላይ እያሉ ኢሜይልዎን ለመዳረስ ተመራጭ የኢሜይል መተግበሪያ የሆነውን የOutlook መተግበሪያ ይጠቀሙ።",
                ar: "هل ما زلت تستخدم مستعرض ويب لـ Outlook؟ استخدم تطبيق Outlook، فهو تطبيق البريد الإلكتروني الأفضل للوصول إلى البريد الإلكتروني أثناء التنقل.",
                "as-IN": "এতিয়াও Outlook-ৰ বাবে ৱেব ব্ৰাউজাৰ ব্যৱহাৰ কৰি আছেনেকি? Outlook এপ্প্‌ ব্যৱহাৰ কৰক, যাত্ৰা পথত আপোনাৰ ইমেইলত প্ৰৱেশ কৰিবৰ বাবে শ্ৰেষ্ঠ ইমেইল এপ্প্‌৷",
                "az-Latn-AZ": "Hələ də Outlook üçün veb-brauzerdən istifadə edirsiniz? Yolda olarkən e-poçtunuza müraciət etmək üçün ən yaxşı e-poçt proqramı olan Outlook proqramından istifadə edin.",
                "be-BY": "Выкарыстоўваеце Outlook праз вэб-браўзер? Карыстайцеся праграмай Outlook — найлепшай праграмай электроннай пошты для доступу да электроннай пошты ў дарозе.",
                bg: "Все още използвате уеб браузър за Outlook? Използвайте приложението Outlook – най-доброто приложение за имейл за достъп до имейла ви в движение.",
                "bn-BD": "এখনো Outlook এর জন্য ওয়েব ব্রাউজার ব্যবহার করছেন? Outlook অ্যাপ ব্যবহার করুন যেটি চলার পথে আপনার ইমেলে অ্যাক্সেস করার সেরা ইমেল অ্যাপ।",
                "bn-IN": "এখনো Outlook এর জন্য ওয়েব ব্রাউজার ব্যবহার করছেন? Outlook অ্যাপ ব্যবহার করুন যেটি চলার পথে আপনার ইমেলে অ্যাক্সেস করার সেরা ইমেল অ্যাপ।",
                "bs-Latn-BA": "I dalјe koristite web preglednik za Outlook? Koristite aplikaciju Outlook app, najbolјu aplikaciju za e-poštu za pristupanje e-pošti u pokretu.",
                "ca-ES-valencia": "Encara utilitzeu el navegador web per a l'Outlook? Utilitzeu l'aplicació de l'Outlook, la millor per accedir al correu electrònic des de qualsevol lloc.",
                ca: "Encara utilitzeu el navegador web per a l'Outlook? Utilitzeu l'aplicació de l'Outlook, la millor per accedir al correu des de qualsevol lloc.",
                cs: "Stále pro Outlook používáte webový prohlížeč? Začněte používat aplikaci Outlook, nejlepší e-mailovou aplikaci pro přístup k e-mailu z mobilních zařízení.",
                cy: "Dal yn defnyddio porwr gwe ar gyfer Outlook? Defnyddiwch yr ap Outlook, yr ap e-bost gorau ar gyfer cael gafael ar eich negeseuon e-bost yn unrhyw le.",
                da: "Bruger du stadig webbrowseren til Outlook? Du kan bruge Outlook-appen, som er den bedste mailapp til at få adgang til din mail på farten.",
                de: "Verwenden Sie immer noch einen Browser für Outlook? Verwenden Sie die Outlook-App, die beste E-Mail-App, um unterwegs auf Ihre E-Mails zuzugreifen.",
                el: "Εξακολουθείτε να χρησιμοποιείτε το πρόγραμμα περιήγησης Web για το Outlook; Χρησιμοποιήστε την εφαρμογή Outlook, την καλύτερη εφαρμογή ηλεκτρονικού ταχυδρομείου για να αποκτήσετε πρόσβαση στα μηνύματα ηλεκτρονικού ταχυδρομείου σας εν κινήσει.",
                "en-GB": "Still using a web browser for Outlook? Use the Outlook app, the best email app for accessing your emails on the go.",
                en: "Still using web browser for Outlook? Use the Outlook app, the best email app for accessing your email on the go.",
                "es-MX": "¿Sigues usando el navegador web para Outlook? Usa Outlook, la mejor aplicación de correo electrónico para tener acceso a tu correo mientras te desplazas.",
                es: "¿Sigue utilizando el explorador web para Outlook? Utilice Outlook, la mejor aplicación de correo electrónico para tener acceso a su correo electrónico mientras se desplaza.",
                et: "Kas kasutate Outlooki endiselt veebibrauseris? Liikvel olles on meiliasju kõige mugavam ajada Outlooki rakenduses.",
                eu: "Oraindik web-arakatzailean erabiltzen al duzu Outlook? Probatu Outlook aplikazioa, edonon zaudela posta atzitzeko aplikaziorik onena.",
                fa: "همچنان از مرورگر وب برای Outlook استفاده می‌کنید؟ از برنامه Outlook، بهترین برنامه ایمیل برای دسترسی فعال به ایمیل خود، استفاده کنید.",
                fi: "Käytätkö Outlookia yhä selaimella? Aloita Outlook-sovelluksen käyttö. Se on kätevin sovellus sähköpostin käsittelyyn missä tahansa.",
                fil: "Gumagamit pa rin ng web browser para sa Outlook? Gamitin ang Outlook app, ang pinakamahusay na email app para i-access ang iyong email nang on the go.",
                "fr-CA": "Vous utilisez un navigateur Web pour accéder à Outlook? Utilisez l’application Outlook, la meilleure pour accéder à votre courrier pendant vos déplacements.",
                fr: "Vous utilisez un navigateur web pour accéder à Outlook ? Utilisez l’application Outlook, la meilleure application de courrier pour accéder à votre courrier pendant vos déplacements.",
                "ga-IE": "An bhfuil brabhsálaí Gréasáin á úsáid agat go fóill le haghaidh Outlook? Úsáid feidhmchlár Outlook, an feidhmchlár ríomhphoist is fearr chun do chuid ríomhphost a rochtain le linn taistil.",
                "gd-GB": "A’ bheil thu a’ cleachdadh brabhsair-lìn airson Outlook fhathast? Cleachd aplacaid Outlook, an aplacaid puist-d as fhearr airson cothrom fhaighinn air a’ phost-d agad air an rathad.",
                gl: "Aínda usas Outlook co explorador web? Cambia á aplicación Outlook, a mellor aplicación de correo electrónico para acceder ás túas mensaxes desde calquera lugar.",
                gu: "હજુ સુધી Outlook માટે વેબ બ્રાઉઝરનો ઉપયોગ કરી રહ્યાં છો? Outlook એપ્લિકેશનનો ઉપયોગ કરો, જે સફરમાં હોય ત્યારે તમારી ઈમેલ ઍક્સેસ કરવા માટે શ્રેષ્ઠ ઈમેલ એપ્લિકેશન છે.",
                "ha-Latn-NG": "Har yanzu ana yin amfani da dandalin kilisa intanet domin Outlook? Yi amfani da ka'idar Outlook, ka'idar imel mafi kyau don iso ga imel ɗinka a kan hanya.",
                he: "עדיין משתמש בדפדפן אינטרנט עבור Outlook? השתמש באפליקציית Outlook, אפליקציית הדואר האלקטרוני הטובה ביותר לגישה לדואר אלקטרוני במהלך נסיעות.",
                hi: "अभी भी Outlook के लिए वेब ब्राउज़र का उपयोग कर रहे हैं? Outlook ऐप का उपयोग करें, चलते-फिरते अपनी ईमेल पर पहुँचने का सर्वश्रेष्ठ ईमेल ऐप.",
                hr: "I dalje koristite web-preglednik za Outlook? Koristite aplikaciju Outlook, najbolju aplikaciju za pristup e-pošti u pokretu.",
                hu: "Még mindig webböngészőben használja az Outlookot? Használja az Outlook appot, amellyel útközben is hozzáférhet a leveleihez.",
                hy: "Դեռ զննիչո՞վ եք մտնում Outlook: Օգտագործեք Outlook գործադիրը՝ էլ. փոստի լավագույն գործադիրը, որի միջոցով կարող եք մատչել ձեր էլ. փոստը գործերի ընթացքում:",
                id: "Masih menggunakan browser web untuk Outlook? Gunakan aplikasi Outlook, aplikasi email terbaik untuk mengakses email di mana saja.",
                is: "Ertu enn að nota Outlook í vafra? Notaðu Outlook-forritið, besta forritið til að skoða tölvupóst á ferðinni.",
                it: "Usi ancora il Web browser per Outlook? Passa all'app di Outlook, la soluzione migliore per accedere alla tua posta elettronica in viaggio.",
                ja: "まだ Outlook を Web ブラウザーで利用していますか? 出先でメールにアクセスするのに最適なメール アプリである Outlook アプリを使いましょう。",
                ka: "ჯერ კიდევ ბრაუზერს იყენებთ Outlook-ისთვის? ისარგებლეთ Outlook-ის აპით, რომელიც არის ელფოსტის საუკეთესო აპი დღის განმავლობაში ელწერილებზე წვდომისთვის.",
                kk: "Outlook бағдарламасын әлі веб-браузерден ашасыз ба? Электрондық поштаңызға кез келген жерден қатынасуға арналған ең тиімді электрондық пошта бағдарламасы болып табылатын Outlook бағдарламасын пайдаланыңыз.",
                "km-KH": "នៅតែប្រើ​កម្មវិធីរុករកវិបសម្រាប់ Outlook ឬ? ប្រើកម្មវិធី Outlook ដែល​ជា​កម្មវិធីអ៊ីម៉ែល​​ល្អបំផុត ដើម្បីចូលប្រើ​អ៊ីម៉ែលរបស់អ្នក​នៅពេលមមាញឹក។",
                kn: "Outlook ಗೆ ಇನ್ನೂ ವೆಬ್ ಬ್ರೌಸರ್ ಬಳಸುತ್ತಿರುವಿರಾ? ಪ್ರಯಾಣ ಮಾಡುತ್ತಿರುವಾಗಲೇ ನಿಮ್ಮ ಇಮೇಲ್ ಪ್ರವೇಶಿಸಲು ಅತ್ಯುತ್ತಮ ಇಮೇಲ್ ಅಪ್ಲಿಯಾದ Outlook ಅಪ್ಲಿ ಬಳಸಿ.",
                ko: "아직 Outlook을 웹 브라우저에서 사용하세요? 이동 중 전자 메일에 액세스할 수 있는 최고의 전자 메일 앱인 Outlook 앱을 사용하세요.",
                kok: "अजुनूय Outlook खातीर वॅब ब्रावजर वापरतात? Outlook ऍप्लिकेशन वापरचें, प्रवासात आसतना तुमचो ईमेल ऍक्सॅस करूंक उत्तम ईमेल ऍप्लिकेशन.",
                ky: "Outlook үчүн дагы эле веб браузер колдонуп жатасызбы? Электрондук почтаңызга басып баратып кирүү үчүн эң мыкты электрондук почта колдонмосу болгон Outlook колдонмосун пайдаланыңыз.",
                "lb-LU": "Benotzt Dir nach ëmmer de Webbrowser fir Outlook? Benotzt d'Outlook-App, déi bescht E-Mail-App fir ënnerwee op Är E-Mailen zouzegräifen.",
                "lo-LA": "ຍັງໃຊ້ເວັບບຣາວເຊີສຳລັບ Outlook ຢູ່ບໍ? ລອງໃຊ້ແອັບ Outlook ເຊິ່ງເປັນແອັບອີເມວທີ່ດີທີ່ສຸດສຳລັບການເຂົ້າອີເມວໃນມືຖືເບິ່ງ.",
                lt: "Vis dar naudojate „Outlook“ per žiniatinklio naršyklę? Naudokite „Outlook“ programą – geriausią sprendimą prireikus pasiekti el. paštą kelyje.",
                lv: "Vai programmai Outlook joprojām izmantojat tīmekļa pārlūkprogrammu? Izmantojiet Outlook lietojumprogrammu — labāko e-pasta lietojumprogrammu, ar ko piekļūt e-pastam, atrodoties jebkur.",
                "mi-NZ": "Kei te whakamahi tonu koe i te pūtirotiro mō Outlook? Whakamahia te taupānga Outlook, arā, te tino taupānga uru īmēra i a koe e hāereere ana.",
                mk: "Сѐ уште ли користите веб-прегледувач за Outlook? Користете ја апликацијата Outlook, најдобрата апликација за пристап до е-поштата додека сте во движење.",
                ml: "ഇപ്പോഴും Outlook-നുള്ള വെബ് ബ്രൗസർ ഉപയോഗിക്കുന്നുണ്ടോ? എവിടെയായിരുന്നാലും നിങ്ങളുടെ ഇമെയിൽ ആക്സസ് ചെയ്യാനുള്ള മികച്ച ഇമെയിൽ ആപ്പ് ആയ Outlook ആപ്പ് ഉപയോഗിക്കൂ.",
                "mn-MN": "Outlook-н вэб хөтчийг ашиглаж байна уу? Явуут дундаа э-шуудандаа хандах боломжтой хамгийн шилдэг Outlook програмыг ашиглана уу.",
                mr: "अद्याप Outlook साठी वेब ब्राउझर वापरत आहात? जाता जाता आपला ईमेल अॅक्सेस करण्यासाठी सर्वोत्तम ईमेल अनुप्रयोग असलेला, Outlook अनुप्रयोग वापरा.",
                ms: "Masih menggunakan pelayar web untuk Outlook? Gunakan aplikasi Outlook yang merupakan aplikasi e-mel terbaik untuk mencapai e-mel anda di mana sahaja.",
                "mt-MT": "Għadek tuża l-brawżer tal-web għal Outlook? Uża l-app ta' Outlook, l-aħjar app tal-emails biex taċċessa l-posta elettronika tiegħek meta tkun barra.",
                "ne-NP": "Outlook का लागि अझैपनि वेब ब्राउजर प्रयोग गर्दै हुनुहुन्छ? जहाँ पनि आफ्नो इमेलमा पहुँच गर्ने उत्कृष्ट इमेल एप, Outlook एप प्रयोग गर्नुहोस्।",
                nl: "Gebruikt u nog steeds een webbrowser voor Outlook? Gebruik de Outlook-app, de beste e-mailapp als u onderweg toegang wilt tot uw e-mail.",
                "nn-NO": "Bruker du framleis nettlesaren for Outlook? Bruk Outlook-appen, den beste e-postappen for å få tilgang til e-posten på farten.",
                no: "Bruker du fremdeles nettleseren for Outlook? Bruk Outlook-appen, den beste e-postappen for tilgang til e-post på farten.",
                or: "ବର୍ତ୍ତମାନ ମଧ୍ୟ Outlook ପାଇଁ ୱେବ୍‌ ବ୍ରାଉଜର୍‌ ବ୍ୟବହାର କରୁଛନ୍ତି କି? Outlook ଆପ୍ଲିକେସନ୍‌ ବ୍ୟବହାର କରନ୍ତୁ, ସକ୍ରିୟ ରୂପେ ଆପଣଙ୍କ ଇମେଲ୍‌କୁ ପ୍ରବେଶ କରିବା ପାଇଁ ସର୍ବଶ୍ରେଷ୍ଠ ଇମେଲ୍‌ ଆପ୍ଲିକେସନ୍.",
                "pa-IN": "ਹਾਲੇ ਵੀ Outlook ਲਈ ਵੈਬ ਬ੍ਰਾਉਜ਼ਰ ਵਰਤ ਰਹੇ ਹੋ? Outlook ਐਪਲੀਕੇਸ਼ਨ, ਜੋ ਸਫਰ ਦੌਰਾਨ ਤੁਹਾਡੀ ਈਮੇਲ ਨੂੰ ਐਕਸੈਸ ਕਰਨ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ ਐਪਲੀਕੇਸ਼ਨ ਹੈ, ਦੀ ਵਰਤੋਂ ਕਰੋ।",
                pl: "Nadal korzystasz z programu Outlook w przeglądarce internetowej? Użyj aplikacji Outlook — najlepszej aplikacji poczty e-mail zapewniającej dostęp do wiadomości e-mail w podróży.",
                prs: "هنوز از مرورگر وب برای Outlook استفاده می کنید؟ برنامه Outlook، بهترین برنامه ایمیل را برای دسترسی به ایمیل خود در هر جا استفاده کنید.",
                "pt-PT": "Ainda utiliza um browser para aceder ao Outlook? Utilize a aplicação Outlook, a melhor aplicação para aceder ao seu e-mail em qualquer lugar.",
                pt: "Ainda usando o navegador da Web para o Outlook? Use o aplicativo Outlook, o melhor aplicativo de email para acessar seu email em qualquer lugar.",
                "qps-ploc": "Still using web browser for Outlook? Use the Outlook app, the best email app to access your email on the go.",
                "qps-ploca": "Still using web browser for Outlook? Use the Outlook app, the best email app to access your email on the go.",
                "qps-plocm": "Still using web browser for Outlook? Use the Outlook app, the best email app to access your email on the go.",
                "quz-PE": "¿Web maskana Outlook kaqpaq ruwachkankilla? Outlook llamkanata ruway, allin correo electronico llamkanata yaykunapaq correo electronicoykiman qatiypaq.",
                ro: "Încă mai folosiți browserul web pentru Outlook? Utilizați aplicația Outlook, cea mai bună aplicație de e-mail pentru a vă accesa e-mailul din deplasare.",
                ru: "Все еще открываете Outlook в браузере? Воспользуйтесь приложением Outlook — лучшим почтовым клиентом для работы в пути.",
                "sd-Arab-PK": "اڃا تائين Outlook لاءِ ويب برائوزر استعمال ڪري رهيا آهيو؟ Outlook ايپ استعمال ڪريو، جيڪا مصروف هجڻ تي توهان جي اي ميل ڏانهن رسائي لاءِ بهترين ائپ آهي.",
                "si-LK": "තවමත් Outlook සඳහා වෙබ් බ්‍රව්සරය භාවිතා කරනවා ද? යන ගමන් ඔබේ ඊමේල් වෙත ප්‍රවේශ වීමට ඇති හොඳම ඊමේල් යෙදුම වන, Outlook යෙදුම භාවිතා කරන්න.",
                sk: "Stále používate Outlook vo webovom prehliadači? Začnite používať aplikáciu Outlook, najlepšiu e-mailovú aplikáciu na prístup k e-mailom na cestách.",
                sl: "Ali še vedno uporabljate spletni brskalnik za Outlook? Uporabite aplikacijo Outlook – najboljšo e-poštno aplikacijo za dostop do e-pošte na poti.",
                sq: "Ende vazhdon të përdorësh shfletuesin e uebit për Outlook? Përdor aplikacionin e Outlook, aplikacionin më të mirë të emailit për t'u qasur në emailin tënd kur je në lëvizje.",
                "sr-Cyrl-BA": "И даље користите веб прегледач за Outlook? Користите апликацију Outlook app, најбољу апликацију за е-пошту за приступање е-пошти у покрету.",
                "sr-Cyrl": "И даље користите веб прегледач за Outlook? Користите апликацију Outlook, најбољу апликацију за е-пошту за приступ е-пошти у покрету.",
                sr: "I dalje koristite veb pregledač za Outlook? Koristite aplikaciju Outlook, najbolju aplikaciju za e-poštu za pristup e-pošti u pokretu.",
                sv: "Använder du fortfarande Outlook i webbläsaren? Använd Outlook-appen, den bästa e-postappen för att komma åt din e-post snabbt och enkelt.",
                sw: "Bado unatumia kivinjari cha Outlook? Tumia programu ya Outlook, programu bora ya barua pepe ili kufikia barua pepe yako popote uendapo.",
                ta: "Outlook-க்காக இப்போதும் வலை உலாவியைப் பயன்படுத்துகிறீர்களா? பயணத்தின் போதும் உங்கள் மின்னஞ்சலை அணுகுவதற்கான சிறந்த மின்னஞ்சல் பயன்பாடான Outlook பயன்பாட்டைப் பயன்படுத்தவும்.",
                te: "ఇప్పటికీ Outlook కోసం వెబ్ బ్రౌజర్‌ని ఉపయోగిస్తున్నారా? Outlook అనువర్తనాన్ని ఉపయోగించండి, ప్రయాణంలో ఉన్నప్పుడు మీ ఇమెయిల్‌ని ప్రాప్యత చేయడానికి ఉత్తమ ఇమెయిల్ అనువర్తనం.",
                th: "ยังคงใช้เว็บเบราว์เซอร์สำหรับ Outlook ใช่หรือไม่ ลองใช้แอป Outlook ซึ่งเป็นแอปอีเมลที่เหมาะที่สุดในการเข้าถึงอีเมลในขณะเดินทาง",
                "tk-TM": "Outlook üçin henizem web-brauzer ulanýaňyzmy? Outlook programmasyny ulanyň, ol e-poçtaňyza ýüzugra girmek üçin iň gowy e-poçta programmasy.",
                tr: "Outlook'u hala web tarayıcısıyla mı görüntülüyorsunuz? Hareket halindeyken e-postalarınıza erişmek için kullanabileceğiniz en iyi e-posta uygulaması olan Outlook uygulamasını kullanın.",
                tt: "Әле дә Outlook өчен веб-күзәтүче кулланасызмы? Электрон почтага туры керү өчен, Outlook кушымтасы, иң яхшы электрон почта кушымтасы кулланыгыз.",
                "ug-CN": "Outlook نى يەنىلا تور كۆرگۈچتە ئىشلىتىۋاتامسىز؟ Outlook ئەپىنى ئىشلىتىڭ، ئۇ تورخەتنى كۆچمە ھالەتتە ئىشلىتىدىغان ئەڭ ياخشى ئەپ.",
                uk: "Усе ще працюєте з Outlook у браузері? Переходьте на програму Outlook, яка найкраще підходить для роботи з електронною поштою через Інтернет.",
                ur: "اب بھی Outlook کے لئے ویب براؤزر استعمال کر رہے ہیں؟ Outlook ایپ استعمال کریں، سفر میں آپ کی ای میل تک رسائی کے لئے بہترین ای میل ایپ۔",
                uz: "Outlook xizmatidan haliyam brauzerda foydalanyapsizmi? Yo‘l-yo‘lakay e-pochtangizga kirish uchun eng yaxshi pochta ilovasi – Outlook ilovasini ishlating.",
                vi: "Bạn vẫn đang sử dụng trình duyệt web cho Outlook? Hãy sử dụng ứng dụng Outlook, ứng dụng email tốt nhất để truy nhập email của bạn mọi lúc, mọi nơi.",
                "zh-Hans": "仍在通过 Web 浏览器使用 Outlook? 使用 Outlook 应用这一优秀电子邮件应用，可在旅途中访问你的电子邮件。",
                "zh-Hant": "仍透過網頁瀏覽器使用 Outlook 嗎? 使用 Outlook App，這是您外出時存取電子郵件的最佳電子郵件 App。"
            },
            Outlook_Image_Text: {
                af: "outlook.com-logo",
                am: "የ outlook.com አርማ",
                ar: "شعار outlook.com",
                "as-IN": "outlook.com ল’গ’",
                "az-Latn-AZ": "outlook.com loqosu",
                "be-BY": "лагатып outlook.com",
                bg: "Емблема на Outlook.com",
                "bn-BD": "outlook.com প্রতীক",
                "bn-IN": "outlook.com লোগো",
                "bs-Latn-BA": "outlook.com logotip",
                "ca-ES-valencia": "logotip d'Outlook.com",
                ca: "logotip d'Outlook.com",
                cs: "logo outlook.com",
                cy: "logo outlook.com",
                da: "Outlook.com-logo",
                de: "outlook.com-Logo",
                el: "λογότυπο του outlook.com",
                "en-GB": "outlook.com logo",
                en: "outlook.com logo",
                "es-MX": "logotipo de outlook.com",
                es: "logotipo de outlook.com",
                et: "Outlook.com-i logo",
                eu: "outlook.com logotipoa",
                fa: "آرم outlook.com",
                fi: "outlook.com-logo",
                fil: "logo ng outlook.com",
                "fr-CA": "Logo Outlook.com",
                fr: "Logo Outlook.com",
                "ga-IE": "lógó outlook.com",
                "gd-GB": "suaicheantas outlook.com",
                gl: "logotipo de outlook.com",
                gu: "outlook.com લૉગો",
                "ha-Latn-NG": "alamar shaida ta outlook.com",
                he: "סמל outlook.com",
                hi: "outlook.com लोगो",
                hr: "logotip servisa outlook.com",
                hu: "Outlook.com embléma",
                hy: "outlook.com-ի պատկերանշան",
                id: "logo outlook.com",
                is: "lógó outlook.com",
                it: "logo di outlook.com",
                ja: "Outlook.com のロゴ",
                ka: "outlook.com-ის ლოგო",
                kk: "outlook.com логотипі",
                "km-KH": "និមិត្តសញ្ញា outlook.com",
                kn: "outlook.com ಲೋಗೋ",
                ko: "outlook.com 로고",
                kok: "outlook.com लोगो",
                ky: "outlook.com логотиби",
                "lb-LU": "Outlook.com-Logo",
                "lo-LA": "​ໂລ​ໂກ້ outlook.com",
                lt: "outlook.com logotipas",
                lv: "Outlook.com logotips",
                "mi-NZ": "moko outlook.com",
                mk: "лого на outlook.com",
                ml: "outlook.com ലോഗോ",
                "mn-MN": "outlook.com-ын лого",
                mr: "outlook.com लोगो",
                ms: "logo outlook.com",
                "mt-MT": "logo ta' Outlook.com",
                "ne-NP": "outlook.com लोगो",
                nl: "Outlook.com-logo",
                "nn-NO": "outlook.com-logo",
                no: "outlook.com-logo",
                or: "outlook.com ଲୋଗୋ",
                "pa-IN": "outlook.com ਪਛਾਣ ਚਿੰਨ੍ਹ",
                pl: "logo usługi outlook.com",
                prs: "لوگوی outlook.com",
                "pt-PT": "logótipo do outlook.com",
                pt: "logotipo do outlook.com",
                "qps-ploc": "outlook.com logo",
                "qps-ploca": "outlook.com logo",
                "qps-plocm": "outlook.com logo",
                "quz-PE": "outlook.com logo",
                ro: "sigla Outlook.com",
                ru: "Логотип Outlook.com",
                "sd-Arab-PK": "outlook.com لوگو",
                "si-LK": "outlook.com ලාංඡනය",
                sk: "logo outlook.com",
                sl: "Logotip za outlook.com",
                sq: "logoja e outlook.com",
                "sr-Cyrl-BA": "outlook.com логотип",
                "sr-Cyrl": "outlook.com логотип",
                sr: "outlook.com logotip",
                sv: "Outlook.com-logotyp",
                sw: "nembo ya outlook.com",
                ta: "outlook.com லோகோ",
                te: "outlook.com లోగో",
                th: "โลโก้ outlook.com",
                "tk-TM": "outlook.com logotipi",
                tr: "Outlook.com logosu",
                tt: "outlook.com логотибы",
                "ug-CN": "outlook.com تۇغى",
                uk: "Емблема Outlook.com",
                ur: "outlook.com لوگو",
                uz: "outlook.com logotipi",
                vi: "logo outlook.com",
                "zh-Hans": "outlook.com 徽标",
                "zh-Hant": "outlook.com 標誌"
            },
            Outlook_Title_Text: {
                af: "Kry die Outlook-toepassing",
                am: "የ Outlook መተግበሪያው አግኝ",
                ar: "الحصول على تطبيق Outlook",
                "as-IN": "Outlook এপ্প্‌ লাভ কৰক",
                "az-Latn-AZ": "Outlook Proqramını əldə edin",
                "be-BY": "Атрымайце праграму Outlook",
                bg: "Получаване на приложението Outlook",
                "bn-BD": "Outlook অ্যাপটি নিয়ে নিন",
                "bn-IN": "Outlook অ্যাপটি পান",
                "bs-Latn-BA": "Preuzmite aplikaciju Outlook",
                "ca-ES-valencia": "Obtenció de l'aplicació de l'Outlook",
                ca: "Obtenció de l'aplicació de l'Outlook",
                cs: "Získejte aplikaci Outlook",
                cy: "Cael yr Ap Outlook",
                da: "Hent Outlook-appen",
                de: "Outlook-App abrufen",
                el: "Λήψη της εφαρμογής Outlook",
                "en-GB": "Get the Outlook app",
                en: "Get the Outlook App",
                "es-MX": "Obtener la aplicación Outlook",
                es: "Obtener la aplicación Outlook",
                et: "Hangi Outlooki rakendus",
                eu: "Eskuratu Outlook aplikazioa",
                fa: "دریافت برنامه Outlook",
                fi: "Hanki Outlook-sovellus",
                fil: "Kunin ang Outlook App",
                "fr-CA": "Obtenir l’application Outlook",
                fr: "Obtenir l’application Outlook",
                "ga-IE": "Faigh feidhmchlár Outlook",
                "gd-GB": "Faigh aplacaid Outlook",
                gl: "Obtén a aplicación Outlook",
                gu: "Outlook એપ્લિકેશન મેળવો",
                "ha-Latn-NG": "Sami Aikace-aikacen Outlook",
                he: "קבל את אפליקציית Outlook",
                hi: "Outlook ऐप प्राप्त करें",
                hr: "Nabavite aplikaciju Outlook",
                hu: "Az Outlook app letöltése",
                hy: "Ձեռք բերել Outlook գործադիրը",
                id: "Dapatkan Aplikasi Outlook",
                is: "Sæktu Outlook-forritið",
                it: "Scarica l'app di Outlook",
                ja: "Outlook アプリを入手しましょう",
                ka: "მიიღეთ Outlook აპი",
                kk: "Outlook бағдарламасын алу",
                "km-KH": "ទទួលយកកម្មវិធី Outlook",
                kn: "Outlook ಅಪ್ಲಿ ಪಡೆಯಿರಿ",
                ko: "Outlook 앱 다운로드",
                kok: "Outlook ऍप्लिकेशन मेळोवचें",
                ky: "Outlook колдонмосун алыңыз",
                "lb-LU": "Outlook-App eroflueden",
                "lo-LA": "​ເອົາ​ແອັບ Outlook",
                lt: "Gaukite „Outlook“ programą",
                lv: "Iegūstiet Outlook App",
                "mi-NZ": "Tīkina te Taupānga Outlook",
                mk: "Преземете ја апликацијата Outlook",
                ml: "Outlook ആപ്പ് സ്വന്തമാക്കുക",
                "mn-MN": "Outlook програм авах",
                mr: "Outlook अनुप्रयोग मिळवा",
                ms: "Dapatkan Aplikasi Outlook",
                "mt-MT": "Ikseb l-App ta' Outlook",
                "ne-NP": "Outlook एप प्राप्त गर्नुहोस्",
                nl: "Outlook-app downloaden",
                "nn-NO": "Få Outlook-appen",
                no: "Skaff deg Outlook-appen",
                or: "Outlook ଆପ୍ଲିକେସନ୍‌ ପ୍ରାପ୍ତ କରନ୍ତୁ",
                "pa-IN": "Outlook ਐਪਲੀਕੇਸ਼ਨ ਪ੍ਰਾਪਤ ਕਰੋ",
                pl: "Pobierz aplikację Outlook",
                prs: "بدست آوردن برنامه Outlook",
                "pt-PT": "Obter a Aplicação Outlook",
                pt: "Obtenha o Aplicativo do Outlook",
                "qps-ploc": "Get the Outlook App",
                "qps-ploca": "Get the Outlook App",
                "qps-plocm": "Get the Outlook App",
                "quz-PE": "Outlook Llamkanata tariy",
                ro: "Obțineți aplicația Outlook",
                ru: "Скачивание приложения Outlook",
                "sd-Arab-PK": "Outlook ائپ حاصل ڪريو",
                "si-LK": "Outlook යෙදුම ලබා ගන්න",
                sk: "Získajte aplikáciu Outlook",
                sl: "Dobite aplikacijo Outlook",
                sq: "Merr aplikacionin e Outlook",
                "sr-Cyrl-BA": "Преузмите апликацију Outlook",
                "sr-Cyrl": "Преузмите апликацију Outlook",
                sr: "Preuzmite aplikaciju Outlook",
                sv: "Skaffa Outlook-appen",
                sw: "Pata Outlook App",
                ta: "Outlook பயன்பாட்டைப் பெறுக",
                te: "Outlook అనువర్తనాన్ని పొందండి",
                th: "ดาวน์โหลดแอป Outlook",
                "tk-TM": "Outlook programmasyny alyň",
                tr: "Outlook Uygulamasını edinin",
                tt: "Outlook кушымтасын алу",
                "ug-CN": "Outlook ئەپىنى ئېلىش",
                uk: "Отримайте програму Outlook",
                ur: "Outlook ایپ حاصل کریں",
                uz: "Outlook ilovasini oling",
                vi: "Tải Ứng dụng Outlook",
                "zh-Hans": "获取 Outlook 应用",
                "zh-Hant": "取得 Outlook App"
            },
            Outlook_UseBrowser_Text: {
                af: "Gaan voort deur webblaaier te gebruik",
                am: "የድር አሳሽ መጠቀምን ይቀጥሉ",
                ar: "متابعة استخدام مستعرض الويب",
                "as-IN": "ৱেব ব্ৰাউজাৰ ব্যৱহাৰ কৰি অব্যাহত ৰাখক",
                "az-Latn-AZ": "Veb-brauzerdən istifadə edərək davam edin",
                "be-BY": "Працягнуць у вэб-браўзеры",
                bg: "Продължете да използвате уеб браузъра",
                "bn-BD": "ওয়েব ব্রাউজার ব্যবহার করা চালিয়ে যান",
                "bn-IN": "ওয়েব ব্রাউজার ব্যবহার করা চালিয়ে যান",
                "bs-Latn-BA": "Nastavite koristiti web preglednik",
                "ca-ES-valencia": "Continua utilitzant el navegador web",
                ca: "Continua utilitzant el navegador web",
                cs: "Pokračovat pomocí webového prohlížeče",
                cy: "Bwrw ymlaen gan ddefnyddio porwr gwe",
                da: "Fortsæt med at bruge webbrowser",
                de: "Mit Verwendung des Webbrowsers fortfahren",
                el: "Συνέχεια με χρήση ενός προγράμματος περιήγησης στο web",
                "en-GB": "Continue using web browser",
                en: "Continue using web browser",
                "es-MX": "Continuar utilizando el explorador web",
                es: "Continuar utilizando el explorador web",
                et: "Jätka veebibrauseris",
                eu: "Jarraitu web-arakatzailea erabiltzen",
                fa: "با استفاده از مرورگر وب ادامه دهید",
                fi: "Jatka selaimen käyttöä",
                fil: "Patuloy na gamitin ang web browser",
                "fr-CA": "Continuer à utiliser le navigateur Web",
                fr: "Continuer à utiliser le navigateur web",
                "ga-IE": "Lean ort ag úsáid an bhrabhsálaí Ghréasáin",
                "gd-GB": "Sìor-chleachd am brabhsair-lìn agad",
                gl: "Continuar usando o explorador web",
                gu: "વેબ બ્રાઉઝરનો ઉપયોગ કરવાનું ચાલુ રાખો",
                "ha-Latn-NG": "Ci gaba da amfani da browser ta yanar gizo",
                he: "המשך באמצעות דפדפן אינטרנט",
                hi: "वेब ब्राउज़र का उपयोग जारी रखें",
                hr: "Nastavi putem web-preglednika",
                hu: "A webböngésző használatának folytatása",
                hy: "Շարունակել օգտվել վեբ զննիչից",
                id: "Terus menggunakan browser web",
                is: "Halda áfram með vafra",
                it: "Continua a usare il Web browser",
                ja: "Web ブラウザーを引き続き使う",
                ka: "ვებ-ბრაუზერის კვლავ გამოყენება",
                kk: "Веб-браузерді пайдалануды жалғастыру",
                "km-KH": "បន្តប្រើប្រាស់​កម្មវិធីរុករកវិប",
                kn: "ವೆಬ್ ಬ್ರೌಸರ್ ಬಳಸುವುದನ್ನು ಮುಂದುವರಿಸಿ",
                ko: "웹 브라우저를 사용하여 계속",
                kok: "वॅब ब्रावजर वापरून फुडें वचचें",
                ky: "Веб браузерди колдоно бериңиз",
                "lb-LU": "Iwwer de Webbrowser virufueren",
                "lo-LA": "ສືບ​ຕໍ່​ໃຊ້​ເວັບ​ບຣາວ​ເຊີ",
                lt: "Tęsti naudojant žiniatinklio naršyklę",
                lv: "Turpināt tīmekļa pārlūkprogrammas izmantošanu",
                "mi-NZ": "Haere tonu mā te whakamahi i te pūtirotiro tukutuku",
                mk: "Продолжете да го користите веб-прегледувачот",
                ml: "വെബ് ബ്രൗസർ ഉപയോഗം തുടരുക",
                "mn-MN": "Вэб хөтөч ашиглан үргэлжлүүлэх",
                mr: "वेब ब्राउझर वापरणे सुरू ठेवा",
                ms: "Teruskan menggunakan pelayar web",
                "mt-MT": "Tkompli uża l-brawżer tal-web",
                "ne-NP": "वेब ब्राउजर प्रयोग गर्न जारी राख्नुहोस्",
                nl: "Webbrowser blijven gebruiken",
                "nn-NO": "Hald fram med å bruke nettlesaren",
                no: "Fortsett å bruke nettleseren",
                or: "ୱେବ୍‌ ବ୍ରାଉଜର୍‌ ବ୍ୟବହାର କରିବା ଜାରି ରଖନ୍ତୁ",
                "pa-IN": "ਵੈਬ ਬ੍ਰਾਉਜ਼ਰ ਦੀ ਵਰਤੋਂ ਕਰਨਾ ਜਾਰੀ ਰੱਖੋ",
                pl: "Nadal korzystaj z przeglądarki sieci Web",
                prs: "ادامه استفاده از مروگر وب",
                "pt-PT": "Continuar a utilizar o browser",
                pt: "Continuar usando o navegador da Web",
                "qps-ploc": "Continue using web browser",
                "qps-ploca": "Continue using web browser",
                "qps-plocm": "Continue using web browser",
                "quz-PE": "Web maskanata qatiyta ruwachkan",
                ro: "Continuați să utilizați browserul web",
                ru: "Продолжить использовать веб-браузер",
                "sd-Arab-PK": "ويب برائوزر استعمال ڪندي جاري رکو",
                "si-LK": "වෙබ් බ්‍රවුසරය භාවිතයෙන් ඉදිරියට යන්න",
                sk: "Naďalej používať webový prehliadač",
                sl: "Še naprej uporabljajte spletni brskalnik",
                sq: "Vazhdo të përdorësh shfletuesin e uebit",
                "sr-Cyrl-BA": "Наставите да користите веб прегледач",
                "sr-Cyrl": "Наставите да користите веб прегледач",
                sr: "Nastavite da koristite veb pregledač",
                sv: "Fortsätt använda webbläsare",
                sw: "Endelea kutumia kivinjari cha wavuti",
                ta: "வலை உலாவியைப் பயன்படுத்தித் தொடர்க",
                te: "వెబ్ బ్రౌజర్‌ని ఉపయోగించి కొనసాగించండి",
                th: "ดำเนินการต่อโดยใช้เว็บเบราว์เซอร์",
                "tk-TM": "Web brauzeri ulanmaga dowam et",
                tr: "Web tarayıcısı kullanmaya devam et",
                tt: "Веб-күзәтүчесе белән эшне дәвам итү",
                "ug-CN": "تور كۆرگۈچتە داۋاملاشتۇرۇش",
                uk: "Продовжити використовувати браузер",
                ur: "ویب براؤزر استعمال کرتے ہوئے جاری رکھیں",
                uz: "Veb-brauzerdan foydalanishda davom etish",
                vi: "Tiếp tục sử dụng trình duyệt web",
                "zh-Hans": "继续使用 Web 浏览器",
                "zh-Hant": "繼續使用網頁瀏覽器"
            },
            PrivacyCookies_Text: {
                af: "Privaatheid en koekies",
                am: "ግላዊነት እና ኩኪዎች",
                ar: "الخصوصية وملفات تعريف الارتباط",
                "as-IN": "গোপনীয়তা আৰু কুকিসমূহ",
                "az-Latn-AZ": "Məxfilik və kukilər",
                "be-BY": "Канфідэнцыяльнасць і файлы cookie",
                bg: "Поверителност и бисквитки",
                "bn-BD": "গোপনীয়তা এবং কুকিজ",
                "bn-IN": "গোপনীয়তা এবং কুকিজ",
                "bs-Latn-BA": "Privatnost i kolačići",
                "ca-ES-valencia": "Privacitat i galletes",
                ca: "Privadesa i galetes",
                cs: "Ochrana osobních údajů a soubory cookie",
                cy: "Preifatrwydd a briwsion",
                da: "Beskyttelse af personlige oplysninger og cookies",
                de: "Datenschutz und Cookies",
                el: "Προστασία προσωπικών δεδομένων και cookie",
                "en-GB": "Privacy & cookies",
                en: "Privacy & cookies",
                "es-MX": "Privacidad y cookies",
                es: "Privacidad y cookies",
                et: "Privaatsus ja küpsised",
                eu: "Pribatutasuna eta cookieak",
                fa: "حریم خصوصی و کوکی‌ها",
                fi: "Tietosuoja ja evästeet",
                fil: "Privacy at cookies",
                "fr-CA": "Confidentialité et cookies",
                fr: "Confidentialité et cookies",
                "ga-IE": "Príobháideachas & fianáin",
                "gd-GB": "Prìobhaideachd ⁊ briosgaidean",
                gl: "Privacidade e cookies",
                gu: "ગોપનીયતા અને કુકીઝ",
                "ha-Latn-NG": "Sirri & kukis",
                he: "פרטיות וקבצי Cookie",
                hi: "गोपनीयता और कुकीज़",
                hr: "Zaštita privatnosti i kolačići",
                hu: "Adatvédelem és cookie-k",
                hy: "Գաղտնիություն և թխուկներ",
                id: "Privasi & cookie",
                is: "Persónuvernd og kökur",
                it: "Privacy e cookie",
                ja: "プライバシーと Cookie",
                ka: "კონფიდენციალურობა და ქუქი-ჩანაწერები",
                kk: 'Құпиялылық және "Cookie" файлдары',
                "km-KH": "ភាពឯកជន និង​ឃុកឃី",
                kn: "ಗೌಪ್ಯತೆ & ಕುಕೀಗಳು",
                ko: "개인정보처리방침",
                kok: "गुप्तताय & कूकीस",
                ky: "Купуялык жана cookie файлдары",
                "lb-LU": "Dateschutz a Cookien",
                "lo-LA": "ຄວາມເປັນສ່ວນຕົວ ແລະ ຄຸກກີ້",
                lt: "Privatumas ir slapukai",
                lv: "Konfidencialitāte un sīkfaili",
                "mi-NZ": "Tūmataitinga me ngā pihikete",
                mk: "Приватност и колачиња",
                ml: "സ്വകാര്യതയും കുക്കികളും",
                "mn-MN": "Нууцлал ба күүкий",
                mr: "गोपनीयता व कुकीज",
                ms: "Privasi & kuki",
                "mt-MT": "Privatezza u cookies",
                "ne-NP": "गोपनीयता & कुकीहरू",
                nl: "Privacy en cookies",
                "nn-NO": "Personvern og informasjonskapslar",
                no: "Personvern og informasjonskapsler",
                or: "ଗୋପନୀୟତା ଏବଂ କୁକୀସମୂହ",
                "pa-IN": "ਗੋਪਨੀਯਤਾ ਅਤੇ ਕੂਕੀਜ਼",
                pl: "Poufność i cookies",
                prs: "حریم خصوصی و کوکی ها",
                "pt-PT": "Privacidade e Cookies",
                pt: "Privacidade e cookies",
                "qps-ploc": "Privacy & cookies",
                "qps-ploca": "Privacy & cookies",
                "qps-plocm": "Privacy & cookies",
                "quz-PE": "Sapanchasqa & cookiekuna",
                ro: "Confidențialitate și module cookie",
                ru: "Конфиденциальность и файлы cookie",
                "sd-Arab-PK": "رازداري & ڪوڪيز",
                "si-LK": "රහස්‍යතාව සහ කුකී",
                sk: "Ochrana osobných údajov a súbory cookie",
                sl: "Zasebnost in piškotki",
                sq: "Privatësia dhe kukit",
                "sr-Cyrl-BA": "Приватност и колачићи",
                "sr-Cyrl": "Приватност и колачићи",
                sr: "Privatnost i kolačići",
                sv: "Sekretess och cookies",
                sw: "Faragha & vidakuzi",
                ta: "தனியுரிமை & குக்கீகள்",
                te: "గోప్యత & కుక్కీలు",
                th: "ความเป็นส่วนตัวและคุกกี้",
                "tk-TM": "Gizlinlik we kukiler",
                tr: "Gizlilik ve tanımlama bilgileri",
                tt: 'Хосусыйлык һәм "cookie" файллары',
                "ug-CN": "مەخپىيەتلىك ۋە ساقلانمىلار",
                uk: "Конфіденційність і файли cookie",
                ur: "نجی نوعیت اور کوکیز",
                uz: "Maxfiylik va cookie-fayllar",
                vi: "Quyền riêng tư & cookie",
                "zh-Hans": "隐私与 Cookie",
                "zh-Hant": "隱私權與 Cookie"
            },
            SignInButton_Text: {
                af: "Meld aan ",
                am: "በመለያ ግባ ",
                ar: "تسجيل الدخول ",
                "as-IN": "ছাইন ইন কৰক ",
                "az-Latn-AZ": "Daxil ol",
                "be-BY": "Увайсці",
                bg: "Влизане ",
                "bn-BD": "সাইন ইন ",
                "bn-IN": "সাইন ইন করুন ",
                "bs-Latn-BA": "Prijavite se",
                "ca-ES-valencia": "Inicia la sessió ",
                ca: "Inicia la sessió ",
                cs: "Přihlásit se ",
                cy: "Mewngofnodi ",
                da: "Log på ",
                de: "Anmelden ",
                el: "Είσοδος ",
                "en-GB": "Sign in ",
                en: "Sign in ",
                "es-MX": "Iniciar sesión ",
                es: "Iniciar sesión ",
                et: "Logi sisse",
                eu: "Hasi saioa ",
                fa: "ورود به سیستم",
                fi: "Kirjaudu sisään ",
                fil: "Mag-sign in ",
                "fr-CA": "Se connecter ",
                fr: "Se connecter ",
                "ga-IE": "Sínigh isteach ",
                "gd-GB": "Clàraich a-steach ",
                gl: "Iniciar sesión ",
                gu: "સાઇન ઇન ",
                "ha-Latn-NG": "Shiga ",
                he: "היכנס",
                hi: "साइन इन करें ",
                hr: "Prijava ",
                hu: "Bejelentkezés ",
                hy: "Մուտք գործել",
                id: "Masuk ",
                is: "Skrá inn ",
                it: "Accedi",
                ja: "サインイン",
                ka: "შესვლა",
                kk: "Кіру ",
                "km-KH": "ចុះឈ្មោះចូល",
                kn: "ಸೈನ್ ಇನ್ ",
                ko: "로그인 ",
                kok: "सायन इन करचें ",
                ky: "Катталып кирүү ",
                "lb-LU": "Umellen ",
                "lo-LA": "ລົງ​ຊື່​ເຂົ້າ​ໃຊ້ ",
                lt: "Prisijungti",
                lv: "Pierakstīties ",
                "mi-NZ": "Takiuru ",
                mk: "Пријави се ",
                ml: "സൈനിൻ ചെയ്യുക ",
                "mn-MN": "Нэвтрэх ",
                mr: "साइन इन करा ",
                ms: "Daftar masuk ",
                "mt-MT": "Idħol",
                "ne-NP": "साइन-इन गर्नुहोस् ",
                nl: "Aanmelden ",
                "nn-NO": "Logg på ",
                no: "Logg på ",
                or: "ସାଇନ୍ ଇନ୍ ",
                "pa-IN": "ਸਾਈਨ ਇਨ ਕਰੋ ",
                pl: "Zaloguj się ",
                prs: "ورود ",
                "pt-PT": "Iniciar sessão ",
                pt: "Entrar ",
                "qps-ploc": "Sign in ",
                "qps-ploca": "Sign in ",
                "qps-plocm": "Sign in ",
                "quz-PE": "Llamkay qallariy",
                ro: "Conectare ",
                ru: "Войти ",
                "sd-Arab-PK": "سائن ان ٿيو ",
                "si-LK": "පුරන්න ",
                sk: "Prihlásiť sa ",
                sl: "Vpišite se",
                sq: "Hyr ",
                "sr-Cyrl-BA": "Пријавите се ",
                "sr-Cyrl": "Пријавите се ",
                sr: "Prijavite se ",
                sv: "Logga in",
                sw: "Ingia",
                ta: "உள்நுழைக ",
                te: "సైన్ ఇన్ చేయండి ",
                th: "ลงชื่อเข้าใช้ ",
                "tk-TM": "Bellige alyn ",
                tr: "Oturum açın ",
                tt: "Керү ",
                "ug-CN": "تىزىملاپ كىرىش",
                uk: "Увійти",
                ur: "سائن ان کریں ",
                uz: "Kirish ",
                vi: "Đăng nhập ",
                "zh-Hans": "登录 ",
                "zh-Hant": "登入"
            },
            SignIntoOutlook_Text: {
                af: "Meld aan by Outlook.com met:",
                am: "ወደ Outlook.com በመለያ ይግቡ፦",
                ar: "تسجيل الدخول إلى Outlook.com باستخدام:",
                "as-IN": "ইয়াৰ সৈতে Outlook.com লৈ ছাইন ইন কৰক:",
                "az-Latn-AZ": "Outlook.com-a daxil olun:",
                "be-BY": "Уваход у Outlook.com праз:",
                bg: "Влезте в Outlook.com с:",
                "bn-BD": "এর সাথে Outlook.com এ সাইন ইন করুন:",
                "bn-IN": "এর সাথে Outlook.com এ সাইন ইন করুন:",
                "bs-Latn-BA": "Prijavite se u Outlook.com koristeći:",
                "ca-ES-valencia": "Inicieu la sessió a Outlook.com amb:",
                ca: "Inicieu la sessió a l'Outlook.com amb el compte següent:",
                cs: "Přihlaste se na Outlook.com pomocí:",
                cy: "Mewngofnodi i Outlook.com gyda:",
                da: "Log på Outlook.com med:",
                de: "Bei Outlook.com anmelden mit:",
                el: "Πραγματοποιήστε είσοδο στο Outlook.com με:",
                "en-GB": "Sign in to Outlook.com with:",
                en: "Sign in to Outlook.com with:",
                "es-MX": "Inicia sesión en Outlook.com con:",
                es: "Inicie sesión en Outlook.com con:",
                et: "Logi Outlook.com-i sisse:",
                eu: "Hasi saioa Outlook.com gunean kontu honekin:",
                fa: "ورود به Outlook.com با:",
                fi: "Kirjaudu sisään Outlook.comiin seuraavalla tilillä:",
                fil: "Mag-sign in sa Outlook.com gamit ang:",
                "fr-CA": "Se connecter à Outlook.com avec :",
                fr: "Se connecter à Outlook.com avec :",
                "ga-IE": "Sínigh isteach in Outlook.com le:",
                "gd-GB": "Clàraich a-steach gu Outlook.com le:",
                gl: "Iniciar sesión en Outlook.com con:",
                gu: "આની સાથે Outlook.com માં સાઇન ઇન કરો:",
                "ha-Latn-NG": "Shiga zuwa Outlook.com da:",
                he: "היכנס ל- Outlook.com באמצעות:",
                hi: "इसके द्वारा Outlook.com में साइन इन करें:",
                hr: "Prijavite se na Outlook.com pomoću sljedećih računa:",
                hu: "Bejelentkezés az Outlook.com-ra:",
                hy: "Մտնել Outlook.com՝",
                id: "Masuk ke Outlook.com dengan:",
                is: "Skráðu þig inn á Outlook.com með:",
                it: "Accedi a Outlook.com con:",
                ja: "次のアカウントで Outlook.com にサインイン:",
                ka: "Outlook.com-ში შესვლა მონაცემებით:",
                kk: "Outlook.com сайтына мына тіркелгілердің бірімен кіру:",
                "km-KH": "ចុះឈ្មោះចូល Outlook.com ជាមួយ៖",
                kn: "ಇದರ ಮೂಲಕ Outlook.com ಗೆ ಸೈನ್ ಇನ್ ಮಾಡಿ:",
                ko: "다음을 사용하여 Outlook.com에 로그인:",
                kok: "Outlook.com त हाचे वांगडा सायन इन करचें:",
                ky: "Outlook.com баракчасына төмөнкү менен катталып кириңиз:",
                "lb-LU": "Op Outlook.com umelle mat:",
                "lo-LA": "ລົງຊື່ເຂົ້າໃຊ້ Outlook.com ດ້ວຍ:",
                lt: "Prisijunkite prie „Outlook.com“ naudodami:",
                lv: "Pierakstīties pakalpojumā Outlook.com ar:",
                "mi-NZ": "Takiuru ki Outlook.com mā:",
                mk: "Пријавете се на Outlook.com со:",
                ml: "ഇതുപയോഗിച്ച് Outlook.com-ൽ സൈനിൻ ചെയ്യുക:",
                "mn-MN": "Дараахаар Outlook.com-д нэвтрэх:",
                mr: "यासह Outlook.com मध्ये साइन इन करा:",
                ms: "Daftar masuk ke Outlook.com dengan:",
                "mt-MT": "Idħol f'Outlook.com bi:",
                "ne-NP": "यसबाट Outlook.com साइन-इन गर्नुहोस्:",
                nl: "Aanmelden bij Outlook.com met:",
                "nn-NO": "Logg på Outlook.com med:",
                no: "Logg på Outlook.com med:",
                or: "ଏହା ସହିତ Outlook.com କୁ ସାଇନ୍‌ ଇନ୍‌ କରନ୍ତୁ:",
                "pa-IN": "ਇਸ ਦੇ ਨਾਲ Outlook.com ਤੇ ਸਾਈਨ ਇਨ ਕਰੋ:",
                pl: "Zaloguj się do usługi Outlook.com za pomocą:",
                prs: "وارد شدن به Outlook.com با:",
                "pt-PT": "Iniciar sessão no Outlook.com com:",
                pt: "Entrar no Outlook.com com:",
                "qps-ploc": "Sign in to Outlook.com with:",
                "qps-ploca": "Sign in to Outlook.com with:",
                "qps-plocm": "Sign in to Outlook.com with:",
                "quz-PE": "Outlook.com kaqman llamkayat qallariy kaywan:",
                ro: "Conectați-vă la Outlook.com cu:",
                ru: "Вход в Outlook.com с помощью",
                "sd-Arab-PK": "سان Outlook.com ۾ سائن ان ڪريو:",
                "si-LK": "මේ සමඟ Outlook.com වෙත පිවිසෙන්න:",
                sk: "Prihlásenie do služby Outlook.com pomocou:",
                sl: "Vpišite se v Outlook.com s tem računom:",
                sq: "Hyr në Outlook.com me:",
                "sr-Cyrl-BA": "Пријавите се у Outlook.com користећи:",
                "sr-Cyrl": "Пријавите се у Outlook.com користећи:",
                sr: "Prijavite se u Outlook.com koristeći:",
                sv: "Logga in på Outlook.com med:",
                sw: "Ingia katika Outlook.com ukitumia:",
                ta: "Outlook.com-இல் இதை பயன்படுத்தி உள்நுழையவும்:",
                te: "దీనితో Outlook.comకి సైన్ ఇన్ చేయండి:",
                th: "ลงชื่อเข้าใช้ Outlook.com ด้วย:",
                "tk-TM": "Outlook.com-a şunuň bilen hasaba gir:",
                tr: "Outlook.com'da şu hesapla oturum açın:",
                tt: "Outlook.com төененә түбәндәгесе белән керегез:",
                "ug-CN": "Outlook.com قا بۇنىڭ بىلەن تىزىملاپ كىرىش:",
                uk: "Увійти в Outlook.com за допомогою:",
                ur: "Outlook.com میں سائن ان کریں بمعہ:",
                uz: "Outlook.com xizmatiga qaysi hisob bilan kirilsin:",
                vi: "Đăng nhập vào Outlook.com bằng:",
                "zh-Hans": "Outlook.com 登录帐户:",
                "zh-Hant": "Outlook.com 登入身分:"
            },
            SignUpButton_Text: {
                af: "Skep gratis rekening",
                am: "ነጻ መለያ ይፍጠሩ",
                ar: "إنشاء حساب مجاني",
                "as-IN": "বিনামূলীয়া একাউণ্ট সৃষ্টি কৰক",
                "az-Latn-AZ": "Pulsuz hesab yaradın",
                "be-BY": "Стварыць бясплатны ўліковы запіс",
                bg: "Създаване на безплатен акаунт",
                "bn-BD": "বিনামূল্যের অ্যাকাউন্ট তৈরি করুন",
                "bn-IN": "বিনামূল্যের অ্যাকাউন্ট তৈরি করুন",
                "bs-Latn-BA": "Kreiraj besplatni račun",
                "ca-ES-valencia": "Crea un compte gratuït",
                ca: "Crea un compte gratuït",
                cs: "Vytvořit účet zdarma",
                cy: "Creu cyfrif am ddim",
                da: "Opret en gratis konto",
                de: "Kostenloses Konto erstellen",
                el: "Δημιουργία δωρεάν λογαριασμού",
                "en-GB": "Create free account",
                en: "Create free account",
                "es-MX": "Crear cuenta gratuita",
                es: "Crear cuenta gratuita",
                et: "Loo tasuta konto",
                eu: "Sortu kontu bat doan",
                fa: "ایجاد حساب رایگان",
                fi: "Luo maksuton tili",
                fil: "Gumawa ng libreng account",
                "fr-CA": "Créer gratuitement un compte",
                fr: "Créer gratuitement un compte",
                "ga-IE": "Cruthaigh cuntas saor in aisce",
                "gd-GB": "Cruthaich cunntas an-asgaidh",
                gl: "Crear unha conta gratuíta",
                gu: "મફત ખાતું બનાવો",
                "ha-Latn-NG": "Ƙirƙira asusu na kyauta",
                he: "צור חשבון ללא תשלום",
                hi: "निशुल्क खाता बनाएँ",
                hr: "Stvori besplatni račun",
                hu: "Ingyenes fiók létrehozása",
                hy: "Ստեղծել անվճար հաշիվ",
                id: "Buat akun gratis",
                is: "Stofna ókeypis reikning",
                it: "Crea account gratuito",
                ja: "無料アカウントを作成",
                ka: "უფასო ანგარიშის შექმნა",
                kk: "Тегін тіркелгі жасау",
                "km-KH": "បង្កើតគណនីដោយឥតគិតថ្លៃ",
                kn: "ಉಚಿತ ಖಾತೆ ರಚಿಸಿ",
                ko: "무료 계정 만들기",
                kok: "फुकट खातें निर्माण करचें",
                ky: "Акысыз каттоо жазуусун түзүү",
                "lb-LU": "Gratis Kont schafen",
                "lo-LA": "ສ້າງບັນຊີຟຣີ",
                lt: "Sukurti nemokamą paskyrą",
                lv: "Izveidot bezmaksas kontu",
                "mi-NZ": "Hangā he pūkete koreutu",
                mk: "Создај бесплатна сметка",
                ml: "സൗജന്യ അക്കൗണ്ട് സൃഷ്‌ടിക്കുക",
                "mn-MN": "Үнэгүй хэрэглэгчийн бүртгэл үүсгэх",
                mr: "विनामूल्य खाते तयार करा",
                ms: "Cipta akaun percuma",
                "mt-MT": "Oħloq kont bla ħlas",
                "ne-NP": "नि:शुल्क खाता सिर्जना गर्नुहोस्",
                nl: "Gratis account maken",
                "nn-NO": "Opprett ein gratis konto",
                no: "Opprett gratis konto",
                or: "ମୁକ୍ତ ଏକାଉଣ୍ଟ୍‌ ସୃଷ୍ଟି କରନ୍ତୁ",
                "pa-IN": "ਫਰੀ ਖਾਤਾ ਬਣਾਓ",
                pl: "Utwórz bezpłatne konto",
                prs: "ایجاد حساب مجانی",
                "pt-PT": "Criar uma conta gratuita",
                pt: "Criar conta gratuita",
                "qps-ploc": "Sign up",
                "qps-ploca": "Sign up",
                "qps-plocm": "Sign up",
                "quz-PE": "Qhasi yupayta paqarichiy",
                ro: "Creați un cont gratuit",
                ru: "Создать бесплатную учетную запись",
                "sd-Arab-PK": "مفت اڪاؤنٽ ٺاهيو",
                "si-LK": "නොමිලේ ගිණුමක් සාදන්න",
                sk: "Vytvoriť konto zdarma",
                sl: "Ustvarite brezplačen račun",
                sq: "Krijo një llogari falas",
                "sr-Cyrl-BA": "Креирај бесплатни рачун",
                "sr-Cyrl": "Креирај бесплатни налог",
                sr: "Kreiraj besplatni nalog",
                sv: "Skapa gratis konto",
                sw: "Fungua akaunti ya bila malipo",
                ta: "இலவச கணக்கை உருவாக்கு",
                te: "ఉచిత ఖాతాని సృష్టించండి",
                th: "สร้างบัญชีฟรี",
                "tk-TM": "Mugt hasap döret",
                tr: "Ücretsiz hesap oluştur",
                tt: "Бушлай хисап язманы төзү",
                "ug-CN": "ھېسابات قۇرۇش",
                uk: "Створити безкоштовний обліковий запис",
                ur: "مفت اکاؤنٹ بنائیں",
                uz: "Bepul hisob yaratish",
                vi: "Tạo tài khoản miễn phí",
                "zh-Hans": "创建免费帐户",
                "zh-Hant": "建立免費免費帳戶"
            },
            SignUpTextTNarrow_Text: {
                af: "Soek jy 'n nuwe rekening?",
                am: "አዲስ መለያ ይፈልጋሉ?",
                ar: "هل تريد إنشاء حساب جديد؟",
                "as-IN": "এটা নতুন একাউণ্ট বিচাৰে নেকি?",
                "az-Latn-AZ": "Yeni hesab istəyirsiniz?",
                "be-BY": "Жадаеце стварыць уліковы запіс?",
                bg: "Искате нов акаунт?",
                "bn-BD": "একটি নতুন অ্যাকাউন্ট চান?",
                "bn-IN": "একটি নতুন অ্যাকাউন্ট চান?",
                "bs-Latn-BA": "Želite novi račun?",
                "ca-ES-valencia": "Voleu un compte nou?",
                ca: "Voleu un compte nou?",
                cs: "Chcete nový účet?",
                cy: "Hoffech chi gael cyfrif newydd?",
                da: "Vil du have en ny konto?",
                de: "Möchten Sie ein neues Konto?",
                el: "Θέλετε έναν νέο λογαριασμό;",
                "en-GB": "Want a new account?",
                en: "Want a new account?",
                "es-MX": "¿Quieres una nueva cuenta?",
                es: "¿Desea una nueva cuenta?",
                et: "Kas soovite uut kontot?",
                eu: "Kontu berri bat nahi duzu?",
                fa: "حساب جدیدی را می‌خواهید؟",
                fi: "Haluatko uuden tilin?",
                fil: "Gusto ng bagong account?",
                "fr-CA": "Vous voulez un nouveau compte?",
                fr: "Vous voulez un nouveau compte ?",
                "ga-IE": "An bhfuil cuntas nua uait?",
                "gd-GB": "A bheil thu ag iarraidh cunntas ùr?",
                gl: "Queres unha conta nova?",
                gu: "કોઈ નવું ખાતું જોઈએ છે?",
                "ha-Latn-NG": "Ana son wani sabon asusu?",
                he: "רוצה חשבון חדש?",
                hi: "कोई नया खाता चाहते हैं?",
                hr: "Želite novi račun?",
                hu: "Új fiókot szeretne?",
                hy: "Նոր հաշիվ եք ուզո՞ւմ:",
                id: "Ingin membuat akun baru?",
                is: "Viltu fá nýjan reikning?",
                it: "Vuoi un nuovo account?",
                ja: "新しいアカウントを作成しますか?",
                ka: "გსურთ ახალი ანგარიში?",
                kk: "Жаңа тіркелгі қажет пе?",
                "km-KH": "ចង់បានគណនីថ្មីមួយឬ?",
                kn: "ಹೊಸ ಖಾತೆ ಬೇಕೇ?",
                ko: "새 계정이 필요하신가요?",
                kok: "नवें खातें जाय?",
                ky: "Жаңы эсеп жазууну күткүңүз келеби?",
                "lb-LU": "Wëllt Dir en neie Kont?",
                "lo-LA": "ຕ້ອງການບັນຊີໃໝ່ບໍ?",
                lt: "Norite naujos paskyros?",
                lv: "Vai nepieciešams jauns konts?",
                "mi-NZ": "Kei te hiahia pūkete hōu?",
                mk: "Сакате нова сметка?",
                ml: "ഒരു പുതിയ അക്കൗണ്ട് ആവശ്യമാണോ?",
                "mn-MN": "Шинэ хэрэглэгчийн бүртгэл авах уу?",
                mr: "नवीन खाते उघडू इच्छिता?",
                ms: "Inginkan akaun baru?",
                "mt-MT": "Tixtieq kont ġdid?",
                "ne-NP": "नयाँ खाता चाहनुहुन्छ?",
                nl: "Wilt u een nieuw account?",
                "nn-NO": "Vil du ha ein ny konto?",
                no: "Ønsker du en ny konto?",
                or: "ଏକ ନୂତନ ଏକାଉଣ୍ଟ୍‌ ଚାହାଁନ୍ତି କି?",
                "pa-IN": "ਕੋਈ ਨਵਾਂ ਖਾਤਾ ਚਾਹੀਦਾ ਹੈ?",
                pl: "Potrzebujesz nowego konta?",
                prs: "حساب جدید میخواهید؟",
                "pt-PT": "Quer uma conta nova?",
                pt: "Deseja uma nova conta?",
                "quz-PE": "¿Musuq yupayta munankichu?",
                ro: "Doriți un cont nou?",
                ru: "Нужна новая учетная запись?",
                "sd-Arab-PK": "هڪ نئون اڪائونٽ چاهيو ٿا؟",
                "si-LK": "නව ගිණුමක් අවශ්‍යයි ද?",
                sk: "Chcete nové konto?",
                sl: "Ali želite nov račun?",
                sq: "Dëshiron një llogari të re?",
                "sr-Cyrl-BA": "Желите нови рачун?",
                "sr-Cyrl": "Желите нови налог?",
                sr: "Želite novi nalog?",
                sv: "Vill du ha ett nytt konto?",
                sw: "Unataka akaunti mpya?",
                ta: "புதிய கணக்கு வேண்டுமா?",
                te: "కొత్త ఖాతా కావాలా?",
                th: "ต้องการบัญชีใหม่หรือไม่",
                "tk-TM": "Täze hasap isleýäňizmi?",
                tr: "Yeni hesap oluşturmak mı istiyorsunuz?",
                tt: "Яңа хисап язма кирәкме?",
                "ug-CN": "يېڭى ھېسابات كېرەكمۇ؟",
                uk: "Потрібен новий обліковий запис?",
                ur: "ایک نیا اکاؤنٹ چاہتے ہیں؟",
                uz: "Yangi hisob kerakmi?",
                vi: "Bạn muốn có tài khoản mới?",
                "zh-Hans": "想要新帐户?",
                "zh-Hant": "是否要使用新的帳戶?"
            },
            SupportButton_Text: {
                af: "Bystand",
                am: "ድጋፍ",
                ar: "الدعم",
                "as-IN": "সমৰ্থন",
                "az-Latn-AZ": "Dəstək",
                "be-BY": "Падтрымка",
                bg: "Поддръжка",
                "bn-BD": "সহায়তা",
                "bn-IN": "সহায়তা",
                "bs-Latn-BA": "Podrška",
                "ca-ES-valencia": "Assistència tècnica",
                ca: "Assistència tècnica",
                cs: "Podpora",
                cy: "Cymorth",
                da: "Support",
                de: "Support",
                el: "Υποστήριξη",
                "en-GB": "Support",
                en: "Support",
                "es-MX": "Soporte técnico",
                es: "Soporte técnico",
                et: "Kasutajatugi",
                eu: "Laguntza",
                fa: "پشتیبانی",
                fi: "Tuki",
                fil: "Suporta",
                "fr-CA": "Soutien",
                fr: "Support",
                "ga-IE": "Tacaíocht",
                "gd-GB": "Taic",
                gl: "Asistencia",
                gu: "સમર્થન",
                "ha-Latn-NG": "Goyon baya",
                he: "תמיכה",
                hi: "सहायता",
                hr: "Podrška",
                hu: "Támogatás",
                hy: "Աջակցում",
                id: "Dukungan",
                is: "Stuðningur",
                it: "Supporto tecnico",
                ja: "サポート",
                ka: "მხარდაჭერა",
                kk: "Қолдау",
                "km-KH": "ការគាំទ្រ",
                kn: "ಬೆಂಬಲ",
                ko: "지원",
                kok: "तेंको",
                ky: "Колдоо",
                "lb-LU": "Support",
                "lo-LA": "ຊ່ວຍ​ເຫຼືອ",
                lt: "Palaikymas",
                lv: "Atbalsts",
                "mi-NZ": "Tautoko",
                mk: "Поддршка",
                ml: "പിന്തുണ",
                "mn-MN": "Тусламж үйлчилгээ",
                mr: "समर्थन",
                ms: "Sokongan",
                "mt-MT": "Appoġġ",
                "ne-NP": "सहायता",
                nl: "Ondersteuning",
                "nn-NO": "Kundestøtte",
                no: "Kundestøtte",
                or: "ସମର୍ଥନ",
                "pa-IN": "ਸਮਰਥਨ",
                pl: "Pomoc techniczna",
                prs: "پشتیبانی",
                "pt-PT": "Suporte",
                pt: "Suporte",
                "qps-ploc": "Support",
                "qps-ploca": "Support",
                "qps-plocm": "Support",
                "quz-PE": "Yanapakuy",
                ro: "Asistență",
                ru: "Поддержка",
                "sd-Arab-PK": "معاونت",
                "si-LK": "සහාය",
                sk: "Podpora",
                sl: "Podpora",
                sq: "Mbështetja",
                "sr-Cyrl-BA": "Подршка",
                "sr-Cyrl": "Подршка",
                sr: "Podrška",
                sv: "Support",
                sw: "Auni",
                ta: "ஆதரவு",
                te: "మద్దతు",
                th: "การสนับสนุน",
                "tk-TM": "Goldaw",
                tr: "Destek",
                tt: "Ярдәм",
                "ug-CN": "ياردەم مەركىزى",
                uk: "Підтримка",
                ur: "معاونت",
                uz: "Ko‘mak xizmati",
                vi: "Hỗ trợ",
                "zh-Hans": "支持",
                "zh-Hant": "支援"
            },
            TagLine2_Description_Text: {
                af: "Outlook bring al jou e-pos, kalendergeleenthede en lêers bymekaar sodat jy dit nie hoef te doen nie. Met alles binne jou bereik, kan jy vergaderings met kollegas beplan of vinnig beskikbaarheid met vriende deel. Maak tyd vir dit wat belangrik is, ons sal ons oor die res bekommer.",
                am: "እርስዎ ማድረግ እንዳያስፈልግዎ፣ Outlook ሁሉንም ኢሜይሎችዎ፣ የቀን መቁጠሪያ ክስተቶችዎን እና ፋይሎችዎን በአንድ ላይ ያመጣልዎታል። ሁሉም ነገር በአቅራቢያዎ ሲሆን፣ ከባልደረቦች ጋር ስብሰባ ማቀድ ወይም የሚገኙ መሆኑን ከጓደኞች ጋር በሴኮንዶች ውስጥ መረጃ መለዋወጥ ይችላሉ። እርስዎ አስፈላጊ ለሆነው ነገር ጊዜ ይስጡ፣ ቀሪውን እኛ እንሰራዋለን።",
                ar: "يجمع Outlook كل رسائل البريد الإلكتروني وأحداث التقويم والملفات معاً نيابة عنك. وبوجود كل شيء في متناول اليد، يمكنك تخطيط الاجتماعات مع زملاء العمل أو مشاركة أوقات التوفر مع الأصدقاء في ثوانٍ. خصص وقتاً للأمور الهامة وسنهتم نحن بالباقي.",
                "as-IN": "Outlook-এ আপোনাৰ সকলো ইমেইল, কেলেণ্ডাৰ ইভেণ্ট আৰু ফাইলসমূহক একেলগে আনে যাতে আপুনি কৰিবলগা নহয়৷ পাবলগা সকলোৰে ভিতৰত, আপুনি সহকৰ্মীৰ সৈতে মিটিঙৰ পৰিকল্পনা কৰিব পাৰে বা ছেকেণ্ডতে বন্ধুবৰ্গৰ সৈতে উপলব্ধতা ভাগ-বতৰা কৰিব পাৰে৷ কি বিষয় আছে তাৰ সময় উলিয়াওক, আমি বাকীখিনি কৰিম৷",
                "az-Latn-AZ": "Outlook bütün e-poçt məktubları, təqvim tədbirləri və fayllarınızı bir araya gətirir ki, sizin bunu etməyinizə ehtiyac qalmasın. Hər şey əlinizin altında olanda siz həmkarlarınızla toplantılar planlaşdıra və bir neçə saniyə ərzində dostlarla onların iştirak edib-etmədiyini paylaşa bilərsiniz. Sizə lazım olan vaxtı təyin edin, qalanı isə bizlikdir.",
                "be-BY": "Outlook — гэта ўся патрэбная вам электронная пошта, усе падзеі календара і файлы разам. Усё сабрана ў адным месцы, таму вы можаце за лічаныя секунды планаваць сходы з калегамі і паведамляць пра свой вольны час сябрам. Аддавайце час важным справам — астатнім зоймемся мы.",
                bg: "Outlook обединява всички ваши имейли, календарни събития и файлове, така че не се налага вие да го правите. С всичко на една ръка разстояние, можете да планирате събрания с колеги или да споделяте наличности с приятели за секунди. Отделяйте време за това, което има значение, а ние ще се справим с останалото.",
                "bn-BD": "Outlook আপনার সমস্ত ইমেল, ক্যালেন্ডারের ইভেন্ট ও ফাইলকে একত্রিত করেছে যাতে আপনাকে সেগুলো খুঁজে বেড়াতে না হয়। সবকিছু আপনার নাগালের মধ্যে রেখে, আপনি সহকর্মীদের সাথে মিটিং এর প্ল্যান বা আপনার ব্যস্ত না থাকার সময়টি বন্ধুদের সাথে কয়েক সেকেন্ডের মধ্যে অংশীদারি করতে পারেন। যেগুলো বেশি গুরুত্বপূর্ণ সেগুলোর জন্য সময় দিন, অবশিষ্ট বিষয়গুলোর প্রতি আমরা নজর রাখ'বো।",
                "bn-IN": "Outlook আপনার সমস্ত ইমেল, ক্যালেন্ডারের ইভেন্ট ও ফাইলকে একত্রিত করেছে যাতে আপনাকে সেগুলি খুঁজে বেড়াতে না হয়। সবকিছু আপনার নাগালের মধ্যে রেখে, আপনি সহকর্মীদের সাথে মিটিং এর প্ল্যান বা আপনার ব্যস্ত না থাকার সময়টি বন্ধুদের সাথে কয়েক সেকেন্ডের মধ্যে অংশীদারি করতে পারেন। যেগুলি বেশি গুরুত্বপূর্ণ সেগুলির জন্য সময় দিন, অবশিষ্ট বিষয়গুলির প্রতি আমরা নজর রাখ'বো।",
                "bs-Latn-BA": "Outlook objedinjava sve vaše poruke e-pošte, događaje iz kalendara i fajlove kako vi to ne biste morali raditi. Sve vam je nadohvat ruke i možete za samo nekoliko sekundi planirati sastanke sa saradnicima ili dijeliti dostupnost s prijatelјima. Odvojite vrijeme za ono što je bitno, a mi ćemo se pobrinuti za sve ostalo.",
                "ca-ES-valencia": "L'Outlook reuneix tots els correus electrònics, els esdeveniments del calendari i els fitxers perquè pugueu estalviar-vos eixa tasca. Amb tot a l'abast, podeu planificar reunions amb els companys de faena o compartir la disponibilitat amb els amics en qüestió de segons. Guanyeu temps per a allò que realment importa i nosaltres ens encarregarem de la resta.",
                ca: "L'Outlook reuneix tots els correus, els esdeveniments del calendari i els fitxers perquè pugueu estalviar-vos aquesta tasca. Amb tot a l'abast, podeu planificar reunions amb els companys de feina o compartir la disponibilitat amb els amics en qüestió de segons. Guanyeu temps per allò que realment importa i nosaltres ens encarreguem de la resta.",
                cs: "Outlook vám automaticky propojuje všechny vaše e-maily, události v kalendáři a soubory. Když máte všechny informace po ruce, dokážete rychle plánovat schůzky se spolupracovníky nebo nasdílet informace o svém volném čase přátelům. Udělejte si čas na to, co je důležité, my se postaráme o všechno ostatní.",
                cy: "Mae Outlook yn dod â’ch holl negeseuon e-bost, eich digwyddiadau calendr a’ch ffeiliau at ei gilydd ar eich rhan. Gyda phopeth o fewn gafael, bydd modd i chi drefnu cyfarfodydd â chydweithwyr neu rannu argaeledd â ffrindiau mewn eiliadau. Gwnewch amser ar gyfer yr hyn sy’n bwysig, fe wnawn ni ddelio â’r gweddill.",
                da: "Outlook samler alle dine mails, kalenderbegivenheder og filer, så du ikke behøver at gøre det. Med alt inden for rækkevidde, kan du planlægge møder med kolleger eller dele tilgængelighed med venner på få sekunder. Få tid til det vigtige, så tager vi os af resten.",
                de: "Outlook bringt alle Ihre E-Mails, Kalenderereignisse und Dateien zusammen, damit Sie das nicht machen müssen. Mit allem in Reichweite können Sie innerhalb von Sekunden Besprechungen mit Kollegen planen oder Verfügbarkeiten mit Freunden teilen. Schaffen Sie sich Zeit für die wichtigen Dinge, wir kümmern uns um den Rest.",
                el: "Το Outlook συγκεντρώνει όλα τα μηνύματα ηλεκτρονικού ταχυδρομείου, τα συμβάντα ημερολογίου και τα αρχεία σας, έτσι ώστε να μην χρειάζεται να το κάνετε εσείς. Με τα πάντα εύκολα στη διάθεσή σας, μπορείτε να προγραμματίσετε συσκέψεις με συναδέλφους ή να κοινοποιήσετε την κατάσταση διαθεσιμότητάς σας στους φίλους σας μέσα σε δευτερόλεπτα. Εξασφαλίστε χρόνο για τα σημαντικά πράγματα κι εμείς θα αναλάβουμε τα υπόλοιπα.",
                "en-GB": "Outlook brings all of your emails, calendar events and files together so you don't have to. With everything within reach, you can plan meetings with colleagues or share availabilities with friends in seconds. Make time for what matters – we'll deal with the rest.",
                en: "Outlook brings all your email, calendar events, and files together so you don't have to. With everything within reach, you can plan meetings with coworkers or share availabilities with friends in seconds. Make time for what matters, we'll deal with the rest.",
                "es-MX": "Outlook agrupa todos los mensajes de correo electrónico, eventos del calendario y archivos para que tengas todo a tu alcance. Así, puedes planear reuniones con colaboradores o compartir entre amigos la disponibilidad en cuestión de segundos. Ocúpate de lo importante y nosotros nos encargaremos del resto.",
                es: "Outlook agrupa todos los mensajes de correo electrónico, eventos del calendario y archivos para que tenga todo al alcance. Así, puede planear reuniones con colaboradores o compartir entre amigos su disponibilidad en cuestión de segundos. Usted ocúpese de lo importante, nosotros nos encargaremos del resto.",
                et: "Outlook toob kõik teie meilisõnumid, kalendrisündmused ja failid ühte kohta kokku, et te ei peaks sellega ise tegelema. Kui kõik on käepärast, saate mugavalt näiteks töökaaslastega koosolekuid plaanida või sõpradega vaid mõne hetkega jagada teavet selle kohta, millal teil on aega kokku saada. Leidke aega teha seda, mis on teie jaoks oluline – ülejäänu eest kanname hoolt meie.",
                eu: "Outlook-ek mezu elektronikoak, egutegiko gertaerak eta fitxategiak biltzen ditu, zuk ezer egin behar izan ez dezazun. Guztia eskura izango duzunez, bilerak antola ditzakezu lankideekin eta lagunek berehala ikusiko dute libre noiz zauden. Hartu denbora behar duzun gauzetarako, eta gu arduratuko gara gainerakoaz.",
                fa: "Outlook کل ایمیل، رویدادهای تقویم و فایل‌ها را با هم در یکجا جمع می‌کند، بنابراین لازم نیست کاری انجام دهید. زمانی که همه چیز در دسترستان باشد، می‌توانید در عرض چند ثانیه جلسات با همکاران را برنامه‌ریزی کنید و در دسترس بودن را با دوستانتان به اشتراک بگذارید. برای موارد مهم زمان بگذارید، مابقی کارها را ما انجام می‌دهیم.",
                fi: "Outlook tuo kaikki sähköpostit, kalenteritapahtumat ja tiedostot yhteen paikkaan, jotta sinun ei tarvitsisi. Kun kaikki on käden ulottuvilla, voit suunnitella tapaamisia työkavereiden kanssa tai jakaa tavoitettavuustietoja ystäville muutamassa sekunnissa. Varaa aikaa tärkeimmille asioille, me huolehdimme lopusta.",
                fil: "Pinagsasama-sama ng Outlook ang lahat ng iyong email, kaganapan sa kalendaryo, at file para hindi mo na ito kailangang gawin. Dahil abot-kamay na ang lahat, maaari kang magplano ng mga pulong sa mga katrabaho o ipaalam ang libre mong oras sa mga kaibigan sa loob ng ilang segundo. Maglaan ng oras sa mahalagang bagay, kami na ang bahala sa iba.",
                "fr-CA": "Outlook regroupe tous vos courriels, événements de calendrier et fichiers. Avec tous les éléments utiles à portée de main, vous pouvez planifier des réunions avec des collègues ou partager votre disponibilité avec vos amis en quelques secondes. Consacrez du temps à ce qui importe vraiment. Nous nous occupons du reste.",
                fr: "Outlook regroupe tous vos courriers, événements de calendrier et fichiers. Avec tous les éléments utiles à portée de main, vous pouvez planifier des réunions avec des collègues ou partager des disponibilités avec vos amis en quelques secondes. Consacrez du temps à ce qui importe vraiment. Nous nous occupons du reste.",
                "ga-IE": "Tugtar do chuid ríomhphost, ócáidí féilire agus comhad uile le chéile in Outlook, ní gá duit féin é sin a dhéanamh. Le rochtain agat ar gach rud, ní thógann sé ach roinnt soicindí chun cruinnithe a phleanáil le do chomhoibrithe nó chun d’infhaighteacht a chomhroinnt le cairde. Bíodh dóthain ama agat do na rudaí tábhachtacha, déileálfaimid le gach rud eile.",
                "gd-GB": "Tha Outlook a’ toirt còmhla am post-d, tachartasan a’ mhìosachain is na faidhlichean air fad agad as do leth-sa. Leis gu bheil gach rud deas ri do làimh, ’s urrainn dhut coinneamhan le co-obraichean a chur air dòigh no innse do charaidean cuin a bhios tu saor ann am priobadh na sùla. Nì sinne an corr ach am bi ùine agad-sa dèiligeadh ris an tha cudromach ann.",
                gl: "Outlook agrupa todos os teus correos electrónicos, eventos de calendario e ficheiros para que teñas todo ao teu alcance. Así, poderás planificar reunións con compañeiros de traballo ou compartir entre amigos a vosa dispoñibilidade en cuestión de segundos. Ti ocúpate do importante, nós ocuparémonos do resto.",
                gu: "Outlook તમારી બધી ઈમેલ્સ, કૅલેન્ડર ઇવેંટ્સ અને ફાઇલોને એકસાથે લાવે છે, જેથી તમારે લાવવા પડતી નથી. બધુ પહોંચની અંદર હોવાથી, તમે સહકાર્યકરો સાથે મીટિંગની યોજના બનાવી શકો છો અથવા મિત્રો સાથે થોડી સેકંડમાં ઉપલબ્ધતા શેર કરી શકો છો. જે મહત્વપૂર્ણ છે તેના માટે સમય કાઢો, બાકીનું અમે સંભાળી લઈશું.",
                "ha-Latn-NG": "Outlook yana kawo dukan imel ɗinka, sha'anonin kalanda, da kuma fayiloli tare haka nan ba sai ka yi ba. Da komai kusa da kai, kana iya shirya tarurruka tare da abokan aiki ko raba samuwa tare da abokanai a cikin daƙiƙoƙi. Ba da lokaci don abun da suke da muhimmanci, za mu kula da sauran.",
                he: "Outlook מרכז את כל הדואר האלקטרוני, אירועי לוח השנה והקבצים שלך עבורך. כאשר הכל נמצא במקום אחד, תוכל לתכנן פגישות עם עמיתים או לשתף את המועדים הפנויים שלך עם חברים תוך שניות ספורות. פנה זמן לדברים החשובים, ואנחנו נדאג לכל השאר.",
                hi: "Outlook आपकी सभी ईमेल, कैलेंडर ईवेंट्स और फ़ाइलों को एकसाथ लाता है ताकि आपको इन्हें न लाना पड़े. हर एक चीज़ पहुँच में होने पर, आप कुछ ही समय में सहकर्मियों के साथ मीटिंग्स की योजना बना सकते हैं या मित्रों के साथ उपलब्धता साझा कर सकते हैं. महत्पूर्ण चीज़ों के लिए समय निकालें, बाकी सबकुछ हम प्रबंधित कर लेंगे.",
                hr: "Outlook objedinjuje svu vašu e-poštu, događaje iz kalendara i datoteke da to ne biste morali činiti sami. Sve vam je nadohvat ruci, pa u nekoliko sekundi možete isplanirati sastanke s kolegama ili prijateljima obznaniti svoje slobodne termine. Pronađite vremena za ono što je važno, a mi ćemo obaviti ostalo.",
                hu: "Az Outlookban megtalálja az összes e-mailjét, naptáreseményét és fájlját. Minden tartalmához könnyen hozzáférhet, így másodpercek alatt megtervezheti a munkatársaival tartandó értekezleteket, vagy éppen megoszthatja ismerőseivel, hogy mikor ér rá. Kerítsen időt arra, ami fontos, a többit pedig elintézzük mi.",
                hy: "Outlook-ը համատեղում է ձեր բոլոր էլ. փոստերը, օրացույցի իրադարձությունները և նիշքերը բոլորը մեկ տեղում, որպեսզի երկար չփնտրեք: Ունենալով ամեն ինչ հասանելիության սահմաններում՝ դուք կարող եք պլանավորել հանդիպումներ գործընկերների հետ կամ համօգտագործել մատչելիությունները ընկերների հետ մի քանի վայրկյանում: Տրամադրեք ձեր ժամանակը ձեզ համար կարևոր բաների վրա, իսկ մենք կկազմակերպենք մնացածը:",
                id: "Outlook menyatukan semua email, acara kalender, dan file sehingga Anda tidak perlu repot melakukannya. Semuanya dapat dijangkau dengan mudah agar Anda dapat merencanakan rapat dengan rekan kerja atau berbagi kehadiran dengan teman dalam waktu singkat. Luangkan waktu untuk hal-hal penting, kami yang akan menangani sisanya.",
                is: "Í Outlook ertu með tölvupóstinn, dagbókarfærslurnar og skrárnar þínar á einum og sama staðnum. Allt er innan seilingar og þú getur því skipulagt fundi með samstarfsfólki eða sent upplýsingar um lausan tíma á augabragði. Taktu frá tíma fyrir það sem skiptir máli og láttu okkur sjá um allt hitt.",
                it: "Outlook riunisce tutti i messaggi di posta elettronica, gli eventi del calendario e i file al posto tuo. Con tutto a portata di mano puoi pianificare le riunioni con i colleghi o condividere le disponibilità con gli amici in pochi secondi. Trova il tempo per le cose importanti, noi ci occuperemo del resto.",
                ja: "Outlook がすべてのメール、予定表のイベント、ファイルをまとめるので、あなたがまとめる必要はありません。すべてが手の届く所にあるので、仕事仲間との会議の計画や友だちとの空き時間情報の共有を数秒で行うことができます。重要な事柄のために時間を取って、それ以外は Outlook に処理させることができます。",
                ka: "Outlook თქვენ მაგივრად აგროვებს თქვენს ყველა ელწერილს, კალენდარს, მოვლენასა და ფაილს ერთად. ყველაფრის მისაწვდომობით თქვენ შეგიძლიათ დაგეგმოთ თანამშრომელთა შეკრებები ან წამებში გააზიაროთ ხელმისაწვდომობა მეგობრებთან. დაუთმეთ დრო მნიშვნელოვან საკითხებს, დანარჩენს ჩვენ მივხედავთ.",
                kk: "Outlook бағдарламасы барлық электрондық пошта хабарларын, күнтізбе іс-шараларын және файлдарды бір жерге жинайды. Бұл мүмкіндіктер үнемі қолжетімді болғандықтан, әріптестеріңізбен жиналыстарды жоспарлау немесе достарыңызбен бос уақытыңыз туралы мәліметпен бөлісу сияқты әрекеттерді бірер секундта орындай аласыз. Маңызды істерге уақыт бөлсеңіз болды, қалғанын біз өзіміз істейміз.",
                "km-KH": "កម្មវិធី Outlook នាំយកអ៊ីម៉ែល ព្រឹត្តិការណ៍ក្នុងប្រតិទិន និងឯកសាររបស់អ្នកទាំងអស់មករួមគ្នា ដូច្នេះអ្នកមិនចាំបាច់​ពិបាកទេ។ ជាមួយអ្វីគ្រប់យ៉ាងដែល​អាច​ប្រើប្រាស់បាន អ្នកអាចរៀបចំ​គម្រោងប្រជុំ​ជាមួយមិត្តរួមការងារ ឬចែករំលែកភាពទំនេរជាមួយមិត្តភក្ដិត្រឹមតែប៉ុន្មានវិនាទីប៉ុណ្ណោះ។ រៀបចំពេលវេលាសម្រាប់អ្វីដែលសំខាន់ យើងនឹងដោះស្រាយ​ជាមួយ​ផ្នែកផ្សេងទៀត។",
                kn: "Outlook ನಿಮ್ಮೆಲ್ಲಾ ಇಮೇಲ್‌, ಕ್ಯಾಲೆಂಡರ್ ಈವೆಂಟ್‌ಗಳು ಮತ್ತು ಫೈಲ್‌ಗಳನ್ನು ಒಟ್ಟಿಗೆ ತರುತ್ತದೆ ಆದ್ದರಿಂದ ನೀವು ಹೀಗೆ ಮಾಡಬೇಕಾಗಿಲ್ಲ. ವ್ಯಾಪ್ತಿಯೊಳಗೆ ಪ್ರತಿಯೊಂದಕ್ಕೂ, ಸಹೋದ್ಯೋಗಿಗಳ ಜೊತೆಗೆ ನೀವು ಸಭೆಗಳನ್ನು ಯೋಜಿಸಬಹುದು ಅಥವಾ ಸೆಕೆಂಡುಗಳಲ್ಲಿ ಲಭ್ಯತೆಗಳನ್ನು ಸ್ನೇಹಿತರ ಜೊತೆಗೆ ಹಂಚಿಕೊಳ್ಳಬಹುದು. ಪ್ರಮುಖವಾದವುಗಳಿಗೆ ಸಮಯ ಮೀಸಲಾಗಿರಿಸಿ, ಉಳಿದವುಗಳ ಜವಾಬ್ದಾರಿ ನಾವು ತೆಗೆದುಕೊಳ್ಳುತ್ತೇವೆ.",
                ko: "Outlook에서 모든 전자 메일, 일정 이벤트 및 파일을 모아서 확인할 수 있습니다. 모든 항목을 한곳에서 확인할 수 있으므로 몇 초 만에 동료와 모임을 계획하거나 친구와 참석 가능 여부를 공유할 수 있습니다. 중요한 일에 집중하세요. 나머지는 알아서 처리해 드립니다.",
                kok: "Outlook तुमच्यो सगळ्यो ई-मेली, कॅलेंडराच्यो कार्यावळी आनी फायली एकठांय हाडटा आनी तुमकां तें करचें पडना. सगळें तुमचे कडेन आशिल्ल्यान, तुमी सह-कर्मचाऱ्यां वांगडा भेट थारावूंक वा इश्टां कडेन उपलब्धताय वांटणी करूंक शकतले. किदें म्हत्वाचें आसा ताका वेळ दिवचो, बाकीचें आमी सांबाळटले.",
                ky: "Бардык электрондук почталарыңыз, календардагы иш-чараларыңыз жана файлдарыңызды топтоо ишин Outlook сиздин ордуна аткарат. Баары колуңуздун астында турганда, көз ирмемде кызматташтарыңыз менен жолугушууларды пландаштырып, досторуңузга бош убактыңызды көрсөтө аласыз. Маанилүү иштерге убакыт бөлүңүз, калганы өз колубуздан келет.",
                "lb-LU": "Outlook versammelt all Är E-Mailen, Kalennerevenementer a Fichieren op enger Plaz, dermat Dir dat net maache musst. Wann alles bei Hand ass, kënnt Dir innerhalb vun e puer Sekonne Reunioune mat Mataarbechter plangen oder Är Disponibilitéite mat Frënn austauschen. Huelt Iech Zäit fir déi wichteg Saachen, mir këmmeren eis ëm de Rescht.",
                "lo-LA": "Outlook ນຳເອົາອີເມວ, ນັດໝາຍປະຕິທິນ ແລະ ໄຟລ໌ທັງໝົດຂອງທ່ານມາໄວ້ນຳກັນເພື່ອໃຫ້ທ່ານບໍ່ຕ້ອງເຮັດເອງ. ດ້ວຍທຸກຢ່າງທີ່ເອື້ອມຫາໄດ້, ທ່ານສາມາດວາງແຜນການປະຊຸມກັບໝູ່ຮ່ວມວຽກ ຫຼື ແບ່ງປັນເວລາຫວ່າງກັບໝູ່ໄດ້ໃນເວລາສັ້ນໆ. ໃຊ້ເວລາກັບສິ່ງທີ່ສຳຄັນ, ແລ້ວພວກເຮົາຈະຈັດການສ່ວນທີ່ເຫຼືອໃຫ້ເອງ.",
                lt: "„Outlook“ sujungia visus el. laiškus, kalendorių įvykius ir failus, kad to nereikėtų daryti patiems. Kai viskas po ranka, galite planuoti susitikimus su bendradarbiais arba per keletą sekundžių pranešti draugams, kada esate laisvi. Rūpinkitės tik svarbiausias dalykais – visa kita palikite mums.",
                lv: "Programma Outlook apvieno visu e-pastu, kalendāra pasākumus un failus, lai aiztaupītu jums laiku. Ja viss ir pa rokai, sapulču plānošana ar kolēģiem vai pieejamības informācijas koplietošana ar draugiem prasa vien pāris sekunžu. Pievērsieties tam, kas tiešām svarīgs, bet mēs parūpēsimies par pārējo.",
                "mi-NZ": "Ka hiato mai i a Outlook ō īmēra katoa, takahanga maramataka, me ō kōnae me kore ai māu e mahi. Me ngā mea katoa e tata mai ana, ka taea te whakamahere hui ki ngā hoamahi, te tiri wawe i te wāteatanga ki ngā hoa. Whakawātea wā mō ngā mea hira, mā mātou te toenga e tiaki.",
                mk: "Outlook ги спојува сите ваши е-пораки, настаните од календарите и датотеките за да не мора да го правите тоа сами. Имајќи сè на дофат, може да планирате состаноци со колегите или да ги споделувате состојбите со пријателите во рок од неколку секунди. Ослободете време за важните работи, ние ќе се погрижиме за останатото.",
                ml: "Outlook നിങ്ങളുടെ എല്ലാ ഇമെയിലുകളും കലണ്ടർ ഇവന്‍റുകളും ഫയലുകളും ഒരുമിച്ച് കൊണ്ടുവരുന്നതിനാൽ, നിങ്ങൾക്ക് ആ ജോലി ചെയ്യേണ്ടതില്ല. എല്ലാം കൈപ്പിടിയിൽ ഉള്ളപ്പോൾ, നിങ്ങൾക്ക് നിമിഷങ്ങൾക്കകം സഹപ്രവർത്തകരുമായുള്ള മീറ്റിംഗിന് പദ്ധതിയിടാനോ സുഹൃത്തുക്കൾക്ക് ലഭ്യതകൾ പങ്കിടാനോ കഴിയും. പ്രധാനപ്പെട്ടവയ്‌ക്കായി സമയം കണ്ടെത്തുക, ബാക്കിയെല്ലാം ഞങ്ങൾ നോക്കിക്കൊള്ളും.",
                "mn-MN": "Outlook таны оролцоогүйгээр бүх э-шуудан, цаглабарын үйл явдал, файлуудыг хамтатгана. Бүх зүйл гарын үзүүрт байснаар та хэдхэн секундэд найз нөхөдтэйгөө боломжтой байгаагаа хуваалцаж, хамтран ажиллагсадтайгаа уулзалт төлөвлөх боломжтой. Чухал зүйлдээ анхаарлаа хандуулаад үлдсэнийг нь бидэнд даатга.",
                mr: "Outlook आपले सर्व ईमेल, दिनदर्शिका इव्हेंट्स आणि फाइल एकत्रित आणते जेणेकरून आपल्याला ते करण्याची आवश्यकता नसते. पोहोचमध्ये असलेल्या प्रत्येकगोष्टीसह, आपण सहकर्मचार्‍यांसह भेटींचे आयोजन करू शकता किंवा सेकंदांमध्ये मित्रांसाठी उपलब्धता सामायिक करू शकता. महत्वाच्या गोष्टींसाठी वेळ काढा, आम्ही बाकीचे सर्व करू.",
                ms: "Outlook membawakan semua e-mel, peristiwa kalendar dan fail anda bersama-sama supaya anda tidak perlu melakukannya. Dengan semuanya mudah dicapai, anda boleh merancang mesyuarat dengan rakan sekerja atau berkongsi ketersediaan bersama rakan dengan pantas. Luangkan masa untuk perkara penting, kami akan uruskan yang selebihnya.",
                "mt-MT": "Outlook jiġbor flimkien il-posta elettronika, l-avvenimenti tal-kalendarju, u l-fajls kollha tiegħek biex int ma jkollokx tagħmel dan. B'kollox għal idejk, tista' tippjana laqgħat ma' kollegi jew tixxerja d-disponibbiltajiet ma' ħbieb f'sekondi. Agħmel il-ħin għal dak li huwa importanti, aħna nieħdu ħsieb il-kumplament.",
                "ne-NP": "Outlook ले तपाइँका सबै इ-मेल, पात्रो घटना र फाइलहरूलाई एकै ठाउँमा ल्याउँछ त्यसैले तपाइँले यो सबै गर्नुपर्दैन। पहुँच भित्रका सबै कुराहरू मार्फत तपाइँले केही सेकेण्डमै सहकर्मीसँग बैठकको योजना बनाउन र साथीहरूसँग उपलब्धताहरू साझा गर्न सक्नुहुन्छ। महत्वपूर्ण कुराहरूका लागि समय निकाल्नुहोस् बाँकी हामीले हेर्नेछौं।",
                nl: "In Outlook zijn al uw e-mailberichten, agenda-items en bestanden samengebracht, zodat u dit niet zelf hoeft te doen. Met al deze items binnen handbereik kunt u in een mum van tijd vergaderingen met collega's plannen of uw beschikbaarheid delen met vrienden. Maak ruimte voor belangrijke dingen en laat de rest aan ons over.",
                "nn-NO": "Alle e-postmeldingane, kalenderhendingane og filene dine blir samla i Outlook, slik at du ikkje treng å gjere det. Med alt innan rekkjevidde, kan du planleggje møter med kollegaer eller dele tilgjengelegheit med venner på nokre få sekund. Set av tid til det som betyr noko, så ordnar vi resten.",
                no: "Outlook samler alle e-postmeldinger, kalenderhendelser og filer, slik at du slipper å gjøre det. Med alt innen rekkevidde kan du planlegge møter med kolleger eller dele tilgjengelighet med venner på sekunder. Sett av tid til det som er viktig, så fikser vi resten.",
                or: "Outlook ଆପଣଙ୍କର ସମସ୍ତ ଇମେଲ୍‌, କ୍ୟାଲେଣ୍ଡର୍‌ ଇଭେଣ୍ଟ୍‌, ଏବଂ ଫାଇଲ୍‌‌ଗୁଡିକୁ ଏକତ୍ର ଆଣିଥାଏ ଫଳରେ ଆପଣଙ୍କୁ ବେଶୀ କରିବାକୁ ପଡିନଥାଏ. ସବୁକିଛି ପହଞ୍ଚ ଭିତରେ ରହିବା ସହିତ, ଆପଣ ସହକର୍ମୀମାନଙ୍କ ସହିତ ମିଟିଂଗୁଡିକ ଯୋଜନା କରିପାରିବେ କିମ୍ବା କିଛି ସେକେଣ୍ଡ ମଧ୍ୟରେ ଉପଲବ୍ଧତାଗୁଡିକ ସାଙ୍ଗମାନଙ୍କ ସହିତ ଅଂଶୀଦାର କରିପାରିବେ. ଯେଉଁ ବିଷୟର ଗୁରୁତ୍ଵ ରହିଛି ସେଥିପାଇଁ ସମୟ ଦିଅନ୍ତୁ, ଆମେ ଅବଶିଷ୍ଟ ବିଷୟ ବୁଝିବୁ.",
                "pa-IN": "Outlook ਤੁਹਾਡੀ ਸਾਰੀ ਈਮੇਲ, ਕੈਲੰਡਰ ਇਵੈਂਟਾਂ, ਅਤੇ ਫਾਈਲਾਂ ਨੂੰ ਇਕੱਠਿਆਂ ਲਿਆਉਂਦਾ ਹੈ, ਇਸਲਈ ਤੁਹਾਨੂੰ ਇਹ ਕੰਮ ਕਰਨ ਦੀ ਲੋੜ ਨਹੀਂ ਹੁੰਦੀ। ਪਹੁੰਚ ਦੇ ਅੰਦਰ ਹਰ ਚੀਜ਼ ਦੇ ਨਾਲ, ਤੁਸੀਂ ਸਕਿੰਟਾਂ ਵਿੱਚ ਸਹਿ-ਕਰਮਚਾਰੀਆਂ ਦੇ ਨਾਲ ਮੀਟਿੰਗਾਂ ਦੀ ਯੋਜਨਾ ਬਣਾ ਸਕਦੇ ਹੋ ਜਾਂ ਦੋਸਤਾਂ ਦੇ ਨਾਲ ਉਪਲਬਧਤਾਵਾਂ ਸਾਂਝੀਆਂ ਕਰ ਸਕਦੇ ਹੋ। ਜੋ ਮਾਇਨੇ ਰੱਖਦਾ ਹੈ, ਉਸ ਲਈ ਸਮਾਂ ਕੱਢੋ, ਬਾਕੀ ਕੰਮਾਂ ਨਾਲ ਅਸੀਂ ਨਿਪਟਾਂਗੇ।",
                pl: "Program Outlook łączy wszystkie Twoje wiadomości e-mail, zdarzenia kalendarza i pliki, więc nie musisz tego robić. Wszystko jest w zasięgu ręki — możesz w kilka sekund planować spotkania ze współpracownikami lub udostępniać znajomym informacje o dostępności. Poświęcaj czas na to, co ważne, a my zajmiemy się resztą.",
                prs: "Outlook تمامی ایمیل ها، رویداد های سالنما، و فایل های شما را یکجا جمع میکند تا شما مجبور نباشید این کار را انجام دهید. وقتی همه چیز در دسترس باشد، شما می توانید جلسات با همکاران خود برنامه ریزی کرده و قابلیت های دسترسی را با دوستان تان در ظرف چند ثانیه شریک سازید. برای موضوعات مهم وقت پیدا کنید، ما با متباقی موضوعات رسیدگی خواهیم کرد.",
                "pt-PT": "O Outlook reúne todos os seus e-mails, eventos do calendário e ficheiros para não ter de o fazer sozinho. Com tudo ao seu alcance, pode planear reuniões com colegas ou partilhar disponibilidades com amigos em segundos. Dedique-se ao que é importante, nós trataremos do resto.",
                pt: "O Outlook reúne todos os seus emails, eventos de calendário e arquivos para que você não tenha o trabalho de fazer. Com tudo ao alcance, você pode planejar reuniões com os colegas de trabalho ou compartilhar sua disponibilidade com amigos em segundos. Reserve tempo para o que importa e deixe o resto conosco.",
                "qps-ploc": "Outlook brings all of your emails, calendar events, and files together so you don’t have to. With everything within reach, you can plan meetings with coworkers or share availabilities with friends in seconds. Make time for what matters, we’ll deal with the rest.",
                "qps-ploca": "Outlook brings all of your emails, calendar events, and files together so you don’t have to. With everything within reach, you can plan meetings with coworkers or share availabilities with friends in seconds. Make time for what matters, we’ll deal with the rest.",
                "qps-plocm": "Outlook brings all of your emails, calendar events, and files together so you don’t have to. With everything within reach, you can plan meetings with coworkers or share availabilities with friends in seconds. Make time for what matters, we’ll deal with the rest.",
                "quz-PE": "Outlook llapa correo electronicoyki, intiwatanakunayki, ewintukunayki chaymanta kipukunayki apamun chanta mana tiyayta atikunkichu. Llapa imawan qampaq, huñunakuykuna masillamkaqkunawan plan ruwayta atikunki utaq disponibilidad masikunawan segundukunapi qunakunki. Aswan pacha imataq munanki ruway, puchuq imakunawan ruwayku.",
                ro: "Outlook reunește la un loc toate mesajele de e-mail, evenimentele din calendar și fișierele în locul dvs. Având totul la îndemână, puteți să planificați întâlniri cu colegii sau să partajați disponibilitățile cu prietenii în câteva secunde. Folosiți-vă timpul pentru ceea ce contează, noi vom face restul.",
                ru: "Outlook сводит вместе все ваши письма, события календаря и файлы, и вам не нужно тратить время на их поиск по отдельности. Когда все под рукой, вы можете за считанные мгновения планировать собрания с коллегами и делиться сведениями о доступности с друзьями. Находите время для важных вещей, а мы позаботимся об остальном.",
                "sd-Arab-PK": "Outlook توهانجيون اي ميلون، ڪئلينڊر واقعا، ۽ فائلون گڏ آڻي ٿي جيئن توهان کي نه ڪرڻو پوي. پهچ اندر هر شئي سان، توهان ساٿي ڪم ڪندڙن سان ملاقاتون پلان ڪري سگهو ٿا يا سيڪنڊن ۾ دوستن سان موجودگيون حصيداري ڪري سگهو ٿا. جيڪو اهم آهي ان لاءِ وقت ڪڍو، اسان ٻيو پاڻهي ڪنداسين.",
                "si-LK": "Outlook ඔබේ ඊමේල්, දින දසුන් සිදුවීම්, සහ ගොනු සියල්ල එකට ගෙන එන නිසා ඔබට එය කළ යුතු නැත. සියල්ලම අතේ දුරින් ඇතිව, ඔබට තත්පර ගණනකින් සෙසු සේවකයන් සමඟ රැස්වීම් සැලසුම් කළ හැකි හෝ මිතුරන් සමඟ ලද හැකි බව බෙදා ගත හැකියි. වැදගත් දේවල් සඳහා කාලය වෙන් කරන්න, අපි සෙසු ඒවා සමඟ කටයුතු කරන්නම්.",
                sk: "Outlook prepája všetky vaše e-maily, udalosti v kalendári a súbory namiesto vás. Vďaka tomu, že máte všetko na dosah, môžete rýchlo plánovať schôdze so spolupracovníkmi alebo zdieľať informácie o voľnom čase priateľom. Venujte svoj čas tomu, čo je dôležité, ostatné vyriešime za vás.",
                sl: "V Outlooku so zbrana vsa e-poštna sporočila, dogodki koledarja in datoteke, zato jih vam ni treba zbirati. Ker imate vse na dosegu roke, lahko načrtujete srečanja s sodelavci ali pa daste podatke o razpoložljivosti s prijatelji. Prihranite čas za pomembno vsebino, mi pa bomo poskrbeli za ostalo.",
                sq: "Outlook sjell së bashku të gjithë emailin, ngjarjet e kalendarit dhe skedarët që të mos e bësh vetë. Me çdo gjë pranë teje, mund të planifikosh takimet me bashkëpunëtorët ose të bashkëndash disponueshmëritë me shokët në pak sekonda. Gjej kohë për gjërat e rëndësishme, me të tjerat merremi ne.",
                "sr-Cyrl-BA": "Outlook спаја све ваше поруке е-поште, догађаје из календара и фајлове како ви то не бисте морали да радите. Све вам је на дохват руке и можете за само неколико секунди да планирате састанке са сарадницима или дијелите доступност са пријатељима. Одвојите вријеме за оно што је битно, а ми ћемо се побринути за све остало.",
                "sr-Cyrl": "Outlook спаја све ваше е-поруке, догађаје из календара и датотеке како ви то не бисте морали да радите. Све вам је на дохват руке и можете за само неколико секунди да планирате састанке са сарадницима или делите доступност са пријатељима. Одвојите време за оно што је битно, а ми ћемо се побринути за све остало.",
                sr: "Outlook spaja sve vaše e-poruke, događaje iz kalendara i datoteke kako vi to ne biste morali da radite. Sve vam je na dohvat ruke i možete za samo nekoliko sekundi da planirate sastanke sa saradnicima ili delite dostupnost sa prijateljima. Odvojite vreme za ono što je bitno, a mi ćemo se pobrinuti za sve ostalo.",
                sv: "Outlook samlar alla dina e-postmeddelanden, kalenderhändelser och filer så att du slipper. Med allt inom räckhåll kan du planera möten med kollegor eller berätta för vänner när du är ledig på några få sekunder. Gör tid för det som är viktigt, vi tar hand om resten.",
                sw: "Outlook inaleta barua pepe, matukio ya kalenda na faili zako zote pamoja hivyo huna haja ya kufanya hivyo. Kila kitu kikiweza kufikiwa, unaweza kupanga mikutano na wafanyakazi wenza au kushiriki upatikanaji na marafiki kwa sekunde. Tenga wakati kwa kile kilicho muhimu, tutashughulikia mengine.",
                ta: "உங்கள் மின்னஞ்சல்கள், நாட்காட்டி நிகழ்வுகள் மற்றும் கோப்புகளை Outlook ஒன்று சேர்க்கிறது ஆகவே அதை நீங்கள் செய்யத் தேவையில்லை. எல்லாமே அடையும் தூரத்தில் இருப்பதால், சில நொடிகளில் சக ஊழியர்களுடன் சந்திப்புகளைத் திட்டமிடலாம் அல்லது கிடைக்ககூடியதை நண்பர்களுடன் பகிரலாம். எது முக்கியமோ அதற்கு நேரம் செலவிடுங்கள், மீதமுள்ளவற்றை நாங்கள் பார்த்துக்கொள்கிறோம்.",
                te: "Outlook మీ ఇమెయిల్‌లు, క్యాలెండర్ ఈవెంట్‌లు మరియు ఫైల్‌లను ఒకచోట ఉంచుతుంది, కనుక మీరు ఏమీ చేయాల్సిన అవసరం ఉండదు. అన్నీ అందుబాటులోనే ఉంటాయి కనుక, మీరు సహోద్యోగులతో సమావేశాలను ప్లాన్ చేయవచ్చు లేదా సెకన్లలోనే లభ్యతలను స్నేహితులతో భాగస్వామ్యం చేయవచ్చు. ముఖ్యమైన వాటిపై దృష్టి పెట్టండి, మిగిలినవి మేము చూసుకుంటాము.",
                th: "Outlook นำอีเมล ปฏิทินเหตุการณ์ และไฟล์ของคุณทั้งหมดมาไว้ด้วยกันเพื่อที่คุณจะได้ไม่ต้องทำเอง เมื่อมีทุกอย่างอยู่ใกล้ตัว คุณสามารถวางแผนการประชุมกับเพื่อนร่วมงาน หรือแชร์สถานะการติดต่อกับเพื่อนในไม่กี่วินาที เก็บเวลาไว้สำหรับอะไรที่สำคัญ อย่างอื่นปล่อยให้เป็นหน้าที่ของเรา",
                "tk-TM": "Outlook sizi kösäp oturman, ähli e-poçtalaryňyzy, senenama wakalaryny we faýllary bir ýere jemleýär. Hemme zat elýeteriňizde bolsa, sanlyja sekuntda işdeşleriňiz bilen ýygnaklary planlap ýa-da dostlaryňyz bilen mümkinçilikleri paýlaşyp bilersiňiz. Möhüm zatlaryňyza maý tapsaňyz bolany, galan zady özümiz oňararys.",
                tr: "Outlook tüm e-postalarınızı, takvim etkinliklerinizi ve dosyalarınızı sizin için bir araya getirir. Her şey elinizin altındayken, saniyeler içinde iş arkadaşlarınızla toplantılar planlayabilir veya uygun olduğunuz zamanları arkadaşlarınızla paylaşabilirsiniz. Zamanınızı önemli şeylere ayırın, geri kalanıyla biz ilgileniriz.",
                tt: "Outlook барлык хатларыгызны, календарь вакыйгаларыгызны һәм файлларыгызны берләштерә. Барысы да ирешерлек урында булганга, сез берничә секунд эчендә коллегаларыгыз белән очрашуларны планлаштыра яки дусларыгыз белән мөмкинлегегез белән уртаклаша аласыз. Вакытыгызны мөһим әйберләргә тотыгыз, калганын безгә калдырыгыз.",
                "ug-CN": "Outlook بارلىق تورخەت، كالېنداردىكى ئىشلار ۋە ھۆججەتلىرىڭىزنى بىر يەرگە توپلاپ بېرىدۇ. بىر يەردە تۇرۇپلا خىزمەتداشلار بىلەن يىغىن ئۇيۇشتۇرالايسىز ياكى دوستلىرىڭىز بىلەن بوش-ئالدىراشلىق ھالىتىڭىزنى ئورتاقلىشالايسىز. مۇھىم ئىشلارغىلا ۋاقتىڭىزنى چىقارسىڭىز، قالغانلىرىنى بىز قىلىپ بېرىمىز.",
                uk: "Outlook збирає за вас усі електронні листи, події календаря та файли. Тримаючи все під рукою, ви можете миттєво планувати наради з колегами або повідомляти друзів, коли ви вільні. Приділяйте час важливим речам, а ми подбаємо про решту.",
                ur: "Outlook آپ کی تمام ای میل، کلینڈر وقوعات، اور فائلوں کو ساتھ لاتا ہے اس لئے آپ کو نہیں کرنا ہوگا۔ ہر چیز پہنچ میں ہونے کے ساتھ، آپ سیکنڈوں میں رفقائے کار کے ساتھ ملاقاتیں پلان کر سکتے ہیں یا دوستوں کے ساتھ دستیابیوں کی حصہ داری کر سکتے ہیں۔ جو اہم ہے اس کے لئے وقت نکالیں، باقی ہم سنبھال لیں گے۔",
                uz: "Outlook barcha e-pochtani, taqvimdagi tadbirlaringiz va fayllaringizni birlashtiradi, shuning uchun bu sizga kerak emas. Mavjud barcha vosita va imkoniyatlar yordamida soniyalar ichida hamkasblar bilan majlislar rejalashtirish yoki tanishlar bilan ma’lumotlar almashish mumkin. Muhim narsalarga vaqt ajrating, qolganini o‘zimiz hal qilamiz.",
                vi: "Outlook tập hợp mọi email, sự kiện trên lịch và tệp của bạn nên bạn không cần thực hiện điều đó nữa. Với mọi thứ đều trong tầm tay, bạn có thể lên lịch họp với đồng nghiệp hoặc chia sẻ trạng thái sẵn sàng với bạn bè trong vài giây. Hãy dành thời gian cho những việc quan trọng và chúng tôi sẽ lo phần còn lại.",
                "zh-Hans": "Outlook 可将你的所有电子邮件、日历事件和文件汇聚一处。一切唾手可得，你可以在很短时间内安排与同事的会议或与朋友共享状态。腾出时间做重要的事，剩下的就交给我们吧。",
                "zh-Hant": "Outlook 會將您所有的電子郵件、行事曆活動與檔案集中在一起。當您可以隨手存取任何項目時，您就可以立即規劃與同事的會議或與朋友分享空閒/忙碌資訊。您只需將時間花在更重要的地方，其他的就交給我們了。"
            },
            TagLine2_Title_Text: {
                af: "Die lewe is beter as dit georganiseerd is",
                am: "ህይወ’ት የበለጠ ተደራጅቷል",
                ar: "التنظيم يجعل الحياة أفضل",
                "as-IN": "জীৱনটো উন্নত কৰি সজাওক",
                "az-Latn-AZ": "Həyat daha yaxşı qaydaya salınıb",
                "be-BY": "Парадак у справах",
                bg: "Животът е по-добре организиран",
                "bn-BD": "সবকিছু সংগঠিত রেখে আরও ভালো জীবন যাপ’ন করা যায়",
                "bn-IN": "সংগঠিতভাবে জীবনযাপন আরও আনন্দের হ’য়",
                "bs-Latn-BA": "Bolja organizacija života",
                "ca-ES-valencia": "La vida és millor si hi ha organització",
                ca: "La vida és millor si hi ha organització",
                cs: "Zorganizujte si lépe čas",
                cy: "Bywyd trefnus, bywyd gwell",
                da: "Livet er bedre organiseret",
                de: "Mehr Organisation im Leben",
                el: "Καλύτερη οργάνωση της ζωής",
                "en-GB": "Life's better organised",
                en: "Life’s better organized",
                "es-MX": "La vida es mejor cuando está organizada",
                es: "La vida es mejor cuando está organizada",
                et: "Elu on paremini korraldatud",
                eu: "Bizitza hobeto antolatuta izan dezazun",
                fa: "زندگی بهتر سازماندهی شده",
                fi: "Elämä paremmin järjestyksessä",
                fil: "Mas organisado ang buhay",
                "fr-CA": "Soyez encore mieux organisé",
                fr: "Soyez encore mieux organisé",
                "ga-IE": "Saol atá eagraithe níos fearr",
                "gd-GB": "’S fheairrde tu rian air cùisean",
                gl: "Unha vida mellor organizada",
                gu: "જીવન વધુ સુવ્યવસ્થિત રહે છે",
                "ha-Latn-NG": "Rayuwa tana a tsare da ƙarin kyau",
                he: "החיים הופכים למאורגנים יותר",
                hi: "जीवन बेहतर तरीके से व्यवस्थित है",
                hr: "Život je bolji kad je organiziran",
                hu: "Rendezettebb mindennapok",
                hy: "Կյանքն ավելի լավ է, երբ կազմակերպված է",
                id: "Hidup akan lebih baik jika tertata",
                is: "Betra skipulag á lífinu",
                it: "Per una vita più organizzata",
                ja: "まとめられている方が人生は良くなります",
                ka: "ცხოვრება უკეთ ორგანიზებულია",
                kk: "Оңтайлы ұйымдастыру",
                "km-KH": "ជីវិត’s កាន់តែមានរបៀបរៀបរយ",
                kn: "ಬದುಕು ಉತ್ತಮವಾಗಿ ಆಯೋಜಿತವಾಗಿದೆ",
                ko: "체계적 구성",
                kok: "जीवन बरें संघटीत दवरचें",
                ky: "Жашооңуз жакшыраак уюштурулат",
                "lb-LU": "E besser organiséiert Liewen",
                "lo-LA": "ຈັດ​ລະບຽບ​ຊີວິດ​ໄດ້​ດີກ​ວ່າ",
                lt: "Geriau suplanuotas gyvenimas",
                lv: "Labāk organizēta dzīve",
                "mi-NZ": "Ka raupapa pai ake tō ao",
                mk: "Подобро организиран живот",
                ml: "ജീവിതത്തിൽ നന്നായി ആസൂത്രണം ചെയ്‌തത്",
                "mn-MN": "Цэгцтэй байвал амьдрал сайхан",
                mr: "जीवन उत्तमरित्या आयोजित केले आहे",
                ms: "Hidup menjadi lebih baik jika teratur",
                "mt-MT": "Il-ħajja organizzata aħjar",
                "ne-NP": "जीवनको अझ राम्रो संगठित",
                nl: "Een beter georganiseerd leven",
                "nn-NO": "Betre organisert liv",
                no: "Livet er bedre når du har orden i sakene",
                or: "ଜୀବନ ଉତ୍ତମ ରୂପେ ଶୃଙ୍ଖଳିତ ହୋଇଛି",
                "pa-IN": "ਜ਼ਿੰਦਗੀ ਬੇਹਤਰ ਤਰੀਕੇ ਵਿੱਚ ਵਿਵਸਥਿਤ ਹੈ",
                pl: "Lepiej zorganizowane życie",
                prs: "زندگی بهتر منظم میشود",
                "pt-PT": "Uma vida mais organizada",
                pt: "A vida é melhor organizada",
                "qps-ploc": "Life’s better organized",
                "qps-ploca": "Life’s better organized",
                "qps-plocm": "Life’s better organized",
                "quz-PE": "Kawsay allinlla kamachisqan",
                ro: "Viața este mai bine organizată",
                ru: "Поддерживайте порядок",
                "sd-Arab-PK": "زندگي بهترين آرگنائيز ٿيل آهي",
                "si-LK": "ජීවිතය සංවිධානාත්මකව වඩා යහපත් වේ",
                sk: "Lepšie zorganizovaný čas",
                sl: "Bolj organiziran način življenja",
                sq: "Jeta organizohet më mirë",
                "sr-Cyrl-BA": "Живот је бољи кад је организован",
                "sr-Cyrl": "Живот је бољи кад је организован",
                sr: "Život je bolji kad je organizovan",
                sv: "Livet är bättre organiserat",
                sw: "Maisha yamepangiliwa vizuri",
                ta: "வாழ்க்கை நன்கு ஒழுங்கமைக்கப்படுகிறது",
                te: "అన్నింటినీ ఉత్తమంగా నిర్వహించవచ్చు",
                th: "จัดระเบียบชีวิตได้ดีขึ้น",
                "tk-TM": "Ýaşaýyş has tertibe girýär",
                tr: "Düzenli çalışarak verimlilik sağlayın",
                tt: "Тормыш яхшырак оештырылган",
                "ug-CN": "رەتلىك تۇرمۇش تېخىمۇ كۆڭۈللۈك",
                uk: "Зробіть життя упорядкованішим",
                ur: "زنگی بھترین منظم ہے",
                uz: "Hayot yanada yaxshiroq tashkillashtirilgan",
                vi: "Sắp xếp cuộc sống tốt hơn",
                "zh-Hans": "生活更加井井有条",
                "zh-Hant": "讓您的生活更有條理"
            },
            TagLine3_Description_Text: {
                af: "Ontdek hoe eenvoudig skedulering is wanneer al jou gebeurtenisse en e-posse in een toepassing is. Die lewe kan morsig wees, maar jou kalender moenie. Ons ondersteun Gmail, Yahoo, iCloud en ander rekeninge.",
                am: "ሁሉም ክስተቶችዎ እና ኢሜይሎችዎ በአንድ መተግበሪያ ውስጥ በሚሆኑ ጊዜ፣ የጊዜ ሰሌዳ ማውጣት ምን ያህል ቀላል እንደሆነ ይድረሱበት። ሕይወት ሊዘበራረቅ ይችላል፣ የእርስዎ ቀን መቁጠሪያ ግን እንደዚያ መሆን አያስፈልገውም። Gmail፣ Yahoo፣ iCloud፣ እና ሌሎችንም መለያዎች እንደግፋለን።",
                ar: "اكتشف ميزة الجدولة البسيطة واحصل على جميع الأحداث ورسائل البريد الإلكتروني في تطبيق واحد. قد تكون الحياة فوضوية بين الحين والآخر لكن ليس على تقويمك أن يكون كذلك. يتوفر الدعم لحسابات iCloud وYahoo وGmail والحسابات الأخرى.",
                "as-IN": "আপোনাৰ সকলো ইভেণ্ট আৰু ইমেইল মাত্ৰ এটা এপ্প্‌তে থকাৰ সময়ত সময়সূচী কৰা কিমান সৰল হয় অন্বেষণ কৰক৷ জীৱন অপ্ৰিয় হৈ পৰিব, আপোনাৰ কেলেণ্ডাৰ নহ’ব৷ আমি Gmail, Yahoo, iCloud আৰু অন্য একাউণ্টসমূহ সমৰ্থন কৰোঁ৷",
                "az-Latn-AZ": "Bütün hadisələr və e-poçtlarınız sadəcə bir proqramda olarkən planlaşdırmanın necə sadə olduğunu kəşf edin. Həyat qarışıq olmalıdır, təqviminiz deyil. Biz Gmail, Yahoo, iCloud və digər hesabları dəstəkləyirik.",
                "be-BY": "Паглядзіце, наколькі спрашчаецца планаванне, калі ўсе падзеі і электронная пошта — у адной праграме. У жыцці можа не быць парадку — але ў календары ён быць павінен. Мы падтрымліваем Gmail, Yahoo, iCloud і іншыя ўліковыя запісы.",
                bg: "Открийте колко е просто планирането, когато всички ваши събития и имейли са в едно приложение. Животът е объркан, но вашият календар не трябва да бъде такъв. Поддържаме Gmail, Yahoo, iCloud и други акаунти.",
                "bn-BD": "আপনার সমস্ত ইভেন্ট এবং ইমেল কেবলমাত্র একটি অ্যাপে থাকাকালে সময় নির্ধারণ করা হয় কত সহজ তা আবিষ্কার করুন। জীবন নোংরা হবে; তবে আপনার ক্যালেন্ডার ন’য়৷ আমরা Gmail, Yahoo, iCloud এবং অন্যান্য অ্যাকাউন্ট সমর্থন করি।",
                "bn-IN": "আপনার সমস্ত ইভেন্ট এবং ইমেল কেবলমাত্র একটি অ্যাপে থাকাকালে সময় নির্ধারণ করা হয় কত সহজ তা আবিষ্কার করুন। জীবন নোংরা হবে; তবে আপনার ক্যালেন্ডার ন’য়৷ আমরা Gmail, Yahoo, iCloud এবং অন্যান্য অ্যাকাউন্ট সমর্থন করি।",
                "bs-Latn-BA": "Otkrijte koliko je planiranje jednostavno kada se svi događaji i e-pošta nalaze samo u jednoj aplikaciji. Život je kompliciran, ali vaš kalendar ne treba biti. Podržavamo Gmail, Yahoo, iCloud i druge račune.",
                "ca-ES-valencia": "Descobriu com n'és, de senzilla, la planificació quan tots els esdeveniments i els correus electrònics són en una mateixa aplicació. La vida és caòtica, però el vostre calendari no ho hauria de ser. Admetem comptes del Gmail, del Yahoo, de l'iCloud i d'altres serveis.",
                ca: "Descobreix com de simple és la programació quan tots els vostres esdeveniments i tot el correu electrònic es troben en només una aplicació. La vida és complicada; però el vostre calendari no ho hauria de ser. Admetem els comptes de Gmail, Yahoo, iCloud i d'altres.",
                cs: "Zjistěte, jak jednoduché je plánování, když máte všechny svoje události a e-maily v jediné aplikaci. Život je někdy chaotický, nemělo by se to ale přenášet do vašeho kalendáře. Podporujeme účty Gmail, Yahoo, iCloud a další.",
                cy: "Gyda’ch holl ddigwyddiadau a negeseuon e-bost mewn un ap, mae cadw trefn dros bethau’n haws nag erioed. Gallwn ddelio â Gmail, Yahoo, iCloud, a chyfrifon eraill.",
                da: "Opdag, hvor nemt planlægning er, når alle dine begivenheder og mails er i én app. Livet er rodet, men din kalender bør ikke være det. Vi understøtter Gmail, Yahoo, iCloud og andre konti.",
                de: "Entdecken Sie, wie einfach Terminplanung ist, wenn alle Ihre Ereignisse und E-Mails sich in nur einer App befinden. Das Leben ist unübersichtlich – Ihr Kalender sollte das allerdings nicht sein. Wir unterstützen Gmail-, Yahoo-, iCloud- und andere Konten.",
                el: "Ανακαλύψτε πόσο εύκολος είναι ο προγραμματισμός, όταν όλα τα συμβάντα και τα μηνύματα ηλεκτρονικού ταχυδρομείου σας βρίσκονται συγκεντρωμένα σε μία εφαρμογή. Η ζωή μπορεί να είναι μπερδεμένη, αλλά το ημερολόγιό σας δεν πρέπει να είναι. Υποστηρίζουμε Gmail, Yahoo, iCloud και άλλους λογαριασμούς.",
                "en-GB": "Discover how simple scheduling is when all your events and emails are in just one app. Life is messy; your calendar shouldn't be. We support Gmail, Yahoo, iCloud and other accounts.",
                en: "Discover how simple scheduling is when all your events and email are in just one app. Life is messy; your calendar shouldn't be. We support Gmail, Yahoo, iCloud, and other accounts.",
                "es-MX": "Descubre lo fácil que es programar la agenda cuando todos los eventos y los mensajes de correo electrónico están en una sola aplicación. La vida puede ser complicada, pero el calendario no debería serlo. Se admiten cuentas de Gmail, iCloud y Yahoo, entre otras.",
                es: "Descubra lo fácil que es programar la agenda cuando todos los eventos y los mensajes de correo electrónico están en una sola aplicación. La vida puede ser complicada, pero el calendario no debería serlo. Se admiten cuentas de Gmail, iCloud y Yahoo, entre otras.",
                et: "Kui kõik sündmused ja meilisõnumid on ühes rakenduses koos, on plaanide tegemine imelihtne. Elu peaks olema täis üllatusi, kalender aga mitte! Toetame Gmaili, Yahoo, iCloudi ja muid kontosid.",
                eu: "Ikusi zein erraza den gauzak antolatzea gertaerak eta mezu elektronikoak aplikazio berean dituzunean. Bizitza hankaz gora baduzu ere, ziurtatu egutegia txukun-txukun daukazula. Gmail, Yahoo, iCloud eta beste kontu batzuk erabil ditzakezu.",
                fa: "ببینید هنگامی که همه رویدادها و ایمیل‌ها تنها در یک برنامه واحد قرار دارند چقدر برنامه‌ریزی آسان خواهد بود. اشکالی ندارد زندگیتان شلوغ پلوغ باشد، اما تقویمتان نباید اینطور باشد. ما از Gmail، Yahoo، iCloud و سایر حساب‌ها پشتیبانی می‌کنیم.",
                fi: "Huomaat, miten helppoa aikataulun hallinta on, kun kaikki tapahtumat ja viestit ovat yhdessä ja samassa sovelluksessa. Kalenterin ei kuulu olla sekaisin, vaikka elämä muuten olisikin. Sovellus tukee muiden muassa Gmail-, Yahoo- ja iCloud-tilejä.",
                fil: "Matuklasan kung gaano kasimple ang pag-iiskedyul kapag nasa iisang app lang ang lahat ng iyong kaganapan at email. Magulo ang buhay, hindi dapat ganun ang iyong kalendaryo. Sinusuportahan namin ang Gmail, Yahoo, iCloud, at iba pang mga account.",
                "fr-CA": "Simplifiez-vous la planification en accédant à tous vos événements et courriels au sein d’une seule application. Si votre vie est parfois chaotique, votre calendrier ne doit pas l’être. Nous prenons en charge Gmail, Yahoo, iCloud et d’autres comptes.",
                fr: "Simplifiez-vous la planification en accédant à tous vos événements et courriers au sein d’une seule application. Si votre vie est parfois chaotique, votre calendrier ne doit pas l’être. Nous prenons en charge Gmail, Yahoo, iCloud et d’autres comptes.",
                "ga-IE": "Faigh amach cé chomh simplí is atá sceidealú nuair atá gach ócáid agus ríomhphost agat san aon fheidhmchlár amháin. Is é do shaol atá míshlachtmhar; ní d’fhéilire. Tacaímid le Gmail, Yahoo, iCloud, agus le cuntais eile.",
                "gd-GB": "Feuch dè cho furasta ’s a tha sgeidealachadh ma bhios na tachartasan is am post-d agad san aon aplacaid. Tha rù-rà na beatha glan taghta ach cha bu chòir dhan mhìosachan agad a bhith na rù-rà. Tha sinn a’ cur taic ri Gmail, Yahoo, iCloud is cunntasan eile.",
                gl: "Descubre o fácil que é programar a axenda cando todos os eventos e correos electrónicos están nunha soa aplicación. Aínda que a vida é complicada, o calendario non debería selo. Admítense contas de Gmail, iCloud e Yahoo, entre outras.",
                gu: "જ્યારે તમારી બધી ઇવેન્ટ અને ઈમેલ માત્ર એક જ એપ્લિકેશનમાં હોય ત્યારે શેડ્યૂલિંગ કરવાનું કેટલું સરળ છે તે શોધો. જીવન અવ્યવસ્થિત હોય છે; તમારું કૅલેન્ડર ન હોવું જોઈએ. અમે Gmail, Yahoo, iCloud અને અન્ય ખાતાંને સમર્થન આપીએ છીએ.",
                "ha-Latn-NG": "Gano yanda yake da sauƙi tsarawa idan dukan sha'anoni da imel ɗinka suna a cikin kawai ka'ida ɗaya. Rayuwa ta cunkusa, amma bai kamata kalandarka ta zama haka ba. Muna goyi bayan Gmail, Yahoo, iCloud, da sauran asusu-asusu.",
                he: "גלה עד כמה תזמון הוא משימה פשוטה כשכל האירועים והדואר האלקטרוני שלך נמצאים ביישום אחד. בחיים יש אי-סדר, אבל לוח השנה שלך אמור להיות מסודר. אנחנו תומכים ב- Gmail‏, Yahoo‏, iCloud וחשבונות אחרים.",
                hi: "अन्वेषण करें कि आपके सभी ईवेंट और ईमेल एक ही ऐप में होने पर शेड्यूल करना कितना आसान होता है. जीवन अस्त-व्यस्त है लेकिन आपका कैलेंडर अस्त-व्यस्त नहीं होना चाहिए. हम Gmail, Yahoo, iCloud और अन्य खातों का समर्थन करते हैं.",
                hr: "Otkrijte kako je jednostavno planiranje kad su svi događaji i poruke e-pošte u jednoj aplikaciji. Neorganiziranost je odlika života, no ne mora biti i vašeg kalendara. Podržavamo račune za Gmail, Yahoo i iCloud i druge servise.",
                hu: "Fedezze fel, milyen könnyen ütemezheti a dolgait, ha minden eseménye és e-mailje egyetlen appban elérhető. Lehet, hogy az élet bonyolult, a naptár viszont ne legyen az. Gmail-, Yahoo!-, iCloud- és más fiókokat is használhat.",
                hy: "Տեսեք, թե որքան հեշտ է հերթագրումը, երբ ձեր բոլոր իրադարձությունները և էլ. փոստերը մեկ գործադիրի մեջ են: Կյանքում ամեն ինչ կարող է խառնաշփոթ լինել, բայց ձեր օրացույցում՝ երբեք: Աջակցվում են Gmail-ի, Yahoo-ի, iCloud-ի և այլ հաշիվներ:",
                id: "Menemukan kesederhanaan penjadwalan adalah saat semua acara dan email Anda berada dalam satu aplikasi. Kehidupan mungkin tidak tertata, namun kalender Anda harus rapi. Kami mendukung Gmail, Yahoo, iCloud, dan akun lainnya.",
                is: "Sjáðu hversu einfalt er að skipuleggja sig þegar dagbókarfærslur og tölvupóstur eru í einu og sama forritinu. Lífið er óreiðukennt; dagbókin ætti ekki að vera það. Við styðjum Gmail, Yahoo, iCloud og aðra reikninga.",
                it: "Scopri come è facile programmare quando tutti gli eventi e i messaggi di posta elettronica sono in un'unica app. La vita è confusa, ma il tuo calendario non dovrebbe esserlo. Sono supportati account Gmail, Yahoo, iCloud e altri.",
                ja: "すべての予定とメールがたった 1 つのアプリで処理できると、スケジュールを決めることがどれだけ簡単になるかがわかります。人生は複雑ですが、予定表は整頓されている必要があります。Gmail、Yahoo、iCloud やその他のアカウントがサポートされています。",
                ka: "აღმოაჩინეთ, თუ რა მარტივია დაგეგმვა, როდესაც ყველა თქვენი მოვლენა და ელწერილი არის მხოლოდ ერთ აპში. ცხოვრება ქაოსურია, თქვენი კალენდარი არა. ჩვენთან მხარდაჭერილია Gmail, Yahoo, iCloud და სხვა ანგარიშები.",
                kk: "Іс-шаралар мен электрондық хаттардың барлығы бір бағдарламада болған кезде, жұмыс күнін жоспарлау сондай ыңғайлы. Қазіргі қарбалас өмірде күнтізбенің көмегімен бәрін ретке келтіріп ала аласыз. Gmail, Yahoo, iCloud және басқа да тіркелгілерге қолдау көрсетіледі.",
                "km-KH": "រកឃើញអំពីភាពសាមញ្ញ​ក្នុងការរៀបចំកាលវិភាគនៅពេលដែលព្រឹត្តិការណ៍ និងអ៊ីម៉ែលទាំងអស់របស់អ្នកចូលមកក្នុង​កម្មវិធី​ត្រឹមតែមួយ។ ជីវិតគួរតែរញ៉េរញ៉ៃ ប៉ុន្តែប្រតិទិនរបស់អ្នកមិនគួររញ៉េរញ៉ៃទេ។ យើងគាំទ្រ​គណនី Gmail, Yahoo, iCloud និងគណនី​ផ្សេងទៀត។",
                kn: "ನಿಮ್ಮ ಎಲ್ಲಾ ಈವೆಂಟ್‌ಗಳು ಮತ್ತು ಇಮೇಲ್‌ ಕೇವಲ ಒಂದೇ ಅಪ್ಲಿಯಲ್ಲಿರುವಾಗ ನಿಗದಿಪಡಿಸುವಿಕೆಯು ಎಷ್ಟು ಸರಳವಾಗಿದೆ ಎಂಬುದನ್ನು ಅನ್ವೇಷಿಸಿ. ಜೀವನವು ಗೊಂದಲಮಯವಾಗಿದೆ; ನಿಮ್ಮ ಕ್ಯಾಲೆಂಡರ್ ಹಾಗಿರಬಾರದು. ನಾವು Gmail, Yahoo, iCloud, ಮತ್ತು ಇತರ ಖಾತೆಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತೇವೆ.",
                ko: "하나의 앱에서 모든 이벤트와 전자 메일을 간편하게 예약할 수 있습니다. 바쁘고 복잡한 생활 속의 일정을 간편하게 정리해 보세요. Gmail, Yahoo, iCloud 및 다른 계정을 지원합니다.",
                kok: "तुमच्यो सगळ्यो कार्यावळी आनी ई-मेली जेन्ना एकाच ऍप्लिकेशनांत आसतात तेन्ना शेड्युलींग कितलें सोंपें आसा तें सोदून काडचें. जिवीत अप्रीय आसूंक जाय, पूण तुमचो कॅलेंडर न्हय. आमी Gmail, Yahoo, iCloud आनी हेर खात्यांक तेंको दितात.",
                ky: "Бардык иш-чараларыңыз жана электрондук почталарыңыз бир эле колдонмодо болсо, график түзүүнүн кандай жөнөкөй экенин байкайсыз. Жашоо башаламан болсо да, календарыңыз башаламан болбойт. Gmail, Yahoo, iCloud жана башка каттоо жазуулары колдоого алынат.",
                "lb-LU": "Entdeckt, wéi einfach et ass, eppes ze plangen, wann all Är Evenementer an E-Mailen an enger App versammelt sinn. D'Liewen ass en Duercherneen, Äre Kalenner sollt et net sinn. Mir ënnerstëtze Gmail-, Yahoo-, iCloud- an aner Konten.",
                "lo-LA": "ຄົ້ນພົບຄວາມງ່າຍຂອງການຕັ້ງກຳນົດການເມື່ອນັດໝາຍ ແລະ ອີເມວທັງໝົດຂອງທ່ານຢູ່ໃນແອັບດຽວກັນ. ຊີວິດນັ້ນຫຍຸ້ງຍາກ, ແຕ່ປະຕິທິນຂອງທ່ານບໍ່ຄວນເປັນແບບນັ້ນ. ພວກເຮົາຮອງຮັບ Gmail, Yahoo, iCloud ແລະ ບັນຊີອື່ນໆ.",
                lt: "Sužinokite, kaip paprasta planuoti, kai visi įvykiai ir el. laiškai yra vienoje programoje. Gyvenimas gali būti netvarkingas, bet kalendorius – ne. Palaikome „Gmail“, „Yahoo“, „iCloud“ ir kitas paskyras.",
                lv: "Atklājiet, cik vienkārši var visu ieplānot, ja visi jūsu pasākumi un e-pasta ziņojumi ir iekļauti vienā programmā. Dzīve ir neprognozējama, bet kalendāram tādam nav jābūt. Mēs atbalstām Gmail, Yahoo, iCloud un citus kontus.",
                "mi-NZ": "Kite rawa he māmā te whakariterite ina kei te taupānga kotahi ō takahanga me ō īmēra katoa. He tūheihei te ora; me kaua ia tō maramataka. Tautoko ana mātou i a Gmail, Yahoo, iCloud, me ētahi atu pūkete.",
                mk: "Откријте колку е едноставно правењето распореди кога сите ваши настани и е-пошта се во само една апликација. Животот е неуреден, но календарот не е. Поддржуваме Gmail, Yahoo, iCloud и други сметки.",
                ml: "നിങ്ങളുടെ എല്ലാ ഇവന്‍റുകളും ഇമെയിലുകളും ഒരൊറ്റ ആപ്പിൽ ഉണ്ടായിരിക്കുമ്പോൾ, ഷെഡ്യൂൾ ചെയ്യൽ എത്ര ലളിതമാണെന്ന് കണ്ടെത്തുക. ജീവിതം അടുക്കും ചിട്ടയും ഇല്ലാത്തതായിരിക്കും, എന്നാൽ കലണ്ടർ അങ്ങനെയല്ല. ഞങ്ങൾ Gmail, Yahoo, iCloud എന്നിവയും മറ്റ് അക്കൗണ്ടുകളും ഞങ്ങൾ പിന്തുണയ്‌ക്കുന്നു.",
                "mn-MN": "Таны бүх үйл явдал болон э-шуудан нь ердөө нэг програм дээр байхад төлөвлөх нь ямар энгийн болохыг олж нээгээрэй. Амьдрал эмх замбараагүй байх ч, таны цаглабар тийм байх ёсгүй. Бид Gmail, Yahoo, iCloud болон бусад хэрэглэгчийн бүртгэлийг дэмждэг.",
                mr: "आपले सर्व इव्हेंट्स आणि ईमेल हे केवळ एकाच अनुप्रयोगात असतात तेव्हा शेड्युलिंग किती सोपे असावे हे शोधा. आयुष्यात अनेक गोंधळ घडतात, आपल्या दिनदर्शिकेत नाही. आम्ही Gmail, Yahoo, iCloud आणि अन्य खात्यांना समर्थन देतो.",
                ms: "Temui cara penjadualan menjadi mudah apabila semua peristiwa dan e-mel anda berada dalam hanya satu aplikasi. Hidup adalah tidak teratur tetapi kalendar anda tidak harus sebegini. Kami menyokong Gmail, Yahoo, iCloud dan akaun lain.",
                "mt-MT": "Skopri kemm hu sempliċi l-iskedar meta l-avvenimenti u l-posta elettronika kollha tiegħek f'app waħda biss. Il-ħajja tista' tkun imħarbta; il-kalendarju tiegħek m'għandux ikun hekk. Nappoġġjaw Gmail, Yahoo, iCloud, u kontijiet oħra.",
                "ne-NP": "आफ्ना सबै कार्यक्रम र इमेलहरू एउटै एप्लिकेसनमा हुँदा कार्यतालिका बनाउन कति सजिलो हुन्छ भन्ने कुरा अन्वेषण गर्नुहोस्। जीवन अस्तव्यस्त हुन सक्छ तर तपाइँको पात्रो अस्तव्यस्त हुनुहुँदैन। हामी Gmail, Yahoo, iCloud, र अन्य खाताहरूलाई समर्थन गर्छौं।",
                nl: "Ontdek hoe eenvoudig plannen wordt, wanneer al uw gebeurtenissen en e-mailberichten in één app zijn verzameld. Het leven mag rommelig zijn, maar uw agenda niet. We bieden ondersteuning voor Gmail, Yahoo, iCloud en andere accounts.",
                "nn-NO": "Oppdag kor enkelt det er å planleggje når alle hendingar og e-postmeldingar visast i berre éin app. Livet er rotete, men kalenderen skal ikkje vere det. Vi støttar Gmail, Yahoo, iCloud og andre kontoar.",
                no: "Oppdag hvor enkelt det er å planlegge når alle hendelser og e-postmeldinger vises i bare én app. Livet kan være rotete, men kalendere skal ikke være det. Vi støtter Gmail, Yahoo, iCloud og andre kontoer.",
                or: "ଯେତେବେଳେ ଆପଣଙ୍କର ସମସ୍ତ ଇଭେଣ୍ଟ୍‌ ଏବଂ ଇମେଲ୍ କେବଳ ଗୋଟିଏ ଆପ୍ଲିକେସନ୍‌ରେ ରହିଥାଏ ସେତେବେଳେ ଅନୁସୂଚୀ ନିର୍ଦ୍ଧାରଣ କରିବା କେତେ ସରଳ ଆବିଷ୍କାର କରନ୍ତୁ. ଜୀବନ ଅବ୍ୟବସ୍ଥିତ ଅଟେ; ଆପଣଙ୍କ କ୍ୟାଲେଣ୍ଡର୍‌ ନୁହେଁ. ଆମେ Gmail, Yahoo, iCloud, ଏବଂ ଅନ୍ୟ ଏକାଉଣ୍ଟ୍‌ଗୁଡିକୁ ସମର୍ଥନ କରିଥାଉ.",
                "pa-IN": "ਇਹ ਖੋਜ ਕਰੋ ਕਿ ਜਦੋਂ ਤੁਹਾਡੇ ਸਾਰੇ ਇਵੈਂਟ ਅਤੇ ਈਮੇਲਾਂ ਸਿਰਫ਼ ਇੱਕ ਐਪਲੀਕੇਸ਼ਨ ਵਿੱਚ ਹੁੰਦੇ ਹਨ, ਤਾਂ ਸ਼ੈਡਿਊਲਿੰਗ ਕਰਨਾ ਕਿੰਨਾ ਸੌਖਾ ਹੁੰਦਾ ਹੈ। ਜੀਵਨ ਵਿੱਚ ਘੜਮੱਸ ਮੱਚਣਾ ਚਾਹੀਦਾ ਹੈ; ਨਾ ਕਿ ਤੁਹਾਡੇ ਕੈਲਡੰਰ ਵਿੱਚ। ਅਸੀਂ Gmail, Yahoo, iCloud, ਅਤੇ ਹੋਰ ਖਾਤਿਆਂ ਦਾ ਸਮਰਥਨ ਕਰਦੇ ਹਾਂ।",
                pl: "Odkryj, jak proste jest planowanie, gdy wszystkie zdarzenia i wiadomości e-mail znajdują się w tylko jednej aplikacji. Codzienność może być chaotyczna, ale Twój kalendarz nie powinien. Obsługujemy konta usług Gmail, Yahoo, iCloud i inne.",
                prs: "کشف کنید زمانیکه همه رویداد ها و ایمیل ها در یک برنامه باشند، تعیین تقسیم اوقات چقدر ساده است. زندگی شلوغ است؛ سالنمای تان نباید شلوغ باشد. ما حسابات Gmail، Yahoo، iCloud و سایر حسابات را پشتیبانی میکنیم.",
                "pt-PT": "Descubra como é simples agendar quando todos os seus eventos e e-mails estão reunidos numa única aplicação. A vida é desorganizada, mas o seu calendário não deve ser. Suportamos o Gmail, Yahoo, iCloud e outras contas.",
                pt: "Veja como é simples fazer agendamentos ao ter todos os seus eventos e emails em um único aplicativo. O dia a dia pode ser complicado, mas o calendário não. Damos suporte às contas do Gmail, Yahoo, iCloud e a outras contas.",
                "qps-ploc": "No matter what you’re up to or where you’re headed, Outlook is here for you on your computer, phone or tablet. Outlook for iOS and Android also works with all your email addresses – from your Office account to your personal Gmail.  ",
                "qps-ploca": "No matter what you’re up to or where you’re headed, Outlook is here for you on your computer, phone or tablet. Outlook for iOS and Android also works with all your email addresses – from your Office account to your personal Gmail.  ",
                "qps-plocm": "No matter what you’re up to or where you’re headed, Outlook is here for you on your computer, phone or tablet. Outlook for iOS and Android also works with all your email addresses – from your Office account to your personal Gmail.  ",
                "quz-PE": "Taripay imayna sasa programacionta sichus llapa ewintukuna chaymanta correo electronico huk llamkanallapi kanku. Life qhirna kanan, intiwatanayki mana atikunchu. Gmail, Yahoo, iCloud, chaymanta wak yupaykuna yanapakuyku.",
                ro: "Descoperiți cât de simplă este planificarea atunci când toate evenimentele și e-mailul se află într-o singură aplicație. Viața este dezorganizată uneori, dar calendarul nu ar trebui să fie astfel. Oferim suport pentru Gmail, Yahoo, iCloud și alte conturi.",
                ru: "Узнайте, как просто планировать свое время, когда все ваши события и сообщения собраны в одном приложении. Творческий беспорядок уместен в самой жизни, но не в вашем календаре. Мы поддерживаем учетные записи Gmail, Yahoo, iCloud и других служб.",
                "sd-Arab-PK": "دريافت ڪريو ته شيڊول ڪرڻ ڪيڏو آسان آهي جڏهن توهان جا سڀئي واقعا ۽ اي ميلون صرف هڪ ائپ ۾ آهن. زندگي منجهيل آهي؛ توهان جو ڪئلينڊر نه هجڻ گهرج'ي. اسين Gmail، Yahoo، iCloud، ۽ ٻين اڪائونٽن جي معاونت ڪريون ٿا.",
                "si-LK": "ඔබේ සිදුවීම් සහ ඊමේල් සියල්ල එක් යෙදුමක තිබෙන විට සැලසුම් කිරීම කෙතරම් සරල දැයි සොයා ගන්න. ජීවිතය ව්‍යාකූල වුවත්; ඔබේ දින දසුන එසේ නොවිය යුතුය. අපි Gmail, Yahoo, iCloud සහ වෙනත් ගිණුම්වලට සහාය දක්වමු.",
                sk: "Zistite, aké jednoduché je plánovanie, keď máte všetky svoje udalosti a e-maily v jednej aplikácii. Život je niekedy chaotický, ale nemalo by sa to preniesť do vášho kalendára. Podporujeme Gmail, Yahoo, iCloud a ďalšie kontá.",
                sl: "Odkrijte, kako preprosto je načrtovanje, če so vsi vaši dogodki in e-poštna sporočila v eni aplikaciji. Življenje je lahko nepredvidljivo, ni pa nujno, da je tak tudi vaš koledar. Podpiramo storitve Gmail, Yahoo, iCloud in druge račune.",
                sq: "Zbulo se sa i lehtë është planifikimi kur të gjitha ngjarjet dhe emailet e tua janë në një aplikacion të vetëm. Jeta është rrëmujë, por kalendari yt nuk duhet të jetë kështu. Ne mbështesim Gmail, Yahoo, iCloud dhe llogaritë e tjera.",
                "sr-Cyrl-BA": "Откријте колико је планирање једноставно када се сви ваши догађаји и е-пошта налазе само у једној апликацији. Живот је компликован, али ваш календар не треба да буде. Подржавамо Gmail, Yahoo, iCloud и друге рачуне.",
                "sr-Cyrl": "Откријте колико је планирање једноставно када се сви ваши догађаји и е-пошта налазе само у једној апликацији. Живот је компликован; ваш календар не треба да буде. Подржавамо Gmail, Yahoo, iCloud и друге налоге.",
                sr: "Otkrijte koliko je planiranje jednostavno kada se svi vaši događaji i e-pošta nalaze samo u jednoj aplikaciji. Život je komplikovan; vaš kalendar ne treba da bude. Podržavamo Gmail, Yahoo, iCloud i druge naloge.",
                sv: "Upptäck hur enkelt det är med schemaläggning när alla dina händelser och e-postmeddelanden finns i en enda app. Livet är rörigt, men din kalender borde inte vara det. Vi stöder Gmail, Yahoo, iCloud och andra konton.",
                sw: "Gundua jinsi uratibu rahisi ni wakati matukio na barua pepe zako zote ziko katika programu moja tu. Maisha yanapaswa kukosa mpangilio, si kalenda. Tunaauni akaunti za Gmail, Yahoo, iCloud na nyinginezo.",
                ta: "உங்கள் அனைத்து நிகழ்வுகளும் மின்னஞ்சல்களும் ஒரே பயன்பாட்டில் இருக்கும்போது, திட்டமிடல் எவ்வளவு எளிதானது என்பதைக் கண்டறியுங்கள். வாழ்க்கை குழப்பமாக இருக்கலாம்; உங்கள் நாள்காட்டி அப்படி இருக்கக்கூடாது. Gmail, Yahoo, iCloud மற்றும் பிற கணக்குகள் ஆதரிக்கப்படும்.",
                te: "మీ ఈవెంట్‌లు మరియు ఇమెయిల్‌లు అన్నీ ఒక్కసారి నొక్కడంతో అందుబాటులోకి వస్తాయి కనుక ఎంత సులభంగా షెడ్యూల్ చేయవచ్చో తెలుసుకోండి. జీవితం గందరగోళంగా ఉండవచ్చు; మీ క్యాలెండర్ అలా ఉండకూడదు. మేము Gmail, Yahoo, iCloud మరియు ఇతర ఖాతాలకు మద్దతిస్తాము.",
                th: "ค้นพบว่าการจัดกำหนดการนั้นง่ายดายเพียงใดเมื่อเหตุการณ์และอีเมลทั้งหมดของคุณอยู่ในแอปเพียงแอปเดียว ชีวิตนั้นยุ่งเหยิงอยู่บ้าง แต่ปฏิทินของคุณไม่ควรเป็นแบบนั้น เรารองรับทั้งบัญชี Gmail, Yahoo, iCloud และบัญชีอื่นๆ",
                "tk-TM": "Ähli wakadyr e-poçtalaryňyz ýeke programmada jemlenende reje düzmegiň nähili ýeňildiginiň üstüni açyň. Durmuş bulam-bujar; ýöne senenamaňyz beýle bolmaly däl. Gmail, Yahoo, iCloud we beýleki hasaplary goldaýarys.",
                tr: "Etkinliklerinizin ve e-postalarınızın tümü tek bir uygulamadayken planlama yapmanın ne kadar basit olduğunu keşfedin. Hayat dağınık olabilir, takviminiz ise düzenli olmalıdır. Gmail, Yahoo, iCloud ve diğer hesapları destekliyoruz.",
                tt: "Ничек гади планлаштыру барлык вакыйгаларыгыз яки электрон хатларыгыз бары тик бер кушымтада икән ул дигәнне ачыклагыз. Тормыш буталчык булса да, календарегыз алай булырга тиеш түгел. Gmail, Yahoo, iCloud һәм башка хисап язмаларны без тәкъдим итәбез.",
                "ug-CN": "بارلىق ئىش ۋە تورخەتلىرىڭىز بىر ئەپتە بولسا، ئىش ئورۇنلاشتۇرۇشقا تولىمۇ قولاي. ھايات تولىمۇ قالايمىقان، ئەمما كالېندارىڭىز رەتلىك تۇرالايدۇ. بىز Gmail, Yahoo, iCloud ۋە باشقا ھېساباتلارنى قوللايمىز.",
                uk: "Ви побачите, наскільки просто все планувати, коли всі ваші події та електронні листи доступні в одній програмі. Життя непередбачуване, але не в календарі. Ми підтримуємо Gmail, Yahoo, iCloud та інші облікові записи.",
                ur: "دریافت کریں کہ میقات بندی کرنا کتنا آسان ہے جبکہ آپ کے تمام وقوعات اور ای میل صرف ایک ایپ میں ہیں۔ زندگی بے ترتیب ہے؛ لیکن کیلنڈر نہیں ہونا چاہیئے۔ ہم Gmail، Yahoo، iCloud اور دیگر اکاؤنٹس کی معاونت کرتے ہیں۔",
                uz: "Barcha tadbir va e-pochtalaringiz atigi bitta ilovada bo‘lganda jadval tuzish qanday osonligini ko‘ring. Hayot betartib, lekin taqvimingiz emas. Gmail, Yahoo, iCloud va boshqa hisoblar bilan ishlaydi.",
                vi: "Khám phá xem việc lập lịch trở nên đơn giản thế nào khi tất cả sự kiện và email của bạn đều nằm trong một ứng dụng. Cuộc sống thật hỗn độn nhưng lịch của bạn thì không nên như vậy. Chúng tôi hỗ trợ Gmail, Yahoo, iCloud và các tài khoản khác.",
                "zh-Hans": "将所有事件和电子邮件集中于一个应用，你才知道日程安排有多简单。生活需要偶然，你的日历却不应如此。支持 Gmail、Yahoo、iCloud 和其他帐户。",
                "zh-Hant": "了解最簡單的排程方式是將所有活動和電子郵件放置於單一 App。生活可以很複雜，但您的行事曆卻可以很簡潔。我們支援 Gmail、Yahoo、iCloud 及其他帳戶。"
            },
            TagLine3_Title_Text: {
                af: "Bly in aanraking en betyds",
                am: "ግንኙነታችንን እንቀጥል እና በጊዜም",
                ar: "البقاء على اتصال والحفاظ على المواعيد",
                "as-IN": "সংস্পৰ্শত আৰু সময়ত উপস্থিত থাকক",
                "az-Latn-AZ": "Hər zaman əlaqədə qalın",
                "be-BY": "Заставайцеся на сувязі і не спазняйцеся",
                bg: "Бъдете винаги във връзка и навреме",
                "bn-BD": "সঠিক সময়ে যোগাযোগের মধ্যে থাকুন",
                "bn-IN": "সঠিক সময়ে যোগাযোগের মধ্যে থাকুন",
                "bs-Latn-BA": "Ostanite u kontaktu i na vrijeme",
                "ca-ES-valencia": "En contacte i a temps",
                ca: "En contacte i a temps",
                cs: "Buďte v kontaktu a dochvilní",
                cy: "Arhoswch mewn cysylltiad ac ar amser",
                da: "Hold kontakten og til tiden",
                de: "In Verbindung bleiben und pünktlich sein",
                el: "Διατηρήστε επικοινωνία και παραμείνετε συνεπείς",
                "en-GB": "Stay in touch and on time",
                en: "Stay in touch and on time",
                "es-MX": "Mantente en contacto y al día",
                es: "Manténgase en contacto y al día",
                et: "Suhtlus ja ajaga sammu pidamine",
                eu: "Beti harremanetan egon eta tokietara garaiz irits zaitezen",
                fa: "در ارتباط و سر وقت باشید",
                fi: "Pidä yhteyttä ja pysy aikataulussa",
                fil: "Manatililing nakikipag-ugnayan at nasa tamang oras",
                "fr-CA": "Communiquez et respectez les échéances",
                fr: "Communiquez et respectez les échéances",
                "ga-IE": "Fan i dteagmháil agus bí in am",
                "gd-GB": "Cum an co-luadar ’s ris an uair",
                gl: "Mantente en contacto e sé puntual",
                gu: "સંપર્કમાં અને સમયસર રહો",
                "ha-Latn-NG": "Tsaya a hulɗa da kuma da wurwuri",
                he: "שמור על קשר ועמוד בזמנים",
                hi: "संपर्क में और समयबद्ध बने रहें",
                hr: "Ostanite u kontaktu i nikad ne kasnite",
                hu: "Kapcsolattartás és pontosság",
                hy: "Մնացեք կապի մեջ և միշտ ժամանակին եղեք",
                id: "Tetap berhubungan dan tepat waktu",
                is: "Vertu í sambandi og með tímasetningarnar á hreinu",
                it: "Sempre informato e puntuale",
                ja: "連絡を取り合って、時間を守ることもできます",
                ka: "დარჩით მუდმივ კავშირში და იყავით თანამედროვე",
                kk: "Байланыста болыңыз және барлығын уақтылы істеңіз",
                "km-KH": "នៅតែរក្សាទំនាក់ទំនង និងទាន់ពេលវេលា",
                kn: "ಸಂಪರ್ಕದಲ್ಲಿರಿ ಮತ್ತು ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿರಿ",
                ko: "연락 유지 및 시간 준수",
                kok: "संपर्कांत रावचें आनी वेळेंत",
                ky: "Байланышта болуп, жана кечикпеңиз",
                "lb-LU": "Bleift a Kontakt an um Lafenden",
                "lo-LA": "ຕິດ​ຕໍ່​ສື່ສານ ​ແລະ ທັນ​ເວລາ",
                lt: "Nepraraskite ryšio ir niekad nevėluokite",
                lv: "Sazinieties un nekavējiet",
                "mi-NZ": "Me noho whakapā mai, i te wā tika hoki",
                mk: "Бидете во контакт и секогаш на време",
                ml: "യഥാ സമയം സമ്പർക്കം പുലർത്തുക",
                "mn-MN": "Цагтаа холбоотой байгаарай",
                mr: "संपर्कात रहा आणि वेळेवर या",
                ms: "Kekal berhubung dan tepat pada masa",
                "mt-MT": "Żomm f'kuntatt u fil-ħin",
                "ne-NP": "सम्पर्कमा रहनुहोस् र समयमा आउनुहोस्",
                nl: "Contact houden en op tijd zijn",
                "nn-NO": "Hold kontakten og ver punktleg",
                no: "Hold kontakten, og nå tidsfrister",
                or: "ସଂସ୍ପର୍ଶରେ ଏବଂ ସମୟାନୁବର୍ତ୍ତୀ ରୁହନ୍ତୁ",
                "pa-IN": "ਸੰਪਰਕ ਵਿੱਚ ਬਣੇ ਰਹੋ ਅਤੇ ਸਮੇਂ ਸਿਰ ਪਹੁੰਚੋ",
                pl: "Bądź w kontakcie i na czas",
                prs: "در ارتباط و سروقت باشید",
                "pt-PT": "Mantenha-se em contacto e chegue a horas",
                pt: "Permaneça em contato e no prazo",
                "qps-ploc": "Stay in touch and on time",
                "qps-ploca": "Stay in touch and on time",
                "qps-plocm": "Stay in touch and on time",
                "quz-PE": "Tikiyta chaymanta phanipi kanan",
                ro: "Țineți legătura și țineți-vă de program",
                ru: "Всегда и вовремя на связи",
                "sd-Arab-PK": "رابطي ۾ رهو ۽ وقت تي",
                "si-LK": "වේලාවට සම්බන්ධ වී සිටින්න",
                sk: "Buďte dostupní a dochvíľni",
                sl: "Ostanite v stiku in ažurni",
                sq: "Qëndro i lidhur dhe i përpiktë",
                "sr-Cyrl-BA": "Останите у контакту и немојте каснити",
                "sr-Cyrl": "Останите у контакту и немојте каснити",
                sr: "Ostanite u kontaktu i nemojte kasniti",
                sv: "Håll kontakten och var i tid",
                sw: "Endelea kuwasiliana na kwa wakati",
                ta: "சரியான நேரத்தில் தொடர்பில் இருக்கவும்",
                te: "సన్నిహితంగా ఉండండి మరియు సమయానికి పనులు పూర్తి చేయండి",
                th: "ทันข่าวสาร ทันเวลา",
                "tk-TM": "Habarlaşyp duruň we wagtynda ýetişiň",
                tr: "Bağlı kalın ve zamanlamanıza uyun",
                tt: "Кирәкле вакытта хәбәрдар булып калыгыз",
                "ug-CN": "زىچ ئالاقىنى ساقلاش",
                uk: "Залишайтеся на зв’язку та не запізнюйтесь",
                ur: "ٹچ میں رہیں اور وقت پر",
                uz: "Doim aloqada bo‘ling",
                vi: "Giữ liên lạc và luôn đúng giờ",
                "zh-Hans": "保持联络，保持准时",
                "zh-Hant": "保持聯繫，不錯過任何事"
            },
            TagLine4_Description_Text: {
                af: "Om produktief te wees, moet jy die regte nutsmiddels gebruik. Met maklike integrasie, reis- en afleweringsaksiekaarte en ons Gefokusde inbus wat outomaties sorteer wat vir jou belangrik is, maak ons seker dat jy op die regte ding op die regte tyd kan fokus.",
                am: "ምርታማነት ትክክለኞቹን መሳሪያዎች የመጠቀም ጉዳይ ነው። በእንከን የለሽ ውህደቶች፣ የጉዞ እና የማድረስ የተግባር ካርድ፣ እንዲሁም ለእርስዎ አስፈላጊ የሆነውን ለይቶ የሚያወጣውን የተተኮረበት የገቢ መልዕክት ሳጥን፣ በትክክለኛው ጊዜ በትክክለኛው ነገር ላይ ማተኮርዎን እናረጋግጣለን።",
                ar: "إن استخدام الأدوات المناسبة هو أساس الإنتاجية. وبفضل عمليات التكامل السلسة وبطاقات إجراءات السفر والتسليم وعلبة وارد المركّز عليه التي تفرز الرسائل الهامة تلقائياً، نضمن لك إمكانية التركيز على الأشياء الصحيحة في الوقت المناسب.",
                "as-IN": "সঠিক সঁজুলিসমূহ ব্যৱহাৰ কৰি উৎপাদনশীল হওক৷ বাধাহীন একত্ৰিকৰণৰ সৈতে, যাত্ৰা আৰু ডেলিভাৰী একশ্বন কাৰ্ড আৰু আমাৰ দৃষ্টি নিবদ্ধ ইনবক্স যি আপোনাৰ বাবে প্ৰয়োজনীয়বোৰ স্বয়ংক্ৰিয়ভাৱে চৰ্ট কৰে, আমি নিশ্চিত কৰিছোঁ যে আপুনি সঠিক ক্ষণত সঠিক কামত গুৰুত্ব দিব পাৰিব৷",
                "az-Latn-AZ": "Məhsuldar olmaq düzgün alətlərdən istifadə etmək deməkdir. Simsiz inteqrasiya, səyahət və çatdırılma ilə bağlı fəaliyyət kartları və sizin üçün vacib olanları avtomatik sıralayan Mərkəzləşdirilmiş Daxilolanlar Qutumuzla biz düzgün məqamda düzgün element üzrə cəmləşdiyinizə əmin oluruq.",
                "be-BY": "Эфектыўнасць працы залежыць ад выкарыстання правільных інструментаў. Шчыльная інтэграцыя, карты падарожжаў і дастаўкі, а таксама функцыя «Прыярытэтныя ўваходныя», якая аўтаматычна вызначае найважнейшае, — усё гэта дазволіць вам у правільны час засяроджвацца на патрэбным.",
                bg: 'Продуктивността изцяло зависи от използването на подходящите инструменти. С безпроблемни интеграции, карти за действия, свързани с пътуване и доставка, и нашата папка "Фокусирани входящи", която автоматично сортира това, което е важно за вас, ние сме уверени, че ще можете да се съсредоточите върху правилните неща в точния момент.',
                "bn-BD": "সঠিক সরঞ্জামগুলোর ব্যবহারেই সুফল পাওয়া সম্ভব। নিরবচ্ছিন্ন সমন্বয়ন, ভ্রমণ ও ডেলিভারি সংক্রান্ত কাজের কার্ড এবং আমাদের গুরুত্বসহ চিহ্নিত ইনবক্স যা স্বয়ংক্রিয়ভাবে যে’গুলো আপনার কাছে গুরুত্বপূর্ণ সেগুলোকে বাছাই করে, এগুলির মাধ্যমে আমরা আপনাকে নিশ্চিত করতে পারি যে আপনি সঠিক সময়ে সঠিক বিষয়টির ওপর মনোযোগ দিতে পারবেন।",
                "bn-IN": "সঠিক সরঞ্জামগুলির ব্যবহারেই সুফল পাওয়া সম্ভব। নিরবচ্ছিন্ন সমন্বয়ন, ভ্রমণ ও ডেলিভারি সংক্রান্ত কাজের কার্ড এবং আমাদের গুরুত্বসহ চিহ্নিত ইনবক্স যা স্বয়ংক্রিয়ভাবে যে’গুলি আপনার কাছে গুরুত্বপূর্ণ সেগুলিকে বাছাই করে, এগুলির মাধ্যমে আমরা আপনাকে নিশ্চিত করতে পারি যে আপনি সঠিক সময়ে সঠিক বিষয়টির ওপর মনোযোগ দিতে পারবেন।",
                "bs-Latn-BA": "Produktivnost se ostvaruje korištenjem pravih alata. Uz nesmetane integracije, kartice radnji putovanja i isporuke i našu fokusiranu prispjelu poštu koja automatski sortira ono što vam je važno, mi osiguravamo da se možete fokusirati na pravu stvar u pravom trenutku.",
                "ca-ES-valencia": "Per a augmentar la productivitat, només cal utilitzar les eines adequades. Mitjançant les integracions sense interrupcions, les targetes d'acció d'entregues i de viatges i la nostra Safata d'entrada Prioritaris, que ordena automàticament els elements importants, ens assegurem que vos podreu centrar en la tasca correcta en el moment oportú.",
                ca: "Per augmentar la productivitat, només cal utilitzar les eines adequades. Mitjançant les integracions sense interrupcions, les targetes d'acció de lliuraments i de viatges i la nostra Safata d'entrada prioritària, que ordena automàticament els elements importants, ens assegurem que us podreu centrar en la tasca adequada en el moment oportú.",
                cs: "Produktivita závisí především na používání správných nástrojů. Díky dokonalé integraci, kartám akcí pro cestování a doručování a naší prioritní doručené poště, která vám automaticky vytřídí důležité zprávy, se můžete soustředit na potřebné věci tehdy, kdy to vyžadují.",
                cy: "Mae bod yn gynhyrchiol yn ddibynnol ar ddefnyddio’r offer cywir. Gydag integreiddio di-dor, cardiau gweithredu teithio a danfon, a blwch post Blaenoriaeth sy’n trefnu’r hyn sy’n bwysig i chi yn awtomatig, byddwn ni’n sicrhau eich bod chi’n gallu canolbwyntio ar y peth cywir ar yr amser cywir.",
                da: "At være produktiv handler om at bruge de rigtige værktøjer. Vi sørger for, at du kan fokusere på de rigtige ting på det rigtige tidspunkt med problemfri integration, rejse- og leveringshandlingskort samt funktionen Fokuseret indbakke, der automatisk samler det, der er vigtigt for dig.",
                de: "Produktiv sein heißt, die richtigen Tools zu verwenden. Mit nahtloser Integration, Reise- und Versandaktionskarten und unserem Posteingang mit Relevanz, der automatisch sortiert, was für Sie wichtig ist, stellen wir sicher, dass Sie sich auf die richtige Sache zum richtigen Zeitpunkt konzentrieren können.",
                el: "Η παραγωγικότητα βασίζεται σε μεγάλο βαθμό στη χρήση των σωστών εργαλείων. Με την απρόσκοπτη ενοποίηση, τις κάρτες ενεργειών μετακίνησης και παράδοσης, καθώς και με τα Εστιασμένα Εισερχόμενα, τα οποία ταξινομούν αυτόματα τα μηνύματα που είναι σημαντικά για εσάς, εξασφαλίζουμε ότι μπορείτε να εστιάσετε στην κατάλληλα εργασία, την κατάλληλη στιγμή.",
                "en-GB": "Being productive is all about using the right tools. With seamless integrations, travel and delivery action cards, and our Focused Inbox that automatically sorts what’s important for you, we make sure that you can focus on the right thing at the right moment.",
                en: "Being productive is all about using the right tools. With seamless integrations, travel and delivery action cards, and our Focused Inbox that automatically sorts what’s important for you, we make sure you can focus on the right thing at the right moment.",
                "es-MX": "Ser productivo consiste en usar las herramientas adecuadas. Con una integración perfecta, con tarjetas de acción de transporte y entrega y con una bandeja de entrada Prioritarios que ordena automáticamente los correos según su importancia, nos aseguramos de que puedas centrarte en lo que es importante en cada momento.",
                es: "Ser productivo consiste en usar las herramientas adecuadas. Con una integración perfecta, con tarjetas de acción de transporte y entrega y con una bandeja de entrada Prioritarios que ordena automáticamente los correos según su importancia, nos aseguramos de que pueda centrarse en lo que es importante en cada momento.",
                et: "Viljaka töö jaoks on vaja õigeid töövahendeid. Anname teie käsutusse sujuvalt integreeritud lisafunktsioonid, reisimise ja pakkide kohaletoimetamisega seotud toimingukaardid ning fookustatud sisendkausta, mis sordib automaatselt välja teie jaoks olulised sõnumid. Nii aitame teil keskenduda sellele, mis on parajasti oluline.",
                eu: "Eraginkorra izateko, ezinbestekoa da tresna egokiak erabiltzea. Uneoro arreta dagokion gaian jarriko duzula ziurtatu nahi dugu. Horretarako, hainbat eginbide eskaintzen dizkizugu: aplikazioen arteko erabateko integrazioa, bidaiei eta paketeen bidalketei buruzko txartelak, eta mezu garrantzitsuak biltzen dituen Lehentasunezkoak sarrerako ontzia.",
                fa: "بهره‌ور بودن کلاً به معنای استفاده از ابزارهای درست است. با یکپارچگی‌های بی عیب و نقص، کارت‌های اقدام سفر و تحویل و صندوق دریافت متمرکز ما که موارد مهم را به‌طور خودکار برای شما مرتب می‌کنند، مطمئن هستیم که می‌توانید روی موارد درست در لحظه درست تمرکز کنید.",
                fi: "Tuottavuus syntyy oikeista työkaluista. Saumattomien integraatioiden, matkustukseen ja toimituksiin liittyvien toimintokorttien sekä tärkeimmät asiat automaattisesti suodattavan Lajitellun Saapuneet-kansion avulla voit keskittyä oikeaan asiaan oikeaan aikaan.",
                fil: "Ang pagiging produktibo ay nauugnay lang sa paggamit ng mga wastong kagamitan. Sa pamamagitan ng mahuhusay na integration, action card para sa paglalakbay at paghahatid at aming Focused Inbox na awtomatikong nagsasaayos kung ano ang mahalaga para sa iyo, tinitiyak naming makakatuon ka sa wastong bagay sa wastong sandali.",
                "fr-CA": "Un niveau de productivité élevé dépend de l’utilisation des outils appropriés. Grâce aux intégrations transparentes, les cartes d’action Déplacements et Livraisons de la boîte de réception Prioritaire trient automatiquement les éléments importants pour vous. Vous pouvez ainsi vous concentrer sur les éléments utiles au moment opportun.",
                fr: "Un niveau de productivité élevé dépend de l’utilisation des outils appropriés. Grâce aux intégrations transparentes, les cartes d’action Déplacements et Livraisons de la boîte de réception Prioritaire trient automatiquement les éléments importants pour vous. Vous pouvez ainsi vous concentrer sur les éléments utiles au moment opportun.",
                "ga-IE": "Bíonn an táirgiúlacht bunaithe ar na huirlisí cearta a úsáid. Le comhtháthú gan stró, cártaí gnímh taistil agus seachadta agus an bosca isteach fócasaithe ina ndéantar na rudaí atá tábhachtach duitse a shórtáil go huathoibríoch, cinntímid gur féidir leat díriú ar an rud ceart, ag an am ceart.",
                "gd-GB": "’S fheairrde saor na h-innealan ceart. Leis na gleusan a chaidh fhilleadh a-steach, cairtean siubhail is libhrigidh agus am bogsa a-steach fòcasaichte a mhothaicheas dha na tha cudromach dhut-sa, nì sinn cinnteach gun urrainn dhut cuideam a thoirt air an rud cheart aig an àm cheart.",
                gl: "A produtividade é cuestión de empregar as ferramentas apropiadas. Cunha integración perfecta, con cartóns de acción de transporte e entrega, e cunha caixa de entrada de mensaxes preordenadas automaticamente segundo a súa relevancia, asegurámonos de que te poidas centrar no que é importante en cada momento.",
                gu: "ઉત્પાદક રહેવું એ બધું યોગ્ય ઉપકરણોના ઉપયોગ પર નિર્ભર રહે છે. અવિરત એકીકરણ, યાત્રા અને વિતરણ ક્રિયા કાર્ડ્સ અને અમારા ફોકસ કરાયેલ ઇનબૉક્સ કે જે તમારા માટે જે મહત્વપૂર્ણ હોય તેના આધારે સ્વચલિત રૂપે સૉર્ટ કરે છે તેની સાથે, અમે સુનિશ્ચિત કરીએ કરીએ છીએ કે તમે યોગ્ય સમયે યોગ્ય વસ્તુ પર ફોકસ કરી શકો.",
                "ha-Latn-NG": "Kasancewa mai ƙwazon aiki ya danganta da yin amfani da kayyayakin aiki na daidai. Da haɗuwa mara iyaka, katunan aiki na tafiya da isarwa da kuma Muhimmanci na Cikin Akwati da yake kasa maka abun da yake da muhimmanci ta otomatik, muna tabbata kana ƙura ido a kan abu na daidai ta lokacin da ya dace.",
                he: "פרודוקטיביות מסתמכת על שימוש בכלים המתאימים. באמצעות שילובים חלקים, כרטיסי פעולה של נסיעות ומסירה ותיבת הדואר הנכנס הממוקדת שממיינת באופן אוטומטי את הפריטים החשובים, אנחנו מוודאים שתוכל להתמקד בתוכן הנכון בזמן הנכון.",
                hi: "कार्यशाल होने का अर्थ सही उपकरणों का उपयोग करना है. सीमलेस एकीकरण, यात्रा और डिलीवरी क्रिया कार्ड्स और हमारे केंद्रित इनबॉक्स के साथ, जो स्वचालित रूप से आपके लिए उपयोगी चीज़ें सॉर्ट करते हैं, हम यह सुनिश्चित करते हैं कि आप सही समय में सही चीज़ पर फ़ोकस कर सकें.",
                hr: "Za produktivnost je najvažnije koristiti odgovarajuće alate. Uz besprijekornu integraciju, akcijske kartice za putovanje i dostavu te fokusiranu ulaznu poštu koja automatski sortira sve što vam je važno možete se usredotočiti na pravu stvar u pravo vrijeme.",
                hu: "A megfelelő eszközökkel mindig hatékony a munka. A gördülékeny integráció, az utazási és szállítási műveletek kártyái, valamint a fontos dolgokat automatikusan rendszerező Szűrt levelek nézet révén mindig arra koncentrálhat, amire éppen kell.",
                hy: "Արդյունավետ աշխատանքի համար հարկավոր է ընդամենը օգտագործել ճիշտ գործիքներ: Հեշտությամբ կատարվող ամբողջացումների, ճանապարհորդության և առաքման քարտերի և մեր Նախապես տեսակավորված մուտքի արկղի միջոցով, որն ինքնաշխատորեն տեսակավորում է ձեզ համար կարևոր բաները, մենք համոզվում ենք, որ դուք կարող եք կենտրոնանալ ճիշտ հարցի վրա ճիշտ պահին:",
                id: "Produktif artinya menggunakan alat yang tepat. Dengan integrasi yang lancar, kartu tindakan perjalanan dan pengiriman serta Kotak Masuk Prioritas yang otomatis mengurutkan hal yang penting bagi Anda, kami memastikan Anda dapat fokus pada hal yang benar di saat yang tepat.",
                is: "Til þess að koma hlutunum í verk þarftu réttu verkfærin. Með samþættingu við aðra þjónustu, spjöldum fyrir ferðalög og pakkasendingar og forgangsinnhólfi sem flokkar mikilvægasta póstinn frá fyrir þig sjáum við til þess að þú getir einbeitt þér að réttum hlut á réttum tíma.",
                it: "La produttività dipende essenzialmente dall'uso degli strumenti adatti. Con integrazioni complete, schede azioni per viaggi e consegne e la funzionalità Posta in arrivo evidenziata che ordina automaticamente i messaggi importanti per te, puoi concentrarti sulla cosa giusta al momento giusto.",
                ja: "生産的に行動するために最も大切なのは、適切なツールを使用することです。シームレスな統合、旅行と配送状況のカード、重要なものを自動的に選別する優先受信トレイによって、適切な機会に適切なことに集中できるようになります。",
                ka: "პროდუქტიულობა ხელსაწყოების სწორად შერჩევაზეა დამოკიდებული. ინტეგრაციით, მგზავრობისა და მიწოდების მოქმედების ბარათებით და ჩვენი ფოკუსირებული შემოსულებით, რომელიც ავტომატურად ახარისხებს თქვენთვის მნიშვნელოვან წერილებს, ჩვენი დახმარებით თქვენ ყურადღებას ამახვილებთ საჭირო საკითხზე საჭირო დროს.",
                kk: 'Өнімділік дұрыс құралдардың пайдаланылуына тікелей байланысты. Үйлесімді біріктіру, саяхаттау және жеткізу әрекетінің карталары және маңызды хабарларды автоматты түрде іріктейтін "Сұрыпталған" кіріс жәшігінің көмегімен бар күш-жігеріңізді қажетті уақытта қажетті мәселелерге жұмылдыра аласыз.',
                "km-KH": "ការមានផលិតភាពគឹសុទ្ធតែទាក់ទងនឹងការប្រើឧបករណ៍ត្រឹមត្រូវទាំងអស់។ ជាមួយការរួមបញ្ចូលដ៏រលូន ការធ្វើដំណើរ និងកាតសកម្មភាពបញ្ជូន​ និង​ប្រអប់ទទួល​ប្រមូលផ្ដុំ​របស់យើងដែល​តម្រៀប​តាមលំដាប់ដោយស្វ័យប្រវត្តិនូវអ្វីដែលសំខាន់សម្រាប់អ្នក’s យើងធ្វើឲ្យប្រាកដថា អ្នកអាចផ្ដោតទៅលើ​រឿងត្រឹមត្រូវក្នុងខណៈពេលដែល​ត្រឹមត្រូវ។",
                kn: "ಉತ್ಪಾದಕೀಯವಾಗಿರುವುದೆಂದರೆ ಸೂಕ್ತ ಪರಿಕರಗಳನ್ನು ಬಳಸುವುದಾಗಿದೆ. ಅನಿಯಮಿತ ಏಕೀಕರಣಗಳು, ಪ್ರಯಾಣ ಮತ್ತು ವಿತರಣೆ ಕ್ರಿಯೆಯ ಕಾರ್ಡ್‌ಗಳು ಮತ್ತು ನಿಮಗೆ ಯಾವುದು ಪ್ರಮುಖವಾಗಿದೆಯೋ ಅವುಗಳನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ವಿಂಗಡಿಸುವ ಕೇಂದ್ರೀಕೃತ ಇನ್‌ಬಾಕ್ಸ್ ಮೂಲಕ, ಸೂಕ್ತ ಕ್ಷಣದಲ್ಲಿ ಸೂಕ್ತವಾದುದರ ಮೇಲೆ ನೀವು ಗಮನ ಕೇಂದ್ರೀಕರಿಸಬಹುದು ಎಂಬುದನ್ನು ನಾವು ಖಾತ್ರಿಪಡಿಸಿಕೊಳ್ಳುತ್ತೇವೆ.",
                ko: "생산성을 갖춘다는 것은 적절한 도구를 사용한다는 의미입니다. 매끄러운 통합, 여행 및 배달 작업 카드, 중요 사항을 자동으로 선별하는 중요 받은 편지함을 통해 적절한 순간에 적절한 사항에 집중할 수 있도록 도와드립니다.",
                kok: "उत्पादक जावंक योग्य साधनां वापरपाची गरज आसता. सुरळीत अंतर्भावा सयत, भोंवचें आनी कृती कार्डां धाडचीं आनी आमच्या केंद्रीत इनबॉक्सांत जातूंत स्वयंचलीत रितीन तुमच्या खातीर किदें म्हत्वाचें ’s आसा ताचें स्वयंचलीत वर्गीकरण करचें, तुमी योग्य खिणाक योग्य गजालीचेर केंद्रीत करूंक तुमी शकतात हाची खात्री आमी दितात.",
                ky: "Майнаптуу иштөө туура куралдарды пайдаланууда жатат. Кынтыксыз биргелешүү, саякат жана жеткирүү иш-аракетинин карточкаларына кошуп, биздин сизге маанилүү нерселерди автоматтык түрдө иреттөөчү Фокустагы кирүү ящиги менен көңүлүз керектүү учурда керектүү нерсеге бурулушун камсыздайбыз.",
                "lb-LU": "Produktiv sinn ass einfach mat deene richtegen Tools. Mat optimalen Integratiounen, Rees- a Liwwerungsaktiounskaarten an eiser Prioritärer Inbox, déi Är wichteg Saachen automatesch zortéiert, erméigleche mir Iech et, Iech am richtege Moment op dat Wichtegst ze konzentréieren.",
                "lo-LA": "ການເຮັດວຽກໃຫ້ມີປະສິດທິຜົນແມ່ນລ້ວນແລ້ວແຕ່ກ່ຽວກັບການໃຊ້ເຄື່ອງມືທີ່ເໝາະສົມ. ດ້ວຍການເຊື່ອມໂຍງທີ່ຕໍ່ເນື່ອງ, ບັດຄຳສັ່ງການເດີນທາງ ແລະ ການຈັດສົ່ງ ພ້ອມອິນບັອກຮວມຂອງພວກເຮົາທີ່ຈັດຮຽງສິ່ງສຳຄັນໃຫ້ທ່ານໂດຍອັດຕະໂນມັດ, ພວກເຮົາຈະກວດສອບໃຫ້ແນ່ໃຈວ່າ ທ່ານສາມາດສຸມໃສ່ສິ່ງທີ່ເໝາະສົມໃນເວລາທີ່ເໝາະສົມໄດ້.",
                lt: "Našumą lemia tinkami įrankiai. Sklandi integracija, kelionių ir pristatymo veiksmų kortelės bei svarbiausių gautųjų laiškų dėžutė automatiškai atrenka, kas jums svarbu, todėl mes pasirūpiname, kad tinkamu laiku būtumėte susitelkę į tinkamus dalykus.",
                lv: "Ražīgam darbam vispirms vajadzīgi pareizie rīki. Piedāvājot nevainojamu integrāciju, ceļošanas un piegādes darbību kartes un svarīgo ziņojumu iesūtni, kas automātiski izšķiro jums svarīgos sūtījumus, mēs esam parūpējušies, lai jūs jebkurā brīdī varētu koncentrēties uz svarīgāko.",
                "mi-NZ": "Ko te mahi whaihua ko te whakamahi i ngā utauta tika. Mā ngā pāwhaitua ngāwari, ngā kāri mō te haerenga me te ngohe tukutanga, me te pouakauru Arotahi hei kōmaka aunoa māu i ō mea hira, ka āwhina mātou kia arotahi koe ki te mea tika i te wā tika.",
                mk: "Продуктивноста зависи од користењето на вистинските алатки. Со непрекинатата интеграција, картичките со дејства за патување и испорака и со нашето Фокусирано дојдовно сандаче коешто автоматски ги сортира важните работи, гарантираме дека може да се фокусирате на вистинските работи во вистинскиот момент.",
                ml: "ഉൽപ്പാദനക്ഷമതയുള്ളവരായി തുടരുകയെന്നത് ശരിയായ ഉപകരണങ്ങളുടെ ഉപയോഗത്തെ ആശ്രയിച്ചിരിക്കുന്നു. പരിധിയില്ലാത്ത സംയോജിപ്പിക്കലുകളും യാത്ര, ഡെലിവറി പ്രവർത്തന കാർഡുകളും നിങ്ങൾക്ക് പ്രധാനപ്പെട്ടവ സ്വപ്രേരിതമായി അടുക്കുന്ന ഞങ്ങളുടെ കേന്ദ്രീകൃത ഇൻബോക്‌സും ഉപയോഗിച്ച്, നിങ്ങൾക്ക് ശരിയായ സമയത്ത് ശരിയായ കാര്യങ്ങളിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കാൻ കഴിയുന്നുണ്ടെന്ന് ഞങ്ങൾ ഉറപ്പുവരുത്തുന്നു.",
                "mn-MN": "Бүтээмжтэй байна гэдэг зөв хэрэгслээ ашиглахын нэр юм. Зэрэгцэн нэгтгэгддэгээс гадна, аяллын ба хүргэлтийн үйлдлийн картуудтай, автоматаар танд чухал зүйлсийг эрэмбэлдэг манай Төвлөрсөн ирсэн захидлууд нь танд зөв цагтаа зөв зүйл дээрээ төвлөрөхөд туслана.",
                mr: "उत्पादक बनणे म्हणजे योग्य साधने वापरणे. अखंड एकत्रिकरण, प्रवास आणि वितरण क्रिया कार्ड्स आणि आमच्या केंद्रित इनबॉक्ससह जो आपल्यासाठी महत्वाच्या गोष्टींचे स्वयंचलितपणे वर्गीकरण करतो, आम्ही आपल्या योग्य वेळी योग्य गोष्ट करण्यावर लक्ष्य केंद्रित करतो.",
                ms: "Menjadi produktif adalah tentang penggunaan alat yang betul. Dengan penyepaduan yang lancar, kad tindakan perjalanan dan penghantaran serta Peti Masuk Tumpuan kami yang mengisih secara automatik perkara yang penting untuk anda, kami memastikan anda boleh fokus pada perkara yang betul pada masa yang betul.",
                "mt-MT": "Biex tkun produttiv trid tuża l-għodod it-tajbin. B'integrazzjonijiet mingħajr problemi, kards ta' azzjoni ta' tmexxija u konsenja u l-posta rċivuta Ffokata tagħna li awtomatikament tissortja dak li huma importanti għalik, niżguraw li tista' tiffoka fuq il-ħaġa korretta fil-mument it-tajjeb.",
                "ne-NP": "उत्पादनशील बन्नु भनेको सही उपकरणहरू प्रयोग गर्नुसँग सम्बन्धित छ। निर्वाध अनुकूलन, यात्रा र डेलिभरी कार्य कार्ड र तपाइँका लागि महत्त्वपूर्ण कुराहरूलाई स्वचालित रूपमा श्रेणीबद्ध गर्ने हाम्रो केन्द्रित प्राप्तिमञ्जूषाको सहायताले तपाइँ सही समयमा सही कुरामा केन्द्रित हुन सक्नुहुन्छ भन्ने कुरा हामी सुनिश्चित गर्दछौं।",
                nl: "Productiviteit heeft alles te maken met het gebruiken van de juiste hulpmiddelen. Naadloze integratie, reis- en leveringsactiekaarten, en het Postvak IN met prioriteit waarin automatisch de berichten worden gesorteerd die belangrijk zijn voor u, zorgen ervoor dat u zich op het juiste moment op het juiste kunt richten.",
                "nn-NO": "Produktivitet handlar om å bruke dei rette verktøya. Vi hjelper deg å fokusere på rett ting til rett tid med enkle handlingskort for integrering, transport og levering, og innboksen med fokus sorterer automatisk det som er viktig for deg.",
                no: "Produktivitet handler om å bruke de riktige verktøyene. Med sømløse integreringer, handlingskort for reise og levering og innboksen med fokus som automatisk sorterer det som er viktig for deg, sørger vi for at du kan fokusere på riktige ting på riktige tidspunkt.",
                or: "ଉତ୍ପାଦନକ୍ଷମ ହେବା ପାଇଁ କେବଳ ସଠିକ ଉପକରଣଗୁଡିକ ବ୍ୟବହାର କରିବା ଆବଶ୍ୟକ. ବାଧାହୀନ ଏକୀକରଣ, ଭ୍ରମଣ ଏବଂ ବିତରଣ କ୍ରିୟା କାର୍ଡଗୁଡିକ ଏବଂ ଆମର କେନ୍ଦ୍ରିକ ଇନବକ୍ସ ସହିତ ଯାହା ସ୍ୱତଃସ୍ପୃତଭାବରେ ଆପଣଙ୍କ ପାଇଁ କଣ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ସଜାଇ ରଖିଥାଏ, ଆମେ ନିଶ୍ଚିତ କରିଥାଉ ଯେ ଆପଣ ସଠିକ ମୁହୁର୍ତ୍ତରେ ସଠିକ କାର୍ଯ୍ୟ ଉପରେ ଧ୍ୟାନ କେନ୍ଦ୍ରିତ କରିପାରିବେ.",
                "pa-IN": "ਉਤਪਾਦਕ ਹੋਣਾ ਸਹੀ ਸਾਧਨਾਂ ਦੀ ਵਰਤੋਂ ਕਰਨਾ ਹੀ ਤਾਂ ਹੈ। ਬੇਜੋੜ ਏਕੀਕਰਨਾਂ, ਯਾਤਰਾ ਅਤੇ ਡਿਲੀਵਰੀ ਕਿਰਿਆ ਕਾਰਡਾਂ ਅਤੇ ਸਾਡੇ ਫੋਕਸਡ ਇਨਬਾਕਸ ਦੇ ਨਾਲ ਜੋ ਤੁਹਾਡੇ ਲਈ ਮਹੱਤਵਪੂਰਣ ਚੀਜ਼ ਨੂੰ ਆਪਣੇ-ਆਪ ਸੌਰਟ ਕਰਦਾ ਹੈ, ਅਸੀਂ ਯਕੀਨੀ ਬਣਾਉਂਦੇ ਹਾਂ ਕਿ ਤੁਸੀਂ ਸਹੀ ਸਮੇਂ 'ਤੇ ਸਹੀ ਚੀਜ਼ ਉੱਤੇ ਧਿਆਨ ਕੇਂਦਰ ਕਰ ਸਕਦੇ ਹੋ।",
                pl: "Podstawą wydajności jest używanie właściwych narzędzi. Bezproblemowe funkcje integracji, karty akcji dotyczące podróży i dostaw oraz nasza priorytetowa skrzynka odbiorcza automatycznie segregująca ważne informacje — to wszystko pozwala skupić się na właściwych sprawach we właściwym czasie.",
                prs: "مؤثربودن فقط استفاده از اسباب درست است. با ادغام های یکپارچه، کارت های سفر و عمل تحویل و صندوق دریافت متمرکز ما که بصورت خودکار موضوعات مهم تانرا ترتیب میکند، ما تضمین میکنیم که شما می توانید بالای موضوعات درست در زمان درست تمرکز کنید.",
                "pt-PT": "Ser produtivo requer as ferramentas certas. Com as integrações simples, os cartões de ação para entregas e viagens e a nossa Caixa de Entrada Destaques, que ordena automaticamente o que é importante para si, garantimos que se concentra no que realmente importa no momento certo.",
                pt: "Use as ferramentas corretas e seja produtivo. Com integrações perfeitas, cartões de ação de entrega e viagens, e nossa caixa de entrada Destaques, que classifica automaticamente o que é importante para você, garantimos que você se concentre na coisa certa no momento certo.",
                "qps-ploc": "Being productive is all about using the right tools. With seamless integrations, travel and delivery action cards and our Focused inbox that automatically sorts what’s important for you, we make sure you can focus on the right thing at the right moment.",
                "qps-ploca": "Being productive is all about using the right tools. With seamless integrations, travel and delivery action cards and our Focused inbox that automatically sorts what’s important for you, we make sure you can focus on the right thing at the right moment.",
                "qps-plocm": "Being productive is all about using the right tools. With seamless integrations, travel and delivery action cards and our Focused inbox that automatically sorts what’s important for you, we make sure you can focus on the right thing at the right moment.",
                "quz-PE": "Llamkaspa kachkan llapa chiqa llamkanakunata ruwachkan. Huñusqa qutukunawan, ch'usa chaymanta chaskisqa ruwana tarhitakunawan chaymanta Qhawasqa Yaykumuq chaskiqniyku kikillan imataq chaniyuq qampaq ñiqinchan, chiqaqchayku sichus chiqa imapi chiqa chininipi qhawayta atikunki.",
                ro: "Productivitatea apare atunci când folosiți instrumentele potrivite. Cu integrările fără sincope, fișele de acțiune pentru călătorie și livrare și Mesajele prioritare care sortează automat ce este important pentru dvs., ne asigurăm că vă veți putea concentra pe lucrul potrivit, la momentul potrivit.",
                ru: "Производительность напрямую зависит от правильного выбора инструментов. Эффективная интеграция, карточки действий для путешествий и доставки, автоматическая сортировка важной для вас почты — все это помогает вам сосредоточиться на главном в каждый момент времени.",
                "sd-Arab-PK": "پيداواري ٿيڻ سڀ صحيح اوزارن استعمال ڪرڻ جي باري ۾ آهي. بنا رڪاوٽ واري جوڙجڪ سان، سفر ۽ ڊيليوري عمل ڪارڊ ۽ اسان جي فوڪسڊ انباڪس جيڪو خودڪار طور ترتيب ڏئي ٿو ته توهان لاءِ اهم ڇ’ا آهي، اسان پڪ ڪريو ٿا ته توهان صحيح وقت تي صحيح شئي تي ڏيان ڏيو.",
                "si-LK": "ඵලදායී වීමෙන් හරි මෙවලම් භාවිතය අදහස් වේ. සීමා මායිම් රහිත අනුකලනයන්, සංචාරක සහ බෙදා හැරීමේ කටයුතු කාඩ්පත් සහ ඔබට වැදගත් දේ ස්වයංක්‍රීයව බෙදා වෙන් කරන අපගේ අවධානය යොමු කළ එන ලිපි සමඟ, අපි ඔබට නිවැරදි මොහොතේ හරි දේ පිළිබඳ අවධානය යොමු කළ හැකි බවට වග බලා ගන්නෙමු.",
                sk: "Produktivita závisí predovšetkým od používania tých správnych nástrojov. Bezproblémová integrácia, karty akcií použiteľné na cestách alebo pri doručovaní a naša Prioritná doručená pošta, ktorá automaticky vytriedi dôležitú poštu, vám umožnia vykonávať tie správne veci v správnom čase.",
                sl: "Ključ do odlične produktivnosti so prava orodja. Brezšivna integracija, kartice dejanja potovanja in dostave ter mapa »Prejeto« v fokusu, ki namesto vas samodejno razvršča pomembno vsebino – poskrbeli smo, da se lahko ob pravem trenutku posvetite pravim stvarem.",
                sq: "Për të qenë produktiv, duhet vetëm të përdorësh veglat e duhura. Me integrimet pa ndërprerje, kartat e veprimeve të udhëtimit dhe dorëzimit, si dhe me kutinë tonë mbërritëse të fokusuar që rendit automatikisht se çfarë janë të rëndësishme për ty, ne bëjmë të mundur që të fokusohesh në gjënë e duhur në momentin e duhur.",
                "sr-Cyrl-BA": "Продуктивност се остварује кориштењем правих алата. Уз несметане интеграције, картице радњи путовања и испоруке и нашу фокусирану приспјелу пошту која аутоматски сортира оно што вам је важно, обезбјеђујемо да можете да се фокусирате на праву ствар у правом тренутку.",
                "sr-Cyrl": "Продуктивност се остварује коришћењем правих алатки. Уз несметане интеграције, картице радњи путовања и испоруке и наше фокусирано пријемно сандуче које аутоматски сортира оно што вам је важно, ми обезбеђујемо да можете да се фокусирате на праву ствар у правом тренутку.",
                sr: "Produktivnost se ostvaruje korišćenjem pravih alatki. Uz nesmetane integracije, kartice radnji putovanja i isporuke i naše fokusirano prijemno sanduče koje automatski sortira ono što vam je važno, mi obezbeđujemo da možete da se fokusirate na pravu stvar u pravom trenutku.",
                sv: "Att vara produktiv handlar om att använda rätt verktyg. Med smidig integrering, rese- och leveransåtgärdskort samt den prioriterade inkorgen som automatiskt sorterar det som är viktigt för dig kan du fokusera på rätt sak i rätt ögonblick.",
                sw: "Kuwa mwenye tija kunatokana na kutumia zana sahihi. Kwa miunganisho rahisi, kadi za vitendo za kusafiri na kuwasilisha na Kisanduku pokezi chetu Lengwa kinachopanga kiotomatiki kilicho muhimu kwako, tunahakikisha kuwa unaweza kuangazia kitu kinachofaa kwa wakati unaofaa.",
                ta: "உற்பத்தித் திறனுடன் இருப்பதென்பது சரியான கருவிகளைப் பயன்படுத்துவதைப் பற்றியதாகும். தடையற்ற ஒருங்கிணைப்புகள், பயணம் மற்றும் வழங்கல் செயல் அட்டைகள் மற்றும் உங்களுக்கு எது முக்கியம் என்று தன்னியக்கமாகப் பிரிக்கும் எங்களது ஃபோகஸ்டு இன்பாக்ஸ் இவற்றுடன், சரியான தருணத்தில் சரியான விஷயத்தில் நீங்கள் கவனம் செலுத்துவதை நாங்கள் உறுதிசெய்கிறோம்.",
                te: "సరైన సాధనాలను ఉపయోగిస్తే ఉత్తమ ఉత్పాదకతను పొందవచ్చు. అంతరాయం లేని సమగ్రతలు, ప్రయాణం మరియు బట్వాడా చర్య కార్డ్‌లు మరియు మా కేంద్రీకృత ఇన్‌బాక్స్ ద్వారా మీకు ముఖ్యమైనవి స్వయంచాలకంగా సమకాలీకరించబడతాయి, కనుక మీరు సరైన సమయంలో సరైన వాటిపై దృష్టి పెడుతున్నట్లు మేము నిర్ధారించుకుంటాము.",
                th: "การมีประสิทธิภาพในการทำงานคือการเลือกใช้เครื่องมือที่ถูกต้อง ด้วยการรวมอย่างราบรื่น บัตรดำเนินการเดินทางและจัดส่ง และกล่องจดหมายเข้าที่โฟกัสของเราที่เรียงลำดับความสำคัญให้คุณโดยอัตโนมัติ เราทำให้แน่ใจว่าคุณสามารถพุ่งเป้าไปที่สิ่งต้องทำในเวลาที่ควรทำได้",
                "tk-TM": "Önjeýli işlemegi syry dogry gurallary ulanmakdan ybaratdyr. Sepsiz integrasiýalar, syýahat we eltiş hereket kartlary we size möhüm zatlary awtomatik sortlaýan Fokusly gelen gutymyz arkaly, siziň ünsüňizi iň dogry pursatda iň dogry zada jemläp bilýäris.",
                tr: "Üretken olmak için doğru araçları kullanmak gerekir. Kusursuz tümleştirmeler, seyahatler ve teslimatlarla ilgili anımsatıcı kartları, sizin için önemli olan e-postaları otomatik olarak sıralayan Odaklanmış Gelen Kutusu sayesinde, doğru zamanda doğru konuya odaklanmanızı sağlıyoruz.",
                tt: 'Нәтиҗәлерәк эшләү - дөрес коралларны куллану. Салмак интеграция, сәяхәт һәм китерү гамәл карталары һәм сезнең өчен мөһим булганын автомат рәвешендә тәртипләгән Тупланылган "Килгән" папкасы белән сез кирәкле вакытта кирәкле әйберләргә игътибарны юнәлтә алачаксыз.',
                "ug-CN": "توغرا قوراللار ئارقىلىق ئىش ئۈنۈمىنى ئاشۇرغىلى بولىدۇ. نۇقتىلىق خەت ساندۇقىدا ساياھەت پىلانى ۋە مال يەتكۈزۈش ئۇچۇرى قاتارلىقلارنى يىغىش ئىقتىدارى بىرلەشتۈرۈلگەن بولۇپ، مۇھىم ئۇچۇرلارغا دىققەتنى مەركەزلەشتۈرەلەيسىز.",
                uk: 'Правильні інструменти – запорука продуктивної роботи. Безперервна інтеграція, картки дій для подорожей і доставок, а також функція "Важливі вхідні", яка автоматично сортує важливі для вас повідомлення, допоможуть у потрібний час зосередитися на потрібних речах.',
                ur: "بار آور ہونا تمام صحیح آلات استعمال کرنے کے بارے میں ہے۔ رکاوٹ کے بغیر انضمام کے ساتھ، ٹریول اور سپردگی عمل کے کارڈز اور ہمارا مربوط ان باکس جو خودکار طور پر ترتیب دیتا ہے کہ آپ کے لئے کیا’ اہم ہے، ہم یقینی بناتے ہیں کہ آپ صحیح چیز پر صحیح وقت پر توجہ مرکوز کر سکتے ہیں۔",
                uz: "Kerakli vositalarni ishlatish orqali samaradorlikni oshiring. Muammosiz integratsiya, sayohat va yetkazib berish amallari kartalari hamda bizning saralangan xatlar qutisi siz uchun muhim narsalarni avtomatik saralaydi, doim zarur vaqtda kerakli narsalarga e’tibor qaratishingiz uchun harakat qilamiz.",
                vi: "Làm việc hiệu quả hay không phụ thuộc hoàn toàn vào việc sử dụng công cụ phù hợp. Với các tích hợp liền mạch, thẻ hành động chuyển phát và di chuyển cùng Hộp thư đến Ưu tiên có tác dụng sắp xếp tự động những nội dung quan trọng với bạn, chúng tôi đảm bảo bạn có thể tập trung vào đúng việc, đúng lúc.",
                "zh-Hans": "高效工作的重点在于使用适当的工具。通过无缝集成、旅行和包裹投递操作卡以及可自动排列重要邮件的重点收件箱，确保你能够在适当的时间着重处理适当的工作。",
                "zh-Hant": "使用正確的工具是獲得高生產力的主要因素。有了完美整合的工具、差旅和遞送動作卡片及會自動排序重要項目的 [焦點]5D; 收件匣之後，我們可以確保您將在正確的時間專注正確的事物。"
            },
            TagLine4_Title_Text: {
                af: "Doen wat jy goed doen, ons sal doen wat ons kan doen. ",
                am: "ምትሃትዎን ይስሩ፣ እኛ’ም የራሳችንን እንሰራለን። ",
                ar: "اهتم بالأمور الهامة ودعنا نتولى باقي المهام. ",
                "as-IN": "আপোনাৰ যাদুৰে কাম কৰক, আমি আমাৰ কাম কৰিম৷ ",
                "az-Latn-AZ": "Bacardığınızı edin, qalanı isə bizlikdir. ",
                "be-BY": "Дасягайце выдатных вынікаў у сваёй працы, а мы зоймемся сваёй. ",
                bg: 'Използвайте "магическите" си способности, а ние ще използваме нашите. ',
                "bn-BD": "আপনার দক্ষতাকে কাজে লাগান, আমরা আমাদের দক্ষতাকে কাজে লাগা’বো। ",
                "bn-IN": "আপনার দক্ষতাকে কাজে লাগান, আম’রা আমাদের কাজগুলি করে যাবো। ",
                "bs-Latn-BA": "Vi izvedite svoju magiju, a mi ćemo svoju. ",
                "ca-ES-valencia": "Utilitzeu els vostres trucs, nosaltres utilitzarem els nostres. ",
                ca: "Feu servir els vostres trucs, nosaltres en farem servir els nostres. ",
                cs: "Soustřeďte se na důležité věci, my zvládneme to ostatní",
                cy: "Tric a chlic.",
                da: "Udfør din magi, så udfører vi vores. ",
                de: "Machen Sie, was Sie können, wir machen, was wir können. ",
                el: "Δώστε τον καλύτερό σας εαυτό και εμείς αναλαμβάνουμε τα υπόλοιπα.",
                "en-GB": "Work your magic – we'll work ours. ",
                en: "Work your magic; we’ll work ours ",
                "es-MX": "Haz tu parte, nosotros haremos la nuestra. ",
                es: "Haga su parte, nosotros haremos la nuestra. ",
                et: "Teie tehke oma tööd, meie teeme oma. ",
                eu: "Guk gure lana egingo dugu zuk zurea egin dezazun. ",
                fa: "شما جادوی خودتان را پیاده کنید، ما جادوی خودمان را پیاده خواهیم کرد.",
                fi: "Työskentele tehokkaasti, niin mekin teemme. ",
                fil: "Gamitin ang nalalaman mo at gagamitin naman namin ang amin. ",
                "fr-CA": "Déployez votre talent. Nous ferons de même. ",
                fr: "Déployez votre talent. Nous ferons de même. ",
                "ga-IE": "Imir draíocht, agus imreoimid ár ndraíocht féin. ",
                "gd-GB": "Nì sinne ar draoidheachd-ne ach an urrainn dhut-sa do dhraoidheachd-sa a dhèanamh. ",
                gl: "Aproveita as túas capacidades, e nós axudarémosche coas nosas. ",
                gu: "તમારું જાદુઈ કાર્ય કરો, અમે અમારું કાર્ય કરીશું. ",
                "ha-Latn-NG": "Yi aiki da dabonka, mu za mu yi da namu. ",
                he: "הוסף את מגע הקסם שלך, ואנחנו נוסיף את שלנו.",
                hi: "अपना जादू करें, हम अपना जादू दिखाएँगे. ",
                hr: "Vi napravite svoj dio posla, a mi ćemo svoj. ",
                hu: "Elegendő a saját dolgaira koncentrálnia. Minden másról mi gondoskodunk. ",
                hy: "Կատարեք ձեր դյութիչ աշխատանքը, իսկ մենք կանենք մերը:",
                id: "Kerjakan bagian Anda, kami akan mengerjakan bagian kami. ",
                is: "Þú galdrar þitt, við göldrum okkar. ",
                it: "Segui le tue attività, noi ti supporteremo al meglio. ",
                ja: "あなたの才能を発揮してください。Outlook もその能力を発揮します。",
                ka: "აკეთეთ თქვენი საქმე, ჩვენ გავაკეთებთ ჩვენსას. ",
                kk: "Ұлы істеріңізді ешнәрсеге алаңдамай жасаңыз, ал біз сізге оларды жасауға барынша жағдай жасаймыз.",
                "km-KH": "ធ្វើការជាមួយវេទមន្ដរបស់អ្នក យើង’នឹង​ធ្វើការជាមួយវេទមន្តរបស់យើង។",
                kn: "ನಿಮ್ಮ ಮ್ಯಾಜಿಕ್ ಕಾರ್ಯನಿರ್ವಹಿಸಿ, ನಾವು ನಮ್ಮ ಕಾರ್ಯ ಮಾಡುತ್ತೇವೆ. ",
                ko: "우수한 사용 환경 제공 ",
                kok: "तुमचो जादू चलोवचो, आमचो आमी करतात. ",
                ky: "Ар бирибиз колдон келген ишибизди аткаралык. ",
                "lb-LU": "Maacht Dir Ären Deel a mir këmmeren eis ëm de Rescht. ",
                "lo-LA": "​ເຮັດ​ວຽກ​ຕາມ​ແບບ​ຂອງ​ທ່ານ, ພວກ​ເຮົາ​ຈະ​ເຮັດ​ວຽກ​ຂອງ​ພວກ​ເຮົາ. ",
                lt: "Užsiimkite savo darbais, o visu kitu pasirūpinsime mes.",
                lv: "Dariet, kas darāms jums, mēs paveiksim to, ko varam mēs. ",
                "mi-NZ": "Mahia āu mahi whakamīharo, ka pēnā anō mātou. ",
                mk: "Вие работете си го вашето, а ние нашето. ",
                ml: "നിങ്ങളുടെ അത്ഭുതം പ്രവർത്തിക്കൂ, ഞങ്ങളുടേത് ഞങ്ങൾ നിർവ്വഹിച്ചുകൊള്ളും. ",
                "mn-MN": "Та өөрийнхийгөө бид өөрсдийнхийгөө хийнэ.",
                mr: "उत्साहाने कार्य करा, आम्ही आमचे प्रयत्न करू. ",
                ms: "Lakukan kerja anda dan kami akan lakukan kerja kami. ",
                "mt-MT": "Int agħmel xogħlok, u aħna nagħmlu tagħna.",
                "ne-NP": "तपाइँको जादू प्रयोग गर्नुहोस्, हामीले आफ्नो गर्नेछौं। ",
                nl: "Doe waar u het beste in bent, dan doen wij dat ook. ",
                "nn-NO": "Du gjer arbeidet ditt, og vi gjer vårt. ",
                no: "Gjør ditt beste arbeid, så gjør vi vårt. ",
                or: "ଆପଣଙ୍କର ମ୍ୟାଜିକ୍‌ କାର୍ଯ୍ୟରେ ଲଗାନ୍ତୁ, ଆମେ ଆମର କାର୍ଯ୍ୟ କରିବୁ. ",
                "pa-IN": "ਤੁਸੀਂ ਆਪਣੇ ਜਾਦੂ ਦਾ ਕੰਮ ਕਰੋ ਅਸੀਂ ਆਪਣੇ ਕੰਮ ਕਰਾਂਗੇ। ",
                pl: "Realizuj swój potencjał, a my zrobimy to samo.",
                prs: "شما معجزه آسا کار کنید، ما کار خود را انجام می دهیم. ",
                "pt-PT": "Faça a sua magia, que nós faremos a nossa. ",
                pt: "Faça sua mágica e nós faremos a nossa. ",
                "qps-ploc": "Work your magic, we’ll work ours. ",
                "qps-ploca": "Work your magic, we’ll work ours. ",
                "qps-plocm": "Work your magic, we’ll work ours. ",
                "quz-PE": "Kusi qillpuykiwan llamkay, kusi qillpuykuwan llamkayku. ",
                ro: "Faceți ce știți mai bine, iar noi vom face la fel. ",
                ru: "Занимайтесь своим делом, а мы займемся своим. ",
                "sd-Arab-PK": "پنهنجي جادو تي ڪم ڪريو، اسان پنهنجي تي ڪنداسين. ",
                "si-LK": "ඔබේ විජ්ජාව කරන්න, අපි අපේ වැඩේ කරන්නම්. ",
                sk: "Venujte sa podstatnému, my zvládneme to ostatné.",
                sl: "Dajte svojemu znanjo prosto pot, mi pa bomo poskrbeli za ostalo.",
                sq: "Bëj magjinë tënde, ne do bëjmë tonën. ",
                "sr-Cyrl-BA": "Радите оно што најбоље знате, а ми ћемо све остало. ",
                "sr-Cyrl": "Радите оно што најбоље знате, а ми ћемо све остало. ",
                sr: "Radite ono što najbolje znate, a mi ćemo sve ostalo. ",
                sv: "Gör det du är bäst på, så gör vi detsamma. ",
                sw: "Fanya yanayokuhusu, tutafanya yanayotuhusu.",
                ta: "உங்கள் வித்தையைக் காட்டுங்கள், நாங்கள் எங்களுடையதைச் செய்கிறோம். ",
                te: "మీకు నచ్చినవి చేయండి, మా పని మేము చేస్తాము. ",
                th: "สร้างสรรค์งานของคุณ เราจะทำส่วนของเราเอง ",
                "tk-TM": "Gudratyňyzy görkeziň, bizem öz işimiz alyp çykarys. ",
                tr: "Siz işlerinizle ilgilenin, gerisini bize bırakın. ",
                tt: "Сез үз тылсымыгызны, без үзебезнекен башкарачакбыз. ",
                "ug-CN": "سىز ئۆزىڭىزگە ئايرىلغاننى قىلىڭ. بىزمۇ ئۆز ئىشىمىزنى قىلىمىز.",
                uk: "Ми робимо свою справу якнайкраще, щоб ви могли робити свою.",
                ur: "اپنے میجک پر کام کریں، ہم اپنے پر کام کریں گے۔ ",
                uz: "Siz o‘z afsonangiz ustida ishlang, biz esa o‘zimiznikida ishlaymiz. ",
                vi: "Tập trung vào chuyên môn của bạn, chúng tôi sẽ thực hiện việc của chúng tôi. ",
                "zh-Hans": "各司其职，各尽所能。",
                "zh-Hant": "盡全力完成工作，其他的就交給我們了。"
            },
            TermsOfUse_Text: {
                af: "Gebruiksbepalings",
                am: "የአጠቃቀም ደንብ",
                ar: "شروط الاستخدام",
                "as-IN": "ব্যৱহাৰৰ চৰ্তাৱলী",
                "az-Latn-AZ": "İstifadə şərtləri",
                "be-BY": "Умовы выкарыстання",
                bg: "Условия на използване",
                "bn-BD": "ব্যবহারের শর্তাবলী",
                "bn-IN": "ব্যবহারের শর্তাবলী",
                "bs-Latn-BA": "Uslovi korištenja",
                "ca-ES-valencia": "Condicions d'ús",
                ca: "Condicions d'ús",
                cs: "Podmínky použití",
                cy: "Telerau defnyddio",
                da: "Vilkår for anvendelse",
                de: "Nutzungsbedingungen",
                el: "Όροι χρήσης",
                "en-GB": "Terms of use",
                en: "Terms of use",
                "es-MX": "Condiciones de uso",
                es: "Condiciones de uso",
                et: "Kasutustingimused",
                eu: "Erabiltzeko baldintzak",
                fa: "شرایط استفاده",
                fi: "Käyttöehdot",
                fil: "Mga patakaran sa paggamit",
                "fr-CA": "Conditions d’utilisation",
                fr: "Conditions d’utilisation",
                "ga-IE": "Téarmaí úsáide",
                "gd-GB": "Teirmichean a’ chleachdaidh",
                gl: "Condicións de uso",
                gu: "ઉપયોગની શરતો",
                "ha-Latn-NG": "Sharuɗɗan amfani",
                he: "תנאי שימוש",
                hi: "उपयोग की शर्तें",
                hr: "Uvjeti korištenja",
                hu: "Használati feltételek",
                hy: "Օգտագործման պայմաններ",
                id: "Ketentuan penggunaan",
                is: "Notkunarskilmálar",
                it: "Condizioni per l'utilizzo",
                ja: "使用条件",
                ka: "გამოყენების პირობები",
                kk: "Пайдалану шарттары",
                "km-KH": "លក្ខខណ្ឌប្រើប្រាស់",
                kn: "ಬಳಕೆಯ ನಿಯಮಗಳು",
                ko: "사용 약관",
                kok: "उपेगाच्यो अटी",
                ky: "Колдонуу шарты",
                "lb-LU": "Notzungsbedéngungen",
                "lo-LA": "​ຂໍ້​ກຳນົດ​ການ​ໃຊ້",
                lt: "Naudojimo sąlygos",
                lv: "Lietošanas nosacījumi",
                "mi-NZ": "Ngā ture whakamahi",
                mk: "Услови на користење",
                ml: "ഉപയോഗ നിബന്ധനകൾ",
                "mn-MN": "Ашиглах нөхцөлүүд",
                mr: "वापराच्या अटी",
                ms: "Terma penggunaan",
                "mt-MT": "Termini tal-użu",
                "ne-NP": "प्रयोगका सर्तहरू",
                nl: "Gebruiksvoorwaarden",
                "nn-NO": "Vilkår for bruk",
                no: "Vilkår for bruk",
                or: "ବ୍ୟବହାରର ସର୍ତ୍ତାବଳୀ",
                "pa-IN": "ਵਰਤੋਂ ਦੀਆਂ ਸ਼ਰਤਾਂ",
                pl: "Warunki użytkowania",
                prs: "شرایط استفاده",
                "pt-PT": "Termos de utilização",
                pt: "Termos de uso",
                "qps-ploc": "Terms of use",
                "qps-ploca": "Terms of use",
                "qps-plocm": "Terms of use",
                "quz-PE": "Hapiymanta kamachiykuna",
                ro: "Condiții de utilizare",
                ru: "Условия использования",
                "sd-Arab-PK": "استعمال جون شرطون",
                "si-LK": "සේවා නියම",
                sk: "Podmienky používania",
                sl: "Pogoji uporabe",
                sq: "Kushtet e përdorimit",
                "sr-Cyrl-BA": "Услови коришћења",
                "sr-Cyrl": "Услови коришћења",
                sr: "Uslovi korišćenja",
                sv: "Användningsvillkor",
                sw: "Sheria na masharti",
                ta: "பயன்பாட்டு விதிமுறைகள்",
                te: "ఉపయోగ నిబంధనలు",
                th: "ข้อกำหนดการใช้",
                "tk-TM": "Ulanyş şertleri",
                tr: "Kullanım koşulları",
                tt: "Куллану шартлары",
                "ug-CN": "ئىشلىتىش شەرتلىرى",
                uk: "Умови використання",
                ur: "استعمال کی شرائط",
                uz: "Foydalanish shartlari",
                vi: "Điều khoản sử dụng",
                "zh-Hans": "使用条款",
                "zh-Hant": "使用規定"
            },
            TradeMarks_Text: {
                af: "Handelsmerke",
                am: "የንግድ ምልክቶች",
                ar: "العلامات التجارية",
                "as-IN": "ট্ৰেডমাৰ্ক",
                "az-Latn-AZ": "Əmtəə nişanları",
                "be-BY": "Таварныя знакі",
                bg: "Търговски марки",
                "bn-BD": "ট্রেডমার্কগুলো",
                "bn-IN": "ট্রেডমার্কগুলি",
                "bs-Latn-BA": "Zaštićeni znakovi",
                "ca-ES-valencia": "Marques registrades",
                ca: "Marques registrades",
                cs: "Ochranné známky",
                cy: "Nodau masnach",
                da: "Varemærker",
                de: "Marken",
                el: "Εμπορικά σήματα",
                "en-GB": "Trademarks",
                en: "Trademarks",
                "es-MX": "Marcas comerciales",
                es: "Marcas comerciales",
                et: "Kaubamärgid",
                eu: "Marka komertzialak",
                fa: "علائم تجاری",
                fi: "Tavaramerkit",
                fil: "Mga Trademark",
                "fr-CA": "Marques déposées",
                fr: "Marques déposées",
                "ga-IE": "Trádmharcanna",
                "gd-GB": "Comharran-malairt",
                gl: "Marcas comerciais",
                gu: "ટ્રેડમાર્ક્સ",
                "ha-Latn-NG": "Alamomin kasuwanci",
                he: "סימנים מסחריים",
                hi: "ट्रेडमार्क्स",
                hr: "Zaštitni znakovi",
                hu: "Védjegyek",
                hy: "Ապրանքանշաններ",
                id: "Merek Dagang",
                is: "Vörumerki",
                it: "Marchi",
                ja: "商標",
                ka: "სავაჭრო ნიშნები",
                kk: "Сауда белгілері",
                "km-KH": "ស្លាកសញ្ញាពាណិជ្ជកម្",
                kn: "ಟ್ರೇಡ್‌ಮಾರ್ಕ್‌ಗಳು",
                ko: "상표",
                kok: "बोधचिन्नां",
                ky: "Соода белгилери",
                "lb-LU": "Deposéiert Marken",
                "lo-LA": "​ເຄື່ອງໝາຍການ​ຄ້າ",
                lt: "Prekių ženklai",
                lv: "Preču zīmes",
                "mi-NZ": "Ngā moko",
                mk: "Заштитни знаци",
                ml: "വ്യാപാരമുദ്രകൾ",
                "mn-MN": "Худалдааны тэмдгүүд",
                mr: "व्यापारचिन्हे",
                ms: "Cap dagang",
                "mt-MT": "Trejdmarks",
                "ne-NP": "व्यापार चिन्हहरू",
                nl: "Merkrechten",
                "nn-NO": "Varemerke",
                no: "Varemerker",
                or: "ଟ୍ରେଡମାର୍କଗୁଡିକ",
                "pa-IN": "ਟ੍ਰੇਡਮਾਰਕ",
                pl: "Znaki towarowe",
                prs: "علایم تجاری",
                "pt-PT": "Marcas Registadas",
                pt: "Marcas",
                "qps-ploc": "Trademarks",
                "qps-ploca": "Trademarks",
                "qps-plocm": "Trademarks",
                "quz-PE": "Qillqasqa markakuna",
                ro: "Mărci comerciale",
                ru: "Товарные знаки",
                "sd-Arab-PK": "ٽريڊ مارڪ",
                "si-LK": "වෙළඳ ලකුණු",
                sk: "Ochranné známky",
                sl: "Blagovne znamke",
                sq: "Markat e regjistruara",
                "sr-Cyrl-BA": "Жигови",
                "sr-Cyrl": "Жигови",
                sr: "Žigovi",
                sv: "Varumärken",
                sw: "Alama za biashara",
                ta: "வர்த்தக முத்திரைகள்",
                te: "వ్యాపారచిహ్నాలు",
                th: "เครื่องหมายการค้า",
                "tk-TM": "Söwda belgileri",
                tr: "Ticari markalar",
                tt: "Товар билгеләре",
                "ug-CN": "سودا ماركىسى",
                uk: "Торговельні марки",
                ur: "ٹریڈ مارکس",
                uz: "Savdo belgilari",
                vi: "Thương hiệu",
                "zh-Hans": "商标",
                "zh-Hant": "商標"
            },
            TryOurApps_Button_Text: {
                af: "Probeer ons toepassings",
                am: "የኛ መተግበሪያዎችን ይሞክሩ",
                ar: "جرّب تطبيقاتنا",
                "as-IN": "আমাৰ এপ্প্‌সমূহ চেষ্টা কৰক",
                "az-Latn-AZ": "Proqramlarımızı sınaqdan keçirin",
                "be-BY": "Апрабаваць праграмы",
                bg: "Изпробвайте нашите приложения",
                "bn-BD": "আমাদের অ্যাপগুলো ব্যবহার করে দেখুন",
                "bn-IN": "আমাদের অ্যাপগুলি ব্যবহার করে দেখুন",
                "bs-Latn-BA": "Isprobajte naše aplikacije",
                "ca-ES-valencia": "Prova les aplicacions",
                ca: "Prova les aplicacions",
                cs: "Vyzkoušejte naše aplikace",
                cy: "Rhoi Cynnig ar Ein Apiau",
                da: "Prøv vores Apps",
                de: "Unsere Apps testen",
                el: "Δοκιμάστε τις εφαρμογές μας",
                "en-GB": "Try our Apps",
                en: "Try our apps",
                "es-MX": "Probar nuestras aplicaciones",
                es: "Probar nuestras aplicaciones",
                et: "Proovige meie rakendusi",
                eu: "Probatu gure aplikazioak",
                fa: "برنامه‌های ما را امتحان کنید",
                fi: "Kokeile sovelluksia",
                fil: "Subukan ang Mga App Namin",
                "fr-CA": "Découvrez nos applications",
                fr: "Découvrez nos applications",
                "ga-IE": "Bain triail as na feidhmchláir againne",
                "gd-GB": "Feuch na h-aplacaidean againn",
                gl: "Probar as nosas aplicacións",
                gu: "અમારી એપ્લિકેશન્સ અજમાવી જુઓ",
                "ha-Latn-NG": "Gwada Ka'idodi Namu",
                he: "נסה את היישומים שלנו",
                hi: "हमारे ऐप्स आज़माएँ",
                hr: "Isprobajte naše aplikacije",
                hu: "Appok kipróbálása",
                hy: "Փորձեք մեր գործադիրները",
                id: "Coba Aplikasi Kami",
                is: "Prófaðu forritin okkar",
                it: "Prova le nostre app",
                ja: "Microsoft のアプリを試す",
                ka: "ცადეთ ჩვენი აპები",
                kk: "Біздің бағдарламаларымызды пайдаланып көріңіз",
                "km-KH": "សាកល្បងប្រើកម្មវិធីរបស់យើង",
                kn: "ನಮ್ಮ ಅಪ್ಲಿಗಳನ್ನು ಪ್ರಯತ್ನಿಸಿ",
                ko: "앱 사용해 보기",
                kok: "आमचीं ऍप्लिकेशनां वापरून पळोवचीं",
                ky: "Кайрылмаларыбызды пайдаланып көрүңүз",
                "lb-LU": "Eis Apps ausprobéieren",
                "lo-LA": "ລອງ​ໃຊ້​ແອັບ​ຂອງ​ພວກ​ເຮົາ",
                lt: "Išbandykite mūsų programėles",
                lv: "Izmēģiniet lietojumprogrammas",
                "mi-NZ": "Whakamātauhia Ā Mātou Taupānga",
                mk: "Пробајте ги нашите апликации",
                ml: "ഞങ്ങളുടെ ആപ്പുകൾ പരീക്ഷിക്കൂ",
                "mn-MN": "Манай програмыг туршиж үзэх",
                mr: "आमचे अनुप्रयोग वापरून पहा",
                ms: "Cuba Aplikasi Kami",
                "mt-MT": "Ipprova l-Applikazzjonijiet Tagħna",
                "ne-NP": "हाम्रा एपहरू प्रयोग गर्नुहोस्",
                nl: "Onze apps uitproberen",
                "nn-NO": "Prøv appane våre",
                no: "Prøv appene våre",
                or: "ଆମର ଆପ୍ଲିକେସନ୍ ଚେଷ୍ଟା କରନ୍ତୁ",
                "pa-IN": "ਸਾਡੇ ਐਪਲੀਕੇਸ਼ਨਾਂ ਨੂੰ ਅਜ਼ਮਾਓ",
                pl: "Wypróbuj nasze aplikacje",
                prs: "امتحان کردن برنامه های ما",
                "pt-PT": "Experimente as Nossas Aplicações",
                pt: "Experimente Nossos Aplicativos",
                "qps-ploc": "Try Our Apps",
                "qps-ploca": "Try Our Apps",
                "qps-plocm": "Try Our Apps",
                "quz-PE": "Llamkanakunayku ruway",
                ro: "Încercați aplicațiile noastre",
                ru: "Попробуйте наши приложения",
                "sd-Arab-PK": "اسانجيون ائپس آزمايو",
                "si-LK": "අපගේ යෙදුම් උත්සාහ කරන්න",
                sk: "Vyskúšajte naše aplikácie",
                sl: "Poskusite naše aplikacije",
                sq: "Provo aplikacionet tona",
                "sr-Cyrl-BA": "Испробајте наше апликације",
                "sr-Cyrl": "Испробајте наше апликације",
                sr: "Isprobajte naše aplikacije",
                sv: "Prova våra appar",
                sw: "Jaribu Programu Zetu",
                ta: "எங்கள் பயன்பாடுகளை முயற்சிக்கவும்",
                te: "మా అనువర్తనాలను ప్రయత్నించండి",
                th: "ลองใช้แอปของเรา",
                "tk-TM": "Programmalarymyzy synap görüň",
                tr: "Uygulamalarımızı Deneyin",
                tt: "Безнең кушымталарны сынап карагыз",
                "ug-CN": "ئەپنى سىناپ بېقىڭ",
                uk: "Спробуйте наші програми",
                ur: "ہماری ایپس کو آزمائیں",
                uz: "Ilovalarimizni sinab ko‘ring",
                vi: "Dùng thử Các ứng dụng của Chúng tôi",
                "zh-Hans": "试用我们的应用",
                "zh-Hant": "試用我們的 App"
            },
            WindowsStore_Image_Text: {
                af: "Windows-winkelskakel",
                am: "የ Windows ማከማቻ አገናኝ",
                ar: "ارتباط متجر Windows",
                "as-IN": "Windows ষ্ট’ৰ লিংক",
                "az-Latn-AZ": "Windows mağaza keçidi",
                "be-BY": "Спасылка на краму Windows",
                bg: "Връзка към магазина на Windows",
                "bn-BD": "Windows স্টোর লিঙ্ক",
                "bn-IN": "Windows স্টোরের লিঙ্ক",
                "bs-Latn-BA": "Veza Windows pohrane",
                "ca-ES-valencia": "Enllaç de la Botiga del Windows",
                ca: "Enllaç de la Botiga del Windows",
                cs: "Odkaz na Windows Store",
                cy: "Dolen siop Windows",
                da: "Link til Windows Store",
                de: "Windows Store-Link",
                el: "Σύνδεση του Windows store",
                "en-GB": "Windows store link",
                en: "Get it on Windows 10",
                "es-MX": "Vínculo de la Tienda Windows",
                es: "Vínculo de la Tienda Windows",
                et: "Windowsi poe link",
                eu: "Windows dendarako esteka",
                fa: "پیوند فروشگاه Windows",
                fi: "Windows-kaupan linkki",
                fil: "Link sa Windows store",
                "fr-CA": "Lien vers le Windows Store",
                fr: "Lien vers le Windows Store",
                "ga-IE": "Nasc Shiopa Windows",
                "gd-GB": "Ceangal ri Bùth Windows",
                gl: "Ligazón da Tenda Windows",
                gu: "Windows સ્ટોર લિંક",
                "ha-Latn-NG": "Mahaɗin wurin adana Windows",
                he: "קישור לחנות Windows",
                hi: "Windows संग्रह लिंक",
                hr: "Veza na Windows trgovinu",
                hu: "A Windows Áruház hivatkozása",
                hy: "Windows խանութի հղում",
                id: "Tautan bursa Windows",
                is: "Tengill í Windows-netverslun",
                it: "Collegamento al Windows Store",
                ja: "Windows ストアのリンク",
                ka: "Windows მაღაზიის ბმული",
                kk: "Windows дүкенінің сілтемесі",
                "km-KH": "តំណកម្មវិធីផ្ទុកទិន្នន័យនៅលើ Windows",
                kn: "Windows ಸಂಗ್ರಹ ಲಿಂಕ್",
                ko: "Windows 스토어 링크",
                kok: "Windows स्टोर लिंक",
                ky: "Windows дүкөнүнө шилтеме",
                "lb-LU": "Windows-Store-Link",
                "lo-LA": "​ລິ້ງ Windows ຮ້ານ​ຄ້າ",
                lt: "„Windows“ parduotuvės saitas",
                lv: "Windows veikala saite",
                "mi-NZ": "Tūhono pātaka Windows",
                mk: "Врска до Windows продавницата",
                ml: "Windows സ്റ്റോർ ലിങ്ക്",
                "mn-MN": "Windows-ийн дэлгүүрийн холбоос",
                mr: "Windows संग्रह लिंक",
                ms: "Pautan gedung Windows",
                "mt-MT": "Link għall-ħanut ta' Windows",
                "ne-NP": "Windows पसल लिङ्क",
                nl: "Koppeling naar de Windows Store",
                "nn-NO": "Kopling til Windows Store",
                no: "Windows Store-kobling",
                or: "Windows ଷ୍ଟୋର୍‌ ଲିଙ୍କ୍‌",
                "pa-IN": "Windows ਸਟੋਰ ਲਿੰਕ",
                pl: "Link do Sklepu Windows",
                prs: "پیوند فروشگاه Windows",
                "pt-PT": "Ligação da Loja Windows",
                pt: "Link da Windows Store",
                "quz-PE": "Windows tienda tupana",
                ro: "Link la magazinul Windows",
                ru: "Ссылка на Магазин Windows",
                "sd-Arab-PK": "Windows اسٽور ڪڙي",
                "si-LK": "Windows store සබැඳිය",
                sk: "Prepojenie na Windows Obchod",
                sl: "Povezava shrambe v storitvi Windows",
                sq: "Lidhja e Dyqanit të Windows",
                "sr-Cyrl-BA": "Веза Windows складишта",
                "sr-Cyrl": "Веза Windows складишта",
                sr: "Veza Windows skladišta",
                sv: "Windows Store-länk",
                sw: "Kiungo cha duka la Windows",
                ta: "Windows ஸ்டோர் இணைப்பு",
                te: "Windows స్టోర్ లింక్",
                th: "ลิงก์ Windows Store",
                "tk-TM": "Windows dükany bagy",
                tr: "Windows Mağazası bağlantısı",
                tt: "Windows саклау сылтамасы",
                "ug-CN": "Windows دۇكىنى ئۇلانمىسى",
                uk: "Посилання на Магазин Windows",
                ur: "Windows اسٹور ربط",
                uz: "Windows store havolasi",
                vi: "Liên kết Windows store",
                "zh-Hans": "Windows 应用商店链接",
                "zh-Hant": "Windows 市集連結"
            },
            GetPremium_Text: {
                "qps-ploc": "Get premium",
                "qps-ploca": "Get premium",
                "qps-plocm": "Get premium"
            },
            Premium_Text: {
                "qps-ploc": "Premium",
                "qps-ploca": "Premium",
                "qps-plocm": "Premium"
            }
        }
    },
    "./strings/localizedStrings.ts": function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o("./strings/LandingPageStrings.ts");
        ! function(e) {
            var t = "en-us",
                o = "en",
                a = {
                    "zh-CHS": "zh-Hans",
                    "zh-CHT": "zh-Hant"
                };

            function i(e) {
                return e[t] ? e[t] : e[o] ? e[o] : a[o] ? e[a[o]] : e.en
            }
            e.setCurrentCulture = function(e, n) {
                t = e, o = n
            }, e.get_OutlookBrandName = function() {
                return i(n.LandingPageStrings.Outlook_Brand_Text)
            }, e.get_EdgeTry = function() {
                return i(n.LandingPageStrings.Edge_Try_Text)
            }, e.get_EdgeDescript = function() {
                return i(n.LandingPageStrings.Edge_Description_Text)
            }, e.get_EdgeAccept = function() {
                return i(n.LandingPageStrings.Edge_Get_started_Text)
            }, e.get_EdgeDeny = function() {
                return i(n.LandingPageStrings.Edge_Deny_Text)
            }, e.get_blogButton = function() {
                return i(n.LandingPageStrings.BlogButton_Text)
            }, e.get_signInButton = function() {
                return i(n.LandingPageStrings.SignInButton_Text)
            }, e.get_signUpButton = function() {
                return i(n.LandingPageStrings.SignUpButton_Text)
            }, e.get_buyOfficeButton = function() {
                return i(n.LandingPageStrings.Buy_O365_Text)
            }, e.get_createAccountButton = function() {
                return i(n.LandingPageStrings.CreatAccountButton_Text)
            }, e.get_familyMessageTitle = function() {
                return i(n.LandingPageStrings.FamilyMessageTitle_Text)
            }, e.get_termOfUse = function() {
                return i(n.LandingPageStrings.TermsOfUse_Text)
            }, e.get_privacyCookie = function() {
                return i(n.LandingPageStrings.PrivacyCookies_Text)
            }, e.get_outlookImageText = function() {
                return i(n.LandingPageStrings.Outlook_Image_Text)
            }, e.get_appStoreImageText = function() {
                return i(n.LandingPageStrings.AppStore_Image_Text)
            }, e.get_googlePlayImageText = function() {
                return i(n.LandingPageStrings.GooglePlay_Image_Text)
            }, e.get_windowsStoreImageText = function() {
                return i(n.LandingPageStrings.WindowsStore_Image_Text)
            }, e.get_newPageTitle = function() {
                return i(n.LandingPageStrings.NPageTitle_Text)
            }, e.get_newPageDescription = function() {
                return i(n.LandingPageStrings.NPageDescription_Text)
            }, e.get_sectionOneTitle = function() {
                return i(n.LandingPageStrings.TagLine2_Title_Text)
            }, e.get_sectionOneDescription = function() {
                return i(n.LandingPageStrings.TagLine2_Description_Text)
            }, e.get_setctionTwoTitle = function() {
                return i(n.LandingPageStrings.TagLine3_Title_Text)
            }, e.get_sectionTwoDescription = function() {
                return i(n.LandingPageStrings.TagLine3_Description_Text)
            }, e.get_sectionThreeTitle = function() {
                return i(n.LandingPageStrings.TagLine4_Title_Text)
            }, e.get_sectionThreeDescription = function() {
                return i(n.LandingPageStrings.TagLine4_Description_Text)
            }, e.get_sectionFiveTitle = function() {
                return i(n.LandingPageStrings.O365_Message_Title_Text)
            }, e.get_sectionFiveDescription = function() {
                return i(n.LandingPageStrings.O365_Message_Text)
            }, e.get_sectionFiveButton = function() {
                return i(n.LandingPageStrings.O365_Message_Cta_Text)
            }, e.get_supportText = function() {
                return i(n.LandingPageStrings.SupportButton_Text)
            }, e.get_tryOurAppsText = function() {
                return i(n.LandingPageStrings.TryOurApps_Button_Text)
            }, e.get_contactUsText = function() {
                return i(n.LandingPageStrings.ContactUs_Text)
            }, e.get_tradeMarksText = function() {
                return i(n.LandingPageStrings.TradeMarks_Text)
            }, e.get_legalText = function() {
                return i(n.LandingPageStrings.Legal_Text)
            }, e.get_PremiumText = function() {
                return i(n.LandingPageStrings.Premium_Text)
            }, e.get_OutlookBrandText = function() {
                return i(n.LandingPageStrings.Outlook_Brand_Text)
            }, e.get_OutlookAppStoreText = function() {
                return i(n.LandingPageStrings.Outlook_AppStore_Text)
            }, e.get_OutlookTitleText = function() {
                return i(n.LandingPageStrings.Outlook_Title_Text)
            }, e.get_OutlookDescriptionText = function() {
                return i(n.LandingPageStrings.Outlook_Description_Text)
            }, e.get_OutlookButtonText = function() {
                return i(n.LandingPageStrings.Outlook_Button_Text)
            }, e.get_OutlookUseBrowser_text = function() {
                return i(n.LandingPageStrings.Outlook_UseBrowser_Text)
            }, e.get_SignUpTextTNarrow = function() {
                return i(n.LandingPageStrings.SignUpTextTNarrow_Text)
            }
        }(t.localizedStrings || (t.localizedStrings = {}))
    },
    0: function(e, t) {}
});
//# sourceMappingURL=landing.js.map