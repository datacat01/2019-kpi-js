/*! fastspring-builder 0.7.4 */ ! function() {
    "use strict";

    function a(a) {
        if ("undefined" == typeof a || null === a) return !0;
        for (var b in a)
            if (a.hasOwnProperty(b)) return !1;
        return JSON.stringify(a) === JSON.stringify({})
    }

    function b(a) {
        if (h.debug || d.storage.getItem("debug")) {
            var b = Array.prototype.slice.call(arguments);
            "string" == typeof a && b.unshift("[FastSpring API] " + b.shift()), console.log.apply(console, b)
        }
    }

    function c(a) {
        var b = Array.prototype.slice.call(arguments);
        "string" == typeof a && b.unshift("[FastSpring API] " + b.shift()), (console.error || console.log).apply(console, b)
    }
    var d = {
            merge: function(a, b) {
                for (var c in b)
                    if (b.hasOwnProperty(c)) try {
                        "products" === c ? (a.products = a.products || [], a.products = a.products.concat(b.products)) : "object" == typeof a[c] ? a[c] = d.merge(a[c], b[c]) : a[c] = b[c]
                    } catch (e) {
                        a[c] = b[c]
                    }
                return a
            },
            returnMeaningful: function(a) {
                a.reverse();
                var b = {},
                    c = [];
                return a.forEach(function(a) {
                    b.hasOwnProperty(a.path) || (b[a.path] = !0, c.push(a))
                }), c
            },
            runCallback: function(a, b) {
                "function" == typeof a && a.apply(null, b)
            }
        },
        e = !0;
    try {
        window.localStorage.setItem("fs", "fs"), window.localStorage.removeItem("fs")
    } catch (f) {
        e = !1
    }
    Object.defineProperty(d, "storage", {
        get: function a() {
            return e && "localStorage" in window ? window.localStorage : ("undefined" == typeof a.storage && (a.storage = {
                _data: {},
                setItem: function(a, b) {
                    return this._data[a] = String(b)
                },
                getItem: function(a) {
                    return this._data.hasOwnProperty(a) ? this._data[a] : void 0
                },
                removeItem: function(a) {
                    return delete this._data[a]
                },
                clear: function() {
                    return this._data = {}
                }
            }), a.storage)
        }
    });
    var g = {
            attach: function() {
                this.spinSVG.style.position = "absolute", this.spinSVG.style.top = "50%", this.spinSVG.style.marginTop = "-50px", this.spinSVG.style.left = "50%", this.spinSVG.style.marginLeft = "-50px", this.spinSVG.style.zIndex = "100000000000000", this.spinSVG.style.display = "block", i.canvas.appendChild(this.spinSVG)
            },
            remove: function() {
                "undefined" != typeof this.spinSVG && (this.spinSVG.style.display = "none")
            }
        },
        h = {
            assignAttributeValues: function(a) {
                this.animateFader = a.getAttribute("data-animate-fader") || "true", this.beforeRequests = a.getAttribute("data-before-requests-callback"), this.afterRequests = a.getAttribute("data-after-requests-callback"), this.beforeMarkup = a.getAttribute("data-before-markup-callback"), this.afterMarkup = a.getAttribute("data-after-markup-callback"), this.decorateCallback = a.getAttribute("data-decorate-callback"), this.dataCallback = a.getAttribute("data-data-callback"), this.errorCallback = a.getAttribute("data-error-callback"), this.markupHelpers = a.getAttribute("data-markup-helpers-callback"), this.popupClosed = a.getAttribute("data-popup-closed"), this.popupWebhookReceived = a.getAttribute("data-popup-webhook-received"), this.popupEventReceived = a.getAttribute("data-popup-event-received"), this.storefront = a.getAttribute("data-storefront"), this.debug = "true" === a.getAttribute("data-debug"), this.aKey = a.getAttribute("data-access-key"), this.continuous = "true" === a.getAttribute("data-continuous")
            },
            init: function() {
                this.assignAttributeValues(l), this.checkoutMode = "redirect", null === this.storefront.match(/pinhole/) && null === this.storefront.match(/popup/) || (this.checkoutMode = "popup"), null !== this.storefront.match(/inapp/) && (this.checkoutMode = "inapp"), b("Checkout mode:", this.checkoutMode), this.testMode = !1, /\.test\./.test(this.storefront) ? this.testMode = !0 : /(localhost:[^?]*\*)/.test(this.storefront) && (this.testMode = !0), b("Test mode:", this.testMode), null !== this.aKey && b("Access key:", this.aKey), "popup" === this.checkoutMode && (g.spinSVG = document.createElement("img"), g.spinSVG.src = "https://d1f8f9xcsvx3ha.cloudfront.net/pinhole/spin.svg"), this.sessionID = null, this.data = {}, this.finishSilently = !1, this.builder = "/builder", this.requests = [], "inapp" !== this.checkoutMode && i.checkURL(), this.parseInput(m), n = !0
            },
            continuousGet: function() {
                b(" -> Checking for existing session");
                var a = null,
                    c = d.storage.getItem("fscSerial-" + this.storefront);
                if (c && (c = JSON.parse(c), c.hasOwnProperty("session") && c.hasOwnProperty("expires"))) {
                    var e = (new Date).getTime();
                    c.expires > e ? (a = c.session, b(" (+) Serial is still valid")) : b(" (-) Serial is expired")
                }
                return a
            },
            continuousStore: function(a) {
                b(" <- Writing to storage:", a), d.storage.setItem("fscSerial-" + this.storefront, JSON.stringify(a))
            },
            continuousReset: function() {
                b(" <- Resetting session"), d.storage.removeItem("fscSerial-" + this.storefront), this.sessionID = null
            },
            parseInput: function(a, e) {
                var f = this.sanitizeInput(a);
                if (b("Input: ", a, "Sanitized output:", f), a.hasOwnProperty("secure") && (null === this.aKey ? c("No access key found in payload") : a.secure.hasOwnProperty("payload") ? this.testMode ? a.secure.hasOwnProperty("key") ? (f.accessKey = this.aKey, f.secureKey = a.secure.key, f.securePayload = a.secure.payload) : (f.accessKey = this.aKey, d.merge(f, a.secure.payload)) : a.secure.hasOwnProperty("key") ? (f.accessKey = this.aKey, f.secureKey = a.secure.key, f.securePayload = a.secure.payload) : c("No secure key found in payload") : c("No secure payload found in request")), a.hasOwnProperty("authenticate")) {
                    if (b("Found authentication payload", a.authenticate), null === this.aKey) return b("No access key found while authenticating user"), void d.runCallback(e);
                    a.authenticate.hasOwnProperty("key") ? this.authenticateUser(a.authenticate.payload, a.authenticate.key) : this.authenticateUser(a.authenticate.payload)
                }
                if (a.hasOwnProperty("reset") && this.continuousReset(), a.hasOwnProperty("clean") && (p = !0), a.hasOwnProperty("session") ? (this.sessionID = a.session, b("Session found in input:", this.sessionID)) : this.continuous && !this.sessionID && (this.sessionID = this.continuousGet(), b("Continuous mode session:", this.sessionID)), a.hasOwnProperty("checkout"))
                    if ("popup" === h.checkoutMode && i.drawCanvas(), "true" !== a.checkout && "false" !== a.checkout && a.checkout.length > 10) {
                        d.storage.setItem("fscLatestSession-" + this.storefront, a.checkout);
                        var g = "https://" + this.storefront + "/session/" + a.checkout;
                        h.continueCheckoutWithURL(g, e)
                    } else h.checkoutRedirect(f, e);
                else a.hasOwnProperty("authenticate") || this.loadProducts(f, e);
                this.flushChain(), m = {}
            },
            chain: function(a) {
                b(" >> Chaining request:", a), this.requests.push(a)
            },
            flushChain: function() {
                if (b("Is requests chain locked?", h.ajaxInProgress), !h.ajaxInProgress) {
                    if ("function" == typeof window[this.beforeRequests]) {
                        b(" <- Calling ", this.beforeRequests);
                        try {
                            window[this.beforeRequests].call(null)
                        } catch (a) {
                            c("Error in before-requests", a)
                        }
                    }
                    b("Preparing to make requests:", JSON.stringify(this.requests)), this.nextRequest()
                }
            },
            nextRequest: function() {
                var a;
                if ("undefined" != typeof this.requests[0]) a = this.requests.shift(), this.request(a.endpoint, a.method, a.payload, a.hasOwnProperty("skipsession"), a.callback);
                else if (b("Unlocking request chain"), h.ajaxInProgress = !1, "function" == typeof window[this.afterRequests]) {
                    b(" <- Calling ", this.afterRequests);
                    try {
                        window[this.afterRequests]()
                    } catch (d) {
                        c("Error in data-after-requests-callback", d)
                    }
                }
            },
            uninstall: function() {
                this.requests.splice(0, this.requests.length)
            },
            handleData: function(a, e) {
                if (a = this.sanitize(a), "undefined" != typeof this.requests[0]) return b("Running next request"), void d.runCallback(e, [a]);
                if (this.finishSilently) return b("Finishing silently and returning no data"), void d.runCallback(e, [a]);
                if ("function" == typeof window[this.dataCallback]) {
                    b("<- Calling ", this.dataCallback);
                    try {
                        window[this.dataCallback](a)
                    } catch (f) {
                        c("Error in data-callback", f)
                    }
                }
                k.setData(a), d.runCallback(e, [a]), k.process(), this.data = {}
            },
            handleSerial: function(a, c) {
                if (this.sessionID !== a) return this.sessionID = a, this.continuous && (b("Storing session ID for continuity"), this.continuousStore({
                    session: this.sessionID,
                    expires: c
                })), b("New session ID:", this.sessionID), this.sessionID
            },
            sanitize: function(a) {
                return delete a.serial, delete a.expires, h.groupsByProduct = {}, a.groups.forEach(function(a) {
                    a.selectables = !1, a.selectableReplacements = !1, a.selectableAdditions = !1, a.items.forEach(function(b) {
                        b.selectables = !1, b.selectableReplacements = !1, b.selectableAdditions = !1, b.selected || (a.selectables = !0, "add" === a.type && (a.selectableAdditions = !0), "replace" === a.type && (a.selectableReplacements = !0)), h.groupsByProduct[b.path] = this.driver, b.groups.forEach(function(a) {
                            a.items.forEach(function(b) {
                                b.selected || (a.selectables = !0, b.selectables = !0, "replace" === a.type && (a.selectableReplacements = !0))
                            }, a), a.selectables === !0 && (b.selectables = !0), a.selectableReplacements === !0 && (b.selectableReplacements = !0), "options" === a.type && (h.newGroupItemsNamed = {}, h.newGroupItems = [], a.items.forEach(function(a) {
                                h.newGroupItemsNamed[a.path] = a
                            }), h.newGroupItemsNamed[this.path] = this, a.ordering.forEach(function(a) {
                                h.newGroupItems.push(h.newGroupItemsNamed[a])
                            }), a.items = h.newGroupItems, h.newGroupItemsNamed = {}, h.newGroupItems = [])
                        }, b)
                    }, a)
                }), a.groups.forEach(function(a) {
                    a.driverType = "storefront", "add" === a.type && h.groupsByProduct.hasOwnProperty(a.driver) && (a.driverType = "product", a.driverOrigin = h.groupsByProduct[a.driver])
                }), h.groupsByProduct = {}, a
            },
            sanitizeInput: function(a) {
                var b = {};
                return a.hasOwnProperty("coupon") && (b.coupon = a.coupon), a.hasOwnProperty("products") && a.products.length > 0 && (b.items = d.returnMeaningful(a.products)), a.hasOwnProperty("tags") && (b.tags = a.tags), a.hasOwnProperty("paymentContact") && (b.paymentContact = a.paymentContact), a.hasOwnProperty("country") && (b.country = a.country), a.hasOwnProperty("language") && (b.language = a.language), b
            },
            authenticateUser: function(a, c) {
                var d, e;
                if (b("Authenticating user"), this.testMode) d = a, d.accessKey = this.aKey;
                else {
                    if (!c) return void b("No secure key found while authenticating user");
                    d = {
                        securePayload: a,
                        accessKey: this.aKey,
                        secureKey: c
                    }
                }
                e = "https://" + h.storefront + "/account/authenticate", d = {
                    data: JSON.stringify(d)
                }, this.chain({
                    endpoint: e,
                    method: "POST",
                    payload: d,
                    skipsession: !0
                })
            },
            loadProducts: function(c, d) {
                var e, f;
                b(" + Getting products"), f = "https://" + h.storefront + h.builder;
                var g = "POST";
                a(c) ? (e = {}, this.sessionID || (g = "GET")) : e = {
                    put: JSON.stringify(c)
                }, this.chain({
                    endpoint: f,
                    method: g,
                    payload: e,
                    callback: d
                })
            },
            checkoutRedirect: function(a, c) {
                var d, e;
                b(" + Redirecting to checkout"), e = "https://" + h.storefront + h.builder + "/finalize", "popup" !== h.checkoutMode && "inapp" !== h.checkoutMode || (a.origin = document.location.href), d = a ? {
                    put: JSON.stringify(a)
                } : {}, this.chain({
                    endpoint: e,
                    method: "POST",
                    payload: d,
                    callback: c
                })
            },
            request: function(a, e, f, g, j) {
                b("Locking requests chain"), h.ajaxInProgress = !0, this.sessionID && !g && (f.session = this.sessionID);
                var k = this.toQueryString(f);
                b(" > > > Making request to " + a + " (" + e + ") with data:", k);
                try {
                    var l = new XMLHttpRequest;
                    l.open(e, a, !0), l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), l.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01"), l.onerror = function() {
                        c("(!) Error received: ", l.status, l.responseText), h.runErrorCallback(l.status, l.responseText), d.runCallback(j, [!1]), h.nextRequest()
                    }, l.onreadystatechange = function() {
                        4 === l.readyState && (l.status >= 200 && l.status < 400 ? h.successHandler(l, j) : (c("(!) Error: Error received: ", l.status, l.responseText), "popup" === h.checkoutMode && i.destroy(), h.runErrorCallback(l.status, l.responseText), d.runCallback(j, [!1]), h.nextRequest()))
                    }, l.send(k)
                } catch (m) {
                    c("Exception: ", m)
                }
            },
            runErrorCallback: function(a, d) {
                if ("function" == typeof window[h.errorCallback]) {
                    b(" <- Calling ", h.errorCallback);
                    try {
                        window[h.errorCallback](a, d)
                    } catch (e) {
                        c("Error in error-callback", e)
                    }
                }
            },
            successHandler: function(a, c) {
                var e;
                try {
                    e = JSON.parse(a.responseText)
                } catch (f) {
                    return h.runErrorCallback(a.status, a.responseText), d.runCallback(c, [!1, a && a.responseText])
                }
                if (b("Request is OK, returned data: ", e), e.hasOwnProperty("url") && !e.hasOwnProperty("serial")) {
                    d.runCallback(c, [e]), h.nextRequest(), b("Obtained redirection parameter", e.url);
                    var g = e.url;
                    return e.hasOwnProperty("session") && d.storage.setItem("fscLatestSession-" + h.storefront, e.session), void h.continueCheckoutWithURL(g)
                }
                this.handleSerial(e.serial, e.expires), this.handleData(e, c), this.nextRequest()
            },
            toQueryString: function(a) {
                var b = [];
                for (var c in a) a.hasOwnProperty(c) && b.push(c + "=" + encodeURIComponent(a[c]));
                return b.join("&")
            },
            continueCheckoutWithURL: function(a, e) {
                if ("function" == typeof window[h.decorateCallback]) {
                    b(" <- Calling ", h.decorateCallback);
                    var f = window[h.decorateCallback](a);
                    try {
                        f && f.length > 0 && f.indexOf(a) > -1 ? a = f : c("data-decorate-callback Must return correct url")
                    } catch (g) {
                        c(g)
                    }
                }
                "popup" === h.checkoutMode && /\/popup-/.test(a) ? (p === !0 && h.continuousReset(), i.drawFrame(a)) : (p === !0 && h.continuousReset(), window.location = a), d.runCallback(e)
            }
        },
        i = {
            iframeId: "fsc-popup-frame",
            checkURL: function() {
                var a, b, c = /fsc:invoke:(session|complete)/g.exec(decodeURIComponent(document.location.search));
                if (c && c.length > 0 && ("session" === c[1] || "complete" === c[1]) && (b = localStorage.getItem("fscLatestSession-" + h.storefront))) {
                    a = "complete" === c[1] ? b + "/complete" : b;
                    var d = setInterval(function() {
                        "complete" === document.readyState && (clearInterval(d), window.addEventListener("message", i.listener, !1), i.drawCanvas(), i.drawFrame("https://" + h.storefront + "/session/" + a))
                    }, 100)
                }
            },
            listener: function(a) {
                if (a.data.hasOwnProperty("fscPopupMessage") && a.data.fscPopupMessage.hasOwnProperty("action")) {
                    var b = a.data.fscPopupMessage;
                    "close" === b.action ? (b.hasOwnProperty("orderReferences") ? i.popupClosedFunction(b.orderReferences) : i.popupClosedFunction(null), i.frame.close && i.frame.close()) : "event" === b.action && b.hasOwnProperty("eventData") ? i.publishEvent(b.eventData) : "hook" === b.action && b.hasOwnProperty("hookData") ? i.hookEvent(b.hookData) : "scroll" === b.action && (document.body.scrollTop = 0)
                }
            },
            popupClosedFunction: function(a) {
                if ("function" == typeof window[h.popupClosed]) {
                    b("Calling data-popup-closed callback");
                    try {
                        window[h.popupClosed](a)
                    } catch (d) {
                        c("Error in data-popup-closed callback", d)
                    }
                }
                a && localStorage.removeItem("fscLatestSession-" + h.storefront), b("Popup Closed. Is there an order number?", a), i.destroy()
            },
            publishEvent: function(a) {
                if (b("Event published", a), "function" == typeof window[h.popupEventReceived]) {
                    b(" <- Calling ", h.popupEventReceived);
                    try {
                        window[h.popupEventReceived](a)
                    } catch (c) {
                        b(" -- Error in popup-event-received")
                    }
                }
            },
            hookEvent: function(a) {
                if (b("Hook published: ", a), "function" == typeof window[h.popupWebhookReceived]) {
                    b(" <- Calling ", h.popupWebhookReceived);
                    try {
                        window[h.popupWebhookReceived](a)
                    } catch (c) {
                        b(" --Error in popup-webhook-received")
                    }
                }
            },
            drawCanvas: function() {
                window.addEventListener("message", i.listener, !1), /iPhone|iPad|iPod/i.test(navigator.userAgent) && (this.frame = window.open()), document.getElementById("fscCanvas") || (this.canvas = document.createElement("div"), this.canvas.id = "fscCanvas", this.canvas.setAttribute("style", "background: -webkit-linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.8)); background: -o-linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.8)); background: -moz-linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.8)); background: linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.8));"), this.canvas.style.width = "100%", this.canvas.style.height = "100%", this.canvas.style.position = "fixed", this.canvas.style.top = "0", this.canvas.style.left = "0", this.canvas.style.zIndex = "100000000000000", h.animateFader && (this.canvas.style.transitionProperty = "opacity", this.canvas.style.transitionDuration = "0.5s", this.canvas.style.opacity = "0"), document.body.appendChild(this.canvas), h.animateFader && setTimeout(function() {
                    document.getElementById("fscCanvas").style.opacity = "1"
                }, 100)), g.attach()
            },
            drawFrame: function(a) {
                b("Launching popup with URL", a), this.frame ? (g.remove(), this.canvas.remove(), this.frame.location = a) : document.getElementById(i.iframeId) ? a.length > 0 && (this.frame.location = a) : (this.frame = document.createElement("iframe"), this.frame.id = i.iframeId, this.frame.setAttribute("name", i.iframeId), this.frame.width = "100%", this.frame.height = "100%", /iPhone|iPad|iPod/i.test(navigator.userAgent) ? (this.frame.style.position = "absolute", document.body.scrollTop = 0) : this.frame.style.position = "fixed", this.frame.style.top = "0", this.frame.style.left = "0", this.frame.style.background = "transparent", this.frame.style.zIndex = "1000000000000000", this.frame.frameBorder = 0, this.frame.setAttribute("background", "transparent"), a.length > 0 && this.frame.setAttribute("src", a), document.body.appendChild(this.frame), document.body.setAttribute("data-overflow", document.body.style.overflow), document.body.style.overflow = "hidden", this.frame.onload = function() {
                    g.remove()
                })
            },
            destroy: function() {
                if (document.body.style.overflow = document.body.getAttribute("data-overflow"), document.body.removeAttribute("data-overflow"), g.remove(), window.removeEventListener("message", i.listener, !1), this.blur && (this.blur.parentNode.removeChild(this.blur), this.blur = null), i.canvas) {
                    var a = 0;
                    h.animateFader && (i.canvas.style.opacity = "0", a = 500), setTimeout(function() {
                        i.frame && i.frame.parentNode && (i.frame.parentNode.removeChild(i.frame), i.frame = null), i.canvas && i.canvas.parentNode && (i.canvas.parentNode.removeChild(i.canvas), i.canvas = null)
                    }, a)
                }
            }
        },
        j = {
            push: function(a, c) {
                !n || o ? (m = d.merge(m, a), c && b("Unexpected callback sent to push")) : h.parseInput(a, c)
            },
            checkout: function(a, b) {
                a && a.length > 10 ? j.push({
                    checkout: a
                }, b) : j.push({
                    checkout: !0
                }, b)
            },
            promo: function(a, b) {
                j.push({
                    coupon: a
                }, b)
            },
            update: function(a, b, c) {
                j.push({
                    products: [{
                        path: a,
                        quantity: parseInt(b, 10)
                    }]
                }, c)
            },
            remove: function(a, b) {
                j.push({
                    products: [{
                        path: a,
                        quantity: 0
                    }]
                }, b)
            },
            add: function(a, b) {
                j.update(a, 1, b)
            },
            recognize: function() {
                if (arguments.length > 0) {
                    var a = "function" == typeof arguments[arguments.length - 1] && arguments[arguments.length].pop(),
                        b = ["firstName", "lastName", "email", "company", "addressLine1", "addressLine2", "city", "region", "country", "postalCode", "phoneNumber"],
                        c = arguments[0];
                    "object" != typeof c && (c = {}, c.email = arguments[0], c.firstName = arguments.length > 0 && arguments[1], c.lastName = arguments.length > 1 && arguments[2]);
                    var d = {
                        paymentContact: {}
                    };
                    for (var e in c) c.hasOwnProperty(e) && ~b.indexOf(e) && (d.paymentContact[e] = c[e]);
                    j.push(d, a)
                }
            },
            reset: function(a) {
                j.push({
                    reset: !0
                }, a)
            },
            clean: function(a) {
                j.push({
                    clean: !0
                }, a)
            },
            secure: function(a, b, c) {
                var d = {
                    secure: {
                        payload: a
                    }
                };
                b && (d.secure.key = b), j.push(d, c)
            },
            authenticate: function(a, b, c) {
                var d = {
                    authenticate: {
                        payload: a
                    }
                };
                b && (d.authenticate.key = b), j.push(d, c)
            },
            tag: function(a, b, c) {
                var d = {
                    tags: {}
                };
                if ("object" == typeof a)
                    for (var e in a) a.hasOwnProperty(e) && (d.tags[e] = a[e]);
                else d.tags[a] = b;
                j.push(d, c)
            },
            country: function(a, b) {
                j.push({
                    country: a
                }, b)
            },
            language: function(a, b) {
                j.push({
                    language: a
                }, b)
            },
            _uninstall: function() {
                h.uninstall(), k.uninstall(), i.destroy();
                var a = document.querySelector("script#fsc-api");
                a.parentNode.removeChild(a), delete window._f, delete window.fastspring
            },
            Recompile: function(a, b, c) {
                k.compileHandlebarsTemplate(a, b, c)
            }
        };
    ["Add", "Push", "Authenticate", "Checkout", "Clean", "Country", "Language", "Tag", "Secure", "Remove", "Promo", "Update", "Recognize", "Reset"].forEach(function(a) {
        var b = a.toLowerCase();
        Object.defineProperty(j, a, {
            enumerable: !1,
            get: function() {
                return console.log("Warning: '" + a + "' is deprecated, please use '" + b + "' instead"), j[b]
            }
        })
    });
    var k = {
        init: function() {
            if (this.isDynaCart = !1, this.ready = !0, this.listDriver = l.getAttribute("data-storefront").split(".")[0], this.$fscDynaContainers = document.querySelectorAll("[data-fsc-items-container]"), this.dynaListObjs = [], "undefined" != typeof this.$fscDynaContainers[0]) {
                this.isDynaCart = !0;
                for (var a = "", b = "", c = this.$fscDynaContainers.length, d = 0; d < c; d++) b = this.$fscDynaContainers[d].getAttribute("data-fsc-items-container"), a = this.$fscDynaContainers[d].getAttribute("data-fsc-filter"), this.dynaListObjs.push({
                    containerName: b,
                    filterList: a
                })
            }
        },
        setData: function(a) {
            b("Received data for Markup:", a), this.data = a
        },
        loadHandlebarsLib: function(a, b, d) {
            function e(a, b, c) {
                if (c && !document.getElementById(a)) {
                    var d = document.getElementsByTagName("head").item(0),
                        e = document.createElement("script");
                    e.language = "javascript", e.type = "text/javascript", e.id = a, e.defer = !0, e.text = c, d.appendChild(e)
                }
            }
            if (window.Handlebars) d();
            else {
                var f = new XMLHttpRequest;
                f.open("GET", b, !0), f.send(), f.onreadystatechange = function() {
                    4 === f.readyState && (200 === f.status || 304 === f.status ? e(a, b, f.responseText) : c("XML request error: " + f.statusText + " (" + f.status + ")"), d())
                }
            }
        },
        compileHandlebarsTemplate: function(a, b) {
            if ("object" == typeof b) {
                var c = [];
                for (var d in b) b.hasOwnProperty(d) && c.push(d + "='" + b[d] + "'");
                b = c.join(";")
            }
            for (var e, f = 0; f < this.dynaListObjs.length; f++)
                if (this.dynaListObjs[f].containerName === a) {
                    if (e = document.querySelector("[data-fsc-template-for='" + a + "']"), null == e) return;
                    this.dynaListObjs[f].filterList = b, this.handlebarTemplates[f] = Handlebars.compile(e.innerHTML), this.parseAndPut(this.data), this.afterMarkup();
                    break
                }
        },
        process: function() {
            if (this.ready === !0 && this.data) {
                if (this.data.groups.forEach(function(a) {
                        a.items.forEach(function(a) {
                            a.hasOwnProperty("description") && a.description.hasOwnProperty("action") && (a.description.action = a.description.action.replace("<p>", "").replace("</p>", ""))
                        })
                    }), "function" == typeof window[h.beforeMarkup]) {
                    b(" <- Calling ", h.beforeMarkup);
                    try {
                        window[h.beforeMarkup]()
                    } catch (a) {
                        c(" --Error in data-before-markup-callback")
                    }
                }
                b("Doing markup with data:", this.data), this.isDynaCart ? this.loadHandlebarsLib("handlebarScriptElm", "https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/3.0.1/handlebars.min.js", function() {
                    if ("function" == typeof window[h.markupHelpers]) {
                        b(" <- Calling ", h.markupHelpers);
                        try {
                            window[h.markupHelpers]()
                        } catch (a) {
                            c(" --Error in data-after-markup-callback", a)
                        }
                    }
                    this.handlebarTemplates = [];
                    for (var d = 0; d < this.dynaListObjs.length; d++) {
                        var e = document.querySelector("[data-fsc-template-for='" + this.dynaListObjs[d].containerName + "']");
                        null !== e && (this.handlebarTemplates[d] = Handlebars.compile(e.innerHTML))
                    }
                    this.parseAndPut(this.data), this.afterMarkup()
                }.bind(this)) : (this.parseAndPut(this.data), this.afterMarkup())
            }
        },
        afterMarkup: function() {
            if ("function" == typeof window[h.afterMarkup]) {
                b(" <- Calling ", h.afterMarkup);
                try {
                    window[h.afterMarkup]()
                } catch (a) {
                    c(" --Error in data-after-markup-callback", a)
                }
            }
        },
        addEventHandlers: function() {
            this.functions = {}, this.functions.preventDefault = function(a) {
                a.preventDefault()
            }, this.functions.Add = function(a) {
                k.Add(a)
            }, this.functions.Update = function(a) {
                k.Update(a)
            }, this.functions.Remove = function(a) {
                k.Remove(a)
            }, this.functions.Promocode = function(a) {
                k.Promo(a)
            }, this.functions.Recognize = function(a) {
                k.Recognize(a)
            }, this.functions.Reset = function(a) {
                k.Reset(a)
            }, this.functions.Clean = function(a) {
                k.Clean(a)
            }, this.functions.Checkout = function(a) {
                k.Checkout(a)
            }, this.functions.autoUpdate = function() {
                setTimeout(function() {
                    k.Update(this)
                }.bind(this), 1500)
            }, this.functions.Replace = function(a) {
                k.Add(a)
            }, this.functions.Multiple = function() {
                k.Multiple(this)
            }, this.unbinders = [];
            for (var a = document.querySelectorAll("[data-fsc-action=Add],[data-fsc-action=Update],[data-fsc-action=Remove], [data-fsc-action=Replace],[data-fsc-action=Promocode],[data-fsc-action=Reset],[data-fsc-action=Recognize],[data-fsc-action*=','],[data-fsc-action=Checkout]"), b = 0; b < a.length; b++) {
                var c = a[b].cloneNode(!0),
                    d = c.tagName.toLowerCase(),
                    e = ["checkbox", "radio", "search", "text"];
                "a" === d ? c.addEventListener ? (c.addEventListener("click", this.functions.Multiple, !1), c.addEventListener("click", this.functions.preventDefault, !1), this.unbinders.push({
                    element: c,
                    action: "click",
                    fn: this.functions.Multiple
                }), this.unbinders.push({
                    element: c,
                    action: "click",
                    fn: this.functions.preventDefault
                })) : (c.attachEvent("click", this.functions.Multiple), c.attachEvent("click", this.functions.preventDefault)) : "select" === d || "textarea" === d || "input" === d && e.indexOf(c.type.toLowerCase()) > -1 ? c.addEventListener ? (c.addEventListener("change", this.functions.Multiple, !1), this.unbinders.push({
                    element: c,
                    action: "change",
                    fn: this.functions.Multiple
                })) : c.attachEvent("change", this.functions.Multiple) : c.addEventListener ? (c.addEventListener("click", this.functions.Multiple, !1), this.unbinders.push({
                    element: c,
                    action: "click",
                    fn: this.functions.Multiple
                })) : c.attachEvent("click", this.functions.Multiple), a[b].parentNode.replaceChild(c, a[b])
            }
        },
        uninstall: function() {
            this.unbinders.forEach(function(a) {
                a.element.removeEventListener(a.action, a.fn)
            })
        },
        Checkout: function() {
            var a = k.findValue("session");
            a.length < 10 ? j.checkout() : j.checkout(a)
        },
        Promo: function() {
            var a = k.findValue("promocode");
            j.promo(a)
        },
        Update: function(a) {
            var b, c, d, e, f = a.getAttribute("data-fsc-item-path-value"),
                g = a.getAttribute("data-fsc-item-quantity-value"),
                h = a.getAttribute("data-fsc-quantity-src");
            if ("input" !== a.tagName.toLowerCase() || "checkbox" !== a.type.toLowerCase() || a.checked) {
                if (null !== g && g > 0) b = g;
                else if (null !== h && h.length > 0) {
                    if (c = document.getElementById(h), d = c.getAttribute("data-fsc-item-quantity-value"), null !== c) switch (e = c.tagName.toLowerCase(), !0) {
                        case "input" === e && "checkbox" !== c.type.toLowerCase() || "select" === e:
                            b = c.value;
                            break;
                        case "input" === e && "checkbox" === c.type.toLowerCase() && !c.checked:
                            b = 0;
                            break;
                        case "input" === e && "checkbox" === c.type.toLowerCase() && c.checked:
                            b = 1;
                            break;
                        case "null" !== d && d > 0:
                            b = d;
                            break;
                        default:
                            b = k.findValue("item-quantity", f)
                    }
                } else b = a.hasOwnProperty("selectedIndex") && a[a.selectedIndex].value > -1 ? a[a.selectedIndex].value : k.findValue("item-quantity", f);
                b = b || 1
            } else b = 0;
            j.update(f, b)
        },
        Add: function(a) {
            var b = a.getAttribute("data-fsc-item-path-value");
            j.add(b)
        },
        Remove: function(a) {
            var b = a.getAttribute("data-fsc-item-path-value");
            j.update(b, 0)
        },
        Replace: function(a) {
            var b = a.getAttribute("data-fsc-driver-item-path-value");
            j.update(b, 0)
        },
        Recognize: function() {
            var a = k.findValue("firstname"),
                b = k.findValue("lastname"),
                c = k.findValue("email");
            j.recognize(c, a, b)
        },
        Reset: function(a) {
            j.reset()
        },
        Clean: function() {
            j.clean()
        },
        Multiple: function(a) {
            var b = this.functions;
            o = !0;
            var c = a.getAttribute("data-fsc-action");
            c.indexOf(",") > -1 ? c.split(",").forEach(function(c) {
                c = c.trim(), b.hasOwnProperty(c) && b[c](a)
            }) : (c = c.trim(), b.hasOwnProperty(c) && b[c](a)), o = !1, h.parseInput(m)
        },
        findValue: function(a, b) {
            var c, d;
            if (c = b ? document.querySelectorAll("[data-fsc-" + a + "-value][data-fsc-item-path-value='" + b + "']") : document.querySelectorAll("[data-fsc-" + a + "-value]"), "undefined" != typeof c[0]) {
                if (d = c[0], d.value) return d.value;
                if (d.innerHTML) return d.innerHTML
            }
            return ""
        },
        parseAndPut: function(a) {
            q = a.selections === !1;
            var c = this.parseProducts(a),
                d = this.parseProductsDyna(a),
                e = this.parseDynaOrderLevel(a);
            this.processDynaOrderLists(d, c, e), c.length > 0 ? (b("Products:", c), this.processProducts(c)) : b("No products found in response");
            var f = this.parseOrderLevel(a);
            f !== !1 ? (b("Top level items:", f), this.processOrderLevelItems(f)) : b("No top level items found in response"), this.addEventHandlers()
        },
        parseProducts: function(a) {
            for (var b = [], c = 0; c < a.groups.length; c++) b = b.concat(a.groups[c]);
            return k.myArray = b, b.length > 0 && b
        },
        parseProductsDyna: function(a) {
            var b = {
                    storefront: "storefront",
                    offers: "offers"
                },
                c = function(a) {
                    this.raw = a.raw, this.setListType(this.raw.driver)
                };
            c.prototype.setListType = function(a) {
                void 0 === a ? this.listType = b.storefront : a === k.listDriver || a.indexOf(k.listDriver) > -1 ? this.listType = b.storefront : a !== k.listDriver && (this.listType = b.offers)
            }, c.prototype.isStorefront = function() {
                return this.listType === b.storefront
            }, c.prototype.isOffer = function() {
                return this.listType === b.offers
            };
            var d = a.groups.filter(function(a) {
                    var b = new c({
                        raw: a
                    });
                    return b.isStorefront()
                }),
                e = a.groups.filter(function(a) {
                    var b = new c({
                        raw: a
                    });
                    return b.isOffer()
                }),
                f = !0;
            return f && (d = d.concat(e)), d.length > 0 && d
        },
        applyDynaFilter: function(a, b) {
            var c, d, e, f = {},
                g = [];
            return null !== b.filterList && (b.filterList.split(";").forEach(function(a, b) {
                d = a.split("="), f[d[0]] = d[1]
            }), g = a.filter(function(a) {
                c = !0;
                for (var b in f)
                    if (f.hasOwnProperty(b)) {
                        if ("undefined" == typeof f[b] || null === f[b]) return !0;
                        if (e = f[b], "true" === f[b] && (e = !0), "false" === f[b] && (e = !1), "'" === f[b][0]) {
                            var d = f[b].length;
                            e = f[b].substring(1, d - 1)
                        } else "undefined" != typeof window[e] && (e = window[e]);
                        if (a[b] !== e) {
                            c = !1;
                            break
                        }
                    } return c
            })), g
        },
        parseOrderLevel: function(a) {
            var b = [];
            for (var c in a) a.hasOwnProperty(c) && "groups" !== c && (b = b.concat({
                key: c,
                value: a[c]
            }));
            return b.length > 0 && b
        },
        processOrderLevelItems: function(a) {
            var c = this;
            Array.isArray(a) ? a.forEach(function(a) {
                c.processOrderLevelItem(a.key, a.value)
            }) : b("Unexpected format of data")
        },
        processOrderLevelItem: function(a, c) {
            var d, e = this,
                f = "[data-fsc-checkout-hideempty]";
            if ("selections" === a) {
                var g = document.querySelectorAll("[data-fsc-selections-smartselect],[data-fsc-selections-smartdisplay],[data-fsc-selections-smartdisplay-inverse], [data-fsc-selections-hideifselections],[data-fsc-selections-showifselections],[data-fsc-selections-hideifnoselections],[data-fsc-selections-showifnoselections],[data-fsc-selections-smartdisable],[data-fsc-selections-smartdisable-inverse],[data-fsc-selections-disableifselections],[data-fsc-selections-disableifnoselectios],[data-fsc-selections-enableifselections],[data-fsc-selections-enableifnoselections]");
                if (null !== g)
                    for (d = 0; d < g.length; d++) {
                        var h = g[d];
                        !h.hasAttribute("data-fsc-selections-smartselect") || "INPUT" !== h.tagName || "checkbox" !== h.type.toLowerCase() && "radio" !== h.type.toLowerCase() || (c === !0 ? h.checked = !0 : h.checked = !1), h.hasAttribute("data-fsc-selections-smartdisplay") && (c === !0 ? h.style.display = "block" : h.style.display = "none"), h.hasAttribute("data-fsc-selections-smartdisplay-inverse") && (c === !0 ? h.style.display = "none" : h.style.display = "block"), h.hasAttribute("data-fsc-selections-hideifselections") && c === !0 && (h.style.display = "none"), h.hasAttribute("data-fsc-selections-showifselections") && c === !0 && (h.style.display = "block"), h.hasAttribute("data-fsc-selections-hideifnoselections") && c === !1 && (h.style.display = "none"), h.hasAttribute("data-fsc-selections-showifnoselections") && c === !1 && (h.style.display = "block"), h.hasAttribute("data-fsc-selections-smartdisable") && (c === !1 ? h.setAttribute("disabled", "disabled") : h.removeAttribute("disabled")), h.hasAttribute("data-fsc-selections-smartdisable-inverse") && (c === !0 ? h.setAttribute("disabled", "disabled") : h.removeAttribute("disabled")), h.hasAttribute("data-fsc-selections-disableifselections") && c === !0 && h.setAttribute("disabled", "disabled"), h.hasAttribute("data-fsc-selections-disableifnoselectios") && c === !1 && h.setAttribute("disabled", "disabled"), h.hasAttribute("data-fsc-selections-enableifselections") && c === !0 && h.removeAttribute("disabled"), h.hasAttribute("data-fsc-selections-enableifnoselections") && c === !1 && h.removeAttribute("disabled")
                    }
            }
            if ("selections" === a && c === !1) {
                var i = document.querySelectorAll(f);
                if (null !== i)
                    for (d = 0; d < i.length; d++) "a" === i[d].tagName.toLowerCase() ? i[d].setAttribute("style", "display: none") : "div" === i[d].tagName.toLowerCase() ? i[d].setAttribute("style", "display: none") : i[d].setAttribute("disabled", "disabled")
            }
            if ("selections" === a && c === !0) {
                var j = document.querySelectorAll(f);
                if (null !== j)
                    for (d = 0; d < j.length; d++) "a" === j[d].tagName.toLowerCase() ? j[d].setAttribute("style", "display: inline") : "div" === j[d].tagName.toLowerCase() ? j[d].setAttribute("style", "display: block") : j[d].removeAttribute("disabled")
            }
            a = this.mapProperty(a), c = this.mapValue(a, c), b("Processing top order level item:", a, c);
            var k = "[data-fsc-order-" + a + "]",
                l = document.querySelectorAll(k);
            for (d = 0; d < l.length; d++) e.processPropToElem(a, c, l[d], "data-fsc-order-" + a)
        },
        mapProperty: function(a) {
            var b = {};
            return b.coupons = "promocode", b["description-action"] = "calltoaction", b.hasOwnProperty(a) && (a = b[a]), a
        },
        mapValue: function(a, b) {
            return "promocode" === a && (b = b[0] || ""), b
        },
        parseDynaOrderLevel: function(a) {
            var b = [];
            return b.push(a), b.length > 0 && b
        },
        processDynaOrderLists: function(a, c, d) {
            var e = this;
            if (Array.isArray(a)) {
                for (var f = a.length, g = 0; g < f; g++) a[g].items.forEach(function(a) {
                    void 0 !== a.future && e.futureAddProps(a)
                });
                var h = this.dynaListObjs.length,
                    i = {};
                for (g = 0; g < h; g++) {
                    for (var j = 0; j < f; j++) null !== this.dynaListObjs[g].filterList && (i[j] = Object.create(a[j]), i[j].items = this.applyDynaFilter(i[j].items, this.dynaListObjs[g]));
                    this.displayDynaOrderLists({
                        items: i,
                        groups: c,
                        order: d
                    }, this.handlebarTemplates[g], this.dynaListObjs[g].containerName)
                }
            } else b("not an array of products so cannot markup")
        },
        processProducts: function(a) {
            function c(a) {
                var b = a.path;
                void 0 !== a.future && d.futureAddProps(a), d.processProduct(a, b)
            }
            var d = this;
            if (Array.isArray(a))
                for (var e = a.length, f = 0; f < e; f++) a[f].items.forEach(function(a) {
                    c(a)
                });
            else b("not an array of products so cannot markup")
        },
        futureAddProps: function(a) {
            var b, c, d, e, f, g, h;
            void 0 !== a.future.beginsValue ? (b = new Date(a.future.beginsValue), c = new Date(a.future.beginsValue)) : (b = new Date, c = new Date), d = b.toLocaleDateString(), "week" === a.future.intervalUnit && c.setDate(c.getDate() + a.future.discountDurationLength * a.future.intervalLength * 7), "month" === a.future.intervalUnit && c.setMonth(c.getMonth() + a.future.discountDurationLength * a.future.intervalLength), "year" === a.future.intervalUnit && c.setFullYear(c.getFullYear() + a.future.discountDurationLength * a.future.intervalLength),
                e = c.getDate(), f = c.getMonth(), g = c.getFullYear(), h = String(c).split(" ")[1], a.future.ends = c.toLocaleDateString(), a.future.endsValue = c, a.future.beginsDate = d
        },
        processProduct: function(a, c) {
            var d, e, f = "";
            f = a.priceTotalValue === a.totalValue ? "hide" : "show";
            var g = document.querySelectorAll("[data-fsc-item-path='" + c + "']");
            if (null !== g) {
                for (d = 0; d < g.length; d++) {
                    var i = g[d];
                    !i.hasAttribute("data-fsc-item-selection-smartselect") || "INPUT" !== i.tagName || "checkbox" !== i.type.toLowerCase() && "radio" !== i.type.toLowerCase() || (a.selected ? i.checked = !0 : i.checked = !1), i.hasAttribute("data-fsc-item-selection-smartdisplay") && (a.selected ? i.style.display = "block" : i.style.display = "none"), i.hasAttribute("data-fsc-item-selection-smartdisplay-inverse") && (a.selected ? i.style.display = "none" : i.style.display = "block"), i.hasAttribute("data-fsc-item-hideifselected") && a.selected && (i.style.display = "none"), i.hasAttribute("data-fsc-item-showifselected") && a.selected && (i.style.display = "block"), i.hasAttribute("data-fsc-item-hideifnotselected") && (a.selected || (i.style.display = "none")), i.hasAttribute("data-fsc-item-showifnotselected") && (a.selected || (i.style.display = "block")), i.hasAttribute("data-fsc-item-smartdisable") && (a.selected ? i.removeAttribute("disabled") : i.setAttribute("disabled", "disabled")), i.hasAttribute("data-fsc-item-smartdisable-inverse") && (a.selected ? i.setAttribute("disabled", "disabled") : i.removeAttribute("disabled")), i.hasAttribute("data-fsc-item-disableifselected") && a.selected && i.setAttribute("disabled", "disabled"), i.hasAttribute("data-fsc-item-disableifnotselected") && (a.selected || i.setAttribute("disabled", "disabled")), i.hasAttribute("data-fsc-item-enableifselected") && a.selected && i.removeAttribute("disabled"), i.hasAttribute("data-fsc-item-enableifnotselected") && (a.selected || i.removeAttribute("disabled"))
                }
                a.link = "https://" + h.storefront + "/" + c;
                for (var j in a)
                    if (a.hasOwnProperty(j)) {
                        var l = j;
                        if ("string" == typeof j && (l = j.replace(/\./g, "\\.")), "object" == typeof a[j] && "path" !== j) {
                            for (var m in a[j])
                                if (a[j].hasOwnProperty(m)) {
                                    var n = m;
                                    for ("string" == typeof m && (n = m.replace(/\./g, "\\.")), e = document.querySelectorAll("[data-fsc-item-path='" + c + "'][data-fsc-item-" + l + "-" + n + "]"), d = 0; d < e.length; d++) k.processPropToElem(m, a[j][m], e[d], "data-fsc-item-" + j + "-" + m, f)
                                }
                        } else if ("path" !== j)
                            for (e = document.querySelectorAll("[data-fsc-item-path='" + c + "'][data-fsc-item-" + l + "]"), d = 0; d < e.length; d++) k.processPropToElem(j, a[j], e[d], "data-fsc-item-" + j, f);
                        else if ("path" === j)
                            for (e = document.querySelectorAll("[data-fsc-item-path='" + c + "'][data-fsc-item-" + l + "-element]"), d = 0; d < e.length; d++) k.processPropToElem(j, a[j], e[d], "data-fsc-item-" + j, f)
                    }
            } else b("no markup to markup for the product-path and/or no productData property exist")
        },
        processPropToElem: function(a, c, d, e, f) {
            b("Processing values for a single element:", a, d, f), null !== c && (c = c.toString().replace("<p>", ""), c = c.replace("</p>", "")), c = c.toString().replace("<p>", ""), c = c.replace("</p>", ""), e = e.toLowerCase();
            var g = d.tagName.toLowerCase();
            "a" === g ? "data-fsc-item-link" === e ? (b("Setting href to", c, d), d.setAttribute("href", c)) : d.innerHTML = c.toString() : "input" === g ? (b("Setting value to", c, d), d.value = c) : "select" === g ? d[c - 1] && d[c - 1].setAttribute("selected", !0) : "button" === g ? (b("Setting value to", c, d), d.value = c) : "img" === g ? (b("Setting src to", c, d), d.setAttribute("src", c)) : "div" === g || (a.indexOf("Value") > -1 ? (d.value = "", d.setAttribute("data-fsc-item-" + a, c), d.innerHTML = c.toString()) : d.innerHTML = c.toString());
            var h, i = ["data-fsc-item-price", "data-fsc-item-pricetotal"];
            b("do I run SmartDisplay for", a, f), "undefined" != typeof d.getAttribute("data-fsc-smartdisplay") && null !== d.getAttribute("data-fsc-smartdisplay") && i.indexOf(e) > -1 && (b("Agreed to run SmartDisplay for", a, f), h = "" === d.getAttribute("data-fsc-smartdisplay") ? d : document.querySelector("[" + d.getAttribute("data-fsc-smartdisplay") + "]"), null !== h && (f && "show" === f ? h.setAttribute("style", "display: block") : h.setAttribute("style", "display: none"))), d.hasAttribute("data-fsc-callback") && "function" == typeof window[d.getAttribute("data-fsc-callback")] && (b("Agreed to run CallBack function for", a, d.getAttribute("data-fsc-callback")), window[d.setAttribute("data-fsc-callback")](d, a, c))
        },
        displayDynaOrderLists: function(a, b, c) {
            var d = document.querySelector("[data-fsc-items-container='" + c + "']");
            if (void 0 !== b) {
                var e = b(a);
                d.innerHTML = e
            }
        }
    };
    k.ready = !1, k.data = null;
    var l = document.querySelector("script#fsc-api"),
        m = window.fscSession || {},
        n = !1,
        o = !1,
        p = !1,
        q = !1;
    document.addEventListener("DOMContentLoaded", function() {
        k.init(), k.process()
    }, !1), h.init();
    var r = {};
    Object.defineProperty(r, "builder", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return j
        }
    }), Object.defineProperty(window, "fastspring", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return r
        }
    }), Object.defineProperty(window, "_f", {
        configurable: !0,
        get: function() {
            return console.log("Warning: '_f' is deprecated, please use 'fastspring.builder' instead"), j
        }
    })
}();