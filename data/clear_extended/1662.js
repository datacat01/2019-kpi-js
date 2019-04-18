window.Krux || ((Krux = function() {
    Krux.q.push(arguments)
}).q = []);
(function() {
    function a(d) {
        var b, c = "kx" + d;
        if (window.localStorage) {
            return window.localStorage[c] || ""
        } else {
            if (navigator.cookieEnabled) {
                b = document.cookie.match(c + "=([^;]*)");
                return (b && unescape(b[1])) || ""
            } else {
                return ""
            }
        }
    }
    Krux.user = a("user");
    Krux.segments = a("segs") ? a("segs").split(",") : []
})();
(function() {
    var a;
    window.addEventListener("resize", function() {
        if (a) {
            clearTimeout(a)
        }
        a = setTimeout(function() {
            var b = new CustomEvent("debouncedresize");
            window.dispatchEvent(b)
        }, 250)
    })
})();
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function(c, a) {
        a = a || window;
        for (var b = 0; b < this.length; b++) {
            c.call(a, this[b], b, this)
        }
    }
}(function(i, l) {
    if ("IntersectionObserver" in i && "IntersectionObserverEntry" in i && "intersectionRatio" in i.IntersectionObserverEntry.prototype) {
        if (!("isIntersecting" in i.IntersectionObserverEntry.prototype)) {
            Object.defineProperty(i.IntersectionObserverEntry.prototype, "isIntersecting", {
                get: function() {
                    return this.intersectionRatio > 0
                }
            })
        }
        return
    }
    var b = [];

    function e(q) {
        this.time = q.time;
        this.target = q.target;
        this.rootBounds = q.rootBounds;
        this.boundingClientRect = q.boundingClientRect;
        this.intersectionRect = q.intersectionRect || j();
        this.isIntersecting = !!q.intersectionRect;
        var s = this.boundingClientRect;
        var r = s.width * s.height;
        var p = this.intersectionRect;
        var o = p.width * p.height;
        if (r) {
            this.intersectionRatio = o / r
        } else {
            this.intersectionRatio = this.isIntersecting ? 1 : 0
        }
    }

    function a(q, p) {
        var o = p || {};
        if (typeof q != "function") {
            throw new Error("callback must be a function")
        }
        if (o.root && o.root.nodeType != 1) {
            throw new Error("root must be an Element")
        }
        this._checkForIntersections = m(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);
        this._callback = q;
        this._observationTargets = [];
        this._queuedEntries = [];
        this._rootMarginValues = this._parseRootMargin(o.rootMargin);
        this.thresholds = this._initThresholds(o.threshold);
        this.root = o.root || null;
        this.rootMargin = this._rootMarginValues.map(function(r) {
            return r.value + r.unit
        }).join(" ")
    }
    a.prototype.THROTTLE_TIMEOUT = 100;
    a.prototype.POLL_INTERVAL = null;
    a.prototype.observe = function(o) {
        if (this._observationTargets.some(function(p) {
                return p.element == o
            })) {
            return
        }
        if (!(o && o.nodeType == 1)) {
            throw new Error("target must be an Element")
        }
        this._registerInstance();
        this._observationTargets.push({
            element: o,
            entry: null
        });
        this._monitorIntersections();
        this._checkForIntersections()
    };
    a.prototype.unobserve = function(o) {
        this._observationTargets = this._observationTargets.filter(function(p) {
            return p.element != o
        });
        if (!this._observationTargets.length) {
            this._unmonitorIntersections();
            this._unregisterInstance()
        }
    };
    a.prototype.disconnect = function() {
        this._observationTargets = [];
        this._unmonitorIntersections();
        this._unregisterInstance()
    };
    a.prototype.takeRecords = function() {
        var o = this._queuedEntries.slice();
        this._queuedEntries = [];
        return o
    };
    a.prototype._initThresholds = function(p) {
        var o = p || [0];
        if (!Array.isArray(o)) {
            o = [o]
        }
        return o.sort().filter(function(s, r, q) {
            if (typeof s != "number" || isNaN(s) || s < 0 || s > 1) {
                throw new Error("threshold must be a number between 0 and 1 inclusively")
            }
            return s !== q[r - 1]
        })
    };
    a.prototype._parseRootMargin = function(o) {
        var p = o || "0px";
        var q = p.split(/\s+/).map(function(r) {
            var s = /^(-?\d*\.?\d+)(px|%)$/.exec(r);
            if (!s) {
                throw new Error("rootMargin must be specified in pixels or percent")
            }
            return {
                value: parseFloat(s[1]),
                unit: s[2]
            }
        });
        q[1] = q[1] || q[0];
        q[2] = q[2] || q[0];
        q[3] = q[3] || q[1];
        return q
    };
    a.prototype._monitorIntersections = function() {
        if (!this._monitoringIntersections) {
            this._monitoringIntersections = true;
            if (this.POLL_INTERVAL) {
                this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL)
            } else {
                f(i, "resize", this._checkForIntersections, true);
                f(l, "scroll", this._checkForIntersections, true);
                if ("MutationObserver" in i) {
                    this._domObserver = new MutationObserver(this._checkForIntersections);
                    this._domObserver.observe(l, {
                        attributes: true,
                        childList: true,
                        characterData: true,
                        subtree: true
                    })
                }
            }
        }
    };
    a.prototype._unmonitorIntersections = function() {
        if (this._monitoringIntersections) {
            this._monitoringIntersections = false;
            clearInterval(this._monitoringInterval);
            this._monitoringInterval = null;
            k(i, "resize", this._checkForIntersections, true);
            k(l, "scroll", this._checkForIntersections, true);
            if (this._domObserver) {
                this._domObserver.disconnect();
                this._domObserver = null
            }
        }
    };
    a.prototype._checkForIntersections = function() {
        var p = this._rootIsInDom();
        var o = p ? this._getRootRect() : j();
        this._observationTargets.forEach(function(t) {
            var w = t.element;
            var v = d(w);
            var r = this._rootContainsTarget(w);
            var s = t.entry;
            var q = p && r && this._computeTargetAndRootIntersection(w, o);
            var u = t.entry = new e({
                time: c(),
                target: w,
                boundingClientRect: v,
                rootBounds: o,
                intersectionRect: q
            });
            if (!s) {
                this._queuedEntries.push(u)
            } else {
                if (p && r) {
                    if (this._hasCrossedThreshold(s, u)) {
                        this._queuedEntries.push(u)
                    }
                } else {
                    if (s && s.isIntersecting) {
                        this._queuedEntries.push(u)
                    }
                }
            }
        }, this);
        if (this._queuedEntries.length) {
            this._callback(this.takeRecords(), this)
        }
    };
    a.prototype._computeTargetAndRootIntersection = function(v, q) {
        if (i.getComputedStyle(v).display == "none") {
            return
        }
        var u = d(v);
        var p = u;
        var s = n(v);
        var r = false;
        while (!r) {
            var o = null;
            var t = s.nodeType == 1 ? i.getComputedStyle(s) : {};
            if (t.display == "none") {
                return
            }
            if (s == this.root || s == l) {
                r = true;
                o = q
            } else {
                if (s != l.body && s != l.documentElement && t.overflow != "visible") {
                    o = d(s)
                }
            }
            if (o) {
                p = g(o, p);
                if (!p) {
                    break
                }
            }
            s = n(s)
        }
        return p
    };
    a.prototype._getRootRect = function() {
        var p;
        if (this.root) {
            p = d(this.root)
        } else {
            var q = l.documentElement;
            var o = l.body;
            p = {
                top: 0,
                left: 0,
                right: q.clientWidth || o.clientWidth,
                width: q.clientWidth || o.clientWidth,
                bottom: q.clientHeight || o.clientHeight,
                height: q.clientHeight || o.clientHeight
            }
        }
        return this._expandRectByRootMargin(p)
    };
    a.prototype._expandRectByRootMargin = function(p) {
        var q = this._rootMarginValues.map(function(s, r) {
            return s.unit == "px" ? s.value : s.value * (r % 2 ? p.width : p.height) / 100
        });
        var o = {
            top: p.top - q[0],
            right: p.right + q[1],
            bottom: p.bottom + q[2],
            left: p.left - q[3]
        };
        o.width = o.right - o.left;
        o.height = o.bottom - o.top;
        return o
    };
    a.prototype._hasCrossedThreshold = function(q, t) {
        var p = q && q.isIntersecting ? q.intersectionRatio || 0 : -1;
        var s = t.isIntersecting ? t.intersectionRatio || 0 : -1;
        if (p === s) {
            return
        }
        for (var r = 0; r < this.thresholds.length; r++) {
            var o = this.thresholds[r];
            if (o == p || o == s || o < p !== o < s) {
                return true
            }
        }
    };
    a.prototype._rootIsInDom = function() {
        return !this.root || h(l, this.root)
    };
    a.prototype._rootContainsTarget = function(o) {
        return h(this.root || l, o)
    };
    a.prototype._registerInstance = function() {
        if (b.indexOf(this) < 0) {
            b.push(this)
        }
    };
    a.prototype._unregisterInstance = function() {
        var o = b.indexOf(this);
        if (o != -1) {
            b.splice(o, 1)
        }
    };

    function c() {
        return i.performance && performance.now && performance.now()
    }

    function m(o, p) {
        var q = null;
        return function() {
            if (!q) {
                q = setTimeout(function() {
                    o();
                    q = null
                }, p)
            }
        }
    }

    function f(q, p, o, r) {
        if (typeof q.addEventListener == "function") {
            q.addEventListener(p, o, r || false)
        } else {
            if (typeof q.attachEvent == "function") {
                q.attachEvent("on" + p, o)
            }
        }
    }

    function k(q, p, o, r) {
        if (typeof q.removeEventListener == "function") {
            q.removeEventListener(p, o, r || false)
        } else {
            if (typeof q.detatchEvent == "function") {
                q.detatchEvent("on" + p, o)
            }
        }
    }

    function g(r, p) {
        var v = Math.max(r.top, p.top);
        var q = Math.min(r.bottom, p.bottom);
        var u = Math.max(r.left, p.left);
        var s = Math.min(r.right, p.right);
        var t = s - u;
        var o = q - v;
        return (t >= 0 && o >= 0) && {
            top: v,
            bottom: q,
            left: u,
            right: s,
            width: t,
            height: o
        }
    }

    function d(o) {
        var q;
        try {
            q = o.getBoundingClientRect()
        } catch (p) {}
        if (!q) {
            return j()
        }
        if (!(q.width && q.height)) {
            q = {
                top: q.top,
                right: q.right,
                bottom: q.bottom,
                left: q.left,
                width: q.right - q.left,
                height: q.bottom - q.top
            }
        }
        return q
    }

    function j() {
        return {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
        }
    }

    function h(o, q) {
        var p = q;
        while (p) {
            if (p == o) {
                return true
            }
            p = n(p)
        }
        return false
    }

    function n(p) {
        var o = p.parentNode;
        if (o && o.nodeType == 11 && o.host) {
            return o.host
        }
        return o
    }
    i.IntersectionObserver = a;
    i.IntersectionObserverEntry = e
}(window, document));
"use strict";
window.AARP = window.AARP || {};
AARP.readyStateLoader = function(a) {
    if (document && document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", a)
    } else {
        if (document) {
            a()
        }
    }
};
"use strict";

