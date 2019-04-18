window.mlbOkta = function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    return n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
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
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 35)
}([function(e, t) {
    /*!
     * Copyright (c) 2015-2016, Okta, Inc. and/or its affiliates. All rights reserved.
     * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
     *
     * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
     * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     *
     * See the License for the specific language governing permissions and limitations under the License.
     */
    var n = e.exports;
    n.base64UrlToBase64 = function(e) {
        return e.replace(/\-/g, "+").replace(/_/g, "/")
    }, n.base64UrlToString = function(e) {
        var t = n.base64UrlToBase64(e);
        switch (t.length % 4) {
            case 0:
                break;
            case 2:
                t += "==";
                break;
            case 3:
                t += "=";
                break;
            default:
                throw "Not a valid Base64Url"
        }
        var r = atob(t);
        try {
            return decodeURIComponent(escape(r))
        } catch (e) {
            return r
        }
    }, n.stringToBuffer = function(e) {
        for (var t = new Uint8Array(e.length), n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
        return t
    }, n.base64UrlDecode = function(e) {
        return atob(n.base64UrlToBase64(e))
    }, n.bind = function(e, t) {
        var n = Array.prototype.slice.call(arguments, 2);
        return function() {
            var r = Array.prototype.slice.call(arguments);
            return r = n.concat(r), e.apply(t, r)
        }
    }, n.isAbsoluteUrl = function(e) {
        return /^(?:[a-z]+:)?\/\//i.test(e)
    }, n.isString = function(e) {
        return "[object String]" === Object.prototype.toString.call(e)
    }, n.isObject = function(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }, n.isNumber = function(e) {
        return "[object Number]" === Object.prototype.toString.call(e)
    }, n.isArray = function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }, n.isoToUTCString = function(e) {
        var t = e.match(/\d+/g),
            n = Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4], t[5]);
        return new Date(n).toUTCString()
    }, n.toQueryParams = function(e) {
        var t = [];
        if (null !== e)
            for (var n in e) e.hasOwnProperty(n) && void 0 !== e[n] && null !== e[n] && t.push(n + "=" + encodeURIComponent(e[n]));
        return t.length ? "?" + t.join("&") : ""
    }, n.genRandomString = function(e) {
        for (var t = "abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", n = "", r = 0, o = t.length; r < e; ++r) n += t[Math.floor(Math.random() * o)];
        return n
    }, n.extend = function() {
        var e = arguments[0];
        [].slice.call(arguments, 1).forEach(function(t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })
    }, n.removeNils = function(e) {
        var t = {};
        for (var n in e)
            if (e.hasOwnProperty(n)) {
                var r = e[n];
                null != r && (t[n] = r)
            } return t
    }, n.clone = function(e) {
        if (e) {
            var t = JSON.stringify(e);
            if (t) return JSON.parse(t)
        }
        return e
    }, n.omit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1),
            r = {};
        for (var o in e) e.hasOwnProperty(o) && -1 == t.indexOf(o) && (r[o] = e[o]);
        return n.clone(r)
    }, n.find = function(e, t) {
        for (var n = e.length; n--;) {
            var r = e[n],
                o = !0;
            for (var i in t)
                if (t.hasOwnProperty(i) && r[i] !== t[i]) {
                    o = !1;
                    break
                } if (o) return r
        }
    }, n.getLink = function(e, t, r) {
        if (e && e._links) {
            var o = n.clone(e._links[t]);
            return o && o.name && r ? o.name === r ? o : void 0 : o
        }
    }, n.getNativeConsole = function() {
        return window.console
    }, n.getConsole = function() {
        var e = n.getNativeConsole();
        return e && e.log ? e : {
            log: function() {}
        }
    }, n.warn = function(e) {
        n.getConsole().log("[okta-auth-sdk] WARN: " + e)
    }, n.deprecate = function(e) {
        n.getConsole().log("[okta-auth-sdk] DEPRECATION: " + e)
    }, n.deprecateWrap = function(e, t) {
        return function() {
            return n.deprecate(e), t.apply(null, arguments)
        }
    }, n.removeTrailingSlash = function(e) {
        if (e) return "/" === e.slice(-1) ? e.slice(0, -1) : e
    }, n.isIE11OrLess = function() {
        return !!document.documentMode && document.documentMode <= 11
    }
}, function(e, t, n) {
    var r, o;
    /*!
     * JavaScript Cookie v2.2.0
     * https://github.com/js-cookie/js-cookie
     *
     * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
     * Released under the MIT license
     */
    ! function(i) {
        if (void 0 === (o = "function" == typeof(r = i) ? r.call(t, n, t, e) : r) || (e.exports = o), !0, e.exports = i(), !!0) {
            var s = window.Cookies,
                a = window.Cookies = i();
            a.noConflict = function() {
                return window.Cookies = s, a
            }
        }
    }(function() {
        function e() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) t[r] = n[r]
            }
            return t
        }
        return function t(n) {
            function r(t, o, i) {
                var s;
                if ("undefined" != typeof document) {
                    if (arguments.length > 1) {
                        if ("number" == typeof(i = e({
                                path: "/"
                            }, r.defaults, i)).expires) {
                            var a = new Date;
                            a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), i.expires = a
                        }
                        i.expires = i.expires ? i.expires.toUTCString() : "";
                        try {
                            s = JSON.stringify(o), /^[\{\[]/.test(s) && (o = s)
                        } catch (e) {}
                        o = n.write ? n.write(o, t) : encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                        var u = "";
                        for (var c in i) i[c] && (u += "; " + c, !0 !== i[c] && (u += "=" + i[c]));
                        return document.cookie = t + "=" + o + u
                    }
                    t || (s = {});
                    for (var f = document.cookie ? document.cookie.split("; ") : [], l = /(%[0-9A-Z]{2})+/g, p = 0; p < f.length; p++) {
                        var d = f[p].split("="),
                            h = d.slice(1).join("=");
                        this.json || '"' !== h.charAt(0) || (h = h.slice(1, -1));
                        try {
                            var m = d[0].replace(l, decodeURIComponent);
                            if (h = n.read ? n.read(h, m) : n(h, m) || h.replace(l, decodeURIComponent), this.json) try {
                                h = JSON.parse(h)
                            } catch (e) {}
                            if (t === m) {
                                s = h;
                                break
                            }
                            t || (s[m] = h)
                        } catch (e) {}
                    }
                    return s
                }
            }
            return r.set = r, r.get = function(e) {
                return r.call(r, e)
            }, r.getJSON = function() {
                return r.apply({
                    json: !0
                }, [].slice.call(arguments))
            }, r.defaults = {}, r.remove = function(t, n) {
                r(t, "", e(n, {
                    expires: -1
                }))
            }, r.withConverter = t, r
        }(function() {})
    })
}, function(e, t) {
    /*!
     * Copyright (c) 2015-2016, Okta, Inc. and/or its affiliates. All rights reserved.
     * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
     *
     * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
     * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     *
     * See the License for the specific language governing permissions and limitations under the License.
     */
    function n(e, t) {
        this.name = "AuthSdkError", this.message = e, this.errorCode = "INTERNAL", this.errorSummary = e, this.errorLink = "INTERNAL", this.errorId = "INTERNAL", this.errorCauses = [], t && (this.xhr = t)
    }
    n.prototype = new Error, e.exports = n
}, function(e, t) {
    e.exports = {
        STATE_TOKEN_COOKIE_NAME: "oktaStateToken",
        DEFAULT_POLLING_DELAY: 500,
        DEFAULT_MAX_CLOCK_SKEW: 300,
        DEFAULT_CACHE_DURATION: 86400,
        FRAME_ID: "okta-oauth-helper-frame",
        REDIRECT_OAUTH_PARAMS_COOKIE_NAME: "okta-oauth-redirect-params",
        REDIRECT_STATE_COOKIE_NAME: "okta-oauth-state",
        REDIRECT_NONCE_COOKIE_NAME: "okta-oauth-nonce",
        TOKEN_STORAGE_NAME: "okta-token-storage",
        CACHE_STORAGE_NAME: "okta-cache-storage",
        SDK_VERSION: "1.16.0"
    }
}, function(e, t) {
    var n = document.querySelector('meta[name="env"]') ? document.querySelector('meta[name="env"]').content : "production",
        r = {
            local: {
                clientId: "0oafudk8vcCsZRpRj0h7",
                shim: "https://qa-ids-shim.mlb.com",
                okta: "https://qa-ids.mlb.com",
                issuer: "https://qa-ids.mlb.com/oauth2/ausg0y0s07iKGqVKv0h7",
                redirectUri: "http://local.mlb.com:3000",
                entitlementServices: "https://mlbentitlementservices.commerce-dev.mlbinfra.com/entitlements?",
                profile: "https://profile-qa.mlb.com/api/v1"
            },
            qa: {
                clientId: "0oafudk8vcCsZRpRj0h7",
                shim: "https://qa-ids-shim.mlb.com",
                okta: "https://qa-ids.mlb.com",
                issuer: "https://qa-ids.mlb.com/oauth2/ausg0y0s07iKGqVKv0h7",
                redirectUri: "https://qa-aws.mlb.com/login",
                entitlementServices: "https://mlbentitlementservices.commerce-qa.mlbinfra.com/entitlements?",
                profile: "https://profile-qa.mlb.com/api/v1"
            },
            beta: {
                clientId: "0oap7wa857jcvPlZ5355",
                shim: "https://ids-shim.mlb.com",
                okta: "https://ids.mlb.com",
                issuer: "https://ids.mlb.com/oauth2/aus1m088yK07noBfh356",
                redirectUri: "https://beta-aws.mlb.com/login",
                entitlementServices: "https://mlbentitlementservices.mlb.com/entitlements?",
                profile: "https://profile.mlb.com/api/v1"
            },
            production: {
                clientId: "0oap7wa857jcvPlZ5355",
                shim: "https://ids-shim.mlb.com",
                okta: "https://ids.mlb.com",
                issuer: "https://ids.mlb.com/oauth2/aus1m088yK07noBfh356",
                redirectUri: "https://www.mlb.com/login",
                entitlementServices: "https://mlbentitlementservices.mlb.com/entitlements?",
                profile: "https://profile.mlb.com/api/v1"
            }
        };
    e.exports = {
        config: r[n],
        env: n,
        CONFIG: r
    }
}, function(e, t, n) {
    (function(t, n) {
        /*!
         *
         * Copyright 2009-2012 Kris Kowal under the terms of the MIT
         * license found at http://github.com/kriskowal/q/raw/master/LICENSE
         *
         * With parts by Tyler Close
         * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
         * at http://www.opensource.org/licenses/mit-license.html
         * Forked at ref_send.js version: 2009-05-11
         *
         * With parts by Mark Miller
         * Copyright (C) 2011 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         *
         */
        ! function(t) {
            "use strict";
            "function" == typeof bootstrap ? bootstrap("promise", t) : e.exports = t()
        }(function() {
            "use strict";
            var e = !1;
            try {
                throw new Error
            } catch (t) {
                e = !!t.stack
            }
            var r, o = _(),
                i = function() {},
                s = function() {
                    var e = {
                            task: void 0,
                            next: null
                        },
                        r = e,
                        o = !1,
                        i = void 0,
                        a = !1,
                        u = [];

                    function c() {
                        for (var t, n; e.next;) t = (e = e.next).task, e.task = void 0, (n = e.domain) && (e.domain = void 0, n.enter()), f(t, n);
                        for (; u.length;) f(t = u.pop());
                        o = !1
                    }

                    function f(e, t) {
                        try {
                            e()
                        } catch (e) {
                            if (a) throw t && t.exit(), setTimeout(c, 0), t && t.enter(), e;
                            setTimeout(function() {
                                throw e
                            }, 0)
                        }
                        t && t.exit()
                    }
                    if (s = function(e) {
                            r = r.next = {
                                task: e,
                                domain: a && t.domain,
                                next: null
                            }, o || (o = !0, i())
                        }, "object" == typeof t && "[object process]" === t.toString() && t.nextTick) a = !0, i = function() {
                        t.nextTick(c)
                    };
                    else if ("function" == typeof n) i = "undefined" != typeof window ? n.bind(window, c) : function() {
                        n(c)
                    };
                    else if ("undefined" != typeof MessageChannel) {
                        var l = new MessageChannel;
                        l.port1.onmessage = function() {
                            i = p, l.port1.onmessage = c, c()
                        };
                        var p = function() {
                            l.port2.postMessage(0)
                        };
                        i = function() {
                            setTimeout(c, 0), p()
                        }
                    } else i = function() {
                        setTimeout(c, 0)
                    };
                    return s.runAfter = function(e) {
                        u.push(e), o || (o = !0, i())
                    }, s
                }(),
                a = Function.call;

            function u(e) {
                return function() {
                    return a.apply(e, arguments)
                }
            }
            var c, f = u(Array.prototype.slice),
                l = u(Array.prototype.reduce || function(e, t) {
                    var n = 0,
                        r = this.length;
                    if (1 === arguments.length)
                        for (;;) {
                            if (n in this) {
                                t = this[n++];
                                break
                            }
                            if (++n >= r) throw new TypeError
                        }
                    for (; n < r; n++) n in this && (t = e(t, this[n], n));
                    return t
                }),
                p = u(Array.prototype.indexOf || function(e) {
                    for (var t = 0; t < this.length; t++)
                        if (this[t] === e) return t;
                    return -1
                }),
                d = u(Array.prototype.map || function(e, t) {
                    var n = this,
                        r = [];
                    return l(n, function(o, i, s) {
                        r.push(e.call(t, i, s, n))
                    }, void 0), r
                }),
                h = Object.create || function(e) {
                    function t() {}
                    return t.prototype = e, new t
                },
                m = u(Object.prototype.hasOwnProperty),
                y = Object.keys || function(e) {
                    var t = [];
                    for (var n in e) m(e, n) && t.push(n);
                    return t
                },
                v = u(Object.prototype.toString);
            c = "undefined" != typeof ReturnValue ? ReturnValue : function(e) {
                this.value = e
            };
            var g = "From previous event:";

            function w(t, n) {
                if (e && n.stack && "object" == typeof t && null !== t && t.stack && -1 === t.stack.indexOf(g)) {
                    for (var r = [], o = n; o; o = o.source) o.stack && r.unshift(o.stack);
                    r.unshift(t.stack);
                    var i = r.join("\n" + g + "\n");
                    t.stack = function(e) {
                        for (var t = e.split("\n"), n = [], r = 0; r < t.length; ++r) {
                            var o = t[r];
                            !k(o) && (-1 === (i = o).indexOf("(module.js:") && -1 === i.indexOf("(node.js:")) && o && n.push(o)
                        }
                        var i;
                        return n.join("\n")
                    }(i)
                }
            }

            function b(e) {
                var t = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(e);
                if (t) return [t[1], Number(t[2])];
                var n = /at ([^ ]+):(\d+):(?:\d+)$/.exec(e);
                if (n) return [n[1], Number(n[2])];
                var r = /.*@(.+):(\d+)$/.exec(e);
                return r ? [r[1], Number(r[2])] : void 0
            }

            function k(e) {
                var t = b(e);
                if (!t) return !1;
                var n = t[0],
                    i = t[1];
                return n === r && i >= o && i <= G
            }

            function _() {
                if (e) try {
                    throw new Error
                } catch (e) {
                    var t = e.stack.split("\n"),
                        n = b(t[0].indexOf("@") > 0 ? t[1] : t[2]);
                    if (!n) return;
                    return r = n[0], n[1]
                }
            }

            function T(e) {
                return e instanceof S ? e : R(e) ? (t = e, n = A(), T.nextTick(function() {
                    try {
                        t.then(n.resolve, n.reject, n.notify)
                    } catch (e) {
                        n.reject(e)
                    }
                }), n.promise) : F(e);
                var t, n
            }

            function A() {
                var t, n = [],
                    r = [],
                    o = h(A.prototype),
                    i = h(S.prototype);
                if (i.promiseDispatch = function(e, o, i) {
                        var s = f(arguments);
                        n ? (n.push(s), "when" === o && i[1] && r.push(i[1])) : T.nextTick(function() {
                            t.promiseDispatch.apply(t, s)
                        })
                    }, i.valueOf = function() {
                        if (n) return i;
                        var e = C(t);
                        return j(e) && (t = e), e
                    }, i.inspect = function() {
                        return t ? t.inspect() : {
                            state: "pending"
                        }
                    }, T.longStackSupport && e) try {
                    throw new Error
                } catch (e) {
                    i.stack = e.stack.substring(e.stack.indexOf("\n") + 1)
                }

                function s(e) {
                    t = e, i.source = e, l(n, function(t, n) {
                        T.nextTick(function() {
                            e.promiseDispatch.apply(e, n)
                        })
                    }, void 0), n = void 0, r = void 0
                }
                return o.promise = i, o.resolve = function(e) {
                    t || s(T(e))
                }, o.fulfill = function(e) {
                    t || s(F(e))
                }, o.reject = function(e) {
                    t || s(H(e))
                }, o.notify = function(e) {
                    t || l(r, function(t, n) {
                        T.nextTick(function() {
                            n(e)
                        })
                    }, void 0)
                }, o
            }

            function x(e) {
                if ("function" != typeof e) throw new TypeError("resolver must be a function.");
                var t = A();
                try {
                    e(t.resolve, t.reject, t.notify)
                } catch (e) {
                    t.reject(e)
                }
                return t.promise
            }

            function E(e) {
                return x(function(t, n) {
                    for (var r = 0, o = e.length; r < o; r++) T(e[r]).then(t, n)
                })
            }

            function S(e, t, n) {
                void 0 === t && (t = function(e) {
                    return H(new Error("Promise does not support operation: " + e))
                }), void 0 === n && (n = function() {
                    return {
                        state: "unknown"
                    }
                });
                var r = h(S.prototype);
                if (r.promiseDispatch = function(n, o, i) {
                        var s;
                        try {
                            s = e[o] ? e[o].apply(r, i) : t.call(r, o, i)
                        } catch (e) {
                            s = H(e)
                        }
                        n && n(s)
                    }, r.inspect = n, n) {
                    var o = n();
                    "rejected" === o.state && (r.exception = o.reason), r.valueOf = function() {
                        var e = n();
                        return "pending" === e.state || "rejected" === e.state ? r : e.value
                    }
                }
                return r
            }

            function O(e, t, n, r) {
                return T(e).then(t, n, r)
            }

            function C(e) {
                if (j(e)) {
                    var t = e.inspect();
                    if ("fulfilled" === t.state) return t.value
                }
                return e
            }

            function j(e) {
                return e instanceof S
            }

            function R(e) {
                return (t = e) === Object(t) && "function" == typeof e.then;
                var t
            }
            T.resolve = T, T.nextTick = s, T.longStackSupport = !1, "object" == typeof t && t && t.env && t.env.Q_DEBUG && (T.longStackSupport = !0), T.defer = A, A.prototype.makeNodeResolver = function() {
                var e = this;
                return function(t, n) {
                    t ? e.reject(t) : arguments.length > 2 ? e.resolve(f(arguments, 1)) : e.resolve(n)
                }
            }, T.Promise = x, T.promise = x, x.race = E, x.all = W, x.reject = H, x.resolve = T, T.passByCopy = function(e) {
                return e
            }, S.prototype.passByCopy = function() {
                return this
            }, T.join = function(e, t) {
                return T(e).join(t)
            }, S.prototype.join = function(e) {
                return T([this, e]).spread(function(e, t) {
                    if (e === t) return e;
                    throw new Error("Can't join: not the same: " + e + " " + t)
                })
            }, T.race = E, S.prototype.race = function() {
                return this.then(T.race)
            }, T.makePromise = S, S.prototype.toString = function() {
                return "[object Promise]"
            }, S.prototype.then = function(e, t, n) {
                var r = this,
                    o = A(),
                    i = !1;
                return T.nextTick(function() {
                    r.promiseDispatch(function(t) {
                        i || (i = !0, o.resolve(function(t) {
                            try {
                                return "function" == typeof e ? e(t) : t
                            } catch (e) {
                                return H(e)
                            }
                        }(t)))
                    }, "when", [function(e) {
                        i || (i = !0, o.resolve(function(e) {
                            if ("function" == typeof t) {
                                w(e, r);
                                try {
                                    return t(e)
                                } catch (e) {
                                    return H(e)
                                }
                            }
                            return H(e)
                        }(e)))
                    }])
                }), r.promiseDispatch(void 0, "when", [void 0, function(e) {
                    var t, r = !1;
                    try {
                        t = function(e) {
                            return "function" == typeof n ? n(e) : e
                        }(e)
                    } catch (e) {
                        if (r = !0, !T.onerror) throw e;
                        T.onerror(e)
                    }
                    r || o.notify(t)
                }]), o.promise
            }, T.tap = function(e, t) {
                return T(e).tap(t)
            }, S.prototype.tap = function(e) {
                return e = T(e), this.then(function(t) {
                    return e.fcall(t).thenResolve(t)
                })
            }, T.when = O, S.prototype.thenResolve = function(e) {
                return this.then(function() {
                    return e
                })
            }, T.thenResolve = function(e, t) {
                return T(e).thenResolve(t)
            }, S.prototype.thenReject = function(e) {
                return this.then(function() {
                    throw e
                })
            }, T.thenReject = function(e, t) {
                return T(e).thenReject(t)
            }, T.nearer = C, T.isPromise = j, T.isPromiseAlike = R, T.isPending = function(e) {
                return j(e) && "pending" === e.inspect().state
            }, S.prototype.isPending = function() {
                return "pending" === this.inspect().state
            }, T.isFulfilled = function(e) {
                return !j(e) || "fulfilled" === e.inspect().state
            }, S.prototype.isFulfilled = function() {
                return "fulfilled" === this.inspect().state
            }, T.isRejected = function(e) {
                return j(e) && "rejected" === e.inspect().state
            }, S.prototype.isRejected = function() {
                return "rejected" === this.inspect().state
            };
            var U, I, P, M = [],
                N = [],
                D = [],
                q = !0;

            function L() {
                M.length = 0, N.length = 0, q || (q = !0)
            }

            function H(e) {
                var n = S({
                    when: function(n) {
                        return n && function(e) {
                            if (q) {
                                var n = p(N, e); - 1 !== n && ("object" == typeof t && "function" == typeof t.emit && T.nextTick.runAfter(function() {
                                    var r = p(D, e); - 1 !== r && (t.emit("rejectionHandled", M[n], e), D.splice(r, 1))
                                }), N.splice(n, 1), M.splice(n, 1))
                            }
                        }(this), n ? n(e) : this
                    }
                }, function() {
                    return this
                }, function() {
                    return {
                        state: "rejected",
                        reason: e
                    }
                });
                return function(e, n) {
                    q && ("object" == typeof t && "function" == typeof t.emit && T.nextTick.runAfter(function() {
                        -1 !== p(N, e) && (t.emit("unhandledRejection", n, e), D.push(e))
                    }), N.push(e), n && void 0 !== n.stack ? M.push(n.stack) : M.push("(no stack) " + n))
                }(n, e), n
            }

            function F(e) {
                return S({
                    when: function() {
                        return e
                    },
                    get: function(t) {
                        return e[t]
                    },
                    set: function(t, n) {
                        e[t] = n
                    },
                    delete: function(t) {
                        delete e[t]
                    },
                    post: function(t, n) {
                        return null == t ? e.apply(void 0, n) : e[t].apply(e, n)
                    },
                    apply: function(t, n) {
                        return e.apply(t, n)
                    },
                    keys: function() {
                        return y(e)
                    }
                }, void 0, function() {
                    return {
                        state: "fulfilled",
                        value: e
                    }
                })
            }

            function B(e, t, n) {
                return T(e).spread(t, n)
            }

            function K(e, t, n) {
                return T(e).dispatch(t, n)
            }

            function W(e) {
                return O(e, function(e) {
                    var t = 0,
                        n = A();
                    return l(e, function(r, o, i) {
                        var s;
                        j(o) && "fulfilled" === (s = o.inspect()).state ? e[i] = s.value : (++t, O(o, function(r) {
                            e[i] = r, 0 == --t && n.resolve(e)
                        }, n.reject, function(e) {
                            n.notify({
                                index: i,
                                value: e
                            })
                        }))
                    }, void 0), 0 === t && n.resolve(e), n.promise
                })
            }

            function z(e) {
                if (0 === e.length) return T.resolve();
                var t = T.defer(),
                    n = 0;
                return l(e, function(r, o, i) {
                    var s = e[i];
                    n++, O(s, function(e) {
                        t.resolve(e)
                    }, function() {
                        0 == --n && t.reject(new Error("Can't get fulfillment value from any promise, all promises were rejected."))
                    }, function(e) {
                        t.notify({
                            index: i,
                            value: e
                        })
                    })
                }, void 0), t.promise
            }

            function X(e) {
                return O(e, function(e) {
                    return e = d(e, T), O(W(d(e, function(e) {
                        return O(e, i, i)
                    })), function() {
                        return e
                    })
                })
            }
            T.resetUnhandledRejections = L, T.getUnhandledReasons = function() {
                return M.slice()
            }, T.stopUnhandledRejectionTracking = function() {
                L(), q = !1
            }, L(), T.reject = H, T.fulfill = F, T.master = function(e) {
                return S({
                    isDef: function() {}
                }, function(t, n) {
                    return K(e, t, n)
                }, function() {
                    return T(e).inspect()
                })
            }, T.spread = B, S.prototype.spread = function(e, t) {
                return this.all().then(function(t) {
                    return e.apply(void 0, t)
                }, t)
            }, T.async = function(e) {
                return function() {
                    function t(e, t) {
                        var i;
                        if ("undefined" == typeof StopIteration) {
                            try {
                                i = n[e](t)
                            } catch (e) {
                                return H(e)
                            }
                            return i.done ? T(i.value) : O(i.value, r, o)
                        }
                        try {
                            i = n[e](t)
                        } catch (e) {
                            return function(e) {
                                return "[object StopIteration]" === v(e) || e instanceof c
                            }(e) ? T(e.value) : H(e)
                        }
                        return O(i, r, o)
                    }
                    var n = e.apply(this, arguments),
                        r = t.bind(t, "next"),
                        o = t.bind(t, "throw");
                    return r()
                }
            }, T.spawn = function(e) {
                T.done(T.async(e)())
            }, T.return = function(e) {
                throw new c(e)
            }, T.promised = function(e) {
                return function() {
                    return B([this, W(arguments)], function(t, n) {
                        return e.apply(t, n)
                    })
                }
            }, T.dispatch = K, S.prototype.dispatch = function(e, t) {
                var n = this,
                    r = A();
                return T.nextTick(function() {
                    n.promiseDispatch(r.resolve, e, t)
                }), r.promise
            }, T.get = function(e, t) {
                return T(e).dispatch("get", [t])
            }, S.prototype.get = function(e) {
                return this.dispatch("get", [e])
            }, T.set = function(e, t, n) {
                return T(e).dispatch("set", [t, n])
            }, S.prototype.set = function(e, t) {
                return this.dispatch("set", [e, t])
            }, T.del = T.delete = function(e, t) {
                return T(e).dispatch("delete", [t])
            }, S.prototype.del = S.prototype.delete = function(e) {
                return this.dispatch("delete", [e])
            }, T.mapply = T.post = function(e, t, n) {
                return T(e).dispatch("post", [t, n])
            }, S.prototype.mapply = S.prototype.post = function(e, t) {
                return this.dispatch("post", [e, t])
            }, T.send = T.mcall = T.invoke = function(e, t) {
                return T(e).dispatch("post", [t, f(arguments, 2)])
            }, S.prototype.send = S.prototype.mcall = S.prototype.invoke = function(e) {
                return this.dispatch("post", [e, f(arguments, 1)])
            }, T.fapply = function(e, t) {
                return T(e).dispatch("apply", [void 0, t])
            }, S.prototype.fapply = function(e) {
                return this.dispatch("apply", [void 0, e])
            }, T.try = T.fcall = function(e) {
                return T(e).dispatch("apply", [void 0, f(arguments, 1)])
            }, S.prototype.fcall = function() {
                return this.dispatch("apply", [void 0, f(arguments)])
            }, T.fbind = function(e) {
                var t = T(e),
                    n = f(arguments, 1);
                return function() {
                    return t.dispatch("apply", [this, n.concat(f(arguments))])
                }
            }, S.prototype.fbind = function() {
                var e = this,
                    t = f(arguments);
                return function() {
                    return e.dispatch("apply", [this, t.concat(f(arguments))])
                }
            }, T.keys = function(e) {
                return T(e).dispatch("keys", [])
            }, S.prototype.keys = function() {
                return this.dispatch("keys", [])
            }, T.all = W, S.prototype.all = function() {
                return W(this)
            }, T.any = z, S.prototype.any = function() {
                return z(this)
            }, T.allResolved = (U = X, I = "allResolved", P = "allSettled", function() {
                return "undefined" != typeof console && "function" == typeof console.warn && console.warn(I + " is deprecated, use " + P + " instead.", new Error("").stack), U.apply(U, arguments)
            }), S.prototype.allResolved = function() {
                return X(this)
            }, T.allSettled = function(e) {
                return T(e).allSettled()
            }, S.prototype.allSettled = function() {
                return this.then(function(e) {
                    return W(d(e, function(e) {
                        function t() {
                            return e.inspect()
                        }
                        return (e = T(e)).then(t, t)
                    }))
                })
            }, T.fail = T.catch = function(e, t) {
                return T(e).then(void 0, t)
            }, S.prototype.fail = S.prototype.catch = function(e) {
                return this.then(void 0, e)
            }, T.progress = function(e, t) {
                return T(e).then(void 0, void 0, t)
            }, S.prototype.progress = function(e) {
                return this.then(void 0, void 0, e)
            }, T.fin = T.finally = function(e, t) {
                return T(e).finally(t)
            }, S.prototype.fin = S.prototype.finally = function(e) {
                return e = T(e), this.then(function(t) {
                    return e.fcall().then(function() {
                        return t
                    })
                }, function(t) {
                    return e.fcall().then(function() {
                        throw t
                    })
                })
            }, T.done = function(e, t, n, r) {
                return T(e).done(t, n, r)
            }, S.prototype.done = function(e, n, r) {
                var o = function(e) {
                        T.nextTick(function() {
                            if (w(e, i), !T.onerror) throw e;
                            T.onerror(e)
                        })
                    },
                    i = e || n || r ? this.then(e, n, r) : this;
                "object" == typeof t && t && t.domain && (o = t.domain.bind(o)), i.then(void 0, o)
            }, T.timeout = function(e, t, n) {
                return T(e).timeout(t, n)
            }, S.prototype.timeout = function(e, t) {
                var n = A(),
                    r = setTimeout(function() {
                        t && "string" != typeof t || ((t = new Error(t || "Timed out after " + e + " ms")).code = "ETIMEDOUT"), n.reject(t)
                    }, e);
                return this.then(function(e) {
                    clearTimeout(r), n.resolve(e)
                }, function(e) {
                    clearTimeout(r), n.reject(e)
                }, n.notify), n.promise
            }, T.delay = function(e, t) {
                return void 0 === t && (t = e, e = void 0), T(e).delay(t)
            }, S.prototype.delay = function(e) {
                return this.then(function(t) {
                    var n = A();
                    return setTimeout(function() {
                        n.resolve(t)
                    }, e), n.promise
                })
            }, T.nfapply = function(e, t) {
                return T(e).nfapply(t)
            }, S.prototype.nfapply = function(e) {
                var t = A(),
                    n = f(e);
                return n.push(t.makeNodeResolver()), this.fapply(n).fail(t.reject), t.promise
            }, T.nfcall = function(e) {
                var t = f(arguments, 1);
                return T(e).nfapply(t)
            }, S.prototype.nfcall = function() {
                var e = f(arguments),
                    t = A();
                return e.push(t.makeNodeResolver()), this.fapply(e).fail(t.reject), t.promise
            }, T.nfbind = T.denodeify = function(e) {
                var t = f(arguments, 1);
                return function() {
                    var n = t.concat(f(arguments)),
                        r = A();
                    return n.push(r.makeNodeResolver()), T(e).fapply(n).fail(r.reject), r.promise
                }
            }, S.prototype.nfbind = S.prototype.denodeify = function() {
                var e = f(arguments);
                return e.unshift(this), T.denodeify.apply(void 0, e)
            }, T.nbind = function(e, t) {
                var n = f(arguments, 2);
                return function() {
                    var r = n.concat(f(arguments)),
                        o = A();
                    return r.push(o.makeNodeResolver()), T(function() {
                        return e.apply(t, arguments)
                    }).fapply(r).fail(o.reject), o.promise
                }
            }, S.prototype.nbind = function() {
                var e = f(arguments, 0);
                return e.unshift(this), T.nbind.apply(void 0, e)
            }, T.nmapply = T.npost = function(e, t, n) {
                return T(e).npost(t, n)
            }, S.prototype.nmapply = S.prototype.npost = function(e, t) {
                var n = f(t || []),
                    r = A();
                return n.push(r.makeNodeResolver()), this.dispatch("post", [e, n]).fail(r.reject), r.promise
            }, T.nsend = T.nmcall = T.ninvoke = function(e, t) {
                var n = f(arguments, 2),
                    r = A();
                return n.push(r.makeNodeResolver()), T(e).dispatch("post", [t, n]).fail(r.reject), r.promise
            }, S.prototype.nsend = S.prototype.nmcall = S.prototype.ninvoke = function(e) {
                var t = f(arguments, 1),
                    n = A();
                return t.push(n.makeNodeResolver()), this.dispatch("post", [e, t]).fail(n.reject), n.promise
            }, T.nodeify = function(e, t) {
                return T(e).nodeify(t)
            }, S.prototype.nodeify = function(e) {
                if (!e) return this;
                this.then(function(t) {
                    T.nextTick(function() {
                        e(null, t)
                    })
                }, function(t) {
                    T.nextTick(function() {
                        e(t)
                    })
                })
            }, T.noConflict = function() {
                throw new Error("Q.noConflict only works when Q is used as a global")
            };
            var G = _();
            return T
        })
    }).call(this, n(8), n(24).setImmediate)
}, function(e, t, n) {
    var r = n(0),
        o = n(7),
        i = n(10),
        s = n(5),
        a = n(26),
        u = n(3);

    function c(e, t) {
        var n = (t = t || {}).url,
            c = t.method,
            f = t.args,
            l = t.saveAuthnState,
            p = t.accessToken,
            d = i.getHttpCache();
        if (t.cacheResponse) {
            var h = d.getStorage()[n];
            if (h && Date.now() / 1e3 < h.expiresAt) return s.resolve(h.response)
        }
        var m = {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Okta-User-Agent-Extended": e.userAgent
        };
        r.extend(m, e.options.headers, t.headers), p && r.isString(p) && (m.Authorization = "Bearer " + p);
        var y, v, g = {
            headers: m,
            data: f || void 0
        };
        return new s(e.options.ajaxRequest(c, n, g)).then(function(e) {
            return (v = e.responseText) && r.isString(v) && (v = JSON.parse(v)), l && (v.stateToken || o.deleteCookie(u.STATE_TOKEN_COOKIE_NAME)), v && v.stateToken && v.expiresAt && o.setCookie(u.STATE_TOKEN_COOKIE_NAME, v.stateToken, v.expiresAt), v && t.cacheResponse && d.updateStorage(n, {
                expiresAt: Math.floor(Date.now() / 1e3) + u.DEFAULT_CACHE_DURATION,
                response: v
            }), v
        }).fail(function(t) {
            var n = t.responseText || {};
            if (r.isString(n)) try {
                n = JSON.parse(n)
            } catch (e) {
                n = {
                    errorSummary: "Unknown error"
                }
            }
            throw t.status >= 500 && (n.errorSummary = "Unknown error"), e.options.transformErrorXHR && (t = e.options.transformErrorXHR(r.clone(t))), "E0000011" === (y = new a(n, t)).errorCode && o.deleteCookie(u.STATE_TOKEN_COOKIE_NAME), y
        })
    }
    e.exports = {
        get: function(e, t, n) {
            var o = {
                url: t = r.isAbsoluteUrl(t) ? t : e.options.url + t,
                method: "GET"
            };
            return r.extend(o, n), c(e, o)
        },
        post: function(e, t, n, o) {
            var i = {
                url: t = r.isAbsoluteUrl(t) ? t : e.options.url + t,
                method: "POST",
                args: n,
                saveAuthnState: !0
            };
            return r.extend(i, o), c(e, i)
        },
        httpRequest: c
    }
}, function(e, t, n) {
    var r = n(0);

    function o(e, t, n) {
        var i = "";
        n && (i = " expires=" + r.isoToUTCString(n) + ";");
        var s = e + "=" + t + "; path=/;" + i;
        return o._setDocumentCookie(s), s
    }

    function i(e) {
        var t = new RegExp(e + "=([^;]*)"),
            n = i._getDocumentCookie().match(t);
        if (n) return n[1]
    }
    o._setDocumentCookie = function(e) {
        document.cookie = e
    }, i._getDocumentCookie = function() {
        return document.cookie
    }, e.exports = {
        setCookie: o,
        getCookie: i,
        deleteCookie: function(e) {
            o(e, "", "1970-01-01T00:00:00Z")
        }
    }
}, function(e, t) {
    var n, r, o = e.exports = {};

    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function s() {
        throw new Error("clearTimeout has not been defined")
    }

    function a(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (e) {
            r = s
        }
    }();
    var u, c = [],
        f = !1,
        l = -1;

    function p() {
        f && u && (f = !1, u.length ? c = u.concat(c) : l = -1, c.length && d())
    }

    function d() {
        if (!f) {
            var e = a(p);
            f = !0;
            for (var t = c.length; t;) {
                for (u = c, c = []; ++l < t;) u && u[l].run();
                l = -1, t = c.length
            }
            u = null, f = !1,
                function(e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function h(e, t) {
        this.fun = e, this.array = t
    }

    function m() {}
    o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new h(e, t)), 1 !== c.length || f || a(d)
    }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function(e) {
        return []
    }, o.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, o.cwd = function() {
        return "/"
    }, o.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, o.umask = function() {
        return 0
    }
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    var r = n(7),
        o = n(13),
        i = n(3),
        s = {
            browserHasLocalStorage: function() {
                try {
                    return !!s.getLocalStorage()
                } catch (e) {
                    return !1
                }
            },
            browserHasSessionStorage: function() {
                try {
                    return !!s.getSessionStorage()
                } catch (e) {
                    return !1
                }
            },
            getHttpCache: function() {
                return s.browserHasLocalStorage() ? o(s.getLocalStorage(), i.CACHE_STORAGE_NAME) : s.browserHasSessionStorage() ? o(s.getSessionStorage(), i.CACHE_STORAGE_NAME) : o(s.getCookieStorage(), i.CACHE_STORAGE_NAME)
            },
            getLocalStorage: function() {
                return localStorage
            },
            getSessionStorage: function() {
                return sessionStorage
            },
            getCookieStorage: function() {
                return {
                    getItem: r.getCookie,
                    setItem: function(e, t) {
                        r.setCookie(e, t, "2038-01-19T03:14:07.000Z")
                    }
                }
            }
        };
    e.exports = s
}, function(e, t, n) {
    e.exports = n(17)
}, function(e, t, n) {
    var r = n(6),
        o = n(0),
        i = n(10),
        s = n(2),
        a = i.getHttpCache();

    function u(e, t) {
        return r.get(e, (t || e.options.url) + "/.well-known/openid-configuration", {
            cacheResponse: !0
        })
    }
    e.exports = {
        getWellKnown: u,
        getKey: function(e, t, n) {
            return u(e, t).then(function(t) {
                var i = t.jwks_uri,
                    u = a.getStorage()[i];
                if (u && Date.now() / 1e3 < u.expiresAt) {
                    var c = o.find(u.response.keys, {
                        kid: n
                    });
                    if (c) return c
                }
                return a.clearStorage(i), r.get(e, i, {
                    cacheResponse: !0
                }).then(function(e) {
                    var t = o.find(e.keys, {
                        kid: n
                    });
                    if (t) return t;
                    throw new s("The key id, " + n + ", was not found in the server's keys")
                })
            })
        },
        validateClaims: function(e, t, n, r, o) {
            if (!t || !r || !n) throw new s("The jwt, iss, and aud arguments are all required");
            if (o && t.nonce !== o) throw new s("OAuth flow response nonce doesn't match request nonce");
            var i = Math.floor((new Date).getTime() / 1e3);
            if (t.iss !== r) throw new s("The issuer [" + t.iss + "] does not match [" + r + "]");
            if (t.aud !== n) throw new s("The audience [" + t.aud + "] does not match [" + n + "]");
            if (t.iat > t.exp) throw new s("The JWT expired before it was issued");
            if (i - e.options.maxClockSkew > t.exp) throw new s("The JWT expired and is no longer valid");
            if (t.iat > i + e.options.maxClockSkew) throw new s("The JWT was issued in the future")
        },
        getOAuthUrls: function(e, t, n) {
            n = n || {};
            var r = o.removeTrailingSlash(n.authorizeUrl) || e.options.authorizeUrl,
                i = o.removeTrailingSlash(n.issuer) || e.options.issuer,
                a = o.removeTrailingSlash(n.userinfoUrl) || e.options.userinfoUrl;
            if (i && !/^https?:/.test(i) && (i = e.options.url + "/oauth2/" + i), !i && r && -1 !== t.responseType.indexOf("id_token")) throw new s("Cannot request idToken with an authorizeUrl without an issuer");
            if (!i && -1 !== t.responseType.indexOf("token")) {
                if (r && !a) throw new s("Cannot request accessToken with an authorizeUrl without an issuer or userinfoUrl");
                if (a && !r) throw new s("Cannot request token with an userinfoUrl without an issuer or authorizeUrl")
            }
            var u = new RegExp("^https?://.*?/oauth2/.+");
            return i = i || e.options.url, u.test(i) ? (r = r || i + "/v1/authorize", a = a || i + "/v1/userinfo") : (r = r || i + "/oauth2/v1/authorize", a = a || i + "/oauth2/v1/userinfo"), {
                issuer: i,
                authorizeUrl: r,
                userinfoUrl: a
            }
        },
        loadFrame: function(e) {
            var t = document.createElement("iframe");
            return t.style.display = "none", t.src = e, document.body.appendChild(t)
        },
        loadPopup: function(e, t) {
            var n = t.popupTitle || "External Identity Provider User Authentication",
                r = "toolbar=no, scrollbars=yes, resizable=yes, top=100, left=500, width=600, height=600";
            if (o.isIE11OrLess()) {
                var i = window.open("/", n, r);
                return i.location.href = e, i
            }
            return window.open(e, n, r)
        },
        hashToObject: function(e) {
            for (var t, n = /\+/g, r = /([^&=]+)=?([^&]*)/g, o = e.substring(1), i = {}; t = r.exec(o);) {
                var s = t[1],
                    a = t[2];
                i[s] = "id_token" === s || "access_token" === s || "code" === s ? a : decodeURIComponent(a.replace(n, " "))
            }
            return i
        },
        isToken: function(e) {
            return !(!e || !e.accessToken && !e.idToken || !Array.isArray(e.scopes))
        },
        addListener: function(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n) : e.attachEvent("on" + t, n)
        },
        removeListener: function(e, t, n) {
            e.removeEventListener ? e.removeEventListener(t, n) : e.detachEvent("on" + t, n)
        }
    }
}, function(e, t, n) {
    var r = n(2);
    e.exports = function(e, t) {
        function n() {
            var n = e.getItem(t);
            n = n || "{}";
            try {
                return JSON.parse(n)
            } catch (e) {
                throw new r("Unable to parse storage string: " + t)
            }
        }

        function o(n) {
            try {
                var o = JSON.stringify(n);
                e.setItem(t, o)
            } catch (e) {
                throw new r("Unable to set storage: " + t)
            }
        }
        return {
            getStorage: n,
            setStorage: o,
            clearStorage: function(e) {
                e || o({});
                var t = n();
                delete t[e], o(t)
            },
            updateStorage: function(e, t) {
                var r = n();
                r[e] = t, o(r)
            }
        }
    }
}, function(e, t) {
    ! function(e) {
        "use strict";
        if (!e.fetch) {
            var t = {
                searchParams: "URLSearchParams" in e,
                iterable: "Symbol" in e && "iterator" in Symbol,
                blob: "FileReader" in e && "Blob" in e && function() {
                    try {
                        return new Blob, !0
                    } catch (e) {
                        return !1
                    }
                }(),
                formData: "FormData" in e,
                arrayBuffer: "ArrayBuffer" in e
            };
            if (t.arrayBuffer) var n = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                r = function(e) {
                    return e && DataView.prototype.isPrototypeOf(e)
                },
                o = ArrayBuffer.isView || function(e) {
                    return e && n.indexOf(Object.prototype.toString.call(e)) > -1
                };
            f.prototype.append = function(e, t) {
                e = a(e), t = u(t);
                var n = this.map[e];
                this.map[e] = n ? n + "," + t : t
            }, f.prototype.delete = function(e) {
                delete this.map[a(e)]
            }, f.prototype.get = function(e) {
                return e = a(e), this.has(e) ? this.map[e] : null
            }, f.prototype.has = function(e) {
                return this.map.hasOwnProperty(a(e))
            }, f.prototype.set = function(e, t) {
                this.map[a(e)] = u(t)
            }, f.prototype.forEach = function(e, t) {
                for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
            }, f.prototype.keys = function() {
                var e = [];
                return this.forEach(function(t, n) {
                    e.push(n)
                }), c(e)
            }, f.prototype.values = function() {
                var e = [];
                return this.forEach(function(t) {
                    e.push(t)
                }), c(e)
            }, f.prototype.entries = function() {
                var e = [];
                return this.forEach(function(t, n) {
                    e.push([n, t])
                }), c(e)
            }, t.iterable && (f.prototype[Symbol.iterator] = f.prototype.entries);
            var i = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            y.prototype.clone = function() {
                return new y(this, {
                    body: this._bodyInit
                })
            }, m.call(y.prototype), m.call(g.prototype), g.prototype.clone = function() {
                return new g(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new f(this.headers),
                    url: this.url
                })
            }, g.error = function() {
                var e = new g(null, {
                    status: 0,
                    statusText: ""
                });
                return e.type = "error", e
            };
            var s = [301, 302, 303, 307, 308];
            g.redirect = function(e, t) {
                if (-1 === s.indexOf(t)) throw new RangeError("Invalid status code");
                return new g(null, {
                    status: t,
                    headers: {
                        location: e
                    }
                })
            }, e.Headers = f, e.Request = y, e.Response = g, e.fetch = function(e, n) {
                return new Promise(function(r, o) {
                    var i = new y(e, n),
                        s = new XMLHttpRequest;
                    s.onload = function() {
                        var e, t, n = {
                            status: s.status,
                            statusText: s.statusText,
                            headers: (e = s.getAllResponseHeaders() || "", t = new f, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(e) {
                                var n = e.split(":"),
                                    r = n.shift().trim();
                                if (r) {
                                    var o = n.join(":").trim();
                                    t.append(r, o)
                                }
                            }), t)
                        };
                        n.url = "responseURL" in s ? s.responseURL : n.headers.get("X-Request-URL");
                        var o = "response" in s ? s.response : s.responseText;
                        r(new g(o, n))
                    }, s.onerror = function() {
                        o(new TypeError("Network request failed"))
                    }, s.ontimeout = function() {
                        o(new TypeError("Network request failed"))
                    }, s.open(i.method, i.url, !0), "include" === i.credentials ? s.withCredentials = !0 : "omit" === i.credentials && (s.withCredentials = !1), "responseType" in s && t.blob && (s.responseType = "blob"), i.headers.forEach(function(e, t) {
                        s.setRequestHeader(t, e)
                    }), s.send(void 0 === i._bodyInit ? null : i._bodyInit)
                })
            }, e.fetch.polyfill = !0
        }

        function a(e) {
            if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
            return e.toLowerCase()
        }

        function u(e) {
            return "string" != typeof e && (e = String(e)), e
        }

        function c(e) {
            var n = {
                next: function() {
                    var t = e.shift();
                    return {
                        done: void 0 === t,
                        value: t
                    }
                }
            };
            return t.iterable && (n[Symbol.iterator] = function() {
                return n
            }), n
        }

        function f(e) {
            this.map = {}, e instanceof f ? e.forEach(function(e, t) {
                this.append(t, e)
            }, this) : Array.isArray(e) ? e.forEach(function(e) {
                this.append(e[0], e[1])
            }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
                this.append(t, e[t])
            }, this)
        }

        function l(e) {
            if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
            e.bodyUsed = !0
        }

        function p(e) {
            return new Promise(function(t, n) {
                e.onload = function() {
                    t(e.result)
                }, e.onerror = function() {
                    n(e.error)
                }
            })
        }

        function d(e) {
            var t = new FileReader,
                n = p(t);
            return t.readAsArrayBuffer(e), n
        }

        function h(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer
        }

        function m() {
            return this.bodyUsed = !1, this._initBody = function(e) {
                if (this._bodyInit = e, e)
                    if ("string" == typeof e) this._bodyText = e;
                    else if (t.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                else if (t.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                else if (t.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                else if (t.arrayBuffer && t.blob && r(e)) this._bodyArrayBuffer = h(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                else {
                    if (!t.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e) && !o(e)) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = h(e)
                } else this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : t.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, t.blob && (this.blob = function() {
                var e = l(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? l(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(d)
            }), this.text = function() {
                var e, t, n, r = l(this);
                if (r) return r;
                if (this._bodyBlob) return e = this._bodyBlob, t = new FileReader, n = p(t), t.readAsText(e), n;
                if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                    for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]);
                    return n.join("")
                }(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }, t.formData && (this.formData = function() {
                return this.text().then(v)
            }), this.json = function() {
                return this.text().then(JSON.parse)
            }, this
        }

        function y(e, t) {
            var n, r, o = (t = t || {}).body;
            if (e instanceof y) {
                if (e.bodyUsed) throw new TypeError("Already read");
                this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new f(e.headers)), this.method = e.method, this.mode = e.mode, o || null == e._bodyInit || (o = e._bodyInit, e.bodyUsed = !0)
            } else this.url = String(e);
            if (this.credentials = t.credentials || this.credentials || "omit", !t.headers && this.headers || (this.headers = new f(t.headers)), this.method = (n = t.method || this.method || "GET", r = n.toUpperCase(), i.indexOf(r) > -1 ? r : n), this.mode = t.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(o)
        }

        function v(e) {
            var t = new FormData;
            return e.trim().split("&").forEach(function(e) {
                if (e) {
                    var n = e.split("="),
                        r = n.shift().replace(/\+/g, " "),
                        o = n.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(r), decodeURIComponent(o))
                }
            }), t
        }

        function g(e, t) {
            t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new f(t.headers), this.url = t.url || "", this._initBody(e)
        }
    }("undefined" != typeof self ? self : this)
}, function(e, t, n) {
    "use strict";
    e.exports = n(16).polyfill()
}, function(e, t, n) {
    (function(t, n) {
        /*!
         * @overview es6-promise - a tiny implementation of Promises/A+.
         * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
         * @license   Licensed under MIT license
         *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
         * @version   v4.2.6+9869a4bc
         */
        var r;
        r = function() {
            "use strict";

            function e(e) {
                return "function" == typeof e
            }
            var r = Array.isArray ? Array.isArray : function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                o = 0,
                i = void 0,
                s = void 0,
                a = function(e, t) {
                    h[o] = e, h[o + 1] = t, 2 === (o += 2) && (s ? s(m) : b())
                },
                u = "undefined" != typeof window ? window : void 0,
                c = u || {},
                f = c.MutationObserver || c.WebKitMutationObserver,
                l = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t),
                p = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

            function d() {
                var e = setTimeout;
                return function() {
                    return e(m, 1)
                }
            }
            var h = new Array(1e3);

            function m() {
                for (var e = 0; e < o; e += 2) {
                    (0, h[e])(h[e + 1]), h[e] = void 0, h[e + 1] = void 0
                }
                o = 0
            }
            var y, v, g, w, b = void 0;

            function k(e, t) {
                var n = this,
                    r = new this.constructor(A);
                void 0 === r[T] && L(r);
                var o = n._state;
                if (o) {
                    var i = arguments[o - 1];
                    a(function() {
                        return D(o, r, i, n._result)
                    })
                } else M(n, r, e, t);
                return r
            }

            function _(e) {
                if (e && "object" == typeof e && e.constructor === this) return e;
                var t = new this(A);
                return R(t, e), t
            }
            l ? b = function() {
                return t.nextTick(m)
            } : f ? (v = 0, g = new f(m), w = document.createTextNode(""), g.observe(w, {
                characterData: !0
            }), b = function() {
                w.data = v = ++v % 2
            }) : p ? ((y = new MessageChannel).port1.onmessage = m, b = function() {
                return y.port2.postMessage(0)
            }) : b = void 0 === u ? function() {
                try {
                    var e = Function("return this")().require("vertx");
                    return void 0 !== (i = e.runOnLoop || e.runOnContext) ? function() {
                        i(m)
                    } : d()
                } catch (e) {
                    return d()
                }
            }() : d();
            var T = Math.random().toString(36).substring(2);

            function A() {}
            var x = void 0,
                E = 1,
                S = 2,
                O = {
                    error: null
                };

            function C(e) {
                try {
                    return e.then
                } catch (e) {
                    return O.error = e, O
                }
            }

            function j(t, n, r) {
                n.constructor === t.constructor && r === k && n.constructor.resolve === _ ? function(e, t) {
                    t._state === E ? I(e, t._result) : t._state === S ? P(e, t._result) : M(t, void 0, function(t) {
                        return R(e, t)
                    }, function(t) {
                        return P(e, t)
                    })
                }(t, n) : r === O ? (P(t, O.error), O.error = null) : void 0 === r ? I(t, n) : e(r) ? function(e, t, n) {
                    a(function(e) {
                        var r = !1,
                            o = function(e, t, n, r) {
                                try {
                                    e.call(t, n, r)
                                } catch (e) {
                                    return e
                                }
                            }(n, t, function(n) {
                                r || (r = !0, t !== n ? R(e, n) : I(e, n))
                            }, function(t) {
                                r || (r = !0, P(e, t))
                            }, e._label);
                        !r && o && (r = !0, P(e, o))
                    }, e)
                }(t, n, r) : I(t, n)
            }

            function R(e, t) {
                var n, r;
                e === t ? P(e, new TypeError("You cannot resolve a promise with itself")) : (r = typeof(n = t), null === n || "object" !== r && "function" !== r ? I(e, t) : j(e, t, C(t)))
            }

            function U(e) {
                e._onerror && e._onerror(e._result), N(e)
            }

            function I(e, t) {
                e._state === x && (e._result = t, e._state = E, 0 !== e._subscribers.length && a(N, e))
            }

            function P(e, t) {
                e._state === x && (e._state = S, e._result = t, a(U, e))
            }

            function M(e, t, n, r) {
                var o = e._subscribers,
                    i = o.length;
                e._onerror = null, o[i] = t, o[i + E] = n, o[i + S] = r, 0 === i && e._state && a(N, e)
            }

            function N(e) {
                var t = e._subscribers,
                    n = e._state;
                if (0 !== t.length) {
                    for (var r = void 0, o = void 0, i = e._result, s = 0; s < t.length; s += 3) r = t[s], o = t[s + n], r ? D(n, r, o, i) : o(i);
                    e._subscribers.length = 0
                }
            }

            function D(t, n, r, o) {
                var i = e(r),
                    s = void 0,
                    a = void 0,
                    u = void 0,
                    c = void 0;
                if (i) {
                    if ((s = function(e, t) {
                            try {
                                return e(t)
                            } catch (e) {
                                return O.error = e, O
                            }
                        }(r, o)) === O ? (c = !0, a = s.error, s.error = null) : u = !0, n === s) return void P(n, new TypeError("A promises callback cannot return that same promise."))
                } else s = o, u = !0;
                n._state !== x || (i && u ? R(n, s) : c ? P(n, a) : t === E ? I(n, s) : t === S && P(n, s))
            }
            var q = 0;

            function L(e) {
                e[T] = q++, e._state = void 0, e._result = void 0, e._subscribers = []
            }
            var H = function() {
                    function e(e, t) {
                        this._instanceConstructor = e, this.promise = new e(A), this.promise[T] || L(this.promise), r(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? I(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && I(this.promise, this._result))) : P(this.promise, new Error("Array Methods must be provided an Array"))
                    }
                    return e.prototype._enumerate = function(e) {
                        for (var t = 0; this._state === x && t < e.length; t++) this._eachEntry(e[t], t)
                    }, e.prototype._eachEntry = function(e, t) {
                        var n = this._instanceConstructor,
                            r = n.resolve;
                        if (r === _) {
                            var o = C(e);
                            if (o === k && e._state !== x) this._settledAt(e._state, t, e._result);
                            else if ("function" != typeof o) this._remaining--, this._result[t] = e;
                            else if (n === F) {
                                var i = new n(A);
                                j(i, e, o), this._willSettleAt(i, t)
                            } else this._willSettleAt(new n(function(t) {
                                return t(e)
                            }), t)
                        } else this._willSettleAt(r(e), t)
                    }, e.prototype._settledAt = function(e, t, n) {
                        var r = this.promise;
                        r._state === x && (this._remaining--, e === S ? P(r, n) : this._result[t] = n), 0 === this._remaining && I(r, this._result)
                    }, e.prototype._willSettleAt = function(e, t) {
                        var n = this;
                        M(e, void 0, function(e) {
                            return n._settledAt(E, t, e)
                        }, function(e) {
                            return n._settledAt(S, t, e)
                        })
                    }, e
                }(),
                F = function() {
                    function t(e) {
                        this[T] = q++, this._result = this._state = void 0, this._subscribers = [], A !== e && ("function" != typeof e && function() {
                            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                        }(), this instanceof t ? function(e, t) {
                            try {
                                t(function(t) {
                                    R(e, t)
                                }, function(t) {
                                    P(e, t)
                                })
                            } catch (t) {
                                P(e, t)
                            }
                        }(this, e) : function() {
                            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                        }())
                    }
                    return t.prototype.catch = function(e) {
                        return this.then(null, e)
                    }, t.prototype.finally = function(t) {
                        var n = this.constructor;
                        return e(t) ? this.then(function(e) {
                            return n.resolve(t()).then(function() {
                                return e
                            })
                        }, function(e) {
                            return n.resolve(t()).then(function() {
                                throw e
                            })
                        }) : this.then(t, t)
                    }, t
                }();
            return F.prototype.then = k, F.all = function(e) {
                return new H(this, e).promise
            }, F.race = function(e) {
                var t = this;
                return r(e) ? new t(function(n, r) {
                    for (var o = e.length, i = 0; i < o; i++) t.resolve(e[i]).then(n, r)
                }) : new t(function(e, t) {
                    return t(new TypeError("You must pass an array to race."))
                })
            }, F.resolve = _, F.reject = function(e) {
                var t = new this(A);
                return P(t, e), t
            }, F._setScheduler = function(e) {
                s = e
            }, F._setAsap = function(e) {
                a = e
            }, F._asap = a, F.polyfill = function() {
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
                    var r = null;
                    try {
                        r = Object.prototype.toString.call(t.resolve())
                    } catch (e) {}
                    if ("[object Promise]" === r && !t.cast) return
                }
                e.Promise = F
            }, F.Promise = F, F
        }, e.exports = r()
    }).call(this, n(8), n(9))
}, function(e, t, n) {
    var r = n(18);
    e.exports = n(21)(r)
}, function(e, t, n) {
    /*!
     * Copyright (c) 2015-2016, Okta, Inc. and/or its affiliates. All rights reserved.
     * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
     *
     * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
     * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     *
     * See the License for the specific language governing permissions and limitations under the License.
     */
    var r = n(19);
    e.exports = function(e, t, n) {
        var o = r({
            url: t,
            method: e,
            headers: n.headers,
            data: JSON.stringify(n.data),
            withCredentials: !0
        }).then(function() {
            return o.request
        });
        return o
    }
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__, definition;
    /*!
     * Reqwest! A general purpose XHR connection manager
     * license MIT (c) Dustin Diaz 2015
     * https://github.com/ded/reqwest
     */
    definition = function() {
        var context = this,
            XHR2;
        if ("window" in context) var doc = document,
            byTag = "getElementsByTagName",
            head = doc[byTag]("head")[0];
        else try {
            XHR2 = __webpack_require__(20)
        } catch (e) {
            throw new Error("Peer dependency `xhr2` required! Please npm install xhr2")
        }
        var httpsRe = /^http/,
            protocolRe = /(^\w+):\/\//,
            twoHundo = /^(20\d|1223)$/,
            readyState = "readyState",
            contentType = "Content-Type",
            requestedWith = "X-Requested-With",
            uniqid = 0,
            callbackPrefix = "reqwest_" + +new Date,
            lastValue, xmlHttpRequest = "XMLHttpRequest",
            xDomainRequest = "XDomainRequest",
            noop = function() {},
            isArray = "function" == typeof Array.isArray ? Array.isArray : function(e) {
                return e instanceof Array
            },
            defaultHeaders = {
                contentType: "application/x-www-form-urlencoded",
                requestedWith: xmlHttpRequest,
                accept: {
                    "*": "text/javascript, text/html, application/xml, text/xml, */*",
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    js: "application/javascript, text/javascript"
                }
            },
            xhr = function(e) {
                if (!0 === e.crossOrigin) {
                    var t = context[xmlHttpRequest] ? new XMLHttpRequest : null;
                    if (t && "withCredentials" in t) return t;
                    if (context[xDomainRequest]) return new XDomainRequest;
                    throw new Error("Browser does not support cross-origin requests")
                }
                return context[xmlHttpRequest] ? new XMLHttpRequest : XHR2 ? new XHR2 : new ActiveXObject("Microsoft.XMLHTTP")
            },
            globalSetupOptions = {
                dataFilter: function(e) {
                    return e
                }
            };

        function succeed(e) {
            var t = protocolRe.exec(e.url);
            return t = t && t[1] || context.location.protocol, httpsRe.test(t) ? twoHundo.test(e.request.status) : !!e.request.response
        }

        function handleReadyState(e, t, n) {
            return function() {
                return e._aborted ? n(e.request) : e._timedOut ? n(e.request, "Request is aborted: timeout") : void(e.request && 4 == e.request[readyState] && (e.request.onreadystatechange = noop, succeed(e) ? t(e.request) : n(e.request)))
            }
        }

        function setHeaders(e, t) {
            var n, r = t.headers || {};
            r.Accept = r.Accept || defaultHeaders.accept[t.type] || defaultHeaders.accept["*"];
            var o = "undefined" != typeof FormData && t.data instanceof FormData;
            for (n in t.crossOrigin || r[requestedWith] || (r[requestedWith] = defaultHeaders.requestedWith), r[contentType] || o || (r[contentType] = t.contentType || defaultHeaders.contentType), r) r.hasOwnProperty(n) && "setRequestHeader" in e && e.setRequestHeader(n, r[n])
        }

        function setCredentials(e, t) {
            void 0 !== t.withCredentials && void 0 !== e.withCredentials && (e.withCredentials = !!t.withCredentials)
        }

        function generalCallback(e) {
            lastValue = e
        }

        function urlappend(e, t) {
            return e + (/\?/.test(e) ? "&" : "?") + t
        }

        function handleJsonp(e, t, n, r) {
            var o = uniqid++,
                i = e.jsonpCallback || "callback",
                s = e.jsonpCallbackName || reqwest.getcallbackPrefix(o),
                a = new RegExp("((^|\\?|&)" + i + ")=([^&]+)"),
                u = r.match(a),
                c = doc.createElement("script"),
                f = 0,
                l = -1 !== navigator.userAgent.indexOf("MSIE 10.0");
            return u ? "?" === u[3] ? r = r.replace(a, "$1=" + s) : s = u[3] : r = urlappend(r, i + "=" + s), context[s] = generalCallback, c.type = "text/javascript", c.src = r, c.async = !0, void 0 === c.onreadystatechange || l || (c.htmlFor = c.id = "_reqwest_" + o), c.onload = c.onreadystatechange = function() {
                if (c[readyState] && "complete" !== c[readyState] && "loaded" !== c[readyState] || f) return !1;
                c.onload = c.onreadystatechange = null, c.onclick && c.onclick(), t(lastValue), lastValue = void 0, head.removeChild(c), f = 1
            }, head.appendChild(c), {
                abort: function() {
                    c.onload = c.onreadystatechange = null, n({}, "Request is aborted: timeout", {}), lastValue = void 0, head.removeChild(c), f = 1
                }
            }
        }

        function getRequest(e, t) {
            var n, r = this.o,
                o = (r.method || "GET").toUpperCase(),
                i = "string" == typeof r ? r : r.url,
                s = !1 !== r.processData && r.data && "string" != typeof r.data ? reqwest.toQueryString(r.data) : r.data || null,
                a = !1;
            return "jsonp" != r.type && "GET" != o || !s || (i = urlappend(i, s), s = null), "jsonp" == r.type ? handleJsonp(r, e, t, i) : ((n = r.xhr && r.xhr(r) || xhr(r)).open(o, i, !1 !== r.async), setHeaders(n, r), setCredentials(n, r), context[xDomainRequest] && n instanceof context[xDomainRequest] ? (n.onload = e, n.onerror = t, n.onprogress = function() {}, a = !0) : n.onreadystatechange = handleReadyState(this, e, t), r.before && r.before(n), a ? setTimeout(function() {
                n.send(s)
            }, 200) : n.send(s), n)
        }

        function Reqwest(e, t) {
            this.o = e, this.fn = t, init.apply(this, arguments)
        }

        function setType(e) {
            if (null !== e) return e.match("json") ? "json" : e.match("javascript") ? "js" : e.match("text") ? "html" : e.match("xml") ? "xml" : void 0
        }

        function init(o, fn) {
            this.url = "string" == typeof o ? o : o.url, this.timeout = null, this._fulfilled = !1, this._successHandler = function() {}, this._fulfillmentHandlers = [], this._errorHandlers = [], this._completeHandlers = [], this._erred = !1, this._responseArgs = {};
            var self = this;

            function complete(e) {
                for (o.timeout && clearTimeout(self.timeout), self.timeout = null; self._completeHandlers.length > 0;) self._completeHandlers.shift()(e)
            }

            function success(resp) {
                var type = o.type || resp && setType(resp.getResponseHeader("Content-Type"));
                resp = "jsonp" !== type ? self.request : resp;
                var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type),
                    r = filteredResponse;
                try {
                    resp.responseText = r
                } catch (e) {}
                if (r) switch (type) {
                    case "json":
                        try {
                            resp = context.JSON ? context.JSON.parse(r) : eval("(" + r + ")")
                        } catch (e) {
                            return error(resp, "Could not parse JSON in response", e)
                        }
                        break;
                    case "js":
                        resp = eval(r);
                        break;
                    case "html":
                        resp = r;
                        break;
                    case "xml":
                        resp = resp.responseXML && resp.responseXML.parseError && resp.responseXML.parseError.errorCode && resp.responseXML.parseError.reason ? null : resp.responseXML
                }
                for (self._responseArgs.resp = resp, self._fulfilled = !0, fn(resp), self._successHandler(resp); self._fulfillmentHandlers.length > 0;) resp = self._fulfillmentHandlers.shift()(resp);
                complete(resp)
            }

            function timedOut() {
                self._timedOut = !0, self.request.abort()
            }

            function error(e, t, n) {
                for (e = self.request, self._responseArgs.resp = e, self._responseArgs.msg = t, self._responseArgs.t = n, self._erred = !0; self._errorHandlers.length > 0;) self._errorHandlers.shift()(e, t, n);
                complete(e)
            }
            fn = fn || function() {}, o.timeout && (this.timeout = setTimeout(function() {
                timedOut()
            }, o.timeout)), o.success && (this._successHandler = function() {
                o.success.apply(o, arguments)
            }), o.error && this._errorHandlers.push(function() {
                o.error.apply(o, arguments)
            }), o.complete && this._completeHandlers.push(function() {
                o.complete.apply(o, arguments)
            }), this.request = getRequest.call(this, success, error)
        }

        function reqwest(e, t) {
            return new Reqwest(e, t)
        }

        function normalize(e) {
            return e ? e.replace(/\r?\n/g, "\r\n") : ""
        }

        function serial(e, t) {
            var n, r, o, i, s = e.name,
                a = e.tagName.toLowerCase(),
                u = function(e) {
                    e && !e.disabled && t(s, normalize(e.attributes.value && e.attributes.value.specified ? e.value : e.text))
                };
            if (!e.disabled && s) switch (a) {
                case "input":
                    /reset|button|image|file/i.test(e.type) || (n = /checkbox/i.test(e.type), r = /radio/i.test(e.type), o = e.value, (!n && !r || e.checked) && t(s, normalize(n && "" === o ? "on" : o)));
                    break;
                case "textarea":
                    t(s, normalize(e.value));
                    break;
                case "select":
                    if ("select-one" === e.type.toLowerCase()) u(e.selectedIndex >= 0 ? e.options[e.selectedIndex] : null);
                    else
                        for (i = 0; e.length && i < e.length; i++) e.options[i].selected && u(e.options[i])
            }
        }

        function eachFormElement() {
            var e, t, n = this,
                r = function(e, t) {
                    var r, o, i;
                    for (r = 0; r < t.length; r++)
                        for (i = e[byTag](t[r]), o = 0; o < i.length; o++) serial(i[o], n)
                };
            for (t = 0; t < arguments.length; t++) e = arguments[t], /input|select|textarea/i.test(e.tagName) && serial(e, n), r(e, ["input", "select", "textarea"])
        }

        function serializeQueryString() {
            return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
        }

        function serializeHash() {
            var e = {};
            return eachFormElement.apply(function(t, n) {
                t in e ? (e[t] && !isArray(e[t]) && (e[t] = [e[t]]), e[t].push(n)) : e[t] = n
            }, arguments), e
        }

        function buildParams(e, t, n, r) {
            var o, i, s, a = /\[\]$/;
            if (isArray(t))
                for (i = 0; t && i < t.length; i++) s = t[i], n || a.test(e) ? r(e, s) : buildParams(e + "[" + ("object" == typeof s ? i : "") + "]", s, n, r);
            else if (t && "[object Object]" === t.toString())
                for (o in t) buildParams(e + "[" + o + "]", t[o], n, r);
            else r(e, t)
        }
        return Reqwest.prototype = {
            abort: function() {
                this._aborted = !0, this.request.abort()
            },
            retry: function() {
                init.call(this, this.o, this.fn)
            },
            then: function(e, t) {
                return e = e || function() {}, t = t || function() {}, this._fulfilled ? this._responseArgs.resp = e(this._responseArgs.resp) : this._erred ? t(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : (this._fulfillmentHandlers.push(e), this._errorHandlers.push(t)), this
            },
            always: function(e) {
                return this._fulfilled || this._erred ? e(this._responseArgs.resp) : this._completeHandlers.push(e), this
            },
            fail: function(e) {
                return this._erred ? e(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : this._errorHandlers.push(e), this
            },
            catch: function(e) {
                return this.fail(e)
            }
        }, reqwest.serializeArray = function() {
            var e = [];
            return eachFormElement.apply(function(t, n) {
                e.push({
                    name: t,
                    value: n
                })
            }, arguments), e
        }, reqwest.serialize = function() {
            if (0 === arguments.length) return "";
            var e, t = Array.prototype.slice.call(arguments, 0);
            return (e = t.pop()) && e.nodeType && t.push(e) && (e = null), e && (e = e.type), ("map" == e ? serializeHash : "array" == e ? reqwest.serializeArray : serializeQueryString).apply(null, t)
        }, reqwest.toQueryString = function(e, t) {
            var n, r, o = t || !1,
                i = [],
                s = encodeURIComponent,
                a = function(e, t) {
                    t = "function" == typeof t ? t() : null == t ? "" : t, i[i.length] = s(e) + "=" + s(t)
                };
            if (isArray(e))
                for (r = 0; e && r < e.length; r++) a(e[r].name, e[r].value);
            else
                for (n in e) e.hasOwnProperty(n) && buildParams(n, e[n], o, a);
            return i.join("&").replace(/%20/g, "+")
        }, reqwest.getcallbackPrefix = function() {
            return callbackPrefix
        }, reqwest.compat = function(e, t) {
            return e && (e.type && (e.method = e.type) && delete e.type, e.dataType && (e.type = e.dataType), e.jsonpCallback && (e.jsonpCallbackName = e.jsonpCallback) && delete e.jsonpCallback, e.jsonp && (e.jsonpCallback = e.jsonp)), new Reqwest(e, t)
        }, reqwest.ajaxSetup = function(e) {
            for (var t in e = e || {}) globalSetupOptions[t] = e[t]
        }, reqwest
    }, module.exports ? module.exports = definition() : void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof(__WEBPACK_AMD_DEFINE_FACTORY__ = definition) ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
}, function(e, t) {}, function(e, t, n) {
    /*!
     * Copyright (c) 2015-2016, Okta, Inc. and/or its affiliates. All rights reserved.
     * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
     *
     * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
     * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     *
     * See the License for the specific language governing permissions and limitations under the License.
     */
    n(22);
    var r = n(5),
        o = n(12),
        i = n(0),
        s = n(27),
        a = n(29),
        u = n(7),
        c = n(30),
        f = n(2),
        l = n(3),
        p = n(33),
        d = n(6);

    function h(e) {
        var t = this;
        if (!e) throw new f("No arguments passed to constructor. Required usage: new OktaAuth(args)");
        if (!e.url) throw new f('No url passed to constructor. Required usage: new OktaAuth({url: "https://sample.okta.com"})');
        if (-1 !== e.url.indexOf("-admin.")) throw new f('URL passed to constructor contains "-admin" in subdomain. Required usage: new OktaAuth({url: "https://dev-12345.okta.com})');
        this.options = {
            url: i.removeTrailingSlash(e.url),
            clientId: e.clientId,
            issuer: i.removeTrailingSlash(e.issuer),
            authorizeUrl: i.removeTrailingSlash(e.authorizeUrl),
            userinfoUrl: i.removeTrailingSlash(e.userinfoUrl),
            redirectUri: e.redirectUri,
            ajaxRequest: e.ajaxRequest,
            transformErrorXHR: e.transformErrorXHR,
            headers: e.headers
        }, this.userAgent = "okta-auth-js-" + l.SDK_VERSION, e.maxClockSkew || 0 === e.maxClockSkew ? this.options.maxClockSkew = e.maxClockSkew : this.options.maxClockSkew = l.DEFAULT_MAX_CLOCK_SKEW, t.session = {
            close: i.bind(a.closeSession, null, t),
            exists: i.bind(a.sessionExists, null, t),
            get: i.bind(a.getSession, null, t),
            refresh: i.bind(a.refreshSession, null, t),
            setCookieAndRedirect: i.bind(a.setCookieAndRedirect, null, t)
        }, t.tx = {
            status: i.bind(s.transactionStatus, null, t),
            resume: i.bind(s.resumeTransaction, null, t),
            exists: i.bind(s.transactionExists, null, t)
        }, t.tx.exists._getCookie = function(e) {
            return u.getCookie(e)
        }, t.idToken = {
            authorize: i.deprecateWrap("Use token.getWithoutPrompt, token.getWithPopup, or token.getWithRedirect instead of idToken.authorize.", i.bind(c.getToken, null, t)),
            verify: i.deprecateWrap("Use token.verify instead of idToken.verify", i.bind(c.verifyIdToken, null, t)),
            refresh: i.deprecateWrap("Use token.refresh instead of idToken.refresh", i.bind(c.refreshIdToken, null, t)),
            decode: i.deprecateWrap("Use token.decode instead of idToken.decode", c.decodeToken)
        }, t.idToken.authorize._getLocationHref = function() {
            return window.location.href
        }, t.token = {
            getWithoutPrompt: i.bind(c.getWithoutPrompt, null, t),
            getWithPopup: i.bind(c.getWithPopup, null, t),
            getWithRedirect: i.bind(c.getWithRedirect, null, t),
            parseFromUrl: i.bind(c.parseFromUrl, null, t),
            decode: c.decodeToken,
            refresh: i.bind(c.refreshToken, null, t),
            getUserInfo: i.bind(c.getUserInfo, null, t),
            verify: i.bind(c.verifyToken, null, t)
        }, t.token.getWithRedirect._setLocation = function(e) {
            window.location = e
        }, t.token.parseFromUrl._getHistory = function() {
            return window.history
        }, t.token.parseFromUrl._getLocation = function() {
            return window.location
        }, t.token.parseFromUrl._getDocument = function() {
            return window.document
        }, t.fingerprint._getUserAgent = function() {
            return navigator.userAgent
        };
        var n = /windows phone|iemobile|wpdesktop/i;
        t.features.isFingerprintSupported = function() {
            var e = t.fingerprint._getUserAgent();
            return e && !n.test(e)
        }, t.tokenManager = new p(t, e.tokenManager)
    }
    var m = h.prototype;
    m.features = {}, m.features.isPopupPostMessageSupported = function() {
        var e = document.documentMode && document.documentMode < 10;
        return !(!window.postMessage || e)
    }, m.features.isTokenVerifySupported = function() {
        return "undefined" != typeof crypto && crypto.subtle && "undefined" != typeof Uint8Array
    }, m.signIn = function(e) {
        var t = this;

        function n(n) {
            return delete e.sendFingerprint, s.postToTransaction(t, "/api/v1/authn", e, n)
        }
        return (e = i.clone(e || {})).sendFingerprint ? t.fingerprint().then(function(e) {
            return n({
                headers: {
                    "X-Device-Fingerprint": e
                }
            })
        }) : n()
    }, m.signOut = function() {
        return this.session.close()
    }, m.forgotPassword = function(e) {
        return s.postToTransaction(this, "/api/v1/authn/recovery/password", e)
    }, m.unlockAccount = function(e) {
        return s.postToTransaction(this, "/api/v1/authn/recovery/unlock", e)
    }, m.verifyRecoveryToken = function(e) {
        return s.postToTransaction(this, "/api/v1/authn/recovery/token", e)
    }, m.webfinger = function(e) {
        var t = "/.well-known/webfinger" + i.toQueryParams(e);
        return d.get(this, t, {
            headers: {
                Accept: "application/jrd+json"
            }
        })
    }, m.fingerprint = function(e) {
        e = e || {};
        var t = this;
        if (!t.features.isFingerprintSupported()) return r.reject(new f("Fingerprinting is not supported on this device"));
        var n = r.defer(),
            i = document.createElement("iframe");

        function s(e) {
            if (e && e.data && e.origin === t.options.url) {
                try {
                    var r = JSON.parse(e.data)
                } catch (e) {
                    return n.reject(new f("Unable to parse iframe response"))
                }
                if (r) return "FingerprintAvailable" === r.type ? n.resolve(r.fingerprint) : void("FingerprintServiceReady" === r.type && e.source.postMessage(JSON.stringify({
                    type: "GetFingerprint"
                }), e.origin))
            }
        }
        i.style.display = "none", o.addListener(window, "message", s), i.src = t.options.url + "/auth/services/devicefingerprint", document.body.appendChild(i);
        var a = setTimeout(function() {
            n.reject(new f("Fingerprinting timed out"))
        }, e.timeout || 15e3);
        return n.promise.fin(function() {
            clearTimeout(a), o.removeListener(window, "message", s), document.body.contains(i) && i.parentElement.removeChild(i)
        })
    }, e.exports = function(e) {
        function t(n) {
            if (!(this instanceof t)) return new t(n);
            n && !n.ajaxRequest && (n.ajaxRequest = e), i.bind(h, this)(n)
        }
        return t.prototype = h.prototype, t.prototype.constructor = t, t
    }
}, function(e, t, n) {
    /*!
     * Copyright (c) 2015-2016, Okta, Inc. and/or its affiliates. All rights reserved.
     * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
     *
     * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
     * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     *
     * See the License for the specific language governing permissions and limitations under the License.
     */
    n(23), Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
        var n;
        if (null == this) throw new TypeError('"this" is null or not defined');
        var r = Object(this),
            o = r.length >>> 0;
        if (0 === o) return -1;
        var i = +t || 0;
        if (Math.abs(i) === 1 / 0 && (i = 0), i >= o) return -1;
        for (n = Math.max(i >= 0 ? i : o - Math.abs(i), 0); n < o;) {
            if (n in r && r[n] === e) return n;
            n++
        }
        return -1
    }), Array.isArray || (Array.isArray = function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    })
}, function(e, t, n) {
    ! function() {
        var e = t,
            n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

        function r(e) {
            this.message = e
        }
        r.prototype = new Error, r.prototype.name = "InvalidCharacterError", e.btoa || (e.btoa = function(e) {
            for (var t, o, i = String(e), s = 0, a = n, u = ""; i.charAt(0 | s) || (a = "=", s % 1); u += a.charAt(63 & t >> 8 - s % 1 * 8)) {
                if ((o = i.charCodeAt(s += .75)) > 255) throw new r("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                t = t << 8 | o
            }
            return u
        }), e.atob || (e.atob = function(e) {
            var t = String(e).replace(/=+$/, "");
            if (t.length % 4 == 1) throw new r("'atob' failed: The string to be decoded is not correctly encoded.");
            for (var o, i, s = 0, a = 0, u = ""; i = t.charAt(a++); ~i && (o = s % 4 ? 64 * o + i : i, s++ % 4) ? u += String.fromCharCode(255 & o >> (-2 * s & 6)) : 0) i = n.indexOf(i);
            return u
        })
    }()
}, function(e, t, n) {
    (function(e) {
        var r = void 0 !== e && e || "undefined" != typeof self && self || window,
            o = Function.prototype.apply;

        function i(e, t) {
            this._id = e, this._clearFn = t
        }
        t.setTimeout = function() {
            return new i(o.call(setTimeout, r, arguments), clearTimeout)
        }, t.setInterval = function() {
            return new i(o.call(setInterval, r, arguments), clearInterval)
        }, t.clearTimeout = t.clearInterval = function(e) {
            e && e.close()
        }, i.prototype.unref = i.prototype.ref = function() {}, i.prototype.close = function() {
            this._clearFn.call(r, this._id)
        }, t.enroll = function(e, t) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = t
        }, t.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
        }, t._unrefActive = t.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                e._onTimeout && e._onTimeout()
            }, t))
        }, n(25), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
    }).call(this, n(9))
}, function(e, t, n) {
    (function(e, t) {
        ! function(e, n) {
            "use strict";
            if (!e.setImmediate) {
                var r, o, i, s, a, u = 1,
                    c = {},
                    f = !1,
                    l = e.document,
                    p = Object.getPrototypeOf && Object.getPrototypeOf(e);
                p = p && p.setTimeout ? p : e, "[object process]" === {}.toString.call(e.process) ? r = function(e) {
                    t.nextTick(function() {
                        h(e)
                    })
                } : ! function() {
                    if (e.postMessage && !e.importScripts) {
                        var t = !0,
                            n = e.onmessage;
                        return e.onmessage = function() {
                            t = !1
                        }, e.postMessage("", "*"), e.onmessage = n, t
                    }
                }() ? e.MessageChannel ? ((i = new MessageChannel).port1.onmessage = function(e) {
                    h(e.data)
                }, r = function(e) {
                    i.port2.postMessage(e)
                }) : l && "onreadystatechange" in l.createElement("script") ? (o = l.documentElement, r = function(e) {
                    var t = l.createElement("script");
                    t.onreadystatechange = function() {
                        h(e), t.onreadystatechange = null, o.removeChild(t), t = null
                    }, o.appendChild(t)
                }) : r = function(e) {
                    setTimeout(h, 0, e)
                } : (s = "setImmediate$" + Math.random() + "$", a = function(t) {
                    t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(s) && h(+t.data.slice(s.length))
                }, e.addEventListener ? e.addEventListener("message", a, !1) : e.attachEvent("onmessage", a), r = function(t) {
                    e.postMessage(s + t, "*")
                }), p.setImmediate = function(e) {
                    "function" != typeof e && (e = new Function("" + e));
                    for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                    var o = {
                        callback: e,
                        args: t
                    };
                    return c[u] = o, r(u), u++
                }, p.clearImmediate = d
            }

            function d(e) {
                delete c[e]
            }

            function h(e) {
                if (f) setTimeout(h, 0, e);
                else {
                    var t = c[e];
                    if (t) {
                        f = !0;
                        try {
                            ! function(e) {
                                var t = e.callback,
                                    r = e.args;
                                switch (r.length) {
                                    case 0:
                                        t();
                                        break;
                                    case 1:
                                        t(r[0]);
                                        break;
                                    case 2:
                                        t(r[0], r[1]);
                                        break;
                                    case 3:
                                        t(r[0], r[1], r[2]);
                                        break;
                                    default:
                                        t.apply(n, r)
                                }
                            }(t)
                        } finally {
                            d(e), f = !1
                        }
                    }
                }
            }
        }("undefined" == typeof self ? void 0 === e ? this : e : self)
    }).call(this, n(9), n(8))
}, function(e, t) {
    /*!
     * Copyright (c) 2015-2016, Okta, Inc. and/or its affiliates. All rights reserved.
     * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
     *
     * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
     * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     *
     * See the License for the specific language governing permissions and limitations under the License.
     */
    function n(e, t) {
        this.name = "AuthApiError", this.message = e.errorSummary, this.errorSummary = e.errorSummary, this.errorCode = e.errorCode, this.errorLink = e.errorLink, this.errorId = e.errorId, this.errorCauses = e.errorCauses, t && (this.xhr = t)
    }
    n.prototype = new Error, e.exports = n
}, function(e, t, n) {
    var r = n(6),
        o = n(0),
        i = n(5),
        s = n(2),
        a = n(28),
        u = n(3);

    function c(e, t) {
        var n = {};
        return o.extend(n, t), !n.stateToken && e.stateToken && (n.stateToken = e.stateToken), n
    }

    function f(e, t, n, o) {
        return r.post(e, t, n, o).then(function(t) {
            return new h(e, t)
        })
    }

    function l(e, t, n) {
        return function(f) {
            var l, p, d;
            o.isNumber(f) ? l = f : o.isObject(f) && (l = f.delay, p = f.rememberDevice, d = f.autoPush), l || 0 === l || (l = u.DEFAULT_POLLING_DELAY);
            var m = o.getLink(t, "next", "poll");

            function y() {
                var n = {};
                if ("function" == typeof d) try {
                    n.autoPush = !!d()
                } catch (e) {
                    return i.reject(new s("AutoPush resulted in an error."))
                } else null != d && (n.autoPush = !!d);
                if ("function" == typeof p) try {
                    n.rememberDevice = !!p()
                } catch (e) {
                    return i.reject(new s("RememberDevice resulted in an error."))
                } else null != p && (n.rememberDevice = !!p);
                var a = m.href + o.toQueryParams(n);
                return r.post(e, a, function(e) {
                    return c(e)
                }(t), {
                    saveAuthnState: !1
                })
            }
            n.isPolling = !0;
            var v = 0,
                g = function() {
                    return n.isPolling ? y().then(function(t) {
                        if (v = 0, t.factorResult && "WAITING" === t.factorResult) {
                            if (!n.isPolling) throw new a;
                            return i.delay(l).then(g)
                        }
                        return n.isPolling = !1, new h(e, t)
                    }).fail(function(e) {
                        if (e.xhr && (0 === e.xhr.status || 429 === e.xhr.status) && v <= 4) {
                            var t = 1e3 * Math.pow(2, v);
                            return v++, i.delay(t).then(g)
                        }
                        throw e
                    }) : i.reject(new a)
                };
            return g().fail(function(e) {
                throw n.isPolling = !1, e
            })
        }
    }

    function p(e, t, n, a, u) {
        if (Array.isArray(a)) return function(r, i) {
            if (!r) throw new s("Must provide a link name");
            var c = o.find(a, {
                name: r
            });
            if (!c) throw new s("No link found for that name");
            return p(e, t, n, c, u)(i)
        };
        if (a.hints && a.hints.allow && 1 === a.hints.allow.length) switch (a.hints.allow[0]) {
            case "GET":
                return function() {
                    return r.get(e, a.href)
                };
            case "POST":
                return function(r) {
                    u && u.isPolling && (u.isPolling = !1);
                    var l = c(t, r);
                    "MFA_ENROLL" === t.status && o.extend(l, {
                        factorType: n.factorType,
                        provider: n.provider
                    });
                    var p = {},
                        d = l.autoPush;
                    if (void 0 !== d) {
                        if ("function" == typeof d) try {
                            p.autoPush = !!d()
                        } catch (e) {
                            return i.reject(new s("AutoPush resulted in an error."))
                        } else null !== d && (p.autoPush = !!d);
                        l = o.omit(l, "autoPush")
                    }
                    var h = l.rememberDevice;
                    if (void 0 !== h) {
                        if ("function" == typeof h) try {
                            p.rememberDevice = !!h()
                        } catch (e) {
                            return i.reject(new s("RememberDevice resulted in an error."))
                        } else null !== h && (p.rememberDevice = !!h);
                        l = o.omit(l, "rememberDevice")
                    } else l.profile && void 0 !== l.profile.updatePhone && (l.profile.updatePhone && (p.updatePhone = !0), l.profile = o.omit(l.profile, "updatePhone"));
                    var m = a.href + o.toQueryParams(p);
                    return f(e, m, l)
                }
        }
    }

    function d(e, t, n, r) {
        if (n = n || t, n = o.clone(n), Array.isArray(n)) {
            for (var i = [], s = 0, a = n.length; s < a; s++) i.push(d(e, t, n[s], r));
            return i
        }
        var u = n._embedded || {};
        for (var c in u) u.hasOwnProperty(c) && (o.isObject(u[c]) || Array.isArray(u[c])) && (u[c] = d(e, t, u[c], r));
        var f = function(e, t, n, r) {
            var o = {};
            for (var i in n._links)
                if (n._links.hasOwnProperty(i)) {
                    var s = n._links[i];
                    if ("next" === i && (i = s.name), s.type) o[i] = s;
                    else switch (i) {
                        case "poll":
                            o.poll = l(e, t, r);
                            break;
                        default:
                            var a = p(e, t, n, s, r);
                            a && (o[i] = a)
                    }
                } return o
        }(e, t, n, r);
        return o.extend(u, f), n = o.omit(n, "_embedded", "_links"), o.extend(n, u), n
    }

    function h(e, t) {
        t && (this.data = t, o.extend(this, d(e, t, t, {})), delete this.stateToken, "RECOVERY_CHALLENGE" !== t.status || t._links || (this.cancel = function() {
            return new i(new h(e))
        }))
    }
    e.exports = {
        transactionStatus: function(e, t) {
            return t = c(e, t), r.post(e, e.options.url + "/api/v1/authn", t)
        },
        resumeTransaction: function(e, t) {
            if (!t || !t.stateToken) {
                var n = e.tx.exists._getCookie(u.STATE_TOKEN_COOKIE_NAME);
                if (!n) return i.reject(new s("No transaction to resume"));
                t = {
                    stateToken: n
                }
            }
            return e.tx.status(t).then(function(t) {
                return new h(e, t)
            })
        },
        transactionExists: function(e) {
            return !!e.tx.exists._getCookie(u.STATE_TOKEN_COOKIE_NAME)
        },
        postToTransaction: f
    }
}, function(e, t) {
    /*!
     * Copyright (c) 2015-2016, Okta, Inc. and/or its affiliates. All rights reserved.
     * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
     *
     * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
     * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     *
     * See the License for the specific language governing permissions and limitations under the License.
     */
    function n() {
        this.name = "AuthPollStopError", this.message = "The poll was stopped by the sdk"
    }
    n.prototype = new Error, e.exports = n
}, function(e, t, n) {
    var r = n(0),
        o = n(6);
    e.exports = {
        sessionExists: function(e) {
            return e.session.get().then(function(e) {
                return "ACTIVE" === e.status
            }).fail(function() {
                return !1
            })
        },
        getSession: function(e) {
            return o.get(e, "/api/v1/sessions/me").then(function(t) {
                var n = r.omit(t, "_links");
                return n.refresh = function() {
                    return o.post(e, r.getLink(t, "refresh").href)
                }, n.user = function() {
                    return o.get(e, r.getLink(t, "user").href)
                }, n
            }).fail(function() {
                return {
                    status: "INACTIVE"
                }
            })
        },
        closeSession: function(e) {
            return o.httpRequest(e, {
                url: e.options.url + "/api/v1/sessions/me",
                method: "DELETE"
            })
        },
        refreshSession: function(e) {
            return o.post(e, "/api/v1/sessions/me/lifecycle/refresh")
        },
        setCookieAndRedirect: function(e, t, n) {
            n = n || window.location.href, window.location = e.options.url + "/login/sessionCookieRedirect" + r.toQueryParams({
                checkAccountSetupComplete: !0,
                token: t,
                redirectUrl: n
            })
        }
    }
}, function(e, t, n) {
    var r = n(6),
        o = n(0),
        i = n(12),
        s = n(5),
        a = n(31),
        u = n(2),
        c = n(32),
        f = n(3),
        l = n(7);

    function p(e) {
        var t, n = e.split(".");
        try {
            t = {
                header: JSON.parse(o.base64UrlToString(n[0])),
                payload: JSON.parse(o.base64UrlToString(n[1])),
                signature: n[2]
            }
        } catch (e) {
            throw new u("Malformed token")
        }
        return t
    }

    function d(e, t, n, r) {
        return (new s).then(function() {
            if (!t || !t.idToken) throw new u("Only idTokens may be verified");
            var o = p(t.idToken);
            return i.validateClaims(e, o.payload, t.clientId, t.issuer, n), r || !e.features.isTokenVerifySupported() ? t : i.getKey(e, t.issuer, o.header.kid).then(function(e) {
                return a.verifyToken(t.idToken, e)
            }).then(function(e) {
                if (!e) throw new u("The token signature is not valid");
                return t
            })
        })
    }

    function h(e, t, n) {
        var r = s.defer();

        function a(t) {
            !t.data || t.origin !== e.options.url || t.data && o.isString(n) && t.data.state !== n || r.resolve(t.data)
        }
        return i.addListener(window, "message", a), r.promise.timeout(t || 12e4, new u("OAuth flow timed out")).fin(function() {
            i.removeListener(window, "message", a)
        })
    }

    function m(e, t, n, r) {
        r = r || {};
        var i = t.responseType,
            a = o.clone(t.scopes),
            f = t.clientId || e.options.clientId;
        return (new s).then(function() {
            if (n.error || n.error_description) throw new c(n.error, n.error_description);
            if (n.state !== t.state) throw new u("OAuth flow response state doesn't match request state");
            var o = {};
            if (n.access_token && (o.token = {
                    accessToken: n.access_token,
                    expiresAt: Number(n.expires_in) + Math.floor(Date.now() / 1e3),
                    tokenType: n.token_type,
                    scopes: a,
                    authorizeUrl: r.authorizeUrl,
                    userinfoUrl: r.userinfoUrl
                }), n.code && (o.code = {
                    authorizationCode: n.code
                }), n.id_token) {
                var i = e.token.decode(n.id_token),
                    s = {
                        idToken: n.id_token,
                        claims: i.payload,
                        expiresAt: i.payload.exp,
                        scopes: a,
                        authorizeUrl: r.authorizeUrl,
                        issuer: r.issuer,
                        clientId: f
                    };
                return d(e, s, t.nonce, !0).then(function() {
                    return o.id_token = s, o
                })
            }
            return o
        }).then(function(e) {
            if (!Array.isArray(i)) return e[i];
            if (!e.token && !e.id_token) throw new u("Unable to parse OAuth flow response");
            return i.map(function(t) {
                return e[t]
            })
        })
    }

    function y(e, t) {
        (t = o.clone(t) || {}).scope && (o.deprecate('The param "scope" is equivalent to "scopes". Use "scopes" instead.'), t.scopes = t.scope, delete t.scope);
        var n = {
            clientId: e.options.clientId,
            redirectUri: e.options.redirectUri || window.location.href,
            responseType: "id_token",
            responseMode: "okta_post_message",
            state: o.genRandomString(64),
            nonce: o.genRandomString(64),
            scopes: ["openid", "email"]
        };
        return o.extend(n, t), n
    }

    function v(e) {
        var t = function(e) {
            if (!e.clientId) throw new u("A clientId must be specified in the OktaAuth constructor to get a token");
            if (o.isString(e.responseType) && -1 !== e.responseType.indexOf(" ")) throw new u("Multiple OAuth responseTypes must be defined as an array");
            var t = o.removeNils({
                client_id: e.clientId,
                redirect_uri: e.redirectUri,
                response_type: e.responseType,
                response_mode: e.responseMode,
                state: e.state,
                nonce: e.nonce,
                prompt: e.prompt,
                display: e.display,
                sessionToken: e.sessionToken,
                idp: e.idp,
                max_age: e.maxAge
            });
            if (Array.isArray(t.response_type) && (t.response_type = t.response_type.join(" ")), -1 !== e.responseType.indexOf("id_token") && -1 === e.scopes.indexOf("openid")) throw new u("openid scope must be specified in the scopes argument when requesting an id_token");
            return t.scope = e.scopes.join(" "), t
        }(e);
        return o.toQueryParams(t)
    }

    function g(e, t, n) {
        n = n || {};
        var r, a, c = y(e, t = t || {});
        t.sessionToken ? o.extend(c, {
            prompt: "none",
            responseMode: "okta_post_message",
            display: null
        }) : t.idp && o.extend(c, {
            display: "popup"
        });
        try {
            r = (a = i.getOAuthUrls(e, c, n)).authorizeUrl + v(c)
        } catch (e) {
            return s.reject(e)
        }

        function f(e) {
            return /^(https?\:\/\/)?([^:\/?#]*(?:\:[0-9]+)?)/.exec(e)[0]
        }
        switch (c.sessionToken || null === c.display ? "IFRAME" : "popup" === c.display ? "POPUP" : "IMPLICIT") {
            case "IFRAME":
                var l = h(e, n.timeout, c.state),
                    p = i.loadFrame(r);
                return l.then(function(t) {
                    return m(e, c, t, a)
                }).fin(function() {
                    document.body.contains(p) && p.parentElement.removeChild(p)
                });
            case "POPUP":
                var d;
                if ("okta_post_message" === c.responseMode) {
                    if (!e.features.isPopupPostMessageSupported()) return s.reject(new u("This browser doesn't have full postMessage support"));
                    d = h(e, n.timeout, c.state)
                }
                var g = {
                        popupTitle: n.popupTitle
                    },
                    w = i.loadPopup(r, g);
                if ("fragment" === c.responseMode) {
                    var b = f(e.idToken.authorize._getLocationHref()),
                        k = f(c.redirectUri);
                    if (b !== k) return s.reject(new u("Using fragment, the redirectUri origin (" + k + ") must match the origin of this page (" + b + ")"));
                    d = function(e, t, n) {
                        var r = s.defer();
                        return function e() {
                            try {
                                t && t.location && t.location.hash ? r.resolve(i.hashToObject(t.location.hash)) : t && !t.closed && setTimeout(e, 500)
                            } catch (t) {
                                setTimeout(e, 500)
                            }
                        }(), r.promise.timeout(n || 12e4, new u("OAuth flow timed out"))
                    }(0, w, n.timeout)
                }
                var _ = s.defer();
                var T = setInterval(function() {
                    w.closed && _.reject(new u("Unable to parse OAuth flow response"))
                }, 500);
                return d.then(function(e) {
                    _.resolve(e)
                }).fail(function(e) {
                    _.reject(e)
                }), _.promise.then(function(t) {
                    return m(e, c, t, a)
                }).fin(function() {
                    w.closed || (clearInterval(T), w.close())
                });
            default:
                return s.reject(new u("The full page redirect flow is not supported"))
        }
    }
    e.exports = {
        getToken: g,
        getWithoutPrompt: function(e, t, n) {
            var r = o.clone(t) || {};
            return o.extend(r, {
                prompt: "none",
                responseMode: "okta_post_message",
                display: null
            }), g(e, r, n)
        },
        getWithPopup: function(e, t, n) {
            var r = o.clone(t) || {};
            return o.extend(r, {
                display: "popup"
            }), g(e, r, n)
        },
        getWithRedirect: function(e, t, n) {
            var r = y(e, t = o.clone(t) || {});
            if (!t.responseMode) {
                var s = r.responseType; - 1 !== s.indexOf("code") && (o.isString(s) || Array.isArray(s) && 1 === s.length) ? o.extend(r, {
                    responseMode: "query"
                }) : o.extend(r, {
                    responseMode: "fragment"
                })
            }
            var a = i.getOAuthUrls(e, r, n),
                u = a.authorizeUrl + v(r);
            l.setCookie(f.REDIRECT_OAUTH_PARAMS_COOKIE_NAME, JSON.stringify({
                responseType: r.responseType,
                state: r.state,
                nonce: r.nonce,
                scopes: r.scopes,
                urls: a
            })), l.setCookie(f.REDIRECT_NONCE_COOKIE_NAME, r.nonce), l.setCookie(f.REDIRECT_STATE_COOKIE_NAME, r.state), e.token.getWithRedirect._setLocation(u)
        },
        parseFromUrl: function(e, t) {
            var n = e.token.parseFromUrl._getLocation().hash;
            t && (n = t.substring(t.indexOf("#")));
            var r = l.getCookie(f.REDIRECT_OAUTH_PARAMS_COOKIE_NAME);
            if (!n || !r) return s.reject(new u("Unable to parse a token from the url"));
            try {
                var o = JSON.parse(r),
                    a = o.urls;
                delete o.urls, l.deleteCookie(f.REDIRECT_OAUTH_PARAMS_COOKIE_NAME)
            } catch (e) {
                return s.reject(new u("Unable to parse the " + f.REDIRECT_OAUTH_PARAMS_COOKIE_NAME + " cookie: " + e.message))
            }
            return s.resolve(i.hashToObject(n)).then(function(n) {
                return t || function(e) {
                    var t = e.token.parseFromUrl._getHistory(),
                        n = e.token.parseFromUrl._getDocument(),
                        r = e.token.parseFromUrl._getLocation();
                    t && t.replaceState ? t.replaceState(null, n.title, r.pathname + r.search) : r.hash = ""
                }(e), m(e, o, n, a)
            })
        },
        refreshIdToken: function(e, t) {
            return (t = t || {}).display = null, t.prompt = "none", g(e, t)
        },
        decodeToken: p,
        verifyIdToken: function(e, t, n) {
            return n = n || {}, e.features.isTokenVerifySupported() ? i.getWellKnown(e).then(function(t) {
                return r.get(e, t.jwks_uri)
            }).then(function(e) {
                var n = e.keys[0];
                return a.verifyToken(t, n)
            }).then(function(r) {
                if (!r) return !1;
                var o = e.token.decode(t);
                return !(function(e) {
                    var t;
                    if (t = n.expirationTime || 0 === n.expirationTime ? n.expirationTime : Math.floor(Date.now() / 1e3), e && e > t) return !0
                }(o.payload.exp) || ! function(e) {
                    if (!n.audience) return !0;
                    for (var t = Array.isArray(n.audience) ? n.audience : [n.audience], r = Array.isArray(e) ? e : [e], o = t.length; o--;) {
                        var i = t[o];
                        if (-1 !== r.indexOf(i)) return !0
                    }
                }(o.payload.aud) || n.issuer && n.issuer !== o.payload.iss)
            }) : s.reject(new u("This browser doesn't support crypto.subtle"))
        },
        refreshToken: function(e, t) {
            return i.isToken(t) ? (n = t.accessToken ? "token" : "id_token", e.token.getWithoutPrompt({
                responseType: n,
                scopes: t.scopes
            }, {
                authorizeUrl: t.authorizeUrl,
                userinfoUrl: t.userinfoUrl,
                issuer: t.issuer
            })) : s.reject(new u("Refresh must be passed a token with an array of scopes and an accessToken or idToken"));
            var n
        },
        getUserInfo: function(e, t) {
            return t && (i.isToken(t) || t.accessToken || t.userinfoUrl) ? r.httpRequest(e, {
                url: t.userinfoUrl,
                method: "GET",
                accessToken: t.accessToken
            }).fail(function(e) {
                if (e.xhr && (401 === e.xhr.status || 403 === e.xhr.status)) {
                    var t = e.xhr.getResponseHeader("WWW-Authenticate");
                    if (t) {
                        var n = t.match(/error="(.*?)"/) || [],
                            r = t.match(/error_description="(.*?)"/) || [],
                            o = n[1],
                            i = r[1];
                        o && i && (e = new c(o, i))
                    }
                }
                throw e
            }) : s.reject(new u("getUserInfo requires an access token object"))
        },
        verifyToken: d
    }
}, function(e, t, n) {
    /*!
     * Copyright (c) 2015-2016, Okta, Inc. and/or its affiliates. All rights reserved.
     * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
     *
     * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
     * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     *
     * See the License for the specific language governing permissions and limitations under the License.
     */
    var r = n(0);
    e.exports = {
        verifyToken: function(e, t) {
            t = r.clone(t);
            var n = {
                name: "RSASSA-PKCS1-v1_5",
                hash: {
                    name: "SHA-256"
                }
            };
            return delete t.use, crypto.subtle.importKey("jwk", t, n, !0, ["verify"]).then(function(t) {
                var o = e.split("."),
                    i = r.stringToBuffer(o[0] + "." + o[1]),
                    s = r.base64UrlDecode(o[2]),
                    a = r.stringToBuffer(s);
                return crypto.subtle.verify(n, t, a, i)
            })
        }
    }
}, function(e, t) {
    /*!
     * Copyright (c) 2015-2016, Okta, Inc. and/or its affiliates. All rights reserved.
     * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
     *
     * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
     * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     *
     * See the License for the specific language governing permissions and limitations under the License.
     */
    function n(e, t) {
        this.name = "OAuthError", this.message = t, this.errorCode = e, this.errorSummary = t
    }
    n.prototype = new Error, e.exports = n
}, function(e, t, n) {
    var r = n(0),
        o = n(2),
        i = n(10),
        s = n(5),
        a = n(34),
        u = n(3),
        c = n(13);

    function f(e, t, n) {
        e.emitter.emit("expired", t, n)
    }

    function l(e, t) {
        clearTimeout(e.refreshTimeouts[t]), delete e.refreshTimeouts[t]
    }

    function p(e, t, n, r, o) {
        var i = 1e3 * o.expiresAt - Date.now();
        i < 0 && (i = 0);
        var s = setTimeout(function() {
            if (t.autoRefresh) return y(e, t, n, r);
            1e3 * o.expiresAt <= Date.now() && (m(t, n, r), f(t, r, o))
        }, i);
        l(t, r), t.refreshTimeouts[r] = s
    }

    function d(e, t, n, i, s) {
        var a = n.getStorage();
        if (!r.isObject(s) || !s.scopes || !s.expiresAt && 0 !== s.expiresAt || !s.idToken && !s.accessToken) throw new o("Token must be an Object with scopes, expiresAt, and an idToken or accessToken properties");
        a[i] = s, n.setStorage(a), p(e, t, n, i, s)
    }

    function h(e, t) {
        return e.getStorage()[t]
    }

    function m(e, t, n) {
        l(e, n);
        var r = t.getStorage();
        delete r[n], t.setStorage(r)
    }

    function y(e, t, n, r) {
        try {
            var i = h(n, r);
            if (!i) throw new o("The tokenManager has no token for the key: " + r)
        } catch (e) {
            return s.reject(e)
        }
        return l(t, r), e.token.refresh(i).then(function(o) {
            return d(e, t, n, r, o), t.emitter.emit("refreshed", r, o, i), o
        }).fail(function(e) {
            throw "OAuthError" === e.name && (m(t, n, r), f(t, r, i)), e
        })
    }

    function v(e, t) {
        ! function(e) {
            var t = e.refreshTimeouts;
            for (var n in t) t.hasOwnProperty(n) && l(e, n);
            e.refreshTimeouts = {}
        }(e), t.clearStorage()
    }
    e.exports = function(e, t) {
        var n;
        switch ((t = t || {}).storage = t.storage || "localStorage", t.autoRefresh || !1 === t.autoRefresh || (t.autoRefresh = !0), "localStorage" !== t.storage || i.browserHasLocalStorage() || (r.warn("This browser doesn't support localStorage. Switching to sessionStorage."), t.storage = "sessionStorage"), "sessionStorage" !== t.storage || i.browserHasSessionStorage() || (r.warn("This browser doesn't support sessionStorage. Switching to cookie-based storage."), t.storage = "cookie"), t.storage) {
            case "localStorage":
                n = c(localStorage, u.TOKEN_STORAGE_NAME);
                break;
            case "sessionStorage":
                n = c(sessionStorage, u.TOKEN_STORAGE_NAME);
                break;
            case "cookie":
                n = c(i.getCookieStorage(), u.TOKEN_STORAGE_NAME);
                break;
            default:
                throw new o("Unrecognized storage option")
        }
        var s = {
            emitter: new a,
            autoRefresh: t.autoRefresh,
            refreshTimeouts: {}
        };
        this.add = r.bind(d, this, e, s, n), this.get = r.bind(h, this, n), this.remove = r.bind(m, this, s, n), this.clear = r.bind(v, this, s, n), this.refresh = r.bind(y, this, e, s, n), this.on = r.bind(s.emitter.on, s.emitter), this.off = r.bind(s.emitter.off, s.emitter),
            function(e, t, n) {
                try {
                    var r = n.getStorage()
                } catch (e) {
                    return void t.emitter.emit("error", e)
                }
                for (var o in r) r.hasOwnProperty(o) && p(e, t, n, o, r[o])
            }(e, s, n)
    }
}, function(e, t) {
    function n() {}
    n.prototype = {
        on: function(e, t, n) {
            var r = this.e || (this.e = {});
            return (r[e] || (r[e] = [])).push({
                fn: t,
                ctx: n
            }), this
        },
        once: function(e, t, n) {
            var r = this;

            function o() {
                r.off(e, o), t.apply(n, arguments)
            }
            return o._ = t, this.on(e, o, n)
        },
        emit: function(e) {
            for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), r = 0, o = n.length; r < o; r++) n[r].fn.apply(n[r].ctx, t);
            return this
        },
        off: function(e, t) {
            var n = this.e || (this.e = {}),
                r = n[e],
                o = [];
            if (r && t)
                for (var i = 0, s = r.length; i < s; i++) r[i].fn !== t && r[i].fn._ !== t && o.push(r[i]);
            return o.length ? n[e] = o : delete n[e], this
        }
    }, e.exports = n
}, function(e, t, n) {
    "use strict";
    n.r(t);
    n(14), n(15);
    var r = n(1),
        o = n.n(r),
        i = n(11),
        s = n.n(i),
        a = n(4),
        u = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        c = ["fprt", "mai", "mlbunifieddata", "okta-access-token"],
        f = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = u({}, e, t);
            return {
                clientId: n.clientId,
                url: n.okta,
                issuer: n.issuer,
                redirectUri: window.location.origin + "/login",
                tokenManager: n.tokenManager || {
                    autoRefresh: !1
                }
            }
        };

    function l(e, t) {
        try {
            c.forEach(function(e) {
                o.a.remove(e, {
                    path: "/",
                    domain: t
                })
            }), e.tokenManager.clear()
        } catch (e) {
            console.warn("Error removing auth cookies or storage.", e)
        }
    }

    function p(e) {
        return parseInt(e + "000", 10)
    }
    var d = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function(e) {
                    return e
                },
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            try {
                e.call(null)
            } catch (e) {
                throw e.message = t, e.redirect = n, e
            }
        },
        h = function(e) {
            return function() {
                if (!e) throw new Error
            }
        };
    n.d(t, "isLoggedIn", function() {
        return g
    }), n.d(t, "logoutOnly", function() {
        return w
    }), n.d(t, "logout", function() {
        return b
    }), n.d(t, "getToken", function() {
        return k
    }), n.d(t, "decodeIdToken", function() {
        return _
    }), n.d(t, "redirectToLogin", function() {
        return T
    }), n.d(t, "getAuthClient", function() {
        return A
    }), n.d(t, "getAuthConfig", function() {
        return x
    }), n.d(t, "setMaiCookie", function() {
        return E
    }), n.d(t, "setOktaIdCookie", function() {
        return S
    }), n.d(t, "setIdTokenCookie", function() {
        return O
    }), n.d(t, "setAccessTokeninCookie", function() {
        return C
    }), n.d(t, "updateConfig", function() {
        return j
    }), n.d(t, "isEntitled", function() {
        return R
    }), n.d(t, "handleIdle", function() {
        return U
    });
    var m = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        y = "." + window.location.hostname.split(".").slice(-2).join("."),
        v = new s.a(f(a.config)),
        g = function() {
            return new Promise(function(e, t) {
                try {
                    var n = o.a.get("ipid"),
                        r = o.a.get("fprt"),
                        i = v.tokenManager.get("id_token"),
                        s = v.tokenManager.get("access_token"),
                        a = function(e, t) {
                            return !(!e || !t) && e.claims.ipid === t
                        }(i, n),
                        u = !!(c = s) && new Date(p(c.expiresAt)).getTime() > Date.now();
                    return d(h(r), "Fprt is not set.", !0), d(h(n), "Ipid is not set.", !0), d(h(i), "Id token is not set.", !0), d(h(s), "Access token is not set.", !0), d(h(a), "Ipids do not match.", !0), d(h(u), "Access token is expired.", !0), j({
                        tokenManager: {
                            autoRefresh: !0
                        }
                    }), e({
                        loggedIn: !0,
                        idToken: i,
                        accessToken: s,
                        ipid: n,
                        fprt: r
                    })
                } catch (e) {
                    return l(v, y), t(e)
                }
                var c
            })
        },
        w = function() {
            return l(v, y), v.signOut().catch(function(e) {
                return console.error(e)
            })
        },
        b = function() {
            return w().then(function() {
                return window.location.reload(!0)
            })
        },
        k = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "id_token",
                t = v.tokenManager.get(e);
            return t || (console.warn("Client has no " + e + ", please check type or login."), {})
        },
        _ = function() {
            var e = k("id_token").idToken;
            return e ? v.token.decode(e).payload : {}
        },
        T = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/login",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.pathname;
            window.location = e + "?redirectUri=" + t
        },
        A = function() {
            return v
        },
        x = function() {
            return a.config
        },
        E = function() {
            var e = ["lastName", "firstName", "birthYear", "birthDay", "birthMonth", "avatar", "email"],
                t = {
                    expires: 365,
                    path: "/",
                    domain: y
                },
                n = _(),
                r = Object.keys(n).filter(function(t) {
                    return -1 !== e.indexOf(t)
                }).filter(function(e) {
                    return n[e]
                }).map(function(e) {
                    return ("email" === e ? "_email" : e) + "=" + n[e]
                }).join("&");
            return o.a.set("mai", r, t), "mai"
        },
        S = function() {
            var e = new Date((new Date).getTime() + 31536e6),
                t = _().sub || "",
                n = {
                    expires: e,
                    path: "/",
                    domain: y
                };
            return o.a.set("oktaid", t, n), "oktaid"
        },
        O = function() {
            var e = new Date((new Date).getTime() + 6e4),
                t = k("id_token"),
                n = {
                    expires: e,
                    path: "/",
                    secure: !0,
                    domain: y
                };
            return o.a.set("okta-id-token", t, n), "okta-id-token"
        },
        C = function() {
            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).useExpires,
                t = k("access_token"),
                n = new Date(p(t.expiresAt)),
                r = new Date((new Date).getTime() + 6e4),
                i = e ? n : r,
                s = {
                    expires: i,
                    path: "/",
                    secure: !0,
                    domain: y
                };
            return o.a.set("okta-access-token", t, s), {
                name: "okta-access-token",
                expires: i
            }
        },
        j = function(e) {
            try {
                m(a.config, e), v = new s.a(f(a.config))
            } catch (e) {
                console.error("Error updating config for OktaAuth: ", e)
            }
        },
        R = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                entitlements: []
            };
            try {
                var t = k("access_token").accessToken,
                    n = e.entitlements,
                    r = v.token.decode(t).payload.uid,
                    o = a.config.entitlementServices + "principalType=user&principalId=" + r;
                return fetch(o, {
                    headers: {
                        Authorization: "Bearer " + t
                    }
                }).then(function(e) {
                    return e.json()
                }).then(function(e) {
                    var t = e.contents;
                    if (t.filter(function(e) {
                            return -1 !== n.indexOf(e.entitlementCode)
                        }).length < 1) throw console.warn("entitlements issue. user has:", t, "but needs:", n), new Error("does not have valid entitlements");
                    return !0
                }).catch(function(e) {
                    return console.warn("entitlements request error", e.message), !1
                })
            } catch (e) {
                return console.warn(e), Promise.reject(!1)
            }
        },
        U = function() {
            v.tokenManager.on("expired", function(e) {
                console.warn("Token with key " + e + " has expired, redirecting to mlb.com/login"), v.session.get().then(function() {
                    var e = k("access_token"),
                        t = k();
                    return Promise.all([e, t].map(v.token.refresh)).then(function() {
                        return console.log("okta tokens refreshed")
                    })
                }).catch(function(e) {
                    console.error("Auth client token refresh error.", e), T()
                })
            }), v.tokenManager.on("error", function(e) {
                console.error("TokenManager error: ", e)
            })
        }
}]);
//# sourceMappingURL=mlb-okta.js.map