window.undefined = window.undefined;
Ext = {
    version: "3.1.0-MOL"
};
Ext.apply = function(o, c, defaults) {
    if (defaults) {
        Ext.apply(o, defaults)
    }
    if (o && c && typeof c == "object") {
        for (var p in c) {
            o[p] = c[p]
        }
    }
    return o
};
(function() {
    var idSeed = 0,
        toString = Object.prototype.toString,
        ua = navigator.userAgent.toLowerCase(),
        check = function(r) {
            return r.test(ua)
        },
        DOC = document,
        isStrict = DOC.compatMode == "CSS1Compat",
        isOpera = check(/opera/),
        isChrome = check(/chrome/),
        isWebKit = check(/webkit/),
        isSafari = !isChrome && check(/safari/),
        isSafari2 = isSafari && check(/applewebkit\/4/),
        isSafari3 = isSafari && check(/version\/3/),
        isSafari4 = isSafari && check(/version\/4/),
        isIE = !isOpera && check(/msie/),
        isIE7 = isIE && check(/msie 7/),
        isIE8 = isIE && check(/msie 8/),
        isIE6 = isIE && !isIE7 && !isIE8,
        isGecko = !isWebKit && check(/gecko/),
        isGecko2 = isGecko && check(/rv:1\.8/),
        isGecko3 = isGecko && check(/rv:1\.9/),
        isBorderBox = isIE && !isStrict,
        isWindows = check(/windows|win32/),
        isMac = check(/macintosh|mac os x/),
        isAir = check(/adobeair/),
        isLinux = check(/linux/),
        isSecure = /^https/i.test(window.location.protocol);
    if (isIE6) {
        try {
            DOC.execCommand("BackgroundImageCache", false, true)
        } catch (e) {}
    }
    Ext.apply(Ext, {
        SSL_SECURE_URL: isSecure && isIE ? 'javascript:""' : "about:blank",
        isStrict: isStrict,
        isSecure: isSecure,
        isReady: false,
        enableGarbageCollector: true,
        enableListenerCollection: false,
        enableNestedListenerRemoval: false,
        USE_NATIVE_JSON: false,
        applyIf: function(o, c) {
            if (o) {
                for (var p in c) {
                    if (!Ext.isDefined(o[p])) {
                        o[p] = c[p]
                    }
                }
            }
            return o
        },
        id: function(el, prefix) {
            return (el = Ext.getDom(el) || {}).id = el.id || (prefix || "ext-gen") + ++idSeed
        },
        extend: function() {
            var io = function(o) {
                for (var m in o) {
                    this[m] = o[m]
                }
            };
            var oc = Object.prototype.constructor;
            return function(sb, sp, overrides) {
                if (Ext.isObject(sp)) {
                    overrides = sp;
                    sp = sb;
                    sb = overrides.constructor != oc ? overrides.constructor : function() {
                        sp.apply(this, arguments)
                    }
                }
                var F = function() {},
                    sbp, spp = sp.prototype;
                F.prototype = spp;
                sbp = sb.prototype = new F;
                sbp.constructor = sb;
                sb.superclass = spp;
                if (spp.constructor == oc) {
                    spp.constructor = sp
                }
                sb.override = function(o) {
                    Ext.override(sb, o)
                };
                sbp.superclass = sbp.supr = function() {
                    return spp
                };
                sbp.override = io;
                Ext.override(sb, overrides);
                sb.extend = function(o) {
                    return Ext.extend(sb, o)
                };
                return sb
            }
        }(),
        override: function(origclass, overrides) {
            if (overrides) {
                var p = origclass.prototype;
                Ext.apply(p, overrides);
                if (Ext.isIE && overrides.hasOwnProperty("toString")) {
                    p.toString = overrides.toString
                }
            }
        },
        namespace: function() {
            var o, d;
            Ext.each(arguments, function(v) {
                d = v.split(".");
                o = window[d[0]] = window[d[0]] || {};
                Ext.each(d.slice(1), function(v2) {
                    o = o[v2] = o[v2] || {}
                })
            });
            return o
        },
        urlEncode: function(o, pre) {
            var empty, buf = [],
                e = encodeURIComponent;
            Ext.iterate(o, function(key, item) {
                empty = Ext.isEmpty(item);
                Ext.each(empty ? key : item, function(val) {
                    buf.push("&", e(key), "=", !Ext.isEmpty(val) && (val != key || !empty) ? Ext.isDate(val) ? Ext.encode(val).replace(/"/g, "") : e(val) : "")
                })
            });
            if (!pre) {
                buf.shift();
                pre = ""
            }
            return pre + buf.join("")
        },
        urlDecode: function(string, overwrite) {
            if (Ext.isEmpty(string)) {
                return {}
            }
            var obj = {},
                pairs = string.split("&"),
                d = decodeURIComponent,
                name, value;
            Ext.each(pairs, function(pair) {
                pair = pair.split("=");
                name = d(pair[0]);
                value = d(pair[1]);
                obj[name] = overwrite || !obj[name] ? value : [].concat(obj[name]).concat(value)
            });
            return obj
        },
        urlAppend: function(url, s) {
            if (!Ext.isEmpty(s)) {
                return url + (url.indexOf("?") === -1 ? "?" : "&") + s
            }
            return url
        },
        toArray: function() {
            return isIE ? function(a, i, j, res) {
                res = [];
                for (var x = 0, len = a.length; x < len; x++) {
                    res.push(a[x])
                }
                return res.slice(i || 0, j || res.length)
            } : function(a, i, j) {
                return Array.prototype.slice.call(a, i || 0, j || a.length)
            }
        }(),
        isIterable: function(v) {
            if (Ext.isArray(v) || v.callee) {
                return true
            }
            if (/NodeList|HTMLCollection/.test(toString.call(v))) {
                return true
            }
            return (typeof v.nextNode != "undefined" || v.item) && Ext.isNumber(v.length)
        },
        each: function(array, fn, scope) {
            if (Ext.isEmpty(array, true)) {
                return
            }
            if (!Ext.isIterable(array) || Ext.isPrimitive(array)) {
                array = [array]
            }
            for (var i = 0, len = array.length; i < len; i++) {
                if (fn.call(scope || array[i], array[i], i, array) === false) {
                    return i
                }
            }
        },
        iterate: function(obj, fn, scope) {
            if (Ext.isEmpty(obj)) {
                return
            }
            if (Ext.isIterable(obj)) {
                Ext.each(obj, fn, scope);
                return
            } else if (Ext.isObject(obj)) {
                for (var prop in obj) {
                    if (obj.hasOwnProperty(prop)) {
                        if (fn.call(scope || obj, prop, obj[prop], obj) === false) {
                            return
                        }
                    }
                }
            }
        },
        getDom: function(el) {
            if (!el || !DOC) {
                return null
            }
            return el.dom ? el.dom : Ext.isString(el) ? DOC.getElementById(el) : el
        },
        getBody: function() {
            return Ext.get(DOC.body || DOC.documentElement)
        },
        removeNode: isIE && !isIE8 ? function() {
            var d;
            return function(n) {
                if (n && n.tagName != "BODY") {
                    Ext.enableNestedListenerRemoval ? Ext.EventManager.purgeElement(n, true) : Ext.EventManager.removeAll(n);
                    d = d || DOC.createElement("div");
                    d.appendChild(n);
                    d.innerHTML = "";
                    delete Ext.elCache[n.id]
                }
            }
        }() : function(n) {
            if (n && n.parentNode && n.tagName != "BODY") {
                Ext.enableNestedListenerRemoval ? Ext.EventManager.purgeElement(n, true) : Ext.EventManager.removeAll(n);
                n.parentNode.removeChild(n);
                delete Ext.elCache[n.id]
            }
        },
        isEmpty: function(v, allowBlank) {
            return v === null || v === undefined || Ext.isArray(v) && !v.length || (!allowBlank ? v === "" : false)
        },
        isArray: function(v) {
            return toString.apply(v) === "[object Array]"
        },
        isDate: function(v) {
            return toString.apply(v) === "[object Date]"
        },
        isObject: function(v) {
            return !!v && Object.prototype.toString.call(v) === "[object Object]"
        },
        isPrimitive: function(v) {
            return Ext.isString(v) || Ext.isNumber(v) || Ext.isBoolean(v)
        },
        isFunction: function(v) {
            return toString.apply(v) === "[object Function]"
        },
        isNumber: function(v) {
            return typeof v === "number" && isFinite(v)
        },
        isString: function(v) {
            return typeof v === "string"
        },
        isBoolean: function(v) {
            return typeof v === "boolean"
        },
        isElement: function(v) {
            return !!v && v.tagName
        },
        isDefined: function(v) {
            return typeof v !== "undefined"
        },
        isOpera: isOpera,
        isWebKit: isWebKit,
        isChrome: isChrome,
        isSafari: isSafari,
        isSafari3: isSafari3,
        isSafari4: isSafari4,
        isSafari2: isSafari2,
        isIE: isIE,
        isIE6: isIE6,
        isIE7: isIE7,
        isIE8: isIE8,
        isGecko: isGecko,
        isGecko2: isGecko2,
        isGecko3: isGecko3,
        isBorderBox: isBorderBox,
        isLinux: isLinux,
        isWindows: isWindows,
        isMac: isMac,
        isAir: isAir
    });
    Ext.ns = Ext.namespace
})();
Ext.ns("Ext.util", "Ext.lib", "Ext.data");
Ext.elCache = {};
Ext.apply(Function.prototype, {
    createInterceptor: function(fcn, scope) {
        var method = this;
        return !Ext.isFunction(fcn) ? this : function() {
            var me = this,
                args = arguments;
            fcn.target = me;
            fcn.method = method;
            return fcn.apply(scope || me || window, args) !== false ? method.apply(me || window, args) : null
        }
    },
    createCallback: function() {
        var args = arguments,
            method = this;
        return function() {
            return method.apply(window, args)
        }
    },
    createDelegate: function(obj, args, appendArgs) {
        var method = this;
        return function() {
            var callArgs = args || arguments;
            if (appendArgs === true) {
                callArgs = Array.prototype.slice.call(arguments, 0);
                callArgs = callArgs.concat(args)
            } else if (Ext.isNumber(appendArgs)) {
                callArgs = Array.prototype.slice.call(arguments, 0);
                var applyArgs = [appendArgs, 0].concat(args);
                Array.prototype.splice.apply(callArgs, applyArgs)
            }
            return method.apply(obj || window, callArgs)
        }
    },
    defer: function(millis, obj, args, appendArgs) {
        var fn = this.createDelegate(obj, args, appendArgs);
        if (millis > 0) {
            return setTimeout(fn, millis)
        }
        fn();
        return 0
    }
});
Ext.applyIf(String, {
    format: function(format) {
        var args = Ext.toArray(arguments, 1);
        return format.replace(/\{(\d+)\}/g, function(m, i) {
            return args[i]
        })
    }
});
Ext.applyIf(Array.prototype, {
    indexOf: function(o, from) {
        var len = this.length;
        from = from || 0;
        from += from < 0 ? len : 0;
        for (; from < len; ++from) {
            if (this[from] === o) {
                return from
            }
        }
        return -1
    },
    remove: function(o) {
        var index = this.indexOf(o);
        if (index != -1) {
            this.splice(index, 1)
        }
        return this
    }
});
Ext.util.TaskRunner = function(interval) {
    interval = interval || 10;
    var tasks = [],
        removeQueue = [],
        id = 0,
        running = false,
        stopThread = function() {
            running = false;
            clearInterval(id);
            id = 0
        },
        startThread = function() {
            if (!running) {
                running = true;
                id = setInterval(runTasks, interval)
            }
        },
        removeTask = function(t) {
            removeQueue.push(t);
            if (t.onStop) {
                t.onStop.apply(t.scope || t)
            }
        },
        runTasks = function() {
            var rqLen = removeQueue.length,
                now = (new Date).getTime();
            if (rqLen > 0) {
                for (var i = 0; i < rqLen; i++) {
                    tasks.remove(removeQueue[i])
                }
                removeQueue = [];
                if (tasks.length < 1) {
                    stopThread();
                    return
                }
            }
            for (var i = 0, t, itime, rt, len = tasks.length; i < len; ++i) {
                t = tasks[i];
                itime = now - t.taskRunTime;
                if (t.interval <= itime) {
                    rt = t.run.apply(t.scope || t, t.args || [++t.taskRunCount]);
                    t.taskRunTime = now;
                    if (rt === false || t.taskRunCount === t.repeat) {
                        removeTask(t);
                        return
                    }
                }
                if (t.duration && t.duration <= now - t.taskStartTime) {
                    removeTask(t)
                }
            }
        };
    this.start = function(task) {
        tasks.push(task);
        task.taskStartTime = (new Date).getTime();
        task.taskRunTime = 0;
        task.taskRunCount = 0;
        startThread();
        return task
    };
    this.stop = function(task) {
        removeTask(task);
        return task
    };
    this.stopAll = function() {
        stopThread();
        for (var i = 0, len = tasks.length; i < len; i++) {
            if (tasks[i].onStop) {
                tasks[i].onStop()
            }
        }
        tasks = [];
        removeQueue = []
    }
};
Ext.TaskMgr = new Ext.util.TaskRunner;
Ext.util.DelayedTask = function(fn, scope, args) {
    var me = this,
        id, call = function() {
            clearInterval(id);
            id = null;
            fn.apply(scope, args || [])
        };
    me.delay = function(delay, newFn, newScope, newArgs) {
        me.cancel();
        fn = newFn || fn;
        scope = newScope || scope;
        args = newArgs || args;
        id = setInterval(call, delay)
    };
    me.cancel = function() {
        if (id) {
            clearInterval(id);
            id = null
        }
    }
};
(function() {
    var libFlyweight;

    function fly(el) {
        if (!libFlyweight) {
            libFlyweight = new Ext.Element.Flyweight
        }
        libFlyweight.dom = el;
        return libFlyweight
    }(function() {
        var doc = document,
            isCSS1 = doc.compatMode == "CSS1Compat",
            MAX = Math.max,
            ROUND = Math.round,
            PARSEINT = parseInt;
        Ext.lib.Dom = {
            isAncestor: function(p, c) {
                var ret = false;
                p = Ext.getDom(p);
                c = Ext.getDom(c);
                if (p && c) {
                    if (p.contains) {
                        return p.contains(c)
                    } else if (p.compareDocumentPosition) {
                        return !!(p.compareDocumentPosition(c) & 16)
                    } else {
                        while (c = c.parentNode) {
                            ret = c == p || ret
                        }
                    }
                }
                return ret
            },
            getViewWidth: function(full) {
                return full ? this.getDocumentWidth() : this.getViewportWidth()
            },
            getViewHeight: function(full) {
                return full ? this.getDocumentHeight() : this.getViewportHeight()
            },
            getDocumentHeight: function() {
                return MAX(!isCSS1 ? doc.body.scrollHeight : doc.documentElement.scrollHeight, this.getViewportHeight())
            },
            getDocumentWidth: function() {
                return MAX(!isCSS1 ? doc.body.scrollWidth : doc.documentElement.scrollWidth, this.getViewportWidth())
            },
            getViewportHeight: function() {
                return Ext.isIE ? Ext.isStrict ? doc.documentElement.clientHeight : doc.body.clientHeight : self.innerHeight
            },
            getViewportWidth: function() {
                return !Ext.isStrict && !Ext.isOpera ? doc.body.clientWidth : Ext.isIE ? doc.documentElement.clientWidth : self.innerWidth
            },
            getY: function(el) {
                return this.getXY(el)[1]
            },
            getX: function(el) {
                return this.getXY(el)[0]
            },
            getXY: function(el) {
                var p, pe, b, bt, bl, dbd, x = 0,
                    y = 0,
                    scroll, hasAbsolute, bd = doc.body || doc.documentElement,
                    ret = [0, 0];
                el = Ext.getDom(el);
                if (el != bd) {
                    if (el.getBoundingClientRect) {
                        b = el.getBoundingClientRect();
                        scroll = fly(document).getScroll();
                        ret = [ROUND(b.left + scroll.left), ROUND(b.top + scroll.top)]
                    } else {
                        p = el;
                        hasAbsolute = fly(el).isStyle("position", "absolute");
                        while (p) {
                            pe = fly(p);
                            x += p.offsetLeft;
                            y += p.offsetTop;
                            hasAbsolute = hasAbsolute || pe.isStyle("position", "absolute");
                            if (Ext.isGecko) {
                                y += bt = PARSEINT(pe.getStyle("borderTopWidth"), 10) || 0;
                                x += bl = PARSEINT(pe.getStyle("borderLeftWidth"), 10) || 0;
                                if (p != el && !pe.isStyle("overflow", "visible")) {
                                    x += bl;
                                    y += bt
                                }
                            }
                            p = p.offsetParent
                        }
                        if (Ext.isSafari && hasAbsolute) {
                            x -= bd.offsetLeft;
                            y -= bd.offsetTop
                        }
                        if (Ext.isGecko && !hasAbsolute) {
                            dbd = fly(bd);
                            x += PARSEINT(dbd.getStyle("borderLeftWidth"), 10) || 0;
                            y += PARSEINT(dbd.getStyle("borderTopWidth"), 10) || 0
                        }
                        p = el.parentNode;
                        while (p && p != bd) {
                            if (!Ext.isOpera || p.tagName != "TR" && !fly(p).isStyle("display", "inline")) {
                                x -= p.scrollLeft;
                                y -= p.scrollTop
                            }
                            p = p.parentNode
                        }
                        ret = [x, y]
                    }
                }
                return ret
            },
            setXY: function(el, xy) {
                (el = Ext.fly(el, "_setXY")).position();
                var pts = el.translatePoints(xy),
                    style = el.dom.style,
                    pos;
                for (pos in pts) {
                    if (!isNaN(pts[pos])) style[pos] = pts[pos] + "px"
                }
            },
            setX: function(el, x) {
                this.setXY(el, [x, false])
            },
            setY: function(el, y) {
                this.setXY(el, [false, y])
            }
        }
    })();
    Ext.lib.Event = function() {
        var loadComplete = false,
            unloadListeners = {},
            retryCount = 0,
            onAvailStack = [],
            _interval, locked = false,
            win = window,
            doc = document,
            POLL_RETRYS = 200,
            POLL_INTERVAL = 20,
            EL = 0,
            TYPE = 0,
            FN = 1,
            WFN = 2,
            OBJ = 2,
            ADJ_SCOPE = 3,
            SCROLLLEFT = "scrollLeft",
            SCROLLTOP = "scrollTop",
            UNLOAD = "unload",
            MOUSEOVER = "mouseover",
            MOUSEOUT = "mouseout",
            doAdd = function() {
                var ret;
                if (win.addEventListener) {
                    ret = function(el, eventName, fn, capture) {
                        if (eventName == "mouseenter") {
                            fn = fn.createInterceptor(checkRelatedTarget);
                            el.addEventListener(MOUSEOVER, fn, capture)
                        } else if (eventName == "mouseleave") {
                            fn = fn.createInterceptor(checkRelatedTarget);
                            el.addEventListener(MOUSEOUT, fn, capture)
                        } else {
                            el.addEventListener(eventName, fn, capture)
                        }
                        return fn
                    }
                } else if (win.attachEvent) {
                    ret = function(el, eventName, fn, capture) {
                        el.attachEvent("on" + eventName, fn);
                        return fn
                    }
                } else {
                    ret = function() {}
                }
                return ret
            }(),
            doRemove = function() {
                var ret;
                if (win.removeEventListener) {
                    ret = function(el, eventName, fn, capture) {
                        if (eventName == "mouseenter") {
                            eventName = MOUSEOVER
                        } else if (eventName == "mouseleave") {
                            eventName = MOUSEOUT
                        }
                        el.removeEventListener(eventName, fn, capture)
                    }
                } else if (win.detachEvent) {
                    ret = function(el, eventName, fn) {
                        el.detachEvent("on" + eventName, fn)
                    }
                } else {
                    ret = function() {}
                }
                return ret
            }();

        function checkRelatedTarget(e) {
            return !elContains(e.currentTarget, pub.getRelatedTarget(e))
        }

        function elContains(parent, child) {
            if (parent && parent.firstChild) {
                while (child) {
                    if (child === parent) {
                        return true
                    }
                    child = child.parentNode;
                    if (child && child.nodeType != 1) {
                        child = null
                    }
                }
            }
            return false
        }

        function _tryPreloadAttach() {
            var ret = false,
                notAvail = [],
                element, i, len, v, tryAgain = !loadComplete || retryCount > 0;
            if (!locked) {
                locked = true;
                for (i = 0, len = onAvailStack.length; i < len; i++) {
                    v = onAvailStack[i];
                    if (v && (element = doc.getElementById(v.id))) {
                        if (!v.checkReady || loadComplete || element.nextSibling || doc && doc.body) {
                            element = v.override ? v.override === true ? v.obj : v.override : element;
                            v.fn.call(element, v.obj);
                            onAvailStack.remove(v)
                        } else {
                            notAvail.push(v)
                        }
                    }
                }
                retryCount = notAvail.length === 0 ? 0 : retryCount - 1;
                if (tryAgain) {
                    startInterval()
                } else {
                    clearInterval(_interval);
                    _interval = null
                }
                ret = !(locked = false)
            }
            return ret
        }

        function startInterval() {
            if (!_interval) {
                var callback = function() {
                    _tryPreloadAttach()
                };
                _interval = setInterval(callback, POLL_INTERVAL)
            }
        }

        function getScroll() {
            var dd = doc.documentElement,
                db = doc.body;
            if (dd && (dd[SCROLLTOP] || dd[SCROLLLEFT])) {
                return [dd[SCROLLLEFT], dd[SCROLLTOP]]
            } else if (db) {
                return [db[SCROLLLEFT], db[SCROLLTOP]]
            } else {
                return [0, 0]
            }
        }

        function getPageCoord(ev, xy) {
            ev = ev.browserEvent || ev;
            var coord = ev["page" + xy];
            if (!coord && coord !== 0) {
                coord = ev["client" + xy] || 0;
                if (Ext.isIE) {
                    coord += getScroll()[xy == "X" ? 0 : 1]
                }
            }
            return coord
        }
        var pub = {
            extAdapter: true,
            onAvailable: function(p_id, p_fn, p_obj, p_override) {
                onAvailStack.push({
                    id: p_id,
                    fn: p_fn,
                    obj: p_obj,
                    override: p_override,
                    checkReady: false
                });
                retryCount = POLL_RETRYS;
                startInterval()
            },
            addListener: function(el, eventName, fn) {
                el = Ext.getDom(el);
                if (el && fn) {
                    if (eventName == UNLOAD) {
                        if (unloadListeners[el.id] === undefined) {
                            unloadListeners[el.id] = []
                        }
                        unloadListeners[el.id].push([eventName, fn]);
                        return fn
                    }
                    return doAdd(el, eventName, fn, false)
                }
                return false
            },
            removeListener: function(el, eventName, fn) {
                el = Ext.getDom(el);
                var i, len, li, lis;
                if (el && fn) {
                    if (eventName == UNLOAD) {
                        if ((lis = unloadListeners[el.id]) !== undefined) {
                            for (i = 0, len = lis.length; i < len; i++) {
                                if ((li = lis[i]) && li[TYPE] == eventName && li[FN] == fn) {
                                    unloadListeners[id].splice(i, 1)
                                }
                            }
                        }
                        return
                    }
                    doRemove(el, eventName, fn, false)
                }
            },
            getTarget: function(ev) {
                ev = ev.browserEvent || ev;
                return this.resolveTextNode(ev.target || ev.srcElement)
            },
            resolveTextNode: Ext.isGecko ? function(node) {
                if (!node) {
                    return
                }
                var s = HTMLElement.prototype.toString.call(node);
                if (s == "[xpconnect wrapped native prototype]" || s == "[object XULElement]") {
                    return
                }
                return node.nodeType == 3 ? node.parentNode : node
            } : function(node) {
                return node && node.nodeType == 3 ? node.parentNode : node
            },
            getRelatedTarget: function(ev) {
                ev = ev.browserEvent || ev;
                return this.resolveTextNode(ev.relatedTarget || (ev.type == MOUSEOUT ? ev.toElement : ev.type == MOUSEOVER ? ev.fromElement : null))
            },
            getPageX: function(ev) {
                return getPageCoord(ev, "X")
            },
            getPageY: function(ev) {
                return getPageCoord(ev, "Y")
            },
            getXY: function(ev) {
                return [this.getPageX(ev), this.getPageY(ev)]
            },
            stopEvent: function(ev) {
                this.stopPropagation(ev);
                this.preventDefault(ev)
            },
            stopPropagation: function(ev) {
                ev = ev.browserEvent || ev;
                if (ev.stopPropagation) {
                    ev.stopPropagation()
                } else {
                    ev.cancelBubble = true
                }
            },
            preventDefault: function(ev) {
                ev = ev.browserEvent || ev;
                if (ev.preventDefault) {
                    ev.preventDefault()
                } else {
                    ev.returnValue = false
                }
            },
            getEvent: function(e) {
                e = e || win.event;
                if (!e) {
                    var c = this.getEvent.caller;
                    while (c) {
                        e = c.arguments[0];
                        if (e && Event == e.constructor) {
                            break
                        }
                        c = c.caller
                    }
                }
                return e
            },
            getCharCode: function(ev) {
                ev = ev.browserEvent || ev;
                return ev.charCode || ev.keyCode || 0
            },
            getListeners: function(el, eventName) {
                Ext.EventManager.getListeners(el, eventName)
            },
            purgeElement: function(el, recurse, eventName) {
                Ext.EventManager.purgeElement(el, recurse, eventName)
            },
            _load: function(e) {
                loadComplete = true;
                var EU = Ext.lib.Event;
                if (Ext.isIE && e !== true) {
                    doRemove(win, "load", arguments.callee)
                }
            },
            _unload: function(e) {
                var EU = Ext.lib.Event,
                    i, j, l, v, ul, id, len, index, scope;
                for (id in unloadListeners) {
                    ul = unloadListeners[id];
                    for (i = 0, len = ul.length; i < len; i++) {
                        v = ul[i];
                        if (v) {
                            try {
                                scope = v[ADJ_SCOPE] ? v[ADJ_SCOPE] === true ? v[OBJ] : v[ADJ_SCOPE] : win;
                                v[FN].call(scope, EU.getEvent(e), v[OBJ])
                            } catch (ex) {}
                        }
                    }
                }
                unloadListeners = null;
                Ext.EventManager._unload();
                doRemove(win, UNLOAD, EU._unload)
            }
        };
        pub.on = pub.addListener;
        pub.un = pub.removeListener;
        if (doc && doc.body) {
            pub._load(true)
        } else {
            doAdd(win, "load", pub._load)
        }
        doAdd(win, UNLOAD, pub._unload);
        _tryPreloadAttach();
        return pub
    }();
    Ext.lib.Ajax = function() {
        var activeX = ["MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"],
            CONTENTTYPE = "Content-Type";

        function setHeader(o) {
            var conn = o.conn,
                prop;

            function setTheHeaders(conn, headers) {
                for (prop in headers) {
                    if (headers.hasOwnProperty(prop)) {
                        conn.setRequestHeader(prop, headers[prop])
                    }
                }
            }
            if (pub.defaultHeaders) {
                setTheHeaders(conn, pub.defaultHeaders)
            }
            if (pub.headers) {
                setTheHeaders(conn, pub.headers);
                delete pub.headers
            }
        }

        function createExceptionObject(tId, callbackArg, isAbort, isTimeout) {
            return {
                tId: tId,
                status: isAbort ? -1 : 0,
                statusText: isAbort ? "transaction aborted" : "communication failure",
                isAbort: isAbort,
                isTimeout: isTimeout,
                argument: callbackArg
            }
        }

        function initHeader(label, value) {
            (pub.headers = pub.headers || {})[label] = value
        }

        function createResponseObject(o, callbackArg) {
            var headerObj = {},
                headerStr, conn = o.conn,
                t, s;
            try {
                headerStr = o.conn.getAllResponseHeaders();
                Ext.each(headerStr.replace(/\r\n/g, "\n").split("\n"), function(v) {
                    t = v.indexOf(":");
                    if (t >= 0) {
                        s = v.substr(0, t).toLowerCase();
                        if (v.charAt(t + 1) == " ") {
                            ++t
                        }
                        headerObj[s] = v.substr(t + 1)
                    }
                })
            } catch (e) {}
            return {
                tId: o.tId,
                status: conn.status,
                statusText: conn.statusText,
                getResponseHeader: function(header) {
                    return headerObj[header.toLowerCase()]
                },
                getAllResponseHeaders: function() {
                    return headerStr
                },
                responseText: conn.responseText,
                responseXML: conn.responseXML,
                argument: callbackArg
            }
        }

        function releaseObject(o) {
            o.conn = null;
            o = null
        }

        function handleTransactionResponse(o, callback, isAbort, isTimeout) {
            if (!callback) {
                releaseObject(o);
                return
            }
            var httpStatus, responseObject;
            try {
                if (o.conn.status !== undefined && o.conn.status != 0) {
                    httpStatus = o.conn.status
                } else {
                    httpStatus = 13030
                }
            } catch (e) {
                httpStatus = 13030
            }
            if (httpStatus >= 200 && httpStatus < 300 || Ext.isIE && httpStatus == 1223) {
                responseObject = createResponseObject(o, callback.argument);
                if (callback.success) {
                    if (!callback.scope) {
                        callback.success(responseObject)
                    } else {
                        callback.success.apply(callback.scope, [responseObject])
                    }
                }
            } else {
                switch (httpStatus) {
                    case 12002:
                    case 12029:
                    case 12030:
                    case 12031:
                    case 12152:
                    case 13030:
                        responseObject = createExceptionObject(o.tId, callback.argument, isAbort ? isAbort : false, isTimeout);
                        if (callback.failure) {
                            if (!callback.scope) {
                                callback.failure(responseObject)
                            } else {
                                callback.failure.apply(callback.scope, [responseObject])
                            }
                        }
                        break;
                    default:
                        responseObject = createResponseObject(o, callback.argument);
                        if (callback.failure) {
                            if (!callback.scope) {
                                callback.failure(responseObject)
                            } else {
                                callback.failure.apply(callback.scope, [responseObject])
                            }
                        }
                }
            }
            releaseObject(o);
            responseObject = null
        }

        function handleReadyState(o, callback) {
            callback = callback || {};
            var conn = o.conn,
                tId = o.tId,
                poll = pub.poll,
                cbTimeout = callback.timeout || null;
            if (cbTimeout) {
                pub.timeout[tId] = setTimeout(function() {
                    pub.abort(o, callback, true)
                }, cbTimeout)
            }
            poll[tId] = setInterval(function() {
                if (conn && conn.readyState == 4) {
                    clearInterval(poll[tId]);
                    poll[tId] = null;
                    if (cbTimeout) {
                        clearTimeout(pub.timeout[tId]);
                        pub.timeout[tId] = null
                    }
                    handleTransactionResponse(o, callback)
                }
            }, pub.pollInterval)
        }

        function asyncRequest(method, uri, callback, postData) {
            var o = getConnectionObject() || null;
            if (o) {
                o.conn.open(method, uri, true);
                if (pub.useDefaultXhrHeader) {
                    initHeader("X-Requested-With", pub.defaultXhrHeader)
                }
                if (postData && pub.useDefaultHeader && (!pub.headers || !pub.headers[CONTENTTYPE])) {
                    initHeader(CONTENTTYPE, pub.defaultPostHeader)
                }
                if (pub.defaultHeaders || pub.headers) {
                    setHeader(o)
                }
                handleReadyState(o, callback);
                o.conn.send(postData || null)
            }
            return o
        }

        function getConnectionObject() {
            var o;
            try {
                if (o = createXhrObject(pub.transactionId)) {
                    pub.transactionId++
                }
            } catch (e) {} finally {
                return o
            }
        }

        function createXhrObject(transactionId) {
            var http;
            try {
                http = new XMLHttpRequest
            } catch (e) {
                for (var i = 0; i < activeX.length; ++i) {
                    try {
                        http = new ActiveXObject(activeX[i]);
                        break
                    } catch (e) {}
                }
            } finally {
                return {
                    conn: http,
                    tId: transactionId
                }
            }
        }
        var pub = {
            request: function(method, uri, cb, data, options) {
                if (options) {
                    var me = this,
                        xmlData = options.xmlData,
                        jsonData = options.jsonData,
                        hs;
                    Ext.applyIf(me, options);
                    if (xmlData || jsonData) {
                        hs = me.headers;
                        if (!hs || !hs[CONTENTTYPE]) {
                            initHeader(CONTENTTYPE, xmlData ? "text/xml" : "application/json")
                        }
                        data = xmlData || (!Ext.isPrimitive(jsonData) ? Ext.encode(jsonData) : jsonData)
                    }
                }
                return asyncRequest(method || options.method || "POST", uri, cb, data)
            },
            serializeForm: function(form) {
                var fElements = form.elements || (document.forms[form] || Ext.getDom(form)).elements,
                    hasSubmit = false,
                    encoder = encodeURIComponent,
                    element, options, name, val, data = "",
                    type;
                Ext.each(fElements, function(element) {
                    name = element.name;
                    type = element.type;
                    if (!element.disabled && name) {
                        if (/select-(one|multiple)/i.test(type)) {
                            Ext.each(element.options, function(opt) {
                                if (opt.selected) {
                                    data += String.format("{0}={1}&", encoder(name), encoder((opt.hasAttribute ? opt.hasAttribute("value") : opt.getAttribute("value") !== null) ? opt.value : opt.text))
                                }
                            })
                        } else if (!/file|undefined|reset|button/i.test(type)) {
                            if (!(/radio|checkbox/i.test(type) && !element.checked) && !(type == "submit" && hasSubmit)) {
                                data += encoder(name) + "=" + encoder(element.value) + "&";
                                hasSubmit = /submit/i.test(type)
                            }
                        }
                    }
                });
                return data.substr(0, data.length - 1)
            },
            useDefaultHeader: true,
            defaultPostHeader: "application/x-www-form-urlencoded; charset=UTF-8",
            useDefaultXhrHeader: true,
            defaultXhrHeader: "XMLHttpRequest",
            poll: {},
            timeout: {},
            pollInterval: 50,
            transactionId: 0,
            abort: function(o, callback, isTimeout) {
                var me = this,
                    tId = o.tId,
                    isAbort = false;
                if (me.isCallInProgress(o)) {
                    o.conn.abort();
                    clearInterval(me.poll[tId]);
                    me.poll[tId] = null;
                    clearTimeout(pub.timeout[tId]);
                    me.timeout[tId] = null;
                    handleTransactionResponse(o, callback, isAbort = true, isTimeout)
                }
                return isAbort
            },
            isCallInProgress: function(o) {
                return o.conn && !{
                    0: true,
                    4: true
                } [o.conn.readyState]
            }
        };
        return pub
    }();
    (function() {
        var EXTLIB = Ext.lib,
            noNegatives = /width|height|opacity|padding/i,
            offsetAttribute = /^((width|height)|(top|left))$/,
            defaultUnit = /width|height|top$|bottom$|left$|right$/i,
            offsetUnit = /\d+(em|%|en|ex|pt|in|cm|mm|pc)$/i,
            isset = function(v) {
                return typeof v !== "undefined"
            },
            now = function() {
                return new Date
            };
        EXTLIB.Anim = {
            motion: function(el, args, duration, easing, cb, scope) {
                return this.run(el, args, duration, easing, cb, scope, Ext.lib.Motion)
            },
            run: function(el, args, duration, easing, cb, scope, type) {
                type = type || Ext.lib.AnimBase;
                if (typeof easing == "string") {
                    easing = Ext.lib.Easing[easing]
                }
                var anim = new type(el, args, duration, easing);
                anim.animateX(function() {
                    if (Ext.isFunction(cb)) {
                        cb.call(scope)
                    }
                });
                return anim
            }
        };
        EXTLIB.AnimBase = function(el, attributes, duration, method) {
            if (el) {
                this.init(el, attributes, duration, method)
            }
        };
        EXTLIB.AnimBase.prototype = {
            doMethod: function(attr, start, end) {
                var me = this;
                return me.method(me.curFrame, start, end - start, me.totalFrames)
            },
            setAttr: function(attr, val, unit) {
                if (noNegatives.test(attr) && val < 0) {
                    val = 0
                }
                Ext.fly(this.el, "_anim").setStyle(attr, val + unit)
            },
            getAttr: function(attr) {
                var el = Ext.fly(this.el),
                    val = el.getStyle(attr),
                    a = offsetAttribute.exec(attr) || [];
                if (val !== "auto" && !offsetUnit.test(val)) {
                    return parseFloat(val)
                }
                return !!a[2] || el.getStyle("position") == "absolute" && !!a[3] ? el.dom["offset" + a[0].charAt(0).toUpperCase() + a[0].substr(1)] : 0
            },
            getDefaultUnit: function(attr) {
                return defaultUnit.test(attr) ? "px" : ""
            },
            animateX: function(callback, scope) {
                var me = this,
                    f = function() {
                        me.onComplete.removeListener(f);
                        if (Ext.isFunction(callback)) {
                            callback.call(scope || me, me)
                        }
                    };
                me.onComplete.addListener(f, me);
                me.animate()
            },
            setRunAttr: function(attr) {
                var me = this,
                    a = this.attributes[attr],
                    to = a.to,
                    by = a.by,
                    from = a.from,
                    unit = a.unit,
                    ra = this.runAttrs[attr] = {},
                    end;
                if (!isset(to) && !isset(by)) {
                    return false
                }
                var start = isset(from) ? from : me.getAttr(attr);
                if (isset(to)) {
                    end = to
                } else if (isset(by)) {
                    if (Ext.isArray(start)) {
                        end = [];
                        for (var i = 0, len = start.length; i < len; i++) {
                            end[i] = start[i] + by[i]
                        }
                    } else {
                        end = start + by
                    }
                }
                Ext.apply(ra, {
                    start: start,
                    end: end,
                    unit: isset(unit) ? unit : me.getDefaultUnit(attr)
                })
            },
            init: function(el, attributes, duration, method) {
                var me = this,
                    actualFrames = 0,
                    mgr = EXTLIB.AnimMgr;
                Ext.apply(me, {
                    isAnimated: false,
                    startTime: null,
                    el: Ext.getDom(el),
                    attributes: attributes || {},
                    duration: duration || 1,
                    method: method || EXTLIB.Easing.easeNone,
                    useSec: true,
                    curFrame: 0,
                    totalFrames: mgr.fps,
                    runAttrs: {},
                    animate: function() {
                        var me = this,
                            d = me.duration;
                        if (me.isAnimated) {
                            return false
                        }
                        me.curFrame = 0;
                        me.totalFrames = me.useSec ? Math.ceil(mgr.fps * d) : d;
                        mgr.registerElement(me)
                    },
                    stop: function(finish) {
                        var me = this;
                        if (finish) {
                            me.curFrame = me.totalFrames;
                            me._onTween.fire()
                        }
                        mgr.stop(me)
                    }
                });
                var onStart = function() {
                    var me = this,
                        attr;
                    me.onStart.fire();
                    me.runAttrs = {};
                    for (attr in this.attributes) {
                        this.setRunAttr(attr)
                    }
                    me.isAnimated = true;
                    me.startTime = now();
                    actualFrames = 0
                };
                var onTween = function() {
                    var me = this;
                    me.onTween.fire({
                        duration: now() - me.startTime,
                        curFrame: me.curFrame
                    });
                    var ra = me.runAttrs;
                    for (var attr in ra) {
                        this.setAttr(attr, me.doMethod(attr, ra[attr].start, ra[attr].end), ra[attr].unit)
                    }++actualFrames
                };
                var onComplete = function() {
                    var me = this,
                        actual = (now() - me.startTime) / 1e3,
                        data = {
                            duration: actual,
                            frames: actualFrames,
                            fps: actualFrames / actual
                        };
                    me.isAnimated = false;
                    actualFrames = 0;
                    me.onComplete.fire(data)
                };
                me.onStart = new Ext.util.Event(me);
                me.onTween = new Ext.util.Event(me);
                me.onComplete = new Ext.util.Event(me);
                (me._onStart = new Ext.util.Event(me)).addListener(onStart);
                (me._onTween = new Ext.util.Event(me)).addListener(onTween);
                (me._onComplete = new Ext.util.Event(me)).addListener(onComplete)
            }
        };
        Ext.lib.AnimMgr = new function() {
            var me = this,
                thread = null,
                queue = [],
                tweenCount = 0;
            Ext.apply(me, {
                fps: 1e3,
                delay: 1,
                registerElement: function(tween) {
                    queue.push(tween);
                    ++tweenCount;
                    tween._onStart.fire();
                    me.start()
                },
                unRegister: function(tween, index) {
                    tween._onComplete.fire();
                    index = index || getIndex(tween);
                    if (index != -1) {
                        queue.splice(index, 1)
                    }
                    if (--tweenCount <= 0) {
                        me.stop()
                    }
                },
                start: function() {
                    if (thread === null) {
                        thread = setInterval(me.run, me.delay)
                    }
                },
                stop: function(tween) {
                    if (!tween) {
                        clearInterval(thread);
                        for (var i = 0, len = queue.length; i < len; ++i) {
                            if (queue[0].isAnimated) {
                                me.unRegister(queue[0], 0)
                            }
                        }
                        queue = [];
                        thread = null;
                        tweenCount = 0
                    } else {
                        me.unRegister(tween)
                    }
                },
                run: function() {
                    var tf, i, len, tween;
                    for (i = 0, len = queue.length; i < len; i++) {
                        tween = queue[i];
                        if (tween && tween.isAnimated) {
                            tf = tween.totalFrames;
                            if (tween.curFrame < tf || tf === null) {
                                ++tween.curFrame;
                                if (tween.useSec) {
                                    correctFrame(tween)
                                }
                                tween._onTween.fire()
                            } else {
                                me.stop(tween)
                            }
                        }
                    }
                }
            });
            var getIndex = function(anim) {
                var i, len;
                for (i = 0, len = queue.length; i < len; i++) {
                    if (queue[i] === anim) {
                        return i
                    }
                }
                return -1
            };
            var correctFrame = function(tween) {
                var frames = tween.totalFrames,
                    frame = tween.curFrame,
                    duration = tween.duration,
                    expected = frame * duration * 1e3 / frames,
                    elapsed = now() - tween.startTime,
                    tweak = 0;
                if (elapsed < duration * 1e3) {
                    tweak = Math.round((elapsed / expected - 1) * frame)
                } else {
                    tweak = frames - (frame + 1)
                }
                if (tweak > 0 && isFinite(tweak)) {
                    if (tween.curFrame + tweak >= frames) {
                        tweak = frames - (frame + 1)
                    }
                    tween.curFrame += tweak
                }
            }
        };
        EXTLIB.Bezier = new function() {
            this.getPosition = function(points, t) {
                var n = points.length,
                    tmp = [],
                    c = 1 - t,
                    i, j;
                for (i = 0; i < n; ++i) {
                    tmp[i] = [points[i][0], points[i][1]]
                }
                for (j = 1; j < n; ++j) {
                    for (i = 0; i < n - j; ++i) {
                        tmp[i][0] = c * tmp[i][0] + t * tmp[parseInt(i + 1, 10)][0];
                        tmp[i][1] = c * tmp[i][1] + t * tmp[parseInt(i + 1, 10)][1]
                    }
                }
                return [tmp[0][0], tmp[0][1]]
            }
        };
        EXTLIB.Easing = {
            easeNone: function(t, b, c, d) {
                return c * t / d + b
            },
            easeIn: function(t, b, c, d) {
                return c * (t /= d) * t + b
            },
            easeOut: function(t, b, c, d) {
                return -c * (t /= d) * (t - 2) + b
            }
        };
        (function() {
            EXTLIB.Motion = function(el, attributes, duration, method) {
                if (el) {
                    EXTLIB.Motion.superclass.constructor.call(this, el, attributes, duration, method)
                }
            };
            Ext.extend(EXTLIB.Motion, Ext.lib.AnimBase);
            var superclass = EXTLIB.Motion.superclass,
                proto = EXTLIB.Motion.prototype,
                pointsRe = /^points$/i;
            Ext.apply(EXTLIB.Motion.prototype, {
                setAttr: function(attr, val, unit) {
                    var me = this,
                        setAttr = superclass.setAttr;
                    if (pointsRe.test(attr)) {
                        unit = unit || "px";
                        setAttr.call(me, "left", val[0], unit);
                        setAttr.call(me, "top", val[1], unit)
                    } else {
                        setAttr.call(me, attr, val, unit)
                    }
                },
                getAttr: function(attr) {
                    var me = this,
                        getAttr = superclass.getAttr;
                    return pointsRe.test(attr) ? [getAttr.call(me, "left"), getAttr.call(me, "top")] : getAttr.call(me, attr)
                },
                doMethod: function(attr, start, end) {
                    var me = this;
                    return pointsRe.test(attr) ? EXTLIB.Bezier.getPosition(me.runAttrs[attr], me.method(me.curFrame, 0, 100, me.totalFrames) / 100) : superclass.doMethod.call(me, attr, start, end)
                },
                setRunAttr: function(attr) {
                    if (pointsRe.test(attr)) {
                        var me = this,
                            el = this.el,
                            points = this.attributes.points,
                            control = points.control || [],
                            from = points.from,
                            to = points.to,
                            by = points.by,
                            DOM = EXTLIB.Dom,
                            start, i, end, len, ra;
                        if (control.length > 0 && !Ext.isArray(control[0])) {
                            control = [control]
                        } else {}
                        Ext.fly(el, "_anim").position();
                        DOM.setXY(el, isset(from) ? from : DOM.getXY(el));
                        start = me.getAttr("points");
                        if (isset(to)) {
                            end = translateValues.call(me, to, start);
                            for (i = 0, len = control.length; i < len; ++i) {
                                control[i] = translateValues.call(me, control[i], start)
                            }
                        } else if (isset(by)) {
                            end = [start[0] + by[0], start[1] + by[1]];
                            for (i = 0, len = control.length; i < len; ++i) {
                                control[i] = [start[0] + control[i][0], start[1] + control[i][1]]
                            }
                        }
                        ra = this.runAttrs[attr] = [start];
                        if (control.length > 0) {
                            ra = ra.concat(control)
                        }
                        ra[ra.length] = end
                    } else {
                        superclass.setRunAttr.call(this, attr)
                    }
                }
            });
            var translateValues = function(val, start) {
                var pageXY = EXTLIB.Dom.getXY(this.el);
                return [val[0] - pageXY[0] + start[0], val[1] - pageXY[1] + start[1]]
            }
        })()
    })();
    (function() {
        var abs = Math.abs,
            pi = Math.PI,
            asin = Math.asin,
            pow = Math.pow,
            sin = Math.sin,
            EXTLIB = Ext.lib;
        Ext.apply(EXTLIB.Easing, {
            easeBoth: function(t, b, c, d) {
                return (t /= d / 2) < 1 ? c / 2 * t * t + b : -c / 2 * (--t * (t - 2) - 1) + b
            },
            easeInStrong: function(t, b, c, d) {
                return c * (t /= d) * t * t * t + b
            },
            easeOutStrong: function(t, b, c, d) {
                return -c * ((t = t / d - 1) * t * t * t - 1) + b
            },
            easeBothStrong: function(t, b, c, d) {
                return (t /= d / 2) < 1 ? c / 2 * t * t * t * t + b : -c / 2 * ((t -= 2) * t * t * t - 2) + b
            },
            elasticIn: function(t, b, c, d, a, p) {
                if (t == 0 || (t /= d) == 1) {
                    return t == 0 ? b : b + c
                }
                p = p || d * .3;
                var s;
                if (a >= abs(c)) {
                    s = p / (2 * pi) * asin(c / a)
                } else {
                    a = c;
                    s = p / 4
                }
                return -(a * pow(2, 10 * (t -= 1)) * sin((t * d - s) * (2 * pi) / p)) + b
            },
            elasticOut: function(t, b, c, d, a, p) {
                if (t == 0 || (t /= d) == 1) {
                    return t == 0 ? b : b + c
                }
                p = p || d * .3;
                var s;
                if (a >= abs(c)) {
                    s = p / (2 * pi) * asin(c / a)
                } else {
                    a = c;
                    s = p / 4
                }
                return a * pow(2, -10 * t) * sin((t * d - s) * (2 * pi) / p) + c + b
            },
            elasticBoth: function(t, b, c, d, a, p) {
                if (t == 0 || (t /= d / 2) == 2) {
                    return t == 0 ? b : b + c
                }
                p = p || d * (.3 * 1.5);
                var s;
                if (a >= abs(c)) {
                    s = p / (2 * pi) * asin(c / a)
                } else {
                    a = c;
                    s = p / 4
                }
                return t < 1 ? -.5 * (a * pow(2, 10 * (t -= 1)) * sin((t * d - s) * (2 * pi) / p)) + b : a * pow(2, -10 * (t -= 1)) * sin((t * d - s) * (2 * pi) / p) * .5 + c + b
            },
            backIn: function(t, b, c, d, s) {
                s = s || 1.70158;
                return c * (t /= d) * t * ((s + 1) * t - s) + b
            },
            backOut: function(t, b, c, d, s) {
                if (!s) {
                    s = 1.70158
                }
                return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
            },
            backBoth: function(t, b, c, d, s) {
                s = s || 1.70158;
                return (t /= d / 2) < 1 ? c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b : c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b
            },
            bounceIn: function(t, b, c, d) {
                return c - EXTLIB.Easing.bounceOut(d - t, 0, c, d) + b
            },
            bounceOut: function(t, b, c, d) {
                if ((t /= d) < 1 / 2.75) {
                    return c * (7.5625 * t * t) + b
                } else if (t < 2 / 2.75) {
                    return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b
                } else if (t < 2.5 / 2.75) {
                    return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b
                }
                return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b
            },
            bounceBoth: function(t, b, c, d) {
                return t < d / 2 ? EXTLIB.Easing.bounceIn(t * 2, 0, c, d) * .5 + b : EXTLIB.Easing.bounceOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b
            }
        })
    })();
    (function() {
        var EXTLIB = Ext.lib;
        EXTLIB.Anim.color = function(el, args, duration, easing, cb, scope) {
            return EXTLIB.Anim.run(el, args, duration, easing, cb, scope, EXTLIB.ColorAnim)
        };
        EXTLIB.ColorAnim = function(el, attributes, duration, method) {
            EXTLIB.ColorAnim.superclass.constructor.call(this, el, attributes, duration, method)
        };
        Ext.extend(EXTLIB.ColorAnim, EXTLIB.AnimBase);
        var superclass = EXTLIB.ColorAnim.superclass,
            colorRE = /color$/i,
            transparentRE = /^transparent|rgba\(0, 0, 0, 0\)$/,
            rgbRE = /^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i,
            hexRE = /^#?([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,
            hex3RE = /^#?([0-9A-F]{1})([0-9A-F]{1})([0-9A-F]{1})$/i,
            isset = function(v) {
                return typeof v !== "undefined"
            };

        function parseColor(s) {
            var pi = parseInt,
                base, out = null,
                c;
            if (s.length == 3) {
                return s
            }
            Ext.each([hexRE, rgbRE, hex3RE], function(re, idx) {
                base = idx % 2 == 0 ? 16 : 10;
                c = re.exec(s);
                if (c && c.length == 4) {
                    out = [pi(c[1], base), pi(c[2], base), pi(c[3], base)];
                    return false
                }
            });
            return out
        }
        Ext.apply(EXTLIB.ColorAnim.prototype, {
            getAttr: function(attr) {
                var me = this,
                    el = me.el,
                    val;
                if (colorRE.test(attr)) {
                    while (el && transparentRE.test(val = Ext.fly(el).getStyle(attr))) {
                        el = el.parentNode;
                        val = "fff"
                    }
                } else {
                    val = superclass.getAttr.call(me, attr)
                }
                return val
            },
            doMethod: function(attr, start, end) {
                var me = this,
                    val, floor = Math.floor,
                    i, len, v;
                if (colorRE.test(attr)) {
                    val = [];
                    for (i = 0, len = start.length; i < len; i++) {
                        v = start[i];
                        val[i] = superclass.doMethod.call(me, attr, v, end[i])
                    }
                    val = "rgb(" + floor(val[0]) + "," + floor(val[1]) + "," + floor(val[2]) + ")"
                } else {
                    val = superclass.doMethod.call(me, attr, start, end)
                }
                return val
            },
            setRunAttr: function(attr) {
                var me = this,
                    a = me.attributes[attr],
                    to = a.to,
                    by = a.by,
                    ra;
                superclass.setRunAttr.call(me, attr);
                ra = me.runAttrs[attr];
                if (colorRE.test(attr)) {
                    var start = parseColor(ra.start),
                        end = parseColor(ra.end);
                    if (!isset(to) && isset(by)) {
                        end = parseColor(by);
                        for (var i = 0, len = start.length; i < len; i++) {
                            end[i] = start[i] + end[i]
                        }
                    }
                    ra.start = start;
                    ra.end = end
                }
            }
        })
    })();
    (function() {
        var EXTLIB = Ext.lib;
        EXTLIB.Anim.scroll = function(el, args, duration, easing, cb, scope) {
            return EXTLIB.Anim.run(el, args, duration, easing, cb, scope, EXTLIB.Scroll)
        };
        EXTLIB.Scroll = function(el, attributes, duration, method) {
            if (el) {
                EXTLIB.Scroll.superclass.constructor.call(this, el, attributes, duration, method)
            }
        };
        Ext.extend(EXTLIB.Scroll, EXTLIB.ColorAnim);
        var superclass = EXTLIB.Scroll.superclass,
            SCROLL = "scroll";
        Ext.apply(EXTLIB.Scroll.prototype, {
            doMethod: function(attr, start, end) {
                var val, me = this,
                    curFrame = me.curFrame,
                    totalFrames = me.totalFrames;
                if (attr == SCROLL) {
                    val = [me.method(curFrame, start[0], end[0] - start[0], totalFrames), me.method(curFrame, start[1], end[1] - start[1], totalFrames)]
                } else {
                    val = superclass.doMethod.call(me, attr, start, end)
                }
                return val
            },
            getAttr: function(attr) {
                var me = this;
                if (attr == SCROLL) {
                    return [me.el.scrollLeft, me.el.scrollTop]
                } else {
                    return superclass.getAttr.call(me, attr)
                }
            },
            setAttr: function(attr, val, unit) {
                var me = this;
                if (attr == SCROLL) {
                    me.el.scrollLeft = val[0];
                    me.el.scrollTop = val[1]
                } else {
                    superclass.setAttr.call(me, attr, val, unit)
                }
            }
        })
    })();
    if (Ext.isIE) {
        function fnCleanUp() {
            var p = Function.prototype;
            delete p.createSequence;
            delete p.defer;
            delete p.createDelegate;
            delete p.createCallback;
            delete p.createInterceptor;
            window.detachEvent("onunload", fnCleanUp)
        }
        window.attachEvent("onunload", fnCleanUp)
    }
})();
(function() {
    var EXTUTIL = Ext.util,
        TOARRAY = Ext.toArray,
        EACH = Ext.each,
        ISOBJECT = Ext.isObject,
        TRUE = true,
        FALSE = false;
    EXTUTIL.Observable = function() {
        var me = this,
            e = me.events;
        if (me.listeners) {
            me.on(me.listeners);
            delete me.listeners
        }
        me.events = e || {}
    };
    EXTUTIL.Observable.prototype = {
        filterOptRe: /^(?:scope|delay|buffer|single)$/,
        fireEvent: function() {
            var a = TOARRAY(arguments),
                ename = a[0].toLowerCase(),
                me = this,
                ret = TRUE,
                ce = me.events[ename],
                q, c;
            if (me.eventsSuspended === TRUE) {
                if (q = me.eventQueue) {
                    q.push(a)
                }
            } else if (ISOBJECT(ce) && ce.bubble) {
                if (ce.fire.apply(ce, a.slice(1)) === FALSE) {
                    return FALSE
                }
                c = me.getBubbleTarget && me.getBubbleTarget();
                if (c && c.enableBubble) {
                    if (!c.events[ename] || !Ext.isObject(c.events[ename]) || !c.events[ename].bubble) {
                        c.enableBubble(ename)
                    }
                    return c.fireEvent.apply(c, a)
                }
            } else {
                if (ISOBJECT(ce)) {
                    a.shift();
                    ret = ce.fire.apply(ce, a)
                }
            }
            return ret
        },
        addListener: function(eventName, fn, scope, o) {
            var me = this,
                e, oe, isF, ce;
            if (ISOBJECT(eventName)) {
                o = eventName;
                for (e in o) {
                    oe = o[e];
                    if (!me.filterOptRe.test(e)) {
                        me.addListener(e, oe.fn || oe, oe.scope || o.scope, oe.fn ? oe : o)
                    }
                }
            } else {
                eventName = eventName.toLowerCase();
                ce = me.events[eventName] || TRUE;
                if (Ext.isBoolean(ce)) {
                    me.events[eventName] = ce = new EXTUTIL.Event(me, eventName)
                }
                ce.addListener(fn, scope, ISOBJECT(o) ? o : {})
            }
        },
        removeListener: function(eventName, fn, scope) {
            var ce = this.events[eventName.toLowerCase()];
            if (ISOBJECT(ce)) {
                ce.removeListener(fn, scope)
            }
        },
        purgeListeners: function() {
            var events = this.events,
                evt, key;
            for (key in events) {
                evt = events[key];
                if (ISOBJECT(evt)) {
                    evt.clearListeners()
                }
            }
        },
        addEvents: function(o) {
            var me = this;
            me.events = me.events || {};
            if (Ext.isString(o)) {
                var a = arguments,
                    i = a.length;
                while (i--) {
                    me.events[a[i]] = me.events[a[i]] || TRUE
                }
            } else {
                Ext.applyIf(me.events, o)
            }
        },
        hasListener: function(eventName) {
            var e = this.events[eventName];
            return ISOBJECT(e) && e.listeners.length > 0
        },
        suspendEvents: function(queueSuspended) {
            this.eventsSuspended = TRUE;
            if (queueSuspended && !this.eventQueue) {
                this.eventQueue = []
            }
        },
        resumeEvents: function() {
            var me = this,
                queued = me.eventQueue || [];
            me.eventsSuspended = FALSE;
            delete me.eventQueue;
            EACH(queued, function(e) {
                me.fireEvent.apply(me, e)
            })
        }
    };
    var OBSERVABLE = EXTUTIL.Observable.prototype;
    OBSERVABLE.on = OBSERVABLE.addListener;
    OBSERVABLE.un = OBSERVABLE.removeListener;
    EXTUTIL.Observable.releaseCapture = function(o) {
        o.fireEvent = OBSERVABLE.fireEvent
    };

    function createTargeted(h, o, scope) {
        return function() {
            if (o.target == arguments[0]) {
                h.apply(scope, TOARRAY(arguments))
            }
        }
    }

    function createBuffered(h, o, l, scope) {
        l.task = new EXTUTIL.DelayedTask;
        return function() {
            l.task.delay(o.buffer, h, scope, TOARRAY(arguments))
        }
    }

    function createSingle(h, e, fn, scope) {
        return function() {
            e.removeListener(fn, scope);
            return h.apply(scope, arguments)
        }
    }

    function createDelayed(h, o, l, scope) {
        return function() {
            var task = new EXTUTIL.DelayedTask;
            if (!l.tasks) {
                l.tasks = []
            }
            l.tasks.push(task);
            task.delay(o.delay || 10, h, scope, TOARRAY(arguments))
        }
    }
    EXTUTIL.Event = function(obj, name) {
        this.name = name;
        this.obj = obj;
        this.listeners = []
    };
    EXTUTIL.Event.prototype = {
        addListener: function(fn, scope, options) {
            var me = this,
                l;
            scope = scope || me.obj;
            if (!me.isListening(fn, scope)) {
                l = me.createListener(fn, scope, options);
                if (me.firing) {
                    me.listeners = me.listeners.slice(0)
                }
                me.listeners.push(l)
            }
        },
        createListener: function(fn, scope, o) {
            o = o || {}, scope = scope || this.obj;
            var l = {
                    fn: fn,
                    scope: scope,
                    options: o
                },
                h = fn;
            if (o.target) {
                h = createTargeted(h, o, scope)
            }
            if (o.delay) {
                h = createDelayed(h, o, l, scope)
            }
            if (o.single) {
                h = createSingle(h, this, fn, scope)
            }
            if (o.buffer) {
                h = createBuffered(h, o, l, scope)
            }
            l.fireFn = h;
            return l
        },
        findListener: function(fn, scope) {
            var list = this.listeners,
                i = list.length,
                l, s;
            while (i--) {
                l = list[i];
                if (l) {
                    s = l.scope;
                    if (l.fn == fn && (s == scope || s == this.obj)) {
                        return i
                    }
                }
            }
            return -1
        },
        isListening: function(fn, scope) {
            return this.findListener(fn, scope) != -1
        },
        removeListener: function(fn, scope) {
            var index, l, k, me = this,
                ret = FALSE;
            if ((index = me.findListener(fn, scope)) != -1) {
                if (me.firing) {
                    me.listeners = me.listeners.slice(0)
                }
                l = me.listeners[index];
                if (l.task) {
                    l.task.cancel();
                    delete l.task
                }
                k = l.tasks && l.tasks.length;
                if (k) {
                    while (k--) {
                        l.tasks[k].cancel()
                    }
                    delete l.tasks
                }
                me.listeners.splice(index, 1);
                ret = TRUE
            }
            return ret
        },
        clearListeners: function() {
            var me = this,
                l = me.listeners,
                i = l.length;
            while (i--) {
                me.removeListener(l[i].fn, l[i].scope)
            }
        },
        fire: function() {
            var me = this,
                args = TOARRAY(arguments),
                listeners = me.listeners,
                len = listeners.length,
                i = 0,
                l;
            if (len > 0) {
                me.firing = TRUE;
                for (; i < len; i++) {
                    l = listeners[i];
                    if (l && l.fireFn.apply(l.scope || me.obj || window, args) === FALSE) {
                        return me.firing = FALSE
                    }
                }
            }
            me.firing = FALSE;
            return TRUE
        }
    }
})();
Ext.DomHelper = function() {
    var tempTableEl = null,
        emptyTags = /^(?:br|frame|hr|img|input|link|meta|range|spacer|wbr|area|param|col)$/i,
        tableRe = /^table|tbody|tr|td$/i,
        pub, afterbegin = "afterbegin",
        afterend = "afterend",
        beforebegin = "beforebegin",
        beforeend = "beforeend",
        ts = "<table>",
        te = "</table>",
        tbs = ts + "<tbody>",
        tbe = "</tbody>" + te,
        trs = tbs + "<tr>",
        tre = "</tr>" + tbe;

    function doInsert(el, o, returnElement, pos, sibling, append) {
        var newNode = pub.insertHtml(pos, Ext.getDom(el), createHtml(o));
        return returnElement ? Ext.get(newNode, true) : newNode
    }

    function createHtml(o) {
        var b = "",
            attr, val, key, keyVal, cn;
        if (Ext.isString(o)) {
            b = o
        } else if (Ext.isArray(o)) {
            for (var i = 0; i < o.length; i++) {
                if (o[i]) {
                    b += createHtml(o[i])
                }
            }
        } else {
            b += "<" + (o.tag = o.tag || "div");
            Ext.iterate(o, function(attr, val) {
                if (!/tag|children|cn|html$/i.test(attr)) {
                    if (Ext.isObject(val)) {
                        b += " " + attr + '="';
                        Ext.iterate(val, function(key, keyVal) {
                            b += key + ":" + keyVal + ";"
                        });
                        b += '"'
                    } else {
                        b += " " + ({
                            cls: "class",
                            htmlFor: "for"
                        } [attr] || attr) + '="' + val + '"'
                    }
                }
            });
            if (emptyTags.test(o.tag)) {
                b += "/>"
            } else {
                b += ">";
                if (cn = o.children || o.cn) {
                    b += createHtml(cn)
                } else if (o.html) {
                    b += o.html
                }
                b += "</" + o.tag + ">"
            }
        }
        return b
    }

    function ieTable(depth, s, h, e) {
        tempTableEl.innerHTML = [s, h, e].join("");
        var i = -1,
            el = tempTableEl,
            ns;
        while (++i < depth) {
            el = el.firstChild
        }
        if (ns = el.nextSibling) {
            var df = document.createDocumentFragment();
            while (el) {
                ns = el.nextSibling;
                df.appendChild(el);
                el = ns
            }
            el = df
        }
        return el
    }

    function insertIntoTable(tag, where, el, html) {
        var node, before;
        tempTableEl = tempTableEl || document.createElement("div");
        if (tag == "td" && (where == afterbegin || where == beforeend) || !/td|tr|tbody/i.test(tag) && (where == beforebegin || where == afterend)) {
            return
        }
        before = where == beforebegin ? el : where == afterend ? el.nextSibling : where == afterbegin ? el.firstChild : null;
        if (where == beforebegin || where == afterend) {
            el = el.parentNode
        }
        if (tag == "td" || tag == "tr" && (where == beforeend || where == afterbegin)) {
            node = ieTable(4, trs, html, tre)
        } else if (tag == "tbody" && (where == beforeend || where == afterbegin) || tag == "tr" && (where == beforebegin || where == afterend)) {
            node = ieTable(3, tbs, html, tbe)
        } else {
            node = ieTable(2, ts, html, te)
        }
        el.insertBefore(node, before);
        return node
    }
    pub = {
        markup: function(o) {
            return createHtml(o)
        },
        applyStyles: function(el, styles) {
            if (styles) {
                var i = 0,
                    len, style;
                el = Ext.fly(el);
                if (Ext.isFunction(styles)) {
                    styles = styles.call()
                }
                if (Ext.isString(styles)) {
                    styles = styles.trim().split(/\s*(?::|;)\s*/);
                    for (len = styles.length; i < len;) {
                        el.setStyle(styles[i++], styles[i++])
                    }
                } else if (Ext.isObject(styles)) {
                    el.setStyle(styles)
                }
            }
        },
        insertHtml: function(where, el, html) {
            var hash = {},
                hashVal, setStart, range, frag, rangeEl, rs;
            where = where.toLowerCase();
            hash[beforebegin] = ["BeforeBegin", "previousSibling"];
            hash[afterend] = ["AfterEnd", "nextSibling"];
            if (el.insertAdjacentHTML) {
                if (tableRe.test(el.tagName) && (rs = insertIntoTable(el.tagName.toLowerCase(), where, el, html))) {
                    return rs
                }
                hash[afterbegin] = ["AfterBegin", "firstChild"];
                hash[beforeend] = ["BeforeEnd", "lastChild"];
                if (hashVal = hash[where]) {
                    el.insertAdjacentHTML(hashVal[0], html);
                    return el[hashVal[1]]
                }
            } else {
                range = el.ownerDocument.createRange();
                setStart = "setStart" + (/end/i.test(where) ? "After" : "Before");
                if (hash[where]) {
                    range[setStart](el);
                    frag = range.createContextualFragment(html);
                    el.parentNode.insertBefore(frag, where == beforebegin ? el : el.nextSibling);
                    return el[(where == beforebegin ? "previous" : "next") + "Sibling"]
                } else {
                    rangeEl = (where == afterbegin ? "first" : "last") + "Child";
                    if (el.firstChild) {
                        range[setStart](el[rangeEl]);
                        frag = range.createContextualFragment(html);
                        if (where == afterbegin) {
                            el.insertBefore(frag, el.firstChild)
                        } else {
                            el.appendChild(frag)
                        }
                    } else {
                        el.innerHTML = html
                    }
                    return el[rangeEl]
                }
            }
            throw 'Illegal insertion point -> "' + where + '"'
        },
        insertBefore: function(el, o, returnElement) {
            return doInsert(el, o, returnElement, beforebegin)
        },
        insertAfter: function(el, o, returnElement) {
            return doInsert(el, o, returnElement, afterend, "nextSibling")
        },
        insertFirst: function(el, o, returnElement) {
            return doInsert(el, o, returnElement, afterbegin, "firstChild")
        },
        append: function(el, o, returnElement) {
            return doInsert(el, o, returnElement, beforeend, "", true)
        },
        overwrite: function(el, o, returnElement) {
            el = Ext.getDom(el);
            el.innerHTML = createHtml(o);
            return returnElement ? Ext.get(el.firstChild) : el.firstChild
        },
        createHtml: createHtml
    };
    return pub
}();
Ext.Template = function(html) {
    var me = this,
        a = arguments,
        buf = [];
    if (Ext.isArray(html)) {
        html = html.join("")
    } else if (a.length > 1) {
        Ext.each(a, function(v) {
            if (Ext.isObject(v)) {
                Ext.apply(me, v)
            } else {
                buf.push(v)
            }
        });
        html = buf.join("")
    }
    me.html = html;
    if (me.compiled) {
        me.compile()
    }
};
Ext.Template.prototype = {
    re: /\{([\w-]+)\}/g,
    applyTemplate: function(values) {
        var me = this;
        return me.compiled ? me.compiled(values) : me.html.replace(me.re, function(m, name) {
            return values[name] !== undefined ? values[name] : ""
        })
    },
    set: function(html, compile) {
        var me = this;
        me.html = html;
        me.compiled = null;
        return compile ? me.compile() : me
    },
    compile: function() {
        var me = this,
            sep = Ext.isGecko ? "+" : ",";

        function fn(m, name) {
            name = "values['" + name + "']";
            return "'" + sep + "(" + name + " == undefined ? '' : " + name + ")" + sep + "'"
        }
        eval("this.compiled = function(values){ return " + (Ext.isGecko ? "'" : "['") + me.html.replace(/\\/g, "\\\\").replace(/(\r\n|\n)/g, "\\n").replace(/'/g, "\\'").replace(this.re, fn) + (Ext.isGecko ? "';};" : "'].join('');};"));
        return me
    },
    insertFirst: function(el, values, returnElement) {
        return this.doInsert("afterBegin", el, values, returnElement)
    },
    insertBefore: function(el, values, returnElement) {
        return this.doInsert("beforeBegin", el, values, returnElement)
    },
    insertAfter: function(el, values, returnElement) {
        return this.doInsert("afterEnd", el, values, returnElement)
    },
    append: function(el, values, returnElement) {
        return this.doInsert("beforeEnd", el, values, returnElement)
    },
    doInsert: function(where, el, values, returnEl) {
        el = Ext.getDom(el);
        var newNode = Ext.DomHelper.insertHtml(where, el, this.applyTemplate(values));
        return returnEl ? Ext.get(newNode, true) : newNode
    },
    overwrite: function(el, values, returnElement) {
        el = Ext.getDom(el);
        el.innerHTML = this.applyTemplate(values);
        return returnElement ? Ext.get(el.firstChild, true) : el.firstChild
    }
};
Ext.Template.prototype.apply = Ext.Template.prototype.applyTemplate;
Ext.Template.from = function(el, config) {
    el = Ext.getDom(el);
    return new Ext.Template(el.value || el.innerHTML, config || "")
};
Ext.DomQuery = function() {
    var cache = {},
        simpleCache = {},
        valueCache = {},
        nonSpace = /\S/,
        trimRe = /^\s+|\s+$/g,
        tplRe = /\{(\d+)\}/g,
        modeRe = /^(\s?[\/>+~]\s?|\s|$)/,
        tagTokenRe = /^(#)?([\w-\*]+)/,
        nthRe = /(\d*)n\+?(\d*)/,
        nthRe2 = /\D/,
        isIE = window.ActiveXObject ? true : false,
        key = 30803;
    eval("var batch = 30803;");

    function child(p, index) {
        var i = 0,
            n = p.firstChild;
        while (n) {
            if (n.nodeType == 1) {
                if (++i == index) {
                    return n
                }
            }
            n = n.nextSibling
        }
        return null
    }

    function next(n) {
        while ((n = n.nextSibling) && n.nodeType != 1);
        return n
    }

    function prev(n) {
        while ((n = n.previousSibling) && n.nodeType != 1);
        return n
    }

    function children(d) {
        var n = d.firstChild,
            ni = -1,
            nx;
        while (n) {
            nx = n.nextSibling;
            if (n.nodeType == 3 && !nonSpace.test(n.nodeValue)) {
                d.removeChild(n)
            } else {
                n.nodeIndex = ++ni
            }
            n = nx
        }
        return this
    }

    function byClassName(c, a, v) {
        if (!v) {
            return c
        }
        var r = [],
            ri = -1,
            cn;
        for (var i = 0, ci; ci = c[i]; i++) {
            if ((" " + ci.className + " ").indexOf(v) != -1) {
                r[++ri] = ci
            }
        }
        return r
    }

    function attrValue(n, attr) {
        if (!n.tagName && typeof n.length != "undefined") {
            n = n[0]
        }
        if (!n) {
            return null
        }
        if (attr == "for") {
            return n.htmlFor
        }
        if (attr == "class" || attr == "className") {
            return n.className
        }
        return n.getAttribute(attr) || n[attr]
    }

    function getNodes(ns, mode, tagName) {
        var result = [],
            ri = -1,
            cs;
        if (!ns) {
            return result
        }
        tagName = tagName || "*";
        if (typeof ns.getElementsByTagName != "undefined") {
            ns = [ns]
        }
        if (!mode) {
            for (var i = 0, ni; ni = ns[i]; i++) {
                cs = ni.getElementsByTagName(tagName);
                for (var j = 0, ci; ci = cs[j]; j++) {
                    result[++ri] = ci
                }
            }
        } else if (mode == "/" || mode == ">") {
            var utag = tagName.toUpperCase();
            for (var i = 0, ni, cn; ni = ns[i]; i++) {
                cn = ni.childNodes;
                for (var j = 0, cj; cj = cn[j]; j++) {
                    if (cj.nodeName == utag || cj.nodeName == tagName || tagName == "*") {
                        result[++ri] = cj
                    }
                }
            }
        } else if (mode == "+") {
            var utag = tagName.toUpperCase();
            for (var i = 0, n; n = ns[i]; i++) {
                while ((n = n.nextSibling) && n.nodeType != 1);
                if (n && (n.nodeName == utag || n.nodeName == tagName || tagName == "*")) {
                    result[++ri] = n
                }
            }
        } else if (mode == "~") {
            var utag = tagName.toUpperCase();
            for (var i = 0, n; n = ns[i]; i++) {
                while (n = n.nextSibling) {
                    if (n.nodeName == utag || n.nodeName == tagName || tagName == "*") {
                        result[++ri] = n
                    }
                }
            }
        }
        return result
    }

    function concat(a, b) {
        if (b.slice) {
            return a.concat(b)
        }
        for (var i = 0, l = b.length; i < l; i++) {
            a[a.length] = b[i]
        }
        return a
    }

    function byTag(cs, tagName) {
        if (cs.tagName || cs == document) {
            cs = [cs]
        }
        if (!tagName) {
            return cs
        }
        var r = [],
            ri = -1;
        tagName = tagName.toLowerCase();
        for (var i = 0, ci; ci = cs[i]; i++) {
            if (ci.nodeType == 1 && ci.tagName.toLowerCase() == tagName) {
                r[++ri] = ci
            }
        }
        return r
    }

    function byId(cs, attr, id) {
        if (cs.tagName || cs == document) {
            cs = [cs]
        }
        if (!id) {
            return cs
        }
        var r = [],
            ri = -1;
        for (var i = 0, ci; ci = cs[i]; i++) {
            if (ci && ci.id == id) {
                r[++ri] = ci;
                return r
            }
        }
        return r
    }

    function byAttribute(cs, attr, value, op, custom) {
        var r = [],
            ri = -1,
            st = custom == "{",
            f = Ext.DomQuery.operators[op],
            a, ih;
        for (var i = 0, ci; ci = cs[i]; i++) {
            if (ci.nodeType != 1) {
                continue
            }
            ih = ci.innerHTML;
            if (ih !== null && ih !== undefined) {
                if (st) {
                    a = Ext.DomQuery.getStyle(ci, attr)
                } else if (attr == "class" || attr == "className") {
                    a = ci.className
                } else if (attr == "for") {
                    a = ci.htmlFor
                } else if (attr == "href") {
                    a = ci.getAttribute("href", 2)
                } else {
                    a = ci.getAttribute(attr)
                }
            } else {
                a = ci.getAttribute(attr)
            }
            if (f && f(a, value) || !f && a) {
                r[++ri] = ci
            }
        }
        return r
    }

    function byPseudo(cs, name, value) {
        return Ext.DomQuery.pseudos[name](cs, value)
    }

    function nodupIEXml(cs) {
        var d = ++key,
            r;
        cs[0].setAttribute("_nodup", d);
        r = [cs[0]];
        for (var i = 1, len = cs.length; i < len; i++) {
            var c = cs[i];
            if (!c.getAttribute("_nodup") != d) {
                c.setAttribute("_nodup", d);
                r[r.length] = c
            }
        }
        for (var i = 0, len = cs.length; i < len; i++) {
            cs[i].removeAttribute("_nodup")
        }
        return r
    }

    function nodup(cs) {
        if (!cs) {
            return []
        }
        var len = cs.length,
            c, i, r = cs,
            cj, ri = -1;
        if (!len || typeof cs.nodeType != "undefined" || len == 1) {
            return cs
        }
        if (isIE && typeof cs[0].selectSingleNode != "undefined") {
            return nodupIEXml(cs)
        }
        var d = ++key;
        cs[0]._nodup = d;
        for (i = 1; c = cs[i]; i++) {
            if (c._nodup != d) {
                c._nodup = d
            } else {
                r = [];
                for (var j = 0; j < i; j++) {
                    r[++ri] = cs[j]
                }
                for (j = i + 1; cj = cs[j]; j++) {
                    if (cj._nodup != d) {
                        cj._nodup = d;
                        r[++ri] = cj
                    }
                }
                return r
            }
        }
        return r
    }

    function quickDiffIEXml(c1, c2) {
        var d = ++key,
            r = [];
        for (var i = 0, len = c1.length; i < len; i++) {
            c1[i].setAttribute("_qdiff", d)
        }
        for (var i = 0, len = c2.length; i < len; i++) {
            if (c2[i].getAttribute("_qdiff") != d) {
                r[r.length] = c2[i]
            }
        }
        for (var i = 0, len = c1.length; i < len; i++) {
            c1[i].removeAttribute("_qdiff")
        }
        return r
    }

    function quickDiff(c1, c2) {
        var len1 = c1.length,
            d = ++key,
            r = [];
        if (!len1) {
            return c2
        }
        if (isIE && typeof c1[0].selectSingleNode != "undefined") {
            return quickDiffIEXml(c1, c2)
        }
        for (var i = 0; i < len1; i++) {
            c1[i]._qdiff = d
        }
        for (var i = 0, len = c2.length; i < len; i++) {
            if (c2[i]._qdiff != d) {
                r[r.length] = c2[i]
            }
        }
        return r
    }

    function quickId(ns, mode, root, id) {
        if (ns == root) {
            var d = root.ownerDocument || root;
            return d.getElementById(id)
        }
        ns = getNodes(ns, mode, "*");
        return byId(ns, null, id)
    }
    return {
        getStyle: function(el, name) {
            return Ext.fly(el).getStyle(name)
        },
        compile: function(path, type) {
            type = type || "select";
            var fn = ["var f = function(root){\n var mode; ++batch; var n = root || document;\n"],
                q = path,
                mode, lq, tk = Ext.DomQuery.matchers,
                tklen = tk.length,
                mm, lmode = q.match(modeRe);
            if (lmode && lmode[1]) {
                fn[fn.length] = 'mode="' + lmode[1].replace(trimRe, "") + '";';
                q = q.replace(lmode[1], "")
            }
            while (path.substr(0, 1) == "/") {
                path = path.substr(1)
            }
            while (q && lq != q) {
                lq = q;
                var tm = q.match(tagTokenRe);
                if (type == "select") {
                    if (tm) {
                        if (tm[1] == "#") {
                            fn[fn.length] = 'n = quickId(n, mode, root, "' + tm[2] + '");'
                        } else {
                            fn[fn.length] = 'n = getNodes(n, mode, "' + tm[2] + '");'
                        }
                        q = q.replace(tm[0], "")
                    } else if (q.substr(0, 1) != "@") {
                        fn[fn.length] = 'n = getNodes(n, mode, "*");'
                    }
                } else {
                    if (tm) {
                        if (tm[1] == "#") {
                            fn[fn.length] = 'n = byId(n, null, "' + tm[2] + '");'
                        } else {
                            fn[fn.length] = 'n = byTag(n, "' + tm[2] + '");'
                        }
                        q = q.replace(tm[0], "")
                    }
                }
                while (!(mm = q.match(modeRe))) {
                    var matched = false;
                    for (var j = 0; j < tklen; j++) {
                        var t = tk[j];
                        var m = q.match(t.re);
                        if (m) {
                            fn[fn.length] = t.select.replace(tplRe, function(x, i) {
                                return m[i]
                            });
                            q = q.replace(m[0], "");
                            matched = true;
                            break
                        }
                    }
                    if (!matched) {
                        throw 'Error parsing selector, parsing failed at "' + q + '"'
                    }
                }
                if (mm[1]) {
                    fn[fn.length] = 'mode="' + mm[1].replace(trimRe, "") + '";';
                    q = q.replace(mm[1], "")
                }
            }
            fn[fn.length] = "return nodup(n);\n}";
            eval(fn.join(""));
            return f
        },
        select: function(path, root, type) {
            if (!root || root == document) {
                root = document
            }
            if (typeof root == "string") {
                root = document.getElementById(root)
            }
            var paths = path.split(","),
                results = [];
            for (var i = 0, len = paths.length; i < len; i++) {
                var p = paths[i].replace(trimRe, "");
                if (!cache[p]) {
                    cache[p] = Ext.DomQuery.compile(p);
                    if (!cache[p]) {
                        throw p + " is not a valid selector"
                    }
                }
                var result = cache[p](root);
                if (result && result != document) {
                    results = results.concat(result)
                }
            }
            if (paths.length > 1) {
                return nodup(results)
            }
            return results
        },
        selectNode: function(path, root) {
            return Ext.DomQuery.select(path, root)[0]
        },
        selectValue: function(path, root, defaultValue) {
            path = path.replace(trimRe, "");
            if (!valueCache[path]) {
                valueCache[path] = Ext.DomQuery.compile(path, "select")
            }
            var n = valueCache[path](root),
                v;
            n = n[0] ? n[0] : n;
            if (typeof n.normalize == "function") n.normalize();
            v = n && n.firstChild ? n.firstChild.nodeValue : null;
            return v === null || v === undefined || v === "" ? defaultValue : v
        },
        selectNumber: function(path, root, defaultValue) {
            var v = Ext.DomQuery.selectValue(path, root, defaultValue || 0);
            return parseFloat(v)
        },
        is: function(el, ss) {
            if (typeof el == "string") {
                el = document.getElementById(el)
            }
            var isArray = Ext.isArray(el),
                result = Ext.DomQuery.filter(isArray ? el : [el], ss);
            return isArray ? result.length == el.length : result.length > 0
        },
        filter: function(els, ss, nonMatches) {
            ss = ss.replace(trimRe, "");
            if (!simpleCache[ss]) {
                simpleCache[ss] = Ext.DomQuery.compile(ss, "simple")
            }
            var result = simpleCache[ss](els);
            return nonMatches ? quickDiff(result, els) : result
        },
        matchers: [{
            re: /^\.([\w-]+)/,
            select: 'n = byClassName(n, null, " {1} ");'
        }, {
            re: /^\:([\w-]+)(?:\(((?:[^\s>\/]*|.*?))\))?/,
            select: 'n = byPseudo(n, "{1}", "{2}");'
        }, {
            re: /^(?:([\[\{])(?:@)?([\w-]+)\s?(?:(=|.=)\s?['"]?(.*?)["']?)?[\]\}])/,
            select: 'n = byAttribute(n, "{2}", "{4}", "{3}", "{1}");'
        }, {
            re: /^#([\w-]+)/,
            select: 'n = byId(n, null, "{1}");'
        }, {
            re: /^@([\w-]+)/,
            select: 'return {firstChild:{nodeValue:attrValue(n, "{1}")}};'
        }],
        operators: {
            "=": function(a, v) {
                return a == v
            },
            "!=": function(a, v) {
                return a != v
            },
            "^=": function(a, v) {
                return a && a.substr(0, v.length) == v
            },
            "$=": function(a, v) {
                return a && a.substr(a.length - v.length) == v
            },
            "*=": function(a, v) {
                return a && a.indexOf(v) !== -1
            },
            "%=": function(a, v) {
                return a % v == 0
            },
            "|=": function(a, v) {
                return a && (a == v || a.substr(0, v.length + 1) == v + "-")
            },
            "~=": function(a, v) {
                return a && (" " + a + " ").indexOf(" " + v + " ") != -1
            }
        },
        pseudos: {
            "first-child": function(c) {
                var r = [],
                    ri = -1,
                    n;
                for (var i = 0, ci; ci = n = c[i]; i++) {
                    while ((n = n.previousSibling) && n.nodeType != 1);
                    if (!n) {
                        r[++ri] = ci
                    }
                }
                return r
            },
            "last-child": function(c) {
                var r = [],
                    ri = -1,
                    n;
                for (var i = 0, ci; ci = n = c[i]; i++) {
                    while ((n = n.nextSibling) && n.nodeType != 1);
                    if (!n) {
                        r[++ri] = ci
                    }
                }
                return r
            },
            "nth-child": function(c, a) {
                var r = [],
                    ri = -1,
                    m = nthRe.exec(a == "even" && "2n" || a == "odd" && "2n+1" || !nthRe2.test(a) && "n+" + a || a),
                    f = (m[1] || 1) - 0,
                    l = m[2] - 0;
                for (var i = 0, n; n = c[i]; i++) {
                    var pn = n.parentNode;
                    if (batch != pn._batch) {
                        var j = 0;
                        for (var cn = pn.firstChild; cn; cn = cn.nextSibling) {
                            if (cn.nodeType == 1) {
                                cn.nodeIndex = ++j
                            }
                        }
                        pn._batch = batch
                    }
                    if (f == 1) {
                        if (l == 0 || n.nodeIndex == l) {
                            r[++ri] = n
                        }
                    } else if ((n.nodeIndex + l) % f == 0) {
                        r[++ri] = n
                    }
                }
                return r
            },
            "only-child": function(c) {
                var r = [],
                    ri = -1;
                for (var i = 0, ci; ci = c[i]; i++) {
                    if (!prev(ci) && !next(ci)) {
                        r[++ri] = ci
                    }
                }
                return r
            },
            empty: function(c) {
                var r = [],
                    ri = -1;
                for (var i = 0, ci; ci = c[i]; i++) {
                    var cns = ci.childNodes,
                        j = 0,
                        cn, empty = true;
                    while (cn = cns[j]) {
                        ++j;
                        if (cn.nodeType == 1 || cn.nodeType == 3) {
                            empty = false;
                            break
                        }
                    }
                    if (empty) {
                        r[++ri] = ci
                    }
                }
                return r
            },
            contains: function(c, v) {
                var r = [],
                    ri = -1;
                for (var i = 0, ci; ci = c[i]; i++) {
                    if ((ci.textContent || ci.innerText || "").indexOf(v) != -1) {
                        r[++ri] = ci
                    }
                }
                return r
            },
            nodeValue: function(c, v) {
                var r = [],
                    ri = -1;
                for (var i = 0, ci; ci = c[i]; i++) {
                    if (ci.firstChild && ci.firstChild.nodeValue == v) {
                        r[++ri] = ci
                    }
                }
                return r
            },
            checked: function(c) {
                var r = [],
                    ri = -1;
                for (var i = 0, ci; ci = c[i]; i++) {
                    if (ci.checked == true) {
                        r[++ri] = ci
                    }
                }
                return r
            },
            not: function(c, ss) {
                return Ext.DomQuery.filter(c, ss, true)
            },
            any: function(c, selectors) {
                var ss = selectors.split("|"),
                    r = [],
                    ri = -1,
                    s;
                for (var i = 0, ci; ci = c[i]; i++) {
                    for (var j = 0; s = ss[j]; j++) {
                        if (Ext.DomQuery.is(ci, s)) {
                            r[++ri] = ci;
                            break
                        }
                    }
                }
                return r
            },
            odd: function(c) {
                return this["nth-child"](c, "odd")
            },
            even: function(c) {
                return this["nth-child"](c, "even")
            },
            nth: function(c, a) {
                return c[a - 1] || []
            },
            first: function(c) {
                return c[0] || []
            },
            last: function(c) {
                return c[c.length - 1] || []
            },
            has: function(c, ss) {
                var s = Ext.DomQuery.select,
                    r = [],
                    ri = -1;
                for (var i = 0, ci; ci = c[i]; i++) {
                    if (s(ss, ci).length > 0) {
                        r[++ri] = ci
                    }
                }
                return r
            },
            next: function(c, ss) {
                var is = Ext.DomQuery.is,
                    r = [],
                    ri = -1;
                for (var i = 0, ci; ci = c[i]; i++) {
                    var n = next(ci);
                    if (n && is(n, ss)) {
                        r[++ri] = ci
                    }
                }
                return r
            },
            prev: function(c, ss) {
                var is = Ext.DomQuery.is,
                    r = [],
                    ri = -1;
                for (var i = 0, ci; ci = c[i]; i++) {
                    var n = prev(ci);
                    if (n && is(n, ss)) {
                        r[++ri] = ci
                    }
                }
                return r
            }
        }
    }
}();
Ext.query = Ext.DomQuery.select;
Ext.EventManager = function() {
    var docReadyEvent, docReadyProcId, docReadyState = false,
        E = Ext.lib.Event,
        D = Ext.lib.Dom,
        DOC = document,
        WINDOW = window,
        IEDEFERED = "ie-deferred-loader",
        DOMCONTENTLOADED = "DOMContentLoaded",
        propRe = /^(?:scope|delay|buffer|single|stopEvent|preventDefault|stopPropagation|normalized|args|delegate)$/,
        specialElCache = [];

    function getId(el) {
        var id = false,
            i = 0,
            len = specialElCache.length,
            id = false,
            skip = false,
            o;
        if (el) {
            if (el.getElementById || el.navigator) {
                for (; i < len; ++i) {
                    o = specialElCache[i];
                    if (o.el === el) {
                        id = o.id;
                        break
                    }
                }
                if (!id) {
                    id = Ext.id(el);
                    specialElCache.push({
                        id: id,
                        el: el
                    });
                    skip = true
                }
            } else {
                id = Ext.id(el)
            }
            if (!Ext.elCache[id]) {
                Ext.Element.addToCache(new Ext.Element(el), id);
                if (skip) {
                    Ext.elCache[id].skipGC = true
                }
            }
        }
        return id
    }

    function addListener(el, ename, fn, task, wrap, scope) {
        el = Ext.getDom(el);
        var id = getId(el),
            es = Ext.elCache[id].events,
            wfn;
        wfn = E.on(el, ename, wrap);
        es[ename] = es[ename] || [];
        es[ename].push([fn, wrap, scope, wfn, task]);
        if (ename == "mousewheel" && el.addEventListener) {
            var args = ["DOMMouseScroll", wrap, false];
            el.addEventListener.apply(el, args);
            Ext.EventManager.addListener(WINDOW, "unload", function() {
                el.removeEventListener.apply(el, args)
            })
        }
        if (ename == "mousedown" && el == document) {
            Ext.EventManager.stoppedMouseDownEvent.addListener(wrap)
        }
    }

    function fireDocReady() {
        if (!docReadyState) {
            Ext.isReady = docReadyState = true;
            if (docReadyProcId) {
                clearInterval(docReadyProcId)
            }
            if (Ext.isGecko || Ext.isOpera) {
                DOC.removeEventListener(DOMCONTENTLOADED, fireDocReady, false)
            }
            if (Ext.isIE) {
                var defer = DOC.getElementById(IEDEFERED);
                if (defer) {
                    defer.onreadystatechange = null;
                    defer.parentNode.removeChild(defer)
                }
            }
            if (docReadyEvent) {
                docReadyEvent.fire();
                docReadyEvent.listeners = []
            }
        }
    }

    function initDocReady() {
        var COMPLETE = "complete";
        docReadyEvent = new Ext.util.Event;
        if (Ext.isGecko || Ext.isOpera) {
            DOC.addEventListener(DOMCONTENTLOADED, fireDocReady, false)
        } else if (Ext.isIE) {
            var s = DOC.createElement("script");
            s.setAttribute("defer", "defer");
            s.setAttribute("src", "//:");
            DOC.getElementsByTagName("head")[0].appendChild(s);
            s.onreadystatechange = function() {
                if (this.readyState == COMPLETE) {
                    fireDocReady()
                }
            }
        } else if (Ext.isWebKit) {
            docReadyProcId = setInterval(function() {
                if (DOC.readyState == COMPLETE) {
                    fireDocReady()
                }
            }, 10)
        }
        E.on(WINDOW, "load", fireDocReady)
    }

    function createTargeted(h, o) {
        return function() {
            var args = Ext.toArray(arguments);
            if (o.target == Ext.EventObject.setEvent(args[0]).target) {
                h.apply(this, args)
            }
        }
    }

    function createBuffered(h, o, task) {
        return function(e) {
            task.delay(o.buffer, h, null, [new Ext.EventObjectImpl(e)])
        }
    }

    function createSingle(h, el, ename, fn, scope) {
        return function(e) {
            Ext.EventManager.removeListener(el, ename, fn, scope);
            h(e)
        }
    }

    function createDelayed(h, o, fn) {
        return function(e) {
            var task = new Ext.util.DelayedTask(h);
            if (!fn.tasks) {
                fn.tasks = []
            }
            fn.tasks.push(task);
            task.delay(o.delay || 10, h, null, [new Ext.EventObjectImpl(e)])
        }
    }

    function listen(element, ename, opt, fn, scope) {
        var o = !Ext.isObject(opt) ? {} : opt,
            el = Ext.getDom(element),
            task;
        fn = fn || o.fn;
        scope = scope || o.scope;
        if (!el) {
            throw 'Error listening for "' + ename + '". Element "' + element + "\" doesn't exist."
        }

        function h(e) {
            if (!Ext) {
                return
            }
            e = Ext.EventObject.setEvent(e);
            var t;
            if (o.delegate) {
                if (!(t = e.getTarget(o.delegate, el))) {
                    return
                }
            } else {
                t = e.target
            }
            if (o.stopEvent) {
                e.stopEvent()
            }
            if (o.preventDefault) {
                e.preventDefault()
            }
            if (o.stopPropagation) {
                e.stopPropagation()
            }
            if (o.normalized) {
                e = e.browserEvent
            }
            fn.call(scope || el, e, t, o)
        }
        if (o.target) {
            h = createTargeted(h, o)
        }
        if (o.delay) {
            h = createDelayed(h, o, fn)
        }
        if (o.single) {
            h = createSingle(h, el, ename, fn, scope)
        }
        if (o.buffer) {
            task = new Ext.util.DelayedTask(h);
            h = createBuffered(h, o, task)
        }
        addListener(el, ename, fn, task, h, scope);
        return h
    }
    var pub = {
        addListener: function(element, eventName, fn, scope, options) {
            if (Ext.isObject(eventName)) {
                var o = eventName,
                    e, val;
                for (e in o) {
                    val = o[e];
                    if (!propRe.test(e)) {
                        if (Ext.isFunction(val)) {
                            listen(element, e, o, val, o.scope)
                        } else {
                            listen(element, e, val)
                        }
                    }
                }
            } else {
                listen(element, eventName, options, fn, scope)
            }
        },
        removeListener: function(el, eventName, fn, scope) {
            el = Ext.getDom(el);
            var id = getId(el),
                f = el && Ext.elCache[id].events[eventName] || [],
                wrap, i, l, k, wf, len, fnc;
            for (i = 0, len = f.length; i < len; i++) {
                if (Ext.isArray(fnc = f[i]) && fnc[0] == fn && (!scope || fnc[2] == scope)) {
                    if (fnc[4]) {
                        fnc[4].cancel()
                    }
                    k = fn.tasks && fn.tasks.length;
                    if (k) {
                        while (k--) {
                            fn.tasks[k].cancel()
                        }
                        delete fn.tasks
                    }
                    wf = wrap = fnc[1];
                    if (E.extAdapter) {
                        wf = fnc[3]
                    }
                    E.un(el, eventName, wf);
                    f.splice(i, 1);
                    if (f.length === 0) {
                        delete Ext.elCache[id].events[eventName]
                    }
                    for (k in Ext.elCache[id].events) {
                        return false
                    }
                    Ext.elCache[id].events = {};
                    return false
                }
            }
            if (eventName == "mousewheel" && el.addEventListener && wrap) {
                el.removeEventListener("DOMMouseScroll", wrap, false)
            }
            if (eventName == "mousedown" && el == DOC && wrap) {
                Ext.EventManager.stoppedMouseDownEvent.removeListener(wrap)
            }
        },
        removeAll: function(el) {
            el = Ext.getDom(el);
            var id = getId(el),
                ec = Ext.elCache[id] || {},
                es = ec.events || {},
                f, i, len, ename, fn, k;
            for (ename in es) {
                if (es.hasOwnProperty(ename)) {
                    f = es[ename];
                    for (i = 0, len = f.length; i < len; i++) {
                        fn = f[i];
                        if (fn[4]) {
                            fn[4].cancel()
                        }
                        if (fn[0].tasks && (k = fn[0].tasks.length)) {
                            while (k--) {
                                fn[0].tasks[k].cancel()
                            }
                            delete fn.tasks
                        }
                        E.un(el, ename, E.extAdapter ? fn[3] : fn[1])
                    }
                }
            }
            if (Ext.elCache[id]) {
                Ext.elCache[id].events = {}
            }
        },
        getListeners: function(el, eventName) {
            el = Ext.getDom(el);
            var id = getId(el),
                ec = Ext.elCache[id] || {},
                es = ec.events || {},
                results = [];
            if (es && es[eventName]) {
                return es[eventName]
            } else {
                return null
            }
        },
        purgeElement: function(el, recurse, eventName) {
            el = Ext.getDom(el);
            var id = getId(el),
                ec = Ext.elCache[id] || {},
                es = ec.events || {},
                i, f, len;
            if (eventName) {
                if (es && es.hasOwnProperty(eventName)) {
                    f = es[eventName];
                    for (i = 0, len = f.length; i < len; i++) {
                        Ext.EventManager.removeListener(el, eventName, f[i][0])
                    }
                }
            } else {
                Ext.EventManager.removeAll(el)
            }
            if (recurse && el && el.childNodes) {
                for (i = 0, len = el.childNodes.length; i < len; i++) {
                    Ext.EventManager.purgeElement(el.childNodes[i], recurse, eventName)
                }
            }
        },
        _unload: function() {
            var el;
            for (el in Ext.elCache) {
                Ext.EventManager.removeAll(el)
            }
        },
        onDocumentReady: function(fn, scope, options) {
            if (docReadyState) {
                docReadyEvent.addListener(fn, scope, options);
                docReadyEvent.fire();
                docReadyEvent.listeners = []
            } else {
                if (!docReadyEvent) initDocReady();
                options = options || {};
                options.delay = options.delay || 1;
                docReadyEvent.addListener(fn, scope, options)
            }
        }
    };
    pub.on = pub.addListener;
    pub.un = pub.removeListener;
    pub.stoppedMouseDownEvent = new Ext.util.Event;
    return pub
}();
Ext.onReady = Ext.EventManager.onDocumentReady;
(function() {
    var initExtCss = function() {
        var bd = document.body || document.getElementsByTagName("body")[0];
        if (!bd) {
            return false
        }
        var cls = [" ", Ext.isIE ? "ext-ie " + (Ext.isIE6 ? "ext-ie6" : Ext.isIE7 ? "ext-ie7" : "ext-ie8") : Ext.isGecko ? "ext-gecko " + (Ext.isGecko2 ? "ext-gecko2" : "ext-gecko3") : Ext.isOpera ? "ext-opera" : Ext.isWebKit ? "ext-webkit" : ""];
        if (Ext.isSafari) {
            cls.push("ext-safari " + (Ext.isSafari2 ? "ext-safari2" : Ext.isSafari3 ? "ext-safari3" : "ext-safari4"))
        } else if (Ext.isChrome) {
            cls.push("ext-chrome")
        }
        if (Ext.isMac) {
            cls.push("ext-mac")
        }
        if (Ext.isLinux) {
            cls.push("ext-linux")
        }
        if (Ext.isStrict || Ext.isBorderBox) {
            var p = bd.parentNode;
            if (p) {
                p.className += Ext.isStrict ? " ext-strict" : " ext-border-box"
            }
        }
        bd.className += cls.join(" ");
        return true
    };
    if (!initExtCss()) {
        Ext.onReady(initExtCss)
    }
})();
Ext.EventObject = function() {
    var E = Ext.lib.Event,
        safariKeys = {
            3: 13,
            63234: 37,
            63235: 39,
            63232: 38,
            63233: 40,
            63276: 33,
            63277: 34,
            63272: 46,
            63273: 36,
            63275: 35
        },
        btnMap = Ext.isIE ? {
            1: 0,
            4: 1,
            2: 2
        } : Ext.isWebKit ? {
            1: 0,
            2: 1,
            3: 2
        } : {
            0: 0,
            1: 1,
            2: 2
        };
    Ext.EventObjectImpl = function(e) {
        if (e) {
            this.setEvent(e.browserEvent || e)
        }
    };
    Ext.EventObjectImpl.prototype = {
        setEvent: function(e) {
            var me = this;
            if (e == me || e && e.browserEvent) {
                return e
            }
            me.browserEvent = e;
            if (e) {
                me.button = e.button ? btnMap[e.button] : e.which ? e.which - 1 : -1;
                if (e.type == "click" && me.button == -1) {
                    me.button = 0
                }
                me.type = e.type;
                me.shiftKey = e.shiftKey;
                me.ctrlKey = e.ctrlKey || e.metaKey || false;
                me.altKey = e.altKey;
                me.keyCode = e.keyCode;
                me.charCode = e.charCode;
                me.target = E.getTarget(e);
                me.xy = E.getXY(e)
            } else {
                me.button = -1;
                me.shiftKey = false;
                me.ctrlKey = false;
                me.altKey = false;
                me.keyCode = 0;
                me.charCode = 0;
                me.target = null;
                me.xy = [0, 0]
            }
            return me
        },
        stopEvent: function() {
            var me = this;
            if (me.browserEvent) {
                if (me.browserEvent.type == "mousedown") {
                    Ext.EventManager.stoppedMouseDownEvent.fire(me)
                }
                E.stopEvent(me.browserEvent)
            }
        },
        preventDefault: function() {
            if (this.browserEvent) {
                E.preventDefault(this.browserEvent)
            }
        },
        stopPropagation: function() {
            var me = this;
            if (me.browserEvent) {
                if (me.browserEvent.type == "mousedown") {
                    Ext.EventManager.stoppedMouseDownEvent.fire(me)
                }
                E.stopPropagation(me.browserEvent)
            }
        },
        getCharCode: function() {
            return this.charCode || this.keyCode
        },
        getKey: function() {
            return this.normalizeKey(this.keyCode || this.charCode)
        },
        normalizeKey: function(k) {
            return Ext.isSafari ? safariKeys[k] || k : k
        },
        getPageX: function() {
            return this.xy[0]
        },
        getPageY: function() {
            return this.xy[1]
        },
        getXY: function() {
            return this.xy
        },
        getTarget: function(selector, maxDepth, returnEl) {
            return selector ? Ext.fly(this.target).findParent(selector, maxDepth, returnEl) : returnEl ? Ext.get(this.target) : this.target
        },
        getRelatedTarget: function() {
            return this.browserEvent ? E.getRelatedTarget(this.browserEvent) : null
        },
        getWheelDelta: function() {
            var e = this.browserEvent;
            var delta = 0;
            if (e.wheelDelta) {
                delta = e.wheelDelta / 120
            } else if (e.detail) {
                delta = -e.detail / 3
            }
            return delta
        },
        within: function(el, related, allowEl) {
            if (el) {
                var t = this[related ? "getRelatedTarget" : "getTarget"]();
                return t && ((allowEl ? t == Ext.getDom(el) : false) || Ext.fly(el).contains(t))
            }
            return false
        }
    };
    return new Ext.EventObjectImpl
}();
(function() {
    var DOC = document;
    Ext.Element = function(element, forceNew) {
        var dom = typeof element == "string" ? DOC.getElementById(element) : element,
            id;
        if (!dom) return null;
        id = dom.id;
        if (!forceNew && id && Ext.elCache[id]) {
            return Ext.elCache[id].el
        }
        this.dom = dom;
        this.id = id || Ext.id(dom)
    };
    var D = Ext.lib.Dom,
        DH = Ext.DomHelper,
        E = Ext.lib.Event,
        A = Ext.lib.Anim,
        El = Ext.Element,
        EC = Ext.elCache;
    El.prototype = {
        set: function(o, useSet) {
            var el = this.dom,
                attr, val, useSet = useSet !== false && !!el.setAttribute;
            for (attr in o) {
                if (o.hasOwnProperty(attr)) {
                    val = o[attr];
                    if (attr == "style") {
                        DH.applyStyles(el, val)
                    } else if (attr == "cls") {
                        el.className = val
                    } else if (useSet) {
                        el.setAttribute(attr, val)
                    } else {
                        el[attr] = val
                    }
                }
            }
            return this
        },
        defaultUnit: "px",
        is: function(simpleSelector) {
            return Ext.DomQuery.is(this.dom, simpleSelector)
        },
        focus: function(defer, dom) {
            var me = this,
                dom = dom || me.dom;
            try {
                if (Number(defer)) {
                    me.focus.defer(defer, null, [null, dom])
                } else {
                    dom.focus()
                }
            } catch (e) {}
            return me
        },
        blur: function() {
            try {
                this.dom.blur()
            } catch (e) {}
            return this
        },
        getValue: function(asNumber) {
            var val = this.dom.value;
            return asNumber ? parseInt(val, 10) : val
        },
        addListener: function(eventName, fn, scope, options) {
            Ext.EventManager.on(this.dom, eventName, fn, scope || this, options);
            return this
        },
        removeListener: function(eventName, fn, scope) {
            Ext.EventManager.removeListener(this.dom, eventName, fn, scope || this);
            return this
        },
        removeAllListeners: function() {
            Ext.EventManager.removeAll(this.dom);
            return this
        },
        purgeAllListeners: function() {
            Ext.EventManager.purgeElement(this, true);
            return this
        },
        addUnits: function(size) {
            if (size === "" || size == "auto" || size === undefined) {
                size = size || ""
            } else if (!isNaN(size) || !unitPattern.test(size)) {
                size = size + (this.defaultUnit || "px")
            }
            return size
        },
        load: function(url, params, cb) {
            Ext.Ajax.request(Ext.apply({
                params: params,
                url: url.url || url,
                callback: cb,
                el: this.dom,
                indicatorText: url.indicatorText || ""
            }, Ext.isObject(url) ? url : {}));
            return this
        },
        isBorderBox: function() {
            return noBoxAdjust[(this.dom.tagName || "").toLowerCase()] || Ext.isBorderBox
        },
        remove: function() {
            var me = this,
                dom = me.dom;
            if (dom) {
                delete me.dom;
                Ext.removeNode(dom)
            }
        },
        hover: function(overFn, outFn, scope, options) {
            var me = this;
            me.on("mouseenter", overFn, scope || me.dom, options);
            me.on("mouseleave", outFn, scope || me.dom, options);
            return me
        },
        contains: function(el) {
            return !el ? false : Ext.lib.Dom.isAncestor(this.dom, el.dom ? el.dom : el)
        },
        getAttributeNS: function(ns, name) {
            return this.getAttribute(name, ns)
        },
        getAttribute: Ext.isIE ? function(name, ns) {
            var d = this.dom,
                type = typeof d[ns + ":" + name];
            if (["undefined", "unknown"].indexOf(type) == -1) {
                return d[ns + ":" + name]
            }
            return d[name]
        } : function(name, ns) {
            var d = this.dom;
            return d.getAttributeNS(ns, name) || d.getAttribute(ns + ":" + name) || d.getAttribute(name) || d[name]
        },
        update: function(html) {
            if (this.dom) {
                this.dom.innerHTML = html
            }
            return this
        }
    };
    var ep = El.prototype;
    El.addMethods = function(o) {
        Ext.apply(ep, o)
    };
    ep.on = ep.addListener;
    ep.un = ep.removeListener;
    ep.autoBoxAdjust = true;
    var unitPattern = /\d+(px|em|%|en|ex|pt|in|cm|mm|pc)$/i,
        docEl;
    El.get = function(el) {
        var ex, elm, id;
        if (!el) {
            return null
        }
        if (typeof el == "string") {
            if (!(elm = DOC.getElementById(el))) {
                return null
            }
            if (EC[el] && EC[el].el) {
                ex = EC[el].el;
                ex.dom = elm
            } else {
                ex = El.addToCache(new El(elm))
            }
            return ex
        } else if (el.tagName) {
            if (!(id = el.id)) {
                id = Ext.id(el)
            }
            if (EC[id] && EC[id].el) {
                ex = EC[id].el;
                ex.dom = el
            } else {
                ex = El.addToCache(new El(el))
            }
            return ex
        } else if (el instanceof El) {
            if (el != docEl) {
                el.dom = DOC.getElementById(el.id) || el.dom
            }
            return el
        } else if (el.isComposite) {
            return el
        } else if (Ext.isArray(el)) {
            return El.select(el)
        } else if (el == DOC) {
            if (!docEl) {
                var f = function() {};
                f.prototype = El.prototype;
                docEl = new f;
                docEl.dom = DOC
            }
            return docEl
        }
        return null
    };
    El.addToCache = function(el, id) {
        id = id || el.id;
        EC[id] = {
            el: el,
            data: {},
            events: {}
        };
        return el
    };
    El.data = function(el, key, value) {
        el = El.get(el);
        if (!el) {
            return null
        }
        var c = EC[el.id].data;
        if (arguments.length == 2) {
            return c[key]
        } else {
            return c[key] = value
        }
    };

    function garbageCollect() {
        if (!Ext.enableGarbageCollector) {
            clearInterval(El.collectorThreadId)
        } else {
            var eid, el, d, o;
            for (eid in EC) {
                o = EC[eid];
                if (o.skipGC) {
                    continue
                }
                el = o.el;
                d = el.dom;
                if (!d || !d.parentNode || !d.offsetParent && !DOC.getElementById(eid)) {
                    if (Ext.enableListenerCollection) {
                        Ext.EventManager.removeAll(d)
                    }
                    delete EC[eid]
                }
            }
            if (Ext.isIE) {
                var t = {};
                for (eid in EC) {
                    t[eid] = EC[eid]
                }
                EC = Ext.elCache = t
            }
        }
    }
    El.collectorThreadId = setInterval(garbageCollect, 3e4);
    var flyFn = function() {};
    flyFn.prototype = El.prototype;
    El.Flyweight = function(dom) {
        this.dom = dom
    };
    El.Flyweight.prototype = new flyFn;
    El.Flyweight.prototype.isFlyweight = true;
    El._flyweights = {};
    El.fly = function(el, named) {
        var ret = null;
        named = named || "_global";
        if (el = Ext.getDom(el)) {
            (El._flyweights[named] = El._flyweights[named] || new El.Flyweight).dom = el;
            ret = El._flyweights[named]
        }
        return ret
    };
    Ext.get = El.get;
    Ext.fly = El.fly;
    var noBoxAdjust = Ext.isStrict ? {
        select: 1
    } : {
        input: 1,
        select: 1,
        textarea: 1
    };
    if (Ext.isIE || Ext.isGecko) {
        noBoxAdjust["button"] = 1
    }
    Ext.EventManager.on(window, "unload", function() {
        delete EC;
        delete El._flyweights
    })
})();
Ext.Element.addMethods(function() {
    var PARENTNODE = "parentNode",
        NEXTSIBLING = "nextSibling",
        PREVIOUSSIBLING = "previousSibling",
        DQ = Ext.DomQuery,
        GET = Ext.get;
    return {
        findParent: function(simpleSelector, maxDepth, returnEl) {
            var p = this.dom,
                b = document.body,
                depth = 0,
                stopEl;
            if (Ext.isGecko && Object.prototype.toString.call(p) == "[object XULElement]") {
                return null
            }
            maxDepth = maxDepth || 50;
            if (isNaN(maxDepth)) {
                stopEl = Ext.getDom(maxDepth);
                maxDepth = Number.MAX_VALUE
            }
            while (p && p.nodeType == 1 && depth < maxDepth && p != b && p != stopEl) {
                if (DQ.is(p, simpleSelector)) {
                    return returnEl ? GET(p) : p
                }
                depth++;
                p = p.parentNode
            }
            return null
        },
        findParentNode: function(simpleSelector, maxDepth, returnEl) {
            var p = Ext.fly(this.dom.parentNode, "_internal");
            return p ? p.findParent(simpleSelector, maxDepth, returnEl) : null
        },
        up: function(simpleSelector, maxDepth) {
            return this.findParentNode(simpleSelector, maxDepth, true)
        },
        select: function(selector) {
            return Ext.Element.select(selector, this.dom)
        },
        query: function(selector) {
            return DQ.select(selector, this.dom)
        },
        child: function(selector, returnDom) {
            var n = DQ.selectNode(selector, this.dom);
            return returnDom ? n : GET(n)
        },
        down: function(selector, returnDom) {
            var n = DQ.selectNode(" > " + selector, this.dom);
            return returnDom ? n : GET(n)
        },
        parent: function(selector, returnDom) {
            return this.matchNode(PARENTNODE, PARENTNODE, selector, returnDom)
        },
        next: function(selector, returnDom) {
            return this.matchNode(NEXTSIBLING, NEXTSIBLING, selector, returnDom)
        },
        prev: function(selector, returnDom) {
            return this.matchNode(PREVIOUSSIBLING, PREVIOUSSIBLING, selector, returnDom)
        },
        first: function(selector, returnDom) {
            return this.matchNode(NEXTSIBLING, "firstChild", selector, returnDom)
        },
        last: function(selector, returnDom) {
            return this.matchNode(PREVIOUSSIBLING, "lastChild", selector, returnDom)
        },
        matchNode: function(dir, start, selector, returnDom) {
            var n = this.dom[start];
            while (n) {
                if (n.nodeType == 1 && (!selector || DQ.is(n, selector))) {
                    return !returnDom ? GET(n) : n
                }
                n = n[dir]
            }
            return null
        }
    }
}());
Ext.Element.addMethods(function() {
    var GETDOM = Ext.getDom,
        GET = Ext.get,
        DH = Ext.DomHelper;
    return {
        appendChild: function(el) {
            return GET(el).appendTo(this)
        },
        appendTo: function(el) {
            GETDOM(el).appendChild(this.dom);
            return this
        },
        insertBefore: function(el) {
            (el = GETDOM(el)).parentNode.insertBefore(this.dom, el);
            return this
        },
        insertAfter: function(el) {
            (el = GETDOM(el)).parentNode.insertBefore(this.dom, el.nextSibling);
            return this
        },
        insertFirst: function(el, returnDom) {
            el = el || {};
            if (el.nodeType || el.dom || typeof el == "string") {
                el = GETDOM(el);
                this.dom.insertBefore(el, this.dom.firstChild);
                return !returnDom ? GET(el) : el
            } else {
                return this.createChild(el, this.dom.firstChild, returnDom)
            }
        },
        replace: function(el) {
            el = GET(el);
            this.insertBefore(el);
            el.remove();
            return this
        },
        replaceWith: function(el) {
            var me = this;
            if (el.nodeType || el.dom || typeof el == "string") {
                el = GETDOM(el);
                me.dom.parentNode.insertBefore(el, me.dom)
            } else {
                el = DH.insertBefore(me.dom, el)
            }
            delete Ext.elCache[me.id];
            Ext.removeNode(me.dom);
            me.id = Ext.id(me.dom = el);
            Ext.Element.addToCache(me.isFlyweight ? new Ext.Element(me.dom) : me);
            return me
        },
        createChild: function(config, insertBefore, returnDom) {
            config = config || {
                tag: "div"
            };
            return insertBefore ? DH.insertBefore(insertBefore, config, returnDom !== true) : DH[!this.dom.firstChild ? "overwrite" : "append"](this.dom, config, returnDom !== true)
        },
        wrap: function(config, returnDom) {
            var newEl = DH.insertBefore(this.dom, config || {
                tag: "div"
            }, !returnDom);
            newEl.dom ? newEl.dom.appendChild(this.dom) : newEl.appendChild(this.dom);
            return newEl
        },
        insertHtml: function(where, html, returnEl) {
            var el = DH.insertHtml(where, this.dom, html);
            return returnEl ? Ext.get(el) : el
        }
    }
}());
Ext.Element.addMethods(function() {
    var propCache = {},
        camelRe = /(-[a-z])/gi,
        classReCache = {},
        view = document.defaultView,
        propFloat = Ext.isIE ? "styleFloat" : "cssFloat",
        opacityRe = /alpha\(opacity=(.*)\)/i,
        trimRe = /^\s+|\s+$/g,
        EL = Ext.Element,
        PADDING = "padding",
        MARGIN = "margin",
        BORDER = "border",
        LEFT = "-left",
        RIGHT = "-right",
        TOP = "-top",
        BOTTOM = "-bottom",
        WIDTH = "-width",
        MATH = Math,
        HIDDEN = "hidden",
        ISCLIPPED = "isClipped",
        OVERFLOW = "overflow",
        OVERFLOWX = "overflow-x",
        OVERFLOWY = "overflow-y",
        ORIGINALCLIP = "originalClip",
        borders = {
            l: BORDER + LEFT + WIDTH,
            r: BORDER + RIGHT + WIDTH,
            t: BORDER + TOP + WIDTH,
            b: BORDER + BOTTOM + WIDTH
        },
        paddings = {
            l: PADDING + LEFT,
            r: PADDING + RIGHT,
            t: PADDING + TOP,
            b: PADDING + BOTTOM
        },
        margins = {
            l: MARGIN + LEFT,
            r: MARGIN + RIGHT,
            t: MARGIN + TOP,
            b: MARGIN + BOTTOM
        },
        data = Ext.Element.data;

    function camelFn(m, a) {
        return a.charAt(1).toUpperCase()
    }

    function chkCache(prop) {
        return propCache[prop] || (propCache[prop] = prop == "float" ? propFloat : prop.replace(camelRe, camelFn))
    }
    return {
        adjustWidth: function(width) {
            var me = this;
            var isNum = Ext.isNumber(width);
            if (isNum && me.autoBoxAdjust && !me.isBorderBox()) {
                width -= me.getBorderWidth("lr") + me.getPadding("lr")
            }
            return isNum && width < 0 ? 0 : width
        },
        adjustHeight: function(height) {
            var me = this;
            var isNum = Ext.isNumber(height);
            if (isNum && me.autoBoxAdjust && !me.isBorderBox()) {
                height -= me.getBorderWidth("tb") + me.getPadding("tb")
            }
            return isNum && height < 0 ? 0 : height
        },
        addClass: function(className) {
            var me = this,
                i, len, v;
            className = Ext.isArray(className) ? className : [className];
            for (i = 0, len = className.length; i < len; i++) {
                v = className[i];
                if (v) {
                    me.dom.className += !me.hasClass(v) && v ? " " + v : ""
                }
            }
            return me
        },
        radioClass: function(className) {
            var cn = this.dom.parentNode.childNodes,
                v;
            className = Ext.isArray(className) ? className : [className];
            for (var i = 0, len = cn.length; i < len; i++) {
                v = cn[i];
                if (v && v.nodeType == 1) {
                    Ext.fly(v, "_internal").removeClass(className)
                }
            }
            return this.addClass(className)
        },
        removeClass: function(className) {
            var me = this,
                v;
            className = Ext.isArray(className) ? className : [className];
            if (me.dom && me.dom.className) {
                for (var i = 0, len = className.length; i < len; i++) {
                    v = className[i];
                    if (v) {
                        me.dom.className = me.dom.className.replace(classReCache[v] = classReCache[v] || new RegExp("(?:^|\\s+)" + v + "(?:\\s+|$)", "g"), " ")
                    }
                }
            }
            return me
        },
        toggleClass: function(className) {
            return this.hasClass(className) ? this.removeClass(className) : this.addClass(className)
        },
        hasClass: function(className) {
            return className && (" " + this.dom.className + " ").indexOf(" " + className + " ") != -1
        },
        replaceClass: function(oldClassName, newClassName) {
            return this.removeClass(oldClassName).addClass(newClassName)
        },
        isStyle: function(style, val) {
            return this.getStyle(style) == val
        },
        getStyle: function() {
            return view && view.getComputedStyle ? function(prop) {
                var el = this.dom,
                    v, cs, out, display, wk = Ext.isWebKit,
                    display;
                if (el == document) {
                    return null
                }
                prop = chkCache(prop);
                if (wk && /marginRight/.test(prop)) {
                    display = this.getStyle("display");
                    el.style.display = "inline-block"
                }
                out = (v = el.style[prop]) ? v : (cs = view.getComputedStyle(el, "")) ? cs[prop] : null;
                if (wk) {
                    if (out == "rgba(0, 0, 0, 0)") {
                        out = "transparent"
                    } else if (display) {
                        el.style.display = display
                    }
                }
                return out
            } : function(prop) {
                var el = this.dom,
                    m, cs;
                if (el == document) return null;
                if (prop == "opacity") {
                    if (el.style.filter.match) {
                        if (m = el.style.filter.match(opacityRe)) {
                            var fv = parseFloat(m[1]);
                            if (!isNaN(fv)) {
                                return fv ? fv / 100 : 0
                            }
                        }
                    }
                    return 1
                }
                prop = chkCache(prop);
                return el.style[prop] || ((cs = el.currentStyle) ? cs[prop] : null)
            }
        }(),
        getColor: function(attr, defaultValue, prefix) {
            var v = this.getStyle(attr),
                color = Ext.isDefined(prefix) ? prefix : "#",
                h;
            if (!v || /transparent|inherit/.test(v)) {
                return defaultValue
            }
            if (/^r/.test(v)) {
                Ext.each(v.slice(4, v.length - 1).split(","), function(s) {
                    h = parseInt(s, 10);
                    color += (h < 16 ? "0" : "") + h.toString(16)
                })
            } else {
                v = v.replace("#", "");
                color += v.length == 3 ? v.replace(/^(\w)(\w)(\w)$/, "$1$1$2$2$3$3") : v
            }
            return color.length > 5 ? color.toLowerCase() : defaultValue
        },
        setStyle: function(prop, value) {
            var tmp, style, camel;
            if (!Ext.isObject(prop)) {
                tmp = {};
                tmp[prop] = value;
                prop = tmp
            }
            for (style in prop) {
                value = prop[style];
                style == "opacity" ? this.setOpacity(value) : this.dom.style[chkCache(style)] = value
            }
            return this
        },
        setOpacity: function(opacity, animate) {
            var me = this,
                s = me.dom.style;
            if (!animate || !me.anim) {
                if (Ext.isIE) {
                    var opac = opacity < 1 ? "alpha(opacity=" + opacity * 100 + ")" : "",
                        val = s.filter.replace(opacityRe, "").replace(trimRe, "");
                    s.zoom = 1;
                    s.filter = val + (val.length > 0 ? " " : "") + opac
                } else {
                    s.opacity = opacity
                }
            } else {
                me.anim({
                    opacity: {
                        to: opacity
                    }
                }, me.preanim(arguments, 1), null, .35, "easeIn")
            }
            return me
        },
        clearOpacity: function() {
            var style = this.dom.style;
            if (Ext.isIE) {
                if (!Ext.isEmpty(style.filter)) {
                    style.filter = style.filter.replace(opacityRe, "").replace(trimRe, "")
                }
            } else {
                style.opacity = style["-moz-opacity"] = style["-khtml-opacity"] = ""
            }
            return this
        },
        getHeight: function(contentHeight) {
            var me = this,
                dom = me.dom,
                hidden = Ext.isIE && me.isStyle("display", "none"),
                h = MATH.max(dom.offsetHeight, hidden ? 0 : dom.clientHeight) || 0;
            h = !contentHeight ? h : h - me.getBorderWidth("tb") - me.getPadding("tb");
            return h < 0 ? 0 : h
        },
        getWidth: function(contentWidth) {
            var me = this,
                dom = me.dom,
                hidden = Ext.isIE && me.isStyle("display", "none"),
                w = MATH.max(dom.offsetWidth, hidden ? 0 : dom.clientWidth) || 0;
            w = !contentWidth ? w : w - me.getBorderWidth("lr") - me.getPadding("lr");
            return w < 0 ? 0 : w
        },
        setWidth: function(width, animate) {
            var me = this;
            width = me.adjustWidth(width);
            !animate || !me.anim ? me.dom.style.width = me.addUnits(width) : me.anim({
                width: {
                    to: width
                }
            }, me.preanim(arguments, 1));
            return me
        },
        setHeight: function(height, animate) {
            var me = this;
            height = me.adjustHeight(height);
            !animate || !me.anim ? me.dom.style.height = me.addUnits(height) : me.anim({
                height: {
                    to: height
                }
            }, me.preanim(arguments, 1));
            return me
        },
        getBorderWidth: function(side) {
            return this.addStyles(side, borders)
        },
        getPadding: function(side) {
            return this.addStyles(side, paddings)
        },
        clip: function() {
            var me = this,
                dom = me.dom;
            if (!data(dom, ISCLIPPED)) {
                data(dom, ISCLIPPED, true);
                data(dom, ORIGINALCLIP, {
                    o: me.getStyle(OVERFLOW),
                    x: me.getStyle(OVERFLOWX),
                    y: me.getStyle(OVERFLOWY)
                });
                me.setStyle(OVERFLOW, HIDDEN);
                me.setStyle(OVERFLOWX, HIDDEN);
                me.setStyle(OVERFLOWY, HIDDEN)
            }
            return me
        },
        unclip: function() {
            var me = this,
                dom = me.dom;
            if (data(dom, ISCLIPPED)) {
                data(dom, ISCLIPPED, false);
                var o = data(dom, ORIGINALCLIP);
                if (o.o) {
                    me.setStyle(OVERFLOW, o.o)
                }
                if (o.x) {
                    me.setStyle(OVERFLOWX, o.x)
                }
                if (o.y) {
                    me.setStyle(OVERFLOWY, o.y)
                }
            }
            return me
        },
        addStyles: function(sides, styles) {
            var val = 0,
                m = sides.match(/\w/g),
                s;
            for (var i = 0, len = m.length; i < len; i++) {
                s = m[i] && parseInt(this.getStyle(styles[m[i]]), 10);
                if (s) {
                    val += MATH.abs(s)
                }
            }
            return val
        },
        margins: margins
    }
}());
(function() {
    var D = Ext.lib.Dom,
        LEFT = "left",
        RIGHT = "right",
        TOP = "top",
        BOTTOM = "bottom",
        POSITION = "position",
        STATIC = "static",
        RELATIVE = "relative",
        AUTO = "auto",
        ZINDEX = "z-index";
    Ext.Element.addMethods({
        getX: function() {
            return D.getX(this.dom)
        },
        getY: function() {
            return D.getY(this.dom)
        },
        getXY: function() {
            return D.getXY(this.dom)
        },
        getOffsetsTo: function(el) {
            var o = this.getXY(),
                e = Ext.fly(el, "_internal").getXY();
            return [o[0] - e[0], o[1] - e[1]]
        },
        setX: function(x, animate) {
            return this.setXY([x, this.getY()], this.animTest(arguments, animate, 1))
        },
        setY: function(y, animate) {
            return this.setXY([this.getX(), y], this.animTest(arguments, animate, 1))
        },
        setLeft: function(left) {
            this.setStyle(LEFT, this.addUnits(left));
            return this
        },
        setTop: function(top) {
            this.setStyle(TOP, this.addUnits(top));
            return this
        },
        setRight: function(right) {
            this.setStyle(RIGHT, this.addUnits(right));
            return this
        },
        setBottom: function(bottom) {
            this.setStyle(BOTTOM, this.addUnits(bottom));
            return this
        },
        setXY: function(pos, animate) {
            var me = this;
            if (!animate || !me.anim) {
                D.setXY(me.dom, pos)
            } else {
                me.anim({
                    points: {
                        to: pos
                    }
                }, me.preanim(arguments, 1), "motion")
            }
            return me
        },
        setLocation: function(x, y, animate) {
            return this.setXY([x, y], this.animTest(arguments, animate, 2))
        },
        moveTo: function(x, y, animate) {
            return this.setXY([x, y], this.animTest(arguments, animate, 2))
        },
        getLeft: function(local) {
            return !local ? this.getX() : parseInt(this.getStyle(LEFT), 10) || 0
        },
        getRight: function(local) {
            var me = this;
            return !local ? me.getX() + me.getWidth() : me.getLeft(true) + me.getWidth() || 0
        },
        getTop: function(local) {
            return !local ? this.getY() : parseInt(this.getStyle(TOP), 10) || 0
        },
        getBottom: function(local) {
            var me = this;
            return !local ? me.getY() + me.getHeight() : me.getTop(true) + me.getHeight() || 0
        },
        position: function(pos, zIndex, x, y) {
            var me = this;
            if (!pos && me.isStyle(POSITION, STATIC)) {
                me.setStyle(POSITION, RELATIVE)
            } else if (pos) {
                me.setStyle(POSITION, pos)
            }
            if (zIndex) {
                me.setStyle(ZINDEX, zIndex)
            }
            if (x || y) me.setXY([x || false, y || false])
        },
        clearPositioning: function(value) {
            value = value || "";
            this.setStyle({
                left: value,
                right: value,
                top: value,
                bottom: value,
                "z-index": "",
                position: STATIC
            });
            return this
        },
        getPositioning: function() {
            var l = this.getStyle(LEFT);
            var t = this.getStyle(TOP);
            return {
                position: this.getStyle(POSITION),
                left: l,
                right: l ? "" : this.getStyle(RIGHT),
                top: t,
                bottom: t ? "" : this.getStyle(BOTTOM),
                "z-index": this.getStyle(ZINDEX)
            }
        },
        setPositioning: function(pc) {
            var me = this,
                style = me.dom.style;
            me.setStyle(pc);
            if (pc.right == AUTO) {
                style.right = ""
            }
            if (pc.bottom == AUTO) {
                style.bottom = ""
            }
            return me
        },
        translatePoints: function(x, y) {
            y = isNaN(x[1]) ? y : x[1];
            x = isNaN(x[0]) ? x : x[0];
            var me = this,
                relative = me.isStyle(POSITION, RELATIVE),
                o = me.getXY(),
                l = parseInt(me.getStyle(LEFT), 10),
                t = parseInt(me.getStyle(TOP), 10);
            l = !isNaN(l) ? l : relative ? 0 : me.dom.offsetLeft;
            t = !isNaN(t) ? t : relative ? 0 : me.dom.offsetTop;
            return {
                left: x - o[0] + l,
                top: y - o[1] + t
            }
        },
        animTest: function(args, animate, i) {
            return !!animate && this.preanim ? this.preanim(args, i) : false
        }
    })
})();
Ext.Element.addMethods({
    isScrollable: function() {
        var dom = this.dom;
        return dom.scrollHeight > dom.clientHeight || dom.scrollWidth > dom.clientWidth
    },
    scrollTo: function(side, value) {
        this.dom["scroll" + (/top/i.test(side) ? "Top" : "Left")] = value;
        return this
    },
    getScroll: function() {
        var d = this.dom,
            doc = document,
            body = doc.body,
            docElement = doc.documentElement,
            l, t, ret;
        if (d == doc || d == body) {
            if (Ext.isIE && Ext.isStrict) {
                l = docElement.scrollLeft;
                t = docElement.scrollTop
            } else {
                l = window.pageXOffset;
                t = window.pageYOffset
            }
            ret = {
                left: l || (body ? body.scrollLeft : 0),
                top: t || (body ? body.scrollTop : 0)
            }
        } else {
            ret = {
                left: d.scrollLeft,
                top: d.scrollTop
            }
        }
        return ret
    }
});
Ext.Element.VISIBILITY = 1;
Ext.Element.DISPLAY = 2;
Ext.Element.addMethods(function() {
    var VISIBILITY = "visibility",
        DISPLAY = "display",
        HIDDEN = "hidden",
        NONE = "none",
        ORIGINALDISPLAY = "originalDisplay",
        VISMODE = "visibilityMode",
        ELDISPLAY = Ext.Element.DISPLAY,
        data = Ext.Element.data,
        getDisplay = function(dom) {
            var d = data(dom, ORIGINALDISPLAY);
            if (d === undefined) {
                data(dom, ORIGINALDISPLAY, d = "")
            }
            return d
        },
        getVisMode = function(dom) {
            var m = data(dom, VISMODE);
            if (m === undefined) {
                data(dom, VISMODE, m = 1)
            }
            return m
        };
    return {
        originalDisplay: "",
        visibilityMode: 1,
        setVisibilityMode: function(visMode) {
            data(this.dom, VISMODE, visMode);
            return this
        },
        animate: function(args, duration, onComplete, easing, animType) {
            this.anim(args, {
                duration: duration,
                callback: onComplete,
                easing: easing
            }, animType);
            return this
        },
        anim: function(args, opt, animType, defaultDur, defaultEase, cb) {
            animType = animType || "run";
            opt = opt || {};
            var me = this,
                anim = Ext.lib.Anim[animType](me.dom, args, opt.duration || defaultDur || .35, opt.easing || defaultEase || "easeOut", function() {
                    if (cb) cb.call(me);
                    if (opt.callback) opt.callback.call(opt.scope || me, me, opt)
                }, me);
            opt.anim = anim;
            return anim
        },
        preanim: function(a, i) {
            return !a[i] ? false : Ext.isObject(a[i]) ? a[i] : {
                duration: a[i + 1],
                callback: a[i + 2],
                easing: a[i + 3]
            }
        },
        isVisible: function() {
            return !this.isStyle(VISIBILITY, HIDDEN) && !this.isStyle(DISPLAY, NONE)
        },
        setVisible: function(visible, animate) {
            var me = this,
                dom = me.dom,
                isDisplay = getVisMode(this.dom) == ELDISPLAY;
            if (!animate || !me.anim) {
                if (isDisplay) {
                    me.setDisplayed(visible)
                } else {
                    me.fixDisplay();
                    dom.style.visibility = visible ? "visible" : HIDDEN
                }
            } else {
                if (visible) {
                    me.setOpacity(.01);
                    me.setVisible(true)
                }
                me.anim({
                    opacity: {
                        to: visible ? 1 : 0
                    }
                }, me.preanim(arguments, 1), null, .35, "easeIn", function() {
                    if (!visible) {
                        dom.style[isDisplay ? DISPLAY : VISIBILITY] = isDisplay ? NONE : HIDDEN;
                        Ext.fly(dom).setOpacity(1)
                    }
                })
            }
            return me
        },
        toggle: function(animate) {
            var me = this;
            me.setVisible(!me.isVisible(), me.preanim(arguments, 0));
            return me
        },
        setDisplayed: function(value) {
            if (typeof value == "boolean") {
                value = value ? getDisplay(this.dom) : NONE
            }
            this.setStyle(DISPLAY, value);
            return this
        },
        fixDisplay: function() {
            var me = this;
            if (me.isStyle(DISPLAY, NONE)) {
                me.setStyle(VISIBILITY, HIDDEN);
                me.setStyle(DISPLAY, getDisplay(this.dom));
                if (me.isStyle(DISPLAY, NONE)) {
                    me.setStyle(DISPLAY, "block")
                }
            }
        },
        hide: function(animate) {
            this.setVisible(false, this.preanim(arguments, 0));
            return this
        },
        show: function(animate) {
            this.setVisible(true, this.preanim(arguments, 0));
            return this
        }
    }
}());
(function() {
    var NULL = null,
        UNDEFINED = undefined,
        TRUE = true,
        FALSE = false,
        SETX = "setX",
        SETY = "setY",
        SETXY = "setXY",
        LEFT = "left",
        BOTTOM = "bottom",
        TOP = "top",
        RIGHT = "right",
        HEIGHT = "height",
        WIDTH = "width",
        POINTS = "points",
        HIDDEN = "hidden",
        ABSOLUTE = "absolute",
        VISIBLE = "visible",
        MOTION = "motion",
        POSITION = "position",
        EASEOUT = "easeOut",
        flyEl = new Ext.Element.Flyweight,
        queues = {},
        getObject = function(o) {
            return o || {}
        },
        fly = function(dom) {
            flyEl.dom = dom;
            flyEl.id = Ext.id(dom);
            return flyEl
        },
        getQueue = function(id) {
            if (!queues[id]) {
                queues[id] = []
            }
            return queues[id]
        },
        setQueue = function(id, value) {
            queues[id] = value
        };
    Ext.enableFx = TRUE;
    Ext.Fx = {
        switchStatements: function(key, fn, argHash) {
            return fn.apply(this, argHash[key])
        },
        slideIn: function(anchor, o) {
            o = getObject(o);
            var me = this,
                dom = me.dom,
                st = dom.style,
                xy, r, b, wrap, after, st, args, pt, bw, bh;
            anchor = anchor || "t";
            me.queueFx(o, function() {
                xy = fly(dom).getXY();
                fly(dom).fixDisplay();
                r = fly(dom).getFxRestore();
                b = {
                    x: xy[0],
                    y: xy[1],
                    0: xy[0],
                    1: xy[1],
                    width: dom.offsetWidth,
                    height: dom.offsetHeight
                };
                b.right = b.x + b.width;
                b.bottom = b.y + b.height;
                fly(dom).setWidth(b.width).setHeight(b.height);
                wrap = fly(dom).fxWrap(r.pos, o, HIDDEN);
                st.visibility = VISIBLE;
                st.position = ABSOLUTE;

                function after() {
                    fly(dom).fxUnwrap(wrap, r.pos, o);
                    st.width = r.width;
                    st.height = r.height;
                    fly(dom).afterFx(o)
                }
                pt = {
                    to: [b.x, b.y]
                };
                bw = {
                    to: b.width
                };
                bh = {
                    to: b.height
                };

                function argCalc(wrap, style, ww, wh, sXY, sXYval, s1, s2, w, h, p) {
                    var ret = {};
                    fly(wrap).setWidth(ww).setHeight(wh);
                    if (fly(wrap)[sXY]) {
                        fly(wrap)[sXY](sXYval)
                    }
                    style[s1] = style[s2] = "0";
                    if (w) {
                        ret.width = w
                    }
                    if (h) {
                        ret.height = h
                    }
                    if (p) {
                        ret.points = p
                    }
                    return ret
                }
                args = fly(dom).switchStatements(anchor.toLowerCase(), argCalc, {
                    t: [wrap, st, b.width, 0, NULL, NULL, LEFT, BOTTOM, NULL, bh, NULL],
                    l: [wrap, st, 0, b.height, NULL, NULL, RIGHT, TOP, bw, NULL, NULL],
                    r: [wrap, st, b.width, b.height, SETX, b.right, LEFT, TOP, NULL, NULL, pt],
                    b: [wrap, st, b.width, b.height, SETY, b.bottom, LEFT, TOP, NULL, bh, pt],
                    tl: [wrap, st, 0, 0, NULL, NULL, RIGHT, BOTTOM, bw, bh, pt],
                    bl: [wrap, st, 0, 0, SETY, b.y + b.height, RIGHT, TOP, bw, bh, pt],
                    br: [wrap, st, 0, 0, SETXY, [b.right, b.bottom], LEFT, TOP, bw, bh, pt],
                    tr: [wrap, st, 0, 0, SETX, b.x + b.width, LEFT, BOTTOM, bw, bh, pt]
                });
                st.visibility = VISIBLE;
                fly(wrap).show();
                arguments.callee.anim = fly(wrap).fxanim(args, o, MOTION, .5, EASEOUT, after)
            });
            return me
        },
        slideOut: function(anchor, o) {
            o = getObject(o);
            var me = this,
                dom = me.dom,
                st = dom.style,
                xy = me.getXY(),
                wrap, r, b, a, zero = {
                    to: 0
                };
            anchor = anchor || "t";
            me.queueFx(o, function() {
                r = fly(dom).getFxRestore();
                b = {
                    x: xy[0],
                    y: xy[1],
                    0: xy[0],
                    1: xy[1],
                    width: dom.offsetWidth,
                    height: dom.offsetHeight
                };
                b.right = b.x + b.width;
                b.bottom = b.y + b.height;
                fly(dom).setWidth(b.width).setHeight(b.height);
                wrap = fly(dom).fxWrap(r.pos, o, VISIBLE);
                st.visibility = VISIBLE;
                st.position = ABSOLUTE;
                fly(wrap).setWidth(b.width).setHeight(b.height);

                function after() {
                    o.useDisplay ? fly(dom).setDisplayed(FALSE) : fly(dom).hide();
                    fly(dom).fxUnwrap(wrap, r.pos, o);
                    st.width = r.width;
                    st.height = r.height;
                    fly(dom).afterFx(o)
                }

                function argCalc(style, s1, s2, p1, v1, p2, v2, p3, v3) {
                    var ret = {};
                    style[s1] = style[s2] = "0";
                    ret[p1] = v1;
                    if (p2) {
                        ret[p2] = v2
                    }
                    if (p3) {
                        ret[p3] = v3
                    }
                    return ret
                }
                a = fly(dom).switchStatements(anchor.toLowerCase(), argCalc, {
                    t: [st, LEFT, BOTTOM, HEIGHT, zero],
                    l: [st, RIGHT, TOP, WIDTH, zero],
                    r: [st, LEFT, TOP, WIDTH, zero, POINTS, {
                        to: [b.right, b.y]
                    }],
                    b: [st, LEFT, TOP, HEIGHT, zero, POINTS, {
                        to: [b.x, b.bottom]
                    }],
                    tl: [st, RIGHT, BOTTOM, WIDTH, zero, HEIGHT, zero],
                    bl: [st, RIGHT, TOP, WIDTH, zero, HEIGHT, zero, POINTS, {
                        to: [b.x, b.bottom]
                    }],
                    br: [st, LEFT, TOP, WIDTH, zero, HEIGHT, zero, POINTS, {
                        to: [b.x + b.width, b.bottom]
                    }],
                    tr: [st, LEFT, BOTTOM, WIDTH, zero, HEIGHT, zero, POINTS, {
                        to: [b.right, b.y]
                    }]
                });
                arguments.callee.anim = fly(wrap).fxanim(a, o, MOTION, .5, EASEOUT, after)
            });
            return me
        },
        puff: function(o) {
            o = getObject(o);
            var me = this,
                dom = me.dom,
                st = dom.style,
                width, height, r;
            me.queueFx(o, function() {
                width = fly(dom).getWidth();
                height = fly(dom).getHeight();
                fly(dom).clearOpacity();
                fly(dom).show();
                r = fly(dom).getFxRestore();

                function after() {
                    o.useDisplay ? fly(dom).setDisplayed(FALSE) : fly(dom).hide();
                    fly(dom).clearOpacity();
                    fly(dom).setPositioning(r.pos);
                    st.width = r.width;
                    st.height = r.height;
                    st.fontSize = "";
                    fly(dom).afterFx(o)
                }
                arguments.callee.anim = fly(dom).fxanim({
                    width: {
                        to: fly(dom).adjustWidth(width * 2)
                    },
                    height: {
                        to: fly(dom).adjustHeight(height * 2)
                    },
                    points: {
                        by: [-width * .5, -height * .5]
                    },
                    opacity: {
                        to: 0
                    },
                    fontSize: {
                        to: 200,
                        unit: "%"
                    }
                }, o, MOTION, .5, EASEOUT, after)
            });
            return me
        },
        switchOff: function(o) {
            o = getObject(o);
            var me = this,
                dom = me.dom,
                st = dom.style,
                r;
            me.queueFx(o, function() {
                fly(dom).clearOpacity();
                fly(dom).clip();
                r = fly(dom).getFxRestore();

                function after() {
                    o.useDisplay ? fly(dom).setDisplayed(FALSE) : fly(dom).hide();
                    fly(dom).clearOpacity();
                    fly(dom).setPositioning(r.pos);
                    st.width = r.width;
                    st.height = r.height;
                    fly(dom).afterFx(o)
                }
                fly(dom).fxanim({
                    opacity: {
                        to: .3
                    }
                }, NULL, NULL, .1, NULL, function() {
                    fly(dom).clearOpacity();
                    (function() {
                        fly(dom).fxanim({
                            height: {
                                to: 1
                            },
                            points: {
                                by: [0, fly(dom).getHeight() * .5]
                            }
                        }, o, MOTION, .3, "easeIn", after)
                    }).defer(100)
                })
            });
            return me
        },
        highlight: function(color, o) {
            o = getObject(o);
            var me = this,
                dom = me.dom,
                attr = o.attr || "backgroundColor",
                a = {},
                restore;
            me.queueFx(o, function() {
                fly(dom).clearOpacity();
                fly(dom).show();

                function after() {
                    dom.style[attr] = restore;
                    fly(dom).afterFx(o)
                }
                restore = dom.style[attr];
                a[attr] = {
                    from: color || "ffff9c",
                    to: o.endColor || fly(dom).getColor(attr) || "ffffff"
                };
                arguments.callee.anim = fly(dom).fxanim(a, o, "color", 1, "easeIn", after)
            });
            return me
        },
        frame: function(color, count, o) {
            o = getObject(o);
            var me = this,
                dom = me.dom,
                proxy, active;
            me.queueFx(o, function() {
                color = color || "#C3DAF9";
                if (color.length == 6) {
                    color = "#" + color
                }
                count = count || 1;
                fly(dom).show();
                var xy = fly(dom).getXY(),
                    b = {
                        x: xy[0],
                        y: xy[1],
                        0: xy[0],
                        1: xy[1],
                        width: dom.offsetWidth,
                        height: dom.offsetHeight
                    },
                    queue = function() {
                        proxy = fly(document.body || document.documentElement).createChild({
                            style: {
                                position: ABSOLUTE,
                                "z-index": 35e3,
                                border: "0px solid " + color
                            }
                        });
                        return proxy.queueFx({}, animFn)
                    };
                arguments.callee.anim = {
                    isAnimated: true,
                    stop: function() {
                        count = 0;
                        proxy.stopFx()
                    }
                };

                function animFn() {
                    var scale = Ext.isBorderBox ? 2 : 1;
                    active = proxy.anim({
                        top: {
                            from: b.y,
                            to: b.y - 20
                        },
                        left: {
                            from: b.x,
                            to: b.x - 20
                        },
                        borderWidth: {
                            from: 0,
                            to: 10
                        },
                        opacity: {
                            from: 1,
                            to: 0
                        },
                        height: {
                            from: b.height,
                            to: b.height + 20 * scale
                        },
                        width: {
                            from: b.width,
                            to: b.width + 20 * scale
                        }
                    }, {
                        duration: o.duration || 1,
                        callback: function() {
                            proxy.remove();
                            --count > 0 ? queue() : fly(dom).afterFx(o)
                        }
                    });
                    arguments.callee.anim = {
                        isAnimated: true,
                        stop: function() {
                            active.stop()
                        }
                    }
                }
                queue()
            });
            return me
        },
        pause: function(seconds) {
            var dom = this.dom,
                t;
            this.queueFx({}, function() {
                t = setTimeout(function() {
                    fly(dom).afterFx({})
                }, seconds * 1e3);
                arguments.callee.anim = {
                    isAnimated: true,
                    stop: function() {
                        clearTimeout(t);
                        fly(dom).afterFx({})
                    }
                }
            });
            return this
        },
        fadeIn: function(o) {
            o = getObject(o);
            var me = this,
                dom = me.dom,
                to = o.endOpacity || 1;
            me.queueFx(o, function() {
                fly(dom).setOpacity(0);
                fly(dom).fixDisplay();
                dom.style.visibility = VISIBLE;
                arguments.callee.anim = fly(dom).fxanim({
                    opacity: {
                        to: to
                    }
                }, o, NULL, .5, EASEOUT, function() {
                    if (to == 1) {
                        fly(dom).clearOpacity()
                    }
                    fly(dom).afterFx(o)
                })
            });
            return me
        },
        fadeOut: function(o) {
            o = getObject(o);
            var me = this,
                dom = me.dom,
                style = dom.style,
                to = o.endOpacity || 0;
            me.queueFx(o, function() {
                arguments.callee.anim = fly(dom).fxanim({
                    opacity: {
                        to: to
                    }
                }, o, NULL, .5, EASEOUT, function() {
                    if (to == 0) {
                        Ext.Element.data(dom, "visibilityMode") == Ext.Element.DISPLAY || o.useDisplay ? style.display = "none" : style.visibility = HIDDEN;
                        fly(dom).clearOpacity()
                    }
                    fly(dom).afterFx(o)
                })
            });
            return me
        },
        scale: function(w, h, o) {
            this.shift(Ext.apply({}, o, {
                width: w,
                height: h
            }));
            return this
        },
        shift: function(o) {
            o = getObject(o);
            var dom = this.dom,
                a = {};
            this.queueFx(o, function() {
                for (var prop in o) {
                    if (o[prop] != UNDEFINED) {
                        a[prop] = {
                            to: o[prop]
                        }
                    }
                }
                a.width ? a.width.to = fly(dom).adjustWidth(o.width) : a;
                a.height ? a.height.to = fly(dom).adjustWidth(o.height) : a;
                if (a.x || a.y || a.xy) {
                    a.points = a.xy || {
                        to: [a.x ? a.x.to : fly(dom).getX(), a.y ? a.y.to : fly(dom).getY()]
                    }
                }
                arguments.callee.anim = fly(dom).fxanim(a, o, MOTION, .35, EASEOUT, function() {
                    fly(dom).afterFx(o)
                })
            });
            return this
        },
        ghost: function(anchor, o) {
            o = getObject(o);
            var me = this,
                dom = me.dom,
                st = dom.style,
                a = {
                    opacity: {
                        to: 0
                    },
                    points: {}
                },
                pt = a.points,
                r, w, h;
            anchor = anchor || "b";
            me.queueFx(o, function() {
                r = fly(dom).getFxRestore();
                w = fly(dom).getWidth();
                h = fly(dom).getHeight();

                function after() {
                    o.useDisplay ? fly(dom).setDisplayed(FALSE) : fly(dom).hide();
                    fly(dom).clearOpacity();
                    fly(dom).setPositioning(r.pos);
                    st.width = r.width;
                    st.height = r.height;
                    fly(dom).afterFx(o)
                }
                pt.by = fly(dom).switchStatements(anchor.toLowerCase(), function(v1, v2) {
                    return [v1, v2]
                }, {
                    t: [0, -h],
                    l: [-w, 0],
                    r: [w, 0],
                    b: [0, h],
                    tl: [-w, -h],
                    bl: [-w, h],
                    br: [w, h],
                    tr: [w, -h]
                });
                arguments.callee.anim = fly(dom).fxanim(a, o, MOTION, .5, EASEOUT, after)
            });
            return me
        },
        syncFx: function() {
            var me = this;
            me.fxDefaults = Ext.apply(me.fxDefaults || {}, {
                block: FALSE,
                concurrent: TRUE,
                stopFx: FALSE
            });
            return me
        },
        sequenceFx: function() {
            var me = this;
            me.fxDefaults = Ext.apply(me.fxDefaults || {}, {
                block: FALSE,
                concurrent: FALSE,
                stopFx: FALSE
            });
            return me
        },
        nextFx: function() {
            var ef = getQueue(this.dom.id)[0];
            if (ef) {
                ef.call(this)
            }
        },
        hasActiveFx: function() {
            return getQueue(this.dom.id)[0]
        },
        stopFx: function(finish) {
            var me = this,
                id = me.dom.id;
            if (me.hasActiveFx()) {
                var cur = getQueue(id)[0];
                if (cur && cur.anim) {
                    if (cur.anim.isAnimated) {
                        setQueue(id, [cur]);
                        cur.anim.stop(finish !== undefined ? finish : TRUE)
                    } else {
                        setQueue(id, [])
                    }
                }
            }
            return me
        },
        beforeFx: function(o) {
            if (this.hasActiveFx() && !o.concurrent) {
                if (o.stopFx) {
                    this.stopFx();
                    return TRUE
                }
                return FALSE
            }
            return TRUE
        },
        hasFxBlock: function() {
            var q = getQueue(this.dom.id);
            return q && q[0] && q[0].block
        },
        queueFx: function(o, fn) {
            var me = fly(this.dom);
            if (!me.hasFxBlock()) {
                Ext.applyIf(o, me.fxDefaults);
                if (!o.concurrent) {
                    var run = me.beforeFx(o);
                    fn.block = o.block;
                    getQueue(me.dom.id).push(fn);
                    if (run) {
                        me.nextFx()
                    }
                } else {
                    fn.call(me)
                }
            }
            return me
        },
        fxWrap: function(pos, o, vis) {
            var dom = this.dom,
                wrap, wrapXY;
            if (!o.wrap || !(wrap = Ext.getDom(o.wrap))) {
                if (o.fixPosition) {
                    wrapXY = fly(dom).getXY()
                }
                var div = document.createElement("div");
                div.style.visibility = vis;
                wrap = dom.parentNode.insertBefore(div, dom);
                fly(wrap).setPositioning(pos);
                if (fly(wrap).isStyle(POSITION, "static")) {
                    fly(wrap).position("relative")
                }
                fly(dom).clearPositioning("auto");
                fly(wrap).clip();
                wrap.appendChild(dom);
                if (wrapXY) {
                    fly(wrap).setXY(wrapXY)
                }
            }
            return wrap
        },
        fxUnwrap: function(wrap, pos, o) {
            var dom = this.dom;
            fly(dom).clearPositioning();
            fly(dom).setPositioning(pos);
            if (!o.wrap) {
                var pn = fly(wrap).dom.parentNode;
                pn.insertBefore(dom, wrap);
                fly(wrap).remove()
            }
        },
        getFxRestore: function() {
            var st = this.dom.style;
            return {
                pos: this.getPositioning(),
                width: st.width,
                height: st.height
            }
        },
        afterFx: function(o) {
            var dom = this.dom,
                id = dom.id;
            if (o.afterStyle) {
                fly(dom).setStyle(o.afterStyle)
            }
            if (o.afterCls) {
                fly(dom).addClass(o.afterCls)
            }
            if (o.remove == TRUE) {
                fly(dom).remove()
            }
            if (o.callback) {
                o.callback.call(o.scope, fly(dom))
            }
            if (!o.concurrent) {
                getQueue(id).shift();
                fly(dom).nextFx()
            }
        },
        fxanim: function(args, opt, animType, defaultDur, defaultEase, cb) {
            animType = animType || "run";
            opt = opt || {};
            var anim = Ext.lib.Anim[animType](this.dom, args, opt.duration || defaultDur || .35, opt.easing || defaultEase || EASEOUT, cb, this);
            opt.anim = anim;
            return anim
        }
    };
    Ext.Fx.resize = Ext.Fx.scale;
    Ext.Element.addMethods(Ext.Fx)
})();
Ext.CompositeElementLite = function(els, root) {
    this.elements = [];
    this.add(els, root);
    this.el = new Ext.Element.Flyweight
};
Ext.CompositeElementLite.prototype = {
    isComposite: true,
    getElement: function(el) {
        var e = this.el;
        e.dom = el;
        e.id = el.id;
        return e
    },
    transformElement: function(el) {
        return Ext.getDom(el)
    },
    getCount: function() {
        return this.elements.length
    },
    add: function(els, root) {
        var me = this,
            elements = me.elements;
        if (!els) {
            return this
        }
        if (Ext.isString(els)) {
            els = Ext.Element.selectorFunction(els, root)
        } else if (els.isComposite) {
            els = els.elements
        } else if (!Ext.isIterable(els)) {
            els = [els]
        }
        for (var i = 0, len = els.length; i < len; ++i) {
            elements.push(me.transformElement(els[i]))
        }
        return me
    },
    invoke: function(fn, args) {
        var me = this,
            els = me.elements,
            len = els.length,
            e, i;
        for (i = 0; i < len; i++) {
            e = els[i];
            if (e) {
                Ext.Element.prototype[fn].apply(me.getElement(e), args)
            }
        }
        return me
    },
    item: function(index) {
        var me = this,
            el = me.elements[index],
            out = null;
        if (el) {
            out = me.getElement(el)
        }
        return out
    },
    addListener: function(eventName, handler, scope, opt) {
        var els = this.elements,
            len = els.length,
            i, e;
        for (i = 0; i < len; i++) {
            e = els[i];
            if (e) {
                Ext.EventManager.on(e, eventName, handler, scope || e, opt)
            }
        }
        return this
    },
    each: function(fn, scope) {
        var me = this,
            els = me.elements,
            len = els.length,
            i, e;
        for (i = 0; i < len; i++) {
            e = els[i];
            if (e) {
                e = this.getElement(e);
                if (fn.call(scope || e, e, me, i)) {
                    break
                }
            }
        }
        return me
    },
    fill: function(els) {
        var me = this;
        me.elements = [];
        me.add(els);
        return me
    },
    filter: function(selector) {
        var els = [],
            me = this,
            elements = me.elements,
            fn = Ext.isFunction(selector) ? selector : function(el) {
                return el.is(selector)
            };
        me.each(function(el, self, i) {
            if (fn(el, i) !== false) {
                els[els.length] = me.transformElement(el)
            }
        });
        me.elements = els;
        return me
    },
    indexOf: function(el) {
        return this.elements.indexOf(this.transformElement(el))
    },
    replaceElement: function(el, replacement, domReplace) {
        var index = !isNaN(el) ? el : this.indexOf(el),
            d;
        if (index > -1) {
            replacement = Ext.getDom(replacement);
            if (domReplace) {
                d = this.elements[index];
                d.parentNode.insertBefore(replacement, d);
                Ext.removeNode(d)
            }
            this.elements.splice(index, 1, replacement)
        }
        return this
    },
    clear: function() {
        this.elements = []
    }
};
Ext.CompositeElementLite.prototype.on = Ext.CompositeElementLite.prototype.addListener;
(function() {
    var fnName, ElProto = Ext.Element.prototype,
        CelProto = Ext.CompositeElementLite.prototype;
    for (fnName in ElProto) {
        if (Ext.isFunction(ElProto[fnName])) {
            (function(fnName) {
                CelProto[fnName] = CelProto[fnName] || function() {
                    return this.invoke(fnName, arguments)
                }
            }).call(CelProto, fnName)
        }
    }
})();
if (Ext.DomQuery) {
    Ext.Element.selectorFunction = Ext.DomQuery.select
}
Ext.Element.select = function(selector, root) {
    var els;
    if (typeof selector == "string") {
        els = Ext.Element.selectorFunction(selector, root)
    } else if (selector.length !== undefined) {
        els = selector
    } else {
        throw "Invalid selector"
    }
    return new Ext.CompositeElementLite(els)
};
Ext.select = Ext.Element.select;
(function() {
    var BEFOREREQUEST = "beforerequest",
        REQUESTCOMPLETE = "requestcomplete",
        REQUESTEXCEPTION = "requestexception",
        UNDEFINED = undefined,
        LOAD = "load",
        POST = "POST",
        GET = "GET",
        WINDOW = window;
    Ext.data.Connection = function(config) {
        Ext.apply(this, config);
        this.addEvents(BEFOREREQUEST, REQUESTCOMPLETE, REQUESTEXCEPTION);
        Ext.data.Connection.superclass.constructor.call(this)
    };
    Ext.extend(Ext.data.Connection, Ext.util.Observable, {
        timeout: 3e4,
        autoAbort: false,
        disableCaching: true,
        disableCachingParam: "_dc",
        request: function(o) {
            var me = this;
            if (me.fireEvent(BEFOREREQUEST, me, o)) {
                if (o.el) {
                    if (!Ext.isEmpty(o.indicatorText)) {
                        me.indicatorText = '<div class="loading-indicator">' + o.indicatorText + "</div>"
                    }
                    if (me.indicatorText) {
                        Ext.getDom(o.el).innerHTML = me.indicatorText
                    }
                    o.success = (Ext.isFunction(o.success) ? o.success : function() {}).createInterceptor(function(response) {
                        Ext.getDom(o.el).innerHTML = response.responseText
                    })
                }
                var p = o.params,
                    url = o.url || me.url,
                    method, cb = {
                        success: me.handleResponse,
                        failure: me.handleFailure,
                        scope: me,
                        argument: {
                            options: o
                        },
                        timeout: o.timeout || me.timeout
                    },
                    form, serForm;
                if (Ext.isFunction(p)) {
                    p = p.call(o.scope || WINDOW, o)
                }
                p = Ext.urlEncode(me.extraParams, Ext.isObject(p) ? Ext.urlEncode(p) : p);
                if (Ext.isFunction(url)) {
                    url = url.call(o.scope || WINDOW, o)
                }
                if (form = Ext.getDom(o.form)) {
                    url = url || form.action;
                    if (o.isUpload || /multipart\/form-data/i.test(form.getAttribute("enctype"))) {
                        return me.doFormUpload.call(me, o, p, url)
                    }
                    serForm = Ext.lib.Ajax.serializeForm(form);
                    p = p ? p + "&" + serForm : serForm
                }
                method = o.method || me.method || (p || o.xmlData || o.jsonData ? POST : GET);
                if (method === GET && (me.disableCaching && o.disableCaching !== false) || o.disableCaching === true) {
                    var dcp = o.disableCachingParam || me.disableCachingParam;
                    url = Ext.urlAppend(url, dcp + "=" + (new Date).getTime())
                }
                o.headers = Ext.apply(o.headers || {}, me.defaultHeaders || {});
                if (o.autoAbort === true || me.autoAbort) {
                    me.abort()
                }
                if ((method == GET || o.xmlData || o.jsonData) && p) {
                    url = Ext.urlAppend(url, p);
                    p = ""
                }
                return me.transId = Ext.lib.Ajax.request(method, url, cb, p, o)
            } else {
                return o.callback ? o.callback.apply(o.scope, [o, UNDEFINED, UNDEFINED]) : null
            }
        },
        isLoading: function(transId) {
            return transId ? Ext.lib.Ajax.isCallInProgress(transId) : !!this.transId
        },
        abort: function(transId) {
            if (transId || this.isLoading()) {
                Ext.lib.Ajax.abort(transId || this.transId)
            }
        },
        handleResponse: function(response) {
            this.transId = false;
            var options = response.argument.options;
            response.argument = options ? options.argument : null;
            this.fireEvent(REQUESTCOMPLETE, this, response, options);
            if (options.success) {
                options.success.call(options.scope, response, options)
            }
            if (options.callback) {
                options.callback.call(options.scope, options, true, response)
            }
        },
        handleFailure: function(response, e) {
            this.transId = false;
            var options = response.argument.options;
            response.argument = options ? options.argument : null;
            this.fireEvent(REQUESTEXCEPTION, this, response, options, e);
            if (options.failure) {
                options.failure.call(options.scope, response, options)
            }
            if (options.callback) {
                options.callback.call(options.scope, options, false, response)
            }
        },
        doFormUpload: function(o, ps, url) {
            var id = Ext.id(),
                doc = document,
                frame = doc.createElement("iframe"),
                form = Ext.getDom(o.form),
                hiddens = [],
                hd, encoding = "multipart/form-data",
                buf = {
                    target: form.target,
                    method: form.method,
                    encoding: form.encoding,
                    enctype: form.enctype,
                    action: form.action
                };
            Ext.fly(frame).set({
                id: id,
                name: id,
                cls: "x-hidden"
            });
            doc.body.appendChild(frame);
            Ext.fly(frame).set({
                src: Ext.SSL_SECURE_URL
            });
            if (Ext.isIE) {
                document.frames[id].name = id
            }
            Ext.fly(form).set({
                target: id,
                method: POST,
                enctype: encoding,
                encoding: encoding,
                action: url || buf.action
            });
            Ext.iterate(Ext.urlDecode(ps, false), function(k, v) {
                hd = doc.createElement("input");
                Ext.fly(hd).set({
                    type: "hidden",
                    value: v,
                    name: k
                });
                form.appendChild(hd);
                hiddens.push(hd)
            });

            function cb() {
                var me = this,
                    r = {
                        responseText: "",
                        responseXML: null,
                        argument: o.argument
                    },
                    doc, firstChild;
                try {
                    doc = frame.contentWindow.document || frame.contentDocument || WINDOW.frames[id].document;
                    if (doc) {
                        if (doc.body) {
                            if (/textarea/i.test((firstChild = doc.body.firstChild || {}).tagName)) {
                                r.responseText = firstChild.value
                            } else {
                                r.responseText = doc.body.innerHTML
                            }
                        }
                        r.responseXML = doc.XMLDocument || doc
                    }
                } catch (e) {}
                Ext.EventManager.removeListener(frame, LOAD, cb, me);
                me.fireEvent(REQUESTCOMPLETE, me, r, o);

                function runCallback(fn, scope, args) {
                    if (Ext.isFunction(fn)) {
                        fn.apply(scope, args)
                    }
                }
                runCallback(o.success, o.scope, [r, o]);
                runCallback(o.callback, o.scope, [o, true, r]);
                if (!me.debugUploads) {
                    setTimeout(function() {
                        Ext.removeNode(frame)
                    }, 100)
                }
            }
            Ext.EventManager.on(frame, LOAD, cb, this);
            form.submit();
            Ext.fly(form).set(buf);
            Ext.each(hiddens, function(h) {
                Ext.removeNode(h)
            })
        }
    })
})();
Ext.Ajax = new Ext.data.Connection({
    autoAbort: false,
    serializeForm: function(form) {
        return Ext.lib.Ajax.serializeForm(form)
    }
});
Ext.util.JSON = new function() {
    var useHasOwn = !!{}.hasOwnProperty,
        isNative = function() {
            var useNative = null;
            return function() {
                if (useNative === null) {
                    useNative = Ext.USE_NATIVE_JSON && window.JSON && JSON.toString() == "[object JSON]"
                }
                return useNative
            }
        }(),
        pad = function(n) {
            return n < 10 ? "0" + n : n
        },
        doDecode = function(json) {
            return eval("(" + json + ")")
        },
        doEncode = function(o) {
            if (!Ext.isDefined(o) || o === null) {
                return "null"
            } else if (Ext.isArray(o)) {
                return encodeArray(o)
            } else if (Ext.isDate(o)) {
                return Ext.util.JSON.encodeDate(o)
            } else if (Ext.isString(o)) {
                return encodeString(o)
            } else if (typeof o == "number") {
                return isFinite(o) ? String(o) : "null"
            } else if (Ext.isBoolean(o)) {
                return String(o)
            } else {
                var a = ["{"],
                    b, i, v;
                for (i in o) {
                    if (!o.getElementsByTagName) {
                        if (!useHasOwn || o.hasOwnProperty(i)) {
                            v = o[i];
                            switch (typeof v) {
                                case "undefined":
                                case "function":
                                case "unknown":
                                    break;
                                default:
                                    if (b) {
                                        a.push(",")
                                    }
                                    a.push(doEncode(i), ":", v === null ? "null" : doEncode(v));
                                    b = true
                            }
                        }
                    }
                }
                a.push("}");
                return a.join("")
            }
        },
        m = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        encodeString = function(s) {
            if (/["\\\x00-\x1f]/.test(s)) {
                return '"' + s.replace(/([\x00-\x1f\\"])/g, function(a, b) {
                    var c = m[b];
                    if (c) {
                        return c
                    }
                    c = b.charCodeAt();
                    return "\\u00" + Math.floor(c / 16).toString(16) + (c % 16).toString(16)
                }) + '"'
            }
            return '"' + s + '"'
        },
        encodeArray = function(o) {
            var a = ["["],
                b, i, l = o.length,
                v;
            for (i = 0; i < l; i += 1) {
                v = o[i];
                switch (typeof v) {
                    case "undefined":
                    case "function":
                    case "unknown":
                        break;
                    default:
                        if (b) {
                            a.push(",")
                        }
                        a.push(v === null ? "null" : Ext.util.JSON.encode(v));
                        b = true
                }
            }
            a.push("]");
            return a.join("")
        };
    this.encodeDate = function(o) {
        return '"' + o.getFullYear() + "-" + pad(o.getMonth() + 1) + "-" + pad(o.getDate()) + "T" + pad(o.getHours()) + ":" + pad(o.getMinutes()) + ":" + pad(o.getSeconds()) + '"'
    };
    this.encode = function() {
        var ec;
        return function(o) {
            if (!ec) {
                ec = isNative() ? JSON.stringify : doEncode
            }
            return ec(o)
        }
    }();
    this.decode = function() {
        var dc;
        return function(json) {
            if (!dc) {
                dc = isNative() ? JSON.parse : doDecode
            }
            return dc(json)
        }
    }()
};
Ext.encode = Ext.util.JSON.encode;
Ext.decode = Ext.util.JSON.decode;
(function(window, undefined) {
    var readyList, rootjQuery, core_strundefined = typeof undefined,
        location = window.location,
        document = window.document,
        docElem = document.documentElement,
        _jQuery = window.jQuery,
        _$ = window.$,
        class2type = {},
        core_deletedIds = [],
        core_version = "1.10.2",
        core_concat = core_deletedIds.concat,
        core_push = core_deletedIds.push,
        core_slice = core_deletedIds.slice,
        core_indexOf = core_deletedIds.indexOf,
        core_toString = class2type.toString,
        core_hasOwn = class2type.hasOwnProperty,
        core_trim = core_version.trim,
        jQuery = function(selector, context) {
            return new jQuery.fn.init(selector, context, rootjQuery)
        },
        core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        core_rnotwhite = /\S+/g,
        rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        rvalidchars = /^[\],:{}\s]*$/,
        rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
        rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        rmsPrefix = /^-ms-/,
        rdashAlpha = /-([\da-z])/gi,
        fcamelCase = function(all, letter) {
            return letter.toUpperCase()
        },
        completed = function(event) {
            if (document.addEventListener || event.type === "load" || document.readyState === "complete") {
                detach();
                jQuery.ready()
            }
        },
        detach = function() {
            if (document.addEventListener) {
                document.removeEventListener("DOMContentLoaded", completed, false);
                window.removeEventListener("load", completed, false)
            } else {
                document.detachEvent("onreadystatechange", completed);
                window.detachEvent("onload", completed)
            }
        };
    jQuery.fn = jQuery.prototype = {
        jquery: core_version,
        constructor: jQuery,
        init: function(selector, context, rootjQuery) {
            var match, elem;
            if (!selector) {
                return this
            }
            if (typeof selector === "string") {
                if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
                    match = [null, selector, null]
                } else {
                    match = rquickExpr.exec(selector)
                }
                if (match && (match[1] || !context)) {
                    if (match[1]) {
                        context = context instanceof jQuery ? context[0] : context;
                        jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                        if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                            for (match in context) {
                                if (jQuery.isFunction(this[match])) {
                                    this[match](context[match])
                                } else {
                                    this.attr(match, context[match])
                                }
                            }
                        }
                        return this
                    } else {
                        elem = document.getElementById(match[2]);
                        if (elem && elem.parentNode) {
                            if (elem.id !== match[2]) {
                                return rootjQuery.find(selector)
                            }
                            this.length = 1;
                            this[0] = elem
                        }
                        this.context = document;
                        this.selector = selector;
                        return this
                    }
                } else if (!context || context.jquery) {
                    return (context || rootjQuery).find(selector)
                } else {
                    return this.constructor(context).find(selector)
                }
            } else if (selector.nodeType) {
                this.context = this[0] = selector;
                this.length = 1;
                return this
            } else if (jQuery.isFunction(selector)) {
                return rootjQuery.ready(selector)
            }
            if (selector.selector !== undefined) {
                this.selector = selector.selector;
                this.context = selector.context
            }
            return jQuery.makeArray(selector, this)
        },
        selector: "",
        length: 0,
        toArray: function() {
            return core_slice.call(this)
        },
        get: function(num) {
            return num == null ? this.toArray() : num < 0 ? this[this.length + num] : this[num]
        },
        pushStack: function(elems) {
            var ret = jQuery.merge(this.constructor(), elems);
            ret.prevObject = this;
            ret.context = this.context;
            return ret
        },
        each: function(callback, args) {
            return jQuery.each(this, callback, args)
        },
        ready: function(fn) {
            jQuery.ready.promise().done(fn);
            return this
        },
        slice: function() {
            return this.pushStack(core_slice.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(i) {
            var len = this.length,
                j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : [])
        },
        map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
                return callback.call(elem, i, elem)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: core_push,
        sort: [].sort,
        splice: [].splice
    };
    jQuery.fn.init.prototype = jQuery.fn;
    jQuery.extend = jQuery.fn.extend = function() {
        var src, copyIsArray, copy, name, options, clone, target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;
        if (typeof target === "boolean") {
            deep = target;
            target = arguments[1] || {};
            i = 2
        }
        if (typeof target !== "object" && !jQuery.isFunction(target)) {
            target = {}
        }
        if (length === i) {
            target = this;
            --i
        }
        for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    if (target === copy) {
                        continue
                    }
                    if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && jQuery.isArray(src) ? src : []
                        } else {
                            clone = src && jQuery.isPlainObject(src) ? src : {}
                        }
                        target[name] = jQuery.extend(deep, clone, copy)
                    } else if (copy !== undefined) {
                        target[name] = copy
                    }
                }
            }
        }
        return target
    };
    jQuery.extend({
        expando: "jQuery" + (core_version + Math.random()).replace(/\D/g, ""),
        noConflict: function(deep) {
            if (window.$ === jQuery) {
                window.$ = _$
            }
            if (deep && window.jQuery === jQuery) {
                window.jQuery = _jQuery
            }
            return jQuery
        },
        isReady: false,
        readyWait: 1,
        holdReady: function(hold) {
            if (hold) {
                jQuery.readyWait++
            } else {
                jQuery.ready(true)
            }
        },
        ready: function(wait) {
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                return
            }
            if (!document.body) {
                return setTimeout(jQuery.ready)
            }
            jQuery.isReady = true;
            if (wait !== true && --jQuery.readyWait > 0) {
                return
            }
            readyList.resolveWith(document, [jQuery]);
            if (jQuery.fn.trigger) {
                jQuery(document).trigger("ready").off("ready")
            }
        },
        isFunction: function(obj) {
            return jQuery.type(obj) === "function"
        },
        isArray: Array.isArray || function(obj) {
            return jQuery.type(obj) === "array"
        },
        isWindow: function(obj) {
            return obj != null && obj == obj.window
        },
        isNumeric: function(obj) {
            return !isNaN(parseFloat(obj)) && isFinite(obj)
        },
        type: function(obj) {
            if (obj == null) {
                return String(obj)
            }
            return typeof obj === "object" || typeof obj === "function" ? class2type[core_toString.call(obj)] || "object" : typeof obj
        },
        isPlainObject: function(obj) {
            var key;
            if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
                return false
            }
            try {
                if (obj.constructor && !core_hasOwn.call(obj, "constructor") && !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                    return false
                }
            } catch (e) {
                return false
            }
            if (jQuery.support.ownLast) {
                for (key in obj) {
                    return core_hasOwn.call(obj, key)
                }
            }
            for (key in obj) {}
            return key === undefined || core_hasOwn.call(obj, key)
        },
        isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
                return false
            }
            return true
        },
        error: function(msg) {
            throw new Error(msg)
        },
        parseHTML: function(data, context, keepScripts) {
            if (!data || typeof data !== "string") {
                return null
            }
            if (typeof context === "boolean") {
                keepScripts = context;
                context = false
            }
            context = context || document;
            var parsed = rsingleTag.exec(data),
                scripts = !keepScripts && [];
            if (parsed) {
                return [context.createElement(parsed[1])]
            }
            parsed = jQuery.buildFragment([data], context, scripts);
            if (scripts) {
                jQuery(scripts).remove()
            }
            return jQuery.merge([], parsed.childNodes)
        },
        parseJSON: function(data) {
            if (window.JSON && window.JSON.parse) {
                return window.JSON.parse(data)
            }
            if (data === null) {
                return data
            }
            if (typeof data === "string") {
                data = jQuery.trim(data);
                if (data) {
                    if (rvalidchars.test(data.replace(rvalidescape, "@").replace(rvalidtokens, "]").replace(rvalidbraces, ""))) {
                        return new Function("return " + data)()
                    }
                }
            }
            jQuery.error("Invalid JSON: " + data)
        },
        parseXML: function(data) {
            var xml, tmp;
            if (!data || typeof data !== "string") {
                return null
            }
            try {
                if (window.DOMParser) {
                    tmp = new DOMParser;
                    xml = tmp.parseFromString(data, "text/xml")
                } else {
                    xml = new ActiveXObject("Microsoft.XMLDOM");
                    xml.async = "false";
                    xml.loadXML(data)
                }
            } catch (e) {
                xml = undefined
            }
            if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
                jQuery.error("Invalid XML: " + data)
            }
            return xml
        },
        noop: function() {},
        globalEval: function(data) {
            if (data && jQuery.trim(data)) {
                (window.execScript || function(data) {
                    window["eval"].call(window, data)
                })(data)
            }
        },
        camelCase: function(string) {
            return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase)
        },
        nodeName: function(elem, name) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase()
        },
        each: function(obj, callback, args) {
            var value, i = 0,
                length = obj.length,
                isArray = isArraylike(obj);
            if (args) {
                if (isArray) {
                    for (; i < length; i++) {
                        value = callback.apply(obj[i], args);
                        if (value === false) {
                            break
                        }
                    }
                } else {
                    for (i in obj) {
                        value = callback.apply(obj[i], args);
                        if (value === false) {
                            break
                        }
                    }
                }
            } else {
                if (isArray) {
                    for (; i < length; i++) {
                        value = callback.call(obj[i], i, obj[i]);
                        if (value === false) {
                            break
                        }
                    }
                } else {
                    for (i in obj) {
                        value = callback.call(obj[i], i, obj[i]);
                        if (value === false) {
                            break
                        }
                    }
                }
            }
            return obj
        },
        trim: core_trim && !core_trim.call("\ufeff ") ? function(text) {
            return text == null ? "" : core_trim.call(text)
        } : function(text) {
            return text == null ? "" : (text + "").replace(rtrim, "")
        },
        makeArray: function(arr, results) {
            var ret = results || [];
            if (arr != null) {
                if (isArraylike(Object(arr))) {
                    jQuery.merge(ret, typeof arr === "string" ? [arr] : arr)
                } else {
                    core_push.call(ret, arr)
                }
            }
            return ret
        },
        inArray: function(elem, arr, i) {
            var len;
            if (arr) {
                if (core_indexOf) {
                    return core_indexOf.call(arr, elem, i)
                }
                len = arr.length;
                i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
                for (; i < len; i++) {
                    if (i in arr && arr[i] === elem) {
                        return i
                    }
                }
            }
            return -1
        },
        merge: function(first, second) {
            var l = second.length,
                i = first.length,
                j = 0;
            if (typeof l === "number") {
                for (; j < l; j++) {
                    first[i++] = second[j]
                }
            } else {
                while (second[j] !== undefined) {
                    first[i++] = second[j++]
                }
            }
            first.length = i;
            return first
        },
        grep: function(elems, callback, inv) {
            var retVal, ret = [],
                i = 0,
                length = elems.length;
            inv = !!inv;
            for (; i < length; i++) {
                retVal = !!callback(elems[i], i);
                if (inv !== retVal) {
                    ret.push(elems[i])
                }
            }
            return ret
        },
        map: function(elems, callback, arg) {
            var value, i = 0,
                length = elems.length,
                isArray = isArraylike(elems),
                ret = [];
            if (isArray) {
                for (; i < length; i++) {
                    value = callback(elems[i], i, arg);
                    if (value != null) {
                        ret[ret.length] = value
                    }
                }
            } else {
                for (i in elems) {
                    value = callback(elems[i], i, arg);
                    if (value != null) {
                        ret[ret.length] = value
                    }
                }
            }
            return core_concat.apply([], ret)
        },
        guid: 1,
        proxy: function(fn, context) {
            var args, proxy, tmp;
            if (typeof context === "string") {
                tmp = fn[context];
                context = fn;
                fn = tmp
            }
            if (!jQuery.isFunction(fn)) {
                return undefined
            }
            args = core_slice.call(arguments, 2);
            proxy = function() {
                return fn.apply(context || this, args.concat(core_slice.call(arguments)))
            };
            proxy.guid = fn.guid = fn.guid || jQuery.guid++;
            return proxy
        },
        access: function(elems, fn, key, value, chainable, emptyGet, raw) {
            var i = 0,
                length = elems.length,
                bulk = key == null;
            if (jQuery.type(key) === "object") {
                chainable = true;
                for (i in key) {
                    jQuery.access(elems, fn, i, key[i], true, emptyGet, raw)
                }
            } else if (value !== undefined) {
                chainable = true;
                if (!jQuery.isFunction(value)) {
                    raw = true
                }
                if (bulk) {
                    if (raw) {
                        fn.call(elems, value);
                        fn = null
                    } else {
                        bulk = fn;
                        fn = function(elem, key, value) {
                            return bulk.call(jQuery(elem), value)
                        }
                    }
                }
                if (fn) {
                    for (; i < length; i++) {
                        fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)))
                    }
                }
            }
            return chainable ? elems : bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(elem, options, callback, args) {
            var ret, name, old = {};
            for (name in options) {
                old[name] = elem.style[name];
                elem.style[name] = options[name]
            }
            ret = callback.apply(elem, args || []);
            for (name in options) {
                elem.style[name] = old[name]
            }
            return ret
        }
    });
    jQuery.ready.promise = function(obj) {
        if (!readyList) {
            readyList = jQuery.Deferred();
            if (document.readyState === "complete") {
                setTimeout(jQuery.ready)
            } else if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", completed, false);
                window.addEventListener("load", completed, false)
            } else {
                document.attachEvent("onreadystatechange", completed);
                window.attachEvent("onload", completed);
                var top = false;
                try {
                    top = window.frameElement == null && document.documentElement
                } catch (e) {}
                if (top && top.doScroll) {
                    (function doScrollCheck() {
                        if (!jQuery.isReady) {
                            try {
                                top.doScroll("left")
                            } catch (e) {
                                return setTimeout(doScrollCheck, 50)
                            }
                            detach();
                            jQuery.ready()
                        }
                    })()
                }
            }
        }
        return readyList.promise(obj)
    };
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase()
    });

    function isArraylike(obj) {
        var length = obj.length,
            type = jQuery.type(obj);
        if (jQuery.isWindow(obj)) {
            return false
        }
        if (obj.nodeType === 1 && length) {
            return true
        }
        return type === "array" || type !== "function" && (length === 0 || typeof length === "number" && length > 0 && length - 1 in obj)
    }
    rootjQuery = jQuery(document);
    (function(window, undefined) {
        var i, support, cachedruns, Expr, getText, isXML, compile, outermostContext, sortInput, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + -new Date,
            preferredDoc = window.document,
            dirruns = 0,
            done = 0,
            classCache = createCache(),
            tokenCache = createCache(),
            compilerCache = createCache(),
            hasDuplicate = false,
            sortOrder = function(a, b) {
                if (a === b) {
                    hasDuplicate = true;
                    return 0
                }
                return 0
            },
            strundefined = typeof undefined,
            MAX_NEGATIVE = 1 << 31,
            hasOwn = {}.hasOwnProperty,
            arr = [],
            pop = arr.pop,
            push_native = arr.push,
            push = arr.push,
            slice = arr.slice,
            indexOf = arr.indexOf || function(elem) {
                var i = 0,
                    len = this.length;
                for (; i < len; i++) {
                    if (this[i] === elem) {
                        return i
                    }
                }
                return -1
            },
            booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            whitespace = "[\\x20\\t\\r\\n\\f]",
            characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            identifier = characterEncoding.replace("w", "w#"),
            attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace + "*(?:([*^$|!~]?=)" + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",
            pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace(3, 8) + ")*)|.*)\\)|)",
            rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
            rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
            rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
            rsibling = new RegExp(whitespace + "*[+~]"),
            rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*)" + whitespace + "*\\]", "g"),
            rpseudo = new RegExp(pseudos),
            ridentifier = new RegExp("^" + identifier + "$"),
            matchExpr = {
                ID: new RegExp("^#(" + characterEncoding + ")"),
                CLASS: new RegExp("^\\.(" + characterEncoding + ")"),
                TAG: new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + attributes),
                PSEUDO: new RegExp("^" + pseudos),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + booleans + ")$", "i"),
                needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
            },
            rnative = /^[^{]+\{\s*\[native \w/,
            rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            rinputs = /^(?:input|select|textarea|button)$/i,
            rheader = /^h\d$/i,
            rescape = /'|\\/g,
            runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
            funescape = function(_, escaped, escapedWhitespace) {
                var high = "0x" + escaped - 65536;
                return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320)
            };
        try {
            push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
            arr[preferredDoc.childNodes.length].nodeType
        } catch (e) {
            push = {
                apply: arr.length ? function(target, els) {
                    push_native.apply(target, slice.call(els))
                } : function(target, els) {
                    var j = target.length,
                        i = 0;
                    while (target[j++] = els[i++]) {}
                    target.length = j - 1
                }
            }
        }

        function Sizzle(selector, context, results, seed) {
            var match, elem, m, nodeType, i, groups, old, nid, newContext, newSelector;
            if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                setDocument(context)
            }
            context = context || document;
            results = results || [];
            if (!selector || typeof selector !== "string") {
                return results
            }
            if ((nodeType = context.nodeType) !== 1 && nodeType !== 9) {
                return []
            }
            if (documentIsHTML && !seed) {
                if (match = rquickExpr.exec(selector)) {
                    if (m = match[1]) {
                        if (nodeType === 9) {
                            elem = context.getElementById(m);
                            if (elem && elem.parentNode) {
                                if (elem.id === m) {
                                    results.push(elem);
                                    return results
                                }
                            } else {
                                return results
                            }
                        } else {
                            if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                results.push(elem);
                                return results
                            }
                        }
                    } else if (match[2]) {
                        push.apply(results, context.getElementsByTagName(selector));
                        return results
                    } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                        push.apply(results, context.getElementsByClassName(m));
                        return results
                    }
                }
                if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                    nid = old = expando;
                    newContext = context;
                    newSelector = nodeType === 9 && selector;
                    if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
                        groups = tokenize(selector);
                        if (old = context.getAttribute("id")) {
                            nid = old.replace(rescape, "\\$&")
                        } else {
                            context.setAttribute("id", nid)
                        }
                        nid = "[id='" + nid + "'] ";
                        i = groups.length;
                        while (i--) {
                            groups[i] = nid + toSelector(groups[i])
                        }
                        newContext = rsibling.test(selector) && context.parentNode || context;
                        newSelector = groups.join(",")
                    }
                    if (newSelector) {
                        try {
                            push.apply(results, newContext.querySelectorAll(newSelector));
                            return results
                        } catch (qsaError) {} finally {
                            if (!old) {
                                context.removeAttribute("id")
                            }
                        }
                    }
                }
            }
            return select(selector.replace(rtrim, "$1"), context, results, seed)
        }

        function createCache() {
            var keys = [];

            function cache(key, value) {
                if (keys.push(key += " ") > Expr.cacheLength) {
                    delete cache[keys.shift()]
                }
                return cache[key] = value
            }
            return cache
        }

        function markFunction(fn) {
            fn[expando] = true;
            return fn
        }

        function assert(fn) {
            var div = document.createElement("div");
            try {
                return !!fn(div)
            } catch (e) {
                return false
            } finally {
                if (div.parentNode) {
                    div.parentNode.removeChild(div)
                }
                div = null
            }
        }

        function addHandle(attrs, handler) {
            var arr = attrs.split("|"),
                i = attrs.length;
            while (i--) {
                Expr.attrHandle[arr[i]] = handler
            }
        }

        function siblingCheck(a, b) {
            var cur = b && a,
                diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
            if (diff) {
                return diff
            }
            if (cur) {
                while (cur = cur.nextSibling) {
                    if (cur === b) {
                        return -1
                    }
                }
            }
            return a ? 1 : -1
        }

        function createInputPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === type
            }
        }

        function createButtonPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return (name === "input" || name === "button") && elem.type === type
            }
        }

        function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
                argument = +argument;
                return markFunction(function(seed, matches) {
                    var j, matchIndexes = fn([], seed.length, argument),
                        i = matchIndexes.length;
                    while (i--) {
                        if (seed[j = matchIndexes[i]]) {
                            seed[j] = !(matches[j] = seed[j])
                        }
                    }
                })
            })
        }
        isXML = Sizzle.isXML = function(elem) {
            var documentElement = elem && (elem.ownerDocument || elem).documentElement;
            return documentElement ? documentElement.nodeName !== "HTML" : false
        };
        support = Sizzle.support = {};
        setDocument = Sizzle.setDocument = function(node) {
            var doc = node ? node.ownerDocument || node : preferredDoc,
                parent = doc.defaultView;
            if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                return document
            }
            document = doc;
            docElem = doc.documentElement;
            documentIsHTML = !isXML(doc);
            if (parent && parent.attachEvent && parent !== parent.top) {
                parent.attachEvent("onbeforeunload", function() {
                    setDocument()
                })
            }
            support.attributes = assert(function(div) {
                div.className = "i";
                return !div.getAttribute("className")
            });
            support.getElementsByTagName = assert(function(div) {
                div.appendChild(doc.createComment(""));
                return !div.getElementsByTagName("*").length
            });
            support.getElementsByClassName = assert(function(div) {
                div.innerHTML = "<div class='a'></div><div class='a i'></div>";
                div.firstChild.className = "i";
                return div.getElementsByClassName("i").length === 2
            });
            support.getById = assert(function(div) {
                docElem.appendChild(div).id = expando;
                return !doc.getElementsByName || !doc.getElementsByName(expando).length
            });
            if (support.getById) {
                Expr.find["ID"] = function(id, context) {
                    if (typeof context.getElementById !== strundefined && documentIsHTML) {
                        var m = context.getElementById(id);
                        return m && m.parentNode ? [m] : []
                    }
                };
                Expr.filter["ID"] = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        return elem.getAttribute("id") === attrId
                    }
                }
            } else {
                delete Expr.find["ID"];
                Expr.filter["ID"] = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
                        return node && node.value === attrId
                    }
                }
            }
            Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
                if (typeof context.getElementsByTagName !== strundefined) {
                    return context.getElementsByTagName(tag)
                }
            } : function(tag, context) {
                var elem, tmp = [],
                    i = 0,
                    results = context.getElementsByTagName(tag);
                if (tag === "*") {
                    while (elem = results[i++]) {
                        if (elem.nodeType === 1) {
                            tmp.push(elem)
                        }
                    }
                    return tmp
                }
                return results
            };
            Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
                if (typeof context.getElementsByClassName !== strundefined && documentIsHTML) {
                    return context.getElementsByClassName(className)
                }
            };
            rbuggyMatches = [];
            rbuggyQSA = [];
            if (support.qsa = rnative.test(doc.querySelectorAll)) {
                assert(function(div) {
                    div.innerHTML = "<select><option selected=''></option></select>";
                    if (!div.querySelectorAll("[selected]").length) {
                        rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")")
                    }
                    if (!div.querySelectorAll(":checked").length) {
                        rbuggyQSA.push(":checked")
                    }
                });
                assert(function(div) {
                    var input = doc.createElement("input");
                    input.setAttribute("type", "hidden");
                    div.appendChild(input).setAttribute("t", "");
                    if (div.querySelectorAll("[t^='']").length) {
                        rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")")
                    }
                    if (!div.querySelectorAll(":enabled").length) {
                        rbuggyQSA.push(":enabled", ":disabled")
                    }
                    div.querySelectorAll("*,:x");
                    rbuggyQSA.push(",.*:")
                })
            }
            if (support.matchesSelector = rnative.test(matches = docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
                assert(function(div) {
                    support.disconnectedMatch = matches.call(div, "div");
                    matches.call(div, "[s!='']:x");
                    rbuggyMatches.push("!=", pseudos)
                })
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
            contains = rnative.test(docElem.contains) || docElem.compareDocumentPosition ? function(a, b) {
                var adown = a.nodeType === 9 ? a.documentElement : a,
                    bup = b && b.parentNode;
                return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16))
            } : function(a, b) {
                if (b) {
                    while (b = b.parentNode) {
                        if (b === a) {
                            return true
                        }
                    }
                }
                return false
            };
            sortOrder = docElem.compareDocumentPosition ? function(a, b) {
                if (a === b) {
                    hasDuplicate = true;
                    return 0
                }
                var compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);
                if (compare) {
                    if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                        if (a === doc || contains(preferredDoc, a)) {
                            return -1
                        }
                        if (b === doc || contains(preferredDoc, b)) {
                            return 1
                        }
                        return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0
                    }
                    return compare & 4 ? -1 : 1
                }
                return a.compareDocumentPosition ? -1 : 1
            } : function(a, b) {
                var cur, i = 0,
                    aup = a.parentNode,
                    bup = b.parentNode,
                    ap = [a],
                    bp = [b];
                if (a === b) {
                    hasDuplicate = true;
                    return 0
                } else if (!aup || !bup) {
                    return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0
                } else if (aup === bup) {
                    return siblingCheck(a, b)
                }
                cur = a;
                while (cur = cur.parentNode) {
                    ap.unshift(cur)
                }
                cur = b;
                while (cur = cur.parentNode) {
                    bp.unshift(cur)
                }
                while (ap[i] === bp[i]) {
                    i++
                }
                return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0
            };
            return doc
        };
        Sizzle.matches = function(expr, elements) {
            return Sizzle(expr, null, null, elements)
        };
        Sizzle.matchesSelector = function(elem, expr) {
            if ((elem.ownerDocument || elem) !== document) {
                setDocument(elem)
            }
            expr = expr.replace(rattributeQuotes, "='$1']");
            if (support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
                try {
                    var ret = matches.call(elem, expr);
                    if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                        return ret
                    }
                } catch (e) {}
            }
            return Sizzle(expr, document, null, [elem]).length > 0
        };
        Sizzle.contains = function(context, elem) {
            if ((context.ownerDocument || context) !== document) {
                setDocument(context)
            }
            return contains(context, elem)
        };
        Sizzle.attr = function(elem, name) {
            if ((elem.ownerDocument || elem) !== document) {
                setDocument(elem)
            }
            var fn = Expr.attrHandle[name.toLowerCase()],
                val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
            return val === undefined ? support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null : val
        };
        Sizzle.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg)
        };
        Sizzle.uniqueSort = function(results) {
            var elem, duplicates = [],
                j = 0,
                i = 0;
            hasDuplicate = !support.detectDuplicates;
            sortInput = !support.sortStable && results.slice(0);
            results.sort(sortOrder);
            if (hasDuplicate) {
                while (elem = results[i++]) {
                    if (elem === results[i]) {
                        j = duplicates.push(i)
                    }
                }
                while (j--) {
                    results.splice(duplicates[j], 1)
                }
            }
            return results
        };
        getText = Sizzle.getText = function(elem) {
            var node, ret = "",
                i = 0,
                nodeType = elem.nodeType;
            if (!nodeType) {
                for (; node = elem[i]; i++) {
                    ret += getText(node)
                }
            } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                if (typeof elem.textContent === "string") {
                    return elem.textContent
                } else {
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                        ret += getText(elem)
                    }
                }
            } else if (nodeType === 3 || nodeType === 4) {
                return elem.nodeValue
            }
            return ret
        };
        Expr = Sizzle.selectors = {
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(match) {
                    match[1] = match[1].replace(runescape, funescape);
                    match[3] = (match[4] || match[5] || "").replace(runescape, funescape);
                    if (match[2] === "~=") {
                        match[3] = " " + match[3] + " "
                    }
                    return match.slice(0, 4)
                },
                CHILD: function(match) {
                    match[1] = match[1].toLowerCase();
                    if (match[1].slice(0, 3) === "nth") {
                        if (!match[3]) {
                            Sizzle.error(match[0])
                        }
                        match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                        match[5] = +(match[7] + match[8] || match[3] === "odd")
                    } else if (match[3]) {
                        Sizzle.error(match[0])
                    }
                    return match
                },
                PSEUDO: function(match) {
                    var excess, unquoted = !match[5] && match[2];
                    if (matchExpr["CHILD"].test(match[0])) {
                        return null
                    }
                    if (match[3] && match[4] !== undefined) {
                        match[2] = match[4]
                    } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                        match[0] = match[0].slice(0, excess);
                        match[2] = unquoted.slice(0, excess)
                    }
                    return match.slice(0, 3)
                }
            },
            filter: {
                TAG: function(nodeNameSelector) {
                    var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                    return nodeNameSelector === "*" ? function() {
                        return true
                    } : function(elem) {
                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName
                    }
                },
                CLASS: function(className) {
                    var pattern = classCache[className + " "];
                    return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                        return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "")
                    })
                },
                ATTR: function(name, operator, check) {
                    return function(elem) {
                        var result = Sizzle.attr(elem, name);
                        if (result == null) {
                            return operator === "!="
                        }
                        if (!operator) {
                            return true
                        }
                        result += "";
                        return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false
                    }
                },
                CHILD: function(type, what, argument, first, last) {
                    var simple = type.slice(0, 3) !== "nth",
                        forward = type.slice(-4) !== "last",
                        ofType = what === "of-type";
                    return first === 1 && last === 0 ? function(elem) {
                        return !!elem.parentNode
                    } : function(elem, context, xml) {
                        var cache, outerCache, node, diff, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling",
                            parent = elem.parentNode,
                            name = ofType && elem.nodeName.toLowerCase(),
                            useCache = !xml && !ofType;
                        if (parent) {
                            if (simple) {
                                while (dir) {
                                    node = elem;
                                    while (node = node[dir]) {
                                        if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                                            return false
                                        }
                                    }
                                    start = dir = type === "only" && !start && "nextSibling"
                                }
                                return true
                            }
                            start = [forward ? parent.firstChild : parent.lastChild];
                            if (forward && useCache) {
                                outerCache = parent[expando] || (parent[expando] = {});
                                cache = outerCache[type] || [];
                                nodeIndex = cache[0] === dirruns && cache[1];
                                diff = cache[0] === dirruns && cache[2];
                                node = nodeIndex && parent.childNodes[nodeIndex];
                                while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                    if (node.nodeType === 1 && ++diff && node === elem) {
                                        outerCache[type] = [dirruns, nodeIndex, diff];
                                        break
                                    }
                                }
                            } else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
                                diff = cache[1]
                            } else {
                                while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                        if (useCache) {
                                            (node[expando] || (node[expando] = {}))[type] = [dirruns, diff]
                                        }
                                        if (node === elem) {
                                            break
                                        }
                                    }
                                }
                            }
                            diff -= last;
                            return diff === first || diff % first === 0 && diff / first >= 0
                        }
                    }
                },
                PSEUDO: function(pseudo, argument) {
                    var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                    if (fn[expando]) {
                        return fn(argument)
                    }
                    if (fn.length > 1) {
                        args = [pseudo, pseudo, "", argument];
                        return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                            var idx, matched = fn(seed, argument),
                                i = matched.length;
                            while (i--) {
                                idx = indexOf.call(seed, matched[i]);
                                seed[idx] = !(matches[idx] = matched[i])
                            }
                        }) : function(elem) {
                            return fn(elem, 0, args)
                        }
                    }
                    return fn
                }
            },
            pseudos: {
                not: markFunction(function(selector) {
                    var input = [],
                        results = [],
                        matcher = compile(selector.replace(rtrim, "$1"));
                    return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                        var elem, unmatched = matcher(seed, null, xml, []),
                            i = seed.length;
                        while (i--) {
                            if (elem = unmatched[i]) {
                                seed[i] = !(matches[i] = elem)
                            }
                        }
                    }) : function(elem, context, xml) {
                        input[0] = elem;
                        matcher(input, null, xml, results);
                        return !results.pop()
                    }
                }),
                has: markFunction(function(selector) {
                    return function(elem) {
                        return Sizzle(selector, elem).length > 0
                    }
                }),
                contains: markFunction(function(text) {
                    return function(elem) {
                        return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1
                    }
                }),
                lang: markFunction(function(lang) {
                    if (!ridentifier.test(lang || "")) {
                        Sizzle.error("unsupported lang: " + lang)
                    }
                    lang = lang.replace(runescape, funescape).toLowerCase();
                    return function(elem) {
                        var elemLang;
                        do {
                            if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                                elemLang = elemLang.toLowerCase();
                                return elemLang === lang || elemLang.indexOf(lang + "-") === 0
                            }
                        } while ((elem = elem.parentNode) && elem.nodeType === 1);
                        return false
                    }
                }),
                target: function(elem) {
                    var hash = window.location && window.location.hash;
                    return hash && hash.slice(1) === elem.id
                },
                root: function(elem) {
                    return elem === docElem
                },
                focus: function(elem) {
                    return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex)
                },
                enabled: function(elem) {
                    return elem.disabled === false
                },
                disabled: function(elem) {
                    return elem.disabled === true
                },
                checked: function(elem) {
                    var nodeName = elem.nodeName.toLowerCase();
                    return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected
                },
                selected: function(elem) {
                    if (elem.parentNode) {
                        elem.parentNode.selectedIndex
                    }
                    return elem.selected === true
                },
                empty: function(elem) {
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                        if (elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4) {
                            return false
                        }
                    }
                    return true
                },
                parent: function(elem) {
                    return !Expr.pseudos["empty"](elem)
                },
                header: function(elem) {
                    return rheader.test(elem.nodeName)
                },
                input: function(elem) {
                    return rinputs.test(elem.nodeName)
                },
                button: function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === "button" || name === "button"
                },
                text: function(elem) {
                    var attr;
                    return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type)
                },
                first: createPositionalPseudo(function() {
                    return [0]
                }),
                last: createPositionalPseudo(function(matchIndexes, length) {
                    return [length - 1]
                }),
                eq: createPositionalPseudo(function(matchIndexes, length, argument) {
                    return [argument < 0 ? argument + length : argument]
                }),
                even: createPositionalPseudo(function(matchIndexes, length) {
                    var i = 0;
                    for (; i < length; i += 2) {
                        matchIndexes.push(i)
                    }
                    return matchIndexes
                }),
                odd: createPositionalPseudo(function(matchIndexes, length) {
                    var i = 1;
                    for (; i < length; i += 2) {
                        matchIndexes.push(i)
                    }
                    return matchIndexes
                }),
                lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument;
                    for (; --i >= 0;) {
                        matchIndexes.push(i)
                    }
                    return matchIndexes
                }),
                gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument;
                    for (; ++i < length;) {
                        matchIndexes.push(i)
                    }
                    return matchIndexes
                })
            }
        };
        Expr.pseudos["nth"] = Expr.pseudos["eq"];
        for (i in {
                radio: true,
                checkbox: true,
                file: true,
                password: true,
                image: true
            }) {
            Expr.pseudos[i] = createInputPseudo(i)
        }
        for (i in {
                submit: true,
                reset: true
            }) {
            Expr.pseudos[i] = createButtonPseudo(i)
        }

        function setFilters() {}
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters;

        function tokenize(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) {
                return parseOnly ? 0 : cached.slice(0)
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
                if (!matched || (match = rcomma.exec(soFar))) {
                    if (match) {
                        soFar = soFar.slice(match[0].length) || soFar
                    }
                    groups.push(tokens = [])
                }
                matched = false;
                if (match = rcombinators.exec(soFar)) {
                    matched = match.shift();
                    tokens.push({
                        value: matched,
                        type: match[0].replace(rtrim, " ")
                    });
                    soFar = soFar.slice(matched.length)
                }
                for (type in Expr.filter) {
                    if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                        matched = match.shift();
                        tokens.push({
                            value: matched,
                            type: type,
                            matches: match
                        });
                        soFar = soFar.slice(matched.length)
                    }
                }
                if (!matched) {
                    break
                }
            }
            return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0)
        }

        function toSelector(tokens) {
            var i = 0,
                len = tokens.length,
                selector = "";
            for (; i < len; i++) {
                selector += tokens[i].value
            }
            return selector
        }

        function addCombinator(matcher, combinator, base) {
            var dir = combinator.dir,
                checkNonElements = base && dir === "parentNode",
                doneName = done++;
            return combinator.first ? function(elem, context, xml) {
                while (elem = elem[dir]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                        return matcher(elem, context, xml)
                    }
                }
            } : function(elem, context, xml) {
                var data, cache, outerCache, dirkey = dirruns + " " + doneName;
                if (xml) {
                    while (elem = elem[dir]) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            if (matcher(elem, context, xml)) {
                                return true
                            }
                        }
                    }
                } else {
                    while (elem = elem[dir]) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            outerCache = elem[expando] || (elem[expando] = {});
                            if ((cache = outerCache[dir]) && cache[0] === dirkey) {
                                if ((data = cache[1]) === true || data === cachedruns) {
                                    return data === true
                                }
                            } else {
                                cache = outerCache[dir] = [dirkey];
                                cache[1] = matcher(elem, context, xml) || cachedruns;
                                if (cache[1] === true) {
                                    return true
                                }
                            }
                        }
                    }
                }
            }
        }

        function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
                var i = matchers.length;
                while (i--) {
                    if (!matchers[i](elem, context, xml)) {
                        return false
                    }
                }
                return true
            } : matchers[0]
        }

        function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [],
                i = 0,
                len = unmatched.length,
                mapped = map != null;
            for (; i < len; i++) {
                if (elem = unmatched[i]) {
                    if (!filter || filter(elem, context, xml)) {
                        newUnmatched.push(elem);
                        if (mapped) {
                            map.push(i)
                        }
                    }
                }
            }
            return newUnmatched
        }

        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
                postFilter = setMatcher(postFilter)
            }
            if (postFinder && !postFinder[expando]) {
                postFinder = setMatcher(postFinder, postSelector)
            }
            return markFunction(function(seed, results, context, xml) {
                var temp, i, elem, preMap = [],
                    postMap = [],
                    preexisting = results.length,
                    elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
                    matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
                    matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                if (matcher) {
                    matcher(matcherIn, matcherOut, context, xml)
                }
                if (postFilter) {
                    temp = condense(matcherOut, postMap);
                    postFilter(temp, [], context, xml);
                    i = temp.length;
                    while (i--) {
                        if (elem = temp[i]) {
                            matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem)
                        }
                    }
                }
                if (seed) {
                    if (postFinder || preFilter) {
                        if (postFinder) {
                            temp = [];
                            i = matcherOut.length;
                            while (i--) {
                                if (elem = matcherOut[i]) {
                                    temp.push(matcherIn[i] = elem)
                                }
                            }
                            postFinder(null, matcherOut = [], temp, xml)
                        }
                        i = matcherOut.length;
                        while (i--) {
                            if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) {
                                seed[temp] = !(results[temp] = elem)
                            }
                        }
                    }
                } else {
                    matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                    if (postFinder) {
                        postFinder(null, results, matcherOut, xml)
                    } else {
                        push.apply(results, matcherOut)
                    }
                }
            })
        }

        function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length,
                leadingRelative = Expr.relative[tokens[0].type],
                implicitRelative = leadingRelative || Expr.relative[" "],
                i = leadingRelative ? 1 : 0,
                matchContext = addCombinator(function(elem) {
                    return elem === checkContext
                }, implicitRelative, true),
                matchAnyContext = addCombinator(function(elem) {
                    return indexOf.call(checkContext, elem) > -1
                }, implicitRelative, true),
                matchers = [function(elem, context, xml) {
                    return !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml))
                }];
            for (; i < len; i++) {
                if (matcher = Expr.relative[tokens[i].type]) {
                    matchers = [addCombinator(elementMatcher(matchers), matcher)]
                } else {
                    matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                    if (matcher[expando]) {
                        j = ++i;
                        for (; j < len; j++) {
                            if (Expr.relative[tokens[j].type]) {
                                break
                            }
                        }
                        return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                            value: tokens[i - 2].type === " " ? "*" : ""
                        })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens))
                    }
                    matchers.push(matcher)
                }
            }
            return elementMatcher(matchers)
        }

        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var matcherCachedRuns = 0,
                bySet = setMatchers.length > 0,
                byElement = elementMatchers.length > 0,
                superMatcher = function(seed, context, xml, results, expandContext) {
                    var elem, j, matcher, setMatched = [],
                        matchedCount = 0,
                        i = "0",
                        unmatched = seed && [],
                        outermost = expandContext != null,
                        contextBackup = outermostContext,
                        elems = seed || byElement && Expr.find["TAG"]("*", expandContext && context.parentNode || context),
                        dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || .1;
                    if (outermost) {
                        outermostContext = context !== document && context;
                        cachedruns = matcherCachedRuns
                    }
                    for (;
                        (elem = elems[i]) != null; i++) {
                        if (byElement && elem) {
                            j = 0;
                            while (matcher = elementMatchers[j++]) {
                                if (matcher(elem, context, xml)) {
                                    results.push(elem);
                                    break
                                }
                            }
                            if (outermost) {
                                dirruns = dirrunsUnique;
                                cachedruns = ++matcherCachedRuns
                            }
                        }
                        if (bySet) {
                            if (elem = !matcher && elem) {
                                matchedCount--
                            }
                            if (seed) {
                                unmatched.push(elem)
                            }
                        }
                    }
                    matchedCount += i;
                    if (bySet && i !== matchedCount) {
                        j = 0;
                        while (matcher = setMatchers[j++]) {
                            matcher(unmatched, setMatched, context, xml)
                        }
                        if (seed) {
                            if (matchedCount > 0) {
                                while (i--) {
                                    if (!(unmatched[i] || setMatched[i])) {
                                        setMatched[i] = pop.call(results)
                                    }
                                }
                            }
                            setMatched = condense(setMatched)
                        }
                        push.apply(results, setMatched);
                        if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                            Sizzle.uniqueSort(results)
                        }
                    }
                    if (outermost) {
                        dirruns = dirrunsUnique;
                        outermostContext = contextBackup
                    }
                    return unmatched
                };
            return bySet ? markFunction(superMatcher) : superMatcher
        }
        compile = Sizzle.compile = function(selector, group) {
            var i, setMatchers = [],
                elementMatchers = [],
                cached = compilerCache[selector + " "];
            if (!cached) {
                if (!group) {
                    group = tokenize(selector)
                }
                i = group.length;
                while (i--) {
                    cached = matcherFromTokens(group[i]);
                    if (cached[expando]) {
                        setMatchers.push(cached)
                    } else {
                        elementMatchers.push(cached)
                    }
                }
                cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers))
            }
            return cached
        };

        function multipleContexts(selector, contexts, results) {
            var i = 0,
                len = contexts.length;
            for (; i < len; i++) {
                Sizzle(selector, contexts[i], results)
            }
            return results
        }

        function select(selector, context, results, seed) {
            var i, tokens, token, type, find, match = tokenize(selector);
            if (!seed) {
                if (match.length === 1) {
                    tokens = match[0] = match[0].slice(0);
                    if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                        context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                        if (!context) {
                            return results
                        }
                        selector = selector.slice(tokens.shift().value.length)
                    }
                    i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                    while (i--) {
                        token = tokens[i];
                        if (Expr.relative[type = token.type]) {
                            break
                        }
                        if (find = Expr.find[type]) {
                            if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && context.parentNode || context)) {
                                tokens.splice(i, 1);
                                selector = seed.length && toSelector(tokens);
                                if (!selector) {
                                    push.apply(results, seed);
                                    return results
                                }
                                break
                            }
                        }
                    }
                }
            }
            compile(selector, match)(seed, context, !documentIsHTML, results, rsibling.test(selector));
            return results
        }
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        support.detectDuplicates = hasDuplicate;
        setDocument();
        support.sortDetached = assert(function(div1) {
            return div1.compareDocumentPosition(document.createElement("div")) & 1
        });
        if (!assert(function(div) {
                div.innerHTML = "<a href='#'></a>";
                return div.firstChild.getAttribute("href") === "#"
            })) {
            addHandle("type|href|height|width", function(elem, name, isXML) {
                if (!isXML) {
                    return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2)
                }
            })
        }
        if (!support.attributes || !assert(function(div) {
                div.innerHTML = "<input/>";
                div.firstChild.setAttribute("value", "");
                return div.firstChild.getAttribute("value") === ""
            })) {
            addHandle("value", function(elem, name, isXML) {
                if (!isXML && elem.nodeName.toLowerCase() === "input") {
                    return elem.defaultValue
                }
            })
        }
        if (!assert(function(div) {
                return div.getAttribute("disabled") == null
            })) {
            addHandle(booleans, function(elem, name, isXML) {
                var val;
                if (!isXML) {
                    return (val = elem.getAttributeNode(name)) && val.specified ? val.value : elem[name] === true ? name.toLowerCase() : null
                }
            })
        }
        jQuery.find = Sizzle;
        jQuery.expr = Sizzle.selectors;
        jQuery.expr[":"] = jQuery.expr.pseudos;
        jQuery.unique = Sizzle.uniqueSort;
        jQuery.text = Sizzle.getText;
        jQuery.isXMLDoc = Sizzle.isXML;
        jQuery.contains = Sizzle.contains
    })(window);
    var optionsCache = {};

    function createOptions(options) {
        var object = optionsCache[options] = {};
        jQuery.each(options.match(core_rnotwhite) || [], function(_, flag) {
            object[flag] = true
        });
        return object
    }
    jQuery.Callbacks = function(options) {
        options = typeof options === "string" ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);
        var firing, memory, fired, firingLength, firingIndex, firingStart, list = [],
            stack = !options.once && [],
            fire = function(data) {
                memory = options.memory && data;
                fired = true;
                firingIndex = firingStart || 0;
                firingStart = 0;
                firingLength = list.length;
                firing = true;
                for (; list && firingIndex < firingLength; firingIndex++) {
                    if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
                        memory = false;
                        break
                    }
                }
                firing = false;
                if (list) {
                    if (stack) {
                        if (stack.length) {
                            fire(stack.shift())
                        }
                    } else if (memory) {
                        list = []
                    } else {
                        self.disable()
                    }
                }
            },
            self = {
                add: function() {
                    if (list) {
                        var start = list.length;
                        (function add(args) {
                            jQuery.each(args, function(_, arg) {
                                var type = jQuery.type(arg);
                                if (type === "function") {
                                    if (!options.unique || !self.has(arg)) {
                                        list.push(arg)
                                    }
                                } else if (arg && arg.length && type !== "string") {
                                    add(arg)
                                }
                            })
                        })(arguments);
                        if (firing) {
                            firingLength = list.length
                        } else if (memory) {
                            firingStart = start;
                            fire(memory)
                        }
                    }
                    return this
                },
                remove: function() {
                    if (list) {
                        jQuery.each(arguments, function(_, arg) {
                            var index;
                            while ((index = jQuery.inArray(arg, list, index)) > -1) {
                                list.splice(index, 1);
                                if (firing) {
                                    if (index <= firingLength) {
                                        firingLength--
                                    }
                                    if (index <= firingIndex) {
                                        firingIndex--
                                    }
                                }
                            }
                        })
                    }
                    return this
                },
                has: function(fn) {
                    return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length)
                },
                empty: function() {
                    list = [];
                    firingLength = 0;
                    return this
                },
                disable: function() {
                    list = stack = memory = undefined;
                    return this
                },
                disabled: function() {
                    return !list
                },
                lock: function() {
                    stack = undefined;
                    if (!memory) {
                        self.disable()
                    }
                    return this
                },
                locked: function() {
                    return !stack
                },
                fireWith: function(context, args) {
                    if (list && (!fired || stack)) {
                        args = args || [];
                        args = [context, args.slice ? args.slice() : args];
                        if (firing) {
                            stack.push(args)
                        } else {
                            fire(args)
                        }
                    }
                    return this
                },
                fire: function() {
                    self.fireWith(this, arguments);
                    return this
                },
                fired: function() {
                    return !!fired
                }
            };
        return self
    };
    jQuery.extend({
        Deferred: function(func) {
            var tuples = [
                    ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", jQuery.Callbacks("memory")]
                ],
                state = "pending",
                promise = {
                    state: function() {
                        return state
                    },
                    always: function() {
                        deferred.done(arguments).fail(arguments);
                        return this
                    },
                    then: function() {
                        var fns = arguments;
                        return jQuery.Deferred(function(newDefer) {
                            jQuery.each(tuples, function(i, tuple) {
                                var action = tuple[0],
                                    fn = jQuery.isFunction(fns[i]) && fns[i];
                                deferred[tuple[1]](function() {
                                    var returned = fn && fn.apply(this, arguments);
                                    if (returned && jQuery.isFunction(returned.promise)) {
                                        returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify)
                                    } else {
                                        newDefer[action + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments)
                                    }
                                })
                            });
                            fns = null
                        }).promise()
                    },
                    promise: function(obj) {
                        return obj != null ? jQuery.extend(obj, promise) : promise
                    }
                },
                deferred = {};
            promise.pipe = promise.then;
            jQuery.each(tuples, function(i, tuple) {
                var list = tuple[2],
                    stateString = tuple[3];
                promise[tuple[1]] = list.add;
                if (stateString) {
                    list.add(function() {
                        state = stateString
                    }, tuples[i ^ 1][2].disable, tuples[2][2].lock)
                }
                deferred[tuple[0]] = function() {
                    deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
                    return this
                };
                deferred[tuple[0] + "With"] = list.fireWith
            });
            promise.promise(deferred);
            if (func) {
                func.call(deferred, deferred)
            }
            return deferred
        },
        when: function(subordinate) {
            var i = 0,
                resolveValues = core_slice.call(arguments),
                length = resolveValues.length,
                remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0,
                deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
                updateFunc = function(i, contexts, values) {
                    return function(value) {
                        contexts[i] = this;
                        values[i] = arguments.length > 1 ? core_slice.call(arguments) : value;
                        if (values === progressValues) {
                            deferred.notifyWith(contexts, values)
                        } else if (!--remaining) {
                            deferred.resolveWith(contexts, values)
                        }
                    }
                },
                progressValues, progressContexts, resolveContexts;
            if (length > 1) {
                progressValues = new Array(length);
                progressContexts = new Array(length);
                resolveContexts = new Array(length);
                for (; i < length; i++) {
                    if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
                        resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues))
                    } else {
                        --remaining
                    }
                }
            }
            if (!remaining) {
                deferred.resolveWith(resolveContexts, resolveValues)
            }
            return deferred.promise()
        }
    });
    jQuery.support = function(support) {
        var all, a, input, select, fragment, opt, eventName, isSupported, i, div = document.createElement("div");
        div.setAttribute("className", "t");
        div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        all = div.getElementsByTagName("*") || [];
        a = div.getElementsByTagName("a")[0];
        if (!a || !a.style || !all.length) {
            return support
        }
        select = document.createElement("select");
        opt = select.appendChild(document.createElement("option"));
        input = div.getElementsByTagName("input")[0];
        a.style.cssText = "top:1px;float:left;opacity:.5";
        support.getSetAttribute = div.className !== "t";
        support.leadingWhitespace = div.firstChild.nodeType === 3;
        support.tbody = !div.getElementsByTagName("tbody").length;
        support.htmlSerialize = !!div.getElementsByTagName("link").length;
        support.style = /top/.test(a.getAttribute("style"));
        support.hrefNormalized = a.getAttribute("href") === "/a";
        support.opacity = /^0.5/.test(a.style.opacity);
        support.cssFloat = !!a.style.cssFloat;
        support.checkOn = !!input.value;
        support.optSelected = opt.selected;
        support.enctype = !!document.createElement("form").enctype;
        support.html5Clone = document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
        support.inlineBlockNeedsLayout = false;
        support.shrinkWrapBlocks = false;
        support.pixelPosition = false;
        support.deleteExpando = true;
        support.noCloneEvent = true;
        support.reliableMarginRight = true;
        support.boxSizingReliable = true;
        input.checked = true;
        support.noCloneChecked = input.cloneNode(true).checked;
        select.disabled = true;
        support.optDisabled = !opt.disabled;
        try {
            delete div.test
        } catch (e) {
            support.deleteExpando = false
        }
        input = document.createElement("input");
        input.setAttribute("value", "");
        support.input = input.getAttribute("value") === "";
        input.value = "t";
        input.setAttribute("type", "radio");
        support.radioValue = input.value === "t";
        input.setAttribute("checked", "t");
        input.setAttribute("name", "t");
        fragment = document.createDocumentFragment();
        fragment.appendChild(input);
        support.appendChecked = input.checked;
        support.checkClone = fragment.cloneNode(true).cloneNode(true).lastChild.checked;
        if (div.attachEvent) {
            div.attachEvent("onclick", function() {
                support.noCloneEvent = false
            });
            div.cloneNode(true).click()
        }
        for (i in {
                submit: true,
                change: true,
                focusin: true
            }) {
            div.setAttribute(eventName = "on" + i, "t");
            support[i + "Bubbles"] = eventName in window || div.attributes[eventName].expando === false
        }
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        for (i in jQuery(support)) {
            break
        }
        support.ownLast = i !== "0";
        jQuery(function() {
            var container, marginDiv, tds, divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                body = document.getElementsByTagName("body")[0];
            if (!body) {
                return
            }
            container = document.createElement("div");
            container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
            body.appendChild(container).appendChild(div);
            div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
            tds = div.getElementsByTagName("td");
            tds[0].style.cssText = "padding:0;margin:0;border:0;display:none";
            isSupported = tds[0].offsetHeight === 0;
            tds[0].style.display = "";
            tds[1].style.display = "none";
            support.reliableHiddenOffsets = isSupported && tds[0].offsetHeight === 0;
            div.innerHTML = "";
            div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
            jQuery.swap(body, body.style.zoom != null ? {
                zoom: 1
            } : {}, function() {
                support.boxSizing = div.offsetWidth === 4
            });
            if (window.getComputedStyle) {
                support.pixelPosition = (window.getComputedStyle(div, null) || {}).top !== "1%";
                support.boxSizingReliable = (window.getComputedStyle(div, null) || {
                    width: "4px"
                }).width === "4px";
                marginDiv = div.appendChild(document.createElement("div"));
                marginDiv.style.cssText = div.style.cssText = divReset;
                marginDiv.style.marginRight = marginDiv.style.width = "0";
                div.style.width = "1px";
                support.reliableMarginRight = !parseFloat((window.getComputedStyle(marginDiv, null) || {}).marginRight)
            }
            if (typeof div.style.zoom !== core_strundefined) {
                div.innerHTML = "";
                div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
                support.inlineBlockNeedsLayout = div.offsetWidth === 3;
                div.style.display = "block";
                div.innerHTML = "<div></div>";
                div.firstChild.style.width = "5px";
                support.shrinkWrapBlocks = div.offsetWidth !== 3;
                if (support.inlineBlockNeedsLayout) {
                    body.style.zoom = 1
                }
            }
            body.removeChild(container);
            container = div = tds = marginDiv = null
        });
        all = select = fragment = opt = a = input = null;
        return support
    }({});
    var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        rmultiDash = /([A-Z])/g;

    function internalData(elem, name, data, pvt) {
        if (!jQuery.acceptData(elem)) {
            return
        }
        var ret, thisCache, internalKey = jQuery.expando,
            isNode = elem.nodeType,
            cache = isNode ? jQuery.cache : elem,
            id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
        if ((!id || !cache[id] || !pvt && !cache[id].data) && data === undefined && typeof name === "string") {
            return
        }
        if (!id) {
            if (isNode) {
                id = elem[internalKey] = core_deletedIds.pop() || jQuery.guid++
            } else {
                id = internalKey
            }
        }
        if (!cache[id]) {
            cache[id] = isNode ? {} : {
                toJSON: jQuery.noop
            }
        }
        if (typeof name === "object" || typeof name === "function") {
            if (pvt) {
                cache[id] = jQuery.extend(cache[id], name)
            } else {
                cache[id].data = jQuery.extend(cache[id].data, name)
            }
        }
        thisCache = cache[id];
        if (!pvt) {
            if (!thisCache.data) {
                thisCache.data = {}
            }
            thisCache = thisCache.data
        }
        if (data !== undefined) {
            thisCache[jQuery.camelCase(name)] = data
        }
        if (typeof name === "string") {
            ret = thisCache[name];
            if (ret == null) {
                ret = thisCache[jQuery.camelCase(name)]
            }
        } else {
            ret = thisCache
        }
        return ret
    }

    function internalRemoveData(elem, name, pvt) {
        if (!jQuery.acceptData(elem)) {
            return
        }
        var thisCache, i, isNode = elem.nodeType,
            cache = isNode ? jQuery.cache : elem,
            id = isNode ? elem[jQuery.expando] : jQuery.expando;
        if (!cache[id]) {
            return
        }
        if (name) {
            thisCache = pvt ? cache[id] : cache[id].data;
            if (thisCache) {
                if (!jQuery.isArray(name)) {
                    if (name in thisCache) {
                        name = [name]
                    } else {
                        name = jQuery.camelCase(name);
                        if (name in thisCache) {
                            name = [name]
                        } else {
                            name = name.split(" ")
                        }
                    }
                } else {
                    name = name.concat(jQuery.map(name, jQuery.camelCase))
                }
                i = name.length;
                while (i--) {
                    delete thisCache[name[i]]
                }
                if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) {
                    return
                }
            }
        }
        if (!pvt) {
            delete cache[id].data;
            if (!isEmptyDataObject(cache[id])) {
                return
            }
        }
        if (isNode) {
            jQuery.cleanData([elem], true)
        } else if (jQuery.support.deleteExpando || cache != cache.window) {
            delete cache[id]
        } else {
            cache[id] = null
        }
    }
    jQuery.extend({
        cache: {},
        noData: {
            applet: true,
            embed: true,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(elem) {
            elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
            return !!elem && !isEmptyDataObject(elem)
        },
        data: function(elem, name, data) {
            return internalData(elem, name, data)
        },
        removeData: function(elem, name) {
            return internalRemoveData(elem, name)
        },
        _data: function(elem, name, data) {
            return internalData(elem, name, data, true)
        },
        _removeData: function(elem, name) {
            return internalRemoveData(elem, name, true)
        },
        acceptData: function(elem) {
            if (elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9) {
                return false
            }
            var noData = elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()];
            return !noData || noData !== true && elem.getAttribute("classid") === noData
        }
    });
    jQuery.fn.extend({
        data: function(key, value) {
            var attrs, name, data = null,
                i = 0,
                elem = this[0];
            if (key === undefined) {
                if (this.length) {
                    data = jQuery.data(elem);
                    if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
                        attrs = elem.attributes;
                        for (; i < attrs.length; i++) {
                            name = attrs[i].name;
                            if (name.indexOf("data-") === 0) {
                                name = jQuery.camelCase(name.slice(5));
                                dataAttr(elem, name, data[name])
                            }
                        }
                        jQuery._data(elem, "parsedAttrs", true)
                    }
                }
                return data
            }
            if (typeof key === "object") {
                return this.each(function() {
                    jQuery.data(this, key)
                })
            }
            return arguments.length > 1 ? this.each(function() {
                jQuery.data(this, key, value)
            }) : elem ? dataAttr(elem, key, jQuery.data(elem, key)) : null
        },
        removeData: function(key) {
            return this.each(function() {
                jQuery.removeData(this, key)
            })
        }
    });

    function dataAttr(elem, key, data) {
        if (data === undefined && elem.nodeType === 1) {
            var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
                try {
                    data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data
                } catch (e) {}
                jQuery.data(elem, key, data)
            } else {
                data = undefined
            }
        }
        return data
    }

    function isEmptyDataObject(obj) {
        var name;
        for (name in obj) {
            if (name === "data" && jQuery.isEmptyObject(obj[name])) {
                continue
            }
            if (name !== "toJSON") {
                return false
            }
        }
        return true
    }
    jQuery.extend({
        queue: function(elem, type, data) {
            var queue;
            if (elem) {
                type = (type || "fx") + "queue";
                queue = jQuery._data(elem, type);
                if (data) {
                    if (!queue || jQuery.isArray(data)) {
                        queue = jQuery._data(elem, type, jQuery.makeArray(data))
                    } else {
                        queue.push(data)
                    }
                }
                return queue || []
            }
        },
        dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type),
                startLength = queue.length,
                fn = queue.shift(),
                hooks = jQuery._queueHooks(elem, type),
                next = function() {
                    jQuery.dequeue(elem, type)
                };
            if (fn === "inprogress") {
                fn = queue.shift();
                startLength--
            }
            if (fn) {
                if (type === "fx") {
                    queue.unshift("inprogress")
                }
                delete hooks.stop;
                fn.call(elem, next, hooks)
            }
            if (!startLength && hooks) {
                hooks.empty.fire()
            }
        },
        _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return jQuery._data(elem, key) || jQuery._data(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    jQuery._removeData(elem, type + "queue");
                    jQuery._removeData(elem, key)
                })
            })
        }
    });
    jQuery.fn.extend({
        queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
                data = type;
                type = "fx";
                setter--
            }
            if (arguments.length < setter) {
                return jQuery.queue(this[0], type)
            }
            return data === undefined ? this : this.each(function() {
                var queue = jQuery.queue(this, type, data);
                jQuery._queueHooks(this, type);
                if (type === "fx" && queue[0] !== "inprogress") {
                    jQuery.dequeue(this, type)
                }
            })
        },
        dequeue: function(type) {
            return this.each(function() {
                jQuery.dequeue(this, type)
            })
        },
        delay: function(time, type) {
            time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
            type = type || "fx";
            return this.queue(type, function(next, hooks) {
                var timeout = setTimeout(next, time);
                hooks.stop = function() {
                    clearTimeout(timeout)
                }
            })
        },
        clearQueue: function(type) {
            return this.queue(type || "fx", [])
        },
        promise: function(type, obj) {
            var tmp, count = 1,
                defer = jQuery.Deferred(),
                elements = this,
                i = this.length,
                resolve = function() {
                    if (!--count) {
                        defer.resolveWith(elements, [elements])
                    }
                };
            if (typeof type !== "string") {
                obj = type;
                type = undefined
            }
            type = type || "fx";
            while (i--) {
                tmp = jQuery._data(elements[i], type + "queueHooks");
                if (tmp && tmp.empty) {
                    count++;
                    tmp.empty.add(resolve)
                }
            }
            resolve();
            return defer.promise(obj)
        }
    });
    var nodeHook, boolHook, rclass = /[\t\r\n\f]/g,
        rreturn = /\r/g,
        rfocusable = /^(?:input|select|textarea|button|object)$/i,
        rclickable = /^(?:a|area)$/i,
        ruseDefault = /^(?:checked|selected)$/i,
        getSetAttribute = jQuery.support.getSetAttribute,
        getSetInput = jQuery.support.input;
    jQuery.fn.extend({
        attr: function(name, value) {
            return jQuery.access(this, jQuery.attr, name, value, arguments.length > 1)
        },
        removeAttr: function(name) {
            return this.each(function() {
                jQuery.removeAttr(this, name)
            })
        },
        prop: function(name, value) {
            return jQuery.access(this, jQuery.prop, name, value, arguments.length > 1)
        },
        removeProp: function(name) {
            name = jQuery.propFix[name] || name;
            return this.each(function() {
                try {
                    this[name] = undefined;
                    delete this[name]
                } catch (e) {}
            })
        },
        addClass: function(value) {
            var classes, elem, cur, clazz, j, i = 0,
                len = this.length,
                proceed = typeof value === "string" && value;
            if (jQuery.isFunction(value)) {
                return this.each(function(j) {
                    jQuery(this).addClass(value.call(this, j, this.className))
                })
            }
            if (proceed) {
                classes = (value || "").match(core_rnotwhite) || [];
                for (; i < len; i++) {
                    elem = this[i];
                    cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");
                    if (cur) {
                        j = 0;
                        while (clazz = classes[j++]) {
                            if (cur.indexOf(" " + clazz + " ") < 0) {
                                cur += clazz + " "
                            }
                        }
                        elem.className = jQuery.trim(cur)
                    }
                }
            }
            return this
        },
        removeClass: function(value) {
            var classes, elem, cur, clazz, j, i = 0,
                len = this.length,
                proceed = arguments.length === 0 || typeof value === "string" && value;
            if (jQuery.isFunction(value)) {
                return this.each(function(j) {
                    jQuery(this).removeClass(value.call(this, j, this.className))
                })
            }
            if (proceed) {
                classes = (value || "").match(core_rnotwhite) || [];
                for (; i < len; i++) {
                    elem = this[i];
                    cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");
                    if (cur) {
                        j = 0;
                        while (clazz = classes[j++]) {
                            while (cur.indexOf(" " + clazz + " ") >= 0) {
                                cur = cur.replace(" " + clazz + " ", " ")
                            }
                        }
                        elem.className = value ? jQuery.trim(cur) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(value, stateVal) {
            var type = typeof value;
            if (typeof stateVal === "boolean" && type === "string") {
                return stateVal ? this.addClass(value) : this.removeClass(value)
            }
            if (jQuery.isFunction(value)) {
                return this.each(function(i) {
                    jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal)
                })
            }
            return this.each(function() {
                if (type === "string") {
                    var className, i = 0,
                        self = jQuery(this),
                        classNames = value.match(core_rnotwhite) || [];
                    while (className = classNames[i++]) {
                        if (self.hasClass(className)) {
                            self.removeClass(className)
                        } else {
                            self.addClass(className)
                        }
                    }
                } else if (type === core_strundefined || type === "boolean") {
                    if (this.className) {
                        jQuery._data(this, "__className__", this.className)
                    }
                    this.className = this.className || value === false ? "" : jQuery._data(this, "__className__") || ""
                }
            })
        },
        hasClass: function(selector) {
            var className = " " + selector + " ",
                i = 0,
                l = this.length;
            for (; i < l; i++) {
                if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
                    return true
                }
            }
            return false
        },
        val: function(value) {
            var ret, hooks, isFunction, elem = this[0];
            if (!arguments.length) {
                if (elem) {
                    hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                        return ret
                    }
                    ret = elem.value;
                    return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret
                }
                return
            }
            isFunction = jQuery.isFunction(value);
            return this.each(function(i) {
                var val;
                if (this.nodeType !== 1) {
                    return
                }
                if (isFunction) {
                    val = value.call(this, i, jQuery(this).val())
                } else {
                    val = value
                }
                if (val == null) {
                    val = ""
                } else if (typeof val === "number") {
                    val += ""
                } else if (jQuery.isArray(val)) {
                    val = jQuery.map(val, function(value) {
                        return value == null ? "" : value + ""
                    })
                }
                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                    this.value = val
                }
            })
        }
    });
    jQuery.extend({
        valHooks: {
            option: {
                get: function(elem) {
                    var val = jQuery.find.attr(elem, "value");
                    return val != null ? val : elem.text
                }
            },
            select: {
                get: function(elem) {
                    var value, option, options = elem.options,
                        index = elem.selectedIndex,
                        one = elem.type === "select-one" || index < 0,
                        values = one ? null : [],
                        max = one ? index + 1 : options.length,
                        i = index < 0 ? max : one ? index : 0;
                    for (; i < max; i++) {
                        option = options[i];
                        if ((option.selected || i === index) && (jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
                            value = jQuery(option).val();
                            if (one) {
                                return value
                            }
                            values.push(value)
                        }
                    }
                    return values
                },
                set: function(elem, value) {
                    var optionSet, option, options = elem.options,
                        values = jQuery.makeArray(value),
                        i = options.length;
                    while (i--) {
                        option = options[i];
                        if (option.selected = jQuery.inArray(jQuery(option).val(), values) >= 0) {
                            optionSet = true
                        }
                    }
                    if (!optionSet) {
                        elem.selectedIndex = -1
                    }
                    return values
                }
            }
        },
        attr: function(elem, name, value) {
            var hooks, ret, nType = elem.nodeType;
            if (!elem || nType === 3 || nType === 8 || nType === 2) {
                return
            }
            if (typeof elem.getAttribute === core_strundefined) {
                return jQuery.prop(elem, name, value)
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                name = name.toLowerCase();
                hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook)
            }
            if (value !== undefined) {
                if (value === null) {
                    jQuery.removeAttr(elem, name)
                } else if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret
                } else {
                    elem.setAttribute(name, value + "");
                    return value
                }
            } else if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                return ret
            } else {
                ret = jQuery.find.attr(elem, name);
                return ret == null ? undefined : ret
            }
        },
        removeAttr: function(elem, value) {
            var name, propName, i = 0,
                attrNames = value && value.match(core_rnotwhite);
            if (attrNames && elem.nodeType === 1) {
                while (name = attrNames[i++]) {
                    propName = jQuery.propFix[name] || name;
                    if (jQuery.expr.match.bool.test(name)) {
                        if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
                            elem[propName] = false
                        } else {
                            elem[jQuery.camelCase("default-" + name)] = elem[propName] = false
                        }
                    } else {
                        jQuery.attr(elem, name, "")
                    }
                    elem.removeAttribute(getSetAttribute ? name : propName)
                }
            }
        },
        attrHooks: {
            type: {
                set: function(elem, value) {
                    if (!jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
                        var val = elem.value;
                        elem.setAttribute("type", value);
                        if (val) {
                            elem.value = val
                        }
                        return value
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(elem, name, value) {
            var ret, hooks, notxml, nType = elem.nodeType;
            if (!elem || nType === 3 || nType === 8 || nType === 2) {
                return
            }
            notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
            if (notxml) {
                name = jQuery.propFix[name] || name;
                hooks = jQuery.propHooks[name]
            }
            if (value !== undefined) {
                return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? ret : elem[name] = value
            } else {
                return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(elem) {
                    var tabindex = jQuery.find.attr(elem, "tabindex");
                    return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1
                }
            }
        }
    });
    boolHook = {
        set: function(elem, value, name) {
            if (value === false) {
                jQuery.removeAttr(elem, name)
            } else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
                elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name)
            } else {
                elem[jQuery.camelCase("default-" + name)] = elem[name] = true
            }
            return name
        }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
        var getter = jQuery.expr.attrHandle[name] || jQuery.find.attr;
        jQuery.expr.attrHandle[name] = getSetInput && getSetAttribute || !ruseDefault.test(name) ? function(elem, name, isXML) {
            var fn = jQuery.expr.attrHandle[name],
                ret = isXML ? undefined : (jQuery.expr.attrHandle[name] = undefined) != getter(elem, name, isXML) ? name.toLowerCase() : null;
            jQuery.expr.attrHandle[name] = fn;
            return ret
        } : function(elem, name, isXML) {
            return isXML ? undefined : elem[jQuery.camelCase("default-" + name)] ? name.toLowerCase() : null
        }
    });
    if (!getSetInput || !getSetAttribute) {
        jQuery.attrHooks.value = {
            set: function(elem, value, name) {
                if (jQuery.nodeName(elem, "input")) {
                    elem.defaultValue = value
                } else {
                    return nodeHook && nodeHook.set(elem, value, name)
                }
            }
        }
    }
    if (!getSetAttribute) {
        nodeHook = {
            set: function(elem, value, name) {
                var ret = elem.getAttributeNode(name);
                if (!ret) {
                    elem.setAttributeNode(ret = elem.ownerDocument.createAttribute(name))
                }
                ret.value = value += "";
                return name === "value" || value === elem.getAttribute(name) ? value : undefined
            }
        };
        jQuery.expr.attrHandle.id = jQuery.expr.attrHandle.name = jQuery.expr.attrHandle.coords = function(elem, name, isXML) {
            var ret;
            return isXML ? undefined : (ret = elem.getAttributeNode(name)) && ret.value !== "" ? ret.value : null
        };
        jQuery.valHooks.button = {
            get: function(elem, name) {
                var ret = elem.getAttributeNode(name);
                return ret && ret.specified ? ret.value : undefined
            },
            set: nodeHook.set
        };
        jQuery.attrHooks.contenteditable = {
            set: function(elem, value, name) {
                nodeHook.set(elem, value === "" ? false : value, name)
            }
        };
        jQuery.each(["width", "height"], function(i, name) {
            jQuery.attrHooks[name] = {
                set: function(elem, value) {
                    if (value === "") {
                        elem.setAttribute(name, "auto");
                        return value
                    }
                }
            }
        })
    }
    if (!jQuery.support.hrefNormalized) {
        jQuery.each(["href", "src"], function(i, name) {
            jQuery.propHooks[name] = {
                get: function(elem) {
                    return elem.getAttribute(name, 4)
                }
            }
        })
    }
    if (!jQuery.support.style) {
        jQuery.attrHooks.style = {
            get: function(elem) {
                return elem.style.cssText || undefined
            },
            set: function(elem, value) {
                return elem.style.cssText = value + ""
            }
        }
    }
    if (!jQuery.support.optSelected) {
        jQuery.propHooks.selected = {
            get: function(elem) {
                var parent = elem.parentNode;
                if (parent) {
                    parent.selectedIndex;
                    if (parent.parentNode) {
                        parent.parentNode.selectedIndex
                    }
                }
                return null
            }
        }
    }
    jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        jQuery.propFix[this.toLowerCase()] = this
    });
    if (!jQuery.support.enctype) {
        jQuery.propFix.enctype = "encoding"
    }
    jQuery.each(["radio", "checkbox"], function() {
        jQuery.valHooks[this] = {
            set: function(elem, value) {
                if (jQuery.isArray(value)) {
                    return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0
                }
            }
        };
        if (!jQuery.support.checkOn) {
            jQuery.valHooks[this].get = function(elem) {
                return elem.getAttribute("value") === null ? "on" : elem.value
            }
        }
    });
    var rformElems = /^(?:input|select|textarea)$/i,
        rkeyEvent = /^key/,
        rmouseEvent = /^(?:mouse|contextmenu)|click/,
        rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
        rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

    function returnTrue() {
        return true
    }

    function returnFalse() {
        return false
    }

    function safeActiveElement() {
        try {
            return document.activeElement
        } catch (err) {}
    }
    jQuery.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
            var tmp, events, t, handleObjIn, special, eventHandle, handleObj, handlers, type, namespaces, origType, elemData = jQuery._data(elem);
            if (!elemData) {
                return
            }
            if (handler.handler) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector
            }
            if (!handler.guid) {
                handler.guid = jQuery.guid++
            }
            if (!(events = elemData.events)) {
                events = elemData.events = {}
            }
            if (!(eventHandle = elemData.handle)) {
                eventHandle = elemData.handle = function(e) {
                    return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(eventHandle.elem, arguments) : undefined
                };
                eventHandle.elem = elem
            }
            types = (types || "").match(core_rnotwhite) || [""];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                if (!type) {
                    continue
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                special = jQuery.event.special[type] || {};
                handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn);
                if (!(handlers = events[type])) {
                    handlers = events[type] = [];
                    handlers.delegateCount = 0;
                    if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                        if (elem.addEventListener) {
                            elem.addEventListener(type, eventHandle, false)
                        } else if (elem.attachEvent) {
                            elem.attachEvent("on" + type, eventHandle)
                        }
                    }
                }
                if (special.add) {
                    special.add.call(elem, handleObj);
                    if (!handleObj.handler.guid) {
                        handleObj.handler.guid = handler.guid
                    }
                }
                if (selector) {
                    handlers.splice(handlers.delegateCount++, 0, handleObj)
                } else {
                    handlers.push(handleObj)
                }
                jQuery.event.global[type] = true
            }
            elem = null
        },
        remove: function(elem, types, handler, selector, mappedTypes) {
            var j, handleObj, tmp, origCount, t, events, special, handlers, type, namespaces, origType, elemData = jQuery.hasData(elem) && jQuery._data(elem);
            if (!elemData || !(events = elemData.events)) {
                return
            }
            types = (types || "").match(core_rnotwhite) || [""];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                if (!type) {
                    for (type in events) {
                        jQuery.event.remove(elem, type + types[t], handler, selector, true)
                    }
                    continue
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                handlers = events[type] || [];
                tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                origCount = j = handlers.length;
                while (j--) {
                    handleObj = handlers[j];
                    if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                        handlers.splice(j, 1);
                        if (handleObj.selector) {
                            handlers.delegateCount--
                        }
                        if (special.remove) {
                            special.remove.call(elem, handleObj)
                        }
                    }
                }
                if (origCount && !handlers.length) {
                    if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                        jQuery.removeEvent(elem, type, elemData.handle)
                    }
                    delete events[type]
                }
            }
            if (jQuery.isEmptyObject(events)) {
                delete elemData.handle;
                jQuery._removeData(elem, "events")
            }
        },
        trigger: function(event, data, elem, onlyHandlers) {
            var handle, ontype, cur, bubbleType, special, tmp, i, eventPath = [elem || document],
                type = core_hasOwn.call(event, "type") ? event.type : event,
                namespaces = core_hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = tmp = elem = elem || document;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
                return
            }
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
                return
            }
            if (type.indexOf(".") >= 0) {
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort()
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event.result = undefined;
            if (!event.target) {
                event.target = elem
            }
            data = data == null ? [event] : jQuery.makeArray(data, [event]);
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                return
            }
            if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                bubbleType = special.delegateType || type;
                if (!rfocusMorph.test(bubbleType + type)) {
                    cur = cur.parentNode
                }
                for (; cur; cur = cur.parentNode) {
                    eventPath.push(cur);
                    tmp = cur
                }
                if (tmp === (elem.ownerDocument || document)) {
                    eventPath.push(tmp.defaultView || tmp.parentWindow || window)
                }
            }
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                event.type = i > 1 ? bubbleType : special.bindType || type;
                handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");
                if (handle) {
                    handle.apply(cur, data)
                }
                handle = ontype && cur[ontype];
                if (handle && jQuery.acceptData(cur) && handle.apply && handle.apply(cur, data) === false) {
                    event.preventDefault()
                }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
                if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && jQuery.acceptData(elem)) {
                    if (ontype && elem[type] && !jQuery.isWindow(elem)) {
                        tmp = elem[ontype];
                        if (tmp) {
                            elem[ontype] = null
                        }
                        jQuery.event.triggered = type;
                        try {
                            elem[type]()
                        } catch (e) {}
                        jQuery.event.triggered = undefined;
                        if (tmp) {
                            elem[ontype] = tmp
                        }
                    }
                }
            }
            return event.result
        },
        dispatch: function(event) {
            event = jQuery.event.fix(event);
            var i, ret, handleObj, matched, j, handlerQueue = [],
                args = core_slice.call(arguments),
                handlers = (jQuery._data(this, "events") || {})[event.type] || [],
                special = jQuery.event.special[event.type] || {};
            args[0] = event;
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                return
            }
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                event.currentTarget = matched.elem;
                j = 0;
                while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                    if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
                        event.handleObj = handleObj;
                        event.data = handleObj.data;
                        ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                        if (ret !== undefined) {
                            if ((event.result = ret) === false) {
                                event.preventDefault();
                                event.stopPropagation()
                            }
                        }
                    }
                }
            }
            if (special.postDispatch) {
                special.postDispatch.call(this, event)
            }
            return event.result
        },
        handlers: function(event, handlers) {
            var sel, handleObj, matches, i, handlerQueue = [],
                delegateCount = handlers.delegateCount,
                cur = event.target;
            if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {
                for (; cur != this; cur = cur.parentNode || this) {
                    if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
                        matches = [];
                        for (i = 0; i < delegateCount; i++) {
                            handleObj = handlers[i];
                            sel = handleObj.selector + " ";
                            if (matches[sel] === undefined) {
                                matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length
                            }
                            if (matches[sel]) {
                                matches.push(handleObj)
                            }
                        }
                        if (matches.length) {
                            handlerQueue.push({
                                elem: cur,
                                handlers: matches
                            })
                        }
                    }
                }
            }
            if (delegateCount < handlers.length) {
                handlerQueue.push({
                    elem: this,
                    handlers: handlers.slice(delegateCount)
                })
            }
            return handlerQueue
        },
        fix: function(event) {
            if (event[jQuery.expando]) {
                return event
            }
            var i, prop, copy, type = event.type,
                originalEvent = event,
                fixHook = this.fixHooks[type];
            if (!fixHook) {
                this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {}
            }
            copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
            event = new jQuery.Event(originalEvent);
            i = copy.length;
            while (i--) {
                prop = copy[i];
                event[prop] = originalEvent[prop]
            }
            if (!event.target) {
                event.target = originalEvent.srcElement || document
            }
            if (event.target.nodeType === 3) {
                event.target = event.target.parentNode
            }
            event.metaKey = !!event.metaKey;
            return fixHook.filter ? fixHook.filter(event, originalEvent) : event
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(event, original) {
                if (event.which == null) {
                    event.which = original.charCode != null ? original.charCode : original.keyCode
                }
                return event
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(event, original) {
                var body, eventDoc, doc, button = original.button,
                    fromElement = original.fromElement;
                if (event.pageX == null && original.clientX != null) {
                    eventDoc = event.target.ownerDocument || document;
                    doc = eventDoc.documentElement;
                    body = eventDoc.body;
                    event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                    event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0)
                }
                if (!event.relatedTarget && fromElement) {
                    event.relatedTarget = fromElement === event.target ? original.toElement : fromElement
                }
                if (!event.which && button !== undefined) {
                    event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0
                }
                return event
            }
        },
        special: {
            load: {
                noBubble: true
            },
            focus: {
                trigger: function() {
                    if (this !== safeActiveElement() && this.focus) {
                        try {
                            this.focus();
                            return false
                        } catch (e) {}
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === safeActiveElement() && this.blur) {
                        this.blur();
                        return false
                    }
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                        this.click();
                        return false
                    }
                },
                _default: function(event) {
                    return jQuery.nodeName(event.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(event) {
                    if (event.result !== undefined) {
                        event.originalEvent.returnValue = event.result
                    }
                }
            }
        },
        simulate: function(type, elem, event, bubble) {
            var e = jQuery.extend(new jQuery.Event, event, {
                type: type,
                isSimulated: true,
                originalEvent: {}
            });
            if (bubble) {
                jQuery.event.trigger(e, null, elem)
            } else {
                jQuery.event.dispatch.call(elem, e)
            }
            if (e.isDefaultPrevented()) {
                event.preventDefault()
            }
        }
    };
    jQuery.removeEvent = document.removeEventListener ? function(elem, type, handle) {
        if (elem.removeEventListener) {
            elem.removeEventListener(type, handle, false)
        }
    } : function(elem, type, handle) {
        var name = "on" + type;
        if (elem.detachEvent) {
            if (typeof elem[name] === core_strundefined) {
                elem[name] = null
            }
            elem.detachEvent(name, handle)
        }
    };
    jQuery.Event = function(src, props) {
        if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(src, props)
        }
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.returnValue === false || src.getPreventDefault && src.getPreventDefault() ? returnTrue : returnFalse
        } else {
            this.type = src
        }
        if (props) {
            jQuery.extend(this, props)
        }
        this.timeStamp = src && src.timeStamp || jQuery.now();
        this[jQuery.expando] = true
    };
    jQuery.Event.prototype = {
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (!e) {
                return
            }
            if (e.preventDefault) {
                e.preventDefault()
            } else {
                e.returnValue = false
            }
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (!e) {
                return
            }
            if (e.stopPropagation) {
                e.stopPropagation()
            }
            e.cancelBubble = true
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = returnTrue;
            this.stopPropagation()
        }
    };
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
                var ret, target = this,
                    related = event.relatedTarget,
                    handleObj = event.handleObj;
                if (!related || related !== target && !jQuery.contains(target, related)) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply(this, arguments);
                    event.type = fix
                }
                return ret
            }
        }
    });
    if (!jQuery.support.submitBubbles) {
        jQuery.event.special.submit = {
            setup: function() {
                if (jQuery.nodeName(this, "form")) {
                    return false
                }
                jQuery.event.add(this, "click._submit keypress._submit", function(e) {
                    var elem = e.target,
                        form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : undefined;
                    if (form && !jQuery._data(form, "submitBubbles")) {
                        jQuery.event.add(form, "submit._submit", function(event) {
                            event._submit_bubble = true
                        });
                        jQuery._data(form, "submitBubbles", true)
                    }
                })
            },
            postDispatch: function(event) {
                if (event._submit_bubble) {
                    delete event._submit_bubble;
                    if (this.parentNode && !event.isTrigger) {
                        jQuery.event.simulate("submit", this.parentNode, event, true)
                    }
                }
            },
            teardown: function() {
                if (jQuery.nodeName(this, "form")) {
                    return false
                }
                jQuery.event.remove(this, "._submit")
            }
        }
    }
    if (!jQuery.support.changeBubbles) {
        jQuery.event.special.change = {
            setup: function() {
                if (rformElems.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        jQuery.event.add(this, "propertychange._change", function(event) {
                            if (event.originalEvent.propertyName === "checked") {
                                this._just_changed = true
                            }
                        });
                        jQuery.event.add(this, "click._change", function(event) {
                            if (this._just_changed && !event.isTrigger) {
                                this._just_changed = false
                            }
                            jQuery.event.simulate("change", this, event, true)
                        })
                    }
                    return false
                }
                jQuery.event.add(this, "beforeactivate._change", function(e) {
                    var elem = e.target;
                    if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles")) {
                        jQuery.event.add(elem, "change._change", function(event) {
                            if (this.parentNode && !event.isSimulated && !event.isTrigger) {
                                jQuery.event.simulate("change", this.parentNode, event, true)
                            }
                        });
                        jQuery._data(elem, "changeBubbles", true)
                    }
                })
            },
            handle: function(event) {
                var elem = event.target;
                if (this !== elem || event.isSimulated || event.isTrigger || elem.type !== "radio" && elem.type !== "checkbox") {
                    return event.handleObj.handler.apply(this, arguments)
                }
            },
            teardown: function() {
                jQuery.event.remove(this, "._change");
                return !rformElems.test(this.nodeName)
            }
        }
    }
    if (!jQuery.support.focusinBubbles) {
        jQuery.each({
            focus: "focusin",
            blur: "focusout"
        }, function(orig, fix) {
            var attaches = 0,
                handler = function(event) {
                    jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true)
                };
            jQuery.event.special[fix] = {
                setup: function() {
                    if (attaches++ === 0) {
                        document.addEventListener(orig, handler, true)
                    }
                },
                teardown: function() {
                    if (--attaches === 0) {
                        document.removeEventListener(orig, handler, true)
                    }
                }
            }
        })
    }
    jQuery.fn.extend({
        on: function(types, selector, data, fn, one) {
            var type, origFn;
            if (typeof types === "object") {
                if (typeof selector !== "string") {
                    data = data || selector;
                    selector = undefined
                }
                for (type in types) {
                    this.on(type, selector, data, types[type], one)
                }
                return this
            }
            if (data == null && fn == null) {
                fn = selector;
                data = selector = undefined
            } else if (fn == null) {
                if (typeof selector === "string") {
                    fn = data;
                    data = undefined
                } else {
                    fn = data;
                    data = selector;
                    selector = undefined
                }
            }
            if (fn === false) {
                fn = returnFalse
            } else if (!fn) {
                return this
            }
            if (one === 1) {
                origFn = fn;
                fn = function(event) {
                    jQuery().off(event);
                    return origFn.apply(this, arguments)
                };
                fn.guid = origFn.guid || (origFn.guid = jQuery.guid++)
            }
            return this.each(function() {
                jQuery.event.add(this, types, fn, data, selector)
            })
        },
        one: function(types, selector, data, fn) {
            return this.on(types, selector, data, fn, 1)
        },
        off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
                handleObj = types.handleObj;
                jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                return this
            }
            if (typeof types === "object") {
                for (type in types) {
                    this.off(type, selector, types[type])
                }
                return this
            }
            if (selector === false || typeof selector === "function") {
                fn = selector;
                selector = undefined
            }
            if (fn === false) {
                fn = returnFalse
            }
            return this.each(function() {
                jQuery.event.remove(this, types, fn, selector)
            })
        },
        trigger: function(type, data) {
            return this.each(function() {
                jQuery.event.trigger(type, data, this)
            })
        },
        triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) {
                return jQuery.event.trigger(type, data, elem, true)
            }
        }
    });
    var isSimple = /^.[^:#\[\.,]*$/,
        rparentsprev = /^(?:parents|prev(?:Until|All))/,
        rneedsContext = jQuery.expr.match.needsContext,
        guaranteedUnique = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };
    jQuery.fn.extend({
        find: function(selector) {
            var i, ret = [],
                self = this,
                len = self.length;
            if (typeof selector !== "string") {
                return this.pushStack(jQuery(selector).filter(function() {
                    for (i = 0; i < len; i++) {
                        if (jQuery.contains(self[i], this)) {
                            return true
                        }
                    }
                }))
            }
            for (i = 0; i < len; i++) {
                jQuery.find(selector, self[i], ret)
            }
            ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
            ret.selector = this.selector ? this.selector + " " + selector : selector;
            return ret
        },
        has: function(target) {
            var i, targets = jQuery(target, this),
                len = targets.length;
            return this.filter(function() {
                for (i = 0; i < len; i++) {
                    if (jQuery.contains(this, targets[i])) {
                        return true
                    }
                }
            })
        },
        not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true))
        },
        filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false))
        },
        is: function(selector) {
            return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length
        },
        closest: function(selectors, context) {
            var cur, i = 0,
                l = this.length,
                ret = [],
                pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
            for (; i < l; i++) {
                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                    if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                        cur = ret.push(cur);
                        break
                    }
                }
            }
            return this.pushStack(ret.length > 1 ? jQuery.unique(ret) : ret)
        },
        index: function(elem) {
            if (!elem) {
                return this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }
            if (typeof elem === "string") {
                return jQuery.inArray(this[0], jQuery(elem))
            }
            return jQuery.inArray(elem.jquery ? elem[0] : elem, this)
        },
        add: function(selector, context) {
            var set = typeof selector === "string" ? jQuery(selector, context) : jQuery.makeArray(selector && selector.nodeType ? [selector] : selector),
                all = jQuery.merge(this.get(), set);
            return this.pushStack(jQuery.unique(all))
        },
        addBack: function(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector))
        }
    });

    function sibling(cur, dir) {
        do {
            cur = cur[dir]
        } while (cur && cur.nodeType !== 1);
        return cur
    }
    jQuery.each({
        parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null
        },
        parents: function(elem) {
            return jQuery.dir(elem, "parentNode")
        },
        parentsUntil: function(elem, i, until) {
            return jQuery.dir(elem, "parentNode", until)
        },
        next: function(elem) {
            return sibling(elem, "nextSibling")
        },
        prev: function(elem) {
            return sibling(elem, "previousSibling")
        },
        nextAll: function(elem) {
            return jQuery.dir(elem, "nextSibling")
        },
        prevAll: function(elem) {
            return jQuery.dir(elem, "previousSibling")
        },
        nextUntil: function(elem, i, until) {
            return jQuery.dir(elem, "nextSibling", until)
        },
        prevUntil: function(elem, i, until) {
            return jQuery.dir(elem, "previousSibling", until)
        },
        siblings: function(elem) {
            return jQuery.sibling((elem.parentNode || {}).firstChild, elem)
        },
        children: function(elem) {
            return jQuery.sibling(elem.firstChild)
        },
        contents: function(elem) {
            return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes)
        }
    }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
            var ret = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
                selector = until
            }
            if (selector && typeof selector === "string") {
                ret = jQuery.filter(selector, ret)
            }
            if (this.length > 1) {
                if (!guaranteedUnique[name]) {
                    ret = jQuery.unique(ret)
                }
                if (rparentsprev.test(name)) {
                    ret = ret.reverse()
                }
            }
            return this.pushStack(ret)
        }
    });
    jQuery.extend({
        filter: function(expr, elems, not) {
            var elem = elems[0];
            if (not) {
                expr = ":not(" + expr + ")"
            }
            return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
                return elem.nodeType === 1
            }))
        },
        dir: function(elem, dir, until) {
            var matched = [],
                cur = elem[dir];
            while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
                if (cur.nodeType === 1) {
                    matched.push(cur)
                }
                cur = cur[dir]
            }
            return matched
        },
        sibling: function(n, elem) {
            var r = [];
            for (; n; n = n.nextSibling) {
                if (n.nodeType === 1 && n !== elem) {
                    r.push(n)
                }
            }
            return r
        }
    });

    function winnow(elements, qualifier, not) {
        if (jQuery.isFunction(qualifier)) {
            return jQuery.grep(elements, function(elem, i) {
                return !!qualifier.call(elem, i, elem) !== not
            })
        }
        if (qualifier.nodeType) {
            return jQuery.grep(elements, function(elem) {
                return elem === qualifier !== not
            })
        }
        if (typeof qualifier === "string") {
            if (isSimple.test(qualifier)) {
                return jQuery.filter(qualifier, elements, not)
            }
            qualifier = jQuery.filter(qualifier, elements)
        }
        return jQuery.grep(elements, function(elem) {
            return jQuery.inArray(elem, qualifier) >= 0 !== not
        })
    }

    function createSafeFragment(document) {
        var list = nodeNames.split("|"),
            safeFrag = document.createDocumentFragment();
        if (safeFrag.createElement) {
            while (list.length) {
                safeFrag.createElement(list.pop())
            }
        }
        return safeFrag
    }
    var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
        rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
        rleadingWhitespace = /^\s+/,
        rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        rtagName = /<([\w:]+)/,
        rtbody = /<tbody/i,
        rhtml = /<|&#?\w+;/,
        rnoInnerhtml = /<(?:script|style|link)/i,
        manipulation_rcheckableType = /^(?:checkbox|radio)$/i,
        rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rscriptType = /^$|\/(?:java|ecma)script/i,
        rscriptTypeMasked = /^true\/(.*)/,
        rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        wrapMap = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: jQuery.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        safeFragment = createSafeFragment(document),
        fragmentDiv = safeFragment.appendChild(document.createElement("div"));
    wrapMap.optgroup = wrapMap.option;
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    jQuery.fn.extend({
        text: function(value) {
            return jQuery.access(this, function(value) {
                return value === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value))
            }, null, value, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this)
                }
            })
        },
        after: function() {
            return this.domManip(arguments, function(elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this.nextSibling)
                }
            })
        },
        remove: function(selector, keepData) {
            var elem, elems = selector ? jQuery.filter(selector, this) : this,
                i = 0;
            for (;
                (elem = elems[i]) != null; i++) {
                if (!keepData && elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem))
                }
                if (elem.parentNode) {
                    if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
                        setGlobalEval(getAll(elem, "script"))
                    }
                    elem.parentNode.removeChild(elem)
                }
            }
            return this
        },
        empty: function() {
            var elem, i = 0;
            for (;
                (elem = this[i]) != null; i++) {
                if (elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem, false))
                }
                while (elem.firstChild) {
                    elem.removeChild(elem.firstChild)
                }
                if (elem.options && jQuery.nodeName(elem, "select")) {
                    elem.options.length = 0
                }
            }
            return this
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents)
            })
        },
        html: function(value) {
            return jQuery.access(this, function(value) {
                var elem = this[0] || {},
                    i = 0,
                    l = this.length;
                if (value === undefined) {
                    return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, "") : undefined
                }
                if (typeof value === "string" && !rnoInnerhtml.test(value) && (jQuery.support.htmlSerialize || !rnoshimcache.test(value)) && (jQuery.support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
                    value = value.replace(rxhtmlTag, "<$1></$2>");
                    try {
                        for (; i < l; i++) {
                            elem = this[i] || {};
                            if (elem.nodeType === 1) {
                                jQuery.cleanData(getAll(elem, false));
                                elem.innerHTML = value
                            }
                        }
                        elem = 0
                    } catch (e) {}
                }
                if (elem) {
                    this.empty().append(value)
                }
            }, null, value, arguments.length)
        },
        replaceWith: function() {
            var args = jQuery.map(this, function(elem) {
                    return [elem.nextSibling, elem.parentNode]
                }),
                i = 0;
            this.domManip(arguments, function(elem) {
                var next = args[i++],
                    parent = args[i++];
                if (parent) {
                    if (next && next.parentNode !== parent) {
                        next = this.nextSibling
                    }
                    jQuery(this).remove();
                    parent.insertBefore(elem, next)
                }
            }, true);
            return i ? this : this.remove()
        },
        detach: function(selector) {
            return this.remove(selector, true)
        },
        domManip: function(args, callback, allowIntersection) {
            args = core_concat.apply([], args);
            var first, node, hasScripts, scripts, doc, fragment, i = 0,
                l = this.length,
                set = this,
                iNoClone = l - 1,
                value = args[0],
                isFunction = jQuery.isFunction(value);
            if (isFunction || !(l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test(value))) {
                return this.each(function(index) {
                    var self = set.eq(index);
                    if (isFunction) {
                        args[0] = value.call(this, index, self.html())
                    }
                    self.domManip(args, callback, allowIntersection)
                })
            }
            if (l) {
                fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, !allowIntersection && this);
                first = fragment.firstChild;
                if (fragment.childNodes.length === 1) {
                    fragment = first
                }
                if (first) {
                    scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                    hasScripts = scripts.length;
                    for (; i < l; i++) {
                        node = fragment;
                        if (i !== iNoClone) {
                            node = jQuery.clone(node, true, true);
                            if (hasScripts) {
                                jQuery.merge(scripts, getAll(node, "script"))
                            }
                        }
                        callback.call(this[i], node, i)
                    }
                    if (hasScripts) {
                        doc = scripts[scripts.length - 1].ownerDocument;
                        jQuery.map(scripts, restoreScript);
                        for (i = 0; i < hasScripts; i++) {
                            node = scripts[i];
                            if (rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node)) {
                                if (node.src) {
                                    jQuery._evalUrl(node.src)
                                } else {
                                    jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, ""))
                                }
                            }
                        }
                    }
                    fragment = first = null
                }
            }
            return this
        }
    });

    function manipulationTarget(elem, content) {
        return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType === 1 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem
    }

    function disableScript(elem) {
        elem.type = (jQuery.find.attr(elem, "type") !== null) + "/" + elem.type;
        return elem
    }

    function restoreScript(elem) {
        var match = rscriptTypeMasked.exec(elem.type);
        if (match) {
            elem.type = match[1]
        } else {
            elem.removeAttribute("type")
        }
        return elem
    }

    function setGlobalEval(elems, refElements) {
        var elem, i = 0;
        for (;
            (elem = elems[i]) != null; i++) {
            jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"))
        }
    }

    function cloneCopyEvent(src, dest) {
        if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
            return
        }
        var type, i, l, oldData = jQuery._data(src),
            curData = jQuery._data(dest, oldData),
            events = oldData.events;
        if (events) {
            delete curData.handle;
            curData.events = {};
            for (type in events) {
                for (i = 0, l = events[type].length; i < l; i++) {
                    jQuery.event.add(dest, type, events[type][i])
                }
            }
        }
        if (curData.data) {
            curData.data = jQuery.extend({}, curData.data)
        }
    }

    function fixCloneNodeIssues(src, dest) {
        var nodeName, e, data;
        if (dest.nodeType !== 1) {
            return
        }
        nodeName = dest.nodeName.toLowerCase();
        if (!jQuery.support.noCloneEvent && dest[jQuery.expando]) {
            data = jQuery._data(dest);
            for (e in data.events) {
                jQuery.removeEvent(dest, e, data.handle)
            }
            dest.removeAttribute(jQuery.expando)
        }
        if (nodeName === "script" && dest.text !== src.text) {
            disableScript(dest).text = src.text;
            restoreScript(dest)
        } else if (nodeName === "object") {
            if (dest.parentNode) {
                dest.outerHTML = src.outerHTML
            }
            if (jQuery.support.html5Clone && (src.innerHTML && !jQuery.trim(dest.innerHTML))) {
                dest.innerHTML = src.innerHTML
            }
        } else if (nodeName === "input" && manipulation_rcheckableType.test(src.type)) {
            dest.defaultChecked = dest.checked = src.checked;
            if (dest.value !== src.value) {
                dest.value = src.value
            }
        } else if (nodeName === "option") {
            dest.defaultSelected = dest.selected = src.defaultSelected
        } else if (nodeName === "input" || nodeName === "textarea") {
            dest.defaultValue = src.defaultValue
        }
    }
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(name, original) {
        jQuery.fn[name] = function(selector) {
            var elems, i = 0,
                ret = [],
                insert = jQuery(selector),
                last = insert.length - 1;
            for (; i <= last; i++) {
                elems = i === last ? this : this.clone(true);
                jQuery(insert[i])[original](elems);
                core_push.apply(ret, elems.get())
            }
            return this.pushStack(ret)
        }
    });

    function getAll(context, tag) {
        var elems, elem, i = 0,
            found = typeof context.getElementsByTagName !== core_strundefined ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== core_strundefined ? context.querySelectorAll(tag || "*") : undefined;
        if (!found) {
            for (found = [], elems = context.childNodes || context;
                (elem = elems[i]) != null; i++) {
                if (!tag || jQuery.nodeName(elem, tag)) {
                    found.push(elem)
                } else {
                    jQuery.merge(found, getAll(elem, tag))
                }
            }
        }
        return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], found) : found
    }

    function fixDefaultChecked(elem) {
        if (manipulation_rcheckableType.test(elem.type)) {
            elem.defaultChecked = elem.checked
        }
    }
    jQuery.extend({
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var destElements, node, clone, i, srcElements, inPage = jQuery.contains(elem.ownerDocument, elem);
            if (jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
                clone = elem.cloneNode(true)
            } else {
                fragmentDiv.innerHTML = elem.outerHTML;
                fragmentDiv.removeChild(clone = fragmentDiv.firstChild)
            }
            if ((!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                destElements = getAll(clone);
                srcElements = getAll(elem);
                for (i = 0;
                    (node = srcElements[i]) != null; ++i) {
                    if (destElements[i]) {
                        fixCloneNodeIssues(node, destElements[i])
                    }
                }
            }
            if (dataAndEvents) {
                if (deepDataAndEvents) {
                    srcElements = srcElements || getAll(elem);
                    destElements = destElements || getAll(clone);
                    for (i = 0;
                        (node = srcElements[i]) != null; i++) {
                        cloneCopyEvent(node, destElements[i])
                    }
                } else {
                    cloneCopyEvent(elem, clone)
                }
            }
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
                setGlobalEval(destElements, !inPage && getAll(elem, "script"))
            }
            destElements = srcElements = node = null;
            return clone
        },
        buildFragment: function(elems, context, scripts, selection) {
            var j, elem, contains, tmp, tag, tbody, wrap, l = elems.length,
                safe = createSafeFragment(context),
                nodes = [],
                i = 0;
            for (; i < l; i++) {
                elem = elems[i];
                if (elem || elem === 0) {
                    if (jQuery.type(elem) === "object") {
                        jQuery.merge(nodes, elem.nodeType ? [elem] : elem)
                    } else if (!rhtml.test(elem)) {
                        nodes.push(context.createTextNode(elem))
                    } else {
                        tmp = tmp || safe.appendChild(context.createElement("div"));
                        tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                        wrap = wrapMap[tag] || wrapMap._default;
                        tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];
                        j = wrap[0];
                        while (j--) {
                            tmp = tmp.lastChild
                        }
                        if (!jQuery.support.leadingWhitespace && rleadingWhitespace.test(elem)) {
                            nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]))
                        }
                        if (!jQuery.support.tbody) {
                            elem = tag === "table" && !rtbody.test(elem) ? tmp.firstChild : wrap[1] === "<table>" && !rtbody.test(elem) ? tmp : 0;
                            j = elem && elem.childNodes.length;
                            while (j--) {
                                if (jQuery.nodeName(tbody = elem.childNodes[j], "tbody") && !tbody.childNodes.length) {
                                    elem.removeChild(tbody)
                                }
                            }
                        }
                        jQuery.merge(nodes, tmp.childNodes);
                        tmp.textContent = "";
                        while (tmp.firstChild) {
                            tmp.removeChild(tmp.firstChild)
                        }
                        tmp = safe.lastChild
                    }
                }
            }
            if (tmp) {
                safe.removeChild(tmp)
            }
            if (!jQuery.support.appendChecked) {
                jQuery.grep(getAll(nodes, "input"), fixDefaultChecked)
            }
            i = 0;
            while (elem = nodes[i++]) {
                if (selection && jQuery.inArray(elem, selection) !== -1) {
                    continue
                }
                contains = jQuery.contains(elem.ownerDocument, elem);
                tmp = getAll(safe.appendChild(elem), "script");
                if (contains) {
                    setGlobalEval(tmp)
                }
                if (scripts) {
                    j = 0;
                    while (elem = tmp[j++]) {
                        if (rscriptType.test(elem.type || "")) {
                            scripts.push(elem)
                        }
                    }
                }
            }
            tmp = null;
            return safe
        },
        cleanData: function(elems, acceptData) {
            var elem, type, id, data, i = 0,
                internalKey = jQuery.expando,
                cache = jQuery.cache,
                deleteExpando = jQuery.support.deleteExpando,
                special = jQuery.event.special;
            for (;
                (elem = elems[i]) != null; i++) {
                if (acceptData || jQuery.acceptData(elem)) {
                    id = elem[internalKey];
                    data = id && cache[id];
                    if (data) {
                        if (data.events) {
                            for (type in data.events) {
                                if (special[type]) {
                                    jQuery.event.remove(elem, type)
                                } else {
                                    jQuery.removeEvent(elem, type, data.handle)
                                }
                            }
                        }
                        if (cache[id]) {
                            delete cache[id];
                            if (deleteExpando) {
                                delete elem[internalKey]
                            } else if (typeof elem.removeAttribute !== core_strundefined) {
                                elem.removeAttribute(internalKey)
                            } else {
                                elem[internalKey] = null
                            }
                            core_deletedIds.push(id)
                        }
                    }
                }
            }
        },
        _evalUrl: function(url) {
            return jQuery.ajax({
                url: url,
                type: "GET",
                dataType: "script",
                async: false,
                global: false,
                "throws": true
            })
        }
    });
    jQuery.fn.extend({
        wrapAll: function(html) {
            if (jQuery.isFunction(html)) {
                return this.each(function(i) {
                    jQuery(this).wrapAll(html.call(this, i))
                })
            }
            if (this[0]) {
                var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    wrap.insertBefore(this[0])
                }
                wrap.map(function() {
                    var elem = this;
                    while (elem.firstChild && elem.firstChild.nodeType === 1) {
                        elem = elem.firstChild
                    }
                    return elem
                }).append(this)
            }
            return this
        },
        wrapInner: function(html) {
            if (jQuery.isFunction(html)) {
                return this.each(function(i) {
                    jQuery(this).wrapInner(html.call(this, i))
                })
            }
            return this.each(function() {
                var self = jQuery(this),
                    contents = self.contents();
                if (contents.length) {
                    contents.wrapAll(html)
                } else {
                    self.append(html)
                }
            })
        },
        wrap: function(html) {
            var isFunction = jQuery.isFunction(html);
            return this.each(function(i) {
                jQuery(this).wrapAll(isFunction ? html.call(this, i) : html)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!jQuery.nodeName(this, "body")) {
                    jQuery(this).replaceWith(this.childNodes)
                }
            }).end()
        }
    });
    var iframe, getStyles, curCSS, ralpha = /alpha\([^)]*\)/i,
        ropacity = /opacity\s*=\s*([^)]*)/,
        rposition = /^(top|right|bottom|left)$/,
        rdisplayswap = /^(none|table(?!-c[ea]).+)/,
        rmargin = /^margin/,
        rnumsplit = new RegExp("^(" + core_pnum + ")(.*)$", "i"),
        rnumnonpx = new RegExp("^(" + core_pnum + ")(?!px)[a-z%]+$", "i"),
        rrelNum = new RegExp("^([+-])=(" + core_pnum + ")", "i"),
        elemdisplay = {
            BODY: "block"
        },
        cssShow = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        cssNormalTransform = {
            letterSpacing: 0,
            fontWeight: 400
        },
        cssExpand = ["Top", "Right", "Bottom", "Left"],
        cssPrefixes = ["Webkit", "O", "Moz", "ms"];

    function vendorPropName(style, name) {
        if (name in style) {
            return name
        }
        var capName = name.charAt(0).toUpperCase() + name.slice(1),
            origName = name,
            i = cssPrefixes.length;
        while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in style) {
                return name
            }
        }
        return origName
    }

    function isHidden(elem, el) {
        elem = el || elem;
        return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem)
    }

    function showHide(elements, show) {
        var display, elem, hidden, values = [],
            index = 0,
            length = elements.length;
        for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue
            }
            values[index] = jQuery._data(elem, "olddisplay");
            display = elem.style.display;
            if (show) {
                if (!values[index] && display === "none") {
                    elem.style.display = ""
                }
                if (elem.style.display === "" && isHidden(elem)) {
                    values[index] = jQuery._data(elem, "olddisplay", css_defaultDisplay(elem.nodeName))
                }
            } else {
                if (!values[index]) {
                    hidden = isHidden(elem);
                    if (display && display !== "none" || !hidden) {
                        jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"))
                    }
                }
            }
        }
        for (index = 0; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue
            }
            if (!show || elem.style.display === "none" || elem.style.display === "") {
                elem.style.display = show ? values[index] || "" : "none"
            }
        }
        return elements
    }
    jQuery.fn.extend({
        css: function(name, value) {
            return jQuery.access(this, function(elem, name, value) {
                var len, styles, map = {},
                    i = 0;
                if (jQuery.isArray(name)) {
                    styles = getStyles(elem);
                    len = name.length;
                    for (; i < len; i++) {
                        map[name[i]] = jQuery.css(elem, name[i], false, styles)
                    }
                    return map
                }
                return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name)
            }, name, value, arguments.length > 1)
        },
        show: function() {
            return showHide(this, true)
        },
        hide: function() {
            return showHide(this)
        },
        toggle: function(state) {
            if (typeof state === "boolean") {
                return state ? this.show() : this.hide()
            }
            return this.each(function() {
                if (isHidden(this)) {
                    jQuery(this).show()
                } else {
                    jQuery(this).hide()
                }
            })
        }
    });
    jQuery.extend({
        cssHooks: {
            opacity: {
                get: function(elem, computed) {
                    if (computed) {
                        var ret = curCSS(elem, "opacity");
                        return ret === "" ? "1" : ret
                    }
                }
            }
        },
        cssNumber: {
            columnCount: true,
            fillOpacity: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
            "float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                return
            }
            var ret, type, hooks, origName = jQuery.camelCase(name),
                style = elem.style;
            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (value !== undefined) {
                type = typeof value;
                if (type === "string" && (ret = rrelNum.exec(value))) {
                    value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
                    type = "number"
                }
                if (value == null || type === "number" && isNaN(value)) {
                    return
                }
                if (type === "number" && !jQuery.cssNumber[origName]) {
                    value += "px"
                }
                if (!jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                    style[name] = "inherit"
                }
                if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                    try {
                        style[name] = value
                    } catch (e) {}
                }
            } else {
                if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
                    return ret
                }
                return style[name]
            }
        },
        css: function(elem, name, extra, styles) {
            var num, val, hooks, origName = jQuery.camelCase(name);
            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (hooks && "get" in hooks) {
                val = hooks.get(elem, true, extra)
            }
            if (val === undefined) {
                val = curCSS(elem, name, styles)
            }
            if (val === "normal" && name in cssNormalTransform) {
                val = cssNormalTransform[name]
            }
            if (extra === "" || extra) {
                num = parseFloat(val);
                return extra === true || jQuery.isNumeric(num) ? num || 0 : val
            }
            return val
        }
    });
    if (window.getComputedStyle) {
        getStyles = function(elem) {
            return window.getComputedStyle(elem, null)
        };
        curCSS = function(elem, name, _computed) {
            var width, minWidth, maxWidth, computed = _computed || getStyles(elem),
                ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined,
                style = elem.style;
            if (computed) {
                if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
                    ret = jQuery.style(elem, name)
                }
                if (rnumnonpx.test(ret) && rmargin.test(name)) {
                    width = style.width;
                    minWidth = style.minWidth;
                    maxWidth = style.maxWidth;
                    style.minWidth = style.maxWidth = style.width = ret;
                    ret = computed.width;
                    style.width = width;
                    style.minWidth = minWidth;
                    style.maxWidth = maxWidth
                }
            }
            return ret
        }
    } else if (document.documentElement.currentStyle) {
        getStyles = function(elem) {
            return elem.currentStyle
        };
        curCSS = function(elem, name, _computed) {
            var left, rs, rsLeft, computed = _computed || getStyles(elem),
                ret = computed ? computed[name] : undefined,
                style = elem.style;
            if (ret == null && style && style[name]) {
                ret = style[name]
            }
            if (rnumnonpx.test(ret) && !rposition.test(name)) {
                left = style.left;
                rs = elem.runtimeStyle;
                rsLeft = rs && rs.left;
                if (rsLeft) {
                    rs.left = elem.currentStyle.left
                }
                style.left = name === "fontSize" ? "1em" : ret;
                ret = style.pixelLeft + "px";
                style.left = left;
                if (rsLeft) {
                    rs.left = rsLeft
                }
            }
            return ret === "" ? "auto" : ret
        }
    }

    function setPositiveNumber(elem, value, subtract) {
        var matches = rnumsplit.exec(value);
        return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value
    }

    function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
        var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0,
            val = 0;
        for (; i < 4; i += 2) {
            if (extra === "margin") {
                val += jQuery.css(elem, extra + cssExpand[i], true, styles)
            }
            if (isBorderBox) {
                if (extra === "content") {
                    val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles)
                }
                if (extra !== "margin") {
                    val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles)
                }
            } else {
                val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                if (extra !== "padding") {
                    val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles)
                }
            }
        }
        return val
    }

    function getWidthOrHeight(elem, name, extra) {
        var valueIsBorderBox = true,
            val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
            styles = getStyles(elem),
            isBorderBox = jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box";
        if (val <= 0 || val == null) {
            val = curCSS(elem, name, styles);
            if (val < 0 || val == null) {
                val = elem.style[name]
            }
            if (rnumnonpx.test(val)) {
                return val
            }
            valueIsBorderBox = isBorderBox && (jQuery.support.boxSizingReliable || val === elem.style[name]);
            val = parseFloat(val) || 0
        }
        return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px"
    }

    function css_defaultDisplay(nodeName) {
        var doc = document,
            display = elemdisplay[nodeName];
        if (!display) {
            display = actualDisplay(nodeName, doc);
            if (display === "none" || !display) {
                iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(doc.documentElement);
                doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;
                doc.write("<!doctype html><html><body>");
                doc.close();
                display = actualDisplay(nodeName, doc);
                iframe.detach()
            }
            elemdisplay[nodeName] = display
        }
        return display
    }

    function actualDisplay(name, doc) {
        var elem = jQuery(doc.createElement(name)).appendTo(doc.body),
            display = jQuery.css(elem[0], "display");
        elem.remove();
        return display
    }
    jQuery.each(["height", "width"], function(i, name) {
        jQuery.cssHooks[name] = {
            get: function(elem, computed, extra) {
                if (computed) {
                    return elem.offsetWidth === 0 && rdisplayswap.test(jQuery.css(elem, "display")) ? jQuery.swap(elem, cssShow, function() {
                        return getWidthOrHeight(elem, name, extra)
                    }) : getWidthOrHeight(elem, name, extra)
                }
            },
            set: function(elem, value, extra) {
                var styles = extra && getStyles(elem);
                return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0)
            }
        }
    });
    if (!jQuery.support.opacity) {
        jQuery.cssHooks.opacity = {
            get: function(elem, computed) {
                return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : computed ? "1" : ""
            },
            set: function(elem, value) {
                var style = elem.style,
                    currentStyle = elem.currentStyle,
                    opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "",
                    filter = currentStyle && currentStyle.filter || style.filter || "";
                style.zoom = 1;
                if ((value >= 1 || value === "") && jQuery.trim(filter.replace(ralpha, "")) === "" && style.removeAttribute) {
                    style.removeAttribute("filter");
                    if (value === "" || currentStyle && !currentStyle.filter) {
                        return
                    }
                }
                style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity
            }
        }
    }
    jQuery(function() {
        if (!jQuery.support.reliableMarginRight) {
            jQuery.cssHooks.marginRight = {
                get: function(elem, computed) {
                    if (computed) {
                        return jQuery.swap(elem, {
                            display: "inline-block"
                        }, curCSS, [elem, "marginRight"])
                    }
                }
            }
        }
        if (!jQuery.support.pixelPosition && jQuery.fn.position) {
            jQuery.each(["top", "left"], function(i, prop) {
                jQuery.cssHooks[prop] = {
                    get: function(elem, computed) {
                        if (computed) {
                            computed = curCSS(elem, prop);
                            return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed
                        }
                    }
                }
            })
        }
    });
    if (jQuery.expr && jQuery.expr.filters) {
        jQuery.expr.filters.hidden = function(elem) {
            return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 || !jQuery.support.reliableHiddenOffsets && (elem.style && elem.style.display || jQuery.css(elem, "display")) === "none"
        };
        jQuery.expr.filters.visible = function(elem) {
            return !jQuery.expr.filters.hidden(elem)
        }
    }
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
                var i = 0,
                    expanded = {},
                    parts = typeof value === "string" ? value.split(" ") : [value];
                for (; i < 4; i++) {
                    expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0]
                }
                return expanded
            }
        };
        if (!rmargin.test(prefix)) {
            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber
        }
    });
    var r20 = /%20/g,
        rbracket = /\[\]$/,
        rCRLF = /\r?\n/g,
        rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
        rsubmittable = /^(?:input|select|textarea|keygen)/i;
    jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this
            }).filter(function() {
                var type = this.type;
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type))
            }).map(function(i, elem) {
                var val = jQuery(this).val();
                return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    }
                }) : {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                }
            }).get()
        }
    });
    jQuery.param = function(a, traditional) {
        var prefix, s = [],
            add = function(key, value) {
                value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
                s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value)
            };
        if (traditional === undefined) {
            traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional
        }
        if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
            jQuery.each(a, function() {
                add(this.name, this.value)
            })
        } else {
            for (prefix in a) {
                buildParams(prefix, a[prefix], traditional, add)
            }
        }
        return s.join("&").replace(r20, "+")
    };

    function buildParams(prefix, obj, traditional, add) {
        var name;
        if (jQuery.isArray(obj)) {
            jQuery.each(obj, function(i, v) {
                if (traditional || rbracket.test(prefix)) {
                    add(prefix, v)
                } else {
                    buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add)
                }
            })
        } else if (!traditional && jQuery.type(obj) === "object") {
            for (name in obj) {
                buildParams(prefix + "[" + name + "]", obj[name], traditional, add)
            }
        } else {
            add(prefix, obj)
        }
    }
    jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(i, name) {
        jQuery.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name)
        }
    });
    jQuery.fn.extend({
        hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver)
        },
        bind: function(types, data, fn) {
            return this.on(types, null, data, fn)
        },
        unbind: function(types, fn) {
            return this.off(types, null, fn)
        },
        delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn)
        },
        undelegate: function(selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn)
        }
    });
    var ajaxLocParts, ajaxLocation, ajax_nonce = jQuery.now(),
        ajax_rquery = /\?/,
        rhash = /#.*$/,
        rts = /([?&])_=[^&]*/,
        rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        rnoContent = /^(?:GET|HEAD)$/,
        rprotocol = /^\/\//,
        rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        _load = jQuery.fn.load,
        prefilters = {},
        transports = {},
        allTypes = "*/".concat("*");
    try {
        ajaxLocation = location.href
    } catch (e) {
        ajaxLocation = document.createElement("a");
        ajaxLocation.href = "";
        ajaxLocation = ajaxLocation.href
    }
    ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];

    function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*"
            }
            var dataType, i = 0,
                dataTypes = dataTypeExpression.toLowerCase().match(core_rnotwhite) || [];
            if (jQuery.isFunction(func)) {
                while (dataType = dataTypes[i++]) {
                    if (dataType[0] === "+") {
                        dataType = dataType.slice(1) || "*";
                        (structure[dataType] = structure[dataType] || []).unshift(func)
                    } else {
                        (structure[dataType] = structure[dataType] || []).push(func)
                    }
                }
            }
        }
    }

    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {},
            seekingTransport = structure === transports;

        function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                    options.dataTypes.unshift(dataTypeOrTransport);
                    inspect(dataTypeOrTransport);
                    return false
                } else if (seekingTransport) {
                    return !(selected = dataTypeOrTransport)
                }
            });
            return selected
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*")
    }

    function ajaxExtend(target, src) {
        var deep, key, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in src) {
            if (src[key] !== undefined) {
                (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key]
            }
        }
        if (deep) {
            jQuery.extend(true, target, deep)
        }
        return target
    }
    jQuery.fn.load = function(url, params, callback) {
        if (typeof url !== "string" && _load) {
            return _load.apply(this, arguments)
        }
        var selector, response, type, self = this,
            off = url.indexOf(" ");
        if (off >= 0) {
            selector = url.slice(off, url.length);
            url = url.slice(0, off)
        }
        if (jQuery.isFunction(params)) {
            callback = params;
            params = undefined
        } else if (params && typeof params === "object") {
            type = "POST"
        }
        if (self.length > 0) {
            jQuery.ajax({
                url: url,
                type: type,
                dataType: "html",
                data: params
            }).done(function(responseText) {
                response = arguments;
                self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText)
            }).complete(callback && function(jqXHR, status) {
                self.each(callback, response || [jqXHR.responseText, status, jqXHR])
            })
        }
        return this
    };
    jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) {
        jQuery.fn[type] = function(fn) {
            return this.on(type, fn)
        }
    });
    jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ajaxLocation,
            type: "GET",
            isLocal: rlocalProtocol.test(ajaxLocParts[1]),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": true,
                "text json": jQuery.parseJSON,
                "text xml": jQuery.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function(target, settings) {
            return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target)
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        ajax: function(url, options) {
            if (typeof url === "object") {
                options = url;
                url = undefined
            }
            options = options || {};
            var parts, i, cacheURL, responseHeadersString, timeoutTimer, fireGlobals, transport, responseHeaders, s = jQuery.ajaxSetup({}, options),
                callbackContext = s.context || s,
                globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
                deferred = jQuery.Deferred(),
                completeDeferred = jQuery.Callbacks("once memory"),
                statusCode = s.statusCode || {},
                requestHeaders = {},
                requestHeadersNames = {},
                state = 0,
                strAbort = "canceled",
                jqXHR = {
                    readyState: 0,
                    getResponseHeader: function(key) {
                        var match;
                        if (state === 2) {
                            if (!responseHeaders) {
                                responseHeaders = {};
                                while (match = rheaders.exec(responseHeadersString)) {
                                    responseHeaders[match[1].toLowerCase()] = match[2]
                                }
                            }
                            match = responseHeaders[key.toLowerCase()]
                        }
                        return match == null ? null : match
                    },
                    getAllResponseHeaders: function() {
                        return state === 2 ? responseHeadersString : null
                    },
                    setRequestHeader: function(name, value) {
                        var lname = name.toLowerCase();
                        if (!state) {
                            name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                            requestHeaders[name] = value
                        }
                        return this
                    },
                    overrideMimeType: function(type) {
                        if (!state) {
                            s.mimeType = type
                        }
                        return this
                    },
                    statusCode: function(map) {
                        var code;
                        if (map) {
                            if (state < 2) {
                                for (code in map) {
                                    statusCode[code] = [statusCode[code], map[code]]
                                }
                            } else {
                                jqXHR.always(map[jqXHR.status])
                            }
                        }
                        return this
                    },
                    abort: function(statusText) {
                        var finalText = statusText || strAbort;
                        if (transport) {
                            transport.abort(finalText)
                        }
                        done(0, finalText);
                        return this
                    }
                };
            deferred.promise(jqXHR).complete = completeDeferred.add;
            jqXHR.success = jqXHR.done;
            jqXHR.error = jqXHR.fail;
            s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
            s.type = options.method || options.type || s.method || s.type;
            s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(core_rnotwhite) || [""];
            if (s.crossDomain == null) {
                parts = rurl.exec(s.url.toLowerCase());
                s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))))
            }
            if (s.data && s.processData && typeof s.data !== "string") {
                s.data = jQuery.param(s.data, s.traditional)
            }
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            if (state === 2) {
                return jqXHR
            }
            fireGlobals = s.global;
            if (fireGlobals && jQuery.active++ === 0) {
                jQuery.event.trigger("ajaxStart")
            }
            s.type = s.type.toUpperCase();
            s.hasContent = !rnoContent.test(s.type);
            cacheURL = s.url;
            if (!s.hasContent) {
                if (s.data) {
                    cacheURL = s.url += (ajax_rquery.test(cacheURL) ? "&" : "?") + s.data;
                    delete s.data
                }
                if (s.cache === false) {
                    s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + ajax_nonce++) : cacheURL + (ajax_rquery.test(cacheURL) ? "&" : "?") + "_=" + ajax_nonce++
                }
            }
            if (s.ifModified) {
                if (jQuery.lastModified[cacheURL]) {
                    jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL])
                }
                if (jQuery.etag[cacheURL]) {
                    jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])
                }
            }
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                jqXHR.setRequestHeader("Content-Type", s.contentType)
            }
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
            for (i in s.headers) {
                jqXHR.setRequestHeader(i, s.headers[i])
            }
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
                return jqXHR.abort()
            }
            strAbort = "abort";
            for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) {
                jqXHR[i](s[i])
            }
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            if (!transport) {
                done(-1, "No Transport")
            } else {
                jqXHR.readyState = 1;
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxSend", [jqXHR, s])
                }
                if (s.async && s.timeout > 0) {
                    timeoutTimer = setTimeout(function() {
                        jqXHR.abort("timeout")
                    }, s.timeout)
                }
                try {
                    state = 1;
                    transport.send(requestHeaders, done)
                } catch (e) {
                    if (state < 2) {
                        done(-1, e)
                    } else {
                        throw e
                    }
                }
            }

            function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                if (state === 2) {
                    return
                }
                state = 2;
                if (timeoutTimer) {
                    clearTimeout(timeoutTimer)
                }
                transport = undefined;
                responseHeadersString = headers || "";
                jqXHR.readyState = status > 0 ? 4 : 0;
                isSuccess = status >= 200 && status < 300 || status === 304;
                if (responses) {
                    response = ajaxHandleResponses(s, jqXHR, responses)
                }
                response = ajaxConvert(s, response, jqXHR, isSuccess);
                if (isSuccess) {
                    if (s.ifModified) {
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if (modified) {
                            jQuery.lastModified[cacheURL] = modified
                        }
                        modified = jqXHR.getResponseHeader("etag");
                        if (modified) {
                            jQuery.etag[cacheURL] = modified
                        }
                    }
                    if (status === 204 || s.type === "HEAD") {
                        statusText = "nocontent"
                    } else if (status === 304) {
                        statusText = "notmodified"
                    } else {
                        statusText = response.state;
                        success = response.data;
                        error = response.error;
                        isSuccess = !error
                    }
                } else {
                    error = statusText;
                    if (status || !statusText) {
                        statusText = "error";
                        if (status < 0) {
                            status = 0
                        }
                    }
                }
                jqXHR.status = status;
                jqXHR.statusText = (nativeStatusText || statusText) + "";
                if (isSuccess) {
                    deferred.resolveWith(callbackContext, [success, statusText, jqXHR])
                } else {
                    deferred.rejectWith(callbackContext, [jqXHR, statusText, error])
                }
                jqXHR.statusCode(statusCode);
                statusCode = undefined;
                if (fireGlobals) {
                    globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error])
                }
                completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                    if (!--jQuery.active) {
                        jQuery.event.trigger("ajaxStop")
                    }
                }
            }
            return jqXHR
        },
        getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json")
        },
        getScript: function(url, callback) {
            return jQuery.get(url, undefined, callback, "script")
        }
    });
    jQuery.each(["get", "post"], function(i, method) {
        jQuery[method] = function(url, data, callback, type) {
            if (jQuery.isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined
            }
            return jQuery.ajax({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            })
        }
    });

    function ajaxHandleResponses(s, jqXHR, responses) {
        var firstDataType, ct, finalDataType, type, contents = s.contents,
            dataTypes = s.dataTypes;
        while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === undefined) {
                ct = s.mimeType || jqXHR.getResponseHeader("Content-Type")
            }
        }
        if (ct) {
            for (type in contents) {
                if (contents[type] && contents[type].test(ct)) {
                    dataTypes.unshift(type);
                    break
                }
            }
        }
        if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0]
        } else {
            for (type in responses) {
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    break
                }
                if (!firstDataType) {
                    firstDataType = type
                }
            }
            finalDataType = finalDataType || firstDataType
        }
        if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
                dataTypes.unshift(finalDataType)
            }
            return responses[finalDataType]
        }
    }

    function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {},
            dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) {
            for (conv in s.converters) {
                converters[conv.toLowerCase()] = s.converters[conv]
            }
        }
        current = dataTypes.shift();
        while (current) {
            if (s.responseFields[current]) {
                jqXHR[s.responseFields[current]] = response
            }
            if (!prev && isSuccess && s.dataFilter) {
                response = s.dataFilter(response, s.dataType)
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
                if (current === "*") {
                    current = prev
                } else if (prev !== "*" && prev !== current) {
                    conv = converters[prev + " " + current] || converters["* " + current];
                    if (!conv) {
                        for (conv2 in converters) {
                            tmp = conv2.split(" ");
                            if (tmp[1] === current) {
                                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                if (conv) {
                                    if (conv === true) {
                                        conv = converters[conv2]
                                    } else if (converters[conv2] !== true) {
                                        current = tmp[0];
                                        dataTypes.unshift(tmp[1])
                                    }
                                    break
                                }
                            }
                        }
                    }
                    if (conv !== true) {
                        if (conv && s["throws"]) {
                            response = conv(response)
                        } else {
                            try {
                                response = conv(response)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: conv ? e : "No conversion from " + prev + " to " + current
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: response
        }
    }
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(text) {
                jQuery.globalEval(text);
                return text
            }
        }
    });
    jQuery.ajaxPrefilter("script", function(s) {
        if (s.cache === undefined) {
            s.cache = false
        }
        if (s.crossDomain) {
            s.type = "GET";
            s.global = false
        }
    });
    jQuery.ajaxTransport("script", function(s) {
        if (s.crossDomain) {
            var script, head = document.head || jQuery("head")[0] || document.documentElement;
            return {
                send: function(_, callback) {
                    script = document.createElement("script");
                    script.async = true;
                    if (s.scriptCharset) {
                        script.charset = s.scriptCharset
                    }
                    script.src = s.url;
                    script.onload = script.onreadystatechange = function(_, isAbort) {
                        if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
                            script.onload = script.onreadystatechange = null;
                            if (script.parentNode) {
                                script.parentNode.removeChild(script)
                            }
                            script = null;
                            if (!isAbort) {
                                callback(200, "success")
                            }
                        }
                    };
                    head.insertBefore(script, head.firstChild)
                },
                abort: function() {
                    if (script) {
                        script.onload(undefined, true)
                    }
                }
            }
        }
    });
    var oldCallbacks = [],
        rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + ajax_nonce++;
            this[callback] = true;
            return callback
        }
    });
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
        if (jsonProp || s.dataTypes[0] === "jsonp") {
            callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            if (jsonProp) {
                s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName)
            } else if (s.jsonp !== false) {
                s.url += (ajax_rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName
            }
            s.converters["script json"] = function() {
                if (!responseContainer) {
                    jQuery.error(callbackName + " was not called")
                }
                return responseContainer[0]
            };
            s.dataTypes[0] = "json";
            overwritten = window[callbackName];
            window[callbackName] = function() {
                responseContainer = arguments
            };
            jqXHR.always(function() {
                window[callbackName] = overwritten;
                if (s[callbackName]) {
                    s.jsonpCallback = originalSettings.jsonpCallback;
                    oldCallbacks.push(callbackName)
                }
                if (responseContainer && jQuery.isFunction(overwritten)) {
                    overwritten(responseContainer[0])
                }
                responseContainer = overwritten = undefined
            });
            return "script"
        }
    });
    var xhrCallbacks, xhrSupported, xhrId = 0,
        xhrOnUnloadAbort = window.ActiveXObject && function() {
            var key;
            for (key in xhrCallbacks) {
                xhrCallbacks[key](undefined, true)
            }
        };

    function createStandardXHR() {
        try {
            return new window.XMLHttpRequest
        } catch (e) {}
    }

    function createActiveXHR() {
        try {
            return new window.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }
    jQuery.ajaxSettings.xhr = window.ActiveXObject ? function() {
        return !this.isLocal && createStandardXHR() || createActiveXHR()
    } : createStandardXHR;
    xhrSupported = jQuery.ajaxSettings.xhr();
    jQuery.support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    xhrSupported = jQuery.support.ajax = !!xhrSupported;
    if (xhrSupported) {
        jQuery.ajaxTransport(function(s) {
            if (!s.crossDomain || jQuery.support.cors) {
                var callback;
                return {
                    send: function(headers, complete) {
                        var handle, i, xhr = s.xhr();
                        if (s.username) {
                            xhr.open(s.type, s.url, s.async, s.username, s.password)
                        } else {
                            xhr.open(s.type, s.url, s.async)
                        }
                        if (s.xhrFields) {
                            for (i in s.xhrFields) {
                                xhr[i] = s.xhrFields[i]
                            }
                        }
                        if (s.mimeType && xhr.overrideMimeType) {
                            xhr.overrideMimeType(s.mimeType)
                        }
                        if (!s.crossDomain && !headers["X-Requested-With"]) {
                            headers["X-Requested-With"] = "XMLHttpRequest"
                        }
                        try {
                            for (i in headers) {
                                xhr.setRequestHeader(i, headers[i])
                            }
                        } catch (err) {}
                        xhr.send(s.hasContent && s.data || null);
                        callback = function(_, isAbort) {
                            var status, responseHeaders, statusText, responses;
                            try {
                                if (callback && (isAbort || xhr.readyState === 4)) {
                                    callback = undefined;
                                    if (handle) {
                                        xhr.onreadystatechange = jQuery.noop;
                                        if (xhrOnUnloadAbort) {
                                            delete xhrCallbacks[handle]
                                        }
                                    }
                                    if (isAbort) {
                                        if (xhr.readyState !== 4) {
                                            xhr.abort()
                                        }
                                    } else {
                                        responses = {};
                                        status = xhr.status;
                                        responseHeaders = xhr.getAllResponseHeaders();
                                        if (typeof xhr.responseText === "string") {
                                            responses.text = xhr.responseText
                                        }
                                        try {
                                            statusText = xhr.statusText
                                        } catch (e) {
                                            statusText = ""
                                        }
                                        if (!status && s.isLocal && !s.crossDomain) {
                                            status = responses.text ? 200 : 404
                                        } else if (status === 1223) {
                                            status = 204
                                        }
                                    }
                                }
                            } catch (firefoxAccessException) {
                                if (!isAbort) {
                                    complete(-1, firefoxAccessException)
                                }
                            }
                            if (responses) {
                                complete(status, statusText, responses, responseHeaders)
                            }
                        };
                        if (!s.async) {
                            callback()
                        } else if (xhr.readyState === 4) {
                            setTimeout(callback)
                        } else {
                            handle = ++xhrId;
                            if (xhrOnUnloadAbort) {
                                if (!xhrCallbacks) {
                                    xhrCallbacks = {};
                                    jQuery(window).unload(xhrOnUnloadAbort)
                                }
                                xhrCallbacks[handle] = callback
                            }
                            xhr.onreadystatechange = callback
                        }
                    },
                    abort: function() {
                        if (callback) {
                            callback(undefined, true)
                        }
                    }
                }
            }
        })
    }
    var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/,
        rfxnum = new RegExp("^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i"),
        rrun = /queueHooks$/,
        animationPrefilters = [defaultPrefilter],
        tweeners = {
            "*": [function(prop, value) {
                var tween = this.createTween(prop, value),
                    target = tween.cur(),
                    parts = rfxnum.exec(value),
                    unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
                    start = (jQuery.cssNumber[prop] || unit !== "px" && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)),
                    scale = 1,
                    maxIterations = 20;
                if (start && start[3] !== unit) {
                    unit = unit || start[3];
                    parts = parts || [];
                    start = +target || 1;
                    do {
                        scale = scale || ".5";
                        start = start / scale;
                        jQuery.style(tween.elem, prop, start + unit)
                    } while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations)
                }
                if (parts) {
                    start = tween.start = +start || +target || 0;
                    tween.unit = unit;
                    tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2]
                }
                return tween
            }]
        };

    function createFxNow() {
        setTimeout(function() {
            fxNow = undefined
        });
        return fxNow = jQuery.now()
    }

    function createTween(value, prop, animation) {
        var tween, collection = (tweeners[prop] || []).concat(tweeners["*"]),
            index = 0,
            length = collection.length;
        for (; index < length; index++) {
            if (tween = collection[index].call(animation, prop, value)) {
                return tween
            }
        }
    }

    function Animation(elem, properties, options) {
        var result, stopped, index = 0,
            length = animationPrefilters.length,
            deferred = jQuery.Deferred().always(function() {
                delete tick.elem
            }),
            tick = function() {
                if (stopped) {
                    return false
                }
                var currentTime = fxNow || createFxNow(),
                    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
                    temp = remaining / animation.duration || 0,
                    percent = 1 - temp,
                    index = 0,
                    length = animation.tweens.length;
                for (; index < length; index++) {
                    animation.tweens[index].run(percent)
                }
                deferred.notifyWith(elem, [animation, percent, remaining]);
                if (percent < 1 && length) {
                    return remaining
                } else {
                    deferred.resolveWith(elem, [animation]);
                    return false
                }
            },
            animation = deferred.promise({
                elem: elem,
                props: jQuery.extend({}, properties),
                opts: jQuery.extend(true, {
                    specialEasing: {}
                }, options),
                originalProperties: properties,
                originalOptions: options,
                startTime: fxNow || createFxNow(),
                duration: options.duration,
                tweens: [],
                createTween: function(prop, end) {
                    var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                    animation.tweens.push(tween);
                    return tween
                },
                stop: function(gotoEnd) {
                    var index = 0,
                        length = gotoEnd ? animation.tweens.length : 0;
                    if (stopped) {
                        return this
                    }
                    stopped = true;
                    for (; index < length; index++) {
                        animation.tweens[index].run(1)
                    }
                    if (gotoEnd) {
                        deferred.resolveWith(elem, [animation, gotoEnd])
                    } else {
                        deferred.rejectWith(elem, [animation, gotoEnd])
                    }
                    return this
                }
            }),
            props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (; index < length; index++) {
            result = animationPrefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
                return result
            }
        }
        jQuery.map(props, createTween, animation);
        if (jQuery.isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation)
        }
        jQuery.fx.timer(jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
        }));
        return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always)
    }

    function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props) {
            name = jQuery.camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (jQuery.isArray(value)) {
                easing = value[1];
                value = props[index] = value[0]
            }
            if (index !== name) {
                props[name] = value;
                delete props[index]
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
                value = hooks.expand(value);
                delete props[name];
                for (index in value) {
                    if (!(index in props)) {
                        props[index] = value[index];
                        specialEasing[index] = easing
                    }
                }
            } else {
                specialEasing[name] = easing
            }
        }
    }
    jQuery.Animation = jQuery.extend(Animation, {
        tweener: function(props, callback) {
            if (jQuery.isFunction(props)) {
                callback = props;
                props = ["*"]
            } else {
                props = props.split(" ")
            }
            var prop, index = 0,
                length = props.length;
            for (; index < length; index++) {
                prop = props[index];
                tweeners[prop] = tweeners[prop] || [];
                tweeners[prop].unshift(callback)
            }
        },
        prefilter: function(callback, prepend) {
            if (prepend) {
                animationPrefilters.unshift(callback)
            } else {
                animationPrefilters.push(callback)
            }
        }
    });

    function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, tween, hooks, oldfire, anim = this,
            orig = {},
            style = elem.style,
            hidden = elem.nodeType && isHidden(elem),
            dataShow = jQuery._data(elem, "fxshow");
        if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function() {
                    if (!hooks.unqueued) {
                        oldfire()
                    }
                }
            }
            hooks.unqueued++;
            anim.always(function() {
                anim.always(function() {
                    hooks.unqueued--;
                    if (!jQuery.queue(elem, "fx").length) {
                        hooks.empty.fire()
                    }
                })
            })
        }
        if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
            opts.overflow = [style.overflow, style.overflowX, style.overflowY];
            if (jQuery.css(elem, "display") === "inline" && jQuery.css(elem, "float") === "none") {
                if (!jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay(elem.nodeName) === "inline") {
                    style.display = "inline-block"
                } else {
                    style.zoom = 1
                }
            }
        }
        if (opts.overflow) {
            style.overflow = "hidden";
            if (!jQuery.support.shrinkWrapBlocks) {
                anim.always(function() {
                    style.overflow = opts.overflow[0];
                    style.overflowX = opts.overflow[1];
                    style.overflowY = opts.overflow[2]
                })
            }
        }
        for (prop in props) {
            value = props[prop];
            if (rfxtypes.exec(value)) {
                delete props[prop];
                toggle = toggle || value === "toggle";
                if (value === (hidden ? "hide" : "show")) {
                    continue
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop)
            }
        }
        if (!jQuery.isEmptyObject(orig)) {
            if (dataShow) {
                if ("hidden" in dataShow) {
                    hidden = dataShow.hidden
                }
            } else {
                dataShow = jQuery._data(elem, "fxshow", {})
            }
            if (toggle) {
                dataShow.hidden = !hidden
            }
            if (hidden) {
                jQuery(elem).show()
            } else {
                anim.done(function() {
                    jQuery(elem).hide()
                })
            }
            anim.done(function() {
                var prop;
                jQuery._removeData(elem, "fxshow");
                for (prop in orig) {
                    jQuery.style(elem, prop, orig[prop])
                }
            });
            for (prop in orig) {
                tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                if (!(prop in dataShow)) {
                    dataShow[prop] = tween.start;
                    if (hidden) {
                        tween.end = tween.start;
                        tween.start = prop === "width" || prop === "height" ? 1 : 0
                    }
                }
            }
        }
    }

    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing)
    }
    jQuery.Tween = Tween;
    Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || "swing";
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px")
        },
        cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this)
        },
        run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration)
            } else {
                this.pos = eased = percent
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            }
            if (hooks && hooks.set) {
                hooks.set(this)
            } else {
                Tween.propHooks._default.set(this)
            }
            return this
        }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
        _default: {
            get: function(tween) {
                var result;
                if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
                    return tween.elem[tween.prop]
                }
                result = jQuery.css(tween.elem, tween.prop, "");
                return !result || result === "auto" ? 0 : result
            },
            set: function(tween) {
                if (jQuery.fx.step[tween.prop]) {
                    jQuery.fx.step[tween.prop](tween)
                } else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
                    jQuery.style(tween.elem, tween.prop, tween.now + tween.unit)
                } else {
                    tween.elem[tween.prop] = tween.now
                }
            }
        }
    };
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
                tween.elem[tween.prop] = tween.now
            }
        }
    };
    jQuery.each(["toggle", "show", "hide"], function(i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback)
        }
    });
    jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHidden).css("opacity", 0).show().end().animate({
                opacity: to
            }, speed, easing, callback)
        },
        animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop),
                optall = jQuery.speed(speed, easing, callback),
                doAnimation = function() {
                    var anim = Animation(this, jQuery.extend({}, prop), optall);
                    if (empty || jQuery._data(this, "finish")) {
                        anim.stop(true)
                    }
                };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation)
        },
        stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop(gotoEnd)
            };
            if (typeof type !== "string") {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined
            }
            if (clearQueue && type !== false) {
                this.queue(type || "fx", [])
            }
            return this.each(function() {
                var dequeue = true,
                    index = type != null && type + "queueHooks",
                    timers = jQuery.timers,
                    data = jQuery._data(this);
                if (index) {
                    if (data[index] && data[index].stop) {
                        stopQueue(data[index])
                    }
                } else {
                    for (index in data) {
                        if (data[index] && data[index].stop && rrun.test(index)) {
                            stopQueue(data[index])
                        }
                    }
                }
                for (index = timers.length; index--;) {
                    if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                        timers[index].anim.stop(gotoEnd);
                        dequeue = false;
                        timers.splice(index, 1)
                    }
                }
                if (dequeue || !gotoEnd) {
                    jQuery.dequeue(this, type)
                }
            })
        },
        finish: function(type) {
            if (type !== false) {
                type = type || "fx"
            }
            return this.each(function() {
                var index, data = jQuery._data(this),
                    queue = data[type + "queue"],
                    hooks = data[type + "queueHooks"],
                    timers = jQuery.timers,
                    length = queue ? queue.length : 0;
                data.finish = true;
                jQuery.queue(this, type, []);
                if (hooks && hooks.stop) {
                    hooks.stop.call(this, true)
                }
                for (index = timers.length; index--;) {
                    if (timers[index].elem === this && timers[index].queue === type) {
                        timers[index].anim.stop(true);
                        timers.splice(index, 1)
                    }
                }
                for (index = 0; index < length; index++) {
                    if (queue[index] && queue[index].finish) {
                        queue[index].finish.call(this)
                    }
                }
                delete data.finish
            })
        }
    });

    function genFx(type, includeWidth) {
        var which, attrs = {
                height: type
            },
            i = 0;
        includeWidth = includeWidth ? 1 : 0;
        for (; i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type
        }
        if (includeWidth) {
            attrs.opacity = attrs.width = type
        }
        return attrs
    }
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback)
        }
    });
    jQuery.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
        };
        opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
        if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx"
        }
        opt.old = opt.complete;
        opt.complete = function() {
            if (jQuery.isFunction(opt.old)) {
                opt.old.call(this)
            }
            if (opt.queue) {
                jQuery.dequeue(this, opt.queue)
            }
        };
        return opt
    };
    jQuery.easing = {
        linear: function(p) {
            return p
        },
        swing: function(p) {
            return .5 - Math.cos(p * Math.PI) / 2
        }
    };
    jQuery.timers = [];
    jQuery.fx = Tween.prototype.init;
    jQuery.fx.tick = function() {
        var timer, timers = jQuery.timers,
            i = 0;
        fxNow = jQuery.now();
        for (; i < timers.length; i++) {
            timer = timers[i];
            if (!timer() && timers[i] === timer) {
                timers.splice(i--, 1)
            }
        }
        if (!timers.length) {
            jQuery.fx.stop()
        }
        fxNow = undefined
    };
    jQuery.fx.timer = function(timer) {
        if (timer() && jQuery.timers.push(timer)) {
            jQuery.fx.start()
        }
    };
    jQuery.fx.interval = 13;
    jQuery.fx.start = function() {
        if (!timerId) {
            timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval)
        }
    };
    jQuery.fx.stop = function() {
        clearInterval(timerId);
        timerId = null
    };
    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    jQuery.fx.step = {};
    if (jQuery.expr && jQuery.expr.filters) {
        jQuery.expr.filters.animated = function(elem) {
            return jQuery.grep(jQuery.timers, function(fn) {
                return elem === fn.elem
            }).length
        }
    }
    jQuery.fn.offset = function(options) {
        if (arguments.length) {
            return options === undefined ? this : this.each(function(i) {
                jQuery.offset.setOffset(this, options, i)
            })
        }
        var docElem, win, box = {
                top: 0,
                left: 0
            },
            elem = this[0],
            doc = elem && elem.ownerDocument;
        if (!doc) {
            return
        }
        docElem = doc.documentElement;
        if (!jQuery.contains(docElem, elem)) {
            return box
        }
        if (typeof elem.getBoundingClientRect !== core_strundefined) {
            box = elem.getBoundingClientRect()
        }
        win = getWindow(doc);
        return {
            top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
            left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
        }
    };
    jQuery.offset = {
        setOffset: function(elem, options, i) {
            var position = jQuery.css(elem, "position");
            if (position === "static") {
                elem.style.position = "relative"
            }
            var curElem = jQuery(elem),
                curOffset = curElem.offset(),
                curCSSTop = jQuery.css(elem, "top"),
                curCSSLeft = jQuery.css(elem, "left"),
                calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
                props = {},
                curPosition = {},
                curTop, curLeft;
            if (calculatePosition) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left
            } else {
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0
            }
            if (jQuery.isFunction(options)) {
                options = options.call(elem, i, curOffset)
            }
            if (options.top != null) {
                props.top = options.top - curOffset.top + curTop
            }
            if (options.left != null) {
                props.left = options.left - curOffset.left + curLeft
            }
            if ("using" in options) {
                options.using.call(elem, props)
            } else {
                curElem.css(props)
            }
        }
    };
    jQuery.fn.extend({
        position: function() {
            if (!this[0]) {
                return
            }
            var offsetParent, offset, parentOffset = {
                    top: 0,
                    left: 0
                },
                elem = this[0];
            if (jQuery.css(elem, "position") === "fixed") {
                offset = elem.getBoundingClientRect()
            } else {
                offsetParent = this.offsetParent();
                offset = this.offset();
                if (!jQuery.nodeName(offsetParent[0], "html")) {
                    parentOffset = offsetParent.offset()
                }
                parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
                parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true)
            }
            return {
                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var offsetParent = this.offsetParent || docElem;
                while (offsetParent && (!jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static")) {
                    offsetParent = offsetParent.offsetParent
                }
                return offsetParent || docElem
            })
        }
    });
    jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(method, prop) {
        var top = /Y/.test(prop);
        jQuery.fn[method] = function(val) {
            return jQuery.access(this, function(elem, method, val) {
                var win = getWindow(elem);
                if (val === undefined) {
                    return win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method]
                }
                if (win) {
                    win.scrollTo(!top ? val : jQuery(win).scrollLeft(), top ? val : jQuery(win).scrollTop())
                } else {
                    elem[method] = val
                }
            }, method, val, arguments.length, null)
        }
    });

    function getWindow(elem) {
        return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false
    }
    jQuery.each({
        Height: "height",
        Width: "width"
    }, function(name, type) {
        jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
        }, function(defaultExtra, funcName) {
            jQuery.fn[funcName] = function(margin, value) {
                var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
                    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                return jQuery.access(this, function(elem, type, value) {
                    var doc;
                    if (jQuery.isWindow(elem)) {
                        return elem.document.documentElement["client" + name]
                    }
                    if (elem.nodeType === 9) {
                        doc = elem.documentElement;
                        return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name])
                    }
                    return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra)
                }, type, chainable ? margin : undefined, chainable, null)
            }
        })
    });
    jQuery.fn.size = function() {
        return this.length
    };
    jQuery.fn.andSelf = jQuery.fn.addBack;
    if (typeof module === "object" && module && typeof module.exports === "object") {
        module.exports = jQuery
    } else {
        window.jQuery = window.$ = jQuery;
        if (typeof define === "function" && define.amd) {
            define("jquery", [], function() {
                return jQuery
            })
        }
    }
})(window);
DM.m = {};
DM.has = function(id, type, params) {
    type = type || id;
    if (!this.m[type]) {
        this.m[type] = []
    }
    this.m[type].push({
        id: id,
        params: params
    })
};
DM.setCookie = function(szName, szValue, szExpires, szPath, szDomain, bSecure) {
    var szCookieText = escape(szName) + "=" + escape(szValue);
    szCookieText += szExpires ? ";expires=" + szExpires.toGMTString() : "";
    szCookieText += szPath ? ";path=" + szPath : "";
    szCookieText += szDomain ? ";domain=" + szDomain : "";
    szCookieText += bSecure ? ";secure" : "";
    document.cookie = szCookieText
};
DM.getCookie = function(szName) {
    var szValue = null;
    if (document.cookie) {
        var arr = document.cookie.split(escape(szName) + "=");
        if (2 <= arr.length) {
            szValue = unescape(arr[1].split(";")[0]);
            if (szValue.length > 1 && szValue.charAt(0) === '"' && szValue.charAt(szValue.length - 1) === '"') {
                szValue = szValue.substring(1, szValue.length - 1)
            }
        }
    }
    return szValue
};
DM.deleteCookie = function(szName) {
    var tmp = DM.getCookie(szName);
    if (tmp) DM.setCookie(szName, tmp, new Date(1))
};
DM.popup = function(url, w, h) {
    var _popupFeatures = "menubar=false,location=false,statusbar=false,toolbar=false,resizable=false",
        _popupfpFeatures = "resizable=1,scrollbars=1",
        nw = window.open(url, "_blank", "width=" + w + ",height=" + h + "," + _popupFeatures + "," + _popupfpFeatures);
    nw.focus();
    return nw
};
(function($) {
    "use strict";

    function transitionEnd() {
        var el = document.createElement("bootstrap");
        var transEndEventNames = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return {
                    end: transEndEventNames[name]
                }
            }
        }
    }
    $.fn.emulateTransitionEnd = function(duration) {
        var called = false,
            $el = this;
        $(this).one($.support.transition.end, function() {
            called = true
        });
        var callback = function() {
            if (!called) $($el).trigger($.support.transition.end)
        };
        setTimeout(callback, duration);
        return this
    };
    $.support.transition = transitionEnd();
    var NS = "ez-modal";
    var numberOfModals = 0;
    var methods = {
        init: function(options) {
            var defaults = {
                container: "body",
                closeOnBackgroundClick: true,
                triggerOnClick: false,
                toggleButtons: false,
                autoOpen: false,
                closeKeyCodes: "27",
                center: false,
                ajaxUrl: false,
                ajaxRefreshEverytime: true,
                ajaxLoadOnInit: false,
                ajaxErrorMessage: "Sorry, but something went wrong. Please come back later and try again."
            };
            options = $.extend(defaults, options);
            return this.each(function() {
                var o = options,
                    showModal, hideModal, showBackdrop, loadHTML, ui = {},
                    evtNS = "." + NS + "-" + numberOfModals++,
                    alreadyLoaded = false,
                    toBeCentered = o.center,
                    centerModal, closeKeyCodes = $.map(o.closeKeyCodes.split(" "), function(el) {
                        if (el && el.length) {
                            return parseInt(el, 10)
                        }
                    });
                ui.container = $(o.container);
                ui.backdrop = ui.container.children("." + NS + "-backdrop");
                if (!ui.backdrop.length) {
                    ui.backdrop = $("<div class=" + NS + "-backdrop></div>").appendTo(ui.container)
                }
                ui.modal = $(this).addClass(NS);
                ui.modal.data("modal", "active");
                showBackdrop = function() {
                    ui.backdrop.show();
                    setTimeout(function() {
                        ui.backdrop.addClass(NS + "-backdrop-on")
                    }, 30)
                };
                showModal = function() {
                    ui.modal.show();
                    centerModal();
                    setTimeout(function() {
                        ui.container.addClass(NS + "-container-on");
                        ui.modal.addClass(NS + "-on");
                        ui.modal.attr("aria-hidden", "false");
                        ui.modal.focus();
                        ui.modal.trigger({
                            type: NS + "-after-open",
                            ui: ui,
                            opt: o
                        })
                    }, 30)
                };
                hideModal = function() {
                    ui.container.removeClass(NS + "-container-on");
                    ui.backdrop.removeClass(NS + "-backdrop-on");
                    ui.modal.removeClass(NS + "-on");
                    ui.modal.attr("aria-hidden", "true");
                    if ($.support.transition) {
                        ui.container.addClass(NS + "-container-off").one($.support.transition.end, function() {
                            ui.container.removeClass(NS + "-container-off")
                        }).emulateTransitionEnd(600);
                        ui.backdrop.addClass(NS + "-backdrop-off").one($.support.transition.end, function() {
                            ui.backdrop.removeClass(NS + "-backdrop-off").hide()
                        }).emulateTransitionEnd(600);
                        ui.modal.addClass(NS + "-off").one($.support.transition.end, function() {
                            ui.modal.removeClass(NS + "-off").hide();
                            ui.modal.trigger({
                                type: NS + "-after-close",
                                ui: ui,
                                opt: o
                            })
                        }).emulateTransitionEnd(600)
                    } else {
                        ui.backdrop.hide();
                        ui.modal.hide();
                        ui.modal.trigger({
                            type: NS + "-after-close",
                            ui: ui,
                            opt: o
                        })
                    }
                };
                centerModal = function() {
                    if (toBeCentered) {
                        ui.modal.css("margin-left", 0);
                        ui.modal.css("margin-left", "-" + ui.modal.outerWidth(true) / 2 + "px");
                        ui.modal.css("margin-top", 0);
                        ui.modal.css("margin-top", "-" + ui.modal.outerHeight(true) / 2 + "px")
                    }
                    toBeCentered = false
                };
                loadHTML = o.ajaxUrl && function(cb) {
                    if (!alreadyLoaded || o.ajaxRefreshEverytime) {
                        ui.modal.trigger({
                            type: NS + "-before-load",
                            ui: ui,
                            opt: o
                        });
                        ui.modal.load($.isFunction(o.ajaxUrl) && o.ajaxUrl() || o.ajaxUrl, function(response, status, req) {
                            if (status === "error") {
                                ui.modal.html('<div class="' + NS + "-error " + NS + '-close" >' + o.ajaxErrorMessage + "</div>")
                            } else {
                                alreadyLoaded = true;
                                toBeCentered = o.center
                            }
                            ui.modal.trigger({
                                type: NS + "-after-load",
                                ui: ui,
                                opt: o
                            });
                            cb()
                        })
                    } else {
                        cb()
                    }
                } || function(cb) {
                    cb()
                };
                if (o.ajaxLoadOnInit) {
                    loadHTML(function() {})
                }
                ui.modal.on(NS + "-open" + evtNS, function() {
                    showBackdrop();
                    ui.modal.trigger({
                        type: NS + "-before-open",
                        ui: ui,
                        opt: o
                    });
                    loadHTML(function() {
                        showModal()
                    })
                });
                ui.modal.on(NS + "-close" + evtNS, function() {
                    ui.modal.trigger({
                        type: NS + "-before-close",
                        ui: ui,
                        opt: o
                    });
                    hideModal()
                });
                if (o.autoOpen) {
                    ui.modal.trigger(NS + "-open")
                }
                if (closeKeyCodes) {
                    $(document).on("keydown" + evtNS, function(e) {
                        if (ui.modal.is("." + NS + "-on")) {
                            if ($.inArray(e.keyCode, closeKeyCodes) !== -1) {
                                ui.modal.trigger(NS + "-close");
                                return false
                            }
                        }
                    })
                }
                if (o.triggerOnClick) {
                    $(document).on("click" + evtNS, o.triggerOnClick, function(evt) {
                        ui.modal.trigger(NS + "-open");
                        return false
                    })
                }
                if (o.toggleButtons) {
                    $(o.toggleButtons).each(function() {
                        $(this).data("modal", ui.modal)
                    })
                }
                ui.modal.on("click" + evtNS, "." + NS + "-close", function(evt) {
                    ui.modal.trigger(NS + "-close");
                    return false
                });
                if (o.closeOnBackgroundClick) {
                    ui.backdrop.on("click" + evtNS, function() {
                        ui.modal.trigger(NS + "-close");
                        return false
                    })
                }
                ui.modal.bind(NS + "-destroy" + evtNS, function() {
                    ui.backdrop.off(evtNS);
                    ui.modal.off(evtNS);
                    $(document).off(evtNS);
                    hideModal();
                    ui.modal.removeData("modal")
                })
            })
        },
        open: function() {
            this.trigger(NS + "-open")
        },
        close: function() {
            this.trigger(NS + "-close")
        },
        destroy: function() {
            this.trigger(NS + "-destroy")
        }
    };
    $.fn.ezmodal = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1))
        }
        if (typeof method === "object" || !method) {
            return methods.init.apply(this, arguments)
        }
        $.error("Method " + method + " does not exist on jQuery.ezmodal")
    };
    $(document).on("click." + NS, '[data-toggle="modal"]', function(e) {
        var $this = $(this);
        if ($this.attr("data-on-mobile") && (MobileUtils.isMobile() || MobileUtils.isKindleSilk())) {
            $(this).attr("href", $this.attr("data-on-mobile"));
            return
        }
        var href = $this.attr("href"),
            target = $this.attr("data-target") || href && href.replace(/.*(?=#[^\s]+$)/, ""),
            modalId = $this.data("modal-id"),
            $target;
        if (target.indexOf("#") === 0) {
            $target = $(target);
            if (!$target.data("modal")) {
                $target.ezmodal($.extend($target.data(), $this.data()))
            }
        } else {
            if (modalId) {
                $target = $("#" + modalId)
            } else {
                $target = $this.data("modal")
            }
            if (!$target || $target.length == 0) {
                $target = $('<div class="' + NS + '" aria-hidden="true" role="dialog"></div>');
                modalId && $target.attr("id", modalId);
                $target.ezmodal($.extend({
                    ajaxUrl: target,
                    toggleButtons: $this
                }, $this.data())).appendTo("body")
            }
        }
        $target.ezmodal("open");
        e.preventDefault()
    })
})(jQuery);
DM.Fn = function() {
    var initClass = function(type, items) {
        var cls, initFn, scope, l = items.length;
        if (typeof DM[type] === "undefined") {
            type = type.charAt(0).toUpperCase() + type.slice(1);
            if (typeof DM[type] === "undefined") {
                return
            }
        }
        cls = DM[type];
        if (typeof cls === "function") {
            while (l > 0) {
                --l;
                new cls(items[l].id, items[l].params)
            }
        } else if (typeof cls === "object") {
            if (typeof cls.getInstance === "function") {
                initFn = cls.getInstance().init;
                scope = cls.getInstance()
            } else {
                initFn = cls.init;
                scope = cls
            }
            while (l > 0) {
                --l;
                initFn.call(scope, items[l])
            }
        }
    };
    var fixIframe = function() {
        var fn = function(e) {
            var t = e.getTarget("A");
            if (!t || window.location.pathname.indexOf("/embed/video") >= 0) return;
            if (t.target == "") {
                top.location.replace(t.href)
            }
        };
        document.body.addEventListener("click", fn);
        var forms = document.getElementsByTagName("form"),
            l = forms.length;
        while (l > 0) {
            --l;
            forms[l].setAttribute("target", "_top")
        }
        setTimeout(function() {
            var params = window.location.search.substring(1).split("&");
            for (var i = 0, len = params.length; i < len; i++) {
                var param = params[i].split("=");
                if (param[0] == "dmproxy") {
                    var iFrameId = "";
                    if (window.location.search.indexOf("betaonly") != -1) {
                        iFrameId = "dmbeta"
                    } else if (window.location.search.indexOf("headeronly") != -1) {
                        iFrameId = "dmheader"
                    } else if (window.location.search.indexOf("footeronly") != -1) {
                        iFrameId = "dmfooter"
                    }
                    if (iFrameId != "") {
                        var iFrame = document.createElement("iframe");
                        iFrame.style.border = "0px";
                        iFrame.style.width = "0px";
                        iFrame.style.height = "0px";
                        var windowHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
                        iFrame.src = param[1] + "?command=updateIFrame&id=" + iFrameId + "&attribute=height&value=" + windowHeight;
                        document.body.appendChild(iFrame)
                    }
                }
            }
        }, 1e3)
    };
    return {
        init: function() {
            var type;
            if (self != top) fixIframe();
            for (type in DM.m) {
                initClass(type, DM.m[type])
            }
        }
    }
}();
DM.PictureSwap = Ext.extend(Ext.util.Observable, {
    constructor: function(id) {
        this.el = Ext.get(id);
        if (!this.el) return;
        this.el.on("mouseover", this._mouseOverHandler, this);
        var image = Ext.get(id + "-img");
        this._img = image ? image.dom : null;
        this.addEvents(["change"])
    },
    _swap: function(src) {
        if (this._img) {
            this._img.src = src;
            this.fireEvent("change")
        }
    },
    _mouseOverHandler: function(e) {
        var trg = e.getTarget("a", 3),
            imgSrc;
        if (!trg) {
            return
        }

        function getClassData(el) {
            return el.className.includes("|") ? el.className.split("|") : []
        }
        imgSrc = getClassData(trg)[0];
        imgSrc && this._swap(imgSrc)
    }
});
DM.Showcase = Ext.extend(Ext.util.Observable, {
    constructor: function(id) {
        this.el = Ext.get(id);
        this._showables = this.el.select(".mainImages li");
        this.el.on("click", this._clickHandler, this);
        this._prodElX = Ext.fly(this.el.query(".products")[0]).getX();
        this._prodElY = Ext.fly(this.el.query(".products")[0]).getY();
        this.addEvents(["startAnim", "endAnim"])
    },
    _resetShowable: function(el) {
        el.setStyle("visibility", "hidden");
        el.select(".js-product-container").setStyle("opacity", 0)
    },
    _showShowable: function(el, pos) {
        var h, value = el.getStyle("height");
        if (value === "0px" || value === "auto") {
            h = el.dom.offsetHeight - 6
        } else {
            h = value.substring(0, value.length - 2)
        }
        el.setStyle({
            top: pos.top - this._prodElY - 11 + "px",
            left: pos.left + "px",
            width: "0px",
            height: "0px",
            visibility: "visible"
        });
        this.fireEvent("startAnim");
        var onEndAnim = this.fireEvent.createDelegate(this, ["endAnim"]);
        el.animate({
            width: {
                to: 251
            },
            height: {
                to: h
            }
        }, .3, function() {
            el.select(".js-product-container").item(0).animate({
                opacity: {
                    to: 1
                }
            }, .3, function() {
                onEndAnim()
            })
        })
    },
    _clickHandler: function(e) {
        function getHash(el) {
            return (el.href || "").split("#")[1] || ""
        }

        function getClassData(el) {
            return el.className.includes("|") ? el.className.split("|") : []
        }
        var parent = trg = Ext.get(e.getTarget());
        !trg.hasClass("buy-link") && !trg.hasClass("promo") && e.preventDefault();
        var liContainer = trg.parent("li");
        var childIndex = getClassData(liContainer.dom)[1];
        var leftPos;
        if (childIndex % 2 === 0) {
            leftPos = 148
        } else {
            leftPos = 10
        }
        if (trg.is("a") && trg.hasClass("revealProductMain") || (parent = trg.parent("a.revealProductMain"))) {
            this._showables.each(function(el) {
                this._resetShowable(el)
            }, this);
            this._showShowable(Ext.get(getHash(parent.dom)), {
                top: parent.getY() + 10,
                left: leftPos
            })
        } else if (trg.is("img.close")) {
            this._resetShowable(trg.parent("li"))
        }
    }
});
DM.MirrorMirror = Ext.extend(Ext.util.Observable, {
    _blockAction: false,
    constructor: function(id, params) {
        this.el = Ext.get(id);
        this._galleryId = params.galleryId;
        this._showables = this.el.select(".js-mm-overlay");
        this.el.on("click", this._clickHandler, this, {
            preventDefault: true
        });
        this.addEvents(["startAnim", "endAnim"]);
        this.on("endAnim", this._showShowable)
    },
    _getTwin: function(el) {
        var id = el.dom.id;
        var match = id.match(/[0-9]{1,2}$/gi)[0];
        match % 2 ? ++match : --match;
        return Ext.get("MM_overlay_thumb_overlay_" + this._galleryId + "_" + match)
    },
    _resetShowable: function(el, fromUserClick) {
        el.setStyle("visibility", "hidden");
        el.select("div").setStyle("opacity", 0);
        fromUserClick && arguments.callee(this._getTwin(el))
    },
    _showShowable: function(el, fromUserClick) {
        var h = el.getHeight() - 26;
        el.setStyle({
            width: "0px",
            height: "0px",
            visibility: "visible"
        });
        this.fireEvent("startAnim");
        var onEndAnim = fromUserClick ? this.fireEvent.createDelegate(this, ["endAnim", this._getTwin(el)]) : false;
        var removeBlock = function() {
            this._blockAction = false
        }.createDelegate(this);
        el.animate({
            width: {
                to: 180
            },
            height: {
                to: h
            }
        }, .3, function() {
            el.select("div").animate({
                opacity: {
                    to: 1,
                    from: 0
                }
            }, .3, function() {
                onEndAnim && onEndAnim() || removeBlock()
            })
        })
    },
    _clickHandler: function(e) {
        var parent = trg = Ext.get(e.getTarget());
        if (trg.is("a") && trg.hasClass("js-mm-image-link") || (parent = trg.parent("a.js-mm-image-link"))) {
            if (!this._blockAction) {
                this._blockAction = true;
                this._showables.each(function(el) {
                    this._resetShowable(el)
                }, this);
                this._showShowable(parent.next(), true)
            }
        } else if (trg.is("img.closebutton")) {
            this._resetShowable(trg.parent("div.js-mm-overlay"), true)
        }
    }
});
DM.Poll = Ext.extend(Ext.util.Observable, {
    _classes: {
        pollDiv: "js-poll",
        pollQuestion: "js-poll-question",
        pollResults: "js-poll-results",
        pollResultsData: "js-poll-content",
        voteButton: "js-vote-button",
        radio: "js-radio",
        selectedRadio: "selected",
        closeButton: "js-close",
        showYesterdays: "js-show-yesterdays",
        showAll: "js-show-all",
        pollWide: "poll-wide"
    },
    constructor: function(id, conf) {
        this.el = Ext.get(id);
        if (!this.el) return;
        this.el.on("click", this._clickHandler, this);
        this._spanRadios = this.el.select("." + this._classes.radio);
        this._checkedRadio = null;
        this._pollId = conf.pollId;
        this._questionId = conf.questionId;
        this._channelId = conf.channelId;
        this._pollResults = this.el.select("." + this._classes.pollResults).item(0);
        this._pollQuestion = this.el.select("." + this._classes.pollQuestion).item(0);
        this._pollResultsData = this._pollResults.select("." + this._classes.pollResultsData).item(0);
        this._showAll = this.el.select("." + this._classes.showAll).item(0);
        this._showYesterdays = this.el.select("." + this._classes.showYesterdays).item(0);
        this.addEvents(["onVote"])
    },
    _toggleRelatedRadio: function(el, checked) {
        var radio = el.next().dom;
        if (checked) {
            radio.checked = "checked";
            this._checkedRadio = radio
        } else {
            radio.checked = ""
        }
    },
    _resultsTemplate: function() {
        return new Ext.Template('<li class="cleared">', '<span class="results-text">{answer}</span>', '<span class="results-bar" style="width: {barLength}px;"></span>', '<span class="results-score">{percentage}%</span>', "</li>").compile()
    }(),
    _endTemplate: new Ext.Template("</ul><span>{message}</span></div>").compile(),
    _callBack: function(m, showYesterdayLink) {
        var startTemplate;
        if (this.el.hasClass("poll-wide")) {
            startTemplate = new Ext.Template('<div class="poll-results-graph box cleared">', '<a class="js-close close" href="#">', '<span class="close-btn">&nbsp;</span>Close', "</a><p>POLL RESULTS</p><ul>").compile()
        } else {
            startTemplate = new Ext.Template("<p>{question}</p><ul>").compile()
        }
        if (m) {
            var html = startTemplate.applyTemplate({
                question: m.poll.pollQuestions[0]["question"]
            });
            for (var i = 0; i < m.poll.pollQuestions[0].answers.length; i++) {
                html += this._resultsTemplate.applyTemplate({
                    answer: m.poll.pollQuestions[0].answers[i]["answer"],
                    barLength: m.poll.pollQuestions[0].answers[i]["barLength"],
                    percentage: m.poll.pollQuestions[0].answers[i]["percentage"]
                })
            }
            var tmp = {};
            if (m.pollAnswered || showYesterdayLink) {
                m.pollAnswered ? tmp.message = "Oops! You have already voted on this topic" : tmp.message = ""
            } else {
                tmp.message = "Thank you for voting"
            }
            html += this._endTemplate.applyTemplate({
                message: tmp.message
            });
            this._pollResultsData.dom.innerHTML = html;
            this._pollQuestion.addClass("hidden");
            this._pollResults.removeClass("hidden");
            this._switchFootLink(showYesterdayLink)
        }
        this.fireEvent("onVote")
    },
    _vote: function() {
        if (this._checkedRadio) {
            AjaxPoll.vote(this._pollId, this._checkedRadio.value, this._questionId, this._callBack.createDelegate(this, [false], true))
        }
    },
    _close: function() {
        this._pollQuestion.removeClass("hidden");
        this._pollResults.addClass("hidden");
        this._switchFootLink(true)
    },
    _switchFootLink: function(showAll) {
        if (!this._showAll) {
            return
        }
        if (showAll) {
            this._showAll.removeClass("hidden");
            this._showYesterdays.addClass("hidden")
        } else {
            this._showAll.addClass("hidden");
            this._showYesterdays.removeClass("hidden")
        }
    },
    _toggleTicked: function(spanRadio) {
        this._spanRadios.each(function(el) {
            if (el !== spanRadio) {
                el.removeClass(this._classes.selectedRadio);
                this._toggleRelatedRadio(el, false)
            }
        }, this);
        spanRadio.addClass(this._classes.selectedRadio);
        this._toggleRelatedRadio(spanRadio, true)
    },
    _clickHandler: function(e, t) {
        var trg = Ext.get(e.getTarget());
        !trg.hasClass(this._classes.showAll) && e.preventDefault();
        if (trg.hasClass(this._classes.radio)) {
            this._toggleTicked(trg)
        } else if (trg.hasClass(this._classes.voteButton) || trg.parent("button")) {
            if (this._spanRadios.elements.length > 0) {
                this._vote()
            } else {
                window.location.href = "/columnists/polls/poll.html?pollId=" + this._pollId
            }
        } else if (trg.hasClass(this._classes.closeButton) || trg.parent("." + this._classes.closeButton)) {
            this._close()
        } else if (trg.hasClass(this._classes.showYesterdays)) {
            AjaxPoll.getYesterdaysPoll(this._channelId, this._pollId, this._callBack.createDelegate(this, [true], true))
        }
    }
});
DM.Lightbox = function() {
    var UI;

    function getPageSize() {
        var docBody = document.body;
        var docEl = document.documentElement;
        var xScroll = Math.max(docBody.scrollWidth, docEl.offsetWidth);
        var yScroll = Math.max(docBody.body.scrollHeight, docEl.offsetHeight);
        return [xScroll, yScroll, docEl.clientWidth, docEl.clientHeight]
    }
    var constructor = function() {
        DM.LightboxObj = Ext.extend(Ext.util.Observable, {
            overlayDuration: .2,
            overlayOpacity: .85,
            resizeDuration: .7,
            constructor: function() {
                DM.LightboxObj.superclass.constructor.call(this);
                if (!this.initialized) {
                    this.addEvents(["b4open", "open", "afterOpen", "close"]);
                    this.initMarkup();
                    this.initialized = true
                }
            },
            initMarkup: function() {
                this.shim = Ext.get("lightbox-shim");
                this.overlay = Ext.get("overlay");
                this.container = Ext.get("lightbox-container");
                this.containerElement = Ext.get("lightbox");
                this.defaultContainer = Ext.get("lightbox-default-container");
                this.fader = Ext.get("lightbox-fader");
                this.els = [this.shim, this.overlay, this.defaultContainer, this.container, this.containerElement, this.fader];
                var l = this.els.length;
                while (l > 0) {
                    --l;
                    this.els[l].setVisibilityMode(Ext.Element.DISPLAY)
                }
            },
            open: function(e) {
                this.setViewSize();
                this.showBg();
                this.fireEvent("b4open");
                return this
            },
            showBg: function() {
                this.overlay.fadeIn({
                    duration: this.overlayDuration,
                    endOpacity: this.overlayOpacity,
                    scope: this
                })
            },
            show: function(pos) {
                var dims = this.position(pos);
                this.resetEls();
                this.defaultContainer.shift({
                    height: dims.height,
                    width: dims.width,
                    duration: this.resizeDuration,
                    delay: 50
                });
                this.fader.shift({
                    height: dims.height,
                    width: dims.width,
                    scope: this,
                    callback: this.contentShow,
                    duration: this.resizeDuration,
                    delay: 50
                })
            },
            position: function(pos) {
                this.containerElement.show();
                var w = this.containerElement.getWidth();
                var h = this.containerElement.getHeight();
                var pageScroll = Ext.fly(document).getScroll();
                var arrayPageSize = getPageSize();
                if (pos) {
                    this.containerElement.setStyle({
                        top: pos[1] + "px",
                        left: pos[0] + "px"
                    }).show()
                } else {
                    var lightboxTop = pageScroll.top + (arrayPageSize[3] - 35 - h) / 2;
                    var lightboxLeft = (arrayPageSize[2] - w) / 2;
                    this.containerElement.setStyle({
                        top: lightboxTop < 0 ? "0px" : lightboxTop + "px",
                        left: lightboxLeft < 0 ? "0px" : lightboxLeft + "px"
                    }).show()
                }
                return {
                    width: w,
                    height: h
                }
            },
            contentShow: function() {
                this.defaultContainer.setStyle({
                    visibility: "visible",
                    height: "auto"
                });
                this.fireEvent("afterOpen");
                this.fader.fadeOut({
                    endOpacity: 0,
                    duration: this.resizeDuration,
                    callback: function() {
                        this.fader.hide()
                    },
                    scope: this
                })
            },
            resetEls: function() {
                this.defaultContainer.setStyle({
                    visibility: "hidden",
                    width: "0px",
                    height: "0px"
                });
                this.fader.setStyle({
                    display: "block",
                    width: "0px",
                    height: "0px",
                    opacity: "1"
                });
                this.container.setStyle("left", "0px")
            },
            close: function() {
                this.containerElement.hide();
                this.overlay.hide();
                this.shim.hide();
                this.fireEvent("close");
                this.defaultContainer.dom.innerHTML = "";
                this.defaultContainer.setStyle({
                    height: "auto",
                    width: "auto"
                })
            },
            setViewSize: function() {
                var viewSize = getPageSize(),
                    w = viewSize[0],
                    h = Math.max(viewSize[1], viewSize[3]);
                this.overlay.setStyle({
                    left: 0,
                    top: 0,
                    width: w + "px",
                    height: h + "px"
                });
                this.shim.setStyle({
                    left: 0,
                    top: 0,
                    width: w + "px",
                    height: h + "px"
                }).show()
            }
        })
    };
    return {
        getInstance: function() {
            if (!UI) {
                constructor();
                UI = new DM.LightboxObj
            }
            return UI
        }
    }
}();
(function($) {
    var $document = $(document);
    var addCurrentUrltoLink = function(url) {
        return url.replace("targetUrl=", "targetUrl=" + window.location + " ")
    };
    $document.on("click", ".js-logout", function(evt) {
        window.location = addCurrentUrltoLink($(this).attr("href"));
        return false
    });
    $document.on("click", ".js-login", function(evt) {
        evt.preventDefault();
        window.location.href = addCurrentUrltoLink($(this).attr("href"))
    });
    $(document).on("click", ".not_you", function() {
        $(".has-prov").removeClass("has-prov")
    })
})(jQuery);
DM.Login = {
    init: function(o) {},
    open: function(e, t, opt) {
        $(".js-login").trigger("click")
    }
};
(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], function($) {
            return factory(root, $)
        })
    } else {
        return factory(root, $)
    }
})(this, function(root, $) {
    var debounce = function(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this,
                args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args)
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args)
        }
    };
    var types = "text password search number email datetime datetime-local date month week time tel url color range".split(" "),
        len = types.length;
    $.expr[":"]["textall"] = function(elem) {
        var type = elem.getAttribute("type");
        for (var i = 0; i < len; i++) {
            if (type === types[i]) {
                return true
            }
        }
        return false
    };
    var DEFAULT_ERROR_MESSAGE = "The value is not correct";
    var ruleFactory = {
        regExp: function(args) {
            var re = args.re,
                error = args.error;
            return function(val, $form, cb) {
                if (re.test(val)) {
                    cb()
                } else {
                    cb(error || DEFAULT_ERROR_MESSAGE)
                }
            }
        },
        length: function(args) {
            var min = args.min,
                max = args.max,
                error = args.error;
            if (typeof min === "undefined") {
                min = -Infinity
            }
            if (typeof max === "undefined") {
                max = Infinity
            }
            return function(val, $form, cb) {
                var l = val.length;
                if (l >= min && l <= max) {
                    cb()
                } else {
                    cb(error || DEFAULT_ERROR_MESSAGE)
                }
            }
        },
        rest: function(args) {
            var success = args.success || function(msg, status, cb) {
                if (status === "success") {
                    cb()
                } else {
                    cb(msg || DEFAULT_ERROR_MESSAGE)
                }
            };
            var error = args.error || function(jqXHR, textStatus, errorThrown, cb) {
                cb()
            };
            var notCached = args.notCached;
            var cache = {};
            return function(val, form, cb) {
                var ajaxConfig = $.extend({
                    url: args.url,
                    type: "GET",
                    data: args.getData && args.getData(val) || val,
                    success: function(msg, status) {
                        if (!notCached) {
                            cache[val] = {
                                msg: msg,
                                status: status
                            }
                        }
                        success(msg, status, cb)
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        error(jqXHR, textStatus, errorThrown, cb)
                    }
                }, args.ajaxConfig);
                if (!notCached && typeof cache[val] !== "undefined") {
                    success(cache[val].msg, cache[val].status, cb)
                } else {
                    $.ajax(ajaxConfig)
                }
            }
        }
    };
    $.fn.regformvalidator = function(conf) {
        var getFieldContainer = function($field, cls) {
            var $fieldContainer = $($field).closest(cls);
            if (!$fieldContainer.length) $fieldContainer = $field;
            return $fieldContainer
        };
        return this.each(function() {
            var $this = $(this),
                opts = $.extend({
                    fieldContainer: undefined,
                    errorContainer: ".err",
                    succeedClass: "succeed",
                    errorClass: "fail",
                    hintClass: "hint",
                    serverSideErrorClass: undefined,
                    errorsMap: {},
                    hintsMap: {},
                    rules: {},
                    scroll: true,
                    changeStatus: function($field, message, cls) {
                        var $fieldContainer = getFieldContainer($field, this.fieldContainer),
                            message, type;
                        $fieldContainer.removeClass(this.errorClass + " " + this.hintClass + " " + this.succeedClass);
                        $fieldContainer.find(this.errorContainer).html(message);
                        $fieldContainer.addClass(cls)
                    }
                }, conf);
            $.each(opts.rules, function(rulename, rule) {
                if (!$.isFunction(rule)) {
                    opts.rules[rulename] = ruleFactory[rule.type](rule.opts)
                }
            });
            var getValue = function($field) {
                if ($field.is(":textall,textarea,select")) {
                    return $field.val()
                }
                if ($field.is(":checkbox:checked,:radio:checked")) {
                    return $field.val()
                }
                return ""
            };
            var validateError = function() {
                validate.call(this)
            };
            var validateHint = function() {
                validate.call(this, true)
            };
            var validate = function(hint) {
                var $field = $(this),
                    value = getValue($field),
                    name = $field.attr("name"),
                    map = opts.errorsMap[name] || opts.errorsMap["*"],
                    hints = opts.hintsMap[name] || opts.hintsMap["*"],
                    gettingValidation = new $.Deferred;
                if (!map && !hints) {
                    return gettingValidation.resolve()
                }
                if (hint && hints) {
                    map = hints.concat(map)
                }(function(value, map, opts, $field, $form, hint) {
                    (function validateNext(i) {
                        var ruleName = map[i],
                            func;
                        if (!ruleName) {
                            opts.changeStatus($field, "", opts.succeedClass);
                            gettingValidation.resolve({
                                $field: $field,
                                error: "",
                                hint: opts.succeedClass
                            });
                            return
                        }
                        func = opts.rules[ruleName];
                        func(value, $form, function(error) {
                            if (error) {
                                opts.changeStatus($field, error, hint && opts.hintClass || opts.errorClass);
                                gettingValidation.resolve({
                                    $field: $field,
                                    error: error,
                                    hint: hint && opts.hintClass || opts.errorClass
                                })
                            } else {
                                validateNext(i + 1)
                            }
                        })
                    })(0)
                })(value, map, opts, $field, $this, hint);
                return gettingValidation.promise()
            };
            var validateAll = function($form) {
                var gettingValidation = new $.Deferred,
                    gettingErrors;
                gettingErrors = $form.find(":textall,textarea,:radio,:checkbox,select").map(function() {
                    return validate.apply(this)
                }).get();
                $.when.apply($, gettingErrors).done(function() {
                    var errors;
                    errors = $.map(arguments, function(obj) {
                        if (obj && obj.error.length) {
                            return obj
                        }
                    });
                    gettingValidation.resolve(errors)
                });
                return gettingValidation.promise()
            };
            var submit = function(evt, validated) {
                var $form = $(this);
                if (validated) {
                    return true
                }
                if ($form.hasClass("submitting")) {
                    return false
                }
                $form.addClass("submitting");
                validateAll($form).done(function(errors) {
                    var $firstError, offset;
                    if (errors.length) {
                        $form.removeClass("submitting");
                        $firstError = getFieldContainer(errors[0].$field, opts.fieldContainer).removeClass("focus");
                        offset = $firstError.offset().top - 50;
                        if (offset < 0) {
                            offset = 0
                        }
                        if (opts.scroll) {
                            $("html, body").animate({
                                scrollTop: offset
                            }, 1e3)
                        }
                        $firstError.focus()
                    } else {
                        $form.trigger("submit", true)
                    }
                });
                return false
            };
            var $fields = $this.find(":input");
            if (opts.serverSideErrorClass) {
                $fields.each(function() {
                    var $field = $(this),
                        name = $field.attr("name"),
                        value = getValue($field),
                        $fieldContainer = getFieldContainer($field, opts.fieldContainer),
                        msg = $fieldContainer.find(opts.errorContainer).html(),
                        ruleName;
                    if (!$fieldContainer.length) $fieldContainer = $field;
                    if (!$fieldContainer.is(opts.serverSideErrorClass) || !name) {
                        return
                    }
                    ruleName = "serverSideValidation_" + name;
                    opts.rules[ruleName] = function(val, $form, cb) {
                        if (val === value) {
                            cb(msg || " ")
                        } else {
                            cb()
                        }
                    };
                    if (opts.errorsMap[name]) {
                        opts.errorsMap[name].push(ruleName)
                    } else {
                        opts.errorsMap[name] = [ruleName]
                    }
                })
            }
            $fields.each(function() {
                var $input = $(this);
                if ($input.is(":textall,textarea")) {
                    $input.on("blur", validateError);
                    $input.on("focus", validateHint);
                    $input.on("keydown", debounce(validateError, 1e3));
                    $input.on("validate-error", validateError);
                    $input.on("validate-hint", validateHint)
                } else if ($input.is(":radio,:checkbox")) {
                    $input.on("click", validateError);
                    $input.on("validate-error", validateError);
                    $input.on("validate-hint", validateHint)
                } else if ($input.is("select")) {
                    $input.on("change focus", validateError);
                    $input.on("validate-error", validateError);
                    $input.on("validate-hint", validateHint)
                }
                if ($input.is(":textall,textarea,:radio,:checkbox,select")) {
                    $input.focus(function() {
                        getFieldContainer($fields, opts.fieldContainer).removeClass("focus");
                        getFieldContainer(this, opts.fieldContainer).addClass("focus")
                    });
                    $input.blur(function() {
                        getFieldContainer(this, opts.fieldContainer).removeClass("focus")
                    })
                }
            });
            $this.on("submit", submit)
        })
    };
    return $
});
DM.EmailLightbox = function(id, params) {
    var rules = {
        mandatoryRecipEmail: {
            type: "regExp",
            opts: {
                re: /^.+$/,
                error: "Please enter the recipient's email address here"
            }
        },
        mandatoryName: {
            type: "regExp",
            opts: {
                re: /^.+$/,
                error: "Please enter your name here"
            }
        },
        mandatoryFromEmail: {
            type: "regExp",
            opts: {
                re: /^.+$/,
                error: "Please enter your email address here"
            }
        },
        emailHelper: {
            type: "regExp",
            opts: {
                re: /^.+$/,
                error: "Please enter a valid email address"
            }
        },
        email: {
            type: "regExp",
            opts: {
                re: /^([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})?$/i,
                error: "Please provide a valid email address here"
            }
        },
        mandatoryRecaptcha: {
            type: "regExp",
            opts: {
                re: /^.+$/,
                error: "Please enter the captcha value here"
            }
        }
    };
    (function($) {
        var $document = $(document);
        $document.ready(function(evt) {
            if (document.location.hash == "#email") {
                $(".js-email").first().click()
            }
        });
        $document.on("ez-modal-before-open", function(evt) {
            var opt = evt.opt;
            if (opt && opt.placement) {
                emailArticle(opt.placement)
            }
        });
        $document.on("ez-modal-after-open", function(evt) {
            var opt = evt.opt;
            if (opt.modalType && opt.modalType === "email-overlay") {
                $.getScript("https://www.google.com/recaptcha/api/js/recaptcha_ajax.js", function(data) {
                    Recaptcha.create(params.captchaKey, "recaptcha", {
                        theme: "custom",
                        custom_theme_widget: "recaptcha"
                    })
                });
                $("#email-modal-overlay").css({
                    "z-index": 10000002
                });
                (function($) {
                    $("#sendArticleEmailForm").regformvalidator({
                        fieldContainer: ".email-fld",
                        errorContainer: ".msg",
                        rules: rules,
                        scroll: false,
                        errorsMap: {
                            forename: ["mandatoryName"],
                            to: ["mandatoryRecipEmail", "email"],
                            from: ["mandatoryFromEmail", "email"],
                            recaptcha_response_field: ["mandatoryRecaptcha"]
                        }
                    })
                })(jQuery)
            }
        });
        $document.on("ez-modal-after-close", function(evt) {
            var opt = evt.opt;
            if (opt.modalType && opt.modalType === "email-overlay") {
                $("#" + opt.modalId).remove()
            }
        });
        $document.on("submit", "#sendArticleEmailForm", function(ajaxRefreshEverytime) {
            $.ajax({
                type: "POST",
                url: $(this).attr("action"),
                data: $("#sendArticleEmailForm").serialize(),
                beforeSend: function(d) {
                    $(".email-loading").addClass("show")
                },
                success: function(d) {
                    if (d.error == "SUCCESS") {
                        $(".email-lightbox").addClass("sent")
                    } else {
                        handle_backend_validation(d)
                    }
                },
                complete: function(d) {
                    $(".email-loading").removeClass("show")
                }
            });
            return false
        });

        function handle_backend_validation(d) {
            $("#sendArticleEmailForm").removeClass("submitting");
            $("." + d.errorField).removeClass("succeed").addClass("fail");
            $("." + d.errorField).find(".msg").html(d.error);
            Recaptcha.create(params.captchaKey, "recaptcha", {
                theme: "custom",
                custom_theme_widget: "recaptcha"
            })
        }
    })(jQuery)
};
DM.MiniMoment = function MiniMoment(initDate) {
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        MINUTE = 60 * 1e3,
        HOUR = 60 * MINUTE;
    var date = initDate || new Date;
    var offset = -date.getTimezoneOffset();
    init();

    function init() {
        if (date.getMinutes()) {
            date = new Date(+date + HOUR)
        }
    }

    function ordinalSuffix(i) {
        var j = i % 10,
            k = i % 100;
        if (j == 1 && k != 11) {
            return i + "st"
        }
        if (j == 2 && k != 12) {
            return i + "nd"
        }
        if (j == 3 && k != 13) {
            return i + "rd"
        }
        return i + "th"
    }
    var moment = {
        minutes: function minutes() {
            return date.getMinutes()
        },
        add: function add(howMany, what) {
            switch (what) {
                case "hours":
                    date = new Date(+date + howMany * HOUR);
                    break;
                case "minutes":
                    date = new Date(+date + howMany * MINUTE);
                    break
            }
            return this
        },
        hours: function hours() {
            return date.getHours()
        },
        toString: function toString() {
            return date
        },
        valueOf: function valueOf() {
            return date
        },
        timeFormat: function timeFormat() {
            var hours = date.getHours();
            return (hours <= 12 ? hours == 0 ? 12 : hours : hours % 12) + (hours < 12 ? "AM" : "PM")
        },
        dateFormat: function dateFormat() {
            return weekdays[date.getDay()] + ", " + months[date.getMonth()] + " " + ordinalSuffix(date.getDate()) + " " + date.getUTCFullYear()
        },
        dateFormatShort: function dateFormatShort() {
            return [weekdays[date.getDay()].substring(0, 3), date.getDate(), months[date.getMonth()].substring(0, 3), date.getUTCFullYear().toString().substring(2, 4)].join(" ")
        },
        addOffset: function addOffset() {
            this.add(offset, "minutes");
            return this
        },
        setDate: function setDate(newDate) {
            date = newDate;
            return this
        },
        clone: function() {
            return DM.MiniMoment(new Date(+date))
        },
        tod: function tod(hours) {
            var m = DM.MiniMoment(new Date(+date + (hours || 0) * HOUR));
            var mod3 = m.hours() % 3;
            return (!mod3 ? m : m.add(3 - mod3, "hours")).timeFormat()
        }
    };
    return moment
};
DM.TravelSearch = function() {
    var UI;
    var constructor = function() {
        var el, depDay, depMon, depYear, cal;
        var init = function(o) {
            Ext.fly("js-submit-button").on("click", validateForm, this);
            el = Ext.get("js-calendar-container");
            if (el) {
                depDay = Ext.get("depdate-day");
                depMon = Ext.get("depdate-month");
                depYear = Ext.get("depdate-year");
                var dateRange = new Date;
                dateRange.setTime(dateRange.getTime() + 1e3 * 60 * 60 * 24 * 3);
                cal = new Ext.ux.DatePicker("js-calendar-container", {
                    handler: mySelectHandler,
                    value: dateRange,
                    showToday: false
                });
                Ext.fly("js-dateFromLink").on("click", cal.show, cal);
                var c = Ext.get("js-children-1");
                c.on("change", showChildren, this);
                c.on("keyup", showChildren, this);
                setDepartureDate();
                Ext.get("js-to").on("focus", function(e, t) {
                    t.value = ""
                }, this, {
                    single: true
                })
            }
        };
        var mySelectHandler = function(c, d) {
            cal.el.hide();
            depDay.dom.value = d.getDate();
            depMon.dom.value = d.getMonth() + 1;
            depYear.dom.value = d.getFullYear()
        };
        var validateForm = function(e) {
            var blockSub1 = true;
            var blockSub2 = true;
            var errDep = Ext.get("js-error-departure"),
                inputDep = Ext.get("js-from").dom,
                errDest = Ext.get("js-error-destination"),
                inputDest = Ext.get("js-to").dom;
            if (inputDep.value == "UNDEFINED") {
                errDep.dom.innerHTML = "Please select your departure airport";
                errDep.show()
            } else {
                errDep.hide();
                blockSub1 = false
            }
            if (inputDest.value.length < 1 || inputDest.value == "Please type your destination") {
                errDest.dom.innerHTML = "Please type in your destination or click 'More search options' to see the list of destinations available";
                errDest.show()
            } else {
                errDest.hide();
                blockSub2 = false
            }(blockSub1 || blockSub2) && e.preventDefault()
        };
        var setDepartureDate = function() {
            var dateRange = new Date;
            dateRange.setTime(dateRange.getTime() + 1e3 * 60 * 60 * 24 * 3);
            depDay.dom.value = dateRange.getDate();
            depMon.dom.value = dateRange.getMonth() + 1;
            depYear.dom.value = dateRange.getFullYear()
        };
        var showChildren = function(numChildren) {
            var elem, c = Ext.get("js-childages");
            if (numChildren > 0) {
                c.show();
                var l = 5;
                while (l > 0) {
                    --l;
                    elem = Ext.get("js-childage-" + l);
                    if (l > numChildren) elem.hide();
                    else elem.show()
                }
            } else {
                c.hide()
            }
        };
        return {
            init: init
        }
    };
    return {
        getInstance: function() {
            if (!UI) {
                UI = constructor()
            }
            return UI
        }
    }
}();
DM.TimSearch = function(id, conf) {
    Ext.apply(this, conf);
    this.init({
        id: id
    })
};
DM.TimSearch.prototype = {
    _el: null,
    init: function(o) {
        this._el = Ext.get(o.id);
        if (!this._el) {
            return
        }
        this._el.on("submit", this._onSubmit, this)
    },
    _onSubmit: function(e) {
        var checkedEl = this._el.select("input[name=searchWhere]:checked").item(0),
            redirectUrl;
        if (checkedEl && checkedEl.dom.value === "company" && checkedEl.dom.checked) {
            e.preventDefault();
            redirectUrl = this.link + this._el.select("input[name=searchPhrase]").item(0).dom.value;
            this._el.dom.target && this._el.dom.target === "_top" ? window.parent.location = redirectUrl : window.location = redirectUrl
        }
    }
};
DM.SCExternalLinks = function(id, params) {
    $(document.getElementById(id)).find("a.js-tl").on("click", function() {
        DM.pageEvents.fireEvent(DM.pageEvents.PAGE_EXTERNAL_LINK_CLICKED, {
            pageMetadata: DM.getPageMetadata(),
            target: this,
            value: params.value
        })
    })
};
(function(Ext) {
    function onDomReady() {
        function updateOnHover(event, target, options) {
            var item = Ext.get(this).child("span");
            event.type == "mouseover" ? updateOnMouseover(item, options.onPos) : updateOnMouseout(item, -options.styleRight)
        }

        function updatePosition(item, position) {
            Ext.fly(item).animate({
                right: {
                    to: position
                }
            }, .45)
        }

        function updateOnMouseover(item, position) {
            updatePosition(item, position)
        }

        function updateOnMouseout(item, position) {
            updatePosition(item, position)
        }

        function addHoverHandler(item) {
            var linkVideo = item.child("span");
            if (linkVideo !== null) {
                this.styleRight = /(\d+)/.exec(linkVideo.getStyle("right"))[0];
                item.on({
                    mouseover: {
                        fn: updateOnHover,
                        onPos: 0,
                        styleRight: this.styleRight
                    },
                    mouseout: {
                        fn: updateOnHover,
                        onPos: 0,
                        styleRight: this.styleRight
                    }
                })
            }
        }
        Ext.select(".videoplayer-preview a").each(function(item) {
            addHoverHandler(item)
        })
    }
    Ext.onReady(onDomReady, this, {
        single: true
    })
})(Ext);
(function(DM, Ext) {
    DM.NextStory = {
        init: function(o) {
            var el = Ext.get(o.id);
            if (!el) return;
            this.el = el;
            Ext.EventManager.on(window, "scroll", this.toggle, this)
        },
        toggle: function() {
            var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            this.showAt = this.showAt || Ext.get(Ext.query("div[class=shareArticles]")[0]);
            this.container = this.container || Ext.get("content");
            if (this.showAt) {
                if (Ext.getBody().getScroll().top + h >= this.showAt.getY() && h >= this.el.getHeight() && this.container.getX() >= this.el.getWidth() + 15 && w >= this.el.getHeight() && Ext.getBody().getStyle("background-image") == "none") {
                    this.el.addClass("show")
                } else {
                    this.el.removeClass("show")
                }
            }
        }
    }
})(DM, Ext);
(function($) {
    DM.later(["DOM_READY"], function() {
        var $bydaywrapper = $(".articles_by_day_wrapper");
        if (!$bydaywrapper.length) {
            return
        }
        $bydaywrapper.find(".checkbox input").change(function() {
            if ($(this).attr("id") == "all") {
                $bydaywrapper.find(".checkbox input").prop("checked", $(this).prop("checked"))
            } else if (!$(this).prop("checked")) {
                $bydaywrapper.find("#all").prop("checked", false)
            }
            $bydaywrapper.find(".checkbox input").each(function() {
                var value = $(this).attr("value"),
                    sel = value === "" ? "li" : "li." + value;
                if ($(this).prop("checked")) {
                    $bydaywrapper.find(sel).show()
                } else {
                    $bydaywrapper.find(sel).hide()
                }
            })
        })
    })
})(jQuery);
! function(e) {
    function t(n) {
        if (o[n]) return o[n].exports;
        var i = o[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    var o = {};
    t.m = e, t.c = o, t.i = function(e) {
        return e
    }, t.d = function(e, o, n) {
        t.o(e, o) || Object.defineProperty(e, o, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, t.n = function(e) {
        var o = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(o, "a", o), o
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 13)
}([, function(e, t, o) {
    "use strict";
    var n = o(12),
        i = o.n(n);
    DM.RC.FB = function(e) {
        function t() {
            var t = e(".fbShareWhatsThis"),
                l = e(".fbShareConfirmBox");
            if (t.appendTo(e("body")).ezmodal().on("ez-modal-after-close", function() {
                    "true" === DM.UD.publishPermission && DM.UD.publishPermission || o(!1)
                }), DM.UD && DM.UD.displayName) {
                var c = document.getElementById("readerCommentsUsername");
                c && (c.innerHTML = "(" + DM.UD.displayName + ")", c.classList.add("displayUsername"))
            }
            l.appendTo(e("body")).ezmodal(), e(".ez-modal-close, .js-close").click(function() {
                l.ezmodal("close"), "true" === DM.UD.publishPermission && DM.UD.publishPermission || o(!1)
            }), e(".whatsThis").click(function() {
                t.ezmodal("open")
            }), e(p).click(function() {
                r(e(this)[0]), m(p.checked)
            }), p.checked = i.a.get("publishPermissionCheckbox");
            var u = DM.isLoggedIn && !DM.UD.fbUserName ? "addAccountAndLogin" : "noFbMergeNeeded";
            e(".fbConfirm").click(function() {
                if (p.checked && ("true" !== DM.UD.publishPermission || !DM.UD.publishPermission)) {
                    DM.pageEvents.fireEvent(DM.pageEvents.SOCIAL_SHARE_COMMENTS, {
                        name: "fbConfirm/click"
                    }), a();
                    s("/registration/p/signin/social.html", {
                        targetUrl: n(window.location.href.replace(/\#[^\?&]*/, "") + "#newcomment", "requestPublishPermission", "true"),
                        "social-provider": "facebook",
                        "social-permissions": "publish_actions,email",
                        param: u
                    })
                }
            })
        }

        function o(e) {
            p && (p.checked = e), m("false")
        }

        function n(e, t, o) {
            return e.replace(new RegExp("([?&]" + t + "(?=[=&#]|$)[^#&]*|(?=#|$))"), "&" + t + "=" + encodeURIComponent(o)).replace(/^([^?&]+)&/, "$1?")
        }

        function s(e, t, o) {
            o = o || "post";
            var n = document.createElement("form");
            n._submit_function_ = n.submit, n.setAttribute("method", o), n.setAttribute("action", e);
            for (var i in t) {
                var s = document.createElement("input");
                s.setAttribute("type", "hidden"), s.setAttribute("name", i), s.setAttribute("value", t[i]), n.appendChild(s)
            }
            document.body.appendChild(n), n._submit_function_()
        }

        function a() {
            var e = d.get("message"),
                t = e.dom.value;
            i.a.set("commentMessageToSaveStorage", t)
        }

        function r(t) {
            !t.checked || "true" === DM.UD.publishPermission && DM.UD.publishPermission || e(".fbShareConfirmBox").ezmodal("open")
        }

        function l() {
            var e = d.get("message"),
                t = i.a.get("commentMessageToSaveStorage");
            t && e && (e.dom.value = t, i.a.set("commentMessageToSaveStorage", ""))
        }

        function m(e) {
            String(e) !== i.a.get("publishPermissionCheckbox") && i.a.set("publishPermissionCheckbox", String(e))
        }

        function c() {
            p.checked = "true" === i.a.get("publishPermissionCheckbox") && "true" === DM.UD.publishPermission
        }
        var u = {},
            d = window.Ext,
            p = void 0;
        return u.initialize = function() {
            "#_=_" === window.location.hash && (window.location.hash = "comments"), (p = document.getElementById("handlePostToFacebookInput")) && (l(), t(), c())
        }, u.isHandlePostToFacebookSelected = function() {
            return Boolean(p && p.checked)
        }, u
    }(window.jQuery)
}, function(e, t) {
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    DM.Pagination = function() {
        function e() {
            function e(e) {
                e.stopEvent();
                var t = e.getTarget("A", 5);
                t && (i.page = parseInt(t.getAttribute("rel")), i.offset = parseInt(i.page - 1) * i.maxResults, n(i))
            }
            var t = void 0,
                n = void 0,
                i = {
                    maxResults: 100,
                    offset: 0,
                    page: 1,
                    showPageNumber: !0,
                    showPagingOptions: !1,
                    greyStyle: !1,
                    numberOfPageButtonsToShow: 10
                };
            return {
                init: function(o, s) {
                    n = o, Ext.apply(i, s), t = Ext.query("div.pagination-container", "content"), Ext.each(t, function(t) {
                        Ext.fly(t).on("click", e)
                    })
                },
                doPagination: function(e) {
                    if ("object" === (void 0 === e ? "undefined" : o(e))) {
                        for (var n = parseInt(e.max), s = parseInt(e.offset), a = parseInt(e.total), r = i.numberOfPageButtonsToShow, l = Math.ceil(a / n), m = parseInt(s / n), c = 1 + m, u = [], d = [], p = 1; p < r && (c > 1 && c - p > 0 && u.push(c - p), !(u.length + d.length >= r - 1)) && (c + p <= l && d.push(c + p), !(u.length + d.length >= r - 1)); p++);
                        if (l > 1 && t.length > 0) {
                            var g = "",
                                f = ["", "", "", "", ""],
                                h = "link-ccox",
                                v = "<span>Page</span>";
                            i.showPageNumber && (g += '<div class="sch-pagesummary">Page ' + c + " of " + l + "</div>"), c > 1 && (f[0] = '<a href="#" rel="' + (c - 1) + '">Previous</a>');
                            for (var p = u.length - 1; p >= 0; p--) f[1] += '<a class="page-number bdrgr3" href="#" rel="' + u[p] + '">' + u[p] + "</a>";
                            f[2] = '<span class="page-number bdrgr3 bogr2">' + c + "</span>";
                            for (var p = 0; p < d.length; p++) f[3] += '<a class="page-number bdrgr3" href="#" rel="' + d[p] + '">' + d[p] + "</a>";
                            c < l && (f[4] = '<a href="#" rel="' + (c + 1) + '">Next</a>'), i.greyStyle && (h = "link-gr5ox", v = ""), g += '<div class="pagination bdrcc ' + h + ' linkro-box"><div class="float-r">' + v + f.join("") + "</div></div>";
                            for (var p = 0, b = t.length; p < b; p++) t[p].innerHTML = g, Ext.fly(t[p]).setStyle("display", "block")
                        } else this.hide()
                    }
                },
                hide: function() {
                    for (var e = 0, o = t.length; e < o; e++) Ext.fly(t[e]).setStyle("display", "none")
                }
            }
        }
        var t = void 0;
        return {
            getInstance: function() {
                return t || (t = e()), t
            }
        }
    }()
}, function(e, t) {
    DM.RCTabs = Ext.extend(Ext.util.Observable, {
        linkHk: ".js-links",
        activeHk: "js-active",
        tabsQuery: ".dm-tab",
        tabOffClass: null,
        tabOnClass: null,
        constructor: function(e, t) {
            DM.RCTabs.superclass.constructor.call(this), t && Ext.apply(this, t), this.el = Ext.get(e), Ext.fly(this.el.query(this.linkHk)[0]).on("click", this._clickHandler, this, {
                preventDefault: !0
            }), this._tabs = this.el.query(this.tabsQuery)
        },
        _clickHandler: function(e) {},
        _selectTab: function(e) {
            this.reset(), this.tab(e)
        },
        reset: function() {
            for (var e = void 0, t = this._tabs.length; t > 0;) --t, e = Ext.get(this._tabs[t]), e.addClass(this.tabOffClass).removeClass(this.tabOnClass).removeClass(this.activeHk)
        },
        tab: function(e) {
            Ext.fly(e).removeClass(this.tabOffClass).addClass(this.tabOnClass).addClass(this.activeHk)
        }
    })
}, function(module, exports) {
    DM.ReaderComments = function() {
        var UI = void 0,
            RCTemplates = DM.RC.Templates,
            RCUtils = DM.RC.Utils,
            constructor = function constructor() {
                function inlineSubmissionMessage(e, t, o) {
                    var n = t.up(".comment-replies") || t,
                        i = {};
                    switch (clearInlineSubmissionMessage(), e) {
                        case "success":
                            o = moderated ? "Thanks for sharing your comment. Comments on this article are moderated. Please be patient for your comment to appear." : "Thanks for sharing your comment!";
                            break;
                        case "success-fb-share":
                            "true" === DM.UD.publishPermission && "null" !== DM.UD.fbUserName ? (e = "success", i.fbMessage = "Your comment will also be posted to the Facebook account for " + DM.UD.fbUserName, i.completeMessage = '<div class="submission-feedback-fbmessage"><p>' + i.fbMessage + "</p></div>", o = moderated ? "Thanks for sharing your comment. Comments on this article are moderated. Please be patient for your comment to appear." : "Thanks for sharing your comment. It will appear shortly on MailOnline.") : "true" !== DM.UD.publishPermission && (e = "error", o = "Something has gone wrong with your Facebook user and your Daily Mail Username, sorry! You have posted as your normal Daily Mail User.");
                            break;
                        case "pending":
                            o = "Sending...";
                            break;
                        case "invalid":
                            o || (o = "Invalid comment");
                            break;
                        case "error":
                            o = "Apologies - something went wrong. Please try later."
                    }
                    o && Ext.DomHelper.insertAfter(n, RCTemplates.inlineSubmissionResponse.apply({
                        message: o,
                        type: e,
                        fbMessage: i.completeMessage
                    }))
                }

                function clearInlineSubmissionMessage() {
                    Ext.each(Ext.get("reader-comments").query(".submission-message"), function(e) {
                        Ext.fly(e).remove()
                    })
                }

                function calcVoteRatings(e) {
                    return {
                        up: (e.voteCount + e.voteRating) / 2,
                        down: (e.voteCount - e.voteRating) / 2
                    }
                }

                function rejectedComment() {
                    var e = Ext.fly("js-comments").getWidth(),
                        t = e >= 700 ? "" : e < 500 ? 'style="margin-top: 2px !important; font-size: 12px !important;"' : 'style="margin-top: 4px !important;"',
                        o = '<div id="comment-not-found" class="bogr2 bogr3 cleared comment-post"><div class="rejected-left"></div><div class="rejected-body"><p class="rejected-body-text" ' + t + '>Sorry. The content of this comment did not conform to our <a href="/home/house_rules.html">house rules</a>, and it has now been removed by our moderators.</p></div><div class="rejected-right"></div></div>';
                    Ext.DomHelper.insertFirst("js-comments", o), Ext.fly("comment-not-found").child(".rejected-right").on({
                        click: function() {
                            Ext.fly("comment-not-found").remove()
                        }
                    })
                }

                function getComment(e) {
                    if (e) return Ext.get(e).up(".reply") || Ext.get(e).up(".comment")
                }

                function getCommentData(e) {
                    var t = getComment(e);
                    if (t) {
                        var o = t.hasClass("reply") ? ".reply-text" : ".comment-text",
                            n = t.id.substring(8),
                            i = DMS.domain + "/reader-comments/p/comment/link/" + n,
                            s = t.child(o).dom.innerHTML,
                            a = t.child(".js-usr");
                        return {
                            commentId: n,
                            commentLink: i,
                            commentBody: s,
                            commenterName: a ? a.dom.innerHTML : Ext.query(".commenter-name")[0].innerHTML.replace("'s Comments", ""),
                            commentUrl: i,
                            abuseLink: "/home/reportAbuseInComment.html?articleId=" + t.assetId + "&commentId=" + t.id
                        }
                    }
                }

                function onCommentMouseOver(e, t, o) {
                    var n = Ext.get(e.getTarget(".comment"));
                    n && (n.addClass("hovered"), DMS.RC.updateHoverElements())
                }

                function onCommentMouseLeave(e, t, o) {
                    var n = Ext.get(e.getTarget(".comment"));
                    n && (disableCommentFeatures(n), n.removeClass("hovered"), DMS.RC.updateHoverElements())
                }

                function onReplyMouseOver(e, t, o) {
                    var n = Ext.get(e.getTarget(".reply"));
                    n && (disableCommentFeatures(Ext.get(Ext.query(".comment.hovered", Ext.getDom("js-comment"))[0])), n.addClass("hovered"), DMS.RC.updateHoverElements())
                }

                function onReplyMouseLeave(e, t, o) {
                    var n = Ext.get(e.getTarget(".reply"));
                    n && (disableCommentFeatures(n), n.removeClass("hovered"), DMS.RC.updateHoverElements())
                }

                function disableCommentFeatures(e) {
                    if (e) {
                        var t = Ext.get(e);
                        t.child(".shareComment").hide(), t.child(".reportAbuseLink").hide()
                    }
                }

                function initComments() {
                    Ext.each(Ext.query(".comment", Ext.getDom("js-comments")), function(e) {
                        initComment(Ext.get(e))
                    }), document.onkeydown = function(e) {
                        27 == (e ? e.which || e.keyCode : void 0) && DM.Lightbox.getInstance() && closeCopyCommentLinkLightbox()
                    }, Ext.getBody().on("click", closeCopyCommentLinkLightbox)
                }

                function initFurniture() {
                    var e = Ext.get("message"),
                        t = Ext.get("addYourCommentButton");
                    if (e) t.on("click", function() {
                        e.focus()
                    });
                    else {
                        var o = Ext.get("addYourCommentButton");
                        o && o.hide()
                    }
                }

                function toggleCssClass(e, t, o) {
                    o ? e.addClass(t) : e.removeClass(t)
                }

                function initCommentStyle(e) {
                    if (!e.hasClass("reply")) {
                        var t = 0 == e.query(".reply").length,
                            o = e.query("textarea").length > 0;
                        toggleCssClass(e, "no-replies", t), toggleCssClass(e, "contains-reply-textarea", o)
                    }
                }

                function initComment(e) {
                    if (e) {
                        initCommentStyle(e);
                        var t = e.child(".shareComment");
                        t.on({
                            click: DMS.RC.shareComment
                        }), t.down(".copyCommentLink").on({
                            click: function(e, t) {
                                copyCommentLinkClicked(e, t, !1)
                            }
                        }), t.down(".shareExpansionAnchor").on({
                            click: function(e, t) {
                                copyCommentLinkClicked(e, t, !0)
                            }
                        }), e.hasClass("reply") ? e.hover(onReplyMouseOver, onReplyMouseLeave) : (e.hover(onCommentMouseOver, onCommentMouseLeave), Ext.each(Ext.query(".reply", Ext.getDom(e)), function(e) {
                            initComment(Ext.get(e))
                        }))
                    }
                }

                function isCopyLinkLightbox(e) {
                    var t = Ext.get(e);
                    return t && ("copyLinkLightboxArrow" == t.id || "copyLinkLightbox" == t.id || null != Ext.get(e).up("#copyLinkLightbox"))
                }

                function closeCopyCommentLinkLightbox(e, t) {
                    isCopyLinkLightbox(t) || (Ext.get("copyLinkLightbox").hide(), Ext.get("copyLinkLightboxArrow").hide())
                }

                function copyCommentLinkClicked(e, t, o) {
                    var n = getCommentData(t);
                    if (n) {
                        var i = Ext.get(t),
                            s = Ext.get("copyLinkLightbox"),
                            a = Ext.get("copyLinkLightboxArrow"),
                            r = void 0,
                            l = void 0,
                            m = void 0;
                        Ext.get("copyLinkLightbox").show(), Ext.get("copyLinkLightboxArrow").show(), o ? (s.dom.innerHTML = '<div class="socialButtons">' + DMS.RC.SOCIAL_ELEMENTS_HTML + "</div>" + RCTemplates.copyCommentLinkTemplate.apply({
                            commentLink: n.commentUrl
                        }), s.removeAllListeners(), s.on({
                            click: function(e, t) {
                                DMS.RC.shareComment(e, t, n)
                            }
                        })) : s.dom.innerHTML = RCTemplates.copyCommentLinkTemplate.apply({
                            commentLink: n.commentUrl
                        }), r = i.getLeft() - s.getWidth() / 2 + i.getWidth() / 2, l = i.getTop() + i.getHeight(), m = i.getLeft(), a.setLocation(m, l), s.setLocation(r, l + 10), Ext.get("copyLinkInput").focus(), e.stopPropagation()
                    }
                }

                function replySubmitHandler(e) {
                    var t = Ext.get(e),
                        o = Ext.get("formAssetId"),
                        n = t.parent().select("a").elements[0].name.split("reply-form-")[1],
                        i = Ext.get(t.parent().select(".textarea-input").elements[0]);
                    t.on("click", function() {
                        var e = i.dom.value;
                        if (validateMessage(i.dom)) {
                            RCUtils.disableButton(i.dom), inlineSubmissionMessage("pending", i.parent());
                            var t = {
                                assetId: o.dom.value,
                                message: e,
                                replyTo: n,
                                source: "desktop"
                            };
                            Ext.Ajax.request({
                                method: "POST",
                                url: "/reader-comments/p/comment/postCommentInline",
                                params: t,
                                success: function(s) {
                                    var a = JSON.parse(s.responseText);
                                    if ("success" === a.status) inlineSubmissionMessage("success", i.parent()), i.up(".reply-form").remove();
                                    else if ("error" === a.status && "login" === a.reason) {
                                        RCUtils.enableButton(i.dom);
                                        var r = new Date;
                                        r.setHours(r.getHours() + 1), commentAssetToSubmitCookie = o.dom.value, commentMessageToSubmitCookie = e, commentReplyToSubmitCookie = n, clearInlineSubmissionMessage(), DM.setCookie("commentAssetToSubmitCookie", commentAssetToSubmitCookie, r, "/"), DM.setCookie("commentMessageToSubmitCookie", commentMessageToSubmitCookie, r, "/"), DM.setCookie("commentReplyToSubmitCookie", commentReplyToSubmitCookie, r, "/"), window.location.replace("/registration/login.html?usr=1&targetUrl=" + encodeURIComponent(window.location.href))
                                    } else commentSubmissionError(t, a, i)
                                },
                                failure: function(e, o) {
                                    commentSubmissionError(t, e, i)
                                }
                            })
                        }
                    })
                }

                function validateMessage(e) {
                    var t = function() {
                            return "message" != e.id ? Ext.get(e).parent() : RCUtils.getSubmitButton(e).up(".post-comment-form")
                        }(),
                        o = e.value && e.value.length > COMMENT_MAX_LENGTH,
                        n = "" == e.value || e.value == e.title || o;
                    return o ? inlineSubmissionMessage("invalid", t, "Sorry! Your comment is " + (e.value.length - COMMENT_MAX_LENGTH) + " characters too long.") : clearInlineSubmissionMessage(t), n ? RCUtils.disableButton(e) : RCUtils.enableButton(e), !n
                }

                function initReplyInput(e) {
                    var t = e.child(".textarea-input");
                    validateMessage(t.dom), t.on("blur", function(e, t) {
                        "" == t.value && Ext.get(t).up(".textarea-holder").remove()
                    }), t.on("focus", function(t, o) {
                        validateMessage(o), clearInlineSubmissionMessage(e)
                    }), t.on("keyup", function(e, t) {
                        validateMessage(t)
                    })
                }

                function initCommentInput(e) {
                    var t = e.child(".textarea-input");
                    validateMessage(t.dom), t.on("blur", function(e, t) {
                        "" == t.value && (t.value = t.title)
                    }), t.on("focus", function(e, t) {
                        t.value == t.title && (t.value = ""), validateMessage(t), clearInlineSubmissionMessage()
                    }), t.on("keyup", function(e, t) {
                        validateMessage(t, !0)
                    })
                }

                function setFocus(e, t) {
                    var o = window.DM && window.DM.molFeDomHelpers && window.DM.molFeDomHelpers.scrollUtils;
                    o && o.scrollTo(0, o.getScrollTop(e) - 100), setTimeout(function() {
                        t.focus()
                    }, 50)
                }

                function initCommentForm() {
                    var e = Ext.get("readerCommentsCommand");
                    e && (initCommentInput(e.down(".comment-form")), e.child(".btn-clear").on("click", function(e, t) {
                        var o = Ext.get(t).parent().prev(".textarea-holder").down(".textarea-input");
                        o.dom.value = "", validateMessage(o), o.focus()
                    }))
                }

                function openReplyInput(e, t) {
                    if (e.child(".textarea-input")) {
                        var o = Ext.get(e.child(".anchor-reply-comment").dom.getAttribute("rel"));
                        t && setFocus(o, o.next(".textarea-input"))
                    } else {
                        var n = e.child(".rating").dom.getAttribute("rel"),
                            i = Ext.DomHelper.append(e.child(".comment-replies"), RCTemplates.replyFormTemplate.apply({
                                id: n
                            }), !0);
                        initReplyInput(i), replySubmitHandler(i.child(".js-reply-submit")), t && i.child(".textarea-input").focus(), initCommentStyle(Ext.get("comment-" + n))
                    }
                }

                function initReplyForms() {
                    var e = Ext.getDom("js-comments");
                    Ext.each(Ext.query(".reply-form", e), function(e) {
                        initReplyInput(Ext.get(e))
                    }), Ext.each(Ext.query(".js-reply-submit", e), function(e) {
                        replySubmitHandler(e)
                    }), Ext.each(Ext.query(".js-newcomment", e), function(e) {
                        Ext.get(e).on("click", function() {
                            clearInlineSubmissionMessage(), setFocus(Ext.get("newcomment"), Ext.get("message"))
                        })
                    }), Ext.each(Ext.query(".js-reply.anchor-reply-comment", e), function(e) {
                        var t = Ext.get(e);
                        t.on("click", function() {
                            openReplyInput(t.up(".comment"), !0)
                        })
                    }), Ext.each(Ext.query(".js-reply.anchor-reply-reply", e), function(e) {
                        Ext.get(e).on("click", function() {
                            var t = Ext.get(e.getAttribute("rel"));
                            setFocus(t, t.next(".textarea-input"))
                        })
                    })
                }

                function initReaderComments(e) {
                    var t = e.params || {},
                        o = null,
                        n = null,
                        i = void 0;
                    Ext.apply(Ext.Fx, {
                        fadeInS: function(e) {
                            e = e || {};
                            var t = this,
                                o = t.dom,
                                n = e.endOpacity || 1;
                            return Ext.isIE ? (t.dom.style.opacity = 1, t.dom.style.filter = "alpha(opacity=100)") : t.queueFx(e, function() {
                                Ext.fly(o).setOpacity(e.startOpacity || 0), Ext.fly(o).fixDisplay(), o.style.visibility = "visible", arguments.callee.anim = Ext.fly(o).fxanim({
                                    opacity: {
                                        to: n
                                    }
                                }, e, null, .5, "easeOut", function() {
                                    Ext.fly(o).afterFx(e)
                                })
                            }), t
                        }
                    }), Ext.Element.addMethods(Ext.Fx), DMS.RC = DMS.RC || {}, totalComments = t.total || 0, mode = t.mode || "article", moderated = t.moderated, ratingsCookie = DM.getCookie("commentRatings"), abuseCookie = DM.getCookie("reportAbuse"), commentAssetToSubmitCookie = DM.getCookie("commentAssetToSubmitCookie"), commentMessageToSubmitCookie = DM.getCookie("commentMessageToSubmitCookie"), commentReplyToSubmitCookie = DM.getCookie("commentReplyToSubmitCookie"), allowNewComments = t.allowNewComments;
                    var s = Ext.get(e.id);
                    if (s && (rc = s.dom), rc) {
                        "article" === mode ? (o = new RegExp("article-id-([0-9]+)").exec(rc.className), articleId = o ? o[1] : null) : "user" === mode && (n = new RegExp("user-id-([0-9]+)").exec(rc.className), userId = n ? n[1] : null), defaultPaginationConfig = {
                            maxResults: Ext.urlDecode(window.location.search.substring(1)).max || 100,
                            page: 1,
                            offset: Ext.urlDecode(window.location.search.substring(1)).offset || 0,
                            reply: Ext.urlDecode(window.location.search.substring(1)).reply || null,
                            articleId: articleId,
                            userId: userId,
                            greyStyle: !0,
                            mode: mode,
                            numberOfPageButtonsToShow: 10
                        }, "user" === mode && (period = t.period || "week", defaultPaginationConfig.period = period, defaultPaginationConfig.numberOfPageButtonsToShow = 5), DM.Pagination.getInstance().init(loadComments, defaultPaginationConfig), Ext.get("reader-comments").on("click", readerCommentsHandler, this), checkCookies();
                        if (Ext.get("rc-tabs") && (tabs = new DM.RCTabs("reader-comments", {
                                tabOnClass: ["ow-igr5-bx wogr5", "link-wox", "dm-tab-on"],
                                tabOffClass: ["ow-igr2-bx", "xogr2", "link-gr5ox"],
                                tabQuery: "li",
                                _clickHandler: tabHandler
                            })), buttonLabel = Ext.select(".view-more-container"), Ext.select(".pagination-container-bottom, .view-more-container-bottom a").on("click", function() {
                                "#comments" !== window.location.hash ? window.location.hash = "#comments" : window.location.hash = "#reader-comments"
                            }, {
                                delegate: "a"
                            }), "article" === mode && (i = window.location.hash.substring(1).match(/(comment\-\d+)/), i = i ? i[1] : null)) {
                            viewAll = !0, setButtonLabel("View " + tabNames[tabIndex] + " " + maxComments), DM.Pagination.getInstance().doPagination({
                                max: 100,
                                offset: t.offset || 0,
                                total: totalComments
                            });
                            var a = Ext.fly(i);
                            a && a.replaceClass("bogr1", "comment-selected")
                        }
                        setFormValuesFromCookie(), "article" === mode && initReplyForms()
                    }
                    window.location.hash.match(/#comment-not-found/) && rejectedComment(), Ext.get("report-abuse-comfirm") && updateAbuseCookie(Ext.get("report-abuse-comfirm").dom.className.split("|")[0]), initCommentForm(), initComments(), initFurniture(), window.RCdefferedTab ? tabHandler(window.RCdefferedTab) : (viewAll = !Ext.urlDecode(window.location.search.substring(1)).offset || !Ext.urlDecode(window.location.search.substring(1)).max, toggleViewAll(defaultPaginationConfig))
                }
                DM.RC.initialize(), DM.RC.FB.initialize();
                var COMMENT_MAX_LENGTH = 1e3,
                    MAX_COMMENTS = 10,
                    MAX_COOKIE_RATINGS = 50,
                    REPLIES_INITIAL_NUMBER = 2,
                    REPLIES_PAGINATION_SIZE = 25,
                    defaultPaginationConfig = void 0,
                    maxComments = MAX_COMMENTS,
                    totalComments = 0,
                    offset = 0,
                    viewAll = !1,
                    allowNewComments = void 0,
                    rc = void 0,
                    tabs = void 0,
                    tabCommands = ["newest", "oldest", "bestRated", "worstRated"],
                    tabNames = ["newest", "oldest", "best", "worst"],
                    tabIndex = 0,
                    buttonLabel = void 0,
                    ratingsCookie = void 0,
                    abuseCookie = void 0,
                    commentAssetToSubmitCookie = void 0,
                    commentMessageToSubmitCookie = void 0,
                    commentReplyToSubmitCookie = void 0,
                    articleId = void 0,
                    userId = void 0,
                    period = void 0,
                    mode = void 0,
                    moderated = void 0,
                    getShoutChannels = function() {
                        try {
                            return window.DM.SHOUT && window.DM.SHOUT.shoutChannels && JSON.parse(window.DM.SHOUT.shoutChannels)
                        } catch (e) {
                            return logger.error("Unable to parse rc shout config: ", e), !1
                        }
                    },
                    loadComments = function(e) {
                        var t = "?max=" + e.maxResults,
                            o = tabCommands[tabIndex];
                        if (e.offset && (t += "&offset=" + e.offset), e.period && (t += "&period=" + e.period), "newest" == o ? t += "&order=desc" : "oldest" == o ? t += "&order=asc" : "bestRated" == o ? t += "&sort=voteRating&order=desc" : "worstRated" == o && (t += "&sort=voteRating&order=asc"), setButtonLabel("Loading..."), DM.RC.spinner("show"), "article" === e.mode) {
                            var n = getShoutChannels(),
                                i = n ? n.disabledChannels : [],
                                s = -1 == i.indexOf(window.PageCriteria.subchannel);
                            window.DM.SHOUT && !window.DM.SHOUT.isOldArticle && !n.disabledMolShout && s && (t += "&rcCache=shout"), Ext.Ajax.request({
                                url: "/reader-comments/p/asset/readcomments/" + articleId + t,
                                callback: loadCommentsCallback,
                                method: "get"
                            })
                        } else "user" === e.mode && Ext.Ajax.request({
                            url: "/reader-comments/p/user/readcomments/" + userId + t,
                            callback: loadCommentsCallback,
                            method: "get"
                        })
                    },
                    createCommentHtml = function e(t, o) {
                        function n(e) {
                            for (var t = "", o = void 0, n = 0; n < e.length; n++) o = n >= e.length - 1 || n >= 5, t += e[n] + (o ? "" : "/");
                            return t.toString()
                        }
                        var i = calcVoteRatings(t),
                            s = "",
                            a = o ? "reply" : "comment";
                        return "reply" != a && t.replies.comments.length > 0 && (t.replies.totalCount > REPLIES_INITIAL_NUMBER && (s += '<div class="more-replies-container"><p><span class="number-of-replies">' + REPLIES_INITIAL_NUMBER + " of " + t.replies.totalCount + ' replies</span><a class="more-replies" rel="' + t.id + '">' + (t.replies.totalCount > REPLIES_INITIAL_NUMBER + REPLIES_PAGINATION_SIZE ? "See next " + REPLIES_PAGINATION_SIZE + " replies" : "See all replies") + '<span class="rc-down-arrow"></span></a></p></div>'), Ext.each(t.replies.comments, function(o) {
                            s += e(formatUserInfo(o), t.id)
                        })), RCTemplates.articleCommentTemplate.apply({
                            commentId: t.id,
                            type: a,
                            body: t.message,
                            votesUpValue: i.up,
                            votesDownValue: i.down,
                            ratingClass: getRatingClass(t.id),
                            avatarSide: o ? 35 : 55,
                            userProfileUrl: getUserProfileUrl(t),
                            userInfo: '<a href="' + getUserProfileUrl(t) + '" class="js-usr">' + t.userAlias + "</a>, " + t.userLocation + t.formattedDateAndTime,
                            repliesHtml: s,
                            shareHTML: DMS.RC.SHARE_ELEMENTS_HTML,
                            voteButtonText: "" == getRatingClass(t.id) ? "Click to rate" : "Rated",
                            newCommentButtonHTML: allowNewComments ? o ? "" : RCTemplates.newCommentButtonTemplate.apply() : "",
                            replyButtonHTML: allowNewComments && "reply" != a ? RCTemplates.replyButtonTemplate.apply({
                                type: a,
                                id: o || t.id
                            }) : "",
                            abuseLink: "/home/reportAbuseInComment.html?articleId=" + t.assetId + "&commentId=" + t.id,
                            userProfileImageUrl: function(e) {
                                return e.hasProfilePicture ? "https://i.dailymail.co.uk/i/user/" + n(e.userIdentifier) + "_p.jpg" : "https://i.dailymail.co.uk/i/furniture/reg-new/dummy_148x178.jpg"
                            }(t),
                            formattedCurrentDate: formatCurrentDate()
                        })
                    },
                    getUserProfileUrl = function(e) {
                        return "/registration/" + e.userIdentifier + "/" + e.userAliasUrl + "profile.html"
                    },
                    formatCurrentDate = function() {
                        var e = new Date;
                        return e.getFullYear().toString() + (e.getMonth() + 1).toString() + e.getDate().toString()
                    },
                    createUserHtml = function(e) {
                        var t = calcVoteRatings(e);
                        return RCTemplates.userCommentTemplate.apply({
                            articleId: e.assetId,
                            articleTitle: e.assetHeadline,
                            commentId: e.id,
                            body: e.message,
                            ratingClass: getRatingClass(e.id),
                            votesUpValue: t.up,
                            votesDownValue: t.down,
                            abuseLink: "/home/reportAbuseInComment.html?articleId=" + e.assetId + "&commentId=" + e.id
                        })
                    },
                    formatUserInfo = function(e) {
                        return e.userAliasUrl = "string" == typeof e.userAlias ? e.userAlias.replace(/ /g, "-") + "/" : "", e.userLocation = "string" == typeof e.userLocation && "default" !== e.userLocation ? e.userLocation + ", " : "", e
                    },
                    loadCommentsCallback = function(e, t, o) {
                        var n = Ext.util.JSON.decode(o.responseText),
                            i = n && n.payload && n.payload.page ? n.payload.page : [],
                            s = void 0,
                            a = "";
                        n.payload && n.payload.parentCommentsCount && (n.payload.total = n.payload.parentCommentsCount), totalComments = n.payload && n.payload.total ? n.payload.total : totalComments;
                        for (var r = 0, l = i.length; r < l; r++) s = formatUserInfo(i[r]), "article" === mode ? a += createCommentHtml(s) : "user" === mode && (a += createUserHtml(s));
                        var m = Ext.get("js-comments");
                        m && (m.dom.innerHTML = a), Ext.each(i, function(e) {
                            initComment(Ext.get("comment-" + e.id))
                        }), viewAll ? (setButtonLabel("View " + tabNames[tabIndex] + " " + maxComments), DM.Pagination.getInstance().doPagination(n.payload)) : (setButtonLabel("View all"), DM.Pagination.getInstance().hide()), totalComments > maxComments && Ext.select(".js-view-all-link").removeClass("hidden"), i.length >= 0 && Ext.each(Ext.query("div.rc-content", rc), function(e) {
                            Ext.fly(e).removeClass("hidden")
                        });
                        var c = Ext.urlDecode(window.location.search).jumpTo,
                            u = Ext.urlDecode(window.location.search).openReply,
                            d = Ext.fly(c);
                        d && (d.replaceClass("bogr1", "comment-selected"), u && jQuery(document).ready(function() {
                            var e = jQuery("#" + c + " button.js-reply");
                            setTimeout(function() {
                                e && e[0] && e[0].click()
                            }, 5)
                        }), window.location.hash = "#" + c), initReplyForms(), DM.RC.spinner("hide")
                    },
                    toggleViewAll = function(e) {
                        viewAll = !viewAll, loadComments(viewAll ? e : {
                            maxResults: maxComments,
                            page: 1,
                            mode: mode,
                            period: period
                        })
                    },
                    commentSubmissionError = function(e, t, o) {
                        o && (RCUtils.enableButton(o.dom), inlineSubmissionMessage("error", o.parent()));
                        var n = "assetId:" + e.assetId + ",message:" + e.message;
                        e.replyTo && (n += ",replyTo:" + e.replyTo), tedParams = {
                            status: t.status,
                            params: n
                        }, t.status && (tedParams.responseCode = t.code), DM.getCookie("authid") && (tedParams.authidCookie = DM.getCookie("authid")), DM.ted.tedEvent("reader-comments", tedParams)
                    },
                    readerCommentsHandler = function(e, t) {
                        function o(t, o, n) {
                            !DM.isLoggedIn && DM.Login && (e.preventDefault(), window.location.replace("/registration/login.html?usr=1&targetUrl=" + window.location.href))
                        }
                        var n = e.getTarget(".js-view-all-link", 4, !0),
                            i = void 0;
                        if (n) closeCopyCommentLinkLightbox(e, t), intellitrackerLog(), toggleViewAll(defaultPaginationConfig), e.stopEvent();
                        else if (n = e.getTarget(".js-usr", 3, !0)) o(e, t, n);
                        else if (Ext.get(t).parent().hasClass("rc-avatar-link")) o(e, t, Ext.get(t).parent());
                        else if (n = e.getTarget("a.js-rate", 3, !0)) {
                            var s = Ext.get(n.dom.parentNode),
                                a = void 0;
                            s.hasClass("rated") || (n.hasClass("js-rate-up") ? (a = Ext.query("div.rating-button-up div.rating-button-inline", Ext.getDom(s))[0].innerHTML, i = s.dom.getAttribute("rel"), s.addClass("rated rated-up"), updateRatingsCookie(i, "+"), Ext.query("span.gr5ox", Ext.getDom(s))[0].innerHTML = "Rated", Ext.query("div.rating-button-up div.rating-button-inline", Ext.getDom(s))[0].innerHTML = parseInt(a) + 1, Ext.Ajax.request({
                                method: "POST",
                                url: "/reader-comments/p/comment/voteup/" + i,
                                success: function() {}
                            })) : n.hasClass("js-rate-down") && (a = Ext.query("div.rating-button-down div.rating-button-inline", Ext.getDom(s))[0].innerHTML, i = s.dom.getAttribute("rel"), s.addClass("rated rated-down"), updateRatingsCookie(i, "-"), Ext.query("span.gr5ox", Ext.getDom(s))[0].innerHTML = "Rated", Ext.query("div.rating-button-down div.rating-button-inline", Ext.getDom(s))[0].innerHTML = parseInt(a) + 1, Ext.Ajax.request({
                                method: "POST",
                                url: "/reader-comments/p/comment/votedown/" + i,
                                success: function() {}
                            }))), e.stopEvent()
                        } else if (n = e.getTarget(".js-more-link", 3, !0)) {
                            var r = n.parent(".js-headers").child(".comments-user");
                            if (!r) return;
                            n.containerHeight = n.containerHeight || r.getHeight(), r.scale(void 0, n.hasClass("js-collapsed") ? n.containerHeight : 0, {
                                easing: "easeOut",
                                duration: .65
                            }), n.toggleClass("js-collapsed"), e.stopEvent()
                        } else if (n = e.getTarget(".btn-submit", 3, !0)) {
                            var l = Ext.get("message"),
                                m = Ext.get("formAssetId"),
                                c = l.dom.value;
                            if (!validateMessage(l.dom)) return;
                            RCUtils.disableButton(l.dom), inlineSubmissionMessage("pending", l.parent());
                            var u = {
                                    assetId: m.dom.value,
                                    message: c,
                                    source: "desktop",
                                    postToFacebook: DM.RC.FB.isHandlePostToFacebookSelected()
                                },
                                d = $("#handlePostToFacebookInput").is(":checked") ? "click_with_fbShare" : "click";
                            DM.pageEvents.fireEvent(DM.pageEvents.SOCIAL_SHARE_COMMENTS, {
                                name: "submitComment/" + d
                            }), Ext.Ajax.request({
                                method: "POST",
                                url: "/reader-comments/p/comment/postCommentInline",
                                params: u,
                                success: function(e) {
                                    var t = JSON.parse(e.responseText);
                                    if ("success" === t.status) {
                                        l.dom.value = l.dom.title, validateMessage(l.dom);
                                        inlineSubmissionMessage(u.postToFacebook ? "success-fb-share" : "success", l.parent())
                                    } else if ("error" === t.status && "login" === t.reason) {
                                        RCUtils.enableButton(l.dom);
                                        var o = new Date;
                                        o.setHours(o.getHours() + 1), commentAssetToSubmitCookie = m.dom.value, commentMessageToSubmitCookie = c, clearInlineSubmissionMessage(), DM.setCookie("commentAssetToSubmitCookie", commentAssetToSubmitCookie, o, "/"), DM.setCookie("commentMessageToSubmitCookie", commentMessageToSubmitCookie, o, "/"), window.location.replace("/registration/login.html?usr=1&targetUrl=" + encodeURIComponent(window.location.href))
                                    } else commentSubmissionError(u, t, l)
                                },
                                failure: function(e, t) {
                                    commentSubmissionError(u, e, l)
                                }
                            }), e.stopEvent()
                        } else if (n = e.getTarget(".more-replies", 3, !0)) {
                            var p = n.parent().parent().parent(),
                                g = n.parent().parent(),
                                f = n.dom.getAttribute("rel"),
                                h = p.query(".reply-post").length,
                                v = "start=" + h,
                                b = "/reader-comments/p/comment/morereplies/" + f + "?" + v;
                            Ext.Ajax.request({
                                url: b,
                                callback: function(e, t, o) {
                                    function n(e) {
                                        var t = e.dom.innerHTML,
                                            o = t.indexOf("of "),
                                            n = t.indexOf(" replies");
                                        return o < 0 || n < 0 ? 0 : parseInt(t.substring(o + 3, n))
                                    }
                                    var i = Ext.util.JSON.decode(o.responseText);
                                    if (!("200" != i.code || i.payload.length < 1)) {
                                        var s = i.payload,
                                            a = "";
                                        Ext.each(s, function(e) {
                                            a += createCommentHtml(formatUserInfo(e), f)
                                        }), Ext.DomHelper.insertAfter(g, a, !0), Ext.each(s, function(e) {
                                            initComment(Ext.get("comment-" + e.id))
                                        });
                                        var r = Ext.get(g.query("span")[0]),
                                            n = n(r),
                                            l = p.query(".reply").length,
                                            m = n - l;
                                        m > 0 ? (r.next("a").dom.innerHTML = (m > REPLIES_PAGINATION_SIZE ? "See next " + REPLIES_PAGINATION_SIZE + " replies" : "See all replies") + '<span class="rc-down-arrow"></span>', r.dom.innerHTML = l + " of " + n + " replies") : g.remove(), openReplyInput(Ext.get("comment-" + f), !1)
                                    }
                                },
                                method: "get"
                            }), e.stopEvent()
                        }
                    },
                    checkCookies = function checkCookies() {
                        var arrComments = void 0,
                            currentComment = void 0,
                            arrAbuseLink = void 0,
                            currentAbuseLink = void 0;
                        if (ratingsCookie) {
                            arrComments = Ext.query("div.comment-post", rc);
                            for (var i = 0, len = arrComments.length; i < len; i++) currentComment = arrComments[i], currentComment.ratings = Ext.get("reader-comments").query(".rating"), Ext.each(currentComment.ratings, function(el) {
                                currentComment.commentId = el.getAttribute("rel"), -1 != ratingsCookie.search(eval("/" + currentComment.commentId + "[+-]/")) && (Ext.fly(el).addClass(getRatingClass(currentComment.commentId)), Ext.query("span.gr5ox", el)[0].innerHTML = "Rated")
                            })
                        }
                        if (abuseCookie) {
                            arrComments = Ext.query("div.comment-post", rc), arrAbuseLink = Ext.query("p.js-report-abuse", rc);
                            for (var i = 0, len = arrComments.length; i < len; i++) currentComment = arrComments[i], currentAbuseLink = arrAbuseLink[i], currentComment.rating = currentComment.getElementsByTagName("div")[0], currentComment.commentId = currentComment.rating.getAttribute("rel"), -1 != abuseCookie.search(eval(currentComment.commentId)) && (currentAbuseLink.innerHTML = currentAbuseLink.getElementsByTagName("a")[0].innerHTML, Ext.fly(currentAbuseLink).replaceClass("link-gr5ox", getAbuseClass(currentComment.commentId)))
                        }
                        if (commentAssetToSubmitCookie || commentMessageToSubmitCookie) {
                            var deleteDate = new Date;
                            if (deleteDate.setDate(deleteDate.getDate() - 1), commentAssetToSubmitCookie && commentMessageToSubmitCookie) {
                                if (articleId != commentAssetToSubmitCookie) return DM.setCookie("commentAssetToSubmitCookie", "", deleteDate, "/"), DM.setCookie("commentMessageToSubmitCookie", "", deleteDate, "/"), void DM.setCookie("commentReplyToSubmitCookie", "", deleteDate, "/");
                                var requestParams = {
                                    assetId: commentAssetToSubmitCookie,
                                    message: commentMessageToSubmitCookie,
                                    source: "desktop"
                                };
                                commentReplyToSubmitCookie && (requestParams.replyTo = commentReplyToSubmitCookie);
                                var targetForm = Ext.get("readerCommentsCommand-message-field");
                                Ext.Ajax.request({
                                    method: "POST",
                                    url: "/reader-comments/p/comment/postCommentInline",
                                    params: requestParams,
                                    success: function(e) {
                                        DM.setCookie("commentAssetToSubmitCookie", "", deleteDate, "/"), DM.setCookie("commentMessageToSubmitCookie", "", deleteDate, "/"), DM.setCookie("commentReplyToSubmitCookie", "", deleteDate, "/");
                                        var t = JSON.parse(e.responseText);
                                        "success" === t.status ? inlineSubmissionMessage("success", targetForm) : "error" === t.status && "login" != t.reason && (commentSubmissionError(requestParams, t), inlineSubmissionMessage("error", targetForm)), window.location.hash = "readerCommentsCommand-message-field"
                                    },
                                    failure: function(e, t) {
                                        commentSubmissionError(requestParams, e), DM.setCookie("commentAssetToSubmitCookie", "", deleteDate, "/"), DM.setCookie("commentMessageToSubmitCookie", "", deleteDate, "/"), inlineSubmissionMessage("error", targetForm), window.location.hash = "readerCommentsCommand-message-field"
                                    }
                                })
                            } else DM.setCookie("commentAssetToSubmitCookie", "", deleteDate, "/"), DM.setCookie("commentMessageToSubmitCookie", "", deleteDate, "/"), commentReplyToSubmitCookie && DM.setCookie("commentReplyToSubmitCookie", "", deleteDate, "/")
                        }
                    },
                    updateRatingsCookie = function(e, t) {
                        var o = ratingsCookie ? ratingsCookie.split(",") : [];
                        o.push(e + t) > MAX_COOKIE_RATINGS && (o = o.slice(1));
                        var n = new Date;
                        n.setFullYear(2030), ratingsCookie = o.join(","), DM.setCookie("commentRatings", ratingsCookie, n, "/")
                    },
                    updateRatingCount = function(e, t) {
                        var o = Ext.query("span.js-vote-rating", e.dom)[0];
                        0 == t ? (e.removeClass(["positive", "negative"]), o.innerHTML = "(0)") : (t > 0 ? e.addClass("positive") : (t *= -1, e.addClass("negative")), o.innerHTML = t)
                    },
                    getRatingClass = function(e) {
                        if (ratingsCookie) {
                            var t = new RegExp(e + "([+-])").exec(ratingsCookie);
                            if (t) switch (t[1]) {
                                case "+":
                                    return " rated rated-up";
                                case "-":
                                    return " rated rated-down"
                            }
                        }
                        return ""
                    },
                    updateAbuseCookie = function(e) {
                        var t = abuseCookie ? abuseCookie.split(",") : [];
                        t.push(e) > MAX_COOKIE_RATINGS && (t = t.slice(1));
                        var o = new Date;
                        o.setFullYear(2030), abuseCookie = t.join(","), DM.setCookie("reportAbuse", abuseCookie, o, "/")
                    },
                    getAbuseClass = function(e) {
                        return abuseCookie && -1 != abuseCookie.search(String(e)) ? "gr3ox" : "link-gr5ox"
                    },
                    setFormValuesFromCookie = function() {
                        var e = Ext.query("form.post-comment-form", "reader-comments")[0];
                        void 0 !== e && (DM.getCookie("remember_me_cookie") && void 0 !== e.rememberMe && (e.rememberMe.checked = !0), DM.getCookie("reader_name_cookie") && void 0 !== e.name && (e.name.value = DM.getCookie("reader_name_cookie")), DM.getCookie("reader_town_cookie") && void 0 !== e.townAndCountry && (e.townAndCountry.value = DM.getCookie("reader_town_cookie")))
                    },
                    setButtonLabel = function(e) {
                        buttonLabel && buttonLabel.each(function(t) {
                            t.dom.getElementsByTagName("span")[1].innerHTML = e
                        })
                    },
                    tabHandler = function(e) {
                        for (var t = e.getTarget("li.dm-tab", 5), o = tabs._tabs.length; 0 < o;) o--, t == tabs._tabs[o] && (tabIndex = o);
                        tabs._selectTab(t), viewAll = !0, intellitrackerLog(), toggleViewAll(defaultPaginationConfig)
                    },
                    intellitrackerLog = function() {
                        DM.pageEvents.fireEvent(DM.pageEvents.PAGE_COMMENT_TAB_SWAPPED, DM.getPageMetadata({
                            contentType: "commenttab",
                            tab: tabNames[tabIndex]
                        }))
                    };
                DM.RC.getCommentData = getCommentData;
                var debounce = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            o = void 0;
                        return function() {
                            for (var n = arguments.length, i = Array(n), s = 0; s < n; s++) i[s] = arguments[s];
                            clearTimeout(o), o = setTimeout(function() {
                                return e.apply(void 0, i)
                            }, t)
                        }
                    },
                    getOffsetTop = function e(t) {
                        var o = t.offsetTop;
                        return t.offsetParent && (o += e(t.offsetParent)), o
                    };
                return {
                    init: function(e) {
                        var t = document.querySelector("#reader-comments");
                        if (window.location.search && window.location.search.match(/[?&]jumpTo=comment-/)) return initReaderComments(e);
                        if (window.location.hash && "#comments" === window.location.hash) try {
                            var o = getOffsetTop(t);
                            return DM.molFeDomHelpers.scrollUtils.scrollToElement(t), setTimeout(function() {
                                getOffsetTop(t) !== o && DM.molFeDomHelpers.scrollUtils.scrollToElement(t)
                            }, 1e3), initReaderComments(e)
                        } catch (e) {}
                        var n = !1,
                            i = document.querySelector("#page-container"),
                            s = "feature" === window.PageCriteria.articleType,
                            a = s ? i : window,
                            r = debounce(function() {
                                var o = s ? i.scrollTop : window.pageYOffset,
                                    l = document.documentElement && document.documentElement.clientHeight || window.innerHeight || 1e3,
                                    m = getOffsetTop(t);
                                m && o + l > m && !n && (initReaderComments(e), n = !0, a.removeEventListener("scroll", r))
                            }, 50);
                        a.addEventListener("scroll", r), r()
                    }
                }
            };
        return {
            getInstance: function() {
                return UI || (UI = constructor()), UI
            }
        }
    }()
}, function(e, t) {
    DM.RC = DM.RC || {},
        function() {
            function e() {
                return window.location.toString().indexOf("/registration/profile.html") > -1
            }
            DM.RC.spinner = function() {
                e() || (DM.RC.spinner = function(e) {
                    var t = $(".rc-content"),
                        o = $(".rc-spinner"),
                        n = $("#js-comments"),
                        i = {
                            show: {
                                callback: function() {
                                    t.append('<div class="rc-spinner"><img src="https://i.dailymail.co.uk/i/furniture/fff/preload-inline.gif" /><span>Loading...</span></div>'), n.addClass("rc-transparent-comments-list")
                                }
                            },
                            hide: {
                                callback: function() {
                                    o = $(".rc-spinner"), n.removeClass("rc-transparent-comments-list"), o.remove()
                                }
                            }
                        };
                    i[e].callback && i[e].callback()
                })
            }, DM.RC.initialize = function() {
                if (!e()) {
                    var t = $(".rc-content"),
                        o = $("#js-comments");
                    t.append('<div class="rc-spinner"><img src="https://i.dailymail.co.uk/i/furniture/fff/preload-inline.gif" /><span>Loading...</span></div>'), o.addClass("rc-transparent-comments-list")
                }
            }
        }()
}, function(e, t) {
    DM.RC.Templates = function() {
        var e = new Ext.Template('<button type="submit" class="btn anchor-comment js-newcomment newcomment-wide">New Comment</button><button type="submit" class="btn anchor-comment js-newcomment newcomment-small">New</button>').compile(),
            t = new Ext.Template('<div class="submission-message submission-{type}"><div class="submission-feedback-icon"></div><div class="submission-feedback-message">{message}</div>{fbMessage}</div>').compile(),
            o = '<a class="reportAbuseLink" href="{abuseLink}" rel="nofollow"><div title="Report abuse" class="reportAbuseIcon"></div></a>';
        return {
            newCommentButtonTemplate: e,
            inlineSubmissionResponse: t,
            articleCommentTemplate: new Ext.Template('<div id="comment-{commentId}" class="{type} {type}-post bogr1 cleared">' + o + '<div class="avatar"><a href="{userProfileUrl}" class="rc-avatar-link"><img src="{userProfileImageUrl}?cb={formattedCurrentDate}"style="width: {avatarSide}px;clip: rect(0px {avatarSide}px {avatarSide}px 0px);"onerror="this.style.display=\'none\';"/></a></div><div class="container"><p class="user-info">{userInfo}</p><p class="{type}-body {type}-text">{body}</p><div class="rating {ratingClass}" rel="{commentId}"><div class="reply-buttons">{replyButtonHTML}{newCommentButtonHTML}</div>{shareHTML}<a class="js-rate js-rate-down" href="#"><div class="rating-button grey-rating-button rating-button-down"><div class="rate-down"></div><div class="rating-button-inline">{votesDownValue}</div></div></a><a class="js-rate js-rate-up" href="#"><div class="rating-button grey-rating-button rating-button-up"><div class="rate-up"></div><div class="rating-button-inline">{votesUpValue}</div></div></a><span style="float:right;" class="gr5ox">{voteButtonText}</span> </div><div class="comment-replies">{repliesHtml}</div></div></div>').compile(),
            userCommentTemplate: new Ext.Template('<div id="comment-{commentId}" class="comment comment-post bogr1 cleared"><p class="comment-title f-b"><a href="/reader-comments/p/comment/link/{commentId}">{articleTitle}</a></p>' + o + '<div class="container"><a href="/reader-comments/p/comment/link/{commentId}"><p class="comment-body comment-text">{body}</p></a><div class="rating {ratingClass}" rel="{commentId}"><div class="shareComment"><a class="fShareComment"></a><a class="tShareComment"></a><span class="pShareComment"></span><span class="copyCommentLink"></span><span class="shareExpansionAnchor"></span></div><a class="js-rate js-rate-down" href="#"><div class="rating-button grey-rating-button rating-button-down"><div class="rate-down"></div><div class="rating-button-inline">{votesDownValue}</div></div></a><a class="js-rate js-rate-up" href="#"><div class="rating-button grey-rating-button rating-button-up"><div class="rate-up"></div><div class="rating-button-inline">{votesUpValue}</div></div></a><span style="float:right;" class="gr5ox">Click to rate</span></div><div class="comment-replies"></div></div></div>').compile(),
            replyButtonTemplate: new Ext.Template('<button type="submit" class="btn anchor-reply-{type} js-reply" rel="reply-form-{id}">Reply</button>').compile(),
            replyFormTemplate: new Ext.Template('<div class="reply-form textarea-holder field"><a id="reply-form-{id}" name="reply-form-{id}"></a><textarea class="js-validate js-countdown js-defaultvalue js-expand textarea-input"cols="40"rows="2"title="Enter your reply..."></textarea><button type="submit" class="btn js-reply-submit">Post</button></div>').compile(),
            copyCommentLinkTemplate: new Ext.Template('<div class="lightBoxContent"><input id="copyLinkInput" class="copyLinkInput" onfocus="this.select();" readonly="true" type="text" value="{commentLink}" /><p>Copy link to paste in your message</p></div>')
        }
    }()
}, function(e, t) {
    DM.RC.Utils = function() {
        function e(e) {
            return "message" != e.id ? Ext.get(e).next("button") : Ext.get(e).parent().next(".buttons-holder").down(".btn-submit")
        }

        function t(t) {
            var o = e(t);
            o.addClass("btn-disabled"), o.dom.disabled = "true"
        }

        function o(t) {
            var o = e(t);
            o.removeClass("btn-disabled"), o.dom.disabled = void 0
        }
        return {
            getSubmitButton: e,
            disableButton: t,
            enableButton: o
        }
    }()
}, function(e, t) {
    ! function(e) {
        e(document).ready(function() {
            var t = e("#abuse-details"),
                o = e(".thankyou"),
                n = e(".failed"),
                i = {
                    mandatory: {
                        type: "regExp",
                        opts: {
                            re: /^.+$/,
                            error: "Please provide a value for this field"
                        }
                    },
                    emailHelper: {
                        type: "regExp",
                        opts: {
                            re: /^.+$/,
                            error: "Please enter a valid email address"
                        }
                    },
                    email: {
                        type: "regExp",
                        opts: {
                            re: /^([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})?$/i,
                            error: "Please provide a valid email address"
                        }
                    },
                    recaptchaHelper: {
                        type: "length",
                        opts: {
                            min: 1,
                            error: "Don't forget the verification code"
                        }
                    },
                    complaintHelper: {
                        type: "regExp",
                        opts: {
                            re: /^.*[^\s].*$/,
                            error: "Please provide an explanation of your complaint"
                        }
                    },
                    complaint: {
                        type: "regExp",
                        opts: {
                            re: /^.+$/,
                            error: "Please provide an explanation of your complaint"
                        }
                    }
                };
            e("#abuse-details").regformvalidator({
                fieldContainer: ".reg-fld",
                errorContainer: ".err",
                serverSideErrorClass: ".server-side-fail",
                rules: i,
                errorsMap: {
                    email: ["emailHelper", "email"],
                    complaint: ["complaintHelper", "complaint"]
                },
                hintsMap: {
                    email: ["emailHelper"],
                    complaint: ["complaintHelper"]
                }
            }), o.hide(), n.hide(), window.submitReportAbuseFunction = function() {
                var i = grecaptcha.getResponse();
                if (0 === i.length) return void e("#abuse-details").removeClass("submitting");
                t.hide(), n.hide(), DM.RC.spinner("show");
                var s = e("#email").val(),
                    a = e("#complaint").val(),
                    r = e("#commentId").val();
                e.ajax({
                    type: "POST",
                    url: "/reader-comments/p/postReportAbuseInComment.html",
                    Accept: "application/json",
                    contentType: "application/json",
                    data: JSON.stringify({
                        email: s,
                        complaint: a,
                        recaptchaResponse: i,
                        commentId: r
                    }),
                    success: function(e) {
                        "success" == e.status ? (console.log("success: " + e.reportId + ".."), document.querySelector(".reportId").innerHTML = e.reportId, t.hide(), o.show(), n.hide(), DM.RC.spinner("hide")) : (console.log("failure: " + e.status + ".."), DM.RC.spinner("hide"), t.show(), o.hide(), n.hide(), grecaptcha.reset(), t.removeClass("submitting"))
                    },
                    error: function(e, t, o) {
                        console.log("Error while accessing server: " + o), DM.RC.spinner("hide"), n.show()
                    }
                }), e(function() {
                    e("textarea[maxlength]").bind("input propertychange", function() {
                        var t = e(this).attr("maxlength");
                        e(this).val().length > t && e(this).val(e(this).val().substring(0, t))
                    })
                })
            }
        })
    }(jQuery)
}, , function(e, t) {}, , function(e, t) {
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    ! function(t, n) {
        var i = {
                version: "2.7.1",
                areas: {},
                apis: {},
                inherit: function(e, t) {
                    for (var o in e) t.hasOwnProperty(o) || (t[o] = e[o]);
                    return t
                },
                stringify: function(e) {
                    return void 0 === e || "function" == typeof e ? e + "" : JSON.stringify(e)
                },
                parse: function(e) {
                    try {
                        return JSON.parse(e)
                    } catch (t) {
                        return e
                    }
                },
                fn: function(e, t) {
                    i.storeAPI[e] = t;
                    for (var o in i.apis) i.apis[o][e] = t
                },
                get: function(e, t) {
                    return e.getItem(t)
                },
                set: function(e, t, o) {
                    e.setItem(t, o)
                },
                remove: function(e, t) {
                    e.removeItem(t)
                },
                key: function(e, t) {
                    return e.key(t)
                },
                length: function(e) {
                    return e.length
                },
                clear: function(e) {
                    e.clear()
                },
                Store: function(e, t, o) {
                    var n = i.inherit(i.storeAPI, function(e, t, o) {
                        return 0 === arguments.length ? n.getAll() : "function" == typeof t ? n.transact(e, t, o) : void 0 !== t ? n.set(e, t, o) : "string" == typeof e || "number" == typeof e ? n.get(e) : e ? n.setAll(e, t) : n.clear()
                    });
                    n._id = e;
                    try {
                        t.setItem("_-bad-_", "wolf"), n._area = t, t.removeItem("_-bad-_")
                    } catch (e) {}
                    return n._area || (n._area = i.inherit(i.storageAPI, {
                        items: {},
                        name: "fake"
                    })), n._ns = o || "", i.areas[e] || (i.areas[e] = n._area), i.apis[n._ns + n._id] || (i.apis[n._ns + n._id] = n), n
                },
                storeAPI: {
                    area: function(e, t) {
                        var o = this[e];
                        return o && o.area || (o = i.Store(e, t, this._ns), this[e] || (this[e] = o)), o
                    },
                    namespace: function(e, t) {
                        if (!e) return this._ns ? this._ns.substring(0, this._ns.length - 1) : "";
                        var o = e,
                            n = this[o];
                        return n && n.namespace || (n = i.Store(this._id, this._area, this._ns + o + "."), this[o] || (this[o] = n), t || n.area("session", i.areas.session)), n
                    },
                    isFake: function() {
                        return "fake" === this._area.name
                    },
                    toString: function() {
                        return "store" + (this._ns ? "." + this.namespace() : "") + "[" + this._id + "]"
                    },
                    has: function(e) {
                        return this._area.has ? this._area.has(this._in(e)) : !!(this._in(e) in this._area)
                    },
                    size: function() {
                        return this.keys().length
                    },
                    each: function(e, t) {
                        for (var o = 0, n = i.length(this._area); o < n; o++) {
                            var s = this._out(i.key(this._area, o));
                            if (void 0 !== s && !1 === e.call(this, s, t || this.get(s))) break;
                            n > i.length(this._area) && (n--, o--)
                        }
                        return t || this
                    },
                    keys: function(e) {
                        return this.each(function(e, t) {
                            t.push(e)
                        }, e || [])
                    },
                    get: function(e, t) {
                        var o = i.get(this._area, this._in(e));
                        return null !== o ? i.parse(o) : t || o
                    },
                    getAll: function(e) {
                        return this.each(function(e, t) {
                            t[e] = this.get(e)
                        }, e || {})
                    },
                    transact: function(e, t, o) {
                        var n = this.get(e, o),
                            i = t(n);
                        return this.set(e, void 0 === i ? n : i), this
                    },
                    set: function(e, t, o) {
                        var n = this.get(e);
                        return null != n && !1 === o ? t : i.set(this._area, this._in(e), i.stringify(t), o) || n
                    },
                    setAll: function(e, t) {
                        var o, n;
                        for (var i in e) n = e[i], this.set(i, n, t) !== n && (o = !0);
                        return o
                    },
                    add: function(e, t) {
                        var n = this.get(e);
                        if (n instanceof Array) t = n.concat(t);
                        else if (null !== n) {
                            var s = void 0 === n ? "undefined" : o(n);
                            if (s === (void 0 === t ? "undefined" : o(t)) && "object" === s) {
                                for (var a in t) n[a] = t[a];
                                t = n
                            } else t = n + t
                        }
                        return i.set(this._area, this._in(e), i.stringify(t)), t
                    },
                    remove: function(e) {
                        var t = this.get(e);
                        return i.remove(this._area, this._in(e)), t
                    },
                    clear: function() {
                        return this._ns ? this.each(function(e) {
                            i.remove(this._area, this._in(e))
                        }, 1) : i.clear(this._area), this
                    },
                    clearAll: function() {
                        var e = this._area;
                        for (var t in i.areas) i.areas.hasOwnProperty(t) && (this._area = i.areas[t], this.clear());
                        return this._area = e, this
                    },
                    _in: function(e) {
                        return "string" != typeof e && (e = i.stringify(e)), this._ns ? this._ns + e : e
                    },
                    _out: function(e) {
                        return this._ns ? e && 0 === e.indexOf(this._ns) ? e.substring(this._ns.length) : void 0 : e
                    }
                },
                storageAPI: {
                    length: 0,
                    has: function(e) {
                        return this.items.hasOwnProperty(e)
                    },
                    key: function(e) {
                        var t = 0;
                        for (var o in this.items)
                            if (this.has(o) && e === t++) return o
                    },
                    setItem: function(e, t) {
                        this.has(e) || this.length++, this.items[e] = t
                    },
                    removeItem: function(e) {
                        this.has(e) && (delete this.items[e], this.length--)
                    },
                    getItem: function(e) {
                        return this.has(e) ? this.items[e] : null
                    },
                    clear: function() {
                        for (var e in this.items) this.removeItem(e)
                    },
                    toString: function() {
                        return this.length + " items in " + this.name + "Storage"
                    }
                }
            },
            s = i.Store("local", function() {
                try {
                    return localStorage
                } catch (e) {}
            }());
        s.local = s, s._ = i, s.area("session", function() {
            try {
                return sessionStorage
            } catch (e) {}
        }()), "function" == typeof n && void 0 !== n.amd ? n("store2", [], function() {
            return s
        }) : void 0 !== e && e.exports ? e.exports = s : (t.store && (i.conflict = t.store), t.store = s)
    }(this, this && this.define)
}, function(e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = o(10),
        i = (o.n(n), o(5)),
        s = (o.n(i), o(1), o(6)),
        a = (o.n(s), o(7)),
        r = (o.n(a), o(4)),
        l = (o.n(r), o(3)),
        m = (o.n(l), o(2)),
        c = (o.n(m), o(8));
    o.n(c)
}]);
(function() {
    var bundleLocation;
    var channel;
    var insertBeforeScript;
    var script;
    if (typeof DM !== "undefined" && DM.getPageMetadata) {
        channel = DM.getPageMetadata().channel
    }
    if (channel === "/registration") {
        bundleLocation = DM.getPageMetadata().bundleLocation
    }
    if (bundleLocation) {
        script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.onload = function() {
            DM.later.go("REGISTRATION_ASYNC_BUNDLE_LOADED")
        };
        insertBeforeScript = document.querySelector("script");
        insertBeforeScript.parentNode.insertBefore(script, insertBeforeScript);
        script.src = bundleLocation + "/registration--.js"
    }
})();
(function() {
    var articleEvents = ["ARTICLE_DEFER_BUNDLE_LOADED"];
    var channelEvents = ["CHANNEL_DEFER_BUNDLE_LOADED"];
    if (DM.getPageMetadata().channel === "/registration") {
        var REGISTRATION_ASYNC_BUNDLE_LOADED_EVENT = "REGISTRATION_ASYNC_BUNDLE_LOADED";
        articleEvents.push(REGISTRATION_ASYNC_BUNDLE_LOADED_EVENT);
        channelEvents.push(REGISTRATION_ASYNC_BUNDLE_LOADED_EVENT)
    }
    Promise.race([DM.later(articleEvents), DM.later(channelEvents)]).then(function() {
        DM.later.go("bundle")
    })
})();
//# sourceMappingURL=async_bundle--.js.map