! function(t) {
    var e = {};

    function n(o) {
        if (e[o]) return e[o].exports;
        var i = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 5)
}([function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return o
    }), n.d(e, "c", function() {
        return i
    }), n.d(e, "b", function() {
        return r
    }), n.d(e, "d", function() {
        return a
    });
    var o = {
            MODAL: "iris_modal",
            MODAL_WRAPPER: "iris_modal-wrapper",
            MODAL_BODY_SCROLL_LOCK: "iris_modal-body--scroll-lock",
            MODAL_UNDERLAY: "iris_modal-underlay",
            MODAL_BOX: "iris_modal-box",
            MODAL_BOX_XSMALL: "iris_modal-box--xsm",
            MODAL_BOX_SMALL: "iris_modal-box--sm",
            MODAL_BOX_LARGE: "iris_modal-box--lg",
            MODAL_BOX_RIGHT: "iris_modal-box--right",
            MODAL_BOX_REGISTRATION: "iris_modal-box--reg",
            MODAL_BOX_VOD_PRICE_PICKER: "iris_modal-box--vod-prices",
            MODAL_BOX_EPISODE_DETAILS: "iris_modal-box--episode-details",
            MODAL_BOX_COLLECTION: "iris_modal-box--collection",
            MODAL_BOX_HIDE: "iris_modal-box--hide",
            MODAL_BOX_IFRAME_HIJACK: "iris_modal-content--iframe-hijack",
            MODAL_HEADER: "iris_modal-header",
            MODAL_HEADER_ICON: "iris_modal-header-icon",
            MODAL_HEADER_HIDE: "iris_modal-header--hide",
            MODAL_CONTENT: "iris_modal-content",
            MODAL_CONTENT_FLUSH: "iris_modal-content--flush",
            MODAL_CONTENT_IFRAME_HIJACK: "iris_modal-content--iframe-hijack",
            MODAL_CLOSE: "iris_modal-btn--close",
            MODAL_CLOSE_IFRAME_HIJACK: "iris_modal-btn--close-iframe-hijack"
        },
        i = {
            XSMALL: "xsmall",
            SMALL: "small",
            MEDIUM: "medium",
            LARGE: "large",
            REGISTRATION: "reg",
            VOD_PRICE_PICKER: "vod_price_picker",
            VOD_CHECKOUT: "vod_checkout",
            COLLECTION: "collection",
            EPISODE_DETAILS: "episode_details"
        },
        r = {
            CENTER: "center",
            RIGHT: "right"
        },
        a = {
            MODAL: "Invalid modal object",
            CONTENT_HANDLER: "Invalid ContentHandler class",
            TITLE: "Missing modal title",
            CONTENT: "Missing modal content",
            STRING: "Modal content given is not a string",
            HTML: "Modal content given is not a valid DOM element",
            REACT: "Modal content given is not a valid React component",
            REACT_PLUGIN: "React doesn't exist on this page"
        }
}, function(t, e, n) {
    "use strict";
    var o = n(11),
        i = n.n(o),
        r = n(12),
        a = n(13),
        s = n(0);

    function l(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }
    var c = {
            content_handler: n(4).a,
            size: s.c.MEDIUM,
            position: s.b.CENTER,
            center_header: !1
        },
        u = 50,
        d = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = arguments.length > 1 ? arguments[1] : void 0,
                    o = arguments.length > 2 ? arguments[2] : void 0;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this._options = i()({}, c), i()(this._options, e), this._contentHandler = new this._options.content_handler(this), this.clickCloseFunc = this.handleClickClose.bind(this), this.clickUnderlayFunc = this.handleClickUnderlay.bind(this), this.touchmoveUnderlayFunc = this.handleTouchmoveUnderlay.bind(this), this.keyupFunc = this.handleKeyup.bind(this), this.onCloseCallback = n, this.onModalLoadedCallback = o, this.createElements(), setTimeout(this.attachListeners.bind(this), u)
            }
            var e, n, o;
            return e = t, (n = [{
                key: "update",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    i()(this._options, t), this._contentHandler.update()
                }
            }, {
                key: "updateTitle",
                value: function(t) {
                    this._options.title = t, this._contentHandler.getTitle(), this._contentHandler.insertTitle()
                }
            }, {
                key: "close",
                value: function() {
                    if (this._options.body_lock) {
                        document.body.classList.remove(s.a.MODAL_BODY_SCROLL_LOCK);
                        var t = document.body.style.top.replace("-", "").replace("px", "");
                        document.body.style.top = "auto", document.body.scrollTop = t
                    }
                    this.fadeOut(this._modalWrapper).then(this.remove.bind(this))
                }
            }, {
                key: "remove",
                value: function() {
                    this.detachListeners(), this._contentHandler.beforeDestroy(this._modalContentWrapper), document.body.removeChild(this._modal), this._options.dismiss_fa && Object(r.a)(this._options.dismiss_fa), this._options.on_close && this._options.on_close()
                }
            }, {
                key: "createElements",
                value: function() {
                    this.buildStructure(), this.insertUnderlay(), this._contentHandler.insert()
                }
            }, {
                key: "buildStructure",
                value: function() {
                    this._modalHeaderIcon = document.createElement("span"), this._modalHeaderIcon.className = "".concat(s.a.MODAL_HEADER_ICON, " iris_ic is--24 l-hide"), this._modalHeaderText = document.createElement("span");
                    switch (this._modalClose = document.createElement("button"), this._modalClose.className = s.a.MODAL_CLOSE, this._modalClose.innerHTML = '<svg class="iris_icp iris_icp--gray" viewBox="0 0 16 16"><path class="iris_icp-path" d="M10.8 8l4.9-4.9c.4-.4.4-1 0-1.4L14.3.3c-.4-.4-1-.4-1.4 0L8 5.2 3.1.3c-.4-.4-1-.4-1.4 0L.3 1.7c-.4.4-.4 1 0 1.4L5.2 8 .3 12.9c-.4.4-.4 1 0 1.4l1.4 1.4c.4.4 1 .4 1.4 0L8 10.8l4.9 4.9c.4.4 1 .4 1.4 0l1.4-1.4c.4-.4.4-1 0-1.4L10.8 8z"/></svg>', this._modalHeader = document.createElement("h3"), this._modalHeader.id = "dialog-title", this._modalHeader.className = s.a.MODAL_HEADER, this._modalHeader.appendChild(this._modalHeaderIcon), this._modalHeader.appendChild(this._modalHeaderText), this._modalHeader.appendChild(this._modalClose), this._modalContentWrapper = document.createElement("div"), this._modalContentWrapper.id = "dialog-content", this._modalContentWrapper.className = s.a.MODAL_CONTENT, this._modalBox = document.createElement("div"), this._modalBox.className = s.a.MODAL_BOX, this._options.size) {
                        case s.c.XSMALL:
                            this._modalBox.className += " ".concat(s.a.MODAL_BOX_XSMALL);
                            break;
                        case s.c.SMALL:
                            this._modalBox.className += " ".concat(s.a.MODAL_BOX_SMALL);
                            break;
                        case s.c.LARGE:
                            this._modalBox.className += " ".concat(s.a.MODAL_BOX_LARGE);
                            break;
                        case s.c.REGISTRATION:
                            this._modalBox.className += " ".concat(s.a.MODAL_BOX_REGISTRATION);
                            break;
                        case s.c.VOD_PRICE_PICKER:
                            this._modalBox.className += " ".concat(s.a.MODAL_BOX_VOD_PRICE_PICKER);
                            break;
                        case s.c.COLLECTION:
                            this._modalBox.className += " ".concat(s.a.MODAL_BOX_COLLECTION);
                            break;
                        case s.c.EPISODE_DETAILS:
                            this._modalBox.className += " ".concat(s.a.MODAL_BOX_EPISODE_DETAILS);
                            break;
                        case s.c.MEDIUM:
                    }
                    switch (this._options.wrapper_classname && (this._modalBox.className += " ".concat(this._options.wrapper_classname)), this._modalBox.appendChild(this._modalHeader), this._modalBox.appendChild(this._modalContentWrapper), this._modalBox.setAttribute("role", "dialog"), this._modalBox.setAttribute("aria-labelledby", "dialog-title"), this._modalBox.setAttribute("aria-describedby", "dialog-content"), this._modalBox.setAttribute("tabindex", "-1"), this._options.iframe_hijack && (this._options.hide_header = !0, this._options.content_flush = !0, this._modalBox.classList.add(s.a.MODAL_BOX_IFRAME_HIJACK), this._modalContentWrapper.classList.add(s.a.MODAL_CONTENT_IFRAME_HIJACK), this._modalClose.classList.add(s.a.MODAL_CLOSE_IFRAME_HIJACK), this._modalBox.appendChild(this._modalClose)), this._options.hide_header && this._modalHeader.classList.add(s.a.MODAL_HEADER_HIDE), this._options.center_header && this._modalHeader.classList.add("l-text-center"), this._options.content_flush && (this._modalContentWrapper.className += " ".concat(s.a.MODAL_CONTENT_FLUSH)), this._modalUnderlay = document.createElement("div"), this._modalUnderlay.className = s.a.MODAL_UNDERLAY, this._modalWrapper = document.createElement("div"), this._modalWrapper.className = s.a.MODAL_WRAPPER, this._options.position) {
                        case s.b.RIGHT:
                            this._modalWrapper.className += " ".concat(s.a.MODAL_BOX_RIGHT);
                            break;
                        case s.b.CENTER:
                    }
                    this._modalWrapper.appendChild(this._modalUnderlay), this._modal = document.createElement("div"), this._modal.className = s.a.MODAL, this._modal.appendChild(this._modalWrapper)
                }
            }, {
                key: "insertUnderlay",
                value: function() {
                    if (this._options.body_lock) {
                        var t = "-" + document.body.scrollTop + "px";
                        document.body.classList.add(s.a.MODAL_BODY_SCROLL_LOCK), document.body.style.top = t
                    }
                    document.body.appendChild(this._modal), this.fadeIn(this._modalWrapper)
                }
            }, {
                key: "insertBox",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this._modalWrapper.appendChild(this._modalBox), t ? this.removeFadeIn(this._modalBox) : this.fadeIn(this._modalBox), this._modalBox.focus()
                }
            }, {
                key: "showLoader",
                value: function() {
                    this.showingLoader = !0, this._modalLoader = document.createElement("div"), this._modalLoader.className = "iris_modal-throbber iris_throbber", this._modalLoader.innerHTML = '<div class="iris_throbber-dot iris_throbber-dot--blue"></div><div class="iris_throbber-dot iris_throbber-dot--green"></div><div class="iris_throbber-dot iris_throbber-dot--red"></div>', this._modalWrapper.appendChild(this._modalLoader)
                }
            }, {
                key: "hideLoader",
                value: function() {
                    this.showingLoader = !1, this._modalWrapper.contains(this._modalLoader) && this._modalWrapper.removeChild(this._modalLoader)
                }
            }, {
                key: "showModalBox",
                value: function() {
                    this._modalBox.classList.remove(s.a.MODAL_BOX_HIDE)
                }
            }, {
                key: "hideModalBox",
                value: function() {
                    this._modalBox.classList.add(s.a.MODAL_BOX_HIDE)
                }
            }, {
                key: "fadeIn",
                value: function(t) {
                    t.classList.add("iris_modal--fade-in")
                }
            }, {
                key: "removeFadeIn",
                value: function(t) {
                    t.classList.remove("iris_modal--fade-in")
                }
            }, {
                key: "fadeOut",
                value: function(t) {
                    return new Promise(function(e, n) {
                        t.classList.add("iris_modal--fade-out"), t.addEventListener("animationend", function() {
                            e()
                        }), t.addEventListener("webkitAnimationEnd", function() {
                            e()
                        })
                    })
                }
            }, {
                key: "handleClickClose",
                value: function() {
                    this.onCloseCallback()
                }
            }, {
                key: "handleClickUnderlay",
                value: function() {
                    this.onCloseCallback()
                }
            }, {
                key: "handleTouchmoveUnderlay",
                value: function(t) {
                    t.preventDefault()
                }
            }, {
                key: "handleKeyup",
                value: function(t) {
                    t.keyCode === a.a.ESC && (t.preventDefault(), this.onCloseCallback())
                }
            }, {
                key: "attachListeners",
                value: function() {
                    this._modalClose.addEventListener("click", this.clickCloseFunc), this._modalUnderlay.addEventListener("click", this.clickUnderlayFunc), this._modalUnderlay.addEventListener("touchmove", this.touchmoveUnderlayFunc), document.body.addEventListener("keyup", this.keyupFunc)
                }
            }, {
                key: "detachListeners",
                value: function() {
                    this._modalClose.removeEventListener("click", this.clickCloseFunc), this._modalUnderlay.removeEventListener("click", this.clickUnderlayFunc), this._modalUnderlay.removeEventListener("touchmove", this.touchmoveUnderlayFunc), document.body.removeEventListener("keyup", this.keyupFunc)
                }
            }]) && l(e.prototype, n), o && l(e, o), t
        }();
    e.a = d
}, function(t, e, n) {
    "use strict";
    var o = n(0),
        i = n(1);

    function r(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }
    var a = function() {
        function t(e) {
            if (function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), !(e instanceof i.a)) throw new Error(o.d.MODAL);
            this._parentModal = e, this.validateOptions()
        }
        var e, n, a;
        return e = t, (n = [{
            key: "validateOptions",
            value: function() {
                if (!this._parentModal._options.content) throw new Error(o.d.CONTENT)
            }
        }, {
            key: "insert",
            value: function() {
                this.getAndInsertAll(), this._parentModal.insertBox(), this._parentModal.onModalLoadedCallback && this._parentModal.onModalLoadedCallback()
            }
        }, {
            key: "update",
            value: function() {
                this.getAndInsertAll()
            }
        }, {
            key: "getAndInsertAll",
            value: function() {
                this.getIcon(), this.getTitle(), this.getContent(), this.insertIcon(), this.insertTitle(), this.insertContent()
            }
        }, {
            key: "getIcon",
            value: function() {
                this._icon = this._parentModal._options.icon
            }
        }, {
            key: "getTitle",
            value: function() {
                this._title = this._parentModal._options.title
            }
        }, {
            key: "getContent",
            value: function() {
                this._content = this._parentModal._options.content
            }
        }, {
            key: "insertIcon",
            value: function() {
                this._icon && (this._parentModal._modalHeaderIcon.innerHTML = this._icon, this._parentModal._modalHeaderIcon.classList.remove("l-hide"))
            }
        }, {
            key: "insertTitle",
            value: function() {
                this._title && (this._parentModal._modalHeaderText.textContent = this._title)
            }
        }, {
            key: "insertContent",
            value: function() {}
        }, {
            key: "beforeDestroy",
            value: function() {}
        }]) && r(e.prototype, n), a && r(e, a), t
    }();
    e.a = a
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    "use strict";
    var o = n(0),
        i = n(14),
        r = n(2);

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function s(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function l(t, e, n) {
        return (l = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
            var o = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = c(t)););
                return t
            }(t, e);
            if (o) {
                var i = Object.getOwnPropertyDescriptor(o, e);
                return i.get ? i.get.call(n) : i.value
            }
        })(t, e, n || t)
    }

    function c(t) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function u(t, e) {
        return (u = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function d(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    var f = "data-modal-bucket",
        h = "data-modal-content",
        p = function(t) {
            function e(t) {
                var n, o, i, r, s, l;
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), o = this, i = c(e).call(this, t), n = !i || "object" !== a(i) && "function" != typeof i ? d(o) : i, r = d(d(n)), l = function(t) {
                    var e = t.target.getAttribute(f),
                        o = t.target.getAttribute(h);
                    e && o && (t.preventDefault(), n._parentModal._options.content = n.constructUrl(o), n.update(!0))
                }, (s = "maybeReplaceModalContents") in r ? Object.defineProperty(r, s, {
                    value: l,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[s] = l, n._stylesLoadedCount = 0, n._stylesCount = 0, n
            }
            var n, p, _;
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && u(t, e)
            }(e, r["a"]), n = e, (p = [{
                key: "validateOptions",
                value: function() {
                    if (l(c(e.prototype), "validateOptions", this).call(this), "string" != typeof this._parentModal._options.content) throw new Error(o.d.STRING)
                }
            }, {
                key: "insert",
                value: function() {
                    var t = this;
                    this._parentModal.showLoader(), this.getIcon(), this.getTitle(), this.getContent().then(function() {
                        t.insertIcon(), t.insertTitle(), t.insertContent(), t._parentModal.onModalLoadedCallback && t._parentModal.onModalLoadedCallback()
                    }), this._parentModal._modalBox.addEventListener("click", this.maybeReplaceModalContents)
                }
            }, {
                key: "constructUrl",
                value: function(t) {
                    var e = -1 === t.indexOf("?") ? "?" : "&";
                    return "".concat(t).concat(e, "modal=new")
                }
            }, {
                key: "update",
                value: function() {
                    var t = this;
                    arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (this._parentModal.showingLoader = !0, setTimeout(function() {
                        t._parentModal.showingLoader && t._parentModal.showLoader()
                    }, 1e3)), this.getIcon(), this.getTitle(), this.getContent().then(function() {
                        t.insertContent(function() {
                            t.insertIcon(), t.insertTitle()
                        }, !0)
                    })
                }
            }, {
                key: "getContent",
                value: function() {
                    var t = this;
                    return new Promise(function(e) {
                        t.getAjaxContent(t._parentModal._options.content, t._parentModal._options.post_data).then(function(n) {
                            n.title && (t._title = n.title), t._content = n.content, t._scripts = n.scripts, t._styles = n.styles, e()
                        })
                    })
                }
            }, {
                key: "insertContent",
                value: function() {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (this._styles && this._styles.length) {
                        this._stylesCount = this._styles.length, this.appendStyles(this._styles);
                        ! function o() {
                            t._stylesLoadedCount === t._stylesCount ? setTimeout(function() {
                                return o()
                            }, 20) : (e(), t.showModalBox(n))
                        }()
                    } else e(), this.showModalBox(n)
                }
            }, {
                key: "showModalBox",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this._isShowing && !t || (this._isShowing = !0, this._parentModal.hideLoader(), this._parentModal.insertBox(t), this._parentModal._modalContentWrapper.innerHTML = this._content, this.appendScripts(this._scripts))
                }
            }, {
                key: "appendScripts",
                value: function() {
                    for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = 0; e < t.length; e++) {
                        var n = document.createElement("script");
                        n.setAttribute("src", t[e]), this._parentModal._modal.appendChild(n)
                    }
                }
            }, {
                key: "countStylesLoaded",
                value: function() {
                    this._stylesLoadedCount++, this._stylesLoadedCount === this._stylesCount && this.showModalBox()
                }
            }, {
                key: "appendStyles",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    this._stylesCount = t.length;
                    for (var e = 0; e < t.length; e++) {
                        var n = document.createElement("link");
                        n.setAttribute("rel", "stylesheet"), n.setAttribute("href", t[e]), n.addEventListener("load", this.countStylesLoaded.bind(this)), this._parentModal._modal.appendChild(n)
                    }
                }
            }, {
                key: "getAjaxContent",
                value: function(t, e) {
                    return new Promise(function(n) {
                        var o = new XMLHttpRequest;
                        e ? (o.open("POST", t), o.withCredentials = !0, o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), o.send(Object(i.a)(e))) : (o.open("GET", t), o.withCredentials = !0, o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.send()), o.addEventListener("load", function() {
                            var t = JSON.parse(o.responseText);
                            if (200 === o.status) n(t);
                            else {
                                var e = {
                                    title: "Error",
                                    content: t.display_message
                                };
                                n(e)
                            }
                        })
                    })
                }
            }, {
                key: "beforeDestroy",
                value: function() {
                    this.toggleModal && this._parentModal._modalBox.removeEventListener("click", this.replaceModalContents)
                }
            }]) && s(n.prototype, p), _ && s(n, _), e
        }();
    e.a = p
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(6),
        i = (n.n(o), n(10));
    vimeo.Modal = new i.a
}, function(t, e, n) {
    (function(o, i) {
        var r, a, s, l;
        /*! Native Promise Only
            v0.8.1 (c) Kyle Simpson
            MIT License: http://getify.mit-license.org
        */
        /*! Native Promise Only
            v0.8.1 (c) Kyle Simpson
            MIT License: http://getify.mit-license.org
        */
        a = "Promise", l = function() {
            "use strict";
            var t, e, n, o = Object.prototype.toString,
                r = void 0 !== i ? function(t) {
                    return i(t)
                } : setTimeout;
            try {
                Object.defineProperty({}, "x", {}), t = function(t, e, n, o) {
                    return Object.defineProperty(t, e, {
                        value: n,
                        writable: !0,
                        configurable: !1 !== o
                    })
                }
            } catch (e) {
                t = function(t, e, n) {
                    return t[e] = n, t
                }
            }

            function a(t, o) {
                n.add(t, o), e || (e = r(n.drain))
            }

            function s(t) {
                var e, n = typeof t;
                return null == t || "object" != n && "function" != n || (e = t.then), "function" == typeof e && e
            }

            function l() {
                for (var t = 0; t < this.chain.length; t++) c(this, 1 === this.state ? this.chain[t].success : this.chain[t].failure, this.chain[t]);
                this.chain.length = 0
            }

            function c(t, e, n) {
                var o, i;
                try {
                    !1 === e ? n.reject(t.msg) : (o = !0 === e ? t.msg : e.call(void 0, t.msg)) === n.promise ? n.reject(TypeError("Promise-chain cycle")) : (i = s(o)) ? i.call(o, n.resolve, n.reject) : n.resolve(o)
                } catch (t) {
                    n.reject(t)
                }
            }

            function u(t) {
                var e = this;
                e.triggered || (e.triggered = !0, e.def && (e = e.def), e.msg = t, e.state = 2, e.chain.length > 0 && a(l, e))
            }

            function d(t, e, n, o) {
                for (var i = 0; i < e.length; i++) ! function(i) {
                    t.resolve(e[i]).then(function(t) {
                        n(i, t)
                    }, o)
                }(i)
            }

            function f(t) {
                this.def = t, this.triggered = !1
            }

            function h(t) {
                if ("function" != typeof t) throw TypeError("Not a function");
                if (0 !== this.__NPO__) throw TypeError("Not a promise");
                this.__NPO__ = 1;
                var e = new function(t) {
                    this.promise = t, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0
                }(this);
                this.then = function(t, n) {
                    var o = {
                        success: "function" != typeof t || t,
                        failure: "function" == typeof n && n
                    };
                    return o.promise = new this.constructor(function(t, e) {
                        if ("function" != typeof t || "function" != typeof e) throw TypeError("Not a function");
                        o.resolve = t, o.reject = e
                    }), e.chain.push(o), 0 !== e.state && a(l, e), o.promise
                }, this.catch = function(t) {
                    return this.then(void 0, t)
                };
                try {
                    t.call(void 0, function(t) {
                        (function t(e) {
                            var n, o = this;
                            if (!o.triggered) {
                                o.triggered = !0, o.def && (o = o.def);
                                try {
                                    (n = s(e)) ? a(function() {
                                        var i = new f(o);
                                        try {
                                            n.call(e, function() {
                                                t.apply(i, arguments)
                                            }, function() {
                                                u.apply(i, arguments)
                                            })
                                        } catch (t) {
                                            u.call(i, t)
                                        }
                                    }): (o.msg = e, o.state = 1, o.chain.length > 0 && a(l, o))
                                } catch (t) {
                                    u.call(new f(o), t)
                                }
                            }
                        }).call(e, t)
                    }, function(t) {
                        u.call(e, t)
                    })
                } catch (t) {
                    u.call(e, t)
                }
            }
            n = function() {
                var t, n, o;
                return {
                    add: function(e, i) {
                        o = new function(t, e) {
                            this.fn = t, this.self = e, this.next = void 0
                        }(e, i), n ? n.next = o : t = o, n = o, o = void 0
                    },
                    drain: function() {
                        var o = t;
                        for (t = n = e = void 0; o;) o.fn.call(o.self), o = o.next
                    }
                }
            }();
            var p = t({}, "constructor", h, !1);
            return h.prototype = p, t(p, "__NPO__", 0, !1), t(h, "resolve", function(t) {
                return t && "object" == typeof t && 1 === t.__NPO__ ? t : new this(function(e, n) {
                    if ("function" != typeof e || "function" != typeof n) throw TypeError("Not a function");
                    e(t)
                })
            }), t(h, "reject", function(t) {
                return new this(function(e, n) {
                    if ("function" != typeof e || "function" != typeof n) throw TypeError("Not a function");
                    n(t)
                })
            }), t(h, "all", function(t) {
                var e = this;
                return "[object Array]" != o.call(t) ? e.reject(TypeError("Not an array")) : 0 === t.length ? e.resolve([]) : new e(function(n, o) {
                    if ("function" != typeof n || "function" != typeof o) throw TypeError("Not a function");
                    var i = t.length,
                        r = Array(i),
                        a = 0;
                    d(e, t, function(t, e) {
                        r[t] = e, ++a === i && n(r)
                    }, o)
                })
            }), t(h, "race", function(t) {
                var e = this;
                return "[object Array]" != o.call(t) ? e.reject(TypeError("Not an array")) : new e(function(n, o) {
                    if ("function" != typeof n || "function" != typeof o) throw TypeError("Not a function");
                    d(e, t, function(t, e) {
                        n(e)
                    }, o)
                })
            }), h
        }, (s = void 0 !== o ? o : this)[a] = s[a] || l(), void 0 !== t && t.exports ? t.exports = s[a] : void 0 === (r = function() {
            return s[a]
        }.call(e, n, e, t)) || (t.exports = r)
    }).call(e, n(3), n(7).setImmediate)
}, function(t, e, n) {
    (function(t) {
        var o = void 0 !== t && t || "undefined" != typeof self && self || window,
            i = Function.prototype.apply;

        function r(t, e) {
            this._id = t, this._clearFn = e
        }
        e.setTimeout = function() {
            return new r(i.call(setTimeout, o, arguments), clearTimeout)
        }, e.setInterval = function() {
            return new r(i.call(setInterval, o, arguments), clearInterval)
        }, e.clearTimeout = e.clearInterval = function(t) {
            t && t.close()
        }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() {
            this._clearFn.call(o, this._id)
        }, e.enroll = function(t, e) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = e
        }, e.unenroll = function(t) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
        }, e._unrefActive = e.active = function(t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 && (t._idleTimeoutId = setTimeout(function() {
                t._onTimeout && t._onTimeout()
            }, e))
        }, n(8), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
    }).call(e, n(3))
}, function(t, e, n) {
    (function(t, e) {
        ! function(t, n) {
            "use strict";
            if (!t.setImmediate) {
                var o, i, r, a, s, l = 1,
                    c = {},
                    u = !1,
                    d = t.document,
                    f = Object.getPrototypeOf && Object.getPrototypeOf(t);
                f = f && f.setTimeout ? f : t, "[object process]" === {}.toString.call(t.process) ? o = function(t) {
                    e.nextTick(function() {
                        p(t)
                    })
                } : ! function() {
                    if (t.postMessage && !t.importScripts) {
                        var e = !0,
                            n = t.onmessage;
                        return t.onmessage = function() {
                            e = !1
                        }, t.postMessage("", "*"), t.onmessage = n, e
                    }
                }() ? t.MessageChannel ? ((r = new MessageChannel).port1.onmessage = function(t) {
                    p(t.data)
                }, o = function(t) {
                    r.port2.postMessage(t)
                }) : d && "onreadystatechange" in d.createElement("script") ? (i = d.documentElement, o = function(t) {
                    var e = d.createElement("script");
                    e.onreadystatechange = function() {
                        p(t), e.onreadystatechange = null, i.removeChild(e), e = null
                    }, i.appendChild(e)
                }) : o = function(t) {
                    setTimeout(p, 0, t)
                } : (a = "setImmediate$" + Math.random() + "$", s = function(e) {
                    e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(a) && p(+e.data.slice(a.length))
                }, t.addEventListener ? t.addEventListener("message", s, !1) : t.attachEvent("onmessage", s), o = function(e) {
                    t.postMessage(a + e, "*")
                }), f.setImmediate = function(t) {
                    "function" != typeof t && (t = new Function("" + t));
                    for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                    var i = {
                        callback: t,
                        args: e
                    };
                    return c[l] = i, o(l), l++
                }, f.clearImmediate = h
            }

            function h(t) {
                delete c[t]
            }

            function p(t) {
                if (u) setTimeout(p, 0, t);
                else {
                    var e = c[t];
                    if (e) {
                        u = !0;
                        try {
                            ! function(t) {
                                var e = t.callback,
                                    o = t.args;
                                switch (o.length) {
                                    case 0:
                                        e();
                                        break;
                                    case 1:
                                        e(o[0]);
                                        break;
                                    case 2:
                                        e(o[0], o[1]);
                                        break;
                                    case 3:
                                        e(o[0], o[1], o[2]);
                                        break;
                                    default:
                                        e.apply(n, o)
                                }
                            }(e)
                        } finally {
                            h(t), u = !1
                        }
                    }
                }
            }
        }("undefined" == typeof self ? void 0 === t ? this : t : self)
    }).call(e, n(3), n(9))
}, function(t, e) {
    var n, o, i = t.exports = {};

    function r() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === r || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
        try {
            return n(t, 0)
        } catch (e) {
            try {
                return n.call(null, t, 0)
            } catch (e) {
                return n.call(this, t, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : r
        } catch (t) {
            n = r
        }
        try {
            o = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (t) {
            o = a
        }
    }();
    var l, c = [],
        u = !1,
        d = -1;

    function f() {
        u && l && (u = !1, l.length ? c = l.concat(c) : d = -1, c.length && h())
    }

    function h() {
        if (!u) {
            var t = s(f);
            u = !0;
            for (var e = c.length; e;) {
                for (l = c, c = []; ++d < e;) l && l[d].run();
                d = -1, e = c.length
            }
            l = null, u = !1,
                function(t) {
                    if (o === clearTimeout) return clearTimeout(t);
                    if ((o === a || !o) && clearTimeout) return o = clearTimeout, clearTimeout(t);
                    try {
                        o(t)
                    } catch (e) {
                        try {
                            return o.call(null, t)
                        } catch (e) {
                            return o.call(this, t)
                        }
                    }
                }(t)
        }
    }

    function p(t, e) {
        this.fun = t, this.array = e
    }

    function _() {}
    i.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        c.push(new p(t, e)), 1 !== c.length || u || s(h)
    }, p.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = _, i.addListener = _, i.once = _, i.off = _, i.removeListener = _, i.removeAllListeners = _, i.emit = _, i.prependListener = _, i.prependOnceListener = _, i.listeners = function(t) {
        return []
    }, i.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, i.cwd = function() {
        return "/"
    }, i.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, i.umask = function() {
        return 0
    }
}, function(t, e, n) {
    "use strict";
    var o = n(1),
        i = n(15),
        r = n(16),
        a = n(4),
        s = n(17),
        l = n(18),
        c = n(19);

    function u(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }
    var d = function() {
        function t() {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.HtmlContentHandler = i.a, this.StringContentHandler = r.a, this.AjaxContentHandler = a.a, this.IframeContentHandler = s.a, this.ReactContentHandler = l.a, this.Icons = c.a, this._modal = null, this.returnData = null, this.resolvePromise = null, this.isShowing = !1, this.onModalLoaded = null, this.onModalLoadedCallback = this.onModalLoadedCallback.bind(this)
        }
        var e, n, d;
        return e = t, (n = [{
            key: "create",
            value: function() {
                var t = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return new Promise(function(n) {
                    t._modal && t._modal.remove(), t.returnData = null, t.resolvePromise = n, t._modal = new o.a(e, t.destroy.bind(t), t.onModalLoadedCallback), t.isShowing = !0
                })
            }
        }, {
            key: "updateTitle",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                this._modal && null !== t && this._modal.updateTitle(t)
            }
        }, {
            key: "update",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this._modal && this._modal.update(t)
            }
        }, {
            key: "destroy",
            value: function() {
                this._modal && (this.resolvePromise(this.returnData), this.returnData = null, this._modal.close(), this._modal = null, this.isShowing = !1)
            }
        }, {
            key: "onModalLoadedCallback",
            value: function() {
                this.onModalLoaded && this.onModalLoaded()
            }
        }, {
            key: "isShowing",
            get: function() {
                return this._isShowing
            },
            set: function(t) {
                this._isShowing = t
            }
        }, {
            key: "returnData",
            get: function() {
                return this._returnData
            },
            set: function(t) {
                this._returnData = t
            }
        }]) && u(e.prototype, n), d && u(e, d), t
    }();
    e.a = d
}, function(t, e, n) {
    "use strict";
    t.exports = Object.assign || function(t, e) {
        for (var n, o, i = function(t) {
                if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(t)
            }(t), r = 1; r < arguments.length; r++) {
            n = arguments[r], o = Object.keys(Object(n));
            for (var a = 0; a < o.length; a++) i[o[a]] = n[o[a]]
        }
        return i
    }
}, function(t, e, n) {
    "use strict";

    function o(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            var n = [],
                o = !0,
                i = !1,
                r = void 0;
            try {
                for (var a, s = t[Symbol.iterator](); !(o = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); o = !0);
            } catch (t) {
                i = !0, r = t
            } finally {
                try {
                    o || null == s.return || s.return()
                } finally {
                    if (i) throw r
                }
            }
            return n
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    e.a = function(t) {
        var e = "/ablincoln/fatal_attraction?";
        if (!t) throw new Error("Invalid attribute", t);
        var n = [];
        t.split("|").forEach(function(t) {
            var e = o(t.split(":"), 2),
                i = e[0],
                r = e[1];
            i && r && n.push(encodeURIComponent(i) + "=" + encodeURIComponent(r))
        }), e += n.join("&"), "function" != typeof navigator.sendBeacon ? (new Image).src = e : navigator.sendBeacon(e)
    }
}, function(t, e, n) {
    "use strict";
    e.a = {
        BACKSPACE: 8,
        ENTER: 13,
        TAB: 9,
        UP: 38,
        DOWN: 40,
        ESC: 27,
        F: 70
    }
}, function(t, e, n) {
    "use strict";
    e.a = function t(e, n) {
        var o, i = [];
        for (var r in e)
            if (e.hasOwnProperty(r)) {
                var a = e[r];
                switch (n && (r = n + "[" + r + "]"), Object.prototype.toString.call(a)) {
                    case "[object Object]":
                        o = t(a, r);
                        break;
                    case "[object Array]":
                        var s = {};
                        if (0 === a.length) a = null;
                        else {
                            for (var l = 0, c = a.length; l < c; l++) s[l] = a[l];
                            o = t(s, r)
                        }
                        break;
                    default:
                        o = r + "=" + encodeURIComponent(a)
                }
                null !== a && i.push(o)
            } return i.join("&")
    }
}, function(t, e, n) {
    "use strict";
    var o = n(0),
        i = n(2);
    n(1);

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function s(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function l(t, e, n) {
        return (l = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
            var o = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = c(t)););
                return t
            }(t, e);
            if (o) {
                var i = Object.getOwnPropertyDescriptor(o, e);
                return i.get ? i.get.call(n) : i.value
            }
        })(t, e, n || t)
    }

    function c(t) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function u(t, e) {
        return (u = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var d = function(t) {
        function e() {
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), s(this, c(e).apply(this, arguments))
        }
        var n, r, d;
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && u(t, e)
        }(e, i["a"]), n = e, (r = [{
            key: "validateOptions",
            value: function() {
                if (l(c(e.prototype), "validateOptions", this).call(this), !this._parentModal._options.title) throw new Error(o.d.TITLE);
                if (!this._parentModal._options.content.nodeName) throw new Error(o.d.HTML)
            }
        }, {
            key: "insertContent",
            value: function() {
                this._parentModal._modalContentWrapper.appendChild(this._content)
            }
        }]) && a(n.prototype, r), d && a(n, d), e
    }();
    e.a = d
}, function(t, e, n) {
    "use strict";
    var o = n(0),
        i = n(2);
    n(1);

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function s(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function l(t, e, n) {
        return (l = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
            var o = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = c(t)););
                return t
            }(t, e);
            if (o) {
                var i = Object.getOwnPropertyDescriptor(o, e);
                return i.get ? i.get.call(n) : i.value
            }
        })(t, e, n || t)
    }

    function c(t) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function u(t, e) {
        return (u = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var d = function(t) {
        function e() {
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), s(this, c(e).apply(this, arguments))
        }
        var n, r, d;
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && u(t, e)
        }(e, i["a"]), n = e, (r = [{
            key: "validateOptions",
            value: function() {
                if (l(c(e.prototype), "validateOptions", this).call(this), !this._parentModal._options.title) throw new Error(o.d.TITLE);
                if ("string" != typeof this._parentModal._options.content) throw new Error(o.d.STRING)
            }
        }, {
            key: "insertContent",
            value: function() {
                this._parentModal._modalContentWrapper.textContent = this._content
            }
        }]) && a(n.prototype, r), d && a(n, d), e
    }();
    e.a = d
}, function(t, e, n) {
    "use strict";
    var o = n(0),
        i = n(2);
    n(1);

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function s(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function l(t, e, n) {
        return (l = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
            var o = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = c(t)););
                return t
            }(t, e);
            if (o) {
                var i = Object.getOwnPropertyDescriptor(o, e);
                return i.get ? i.get.call(n) : i.value
            }
        })(t, e, n || t)
    }

    function c(t) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function u(t, e) {
        return (u = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var d = function(t) {
        function e() {
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), s(this, c(e).apply(this, arguments))
        }
        var n, r, d;
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && u(t, e)
        }(e, i["a"]), n = e, (r = [{
            key: "validateOptions",
            value: function() {
                if (l(c(e.prototype), "validateOptions", this).call(this), !this._parentModal._options.title) throw new Error(o.d.TITLE);
                if ("string" != typeof this._parentModal._options.content) throw new Error(o.d.STRING)
            }
        }, {
            key: "insertContent",
            value: function() {
                var t = this,
                    e = document.createElement("iframe");
                e.onload = function() {
                    t._parentModal.showModalBox(), t._parentModal.hideLoader()
                }, e.setAttribute("src", this._parentModal._options.content), this._parentModal.showLoader(), this._parentModal.hideModalBox(), this._parentModal._modalContentWrapper.appendChild(e)
            }
        }]) && a(n.prototype, r), d && a(n, d), e
    }();
    e.a = d
}, function(t, e, n) {
    "use strict";
    var o = n(0),
        i = n(2);
    n(1);

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function s(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function l(t, e, n) {
        return (l = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
            var o = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = c(t)););
                return t
            }(t, e);
            if (o) {
                var i = Object.getOwnPropertyDescriptor(o, e);
                return i.get ? i.get.call(n) : i.value
            }
        })(t, e, n || t)
    }

    function c(t) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function u(t, e) {
        return (u = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var d = function(t) {
        function e() {
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), s(this, c(e).apply(this, arguments))
        }
        var n, r, d;
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && u(t, e)
        }(e, i["a"]), n = e, (r = [{
            key: "_getReactRenderer",
            value: function() {
                return window.ReactDOM && window.ReactDOM.render ? window.ReactDOM : window.React && window.React.render ? window.React : null
            }
        }, {
            key: "validateOptions",
            value: function() {
                l(c(e.prototype), "validateOptions", this).call(this);
                var t = this._parentModal._options;
                if (!t.title && !t.hide_header) throw new Error(o.d.TITLE);
                if (!this._getReactRenderer()) throw new Error(o.d.REACT_PLUGIN)
            }
        }, {
            key: "insertIcon",
            value: function() {
                this._icon && (window.ReactDOM.render(this._icon, this._parentModal._modalHeaderIcon), this._parentModal._modalHeaderIcon.classList.remove("l-hide"))
            }
        }, {
            key: "insertTitle",
            value: function() {
                this._title && "string" == typeof this._title ? l(c(e.prototype), "insertTitle", this).call(this) : this._title && this._getReactRenderer().render(this._title, this._parentModal._modalHeaderText)
            }
        }, {
            key: "insertContent",
            value: function() {
                this._getReactRenderer().render(this._content, this._parentModal._modalContentWrapper)
            }
        }, {
            key: "beforeDestroy",
            value: function(t) {
                this._getReactRenderer().unmountComponentAtNode(t)
            }
        }]) && a(n.prototype, r), d && a(n, d), e
    }();
    e.a = d
}, function(t, e, n) {
    "use strict";
    e.a = {
        Share: '<svg viewBox="0 0 24 24"><path d="M0 14l6.6 4.1L16.5 9 9 19.6V23l2-2 5 3 8-24"/></svg>'
    }
}]);