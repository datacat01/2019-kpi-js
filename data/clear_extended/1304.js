! function(a) {
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    "use strict";

    function b(b) {
        return !b || void 0 !== b.allowPageScroll || void 0 === b.swipe && void 0 === b.swipeStatus || (b.allowPageScroll = j), void 0 !== b.click && void 0 === b.tap && (b.tap = b.click), b || (b = {}), b = a.extend({}, a.fn.swipe.defaults, b), this.each(function() {
            var d = a(this),
                e = d.data(B);
            e || (e = new c(this, b), d.data(B, e))
        })
    }

    function c(b, c) {
        function C(b) {
            if (!(ja() || a(b.target).closest(c.excludedElements, Sa).length > 0)) {
                var d, e = b.originalEvent ? b.originalEvent : b,
                    f = y ? e.touches[0] : e;
                return Ta = u, (y ? Ua = e.touches.length : b.preventDefault(), Ja = 0, Ka = null, Qa = null, La = 0, Ma = 0, Na = 0, Oa = 1, Pa = 0, Va = oa(), Ra = ra(), ha(), !y || Ua === c.fingers || c.fingers === s || R() ? (la(0, f), Wa = Aa(), 2 == Ua && (la(1, e.touches[1]), Ma = Na = ua(Va[0].start, Va[1].start)), (c.swipeStatus || c.pinchStatus) && (d = J(e, Ta))) : d = !1, !1 === d) ? (Ta = x, J(e, Ta), d) : (c.hold && (ab = setTimeout(a.proxy(function() {
                    Sa.trigger("hold", [e.target]), c.hold && (d = c.hold.call(Sa, e, e.target))
                }, this), c.longTapThreshold)), ka(!0), null)
            }
        }

        function D(a) {
            var b = a.originalEvent ? a.originalEvent : a;
            if (Ta !== w && Ta !== x && !ia()) {
                var d, e = y ? b.touches[0] : b,
                    f = ma(e);
                if (Xa = Aa(), y && (Ua = b.touches.length), c.hold && clearTimeout(ab), Ta = v, 2 == Ua && (0 == Ma ? (la(1, b.touches[1]), Ma = Na = ua(Va[0].start, Va[1].start)) : (ma(b.touches[1]), Na = ua(Va[0].end, Va[1].end), Qa = wa(Va[0].end, Va[1].end)), Oa = va(Ma, Na), Pa = Math.abs(Ma - Na)), Ua === c.fingers || c.fingers === s || !y || R()) {
                    if (Ka = za(f.start, f.end), P(a, Ka), Ja = xa(f.start, f.end), La = ta(), pa(Ka, Ja), (c.swipeStatus || c.pinchStatus) && (d = J(b, Ta)), !c.triggerOnTouchEnd || c.triggerOnTouchLeave) {
                        var g = !0;
                        if (c.triggerOnTouchLeave) {
                            var h = Ba(this);
                            g = Ca(f.end, h)
                        }!c.triggerOnTouchEnd && g ? Ta = I(v) : c.triggerOnTouchLeave && !g && (Ta = I(w)), Ta != x && Ta != w || J(b, Ta)
                    }
                } else Ta = x, J(b, Ta);
                !1 === d && (Ta = x, J(b, Ta))
            }
        }

        function E(a) {
            var b = a.originalEvent;
            return y && b.touches.length > 0 ? (ga(), !0) : (ia() && (Ua = Za), Xa = Aa(), La = ta(), M() || !L() ? (Ta = x, J(b, Ta)) : c.triggerOnTouchEnd || 0 == c.triggerOnTouchEnd && Ta === v ? (a.preventDefault(), Ta = w, J(b, Ta)) : !c.triggerOnTouchEnd && Y() ? (Ta = w, K(b, Ta, n)) : Ta === v && (Ta = x, J(b, Ta)), ka(!1), null)
        }

        function F() {
            Ua = 0, Xa = 0, Wa = 0, Ma = 0, Na = 0, Oa = 1, ha(), ka(!1)
        }

        function G(a) {
            var b = a.originalEvent;
            c.triggerOnTouchLeave && (Ta = I(w), J(b, Ta))
        }

        function H() {
            Sa.unbind(Ea, C), Sa.unbind(Ia, F), Sa.unbind(Fa, D), Sa.unbind(Ga, E), Ha && Sa.unbind(Ha, G), ka(!1)
        }

        function I(a) {
            var b = a,
                d = O(),
                e = L(),
                f = M();
            return !d || f ? b = x : !e || a != v || c.triggerOnTouchEnd && !c.triggerOnTouchLeave ? !e && a == w && c.triggerOnTouchLeave && (b = x) : b = w, b
        }

        function J(a, b) {
            var c = void 0;
            return V() || U() ? c = K(a, b, l) : (S() || R()) && !1 !== c && (c = K(a, b, m)), ea() && !1 !== c ? c = K(a, b, o) : fa() && !1 !== c ? c = K(a, b, p) : da() && !1 !== c && (c = K(a, b, n)), b === x && F(a), b === w && (y ? 0 == a.touches.length && F(a) : F(a)), c
        }

        function K(b, j, k) {
            var q = void 0;
            if (k == l) {
                if (Sa.trigger("swipeStatus", [j, Ka || null, Ja || 0, La || 0, Ua, Va]), c.swipeStatus && !1 === (q = c.swipeStatus.call(Sa, b, j, Ka || null, Ja || 0, La || 0, Ua, Va))) return !1;
                if (j == w && T()) {
                    if (Sa.trigger("swipe", [Ka, Ja, La, Ua, Va]), c.swipe && !1 === (q = c.swipe.call(Sa, b, Ka, Ja, La, Ua, Va))) return !1;
                    switch (Ka) {
                        case d:
                            Sa.trigger("swipeLeft", [Ka, Ja, La, Ua, Va]), c.swipeLeft && (q = c.swipeLeft.call(Sa, b, Ka, Ja, La, Ua, Va));
                            break;
                        case e:
                            Sa.trigger("swipeRight", [Ka, Ja, La, Ua, Va]), c.swipeRight && (q = c.swipeRight.call(Sa, b, Ka, Ja, La, Ua, Va));
                            break;
                        case f:
                            Sa.trigger("swipeUp", [Ka, Ja, La, Ua, Va]), c.swipeUp && (q = c.swipeUp.call(Sa, b, Ka, Ja, La, Ua, Va));
                            break;
                        case g:
                            Sa.trigger("swipeDown", [Ka, Ja, La, Ua, Va]), c.swipeDown && (q = c.swipeDown.call(Sa, b, Ka, Ja, La, Ua, Va))
                    }
                }
            }
            if (k == m) {
                if (Sa.trigger("pinchStatus", [j, Qa || null, Pa || 0, La || 0, Ua, Oa, Va]), c.pinchStatus && !1 === (q = c.pinchStatus.call(Sa, b, j, Qa || null, Pa || 0, La || 0, Ua, Oa, Va))) return !1;
                if (j == w && Q()) switch (Qa) {
                    case h:
                        Sa.trigger("pinchIn", [Qa || null, Pa || 0, La || 0, Ua, Oa, Va]), c.pinchIn && (q = c.pinchIn.call(Sa, b, Qa || null, Pa || 0, La || 0, Ua, Oa, Va));
                        break;
                    case i:
                        Sa.trigger("pinchOut", [Qa || null, Pa || 0, La || 0, Ua, Oa, Va]), c.pinchOut && (q = c.pinchOut.call(Sa, b, Qa || null, Pa || 0, La || 0, Ua, Oa, Va))
                }
            }
            return k == n ? j !== x && j !== w || (clearTimeout(_a), clearTimeout(ab), Z() && !aa() ? ($a = Aa(), _a = setTimeout(a.proxy(function() {
                $a = null, Sa.trigger("tap", [b.target]), c.tap && (q = c.tap.call(Sa, b, b.target))
            }, this), c.doubleTapThreshold)) : ($a = null, Sa.trigger("tap", [b.target]), c.tap && (q = c.tap.call(Sa, b, b.target)))) : k == o ? j !== x && j !== w || (clearTimeout(_a), $a = null, Sa.trigger("doubletap", [b.target]), c.doubleTap && (q = c.doubleTap.call(Sa, b, b.target))) : k == p && (j !== x && j !== w || (clearTimeout(_a), $a = null, Sa.trigger("longtap", [b.target]), c.longTap && (q = c.longTap.call(Sa, b, b.target)))), q
        }

        function L() {
            var a = !0;
            return null !== c.threshold && (a = Ja >= c.threshold), a
        }

        function M() {
            var a = !1;
            return null !== c.cancelThreshold && null !== Ka && (a = qa(Ka) - Ja >= c.cancelThreshold), a
        }

        function N() {
            return null === c.pinchThreshold || Pa >= c.pinchThreshold
        }

        function O() {
            return !c.maxTimeThreshold || !(La >= c.maxTimeThreshold)
        }

        function P(a, b) {
            if (c.allowPageScroll === j || R()) a.preventDefault();
            else {
                var h = c.allowPageScroll === k;
                switch (b) {
                    case d:
                        (c.swipeLeft && h || !h && c.allowPageScroll != q) && a.preventDefault();
                        break;
                    case e:
                        (c.swipeRight && h || !h && c.allowPageScroll != q) && a.preventDefault();
                        break;
                    case f:
                        (c.swipeUp && h || !h && c.allowPageScroll != r) && a.preventDefault();
                        break;
                    case g:
                        (c.swipeDown && h || !h && c.allowPageScroll != r) && a.preventDefault()
                }
            }
        }

        function Q() {
            var a = W(),
                b = X(),
                c = N();
            return a && b && c
        }

        function R() {
            return !!(c.pinchStatus || c.pinchIn || c.pinchOut)
        }

        function S() {
            return !(!Q() || !R())
        }

        function T() {
            var a = O(),
                b = L(),
                c = W(),
                d = X();
            return !M() && d && c && b && a
        }

        function U() {
            return !!(c.swipe || c.swipeStatus || c.swipeLeft || c.swipeRight || c.swipeUp || c.swipeDown)
        }

        function V() {
            return !(!T() || !U())
        }

        function W() {
            return Ua === c.fingers || c.fingers === s || !y
        }

        function X() {
            return 0 !== Va[0].end.x
        }

        function Y() {
            return !!c.tap
        }

        function Z() {
            return !!c.doubleTap
        }

        function $() {
            return !!c.longTap
        }

        function _() {
            if (null == $a) return !1;
            var a = Aa();
            return Z() && a - $a <= c.doubleTapThreshold
        }

        function aa() {
            return _()
        }

        function ba() {
            return (1 === Ua || !y) && (isNaN(Ja) || Ja < c.threshold)
        }

        function ca() {
            return La > c.longTapThreshold && Ja < t
        }

        function da() {
            return !(!ba() || !Y())
        }

        function ea() {
            return !(!_() || !Z())
        }

        function fa() {
            return !(!ca() || !$())
        }

        function ga() {
            Ya = Aa(), Za = event.touches.length + 1
        }

        function ha() {
            Ya = 0, Za = 0
        }

        function ia() {
            var a = !1;
            if (Ya) {
                Aa() - Ya <= c.fingerReleaseThreshold && (a = !0)
            }
            return a
        }

        function ja() {
            return !(!0 !== Sa.data(B + "_intouch"))
        }

        function ka(a) {
            !0 === a ? (Sa.bind(Fa, D), Sa.bind(Ga, E), Ha && Sa.bind(Ha, G)) : (Sa.unbind(Fa, D, !1), Sa.unbind(Ga, E, !1), Ha && Sa.unbind(Ha, G, !1)), Sa.data(B + "_intouch", !0 === a)
        }

        function la(a, b) {
            var c = void 0 !== b.identifier ? b.identifier : 0;
            return Va[a].identifier = c, Va[a].start.x = Va[a].end.x = b.pageX || b.clientX, Va[a].start.y = Va[a].end.y = b.pageY || b.clientY, Va[a]
        }

        function ma(a) {
            var b = void 0 !== a.identifier ? a.identifier : 0,
                c = na(b);
            return c.end.x = a.pageX || a.clientX, c.end.y = a.pageY || a.clientY, c
        }

        function na(a) {
            for (var b = 0; b < Va.length; b++)
                if (Va[b].identifier == a) return Va[b]
        }

        function oa() {
            for (var a = [], b = 0; b <= 5; b++) a.push({
                start: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: 0
                },
                identifier: 0
            });
            return a
        }

        function pa(a, b) {
            b = Math.max(b, qa(a)), Ra[a].distance = b
        }

        function qa(a) {
            if (Ra[a]) return Ra[a].distance
        }

        function ra() {
            var a = {};
            return a[d] = sa(d), a[e] = sa(e), a[f] = sa(f), a[g] = sa(g), a
        }

        function sa(a) {
            return {
                direction: a,
                distance: 0
            }
        }

        function ta() {
            return Xa - Wa
        }

        function ua(a, b) {
            var c = Math.abs(a.x - b.x),
                d = Math.abs(a.y - b.y);
            return Math.round(Math.sqrt(c * c + d * d))
        }

        function va(a, b) {
            return (b / a * 1).toFixed(2)
        }

        function wa() {
            return Oa < 1 ? i : h
        }

        function xa(a, b) {
            return Math.round(Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2)))
        }

        function ya(a, b) {
            var c = a.x - b.x,
                d = b.y - a.y,
                e = Math.atan2(d, c),
                f = Math.round(180 * e / Math.PI);
            return f < 0 && (f = 360 - Math.abs(f)), f
        }

        function za(a, b) {
            var c = ya(a, b);
            return c <= 45 && c >= 0 ? d : c <= 360 && c >= 315 ? d : c >= 135 && c <= 225 ? e : c > 45 && c < 135 ? g : f
        }

        function Aa() {
            return (new Date).getTime()
        }

        function Ba(b) {
            b = a(b);
            var c = b.offset();
            return {
                left: c.left,
                right: c.left + b.outerWidth(),
                top: c.top,
                bottom: c.top + b.outerHeight()
            }
        }

        function Ca(a, b) {
            return a.x > b.left && a.x < b.right && a.y > b.top && a.y < b.bottom
        }
        var Da = y || A || !c.fallbackToMouseEvents,
            Ea = Da ? A ? z ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
            Fa = Da ? A ? z ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
            Ga = Da ? A ? z ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
            Ha = Da ? null : "mouseleave",
            Ia = A ? z ? "MSPointerCancel" : "pointercancel" : "touchcancel",
            Ja = 0,
            Ka = null,
            La = 0,
            Ma = 0,
            Na = 0,
            Oa = 1,
            Pa = 0,
            Qa = 0,
            Ra = null,
            Sa = a(b),
            Ta = "start",
            Ua = 0,
            Va = null,
            Wa = 0,
            Xa = 0,
            Ya = 0,
            Za = 0,
            $a = 0,
            _a = null,
            ab = null;
        try {
            Sa.bind(Ea, C), Sa.bind(Ia, F)
        } catch (b) {
            a.error("events not supported " + Ea + "," + Ia + " on jQuery.swipe")
        }
        this.enable = function() {
            return Sa.bind(Ea, C), Sa.bind(Ia, F), Sa
        }, this.disable = function() {
            return H(), Sa
        }, this.destroy = function() {
            return H(), Sa.data(B, null), Sa
        }, this.option = function(b, d) {
            if (void 0 !== c[b]) {
                if (void 0 === d) return c[b];
                c[b] = d
            } else a.error("Option " + b + " does not exist on jQuery.swipe.options");
            return null
        }
    }
    var d = "left",
        e = "right",
        f = "up",
        g = "down",
        h = "in",
        i = "out",
        j = "none",
        k = "auto",
        l = "swipe",
        m = "pinch",
        n = "tap",
        o = "doubletap",
        p = "longtap",
        q = "horizontal",
        r = "vertical",
        s = "all",
        t = 10,
        u = "start",
        v = "move",
        w = "end",
        x = "cancel",
        y = "ontouchstart" in window,
        z = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
        A = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
        B = "TouchSwipe",
        C = {
            fingers: 1,
            threshold: 75,
            cancelThreshold: null,
            pinchThreshold: 20,
            maxTimeThreshold: null,
            fingerReleaseThreshold: 250,
            longTapThreshold: 500,
            doubleTapThreshold: 200,
            swipe: null,
            swipeLeft: null,
            swipeRight: null,
            swipeUp: null,
            swipeDown: null,
            swipeStatus: null,
            pinchIn: null,
            pinchOut: null,
            pinchStatus: null,
            click: null,
            tap: null,
            doubleTap: null,
            longTap: null,
            hold: null,
            triggerOnTouchEnd: !0,
            triggerOnTouchLeave: !1,
            allowPageScroll: "auto",
            fallbackToMouseEvents: !0,
            excludedElements: "label, button, input, select, textarea, a, .noSwipe"
        };
    a.fn.swipe = function(c) {
        var d = a(this),
            e = d.data(B);
        if (e && "string" == typeof c) {
            if (e[c]) return e[c].apply(this, Array.prototype.slice.call(arguments, 1));
            a.error("Method " + c + " does not exist on jQuery.swipe")
        } else if (!(e || "object" != typeof c && c)) return b.apply(this, arguments);
        return d
    }, a.fn.swipe.defaults = C, a.fn.swipe.phases = {
        PHASE_START: u,
        PHASE_MOVE: v,
        PHASE_END: w,
        PHASE_CANCEL: x
    }, a.fn.swipe.directions = {
        LEFT: d,
        RIGHT: e,
        UP: f,
        DOWN: g,
        IN: h,
        OUT: i
    }, a.fn.swipe.pageScroll = {
        NONE: j,
        HORIZONTAL: q,
        VERTICAL: r,
        AUTO: k
    }, a.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: s
    }
});