function _classCallCheck(a, b) {
    if (!(a instanceof b)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(d, b) {
    for (var a = 0; a < b.length; a++) {
        var c = b[a];
        c.enumerable = c.enumerable || false;
        c.configurable = true;
        if ("value" in c) {
            c.writable = true
        }
        Object.defineProperty(d, c.key, c)
    }
}

function _createClass(c, a, b) {
    if (a) {
        _defineProperties(c.prototype, a)
    }
    if (b) {
        _defineProperties(c, b)
    }
    return c
}
var AdaptImages = function() {
    function h() {
        _classCallCheck(this, h)
    }
    _createClass(h, [{
        key: "adapt",
        value: function g() {
            var l = this;
            var k = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var j;
            if (k && k.details && k.details.selector) {
                j = document.querySelectorAll(k.details.selector)
            } else {
                j = [document]
            }
            j.forEach(function(m) {
                var n = m.querySelectorAll("[data-image],[data-image-background]");
                n.forEach(function(t, v) {
                    var x = t.getAttribute("data-original-ratio"),
                        y = t.getAttribute("data-original-src");
                    var p = t.getAttribute("data-original-width"),
                        s = t.getAttribute("data-original-height"),
                        q = parseInt(t.getAttribute("data-width")),
                        z = t.getAttribute("data-alt"),
                        r = t.classList.contains("lazyload"),
                        u = t.getAttribute("data-image-background") !== null;
                    x = x || s / p;
                    if (y) {
                        y = y.replace(/ /i, "%20");
                        if (1 * x) {
                            var w = l.getBestSize(l.getBoundingDimensions(t), x);
                            if (w.width == 0) {
                                return
                            }
                            if (!q || q < w.width) {
                                var o = l.swapUrlDimensions(y, w);
                                t.setAttribute("data-width", w.width);
                                t.removeAttribute("data-src");
                                if (u) {
                                    t.style.backgroundImage = null
                                } else {
                                    t.removeAttribute("src")
                                }
                                if (r) {
                                    t.setAttribute("data-src", o)
                                } else {
                                    if (u) {
                                        t.style.backgroundImage = "url(".concat(o, ")")
                                    } else {
                                        t.setAttribute("src", o)
                                    }
                                }
                            }
                        } else {
                            if (r) {
                                t.setAttribute("data-src", y)
                            } else {
                                if (u) {
                                    t.style.backgroundImage = "url(".concat(y, ")")
                                } else {
                                    t.setAttribute("src", y)
                                }
                            }
                        }
                        if (z && !r) {
                            t.setAttribute("alt", z)
                        }
                    }
                })
            })
        }
    }, {
        key: "getBestSize",
        value: function b(l, k) {
            var m = this.quantizeDimension(l.width),
                n = this.quantizeDimension(l.height);
            var j = {
                width: m,
                height: Math.round(m * k)
            };
            var o = {
                width: Math.round(n / k),
                height: n
            };
            if (j.height >= l.height) {
                return j
            } else {
                return o
            }
        }
    }, {
        key: "quantizeDimension",
        value: function a(k) {
            var j = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
            return Math.ceil(k / j) * j
        }
    }, {
        key: "getBoundingDimensions",
        value: function d(j) {
            var k = j.parentElement,
                m = false;
            if (window && window.getComputedStyle) {
                var l = window.getComputedStyle(k).display;
                if (~["inline", "contents", "list-item"].indexOf(l)) {
                    m = true
                }
            }
            if (!k) {
                m = false;
                k = j
            }
            if (m) {
                return this.getBoundingDimensions(k)
            } else {
                return k.getBoundingClientRect()
            }
        }
    }, {
        key: "splitSelectors",
        value: function c(j) {
            return j.split(".")
        }
    }, {
        key: "getPathInfoFromURL",
        value: function i(k) {
            var o = k.lastIndexOf("/");
            var j = k.lastIndexOf(".");
            var m = k.substring(0, o);
            var l = k.substring(o + 1, j);
            var n = k.substring(j + 1);
            return {
                path: m,
                basename: l,
                extension: n
            }
        }
    }, {
        key: "selectorPresentByRegex",
        value: function e(j, k) {
            if (typeof j == "string") {
                return Array.isArray(j.match(k))
            }
            return false
        }
    }, {
        key: "swapUrlDimensions",
        value: function f(k, j) {
            var m = this;
            var q = this.getPathInfoFromURL(k),
                r = q.path,
                n = q.basename,
                p = q.extension;
            var l = function l(s) {
                return m.selectorPresentByRegex(s, /^rev[a-z0-9]*/i)
            };
            var o = this.splitSelectors(n);
            if (o.length > 4) {
                o = o.slice(0, 4)
            } else {
                if (o.length <= 4) {
                    if (o.filter(function(s) {
                            return /^\d+$/.test(s)
                        }).length == 2) {
                        o = o.slice(0, 1)
                    }
                    if (!~o.indexOf("imgcache")) {
                        o = o.concat(["imgcache"])
                    }
                    if (!o.filter(l).length) {
                        o = o.concat(["rev"])
                    }
                    if (!~o.indexOf("web")) {
                        o = o.concat(["web"])
                    }
                }
            }
            o = o.concat([j.width, j.height]);
            return "".concat(r, "/").concat(o.join("."), ".").concat(p)
        }
    }]);
    return h
}();
window.AARP = window.AARP || {};
AARP.Foundation = AARP.Foundation || {};
AARP.Foundation.AdaptImages = new AdaptImages();
AARP.readyStateLoader(function() {
    AARP.Foundation.AdaptImages.adapt()
});
window.addEventListener("debouncedresize", function() {
    AARP.Foundation.AdaptImages.adapt()
});
window.addEventListener("ajax-content-updated", function() {
    AARP.Foundation.AdaptImages.adapt()
});
window.addEventListener("ADAPT_IMAGES", AARP.Foundation.AdaptImages.adapt);
"use strict";

function _classCallCheck(a, b) {
    if (!(a instanceof b)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(d, b) {
    for (var a = 0; a < b.length; a++) {
        var c = b[a];
        c.enumerable = c.enumerable || false;
        c.configurable = true;
        if ("value" in c) {
            c.writable = true
        }
        Object.defineProperty(d, c.key, c)
    }
}

function _createClass(c, a, b) {
    if (a) {
        _defineProperties(c.prototype, a)
    }
    if (b) {
        _defineProperties(c, b)
    }
    return c
}
var LazyLoad = function() {
    function c() {
        _classCallCheck(this, c);
        this.observer = new IntersectionObserver(this.onIntersection, {
            rootMargin: "100px 0px",
            threshold: 0.25
        })
    }
    _createClass(c, [{
        key: "load",
        value: function b() {
            var d = this;
            this.observer.disconnect();
            document.querySelectorAll("[data-src].lazyload").forEach(function(e) {
                d.observer.observe(e)
            })
        }
    }, {
        key: "onIntersection",
        value: function a(d) {
            var e = this;
            d.forEach(function(h) {
                if (h.intersectionRatio > 0) {
                    e.unobserve(h.target);
                    var i = h.target.getAttribute("data-image-background") != null,
                        f = h.target.getAttribute("data-src"),
                        g = h.target.getAttribute("data-alt");
                    if (g) {
                        h.target.setAttribute("alt", g)
                    }
                    if (i) {
                        h.target.style.backgroundImage = "url(".concat(f, ")")
                    } else {
                        h.target.setAttribute("src", f)
                    }
                }
            })
        }
    }]);
    return c
}();
window.AARP = window.AARP || {};
AARP.Foundation = AARP.Foundation || {};
AARP.Foundation.LazyLoad = new LazyLoad();
AARP.readyStateLoader(function() {
    AARP.Foundation.LazyLoad.load()
});
window.addEventListener("debouncedresize", function() {
    AARP.Foundation.LazyLoad.load()
});
window.addEventListener("ajax-content-updated", function() {
    AARP.Foundation.LazyLoad.load()
});
/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
;
! function(d, c) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = d.document ? c(d, !0) : function(b) {
        if (!b.document) {
            throw new Error("jQuery requires a window with a document")
        }
        return c(b)
    } : c(d)
}("undefined" != typeof window ? window : this, function(bQ, bP) {
    var bO = [],
        bN = bQ.document,
        bM = Object.getPrototypeOf,
        bK = bO.slice,
        bI = bO.concat,
        bH = bO.push,
        bG = bO.indexOf,
        bF = {},
        bE = bF.toString,
        bD = bF.hasOwnProperty,
        bC = bD.toString,
        bB = bC.call(Object),
        bA = {};

    function bz(e, d) {
        d = d || bN;
        var f = d.createElement("script");
        f.text = e, d.head.appendChild(f).parentNode.removeChild(f)
    }
    var bx = "3.2.1",
        bw = function(d, c) {
            return new bw.fn.init(d, c)
        },
        bu = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        bt = /^-ms-/,
        bs = /-([a-z])/g,
        br = function(d, c) {
            return c.toUpperCase()
        };
    bw.fn = bw.prototype = {
        jquery: bx,
        constructor: bw,
        length: 0,
        toArray: function() {
            return bK.call(this)
        },
        get: function(b) {
            return null == b ? bK.call(this) : b < 0 ? this[b + this.length] : this[b]
        },
        pushStack: function(d) {
            var c = bw.merge(this.constructor(), d);
            return c.prevObject = this, c
        },
        each: function(b) {
            return bw.each(this, b)
        },
        map: function(b) {
            return this.pushStack(bw.map(this, function(a, d) {
                return b.call(a, d, a)
            }))
        },
        slice: function() {
            return this.pushStack(bK.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var d = this.length,
                f = +e + (e < 0 ? d : 0);
            return this.pushStack(f >= 0 && f < d ? [this[f]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: bH,
        sort: bO.sort,
        splice: bO.splice
    }, bw.extend = bw.fn.extend = function() {
        var t, s, r, q, p, o, n = arguments[0] || {},
            m = 1,
            l = arguments.length,
            k = !1;
        for ("boolean" == typeof n && (k = n, n = arguments[m] || {}, m++), "object" == typeof n || bw.isFunction(n) || (n = {}), m === l && (n = this, m--); m < l; m++) {
            if (null != (t = arguments[m])) {
                for (s in t) {
                    r = n[s], q = t[s], n !== q && (k && q && (bw.isPlainObject(q) || (p = Array.isArray(q))) ? (p ? (p = !1, o = r && Array.isArray(r) ? r : []) : o = r && bw.isPlainObject(r) ? r : {}, n[s] = bw.extend(k, o, q)) : void 0 !== q && (n[s] = q))
                }
            }
        }
        return n
    }, bw.extend({
        expando: "jQuery" + (bx + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(b) {
            throw new Error(b)
        },
        noop: function() {},
        isFunction: function(b) {
            return "function" === bw.type(b)
        },
        isWindow: function(b) {
            return null != b && b === b.window
        },
        isNumeric: function(d) {
            var c = bw.type(d);
            return ("number" === c || "string" === c) && !isNaN(d - parseFloat(d))
        },
        isPlainObject: function(e) {
            var d, f;
            return !(!e || "[object Object]" !== bE.call(e)) && (!(d = bM(e)) || (f = bD.call(d, "constructor") && d.constructor, "function" == typeof f && bC.call(f) === bB))
        },
        isEmptyObject: function(d) {
            var c;
            for (c in d) {
                return !1
            }
            return !0
        },
        type: function(b) {
            return null == b ? b + "" : "object" == typeof b || "function" == typeof b ? bF[bE.call(b)] || "object" : typeof b
        },
        globalEval: function(b) {
            bz(b)
        },
        camelCase: function(b) {
            return b.replace(bt, "ms-").replace(bs, br)
        },
        each: function(f, e) {
            var h, g = 0;
            if (bq(f)) {
                for (h = f.length; g < h; g++) {
                    if (e.call(f[g], g, f[g]) === !1) {
                        break
                    }
                }
            } else {
                for (g in f) {
                    if (e.call(f[g], g, f[g]) === !1) {
                        break
                    }
                }
            }
            return f
        },
        trim: function(b) {
            return null == b ? "" : (b + "").replace(bu, "")
        },
        makeArray: function(e, d) {
            var f = d || [];
            return null != e && (bq(Object(e)) ? bw.merge(f, "string" == typeof e ? [e] : e) : bH.call(f, e)), f
        },
        inArray: function(e, d, f) {
            return null == d ? -1 : bG.call(d, e, f)
        },
        merge: function(g, f) {
            for (var j = +f.length, i = 0, h = g.length; i < j; i++) {
                g[h++] = f[i]
            }
            return g.length = h, g
        },
        grep: function(j, i, p) {
            for (var o, n = [], m = 0, l = j.length, k = !p; m < l; m++) {
                o = !i(j[m], m), o !== k && n.push(j[m])
            }
            return n
        },
        map: function(i, g, n) {
            var m, l, k = 0,
                j = [];
            if (bq(i)) {
                for (m = i.length; k < m; k++) {
                    l = g(i[k], k, n), null != l && j.push(l)
                }
            } else {
                for (k in i) {
                    l = g(i[k], k, n), null != l && j.push(l)
                }
            }
            return bI.apply([], j)
        },
        guid: 1,
        proxy: function(g, f) {
            var j, i, h;
            if ("string" == typeof f && (j = g[f], f = g, g = j), bw.isFunction(g)) {
                return i = bK.call(arguments, 2), h = function() {
                    return g.apply(f || this, i.concat(bK.call(arguments)))
                }, h.guid = g.guid = g.guid || bw.guid++, h
            }
        },
        now: Date.now,
        support: bA
    }), "function" == typeof Symbol && (bw.fn[Symbol.iterator] = bO[Symbol.iterator]), bw.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(d, c) {
        bF["[object " + c + "]"] = c.toLowerCase()
    });

    function bq(e) {
        var d = !!e && "length" in e && e.length,
            f = bw.type(e);
        return "function" !== f && !bw.isWindow(e) && ("array" === f || 0 === d || "number" == typeof d && d > 0 && d - 1 in e)
    }
    var bp = function(dn) {
        var dm, dl, dj, di, dh, dg, df, dd, dc, db, c9, c8, c6, c5, c4, c3, c2, c1, c0, cZ = "sizzle" + 1 * new Date,
            cY = dn.document,
            cX = 0,
            cW = 0,
            cV = dJ(),
            cU = dJ(),
            dT = dJ(),
            dS = function(d, c) {
                return d === c && (c9 = !0), 0
            },
            dR = {}.hasOwnProperty,
            dQ = [],
            dO = dQ.pop,
            dN = dQ.push,
            dM = dQ.push,
            dL = dQ.slice,
            dK = function(f, e) {
                for (var h = 0, g = f.length; h < g; h++) {
                    if (f[h] === e) {
                        return h
                    }
                }
                return -1
            },
            dI = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            dH = "[\\x20\\t\\r\\n\\f]",
            dG = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            dF = "\\[" + dH + "*(" + dG + ")(?:" + dH + "*([*^$|!~]?=)" + dH + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + dG + "))|)" + dH + "*\\]",
            dE = ":(" + dG + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + dF + ")*)|.*)\\)|)",
            dD = new RegExp(dH + "+", "g"),
            dB = new RegExp("^" + dH + "+|((?:^|[^\\\\])(?:\\\\.)*)" + dH + "+$", "g"),
            dA = new RegExp("^" + dH + "*," + dH + "*"),
            dz = new RegExp("^" + dH + "*([>+~]|" + dH + ")" + dH + "*"),
            dy = new RegExp("=" + dH + "*([^\\]'\"]*?)" + dH + "*\\]", "g"),
            dx = new RegExp(dE),
            dw = new RegExp("^" + dG + "$"),
            dv = {
                ID: new RegExp("^#(" + dG + ")"),
                CLASS: new RegExp("^\\.(" + dG + ")"),
                TAG: new RegExp("^(" + dG + "|[*])"),
                ATTR: new RegExp("^" + dF),
                PSEUDO: new RegExp("^" + dE),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + dH + "*(even|odd|(([+-]|)(\\d*)n|)" + dH + "*(?:([+-]|)" + dH + "*(\\d+)|))" + dH + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + dI + ")$", "i"),
                needsContext: new RegExp("^" + dH + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + dH + "*((?:-\\d)?\\d*)" + dH + "*\\)|)(?=[^-]|$)", "i")
            },
            du = /^(?:input|select|textarea|button)$/i,
            dt = /^h\d$/i,
            ds = /^[^{]+\{\s*\[native \w/,
            dr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            dZ = /[+~]/,
            dq = new RegExp("\\\\([\\da-f]{1,6}" + dH + "?|(" + dH + ")|.)", "ig"),
            dW = function(f, e, h) {
                var g = "0x" + e - 65536;
                return g !== g || h ? e : g < 0 ? String.fromCharCode(g + 65536) : String.fromCharCode(g >> 10 | 55296, 1023 & g | 56320)
            },
            dC = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            c7 = function(d, c) {
                return c ? "\0" === d ? "\ufffd" : d.slice(0, -1) + "\\" + d.charCodeAt(d.length - 1).toString(16) + " " : "\\" + d
            },
            cQ = function() {
                c8()
            },
            bb = dU(function(b) {
                return b.disabled === !0 && ("form" in b || "label" in b)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            dM.apply(dQ = dL.call(cY.childNodes), cY.childNodes), dQ[cY.childNodes.length].nodeType
        } catch (d2) {
            dM = {
                apply: dQ.length ? function(d, c) {
                    dN.apply(d, dL.call(c))
                } : function(f, e) {
                    var h = f.length,
                        g = 0;
                    while (f[h++] = e[g++]) {}
                    f.length = h - 1
                }
            }
        }

        function dX(z, v, u, t) {
            var q, p, n, m, i, g, c, B = v && v.ownerDocument,
                A = v ? v.nodeType : 9;
            if (u = u || [], "string" != typeof z || !z || 1 !== A && 9 !== A && 11 !== A) {
                return u
            }
            if (!t && ((v ? v.ownerDocument || v : cY) !== c6 && c8(v), v = v || c6, c4)) {
                if (11 !== A && (i = dr.exec(z))) {
                    if (q = i[1]) {
                        if (9 === A) {
                            if (!(n = v.getElementById(q))) {
                                return u
                            }
                            if (n.id === q) {
                                return u.push(n), u
                            }
                        } else {
                            if (B && (n = B.getElementById(q)) && c0(v, n) && n.id === q) {
                                return u.push(n), u
                            }
                        }
                    } else {
                        if (i[2]) {
                            return dM.apply(u, v.getElementsByTagName(z)), u
                        }
                        if ((q = i[3]) && dl.getElementsByClassName && v.getElementsByClassName) {
                            return dM.apply(u, v.getElementsByClassName(q)), u
                        }
                    }
                }
                if (dl.qsa && !dT[z + " "] && (!c3 || !c3.test(z))) {
                    if (1 !== A) {
                        B = v, c = z
                    } else {
                        if ("object" !== v.nodeName.toLowerCase()) {
                            (m = v.getAttribute("id")) ? m = m.replace(dC, c7): v.setAttribute("id", m = cZ), g = dg(z), p = g.length;
                            while (p--) {
                                g[p] = "#" + m + " " + d0(g[p])
                            }
                            c = g.join(","), B = dZ.test(z) && cO(v.parentNode) || v
                        }
                    }
                    if (c) {
                        try {
                            return dM.apply(u, B.querySelectorAll(c)), u
                        } catch (y) {} finally {
                            m === cZ && v.removeAttribute("id")
                        }
                    }
                }
            }
            return dd(z.replace(dB, "$1"), v, u, t)
        }

        function dJ() {
            var d = [];

            function c(b, a) {
                return d.push(b + " ") > dj.cacheLength && delete c[d.shift()], c[b + " "] = a
            }
            return c
        }

        function de(b) {
            return b[cZ] = !0, b
        }

        function cR(e) {
            var d = c6.createElement("fieldset");
            try {
                return !!e(d)
            } catch (f) {
                return !1
            } finally {
                d.parentNode && d.parentNode.removeChild(d), d = null
            }
        }

        function cb(f, d) {
            var h = f.split("|"),
                g = h.length;
            while (g--) {
                dj.attrHandle[h[g]] = d
            }
        }

        function d3(f, e) {
            var h = e && f,
                g = h && 1 === f.nodeType && 1 === e.nodeType && f.sourceIndex - e.sourceIndex;
            if (g) {
                return g
            }
            if (h) {
                while (h = h.nextSibling) {
                    if (h === e) {
                        return -1
                    }
                }
            }
            return f ? 1 : -1
        }

        function dY(b) {
            return function(a) {
                var d = a.nodeName.toLowerCase();
                return "input" === d && a.type === b
            }
        }

        function dP(b) {
            return function(a) {
                var d = a.nodeName.toLowerCase();
                return ("input" === d || "button" === d) && a.type === b
            }
        }

        function dk(b) {
            return function(a) {
                return "form" in a ? a.parentNode && a.disabled === !1 ? "label" in a ? "label" in a.parentNode ? a.parentNode.disabled === b : a.disabled === b : a.isDisabled === b || a.isDisabled !== !b && bb(a) === b : a.disabled === b : "label" in a && a.disabled === b
            }
        }

        function cS(b) {
            return de(function(a) {
                return a = +a, de(function(l, k) {
                    var j, i = b([], l.length, a),
                        h = i.length;
                    while (h--) {
                        l[j = i[h]] && (l[j] = !(k[j] = l[j]))
                    }
                })
            })
        }

        function cO(b) {
            return b && "undefined" != typeof b.getElementsByTagName && b
        }
        dl = dX.support = {}, dh = dX.isXML = function(d) {
            var c = d && (d.ownerDocument || d).documentElement;
            return !!c && "HTML" !== c.nodeName
        }, c8 = dX.setDocument = function(d) {
            var c, h, f = d ? d.ownerDocument || d : cY;
            return f !== c6 && 9 === f.nodeType && f.documentElement ? (c6 = f, c5 = c6.documentElement, c4 = !dh(c6), cY !== c6 && (h = c6.defaultView) && h.top !== h && (h.addEventListener ? h.addEventListener("unload", cQ, !1) : h.attachEvent && h.attachEvent("onunload", cQ)), dl.attributes = cR(function(b) {
                return b.className = "i", !b.getAttribute("className")
            }), dl.getElementsByTagName = cR(function(b) {
                return b.appendChild(c6.createComment("")), !b.getElementsByTagName("*").length
            }), dl.getElementsByClassName = ds.test(c6.getElementsByClassName), dl.getById = cR(function(b) {
                return c5.appendChild(b).id = cZ, !c6.getElementsByName || !c6.getElementsByName(cZ).length
            }), dl.getById ? (dj.filter.ID = function(g) {
                var e = g.replace(dq, dW);
                return function(b) {
                    return b.getAttribute("id") === e
                }
            }, dj.find.ID = function(g, e) {
                if ("undefined" != typeof e.getElementById && c4) {
                    var i = e.getElementById(g);
                    return i ? [i] : []
                }
            }) : (dj.filter.ID = function(g) {
                var e = g.replace(dq, dW);
                return function(b) {
                    var i = "undefined" != typeof b.getAttributeNode && b.getAttributeNode("id");
                    return i && i.value === e
                }
            }, dj.find.ID = function(i, g) {
                if ("undefined" != typeof g.getElementById && c4) {
                    var m, l, k, j = g.getElementById(i);
                    if (j) {
                        if (m = j.getAttributeNode("id"), m && m.value === i) {
                            return [j]
                        }
                        k = g.getElementsByName(i), l = 0;
                        while (j = k[l++]) {
                            if (m = j.getAttributeNode("id"), m && m.value === i) {
                                return [j]
                            }
                        }
                    }
                    return []
                }
            }), dj.find.TAG = dl.getElementsByTagName ? function(g, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(g) : dl.qsa ? e.querySelectorAll(g) : void 0
            } : function(i, g) {
                var m, l = [],
                    k = 0,
                    j = g.getElementsByTagName(i);
                if ("*" === i) {
                    while (m = j[k++]) {
                        1 === m.nodeType && l.push(m)
                    }
                    return l
                }
                return j
            }, dj.find.CLASS = dl.getElementsByClassName && function(g, e) {
                if ("undefined" != typeof e.getElementsByClassName && c4) {
                    return e.getElementsByClassName(g)
                }
            }, c2 = [], c3 = [], (dl.qsa = ds.test(c6.querySelectorAll)) && (cR(function(b) {
                c5.appendChild(b).innerHTML = "<a id='" + cZ + "'></a><select id='" + cZ + "-\r\\' msallowcapture=''><option selected=''></option></select>", b.querySelectorAll("[msallowcapture^='']").length && c3.push("[*^$]=" + dH + "*(?:''|\"\")"), b.querySelectorAll("[selected]").length || c3.push("\\[" + dH + "*(?:value|" + dI + ")"), b.querySelectorAll("[id~=" + cZ + "-]").length || c3.push("~="), b.querySelectorAll(":checked").length || c3.push(":checked"), b.querySelectorAll("a#" + cZ + "+*").length || c3.push(".#.+[+~]")
            }), cR(function(g) {
                g.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = c6.createElement("input");
                e.setAttribute("type", "hidden"), g.appendChild(e).setAttribute("name", "D"), g.querySelectorAll("[name=d]").length && c3.push("name" + dH + "*[*^$|!~]?="), 2 !== g.querySelectorAll(":enabled").length && c3.push(":enabled", ":disabled"), c5.appendChild(g).disabled = !0, 2 !== g.querySelectorAll(":disabled").length && c3.push(":enabled", ":disabled"), g.querySelectorAll("*,:x"), c3.push(",.*:")
            })), (dl.matchesSelector = ds.test(c1 = c5.matches || c5.webkitMatchesSelector || c5.mozMatchesSelector || c5.oMatchesSelector || c5.msMatchesSelector)) && cR(function(b) {
                dl.disconnectedMatch = c1.call(b, "*"), c1.call(b, "[s!='']:x"), c2.push("!=", dE)
            }), c3 = c3.length && new RegExp(c3.join("|")), c2 = c2.length && new RegExp(c2.join("|")), c = ds.test(c5.compareDocumentPosition), c0 = c || ds.test(c5.contains) ? function(g, e) {
                var j = 9 === g.nodeType ? g.documentElement : g,
                    i = e && e.parentNode;
                return g === i || !(!i || 1 !== i.nodeType || !(j.contains ? j.contains(i) : g.compareDocumentPosition && 16 & g.compareDocumentPosition(i)))
            } : function(g, e) {
                if (e) {
                    while (e = e.parentNode) {
                        if (e === g) {
                            return !0
                        }
                    }
                }
                return !1
            }, dS = c ? function(g, e) {
                if (g === e) {
                    return c9 = !0, 0
                }
                var i = !g.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i : (i = (g.ownerDocument || g) === (e.ownerDocument || e) ? g.compareDocumentPosition(e) : 1, 1 & i || !dl.sortDetached && e.compareDocumentPosition(g) === i ? g === c6 || g.ownerDocument === cY && c0(cY, g) ? -1 : e === c6 || e.ownerDocument === cY && c0(cY, e) ? 1 : db ? dK(db, g) - dK(db, e) : 0 : 4 & i ? -1 : 1)
            } : function(j, i) {
                if (j === i) {
                    return c9 = !0, 0
                }
                var p, o = 0,
                    n = j.parentNode,
                    m = i.parentNode,
                    l = [j],
                    k = [i];
                if (!n || !m) {
                    return j === c6 ? -1 : i === c6 ? 1 : n ? -1 : m ? 1 : db ? dK(db, j) - dK(db, i) : 0
                }
                if (n === m) {
                    return d3(j, i)
                }
                p = j;
                while (p = p.parentNode) {
                    l.unshift(p)
                }
                p = i;
                while (p = p.parentNode) {
                    k.unshift(p)
                }
                while (l[o] === k[o]) {
                    o++
                }
                return o ? d3(l[o], k[o]) : l[o] === cY ? -1 : k[o] === cY ? 1 : 0
            }, c6) : c6
        }, dX.matches = function(d, c) {
            return dX(d, null, null, c)
        }, dX.matchesSelector = function(f, c) {
            if ((f.ownerDocument || f) !== c6 && c8(f), c = c.replace(dy, "='$1']"), dl.matchesSelector && c4 && !dT[c + " "] && (!c2 || !c2.test(c)) && (!c3 || !c3.test(c))) {
                try {
                    var h = c1.call(f, c);
                    if (h || dl.disconnectedMatch || f.document && 11 !== f.document.nodeType) {
                        return h
                    }
                } catch (g) {}
            }
            return dX(c, c6, null, [f]).length > 0
        }, dX.contains = function(d, c) {
            return (d.ownerDocument || d) !== c6 && c8(d), c0(d, c)
        }, dX.attr = function(d, c) {
            (d.ownerDocument || d) !== c6 && c8(d);
            var h = dj.attrHandle[c.toLowerCase()],
                g = h && dR.call(dj.attrHandle, c.toLowerCase()) ? h(d, c, !c4) : void 0;
            return void 0 !== g ? g : dl.attributes || !c4 ? d.getAttribute(c) : (g = d.getAttributeNode(c)) && g.specified ? g.value : null
        }, dX.escape = function(b) {
            return (b + "").replace(dC, c7)
        }, dX.error = function(b) {
            throw new Error("Syntax error, unrecognized expression: " + b)
        }, dX.uniqueSort = function(g) {
            var c, j = [],
                i = 0,
                h = 0;
            if (c9 = !dl.detectDuplicates, db = !dl.sortStable && g.slice(0), g.sort(dS), c9) {
                while (c = g[h++]) {
                    c === g[h] && (i = j.push(h))
                }
                while (i--) {
                    g.splice(j[i], 1)
                }
            }
            return db = null, g
        }, di = dX.getText = function(g) {
            var e, j = "",
                i = 0,
                h = g.nodeType;
            if (h) {
                if (1 === h || 9 === h || 11 === h) {
                    if ("string" == typeof g.textContent) {
                        return g.textContent
                    }
                    for (g = g.firstChild; g; g = g.nextSibling) {
                        j += di(g)
                    }
                } else {
                    if (3 === h || 4 === h) {
                        return g.nodeValue
                    }
                }
            } else {
                while (e = g[i++]) {
                    j += di(e)
                }
            }
            return j
        }, dj = dX.selectors = {
            cacheLength: 50,
            createPseudo: de,
            match: dv,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(b) {
                    return b[1] = b[1].replace(dq, dW), b[3] = (b[3] || b[4] || b[5] || "").replace(dq, dW), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4)
                },
                CHILD: function(b) {
                    return b[1] = b[1].toLowerCase(), "nth" === b[1].slice(0, 3) ? (b[3] || dX.error(b[0]), b[4] = +(b[4] ? b[5] + (b[6] || 1) : 2 * ("even" === b[3] || "odd" === b[3])), b[5] = +(b[7] + b[8] || "odd" === b[3])) : b[3] && dX.error(b[0]), b
                },
                PSEUDO: function(e) {
                    var d, f = !e[6] && e[2];
                    return dv.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : f && dx.test(f) && (d = dg(f, !0)) && (d = f.indexOf(")", f.length - d) - f.length) && (e[0] = e[0].slice(0, d), e[2] = f.slice(0, d)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(d) {
                    var c = d.replace(dq, dW).toLowerCase();
                    return "*" === d ? function() {
                        return !0
                    } : function(b) {
                        return b.nodeName && b.nodeName.toLowerCase() === c
                    }
                },
                CLASS: function(d) {
                    var c = cV[d + " "];
                    return c || (c = new RegExp("(^|" + dH + ")" + d + "(" + dH + "|$)")) && cV(d, function(b) {
                        return c.test("string" == typeof b.className && b.className || "undefined" != typeof b.getAttribute && b.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, d, f) {
                    return function(b) {
                        var a = dX.attr(b, e);
                        return null == a ? "!=" === d : !d || (a += "", "=" === d ? a === f : "!=" === d ? a !== f : "^=" === d ? f && 0 === a.indexOf(f) : "*=" === d ? f && a.indexOf(f) > -1 : "$=" === d ? f && a.slice(-f.length) === f : "~=" === d ? (" " + a.replace(dD, " ") + " ").indexOf(f) > -1 : "|=" === d && (a === f || a.slice(0, f.length + 1) === f + "-"))
                    }
                },
                CHILD: function(j, i, p, o, n) {
                    var m = "nth" !== j.slice(0, 3),
                        l = "last" !== j.slice(-4),
                        k = "of-type" === i;
                    return 1 === o && 0 === n ? function(b) {
                        return !!b.parentNode
                    } : function(z, y, x) {
                        var w, v, u, h, g, f, e = m !== l ? "nextSibling" : "previousSibling",
                            d = z.parentNode,
                            a = k && z.nodeName.toLowerCase(),
                            B = !x && !k,
                            A = !1;
                        if (d) {
                            if (m) {
                                while (e) {
                                    h = z;
                                    while (h = h[e]) {
                                        if (k ? h.nodeName.toLowerCase() === a : 1 === h.nodeType) {
                                            return !1
                                        }
                                    }
                                    f = e = "only" === j && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [l ? d.firstChild : d.lastChild], l && B) {
                                h = d, u = h[cZ] || (h[cZ] = {}), v = u[h.uniqueID] || (u[h.uniqueID] = {}), w = v[j] || [], g = w[0] === cX && w[1], A = g && w[2], h = g && d.childNodes[g];
                                while (h = ++g && h && h[e] || (A = g = 0) || f.pop()) {
                                    if (1 === h.nodeType && ++A && h === z) {
                                        v[j] = [cX, g, A];
                                        break
                                    }
                                }
                            } else {
                                if (B && (h = z, u = h[cZ] || (h[cZ] = {}), v = u[h.uniqueID] || (u[h.uniqueID] = {}), w = v[j] || [], g = w[0] === cX && w[1], A = g), A === !1) {
                                    while (h = ++g && h && h[e] || (A = g = 0) || f.pop()) {
                                        if ((k ? h.nodeName.toLowerCase() === a : 1 === h.nodeType) && ++A && (B && (u = h[cZ] || (h[cZ] = {}), v = u[h.uniqueID] || (u[h.uniqueID] = {}), v[j] = [cX, A]), h === z)) {
                                            break
                                        }
                                    }
                                }
                            }
                            return A -= n, A === o || A % o === 0 && A / o >= 0
                        }
                    }
                },
                PSEUDO: function(f, d) {
                    var h, g = dj.pseudos[f] || dj.setFilters[f.toLowerCase()] || dX.error("unsupported pseudo: " + f);
                    return g[cZ] ? g(d) : g.length > 1 ? (h = [f, f, "", d], dj.setFilters.hasOwnProperty(f.toLowerCase()) ? de(function(b, k) {
                        var j, i = g(b, d),
                            e = i.length;
                        while (e--) {
                            j = dK(b, i[e]), b[j] = !(k[j] = i[e])
                        }
                    }) : function(b) {
                        return g(b, 0, h)
                    }) : g
                }
            },
            pseudos: {
                not: de(function(f) {
                    var e = [],
                        h = [],
                        g = df(f.replace(dB, "$1"));
                    return g[cZ] ? de(function(i, d, n, m) {
                        var l, k = g(i, null, m, []),
                            j = i.length;
                        while (j--) {
                            (l = k[j]) && (i[j] = !(d[j] = l))
                        }
                    }) : function(b, d, c) {
                        return e[0] = b, g(e, null, c, h), e[0] = null, !h.pop()
                    }
                }),
                has: de(function(b) {
                    return function(a) {
                        return dX(b, a).length > 0
                    }
                }),
                contains: de(function(b) {
                    return b = b.replace(dq, dW),
                        function(a) {
                            return (a.textContent || a.innerText || di(a)).indexOf(b) > -1
                        }
                }),
                lang: de(function(b) {
                    return dw.test(b || "") || dX.error("unsupported lang: " + b), b = b.replace(dq, dW).toLowerCase(),
                        function(a) {
                            var d;
                            do {
                                if (d = c4 ? a.lang : a.getAttribute("xml:lang") || a.getAttribute("lang")) {
                                    return d = d.toLowerCase(), d === b || 0 === d.indexOf(b + "-")
                                }
                            } while ((a = a.parentNode) && 1 === a.nodeType);
                            return !1
                        }
                }),
                target: function(a) {
                    var d = dn.location && dn.location.hash;
                    return d && d.slice(1) === a.id
                },
                root: function(b) {
                    return b === c5
                },
                focus: function(b) {
                    return b === c6.activeElement && (!c6.hasFocus || c6.hasFocus()) && !!(b.type || b.href || ~b.tabIndex)
                },
                enabled: dk(!1),
                disabled: dk(!0),
                checked: function(d) {
                    var c = d.nodeName.toLowerCase();
                    return "input" === c && !!d.checked || "option" === c && !!d.selected
                },
                selected: function(b) {
                    return b.parentNode && b.parentNode.selectedIndex, b.selected === !0
                },
                empty: function(b) {
                    for (b = b.firstChild; b; b = b.nextSibling) {
                        if (b.nodeType < 6) {
                            return !1
                        }
                    }
                    return !0
                },
                parent: function(b) {
                    return !dj.pseudos.empty(b)
                },
                header: function(b) {
                    return dt.test(b.nodeName)
                },
                input: function(b) {
                    return du.test(b.nodeName)
                },
                button: function(d) {
                    var c = d.nodeName.toLowerCase();
                    return "input" === c && "button" === d.type || "button" === c
                },
                text: function(d) {
                    var c;
                    return "input" === d.nodeName.toLowerCase() && "text" === d.type && (null == (c = d.getAttribute("type")) || "text" === c.toLowerCase())
                },
                first: cS(function() {
                    return [0]
                }),
                last: cS(function(d, c) {
                    return [c - 1]
                }),
                eq: cS(function(e, d, f) {
                    return [f < 0 ? f + d : f]
                }),
                even: cS(function(e, d) {
                    for (var f = 0; f < d; f += 2) {
                        e.push(f)
                    }
                    return e
                }),
                odd: cS(function(e, d) {
                    for (var f = 1; f < d; f += 2) {
                        e.push(f)
                    }
                    return e
                }),
                lt: cS(function(f, e, h) {
                    for (var g = h < 0 ? h + e : h;
                        --g >= 0;
                    ) {
                        f.push(g)
                    }
                    return f
                }),
                gt: cS(function(f, e, h) {
                    for (var g = h < 0 ? h + e : h;
                        ++g < e;
                    ) {
                        f.push(g)
                    }
                    return f
                })
            }
        }, dj.pseudos.nth = dj.pseudos.eq;
        for (dm in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) {
            dj.pseudos[dm] = dY(dm)
        }
        for (dm in {
                submit: !0,
                reset: !0
            }) {
            dj.pseudos[dm] = dP(dm)
        }

        function d4() {}
        d4.prototype = dj.filters = dj.pseudos, dj.setFilters = new d4, dg = dX.tokenize = function(t, s) {
            var r, q, p, o, n, m, l, d = cU[t + " "];
            if (d) {
                return s ? 0 : d.slice(0)
            }
            n = t, m = [], l = dj.preFilter;
            while (n) {
                r && !(q = dA.exec(n)) || (q && (n = n.slice(q[0].length) || n), m.push(p = [])), r = !1, (q = dz.exec(n)) && (r = q.shift(), p.push({
                    value: r,
                    type: q[0].replace(dB, " ")
                }), n = n.slice(r.length));
                for (o in dj.filter) {
                    !(q = dv[o].exec(n)) || l[o] && !(q = l[o](q)) || (r = q.shift(), p.push({
                        value: r,
                        type: o,
                        matches: q
                    }), n = n.slice(r.length))
                }
                if (!r) {
                    break
                }
            }
            return s ? n.length : n ? dX.error(t) : cU(t, m).slice(0)
        };

        function d0(f) {
            for (var e = 0, h = f.length, g = ""; e < h; e++) {
                g += f[e].value
            }
            return g
        }

        function dU(j, i, p) {
            var o = i.dir,
                n = i.next,
                m = n || o,
                l = p && "parentNode" === m,
                k = cW++;
            return i.first ? function(a, f, d) {
                while (a = a[o]) {
                    if (1 === a.nodeType || l) {
                        return j(a, f, d)
                    }
                }
                return !1
            } : function(d, q, h) {
                var g, f, e, a = [cX, k];
                if (h) {
                    while (d = d[o]) {
                        if ((1 === d.nodeType || l) && j(d, q, h)) {
                            return !0
                        }
                    }
                } else {
                    while (d = d[o]) {
                        if (1 === d.nodeType || l) {
                            if (e = d[cZ] || (d[cZ] = {}), f = e[d.uniqueID] || (e[d.uniqueID] = {}), n && n === d.nodeName.toLowerCase()) {
                                d = d[o] || d
                            } else {
                                if ((g = f[m]) && g[0] === cX && g[1] === k) {
                                    return a[2] = g[2]
                                }
                                if (f[m] = a, a[2] = j(d, q, h)) {
                                    return !0
                                }
                            }
                        }
                    }
                }
                return !1
            }
        }

        function dp(b) {
            return b.length > 1 ? function(a, h, g) {
                var f = b.length;
                while (f--) {
                    if (!b[f](a, h, g)) {
                        return !1
                    }
                }
                return !0
            } : b[0]
        }

        function cT(g, f, j) {
            for (var i = 0, h = f.length; i < h; i++) {
                dX(g, f[i], j)
            }
            return j
        }

        function cP(t, s, r, q, p) {
            for (var o, n = [], m = 0, l = t.length, k = null != s; m < l; m++) {
                (o = t[m]) && (r && !r(o, q, p) || (n.push(o), k && s.push(m)))
            }
            return n
        }

        function ab(h, g, l, k, j, i) {
            return k && !k[cZ] && (k = ab(k)), j && !j[cZ] && (j = ab(j, i)), de(function(z, y, x, w) {
                var v, u, t, s = [],
                    e = [],
                    d = y.length,
                    c = z || cT(g || "*", x.nodeType ? [x] : x, []),
                    b = !h || !z && g ? c : cP(c, s, h, x, w),
                    a = l ? j || (z ? h : d || k) ? [] : y : b;
                if (l && l(b, a, x, w), k) {
                    v = cP(a, e), k(v, [], x, w), u = v.length;
                    while (u--) {
                        (t = v[u]) && (a[e[u]] = !(b[e[u]] = t))
                    }
                }
                if (z) {
                    if (j || h) {
                        if (j) {
                            v = [], u = a.length;
                            while (u--) {
                                (t = a[u]) && v.push(b[u] = t)
                            }
                            j(null, a = [], v, w)
                        }
                        u = a.length;
                        while (u--) {
                            (t = a[u]) && (v = j ? dK(z, t) : s[u]) > -1 && (z[v] = !(y[v] = t))
                        }
                    }
                } else {
                    a = cP(a === y ? a.splice(d, a.length) : a), j ? j(null, y, a, w) : dM.apply(y, a)
                }
            })
        }

        function d1(v) {
            for (var u, t, s, r = v.length, q = dj.relative[v[0].type], p = q || dj.relative[" "], o = q ? 1 : 0, n = dU(function(b) {
                    return b === u
                }, p, !0), j = dU(function(b) {
                    return dK(u, b) > -1
                }, p, !0), d = [function(b, h, g) {
                    var f = !q && (g || h !== dc) || ((u = h).nodeType ? n(b, h, g) : j(b, h, g));
                    return u = null, f
                }]; o < r; o++) {
                if (t = dj.relative[v[o].type]) {
                    d = [dU(dp(d), t)]
                } else {
                    if (t = dj.filter[v[o].type].apply(null, v[o].matches), t[cZ]) {
                        for (s = ++o; s < r; s++) {
                            if (dj.relative[v[s].type]) {
                                break
                            }
                        }
                        return ab(o > 1 && dp(d), o > 1 && d0(v.slice(0, o - 1).concat({
                            value: " " === v[o - 2].type ? "*" : ""
                        })).replace(dB, "$1"), t, o < s && d1(v.slice(o, s)), s < r && d1(v = v.slice(s)), s < r && d0(v))
                    }
                    d.push(t)
                }
            }
            return dp(d)
        }

        function dV(g, d) {
            var j = d.length > 0,
                i = g.length > 0,
                h = function(A, w, p, n, m) {
                    var e, c, b, a = 0,
                        H = "0",
                        G = A && [],
                        F = [],
                        E = dc,
                        D = A || i && dj.find.TAG("*", m),
                        C = cX += null == E ? 1 : Math.random() || 0.1,
                        B = D.length;
                    for (m && (dc = w === c6 || w || m); H !== B && null != (e = D[H]); H++) {
                        if (i && e) {
                            c = 0, w || e.ownerDocument === c6 || (c8(e), p = !c4);
                            while (b = g[c++]) {
                                if (b(e, w || c6, p)) {
                                    n.push(e);
                                    break
                                }
                            }
                            m && (cX = C)
                        }
                        j && ((e = !b && e) && a--, A && G.push(e))
                    }
                    if (a += H, j && H !== a) {
                        c = 0;
                        while (b = d[c++]) {
                            b(G, F, w, p)
                        }
                        if (A) {
                            if (a > 0) {
                                while (H--) {
                                    G[H] || F[H] || (F[H] = dO.call(n))
                                }
                            }
                            F = cP(F)
                        }
                        dM.apply(n, F), m && !A && F.length > 0 && a + d.length > 1 && dX.uniqueSort(n)
                    }
                    return m && (cX = C, dc = E), G
                };
            return j ? de(h) : h
        }
        return df = dX.compile = function(h, g) {
            var l, k = [],
                j = [],
                i = dT[h + " "];
            if (!i) {
                g || (g = dg(h)), l = g.length;
                while (l--) {
                    i = d1(g[l]), i[cZ] ? k.push(i) : j.push(i)
                }
                i = dT(h, dV(j, k)), i.selector = h
            }
            return i
        }, dd = dX.select = function(v, u, t, s) {
            var r, q, p, o, h, g = "function" == typeof v && v,
                d = !s && dg(v = g.selector || v);
            if (t = t || [], 1 === d.length) {
                if (q = d[0] = d[0].slice(0), q.length > 2 && "ID" === (p = q[0]).type && 9 === u.nodeType && c4 && dj.relative[q[1].type]) {
                    if (u = (dj.find.ID(p.matches[0].replace(dq, dW), u) || [])[0], !u) {
                        return t
                    }
                    g && (u = u.parentNode), v = v.slice(q.shift().value.length)
                }
                r = dv.needsContext.test(v) ? 0 : q.length;
                while (r--) {
                    if (p = q[r], dj.relative[o = p.type]) {
                        break
                    }
                    if ((h = dj.find[o]) && (s = h(p.matches[0].replace(dq, dW), dZ.test(q[0].type) && cO(u.parentNode) || u))) {
                        if (q.splice(r, 1), v = s.length && d0(q), !v) {
                            return dM.apply(t, s), t
                        }
                        break
                    }
                }
            }
            return (g || df(v, d))(s, u, !c4, t, !u || dZ.test(v) && cO(u.parentNode) || u), t
        }, dl.sortStable = cZ.split("").sort(dS).join("") === cZ, dl.detectDuplicates = !!c9, c8(), dl.sortDetached = cR(function(b) {
            return 1 & b.compareDocumentPosition(c6.createElement("fieldset"))
        }), cR(function(b) {
            return b.innerHTML = "<a href='#'></a>", "#" === b.firstChild.getAttribute("href")
        }) || cb("type|href|height|width", function(e, d, f) {
            if (!f) {
                return e.getAttribute(d, "type" === d.toLowerCase() ? 1 : 2)
            }
        }), dl.attributes && cR(function(b) {
            return b.innerHTML = "<input/>", b.firstChild.setAttribute("value", ""), "" === b.firstChild.getAttribute("value")
        }) || cb("value", function(e, d, f) {
            if (!f && "input" === e.nodeName.toLowerCase()) {
                return e.defaultValue
            }
        }), cR(function(b) {
            return null == b.getAttribute("disabled")
        }) || cb(dI, function(f, e, h) {
            var g;
            if (!h) {
                return f[e] === !0 ? e.toLowerCase() : (g = f.getAttributeNode(e)) && g.specified ? g.value : null
            }
        }), dX
    }(bQ);
    bw.find = bp, bw.expr = bp.selectors, bw.expr[":"] = bw.expr.pseudos, bw.uniqueSort = bw.unique = bp.uniqueSort, bw.text = bp.getText, bw.isXMLDoc = bp.isXML, bw.contains = bp.contains, bw.escapeSelector = bp.escape;
    var bo = function(g, f, j) {
            var i = [],
                h = void 0 !== j;
            while ((g = g[f]) && 9 !== g.nodeType) {
                if (1 === g.nodeType) {
                    if (h && bw(g).is(j)) {
                        break
                    }
                    i.push(g)
                }
            }
            return i
        },
        bm = function(e, d) {
            for (var f = []; e; e = e.nextSibling) {
                1 === e.nodeType && e !== d && f.push(e)
            }
            return f
        },
        cr = bw.expr.match.needsContext;

    function cq(d, c) {
        return d.nodeName && d.nodeName.toLowerCase() === c.toLowerCase()
    }
    var cp = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        co = /^.[^:#\[\.,]*$/;

    function cn(e, d, f) {
        return bw.isFunction(d) ? bw.grep(e, function(b, c) {
            return !!d.call(b, c, b) !== f
        }) : d.nodeType ? bw.grep(e, function(b) {
            return b === d !== f
        }) : "string" != typeof d ? bw.grep(e, function(b) {
            return bG.call(d, b) > -1 !== f
        }) : co.test(d) ? bw.filter(d, e, f) : (d = bw.filter(d, e), bw.grep(e, function(b) {
            return bG.call(d, b) > -1 !== f && 1 === b.nodeType
        }))
    }
    bw.filter = function(f, e, h) {
        var g = e[0];
        return h && (f = ":not(" + f + ")"), 1 === e.length && 1 === g.nodeType ? bw.find.matchesSelector(g, f) ? [g] : [] : bw.find.matches(f, bw.grep(e, function(b) {
            return 1 === b.nodeType
        }))
    }, bw.fn.extend({
        find: function(g) {
            var f, j, i = this.length,
                h = this;
            if ("string" != typeof g) {
                return this.pushStack(bw(g).filter(function() {
                    for (f = 0; f < i; f++) {
                        if (bw.contains(h[f], this)) {
                            return !0
                        }
                    }
                }))
            }
            for (j = this.pushStack([]), f = 0; f < i; f++) {
                bw.find(g, h[f], j)
            }
            return i > 1 ? bw.uniqueSort(j) : j
        },
        filter: function(b) {
            return this.pushStack(cn(this, b || [], !1))
        },
        not: function(b) {
            return this.pushStack(cn(this, b || [], !0))
        },
        is: function(b) {
            return !!cn(this, "string" == typeof b && cr.test(b) ? bw(b) : b || [], !1).length
        }
    });
    var cm, ck = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        ci = bw.fn.init = function(g, d, j) {
            var i, h;
            if (!g) {
                return this
            }
            if (j = j || cm, "string" == typeof g) {
                if (i = "<" === g[0] && ">" === g[g.length - 1] && g.length >= 3 ? [null, g, null] : ck.exec(g), !i || !i[1] && d) {
                    return !d || d.jquery ? (d || j).find(g) : this.constructor(d).find(g)
                }
                if (i[1]) {
                    if (d = d instanceof bw ? d[0] : d, bw.merge(this, bw.parseHTML(i[1], d && d.nodeType ? d.ownerDocument || d : bN, !0)), cp.test(i[1]) && bw.isPlainObject(d)) {
                        for (i in d) {
                            bw.isFunction(this[i]) ? this[i](d[i]) : this.attr(i, d[i])
                        }
                    }
                    return this
                }
                return h = bN.getElementById(i[2]), h && (this[0] = h, this.length = 1), this
            }
            return g.nodeType ? (this[0] = g, this.length = 1, this) : bw.isFunction(g) ? void 0 !== j.ready ? j.ready(g) : g(bw) : bw.makeArray(g, this)
        };
    ci.prototype = bw.fn, cm = bw(bN);
    var ch = /^(?:parents|prev(?:Until|All))/,
        cg = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    bw.fn.extend({
        has: function(e) {
            var d = bw(e, this),
                f = d.length;
            return this.filter(function() {
                for (var b = 0; b < f; b++) {
                    if (bw.contains(this, d[b])) {
                        return !0
                    }
                }
            })
        },
        closest: function(i, h) {
            var n, m = 0,
                l = this.length,
                k = [],
                j = "string" != typeof i && bw(i);
            if (!cr.test(i)) {
                for (; m < l; m++) {
                    for (n = this[m]; n && n !== h; n = n.parentNode) {
                        if (n.nodeType < 11 && (j ? j.index(n) > -1 : 1 === n.nodeType && bw.find.matchesSelector(n, i))) {
                            k.push(n);
                            break
                        }
                    }
                }
            }
            return this.pushStack(k.length > 1 ? bw.uniqueSort(k) : k)
        },
        index: function(b) {
            return b ? "string" == typeof b ? bG.call(bw(b), this[0]) : bG.call(this, b.jquery ? b[0] : b) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(d, c) {
            return this.pushStack(bw.uniqueSort(bw.merge(this.get(), bw(d, c))))
        },
        addBack: function(b) {
            return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
        }
    });

    function cf(d, c) {
        while ((d = d[c]) && 1 !== d.nodeType) {}
        return d
    }
    bw.each({
        parent: function(d) {
            var c = d.parentNode;
            return c && 11 !== c.nodeType ? c : null
        },
        parents: function(b) {
            return bo(b, "parentNode")
        },
        parentsUntil: function(e, d, f) {
            return bo(e, "parentNode", f)
        },
        next: function(b) {
            return cf(b, "nextSibling")
        },
        prev: function(b) {
            return cf(b, "previousSibling")
        },
        nextAll: function(b) {
            return bo(b, "nextSibling")
        },
        prevAll: function(b) {
            return bo(b, "previousSibling")
        },
        nextUntil: function(e, d, f) {
            return bo(e, "nextSibling", f)
        },
        prevUntil: function(e, d, f) {
            return bo(e, "previousSibling", f)
        },
        siblings: function(b) {
            return bm((b.parentNode || {}).firstChild, b)
        },
        children: function(b) {
            return bm(b.firstChild)
        },
        contents: function(b) {
            return cq(b, "iframe") ? b.contentDocument : (cq(b, "template") && (b = b.content || b), bw.merge([], b.childNodes))
        }
    }, function(d, c) {
        bw.fn[d] = function(f, b) {
            var a = bw.map(this, c, f);
            return "Until" !== d.slice(-5) && (b = f), b && "string" == typeof b && (a = bw.filter(b, a)), this.length > 1 && (cg[d] || bw.uniqueSort(a), ch.test(d) && a.reverse()), this.pushStack(a)
        }
    });
    var ce = /[^\x20\t\r\n\f]+/g;

    function cd(d) {
        var c = {};
        return bw.each(d.match(ce) || [], function(b, e) {
            c[e] = !0
        }), c
    }
    bw.Callbacks = function(t) {
        t = "string" == typeof t ? cd(t) : bw.extend({}, t);
        var s, r, q, p, o = [],
            n = [],
            m = -1,
            l = function() {
                for (p = p || t.once, q = s = !0; n.length; m = -1) {
                    r = n.shift();
                    while (++m < o.length) {
                        o[m].apply(r[0], r[1]) === !1 && t.stopOnFalse && (m = o.length, r = !1)
                    }
                }
                t.memory || (r = !1), s = !1, p && (o = r ? [] : "")
            },
            k = {
                add: function() {
                    return o && (r && !s && (m = o.length - 1, n.push(r)), function a(c) {
                        bw.each(c, function(d, e) {
                            bw.isFunction(e) ? t.unique && k.has(e) || o.push(e) : e && e.length && "string" !== bw.type(e) && a(e)
                        })
                    }(arguments), r && !s && l()), this
                },
                remove: function() {
                    return bw.each(arguments, function(e, d) {
                        var f;
                        while ((f = bw.inArray(d, o, f)) > -1) {
                            o.splice(f, 1), f <= m && m--
                        }
                    }), this
                },
                has: function(b) {
                    return b ? bw.inArray(b, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return p = n = [], o = r = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return p = n = [], r || s || (o = r = ""), this
                },
                locked: function() {
                    return !!p
                },
                fireWith: function(b, d) {
                    return p || (d = d || [], d = [b, d.slice ? d.slice() : d], n.push(d), s || l()), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!q
                }
            };
        return k
    };

    function cc(b) {
        return b
    }

    function b9(b) {
        throw b
    }

    function b8(g, f, j, i) {
        var h;
        try {
            g && bw.isFunction(h = g.promise) ? h.call(g).done(f).fail(j) : g && bw.isFunction(h = g.then) ? h.call(g, f, j) : f.apply(void 0, [g].slice(i))
        } catch (g) {
            j.apply(void 0, [g])
        }
    }
    bw.extend({
        Deferred: function(a) {
            var j = [
                    ["notify", "progress", bw.Callbacks("memory"), bw.Callbacks("memory"), 2],
                    ["resolve", "done", bw.Callbacks("once memory"), bw.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", bw.Callbacks("once memory"), bw.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                h = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return g.done(arguments).fail(arguments), this
                    },
                    "catch": function(b) {
                        return h.then(null, b)
                    },
                    pipe: function() {
                        var b = arguments;
                        return bw.Deferred(function(c) {
                            bw.each(j, function(l, k) {
                                var f = bw.isFunction(b[k[4]]) && b[k[4]];
                                g[k[1]](function() {
                                    var d = f && f.apply(this, arguments);
                                    d && bw.isFunction(d.promise) ? d.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[k[0] + "With"](this, f ? [d] : arguments)
                                })
                            }), b = null
                        }).promise()
                    },
                    then: function(c, n, m) {
                        var l = 0;

                        function k(f, q, p, o) {
                            return function() {
                                var r = this,
                                    e = arguments,
                                    d = function() {
                                        var s, t;
                                        if (!(f < l)) {
                                            if (s = p.apply(r, e), s === q.promise()) {
                                                throw new TypeError("Thenable self-resolution")
                                            }
                                            t = s && ("object" == typeof s || "function" == typeof s) && s.then, bw.isFunction(t) ? o ? t.call(s, k(l, q, cc, o), k(l, q, b9, o)) : (l++, t.call(s, k(l, q, cc, o), k(l, q, b9, o), k(l, q, cc, q.notifyWith))) : (p !== cc && (r = void 0, e = [s]), (o || q.resolveWith)(r, e))
                                        }
                                    },
                                    b = o ? d : function() {
                                        try {
                                            d()
                                        } catch (s) {
                                            bw.Deferred.exceptionHook && bw.Deferred.exceptionHook(s, b.stackTrace), f + 1 >= l && (p !== b9 && (r = void 0, e = [s]), q.rejectWith(r, e))
                                        }
                                    };
                                f ? b() : (bw.Deferred.getStackHook && (b.stackTrace = bw.Deferred.getStackHook()), bQ.setTimeout(b))
                            }
                        }
                        return bw.Deferred(function(b) {
                            j[0][3].add(k(0, b, bw.isFunction(m) ? m : cc, b.notifyWith)), j[1][3].add(k(0, b, bw.isFunction(c) ? c : cc)), j[2][3].add(k(0, b, bw.isFunction(n) ? n : b9))
                        }).promise()
                    },
                    promise: function(b) {
                        return null != b ? bw.extend(b, h) : h
                    }
                },
                g = {};
            return bw.each(j, function(d, c) {
                var f = c[2],
                    e = c[5];
                h[c[1]] = f.add, e && f.add(function() {
                    i = e
                }, j[3 - d][2].disable, j[0][2].lock), f.add(c[3].fire), g[c[0]] = function() {
                    return g[c[0] + "With"](this === g ? void 0 : this, arguments), this
                }, g[c[0] + "With"] = f.fireWith
            }), h.promise(g), a && a.call(g, g), g
        },
        when: function(i) {
            var f = arguments.length,
                n = f,
                m = Array(n),
                l = bK.call(arguments),
                k = bw.Deferred(),
                j = function(b) {
                    return function(a) {
                        m[b] = this, l[b] = arguments.length > 1 ? bK.call(arguments) : a, --f || k.resolveWith(m, l)
                    }
                };
            if (f <= 1 && (b8(i, k.done(j(n)).resolve, k.reject, !f), "pending" === k.state() || bw.isFunction(l[n] && l[n].then))) {
                return k.then()
            }
            while (n--) {
                b8(l[n], j(n), k.reject)
            }
            return k.promise()
        }
    });
    var b7 = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    bw.Deferred.exceptionHook = function(a, d) {
        bQ.console && bQ.console.warn && a && b7.test(a.name) && bQ.console.warn("jQuery.Deferred exception: " + a.message, a.stack, d)
    }, bw.readyException = function(a) {
        bQ.setTimeout(function() {
            throw a
        })
    };
    var b5 = bw.Deferred();
    bw.fn.ready = function(b) {
        return b5.then(b)["catch"](function(c) {
            bw.readyException(c)
        }), this
    }, bw.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(b) {
            (b === !0 ? --bw.readyWait : bw.isReady) || (bw.isReady = !0, b !== !0 && --bw.readyWait > 0 || b5.resolveWith(bN, [bw]))
        }
    }), bw.ready.then = b5.then;

    function b4() {
        bN.removeEventListener("DOMContentLoaded", b4), bQ.removeEventListener("load", b4), bw.ready()
    }
    "complete" === bN.readyState || "loading" !== bN.readyState && !bN.documentElement.doScroll ? bQ.setTimeout(bw.ready) : (bN.addEventListener("DOMContentLoaded", b4), bQ.addEventListener("load", b4));
    var b2 = function(t, s, r, q, p, o, n) {
            var m = 0,
                l = t.length,
                k = null == r;
            if ("object" === bw.type(r)) {
                p = !0;
                for (m in r) {
                    b2(t, s, m, r[m], !0, o, n)
                }
            } else {
                if (void 0 !== q && (p = !0, bw.isFunction(q) || (n = !0), k && (n ? (s.call(t, q), s = null) : (k = s, s = function(e, d, f) {
                        return k.call(bw(e), f)
                    })), s)) {
                    for (; m < l; m++) {
                        s(t[m], r, n ? q : q.call(t[m], m, s(t[m], r)))
                    }
                }
            }
            return p ? t : k ? s.call(t) : l ? s(t[0], r) : o
        },
        b1 = function(b) {
            return 1 === b.nodeType || 9 === b.nodeType || !+b.nodeType
        };

    function b0() {
        this.expando = bw.expando + b0.uid++
    }
    b0.uid = 1, b0.prototype = {
        cache: function(d) {
            var c = d[this.expando];
            return c || (c = {}, b1(d) && (d.nodeType ? d[this.expando] = c : Object.defineProperty(d, this.expando, {
                value: c,
                configurable: !0
            }))), c
        },
        set: function(g, f, j) {
            var i, h = this.cache(g);
            if ("string" == typeof f) {
                h[bw.camelCase(f)] = j
            } else {
                for (i in f) {
                    h[bw.camelCase(i)] = f[i]
                }
            }
            return h
        },
        get: function(d, c) {
            return void 0 === c ? this.cache(d) : d[this.expando] && d[this.expando][bw.camelCase(c)]
        },
        access: function(e, d, f) {
            return void 0 === d || d && "string" == typeof d && void 0 === f ? this.get(e, d) : (this.set(e, d, f), void 0 !== f ? f : d)
        },
        remove: function(f, e) {
            var h, g = f[this.expando];
            if (void 0 !== g) {
                if (void 0 !== e) {
                    Array.isArray(e) ? e = e.map(bw.camelCase) : (e = bw.camelCase(e), e = e in g ? [e] : e.match(ce) || []), h = e.length;
                    while (h--) {
                        delete g[e[h]]
                    }
                }(void 0 === e || bw.isEmptyObject(g)) && (f.nodeType ? f[this.expando] = void 0 : delete f[this.expando])
            }
        },
        hasData: function(d) {
            var c = d[this.expando];
            return void 0 !== c && !bw.isEmptyObject(c)
        }
    };
    var bZ = new b0,
        bY = new b0,
        bX = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        bW = /[A-Z]/g;

    function cD(b) {
        return "true" === b || "false" !== b && ("null" === b ? null : b === +b + "" ? +b : bX.test(b) ? JSON.parse(b) : b)
    }

    function bR(g, f, j) {
        var i;
        if (void 0 === j && 1 === g.nodeType) {
            if (i = "data-" + f.replace(bW, "-$&").toLowerCase(), j = g.getAttribute(i), "string" == typeof j) {
                try {
                    j = cD(j)
                } catch (h) {}
                bY.set(g, f, j)
            } else {
                j = void 0
            }
        }
        return j
    }
    bw.extend({
        hasData: function(b) {
            return bY.hasData(b) || bZ.hasData(b)
        },
        data: function(e, d, f) {
            return bY.access(e, d, f)
        },
        removeData: function(d, c) {
            bY.remove(d, c)
        },
        _data: function(e, d, f) {
            return bZ.access(e, d, f)
        },
        _removeData: function(d, c) {
            bZ.remove(d, c)
        }
    }), bw.fn.extend({
        data: function(i, h) {
            var n, m, l, k = this[0],
                j = k && k.attributes;
            if (void 0 === i) {
                if (this.length && (l = bY.get(k), 1 === k.nodeType && !bZ.get(k, "hasDataAttrs"))) {
                    n = j.length;
                    while (n--) {
                        j[n] && (m = j[n].name, 0 === m.indexOf("data-") && (m = bw.camelCase(m.slice(5)), bR(k, m, l[m])))
                    }
                    bZ.set(k, "hasDataAttrs", !0)
                }
                return l
            }
            return "object" == typeof i ? this.each(function() {
                bY.set(this, i)
            }) : b2(this, function(a) {
                var d;
                if (k && void 0 === a) {
                    if (d = bY.get(k, i), void 0 !== d) {
                        return d
                    }
                    if (d = bR(k, i), void 0 !== d) {
                        return d
                    }
                } else {
                    this.each(function() {
                        bY.set(this, i, a)
                    })
                }
            }, null, h, arguments.length > 1, null, !0)
        },
        removeData: function(b) {
            return this.each(function() {
                bY.remove(this, b)
            })
        }
    }), bw.extend({
        queue: function(f, e, h) {
            var g;
            if (f) {
                return e = (e || "fx") + "queue", g = bZ.get(f, e), h && (!g || Array.isArray(h) ? g = bZ.access(f, e, bw.makeArray(h)) : g.push(h)), g || []
            }
        },
        dequeue: function(i, h) {
            h = h || "fx";
            var n = bw.queue(i, h),
                m = n.length,
                l = n.shift(),
                k = bw._queueHooks(i, h),
                j = function() {
                    bw.dequeue(i, h)
                };
            "inprogress" === l && (l = n.shift(), m--), l && ("fx" === h && n.unshift("inprogress"), delete k.stop, l.call(i, j, k)), !m && k && k.empty.fire()
        },
        _queueHooks: function(e, d) {
            var f = d + "queueHooks";
            return bZ.get(e, f) || bZ.access(e, f, {
                empty: bw.Callbacks("once memory").add(function() {
                    bZ.remove(e, [d + "queue", f])
                })
            })
        }
    }), bw.fn.extend({
        queue: function(e, d) {
            var f = 2;
            return "string" != typeof e && (d = e, e = "fx", f--), arguments.length < f ? bw.queue(this[0], e) : void 0 === d ? this : this.each(function() {
                var a = bw.queue(this, e, d);
                bw._queueHooks(this, e), "fx" === e && "inprogress" !== a[0] && bw.dequeue(this, e)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                bw.dequeue(this, b)
            })
        },
        clearQueue: function(b) {
            return this.queue(b || "fx", [])
        },
        promise: function(j, i) {
            var p, o = 1,
                n = bw.Deferred(),
                m = this,
                l = this.length,
                k = function() {
                    --o || n.resolveWith(m, [m])
                };
            "string" != typeof j && (i = j, j = void 0), j = j || "fx";
            while (l--) {
                p = bZ.get(m[l], j + "queueHooks"), p && p.empty && (o++, p.empty.add(k))
            }
            return k(), n.promise(i)
        }
    });
    var cC = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        cl = new RegExp("^(?:([+-])=|)(" + cC + ")([a-z%]*)$", "i"),
        bL = ["Top", "Right", "Bottom", "Left"],
        bi = function(d, c) {
            return d = c || d, "none" === d.style.display || "" === d.style.display && bw.contains(d.ownerDocument, d) && "none" === bw.css(d, "display")
        },
        a9 = function(i, h, n, m) {
            var l, k, j = {};
            for (k in h) {
                j[k] = i.style[k], i.style[k] = h[k]
            }
            l = n.apply(i, m || []);
            for (k in h) {
                i.style[k] = j[k]
            }
            return l
        };

    function a2(v, u, t, s) {
        var r, q = 1,
            p = 20,
            o = s ? function() {
                return s.cur()
            } : function() {
                return bw.css(v, u, "")
            },
            n = o(),
            m = t && t[3] || (bw.cssNumber[u] ? "" : "px"),
            l = (bw.cssNumber[u] || "px" !== m && +n) && cl.exec(bw.css(v, u));
        if (l && l[3] !== m) {
            m = m || l[3], t = t || [], l = +n || 1;
            do {
                q = q || ".5", l /= q, bw.style(v, u, l + m)
            } while (q !== (q = o() / n) && 1 !== q && --p)
        }
        return t && (l = +l || +n || 0, r = t[1] ? l + (t[1] + 1) * t[2] : +t[2], s && (s.unit = m, s.start = l, s.end = r)), r
    }
    var aT = {};

    function aL(g) {
        var f, j = g.ownerDocument,
            i = g.nodeName,
            h = aT[i];
        return h ? h : (f = j.body.appendChild(j.createElement(i)), h = bw.css(f, "display"), f.parentNode.removeChild(f), "none" === h && (h = "block"), aT[i] = h, h)
    }

    function aD(i, h) {
        for (var n, m, l = [], k = 0, j = i.length; k < j; k++) {
            m = i[k], m.style && (n = m.style.display, h ? ("none" === n && (l[k] = bZ.get(m, "display") || null, l[k] || (m.style.display = "")), "" === m.style.display && bi(m) && (l[k] = aL(m))) : "none" !== n && (l[k] = "none", bZ.set(m, "display", n)))
        }
        for (k = 0; k < j; k++) {
            null != l[k] && (i[k].style.display = l[k])
        }
        return i
    }
    bw.fn.extend({
        show: function() {
            return aD(this, !0)
        },
        hide: function() {
            return aD(this)
        },
        toggle: function(b) {
            return "boolean" == typeof b ? b ? this.show() : this.hide() : this.each(function() {
                bi(this) ? bw(this).show() : bw(this).hide()
            })
        }
    });
    var av = /^(?:checkbox|radio)$/i,
        am = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ad = /^$|\/(?:java|ecma)script/i,
        cH = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    cH.optgroup = cH.option, cH.tbody = cH.tfoot = cH.colgroup = cH.caption = cH.thead, cH.th = cH.td;

    function cw(e, d) {
        var f;
        return f = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(d || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(d || "*") : [], void 0 === d || d && cq(e, d) ? bw.merge([e], f) : f
    }

    function bV(f, e) {
        for (var h = 0, g = f.length; h < g; h++) {
            bZ.set(f[h], "globalEval", !e || bZ.get(e[h], "globalEval"))
        }
    }
    var bn = /<|&#?\w+;/;

    function bf(D, C, B, A, z) {
        for (var y, x, w, v, u, t, s = C.createDocumentFragment(), r = [], q = 0, p = D.length; q < p; q++) {
            if (y = D[q], y || 0 === y) {
                if ("object" === bw.type(y)) {
                    bw.merge(r, y.nodeType ? [y] : y)
                } else {
                    if (bn.test(y)) {
                        x = x || s.appendChild(C.createElement("div")), w = (am.exec(y) || ["", ""])[1].toLowerCase(), v = cH[w] || cH._default, x.innerHTML = v[1] + bw.htmlPrefilter(y) + v[2], t = v[0];
                        while (t--) {
                            x = x.lastChild
                        }
                        bw.merge(r, x.childNodes), x = s.firstChild, x.textContent = ""
                    } else {
                        r.push(C.createTextNode(y))
                    }
                }
            }
        }
        s.textContent = "", q = 0;
        while (y = r[q++]) {
            if (A && bw.inArray(y, A) > -1) {
                z && z.push(y)
            } else {
                if (u = bw.contains(y.ownerDocument, y), x = cw(s.appendChild(y), "script"), u && bV(x), B) {
                    t = 0;
                    while (y = x[t++]) {
                        ad.test(y.type || "") && B.push(y)
                    }
                }
            }
        }
        return s
    }! function() {
        var e = bN.createDocumentFragment(),
            d = e.appendChild(bN.createElement("div")),
            f = bN.createElement("input");
        f.setAttribute("type", "radio"), f.setAttribute("checked", "checked"), f.setAttribute("name", "t"), d.appendChild(f), bA.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked, d.innerHTML = "<textarea>x</textarea>", bA.noCloneChecked = !!d.cloneNode(!0).lastChild.defaultValue
    }();
    var a6 = bN.documentElement,
        aX = /^key/,
        aP = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        aH = /^([^.]*)(?:\.(.+)|)/;

    function az() {
        return !0
    }

    function aq() {
        return !1
    }

    function ah() {
        try {
            return bN.activeElement
        } catch (b) {}
    }

    function cL(j, i, p, o, n, m) {
        var l, k;
        if ("object" == typeof i) {
            "string" != typeof p && (o = o || p, p = void 0);
            for (k in i) {
                cL(j, k, p, o, i[k], m)
            }
            return j
        }
        if (null == o && null == n ? (n = p, o = p = void 0) : null == n && ("string" == typeof p ? (n = o, o = void 0) : (n = o, o = p, p = void 0)), n === !1) {
            n = aq
        } else {
            if (!n) {
                return j
            }
        }
        return 1 === m && (l = n, n = function(b) {
            return bw().off(b), l.apply(this, arguments)
        }, n.guid = l.guid || (l.guid = bw.guid++)), j.each(function() {
            bw.event.add(this, i, n, o, p)
        })
    }
    bw.event = {
        global: {},
        add: function(H, G, F, E, D) {
            var C, B, A, z, y, x, w, v, u, t, s, r = bZ.get(H);
            if (r) {
                F.handler && (C = F, F = C.handler, D = C.selector), D && bw.find.matchesSelector(a6, D), F.guid || (F.guid = bw.guid++), (z = r.events) || (z = r.events = {}), (B = r.handle) || (B = r.handle = function(a) {
                    return "undefined" != typeof bw && bw.event.triggered !== a.type ? bw.event.dispatch.apply(H, arguments) : void 0
                }), G = (G || "").match(ce) || [""], y = G.length;
                while (y--) {
                    A = aH.exec(G[y]) || [], u = s = A[1], t = (A[2] || "").split(".").sort(), u && (w = bw.event.special[u] || {}, u = (D ? w.delegateType : w.bindType) || u, w = bw.event.special[u] || {}, x = bw.extend({
                        type: u,
                        origType: s,
                        data: E,
                        handler: F,
                        guid: F.guid,
                        selector: D,
                        needsContext: D && bw.expr.match.needsContext.test(D),
                        namespace: t.join(".")
                    }, C), (v = z[u]) || (v = z[u] = [], v.delegateCount = 0, w.setup && w.setup.call(H, E, t, B) !== !1 || H.addEventListener && H.addEventListener(u, B)), w.add && (w.add.call(H, x), x.handler.guid || (x.handler.guid = F.guid)), D ? v.splice(v.delegateCount++, 0, x) : v.push(x), bw.event.global[u] = !0)
                }
            }
        },
        remove: function(H, G, F, E, D) {
            var C, B, A, z, y, x, w, v, u, t, s, r = bZ.hasData(H) && bZ.get(H);
            if (r && (z = r.events)) {
                G = (G || "").match(ce) || [""], y = G.length;
                while (y--) {
                    if (A = aH.exec(G[y]) || [], u = s = A[1], t = (A[2] || "").split(".").sort(), u) {
                        w = bw.event.special[u] || {}, u = (E ? w.delegateType : w.bindType) || u, v = z[u] || [], A = A[2] && new RegExp("(^|\\.)" + t.join("\\.(?:.*\\.|)") + "(\\.|$)"), B = C = v.length;
                        while (C--) {
                            x = v[C], !D && s !== x.origType || F && F.guid !== x.guid || A && !A.test(x.namespace) || E && E !== x.selector && ("**" !== E || !x.selector) || (v.splice(C, 1), x.selector && v.delegateCount--, w.remove && w.remove.call(H, x))
                        }
                        B && !v.length && (w.teardown && w.teardown.call(H, t, r.handle) !== !1 || bw.removeEvent(H, u, r.handle), delete z[u])
                    } else {
                        for (u in z) {
                            bw.event.remove(H, u + G[y], F, E, !0)
                        }
                    }
                }
                bw.isEmptyObject(z) && bZ.remove(H, "handle events")
            }
        },
        dispatch: function(v) {
            var u = bw.event.fix(v),
                t, s, r, q, p, o, n = new Array(arguments.length),
                m = (bZ.get(this, "events") || {})[u.type] || [],
                l = bw.event.special[u.type] || {};
            for (n[0] = u, t = 1; t < arguments.length; t++) {
                n[t] = arguments[t]
            }
            if (u.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, u) !== !1) {
                o = bw.event.handlers.call(this, u, m), t = 0;
                while ((q = o[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = q.elem, s = 0;
                    while ((p = q.handlers[s++]) && !u.isImmediatePropagationStopped()) {
                        u.rnamespace && !u.rnamespace.test(p.namespace) || (u.handleObj = p, u.data = p.data, r = ((bw.event.special[p.origType] || {}).handle || p.handler).apply(q.elem, n), void 0 !== r && (u.result = r) === !1 && (u.preventDefault(), u.stopPropagation()))
                    }
                }
                return l.postDispatch && l.postDispatch.call(this, u), u.result
            }
        },
        handlers: function(t, s) {
            var r, q, p, o, n, m = [],
                l = s.delegateCount,
                k = t.target;
            if (l && k.nodeType && !("click" === t.type && t.button >= 1)) {
                for (; k !== this; k = k.parentNode || this) {
                    if (1 === k.nodeType && ("click" !== t.type || k.disabled !== !0)) {
                        for (o = [], n = {}, r = 0; r < l; r++) {
                            q = s[r], p = q.selector + " ", void 0 === n[p] && (n[p] = q.needsContext ? bw(p, this).index(k) > -1 : bw.find(p, this, null, [k]).length), n[p] && o.push(q)
                        }
                        o.length && m.push({
                            elem: k,
                            handlers: o
                        })
                    }
                }
            }
            return k = this, l < s.length && m.push({
                elem: k,
                handlers: s.slice(l)
            }), m
        },
        addProp: function(d, c) {
            Object.defineProperty(bw.Event.prototype, d, {
                enumerable: !0,
                configurable: !0,
                get: bw.isFunction(c) ? function() {
                    if (this.originalEvent) {
                        return c(this.originalEvent)
                    }
                } : function() {
                    if (this.originalEvent) {
                        return this.originalEvent[d]
                    }
                },
                set: function(a) {
                    Object.defineProperty(this, d, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: a
                    })
                }
            })
        },
        fix: function(b) {
            return b[bw.expando] ? b : new bw.Event(b)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ah() && this.focus) {
                        return this.focus(), !1
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === ah() && this.blur) {
                        return this.blur(), !1
                    }
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && cq(this, "input")) {
                        return this.click(), !1
                    }
                },
                _default: function(b) {
                    return cq(b.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(b) {
                    void 0 !== b.result && b.originalEvent && (b.originalEvent.returnValue = b.result)
                }
            }
        }
    }, bw.removeEvent = function(e, d, f) {
        e.removeEventListener && e.removeEventListener(d, f)
    }, bw.Event = function(d, c) {
        return this instanceof bw.Event ? (d && d.type ? (this.originalEvent = d, this.type = d.type, this.isDefaultPrevented = d.defaultPrevented || void 0 === d.defaultPrevented && d.returnValue === !1 ? az : aq, this.target = d.target && 3 === d.target.nodeType ? d.target.parentNode : d.target, this.currentTarget = d.currentTarget, this.relatedTarget = d.relatedTarget) : this.type = d, c && bw.extend(this, c), this.timeStamp = d && d.timeStamp || bw.now(), void(this[bw.expando] = !0)) : new bw.Event(d, c)
    }, bw.Event.prototype = {
        constructor: bw.Event,
        isDefaultPrevented: aq,
        isPropagationStopped: aq,
        isImmediatePropagationStopped: aq,
        isSimulated: !1,
        preventDefault: function() {
            var b = this.originalEvent;
            this.isDefaultPrevented = az, b && !this.isSimulated && b.preventDefault()
        },
        stopPropagation: function() {
            var b = this.originalEvent;
            this.isPropagationStopped = az, b && !this.isSimulated && b.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var b = this.originalEvent;
            this.isImmediatePropagationStopped = az, b && !this.isSimulated && b.stopImmediatePropagation(), this.stopPropagation()
        }
    }, bw.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(d) {
            var c = d.button;
            return null == d.which && aX.test(d.type) ? null != d.charCode ? d.charCode : d.keyCode : !d.which && void 0 !== c && aP.test(d.type) ? 1 & c ? 1 : 2 & c ? 3 : 4 & c ? 2 : 0 : d.which
        }
    }, bw.event.addProp), bw.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(d, c) {
        bw.event.special[d] = {
            delegateType: c,
            bindType: c,
            handle: function(b) {
                var j, i = this,
                    h = b.relatedTarget,
                    g = b.handleObj;
                return h && (h === i || bw.contains(i, h)) || (b.type = g.origType, j = g.handler.apply(this, arguments), b.type = c), j
            }
        }
    }), bw.fn.extend({
        on: function(f, e, h, g) {
            return cL(this, f, e, h, g)
        },
        one: function(f, e, h, g) {
            return cL(this, f, e, h, g, 1)
        },
        off: function(g, f, j) {
            var i, h;
            if (g && g.preventDefault && g.handleObj) {
                return i = g.handleObj, bw(g.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this
            }
            if ("object" == typeof g) {
                for (h in g) {
                    this.off(h, f, g[h])
                }
                return this
            }
            return f !== !1 && "function" != typeof f || (j = f, f = void 0), j === !1 && (j = aq), this.each(function() {
                bw.event.remove(this, g, j, f)
            })
        }
    });
    var cA = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        a0 = /<script|<style|<link/i,
        aR = /checked\s*(?:[^=]|=\s*.checked.)/i,
        aJ = /^true\/(.*)/,
        aB = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function at(d, c) {
        return cq(d, "table") && cq(11 !== c.nodeType ? c : c.firstChild, "tr") ? bw(">tbody", d)[0] || d : d
    }

    function ak(b) {
        return b.type = (null !== b.getAttribute("type")) + "/" + b.type, b
    }

    function cN(d) {
        var c = aJ.exec(d.type);
        return c ? d.type = c[1] : d.removeAttribute("type"), d
    }

    function cF(t, s) {
        var r, q, p, o, n, m, l, k;
        if (1 === s.nodeType) {
            if (bZ.hasData(t) && (o = bZ.access(t), n = bZ.set(s, o), k = o.events)) {
                delete n.handle, n.events = {};
                for (p in k) {
                    for (r = 0, q = k[p].length; r < q; r++) {
                        bw.event.add(s, p, k[p][r])
                    }
                }
            }
            bY.hasData(t) && (m = bY.access(t), l = bw.extend({}, m), bY.set(s, l))
        }
    }

    function cu(e, d) {
        var f = d.nodeName.toLowerCase();
        "input" === f && av.test(e.type) ? d.checked = e.checked : "input" !== f && "textarea" !== f || (d.defaultValue = e.defaultValue)
    }

    function bT(C, B, A, z) {
        B = bI.apply([], B);
        var y, x, w, v, u, t, r = 0,
            p = C.length,
            o = p - 1,
            g = B[0],
            D = bw.isFunction(g);
        if (D || p > 1 && "string" == typeof g && !bA.checkClone && aR.test(g)) {
            return C.each(function(b) {
                var a = C.eq(b);
                D && (B[0] = g.call(this, b, a.html())), bT(a, B, A, z)
            })
        }
        if (p && (y = bf(B, C[0].ownerDocument, !1, C, z), x = y.firstChild, 1 === y.childNodes.length && (y = x), x || z)) {
            for (w = bw.map(cw(y, "script"), ak), v = w.length; r < p; r++) {
                u = y, r !== o && (u = bw.clone(u, !0, !0), v && bw.merge(w, cw(u, "script"))), A.call(C[r], u, r)
            }
            if (v) {
                for (t = w[w.length - 1].ownerDocument, bw.map(w, cN), r = 0; r < v; r++) {
                    u = w[r], ad.test(u.type || "") && !bZ.access(u, "globalEval") && bw.contains(t, u) && (u.src ? bw._evalUrl && bw._evalUrl(u.src) : bz(u.textContent.replace(aB, ""), t))
                }
            }
        }
        return C
    }

    function bk(h, g, l) {
        for (var k, j = g ? bw.filter(g, h) : h, i = 0; null != (k = j[i]); i++) {
            l || 1 !== k.nodeType || bw.cleanData(cw(k)), k.parentNode && (l && bw.contains(k.ownerDocument, k) && bV(cw(k, "script")), k.parentNode.removeChild(k))
        }
        return h
    }
    bw.extend({
        htmlPrefilter: function(b) {
            return b.replace(cA, "<$1></$2>")
        },
        clone: function(r, q, p) {
            var o, n, m, l, k = r.cloneNode(!0),
                j = bw.contains(r.ownerDocument, r);
            if (!(bA.noCloneChecked || 1 !== r.nodeType && 11 !== r.nodeType || bw.isXMLDoc(r))) {
                for (l = cw(k), m = cw(r), o = 0, n = m.length; o < n; o++) {
                    cu(m[o], l[o])
                }
            }
            if (q) {
                if (p) {
                    for (m = m || cw(r), l = l || cw(k), o = 0, n = m.length; o < n; o++) {
                        cF(m[o], l[o])
                    }
                } else {
                    cF(r, k)
                }
            }
            return l = cw(k, "script"), l.length > 0 && bV(l, !j && cw(r, "script")), k
        },
        cleanData: function(h) {
            for (var g, l, k, j = bw.event.special, i = 0; void 0 !== (l = h[i]); i++) {
                if (b1(l)) {
                    if (g = l[bZ.expando]) {
                        if (g.events) {
                            for (k in g.events) {
                                j[k] ? bw.event.remove(l, k) : bw.removeEvent(l, k, g.handle)
                            }
                        }
                        l[bZ.expando] = void 0
                    }
                    l[bY.expando] && (l[bY.expando] = void 0)
                }
            }
        }
    }), bw.fn.extend({
        detach: function(b) {
            return bk(this, b, !0)
        },
        remove: function(b) {
            return bk(this, b)
        },
        text: function(b) {
            return b2(this, function(c) {
                return void 0 === c ? bw.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = c)
                })
            }, null, b, arguments.length)
        },
        append: function() {
            return bT(this, arguments, function(d) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var c = at(this, d);
                    c.appendChild(d)
                }
            })
        },
        prepend: function() {
            return bT(this, arguments, function(d) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var c = at(this, d);
                    c.insertBefore(d, c.firstChild)
                }
            })
        },
        before: function() {
            return bT(this, arguments, function(b) {
                this.parentNode && this.parentNode.insertBefore(b, this)
            })
        },
        after: function() {
            return bT(this, arguments, function(b) {
                this.parentNode && this.parentNode.insertBefore(b, this.nextSibling)
            })
        },
        empty: function() {
            for (var d, c = 0; null != (d = this[c]); c++) {
                1 === d.nodeType && (bw.cleanData(cw(d, !1)), d.textContent = "")
            }
            return this
        },
        clone: function(d, c) {
            return d = null != d && d, c = null == c ? d : c, this.map(function() {
                return bw.clone(this, d, c)
            })
        },
        html: function(b) {
            return b2(this, function(g) {
                var f = this[0] || {},
                    j = 0,
                    i = this.length;
                if (void 0 === g && 1 === f.nodeType) {
                    return f.innerHTML
                }
                if ("string" == typeof g && !a0.test(g) && !cH[(am.exec(g) || ["", ""])[1].toLowerCase()]) {
                    g = bw.htmlPrefilter(g);
                    try {
                        for (; j < i; j++) {
                            f = this[j] || {}, 1 === f.nodeType && (bw.cleanData(cw(f, !1)), f.innerHTML = g)
                        }
                        f = 0
                    } catch (h) {}
                }
                f && this.empty().append(g)
            }, null, b, arguments.length)
        },
        replaceWith: function() {
            var b = [];
            return bT(this, arguments, function(a) {
                var d = this.parentNode;
                bw.inArray(this, b) < 0 && (bw.cleanData(cw(this)), d && d.replaceChild(a, this))
            }, b)
        }
    }), bw.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(d, c) {
        bw.fn[d] = function(b) {
            for (var l, k = [], j = bw(b), i = j.length - 1, h = 0; h <= i; h++) {
                l = h === i ? this : this.clone(!0), bw(j[h])[c](l), bH.apply(k, l.get())
            }
            return this.pushStack(k)
        }
    });
    var bd = /^margin/,
        a4 = new RegExp("^(" + cC + ")(?!px)[a-z%]+$", "i"),
        aV = function(a) {
            var d = a.ownerDocument.defaultView;
            return d && d.opener || (d = bQ), d.getComputedStyle(a)
        };
    ! function() {
        function a() {
            if (d) {
                d.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", d.innerHTML = "", a6.appendChild(j);
                var c = bQ.getComputedStyle(d);
                n = "1%" !== c.top, k = "2px" === c.marginLeft, m = "4px" === c.width, d.style.marginRight = "50%", l = "4px" === c.marginRight, a6.removeChild(j), d = null
            }
        }
        var n, m, l, k, j = bN.createElement("div"),
            d = bN.createElement("div");
        d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", bA.clearCloneStyle = "content-box" === d.style.backgroundClip, j.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.appendChild(d), bw.extend(bA, {
            pixelPosition: function() {
                return a(), n
            },
            boxSizingReliable: function() {
                return a(), m
            },
            pixelMarginRight: function() {
                return a(), l
            },
            reliableMarginLeft: function() {
                return a(), k
            }
        }))
    }();

    function aN(j, i, p) {
        var o, n, m, l, k = j.style;
        return p = p || aV(j), p && (l = p.getPropertyValue(i) || p[i], "" !== l || bw.contains(j.ownerDocument, j) || (l = bw.style(j, i)), !bA.pixelMarginRight() && a4.test(l) && bd.test(i) && (o = k.width, n = k.minWidth, m = k.maxWidth, k.minWidth = k.maxWidth = k.width = l, l = p.width, k.width = o, k.minWidth = n, k.maxWidth = m)), void 0 !== l ? l + "" : l
    }

    function aF(d, c) {
        return {
            get: function() {
                return d() ? void delete this.get : (this.get = c).apply(this, arguments)
            }
        }
    }
    var ax = /^(none|table(?!-c[ea]).+)/,
        ao = /^--/,
        af = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        cJ = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        cy = ["Webkit", "Moz", "ms"],
        b6 = bN.createElement("div").style;

    function by(e) {
        if (e in b6) {
            return e
        }
        var d = e[0].toUpperCase() + e.slice(1),
            f = cy.length;
        while (f--) {
            if (e = cy[f] + d, e in b6) {
                return e
            }
        }
    }

    function bg(d) {
        var c = bw.cssProps[d];
        return c || (c = bw.cssProps[d] = by(d) || d), c
    }

    function a7(f, e, h) {
        var g = cl.exec(e);
        return g ? Math.max(0, g[2] - (h || 0)) + (g[3] || "px") : e
    }

    function aY(i, h, n, m, l) {
        var k, j = 0;
        for (k = n === (m ? "border" : "content") ? 4 : "width" === h ? 1 : 0; k < 4; k += 2) {
            "margin" === n && (j += bw.css(i, n + bL[k], !0, l)), m ? ("content" === n && (j -= bw.css(i, "padding" + bL[k], !0, l)), "margin" !== n && (j -= bw.css(i, "border" + bL[k] + "Width", !0, l))) : (j += bw.css(i, "padding" + bL[k], !0, l), "padding" !== n && (j += bw.css(i, "border" + bL[k] + "Width", !0, l)))
        }
        return j
    }

    function cs(i, h, n) {
        var m, l = aV(i),
            k = aN(i, h, l),
            j = "border-box" === bw.css(i, "boxSizing", !1, l);
        return a4.test(k) ? k : (m = j && (bA.boxSizingReliable() || k === i.style[h]), "auto" === k && (k = i["offset" + h[0].toUpperCase() + h.slice(1)]), k = parseFloat(k) || 0, k + aY(i, h, n || (j ? "border" : "content"), m, l) + "px")
    }
    bw.extend({
        cssHooks: {
            opacity: {
                get: function(e, d) {
                    if (d) {
                        var f = aN(e, "opacity");
                        return "" === f ? "1" : f
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(t, s, r, q) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var p, o, n, m = bw.camelCase(s),
                    l = ao.test(s),
                    k = t.style;
                return l || (s = bg(m)), n = bw.cssHooks[s] || bw.cssHooks[m], void 0 === r ? n && "get" in n && void 0 !== (p = n.get(t, !1, q)) ? p : k[s] : (o = typeof r, "string" === o && (p = cl.exec(r)) && p[1] && (r = a2(t, s, p), o = "number"), null != r && r === r && ("number" === o && (r += p && p[3] || (bw.cssNumber[m] ? "" : "px")), bA.clearCloneStyle || "" !== r || 0 !== s.indexOf("background") || (k[s] = "inherit"), n && "set" in n && void 0 === (r = n.set(t, r, q)) || (l ? k.setProperty(s, r) : k[s] = r)), void 0)
            }
        },
        css: function(r, q, p, o) {
            var n, m, l, k = bw.camelCase(q),
                j = ao.test(q);
            return j || (q = bg(k)), l = bw.cssHooks[q] || bw.cssHooks[k], l && "get" in l && (n = l.get(r, !0, p)), void 0 === n && (n = aN(r, q, o)), "normal" === n && q in cJ && (n = cJ[q]), "" === p || p ? (m = parseFloat(n), p === !0 || isFinite(m) ? m || 0 : n) : n
        }
    }), bw.each(["height", "width"], function(d, c) {
        bw.cssHooks[c] = {
            get: function(b, f, e) {
                if (f) {
                    return !ax.test(bw.css(b, "display")) || b.getClientRects().length && b.getBoundingClientRect().width ? cs(b, c, e) : a9(b, af, function() {
                        return cs(b, c, e)
                    })
                }
            },
            set: function(b, l, k) {
                var j, i = k && aV(b),
                    h = k && aY(b, c, k, "border-box" === bw.css(b, "boxSizing", !1, i), i);
                return h && (j = cl.exec(l)) && "px" !== (j[3] || "px") && (b.style[c] = l, l = bw.css(b, c)), a7(b, l, h)
            }
        }
    }), bw.cssHooks.marginLeft = aF(bA.reliableMarginLeft, function(d, c) {
        if (c) {
            return (parseFloat(aN(d, "marginLeft")) || d.getBoundingClientRect().left - a9(d, {
                marginLeft: 0
            }, function() {
                return d.getBoundingClientRect().left
            })) + "px"
        }
    }), bw.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(d, c) {
        bw.cssHooks[d + c] = {
            expand: function(h) {
                for (var g = 0, b = {}, a = "string" == typeof h ? h.split(" ") : [h]; g < 4; g++) {
                    b[d + bL[g] + c] = a[g] || a[g - 2] || a[0]
                }
                return b
            }
        }, bd.test(d) || (bw.cssHooks[d + c].set = a7)
    }), bw.fn.extend({
        css: function(d, c) {
            return b2(this, function(i, h, n) {
                var m, l, k = {},
                    j = 0;
                if (Array.isArray(h)) {
                    for (m = aV(i), l = h.length; j < l; j++) {
                        k[h[j]] = bw.css(i, h[j], !1, m)
                    }
                    return k
                }
                return void 0 !== n ? bw.style(i, h, n) : bw.css(i, h)
            }, d, c, arguments.length > 1)
        }
    });

    function ai(g, f, j, i, h) {
        return new ai.prototype.init(g, f, j, i, h)
    }
    bw.Tween = ai, ai.prototype = {
        constructor: ai,
        init: function(h, g, l, k, j, i) {
            this.elem = h, this.prop = l, this.easing = j || bw.easing._default, this.options = g, this.start = this.now = this.cur(), this.end = k, this.unit = i || (bw.cssNumber[l] ? "" : "px")
        },
        cur: function() {
            var b = ai.propHooks[this.prop];
            return b && b.get ? b.get(this) : ai.propHooks._default.get(this)
        },
        run: function(e) {
            var d, f = ai.propHooks[this.prop];
            return this.options.duration ? this.pos = d = bw.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = d = e, this.now = (this.end - this.start) * d + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), f && f.set ? f.set(this) : ai.propHooks._default.set(this), this
        }
    }, ai.prototype.init.prototype = ai.prototype, ai.propHooks = {
        _default: {
            get: function(d) {
                var c;
                return 1 !== d.elem.nodeType || null != d.elem[d.prop] && null == d.elem.style[d.prop] ? d.elem[d.prop] : (c = bw.css(d.elem, d.prop, ""), c && "auto" !== c ? c : 0)
            },
            set: function(b) {
                bw.fx.step[b.prop] ? bw.fx.step[b.prop](b) : 1 !== b.elem.nodeType || null == b.elem.style[bw.cssProps[b.prop]] && !bw.cssHooks[b.prop] ? b.elem[b.prop] = b.now : bw.style(b.elem, b.prop, b.now + b.unit)
            }
        }
    }, ai.propHooks.scrollTop = ai.propHooks.scrollLeft = {
        set: function(b) {
            b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
        }
    }, bw.easing = {
        linear: function(b) {
            return b
        },
        swing: function(b) {
            return 0.5 - Math.cos(b * Math.PI) / 2
        },
        _default: "swing"
    }, bw.fx = ai.prototype.init, bw.fx.step = {};
    var cB, cj, bJ = /^(?:toggle|show|hide)$/,
        bh = /queueHooks$/;

    function a8() {
        cj && (bN.hidden === !1 && bQ.requestAnimationFrame ? bQ.requestAnimationFrame(a8) : bQ.setTimeout(a8, bw.fx.interval), bw.fx.tick())
    }

    function a1() {
        return bQ.setTimeout(function() {
            cB = void 0
        }), cB = bw.now()
    }

    function aS(g, f) {
        var j, i = 0,
            h = {
                height: g
            };
        for (f = f ? 1 : 0; i < 4; i += 2 - f) {
            j = bL[i], h["margin" + j] = h["padding" + j] = g
        }
        return f && (h.opacity = h.width = g), h
    }

    function aK(i, h, n) {
        for (var m, l = (al.tweeners[h] || []).concat(al.tweeners["*"]), k = 0, j = l.length; k < j; k++) {
            if (m = l[k].call(n, h, i)) {
                return m
            }
        }
    }

    function aC(H, G, F) {
        var E, D, C, B, A, z, y, x, w = "width" in G || "height" in G,
            v = this,
            u = {},
            t = H.style,
            s = H.nodeType && bi(H),
            r = bZ.get(H, "fxshow");
        F.queue || (B = bw._queueHooks(H, "fx"), null == B.unqueued && (B.unqueued = 0, A = B.empty.fire, B.empty.fire = function() {
            B.unqueued || A()
        }), B.unqueued++, v.always(function() {
            v.always(function() {
                B.unqueued--, bw.queue(H, "fx").length || B.empty.fire()
            })
        }));
        for (E in G) {
            if (D = G[E], bJ.test(D)) {
                if (delete G[E], C = C || "toggle" === D, D === (s ? "hide" : "show")) {
                    if ("show" !== D || !r || void 0 === r[E]) {
                        continue
                    }
                    s = !0
                }
                u[E] = r && r[E] || bw.style(H, E)
            }
        }
        if (z = !bw.isEmptyObject(G), z || !bw.isEmptyObject(u)) {
            w && 1 === H.nodeType && (F.overflow = [t.overflow, t.overflowX, t.overflowY], y = r && r.display, null == y && (y = bZ.get(H, "display")), x = bw.css(H, "display"), "none" === x && (y ? x = y : (aD([H], !0), y = H.style.display || y, x = bw.css(H, "display"), aD([H]))), ("inline" === x || "inline-block" === x && null != y) && "none" === bw.css(H, "float") && (z || (v.done(function() {
                t.display = y
            }), null == y && (x = t.display, y = "none" === x ? "" : x)), t.display = "inline-block")), F.overflow && (t.overflow = "hidden", v.always(function() {
                t.overflow = F.overflow[0], t.overflowX = F.overflow[1], t.overflowY = F.overflow[2]
            })), z = !1;
            for (E in u) {
                z || (r ? "hidden" in r && (s = r.hidden) : r = bZ.access(H, "fxshow", {
                    display: y
                }), C && (r.hidden = !s), s && aD([H], !0), v.done(function() {
                    s || aD([H]), bZ.remove(H, "fxshow");
                    for (E in u) {
                        bw.style(H, E, u[E])
                    }
                })), z = aK(s ? r[E] : 0, E, v), E in r || (r[E] = z.start, s && (z.end = z.start, z.start = 0))
            }
        }
    }

    function au(i, h) {
        var n, m, l, k, j;
        for (n in i) {
            if (m = bw.camelCase(n), l = h[m], k = i[n], Array.isArray(k) && (l = k[1], k = i[n] = k[0]), n !== m && (i[m] = k, delete i[n]), j = bw.cssHooks[m], j && "expand" in j) {
                k = j.expand(k), delete i[m];
                for (n in k) {
                    n in i || (i[n] = k[n], h[n] = l)
                }
            } else {
                h[m] = l
            }
        }
    }

    function al(v, u, t) {
        var s, r, q = 0,
            p = al.prefilters.length,
            o = bw.Deferred().always(function() {
                delete n.elem
            }),
            n = function() {
                if (r) {
                    return !1
                }
                for (var a = cB || a1(), w = Math.max(0, m.startTime + m.duration - a), k = w / m.duration || 0, j = 1 - k, h = 0, e = m.tweens.length; h < e; h++) {
                    m.tweens[h].run(j)
                }
                return o.notifyWith(v, [m, j, w]), j < 1 && e ? w : (e || o.notifyWith(v, [m, 1, 0]), o.resolveWith(v, [m]), !1)
            },
            m = o.promise({
                elem: v,
                props: bw.extend({}, u),
                opts: bw.extend(!0, {
                    specialEasing: {},
                    easing: bw.easing._default
                }, t),
                originalProperties: u,
                originalOptions: t,
                startTime: cB || a1(),
                duration: t.duration,
                tweens: [],
                createTween: function(a, f) {
                    var e = bw.Tween(v, m.opts, a, f, m.opts.specialEasing[a] || m.opts.easing);
                    return m.tweens.push(e), e
                },
                stop: function(a) {
                    var f = 0,
                        e = a ? m.tweens.length : 0;
                    if (r) {
                        return this
                    }
                    for (r = !0; f < e; f++) {
                        m.tweens[f].run(1)
                    }
                    return a ? (o.notifyWith(v, [m, 1, 0]), o.resolveWith(v, [m, a])) : o.rejectWith(v, [m, a]), this
                }
            }),
            l = m.props;
        for (au(l, m.opts.specialEasing); q < p; q++) {
            if (s = al.prefilters[q].call(m, v, l, m.opts)) {
                return bw.isFunction(s.stop) && (bw._queueHooks(m.elem, m.opts.queue).stop = bw.proxy(s.stop, s)), s
            }
        }
        return bw.map(l, aK, m), bw.isFunction(m.opts.start) && m.opts.start.call(v, m), m.progress(m.opts.progress).done(m.opts.done, m.opts.complete).fail(m.opts.fail).always(m.opts.always), bw.fx.timer(bw.extend(n, {
            elem: v,
            anim: m,
            queue: m.opts.queue
        })), m
    }
    bw.Animation = bw.extend(al, {
            tweeners: {
                "*": [function(e, d) {
                    var f = this.createTween(e, d);
                    return a2(f.elem, e, cl.exec(d), f), f
                }]
            },
            tweener: function(g, f) {
                bw.isFunction(g) ? (f = g, g = ["*"]) : g = g.match(ce);
                for (var j, i = 0, h = g.length; i < h; i++) {
                    j = g[i], al.tweeners[j] = al.tweeners[j] || [], al.tweeners[j].unshift(f)
                }
            },
            prefilters: [aC],
            prefilter: function(d, c) {
                c ? al.prefilters.unshift(d) : al.prefilters.push(d)
            }
        }), bw.speed = function(f, e, h) {
            var g = f && "object" == typeof f ? bw.extend({}, f) : {
                complete: h || !h && e || bw.isFunction(f) && f,
                duration: f,
                easing: h && e || e && !bw.isFunction(e) && e
            };
            return bw.fx.off ? g.duration = 0 : "number" != typeof g.duration && (g.duration in bw.fx.speeds ? g.duration = bw.fx.speeds[g.duration] : g.duration = bw.fx.speeds._default), null != g.queue && g.queue !== !0 || (g.queue = "fx"), g.old = g.complete, g.complete = function() {
                bw.isFunction(g.old) && g.old.call(this), g.queue && bw.dequeue(this, g.queue)
            }, g
        }, bw.fn.extend({
            fadeTo: function(f, e, h, g) {
                return this.filter(bi).css("opacity", 0).show().end().animate({
                    opacity: e
                }, f, h, g)
            },
            animate: function(i, h, n, m) {
                var l = bw.isEmptyObject(i),
                    k = bw.speed(h, n, m),
                    j = function() {
                        var a = al(this, bw.extend({}, i), k);
                        (l || bZ.get(this, "finish")) && a.stop(!0)
                    };
                return j.finish = j, l || k.queue === !1 ? this.each(j) : this.queue(k.queue, j)
            },
            stop: function(f, e, h) {
                var g = function(d) {
                    var c = d.stop;
                    delete d.stop, c(h)
                };
                return "string" != typeof f && (h = e, e = f, f = void 0), e && f !== !1 && this.queue(f || "fx", []), this.each(function() {
                    var a = !0,
                        i = null != f && f + "queueHooks",
                        d = bw.timers,
                        c = bZ.get(this);
                    if (i) {
                        c[i] && c[i].stop && g(c[i])
                    } else {
                        for (i in c) {
                            c[i] && c[i].stop && bh.test(i) && g(c[i])
                        }
                    }
                    for (i = d.length; i--;) {
                        d[i].elem !== this || null != f && d[i].queue !== f || (d[i].anim.stop(h), a = !1, d.splice(i, 1))
                    }!a && h || bw.dequeue(this, f)
                })
            },
            finish: function(b) {
                return b !== !1 && (b = b || "fx"), this.each(function() {
                    var a, l = bZ.get(this),
                        k = l[b + "queue"],
                        j = l[b + "queueHooks"],
                        i = bw.timers,
                        h = k ? k.length : 0;
                    for (l.finish = !0, bw.queue(this, b, []), j && j.stop && j.stop.call(this, !0), a = i.length; a--;) {
                        i[a].elem === this && i[a].queue === b && (i[a].anim.stop(!0), i.splice(a, 1))
                    }
                    for (a = 0; a < h; a++) {
                        k[a] && k[a].finish && k[a].finish.call(this)
                    }
                    delete l.finish
                })
            }
        }), bw.each(["toggle", "show", "hide"], function(e, d) {
            var f = bw.fn[d];
            bw.fn[d] = function(b, g, c) {
                return null == b || "boolean" == typeof b ? f.apply(this, arguments) : this.animate(aS(d, !0), b, g, c)
            }
        }), bw.each({
            slideDown: aS("show"),
            slideUp: aS("hide"),
            slideToggle: aS("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(d, c) {
            bw.fn[d] = function(b, f, e) {
                return this.animate(c, b, f, e)
            }
        }), bw.timers = [], bw.fx.tick = function() {
            var e, d = 0,
                f = bw.timers;
            for (cB = bw.now(); d < f.length; d++) {
                e = f[d], e() || f[d] !== e || f.splice(d--, 1)
            }
            f.length || bw.fx.stop(), cB = void 0
        }, bw.fx.timer = function(b) {
            bw.timers.push(b), bw.fx.start()
        }, bw.fx.interval = 13, bw.fx.start = function() {
            cj || (cj = !0, a8())
        }, bw.fx.stop = function() {
            cj = null
        }, bw.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, bw.fn.delay = function(a, d) {
            return a = bw.fx ? bw.fx.speeds[a] || a : a, d = d || "fx", this.queue(d, function(g, f) {
                var b = bQ.setTimeout(g, a);
                f.stop = function() {
                    bQ.clearTimeout(b)
                }
            })
        },
        function() {
            var e = bN.createElement("input"),
                d = bN.createElement("select"),
                f = d.appendChild(bN.createElement("option"));
            e.type = "checkbox", bA.checkOn = "" !== e.value, bA.optSelected = f.selected, e = bN.createElement("input"), e.value = "t", e.type = "radio", bA.radioValue = "t" === e.value
        }();
    var ac, cG = bw.expr.attrHandle;
    bw.fn.extend({
        attr: function(d, c) {
            return b2(this, bw.attr, d, c, arguments.length > 1)
        },
        removeAttr: function(b) {
            return this.each(function() {
                bw.removeAttr(this, b)
            })
        }
    }), bw.extend({
        attr: function(h, g, l) {
            var k, j, i = h.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) {
                return "undefined" == typeof h.getAttribute ? bw.prop(h, g, l) : (1 === i && bw.isXMLDoc(h) || (j = bw.attrHooks[g.toLowerCase()] || (bw.expr.match.bool.test(g) ? ac : void 0)), void 0 !== l ? null === l ? void bw.removeAttr(h, g) : j && "set" in j && void 0 !== (k = j.set(h, l, g)) ? k : (h.setAttribute(g, l + ""), l) : j && "get" in j && null !== (k = j.get(h, g)) ? k : (k = bw.find.attr(h, g), null == k ? void 0 : k))
            }
        },
        attrHooks: {
            type: {
                set: function(e, d) {
                    if (!bA.radioValue && "radio" === d && cq(e, "input")) {
                        var f = e.value;
                        return e.setAttribute("type", d), f && (e.value = f), d
                    }
                }
            }
        },
        removeAttr: function(g, f) {
            var j, i = 0,
                h = f && f.match(ce);
            if (h && 1 === g.nodeType) {
                while (j = h[i++]) {
                    g.removeAttribute(j)
                }
            }
        }
    }), ac = {
        set: function(e, d, f) {
            return d === !1 ? bw.removeAttr(e, f) : e.setAttribute(f, f), f
        }
    }, bw.each(bw.expr.match.bool.source.match(/\w+/g), function(e, d) {
        var f = cG[d] || bw.find.attr;
        cG[d] = function(h, c, l) {
            var k, j, i = c.toLowerCase();
            return l || (j = cG[i], cG[i] = k, k = null != f(h, c, l) ? i : null, cG[i] = j), k
        }
    });
    var cv = /^(?:input|select|textarea|button)$/i,
        bU = /^(?:a|area)$/i;
    bw.fn.extend({
        prop: function(d, c) {
            return b2(this, bw.prop, d, c, arguments.length > 1)
        },
        removeProp: function(b) {
            return this.each(function() {
                delete this[bw.propFix[b] || b]
            })
        }
    }), bw.extend({
        prop: function(h, g, l) {
            var k, j, i = h.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) {
                return 1 === i && bw.isXMLDoc(h) || (g = bw.propFix[g] || g, j = bw.propHooks[g]), void 0 !== l ? j && "set" in j && void 0 !== (k = j.set(h, l, g)) ? k : h[g] = l : j && "get" in j && null !== (k = j.get(h, g)) ? k : h[g]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(d) {
                    var c = bw.find.attr(d, "tabindex");
                    return c ? parseInt(c, 10) : cv.test(d.nodeName) || bU.test(d.nodeName) && d.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), bA.optSelected || (bw.propHooks.selected = {
        get: function(d) {
            var c = d.parentNode;
            return c && c.parentNode && c.parentNode.selectedIndex, null
        },
        set: function(d) {
            var c = d.parentNode;
            c && (c.selectedIndex, c.parentNode && c.parentNode.selectedIndex)
        }
    }), bw.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        bw.propFix[this.toLowerCase()] = this
    });

    function bl(d) {
        var c = d.match(ce) || [];
        return c.join(" ")
    }

    function be(b) {
        return b.getAttribute && b.getAttribute("class") || ""
    }
    bw.fn.extend({
        addClass: function(r) {
            var q, p, o, n, m, l, k, j = 0;
            if (bw.isFunction(r)) {
                return this.each(function(a) {
                    bw(this).addClass(r.call(this, a, be(this)))
                })
            }
            if ("string" == typeof r && r) {
                q = r.match(ce) || [];
                while (p = this[j++]) {
                    if (n = be(p), o = 1 === p.nodeType && " " + bl(n) + " ") {
                        l = 0;
                        while (m = q[l++]) {
                            o.indexOf(" " + m + " ") < 0 && (o += m + " ")
                        }
                        k = bl(o), n !== k && p.setAttribute("class", k)
                    }
                }
            }
            return this
        },
        removeClass: function(r) {
            var q, p, o, n, m, l, k, j = 0;
            if (bw.isFunction(r)) {
                return this.each(function(a) {
                    bw(this).removeClass(r.call(this, a, be(this)))
                })
            }
            if (!arguments.length) {
                return this.attr("class", "")
            }
            if ("string" == typeof r && r) {
                q = r.match(ce) || [];
                while (p = this[j++]) {
                    if (n = be(p), o = 1 === p.nodeType && " " + bl(n) + " ") {
                        l = 0;
                        while (m = q[l++]) {
                            while (o.indexOf(" " + m + " ") > -1) {
                                o = o.replace(" " + m + " ", " ")
                            }
                        }
                        k = bl(o), n !== k && p.setAttribute("class", k)
                    }
                }
            }
            return this
        },
        toggleClass: function(e, d) {
            var f = typeof e;
            return "boolean" == typeof d && "string" === f ? d ? this.addClass(e) : this.removeClass(e) : bw.isFunction(e) ? this.each(function(a) {
                bw(this).toggleClass(e.call(this, a, be(this), d), d)
            }) : this.each(function() {
                var a, h, g, c;
                if ("string" === f) {
                    h = 0, g = bw(this), c = e.match(ce) || [];
                    while (a = c[h++]) {
                        g.hasClass(a) ? g.removeClass(a) : g.addClass(a)
                    }
                } else {
                    void 0 !== e && "boolean" !== f || (a = be(this), a && bZ.set(this, "__className__", a), this.setAttribute && this.setAttribute("class", a || e === !1 ? "" : bZ.get(this, "__className__") || ""))
                }
            })
        },
        hasClass: function(f) {
            var e, h, g = 0;
            e = " " + f + " ";
            while (h = this[g++]) {
                if (1 === h.nodeType && (" " + bl(be(h)) + " ").indexOf(e) > -1) {
                    return !0
                }
            }
            return !1
        }
    });
    var a5 = /\r/g;
    bw.fn.extend({
        val: function(g) {
            var f, j, i, h = this[0];
            if (arguments.length) {
                return i = bw.isFunction(g), this.each(function(b) {
                    var a;
                    1 === this.nodeType && (a = i ? g.call(this, b, bw(this).val()) : g, null == a ? a = "" : "number" == typeof a ? a += "" : Array.isArray(a) && (a = bw.map(a, function(c) {
                        return null == c ? "" : c + ""
                    })), f = bw.valHooks[this.type] || bw.valHooks[this.nodeName.toLowerCase()], f && "set" in f && void 0 !== f.set(this, a, "value") || (this.value = a))
                })
            }
            if (h) {
                return f = bw.valHooks[h.type] || bw.valHooks[h.nodeName.toLowerCase()], f && "get" in f && void 0 !== (j = f.get(h, "value")) ? j : (j = h.value, "string" == typeof j ? j.replace(a5, "") : null == j ? "" : j)
            }
        }
    }), bw.extend({
        valHooks: {
            option: {
                get: function(d) {
                    var c = bw.find.attr(d, "value");
                    return null != c ? c : bl(bw.text(d))
                }
            },
            select: {
                get: function(r) {
                    var q, p, o, n = r.options,
                        m = r.selectedIndex,
                        l = "select-one" === r.type,
                        k = l ? null : [],
                        j = l ? m + 1 : n.length;
                    for (o = m < 0 ? j : l ? m : 0; o < j; o++) {
                        if (p = n[o], (p.selected || o === m) && !p.disabled && (!p.parentNode.disabled || !cq(p.parentNode, "optgroup"))) {
                            if (q = bw(p).val(), l) {
                                return q
                            }
                            k.push(q)
                        }
                    }
                    return k
                },
                set: function(i, h) {
                    var n, m, l = i.options,
                        k = bw.makeArray(h),
                        j = l.length;
                    while (j--) {
                        m = l[j], (m.selected = bw.inArray(bw.valHooks.option.get(m), k) > -1) && (n = !0)
                    }
                    return n || (i.selectedIndex = -1), k
                }
            }
        }
    }), bw.each(["radio", "checkbox"], function() {
        bw.valHooks[this] = {
            set: function(d, c) {
                if (Array.isArray(c)) {
                    return d.checked = bw.inArray(bw(d).val(), c) > -1
                }
            }
        }, bA.checkOn || (bw.valHooks[this].get = function(b) {
            return null === b.getAttribute("value") ? "on" : b.value
        })
    });
    var aW = /^(?:focusinfocus|focusoutblur)$/;
    bw.extend(bw.event, {
        trigger: function(B, A, z, y) {
            var x, w, v, u, t, s, r, l = [z || bN],
                d = bD.call(B, "type") ? B.type : B,
                a = bD.call(B, "namespace") ? B.namespace.split(".") : [];
            if (w = v = z = z || bN, 3 !== z.nodeType && 8 !== z.nodeType && !aW.test(d + bw.event.triggered) && (d.indexOf(".") > -1 && (a = d.split("."), d = a.shift(), a.sort()), t = d.indexOf(":") < 0 && "on" + d, B = B[bw.expando] ? B : new bw.Event(d, "object" == typeof B && B), B.isTrigger = y ? 2 : 3, B.namespace = a.join("."), B.rnamespace = B.namespace ? new RegExp("(^|\\.)" + a.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, B.result = void 0, B.target || (B.target = z), A = null == A ? [B] : bw.makeArray(A, [B]), r = bw.event.special[d] || {}, y || !r.trigger || r.trigger.apply(z, A) !== !1)) {
                if (!y && !r.noBubble && !bw.isWindow(z)) {
                    for (u = r.delegateType || d, aW.test(u + d) || (w = w.parentNode); w; w = w.parentNode) {
                        l.push(w), v = w
                    }
                    v === (z.ownerDocument || bN) && l.push(v.defaultView || v.parentWindow || bQ)
                }
                x = 0;
                while ((w = l[x++]) && !B.isPropagationStopped()) {
                    B.type = x > 1 ? u : r.bindType || d, s = (bZ.get(w, "events") || {})[B.type] && bZ.get(w, "handle"), s && s.apply(w, A), s = t && w[t], s && s.apply && b1(w) && (B.result = s.apply(w, A), B.result === !1 && B.preventDefault())
                }
                return B.type = d, y || B.isDefaultPrevented() || r._default && r._default.apply(l.pop(), A) !== !1 || !b1(z) || t && bw.isFunction(z[d]) && !bw.isWindow(z) && (v = z[t], v && (z[t] = null), bw.event.triggered = d, z[d](), bw.event.triggered = void 0, v && (z[t] = v)), B.result
            }
        },
        simulate: function(f, e, h) {
            var g = bw.extend(new bw.Event, h, {
                type: f,
                isSimulated: !0
            });
            bw.event.trigger(g, null, e)
        }
    }), bw.fn.extend({
        trigger: function(d, c) {
            return this.each(function() {
                bw.event.trigger(d, c, this)
            })
        },
        triggerHandler: function(e, d) {
            var f = this[0];
            if (f) {
                return bw.event.trigger(e, d, f, !0)
            }
        }
    }), bw.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(d, c) {
        bw.fn[c] = function(b, e) {
            return arguments.length > 0 ? this.on(c, null, b, e) : this.trigger(c)
        }
    }), bw.fn.extend({
        hover: function(d, c) {
            return this.mouseenter(d).mouseleave(c || d)
        }
    }), bA.focusin = "onfocusin" in bQ, bA.focusin || bw.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, d) {
        var f = function(b) {
            bw.event.simulate(d, b.target, bw.event.fix(b))
        };
        bw.event.special[d] = {
            setup: function() {
                var b = this.ownerDocument || this,
                    a = bZ.access(b, d);
                a || b.addEventListener(e, f, !0), bZ.access(b, d, (a || 0) + 1)
            },
            teardown: function() {
                var b = this.ownerDocument || this,
                    a = bZ.access(b, d) - 1;
                a ? bZ.access(b, d, a) : (b.removeEventListener(e, f, !0), bZ.remove(b, d))
            }
        }
    });
    var aO = bQ.location,
        aG = bw.now(),
        ay = /\?/;
    bw.parseXML = function(a) {
        var f;
        if (!a || "string" != typeof a) {
            return null
        }
        try {
            f = (new bQ.DOMParser).parseFromString(a, "text/xml")
        } catch (e) {
            f = void 0
        }
        return f && !f.getElementsByTagName("parsererror").length || bw.error("Invalid XML: " + a), f
    };
    var ap = /\[\]$/,
        ag = /\r?\n/g,
        cK = /^(?:submit|button|image|reset|file)$/i,
        cz = /^(?:input|select|textarea|keygen)/i;

    function aZ(g, f, j, i) {
        var h;
        if (Array.isArray(f)) {
            bw.each(f, function(a, c) {
                j || ap.test(g) ? i(g, c) : aZ(g + "[" + ("object" == typeof c && null != c ? a : "") + "]", c, j, i)
            })
        } else {
            if (j || "object" !== bw.type(f)) {
                i(g, f)
            } else {
                for (h in f) {
                    aZ(g + "[" + h + "]", f[h], j, i)
                }
            }
        }
    }
    bw.param = function(g, f) {
        var j, i = [],
            h = function(e, d) {
                var k = bw.isFunction(d) ? d() : d;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == k ? "" : k)
            };
        if (Array.isArray(g) || g.jquery && !bw.isPlainObject(g)) {
            bw.each(g, function() {
                h(this.name, this.value)
            })
        } else {
            for (j in g) {
                aZ(j, g[j], f, h)
            }
        }
        return i.join("&")
    }, bw.fn.extend({
        serialize: function() {
            return bw.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var b = bw.prop(this, "elements");
                return b ? bw.makeArray(b) : this
            }).filter(function() {
                var b = this.type;
                return this.name && !bw(this).is(":disabled") && cz.test(this.nodeName) && !cK.test(b) && (this.checked || !av.test(b))
            }).map(function(e, d) {
                var f = bw(this).val();
                return null == f ? null : Array.isArray(f) ? bw.map(f, function(b) {
                    return {
                        name: d.name,
                        value: b.replace(ag, "\r\n")
                    }
                }) : {
                    name: d.name,
                    value: f.replace(ag, "\r\n")
                }
            }).get()
        }
    });
    var aQ = /%20/g,
        aI = /#.*$/,
        aA = /([?&])_=[^&]*/,
        ar = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        aj = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        cM = /^(?:GET|HEAD)$/,
        cE = /^\/\//,
        ct = {},
        bS = {},
        bj = "*/".concat("*"),
        bc = bN.createElement("a");
    bc.href = aO.href;

    function a3(b) {
        return function(a, j) {
            "string" != typeof a && (j = a, a = "*");
            var i, h = 0,
                g = a.toLowerCase().match(ce) || [];
            if (bw.isFunction(j)) {
                while (i = g[h++]) {
                    "+" === i[0] ? (i = i.slice(1) || "*", (b[i] = b[i] || []).unshift(j)) : (b[i] = b[i] || []).push(j)
                }
            }
        }
    }

    function aU(i, h, n, m) {
        var l = {},
            k = i === bS;

        function j(b) {
            var a;
            return l[b] = !0, bw.each(i[b] || [], function(c, e) {
                var d = e(h, n, m);
                return "string" != typeof d || k || l[d] ? k ? !(a = d) : void 0 : (h.dataTypes.unshift(d), j(d), !1)
            }), a
        }
        return j(h.dataTypes[0]) || !l["*"] && j("*")
    }

    function aM(g, f) {
        var j, i, h = bw.ajaxSettings.flatOptions || {};
        for (j in f) {
            void 0 !== f[j] && ((h[j] ? g : i || (i = {}))[j] = f[j])
        }
        return i && bw.extend(!0, g, i), g
    }

    function aE(r, q, p) {
        var o, n, m, l, k = r.contents,
            j = r.dataTypes;
        while ("*" === j[0]) {
            j.shift(), void 0 === o && (o = r.mimeType || q.getResponseHeader("Content-Type"))
        }
        if (o) {
            for (n in k) {
                if (k[n] && k[n].test(o)) {
                    j.unshift(n);
                    break
                }
            }
        }
        if (j[0] in p) {
            m = j[0]
        } else {
            for (n in p) {
                if (!j[0] || r.converters[n + " " + j[0]]) {
                    m = n;
                    break
                }
                l || (l = n)
            }
            m = m || l
        }
        if (m) {
            return m !== j[0] && j.unshift(m), p[m]
        }
    }

    function aw(x, w, v, u) {
        var t, s, r, q, p, o = {},
            n = x.dataTypes.slice();
        if (n[1]) {
            for (r in x.converters) {
                o[r.toLowerCase()] = x.converters[r]
            }
        }
        s = n.shift();
        while (s) {
            if (x.responseFields[s] && (v[x.responseFields[s]] = w), !p && u && x.dataFilter && (w = x.dataFilter(w, x.dataType)), p = s, s = n.shift()) {
                if ("*" === s) {
                    s = p
                } else {
                    if ("*" !== p && p !== s) {
                        if (r = o[p + " " + s] || o["* " + s], !r) {
                            for (t in o) {
                                if (q = t.split(" "), q[1] === s && (r = o[p + " " + q[0]] || o["* " + q[0]])) {
                                    r === !0 ? r = o[t] : o[t] !== !0 && (s = q[0], n.unshift(q[1]));
                                    break
                                }
                            }
                        }
                        if (r !== !0) {
                            if (r && x["throws"]) {
                                w = r(w)
                            } else {
                                try {
                                    w = r(w)
                                } catch (m) {
                                    return {
                                        state: "parsererror",
                                        error: r ? m : "No conversion from " + p + " to " + s
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: w
        }
    }
    bw.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: aO.href,
            type: "GET",
            isLocal: aj.test(aO.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": bj,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": bw.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(d, c) {
            return c ? aM(aM(d, bw.ajaxSettings), c) : aM(bw.ajaxSettings, d)
        },
        ajaxPrefilter: a3(ct),
        ajaxTransport: a3(bS),
        ajax: function(V, U) {
            "object" == typeof V && (U = V, V = void 0), U = U || {};
            var T, S, R, Q, P, O, N, M, L, K, J = bw.ajaxSetup({}, U),
                I = J.context || J,
                G = J.context && (I.nodeType || I.jquery) ? bw(I) : bw.event,
                F = bw.Deferred(),
                E = bw.Callbacks("once memory"),
                D = J.statusCode || {},
                C = {},
                B = {},
                r = "canceled",
                d = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var c;
                        if (N) {
                            if (!Q) {
                                Q = {};
                                while (c = ar.exec(R)) {
                                    Q[c[1].toLowerCase()] = c[2]
                                }
                            }
                            c = Q[e.toLowerCase()]
                        }
                        return null == c ? null : c
                    },
                    getAllResponseHeaders: function() {
                        return N ? R : null
                    },
                    setRequestHeader: function(e, c) {
                        return null == N && (e = B[e.toLowerCase()] = B[e.toLowerCase()] || e, C[e] = c), this
                    },
                    overrideMimeType: function(b) {
                        return null == N && (J.mimeType = b), this
                    },
                    statusCode: function(e) {
                        var c;
                        if (e) {
                            if (N) {
                                d.always(e[d.status])
                            } else {
                                for (c in e) {
                                    D[c] = [D[c], e[c]]
                                }
                            }
                        }
                        return this
                    },
                    abort: function(e) {
                        var c = e || r;
                        return T && T.abort(c), H(0, c), this
                    }
                };
            if (F.promise(d), J.url = ((V || J.url || aO.href) + "").replace(cE, aO.protocol + "//"), J.type = U.method || U.type || J.method || J.type, J.dataTypes = (J.dataType || "*").toLowerCase().match(ce) || [""], null == J.crossDomain) {
                O = bN.createElement("a");
                try {
                    O.href = J.url, O.href = O.href, J.crossDomain = bc.protocol + "//" + bc.host != O.protocol + "//" + O.host
                } catch (a) {
                    J.crossDomain = !0
                }
            }
            if (J.data && J.processData && "string" != typeof J.data && (J.data = bw.param(J.data, J.traditional)), aU(ct, J, U, d), N) {
                return d
            }
            M = bw.event && J.global, M && 0 === bw.active++ && bw.event.trigger("ajaxStart"), J.type = J.type.toUpperCase(), J.hasContent = !cM.test(J.type), S = J.url.replace(aI, ""), J.hasContent ? J.data && J.processData && 0 === (J.contentType || "").indexOf("application/x-www-form-urlencoded") && (J.data = J.data.replace(aQ, "+")) : (K = J.url.slice(S.length), J.data && (S += (ay.test(S) ? "&" : "?") + J.data, delete J.data), J.cache === !1 && (S = S.replace(aA, "$1"), K = (ay.test(S) ? "&" : "?") + "_=" + aG++ + K), J.url = S + K), J.ifModified && (bw.lastModified[S] && d.setRequestHeader("If-Modified-Since", bw.lastModified[S]), bw.etag[S] && d.setRequestHeader("If-None-Match", bw.etag[S])), (J.data && J.hasContent && J.contentType !== !1 || U.contentType) && d.setRequestHeader("Content-Type", J.contentType), d.setRequestHeader("Accept", J.dataTypes[0] && J.accepts[J.dataTypes[0]] ? J.accepts[J.dataTypes[0]] + ("*" !== J.dataTypes[0] ? ", " + bj + "; q=0.01" : "") : J.accepts["*"]);
            for (L in J.headers) {
                d.setRequestHeader(L, J.headers[L])
            }
            if (J.beforeSend && (J.beforeSend.call(I, d, J) === !1 || N)) {
                return d.abort()
            }
            if (r = "abort", E.add(J.complete), d.done(J.success), d.fail(J.error), T = aU(bS, J, U, d)) {
                if (d.readyState = 1, M && G.trigger("ajaxSend", [d, J]), N) {
                    return d
                }
                J.async && J.timeout > 0 && (P = bQ.setTimeout(function() {
                    d.abort("timeout")
                }, J.timeout));
                try {
                    N = !1, T.send(C, H)
                } catch (a) {
                    if (N) {
                        throw a
                    }
                    H(-1, a)
                }
            } else {
                H(-1, "No Transport")
            }

            function H(o, l, k, i) {
                var g, f, e, s, q, p = l;
                N || (N = !0, P && bQ.clearTimeout(P), T = void 0, R = i || "", d.readyState = o > 0 ? 4 : 0, g = o >= 200 && o < 300 || 304 === o, k && (s = aE(J, d, k)), s = aw(J, s, d, g), g ? (J.ifModified && (q = d.getResponseHeader("Last-Modified"), q && (bw.lastModified[S] = q), q = d.getResponseHeader("etag"), q && (bw.etag[S] = q)), 204 === o || "HEAD" === J.type ? p = "nocontent" : 304 === o ? p = "notmodified" : (p = s.state, f = s.data, e = s.error, g = !e)) : (e = p, !o && p || (p = "error", o < 0 && (o = 0))), d.status = o, d.statusText = (l || p) + "", g ? F.resolveWith(I, [f, p, d]) : F.rejectWith(I, [d, p, e]), d.statusCode(D), D = void 0, M && G.trigger(g ? "ajaxSuccess" : "ajaxError", [d, J, g ? f : e]), E.fireWith(I, [d, p]), M && (G.trigger("ajaxComplete", [d, J]), --bw.active || bw.event.trigger("ajaxStop")))
            }
            return d
        },
        getJSON: function(e, d, f) {
            return bw.get(e, d, f, "json")
        },
        getScript: function(d, c) {
            return bw.get(d, void 0, c, "script")
        }
    }), bw.each(["get", "post"], function(d, c) {
        bw[c] = function(b, h, g, f) {
            return bw.isFunction(h) && (f = f || g, g = h, h = void 0), bw.ajax(bw.extend({
                url: b,
                type: c,
                dataType: f,
                data: h,
                success: g
            }, bw.isPlainObject(b) && b))
        }
    }), bw._evalUrl = function(b) {
        return bw.ajax({
            url: b,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, bw.fn.extend({
        wrapAll: function(d) {
            var c;
            return this[0] && (bw.isFunction(d) && (d = d.call(this[0])), c = bw(d, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && c.insertBefore(this[0]), c.map(function() {
                var b = this;
                while (b.firstElementChild) {
                    b = b.firstElementChild
                }
                return b
            }).append(this)), this
        },
        wrapInner: function(b) {
            return bw.isFunction(b) ? this.each(function(a) {
                bw(this).wrapInner(b.call(this, a))
            }) : this.each(function() {
                var a = bw(this),
                    d = a.contents();
                d.length ? d.wrapAll(b) : a.append(b)
            })
        },
        wrap: function(d) {
            var c = bw.isFunction(d);
            return this.each(function(a) {
                bw(this).wrapAll(c ? d.call(this, a) : d)
            })
        },
        unwrap: function(b) {
            return this.parent(b).not("body").each(function() {
                bw(this).replaceWith(this.childNodes)
            }), this
        }
    }), bw.expr.pseudos.hidden = function(b) {
        return !bw.expr.pseudos.visible(b)
    }, bw.expr.pseudos.visible = function(b) {
        return !!(b.offsetWidth || b.offsetHeight || b.getClientRects().length)
    }, bw.ajaxSettings.xhr = function() {
        try {
            return new bQ.XMLHttpRequest
        } catch (a) {}
    };
    var an = {
            0: 200,
            1223: 204
        },
        ae = bw.ajaxSettings.xhr();
    bA.cors = !!ae && "withCredentials" in ae, bA.ajax = ae = !!ae, bw.ajaxTransport(function(a) {
        var f, e;
        if (bA.cors || ae && !a.crossDomain) {
            return {
                send: function(k, j) {
                    var d, c = a.xhr();
                    if (c.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) {
                        for (d in a.xhrFields) {
                            c[d] = a.xhrFields[d]
                        }
                    }
                    a.mimeType && c.overrideMimeType && c.overrideMimeType(a.mimeType), a.crossDomain || k["X-Requested-With"] || (k["X-Requested-With"] = "XMLHttpRequest");
                    for (d in k) {
                        c.setRequestHeader(d, k[d])
                    }
                    f = function(g) {
                        return function() {
                            f && (f = e = c.onload = c.onerror = c.onabort = c.onreadystatechange = null, "abort" === g ? c.abort() : "error" === g ? "number" != typeof c.status ? j(0, "error") : j(c.status, c.statusText) : j(an[c.status] || c.status, c.statusText, "text" !== (c.responseType || "text") || "string" != typeof c.responseText ? {
                                binary: c.response
                            } : {
                                text: c.responseText
                            }, c.getAllResponseHeaders()))
                        }
                    }, c.onload = f(), e = c.onerror = f("error"), void 0 !== c.onabort ? c.onabort = e : c.onreadystatechange = function() {
                        4 === c.readyState && bQ.setTimeout(function() {
                            f && e()
                        })
                    }, f = f("abort");
                    try {
                        c.send(a.hasContent && a.data || null)
                    } catch (b) {
                        if (f) {
                            throw b
                        }
                    }
                },
                abort: function() {
                    f && f()
                }
            }
        }
    }), bw.ajaxPrefilter(function(b) {
        b.crossDomain && (b.contents.script = !1)
    }), bw.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(b) {
                return bw.globalEval(b), b
            }
        }
    }), bw.ajaxPrefilter("script", function(b) {
        void 0 === b.cache && (b.cache = !1), b.crossDomain && (b.type = "GET")
    }), bw.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var d, f;
            return {
                send: function(b, a) {
                    d = bw("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", f = function(c) {
                        d.remove(), f = null, c && a("error" === c.type ? 404 : 200, c.type)
                    }), bN.head.appendChild(d[0])
                },
                abort: function() {
                    f && f()
                }
            }
        }
    });
    var cI = [],
        cx = /(=)\?(?=&|$)|\?\?/;
    bw.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var b = cI.pop() || bw.expando + "_" + aG++;
            return this[b] = !0, b
        }
    }), bw.ajaxPrefilter("json jsonp", function(a, n, m) {
        var l, k, j, i = a.jsonp !== !1 && (cx.test(a.url) ? "url" : "string" == typeof a.data && 0 === (a.contentType || "").indexOf("application/x-www-form-urlencoded") && cx.test(a.data) && "data");
        if (i || "jsonp" === a.dataTypes[0]) {
            return l = a.jsonpCallback = bw.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, i ? a[i] = a[i].replace(cx, "$1" + l) : a.jsonp !== !1 && (a.url += (ay.test(a.url) ? "&" : "?") + a.jsonp + "=" + l), a.converters["script json"] = function() {
                return j || bw.error(l + " was not called"), j[0]
            }, a.dataTypes[0] = "json", k = bQ[l], bQ[l] = function() {
                j = arguments
            }, m.always(function() {
                void 0 === k ? bw(bQ).removeProp(l) : bQ[l] = k, a[l] && (a.jsonpCallback = n.jsonpCallback, cI.push(l)), j && bw.isFunction(k) && k(j[0]), j = k = void 0
            }), "script"
        }
    }), bA.createHTMLDocument = function() {
        var b = bN.implementation.createHTMLDocument("").body;
        return b.innerHTML = "<form></form><form></form>", 2 === b.childNodes.length
    }(), bw.parseHTML = function(h, d, l) {
        if ("string" != typeof h) {
            return []
        }
        "boolean" == typeof d && (l = d, d = !1);
        var k, j, i;
        return d || (bA.createHTMLDocument ? (d = bN.implementation.createHTMLDocument(""), k = d.createElement("base"), k.href = bN.location.href, d.head.appendChild(k)) : d = bN), j = cp.exec(h), i = !l && [], j ? [d.createElement(j[1])] : (j = bf([h], d, i), i && i.length && bw(i).remove(), bw.merge([], j.childNodes))
    }, bw.fn.load = function(j, i, p) {
        var o, n, m, l = this,
            k = j.indexOf(" ");
        return k > -1 && (o = bl(j.slice(k)), j = j.slice(0, k)), bw.isFunction(i) ? (p = i, i = void 0) : i && "object" == typeof i && (n = "POST"), l.length > 0 && bw.ajax({
            url: j,
            type: n || "GET",
            dataType: "html",
            data: i
        }).done(function(b) {
            m = arguments, l.html(o ? bw("<div>").append(bw.parseHTML(b)).find(o) : b)
        }).always(p && function(d, c) {
            l.each(function() {
                p.apply(this, m || [d.responseText, c, d])
            })
        }), this
    }, bw.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(d, c) {
        bw.fn[c] = function(b) {
            return this.on(c, b)
        }
    }), bw.expr.pseudos.animated = function(b) {
        return bw.grep(bw.timers, function(a) {
            return b === a.elem
        }).length
    }, bw.offset = {
        setOffset: function(z, y, x) {
            var w, v, u, t, s, r, q, p = bw.css(z, "position"),
                o = bw(z),
                n = {};
            "static" === p && (z.style.position = "relative"), s = o.offset(), u = bw.css(z, "top"), r = bw.css(z, "left"), q = ("absolute" === p || "fixed" === p) && (u + r).indexOf("auto") > -1, q ? (w = o.position(), t = w.top, v = w.left) : (t = parseFloat(u) || 0, v = parseFloat(r) || 0), bw.isFunction(y) && (y = y.call(z, x, bw.extend({}, s))), null != y.top && (n.top = y.top - s.top + t), null != y.left && (n.left = y.left - s.left + v), "using" in y ? y.using.call(z, n) : o.css(n)
        }
    }, bw.fn.extend({
        offset: function(h) {
            if (arguments.length) {
                return void 0 === h ? this : this.each(function(a) {
                    bw.offset.setOffset(this, h, a)
                })
            }
            var g, l, k, j, i = this[0];
            if (i) {
                return i.getClientRects().length ? (k = i.getBoundingClientRect(), g = i.ownerDocument, l = g.documentElement, j = g.defaultView, {
                    top: k.top + j.pageYOffset - l.clientTop,
                    left: k.left + j.pageXOffset - l.clientLeft
                }) : {
                    top: 0,
                    left: 0
                }
            }
        },
        position: function() {
            if (this[0]) {
                var f, e, h = this[0],
                    g = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === bw.css(h, "position") ? e = h.getBoundingClientRect() : (f = this.offsetParent(), e = this.offset(), cq(f[0], "html") || (g = f.offset()), g = {
                    top: g.top + bw.css(f[0], "borderTopWidth", !0),
                    left: g.left + bw.css(f[0], "borderLeftWidth", !0)
                }), {
                    top: e.top - g.top - bw.css(h, "marginTop", !0),
                    left: e.left - g.left - bw.css(h, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var b = this.offsetParent;
                while (b && "static" === bw.css(b, "position")) {
                    b = b.offsetParent
                }
                return b || a6
            })
        }
    }), bw.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, d) {
        var f = "pageYOffset" === d;
        bw.fn[e] = function(a) {
            return b2(this, function(b, h, g) {
                var c;
                return bw.isWindow(b) ? c = b : 9 === b.nodeType && (c = b.defaultView), void 0 === g ? c ? c[d] : b[h] : void(c ? c.scrollTo(f ? c.pageXOffset : g, f ? g : c.pageYOffset) : b[h] = g)
            }, e, a, arguments.length)
        }
    }), bw.each(["top", "left"], function(d, c) {
        bw.cssHooks[c] = aF(bA.pixelPosition, function(b, e) {
            if (e) {
                return e = aN(b, c), a4.test(e) ? bw(b).position()[c] + "px" : e
            }
        })
    }), bw.each({
        Height: "height",
        Width: "width"
    }, function(d, c) {
        bw.each({
            padding: "inner" + d,
            content: c,
            "": "outer" + d
        }, function(b, a) {
            bw.fn[a] = function(l, k) {
                var j = arguments.length && (b || "boolean" != typeof l),
                    i = b || (l === !0 || k === !0 ? "margin" : "border");
                return b2(this, function(g, n, m) {
                    var h;
                    return bw.isWindow(g) ? 0 === a.indexOf("outer") ? g["inner" + d] : g.document.documentElement["client" + d] : 9 === g.nodeType ? (h = g.documentElement, Math.max(g.body["scroll" + d], h["scroll" + d], g.body["offset" + d], h["offset" + d], h["client" + d])) : void 0 === m ? bw.css(g, n, i) : bw.style(g, n, m, i)
                }, c, j ? l : void 0, j)
            }
        })
    }), bw.fn.extend({
        bind: function(e, d, f) {
            return this.on(e, null, d, f)
        },
        unbind: function(d, c) {
            return this.off(d, null, c)
        },
        delegate: function(f, e, h, g) {
            return this.on(e, f, h, g)
        },
        undelegate: function(e, d, f) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(d, e || "**", f)
        }
    }), bw.holdReady = function(b) {
        b ? bw.readyWait++ : bw.ready(!0)
    }, bw.isArray = Array.isArray, bw.parseJSON = JSON.parse, bw.nodeName = cq, "function" == typeof define && define.amd && define("jquery", [], function() {
        return bw
    });
    var b3 = bQ.jQuery,
        bv = bQ.$;
    return bw.noConflict = function(a) {
        return bQ.$ === bw && (bQ.$ = bv), a && bQ.jQuery === bw && (bQ.jQuery = b3), bw
    }, bP || (bQ.jQuery = bQ.$ = bw), bw
});
var $aarpe = jQuery.noConflict();
/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        a(jQuery)
    }
}(function(f) {
    var a = /\+/g;

    function d(i) {
        return b.raw ? i : encodeURIComponent(i)
    }

    function g(i) {
        return b.raw ? i : decodeURIComponent(i)
    }

    function h(i) {
        return d(b.json ? JSON.stringify(i) : String(i))
    }

    function c(i) {
        if (i.indexOf('"') === 0) {
            i = i.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")
        }
        try {
            i = decodeURIComponent(i.replace(a, " "))
        } catch (j) {
            return
        }
        try {
            return b.json ? JSON.parse(i) : i
        } catch (j) {}
    }

    function e(j, i) {
        var k = b.raw ? j : c(j);
        return f.isFunction(i) ? i(k) : k
    }
    var b = f.cookie = function(q, p, v) {
        if (p !== undefined && !f.isFunction(p)) {
            v = f.extend({}, b.defaults, v);
            if (typeof v.expires === "number") {
                var r = v.expires,
                    u = v.expires = new Date();
                u.setDate(u.getDate() + r)
            }
            return (document.cookie = [d(q), "=", h(p), v.expires ? "; expires=" + v.expires.toUTCString() : "", v.path ? "; path=" + v.path : "", v.domain ? "; domain=" + v.domain : "", v.secure ? "; secure" : ""].join(""))
        }
        var w = q ? undefined : {};
        var s = document.cookie ? document.cookie.split("; ") : [];
        for (var o = 0, m = s.length; o < m; o++) {
            var n = s[o].split("=");
            var j = g(n.shift());
            var k = n.join("=");
            if (q && q === j) {
                w = e(k, p);
                break
            }
            if (!q && (k = e(k)) !== undefined) {
                w[j] = k
            }
        }
        return w
    };
    b.defaults = {};
    f.removeCookie = function(j, i) {
        if (f.cookie(j) !== undefined) {
            f.cookie(j, "", f.extend({}, i, {
                expires: -1
            }));
            return true
        }
        return false
    }
}));
"use strict";
(function(a, b) {
    if (typeof define === "function" && define.amd) {
        define([], b)
    } else {
        if (typeof exports === "object") {
            module.exports = b()
        } else {
            window.AARP = window.AARP || {};
            AARP.Everywhere = AARP.Everywhere || {};
            AARP.Everywhere.Store = b()
        }
    }
}(this, function() {
    var n = {},
        i = window,
        m = i.document,
        d = "localStorage",
        b = "script",
        h;
    n.disabled = false;
    n.version = "1.3.17";
    n.set = function(e, p) {};
    n.get = function(e, p) {};
    n.has = function(e) {
        return n.get(e) !== undefined
    };
    n.remove = function(e) {};
    n.clear = function() {};
    n.transact = function(e, r, p) {
        if (p == null) {
            p = r;
            r = null
        }
        if (r == null) {
            r = {}
        }
        var q = n.get(e, r);
        p(q);
        n.set(e, q)
    };
    n.getAll = function() {};
    n.forEach = function() {};
    n.serialize = function(e) {
        return JSON.stringify(e)
    };
    n.deserialize = function(p) {
        if (typeof p != "string") {
            return undefined
        }
        try {
            return JSON.parse(p)
        } catch (q) {
            return p || undefined
        }
    };

    function c() {
        try {
            return (d in i && i[d])
        } catch (e) {
            return false
        }
    }
    if (c()) {
        h = i[d];
        n.set = function(e, p) {
            if (p === undefined) {
                return n.remove(e)
            }
            h.setItem(e, n.serialize(p));
            return p
        };
        n.get = function(e, q) {
            var p = n.deserialize(h.getItem(e));
            return (p === undefined ? q : p)
        };
        n.remove = function(e) {
            h.removeItem(e)
        };
        n.clear = function() {
            h.clear()
        };
        n.getAll = function() {
            var e = {};
            n.forEach(function(p, q) {
                e[p] = q
            });
            return e
        };
        n.forEach = function(q) {
            for (var p = 0; p < h.length; p++) {
                var e = h.key(p);
                q(e, n.get(e))
            }
        }
    } else {
        if (m.documentElement.addBehavior) {
            var l, g;
            try {
                g = new ActiveXObject("htmlfile");
                g.open();
                g.write("<" + b + ">document.w=window</" + b + '><iframe src="/favicon.ico"></iframe>');
                g.close();
                l = g.w.frames[0].document;
                h = l.createElement("div")
            } catch (k) {
                h = m.createElement("div");
                l = m.body
            }
            var a = function(e) {
                return function() {
                    var q = Array.prototype.slice.call(arguments, 0);
                    q.unshift(h);
                    l.appendChild(h);
                    h.addBehavior("#default#userData");
                    h.load(d);
                    var p = e.apply(n, q);
                    l.removeChild(h);
                    return p
                }
            };
            var f = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");
            var o = function(e) {
                return e.replace(/^d/, "___$&").replace(f, "___")
            };
            n.set = a(function(q, e, p) {
                e = o(e);
                if (p === undefined) {
                    return n.remove(e)
                }
                q.setAttribute(e, n.serialize(p));
                q.save(d);
                return p
            });
            n.get = a(function(r, e, q) {
                e = o(e);
                var p = n.deserialize(r.getAttribute(e));
                return (p === undefined ? q : p)
            });
            n.remove = a(function(p, e) {
                e = o(e);
                p.removeAttribute(e);
                p.save(d)
            });
            n.clear = a(function(p) {
                var e = p.XMLDocument.documentElement.attributes;
                p.load(d);
                while (e.length) {
                    p.removeAttribute(e[0].name)
                }
                p.save(d)
            });
            n.getAll = function(p) {
                var e = {};
                n.forEach(function(q, r) {
                    e[q] = r
                });
                return e
            };
            n.forEach = a(function(s, r) {
                var p = s.XMLDocument.documentElement.attributes;
                for (var q = 0, e; e = p[q];
                    ++q) {
                    r(e.name, n.deserialize(s.getAttribute(e.name)))
                }
            })
        }
    }
    try {
        var j = "__storejs__";
        n.set(j, j);
        if (n.get(j) != j) {
            n.disabled = true
        }
        n.remove(j)
    } catch (k) {
        n.disabled = true
    }
    n.enabled = !n.disabled;
    return n
}));
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
(function defineMustache(b, a) {
    if (typeof exports === "object" && exports && typeof exports.nodeName !== "string") {
        a(exports)
    } else {
        if (typeof define === "function" && define.amd) {
            define(["exports"], a)
        } else {
            b.Mustache = {};
            a(b.Mustache)
        }
    }
}(this, function mustacheFactory(F) {
    var x = Object.prototype.toString;
    var y = Array.isArray || function d(Q) {
        return x.call(Q) === "[object Array]"
    };

    function u(Q) {
        return typeof Q === "function"
    }

    function L(Q) {
        return y(Q) ? "array" : typeof Q
    }

    function i(Q) {
        return Q.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }

    function J(R, Q) {
        return R != null && typeof R === "object" && (Q in R)
    }
    var o = RegExp.prototype.test;

    function c(R, Q) {
        return o.call(R, Q)
    }
    var s = /\S/;

    function E(Q) {
        return !c(s, Q)
    }
    var q = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;"
    };

    function z(Q) {
        return String(Q).replace(/[&<>"'`=\/]/g, function R(S) {
            return q[S]
        })
    }
    var t = /\s*/;
    var C = /\s+/;
    var l = /\s*=/;
    var N = /\s*\}/;
    var r = /#|\^|\/|>|\{|&|=|!/;

    function e(aj, Y) {
        if (!aj) {
            return []
        }
        var aa = [];
        var Z = [];
        var V = [];
        var ak = false;
        var ah = false;

        function ag() {
            if (ak && !ah) {
                while (V.length) {
                    delete Z[V.pop()]
                }
            } else {
                V = []
            }
            ak = false;
            ah = false
        }
        var ac, X, ai;

        function W(al) {
            if (typeof al === "string") {
                al = al.split(C, 2)
            }
            if (!y(al) || al.length !== 2) {
                throw new Error("Invalid tags: " + al)
            }
            ac = new RegExp(i(al[0]) + "\\s*");
            X = new RegExp("\\s*" + i(al[1]));
            ai = new RegExp("\\s*" + i("}" + al[1]))
        }
        W(Y || F.tags);
        var S = new a(aj);
        var T, R, ab, ae, U, Q;
        while (!S.eos()) {
            T = S.pos;
            ab = S.scanUntil(ac);
            if (ab) {
                for (var af = 0, ad = ab.length; af < ad;
                    ++af) {
                    ae = ab.charAt(af);
                    if (E(ae)) {
                        V.push(Z.length)
                    } else {
                        ah = true
                    }
                    Z.push(["text", ae, T, T + 1]);
                    T += 1;
                    if (ae === "\n") {
                        ag()
                    }
                }
            }
            if (!S.scan(ac)) {
                break
            }
            ak = true;
            R = S.scan(r) || "name";
            S.scan(t);
            if (R === "=") {
                ab = S.scanUntil(l);
                S.scan(l);
                S.scanUntil(X)
            } else {
                if (R === "{") {
                    ab = S.scanUntil(ai);
                    S.scan(N);
                    S.scanUntil(X);
                    R = "&"
                } else {
                    ab = S.scanUntil(X)
                }
            }
            if (!S.scan(X)) {
                throw new Error("Unclosed tag at " + S.pos)
            }
            U = [R, ab, T, S.pos];
            Z.push(U);
            if (R === "#" || R === "^") {
                aa.push(U)
            } else {
                if (R === "/") {
                    Q = aa.pop();
                    if (!Q) {
                        throw new Error('Unopened section "' + ab + '" at ' + T)
                    }
                    if (Q[1] !== ab) {
                        throw new Error('Unclosed section "' + Q[1] + '" at ' + T)
                    }
                } else {
                    if (R === "name" || R === "{" || R === "&") {
                        ah = true
                    } else {
                        if (R === "=") {
                            W(ab)
                        }
                    }
                }
            }
        }
        Q = aa.pop();
        if (Q) {
            throw new Error('Unclosed section "' + Q[1] + '" at ' + S.pos)
        }
        return m(p(Z))
    }

    function p(V) {
        var R = [];
        var T, Q;
        for (var S = 0, U = V.length; S < U;
            ++S) {
            T = V[S];
            if (T) {
                if (T[0] === "text" && Q && Q[0] === "text") {
                    Q[1] += T[1];
                    Q[3] = T[3]
                } else {
                    R.push(T);
                    Q = T
                }
            }
        }
        return R
    }

    function m(V) {
        var X = [];
        var U = X;
        var W = [];
        var R, T;
        for (var Q = 0, S = V.length; Q < S;
            ++Q) {
            R = V[Q];
            switch (R[0]) {
                case "#":
                case "^":
                    U.push(R);
                    W.push(R);
                    U = R[4] = [];
                    break;
                case "/":
                    T = W.pop();
                    T[5] = R[2];
                    U = W.length > 0 ? W[W.length - 1][4] : X;
                    break;
                default:
                    U.push(R)
            }
        }
        return X
    }

    function a(Q) {
        this.string = Q;
        this.tail = Q;
        this.pos = 0
    }
    a.prototype.eos = function K() {
        return this.tail === ""
    };
    a.prototype.scan = function O(S) {
        var R = this.tail.match(S);
        if (!R || R.index !== 0) {
            return ""
        }
        var Q = R[0];
        this.tail = this.tail.substring(Q.length);
        this.pos += Q.length;
        return Q
    };
    a.prototype.scanUntil = function I(S) {
        var R = this.tail.search(S),
            Q;
        switch (R) {
            case -1:
                Q = this.tail;
                this.tail = "";
                break;
            case 0:
                Q = "";
                break;
            default:
                Q = this.tail.substring(0, R);
                this.tail = this.tail.substring(R)
        }
        this.pos += Q.length;
        return Q
    };

    function M(R, Q) {
        this.view = R;
        this.cache = {
            ".": this.view
        };
        this.parent = Q
    }
    M.prototype.push = function G(Q) {
        return new M(Q, this)
    };
    M.prototype.lookup = function j(T) {
        var R = this.cache;
        var V;
        if (R.hasOwnProperty(T)) {
            V = R[T]
        } else {
            var U = this,
                W, S, Q = false;
            while (U) {
                if (T.indexOf(".") > 0) {
                    V = U.view;
                    W = T.split(".");
                    S = 0;
                    while (V != null && S < W.length) {
                        if (S === W.length - 1) {
                            Q = J(V, W[S])
                        }
                        V = V[W[S++]]
                    }
                } else {
                    V = U.view[T];
                    Q = J(U.view, T)
                }
                if (Q) {
                    break
                }
                U = U.parent
            }
            R[T] = V
        }
        if (u(V)) {
            V = V.call(this.view)
        }
        return V
    };

    function k() {
        this.cache = {}
    }
    k.prototype.clearCache = function A() {
        this.cache = {}
    };
    k.prototype.parse = function v(S, R) {
        var Q = this.cache;
        var T = Q[S];
        if (T == null) {
            T = Q[S + ":" + (R || F.tags).join(":")] = e(S, R)
        }
        return T
    };
    k.prototype.render = function B(T, Q, S) {
        var U = this.parse(T);
        var R = (Q instanceof M) ? Q : new M(Q);
        return this.renderTokens(U, R, S, T)
    };
    k.prototype.renderTokens = function n(X, Q, V, Z) {
        var T = "";
        var S, R, Y;
        for (var U = 0, W = X.length; U < W;
            ++U) {
            Y = undefined;
            S = X[U];
            R = S[0];
            if (R === "#") {
                Y = this.renderSection(S, Q, V, Z)
            } else {
                if (R === "^") {
                    Y = this.renderInverted(S, Q, V, Z)
                } else {
                    if (R === ">") {
                        Y = this.renderPartial(S, Q, V, Z)
                    } else {
                        if (R === "&") {
                            Y = this.unescapedValue(S, Q)
                        } else {
                            if (R === "name") {
                                Y = this.escapedValue(S, Q)
                            } else {
                                if (R === "text") {
                                    Y = this.rawValue(S)
                                }
                            }
                        }
                    }
                }
            }
            if (Y !== undefined) {
                T += Y
            }
        }
        return T
    };
    k.prototype.renderSection = function w(S, Q, V, Y) {
        var Z = this;
        var U = "";
        var W = Q.lookup(S[1]);

        function R(aa) {
            return Z.render(aa, Q, V)
        }
        if (!W) {
            return
        }
        if (y(W)) {
            for (var T = 0, X = W.length; T < X;
                ++T) {
                U += this.renderTokens(S[4], Q.push(W[T]), V, Y)
            }
        } else {
            if (typeof W === "object" || typeof W === "string" || typeof W === "number") {
                U += this.renderTokens(S[4], Q.push(W), V, Y)
            } else {
                if (u(W)) {
                    if (typeof Y !== "string") {
                        throw new Error("Cannot use higher-order sections without the original template")
                    }
                    W = W.call(Q.view, Y.slice(S[3], S[5]), R);
                    if (W != null) {
                        U += W
                    }
                } else {
                    U += this.renderTokens(S[4], Q, V, Y)
                }
            }
        }
        return U
    };
    k.prototype.renderInverted = function b(S, R, Q, U) {
        var T = R.lookup(S[1]);
        if (!T || (y(T) && T.length === 0)) {
            return this.renderTokens(S[4], R, Q, U)
        }
    };
    k.prototype.renderPartial = function H(S, R, Q) {
        if (!Q) {
            return
        }
        var T = u(Q) ? Q(S[1]) : Q[S[1]];
        if (T != null) {
            return this.renderTokens(this.parse(T), R, Q, T)
        }
    };
    k.prototype.unescapedValue = function g(R, Q) {
        var S = Q.lookup(R[1]);
        if (S != null) {
            return S
        }
    };
    k.prototype.escapedValue = function D(R, Q) {
        var S = Q.lookup(R[1]);
        if (S != null) {
            return F.escape(S)
        }
    };
    k.prototype.rawValue = function f(Q) {
        return Q[1]
    };
    F.name = "mustache.js";
    F.version = "2.3.0";
    F.tags = ["{{", "}}"];
    var P = new k();
    F.clearCache = function A() {
        return P.clearCache()
    };
    F.parse = function v(R, Q) {
        return P.parse(R, Q)
    };
    F.render = function B(S, Q, R) {
        if (typeof S !== "string") {
            throw new TypeError('Invalid template! Template should be a "string" but "' + L(S) + '" was given as the first argument for mustache#render(template, view, partials)')
        }
        return P.render(S, Q, R)
    };
    F.to_html = function h(T, R, S, U) {
        var Q = F.render(T, R, S);
        if (u(U)) {
            U(Q)
        } else {
            return Q
        }
    };
    F.escape = z;
    F.Scanner = a;
    F.Context = M;
    F.Writer = k;
    return F
}));
AARP.Everywhere.SegmentData = new function() {
    var a = null;
    this.getSegments = function() {
        if (a === null) {
            a = [];
            var b = AARP.Everywhere.Store.get("aarpseg");
            if (b) {
                a = b.toLowerCase().split(",")
            }
        }
        return a
    };
    this.getSegmentsURLString = function(e) {
        if (a === null) {
            this.getSegments()
        }
        var d, c = a.length;
        var b = "segment=";
        if (c === 0) {
            if (e) {
                b += e
            } else {
                b += ""
            }
        } else {
            b += a.join(",")
        }
        b = b.replace(/,\s*$/, "");
        return b
    }
}();
AARP.Everywhere.UserInfo = function(w) {
    var f, m, s, l, b, p, q, r, i, a, u, d, h, k, e, o, c, j, t, g = false,
        v = false,
        n;
    if (w) {
        f = w;
        g = true;
        m = f.membershipType;
        s = new Date(f.membershipExpirationDate);
        l = new Date(f.membershipEnrollDate);
        b = f.firstName;
        p = f.lastName;
        q = f.email;
        r = f.city;
        i = f.postalCode;
        a = f.state_long;
        u = f.state_short;
        d = f.membershipAccountId;
        o = j = f.userName;
        t = f.profileCommunityUrl;
        h = f.statusCode;
        k = f.membershipStatus;
        e = f.firstTimeRenewer;
        c = f.userId;
        n = f.memberAutoRenew
    }
    this.getMembershipType = function() {
        return m
    };
    this.getMembershipExpirationDate = function() {
        return s
    };
    this.getMembershipEnrollDate = function() {
        return l
    };
    this.getFirstName = function() {
        return b
    };
    this.getLastName = function() {
        return p
    };
    this.getEmail = function() {
        return q
    };
    this.getCity = function() {
        return r
    };
    this.getPostalCode = function() {
        return i
    };
    this.getStateLong = function() {
        return a
    };
    this.getStateShort = function() {
        return u
    };
    this.getId = function() {
        return d
    };
    this.getStatusCode = function() {
        return h
    };
    this.getMembershipStatus = function() {
        return k
    };
    this.getFirstTimeRenewer = function() {
        return e
    };
    this.getCommunityId = function() {
        return o
    };
    this.getUserName = function() {
        return j
    };
    this.getProfileLink = function() {
        return t
    };
    this.isLoggedIn = function() {
        return g
    };
    this.isPartiallyLoggedIn = function() {
        return v
    };
    this.getUserId = function() {
        return c
    };
    this.getMemberAutoRenew = function() {
        return n
    }
};
AARP.Everywhere.User = new function() {
    var g = false,
        c = null,
        b = [];
    this.getUserInfo = function(j, i) {
        if (c !== null && c !== false) {
            j(c)
        } else {
            if (c === false) {
                if (!!i) {
                    i()
                } else {}
            } else {
                if (!g && c === null && $aarpe.cookie("at")) {
                    h(j, i)
                } else {
                    if (g) {
                        b.push([j, i])
                    } else {
                        if (!g && c === null && !$aarpe.cookie("at")) {
                            c = false;
                            if (typeof i !== "undefined") {
                                i()
                            }
                        }
                    }
                }
            }
        }
    };

    function h(t, p) {
        b.push([t, p]);
        var n = {},
            l = $aarpe.cookie("at");
        if (l) {
            var j = l.split("&");
            for (var o in j) {
                if (typeof j[o].split !== "undefined") {
                    var r = j[o].split("="),
                        s = r[0],
                        k = r[1];
                    switch (s) {
                        case "p":
                            n.postalCode = k;
                            break;
                        case "me":
                            n.membershipExpirationDate = k;
                            break;
                        case "ms":
                            n.statusCode = k;
                            switch (k) {
                                case "1":
                                    n.membershipStatus = "NON-MEMBER";
                                    break;
                                case "0":
                                    n.membershipStatus = "ACTIVE";
                                    break;
                                case "5":
                                    n.membershipStatus = "EXPIRED";
                                    break;
                                case "4":
                                    n.membershipStatus = "CANCELLED";
                                    break;
                                case "M":
                                case "U":
                                case "D":
                                    n.membershipStatus = "SUSPENDED";
                                    break;
                                default:
                                    n.membershipStatus = ""
                            }
                            break;
                        case "cid":
                            n.membershipPrimaryPersonId = k;
                            break;
                        case "u":
                            n.userId = k;
                            break;
                        case "email":
                        case "e":
                            n.email = k;
                            break;
                        case "mj":
                            n.membershipEnrollDate = k;
                            break;
                        case "ftr":
                            n.firstTimeRenewer = k;
                            break;
                        case "a":
                            n.userName = k;
                            break;
                        case "us":
                            n.state_long = k;
                            break;
                        case "f":
                            n.firstName = k;
                            break;
                        case "li":
                            n.profileCommunityUrl = "https://community.aarp.org/t5/user/viewprofilepage/user-id/" + k;
                            break;
                        case "mar":
                            n.memberAutoRenew = k;
                            break
                    }
                }
            }
            if (n.membershipStatus == "ACTIVE") {
                var m = new Date();
                m.setDate(m.getDate() + 60);
                var q = new Date(n.membershipExpirationDate);
                if (m > q) {
                    n.membershipStatus = "EXPIRING"
                }
            }
            c = new AARP.Everywhere.UserInfo(n);
            a(true)
        } else {
            c = false;
            a(false, arguments)
        }
    }

    function d(i, k, j) {
        if (i.webservice_response_error) {
            f(j, k);
            a(false)
        } else {
            AARP.Everywhere.Store.set("AARPe_userinfo", JSON.stringify(i));
            c = new AARP.Everywhere.UserInfo(i);
            g = false;
            a(true)
        }
    }

    function f(j, l, k, i) {
        c = false;
        g = false;
        a(false, arguments)
    }

    function a(n, l) {
        if (n) {
            for (var m = 0; m < b.length; m++) {
                b[m][0](c)
            }
        } else {
            for (var k = 0; k < b.length; k++) {
                if (b[k][1]) {
                    b[k][1].call(l)
                }
            }
        }
        b = []
    }

    function e() {
        console.error(this.url + "not found")
    }
}();
AARP.Everywhere.RewardsForGood = new function() {
    var c = null,
        b = c;

    function e() {
        var g = $aarpe.cookie("dr"),
            f = 0;
        if (g) {
            f = String(d(g)["bal"]);
            f = f.replace(/\,/g, "");
            f = parseInt(f, 10);
            if (isNaN(parseInt(f, 10))) {
                f = 0
            }
        }
        c = f;
        a()
    }

    function d(l) {
        var k = {},
            f = decodeURIComponent(l),
            g = f.slice(f.indexOf("?") + 1).split("&");
        for (var h = 0, j; h < g.length; h++) {
            j = g[h].split("=");
            k[(j[0])] = (j[1])
        }
        return k
    }

    function a() {
        var f = c;
        if (f < 1000) {
            return b = f
        }
        if (f >= 1000 && f < 10000) {
            f = String(f);
            var g = /(\d+)(\d{3})/;
            while (g.test(f)) {
                f = f.replace(g, "$1,$2")
            }
        } else {
            if (f > 10000 && f < 100000) {
                f = f / 1000;
                f = f.toFixed(1) + "K"
            } else {
                if (f > 100000 && f < 1000000) {
                    f = f / 1000;
                    f = parseInt(f, 10) + "K"
                } else {
                    f = f / 1000000;
                    f = f.toFixed(1) + "M"
                }
            }
        }
        b = f
    }
    this.getBalance = function(f) {
        e();
        if (f) {
            return b
        } else {
            return c
        }
    }
}();
var scriptOnload_factory = function() {
    function b(c) {
        if (window.addEventListener) {
            window.addEventListener("load", function() {
                a(c)
            }, false)
        } else {
            if (window.attachEvent) {
                window.attachEvent("onload", function() {
                    a(c)
                })
            } else {
                window.onload = function() {
                    a(c)
                }
            }
        }
    }

    function a(d) {
        var c = document.createElement("script");
        try {
            if (typeof d.callback !== "undefined" || typeof d.callback == "function") {
                c.onload = d.callback
            }
            if (typeof d.src == "string") {
                c.src = d.src
            }
            if (typeof d.attribute == "object" && d.attribute.length >= 1) {
                for (var e = 0; e < d.attribute.length; e++) {
                    c.setAttribute(d.attribute[e].name, d.attribute[e].value)
                }
            }
            if (d.defer) {
                c.defer = "defer"
            }
            if (d.async != undefined && !d.async) {
                c.async = false
            }
            document.body.appendChild(c)
        } catch (f) {
            console.error("Error: Please provide valid Object for Onload Script" + f + ".")
        }
    }
    return {
        init: function(c) {
            b(c)
        }
    }
};
AARP.Everywhere.SiteBanner = new function() {
    var b = null,
        a = "";
    this.init = function() {
        a = $aarpe("#siteBannerText").text();
        b = $aarpe(".aarpe-site-banner");
        if (b.length < 1) {
            return
        }
        var c = AARP.Everywhere.Store.get("AARPe_Sitebanner_Text");
        if (c && (!AARP.Everywhere.isAuthor)) {
            if ((a === c) && AARP.Everywhere.Store.get("AARPe_Sitebanner_closed")) {
                b.hide()
            }
        }
        b.find(".siteBannerClose").on("click.SiteBanner", function(d) {
            d.stopPropagation();
            d.preventDefault();
            $aarpe(this).closest(b).hide();
            AARP.Everywhere.Store.set("AARPe_Sitebanner_Text", a);
            AARP.Everywhere.Store.set("AARPe_Sitebanner_closed", true)
        })
    }
}();
AARP.Everywhere.UserLinks = new function() {
    var a, g = null,
        b = null,
        d, c = null,
        j = null,
        f = [],
        h = [],
        i = null;
    this.init = function() {
        AARP.Everywhere.User.getUserInfo(function(n) {
            var m = n.getStatusCode();
            var o = new Date();
            o.setDate(o.getDate() + 60);
            if (o > n.getMembershipExpirationDate()) {
                i = true
            }
            switch (m) {
                case "0":
                    if (i) {
                        c = $aarpe("#aarpe-expiring-user-links");
                        j = $aarpe("#aarpe-expiring-community-links")
                    } else {
                        c = $aarpe("#aarpe-member-user-links");
                        j = $aarpe("#aarpe-member-community-links")
                    }
                    break;
                case "1":
                    c = $aarpe("#aarpe-registered-user-links");
                    j = $aarpe("#aarpe-registered-community-links");
                    break;
                case "5":
                    c = $aarpe("#aarpe-expired-user-links");
                    j = $aarpe("#aarpe-expired-community-links");
                    break;
                default:
                    c = $aarpe("#aarpe-anon-user-links");
                    j = $aarpe("#aarpe-anon-community-links")
            }
            e()
        }, function() {
            c = $aarpe("#aarpe-anon-user-links");
            j = $aarpe("#aarpe-anon-community-links");
            e()
        });
        var k = $aarpe("#aarpe-promo-links"),
            l = $aarpe("#aarpe-rewards-links");
        if (k.length > 0) {
            a = {
                show: k.data("show"),
                href: k.data("href"),
                label: k.data("label")
            }
        }
        if (l.length > 0) {
            d = {
                show: l.data("show"),
                href: l.data("href"),
                label: l.data("label"),
                unit: l.data("unit")
            }
        }
    };

    function e() {
        var l, m, k;
        g = [];
        if (c.length > 0) {
            l = c.data("links");
            if (l) {
                for (m = 0, k = l.length; m < k; m++) {
                    g.push({
                        href: l[m]["href"].replace(new RegExp("(/content/aarpe?/e[n|s]/home)(/.*)", "gi"), "$2/"),
                        label: l[m]["text"],
                        formelementidvalue: l[m]["formelementid"]
                    })
                }
            }
        }
        for (m = 0, k = f.length; m < k; m++) {
            f[m](g)
        }
        b = [];
        if (j.length > 0) {
            l = j.data("links");
            if (l) {
                for (m = 0, k = l.length; m < k; m++) {
                    b.push({
                        href: l[m]["href"].replace(new RegExp("(/content/aarpe?/e[n|s]/home)(/.*)", "gi"), "$2/"),
                        label: l[m]["text"],
                        formelementidvalue: l[m]["formelementid"]
                    })
                }
            }
        }
        for (m = 0, k = h.length; m < k; m++) {
            h[m](b)
        }
    }
    this.getPromoLink = function() {
        return a
    };
    this.getUserLinks = function(k) {
        if (g === null) {
            f.push(k)
        } else {
            k(g)
        }
    };
    this.getCommunityLinks = function(k) {
        if (b === null) {
            h.push(k)
        } else {
            k(b)
        }
    };
    this.getRewardsLink = function() {
        return d
    }
}();
AARP.Everywhere.Header = new function() {
    var m = null,
        p = null,
        b = {
            communityLinks: '<li class="community-link"><a href="{{href}}" data-formelementid="{{formelementidvalue}}">{{{label}}}</a></li>',
            promoLink: '{{#show}}<li><a href="{{href}}" data-formelementid="member-benefits">{{{label}}}</a></li>{{/show}}',
            userLinks: '<li><a href="{{href}}"  data-formelementid="{{formelementidvalue}}">{{{label}}}</a></li>',
            rewardsLink: '{{#show}}<div class="wrap">{{#href}}<a href="{{href}}">{{/href}}<span class="icon-r4g-badge-icon"></span><span class="text hidden-sm hidden-md">{{{label}}}</span>{{#href}}</a>{{/href}}</div>{{/show}}',
            rewardsPoints: '<span class="points">{{balance}} {{{unit}}} pts</span>',
            username: '<div class="wrap">{{#href}}<a href="{{href}}">{{/href}}<span class="text hidden-sm hidden-md">{{#es}}Hola, {{/es}}{{^es}}Hi, {{/es}}{{name}}</span><span class="icon-aarp-account-icon">{{#href}}<span>Your Profile</span></span></a>{{/href}}{{^href}}</span><span class="icon-down-arrow" aria-label="Expand DropDown"></span><span class="icon-up-arrow"></span>{{/href}}</div>',
            loginPrompt: '<div class="wrap"><a href="{{hrefRegister}}" class="aarpe-clear-storage aarpe-add-referrer" data-formelementid ="register"><span class="hidden-sm hidden-md">{{#es}}Regístrate{{/es}}{{^es}}Register{{/es}}</span></a> <span class="divider"> | </span><span class="login"><a href="{{hrefLogin}}" data-formelementid="login" class="aarpe-clear-storage aarpe-add-referrer" ><span class="hidden-md">{{#es}}Ingresa{{/es}}{{^es}} Login{{/es}}</span><span class="icon-aarp-account-icon"></span></a></span></div>',
            customLoginPrompt: '<div class="wrap"><a onClick="AARP.Everywhere.Header.register()" class="aarpe-clear-storage aarpe-add-referrer" data-formelementid ="register"><span class="hidden-sm hidden-md">{{#es}}Regístrate{{/es}}{{^es}}Register{{/es}}</span></a> <span class="divider"> | </span><span class="login"><a onClick="AARP.Everywhere.Header.login()" data-formelementid="login" class="aarpe-clear-storage aarpe-add-referrer" ><span class="hidden-md">{{#es}}Ingresa{{/es}}{{^es}} Login{{/es}}</span><span class="icon-aarp-account-icon"></span></a></span></div>',
            pageTitleNoArticle: "{{fullTitle}}",
            pageTitleWithArticle: '{{#isTruncated}}<span title="{{fullTitle}}">{{text}}&hellip;</span>{{/isTruncated}}{{^isTruncated}}{{text}}{{/isTruncated}}',
            articleTitle: '{{#isTruncated}}<span title="{{fullTitle}}">{{/isTruncated}}{{^isTruncated}}<span>{{/isTruncated}}<span>{{smallLength}}</span>{{#isLongerThanSmall}}<span class="hidden-md hidden-lg">&hellip;</span>{{/isLongerThanSmall}}<span class="hidden-sm">{{medLength}}</span>{{#isLongerThanMed}}<span class="hidden-sm hidden-lg">&hellip;</span>{{/isLongerThanMed}}<span class="hidden-sm hidden-md">{{extraLength}}{{#isLongerThanMax}}&hellip;{{/isLongerThanMax}}</span></span>'
        };
    this.init = function() {
        m = $aarpe(".aarpe-everywhere-header");
        if (m.length < 1) {
            return
        }
        AARP.Everywhere.User.getUserInfo(j, function() {
            m.find(".logout").remove();
            d();
            m.on("click.Header", ".dropdown-toggle.username, .dropdown-toggle.username a", function(s) {
                $aarpe(this).closest(".dropdown-toggle").addClass("disabled")
            })
        });
        m.find(".login").on("click.Login", function() {
            AARP.Everywhere.Store.clear()
        });
        AARP.Everywhere.UserLinks.getUserLinks(f);
        AARP.Everywhere.UserLinks.getCommunityLinks(e);
        h();
        i();
        l();
        m.find(".nav").on("click.Header", function(t) {
            t.stopPropagation();
            t.preventDefault();
            if ($aarpe(this).hasClass("offscreen-open")) {
                AARP.Everywhere.AnimateLayout.closeNav()
            } else {
                AARP.Everywhere.AnimateLayout.openNav();
                var s = document.querySelector(".offscreenNav header");
                s.focus()
            }
        });
        m.find(".search .dropdown-toggle").on("shown.bs.dropdown", function() {
            $aarpe(this).find("input[type=text]").first().focus()
        });
        m.on("click.Header", ".dropdown-toggle.username a", function(s) {
            $aarpe(this).closest(".dropdown-toggle").addClass("disabled")
        })
    };

    function e(u) {
        var t = "";
        for (var v = 0, s = u.length; v < s; v++) {
            t += Mustache.render(b.communityLinks, u[v])
        }
        m.find(".community-promo ul").prepend(t)
    }

    function h() {
        var s = AARP.Everywhere.UserLinks.getPromoLink();
        m.find(".community-promo ul").append(Mustache.render(b.promoLink, s))
    }

    function f(u) {
        var v = m.find(".aarpe-user-links ul"),
            t = "";
        for (var w = 0, s = u.length; w < s; w++) {
            t += Mustache.render(b.userLinks, u[w])
        }
        v.prepend(t);
        if (u.length === 0) {
            v.parent().remove()
        }
    }

    function j(s) {
        var t = s.getFirstName();
        if (t.length > 1) {
            var u = Mustache.render(b.username, {
                name: t,
                es: AARP.Everywhere.isSpanish
            });
            m.find(".username").prepend(u)
        }
    }

    function g(t) {
        var u = AARP.Everywhere.RewardsForGood.getBalance(true);
        var v = {
            balance: u,
            unit: t
        };
        if (u != 0) {
            var s = Mustache.render(b.rewardsPoints, v);
            m.find(".aarpe-rewards-links .wrap a").append(s)
        }
    }

    function l() {
        var t = AARP.Everywhere.UserLinks.getRewardsLink();
        var s = Mustache.render(b.rewardsLink, t);
        m.find(".aarpe-rewards-links").html(s);
        if ($aarpe.cookie("at")) {
            g(AARP.Everywhere.UserLinks.getRewardsLink().unit)
        }
    }

    function c(t) {
        t.preventDefault();
        var s = $aarpe(this).parent();
        if (s.hasClass("active")) {
            if (!s.hasClass("nav")) {
                s.removeClass("active")
            } else {
                AARP.Everywhere.AnimateLayout.closeNav()
            }
            return false
        } else {
            p.removeClass("active");
            if (!s.hasClass("nav")) {
                s.addClass("active");
                s.find("input[type=text]").first().focus()
            } else {
                AARP.Everywhere.AnimateLayout.openNav()
            }
            return true
        }
    }

    function d() {
        var s = "";
        if (AARP.Everywhere.LOGIN_DATA.customLogin == "on") {
            s = Mustache.render(b.customLoginPrompt, {
                es: AARP.Everywhere.isSpanish
            })
        } else {
            s = Mustache.render(b.loginPrompt, {
                hrefRegister: AARP.Everywhere.registerUrl,
                hrefLogin: AARP.Everywhere.loginUrl,
                es: AARP.Everywhere.isSpanish
            })
        }
        m.find(".username").append(s)
    }

    function i() {
        var s = m.find(".title-content"),
            w = $aarpe(".aarpe-page-header").not(".aarpe-stack-sticky-placeholder"),
            t = w.find(".page-title").first().text(),
            x = w.find(".breadcrumb").html(),
            u = 14,
            v = {
                isTruncated: (t.length > u),
                fullTitle: t,
                text: t.length > u ? t.substring(0, u) : t
            };
        if (s.length > 0) {
            s.find(".with-article .page-title").html(Mustache.render(b.pageTitleWithArticle, v));
            s.find(".no-article .page-title").html(Mustache.render(b.pageTitleNoArticle, v));
            if (x && x.length > 0) {
                s.find(".breadcrumb").html(x)
            } else {
                s.find(".breadcrumb").remove()
            }
        }
    }
    this.renderArticleTitle = function(y) {
        var u = m.find(".title-content"),
            x = m.find(".no-article"),
            v = m.find(".with-article"),
            s = 15,
            t = 20,
            z = 50,
            w = {
                fullTitle: y
            };
        if (y.length > 0 && u.length > 0) {
            if (y.length > s) {
                w.isLongerThanSmall = true;
                w.smallLength = y.substring(0, s);
                w.extraLength = y.substring(s)
            } else {
                w.smallLength = y;
                w.medLength = w.extraLength = ""
            }
            if (y.length > t) {
                w.isLongerThanMed = true;
                w.medLength = y.substring(s, t);
                w.extraLength = y.substring(t)
            }
            if (y.length > z) {
                w.isLongerThanMax = true;
                w.extraLength = y.substring(t, z)
            }
            w.isTruncated = w.isLongerThanSmall || w.isLongerThanMed || w.isLongerThanMax;
            x.remove();
            v.removeClass("hidden").find(".article-title").html(Mustache.render(b.articleTitle, w))
        }
    };
    this.refreshRewardsBalance = function() {
        AARP.Everywhere.User.getUserInfo(l, function() {
            console.log("cannot refresh user rewards for good balance, error getting user or not logged in")
        })
    };
    var o = function o() {
        for (var s = arguments.length, t = Array(s), u = 0; u < s; u++) {
            t[u] = arguments[u]
        }
        return function(v) {
            return t.reduce(function(x, w) {
                return w(x)
            }, v)
        }
    };
    var k = function k(s) {
        return function(t) {
            return s(t)
        }
    };
    var n = function n(s) {
        return location.href = s
    };
    var a = function a(t, s) {
        o(k(s), n)(t)
    };
    var q = function q(s) {
        return s.baseUrl + "?response_type=" + s.responseType + "&client_id=" + s.clientId + "&redirect_uri=" + s.redirectUri + "&state=" + s.state + "&scope=" + s.scope + (s.addtionalParams ? "&" + s.addtionalParams : "")
    };
    var r = function r(s) {
        return s.baseUrl + "?scope=" + s.scope + "&response_type=" + s.responseType + "&redirect_uri=" + s.redirectUri + "&state=" + s.state + "&client_id=" + s.clientId + (s.addtionalParams ? "&" + s.addtionalParams : "")
    };
    return {
        login: (function() {
            return a(AARP.Everywhere.LOGIN_DATA, q)
        }),
        register: (function() {
            return a(AARP.Everywhere.REGISTER_DATA, r)
        }),
        init: this.init,
        renderArticleTitle: this.renderArticleTitle,
        refreshRewardsBalance: this.refreshRewardsBalance
    }
}();
AARP.Everywhere.SegmentedSlider = new function() {
    var k = null,
        g = {
            relatedLinks: '{{#linkTitle}}{{#linkHref}}<li><span class="icon-flexible-slider-list-menu"></span><a href="{{linkHref}}{{trackingText}}"{{#newWindow}} target="_blank"{{/newWindow}}>{{linkTitle}}</a></li>{{/linkHref}}{{/linkTitle}}',
            slide: '<li class="slide {{display}}"><div class="slide-wrap row"><div class="image col-sm-7"><a href="{{href}}{{trackingText}}"><div class="lazy-container" style="margin-bottom: 57%"><img data-image data-original-ratio=".57" alt="{{title}}" data-original-src="https://' + AARP.Everywhere.cdnhost + '{{image}}" class="lazyload"/><noscript> <img src="https://' + AARP.Everywhere.cdnhost + '{{largeTabletImg}}" alt="{{title}}"> </noscript> </div></a></div><div class="list col-sm-5">{{#brand}}<div class="brandamp-promo-component brandamp"><p>{{{brandAmpHTML}}}</p></div>{{/brand}}{{^brand}}{{#subCategory}}<h2 class="aarpe-topic">{{subCategory}}</h2>{{/subCategory}}{{/brand}}<h3><a href="{{href}}?intcmp={{trackingID}}-FLXSLDR-SLIDE{{slideNum}}-MAIN">{{title}}</a></h3>{{#description}}<p>{{description}}</p>{{/description}}{{#relatedLinks}}<ul>{{{relatedLinks}}}</ul>{{/relatedLinks}}</div></div></li>',
            errorMessage: '<section class="error">{{#isSpanish}}Se ha producido un error al cargar este contenido. Por favor, inténtelo de nuevo más tarde.{{/isSpanish}}{{^isSpanish}}There was an error loading this content.  Please try again later.{{/isSpanish}}</section>'
        };
    this.init = function() {
        k = document.getElementsByClassName("aarpe-segmented-slider");
        if (k.length === 0) {
            return
        } else {
            k = k[0]
        }
        f();
        if (window.addEventListener) {
            window.addEventListener("load", d, false)
        } else {
            if (window.attachEvent) {
                window.attachEvent("onload", d)
            } else {
                window.onload = d
            }
        }
    };

    function d() {
        AARP.Foundation.LazyLoad.load()
    }

    function f() {
        var l = k.getAttribute("data-aarpesegslidemax") || 10,
            n = k.getAttribute("data-aarpesegslidedefault"),
            m = "/etc/aarp/datashare/everywhereFavoriteSegments/_jcr_content/segmented-slides";
        m += ".number-of-slides=" + l;
        m += "." + AARP.Everywhere.SegmentData.getSegmentsURLString(n);
        m += "," + n;
        m += ".json";
        var o = new XMLHttpRequest();
        o.open("GET", m, true);
        o.onreadystatechange = function() {
            if (o.readyState == o.DONE) {
                if (o.status == 200) {
                    j(JSON.parse(o.responseText))
                } else {
                    h(o.responseText)
                }
            }
        };
        o.send()
    }

    function e(m, l, q) {
        var p = m;
        var n = m.lastIndexOf(".");
        if (n > 0) {
            var o = p.substr(n);
            p = p.substr(0, n) + ".web." + l + "." + q + o
        }
        return p
    }

    function b(o, p, m, n) {
        var l = i(o);
        if (l.length === 0) {
            l = "?intcmp=" + p + "-FLXSLDR-SLIDE" + n + "-RL" + m
        }
        return l
    }

    function c(o, q, m) {
        var n = i(o);
        var l = "";
        var p = (i(q) == "true" ? "_NEW" : null);
        if (n.length > 0) {
            l = "<p><a href='" + n + "'target='" + p + "'>PAID CONTENT</a><span class='sponsor'>" + m + "</span></p>"
        } else {
            l = "<p>PAID CONTENT<span class='sponsor'>" + m + "</span></p>"
        }
        return l
    }

    function i(l) {
        return l ? l.trim() : ""
    }

    function j(n) {
        var w = k.getElementsByClassName("aarpe-slideshow")[0],
            m = k.getAttribute("aarpesegslidetracking"),
            v = n.length,
            p = "",
            r = "",
            q, s, t, l, u = 0;
        for (q = 0; q < v; q++) {
            t = q + 1;
            r = "";
            r += a(i(n[q].relatedLink1), i(n[q].relatedLinkText1), n[q].newWindow1, b(i(n[q].relatedLinkOverrideTracking1), m, 1, t));
            r += a(i(n[q].relatedLink2), i(n[q].relatedLinkText2), n[q].newWindow2, b(i(n[q].relatedLinkOverrideTracking2), m, 2, t));
            r += a(i(n[q].relatedLink3), i(n[q].relatedLinkText3), n[q].newWindow3, b(i(n[q].relatedLinkOverrideTracking3), m, 3, t));
            l = i(n[q].image);
            var o = i(n[q].overrideTracking);
            if (o.length === 0) {
                o = "?intcmp=" + m + "-FLXSLDR-SLIDE" + t + "-IMAGE"
            }
            s = {
                href: i(n[q].articleUrl),
                image: l,
                title: i(n[q].descriptionHeader),
                description: i(n[q].briefDescriptionText),
                subCategory: i(n[q].subCategory),
                relatedLinks: r,
                trackingText: o,
                brand: i(n[q].brand),
                amp: i(n[q].amp),
                by: i(n[q].by),
                sponsor: i(n[q].sponsor),
                brandAmpLink: i(n[q].brandAmpLink),
                advertiser: i(n[q].advertiser),
                advertiserLink: i(n[q].advertiserLink),
                openNewWindowBrandAmp: (i(n[q].openNewWindowBrandAmp) == "true" ? "_NEW" : null),
                openNewWindowAdvertiser: (i(n[q].openNewWindowAdvertiser) == "true" ? "_NEW" : null),
                brandAmpHTML: (c(n[q].brandAmpLink, n[q].openNewWindowBrandAmp, n[q].advertiser))
            };
            if (q > 0) {
                s.display = "hide";
                s.lazy = "lazy"
            }
            p += Mustache.render(g.slide, s)
        }
        k.getElementsByClassName("slides")[0].innerHTML = p;
        u = w.children[0].querySelectorAll(".slide").length;
        if (u > 0) {
            AARP.Foundation.AdaptImages.adapt();
            if (!!AARP && !!AARP.Everywhere && !!AARP.Everywhere.callBxslider && (document.readyState !== "uninitialized" && document.readyState !== "loading")) {
                AARP.Everywhere.callBxslider.init()
            }
        } else {
            h()
        }
    }

    function a(n, o, m, l) {
        return Mustache.render(g.relatedLinks, {
            linkHref: n,
            linkTitle: o,
            newWindow: m,
            trackingText: l
        })
    }

    function h() {
        k.classList.add("error-loading");
        var l = k.getElementsByClassName("aarpe-slideshow");
        l.after(Mustache.render(g.errorMessage, {
            isSpanish: AARP.Everywhere.isSpanish
        }))
    }
}();
AARP.Everywhere.FlexibleSlider = new function() {
    var b = null;
    this.init = function() {
        b = $aarpe(".aarpe-flexible-slider.flexible-slider-container");
        var c = $aarpe(".slide:first");
        AARP.Foundation.AdaptImages.adapt();
        if (window.addEventListener) {
            window.addEventListener("load", a, false)
        } else {
            if (window.attachEvent) {
                window.attachEvent("onload", a)
            } else {
                window.onload = a
            }
        }
    };

    function a() {
        AARP.Foundation.LazyLoad.load()
    }
}();
(function() {
    if (typeof window.CustomEvent === "function") {
        return false
    }

    function a(c, d) {
        d = d || {
            bubbles: false,
            cancelable: false,
            detail: undefined
        };
        var b = document.createEvent("CustomEvent");
        b.initCustomEvent(c, d.bubbles, d.cancelable, d.detail);
        return b
    }
    a.prototype = window.Event.prototype;
    window.CustomEvent = a
})();
(function(a) {
    a.forEach(function(c) {
        if (c.hasOwnProperty("append")) {
            return
        }
        Object.defineProperty(c, "append", {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function b() {
                var d = Array.prototype.slice.call(arguments),
                    e = document.createDocumentFragment();
                d.forEach(function(f) {
                    var g = f instanceof Node;
                    e.appendChild(g ? f : document.createTextNode(String(f)))
                });
                this.appendChild(e)
            }
        })
    })
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);
"use strict";

function _objectSpread(d) {
    for (var b = 1; b < arguments.length; b++) {
        var c = arguments[b] != null ? arguments[b] : {};
        var a = Object.keys(c);
        if (typeof Object.getOwnPropertySymbols === "function") {
            a = a.concat(Object.getOwnPropertySymbols(c).filter(function(e) {
                return Object.getOwnPropertyDescriptor(c, e).enumerable
            }))
        }
        a.forEach(function(e) {
            _defineProperty(d, e, c[e])
        })
    }
    return d
}

function _defineProperty(c, a, b) {
    if (a in c) {
        Object.defineProperty(c, a, {
            value: b,
            enumerable: true,
            configurable: true,
            writable: true
        })
    } else {
        c[a] = b
    }
    return c
}

function _typeof(b) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        a = function a(c) {
            return typeof c
        }
    } else {
        a = function a(c) {
            return c && typeof Symbol === "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c
        }
    }
    return a(b)
}
window.AARP = window.AARP || {};
AARP.Externals = {
    loadOnInit: {},
    _pageJsCallbacks: [],
    _pending: [],
    _failed: [],
    _loaded: [],
    _googleConfig: {
        maps: {
            libraries: {}
        }
    },
    _createEvent: function _createEvent(b) {
        var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "AARP:DependencyAvailable";
        return new CustomEvent(a, {
            detail: {
                identifier: b
            }
        })
    },
    _dependencyAvailable: function _dependencyAvailable(a) {
        var b = AARP.Externals._createEvent(a);
        window.dispatchEvent(b);
        AARP.Externals._pending.splice(AARP.Externals._pending.indexOf(a), 1);
        AARP.Externals._loaded.push(a)
    },
    _dependencyFailed: function _dependencyFailed(a) {
        var b = AARP.Externals._createEvent(a, "AARP:DependencyFailed");
        window.dispatchEvent(b);
        AARP.Externals._pending.splice(AARP.Externals._pending.indexOf(a), 1);
        AARP.Externals._failed.push(a)
    },
    isLoading: function isLoading(a) {
        if (AARP.Externals._loaded.indexOf(a) != -1 || AARP.Externals._pending.indexOf(a) != -1) {
            return true
        }
        return false
    },
    config: {},
    throwMissingArgError: function throwMissingArgError(a) {
        throw new Error("No ".concat(a, ", this is required"))
    },
    attachAsyncDependency: function attachAsyncDependency() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var h = arguments;
        var g = _typeof(e) === "object" ? e : {
                id: h.length > 0 ? h[0] : null,
                url: h.length > 1 ? h[1] : null,
                success: h.length > 2 ? h[2] : function() {},
                deferInstead: h.length > 3 ? h[3] : false,
                usesJsonPCallback: h.length > 4 ? h[4] : false
            },
            c = g.id,
            b = g.url,
            j = g.success,
            d = g.failure,
            f = g.deferInstead,
            a = g.usesJsonPCallback;
        !c && this.throwMissingArgError("id");
        !b && this.throwMissingArgError("url");
        if (AARP.Externals._loaded.indexOf(c) != -1) {
            if (typeof j == "function") {
                j()
            } else {
                if (Array.isArray(j)) {
                    j.map(function(k) {
                        k()
                    })
                }
            }
            return
        }
        if (j) {
            window.addEventListener("AARP:DependencyAvailable", function(k) {
                if (k.detail.identifier == c) {
                    if (typeof j == "function") {
                        j()
                    } else {
                        if (Array.isArray(j)) {
                            j.map(function(l) {
                                l()
                            })
                        }
                    }
                }
            })
        }
        if (d) {
            window.addEventListener("AARP:DependencyFailed", function(k) {
                if (k.detail.identifier == c) {
                    if (typeof d == "function") {
                        d()
                    } else {
                        if (Array.isArray(d)) {
                            d.map(function(l) {
                                l()
                            })
                        }
                    }
                }
            })
        }
        if (AARP.Externals._pending.indexOf(c) != -1) {
            return
        }
        if (!b) {
            return
        }
        AARP.Externals._pending.push(c);
        var i = document.createElement("script");
        i.type = "text/javascript";
        i.src = b;
        if (!a) {
            i.onload = function() {
                AARP.Externals._dependencyAvailable(c)
            }
        }
        if (d) {
            i.onerror = function() {
                AARP.Externals._dependencyFailed(c)
            }
        }
        if (f) {
            i.defer = true
        } else {
            i.async = true
        }
        document.querySelector("head").appendChild(i)
    },
    attachGoogleMaps: function attachGoogleMaps(d) {
        var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var e = arguments.length > 2 ? arguments[2] : undefined;
        a.map(function(f) {
            AARP.Externals._googleConfig.maps.libraries[f] = true
        });
        var b = "";
        if (Object.keys(AARP.Externals._googleConfig.maps.libraries).length) {
            b = "&libraries=".concat(Object.keys(AARP.Externals._googleConfig.maps.libraries).join(","))
        }
        var c = AARP.Externals.getJsonPCallbackName();
        AARP.Externals.loadOnInit["google-maps"] = _objectSpread({}, AARP.Externals.loadOnInit["google-maps"], {
            url: "https://maps.googleapis.com/maps/api/js?key=".concat(d).concat(b, "&callback=").concat(c),
            defer: true,
            jsonp: true
        });
        if (e) {
            AARP.Externals.attachLoadOnInitCallback("google-maps", e)
        }
        AARP.Externals.generateJsonPCallback("google-maps", c)
    },
    getJsonPCallbackName: function getJsonPCallbackName() {
        return "AARPExternalsJsonP".concat(new Date().getTime())
    },
    generateJsonPCallback: function generateJsonPCallback(b, a) {
        window[a] = function() {
            AARP.Externals._dependencyAvailable(b)
        }
    },
    attachLoadOnInitCallback: function attachLoadOnInitCallback(c, f) {
        var d = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "success";
        var b = AARP.Externals.loadOnInit[c] || {};
        if (d == "success") {
            var a = b.callbacks || [];
            a.push(f);
            AARP.Externals.loadOnInit[c] = Object.assign(b, {
                callbacks: a
            })
        } else {
            if (d == "failure") {
                var e = b.failureCallbacks || [];
                e.push(f);
                AARP.Externals.loadOnInit[c] = Object.assign(b, {
                    failureCallbacks: e
                })
            }
        }
    },
    attachPageJsCallback: function attachPageJsCallback(a) {
        if (!~AARP.Externals._loaded.indexOf("page-js")) {
            AARP.Externals._pageJsCallbacks.push(a)
        } else {
            a()
        }
    },
    initialize: function initialize() {
        for (var b in AARP.Externals.loadOnInit) {
            var a = AARP.Externals.loadOnInit[b];
            AARP.Externals.attachAsyncDependency({
                id: b,
                url: a.url,
                success: a.callbacks,
                failure: a.failureCallbacks,
                deferInstead: a.defer,
                usesJsonPCallback: a.jsonp
            })
        }
    }
};
"use strict";
var setMoatPrebidData = function setMoatPrebidData(a) {
    if (window.moatPrebidApi && typeof window.moatPrebidApi.slotDataAvailable === "function" && window.moatPrebidApi.slotDataAvailable()) {
        if (a) {
            return window.moatPrebidApi.setMoatTargetingForSlot(a)
        } else {
            return window.moatPrebidApi.setMoatTargetingForAllSlots()
        }
    } else {
        return false
    }
};
"use strict";
var aarpegpt = new function() {
    var a = function a(c, d, b) {
        AARP.ads.loadAd(d, b)
    };
    return {
        loadAd: a
    }
}();
AARP.ads = new function() {
    var r = arguments;
    var j = [];
    var L = function L(M) {
        j.push(M)
    };
    var h = document.querySelector("meta[name='contentId']");
    var v = h ? h.getAttribute("content") : "";
    var B = document.documentElement.clientWidth;
    var E = false;
    var q = false;
    var l = false;
    var A = 1;
    var f = 1;
    var d = false;
    var p = {
        leader: {
            pos: ["leader", "hpleader"],
            sizeArr: [
                [728, 90],
                [8, 1], "fluid"
            ],
            viewportWidths: [
                [
                    [0, 1, 2],
                    [0, 1, 2],
                    []
                ]
            ],
            counter: 1
        },
        "728x90": {
            pos: ["leader"],
            sizeArr: [
                [300, 250],
                [728, 90]
            ],
            viewportWidths: [
                [
                    [1],
                    [1],
                    [0]
                ]
            ]
        },
        "300x250": {
            pos: ["null"],
            sizeArr: [
                [300, 250],
                [300, 600],
                [728, 90]
            ],
            viewportWidths: [
                [
                    [0],
                    [0],
                    [0]
                ],
                [
                    [0],
                    [2],
                    [0]
                ],
                [
                    [0, 1],
                    [0, 1],
                    [0]
                ],
                [
                    [1],
                    [0, 1],
                    [0]
                ]
            ]
        },
        "300x0": {
            pos: ["null"],
            sizeArr: [
                [300, 250],
                [300, 600],
                [728, 90]
            ],
            viewportWidths: [
                [
                    [0, 1],
                    [2],
                    [0]
                ]
            ],
            counter: 1
        },
        "360x207": {
            pos: ["embed3"],
            sizeArr: "fluid"
        },
        "300x600": {
            pos: ["null", "gameplay"],
            sizeArr: [300, 600]
        },
        "970x250": {
            pos: ["billboard"],
            sizeArr: [
                [728, 90],
                [970, 250],
                [4, 1]
            ],
            viewportWidths: [
                [
                    [0, 1, 2],
                    [0, 2],
                    [2]
                ]
            ]
        },
        "160x600": {
            pos: ["sky"],
            sizeArr: [160, 600]
        },
        "2x2": {
            sizeArr: [2, 2],
            pos: ["dlist"]
        },
        "3x3": {
            sizeArr: [3, 3],
            pos: ["iscroll"]
        },
        "4x4": {
            pos: ["isnative", "embed2"],
            sizeArr: "fluid",
            counter: 1
        },
        qktk: {
            pos: ["qktk"],
            sizeArr: [
                [300, 140]
            ],
            viewportWidths: [
                [
                    [0],
                    [0],
                    []
                ]
            ]
        },
        hdtxt: {
            pos: ["hdtxt"],
            sizeArr: "fluid",
            counter: 1
        },
        lto: {
            pos: ["embed-lto"],
            sizeArr: "fluid",
            counter: 1
        }
    };
    var I = function I() {
        l = F();
        E = t("noMobileScrollerAd");
        m();
        if (l && B < 768 && !E) {
            o()
        }
        G()
    };
    var m = function m(P, M, O) {
        var N = !P && !M ? true : false;
        googletag.cmd.push(function() {
            C();
            if (N) {
                googletag.pubads().enableSingleRequest()
            }
            googletag.enableServices();
            if (N) {
                j.map(function(Q) {
                    if (!Q.slot) {
                        b(Q.id, Q.size);
                        googletag.display(Q.id)
                    }
                });
                if (window.moatPrebidApi) {
                    setMoatPrebidData()
                }
                if (typeof LUX !== "undefined") {
                    c()
                }
            } else {
                b(P, M, O, true);
                googletag.display(P)
            }
        })
    };
    var b = function b(N, O, Z, W) {
        var ab = !!document.getElementsByName("aarpAdUnit").length;
        var P = p[O].sizeArr;
        var U = l && !d ? u() : false;
        var R = ab ? i() : z(O);
        var ac = document.getElementById(N);
        var X = !!document.location.hostname.match("games");
        var V = p[O].pos[0];
        var T = 0;
        var Q = "no";
        if (Z) {
            if (ac.classList.contains("aarp-c-member-benefits-offer-list__adslot-mobile@mobile") && (B > 1024 || B > 767 && B <= 1024)) {
                return
            }
            if (ac.classList.contains("aarp-c-sub-category__ad-slot-tablet@mobile") && (B < 768 || B > 1024)) {
                return
            }
            if (ac.classList.contains("aarp-c-sub-category__ad-slot-desktop@mobile") && (B > 767 && B <= 1024 || B < 768)) {
                return
            }
            if (ac.classList.contains("aarp-c-member-benefits-offer-list__adslot@mobile") && B < 768) {
                return
            }
        }
        switch (O) {
            case "leader":
                if (q) {
                    V = p[O].pos[1]
                } else {
                    V += p[O].counter;
                    p[O].counter++
                }
                break;
            case "728x90":
                V += p.leader.counter;
                p.leader.counter++;
                break;
            case "300x600":
                if (X) {
                    V = "gameplay"
                }
                break;
            case "300x250":
                var aa = n(ac, "everywhere-top-content") && f <= 2;
                if (n(ac, "adsFlexibleSliderParsys") || n(ac, "aarpe-column-control_2-column-stacked") || aa) {
                    V = "chmodule";
                    T = aa ? 0 : 1
                } else {
                    if (n(ac, "fixed-ad300-1")) {
                        T = U ? 0 : 2
                    } else {
                        if (U && n(ac, "fixed-ad300-2")) {
                            T = 3
                        } else {
                            if (Z) {
                                V = "mbportal"
                            }
                        }
                    }
                }
                break;
            case "300x0":
                if (n(ac, "aarpe-landing-right-rail")) {
                    V = "topic"
                }
                break;
            case "hdtxt":
                V += p[O].counter;
                p[O].counter++;
                break;
            case "lto":
                if (p[O].counter > 4) {
                    p[O].counter = 1
                }
                V += p[O].counter;
                p[O].counter++;
                break;
            case "4x4":
                Q = "yes";
                V += p[O].counter;
                p[O].counter++;
                break
        }
        if (V === "null" && !!n(ac, "aarpe-right-rail" || !!n(ac, "arena-ad-col") || !!n(ac, "aarpe-landing-right-rail"))) {
            if (document.getElementsByClassName("aarpe-slideshow slideshow").length > 0 && A === 1) {
                V = "sldshow"
            } else {
                if (document.getElementsByClassName("aarpe-trivia").length > 0 && A === 1) {
                    V = "quiz"
                } else {
                    V = "rightrail" + A
                }
            }
            A++
        }
        var Y = googletag.defineSlot(R, P, N).addService(googletag.pubads()).setTargeting("pos", V).setTargeting("load", f).setTargeting("atf", Q);
        if (p[O].viewportWidths) {
            var S = p[O].viewportWidths[T].map(function(ad) {
                return ad.map(function(ae) {
                    return p[O].sizeArr[ae]
                })
            });
            var M = googletag.sizeMapping().addSize([1025, 0], S[0]).addSize([768, 0], S[1]).addSize([0, 0], S[2]).build();
            Y.defineSizeMapping(M)
        }
        if (!Z) {
            j.filter(function(ae, ad) {
                if (ae.id == N) {
                    j[ad].slot = Y
                }
            })
        }
        if (W && window.moatPrebidApi) {
            setMoatPrebidData(Y)
        }
        f++;
        if (O === "leader") {
            googletag.pubads().addEventListener("slotRenderEnded", function(ad) {
                if (ad.slot === Y && ad.size != "728,90") {
                    document.getElementById(N).parentNode.classList.add("dynamic-leader")
                }
            })
        }
    };
    var z = function z(O) {
        var R = document.location.toString().indexOf("espanol") > -1;
        var V = new RegExp("(/content/aarpe?/e[n|s]/home)", "gi");
        var N = v.replace(V, "").split("/");
        var Z = N.map(function(ac, ab) {
            if (ac.indexOf("info-") > -1) {
                return ab
            }
        });
        var Y = Z.filter(function(ab) {
            return ab
        });
        var W = Y > 0 ? Y : true;
        var P = w("category");
        var U = location.hostname.split(".").shift();
        var X = R ? "esp" : "eng";
        var T = U == "www" || !!U.match(/\-[p]/) ? "" : "-s";
        var M = O == "lto" ? "aarpe-lto-" + X : "aarpe-" + X;
        var S = ["1175"];
        S.push(M + T);
        N.filter(function(ac, ab) {
            if (ab < Y && ac.length > 0 || W == true && ac.length > 0) {
                S.push(ac)
            }
        });
        if (W == true) {
            S.push("homepage")
        }
        if (N.length === 1) {
            q = true
        }
        if (P) {
            S = S.slice(0);
            if (S[S.length - 1] == "homepage") {
                S.pop()
            }
            var Q = P.split("-");
            for (var aa = 0; aa < Q.length; aa++) {
                S.push(Q[aa])
            }
        }
        S = S.join("/");
        return S
    };
    var i = function i() {
        var Q = ["1175"];
        var P = document.getElementsByName("aarpAdUnit");
        var M = [];
        for (var N = 0; N < P.length; N++) {
            var O = P[N].getAttribute("content");
            if (O) {
                M.push(O)
            }
        }
        if (M.length > 0) {
            Q = [Q[0]].concat(M).join("/")
        }
        K();
        return Q
    };
    var K = function K() {
        window.addEventListener("load", function() {
            var M = document.querySelectorAll(".aarpe-ad");
            var N = null;
            if (M.length > 0) {
                M.forEach(function(O) {
                    N = O.innerHTML.length == 0;
                    if (N) {
                        m(O.id, O.dataset.adsize)
                    }
                })
            }
        })
    };
    var s = function s() {
        var M = null;
        if (B < 768) {
            M = "phn"
        } else {
            if (B > 767 && B < 1025) {
                M = "tblt"
            } else {
                M = "dsktp"
            }
        }
        return M
    };
    var t = function t(O) {
        var N = document.getElementById(O);
        if (N) {
            return N.content
        } else {
            var M = document.getElementsByName(O);
            if (M[0]) {
                return M[0].content
            } else {
                return null
            }
        }
    };
    var g = function g() {
        var P = t("metaSubject1");
        var N = t("metaSubject2");
        var M = t("metaSubject3");
        var T = !!P || !!N || !!M ? k(P, N, M) : null;
        var S = [];
        if (T) {
            var R = T.tax1;
            var Q = T.tax2;
            var O = T.tax3;
            if (R) {
                S.push(R)
            }
            if (Q) {
                S.push(Q)
            }
            if (O) {
                S.push(O)
            }
            if (S.length > 0) {
                return S
            }
        } else {
            return null
        }
    };
    var k = function k(Q, P, O) {
        var R = Q && Q.match(/\//) ? Q.split("/") : Q.split(":");
        var N = P && P.match(/\//) ? P.split("/") : P.split(":");
        var M = O && O.match(/\//) ? O.split("/") : O.split(":");
        var U;
        var T;
        var S;
        if (R) {
            U = H(R.pop())
        }
        if (N) {
            T = H(N.pop())
        }
        if (M) {
            S = H(M.pop())
        }
        if (U || T || S) {
            return {
                tax1: U,
                tax2: T,
                tax3: S
            }
        }
        return null
    };
    var H = function H(M) {
        M = M.trim().replace(/^[^\w]+/, "").replace(/[^\w]+$/, "");
        M = M.replace(/[^\w-]+/g, "_");
        M = M.replace(/\s+/g, "_");
        if (r.length > 1) {
            M = M.toLowerCase()
        }
        return M
    };
    var w = function w(O) {
        var N = window.location.search.slice(1);
        var Q = N.split("&");
        var M = null;
        for (var P = 0; P < Q.length; P++) {
            if (Q[P].split("=")[0] == O) {
                M = Q[P].split("=")[1];
                break
            }
        }
        return M
    };

    function y(N) {
        var P = N + "=";
        var M = document.cookie.split(";");
        for (var O = 0; O < M.length; O++) {
            var Q = M[O];
            while (Q.charAt(0) == " ") {
                Q = Q.substring(1, Q.length)
            }
            if (Q.indexOf(P) == 0) {
                return Q.substring(P.length, Q.length)
            }
        }
        return null
    }
    var a = function a(N) {
        var M = null;
        if (typeof Krux === "function") {
            if (N == "ksg" && Krux.segments) {
                M = Krux.segments
            }
            if (N == "kuid" && Krux.user) {
                M = Krux.user
            }
        }
        return M
    };
    var x = function x() {
        var N = y("at").split("%26ms%3D")[1].split("%26")[0];
        var S = "true";
        var R = null;
        var Q = null;
        N = N ? 0 : 1;
        var T = "status-" + N;
        if (T != "status-unknown") {
            var U = y("at").split("%26ftr%3D")[1].split("%26")[0];
            if (!isNaN(U) && U == 1) {
                Q = "true"
            }
            var P = t("metaDateToday");
            if (P) {
                P = new Date(P.replace(/-/g, "/"));
                var O = new Date(y("at").split("%26me%3D")[1].split("%26")[0]);
                var M = O.getMonth() + 1 - P.getMonth() + 12 * (O.getFullYear() - P.getFullYear());
                if (O > P) {
                    if (M <= 2) {
                        R = "expires2"
                    } else {
                        if (M > 2 && M <= 6) {
                            R = "expires6"
                        } else {
                            if (M > 6 && M <= 12) {
                                R = "expires12"
                            } else {
                                if (M > 12 && M <= 24) {
                                    R = "expires24"
                                } else {
                                    R = "expires25"
                                }
                            }
                        }
                    }
                } else {
                    R = "expires25"
                }
            }
        }
        return {
            dem1: T,
            dem2: S,
            dem3: R,
            dem4: Q
        }
    };
    var C = function C() {
        var O = !!document.getElementsByName("aarpAdUnit").length;
        var Q = {
            article: F(true),
            taxo: g(),
            pgid: t("contentId"),
            cmt: t("metaComments"),
            source: t("metaSource"),
            grab: "all",
            adv_accept: t("houseAds"),
            scrn: s(),
            ath: t("metaAuthor"),
            metakw: t("metaKeywords"),
            kw: y("GlobalSearchTerm"),
            bundle: t("metaS18"),
            kuid: a("kuid"),
            ksg: a("ksg"),
            dem1: "status-unknown",
            dem2: null,
            dem3: null,
            dem4: null,
            ointcmp: w("intcmp"),
            ver: t("siteVersion") || "every",
            custom: null
        };
        if (y("at")) {
            Q.dem1 = x().dem1;
            Q.dem2 = x().dem2;
            Q.dem3 = x().dem3;
            Q.dem4 = x().dem4
        }
        if (O) {
            var S = t("aarpAdUnitSource");
            var T = t("aarpAdUnitAth");
            var M = t("aarpAdUnitKW");
            var R = t("aarpAdUnitCustom");
            if (!!S && S.length > 0) {
                Q.source = S
            }
            if (!!T && T.length > 0) {
                Q.ath = T
            }
            if (!!M && M.length > 0) {
                Q.kw = M
            }
            if (!!R && R.length > 0) {
                if (R.indexOf("=") > -1) {
                    var N = R.split("=");
                    if (!!N[0] && !!N[1]) {
                        Q[N[0]] = [N[1]]
                    }
                } else {
                    Q.custom = R
                }
            }
        }
        for (var P in Q) {
            if (Q.hasOwnProperty(P)) {
                googletag.pubads().setTargeting(P, String(Q[P]))
            }
        }
    };
    var n = function n(O, M) {
        var P = document.getElementsByClassName(M);
        if (P.length > 0) {
            while (O !== null) {
                var N = O.parentElement;
                if (N !== null && N.className.indexOf(M) > -1) {
                    return N
                }
                O = N
            }
        } else {
            return null
        }
    };
    var F = function F(M) {
        d = t("page_title") == "blog" && document.getElementsByClassName("post-template-default").length > 0;
        var P = t("isArticle") == "true";
        var O = d || P ? true : false;
        if (M) {
            var N = document.getElementsByClassName("aarpe-all-article-content").length;
            O = N > 1 ? "load" + N : null
        }
        return O
    };
    var u = function u() {
        var Q = !!t("enableStickyRightRailAd") || document.getElementsByClassName("fixed-ad300-2").length > 0;
        var O = t("contentId").indexOf("info-") > -1;
        var N = document.querySelectorAll(".everywhere-right-rail")[0];
        if (!!N) {
            var M = N.querySelectorAll(".section").length > 1;
            var P = !!((O || Q) && !M);
            return P
        } else {
            return false
        }
    };
    var c = function c() {
        googletag.pubads().addEventListener("slotRenderEnded", function(N) {
            var M = N.slot.getTargeting("pos").pop();
            if (!N.isEmpty && M) {
                LUX.mark(M + " Init")
            }
        });
        googletag.pubads().addEventListener("slotOnload", function(N) {
            var M = N.slot.getTargeting("pos").pop();
            if (M) {
                LUX.mark(M)
            }
        })
    };
    var D = function D(N) {
        var P = j;
        var M = false;
        if (N) {
            for (var O = 0; O < P.length; O++) {
                M = P[O];
                if (P[O].id.match(N.id)) {
                    break
                }
            }
            if (M) {
                googletag.cmd.push(function() {
                    googletag.destroySlots([M.slot]);
                    m(M.id, M.size)
                })
            }
        } else {
            googletag.cmd.push(function() {
                googletag.pubads().updateCorrelator();
                P.map(function(R, Q) {
                    M = P[Q];
                    googletag.destroySlots([M.slot]);
                    m(M.id, M.size)
                })
            })
        }
    };
    var o = function o() {
        var O = document.createElement("div");
        O.setAttribute("aria-hidden", "true");
        O.id = "mobile-scroller-ad-unit";
        O.className = "aarpe-ad en";
        O.dataset.adsize = "3x3";
        var M = d ? "entry-content" : "everywhere-article-content";
        var N = document.getElementsByClassName(M).length > 0 ? J(M)[0] : false;
        if (N) {
            document.getElementsByClassName(M)[0].children[N].appendChild(O);
            aarpegpt.loadAd(null, O.id, O.dataset.adsize)
        }
    };
    var J = function J(Q) {
        var W = document.getElementsByClassName(Q)[0];
        var N = W.children;
        var T = Math.floor(W.offsetHeight / 2);
        var X = N.length;
        var Y = 0;
        var U = 0;
        var V = 0;
        for (var S = 0; S < X; S++) {
            Y = Y + N[S].offsetHeight;
            if (Y > T) {
                var P = N[S].childNodes.length;
                var M = 0;
                var O = 0;
                for (var R = 0; R < P; R++) {
                    O = N[S].offsetHeight;
                    M += O;
                    V = R;
                    if (M > T) {
                        break
                    }
                }
                U = S;
                break
            }
        }
        return [U, V]
    };
    var G = function G() {
        var N;
        var M = function M() {
            if (!N) {
                N = setTimeout(function() {
                    N = null;
                    O()
                }, 200)
            }
        };
        var O = function O() {
            var P = j.filter(function(Q) {
                if (Q.size !== "leader" && !!p[Q.size].viewportWidths) {
                    return Q.slot
                }
            });
            googletag.pubads().refresh(P.map(function(Q) {
                return Q.slot
            }))
        };
        window.addEventListener("resize", M, false)
    };
    var e = function e() {
        A = 1;
        f = 1;
        p["300x0"].counter = 1;
        m()
    };
    return {
        slots: L,
        init: I,
        loadAd: m,
        refreshAdsBySlot: D,
        setupInContext: e
    }
}();
"use strict";
var aarpegpt = new function() {
    var a = function a(c, d, b) {
        AARP.ads.loadAd(d, b)
    };
    return {
        loadAd: a
    }
}();
"use strict";
(function() {
    if (typeof AARP.ads !== "undefined") {
        AARP.Externals.attachAsyncDependency({
            id: "moatHeaderTag",
            url: "https://z.moatads.com/aarpprebidheader57766173316/moatheader.js",
            success: function b() {
                AARP.readyStateLoader(function() {
                    AARP.ads.init()
                })
            },
            failure: function a() {
                AARP.readyStateLoader(function() {
                    AARP.ads.init()
                })
            }
        })
    }
})();