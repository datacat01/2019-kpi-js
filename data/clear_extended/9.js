/* Auto generated, hash = 79h6mewnpnn41qidzy7i4vlqr */
(function() {

    // we're not supporting an AMD / CJS like environment...
    var exports, module, define;

    // locally scope some things...
    var LI = {
        // noop
        log: function() {
            var token = /LI_JS_DEBUG/,
                enabled = location.hash.match(token);

            if (!enabled) {
                return;
            }

            console.log(arguments);
        }
    };

    var globalNavAPI = window.globalNav = window.globalNav || {};

    var _namespaces = {
        LI: LI
    };
    var Injector = {
        dependencies: {},
        register: function(a, b) {
            this.dependencies[a] = b
        },
        resolve: function(a, b, h) {
            var d = [],
                e = this,
                f = !1,
                g, c;
            if ("string" === typeof a) g = b, c = a.replace(/ /g, "").split(",");
            else throw Error("You must register dependencies as a string so that during minification they are not lost.");
            return function() {
                var a = [].slice.call(arguments, 0);
                f || c.forEach(function(a, b) {
                    if (e.dependencies[a] && "" !== a) d.push(e.dependencies[a]);
                    else throw Error(a + " was not found in the registry");
                    c.length === ++b && (f = !0)
                });
                g.apply(this, d.concat(a))
            }
        }
    };
    var Helpers = function() {
        function l(a) {
            return a.replace(/^-ms-/, "ms-").replace(/-(\w)/gi, function(a, b) {
                return b.toUpperCase()
            })
        }
        return {
            _toString: Object.prototype.toString,
            isFunction: function(a) {
                return "[object Function]" === this._toString.call(a)
            },
            isElement: function(a) {
                return !(!a || 1 !== a.nodeType)
            },
            isEmpty: function(a) {
                return Array.isArray(a) ? !a.length : this.isObject(a) ? !Object.keys(a).length : !a
            },
            isObject: function(a) {
                return "[object Object]" === this._toString.call(a)
            },
            encode: window.encodeURIComponent,
            appendParams: function(a,
                c) {
                var b, e = [];
                if (this.isEmpty(c)) return a;
                Object.keys(c).forEach(function(a) {
                    b = c[a];
                    a = this.encode(a) + "\x3d";
                    b = [].concat(void 0 === b ? "" : b);
                    b.forEach(function(b) {
                        e.push(a + this.encode(b))
                    }.bind(this))
                }.bind(this));
                return a + (/\?/.test(a) ? "\x26" : "?") + e.join("\x26")
            },
            extendObject: function() {
                var a, c, b, e, g, d = arguments[0] || {},
                    f = 1,
                    k = arguments.length,
                    h = !1;
                "boolean" === typeof d && (h = d, d = arguments[f] || {}, f++);
                "object" === typeof d || Helpers.isFunction(d) || (d = {});
                if (f === k) return d;
                for (; f < k; f++)
                    if (null != (a = arguments[f]))
                        for (c in a) b =
                            d[c], e = a[c], d !== e && (h && e && (Helpers.isObject(e) || (g = Array.isArray(e))) ? (g ? (g = !1, b = b && Array.isArray(b) ? b : []) : b = b && Helpers.isObject(b) ? b : {}, d[c] = Helpers.extendObject(h, b, e)) : void 0 !== e && (d[c] = e));
                return d
            },
            closestAncestorWithClass: function(a, c) {
                for (var b = a.parentNode; b;) {
                    if (b.classList && b.classList.contains(c)) return b;
                    b = b.parentNode
                }
                return !1
            },
            getJSpath: function(a) {
                var c = c || document.querySelector('meta[name\x3d"RemoteNavJSContentBaseURL"]').getAttribute("content"),
                    b = [].concat(a);
                b.forEach(function(a,
                    c) {
                    b[c] = Helpers.encode(a)
                });
                return c + "\x26f\x3d" + b.join("\x26f\x3d")
            },
            getComputedStyle: function(a, c) {
                if (a.currentStyle) return a.currentStyle[l(c)];
                if (window.getComputedStyle) return document.defaultView.getComputedStyle(a).getPropertyValue(c)
            },
            redirectToUrl: function(a) {
                window.location.href = a
            }
        }
    }();
    var Promise = Injector.resolve("Helpers", function(a) {
        Promise.helpers = a;
        this.thenables = [];
        this.state = "pending"
    });
    Promise.states = {
        PENDING: "pending",
        FULFILL: "fulfill",
        REJECT: "reject",
        FULFILLED: "fulfilled",
        REJECTED: "rejected"
    };
    Promise.prototype = {
        isFulfilled: function() {
            return this.state === Promise.states.FULFILLED
        },
        isPending: function() {
            return this.state === Promise.states.PENDING
        },
        isRejected: function() {
            return this.state === Promise.states.REJECTED
        },
        promise: function() {
            return {
                done: this.done.bind(this),
                then: this.then.bind(this)
            }
        },
        then: function(a, b) {
            var f = new Promise,
                d = {
                    onFulfilled: a,
                    onRejected: b,
                    promise: f
                },
                e = Promise.states,
                c = window.setTimeout;
            this.isFulfilled() ? c(function() {
                    Promise.resolver.call(this, d, e.FULFILL)
                }.bind(this), 0) :
                this.isRejected() && c(function() {
                    Promise.resolver.call(this, d, e.REJECT)
                }.bind(this), 0);
            this.thenables.push(d);
            return f.promise()
        },
        fulfill: function(a) {
            var b = Promise.states;
            this.value = a;
            this.isPending() && (this.state = b.FULFILLED, this.thenables.forEach(function(a) {
                Promise.resolver.call(this, a, b.FULFILL)
            }, this))
        },
        reject: function(a) {
            var b = Promise.states;
            this.reason = a;
            this.isPending() && (this.state = b.REJECTED, this.thenables.forEach(function(a) {
                Promise.resolver.call(this, a, b.REJECT)
            }, this))
        },
        done: function(a,
            b) {
            (a || b ? this.then(a, b) : this).then(null, function(a) {
                window.setTimeout(function() {
                    throw a;
                }, 0)
            })
        }
    };
    Promise.resolver = function(a, b) {
        var f = Promise.states,
            d, e, c, g;
        b === f.FULFILL ? (g = this.value, e = a.onFulfilled) : b === f.REJECT && (g = this.reason, e = a.onRejected);
        c = a.promise;
        try {
            Promise.helpers.isFunction(e) ? d = e(g) : b === f.FULFILL ? c.fulfill(g) : c.reject(g), d && Promise.helpers.isFunction(d.then) ? d.then(function(a) {
                c.fulfill(a)
            }, function(a) {
                c.reject(a)
            }) : c.fulfill(d)
        } catch (h) {
            c.reject(h)
        }
    };
    var Request = Injector.resolve("Promise, Helpers", function(d, a) {
        Request.Promise = d;
        Request.helpers = a;
        Request.DATA_TYPE = "json"
    });
    Request.prototype = {
        getScript: function(d, a) {
            var c = new Request.Promise,
                b = document.createElement("script");
            if (!d) return c.reject(Error("Please provide a URL for your script")), c;
            b.readyState ? b.onreadystatechange = function() {
                if ("loaded" === b.readyState || "complete" === b.readyState) b.onreadystatechange = null, c.then(a), c.fulfill()
            } : b.onload = function() {
                b.onload = null;
                c.then(a);
                c.fulfill()
            };
            b.src = d;
            (document.body || document.head || document.getElementsByTagName("head")[0]).appendChild(b);
            return c
        },
        ajax: function(d,
            a) {
            var c = new Request.Promise,
                b, e = null;
            a = a || {};
            Request.helpers.isObject(d) && (a = d, d = a.url);
            c.then(a.success, a.error);
            if (!d) return c.reject(Error("Please provide url in the config.")), c;
            try {
                b = new XMLHttpRequest
            } catch (f) {}
            b || c.reject(Error("Cannot create XMLHTTPRequest instance."));
            a.type = (a.type || "GET").toUpperCase();
            a.data = a.data || {};
            a.url = d;
            a.headers = a.headers || {};
            "GET" === a.type && (a.url = Request.helpers.appendParams(a.url, a.data));
            b.open(a.type, a.url, !0);
            a.headers instanceof Object && Object.keys(a.headers).length &&
                Object.keys(a.headers).forEach(function(c) {
                    b.setRequestHeader(c, a.headers[c]);
                    "content-type" === c.toLowerCase() && (e = a.headers[c])
                });
            "GET" !== a.type && a.data instanceof Object && !e && (b.setRequestHeader("Content-Type", "application/json"), a.data = JSON.stringify(a.data));
            a.timeout && (b.timeout = a.timeout, b.ontimeout = function() {
                c.reject(Error("Request timed out."))
            });
            b.onreadystatechange = function() {
                var d;
                4 === b.readyState && (200 <= b.status && 400 > b.status ? (d = b.responseText, a.dataType === Request.DATA_TYPE && (d = JSON.parse(d)),
                    c.fulfill(d)) : c.reject(Error(b.statusText)))
            };
            a.data.length ? b.send(a.data) : b.send();
            return c
        },
        getJSON: function(d, a) {
            a = a || {};
            Request.helpers.isObject(d) ? a = d : d && (a.url = d);
            a.dataType = Request.DATA_TYPE;
            return this.ajax(a)
        }
    };
    var Delegate = Injector.resolve("Helpers", function(q, d, n, h, l, r) {
        function s(k) {
            var a, e = [],
                c, f = d.querySelectorAll(n),
                b = f.length;
            a = k ? k.target : void 0;
            for (c = 0; c < b; c++) e.push(f[c]);
            a: {
                if (a && a !== d)
                    for (c = 0, f = e.length; c < f; c++)
                        if (b = e[c], k.bubbles && b.contains(a) || b === a) {
                            a = b;
                            break a
                        } a = null
            }
            return a
        }

        function u(b) {
            var a = s(b);
            a && l.call(r || a, b)
        }

        function v(b, a) {
            var e = s(b);
            e && a(b, e, l, r)
        }

        function w(k, a) {
            var e = m[a] ? v : u,
                c = m[a] && m[a].handler,
                f = m[a] && m[a].boundEvent,
                d;
            d = function(a) {
                e(a, c)
            };
            b.push({
                node: k,
                eventType: a,
                boundEventType: f,
                boundHandler: d
            });
            k.addEventListener(f || a, d)
        }

        function t(d, a) {
            var e = -1,
                c, f;
            c = 0;
            for (f = b.length; c < f; c++) b[c].node === d && b[c].eventType === a && (e = c);
            if (!b[e]) throw Error("Event type on specified node not found");
            c = b[e].boundHandler;
            f = b[e].boundEventType;
            b.splice(e, 1);
            d.removeEventListener(f || a, c)
        }

        function x() {
            for (; b[0];) t(b[0].node, b[0].eventType)
        }
        var g = function(b, a) {
                return {
                    boundEvent: a,
                    handler: function(a, c, d, g) {
                        var h = a.relatedTarget;
                        if (!h || h !== c && !c.contains(h)) a = q.extendObject({}, a), a.target = c, a.type = b,
                            d.call(g || c, a)
                    }
                }
            },
            m = {
                mouseenter: g("mouseenter", "mouseover"),
                mouseleave: g("mouseleave", "mouseout")
            },
            b = [];
        if (q.isFunction(l)) {
            if ("string" === typeof d) new Delegate(document.querySelectorAll(d), n, h, l);
            else if (d && (d instanceof Array || d instanceof NodeList))
                for (var g = 0, p = d.length; g < p; g++) new Delegate(d[g], n, h, l);
            else
                for (h = h.split(/[,\s]+/), g = 0, p = h.length; g < p; g++) w(d, h[g]);
            this.off = t;
            this.offAll = x
        }
    });
    var CustomEvents = Injector.resolve("Helpers", function(b) {
        this.helpers = b;
        this._events = {}
    });
    CustomEvents.prototype = {
        on: function(b, c, e) {
            var d = this._events;
            this.helpers.isFunction(c) && (b.replace(/[^\s]+/g, function(a, b) {
                (d[a] = d[a] || []).push(c);
                c._typed = 0 < b
            }), e && (c._scope = e))
        },
        off: function(b, c) {
            var e = this._events;
            if ("*" === b) this._events = {};
            else if (c)
                for (var d = e[b], a = 0, f; f = d && d[a]; ++a) f === c && d.splice(a, 1);
            else b.replace(/[^\s]+/g, function(a) {
                e[a] = []
            })
        },
        once: function(b, c) {
            c && (c._one = !0);
            return this.on(b, c)
        },
        trigger: function(b) {
            for (var c = [].slice.call(arguments, 1), e = this._events[b] || [], d = 0, a; a =
                e[d]; ++d) a._busy || (a._busy = !0, a.apply(a._scope || this, a._typed ? [b].concat(c) : c), a._one && (e.splice(d, 1), d--), a._busy = !1)
        }
    };
    var WebTrack = Injector.resolve("Request, Helpers", function(m, n) {
        function p(a) {
            var d = "",
                b = [],
                c;
            if ("string" === typeof a) d = a;
            else if ("object" === typeof a) {
                for (c in a) b.push(c + ":" + a[c]);
                d = b.join("|")
            }
            return d
        }
        var q = LIModules.requires("jsConfig"),
            h = new m,
            g = q.get("URLs", "WebTracking").saveWebActionTrackURL,
            k = {
                "content-type": "application/x-www-form-urlencoded",
                "X-IsAJAXForm": 1
            };
        this.getPageKey = function() {
            return document.body.id ? document.body.id.substring(8) : ""
        };
        this.createRequestData = function(a, d, b, c, f) {
            var e = ["pkey\x3d" + escape(this.getPageKey())];
            e.push("tcode\x3d" + escape(a));
            e.push("plist\x3d" + escape(p(d)));
            "string" === typeof c && e.push("cId\x3d" + escape(c));
            b && e.push("prefix\x3dfalse");
            f && e.push("evt\x3d" + escape(f));
            return e.join("\x26")
        };
        this.track = function(a) {
            if (g) return h.ajax(g, {
                type: "POST",
                headers: k,
                data: a
            })
        };
        this.trackUserAction = function(a, d, b, c, f) {
            if (g) return a = this.createRequestData(a, d, b, c, f), this.track(a)
        };
        this.trackUserImpression = function(a, d, b, c) {
            return this.trackUserAction(a, d, b, c, "imp")
        };
        this.trackWithCallback = function(a, d, b, c, f, e) {
            g ? (a = this.createRequestData(a, d, f, e), h.ajax(g, {
                type: "POST",
                headers: k,
                data: a,
                timeout: 3E3,
                success: function() {
                    "function" === typeof b && b()
                },
                error: function() {
                    "function" === typeof c && c()
                }
            })) : b && b()
        };
        this.trackBeforeNavigation = function(a, d, b, c, f) {
            function e() {
                l(d)
            }
            var l = n.redirectToUrl;
            g ? (a = this.createRequestData(a, b, c, f), h.ajax(g, {
                type: "POST",
                headers: k,
                data: a,
                timeout: 3E3,
                success: e,
                error: e
            })) : l(d)
        }
    });
    var CookieManager = function() {
        return {
            createCookie: function(c, d, b, a, h) {
                var f = "",
                    g = "",
                    e;
                b ? (e = new Date, e.setTime(e.getTime() + 864E5 * b), b = "; expires\x3d" + e.toGMTString()) : b = "";
                a && (f = ";domain\x3d" + a);
                h && (g = ";secure");
                document.cookie = c + "\x3d" + d + b + ";path\x3d/" + f + g
            },
            readCookie: function(c) {
                c += "\x3d";
                for (var d = document.cookie.split(";"), b = 0; b < d.length; b++) {
                    for (var a = d[b];
                        " " === a.charAt(0);) a = a.substring(1, a.length);
                    if (0 === a.indexOf(c)) return a.substring(c.length, a.length)
                }
                return null
            },
            eraseCookie: function(c) {
                CookieManager.createCookie(c,
                    "", -1)
            }
        }
    }();
    (function() {
        function e() {
            var a = document.querySelector("#li-about-options");
            a && a.classList && !a.classList.contains(c) && a.classList.add(c)
        }

        function f() {
            var a = document.querySelector("#li-about-options");
            a && a.classList && a.classList.contains(c) && a.classList.remove(c)
        }
        var c = "expanded",
            b = document.querySelectorAll("#li-about a");
        if (b && 0 < b.length)
            for (var d = 0; d < b.length; d++) b[d].addEventListener("focus", e, !1), b[d].addEventListener("blur", f, !1)
    })();
    /* Auto generated, hash = 8rs4kz9s7fb6rhcw24ck5i4oo */
    var PageShift = function() {
        var c = Injector.resolve("Helpers", function(c) {
            PageShift.instance = {
                containers: [],
                shift: function(a) {
                    this._setOffset(a)
                },
                restore: function() {
                    this._setOffset(null)
                },
                register: function(a) {
                    a && (a.length || (a = [a]), Array.prototype.forEach.call(a, function(a) {
                        this.containers.push({
                            node: a
                        })
                    }.bind(this)))
                },
                _getOffset: function(a) {
                    var b = a.offset;
                    isNaN(b) && (b = c.getComputedStyle(a.node, "margin-top"), b = parseInt(b, 10) || 0, a.offset = b);
                    return b
                },
                _setOffset: function(a) {
                    var b = 0;
                    a && (b = a.offsetHeight);
                    this.containers.forEach(function(a) {
                        a && "style" in a.node && (a.node.style.marginTop = this._getOffset(a) + b + "px")
                    }.bind(this))
                }
            }
        });
        PageShift.instance || c();
        return PageShift.instance
    };

    function WeightedQueue(a) {
        this.queue = [];
        this.isDirty = !1;
        this.config = a || {};
        this.config.weight = this.config.weight || 0;
        this.config.sort = "function" === typeof this.config.sort ? this.config.sort : this._sortByAscendingWeight
    }
    WeightedQueue.prototype = {
        getLength: function() {
            return this.queue.length
        },
        enqueue: function(a, b) {
            this.queue.push({
                weight: isNaN(b) ? this.config.weight : b,
                item: a
            });
            this.isDirty = !0
        },
        dequeue: function() {
            this._clean();
            return this.queue.length ? this.queue.pop().item : void 0
        },
        peek: function() {
            this._clean();
            return this.queue.length ? this.queue[this.queue.length - 1].item : void 0
        },
        _sortByAscendingWeight: function(a, b) {
            return a.weight - b.weight
        },
        _clean: function() {
            this.isDirty && (this.queue = this.queue.sort(this.config.sort),
                this.isDirty = !1)
        }
    };
    var AutoHide = function(n) {
        var k = n || 3E3,
            c = 0,
            l = 0,
            f = null,
            d = {},
            g, e, h, m;
        h = Date.now || function() {
            return +new Date
        };
        m = function(a) {
            var b;
            if (!a || !a.autoHide) return null;
            b = a.autoHide;
            if (isNaN(b) || b)
                if (b = k, a = a.contents) a = a.textContent || a.innerText || "", b += 55 * a.length;
            return b
        };
        e = function() {
            window.clearTimeout(f);
            f = null
        };
        g = function() {
            var a;
            e();
            d.currentAlert && (a = m(d.currentAlert)) && (l = h(), a = Math.max(k, a - c), f = window.setTimeout(function() {
                d.removeFn()
            }, a))
        };
        return {
            start: function(a, b) {
                a && (d.currentAlert = a);
                b && (d.removeFn =
                    b);
                g()
            },
            resume: g,
            stop: e,
            pause: function() {
                c += Math.max(h() - l, 0);
                e()
            },
            clear: function() {
                c = 0;
                e()
            },
            _getTimer: function() {
                return f
            },
            _getElapsedTime: function() {
                return c
            }
        }
    };
    var AlertFactory = {
        create: function() {
            var a = LIModules.imports("jSecure"),
                b;
            return function(c) {
                var d = c.node || document.createElement("div"),
                    e = c.message || "",
                    g = c.type || "error",
                    h = !!c.animate,
                    f = !!c.dismissable,
                    l = c.dismissMsg || "",
                    k;
                "undefined" === typeof b && a && (k = LIModules.requires("LiX"), k = k.get("jsecure_injectAlert"), b = "enabled" === k);
                d.innerHTML = "";
                e = b ? this._buildNodeSecure(a, g, e, l, f) : this._buildNode(g, e, l, f);
                d.appendChild(e);
                h && c.node && this.animate(c);
                f && !c.disableDismissHandler && d.addEventListener("click",
                    function(a) {
                        a.target.classList.contains("dismiss") && (a.preventDefault(), this.remove(d, h))
                    }.bind(this));
                return d
            }
        }(),
        remove: function(a, b) {
            b ? this.animate({
                node: a,
                shouldRemove: !0,
                callback: function() {
                    a.innerHTML = ""
                }
            }) : a.innerHTML = ""
        },
        animate: function(a) {
            if (!a.node) throw Error("you must provide a node");
            var b = a.node,
                c = a.callback,
                d = a.shouldRemove;
            b.length ? Array.prototype.forEach.call(b, function(a) {
                this._determineAnimation(a, c, d)
            }.bind(this)) : this._determineAnimation(b, c, d)
        },
        _buildNode: function(a, b, c, d) {
            var e =
                document.createElement("div");
            e.className = "alert " + a;
            e.setAttribute("role", "alert");
            e.innerHTML = b;
            d && (a = document.createElement("button"), a.className = "dismiss", a.setAttribute("type", "button"), a.setAttribute("id", "dismiss-alert"), c && (a.innerHTML = c), e.appendChild(a));
            return e
        },
        _buildNodeSecure: function(a, b, c, d, e) {
            var g = document.createElement("div"),
                h = {
                    type: b,
                    msg: c,
                    dismissMsg: d
                },
                f = {};
            b = "";
            Object.keys(h).forEach(function(b) {
                f[b] = new a.UnsafeString(h[b])
            });
            b = '\x3cdiv class\x3d"alert {type}" role\x3d"alert"\x3e{msg}';
            e && (b += '\x3cbutton class\x3d"dismiss" type\x3d"button" id\x3d"dismiss-alert"\x3e', d && (b += "{dismissMsg}"), b += "\x3c/button\x3e");
            a.setElementContent(g, b + "\x3c/div\x3e", f);
            return g.firstChild
        },
        _determineAnimation: function(a, b, c) {
            a.firstChild && a.firstChild.classList.add(c ? "animate-out" : "animate-in");
            "function" === typeof b && b()
        }
    };

    function NodeStash() {
        this.nodes = {};
        this.uid = 0
    }
    NodeStash.prototype = {
        getUID: function() {
            return "NodeStash#uid:" + ++this.uid
        },
        stash: function(a, b) {
            var c;
            if (!a) return null;
            b = !b && isNaN(b) ? this.getUID() : b;
            c = document.createElement("div");
            c.appendChild(a);
            this.nodes[b] = c;
            return {
                uid: b,
                node: a
            }
        },
        retrieve: function(a) {
            return (a = this.nodes[a]) && a.firstChild
        },
        remove: function(a) {
            var b = this.nodes[a];
            b && b.remove && b.remove();
            delete this.nodes[a]
        }
    };
    var GlobalAlertManager;
    (function() {
        var f = LIModules.imports("GlobalAlertManager");
        if (f) GlobalAlertManager = function() {
            this.injectAlert = f.injectAlert;
            this.removeAlert = f.removeAlert;
            this.events = {
                on: function() {
                    window.console.error("Invalid call to `globalNav.alertManager.events.on` in a non-consumer2 context")
                }
            }
        };
        else {
            var d = {
                    MAINTENANCE: 100,
                    UNKNOWN: 200,
                    EMAIL: 300,
                    SUBS: 400,
                    POLICY: 500,
                    APP: 600,
                    ACTION: 700
                },
                k = /<(span|a|button)[^>]+class\s*=\s*['\"]?[^'\"]*?\bdismiss\b/i,
                g = /<a/i,
                h = {
                    "global-maintenance-notice": d.MAINTENANCE,
                    "notice-cookie-policy": d.POLICY,
                    "notice-privacy": d.POLICY + 1,
                    "global-error": d.APP,
                    "notice-review-email": d.EMAIL,
                    "notice-subscription": d.SUBS
                };
            GlobalAlertManager = Injector.resolve("WeightedQueue, Helpers, AutoHide, PageShift, AlertFactory, NodeStash, CustomEvents", function(a, c, b, e, d, l, m, f) {
                this.queue = new a;
                this.nodeStash = new l;
                this.helpers = c;
                this.autoHide = b();
                this.pageShift = e;
                this.alertFactory = d;
                this._attachEvents();
                this.events = m;
                this._pauseEvents = !1;
                window.addEventListener("globalNav:ready", this._enqueueExistingAlerts.bind(this))
            });
            var b = GlobalAlertManager.prototype;
            b.queueUID = 0;
            b.alertContainers = {};
            b.hasInjectedAlertQueueContainer = !1;
            b.currentAlert = null;
            b.enqueue = function(a, c, b) {
                a && (a = this._normalizeAlert(a, c)) && a.meta && (a.meta.origin = b, this.currentAlert && this.currentAlert.meta.weight === a.meta.weight && this._dequeue(), this.queue.enqueue(a, a.meta.weight), this.showTopAlert())
            };
            b.dequeue = function(a) {
                (a = this.currentAlert) && this.currentAlert.isDismissable && this._dequeue();
                return a
            };
            b.showTopAlert = function() {
                var a = this._getAlertContainer("global-alert-queue"),
                    c = this._stashCurrentAlert(),
                    b;
                this.queue.getLength() ? (this.currentAlert = this.queue.peek(), c && c.meta.uid === this.currentAlert.meta.uid ? a.appendChild(this.currentAlert.contents) : (this._triggerEvent("willShowAlert", this.currentAlert), this.autoHide.clear(), b = this.currentAlert.contents, a.appendChild(b), setTimeout(function() {
                    var c = this.currentAlert.autoHide;
                    this.alertFactory.animate({
                        node: a,
                        callback: function() {
                            c || window.setTimeout(function() {
                                this.pageShift.shift(b)
                            }.bind(this), 600);
                            this.autoHide.start(this.currentAlert,
                                this._removeAlert.bind(this))
                        }.bind(this)
                    });
                    c && this.pageShift.shift(null)
                }.bind(this), 0), this._triggerEvent("didShowAlert", this.currentAlert))) : (this.autoHide.clear(), this.alertFactory.remove(a, !0), this.pageShift.restore())
            };
            b.injectAlert = function(a) {
                var c = {},
                    b;
                this._triggerEvent("willAddAlert");
                if (a.node) return this.alertFactory.create(a), this._triggerEvent("didAddAlert"), a.node;
                this._stashCurrentAlert();
                a.weight = this._normalizeWeight(a.weight);
                a.disableDismissHandler = !0;
                a.animate = !0;
                c.meta = {
                    weight: a.weight,
                    uid: ++this.queueUID
                };
                c.isDismissable = !!a.dismissable;
                c.autoHide = "undefined" !== typeof a.autoHide ? a.autoHide : c.isDismissable && !g.test(a.message || "");
                b = this.alertFactory.create(a);
                c.contents = b.firstChild;
                this.nodeStash.stash(c.contents, c.meta.uid);
                this.enqueue(c, a.weight, a.origin || "injectAlert");
                this._triggerEvent("didAddAlert", this.currentAlert);
                return this._getAlertContainer("global-alert-queue")
            };
            b.removeAlert = function(a, c) {
                c = c || !0;
                this._triggerEvent("willRemoveAlert", this.currentAlert);
                a && this.alertFactory.remove(a,
                    c);
                this._removeAlert()
            };
            b._attachEvents = function() {
                var a = this._getAlertContainer("global-alert-queue");
                this.userEvents = {
                    click: this._handleClick,
                    focus: this.autoHide.pause,
                    mouseenter: this.autoHide.pause,
                    mouseleave: this.autoHide.resume,
                    blur: this.autoHide.resume
                };
                Object.keys(this.userEvents).forEach(function(c) {
                    a.addEventListener(c, this.userEvents[c].bind(this), !1)
                }.bind(this))
            };
            b.removeEvents = function() {
                var a = this._getAlertContainer("global-alert-queue");
                Object.keys(this.userEvents).forEach(function(c) {
                    a.removeEventListener(c,
                        this.userEvents[c], !1)
                })
            };
            b._removeAlert = function() {
                var a = this.dequeue();
                this.showTopAlert();
                this._triggerEvent("didRemoveAlert", a)
            };
            b._enqueueExistingAlerts = function() {
                var a = this.currentAlert;
                this._pauseEvents = !0;
                Object.keys(h).forEach(function(a) {
                    var b = document.getElementById(a);
                    b && this.enqueue(b.children[0], this._normalizeWeight(h[a]), a)
                }.bind(this));
                this._pauseEvents = !1;
                !this.currentAlert || a && a.meta.uid === this.currentAlert.meta.uid || (this._triggerEvent("willShowAlert", this.currentAlert), this._triggerEvent("didShowAlert",
                    this.currentAlert))
            };
            b._stashCurrentAlert = function() {
                this.currentAlert && this.nodeStash.stash(this.currentAlert.contents, this.currentAlert.meta.uid);
                return this.currentAlert
            };
            b._injectAlertQueueContainer = function() {
                var a = this._getHomeForQueue(),
                    c = this._createQueueNode();
                a.attach(c);
                this.hasInjectedAlertQueueContainer = !0
            };
            b._getHomeForQueue = function() {
                var a = document.getElementById("layout-header"),
                    c = document.getElementById("application-body") || document.body,
                    b = function() {};
                a ? (this.pageShift.register(document.getElementById("text-ad-container") ||
                    document.getElementById("layout-main")), c = a, b = function(a) {
                    a.className = "layout-wrapper";
                    c.appendChild(a)
                }) : c && (b = function(a) {
                    c.insertBefore(a, c.firstChild)
                });
                return {
                    attach: b
                }
            };
            b._createQueueNode = function() {
                var a = document.createElement("div");
                a.id = "global-alert-queue";
                return this.alertContainers["global-alert-queue"] = a
            };
            b._getAlertContainer = function(a) {
                var c = this.alertContainers;
                this.hasInjectedAlertQueueContainer || this._injectAlertQueueContainer();
                c[a] = c[a] || document.getElementById(a);
                return c[a]
            };
            b._dequeue = function() {
                this.nodeStash.remove(this.currentAlert.contents);
                this.queue.dequeue();
                this.showTopAlert()
            };
            b._normalizeAlert = function(a, c) {
                function b(a) {
                    e.meta = {
                        weight: f._normalizeWeight(c),
                        uid: ++f.queueUID
                    };
                    "undefined" === typeof e.contents && (d.innerHTML = a, e.contents = d.firstChild);
                    e.isDismissable = k.test(a);
                    e.autoHide = e.isDismissable && !g.test(a)
                }
                var e = {},
                    d = document.createElement("div"),
                    f = this;
                this.helpers.isElement(a) ? (e.contents = a, d.innerHTML = "", b(d.appendChild(a).innerHTML)) : this.helpers.isObject(a) ?
                    e = a : "string" === typeof a && b(a);
                return e
            };
            b._normalizeWeight = function(a) {
                return "undefined" === typeof a ? d.ACTION : d[a] || a || 0
            };
            b._handleClick = function(a) {
                a.target.classList.contains("dismiss") && this.removeAlert()
            };
            b._triggerEvent = function() {
                this._pauseEvents || this.events.trigger.apply(this.events, arguments)
            }
        }
    })();
    (function() {
        Injector.register("Promise", Promise);
        Injector.register("Helpers", Helpers);
        Injector.register("Request", Request);
        Injector.register("Delegate", Delegate);
        "undefined" !== typeof WeightedQueue && Injector.register("WeightedQueue", WeightedQueue);
        "undefined" !== typeof AlertFactory && Injector.register("AlertFactory", AlertFactory);
        "undefined" !== typeof AutoHide && Injector.register("AutoHide", AutoHide);
        "undefined" !== typeof PageShift && Injector.register("PageShift", new PageShift);
        "undefined" !== typeof NodeStash &&
            Injector.register("NodeStash", NodeStash);
        "undefined" !== typeof CookieManager && Injector.register("CookieManager", CookieManager);
        "undefined" !== typeof CustomEvents && Injector.register("CustomEvents", new CustomEvents);
        "undefined" !== typeof WebTrack && Injector.register("WebTracking", new WebTrack);
        window.LI_JS_TEST && (window.globalNavAPI = {}, window._namespaces = {});
        if ("undefined" !== typeof GlobalAlertManager) {
            var b = new GlobalAlertManager;
            globalNavAPI.alertManager = {
                injectAlert: function(a) {
                    return b.injectAlert(a)
                },
                removeAlert: function(a, c) {
                    b.removeAlert(a, c)
                },
                onWillAddAlert: function(a) {
                    b.events.on("willAddAlert", a)
                },
                onWillRemoveAlert: function(a) {
                    b.events.on("willRemoveAlert", a)
                },
                onWillShowAlert: function(a) {
                    b.events.on("willShowAlert", a)
                },
                onDidAddAlert: function(a) {
                    b.events.on("didAddAlert", a)
                },
                onDidRemoveAlert: function(a) {
                    b.events.on("didRemoveAlert", a)
                },
                onDidShowAlert: function(a) {
                    b.events.on("didShowAlert", a)
                }
            }
        }
        globalNavAPI.reset = function() {
            globalNavAPI.subNav && globalNavAPI.subNav.reset()
        };
        globalNavAPI.__internal__ = {
            Request: new Request,
            Injector: Injector
        };
        globalNavAPI._namespaces = _namespaces
    })();
    (function() {
        function g(a, c) {
            for (; a && 1 === a.nodeType && a !== document;) {
                if ((a.matches || a.matchesSelector || a.msMatchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.oMatchesSelector).call(a, c)) return a;
                a = a.parentNode
            }
            return null
        }
        var c = -1;
        (function() {
            function a(b) {
                e.setAttribute("aria-expanded", b);
                b ? f.focus() : e.focus()
            }

            function h(b) {
                var a = k.length;
                return c = b ? c + 1 >= a ? 0 : c + 1 : -1 >= c - 1 ? a - 1 : c - 1
            }
            var e = document.querySelector("#minimal-nav-account-btn") || null,
                d = e ? e.parentElement : null,
                f = document.querySelector("#minimal-sub-nav") ||
                null,
                k = f ? f.getElementsByTagName("a") : null,
                l = d ? d.classList.contains("active") : !1;
            d && f && (document.body.addEventListener("click", function(b) {
                var c = b.target,
                    c = (b = g(c, "#minimal-nav-account-btn")) || g(c, ".nav-item") || g(c, "#minimal-sub-nav");
                b ? (d.classList.toggle("active"), l = d.classList.contains("active"), a(l)) : c || d.classList.remove("active")
            }), window.addEventListener("keydown", function(b) {
                if (l) {
                    if (37 === b.keyCode || 38 === b.keyCode) b.preventDefault(), k[h(!1)].focus();
                    if (39 === b.keyCode || 40 === b.keyCode) b.preventDefault(),
                        k[h(!0)].focus();
                    9 === b.keyCode && h(!b.shiftKey);
                    27 === b.keyCode && (d.classList.remove("active"), a(!1))
                }
            }))
        })()
    })();
    (function() {
        function m(a, c) {
            var b = new XMLHttpRequest,
                e = LIModules.requires("jsConfig").get("LoggedOutBadging").url;
            b.open("GET", e + "\x26midToken\x3d" + encodeURIComponent(a));
            b.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset\x3dUTF-8");
            b.timeout = 3E3;
            b.onload = function() {
                var a;
                try {
                    var d = JSON.parse(b.responseText);
                    "ok" === d.status && (a = d.content.badging_data)
                } catch (e) {}
                c(a)
            };
            b.onerror = function() {
                c()
            };
            b.send()
        }

        function k(a) {
            var c = document.querySelector("#minimal-util-nav .nav-joinnow"),
                b = document.querySelector("#minimal-util-nav .nav-signin");
            if (null !== c && null !== b)
                if (a && a.badgeCount) {
                    var e = document.querySelector("#minimal-util-nav .nav-signin a"),
                        h = document.querySelector("#minimal-util-nav ul.nav-bar"),
                        d = document.createElement("li"),
                        f = document.createElement("p"),
                        g = document.querySelector(".logo_wrapper--dormant .logo-badge");
                    c.parentNode.removeChild(c);
                    b.classList.remove("hide");
                    g && (g.classList.remove("hidden"), g.textContent = a.badgeCount);
                    e.classList.add("loggedout-badge");
                    e.classList.add("highlight");
                    e.setAttribute("data-count", a.badgeCount);
                    h.insertBefore(d, h.firstChild);
                    d.classList.add("nav-item");
                    d.classList.add("nav-notification-msg");
                    d.appendChild(f);
                    f.classList.add("nav-text");
                    f.textContent = a.message
                } else c.classList.remove("hide"), b.classList.remove("hide")
        }

        function l(a) {
            var c = {},
                b = /[\?&]([^?&]+)=([^&#$]+)/g;
            a && a.length && (c = {}, a.replace(b, function(a, b, d) {
                c[b] = decodeURIComponent(d)
            }));
            return c
        }(function() {
            var a;
            a = l(window.location.search);
            !a.midToken && a.session_redirect && (a = l(a.session_redirect));
            (a = a.midToken || null) ? m(a, k): k()
        })()
    })(); // signal that the globalNav is ready
    window.dispatchEvent(new window.CustomEvent('globalNav:ready'));

    // end closure...
}());