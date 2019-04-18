window.Angus || (window.Angus = {}),
    function() {
        "use strict";
        var e, t = window,
            n = document,
            i = t.requestAnimationFrame || function(e) {
                setTimeout(e, 1e3 / 60)
            },
            r = t.navigator && t.navigator.userAgent && /iPad|iPod|iPhone/.test(t.navigator.userAgent),
            s = "relative";

        function o(t, i) {
            var r, s = this;
            e = Stencil.css.properties.transform, s.node = "string" == typeof t ? n.getElementById(t) : t, "object" == typeof s.node && (s.viewport = s.node, s.cards = null, s.items = [], r = s.node.dataset, s.isIndependentY = i && i.isIndependentY || r && r.isIndependentY || !1, s.viewportOffsetTop = s.isIndependentY && (i && i.viewportOffsetTop || r && r.viewportOffsetTop) || 0, s.isLoop = i && i.isLoop || r && r.isLoop || !1, s.enableBounce = i && i.enableBounce || r && r.enableBounce || !1, s.numBufCards = i && i.numBufCards || r && r.numBufCards || 1, s.offsetX = i && i.offsetX || r && r.offsetX || 0, s.singleTouch = i && i.singleTouch || !1, s.ignoreEdge = i && i.ignoreEdge || !1, s.edgeLength = i && i.edgeLength || Math.ceil(.1 * Math.min(window.innerHeight, window.innerWidth)), s.preventYScroll = i && i.preventYScroll, s.ignoreY = i && i.ignoreY, s.currIndex = 0, s.isTransitioning = !1, s.isScrolling = !1, s.isSwipingMode = !1, s.defaultPositionStyle = s.isIndependentY ? "fixed" : "absolute", s.viewportWidth = s.viewport.offsetWidth, s.paginationTimer = null, s.numCards = 2 * s.numBufCards + 1, s.middleIndex = s.numBufCards, s.enabled = !0, s.singleTouchId = null, s.pos = {
                axisIntention: "",
                startX: 0,
                startY: 0,
                deltaX: 0,
                deltaY: 0,
                absX: 0,
                absY: 0,
                realDeltaX: 0
            }, s.init())
        }
        o.prototype = {
            init: function() {
                var e = this,
                    n = e.node,
                    i = e.node.innerHTML;
                n.style.position = s, e.createCards(), e.fillContent(i, !1), n.addEventListener("touchstart", function(t) {
                    e.handleTouchStart(t)
                }, !1), n.addEventListener("touchend", function(t) {
                    e.handleTouchEnd(t)
                }, !1), n.addEventListener("touchmove", function(t) {
                    e.handleTouchMove(t)
                }, !1), n.addEventListener("touchcancel", function(t) {
                    e.handleTouchCancel(t)
                }, !1), n.addEventListener(Stencil.css.events.transitionEnd, function(t) {
                    e.handleSwipingTransitionEnd(t)
                }, !1), t.addEventListener("orientationchange", function(t) {
                    setTimeout(function() {
                        e.handleOrientationChange(t)
                    }, 200)
                }, !1), e.isIndependentY && t.addEventListener("scroll", function(t) {
                    e.handleScroll(t)
                }, !1)
            },
            fillContent: function(e, t) {
                this.contentUtilityAdd(e, t ? 1 : 0)
            },
            prependContent: function(e) {
                0 === this.getTotal() ? this.contentUtilityAdd(e, 1) : this.contentUtilityAdd(e, -1)
            },
            replaceContent: function(e, t) {
                "number" != typeof t || t < 0 || t >= this.getTotal() || this.contentUtilityAdd(e, 2, t)
            },
            showContent: function(e) {
                var t, n = this,
                    i = n.middleIndex;
                if (n.resetCards(), n.items[e])
                    for (n.currIndex = e, n.setContent(n.cards[i], e), t = 1; t <= n.numBufCards; t++) n.setContent(n.cards[i - t], e - t), n.setContent(n.cards[i + t], e + t)
            },
            paginate: function(e, t, n, i) {
                var r, s = this;
                s.swipeAborted = !1, s.paginationTimer || -1 !== ["index", "next", "prev"].indexOf(e) && ("index" === e ? (r = t, e = t - s.currIndex > 0 ? -1 : 1, t = Math.abs(t - s.currIndex)) : ("next" === e ? e = -1 : "prev" === e && (e = 1), r = s.currIndex - e * t), t <= 0 || (t > s.numBufCards && (t = s.numBufCards + 1, s.currIndex = r + e * t), s.paginationTimer = setInterval(function() {
                    --t > 0 ? s.shuffleCards(e, null, void 0 === i || !i) : (s.shuffleCards(e, function() {
                        s.showContent(r), n && n()
                    }, void 0 === i || i), clearTimeout(s.paginationTimer), s.paginationTimer = null)
                }, 100)))
            },
            next: function(e, t) {
                this.paginate("next", e, t)
            },
            prev: function(e, t) {
                this.paginate("prev", e, t)
            },
            jumpTo: function(e, t, n) {
                var i = this,
                    r = e > i.currIndex ? "next" : "prev",
                    s = Math.abs(e - i.currIndex);
                i.paginate(r, s, t, n)
            },
            getTotal: function() {
                return this.items.length
            },
            getCurrIndex: function() {
                return this.currIndex
            },
            getCurrItem: function() {
                return this.cards[this.middleIndex].firstChild
            },
            getItem: function(e) {
                return e >= 0 && e < this.items.length ? this.items[e] : null
            },
            clear: function() {
                var e;
                for (e = 0; e < this.numCards; e++) this.cards[e].innerHTML = "", this.cards[e].setAttribute("data-index", "")
            },
            setContent: function(e, t) {
                var n = this.items.length;
                !this.isLoop && (t < 0 || t >= n) || (t < 0 ? t = n + t % n : t >= n && (t %= n), parseInt(e.getAttribute("data-index"), 10) !== t && (e.innerHTML = this.items[t], e.setAttribute("data-index", t)))
            },
            resetContent: function(e) {
                e.innerHTML = "", e.setAttribute("data-index", "")
            },
            contentUtilityAdd: function(e, t, i) {
                var r, s, o, a, d = this;
                if ("string" == typeof e && 0 !== e.trim().length && (e = d.hideImagesInMarkup(e), (r = n.createElement("div")).innerHTML = e, 0 !== (o = (s = r.querySelectorAll("div > .js-slider-item") || []).length) && !(2 === t && i + o > this.getTotal()))) {
                    if (0 === t && (d.items = [], d.clear(), d.currIndex = 0), -1 === t)
                        for (a = o - 1; a >= 0; a--) e = s[a].outerHTML, e = d.unhideImagesInMarkup(e), d.items.unshift(e), d.currIndex++;
                    else
                        for (a = 0; a < o; a++) e = s[a].outerHTML, e = d.unhideImagesInMarkup(e), 2 === t ? d.items[i + a] = e : d.items.push(e);
                    d.showContent(d.currIndex)
                }
            },
            removeContent: function(e, t, n) {
                var i, r = this;
                for (i = 0; i < r.numCards; i++) parseInt(r.cards[i].getAttribute("data-index"), 10) === r.currIndex ? r.cards[i].setAttribute("data-index", "") : r.resetContent(r.cards[i]);
                r.items.splice(e, t), r.currIndex = n, r.showContent(n)
            },
            createCards: function() {
                var e, t, n = this;
                for (t = "", e = 0; e < n.numCards; e++) t += '<div class="js-slider-card"></div>';
                for (n.viewport.innerHTML = t, n.cards = n.viewport.querySelectorAll(".js-slider-card"), n.cards = [].slice.call(n.cards), e = 0; e < n.numCards; e++) n.cards[e].style.top = "0", n.cards[e].style.left = "0", n.cards[e].style.width = "100%", n.cards[e].style.height = "100%", n.cards[e].setAttribute("data-index", "")
            },
            resetCards: function() {
                var e, t, n, i, r, o, a = this;
                for (o = a.defaultPositionStyle, n = a.viewportOffsetTop, i = a.middleIndex, a.cards[i].style.position = s, a.translate(a.cards[i], 0, 0), e = a.viewportWidth = a.viewport.offsetWidth, r = 1; r <= a.numBufCards; r++) t = -r * e - a.offsetX, a.cards[i - r].style.position = o, a.translate(a.cards[i - r], t, n), t = r * e + a.offsetX, a.cards[i + r].style.position = o, a.translate(a.cards[i + r], t, n);
                a.isSwipingMode = !1
            },
            setCardsTransition: function(e, t) {
                var n, i = this;
                for (i.isTransitioning = e, n = 0; n < i.numCards; n++) t < 0 && 0 === n || t > 0 && n === i.numCards - 1 ? i.cards[n].classList.remove("FastTrans") : e ? i.cards[n].classList.add("FastTrans") : i.cards[n].classList.remove("FastTrans")
            },
            moveCards: function(e) {
                var t = this,
                    n = t.viewportOffsetTop,
                    r = t.viewportWidth + t.offsetX,
                    o = t.middleIndex;
                return t.isLoop || t.enableBounce || (0 === t.currIndex && e > 0 || t.currIndex === t.items.length - 1 && e < 0) && (e = 0), i(function() {
                    var i, a = t.cards[o - 1];
                    t.translate(a, -r + Math.max(0, e), a.style.position === s ? 0 : n), t.translate(t.cards[o], e, t.isSwipingMode ? n : 0), i = t.cards[o + 1], t.translate(i, r + Math.min(0, e), i.style.position === s ? 0 : n)
                }), e
            },
            shuffleCards: function(e, t, n) {
                var r, s, o, a, d, l, c = this,
                    u = c.middleIndex;
                i(function() {
                    var i, f;
                    r = c.items.length, d = c.currIndex, 1 === e ? (c.currIndex--, c.currIndex < 0 && (c.currIndex = c.isLoop ? r - 1 : 0)) : -1 === e && (c.currIndex++, c.currIndex >= r && (c.currIndex = c.isLoop ? 0 : r - 1)), e = c.currIndex === d ? 0 : e, o = c.cards[u], c.prevCard = o, c.setCardsTransition(!0, e), 0 === e ? (c.moveCards(0), c.swipeAborted = !0, Stencil.utils.dispatch(c.viewport, "slider:swipeabort", {
                        currPage: c.currIndex,
                        fromPage: c.currIndex,
                        currNode: c.cards[u].firstChild,
                        fromNode: c.cards[u].firstChild
                    })) : (c.shiftCardsPosition(e), c.shiftCardsArray(e), c.isSwipingMode || (c.isSwipingMode = !0, c.isIndependentY && (c.scrollPrevCardToTop = !0)), s = e > 0 ? c.cards[0] : c.cards[c.numCards - 1], a = e > 0 ? c.currIndex - c.numBufCards : c.currIndex + c.numBufCards, f = a, (i = s).timer && (clearTimeout(i.timer), i.timer = null), c.resetContent(i), i.timer = setTimeout(function() {
                        c.setContent(i, f), i.timer = null
                    }, 100), l = {
                        currPage: c.currIndex,
                        fromPage: d,
                        currNode: c.cards[u].firstChild,
                        fromNode: o.firstChild
                    }, n && Stencil.utils.dispatch(c.viewport, "slider:swipe", l), t && t(l))
                })
            },
            shiftCardsPosition: function(e) {
                var t, n, i, r, o = this,
                    a = o.viewportWidth + o.offsetX,
                    d = o.viewportOffsetTop,
                    l = o.middleIndex;
                if (e > 0)
                    for (o.translate(o.cards[l], a, o.isSwipingMode ? d : 0), t = 1; t <= o.numBufCards; t++) n = 1 - t, i = o.cards[l - t], o.translate(i, n * a, i.style.position === s ? 0 : d), n = t + 1 <= o.numBufCards ? t + 1 : -o.numBufCards, r = o.cards[l + t], o.translate(r, n * a, r.style.position === s ? 0 : d);
                else if (e < 0)
                    for (o.translate(o.cards[l], -a, o.isSwipingMode ? d : 0), t = 1; t <= o.numBufCards; t++) n = -t - 1 >= -o.numBufCards ? -t - 1 : o.numBufCards, i = o.cards[l - t], o.translate(i, n * a, i.style.position === s ? 0 : d), n = t - 1, r = o.cards[l + t], o.translate(r, n * a, r.style.position === s ? 0 : d)
            },
            shiftCardsArray: function(e) {
                var t, n, i = this,
                    r = i.numCards - 1;
                if (e > 0) {
                    for (t = i.cards[r], n = r; n > 0; n--) i.cards[n] = i.cards[n - 1];
                    i.cards[0] = t
                } else if (e < 0) {
                    for (t = i.cards[0], n = 0; n < r; n++) i.cards[n] = i.cards[n + 1];
                    i.cards[r] = t
                }
            },
            scrollToTop: function(e) {
                n.body.scrollTop = 0, e.style.position = this.defaultPositionStyle
            },
            translate: function(t, n, i) {
                n += "px", i += "px", t.style[e] = "translate3d(" + n + "," + i + ",0)"
            },
            setAdjacentVisibility: function(e) {
                var t = this.middleIndex;
                this.cards[t - 1].style.visibility = e, this.cards[t + 1].style.visibility = e
            },
            getXY: function(e) {
                var t = {
                    x: 0,
                    y: 0
                };
                return e.pageX || e.pageY ? (t.x = e.pageX, t.y = e.pageY) : (t.x = e.clientX + n.body.scrollLeft + n.documentElement.scrollLeft, t.y = e.clientY + n.body.scrollTop + n.documentElement.scrollTop), t.x -= this.viewport.offsetLeft, t.y -= this.viewport.offsetTop, t
            },
            disable: function() {
                this.enabled = !1
            },
            enable: function() {
                this.enabled = !0
            },
            checkIgnoreEdge: function(e) {
                var n = this;
                return !!n.ignoreEdge && ("function" == typeof n.ignoreEdge ? n.ignoreEdge(e.clientX, e.clientY, n.edgeLength) : e.clientX <= n.edgeLength || e.clientX >= t.innerWidth - n.edgeLength)
            },
            handleTouchStart: function(e) {
                var t, n, i = this;
                !i.enabled || i.singleTouch && null !== i.singleTouchId || (i.swipeAborted = !1, n = e.touches[0], i.checkIgnoreEdge(n) ? i.ignoreTouchEvents = !0 : (i.ignoreTouchEvents = !1, t = i.getXY(n), i.pos.axisIntention = i.isScrolling ? "y" : i.isTransitioning ? "x" : "", i.pos.startX = t.x, i.pos.startY = t.y, i.pos.deltaX = 0, i.pos.deltaY = 0, i.pos.absX = 0, i.pos.absY = 0, i.pos.realDeltaX = 0, i.singleTouch && (i.singleTouchId = n.identifier)))
            },
            handleTouchMove: function(e) {
                var t, n, r, s = this;
                if (!s.ignoreTouchEvents && s.enabled) {
                    if (s.singleTouch) {
                        if (null === s.singleTouchId) return;
                        for (r = 0; r < e.touches.length; r++)
                            if (e.touches[r].identifier === s.singleTouchId) {
                                n = e.touches[r];
                                break
                            } if (!n) return
                    } else n = e.touches[0];
                    s.isTransitioning && i(function() {
                        s.setCardsTransition(!1)
                    }), t = s.getXY(n), s.pos.deltaX = t.x - s.pos.startX, s.pos.deltaY = t.y - s.pos.startY, s.pos.absX = Math.abs(s.pos.deltaX), s.pos.absY = Math.abs(s.pos.deltaY), "" === s.pos.axisIntention && (s.pos.absX > 5 && (s.ignoreY || s.pos.absX >= s.pos.absY) ? s.pos.axisIntention = "x" : !s.ignoreY && s.pos.absY > 5 && s.pos.absY > s.pos.absX && (s.pos.axisIntention = "y")), "x" === s.pos.axisIntention ? (e.preventDefault(), s.pos.realDeltaX = s.moveCards(s.pos.deltaX)) : s.preventYScroll && e.preventDefault(), Stencil.utils.dispatch(s.viewport, "slider:move", s.pos)
                }
            },
            handleTouchEnd: function() {
                var e, t, n = this,
                    i = !1;
                n.ignoreTouchEvents || !n.enabled || n.singleTouch && null === n.singleTouchId || ("x" === n.pos.axisIntention ? 0 !== (e = n.pos.realDeltaX) ? (t = 0, e > 20 ? t = 1 : e < -20 && (t = -1), n.shuffleCards(t, null, !0)) : (i = !0, n.resetCards()) : (i = !0, !n.preventYScroll && "y" === n.pos.axisIntention && n.isIndependentY && r && (n.isScrolling = !0)), i && (n.swipeAborted = !0, Stencil.utils.dispatch(n.viewport, "slider:swipeabort", {
                    currPage: n.currIndex,
                    fromPage: n.currIndex,
                    currNode: n.cards[n.middleIndex].firstChild,
                    fromNode: n.cards[n.middleIndex].firstChild
                })), n.singleTouch && (n.singleTouchId = null))
            },
            handleTouchCancel: function() {
                var e = this;
                !e.enabled || e.singleTouch && null === e.singleTouchId || (e.resetCards(), e.swipeAborted = !0, Stencil.utils.dispatch(e.viewport, "slider:swipeabort", {
                    currPage: e.currIndex,
                    fromPage: e.currIndex,
                    currNode: e.cards[e.middleIndex].firstChild,
                    fromNode: e.cards[e.middleIndex].firstChild
                }), e.singleTouch && (e.singleTouchId = null))
            },
            handleSwipingTransitionEnd: function(e) {
                var t = this,
                    n = t.cards[t.middleIndex];
                t.isTransitioning && e.target === n && i(function() {
                    var e, i = t.prevCard,
                        r = i && i.getAttribute("data-index");
                    r = parseInt(r), isNaN(r) && (r = null), e = !i || r === t.currIndex, t.setCardsTransition(!1), t.resetCards(), t.isIndependentY && t.prevCard && t.scrollPrevCardToTop && !e && (t.scrollToTop(t.prevCard), t.scrollPrevCardToTop = !1), Stencil.utils.dispatch(t.viewport, "slider:swipeend", {
                        currPage: t.currIndex,
                        currNode: n,
                        fromPage: r,
                        fromNode: i,
                        samePage: e,
                        aborted: t.swipeAborted
                    }), t.swipeAborted = !1
                })
            },
            handleScroll: function() {
                var e = this;
                r ? e.isScrolling = !1 : (e.isScrolling && clearTimeout(e.isScrolling), e.isScrolling = setTimeout(function() {
                    e.isScrolling = !1
                }, 250))
            },
            handleOrientationChange: function() {
                this.setAdjacentVisibility("hidden"), this.showContent(this.currIndex), this.setAdjacentVisibility("visible")
            },
            hideImagesInMarkup: function(e) {
                return e.replace(/<img([^>]*)src=/gi, "<img$1data-original-src=")
            },
            unhideImagesInMarkup: function(e) {
                return e.replace(/data-original-src=/gi, "src=")
            },
            isValidString: function(e) {
                return "string" == typeof e && -1 !== e.search(/[\w]/)
            },
            findItemIndex: function(e) {
                var t, n = this,
                    i = n.items,
                    r = i && i.length;
                if (!e || !r) return -1;
                for (t = 0; t < r; t++)
                    if (e(i[t])) return t;
                return -1
            }
        }, Angus.Slider = o
    }(), YUI.add("angus-slider", function(e, t) {}, "@VERSION@", {
        requires: ["stencil"]
    });
YUI.add("af-beacon", function(e, t) {
    "use strict";
    var n, a, r, o, i = "error",
        s = "info",
        c = "perf",
        d = window,
        u = {
            once: !1
        },
        f = {
            code: !0,
            src: !0,
            time: !0
        },
        l = ["ActionScript", "Decompress fail"],
        m = ["^resource://"],
        h = {},
        g = [],
        p = !1,
        b = e.merge({
            enable: !0,
            beaconUncaughtErr: !1,
            beaconPageLoadPerf: !1,
            pathPrefix: "/_td_api/beacon",
            sampleSize: 1,
            batch: !0,
            batchInterval: 5
        }, YUI.Env.Af && YUI.Env.Af.settings && YUI.Env.Af.settings.beacon, d.Af && d.Af.config && d.Af.config.beacon),
        S = e.merge(YUI.Env.Af && YUI.Env.Af.settings && YUI.Env.Af.settings.context, d.Af && d.Af.context),
        v = {
            os: e.UA && e.UA.os
        };

    function E(e, t, n) {
        if (!e || !t || !n) return !1;
        var a = e + ":" + t + ":" + n;
        return !!h[a] || (h[a] = !0, !1)
    }

    function _(t, n) {
        var a, r, o, i, s, c, d, u, l = e.QueryString.stringify(t);
        if (l.length <= n) return l;
        for (a = [], r = [], i = 0, s = (o = l.split("&")).length; i < s; i++) "_" === (c = o[i].split("="))[0].charAt(0) || f[c[0]] ? a.push(o[i]) : r.push(o[i]);
        return a = a.join("&"), (r = r.join("&")) && (d = n - a.length, r.length > d && ((r = r.substring(0, d)) ? r += "&_trnc=1" : r = "_trnc=1")), u = [], a && u.push(a), r && u.push(r), u.join("&")
    }

    function y() {
        clearTimeout(a), e.Af.Beacon._sendBatch()
    }

    function A() {
        if (!p && e.Af.Beacon.beaconPageLoadPerf) {
            p = !0;
            var n, a, r, o, i, s = d.performance || d.webkitPerformance || d.msPerformance || d.mozPerformance || d.Performance || {},
                c = {};
            s && s.timing && s.navigation ? (o = s.navigation, n = (i = s.timing).navigationStart, c = {
                navT: o.type,
                navS: n,
                fetS: i.fetchStart - n,
                dluS: i.domainLookupStart - n,
                dluE: i.domainLookupEnd - n,
                conS: i.connectStart - n,
                conE: i.connectEnd - n,
                reqS: i.requestStart - n,
                resS: i.responseStart - n,
                resE: i.responseEnd - n,
                domL: i.domLoading - n,
                domI: i.domInteractive - n,
                domS: i.domContentLoadedEventStart - n,
                domE: i.domContentLoadedEventEnd - n,
                domC: i.domComplete - n,
                lodS: i.loadEventStart - n,
                lodE: i.loadEventEnd - n
            }, i.linkNegotiationStart && i.linkNegotiationEnd && (c.lnkS = i.linkNegotiationStart - n, c.lnkE = i.linkNegotiationEnd - n), i.unloadEventStart && (c.uldS = i.unloadEventStart - n, c.uldE = i.unloadEventEnd - n), i.redirectStart && (c.redC = o.redirectCount, c.redS = i.redirectStart - n, c.redE = i.redirectEnd - n), "number" == typeof i.secureConnectionStart && (c.secS = i.secureConnectionStart > 0 ? Math.max(1, i.secureConnectionStart - n) : 0)) : (n = d.afPerfHeadStart, a = d.afPerfPageEnd, r = d.afPerfPageLoad, n && r && (c.lodE = r - n), n && a && (c.pagE = a - n)), c.lodE && (c.code = "pageload", c.time = c.lodE, e.Af.Beacon.perf(t, c))
        }
    }

    function P() {
        A(), y(), d.removeEventListener("unload", P, !1)
    }

    function L() {
        d.addEventListener("load", A, !1), d.addEventListener("unload", P, !1)
    }(r = {
        _sampled: {},
        _sampleSize: {},
        getKey: function(e) {
            return e && e.type && e.src ? e.type + ":" + e.src : "default"
        },
        isSampled: function(t) {
            var n = this.getKey(t);
            return e.Lang.isBoolean(this._sampled[n]) ? this._sampled[n] : this._sampled["default"]
        },
        setSize: function(e, t) {
            var n, a, r = this,
                o = r.getKey(t);
            return e = parseInt(e, 10), isNaN(e) || e === r._sampleSize[o] || (r._sampled[o] = 1 === e || e > 0 && 1 === (n = 1, a = e, Math.floor(Math.random() * (a - n + 1)) + n), r._sampleSize[o] = e), r._sampled[o]
        }
    }).setSize(b.sampleSize), b.sampleSizeUncaughtErr && r.setSize(b.sampleSizeUncaughtErr, {
        type: i,
        src: "rt"
    }), e.Array.each(["rid", "bucket", "device", "site"], function(e) {
        S[e] && (v[e] = S[e]), f[e] = !0
    }), v = e.merge(v, b.meta || {}), e.namespace("Af").Beacon = {
        enable_beaconrterr: b.beaconUncaughtErr,
        beaconPageLoadPerf: b.beaconPageLoadPerf,
        enable_batching: b.batch,
        batch_interval: b.batchInterval,
        meta: v,
        pathPrefix: b.pathPrefix,
        setSampleSize: function(e, t) {
            return r.setSize(e, t)
        },
        isSampled: function(e) {
            return r.isSampled(e)
        },
        _queryStringify: _,
        send: function(t, n, a) {
            if (t) {
                var r, o = new Image;
                o.onerror = function(e) {
                    var t = e instanceof Error ? e.toString() : e;
                    i(a, t)
                }, o.onload = function() {
                    i(a)
                };
                try {
                    return n && e.Object.size(n) && (n._rdn = (new Date).getTime().toString().substr(7), t += "?" + _(n, 2048)), o.src = t, void(a && setTimeout(function() {
                        i(a, "aborted")
                    }, 4e3))
                } catch (s) {
                    i(a, "path failed")
                }
            } else a && a("invalid beacon path");

            function i(e, t) {
                e && !r && (r = !0, e(t))
            }
        },
        _enqueue: function(e, t, n) {
            g.push({
                beacon: {
                    type: e,
                    data: t
                },
                cb: n
            })
        },
        _dequeueAll: function() {
            return g.splice(0, g.length)
        },
        _sendBatch: function() {
            if (0 !== g.length) {
                var t, n = this._dequeueAll(),
                    a = this.pathPrefix + "/batch";
                try {
                    t = {
                        method: "POST",
                        timeout: 4e3,
                        data: e.JSON.stringify(n),
                        headers: {
                            "Content-Type": "application/json"
                        },
                        on: {
                            success: function(e) {
                                r(n)
                            },
                            failure: function(e, t) {
                                r(n, t.status + ":" + t.statusText)
                            }
                        }
                    }, e.io(a, t)
                } catch (o) {
                    r(n, "path failed")
                }
            }

            function r(e, t) {
                var n, a = e.length;
                for (n = 0; n < a; n++) e[n] && e[n].cb && e[n].cb(t)
            }
        },
        xhr: function(t, n, a) {
            if (t) {
                var r;
                r = {
                    method: "GET",
                    timeout: (n = n || {}).timeout || 2e3,
                    headers: n.headers || {},
                    on: {
                        success: function(e, t) {
                            a && a({
                                statusCode: t.status
                            })
                        },
                        failure: function(e, t) {
                            a && a({
                                statusCode: t.status,
                                statusText: t.statusText,
                                respText: t.responseText
                            })
                        }
                    }
                };
                try {
                    t += "?" + _(n.query, 2048), e.io(t, r)
                } catch (o) {
                    a && a("querystring stringify failed")
                }
            } else a && a("invalid xhr path")
        },
        error: function(t, n, a, r) {
            var o, s, c;
            if (o = (r = e.merge(u, r)).callback, a)
                if (!this.isSampled({
                        type: i,
                        src: t
                    }) || this._shouldIgnoreError(a) || !0 === r.once && a.code && E(i, t, a.code)) o && o();
                else {
                    if (c = Object.prototype.toString.call(a), a) {
                        switch (c) {
                            case "[object String]":
                                s = {
                                    code: 999,
                                    message: a
                                };
                                break;
                            case "[object Error]":
                                s = {
                                    code: a.code || a.name || 999,
                                    message: a.message,
                                    line: a.lineNumber || "",
                                    file: a.fileName || ""
                                };
                                break;
                            case "[object Object]":
                                s = a;
                                break;
                            default:
                                try {
                                    s = {
                                        code: 999,
                                        message: e.JSON.stringify(a)
                                    }
                                } catch (d) {}
                        }
                        s.message = s.message && s.message.substring(0, 300) || ""
                    }
                    this._send(i, t, e.merge(this.meta, n, s), o)
                }
            else o && o("missing error")
        },
        info: function(t, n, a) {
            var r;
            r = (a = e.merge(u, a)).callback, n && n.code ? !this.isSampled({
                type: s,
                src: t
            }) || !0 === a.once && E(s, t, n.code) ? r && r() : this._send(s, t, e.merge(this.meta, n), r) : r && r("missing data.code")
        },
        perf: function(t, n, a) {
            var r;
            r = (a = e.merge(u, a)).callback, n && n.code && e.Object.owns(n, "time") ? !this.isSampled({
                type: c,
                src: t
            }) || !0 === a.once && E(c, t, n.code) ? r && r() : this._send(c, t, e.merge(this.meta, n), r) : r && r("missing data.code or data.time")
        },
        ignoreError: function(e) {
            e && l.push(e)
        },
        ignoreURL: function(e) {
            e && m.push(e)
        },
        _shouldIgnoreError: function(e) {
            if (!e) return !0;
            var t, n, a;
            if (!(a = "string" == typeof e ? e : e.message)) return !1;
            for (t = 0, n = l.length; t < n; t++)
                if (a.match(l[t])) return !0;
            return !1
        },
        _shouldIgnoreURL: function(e) {
            if (!e) return !1;
            var t, n;
            for (t = 0,
                n = m.length; t < n; t++)
                if (e.match(m[t])) return !0;
            return !1
        },
        _send: function(e, t, n, a) {
            if (b.enable) {
                var r = this.pathPrefix;
                r ? e ? n ? (t && (n.src = t), this.enable_batching ? this._enqueue(e, n, a) : this.send(r + "/" + e, n, a)) : a && a("no beacon data") : a && a("no beacon type") : a && a("no beacon pathPrefix")
            } else a && a()
        }
    }, n = d.onerror, d.onerror = function(t, a, r) {
        var o, i = e.Af.Beacon;
        try {
            i.enable_beaconrterr && !i._shouldIgnoreURL(a) && (o = {
                code: t.name,
                message: t.message || t,
                url: a && a.substring(0, 300),
                line: t.lineNumber || r || "",
                file: t.fileName || ""
            }, i.error("rt", {}, o))
        } catch (s) {}
        return "function" == typeof n && n(t, a, r)
    }, b.enable && e.Af.Beacon.enable_batching && (o = e.Af.Beacon.batch_interval, a = setInterval(function() {
        e.Af.Beacon._sendBatch()
    }, 1e3 * o)), d.addEventListener ? (d.addEventListener("pageshow", L, !1), L()) : d.attachEvent && (d.attachEvent("onload", A), d.attachEvent("onunload", A), d.attachEvent("onunload", y))
}, "@VERSION@", {
    requires: ["json-stringify", "querystring-stringify-simple", "io-base"]
});
YUI.add("af-bootstrap", function(t) {
    "use strict";
    var e = t.Object,
        n = t.Af.Utils,
        r = t.Lang,
        u = t.Array,
        a = n.perfStart,
        o = n.perfStop,
        i = 0,
        s = n.objectGetValue,
        l = t.config.win;

    function c() {
        return l.Af && l.Af.bootstrap || YUI.Env.Af && YUI.Env.Af.bootstrap
    }

    function f(e) {
        if (!e) return null;
        var n = e.split(".");
        return "Y" === n[0] && n.shift(), s(t, n)
    }

    function d(t) {
        var e = c();
        return e && e[t] || {}
    }

    function p(t) {
        return t && !0 !== t.lazy_load
    }
    t.namespace("Af").Bootstrap = {
        _getYUIModules: function(t, n) {
            var r = [];
            return t && u.each(["models", "views", "templates"], function(u) {
                e.each(t[u], function(t) {
                    !t.yui_module || n && !n(t) || r.push(t.yui_module)
                })
            }), r
        },
        find: function(e) {
            var n = null;
            return t.Object.each(c(), function(t, r) {
                e(r, t) && ((n = n || {})[r] = t)
            }), n
        },
        load: function(s, l, f) {
            if (f = f || n.noop, !s) return f();
            r.isString(s) && (s = [s]);
            var d, g = l && l.extraMods || [],
                M = c();
            if (M && e.size(M) && (u.each(s, function(t) {
                    var e = M[t];
                    g = g.concat(this._getYUIModules(e, p))
                }, this), g = u.dedupe(g)), 0 === g.length) return f();
            d = "bsload:yuiuse-" + ++i + ":" + g.length, a(d), l && l.batch ? n.use(g, function() {
                o(d), f()
            }) : t.use(g, function() {
                o(d), f()
            })
        },
        createModel: function(e, n) {
            var r, u = this.getModelMeta(e, n),
                a = f(u.yui_class),
                o = u.config,
                i = u.data;
            return a && (a.prototype._isYUIModel ? r = new a(t.merge(o, i)) : a.prototype._isYUIModelList ? r = new a(t.merge(o, {
                items: i || []
            })) : (r = new a(o), i && (r.setAttrs ? r.setAttrs(i, {
                silent: !0
            }) : r.reset && r.reset(i, {
                silent: !0
            })))), r
        },
        getMeta: function(t) {
            return d(t)
        },
        hasMeta: function(t) {
            var n = c();
            return n && e.owns(n, t)
        },
        getModelMeta: function(t, e) {
            var n = d(t);
            return n.models && n.models[e] || {}
        },
        getModelClass: function(t, e) {
            return f(this.getModelMeta(t, e).yui_class)
        },
        getModelData: function(t, e) {
            return this.getModelMeta(t, e).data
        },
        getViewMeta: function(t, e) {
            var n = d(t);
            return n.views && n.views[e] || {}
        },
        getViewClass: function(t, e) {
            return f(this.getViewMeta(t, e).yui_class)
        },
        getTemplateName: function(t, e) {
            var n = d(t);
            return n.templates && n.templates[e] && n.templates[e].template_name || null
        },
        getLazyLoadYuiModules: function(t, n) {
            var r = d(t),
                u = [];
            return r && n && r[n] && e.each(r[n], function(t) {
                t.yui_module && !0 === t.lazy_load && u.push(t.yui_module)
            }), u
        }
    }
}, "@VERSION@", {
    requires: ["af-utils"]
});
YUI.add("af-cache", function(e, t) {
    "use strict";
    var r, a, n, i, s, o = e.Lang,
        c = o.isFunction,
        l = null,
        u = {
            once: !0
        },
        f = "lsfull",
        g = "AF_",
        d = "max-age",
        h = "stale-while-revalidate";
    r = {
        parse: function(t, r) {
            if (!t) return r("missing Cache-Control");
            var a, n, i = {};
            return e.Array.forEach(t.toLowerCase().split(","), function(e) {
                (e = o.trim(e).split("=")).length > 1 ? i[e[0]] = e[1] : 1 === e.length && (i[e[0]] = !0)
            }), i["no-cache"] || i["no-store"] ? r("no-cache/no-store is on") : (a = parseInt(i[d], 10), isNaN(a) || a <= 0 ? r("invalid max-age:" + i[d]) : ((n = {})[d] = a, n[h] = parseInt(i[h], 10) || 0, r(l, n)))
        }
    }, s = {
        VERSION: "1.0",
        isCompatible: function() {
            var t = s,
                r = e.StorageLite.getItem(g + "version");
            return r && r.split(".")[0] === t.VERSION.split(".")[0]
        },
        save: function() {
            var t = s;
            e.StorageLite.setItem(g + "version", t.VERSION)
        }
    }, a = {
        enabled: (i = {
            nowInSec: function() {
                return Math.floor((new Date).getTime() / 1e3)
            },
            getLocalStorage: function() {
                var t;
                try {
                    t = e.config.win.localStorage
                } catch (r) {
                    t = null
                }
                return t
            },
            isNative: function() {
                var e = this.getLocalStorage();
                return !!(e && e.length !== undefined && e.key && e.getItem && e.setItem && e.removeItem)
            },
            isNativeEnabled: function() {
                var e = this,
                    t = e.getLocalStorage(),
                    r = g + "test";
                if (e._isNativeEnabled !== undefined) return e._isNativeEnabled;
                if (null === t || !e.isNative()) return e._isNativeEnabled = !1, !1;
                e._isNativeEnabled = !0;
                try {
                    t.setItem(r, "1"), t.removeItem(r)
                } catch (a) {
                    0 === t.length && (e._isNativeEnabled = !1)
                }
                return e._isNativeEnabled
            }
        }).isNativeEnabled(),
        build: function() {
            if (this.enabled) {
                var e, t, r, a, n = this,
                    s = i.getLocalStorage(),
                    o = s && s.length || 0;
                for (n.records = [], e = 0; e < o; e++) 0 === (r = s.key(e)).indexOf(g) && (t = s.getItem(r), (a = n.parseMeta(t)) && (a.key = r, n.records.push(a)))
            }
        },
        filter: function(e, t) {
            var r, a, n = {
                    keep: [],
                    out: []
                },
                i = this.records.length;
            for (r = 0; r < i; r++) a = this.records[r], e.call(t, a) ? n.keep.push(a) : n.out.push(a);
            return n
        },
        formatMeta: function(e) {
            return e && e.access > 0 && e.expires > 0 && e.stale >= 0 ? e.access + ":" + e.expires + ":" + e.stale + ":" : l
        },
        parseMeta: function(e) {
            var t = e.split(":", 3);
            return t && 3 === t.length ? (t = {
                access: parseInt(t[0], 10),
                expires: parseInt(t[1], 10),
                stale: parseInt(t[2], 10),
                size: e.length
            }, isNaN(t.access) || isNaN(t.expires) || isNaN(t.stale) || t.access <= 0 || t.expires <= 0 || t.stale < 0 ? l : t) : l
        },
        du: function() {
            if (!this.records) return l;
            var e, t = 0,
                r = this.records.length,
                a = i.getLocalStorage(),
                n = a && a.length || 0;
            for (e = 0; e < r; e++) t += this.records[e].size;
            return [r, t, n]
        },
        remove: function(e) {
            if (this.enabled) {
                var t, r = -1,
                    a = this.records.length;
                for (t = 0; t < a; t++)
                    if (this.records[t].key === e) {
                        r = t;
                        break
                    } r >= 0 && this.records.splice(r, 1)
            }
        },
        update: function(e, t) {
            if (this.enabled) {
                var r, a, n = this.records || [],
                    s = n.length,
                    o = i.nowInSec(),
                    c = i.getLocalStorage(),
                    u = c && c.getItem(e) || null;
                for (a = 0; a < s; a++)
                    if (n[a].key === e) {
                        r = n[a];
                        break
                    } u !== l ? r ? (r.expires = t && t.expires || r.expires, r.stale = t && t.stale || r.stale || 0, r.access = t && t.access || o, r.size = u.length) : t && n.push({
                    key: e,
                    expires: t.expires,
                    stale: t.stale,
                    access: t.access || o,
                    size: u.length
                }) : r && n.splice(a, 1)
            }
        },
        save: function(e) {
            this.enabled && (this.records = e)
        }
    }, n = {
        _enabled: i.isNativeEnabled(),
        _lpurged: !1,
        lpurge: function() {
            if (!n._lpurged && n._enabled) {
                n._lpurged = !0;
                var e = i.getLocalStorage();
                e && e.clear && !s.isCompatible() && (e.clear(), s.save())
            }
        },
        purge: function(t, r) {
            if (!t || !n._enabled) return !1;
            var s, o, c, l, u, f, g, d, h = e.StorageLite;
            for (r = r || 0, s = i.nowInSec(), l = 0, u = (g = (o = a.filter(function(e) {
                    return e.expires + e.stale > s
                })).out).length; l < u; l++)(d = g[l]).size && (t -= d.size), t < 0 && (r += t), d.key && h.removeItem(d.key);
            if (t <= 0 && r <= 0) return a.save(o.keep), !0;
            for ((c = o.keep).sort(function(e, t) {
                    return e.access - t.access || t.size - e.size
                }), f = [], l = 0, u = c.length; l < u; l++) d = c[l], t <= 0 && r <= 0 ? f.push(c[l]) : t > 0 ? ((t -= d.size) < 0 && (r += t), h.removeItem(d.key)) : r > 0 && (r -= d.size, h.removeItem(d.key));
            return a.save(f), t <= 0
        },
        purgeStale: function() {
            var t, r, s, o, c = n,
                l = i.nowInSec();
            if (!c._enabled) return !1;
            if ((o = (s = a.filter(function(e) {
                    return e.expires + e.stale > l
                })).out).length) {
                for (t = 0, r = o.length; t < r; t++) e.StorageLite.removeItem(o[t].key);
                a.save(s.keep)
            }
            return !0
        }
    }, e.namespace("Af").Cache = {
        _utils: i,
        _version: s,
        _meta: a,
        _cacheControl: r,
        _pruner: n,
        du: function() {
            return a.du()
        },
        isNative: function() {
            return i.isNative()
        },
        isNativeEnabled: function() {
            return i.isNativeEnabled()
        },
        get: function(t, r, a) {
            if (c(r) && (a = r, r = {}), !t) return a && a("missing cache key");
            r = e.merge({
                json: !0,
                silent: !0
            }, r);
            var n, s, o, u = g + t,
                f = e.StorageLite.getItem(u),
                d = !1;
            if (f === l) return a && a(l, l);
            if (!(n = this._meta.parseMeta(f))) return e.StorageLite.removeItem(t), a && a(l, l);
            if (s = f.substring(this._meta.formatMeta(n).length), o = i.nowInSec(), n.expires + n.stale < o) return e.Af.Cache.remove(t), a && a(l, l);
            if (r.json) try {
                s = e.JSON.parse(s), d = !0
            } catch (h) {
                s = l, e.Af.Cache.remove(t)
            } else d = !0;
            if (d && !r.silent) {
                this._meta.update(u), f = o + f.substring(10);
                try {
                    e.StorageLite.setItem(t, f)
                } catch (v) {}
            }
            return a && a(l, s, n.expires < o ? {
                isStale: !0
            } : undefined)
        },
        set: function(a, n, i, s, o) {
            c(s) && (o = s, s = {});
            var v = this;
            return v.isNative() && !v.isNativeEnabled() ? o && o("native disabled") : a ? void r.parse(i, function(r, i) {
                if (r) return o && o(r);
                var c, p, m, b, I = v._utils.nowInSec(),
                    N = g + a,
                    S = v._pruner,
                    _ = v._meta;
                if ((s = e.merge({
                        json: !0,
                        purgeExtra: 30
                    }, s)).json) try {
                    n = e.JSON.stringify(n)
                } catch (y) {
                    return o && o(y)
                }
                if (c = I + i[d], b = {
                        expires: c,
                        stale: i[h],
                        access: I
                    }, !(m = v._meta.formatMeta(b))) return o && o("invalid metaData");
                m += n;
                try {
                    return e.StorageLite.setItem(N, m, !1), _.update(N, b), o && o(l)
                } catch (E) {
                    if (p = m.length, !S.purge(p, s.purgeExtra * p)) return e.Af.Beacon.error(t, {}, {
                        code: f,
                        message: "not enough space",
                        errDetail: E.name + ":" + E.message,
                        key: a,
                        size: p,
                        du: v.du().join(":"),
                        nativeEnabled: v.isNativeEnabled()
                    }, u), o && o(E);
                    try {
                        return e.StorageLite.setItem(N, m, !1), _.update(N, b), o && o(l)
                    } catch (k) {
                        return e.Af.Beacon.error(t, {}, {
                            code: f,
                            message: "purge not enough",
                            errDetail: k.name + ":" + k.message,
                            key: a,
                            size: p,
                            du: v.du().join(":"),
                            nativeEnabled: v.isNativeEnabled()
                        }, u), o && o(k)
                    }
                }
            }) : o && o("missing cache key")
        },
        remove: function(t, r) {
            var a = g + t;
            return e.StorageLite.removeItem(a), this._meta.remove(a), r && r(l)
        }
    }, i.isNativeEnabled() && (e.Af.Cache._pruner.lpurge(), e.Af.Cache._meta.build())
}, "@VERSION@", {
    requires: ["af-beacon", "json", "gallery-storage-lite"]
});
YUI.add("af-compositeview", function(e, i) {
    "use strict";
    var t = e.Af.Utils,
        n = e.Lang.isFunction,
        o = e.Object,
        s = e.Parallel;

    function r(e, i, t, n) {
        var o = this;
        o.name = e, o.parent = i, o.selector = t, o.view = n
    }

    function a() {}
    r.prototype = {
        setView: function(e) {
            return this.view = e, this
        },
        showView: function(e, i) {
            var t, o = this,
                r = o.view;
            if (r !== e) return i = i || {}, r && n(r.willHide) || e && n(e.willShow) ? (t = new s, r && n(r.willHide) && r.willHide(t.add(function() {})), e && n(e.willShow) && e.willShow(t.add(function() {})), t.done(a)) : a(), o;

            function a() {
                o.detachView(), o.view = e, o.attachView()
            }
        },
        closeView: function() {
            var e = this,
                i = e.view;

            function t() {
                e.detachView(), e.view = undefined
            }
            return i && n(i.willHide) ? i.willHide(t) : t(), e
        },
        getView: function() {
            return this.view
        },
        detachView: function(e) {
            var i = this,
                t = i.view;
            return t && (t.remove(e), t.removeTarget(i.parent), t.set("display", null)), i
        },
        getContainer: function() {
            return this.parent.get("container").one(this.selector)
        },
        attachView: function() {
            var e, i, t = this,
                n = t.view;
            return n && ((e = t.getContainer()).addClass("yui3-app-views"), (i = n.get("container")) && e !== i.get("parentNode") && e.append(i), n.addTarget(t.parent), n.set("display", t.name)), t
        },
        show: function() {
            return this.getContainer().show(), this
        },
        hide: function() {
            return this.getContainer().hide(), this
        }
    }, a.prototype = {
        allowRegionLateBind: !0,
        initializer: function(i) {
            var n = this;
            i = i || {}, n.views = t.objectMerge({}, n.views, i.views), t.objectMerge({}, n.regions, i.regions), o.each(n.regions, function(i, t) {
                var o, s = n.getRegion(t);
                s || (s = n.createRegion(t, i.selector)), i.view && s && (o = e.Lang.isString(i.view) ? n.getView(i.view) : i.view) && s.showView(o)
            })
        },
        attachRegionViews: function() {
            o.each(this._regions, function(e) {
                e.attachView()
            })
        },
        detachRegionViews: function(e) {
            o.each(this._regions, function(i) {
                i.detachView(e)
            })
        },
        createRegion: function(e, i) {
            var t = this;
            return t._regions || (t._regions = {}), i = i || '[data-region="' + e + '"]', t.allowRegionLateBind || t.get("container").one(i) ? (t._regions[e] = new r(e, t, i, null), t._regions[e]) : null
        },
        getRegion: function(e) {
            return this._regions ? this._regions[e] : null
        },
        destroyView: function(i, t) {
            if (i) {
                var n, o = this._views,
                    s = t && !0 === t.async;
                "string" == typeof i && (i = o ? o[i] : null), i && (n = i.get("name"), i === o[n] && delete o[n], s ? e.later(0, null, function() {
                    i.destroy(t)
                }) : i.destroy(t))
            }
        },
        destroyViews: function(i) {
            var t = this._views,
                n = i && !0 === i.async;
            this._views = {}, n ? e.later(0, null, function() {
                o.each(t, function(e) {
                    e.destroy(i)
                })
            }) : o.each(t, function(e) {
                e.destroy(i)
            })
        },
        getView: function(e) {
            return this._views ? this._views[e] : null
        },
        setView: function(e, i) {
            this._views || (this._views = {}), this._views[e] = i
        }
    }, e.namespace("Af").CompositeView = a
}, "@VERSION@", {
    requires: ["parallel", "af-utils"]
});
YUI.add("af-comscore", function(n, e) {
    "use strict";
    var c = window.location,
        o = n.Af.Config.get("spaceid"),
        t = ("https:" === c.protocol ? "https://sb" : "http://b") + ".scorecardresearch.com/p",
        s = n.Af.Config.get("comscore") || {},
        r = function(e, c) {
            var o = t + "?" + n.QueryString.stringify(c);
            n.Af.Beacon.send(o), e.panelPath && n.Af.Beacon.xhr(e.panelPath, {
                query: e.panelQuery
            })
        };
    n.namespace("Af").Comscore = {
        beacon: function(n) {
            if ((n = n || {}).spaceid || o) {
                var e = {
                    c1: "2",
                    c2: "7241469",
                    c5: n.spaceid || o,
                    c7: n.url || c.protocol + "//" + c.host + c.pathname,
                    c14: n.c14 || s.c14 || -1,
                    ns_c: "UTF-8",
                    ns__t: (new Date).getTime()
                };
                "function" == typeof window.__cmp ? window.__cmp("getVendorConsents", null, function(c, o) {
                    if (!0 === o && c && c.gdprApplies && c.vendorConsents) {
                        e.cs_ucfr = c.vendorConsents[77] ? 1 : 0
                    }
                    r(n, e)
                }) : r(n, e)
            }
        }
    }
}, "@VERSION@", {
    requires: ["af-beacon", "af-config", "querystring-stringify-simple"]
});
YUI.add("af-config", function(e) {
    "use strict";
    var t, n, o, i, r, c = e.Af.Utils,
        f = "context",
        s = ["bucket", "crumb", "device", "ssl", "site", "lang", "region", "intl", "partner"],
        u = ["dev_info", "logLevel", "perf", "tachyonHost"],
        a = e.config.win,
        g = YUI.Env;

    function l() {
        r || (n = e.merge(g.Af && g.Af.settings && g.Af.settings.context, a.Af && a.Af.context), o = e.Array.dedupe(s.concat(u).concat(e.Object.keys(n))), i = e.merge(n, c.urlParseQuery()), t = e.merge({}, g.Af && g.Af.settings, a.Af && a.Af.config), r = !0)
    }
    e.namespace("Af").Config = {
        contextKeys: function() {
            return l(), o
        },
        get: function(n, o) {
            var r;
            return l(), r = n === f ? e.merge(i) : 0 === n.indexOf(f + ".") ? c.objectGetValue(i, n.substring(8)) : c.objectGetValue(t, n), e.Lang.isValue(r) ? r : o
        },
        getContext: function(e, t) {
            return this.get(f + "." + e, t)
        },
        isDev: function() {
            var e = this.getContext("env"),
                t = window.location.hostname;
            return !(!e || "dev" !== e && "corp" !== e && "development" !== e) || ("localhost" === t || t && t.indexOf(".corp.") > 0)
        },
        isFeatureOn: function(e, t) {
            if (!e) return !1;
            var n = this.getContext("enable_" + e, t);
            return c.urlParseBoolean(n)
        },
        isUserSignedIn: function(t) {
            t = !0 === t;
            var n = window.Af && window.Af.context && window.Af.context.authed,
                o = e.Cookie;
            return "2" === n || 2 === n ? !t : "1" === n || 1 === n || "0" !== n && 0 !== n && !(!o.getSub("Y", "n") || !o.getSub("Y", "l"))
        }
    }
}, "@VERSION@", {
    requires: ["af-utils", "cookie"]
});
YUI.add("af-content", function(e, t) {
    "use strict";
    var n = e.Lang,
        i = e.Af.Utils,
        o = e.Af.Config,
        r = e.Af.Dom,
        s = e.Mjata.REST.HTTP,
        p = n.isFunction,
        a = n.isNumber,
        l = n.isObject,
        c = n.isString,
        u = i.objectGetValue,
        d = "replace_content",
        m = ".js-applet",
        h = "appletsinit";
    e.namespace("Af").Content = {
        simple: function(t, n, o) {
            return t = e.one(t), o = o || i.noop, t && n && n.html ? (r.setHTML(t, n.html), n.js && r.jsAttach(n.js), o(null), this) : (o("invalid param"), this)
        },
        applet: function(t, n, o, r) {
            return r = r || i.noop, t && n && o ? (n = e.one(n)) ? void(c(t) ? (s = u(e, t)) ? this._initApplet(s, o, {
                node: n,
                where: d
            }, r) : e.onceAfter(h, function(e) {
                this._initApplet(e.applets, o, {
                    node: n,
                    where: d
                }, r)
            }, this) : l(t) ? this._initApplet(t, o, {
                node: n,
                where: d
            }, r) : e.onceAfter(h, function(e) {
                this._initApplet(e.applets, o, {
                    node: n,
                    where: d
                }, r)
            }, this)) : r("invalid node") : r("invalid param");
            var s
        },
        remoteApplet: function(t, n, i) {
            n = n || {};
            var r, s = o.get("context") || {},
                p = o.get("td") || {},
                l = e.merge(n.params, {
                    initApplet: 0,
                    initStencil: 0,
                    m_id: n.type,
                    m_mode: "json"
                }),
                c = n.placement && n.placement.node,
                u = n.placement && n.placement.where,
                d = {};
            return n.type ? (c = e.one(c)) ? (a(u) || (u = u || "replace"), "https:" === window.location.protocol ? l.ssl = 1 : l.ssl = 0, !l.site && s.site && (l.site = s.site), !l.lang && s.lang && (l.lang = s.lang), !l.region && s.region && (l.region = s.region), !l.xhr_path && p.api && (l.xhr_path = p.api), n.guid && (l.instance_id = n.guid), r = n.uri || p.remote || "/_remote", a(n.timeout) && n.timeout > 0 && (d.timeout = n.timeout), void this["post" === n.method ? "_post" : "_get"](t, r, l, c, u, d, i)) : i && i("missing options.placement.node") : i && i("missing options.type")
        },
        _get: function(t, n, i, o, r, p, a) {
            var l = this;
            n += "?" + e.QueryString.stringify(i), s.get(n, {}, p || {}, function(e, n) {
                l._parseContent(t, void 0, o, r, a, e, n)
            })
        },
        _post: function(e, t, n, i, o, r, p) {
            var a = this;
            t += "?m_id=" + encodeURIComponent(n.m_id), n.ctrl && (t += "&ctrl=" + encodeURIComponent(n.ctrl)), s.post(t, {}, n, r || {}, function(t, n) {
                a._parseContent(e, void 0, i, o, p, t, n)
            })
        },
        _parseContent: function(t, n, i, o, r, s, p) {
            if (s) return r && r(s);
            if (!p || !p.responseText) return r && r("empty content");
            try {
                n = e.JSON.parse(p.responseText), this._initApplet(t, n, {
                    node: i,
                    where: o
                }, r)
            } catch (a) {
                return r && r("invalid json content:" + a.message)
            }
        },
        _initApplet: function(t, n, i, o) {
            return p(t.initApplet) ? (i = e.merge({
                where: "replace"
            }, i), n && (i.where === d && (s = (s = e.Node.create(n.html)).one("div.js-applet") || s, n.html = s.getHTML(), i.where = "replace"), r = this._insert(n, i)), r ? (e.use("stencil", function(e) {
                var t = e.Stencil;
                t && t.initAll && t.initAll(r)
            }), void e.later(5, null, function() {
                t.initApplet(r, !0), o(null)
            })) : o("missing applet node")) : o("missing initApplet()");
            var r, s
        },
        _insert: function(t, n) {
            var i, o;
            switch (n.node.insert(t.html, n.where), n.where) {
                case "before":
                    i = n.node.previous(m);
                    break;
                case "after":
                    i = n.node.next(m);
                    break;
                case "replace":
                    i = n.node.one(m) || n.node;
                    break;
                default:
                    e.Lang.isNumber(n.where) && (i = n.node.get("children").item(n.where))
            }
            return i && (o = t.js || t.assets) && r.jsAttach(o), i
        },
        rmp: function(t) {
            e.use("media-rmp", function(e) {
                e.Media.RMP.load(t)
            })
        }
    }
}, "@VERSION@", {
    requires: ["af-config", "af-dom", "af-utils", "json-parse", "mjata-rest-http", "node-pluginhost", "querystring-stringify"]
});
YUI.add("af-cookie", function(e) {
    "use strict";
    var t = e.Cookie,
        n = e.JSON,
        a = e.Lang,
        r = e.config.win.location.hostname,
        i = "apeaf";

    function o() {
        var e = new Date;
        return e.setFullYear(e.getFullYear() + 1), e
    }
    e.namespace("Af").Cookie = {
        get: function(e, r) {
            var o = t.getSub(i, e),
                s = null;
            return o && (s = n.parse(o)[r] || null, a.isObject(s) && a.isNumber(s._e) && s._e < +new Date / 1e3 && (this.remove(e, r), s = null)), a.isObject(s) && s.hasOwnProperty("_v") ? s._v : s
        },
        set: function(a, s, u, c) {
            var l = t.getSub(i, a),
                f = l ? e.JSON.parse(l) : {};
            f[s] = c ? {
                _v: u,
                _e: Math.floor(+new Date / 1e3 + c)
            } : u, t.setSub(i, a, n.stringify(f), {
                expires: o(),
                domain: r,
                path: "/"
            })
        },
        remove: function(e, a) {
            var s, u, c, l = t.getSub(i, e);
            l && (delete(s = n.parse(l))[a], u = n.stringify(s), c = {
                expires: o(),
                domain: r,
                path: "/"
            }, "{}" === u ? t.removeSub(i, e, c) : t.setSub(i, e, u, c))
        }
    }
}, "@VERSION@", {
    requires: ["cookie", "json"]
});
YUI.add("af-dom", function(e) {
    "use strict";
    e.namespace("Af").Dom = {
        parseForm: function(t) {
            var n = {};
            return e.one(t).all("input,select,textarea").each(function(t) {
                var a = t.getData("setting") || t.get("name"),
                    c = t.get("tagName"),
                    o = t.get("type");
                "INPUT" !== c || "radio" !== o ? "INPUT" !== c || "checkbox" !== o ? ("INPUT" !== c || "submit" !== o && "reset" !== o) && (n[a] = t.get("value")) : t.get("checked") && (e.Lang.isArray(n[a]) || (n[a] = []), n[a].push(t.get("value"))) : t.get("checked") && (n[a] = t.get("value"))
            }), n
        },
        jsAttach: function(t, n) {
            var a, c, o = e.Node.create("<div></div>"),
                r = "";
            o.setContent(t), o.all("script").each(function(e) {
                r += e._node.text + ";"
            }), a = e.one(document.createElement("script"));
            try {
                a.set("text", r)
            } catch (i) {
                a._node.text = r
            }
            c = document.write, document.write = this.noop, (n = n || e.one("head")).appendChild(a), document.write = c
        },
        purgeSubtree: function(e) {
            e && e.get("children").each(function(e) {
                e.purge(!0)
            })
        },
        setHTML: function(e, t) {
            e && e.empty().setHTML(t)
        }
    }
}, "@VERSION@", {
    requires: ["node-base", "node-core"]
});
YUI.add("af-dwelltime", function(n, e) {
    "use strict";
    var t, i = window,
        u = ["domready", "idle", "navigate", "beforeunload", "pagehide"],
        a = n.Lang.isFunction;

    function s() {
        var n = this;
        n.trackEvents = !1, n.events = [], n._initListeners(), n._inPageBlurred = !1
    }
    s.prototype = {
        start: function(e) {
            var i = this;
            i.uuid && i.events.length > 0 && (i.pushEvent("navigate"), i._sendBeacon(i.uuid)), i.uuid = e && e.uuid || "", i.uuid && (i.events = [], i.trackEvents = !0, i.beaconSent = !1, i.pushEvent("domready"), t && a(t.cancel) && t.cancel(), t = n.later(6e5, this, function() {
                i.pushEvent("idle"), i._sendBeacon()
            }))
        },
        navigate: function() {
            this.pushEvent("navigate"), this._sendBeacon()
        },
        pushEvent: function(n) {
            var e, t = this,
                i = {};
            return !(!t.trackEvents || !n || !t._isNavEvent(n) && t.events.length >= 15) && (e = (new Date).getTime(), i[n] = e, t.events.push(i), e)
        },
        pushInPageFocus: function() {
            var n = this;
            n._inPageBlurred && n.pushEvent("focus"), n._inPageBlurred = !1
        },
        pushInPageBlur: function() {
            var n = this;
            n._inPageBlurred || n.pushEvent("blur"), n._inPageBlurred = !0
        },
        _windowFocus: function() {
            this._inPageBlurred || this.pushEvent("focus")
        },
        _windowBlur: function() {
            this._inPageBlurred || this.pushEvent("blur")
        },
        _isNavEvent: function(n) {
            return -1 !== u.indexOf(n)
        },
        _sendBeacon: function(e) {
            var t, i = this,
                u = e || i.uuid;
            return !(!i.trackEvents || i.beaconSent) && (t = {
                uuid: u,
                pt: 4,
                history: n.JSON.stringify(i.events),
                itc: 1
            }, i._sendRapid(t), i.trackEvents = !1, i.beaconSent = !0, i.events = [], i.uuid = "", i._inPageBlurred = !1, !0)
        },
        _sendRapid: function(e) {
            var t = n.Af.rapid && a(n.Af.rapid.getRapidTracker) ? n.Af.rapid.getRapidTracker() : null;
            t && a(t.beaconClick) && n.later(100, this, function() {
                t.beaconClick("dwell_time", "dwell_time", 0, e)
            })
        },
        _initListeners: function() {
            var e = this;
            n.on("focus", function() {
                e._windowFocus()
            }, i), n.on("blur", function() {
                e._windowBlur()
            }, i), n.on("beforeunload", function() {
                e.pushEvent("beforeunload"), e._sendBeacon()
            }, i), (n.UA.ios || n.UA.android) && n.on("pagehide", function() {
                e.pushEvent("pagehide"), e._sendBeacon()
            }, i)
        }
    }, n.namespace("Af").Dwelltime = s
}, "@VERSION@", {
    requires: ["af-rapid", "json-stringify"]
});
YUI.add("af-event", function(e) {
    "use strict";
    var n = e.Global,
        u = {},
        t = {},
        a = {};
    e.namespace("Af").Event = {
        publish: function(e, c) {
            c = c || {};
            var i, o = n.publish(e, c);
            return c.queue && !c.emitFacade && (u[e] = {
                queue: c.queue
            }, t[e] || (i = t[e] = function(n) {
                var t = u[e].queue;
                "function" == typeof t ? a[e] = t.call(null, e, a[e], n) : "last" === t ? a[e] = [n] : a[e] ? a[e] = [].concat(a[e], n) : a[e] = [n]
            }, n.on(e, i))), o
        },
        fire: function() {
            return n.fire.apply(n, arguments)
        },
        on: function(t, c, i) {
            return u[t] && u[t].queue && a[t] && a[t].length && e.each(a[t], function(e) {
                c.call(i, e)
            }), n.on(t, c, i)
        }
    }
}, "@VERSION@", {
    requires: ["event-custom"]
});
YUI.add("af-history", function(t) {
    "use strict";
    var e = t.config.win,
        r = !1,
        a = t.config.doc.getElementById("afhistorystate");
    try {
        r = !(!e.history || !e.history.replaceState || "function" != typeof e.history.replaceState)
    } catch (s) {}

    function i(t) {
        var e = t ? t.split(".") : [];
        return e.unshift("AfHistory"), e
    }

    function n() {
        var i, n;
        if (r) n = e.history.state;
        else if (a) try {
            (i = a.value) && (n = t.JSON.parse(i))
        } catch (s) {}
        return n
    }
    t.namespace("Af").History = {
        getState: function(e) {
            var r = null,
                a = i(e);
            return a.length > 1 && (r = t.Object.getValue(n(), a) || null), r
        },
        replaceState: function(s, o) {
            var c = null,
                f = i(s);
            f.length > 1 && ((c = n() || {}).AfHistory = c.AfHistory || {}, t.Object.setValue(c, f, o), r ? e.history.replaceState(c, "") : a && (a.value = t.JSON.stringify(c)))
        }
    }
}, "@VERSION@", {
    requires: ["json"]
});
YUI.add("af-pageviz", function(e, d) {
    "use strict";
    var n, i, t = "undefined",
        o = "visibilitychange";
    typeof document.hidden !== t ? (n = "hidden", i = o) : typeof document.mozHidden !== t ? (n = "mozHidden", i = "moz" + o) : typeof document.msHidden !== t ? (n = "msHidden", i = "ms" + o) : typeof document.webkitHidden !== t && (n = "webkitHidden", i = "webkit" + o), e.namespace("Af").PageViz = {
        isHidden: function() {
            return !!document[n]
        }
    }, e.EventTarget && e.augment(e.Af.PageViz, e.EventTarget, !0, null, {
        emitFacade: !1,
        prefix: "PageViz"
    }), "undefined" == typeof document.addEventListener || void 0 === n || document.addEventListener(i, function() {
        e.Af.PageViz.fire(document[n] ? "hidden" : "visible")
    }, !1)
}, "@VERSION@", {
    requires: ["event-custom"]
});
YUI.add("af-poll", function(t, i) {
    "use strict";
    var n = t.Object,
        e = t.Lang;

    function l(t) {
        this._model = t.host, this._model.after("destroy", function() {
            this.end()
        }, this)
    }
    l.NS = "poll", l.prototype = {
        _handle: null,
        _poll_config: {
            interval: 3e4
        },
        _load_options: {},
        _callback: null,
        _err_streak: 0,
        start: function(i, n, l) {
            this._handle && this.end(), this._poll_config = t.merge({
                interval: 3e4
            }, i), this._load_options = n || {}, this._callback = l;
            var s = this._poll_config.interval;
            return !(!e.isNumber(s) || s < 5e3) && (this._handle = t.later(this._poll_config.interval, this, function() {
                if (!t.Af.PageViz.isHidden()) {
                    var i = this,
                        n = {};
                    t.Object.each(i._load_options, function(t, i) {
                        n[i] = e.isFunction(t) ? t() : t
                    }), this._model.load(n, function(t, n) {
                        i._callback && i._callback(t, n), t ? i._err_streak++ : i._err_streak = 0, i._err_streak > 3 && (i._err_streak = 0, i.pause(3 * i._poll_config.interval))
                    })
                }
            }, null, !0), !0)
        },
        end: function() {
            this._handle && (this._handle.cancel(), this._handle = null)
        },
        resume: function() {
            this.start(this._poll_config, this._load_options, this._callback)
        },
        pause: function(i) {
            this.end(), e.isNumber(i) && i > 0 && t.later(i, this, function() {
                this.resume()
            })
        },
        update: function(i, e, l) {
            l && (this._callback = l);
            var s = n.some(i, function(t, i) {
                return this._poll_config[i] !== t
            }, this);
            if (s || (s = n.some(e, function(t, i) {
                    return this._load_options[i] !== t
                }, this)), s) return this.end(), i = t.merge(this._poll_config, i), e = t.merge(this._load_options, e), this.start(i, e, this._callback)
        }
    }, t.namespace("Af").Poll = l
}, "@VERSION@", {
    requires: ["af-pageviz"]
});
YUI.add("af-rapid", function(t, e) {
    "use strict";
    var i = {
            rapidInstance: null,
            moduleQueue: [],
            addModules: function(t) {
                this.moduleQueue.push(t)
            }
        },
        a = t.Lang,
        n = t.Af.Utils;

    function r(e) {
        var r, s = "afRapid";
        n.perfStart(s), (e = e || {}).i13nConfig = e.i13nConfig || {}, window.YAHOO = window.YAHOO || {}, window.YAHOO.i13n = window.YAHOO.i13n || {}, window.YAHOO.i13n = t.merge(window.YAHOO.i13n, e.i13nConfig.ywaMaps);
        try {
            t.rapid && a.isFunction(t.rapid.initRapid) ? this.tracker = t.rapid : (r = t.merge(i, {
                rapidConfig: e.i13nConfig.rapid || {}
            }), e.i13nConfig.rapidInstance && (r.instance = e.i13nConfig.rapidInstance), this.tracker = new t.Media.RapidTracking(r), this.tracker.initRapid()), this._initAppletListeners()
        } catch (c) {}
        t.Af.rapid = this, n.perfStop(s)
    }
    r.prototype = {
        initializer: function() {
            this._initSelectBoxListeners()
        },
        getRapidTracker: function() {
            return this.tracker
        },
        _initAppletListeners: function() {
            a.isFunction(this.after) && (this.after(["*:viewrender", "*:viewupdate", "*:appletinit"], function(t) {
                this._addOrRefresh(t.applet.guid)
            }, this), this.after("*:viewdisplay", function(t) {
                null === t.viewdisplay.prevRegion && t.viewdisplay.newRegion && this._addOrRefresh(t.applet.guid)
            }, this), this.after("*:appletremove", function(t) {
                this.tracker && this.tracker.removeModule("applet_" + t.applet.guid)
            }, this))
        },
        _autoBeacon: function(t) {
            var e, i = t.ancestor("[data-i13n]", !0);
            return !i || !(e = this._parseDataAttr(i, "i13n")) || "false" !== e.auto
        },
        _addOrRefresh: function(e) {
            if (this.tracker) {
                var i, a, n, r, s, c = "applet_" + e,
                    o = t.Af.Bootstrap.getMeta(e),
                    l = o && o.i13n,
                    p = l && l.pv;
                l && l.pp && (s = {
                    pp: l.pp
                }), this.tracker.isModuleTracked(c) ? this.tracker.refreshModule(c, p, !0, s) : (i = t.one("#" + c), this._autoBeacon(i) && (!(n = l && l.sec) && i && (i && (a = this._parseDataAttr(i, "i13n")), n = a.sec || i.getData("i13n-sec"), i && a && (!0 === a.useViewability || "true" === a.useViewability) && (s ? s.useViewability = !0 : s = {
                    useViewability: !0
                })), n ? ((r = {})[c] = n, this.tracker.addModules(r, p, s), i.hasAttribute("data-i13n-secvw") && this.tracker.beaconEvent("secvw", {
                    sec: n
                }, "")) : this.tracker.addModules([c], p, s)))
            }
        },
        _parseDataAttr: function(e, i) {
            return e ? t.Af.Utils.stringParseKV(e.getData(i)) : {}
        },
        _getSelectBoxSelectedLinkName: function(t, e) {
            var i = t.get("value"),
                a = t.all("option").item(t.get("selectedIndex"));
            return this._parseDataAttr(a, "i13n-ylk")[e] || i
        },
        _getSelectBoxName: function(t, e) {
            return this._parseDataAttr(t, "i13n-ylk")[e] || t.get("name")
        },
        _initSelectBoxListeners: function() {
            if (!(t.UA.ie && t.UA.ie < 9)) {
                var e, i = t.one("body"),
                    a = "select";
                i.delegate("mousedown", function(i) {
                    if ("SELECT" === i.target.get("tagName") && this._autoBeacon(i.target)) {
                        var a = {
                            slk: this._getSelectBoxSelectedLinkName(i.target, "slk"),
                            elm: "inpt",
                            elmt: "mu",
                            itc: 1,
                            t3: this._getSelectBoxName(i.target, "t3")
                        };
                        t.UA.ie ? e = t.later(250, this, function() {
                            e = null, this.triggerBeaconClickEvent(i.target, a)
                        }) : this.triggerBeaconClickEvent(i.target, a)
                    }
                }, a, this), i.delegate("keyup", function(t) {
                    if (this._autoBeacon(t.target) && 9 === t.keyCode) {
                        var e = {
                            slk: this._getSelectBoxSelectedLinkName(t.target, "slk"),
                            elm: "inpt",
                            elmt: "muk",
                            itc: 1,
                            t3: this._getSelectBoxName(t.target, "t3")
                        };
                        this.triggerBeaconClickEvent(t.target, e)
                    }
                }, a, this), i.delegate("change", function(i) {
                    if (this._autoBeacon(i.target)) {
                        var a = {
                            slk: this._getSelectBoxSelectedLinkName(i.target, "slk"),
                            elm: "itm",
                            elmt: "slct",
                            itc: 1,
                            t3: this._getSelectBoxName(i.target, "t3")
                        };
                        t.UA.ie ? (e && (e.cancel(), e = null), this.triggerBeaconClickEvent(i.target, a)) : this.triggerBeaconClickEvent(i.target, a)
                    }
                }, a, this)
            }
        },
        getSecValue: function(t) {
            var e = t.ancestor("[data-i13n],[data-i13n-sec],[data-applet-type]", !0),
                i = "";
            return e && (i = this._parseDataAttr(e, "i13n").sec || e.getData("i13n-sec") || e.getData("applet-type")), i
        },
        getSlkValue: function(t) {
            var e = t.getDOMNode(),
                i = "";
            return e && (i = (i = e.textContent || e.innerText || "").substring(0, 299)), i
        },
        parseYLK: function(e) {
            var i = e ? this._parseDataAttr(e, "ylk") : {},
                a = e.ancestor("[data-applet-type][data-ylk]", !0, "[data-applet-type]");
            return a ? t.merge(this._parseDataAttr(a, "ylk"), i) : i
        },
        triggerBeaconClickEvent: function(e, i, n, r) {
            if (e) {
                var s, c, o, l, p, u, d = {};
                (d = this.parseYLK(e)).sec || (p = this.getSecValue(e)) && (d.sec = p), d.slk || (u = this.getSlkValue(e)) && (d.slk = u), i && (d = t.merge(d, i)), d.sec ? (s = d.sec, delete d.sec, c = d.slk || "", delete d.slk, o = parseInt(d.pos, 10), a.isNumber(o) || (o = 1), l = e.getData("action-outcome"), this.tracker.beaconClick(s, c, o, d, l, n, r)) : n && n()
            } else n && n()
        }
    }, t.namespace("Af").Rapid = r
}, "@VERSION@", {
    requires: ["af-bootstrap", "af-utils", "media-rapid-tracking", "node-core"]
});
YUI.add("af-sync", function(e) {
    "use strict";
    var r = e.Af.Transport,
        o = e.Object.owns;

    function t() {}
    t._NON_ATTRS_CFG = ["resource", "readonly", "consolidate", "syncContext", "postForRead", "crumbForGET"], t.prototype = {
        resource: "",
        consolidate: !0,
        readonly: !1,
        syncContext: {},
        postForRead: !1,
        crumbForGET: !0,
        initializer: function(e) {
            o(e = e || {}, "resource") && (this.resource = e.resource || "")
        },
        sync: function() {
            var r, o, t, c = this,
                s = arguments[0];
            arguments[1] === c ? (((r = arguments[2]).error || r.success) && (t = function(e, o) {
                e ? r.error && r.error(e) : r.success && r.success(o)
            }), o = {}, e.Object.each(r, function(e, r) {
                "error" !== r && "success" !== r && "parse" !== r && (o[r] = e)
            }), c._sync(s, o, t)) : c._sync.apply(c, arguments)
        },
        _sync: function(t, c, s) {
            var n, a, i, u, d, f = {},
                p = this;
            if (p.readonly && "read" !== t) return s("Read-only");
            switch (c && (o(c, "resource") || o(c, "params") || o(c, "context") || (c = {
                params: c
            })), n = c.resource || p.resource, (i = e.Af.Utils.objectMerge({
                config: {
                    consolidate: !!p.consolidate,
                    post_for_read: p.postForRead,
                    crumbForGET: p.crumbForGET
                }
            }, p.syncContext, c.context)).config.id_param = u = p.idAttribute || "id", (d = p.get(p.idAttribute || "id")) && (f[u] = d), f = e.merge(f, c.params), t) {
                case "create":
                case "update":
                    return a = c.body || p.toJSON(), void r[t](n, f, a, i, s);
                case "read":
                case "delete":
                    return void r[t](n, f, i, s);
                default:
                    s("Invalid action: " + t)
            }
        }
    }, e.namespace("Af").Sync = t
}, "@VERSION@", {
    requires: ["af-transport", "af-utils"]
});
YUI.add("af-trans", function(n, i) {
    "use strict";
    var e = "App-loading",
        a = "fade",
        t = "0px",
        o = "0.15";
    n.namespace("Af").Trans = {
        loadWithTransition: function(i, e, a, t, o) {
            var s, r = this;
            i ? (o = o || "", (e = e || i.get("model")) ? (s = i.get("container")).inDoc() ? (r.addTransition(s, o), e.load(a, function(i, e) {
                r.removeTransition(s, o), n.Lang.isFunction(t) && t(i, e)
            })) : t("view container is not in page") : n.Lang.isFunction(t) && t("cannot find model")) : n.Lang.isFunction(t) && t("view is not passed")
        },
        disappear: function(i, e, s) {
            if (n.Lang.isFunction(s) || (s = n.Af.Utils.noop), e = e || a, i)
                if (n.UA.ie && n.UA.ie < 9) s();
                else switch (e) {
                    case a:
                        i.transition({
                            opacity: "0",
                            duration: o
                        }, function() {
                            try {
                                i.transition({
                                    overflow: "hidden",
                                    height: t,
                                    margin: t,
                                    padding: t,
                                    border: t,
                                    easing: "ease-out",
                                    duration: o
                                })
                            } catch (n) {}
                        }), n.later(3e3, null, s);
                        break;
                    default:
                        s()
                } else s("node is not defined")
        },
        addTransition: function(n, i) {
            switch (i = i || a) {
                case a:
                    n.addClass("SlowTrans"), setTimeout(function() {
                        n.insertBefore('<i class="' + e + '"></i>', n), n.addClass("Op-33")
                    }, 10)
            }
        },
        removeTransition: function(n, i) {
            switch (i = i || a) {
                case a:
                    n.previous("." + e).remove(!0), n.removeClass("Op-33"), setTimeout(function() {
                        n.removeClass("SlowTrans")
                    }, 1e3)
            }
        }
    }
}, "@VERSION@", {
    requires: ["node-base", "transition", "af-utils"]
});
YUI.add("af-transport", function(t, e) {
    "use strict";
    var o = t.Af,
        n = o.Config,
        r = t.TDAPI.RemoteStore,
        a = t.Lang.isFunction;

    function c(e) {
        var r = n.get("context"),
            a = {
                config: n.get("transport"),
                context: {}
            };
        return r && t.Array.forEach(n.contextKeys(), function(t) {
            Object.prototype.hasOwnProperty.call(r, t) && (a.context[t] = r[t])
        }), o.Utils.objectMerge(a, e)
    }

    function i(n, r, a, c, i) {
        return function(s, u) {
            var f, d, g;
            if (s) {
                f = "", d = {
                    code: s.code || s.statusCode,
                    message: s.message || s.statusText
                }, s.timeout && (d.timeout = s.timeout), s.timeoutBy && (d.timeoutBy = s.timeoutBy);
                try {
                    f = t.JSON.stringify(a)
                } catch (p) {}
                g = {
                    resource: n,
                    operation: r,
                    params: f
                }, c.config && c.config.beaconMeta && (g = t.merge(g, c.config.beaconMeta)), o.Beacon.error(e, g, d)
            }
            return i && i(s, u)
        }
    }
    t.namespace("Af").Transport = {
        create: function(t, e, o, n, s) {
            a(n) && (s = n, n = {}), r.create(t, e, o, c(n), i(t, "create", e, n, s))
        },
        read: function(t, e, o, n) {
            a(o) && (n = o, o = {}), r.read(t, e, c(o), i(t, "read", e, o, n))
        },
        update: function(t, e, o, n, s) {
            a(n) && (s = n, n = {}), r.update(t, e, o, c(n), i(t, "update", e, n, s))
        },
        del: function(t, e, o, n) {
            a(o) && (n = o, o = {}), r.del(t, e, c(o), i(t, "delete", e, o, n))
        }
    }, t.Af.Transport["delete"] = t.Af.Transport.del
}, "@VERSION@", {
    requires: ["af-beacon", "af-config", "af-utils", "json-stringify", "tdapi-remotestore"]
});
YUI.add("af-utils", function(n) {
    "use strict";
    var e, r = n.Cookie,
        t = n.Lang,
        i = n.Array,
        o = n.Object,
        u = t.isObject,
        a = t.isArray,
        f = t.isString,
        c = t.trim,
        l = /^([\w!.%+\-])+@([\w\-])+(?:\.[\w\-]+)+$/,
        s = /((ftp|https?):\/\/)?(www\.)?[a-z0-9\-\.]+\.[a-z0-9\/]+$/,
        d = {},
        p = n.Intl,
        w = n.config.win,
        g = " START",
        m = null;
    n.namespace("Af").Utils = {
        i18n: function(e) {
            return p.get(e, null, n.config.lang) || {}
        },
        urlParseQuery: function() {
            var e = window.location.search;
            return e && e.length > 1 ? n.QueryString.parse(e.substring(1)) : {}
        },
        urlParseBoolean: function(n) {
            return "" !== (n = n ? n.toString().toLowerCase() : "") && "null" !== n && "undefined" !== n && "0" !== n && "false" !== n && "no" !== n
        },
        objectGetValue: function(n, e, r) {
            f(e) && (e = "" === (e = c(e)) ? [] : e.split("."));
            var t = o.getValue(n, e);
            return t === undefined ? r : t
        },
        objectSetValue: function(n, e, r) {
            if (f(e) && (e = "" === (e = c(e)) ? [] : e.split(".")), !a(e) || 0 === e.length) return undefined;
            var i, o = e.length,
                u = n;
            for (i = 0; i < o; i++) i === o - 1 ? u[e[i]] = r : (t.isUndefined(u[e[i]]) && (u[e[i]] = {}), u = u[e[i]]);
            return n
        },
        objectEqual: function(e, r) {
            var t, i;
            if (e === r) return !0;
            if (typeof e != typeof r) return !1;
            if (u(e)) return o.size(e) === o.size(r) && !o.some(e, function(t, i) {
                return !n.Af.Utils.objectEqual(e[i], r[i])
            });
            if (a(e)) {
                if (e.length !== r.length) return !1;
                for (t = 0, i = e.length; t < i; t++)
                    if (!n.Af.Utils.objectEqual(e[t], r[t])) return !1;
                return !0
            }
            return !1
        },
        objectMerge: function() {
            var e, r = Array.prototype.slice.call(arguments),
                t = {};
            for (e = 0; e < r.length; e++) u(r[e]) && !a(r[e]) && n.mix(t, n.clone(r[e]), !0, undefined, 0, !0);
            return t
        },
        stringParseKV: function(n, e, r) {
            var t = {};
            return n ? (e = e || ";", r = r || ":", i.each(n.split(e), function(n) {
                if (n.length > 0) {
                    var e = n.indexOf(r),
                        i = c(n.substring(0, e)),
                        o = c(n.substring(e + 1));
                    i && (t[i] = o)
                }
            }), t) : t
        },
        noop: function() {},
        use: function() {
            var r = Array.prototype.slice.call(arguments, 0),
                o = r[r.length - 1];
            t.isFunction(o) ? r.pop() : o = m, t.isArray(r[0]) && (r = r[0]), d.mods = (d.mods || []).concat(r), o && (d.cbs = d.cbs || [], d.cbs.push(o)), e || (e = n.Af.Utils.throttle(function() {
                var e = i.dedupe(d.mods),
                    r = d.cbs || [];
                d = {}, n.use(e, function(n) {
                    var e, t;
                    for (e = 0, t = r.length; e < t; e++) r[e].call(m, n)
                })
            }, 40, {
                leading: !1
            })), e()
        },
        userSignedIn: function() {
            return !(!r.getSub("Y", "n") || !r.getSub("Y", "l"))
        },
        urlValidate: function(n) {
            return s.test(n)
        },
        emailValidate: function(n) {
            return l.test(n)
        },
        screenTouchable: function() {
            var n = document.documentElement.className;
            return Modernizr && Modernizr.touch || !(n && n.indexOf("no-touch") >= 0)
        },
        getObjectInArray: function(n, e, r) {
            if (!n) return m;
            var t, i, o, u = n;
            for (i = u.length, t = 0; t < i; t += 1)
                if ((o = u[t]).hasOwnProperty(e) && o[e] === r) return {
                    index: t,
                    data: o
                };
            return m
        },
        perfStart: function(e, r) {
            w.Af = w.Af || {}, w.Af.perf = w.Af.perf || {}, w.Af.perf[n.id] = w.Af.perf[n.id] || {}, w.Af.perf[n.id][e] = {
                start: t.now()
            }, window && window.performance && window.performance.mark && r && window.performance.mark(e + g)
        },
        perfStop: function(e, r) {
            var i, o = w.Af && w.Af.perf && w.Af.perf[n.id] && w.Af.perf[n.id][e];
            o && o.start && (o.took = t.now() - o.start), window && window.performance && window.performance.mark && window.performance.measure && r && (i = e + " STOP", window.performance.mark(i), window.performance.measure(e + " DUR", e + g, i))
        },
        throttle: function(n, e, r) {
            var t, i, o, u = m,
                a = 0;

            function f() {
                a = !1 === r.leading ? 0 : new Date, u = m, o = n.apply(t, i)
            }
            return r = r || {},
                function() {
                    var c, l = new Date;
                    return a || !1 !== r.leading || (a = l), t = this, i = arguments, (c = e - (l - a)) <= 0 ? (window.clearTimeout(u), u = m, a = l, o = n.apply(t, i)) : u || !1 === r.trailing || (u = window.setTimeout(f, c)), o
                }
        }
    }
}, "@VERSION@", {
    requires: ["cookie", "intl", "oop", "querystring-parse-simple"]
});
YUI.add("gallery-storage-lite", function(e, t) {
    "use strict";
    var r, n, a = e.config.doc,
        o = e.config.win,
        i = e.JSON,
        l = e.namespace("StorageLite"),
        c = "yui_storage_lite",
        u = "ready",
        s = "yui_storage_lite",
        m = "data",
        g = {};
    try {
        n = o.localStorage ? 1 : o.globalStorage ? 2 : o.openDatabase && -1 === navigator.userAgent.indexOf("Chrome") ? 3 : e.UA.ie >= 5 ? 4 : 0
    } catch (f) {
        n = 0
    }
    e.StorageFullError = function(t) {
        e.StorageFullError.superclass.constructor.call(t), this.name = "StorageFullError", this.message = t || "Maximum storage capacity reached", e.UA.ie && (this.description = this.message)
    }, e.extend(e.StorageFullError, Error), e.augment(l, e.EventTarget, !0, null, {
        emitFacade: !0,
        prefix: "storage-lite",
        preventable: !1
    }), l.publish(u, {
        fireOnce: !0
    }), e.mix(l, {
        clear: function() {},
        getItem: function(e, t) {
            return null
        },
        length: function() {
            return 0
        },
        removeItem: function(e) {},
        setItem: function(e, t) {}
    }), 1 === n || 2 === n ? (e.mix(l, {
        length: function() {
            return r.length
        },
        removeItem: function(e) {
            r.removeItem(e)
        },
        setItem: function(e, t, n) {
            r.setItem(e, n ? i.stringify(t) : t)
        }
    }, !0), 1 === n ? (r = o.localStorage, e.Node.DOM_EVENTS.pageshow = 1, e.on("pageshow", function() {
        r = o.localStorage
    }), e.mix(l, {
        clear: function() {
            r.clear()
        },
        getItem: function(e, t) {
            try {
                return t ? i.parse(r.getItem(e)) : r.getItem(e)
            } catch (f) {
                return null
            }
        }
    }, !0)) : 2 === n && (r = o.globalStorage[o.location.hostname], e.mix(l, {
        clear: function() {
            var e;
            for (e in r) r.hasOwnProperty(e) && (r.removeItem(e), delete r[e])
        },
        getItem: function(e, t) {
            try {
                return t ? i.parse(r[e].value) : r[e].value
            } catch (f) {
                return null
            }
        }
    }, !0)), l.fire(u)) : 3 === n || 4 === n ? (e.mix(l, {
        clear: function() {
            g = {}, l._save()
        },
        getItem: function(e, t) {
            return g.hasOwnProperty(e) ? g[e] : null
        },
        length: function() {
            var e, t = 0;
            for (e in g) g.hasOwnProperty(e) && (t += 1);
            return t
        },
        removeItem: function(e) {
            delete g[e], l._save()
        },
        setItem: function(e, t, r) {
            g[e] = t, l._save()
        }
    }, !0), 3 === n ? (r = o.openDatabase(c, "1.0", "YUI StorageLite data", 1048576), e.mix(l, {
        _save: function() {
            r.transaction(function(e) {
                e.executeSql("REPLACE INTO " + c + " (name, value) VALUES ('data', ?)", [i.stringify(g)])
            })
        }
    }, !0), r.transaction(function(e) {
        e.executeSql("CREATE TABLE IF NOT EXISTS " + c + "(name TEXT PRIMARY KEY, value TEXT NOT NULL)"), e.executeSql("SELECT value FROM " + c + " WHERE name = 'data'", [], function(e, t) {
            if (t.rows.length) try {
                g = i.parse(t.rows.item(0).value)
            } catch (f) {
                g = {}
            }
            l.fire(u)
        })
    })) : 4 === n && ((r = a.createElement("span")).addBehavior("#default#userData"), e.mix(l, {
        _save: function() {
            var t = i.stringify(g);
            a.body.appendChild(r);
            try {
                r.setAttribute(m, t), r.save(s)
            } catch (f) {
                throw new e.StorageFullError
            } finally {
                a.body.removeChild(r)
            }
        }
    }, !0), e.on("domready", function() {
        a.body.appendChild(r), r.load(s);
        try {
            g = i.parse(r.getAttribute(m) || "{}")
        } catch (f) {
            g = {}
        } finally {
            a.body.removeChild(r)
        }
        l.fire(u)
    }))) : l.fire(u)
}, "@VERSION@", {
    requires: ["event-base", "event-custom", "event-custom-complex", "json", "node-base"]
});
YUI.add("tdapi-remotestore", function(t, e) {
    "use strict";
    var n, o = ["resource", "operation", "params", "body"],
        c = "/_td_api",
        r = "read",
        i = t.Object,
        a = t.Array,
        u = t.Lang,
        s = t.Mjata,
        f = s.REST.HTTP,
        l = t.Af.Utils;

    function g(e) {
        if (e && e.responseText) try {
            return t.JSON.parse(e.responseText)
        } catch (n) {
            return null
        }
        return null
    }

    function p(e) {
        return u.isArray(e) || u.isObject(e) ? t.JSON.stringify(e) : e
    }

    function h(t, e) {
        var n = [],
            o = t;
        return i.each(e.context, function(t, e) {
            n.push(e + "=" + encodeURIComponent(t))
        }), n.length > 0 && (o += "?" + n.sort().join("&")), o
    }
    n = {
        _constructGetUri: function(t, e, n, o) {
            var c, r = [],
                a = [],
                u = o.config.id_param,
                s = t + "/resource/" + e;
            return i.each(n, function(t, e) {
                if (e === u) c = encodeURIComponent(t);
                else try {
                    a.push(e + "=" + encodeURIComponent(p(t)))
                } catch (n) {}
            }), i.each(o.context, function(t, e) {
                ("crumb" !== e || o.config.crumbForGET) && r.push(e + "=" + encodeURIComponent(p(t)))
            }), o.config.enableEdgePipeFallback && (r.push("enable_edgepipe_fallback=1"), r.push("_enable_edgepipe=1")), c && (s += "/" + u + "/" + c), a.length > 0 && (s += ";" + a.sort().join(";")), r.length > 0 && (s += "?" + r.sort().join("&")), s
        },
        batch: function(t) {
            if (!u.isArray(t) || t.length <= 1) return t;
            var e, n = {};
            return a.each(t, function(t) {
                var e, o, c;
                t.context && t.context.config && (e = t.context.config.uri || t.context.config.xhr || "", o = t.context.config.batch), c = "uri:" + e, o && (c += ";batch:" + o), n[c] || (n[c] = []), n[c].push(t)
            }), (e = i.values(n)).length, t.length, e
        },
        single: function(e) {
            if (e) {
                var n, i, a, u, s, p = e.context,
                    x = e.callback || l.noop,
                    m = p.config && (p.config.uri || p.config.xhr) || c;
                if (!(r === e.operation || p.context && p.context.crumb)) return x({
                    statusCode: 400,
                    statusText: "missing crumb"
                });
                (n = e.operation !== r || p.config.post_for_read) || ((a = this._constructGetUri(m, e.resource, e.params, p)).length <= 2048 ? m = a : n = !0), n ? ((u = {}).g0 = t.mix({}, e, !0, o), e.body || delete u.g0.body, s = {
                    requests: u,
                    context: p.context
                }, m = h(m, p), i = e.operation === r, f.post(m, {}, s, t.merge({
                    unsafeAllowRetry: i
                }, p.config), function(t, e) {
                    if (t) return x(t);
                    var n = g(e);
                    n = n && n.g0 || {}, x(n.err, n.data)
                })) : f.get(m, {}, p.config, function(t, e) {
                    if (t) return x(t);
                    x(null, g(e))
                })
            }
        },
        multi: function(e) {
            var n, u, s, l = 0,
                p = !0,
                x = {};
            a.some(e, function(t) {
                return !!(t.context && t.context.context && t.context.context.crumb) && (s = t.context, !0)
            }, this), s && s.context.crumb ? (n = s.config && (s.config.uri || s.config.xhr) || c, u = {
                requests: {},
                context: s.context
            }, a.each(e, function(e) {
                var n = "g" + l++;
                u.requests[n] = t.mix({}, e, !0, o), x[n] = e, e.operation !== r && (p = !1)
            }), n = h(n, s), f.post(n, {}, u, t.merge({
                unsafeAllowRetry: p
            }, s.config), function(t, n) {
                if (t) a.each(e, function(e) {
                    e.callback(t)
                });
                else {
                    var o = g(n);
                    i.each(x, function(t, e) {
                        var n = o && o[e] || {};
                        t.callback && t.callback(n.err || null, n.data || null)
                    })
                }
            })) : a.each(e, function(t) {
                t.callback({
                    statusCode: 400,
                    statusText: "missing crumb"
                })
            })
        }
    }, t.namespace("TDAPI").RemoteStore = s.createStore("Store.TDAPI", {}, n)
}, "@VERSION@", {
    requires: ["mjata-store", "mjata-rest-http", "json"]
});
YUI.add("af-applet-action", function(e) {
    "use strict";
    var t = ".js-applet-action";

    function a() {}
    a.prototype = {
        name: "applet.action",
        execute: function(e, t, a) {
            "page.init" === t.action && this.attachListeners(e), a()
        },
        attachListeners: function(a) {
            var i = e.one("body"),
                n = "a" + t + ", button" + t,
                o = "select" + t;

            function p(i) {
                i.preventDefault();
                var n, o, p, c = i.target.ancestor(t, !0);
                c && (n = c.getData("applet-action")) && ((o = {
                    action: n,
                    params: e.Af.Utils.stringParseKV(c.getData("applet-actioncfg")) || {}
                }).params.guid || (p = c.ancestor(".js-applet")) && (o.params.guid = e.Af.AppletDom.getGuid(p)), a.execControllers(o))
            }
            i.delegate("click", p, n, this), e.UA.ie && e.UA.ie < 9 ? i.delegate(["click", "keydown", "keyup"], function(e) {
                if (!(e.keyCode && e.keyCode >= 16 && e.keyCode <= 20)) {
                    var t, a = e.target,
                        i = "keyup" === e.type && 9 === e.keyCode,
                        n = "keydown" === e.type && 9 === e.keyCode,
                        o = "previous";
                    (i || "click" === e.type || "keydown" === e.type) && (a.hasAttribute(o) || a.setAttribute(o, a.get("value"))), (n || "click" === e.type || "keyup" === e.type) && a.getAttribute(o) !== (t = a.get("value")) && (a.setAttribute(o, t), p(e))
                }
            }, o, this) : i.delegate("change", p, o, this)
        }
    }, e.namespace("Af").AppletAction = a
}, "@VERSION@", {
    requires: ["af-applet-dom", "af-utils", "node-event-delegate", "node-base"]
});
YUI.add("af-applet-dom", function(e, t) {
    "use strict";
    var n = {
            applet: "js-applet",
            container: "js-applet-container",
            container_content: "js-applet-container-content",
            view_container_prefix: "js-applet-view-container-"
        },
        i = {
            applet: "." + n.applet,
            container: "." + n.container,
            container_content: "." + n.container_content,
            view_container_prefix: "div." + n.view_container_prefix
        };
    e.namespace("Af").AppletDom = {
        selectors: function() {
            return i
        },
        classes: function() {
            return n
        },
        all: function(t, n) {
            (t = e.one(t)) && t.all(i.applet).each(function(e) {
                n(e)
            })
        },
        getGuid: function(e) {
            return e.getData("applet-guid")
        },
        getType: function(t) {
            return e.Lang.isString(t) && (t = this.getNode(t)), t ? t.getData("applet-type") : null
        },
        getNode: function(t) {
            return e.one('[data-applet-guid="' + t + '"]')
        },
        getLocation: function(t) {
            var n, a, o, r = this.getNode(t);
            return r ? (a = (n = r.ancestor(i.container, !0)) ? n.getData("applet-container-guid") : "page", n || (n = e), (o = n.all(i.applet).indexOf(r)) < 0 ? {} : {
                container: a,
                index: o
            }) : {}
        },
        getContainerGuid: function(e) {
            return e.getData("applet-container-guid")
        },
        getContainerNode: function(t) {
            return e.one('[data-applet-container-guid="' + t + '"]')
        },
        getContainerContentNode: function(e) {
            return e.one(i.container_content) || e
        },
        getViewContainerNode: function(e, t) {
            return this.getNode(e).one(i.view_container_prefix + t)
        },
        getLayout: function() {
            var t = {};
            return e.all(i.container).each(function(e) {
                var n = this.getContainerGuid(e);
                t[n] = [], e.all(i.applet).each(function(e) {
                    var i = this.getGuid(e);
                    i && t[n].push(i)
                }, this)
            }, this), t
        },
        remove: function(t, n) {
            var i = this.getNode(t);
            if (!i) return n && n("non-exist applet node: " + t);
            e.Af.Trans.disappear(i, "fade", function() {
                return i.purge(!0).remove(), n && n()
            })
        },
        move: function(e, t, n) {
            var i, a, o, r = this.getNode(e),
                p = this.getContainerNode(n.container),
                c = this.getContainerContentNode(p);
            return !!r && (!(!p || !c) && (o = this.selectors(), (i = p.all(o.applet)).size(), "undefined" == typeof n.index ? c.append(r) : 0 === n.index ? c.prepend(r) : (a = i.item(n.index)) ? a.insert(r, "before") : c.append(r), !0))
        },
        getGuidAt: function(e, t) {
            var n, a = this.getContainerNode(e);
            return a && (n = a.all(i.applet).item(t)) ? this.getGuid(n) : null
        }
    }
}, "@VERSION@", {
    requires: ["node-core", "af-trans"]
});
YUI.add("af-applet-headerview", function(e) {
    "use strict";
    e.namespace("Af").AppletHeaderView = e.Base.create("AfAppletHeaderView", e.Af.AppletView, [], {
        autoRender: !1
    })
}, "@VERSION@", {
    requires: ["af-applet-view", "stencil-selectbox"]
});
YUI.add("af-applet-init", function(e, t) {
    "use strict";
    var i = e.Af,
        a = i.AppletDom,
        n = i.Utils,
        p = i.Config,
        o = e.Lang,
        s = i.Bootstrap,
        r = e.Object,
        l = e.DOM,
        c = i.Beacon,
        f = "appletinit",
        d = "data-applet-init",
        u = "appletsinit",
        h = "viewport",
        g = "js-appletiniting",
        w = n.perfStart,
        v = n.perfStop,
        y = p.isDev();

    function A() {
        this._defInit = p.getContext("default_appletinit") || h
    }
    A.prototype = {
        name: "applet.init",
        execute: function(e, t, i) {
            switch (t.action) {
                case "page.init":
                    this.initApplets(e), e.after("*:initapplet", function(t) {
                        var i = t.initapplet;
                        this.initApplet(e, i)
                    }, this);
                    break;
                case "applet.init":
                    this.initApplet(e, t.params)
            }
            t.callback && t.callback(), i()
        },
        initApplets: function(t) {
            var i, a, p = this,
                o = [],
                c = n.screenTouchable() ? "touchstart" : "mouseenter";
            a = this._scan(t), o = (o = (o = o.concat(r.keys(a.now))).concat(r.keys(a.lazy))).concat(r.keys(a.viewport)), s.load(o, {}, function() {
                r.each(a.now, function(i) {
                    e.later(5, p, function() {
                        this.initApplet(t, {
                            node: i
                        })
                    })
                })
            }), r.each(a.lazy, function(e) {
                e.once(c, function() {
                    this.initApplet(t, {
                        node: e
                    })
                }, this)
            }, this), r.size(a.viewport) && (r.each(a.viewport, function(e, i) {
                e.once(c, function() {
                    delete a.viewport[i], this.initApplet(t, {
                        node: e
                    })
                }, this)
            }, this), i = e.one(window).after("scroll", n.throttle(function() {
                var n = l.viewportRegion();
                r.each(a.viewport, function(i, p) {
                    l.inRegion(i.getDOMNode(), n, !1) && (delete a.viewport[p], e.later(5, this, function() {
                        this.initApplet(t, {
                            node: i
                        })
                    }))
                }, p), i && 0 === r.size(a.viewport) && i.detach()
            }, 200))), e.publish(u, {
                fireOnce: !0,
                async: !0
            }), e.fire(u, {
                applets: t
            })
        },
        _scan: function(t) {
            var i, n = this,
                p = "aptsScanDOM",
                s = {
                    deferred: {},
                    now: {},
                    viewport: {},
                    lazy: {}
                };
            return w(p), a.all(e.one("body"), function(e) {
                var p = e.getData(),
                    r = p["applet-defer"],
                    c = p["applet-init"],
                    f = a.getGuid(e);
                if (!o.isValue(r)) switch (c = c || n._defInit) {
                    case "critical":
                        n.initApplet(t, {
                            node: e
                        });
                        break;
                    case "now":
                        s.now[f] = e;
                        break;
                    case "lazy":
                        s.lazy[f] = e;
                        break;
                    case h:
                        i = i || l.viewportRegion(), l.inRegion(e.getDOMNode(), i, !1) ? s.now[f] = e : s.viewport[f] = e
                }
            }), v(p), s
        },
        initApplet: function(e, n) {
            !(n = n || {}).node && n.guid && (n.node = a.getNode(n.guid));
            var p, o, s, r, l = n.node;
            if (!l || !l._node || l.hasClass(g)) return null;
            if (p = a.getGuid(l), o = a.getType(l), e.applets[p]) {
                if (!n.replace) return e.applets[p];
                try {
                    e.applets[p].destroy()
                } catch (u) {
                    if (y) throw u;
                    c.error(t, {}, {
                        code: "appdestroy",
                        message: u.stack || u.message,
                        appletType: o
                    })
                }
                delete e.applets[p]
            }
            if (l.addClass(g), w(s = o + "_aptNew", !0), r = {
                    guid: p,
                    type: o,
                    container: "#" + l.get("id")
                }, y) return e.applets[p] = new i.Applet(r), e.applets[p].addTarget(e), v(s, !0), e.fire(f, {
                applet: {
                    guid: p,
                    type: o
                }
            }), l.removeClass(g), l.removeAttribute(d), e.applets[p];
            try {
                return e.applets[p] = new i.Applet(r), e.applets[p].addTarget(e), v(s, !0), e.fire(f, {
                    applet: {
                        guid: p,
                        type: o
                    }
                }), l.removeAttribute(d), e.applets[p]
            } catch (h) {
                return c.error(t, {}, {
                    code: "appinit",
                    message: h.stack || h.message,
                    appletType: o
                }), null
            } finally {
                l.removeClass(g)
            }
        }
    }, e.namespace("Af").AppletInit = A
}, "@VERSION@", {
    requires: ["af-applet", "af-beacon", "af-bootstrap", "af-config", "af-utils", "event-touch", "oop"]
});
YUI.add("af-applet-load", function(e) {
    "use strict";
    var t = e.Af.AppletDom,
        a = e.Af.Utils,
        p = a.stringParseKV,
        l = "applet-defer";

    function o() {}
    o.prototype = {
        name: "applet.load",
        execute: function(a, o, n) {
            if ("applet.load" === o.action || "loadapplet" === o.action) {
                var i = o.params.guid ? t.getNode(o.params.guid) : o.params.node;
                this.loadApplet(a, i, p(i.getData(l)), o.callback)
            } else "page.init" === o.action && t.all(e.one("body"), e.bind(function(e) {
                var t = e.getData(l);
                t && "custom" !== (t = p(t)).when && this.loadApplet(a, e, t, o.callback)
            }, this));
            n()
        },
        replaceAppletContent: function(t, a) {
            if (t && a && a.html) {
                var p, l = e.Node.create(a.html);
                l = l.one("div.js-applet") || l, e.Af.Dom.setHTML(t, l.getHTML()), (p = a.js || a.assets) && e.Af.Dom.jsAttach(p)
            }
        },
        loadApplet: function(o, n, i, r) {
            if (!n) return r && r("invalid node");
            var c = this,
                s = t.getGuid(n),
                d = t.getType(n),
                m = p(n.getData("applet-params")),
                u = e.merge({
                    guid: s,
                    type: d,
                    content_id: "chrome"
                }, m),
                f = {
                    id_param: "guid"
                };
            i && (i.batch && (f.batch = i.batch), i.timeout && (f.timeout = i.timeout)), e.Af.Transport.read("applet.content", u, {
                config: f
            }, function(t, p) {
                return t || !a.objectGetValue(p, "content.chrome.html") ? (e.Af.Message.show(n, {
                    level: "error",
                    token: "ERR_LOAD",
                    template: "ape-applet-templates-reload"
                }), r && r(t)) : (n.removeAttribute("data-" + l), c.replaceAppletContent(n, p.content.chrome), o.execControllers({
                    action: "applet.init",
                    params: {
                        node: n,
                        replace: !0
                    }
                }), e.use("stencil", function(e) {
                    e.Stencil.initAll(n)
                }), o.fire("appletdeferload", {
                    applet: {
                        guid: s,
                        type: d
                    }
                }), r && r(null))
            })
        }
    }, e.namespace("Af").AppletLoad = o
}, "@VERSION@", {
    requires: ["af-applet-dom", "af-message", "af-transport", "ape-applet-templates-reload"]
});
YUI.add("af-applet-mgr", function(e, t) {
    "use strict";
    var o = e.Af.AppletDom,
        a = e.Af.Beacon,
        p = e.Af.Transport,
        n = e.Af.Utils,
        i = e.Lang.isFunction;

    function r() {}

    function l() {}

    function c() {}

    function m() {}
    r.prototype = {
        name: "applet.add",
        execute: function(e, t, o) {
            if ("applet.add" !== t.action) return o();
            this.addApplet(e, t.params.type, t.params.config, t.params.settings, t.params.location, t.callback), o()
        },
        addApplet: function(t, a, i, r, l, c) {
            c = c || n.noop, a ? ((l = l || {}).container = l.container || o.getContainerGuid(e.one(o.selectors().container)), l.index = l.index || 0, p.create("applet", {
                type: a
            }, {
                config: i,
                settings: r,
                location: l
            }, function(a, p) {
                if (!a && n.objectGetValue(p, "content.chrome.html")) {
                    var i, r, m = o.getContainerNode(l.container),
                        s = p.content.chrome;
                    i = e.Node.create(s.html), (m = o.getContainerContentNode(m)).insert(i, l.index), s.assets && e.Af.Dom.jsAttach(s.assets), t.execControllers({
                        action: "applet.init",
                        params: {
                            node: i,
                            replace: !1
                        }
                    }), e.use("stencil", function(e) {
                        e.Stencil.initAll(i)
                    }), r = o.getGuid(i), t.fire("appletadd", {
                        applet: {
                            guid: r,
                            type: o.getType(i)
                        }
                    }), c(null, null)
                } else c(a || "no content")
            })) : c("missing type")
        }
    }, l.prototype = {
        name: "applet.move",
        execute: function(e, t, o) {
            "applet.move" === t.action && this.moveApplet(e, t.params.guid, t.params.from, t.params.to, t.params, t.callback), o()
        },
        moveApplet: function(e, t, a, r, l, c) {
            i(l) && (c = l, l = {}), c = c || n.noop;
            var m, s = !0 === (l && l.moveBeforePersist),
                f = !1 !== (l && l.save),
                u = this;
            if ((a = a || o.getLocation(t)) && r) {
                if (m = o.getType(t), !f) return u._updateDom(e, t, a, r), void c();
                s && u._updateDom(e, t, a, r), p.update("applet.layout", {
                    guid: t,
                    type: m
                }, {
                    from: a,
                    to: r
                }, function(o) {
                    o ? c(o) : (s || u._updateDom(e, t, a, r), c())
                })
            } else c("invalid from/to location")
        },
        _updateDom: function(e, p, n, i) {
            var r = e.applets[p];
            if (o.getContainerNode(i.container)) o.move(p, n, i);
            else if (o.remove(p), r) {
                try {
                    r.destroy({
                        remove: !0
                    })
                } catch (l) {
                    a.error(t + ":destroy", {
                        applet: r.get("type")
                    }, l)
                }
                delete e.applets[p]
            }
            e.fire("appletmove", {
                applet: {
                    guid: p,
                    type: r ? r.get("type") : null,
                    from: n,
                    to: i
                }
            })
        }
    }, c.prototype = {
        name: "applet.remote",
        execute: function(t, o, a) {
            var p = e.Af.Content;
            "applet.remote" === o.action ? p.remoteApplet(t, o.params, o.callback) : "page.init" === o.action && t.after("*:remoteapplet", function(e) {
                var o = e.remoteapplet;
                p.remoteApplet(t, o, o && o.callback)
            }), a()
        }
    }, m.prototype = {
        name: "applet.remove",
        execute: function(e, t, o) {
            "applet.remove" === t.action || "removeapplet" === t.action ? this.removeApplet(e, t.params.guid, t.params, t.callback) : "page.init" === t.action && e.after("*:removeapplet", function(t) {
                this.removeApplet(e, t.removeapplet.guid || t.applet.guid, t.removeapplet)
            }, this), o()
        },
        removeApplet: function(e, r, l, c) {
            if (i(l) && (c = l, l = {}), c = c || n.noop, r) {
                var m = o.getType(r) || null,
                    s = !0 === (l && l.removeBeforePersist);
                if (!(!1 !== (l && l.save))) return f(), void c();
                s && f(), p.update("applet.layout", {
                    guid: r,
                    type: m
                }, {
                    from: o.getLocation(r),
                    to: null
                }, function(e) {
                    e ? c(e) : (s || f(), c())
                })
            } else c("missing guid");

            function f() {
                o.remove(r, function() {
                    e.fire("appletremove", {
                        applet: {
                            guid: r,
                            type: m
                        }
                    })
                });
                var p = e.applets[r];
                if (p) {
                    try {
                        p.destroy({
                            remove: !0
                        })
                    } catch (n) {
                        a.error(t + ":destroy", {
                            applet: m
                        }, n)
                    }
                    delete e.applets[r]
                }
            }
        }
    }, e.namespace("Af").AppletAdd = r, e.Af.AppletMove = l, e.Af.AppletRemote = c, e.Af.AppletRemove = m
}, "@VERSION@", {
    requires: ["af-applet-dom", "af-beacon", "af-content", "af-transport", "af-utils"]
});
YUI.add("af-applet-model", function(t) {
    "use strict";
    var e = t.Af.Bootstrap,
        s = t.Af.Config,
        n = t.Af.Utils,
        i = t.Lang,
        a = "context",
        o = "data",
        r = "guid",
        c = "settings",
        g = ["crumb", "locdrop_crumb", "lang", "region"],
        l = n.perfStart,
        u = n.perfStop,
        p = s.get(a),
        d = s.get("transport");
    t.namespace("Af").AppletModel = t.Base.create("AfAppletModel", t.Model, [t.Mjata.JSON, t.Af.Sync], {
        idAttribute: r,
        settingsOpts: {
            critical: !1
        },
        settingsResource: "applet.settings",
        initializer: function() {
            var s, c = e.getMeta(this.get(r)) || {},
                f = {},
                h = {
                    silent: !0
                },
                m = this.get("type"),
                y = {},
                x = t.merge(p, c.context),
                A = this;
            this.set(a, x, {
                silent: !0
            }), this.syncContext = {
                config: t.merge(d, c.transport, {
                    beaconMeta: {
                        _appletType: m || ""
                    }
                }),
                context: {
                    _appletType: m || ""
                }
            }, t.Array.forEach(g, function(t) {
                x[t] && (A.syncContext.context[t] = x[t])
            }), c.applet_type && (y.applet_type = c.applet_type), c.i13n && (y.i13n = c.i13n), c.i18n = t.merge(n.i18n("ape-applet/strings"), c.i18n), y.i18n = c.i18n, y.intl = {
                locales: x.lang,
                messages: c.i18n
            }, c.models && (f = c.models.applet_model || {}), t.each(["config", "data", "state"], function(t) {
                f[t] && (y[t] = f[t])
            }), (f.settings || f.user_settings) && (y.settings = f.settings || f.user_settings), this.setAttrs(y, h), f.models && (l(s = m + ":aptCreateDataModels"), t.Array.each(f.models, function(t) {
                var s = e.createModel(this.get(r), t),
                    n = this.get(o);
                s && n && (i.isObject(n[t]) && s.setAttrs(n[t], h), this.addDataModel(t, s))
            }, this), u(s)), this.settingsResource = "settings." + (y.applet_type || m)
        },
        addDataModel: function(e, s) {
            s && (this.get(o)[e] = s, (s._isYUIModel || s._isYUIModelList) && (s.syncContext = this.syncContext, s.after(["*:change", "reset", "add", "remove"], function(e) {
                var s = t.merge(this.get(o));
                this.set(o, s, {
                    submodel_evt: e
                })
            }, this)))
        },
        getDataModel: function(t) {
            return this.get(o)[t]
        },
        loadDataModel: function(e, s, n) {
            var i, a = this;
            s = t.merge({
                resource: e
            }, s), i = {
                context: t.merge(a.syncContext.context, s.context && s.context.context),
                config: t.merge(a.syncContext.config, s.context && s.context.config)
            }, t.Af.Transport.read(s.resource, s.params, i, function(t, s) {
                return !t && s && a.set(o + "." + e, s), n && n(t, s)
            })
        },
        setConfig: function(t, e) {
            this.set("config." + t, e)
        },
        getSettings: function() {
            return this.get(c)
        },
        saveSettings: function(e, s, i) {
            var a, o, g = this.get(c),
                l = this;
            if (t.Lang.isFunction(s) && (i = s, s = null), i = i || n.noop, e = t.merge(g, e), (s = t.merge(this.settingsOpts, s)).critical === undefined && (s.critical = this.settingsOpts.critical), n.objectEqual(g, e)) i(null, e);
            else {
                if (a = {
                        resource: this.settingsResource,
                        params: {
                            guid: this.get(r)
                        },
                        body: e
                    }, o = n.userSignedIn(), !s.critical) return this.set(c, e), i(null, e), void(o && this.save(a));
                o ? this.save(a, function(t) {
                    t ? i("ERR_SAVE_SETTINGS") : (l.set(c, e), i(null, e))
                }) : i("ERR_AUTH")
            }
        }
    }, {
        ATTRS: {
            guid: {},
            type: {},
            config: {
                value: {}
            },
            settings: {},
            user_settings: {
                getter: function() {
                    return this.get(c)
                }
            },
            context: {
                value: {}
            },
            state: {
                value: {}
            },
            data: {
                value: {}
            }
        }
    })
}, "@VERSION@", {
    langBundles: ["strings"],
    requires: ["af-bootstrap", "af-config", "af-sync", "base-build", "mjata-json", "model"]
});
YUI.add("af-applet-savesettings", function(e) {
    "use strict";
    var t = "container";

    function s() {}
    s.prototype = {
        name: "applet.savesettings",
        execute: function(e, t, s) {
            "applet.savesettings" !== t.action && "savesettings" !== t.action || this.saveSettings(e, t.params.guid, t.params), s()
        },
        saveSettings: function(s, a, i) {
            if (s.applets && s.applets[a]) {
                i = i || {};
                var n, o, r = s.applets[a];
                (n = i.src ? r.get(t).one(i.src) : (o = r.getView("settings")) && o.get("container").one("form")) && r.get("model").saveSettings(e.Af.Dom.parseForm(n), {
                    critical: i.critical
                }, function(n) {
                    if (n && "invalid_settings" === n.code) e.Af.Message.show(r.get(t), {
                        level: "error",
                        content: n.message
                    });
                    else {
                        if (i.showview) {
                            var o = r.getView(i.showview);
                            o || (o = r.createView(i.showview)) && o.render(), o && s.execControllers({
                                action: "showview",
                                params: {
                                    guid: a,
                                    view: i.showview
                                }
                            })
                        }
                        n && e.Af.Message.show(r.get(t), {
                            level: "error",
                            token: n
                        })
                    }
                })
            }
        }
    }, e.namespace("Af").AppletSaveSettings = s
}, "@VERSION@", {
    requires: ["af-dom", "af-message"]
});
YUI.add("af-applet-view", function(e, t) {
    "use strict";
    var i = e.Af.Utils.perfStart,
        n = e.Af.Utils.perfStop,
        s = e.Af.Bootstrap,
        r = e.Lang.isFunction,
        a = "error",
        d = "viewrender",
        h = "viewupdate";
    e.namespace("Af").AppletView = e.Base.create("AfAppletView", e.View, [], {
        isDirty: !1,
        tmplPrefix: "ape-applet-templates-",
        _handles: [],
        autoRender: !0,
        isEditView: !1,
        initializer: function(t) {
            this._handles.push(this.after("displayChange", function(e) {
                this.fireEvent("viewdisplay", {
                    prevRegion: e.prevVal,
                    newRegion: e.newVal
                })
            }, this)), this._handles.push(this.after("viewrender", function() {
                var t = this;
                e.use("stencil", function(e) {
                    e.Stencil.initAll(t.get("container"))
                })
            }, this)), e.each(["autoRender"], function(i) {
                e.Object.owns(t, i) && (this[i] = t[i])
            }, this), this.autoRender && (this._dataHandle = this.get("model").after("dataChange", function() {
                this.isDirty = !0, this.render()
            }, this))
        },
        destructor: function() {
            this._dataHandle && (this._dataHandle.detach(), delete this._dataHandle), this.get("container").destroy(!0), e.Array.each(this._handles, function(e) {
                e.detach()
            }), delete this.tmplPrefix, delete this.isDirty, delete this._handles
        },
        getTemplate: function() {
            if (this._template) return this._template;
            var e = this.get("name"),
                t = s.getTemplateName(this.get("guid"), e);
            return dust.cache[t] ? (this._template = t, t) : (t = this.tmplPrefix + e, dust.cache[t] ? (this._template = t, t) : null)
        },
        loadLazyTemplates: function(t) {
            r(t) || (t = null);
            var i = s.getLazyLoadYuiModules(this.get("guid"), "templates"),
                n = e.Array.filter(i, function(e) {
                    return !dust.cache[e]
                });
            0 !== n.length ? e.use(n, function() {
                if (t) {
                    var i = e.Array.filter(n, function(e) {
                        return !dust.cache[e]
                    });
                    i && i.length > 0 ? t(i) : t()
                }
            }) : t && t()
        },
        refresh: function() {
            throw "refresh() not implemented"
        },
        setHTML: function(t) {
            return e.Af.Dom.setHTML(this.get("container"), t), this
        },
        shouldRender: function() {
            return this.isDirty || !this.hasContent()
        },
        render: function() {
            return this.shouldRender() && this.loadLazyTemplates(e.bind(this._render, this)), this
        },
        _render: function() {
            var t, s, r, h = this.getTemplate();
            return h ? (r = this.get("type") + ":" + this.get("name") + ":", i(s = r + "tojson"), t = this.get("model").toJSON(), n(s), i(s = r + "dust"), dust.render(h, t, e.bind(function(e, t) {
                n(s), e ? this.fireEvent(a, {
                    code: d,
                    message: e.message || e
                }) : (this.setHTML(t), this.isDirty = !1, this.fireEvent(d))
            }, this)), this) : (this.fireEvent(a, {
                code: d,
                message: "no template found"
            }), this)
        },
        forceRender: function() {
            return this.isDirty = !0, this.render()
        },
        update: function(t, i, n, s, r) {
            "function" == typeof(s = s || {}) && (r = s, s = {});
            var d, u, o = this.get("container"),
                l = this.get("model");
            return t = "string" == typeof t ? o.one(t) : t, i && dust.cache[i] ? n ? t || (d = "can't find node") : d = "missing data" : d = "missing template:" + i, d ? (this.fireEvent(a, {
                code: h,
                message: d
            }), r && window.setTimeout(function() {
                r(d)
            }, 0), this) : (u = e.merge(n, {
                i18n: l.get("i18n"),
                intl: l.get("intl")
            }), dust.render(i, u, e.bind(function(i, n) {
                return i ? (this.fireEvent(a, {
                    code: h,
                    message: i.message || i
                }), r && r(i)) : ("append" === s.mode ? t.append(n) : e.Af.Dom.setHTML(t, n), o.contains(t) && this.fireEvent(h), r && r(null, n))
            }, this)), this)
        },
        hasContent: function() {
            var t = this.get("container");
            return "" !== e.Lang.trim(t.getHTML())
        },
        fireEvent: function(e, t) {
            var i = {
                applet: {
                    guid: this.get("guid"),
                    type: this.get("type"),
                    view: {
                        name: this.get("name")
                    }
                }
            };
            i[e] = t || {}, this.fire(e, i)
        },
        getRapid: function() {
            var t = e.Af.rapid;
            return (t && r(t.getRapidTracker) ? t.getRapidTracker() : e.rapid) || null
        },
        rapidBeaconClick: function(t, i) {
            var n = e.Af.rapid;
            t && n && r(n.triggerBeaconClickEvent) && n.triggerBeaconClickEvent(t, i)
        },
        rapidParseYLK: function(t) {
            var i = e.Af.rapid;
            if (t && i && r(i.parseYLK)) return i.parseYLK(t)
        },
        rapidGetSec: function(t) {
            var i = e.Af.rapid;
            if (t && i && r(i.getSecValue)) return i.getSecValue(t)
        }
    }, {
        ATTRS: {
            guid: {},
            type: {},
            name: {},
            model: {},
            display: {
                value: null
            }
        }
    })
}, "@VERSION@", {
    requires: ["af-bootstrap", "af-utils", "base-build", "dust", "view"]
});
YUI.add("af-applet-viewmgr", function(e) {
    "use strict";
    var i = "main",
        t = "App-Chrome-on",
        a = "container";

    function o(e) {
        return e && (e.isEditView || "settings" === e.get("name"))
    }

    function s(e, i) {
        e && i && e.destroyView(i, {
            remove: !0,
            async: !0
        })
    }

    function p() {}

    function n() {}

    function r() {}
    p.prototype = {
        name: "applet.showview",
        execute: function(e, i, t) {
            "applet.showview" === i.action || "showview" === i.action ? this.showView(e, i.params.guid, i.params) : "page.init" === i.action && e.after("*:showview", function(i) {
                this.showView(e, i.applet && i.applet.guid || i.target.get("guid"), i.showview)
            }, this), t()
        },
        showView: function(e, p, n) {
            if (e.applets && e.applets[p]) {
                n = n || {};
                var r, w = e.applets[p],
                    c = n.view || i,
                    l = n.region || w.regionForView(c) || i,
                    f = "true" === n.destroy || !0 === n.destroy,
                    g = w.getRegion(l),
                    u = w.getView(c);
                u || (u = w.createView(n.view)) && u.render(), u && (r = g.getView(), g.showView(u), o(u) ? w.get(a).addClass(t) : w.get(a).removeClass(t), r && r !== u && (o(r) || f) && s(w, r))
            }
        }
    }, n.prototype = {
        name: "applet.closeview",
        execute: function(e, i, t) {
            "applet.closeview" === i.action || "closeview" === i.action ? this.closeView(e, i.params.guid, i.params) : "page.init" === i.action && e.after("*:closeview", function(i) {
                this.closeView(e, i.applet && i.applet.guid || i.target.get("guid"), i.closeview)
            }, this), t()
        },
        closeView: function(e, t, a) {
            if (e.applets && e.applets[t]) {
                a = a || {};
                var p, n, r, w = e.applets[t],
                    c = "true" === a.destroy || !0 === a.destroy;
                p = o(r = w.getView(a.view)) ? "edit" : w.regionForView(a.view) || i, (n = w.getRegion(p)) && (p === i ? n.showView(w.getView(i)) : n.closeView()), w.get("container").removeClass("App-Chrome-on"), (o(r) || c) && s(w, r)
            }
        }
    }, r.prototype = {
        name: "applet.refreshview",
        execute: function(e, i, t) {
            "applet.refreshview" !== i.action && "refreshview" !== i.action || this.refreshView(e, i.params.guid, i.params), t()
        },
        refreshView: function(e, i, t) {
            if (e.applets && e.applets[i]) {
                t = t || {};
                var a = e.applets[i],
                    o = a.getView(t.view || "main");
                o || (o = a.createView(t.view)), o && o.refresh(t)
            }
        }
    }, e.namespace("Af").AppletShowView = p, e.namespace("Af").AppletCloseView = n, e.namespace("Af").AppletRefreshView = r
}, "@VERSION@", {
    requires: ["af-applet-dom"]
});
YUI.add("af-applet", function(e, t) {
    "use strict";
    var i = e.Af,
        n = i.Utils,
        r = e.Lang,
        a = e.Object,
        s = e.Array,
        o = i.Config,
        l = i.Bootstrap,
        g = "container",
        p = "guid",
        c = "model",
        f = "type",
        d = "footer",
        v = "header",
        u = "edit",
        w = "main",
        h = o.isDev(),
        V = r.isFunction,
        _ = n.objectGetValue,
        m = n.objectMerge,
        y = n.perfStart,
        A = n.perfStop;

    function M(e) {
        if (!e) return e;
        var t = e.split("-");
        return (t = s.map(t, function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        })).join(".")
    }

    function C(t) {
        e.EventTarget.prototype.constructor.call(this), this.initializer(t)
    }
    e.extend(C, i.CompositeView, {
        views: {
            main: {
                region: w
            },
            settings: {
                region: u
            },
            remove: {
                region: u
            },
            moreinfo: {
                region: u
            },
            header: {
                region: v
            },
            footer: {
                region: d
            }
        },
        regions: {
            main: {
                view: w
            },
            header: {
                view: v
            },
            footer: {
                view: d
            },
            edit: {
                defer: !0,
                view: "settings"
            }
        },
        allowRegionLateBind: !1,
        initializer: function(n) {
            var s = this;
            s.guid = n.guid, s.type = n.type, s.clientId = e.guid("appletClientId_"), s.container = e.one(n.container), s._destroyed = !1, s.views = m(s.views, n.views), s.regions = m(s.regions, n.regions), a.each(s.regions, function(e, t) {
                var i = s.getRegion(t);
                i || (i = s.createRegion(t, e.selector))
            }), s._bootstrapMV(function(e) {
                try {
                    if (e) return;
                    var o = n.type + ":aptShowViews";
                    y(o), a.each(s.regions, function(e, t) {
                        if (e && e.view) {
                            var i, n = s.getRegion(t);
                            n && (i = r.isString(e.view) ? s.getView(e.view) : e.view) && n.showView(i)
                        }
                    }), A(o)
                } catch (l) {
                    if (h) throw l;
                    i.Beacon.error(t, {}, {
                        code: "appbstrap",
                        message: l.stack || l.message,
                        appletType: s.type
                    })
                }
            }), s._eventHandlers = [], s._eventHandlers.push(s.after("*:showmessage", function(e) {
                i.Message.show(s.get(g), e.showmessage)
            }))
        },
        destroy: function() {
            var e = this,
                t = e.get(c);
            e.destroyViews(), e._regions = e._views = e.views = e.regions = null, t && (e.set(c, null, {
                silent: !0
            }), t.destroy()), s.each(e._eventHandlers, function(e) {
                e && e.detach()
            }), e._eventHandlers = null, e._destroyed = !0, e.fireEvent("appletdestroyed"), e.detachAll()
        },
        createView: function(t) {
            var n, r, a, s = this,
                o = s.views[t],
                d = i.AppletDom.classes().view_container_prefix + t;
            return o && o.region && !s.getRegion(o.region) ? null : (r = s._getViewClass(t)) ? ((n = e.merge({
                applet: s,
                name: t,
                guid: s.get(p),
                type: s.get(f),
                model: s.get(c),
                container: s.get(g).one("div." + d)
            }, l.getViewMeta(s.get(p), t).config)).container || (n.container = e.Node.create('<div class="' + d + '"/>')), (a = new r(n)).addTarget(s), s.setView(t, a), a) : null
        },
        fireEvent: function(e) {
            this.fire(e, {
                applet: {
                    guid: this.get(p),
                    type: this.get(f),
                    clientId: this.clientId
                }
            })
        },
        getViews: function() {
            return this._views
        },
        get: function(e) {
            return this[e]
        },
        set: function(e, t) {
            this[e] = t
        },
        regionForView: function(e) {
            var t = this.views && this.views[e];
            return t ? t.region : null
        },
        _bootstrapMV: function(e) {
            var t = this,
                i = t.get(g),
                n = {
                    batch: r.isValue(i.getData("applet-defer"))
                };
            i.one(".App-Toolbar_v2") && (n.extraMods = ["af-applet-editview", "af-applet-settingsview"]), l.load(t.get(p), n, function(i) {
                if (i) e(i);
                else if (t._destroyed) e("applet was destroyed");
                else {
                    var n = t.get(f),
                        r = n + ":aptCreateModel";
                    y(r), t._createModel(), A(r), y(r = n + ":aptCreateViews"), t._createViews(), A(r), e()
                }
            })
        },
        _createModel: function() {
            var e = this._getModelClass();
            this.set(c, new e({
                guid: this.get(p),
                type: this.get(f)
            }))
        },
        _createViews: function() {
            var t = this,
                n = t.get(g),
                r = l.getMeta(t.get(p)).views,
                o = i.AppletDom.classes().view_container_prefix;
            a.each(r, function(i, n) {
                var r;
                (i = e.merge(t.views[n], i)).isActiveView && i.region && (r = t.regions[i.region]) && (r.view = n)
            }), a.each(t.regions, function(e, i) {
                var r, a, l, g;
                if (r = i, a = e.view, l = ["js-applet-view-container"], (g = n.one("div[data-region=" + r + "]")) && (r !== a && l.push(o + r), s.forEach(l, function(e) {
                        var t = g.one("div." + e);
                        t && t.replaceClass(e, o + a)
                    })), !e.defer) {
                    var p = e.view && t.createView(e.view);
                    p && p.render()
                }
            })
        },
        _getModelClass: function() {
            var t = l.getModelClass(this.get(p), "applet_model");
            return V(t) ? t : (t = _(e, M(this.get(f)) + "AppletModel"), V(t) ? t : i.AppletModel)
        },
        _getViewClass: function(t) {
            var n, r = this.get(p),
                s = l.getViewClass(r, t);
            if (V(s)) return s;
            if (s = _(e, M(this.get(f)) + M(t) + "View"), V(s)) return s;
            if (n = l.getViewMeta(r, t), 0 === a.size(n)) {
                if (t === d) return null;
                if (t === v) return null
            }
            return s = _(e.Af, "Applet" + M(t) + "View"), V(s) ? s : this.views[t] && this.views[t].region === u ? e.Af.AppletEditView : i.AppletView
        }
    }), e.EventTarget && e.augment(C, e.EventTarget, !0, null, {
        emitFacade: !0,
        prefix: "AfApplet"
    }), e.namespace("Af").Applet = C
}, "@VERSION@", {
    requires: ["af-applet-dom", "af-applet-model", "af-applet-headerview", "af-bootstrap", "af-compositeview", "af-config", "af-utils", "array-extras", "event-custom", "node", "stencil-tooltip"]
});
YUI.add("af-applets", function(e, t) {
    "use strict";
    var l = e.Lang.isFunction;

    function o() {
        var e = this;
        YUI.Env.Af = YUI.Env.Af || {}, YUI.Env.Af.Applets = e, e.applets = {}, e._firstControllerNode = null, l(e.after) && e.after("*:appletdestroyed", function(t) {
            var l = t.applet || {},
                o = e.applets[l.guid];
            o && l.clientId === o.clientId && delete e.applets[l.guid]
        })
    }
    o.prototype = {
        addController: function(e) {
            if (!e || !e.name || "function" != typeof e.execute) return !1;
            if (!this._firstControllerNode) return this._firstControllerNode = {
                controller: e,
                next: null
            }, !0;
            for (var t, l = this._firstControllerNode; l;) {
                if (l.controller.name === e.name) return l.controller = e, !0;
                t = l, l = l.next
            }
            return t.next = {
                controller: e,
                next: null
            }, !0
        },
        execControllers: function(e) {
            e && e.action && this._firstControllerNode && this._execController(e, this._firstControllerNode)
        },
        _execController: function(e, t) {
            if (e && e.action && t && t.controller) {
                var l = this;
                t.controller.execute(this, e, function(o) {
                    o || l._execController(e, t.next)
                })
            }
        },
        initializer: function(t) {
            t = t || {};
            var l = e.Af,
                o = "aptsInitializer",
                n = this;
            l.Utils.perfStart(o), n.addController(new l.AppletInit), n.addController(new l.AppletLoad), n.addController(new l.AppletAdd), n.addController(new l.AppletRemote), n.addController(new l.AppletRemove), n.addController(new l.AppletMove), n.addController(new l.AppletAction), n.addController(new l.AppletShowView), n.addController(new l.AppletCloseView), n.addController(new l.AppletRefreshView), n.addController(new l.AppletSaveSettings), e.Array.forEach(t.controllers, function(e) {
                n.addController(e)
            }), n.execControllers({
                action: "page.init"
            }), l.Utils.perfStop(o)
        },
        getAppletLayout: function() {
            return e.Af.AppletDom.getLayout()
        },
        addApplet: function(e, t, l, o, n) {
            var r = {
                type: e,
                config: t,
                settings: l,
                location: o
            };
            this.execControllers({
                action: "applet.add",
                params: r,
                callback: n
            })
        },
        initApplet: function(e, t, o) {
            l(t) && (o = t, t = !1);
            var n = {
                replace: !!t
            };
            "string" == typeof e ? n.guid = e : n.node = e, this.execControllers({
                action: "applet.init",
                params: n,
                callback: o
            })
        },
        loadApplet: function(e, t) {
            var l = {};
            "string" == typeof e ? l.guid = e : l.node = e, this.execControllers({
                action: "applet.load",
                params: l,
                callback: t
            })
        },
        moveApplet: function(t, o, n, r, a) {
            l(r) && (a = r, r = {});
            var p = {
                action: "applet.move",
                params: e.merge({
                    guid: t,
                    from: o,
                    to: n
                }, r),
                callback: a
            };
            this.execControllers(p)
        },
        removeApplet: function(t, o, n) {
            l(o) && (n = o, o = {});
            var r = {
                action: "applet.remove",
                params: e.merge({
                    guid: t
                }, o),
                callback: n
            };
            this.execControllers(r)
        }
    }, e.namespace("Af").Applets = o, e.Af.getApplet = function(t) {
        return e.Af.Utils.objectGetValue(YUI.Env.Af, "Applets.applets." + t) || null
    }
}, "@VERSION@", {
    requires: ["af-applet-action", "af-applet-init", "af-applet-load", "af-applet-mgr", "af-applet-savesettings", "af-applet-viewmgr", "af-dom", "af-utils"]
});
YUI.add("highlander-client-templates-viewer-controls", function(e, n) {
    dust.cache = dust.cache || {}, dust.cache[n] = function(e) {
        function n(e, n) {
            return e.w('<style>\n.PageOverlay {\n    background-color: rgba(255,255,255,0.9);\n}\n@media all and (orientation:landscape) {\n    #Stencil #Share {\n        min-width: 350px;\n    }\n    #Stencil #Share a {\n        width: 25%;\n        border-bottom: none;\n        padding-top: 0;\n        text-align: center;\n    }\n    #Stencil #Share .Icon {\n        padding-bottom: 5px;\n    }\n    #Stencil #Share b {\n        display: block;\n    }\n}\n</style>\n<div class="Header Pos-f Z-10 T-0 W-100 NoLinkColor">\n    <a id="CloseReaderBtn" href="').x(n.get(["isDeepLink"], !1), n, {
                "else": t,
                block: a
            }, {}).w('" class="Pos-r Z-3 Fl-start" data-ylk="sec:hl-viewer;slk:close;elm:btn;itc:0;">\n        <i class="Icon Fz-2xl Va-m W-a Px-10 Pend-20" style="color:#500095">&#xe603;</i>\n        <b class="Hidden">').f(n.get(["BACK"], !1), n, "h").w("</b>\n    </a>\n    ").nx(n.get(["canvassFullScreen"], !1), n, {
                block: l
            }, {}).w("\n</div>\n").nx(n.get(["canvassFullScreen"], !1), n, {
                block: i
            }, {})
        }

        function t(e, n) {
            return e.w("/")
        }

        function a(e, n) {
            return e.f(n.get(["frontpagePath"], !1), n, "h")
        }

        function l(e, n) {
            return e.w('\n<button id="ShareBtn" class="ButtonNaked Fl-end Ta-c Va-m" data-plugin=\'lightbox\' data-lightbox=\'{"target":"#Share","default":{"show":{"autohide":1, "closebtn":".icon-share-close"}}}\'>\n        <i class="Icon W-a Va-m Fz-2xl P-10 Pt-8" style="color:#500095">').x(n.get(["isIos"], !1), n, {
                "else": s,
                block: o
            }, {}).w('</i>\n        <b class="Hidden">').f(n.get(["SHARE"], !1), n, "h").w("</b>\n    </button>\n    ")
        }

        function s(e, n) {
            return e.w("&#xe01c;")
        }

        function o(e, n) {
            return e.w("&#xe600;")
        }

        function i(e, n) {
            return e.w('\n<div id="Share" class="Modal Modal-off Dn Mx-10 Bd-1" aria-labbelledby="ModalTitle">\n    <div class="share">\n        <h2 id="ModalTitle" class="Fz-m">').f(n.get(["SHARE"], !1), n, "h").w('</h2>\n        <p class="Fz-l Fw-b js-hl-share-title">').f(n.get(["title"], !1), n, "h").w('</p>\n        <div role="menu" class="GridSpread My-20 Pt-20" style="border-top: 4px solid #555;">\n            <a href="#0" target="_blank" role="menuitem" class="Grid-U NoLinkColor js-hl-share-tumblr Td-n Bd-b W-45 Pb-20 Fz-s Bxz-bb">\n                <i class="Icon Fz-30 Tumblr-color Pend-5 Va-m">&#xe071;</i>\n                <b class="Va-m">').f(n.get(["TUMBLR"], !1), n, "h").w('</b>\n            </a>\n            <a href="#0" target="_blank" role="menuitem" class="Grid-U NoLinkColor js-hl-share-twitter Td-n Bd-b W-45 Pb-20 Fz-s Bxz-bb">\n                <i class="Icon Fz-30 Twitter-color Pend-5 Va-m">&#xe001;</i>\n                <b class="Va-m">').f(n.get(["TWITTER"], !1), n, "h").w('</b>\n            </a>\n            <a href="#0" target="_blank" role="menuitem" class="Grid-U NoLinkColor js-hl-share-facebook Td-n Pt-20 W-45 Fz-s Bxz-bb">\n                <i class="Icon Fz-30 Facebook-color Pend-5 Va-m">&#xe000;</i>\n                <b class="Va-m">').f(n.get(["FACEBOOK"], !1), n, "h").w('</b>\n            </a>\n            <a href="#0" role="menuitem" class="Grid-U NoLinkColor js-hl-share-mail Td-n W-45 Pt-20 Fz-s Bxz-bb">\n                <i class="Icon Fz-30 Mail-color Pend-5 Va-m">&#xe07d;</i>\n                <b class="Va-m">').f(n.get(["MAIL"], !1), n, "h").w('</b>\n            </a>\n        </div>\n    </div>\n    <button class="icon-share-close Pos-a T-0 End-0 M-10 Fz-xs P-2 Bd-0" data-plugin="lightbox" data-lightbox=\'{"default":"hide"}\'>\n        <b class="Hidden">').f(n.get(["CLOSE"], !1), n, "h").w("</b>\n    </button>\n</div>\n")
        }
        return dust.register("highlander-client-templates-viewer-controls", n), n.__dustBody = !0, t.__dustBody = !0, a.__dustBody = !0, l.__dustBody = !0, s.__dustBody = !0, o.__dustBody = !0, i.__dustBody = !0, n
    }(), dust.cache["highlander-client:viewer-controls.dust"] = dust.cache["highlander-client:viewer-controls"] = dust.cache[n], e.Template._cache = e.Template._cache || {}, e.Template._cache["highlander-client/templates/viewer-controls"] = function(e, t) {
        e = e || {}, dust.render(n, e, t)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("highlander-client", function(e, i) {
    "use strict";
    var t = e.Object.keys,
        n = "td-applet-viewer",
        a = {
            once: !0
        };

    function r(t) {
        var r = this;
        e.Af.Config, this.inlineViewer = t && t.inlineViewer, this.stickerTarget = t && t.stickerTarget || "#UH", this.viewerAppletType = t && t.viewerAppletType || n, this.magazineViewerEnabled = t && t.magazineViewerEnabled, this.mode = t && t.viewer && t.viewer.highlanderMode || "", this.viewerBlacklistDisable = t && t.viewerBlacklistDisable, this.viewerGuid = this.findViewer(), this.offnetDeeplink = t && t.viewer && t.viewer.offnetDeeplink || !1, this.viewerGuid ? (this.viewer = new e.Highlander.Viewer(this, t), this.dwelltime = !!e.Af.Dwelltime && new e.Af.Dwelltime, this.tracking = new e.Highlander.Tracking(this, t), this.content = new e.Highlander.Content(this, t)) : e.Af.Beacon.error(i, {}, {
            code: "noviewer"
        }, a), e.Global.on(["stream:template", "stream:filter"], function(e) {
            r.inlineCapable = "items" === e.template || "tiles" === e.template || "mags-tiles" === e.template, r.streamByRow = "mags-tiles" === e.template, r.template = e.template
        })
    }
    r.prototype = {
        initializer: function() {
            this.viewerGuid && (this.routes = new e.Highlander.Routes(this))
        },
        findViewer: function() {
            var i = this,
                n = e.Af.Bootstrap.find(function(e, t) {
                    return !(!t || t.applet_type !== i.viewerAppletType)
                });
            return n ? t(n)[0] : null
        },
        showViewer: function(i, t, n, a, r) {
            var l = "desktop" === e.Af.Config.getContext("device");
            this.inlineViewer && this.inlineCapable ? this.viewer.expand(i, t) : this.viewer.show(i, t, n, a, r), l && e.Af.Event.fire("video-manager:disable"), e.Af.Event.fire("modal:show")
        },
        hideViewer: function(i, t) {
            var n = "desktop" === e.Af.Config.getContext("device"),
                a = !0,
                r = !1;
            "mega-modal" !== this.mode && (a = !!n && "none" !== e.one("#MainView").getStyle("display"), r = this.inlineViewer && this.inlineCapable && a), r ? this.viewer.collapse(i, t) : this.viewer.hide(i, t), this.tracking.handlePageview({
                useAppSpaceId: !0,
                useFilterSpaceId: !0,
                isViewerHide: !0
            }), n && e.Af.Event.fire("video-manager:enable"), e.Af.Event.fire("modal:hide")
        }
    }, e.namespace("Highlander").Client = r
}, "@VERSION@", {
    langBundles: ["strings"],
    requires: ["event-custom-base", "event-tap", "af-beacon", "af-bootstrap", "af-config", "af-content", "af-event", "af-dwelltime", "af-utils", "highlander-content", "highlander-tracking", "highlander-routes", "highlander-viewer"]
});
YUI.add("highlander-content", function(t, i) {
    "use strict";
    var a = ["*:viewrender", "*:viewupdate"],
        e = ".js-content-viewer",
        n = {
            article: "1",
            slideshow: "2",
            video: "3"
        };

    function s(t, i) {
        var a = this;
        a.app = t, a.batchUuidLists = {}, a.setScanEvents()
    }
    s.prototype = {
        setScanEvents: function() {
            var t = this;
            t.app.on("*:appletinit", function(i) {
                var a = i.applet && i.applet.guid;
                a && t.scan("init", a)
            }), t.app.on(a, function(i) {
                var a = i.applet && i.applet.guid;
                a && t.scan("batch", a)
            })
        },
        getData: function(i) {
            var a = this,
                s = "",
                l = [],
                u = [],
                c = "",
                p = "",
                r = {},
                d = "",
                o = [],
                h = [],
                f = [],
                v = {};
            return i.each(function(i) {
                (d = i.getData("uuid-list")) && ((v = i && i.all("[data-uuid]")).isEmpty() || (v.each(function(i) {
                    var o;
                    (c = i.getData("uuid")) && (s = n[i.getData("type")]) && (p = i && i.one(e)) && (o = p.get("href")) && (r = {
                        id: c,
                        type: s,
                        link: o
                    }, i.all(e).addClass("rapidnofollow").addClass("rapid-noclick-resp"), a.batchUuidLists[d] && -1 !== t.Array.indexOf(a.batchUuidLists[d], c) || l.push(r), f.push(c), u.push(r))
                }), a.batchUuidLists[d] = f, o[d] = l, h[d] = u))
            }), {
                list: o,
                fullList: h
            }
        },
        scan: function(i, a) {
            var e, n = t.all("div#applet_" + a + " .js-auto-content-viewer");
            n.isEmpty() || (e = this.getData(n), t.Object.each(e.fullList, function(a, n) {
                var s = e.list[n] || [],
                    l = e.fullList[n] || [];
                0 !== s.length && 0 !== l.length && ("init" === i ? t.Af.Event.fire("content:init", {
                    guid: n,
                    list: s,
                    fullList: l
                }) : t.Af.Event.fire("content:batch", {
                    guid: n,
                    list: s
                }))
            }))
        }
    }, t.namespace("Highlander").Content = s
}, "@VERSION@", {
    requires: ["af-event"]
});
YUI.add("highlander-routes", function(e, t) {
    "use strict";
    var a, i, r, n, o = {
            closeViewerLink: "js-close-content-viewer",
            contentContainer: "js-content-container",
            contentLabel: "js-content-label",
            contentTitle: "js-content-title",
            deepLink: "js-deeplink",
            filterLink: "js-header-filter",
            pageWrapper: "js-viewer-pagewrapper",
            shareFacebook: "js-hl-share-facebook",
            shareMail: "js-hl-share-mail",
            shareTitle: "js-hl-share-title",
            shareTumblr: "js-hl-share-tumblr",
            shareTwitter: "js-hl-share-twitter",
            viewerLink: "js-content-viewer",
            viewerWrapper: "js-viewer-viewerwrapper"
        },
        l = /\/\/(?:[^\/\.]+\.)?([^\/\.]+)\.yahoo\.com\/?(.*)$/,
        s = {
            ng: !0,
            za: !0,
            au: !0,
            nz: !0,
            cn: !0,
            h1: !0,
            hk: !0,
            "in": !0,
            id: !0,
            jp: !0,
            kr: !0,
            my: !0,
            ph: !0,
            pk: !0,
            aa: !0,
            sg: !0,
            tw: !0,
            k1: !0,
            th: !0,
            vn: !0,
            xa: !0,
            xe: !0,
            me: !0,
            at: !0,
            b2: !0,
            b3: !0,
            ch: !0,
            cz: !0,
            de: !0,
            dk: !0,
            ee: !0,
            es: !0,
            ct: !0,
            fi: !0,
            fr: !0,
            uk: !0,
            gr: !0,
            hu: !0,
            ie: !0,
            it: !0,
            lt: !0,
            lv: !0,
            nl: !0,
            no: !0,
            pl: !0,
            ro: !0,
            se: !0,
            tr: !0,
            ua: !0,
            ca: !0,
            cf: !0,
            qc: !0,
            mx: !0,
            us: !0,
            e1: !0,
            espanol: !0,
            www: !0,
            ar: !0,
            bo: !0,
            br: !0,
            cl: !0,
            co: !0,
            ec: !0,
            gf: !0,
            gy: !0,
            pe: !0,
            py: !0,
            sr: !0,
            uy: !0,
            ve: !0
        },
        c = {
            all: !0,
            fp: !0
        },
        u = [/^https?:\/\/music\.yahoo\.com\/blogs\/our-country\/.+$/, /^https?:\/\/news\.yahoo\.com\/katie-couric-.+$/],
        d = "NO_UUID",
        p = e.config.win,
        h = e.config.doc,
        g = {
            HOME_TITLE: "Yahoo",
            FRONTIER_HOME_TITLE: "Frontier Homepage Powered by Yahoo",
            VERIZON_HOME_TITLE: "Verizon Yahoo",
            ROGERS_HOME_TITLE: "Rogers powered by Yahoo",
            SMARTFREN_HOME_TITLE: "Smartfren powered by Yahoo",
            TATADOCOMO_HOME_TITLE: "Tata Photon Yahoo",
            TIKONA_HOME_TITLE: "Tikona Yahoo",
            IDEANETSETTER_HOME_TITLE: "Idea Netsetter Yahoo",
            MTSINDIA_HOME_TITLE: "MTS Yahoo",
            BACK: "Back",
            SHARE: "Share",
            FACEBOOK: "Facebook",
            TUMBLR: "Tumblr",
            TWITTER: "Twitter",
            MAIL: "Mail"
        },
        v = {
            sec: "hl-viewer",
            elmt: "cl",
            itc: 0,
            rspns: "cl",
            t4: "art-full"
        },
        f = p.location.hostname,
        w = /^https?\:\/\/([^\/\?]+\.)*yahoo.com/;

    function m(t) {
        var i, o, s, c, h, v = this,
            f = p.ViewerClickCapture,
            w = e.one("body"),
            m = "desktop" === e.Af.Config.getContext("device");
        (v.app = t, n = v.app.offnetDeeplink, v.isDeepLink = v.app.viewer.isDeepLink, v.isVvDeepLink = v.app.viewer.isVvDeepLink, !v.isDeepLink || v.isVvDeepLink) ? (v.app.magazineViewerEnabled || (u.push(/^https?:\/\/www.yahoo\.com\/(?:food|tech|movies|travel|beauty|health|style|diy|parenting|music)\/.+$/), u.push(/^https?:\/\/uk\.yahoo\.com\/movies\/.+$/)), a = e.Af.Utils.i18n("highlander-client/strings"), e.Object.isEmpty(a) && (a = g), s = "//" + p.location.host + "/", c = s.match(l), h = null, c && c.length >= 2 && ["att", "frontier", "verizon", "rogers", "smartfren", "tatadocomo", "tikona", "ideanetsetter", "mtsindia"].indexOf(c[1]) > -1 && (h = c[1].toUpperCase() + "_HOME_TITLE"), (o = h) || (o = "HOME_TITLE"), r = {
            uuid: d,
            list: d,
            url: p.location.pathname + p.location.search,
            title: a[o] || "Yahoo"
        }, v.history = new e.History({
            initialState: r
        }), v.historyItems = [], v.app.viewer.vvDeepLinkItem && v.history.replace({
            uuid: v.app.viewer.vvDeepLinkItem.uuid,
            title: v.app.viewer.vvDeepLinkItem.title
        }), e.on("history:change", v.handleHistoryChange, v), e.Af.Event.on("content:navigate", v.handleContentNavigate, v), e.Af.Event.on("content:endLoad", v.handleAFT2End, v), v.isVvDeepLink || (e.UA.android || e.UA.ie || m ? (w.on("click", e.bind(v.handleClick, v)), m && w.on("contextmenu", e.bind(v.handleClick, v))) : (w.on("tap", e.bind(v.handleClick, v), {
            sensitivity: 5
        }), w.on("click", v.handleClick, v, !0))), window && window.performance && window.performance.mark && window.performance.mark("strmInteractive STOP"), f && (f.disable(), (i = f.last()) && (f.clear(), v.handleClick(i))), e.Object.getValue(v.app.viewer, ["config", "enableVerticalVideo"]) && (v.verticalVideo = new e.Highlander.VerticalVideo)) : f.disable()
    }
    m.prototype = {
        historyItems: [],
        currentItem: {},
        currentStreamNode: null,
        handleClick: function(t, a) {
            var n, l, s, c, u, d, h, g, f, w, m, k, T, b, y, A, E, C, I, L, D, O, V, _ = (new Date).getTime(),
                F = this,
                j = t && t.type || null,
                S = e.one(t.target),
                Y = S.ancestor("a", !0),
                H = S.ancestor("button", !0),
                M = o.contentTitle,
                N = o.contentLabel,
                R = {},
                U = Y ? Y.getAttribute("data-orig-link") : null,
                B = U || (Y ? Y.getAttribute("href") : null),
                P = !!H && H.hasClass(o.closeViewerLink),
                x = e.one("#closebtn"),
                z = !1,
                K = !1,
                W = null,
                $ = null,
                q = [],
                G = "desktop" === e.Af.Config.getContext("device"),
                J = t.metaKey || t.ctrlKey,
                Z = 1 === t.button,
                Q = {},
                X = {};
            if (i = {}, Y = P ? H : Y, (B = P ? "#" : B) || P)
                if (z = F.isBlacklistUrl(B), w = F.convertUrl(B), I = F.isValidYahooUrl(B), Y.hasClass(o.viewerLink) && !z && I) {
                    if (!a && (i.clickToContent = _, n = Y.ancestor("[data-uuid]", !0), l = Y.ancestor("[data-uuid-list]", !0), s = Y.hasClass(M) ? Y : n && n.one("a." + M), u = n ? n.getData("uuid") : null, d = l ? l.getData("uuid-list") : null, h = s ? e.Lang.trim(s.get("text")) : null, A = Y.hasAttribute("data-currentPage"), E = Y.ancestor(".js-stream-roundup", !0), m = Y.ancestor(".js-fake-cluster", !0) || Y.ancestor(".js-stream-cluster", !0), $ = n.getData("cluster"), g = (c = m ? m.one("." + N + " span") || m.one("." + N) : n.one("." + N + " span") || n.one("." + N)) ? e.Lang.trim(c.get("text")) : null, y = c ? c.getData("cat-label") : null, L = Y.getAttribute("data-viewer-conf") || null, b = Y.getData("viewer-position"), u && d)) {
                        if ((A || m) && (A ? (D = e.one("#today-atomic .Carousel-Slider"), O = Y.getAttribute("data-currentPage"), D.all("[data-currentPage=" + O + "]").each(function(e, t) {
                                var a = e.getData("uuid");
                                q.push(a), 0 === t && (k = a)
                            })) : n.getData("cluster-uuids") ? (q = n.getData("cluster-uuids").split(","), k = m.getAttribute("data-uuid")) : Y.ancestor(".js-stream-related-content", !0) ? (m.all("[data-uuid]").each(function(e) {
                                var t = e.getData("uuid");
                                q.push(t)
                            }), k = m.getAttribute("data-uuid")) : (m.all("[data-uuid]").each(function(e) {
                                if (!e.ancestor(".js-stream-related-content", !0)) {
                                    var t = e.getData("uuid");
                                    q.push(t)
                                }
                            }), k = m.getAttribute("data-uuid")), q.unshift(k), q = e.Array.dedupe(q), W = u, u = k, F.clusterUuids = q.slice(0), (T = Y.getData("uuid")) && (F.clusterUuids.splice(q.indexOf(T), 1), F.clusterUuids.unshift(T))), C = e.Af.rapid.parseYLK(Y), (V = Y.ancestor("[data-i13n-sec]")) && (C.sec = V.getAttribute("data-i13n-sec")), Q.linkElYlk = C, E && C.aid && (Q.aid = C.aid), L) try {
                            L = JSON.parse(L), Q.viewerConf = L
                        } catch (ee) {}
                        f = {
                            list: d,
                            uuid: u,
                            url: w,
                            title: h,
                            uuidArr: q,
                            indexOf: W
                        }, Q.label = g, b && (Q.posSel = b), Y.hasClass("js-stream-comments-button") && (Q.commentsClick = !0), y && (Q.categoryLabel = y), F.currentStreamNode = n, F.clusterUuid = $, Y.hasClass("js-fire-beacon") && e.Af.Beacon.send(Y.getAttribute("href"))
                    }
                    K = !0
                } else("/" === B || Y.hasClass(o.closeViewerLink)) && (a || (f = r), K = !0);
            (S.hasClass(o.viewerWrapper) || S.hasClass(o.readerWrap) || "Overlay" === S.get("id")) && (f = r, K = !0, R = e.merge({
                elm: "wrapper",
                g: "",
                slk: "close-wrapper"
            }, v), e.Af.rapid.triggerBeaconClickEvent(x, R, null, X)), K && t.preventDefault && (!G || !J && Z) && t.preventDefault(), (f && Y && e.Af.rapid || P && e.Af.rapid) && (Y.hasClass(o.closeViewerLink) && (Y.ancestor("." + o.contentContainer) || Y.hasClass(o.closeViewerLink)) && (R = e.merge({
                elm: "btn",
                g: "",
                slk: "close"
            }, v), e.Af.rapid.triggerBeaconClickEvent(x, R, null, X)), ("/" !== f.url && K || z && "click" === j) && (R = Y.getData("attrcat") ? {
                tar: Y.getData("attrcat") + ".yahoo.com",
                tar_uri: "offnet"
            } : {
                tar: p.location.host ? p.location.host.substring(0, 300) : "",
                tar_uri: w ? w.substring(0, 300) : ""
            }, e.Af.rapid.triggerBeaconClickEvent(Y, R, null, X))), f && (!G || !J && Z) && F.navigate("click", f.list, f.uuid, f.url, f.title, f.uuidArr, f.indexOf, Q)
        },
        isBlacklistUrl: function(e) {
            if (this.app.viewerBlacklistDisable) return !1;
            var t, a = u.length;
            for (t = 0; t < a; t++)
                if (u[t].test(e)) return !0;
            return !1
        },
        isValidYahooUrl: function(e) {
            return e.match(w)
        },
        convertUrl: function(e, t) {
            var a, i, r, o = e ? e.match(l) : null;
            return o ? (a = ("all" === t ? "fp" : t) || "fp", i = s[o[1]] ? "fp" : o[1], r = o[2], a === i ? e = "/" + r : c[a] && (e = "/" + i + "/" + r)) : e = n ? e : null, e
        },
        getPreviousItem: function(e) {
            var t = this.historyItems,
                a = t.length,
                i = a ? t[a - 1] : {};
            return e ? i[e] : i || null
        },
        popHistory: function(e) {
            this.ignoreHistory = !0, this.historyItems.pop(), e || history.back()
        },
        handleHistoryChange: function(t) {
            var a = this,
                i = t.newVal || {},
                r = i.list,
                n = i.uuid,
                l = i.url,
                s = i.title,
                c = {},
                u = t.src;
            this.app.dwelltime && (this.app.dwelltime.navigate(), n && d !== n && this.app.dwelltime.start({
                uuid: n
            })), a.ignoreHistory ? a.ignoreHistory = !1 : "popstate" === u && n && (c = e.merge({
                elm: "backbtn",
                g: "",
                slk: "close-back-btn"
            }, v), e.Object.getValue(a.app.viewer, ["config", "enableVerticalVideo"]) && a.verticalVideo && d !== n && (c = a.verticalVideo.getHistoryChangeData(t, c)), a.currentStreamNode && e.Af.rapid.triggerBeaconClickEvent(a.currentStreamNode.one("." + o.viewerLink), c), a.navigate(u, r, n, l, s, !0))
        },
        handleContentNavigate: function(e) {
            var t = this,
                a = t.convertUrl(e.url),
                i = e.dir;
            "backward" === i && a === t.getPreviousItem("url") ? t.popHistory() : "stay" === i ? t.navigate("update", e.list || e.guid, e.uuid, a, e.title) : "open" === i ? (t.currentStreamNode = e.item, t.navigate("click", e.list || e.guid, e.uuid, a, e.title, null, null, e.passThruData)) : t.navigate("viewer", e.list || e.guid, e.uuid, a, e.title)
        },
        handleAFT2Start: function() {
            var e;
            "undefined" != typeof window && (e = window), e.YAFT && e.YAFT.AFT2 && (e.YAFT.AFT2.start(), e.YAFT.adPosLoadTimes = [])
        },
        handleAFT2End: function(e) {
            var t;
            "undefined" != typeof window && (t = window), t.YAFT && t.YAFT.AFT2 && "function" == typeof t.aft2CB && t.YAFT.AFT2.end(t.aft2CB.bind(this))
        },
        handleAFT2Clear: function() {
            var e;
            "undefined" != typeof window && (e = window), e.YAFT && e.YAFT_REPORT && e.YAFT_REPORT.removeReport()
        },
        navigate: function(e, t, a, i, r, n, o, l) {
            var s, c = this,
                u = {
                    list: t,
                    referer: window.location.href,
                    uuid: a,
                    url: i,
                    title: r
                },
                p = c.getPreviousItem(),
                g = c.currentItem;
            window._navStart && window._navStart(), i && ("popstate" === e && p.url === i ? (c.currentItem = p, c.historyItems.pop()) : "update" !== e && c.historyItems.push(c.history.get())), "click" !== e && "viewer" !== e || (c.currentItem = u, c.history.add(u, {
                title: r || null,
                url: i
            })), "update" === e && (c.currentItem = u, c.history.replace(u, {
                title: r || null,
                url: i
            })), c.app.viewer.verticalVideo && c.app.viewer.verticalVideo.handleNavigate(e, a), "add" !== e && "viewer" !== e && "update" !== e && (a === d ? c.app.hideViewer(g.list || "", g.uuid || "") : (window.c2s_event && o && window.c2s_event("intent", {
                articleId: o
            }), c.app.showViewer(t, a, n, o, l))), c.app.viewer.verticalVideo && c.app.viewer.verticalVideo.handlePostNavigate(e, a), "click" === e && a !== d ? c.handleAFT2Start() : "click" !== e && "popstate" !== e || a !== d || c.handleAFT2Clear(), r && (h.title = r), (s = "/" === i ? f : i) && (h.querySelector('meta[property="og:url"]').setAttribute("content", s), h.querySelector('link[rel="canonical"]').setAttribute("href", s))
        }
    }, e.namespace("Highlander").Routes = m
}, "@VERSION@", {
    langBundles: ["strings"],
    requires: ["af-rapid", "af-utils", "af-event", "history", "highlander-vertical-video"]
});
YUI.add("highlander-tracking", function(e, i) {
    "use strict";
    var a, n = e.config.win,
        p = {
            once: !0
        };

    function t(i, p) {
        var t, o = this;
        a = e.Af.Config, o.app = i, o.appSpaceId = a.get("spaceid", ""), o.filterSpaceId = o.appSpaceId, o.filterSite = "fp", o.appRapidConfig = p && p.i13nConfig && p.i13nConfig.rapid || !1, o.isViewerOpen = !1, o.rapidConfig = {}, e.Af.Event.on("content:batch", o.handleContentBatch, o), e.Af.Event.on("content:pageview", o.handlePageview, o), e.Global.on("tracking:pageview", o.handlePageview, o), (t = n.nielsenTracker || n.trac) && "function" == typeof t.pageEvent && (o.nielsenTracking = {
            pageHeight: e.one("body").get("scrollHeight"),
            tracker: t,
            urlCount: {}
        })
    }
    t.prototype = {
        handlePageview: function(a) {
            var p = this,
                t = a.containerId || !1;
            p.spaceid = a.spaceid || "", p.spaceid = a.useAppSpaceId ? p.appSpaceId : p.spaceid, p.isViewerOpen = !a.isViewerHide, a.filterSpaceId && a.filterSite && (p.spaceid = p.filterSpaceId = a.filterSpaceId, p.filterSite = a.filterSite), a.useFilterSpaceId && p.filterSpaceId && (p.spaceid = p.filterSpaceId, a.keys = a.ekeys || {}, a.keys.site = p.filterSite, a.keys.pt = "home"), p.pp = p.getPageParams(a.keys, a.type, a.isViewerHide, p.appRapidConfig && p.appRapidConfig.keys), a.useCurrentConfig && p.rapidConfig && (p.spaceid = p.rapidConfig.spaceid || "", p.pp = p.rapidConfig.keys || {}), p.spaceid ? (n.YAHOO && n.YAHOO.i13n && n.YAHOO.i13n.SPACEID && (n.YAHOO.i13n.SPACEID = p.spaceid), p.beaconRapidPageview(p.spaceid, p.pp, a.linkTrack, t), p.beaconComscore(p.spaceid), p.beaconNielsen(), p.handleEuTracking(p.pp.mrkt, p.spaceid)) : e.Af.Beacon.error(i, {
                type: a.type || "",
                linktrack: a.linkTrack || !1,
                uuid: a.keys && a.keys.pstaid || "",
                appurl: n.location.href
            }, {
                code: "nospid",
                message: "missing spaceid"
            })
        },
        handleContentBatch: function() {
            this.beaconNielsen(!0)
        },
        beaconRapidPageview: function(a, n, t, o) {
            var r, s = this,
                c = e.Af.rapid && e.Lang.isFunction(e.Af.rapid.getRapidTracker) ? e.Af.rapid.getRapidTracker() : null;
            r = !(r = o || !1) && s.app.viewer.viewerAppletGuid ? "applet_" + s.app.viewer.viewerAppletGuid : r, c && c.rapidConfig ? (s.appRapidConfig = s.appRapidConfig || c.rapidConfig, s.appRapidConfig && !e.Object.isEmpty(s.appRapidConfig) ? (c.beaconClick("rapidDwell", "", 0, {}, "", null, {
                dwell: "stop"
            }), s.rapidConfig = e.merge(s.appRapidConfig, {
                spaceid: a,
                keys: n
            }), e.Lang.isFunction(c.updateConfig) && c.updateConfig(s.rapidConfig), t && r ? c.isModuleTracked(r) ? c.refreshModule(r, !0, !0, {
                pp: n
            }) : c.addModules(r, !0, {
                pp: n
            }) : c.beaconPageview(n)) : e.Af.Beacon.error(i, {}, {
                code: "norapobj",
                message: "missing app rapid instance config"
            }, p)) : e.Af.Beacon.error(i, {}, {
                code: "norapid",
                message: "missing rapid instance"
            }, p)
        },
        beaconComscore: function(i) {
            var a;
            a = this.getSite(), e.Af.Comscore.beacon({
                spaceid: i,
                panelPath: "/pageview/",
                panelQuery: {
                    client: 1,
                    property: a
                }
            })
        },
        beaconNielsen: function(i) {
            var a, p, t, o, r = this,
                s = r.isViewerOpen,
                c = r.nielsenTracking;
            if (c) {
                if (p = (a = n.location).protocol + a.hostname + a.pathname, t = (c.urlCount[p] || 0) + 1, s) {
                    if (i || t > 1) return
                } else if (i) {
                    if (!((o = e.one("body").get("scrollHeight")) - c.pageHeight >= 500)) return;
                    c.pageHeight = o
                }
                c.tracker.pageEvent(p + "-" + t), c.urlCount[p] = t
            }
        },
        handleEuTracking: function(a, n) {
            var t = e.Af.EuTracking;
            if (t) switch (a) {
                case "DE":
                    t.agof({
                        spaceid: n,
                        domain: "mobyahoo"
                    });
                    break;
                case "FR":
                    t.whap()
            } else e.Af.Beacon.error(i, {}, {
                code: "noeutrk",
                message: "missing af-eu-tracking"
            }, p)
        },
        getSite: function() {
            var e = n.location.pathname.split("/");
            return "www" === e[1] && e[2] ? e[2] : e[1] || "fp"
        },
        getPageParams: function(i, p, t, o) {
            var r, s = this,
                c = i || {},
                d = s.app.routes && s.app.routes.getPreviousItem("url") || "",
                g = n.location.protocol + "//" + n.location.hostname + d,
                f = a.getContext("region", "US"),
                l = 1,
                u = "desktop" === e.Af.Config.getContext("device");
            return r = {
                mrkt: f,
                navtype: "client",
                pct: p,
                pt: "content",
                _w: n.location.href,
                _R: g || "",
                site: s.getSite(),
                ver: u ? "megastrm" : "ss"
            }, o && (r._rid = o._rid || "", "undefined" != typeof o.abk && (r.abk = o.abk), "undefined" != typeof o.seg && (r.seg = o.seg)), s.app.viewer.isDeepLink ? r.pd = "dplnk" : t || (r.pd = "modal", c.paid && s.app.routes.clusterUuids && s.app.routes.clusterUuids.indexOf(c.paid) > -1 && (l = s.app.routes.clusterUuids.indexOf(c.paid) + 1), r.p_cpos = l || 1, c.hosted && (r.p_hosted = c.hosted ? "onnet" : "offnet")), s.app.routes.clusterUuid && (r.ss_cid = s.app.routes.clusterUuid), e.merge(r, c)
        }
    }, e.namespace("Highlander").Tracking = t
}, "@VERSION@", {
    langBundles: ["strings"],
    requires: ["af-beacon", "af-config", "af-rapid", "af-comscore", "af-event", "af-eu-tracking"]
});
YUI.add("highlander-viewer", function(e, t) {
    "use strict";
    var n, i, a, o = {
            contentContainer: "js-content-container",
            contentTitle: "js-content-title",
            deepLink: "js-deeplink",
            filterLink: "js-header-filter",
            innerWrap: "InnerWrap",
            pageWrapper: "js-viewer-pagewrapper",
            readerWrap: "ReaderWrap",
            shareFacebook: "js-hl-share-facebook",
            shareMail: "js-hl-share-mail",
            shareTitle: "js-hl-share-title",
            shareTumblr: "js-hl-share-tumblr",
            shareTwitter: "js-hl-share-twitter",
            viewerLink: "js-content-viewer",
            viewerWrapper: "js-viewer-viewerwrapper"
        },
        r = "advance-sm",
        s = "clickinview",
        l = "Reader-open",
        d = "Reader-postopen",
        p = "Reader-closed",
        c = e.config.win,
        m = e.config.doc,
        u = "viewer:show",
        h = "viewer:hide",
        v = "js-viewer-content-inline",
        g = /\/\/(?:[^\/\.]+\.)?([^\/\.]+)\.yahoo\.com\/?(.*)$/,
        f = function() {
            var e, t = m.createElement("div"),
                n = {
                    mozAnimation: "animationend",
                    oAnimation: "oanimationend",
                    webkitAnimation: "webkitAnimationEnd",
                    animation: "animationend"
                };
            for (e in n)
                if (n.hasOwnProperty(e) && t.style[e] !== undefined) return n[e];
            return null
        }(),
        T = {
            HOME_TITLE: "Yahoo",
            ATT_HOME_TITLE: "att.net",
            FRONTIER_HOME_TITLE: "Frontier Homepage Powered by Yahoo",
            VERIZON_HOME_TITLE: "Verizon Yahoo",
            ROGERS_HOME_TITLE: "Rogers powered by Yahoo",
            SMARTFREN_HOME_TITLE: "Smartfren powered by Yahoo",
            TATADOCOMO_HOME_TITLE: "Tata Photon Yahoo",
            TIKONA_HOME_TITLE: "Tikona Yahoo",
            IDEANETSETTER_HOME_TITLE: "Idea Netsetter Yahoo",
            MTSINDIA_HOME_TITLE: "MTS Yahoo",
            BACK: "Back",
            SHARE: "Share",
            FACEBOOK: "Facebook",
            TUMBLR: "Tumblr",
            TWITTER: "Twitter",
            MAIL: "Mail"
        },
        E = "NO_UUID",
        w = {},
        b = {},
        A = {};

    function C() {
        return m.documentElement && m.documentElement.scrollTop || m.body.scrollTop
    }

    function y() {
        return (new Date).getTime()
    }

    function L(n, i, a, o) {
        e.Global.fire(n, {
            guid: i,
            uuid: a
        }), o && e.Af.Beacon.info(t, {
            code: n,
            guid: i,
            uuid: a
        })
    }

    function k(t, n) {
        var i = n ? {
            queue: n
        } : {};
        e.Af.Event.publish(t, i)
    }

    function N(e, t, n) {
        var i, a, o = [n];
        if (t)
            for (i = t.length - 1; i >= 0; i--)(a = t[i]) && a.guid && a.guid !== n.guid && o.unshift(a);
        return o
    }

    function H(e, t, n) {
        n.nextElementSibling ? e.insertBefore(t, n.nextElementSibling) : e.appendChild(t)
    }

    function S(e) {
        var t;
        return A[e] === undefined && (t = function(e) {
            var t;
            if (!c.Af) return null;
            for (t in c.Af.bootstrap)
                if (c.Af.bootstrap.hasOwnProperty(t) && c.Af.bootstrap[t].applet_type === e) return t;
            return null
        }(e), A[e] = {
            divid: t ? "applet_" + t : e + y(),
            type: e
        }), A[e]
    }

    function x(t) {
        if (a !== t.category) {
            a = t.category;
            var n, i, o, r, s, l = this,
                d = (w[r = a] === undefined && (s = e.Af.Config.get("contextualApplets.mapping")[r] || [], w[r] = e.Array.map(s, S)), w[r]),
                p = e.one(".js-contextual-applet-container"),
                c = [],
                m = [];
            p && (n = p.all(">[data-applet-guid],>[data-applet-name]"), 0 !== d.length ? (e.Array.each(d, function(t) {
                (i = e.one("#" + t.divid)) || (i = e.Node.create('<div id="' + t.divid + '" data-applet-name="' + t.type + '"></div>'), m.push(t)), c.push(i)
            }), (o = p.one("#my-adsFPAD")) && (c.length >= 1 ? c.splice(1, 0, o) : c.push(o)), p.get("children").each(function(e) {
                e.remove(!1)
            }), e.Array.each(c, function(e) {
                e.removeClass("Dn"), p.append(e)
            }), n.each(function(e) {
                c.indexOf(e) < 0 && (e.addClass("Dn"), p.append(e))
            }), e.Array.each(m, function(t) {
                e.Af.Content.remoteApplet(l.app, {
                    type: t.type,
                    params: {},
                    placement: {
                        node: "#" + t.divid,
                        where: "replace"
                    }
                }, function() {})
            })) : n.addClass("Dn"))
        }
    }

    function B(t, a) {
        var s, d, p, u, h, v = this;
        i = e.Af.Utils.i18n("highlander-client/strings"), e.Object.isEmpty(i) && (i = T), p = "//" + c.location.host + "/", u = p.match(g), h = null, u && u.length >= 2 && ["att", "frontier", "verizon", "rogers", "smartfren", "tatadocomo", "tikona", "ideanetsetter", "mtsindia"].indexOf(u[1]) > -1 && (h = u[1].toUpperCase() + "_HOME_TITLE"), (s = h) || (s = "HOME_TITLE"), n = {
            uuid: E,
            list: E,
            url: "/",
            title: i[s] || "Yahoo"
        }, v.bodyEl = e.one("body"), v.app = t, v.config = a && a.viewer || {}, v.viewerAppletGuid = t.viewerGuid, v.pageWrapper = m.getElementsByClassName(o.pageWrapper)[0], v.viewerWrapper = m.getElementsByClassName(o.viewerWrapper)[0], v.innerWrap = v.viewerWrapper && v.viewerWrapper.getElementsByClassName(o.innerWrap)[0], v.visible = m.documentElement.classList.contains(l), v.streamColumn = m.getElementsByClassName("Col1")[0], v.viewerToggled = v.visible, v.isDeepLink = m.documentElement.classList.contains(o.deepLink), v.isVvDeepLink = v.isDeepLink && a && a.vv && e.Highlander.VerticalVideo.isSupported(), v.isVvDeepLink && (v.vvDeepLinkItem = a && a.vvItem), v.isTransitioning = !1, v.frontpagePath = "//" + c.location.host + "/", v.isIos = !!c.navigator.userAgent.match(/iPhone|iPad|iPod/i), v.mode = v.config.highlanderMode || "", v.mobileUH = m.getElementById(v.mode === r ? "Header" : "MobileUH"), v.setupHooks(), v.setupEvents(), v.viewerAnimation = v.config.viewerAnimation || "slide", v.pageAnimation = v.config.pageAnimation || "zoom", v.useAfBeacon = "mega-modal" === v.mode, v.clickinview = !1, "mega-modal" === v.mode && (v.streamColumn = !1), m.getElementsByTagName("body")[0].addEventListener("touchstart", function() {}), v.config.enableVerticalVideo && (v.verticalVideo = new e.Highlander.VerticalVideo({
            nodes: {
                headerControls: v.headerControls,
                innerWrap: v.innerWrap,
                mobileUH: v.mobileUH,
                viewerWrapper: v.viewerWrapper
            }
        }), v.isVvDeepLink ? (v.verticalVideo.toggleVvUi("pre-enable"), v.verticalVideo.toggleVvUi("post-enable")) : (d = e.one("#mobile-uh-wrapper")) && d.removeClass("D-n"))
    }
    B.prototype = {
        visible: !1,
        expandCollapseTimer: null,
        setupHooks: function(t) {
            var a, r, s, d, p = this;
            p.isVvDeepLink || (s = {
                sec: "hl-viewer",
                slk: "close-esc-key",
                elm: "key",
                elmt: "cl",
                itc: 0,
                rspns: "cl",
                t4: "art-full"
            }, (a = i || {}).isIos = p.isIos, a.isDeepLink = p.isDeepLink, a.frontpagePath = p.frontpagePath, this.searchBox = m.getElementById("searchbox-mojit"), m.documentElement.classList.contains("desktop") ? (this.inlineViewer || this.inlineCapable || e.Af.Event.on("content:shown", function() {
                p.getSharebtns()
            }), p.getSharebtns(), p.bodyEl.on("keydown", function(t) {
                var i;
                27 === t.keyCode && p.visible && (i = e.one("#closebtn") || p.app.routes.currentStreamNode.one("." + o.viewerLink), e.Af.rapid.triggerBeaconClickEvent(i, s, null, b), p.app.routes.navigate("click", n.list, n.uuid, n.url, n.title, !0))
            })) : (d = "atomic" === m.documentElement.id ? "highlander-client-templates-viewer-controls-atomic" : "highlander-client-templates-viewer-controls", a.canvassFullScreen = m.documentElement.classList.contains("canvass-full-screen"), dust.render(d, a, function(n, i) {
                if (n) return t && t(n, i);
                var a = e.Af.rapid && e.Lang.isFunction(e.Af.rapid.getRapidTracker) ? e.Af.rapid.getRapidTracker() : null;
                return (r = m.createElement("div")).className = "HeaderControls rapidnofollow", r.id = "HlHeaderBtns", m.documentElement.classList.contains(l) || (r.className += " D(n) D-n"), r.innerHTML = i, p.viewerControlsWrapper = r, p.shareTitleEl = r.getElementsByClassName(o.shareTitle)[0], p.shareTumblrEl = r.getElementsByClassName(o.shareTumblr)[0], p.shareFacebookEl = r.getElementsByClassName(o.shareFacebook)[0], p.shareTwitterEl = r.getElementsByClassName(o.shareTwitter)[0], p.shareMailEl = r.getElementsByClassName(o.shareMail)[0], p.updateShare(), p.headerControls = m.body.appendChild(r), a && a.addModules(r.id), t && t(n, i)
            })))
        },
        setupEvents: function() {
            var t = this,
                n = e.Af.Config.get("contextualApplets.enabled");
            k("content:init", N), k("content:batch", N), k("content:fallbackData", N), k("content:remove", "all"), k("content:show", "last"), k("content:hide"), k("content:navigate"), k("content:pageview"), k("content:updateShareInfo"), e.Af.Event.on("content:navigate", t.updateShare, t), e.Af.Event.on("content:hide", function(e) {
                this.app.hideViewer(e.list, e.uuid)
            }, t), e.Af.Event.on("content:updateShareInfo", t.updateShare, t), t.viewerWrapper && (t.viewerWrapper.addEventListener(f, t.onAnimationEnd.bind(t)), "mega-modal" === t.mode && e.Af.Event.on("content:showcontentcb", function(e) {
                t.clickinview && (t.viewerWrapper.classList.add(s), t.viewerWrapper.classList.add("fx-" + t.viewerAnimation + "in"), t.clickinview = !1)
            }, t)), n && e.Global.on("stream:filter", x, t)
        },
        getSharebtns: function() {
            var e, t, n, i, a, r = this,
                s = m.getElementsByClassName("js-slider-item");
            for (a = s.length - 1; a >= 0; a--) i = "mega-modal" === r.mode && s[a], (n = (t = s[a].getElementsByClassName("ShareBtns")).length > 0 && t[0]) && (r.shareTitleEl = n.getElementsByClassName(o.shareTitle)[0], r.shareTumblrEl = n.getElementsByClassName(o.shareTumblr)[0], r.shareFacebookEl = n.getElementsByClassName(o.shareFacebook)[0], r.shareTwitterEl = n.getElementsByClassName(o.shareTwitter)[0], r.shareMailEl = n.getElementsByClassName(o.shareMail)[0], (e = {
                title: n.getAttribute("data-title") || i && i.getAttribute("data-title"),
                url: n.getAttribute("data-link") || i && i.getAttribute("data-link")
            }).title && e.url ? r.updateShare(e) : r.updateShare())
        },
        updateShare: function(t) {
            var n, i, a, r, s, l, d, p, u, h, v, g, f, T, E, w, b = this,
                A = ".tsrc=fauxdal",
                C = b.config.offnetFauxdal;
            (t ? "object" == typeof t && t.title && t.url ? (a = t.title, i = t.url, d = t.thumbnailUrl, t.shareNode && (b.shareTitleEl = t.shareNode.getElementsByClassName(o.shareTitle)[0], b.shareTumblrEl = t.shareNode.getElementsByClassName(o.shareTumblr)[0], b.shareFacebookEl = t.shareNode.getElementsByClassName(o.shareFacebook)[0], b.shareTwitterEl = t.shareNode.getElementsByClassName(o.shareTwitter)[0], b.shareMailEl = t.shareNode.getElementsByClassName(o.shareMail)[0])) : (n = m.querySelector('[data-uuid="' + t + '"]')) && (a = (l = n.getElementsByClassName(o.contentTitle)[0]) ? l.textContent : "", i = (p = n.getElementsByClassName(o.viewerLink)[0]) ? p.href : "") : (n = m.querySelector("#Reader div[data-id]") || m.querySelector("[data-id]")) && (a = n.getAttribute("data-title"), i = n.getAttribute("data-link")), a) && (a = "string" == typeof(w = a.trim()) ? w.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'") : w, r = encodeURIComponent(a), (s = a.length > 100 ? a.substr(0, 97) + "..." : "") && (s = encodeURIComponent(s)), T = i, i = e.Highlander.Routes.prototype.convertUrl(i), E = new RegExp("^(http|https)://", "i").test(i), i = i && !E ? c.location.protocol + "//" + c.location.hostname + i : T, i = C ? i + "?" + A : i, i = encodeURIComponent(i), d && (d = encodeURIComponent(d)), b.shareTitleEl && (b.shareTitleEl.textContent = a), b.shareTumblrEl && (f = [], u = "https://www.tumblr.com/share/", t && "slideshow" === t.type ? (u += "photo?", f.push("clickthru=" + i), f.push("caption=" + r), f.push("source=" + d)) : (u += "link?", f.push("url=" + i), f.push("name=" + r)), f.push("tsrc=tblr"), u += f.join("&"), b.shareTumblrEl.href = u), b.shareFacebookEl && (h = "https://www.facebook.com/dialog/feed?", (f = []).push("app_id=90376669494"), f.push("link=" + i), f.push("name=" + r), f.push("tsrc=fb"), d && f.push("picture=" + d), h += f.join("&"), b.shareFacebookEl.href = h), b.shareTwitterEl && (v = "https://twitter.com/intent/tweet?", (f = []).push("text=" + (s || r)), f.push("url=" + i), f.push("tsrc=twtr"), v += f.join("&"), b.shareTwitterEl.href = v), b.shareMailEl && (g = "mailto:?", (f = []).push("subject=" + r), f.push("body=" + i), f.push(C ? A : "tsrc=mail"), g += f.join("&"), b.shareMailEl.href = g))
        },
        onAnimationEnd: function(t) {
            var n = this,
                i = n.pageWrapper,
                a = n.viewerWrapper,
                o = n.viewerToggled,
                p = n.searchBox,
                u = n.mobileUH,
                h = n.app.routes.currentStreamNode;
            if (o && t.animationName === n.viewerAnimation + "out") a.classList.remove("fx-" + n.viewerAnimation + "out"), i.classList.remove("fx-" + n.pageAnimation + "in"), m.documentElement.classList.remove(l), p && p.classList.remove("D-n"), a.style.top = "", n.mode === r && window.scrollTo(0, n.scrollTop), n.viewerToggled = 0, e.Af.Event.fire("viewer:hidden"), "mega-modal" === n.mode && (e.one("#Masterwrap").setStyle("top", "auto"), n.disableAdditivePageViews(), window.scrollTo(0, n.scrollTop), n.enableAdditivePageViews()), n.verticalVideo && n.verticalVideo.toggleVvUi("post-disable");
            else if (o || t.animationName !== n.viewerAnimation + "in") {
                if (t.animationName !== n.viewerAnimation + "in" || "undefined" == typeof n.scrollTopNeeded || !0 !== n.scrollTopNeeded) return;
                a.classList.remove("fx-" + n.viewerAnimation + "in"), a.classList.remove(s), n.modalScrollToTop(!1)
            } else n.mode === r && window.scrollTo(0, 1), c.setTimeout(function() {
                m.documentElement.classList.add(d), a.classList.remove("fx-" + n.viewerAnimation + "in"), i.classList.remove("fx-" + n.pageAnimation + "out"), n.streamColumn && (n.streamColumn.style.top = -n.scrollTop + n.streamTopOffset + "px", m.body.scrollTop = m.documentElement.scrollTop = n.config.scrollTopAmount), u && !u.classList.contains("Dn") && n.verticalVideo && h && h.hasAttribute("data-vvid") && n.verticalVideo.toggleVvUi("post-enable"), e.Af.Event.fire("viewer:shown")
            }, 20), n.viewerToggled = 1;
            n.isTransitioning = !1
        },
        expand: function(t, n) {
            var i, a, r, s, l = this,
                d = l.app.routes.currentStreamNode._node;
            l.contentContainer && (l.contentContainer.parentNode.removeChild(l.contentContainer), l.contentContainer = null,
                r && r.detach()), this.updateHeaderHeight(), i = l.app.routes.currentStreamNode.getY() + d.getBoundingClientRect().height / 2 - l.headerHeight, (a = l.app.streamByRow ? m.createElement("ul") : m.createElement("li")).className = "H-0 Ov-h FastTrans " + o.contentContainer, "items" !== l.app.template && (a.className += " Mx-6 Py-10"), (s = Stencil.css.properties.transition) && (a.style[s + "TimingFunction"] = "ease-in"), a.innerHTML = '<div id="' + v + '" class="Ad-Viewer" style="letter-spacing: normal;"></div>', l.app.streamByRow ? (a.innerHTML = "<li>" + a.innerHTML + "</li>", H(d.parentNode.parentNode, a, d.parentNode)) : H(d.parentNode, a, function(e) {
                for (var t = e.getBoundingClientRect().top, n = e; n.nextElementSibling && n.nextElementSibling.getBoundingClientRect().top === t;) n = n.nextElementSibling;
                return n
            }(d)), l.contentContainer = a, c.scrollTo(0, i), r = e.Af.Event.on("content:shown", function(e) {
                var t = a.querySelector("#" + v).offsetHeight + "px";
                l.setupHooks(), a.style.height = t, l.expandCollapseTimer && c.clearTimeout(l.expandCollapseTimer), l.expandCollapseTimer = c.setTimeout(function() {
                    a.classList.remove("FastTrans"), a.style.height = "auto", l.visible = !0, l.isTransitioning = !1, l.expandCollapseTimer = null
                }, 300)
            }), e.Af.Event.fire("content:show", {
                guid: t,
                uuid: n,
                t0: 0,
                t1: 0,
                containerId: v
            })
        },
        collapse: function(e, t) {
            var n, i = this;
            i.app.routes.currentStreamNode && i.app.routes.currentStreamNode.getDOMNode() && (this.updateHeaderHeight(), n = i.app.routes.currentStreamNode.getY() - i.headerHeight, c.scrollTo(0, n), L(h, e, t), i.contentContainer && (i.contentContainer.style.height = i.contentContainer.offsetHeight + "px", c.setTimeout(function() {
                i.contentContainer.classList.add("FastTrans"), i.contentContainer.style.height = "0px", i.contentContainer.classList.remove("Py-10"), i.contentContainer.classList.add("My-0"), i.expandCollapseTimer && c.clearTimeout(i.expandCollapseTimer), i.expandCollapseTimer = c.setTimeout(function() {
                    i.visible = !1, i.isTransitioning = !1, i.expandCollapseTimer = null, i.contentContainer.parentNode.removeChild(i.contentContainer), i.contentContainer = null
                }, 300)
            }, 0)))
        },
        show: function(t, n, i, a, o) {
            var s, d, c = this,
                h = c.pageWrapper,
                v = c.viewerWrapper,
                g = c.viewerControlsWrapper,
                f = c.searchBox,
                T = 0,
                E = 0;
            c.streamColumn && (c.streamTopOffset = m.body.scrollHeight - c.streamColumn.scrollHeight), "mega-modal" !== c.mode || c.visible ? "mega-modal" === c.mode && (c.scrollTopNeeded = !0) : c.modalScrollToTop(!0), "sidekick-smartphone" === t && o && (o.scrollTop = !0), c.visible || c.isTransitioning ? "mega-modal" !== c.mode && c.mode !== r || (v && (c.clickinview = !0), o && (o.sidekick = !0), d = !1, c.verticalVideo && (c.verticalVideo.handleViewerReplace(n), d = c.verticalVideo.isVvInCurrSet(n)), d || (e.Af.Event.fire("viewer:replace", {
                uuid: n
            }), e.Af.Event.fire("content:show", {
                guid: t,
                uuid: n,
                t0: T,
                t1: E,
                numItems: i,
                indexOf: a,
                clusterUuid: c.app.routes.clusterUuid,
                passThruData: o
            }))) : (c.visible = !0, v && h ? (c.isTransitioning = !0, c.updateShare(n), g && (g.classList.remove("D-n"), g.classList.remove("D(n)")), f && f.classList.add("D-n"), c.mode === r && (c.scrollTop = C(), c.pageWrapper.style.top = 53 - c.scrollTop + "px", window.scrollTo(0, 1)), m.documentElement.classList.add(l), m.documentElement.classList.remove(p), c.verticalVideo && m.querySelector('[data-uuid="' + n + '"][data-vvid]') && c.verticalVideo.toggleVvUi("pre-enable"), v.classList.add("fx-" + c.viewerAnimation + "in"), h.classList.add("fx-" + c.pageAnimation + "out"), L(u, t, n, this.useAfBeacon)) : c.viewerAppletGuid && (e.one("div#applet_" + c.viewerAppletGuid).removeClass("D-n"), e.one("div#applet_" + c.viewerAppletGuid).removeClass("D(n)"), L(u, t, n, this.useAfBeacon)), s = c.app.routes && c.app.routes.clusterUuid || "", e.Af.Event.fire("content:show", {
                guid: t,
                uuid: n,
                t0: T,
                t1: E,
                numItems: i,
                indexOf: a,
                clusterUuid: s,
                passThruData: o
            }))
        },
        hide: function(t, n) {
            var i, a = this,
                o = a.pageWrapper,
                s = a.viewerWrapper,
                l = a.viewerControlsWrapper;
            a.visible && !a.isTransitioning && (a.visible = !1, o && s ? (a.isTransitioning = !0, a.streamColumn && (a.streamColumn.style.top = 0), a.mode === r && (i = m.body.scrollTop = m.documentElement.scrollTop, s.style.top = 53 - i + "px"), m.documentElement.classList.remove(d), m.documentElement.classList.add(p), l && (l.classList.add("D-n"), l.classList.add("D(n)")), o.classList.add("fx-" + a.pageAnimation + "in"), s.classList.add("fx-" + a.viewerAnimation + "out"), "mega-modal" === a.mode && L("modal:close", t, n), setTimeout(function() {
                L(h, t, n)
            }, 20)) : a.viewerAppletGuid && (e.one("div#applet_" + a.viewerAppletGuid).addClass("D-n"), e.one("div#applet_" + a.viewerAppletGuid).addClass("D(n)"), L(h, t, n)), a.streamColumn && (m.body.scrollTop = m.documentElement.scrollTop = a.scrollTop), a.verticalVideo && a.verticalVideo.toggleVvUi("pre-disable"), e.Global.fire("hlads:fp", {
                spaceid: a.app.tracking.appSpaceId || 0
            }))
        },
        modalScrollToTop: function(t) {
            var n = this,
                i = C(),
                a = e.one("#Masterwrap"),
                o = a.get("offsetTop");
            i -= o, a.setStyle("top", -i), t && (n.scrollTop = i + o), n.disableAdditivePageViews(), m.body.scrollTop = m.documentElement.scrollTop = n.config.scrollTopAmount, n.enableAdditivePageViews()
        },
        disableAdditivePageViews: function() {
            var t = e.Af.rapid && e.Lang.isFunction(e.Af.rapid.getRapidTracker) ? e.Af.rapid.getRapidTracker() : null;
            t && t.clearRapidAttribute(["apv"])
        },
        enableAdditivePageViews: function() {
            var t = e.Af.rapid && e.Lang.isFunction(e.Af.rapid.getRapidTracker) ? e.Af.rapid.getRapidTracker() : null;
            c.setTimeout(function() {
                t && t.setRapidAttribute({
                    apv: 1
                })
            }, 150)
        },
        updateHeaderHeight: function() {
            var e;
            this.headerHeight === undefined && (e = m.querySelector(this.app.stickerTarget), this.headerHeight = e && e.offsetHeight || 0)
        }
    }, e.namespace("Highlander").Viewer = B
}, "@VERSION@", {
    langBundles: ["strings"],
    requires: ["event-custom-base", "event-tap", "af-beacon", "af-bootstrap", "af-config", "af-content", "af-rapid", "af-event", "af-utils", "highlander-client-templates-viewer-controls", "highlander-client-templates-viewer-controls-atomic", "highlander-routes", "highlander-vertical-video", "stencil"]
});
YUI.add("mjata-json", function(t, e) {
    "use strict";
    var i = t.Lang,
        n = i.isString,
        r = i.isArray,
        a = i.isObject;

    function c() {}
    c.prototype = {
        toJSON: function(e) {
            var c, o;
            return r(e) ? c = e : n(e) && (c = [e]), delete(o = this.getAttrs(c)).clientId, delete o.destroyed, delete o.initialized, "id" !== this.idAttribute && delete o.id,
                function d(e) {
                    var c;
                    return e ? i.isFunction(e.toJSON) ? e.toJSON() : r(e) ? (c = [], t.Array.each(e, function(t) {
                        c.push(d(t))
                    }), c) : a(e) ? (c = {}, t.Object.each(e, function(t, e) {
                        n(e) && (c[e] = d(t))
                    }), c) : e : e
                }(o)
        }
    }, t.namespace("Mjata").JSON = c
}, "@VERSION@");
YUI.add("mjata-model-base", function(e) {
    "use strict";
    var a = e.Lang,
        t = e.Mjata,
        r = t.ModelStore,
        i = a.isFunction,
        s = a.isString;
    e.namespace("Mjata").ModelBase = {
        createModelClass: function(a, t, l, o, n, d) {
            if (!a || !s(a)) throw "invalid name";
            if (!i(l)) throw "invalid main";
            d = d || {};
            var M = e.Base.create(a, l, o, n, d);
            return r.register(M), M
        },
        createModelListClass: function(a, t, l, o, n, d, M) {
            if (!a || !s(a)) throw "invalid name";
            if (!i(l)) throw "invalid main";
            if (!i(o)) throw "invalid modelClass";
            var m = e.merge({
                    model: o
                }, d),
                c = e.merge(M, {
                    NAME: a
                }),
                u = e.Base.create(a, l, n, m, c);
            return r.register(u), u
        }
    }, e.Mjata.createModelClass = function(e, a, r, i, s) {
        return t.ModelBase.createModelClass(e, "", a || t.Model, r || [], i || {}, s || {})
    }, e.Mjata.createModelListClass = function(e, a, r, i, s, l) {
        return t.ModelBase.createModelListClass(e, "", a || t.ModelList, r || t.Model, i || [], s || {}, l || {})
    }
}, "@VERSION@", {
    requires: ["base", "mjata-model", "mjata-modellist", "mjata-model-store"]
});
YUI.add("mjata-model-store", function(e, t) {
    "use strict";
    var r, n = "alias",
        i = "id",
        a = !0,
        s = !1,
        o = null,
        c = e.config.win;

    function u(e) {
        return e && e.name && e.id
    }

    function d(e) {
        return e && r.items && r.items[e.name] || o
    }

    function l(e) {
        var t, r = d(e);
        return r && r._constructor && (t = e[r._constructor.prototype.idAttribute || i] || e.id) && r.instances && r.instances[t] || o
    }

    function f(e) {
        return e ? {
            name: e.constructor.NAME,
            id: e.get(i) || e.idAttribute && e.get(e.idAttribute)
        } : o
    }
    c.Mjata = c.Mjata || {}, r = c.Mjata.ModelStore = c.Mjata.ModelStore || {
        items: {},
        aliases: {}
    }, e.namespace("Mjata").ModelStore = {
        register: function(t) {
            if (!e.Lang.isFunction(t) || !t.NAME) return s;
            var n = t.NAME;
            return r.items[n] ? s : (r.items[n] = {
                _constructor: t,
                instances: {}
            }, a)
        },
        alias: function(t, i, c) {
            if (!t || !i) return s;
            c = e.merge({
                replace: a,
                remove: s
            }, c);
            var u = this,
                d = u.getByAlias(t);
            return d === i ? a : d && !c.replace ? s : (d && c.replace && u.unalias(t, {
                remove: c.remove,
                silent: a
            }), u.add(i, c) ? (r.aliases[t] = i, i.onceAfter("destroy", function() {
                u.unalias(t)
            }), c.silent || u.fire(n, {
                alias: t,
                prevInstance: d ? f(d) : o,
                newInstance: f(i)
            }), a) : s)
        },
        unalias: function(t, i) {
            if (!t) return s;
            var c = r.aliases,
                u = c[t];
            return u ? ((i = e.merge({
                remove: a,
                silent: s
            }, i)).remove && this.remove(u), delete c[t], i.silent || this.fire(n, {
                alias: t,
                prevInstance: f(u),
                newInstance: o
            }), a) : s
        },
        getByAlias: function(e) {
            return e && r.aliases[e] || o
        },
        promiseAlias: function(t) {
            var r = this;
            return new e.Promise(function(e, i) {
                if (!t) return i("invalid alias");
                var a = r.getByAlias(t);
                if (a) return e(a);
                r.on(n, function(r) {
                    r.alias === t && (a = l(r.newInstance)) && e(a)
                })
            })
        },
        get: function(t, r, n) {
            if (!u(t)) return o;
            n = e.merge({
                create: a
            }, n);
            var s, c, l = d(t);
            return l && l._constructor && (s = t[l._constructor.prototype.idAttribute || i] || t.id) ? (r = e.merge(r, {
                id: s
            }), (c = l.instances) && c[s] ? (c[s].setAttrs(r), c[s]) : n.create ? this.create(t, r, {
                add: a
            }) : o) : o
        },
        create: function(t, r, n) {
            if (!u(t)) return o;
            n = e.merge({
                add: a,
                replace: a
            }, n);
            var s, c, l = d(t);
            return l && l._constructor && (s = t[l._constructor.prototype.idAttribute || i] || t.id) ? (r = e.merge(r, {
                id: s
            }), c = new l._constructor(r), n.add && this.add(c, {
                replace: n.replace
            }), c) : o
        },
        add: function(t, r) {
            if (!t) return s;
            r = e.merge({
                replace: s
            }, r);
            var n, o, c = f(t),
                u = l(c);
            if (u && u === t) return a;
            if (u && !r.replace) return s;
            if (!(n = d(c))) {
                if (!this.register(t.constructor)) return s;
                n = d(c)
            }
            return n.instances[c.id] = t, t.onceAfter("destroy", e.bind(function() {
                this.remove(t)
            }, this)), t.addTarget(this), o = n._constructor.prototype.idAttribute || i, t.after(o + "Change", function(e) {
                var t = e.target,
                    r = d(f(t));
                r && (r.instances[e.newVal] = t, delete r.instances[e.prevVal])
            }), a
        },
        remove: function(t, r) {
            if (!t) return s;
            r = e.merge({
                destroy: s
            }, r);
            var n = f(t),
                i = d(n),
                o = i && i.instances,
                c = n && n.id;
            return o && o[c] === t ? (t.removeTarget(this), r.destroy && t.destroy(), delete o[c], a) : s
        }
    }, e.augment(e.Mjata.ModelStore, e.EventTarget, a, null, {
        emitFacade: a,
        prefix: "ModelStore"
    }), e.Mjata.ModelStore.publish(n, {
        preventable: s
    })
}, "@VERSION@", {
    requires: ["event-custom", "promise"]
});
YUI.add("mjata-model", function(a) {
    "use strict";
    var e = "MjataModel";
    a.namespace("Mjata").Model = a.Base.create(e, a.Model, [a.Mjata.JSON], {}, {
        NAME: e
    }), a.Mjata.ModelStore.register(a.Mjata.Model)
}, "@VERSION@", {
    requires: ["model", "mjata-json", "mjata-model-store"]
});
YUI.add("mjata-modellist", function(e) {
    "use strict";
    var t, a, s = e.Mjata,
        r = "MjataModelList",
        i = YUI.namespace("Env.ModelList"),
        l = e.Lang;
    t = {
        _shareModelInstance: !0,
        idAttribute: "id",
        initializer: function(e) {
            e && !l.isUndefined(e.shareModelInstance) && (this._shareModelInstance = e.shareModelInstance)
        },
        clear: function(e) {
            this.reset(this, e)
        },
        _createModelObj: function(e) {
            var t, a, r;
            if (!e._isYUIModel) {
                if (r = e[a = this.model.prototype.idAttribute || "id"] || e.id, (t = {
                        name: this.model.NAME,
                        id: r
                    })[a] = r, this._shareModelInstance) return (e = s.ModelStore.get(t, e, {
                    create: !0
                })).changed = {}, e;
                (e = new this.model(e)).changed = {}
            }
            return e
        },
        create: function(e, t, a) {
            var r = s.ModelList.superclass.create;
            return this._shareModelInstance && e && !e._isYUIModel ? r.call(this, this._createModelObj(e), t, a) : r.apply(this, arguments)
        },
        add: function(t, a) {
            var r, i = this,
                n = s.ModelList.superclass.add;
            return !i._shareModelInstance || !t || t._isYUIModelList || t._isYUIModel ? n.apply(i, arguments) : l.isArray(t) ? (r = e.Array.map(t, function(e) {
                return i._createModelObj(e)
            }), n.call(i, r, a)) : n.call(i, i._createModelObj(t), a)
        },
        reset: function(t, a) {
            var r, i = this,
                n = s.ModelList.superclass.reset;
            return !i._shareModelInstance || !t || t._isYUIModelList || t._isYUIModel ? n.apply(i, arguments) : l.isArray(t) ? (r = e.Array.map(t, function(e) {
                return i._createModelObj(e)
            }), n.call(i, r, a)) : n.call(i, i._createModelObj(t), a)
        },
        _generateClientId: function() {
            return l.isUndefined(i.lastId) && (i.lastId = 0), this.constructor.NAME + "_" + (i.lastId += 1)
        }
    }, a = {
        NAME: r,
        ATTRS: {
            clientId: {
                valueFn: "_generateClientId",
                readOnly: !0
            },
            id: {
                value: null
            }
        }
    }, e.namespace("Mjata").ModelList = e.Base.create(r, e.ModelList, [], t, a), s.ModelStore.register(s.ModelList)
}, "@VERSION@", {
    requires: ["model-list", "mjata-model-store"]
});
YUI.add("mjata-queue", function(e) {
    "use strict";
    var t = {
        wait: 20
    };

    function i(i, a, n, r) {
        var u = this;
        u.id = i, u.config = e.merge(t, a), u._sweep = n, u._cb = r, u._items = []
    }
    i.prototype = {
        push: function(t) {
            var i = this;
            return t ? i.config.wait <= 0 ? (i._cb(t), i._items = [], i) : (i._items.push(t), i._timer || (i._timer = setTimeout(function() {
                var t = i._items;
                i._items = [], clearTimeout(i._timer), i._timer = null, t = i._sweep(t), e.Array.each(t, function(e) {
                    i._cb(e)
                })
            }, i.config.wait)), i) : i
        }
    }, e.namespace("Mjata").Queue = i
}, "@VERSION@");
YUI.add("mjata-rest-http", function(t) {
    "use strict";
    var e = {
            timeout: 3e3,
            retry: {
                interval: 200,
                max_retries: 2
            },
            cors: !1
        },
        r = "Content-Type",
        s = "application/json",
        n = "timeout",
        o = "GET",
        a = "PUT",
        i = "POST",
        u = "DELETE",
        c = null,
        m = t.Lang,
        y = m.isNumber;

    function l(p, f, x, T, d, v) {
        var _, E, j, w, C, I, R, g, h, A, L, O;
        j = d, R = {
            timeout: e.timeout,
            unsafeAllowRetry: j.unsafeAllowRetry || !1,
            retry: {
                interval: e.retry.interval,
                max_retries: e.retry.max_retries
            },
            cors: e.cors
        }, j && (w = parseInt(j.timeout, 10), y(w) && w > 0 && (R.timeout = w), j.retry && (C = parseInt(j.retry && j.retry.interval, 10), y(C) && C > 0 && (R.retry.interval = C), I = parseInt(j.retry && j.retry.max_retries, 10), y(I) && I >= 0 && (R.retry.max_retries = I)), j.tmp && (R.tmp = j.tmp), j.cors && (R.cors = j.cors)), d = R, g = x, A = {}, L = (h = p) === a || h === i, t.Object.each(g, function(t, e) {
            "content-type" === e.toLowerCase() ? L && (A[r] = t) : A[e] = t
        }), L && !A[r] && (A[r] = s), x = A, d.tmp = d.tmp || {
            retry_counter: 0
        }, E = d.timeout, _ = {
            method: p,
            timeout: E,
            headers: x,
            on: {
                success: function(t, e) {
                    v(c, e)
                },
                failure: function(e, r) {
                    var s, i, m, y, _, j, w;
                    0 === (s = (s = r) || {
                        status: 999,
                        statusText: "null response"
                    }).status && s.statusText === n && (s.status = 408, s.timeoutBy = "client"), _ = p, j = d, w = (r = s).status, _ !== o && _ !== a && _ !== u && !j.unsafeAllowRetry || 408 !== w && 999 !== w || j.tmp.retry_counter >= j.retry.max_retries || (j.tmp.retry_counter++, j.retry.interval = 2 * j.retry.interval, 0) ? v((m = E, 408 === (y = {
                        statusCode: (i = r).status,
                        statusText: i.statusText,
                        responseText: i.responseText
                    }).statusCode && (y.timeoutBy = i.timeoutBy || "", y.timeout = m || ""), y)) : t.later(d.retry.interval, c, function() {
                        l(p, f, x, T, d, v)
                    })
                }
            }
        }, d.cors && (_.xdr = {
            use: "native",
            credentials: !0
        }), T !== undefined && T !== c && (_.data = (O = x)[r] && t.Array.some(O[r].split(";"), function(t) {
            return m.trim(t).toLowerCase() === s
        }) ? t.JSON.stringify(T) : T), t.io(f, _)
    }
    t.namespace("Mjata.REST").HTTP = {
        get: function(t, e, r, s) {
            l(o, t, e, c, r, s)
        },
        put: function(t, e, r, s, n) {
            l(a, t, e, r, s, n)
        },
        post: function(t, e, r, s, n) {
            l(i, t, e, r, s, n)
        },
        del: function(t, e, r, s) {
            l(u, t, e, c, r, s)
        }
    }
}, "@VERSION@", {
    requires: ["json-stringify", "io-base", "io-xdr"]
});
YUI.add("mjata-store", function(n) {
    "use strict";
    var t = " not implemented",
        e = n.Lang.isFunction;
    n.namespace("Mjata").Store = {
        name: "Store.Base",
        create: function(n, t, e, a, i) {
            this._sync(n, "create", t, e, a, i)
        },
        read: function(n, t, e, a) {
            this._sync(n, "read", t, undefined, e, a)
        },
        update: function(n, t, e, a, i) {
            this._sync(n, "update", t, e, a, i)
        },
        del: function(n, t, e, a) {
            this._sync(n, "delete", t, undefined, e, a)
        },
        _sync: function(t, a, i, c, u, o) {
            e(u) && (o = u, u = {});
            var r = this,
                s = {
                    resource: t,
                    operation: a,
                    params: i,
                    body: c,
                    context: u = u || {},
                    callback: o
                };
            !e(this.batch) || u.config && !1 === u.config.consolidate ? r.single(s) : (r._q || (r._q = new n.Mjata.Queue(r.name, {}, function(n) {
                return r.batch(n)
            }, function(t) {
                t && (n.Lang.isArray(t) ? r.multi(t) : r.single(t))
            })), r._q.push(s))
        },
        single: function() {
            throw "single()" + t
        },
        multi: function() {
            throw "multi()" + t
        },
        batch: function(n) {
            return n
        }
    }, n.Mjata.createStore = function(t, e, a) {
        if (!t) throw "Invalid name";
        return n.merge(n.Mjata.Store, a, {
            name: t
        })
    }
}, "@VERSION@", {
    requires: ["mjata-queue", "mjata-util"]
});
YUI.add("mjata-util", function(t) {
    "use strict";
    var r = t.Lang,
        n = t.Object,
        e = r.trim;
    t.namespace("Mjata").Util = {
        objEqual: function(e, i) {
            var u, a;
            if (e === i) return !0;
            if (typeof e != typeof i) return !1;
            if (r.isObject(e)) return n.size(e) === n.size(i) && !n.some(e, function(r, n) {
                return !t.Mjata.Util.objEqual(e[n], i[n])
            });
            if (r.isArray(e)) {
                if (e.length !== i.length) return !1;
                for (u = 0, a = e.length; u < a; u++)
                    if (!t.Mjata.Util.objEqual(e[u], i[u])) return !1;
                return !0
            }
            return !1
        },
        objGet: function(t, e, i) {
            r.isString(e) && (e = "" === (e = r.trim(e)) ? [] : e.split("."));
            var u = n.getValue(t, e);
            return u === undefined ? i : u
        },
        objMerge: function() {
            var n, e = Array.prototype.slice.call(arguments),
                i = {};
            for (n = 0; n < e.length; n++) r.isObject(e[n]) && !r.isArray(e[n]) && t.mix(i, t.clone(e[n]), !0, undefined, 0, !0);
            return i
        },
        objSet: function(t, n, e) {
            if (r.isString(n) && (n = "" === (n = r.trim(n)) ? [] : n.split(".")), !r.isArray(n) || 0 === n.length) return undefined;
            var i, u = n.length,
                a = t;
            for (i = 0; i < u; i++) i === u - 1 ? a[n[i]] = e : (r.isUndefined(a[n[i]]) && (a[n[i]] = {}), a = a[n[i]]);
            return t
        },
        strParseKV: function(r, n, i) {
            var u = {};
            return r = r || "", n = n || ";", i = i || ":", t.Array.each(r.split(n), function(t) {
                if (t.length > 0) {
                    var r = t.indexOf(i),
                        n = e(t.substring(0, r)),
                        a = e(t.substring(r + 1));
                    n && (u[n] = a)
                }
            }), u
        }
    }
}, "@VERSION@");
YUI.add("stencil-base", function(e, t) {
    "use strict";
    var n, i, r, s, o, a, u, l, c, d, g, f = ["click"],
        h = "delayed-mouseleave",
        p = e.config.doc,
        v = e.one(p.documentElement),
        E = e.one(window),
        m = e.one(p.body),
        b = null,
        y = "[data-plugin]",
        N = [],
        T = 0,
        S = b,
        L = [],
        w = window.navigator.pointerEnabled || window.navigator.msPointerEnabled;
    e.Node.DOM_EVENTS && (e.Node.DOM_EVENTS = e.merge(e.Node.DOM_EVENTS, {
        transitionend: 1,
        webkitTransitionEnd: 1,
        oTransitionEnd: 1,
        otransitionend: 1,
        pointerover: 1,
        pointerout: 1,
        pointerenter: 1,
        pointerleave: 1
    })), E.after("scroll", function() {
        clearTimeout(d), d = setTimeout(r, 100)
    }), r = function() {
        (p.documentElement && p.documentElement.scrollTop || p.body.scrollTop) > 2 ? v.addClass("has-scrolled") : v.removeClass("has-scrolled")
    }, g = function() {
        if (v.hasClass("stencil-no-touch")) {
            var t, n = e.Node.create('<div id="MouseoverMask" class="End-0 Start-0 T-0 B-0"></div>'),
                i = !1,
                r = function() {
                    clearTimeout(t), i || (i = !0, v.addClass("Scrolling")), t = setTimeout(function() {
                        i = !1, v.removeClass("Scrolling")
                    }, 350)
                };
            n.appendTo(p.body), window.addEventListener ? window.addEventListener("scroll", r, !1) : window.attachEvent && window.attachEvent("scroll", r)
        }
    }, i = function(e, t) {
        var n, i, r, s, o = [e];
        for (0 === e.indexOf("MSPointer") ? (i = e.substr(9).toLowerCase(), o.push("pointer" + i, "mouse" + i)) : 0 === e.indexOf("pointer") ? (i = e.substr(7), o.push("mouse" + i)) : 0 === e.indexOf("mouse") && (i = e.substr(5), o.push("pointer" + i)), o.push("default"), r = 0, s = o.length; r < s && !(n = t[o[r]]); r += 1);
        return n
    }, n = function(t, n) {
        var r, o, a, u, l, c, d, g, f = n.NS,
            p = t.currentTarget,
            v = t.type;
        if (p[f] || p.plug(n), (r = p[f]).shouldHandleEvent(t))
            if (r.handleEvent) r.handleEvent(t);
            else if (l = p.getData(n.PLUGIN_NAME))
            for ("string" == typeof l && (l = e.JSON.parse(l)), l.length || (l = [l]), c = 0, d = l.length; c < d; c += 1) g = b, a = l[c], u = r.getTargets(a, p), (o = i(v, a)) && (o.preventDefault && t.preventDefault(), "mouseleave" !== v && "pointerleave" !== v && "MSPointerLeave" !== v || (g = a["mouseleave-delay"] === undefined ? n.MOUSELEAVE_DELAY : a["mouseleave-delay"]), "number" == typeof g ? (u.setData(h, !0), e.later(g, r, s, [u, o, t])) : ("mouseenter" !== v && "pointerenter" !== v && "MSPointerEnter" !== v || u.clearData(h), r.execute(u, o, t)));
        else r.execute(b, b, t)
    }, s = function(t, n, i) {
        e.Array.indexOf(t.getData(h), !0) >= 0 && (t.clearData(h), this.execute(t, n, i))
    }, o = function(t, n, i) {
        var r, s = Array.prototype.slice.call(arguments, 2),
            o = t.NS;
        return this.getNodeList(i).plug(t).each(function(t) {
            s[0] = e.Stencil.getNodeList(s[0]), t[o][n] ? t[o][n].apply(t[o], s) : t[o].execute && ((r = {})[n] = s[1], s[1] = r, t[o].execute.apply(t[o], s))
        })
    }, a = function(t) {
        var n;
        return t || (t = p.body), n = (t = e.one(t)).all(y), t.test(y) && n.push(t), n
    }, u = function(t, n, i, r) {
        var s = n.getDOMNode(),
            o = t.target || t.srcElement;
        if (s !== o && !s.contains(o) && ("DIV" !== o.tagName || o.attributes.tabIndex !== undefined))
            if (r) r.call(this, e.Stencil.getNodeList(n));
            else try {
                i.focus()
            } catch (a) {}
    }, e.Stencil = {
        Plugins: {},
        Hosts: {},
        initPlugin: function(e, t) {
            return this.initAll(t, [e])
        },
        initPlugins: function(t, n) {
            var i, r, s, o;
            if (e.Lang.isArray(n) && 0 !== n.length) {
                for (i = [], r = 0, s = n.length; r < s; r += 1) o = "string" == typeof n[r] ? n[r] : n[r].PLUGIN_NAME, i.push(o);
                this.initAll(t, i)
            }
        },
        initAll: function(t, n) {
            var i, r, s, o, u, l, c, d, g, f, h = {},
                v = /\s+/;
            if (t || (t = p.body), t = e.one(t), e.Lang.isArray(n)) {
                if (0 === n.length) return;
                for (f = {}, s = 0, o = n.length; s < o; s += 1) f[n[s]] = 1;
                n = f
            } else n = undefined;
            for (s = 0, o = (i = a(t)).size(); s < o; s += 1)
                for (l = 0, c = (u = (r = i.item(s)).getAttribute("data-plugin").trim().split(v)).length; l < c; l += 1) d = u[l], (n === undefined || n[d]) && ((g = this.Plugins[d]) ? (g.requiresInit || r.hasAttribute("data-trigger")) && setTimeout(e.bind(r.plug, r, g), 0) : h["stencil-" + d] = 1);
            if (N.length > 0)
                for (s = 0, o = N.length; s < o; s += 1) d = N[s], (n === undefined || n[d]) && (g = this.Plugins[d], t.unplug(g).plug(g));
            (h = e.Object.keys(h)).length > 0 && e.use(h)
        },
        registerPlugin: function(t, i) {
            var r, s, a, u, l, c, d = i.toLowerCase();
            if (!this.Plugins[d]) {
                if (t.PLUGIN_NAME || (t.PLUGIN_NAME = d), t.defaultTriggerEvents || (t.defaultTriggerEvents = f), this.Plugins[d] = t, l = "stencil-plugin-" + d, !v.hasClass(l)) {
                    for (u = function(e, t, n) {
                            return !!new RegExp("\\b" + n.PLUGIN_NAME + "\\b").test(e.getAttribute("data-plugin")) && e
                        }, r = 0, s = (c = t.prototype.getDefaultTriggerEvents()).length; r < s; r += 1) a = c[r], e.delegate(l + "|" + a, n, v, u, this, t);
                    v.addClass(l)
                }
                return this[i] = e.bind(o, this, t), t.initOnRootOnly && N.push(d), T && (L.push(d), S || (S = e.later(0, this, function() {
                    this.initAll(m, L), L = [], S = b
                }))), !0
            }
            return !1
        },
        getNodeList: function(t) {
            return "string" == typeof t ? e.all(t) : t instanceof e.NodeList ? t : new e.NodeList(t)
        }
    }, e.Stencil.BasePlugin = function(t) {
        var i, r, s, o, a, u, l = t.host,
            c = this.constructor;
        for (this.host = l, this._node = l, this._superclass = this.constructor.superclass, a = "stencil-" + c.PLUGIN_NAME, i = this.getTriggerEvents(), u = this.getDefaultTriggerEvents(), s = 0, o = i.length; s < o; s += 1) r = i[s], -1 === e.Array.indexOf(u, r) && l.on(a + "|" + r, n, this, c)
    }, e.Stencil.BasePlugin.prototype = {
        destroy: function() {
            this.host = b, this._node = b
        },
        execute: function(e, t, n) {
            var i;
            if (t)
                if ("string" == typeof t) this[t] && this[t](e, {}, n);
                else
                    for (i in t) t.hasOwnProperty(i) && this[i] && this[i](e, t[i], n)
        },
        normalizeEvents: function(e) {
            var t, n, i, r, s, o, a, u = [];
            if (w)
                for (r = /^(?:mouse|pointer)(\w)(\w+)/, s = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled, o = s ? "MSPointer" : "pointer", i = function(e, t, n) {
                        var i = t + n;
                        return !s || "leave" !== i && "enter" !== i ? o + (s ? t.toUpperCase() : t) + n : "mouse" + i
                    }, t = 0, n = e.length; t < n; t += 1) a = e[t], u.push(a.replace(r, i));
            else if (Modernizr.touch)
                for (t = 0, n = e.length; t < n; t += 1) "mouse" !== (a = e[t]).substr(0, 5) && u.push(a);
            else u = e;
            return u
        },
        getDefaultTriggerEvents: function() {
            return this.normalizeEvents(this.constructor.defaultTriggerEvents)
        },
        getTriggerEvents: function() {
            var e = this._node.getData("trigger");
            return e ? "string" == typeof e && (e = this.normalizeEvents(e.split(" ")), this._node.setData("trigger", e)) : e = this.getDefaultTriggerEvents(), e
        },
        getTargets: function(t, n) {
            var i, r = new e.NodeList;
            return n || (n = this._node), t || (t = {}), t.target && (r = r.concat(e.all(t.target)), i = !0), t["target-child"] && (r = r.concat(n.all(t["target-child"])), i = !0), t["target-ancestor"] && (r = r.concat(n.ancestor(t["target-ancestor"], !0)), i = !0), t["target-sibling"] && (r = r.concat(n.get("parentNode").all(t["target-sibling"])), i = !0),
                n.getAttribute("data-target") && (r = r.concat(e.all(n.getAttribute("data-target"))), i = !0), 0 !== r.size() || i || (r = r.concat(n)), r
        },
        shouldHandleEvent: function(t) {
            var n = this.constructor.NS,
                i = t.type,
                r = t._event.pointerType !== undefined,
                s = "click" === t.type || "dblclick" === t.type,
                o = r && (t._event.pointerType === t._event.MSPOINTER_TYPE_MOUSE || "mouse" === t._event.pointerType);
            return e.Array.indexOf(this._node[n].getTriggerEvents(), i) > -1 && (!r || r && s || r && o)
        },
        processSources: function(t, n) {
            return e.Stencil.Source ? (e.Stencil.getNodeList(t).each(function(t) {
                var i;
                t.hasAttribute("data-source-plugin") && (i = e.Stencil.Plugins.source, t.plug(i), t[i.NS].execute(e.Stencil.getNodeList(t), n))
            }), this) : this
        },
        focus: function(t, n, i, r) {
            var s, o, a, d, g, f = [];
            if (t && "BODY" !== (t = e.one(t)).get("tagName")) {
                n = n ? e.one(n) : t, r = void 0 === r || r, l = c ? this.releaseFocus(c) : document.activeElement;
                try {
                    n.focus()
                } catch (h) {}
                return r && (s = e.rbind(u, this, t, n, i), o = !1, a = setTimeout(e.bind(function() {
                    p.addEventListener ? p.addEventListener("focus", s, !0) : p.attachEvent && p.attachEvent("onfocusin", s), o = !0
                }, this), 0), f.push(function() {
                    o ? p.removeEventListener ? p.removeEventListener("focus", s, !0) : p.detachEvent && p.detachEvent("onfocusin", s) : clearTimeout(a)
                })), i && (d = e.one(p.body).on("click", function(n) {
                    t.contains(n.target) || this._node.compareTo(n.target) || this._node.contains(n.target) || i.call(this, e.Stencil.getNodeList(t))
                }, this), g = e.one(p).on("keydown", function(n) {
                    27 === n.keyCode && i.call(this, e.Stencil.getNodeList(t))
                }, this), f.push(function() {
                    d.detach(), g.detach()
                })), t.setData("focus-mgmt-unsubscribers", f), c = t, n
            }
        },
        releaseFocus: function(e) {
            var t, n;
            if (e !== c) return l;
            if (t = e.getData("focus-mgmt-unsubscribers")) {
                for (n = 0; n < t.length; n += 1) t[n].call();
                if (e.setData("focus-mgmt-unsubscribers", b), l && "HTML" !== l.tagName && "BODY" !== l.tagName) try {
                    l.focus()
                } catch (i) {}
                c = b
            }
            return l
        }
    }, e.on("domready", function() {
        T = 1, r(), g(), e.Stencil.initAll()
    }, this)
}, "@VERSION@", {
    requires: ["stencil", "yui-base", "event-base", "event-delegate", "event-mouseenter", "json-parse", "dom-base", "node-base", "node-pluginhost", "selector"]
});
YUI.add("stencil-fx", function(t, e) {
    "use strict";
    var i;

    function s(t) {
        this.constructor.superclass.constructor.call(this, t)
    }(i = function() {}).prototype = {
        getActiveClass: function() {
            return this.constructor.NS + "-active"
        },
        transition: function(e, i) {
            (e = t.Stencil.getNodeList(e)).each(function(e) {
                e.addClass(this.getActiveClass()).publish("fx:start", {
                    emitFacade: !0
                }), e.fire("fx:start", {
                    fx: this.constructor.NS,
                    fxTarget: e
                }), Stencil.css.transitioned(e, t.bind(function(t) {
                    this.transitionDone(t)
                }, this)), i(e)
            }, this)
        },
        transitionDone: function(e) {
            e.get("id");
            e.removeClass(this.getActiveClass()).publish("fx:done", {
                emitFacade: !0
            }), e.fire("fx:done", {
                fx: this.constructor.NS,
                fxTarget: e
            }), t.publish("fx:done", {
                emitFacade: !0
            }), t.fire("fx:done", {
                fx: this.constructor.NS,
                fxTarget: e
            })
        }
    }, t.Stencil.BaseFx = i, t.extend(s, t.Stencil.BasePlugin, {
        execute: function(e, i) {
            var s, n, c, o = [];
            if (!(s = (i = i || {}).fx)) return this;
            for (n = 0, c = (s = s.split(" ")).length; n < c; n += 1) o.push("stencil-fx-" + s[n]);
            t.use(o, function(t) {
                var n, c, o, r, a;
                for (r = 0, a = s.length; r < a; r += 1)
                    if (c = s[r], o = t.Stencil.Hosts.Fx[c]) {
                        if (0 === (e = e.filter(":not(." + c + "-active)")).size()) return this;
                        for (n in i) i.hasOwnProperty(n) && "fx" !== n && o[n](e, i[n])
                    }
            })
        }
    }, {
        NS: "StencilFx"
    }), t.Stencil.registerPlugin(s, "Fx"), t.Stencil.Hosts.Fx = t.augment({}, t.Plugin.Host, !1, null)
}, "@VERSION@", {
    requires: ["stencil-base", "yui-base", "dom-base", "node-base", "pluginhost", "event-custom", "selector-css3"]
});
YUI.add("stencil-sticker", function(t, e) {
    "use strict";
    if (!(t.UA.ios && t.UA.ios < 5 || t.UA.android && t.UA.android < 3 || t.UA.silk || t.UA.userAgent.match(/Silk/) || t.UA.ie && t.UA.ie < 7)) {
        var s, r, i, o, n, c, a, l, d, k = "bottom",
            p = "Sticky",
            g = "Sticky-off",
            _ = "Sticky-on",
            u = t.config.doc,
            f = !1,
            h = t.one("html"),
            m = Modernizr,
            y = "marginTop",
            S = "none",
            v = "offsetHeight",
            A = "px",
            C = "resize",
            b = "scroll",
            H = "top",
            U = "translate3d(0,0,0)",
            M = t.config.win,
            D = 0,
            P = 0,
            E = 0,
            Y = f,
            I = parseInt(t.one("body").getComputedStyle("minWidth"), 10) || 1150,
            N = [],
            T = null;
        a = function(e) {
            var s;
            if ((D = t.DOM.docScrollY()) !== P || !e) {
                for (T = t.DOM.viewportRegion(), s = N.length - 1; s >= 0; s -= 1) N[s].getDOMNode() ? l(N[s], e) : N.splice(s, 1);
                P = D
            }
        }, l = function(t, e) {
            var s, r, i, n, c, a = T;
            d(t, a), i = Math.round(t._sticker.y + t._sticker.nodeHeight + t._sticker.offset), c = t._sticker.forcePosition, n = Math.round(t._sticker.y + t._sticker.nodeHeight), (c || n < t._sticker.scrollHeight) && (s = t._sticker.lastPos, s = c ? "top" === c && a.top + t._sticker.top > t._sticker.y ? H : "bottom" === c && a.bottom >= i - 1 ? k : S : t._sticker.nodeHeight > a.height - t._sticker.top ? ((r = D > P) || !e) && a.bottom >= i - 1 ? k : !r && e && a.top + t._sticker.top <= t._sticker.currentY && a.top + t._sticker.top > t._sticker.y ? H : S : t._sticker.nodeHeight <= a.height - t._sticker.top && D + t._sticker.top > t._sticker.y ? H : S, (t._sticker.lastPos !== s || t._sticker.y >= a.top + t._sticker.top) && o(t, s))
        }, d = function(t, e) {
            var s = Math.round(t.getY());
            s < 0 && t.hasClass(p) ? s = e.top + s : t._sticker.lastPos === H && (s = e.top + t._sticker.top), t._sticker.currentY = s, t._sticker.y = Math.round(t._sticker.pHolder.getY()), t._sticker.nodeHeight = t.get(v), t._sticker.offset = Math.max(s - t._sticker.y, 0), t._sticker.vpTaller = e.height > t._sticker.nodeHeight, t._sticker.scrollHeight = Math.max(u.body.scrollHeight, u.documentElement.scrollHeight)
        }, o = function(e, s) {
            var r, i, o = {};
            s === H ? (o = {
                position: "",
                bottom: "",
                top: e._sticker.top + A,
                transform: U
            }, e._sticker.translated = f) : s === k ? (o = {
                position: "",
                bottom: 0,
                top: "",
                transform: U
            }, e._sticker.translated = f) : (e._sticker.y < T.top + e._sticker.top ? (r = "translate3d(0," + e._sticker.offset + A + ",0)", i = e._sticker.offset + A) : (r = "", i = ""), o = m && m.csstransforms3d && !t.UA.gecko ? {
                position: "",
                bottom: "",
                top: "",
                transform: r
            } : {
                position: "relative",
                bottom: "",
                top: i
            }, e._sticker.translated = !0), t.UA.gecko && t.UA.gecko < 27 && (o.transform = undefined), s !== S ? (e.addClass(p), e._sticker.parentClass && e.get("parentNode").addClass(e._sticker.parentClass), e._sticker.sticky = !0, Stencil && Stencil.utils && Stencil.utils.dispatch(e.getDOMNode(), "sticker:sticky", {
                where: s
            })) : (e.removeClass(p), e._sticker.parentClass && e.get("parentNode").removeClass(e._sticker.parentClass), e._sticker.sticky = f), e._sticker.lastPos = s, e.setStyles(o)
        }, n = function(e, s) {
            var r, i = 0,
                o = t.merge(e.getData(), s);
            return o["sticker-top"] ? i = parseInt(o["sticker-top"], 10) : o["sticker-toptarget"] ? i = parseInt(t.one(o["sticker-toptarget"]).get(v), 10) : (r = t.one("body"), i = parseInt(r.getComputedStyle(y), 10) || parseInt(r.getComputedStyle("paddingTop"), 10) || 0), i
        }, i = function() {
            u.documentElement.clientWidth > I ? h.replaceClass(g, _) : h.replaceClass(_, g), a()
        }, r = function(t, e) {
            Y = f, E = +new Date, t && t.call(undefined, e)
        }, c = function(e) {
            var o, n, c, l;
            e.type === b ? (n = a, c = !0) : e.type === C && (n = i), l = t.bind(r, undefined, n, c), M.requestAnimationFrame ? Y || (Y = !0, requestAnimationFrame(l)) : (o = +new Date, E && o < E + 50 ? (M.clearTimeout(s), s = M.setTimeout(l, 50)) : l())
        }, t.extend(O, t.Stencil.BasePlugin, {}, {
            NS: "StencilSticker",
            requiresInit: !0,
            defaultTriggerEvents: [],
            updateAllNodes: a
        }), t.Stencil.registerPlugin(O, "Sticker"), M.addEventListener ? (M.addEventListener(b, c, f), M.addEventListener(C, c, f)) : (M.attachEvent("on" + b, c), M.attachEvent("on" + C, c)), D = t.DOM.docScrollY(), i()
    }

    function O(e) {
        this.constructor.superclass.constructor.call(this, e);
        var s, r, i, o = this._node,
            c = t.merge(o.getData(), e) || {},
            a = n(o, e),
            d = {},
            k = {};
        (s = t.Node.create('<div class="StickyPholder"></div>')).setStyle(y, o.getStyle(y)), d.marginTop = 0, o.insert(s, "before"), i = s.getY(), m && m.csstransforms3d && (!t.UA.gecko || t.UA.gecko >= 27) && (d.transform = U), o.setStyles(d), r = o.get(v), k.pHolder = s, k.top = a, k.y = i, k.currentY = i, k.forcePosition = c["sticker-forceposition"], k.parentClass = c["sticker-parentclass"], k.vpTaller = t.DOM.viewportRegion().height > r, k.nodeHeight = r, k.offset = 0, k.lastPos = S, o._sticker = k, N.push(o), l(o)
    }
}, "@VERSION@", {
    requires: ["node-base", "node-style", "node-screen"]
});
window.Modernizr = function(t, e, n) {
        var i, r, o, s, a = "2.8.3",
            c = {},
            l = !0,
            d = e.documentElement,
            u = "modernizr",
            f = e.createElement(u),
            p = f.style,
            h = " -webkit- -moz- -o- -ms- ".split(" "),
            v = "Webkit Moz O ms",
            m = v.split(" "),
            y = v.toLowerCase().split(" "),
            w = "http://www.w3.org/2000/svg",
            x = {},
            g = [],
            b = g.slice,
            _ = function(t, n, i, r) {
                var o, s, a, c, l = e.createElement("div"),
                    f = e.body,
                    p = f || e.createElement("body");
                if (parseInt(i, 10))
                    for (; i--;)(a = e.createElement("div")).id = r ? r[i] : u + (i + 1), l.appendChild(a);
                return o = ["&#173;", '<style id="s', u, '">', t, "</style>"].join(""), l.id = u, (f ? l : p).innerHTML += o, p.appendChild(l), f || (p.style.background = "", p.style.overflow = "hidden", c = d.style.overflow, d.style.overflow = "hidden", d.appendChild(p)), s = n(l, t), f ? l.parentNode.removeChild(l) : (p.parentNode.removeChild(p), d.style.overflow = c), !!s
            },
            E = (s = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            }, function(t, i) {
                i = i || e.createElement(s[t] || "div");
                var r = (t = "on" + t) in i;
                return r || (i.setAttribute || (i = e.createElement("div")), i.setAttribute && i.removeAttribute && (i.setAttribute(t, ""), r = M(i[t], "function"), M(i[t], "undefined") || (i[t] = n), i.removeAttribute(t))), i = null, r
            }),
            T = {}.hasOwnProperty;

        function S(t) {
            p.cssText = t
        }

        function M(t, e) {
            return typeof t === e
        }

        function A(t, e) {
            var i, r;
            for (i in t)
                if (r = t[i], !~("" + r).indexOf("-") && p[r] !== n) return "pfx" != e || r;
            return !1
        }

        function D(t, e, i) {
            var r = t.charAt(0).toUpperCase() + t.slice(1),
                o = (t + " " + m.join(r + " ") + r).split(" ");
            return M(e, "string") || M(e, "undefined") ? A(o, e) : function(t, e, i) {
                var r, o;
                for (r in t)
                    if ((o = e[t[r]]) !== n) return !1 === i ? t[r] : M(o, "function") ? o.bind(i || e) : o;
                return !1
            }(o = (t + " " + y.join(r + " ") + r).split(" "), e, i)
        }
        for (o in r = M(T, "undefined") || M(T.call, "undefined") ? function(t, e) {
                return e in t && M(t.constructor.prototype[e], "undefined")
            } : function(t, e) {
                return T.call(t, e)
            }, Function.prototype.bind || (Function.prototype.bind = function(t) {
                var e, n, i = this;
                if ("function" != typeof i) throw new TypeError;
                return e = b.call(arguments, 1), n = function() {
                    var r, o, s;
                    return this instanceof n ? ((r = function() {}).prototype = i.prototype, o = new r, s = i.apply(o, e.concat(b.call(arguments))), Object(s) === s ? s : o) : i.apply(t, e.concat(b.call(arguments)))
                }
            }), x.canvas = function() {
                var t = e.createElement("canvas");
                return !(!t.getContext || !t.getContext("2d"))
            }, x.touch = function() {
                var n;
                return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? n = !0 : _(["@media (", h.join("touch-enabled),("), u, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(t) {
                    n = 9 === t.offsetTop
                }), n
            }, x.csstransforms3d = function() {
                var t = !!D("perspective");
                return t && "webkitPerspective" in d.style && _("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e, n) {
                    t = 9 === e.offsetLeft && 3 === e.offsetHeight
                }), t
            }, x.csstransitions = function() {
                return D("transition")
            }, x.svg = function() {
                return !!e.createElementNS && !!e.createElementNS(w, "svg").createSVGRect
            }, x) r(x, o) && (i = o.toLowerCase(), c[i] = x[o](), g.push((c[i] ? "" : "no-") + i));
        return c.addTest = function(t, e) {
            if ("object" == typeof t)
                for (var i in t) r(t, i) && c.addTest(i, t[i]);
            else {
                if (t = t.toLowerCase(), c[t] !== n) return c;
                e = "function" == typeof e ? e() : e, void 0 !== l && l && (d.className += " stencil-" + (e ? "" : "no-") + t), c[t] = e
            }
            return c
        }, S(""), f = null, c._version = a, c._prefixes = h, c._domPrefixes = y, c._cssomPrefixes = m, c.hasEvent = E, c.testProp = function(t) {
            return A([t])
        }, c.testAllProps = D, c.testStyles = _, c.prefixed = function(t, e, n) {
            return e ? D(t, e, n) : D(t, "pfx")
        }, d.className = d.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (l ? " stencil-js stencil-" + g.join(" stencil-") : ""), c
    }(this, document), Modernizr.addTest("fullscreen", function() {
        for (var t = 0; t < Modernizr._domPrefixes.length; t++)
            if (document[Modernizr._domPrefixes[t].toLowerCase() + "CancelFullScreen"]) return !0;
        return !!document.cancelFullScreen || !1
    }), Modernizr.addTest("overflowscrolling", function() {
        return Modernizr.testAllProps("overflowScrolling")
    }),
    function() {
        var t, e = ["ms", "moz", "webkit", "o"];
        for (t = 0; t < e.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"]
    }(), Function.prototype.bind || (Function.prototype.bind = function(t) {
        "use strict";
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var e = Array.prototype.slice.call(arguments, 1),
            n = this,
            i = function() {
                return undefined
            },
            r = function() {
                return n.apply(this instanceof i && t ? this : t, e.concat(Array.prototype.slice.call(arguments)))
            };
        return i.prototype = this.prototype, r.prototype = new i, r
    }), String.prototype.trim || (String.prototype.trim = function() {
        "use strict";
        return this.replace(/^\s+|\s+$/gm, "")
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function(t, e) {
        "use strict";
        if (this === undefined || null === this) throw new TypeError('"this" is null or not defined');
        var n = this.length >>> 0;
        for (e = +e || 0, Math.abs(e) === Infinity && (e = 0), e < 0 && (e += n) < 0 && (e = 0); e < n; e++)
            if (this[e] === t) return e;
        return -1
    }), window.Stencil || (window.Stencil = {}), Stencil.utils = {
        dispatch: function(t, e, n) {
            "use strict";
            var i;
            document.createEvent && (n || (n = {}), (i = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, n), t.dispatchEvent(i))
        },
        getDOMNode: function(t) {
            "use strict";
            return t ? t.nodeType ? t : t._node || null : null
        },
        merge: function(t, e, n) {
            "use strict";
            var i, r;
            for (i in e) e.hasOwnProperty(i) && ((r = t.hasOwnProperty(i)) && "object" == typeof t[i] && "object" == typeof e[i] ? Stencil.utils.merge(t[i], e[i], n) : !n && r || (t[i] = e[i]));
            return t
        }
    }, window.Stencil || (window.Stencil = {}), Stencil.css = function() {
        "use strict";
        var t = Stencil.utils,
            e = ["transitionend", "webkitTransitionEnd", "oTransitionEnd", "otransitionend"],
            n = {};
        return n.properties = {
            transform: Modernizr.prefixed("transform"),
            transition: Modernizr.prefixed("transition")
        }, n.events = {
            transitionEnd: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                transition: "transitionend"
            } [n.properties.transition]
        }, n.transitioned = function(n, i, r) {
            var o, s, a, c, l, d, u, f;
            if (this.events.transitionEnd)
                for (c = function(e) {
                        var o, s, a = d.length;
                        if (e.target === t.getDOMNode(n)) {
                            if (!r)
                                for (o = 0; o < a; o++) s = d[o], this.removeEventListener(s.__eventType, s);
                            i(n, !0)
                        }
                    }, d = [], u = t.getDOMNode(n), a = e.length, f = {}, o = 0; o < a; o++) f[s = e[o]] || ((l = c.bind(u)).__eventType = s, u.addEventListener ? u.addEventListener(s, l) : u.attachEvent && (s = "on" + s, u.attachEvent(s, l)), f[s] = !0, d.push(l));
            else window.setTimeout(function() {
                i(n, !1)
            }, 0);
            return d
        }, n
    }(),
    function() {
        "use strict";
        var t, e = document,
            n = Stencil.utils,
            i = null,
            r = "left",
            o = "right",
            s = "up",
            a = "down";
        (t = function(t, e) {
            var r;
            if (!t) throw new Error("Swiper requires a DOM Node to listen to events");
            return this.config = {
                swipe: {
                    axis: "x",
                    acceptable_opposite_axis_movement: 100,
                    min_swipe_dist: 30
                },
                slide: {
                    intention_tolerance: 10
                },
                should_prevent_default_after: 10,
                should_prevent_default_once: !0
            }, this.startX = 0, this.startY = 0, this.x = i, this.y = i, this.delta = {
                x: 0,
                y: 0,
                absx: 0,
                absy: 0
            }, this.axisIntention = "", this.lastMoveEnd = 0, this.touchmoveActive = !1, this.base_event = null, n.merge(this.config, e, !0), t = n.getDOMNode(t), this.target = t, this.target._offsetLeft = this.target.offsetLeft, this.target._offsetTop = this.target.offsetTop, r = function(t) {
                Number(new Date) - this.lastMoveEnd < 500 && (t.preventDefault(), t.stopPropagation())
            }, document.addEventListener("click", r.bind(this), !0), this
        }).prototype = {
            getXY: function(t) {
                var n = {
                    x: 0,
                    y: 0
                };
                return t.pageX || t.pageY ? (n.x = t.pageX, n.y = t.pageY) : (n.x = t.clientX + e.body.scrollLeft + e.documentElement.scrollLeft, n.y = t.clientY + e.body.scrollTop + e.documentElement.scrollTop), n.x -= this.target._offsetLeft, n.y -= this.target._offsetTop, n
            },
            isValidSwipe: function(t, e) {
                var n = this.config.swipe.axis,
                    i = this.delta.absx,
                    r = this.delta.absy,
                    o = this.config.swipe.min_swipe_dist,
                    s = this.config.swipe.acceptable_opposite_axis_movement;
                return t === n && e === this.lastDirection && ("x" === t && i > o && r < s || "y" === t && r > o && i < s)
            },
            handleTapOrSwipe: function(t) {
                var e, i, c;
                0 !== this.x && !this.x || 0 !== this.y && !this.y ? n.dispatch(this.target, "tap", {
                    x: this.startX,
                    y: this.startY,
                    base_event: t,
                    target: this.base_event.target
                }) : (this.delta.absy < this.delta.absx ? (i = "x", c = this.delta.x > 0 ? r : o) : (i = "y", c = this.delta.y > 0 ? s : a), this.isValidSwipe(i, c) ? (e = {
                    x: this.x,
                    y: this.y,
                    delta: this.delta,
                    direction: c,
                    axis: i
                }, n.dispatch(this.target, "swipe", e)) : n.dispatch(this.target, "end", t))
            },
            shouldPreventDefault: function(t) {
                if ("x" === this.config.swipe.axis) {
                    if (this.delta.absx > this.config.should_prevent_default_after) return t.preventDefault(), !0
                } else if (this.delta.absy > this.config.should_prevent_default_after) return t.preventDefault(), !0;
                return !1
            },
            captureTouch: function(t) {
                t || (t = this.target);
                var e = this;
                t.addEventListener("touchstart", function(t) {
                    var r, o = t.touches[0];
                    r = e.getXY(o), e.startX = r.x, e.startY = r.y, e.delta.x = 0, e.delta.y = 0, e.base_event = t, e.axisIntention = "", e.lastMoveEnd = 0, e.touchmoveActive = !1, e.lastDirection = i, n.dispatch(e.target, "init")
                }, !1), t.addEventListener("touchmove", function(t) {
                    var i, c, l, d, u = t.touches[0];
                    e.touchmoveActive = !0, i = e.getXY(u), e.x = i.x, e.y = i.y, l = e.startX - e.x, d = e.startY - e.y, e.delta.absx = Math.abs(l), e.delta.absy = Math.abs(d), "" === e.axisIntention ? (c = e.config.slide.intention_tolerance, e.delta.absx > c && e.delta.absy < c ? e.axisIntention = "x" : e.delta.absy > c && e.delta.absx < c && (e.axisIntention = "y")) : "x" === e.axisIntention ? l !== e.delta.x && (e.lastDirection = l > e.delta.x ? r : o) : d !== e.delta.y && (e.lastDirection = d > e.delta.y ? s : a), e.delta.x = l, e.delta.y = d, e.shouldPreventDefault(t), n.dispatch(e.target, "slide", {
                        delta: e.delta,
                        axisIntention: e.axisIntention
                    })
                }, !1), t.addEventListener("touchend", function(t) {
                    e.touchmoveActive && (e.lastMoveEnd = Number(new Date)), e.handleTapOrSwipe(t), e.x = i, e.y = i, e.base_event = i
                }, !1)
            }
        }, Stencil.Swiper = t
    }(), YUI.add("stencil", function(t, e) {}, "@VERSION@");
YUI.add("array-extras", function(e, t) {
    var n = e.Array,
        r = e.Lang,
        i = Array.prototype;
    n.lastIndexOf = r._isNative(i.lastIndexOf) ? function(e, t, n) {
        return n || n === 0 ? e.lastIndexOf(t, n) : e.lastIndexOf(t)
    } : function(e, t, n) {
        var r = e.length,
            i = r - 1;
        if (n || n === 0) i = Math.min(n < 0 ? r + n : n, r);
        if (i > -1 && r > 0)
            for (; i > -1; --i)
                if (i in e && e[i] === t) return i;
        return -1
    }, n.unique = function(e, t) {
        var n = 0,
            r = e.length,
            i = [],
            s, o, u, a;
        e: for (; n < r; n++) {
            a = e[n];
            for (s = 0, u = i.length; s < u; s++) {
                o = i[s];
                if (t) {
                    if (t.call(e, a, o, n, e)) continue e
                } else if (a === o) continue e
            }
            i.push(a)
        }
        return i
    }, n.filter = r._isNative(i.filter) ? function(e, t, n) {
        return i.filter.call(e, t, n)
    } : function(e, t, n) {
        var r = 0,
            i = e.length,
            s = [],
            o;
        for (; r < i; ++r) r in e && (o = e[r], t.call(n, o, r, e) && s.push(o));
        return s
    }, n.reject = function(e, t, r) {
        return n.filter(e, function(e, n, i) {
            return !t.call(r, e, n, i)
        })
    }, n.every = r._isNative(i.every) ? function(e, t, n) {
        return i.every.call(e, t, n)
    } : function(e, t, n) {
        for (var r = 0, i = e.length; r < i; ++r)
            if (r in e && !t.call(n, e[r], r, e)) return !1;
        return !0
    }, n.map = r._isNative(i.map) ? function(e, t, n) {
        return i.map.call(e, t, n)
    } : function(e, t, n) {
        var r = 0,
            s = e.length,
            o = i.concat.call(e);
        for (; r < s; ++r) r in e && (o[r] = t.call(n, e[r], r, e));
        return o
    }, n.reduce = r._isNative(i.reduce) ? function(e, t, n, r) {
        return i.reduce.call(e, function(e, t, i, s) {
            return n.call(r, e, t, i, s)
        }, t)
    } : function(e, t, n, r) {
        var i = 0,
            s = e.length,
            o = t;
        for (; i < s; ++i) i in e && (o = n.call(r, o, e[i], i, e));
        return o
    }, n.find = function(e, t, n) {
        for (var r = 0, i = e.length; r < i; r++)
            if (r in e && t.call(n, e[r], r, e)) return e[r];
        return null
    }, n.grep = function(e, t) {
        return n.filter(e, function(e, n) {
            return t.test(e)
        })
    }, n.partition = function(e, t, r) {
        var i = {
            matches: [],
            rejects: []
        };
        return n.each(e, function(n, s) {
            var u = t.call(r, n, s, e) ? i.matches : i.rejects;
            u.push(n)
        }), i
    }, n.zip = function(e, t) {
        var r = [];
        return n.each(e, function(e, n) {
            r.push([e, t[n]])
        }), r
    }, n.flatten = function(e) {
        var t = [],
            i, s, o;
        if (!e) return t;
        for (i = 0, s = e.length; i < s; ++i) o = e[i], r.isArray(o) ? t.push.apply(t, n.flatten(o)) : t.push(o);
        return t
    }
}, "3.18.1", {
    requires: ["yui-base"]
});
YUI.add("array-invoke", function(e, t) {
    e.Array.invoke = function(t, n) {
        var r = e.Array(arguments, 2, !0),
            i = e.Lang.isFunction,
            s = [];
        return e.Array.each(e.Array(t), function(e, t) {
            e && i(e[n]) && (s[t] = e[n].apply(e, r))
        }), s
    }
}, "3.18.1", {
    requires: ["yui-base"]
});
YUI.add("arraylist", function(e, t) {
    function s(t) {
        t !== undefined ? this._items = e.Lang.isArray(t) ? t : n(t) : this._items = this._items || []
    }
    var n = e.Array,
        r = n.each,
        i;
    i = {
        item: function(e) {
            return this._items[e]
        },
        each: function(e, t) {
            return r(this._items, function(n, r) {
                n = this.item(r), e.call(t || n, n, r, this)
            }, this), this
        },
        some: function(e, t) {
            return n.some(this._items, function(n, r) {
                return n = this.item(r), e.call(t || n, n, r, this)
            }, this)
        },
        indexOf: function(e) {
            return n.indexOf(this._items, e)
        },
        size: function() {
            return this._items.length
        },
        isEmpty: function() {
            return !this.size()
        },
        toJSON: function() {
            return this._items
        }
    }, i._item = i.item, e.mix(s.prototype, i), e.mix(s, {
        addMethod: function(e, t) {
            t = n(t), r(t, function(t) {
                e[t] = function() {
                    var e = n(arguments, 0, !0),
                        i = [];
                    return r(this._items, function(n, r) {
                        n = this._item(r);
                        var s = n[t].apply(n, e);
                        s !== undefined && s !== n && (i[r] = s)
                    }, this), i.length ? i : this
                }
            })
        }
    }), e.ArrayList = s
}, "3.18.1", {
    requires: ["yui-base"]
});
YUI.add("attribute-base", function(e, t) {
    function n() {
        e.AttributeCore.apply(this, arguments), e.AttributeObservable.apply(this, arguments), e.AttributeExtras.apply(this, arguments)
    }
    e.mix(n, e.AttributeCore, !1, null, 1), e.mix(n, e.AttributeExtras, !1, null, 1), e.mix(n, e.AttributeObservable, !0, null, 1), n.INVALID_VALUE = e.AttributeCore.INVALID_VALUE, n._ATTR_CFG = e.AttributeCore._ATTR_CFG.concat(e.AttributeObservable._ATTR_CFG), n.protectAttrs = e.AttributeCore.protectAttrs, e.Attribute = n
}, "3.18.1", {
    requires: ["attribute-core", "attribute-observable", "attribute-extras"]
});
YUI.add("attribute-complex", function(e, t) {
    var n = e.Attribute;
    n.Complex = function() {}, n.Complex.prototype = {
        _normAttrVals: n.prototype._normAttrVals,
        _getAttrInitVal: n.prototype._getAttrInitVal
    }, e.AttributeComplex = n.Complex
}, "3.18.1", {
    requires: ["attribute-base"]
});
YUI.add("attribute-core", function(e, t) {
    function b(e, t, n) {
        this._yuievt = null, this._initAttrHost(e, t, n)
    }
    e.State = function() {
        this.data = {}
    }, e.State.prototype = {
        add: function(e, t, n) {
            var r = this.data[e];
            r || (r = this.data[e] = {}), r[t] = n
        },
        addAll: function(e, t) {
            var n = this.data[e],
                r;
            n || (n = this.data[e] = {});
            for (r in t) t.hasOwnProperty(r) && (n[r] = t[r])
        },
        remove: function(e, t) {
            var n = this.data[e];
            n && delete n[t]
        },
        removeAll: function(t, n) {
            var r;
            n ? e.each(n, function(e, n) {
                this.remove(t, typeof n == "string" ? n : e)
            }, this) : (r = this.data, t in r && delete r[t])
        },
        get: function(e, t) {
            var n = this.data[e];
            if (n) return n[t]
        },
        getAll: function(e, t) {
            var n = this.data[e],
                r, i;
            if (t) i = n;
            else if (n) {
                i = {};
                for (r in n) n.hasOwnProperty(r) && (i[r] = n[r])
            }
            return i
        }
    };
    var n = e.Object,
        r = e.Lang,
        i = ".",
        s = "getter",
        o = "setter",
        u = "readOnly",
        a = "writeOnce",
        f = "initOnly",
        l = "validator",
        c = "value",
        h = "valueFn",
        p = "lazyAdd",
        d = "added",
        v = "_bypassProxy",
        m = "initValue",
        g = "lazy",
        y;
    b.INVALID_VALUE = {}, y = b.INVALID_VALUE, b._ATTR_CFG = [o, s, l, c, h, a, u, p, v], b.protectAttrs = function(t) {
        if (t) {
            t = e.merge(t);
            for (var n in t) t.hasOwnProperty(n) && (t[n] = e.merge(t[n]))
        }
        return t
    }, b.prototype = {
        _initAttrHost: function(t, n, r) {
            this._state = new e.State, this._initAttrs(t, n, r)
        },
        addAttr: function(e, t, n) {
            var r = this,
                i = r._state,
                s = i.data,
                o, u, a;
            t = t || {}, p in t && (n = t[p]), u = i.get(e, d);
            if (n && !u) i.data[e] = {
                lazy: t,
                added: !0
            };
            else if (!u || t.isLazyAdd) a = c in t, a && (o = t.value, t.value = undefined), t.added = !0, t.initializing = !0, s[e] = t, a && r.set(e, o), t.initializing = !1;
            return r
        },
        attrAdded: function(e) {
            return !!this._state.get(e, d)
        },
        get: function(e) {
            return this._getAttr(e)
        },
        _isLazyAttr: function(e) {
            return this._state.get(e, g)
        },
        _addLazyAttr: function(e, t) {
            var n = this._state;
            t = t || n.get(e, g), t && (n.data[e].lazy = undefined, t.isLazyAdd = !0, this.addAttr(e, t))
        },
        set: function(e, t, n) {
            return this._setAttr(e, t, n)
        },
        _set: function(e, t, n) {
            return this._setAttr(e, t, n, !0)
        },
        _setAttr: function(t, r, s, o) {
            var u = !0,
                a = this._state,
                l = this._stateProxy,
                c = this._tCfgs,
                h, p, d, v, m, g, y;
            return t.indexOf(i) !== -1 && (d = t, v = t.split(i), t = v.shift()), c && c[t] && this._addOutOfOrder(t, c[t]), h = a.data[t] || {}, h.lazy && (h = h.lazy, this._addLazyAttr(t, h)), p = h.value === undefined, l && t in l && !h._bypassProxy && (p = !1), g = h.writeOnce, y = h.initializing, !p && !o && (g && (u = !1), h.readOnly && (u = !1)), !y && !o && g === f && (u = !1), u && (p || (m = this.get(t)), v && (r = n.setValue(e.clone(m), v, r), r === undefined && (u = !1)), u && (!this._fireAttrChange || y ? this._setAttrVal(t, d, m, r, s, h) : this._fireAttrChange(t, d, m, r, s, h))), this
        },
        _addOutOfOrder: function(e, t) {
            var n = {};
            n[e] = t, delete this._tCfgs[e], this._addAttrs(n, this._tVals)
        },
        _getAttr: function(e) {
            var t = e,
                r = this._tCfgs,
                s, o, u, a;
            return e.indexOf(i) !== -1 && (s = e.split(i), e = s.shift()), r && r[e] && this._addOutOfOrder(e, r[e]), a = this._state.data[e] || {}, a.lazy && (a = a.lazy, this._addLazyAttr(e, a)), u = this._getStateVal(e, a), o = a.getter, o && !o.call && (o = this[o]), u = o ? o.call(this, u, t) : u, u = s ? n.getValue(u, s) : u, u
        },
        _getStateVal: function(e, t) {
            var n = this._stateProxy;
            return t || (t = this._state.getAll(e) || {}), n && e in n && !t._bypassProxy ? n[e] : t.value
        },
        _setStateVal: function(e, t) {
            var n = this._stateProxy;
            n && e in n && !this._state.get(e, v) ? n[e] = t : this._state.add(e, c, t)
        },
        _setAttrVal: function(e, t, n, i, s, o) {
            var u = this,
                a = !0,
                f = o || this._state.data[e] || {},
                l = f.validator,
                c = f.setter,
                h = f.initializing,
                p = this._getStateVal(e, f),
                d = t || e,
                v, g;
            return l && (l.call || (l = this[l]), l && (g = l.call(u, i, d, s), !g && h && (i = f.defaultValue, g = !0))), !l || g ? (c && (c.call || (c = this[c]), c && (v = c.call(u, i, d, s), v === y ? h ? i = f.defaultValue : a = !1 : v !== undefined && (i = v))), a && (!t && i === p && !r.isObject(i) ? a = !1 : (m in f || (f.initValue = i), u._setStateVal(e, i)))) : a = !1, a
        },
        setAttrs: function(e, t) {
            return this._setAttrs(e, t)
        },
        _setAttrs: function(e, t) {
            var n;
            for (n in e) e.hasOwnProperty(n) && this.set(n, e[n], t);
            return this
        },
        getAttrs: function(e) {
            return this._getAttrs(e)
        },
        _getAttrs: function(e) {
            var t = {},
                r, i, s, o = e === !0;
            if (!e || o) e = n.keys(this._state.data);
            for (i = 0, s = e.length; i < s; i++) {
                r = e[i];
                if (!o || this._getStateVal(r) != this._state.get(r, m)) t[r] = this.get(r)
            }
            return t
        },
        addAttrs: function(e, t, n) {
            return e && (this._tCfgs = e, this._tVals = t ? this._normAttrVals(t) : null, this._addAttrs(e, this._tVals, n), this._tCfgs = this._tVals = null), this
        },
        _addAttrs: function(e, t, n) {
            var r = this._tCfgs,
                i = this._tVals,
                s, o, u;
            for (s in e) e.hasOwnProperty(s) && (o = e[s], o.defaultValue = o.value, u = this._getAttrInitVal(s, o, i), u !== undefined && (o.value = u), r[s] && (r[s] = undefined), this.addAttr(s, o, n))
        },
        _protectAttrs: b.protectAttrs,
        _normAttrVals: function(e) {
            var t, n, r, s, o, u;
            if (!e) return null;
            t = {};
            for (u in e) e.hasOwnProperty(u) && (u.indexOf(i) !== -1 ? (r = u.split(i), s = r.shift(), n = n || {}, o = n[s] = n[s] || [], o[o.length] = {
                path: r,
                value: e[u]
            }) : t[u] = e[u]);
            return {
                simple: t,
                complex: n
            }
        },
        _getAttrInitVal: function(e, t, r) {
            var i = t.value,
                s = t.valueFn,
                o, u = !1,
                a = t.readOnly,
                f, l, c, h, p, d, v;
            !a && r && (f = r.simple, f && f.hasOwnProperty(e) && (i = f[e], u = !0)), s && !u && (s.call || (s = this[s]), s && (o = s.call(this, e), i = o));
            if (!a && r) {
                l = r.complex;
                if (l && l.hasOwnProperty(e) && i !== undefined && i !== null) {
                    v = l[e];
                    for (c = 0, h = v.length; c < h; ++c) p = v[c].path, d = v[c].value, n.setValue(i, p, d)
                }
            }
            return i
        },
        _initAttrs: function(t, n, r) {
            t = t || this.constructor.ATTRS;
            var i = e.Base,
                s = e.BaseCore,
                o = i && e.instanceOf(this, i),
                u = !o && s && e.instanceOf(this, s);
            t && !o && !u && this.addAttrs(e.AttributeCore.protectAttrs(t), n, r)
        }
    }, e.AttributeCore = b
}, "3.18.1", {
    requires: ["oop"]
});
YUI.add("attribute-extras", function(e, t) {
    function o() {}
    var n = "broadcast",
        r = "published",
        i = "initValue",
        s = {
            readOnly: 1,
            writeOnce: 1,
            getter: 1,
            broadcast: 1
        };
    o.prototype = {
        modifyAttr: function(e, t) {
            var i = this,
                o, u;
            if (i.attrAdded(e)) {
                i._isLazyAttr(e) && i._addLazyAttr(e), u = i._state;
                for (o in t) s[o] && t.hasOwnProperty(o) && (u.add(e, o, t[o]), o === n && u.remove(e, r))
            }
        },
        removeAttr: function(e) {
            this._state.removeAll(e)
        },
        reset: function(t) {
            var n = this;
            return t ? (n._isLazyAttr(t) && n._addLazyAttr(t), n.set(t, n._state.get(t, i))) : e.Object.each(n._state.data, function(e, t) {
                n.reset(t)
            }), n
        },
        _getAttrCfg: function(t) {
            var n, r = this._state;
            return t ? n = r.getAll(t) || {} : (n = {}, e.each(r.data, function(e, t) {
                n[t] = r.getAll(t)
            })), n
        }
    }, e.AttributeExtras = o
}, "3.18.1", {
    requires: ["oop"]
});
YUI.add("attribute-observable", function(e, t) {
    function s() {
        this._ATTR_E_FACADE = {}, n.call(this, {
            emitFacade: !0
        })
    }
    var n = e.EventTarget,
        r = "Change",
        i = "broadcast";
    s._ATTR_CFG = [i], s.prototype = {
        set: function(e, t, n) {
            return this._setAttr(e, t, n)
        },
        _set: function(e, t, n) {
            return this._setAttr(e, t, n, !0)
        },
        setAttrs: function(e, t) {
            return this._setAttrs(e, t)
        },
        _setAttrs: function(e, t) {
            var n;
            for (n in e) e.hasOwnProperty(n) && this.set(n, e[n], t);
            return this
        },
        _fireAttrChange: function(t, n, i, s, o, u) {
            var a = this,
                f = this._getFullType(t + r),
                l = a._state,
                c, h, p;
            u || (u = l.data[t] || {}), u.published || (p = a._publish(f), p.emitFacade = !0, p.defaultTargetOnly = !0, p.defaultFn = a._defAttrChangeFn, h = u.broadcast, h !== undefined && (p.broadcast = h), u.published = !0), o ? (c = e.merge(o), c._attrOpts = o) : c = a._ATTR_E_FACADE, c.attrName = t, c.subAttrName = n, c.prevVal = i, c.newVal = s, a._hasPotentialSubscribers(f) ? a.fire(f, c) : this._setAttrVal(t, n, i, s, o, u)
        },
        _defAttrChangeFn: function(e, t) {
            var n = e._attrOpts;
            n && delete e._attrOpts, this._setAttrVal(e.attrName, e.subAttrName, e.prevVal, e.newVal, n) ? t || (e.newVal = this.get(e.attrName)) : t || e.stopImmediatePropagation()
        }
    }, e.mix(s, n, !1, null, 1), e.AttributeObservable = s, e.AttributeEvents = s
}, "3.18.1", {
    requires: ["event-custom"]
});
YUI.add("autocomplete-base", function(e, t) {
    function T() {}
    var n = e.Escape,
        r = e.Lang,
        i = e.Array,
        s = e.Object,
        o = r.isFunction,
        u = r.isString,
        a = r.trim,
        f = e.Attribute.INVALID_VALUE,
        l = "_functionValidator",
        c = "_sourceSuccess",
        h = "allowBrowserAutocomplete",
        p = "inputNode",
        d = "query",
        v = "queryDelimiter",
        m = "requestTemplate",
        g = "results",
        y = "resultListLocator",
        b = "value",
        w = "valueChange",
        E = "clear",
        S = d,
        x = g;
    T.prototype = {
        initializer: function() {
            e.before(this._bindUIACBase, this, "bindUI"), e.before(this._syncUIACBase, this, "syncUI"), this.publish(E, {
                defaultFn: this._defClearFn
            }), this.publish(S, {
                defaultFn: this._defQueryFn
            }), this.publish(x, {
                defaultFn: this._defResultsFn
            })
        },
        destructor: function() {
            this._acBaseEvents && this._acBaseEvents.detach(), delete this._acBaseEvents, delete this._cache, delete this._inputNode, delete this._rawSource
        },
        clearCache: function() {
            return this._cache && (this._cache = {}), this
        },
        sendRequest: function(t, n) {
            var r, i = this.get("source");
            return t || t === "" ? this._set(d, t) : t = this.get(d) || "", i && (n || (n = this.get(m)), r = n ? n.call(this, t) : t, i.sendRequest({
                query: t,
                request: r,
                callback: {
                    success: e.bind(this._onResponse, this, t)
                }
            })), this
        },
        _bindUIACBase: function() {
            var t = this.get(p),
                n = t && t.tokenInput;
            n && (t = n.get(p), this._set("tokenInput", n));
            if (!t) {
                e.error("No inputNode specified.");
                return
            }
            this._inputNode = t, this._acBaseEvents = new e.EventHandle([t.on(w, this._onInputValueChange, this), t.on("blur", this._onInputBlur, this), this.after(h + "Change", this._syncBrowserAutocomplete), this.after("sourceTypeChange", this._afterSourceTypeChange), this.after(w, this._afterValueChange)])
        },
        _syncUIACBase: function() {
            this._syncBrowserAutocomplete(), this.set(b, this.get(p).get(b))
        },
        _createArraySource: function(e) {
            var t = this;
            return {
                type: "array",
                sendRequest: function(n) {
                    t[c](e.concat(), n)
                }
            }
        },
        _createFunctionSource: function(e) {
            var t = this;
            return {
                type: "function",
                sendRequest: function(n) {
                    function i(e) {
                        t[c](e || [], n)
                    }
                    var r;
                    (r = e(n.query, i)) && i(r)
                }
            }
        },
        _createObjectSource: function(e) {
            var t = this;
            return {
                type: "object",
                sendRequest: function(n) {
                    var r = n.query;
                    t[c](s.owns(e, r) ? e[r] : [], n)
                }
            }
        },
        _functionValidator: function(e) {
            return e === null || o(e)
        },
        _getObjectValue: function(e, t) {
            if (!e) return;
            for (var n = 0, r = t.length; e && n < r; n++) e = e[t[n]];
            return e
        },
        _parseResponse: function(e, t, r) {
            var i = {
                    data: r,
                    query: e,
                    results: []
                },
                s = this.get(y),
                o = [],
                u = t && t.results,
                a, f, l, c, h, p, d, v, m, g, b;
            u && s && (u = s.call(this, u));
            if (u && u.length) {
                a = this.get("resultFilters"), b = this.get("resultTextLocator");
                for (p = 0, d = u.length; p < d; ++p) m = u[p], g = b ? b.call(this, m) : m.toString(), o.push({
                    display: n.html(g),
                    raw: m,
                    text: g
                });
                for (p = 0, d = a.length; p < d; ++p) {
                    o = a[p].call(this, e, o.concat());
                    if (!o) return;
                    if (!o.length) break
                }
                if (o.length) {
                    l = this.get("resultFormatter"), h = this.get("resultHighlighter"), v = this.get("maxResults"), v && v > 0 && o.length > v && (o.length = v);
                    if (h) {
                        c = h.call(this, e, o.concat());
                        if (!c) return;
                        for (p = 0, d = c.length; p < d; ++p) m = o[p], m.highlighted = c[p], m.display = m.highlighted
                    }
                    if (l) {
                        f = l.call(this, e, o.concat());
                        if (!f) return;
                        for (p = 0, d = f.length; p < d; ++p) o[p].display = f[p]
                    }
                }
            }
            i.results = o, this.fire(x, i)
        },
        _parseValue: function(e) {
            var t = this.get(v);
            return t && (e = e.split(t), e = e[e.length - 1]), r.trimLeft(e)
        },
        _setEnableCache: function(e) {
            this._cache = e ? {} : null
        },
        _setLocator: function(e) {
            if (this[l](e)) return e;
            var t = this;
            return e = e.toString().split("."),
                function(n) {
                    return n && t._getObjectValue(n, e)
                }
        },
        _setRequestTemplate: function(e) {
            return this[l](e) ? e : (e = e.toString(), function(t) {
                return r.sub(e, {
                    query: encodeURIComponent(t)
                })
            })
        },
        _setResultFilters: function(t) {
            var n, s;
            return t === null ? [] : (n = e.AutoCompleteFilters, s = function(e) {
                return o(e) ? e : u(e) && n && o(n[e]) ? n[e] : !1
            }, r.isArray(t) ? (t = i.map(t, s), i.every(t, function(e) {
                return !!e
            }) ? t : f) : (t = s(t), t ? [t] : f))
        },
        _setResultHighlighter: function(t) {
            var n;
            return this[l](t) ? t : (n = e.AutoCompleteHighlighters, u(t) && n && o(n[t]) ? n[t] : f)
        },
        _setSource: function(t) {
            var n = this.get("sourceType") || r.type(t),
                i;
            return t && o(t.sendRequest) || t === null || n === "datasource" ? (this._rawSource = t, t) : (i = T.SOURCE_TYPES[n]) ? (this._rawSource = t, r.isString(i) ? this[i](t) : i(t)) : (e.error("Unsupported source type '" + n + "'. Maybe autocomplete-sources isn't loaded?"), f)
        },
        _sourceSuccess: function(e, t) {
            t.callback.success({
                data: e,
                response: {
                    results: e
                }
            })
        },
        _syncBrowserAutocomplete: function() {
            var e = this.get(p);
            e.get("nodeName").toLowerCase() === "input" && e.setAttribute("autocomplete", this.get(h) ? "on" : "off")
        },
        _updateValue: function(e) {
            var t = this.get(v),
                n, s, o;
            e = r.trimLeft(e), t && (n = a(t), o = i.map(a(this.get(b)).split(t), a), s = o.length, s > 1 && (o[s - 1] = e, e = o.join(n + " ")), e = e + n + " "), this.set(b, e)
        },
        _afterSourceTypeChange: function(e) {
            this._rawSource && this.set("source", this._rawSource)
        },
        _afterValueChange: function(e) {
            var t = e.newVal,
                n = this,
                r = e.src === T.UI_SRC,
                i, s, o, u;
            r || n._inputNode.set(b, t), o = n.get("minQueryLength"), u = n._parseValue(t) || "", o >= 0 && u.length >= o ? r ? (i = n.get("queryDelay"), s = function() {
                n.fire(S, {
                    inputValue: t,
                    query: u,
                    src: e.src
                })
            }, i ? (clearTimeout(n._delay), n._delay = setTimeout(s, i)) : s()) : n._set(d, u) : (clearTimeout(n._delay), n.fire(E, {
                prevVal: e.prevVal ? n._parseValue(e.prevVal) : null,
                src: e.src
            }))
        },
        _onInputBlur: function(e) {
            var t = this.get(v),
                n, i, s;
            if (t && !this.get("allowTrailingDelimiter")) {
                t = r.trimRight(t), s = i = this._inputNode.get(b);
                if (t)
                    while ((i = r.trimRight(i)) && (n = i.length - t.length) && i.lastIndexOf(t) === n) i = i.substring(0, n);
                else i = r.trimRight(i);
                i !== s && this.set(b, i)
            }
        },
        _onInputValueChange: function(e) {
            var t = e.newVal;
            t !== this.get(b) && this.set(b, t, {
                src: T.UI_SRC
            })
        },
        _onResponse: function(e, t) {
            e === (this.get(d) || "") && this._parseResponse(e || "", t.response, t.data)
        },
        _defClearFn: function() {
            this._set(d, null), this._set(g, [])
        },
        _defQueryFn: function(e) {
            this.sendRequest(e.query)
        },
        _defResultsFn: function(e) {
            this._set(g, e[g])
        }
    }, T.ATTRS = {
        allowBrowserAutocomplete: {
            value: !1
        },
        allowTrailingDelimiter: {
            value: !1
        },
        enableCache: {
            lazyAdd: !1,
            setter: "_setEnableCache",
            value: !0
        },
        inputNode: {
            setter: e.one,
            writeOnce: "initOnly"
        },
        maxResults: {
            value: 0
        },
        minQueryLength: {
            value: 1
        },
        query: {
            readOnly: !0,
            value: null
        },
        queryDelay: {
            value: 100
        },
        queryDelimiter: {
            value: null
        },
        requestTemplate: {
            setter: "_setRequestTemplate",
            value: null
        },
        resultFilters: {
            setter: "_setResultFilters",
            value: []
        },
        resultFormatter: {
            validator: l,
            value: null
        },
        resultHighlighter: {
            setter: "_setResultHighlighter",
            value: null
        },
        resultListLocator: {
            setter: "_setLocator",
            value: null
        },
        results: {
            readOnly: !0,
            value: []
        },
        resultTextLocator: {
            setter: "_setLocator",
            value: null
        },
        source: {
            setter: "_setSource",
            value: null
        },
        sourceType: {
            value: null
        },
        tokenInput: {
            readOnly: !0
        },
        value: {
            value: ""
        }
    }, T._buildCfg = {
        aggregates: ["SOURCE_TYPES"],
        statics: ["UI_SRC"]
    }, T.SOURCE_TYPES = {
        array: "_createArraySource",
        "function": "_createFunctionSource",
        object: "_createObjectSource"
    }, T.UI_SRC = e.Widget && e.Widget.UI_SRC || "ui", e.AutoCompleteBase = T
}, "3.18.1", {
    optional: ["autocomplete-sources"],
    requires: ["array-extras", "base-build", "escape", "event-valuechange", "node-base"]
});
YUI.add("autocomplete-highlighters", function(e, t) {
    var n = e.Array,
        r = e.Highlight,
        i = e.mix(e.namespace("AutoCompleteHighlighters"), {
            charMatch: function(e, t, i) {
                var s = n.unique((i ? e : e.toLowerCase()).split(""));
                return n.map(t, function(e) {
                    return r.all(e.text, s, {
                        caseSensitive: i
                    })
                })
            },
            charMatchCase: function(e, t) {
                return i.charMatch(e, t, !0)
            },
            phraseMatch: function(e, t, i) {
                return n.map(t, function(t) {
                    return r.all(t.text, [e], {
                        caseSensitive: i
                    })
                })
            },
            phraseMatchCase: function(e, t) {
                return i.phraseMatch(e, t, !0)
            },
            startsWith: function(e, t, i) {
                return n.map(t, function(t) {
                    return r.all(t.text, [e], {
                        caseSensitive: i,
                        startsWith: !0
                    })
                })
            },
            startsWithCase: function(e, t) {
                return i.startsWith(e, t, !0)
            },
            subWordMatch: function(t, i, s) {
                var o = e.Text.WordBreak.getUniqueWords(t, {
                    ignoreCase: !s
                });
                return n.map(i, function(e) {
                    return r.all(e.text, o, {
                        caseSensitive: s
                    })
                })
            },
            subWordMatchCase: function(e, t) {
                return i.subWordMatch(e, t, !0)
            },
            wordMatch: function(e, t, i) {
                return n.map(t, function(t) {
                    return r.words(t.text, e, {
                        caseSensitive: i
                    })
                })
            },
            wordMatchCase: function(e, t) {
                return i.wordMatch(e, t, !0)
            }
        })
}, "3.18.1", {
    requires: ["array-extras", "highlight-base"]
});
YUI.add("autocomplete-list-keys", function(e, t) {
    function u() {
        e.after(this._bindKeys, this, "bindUI"), this._initKeys()
    }
    var n = 40,
        r = 13,
        i = 27,
        s = 9,
        o = 38;
    u.prototype = {
        _initKeys: function() {
            var e = {},
                t = {};
            e[n] = this._keyDown, t[r] = this._keyEnter, t[i] = this._keyEsc, t[s] = this._keyTab, t[o] = this._keyUp, this._keys = e, this._keysVisible = t
        },
        destructor: function() {
            this._unbindKeys()
        },
        _bindKeys: function() {
            this._keyEvents = this._inputNode.on("keydown", this._onInputKey, this)
        },
        _unbindKeys: function() {
            this._keyEvents && this._keyEvents.detach(), this._keyEvents = null
        },
        _keyDown: function() {
            this.get("visible") ? this._activateNextItem() : this.show()
        },
        _keyEnter: function(e) {
            var t = this.get("activeItem");
            if (!t) return !1;
            this.selectItem(t, e)
        },
        _keyEsc: function() {
            this.hide()
        },
        _keyTab: function(e) {
            var t;
            if (this.get("tabSelect")) {
                t = this.get("activeItem");
                if (t) return this.selectItem(t, e), !0
            }
            return !1
        },
        _keyUp: function() {
            this._activatePrevItem()
        },
        _onInputKey: function(e) {
            var t, n = e.keyCode;
            this._lastInputKey = n, this.get("results").length && (t = this._keys[n], !t && this.get("visible") && (t = this._keysVisible[n]), t && t.call(this, e) !== !1 && e.preventDefault())
        }
    }, e.Base.mix(e.AutoCompleteList, [u])
}, "3.18.1", {
    requires: ["autocomplete-list", "base-build"]
});
YUI.add("autocomplete-list", function(e, t) {
    var n = e.Lang,
        r = e.Node,
        i = e.Array,
        s = e.UA.ie && e.UA.ie < 7,
        o = 9,
        u = "_CLASS_ITEM",
        a = "_CLASS_ITEM_ACTIVE",
        f = "_CLASS_ITEM_HOVER",
        l = "_SELECTOR_ITEM",
        c = "activeItem",
        h = "alwaysShowList",
        p = "circular",
        d = "hoveredItem",
        v = "id",
        m = "item",
        g = "list",
        y = "result",
        b = "results",
        w = "visible",
        E = "width",
        S = "select",
        x = e.Base.create("autocompleteList", e.Widget, [e.AutoCompleteBase, e.WidgetPosition, e.WidgetPositionAlign], {
            ARIA_TEMPLATE: "<div/>",
            ITEM_TEMPLATE: "<li/>",
            LIST_TEMPLATE: "<ul/>",
            UI_EVENTS: function() {
                var t = e.merge(e.Node.DOM_EVENTS);
                return delete t.valuechange, delete t.valueChange, t
            }(),
            initializer: function() {
                var t = this.get("inputNode");
                if (!t) {
                    e.error("No inputNode specified.");
                    return
                }
                this._inputNode = t, this._listEvents = [], this.DEF_PARENT_NODE = t.get("parentNode"), this[u] = this.getClassName(m), this[a] = this.getClassName(m, "active"), this[f] = this.getClassName(m, "hover"), this[l] = "." + this[u], this.publish(S, {
                    defaultFn: this._defSelectFn
                })
            },
            destructor: function() {
                while (this._listEvents.length) this._listEvents.pop().detach();
                this._ariaNode && this._ariaNode.remove().destroy(!0)
            },
            bindUI: function() {
                this._bindInput(), this._bindList()
            },
            renderUI: function() {
                var t = this._createAriaNode(),
                    n = this.get("boundingBox"),
                    r = this.get("contentBox"),
                    i = this._inputNode,
                    o = this._createListNode(),
                    u = i.get("parentNode");
                i.addClass(this.getClassName("input")).setAttrs({
                    "aria-autocomplete": g,
                    "aria-expanded": !1,
                    "aria-owns": o.get("id")
                }), u.append(t), s && n.plug(e.Plugin.Shim), this._ariaNode = t, this._boundingBox = n, this._contentBox = r, this._listNode = o, this._parentNode = u
            },
            syncUI: function() {
                this._syncResults(), this._syncVisibility()
            },
            hide: function() {
                return this.get(h) ? this : this.set(w, !1)
            },
            selectItem: function(e, t) {
                if (e) {
                    if (!e.hasClass(this[u])) return this
                } else {
                    e = this.get(c);
                    if (!e) return this
                }
                return this.fire(S, {
                    itemNode: e,
                    originEvent: t || null,
                    result: e.getData(y)
                }), this
            },
            _activateNextItem: function() {
                var e = this.get(c),
                    t;
                return e ? t = e.next(this[l]) || (this.get(p) ? null : e) : t = this._getFirstItemNode(), this.set(c, t), this
            },
            _activatePrevItem: function() {
                var e = this.get(c),
                    t = e ? e.previous(this[l]) : this.get(p) && this._getLastItemNode();
                return this.set(c, t || null), this
            },
            _add: function(t) {
                var r = [];
                return i.each(n.isArray(t) ? t : [t], function(e) {
                    r.push(this._createItemNode(e).setData(y, e))
                }, this), r = e.all(r), this._listNode.append(r.toFrag()), r
            },
            _ariaSay: function(e, t) {
                var r = this.get("strings." + e);
                this._ariaNode.set("text", t ? n.sub(r, t) : r)
            },
            _bindInput: function() {
                var e = this._inputNode,
                    t, n, r;
                this.get("align") === null && (r = this.get("tokenInput"), t = r && r.get("boundingBox") || e, this.set("align", {
                    node: t,
                    points: ["tl", "bl"]
                }), !this.get(E) && (n = t.get("offsetWidth")) && this.set(E, n)), this._listEvents = this._listEvents.concat([e.after("blur", this._afterListInputBlur, this), e.after("focus", this._afterListInputFocus, this)])
            },
            _bindList: function() {
                this._listEvents = this._listEvents.concat([e.one("doc").after("click", this._afterDocClick, this), e.one("win").after("windowresize", this._syncPosition, this), this.after({
                    mouseover: this._afterMouseOver,
                    mouseout: this._afterMouseOut,
                    activeItemChange: this._afterActiveItemChange,
                    alwaysShowListChange: this._afterAlwaysShowListChange,
                    hoveredItemChange: this._afterHoveredItemChange,
                    resultsChange: this._afterResultsChange,
                    visibleChange: this._afterVisibleChange
                }), this._listNode.delegate("click", this._onItemClick, this[l], this)])
            },
            _clear: function() {
                this.set(c, null), this._set(d, null), this._listNode.get("children").remove(!0)
            },
            _createAriaNode: function() {
                var e = r.create(this.ARIA_TEMPLATE);
                return e.addClass(this.getClassName("aria")).setAttrs({
                    "aria-live": "polite",
                    role: "status"
                })
            },
            _createItemNode: function(t) {
                var n = r.create(this.ITEM_TEMPLATE);
                return n.addClass(this[u]).setAttrs({
                    id: e.stamp(n),
                    role: "option"
                }).setAttribute("data-text", t.text).append(t.display)
            },
            _createListNode: function() {
                var t = this.get("listNode") || r.create(this.LIST_TEMPLATE);
                return t.addClass(this.getClassName(g)).setAttrs({
                    id: e.stamp(t),
                    role: "listbox"
                }), this._set("listNode", t), this.get("contentBox").append(t), t
            },
            _getFirstItemNode: function() {
                return this._listNode.one(this[l])
            },
            _getLastItemNode: function() {
                return this._listNode.one(this[l] + ":last-child")
            },
            _syncPosition: function() {
                this._syncUIPosAlign(), this._syncShim()
            },
            _syncResults: function(e) {
                e || (e = this.get(b)), this._clear(), e.length && (this._add(e), this._ariaSay("items_available")), this._syncPosition(), this.get("activateFirstItem") && !this.get(c) && this.set(c, this._getFirstItemNode())
            },
            _syncShim: s ? function() {
                var e = this._boundingBox.shim;
                e && e.sync()
            } : function() {},
            _syncVisibility: function(t) {
                this.get(h) && (t = !0, this.set(w, t)), typeof t == "undefined" && (t = this.get(w)), this._inputNode.set("aria-expanded", t), this._boundingBox.set("aria-hidden", !t), t ? this._syncPosition() : (this.set(c, null), this._set(d, null), this._boundingBox.get("offsetWidth")), e.UA.ie === 7 && e.one("body").addClass("yui3-ie7-sucks").removeClass("yui3-ie7-sucks")
            },
            _afterActiveItemChange: function(t) {
                var n = this._inputNode,
                    r = t.newVal,
                    i = t.prevVal,
                    s;
                i && i._node && i.removeClass(this[a]), r ? (r.addClass(this[a]), n.set("aria-activedescendant", r.get(v))) : n.removeAttribute("aria-activedescendant"), this.get("scrollIntoView") && (s = r || n, (!s.inRegion(e.DOM.viewportRegion(), !0) || !s.inRegion(this._contentBox, !0)) && s.scrollIntoView())
            },
            _afterAlwaysShowListChange: function(e) {
                this.set(w, e.newVal || this.get(b).length > 0)
            },
            _afterDocClick: function(e) {
                var t = this._boundingBox,
                    n = e.target;
                n !== this._inputNode && n !== t && !n.ancestor("#" + t.get("id"), !0) && this.hide()
            },
            _afterHoveredItemChange: function(e) {
                var t = e.newVal,
                    n = e.prevVal;
                n && n.removeClass(this[f]), t && t.addClass(this[f])
            },
            _afterListInputBlur: function() {
                this._listInputFocused = !1, this.get(w) && !this._mouseOverList && (this._lastInputKey !== o || !this.get("tabSelect") || !this.get(c)) && this.hide()
            },
            _afterListInputFocus: function() {
                this._listInputFocused = !0
            },
            _afterMouseOver: function(e) {
                var t = e.domEvent.target.ancestor(this[l], !0);
                this._mouseOverList = !0, t && this._set(d, t)
            },
            _afterMouseOut: function() {
                this._mouseOverList = !1, this._set(d, null)
            },
            _afterResultsChange: function(e) {
                this._syncResults(e.newVal), this.get(h) || this.set(w, !!e.newVal.length)
            },
            _afterVisibleChange: function(e) {
                this._syncVisibility(!!e.newVal)
            },
            _onItemClick: function(e) {
                var t = e.currentTarget;
                this.set(c, t), this.selectItem(t, e)
            },
            _defSelectFn: function(e) {
                var t = e.result.text;
                this._inputNode.focus(), this._updateValue(t), this._ariaSay("item_selected", {
                    item: t
                }), this.hide()
            }
        }, {
            ATTRS: {
                activateFirstItem: {
                    value: !1
                },
                activeItem: {
                    setter: e.one,
                    value: null
                },
                alwaysShowList: {
                    value: !1
                },
                circular: {
                    value: !0
                },
                hoveredItem: {
                    readOnly: !0,
                    value: null
                },
                listNode: {
                    writeOnce: "initOnly",
                    value: null
                },
                scrollIntoView: {
                    value: !1
                },
                strings: {
                    valueFn: function() {
                        return e.Intl.get("autocomplete-list")
                    }
                },
                tabSelect: {
                    value: !0
                },
                visible: {
                    value: !1
                }
            },
            CSS_PREFIX: e.ClassNameManager.getClassName("aclist")
        });
    e.AutoCompleteList = x, e.AutoComplete = x
}, "3.18.1", {
    lang: ["en", "es", "hu", "it"],
    requires: ["autocomplete-base", "event-resize", "node-screen", "selector-css3", "shim-plugin", "widget", "widget-position", "widget-position-align"],
    skinnable: !0
});
YUI.add("autocomplete-plugin", function(e, t) {
    function r(e) {
        e.inputNode = e.host, !e.render && e.render !== !1 && (e.render = !0), r.superclass.constructor.apply(this, arguments)
    }
    var n = e.Plugin;
    e.extend(r, e.AutoCompleteList, {}, {
        NAME: "autocompleteListPlugin",
        NS: "ac",
        CSS_PREFIX: e.ClassNameManager.getClassName("aclist")
    }), n.AutoComplete = r, n.AutoCompleteList = r
}, "3.18.1", {
    requires: ["autocomplete-list", "node-pluginhost"]
});
YUI.add("autocomplete-sources", function(e, t) {
    var n = e.AutoCompleteBase,
        r = e.Lang,
        i = "_sourceSuccess",
        s = "maxResults",
        o = "requestTemplate",
        u = "resultListLocator";
    e.mix(n.prototype, {
        _YQL_SOURCE_REGEX: /^(?:select|set|use)\s+/i,
        _beforeCreateObjectSource: function(t) {
            return t instanceof e.Node && t.get("nodeName").toLowerCase() === "select" ? this._createSelectSource(t) : e.JSONPRequest && t instanceof e.JSONPRequest ? this._createJSONPSource(t) : this._createObjectSource(t)
        },
        _createIOSource: function(t) {
            function a(n) {
                var o = n.request;
                if (r._cache && o in r._cache) {
                    r[i](r._cache[o], n);
                    return
                }
                s && s.isInProgress() && s.abort(), s = e.io(r._getXHRUrl(t, n), {
                    on: {
                        success: function(t, s) {
                            var u;
                            try {
                                u = e.JSON.parse(s.responseText)
                            } catch (a) {
                                e.error("JSON parse error", a)
                            }
                            u && (r._cache && (r._cache[o] = u), r[i](u, n))
                        }
                    }
                })
            }
            var n = {
                    type: "io"
                },
                r = this,
                s, o, u;
            return n.sendRequest = function(t) {
                o = t;
                if (u) return;
                u = !0, e.use("io-base", "json-parse", function() {
                    n.sendRequest = a, a(o)
                })
            }, n
        },
        _createJSONPSource: function(t) {
            function u(e) {
                var n = e.request,
                    s = e.query;
                if (r._cache && n in r._cache) {
                    r[i](r._cache[n], e);
                    return
                }
                t._config.on.success = function(t) {
                    r._cache && (r._cache[n] = t), r[i](t, e)
                }, t.send(s)
            }
            var n = {
                    type: "jsonp"
                },
                r = this,
                s, o;
            return n.sendRequest = function(i) {
                s = i;
                if (o) return;
                o = !0, e.use("jsonp", function() {
                    t instanceof e.JSONPRequest || (t = new e.JSONPRequest(t, {
                        format: e.bind(r._jsonpFormatter, r)
                    })), n.sendRequest = u, u(s)
                })
            }, n
        },
        _createSelectSource: function(e) {
            var t = this;
            return {
                type: "select",
                sendRequest: function(n) {
                    var r = [];
                    e.get("options").each(function(e) {
                        r.push({
                            html: e.get("innerHTML"),
                            index: e.get("index"),
                            node: e,
                            selected: e.get("selected"),
                            text: e.get("text"),
                            value: e.get("value")
                        })
                    }), t[i](r, n)
                }
            }
        },
        _createStringSource: function(e) {
            return this._YQL_SOURCE_REGEX.test(e) ? this._createYQLSource(e) : e.indexOf("{callback}") !== -1 ? this._createJSONPSource(e) : this._createIOSource(e)
        },
        _createYQLSource: function(t) {
            function c(o) {
                var u = o.query,
                    a = n.get("yqlEnv"),
                    f = n.get(s),
                    c, h, p;
                p = r.sub(t, {
                    maxResults: f > 0 ? f : 1e3,
                    request: o.request,
                    query: u
                });
                if (n._cache && p in n._cache) {
                    n[i](n._cache[p], o);
                    return
                }
                c = function(e) {
                    n._cache && (n._cache[p] = e), n[i](e, o)
                }, h = {
                    proto: n.get("yqlProtocol")
                }, l ? (l._callback = c, l._opts = h, l._params.q = p, a && (l._params.env = a)) : l = new e.YQLRequest(p, {
                    on: {
                        success: c
                    },
                    allowCache: !1
                }, a ? {
                    env: a
                } : null, h), l.send()
            }
            var n = this,
                o = {
                    type: "yql"
                },
                a, f, l;
            return n.get(u) || n.set(u, n._defaultYQLLocator), o.sendRequest = function(t) {
                a = t, f || (f = !0, e.use("yql", function() {
                    o.sendRequest = c, c(a)
                }))
            }, o
        },
        _defaultYQLLocator: function(t) {
            var n = t && t.query && t.query.results,
                i;
            return n && r.isObject(n) ? (i = e.Object.values(n) || [], n = i.length === 1 ? i[0] : i, r.isArray(n) || (n = [n])) : n = [], n
        },
        _getXHRUrl: function(e, t) {
            var n = this.get(s);
            return t.query !== t.request && (e += t.request), r.sub(e, {
                maxResults: n > 0 ? n : 1e3,
                query: encodeURIComponent(t.query)
            })
        },
        _jsonpFormatter: function(e, t, n) {
            var i = this.get(s),
                u = this.get(o);
            return u && (e += u(n)), r.sub(e, {
                callback: t,
                maxResults: i > 0 ? i : 1e3,
                query: encodeURIComponent(n)
            })
        }
    }), e.mix(n.ATTRS, {
        yqlEnv: {
            value: null
        },
        yqlProtocol: {
            value: "http"
        }
    }), e.mix(n.SOURCE_TYPES, {
        io: "_createIOSource",
        jsonp: "_createJSONPSource",
        object: "_beforeCreateObjectSource",
        select: "_createSelectSource",
        string: "_createStringSource",
        yql: "_createYQLSource"
    }, !0)
}, "3.18.1", {
    optional: ["io-base", "json-parse", "jsonp", "yql"],
    requires: ["autocomplete-base"]
});
YUI.add("base-base", function(e, t) {
    function o() {
        i.apply(this, arguments), s.apply(this, arguments), r.apply(this, arguments)
    }
    var n = e.AttributeCore,
        r = e.AttributeExtras,
        i = e.BaseCore,
        s = e.BaseObservable;
    o._ATTR_CFG = i._ATTR_CFG.concat(s._ATTR_CFG), o._NON_ATTRS_CFG = i._NON_ATTRS_CFG.concat(s._NON_ATTRS_CFG), o.NAME = "base", o.ATTRS = n.protectAttrs(i.ATTRS), o.modifyAttrs = i.modifyAttrs, e.mix(o, i, !1, null, 1), e.mix(o, r, !1, null, 1), e.mix(o, s, !0, null, 1), o.prototype.constructor = o, e.Base = o
}, "3.18.1", {
    requires: ["attribute-base", "base-core", "base-observable"]
});
YUI.add("base-build", function(e, t) {
    function f(e, t, n) {
        n[e] && (t[e] = (t[e] || []).concat(n[e]))
    }

    function l(e, t, n) {
        n._ATTR_CFG && (t._ATTR_CFG_HASH = null, f.apply(null, arguments))
    }

    function c(e, t, r) {
        n.modifyAttrs(t, r.ATTRS)
    }
    var n = e.BaseCore,
        r = e.Base,
        i = e.Lang,
        s = "initializer",
        o = "destructor",
        u = ["_PLUG", "_UNPLUG"],
        a;
    r._build = function(t, n, i, u, a, f) {
        var l = r._build,
            c = l._ctor(n, f),
            h = l._cfg(n, f, i),
            p = l._mixCust,
            d = c._yuibuild.dynamic,
            v, m, g, y, b, w;
        for (v = 0, m = i.length; v < m; v++) g = i[v], y = g.prototype, b = y[s], w = y[o], delete y[s], delete y[o], e.mix(c, g, !0, null, 1), p(c, g, h), b && (y[s] = b), w && (y[o] = w), c._yuibuild.exts.push(g);
        return u && e.mix(c.prototype, u, !0), a && (e.mix(c, l._clean(a, h), !0), p(c, a, h)), c.prototype.hasImpl = l._impl, d && (c.NAME = t, c.prototype.constructor = c, c.modifyAttrs = n.modifyAttrs), c
    }, a = r._build, e.mix(a, {
        _mixCust: function(t, n, r) {
            var s, o, u, a, f, l;
            r && (s = r.aggregates, o = r.custom, u = r.statics), u && e.mix(t, n, !0, u);
            if (s)
                for (l = 0, f = s.length; l < f; l++) a = s[l], !t.hasOwnProperty(a) && n.hasOwnProperty(a) && (t[a] = i.isArray(n[a]) ? [] : {}), e.aggregate(t, n, !0, [a]);
            if (o)
                for (l in o) o.hasOwnProperty(l) && o[l](l, t, n)
        },
        _tmpl: function(t) {
            function n() {
                n.superclass.constructor.apply(this, arguments)
            }
            return e.extend(n, t), n
        },
        _impl: function(e) {
            var t = this._getClasses(),
                n, r, i, s, o, u;
            for (n = 0, r = t.length; n < r; n++) {
                i = t[n];
                if (i._yuibuild) {
                    s = i._yuibuild.exts, o = s.length;
                    for (u = 0; u < o; u++)
                        if (s[u] === e) return !0
                }
            }
            return !1
        },
        _ctor: function(e, t) {
            var n = t && !1 === t.dynamic ? !1 : !0,
                r = n ? a._tmpl(e) : e,
                i = r._yuibuild;
            return i || (i = r._yuibuild = {}), i.id = i.id || null, i.exts = i.exts || [], i.dynamic = n, r
        },
        _cfg: function(t, n, r) {
            var i = [],
                s = {},
                o = [],
                u, a = n && n.aggregates,
                f = n && n.custom,
                l = n && n.statics,
                c = t,
                h, p;
            while (c && c.prototype) u = c._buildCfg, u && (u.aggregates && (i = i.concat(u.aggregates)), u.custom && e.mix(s, u.custom, !0), u.statics && (o = o.concat(u.statics))), c = c.superclass ? c.superclass.constructor : null;
            if (r)
                for (h = 0, p = r.length; h < p; h++) c = r[h], u = c._buildCfg, u && (u.aggregates && (i = i.concat(u.aggregates)), u.custom && e.mix(s, u.custom, !0), u.statics && (o = o.concat(u.statics)));
            return a && (i = i.concat(a)), f && e.mix(s, n.cfgBuild, !0), l && (o = o.concat(l)), {
                aggregates: i,
                custom: s,
                statics: o
            }
        },
        _clean: function(t, n) {
            var r, i, s, o = e.merge(t),
                u = n.aggregates,
                a = n.custom;
            for (r in a) o.hasOwnProperty(r) && delete o[r];
            for (i = 0, s = u.length; i < s; i++) r = u[i], o.hasOwnProperty(r) && delete o[r];
            return o
        }
    }), r.build = function(e, t, n, r) {
        return a(e, t, n, null, null, r)
    }, r.create = function(e, t, n, r, i) {
        return a(e, t, n, r, i)
    }, r.mix = function(e, t) {
        return e._CACHED_CLASS_DATA && (e._CACHED_CLASS_DATA = null), a(null, e, t, null, null, {
            dynamic: !1
        })
    }, n._buildCfg = {
        aggregates: u.concat(),
        custom: {
            ATTRS: c,
            _ATTR_CFG: l,
            _NON_ATTRS_CFG: f
        }
    }, r._buildCfg = {
        aggregates: u.concat(),
        custom: {
            ATTRS: c,
            _ATTR_CFG: l,
            _NON_ATTRS_CFG: f
        }
    }
}, "3.18.1", {
    requires: ["base-base"]
});
YUI.add("base-core", function(e, t) {
    function v(e) {
        this._BaseInvoked || (this._BaseInvoked = !0, this._initBase(e))
    }
    var n = e.Object,
        r = e.Lang,
        i = ".",
        s = "initialized",
        o = "destroyed",
        u = "initializer",
        a = "value",
        f = Object.prototype.constructor,
        l = "deep",
        c = "shallow",
        h = "destructor",
        p = e.AttributeCore,
        d = function(e, t, n) {
            var r;
            for (r in t) n[r] && (e[r] = t[r]);
            return e
        };
    v._ATTR_CFG = p._ATTR_CFG.concat("cloneDefaultValue"), v._NON_ATTRS_CFG = ["plugins"], v.NAME = "baseCore", v.ATTRS = {
        initialized: {
            readOnly: !0,
            value: !1
        },
        destroyed: {
            readOnly: !0,
            value: !1
        }
    }, v.modifyAttrs = function(t, n) {
        typeof t != "function" && (n = t, t = this);
        var r, i, s;
        r = t.ATTRS || (t.ATTRS = {});
        if (n) {
            t._CACHED_CLASS_DATA = null;
            for (s in n) n.hasOwnProperty(s) && (i = r[s] || (r[s] = {}), e.mix(i, n[s], !0))
        }
    }, v.prototype = {
        _initBase: function(t) {
            e.stamp(this), this._initAttribute(t);
            var n = e.Plugin && e.Plugin.Host;
            this._initPlugins && n && n.call(this), this._lazyAddAttrs !== !1 && (this._lazyAddAttrs = !0), this.name = this.constructor.NAME, this.init.apply(this, arguments)
        },
        _initAttribute: function() {
            p.call(this)
        },
        init: function(e) {
            return this._baseInit(e), this
        },
        _baseInit: function(e) {
            this._initHierarchy(e), this._initPlugins && this._initPlugins(e), this._set(s, !0)
        },
        destroy: function() {
            return this._baseDestroy(), this
        },
        _baseDestroy: function() {
            this._destroyPlugins && this._destroyPlugins(), this._destroyHierarchy(), this._set(o, !0)
        },
        _getClasses: function() {
            return this._classes || this._initHierarchyData(), this._classes
        },
        _getAttrCfgs: function() {
            return this._attrs || this._initHierarchyData(), this._attrs
        },
        _getInstanceAttrCfgs: function(e) {
            var t = {},
                r, i, s, o, u, a, f, l = e._subAttrs,
                c = this._attrCfgHash();
            for (a in e)
                if (e.hasOwnProperty(a) && a !== "_subAttrs") {
                    f = e[a], r = t[a] = d({}, f, c), i = r.value, i && typeof i == "object" && this._cloneDefaultValue(a, r);
                    if (l && l.hasOwnProperty(a)) {
                        o = e._subAttrs[a];
                        for (u in o) s = o[u], s.path && n.setValue(r.value, s.path, s.value)
                    }
                } return t
        },
        _filterAdHocAttrs: function(e, t) {
            var n, r = this._nonAttrs,
                i;
            if (t) {
                n = {};
                for (i in t) !e[i] && !r[i] && t.hasOwnProperty(i) && (n[i] = {
                    value: t[i]
                })
            }
            return n
        },
        _initHierarchyData: function() {
            var e = this.constructor,
                t = e._CACHED_CLASS_DATA,
                n, r, i, s, o, u = !e._ATTR_CFG_HASH,
                a, f = {},
                l = [],
                c = [];
            n = e;
            if (!t) {
                while (n) {
                    l[l.length] = n, n.ATTRS && (c[c.length] = n.ATTRS);
                    if (u) {
                        s = n._ATTR_CFG, o = o || {};
                        if (s)
                            for (r = 0, i = s.length; r < i; r += 1) o[s[r]] = !0
                    }
                    a = n._NON_ATTRS_CFG;
                    if (a)
                        for (r = 0, i = a.length; r < i; r++) f[a[r]] = !0;
                    n = n.superclass ? n.superclass.constructor : null
                }
                u && (e._ATTR_CFG_HASH = o), t = e._CACHED_CLASS_DATA = {
                    classes: l,
                    nonAttrs: f,
                    attrs: this._aggregateAttrs(c)
                }
            }
            this._classes = t.classes, this._attrs = t.attrs, this._nonAttrs = t.nonAttrs
        },
        _attrCfgHash: function() {
            return this.constructor._ATTR_CFG_HASH
        },
        _cloneDefaultValue: function(t, n) {
            var i = n.value,
                s = n.cloneDefaultValue;
            s === l || s === !0 ? n.value = e.clone(i) : s === c ? n.value = e.merge(i) : s === undefined && (f === i.constructor || r.isArray(i)) && (n.value = e.clone(i))
        },
        _aggregateAttrs: function(e) {
            var t, n, r, s, o, u, f = this._attrCfgHash(),
                l, c = {};
            if (e)
                for (u = e.length - 1; u >= 0; --u) {
                    n = e[u];
                    for (t in n) n.hasOwnProperty(t) && (s = d({}, n[t], f), o = null, t.indexOf(i) !== -1 && (o = t.split(i), t = o.shift()), l = c[t], o && l && l.value ? (r = c._subAttrs, r || (r = c._subAttrs = {}), r[t] || (r[t] = {}), r[t][o.join(i)] = {
                        value: s.value,
                        path: o
                    }) : o || (l ? (l.valueFn && a in s && (l.valueFn = null), d(l, s, f)) : c[t] = s))
                }
            return c
        },
        _initHierarchy: function(e) {
            var t = this._lazyAddAttrs,
                n, r, i, s, o, a, f, l, c, h, p, d = [],
                v = this._getClasses(),
                m = this._getAttrCfgs(),
                g = v.length - 1;
            for (o = g; o >= 0; o--) {
                n = v[o], r = n.prototype, h = n._yuibuild && n._yuibuild.exts, r.hasOwnProperty(u) && (d[d.length] = r.initializer);
                if (h)
                    for (a = 0, f = h.length; a < f; a++) l = h[a], l.apply(this, arguments), c = l.prototype, c.hasOwnProperty(u) && (d[d.length] = c.initializer)
            }
            p = this._getInstanceAttrCfgs(m), this._preAddAttrs && this._preAddAttrs(p, e, t), this._allowAdHocAttrs && this.addAttrs(this._filterAdHocAttrs(m, e), e, t), this.addAttrs(p, e, t);
            for (i = 0, s = d.length; i < s; i++) d[i].apply(this, arguments)
        },
        _destroyHierarchy: function() {
            var e, t, n, r, i, s, o, u, a = this._getClasses();
            for (n = 0, r = a.length; n < r; n++) {
                e = a[n], t = e.prototype, o = e._yuibuild && e._yuibuild.exts;
                if (o)
                    for (i = 0, s = o.length; i < s; i++) u = o[i].prototype, u.hasOwnProperty(h) && u.destructor.apply(this, arguments);
                t.hasOwnProperty(h) && t.destructor.apply(this, arguments)
            }
        },
        toString: function() {
            return this.name + "[" + e.stamp(this, !0) + "]"
        }
    }, e.mix(v, p, !1, null, 1), v.prototype.constructor = v, e.BaseCore = v
}, "3.18.1", {
    requires: ["attribute-core"]
});
YUI.add("base-observable", function(e, t) {
    function f() {}
    var n = e.Lang,
        r = "destroy",
        i = "init",
        s = "bubbleTargets",
        o = "_bubbleTargets",
        u = e.AttributeObservable,
        a = e.BaseCore;
    f._ATTR_CFG = u._ATTR_CFG.concat(), f._NON_ATTRS_CFG = ["on", "after", "bubbleTargets"], f.prototype = {
        _initAttribute: function() {
            a.prototype._initAttribute.apply(this, arguments), u.call(this), this._eventPrefix = this.constructor.EVENT_PREFIX || this.constructor.NAME, this._yuievt.config.prefix = this._eventPrefix
        },
        init: function(e) {
            var t = this._getFullType(i),
                n = this._publish(t);
            return n.emitFacade = !0, n.fireOnce = !0, n.defaultTargetOnly = !0, n.defaultFn = this._defInitFn, this._preInitEventCfg(e), n._hasPotentialSubscribers() ? this.fire(t, {
                cfg: e
            }) : (this._baseInit(e), n.fired = !0, n.firedWith = [{
                cfg: e
            }]), this
        },
        _preInitEventCfg: function(e) {
            e && (e.on && this.on(e.on), e.after && this.after(e.after));
            var t, r, i, u = e && s in e;
            if (u || o in this) {
                i = u ? e && e.bubbleTargets : this._bubbleTargets;
                if (n.isArray(i))
                    for (t = 0, r = i.length; t < r; t++) this.addTarget(i[t]);
                else i && this.addTarget(i)
            }
        },
        destroy: function() {
            return this.publish(r, {
                fireOnce: !0,
                defaultTargetOnly: !0,
                defaultFn: this._defDestroyFn
            }), this.fire(r), this.detachAll(), this
        },
        _defInitFn: function(e) {
            this._baseInit(e.cfg)
        },
        _defDestroyFn: function(e) {
            this._baseDestroy(e.cfg)
        }
    }, e.mix(f, u, !1, null, 1), e.BaseObservable = f
}, "3.18.1", {
    requires: ["attribute-observable", "base-core"]
});
YUI.add("base-pluginhost", function(e, t) {
    var n = e.Base,
        r = e.Plugin.Host;
    e.mix(n, r, !1, null, 1), n.plug = r.plug, n.unplug = r.unplug
}, "3.18.1", {
    requires: ["base-base", "pluginhost"]
});
YUI.add("classnamemanager", function(e, t) {
    var n = "classNamePrefix",
        r = "classNameDelimiter",
        i = e.config;
    i[n] = i[n] || "yui3", i[r] = i[r] || "-", e.ClassNameManager = function() {
        var t = i[n],
            s = i[r];
        return {
            getClassName: e.cached(function() {
                var n = e.Array(arguments);
                return n[n.length - 1] !== !0 ? n.unshift(t) : n.pop(), n.join(s)
            })
        }
    }()
}, "3.18.1", {
    requires: ["yui-base"]
});
YUI.add("cookie", function(e, t) {
    function h(e) {
        throw new TypeError(e)
    }

    function p(e) {
        (!s(e) || e === "") && h("Cookie name must be a non-empty string.")
    }

    function d(e) {
        (!s(e) || e === "") && h("Subcookie name must be a non-empty string.")
    }
    var n = e.Lang,
        r = e.Object,
        i = null,
        s = n.isString,
        o = n.isObject,
        u = n.isUndefined,
        a = n.isFunction,
        f = encodeURIComponent,
        l = decodeURIComponent,
        c = e.config.doc;
    e.Cookie = {
        _createCookieString: function(e, t, n, r) {
            r = r || {};
            var i = f(e) + "=" + (n ? f(t) : t),
                u = r.expires,
                a = r.path,
                l = r.domain;
            return o(r) && (u instanceof Date && (i += "; expires=" + u.toUTCString()), s(a) && a !== "" && (i += "; path=" + a), s(l) && l !== "" && (i += "; domain=" + l), r.secure === !0 && (i += "; secure")), i
        },
        _createCookieHashString: function(e) {
            o(e) || h("Cookie._createCookieHashString(): Argument must be an object.");
            var t = [];
            return r.each(e, function(e, n) {
                !a(e) && !u(e) && t.push(f(n) + "=" + f(String(e)))
            }), t.join("&")
        },
        _parseCookieHash: function(e) {
            var t = e.split("&"),
                n = i,
                r = {};
            if (e.length)
                for (var s = 0, o = t.length; s < o; s++) n = t[s].split("="), r[l(n[0])] = l(n[1]);
            return r
        },
        _parseCookieString: function(e, t, n) {
            var r = {};
            if (s(e) && e.length > 0) {
                var o = t === !1 ? function(e) {
                        return e
                    } : l,
                    a = e.split(/;\s/g),
                    f = i,
                    c = i,
                    h = i;
                for (var p = 0, d = a.length; p < d; p++) {
                    h = a[p].match(/([^=]+)=/i);
                    if (h instanceof Array) try {
                        f = l(h[1]), c = o(a[p].substring(h[1].length + 1))
                    } catch (v) {} else f = l(a[p]), c = "";
                    !u(n) && n.reverseCookieLoading ? u(r[f]) && (r[f] = c) : r[f] = c
                }
            }
            return r
        },
        _setDoc: function(e) {
            c = e
        },
        exists: function(e) {
            p(e);
            var t = this._parseCookieString(c.cookie, !0);
            return t.hasOwnProperty(e)
        },
        get: function(e, t) {
            p(e);
            var n, r, s;
            return a(t) ? (s = t, t = {}) : o(t) ? s = t.converter : t = {}, n = this._parseCookieString(c.cookie, !t.raw, t), r = n[e], u(r) ? i : a(s) ? s(r) : r
        },
        getSub: function(e, t, n, r) {
            var s = this.getSubs(e, r);
            return s !== i ? (d(t), u(s[t]) ? i : a(n) ? n(s[t]) : s[t]) : i
        },
        getSubs: function(e, t) {
            p(e);
            var n = this._parseCookieString(c.cookie, !1, t);
            return s(n[e]) ? this._parseCookieHash(n[e]) : i
        },
        remove: function(t, n) {
            return p(t), n = e.merge(n || {}, {
                expires: new Date(0)
            }), this.set(t, "", n)
        },
        removeSub: function(e, t, n) {
            p(e), d(t), n = n || {};
            var r = this.getSubs(e);
            if (o(r) && r.hasOwnProperty(t)) {
                delete r[t];
                if (!n.removeIfEmpty) return this.setSubs(e, r, n);
                for (var i in r)
                    if (r.hasOwnProperty(i) && !a(r[i]) && !u(r[i])) return this.setSubs(e, r, n);
                return this.remove(e, n)
            }
            return ""
        },
        set: function(e, t, n) {
            p(e), u(t) && h("Cookie.set(): Value cannot be undefined."), n = n || {};
            var r = this._createCookieString(e, t, !n.raw, n);
            return c.cookie = r, r
        },
        setSub: function(e, t, n, r) {
            p(e), d(t), u(n) && h("Cookie.setSub(): Subcookie value cannot be undefined.");
            var i = this.getSubs(e);
            return o(i) || (i = {}), i[t] = n, this.setSubs(e, i, r)
        },
        setSubs: function(e, t, n) {
            p(e), o(t) || h("Cookie.setSubs(): Cookie value must be an object.");
            var r = this._createCookieString(e, this._createCookieHashString(t), !1, n);
            return c.cookie = r, r
        }
    }
}, "3.18.1", {
    requires: ["yui-base"]
});
YUI.add("datatype-xml-parse", function(e, t) {
    e.mix(e.namespace("XML"), {
        parse: function(t) {
            var n = null,
                r;
            return typeof t == "string" && (r = e.config.win, r.ActiveXObject !== undefined ? (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = !1, n.loadXML(t)) : r.DOMParser !== undefined ? n = (new DOMParser).parseFromString(t, "text/xml") : r.Windows !== undefined && (n = new Windows.Data.Xml.Dom.XmlDocument, n.loadXml(t))), n === null || n.documentElement === null || n.documentElement.nodeName === "parsererror", n
        }
    }), e.namespace("Parsers").xml = e.XML.parse, e.namespace("DataType"), e.DataType.XML = e.XML
}, "3.18.1");
YUI.add("dom-base", function(e, t) {
    var n = e.config.doc.documentElement,
        r = e.DOM,
        i = "tagName",
        s = "ownerDocument",
        o = "",
        u = e.Features.add,
        a = e.Features.test;
    e.mix(r, {
        getText: n.textContent !== undefined ? function(e) {
            var t = "";
            return e && (t = e.textContent), t || ""
        } : function(e) {
            var t = "";
            return e && (t = e.innerText || e.nodeValue), t || ""
        },
        setText: n.textContent !== undefined ? function(e, t) {
            e && (e.textContent = t)
        } : function(e, t) {
            "innerText" in e ? e.innerText = t : "nodeValue" in e && (e.nodeValue = t)
        },
        CUSTOM_ATTRIBUTES: n.hasAttribute ? {
            htmlFor: "for",
            className: "class"
        } : {
            "for": "htmlFor",
            "class": "className"
        },
        setAttribute: function(e, t, n, i) {
            e && t && e.setAttribute && (t = r.CUSTOM_ATTRIBUTES[t] || t, e.setAttribute(t, n, i))
        },
        getAttribute: function(e, t, n) {
            n = n !== undefined ? n : 2;
            var i = "";
            return e && t && e.getAttribute && (t = r.CUSTOM_ATTRIBUTES[t] || t, i = e.tagName === "BUTTON" && t === "value" ? r.getValue(e) : e.getAttribute(t, n), i === null && (i = "")), i
        },
        VALUE_SETTERS: {},
        VALUE_GETTERS: {},
        getValue: function(e) {
            var t = "",
                n;
            return e && e[i] && (n = r.VALUE_GETTERS[e[i].toLowerCase()], n ? t = n(e) : t = e.value), t === o && (t = o), typeof t == "string" ? t : ""
        },
        setValue: function(e, t) {
            var n;
            e && e[i] && (n = r.VALUE_SETTERS[e[i].toLowerCase()], t = t === null ? "" : t, n ? n(e, t) : e.value = t)
        },
        creators: {}
    }), u("value-set", "select", {
        test: function() {
            var t = e.config.doc.createElement("select");
            return t.innerHTML = "<option>1</option><option>2</option>", t.value = "2", t.value && t.value === "2"
        }
    }), a("value-set", "select") || (r.VALUE_SETTERS.select = function(e, t) {
        for (var n = 0, i = e.getElementsByTagName("option"), s; s = i[n++];)
            if (r.getValue(s) === t) {
                s.selected = !0;
                break
            }
    }), e.mix(r.VALUE_GETTERS, {
        button: function(e) {
            return e.attributes && e.attributes.value ? e.attributes.value.value : ""
        }
    }), e.mix(r.VALUE_SETTERS, {
        button: function(e, t) {
            var n = e.attributes.value;
            n || (n = e[s].createAttribute("value"), e.setAttributeNode(n)), n.value = t
        }
    }), e.mix(r.VALUE_GETTERS, {
        option: function(e) {
            var t = e.attributes;
            return t.value && t.value.specified ? e.value : e.text
        },
        select: function(e) {
            var t = e.value,
                n = e.options;
            return n && n.length && (e.multiple || e.selectedIndex > -1 && (t = r.getValue(n[e.selectedIndex]))), t
        }
    });
    var f, l, c;
    e.mix(e.DOM, {
        hasClass: function(t, n) {
            var r = e.DOM._getRegExp("(?:^|\\s+)" + n + "(?:\\s+|$)");
            return r.test(t.className)
        },
        addClass: function(t, n) {
            e.DOM.hasClass(t, n) || (t.className = e.Lang.trim([t.className, n].join(" ")))
        },
        removeClass: function(t, n) {
            n && l(t, n) && (t.className = e.Lang.trim(t.className.replace(e.DOM._getRegExp("(?:^|\\s+)" + n + "(?:\\s+|$)"), " ")), l(t, n) && c(t, n))
        },
        replaceClass: function(e, t, n) {
            c(e, t), f(e, n)
        },
        toggleClass: function(e, t, n) {
            var r = n !== undefined ? n : !l(e, t);
            r ? f(e, t) : c(e, t)
        }
    }), l = e.DOM.hasClass, c = e.DOM.removeClass, f = e.DOM.addClass;
    var h = /<([a-z]+)/i,
        r = e.DOM,
        u = e.Features.add,
        a = e.Features.test,
        p = {},
        d = function(t, n) {
            var r = e.config.doc.createElement("div"),
                i = !0;
            r.innerHTML = t;
            if (!r.firstChild || r.firstChild.tagName !== n.toUpperCase()) i = !1;
            return i
        },
        v = /(?:\/(?:thead|tfoot|tbody|caption|col|colgroup)>)+\s*<tbody/,
        m = "<table>",
        g = "</table>",
        y;
    e.mix(e.DOM, {
        _fragClones: {},
        _create: function(e, t, n) {
            n = n || "div";
            var i = r._fragClones[n];
            return i ? i = i.cloneNode(!1) : i = r._fragClones[n] = t.createElement(n), i.innerHTML = e, i
        },
        _children: function(e, t) {
            var n = 0,
                r = e.children,
                i, s, o;
            r && r.tags && (t ? r = e.children.tags(t) : s = r.tags("!").length);
            if (!r || !r.tags && t || s) {
                i = r || e.childNodes, r = [];
                while (o = i[n++]) o.nodeType === 1 && (!t || t === o.tagName) && r.push(o)
            }
            return r || []
        },
        create: function(t, n) {
            typeof t == "string" && (t = e.Lang.trim(t)), n = n || e.config.doc;
            var i = h.exec(t),
                s = r._create,
                o = p,
                u = null,
                a, f, l, c;
            return t != undefined && (i && i[1] && (a = o[i[1].toLowerCase()], typeof a == "function" ? s = a : f = a), l = s(t, n, f), c = l.childNodes, c.length === 1 ? u = l.removeChild(c[0]) : c[0] && c[0].className === "yui3-big-dummy" ? (y = l.selectedIndex, c.length === 2 ? u = c[0].nextSibling : (l.removeChild(c[0]), u = r._nl2frag(c, n))) : u = r._nl2frag(c, n)), u
        },
        _nl2frag: function(t, n) {
            var r = null,
                i, s;
            if (t && (t.push || t.item) && t[0]) {
                n = n || t[0].ownerDocument, r = n.createDocumentFragment(), t.item && (t = e.Array(t, 0, !0));
                for (i = 0, s = t.length; i < s; i++) r.appendChild(t[i])
            }
            return r
        },
        addHTML: function(t, n, i) {
            var s = t.parentNode,
                o = 0,
                u, a = n,
                f;
            if (n != undefined)
                if (n.nodeType) f = n;
                else if (typeof n == "string" || typeof n == "number") a = f = r.create(n);
            else if (n[0] && n[0].nodeType) {
                f = e.config.doc.createDocumentFragment();
                while (u = n[o++]) f.appendChild(u)
            }
            if (i)
                if (f && i.parentNode) i.parentNode.insertBefore(f, i);
                else switch (i) {
                    case "replace":
                        while (t.firstChild) t.removeChild(t.firstChild);
                        f && t.appendChild(f);
                        break;
                    case "before":
                        f && s.insertBefore(f, t);
                        break;
                    case "after":
                        f && (t.nextSibling ? s.insertBefore(f, t.nextSibling) : s.appendChild(f));
                        break;
                    default:
                        f && t.appendChild(f)
                } else f && t.appendChild(f);
            return t.nodeName == "SELECT" && y > 0 && (t.selectedIndex = y - 1), a
        },
        wrap: function(t, n) {
            var r = n && n.nodeType ? n : e.DOM.create(n),
                i = r.getElementsByTagName("*");
            i.length && (r = i[i.length - 1]), t.parentNode && t.parentNode.replaceChild(r, t), r.appendChild(t)
        },
        unwrap: function(e) {
            var t = e.parentNode,
                n = t.lastChild,
                r = e,
                i;
            if (t) {
                i = t.parentNode;
                if (i) {
                    e = t.firstChild;
                    while (e !== n) r = e.nextSibling, i.insertBefore(e, t), e = r;
                    i.replaceChild(n, t)
                } else t.removeChild(e)
            }
        }
    }), u("innerhtml", "table", {
        test: function() {
            var t = e.config.doc.createElement("table");
            try {
                t.innerHTML = "<tbody></tbody>"
            } catch (n) {
                return !1
            }
            return t.firstChild && t.firstChild.nodeName === "TBODY"
        }
    }), u("innerhtml-div", "tr", {
        test: function() {
            return d("<tr></tr>", "tr")
        }
    }), u("innerhtml-div", "script", {
        test: function() {
            return d("<script></script>", "script")
        }
    }), a("innerhtml", "table") || (p.tbody = function(t, n) {
        var i = r.create(m + t + g, n),
            s = e.DOM._children(i, "tbody")[0];
        return i.children.length > 1 && s && !v.test(t) && s.parentNode.removeChild(s), i
    }), a("innerhtml-div", "script") || (p.script = function(e, t) {
        var n = t.createElement("div");
        return n.innerHTML = "-" + e, n.removeChild(n.firstChild), n
    }, p.link = p.style = p.script), a("innerhtml-div", "tr") || (e.mix(p, {
        option: function(e, t) {
            return r.create('<select><option class="yui3-big-dummy" selected></option>' + e + "</select>", t)
        },
        tr: function(e, t) {
            return r.create("<tbody>" + e + "</tbody>", t)
        },
        td: function(e, t) {
            return r.create("<tr>" + e + "</tr>", t)
        },
        col: function(e, t) {
            return r.create("<colgroup>" + e + "</colgroup>", t)
        },
        tbody: "table"
    }), e.mix(p, {
        legend: "fieldset",
        th: p.td,
        thead: p.tbody,
        tfoot: p.tbody,
        caption: p.tbody,
        colgroup: p.tbody,
        optgroup: p.option
    })), r.creators = p, e.mix(e.DOM, {
        setWidth: function(t, n) {
            e.DOM._setSize(t, "width", n)
        },
        setHeight: function(t, n) {
            e.DOM._setSize(t, "height", n)
        },
        _setSize: function(e, t, n) {
            n = n > 0 ? n : 0;
            var r = 0;
            e.style[t] = n + "px", r = t === "height" ? e.offsetHeight : e.offsetWidth, r > n && (n -= r - n, n < 0 && (n = 0), e.style[t] = n + "px")
        }
    })
}, "3.18.1", {
    requires: ["dom-core"]
});
YUI.add("dom-core", function(e, t) {
    var n = "nodeType",
        r = "ownerDocument",
        i = "documentElement",
        s = "defaultView",
        o = "parentWindow",
        u = "tagName",
        a = "parentNode",
        f = "previousSibling",
        l = "nextSibling",
        c = "contains",
        h = "compareDocumentPosition",
        p = [],
        d = function() {
            var t = e.config.doc.createElement("div"),
                n = t.appendChild(e.config.doc.createTextNode("")),
                r = !1;
            try {
                r = t.contains(n)
            } catch (i) {}
            return r
        }(),
        v = {
            byId: function(e, t) {
                return v.allById(e, t)[0] || null
            },
            getId: function(e) {
                var t;
                return e.id && !e.id.tagName && !e.id.item ? t = e.id : e.attributes && e.attributes.id && (t = e.attributes.id.value), t
            },
            setId: function(e, t) {
                e.setAttribute ? e.setAttribute("id", t) : e.id = t
            },
            ancestor: function(e, t, n, r) {
                var i = null;
                return n && (i = !t || t(e) ? e : null), i || v.elementByAxis(e, a, t, null, r)
            },
            ancestors: function(e, t, n, r) {
                var i = e,
                    s = [];
                while (i = v.ancestor(i, t, n, r)) {
                    n = !1;
                    if (i) {
                        s.unshift(i);
                        if (r && r(i)) return s
                    }
                }
                return s
            },
            elementByAxis: function(e, t, n, r, i) {
                while (e && (e = e[t])) {
                    if ((r || e[u]) && (!n || n(e))) return e;
                    if (i && i(e)) return null
                }
                return null
            },
            contains: function(e, t) {
                var r = !1;
                if (!t || !e || !t[n] || !e[n]) r = !1;
                else if (e[c] && (t[n] === 1 || d)) r = e[c](t);
                else if (e[h]) {
                    if (e === t || !!(e[h](t) & 16)) r = !0
                } else r = v._bruteContains(e, t);
                return r
            },
            inDoc: function(e, t) {
                var n = !1,
                    s;
                return e && e.nodeType && (t || (t = e[r]), s = t[i], s && s.contains && e.tagName ? n = s.contains(e) : n = v.contains(s, e)), n
            },
            allById: function(t, n) {
                n = n || e.config.doc;
                var r = [],
                    i = [],
                    s, o;
                if (n.querySelectorAll) i = n.querySelectorAll('[id="' + t + '"]');
                else if (n.all) {
                    r = n.all(t);
                    if (r) {
                        r.nodeName && (r.id === t ? (i.push(r), r = p) : r = [r]);
                        if (r.length)
                            for (s = 0; o = r[s++];)(o.id === t || o.attributes && o.attributes.id && o.attributes.id.value === t) && i.push(o)
                    }
                } else i = [v._getDoc(n).getElementById(t)];
                return i
            },
            isWindow: function(e) {
                return !!(e && e.scrollTo && e.document)
            },
            _removeChildNodes: function(e) {
                while (e.firstChild) e.removeChild(e.firstChild)
            },
            siblings: function(e, t) {
                var n = [],
                    r = e;
                while (r = r[f]) r[u] && (!t || t(r)) && n.unshift(r);
                r = e;
                while (r = r[l]) r[u] && (!t || t(r)) && n.push(r);
                return n
            },
            _bruteContains: function(e, t) {
                while (t) {
                    if (e === t) return !0;
                    t = t.parentNode
                }
                return !1
            },
            _getRegExp: function(e, t) {
                return t = t || "", v._regexCache = v._regexCache || {}, v._regexCache[e + t] || (v._regexCache[e + t] = new RegExp(e, t)), v._regexCache[e + t]
            },
            _getDoc: function(t) {
                var i = e.config.doc;
                return t && (i = t[n] === 9 ? t : t[r] || t.document || e.config.doc), i
            },
            _getWin: function(t) {
                var n = v._getDoc(t);
                return n[s] || n[o] || e.config.win
            },
            _batch: function(e, t, n, r, i, s) {
                t = typeof t == "string" ? v[t] : t;
                var o, u = 0,
                    a, f;
                if (t && e)
                    while (a = e[u++]) o = o = t.call(v, a, n, r, i, s), typeof o != "undefined" && (f || (f = []), f.push(o));
                return typeof f != "undefined" ? f : e
            },
            generateID: function(t) {
                var n = t.id;
                return n || (n = e.stamp(t), t.id = n), n
            }
        };
    e.DOM = v
}, "3.18.1", {
    requires: ["oop", "features"]
});
YUI.add("dom-screen", function(e, t) {
    (function(e) {
        var t = "documentElement",
            n = "compatMode",
            r = "position",
            i = "fixed",
            s = "relative",
            o = "left",
            u = "top",
            a = "BackCompat",
            f = "medium",
            l = "borderLeftWidth",
            c = "borderTopWidth",
            h = "getBoundingClientRect",
            p = "getComputedStyle",
            d = e.DOM,
            v = /^t(?:able|d|h)$/i,
            m;
        e.UA.ie && (e.config.doc[n] !== "BackCompat" ? m = t : m = "body"), e.mix(d, {
            winHeight: function(e) {
                var t = d._getWinSize(e).height;
                return t
            },
            winWidth: function(e) {
                var t = d._getWinSize(e).width;
                return t
            },
            docHeight: function(e) {
                var t = d._getDocSize(e).height;
                return Math.max(t, d._getWinSize(e).height)
            },
            docWidth: function(e) {
                var t = d._getDocSize(e).width;
                return Math.max(t, d._getWinSize(e).width)
            },
            docScrollX: function(n, r) {
                r = r || n ? d._getDoc(n) : e.config.doc;
                var i = r.defaultView,
                    s = i ? i.pageXOffset : 0;
                return Math.max(r[t].scrollLeft, r.body.scrollLeft, s)
            },
            docScrollY: function(n, r) {
                r = r || n ? d._getDoc(n) : e.config.doc;
                var i = r.defaultView,
                    s = i ? i.pageYOffset : 0;
                return Math.max(r[t].scrollTop, r.body.scrollTop, s)
            },
            getXY: function() {
                return e.config.doc[t][h] ? function(r) {
                    var i = null,
                        s, o, u, f, l, c, p, v, g, y;
                    if (r && r.tagName) {
                        p = r.ownerDocument, u = p[n], u !== a ? y = p[t] : y = p.body, y.contains ? g = y.contains(r) : g = e.DOM.contains(y, r);
                        if (g) {
                            v = p.defaultView, v && "pageXOffset" in v ? (s = v.pageXOffset, o = v.pageYOffset) : (s = m ? p[m].scrollLeft : d.docScrollX(r, p), o = m ? p[m].scrollTop : d.docScrollY(r, p)), e.UA.ie && (!p.documentMode || p.documentMode < 8 || u === a) && (l = y.clientLeft, c = y.clientTop), f = r[h](), i = [f.left, f.top];
                            if (l || c) i[0] -= l, i[1] -= c;
                            if (o || s)
                                if (!e.UA.ios || e.UA.ios >= 4.2) i[0] += s, i[1] += o
                        } else i = d._getOffset(r)
                    }
                    return i
                } : function(t) {
                    var n = null,
                        s, o, u, a, f;
                    if (t)
                        if (d.inDoc(t)) {
                            n = [t.offsetLeft, t.offsetTop], s = t.ownerDocument, o = t, u = e.UA.gecko || e.UA.webkit > 519 ? !0 : !1;
                            while (o = o.offsetParent) n[0] += o.offsetLeft, n[1] += o.offsetTop, u && (n = d._calcBorders(o, n));
                            if (d.getStyle(t, r) != i) {
                                o = t;
                                while (o = o.parentNode) {
                                    a = o.scrollTop, f = o.scrollLeft, e.UA.gecko && d.getStyle(o, "overflow") !== "visible" && (n = d._calcBorders(o, n));
                                    if (a || f) n[0] -= f, n[1] -= a
                                }
                                n[0] += d.docScrollX(t, s), n[1] += d.docScrollY(t, s)
                            } else n[0] += d.docScrollX(t, s), n[1] += d.docScrollY(t, s)
                        } else n = d._getOffset(t);
                    return n
                }
            }(),
            getScrollbarWidth: e.cached(function() {
                var t = e.config.doc,
                    n = t.createElement("div"),
                    r = t.getElementsByTagName("body")[0],
                    i = .1;
                return r && (n.style.cssText = "position:absolute;visibility:hidden;overflow:scroll;width:20px;", n.appendChild(t.createElement("p")).style.height = "1px", r.insertBefore(n, r.firstChild), i = n.offsetWidth - n.clientWidth, r.removeChild(n)), i
            }, null, .1),
            getX: function(e) {
                return d.getXY(e)[0]
            },
            getY: function(e) {
                return d.getXY(e)[1]
            },
            setXY: function(e, t, n) {
                var i = d.setStyle,
                    a, f, l, c;
                e && t && (a = d.getStyle(e, r), f = d._getOffset(e), a == "static" && (a = s, i(e, r, a)), c = d.getXY(e), t[0] !== null && i(e, o, t[0] - c[0] + f[0] + "px"), t[1] !== null && i(e, u, t[1] - c[1] + f[1] + "px"), n || (l = d.getXY(e), (l[0] !== t[0] || l[1] !== t[1]) && d.setXY(e, t, !0)))
            },
            setX: function(e, t) {
                return d.setXY(e, [t, null])
            },
            setY: function(e, t) {
                return d.setXY(e, [null, t])
            },
            swapXY: function(e, t) {
                var n = d.getXY(e);
                d.setXY(e, d.getXY(t)), d.setXY(t, n)
            },
            _calcBorders: function(t, n) {
                var r = parseInt(d[p](t, c), 10) || 0,
                    i = parseInt(d[p](t, l), 10) || 0;
                return e.UA.gecko && v.test(t.tagName) && (r = 0, i = 0), n[0] += i, n[1] += r, n
            },
            _getWinSize: function(r, i) {
                i = i || r ? d._getDoc(r) : e.config.doc;
                var s = i.defaultView || i.parentWindow,
                    o = i[n],
                    u = s.innerHeight,
                    a = s.innerWidth,
                    f = i[t];
                return o && !e.UA.opera && (o != "CSS1Compat" && (f = i.body), u = f.clientHeight, a = f.clientWidth), {
                    height: u,
                    width: a
                }
            },
            _getDocSize: function(r) {
                var i = r ? d._getDoc(r) : e.config.doc,
                    s = i[t];
                return i[n] != "CSS1Compat" && (s = i.body), {
                    height: s.scrollHeight,
                    width: s.scrollWidth
                }
            }
        })
    })(e),
    function(e) {
        var t = "top",
            n = "right",
            r = "bottom",
            i = "left",
            s = function(e, s) {
                var o = Math.max(e[t], s[t]),
                    u = Math.min(e[n], s[n]),
                    a = Math.min(e[r], s[r]),
                    f = Math.max(e[i], s[i]),
                    l = {};
                return l[t] = o, l[n] = u, l[r] = a, l[i] = f, l
            },
            o = e.DOM;
        e.mix(o, {
            region: function(e) {
                var t = o.getXY(e),
                    n = !1;
                return e && t && (n = o._getRegion(t[1], t[0] + e.offsetWidth, t[1] + e.offsetHeight, t[0])), n
            },
            intersect: function(u, a, f) {
                var l = f || o.region(u),
                    c = {},
                    h = a,
                    p;
                if (h.tagName) c = o.region(h);
                else {
                    if (!e.Lang.isObject(a)) return !1;
                    c = a
                }
                return p = s(c, l), {
                    top: p[t],
                    right: p[n],
                    bottom: p[r],
                    left: p[i],
                    area: (p[r] - p[t]) * (p[n] - p[i]),
                    yoff: p[r] - p[t],
                    xoff: p[n] - p[i],
                    inRegion: o.inRegion(u, a, !1, f)
                }
            },
            inRegion: function(u, a, f, l) {
                var c = {},
                    h = l || o.region(u),
                    p = a,
                    d;
                if (p.tagName) c = o.region(p);
                else {
                    if (!e.Lang.isObject(a)) return !1;
                    c = a
                }
                return f ? h[i] >= c[i] && h[n] <= c[n] && h[t] >= c[t] && h[r] <= c[r] : (d = s(c, h), d[r] >= d[t] && d[n] >= d[i] ? !0 : !1)
            },
            inViewportRegion: function(e, t, n) {
                return o.inRegion(e, o.viewportRegion(e), t, n)
            },
            _getRegion: function(e, s, o, u) {
                var a = {};
                return a[t] = a[1] = e, a[i] = a[0] = u, a[r] = o, a[n] = s, a.width = a[n] - a[i], a.height = a[r] - a[t], a
            },
            viewportRegion: function(t) {
                t = t || e.config.doc.documentElement;
                var n = !1,
                    r, i;
                return t && (r = o.docScrollX(t), i = o.docScrollY(t), n = o._getRegion(i, o.winWidth(t) + r, i + o.winHeight(t), r)), n
            }
        })
    }(e)
}, "3.18.1", {
    requires: ["dom-base", "dom-style"]
});
YUI.add("dom-style", function(e, t) {
    var n = "documentElement",
        r = "defaultView",
        i = "ownerDocument",
        s = "style",
        o = "float",
        u = "cssFloat",
        a = "styleFloat",
        f = "transparent",
        l = "getComputedStyle",
        c = "getBoundingClientRect",
        h = e.config.doc,
        p = e.DOM,
        d, v, m = ["WebkitTransform", "MozTransform", "OTransform", "msTransform", "transform"],
        g = /width|height|top|left|right|bottom|margin|padding/i;
    e.Array.each(m, function(e) {
        e in h[n].style && (d = e, v = e + "Origin")
    }), e.mix(p, {
        DEFAULT_UNIT: "px",
        CUSTOM_STYLES: {},
        setStyle: function(e, t, n, r) {
            r = r || e.style;
            var i = p.CUSTOM_STYLES;
            if (r) {
                n === null || n === "" ? n = "" : !isNaN(Number(n)) && g.test(t) && (n += p.DEFAULT_UNIT);
                if (t in i) {
                    if (i[t].set) {
                        i[t].set(e, n, r);
                        return
                    }
                    typeof i[t] == "string" && (t = i[t])
                } else t === "" && (t = "cssText", n = "");
                r[t] = n
            }
        },
        getStyle: function(e, t, n) {
            n = n || e.style;
            var r = p.CUSTOM_STYLES,
                i = "";
            if (n) {
                if (t in r) {
                    if (r[t].get) return r[t].get(e, t, n);
                    typeof r[t] == "string" && (t = r[t])
                }
                i = n[t], i === "" && (i = p[l](e, t))
            }
            return i
        },
        setStyles: function(t, n) {
            var r = t.style;
            e.each(n, function(e, n) {
                p.setStyle(t, n, e, r)
            }, p)
        },
        getComputedStyle: function(e, t) {
            var n = "",
                o = e[i],
                u;
            return e[s] && o[r] && o[r][l] && (u = o[r][l](e, null), u && (n = u[t])), n
        }
    }), h[n][s][u] !== undefined ? p.CUSTOM_STYLES[o] = u : h[n][s][a] !== undefined && (p.CUSTOM_STYLES[o] = a), e.UA.webkit && (p[l] = function(e, t) {
        var n = e[i][r],
            s = n[l](e, "")[t];
        return s === "rgba(0, 0, 0, 0)" && (s = f), s
    }), e.DOM._getAttrOffset = function(t, n) {
        var r = e.DOM[l](t, n),
            i = t.offsetParent,
            s, o, u;
        return r === "auto" && (s = e.DOM.getStyle(t, "position"), s === "static" || s === "relative" ? r = 0 : i && i[c] && (o = i[c]()[n], u = t[c]()[n], n === "left" || n === "top" ? r = u - o : r = o - t[c]()[n])), r
    }, e.DOM._getOffset = function(e) {
        var t, n = null;
        return e && (t = p.getStyle(e, "position"), n = [parseInt(p[l](e, "left"), 10), parseInt(p[l](e, "top"), 10)], isNaN(n[0]) && (n[0] = parseInt(p.getStyle(e, "left"), 10), isNaN(n[0]) && (n[0] = t === "relative" ? 0 : e.offsetLeft || 0)), isNaN(n[1]) && (n[1] = parseInt(p.getStyle(e, "top"), 10), isNaN(n[1]) && (n[1] = t === "relative" ? 0 : e.offsetTop || 0))), n
    }, d && (p.CUSTOM_STYLES.transform = {
        set: function(e, t, n) {
            n[d] = t
        },
        get: function(e) {
            return p[l](e, d)
        }
    }, p.CUSTOM_STYLES.transformOrigin = {
        set: function(e, t, n) {
            n[v] = t
        },
        get: function(e) {
            return p[l](e, v)
        }
    })
}, "3.18.1", {
    requires: ["dom-base"]
});
YUI.add("escape", function(e, t) {
    var n = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;",
            "`": "&#x60;"
        },
        r = {
            html: function(e) {
                return (e + "").replace(/[&<>"'\/`]/g, r._htmlReplacer)
            },
            regex: function(e) {
                return (e + "").replace(/[\-$\^*()+\[\]{}|\\,.?\s]/g, "\\$&")
            },
            _htmlReplacer: function(e) {
                return n[e]
            }
        };
    r.regexp = r.regex, e.Escape = r
}, "3.18.1", {
    requires: ["yui-base"]
});
YUI.add("event-base", function(e, t) {
    e.publish("domready", {
        fireOnce: !0,
        async: !0
    }), YUI.Env.DOMReady ? e.fire("domready") : e.Do.before(function() {
        e.fire("domready")
    }, YUI.Env, "_ready");
    var n = e.UA,
        r = {},
        i = {
            63232: 38,
            63233: 40,
            63234: 37,
            63235: 39,
            63276: 33,
            63277: 34,
            25: 9,
            63272: 46,
            63273: 36,
            63275: 35
        },
        s = function(t) {
            if (!t) return t;
            try {
                t && 3 == t.nodeType && (t = t.parentNode)
            } catch (n) {
                return null
            }
            return e.one(t)
        },
        o = function(e, t, n) {
            this._event = e, this._currentTarget = t, this._wrapper = n || r, this.init()
        };
    e.extend(o, Object, {
            init: function() {
                var e = this._event,
                    t = this._wrapper.overrides,
                    r = e.pageX,
                    o = e.pageY,
                    u, a = this._currentTarget;
                this.altKey = e.altKey, this.ctrlKey = e.ctrlKey, this.metaKey = e.metaKey, this.shiftKey = e.shiftKey, this.type = t && t.type || e.type, this.clientX = e.clientX, this.clientY = e.clientY, this.pageX = r, this.pageY = o, u = e.keyCode || e.charCode, n.webkit && u in i && (u = i[u]), this.keyCode = u, this.charCode = u, this.which = e.which || e.charCode || u, this.button = this.which, this.target = s(e.target), this.currentTarget = s(a), this.relatedTarget = s(e.relatedTarget);
                if (e.type == "mousewheel" || e.type == "DOMMouseScroll") this.wheelDelta = e.detail ? e.detail * -1 : Math.round(e.wheelDelta / 80) || (e.wheelDelta < 0 ? -1 : 1);
                this._touch && this._touch(e, a, this._wrapper)
            },
            stopPropagation: function() {
                this._event.stopPropagation(), this._wrapper.stopped = 1, this.stopped = 1
            },
            stopImmediatePropagation: function() {
                var e = this._event;
                e.stopImmediatePropagation ? e.stopImmediatePropagation() : this.stopPropagation(), this._wrapper.stopped = 2, this.stopped = 2
            },
            preventDefault: function(e) {
                var t = this._event;
                t.preventDefault(), e && (t.returnValue = e), this._wrapper.prevented = 1, this.prevented = 1
            },
            halt: function(e) {
                e ? this.stopImmediatePropagation() : this.stopPropagation(), this.preventDefault()
            }
        }), o.resolve = s, e.DOM2EventFacade = o, e.DOMEventFacade = o,
        function() {
            e.Env.evt.dom_wrappers = {}, e.Env.evt.dom_map = {};
            var t = e.Env.evt,
                n = e.config,
                r = n.win,
                i = YUI.Env.add,
                s = YUI.Env.remove,
                o = function() {
                    YUI.Env.windowLoaded = !0, e.Event._load(), s(r, "load", o)
                },
                u = function() {
                    e.Event._unload()
                },
                a = "domready",
                f = "~yui|2|compat~",
                l = function(t) {
                    try {
                        return t && typeof t != "string" && e.Lang.isNumber(t.length) && !t.tagName && !e.DOM.isWindow(t)
                    } catch (n) {
                        return !1
                    }
                },
                c = e.CustomEvent.prototype._delete,
                h = function(t) {
                    var n = c.apply(this, arguments);
                    return this.hasSubs() || e.Event._clean(this), n
                },
                p = function() {
                    var n = !1,
                        o = 0,
                        c = [],
                        d = t.dom_wrappers,
                        v = null,
                        m = t.dom_map;
                    return {
                        POLL_RETRYS: 1e3,
                        POLL_INTERVAL: 40,
                        lastError: null,
                        _interval: null,
                        _dri: null,
                        DOMReady: !1,
                        startInterval: function() {
                            p._interval || (p._interval = setInterval(p._poll, p.POLL_INTERVAL))
                        },
                        onAvailable: function(t, n, r, i, s, u) {
                            var a = e.Array(t),
                                f, l;
                            for (f = 0; f < a.length; f += 1) c.push({
                                id: a[f],
                                fn: n,
                                obj: r,
                                override: i,
                                checkReady: s,
                                compat: u
                            });
                            return o = this.POLL_RETRYS, setTimeout(p._poll, 0), l = new e.EventHandle({
                                _delete: function() {
                                    if (l.handle) {
                                        l.handle.detach();
                                        return
                                    }
                                    var e, t;
                                    for (e = 0; e < a.length; e++)
                                        for (t = 0; t < c.length; t++) a[e] === c[t].id && c.splice(t, 1)
                                }
                            }), l
                        },
                        onContentReady: function(e, t, n, r, i) {
                            return p.onAvailable(e, t, n, r, !0, i)
                        },
                        attach: function(t, n, r, i) {
                            return p._attach(e.Array(arguments, 0, !0))
                        },
                        _createWrapper: function(t, n, s, o, u) {
                            var a, f = e.stamp(t),
                                l = "event:" + f + n;
                            return !1 === u && (l += "native"), s && (l += "capture"), a = d[l], a || (a = e.publish(l, {
                                silent: !0,
                                bubbles: !1,
                                emitFacade: !1,
                                contextFn: function() {
                                    return o ? a.el : (a.nodeRef = a.nodeRef || e.one(a.el), a.nodeRef)
                                }
                            }), a.overrides = {}, a.el = t, a.key = l, a.domkey = f, a.type = n, a.fn = function(e) {
                                a.fire(p.getEvent(e, t, o || !1 === u))
                            }, a.capture = s, t == r && n == "load" && (a.fireOnce = !0, v = l), a._delete = h, d[l] = a, m[f] = m[f] || {}, m[f][l] = a, i(t, n, a.fn, s)), a
                        },
                        _attach: function(t, n) {
                            var i, s, o, u, a, c = !1,
                                h, d = t[0],
                                v = t[1],
                                m = t[2] || r,
                                g = n && n.facade,
                                y = n && n.capture,
                                b = n && n.overrides;
                            t[t.length - 1] === f && (i = !0);
                            if (!v || !v.call) return !1;
                            if (l(m)) return s = [], e.each(m, function(e, r) {
                                t[2] = e, s.push(p._attach(t.slice(), n))
                            }), new e.EventHandle(s);
                            if (e.Lang.isString(m)) {
                                if (i) o = e.DOM.byId(m);
                                else {
                                    o = e.Selector.query(m);
                                    switch (o.length) {
                                        case 0:
                                            o = null;
                                            break;
                                        case 1:
                                            o = o[0];
                                            break;
                                        default:
                                            return t[2] = o, p._attach(t, n)
                                    }
                                }
                                if (!o) return h = p.onAvailable(m, function() {
                                    h.handle = p._attach(t, n)
                                }, p, !0, !1, i), h;
                                m = o
                            }
                            return m ? (e.Node && e.instanceOf(m, e.Node) && (m = e.Node.getDOMNode(m)), u = p._createWrapper(m, d, y, i, g), b && e.mix(u.overrides, b), m == r && d == "load" && YUI.Env.windowLoaded && (c = !0), i && t.pop(), a = t[3], h = u._on(v, a, t.length > 4 ? t.slice(4) : null), c && u.fire(), h) : !1
                        },
                        detach: function(t, n, r, i) {
                            var s = e.Array(arguments, 0, !0),
                                o, u, a, c, h, v;
                            s[s.length - 1] === f && (o = !0);
                            if (t && t.detach) return t.detach();
                            typeof r == "string" && (o ? r = e.DOM.byId(r) : (r = e.Selector.query(r), u = r.length, u < 1 ? r = null : u == 1 && (r = r[0])));
                            if (!r) return !1;
                            if (r.detach) return s.splice(2, 1), r.detach.apply(r, s);
                            if (l(r)) {
                                a = !0;
                                for (c = 0, u = r.length; c < u; ++c) s[2] = r[c], a = e.Event.detach.apply(e.Event, s) && a;
                                return a
                            }
                            return !t || !n || !n.call ? p.purgeElement(r, !1, t) : (h = "event:" + e.stamp(r) + t, v = d[h], v ? v.detach(n) : !1)
                        },
                        getEvent: function(t, n, i) {
                            var s = t || r.event;
                            return i ? s : new e.DOMEventFacade(s, n, d["event:" + e.stamp(n) + t.type])
                        },
                        generateId: function(t) {
                            return e.DOM.generateID(t)
                        },
                        _isValidCollection: l,
                        _load: function(t) {
                            n || (n = !0, e.fire && e.fire(a), p._poll())
                        },
                        _poll: function() {
                            if (p.locked) return;
                            if (e.UA.ie && !YUI.Env.DOMReady) {
                                p.startInterval();
                                return
                            }
                            p.locked = !0;
                            var t, r, i, s, u, a, f = !n;
                            f || (f = o > 0), u = [], a = function(t, n) {
                                var r, i = n.override;
                                try {
                                    n.compat ? (n.override ? i === !0 ? r = n.obj : r = i : r = t, n.fn.call(r, n.obj)) : (r = n.obj || e.one(t), n.fn.apply(r, e.Lang.isArray(i) ? i : []))
                                } catch (s) {}
                            };
                            for (t = 0, r = c.length; t < r; ++t) i = c[t], i && !i.checkReady && (s = i.compat ? e.DOM.byId(i.id) : e.Selector.query(i.id, null, !0), s ? (a(s, i), c[t] = null) : u.push(i));
                            for (t = 0, r = c.length; t < r; ++t) {
                                i = c[t];
                                if (i && i.checkReady) {
                                    s = i.compat ? e.DOM.byId(i.id) : e.Selector.query(i.id, null, !0);
                                    if (s) {
                                        if (n || s.get && s.get("nextSibling") || s.nextSibling) a(s, i), c[t] = null
                                    } else u.push(i)
                                }
                            }
                            o = u.length === 0 ? 0 : o - 1, f ? p.startInterval() : (clearInterval(p._interval), p._interval = null), p.locked = !1;
                            return
                        },
                        purgeElement: function(t, n, r) {
                            var i = e.Lang.isString(t) ? e.Selector.query(t, null, !0) : t,
                                s = p.getListeners(i, r),
                                o, u, a, f;
                            if (n && i) {
                                s = s || [], a = e.Selector.query("*", i), u = a.length;
                                for (o = 0; o < u; ++o) f = p.getListeners(a[o], r), f && (s = s.concat(f))
                            }
                            if (s)
                                for (o = 0, u = s.length; o < u; ++o) s[o].detachAll()
                        },
                        _clean: function(t) {
                            var n = t.key,
                                r = t.domkey;
                            s(t.el, t.type, t.fn, t.capture), delete d[n], delete e._yuievt.events[n], m[r] && (delete m[r][n], e.Object.size(m[r]) || delete m[r])
                        },
                        getListeners: function(n, r) {
                            var i = e.stamp(n, !0),
                                s = m[i],
                                o = [],
                                u = r ? "event:" + i + r : null,
                                a = t.plugins;
                            return s ? (u ? (a[r] && a[r].eventDef && (u += "_synth"), s[u] && o.push(s[u]), u += "native", s[u] && o.push(s[u])) : e.each(s, function(e, t) {
                                o.push(e)
                            }), o.length ? o : null) : null
                        },
                        _unload: function(t) {
                            e.each(d, function(e, n) {
                                e.type == "unload" && e.fire(t), e.detachAll()
                            }), s(r, "unload", u)
                        },
                        nativeAdd: i,
                        nativeRemove: s
                    }
                }();
            e.Event = p, n.injected || YUI.Env.windowLoaded ? o() : i(r, "load", o);
            if (e.UA.ie) {
                e.on(a, p._poll);
                if (e.UA.ie < 7) try {
                    i(r, "unload", u)
                } catch (d) {}
            }
            p.Custom = e.CustomEvent, p.Subscriber = e.Subscriber, p.Target = e.EventTarget, p.Handle = e.EventHandle, p.Facade = e.EventFacade, p._poll()
        }(), e.Env.evt.plugins.available = {
            on: function(t, n, r, i) {
                var s = arguments.length > 4 ? e.Array(arguments, 4, !0) : null;
                return e.Event.onAvailable.call(e.Event, r, n, i, s)
            }
        }, e.Env.evt.plugins.contentready = {
            on: function(t, n, r, i) {
                var s = arguments.length > 4 ? e.Array(arguments, 4, !0) : null;
                return e.Event.onContentReady.call(e.Event, r, n, i, s)
            }
        }
}, "3.18.1", {
    requires: ["event-custom-base"]
});
YUI.add("event-custom-base", function(e, t) {
    e.Env.evt = {
        handles: {},
        plugins: {}
    };
    var n = 0,
        r = 1,
        i = {
            objs: null,
            before: function(t, r, i, s) {
                var o = t,
                    u;
                return s && (u = [t, s].concat(e.Array(arguments, 4, !0)), o = e.rbind.apply(e, u)), this._inject(n, o, r, i)
            },
            after: function(t, n, i, s) {
                var o = t,
                    u;
                return s && (u = [t, s].concat(e.Array(arguments, 4, !0)), o = e.rbind.apply(e, u)), this._inject(r, o, n, i)
            },
            _inject: function(t, n, r, i) {
                var s = e.stamp(r),
                    o, u;
                return r._yuiaop || (r._yuiaop = {}), o = r._yuiaop, o[i] || (o[i] = new e.Do.Method(r, i), r[i] = function() {
                    return o[i].exec.apply(o[i], arguments)
                }), u = s + e.stamp(n) + i, o[i].register(u, n, t), new e.EventHandle(o[i], u)
            },
            detach: function(e) {
                e.detach && e.detach()
            }
        };
    e.Do = i, i.Method = function(e, t) {
        this.obj = e, this.methodName = t, this.method = e[t], this.before = {}, this.after = {}
    }, i.Method.prototype.register = function(e, t, n) {
        n ? this.after[e] = t : this.before[e] = t
    }, i.Method.prototype._delete = function(e) {
        delete this.before[e], delete this.after[e]
    }, i.Method.prototype.exec = function() {
        var t = e.Array(arguments, 0, !0),
            n, r, s, o = this.before,
            u = this.after,
            a = !1;
        for (n in o)
            if (o.hasOwnProperty(n)) {
                r = o[n].apply(this.obj, t);
                if (r) switch (r.constructor) {
                    case i.Halt:
                        return r.retVal;
                    case i.AlterArgs:
                        t = r.newArgs;
                        break;
                    case i.Prevent:
                        a = !0;
                        break;
                    default:
                }
            } a || (r = this.method.apply(this.obj, t)), i.originalRetVal = r, i.currentRetVal = r;
        for (n in u)
            if (u.hasOwnProperty(n)) {
                s = u[n].apply(this.obj, t);
                if (s && s.constructor === i.Halt) return s.retVal;
                s && s.constructor === i.AlterReturn && (r = s.newRetVal, i.currentRetVal = r)
            } return r
    }, i.AlterArgs = function(e, t) {
        this.msg = e, this.newArgs = t
    }, i.AlterReturn = function(e, t) {
        this.msg = e, this.newRetVal = t
    }, i.Halt = function(e, t) {
        this.msg = e, this.retVal = t
    }, i.Prevent = function(e) {
        this.msg = e
    }, i.Error = i.Halt;
    var s = e.Array,
        o = "after",
        u = ["broadcast", "monitored", "bubbles", "context", "contextFn", "currentTarget", "defaultFn", "defaultTargetOnly", "details", "emitFacade", "fireOnce", "async", "host", "preventable", "preventedFn", "queuable", "silent", "stoppedFn", "target", "type"],
        a = s.hash(u),
        f = Array.prototype.slice,
        l = 9,
        c = "yui:log",
        h = function(e, t, n) {
            var r;
            for (r in t) a[r] && (n || !(r in e)) && (e[r] = t[r]);
            return e
        };
    e.CustomEvent = function(t, n) {
        this._kds = e.CustomEvent.keepDeprecatedSubs, this.id = e.guid(), this.type = t, this.silent = this.logSystem = t === c, this._kds && (this.subscribers = {}, this.afters = {}), n && h(this, n, !0)
    }, e.CustomEvent.keepDeprecatedSubs = !1, e.CustomEvent.mixConfigs = h, e.CustomEvent.prototype = {
        constructor: e.CustomEvent,
        signature: l,
        context: e,
        preventable: !0,
        bubbles: !0,
        hasSubs: function(e) {
            var t = 0,
                n = 0,
                r = this._subscribers,
                i = this._afters,
                s = this.sibling;
            return r && (t = r.length), i && (n = i.length), s && (r = s._subscribers, i = s._afters, r && (t += r.length), i && (n += i.length)), e ? e === "after" ? n : t : t + n
        },
        monitor: function(e) {
            this.monitored = !0;
            var t = this.id + "|" + this.type + "_" + e,
                n = f.call(arguments, 0);
            return n[0] = t, this.host.on.apply(this.host, n)
        },
        getSubs: function() {
            var e = this.sibling,
                t = this._subscribers,
                n = this._afters,
                r, i;
            return e && (r = e._subscribers, i = e._afters), r ? t ? t = t.concat(r) : t = r.concat() : t ? t = t.concat() : t = [], i ? n ? n = n.concat(i) : n = i.concat() : n ? n = n.concat() : n = [], [t, n]
        },
        applyConfig: function(e, t) {
            h(this, e, t)
        },
        _on: function(t, n, r, i) {
            var s = new e.Subscriber(t, n, r, i),
                u;
            return this.fireOnce && this.fired && (u = this.firedWith, this.emitFacade && this._addFacadeToArgs && this._addFacadeToArgs(u), this.async ? setTimeout(e.bind(this._notify, this, s, u), 0) : this._notify(s, u)), i === o ? (this._afters || (this._afters = []), this._afters.push(s)) : (this._subscribers || (this._subscribers = []), this._subscribers.push(s)), this._kds && (i === o ? this.afters[s.id] = s : this.subscribers[s.id] = s), new e.EventHandle(this, s)
        },
        subscribe: function(e, t) {
            var n = arguments.length > 2 ? f.call(arguments, 2) : null;
            return this._on(e, t, n, !0)
        },
        on: function(e, t) {
            var n = arguments.length > 2 ? f.call(arguments, 2) : null;
            return this.monitored && this.host && this.host._monitor("attach", this, {
                args: arguments
            }), this._on(e, t, n, !0)
        },
        after: function(e, t) {
            var n = arguments.length > 2 ? f.call(arguments, 2) : null;
            return this._on(e, t, n, o)
        },
        detach: function(e, t) {
            if (e && e.detach) return e.detach();
            var n, r, i = 0,
                s = this._subscribers,
                o = this._afters;
            if (s)
                for (n = s.length; n >= 0; n--) r = s[n], r && (!e || e === r.fn) && (this._delete(r, s, n), i++);
            if (o)
                for (n = o.length; n >= 0; n--) r = o[n], r && (!e || e === r.fn) && (this._delete(r, o, n), i++);
            return i
        },
        unsubscribe: function() {
            return this.detach.apply(this, arguments)
        },
        _notify: function(e, t, n) {
            var r;
            return r = e.notify(t, this), !1 === r || this.stopped > 1 ? !1 : !0
        },
        log: function(e, t) {},
        fire: function() {
            var e = [];
            return e.push.apply(e, arguments), this._fire(e)
        },
        _fire: function(e) {
            return this.fireOnce && this.fired ? !0 : (this.fired = !0, this.fireOnce && (this.firedWith = e), this.emitFacade ? this.fireComplex(e) : this.fireSimple(e))
        },
        fireSimple: function(e) {
            this.stopped = 0, this.prevented = 0;
            if (this.hasSubs()) {
                var t = this.getSubs();
                this._procSubs(t[0], e), this._procSubs(t[1], e)
            }
            return this.broadcast && this._broadcast(e), this.stopped ? !1 : !0
        },
        fireComplex: function(e) {
            return e[0] = e[0] || {}, this.fireSimple(e)
        },
        _procSubs: function(e, t, n) {
            var r, i, s;
            for (i = 0, s = e.length; i < s; i++) {
                r = e[i];
                if (r && r.fn) {
                    !1 === this._notify(r, t, n) && (this.stopped = 2);
                    if (this.stopped === 2) return !1
                }
            }
            return !0
        },
        _broadcast: function(t) {
            if (!this.stopped && this.broadcast) {
                var n = t.concat();
                n.unshift(this.type), this.host !== e && e.fire.apply(e, n), this.broadcast === 2 && e.Global.fire.apply(e.Global, n)
            }
        },
        unsubscribeAll: function() {
            return this.detachAll.apply(this, arguments)
        },
        detachAll: function() {
            return this.detach()
        },
        _delete: function(e, t, n) {
            var r = e._when;
            t || (t = r === o ? this._afters : this._subscribers), t && (n = s.indexOf(t, e, 0), e && t[n] === e && t.splice(n, 1)), this._kds && (r === o ? delete this.afters[e.id] : delete this.subscribers[e.id]), this.monitored && this.host && this.host._monitor("detach", this, {
                ce: this,
                sub: e
            }), e && (e.deleted = !0)
        }
    }, e.Subscriber = function(t, n, r, i) {
        this.fn = t, this.context = n, this.id = e.guid(), this.args = r, this._when = i
    }, e.Subscriber.prototype = {
        constructor: e.Subscriber,
        _notify: function(e, t, n) {
            if (this.deleted && !this.postponed) {
                if (!this.postponed) return delete this.postponed, null;
                delete this.fn, delete this.context
            }
            var r = this.args,
                i;
            switch (n.signature) {
                case 0:
                    i = this.fn.call(e, n.type, t, e);
                    break;
                case 1:
                    i = this.fn.call(e, t[0] || null, e);
                    break;
                default:
                    r || t ? (t = t || [], r = r ? t.concat(r) : t, i = this.fn.apply(e, r)) : i = this.fn.call(e)
            }
            return this.once && n._delete(this), i
        },
        notify: function(t, n) {
            var r = this.context,
                i = !0;
            r || (r = n.contextFn ? n.contextFn() : n.context);
            if (e.config && e.config.throwFail) i = this._notify(r, t, n);
            else try {
                i = this._notify(r, t, n)
            } catch (s) {
                e.error(this + " failed: " + s.message, s)
            }
            return i
        },
        contains: function(e, t) {
            return t ? this.fn === e && this.context === t : this.fn === e
        },
        valueOf: function() {
            return this.id
        }
    }, e.EventHandle = function(e, t) {
        this.evt = e, this.sub = t
    }, e.EventHandle.prototype = {
        batch: function(t, n) {
            t.call(n || this, this), e.Lang.isArray(this.evt) && e.Array.each(this.evt, function(e) {
                e.batch.call(n || e, t)
            })
        },
        detach: function() {
            var t = this.evt,
                n = 0,
                r;
            if (t)
                if (e.Lang.isArray(t))
                    for (r = 0; r < t.length; r++) n += t[r].detach();
                else t._delete(this.sub), n = 1;
            return n
        },
        monitor: function(e) {
            return this.evt.monitor.apply(this.evt, arguments)
        }
    };
    var p = e.Lang,
        d = ":",
        v = "|",
        m = "~AFTER~",
        g = /(.*?)(:)(.*?)/,
        y = e.cached(function(e) {
            return e.replace(g, "*$2$3")
        }),
        b = function(e, t) {
            return !t || !e || e.indexOf(d) > -1 ? e : t + d + e
        },
        w = e.cached(function(e, t) {
            var n = e,
                r, i, s;
            return p.isString(n) ? (s = n.indexOf(m), s > -1 && (i = !0, n = n.substr(m.length)), s = n.indexOf(v), s > -1 && (r = n.substr(0, s), n = n.substr(s + 1), n === "*" && (n = null)), [r, t ? b(n, t) : n, i, n]) : n
        }),
        E = function(t) {
            var n = this._yuievt,
                r;
            n || (n = this._yuievt = {
                events: {},
                targets: null,
                config: {
                    host: this,
                    context: this
                },
                chain: e.config.chain
            }), r = n.config, t && (h(r, t, !0), t.chain !== undefined && (n.chain = t.chain), t.prefix && (r.prefix = t.prefix))
        };
    E.prototype = {
        constructor: E,
        once: function() {
            var e = this.on.apply(this, arguments);
            return e.batch(function(e) {
                e.sub && (e.sub.once = !0)
            }), e
        },
        onceAfter: function() {
            var e = this.after.apply(this, arguments);
            return e.batch(function(e) {
                e.sub && (e.sub.once = !0)
            }), e
        },
        parseType: function(e, t) {
            return w(e, t || this._yuievt.config.prefix)
        },
        on: function(t, n, r) {
            var i = this._yuievt,
                s = w(t, i.config.prefix),
                o, u, a, l, c, h, d, v = e.Env.evt.handles,
                g, y, b, E = e.Node,
                S, x, T;
            this._monitor("attach", s[1], {
                args: arguments,
                category: s[0],
                after: s[2]
            });
            if (p.isObject(t)) return p.isFunction(t) ? e.Do.before.apply(e.Do, arguments) : (o = n, u = r, a = f.call(arguments, 0), l = [], p.isArray(t) && (T = !0), g = t._after, delete t._after, e.each(t, function(e, t) {
                p.isObject(e) && (o = e.fn || (p.isFunction(e) ? e : o), u = e.context || u);
                var n = g ? m : "";
                a[0] = n + (T ? e : t), a[1] = o, a[2] = u, l.push(this.on.apply(this, a))
            }, this), i.chain ? this : new e.EventHandle(l));
            h = s[0], g = s[2], b = s[3];
            if (E && e.instanceOf(this, E) && b in E.DOM_EVENTS) return a = f.call(arguments, 0), a.splice(2, 0, E.getDOMNode(this)), e.on.apply(e, a);
            t = s[1];
            if (e.instanceOf(this, YUI)) {
                y = e.Env.evt.plugins[t], a = f.call(arguments, 0), a[0] = b, E && (S = a[2], e.instanceOf(S, e.NodeList) ? S = e.NodeList.getDOMNodes(S) : e.instanceOf(S, E) && (S = E.getDOMNode(S)), x = b in E.DOM_EVENTS, x && (a[2] = S));
                if (y) d = y.on.apply(e, a);
                else if (!t || x) d = e.Event._attach(a)
            }
            return d || (c = i.events[t] || this.publish(t), d = c._on(n, r, arguments.length > 3 ? f.call(arguments, 3) : null, g ? "after" : !0), t.indexOf("*:") !== -1 && (this._hasSiblings = !0)), h && (v[h] = v[h] || {}, v[h][t] = v[h][t] || [], v[h][t].push(d)), i.chain ? this : d
        },
        subscribe: function() {
            return this.on.apply(this, arguments)
        },
        detach: function(t, n, r) {
            var i = this._yuievt.events,
                s, o = e.Node,
                u = o && e.instanceOf(this, o);
            if (!t && this !== e) {
                for (s in i) i.hasOwnProperty(s) && i[s].detach(n, r);
                return u && e.Event.purgeElement(o.getDOMNode(this)), this
            }
            var a = w(t, this._yuievt.config.prefix),
                l = p.isArray(a) ? a[0] : null,
                c = a ? a[3] : null,
                h, d = e.Env.evt.handles,
                v, m, g, y, b = function(e, t, n) {
                    var r = e[t],
                        i, s;
                    if (r)
                        for (s = r.length - 1; s >= 0; --s) i = r[s].evt, (i.host === n || i.el === n) && r[s].detach()
                };
            if (l) {
                m = d[l], t = a[1], v = u ? e.Node.getDOMNode(this) : this;
                if (m) {
                    if (t) b(m, t, v);
                    else
                        for (s in m) m.hasOwnProperty(s) && b(m, s, v);
                    return this
                }
            } else {
                if (p.isObject(t) && t.detach) return t.detach(), this;
                if (u && (!c || c in o.DOM_EVENTS)) return g = f.call(arguments, 0), g[2] = o.getDOMNode(this), e.detach.apply(e, g), this
            }
            h = e.Env.evt.plugins[c];
            if (e.instanceOf(this, YUI)) {
                g = f.call(arguments, 0);
                if (h && h.detach) return h.detach.apply(e, g), this;
                if (!t || !h && o && t in o.DOM_EVENTS) return g[0] = t, e.Event.detach.apply(e.Event, g), this
            }
            return y = i[a[1]], y && y.detach(n, r), this
        },
        unsubscribe: function() {
            return this.detach.apply(this, arguments)
        },
        detachAll: function(e) {
            return this.detach(e)
        },
        unsubscribeAll: function() {
            return this.detachAll.apply(this, arguments)
        },
        publish: function(t, n) {
            var r, i = this._yuievt,
                s = i.config,
                o = s.prefix;
            return typeof t == "string" ? (o && (t = b(t, o)), r = this._publish(t, s, n)) : (r = {}, e.each(t, function(e, t) {
                o && (t = b(t, o)), r[t] = this._publish(t, s, e || n)
            }, this)), r
        },
        _getFullType: function(e) {
            var t = this._yuievt.config.prefix;
            return t ? t + d + e : e
        },
        _publish: function(t, n, r) {
            var i, s = this._yuievt,
                o = s.config,
                u = o.host,
                a = o.context,
                f = s.events;
            return i = f[t], (o.monitored && !i || i && i.monitored) && this._monitor("publish", t, {
                args: arguments
            }), i || (i = f[t] = new e.CustomEvent(t, n), n || (i.host = u, i.context = a)), r && h(i, r, !0), i
        },
        _monitor: function(e, t, n) {
            var r, i, s;
            if (t) {
                typeof t == "string" ? (s = t, i = this.getEvent(t, !0)) : (i = t, s = t.type);
                if (this._yuievt.config.monitored && (!i || i.monitored) || i && i.monitored) r = s + "_" + e, n.monitored = e, this.fire.call(this, r, n)
            }
        },
        fire: function(e) {
            var t = typeof e == "string",
                n = arguments.length,
                r = e,
                i = this._yuievt,
                s = i.config,
                o = s.prefix,
                u, a, l, c;
            t && n <= 3 ? n === 2 ? c = [arguments[1]] : n === 3 ? c = [arguments[1], arguments[2]] : c = [] : c = f.call(arguments, t ? 1 : 0), t || (r = e && e.type), o && (r = b(r, o)), a = i.events[r], this._hasSiblings && (l = this.getSibling(r, a), l && !a && (a = this.publish(r))), (s.monitored && (!a || a.monitored) || a && a.monitored) && this._monitor("fire", a || r, {
                args: c
            });
            if (!a) {
                if (i.hasTargets) return this.bubble({
                    type: r
                }, c, this);
                u = !0
            } else l && (a.sibling = l), u = a._fire(c);
            return i.chain ? this : u
        },
        getSibling: function(e, t) {
            var n;
            return e.indexOf(d) > -1 && (e = y(e), n = this.getEvent(e, !0), n && (n.applyConfig(t), n.bubbles = !1, n.broadcast = 0)), n
        },
        getEvent: function(e, t) {
            var n, r;
            return t || (n = this._yuievt.config.prefix, e = n ? b(e, n) : e), r = this._yuievt.events, r[e] || null
        },
        after: function(t, n) {
            var r = f.call(arguments, 0);
            switch (p.type(t)) {
                case "function":
                    return e.Do.after.apply(e.Do, arguments);
                case "array":
                case "object":
                    r[0]._after = !0;
                    break;
                default:
                    r[0] = m + t
            }
            return this.on.apply(this, r)
        },
        before: function() {
            return this.on.apply(this, arguments)
        }
    }, e.EventTarget = E, e.mix(e, E.prototype), E.call(e, {
        bubbles: !1
    }), YUI.Env.globalEvents = YUI.Env.globalEvents || new E, e.Global = YUI.Env.globalEvents
}, "3.18.1", {
    requires: ["oop"]
});
YUI.add("event-custom-complex", function(e, t) {
    var n, r, i = e.Object,
        s, o = {},
        u = e.CustomEvent.prototype,
        a = e.EventTarget.prototype,
        f = function(e, t) {
            var n;
            for (n in t) r.hasOwnProperty(n) || (e[n] = t[n])
        };
    e.EventFacade = function(e, t) {
        e || (e = o), this._event = e, this.details = e.details, this.type = e.type, this._type = e.type, this.target = e.target, this.currentTarget = t, this.relatedTarget = e.relatedTarget
    }, e.mix(e.EventFacade.prototype, {
        stopPropagation: function() {
            this._event.stopPropagation(), this.stopped = 1
        },
        stopImmediatePropagation: function() {
            this._event.stopImmediatePropagation(), this.stopped = 2
        },
        preventDefault: function() {
            this._event.preventDefault(), this.prevented = 1
        },
        halt: function(e) {
            this._event.halt(e), this.prevented = 1, this.stopped = e ? 2 : 1
        }
    }), u.fireComplex = function(t) {
        var n, r, i, s, o, u = !0,
            a, f, l, c, h, p, d, v, m, g = this,
            y = g.host || g,
            b, w, E = g.stack,
            S = y._yuievt,
            x;
        if (E && g.queuable && g.type !== E.next.type) return E.queue || (E.queue = []), E.queue.push([g, t]), !0;
        x = g.hasSubs() || S.hasTargets || g.broadcast, g.target = g.target || y, g.currentTarget = y, g.details = t.concat();
        if (x) {
            n = E || {
                id: g.id,
                next: g,
                silent: g.silent,
                stopped: 0,
                prevented: 0,
                bubbling: null,
                type: g.type,
                defaultTargetOnly: g.defaultTargetOnly
            }, f = g.getSubs(), l = f[0], c = f[1], g.stopped = g.type !== n.type ? 0 : n.stopped, g.prevented = g.type !== n.type ? 0 : n.prevented, g.stoppedFn && (a = new e.EventTarget({
                fireOnce: !0,
                context: y
            }), g.events = a, a.on("stopped", g.stoppedFn)), g._facade = null, r = g._createFacade(t), l && g._procSubs(l, t, r), g.bubbles && y.bubble && !g.stopped && (w = n.bubbling, n.bubbling = g.type, n.type !== g.type && (n.stopped = 0, n.prevented = 0), u = y.bubble(g, t, null, n), g.stopped = Math.max(g.stopped, n.stopped), g.prevented = Math.max(g.prevented, n.prevented), n.bubbling = w), d = g.prevented, d ? (v = g.preventedFn, v && v.apply(y, t)) : (m = g.defaultFn, m && (!g.defaultTargetOnly && !n.defaultTargetOnly || y === r.target) && m.apply(y, t)), g.broadcast && g._broadcast(t);
            if (c && !g.prevented && g.stopped < 2) {
                h = n.afterQueue;
                if (n.id === g.id || g.type !== S.bubbling) {
                    g._procSubs(c, t, r);
                    if (h)
                        while (b = h.last()) b()
                } else p = c, n.execDefaultCnt && (p = e.merge(p), e.each(p, function(e) {
                    e.postponed = !0
                })), h || (n.afterQueue = new e.Queue), n.afterQueue.add(function() {
                    g._procSubs(p, t, r)
                })
            }
            g.target = null;
            if (n.id === g.id) {
                s = n.queue;
                if (s)
                    while (s.length) i = s.pop(), o = i[0], n.next = o, o._fire(i[1]);
                g.stack = null
            }
            u = !g.stopped, g.type !== S.bubbling && (n.stopped = 0, n.prevented = 0, g.stopped = 0, g.prevented = 0)
        } else m = g.defaultFn, m && (r = g._createFacade(t), (!g.defaultTargetOnly || y === r.target) && m.apply(y, t));
        return g._facade = null, u
    }, u._hasPotentialSubscribers = function() {
        return this.hasSubs() || this.host._yuievt.hasTargets || this.broadcast
    }, u._createFacade = u._getFacade = function(t) {
        var n = this.details,
            r = n && n[0],
            i = r && typeof r == "object",
            s = this._facade;
        return s || (s = new e.EventFacade(this, this.currentTarget)), i ? (f(s, r), r.type && (s.type = r.type), t && (t[0] = s)) : t && t.unshift(s), s.details = this.details, s.target = this.originalTarget || this.target, s.currentTarget = this.currentTarget, s.stopped = 0, s.prevented = 0, this._facade = s, this._facade
    }, u._addFacadeToArgs = function(e) {
        var t = e[0];
        t && t.halt && t.stopImmediatePropagation && t.stopPropagation && t._event || this._createFacade(e)
    }, u.stopPropagation = function() {
        this.stopped = 1, this.stack && (this.stack.stopped = 1), this.events && this.events.fire("stopped", this)
    }, u.stopImmediatePropagation = function() {
        this.stopped = 2, this.stack && (this.stack.stopped = 2), this.events && this.events.fire("stopped", this)
    }, u.preventDefault = function() {
        this.preventable && (this.prevented = 1, this.stack && (this.stack.prevented = 1))
    }, u.halt = function(e) {
        e ? this.stopImmediatePropagation() : this.stopPropagation(), this.preventDefault()
    }, a.addTarget = function(t) {
        var n = this._yuievt;
        return n.targets || (n.targets = {}), n.targets[e.stamp(t)] = t, n.hasTargets = !0, this
    }, a.getTargets = function() {
        var e = this._yuievt.targets;
        return e ? i.values(e) : []
    }, a.removeTarget = function(t) {
        var n = this._yuievt.targets;
        return n && (delete n[e.stamp(t, !0)], i.size(n) === 0 && (this._yuievt.hasTargets = !1)), this
    }, a.bubble = function(e, t, n, r) {
        var i = this._yuievt.targets,
            s = !0,
            o, u, a, f, l, c = e && e.type,
            h = n || e && e.target || this,
            p;
        if (!e || !e.stopped && i)
            for (a in i)
                if (i.hasOwnProperty(a)) {
                    o = i[a], u = o._yuievt.events[c], o._hasSiblings && (l = o.getSibling(c, u)), l && !u && (u = o.publish(c)), p = o._yuievt.bubbling, o._yuievt.bubbling = c;
                    if (!u) o._yuievt.hasTargets && o.bubble(e, t, h, r);
                    else {
                        l && (u.sibling = l), u.target = h, u.originalTarget = h, u.currentTarget = o, f = u.broadcast, u.broadcast = !1, u.emitFacade = !0, u.stack = r, s = s && u.fire.apply(u, t || e.details || []), u.broadcast = f, u.originalTarget = null;
                        if (u.stopped) break
                    }
                    o._yuievt.bubbling = p
                } return s
    }, a._hasPotentialSubscribers = function(e) {
        var t = this._yuievt,
            n = t.events[e];
        return n ? n.hasSubs() || t.hasTargets || n.broadcast : !1
    }, n = new e.EventFacade, r = {};
    for (s in n) r[s] = !0
}, "3.18.1", {
    requires: ["event-custom-base"]
});
YUI.add("event-delegate", function(e, t) {
    function f(t, r, u, l) {
        var c = n(arguments, 0, !0),
            h = i(u) ? u : null,
            p, d, v, m, g, y, b, w, E;
        if (s(t)) {
            w = [];
            if (o(t))
                for (y = 0, b = t.length; y < b; ++y) c[0] = t[y], w.push(e.delegate.apply(e, c));
            else {
                c.unshift(null);
                for (y in t) t.hasOwnProperty(y) && (c[0] = y, c[1] = t[y], w.push(e.delegate.apply(e, c)))
            }
            return new e.EventHandle(w)
        }
        p = t.split(/\|/), p.length > 1 && (g = p.shift(), c[0] = t = p.shift()), d = e.Node.DOM_EVENTS[t], s(d) && d.delegate && (E = d.delegate.apply(d, arguments));
        if (!E) {
            if (!t || !r || !u || !l) return;
            v = h ? e.Selector.query(h, null, !0) : u, !v && i(u) && (E = e.on("available", function() {
                e.mix(E, e.delegate.apply(e, c), !0)
            }, u)), !E && v && (c.splice(2, 2, v), E = e.Event._attach(c, {
                facade: !1
            }), E.sub.filter = l, E.sub._notify = f.notifySub)
        }
        return E && g && (m = a[g] || (a[g] = {}), m = m[t] || (m[t] = []), m.push(E)), E
    }
    var n = e.Array,
        r = e.Lang,
        i = r.isString,
        s = r.isObject,
        o = r.isArray,
        u = e.Selector.test,
        a = e.Env.evt.handles;
    f.notifySub = function(t, r, i) {
        r = r.slice(), this.args && r.push.apply(r, this.args);
        var s = f._applyFilter(this.filter, r, i),
            o, u, a, l;
        if (s) {
            s = n(s), o = r[0] = new e.DOMEventFacade(r[0], i.el, i), o.container = e.one(i.el);
            for (u = 0, a = s.length; u < a && !o.stopped; ++u) {
                o.currentTarget = e.one(s[u]), l = this.fn.apply(this.context || o.currentTarget, r);
                if (l === !1) break
            }
            return l
        }
    }, f.compileFilter = e.cached(function(e) {
        return function(t, n) {
            return u(t._node, e, n.currentTarget === n.target ? null : n.currentTarget._node)
        }
    }), f._disabledRE = /^(?:button|input|select|textarea)$/i, f._applyFilter = function(t, n, r) {
        var s = n[0],
            o = r.el,
            a = s.target || s.srcElement,
            l = [],
            c = !1;
        a.nodeType === 3 && (a = a.parentNode);
        if (a.disabled && f._disabledRE.test(a.nodeName)) return l;
        n.unshift(a);
        if (i(t))
            while (a) {
                c = a === o, u(a, t, c ? null : o) && l.push(a);
                if (c) break;
                a = a.parentNode
            } else {
                n[0] = e.one(a), n[1] = new e.DOMEventFacade(s, o, r);
                while (a) {
                    t.apply(n[0], n) && l.push(a);
                    if (a === o) break;
                    a = a.parentNode, n[0] = e.one(a)
                }
                n[1] = s
            }
        return l.length <= 1 && (l = l[0]), n.shift(), l
    }, e.delegate = e.Event.delegate = f
}, "3.18.1", {
    requires: ["node-base"]
});
YUI.add("event-flick", function(e, t) {
    var n = e.Event._GESTURE_MAP,
        r = {
            start: n.start,
            end: n.end,
            move: n.move
        },
        i = "start",
        s = "end",
        o = "move",
        u = "ownerDocument",
        a = "minVelocity",
        f = "minDistance",
        l = "preventDefault",
        c = "_fs",
        h = "_fsh",
        p = "_feh",
        d = "_fmh",
        v = "nodeType";
    e.Event.define("flick", {
        on: function(e, t, n) {
            var s = e.on(r[i], this._onStart, this, e, t, n);
            t[h] = s
        },
        detach: function(e, t, n) {
            var r = t[h],
                i = t[p];
            r && (r.detach(), t[h] = null), i && (i.detach(), t[p] = null)
        },
        processArgs: function(t) {
            var n = t.length > 3 ? e.merge(t.splice(3, 1)[0]) : {};
            return a in n || (n[a] = this.MIN_VELOCITY), f in n || (n[f] = this.MIN_DISTANCE), l in n || (n[l] = this.PREVENT_DEFAULT), n
        },
        _onStart: function(t, n, i, a) {
            var f = !0,
                l, h, m, g = i._extra.preventDefault,
                y = t;
            t.touches && (f = t.touches.length === 1, t = t.touches[0]), f && (g && (!g.call || g(t)) && y.preventDefault(), t.flick = {
                time: (new Date).getTime()
            }, i[c] = t, l = i[p], m = n.get(v) === 9 ? n : n.get(u), l || (l = m.on(r[s], e.bind(this._onEnd, this), null, n, i, a), i[p] = l), i[d] = m.once(r[o], e.bind(this._onMove, this), null, n, i, a))
        },
        _onMove: function(e, t, n, r) {
            var i = n[c];
            i && i.flick && (i.flick.time = (new Date).getTime())
        },
        _onEnd: function(e, t, n, r) {
            var i = (new Date).getTime(),
                s = n[c],
                o = !!s,
                u = e,
                h, p, v, m, g, y, b, w, E = n[d];
            E && (E.detach(), delete n[d]), o && (e.changedTouches && (e.changedTouches.length === 1 && e.touches.length === 0 ? u = e.changedTouches[0] : o = !1), o && (m = n._extra, v = m[l], v && (!v.call || v(e)) && e.preventDefault(), h = s.flick.time, i = (new Date).getTime(), p = i - h, g = [u.pageX - s.pageX, u.pageY - s.pageY], m.axis ? w = m.axis : w = Math.abs(g[0]) >= Math.abs(g[1]) ? "x" : "y", y = g[w === "x" ? 0 : 1], b = p !== 0 ? y / p : 0, isFinite(b) && Math.abs(y) >= m[f] && Math.abs(b) >= m[a] && (e.type = "flick", e.flick = {
                time: p,
                distance: y,
                velocity: b,
                axis: w,
                start: s
            }, r.fire(e)), n[c] = null))
        },
        MIN_VELOCITY: 0,
        MIN_DISTANCE: 0,
        PREVENT_DEFAULT: !1
    })
}, "3.18.1", {
    requires: ["node-base", "event-touch", "event-synthetic"]
});
YUI.add("event-focus", function(e, t) {
    function u(t, r, u) {
        var a = "_" + t + "Notifiers";
        e.Event.define(t, {
            _useActivate: o,
            _attach: function(i, s, o) {
                return e.DOM.isWindow(i) ? n._attach([t, function(e) {
                    s.fire(e)
                }, i]) : n._attach([r, this._proxy, i, this, s, o], {
                    capture: !0
                })
            },
            _proxy: function(t, r, i) {
                var s = t.target,
                    f = t.currentTarget,
                    l = s.getData(a),
                    c = e.stamp(f._node),
                    h = o || s !== f,
                    p;
                r.currentTarget = i ? s : f, r.container = i ? f : null, l ? h = !0 : (l = {}, s.setData(a, l), h && (p = n._attach([u, this._notify, s._node]).sub, p.once = !0)), l[c] || (l[c] = []), l[c].push(r), h || this._notify(t)
            },
            _notify: function(t, n) {
                var r = t.currentTarget,
                    i = r.getData(a),
                    o = r.ancestors(),
                    u = r.get("ownerDocument"),
                    f = [],
                    l = i ? e.Object.keys(i).length : 0,
                    c, h, p, d, v, m, g, y, b, w;
                r.clearData(a), o.push(r), u && o.unshift(u), o._nodes.reverse(), l && (m = l, o.some(function(t) {
                    var n = e.stamp(t),
                        r = i[n],
                        s, o;
                    if (r) {
                        l--;
                        for (s = 0, o = r.length; s < o; ++s) r[s].handle.sub.filter && f.push(r[s])
                    }
                    return !l
                }), l = m);
                while (l && (c = o.shift())) {
                    d = e.stamp(c), h = i[d];
                    if (h) {
                        for (g = 0, y = h.length; g < y; ++g) {
                            p = h[g], b = p.handle.sub, v = !0, t.currentTarget = c, b.filter && (v = b.filter.apply(c, [c, t].concat(b.args || [])), f.splice(s(f, p), 1)), v && (t.container = p.container, w = p.fire(t));
                            if (w === !1 || t.stopped === 2) break
                        }
                        delete h[d], l--
                    }
                    if (t.stopped !== 2)
                        for (g = 0, y = f.length; g < y; ++g) {
                            p = f[g], b = p.handle.sub, b.filter.apply(c, [c, t].concat(b.args || [])) && (t.container = p.container, t.currentTarget = c, w = p.fire(t));
                            if (w === !1 || t.stopped === 2 || t.stopped && f[g + 1] && f[g + 1].container !== p.container) break
                        }
                    if (t.stopped) break
                }
            },
            on: function(e, t, n) {
                t.handle = this._attach(e._node, n)
            },
            detach: function(e, t) {
                t.handle.detach()
            },
            delegate: function(t, n, r, s) {
                i(s) && (n.filter = function(n) {
                    return e.Selector.test(n._node, s, t === n ? null : t._node)
                }), n.handle = this._attach(t._node, r, !0)
            },
            detachDelegate: function(e, t) {
                t.handle.detach()
            }
        }, !0)
    }
    var n = e.Event,
        r = e.Lang,
        i = r.isString,
        s = e.Array.indexOf,
        o = function() {
            var t = !1,
                n = e.config.doc,
                r;
            return n && (r = n.createElement("p"), r.setAttribute("onbeforeactivate", ";"), t = r.onbeforeactivate !== undefined), t
        }();
    o ? (u("focus", "beforeactivate", "focusin"), u("blur", "beforedeactivate", "focusout")) : (u("focus", "focus", "focus"), u("blur", "blur", "blur"))
}, "3.18.1", {
    requires: ["event-synthetic"]
});
YUI.add("event-hover", function(e, t) {
    var n = e.Lang.isFunction,
        r = function() {},
        i = {
            processArgs: function(e) {
                var t = n(e[2]) ? 2 : 3;
                return n(e[t]) ? e.splice(t, 1)[0] : r
            },
            on: function(e, t, n, r) {
                var i = t.args ? t.args.slice() : [];
                i.unshift(null), t._detach = e[r ? "delegate" : "on"]({
                    mouseenter: function(e) {
                        e.phase = "over", n.fire(e)
                    },
                    mouseleave: function(e) {
                        var n = t.context || this;
                        i[0] = e, e.type = "hover", e.phase = "out", t._extra.apply(n, i)
                    }
                }, r)
            },
            detach: function(e, t, n) {
                t._detach.detach()
            }
        };
    i.delegate = i.on, i.detachDelegate = i.detach, e.Event.define("hover", i)
}, "3.18.1", {
    requires: ["event-mouseenter"]
});
YUI.add("event-key", function(e, t) {
    var n = "+alt",
        r = "+ctrl",
        i = "+meta",
        s = "+shift",
        o = e.Lang.trim,
        u = {
            KEY_MAP: {
                enter: 13,
                space: 32,
                esc: 27,
                backspace: 8,
                tab: 9,
                pageup: 33,
                pagedown: 34
            },
            _typeRE: /^(up|down|press):/,
            _keysRE: /^(?:up|down|press):|\+(alt|ctrl|meta|shift)/g,
            processArgs: function(t) {
                var n = t.splice(3, 1)[0],
                    r = e.Array.hash(n.match(/\+(?:alt|ctrl|meta|shift)\b/g) || []),
                    i = {
                        type: this._typeRE.test(n) ? RegExp.$1 : null,
                        mods: r,
                        keys: null
                    },
                    s = n.replace(this._keysRE, ""),
                    u, a, f, l;
                if (s) {
                    s = s.split(","), i.keys = {};
                    for (l = s.length - 1; l >= 0; --l) {
                        u = o(s[l]);
                        if (!u) continue; + u == u ? i.keys[u] = r : (f = u.toLowerCase(), this.KEY_MAP[f] ? (i.keys[this.KEY_MAP[f]] = r, i.type || (i.type = "down")) : (u = u.charAt(0), a = u.toUpperCase(), r["+shift"] && (u = a), i.keys[u.charCodeAt(0)] = u === a ? e.merge(r, {
                            "+shift": !0
                        }) : r))
                    }
                }
                return i.type || (i.type = "press"), i
            },
            on: function(e, t, o, u) {
                var a = t._extra,
                    f = "key" + a.type,
                    l = a.keys,
                    c = u ? "delegate" : "on";
                t._detach = e[c](f, function(e) {
                    var t = l ? l[e.which] : a.mods;
                    t && (!t[n] || t[n] && e.altKey) && (!t[r] || t[r] && e.ctrlKey) && (!t[i] || t[i] && e.metaKey) && (!t[s] || t[s] && e.shiftKey) && o.fire(e)
                }, u)
            },
            detach: function(e, t, n) {
                t._detach.detach()
            }
        };
    u.delegate = u.on, u.detachDelegate = u.detach, e.Event.define("key", u, !0)
}, "3.18.1", {
    requires: ["event-synthetic"]
});
YUI.add("event-mouseenter", function(e, t) {
    var n = e.Env.evt.dom_wrappers,
        r = e.DOM.contains,
        i = e.Array,
        s = function() {},
        o = {
            proxyType: "mouseover",
            relProperty: "fromElement",
            _notify: function(t, i, s) {
                var o = this._node,
                    u = t.relatedTarget || t[i];
                o !== u && !r(o, u) && s.fire(new e.DOMEventFacade(t, o, n["event:" + e.stamp(o) + t.type]))
            },
            on: function(t, n, r) {
                var i = e.Node.getDOMNode(t),
                    s = [this.proxyType, this._notify, i, null, this.relProperty, r];
                n.handle = e.Event._attach(s, {
                    facade: !1
                })
            },
            detach: function(e, t) {
                t.handle.detach()
            },
            delegate: function(t, n, r, i) {
                var o = e.Node.getDOMNode(t),
                    u = [this.proxyType, s, o, null, r];
                n.handle = e.Event._attach(u, {
                    facade: !1
                }), n.handle.sub.filter = i, n.handle.sub.relProperty = this.relProperty, n.handle.sub._notify = this._filterNotify
            },
            _filterNotify: function(t, n, s) {
                n = n.slice(), this.args && n.push.apply(n, this.args);
                var o = e.delegate._applyFilter(this.filter, n, s),
                    u = n[0].relatedTarget || n[0][this.relProperty],
                    a, f, l, c, h;
                if (o) {
                    o = i(o);
                    for (f = 0, l = o.length && (!a || !a.stopped); f < l; ++f) {
                        h = o[0];
                        if (!r(h, u)) {
                            a || (a = new e.DOMEventFacade(n[0], h, s), a.container = e.one(s.el)), a.currentTarget = e.one(h), c = n[1].fire(a);
                            if (c === !1) break
                        }
                    }
                }
                return c
            },
            detachDelegate: function(e, t) {
                t.handle.detach()
            }
        };
    e.Event.define("mouseenter", o, !0), e.Event.define("mouseleave", e.merge(o, {
        proxyType: "mouseout",
        relProperty: "toElement"
    }), !0)
}, "3.18.1", {
    requires: ["event-synthetic"]
});
YUI.add("event-mousewheel", function(e, t) {
    var n = "DOMMouseScroll",
        r = function(t) {
            var r = e.Array(t, 0, !0),
                i;
            return e.UA.gecko ? (r[0] = n, i = e.config.win) : i = e.config.doc, r.length < 3 ? r[2] = i : r.splice(2, 0, i), r
        };
    e.Env.evt.plugins.mousewheel = {
        on: function() {
            return e.Event._attach(r(arguments))
        },
        detach: function() {
            return e.Event.detach.apply(e.Event, r(arguments))
        }
    }
}, "3.18.1", {
    requires: ["node-base"]
});
YUI.add("event-move", function(e, t) {
    var n = e.Event._GESTURE_MAP,
        r = {
            start: n.start,
            end: n.end,
            move: n.move
        },
        i = "start",
        s = "move",
        o = "end",
        u = "gesture" + s,
        a = u + o,
        f = u + i,
        l = "_msh",
        c = "_mh",
        h = "_meh",
        p = "_dmsh",
        d = "_dmh",
        v = "_dmeh",
        m = "_ms",
        g = "_m",
        y = "minTime",
        b = "minDistance",
        w = "preventDefault",
        E = "button",
        S = "ownerDocument",
        x = "currentTarget",
        T = "target",
        N = "nodeType",
        C = function(e) {
            var t;
            return e && ("PointerEvent" in e ? t = "touchAction" : "msPointerEnabled" in e.navigator && (t = "msTouchAction")), t
        },
        k = C(e.config.win),
        L = k === "msTouchAction" || k === "touchAction",
        A = "msTouchActionCount",
        O = "msInitTouchAction",
        M = function(t, n, r) {
            var i = r ? 4 : 3,
                s = n.length > i ? e.merge(n.splice(i, 1)[0]) : {};
            return w in s || (s[w] = t.PREVENT_DEFAULT), s
        },
        _ = function(e, t) {
            return t._extra.root || e.get(N) === 9 ? e : e.get(S)
        },
        D = function(t) {
            var n = t.getDOMNode();
            return t.compareTo(e.config.doc) && n.documentElement ? n.documentElement : !1
        },
        P = function(e, t, n) {
            e.pageX = t.pageX, e.pageY = t.pageY, e.screenX = t.screenX, e.screenY = t.screenY, e.clientX = t.clientX, e.clientY = t.clientY, e[T] = e[T] || t[T], e[x] = e[x] || t[x], e[E] = n && n[E] || 1
        },
        H = function(t) {
            var n = t.getDOMNode(),
                r = t.getData(A);
            L && (r || (r = 0, t.setData(O, n.style[k])), n.style[k] = e.Event._DEFAULT_TOUCH_ACTION, r++, t.setData(A, r))
        },
        B = function(e) {
            var t = e.getDOMNode(),
                n = e.getData(A),
                r = e.getData(O);
            L && (n--, e.setData(A, n), n === 0 && t.style[k] !== r && (t.style[k] = r))
        },
        j = function(e, t) {
            t && (!t.call || t(e)) && e.preventDefault()
        },
        F = e.Event.define;
    e.Event._DEFAULT_TOUCH_ACTION = "none", F(f, {
        on: function(e, t, n) {
            D(e) || H(e), t[l] = e.on(r[i], this._onStart, this, e, t, n)
        },
        delegate: function(e, t, n, s) {
            var o = this;
            t[p] = e.delegate(r[i], function(r) {
                o._onStart(r, e, t, n, !0)
            }, s)
        },
        detachDelegate: function(e, t, n, r) {
            var i = t[p];
            i && (i.detach(), t[p] = null), D(e) || B(e)
        },
        detach: function(e, t, n) {
            var r = t[l];
            r && (r.detach(), t[l] = null), D(e) || B(e)
        },
        processArgs: function(e, t) {
            var n = M(this, e, t);
            return y in n || (n[y] = this.MIN_TIME), b in n || (n[b] = this.MIN_DISTANCE), n
        },
        _onStart: function(t, n, i, u, a) {
            a && (n = t[x]);
            var f = i._extra,
                l = !0,
                c = f[y],
                h = f[b],
                p = f.button,
                d = f[w],
                v = _(n, i),
                m;
            t.touches ? t.touches.length === 1 ? P(t, t.touches[0], f) : l = !1 : l = p === undefined || p === t.button, l && (j(t, d), c === 0 || h === 0 ? this._start(t, n, u, f) : (m = [t.pageX, t.pageY], c > 0 && (f._ht = e.later(c, this, this._start, [t, n, u, f]), f._hme = v.on(r[o], e.bind(function() {
                this._cancel(f)
            }, this))), h > 0 && (f._hm = v.on(r[s], e.bind(function(e) {
                (Math.abs(e.pageX - m[0]) > h || Math.abs(e.pageY - m[1]) > h) && this._start(t, n, u, f)
            }, this)))))
        },
        _cancel: function(e) {
            e._ht && (e._ht.cancel(), e._ht = null), e._hme && (e._hme.detach(), e._hme = null), e._hm && (e._hm.detach(), e._hm = null)
        },
        _start: function(e, t, n, r) {
            r && this._cancel(r), e.type = f, t.setData(m, e), n.fire(e)
        },
        MIN_TIME: 0,
        MIN_DISTANCE: 0,
        PREVENT_DEFAULT: !1
    }), F(u, {
        on: function(e, t, n) {
            var i, o;
            D(e) || H(e), o = _(e, t, r[s]), i = o.on(r[s], this._onMove, this, e, t, n), t[c] = i
        },
        delegate: function(e, t, n, i) {
            var o = this;
            t[d] = e.delegate(r[s], function(r) {
                o._onMove(r, e, t, n, !0)
            }, i)
        },
        detach: function(e, t, n) {
            var r = t[c];
            r && (r.detach(), t[c] = null), D(e) || B(e)
        },
        detachDelegate: function(e, t, n, r) {
            var i = t[d];
            i && (i.detach(), t[d] = null), D(e) || B(e)
        },
        processArgs: function(e, t) {
            return M(this, e, t)
        },
        _onMove: function(e, t, n, r, i) {
            i && (t = e[x]);
            var s = n._extra.standAlone || t.getData(m),
                o = n._extra.preventDefault;
            s && (e.touches && (e.touches.length === 1 ? P(e, e.touches[0]) : s = !1), s && (j(e, o), e.type = u, r.fire(e)))
        },
        PREVENT_DEFAULT: !1
    }), F(a, {
        on: function(e, t, n) {
            var i, s;
            D(e) || H(e), s = _(e, t), i = s.on(r[o], this._onEnd, this, e, t, n), t[h] = i
        },
        delegate: function(e, t, n, i) {
            var s = this;
            t[v] = e.delegate(r[o], function(r) {
                s._onEnd(r, e, t, n, !0)
            }, i)
        },
        detachDelegate: function(e, t, n, r) {
            var i = t[v];
            i && (i.detach(), t[v] = null), D(e) || B(e)
        },
        detach: function(e, t, n) {
            var r = t[h];
            r && (r.detach(), t[h] = null), D(e) || B(e)
        },
        processArgs: function(e, t) {
            return M(this, e, t)
        },
        _onEnd: function(e, t, n, r, i) {
            i && (t = e[x]);
            var s = n._extra.standAlone || t.getData(g) || t.getData(m),
                o = n._extra.preventDefault;
            s && (e.changedTouches && (e.changedTouches.length === 1 ? P(e, e.changedTouches[0]) : s = !1), s && (j(e, o), e.type = a, r.fire(e), t.clearData(m), t.clearData(g)))
        },
        PREVENT_DEFAULT: !1
    })
}, "3.18.1", {
    requires: ["node-base", "event-touch", "event-synthetic"]
});
YUI.add("event-outside", function(e, t) {
    var n = ["blur", "change", "click", "dblclick", "focus", "keydown", "keypress", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "select", "submit"];
    e.Event.defineOutside = function(t, n) {
        n = n || t + "outside";
        var r = {
            on: function(n, r, i) {
                r.handle = e.one("doc").on(t, function(e) {
                    this.isOutside(n, e.target) && (e.currentTarget = n, i.fire(e))
                }, this)
            },
            detach: function(e, t, n) {
                t.handle.detach()
            },
            delegate: function(n, r, i, s) {
                r.handle = e.one("doc").delegate(t, function(e) {
                    this.isOutside(n, e.target) && i.fire(e)
                }, s, this)
            },
            isOutside: function(e, t) {
                return t !== e && !t.ancestor(function(t) {
                    return t === e
                })
            }
        };
        r.detachDelegate = r.detach, e.Event.define(n, r)
    }, e.Array.each(n, function(t) {
        e.Event.defineOutside(t)
    })
}, "3.18.1", {
    requires: ["event-synthetic"]
});
YUI.add("event-resize", function(e, t) {
    e.Event.define("windowresize", {
        on: e.UA.gecko && e.UA.gecko < 1.91 ? function(t, n, r) {
            n._handle = e.Event.attach("resize", function(e) {
                r.fire(e)
            })
        } : function(t, n, r) {
            var i = e.config.windowResizeDelay || 100;
            n._handle = e.Event.attach("resize", function(t) {
                n._timer && n._timer.cancel(), n._timer = e.later(i, e, function() {
                    r.fire(t)
                })
            })
        },
        detach: function(e, t) {
            t._timer && t._timer.cancel(), t._handle.detach()
        }
    })
}, "3.18.1", {
    requires: ["node-base", "event-synthetic"]
});
YUI.add("event-synthetic", function(e, t) {
    function c(e, t) {
        this.handle = e, this.emitFacade = t
    }

    function h(e, t, n) {
        this.handles = [], this.el = e, this.key = n, this.domkey = t
    }

    function p() {
        this._init.apply(this, arguments)
    }
    var n = e.CustomEvent,
        r = e.Env.evt.dom_map,
        i = e.Array,
        s = e.Lang,
        o = s.isObject,
        u = s.isString,
        a = s.isArray,
        f = e.Selector.query,
        l = function() {};
    c.prototype.fire = function(t) {
        var n = i(arguments, 0, !0),
            r = this.handle,
            s = r.evt,
            u = r.sub,
            a = u.context,
            f = u.filter,
            l = t || {},
            c;
        if (this.emitFacade) {
            if (!t || !t.preventDefault) l = s._getFacade(), o(t) && !t.preventDefault ? (e.mix(l, t, !0), n[0] = l) : n.unshift(l);
            l.type = s.type, l.details = n.slice(), f && (l.container = s.host)
        } else f && o(t) && t.currentTarget && n.shift();
        return u.context = a || l.currentTarget || s.host, c = s.fire.apply(s, n), t.prevented && s.preventedFn && s.preventedFn.apply(s, n), t.stopped && s.stoppedFn && s.stoppedFn.apply(s, n), u.context = a, c
    }, h.prototype = {
        constructor: h,
        type: "_synth",
        fn: l,
        capture: !1,
        register: function(e) {
            e.evt.registry = this, this.handles.push(e)
        },
        unregister: function(t) {
            var n = this.handles,
                i = r[this.domkey],
                s;
            for (s = n.length - 1; s >= 0; --s)
                if (n[s].sub === t) {
                    n.splice(s, 1);
                    break
                } n.length || (delete i[this.key], e.Object.size(i) || delete r[this.domkey])
        },
        detachAll: function() {
            var e = this.handles,
                t = e.length;
            while (--t >= 0) e[t].detach()
        }
    }, e.mix(p, {
        Notifier: c,
        SynthRegistry: h,
        getRegistry: function(t, n, i) {
            var s = t._node,
                o = e.stamp(s),
                u = "event:" + o + n + "_synth",
                a = r[o];
            return i && (a || (a = r[o] = {}), a[u] || (a[u] = new h(s, o, u))), a && a[u] || null
        },
        _deleteSub: function(e) {
            if (e && e.fn) {
                var t = this.eventDef,
                    r = e.filter ? "detachDelegate" : "detach";
                this._subscribers = [], n.keepDeprecatedSubs && (this.subscribers = {}), t[r](e.node, e, this.notifier, e.filter), this.registry.unregister(e), delete e.fn, delete e.node, delete e.context
            }
        },
        prototype: {
            constructor: p,
            _init: function() {
                var e = this.publishConfig || (this.publishConfig = {});
                this.emitFacade = "emitFacade" in e ? e.emitFacade : !0, e.emitFacade = !1
            },
            processArgs: l,
            on: l,
            detach: l,
            delegate: l,
            detachDelegate: l,
            _on: function(t, n) {
                var r = [],
                    s = t.slice(),
                    o = this.processArgs(t, n),
                    a = t[2],
                    l = n ? "delegate" : "on",
                    c, h;
                return c = u(a) ? f(a) : i(a || e.one(e.config.win)), !c.length && u(a) ? (h = e.on("available", function() {
                    e.mix(h, e[l].apply(e, s), !0)
                }, a), h) : (e.Array.each(c, function(i) {
                    var s = t.slice(),
                        u;
                    i = e.one(i), i && (n && (u = s.splice(3, 1)[0]), s.splice(0, 4, s[1], s[3]), (!this.preventDups || !this.getSubs(i, t, null, !0)) && r.push(this._subscribe(i, l, s, o, u)))
                }, this), r.length === 1 ? r[0] : new e.EventHandle(r))
            },
            _subscribe: function(t, n, r, i, s) {
                var o = new e.CustomEvent(this.type, this.publishConfig),
                    u = o.on.apply(o, r),
                    a = new c(u, this.emitFacade),
                    f = p.getRegistry(t, this.type, !0),
                    l = u.sub;
                return l.node = t, l.filter = s, i && this.applyArgExtras(i, l), e.mix(o, {
                    eventDef: this,
                    notifier: a,
                    host: t,
                    currentTarget: t,
                    target: t,
                    el: t._node,
                    _delete: p._deleteSub
                }, !0), u.notifier = a, f.register(u), this[n](t, l, a, s), u
            },
            applyArgExtras: function(e, t) {
                t._extra = e
            },
            _detach: function(t) {
                var n = t[2],
                    r = u(n) ? f(n) : i(n),
                    s, o, a, l, c;
                t.splice(2, 1);
                for (o = 0, a = r.length; o < a; ++o) {
                    s = e.one(r[o]);
                    if (s) {
                        l = this.getSubs(s, t);
                        if (l)
                            for (c = l.length - 1; c >= 0; --c) l[c].detach()
                    }
                }
            },
            getSubs: function(e, t, n, r) {
                var i = p.getRegistry(e, this.type),
                    s = [],
                    o, u, a, f;
                if (i) {
                    o = i.handles, n || (n = this.subMatch);
                    for (u = 0, a = o.length; u < a; ++u) {
                        f = o[u];
                        if (n.call(this, f.sub, t)) {
                            if (r) return f;
                            s.push(o[u])
                        }
                    }
                }
                return s.length && s
            },
            subMatch: function(e, t) {
                return !t[1] || e.fn === t[1]
            }
        }
    }, !0), e.SyntheticEvent = p, e.Event.define = function(t, n, r) {
        var s, o, f;
        t && t.type ? (s = t, r = n) : n && (s = e.merge({
            type: t
        }, n));
        if (s) {
            if (r || !e.Node.DOM_EVENTS[s.type]) o = function() {
                p.apply(this, arguments)
            }, e.extend(o, p, s), f = new o, t = f.type, e.Node.DOM_EVENTS[t] = e.Env.evt.plugins[t] = {
                eventDef: f,
                on: function() {
                    return f._on(i(arguments))
                },
                delegate: function() {
                    return f._on(i(arguments), !0)
                },
                detach: function() {
                    return f._detach(i(arguments))
                }
            }
        } else(u(t) || a(t)) && e.Array.each(i(t), function(t) {
            e.Node.DOM_EVENTS[t] = 1
        });
        return f
    }
}, "3.18.1", {
    requires: ["node-base", "event-custom-complex"]
});
YUI.add("event-tap", function(e, t) {
    function a(t, n) {
        n = n || e.Object.values(u), e.Array.each(n, function(e) {
            var n = t[e];
            n && (n.detach(), t[e] = null)
        })
    }
    var n = e.config.doc,
        r = e.Event._GESTURE_MAP,
        i = r.start,
        s = "tap",
        o = /pointer/i,
        u = {
            START: "Y_TAP_ON_START_HANDLE",
            END: "Y_TAP_ON_END_HANDLE",
            CANCEL: "Y_TAP_ON_CANCEL_HANDLE"
        };
    e.Event.define(s, {
        publishConfig: {
            preventedFn: function(e) {
                var t = e.target.once("click", function(e) {
                    e.preventDefault()
                });
                setTimeout(function() {
                    t.detach()
                }, 100)
            }
        },
        processArgs: function(e, t) {
            if (!t) {
                var n = e[3];
                return e.splice(3, 1), n
            }
        },
        on: function(e, t, n) {
            t[u.START] = e.on(i, this._start, this, e, t, n)
        },
        detach: function(e, t, n) {
            a(t)
        },
        delegate: function(t, n, r, s) {
            n[u.START] = e.delegate(i, function(e) {
                this._start(e, t, n, r, !0)
            }, t, s, this)
        },
        detachDelegate: function(e, t, n) {
            a(t)
        },
        _start: function(e, t, n, i, s) {
            var a = {
                    canceled: !1,
                    eventType: e.type
                },
                f = n.preventMouse || !1;
            if (e.button && e.button === 3) return;
            if (e.touches && e.touches.length !== 1) return;
            a.node = s ? e.currentTarget : t, e.touches ? a.startXY = [e.touches[0].pageX, e.touches[0].pageY] : a.startXY = [e.pageX, e.pageY], e.touches ? (n[u.END] = t.once("touchend", this._end, this, t, n, i, s, a), n[u.CANCEL] = t.once("touchcancel", this.detach, this, t, n, i, s, a), n.preventMouse = !0) : a.eventType.indexOf("mouse") !== -1 && !f ? (n[u.END] = t.once("mouseup", this._end, this, t, n, i, s, a), n[u.CANCEL] = t.once("mousecancel", this.detach, this, t, n, i, s, a)) : a.eventType.indexOf("mouse") !== -1 && f ? n.preventMouse = !1 : o.test(a.eventType) && (n[u.END] = t.once(r.end, this._end, this, t, n, i, s, a), n[u.CANCEL] = t.once(r.cancel, this.detach, this, t, n, i, s, a))
        },
        _end: function(e, t, n, r, i, o) {
            var f = o.startXY,
                l, c, h = 15;
            n._extra && n._extra.sensitivity >= 0 && (h = n._extra.sensitivity), e.changedTouches ? (l = [e.changedTouches[0].pageX, e.changedTouches[0].pageY], c = [e.changedTouches[0].clientX, e.changedTouches[0].clientY]) : (l = [e.pageX, e.pageY], c = [e.clientX, e.clientY]), Math.abs(l[0] - f[0]) <= h && Math.abs(l[1] - f[1]) <= h && (e.type = s, e.pageX = l[0], e.pageY = l[1], e.clientX = c[0], e.clientY = c[1], e.currentTarget = o.node, r.fire(e)), a(n, [u.END, u.CANCEL])
        }
    })
}, "3.18.1", {
    requires: ["node-base", "event-base", "event-touch", "event-synthetic"]
});
YUI.add("event-touch", function(e, t) {
    var n = "scale",
        r = "rotation",
        i = "identifier",
        s = e.config.win,
        o = {};
    e.DOMEventFacade.prototype._touch = function(t, s, o) {
        var u, a, f, l, c;
        if (t.touches) {
            this.touches = [], c = {};
            for (u = 0, a = t.touches.length; u < a; ++u) l = t.touches[u], c[e.stamp(l)] = this.touches[u] = new e.DOMEventFacade(l, s, o)
        }
        if (t.targetTouches) {
            this.targetTouches = [];
            for (u = 0, a = t.targetTouches.length; u < a; ++u) l = t.targetTouches[u], f = c && c[e.stamp(l, !0)], this.targetTouches[u] = f || new e.DOMEventFacade(l, s, o)
        }
        if (t.changedTouches) {
            this.changedTouches = [];
            for (u = 0, a = t.changedTouches.length; u < a; ++u) l = t.changedTouches[u], f = c && c[e.stamp(l, !0)], this.changedTouches[u] = f || new e.DOMEventFacade(l, s, o)
        }
        n in t && (this[n] = t[n]), r in t && (this[r] = t[r]), i in t && (this[i] = t[i])
    }, e.Node.DOM_EVENTS && e.mix(e.Node.DOM_EVENTS, {
        touchstart: 1,
        touchmove: 1,
        touchend: 1,
        touchcancel: 1,
        gesturestart: 1,
        gesturechange: 1,
        gestureend: 1,
        MSPointerDown: 1,
        MSPointerUp: 1,
        MSPointerMove: 1,
        MSPointerCancel: 1,
        pointerdown: 1,
        pointerup: 1,
        pointermove: 1,
        pointercancel: 1
    }), s && "ontouchstart" in s && !(e.UA.chrome && e.UA.chrome < 6) ? (o.start = ["touchstart", "mousedown"], o.end = ["touchend", "mouseup"], o.move = ["touchmove", "mousemove"], o.cancel = ["touchcancel", "mousecancel"]) : s && s.PointerEvent ? (o.start = "pointerdown", o.end = "pointerup", o.move = "pointermove", o.cancel = "pointercancel") : s && "msPointerEnabled" in s.navigator ? (o.start = "MSPointerDown", o.end = "MSPointerUp", o.move = "MSPointerMove", o.cancel = "MSPointerCancel") : (o.start = "mousedown", o.end = "mouseup", o.move = "mousemove", o.cancel = "mousecancel"), e.Event._GESTURE_MAP = o
}, "3.18.1", {
    requires: ["node-base"]
});
YUI.add("event-valuechange", function(e, t) {
    var n = "_valuechange",
        r = "value",
        i = "nodeName",
        s, o = {
            POLL_INTERVAL: 50,
            TIMEOUT: 1e4,
            _poll: function(t, r) {
                var i = t._node,
                    s = r.e,
                    u = t._data && t._data[n],
                    a = 0,
                    f, l, c, h, p, d;
                if (!i || !u) {
                    o._stopPolling(t);
                    return
                }
                l = u.prevVal, h = u.nodeName, u.isEditable ? c = i.innerHTML : h === "input" || h === "textarea" ? c = i.value : h === "select" && (p = i.options[i.selectedIndex], c = p.value || p.text), c !== l && (u.prevVal = c, f = {
                    _event: s,
                    currentTarget: s && s.currentTarget || t,
                    newVal: c,
                    prevVal: l,
                    target: s && s.target || t
                }, e.Object.some(u.notifiers, function(e) {
                    var t = e.handle.evt,
                        n;
                    a !== 1 ? e.fire(f) : t.el === d && e.fire(f), n = t && t._facade ? t._facade.stopped : 0, n > a && (a = n, a === 1 && (d = t.el));
                    if (a === 2) return !0
                }), o._refreshTimeout(t))
            },
            _refreshTimeout: function(e, t) {
                if (!e._node) return;
                var r = e.getData(n);
                o._stopTimeout(e), r.timeout = setTimeout(function() {
                    o._stopPolling(e, t)
                }, o.TIMEOUT)
            },
            _startPolling: function(t, s, u) {
                var a, f;
                if (!t.test("input,textarea,select") && !(f = o._isEditable(t))) return;
                a = t.getData(n), a || (a = {
                    nodeName: t.get(i).toLowerCase(),
                    isEditable: f,
                    prevVal: f ? t.getDOMNode().innerHTML : t.get(r)
                }, t.setData(n, a)), a.notifiers || (a.notifiers = {});
                if (a.interval) {
                    if (!u.force) {
                        a.notifiers[e.stamp(s)] = s;
                        return
                    }
                    o._stopPolling(t, s)
                }
                a.notifiers[e.stamp(s)] = s, a.interval = setInterval(function() {
                    o._poll(t, u)
                }, o.POLL_INTERVAL), o._refreshTimeout(t, s)
            },
            _stopPolling: function(t, r) {
                if (!t._node) return;
                var i = t.getData(n) || {};
                clearInterval(i.interval), delete i.interval, o._stopTimeout(t), r ? i.notifiers && delete i.notifiers[e.stamp(r)] : i.notifiers = {}
            },
            _stopTimeout: function(e) {
                var t = e.getData(n) || {};
                clearTimeout(t.timeout), delete t.timeout
            },
            _isEditable: function(e) {
                var t = e._node;
                return t.contentEditable === "true" || t.contentEditable === ""
            },
            _onBlur: function(e, t) {
                o._stopPolling(e.currentTarget, t)
            },
            _onFocus: function(e, t) {
                var s = e.currentTarget,
                    u = s.getData(n);
                u || (u = {
                    isEditable: o._isEditable(s),
                    nodeName: s.get(i).toLowerCase()
                }, s.setData(n, u)), u.prevVal = u.isEditable ? s.getDOMNode().innerHTML : s.get(r), o._startPolling(s, t, {
                    e: e
                })
            },
            _onKeyDown: function(e, t) {
                o._startPolling(e.currentTarget, t, {
                    e: e
                })
            },
            _onKeyUp: function(e, t) {
                (e.charCode === 229 || e.charCode === 197) && o._startPolling(e.currentTarget, t, {
                    e: e,
                    force: !0
                })
            },
            _onMouseDown: function(e, t) {
                o._startPolling(e.currentTarget, t, {
                    e: e
                })
            },
            _onSubscribe: function(t, s, u, a) {
                var f, l, c, h, p;
                l = {
                    blur: o._onBlur,
                    focus: o._onFocus,
                    keydown: o._onKeyDown,
                    keyup: o._onKeyUp,
                    mousedown: o._onMouseDown
                }, f = u._valuechange = {};
                if (a) f.delegated = !0, f.getNodes = function() {
                    return h = t.all("input,textarea,select").filter(a), p = t.all('[contenteditable="true"],[contenteditable=""]').filter(a), h.concat(p)
                }, f.getNodes().each(function(e) {
                    e.getData(n) || e.setData(n, {
                        nodeName: e.get(i).toLowerCase(),
                        isEditable: o._isEditable(e),
                        prevVal: c ? e.getDOMNode().innerHTML : e.get(r)
                    })
                }), u._handles = e.delegate(l, t, a, null, u);
                else {
                    c = o._isEditable(t);
                    if (!t.test("input,textarea,select") && !c) return;
                    t.getData(n) || t.setData(n, {
                        nodeName: t.get(i).toLowerCase(),
                        isEditable: c,
                        prevVal: c ? t.getDOMNode().innerHTML : t.get(r)
                    }), u._handles = t.on(l, null, null, u)
                }
            },
            _onUnsubscribe: function(e, t, n) {
                var r = n._valuechange;
                n._handles && n._handles.detach(), r.delegated ? r.getNodes().each(function(e) {
                    o._stopPolling(e, n)
                }) : o._stopPolling(e, n)
            }
        };
    s = {
        detach: o._onUnsubscribe,
        on: o._onSubscribe,
        delegate: o._onSubscribe,
        detachDelegate: o._onUnsubscribe,
        publishConfig: {
            emitFacade: !0
        }
    }, e.Event.define("valuechange", s), e.Event.define("valueChange", s), e.ValueChange = o
}, "3.18.1", {
    requires: ["event-focus", "event-synthetic"]
});
YUI.add("highlight-base", function(e, t) {
    var n = e.Array,
        r = e.Escape,
        i = e.Text.WordBreak,
        s = e.Lang.isArray,
        o = {},
        u = "(&[^;\\s]*)?",
        a = {
            _REGEX: u + "(%needles)",
            _REPLACER: function(e, t, n) {
                return t && !/\s/.test(n) ? e : a._TEMPLATE.replace(/\{s\}/g, n)
            },
            _START_REGEX: "^" + u + "(%needles)",
            _TEMPLATE: '<b class="' + e.ClassNameManager.getClassName("highlight") + '">{s}</b>',
            all: function(e, t, n) {
                var i = [],
                    u, f, l, c, h, p;
                n || (n = o), u = n.escapeHTML !== !1, h = n.startsWith ? a._START_REGEX : a._REGEX, p = n.replacer || a._REPLACER, t = s(t) ? t : [t];
                for (f = 0, l = t.length; f < l; ++f) c = t[f], c && i.push(r.regex(u ? r.html(c) : c));
                return u && (e = r.html(e)), i.length ? e.replace(new RegExp(h.replace("%needles", i.join("|")), n.caseSensitive ? "g" : "gi"), p) : e
            },
            allCase: function(t, n, r) {
                return a.all(t, n, e.merge(r || o, {
                    caseSensitive: !0
                }))
            },
            start: function(t, n, r) {
                return a.all(t, n, e.merge(r || o, {
                    startsWith: !0
                }))
            },
            startCase: function(e, t) {
                return a.start(e, t, {
                    caseSensitive: !0
                })
            },
            words: function(e, t, u) {
                var f, l, c = a._TEMPLATE,
                    h;
                return u || (u = o), f = !!u.caseSensitive, t = n.hash(s(t) ? t : i.getUniqueWords(t, {
                    ignoreCase: !f
                })), l = u.mapper || function(e, t) {
                    return t.hasOwnProperty(f ? e : e.toLowerCase()) ? c.replace(/\{s\}/g, r.html(e)) : r.html(e)
                }, h = i.getWords(e, {
                    includePunctuation: !0,
                    includeWhitespace: !0
                }), n.map(h, function(e) {
                    return l(e, t)
                }).join("")
            },
            wordsCase: function(e, t) {
                return a.words(e, t, {
                    caseSensitive: !0
                })
            }
        };
    e.Highlight = a
}, "3.18.1", {
    requires: ["array-extras", "classnamemanager", "escape", "text-wordbreak"]
});
YUI.add("history-base", function(e, t) {
    function p() {
        this._init.apply(this, arguments)
    }

    function d(e) {
        return n.type(e) === "object"
    }
    var n = e.Lang,
        r = e.Object,
        i = YUI.namespace("Env.History"),
        s = e.Array,
        o = e.config.doc,
        u = o.documentMode,
        a = e.config.win,
        f = {
            merge: !0
        },
        l = "change",
        c = "add",
        h = "replace";
    e.augment(p, e.EventTarget, null, null, {
        emitFacade: !0,
        prefix: "history",
        preventable: !1,
        queueable: !0
    }), i._state || (i._state = {}), p.NAME = "historyBase", p.SRC_ADD = c, p.SRC_REPLACE = h, p.html5 = !!(a.history && a.history.pushState && a.history.replaceState && ("onpopstate" in a || e.UA.gecko >= 2) && (!e.UA.android || e.UA.android >= 2.4)), p.nativeHashChange = ("onhashchange" in a || "onhashchange" in o) && (!u || u > 7), e.mix(p.prototype, {
        _init: function(e) {
            var t;
            e = this._config = e || {}, this.force = !!e.force, t = this._initialState = this._initialState || e.initialState || null, this.publish(l, {
                broadcast: 2,
                defaultFn: this._defChangeFn
            }), t && this.replace(t)
        },
        add: function() {
            var e = s(arguments, 0, !0);
            return e.unshift(c), this._change.apply(this, e)
        },
        addValue: function(e, t, n) {
            var r = {};
            return r[e] = t, this._change(c, r, n)
        },
        get: function(t) {
            var n = i._state,
                s = d(n);
            return t ? s && r.owns(n, t) ? n[t] : undefined : s ? e.mix({}, n, !0) : n
        },
        replace: function() {
            var e = s(arguments, 0, !0);
            return e.unshift(h), this._change.apply(this, e)
        },
        replaceValue: function(e, t, n) {
            var r = {};
            return r[e] = t, this._change(h, r, n)
        },
        _change: function(t, n, r) {
            return r = r ? e.merge(f, r) : f, r.merge && d(n) && d(i._state) && (n = e.merge(i._state, n)), this._resolveChanges(t, n, r), this
        },
        _fireEvents: function(e, t, n) {
            this.fire(l, {
                _options: n,
                changed: t.changed,
                newVal: t.newState,
                prevVal: t.prevState,
                removed: t.removed,
                src: e
            }), r.each(t.changed, function(t, n) {
                this._fireChangeEvent(e, n, t)
            }, this), r.each(t.removed, function(t, n) {
                this._fireRemoveEvent(e, n, t)
            }, this)
        },
        _fireChangeEvent: function(e, t, n) {
            this.fire(t + "Change", {
                newVal: n.newVal,
                prevVal: n.prevVal,
                src: e
            })
        },
        _fireRemoveEvent: function(e, t, n) {
            this.fire(t + "Remove", {
                prevVal: n,
                src: e
            })
        },
        _resolveChanges: function(e, t, n) {
            var s = {},
                o, u = i._state,
                a = {};
            t || (t = {}), n || (n = {}), d(t) && d(u) ? (r.each(t, function(e, t) {
                var n = u[t];
                e !== n && (s[t] = {
                    newVal: e,
                    prevVal: n
                }, o = !0)
            }, this), r.each(u, function(e, n) {
                if (!r.owns(t, n) || t[n] === null) delete t[n], a[n] = e, o = !0
            }, this)) : o = t !== u, (o || this.force) && this._fireEvents(e, {
                changed: s,
                newState: t,
                prevState: u,
                removed: a
            }, n)
        },
        _storeState: function(e, t) {
            i._state = t || {}
        },
        _defChangeFn: function(e) {
            this._storeState(e.src, e.newVal, e._options)
        }
    }, !0), e.HistoryBase = p
}, "3.18.1", {
    requires: ["event-custom-complex"]
});
YUI.add("history-hash-ie", function(e, t) {
    if (e.UA.ie && !e.HistoryBase.nativeHashChange) {
        var n = e.Do,
            r = YUI.namespace("Env.HistoryHash"),
            i = e.HistoryHash,
            s = r._iframe,
            o = e.config.win;
        i.getIframeHash = function() {
            if (!s || !s.contentWindow) return "";
            var e = i.hashPrefix,
                t = s.contentWindow.location.hash.substr(1);
            return e && t.indexOf(e) === 0 ? t.replace(e, "") : t
        }, i._updateIframe = function(e, t) {
            var n = s && s.contentWindow && s.contentWindow.document,
                r = n && n.location;
            if (!n || !r) return;
            t ? r.replace(e.charAt(0) === "#" ? e : "#" + e) : (n.open().close(), r.hash = e)
        }, n.before(i._updateIframe, i, "replaceHash", i, !0), s || e.on("domready", function() {
            var t = i.getHash();
            s = r._iframe = e.Node.getDOMNode(e.Node.create('<iframe src="javascript:0" style="display:none" height="0" width="0" tabindex="-1" title="empty"/>')), e.config.doc.documentElement.appendChild(s), i._updateIframe(t || "#"), e.on("hashchange", function(e) {
                t = e.newHash, i.getIframeHash() !== t && i._updateIframe(t)
            }, o), e.later(50, null, function() {
                var e = i.getIframeHash();
                e !== t && i.setHash(e)
            }, null, !0)
        })
    }
}, "3.18.1", {
    requires: ["history-hash", "node-base"]
});
YUI.add("history-hash", function(e, t) {
    function p() {
        p.superclass.constructor.apply(this, arguments)
    }
    var n = e.HistoryBase,
        r = e.Lang,
        i = e.Array,
        s = e.Object,
        o = YUI.namespace("Env.HistoryHash"),
        u = "hash",
        a, f, l, c = e.config.win,
        h = e.config.useHistoryHTML5;
    e.extend(p, n, {
        _init: function(t) {
            var n = p.parseHash();
            t = t || {}, this._initialState = t.initialState ? e.merge(t.initialState, n) : n, e.after("hashchange", e.bind(this._afterHashChange, this), c), p.superclass._init.apply(this, arguments)
        },
        _change: function(e, t, n) {
            return s.each(t, function(e, n) {
                r.isValue(e) && (t[n] = e.toString())
            }), p.superclass._change.call(this, e, t, n)
        },
        _storeState: function(e, t) {
            var r = p.decode,
                i = p.createHash(t);
            p.superclass._storeState.apply(this, arguments), e !== u && r(p.getHash()) !== r(i) && p[e === n.SRC_REPLACE ? "replaceHash" : "setHash"](i)
        },
        _afterHashChange: function(e) {
            this._resolveChanges(u, p.parseHash(e.newHash), {})
        }
    }, {
        NAME: "historyHash",
        SRC_HASH: u,
        hashPrefix: "",
        _REGEX_HASH: /([^\?#&=]+)=?([^&=]*)/g,
        createHash: function(e) {
            var t = p.encode,
                n = [];
            return s.each(e, function(e, i) {
                r.isValue(e) && n.push(t(i) + "=" + t(e))
            }), n.join("&")
        },
        decode: function(e) {
            return decodeURIComponent(e.replace(/\+/g, " "))
        },
        encode: function(e) {
            return encodeURIComponent(e).replace(/%20/g, "+")
        },
        getHash: e.UA.gecko ? function() {
            var t = e.getLocation(),
                n = /#(.*)$/.exec(t.href),
                r = n && n[1] || "",
                i = p.hashPrefix;
            return i && r.indexOf(i) === 0 ? r.replace(i, "") : r
        } : function() {
            var t = e.getLocation(),
                n = t.hash.substring(1),
                r = p.hashPrefix;
            return r && n.indexOf(r) === 0 ? n.replace(r, "") : n
        },
        getUrl: function() {
            return location.href
        },
        parseHash: function(e) {
            var t = p.decode,
                n, i, s, o, u, a = {},
                f = p.hashPrefix,
                l;
            e = r.isValue(e) ? e : p.getHash();
            if (f) {
                l = e.indexOf(f);
                if (l === 0 || l === 1 && e.charAt(0) === "#") e = e.replace(f, "")
            }
            o = e.match(p._REGEX_HASH) || [];
            for (n = 0, i = o.length; n < i; ++n) s = o[n], u = s.split("="), u.length > 1 ? a[t(u[0])] = t(u[1]) : a[t(s)] = "";
            return a
        },
        replaceHash: function(t) {
            var n = e.getLocation(),
                r = n.href.replace(/#.*$/, "");
            t.charAt(0) === "#" && (t = t.substring(1)), n.replace(r + "#" + (p.hashPrefix || "") + t)
        },
        setHash: function(t) {
            var n = e.getLocation();
            t.charAt(0) === "#" && (t = t.substring(1)), n.hash = (p.hashPrefix || "") + t
        }
    }), a = o._notifiers, a || (a = o._notifiers = []), e.Event.define("hashchange", {
        on: function(t, n, r) {
            (t.compareTo(c) || t.compareTo(e.config.doc.body)) && a.push(r)
        },
        detach: function(e, t, n) {
            var r = i.indexOf(a, n);
            r !== -1 && a.splice(r, 1)
        }
    }), f = p.getHash(), l = p.getUrl(), n.nativeHashChange ? o._hashHandle || (o._hashHandle = e.Event.attach("hashchange", function(e) {
        var t = p.getHash(),
            n = p.getUrl();
        i.each(a.concat(), function(r) {
            r.fire({
                _event: e,
                oldHash: f,
                oldUrl: l,
                newHash: t,
                newUrl: n
            })
        }), f = t, l = n
    }, c)) : o._hashPoll || (o._hashPoll = e.later(50, null, function() {
        var e = p.getHash(),
            t, n;
        f !== e && (n = p.getUrl(), t = {
            oldHash: f,
            oldUrl: l,
            newHash: e,
            newUrl: n
        }, f = e, l = n, i.each(a.concat(), function(e) {
            e.fire(t)
        }))
    }, null, !0)), e.HistoryHash = p;
    if (h === !1 || !e.History && h !== !0 && (!n.html5 || !e.HistoryHTML5)) e.History = p
}, "3.18.1", {
    requires: ["event-synthetic", "history-base", "yui-later"]
});
YUI.add("history-html5", function(e, t) {
    function a() {
        a.superclass.constructor.apply(this, arguments)
    }
    var n = e.HistoryBase,
        r = e.Lang,
        i = e.config.win,
        s = e.config.useHistoryHTML5,
        o = "popstate",
        u = n.SRC_REPLACE;
    e.extend(a, n, {
        _init: function(t) {
            var n;
            try {
                n = i.history.state
            } catch (s) {
                n = null
            }
            e.Object.isEmpty(n) && (n = null), t || (t = {}), t.initialState && r.type(t.initialState) === "object" && r.type(n) === "object" ? this._initialState = e.merge(t.initialState, n) : this._initialState = n, e.on("popstate", this._onPopState, i, this), a.superclass._init.apply(this, arguments)
        },
        _storeState: function(t, n, r) {
            t !== o && i.history[t === u ? "replaceState" : "pushState"](n, r.title || e.config.doc.title || "", r.url || e.config.doc.URL), a.superclass._storeState.apply(this, arguments)
        },
        _onPopState: function(e) {
            this._resolveChanges(o, e._event.state || null)
        }
    }, {
        NAME: "historyhtml5",
        SRC_POPSTATE: o
    }), e.Node.DOM_EVENTS.popstate || (e.Node.DOM_EVENTS.popstate = 1), e.HistoryHTML5 = a;
    if (s === !0 || s !== !1 && n.html5) e.History = a
}, "3.18.1", {
    optional: ["json"],
    requires: ["event-base", "history-base", "node-base"]
});
YUI.add("intl", function(e, t) {
    var n = {},
        r = "yuiRootLang",
        i = "yuiActiveLang",
        s = [];
    e.mix(e.namespace("Intl"), {
        _mod: function(e) {
            return n[e] || (n[e] = {}), n[e]
        },
        setLang: function(e, t) {
            var n = this._mod(e),
                s = n[i],
                o = !!n[t];
            return o && t !== s && (n[i] = t, this.fire("intl:langChange", {
                module: e,
                prevVal: s,
                newVal: t === r ? "" : t
            })), o
        },
        getLang: function(e) {
            var t = this._mod(e)[i];
            return t === r ? "" : t
        },
        add: function(e, t, n) {
            t = t || r, this._mod(e)[t] = n, this.setLang(e, t)
        },
        get: function(t, n, r) {
            var s = this._mod(t),
                o;
            return r = r || s[i], o = s[r] || {}, n ? o[n] : e.merge(o)
        },
        getAvailableLangs: function(t) {
            var n = e.Env._loader,
                r = n && n.moduleInfo[t],
                i = r && r.lang;
            return i ? i.concat() : s
        }
    }), e.augment(e.Intl, e.EventTarget), e.Intl.publish("intl:langChange", {
        emitFacade: !0
    })
}, "3.18.1", {
    requires: ["intl-base", "event-custom"]
});
YUI.add("io-base", function(e, t) {
    function o(t) {
        var n = this;
        n._uid = "io:" + s++, n._init(t), e.io._map[n._uid] = n
    }
    var n = ["start", "complete", "end", "success", "failure", "progress"],
        r = ["status", "statusText", "responseText", "responseXML"],
        i = e.config.win,
        s = 0;
    o.prototype = {
        _id: 0,
        _headers: {
            "X-Requested-With": "XMLHttpRequest"
        },
        _timeout: {},
        _init: function(t) {
            var r = this,
                i, s;
            r.cfg = t || {}, e.augment(r, e.EventTarget);
            for (i = 0, s = n.length; i < s; ++i) r.publish("io:" + n[i], e.merge({
                broadcast: 1
            }, t)), r.publish("io-trn:" + n[i], t)
        },
        _create: function(t, n) {
            var r = this,
                s = {
                    id: e.Lang.isNumber(n) ? n : r._id++,
                    uid: r._uid
                },
                o = t.xdr ? t.xdr.use : null,
                u = t.form && t.form.upload ? "iframe" : null,
                a;
            return o === "native" && (o = e.UA.ie && !l ? "xdr" : null, r.setHeader("X-Requested-With")), a = o || u, s = a ? e.merge(e.IO.customTransport(a), s) : e.merge(e.IO.defaultTransport(), s), s.notify && (t.notify = function(e, t, n) {
                r.notify(e, t, n)
            }), a || i && i.FormData && t.data instanceof i.FormData && (s.c.upload.onprogress = function(e) {
                r.progress(s, e, t)
            }, s.c.onload = function(e) {
                r.load(s, e, t)
            }, s.c.onerror = function(e) {
                r.error(s, e, t)
            }, s.upload = !0), s
        },
        _destroy: function(t) {
            i && !t.notify && !t.xdr && (u && !t.upload ? t.c.onreadystatechange = null : t.upload ? (t.c.upload.onprogress = null, t.c.onload = null, t.c.onerror = null) : e.UA.ie && !t.e && t.c.abort()), t = t.c = null
        },
        _evt: function(t, r, i) {
            var s = this,
                o, u = i.arguments,
                a = s.cfg.emitFacade,
                f = "io:" + t,
                l = "io-trn:" + t;
            this.detach(l), r.e && (r.c = {
                status: 0,
                statusText: r.e
            }), o = [a ? {
                id: r.id,
                data: r.c,
                cfg: i,
                arguments: u
            } : r.id], a || (t === n[0] || t === n[2] ? u && o.push(u) : (r.evt ? o.push(r.evt) : o.push(r.c), u && o.push(u))), o.unshift(f), s.fire.apply(s, o), i.on && (o[0] = l, s.once(l, i.on[t], i.context || e), s.fire.apply(s, o))
        },
        start: function(e, t) {
            this._evt(n[0], e, t)
        },
        complete: function(e, t) {
            this._evt(n[1], e, t)
        },
        end: function(e, t) {
            this._evt(n[2], e, t), this._destroy(e)
        },
        success: function(e, t) {
            this._evt(n[3], e, t), this.end(e, t)
        },
        failure: function(e, t) {
            this._evt(n[4], e, t), this.end(e, t)
        },
        progress: function(e, t, r) {
            e.evt = t, this._evt(n[5], e, r)
        },
        load: function(e, t, r) {
            e.evt = t.target, this._evt(n[1], e, r)
        },
        error: function(e, t, r) {
            e.evt = t, this._evt(n[4], e, r)
        },
        _retry: function(e, t, n) {
            return this._destroy(e), n.xdr.use = "flash", this.send(t, n, e.id)
        },
        _concat: function(e, t) {
            return e += (e.indexOf("?") === -1 ? "?" : "&") + t, e
        },
        setHeader: function(e, t) {
            t ? this._headers[e] = t : delete this._headers[e]
        },
        _setHeaders: function(t, n) {
            n = e.merge(this._headers, n), e.Object.each(n, function(e, r) {
                e !== "disable" && t.setRequestHeader(r, n[r])
            })
        },
        _startTimeout: function(e, t) {
            var n = this;
            n._timeout[e.id] = setTimeout(function() {
                n._abort(e, "timeout")
            }, t)
        },
        _clearTimeout: function(e) {
            clearTimeout(this._timeout[e]), delete this._timeout[e]
        },
        _result: function(e, t) {
            var n;
            try {
                n = e.c.status
            } catch (r) {
                n = 0
            }
            n >= 200 && n < 300 || n === 304 || n === 1223 ? this.success(e, t) : this.failure(e, t)
        },
        _rS: function(e, t) {
            var n = this;
            e.c.readyState === 4 && (t.timeout && n._clearTimeout(e.id), setTimeout(function() {
                n.complete(e, t), n._result(e, t)
            }, 0))
        },
        _abort: function(e, t) {
            e && e.c && (e.e = t, e.c.abort())
        },
        send: function(t, n, i) {
            var s, o, u, a, f, c, h = this,
                p = t,
                d = {};
            n = n ? e.Object(n) : {}, s = h._create(n, i), o = n.method ? n.method.toUpperCase() : "GET", f = n.sync, c = n.data, e.Lang.isObject(c) && !c.nodeType && !s.upload && e.QueryString && e.QueryString.stringify && (n.data = c = e.QueryString.stringify(c));
            if (n.form) {
                if (n.form.upload) return h.upload(s, t, n);
                c = h._serialize(n.form, c)
            }
            c || (c = "");
            if (c) switch (o) {
                case "GET":
                case "HEAD":
                case "DELETE":
                    p = h._concat(p, c), c = "";
                    break;
                case "POST":
                case "PUT":
                    n.headers = e.merge({
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                    }, n.headers)
            }
            if (s.xdr) return h.xdr(p, s, n);
            if (s.notify) return s.c.send(s, t, n);
            !f && !s.upload && (s.c.onreadystatechange = function() {
                h._rS(s, n)
            });
            try {
                s.c.open(o, p, !f, n.username || null, n.password || null), h._setHeaders(s.c, n.headers || {}), h.start(s, n), n.xdr && n.xdr.credentials && l && (s.c.withCredentials = !0), s.c.send(c);
                if (f) {
                    for (u = 0, a = r.length; u < a; ++u) d[r[u]] = s.c[r[u]];
                    return d.getAllResponseHeaders = function() {
                        return s.c.getAllResponseHeaders()
                    }, d.getResponseHeader = function(e) {
                        return s.c.getResponseHeader(e)
                    }, h.complete(s, n), h._result(s, n), d
                }
            } catch (v) {
                if (s.xdr) return h._retry(s, t, n);
                h.complete(s, n), h._result(s, n)
            }
            return n.timeout && h._startTimeout(s, n.timeout), {
                id: s.id,
                abort: function() {
                    return s.c ? h._abort(s, "abort") : !1
                },
                isInProgress: function() {
                    return s.c ? s.c.readyState % 4 : !1
                },
                io: h
            }
        }
    }, e.io = function(t, n) {
        var r = e.io._map["io:0"] || new o;
        return r.send.apply(r, [t, n])
    }, e.io.header = function(t, n) {
        var r = e.io._map["io:0"] || new o;
        r.setHeader(t, n)
    }, e.IO = o, e.io._map = {};
    var u = i && i.XMLHttpRequest,
        a = i && i.XDomainRequest,
        f = i && i.ActiveXObject,
        l = u && "withCredentials" in new XMLHttpRequest;
    e.mix(e.IO, {
        _default: "xhr",
        defaultTransport: function(t) {
            if (!t) {
                var n = {
                    c: e.IO.transports[e.IO._default](),
                    notify: e.IO._default === "xhr" ? !1 : !0
                };
                return n
            }
            e.IO._default = t
        },
        transports: {
            xhr: function() {
                return u ? new XMLHttpRequest : f ? new ActiveXObject("Microsoft.XMLHTTP") : null
            },
            xdr: function() {
                return a ? new XDomainRequest : null
            },
            iframe: function() {
                return {}
            },
            flash: null,
            nodejs: null
        },
        customTransport: function(t) {
            var n = {
                c: e.IO.transports[t]()
            };
            return n[t === "xdr" || t === "flash" ? "xdr" : "notify"] = !0, n
        }
    }), e.mix(e.IO.prototype, {
        notify: function(e, t, n) {
            var r = this;
            switch (e) {
                case "timeout":
                case "abort":
                case "transport error":
                    t.c = {
                        status: 0,
                        statusText: e
                    }, e = "failure";
                default:
                    r[e].apply(r, [t, n])
            }
        }
    })
}, "3.18.1", {
    requires: ["event-custom-base", "querystring-stringify-simple"]
});
YUI.add("io-xdr", function(e, t) {
    function a(e, t, n) {
        var r = '<object id="io_swf" type="application/x-shockwave-flash" data="' + e + '" width="0" height="0">' + '<param name="movie" value="' + e + '">' + '<param name="FlashVars" value="yid=' + t + "&uid=" + n + '">' + '<param name="allowScriptAccess" value="always">' + "</object>",
            i = s.createElement("div");
        s.body.appendChild(i), i.innerHTML = r
    }

    function f(t, n, r) {
        return n === "flash" && (t.c.responseText = decodeURI(t.c.responseText)), r === "xml" && (t.c.responseXML = e.DataType.XML.parse(t.c.responseText)), t
    }

    function l(e, t) {
        return e.c.abort(e.id, t)
    }

    function c(e) {
        return u ? i[e.id] !== 4 : e.c.isInProgress(e.id)
    }
    var n = e.publish("io:xdrReady", {
            fireOnce: !0
        }),
        r = {},
        i = {},
        s = e.config.doc,
        o = e.config.win,
        u = o && o.XDomainRequest;
    e.mix(e.IO.prototype, {
        _transport: {},
        _ieEvt: function(e, t) {
            var n = this,
                r = e.id,
                s = "timeout";
            e.c.onprogress = function() {
                i[r] = 3
            }, e.c.onload = function() {
                i[r] = 4, n.xdrResponse("success", e, t)
            }, e.c.onerror = function() {
                i[r] = 4, n.xdrResponse("failure", e, t)
            }, e.c.ontimeout = function() {
                i[r] = 4, n.xdrResponse(s, e, t)
            }, e.c[s] = t[s] || 0
        },
        xdr: function(t, n, i) {
            var s = this;
            return i.xdr.use === "flash" ? (r[n.id] = i, o.setTimeout(function() {
                try {
                    n.c.send(t, {
                        id: n.id,
                        uid: n.uid,
                        method: i.method,
                        data: i.data,
                        headers: i.headers
                    })
                } catch (e) {
                    s.xdrResponse("transport error", n, i), delete r[n.id]
                }
            }, e.io.xdr.delay)) : u ? (s._ieEvt(n, i), n.c.open(i.method || "GET", t), setTimeout(function() {
                n.c.send(i.data)
            }, 0)) : n.c.send(t, n, i), {
                id: n.id,
                abort: function() {
                    return n.c ? l(n, i) : !1
                },
                isInProgress: function() {
                    return n.c ? c(n.id) : !1
                },
                io: s
            }
        },
        xdrResponse: function(e, t, n) {
            n = r[t.id] ? r[t.id] : n;
            var s = this,
                o = u ? i : r,
                a = n.xdr.use,
                l = n.xdr.dataType;
            switch (e) {
                case "start":
                    s.start(t, n);
                    break;
                case "success":
                    s.success(f(t, a, l), n), delete o[t.id];
                    break;
                case "timeout":
                case "abort":
                case "transport error":
                    t.c = {
                        status: 0,
                        statusText: e
                    };
                case "failure":
                    s.failure(f(t, a, l), n), delete o[t.id]
            }
        },
        _xdrReady: function(t, r) {
            e.fire(n, t, r)
        },
        transport: function(t) {
            t.id === "flash" && (a(e.UA.ie ? t.src + "?d=" + (new Date).valueOf().toString() : t.src, e.id, t.uid), e.IO.transports.flash = function() {
                return s.getElementById("io_swf")
            })
        }
    }), e.io.xdrReady = function(t, n) {
        var r = e.io._map[n];
        e.io.xdr.delay = 0, r._xdrReady.apply(r, [t, n])
    }, e.io.xdrResponse = function(t, n, r) {
        var i = e.io._map[n.uid];
        i.xdrResponse.apply(i, [t, n, r])
    }, e.io.transport = function(t) {
        var n = e.io._map["io:0"] || new e.IO;
        t.uid = n._uid, n.transport.apply(n, [t])
    }, e.io.xdr = {
        delay: 100
    }
}, "3.18.1", {
    requires: ["io-base", "datatype-xml-parse"]
});
YUI.add("json-parse", function(e, t) {
    var n = e.config.global.JSON;
    e.namespace("JSON").parse = function(e, t, r) {
        return n.parse(typeof e == "string" ? e : e + "", t, r)
    }
}, "3.18.1", {
    requires: ["yui-base"]
});
YUI.add("json-stringify", function(e, t) {
    var n = ":",
        r = e.config.global.JSON;
    e.mix(e.namespace("JSON"), {
        dateToString: function(e) {
            function t(e) {
                return e < 10 ? "0" + e : e
            }
            return e.getUTCFullYear() + "-" + t(e.getUTCMonth() + 1) + "-" + t(e.getUTCDate()) + "T" + t(e.getUTCHours()) + n + t(e.getUTCMinutes()) + n + t(e.getUTCSeconds()) + "Z"
        },
        stringify: function() {
            return r.stringify.apply(r, arguments)
        },
        charCacheThreshold: 100
    })
}, "3.18.1", {
    requires: ["yui-base"]
});
YUI.add("jsonp", function(e, t) {
    function r() {
        this._init.apply(this, arguments)
    }
    var n = e.Lang.isFunction;
    r.prototype = {
        _init: function(t, r) {
            this.url = t, this._requests = {}, this._timeouts = {}, this._failures = {}, r = n(r) ? {
                on: {
                    success: r
                }
            } : r || {};
            var i = r.on || {};
            i.success || (i.success = this._defaultCallback(t, r)), this._config = e.merge({
                context: this,
                args: [],
                format: this._format,
                allowCache: !1
            }, r, {
                on: i
            })
        },
        _defaultCallback: function() {},
        send: function() {
            function u(e, r, o) {
                return n(e) ? function(n) {
                    var u = !0,
                        a = "_requests";
                    r ? (++t._timeouts[s], --t._requests[s]) : o ? (++t._failures[s], t._timeouts[s] > 0 ? --t._timeouts[s] : --t._requests[s]) : (t._requests[s] || (u = !1, t._timeouts[s] > 0 ? a = "_timeouts" : t._failures[s] > 0 && (a = "_failures")), --t[a][s]), !t._requests[s] && !t._timeouts[s] && !t._failures[s] && delete YUI.Env.JSONP[s], u && e.apply(i.context, [n].concat(i.args))
                } : null
            }
            var t = this,
                r = e.Array(arguments, 0, !0),
                i = t._config,
                s = t._proxy || e.guid(),
                o;
            return i.allowCache && (t._proxy = s), t._requests[s] === undefined && (t._requests[s] = 0), t._timeouts[s] === undefined && (t._timeouts[s] = 0), t._failures[s] === undefined && (t._failures[s] = 0), t._requests[s]++, r.unshift(t.url, "YUI.Env.JSONP." + s), o = i.format.apply(t, r), i.on.success ? (YUI.Env.JSONP[s] = u(i.on.success), e.Get.js(o, {
                onFailure: u(i.on.failure, !1, !0),
                onTimeout: u(i.on.timeout, !0, !1),
                timeout: i.timeout,
                charset: i.charset,
                attributes: i.attributes,
                async: i.async
            }).execute(), t) : t
        },
        _format: function(e, t) {
            return e.replace(/\{callback\}/, t)
        }
    }, e.JSONPRequest = r, e.jsonp = function(t, n) {
        var r = new e.JSONPRequest(t, n);
        return r.send.apply(r, e.Array(arguments, 2, !0))
    }, YUI.Env.JSONP || (YUI.Env.JSONP = {})
}, "3.18.1", {
    requires: ["get", "oop"]
});
YUI.add("model-list", function(e, t) {
    function c() {
        c.superclass.constructor.apply(this, arguments)
    }
    var n = e.Attribute.prototype,
        r = e.Lang,
        i = e.Array,
        s = "add",
        o = "create",
        u = "error",
        a = "load",
        f = "remove",
        l = "reset";
    e.ModelList = e.extend(c, e.Base, {
        model: e.Model,
        _isYUIModelList: !0,
        initializer: function(t) {
            t || (t = {});
            var n = this.model = t.model || this.model;
            typeof n == "string" && (this.model = e.Object.getValue(e, n.split(".")), this.model || e.error("ModelList: Model class not found: " + n)), this.publish(s, {
                defaultFn: this._defAddFn
            }), this.publish(l, {
                defaultFn: this._defResetFn
            }), this.publish(f, {
                defaultFn: this._defRemoveFn
            }), this.after("*:idChange", this._afterIdChange), this._clear(), t.items && this.add(t.items, {
                silent: !0
            })
        },
        destructor: function() {
            this._clear()
        },
        add: function(t, n) {
            var s = t._isYUIModelList;
            return s || r.isArray(t) ? i.map(s ? t.toArray() : t, function(t, r) {
                var i = n || {};
                return "index" in i && (i = e.merge(i, {
                    index: i.index + r
                })), this._add(t, i)
            }, this) : this._add(t, n)
        },
        create: function(t, n, r) {
            var i = this;
            return typeof n == "function" && (r = n, n = {}), n || (n = {}), t._isYUIModel || (t = new this.model(t)), i.fire(o, e.merge(n, {
                model: t
            })), t.save(n, function(e) {
                e || i.add(t, n), r && r.apply(null, arguments)
            })
        },
        each: function(e, t) {
            var n = this._items.concat(),
                r, i, s;
            for (r = 0, s = n.length; r < s; r++) i = n[r], e.call(t || i, i, r, this);
            return this
        },
        filter: function(e, t) {
            var n = [],
                r = this._items,
                i, s, o, u;
            typeof e == "function" && (t = e, e = {});
            for (i = 0, o = r.length; i < o; ++i) s = r[i], t.call(this, s, i, this) && n.push(s);
            return e.asList ? (u = new this.constructor({
                model: this.model
            }), n.length && u.add(n, {
                silent: !0
            }), u) : n
        },
        get: function(e) {
            return this.attrAdded(e) ? n.get.apply(this, arguments) : this.invoke("get", e)
        },
        getAsHTML: function(t) {
            return this.attrAdded(t) ? e.Escape.html(n.get.apply(this, arguments)) : this.invoke("getAsHTML", t)
        },
        getAsURL: function(e) {
            return this.attrAdded(e) ? encodeURIComponent(n.get.apply(this, arguments)) : this.invoke("getAsURL", e)
        },
        getByClientId: function(e) {
            return this._clientIdMap[e] || null
        },
        getById: function(e) {
            return this._idMap[e] || null
        },
        invoke: function(e) {
            var t = [this._items, e].concat(i(arguments, 1, !0));
            return i.invoke.apply(i, t)
        },
        load: function(e, t) {
            var n = this;
            return typeof e == "function" && (t = e, e = {}), e || (e = {}), this.sync("read", e, function(r, i) {
                var s = {
                        options: e,
                        response: i
                    },
                    o;
                r ? (s.error = r, s.src = "load", n.fire(u, s)) : (n._loadEvent || (n._loadEvent = n.publish(a, {
                    preventable: !1
                })), o = s.parsed = n._parse(i), n.reset(o, e), n.fire(a, s)), t && t.apply(null, arguments)
            }), this
        },
        map: function(e, t) {
            return i.map(this._items, e, t)
        },
        parse: function(t) {
            if (typeof t == "string") try {
                return e.JSON.parse(t) || []
            } catch (n) {
                return this.fire(u, {
                    error: n,
                    response: t,
                    src: "parse"
                }), null
            }
            return t || []
        },
        remove: function(e, t) {
            var n = e._isYUIModelList;
            return n || r.isArray(e) ? (e = i.map(n ? e.toArray() : e, function(e) {
                return r.isNumber(e) ? this.item(e) : e
            }, this), i.map(e, function(e) {
                return this._remove(e, t)
            }, this)) : this._remove(e, t)
        },
        reset: function(t, n) {
            t || (t = []), n || (n = {});
            var r = e.merge({
                src: "reset"
            }, n);
            return t._isYUIModelList ? t = t.toArray() : t = i.map(t, function(e) {
                return e._isYUIModel ? e : new this.model(e)
            }, this), r.models = t, n.silent ? this._defResetFn(r) : (this.comparator && t.sort(e.bind(this._sort, this)), this.fire(l, r)), this
        },
        some: function(e, t) {
            var n = this._items.concat(),
                r, i, s;
            for (r = 0, s = n.length; r < s; r++) {
                i = n[r];
                if (e.call(t || i, i, r, this)) return !0
            }
            return !1
        },
        sort: function(t) {
            if (!this.comparator) return this;
            var n = this._items.concat(),
                r;
            return t || (t = {}), n.sort(e.rbind(this._sort, this, t)), r = e.merge(t, {
                models: n,
                src: "sort"
            }), t.silent ? this._defResetFn(r) : this.fire(l, r), this
        },
        sync: function() {
            var e = i(arguments, 0, !0).pop();
            typeof e == "function" && e()
        },
        toArray: function() {
            return this._items.concat()
        },
        toJSON: function() {
            return this.map(function(e) {
                return e.toJSON()
            })
        },
        _add: function(t, n) {
            var i, o;
            n || (n = {}), t._isYUIModel || (t = new this.model(t)), o = t.get("id");
            if (this._clientIdMap[t.get("clientId")] || r.isValue(o) && this._idMap[o]) {
                this.fire(u, {
                    error: "Model is already in the list.",
                    model: t,
                    src: "add"
                });
                return
            }
            return i = e.merge(n, {
                index: "index" in n ? n.index : this._findIndex(t),
                model: t
            }), n.silent ? this._defAddFn(i) : this.fire(s, i), t
        },
        _attachList: function(e) {
            e.lists.push(this), e.addTarget(this)
        },
        _clear: function() {
            i.each(this._items, this._detachList, this), this._clientIdMap = {}, this._idMap = {}, this._items = []
        },
        _compare: function(e, t) {
            return e < t ? -1 : e > t ? 1 : 0
        },
        _detachList: function(e) {
            var t = i.indexOf(e.lists, this);
            t > -1 && (e.lists.splice(t, 1), e.removeTarget(this))
        },
        _findIndex: function(e) {
            var t = this._items,
                n = t.length,
                r = 0,
                i, s, o;
            if (!this.comparator || !n) return n;
            o = this.comparator(e);
            while (r < n) s = r + n >> 1, i = t[s], this._compare(this.comparator(i), o) < 0 ? r = s + 1 : n = s;
            return r
        },
        _parse: function(e) {
            return this.parse(e)
        },
        _remove: function(t, n) {
            var i, s;
            n || (n = {}), r.isNumber(t) ? (i = t, t = this.item(i)) : i = this.indexOf(t);
            if (i === -1 || !t) {
                this.fire(u, {
                    error: "Model is not in the list.",
                    index: i,
                    model: t,
                    src: "remove"
                });
                return
            }
            return s = e.merge(n, {
                index: i,
                model: t
            }), n.silent ? this._defRemoveFn(s) : this.fire(f, s), t
        },
        _sort: function(e, t, n) {
            var r = this._compare(this.comparator(e), this.comparator(t));
            return r === 0 ? r : n && n.descending ? -r : r
        },
        _afterIdChange: function(e) {
            var t = e.newVal,
                n = e.prevVal,
                i = e.target;
            if (r.isValue(n)) {
                if (this._idMap[n] !== i) return;
                delete this._idMap[n]
            } else if (this.indexOf(i) === -1) return;
            r.isValue(t) && (this._idMap[t] = i)
        },
        _defAddFn: function(e) {
            var t = e.model,
                n = t.get("id");
            this._clientIdMap[t.get("clientId")] = t, r.isValue(n) && (this._idMap[n] = t), this._attachList(t), this._items.splice(e.index, 0, t)
        },
        _defRemoveFn: function(e) {
            var t = e.model,
                n = t.get("id");
            this._detachList(t), delete this._clientIdMap[t.get("clientId")], r.isValue(n) && delete this._idMap[n], this._items.splice(e.index, 1)
        },
        _defResetFn: function(e) {
            if (e.src === "sort") {
                this._items = e.models.concat();
                return
            }
            this._clear(), e.models.length && this.add(e.models, {
                silent: !0
            })
        }
    }, {
        NAME: "modelList"
    }), e.augment(c, e.ArrayList)
}, "3.18.1", {
    requires: ["array-extras", "array-invoke", "arraylist", "base-build", "escape", "json-parse", "model"]
});
YUI.add("model", function(e, t) {
    function l() {
        l.superclass.constructor.apply(this, arguments)
    }
    var n = YUI.namespace("Env.Model"),
        r = e.Lang,
        i = e.Array,
        s = e.Object,
        o = "change",
        u = "error",
        a = "load",
        f = "save";
    e.Model = e.extend(l, e.Base, {
        idAttribute: "id",
        _allowAdHocAttrs: !0,
        _isYUIModel: !0,
        initializer: function(e) {
            this.changed = {}, this.lastChange = {}, this.lists = []
        },
        destroy: function(e, t) {
            var n = this;
            return typeof e == "function" && (t = e, e = null), n.onceAfter("destroy", function() {
                function r(r) {
                    r || i.each(n.lists.concat(), function(t) {
                        t.remove(n, e)
                    }), t && t.apply(null, arguments)
                }
                e && (e.remove || e["delete"]) ? n.sync("delete", e, r) : r()
            }), l.superclass.destroy.call(n)
        },
        generateClientId: function() {
            return n.lastId || (n.lastId = 0), this.constructor.NAME + "_" + (n.lastId += 1)
        },
        getAsHTML: function(t) {
            var n = this.get(t);
            return e.Escape.html(r.isValue(n) ? String(n) : "")
        },
        getAsURL: function(e) {
            var t = this.get(e);
            return encodeURIComponent(r.isValue(t) ? String(t) : "")
        },
        isModified: function() {
            return this.isNew() || !s.isEmpty(this.changed)
        },
        isNew: function() {
            return !r.isValue(this.get("id"))
        },
        load: function(e, t) {
            var n = this;
            return typeof e == "function" && (t = e, e = {}), e || (e = {}), n.sync("read", e, function(r, i) {
                var s = {
                        options: e,
                        response: i
                    },
                    o;
                r ? (s.error = r, s.src = "load", n.fire(u, s)) : (n._loadEvent || (n._loadEvent = n.publish(a, {
                    preventable: !1
                })), o = s.parsed = n._parse(i), n.setAttrs(o, e), n.changed = {}, n.fire(a, s)), t && t.apply(null, arguments)
            }), n
        },
        parse: function(t) {
            if (typeof t == "string") try {
                return e.JSON.parse(t)
            } catch (n) {
                return this.fire(u, {
                    error: n,
                    response: t,
                    src: "parse"
                }), null
            }
            return t
        },
        save: function(e, t) {
            var n = this;
            return typeof e == "function" && (t = e, e = {}), e || (e = {}), n._validate(n.toJSON(), function(r) {
                if (r) {
                    t && t.call(null, r);
                    return
                }
                n.sync(n.isNew() ? "create" : "update", e, function(r, i) {
                    var s = {
                            options: e,
                            response: i
                        },
                        o;
                    r ? (s.error = r, s.src = "save", n.fire(u, s)) : (n._saveEvent || (n._saveEvent = n.publish(f, {
                        preventable: !1
                    })), i && (o = s.parsed = n._parse(i), n.setAttrs(o, e)), n.changed = {}, n.fire(f, s)), t && t.apply(null, arguments)
                })
            }), n
        },
        set: function(e, t, n) {
            var r = {};
            return r[e] = t, this.setAttrs(r, n)
        },
        setAttrs: function(t, n) {
            var r = this.idAttribute,
                i, u, a, f, l;
            n = e.merge(n), l = n._transaction = {}, r !== "id" && (t = e.merge(t), s.owns(t, r) ? t.id = t[r] : s.owns(t, "id") && (t[r] = t.id));
            for (a in t) s.owns(t, a) && this._setAttr(a, t[a], n);
            if (!s.isEmpty(l)) {
                i = this.changed, f = this.lastChange = {};
                for (a in l) s.owns(l, a) && (u = l[a], i[a] = u.newVal, f[a] = {
                    newVal: u.newVal,
                    prevVal: u.prevVal,
                    src: u.src || null
                });
                n.silent || (this._changeEvent || (this._changeEvent = this.publish(o, {
                    preventable: !1
                })), n.changed = f, this.fire(o, n))
            }
            return this
        },
        sync: function() {
            var e = i(arguments, 0, !0).pop();
            typeof e == "function" && e()
        },
        toJSON: function() {
            var e = this.getAttrs();
            return delete e.clientId, delete e.destroyed, delete e.initialized, this.idAttribute !== "id" && delete e.id, e
        },
        undo: function(e, t) {
            var n = this.lastChange,
                r = this.idAttribute,
                o = {},
                u;
            return e || (e = s.keys(n)), i.each(e, function(e) {
                s.owns(n, e) && (e = e === r ? "id" : e, u = !0, o[e] = n[e].prevVal)
            }), u ? this.setAttrs(o, t) : this
        },
        validate: function(e, t) {
            t && t()
        },
        addAttr: function(e, t, n) {
            var i = this.idAttribute,
                s, o;
            return i && e === i && (s = this._isLazyAttr("id") || this._getAttrCfg("id"), o = t.value === t.defaultValue ? null : t.value, r.isValue(o) || (o = s.value === s.defaultValue ? null : s.value, r.isValue(o) || (o = r.isValue(t.defaultValue) ? t.defaultValue : s.defaultValue)), t.value = o, s.value !== o && (s.value = o, this._isLazyAttr("id") ? this._state.add("id", "lazy", s) : this._state.add("id", "value", o))), l.superclass.addAttr.apply(this, arguments)
        },
        _parse: function(e) {
            return this.parse(e)
        },
        _validate: function(e, t) {
            function i(i) {
                if (r.isValue(i)) {
                    n.fire(u, {
                        attributes: e,
                        error: i,
                        src: "validate"
                    }), t(i);
                    return
                }
                t()
            }
            var n = this;
            n.validate.length === 1 ? i(n.validate(e, i)) : n.validate(e, i)
        },
        _setAttrVal: function(e, t, n, r, i, s) {
            var o = l.superclass._setAttrVal.apply(this, arguments),
                u = i && i._transaction,
                a = s && s.initializing;
            return o && u && !a && (u[e] = {
                newVal: this.get(e),
                prevVal: n,
                src: i.src || null
            }), o
        }
    }, {
        NAME: "model",
        ATTRS: {
            clientId: {
                valueFn: "generateClientId",
                readOnly: !0
            },
            id: {
                value: null
            }
        }
    })
}, "3.18.1", {
    requires: ["base-build", "escape", "json-parse"]
});
YUI.add("node-base", function(e, t) {
    var n = ["hasClass", "addClass", "removeClass", "replaceClass", "toggleClass"];
    e.Node.importMethod(e.DOM, n), e.NodeList.importMethod(e.Node.prototype, n);
    var r = e.Node,
        i = e.DOM;
    r.create = function(t, n) {
        return n && n._node && (n = n._node), e.one(i.create(t, n))
    }, e.mix(r.prototype, {
        create: r.create,
        insert: function(e, t) {
            return this._insert(e, t), this
        },
        _insert: function(e, t) {
            var n = this._node,
                r = null;
            return typeof t == "number" ? t = this._node.childNodes[t] : t && t._node && (t = t._node), e && typeof e != "string" && (e = e._node || e._nodes || e), r = i.addHTML(n, e, t), r
        },
        prepend: function(e) {
            return this.insert(e, 0)
        },
        append: function(e) {
            return this.insert(e, null)
        },
        appendChild: function(e) {
            return r.scrubVal(this._insert(e))
        },
        insertBefore: function(t, n) {
            return e.Node.scrubVal(this._insert(t, n))
        },
        appendTo: function(t) {
            return e.one(t).append(this), this
        },
        setContent: function(e) {
            return this._insert(e, "replace"), this
        },
        getContent: function() {
            var e = this;
            return e._node.nodeType === 11 && (e = e.create("<div/>").append(e.cloneNode(!0))), e.get("innerHTML")
        }
    }), e.Node.prototype.setHTML = e.Node.prototype.setContent, e.Node.prototype.getHTML = e.Node.prototype.getContent, e.NodeList.importMethod(e.Node.prototype, ["append", "insert", "appendChild", "insertBefore", "prepend", "setContent", "getContent", "setHTML", "getHTML"]);
    var r = e.Node,
        i = e.DOM;
    r.ATTRS = {
        text: {
            getter: function() {
                return i.getText(this._node)
            },
            setter: function(e) {
                return i.setText(this._node, e), e
            }
        },
        "for": {
            getter: function() {
                return i.getAttribute(this._node, "for")
            },
            setter: function(e) {
                return i.setAttribute(this._node, "for", e), e
            }
        },
        options: {
            getter: function() {
                return this._node.getElementsByTagName("option")
            }
        },
        children: {
            getter: function() {
                var t = this._node,
                    n = t.children,
                    r, i, s;
                if (!n) {
                    r = t.childNodes, n = [];
                    for (i = 0, s = r.length; i < s; ++i) r[i].tagName && (n[n.length] = r[i])
                }
                return e.all(n)
            }
        },
        value: {
            getter: function() {
                return i.getValue(this._node)
            },
            setter: function(e) {
                return i.setValue(this._node, e), e
            }
        }
    }, e.Node.importMethod(e.DOM, ["setAttribute", "getAttribute"]);
    var r = e.Node,
        s = e.NodeList;
    r.DOM_EVENTS = {
        abort: 1,
        beforeunload: 1,
        blur: 1,
        change: 1,
        click: 1,
        close: 1,
        command: 1,
        contextmenu: 1,
        copy: 1,
        cut: 1,
        dblclick: 1,
        DOMMouseScroll: 1,
        drag: 1,
        dragstart: 1,
        dragenter: 1,
        dragover: 1,
        dragleave: 1,
        dragend: 1,
        drop: 1,
        error: 1,
        focus: 1,
        key: 1,
        keydown: 1,
        keypress: 1,
        keyup: 1,
        load: 1,
        message: 1,
        mousedown: 1,
        mouseenter: 1,
        mouseleave: 1,
        mousemove: 1,
        mousemultiwheel: 1,
        mouseout: 1,
        mouseover: 1,
        mouseup: 1,
        mousewheel: 1,
        orientationchange: 1,
        paste: 1,
        reset: 1,
        resize: 1,
        select: 1,
        selectstart: 1,
        submit: 1,
        scroll: 1,
        textInput: 1,
        unload: 1,
        invalid: 1
    }, e.mix(r.DOM_EVENTS, e.Env.evt.plugins), e.augment(r, e.EventTarget), e.mix(r.prototype, {
        purge: function(t, n) {
            return e.Event.purgeElement(this._node, t, n), this
        }
    }), e.mix(e.NodeList.prototype, {
        _prepEvtArgs: function(t, n, r) {
            var i = e.Array(arguments, 0, !0);
            return i.length < 2 ? i[2] = this._nodes : i.splice(2, 0, this._nodes), i[3] = r || this, i
        },
        on: function(t, n, r) {
            return e.on.apply(e, this._prepEvtArgs.apply(this, arguments))
        },
        once: function(t, n, r) {
            return e.once.apply(e, this._prepEvtArgs.apply(this, arguments))
        },
        after: function(t, n, r) {
            return e.after.apply(e, this._prepEvtArgs.apply(this, arguments))
        },
        onceAfter: function(t, n, r) {
            return e.onceAfter.apply(e, this._prepEvtArgs.apply(this, arguments))
        }
    }), s.importMethod(e.Node.prototype, ["detach", "detachAll"]), e.mix(e.Node.ATTRS, {
        offsetHeight: {
            setter: function(t) {
                return e.DOM.setHeight(this._node, t), t
            },
            getter: function() {
                return this._node.offsetHeight
            }
        },
        offsetWidth: {
            setter: function(t) {
                return e.DOM.setWidth(this._node, t), t
            },
            getter: function() {
                return this._node.offsetWidth
            }
        }
    }), e.mix(e.Node.prototype, {
        sizeTo: function(t, n) {
            var r;
            arguments.length < 2 && (r = e.one(t), t = r.get("offsetWidth"), n = r.get("offsetHeight")), this.setAttrs({
                offsetWidth: t,
                offsetHeight: n
            })
        }
    }), e.config.doc.documentElement.hasAttribute || (e.Node.prototype.hasAttribute = function(e) {
        return e === "value" && this.get("value") !== "" ? !0 : !!this._node.attributes[e] && !!this._node.attributes[e].specified
    }), e.Node.prototype.focus = function() {
        try {
            this._node.focus()
        } catch (e) {}
        return this
    }, e.Node.ATTRS.type = {
        setter: function(e) {
            if (e === "hidden") try {
                this._node.type = "hidden"
            } catch (t) {
                this._node.style.display = "none", this._inputType = "hidden"
            } else try {
                this._node.type = e
            } catch (t) {}
            return e
        },
        getter: function() {
            return this._inputType || this._node.type
        },
        _bypassProxy: !0
    }, e.config.doc.createElement("form").elements.nodeType && (e.Node.ATTRS.elements = {
        getter: function() {
            return this.all("input, textarea, button, select")
        }
    }), e.mix(e.Node.prototype, {
        _initData: function() {
            "_data" in this || (this._data = {})
        },
        getData: function(t) {
            this._initData();
            var n = this._data,
                r = n;
            return arguments.length ? t in n ? r = n[t] : r = this._getDataAttribute(t) : typeof n == "object" && n !== null && (r = {}, e.Object.each(n, function(e, t) {
                r[t] = e
            }), r = this._getDataAttributes(r)), r
        },
        _getDataAttributes: function(e) {
            e = e || {};
            var t = 0,
                n = this._node.attributes,
                r = n.length,
                i = this.DATA_PREFIX,
                s = i.length,
                o;
            while (t < r) o = n[t].name, o.indexOf(i) === 0 && (o = o.substr(s), o in e || (e[o] = this._getDataAttribute(o))), t += 1;
            return e
        },
        _getDataAttribute: function(e) {
            e = this.DATA_PREFIX + e;
            var t = this._node,
                n = t.attributes,
                r = n && n[e] && n[e].value;
            return r
        },
        setData: function(e, t) {
            return this._initData(), arguments.length > 1 ? this._data[e] = t : this._data = e, this
        },
        clearData: function(e) {
            return "_data" in this && (typeof e != "undefined" ? delete this._data[e] : delete this._data), this
        }
    }), e.mix(e.NodeList.prototype, {
        getData: function(e) {
            var t = arguments.length ? [e] : [];
            return this._invoke("getData", t, !0)
        },
        setData: function(e, t) {
            var n = arguments.length > 1 ? [e, t] : [e];
            return this._invoke("setData", n)
        },
        clearData: function(e) {
            var t = arguments.length ? [e] : [];
            return this._invoke("clearData", [e])
        }
    })
}, "3.18.1", {
    requires: ["event-base", "node-core", "dom-base", "dom-style"]
});
YUI.add("node-core", function(e, t) {
    var n = ".",
        r = "nodeName",
        i = "nodeType",
        s = "ownerDocument",
        o = "tagName",
        u = "_yuid",
        a = {},
        f = Array.prototype.slice,
        l = e.DOM,
        c = function(t) {
            if (!this.getDOMNode) return new c(t);
            if (typeof t == "string") {
                t = c._fromString(t);
                if (!t) return null
            }
            var n = t.nodeType !== 9 ? t.uniqueID : t[u];
            n && c._instances[n] && c._instances[n]._node !== t && (t[u] = null), n = n || e.stamp(t), n || (n = e.guid()), this[u] = n, this._node = t, this._stateProxy = t, this._initPlugins && this._initPlugins()
        },
        h = function(t) {
            var n = null;
            return t && (n = typeof t == "string" ? function(n) {
                return e.Selector.test(n, t)
            } : function(n) {
                return t(e.one(n))
            }), n
        };
    c.ATTRS = {}, c.DOM_EVENTS = {}, c._fromString = function(t) {
        return t && (t.indexOf("doc") === 0 ? t = e.config.doc : t.indexOf("win") === 0 ? t = e.config.win : t = e.Selector.query(t, null, !0)), t || null
    }, c.NAME = "node", c.re_aria = /^(?:role$|aria-)/, c.SHOW_TRANSITION = "fadeIn", c.HIDE_TRANSITION = "fadeOut", c._instances = {}, c.getDOMNode = function(e) {
        return e ? e.nodeType ? e : e._node || null : null
    }, c.scrubVal = function(t, n) {
        if (t) {
            if (typeof t == "object" || typeof t == "function")
                if (i in t || l.isWindow(t)) t = e.one(t);
                else if (t.item && !t._nodes || t[0] && t[0][i]) t = e.all(t)
        } else typeof t == "undefined" ? t = n : t === null && (t = null);
        return t
    }, c.addMethod = function(e, t, n) {
        e && t && typeof t == "function" && (c.prototype[e] = function() {
            var e = f.call(arguments),
                r = this,
                i;
            return e[0] && e[0]._node && (e[0] = e[0]._node), e[1] && e[1]._node && (e[1] = e[1]._node), e.unshift(r._node), i = t.apply(n || r, e), i && (i = c.scrubVal(i, r)), typeof i != "undefined" || (i = r), i
        })
    }, c.importMethod = function(t, n, r) {
        typeof n == "string" ? (r = r || n, c.addMethod(r, t[n], t)) : e.Array.each(n, function(e) {
            c.importMethod(t, e)
        })
    }, c.one = function(t) {
        var n = null,
            r, i;
        if (t) {
            if (typeof t == "string") {
                t = c._fromString(t);
                if (!t) return null
            } else if (t.getDOMNode) return t;
            if (t.nodeType || e.DOM.isWindow(t)) {
                i = t.uniqueID && t.nodeType !== 9 ? t.uniqueID : t._yuid, n = c._instances[i], r = n ? n._node : null;
                if (!n || r && t !== r) n = new c(t), t.nodeType != 11 && (c._instances[n[u]] = n)
            }
        }
        return n
    }, c.DEFAULT_SETTER = function(t, r) {
        var i = this._stateProxy,
            s;
        return t.indexOf(n) > -1 ? (s = t, t = t.split(n), e.Object.setValue(i, t, r)) : typeof i[t] != "undefined" && (i[t] = r), r
    }, c.DEFAULT_GETTER = function(t) {
        var r = this._stateProxy,
            i;
        return t.indexOf && t.indexOf(n) > -1 ? i = e.Object.getValue(r, t.split(n)) : typeof r[t] != "undefined" && (i = r[t]), i
    }, e.mix(c.prototype, {
        DATA_PREFIX: "data-",
        toString: function() {
            var e = this[u] + ": not bound to a node",
                t = this._node,
                n, i, s;
            return t && (n = t.attributes, i = n && n.id ? t.getAttribute("id") : null, s = n && n.className ? t.getAttribute("className") : null, e = t[r], i && (e += "#" + i), s && (e += "." + s.replace(" ", ".")), e += " " + this[u]), e
        },
        get: function(e) {
            var t;
            return this._getAttr ? t = this._getAttr(e) : t = this._get(e), t ? t = c.scrubVal(t, this) : t === null && (t = null), t
        },
        _get: function(e) {
            var t = c.ATTRS[e],
                n;
            return t && t.getter ? n = t.getter.call(this) : c.re_aria.test(e) ? n = this._node.getAttribute(e, 2) : n = c.DEFAULT_GETTER.apply(this, arguments), n
        },
        set: function(e, t) {
            var n = c.ATTRS[e];
            return this._setAttr ? this._setAttr.apply(this, arguments) : n && n.setter ? n.setter.call(this, t, e) : c.re_aria.test(e) ? this._node.setAttribute(e, t) : c.DEFAULT_SETTER.apply(this, arguments), this
        },
        setAttrs: function(t) {
            return this._setAttrs ? this._setAttrs(t) : e.Object.each(t, function(e, t) {
                this.set(t, e)
            }, this), this
        },
        getAttrs: function(t) {
            var n = {};
            return this._getAttrs ? this._getAttrs(t) : e.Array.each(t, function(e, t) {
                n[e] = this.get(e)
            }, this), n
        },
        compareTo: function(e) {
            var t = this._node;
            return e && e._node && (e = e._node), t === e
        },
        inDoc: function(e) {
            var t = this._node;
            if (t) {
                e = e ? e._node || e : t[s];
                if (e.documentElement) return l.contains(e.documentElement, t)
            }
            return !1
        },
        getById: function(t) {
            var n = this._node,
                r = l.byId(t, n[s]);
            return r && l.contains(n, r) ? r = e.one(r) : r = null, r
        },
        ancestor: function(t, n, r) {
            return arguments.length === 2 && (typeof n == "string" || typeof n == "function") && (r = n), e.one(l.ancestor(this._node, h(t), n, h(r)))
        },
        ancestors: function(t, n, r) {
            return arguments.length === 2 && (typeof n == "string" || typeof n == "function") && (r = n), e.all(l.ancestors(this._node, h(t), n, h(r)))
        },
        previous: function(t, n) {
            return e.one(l.elementByAxis(this._node, "previousSibling", h(t), n))
        },
        next: function(t, n) {
            return e.one(l.elementByAxis(this._node, "nextSibling", h(t), n))
        },
        siblings: function(t) {
            return e.all(l.siblings(this._node, h(t)))
        },
        one: function(t) {
            return e.one(e.Selector.query(t, this._node, !0))
        },
        all: function(t) {
            var n;
            return this._node && (n = e.all(e.Selector.query(t, this._node)), n._query = t, n._queryRoot = this._node), n || e.all([])
        },
        test: function(t) {
            return e.Selector.test(this._node, t)
        },
        remove: function(e) {
            var t = this._node;
            return t && t.parentNode && t.parentNode.removeChild(t), e && this.destroy(), this
        },
        replace: function(e) {
            var t = this._node;
            return typeof e == "string" && (e = c.create(e)), t.parentNode.replaceChild(c.getDOMNode(e), t), this
        },
        replaceChild: function(t, n) {
            return typeof t == "string" && (t = l.create(t)), e.one(this._node.replaceChild(c.getDOMNode(t), c.getDOMNode(n)))
        },
        destroy: function(t) {
            var n = e.config.doc.uniqueID ? "uniqueID" : "_yuid",
                r;
            this.purge(), this.unplug && this.unplug(), this.clearData(), t && e.NodeList.each(this.all("*"), function(t) {
                r = c._instances[t[n]], r ? r.destroy() : e.Event.purgeElement(t)
            }), this._node = null, this._stateProxy = null, delete c._instances[this._yuid]
        },
        invoke: function(e, t, n, r, i, s) {
            var o = this._node,
                u;
            return t && t._node && (t = t._node), n && n._node && (n = n._node), u = o[e](t, n, r, i, s), c.scrubVal(u, this)
        },
        swap: e.config.doc.documentElement.swapNode ? function(e) {
            this._node.swapNode(c.getDOMNode(e))
        } : function(e) {
            e = c.getDOMNode(e);
            var t = this._node,
                n = e.parentNode,
                r = e.nextSibling;
            return r === t ? n.insertBefore(t, e) : e === t.nextSibling ? n.insertBefore(e, t) : (t.parentNode.replaceChild(e, t), l.addHTML(n, t, r)), this
        },
        hasMethod: function(e) {
            var t = this._node;
            return !(!(t && e in t && typeof t[e] != "unknown") || typeof t[e] != "function" && String(t[e]).indexOf("function") !== 1)
        },
        isFragment: function() {
            return this.get("nodeType") === 11
        },
        empty: function() {
            return this.get("childNodes").remove().destroy(!0), this
        },
        getDOMNode: function() {
            return this._node
        }
    }, !0), e.Node = c, e.one = c.one;
    var p = function(t) {
        var n = [];
        t && (typeof t == "string" ? (this._query = t, t = e.Selector.query(t)) : t.nodeType || l.isWindow(t) ? t = [t] : t._node ? t = [t._node] :
            t[0] && t[0]._node ? (e.Array.each(t, function(e) {
                e._node && n.push(e._node)
            }), t = n) : t = e.Array(t, 0, !0)), this._nodes = t || []
    };
    p.NAME = "NodeList", p.getDOMNodes = function(e) {
        return e && e._nodes ? e._nodes : e
    }, p.each = function(t, n, r) {
        var i = t._nodes;
        i && i.length && e.Array.each(i, n, r || t)
    }, p.addMethod = function(t, n, r) {
        t && n && (p.prototype[t] = function() {
            var t = [],
                i = arguments;
            return e.Array.each(this._nodes, function(s) {
                var o = s.uniqueID && s.nodeType !== 9 ? "uniqueID" : "_yuid",
                    u = e.Node._instances[s[o]],
                    a, f;
                u || (u = p._getTempNode(s)), a = r || u, f = n.apply(a, i), f !== undefined && f !== u && (t[t.length] = f)
            }), t.length ? t : this
        })
    }, p.importMethod = function(t, n, r) {
        typeof n == "string" ? (r = r || n, p.addMethod(r, t[n])) : e.Array.each(n, function(e) {
            p.importMethod(t, e)
        })
    }, p._getTempNode = function(t) {
        var n = p._tempNode;
        return n || (n = e.Node.create("<div></div>"), p._tempNode = n), n._node = t, n._stateProxy = t, n
    }, e.mix(p.prototype, {
        _invoke: function(e, t, n) {
            var r = n ? [] : this;
            return this.each(function(i) {
                var s = i[e].apply(i, t);
                n && r.push(s)
            }), r
        },
        item: function(t) {
            return e.one((this._nodes || [])[t])
        },
        each: function(t, n) {
            var r = this;
            return e.Array.each(this._nodes, function(i, s) {
                return i = e.one(i), t.call(n || i, i, s, r)
            }), r
        },
        batch: function(t, n) {
            var r = this;
            return e.Array.each(this._nodes, function(i, s) {
                var o = e.Node._instances[i[u]];
                return o || (o = p._getTempNode(i)), t.call(n || o, o, s, r)
            }), r
        },
        some: function(t, n) {
            var r = this;
            return e.Array.some(this._nodes, function(i, s) {
                return i = e.one(i), n = n || i, t.call(n, i, s, r)
            })
        },
        toFrag: function() {
            return e.one(e.DOM._nl2frag(this._nodes))
        },
        indexOf: function(t) {
            return e.Array.indexOf(this._nodes, e.Node.getDOMNode(t))
        },
        filter: function(t) {
            return e.all(e.Selector.filter(this._nodes, t))
        },
        modulus: function(t, n) {
            n = n || 0;
            var r = [];
            return p.each(this, function(e, i) {
                i % t === n && r.push(e)
            }), e.all(r)
        },
        odd: function() {
            return this.modulus(2, 1)
        },
        even: function() {
            return this.modulus(2)
        },
        destructor: function() {},
        refresh: function() {
            var t, n = this._nodes,
                r = this._query,
                i = this._queryRoot;
            return r && (i || n && n[0] && n[0].ownerDocument && (i = n[0].ownerDocument), this._nodes = e.Selector.query(r, i)), this
        },
        size: function() {
            return this._nodes.length
        },
        isEmpty: function() {
            return this._nodes.length < 1
        },
        toString: function() {
            var e = "",
                t = this[u] + ": not bound to any nodes",
                n = this._nodes,
                i;
            return n && n[0] && (i = n[0], e += i[r], i.id && (e += "#" + i.id), i.className && (e += "." + i.className.replace(" ", ".")), n.length > 1 && (e += "...[" + n.length + " items]")), e || t
        },
        getDOMNodes: function() {
            return this._nodes
        }
    }, !0), p.importMethod(e.Node.prototype, ["destroy", "empty", "remove", "set"]), p.prototype.get = function(t) {
        var n = [],
            r = this._nodes,
            i = !1,
            s = p._getTempNode,
            o, u;
        return r[0] && (o = e.Node._instances[r[0]._yuid] || s(r[0]), u = o._get(t), u && u.nodeType && (i = !0)), e.Array.each(r, function(r) {
            o = e.Node._instances[r._yuid], o || (o = s(r)), u = o._get(t), i || (u = e.Node.scrubVal(u, o)), n.push(u)
        }), i ? e.all(n) : n
    }, e.NodeList = p, e.all = function(e) {
        return new p(e)
    }, e.Node.all = e.all;
    var d = e.NodeList,
        v = Array.prototype,
        m = {
            concat: 1,
            pop: 0,
            push: 0,
            shift: 0,
            slice: 1,
            splice: 1,
            unshift: 0
        };
    e.Object.each(m, function(t, n) {
        d.prototype[n] = function() {
            var r = [],
                i = 0,
                s, o;
            while (typeof(s = arguments[i++]) != "undefined") r.push(s._node || s._nodes || s);
            return o = v[n].apply(this._nodes, r), t ? o = e.all(o) : o = e.Node.scrubVal(o), o
        }
    }), e.Array.each(["removeChild", "hasChildNodes", "cloneNode", "hasAttribute", "scrollIntoView", "getElementsByTagName", "focus", "blur", "submit", "reset", "select", "createCaption"], function(t) {
        e.Node.prototype[t] = function(e, n, r) {
            var i = this.invoke(t, e, n, r);
            return i
        }
    }), e.Node.prototype.removeAttribute = function(e) {
        var t = this._node;
        return t && t.removeAttribute(e, 0), this
    }, e.Node.importMethod(e.DOM, ["contains", "setAttribute", "getAttribute", "wrap", "unwrap", "generateID"]), e.NodeList.importMethod(e.Node.prototype, ["getAttribute", "setAttribute", "removeAttribute", "unwrap", "wrap", "generateID"])
}, "3.18.1", {
    requires: ["dom-core", "selector"]
});
YUI.add("node-event-delegate", function(e, t) {
    e.Node.prototype.delegate = function(t) {
        var n = e.Array(arguments, 0, !0),
            r = e.Lang.isObject(t) && !e.Lang.isArray(t) ? 1 : 2;
        return n.splice(r, 0, this._node), e.delegate.apply(e, n)
    }
}, "3.18.1", {
    requires: ["node-base", "event-delegate"]
});
YUI.add("node-pluginhost", function(e, t) {
    e.Node.plug = function() {
        var t = e.Array(arguments);
        return t.unshift(e.Node), e.Plugin.Host.plug.apply(e.Base, t), e.Node
    }, e.Node.unplug = function() {
        var t = e.Array(arguments);
        return t.unshift(e.Node), e.Plugin.Host.unplug.apply(e.Base, t), e.Node
    }, e.mix(e.Node, e.Plugin.Host, !1, null, 1), e.Object.each(e.Node._instances, function(t) {
        e.Plugin.Host.apply(t)
    }), e.NodeList.prototype.plug = function() {
        var t = arguments;
        return e.NodeList.each(this, function(n) {
            e.Node.prototype.plug.apply(e.one(n), t)
        }), this
    }, e.NodeList.prototype.unplug = function() {
        var t = arguments;
        return e.NodeList.each(this, function(n) {
            e.Node.prototype.unplug.apply(e.one(n), t)
        }), this
    }
}, "3.18.1", {
    requires: ["node-base", "pluginhost"]
});
YUI.add("node-screen", function(e, t) {
    e.each(["winWidth", "winHeight", "docWidth", "docHeight", "docScrollX", "docScrollY"], function(t) {
        e.Node.ATTRS[t] = {
            getter: function() {
                var n = Array.prototype.slice.call(arguments);
                return n.unshift(e.Node.getDOMNode(this)), e.DOM[t].apply(this, n)
            }
        }
    }), e.Node.ATTRS.scrollLeft = {
        getter: function() {
            var t = e.Node.getDOMNode(this);
            return "scrollLeft" in t ? t.scrollLeft : e.DOM.docScrollX(t)
        },
        setter: function(t) {
            var n = e.Node.getDOMNode(this);
            n && ("scrollLeft" in n ? n.scrollLeft = t : (n.document || n.nodeType === 9) && e.DOM._getWin(n).scrollTo(t, e.DOM.docScrollY(n)))
        }
    }, e.Node.ATTRS.scrollTop = {
        getter: function() {
            var t = e.Node.getDOMNode(this);
            return "scrollTop" in t ? t.scrollTop : e.DOM.docScrollY(t)
        },
        setter: function(t) {
            var n = e.Node.getDOMNode(this);
            n && ("scrollTop" in n ? n.scrollTop = t : (n.document || n.nodeType === 9) && e.DOM._getWin(n).scrollTo(e.DOM.docScrollX(n), t))
        }
    }, e.Node.importMethod(e.DOM, ["getXY", "setXY", "getX", "setX", "getY", "setY", "swapXY"]), e.Node.ATTRS.region = {
        getter: function() {
            var t = this.getDOMNode(),
                n;
            return t && !t.tagName && t.nodeType === 9 && (t = t.documentElement), e.DOM.isWindow(t) ? n = e.DOM.viewportRegion(t) : n = e.DOM.region(t), n
        }
    }, e.Node.ATTRS.viewportRegion = {
        getter: function() {
            return e.DOM.viewportRegion(e.Node.getDOMNode(this))
        }
    }, e.Node.importMethod(e.DOM, "inViewportRegion"), e.Node.prototype.intersect = function(t, n) {
        var r = e.Node.getDOMNode(this);
        return e.instanceOf(t, e.Node) && (t = e.Node.getDOMNode(t)), e.DOM.intersect(r, t, n)
    }, e.Node.prototype.inRegion = function(t, n, r) {
        var i = e.Node.getDOMNode(this);
        return e.instanceOf(t, e.Node) && (t = e.Node.getDOMNode(t)), e.DOM.inRegion(i, t, n, r)
    }
}, "3.18.1", {
    requires: ["dom-screen", "node-base"]
});
YUI.add("node-scroll-info", function(e, t) {
    var n = e.config.doc,
        r = e.config.win,
        i = "scroll",
        s = "scrollDown",
        o = "scrollLeft",
        u = "scrollRight",
        a = "scrollUp",
        f = "scrollToBottom",
        l = "scrollToLeft",
        c = "scrollToRight",
        h = "scrollToTop";
    e.Plugin.ScrollInfo = e.Base.create("scrollInfoPlugin", e.Plugin.Base, [], {
        initializer: function(e) {
            this._host = e.host, this._hostIsBody = this._host.get("nodeName").toLowerCase() === "body", this._scrollDelay = this.get("scrollDelay"), this._scrollMargin = this.get("scrollMargin"), this._scrollNode = this._getScrollNode(), this.refreshDimensions(), this._lastScroll = this.getScrollInfo(), this._bind()
        },
        destructor: function() {
            (new e.EventHandle(this._events)).detach(), this._events = null
        },
        getOffscreenNodes: function(t, n) {
            typeof n == "undefined" && (n = this._scrollMargin);
            var r = e.Selector.query(t || "*", this._host._node);
            return new e.NodeList(e.Array.filter(r, function(e) {
                return !this._isElementOnscreen(e, n)
            }, this))
        },
        getOnscreenNodes: function(t, n) {
            typeof n == "undefined" && (n = this._scrollMargin);
            var r = e.Selector.query(t || "*", this._host._node);
            return new e.NodeList(e.Array.filter(r, function(e) {
                return this._isElementOnscreen(e, n)
            }, this))
        },
        getScrollInfo: function() {
            var e = this._scrollNode,
                t = this._lastScroll,
                n = this._scrollMargin,
                r = e.scrollLeft,
                i = e.scrollHeight,
                s = e.scrollTop,
                o = e.scrollWidth,
                u = s + this._height,
                a = r + this._width;
            return {
                atBottom: u > i - n,
                atLeft: r < n,
                atRight: a > o - n,
                atTop: s < n,
                isScrollDown: t && s > t.scrollTop,
                isScrollLeft: t && r < t.scrollLeft,
                isScrollRight: t && r > t.scrollLeft,
                isScrollUp: t && s < t.scrollTop,
                scrollBottom: u,
                scrollHeight: i,
                scrollLeft: r,
                scrollRight: a,
                scrollTop: s,
                scrollWidth: o
            }
        },
        isNodeOnscreen: function(t, n) {
            return t = e.one(t), !!t && !!this._isElementOnscreen(t._node, n)
        },
        refreshDimensions: function() {
            var t = n.documentElement;
            e.UA.ios || e.UA.android && e.UA.chrome ? (this._winHeight = r.innerHeight, this._winWidth = r.innerWidth) : (this._winHeight = t.clientHeight, this._winWidth = t.clientWidth), this._hostIsBody ? (this._height = this._winHeight, this._width = this._winWidth) : (this._height = this._scrollNode.clientHeight, this._width = this._scrollNode.clientWidth), this._refreshHostBoundingRect()
        },
        _bind: function() {
            var t = e.one("win");
            this._events = [this.after({
                scrollDelayChange: this._afterScrollDelayChange,
                scrollMarginChange: this._afterScrollMarginChange
            }), t.on("windowresize", this._afterResize, this)], this._hostIsBody ? this._events.push(t.after("scroll", this._afterHostScroll, this)) : this._events.push(t.after("scroll", this._afterWindowScroll, this), this._host.after("scroll", this._afterHostScroll, this))
        },
        _getScrollNode: function() {
            return this._hostIsBody && !e.UA.webkit ? n.documentElement : e.Node.getDOMNode(this._host)
        },
        _isElementOnscreen: function(e, t) {
            var n = this._hostRect,
                r = e.getBoundingClientRect();
            return typeof t == "undefined" && (t = this._scrollMargin), !(r.top > n.bottom + t || r.bottom < n.top - t || r.right < n.left - t || r.left > n.right + t)
        },
        _refreshHostBoundingRect: function() {
            var e = this._winHeight,
                t = this._winWidth,
                n;
            this._hostIsBody ? (n = {
                bottom: e,
                height: e,
                left: 0,
                right: t,
                top: 0,
                width: t
            }, this._isHostOnscreen = !0) : n = this._scrollNode.getBoundingClientRect(), this._hostRect = n
        },
        _triggerScroll: function(t) {
            var n = this.getScrollInfo(),
                r = e.merge(t, n),
                p = this._lastScroll;
            this._lastScroll = n, this.fire(i, r), n.isScrollLeft ? this.fire(o, r) : n.isScrollRight && this.fire(u, r), n.isScrollUp ? this.fire(a, r) : n.isScrollDown && this.fire(s, r), n.atBottom && (!p.atBottom || n.scrollHeight > p.scrollHeight) && this.fire(f, r), n.atLeft && !p.atLeft && this.fire(l, r), n.atRight && (!p.atRight || n.scrollWidth > p.scrollWidth) && this.fire(c, r), n.atTop && !p.atTop && this.fire(h, r)
        },
        _afterHostScroll: function(e) {
            var t = this;
            clearTimeout(this._scrollTimeout), this._scrollTimeout = setTimeout(function() {
                t._triggerScroll(e)
            }, this._scrollDelay)
        },
        _afterResize: function() {
            this.refreshDimensions()
        },
        _afterScrollDelayChange: function(e) {
            this._scrollDelay = e.newVal
        },
        _afterScrollMarginChange: function(e) {
            this._scrollMargin = e.newVal
        },
        _afterWindowScroll: function() {
            this._refreshHostBoundingRect()
        }
    }, {
        NS: "scrollInfo",
        ATTRS: {
            scrollDelay: {
                value: 50
            },
            scrollMargin: {
                value: 50
            }
        }
    })
}, "3.18.1", {
    requires: ["array-extras", "base-build", "event-resize", "node-pluginhost", "plugin", "selector"]
});
YUI.add("node-style", function(e, t) {
    (function(e) {
        e.mix(e.Node.prototype, {
            setStyle: function(t, n) {
                return e.DOM.setStyle(this._node, t, n), this
            },
            setStyles: function(t) {
                return e.DOM.setStyles(this._node, t), this
            },
            getStyle: function(t) {
                return e.DOM.getStyle(this._node, t)
            },
            getComputedStyle: function(t) {
                return e.DOM.getComputedStyle(this._node, t)
            }
        }), e.NodeList.importMethod(e.Node.prototype, ["getStyle", "getComputedStyle", "setStyle", "setStyles"])
    })(e);
    var n = e.Node;
    e.mix(n.prototype, {
        show: function(e) {
            return e = arguments[arguments.length - 1], this.toggleView(!0, e), this
        },
        _show: function() {
            this.removeAttribute("hidden"), this.setStyle("display", "")
        },
        _isHidden: function() {
            return this.hasAttribute("hidden") || e.DOM.getComputedStyle(this._node, "display") === "none"
        },
        toggleView: function(e, t) {
            return this._toggleView.apply(this, arguments), this
        },
        _toggleView: function(e, t) {
            return t = arguments[arguments.length - 1], typeof e != "boolean" && (e = this._isHidden() ? 1 : 0), e ? this._show() : this._hide(), typeof t == "function" && t.call(this), this
        },
        hide: function(e) {
            return e = arguments[arguments.length - 1], this.toggleView(!1, e), this
        },
        _hide: function() {
            this.setAttribute("hidden", "hidden"), this.setStyle("display", "none")
        }
    }), e.NodeList.importMethod(e.Node.prototype, ["show", "hide", "toggleView"])
}, "3.18.1", {
    requires: ["dom-style", "node-base"]
});
YUI.add("oop", function(e, t) {
    function a(t, n, i, s, o) {
        if (t && t[o] && t !== e) return t[o].call(t, n, i);
        switch (r.test(t)) {
            case 1:
                return r[o](t, n, i);
            case 2:
                return r[o](e.Array(t, 0, !0), n, i);
            default:
                return e.Object[o](t, n, i, s)
        }
    }
    var n = e.Lang,
        r = e.Array,
        i = Object.prototype,
        s = "_~yuim~_",
        o = i.hasOwnProperty,
        u = i.toString;
    e.augment = function(t, n, r, i, s) {
        var a = t.prototype,
            f = a && n,
            l = n.prototype,
            c = a || t,
            h, p, d, v, m;
        return s = s ? e.Array(s) : [], f && (p = {}, d = {}, v = {}, h = function(e, t) {
            if (r || !(t in a)) u.call(e) === "[object Function]" ? (v[t] = e, p[t] = d[t] = function() {
                return m(this, e, arguments)
            }) : p[t] = e
        }, m = function(e, t, r) {
            for (var i in v) o.call(v, i) && e[i] === d[i] && (e[i] = v[i]);
            return n.apply(e, s), t.apply(e, r)
        }, i ? e.Array.each(i, function(e) {
            e in l && h(l[e], e)
        }) : e.Object.each(l, h, null, !0)), e.mix(c, p || l, r, i), f || n.apply(c, s), t
    }, e.aggregate = function(t, n, r, i) {
        return e.mix(t, n, r, i, 0, !0)
    }, e.extend = function(t, n, r, s) {
        (!n || !t) && e.error("extend failed, verify dependencies");
        var o = n.prototype,
            u = e.Object(o);
        return t.prototype = u, u.constructor = t, t.superclass = o, n != Object && o.constructor == i.constructor && (o.constructor = n), r && e.mix(u, r, !0), s && e.mix(t, s, !0), t
    }, e.each = function(e, t, n, r) {
        return a(e, t, n, r, "each")
    }, e.some = function(e, t, n, r) {
        return a(e, t, n, r, "some")
    }, e.clone = function(t, r, i, o, u, a) {
        var f, l, c;
        if (!n.isObject(t) || e.instanceOf(t, YUI) || t.addEventListener || t.attachEvent) return t;
        l = a || {};
        switch (n.type(t)) {
            case "date":
                return new Date(t);
            case "regexp":
                return t;
            case "function":
                return t;
            case "array":
                f = [];
                break;
            default:
                if (t[s]) return l[t[s]];
                c = e.guid(), f = r ? {} : e.Object(t), t[s] = c, l[c] = t
        }
        return e.each(t, function(n, a) {
            (a || a === 0) && (!i || i.call(o || this, n, a, this, t) !== !1) && a !== s && a != "prototype" && (this[a] = e.clone(n, r, i, o, u || t, l))
        }, f), a || (e.Object.each(l, function(e, t) {
            if (e[s]) try {
                delete e[s]
            } catch (n) {
                e[s] = null
            }
        }, this), l = null), f
    }, e.bind = function(t, r) {
        var i = arguments.length > 2 ? e.Array(arguments, 2, !0) : null;
        return function() {
            var s = n.isString(t) ? r[t] : t,
                o = i ? i.concat(e.Array(arguments, 0, !0)) : arguments;
            return s.apply(r || s, o)
        }
    }, e.rbind = function(t, r) {
        var i = arguments.length > 2 ? e.Array(arguments, 2, !0) : null;
        return function() {
            var s = n.isString(t) ? r[t] : t,
                o = i ? e.Array(arguments, 0, !0).concat(i) : arguments;
            return s.apply(r || s, o)
        }
    }
}, "3.18.1", {
    requires: ["yui-base"]
});
YUI.add("parallel", function(e, t) {
    e.Parallel = function(t) {
        this.config = t || {}, this.results = [], this.context = this.config.context || e, this.total = 0, this.finished = 0
    }, e.Parallel.prototype = {
        results: null,
        total: null,
        finished: null,
        add: function(t) {
            var n = this,
                r = n.total;
            return n.total += 1,
                function() {
                    n.finished++, n.results[r] = t && t.apply(n.context, arguments) || (arguments.length === 1 ? arguments[0] : e.Array(arguments)), n.test()
                }
        },
        test: function() {
            var e = this;
            e.finished >= e.total && e.callback && e.callback.call(e.context, e.results, e.data)
        },
        done: function(e, t) {
            this.callback = e, this.data = t, this.test()
        }
    }
}, "3.18.1", {
    requires: ["yui-base"]
});
YUI.add("plugin", function(e, t) {
    function n(t) {
        !this.hasImpl || !this.hasImpl(e.Plugin.Base) ? n.superclass.constructor.apply(this, arguments) : n.prototype.initializer.apply(this, arguments)
    }
    n.ATTRS = {
        host: {
            writeOnce: !0
        }
    }, n.NAME = "plugin", n.NS = "plugin", e.extend(n, e.Base, {
        _handles: null,
        initializer: function(e) {
            this._handles = []
        },
        destructor: function() {
            if (this._handles)
                for (var e = 0, t = this._handles.length; e < t; e++) this._handles[e].detach()
        },
        doBefore: function(e, t, n) {
            var r = this.get("host"),
                i;
            return e in r ? i = this.beforeHostMethod(e, t, n) : r.on && (i = this.onHostEvent(e, t, n)), i
        },
        doAfter: function(e, t, n) {
            var r = this.get("host"),
                i;
            return e in r ? i = this.afterHostMethod(e, t, n) : r.after && (i = this.afterHostEvent(e, t, n)), i
        },
        onHostEvent: function(e, t, n) {
            var r = this.get("host").on(e, t, n || this);
            return this._handles.push(r), r
        },
        onceHostEvent: function(e, t, n) {
            var r = this.get("host").once(e, t, n || this);
            return this._handles.push(r), r
        },
        afterHostEvent: function(e, t, n) {
            var r = this.get("host").after(e, t, n || this);
            return this._handles.push(r), r
        },
        onceAfterHostEvent: function(e, t, n) {
            var r = this.get("host").onceAfter(e, t, n || this);
            return this._handles.push(r), r
        },
        beforeHostMethod: function(t, n, r) {
            var i = e.Do.before(n, this.get("host"), t, r || this);
            return this._handles.push(i), i
        },
        afterHostMethod: function(t, n, r) {
            var i = e.Do.after(n, this.get("host"), t, r || this);
            return this._handles.push(i), i
        },
        toString: function() {
            return this.constructor.NAME + "[" + this.constructor.NS + "]"
        }
    }), e.namespace("Plugin").Base = n
}, "3.18.1", {
    requires: ["base-base"]
});
YUI.add("pluginhost-base", function(e, t) {
    function r() {
        this._plugins = {}
    }
    var n = e.Lang;
    r.prototype = {
        plug: function(e, t) {
            var r, i, s;
            if (n.isArray(e))
                for (r = 0, i = e.length; r < i; r++) this.plug(e[r]);
            else e && !n.isFunction(e) && (t = e.cfg, e = e.fn), e && e.NS && (s = e.NS, t = t || {}, t.host = this, this.hasPlugin(s) ? this[s].setAttrs && this[s].setAttrs(t) : (this[s] = new e(t), this._plugins[s] = e));
            return this
        },
        unplug: function(e) {
            var t = e,
                r = this._plugins;
            if (e) n.isFunction(e) && (t = e.NS, t && (!r[t] || r[t] !== e) && (t = null)), t && (this[t] && (this[t].destroy && this[t].destroy(), delete this[t]), r[t] && delete r[t]);
            else
                for (t in this._plugins) this._plugins.hasOwnProperty(t) && this.unplug(t);
            return this
        },
        hasPlugin: function(e) {
            return this._plugins[e] && this[e]
        },
        _initPlugins: function(e) {
            this._plugins = this._plugins || {}, this._initConfigPlugins && this._initConfigPlugins(e)
        },
        _destroyPlugins: function() {
            this.unplug()
        }
    }, e.namespace("Plugin").Host = r
}, "3.18.1", {
    requires: ["yui-base"]
});
YUI.add("pluginhost-config", function(e, t) {
    var n = e.Plugin.Host,
        r = e.Lang;
    n.prototype._initConfigPlugins = function(t) {
        var n = this._getClasses ? this._getClasses() : [this.constructor],
            r = [],
            i = {},
            s, o, u, a, f;
        for (o = n.length - 1; o >= 0; o--) s = n[o], a = s._UNPLUG, a && e.mix(i, a, !0), u = s._PLUG, u && e.mix(r, u, !0);
        for (f in r) r.hasOwnProperty(f) && (i[f] || this.plug(r[f]));
        t && t.plugins && this.plug(t.plugins)
    }, n.plug = function(t, n, i) {
        var s, o, u, a;
        if (t !== e.Base) {
            t._PLUG = t._PLUG || {}, r.isArray(n) || (i && (n = {
                fn: n,
                cfg: i
            }), n = [n]);
            for (o = 0, u = n.length; o < u; o++) s = n[o], a = s.NAME || s.fn.NAME, t._PLUG[a] = s
        }
    }, n.unplug = function(t, n) {
        var i, s, o, u;
        if (t !== e.Base) {
            t._UNPLUG = t._UNPLUG || {}, r.isArray(n) || (n = [n]);
            for (s = 0, o = n.length; s < o; s++) i = n[s], u = i.NAME, t._PLUG[u] ? delete t._PLUG[u] : t._UNPLUG[u] = i
        }
    }
}, "3.18.1", {
    requires: ["pluginhost-base"]
});
YUI.add("promise", function(e, t) {
    function i(e) {
        if (!(this instanceof i)) return new i(e);
        var t = new i.Resolver(this);
        this._resolver = t;
        try {
            e.call(this, function(e) {
                t.resolve(e)
            }, function(e) {
                t.reject(e)
            })
        } catch (n) {
            t.reject(n)
        }
    }

    function s(e) {
        this._callbacks = [], this._errbacks = [], this.promise = e, this._status = "pending", this._result = null
    }
    var n = e.Lang,
        r = [].slice;
    e.mix(i.prototype, {
        then: function(e, t) {
            var n = this.constructor,
                r = this._resolver;
            return new n(function(n, s) {
                r._addCallbacks(typeof e == "function" ? i._wrap(n, s, e) : n, typeof t == "function" ? i._wrap(n, s, t) : s)
            })
        },
        "catch": function(e) {
            return this.then(undefined, e)
        },
        getStatus: function() {
            return this._resolver.getStatus()
        }
    }), i._wrap = function(e, t, n) {
        return function(r) {
            var i;
            try {
                i = n(r)
            } catch (s) {
                t(s);
                return
            }
            e(i)
        }
    }, i.isPromise = function(e) {
        var t;
        try {
            t = e.then
        } catch (n) {}
        return typeof t == "function"
    }, i.resolve = function(e) {
        return i.isPromise(e) && e.constructor === this ? e : new this(function(t) {
            t(e)
        })
    }, i.reject = function(e) {
        return new this(function(t, n) {
            n(e)
        })
    }, i.all = function(e) {
        var t = this;
        return new t(function(r, i) {
            function f(e) {
                return function(t) {
                    a[e] = t, s--, s || r(a)
                }
            }
            if (!n.isArray(e)) {
                i(new TypeError("Promise.all expects an array of values or promises"));
                return
            }
            var s = e.length,
                o = 0,
                u = e.length,
                a = [];
            if (u < 1) return r(a);
            for (; o < u; o++) t.resolve(e[o]).then(f(o), i)
        })
    }, i.race = function(e) {
        var t = this;
        return new t(function(r, i) {
            if (!n.isArray(e)) {
                i(new TypeError("Promise.race expects an array of values or promises"));
                return
            }
            for (var s = 0, o = e.length; s < o; s++) t.resolve(e[s]).then(r, i)
        })
    }, e.Promise = i, e.mix(s.prototype, {
        fulfill: function(e) {
            this._status === "pending" && (this._result = e, this._status = "fulfilled"), this._status === "fulfilled" && (this._notify(this._callbacks, this._result), this._callbacks = [], this._errbacks = null)
        },
        reject: function(e) {
            this._status === "pending" && (this._result = e, this._status = "rejected"), this._status === "rejected" && (this._notify(this._errbacks, this._result), this._callbacks = null, this._errbacks = [])
        },
        resolve: function(e) {
            var t = this;
            i.isPromise(e) ? e.then(function(e) {
                t.resolve(e)
            }, function(e) {
                t.reject(e)
            }) : this.fulfill(e)
        },
        then: function(e, t) {
            return this.promise.then(e, t)
        },
        _addCallbacks: function(e, t) {
            var n = this._callbacks,
                r = this._errbacks,
                i = this._status,
                s = this._result;
            n && typeof e == "function" && n.push(e), r && typeof t == "function" && r.push(t), i === "fulfilled" ? this.fulfill(s) : i === "rejected" && this.reject(s)
        },
        getStatus: function() {
            return this._status
        },
        _notify: function(t, n) {
            t.length && e.soon(function() {
                var e, r;
                for (e = 0, r = t.length; e < r; ++e) t[e](n)
            })
        }
    }, !0), e.Promise.Resolver = s, e.when = function(e, t, n) {
        return e = i.resolve(e), t || n ? e.then(t, n) : e
    }, e.batch = function() {
        return i.all(r.call(arguments))
    }
}, "3.18.1", {
    requires: ["timers"]
});
YUI.add("querystring-parse-simple", function(e, t) {
    var n = e.namespace("QueryString");
    n.parse = function(e, t, r) {
        t = t || "&", r = r || "=";
        for (var i = {}, s = 0, o = e.split(t), u = o.length, a; s < u; s++) a = o[s].split(r), a.length > 0 && (i[n.unescape(a.shift())] = n.unescape(a.join(r)));
        return i
    }, n.unescape = function(e) {
        return decodeURIComponent(e.replace(/\+/g, " "))
    }
}, "3.18.1", {
    requires: ["yui-base"]
});
YUI.add("querystring-parse", function(e, t) {
    var n = e.namespace("QueryString"),
        r = function(t) {
            return function r(i, s) {
                var o, u, a, f, l;
                return arguments.length !== 2 ? (i = i.split(t), r(n.unescape(i.shift()), n.unescape(i.join(t)))) : (i = i.replace(/^\s+|\s+$/g, ""), e.Lang.isString(s) && (s = s.replace(/^\s+|\s+$/g, ""), isNaN(s) || (u = +s, s === u.toString(10) && (s = u))), o = /(.*)\[([^\]]*)\]$/.exec(i), o ? (f = o[2], a = o[1], f ? (l = {}, l[f] = s, r(a, l)) : r(a, [s])) : (l = {}, i && (l[i] = s), l))
            }
        },
        i = function(t, n) {
            return t ? e.Lang.isArray(t) ? t.concat(n) : !e.Lang.isObject(t) || !e.Lang.isObject(n) ? [t].concat(n) : s(t, n) : n
        },
        s = function(e, t) {
            for (var n in t) n && t.hasOwnProperty(n) && (e[n] = i(e[n], t[n]));
            return e
        };
    n.parse = function(t, n, s) {
        return e.Array.reduce(e.Array.map(t.split(n || "&"), r(s || "=")), {}, i)
    }, n.unescape = function(e) {
        return decodeURIComponent(e.replace(/\+/g, " "))
    }
}, "3.18.1", {
    requires: ["yui-base", "array-extras"]
});
YUI.add("querystring-stringify-simple", function(e, t) {
    var n = e.namespace("QueryString"),
        r = encodeURIComponent;
    n.stringify = function(t, n) {
        var i = [],
            s = n && n.arrayKey ? !0 : !1,
            o, u, a;
        for (o in t)
            if (t.hasOwnProperty(o))
                if (e.Lang.isArray(t[o]))
                    for (u = 0, a = t[o].length; u < a; u++) i.push(r(s ? o + "[]" : o) + "=" + r(t[o][u]));
                else i.push(r(o) + "=" + r(t[o]));
        return i.join("&")
    }
}, "3.18.1", {
    requires: ["yui-base"]
});
YUI.add("querystring-stringify", function(e, t) {
    var n = e.namespace("QueryString"),
        r = [],
        i = e.Lang;
    n.escape = encodeURIComponent, n.stringify = function(e, t, s) {
        var o, u, a, f, l, c, h = t && t.sep ? t.sep : "&",
            p = t && t.eq ? t.eq : "=",
            d = t && t.arrayKey ? t.arrayKey : !1;
        if (i.isNull(e) || i.isUndefined(e) || i.isFunction(e)) return s ? n.escape(s) + p : "";
        if (i.isBoolean(e) || Object.prototype.toString.call(e) === "[object Boolean]") e = +e;
        if (i.isNumber(e) || i.isString(e)) return n.escape(s) + p + n.escape(e);
        if (i.isArray(e)) {
            c = [], s = d ? s + "[]" : s, f = e.length;
            for (a = 0; a < f; a++) c.push(n.stringify(e[a], t, s));
            return c.join(h)
        }
        for (a = r.length - 1; a >= 0; --a)
            if (r[a] === e) throw new Error("QueryString.stringify. Cyclical reference");
        r.push(e), c = [], o = s ? s + "[" : "", u = s ? "]" : "";
        for (a in e) e.hasOwnProperty(a) && (l = o + a + u, c.push(n.stringify(e[a], t, l)));
        return r.pop(), c = c.join(h), !c && s ? s + "=" : c
    }
}, "3.18.1", {
    requires: ["yui-base"]
});
YUI.add("selector-css2", function(e, t) {
    var n = "parentNode",
        r = "tagName",
        i = "attributes",
        s = "combinator",
        o = "pseudos",
        u = e.Selector,
        a = {
            _reRegExpTokens: /([\^\$\?\[\]\*\+\-\.\(\)\|\\])/,
            SORT_RESULTS: !0,
            _isXML: function() {
                var t = e.config.doc.createElement("div").tagName !== "DIV";
                return t
            }(),
            shorthand: {
                "\\#(-?[_a-z0-9]+[-\\w\\uE000]*)": "[id=$1]",
                "\\.(-?[_a-z]+[-\\w\\uE000]*)": "[className~=$1]"
            },
            operators: {
                "": function(t, n) {
                    return e.DOM.getAttribute(t, n) !== ""
                },
                "~=": "(?:^|\\s+){val}(?:\\s+|$)",
                "|=": "^{val}-?"
            },
            pseudos: {
                "first-child": function(t) {
                    return e.DOM._children(t[n])[0] === t
                }
            },
            _bruteQuery: function(t, n, r) {
                var i = [],
                    s = [],
                    o, a = u._tokenize(t),
                    f = a[a.length - 1],
                    l = e.DOM._getDoc(n),
                    c, h, p, d, v;
                if (f) {
                    h = f.id, p = f.className, d = f.tagName || "*";
                    if (n.getElementsByTagName) h && (n.all || n.nodeType === 9 || e.DOM.inDoc(n)) ? s = e.DOM.allById(h, n) : p ? s = n.getElementsByClassName(p) : s = n.getElementsByTagName(d);
                    else {
                        o = [], c = n.firstChild, v = d === "*";
                        while (c) {
                            while (c) c.tagName > "@" && (v || c.tagName === d) && s.push(c), o.push(c), c = c.firstChild;
                            while (o.length > 0 && !c) c = o.pop().nextSibling
                        }
                    }
                    s.length && (i = u._filterNodes(s, a, r))
                }
                return i
            },
            _filterNodes: function(t, n, r) {
                var i = 0,
                    s, o = n.length,
                    a = o - 1,
                    f = [],
                    l = t[0],
                    c = l,
                    h = e.Selector.getters,
                    p, d, v, m, g, y, b, w;
                for (i = 0; c = l = t[i++];) {
                    a = o - 1, m = null;
                    e: while (c && c.tagName) {
                        v = n[a], b = v.tests, s = b.length;
                        if (s && !g)
                            while (w = b[--s]) {
                                p = w[1], h[w[0]] ? y = h[w[0]](c, w[0]) : (y = c[w[0]], w[0] === "tagName" && !u._isXML && (y = y.toUpperCase()), typeof y != "string" && y !== undefined && y.toString ? y = y.toString() : y === undefined && c.getAttribute && (y = c.getAttribute(w[0], 2)));
                                if (p === "=" && y !== w[2] || typeof p != "string" && p.test && !p.test(y) || !p.test && typeof p == "function" && !p(c, w[0], w[2])) {
                                    if (c = c[m])
                                        while (c && (!c.tagName || v.tagName && v.tagName !== c.tagName)) c = c[m];
                                    continue e
                                }
                            }
                        a--;
                        if (!!g || !(d = v.combinator)) {
                            f.push(l);
                            if (r) return f;
                            break
                        }
                        m = d.axis, c = c[m];
                        while (c && !c.tagName) c = c[m];
                        d.direct && (m = null)
                    }
                }
                return l = c = null, f
            },
            combinators: {
                " ": {
                    axis: "parentNode"
                },
                ">": {
                    axis: "parentNode",
                    direct: !0
                },
                "+": {
                    axis: "previousSibling",
                    direct: !0
                }
            },
            _parsers: [{
                name: i,
                re: /^\uE003(-?[a-z]+[\w\-]*)+([~\|\^\$\*!=]=?)?['"]?([^\uE004'"]*)['"]?\uE004/i,
                fn: function(t, n) {
                    var r = t[2] || "",
                        i = u.operators,
                        s = t[3] ? t[3].replace(/\\/g, "") : "",
                        o;
                    if (t[1] === "id" && r === "=" || t[1] === "className" && e.config.doc.documentElement.getElementsByClassName && (r === "~=" || r === "=")) n.prefilter = t[1], t[3] = s, n[t[1]] = t[1] === "id" ? t[3] : s;
                    r in i && (o = i[r], typeof o == "string" && (t[3] = s.replace(u._reRegExpTokens, "\\$1"), o = new RegExp(o.replace("{val}", t[3]))), t[2] = o);
                    if (!n.last || n.prefilter !== t[1]) return t.slice(1)
                }
            }, {
                name: r,
                re: /^((?:-?[_a-z]+[\w-]*)|\*)/i,
                fn: function(e, t) {
                    var n = e[1];
                    u._isXML || (n = n.toUpperCase()), t.tagName = n;
                    if (n !== "*" && (!t.last || t.prefilter)) return [r, "=", n];
                    t.prefilter || (t.prefilter = "tagName")
                }
            }, {
                name: s,
                re: /^\s*([>+~]|\s)\s*/,
                fn: function(e, t) {}
            }, {
                name: o,
                re: /^:([\-\w]+)(?:\uE005['"]?([^\uE005]*)['"]?\uE006)*/i,
                fn: function(e, t) {
                    var n = u[o][e[1]];
                    return n ? (e[2] && (e[2] = e[2].replace(/\\/g, "")), [e[2], n]) : !1
                }
            }],
            _getToken: function(e) {
                return {
                    tagName: null,
                    id: null,
                    className: null,
                    attributes: {},
                    combinator: null,
                    tests: []
                }
            },
            _tokenize: function(t) {
                t = t || "", t = u._parseSelector(e.Lang.trim(t));
                var n = u._getToken(),
                    r = t,
                    i = [],
                    o = !1,
                    a, f, l, c;
                e: do {
                    o = !1;
                    for (l = 0; c = u._parsers[l++];)
                        if (a = c.re.exec(t)) {
                            c.name !== s && (n.selector = t), t = t.replace(a[0], ""), t.length || (n.last = !0), u._attrFilters[a[1]] && (a[1] = u._attrFilters[a[1]]), f = c.fn(a, n);
                            if (f === !1) {
                                o = !1;
                                break e
                            }
                            f && n.tests.push(f);
                            if (!t.length || c.name === s) i.push(n), n = u._getToken(n), c.name === s && (n.combinator = e.Selector.combinators[a[1]]);
                            o = !0
                        }
                } while (o && t.length);
                if (!o || t.length) i = [];
                return i
            },
            _replaceMarkers: function(e) {
                return e = e.replace(/\[/g, "\ue003"), e = e.replace(/\]/g, "\ue004"), e = e.replace(/\(/g, "\ue005"), e = e.replace(/\)/g, "\ue006"), e
            },
            _replaceShorthand: function(t) {
                var n = e.Selector.shorthand,
                    r;
                for (r in n) n.hasOwnProperty(r) && (t = t.replace(new RegExp(r, "gi"), n[r]));
                return t
            },
            _parseSelector: function(t) {
                var n = e.Selector._replaceSelector(t),
                    t = n.selector;
                return t = e.Selector._replaceShorthand(t), t = e.Selector._restore("attr", t, n.attrs), t = e.Selector._restore("pseudo", t, n.pseudos), t = e.Selector._replaceMarkers(t), t = e.Selector._restore("esc", t, n.esc), t
            },
            _attrFilters: {
                "class": "className",
                "for": "htmlFor"
            },
            getters: {
                href: function(t, n) {
                    return e.DOM.getAttribute(t, n)
                },
                id: function(t, n) {
                    return e.DOM.getId(t)
                }
            }
        };
    e.mix(e.Selector, a, !0), e.Selector.getters.src = e.Selector.getters.rel = e.Selector.getters.href, e.Selector.useNative && e.config.doc.querySelector && (e.Selector.shorthand["\\.(-?[_a-z]+[-\\w]*)"] = "[class~=$1]")
}, "3.18.1", {
    requires: ["selector-native"]
});
YUI.add("selector-css3", function(e, t) {
    e.Selector._reNth = /^(?:([\-]?\d*)(n){1}|(odd|even)$)*([\-+]?\d*)$/, e.Selector._getNth = function(t, n, r, i) {
        e.Selector._reNth.test(n);
        var s = parseInt(RegExp.$1, 10),
            o = RegExp.$2,
            u = RegExp.$3,
            a = parseInt(RegExp.$4, 10) || 0,
            f = [],
            l = e.DOM._children(t.parentNode, r),
            c;
        u ? (s = 2, c = "+", o = "n", a = u === "odd" ? 1 : 0) : isNaN(s) && (s = o ? 1 : 0);
        if (s === 0) return i && (a = l.length - a + 1), l[a - 1] === t ? !0 : !1;
        s < 0 && (i = !!i, s = Math.abs(s));
        if (!i) {
            for (var h = a - 1, p = l.length; h < p; h += s)
                if (h >= 0 && l[h] === t) return !0
        } else
            for (var h = l.length - a, p = l.length; h >= 0; h -= s)
                if (h < p && l[h] === t) return !0;
        return !1
    }, e.mix(e.Selector.pseudos, {
        root: function(e) {
            return e === e.ownerDocument.documentElement
        },
        "nth-child": function(t, n) {
            return e.Selector._getNth(t, n)
        },
        "nth-last-child": function(t, n) {
            return e.Selector._getNth(t, n, null, !0)
        },
        "nth-of-type": function(t, n) {
            return e.Selector._getNth(t, n, t.tagName)
        },
        "nth-last-of-type": function(t, n) {
            return e.Selector._getNth(t, n, t.tagName, !0)
        },
        "last-child": function(t) {
            var n = e.DOM._children(t.parentNode);
            return n[n.length - 1] === t
        },
        "first-of-type": function(t) {
            return e.DOM._children(t.parentNode, t.tagName)[0] === t
        },
        "last-of-type": function(t) {
            var n = e.DOM._children(t.parentNode, t.tagName);
            return n[n.length - 1] === t
        },
        "only-child": function(t) {
            var n = e.DOM._children(t.parentNode);
            return n.length === 1 && n[0] === t
        },
        "only-of-type": function(t) {
            var n = e.DOM._children(t.parentNode, t.tagName);
            return n.length === 1 && n[0] === t
        },
        empty: function(e) {
            return e.childNodes.length === 0
        },
        not: function(t, n) {
            return !e.Selector.test(t, n)
        },
        contains: function(e, t) {
            var n = e.innerText || e.textContent || "";
            return n.indexOf(t) > -1
        },
        checked: function(e) {
            return e.checked === !0 || e.selected === !0
        },
        enabled: function(e) {
            return e.disabled !== undefined && !e.disabled
        },
        disabled: function(e) {
            return e.disabled
        }
    }), e.mix(e.Selector.operators, {
        "^=": "^{val}",
        "$=": "{val}$",
        "*=": "{val}"
    }), e.Selector.combinators["~"] = {
        axis: "previousSibling"
    }
}, "3.18.1", {
    requires: ["selector-native", "selector-css2"]
});
YUI.add("selector-native", function(e, t) {
    (function(e) {
        e.namespace("Selector");
        var t = "compareDocumentPosition",
            n = "ownerDocument",
            r = {
                _types: {
                    esc: {
                        token: "\ue000",
                        re: /\\[:\[\]\(\)#\.\'\>+~"]/gi
                    },
                    attr: {
                        token: "\ue001",
                        re: /(\[[^\]]*\])/g
                    },
                    pseudo: {
                        token: "\ue002",
                        re: /(\([^\)]*\))/g
                    }
                },
                useNative: !0,
                _escapeId: function(e) {
                    return e && (e = e.replace(/([:\[\]\(\)#\.'<>+~"])/g, "\\$1")), e
                },
                _compare: "sourceIndex" in e.config.doc.documentElement ? function(e, t) {
                    var n = e.sourceIndex,
                        r = t.sourceIndex;
                    return n === r ? 0 : n > r ? 1 : -1
                } : e.config.doc.documentElement[t] ? function(e, n) {
                    return e[t](n) & 4 ? -1 : 1
                } : function(e, t) {
                    var r, i, s;
                    return e && t && (r = e[n].createRange(), r.setStart(e, 0), i = t[n].createRange(), i.setStart(t, 0), s = r.compareBoundaryPoints(1, i)), s
                },
                _sort: function(t) {
                    return t && (t = e.Array(t, 0, !0), t.sort && t.sort(r._compare)), t
                },
                _deDupe: function(e) {
                    var t = [],
                        n, r;
                    for (n = 0; r = e[n++];) r._found || (t[t.length] = r, r._found = !0);
                    for (n = 0; r = t[n++];) r._found = null, r.removeAttribute("_found");
                    return t
                },
                query: function(t, n, i, s) {
                    n = n || e.config.doc;
                    var o = [],
                        u = e.Selector.useNative && e.config.doc.querySelector && !s,
                        a = [
                            [t, n]
                        ],
                        f, l, c, h = u ? e.Selector._nativeQuery : e.Selector._bruteQuery;
                    if (t && h) {
                        !s && (!u || n.tagName) && (a = r._splitQueries(t, n));
                        for (c = 0; f = a[c++];) l = h(f[0], f[1], i), i || (l = e.Array(l, 0, !0)), l && (o = o.concat(l));
                        a.length > 1 && (o = r._sort(r._deDupe(o)))
                    }
                    return i ? o[0] || null : o
                },
                _replaceSelector: function(t) {
                    var n = e.Selector._parse("esc", t),
                        i, s;
                    return t = e.Selector._replace("esc", t), s = e.Selector._parse("pseudo", t), t = r._replace("pseudo", t), i = e.Selector._parse("attr", t), t = e.Selector._replace("attr", t), {
                        esc: n,
                        attrs: i,
                        pseudos: s,
                        selector: t
                    }
                },
                _restoreSelector: function(t) {
                    var n = t.selector;
                    return n = e.Selector._restore("attr", n, t.attrs), n = e.Selector._restore("pseudo", n, t.pseudos), n = e.Selector._restore("esc", n, t.esc), n
                },
                _replaceCommas: function(t) {
                    var n = e.Selector._replaceSelector(t),
                        t = n.selector;
                    return t && (t = t.replace(/,/g, "\ue007"), n.selector = t, t = e.Selector._restoreSelector(n)), t
                },
                _splitQueries: function(t, n) {
                    t.indexOf(",") > -1 && (t = e.Selector._replaceCommas(t));
                    var r = t.split("\ue007"),
                        i = [],
                        s = "",
                        o, u, a;
                    if (n) {
                        n.nodeType === 1 && (o = e.Selector._escapeId(e.DOM.getId(n)), o || (o = e.guid(), e.DOM.setId(n, o)), s = '[id="' + o + '"] ');
                        for (u = 0, a = r.length; u < a; ++u) t = s + r[u], i.push([t, n])
                    }
                    return i
                },
                _nativeQuery: function(t, n, r) {
                    if ((e.UA.webkit || e.UA.opera) && t.indexOf(":checked") > -1 && e.Selector.pseudos && e.Selector.pseudos.checked) return e.Selector.query(t, n, r, !0);
                    try {
                        return n["querySelector" + (r ? "" : "All")](t)
                    } catch (i) {
                        return e.Selector.query(t, n, r, !0)
                    }
                },
                filter: function(t, n) {
                    var r = [],
                        i, s;
                    if (t && n)
                        for (i = 0; s = t[i++];) e.Selector.test(s, n) && (r[r.length] = s);
                    return r
                },
                test: function(t, r, i) {
                    var s = !1,
                        o = !1,
                        u, a, f, l, c, h, p, d, v;
                    if (t && t.tagName)
                        if (typeof r == "function") s = r.call(t, t);
                        else {
                            u = r.split(","), !i && !e.DOM.inDoc(t) && (a = t.parentNode, a ? i = a : (c = t[n].createDocumentFragment(), c.appendChild(t), i = c, o = !0)), i = i || t[n], h = e.Selector._escapeId(e.DOM.getId(t)), h || (h = e.guid(), e.DOM.setId(t, h));
                            for (p = 0; v = u[p++];) {
                                v += '[id="' + h + '"]', l = e.Selector.query(v, i);
                                for (d = 0; f = l[d++];)
                                    if (f === t) {
                                        s = !0;
                                        break
                                    } if (s) break
                            }
                            o && c.removeChild(t)
                        } return s
                },
                ancestor: function(t, n, r) {
                    return e.DOM.ancestor(t, function(t) {
                        return e.Selector.test(t, n)
                    }, r)
                },
                _parse: function(t, n) {
                    return n.match(e.Selector._types[t].re)
                },
                _replace: function(t, n) {
                    var r = e.Selector._types[t];
                    return n.replace(r.re, r.token)
                },
                _restore: function(t, n, r) {
                    if (r) {
                        var i = e.Selector._types[t].token,
                            s, o;
                        for (s = 0, o = r.length; s < o; ++s) n = n.replace(i, r[s])
                    }
                    return n
                }
            };
        e.mix(e.Selector, r, !0)
    })(e)
}, "3.18.1", {
    requires: ["dom-base"]
});
YUI.add("selector", function(e, t) {}, "3.18.1", {
    requires: ["selector-native"]
});
YUI.add("shim-plugin", function(e, t) {
    function n(e) {
        this.init(e)
    }
    n.CLASS_NAME = "yui-node-shim", n.TEMPLATE = '<iframe class="' + n.CLASS_NAME + '" frameborder="0" title="Node Stacking Shim"' + 'src="javascript:false" tabindex="-1" role="presentation"' + 'style="position:absolute; z-index:-1;"></iframe>', n.prototype = {
        init: function(e) {
            this._host = e.host, this.initEvents(), this.insert(), this.sync()
        },
        initEvents: function() {
            this._resizeHandle = this._host.on("resize", this.sync, this)
        },
        getShim: function() {
            return this._shim || (this._shim = e.Node.create(n.TEMPLATE, this._host.get("ownerDocument")))
        },
        insert: function() {
            var e = this._host;
            this._shim = e.insertBefore(this.getShim(), e.get("firstChild"))
        },
        sync: function() {
            var e = this._shim,
                t = this._host;
            e && e.setAttrs({
                width: t.getStyle("width"),
                height: t.getStyle("height")
            })
        },
        destroy: function() {
            var e = this._shim;
            e && e.remove(!0), this._resizeHandle.detach()
        }
    }, n.NAME = "Shim", n.NS = "shim", e.namespace("Plugin"), e.Plugin.Shim = n
}, "3.18.1", {
    requires: ["node-style", "node-pluginhost"]
});
YUI.add("template-base", function(e, t) {
    function n(t, n) {
        this.defaults = n, this.engine = t || e.Template.Micro, this.engine || e.error("No template engine loaded.")
    }
    n._registry = {}, n.register = function(e, t) {
        return n._registry[e] = t, t
    }, n.get = function(e) {
        return n._registry[e]
    }, n.render = function(t, r, i) {
        var s = n._registry[t],
            o = "";
        return s ? o = s(r, i) : e.error('Unregistered template: "' + t + '"'), o
    }, n.prototype = {
        compile: function(t, n) {
            return n = n ? e.merge(this.defaults, n) : this.defaults, this.engine.compile(t, n)
        },
        precompile: function(t, n) {
            return n = n ? e.merge(this.defaults, n) : this.defaults, this.engine.precompile(t, n)
        },
        render: function(t, n, r) {
            return r = r ? e.merge(this.defaults, r) : this.defaults, this.engine.render ? this.engine.render(t, n, r) : this.engine.compile(t, r)(n, r)
        },
        revive: function(t, n) {
            return n = n ? e.merge(this.defaults, n) : this.defaults, this.engine.revive ? this.engine.revive(t, n) : t
        }
    }, e.Template = e.Template ? e.mix(n, e.Template) : n
}, "3.18.1", {
    requires: ["yui-base"]
});
YUI.add("text-data-wordbreak", function(e, t) {
    e.namespace("Text.Data").WordBreak = {
        aletter: "[A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f3\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u10a0-\u10c5\u10d0-\u10fa\u10fc\u1100-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1a00-\u1a16\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bc0-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u24b6-\u24e9\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2d00-\u2d25\u2d30-\u2d65\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005\u303b\u303c\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790\ua791\ua7a0-\ua7a9\ua7fa-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uffa0-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]",
        midnumlet: "['\\.\u2018\u2019\u2024\ufe52\uff07\uff0e]",
        midletter: "[:\u00b7\u00b7\u05f4\u2027\ufe13\ufe55\uff1a]",
        midnum: "[,;;\u0589\u060c\u060d\u066c\u07f8\u2044\ufe10\ufe14\ufe50\ufe54\uff0c\uff1b]",
        numeric: "[0-9\u0660-\u0669\u066b\u06f0-\u06f9\u07c0-\u07c9\u0966-\u096f\u09e6-\u09ef\u0a66-\u0a6f\u0ae6-\u0aef\u0b66-\u0b6f\u0be6-\u0bef\u0c66-\u0c6f\u0ce6-\u0cef\u0d66-\u0d6f\u0e50-\u0e59\u0ed0-\u0ed9\u0f20-\u0f29\u1040-\u1049\u1090-\u1099\u17e0-\u17e9\u1810-\u1819\u1946-\u194f\u19d0-\u19d9\u1a80-\u1a89\u1a90-\u1a99\u1b50-\u1b59\u1bb0-\u1bb9\u1c40-\u1c49\u1c50-\u1c59\ua620-\ua629\ua8d0-\ua8d9\ua900-\ua909\ua9d0-\ua9d9\uaa50-\uaa59\uabf0-\uabf9]",
        cr: "\\r",
        lf: "\\n",
        newline: "[\f\u0085\u2028\u2029]",
        extend: "[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0c01-\u0c03\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d02\u0d03\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f\u109a-\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b6-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u192b\u1930-\u193b\u19b0-\u19c0\u19c8\u19c9\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f\u1b00-\u1b04\u1b34-\u1b44\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1baa\u1be6-\u1bf3\u1c24-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf2\u1dc0-\u1de6\u1dfc-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa7b\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe3-\uabea\uabec\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]",
        format: "[\u00ad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200e\u200f\u202a-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb]",
        katakana: "[\u3031-\u3035\u309b\u309c\u30a0-\u30fa\u30fc-\u30ff\u31f0-\u31ff\u32d0-\u32fe\u3300-\u3357\uff66-\uff9d]",
        extendnumlet: "[_\u203f\u2040\u2054\ufe33\ufe34\ufe4d-\ufe4f\uff3f]",
        punctuation: "[!-#%-*,-\\/:;?@\\[-\\]_{}\u00a1\u00ab\u00b7\u00bb\u00bf;\u00b7\u055a-\u055f\u0589\u058a\u05be\u05c0\u05c3\u05c6\u05f3\u05f4\u0609\u060a\u060c\u060d\u061b\u061e\u061f\u066a-\u066d\u06d4\u0700-\u070d\u07f7-\u07f9\u0830-\u083e\u085e\u0964\u0965\u0970\u0df4\u0e4f\u0e5a\u0e5b\u0f04-\u0f12\u0f3a-\u0f3d\u0f85\u0fd0-\u0fd4\u0fd9\u0fda\u104a-\u104f\u10fb\u1361-\u1368\u1400\u166d\u166e\u169b\u169c\u16eb-\u16ed\u1735\u1736\u17d4-\u17d6\u17d8-\u17da\u1800-\u180a\u1944\u1945\u1a1e\u1a1f\u1aa0-\u1aa6\u1aa8-\u1aad\u1b5a-\u1b60\u1bfc-\u1bff\u1c3b-\u1c3f\u1c7e\u1c7f\u1cd3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205e\u207d\u207e\u208d\u208e\u3008\u3009\u2768-\u2775\u27c5\u27c6\u27e6-\u27ef\u2983-\u2998\u29d8-\u29db\u29fc\u29fd\u2cf9-\u2cfc\u2cfe\u2cff\u2d70\u2e00-\u2e2e\u2e30\u2e31\u3001-\u3003\u3008-\u3011\u3014-\u301f\u3030\u303d\u30a0\u30fb\ua4fe\ua4ff\ua60d-\ua60f\ua673\ua67e\ua6f2-\ua6f7\ua874-\ua877\ua8ce\ua8cf\ua8f8-\ua8fa\ua92e\ua92f\ua95f\ua9c1-\ua9cd\ua9de\ua9df\uaa5c-\uaa5f\uaade\uaadf\uabeb\ufd3e\ufd3f\ufe10-\ufe19\ufe30-\ufe52\ufe54-\ufe61\ufe63\ufe68\ufe6a\ufe6b\uff01-\uff03\uff05-\uff0a\uff0c-\uff0f\uff1a\uff1b\uff1f\uff20\uff3b-\uff3d\uff3f\uff5b\uff5d\uff5f-\uff65]"
    }
}, "3.18.1", {
    requires: ["yui-base"]
});
YUI.add("text-wordbreak", function(e, t) {
    var n = e.Text,
        r = n.Data.WordBreak,
        i = 0,
        s = 1,
        o = 2,
        u = 3,
        a = 4,
        f = 5,
        l = 6,
        c = 7,
        h = 8,
        p = 9,
        d = 10,
        v = 11,
        m = 12,
        g = [new RegExp(r.aletter), new RegExp(r.midnumlet), new RegExp(r.midletter), new RegExp(r.midnum), new RegExp(r.numeric), new RegExp(r.cr), new RegExp(r.lf), new RegExp(r.newline), new RegExp(r.extend), new RegExp(r.format), new RegExp(r.katakana), new RegExp(r.extendnumlet)],
        y = "",
        b = new RegExp("^" + r.punctuation + "$"),
        w = /\s/,
        E = {
            getWords: function(e, t) {
                var n = 0,
                    r = E._classify(e),
                    i = r.length,
                    s = [],
                    o = [],
                    u, a, f;
                t || (t = {}), t.ignoreCase && (e = e.toLowerCase()), a = t.includePunctuation, f = t.includeWhitespace;
                for (; n < i; ++n) u = e.charAt(n), s.push(u), E._isWordBoundary(r, n) && (s = s.join(y), s && (f || !w.test(s)) && (a || !b.test(s)) && o.push(s), s = []);
                return o
            },
            getUniqueWords: function(t, n) {
                return e.Array.unique(E.getWords(t, n))
            },
            isWordBoundary: function(e, t) {
                return E._isWordBoundary(E._classify(e), t)
            },
            _classify: function(e) {
                var t, n = [],
                    r = 0,
                    i, s, o = e.length,
                    u = g.length,
                    a;
                for (; r < o; ++r) {
                    t = e.charAt(r), a = m;
                    for (i = 0; i < u; ++i) {
                        s = g[i];
                        if (s && s.test(t)) {
                            a = i;
                            break
                        }
                    }
                    n.push(a)
                }
                return n
            },
            _isWordBoundary: function(e, t) {
                var n, r = e[t],
                    m = e[t + 1],
                    g;
                return t < 0 || t > e.length - 1 && t !== 0 ? !1 : r === i && m === i ? !1 : (g = e[t + 2], r !== i || m !== o && m !== s || g !== i ? (n = e[t - 1], r !== o && r !== s || m !== i || n !== i ? r !== a && r !== i || m !== a && m !== i ? r !== u && r !== s || m !== a || n !== a ? r !== a || m !== u && m !== s || g !== a ? r === h || r === p || n === h || n === p || m === h || m === p ? !1 : r === f && m === l ? !1 : r === c || r === f || r === l ? !0 : m === c || m === f || m === l ? !0 : r === d && m === d ? !1 : m !== v || r !== i && r !== a && r !== d && r !== v ? r !== v || m !== i && m !== a && m !== d ? !0 : !1 : !1 : !1 : !1 : !1 : !1) : !1)
            }
        };
    n.WordBreak = E
}, "3.18.1", {
    requires: ["array-extras", "text-data-wordbreak"]
});
YUI.add("timers", function(e, t) {
    function i(e) {
        return s
    }

    function s(e) {
        this.capacity = this.snap(e), this.length = 0, this.front = 0, this.initialize()
    }

    function o(e, t, n, r, i) {
        for (var s = 0; s < i; ++s) n[s + r] = e[s + t]
    }

    function u(e) {
        return e >>>= 0, e -= 1, e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, e |= e >> 16, e + 1
    }

    function v() {
        while (a.length > 0) {
            var e = a.shift();
            try {
                e.call()
            } catch (t) {
                if (d) throw l(), t;
                setTimeout(function() {
                    throw t
                }, 0)
            }
        }
        f = !1
    }

    function y(e) {
        d && p.domain && (e = p.domain.bind(e)), a.push(e), f || (l(), f = !0)
    }

    function b(e) {
        var t;
        return b._asynchronizer(function() {
            t || e()
        }), {
            cancel: function() {
                t = 1
            }
        }
    }
    var n = {},
        r = e.config.global;
    "use strict", n.exports = s, s.prototype.push = function(e) {
        var t = this.length;
        this.capacity <= t && this.grow(this.snap(this.capacity * this.growFactor));
        var n = this.front + t & this.capacity - 1;
        this[n] = e, this.length = t + 1
    }, s.prototype.shift = function() {
        var e = this.front,
            t = this[e];
        return this[e] = void 0, this.front = e + 1 & this.capacity - 1, this.length--, t
    }, s.prototype.grow = function(e) {
        var t = this.front,
            n = this.capacity,
            r = new Array(n),
            i = this.length;
        o(this, 0, r, 0, n), this.capacity = e, this.initialize(), this.front = 0;
        if (t + i <= n) o(r, t, this, 0, i);
        else {
            var s = i - (t + i & n - 1);
            o(r, t, this, 0, s), o(r, 0, this, s, i - s)
        }
    }, s.prototype.initialize = function() {
        var e = this.capacity;
        for (var t = 0; t < e; ++t) this[t] = void 0
    }, s.prototype.snap = function(e) {
        return typeof e != "number" ? this.minCapacity : u(Math.min(this.maxCapacity, Math.max(this.minCapacity, e)))
    }, s.prototype.maxCapacity = 1 << 30 | 0, s.prototype.minCapacity = 16, s.prototype.growFactor = 8, "use strict";
    var s = i("./queue"),
        a = new s(1024),
        f = !1,
        l = void 0,
        c = typeof setImmediate == "function",
        h, p = r.process,
        d = !!p && {}.toString.call(p) === "[object process]";
    if (d) l = function() {
        var e = p.domain;
        e && (h = h || (1, i)("domain"), h.active = p.domain = null), f && c ? setImmediate(v) : p.nextTick(v), e && (h.active = p.domain = e)
    };
    else if (c) l = function() {
        setImmediate(v)
    };
    else if (typeof MessageChannel != "undefined") {
        var m = new MessageChannel;
        m.port1.onmessage = function() {
            l = g, m.port1.onmessage = v, v()
        };
        var g = function() {
            m.port2.postMessage(0)
        };
        l = function() {
            setTimeout(v, 0), g()
        }
    } else l = function() {
        setTimeout(v, 0)
    };
    n.exports = y, b._asynchronizer = y, b._impl = "asap", e.soon = b
}, "3.18.1", {
    requires: ["yui-base"]
});
YUI.add("transition", function(e, t) {
    var n = "",
        r = "",
        i = e.config.doc,
        s = "documentElement",
        o = i[s].style,
        u = "transition",
        a = "transitionProperty",
        f, l, c, h, p, d, v = {},
        m = ["Webkit", "Moz"],
        g = {
            Webkit: "webkitTransitionEnd"
        },
        y = function() {
            this.init.apply(this, arguments)
        };
    y._TRANSFORM = "transform", y._toCamel = function(e) {
        return e = e.replace(/-([a-z])/gi, function(e, t) {
            return t.toUpperCase()
        }), e
    }, y._toHyphen = function(e) {
        return e = e.replace(/([A-Z]?)([a-z]+)([A-Z]?)/g, function(e, t, n, r) {
            var i = (t ? "-" + t.toLowerCase() : "") + n;
            return r && (i += "-" + r.toLowerCase()), i
        }), e
    }, y.SHOW_TRANSITION = "fadeIn", y.HIDE_TRANSITION = "fadeOut", y.useNative = !1, "transition" in o && "transitionProperty" in o && "transitionDuration" in o && "transitionTimingFunction" in o && "transitionDelay" in o ? (y.useNative = !0, y.supported = !0) : e.Array.each(m, function(e) {
        var t = e + "Transition";
        t in i[s].style && (n = e, r = y._toHyphen(e) + "-", y.useNative = !0, y.supported = !0, y._VENDOR_PREFIX = e)
    }), typeof o.transform == "undefined" && e.Array.each(m, function(e) {
        var t = e + "Transform";
        typeof o[t] != "undefined" && (y._TRANSFORM = t)
    }), n && (u = n + "Transition", a = n + "TransitionProperty"), f = r + "transition-property", l = r + "transition-duration", c = r + "transition-timing-function", h = r + "transition-delay", p = "transitionend", d = "on" + n.toLowerCase() + "transitionend", p = g[n] || p, y.fx = {}, y.toggles = {}, y._hasEnd = {}, y._reKeywords = /^(?:node|duration|iterations|easing|delay|on|onstart|onend)$/i, e.Node.DOM_EVENTS[p] = 1, y.NAME = "transition", y.DEFAULT_EASING = "ease", y.DEFAULT_DURATION = .5, y.DEFAULT_DELAY = 0, y._nodeAttrs = {}, y.prototype = {
        constructor: y,
        init: function(e, t) {
            var n = this;
            return n._node = e, !n._running && t && (n._config = t, e._transition = n, n._duration = "duration" in t ? t.duration : n.constructor.DEFAULT_DURATION, n._delay = "delay" in t ? t.delay : n.constructor.DEFAULT_DELAY, n._easing = t.easing || n.constructor.DEFAULT_EASING, n._count = 0, n._running = !1), n
        },
        addProperty: function(t, n) {
            var r = this,
                i = this._node,
                s = e.stamp(i),
                o = e.one(i),
                u = y._nodeAttrs[s],
                a, f, l, c, h;
            u || (u = y._nodeAttrs[s] = {}), c = u[t], n && n.value !== undefined ? h = n.value : n !== undefined && (h = n, n = v), typeof h == "function" && (h = h.call(o, o)), c && c.transition && c.transition !== r && c.transition._count--, r._count++, l = (typeof n.duration != "undefined" ? n.duration : r._duration) || 1e-4, u[t] = {
                value: h,
                duration: l,
                delay: typeof n.delay != "undefined" ? n.delay : r._delay,
                easing: n.easing || r._easing,
                transition: r
            }, a = e.DOM.getComputedStyle(i, t), f = typeof h == "string" ? a : parseFloat(a), y.useNative && f === h && setTimeout(function() {
                r._onNativeEnd.call(i, {
                    propertyName: t,
                    elapsedTime: l
                })
            }, l * 1e3)
        },
        removeProperty: function(t) {
            var n = this,
                r = y._nodeAttrs[e.stamp(n._node)];
            r && r[t] && (delete r[t], n._count--)
        },
        initAttrs: function(t) {
            var n, r = this._node;
            t.transform && !t[y._TRANSFORM] && (t[y._TRANSFORM] = t.transform, delete t.transform);
            for (n in t) t.hasOwnProperty(n) && !y._reKeywords.test(n) && (this.addProperty(n, t[n]), r.style[n] === "" && e.DOM.setStyle(r, n, e.DOM.getComputedStyle(r, n)))
        },
        run: function(t) {
            var n = this,
                r = n._node,
                i = n._config,
                s = {
                    type: "transition:start",
                    config: i
                };
            return n._running || (n._running = !0, i.on && i.on.start && i.on.start.call(e.one(r), s), n.initAttrs(n._config), n._callback = t, n._start()), n
        },
        _start: function() {
            this._runNative()
        },
        _prepDur: function(e) {
            return e = parseFloat(e) * 1e3, e + "ms"
        },
        _runNative: function() {
            var t = this,
                n = t._node,
                r = e.stamp(n),
                i = n.style,
                s = n.ownerDocument.defaultView.getComputedStyle(n),
                o = y._nodeAttrs[r],
                u = "",
                a = s[y._toCamel(f)],
                d = f + ": ",
                v = l + ": ",
                m = c + ": ",
                g = h + ": ",
                b, w, E;
            a !== "all" && (d += a + ",", v += s[y._toCamel(l)] + ",", m += s[y._toCamel(c)] + ",", g += s[y._toCamel(h)] + ",");
            for (E in o) b = y._toHyphen(E), w = o[E], (w = o[E]) && w.transition === t && (E in n.style ? (v += t._prepDur(w.duration) + ",", g += t._prepDur(w.delay) + ",", m += w.easing + ",", d += b + ",", u += b + ": " + w.value + "; ") : this.removeProperty(E));
            d = d.replace(/,$/, ";"), v = v.replace(/,$/, ";"), m = m.replace(/,$/, ";"), g = g.replace(/,$/, ";"), y._hasEnd[r] || (n.addEventListener(p, t._onNativeEnd, ""), y._hasEnd[r] = !0), i.cssText += d + v + m + g + u
        },
        _end: function(t) {
            var n = this,
                r = n._node,
                i = n._callback,
                s = n._config,
                o = {
                    type: "transition:end",
                    config: s,
                    elapsedTime: t
                },
                u = e.one(r);
            n._running = !1, n._callback = null, r && (s.on && s.on.end ? setTimeout(function() {
                s.on.end.call(u, o), i && i.call(u, o)
            }, 1) : i && setTimeout(function() {
                i.call(u, o)
            }, 1))
        },
        _endNative: function(e) {
            var t = this._node,
                n = t.ownerDocument.defaultView.getComputedStyle(t, "")[y._toCamel(f)];
            e = y._toHyphen(e), typeof n == "string" && (n = n.replace(new RegExp("(?:^|,\\s)" + e + ",?"), ","), n = n.replace(/^,|,$/, ""), t.style[u] = n)
        },
        _onNativeEnd: function(t) {
            var n = this,
                r = e.stamp(n),
                i = t,
                s = y._toCamel(i.propertyName),
                o = i.elapsedTime,
                u = y._nodeAttrs[r],
                f = u[s],
                l = f ? f.transition : null,
                c, h;
            l && (l.removeProperty(s), l._endNative(s), h = l._config[s], c = {
                type: "propertyEnd",
                propertyName: s,
                elapsedTime: o,
                config: h
            }, h && h.on && h.on.end && h.on.end.call(e.one(n), c), l._count <= 0 && (l._end(o), n.style[a] = ""))
        },
        destroy: function() {
            var e = this,
                t = e._node;
            t && (t.removeEventListener(p, e._onNativeEnd, !1), e._node = null)
        }
    }, e.Transition = y, e.TransitionNative = y, e.Node.prototype.transition = function(t, n, r) {
        var i = y._nodeAttrs[e.stamp(this._node)],
            s = i ? i.transition || null : null,
            o, u;
        if (typeof t == "string") {
            typeof n == "function" && (r = n, n = null), o = y.fx[t];
            if (n && typeof n == "object") {
                n = e.clone(n);
                for (u in o) o.hasOwnProperty(u) && (u in n || (n[u] = o[u]))
            } else n = o
        } else r = n, n = t;
        return s && !s._running ? s.init(this, n) : s = new y(this._node, n), s.run(r), this
    }, e.Node.prototype.show = function(t, n, r) {
        return this._show(), t && e.Transition && (typeof t != "string" && !t.push && (typeof n == "function" && (r = n, n = t), t = y.SHOW_TRANSITION), this.transition(t, n, r)), this
    }, e.NodeList.prototype.show = function(t, n, r) {
        var i = this._nodes,
            s = 0,
            o;
        while (o = i[s++]) e.one(o).show(t, n, r);
        return this
    };
    var b = function(e, t, n) {
        return function() {
            t && t.call(e), n && typeof n == "function" && n.apply(e._node, arguments)
        }
    };
    e.Node.prototype.hide = function(t, n, r) {
            return t && e.Transition ? (typeof n == "function" && (r = n, n = null), r = b(this, this._hide, r), typeof t != "string" && !t.push && (typeof n == "function" && (r = n, n = t), t = y.HIDE_TRANSITION), this.transition(t, n, r)) : this._hide(), this
        }, e.NodeList.prototype.hide = function(t, n, r) {
            var i = this._nodes,
                s = 0,
                o;
            while (o = i[s++]) e.one(o).hide(t, n, r);
            return this
        }, e.NodeList.prototype
        .transition = function(t, n, r) {
            var i = this._nodes,
                s = this.size(),
                o = 0,
                r = r === !0,
                u;
            while (u = i[o++]) o < s && r ? e.one(u).transition(t) : e.one(u).transition(t, n);
            return this
        }, e.Node.prototype.toggleView = function(t, n, r) {
            this._toggles = this._toggles || [], r = arguments[arguments.length - 1];
            if (typeof t != "string") {
                n = t, this._toggleView(n, r);
                return
            }
            return typeof n == "function" && (n = undefined), typeof n == "undefined" && t in this._toggles && (n = !this._toggles[t]), n = n ? 1 : 0, n ? this._show() : r = b(this, this._hide, r), this._toggles[t] = n, this.transition(e.Transition.toggles[t][n], r), this
        }, e.NodeList.prototype.toggleView = function(t, n, r) {
            var i = this._nodes,
                s = 0,
                o;
            while (o = i[s++]) o = e.one(o), o.toggleView.apply(o, arguments);
            return this
        }, e.mix(y.fx, {
            fadeOut: {
                opacity: 0,
                duration: .5,
                easing: "ease-out"
            },
            fadeIn: {
                opacity: 1,
                duration: .5,
                easing: "ease-in"
            },
            sizeOut: {
                height: 0,
                width: 0,
                duration: .75,
                easing: "ease-out"
            },
            sizeIn: {
                height: function(e) {
                    return e.get("scrollHeight") + "px"
                },
                width: function(e) {
                    return e.get("scrollWidth") + "px"
                },
                duration: .5,
                easing: "ease-in",
                on: {
                    start: function() {
                        var e = this.getStyle("overflow");
                        e !== "hidden" && (this.setStyle("overflow", "hidden"), this._transitionOverflow = e)
                    },
                    end: function() {
                        this._transitionOverflow && (this.setStyle("overflow", this._transitionOverflow), delete this._transitionOverflow)
                    }
                }
            }
        }), e.mix(y.toggles, {
            size: ["sizeOut", "sizeIn"],
            fade: ["fadeOut", "fadeIn"]
        })
}, "3.18.1", {
    requires: ["node-style"]
});
YUI.add("view", function(e, t) {
    function n() {
        n.superclass.constructor.apply(this, arguments)
    }
    e.View = e.extend(n, e.Base, {
        containerTemplate: "<div/>",
        events: {},
        template: "",
        _allowAdHocAttrs: !0,
        initializer: function(t) {
            t || (t = {}), t.containerTemplate && (this.containerTemplate = t.containerTemplate), t.template && (this.template = t.template), this.events = t.events ? e.merge(this.events, t.events) : this.events, this.after("containerChange", this._afterContainerChange)
        },
        destroy: function(e) {
            return e && (e.remove || e["delete"]) && this.onceAfter("destroy", function() {
                this._destroyContainer()
            }), n.superclass.destroy.call(this)
        },
        destructor: function() {
            this.detachEvents(), delete this._container
        },
        attachEvents: function(t) {
            var n = this.get("container"),
                r = e.Object.owns,
                i, s, o, u;
            this.detachEvents(), t || (t = this.events);
            for (u in t) {
                if (!r(t, u)) continue;
                s = t[u];
                for (o in s) {
                    if (!r(s, o)) continue;
                    i = s[o], typeof i == "string" && (i = this[i]);
                    if (!i) continue;
                    this._attachedViewEvents.push(n.delegate(o, i, u, this))
                }
            }
            return this
        },
        create: function(t) {
            return t ? e.one(t) : e.Node.create(this.containerTemplate)
        },
        detachEvents: function() {
            return e.Array.each(this._attachedViewEvents, function(e) {
                e && e.detach()
            }), this._attachedViewEvents = [], this
        },
        remove: function() {
            var e = this.get("container");
            return e && e.remove(), this
        },
        render: function() {
            return this
        },
        _destroyContainer: function() {
            var e = this.get("container");
            e && e.remove(!0)
        },
        _getContainer: function(e) {
            return this._container || (e ? (this._container = e, this.attachEvents()) : (e = this._container = this.create(), this._set("container", e))), e
        },
        _afterContainerChange: function() {
            this.attachEvents(this.events)
        }
    }, {
        NAME: "view",
        ATTRS: {
            container: {
                getter: "_getContainer",
                setter: e.one,
                writeOnce: !0
            }
        },
        _NON_ATTRS_CFG: ["containerTemplate", "events", "template"]
    })
}, "3.18.1", {
    requires: ["base-build", "node-event-delegate"]
});
YUI.add("widget-base", function(e, t) {
    function R(e) {
        var t = this,
            n, r, i = t.constructor;
        t._strs = {}, t._cssPrefix = i.CSS_PREFIX || s(i.NAME.toLowerCase()), e = e || {}, R.superclass.constructor.call(t, e), r = t.get(T), r && (r !== P && (n = r), t.render(n))
    }
    var n = e.Lang,
        r = e.Node,
        i = e.ClassNameManager,
        s = i.getClassName,
        o, u = e.cached(function(e) {
            return e.substring(0, 1).toUpperCase() + e.substring(1)
        }),
        a = "content",
        f = "visible",
        l = "hidden",
        c = "disabled",
        h = "focused",
        p = "width",
        d = "height",
        v = "boundingBox",
        m = "contentBox",
        g = "parentNode",
        y = "ownerDocument",
        b = "auto",
        w = "srcNode",
        E = "body",
        S = "tabIndex",
        x = "id",
        T = "render",
        N = "rendered",
        C = "destroyed",
        k = "strings",
        L = "<div></div>",
        A = "Change",
        O = "loading",
        M = "_uiSet",
        _ = "",
        D = function() {},
        P = !0,
        H = !1,
        B, j = {},
        F = [f, c, d, p, h, S],
        I = e.UA.webkit,
        q = {};
    R.NAME = "widget", B = R.UI_SRC = "ui", R.ATTRS = j, j[x] = {
        valueFn: "_guid",
        writeOnce: P
    }, j[N] = {
        value: H,
        readOnly: P
    }, j[v] = {
        valueFn: "_defaultBB",
        setter: "_setBB",
        writeOnce: P
    }, j[m] = {
        valueFn: "_defaultCB",
        setter: "_setCB",
        writeOnce: P
    }, j[S] = {
        value: null,
        validator: "_validTabIndex"
    }, j[h] = {
        value: H,
        readOnly: P
    }, j[c] = {
        value: H
    }, j[f] = {
        value: P
    }, j[d] = {
        value: _
    }, j[p] = {
        value: _
    }, j[k] = {
        value: {},
        setter: "_strSetter",
        getter: "_strGetter"
    }, j[T] = {
        value: H,
        writeOnce: P
    }, R.CSS_PREFIX = s(R.NAME.toLowerCase()), R.getClassName = function() {
        return s.apply(i, [R.CSS_PREFIX].concat(e.Array(arguments), !0))
    }, o = R.getClassName, R.getByNode = function(t) {
        var n, i = o();
        return t = r.one(t), t && (t = t.ancestor("." + i, !0), t && (n = q[e.stamp(t, !0)])), n || null
    }, e.extend(R, e.Base, {
        getClassName: function() {
            return s.apply(i, [this._cssPrefix].concat(e.Array(arguments), !0))
        },
        initializer: function(t) {
            var n = this.get(v);
            n instanceof r && this._mapInstance(e.stamp(n))
        },
        _mapInstance: function(e) {
            q[e] = this
        },
        destructor: function() {
            var t = this.get(v),
                n;
            t instanceof r && (n = e.stamp(t, !0), n in q && delete q[n], this._destroyBox())
        },
        destroy: function(e) {
            return this._destroyAllNodes = e, R.superclass.destroy.apply(this)
        },
        _destroyBox: function() {
            var e = this.get(v),
                t = this.get(m),
                n = this._destroyAllNodes,
                r;
            r = e && e.compareTo(t), this.UI_EVENTS && this._destroyUIEvents(), this._unbindUI(e), t && (n && t.empty(), t.remove(P)), r || (n && e.empty(), e.remove(P))
        },
        render: function(e) {
            return !this.get(C) && !this.get(N) && (this.publish(T, {
                queuable: H,
                fireOnce: P,
                defaultTargetOnly: P,
                defaultFn: this._defRenderFn
            }), this.fire(T, {
                parentNode: e ? r.one(e) : null
            })), this
        },
        _defRenderFn: function(e) {
            this._parentNode = e.parentNode, this.renderer(), this._set(N, P), this._removeLoadingClassNames()
        },
        renderer: function() {
            var e = this;
            e._renderUI(), e.renderUI(), e._bindUI(), e.bindUI(), e._syncUI(), e.syncUI()
        },
        bindUI: D,
        renderUI: D,
        syncUI: D,
        hide: function() {
            return this.set(f, H)
        },
        show: function() {
            return this.set(f, P)
        },
        focus: function() {
            return this._set(h, P)
        },
        blur: function() {
            return this._set(h, H)
        },
        enable: function() {
            return this.set(c, H)
        },
        disable: function() {
            return this.set(c, P)
        },
        _uiSizeCB: function(e) {
            this.get(m).toggleClass(o(a, "expanded"), e)
        },
        _renderBox: function(e) {
            var t = this,
                n = t.get(m),
                i = t.get(v),
                s = t.get(w),
                o = t.DEF_PARENT_NODE,
                u = s && s.get(y) || i.get(y) || n.get(y);
            s && !s.compareTo(n) && !n.inDoc(u) && s.replace(n), !i.compareTo(n.get(g)) && !i.compareTo(n) && (n.inDoc(u) && n.replace(i), i.appendChild(n)), e = e || o && r.one(o), e ? e.appendChild(i) : i.inDoc(u) || r.one(E).insert(i, 0)
        },
        _setBB: function(e) {
            return this._setBox(this.get(x), e, this.BOUNDING_TEMPLATE, !0)
        },
        _setCB: function(e) {
            return this.CONTENT_TEMPLATE === null ? this.get(v) : this._setBox(null, e, this.CONTENT_TEMPLATE, !1)
        },
        _defaultBB: function() {
            var e = this.get(w),
                t = this.CONTENT_TEMPLATE === null;
            return e && t ? e : null
        },
        _defaultCB: function(e) {
            return this.get(w) || null
        },
        _setBox: function(t, n, i, s) {
            return n = r.one(n), n || (n = r.create(i), s ? this._bbFromTemplate = !0 : this._cbFromTemplate = !0), n.get(x) || n.set(x, t || e.guid()), n
        },
        _renderUI: function() {
            this._renderBoxClassNames(), this._renderBox(this._parentNode)
        },
        _renderBoxClassNames: function() {
            var e = this._getClasses(),
                t, n = this.get(v),
                r;
            n.addClass(o());
            for (r = e.length - 3; r >= 0; r--) t = e[r], n.addClass(t.CSS_PREFIX || s(t.NAME.toLowerCase()));
            this.get(m).addClass(this.getClassName(a))
        },
        _removeLoadingClassNames: function() {
            var e = this.get(v),
                t = this.get(m),
                n = this.getClassName(O),
                r = o(O);
            e.removeClass(r).removeClass(n), t.removeClass(r).removeClass(n)
        },
        _bindUI: function() {
            this._bindAttrUI(this._UI_ATTRS.BIND), this._bindDOM()
        },
        _unbindUI: function(e) {
            this._unbindDOM(e)
        },
        _bindDOM: function() {
            var t = this.get(v).get(y),
                n = R._hDocFocus;
            n || (n = R._hDocFocus = t.on("focus", this._onDocFocus, this), n.listeners = {
                count: 0
            }), n.listeners[e.stamp(this, !0)] = !0, n.listeners.count++, I && (this._hDocMouseDown = t.on("mousedown", this._onDocMouseDown, this))
        },
        _unbindDOM: function(t) {
            var n = R._hDocFocus,
                r = e.stamp(this, !0),
                i, s = this._hDocMouseDown;
            n && (i = n.listeners, i[r] && (delete i[r], i.count--), i.count === 0 && (n.detach(), R._hDocFocus = null)), I && s && s.detach()
        },
        _syncUI: function() {
            this._syncAttrUI(this._UI_ATTRS.SYNC)
        },
        _uiSetHeight: function(e) {
            this._uiSetDim(d, e), this._uiSizeCB(e !== _ && e !== b)
        },
        _uiSetWidth: function(e) {
            this._uiSetDim(p, e)
        },
        _uiSetDim: function(e, t) {
            this.get(v).setStyle(e, n.isNumber(t) ? t + this.DEF_UNIT : t)
        },
        _uiSetVisible: function(e) {
            this.get(v).toggleClass(this.getClassName(l), !e)
        },
        _uiSetDisabled: function(e) {
            this.get(v).toggleClass(this.getClassName(c), e)
        },
        _uiSetFocused: function(e, t) {
            var n = this.get(v);
            n.toggleClass(this.getClassName(h), e), t !== B && (e ? n.focus() : n.blur())
        },
        _uiSetTabIndex: function(e) {
            var t = this.get(v);
            n.isNumber(e) ? t.set(S, e) : t.removeAttribute(S)
        },
        _onDocMouseDown: function(e) {
            this._domFocus && this._onDocFocus(e)
        },
        _onDocFocus: function(e) {
            var t = R.getByNode(e.target),
                n = R._active;
            n && n !== t && (n._domFocus = !1, n._set(h, !1, {
                src: B
            }), R._active = null), t && (t._domFocus = !0, t._set(h, !0, {
                src: B
            }), R._active = t)
        },
        toString: function() {
            return this.name + "[" + this.get(x) + "]"
        },
        DEF_UNIT: "px",
        DEF_PARENT_NODE: null,
        CONTENT_TEMPLATE: L,
        BOUNDING_TEMPLATE: L,
        _guid: function() {
            return e.guid()
        },
        _validTabIndex: function(e) {
            return n.isNumber(e) || n.isNull(e)
        },
        _bindAttrUI: function(e) {
            var t, n = e.length;
            for (t = 0; t < n; t++) this.after(e[t] + A, this._setAttrUI)
        },
        _syncAttrUI: function(e) {
            var t, n = e.length,
                r;
            for (t = 0; t < n; t++) r = e[t], this[M + u(r)](this.get(r))
        },
        _setAttrUI: function(e) {
            e.target === this && this[M + u(e.attrName)](e.newVal, e.src)
        },
        _strSetter: function(t) {
            return e.merge(this.get(k), t)
        },
        getString: function(e) {
            return this.get(k)[e]
        },
        getStrings: function() {
            return this.get(k)
        },
        _UI_ATTRS: {
            BIND: F,
            SYNC: F
        }
    }), e.Widget = R
}, "3.18.1", {
    requires: ["attribute", "base-base", "base-pluginhost", "classnamemanager", "event-focus", "node-base", "node-style"],
    skinnable: !0
});
YUI.add("widget-htmlparser", function(e, t) {
    var n = e.Widget,
        r = e.Node,
        i = e.Lang,
        s = "srcNode",
        o = "contentBox";
    n.HTML_PARSER = {}, n._buildCfg = {
        aggregates: ["HTML_PARSER"]
    }, n.ATTRS[s] = {
        value: null,
        setter: r.one,
        getter: "_getSrcNode",
        writeOnce: !0
    }, e.mix(n.prototype, {
        _getSrcNode: function(e) {
            return e || this.get(o)
        },
        _preAddAttrs: function(e, t, n) {
            var r = {
                id: e.id,
                boundingBox: e.boundingBox,
                contentBox: e.contentBox,
                srcNode: e.srcNode
            };
            this.addAttrs(r, t, n), delete e.boundingBox, delete e.contentBox, delete e.srcNode, delete e.id, this._applyParser && this._applyParser(t)
        },
        _applyParsedConfig: function(t, n, r) {
            return r ? e.mix(n, r, !1) : n
        },
        _applyParser: function(t) {
            var n = this,
                r = this._getNodeToParse(),
                s = n._getHtmlParser(),
                o, u;
            s && r && e.Object.each(s, function(e, t, s) {
                u = null, i.isFunction(e) ? u = e.call(n, r) : i.isArray(e) ? (u = r.all(e[0]), u.isEmpty() && (u = null)) : u = r.one(e), u !== null && u !== undefined && (o = o || {}, o[t] = u)
            }), t = n._applyParsedConfig(r, t, o)
        },
        _getNodeToParse: function() {
            var e = this.get("srcNode");
            return this._cbFromTemplate ? null : e
        },
        _getHtmlParser: function() {
            var t = this._getClasses(),
                n = {},
                r, i;
            for (r = t.length - 1; r >= 0; r--) i = t[r].HTML_PARSER, i && e.mix(n, i, !0);
            return n
        }
    })
}, "3.18.1", {
    requires: ["widget-base"]
});
YUI.add("widget-position-align", function(e, t) {
    function c(e) {}
    var n = e.Lang,
        r = "align",
        i = "alignOn",
        s = "visible",
        o = "boundingBox",
        u = "offsetWidth",
        a = "offsetHeight",
        f = "region",
        l = "viewportRegion";
    c.ATTRS = {
        align: {
            value: null
        },
        centered: {
            setter: "_setAlignCenter",
            lazyAdd: !1,
            value: !1
        },
        alignOn: {
            value: [],
            validator: e.Lang.isArray
        }
    }, c.TL = "tl", c.TR = "tr", c.BL = "bl", c.BR = "br", c.TC = "tc", c.RC = "rc", c.BC = "bc", c.LC = "lc", c.CC = "cc", c.prototype = {
        initializer: function() {
            this._posNode || e.error("WidgetPosition needs to be added to the Widget, before WidgetPositionAlign is added"), e.after(this._bindUIPosAlign, this, "bindUI"), e.after(this._syncUIPosAlign, this, "syncUI")
        },
        _posAlignUIHandles: null,
        destructor: function() {
            this._detachPosAlignUIHandles()
        },
        _bindUIPosAlign: function() {
            this.after("alignChange", this._afterAlignChange), this.after("alignOnChange", this._afterAlignOnChange), this.after("visibleChange", this._syncUIPosAlign)
        },
        _syncUIPosAlign: function() {
            var e = this.get(r);
            this._uiSetVisiblePosAlign(this.get(s)), e && this._uiSetAlign(e.node, e.points)
        },
        align: function(e, t) {
            return arguments.length ? this.set(r, {
                node: e,
                points: t
            }) : this._syncUIPosAlign(), this
        },
        centered: function(e) {
            return this.align(e, [c.CC, c.CC])
        },
        _setAlignCenter: function(e) {
            return e && this.set(r, {
                node: e === !0 ? null : e,
                points: [c.CC, c.CC]
            }), e
        },
        _uiSetAlign: function(t, r) {
            if (!n.isArray(r) || r.length !== 2) {
                e.error("align: Invalid Points Arguments");
                return
            }
            var i = this._getRegion(t),
                s, o, u;
            if (!i) return;
            s = r[0], o = r[1];
            switch (o) {
                case c.TL:
                    u = [i.left, i.top];
                    break;
                case c.TR:
                    u = [i.right, i.top];
                    break;
                case c.BL:
                    u = [i.left, i.bottom];
                    break;
                case c.BR:
                    u = [i.right, i.bottom];
                    break;
                case c.TC:
                    u = [i.left + Math.floor(i.width / 2), i.top];
                    break;
                case c.BC:
                    u = [i.left + Math.floor(i.width / 2), i.bottom];
                    break;
                case c.LC:
                    u = [i.left, i.top + Math.floor(i.height / 2)];
                    break;
                case c.RC:
                    u = [i.right, i.top + Math.floor(i.height / 2)];
                    break;
                case c.CC:
                    u = [i.left + Math.floor(i.width / 2), i.top + Math.floor(i.height / 2)];
                    break;
                default:
            }
            u && this._doAlign(s, u[0], u[1])
        },
        _uiSetVisiblePosAlign: function(e) {
            e ? this._attachPosAlignUIHandles() : this._detachPosAlignUIHandles()
        },
        _attachPosAlignUIHandles: function() {
            if (this._posAlignUIHandles) return;
            var t = this.get(o),
                n = e.bind(this._syncUIPosAlign, this),
                r = [];
            e.Array.each(this.get(i), function(i) {
                var s = i.eventName,
                    o = e.one(i.node) || t;
                s && r.push(o.on(s, n))
            }), this._posAlignUIHandles = r
        },
        _detachPosAlignUIHandles: function() {
            var t = this._posAlignUIHandles;
            t && ((new e.EventHandle(t)).detach(), this._posAlignUIHandles = null)
        },
        _doAlign: function(e, t, n) {
            var r = this._posNode,
                i;
            switch (e) {
                case c.TL:
                    i = [t, n];
                    break;
                case c.TR:
                    i = [t - r.get(u), n];
                    break;
                case c.BL:
                    i = [t, n - r.get(a)];
                    break;
                case c.BR:
                    i = [t - r.get(u), n - r.get(a)];
                    break;
                case c.TC:
                    i = [t - r.get(u) / 2, n];
                    break;
                case c.BC:
                    i = [t - r.get(u) / 2, n - r.get(a)];
                    break;
                case c.LC:
                    i = [t, n - r.get(a) / 2];
                    break;
                case c.RC:
                    i = [t - r.get(u), n - r.get(a) / 2];
                    break;
                case c.CC:
                    i = [t - r.get(u) / 2, n - r.get(a) / 2];
                    break;
                default:
            }
            i && this.move(i)
        },
        _getRegion: function(t) {
            var n;
            return t ? (t = e.Node.one(t), t && (n = t.get(f))) : n = this._posNode.get(l), n
        },
        _afterAlignChange: function(e) {
            var t = e.newVal;
            t && this._uiSetAlign(t.node, t.points)
        },
        _afterAlignOnChange: function(e) {
            this._detachPosAlignUIHandles(), this.get(s) && this._attachPosAlignUIHandles()
        }
    }, e.WidgetPositionAlign = c
}, "3.18.1", {
    requires: ["widget-position"]
});
YUI.add("widget-position", function(e, t) {
    function d(e) {}
    var n = e.Lang,
        r = e.Widget,
        i = "xy",
        s = "position",
        o = "positioned",
        u = "boundingBox",
        a = "relative",
        f = "renderUI",
        l = "bindUI",
        c = "syncUI",
        h = r.UI_SRC,
        p = "xyChange";
    d.ATTRS = {
        x: {
            setter: function(e) {
                this._setX(e)
            },
            getter: function() {
                return this._getX()
            },
            lazyAdd: !1
        },
        y: {
            setter: function(e) {
                this._setY(e)
            },
            getter: function() {
                return this._getY()
            },
            lazyAdd: !1
        },
        xy: {
            value: [0, 0],
            validator: function(e) {
                return this._validateXY(e)
            }
        }
    }, d.POSITIONED_CLASS_NAME = r.getClassName(o), d.prototype = {
        initializer: function() {
            this._posNode = this.get(u), e.after(this._renderUIPosition, this, f), e.after(this._syncUIPosition, this, c), e.after(this._bindUIPosition, this, l)
        },
        _renderUIPosition: function() {
            this._posNode.addClass(d.POSITIONED_CLASS_NAME)
        },
        _syncUIPosition: function() {
            var e = this._posNode;
            e.getStyle(s) === a && this.syncXY(), this._uiSetXY(this.get(i))
        },
        _bindUIPosition: function() {
            this.after(p, this._afterXYChange)
        },
        move: function() {
            var e = arguments,
                t = n.isArray(e[0]) ? e[0] : [e[0], e[1]];
            this.set(i, t)
        },
        syncXY: function() {
            this.set(i, this._posNode.getXY(), {
                src: h
            })
        },
        _validateXY: function(e) {
            return n.isArray(e) && n.isNumber(e[0]) && n.isNumber(e[1])
        },
        _setX: function(e) {
            this.set(i, [e, this.get(i)[1]])
        },
        _setY: function(e) {
            this.set(i, [this.get(i)[0], e])
        },
        _getX: function() {
            return this.get(i)[0]
        },
        _getY: function() {
            return this.get(i)[1]
        },
        _afterXYChange: function(e) {
            e.src != h && this._uiSetXY(e.newVal)
        },
        _uiSetXY: function(e) {
            this._posNode.setXY(e)
        }
    }, e.WidgetPosition = d
}, "3.18.1", {
    requires: ["base-build", "node-screen", "widget"]
});
YUI.add("widget-skin", function(e, t) {
    var n = "boundingBox",
        r = "contentBox",
        i = "skin",
        s = e.ClassNameManager.getClassName;
    e.Widget.prototype.getSkinName = function(e) {
        var t = this.get(r) || this.get(n),
            o, u;
        return e = e || s(i, ""), u = new RegExp("\\b" + e + "(\\S+)"), t && t.ancestor(function(e) {
            return o = e.get("className").match(u), o
        }), o ? o[1] : null
    }
}, "3.18.1", {
    requires: ["widget-base"]
});
YUI.add("widget-uievents", function(e, t) {
    var n = "boundingBox",
        r = e.Widget,
        i = "render",
        s = e.Lang,
        o = ":",
        u = e.Widget._uievts = e.Widget._uievts || {};
    e.mix(r.prototype, {
        _destroyUIEvents: function() {
            var t = e.stamp(this, !0);
            e.each(u, function(n, r) {
                n.instances[t] && (delete n.instances[t], e.Object.isEmpty(n.instances) && (n.handle.detach(), u[r] && delete u[r]))
            })
        },
        UI_EVENTS: e.Node.DOM_EVENTS,
        _getUIEventNode: function() {
            return this.get(n)
        },
        _createUIEvent: function(t) {
            var n = this._getUIEventNode(),
                i = e.stamp(n) + t,
                s = u[i],
                o;
            s || (o = n.delegate(t, function(e) {
                var t = r.getByNode(this);
                t && t._filterUIEvent(e) && t.fire(e.type, {
                    domEvent: e
                })
            }, "." + e.Widget.getClassName()), u[i] = s = {
                instances: {},
                handle: o
            }), s.instances[e.stamp(this)] = 1
        },
        _filterUIEvent: function(e) {
            return e.currentTarget.compareTo(e.container) || e.container.compareTo(this._getUIEventNode())
        },
        _getUIEvent: function(e) {
            if (s.isString(e)) {
                var t = this.parseType(e)[1],
                    n, r;
                return t && (n = t.indexOf(o), n > -1 && (t = t.substring(n + o.length)), this.UI_EVENTS[t] && (r = t)), r
            }
        },
        _initUIEvent: function(e) {
            var t = this._getUIEvent(e),
                n = this._uiEvtsInitQueue || {};
            t && !n[t] && (this._uiEvtsInitQueue = n[t] = 1, this.after(i, function() {
                this._createUIEvent(t), delete this._uiEvtsInitQueue[t]
            }))
        },
        on: function(e) {
            return this._initUIEvent(e), r.superclass.on.apply(this, arguments)
        },
        publish: function(e, t) {
            var n = this._getUIEvent(e);
            return n && t && t.defaultFn && this._initUIEvent(n), r.superclass.publish.apply(this, arguments)
        }
    }, !0)
}, "3.18.1", {
    requires: ["node-event-delegate", "widget-base"]
});