var h, aa = aa || {},
    k = this,
    m = function(a) {
        return "string" == typeof a
    },
    n = function() {},
    p = function(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call &&
                    "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    },
    q = function(a) {
        return "array" == p(a)
    },
    r = function(a) {
        var b = p(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    },
    t = function(a) {
        return "function" == p(a)
    },
    u = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    },
    ba = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    },
    ca = function(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    },
    v = function(a, b, c) {
        v = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ba : ca;
        return v.apply(null, arguments)
    },
    da = Date.now || function() {
        return +new Date
    },
    w = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.va = b.prototype;
        a.prototype =
            new c;
        a.prototype.constructor = a;
        a.Ga = function(a, c, f) {
            for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
            return b.prototype[c].apply(a, d)
        }
    };
var x = function(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, x);
    else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
};
w(x, Error);
x.prototype.name = "CustomError";
var y = function(a, b) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
    x.call(this, c + a[d])
};
w(y, x);
y.prototype.name = "AssertionError";
var ea = function(a, b, c, d) {
        var e = "Assertion failed";
        if (c) {
            e += ": " + c;
            var f = d
        } else a && (e += ": " + a, f = b);
        throw new y("" + e, f || []);
    },
    z = function(a, b, c) {
        a || ea("", null, b, Array.prototype.slice.call(arguments, 2));
        return a
    },
    fa = function(a, b) {
        throw new y("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    },
    ha = function(a, b, c) {
        m(a) || ea("Expected string but got %s: %s.", [p(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    };
var ia = Array.prototype.indexOf ? function(a, b) {
        z(null != a.length);
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if (m(a)) return m(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    },
    A = Array.prototype.forEach ? function(a, b, c) {
        z(null != a.length);
        Array.prototype.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = m(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    },
    ka = function(a) {
        a: {
            var b = ja;
            for (var c = a.length, d = m(a) ? a.split("") :
                    a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                } b = -1
        }
        return 0 > b ? null : m(a) ? a.charAt(b) : a[b]
    },
    la = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
var ma = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    },
    na = /&/g,
    oa = /</g,
    pa = />/g,
    qa = /"/g,
    ra = /'/g,
    sa = /\x00/g,
    ta = /[\x00&<>"']/,
    ua = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
var B;
a: {
    var va = k.navigator;
    if (va) {
        var wa = va.userAgent;
        if (wa) {
            B = wa;
            break a
        }
    }
    B = ""
}
var C = function(a) {
    return -1 != B.indexOf(a)
};
var xa = function(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    },
    ya = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    },
    D = function(a) {
        var b = za;
        return null !== b && a in b ? b[a] : void 0
    },
    Aa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
    Ba = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Aa.length; f++) c = Aa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
var Ca = function() {
    return (C("Chrome") || C("CriOS")) && !C("Edge")
};
var Da = function(a) {
    ta.test(a) && (-1 != a.indexOf("&") && (a = a.replace(na, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(oa, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(pa, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(qa, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(ra, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(sa, "&#0;")));
    return a
};
var Ea = function(a) {
    Ea[" "](a);
    return a
};
Ea[" "] = n;
var Ga = function(a, b) {
    var c = Fa;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
};
var Ha = C("Opera"),
    E = C("Trident") || C("MSIE"),
    Ia = C("Edge"),
    Ja = C("Gecko") && !(-1 != B.toLowerCase().indexOf("webkit") && !C("Edge")) && !(C("Trident") || C("MSIE")) && !C("Edge"),
    Ka = -1 != B.toLowerCase().indexOf("webkit") && !C("Edge"),
    La = function() {
        var a = k.document;
        return a ? a.documentMode : void 0
    },
    Ma;
a: {
    var Na = "",
        Oa = function() {
            var a = B;
            if (Ja) return /rv:([^\);]+)(\)|;)/.exec(a);
            if (Ia) return /Edge\/([\d\.]+)/.exec(a);
            if (E) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (Ka) return /WebKit\/(\S+)/.exec(a);
            if (Ha) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();Oa && (Na = Oa ? Oa[1] : "");
    if (E) {
        var Pa = La();
        if (null != Pa && Pa > parseFloat(Na)) {
            Ma = String(Pa);
            break a
        }
    }
    Ma = Na
}
var Qa = Ma,
    Fa = {},
    Ra = function(a) {
        return Ga(a, function() {
            for (var b = 0, c = ma(String(Qa)).split("."), d = ma(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "",
                    l = d[f] || "";
                do {
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    l = /(\d*)(\D*)(.*)/.exec(l) || ["", "", "", ""];
                    if (0 == g[0].length && 0 == l[0].length) break;
                    b = ua(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == l[1].length ? 0 : parseInt(l[1], 10)) || ua(0 == g[2].length, 0 == l[2].length) || ua(g[2], l[2]);
                    g = g[3];
                    l = l[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    },
    Sa;
var Ta = k.document;
Sa = Ta && E ? La() || ("CSS1Compat" == Ta.compatMode ? parseInt(Qa, 10) : 5) : void 0;
var Ua = Object.freeze || function(a) {
    return a
};
var Va = function(a, b, c) {
    this.reset(a, b, c, void 0, void 0)
};
Va.prototype.da = null;
var Wa = 0;
Va.prototype.reset = function(a, b, c, d, e) {
    "number" == typeof e || Wa++;
    d || da();
    this.D = a;
    delete this.da
};
Va.prototype.ta = function(a) {
    this.D = a
};
var F = function(a) {
        this.na = a;
        this.ha = this.V = this.D = this.L = null
    },
    G = function(a, b) {
        this.name = a;
        this.value = b
    };
G.prototype.toString = function() {
    return this.name
};
var Xa = new G("SEVERE", 1E3),
    Ya = new G("INFO", 800),
    Za = new G("CONFIG", 700),
    $a = new G("FINE", 500);
F.prototype.getName = function() {
    return this.na
};
F.prototype.getParent = function() {
    return this.L
};
F.prototype.ta = function(a) {
    this.D = a
};
var ab = function(a) {
    if (a.D) return a.D;
    if (a.L) return ab(a.L);
    fa("Root logger has no level set.");
    return null
};
F.prototype.log = function(a, b, c) {
    if (a.value >= ab(this).value)
        for (t(b) && (b = b()), a = new Va(a, String(b), this.na), c && (a.da = c), c = this; c;) {
            var d = c,
                e = a;
            if (d.ha)
                for (var f = 0; b = d.ha[f]; f++) b(e);
            c = c.getParent()
        }
};
F.prototype.info = function(a, b) {
    this.log(Ya, a, b)
};
var bb = {},
    cb = null,
    db = function(a) {
        cb || (cb = new F(""), bb[""] = cb, cb.ta(Za));
        var b;
        if (!(b = bb[a])) {
            b = new F(a);
            var c = a.lastIndexOf("."),
                d = a.substr(c + 1);
            c = db(a.substr(0, c));
            c.V || (c.V = {});
            c.V[d] = b;
            b.L = c;
            bb[a] = b
        }
        return b
    };
var eb = function() {
    this.X = this.X
};
eb.prototype.X = !1;
var fb = !E || 9 <= Number(Sa);
var H = function(a, b) {
    if (a.classList) a.classList.add(b);
    else {
        if (a.classList) var c = a.classList.contains(b);
        else a.classList ? c = a.classList : (c = a.className, c = m(c) && c.match(/\S+/g) || []), c = 0 <= ia(c, b);
        c || (a.className += 0 < a.className.length ? " " + b : b)
    }
};
var gb = !E && !(C("Safari") && !(Ca() || C("Coast") || C("Opera") || C("Edge") || C("Firefox") || C("FxiOS") || C("Silk") || C("Android")));
var I = function(a, b) {
    this.aa = a === hb && b || "";
    this.za = ib
};
I.prototype.ja = !0;
I.prototype.ea = function() {
    return this.aa
};
I.prototype.toString = function() {
    return "Const{" + this.aa + "}"
};
var ib = {},
    hb = {};
var J = function() {
    this.M = "";
    this.ya = jb
};
J.prototype.ja = !0;
var jb = {};
J.prototype.ea = function() {
    return this.M
};
J.prototype.toString = function() {
    return "SafeStyleSheet{" + this.M + "}"
};
J.prototype.ka = function(a) {
    this.M = a;
    return this
};
var kb = (new J).ka("");
var mb = function(a, b) {
        xa(b, function(b, d) {
            b && "object" == typeof b && b.ja && (b = b.ea());
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : lb.hasOwnProperty(d) ? a.setAttribute(lb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
        })
    },
    lb = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    },
    ob = function(a, b, c) {
        var d = arguments,
            e = document,
            f = String(d[0]),
            g = d[1];
        if (!fb && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', Da(g.name), '"');
            if (g.type) {
                f.push(' type="', Da(g.type), '"');
                var l = {};
                Ba(l, g);
                delete l.type;
                g = l
            }
            f.push(">");
            f = f.join("")
        }
        f = e.createElement(f);
        g && (m(g) ? f.className = g : q(g) ? f.className = g.join(" ") : mb(f, g));
        2 < d.length && nb(e, f, d);
        return f
    },
    nb = function(a, b, c) {
        function d(c) {
            c && b.appendChild(m(c) ? a.createTextNode(c) : c)
        }
        for (var e = 2; e < c.length; e++) {
            var f = c[e];
            if (!r(f) ||
                u(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (u(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if (t(f)) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                A(g ? la(f) : f, d)
            }
        }
    },
    K = function(a, b) {
        z(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
        a.appendChild(b)
    },
    pb = function(a, b) {
        z(null != a, "goog.dom.setTextContent expects a non-null value for node");
        if ("textContent" in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = String(b);
        else if (a.firstChild && 3 ==
            a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(z(a.lastChild));
            a.firstChild.data = String(b)
        } else {
            for (var c; c = a.firstChild;) a.removeChild(c);
            z(a, "Node cannot be null or undefined.");
            a.appendChild((9 == a.nodeType ? a : a.ownerDocument || a.document).createTextNode(String(b)))
        }
    };
var qb = !E || 9 <= Number(Sa),
    rb = E && !Ra("9"),
    sb = function() {
        if (!k.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            k.addEventListener("test", n, b), k.removeEventListener("test", n, b)
        } catch (c) {}
        return a
    }();
var L = function(a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.l = !1;
    this.sa = !0
};
L.prototype.stopPropagation = function() {
    this.l = !0
};
L.prototype.preventDefault = function() {
    this.defaultPrevented = !0;
    this.sa = !1
};
var M = function(a, b) {
    L.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.key = "";
    this.charCode = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.w = null;
    if (a) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget =
            b;
        if (b = a.relatedTarget) {
            if (Ja) {
                a: {
                    try {
                        Ea(b.nodeName);
                        var e = !0;
                        break a
                    } catch (f) {}
                    e = !1
                }
                e || (b = null)
            }
        } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.offsetX = Ka || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = Ka || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
            this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = m(a.pointerType) ? a.pointerType : tb[a.pointerType] || "";
        this.state = a.state;
        this.w = a;
        a.defaultPrevented && this.preventDefault()
    }
};
w(M, L);
var tb = Ua({
    2: "touch",
    3: "pen",
    4: "mouse"
});
M.prototype.stopPropagation = function() {
    M.va.stopPropagation.call(this);
    this.w.stopPropagation ? this.w.stopPropagation() : this.w.cancelBubble = !0
};
M.prototype.preventDefault = function() {
    M.va.preventDefault.call(this);
    var a = this.w;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, rb) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
};
var N = "closure_listenable_" + (1E6 * Math.random() | 0),
    ub = 0;
var vb = function(a, b, c, d, e) {
        this.listener = a;
        this.N = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.I = e;
        this.key = ++ub;
        this.u = this.H = !1
    },
    wb = function(a) {
        a.u = !0;
        a.listener = null;
        a.N = null;
        a.src = null;
        a.I = null
    };
var O = function(a) {
    this.src = a;
    this.c = {};
    this.R = 0
};
O.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.c[f];
    a || (a = this.c[f] = [], this.R++);
    var g = xb(a, b, d, e); - 1 < g ? (b = a[g], c || (b.H = !1)) : (b = new vb(b, this.src, f, !!d, e), b.H = c, a.push(b));
    return b
};
O.prototype.remove = function(a, b, c, d) {
    a = a.toString();
    if (!(a in this.c)) return !1;
    var e = this.c[a];
    b = xb(e, b, c, d);
    return -1 < b ? (wb(e[b]), z(null != e.length), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.c[a], this.R--), !0) : !1
};
var yb = function(a, b) {
    var c = b.type;
    if (c in a.c) {
        var d = a.c[c],
            e = ia(d, b),
            f;
        if (f = 0 <= e) z(null != d.length), Array.prototype.splice.call(d, e, 1);
        f && (wb(b), 0 == a.c[c].length && (delete a.c[c], a.R--))
    }
};
O.prototype.Z = function(a, b, c, d) {
    a = this.c[a.toString()];
    var e = -1;
    a && (e = xb(a, b, c, d));
    return -1 < e ? a[e] : null
};
O.prototype.hasListener = function(a, b) {
    var c = void 0 !== a,
        d = c ? a.toString() : "",
        e = void 0 !== b;
    return ya(this.c, function(a) {
        for (var f = 0; f < a.length; ++f)
            if (!(c && a[f].type != d || e && a[f].capture != b)) return !0;
        return !1
    })
};
var xb = function(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.u && f.listener == b && f.capture == !!c && f.I == d) return e
    }
    return -1
};
var zb = "closure_lm_" + (1E6 * Math.random() | 0),
    Ab = {},
    Bb = 0,
    Db = function(a, b, c, d, e) {
        if (d && d.once) Cb(a, b, c, d, e);
        else if (q(b))
            for (var f = 0; f < b.length; f++) Db(a, b[f], c, d, e);
        else c = Eb(c), a && a[N] ? (d = u(d) ? !!d.capture : !!d, Fb(a), a.i.add(String(b), c, !1, d, e)) : Gb(a, b, c, !1, d, e)
    },
    Gb = function(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var g = u(e) ? !!e.capture : !!e,
            l = Hb(a);
        l || (a[zb] = l = new O(a));
        c = l.add(b, c, d, g, f);
        if (!c.N) {
            d = Ib();
            c.N = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) sb || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(),
                d, e);
            else if (a.attachEvent) a.attachEvent(Jb(b.toString()), d);
            else if (a.addListener && a.removeListener) z("change" === b, "MediaQueryList only has a change event"), a.addListener(d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            Bb++
        }
    },
    Ib = function() {
        var a = Kb,
            b = qb ? function(c) {
                return a.call(b.src, b.listener, c)
            } : function(c) {
                c = a.call(b.src, b.listener, c);
                if (!c) return c
            };
        return b
    },
    Cb = function(a, b, c, d, e) {
        if (q(b))
            for (var f = 0; f < b.length; f++) Cb(a, b[f], c, d, e);
        else c = Eb(c), a && a[N] ? a.i.add(String(b),
            c, !0, u(d) ? !!d.capture : !!d, e) : Gb(a, b, c, !0, d, e)
    },
    Lb = function(a, b, c, d, e) {
        if (q(b))
            for (var f = 0; f < b.length; f++) Lb(a, b[f], c, d, e);
        else d = u(d) ? !!d.capture : !!d, c = Eb(c), a && a[N] ? a.i.remove(String(b), c, d, e) : a && (a = Hb(a)) && (b = a.Z(b, c, d, e)) && Mb(b)
    },
    Mb = function(a) {
        if ("number" != typeof a && a && !a.u) {
            var b = a.src;
            if (b && b[N]) yb(b.i, a);
            else {
                var c = a.type,
                    d = a.N;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Jb(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                Bb--;
                (c = Hb(b)) ?
                (yb(c, a), 0 == c.R && (c.src = null, b[zb] = null)) : wb(a)
            }
        }
    },
    Jb = function(a) {
        return a in Ab ? Ab[a] : Ab[a] = "on" + a
    },
    Ob = function(a, b, c, d) {
        var e = !0;
        if (a = Hb(a))
            if (b = a.c[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.capture == c && !f.u && (f = Nb(f, d), e = e && !1 !== f)
                }
        return e
    },
    Nb = function(a, b) {
        var c = a.listener,
            d = a.I || a.src;
        a.H && Mb(a);
        return c.call(d, b)
    },
    Kb = function(a, b) {
        if (a.u) return !0;
        if (!qb) {
            if (!b) a: {
                b = ["window", "event"];
                for (var c = k, d = 0; d < b.length; d++)
                    if (c = c[b[d]], null == c) {
                        b = null;
                        break a
                    } b = c
            }
            d = b;
            b = new M(d,
                this);
            c = !0;
            if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                a: {
                    var e = !1;
                    if (0 == d.keyCode) try {
                        d.keyCode = -1;
                        break a
                    } catch (g) {
                        e = !0
                    }
                    if (e || void 0 == d.returnValue) d.returnValue = !0
                }
                d = [];
                for (e = b.currentTarget; e; e = e.parentNode) d.push(e);a = a.type;
                for (e = d.length - 1; !b.l && 0 <= e; e--) {
                    b.currentTarget = d[e];
                    var f = Ob(d[e], a, !0, b);
                    c = c && f
                }
                for (e = 0; !b.l && e < d.length; e++) b.currentTarget = d[e],
                f = Ob(d[e], a, !1, b),
                c = c && f
            }
            return c
        }
        return Nb(a, new M(b, this))
    },
    Hb = function(a) {
        a = a[zb];
        return a instanceof O ? a : null
    },
    Pb = "__closure_events_fn_" +
    (1E9 * Math.random() >>> 0),
    Eb = function(a) {
        z(a, "Listener can not be null.");
        if (t(a)) return a;
        z(a.handleEvent, "An object listener must have handleEvent method.");
        a[Pb] || (a[Pb] = function(b) {
            return a.handleEvent(b)
        });
        return a[Pb]
    };
var P = function() {
    eb.call(this);
    this.i = new O(this);
    this.Aa = this;
    this.qa = null
};
w(P, eb);
P.prototype[N] = !0;
P.prototype.addEventListener = function(a, b, c, d) {
    Db(this, a, b, c, d)
};
P.prototype.removeEventListener = function(a, b, c, d) {
    Lb(this, a, b, c, d)
};
P.prototype.dispatchEvent = function(a) {
    Fb(this);
    var b = this.qa;
    if (b) {
        var c = [];
        for (var d = 1; b; b = b.qa) c.push(b), z(1E3 > ++d, "infinite loop")
    }
    b = this.Aa;
    d = a.type || a;
    if (m(a)) a = new L(a, b);
    else if (a instanceof L) a.target = a.target || b;
    else {
        var e = a;
        a = new L(d, b);
        Ba(a, e)
    }
    e = !0;
    if (c)
        for (var f = c.length - 1; !a.l && 0 <= f; f--) {
            var g = a.currentTarget = c[f];
            e = Qb(g, d, !0, a) && e
        }
    a.l || (g = a.currentTarget = b, e = Qb(g, d, !0, a) && e, a.l || (e = Qb(g, d, !1, a) && e));
    if (c)
        for (f = 0; !a.l && f < c.length; f++) g = a.currentTarget = c[f], e = Qb(g, d, !1, a) && e;
    return e
};
var Qb = function(a, b, c, d) {
    b = a.i.c[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
        var g = b[f];
        if (g && !g.u && g.capture == c) {
            var l = g.listener,
                uc = g.I || g.src;
            g.H && yb(a.i, g);
            e = !1 !== l.call(uc, d) && e
        }
    }
    return e && 0 != d.sa
};
P.prototype.Z = function(a, b, c, d) {
    return this.i.Z(String(a), b, c, d)
};
P.prototype.hasListener = function(a, b) {
    return this.i.hasListener(void 0 !== a ? String(a) : void 0, b)
};
var Fb = function(a) {
    z(a.i, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
};
var Q = "StopIteration" in k ? k.StopIteration : {
        message: "StopIteration",
        stack: ""
    },
    R = function() {};
R.prototype.next = function() {
    throw Q;
};
R.prototype.v = function() {
    return this
};
var Rb = function(a) {
        if (a instanceof R) return a;
        if ("function" == typeof a.v) return a.v(!1);
        if (r(a)) {
            var b = 0,
                c = new R;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) throw Q;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    },
    Sb = function(a, b) {
        if (r(a)) try {
            A(a, b, void 0)
        } catch (c) {
            if (c !== Q) throw c;
        } else {
            a = Rb(a);
            try {
                for (;;) b.call(void 0, a.next(), void 0, a)
            } catch (c) {
                if (c !== Q) throw c;
            }
        }
    },
    Tb = function(a) {
        if (r(a)) return la(a);
        a = Rb(a);
        var b = [];
        Sb(a, function(a) {
            b.push(a)
        });
        return b
    };
var Ub = function() {
        this.O = void 0
    },
    Vb = function(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (q(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++) c.push(e), e = d[f], Vb(a, a.O ? a.O.call(d, String(f), e) : e, c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    f = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), Wb(d, c), c.push(":"), Vb(a, a.O ? a.O.call(b, d, e) : e, c), f = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    Wb(b, c);
                    break;
                case "number":
                    c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                    break;
                case "boolean":
                    c.push(String(b));
                    break;
                case "function":
                    c.push("null");
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        }
    },
    Xb = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    },
    Yb = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
    Wb = function(a, b) {
        b.push('"', a.replace(Yb, function(a) {
            var b =
                Xb[a];
            b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), Xb[a] = b);
            return b
        }), '"')
    };
var S = function(a, b) {
    a && a.log($a, b, void 0)
};
var Zb = function() {};
Zb.prototype.ca = null;
var $b = function(a) {
    return a.ca || (a.ca = a.la())
};
var ac, bc = function() {};
w(bc, Zb);
bc.prototype.W = function() {
    var a = cc(this);
    return a ? new ActiveXObject(a) : new XMLHttpRequest
};
bc.prototype.la = function() {
    var a = {};
    cc(this) && (a[0] = !0, a[1] = !0);
    return a
};
var cc = function(a) {
    if (!a.ia && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
            var d = b[c];
            try {
                return new ActiveXObject(d), a.ia = d
            } catch (e) {}
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    return a.ia
};
ac = new bc;
var dc = function() {};
w(dc, Zb);
dc.prototype.W = function() {
    var a = new XMLHttpRequest;
    if ("withCredentials" in a) return a;
    if ("undefined" != typeof XDomainRequest) return new ec;
    throw Error("Unsupported browser");
};
dc.prototype.la = function() {
    return {}
};
var ec = function() {
    this.g = new XDomainRequest;
    this.readyState = 0;
    this.onreadystatechange = null;
    this.responseText = "";
    this.status = -1;
    this.responseXML = null;
    this.statusText = "";
    this.g.onload = v(this.Ba, this);
    this.g.onerror = v(this.fa, this);
    this.g.onprogress = v(this.Ca, this);
    this.g.ontimeout = v(this.Da, this)
};
h = ec.prototype;
h.open = function(a, b, c) {
    if (null != c && !c) throw Error("Only async requests are supported.");
    this.g.open(a, b)
};
h.send = function(a) {
    if (a)
        if ("string" == typeof a) this.g.send(a);
        else throw Error("Only string data is supported");
    else this.g.send()
};
h.abort = function() {
    this.g.abort()
};
h.setRequestHeader = function() {};
h.getResponseHeader = function(a) {
    return "content-type" == a.toLowerCase() ? this.g.contentType : ""
};
h.Ba = function() {
    this.status = 200;
    this.responseText = this.g.responseText;
    fc(this, 4)
};
h.fa = function() {
    this.status = 500;
    this.responseText = "";
    fc(this, 4)
};
h.Da = function() {
    this.fa()
};
h.Ca = function() {
    this.status = 200;
    fc(this, 1)
};
var fc = function(a, b) {
    a.readyState = b;
    if (a.onreadystatechange) a.onreadystatechange()
};
ec.prototype.getAllResponseHeaders = function() {
    return "content-type: " + this.g.contentType
};
var T = function(a, b) {
    this.h = {};
    this.b = [];
    this.G = this.o = 0;
    var c = arguments.length;
    if (1 < c) {
        if (c % 2) throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else a && this.addAll(a)
};
T.prototype.A = function() {
    gc(this);
    for (var a = [], b = 0; b < this.b.length; b++) a.push(this.h[this.b[b]]);
    return a
};
T.prototype.s = function() {
    gc(this);
    return this.b.concat()
};
T.prototype.clear = function() {
    this.h = {};
    this.G = this.o = this.b.length = 0
};
T.prototype.remove = function(a) {
    return Object.prototype.hasOwnProperty.call(this.h, a) ? (delete this.h[a], this.o--, this.G++, this.b.length > 2 * this.o && gc(this), !0) : !1
};
var gc = function(a) {
    if (a.o != a.b.length) {
        for (var b = 0, c = 0; b < a.b.length;) {
            var d = a.b[b];
            Object.prototype.hasOwnProperty.call(a.h, d) && (a.b[c++] = d);
            b++
        }
        a.b.length = c
    }
    if (a.o != a.b.length) {
        var e = {};
        for (c = b = 0; b < a.b.length;) d = a.b[b], Object.prototype.hasOwnProperty.call(e, d) || (a.b[c++] = d, e[d] = 1), b++;
        a.b.length = c
    }
};
h = T.prototype;
h.get = function(a, b) {
    return Object.prototype.hasOwnProperty.call(this.h, a) ? this.h[a] : b
};
h.set = function(a, b) {
    Object.prototype.hasOwnProperty.call(this.h, a) || (this.o++, this.b.push(a), this.G++);
    this.h[a] = b
};
h.addAll = function(a) {
    if (a instanceof T)
        for (var b = a.s(), c = 0; c < b.length; c++) this.set(b[c], a.get(b[c]));
    else
        for (b in a) this.set(b, a[b])
};
h.forEach = function(a, b) {
    for (var c = this.s(), d = 0; d < c.length; d++) {
        var e = c[d],
            f = this.get(e);
        a.call(b, f, e, this)
    }
};
h.clone = function() {
    return new T(this)
};
h.v = function(a) {
    gc(this);
    var b = 0,
        c = this.G,
        d = this,
        e = new R;
    e.next = function() {
        if (c != d.G) throw Error("The map has changed since the iterator was created");
        if (b >= d.b.length) throw Q;
        var e = d.b[b++];
        return a ? e : d.h[e]
    };
    return e
};
var hc = function(a) {
        if (a.A && "function" == typeof a.A) return a.A();
        if (m(a)) return a.split("");
        if (r(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        b = [];
        c = 0;
        for (d in a) b[c++] = a[d];
        return b
    },
    ic = function(a, b) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
        else if (r(a) || m(a)) A(a, b, void 0);
        else {
            if (a.s && "function" == typeof a.s) var c = a.s();
            else if (a.A && "function" == typeof a.A) c = void 0;
            else if (r(a) || m(a)) {
                c = [];
                for (var d = a.length, e = 0; e < d; e++) c.push(e)
            } else
                for (e in c = [], d = 0, a) c[d++] =
                    e;
            d = hc(a);
            e = d.length;
            for (var f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
        }
    };
var jc = function(a, b, c) {
    if (t(a)) c && (a = v(a, c));
    else if (a && "function" == typeof a.handleEvent) a = v(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : k.setTimeout(a, b || 0)
};
var kc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
var U = function(a) {
    P.call(this);
    this.headers = new T;
    this.U = a || null;
    this.m = !1;
    this.T = this.a = null;
    this.C = this.ma = this.K = "";
    this.B = this.$ = this.J = this.Y = !1;
    this.F = 0;
    this.P = null;
    this.ra = "";
    this.S = this.Fa = this.xa = !1
};
w(U, P);
var lc = U.prototype,
    mc = db("goog.net.XhrIo");
lc.f = mc;
var nc = /^https?$/i,
    oc = ["POST", "PUT"];
U.prototype.send = function(a, b, c, d) {
    if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.K + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.K = a;
    this.C = "";
    this.ma = b;
    this.Y = !1;
    this.m = !0;
    this.a = this.U ? this.U.W() : ac.W();
    this.T = this.U ? $b(this.U) : $b(ac);
    this.a.onreadystatechange = v(this.pa, this);
    this.Fa && "onprogress" in this.a && (this.a.onprogress = v(function(a) {
        this.oa(a, !0)
    }, this), this.a.upload && (this.a.upload.onprogress = v(this.oa, this)));
    try {
        S(this.f, V(this, "Opening Xhr")), this.$ = !0, this.a.open(b, String(a), !0), this.$ = !1
    } catch (f) {
        S(this.f, V(this, "Error opening Xhr: " + f.message));
        pc(this, f);
        return
    }
    a = c || "";
    var e = this.headers.clone();
    d && ic(d, function(a, b) {
        e.set(b, a)
    });
    d = ka(e.s());
    c = k.FormData && a instanceof k.FormData;
    !(0 <= ia(oc, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function(a, b) {
        this.a.setRequestHeader(b, a)
    }, this);
    this.ra && (this.a.responseType = this.ra);
    "withCredentials" in this.a && this.a.withCredentials !== this.xa && (this.a.withCredentials =
        this.xa);
    try {
        qc(this), 0 < this.F && (this.S = rc(this.a), S(this.f, V(this, "Will abort after " + this.F + "ms if incomplete, xhr2 " + this.S)), this.S ? (this.a.timeout = this.F, this.a.ontimeout = v(this.wa, this)) : this.P = jc(this.wa, this.F, this)), S(this.f, V(this, "Sending request")), this.J = !0, this.a.send(a), this.J = !1
    } catch (f) {
        S(this.f, V(this, "Send error: " + f.message)), pc(this, f)
    }
};
var rc = function(a) {
        return E && Ra(9) && "number" == typeof a.timeout && void 0 !== a.ontimeout
    },
    ja = function(a) {
        return "content-type" == a.toLowerCase()
    };
U.prototype.wa = function() {
    "undefined" != typeof aa && this.a && (this.C = "Timed out after " + this.F + "ms, aborting", S(this.f, V(this, this.C)), this.dispatchEvent("timeout"), this.abort(8))
};
var pc = function(a, b) {
        a.m = !1;
        a.a && (a.B = !0, a.a.abort(), a.B = !1);
        a.C = b;
        sc(a);
        tc(a)
    },
    sc = function(a) {
        a.Y || (a.Y = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
    };
U.prototype.abort = function() {
    this.a && this.m && (S(this.f, V(this, "Aborting")), this.m = !1, this.B = !0, this.a.abort(), this.B = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), tc(this))
};
U.prototype.pa = function() {
    this.X || (this.$ || this.J || this.B ? vc(this) : this.Ea())
};
U.prototype.Ea = function() {
    vc(this)
};
var vc = function(a) {
    if (a.m && "undefined" != typeof aa)
        if (a.T[1] && 4 == W(a) && 2 == wc(a)) S(a.f, V(a, "Local request error detected and ignored"));
        else if (a.J && 4 == W(a)) jc(a.pa, 0, a);
    else if (a.dispatchEvent("readystatechange"), 4 == W(a)) {
        S(a.f, V(a, "Request complete"));
        a.m = !1;
        try {
            if (xc(a)) a.dispatchEvent("complete"), a.dispatchEvent("success");
            else {
                try {
                    var b = 2 < W(a) ? a.a.statusText : ""
                } catch (c) {
                    S(a.f, "Can not get status: " + c.message), b = ""
                }
                a.C = b + " [" + wc(a) + "]";
                sc(a)
            }
        } finally {
            tc(a)
        }
    }
};
U.prototype.oa = function(a, b) {
    z("progress" === a.type, "goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");
    this.dispatchEvent(yc(a, "progress"));
    this.dispatchEvent(yc(a, b ? "downloadprogress" : "uploadprogress"))
};
var yc = function(a, b) {
        return {
            type: b,
            lengthComputable: a.lengthComputable,
            loaded: a.loaded,
            total: a.total
        }
    },
    tc = function(a) {
        if (a.a) {
            qc(a);
            var b = a.a,
                c = a.T[0] ? n : null;
            a.a = null;
            a.T = null;
            a.dispatchEvent("ready");
            try {
                b.onreadystatechange = c
            } catch (d) {
                (a = a.f) && a.log(Xa, "Problem encountered resetting onreadystatechange: " + d.message, void 0)
            }
        }
    },
    qc = function(a) {
        a.a && a.S && (a.a.ontimeout = null);
        a.P && (k.clearTimeout(a.P), a.P = null)
    },
    xc = function(a) {
        var b = wc(a);
        a: switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                var c = !0;
                break a;
            default:
                c = !1
        }
        if (!c) {
            if (b = 0 === b) a = String(a.K).match(kc)[1] || null, !a && k.self && k.self.location && (a = k.self.location.protocol, a = a.substr(0, a.length - 1)), b = !nc.test(a ? a.toLowerCase() : "");
            c = b
        }
        return c
    },
    W = function(a) {
        return a.a ? a.a.readyState : 0
    },
    wc = function(a) {
        try {
            return 2 < W(a) ? a.a.status : -1
        } catch (b) {
            return -1
        }
    },
    zc = function(a) {
        try {
            return a.a ? a.a.responseText : ""
        } catch (b) {
            return S(a.f, "Can not get responseText: " + b.message), ""
        }
    };
U.prototype.getResponseHeader = function(a) {
    if (this.a && 4 == W(this)) return a = this.a.getResponseHeader(a), null === a ? void 0 : a
};
U.prototype.getAllResponseHeaders = function() {
    return this.a && 4 == W(this) ? this.a.getAllResponseHeaders() || "" : ""
};
var V = function(a, b) {
    return b + " [" + a.ma + " " + a.K + " " + wc(a) + "]"
};
var Ac = function() {};
var Bc = function() {};
w(Bc, Ac);
Bc.prototype.clear = function() {
    var a = Tb(this.v(!0)),
        b = this;
    A(a, function(a) {
        b.remove(a)
    })
};
var Cc = function(a) {
    this.j = a
};
w(Cc, Bc);
h = Cc.prototype;
h.set = function(a, b) {
    try {
        this.j.setItem(a, b)
    } catch (c) {
        if (0 == this.j.length) throw "Storage mechanism: Storage disabled";
        throw "Storage mechanism: Quota exceeded";
    }
};
h.get = function(a) {
    a = this.j.getItem(a);
    if (!m(a) && null !== a) throw "Storage mechanism: Invalid value was encountered";
    return a
};
h.remove = function(a) {
    this.j.removeItem(a)
};
h.v = function(a) {
    var b = 0,
        c = this.j,
        d = new R;
    d.next = function() {
        if (b >= c.length) throw Q;
        var d = ha(c.key(b++));
        if (a) return d;
        d = c.getItem(d);
        if (!m(d)) throw "Storage mechanism: Invalid value was encountered";
        return d
    };
    return d
};
h.clear = function() {
    this.j.clear()
};
h.key = function(a) {
    return this.j.key(a)
};
var Dc = function() {
    var a = null;
    try {
        a = window.localStorage || null
    } catch (b) {}
    this.j = a
};
w(Dc, Cc);
var Ec = function() {};
var Hc = function(a, b) {
    this.ua = new Dc;
    if (!this.ua.get("cookieConsent")) {
        this.ba = b || document.body;
        b = document.head;
        var c = ob("STYLE", {
            type: "text/css"
        });
        var d = Fc;
        d instanceof I && d.constructor === I && d.za === ib ? d = d.aa : (fa("expected object of type Const, got '" + d + "'"), d = "type_error:Const");
        0 === d.length ? d = kb : (z(-1 == d.indexOf("<"), "Forbidden '<' character in style sheet string: " + d), d = (new J).ka(d));
        d instanceof J && d.constructor === J && d.ya === jb ? d = d.M : (fa("expected object of type SafeStyleSheet, got '" + d + "' of type " +
            p(d)), d = "type_error:SafeStyleSheet");
        E && void 0 !== c.cssText ? c.cssText = d : c.innerHTML = d;
        K(b, c);
        Gc(this, a)
    }
};
w(Hc, Ec);
var za = {
        mainText: "Google serves cookies to analyse traffic to this site. Information about your use of our site is shared with Google for that purpose.",
        moreText: "See details",
        moreUrl: "https://www.google.com/policies/technologies/cookies/",
        consentText: "OK, got it",
        display: !0
    },
    Fc = new I(hb, "#cookieBar {\n  background-color: #5a5a5a;\n  border: none;\n  border-radius: 0;\n  -moz-border-radius: 0;\n  -webkit-border-radius: 0;\n  bottom: 0;\n  color: #fff;\n  left: 0;\n  margin: 0;\n  position: fixed;\n  right: 0;\n  width: 100%;\n  z-index: 999;\n}\n#cookieBar .cookieBarInner {\n  padding: 10px 15px;\n}\n#cookieBar .cookieBarText, #cookieBar .cookieBarButtons {\n  font-family: arial,sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 1.8;\n  margin-right: 10px;\n}\n@media (max-width: 720px) #cookieBar .cookieBarText {\n  display: block;\n  margin-bottom: 5px;\n}\n#cookieBar .cookieBarButton:first-child {\n  margin-right: 5px;\n}\n#cookieBar .cookieBarButton {\n  background-color: #303030;\n  border: 1px solid rgba(0,0,0,.1);\n  border-radius: 2px;\n  -moz-border-radius: 2px;\n  -webkit-border-radius: 2px;\n  color: #fff;\n  cursor: pointer;\n  line-height: 19px;\n  padding: 4px 8px;\n  text-decoration: none;\n  white-space: nowrap;\n}"),
    Gc =
    function(a, b) {
        if (b) Ba(za, b || {}), D("display") && K(a.ba, Ic(a));
        else {
            var c = new U(new dc);
            Db(c, "complete", function() {
                if (xc(c)) try {
                    var a = JSON.parse(zc(c));
                    Ba(za, a)
                } catch (e) {
                    throw "XHR failed with stack trace:\n" + zc(c);
                }
                K(this.ba, Ic(this))
            }.bind(a));
            c.send("https://www.gstatic.com/brandstudio/kato/cookie_choice_component/config.json")
        }
    },
    Ic = function(a) {
        var b = ob("DIV", {
                id: "cookieBar"
            }),
            c = document.createElement("DIV");
        H(c, "cookieBarInner");
        K(b, c);
        var d = document.createElement("SPAN");
        H(d, "cookieBarText");
        pb(d,
            D("mainText"));
        K(c, d);
        d = document.createElement("SPAN");
        H(d, "cookieBarButtons");
        K(c, d);
        c = ob("A", {
            href: D("moreUrl"),
            rel: "noopener",
            target: "_blank"
        });
        H(c, "cookieBarButton");
        H(c, "cookieBarMoreButton");
        pb(c, D("moreText"));
        K(d, c);
        c = ob("A", {
            href: "#"
        });
        H(c, "cookieBarButton");
        H(c, "cookieBarConsentButton");
        pb(c, D("consentText"));
        K(d, c);
        Db(c, "click", function(a) {
            a.preventDefault();
            b && b.parentNode && b.parentNode.removeChild(b);
            a = [];
            Vb(new Ub, {
                Ha: !0
            }, a);
            this.ua.set("cookieConsent", a.join(""))
        }, !1, a);
        return b
    },
    Jc;
if (!(Jc = document.currentScript)) {
    var Kc = document.getElementsByTagName("script");
    Jc = Kc[Kc.length - 1]
}(function(a, b) {
    if (/-[a-z]/.test(b)) return null;
    if (gb && a.dataset) {
        if (!(!C("Android") || Ca() || C("Firefox") || C("FxiOS") || C("Opera") || C("Silk") || b in a.dataset)) return null;
        a = a.dataset[b];
        return void 0 === a ? null : a
    }
    return a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase())
})(Jc, "autoloadCookieConsentBar") && new Hc;
var X = ["google", "CookieConsentBar"],
    Y = k;
X[0] in Y || "undefined" == typeof Y.execScript || Y.execScript("var " + X[0]);
for (var Z; X.length && (Z = X.shift());) X.length || void 0 === Hc ? Y = Y[Z] && Y[Z] !== Object.prototype[Z] ? Y[Z] : Y[Z] = {} : Y[Z] = Hc;